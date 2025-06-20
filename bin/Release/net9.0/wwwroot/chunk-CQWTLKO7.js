import{m as Ct}from"./chunk-OBTIJDM2.js";import{a as Xt}from"./chunk-JGFQ7OF6.js";import{Aa as We,Ba as St,N as st,O as nt,S as at,T as ot,U as ct,V as lt,W as ut,X as dt,Y as ft,Z as se,a as it,ea as ht,fa as kt,ga as mt,h as c,ha as yt,ia as me,j as ke,ja as gt,ma as pt,na as Me,oa as Ie,pa as Ae,qa as Le,ra as Ye,sa as vt,ta as bt,ua as Tt,va as xt,wa as wt,xa as _t,ya as Dt,za as Fe}from"./chunk-E5USLX4Q.js";import"./chunk-VDOM7QL2.js";import"./chunk-DUK7ADTL.js";import{d as Ee,g as de}from"./chunk-3XFQOAE3.js";var Et=Ee((Ve,Oe)=>{"use strict";(function(e,t){typeof Ve=="object"&&typeof Oe<"u"?Oe.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).dayjs_plugin_isoWeek=t()})(Ve,function(){"use strict";var e="day";return function(t,n,a){var s=function(D){return D.add(4-D.isoWeekday(),e)},f=n.prototype;f.isoWeekYear=function(){return s(this).year()},f.isoWeek=function(D){if(!this.$utils().u(D))return this.add(7*(D-this.isoWeek()),e);var _,L,C,W,G=s(this),z=(_=this.isoWeekYear(),L=this.$u,C=(L?a.utc:a)().year(_).startOf("year"),W=4-C.isoWeekday(),C.isoWeekday()>4&&(W+=7),C.add(W,e));return G.diff(z,"week")+1},f.isoWeekday=function(D){return this.$utils().u(D)?this.day()||7:this.day(this.day()%7?D:D-7)};var k=f.startOf;f.startOf=function(D,_){var L=this.$utils(),C=!!L.u(_)||_;return L.p(D)==="isoweek"?C?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):k.bind(this)(D,_)}}})});var Mt=Ee((Pe,ze)=>{"use strict";(function(e,t){typeof Pe=="object"&&typeof ze<"u"?ze.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).dayjs_plugin_customParseFormat=t()})(Pe,function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,a=/\d\d/,s=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,k={},D=function(g){return(g=+g)+(g>68?1900:2e3)},_=function(g){return function(y){this[g]=+y}},L=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(y){if(!y||y==="Z")return 0;var M=y.match(/([+-]|\d\d)/g),A=60*M[1]+(+M[2]||0);return A===0?0:M[0]==="+"?-A:A}(g)}],C=function(g){var y=k[g];return y&&(y.indexOf?y:y.s.concat(y.f))},W=function(g,y){var M,A=k.meridiem;if(A){for(var R=1;R<=24;R+=1)if(g.indexOf(A(R,0,y))>-1){M=R>12;break}}else M=g===(y?"pm":"PM");return M},G={A:[f,function(g){this.afternoon=W(g,!1)}],a:[f,function(g){this.afternoon=W(g,!0)}],Q:[n,function(g){this.month=3*(g-1)+1}],S:[n,function(g){this.milliseconds=100*+g}],SS:[a,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[s,_("seconds")],ss:[s,_("seconds")],m:[s,_("minutes")],mm:[s,_("minutes")],H:[s,_("hours")],h:[s,_("hours")],HH:[s,_("hours")],hh:[s,_("hours")],D:[s,_("day")],DD:[a,_("day")],Do:[f,function(g){var y=k.ordinal,M=g.match(/\d+/);if(this.day=M[0],y)for(var A=1;A<=31;A+=1)y(A).replace(/\[|\]/g,"")===g&&(this.day=A)}],w:[s,_("week")],ww:[a,_("week")],M:[s,_("month")],MM:[a,_("month")],MMM:[f,function(g){var y=C("months"),M=(C("monthsShort")||y.map(function(A){return A.slice(0,3)})).indexOf(g)+1;if(M<1)throw new Error;this.month=M%12||M}],MMMM:[f,function(g){var y=C("months").indexOf(g)+1;if(y<1)throw new Error;this.month=y%12||y}],Y:[/[+-]?\d+/,_("year")],YY:[a,function(g){this.year=D(g)}],YYYY:[/\d{4}/,_("year")],Z:L,ZZ:L};function z(g){var y,M;y=g,M=k&&k.formats;for(var A=(g=y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(p,x,v){var b=v&&v.toUpperCase();return x||M[v]||e[v]||M[b].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(m,w,o){return w||o.slice(1)})})).match(t),R=A.length,N=0;N<R;N+=1){var Z=A[N],H=G[Z],B=H&&H[0],j=H&&H[1];A[N]=j?{regex:B,parser:j}:Z.replace(/^\[|\]$/g,"")}return function(p){for(var x={},v=0,b=0;v<R;v+=1){var m=A[v];if(typeof m=="string")b+=m.length;else{var w=m.regex,o=m.parser,l=p.slice(b),h=w.exec(l)[0];o.call(x,h),p=p.replace(h,"")}}return function(d){var T=d.afternoon;if(T!==void 0){var r=d.hours;T?r<12&&(d.hours+=12):r===12&&(d.hours=0),delete d.afternoon}}(x),x}}return function(g,y,M){M.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(D=g.parseTwoDigitYear);var A=y.prototype,R=A.parse;A.parse=function(N){var Z=N.date,H=N.utc,B=N.args;this.$u=H;var j=B[1];if(typeof j=="string"){var p=B[2]===!0,x=B[3]===!0,v=p||x,b=B[2];x&&(b=B[2]),k=this.$locale(),!p&&b&&(k=M.Ls[b]),this.$d=function(l,h,d,T){try{if(["x","X"].indexOf(h)>-1)return new Date((h==="X"?1e3:1)*l);var r=z(h)(l),u=r.year,i=r.month,I=r.day,S=r.hours,E=r.minutes,P=r.seconds,Y=r.milliseconds,ae=r.zone,F=r.week,Q=new Date,te=I||(u||i?1:Q.getDate()),re=u||Q.getFullYear(),oe=0;u&&!i||(oe=i>0?i-1:Q.getMonth());var ce,le=S||0,V=E||0,ie=P||0,K=Y||0;return ae?new Date(Date.UTC(re,oe,te,le,V,ie,K+60*ae.offset*1e3)):d?new Date(Date.UTC(re,oe,te,le,V,ie,K)):(ce=new Date(re,oe,te,le,V,ie,K),F&&(ce=T(ce).week(F).toDate()),ce)}catch{return new Date("")}}(Z,j,H,M),this.init(),b&&b!==!0&&(this.$L=this.locale(b).$L),v&&Z!=this.format(j)&&(this.$d=new Date("")),k={}}else if(j instanceof Array)for(var m=j.length,w=1;w<=m;w+=1){B[1]=j[w-1];var o=M.apply(this,B);if(o.isValid()){this.$d=o.$d,this.$L=o.$L,this.init();break}w===m&&(this.$d=new Date(""))}else R.call(this,N)}}})});var It=Ee((Re,Ne)=>{"use strict";(function(e,t){typeof Re=="object"&&typeof Ne<"u"?Ne.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).dayjs_plugin_advancedFormat=t()})(Re,function(){"use strict";return function(e,t){var n=t.prototype,a=n.format;n.format=function(s){var f=this,k=this.$locale();if(!this.isValid())return a.bind(this)(s);var D=this.$utils(),_=(s||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(L){switch(L){case"Q":return Math.ceil((f.$M+1)/3);case"Do":return k.ordinal(f.$D);case"gggg":return f.weekYear();case"GGGG":return f.isoWeekYear();case"wo":return k.ordinal(f.week(),"W");case"w":case"ww":return D.s(f.week(),L==="w"?1:2,"0");case"W":case"WW":return D.s(f.isoWeek(),L==="W"?1:2,"0");case"k":case"kk":return D.s(String(f.$H===0?24:f.$H),L==="k"?1:2,"0");case"X":return Math.floor(f.$d.getTime()/1e3);case"x":return f.$d.getTime();case"z":return"["+f.offsetName()+"]";case"zzz":return"["+f.offsetName("long")+"]";default:return L}});return a.bind(this)(_)}}})});var Ft=de(Xt(),1),U=de(it(),1),Wt=de(Et(),1),Vt=de(Mt(),1),Ot=de(It(),1),we=de(it(),1);var Be=function(){var e=c(function(w,o,l,h){for(l=l||{},h=w.length;h--;l[w[h]]=o);return l},"o"),t=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],a=[1,27],s=[1,28],f=[1,29],k=[1,30],D=[1,31],_=[1,32],L=[1,33],C=[1,34],W=[1,9],G=[1,10],z=[1,11],g=[1,12],y=[1,13],M=[1,14],A=[1,15],R=[1,16],N=[1,19],Z=[1,20],H=[1,21],B=[1,22],j=[1,23],p=[1,25],x=[1,35],v={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:c(function(o,l,h,d,T,r,u){var i=r.length-1;switch(T){case 1:return r[i-1];case 2:this.$=[];break;case 3:r[i-1].push(r[i]),this.$=r[i-1];break;case 4:case 5:this.$=r[i];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(r[i].substr(11)),this.$=r[i].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=r[i].substr(18);break;case 19:d.TopAxis(),this.$=r[i].substr(8);break;case 20:d.setAxisFormat(r[i].substr(11)),this.$=r[i].substr(11);break;case 21:d.setTickInterval(r[i].substr(13)),this.$=r[i].substr(13);break;case 22:d.setExcludes(r[i].substr(9)),this.$=r[i].substr(9);break;case 23:d.setIncludes(r[i].substr(9)),this.$=r[i].substr(9);break;case 24:d.setTodayMarker(r[i].substr(12)),this.$=r[i].substr(12);break;case 27:d.setDiagramTitle(r[i].substr(6)),this.$=r[i].substr(6);break;case 28:this.$=r[i].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=r[i].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(r[i].substr(8)),this.$=r[i].substr(8);break;case 33:d.addTask(r[i-1],r[i]),this.$="task";break;case 34:this.$=r[i-1],d.setClickEvent(r[i-1],r[i],null);break;case 35:this.$=r[i-2],d.setClickEvent(r[i-2],r[i-1],r[i]);break;case 36:this.$=r[i-2],d.setClickEvent(r[i-2],r[i-1],null),d.setLink(r[i-2],r[i]);break;case 37:this.$=r[i-3],d.setClickEvent(r[i-3],r[i-2],r[i-1]),d.setLink(r[i-3],r[i]);break;case 38:this.$=r[i-2],d.setClickEvent(r[i-2],r[i],null),d.setLink(r[i-2],r[i-1]);break;case 39:this.$=r[i-3],d.setClickEvent(r[i-3],r[i-1],r[i]),d.setLink(r[i-3],r[i-2]);break;case 40:this.$=r[i-1],d.setLink(r[i-1],r[i]);break;case 41:case 47:this.$=r[i-1]+" "+r[i];break;case 42:case 43:case 45:this.$=r[i-2]+" "+r[i-1]+" "+r[i];break;case 44:case 46:this.$=r[i-3]+" "+r[i-2]+" "+r[i-1]+" "+r[i];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:a,14:s,15:f,16:k,17:D,18:_,19:18,20:L,21:C,22:W,23:G,24:z,25:g,26:y,27:M,28:A,29:R,30:N,31:Z,33:H,35:B,36:j,37:24,38:p,40:x},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:36,11:17,12:n,13:a,14:s,15:f,16:k,17:D,18:_,19:18,20:L,21:C,22:W,23:G,24:z,25:g,26:y,27:M,28:A,29:R,30:N,31:Z,33:H,35:B,36:j,37:24,38:p,40:x},e(t,[2,5]),e(t,[2,6]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),e(t,[2,25]),e(t,[2,26]),e(t,[2,27]),{32:[1,37]},{34:[1,38]},e(t,[2,30]),e(t,[2,31]),e(t,[2,32]),{39:[1,39]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),e(t,[2,15]),e(t,[2,16]),{41:[1,40],43:[1,41]},e(t,[2,4]),e(t,[2,28]),e(t,[2,29]),e(t,[2,33]),e(t,[2,34],{42:[1,42],43:[1,43]}),e(t,[2,40],{41:[1,44]}),e(t,[2,35],{43:[1,45]}),e(t,[2,36]),e(t,[2,38],{42:[1,46]}),e(t,[2,37]),e(t,[2,39])],defaultActions:{},parseError:c(function(o,l){if(l.recoverable)this.trace(o);else{var h=new Error(o);throw h.hash=l,h}},"parseError"),parse:c(function(o){var l=this,h=[0],d=[],T=[null],r=[],u=this.table,i="",I=0,S=0,E=0,P=2,Y=1,ae=r.slice.call(arguments,1),F=Object.create(this.lexer),Q={yy:{}};for(var te in this.yy)Object.prototype.hasOwnProperty.call(this.yy,te)&&(Q.yy[te]=this.yy[te]);F.setInput(o,Q.yy),Q.yy.lexer=F,Q.yy.parser=this,typeof F.yylloc>"u"&&(F.yylloc={});var re=F.yylloc;r.push(re);var oe=F.options&&F.options.ranges;typeof Q.yy.parseError=="function"?this.parseError=Q.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ce(q){h.length=h.length-2*q,T.length=T.length-q,r.length=r.length-q}c(ce,"popStack");function le(){var q;return q=d.pop()||F.lex()||Y,typeof q!="number"&&(q instanceof Array&&(d=q,q=d.pop()),q=l.symbols_[q]||q),q}c(le,"lex");for(var V,ie,K,X,Vr,Se,ue={},ve,J,rt,be;;){if(K=h[h.length-1],this.defaultActions[K]?X=this.defaultActions[K]:((V===null||typeof V>"u")&&(V=le()),X=u[K]&&u[K][V]),typeof X>"u"||!X.length||!X[0]){var Ce="";be=[];for(ve in u[K])this.terminals_[ve]&&ve>P&&be.push("'"+this.terminals_[ve]+"'");F.showPosition?Ce="Parse error on line "+(I+1)+`:
`+F.showPosition()+`
Expecting `+be.join(", ")+", got '"+(this.terminals_[V]||V)+"'":Ce="Parse error on line "+(I+1)+": Unexpected "+(V==Y?"end of input":"'"+(this.terminals_[V]||V)+"'"),this.parseError(Ce,{text:F.match,token:this.terminals_[V]||V,line:F.yylineno,loc:re,expected:be})}if(X[0]instanceof Array&&X.length>1)throw new Error("Parse Error: multiple actions possible at state: "+K+", token: "+V);switch(X[0]){case 1:h.push(V),T.push(F.yytext),r.push(F.yylloc),h.push(X[1]),V=null,ie?(V=ie,ie=null):(S=F.yyleng,i=F.yytext,I=F.yylineno,re=F.yylloc,E>0&&E--);break;case 2:if(J=this.productions_[X[1]][1],ue.$=T[T.length-J],ue._$={first_line:r[r.length-(J||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(J||1)].first_column,last_column:r[r.length-1].last_column},oe&&(ue._$.range=[r[r.length-(J||1)].range[0],r[r.length-1].range[1]]),Se=this.performAction.apply(ue,[i,S,I,Q.yy,X[1],T,r].concat(ae)),typeof Se<"u")return Se;J&&(h=h.slice(0,-1*J*2),T=T.slice(0,-1*J),r=r.slice(0,-1*J)),h.push(this.productions_[X[1]][0]),T.push(ue.$),r.push(ue._$),rt=u[h[h.length-2]][h[h.length-1]],h.push(rt);break;case 3:return!0}}return!0},"parse")},b=function(){var w={EOF:1,parseError:c(function(l,h){if(this.yy.parser)this.yy.parser.parseError(l,h);else throw new Error(l)},"parseError"),setInput:c(function(o,l){return this.yy=l||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var l=o.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:c(function(o){var l=o.length,h=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var T=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===d.length?this.yylloc.first_column:0)+d[d.length-h.length].length-h[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[T[0],T[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(o){this.unput(this.match.slice(o))},"less"),pastInput:c(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var o=this.pastInput(),l=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+l+"^"},"showPosition"),test_match:c(function(o,l){var h,d,T;if(this.options.backtrack_lexer&&(T={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(T.yylloc.range=this.yylloc.range.slice(0))),d=o[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],h=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var r in T)this[r]=T[r];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,l,h,d;this._more||(this.yytext="",this.match="");for(var T=this._currentRules(),r=0;r<T.length;r++)if(h=this._input.match(this.rules[T[r]]),h&&(!l||h[0].length>l[0].length)){if(l=h,d=r,this.options.backtrack_lexer){if(o=this.test_match(h,T[r]),o!==!1)return o;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(o=this.test_match(l,T[d]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var l=this.next();return l||this.lex()},"lex"),begin:c(function(l){this.conditionStack.push(l)},"begin"),popState:c(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:c(function(l){this.begin(l)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(l,h,d,T){var r=T;switch(d){case 0:return this.begin("open_directive"),"open_directive";break;case 1:return this.begin("acc_title"),31;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),33;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return w}();v.lexer=b;function m(){this.yy={}}return c(m,"Parser"),m.prototype=v,v.Parser=m,new m}();Be.parser=Be;var qt=Be;U.default.extend(Wt.default);U.default.extend(Vt.default);U.default.extend(Ot.default);var At={friday:5,saturday:6},$="",Xe="",qe=void 0,Ue="",ye=[],ge=[],Ze=new Map,Qe=[],_e=[],he="",Ke="",Pt=["active","done","crit","milestone"],$e=[],pe=!1,Je=!1,et="sunday",De="saturday",je=0,Ut=c(function(){Qe=[],_e=[],he="",$e=[],Te=0,He=void 0,xe=void 0,O=[],$="",Xe="",Ke="",qe=void 0,Ue="",ye=[],ge=[],pe=!1,Je=!1,je=0,Ze=new Map,at(),et="sunday",De="saturday"},"clear"),Zt=c(function(e){Xe=e},"setAxisFormat"),Qt=c(function(){return Xe},"getAxisFormat"),Kt=c(function(e){qe=e},"setTickInterval"),$t=c(function(){return qe},"getTickInterval"),Jt=c(function(e){Ue=e},"setTodayMarker"),er=c(function(){return Ue},"getTodayMarker"),tr=c(function(e){$=e},"setDateFormat"),rr=c(function(){pe=!0},"enableInclusiveEndDates"),ir=c(function(){return pe},"endDatesAreInclusive"),sr=c(function(){Je=!0},"enableTopAxis"),nr=c(function(){return Je},"topAxisEnabled"),ar=c(function(e){Ke=e},"setDisplayMode"),or=c(function(){return Ke},"getDisplayMode"),cr=c(function(){return $},"getDateFormat"),lr=c(function(e){ye=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),ur=c(function(){return ye},"getIncludes"),dr=c(function(e){ge=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),fr=c(function(){return ge},"getExcludes"),hr=c(function(){return Ze},"getLinks"),kr=c(function(e){he=e,Qe.push(e)},"addSection"),mr=c(function(){return Qe},"getSections"),yr=c(function(){let e=Lt(),t=10,n=0;for(;!e&&n<t;)e=Lt(),n++;return _e=O,_e},"getTasks"),zt=c(function(e,t,n,a){return a.includes(e.format(t.trim()))?!1:n.includes("weekends")&&(e.isoWeekday()===At[De]||e.isoWeekday()===At[De]+1)||n.includes(e.format("dddd").toLowerCase())?!0:n.includes(e.format(t.trim()))},"isInvalidDate"),gr=c(function(e){et=e},"setWeekday"),pr=c(function(){return et},"getWeekday"),vr=c(function(e){De=e},"setWeekend"),Rt=c(function(e,t,n,a){if(!n.length||e.manualEndTime)return;let s;e.startTime instanceof Date?s=(0,U.default)(e.startTime):s=(0,U.default)(e.startTime,t,!0),s=s.add(1,"d");let f;e.endTime instanceof Date?f=(0,U.default)(e.endTime):f=(0,U.default)(e.endTime,t,!0);let[k,D]=br(s,f,t,n,a);e.endTime=k.toDate(),e.renderEndTime=D},"checkTaskDates"),br=c(function(e,t,n,a,s){let f=!1,k=null;for(;e<=t;)f||(k=t.toDate()),f=zt(e,n,a,s),f&&(t=t.add(1,"d")),e=e.add(1,"d");return[t,k]},"fixTaskDates"),Ge=c(function(e,t,n){n=n.trim();let s=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(s!==null){let k=null;for(let _ of s.groups.ids.split(" ")){let L=ne(_);L!==void 0&&(!k||L.endTime>k.endTime)&&(k=L)}if(k)return k.endTime;let D=new Date;return D.setHours(0,0,0,0),D}let f=(0,U.default)(n,t.trim(),!0);if(f.isValid())return f.toDate();{ke.debug("Invalid date:"+n),ke.debug("With date format:"+t.trim());let k=new Date(n);if(k===void 0||isNaN(k.getTime())||k.getFullYear()<-1e4||k.getFullYear()>1e4)throw new Error("Invalid date:"+n);return k}},"getStartDate"),Nt=c(function(e){let t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t!==null?[Number.parseFloat(t[1]),t[2]]:[NaN,"ms"]},"parseDuration"),Bt=c(function(e,t,n,a=!1){n=n.trim();let f=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(f!==null){let C=null;for(let G of f.groups.ids.split(" ")){let z=ne(G);z!==void 0&&(!C||z.startTime<C.startTime)&&(C=z)}if(C)return C.startTime;let W=new Date;return W.setHours(0,0,0,0),W}let k=(0,U.default)(n,t.trim(),!0);if(k.isValid())return a&&(k=k.add(1,"d")),k.toDate();let D=(0,U.default)(e),[_,L]=Nt(n);if(!Number.isNaN(_)){let C=D.add(_,L);C.isValid()&&(D=C)}return D.toDate()},"getEndDate"),Te=0,fe=c(function(e){return e===void 0?(Te=Te+1,"task"+Te):e},"parseId"),Tr=c(function(e,t){let n;t.substr(0,1)===":"?n=t.substr(1,t.length):n=t;let a=n.split(","),s={};tt(a,s,Pt);for(let k=0;k<a.length;k++)a[k]=a[k].trim();let f="";switch(a.length){case 1:s.id=fe(),s.startTime=e.endTime,f=a[0];break;case 2:s.id=fe(),s.startTime=Ge(void 0,$,a[0]),f=a[1];break;case 3:s.id=fe(a[0]),s.startTime=Ge(void 0,$,a[1]),f=a[2];break;default:}return f&&(s.endTime=Bt(s.startTime,$,f,pe),s.manualEndTime=(0,U.default)(f,"YYYY-MM-DD",!0).isValid(),Rt(s,$,ge,ye)),s},"compileData"),xr=c(function(e,t){let n;t.substr(0,1)===":"?n=t.substr(1,t.length):n=t;let a=n.split(","),s={};tt(a,s,Pt);for(let f=0;f<a.length;f++)a[f]=a[f].trim();switch(a.length){case 1:s.id=fe(),s.startTime={type:"prevTaskEnd",id:e},s.endTime={data:a[0]};break;case 2:s.id=fe(),s.startTime={type:"getStartDate",startData:a[0]},s.endTime={data:a[1]};break;case 3:s.id=fe(a[0]),s.startTime={type:"getStartDate",startData:a[1]},s.endTime={data:a[2]};break;default:}return s},"parseData"),He,xe,O=[],jt={},wr=c(function(e,t){let n={section:he,type:he,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},a=xr(xe,t);n.raw.startTime=a.startTime,n.raw.endTime=a.endTime,n.id=a.id,n.prevTaskId=xe,n.active=a.active,n.done=a.done,n.crit=a.crit,n.milestone=a.milestone,n.order=je,je++;let s=O.push(n);xe=n.id,jt[n.id]=s-1},"addTask"),ne=c(function(e){let t=jt[e];return O[t]},"findTaskById"),_r=c(function(e,t){let n={section:he,type:he,description:e,task:e,classes:[]},a=Tr(He,t);n.startTime=a.startTime,n.endTime=a.endTime,n.id=a.id,n.active=a.active,n.done=a.done,n.crit=a.crit,n.milestone=a.milestone,He=n,_e.push(n)},"addTaskOrg"),Lt=c(function(){let e=c(function(n){let a=O[n],s="";switch(O[n].raw.startTime.type){case"prevTaskEnd":{let f=ne(a.prevTaskId);a.startTime=f.endTime;break}case"getStartDate":s=Ge(void 0,$,O[n].raw.startTime.startData),s&&(O[n].startTime=s);break}return O[n].startTime&&(O[n].endTime=Bt(O[n].startTime,$,O[n].raw.endTime.data,pe),O[n].endTime&&(O[n].processed=!0,O[n].manualEndTime=(0,U.default)(O[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Rt(O[n],$,ge,ye))),O[n].processed},"compileTask"),t=!0;for(let[n,a]of O.entries())e(n),t=t&&a.processed;return t},"compileTasks"),Dr=c(function(e,t){let n=t;se().securityLevel!=="loose"&&(n=(0,Ft.sanitizeUrl)(t)),e.split(",").forEach(function(a){ne(a)!==void 0&&(Ht(a,()=>{window.open(n,"_self")}),Ze.set(a,n))}),Gt(e,"clickable")},"setLink"),Gt=c(function(e,t){e.split(",").forEach(function(n){let a=ne(n);a!==void 0&&a.classes.push(t)})},"setClass"),Sr=c(function(e,t,n){if(se().securityLevel!=="loose"||t===void 0)return;let a=[];if(typeof n=="string"){a=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let f=0;f<a.length;f++){let k=a[f].trim();k.startsWith('"')&&k.endsWith('"')&&(k=k.substr(1,k.length-2)),a[f]=k}}a.length===0&&a.push(e),ne(e)!==void 0&&Ht(e,()=>{Ct.runFunc(t,...a)})},"setClickFun"),Ht=c(function(e,t){$e.push(function(){let n=document.querySelector(`[id="${e}"]`);n!==null&&n.addEventListener("click",function(){t()})},function(){let n=document.querySelector(`[id="${e}-text"]`);n!==null&&n.addEventListener("click",function(){t()})})},"pushFun"),Cr=c(function(e,t,n){e.split(",").forEach(function(a){Sr(a,t,n)}),Gt(e,"clickable")},"setClickEvent"),Er=c(function(e){$e.forEach(function(t){t(e)})},"bindFunctions"),Mr={getConfig:c(()=>se().gantt,"getConfig"),clear:Ut,setDateFormat:tr,getDateFormat:cr,enableInclusiveEndDates:rr,endDatesAreInclusive:ir,enableTopAxis:sr,topAxisEnabled:nr,setAxisFormat:Zt,getAxisFormat:Qt,setTickInterval:Kt,getTickInterval:$t,setTodayMarker:Jt,getTodayMarker:er,setAccTitle:ot,getAccTitle:ct,setDiagramTitle:dt,getDiagramTitle:ft,setDisplayMode:ar,getDisplayMode:or,setAccDescription:lt,getAccDescription:ut,addSection:kr,getSections:mr,getTasks:yr,addTask:wr,findTaskById:ne,addTaskOrg:_r,setIncludes:lr,getIncludes:ur,setExcludes:dr,getExcludes:fr,setClickEvent:Cr,setLink:Dr,getLinks:hr,bindFunctions:Er,parseDuration:Nt,isInvalidDate:zt,setWeekday:gr,getWeekday:pr,setWeekend:vr};function tt(e,t,n){let a=!0;for(;a;)a=!1,n.forEach(function(s){let f="^\\s*"+s+"\\s*$",k=new RegExp(f);e[0].match(k)&&(t[s]=!0,e.shift(1),a=!0)})}c(tt,"getTaskTags");var Ir=c(function(){ke.debug("Something is calling, setConf, remove the call")},"setConf"),Yt={monday:bt,tuesday:Tt,wednesday:xt,thursday:wt,friday:_t,saturday:Dt,sunday:vt},Ar=c((e,t)=>{let n=[...e].map(()=>-1/0),a=[...e].sort((f,k)=>f.startTime-k.startTime||f.order-k.order),s=0;for(let f of a)for(let k=0;k<n.length;k++)if(f.startTime>=n[k]){n[k]=f.endTime,f.order=k+t,k>s&&(s=k);break}return s},"getMaxIntersections"),ee,Lr=c(function(e,t,n,a){let s=se().gantt,f=se().securityLevel,k;f==="sandbox"&&(k=me("#i"+t));let D=f==="sandbox"?me(k.nodes()[0].contentDocument.body):me("body"),_=f==="sandbox"?k.nodes()[0].contentDocument:document,L=_.getElementById(t);ee=L.parentElement.offsetWidth,ee===void 0&&(ee=1200),s.useWidth!==void 0&&(ee=s.useWidth);let C=a.db.getTasks(),W=[];for(let p of C)W.push(p.type);W=j(W);let G={},z=2*s.topPadding;if(a.db.getDisplayMode()==="compact"||s.displayMode==="compact"){let p={};for(let v of C)p[v.section]===void 0?p[v.section]=[v]:p[v.section].push(v);let x=0;for(let v of Object.keys(p)){let b=Ar(p[v],x)+1;x+=b,z+=b*(s.barHeight+s.barGap),G[v]=b}}else{z+=C.length*(s.barHeight+s.barGap);for(let p of W)G[p]=C.filter(x=>x.type===p).length}L.setAttribute("viewBox","0 0 "+ee+" "+z);let g=D.select(`[id="${t}"]`),y=St().domain([kt(C,function(p){return p.startTime}),ht(C,function(p){return p.endTime})]).rangeRound([0,ee-s.leftPadding-s.rightPadding]);function M(p,x){let v=p.startTime,b=x.startTime,m=0;return v>b?m=1:v<b&&(m=-1),m}c(M,"taskCompare"),C.sort(M),A(C,ee,z),nt(g,z,ee,s.useMaxWidth),g.append("text").text(a.db.getDiagramTitle()).attr("x",ee/2).attr("y",s.titleTopMargin).attr("class","titleText");function A(p,x,v){let b=s.barHeight,m=b+s.barGap,w=s.topPadding,o=s.leftPadding,l=pt().domain([0,W.length]).range(["#00B9FA","#F95002"]).interpolate(gt);N(m,w,o,x,v,p,a.db.getExcludes(),a.db.getIncludes()),Z(o,w,x,v),R(p,m,w,o,b,l,x,v),H(m,w,o,b,l),B(o,w,x,v)}c(A,"makeGantt");function R(p,x,v,b,m,w,o){let h=[...new Set(p.map(u=>u.order))].map(u=>p.find(i=>i.order===u));g.append("g").selectAll("rect").data(h).enter().append("rect").attr("x",0).attr("y",function(u,i){return i=u.order,i*x+v-2}).attr("width",function(){return o-s.rightPadding/2}).attr("height",x).attr("class",function(u){for(let[i,I]of W.entries())if(u.type===I)return"section section"+i%s.numberSectionStyles;return"section section0"});let d=g.append("g").selectAll("rect").data(p).enter(),T=a.db.getLinks();if(d.append("rect").attr("id",function(u){return u.id}).attr("rx",3).attr("ry",3).attr("x",function(u){return u.milestone?y(u.startTime)+b+.5*(y(u.endTime)-y(u.startTime))-.5*m:y(u.startTime)+b}).attr("y",function(u,i){return i=u.order,i*x+v}).attr("width",function(u){return u.milestone?m:y(u.renderEndTime||u.endTime)-y(u.startTime)}).attr("height",m).attr("transform-origin",function(u,i){return i=u.order,(y(u.startTime)+b+.5*(y(u.endTime)-y(u.startTime))).toString()+"px "+(i*x+v+.5*m).toString()+"px"}).attr("class",function(u){let i="task",I="";u.classes.length>0&&(I=u.classes.join(" "));let S=0;for(let[P,Y]of W.entries())u.type===Y&&(S=P%s.numberSectionStyles);let E="";return u.active?u.crit?E+=" activeCrit":E=" active":u.done?u.crit?E=" doneCrit":E=" done":u.crit&&(E+=" crit"),E.length===0&&(E=" task"),u.milestone&&(E=" milestone "+E),E+=S,E+=" "+I,i+E}),d.append("text").attr("id",function(u){return u.id+"-text"}).text(function(u){return u.task}).attr("font-size",s.fontSize).attr("x",function(u){let i=y(u.startTime),I=y(u.renderEndTime||u.endTime);u.milestone&&(i+=.5*(y(u.endTime)-y(u.startTime))-.5*m),u.milestone&&(I=i+m);let S=this.getBBox().width;return S>I-i?I+S+1.5*s.leftPadding>o?i+b-5:I+b+5:(I-i)/2+i+b}).attr("y",function(u,i){return i=u.order,i*x+s.barHeight/2+(s.fontSize/2-2)+v}).attr("text-height",m).attr("class",function(u){let i=y(u.startTime),I=y(u.endTime);u.milestone&&(I=i+m);let S=this.getBBox().width,E="";u.classes.length>0&&(E=u.classes.join(" "));let P=0;for(let[ae,F]of W.entries())u.type===F&&(P=ae%s.numberSectionStyles);let Y="";return u.active&&(u.crit?Y="activeCritText"+P:Y="activeText"+P),u.done?u.crit?Y=Y+" doneCritText"+P:Y=Y+" doneText"+P:u.crit&&(Y=Y+" critText"+P),u.milestone&&(Y+=" milestoneText"),S>I-i?I+S+1.5*s.leftPadding>o?E+" taskTextOutsideLeft taskTextOutside"+P+" "+Y:E+" taskTextOutsideRight taskTextOutside"+P+" "+Y+" width-"+S:E+" taskText taskText"+P+" "+Y+" width-"+S}),se().securityLevel==="sandbox"){let u;u=me("#i"+t);let i=u.nodes()[0].contentDocument;d.filter(function(I){return T.has(I.id)}).each(function(I){var S=i.querySelector("#"+I.id),E=i.querySelector("#"+I.id+"-text");let P=S.parentNode;var Y=i.createElement("a");Y.setAttribute("xlink:href",T.get(I.id)),Y.setAttribute("target","_top"),P.appendChild(Y),Y.appendChild(S),Y.appendChild(E)})}}c(R,"drawRects");function N(p,x,v,b,m,w,o,l){if(o.length===0&&l.length===0)return;let h,d;for(let{startTime:S,endTime:E}of w)(h===void 0||S<h)&&(h=S),(d===void 0||E>d)&&(d=E);if(!h||!d)return;if((0,we.default)(d).diff((0,we.default)(h),"year")>5){ke.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let T=a.db.getDateFormat(),r=[],u=null,i=(0,we.default)(h);for(;i.valueOf()<=d;)a.db.isInvalidDate(i,T,o,l)?u?u.end=i:u={start:i,end:i}:u&&(r.push(u),u=null),i=i.add(1,"d");g.append("g").selectAll("rect").data(r).enter().append("rect").attr("id",function(S){return"exclude-"+S.start.format("YYYY-MM-DD")}).attr("x",function(S){return y(S.start)+v}).attr("y",s.gridLineStartPadding).attr("width",function(S){let E=S.end.add(1,"day");return y(E)-y(S.start)}).attr("height",m-x-s.gridLineStartPadding).attr("transform-origin",function(S,E){return(y(S.start)+v+.5*(y(S.end)-y(S.start))).toString()+"px "+(E*p+.5*m).toString()+"px"}).attr("class","exclude-range")}c(N,"drawExcludeDays");function Z(p,x,v,b){let m=yt(y).tickSize(-b+x+s.gridLineStartPadding).tickFormat(We(a.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d")),o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval()||s.tickInterval);if(o!==null){let l=o[1],h=o[2],d=a.db.getWeekday()||s.weekday;switch(h){case"millisecond":m.ticks(Me.every(l));break;case"second":m.ticks(Ie.every(l));break;case"minute":m.ticks(Ae.every(l));break;case"hour":m.ticks(Le.every(l));break;case"day":m.ticks(Ye.every(l));break;case"week":m.ticks(Yt[d].every(l));break;case"month":m.ticks(Fe.every(l));break}}if(g.append("g").attr("class","grid").attr("transform","translate("+p+", "+(b-50)+")").call(m).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),a.db.topAxisEnabled()||s.topAxis){let l=mt(y).tickSize(-b+x+s.gridLineStartPadding).tickFormat(We(a.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d"));if(o!==null){let h=o[1],d=o[2],T=a.db.getWeekday()||s.weekday;switch(d){case"millisecond":l.ticks(Me.every(h));break;case"second":l.ticks(Ie.every(h));break;case"minute":l.ticks(Ae.every(h));break;case"hour":l.ticks(Le.every(h));break;case"day":l.ticks(Ye.every(h));break;case"week":l.ticks(Yt[T].every(h));break;case"month":l.ticks(Fe.every(h));break}}g.append("g").attr("class","grid").attr("transform","translate("+p+", "+x+")").call(l).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}c(Z,"makeGrid");function H(p,x){let v=0,b=Object.keys(G).map(m=>[m,G[m]]);g.append("g").selectAll("text").data(b).enter().append(function(m){let w=m[0].split(st.lineBreakRegex),o=-(w.length-1)/2,l=_.createElementNS("http://www.w3.org/2000/svg","text");l.setAttribute("dy",o+"em");for(let[h,d]of w.entries()){let T=_.createElementNS("http://www.w3.org/2000/svg","tspan");T.setAttribute("alignment-baseline","central"),T.setAttribute("x","10"),h>0&&T.setAttribute("dy","1em"),T.textContent=d,l.appendChild(T)}return l}).attr("x",10).attr("y",function(m,w){if(w>0)for(let o=0;o<w;o++)return v+=b[w-1][1],m[1]*p/2+v*p+x;else return m[1]*p/2+x}).attr("font-size",s.sectionFontSize).attr("class",function(m){for(let[w,o]of W.entries())if(m[0]===o)return"sectionTitle sectionTitle"+w%s.numberSectionStyles;return"sectionTitle"})}c(H,"vertLabels");function B(p,x,v,b){let m=a.db.getTodayMarker();if(m==="off")return;let w=g.append("g").attr("class","today"),o=new Date,l=w.append("line");l.attr("x1",y(o)+p).attr("x2",y(o)+p).attr("y1",s.titleTopMargin).attr("y2",b-s.titleTopMargin).attr("class","today"),m!==""&&l.attr("style",m.replace(/,/g,";"))}c(B,"drawToday");function j(p){let x={},v=[];for(let b=0,m=p.length;b<m;++b)Object.prototype.hasOwnProperty.call(x,p[b])||(x[p[b]]=!0,v.push(p[b]));return v}c(j,"checkUnique")},"draw"),Yr={setConf:Ir,draw:Lr},Fr=c(e=>`
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: ${e.fontFamily};
  }
`,"getStyles"),Wr=Fr,Rr={parser:qt,db:Mr,renderer:Yr,styles:Wr};export{Rr as diagram};
