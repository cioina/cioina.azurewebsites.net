import{a as yt,b as dt,c as pt,f as U}from"./chunk-EQZ33KEH.js";import"./chunk-JGFQ7OF6.js";import{Da as H,O as nt,S as st,T as at,U as lt,V as ot,W as ct,X as ht,Y as ut,Z as E,h as n,ia as z}from"./chunk-E5USLX4Q.js";import"./chunk-3XFQOAE3.js";var J=function(){var t=n(function(g,r,a,l){for(a=a||{},l=g.length;l--;a[g[l]]=r);return a},"o"),e=[6,8,10,11,12,14,16,17,18],s=[1,9],c=[1,10],i=[1,11],u=[1,12],h=[1,13],f=[1,14],d={trace:n(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:n(function(r,a,l,y,p,o,S){var _=o.length-1;switch(p){case 1:return o[_-1];case 2:this.$=[];break;case 3:o[_-1].push(o[_]),this.$=o[_-1];break;case 4:case 5:this.$=o[_];break;case 6:case 7:this.$=[];break;case 8:y.setDiagramTitle(o[_].substr(6)),this.$=o[_].substr(6);break;case 9:this.$=o[_].trim(),y.setAccTitle(this.$);break;case 10:case 11:this.$=o[_].trim(),y.setAccDescription(this.$);break;case 12:y.addSection(o[_].substr(8)),this.$=o[_].substr(8);break;case 13:y.addTask(o[_-1],o[_]),this.$="task";break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:s,12:c,14:i,16:u,17:h,18:f},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:s,12:c,14:i,16:u,17:h,18:f},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:n(function(r,a){if(a.recoverable)this.trace(r);else{var l=new Error(r);throw l.hash=a,l}},"parseError"),parse:n(function(r){var a=this,l=[0],y=[],p=[null],o=[],S=this.table,_="",B=0,D=0,tt=0,Tt=2,et=1,St=o.slice.call(arguments,1),k=Object.create(this.lexer),P={yy:{}};for(var Y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Y)&&(P.yy[Y]=this.yy[Y]);k.setInput(r,P.yy),P.yy.lexer=k,P.yy.parser=this,typeof k.yylloc>"u"&&(k.yylloc={});var q=k.yylloc;o.push(q);var $t=k.options&&k.options.ranges;typeof P.yy.parseError=="function"?this.parseError=P.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Mt(v){l.length=l.length-2*v,p.length=p.length-v,o.length=o.length-v}n(Mt,"popStack");function rt(){var v;return v=y.pop()||k.lex()||et,typeof v!="number"&&(v instanceof Array&&(y=v,v=y.pop()),v=a.symbols_[v]||v),v}n(rt,"lex");for(var b,G,I,w,Ut,W,C={},N,$,it,j;;){if(I=l[l.length-1],this.defaultActions[I]?w=this.defaultActions[I]:((b===null||typeof b>"u")&&(b=rt()),w=S[I]&&S[I][b]),typeof w>"u"||!w.length||!w[0]){var X="";j=[];for(N in S[I])this.terminals_[N]&&N>Tt&&j.push("'"+this.terminals_[N]+"'");k.showPosition?X="Parse error on line "+(B+1)+`:
`+k.showPosition()+`
Expecting `+j.join(", ")+", got '"+(this.terminals_[b]||b)+"'":X="Parse error on line "+(B+1)+": Unexpected "+(b==et?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(X,{text:k.match,token:this.terminals_[b]||b,line:k.yylineno,loc:q,expected:j})}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+b);switch(w[0]){case 1:l.push(b),p.push(k.yytext),o.push(k.yylloc),l.push(w[1]),b=null,G?(b=G,G=null):(D=k.yyleng,_=k.yytext,B=k.yylineno,q=k.yylloc,tt>0&&tt--);break;case 2:if($=this.productions_[w[1]][1],C.$=p[p.length-$],C._$={first_line:o[o.length-($||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-($||1)].first_column,last_column:o[o.length-1].last_column},$t&&(C._$.range=[o[o.length-($||1)].range[0],o[o.length-1].range[1]]),W=this.performAction.apply(C,[_,D,B,P.yy,w[1],p,o].concat(St)),typeof W<"u")return W;$&&(l=l.slice(0,-1*$*2),p=p.slice(0,-1*$),o=o.slice(0,-1*$)),l.push(this.productions_[w[1]][0]),p.push(C.$),o.push(C._$),it=S[l[l.length-2]][l[l.length-1]],l.push(it);break;case 3:return!0}}return!0},"parse")},x=function(){var g={EOF:1,parseError:n(function(a,l){if(this.yy.parser)this.yy.parser.parseError(a,l);else throw new Error(a)},"parseError"),setInput:n(function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:n(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:n(function(r){var a=r.length,l=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var y=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===y.length?this.yylloc.first_column:0)+y[y.length-l.length].length-l[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:n(function(){return this._more=!0,this},"more"),reject:n(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:n(function(r){this.unput(this.match.slice(r))},"less"),pastInput:n(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:n(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:n(function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:n(function(r,a){var l,y,p;if(this.options.backtrack_lexer&&(p={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(p.yylloc.range=this.yylloc.range.slice(0))),y=r[0].match(/(?:\r\n?|\n).*/g),y&&(this.yylineno+=y.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],l=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var o in p)this[o]=p[o];return!1}return!1},"test_match"),next:n(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,l,y;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),o=0;o<p.length;o++)if(l=this._input.match(this.rules[p[o]]),l&&(!a||l[0].length>a[0].length)){if(a=l,y=o,this.options.backtrack_lexer){if(r=this.test_match(l,p[o]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,p[y]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:n(function(){var a=this.next();return a||this.lex()},"lex"),begin:n(function(a){this.conditionStack.push(a)},"begin"),popState:n(function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:n(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:n(function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:n(function(a){this.begin(a)},"pushState"),stateStackSize:n(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:n(function(a,l,y,p){var o=p;switch(y){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;break;case 8:return this.popState(),"acc_title_value";break;case 9:return this.begin("acc_descr"),14;break;case 10:return this.popState(),"acc_descr_value";break;case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};return g}();d.lexer=x;function m(){this.yy={}}return n(m,"Parser"),m.prototype=d,d.Parser=m,new m}();J.parser=J;var Et=J,V="",K=[],F=[],R=[],Pt=n(function(){K.length=0,F.length=0,V="",R.length=0,st()},"clear"),It=n(function(t){V=t,K.push(t)},"addSection"),At=n(function(){return K},"getSections"),Ct=n(function(){let t=ft(),e=100,s=0;for(;!t&&s<e;)t=ft(),s++;return F.push(...R),F},"getTasks"),Vt=n(function(){let t=[];return F.forEach(s=>{s.people&&t.push(...s.people)}),[...new Set(t)].sort()},"updateActors"),Ft=n(function(t,e){let s=e.substr(1).split(":"),c=0,i=[];s.length===1?(c=Number(s[0]),i=[]):(c=Number(s[0]),i=s[1].split(","));let u=i.map(f=>f.trim()),h={section:V,type:V,people:u,task:t,score:c};R.push(h)},"addTask"),Rt=n(function(t){let e={section:V,type:V,description:t,task:t,classes:[]};F.push(e)},"addTaskOrg"),ft=n(function(){let t=n(function(s){return R[s].processed},"compileTask"),e=!0;for(let[s,c]of R.entries())t(s),e=e&&c.processed;return e},"compileTasks"),Lt=n(function(){return Vt()},"getActors"),gt={getConfig:n(()=>E().journey,"getConfig"),clear:Pt,setDiagramTitle:ht,getDiagramTitle:ut,setAccTitle:at,getAccTitle:lt,setAccDescription:ot,getAccDescription:ct,addSection:It,getSections:At,getTasks:Ct,addTask:Ft,addTaskOrg:Rt,getActors:Lt},Bt=n(t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,"getStyles"),Nt=Bt,Q=n(function(t,e){return yt(t,e)},"drawRect"),jt=n(function(t,e){let c=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=t.append("g");i.append("circle").attr("cx",e.cx-15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",e.cx+15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function u(d){let x=H().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);d.append("path").attr("class","mouth").attr("d",x).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}n(u,"smile");function h(d){let x=H().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);d.append("path").attr("class","mouth").attr("d",x).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}n(h,"sad");function f(d){d.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return n(f,"ambivalent"),e.score>3?u(i):e.score<3?h(i):f(i),c},"drawFace"),_t=n(function(t,e){let s=t.append("circle");return s.attr("cx",e.cx),s.attr("cy",e.cy),s.attr("class","actor-"+e.pos),s.attr("fill",e.fill),s.attr("stroke",e.stroke),s.attr("r",e.r),s.class!==void 0&&s.attr("class",s.class),e.title!==void 0&&s.append("title").text(e.title),s},"drawCircle"),bt=n(function(t,e){return pt(t,e)},"drawText"),zt=n(function(t,e){function s(i,u,h,f,d){return i+","+u+" "+(i+h)+","+u+" "+(i+h)+","+(u+f-d)+" "+(i+h-d*1.2)+","+(u+f)+" "+i+","+(u+f)}n(s,"genPoints");let c=t.append("polygon");c.attr("points",s(e.x,e.y,50,20,7)),c.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,bt(t,e)},"drawLabel"),Ot=n(function(t,e,s){let c=t.append("g"),i=U();i.x=e.x,i.y=e.y,i.fill=e.fill,i.width=s.width*e.taskCount+s.diagramMarginX*(e.taskCount-1),i.height=s.height,i.class="journey-section section-type-"+e.num,i.rx=3,i.ry=3,Q(c,i),vt(s)(e.text,c,i.x,i.y,i.width,i.height,{class:"journey-section section-type-"+e.num},s,e.colour)},"drawSection"),mt=-1,Yt=n(function(t,e,s){let c=e.x+s.width/2,i=t.append("g");mt++;let u=300+5*30;i.append("line").attr("id","task"+mt).attr("x1",c).attr("y1",e.y).attr("x2",c).attr("y2",u).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),jt(i,{cx:c,cy:300+(5-e.score)*30,score:e.score});let h=U();h.x=e.x,h.y=e.y,h.fill=e.fill,h.width=s.width,h.height=s.height,h.class="task task-type-"+e.num,h.rx=3,h.ry=3,Q(i,h);let f=e.x+14;e.people.forEach(d=>{let x=e.actors[d].color,m={cx:f,cy:e.y,r:7,fill:x,stroke:"#000",title:d,pos:e.actors[d].position};_t(i,m),f+=10}),vt(s)(e.task,i,h.x,h.y,h.width,h.height,{class:"task"},s,e.colour)},"drawTask"),qt=n(function(t,e){dt(t,e)},"drawBackgroundRect"),vt=function(){function t(i,u,h,f,d,x,m,g){let r=u.append("text").attr("x",h+d/2).attr("y",f+x/2+5).style("font-color",g).style("text-anchor","middle").text(i);c(r,m)}n(t,"byText");function e(i,u,h,f,d,x,m,g,r){let{taskFontSize:a,taskFontFamily:l}=g,y=i.split(/<br\s*\/?>/gi);for(let p=0;p<y.length;p++){let o=p*a-a*(y.length-1)/2,S=u.append("text").attr("x",h+d/2).attr("y",f).attr("fill",r).style("text-anchor","middle").style("font-size",a).style("font-family",l);S.append("tspan").attr("x",h+d/2).attr("dy",o).text(y[p]),S.attr("y",f+x/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),c(S,m)}}n(e,"byTspan");function s(i,u,h,f,d,x,m,g){let r=u.append("switch"),l=r.append("foreignObject").attr("x",h).attr("y",f).attr("width",d).attr("height",x).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");l.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(i),e(i,r,h,f,d,x,m,g),c(l,m)}n(s,"byFo");function c(i,u){for(let h in u)h in u&&i.attr(h,u[h])}return n(c,"_setTextAttrs"),function(i){return i.textPlacement==="fo"?s:i.textPlacement==="old"?t:e}}(),Gt=n(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics"),L={drawRect:Q,drawCircle:_t,drawSection:Ot,drawText:bt,drawLabel:zt,drawTask:Yt,drawBackgroundRect:qt,initGraphics:Gt},Wt=n(function(t){Object.keys(t).forEach(function(s){O[s]=t[s]})},"setConf"),M={};function wt(t){let e=E().journey,s=60;Object.keys(M).forEach(c=>{let i=M[c].color,u={cx:20,cy:s,r:7,fill:i,stroke:"#000",pos:M[c].position};L.drawCircle(t,u);let h={x:40,y:s+7,fill:"#666",text:c,textMargin:e.boxTextMargin|5};L.drawText(t,h),s+=20})}n(wt,"drawActorLegend");var O=E().journey,A=O.leftMargin,Xt=n(function(t,e,s,c){let i=E().journey,u=E().securityLevel,h;u==="sandbox"&&(h=z("#i"+e));let f=u==="sandbox"?z(h.nodes()[0].contentDocument.body):z("body");T.init();let d=f.select("#"+e);L.initGraphics(d);let x=c.db.getTasks(),m=c.db.getDiagramTitle(),g=c.db.getActors();for(let o in M)delete M[o];let r=0;g.forEach(o=>{M[o]={color:i.actorColours[r%i.actorColours.length],position:r},r++}),wt(d),T.insert(0,0,A,Object.keys(M).length*50),Ht(d,x,0);let a=T.getBounds();m&&d.append("text").text(m).attr("x",A).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);let l=a.stopy-a.starty+2*i.diagramMarginY,y=A+a.stopx+2*i.diagramMarginX;nt(d,l,y,i.useMaxWidth),d.append("line").attr("x1",A).attr("y1",i.height*4).attr("x2",y-A-4).attr("y2",i.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let p=m?70:0;d.attr("viewBox",`${a.startx} -25 ${y} ${l+p}`),d.attr("preserveAspectRatio","xMinYMin meet"),d.attr("height",l+p+25)},"draw"),T={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:n(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:n(function(t,e,s,c){t[e]===void 0?t[e]=s:t[e]=c(s,t[e])},"updateVal"),updateBounds:n(function(t,e,s,c){let i=E().journey,u=this,h=0;function f(d){return n(function(m){h++;let g=u.sequenceItems.length-h+1;u.updateVal(m,"starty",e-g*i.boxMargin,Math.min),u.updateVal(m,"stopy",c+g*i.boxMargin,Math.max),u.updateVal(T.data,"startx",t-g*i.boxMargin,Math.min),u.updateVal(T.data,"stopx",s+g*i.boxMargin,Math.max),d!=="activation"&&(u.updateVal(m,"startx",t-g*i.boxMargin,Math.min),u.updateVal(m,"stopx",s+g*i.boxMargin,Math.max),u.updateVal(T.data,"starty",e-g*i.boxMargin,Math.min),u.updateVal(T.data,"stopy",c+g*i.boxMargin,Math.max))},"updateItemBounds")}n(f,"updateFn"),this.sequenceItems.forEach(f())},"updateBounds"),insert:n(function(t,e,s,c){let i=Math.min(t,s),u=Math.max(t,s),h=Math.min(e,c),f=Math.max(e,c);this.updateVal(T.data,"startx",i,Math.min),this.updateVal(T.data,"starty",h,Math.min),this.updateVal(T.data,"stopx",u,Math.max),this.updateVal(T.data,"stopy",f,Math.max),this.updateBounds(i,h,u,f)},"insert"),bumpVerticalPos:n(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:n(function(){return this.verticalPos},"getVerticalPos"),getBounds:n(function(){return this.data},"getBounds")},Z=O.sectionFills,xt=O.sectionColours,Ht=n(function(t,e,s){let c=E().journey,i="",u=c.height*2+c.diagramMarginY,h=s+u,f=0,d="#CCC",x="black",m=0;for(let[g,r]of e.entries()){if(i!==r.section){d=Z[f%Z.length],m=f%Z.length,x=xt[f%xt.length];let l=0,y=r.section;for(let o=g;o<e.length&&e[o].section==y;o++)l=l+1;let p={x:g*c.taskMargin+g*c.width+A,y:50,text:r.section,fill:d,num:m,colour:x,taskCount:l};L.drawSection(t,p,c),i=r.section,f++}let a=r.people.reduce((l,y)=>(M[y]&&(l[y]=M[y]),l),{});r.x=g*c.taskMargin+g*c.width+A,r.y=h,r.width=c.diagramMarginX,r.height=c.diagramMarginY,r.colour=x,r.fill=d,r.num=m,r.actors=a,L.drawTask(t,r,c),T.insert(r.x,r.y,r.x+r.width+c.taskMargin,300+5*30)}},"drawTasks"),kt={setConf:Wt,draw:Xt},Dt={parser:Et,db:gt,renderer:kt,styles:Nt,init:n(t=>{kt.setConf(t.journey),gt.clear()},"init")};export{Dt as diagram};
