(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(2),a=n(9),i=n(0),s=function(t){var e=t.setCategories,n=Object(c.useState)("as"),s=Object(r.a)(n,2),u=s[0],o=s[1];return Object(i.jsx)("form",{onSubmit:function(t){t.preventDefault(),u.trim().length>2&&(e((function(t){return[u].concat(Object(a.a)(t))})),o(""))},children:Object(i.jsx)("input",{type:"text",value:u,onChange:function(t){o(t.target.value)}})})},u=n(10),o=n(6),j=n.n(o),d=n(7),l=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,c,r,a,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=hPiCkQ2nqU5Ni3J7UrFu9fjvM8tjWdmA"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=t.id,n=t.title,c=t.url;return console.log(e,n,c),Object(i.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(i.jsx)("img",{src:c,alt:n}),Object(i.jsxs)("p",{children:[" ",n," "]})]})},O=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(r.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){l(t).then((function(t){i({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,s=n.loading;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:e}),s&&Object(i.jsx)("p",{children:"loading..."}),Object(i.jsx)("div",{className:"cardGrid",children:a.map((function(t){return Object(i.jsx)(b,Object(u.a)({},t),t.id)}))})]})},f=function(){var t=Object(c.useState)(["One Piece "]),e=Object(r.a)(t,2),n=e[0],a=e[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"GIFTSEARCH"}),Object(i.jsx)(s,{setCategories:a}),Object(i.jsx)("hr",{}),Object(i.jsx)("ol",{children:n.map((function(t){return Object(i.jsx)(O,{category:t},t)}))}),Object(i.jsx)(O,{children:" "})]})},h=n(8),p=n.n(h),m=(n(17),document.querySelector("#root"));p.a.render(Object(i.jsx)(f,{}),m)}},[[18,1,2]]]);
//# sourceMappingURL=main.f24c3d60.chunk.js.map