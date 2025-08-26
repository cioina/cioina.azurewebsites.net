import{a as E}from"./chunk-4GXZZ3OK.js";import{a as F}from"./chunk-A2OABGTA.js";import{a as A}from"./chunk-4FE7SGDH.js";import"./chunk-JURUIQWU.js";import"./chunk-FGYYR4GB.js";import"./chunk-5AKZCNKC.js";import"./chunk-3LVDNU5Y.js";import"./chunk-2O4RRVFQ.js";import"./chunk-3ONPPXIZ.js";import"./chunk-7KVONI56.js";import"./chunk-CYUQA6U2.js";import"./chunk-QSPVCWFF.js";import"./chunk-ENDVHOGZ.js";import"./chunk-7Z5445NA.js";import"./chunk-JDK4LXTV.js";import{l as w}from"./chunk-DHXEJWWB.js";import"./chunk-JGFQ7OF6.js";import{D as y,P as $,T as B,U as C,V as S,W as D,X as T,Y as P,Z as z,h,j as m,v as x}from"./chunk-L252YWS3.js";import"./chunk-OY3XLBEH.js";import"./chunk-OP7BN7RJ.js";import{a as u,h as v}from"./chunk-3XFQOAE3.js";var M=x.packet,W=class{constructor(){this.packet=[],this.setAccTitle=C,this.getAccTitle=S,this.setDiagramTitle=P,this.getDiagramTitle=z,this.getAccDescription=T,this.setAccDescription=D}static{h(this,"PacketDB")}getConfig(){let t=w(u(u({},M),y().packet));return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){B(),this.packet=[]}},Y=1e4,I=h((t,e)=>{F(t,e);let r=-1,o=[],n=1,{bitsPerRow:l}=e.getConfig();for(let{start:a,end:s,bits:d,label:c}of t.blocks){if(a!==void 0&&s!==void 0&&s<a)throw new Error(`Packet block ${a} - ${s} is invalid. End must be greater than start.`);if(a??=r+1,a!==r+1)throw new Error(`Packet block ${a} - ${s??a} is not contiguous. It should start from ${r+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(s??=a+(d??1)-1,d??=s-a+1,r=s,m.debug(`Packet block ${a} - ${r} with label ${c}`);o.length<=l+1&&e.getPacket().length<Y;){let[p,i]=O({start:a,end:s,bits:d,label:c},n,l);if(o.push(p),p.end+1===n*l&&(e.pushWord(o),o=[],n++),!i)break;({start:a,end:s,bits:d,label:c}=i)}}e.pushWord(o)},"populate"),O=h((t,e,r)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*r)return[t,void 0];let o=e*r-1,n=e*r;return[{start:t.start,end:o,label:t.label,bits:o-t.start},{start:n,end:t.end,label:t.label,bits:t.end-n}]},"getNextFittingBlock"),_={parser:{yy:void 0},parse:h(t=>v(null,null,function*(){let e=yield A("packet",t),r=_.parser?.yy;if(!(r instanceof W))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");m.debug(e),I(e,r)}),"parse")},j=h((t,e,r,o)=>{let n=o.db,l=n.getConfig(),{rowHeight:a,paddingY:s,bitWidth:d,bitsPerRow:c}=l,p=n.getPacket(),i=n.getDiagramTitle(),f=a+s,g=f*(p.length+1)-(i?0:a),k=d*c+2,b=E(e);b.attr("viewbox",`0 0 ${k} ${g}`),$(b,g,k,l.useMaxWidth);for(let[N,L]of p.entries())G(b,L,N,l);b.append("text").text(i).attr("x",k/2).attr("y",g-f/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),G=h((t,e,r,{rowHeight:o,paddingX:n,paddingY:l,bitWidth:a,bitsPerRow:s,showBits:d})=>{let c=t.append("g"),p=r*(o+l)+l;for(let i of e){let f=i.start%s*a+1,g=(i.end-i.start+1)*a-n;if(c.append("rect").attr("x",f).attr("y",p).attr("width",g).attr("height",o).attr("class","packetBlock"),c.append("text").attr("x",f+g/2).attr("y",p+o/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!d)continue;let k=i.end===i.start,b=p-2;c.append("text").attr("x",f+(k?g/2:0)).attr("y",b).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(i.start),k||c.append("text").attr("x",f+g).attr("y",b).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),H={draw:j},K={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},R=h(({packet:t}={})=>{let e=w(K,t);return`
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
	`},"styles"),V={parser:_,get db(){return new W},renderer:H,styles:R};export{V as diagram};
