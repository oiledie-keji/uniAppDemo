(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/zhouWei-navBar/index"],{"386b":function(t,n,o){"use strict";var e=o("d22f"),r=o.n(e);r.a},8070:function(t,n,o){"use strict";var e,r=function(){var t=this,n=t.$createElement;t._self._c},a=[];o.d(n,"b",(function(){return r})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return e}))},"8bda":function(t,n,o){"use strict";o.r(n);var e=o("8070"),r=o("d94d");for(var a in r)"default"!==a&&function(t){o.d(n,t,(function(){return r[t]}))}(a);o("386b");var i,s=o("f0c5"),l=Object(s["a"])(r["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],i);n["default"]=l.exports},d22f:function(t,n,o){},d94d:function(t,n,o){"use strict";o.r(n);var e=o("faad"),r=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,(function(){return e[t]}))}(a);n["default"]=r.a},faad:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=["pages/navList","pages/demo6"],e="/pages/navList",r=["#FFF","#FFFFFF","white","rgb(255,255,255)","rgba(255,255,255,1)"],a={props:{backState:{default:function(){return 1e3}},home:{type:Boolean,default:function(){return!1}},bgColor:{type:[String,Array],default:function(){return"#FFFFFF"}},bgColorAngle:{type:[String,Number],default:function(){return 90}},fontColor:{type:String,default:function(){return"#000000"}},titleCenter:{type:Boolean,default:function(){return!0}},title:{type:String,default:function(){return""}},type:{type:String,default:function(){return"fixed"}},transparentFixedFontColor:{type:String,default:function(){return"#000000"}},scrollTop:{type:Number,default:function(){return 0}},shadow:{type:Boolean,default:function(){return!0}}},data:function(){return{firstPage:!1,transparentValue:1,navTitle:"",navFontColor:"#000000",navBgColor:"none",navTransparentFixedFontColor:"#000000",themeBgColor:!1,statusBarHeight:0,lastFrontColor:""}},computed:{back:function(){return 1e3==this.backState||3e3==this.backState},navFixed:function(){return"transparentFixed"==this.type||"fixed"==this.type},navShadow:function(){return!(!this.bgColor||"string"!=typeof this.bgColor)&&(this.shadow&&"transparent"!==this.type&&r.includes(this.bgColor))},isWhite:function(){return r.includes(this.navFontColor)},isTwoBtn:function(){return(1e3==this.backState||3e3==this.backState)&&this.home&&!this.firstPage}},watch:{title:function(t){this.navTitle=t},fontColor:function(t){this.navFontColor=t,this.settingColor()},bgColor:function(t){this.getNavBgColor(t)},transparentFixedFontColor:function(t){this.navTransparentFixedFontColor=t},scrollTop:function(t){this.pageScroll({scrollTop:t})}},created:function(){this.navTitle=this.title,this.navFontColor=this.fontColor,this.getNavBgColor(this.bgColor),this.navTransparentFixedFontColor=this.transparentFixedFontColor,this.statusBarHeight=t.getSystemInfoSync()["statusBarHeight"];this.pageScroll({scrollTop:this.scrollTop});var n=getCurrentPages(),e=n.length;1!=e||o.includes(n[0].route)||(this.firstPage=!0)},methods:{onBackPage:function(){3e3==this.backState?this.$emit("backClick"):t.navigateBack()},onBackHome:function(){t.switchTab({url:e})},pageScroll:function(t){"transparentFixed"==this.type&&(t.scrollTop&&t.scrollTop>0?t.scrollTop>180?this.transparentValue=1:this.transparentValue=t.scrollTop/180:this.transparentValue=0,this.settingColor())},getNavBgColor:function(t){if("themeBgColor"==t)this.themeBgColor=!0,this.navBgColor="none";else if("transparent"==this.type)this.themeBgColor=!1,this.navBgColor="none";else if("string"==typeof t)this.navBgColor="linear-gradient(90deg,"+t+","+t+")";else if(Array.isArray(t)&&t.length>=2){var n="linear-gradient("+this.bgColorAngle+"deg";t.forEach((function(t){"string"==typeof t?n+=","+t:"object"==typeof t&&(n+=","+t.color+" "+t.scale)})),n+=")",this.navBgColor=n}},settingColor:function(){var n=this,o=this.navFontColor;"transparentFixed"==this.type&&this.transparentValue<=.5&&(o=this.navTransparentFixedFontColor);var e="#000000";r.includes(o)&&(e="#ffffff"),this.lastFrontColor!=e&&setTimeout((function(){n.lastFrontColor=e,t.setNavigationBarColor({frontColor:e,backgroundColor:"#FFFFFF"})}),150)}}};n.default=a}).call(this,o("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/zhouWei-navBar/index-create-component',
    {
        'components/zhouWei-navBar/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8bda"))
        })
    },
    [['components/zhouWei-navBar/index-create-component']]
]);
