(function(t){function e(e){for(var n,i,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},o={app:0},r=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d22c694":"b96583ce","chunk-2d22d746":"ef514a1e"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var u=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(l);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}o[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/PuppySocializationChecklist/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{color:"blue",dark:"",app:""}},[a("v-btn",{attrs:{text:"",rounded:"",to:"/"}},[t._v("Checklist")]),a("v-btn",{attrs:{text:"",rounded:"",to:"/random"}},[t._v("Random Idea")]),a("v-btn",{attrs:{text:"",rounded:"",to:"/about"}},[t._v("About")])],1),a("v-content",[a("router-view")],1),a("v-footer",{attrs:{padless:"",app:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("ThinkTink")]),t._v(" —"),a("v-btn",{attrs:{icon:"",href:"https://github.com/ThinkTink/PuppySocializationChecklist"}},[a("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)},r=[],i={name:"App"},c=i,s=a("2877"),u=a("6544"),l=a.n(u),d=a("7496"),f=a("40dc"),p=a("8336"),v=a("62ad"),m=a("a75b"),h=a("553a"),b=a("132d"),g=Object(s["a"])(c,o,r,!1,null,null,null),I=g.exports;l()(g,{VApp:d["a"],VAppBar:f["a"],VBtn:p["a"],VCol:v["a"],VContent:m["a"],VFooter:h["a"],VIcon:b["a"]});var y=a("f309");n["a"].use(y["a"]);var x=new y["a"]({icons:{iconfont:"mdi"}}),k=(a("d3b7"),a("8c4f")),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",t._l(t.fullList,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-auto mt-4"},[a("v-toolbar",{attrs:{color:"blue"}},[a("v-toolbar-title",{staticClass:"display-1 white--text"},[t._v(t._s(e.category))])],1),a("v-list",t._l(e.content,(function(e,o){return a("v-list-item-group",{key:o,attrs:{multiple:""}},[a("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.checkBox(o,n)}}},[a("v-list-item-action",[a("v-checkbox",{on:{click:function(e){return e.stopPropagation(),t.checkBox(o,n)}},model:{value:e.status,callback:function(a){t.$set(e,"status",a)},expression:"idea.status"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.value))])],1),e.custom?a("span",[a("v-icon",{on:{click:function(e){return e.stopPropagation(),t.removeIdea(o,n)}}},[t._v("mdi-close")])],1):t._e()],1)],1)})),1)],1)],1)})),1),a("AddToList")],1)},C=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",[a("v-card",[a("v-form",{ref:"addToList",model:{value:t.formValidity,callback:function(e){t.formValidity=e},expression:"formValidity"}},[a("v-toolbar",{attrs:{color:"blue"}},[a("v-toolbar-title",{staticClass:"display-1 white--text"},[t._v("Add an Idea")])],1),a("v-card-text",[a("v-text-field",{attrs:{rules:t.inputIdeaRules,label:"New idea for checklist",clearable:""},model:{value:t.inputIdea,callback:function(e){t.inputIdea="string"===typeof e?e.trim():e},expression:"inputIdea"}}),a("v-select",{attrs:{items:t.categories,rules:t.inputCategoryRules,label:"Category"},model:{value:t.inputCategory,callback:function(e){t.inputCategory=e},expression:"inputCategory"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"success",disabled:!t.formValidity},on:{click:t.addIdea}},[t._v("Add to Checklist")])],1)],1)],1)],1)],1)],1)},S=[],w=(a("4160"),a("c975"),a("159b"),{computed:{fullList:function(){return this.$store.state.fullList},categories:function(){var t=[];return this.fullList.forEach((function(e){return t.push(e.category)})),t}},data:function(){return{inputIdea:"",inputCategory:null,inputIdeaRules:[function(t){return!!t||"Please enter an idea to add."},function(t){return t.length<32||"Your idea is too long."},function(t){return!/[^a-zA-Z0-9 ']/.test(t)||"Idea cannot contain special characters."}],inputCategoryRules:[function(t){return!!t||"Please select a category."}],formValidity:!1}},methods:{addIdea:function(){var t=this.categories.indexOf(this.inputCategory);-1!==t&&this.$store.dispatch("addIdeaAction",{idea:this.inputIdea,catIndex:t}),this.$refs.addToList.reset()}}}),L=w,T=a("b0af"),A=a("99d9"),O=a("4bd4"),P=a("0fd9"),j=a("b974"),$=a("2fa4"),E=a("8654"),R=a("71d9"),B=a("2a7f"),M=Object(s["a"])(L,_,S,!1,null,null,null),z=M.exports;l()(M,{VBtn:p["a"],VCard:T["a"],VCardActions:A["a"],VCardText:A["b"],VCol:v["a"],VForm:O["a"],VRow:P["a"],VSelect:j["a"],VSpacer:$["a"],VTextField:E["a"],VToolbar:R["a"],VToolbarTitle:B["a"]});var F={components:{AddToList:z},computed:{fullList:function(){return this.$store.state.fullList}},methods:{checkBox:function(t,e){this.$store.dispatch("changeStatusAction",{ideaIndex:t,catIndex:e})},removeIdea:function(t,e){this.$store.dispatch("removeIdeaAction",{ideaIndex:t,catIndex:e})}}},J=F,D=a("ac7c"),H=a("a523"),N=a("8860"),W=a("da13"),Y=a("1800"),q=a("5d23"),G=a("1baa"),Z=Object(s["a"])(J,V,C,!1,null,null,null),K=Z.exports;l()(Z,{VCard:T["a"],VCheckbox:D["a"],VCol:v["a"],VContainer:H["a"],VIcon:b["a"],VList:N["a"],VListItem:W["a"],VListItemAction:Y["a"],VListItemContent:q["a"],VListItemGroup:G["a"],VListItemTitle:q["b"],VRow:P["a"],VToolbar:R["a"],VToolbarTitle:B["a"]}),n["a"].use(k["a"]);var Q=[{path:"/",name:"checklist",component:K},{path:"/about",name:"about",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/random",name:"random",component:function(){return a.e("chunk-2d22c694").then(a.bind(null,"f2b4"))}}],U=new k["a"]({mode:"history",base:"/PuppySocializationChecklist/",routes:Q}),X=U,tt=(a("a434"),a("2f62"));n["a"].use(tt["a"]);var et=new tt["a"].Store({state:{fullList:[{category:"Sights",content:[{value:"See someone in a hat",status:!1,custom:!1},{value:"See someone in boots",status:!1,custom:!1},{value:"See someone wearing glasses",status:!1,custom:!1}]},{category:"Sounds",content:[{value:"Hear the sound of thunder",status:!1,custom:!1},{value:"Hear the sound of a doorbell",status:!1,custom:!1},{value:"Hear the sound of a vacuum",status:!1,custom:!1}]},{category:"Surfaces",content:[{value:"Walk on carpet",status:!1,custom:!1},{value:"Walk on hardwood floor",status:!1,custom:!1},{value:"Walk on concrete",status:!1,custom:!1}]},{category:"Miscellaneous",content:[{value:"Encounter another puppy",status:!1,custom:!1},{value:"Encounter an adult dog",status:!1,custom:!1},{value:"Encounter a cat",status:!1,custom:!1}]}]},mutations:{loadSavedData:function(t){localStorage.getItem("store")&&this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("store"))))},addIdea:function(t,e){t.fullList[e.catIndex].content.push({value:e.idea,status:!1,custom:!0})},changeStatus:function(t,e){t.fullList[e.catIndex].content[e.ideaIndex].status=!t.fullList[e.catIndex].content[e.ideaIndex].status},removeIdea:function(t,e){t.fullList[e.catIndex].content.splice(e.ideaIndex,1)}},actions:{addIdeaAction:function(t,e){var a=t.commit;a("addIdea",{idea:e.idea,catIndex:e.catIndex})},changeStatusAction:function(t,e){var a=t.commit;a("changeStatus",{ideaIndex:e.ideaIndex,catIndex:e.catIndex})},removeIdeaAction:function(t,e){var a=t.commit;a("removeIdea",{ideaIndex:e.ideaIndex,catIndex:e.catIndex})}}});et.subscribe((function(t,e){localStorage.setItem("store",JSON.stringify(e))}));var at=et;n["a"].config.productionTip=!1,new n["a"]({vuetify:x,router:X,store:at,beforeCreate:function(){this.$store.commit("loadSavedData")},render:function(t){return t(I)}}).$mount("#app")}});
//# sourceMappingURL=app.ffa5f299.js.map