(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e8c7850"],{3601:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("div",{staticClass:"handle-box"},[a("el-select",{staticClass:"handle-select mrb10",attrs:{clearable:"",placeholder:"资源路径类型"},model:{value:e.pagination.resourceType,callback:function(t){e.$set(e.pagination,"resourceType",t)},expression:"pagination.resourceType"}},e._l(e.resourceTypes,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1),a("el-select",{staticClass:"handle-select mrb10",attrs:{clearable:"",placeholder:"状态"},model:{value:e.pagination.status,callback:function(t){e.$set(e.pagination,"status",t)},expression:"pagination.status"}},[a("el-option",{key:"1",attrs:{label:"启用",value:!0}}),a("el-option",{key:"2",attrs:{label:"禁用",value:!1}})],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.search()}}},[e._v("搜索")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addResourcePathDialog=!0}}},[e._v("新增资源路径")])],1),a("el-table",{staticClass:"table",attrs:{data:e.resourcePaths,border:"","header-cell-class-name":"table-header"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"title",label:"标题",align:"center"}}),a("el-table-column",{attrs:{prop:"classify",label:"分类",align:"center"}}),a("el-table-column",{attrs:{prop:"introduction",label:"简介",align:"center"}}),a("el-table-column",{attrs:{label:"封面",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-image",{staticClass:"table-td-thumb",attrs:{lazy:"","preview-src-list":[e.row.cover],src:e.row.cover,fit:"cover"}})]}}])}),a("el-table-column",{attrs:{prop:"url",label:"链接",align:"center"}}),a("el-table-column",{attrs:{prop:"type",label:"资源类型",align:"center"}}),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:!1===t.row.status?"danger":"success","disable-transitions":""}},[e._v(" "+e._s(!1===t.row.status?"禁用":"启用")+" ")]),a("el-switch",{nativeOn:{click:function(a){return e.changeStatus(t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),a("el-button",{staticStyle:{color:"var(--orangeRed)"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v(" 删除 ")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.pagination.current,"page-size":e.pagination.size,total:e.pagination.total},on:{"current-change":e.handlePageChange}})],1)],1),a("el-dialog",{attrs:{title:"图片",visible:e.coverDialog,width:"25%","append-to-body":!0,"close-on-click-modal":!1,"destroy-on-close":"",center:""},on:{"update:visible":function(t){e.coverDialog=t}}},[a("div",[a("uploadPicture",{attrs:{isAdmin:!0,prefix:e.resourcePath.type+"Cover",maxSize:2,maxNumber:1},on:{addPicture:e.addPicture}})],1)]),a("el-dialog",{attrs:{title:"文件",visible:e.uploadDialog,width:"25%","append-to-body":!0,"close-on-click-modal":!1,"destroy-on-close":"",center:""},on:{"update:visible":function(t){e.uploadDialog=t}}},[a("div",[a("uploadPicture",{attrs:{isAdmin:!0,prefix:e.resourcePath.type+"Url",maxSize:10,maxNumber:1,listType:"text",accept:"image/*, video/*, audio/*"},on:{addPicture:e.addFile}})],1)]),a("el-dialog",{attrs:{title:"资源路径",visible:e.addResourcePathDialog,width:"50%","before-close":e.clearDialog,"append-to-body":!0,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.addResourcePathDialog=t}}},[a("div",[a("div",[a("div",{staticStyle:{"margin-bottom":"5px"}},[e._v("标题：")]),a("el-input",{attrs:{maxlength:"60"},model:{value:e.resourcePath.title,callback:function(t){e.$set(e.resourcePath,"title",t)},expression:"resourcePath.title"}}),a("div",{staticStyle:{"margin-top":"10px","margin-bottom":"5px"}},[e._v("分类：")]),a("el-input",{attrs:{disabled:!["friendUrl","lovePhoto","funny","favorites"].includes(e.resourcePath.type),maxlength:"30"},model:{value:e.resourcePath.classify,callback:function(t){e.$set(e.resourcePath,"classify",t)},expression:"resourcePath.classify"}}),a("div",{staticStyle:{"margin-top":"10px","margin-bottom":"5px"}},[e._v("简介：")]),a("el-input",{attrs:{disabled:!["friendUrl","favorites"].includes(e.resourcePath.type),maxlength:"1000"},model:{value:e.resourcePath.introduction,callback:function(t){e.$set(e.resourcePath,"introduction",t)},expression:"resourcePath.introduction"}}),a("div",{staticStyle:{"margin-top":"10px","margin-bottom":"5px"}},[e._v("封面：")]),a("div",{staticStyle:{display:"flex"}},[a("el-input",{model:{value:e.resourcePath.cover,callback:function(t){e.$set(e.resourcePath,"cover",t)},expression:"resourcePath.cover"}}),a("div",{staticStyle:{width:"66px",margin:"3.5px 0 0 10px"}},[a("proButton",{attrs:{info:"上传封面",before:e.$constant.before_color_1,after:e.$constant.after_color_1},nativeOn:{click:function(t){return e.addResourcePathCover()}}})],1)],1),a("div",{staticStyle:{"margin-top":"10px","margin-bottom":"5px"}},[e._v("链接：")]),a("div",{staticStyle:{display:"flex"}},[a("el-input",{attrs:{disabled:!["friendUrl","funny","favorites"].includes(e.resourcePath.type)},model:{value:e.resourcePath.url,callback:function(t){e.$set(e.resourcePath,"url",t)},expression:"resourcePath.url"}}),a("div",{staticStyle:{width:"66px",margin:"3.5px 0 0 10px"}},[a("proButton",{attrs:{info:"上传文件",before:e.$constant.before_color_1,after:e.$constant.after_color_1},nativeOn:{click:function(t){return e.addResourcePathUrl()}}})],1)],1),a("div",{staticStyle:{"margin-top":"10px","margin-bottom":"5px"}},[e._v("资源类型：")]),a("el-select",{staticClass:"handle-select mrb10",attrs:{placeholder:"资源路径类型"},model:{value:e.resourcePath.type,callback:function(t){e.$set(e.resourcePath,"type",t)},expression:"resourcePath.type"}},e._l(e.resourceTypes,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1),a("div",{staticStyle:{"margin-top":"10px","margin-bottom":"5px"}},[e._v("备注：")]),a("el-input",{attrs:{disabled:![].includes(e.resourcePath.type),maxlength:"1000",type:"textarea"},model:{value:e.resourcePath.remark,callback:function(t){e.$set(e.resourcePath,"remark",t)},expression:"resourcePath.remark"}})],1),a("div",{staticClass:"myCenter",staticStyle:{display:"flex","margin-top":"30px"}},[a("proButton",{attrs:{info:"提交",before:e.$constant.before_color_2,after:e.$constant.after_color_2},nativeOn:{click:function(t){return e.addResourcePath()}}})],1)])])],1)},s=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("ac1f"),a("841c"),a("e9c4"),function(){return a.e("chunk-4279e0f6").then(a.bind(null,"6034"))}),n=function(){return a.e("chunk-94e299d0").then(a.bind(null,"ff66"))},i={components:{uploadPicture:r,proButton:n},data:function(){return{resourceTypes:[{label:"友链",value:"friendUrl"},{label:"恋爱图片",value:"lovePhoto"},{label:"音乐",value:"funny"},{label:"收藏夹",value:"favorites"}],pagination:{current:1,size:10,total:0,resourceType:"",status:null},resourcePaths:[],coverDialog:!1,uploadDialog:!1,addResourcePathDialog:!1,isUpdate:!1,resourcePath:{title:"",classify:"",introduction:"",cover:"",url:"",type:"",remark:""}}},computed:{},watch:{},created:function(){this.getResourcePaths()},mounted:function(){},methods:{addPicture:function(e){this.resourcePath.cover=e,this.coverDialog=!1},addFile:function(e){this.resourcePath.url=e,this.uploadDialog=!1},addResourcePathUrl:function(){!1!==this.addResourcePathDialog&&(["funny"].includes(this.resourcePath.type)?this.uploadDialog=!0:this.$message({message:"请选择有效资源类型！",type:"error"}))},addResourcePathCover:function(){!1!==this.addResourcePathDialog&&(this.$common.isEmpty(this.resourcePath.type)?this.$message({message:"请选择资源类型！",type:"error"}):this.coverDialog=!0)},addResourcePath:function(){var e=this;this.$common.isEmpty(this.resourcePath.title)||this.$common.isEmpty(this.resourcePath.type)?this.$message({message:"标题和资源类型不能为空！",type:"error"}):this.$http.post(this.$constant.baseURL+"/webInfo/"+(this.isUpdate?"updateResourcePath":"saveResourcePath"),this.resourcePath,!0).then((function(t){e.$message({message:"保存成功！",type:"success"}),e.addResourcePathDialog=!1,e.clearDialog(),e.search()})).catch((function(t){e.$message({message:t.message,type:"error"})}))},search:function(){this.pagination.total=0,this.pagination.current=1,this.getResourcePaths()},getResourcePaths:function(){var e=this;this.$http.post(this.$constant.baseURL+"/webInfo/listResourcePath",this.pagination,!0).then((function(t){e.$common.isEmpty(t.data)||(e.resourcePaths=t.data.records,e.pagination.total=t.data.total)})).catch((function(t){e.$message({message:t.message,type:"error"})}))},changeStatus:function(e){var t=this;this.$http.post(this.$constant.baseURL+"/webInfo/updateResourcePath",e,!0).then((function(e){t.$message({message:"修改成功！",type:"success"})})).catch((function(e){t.$message({message:e.message,type:"error"})}))},handlePageChange:function(e){this.pagination.current=e,this.getResourcePaths()},handleDelete:function(e){var t=this;this.$confirm("确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",center:!0}).then((function(){t.$http.get(t.$constant.baseURL+"/webInfo/deleteResourcePath",{id:e.id},!0).then((function(e){t.search(),t.$message({message:"删除成功！",type:"success"})})).catch((function(e){t.$message({message:e.message,type:"error"})}))})).catch((function(){t.$message({type:"success",message:"已取消删除!"})}))},handleEdit:function(e){this.resourcePath=JSON.parse(JSON.stringify(e)),this.addResourcePathDialog=!0,this.isUpdate=!0},clearDialog:function(){this.isUpdate=!1,this.addResourcePathDialog=!1,this.resourcePath={title:"",classify:"",introduction:"",cover:"",url:"",type:"",remark:""}}}},c=i,l=(a("8282"),a("2877")),u=Object(l["a"])(c,o,s,!1,null,"07a783f4",null);t["default"]=u.exports},8282:function(e,t,a){"use strict";a("87b6")},"87b6":function(e,t,a){},caad:function(e,t,a){"use strict";var o=a("23e7"),s=a("4d64").includes,r=a("d039"),n=a("44d2"),i=r((function(){return!Array(1).includes()}));o({target:"Array",proto:!0,forced:i},{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")}}]);