(this["webpackJsonpantd-staubli-configurator"]=this["webpackJsonpantd-staubli-configurator"]||[]).push([[0],{171:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(22),r=a.n(i),u=(a(98),a(81)),o=a(82),c=a(93),d=a(90),l=(a(99),a(174)),f=a(175),p=a(19),b=function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(t){var n;Object(u.a)(this,a),(n=e.call(this,t)).formRef=s.a.createRef(),n.onMessageReceived=function(t){t.data.taskId===n.state.taskIdRequestData&&n.update(t),t.data.taskId===n.state.taskIdAttributeChangeEvent&&n.requestData()},n.requestData=function(){window.parent.postMessage({iframe:n.state.id,taskId:n.state.taskIdRequestData,query:[{api:"/api/rd/v1/Configurator",function:"getModel",arguments:[{fakekey:"fakevalue"}]}],response:[],status:"request"},"https://eusb.webcomcpq.com/")},n.update=function(t){var e=t.data.response.find((function(t){return"/api/rd/v1/Configurator"===t.api&&"getModel"===t.function}));n.formRef&&n.formRef.current&&n.formRef.current.setFieldsValue(e.data.Attributes.reduce((function(t,e){var a;return t[e.PA_ID]=(null===(a=e.Values.find((function(t){return t.Selected})))||void 0===a?void 0:a.ValueCode)||"empty",t}),{})),n.setState({loading:!1,data:e.data})},n.changeHandler=function(t,e){n.setState({loading:!1,data:n.state.data}),window.parent.postMessage({runScript:!0,script:"\n                selectedValue = cpq.models.configurator.attributes().find(a => a.id() == ".concat(t.PA_ID,").values().find(v => v.pavId == ").concat(e.PAV_ID,");\n                                cpq.models.configurator.attributes().find(a => a.id() == ").concat(t.PA_ID,").selectedValue(selectedValue);\n              ")},"https://eusb.webcomcpq.com/")};var i="antd-staubli-configurator";return n.state={loading:!0,id:i,taskIdRequestData:"".concat(i,"-requestData"),taskIdAttributeChangeEvent:"".concat(i,"-attributeChangeEvent"),data:{Attributes:[]}},window.addEventListener("message",n.onMessageReceived,!1),n.requestData(),window.parent.postMessage({runScript:!0,script:"\n                cpq.models.configurator.attributes.subscribe(() => {\n                  let attributeChangeEvent = {\n                    taskId: '".concat(n.state.taskIdAttributeChangeEvent,"'\n                  };\n                  let iframe = document.getElementById('").concat(n.state.id,'\');\n                  iframe.contentWindow.postMessage(attributeChangeEvent, "https://brspnnggrt.github.io/");\n                });\n              ')},"https://eusb.webcomcpq.com/"),n}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"App-content",children:[this.state.loading&&Object(p.jsx)("span",{children:"loading data..."}),!this.state.loading&&Object(p.jsx)(l.a,{ref:this.formRef,name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:null,onFinishFailed:null,autoComplete:"off",initialValues:this.state.data.Attributes.reduce((function(t,e){var a;return t[e.PA_ID]=(null===(a=e.Values.find((function(t){return t.Selected})))||void 0===a?void 0:a.ValueCode)||"empty",t}),{}),children:this.state.data.Attributes.map((function(e){return Object(p.jsx)(l.a.Item,{label:e.Name,name:e.PA_ID,rules:[{required:e.Required,message:"Please input ".concat(e.Name,"!")}],children:Object(p.jsx)(f.a,{disabled:!e.IsEnabled,onChange:function(a){return t.changeHandler(e,e.Values.find((function(t){return(t.ValueCode||"empty")==a})))},children:e.Values.map((function(t){return Object(p.jsx)(f.a.Option,{value:t.ValueCode||"empty",children:t.ValueDisplay})}))})})}))})]})})}}]),a}(s.a.Component),g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,177)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),i(t),r(t)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),g()},98:function(t,e,a){},99:function(t,e,a){}},[[171,1,2]]]);
//# sourceMappingURL=main.1e936c27.chunk.js.map