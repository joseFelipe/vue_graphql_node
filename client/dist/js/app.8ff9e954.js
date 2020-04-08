(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},a=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("85ec"),n=i.n(s);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e623"),i("e379"),i("5dc8"),i("37e1");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("DomainList")],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"head text-center"},[i("h2",[t._v("Herocode")]),i("h6",{staticClass:"text-secondary"},[t._v(" Gerador de nomes utilizando VueJS, GrapQL e NodeJS ")])])}],r=(i("f9e3"),i("7f10"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"main"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md"},[i("AppItemList",{attrs:{title:"Prefixos",items:t.prefixes},on:{addItem:t.addPrefix,deleteItem:t.deletePrefix}})],1),i("div",{staticClass:"col-md"},[i("AppItemList",{attrs:{title:"Sufixos",items:t.sufixes},on:{addItem:t.addSufix,deleteItem:t.deleteSufix}})],1)]),i("br"),i("h5",[t._v(" Domínios "),i("span",{staticClass:"badge badge-info"},[t._v(t._s(t.domains.length))])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("ul",{staticClass:"list-group"},t._l(t.domains,(function(e){return i("li",{key:e.name,staticClass:"list-group-item"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md"},[t._v(" "+t._s(e.name)+" ")]),i("div",{staticClass:"col-md text-right"},[i("a",{staticClass:"btn btn-info",attrs:{href:e.checkout,target:"_blank"}},[i("span",{staticClass:"fa fa-shopping-cart"})])])])])})),0)])])])])])}),o=[],l=(i("c975"),i("a434"),i("b85c")),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h5",[t._v(" "+t._s(t.title)+" "),i("span",{staticClass:"badge badge-info"},[t._v(t._s(t.items.length))])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("ul",{staticClass:"list-group"},t._l(t.items,(function(e){return i("li",{key:e,staticClass:"list-group-item"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md"},[t._v(" "+t._s(e)+" ")]),i("div",{staticClass:"col-md text-right"},[i("button",{staticClass:"btn btn-info",on:{click:function(i){return t.deleteItem(e)}}},[i("span",{staticClass:"fa fa-trash"})])])])])})),0),i("br"),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Digite o item"},domProps:{value:t.item},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem(t.item)},input:function(e){e.target.composing||(t.item=e.target.value)}}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-info",on:{click:function(e){return t.addItem(t.item)}}},[i("span",{staticClass:"fa fa-plus"})])])])])])])},u=[],d={name:"AppItemList",props:["title","items"],data:function(){return{item:""}},methods:{addItem:function(t){this.$emit("addItem",t),this.item=""},deleteItem:function(t){this.$emit("deleteItem",t)}}},f=d,p=i("2877"),m=Object(p["a"])(f,c,u,!1,null,null,null),v=m.exports,h={name:"App",components:{AppItemList:v},data:function(){return{prefixes:["Air","Jet","Flight"],sufixes:["Hub","Station","Mart"]}},methods:{addPrefix:function(t){this.prefixes.push(t)},addSufix:function(t){this.sufixes.push(t)},deletePrefix:function(t){this.prefixes.splice(this.prefixes.indexOf(t),1)},deleteSufix:function(t){this.sufixes.splice(this.sufixes.indexOf(t),1)}},computed:{domains:function(){var t,e=[],i=Object(l["a"])(this.prefixes);try{for(i.s();!(t=i.n()).done;){var s,n=t.value,a=Object(l["a"])(this.sufixes);try{for(a.s();!(s=a.n()).done;){var r=s.value,o=n+r,c=o.toLowerCase(),u="https://checkout.hostgator.com.br/?a=add&sld=".concat(c,"&tld=.net.br");e.push({name:o,checkout:u})}}catch(d){a.e(d)}finally{a.f()}}}catch(d){i.e(d)}finally{i.f()}return e}}},b=h,x=Object(p["a"])(b,r,o,!1,null,null,null),g=x.exports,C={name:"App",components:{DomainList:g}},y=C,_=(i("034f"),Object(p["a"])(y,n,a,!1,null,null,null)),O=_.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.8ff9e954.js.map