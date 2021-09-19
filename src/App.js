import React from 'react';
import './App.css';
import { Form, Select } from 'antd';

const data_test = {
  "ProductId": 281,
  "ProductName": "Installation TX2_90 / CS9",
  "ProductSystemId": "3RPTX2_90_INSTALL",
  "FavoritesEnabled": true,
  "ProductFavoritesInfo": {
      "IsInFavoriteEditMode": false,
      "ProductName": "Installation TX2_90 / CS9",
      "ProductDescription": "",
      "AllowToShareWithCompanyUsers": true,
      "AllowToShareWithAllUsers": true,
      "FavoriteId": 0,
      "FavoriteName": "",
      "VisibleToEveryone": false,
      "IsFavoriteShared": false,
      "IsFavoritesVisible": true
  },
  "CartExists": false,
  "StdAttrCode": 0,
  "CurrencySign": "€",
  "CurrencyISOCode": "EUR",
  "CanAddToQuote": true,
  "CanCancel": false,
  "IsNestedProduct": false,
  "IsABS": false,
  "ParentProductName": "",
  "Completed": false,
  "HasIncompleteChildren": true,
  "IncompleteMessages": [],
  "IncompleteAttributes": [
      "Controller Power Supply",
      "EtherCAT Master Remote IO",
      "EtherCAT Coupler Remote IO",
      "EtherCAT module analog Input",
      "EtherCAT module analog Output",
      "EtherCAT serial RS232 link",
      "EtherCAT serial RS485 link",
      "EtherCAT add pw terminal opt",
      "EtherCAT Module Digital IO",
      "EtherCAT incremental encoder",
      "Connection output",
      "Paint type",
      "Paint finish",
      "Paint brigthness",
      "Paint color",
      "Arm Mechanical Version",
      "Paint preparation",
      "Arm Preseries version"
  ],
  "InvalidMessages": [],
  "FailedValidations": [],
  "ErrorMessages": [],
  "Responder": {
      "BaseMRCPrice": "0.00",
      "BaseProductPrice": "0.00",
      "BasePrice": "0.00",
      "PartNumber": "3RPTX2_90_INSTALL",
      "Name": "Installation TX2_90 / CS9",
      "Description": "",
      "LongDescription": "",
      "TotalMRCPrice": "€0.00",
      "TotalYRCPrice": "",
      "TotalPrice": "€0.00",
      "LineItems": [
          {
              "DisplayValue": "",
              "Label": "Arm TX2_90",
              "StdAttrCode": 1059,
              "Name": "Bom Items",
              "PAV_ID": 0,
              "Quantity": "1",
              "PartNumber": "3APTX2_90",
              "Price": "0.00",
              "RecurringPrice": "0.00",
              "BasePrice": "0.00",
              "MissingPriceBook": false,
              "ShowOneTimePrice": true,
              "ShowRecurringPrice": false,
              "CustomLabel": "",
              "Inconsistent": false
          },
          {
              "DisplayValue": "",
              "Label": "Controller CS9",
              "StdAttrCode": 1059,
              "Name": "Bom Items",
              "PAV_ID": 0,
              "Quantity": "1",
              "PartNumber": "3CPCS9",
              "Price": "0.00",
              "RecurringPrice": "0.00",
              "BasePrice": "0.00",
              "MissingPriceBook": false,
              "ShowOneTimePrice": true,
              "ShowRecurringPrice": false,
              "CustomLabel": "",
              "Inconsistent": false
          }
      ],
      "Attributes": [],
      "ResponderTemplateName": "",
      "ProductImage": "/Cached/v-637673987040000000/mt/NOTIONEDGEFRANCE_TST/images/productimages/TX2 Medi Normal.png/",
      "HideResetConfiguration": true,
      "ExtendedBasePrice": "0.00",
      "ExtendedBaseMRCPrice": "0.00"
  },
  "Breadcrumbs": {
      "Items": [
          {
              "Name": "Home Category",
              "Url": "/Catalogue/CategoryTree.aspx?Category=-1"
          },
          {
              "Name": "Help me choose: Guided Selling POC",
              "Url": "/Catalogue/CategoryTree.aspx"
          },
          {
              "Name": "Installation TX2_90 / CS9",
              "Url": ""
          }
      ],
      "ShowCurrentCart": true
  },
  "Tabs": [
      {
          "Id": 47,
          "IsIncomplete": false,
          "IsSelected": true,
          "Name": "General",
          "DisplayName": "General"
      },
      {
          "Id": 48,
          "IsIncomplete": true,
          "IsSelected": false,
          "Name": "Arm",
          "DisplayName": "Arm"
      },
      {
          "Id": 49,
          "IsIncomplete": false,
          "IsSelected": false,
          "Name": "Interco",
          "DisplayName": "Interco"
      },
      {
          "Id": 50,
          "IsIncomplete": true,
          "IsSelected": false,
          "Name": "Controler",
          "DisplayName": "Controler"
      },
      {
          "Id": 51,
          "IsIncomplete": false,
          "IsSelected": false,
          "Name": "Teach",
          "DisplayName": "Teach"
      },
      {
          "Id": 52,
          "IsIncomplete": true,
          "IsSelected": false,
          "Name": "Option",
          "DisplayName": "Option"
      },
      {
          "Id": 53,
          "IsIncomplete": false,
          "IsSelected": false,
          "Name": "Soft",
          "DisplayName": "Soft"
      }
  ],
  "Attributes": [
      {
          "Name": "Family",
          "Description": "",
          "PA_ID": 14324,
          "DisplayAs": 3,
          "Hint": "",
          "Incomplete": false,
          "Required": true,
          "Label": "Select Family",
          "StdAttrCode": 984,
          "DataType": "N/A",
          "MLR": 0,
          "MLC": 0,
          "UserInput": "",
          "Quantity": "1",
          "IsWholeRow": false,
          "IsEnabled": false,
          "IsLineItem": false,
          "Values": [
              {
                  "PAV_ID": 0,
                  "Selected": false,
                  "ValueDisplay": "No option selected"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 49446,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "RX",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "RX"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 49452,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "Soft",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "SOFT"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 49449,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "TP",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "TP"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 49448,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "TS",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "TS"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 49451,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "TS2",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "TS2"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 49447,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "TX",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "TX"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 49450,
                  "ProductSystemId": "",
                  "Selected": true,
                  "ValueDisplay": "TX2",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "TX2"
              }
          ],
          "ValidationRules": [],
          "HasConflict": false
      },
      {
          "Name": "Product Change Control",
          "Description": "",
          "PA_ID": 2985,
          "DisplayAs": 3,
          "Hint": "",
          "Incomplete": false,
          "Required": true,
          "Label": "Select Product Change Control",
          "StdAttrCode": 1010,
          "DataType": "N/A",
          "MLR": 0,
          "MLC": 0,
          "UserInput": "",
          "Quantity": "1",
          "IsWholeRow": false,
          "IsEnabled": true,
          "IsLineItem": false,
          "Values": [
              {
                  "PAV_ID": 0,
                  "Selected": false,
                  "ValueDisplay": "No option selected"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 9208,
                  "ProductSystemId": "",
                  "Selected": true,
                  "ValueDisplay": "No",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "NO"
              }
          ],
          "ValidationRules": [],
          "HasConflict": false
      },
      {
          "Name": "Absolute Calibration",
          "Description": "Absolute calibration",
          "PA_ID": 2981,
          "DisplayAs": 3,
          "Hint": "",
          "Incomplete": false,
          "Required": true,
          "Label": "Select Absolute Calibration",
          "StdAttrCode": 1006,
          "DataType": "N/A",
          "MLR": 0,
          "MLC": 0,
          "UserInput": "",
          "Quantity": "1",
          "IsWholeRow": false,
          "IsEnabled": true,
          "IsLineItem": false,
          "Values": [
              {
                  "PAV_ID": 0,
                  "Selected": false,
                  "ValueDisplay": "No option selected"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 9136,
                  "ProductSystemId": "",
                  "Selected": true,
                  "ValueDisplay": "No",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "NO"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 9137,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "Yes",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "YES"
              }
          ],
          "ValidationRules": [],
          "HasConflict": false
      },
      {
          "Name": "Application type",
          "Description": "",
          "PA_ID": 2958,
          "DisplayAs": 3,
          "Hint": "",
          "Incomplete": false,
          "Required": true,
          "Label": "Select Application type",
          "StdAttrCode": 983,
          "DataType": "N/A",
          "MLR": 0,
          "MLC": 0,
          "UserInput": "",
          "Quantity": "0",
          "IsWholeRow": false,
          "IsEnabled": true,
          "IsLineItem": false,
          "Values": [
              {
                  "PAV_ID": 0,
                  "Selected": false,
                  "ValueDisplay": "No option selected"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 9031,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "Clean Room (ISO 2)",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "SCR"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 9027,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "Electrostatic Disch.Protection",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "ESD"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 9029,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "Humid Environment 2",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "HE2"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 9032,
                  "ProductSystemId": "",
                  "Selected": true,
                  "ValueDisplay": "Medical",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "STER"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 9025,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "Standard",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "STD"
              },
              {
                  "ImageOff": "",
                  "ImageOn": "",
                  "ImageOffAltText": "",
                  "ImageOnAltText": "",
                  "PAV_ID": 9034,
                  "ProductSystemId": "",
                  "Selected": false,
                  "ValueDisplay": "Touch",
                  "Quantity": "1",
                  "Description": "",
                  "Price": "0.00",
                  "ValueCode": "TOUCH"
              }
          ],
          "ValidationRules": [],
          "HasConflict": false
      }
  ],
  "ConfigurationImport": {
      "ShowProductConfigurationTemplate": true,
      "AllowConfigurationImport": false,
      "ConfigurationTemplate": "",
      "ConfigurationFileName": ""
  },
  "MainItemsNumber": 1,
  "HasGuid": false,
  "HiddenAttributes": [],
  "ConflictMessages": [],
  "ProductNotLoaded": false,
  "ShouldShowConflictsTab": false,
  "NumberOfConflicts": 0,
  "IsSapConfigurableProduct": true
}

class App extends React.Component {
  
  formRef = React.createRef();

  constructor(props) {
    super(props);
    const id = 'antd-staubli-configurator';
    this.state = {
      loading: true,
      id: id,
      taskIdRequestData: `${id}-requestData`,
      taskIdAttributeChangeEvent: `${id}-attributeChangeEvent`,
      data: data_test
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
        acc[attr.Name.replace(/ /g, '')] = attr.Values.find(v=>v.Selected)?.ValueCode || 'empty';
        return acc;
      }));
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
              acc[attr.Name.replace(/ /g, '')] = attr.Values.find(v=>v.Selected)?.ValueCode || 'empty';
              return acc;
            }, {})}>
              {this.state.data.Attributes.map((item) =>
              <Form.Item
                label={item.Name}
                name={item.Name.replace(/ /g, '')}
                rules={[{ required: true, message: `Please input ${item.Name}!` }]}>
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
