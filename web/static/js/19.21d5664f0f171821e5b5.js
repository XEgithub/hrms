webpackJsonp([19],{"2dpe":function(t,e,a){var s=a("nuJ3");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("79e8ae36",s,!0,{})},"5Ryr":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".store-search{width:300px}",""])},K1PP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),r=a.n(s),n=a("exGp"),o=a.n(n),i=a("rpul"),l=a("gyMJ"),c={name:"AddStorePanel",props:{params:Object},data:function(){return{form:{name:"",address:"",phone:"",desc:""}}},methods:{submitHandle:function(){var t=this;this.insertStoreInfo(function(){t.$emit("reloadEvent","reload"),t.closePanelHandle()})},insertStoreInfo:function(t){var e=this;return o()(r.a.mark(function a(){var s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""!=e.form.name){a.next=2;break}return a.abrupt("return",e.$message({message:"请正确填写门店信息再提交！",type:"warning"}));case 2:return a.prev=2,a.next=5,Object(l._71)({name:e.form.name,address:e.form.address,phone:e.form.phone,desc:e.form.desc});case 5:1==(s=a.sent).data.code?(e.$message({type:"success",message:"添加门店成功!"}),t&&t()):e.$message({type:"error",message:s.data.message}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),console.error(a.t0);case 12:case"end":return a.stop()}},a,e,[[2,9]])}))()},closePanelHandle:function(){this.params.isPlay=!1}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-form-panel"},[a("div",{staticClass:"app-form-item"},[t._m(0),t._v(" "),a("div",{staticClass:"app-input-block"},[a("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{formDanger:t.errors.has("storename")},attrs:{name:"storename",clearable:"",placeholder:"请输入门店名称..."},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),t.errors.has("storename")?a("span",{staticClass:"prompt-title"},[t._v(t._s(t.errors.first("storename")))]):t._e()],1)]),t._v(" "),a("div",{staticClass:"app-form-item"},[t._m(1),t._v(" "),a("div",{staticClass:"app-input-block"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入门店地址..."},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)]),t._v(" "),a("div",{staticClass:"app-form-item"},[a("label",{staticClass:"app-form-label"},[t._v("门店电话")]),t._v(" "),a("div",{staticClass:"app-input-block"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入门店电话..."},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)]),t._v(" "),a("div",{staticClass:"app-form-item"},[a("label",{staticClass:"app-form-label"},[t._v("门店描述")]),t._v(" "),a("div",{staticClass:"app-input-block"},[a("el-input",{attrs:{rows:5,type:"textarea",clearable:"",placeholder:"请输入门店描述..."},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)]),t._v(" "),a("div",{staticClass:"app-form-item tr"},[a("el-button",{on:{click:function(e){return e.stopPropagation(),t.closePanelHandle(e)}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.submitHandle(e)}}},[t._v("确定")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"app-form-label"},[e("i",[this._v("*")]),this._v("门店名称")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"app-form-label"},[e("i",[this._v("*")]),this._v("门店地址")])}]};var d=a("VU/8")(c,p,!1,function(t){a("h0vs")},null,null).exports,u={name:"ModStorePanel",props:{params:Object},data:function(){return{itemId:this.params.itemId,form:{name:"",address:"",phone:"",desc:""}}},created:function(){this.getItemInfo()},methods:{getItemInfo:function(){var t=this;return o()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l._37)({id:t.itemId});case 3:1==(a=e.sent).data.code?(t.form.name=a.data.data.name||"",t.form.address=a.data.data.address,t.form.phone=a.data.data.phone,t.form.desc=a.data.data.desc):t.$message({type:"error",message:a.data.message}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},submitHandle:function(){var t=this;this.updateStoreInfo(function(){t.$emit("reloadEvent","reload"),t.closePanelHandle()})},updateStoreInfo:function(t){var e=this;return o()(r.a.mark(function a(){var s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(l._87)({id:e.itemId,name:e.form.name,address:e.form.address,phone:e.form.phone,desc:e.form.desc});case 3:1==(s=a.sent).data.code?(e.$message({type:"success",message:"修改部门成功!"}),t&&t()):e.$message({type:"error",message:s.data.message}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},a,e,[[0,7]])}))()},closePanelHandle:function(){this.params.isPlay=!1}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-form-panel"},[a("div",{staticClass:"app-form-item"},[t._m(0),t._v(" "),a("div",{staticClass:"app-input-block"},[a("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{formDanger:t.errors.has("storename")},attrs:{name:"storename",clearable:"",placeholder:"请输入门店名称..."},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),t.errors.has("storename")?a("span",{staticClass:"prompt-title"},[t._v(t._s(t.errors.first("storename")))]):t._e()],1)]),t._v(" "),a("div",{staticClass:"app-form-item"},[t._m(1),t._v(" "),a("div",{staticClass:"app-input-block"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入门店地址..."},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)]),t._v(" "),a("div",{staticClass:"app-form-item"},[a("label",{staticClass:"app-form-label"},[t._v("门店电话")]),t._v(" "),a("div",{staticClass:"app-input-block"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入门店电话..."},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)]),t._v(" "),a("div",{staticClass:"app-form-item"},[a("label",{staticClass:"app-form-label"},[t._v("门店描述")]),t._v(" "),a("div",{staticClass:"app-input-block"},[a("el-input",{attrs:{rows:5,type:"textarea",clearable:"",placeholder:"请输入门店描述..."},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)]),t._v(" "),a("div",{staticClass:"app-form-item tr"},[a("el-button",{on:{click:function(e){return e.stopPropagation(),t.closePanelHandle(e)}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.submitHandle(e)}}},[t._v("确定")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"app-form-label"},[e("i",[this._v("*")]),this._v("门店名称")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"app-form-label"},[e("i",[this._v("*")]),this._v("门店地址")])}]};var f=a("VU/8")(u,m,!1,function(t){a("zaJM")},null,null).exports,v={name:"StoreManager",data:function(){return{list:[],curPageIndex:1,search:{searchVal:""},loading:!1,addStoreExtract:{isPlay:!1},modStoreExtract:{isPlay:!1}}},methods:{addStoreHandle:function(){this.addStoreExtract.isPlay=!0},modItemHandle:function(t){this.modStoreExtract.isPlay=!0,this.modStoreExtract.itemId=t},stopItemHandle:function(t){var e=this;this.$confirm("确认"+("1"==t.status?"停用":"启用")+"此门店吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(o()(r.a.mark(function a(){var s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(l._76)({id:t.id,status:"1"==t.status?"0":"1"});case 3:1==(s=a.sent).data.code?(e.getStoreList(e.curPageIndex),e.$message({type:"success",message:"操作成功!"})):e.$message({type:"error",message:s.data.message}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},a,e,[[0,7]])}))).catch(function(){})},delItemHandle:function(t){var e=this;this.$confirm("确认删除此门店吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(o()(r.a.mark(function a(){var s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(l.r)({id:t});case 3:1==(s=a.sent).data.code?(e.removeItemById(t),e.$message({type:"success",message:"操作成功!"})):e.$message({type:"error",message:s.data.message}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},a,e,[[0,7]])}))).catch(function(){})},getStoreList:function(t,e){var a=this;return o()(r.a.mark(function s(){var n;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return void 0===t&&(t=a.curPageIndex),a.loading=!0,s.prev=2,s.next=5,Object(l._34)({pageNum:t,pageSize:10,keyword:a.search.searchVal});case 5:1==(n=s.sent).data.code?(a.list=n.data.data.list,a.list.total=n.data.data.totalRow):a.list.total=0,e&&e(),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(2),console.error(s.t0);case 13:a.loading=!1;case 14:case"end":return s.stop()}},s,a,[[2,10]])}))()},handleCurrentChange:function(t){this.curPageIndex=t,this.getStoreList(t)},reloadGetData:function(t){"reload"==t&&this.getStoreList(this.curPageIndex)},searchHandle:function(){this.getStoreList(1)},removeItemById:function(t){for(var e=0;e<this.list.length;e++)if(this.list[e].id==t){this.list.splice(e,1);break}}},created:function(){this.getStoreList(this.curPageIndex)},components:{ExtractPanel:i.a,AddStorePanel:d,ModStorePanel:f}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"appManager-wrapper"},[a("div",{staticClass:"appManager-top"},[a("el-button",{staticClass:"fl",on:{click:function(e){return e.stopPropagation(),t.addStoreHandle(e)}}},[t._v("新增门店")]),t._v(" "),a("el-input",{staticClass:"store-search fr",attrs:{placeholder:"请输入门店名称","prefix-icon":"el-icon-search",clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchHandle(e):null}},model:{value:t.search.searchVal,callback:function(e){t.$set(t.search,"searchVal",e)},expression:"search.searchVal"}})],1),t._v(" "),a("div",{staticClass:"appManager-list"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"门店名称",width:"300",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{style:{color:e.row.store_color}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"门店地址","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"门店电话",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{size:"medium",type:"1"==e.row.status?"":"danger"}},[t._v("\r\n                        "+t._s(e.row.status_text)+"\r\n                    ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){a.stopPropagation(),t.modItemHandle(e.row.id)}}},[a("i",{staticClass:"el-icon-edit"}),t._v(" 修改\r\n                    ")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){a.stopPropagation(),t.stopItemHandle(e.row)}}},[a("i",{class:{"el-icon-circle-close-outline":"1"==e.row.status,"el-icon-circle-check-outline":"1"!=e.row.status}}),t._v("\r\n                        "+t._s("1"==e.row.status?"停用":"启用")+"\r\n                    ")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){a.stopPropagation(),t.delItemHandle(e.row.id)}}},[a("i",{staticClass:"el-icon-delete"}),t._v(" 删除\r\n                    ")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper",total:t.list.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("ExtractPanel",{attrs:{params:t.addStoreExtract}},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("新增门店")]),t._v(" "),a("AddStorePanel",{attrs:{slot:"panel",params:t.addStoreExtract},on:{reloadEvent:t.reloadGetData},slot:"panel"})],1),t._v(" "),a("ExtractPanel",{attrs:{params:t.modStoreExtract}},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("修改门店信息")]),t._v(" "),a("ModStorePanel",{attrs:{slot:"panel",params:t.modStoreExtract},on:{reloadEvent:t.reloadGetData},slot:"panel"})],1)],1)},staticRenderFns:[]};var x=a("VU/8")(v,h,!1,function(t){a("bTNB")},null,null);e.default=x.exports},Qae4:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},XQOT:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},bTNB:function(t,e,a){var s=a("5Ryr");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("2bb8f6c5",s,!0,{})},h0vs:function(t,e,a){var s=a("Qae4");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("d50d003e",s,!0,{})},nuJ3:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".extract-masker{position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,.2);z-index:8}.extract-wrapper{width:50%;height:calc(100% - 50px);position:fixed;top:50px;right:0;bottom:0;background:#f5f5f5;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-box-shadow:-3px 0 4px rgba(0,0,0,.1);box-shadow:-3px 0 4px rgba(0,0,0,.1);z-index:9}.extract-top{height:50px;border-bottom:1px solid #ccc;position:relative}.extract-top .title{line-height:50px;padding-left:15px;font-size:16px;font-weight:700;width:80%}.extract-top .extract-close{position:absolute;right:12px;top:10px;font-size:22px;padding:5px;cursor:pointer;-webkit-transition:all .3s ease;transition:all .3s ease}.extract-top .extract-close:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.extract-main{height:calc(100% - 51px);overflow-y:auto}.extract-main .no-info{text-align:center;padding-top:50px}#app .app-side-enter,#app .app-side-leave-to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}#app .app-side-enter-to,#app .app-side-leave{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}#app .app-side-enter-active,#app .app-side-leave-active{-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}",""])},rpul:function(t,e,a){"use strict";var s={name:"ExtractPanel",data:function(){return{}},props:{params:{type:Object,default:function(){return{isPlay:!1}}},width:{type:String,default:"50%"},top:{type:String,default:"50px"}},methods:{handleClick:function(){this.params.isPlay=!1},eventHandle:function(t){t.stopPropagation(),this.params.isPlay&&(this.params.isPlay=!1)}},computed:{computHeight:function(){return-1==this.top.search("px")&&(this.top+="px"),"calc(100% - "+this.top+")"}},mounted:function(){document.getElementById("main").addEventListener("click",this.eventHandle,!1)},destroyed:function(){document.getElementById("main").removeEventListener("click",this.eventHandle)}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"app-side"}},[t.params.isPlay?a("div",{staticClass:"extract-wrapper",style:{width:t.width,top:t.top,height:t.computHeight},on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"extract-top"},[a("h5",{staticClass:"title"},[t._t("title",[t._v("提示信息")])],2),t._v(" "),a("span",{staticClass:"extract-close",on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[a("i",{staticClass:"el-icon-close"})])]),t._v(" "),a("div",{staticClass:"extract-main"},[t._t("panel",[a("div",{staticClass:"no-info"},[t._v("暂无数据...")])])],2)]):t._e()])},staticRenderFns:[]};var n=a("VU/8")(s,r,!1,function(t){a("2dpe")},null,null);e.a=n.exports},zaJM:function(t,e,a){var s=a("XQOT");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("4b445a23",s,!0,{})}});
//# sourceMappingURL=19.21d5664f0f171821e5b5.js.map