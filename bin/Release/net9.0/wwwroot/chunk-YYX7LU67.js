import{a as K}from"./chunk-YOFME7Y3.js";import{a as Q}from"./chunk-4FE7SGDH.js";import{a as q}from"./chunk-KLFAS2WZ.js";import"./chunk-JURUIQWU.js";import"./chunk-FGYYR4GB.js";import"./chunk-5AKZCNKC.js";import"./chunk-3LVDNU5Y.js";import"./chunk-2O4RRVFQ.js";import"./chunk-3ONPPXIZ.js";import"./chunk-7KVONI56.js";import"./chunk-CYUQA6U2.js";import"./chunk-QSPVCWFF.js";import"./chunk-ENDVHOGZ.js";import"./chunk-7Z5445NA.js";import"./chunk-JDK4LXTV.js";import{k as H,l as J}from"./chunk-JOMVOYKY.js";import"./chunk-JGFQ7OF6.js";import{L as M,P,Q as R,R as I,S as L,T as N,U as B,V as U,W as V,q as W}from"./chunk-5I56DNM6.js";import"./chunk-OY3XLBEH.js";import{H as C,K as j,b as o,d as g,o as Z}from"./chunk-WQPM36LO.js";import"./chunk-OP7BN7RJ.js";import{h as O}from"./chunk-3XFQOAE3.js";var X=W.pie,D={sections:new Map,showData:!1,config:X},f=D.sections,y=D.showData,se=structuredClone(X),ce=o(()=>structuredClone(se),"getConfig"),de=o(()=>{f=new Map,y=D.showData,P()},"clear"),pe=o(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);f.has(e)||(f.set(e,a),g.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ge=o(()=>f,"getSections"),fe=o(e=>{y=e},"setShowData"),ue=o(()=>y,"getShowData"),Y={getConfig:ce,clear:de,setDiagramTitle:B,getDiagramTitle:U,setAccTitle:R,getAccTitle:I,setAccDescription:L,getAccDescription:N,addSection:pe,getSections:ge,setShowData:fe,getShowData:ue},me=o((e,a)=>{K(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),he={parse:o(e=>O(null,null,function*(){let a=yield Q("pie",e);g.debug(a),me(a,Y)}),"parse")},ve=o(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),Se=ve,xe=o(e=>{let a=[...e.values()].reduce((r,l)=>r+l,0),$=[...e.entries()].map(([r,l])=>({label:r,value:l})).filter(r=>r.value/a*100>=1).sort((r,l)=>l.value-r.value);return j().value(r=>r.value)($)},"createPieArcs"),we=o((e,a,$,T)=>{g.debug(`rendering pie chart
`+e);let r=T.db,l=V(),A=J(r.getConfig(),l.pie),b=40,n=18,d=4,s=450,u=s,m=q(a),c=m.append("g");c.attr("transform","translate("+u/2+","+s/2+")");let{themeVariables:i}=l,[E]=H(i.pieOuterStrokeWidth);E??=2;let _=A.textPosition,p=Math.min(u,s)/2-b,ee=C().innerRadius(0).outerRadius(p),te=C().innerRadius(p*_).outerRadius(p*_);c.append("circle").attr("cx",0).attr("cy",0).attr("r",p+E/2).attr("class","pieOuterCircle");let h=r.getSections(),ae=xe(h),re=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],v=0;h.forEach(t=>{v+=t});let k=ae.filter(t=>(t.data.value/v*100).toFixed(0)!=="0"),S=Z(re);c.selectAll("mySlices").data(k).enter().append("path").attr("d",ee).attr("fill",t=>S(t.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(k).enter().append("text").text(t=>(t.data.value/v*100).toFixed(0)+"%").attr("transform",t=>"translate("+te.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-(s-50)/2).attr("class","pieTitleText");let z=[...h.entries()].map(([t,w])=>({label:t,value:w})),x=c.selectAll(".legend").data(z).enter().append("g").attr("class","legend").attr("transform",(t,w)=>{let G=n+d,oe=G*z.length/2,le=12*n,ne=w*G-oe;return"translate("+le+","+ne+")"});x.append("rect").attr("width",n).attr("height",n).style("fill",t=>S(t.label)).style("stroke",t=>S(t.label)),x.append("text").attr("x",n+d).attr("y",n-d).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);let ie=Math.max(...x.selectAll("text").nodes().map(t=>t?.getBoundingClientRect().width??0)),F=u+b+n+d+ie;m.attr("viewBox",`0 0 ${F} ${s}`),M(m,s,F,A.useMaxWidth)},"draw"),Ce={draw:we},_e={parser:he,db:Y,renderer:Ce,styles:Se};export{_e as diagram};
