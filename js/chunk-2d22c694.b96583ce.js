(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c694"],{f2b4:function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"0",md:"3"}}),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card",[e("v-toolbar",{attrs:{color:"blue"}},[e("v-toolbar-title",{staticClass:"display-1 white--text"},[a._v("Random Idea")])],1),a.availableIdeas.length>0?e("p",{staticClass:"text-center mt-5 display-1"},[a._v(a._s(a.fullList[a.randomCatIndex].content[a.randomIdeaIndex].value))]):e("p",{staticClass:"text-center mt-5 display-1"},[a._v(a._s(a.endPhrase))]),e("v-row",[e("v-col",[e("v-btn",{staticClass:"ml-4",attrs:{color:"primary",large:a.$vuetify.breakpoint.lgAndUp,disabled:a.availableIdeas.length<2},on:{click:a.calculateNewRandomIndex}},[a._v("Show another")])],1),a.$vuetify.breakpoint.lgAndUp?e("v-spacer"):a._e(),e("v-col",[e("v-btn",{attrs:{color:"success",large:a.$vuetify.breakpoint.lgAndUp,disabled:0===a.availableIdeas.length},on:{click:a.markCompleted}},[a._v("Completed")])],1)],1)],1)],1)],1)],1)},n=[],d={created:function(){this.calculateNewRandomIndex()},computed:{fullList:function(){return this.$store.state.fullList},availableIdeas:function(){for(var a=[],t=0;t<this.fullList.length;t++)for(var e=0;e<this.fullList[t].content.length;e++)!1===this.fullList[t].content[e].status&&a.push({catIndex:t,ideaIndex:e});return a}},data:function(){return{randomCatIndex:null,randomIdeaIndex:null,lastRandomIdea:null,endPhrase:"You have completed everything on the checklist!"}},methods:{calculateNewRandomIndex:function(){if(!(this.availableIdeas.length<=0)){var a=Math.floor(Math.random()*Math.floor(this.availableIdeas.length));while(this.lastRandomIdea===a)a=Math.floor(Math.random()*Math.floor(this.availableIdeas.length));this.lastRandomIdea=a,this.randomCatIndex=this.availableIdeas[a].catIndex,this.randomIdeaIndex=this.availableIdeas[a].ideaIndex}},markCompleted:function(){this.$store.dispatch("changeStatusAction",{ideaIndex:this.randomIdeaIndex,catIndex:this.randomCatIndex}),this.calculateNewRandomIndex()}}},o=d,s=e("2877"),i=e("6544"),r=e.n(i),c=e("8336"),h=e("b0af"),u=e("62ad"),v=e("a523"),I=e("0fd9"),m=e("2fa4"),f=e("71d9"),p=e("2a7f"),b=Object(s["a"])(o,l,n,!1,null,null,null);t["default"]=b.exports;r()(b,{VBtn:c["a"],VCard:h["a"],VCol:u["a"],VContainer:v["a"],VRow:I["a"],VSpacer:m["a"],VToolbar:f["a"],VToolbarTitle:p["a"]})}}]);
//# sourceMappingURL=chunk-2d22c694.b96583ce.js.map