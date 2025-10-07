import{a as F}from"./chunk-YOFME7Y3.js";import{a as A}from"./chunk-4FE7SGDH.js";import{a as E}from"./chunk-KLFAS2WZ.js";import"./chunk-JURUIQWU.js";import"./chunk-FGYYR4GB.js";import"./chunk-5AKZCNKC.js";import"./chunk-3LVDNU5Y.js";import"./chunk-2O4RRVFQ.js";import"./chunk-3ONPPXIZ.js";import"./chunk-7KVONI56.js";import"./chunk-CYUQA6U2.js";import"./chunk-QSPVCWFF.js";import"./chunk-ENDVHOGZ.js";import"./chunk-7Z5445NA.js";import"./chunk-JDK4LXTV.js";import{l as w}from"./chunk-JOMVOYKY.js";import"./chunk-JGFQ7OF6.js";import{L as $,P as B,Q as C,R as S,S as D,T,U as P,V as z,q as x,y}from"./chunk-5I56DNM6.js";import"./chunk-OY3XLBEH.js";import{b as h,d as u}from"./chunk-WQPM36LO.js";import"./chunk-OP7BN7RJ.js";import{a as m,h as v}from"./chunk-3XFQOAE3.js";var M=x.packet,W=class{constructor(){this.packet=[],this.setAccTitle=C,this.getAccTitle=S,this.setDiagramTitle=P,this.getDiagramTitle=z,this.getAccDescription=T,this.setAccDescription=D}static{h(this,"PacketDB")}getConfig(){let t=w(m(m({},M),y().packet));return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){B(),this.packet=[]}},Y=1e4,I=h((t,e)=>{F(t,e);let a=-1,o=[],n=1,{bitsPerRow:l}=e.getConfig();for(let{start:r,end:s,bits:d,label:c}of t.blocks){if(r!==void 0&&s!==void 0&&s<r)throw new Error(`Packet block ${r} - ${s} is invalid. End must be greater than start.`);if(r??=a+1,r!==a+1)throw new Error(`Packet block ${r} - ${s??r} is not contiguous. It should start from ${a+1}.`);if(d===0)throw new Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);for(s??=r+(d??1)-1,d??=s-r+1,a=s,u.debug(`Packet block ${r} - ${a} with label ${c}`);o.length<=l+1&&e.getPacket().length<Y;){let[p,i]=O({start:r,end:s,bits:d,label:c},n,l);if(o.push(p),p.end+1===n*l&&(e.pushWord(o),o=[],n++),!i)break;({start:r,end:s,bits:d,label:c}=i)}}e.pushWord(o)},"populate"),O=h((t,e,a)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*a)return[t,void 0];let o=e*a-1,n=e*a;return[{start:t.start,end:o,label:t.label,bits:o-t.start},{start:n,end:t.end,label:t.label,bits:t.end-n}]},"getNextFittingBlock"),_={parser:{yy:void 0},parse:h(t=>v(null,null,function*(){let e=yield A("packet",t),a=_.parser?.yy;if(!(a instanceof W))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");u.debug(e),I(e,a)}),"parse")},j=h((t,e,a,o)=>{let n=o.db,l=n.getConfig(),{rowHeight:r,paddingY:s,bitWidth:d,bitsPerRow:c}=l,p=n.getPacket(),i=n.getDiagramTitle(),f=r+s,g=f*(p.length+1)-(i?0:r),k=d*c+2,b=E(e);b.attr("viewbox",`0 0 ${k} ${g}`),$(b,g,k,l.useMaxWidth);for(let[N,L]of p.entries())G(b,L,N,l);b.append("text").text(i).attr("x",k/2).attr("y",g-f/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),G=h((t,e,a,{rowHeight:o,paddingX:n,paddingY:l,bitWidth:r,bitsPerRow:s,showBits:d})=>{let c=t.append("g"),p=a*(o+l)+l;for(let i of e){let f=i.start%s*r+1,g=(i.end-i.start+1)*r-n;if(c.append("rect").attr("x",f).attr("y",p).attr("width",g).attr("height",o).attr("class","packetBlock"),c.append("text").attr("x",f+g/2).attr("y",p+o/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!d)continue;let k=i.end===i.start,b=p-2;c.append("text").attr("x",f+(k?g/2:0)).attr("y",b).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(i.start),k||c.append("text").attr("x",f+g).attr("y",b).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),H={draw:j},K={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},R=h(({packet:t}={})=>{let e=w(K,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),Z={parser:_,get db(){return new W},renderer:H,styles:R};export{Z as diagram};
