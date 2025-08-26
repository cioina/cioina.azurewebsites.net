import{a as J}from"./chunk-4GXZZ3OK.js";import{a as K}from"./chunk-A2OABGTA.js";import{a as Q}from"./chunk-4FE7SGDH.js";import"./chunk-JURUIQWU.js";import"./chunk-FGYYR4GB.js";import"./chunk-5AKZCNKC.js";import"./chunk-3LVDNU5Y.js";import"./chunk-2O4RRVFQ.js";import"./chunk-3ONPPXIZ.js";import"./chunk-7KVONI56.js";import"./chunk-CYUQA6U2.js";import"./chunk-QSPVCWFF.js";import"./chunk-ENDVHOGZ.js";import"./chunk-7Z5445NA.js";import"./chunk-JDK4LXTV.js";import{k as q,l as H}from"./chunk-DHXEJWWB.js";import"./chunk-JGFQ7OF6.js";import{Ha as C,Ka as j,P as M,T as P,U as R,V as I,W as L,X as N,Y as B,Z as U,_ as V,h as o,j as g,oa as Z,v as W}from"./chunk-L252YWS3.js";import"./chunk-OY3XLBEH.js";import"./chunk-OP7BN7RJ.js";import{h as O}from"./chunk-3XFQOAE3.js";var X=W.pie,D={sections:new Map,showData:!1,config:X},f=D.sections,y=D.showData,se=structuredClone(X),ce=o(()=>structuredClone(se),"getConfig"),de=o(()=>{f=new Map,y=D.showData,P()},"clear"),pe=o(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);f.has(e)||(f.set(e,a),g.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ge=o(()=>f,"getSections"),fe=o(e=>{y=e},"setShowData"),ue=o(()=>y,"getShowData"),Y={getConfig:ce,clear:de,setDiagramTitle:B,getDiagramTitle:U,setAccTitle:R,getAccTitle:I,setAccDescription:L,getAccDescription:N,addSection:pe,getSections:ge,setShowData:fe,getShowData:ue},he=o((e,a)=>{K(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),me={parse:o(e=>O(null,null,function*(){let a=yield Q("pie",e);g.debug(a),he(a,Y)}),"parse")},ve=o(e=>`
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
`+e);let r=T.db,l=V(),A=H(r.getConfig(),l.pie),b=40,n=18,d=4,s=450,u=s,h=J(a),c=h.append("g");c.attr("transform","translate("+u/2+","+s/2+")");let{themeVariables:i}=l,[E]=q(i.pieOuterStrokeWidth);E??=2;let _=A.textPosition,p=Math.min(u,s)/2-b,ee=C().innerRadius(0).outerRadius(p),te=C().innerRadius(p*_).outerRadius(p*_);c.append("circle").attr("cx",0).attr("cy",0).attr("r",p+E/2).attr("class","pieOuterCircle");let m=r.getSections(),ae=xe(m),re=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],v=0;m.forEach(t=>{v+=t});let k=ae.filter(t=>(t.data.value/v*100).toFixed(0)!=="0"),S=Z(re);c.selectAll("mySlices").data(k).enter().append("path").attr("d",ee).attr("fill",t=>S(t.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(k).enter().append("text").text(t=>(t.data.value/v*100).toFixed(0)+"%").attr("transform",t=>"translate("+te.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-(s-50)/2).attr("class","pieTitleText");let z=[...m.entries()].map(([t,w])=>({label:t,value:w})),x=c.selectAll(".legend").data(z).enter().append("g").attr("class","legend").attr("transform",(t,w)=>{let G=n+d,oe=G*z.length/2,le=12*n,ne=w*G-oe;return"translate("+le+","+ne+")"});x.append("rect").attr("width",n).attr("height",n).style("fill",t=>S(t.label)).style("stroke",t=>S(t.label)),x.append("text").attr("x",n+d).attr("y",n-d).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);let ie=Math.max(...x.selectAll("text").nodes().map(t=>t?.getBoundingClientRect().width??0)),F=u+b+n+d+ie;h.attr("viewBox",`0 0 ${F} ${s}`),M(h,s,F,A.useMaxWidth)},"draw"),Ce={draw:we},Ee={parser:me,db:Y,renderer:Ce,styles:Se};export{Ee as diagram};
