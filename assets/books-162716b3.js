import{d as g,u as N,L as x,z as b,O as w,o,e as t,i as l,I as r,g as n,F as p,B as v,f as s,C as c,s as A,b as F,c as h,w as y,K as q,N as L}from"./app-592255ea.js";import{a as R,_ as T}from"./index-9636bf2a.js";const V={class:"books"},z={class:"book-list"},D={class:"book-info"},Q={class:"book-image-container"},S={key:0,class:"book-image"},E=["src","alt"],K=["href"],M={class:"book-meta"},O={key:0},W={key:1},j={key:2},G={key:3,class:"rec-index"},H=n("span",null,"推荐指数：",-1),J={class:"book-desc"},P=g({__name:"AuroraBooks",setup(C){const i=N(),a=x(),m=i.value.iconStyle.bookRecIndex,d=b().name,u=R(i.value.menu,d),_=typeof a.value.books=="string"?w(a.value.books):a.value.books;return(k,f)=>{const B=T;return o(),t("div",V,[l(B,{quote:r(u)},null,8,["quote"]),n("ul",z,[(o(!0),t(p,null,v(r(_),(e,$)=>(o(),t("li",{key:$,class:"book"},[n("div",D,[n("div",Q,[e.cover?(o(),t("div",S,[e.cover?(o(),t("img",{key:0,src:e.cover,alt:e.name},null,8,E)):s("v-if",!0)])):s("v-if",!0),e.source?(o(),t("a",{key:1,href:e.source,target:"_blank",class:"book-source-url"},null,8,K)):s("v-if",!0)]),n("div",M,[e.name?(o(),t("h3",O,c(e.name),1)):s("v-if",!0),e.author?(o(),t("p",W,c(`作者：${e.author}`),1)):s("v-if",!0),e.publicationTime?(o(),t("p",j,c(`出版时间：${e.publicationTime}`),1)):s("v-if",!0),e.recommendIndex?(o(),t("div",G,[H,(o(!0),t(p,null,v(e.recommendIndex,I=>(o(),t("i",{key:I,class:A(["icon-rec-index",r(m)])},null,2))),128))])):s("v-if",!0)])]),n("div",J,[n("p",null,c(e.description),1)])]))),128))])])}}}),Y=g({__name:"books",setup(C){const a=x().value.comment||!1;return(m,d)=>{const u=P,_=F("router-view"),k=L,f=q;return o(),h(f,null,{"main-content":y(()=>[l(u),l(_)]),"main-comment":y(()=>[r(a)?(o(),h(k,{key:0})):s("v-if",!0)]),_:1})}}});export{Y as default};
