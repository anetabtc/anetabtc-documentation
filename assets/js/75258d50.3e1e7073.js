"use strict";(self.webpackChunkanetabtc_docs=self.webpackChunkanetabtc_docs||[]).push([[535],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(r),f=o,d=h["".concat(l,".").concat(f)]||h[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4615:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_label:"V3",sidebar_position:5},l="V3 Technical Architecture",s={unversionedId:"protocol-overview/v3",id:"protocol-overview/v3",title:"V3 Technical Architecture",description:"V3 will be most decentralized where anyone can run a vault by providing collateral. V3\u2019s solution is inspired by the Xclaim whitepaper, where vault operators have a vested interest in maintaining the security of the protocol. Vault operators have the ability to act maliciously, but would lose their collateral, which is less than the amount of BTC they have in their custody. In this case, effected users receive more tokens than the amount of BTC they minted on the protocol.",source:"@site/docs/protocol-overview/v3.md",sourceDirName:"protocol-overview",slug:"/protocol-overview/v3",permalink:"/docs/protocol-overview/v3",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol-overview/v3.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"V3",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"V2",permalink:"/docs/protocol-overview/v2"},next:{title:"LISO Overview",permalink:"/docs/user-guides/Liso/liso-home"}},u=[],p={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"v3-technical-architecture"},"V3 Technical Architecture"),(0,i.kt)("p",null,"V3 will be most decentralized where anyone can run a vault by providing collateral. V3\u2019s solution is inspired by the ",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/643.pdf"},"Xclaim whitepaper"),", where vault operators have a vested interest in maintaining the security of the protocol. Vault operators have the ability to act maliciously, but would lose their collateral, which is less than the amount of BTC they have in their custody. In this case, effected users receive more tokens than the amount of BTC they minted on the protocol."),(0,i.kt)("p",null,"After a successful V2 integration, we\u2019ll focus on delivering the final version, V3, which thus far has been the most researched and perfected. A breakdown on the differences of V2 and V3 can be found ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@anetaBTC/rosen-bridge-vs-interlay-an-analysis-on-wrapping-bitcoin-c9ae84da0e9d"},"here"),"."))}h.isMDXComponent=!0}}]);