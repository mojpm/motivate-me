(this["webpackJsonproot-cra"]=this["webpackJsonproot-cra"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(1),n=c.n(a),o=c(18),r=c.n(o),i=c(8),u=c(3),j=c(11),h=c(19),l=c(12),d=c(21),b=function(e){var t=e.quoteText,c=e.quoteAuthor,a=e.quoteGenre,n=e.quoteSlug;return Object(s.jsx)("div",{className:"quote-container",children:Object(s.jsxs)("div",{className:"quote",children:[Object(s.jsx)("div",{className:"quote-bar"}),Object(s.jsxs)("div",{className:"quote-text",children:[Object(s.jsx)(h.a,{size:"30"}),Object(s.jsx)("h1",{className:"text",children:t}),Object(s.jsx)("div",{className:"author-info",children:Object(s.jsxs)(i.b,{to:"/author/"+n,className:"author-link",children:[Object(s.jsx)("h4",{className:"author",children:c}),Object(s.jsx)("h4",{className:"genre",children:a}),Object(s.jsxs)("div",{className:"touch-icon",children:[Object(s.jsx)(l.a,{size:"25",className:"right-arrow"}),Object(s.jsx)(d.a,{size:"28",className:"point-icon"})]})]})})]})]})})},x=c(40),m=c(22),O=c(24),p=(c(35),function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)({data:[{quoteText:"I think the thing we see is that as people are using video games more, they tend to watch passive TV a bit less. And so using the PC for the Internet, playing video games, is starting to cut into the rather unbelievable amount of time people spend watching TV.",quoteAuthor:"Bill Gates",quoteGenre:"business"}]}),r=Object(j.a)(o,2),i=r[0],u=r[1],h=function(){try{fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random").then((function(e){return e.json()})).then((function(e){u(e)}))}catch(e){console.error("Error: ",e)}};Object(a.useEffect)(h,[]);var d,p={author:i.data[0].quoteAuthor,text:i.data[0].quoteText,genre:i.data[0].quoteGenre,slug:(d=i.data[0].quoteAuthor,d.toLowerCase().split(" ").join("-"))},N=function(){return n(!c)},q=function(){return Object(s.jsxs)("div",{className:"feature-container ",children:[Object(s.jsx)("div",{className:"modes",onClick:N,children:Object(s.jsx)(m.a,{className:"darkmode",size:"30"})}),Object(s.jsx)("div",{className:"share-twitter",children:Object(s.jsx)(x.a,{url:"twitter.com/intent/tweet",title:i,children:Object(s.jsx)(O.a,{className:"twitter-icon",size:"32"})})}),Object(s.jsxs)("div",{className:"next-quote",onClick:h,children:[Object(s.jsx)("button",{className:"next",children:"Next Quote"}),Object(s.jsx)(l.a,{size:"25",className:"next-icon"})]})]})};return Object(s.jsxs)("div",{className:c?"Dark-Mode":"Light-Mode",children:[Object(s.jsx)(b,{quoteText:p.text,quoteAuthor:p.author,quoteGenre:p.genre,quoteSlug:p.slug}),Object(s.jsx)(q,{})]})}),N=function(e){var t=e.quoteText;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"ind-author-quote",children:[Object(s.jsx)("div",{className:"ind-quote-bar"}),Object(s.jsx)("div",{className:"quote-text",children:t})]})})},q=(c(36),function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],o=c[1],r=e.match.params.authorName.split("-").map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ");return Object(a.useEffect)((function(){fetch("https://quote-garden.herokuapp.com/api/v3/quotes?author=".concat(r)).then((function(e){return e.json()})).then((function(e){o(e.data)}))}),[r]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"author-catalogue",children:[Object(s.jsx)("div",{className:"back-to-home",children:Object(s.jsx)(i.b,{to:"/",children:Object(s.jsx)("button",{className:"back",children:"Back"})})}),Object(s.jsxs)("div",{className:"author-quotes",children:[Object(s.jsx)("h1",{className:"author-name",children:r}),n.map((function(e,t){return Object(s.jsx)(N,{quoteText:e.quoteText},t)}))]})]})})}),f=(c(37),function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{path:"/",exact:!0,component:p}),Object(s.jsx)(u.a,{path:"/author/:authorName",exact:!0,component:q})]})})});r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(i.a,{children:Object(s.jsx)(f,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e086bd1e.chunk.js.map