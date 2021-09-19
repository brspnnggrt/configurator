import React from 'react';
import './App.css';
import { Form, Select, Modal, Button } from 'antd';
import { Document, Page, pdfjs } from 'react-pdf';

const infoModal = () => {
  Modal.info({
    title: 'Datasheet',
    width: '90%',
    style: {top: '25px'},
    content: (
      <Document file={require(`./281.pdf`).default}>
        <Page pageNumber={2} scale={1} width={600}/>
      </Document> 
    ),
    onOk() {},
  });
}

class App extends React.Component {
  
  formRef = React.createRef();

  constructor(props) {
    super(props);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const id = 'antd-staubli-configurator';
    this.state = {
      loading: true,
      id: id,
      taskIdRequestData: `${id}-requestData`,
      taskIdAttributeChangeEvent: `${id}-attributeChangeEvent`,
      data: { Attributes: []}
    };
    window.addEventListener("message", this.onMessageReceived, false);
    this.requestData();

    window.parent.postMessage({
      runScript: true,
      script: `
                cpq.models.configurator.attributes.subscribe(() => {
                  let attributeChangeEvent = {
                    taskId: '${this.state.taskIdAttributeChangeEvent}'
                  };
                  let iframe = document.getElementById('${this.state.id}');
                  iframe.contentWindow.postMessage(attributeChangeEvent, "https://brspnnggrt.github.io/");
                });
              `
    }, "https://eusb.webcomcpq.com/");
  }

  onMessageReceived = event => {
    if (event.data.taskId === this.state.taskIdRequestData) this.update(event);
    if (event.data.taskId === this.state.taskIdAttributeChangeEvent) this.requestData();
  };

  requestData = () => {
    window.parent.postMessage({
      iframe: this.state.id,
      taskId: this.state.taskIdRequestData,
      query: [{
        api: '/api/rd/v1/Configurator',
        function: 'getModel',
        arguments: [{
          'fakekey': 'fakevalue'
        }]
      }],
      response: [],
      status: 'request'
    }, "https://eusb.webcomcpq.com/");
  };

  update = event => {
    // prepare data
    let model = event.data.response.find(r => r.api === '/api/rd/v1/Configurator' && r.function === 'getModel');

    if (this.formRef && this.formRef.current){
      this.formRef.current.setFieldsValue(model.data.Attributes.reduce((acc, attr) => { 
        acc[attr.PA_ID] = attr.Values.find(v=>v.Selected)?.ValueCode || 'empty';
        return acc;
      }, {}));
    }

    // update state if data available
    this.setState({
      loading: false,
      data: model.data
    });
  };

  changeHandler = (item, innerItem) => {
    // innerItem.Selected = checked;
    //this.state.data.Attributes.find(a => a == item).Values.find(v => v == innerItem).Selected = checked;
    this.setState({
      loading: false,
      data: this.state.data
    });
    window.parent.postMessage({
      runScript: true,
      script: `
                selectedValue = cpq.models.configurator.attributes().find(a => a.id() == ${item.PA_ID}).values().find(v => v.pavId == ${innerItem.PAV_ID});
                                cpq.models.configurator.attributes().find(a => a.id() == ${item.PA_ID}).selectedValue(selectedValue);
              `
    }, "https://eusb.webcomcpq.com/");
    // this.requestData();
  }

  render() {
    return (

      // this.state.data.Attributes[].Values[].ValueDisplay

      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{'height': '100px'}}/>
        </header> */}
        <div className="App-content">
          {this.state.loading &&
            <span>loading data...</span>
          }
          {!this.state.loading &&
            <Form
            ref={this.formRef}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            // initialValues={{ remember: true }}
            onFinish={null}
            onFinishFailed={null}
            autoComplete="off"
            initialValues={this.state.data.Attributes.reduce((acc, attr) => { 
              acc[attr.PA_ID] = attr.Values.find(v=>v.Selected)?.ValueCode || 'empty';
              return acc;
            }, {})}>
              {this.state.data.Attributes.map((item) =>
              <Form.Item
                label={item.Name == 'Family ' ? <div><span>Family</span><Button type="secondary" onClick={() => infoModal()}>Datasheet</Button></div> : item.Name}
                name={item.PA_ID}
                rules={[{ required: item.Required, message: `Please input ${item.Name}!` }]}>
                <Select disabled={!item.IsEnabled} onChange={(value) => this.changeHandler(item, item.Values.find(v=>(v.ValueCode || 'empty')==value))}>
                  {item.Values.map(value => 
                    <Select.Option value={value.ValueCode || 'empty'}>{value.ValueDisplay}</Select.Option>
                  )}
                </Select>
              </Form.Item>
              )}
            </Form>
          }
        </div>
      </div>
    );
  }
}

export default App;


