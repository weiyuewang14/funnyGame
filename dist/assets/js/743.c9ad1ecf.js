"use strict";(self["webpackChunkminigames"]=self["webpackChunkminigames"]||[]).push([[743],{9743:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"typing-container"},[e("h1",[t._v("打字通")]),e("div",{staticClass:"text-content"},[t._v(" "+t._s(t.textContent)+" ")]),e("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:12},placeholder:"请输入上方内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),e("div",{staticClass:"operate"},[e("el-button",{style:{display:t.isDisplay},attrs:{disabled:t.isDisabled},on:{click:t.startGame}},[t._v("开始")]),e("div",{staticClass:"timer"},[t._v(t._s(t.timer))])],1)],1)},a=[];const n="Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. This quote by Christian D. Larson reminds us that we all have the power within us to overcome any obstacle we may face. When we have confidence in ourselves and our abilities, we can achieve great things. So, let's trust ourselves, believe in our dreams, and work hard to make them a reality.";let l;var o={name:"typing",data(){return{content:"",textContent:"你准备好了吗？",timer:"",isDisabled:!1,isDisplay:"block"}},mounted(){},methods:{startGame(){this.timer="60",this.content="",this.isDisabled=!0,this.isDisplay="none",this.textContent=n,l=setInterval((()=>{const t=parseInt(this.timer)-1;0===t&&this.endGame(),this.timer=t+""}),1e3),x},endGame(){clearInterval(l);const t=this.calculateScore();this.textContent=`你的得分是${t}分`,this.isDisplay="block",this.timer="60",this.isDisabled=!1},calculateScore(){const t=this.content.trim().split(" "),e=n.trim().split(" ");let s=0;for(let i=0;i<t.length;i++)t[i]===e[i]&&s++;return(s/e.length*100).toFixed(2)}}},r=o,c=s(1001),h=(0,c.Z)(r,i,a,!1,null,null,null),u=h.exports}}]);
//# sourceMappingURL=743.c9ad1ecf.js.map