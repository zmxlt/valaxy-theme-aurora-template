import{d as l,u,j as f,k as i,l as p,n as _,q as k,o as m,e as d,r as n,s as w,f as y,t as C,v,x as h,i as M,w as V}from"./app-592255ea.js";const $=l({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(c){const s=(u().value||{}).iconStyle||{},a=f("onContentUpdated"),o=i();function r(){var e;C(o.value),v(o.value,s),h(o.value,s),(e=a.value)==null||e.call(a)}return p(()=>{r()}),_(),k(),(e,x)=>e.$slots.default?(m(),d("article",{key:0,class:w(e.frontmatter.markdown!==!1&&"markdown-body")},[n(e.$slots,"default",{ref_key:"content",ref:o,onVnodeUpdated:r})],2)):y("v-if",!0)}}),g={class:"markdown"},S=l({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(c){return(t,s)=>{const a=$;return m(),d("div",g,[n(t.$slots,"markdown-content",{},()=>[M(a,{frontmatter:t.frontmatter},{default:V(()=>[n(t.$slots,"main-content-md"),n(t.$slots,"default")]),_:3},8,["frontmatter"])])])}}});export{S as _};
