webpackJsonp([29],{"7QGw":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},AwFT:function(t,e,a){var n=a("7QGw");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("14e4481b",n,!0,{})},"p+JQ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),s=a("exGp"),l=a.n(s),i=a("gyMJ"),o={name:"StoreStockManager",data:function(){return{list:[],loading:!1}},methods:{getStockList:function(t){var e=this;return l()(r.a.mark(function a(){var n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e.loading=!0,a.next=4,Object(i._46)();case 4:1==(n=a.sent).data.code&&(e.list=n.data.list),t&&t(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error(a.t0);case 12:e.loading=!1;case 13:case"end":return a.stop()}},a,e,[[0,9]])}))()}},created:function(){this.getStockList()}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"appManager-wrapper",staticStyle:{"padding-top":"0"}},[e("div",{staticClass:"appManager-list"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"el-origin-table",attrs:{data:this.list,border:""}},[e("el-table-column",{attrs:{prop:"code",label:"编码"}}),this._v(" "),e("el-table-column",{attrs:{prop:"name",label:"名称"}}),this._v(" "),e("el-table-column",{attrs:{prop:"attribute_2_text",label:"规格"}}),this._v(" "),e("el-table-column",{attrs:{prop:"unit_text",label:"单位"}}),this._v(" "),e("el-table-column",{attrs:{prop:"number",label:"结存数量"}})],1)],1)])},staticRenderFns:[]};var p=a("VU/8")(o,c,!1,function(t){a("AwFT")},null,null);e.default=p.exports}});
//# sourceMappingURL=29.d62985f9794ee07d8bae.js.map