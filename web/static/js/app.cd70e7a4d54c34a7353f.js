webpackJsonp([28],{"991W":function(t,e){},"DP/h":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("7+uW"),a=n("/ocq");r.default.use(a.a);var i=function(){return n.e(4).then(n.bind(null,"Cl3J"))},o=[{path:"/sys_setting",name:"系统管理",component:i,redirect:"/sys_setting/store_list",children:[{path:"store_list",name:"门店列表",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"kUMQ"))}},{path:"staff_list",name:"员工列表",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"AO9w"))}},{path:"staff_not_on_job_list",name:"不在职员工列表",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"gc6M"))}},{path:"staff_in",name:"调入员工列表",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"k+5e"))}},{path:"staff_out",name:"调出员工列表",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"Gt4T"))}},{path:"job",name:"职务管理",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"lHLu"))}}]},{path:"/performance",name:"绩效管理",component:i,redirect:"/performance/list",children:[{path:"list",name:"绩效列表",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"R8Mj"))}}]},{path:"/train",name:"培训管理",component:i,redirect:"/train/type_list",children:[{path:"type_list",name:"分类列表",component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"oKNU"))}},{path:"article_list",name:"文章列表",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"tND7"))}}]},{path:"/assessment",name:"考核管理",component:i,redirect:"/assessment/questiontype",children:[{path:"questiontype",name:"考题分类",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"ELzZ"))}},{path:"question",name:"考题列表",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"D6bE"))}},{path:"exam",name:"成绩列表",component:function(){return n.e(20).then(n.bind(null,"PqPh"))}}]},{path:"/notice",name:"消息管理",component:i,redirect:"/notice/list",children:[{path:"list",name:"通知列表",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"nEXL"))}}]},{path:"/scheduling",name:"排班管理",component:i,redirect:"/scheduling/variable_time_guide",children:[{path:"variable_time_guide",name:"可变工时",component:function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,"OnpG"))}},{path:"store_forecast_turnover",name:"预估营业额",component:function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,"WMoI"))}},{path:"table",name:"排班表",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"lwG1"))}},{path:"init",name:"区域初始化",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"FjFg"))}},{path:"edit",name:"区域编辑",component:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"h8tv"))}}]},{path:"/editer",name:"海报管理",component:i,redirect:"/editer/list",children:[{path:"list",name:"海报列表",component:function(){return n.e(19).then(n.bind(null,"ymQK"))}},{path:"create",name:"海报制作",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"F+UC"))}}]},{path:"/work_time",name:"工资管理",component:i,redirect:"/work_time/any_store",children:[{path:"any_store",name:"单店报表",component:function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,"Wk2M"))}},{path:"any_staff",name:"个人报表",component:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"ihvf"))}}]}],u=[{path:"/login",name:"登录",component:function(){return n.e(24).then(n.bind(null,"xJsL"))},hidden:!0},{path:"/",name:"",component:i,redirect:"/home",children:[{path:"home",name:"首页",component:function(){return n.e(23).then(n.bind(null,"lO7g"))}}]},{path:"/setting",name:"设置",component:i,children:[{path:"personal",name:"个人设置",component:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"esj/"))}}]}];e.b=new a.a({routes:u})},IcnI:function(t,e,n){"use strict";var r,a,i,o,u=n("7+uW"),s=n("NYxO"),c=n("bOdI"),f=n.n(c),d=n("Xxa5"),p=n.n(d),m=n("exGp"),l=n.n(m),g=n("lbHh"),h=n.n(g),v=n("OlfU"),_=n("DP/h"),T=n("gyMJ"),E={namespaced:!0,state:{loginInfo:{},navList:[],routerMap:[]},actions:{createLoginInfo:function(t,e){var n=t.commit;Object(v.c)(e.name),h.a.set("dept_id",e.dept_id||""),n({type:"LOGININFO",data:e})},createLogout:function(t){var e=t.commit;Object(v.b)(),h.a.remove("deptId"),e({type:"LOGOUT",data:null})},createNavList:function(t,e){var n=this,r=t.commit,a=t.state;return l()(p.a.mark(function t(){var i;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.navList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.T)();case 4:i=t.sent,r({type:"NAVLIST",data:i.data||e});case 6:case"end":return t.stop()}},t,n)}))()},createRouterMap:function(t){var e=t.commit,n=t.state;e({type:"ROUTERMAP",data:function(t,e){var n=t.filter(function(t){if(e.some(function(e){return t.name===e.title}))return t});return n.forEach(function(t){if(t){var n=[];e.find(function(e){return e.title===t.name}).list.forEach(function(t){n=n.concat(t.list)});for(var r=function(e){""==t.children[e].path||n.some(function(n){return t.children[e].name===n.title})||(t.children.splice(e,1),e--),a=e},a=0;a<t.children.length;a++)r(a)}}),n.push({path:"*",redirect:"/"}),n}(_.a,n.navList)})}},mutations:(r={},f()(r,"LOGININFO",function(t,e){var n=e.data;t.loginInfo=n}),f()(r,"LOGOUT",function(t,e){var n=e.data;t.loginInfo=n}),f()(r,"NAVLIST",function(t,e){var n=e.data;t.navList=n}),f()(r,"ROUTERMAP",function(t,e){var n=e.data;t.routerMap=n}),r),getters:{deptId:function(t){return t.loginInfo.dept_id||h.a.get("dept_id")}}},L={namespaced:!0,state:{btnLoading:!1,isLeaveRemind:!1},actions:{setBtnLoading:function(t,e){(0,t.commit)({type:"BUTTON_LOADING",data:e})},setLeaveRemind:function(t,e){(0,t.commit)({type:"LEAVE_REMIND",data:e})}},mutations:(a={},f()(a,"BUTTON_LOADING",function(t,e){var n=e.data;t.btnLoading=n}),f()(a,"LEAVE_REMIND",function(t,e){var n=e.data;t.isLeaveRemind=n}),a)},b={namespaced:!0,state:{sexList:[{name:"全部",value:"-1"},{name:"男",value:"1"},{name:"女",value:"0"}],weekList:[{name:"星期一",value:"0"},{name:"星期二",value:"1"},{name:"星期三",value:"2"},{name:"星期四",value:"3"},{name:"星期五",value:"4"},{name:"星期六",value:"5"},{name:"星期日",value:"6"}],deptList:[],fromDeptList:[],jobList:[],kindList:[],workTypeList:[],cityList:[],jobStatusList:[],jobStatusDisabledList:[],noticStateList:[],jobLevelList:[],transferOutList:[],transferInList:[],scoreTypeList:[],classifyList:[],noticTypeList:[],planTheadList:[],staffOutStatusList:[]},actions:{createDeptList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.deptList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.M)();case 4:e=t.sent,a({type:"DEPT_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createFromDeptList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.fromDeptList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.P)();case 4:e=t.sent,a({type:"FROM_DEPT_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createJobList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.jobList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"position"});case 4:e=t.sent,a({type:"JOB_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createKindList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.kindList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"post"});case 4:e=t.sent,a({type:"KIND_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createWorkTypeList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.workTypeList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"staff_type"});case 4:e=t.sent,a({type:"WORK_TYPE_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createCityList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.cityList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"city"});case 4:e=t.sent,a({type:"CITY_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createJobStatusList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.jobStatusList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"job_type"});case 4:e=t.sent,a({type:"JOB_STATUS_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createJobStatusDisabledList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.jobStatusDisabledList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"job_type_disabled"});case 4:e=t.sent,a({type:"JOB_STATUS_DISABLED_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createNoticeStateList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.noticStateList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"notice_status"});case 4:e=t.sent,a({type:"NOTICE_STATE_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createJobLevelList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.jobLevelList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"level"});case 4:e=t.sent,a({type:"JOB_LEVEL_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createTransferOutList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.transferOutList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"out_type"});case 4:e=t.sent,a({type:"TRANSFER_OUT_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createTransferInList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.transferInList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"in_type"});case 4:e=t.sent,a({type:"TRANSFER_IN_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createScoreTypeList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.scoreTypeList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"performance_type"});case 4:e=t.sent,a({type:"SCORE_TYPE_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createClassifyList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.classifyList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.J)();case 4:e=t.sent,a({type:"CLASSIFY_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createNoticTypeList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.noticTypeList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"notice_type"});case 4:e=t.sent,a({type:"NOTICE_TYPE_SELECT",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createPlanTheadList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.planTheadList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T._2)();case 4:e=t.sent,a({type:"PLAN_THEAD",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()},createOutStatusList:function(t,e){var n=this,r=t.state,a=t.commit;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.staffOutStatusList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.N)({dict:"out_status"});case 4:e=t.sent,a({type:"STAFF_OUT_STATUS",data:e.data||[]});case 6:case"end":return t.stop()}},t,n)}))()}},mutations:(i={},f()(i,"DEPT_SELECT",function(t,e){var n=e.data;t.deptList=n}),f()(i,"FROM_DEPT_SELECT",function(t,e){var n=e.data;t.fromDeptList=n}),f()(i,"JOB_SELECT",function(t,e){var n=e.data;t.jobList=n}),f()(i,"KIND_SELECT",function(t,e){var n=e.data;t.kindList=n}),f()(i,"WORK_TYPE_SELECT",function(t,e){var n=e.data;t.workTypeList=n}),f()(i,"CITY_SELECT",function(t,e){var n=e.data;t.cityList=n}),f()(i,"JOB_STATUS_SELECT",function(t,e){var n=e.data;t.jobStatusList=n}),f()(i,"JOB_STATUS_DISABLED_SELECT",function(t,e){var n=e.data;t.jobStatusDisabledList=n}),f()(i,"NOTICE_STATE_SELECT",function(t,e){var n=e.data;t.noticStateList=n}),f()(i,"JOB_LEVEL_SELECT",function(t,e){var n=e.data;t.jobLevelList=n}),f()(i,"TRANSFER_OUT_SELECT",function(t,e){var n=e.data;t.transferOutList=n}),f()(i,"TRANSFER_IN_SELECT",function(t,e){var n=e.data;t.transferInList=n}),f()(i,"SCORE_TYPE_SELECT",function(t,e){var n=e.data;t.scoreTypeList=n}),f()(i,"CLASSIFY_SELECT",function(t,e){var n=e.data;t.classifyList=n}),f()(i,"NOTICE_TYPE_SELECT",function(t,e){var n=e.data;t.noticTypeList=n}),f()(i,"PLAN_THEAD",function(t,e){var n=e.data;t.planTheadList=n}),f()(i,"STAFF_OUT_STATUS",function(t,e){var n=e.data;t.staffOutStatusList=n}),i)},y=n("zL8q"),S={navList:[{id:"1",name:"模板",value:"template",icon:"eqf-tempalte-l",active:!0},{id:"2",name:"文字",value:"text",icon:"eqf-fontmall",active:!1},{id:"3",name:"上传",value:"upload",icon:"eqf-cloudupload-l",active:!1}],templateList:[],uploadList:[],outer_style_arr:["position","left","top","rotateZ","zIndex"],inner_style_arr:["width","height","color","fontFamily","fontSize","lineHeight","opacity","letterSpacing","textAlign","fontWeight"],box_style_arr:["left","top","width","height","rotateZ","zIndex"],fontFamilyList:[{value:"Microsoft YaHei",label:"微软雅黑"},{value:"fangzheng_ssjt",label:"方正书宋简体"},{value:"fangzheng_ktjt",label:"方正楷体简体"},{value:"fangzheng_htjt",label:"方正黑体简体"},{value:"Zhengqingkehuangyouti",label:"郑庆科黄油体"},{value:"Zhankukuaileti",label:"站酷快乐体"},{value:"Zhankugaoduanhei",label:"站酷高端黑"},{value:"Zhankukuhei",label:"站酷酷黑"},{value:"Zhankuwenyiti",label:"站酷文艺体"},{value:"ZhankuxiaoweiLOGOti",label:"站酷小徽LOGI体"},{value:"Yangrendongzhushiti",label:"杨任东竹石体"},{value:"Yangrendongzhushiticu",label:"杨任东竹石粗体"},{value:"Yangrendongzhushitixi",label:"杨任东竹石细体"},{value:"Pangmenzhengdaobiaotiti",label:"庞门正道标题体"},{value:"Arual",label:"Arual"}],textStyle:{title:{size:68,weight:"bold"},content:{size:48,weight:"normal"}},poster:{name:"",desc:"",size:[640,1008],type:"手机海报",scale:1,current:-1,elements:[]},historys:{list:[[]],isChange:!0,curStep:-1}},O=function(){return S.poster.elements.length?S.poster.elements.sort(function(t,e){return e.zIndex-t.zIndex})[0].zIndex+1:1},x=function(t){return S.poster.elements.find(function(e){return e.zIndex==t})},I={createPosterName:function(t,e){t.state;(0,t.commit)({type:"POSTER_NAME",data:e||{}})},createPosterScale:function(t,e){var n=t.state;(0,t.commit)({type:"POSTER_SCALE",data:e||n.poster.scale})},createPosterImgs:function(t,e){var n=t.state;(0,t.commit)({type:"POSTER_IMGS",data:{position:"absolute",left:0,top:0,rotateZ:0,url:e.path||"",width:n.poster.size[0],height:n.poster.size[1],zIndex:O()>1?1:O()}})},resizePosterElement:function(t,e){t.state;(0,t.commit)({type:"POSTER_RESIZE",index:e.index||-1,data:e||{}})},dirSetPosterElement:function(t,e){t.state;(0,t.commit)({type:"POSTER_DIR_SET",index:e.index||-1,data:e||{}})},addNewPosterText:function(t,e){var n=t.state;(0,t.commit)({type:"POSTER_TEXT_ADD",data:{position:"absolute",left:50,top:200,rotateZ:0,content:"双击后可编辑",color:"#000",fontFamily:"",fontSize:n.textStyle[e].size,lineHeight:1.2,opacity:1,letterSpacing:0,textAlign:"center",fontWeight:n.textStyle[e].weight,width:540,height:1.2*n.textStyle[e].size*2,zIndex:O()<2?2:O()}})},createEditingIndex:function(t,e){t.state;(0,t.commit)({type:"POSTER_EDITING_INDEX",data:e||-1})},changePosterText:function(t,e){t.state;(0,t.commit)({type:"POSTER_CHANGE_TEXT",index:e.index||-1,data:e.text})},clearPosterArea:function(t,e){t.state;(0,t.commit)({type:"POSTER_CLEAR_AREA",data:e||[]})},createHistory:function(t,e){t.state;(0,t.commit)({type:"POSTER_ADD_HISTORY",data:e||[]})},resetPosterByHistory:function(t,e){t.state;(0,t.commit)({type:"POSTER_RESET_BY_HISTORY",data:void 0!==e?e:-1})},changeHistoryState:function(t,e){t.state;(0,t.commit)({type:"POSTER_HISTORY_STATE",data:e})},requestTemplateList:function(t,e){var n=this,r=(t.state,t.commit);return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T._4)();case 2:1==(e=t.sent).code&&r({type:"POSTER_GET_TEMPLATE",data:e.data||[]});case 4:case"end":return t.stop()}},t,n)}))()},createUploadTemplate:function(t,e){t.state;(0,t.commit)({type:"POSTER_UPLOAD_TEMPLATE",data:e})},removeTemplateRecord:function(t,e){var n=this,r=(t.state,t.commit);return l()(p.a.mark(function t(){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T._37)({id:e});case 2:1==(a=t.sent).code?(r({type:"POSTER_REMOVE_TEMPLATE",data:e}),y.Message.success(a.message)):y.Message.error(a.message);case 4:case"end":return t.stop()}},t,n)}))()},requestPosterRecord:function(t,e){var n=this,r=(t.state,t.commit),a=e.id,i=e.callback;return l()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T._3)({id:a});case 4:1==(e=t.sent).code?(r({type:"POSTER_GET_RECORD",data:e.data||{}}),h.a.set("poster_id",a),i&&i()):y.Message.error(e.message);case 6:case"end":return t.stop()}},t,n)}))()}},R=(o={},f()(o,"POSTER_NAME",function(t,e){var n=e.data;t.poster.name=n.name||"",t.poster.desc=n.desc||""}),f()(o,"POSTER_SCALE",function(t,e){var n=e.data;t.poster.scale=n}),f()(o,"POSTER_IMGS",function(t,e){var n=e.data,r=t.poster.elements.findIndex(function(t){return t.url});-1!==r?t.poster.elements.splice(r,1,n):t.poster.elements.push(n)}),f()(o,"POSTER_RESIZE",function(t,e){var n=e.index,r=e.data,a=x(n);for(var i in r)"index"!==i&&(a[i]="rotateZ"!==i?Math.round(r[i]/t.poster.scale):r[i])}),f()(o,"POSTER_DIR_SET",function(t,e){var n=e.index,r=e.data,a=x(n);for(var i in r)"index"!==i&&(a[i]=r[i])}),f()(o,"POSTER_TEXT_ADD",function(t,e){var n=e.data;t.poster.elements.push(n)}),f()(o,"POSTER_EDITING_INDEX",function(t,e){var n=e.data,r=x(n);t.poster.current=r?r.zIndex:-1}),f()(o,"POSTER_CHANGE_TEXT",function(t,e){var n=e.index,r=e.data;x(n).content=r}),f()(o,"POSTER_CLEAR_AREA",function(t,e){var n=e.data;t.poster.elements=n}),f()(o,"POSTER_ADD_HISTORY",function(t,e){var n=e.data;t.historys.list.push(n),t.historys.list.length>5&&t.historys.list.shift(),t.historys.curStep=t.historys.list.length-1}),f()(o,"POSTER_RESET_BY_HISTORY",function(t,e){var n=e.data;n=(n=n<0?0:n)>t.historys.list.length-1?t.historys.list.length-1:n,t.poster.elements=t.historys.list[n],t.historys.curStep=n}),f()(o,"POSTER_HISTORY_STATE",function(t,e){var n=e.data;t.historys.isChange=n}),f()(o,"POSTER_GET_TEMPLATE",function(t,e){var n=e.data;t.templateList=n}),f()(o,"POSTER_UPLOAD_TEMPLATE",function(t,e){var n=e.data;t.uploadList.push(n),t.templateList.unshift(n)}),f()(o,"POSTER_REMOVE_TEMPLATE",function(t,e){var n=e.data,r=t.uploadList.findIndex(function(t){return t.id===n});-1!=r&&t.uploadList.splice(r,1)}),f()(o,"POSTER_GET_RECORD",function(t,e){var n=e.data;t.poster.name=n.name,t.poster.desc=n.desc,t.poster.size=n.size.split("*"),t.poster.type=n.type,t.poster.elements=JSON.parse(n.elements)}),o),P={namespaced:!0,state:S,actions:I,mutations:R,getters:{scalePercent:function(t){var e=t.poster;return Math.round(100*e.scale)+"%"},elementsList:function(t){return t.poster.elements},currentIndex:function(t){return t.poster.current},isChangeHistorys:function(t){return t.historys.isChange},currentStep:function(t){return t.historys.curStep}}};u.default.use(s.a);var w=new s.a.Store({modules:{app:E,stateChange:L,dict:b,editer:P}});e.a=w},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=(n("991W"),n("VaBq"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var i,o=n("VU/8")({name:"app"},a,!1,function(t){n("vIn8")},null,null).exports,u=n("DP/h"),s=n("IcnI"),c=n("Xxa5"),f=n.n(c),d=n("Dd8w"),p=n.n(d),m=n("exGp"),l=n.n(m),g=n("OlfU"),h=n("Y81h"),v=n.n(h),_=(n("UVIz"),n("zL8q")),T=n.n(_),E=this,L=[],b=["/login"],y=function(t){_.MessageBox.confirm("您有未保存的数据，确认离开此页面吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){t()}).catch(function(){v.a.done(),t(!1)})};u.b.beforeEach((i=l()(f.a.mark(function t(e,n,r){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(v.a.start(),!Object(g.a)()){t.next=17;break}if("/login"!==e.path){t.next=6;break}r("/"),t.next=15;break;case 6:if(0!=s.a.state.app.navList.length){t.next=14;break}return t.next=9,s.a.dispatch("app/createNavList",L);case 9:s.a.dispatch("app/createRouterMap"),u.b.addRoutes(s.a.state.app.routerMap),r(p()({},e,{replace:!0})),t.next=15;break;case 14:s.a.state.stateChange.isLeaveRemind?y(r):r();case 15:t.next=18;break;case 17:-1!==b.indexOf(e.path)?r():(r("/login"),v.a.done());case 18:case"end":return t.stop()}},t,E)})),function(t,e,n){return i.apply(this,arguments)})),u.b.afterEach(function(){v.a.done(),s.a.dispatch("stateChange/setLeaveRemind",!1)});n("M4fF"),n("tvR6");r.default.use(T.a),new r.default({el:"#app",router:u.b,store:s.a,render:function(t){return t(o)}})},OlfU:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return u});var r=n("lbHh"),a=n.n(r),i=function(){return a.a.get("Admin-Token")},o=function(t){return a.a.set("Admin-Token",t)},u=function(){return a.a.remove("Admin-Token")}},UVIz:function(t,e){},VaBq:function(t,e){},gyMJ:function(t,e,n){"use strict";var r,a=n("mvHQ"),i=n.n(a),o=(r={env:"请配置工程环境~~~",serverUrl:"",nodeServerUrl:""},console.log=console.warn=console.error=console.info=function(){},r.env="当前工程环境：production",r.serverUrl="/hrms/",r.nodeServerUrl="http://59.110.152.54:2080/hrms/",r),u=n("//Fk"),s=n.n(u),c=n("mtWM"),f=n.n(c),d=n("mw3O"),p=n.n(d),m=n("OlfU"),l=n("IcnI"),g=n("zL8q");console.info(o.env);var h="/"===o.serverUrl.charAt(o.serverUrl.length-1)?o.serverUrl:o.serverUrl+"/",v="/"===o.nodeServerUrl.charAt(o.nodeServerUrl.length-1)?o.nodeServerUrl:o.nodeServerUrl+"/",_=f.a.create({baseURL:h,timeout:5e3,paramsSerializer:function(t){return p.a.stringify(t,{arrayFormat:"repeat"})},transformRequest:[function(t){return p.a.stringify(t,{arrayFormat:"repeat"})}],headers:{post:{"Content-Type":"application/x-www-form-urlencoded"}}});_.interceptors.request.use(function(t){return l.a.dispatch("stateChange/setBtnLoading",!0),t},function(t){return l.a.dispatch("stateChange/setBtnLoading",!1),g.Message.error("请求超时！"),s.a.reject(t)}),_.interceptors.response.use(function(t){return l.a.dispatch("stateChange/setBtnLoading",!1),"nosid"==t.data.code&&Object(m.b)(),t.data},function(t){return l.a.dispatch("stateChange/setBtnLoading",!1),g.Message.error(t.response.data||"数据加载失败！"),s.a.reject(t)}),n.d(e,"v",function(){return T}),n.d(e,"w",function(){return E}),n.d(e,"_25",function(){return L}),n.d(e,"_42",function(){return b}),n.d(e,"T",function(){return y}),n.d(e,"_20",function(){return S}),n.d(e,"k",function(){return O}),n.d(e,"_21",function(){return x}),n.d(e,"_33",function(){return I}),n.d(e,"_41",function(){return R}),n.d(e,"M",function(){return P}),n.d(e,"N",function(){return w}),n.d(e,"_13",function(){return C}),n.d(e,"i",function(){return k}),n.d(e,"x",function(){return A}),n.d(e,"A",function(){return N}),n.d(e,"_16",function(){return j}),n.d(e,"_31",function(){return D}),n.d(e,"z",function(){return B}),n.d(e,"U",function(){return U}),n.d(e,"Z",function(){return M}),n.d(e,"_35",function(){return z}),n.d(e,"_11",function(){return q}),n.d(e,"_12",function(){return F}),n.d(e,"_14",function(){return G}),n.d(e,"_15",function(){return Y}),n.d(e,"n",function(){return H}),n.d(e,"_17",function(){return J}),n.d(e,"_18",function(){return W}),n.d(e,"_32",function(){return V}),n.d(e,"t",function(){return Z}),n.d(e,"j",function(){return X}),n.d(e,"m",function(){return K}),n.d(e,"_24",function(){return Q}),n.d(e,"_23",function(){return $}),n.d(e,"_34",function(){return tt}),n.d(e,"u",function(){return et}),n.d(e,"F",function(){return nt}),n.d(e,"p",function(){return rt}),n.d(e,"c",function(){return at}),n.d(e,"J",function(){return it}),n.d(e,"G",function(){return ot}),n.d(e,"_27",function(){return ut}),n.d(e,"H",function(){return st}),n.d(e,"_9",function(){return ct}),n.d(e,"s",function(){return ft}),n.d(e,"h",function(){return dt}),n.d(e,"_10",function(){return pt}),n.d(e,"_30",function(){return mt}),n.d(e,"X",function(){return lt}),n.d(e,"V",function(){return gt}),n.d(e,"Y",function(){return ht}),n.d(e,"W",function(){return vt}),n.d(e,"Q",function(){return _t}),n.d(e,"S",function(){return Tt}),n.d(e,"f",function(){return Et}),n.d(e,"R",function(){return Lt}),n.d(e,"_28",function(){return bt}),n.d(e,"q",function(){return yt}),n.d(e,"_40",function(){return St}),n.d(e,"d",function(){return Ot}),n.d(e,"l",function(){return xt}),n.d(e,"_2",function(){return It}),n.d(e,"_1",function(){return Rt}),n.d(e,"I",function(){return Pt}),n.d(e,"_38",function(){return wt}),n.d(e,"e",function(){return Ct}),n.d(e,"O",function(){return kt}),n.d(e,"B",function(){return At}),n.d(e,"L",function(){return Nt}),n.d(e,"K",function(){return jt}),n.d(e,"_22",function(){return Dt}),n.d(e,"_0",function(){return Bt}),n.d(e,"_7",function(){return Ut}),n.d(e,"g",function(){return Mt}),n.d(e,"_8",function(){return zt}),n.d(e,"_29",function(){return qt}),n.d(e,"r",function(){return Ft}),n.d(e,"_6",function(){return Gt}),n.d(e,"P",function(){return Yt}),n.d(e,"y",function(){return Ht}),n.d(e,"a",function(){return Jt}),n.d(e,"_26",function(){return Wt}),n.d(e,"D",function(){return Vt}),n.d(e,"o",function(){return Zt}),n.d(e,"C",function(){return Xt}),n.d(e,"_19",function(){return Kt}),n.d(e,"E",function(){return Qt}),n.d(e,"b",function(){return $t}),n.d(e,"_43",function(){return te}),n.d(e,"_39",function(){return ee}),n.d(e,"_44",function(){return ne}),n.d(e,"_45",function(){return re}),n.d(e,"_3",function(){return ae}),n.d(e,"_4",function(){return ie}),n.d(e,"_37",function(){return oe}),n.d(e,"_5",function(){return ue}),n.d(e,"_36",function(){return se});var T=function(t){return _.post("/login",t)},E=function(){return _.get("/mgr/user/loginout")},L=function(){return _.get("/mgr/user/showMyDetail")},b=function(t){return _.post("/mgr/user/modifyMyPwd",t)},y=function(){return _.get("/mgr/menu")},S=function(t){return _.get("/mgr/store/list",{params:t})},O=function(t){return _.post("/mgr/store/add",t)},x=function(t){return _.get("/mgr/store/showById",{params:t})},I=function(t){return _.post("/mgr/store/updateById",t)},R=function(t){return _.get("/mgr/store/stop",{params:t})},P=function(){return _.get("mgr/store/getStoreDict")},w=function(t){return _.get("mgr/dict/getDictIncludeChoose",{params:t})},C=function(t){return _.get("/mgr/staff/list",{params:t})},k=function(t){return _.post("/mgr/staff/add",t)},A=function(t){return _.post("/mgr/apply/deal",t)},N=function(t){return _.post("/mgr/storeMgr/fire",t)},j=function(t){return _.get("/mgr/staff/showById",{params:t})},D=function(t){return _.post("/mgr/staff/updateById",t)},B=function(t){return _.post("/mgr/moveOut/out",t)},U=function(t){return _.get("/mgr/staffNotOnJob/list",{params:t})},M=function(t){return _.get("/mgr/staffNotOnJob/showById",{params:t})},z=function(t){return _.get("mgr/staffNotOnJob/recovery",{params:t})},q=function(t){return _.get("/mgr/moveIn/list",{params:t})},F=function(t){return _.get("/mgr/moveIn/showById",{params:t})},G=function(t){return _.get("/mgr/moveOut/list",{params:t})},Y=function(t){return _.get("/mgr/moveOut/showById",{params:t})},H=function(t){return _.get("/mgr/moveOut/cancelOut",{params:t})},J=function(t){return _.get("/mgr/performance/list",{params:t})},W=function(t){return _.get("/mgr/performance/showById",{params:t})},V=function(t){return _.post("/mgr/performance/updateById",t)},Z=function(t){return _.get("/mgr/performance/deleteById",{params:t})},X=function(t){return _.post("/mgr/performance/add",t)},K=function(t){return _.post("/mgr/train/type/add",t)},Q=function(){return _.get("/mgr/train/type/list")},$=function(t){return _.get("/mgr/train/type/showById",{params:t})},tt=function(t){return _.post("/mgr/train/type/updateById",t)},et=function(t){return _.get("/mgr/train/type/deleteById",{params:t})},nt=function(t){return _.get("/mgr/train/article/list",{params:t})},rt=function(t){return _.get("/mgr/train/article/deleteById",{params:t})},at=function(t){return _.post("/mgr/train/article/add",t)},it=function(){return _.get("mgr/train/type/getTypeDict")},ot=function(t){return _.get("/mgr/train/article/showById",{params:t})},ut=function(t){return _.post("/mgr/train/article/updateById",t)},st=function(t){return _.get("/mgr/exam/list",{params:t})},ct=function(t){return _.get("/mgr/question/list",{params:t})},ft=function(t){return _.get("/mgr/question/deleteById",{params:t})},dt=function(t){return _.post("/mgr/question/add",t)},pt=function(t){return _.get("/mgr/question/showById",{params:t})},mt=function(t){return _.post("/mgr/question/updateById",t)},lt=function(t){return _.get("/mgr/notice/list",{params:t})},gt=function(t){return _.get("/mgr/notice/showApplyById",{params:t})},ht=function(t){return _.get("/mgr/notice/showMoveInById",{params:t})},vt=function(t){return _.get("/mgr/notice/showStaffFireById",{params:t})},_t=function(){return _.get("/mgr/job/list")},Tt=function(){return _.get("/mgr/job/showResource")},Et=function(t){return _.post("/mgr/job/add",t)},Lt=function(t){return _.get("/mgr/job/showById",{params:t})},bt=function(t){return _.post("/mgr/job/updateById",t)},yt=function(t){return _.get("/mgr/job/deleteById",{params:t})},St=function(t){return _.post("/mgr/apply/moveIn",t)},Ot=function(t){return _.post("/mgr/storeForecastTurnoverCtrl/add",t,{headers:{post:{"Content-Type":"application/json"}},transformRequest:[function(t){return i()(t)}]})},xt=function(t){return _.post("/mgr/variableTimeGuideCtrl/add",t,{headers:{post:{"Content-Type":"application/json"}},transformRequest:[function(t){return i()(t)}]})},It=function(){return _.get("/mgr/schedulingCtrl/getThead")},Rt=function(t){return _.get("/mgr/schedulingCtrl/createSchedulingTable",{params:t})},Pt=function(t){return _.get("/mgr/schedulingCtrl/getStaff",{params:t})},wt=function(t){return _.post("/mgr/schedulingCtrl/save",t,{headers:{post:{"Content-Type":"application/json"}},transformRequest:[function(t){return i()(t)}]})},Ct=function(t){return _.post("/mgr/staffIdleTimeCtrl/saveTime",t)},kt=function(t){return _.get("/mgr/staffIdleTimeCtrl/getStaffIdleTime",{params:t})},At=function(t){return _.get("/mgr/staffIdleTimeCtrl/getStaffIdleTimeById",{params:t})},Nt=function(){return _.get("/mgr/storeForecastTurnoverCtrl/getForecastTurnover")},jt=function(){return _.get("/mgr/variableTimeGuideCtrl/getVariableTimeGuide")},Dt=function(t){return _.get("/mgr/workTimeCtrl/getWorkTime",{params:t})},Bt=function(t){return _.get("/mgr/workTimeDetailCtrl/getWorkTimeDetail",{params:t})},Ut=function(t){return _.get("/mgr/question/type/list",{params:t})},Mt=function(t){return _.post("/mgr/question/type/add",t)},zt=function(t){return _.get("/mgr/question/type/showById",{params:t})},qt=function(t){return _.post("/mgr/question/type/updateById",t)},Ft=function(t){return _.get("/mgr/question/type/deleteById",{params:t})},Gt=function(t){return _.get("/mgr/question/getTypeByKind",{params:t})},Yt=function(t){return _.get("/mgr/apply/getFromStoreDict",{params:t})},Ht=function(t){return _.post("/mgr/moveIn/in",t)},Jt=function(t){return _.get("/mgr/areaCtrl/add",{params:t})},Wt=function(t){return _.get("/mgr/areaCtrl/update",{params:t})},Vt=function(t){return _.get("/mgr/areaCtrl/showById",{params:t})},Zt=function(t){return _.get("/mgr/areaCtrl/delete",{params:t})},Xt=function(t){return _.get("/mgr/areaCtrl/list",{params:t})},Kt=function(t){return _.get("/mgr/areaCtrl/showAreaStaff",{params:t})},Qt=function(t){return _.get("/mgr/areaCtrl/getStaff",{params:t})},$t=function(t){return _.get("/mgr/areaCtrl/edit",{params:t})},te=h+"mgr/train/article/uploadPDF",ee=function(t){return _.post("/poster/save",t,{baseURL:v,withCredentials:!0,headers:{post:{"Content-Type":"application/json"}},transformRequest:[function(t){return i()(t)}]})},ne=function(t){return _.post("/poster/upload",t,{baseURL:v,withCredentials:!0,headers:{post:{"Content-Type":"multipart/form-data"}},transformRequest:[function(t){return t}]})},re=v+"poster/template",ae=function(t){return _.get("/poster/getone",{params:t,baseURL:v})},ie=function(){return _.get("/poster/getlist",{baseURL:v})},oe=function(t){return _.get("/poster/del_template",{params:t,baseURL:v})},ue=function(t){return _.get("/poster/pagelist",{params:t,baseURL:v})},se=function(t){return _.get("/poster/del_poster",{params:t,baseURL:v})}},tvR6:function(t,e){},vIn8:function(t,e){}},["NHnr"]);