(this["webpackJsonpantd-staubli-configurator"]=this["webpackJsonpantd-staubli-configurator"]||[]).push([[0],{104:function(t,e){},134:function(t,e,a){},135:function(t,e,a){},161:function(t,e){},162:function(t,e){},163:function(t,e){},164:function(t,e){},165:function(t,e){},170:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/281.55c188b1.pdf"},238:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(26),r=a.n(s),c=(a(134),a(116)),o=a(117),u=a(129),d=a(125),l=(a(135),a(243)),f=a(241),p=a(64),b=a(242),g=a(67),m=a(29),h=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;Object(c.a)(this,n),(a=e.call(this,t)).formRef=i.a.createRef(),a.onMessageReceived=function(t){t.data.taskId===a.state.taskIdRequestData&&a.update(t),t.data.taskId===a.state.taskIdAttributeChangeEvent&&a.requestData()},a.requestData=function(){window.parent.postMessage({iframe:a.state.id,taskId:a.state.taskIdRequestData,query:[{api:"/api/rd/v1/Configurator",function:"getModel",arguments:[{fakekey:"fakevalue"}]}],response:[],status:"request"},"https://eusb.webcomcpq.com/")},a.update=function(t){var e=t.data.response.find((function(t){return"/api/rd/v1/Configurator"===t.api&&"getModel"===t.function}));a.formRef&&a.formRef.current&&a.formRef.current.setFieldsValue(e.data.Attributes.reduce((function(t,e){var a;return t[e.PA_ID]=(null===(a=e.Values.find((function(t){return t.Selected})))||void 0===a?void 0:a.ValueCode)||"empty",t}),{})),a.setState({loading:!1,data:e.data})},a.changeHandler=function(t,e){a.setState({loading:!1,data:a.state.data}),window.parent.postMessage({runScript:!0,script:"\n                selectedValue = cpq.models.configurator.attributes().find(a => a.id() == ".concat(t.PA_ID,").values().find(v => v.pavId == ").concat(e.PAV_ID,");\n                                cpq.models.configurator.attributes().find(a => a.id() == ").concat(t.PA_ID,").selectedValue(selectedValue);\n              ")},"https://eusb.webcomcpq.com/")},g.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(g.c.version,"/pdf.worker.js");var s="antd-staubli-configurator";return a.state={loading:!0,id:s,taskIdRequestData:"".concat(s,"-requestData"),taskIdAttributeChangeEvent:"".concat(s,"-attributeChangeEvent"),data:{Attributes:[]}},window.addEventListener("message",a.onMessageReceived,!1),a.requestData(),window.parent.postMessage({runScript:!0,script:"\n                cpq.models.configurator.attributes.subscribe(() => {\n                  let attributeChangeEvent = {\n                    taskId: '".concat(a.state.taskIdAttributeChangeEvent,"'\n                  };\n                  let iframe = document.getElementById('").concat(a.state.id,'\');\n                  iframe.contentWindow.postMessage(attributeChangeEvent, "https://brspnnggrt.github.io/");\n                });\n              ')},"https://eusb.webcomcpq.com/"),a}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"App-content",children:[this.state.loading&&Object(m.jsx)("span",{children:"loading data..."}),!this.state.loading&&Object(m.jsx)(f.a,{ref:this.formRef,name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:null,onFinishFailed:null,autoComplete:"off",initialValues:this.state.data.Attributes.reduce((function(t,e){var a;return t[e.PA_ID]=(null===(a=e.Values.find((function(t){return t.Selected})))||void 0===a?void 0:a.ValueCode)||"empty",t}),{}),children:this.state.data.Attributes.map((function(e){return Object(m.jsx)(f.a.Item,{label:"Family"==e.Name?Object(m.jsx)(p.a,{type:"secondary",onClick:function(){l.a.info({title:"Datasheet",width:"90%",style:{top:"25px"},content:Object(m.jsx)(g.a,{file:a(170).default,children:Object(m.jsx)(g.b,{pageNumber:2,scale:1,width:600})}),onOk:function(){}})},children:"Family"}):e.Name,name:e.PA_ID,rules:[{required:e.Required,message:"Please input ".concat(e.Name,"!")}],children:Object(m.jsx)(b.a,{disabled:!e.IsEnabled,onChange:function(a){return t.changeHandler(e,e.Values.find((function(t){return(t.ValueCode||"empty")==a})))},children:e.Values.map((function(t){return Object(m.jsx)(b.a.Option,{value:t.ValueCode||"empty",children:t.ValueDisplay})}))})})}))})]})})}}]),n}(i.a.Component),v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,244)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),i(t),s(t),r(t)}))};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),v()}},[[238,1,2]]]);
//# sourceMappingURL=main.98bfabfa.chunk.js.map