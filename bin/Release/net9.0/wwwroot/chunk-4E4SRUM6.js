import{a as y,b as se}from"./chunk-RCT5FTPB.js";import{a as Cn,b as Tn,c as vn,d as kn}from"./chunk-KKXAP5UC.js";import{a as gn,b as fn,c as bn,d as wn,e as _n,f as zn}from"./chunk-QSIFJ2GX.js";import{a as me,b as de}from"./chunk-ZWAJLIRV.js";import{A as H,B as dn,C as pn,D as cn,E as xn,G as un,I as En,J as X,d as Ot,e as it,h as Kt,j as Yt,m as Xt,n as $t,o as en,p as tn,t as nn,u as an,v as rn,w as ln,x as on,y as sn,z as mn}from"./chunk-XJXANGZU.js";import"./chunk-KXCTXEHK.js";import"./chunk-I6FYHFJU.js";import{a as yn}from"./chunk-LKTLT62Y.js";import{B as hn,C as Sn,I as V,J as U,K as O,L as j,M as W,S as Ze,T as De,b as jt,d as Gt,e as qt,k as ie,o as ae,u as re}from"./chunk-MY2L3MOY.js";import{A as ce,Cb as Y,D as Ke,Db as Z,Eb as B,F as Ut,Ia as at,Lb as D,Mb as F,Nb as Ye,Pb as P,Sb as Zt,Wb as le,Xa as Wt,Xb as oe,Ya as Jt,Za as Oe,gb as Qt,u as ne,wb as I,yb as L}from"./chunk-VHOVRO7I.js";import{$b as ue,$c as Ft,Ac as _e,Bc as ze,Cb as Be,Dc as Mt,Ec as J,Fa as gt,Fc as Q,Ga as ft,Gb as v,Gc as G,Ha as bt,Hb as Ct,Hc as Rt,Ia as u,Ic as ee,Ja as E,Jc as tt,Kc as It,La as wt,Lc as Lt,Mb as Tt,Nb as g,Oc as Bt,Qc as Dt,Ra as Ne,Sc as A,Tb as vt,Ub as c,Va as _t,W as Xe,Wc as nt,Xb as kt,Xc as K,Yb as $e,_c as Ge,a as Ee,ad as Pt,b as ge,bc as He,cc as Ve,dc as Ue,ec as n,fc as t,gc as d,ha as ht,hc as b,ic as w,j as xt,ja as je,jd as Ht,ka as St,kc as _,nc as x,oa as ut,pa as Et,pc as p,q as Pe,qb as zt,qc as Je,r as we,rc as Qe,sc as et,sd as qe,tc as At,ua as S,ub as m,uc as Nt,ud as Vt,vb as fe,vc as R,wc as N,xb as yt,xc as M,yc as k,yd as te,zb as We,zc as e}from"./chunk-GFAWMYK5.js";function rt(a,s){if(!a||!a.getClientRects().length)return 0;let i=a.getBoundingClientRect();if(i.width||i.height){if(s===window){let l=a.ownerDocument.documentElement;return i.top-l.clientTop}return i.top-s.getBoundingClientRect().top}return i.top}var jn=["ink"],Wn=["*"],Jn=a=>({"ant-anchor-wrapper-horizontal":a}),Qn=a=>({"ant-anchor-fixed":a});function Gn(a,s){}function qn(a,s){if(a&1&&(n(0,"nz-affix",2),g(1,Gn,0,0,"ng-template",3),t()),a&2){let i=p(),l=k(3);c("nzOffsetTop",i.nzOffsetTop)("nzTarget",i.container),m(),c("ngTemplateOutlet",l)}}function Kn(a,s){}function Yn(a,s){if(a&1&&g(0,Kn,0,0,"ng-template",3),a&2){p();let i=k(3);c("ngTemplateOutlet",i)}}function Zn(a,s){if(a&1&&(n(0,"div",4)(1,"div",5)(2,"div",6),d(3,"div",7,1),t(),Qe(5),t()()),a&2){let i=p();kt(i.wrapperStyle),$e(tt(6,Jn,i.nzDirection==="horizontal")),m(),$e(tt(8,Qn,!i.nzAffix&&!i.nzShowInkInFixed))}}var An="ant-anchor-ink-ball-visible",Xn="anchor",$n=/#([^#]+)$/,ei=Ut({passive:!0}),$=(()=>{let a,s=[],i=[],l,r=[],o=[],h,C=[],st=[],mt,dt=[],pt=[];return class lt{static{let z=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;a=[Oe()],l=[Oe()],h=[Oe()],mt=[Oe()],Pe(null,null,a,{kind:"field",name:"nzShowInkInFixed",static:!1,private:!1,access:{has:f=>"nzShowInkInFixed"in f,get:f=>f.nzShowInkInFixed,set:(f,T)=>{f.nzShowInkInFixed=T}},metadata:z},s,i),Pe(null,null,l,{kind:"field",name:"nzBounds",static:!1,private:!1,access:{has:f=>"nzBounds"in f,get:f=>f.nzBounds,set:(f,T)=>{f.nzBounds=T}},metadata:z},r,o),Pe(null,null,h,{kind:"field",name:"nzOffsetTop",static:!1,private:!1,access:{has:f=>"nzOffsetTop"in f,get:f=>f.nzOffsetTop,set:(f,T)=>{f.nzOffsetTop=T}},metadata:z},C,st),Pe(null,null,mt,{kind:"field",name:"nzTargetOffset",static:!1,private:!1,access:{has:f=>"nzTargetOffset"in f,get:f=>f.nzTargetOffset,set:(f,T)=>{f.nzTargetOffset=T}},metadata:z},dt,pt),z&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:z})}constructor(z,f,T,q,pe){this.nzConfigService=z,this.scrollSrv=f,this.cdr=T,this.platform=q,this.renderer=pe,this._nzModuleName=Xn,this.nzAffix=!0,this.nzShow=!0,this.nzShowInkInFixed=we(this,s,!1),this.nzBounds=(we(this,i),we(this,r,5)),this.nzOffsetTop=(we(this,o),we(this,C,void 0)),this.nzTargetOffset=(we(this,st),we(this,dt,void 0)),this.nzContainer=we(this,pt),this.nzDirection="vertical",this.nzClick=new Ne,this.nzChange=new Ne,this.nzScroll=new Ne,this.visible=!1,this.wrapperStyle={"max-height":"100vh"},this.links=[],this.animating=!1,this.destroy$=new xt,this.doc=S(Ht)}registerLink(z){this.links.push(z)}unregisterLink(z){this.links.splice(this.links.indexOf(z),1)}getContainer(){return this.container||window}ngAfterViewInit(){this.registerScrollEvent()}ngOnDestroy(){clearTimeout(this.handleScrollTimeoutID),this.destroy$.next(!0),this.destroy$.complete()}registerScrollEvent(){this.platform.isBrowser&&(this.destroy$.next(!0),Wt(this.getContainer(),"scroll",ei).pipe(St(50),ht(this.destroy$)).subscribe(()=>this.handleScroll()),this.handleScrollTimeoutID=setTimeout(()=>this.handleScroll()))}handleScroll(){if(typeof document>"u"||this.animating)return;let z=[],T=(this.nzTargetOffset?this.nzTargetOffset:this.nzOffsetTop||0)+this.nzBounds;if(this.links.forEach(q=>{let pe=$n.exec(q.nzHref.toString());if(!pe)return;let be=this.doc.getElementById(pe[1]);if(be){let ct=rt(be,this.getContainer());ct<T&&z.push({top:ct,comp:q})}}),this.visible=!!z.length,!this.visible)this.clearActive(),this.cdr.detectChanges();else{let q=z.reduce((pe,be)=>be.top>pe.top?be:pe);this.handleActive(q.comp)}this.setVisible()}clearActive(){this.links.forEach(z=>{z.unsetActive()})}setActive(z){let f=this.activeLink,T=this.nzCurrentAnchor&&this.links.find(pe=>pe.nzHref===this.nzCurrentAnchor)||z;if(!T)return;T.setActive();let q=T.getLinkTitleElement();this.nzDirection==="vertical"?this.ink.nativeElement.style.top=`${q.offsetTop+q.clientHeight/2-4.5}px`:this.ink.nativeElement.style.left=`${q.offsetLeft+q.clientWidth/2}px`,this.activeLink=(z||T).nzHref,f!==this.activeLink&&this.nzChange.emit(this.activeLink)}handleActive(z){this.clearActive(),this.setActive(z),this.visible=!0,this.setVisible(),this.nzScroll.emit(z)}setVisible(){this.ink&&(this.visible?this.renderer.addClass(this.ink.nativeElement,An):this.renderer.removeClass(this.ink.nativeElement,An))}handleScrollTo(z){let f=this.doc.querySelector(z.nzHref);if(!f)return;this.animating=!0;let T=this.scrollSrv.getScroll(this.getContainer()),q=rt(f,this.getContainer()),pe=T+q;pe-=this.nzTargetOffset!==void 0?this.nzTargetOffset:this.nzOffsetTop||0,this.scrollSrv.scrollTo(this.getContainer(),pe,{callback:()=>{this.animating=!1,this.handleActive(z)}}),this.nzClick.emit(z.nzHref)}ngOnChanges(z){let{nzShow:f,nzOffsetTop:T,nzContainer:q,nzCurrentAnchor:pe}=z;if(T&&(this.wrapperStyle=ge(Ee({},this.wrapperStyle),{"max-height":`calc(100vh - ${this.nzOffsetTop}px)`})),f&&(this.wrapperStyle=ge(Ee({},this.wrapperStyle),{display:this.nzShow?"block":"none"})),q){let be=this.nzContainer;this.container=typeof be=="string"?this.doc.querySelector(be):be,this.registerScrollEvent()}pe&&this.setActive()}static{this.\u0275fac=function(f){return new(f||lt)(fe(Jt),fe(Qt),fe(K),fe(Ke),fe(We))}}static{this.\u0275cmp=v({type:lt,selectors:[["nz-anchor"]],viewQuery:function(f,T){if(f&1&&R(jn,5),f&2){let q;N(q=M())&&(T.ink=q.first)}},inputs:{nzAffix:[2,"nzAffix","nzAffix",Ge],nzShow:[2,"nzShow","nzShow",Ge],nzShowInkInFixed:[2,"nzShowInkInFixed","nzShowInkInFixed",Ge],nzBounds:[2,"nzBounds","nzBounds",Ft],nzOffsetTop:[2,"nzOffsetTop","nzOffsetTop",at],nzTargetOffset:[2,"nzTargetOffset","nzTargetOffset",at],nzContainer:"nzContainer",nzCurrentAnchor:"nzCurrentAnchor",nzDirection:"nzDirection"},outputs:{nzClick:"nzClick",nzChange:"nzChange",nzScroll:"nzScroll"},exportAs:["nzAnchor"],features:[Tt,gt],ngContentSelectors:Wn,decls:4,vars:1,consts:[["content",""],["ink",""],[3,"nzOffsetTop","nzTarget"],[3,"ngTemplateOutlet"],[1,"ant-anchor-wrapper"],[1,"ant-anchor"],[1,"ant-anchor-ink"],[1,"ant-anchor-ink-ball"]],template:function(f,T){f&1&&(Je(),g(0,qn,2,3,"nz-affix",2)(1,Yn,1,1,null,3)(2,Zn,6,10,"ng-template",null,0,A)),f&2&&ue(T.nzAffix?0:1)},dependencies:[qe,se,y],encapsulation:2,changeDetection:0})}}})();var ni=["nzTemplate"],ii=["linkTitle"],ai=["*"];function ri(a,s){if(a&1&&(n(0,"span"),e(1),t()),a&2){let i=p();m(),_e(i.titleStr)}}function li(a,s){}function oi(a,s){if(a&1&&g(0,li,0,0,"ng-template",2),a&2){let i=p();c("ngTemplateOutlet",i.titleTpl||i.nzTemplate)}}function si(a,s){a&1&&Qe(0)}var xe=(()=>{class a{set nzTitle(i){i instanceof yt?(this.titleStr=null,this.titleTpl=i):this.titleStr=i}constructor(i,l,r,o){this.elementRef=i,this.anchorComp=l,this.platform=r,this.renderer=o,this.nzHref="#",this.titleStr="",this.nzDirection="vertical"}ngOnInit(){this.anchorComp.registerLink(this),this.nzDirection=this.anchorComp.nzDirection}getLinkTitleElement(){return this.linkTitle.nativeElement}setActive(){this.renderer.addClass(this.elementRef.nativeElement,"ant-anchor-link-active")}unsetActive(){this.renderer.removeClass(this.elementRef.nativeElement,"ant-anchor-link-active")}goToClick(i){i.preventDefault(),i.stopPropagation(),this.platform.isBrowser&&this.anchorComp.handleScrollTo(this)}ngOnDestroy(){this.anchorComp.unregisterLink(this)}static{this.\u0275fac=function(l){return new(l||a)(fe(_t),fe($),fe(Ke),fe(We))}}static{this.\u0275cmp=v({type:a,selectors:[["nz-link"]],contentQueries:function(l,r,o){if(l&1&&Nt(o,ni,5),l&2){let h;N(h=M())&&(r.nzTemplate=h.first)}},viewQuery:function(l,r){if(l&1&&R(ii,5),l&2){let o;N(o=M())&&(r.linkTitle=o.first)}},hostAttrs:[1,"ant-anchor-link"],inputs:{nzHref:"nzHref",nzTarget:"nzTarget",nzTitle:"nzTitle"},exportAs:["nzLink"],ngContentSelectors:ai,decls:5,vars:5,consts:[["linkTitle",""],[1,"ant-anchor-link-title",3,"click","href","target"],[3,"ngTemplateOutlet"]],template:function(l,r){if(l&1){let o=_();Je(),n(0,"a",1,0),x("click",function(C){return u(o),E(r.goToClick(C))}),g(2,ri,2,1,"span")(3,oi,1,1,null,2),t(),g(4,si,1,0)}l&2&&(c("href",r.nzHref,zt)("target",r.nzTarget),vt("title",r.titleStr),m(2),ue(r.titleStr?2:3),m(2),ue(r.nzDirection==="vertical"?4:-1))},dependencies:[qe],encapsulation:2,changeDetection:0})}}return a})();var he=(()=>{class a{static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275mod=Ct({type:a})}static{this.\u0275inj=Et({imports:[$]})}}return a})();var mi=()=>({standalone:!0});function di(a,s){if(a&1){let i=_();b(0),n(1,"a",53),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",54),d(3,"nz-icon",55),t()(),w()}}function pi(a,s){if(a&1){let i=_();b(0),n(1,"a",53),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",54),e(3,"Alexei Cioina's blog"),t()(),w()}}var Nn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-what-version-of-this-blog"]],viewQuery:function(l,r){if(l&1&&R(y,7),l&2){let o;N(o=M())&&(r.affixEl=o.first)}},decls:407,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-8a3037627685a35a360fc6fc7139ab82","nzTitle","The Problem"],["nzHref","#h-c36299acad44969a87a312672fc3467a","nzTitle","Case Scenario #1"],["nzHref","#h-a42d426924ef47ad9f3ba9f9eef303f7","nzTitle","Case Scenario #2"],["nzHref","#h-b3708047a4d3ddf05a74c7ff57027c22","nzTitle","Case Scenario #3"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20211009-what-version-of-this-blog.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],["id","h-8a3037627685a35a360fc6fc7139ab82"],["onclick","window.location.hash = 'h-8a3037627685a35a360fc6fc7139ab82'",1,"anchor"],["href","https://stackoverflow.com/questions/55494181/what-is-the-purpose-of-swupdate-activateupdate-in-angular/59175788#59175788","target","_blank","rel","noopener"],["id","h-c36299acad44969a87a312672fc3467a"],["onclick","window.location.hash = 'h-c36299acad44969a87a312672fc3467a'",1,"anchor"],["href","https://github.com/cioina/openshift-laravel-example/blob/main/src/acioina/site/src/Acioina/UserManagement/Http/Controllers/Api/VersionController.php","target","_blank","rel","noopener"],[1,"language-php"],[1,"hljs-meta"],[1,"hljs-keyword"],[1,"hljs-title","class_"],[1,"hljs-title"],[1,"hljs-class"],[1,"hljs-variable","constant_"],[1,"hljs-string"],[1,"hljs-function"],[1,"hljs-params"],[1,"hljs-variable"],[1,"hljs-built_in"],[1,"hljs-title","function_","invoke__"],[1,"hljs-variable","language_"],[1,"language-typescript"],[1,"hljs-attr"],[1,"language-csharp"],[1,"hljs-literal"],[1,"hljs-title","function_"],[1,"hljs-property"],["id","h-a42d426924ef47ad9f3ba9f9eef303f7"],["onclick","window.location.hash = 'h-a42d426924ef47ad9f3ba9f9eef303f7'",1,"anchor"],["href","https://github.com/ngrx/platform/blob/main/projects/ngrx.io/src/app/sw-updates/sw-updates.service.ts","target","_blank","rel","noopener"],["id","h-b3708047a4d3ddf05a74c7ff57027c22"],["onclick","window.location.hash = 'h-b3708047a4d3ddf05a74c7ff57027c22'",1,"anchor"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,di,4,0,"ng-container",5)(6,pi,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),G("ngModelChange",function(h){return Q(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15),t()(),n(20,"span",16),e(21," What Version of This Blog Do You See?"),d(22,"span",17)(23,"span",18),n(24,"a",19),d(25,"nz-icon",20),t()(),n(26,"article",21)(27,"p"),e(28,"As you can see, this website does not have a formal version tag. It uses the latest version of "),n(29,"code"),e(30,"ng-zorro-antd"),t(),e(31," and Angular as some kind of version tag. So, just imagine how surprised I was when I deployed this website compiled with Angular "),n(32,"code"),e(33,"12.2.9"),t(),e(34," and checking my very old Samsung that runs on Android 4.4.2. For some reason, the old Chrome web browser does not want to load this website correctly, so, I use an old version of FireFox browser for Android (As you may know, Google does not allow to update apps for old Android versions.) FireFox worked ok at first. But, when I closed and opened the browser again, this site loaded automatically and showed Angular "),n(35,"code"),e(36,"12.2.4"),t(),e(37," at the bottom of the footer. Somehow, FireFox cached an old version of my website. Deleting the FireFox cache did not help, but, reloading the URL would show the correct Angular "),n(38,"code"),e(39,"12.2.9"),t(),e(40,"."),t(),n(41,"blockquote")(42,"p"),e(43,"It looks like starting with Angular 16, this website will not work at all anymore on outdated devices!"),t()(),n(44,"h2",22)(45,"span"),e(46,"The Problem"),t(),n(47,"a",23),e(48,"#"),t()(),n(49,"p"),e(50,"It may be problematic to have latest version for some websites that use Angular with a lot of lazy-loading modules. Imagine a user browsing your website just seconds before you start to deploy a new version of your website. The user will still have the old version (old Angular compiled JavaScript files) even after the deployment ends. We will consider three case scenarios here and will try to implement solution #2 from "),n(51,"strong"),e(52,"gkalpak"),t(),e(53,"'s "),n(54,"a",24),e(55,"StackOverflow"),t(),e(56," answer. We will let website users know that a new version is available and ask them to refresh the webpage."),t(),n(57,"h2",25)(58,"span"),e(59,"Case Scenario #1"),t(),n(60,"a",26),e(61,"#"),t()(),n(62,"p"),e(63,"From my experience, the problem may appear for old/outdated web browsers like one described above or when you open multiple tabs of the same page. You will get a message to reload/refresh the page with an error similar to "),n(64,"strong"),e(65,"ERROR: b607b9112d721b487e78121fc3bbf455"),t(),e(66," (where b607b9112d721b487e78121fc3bbf455 is the new hash.)"),t(),n(67,"p"),e(68,"It was very simple for me to implement this solution because I use a server-side API and deploy my backend and frontend on the same server and generate my deployment with a Node.js script. So, I generate "),n(69,"a",27),e(70,"a small PHP file"),t(),e(71," and small TypeScript file with some unique hash."),t(),n(72,"p")(73,"strong")(74,"code"),e(75,"VersionController.php"),t()()(),n(76,"pre",28)(77,"code")(78,"span",29),e(79,"<?php"),t(),e(80,`
`),n(81,"span",30),e(82,"namespace"),t(),e(83," "),n(84,"span",31),e(85,"Acioina"),t(),e(86,"\\"),n(87,"span",31),e(88,"UserManagement"),t(),e(89,"\\"),n(90,"span",31),e(91,"Http"),t(),e(92,"\\"),n(93,"span",31),e(94,"Controllers"),t(),e(95,"\\"),n(96,"span",31),e(97,"Api"),t(),e(98,`;
`),n(99,"span",30),e(100,"use"),t(),e(101," "),n(102,"span",32),e(103,"Acioina"),t(),e(104,"\\"),n(105,"span",32),e(106,"UserManagement"),t(),e(107,"\\"),n(108,"span",32),e(109,"Transformers"),t(),e(110,"\\"),n(111,"span",32),e(112,"VersionTransformer"),t(),e(113,`;

`),n(114,"span",33)(115,"span",30),e(116,"class"),t(),e(117," "),n(118,"span",32),e(119,"VersionController"),t(),e(120," "),n(121,"span",30),e(122,"extends"),t(),e(123," "),n(124,"span",32),e(125,"ApiController"),t(),e(126,`
`),t(),e(127,`{
    `),n(128,"span",30),e(129,"private"),t(),e(130," "),n(131,"span",30),e(132,"const"),t(),e(133," "),n(134,"span",34),e(135,"ANGULAR_APP_HASH"),t(),e(136," = "),n(137,"span",35),e(138,"'b607b9112d721b487e78121fc3bbf455'"),t(),e(139,`;

    `),n(140,"span",30),e(141,"public"),t(),e(142," "),n(143,"span",36)(144,"span",30),e(145,"function"),t(),e(146," "),n(147,"span",32),e(148,"__construct"),t(),e(149,"("),n(150,"span",37),e(151,"VersionTransformer "),n(152,"span",38),e(153,"$transformer"),t()(),e(154,`)
    `),t(),e(155,`{
        `),n(156,"span",39),e(157,"parent"),t(),e(158,"::"),n(159,"span",40),e(160,"__construct"),t(),e(161,"("),n(162,"span",38),e(163,"$transformer"),t(),e(164,`);
    }

    `),n(165,"span",30),e(166,"public"),t(),e(167," "),n(168,"span",36)(169,"span",30),e(170,"function"),t(),e(171," "),n(172,"span",32),e(173,"index"),t(),e(174,"("),d(175,"span",37),e(176,`)
    `),t(),e(177,`{
        `),n(178,"span",30),e(179,"return"),t(),e(180," "),n(181,"span",41),e(182,"$this"),t(),e(183,"->"),n(184,"span",40),e(185,"respondWithTransformer"),t(),e(186,"(["),n(187,"span",35),e(188,"'hash'"),t(),e(189," => "),n(190,"span",39),e(191,"self"),t(),e(192,"::"),n(193,"span",34),e(194,"ANGULAR_APP_HASH"),t(),e(195,`]);
    }
}`),t()(),n(196,"p")(197,"strong")(198,"code"),e(199,"version.ts"),t()()(),n(200,"pre",42)(201,"code")(202,"span",30),e(203,"export"),t(),e(204," "),n(205,"span",30),e(206,"const"),t(),e(207," "),n(208,"span",34),e(209,"APP_VERSION"),t(),e(210,` = {
  `),n(211,"span",43),e(212,"version"),t(),e(213,": "),n(214,"span",35),e(215,"'0.0.0'"),t(),e(216,`,
  `),n(217,"span",43),e(218,"hash"),t(),e(219,": "),n(220,"span",35),e(221,"'b607b9112d721b487e78121fc3bbf455'"),t(),e(222,`,
};`),t()(),n(223,"p"),e(224,"Currently we are moving our server-side to ASP.NET Core and we are generating this small file:"),t(),n(225,"p")(226,"strong")(227,"code"),e(228,"VersionResponseModel.cs"),t()()(),n(229,"pre",44)(230,"code")(231,"span",30),e(232,"namespace"),t(),e(233," "),n(234,"span",32),e(235,"BlogAngular.Application.Common.Version"),t(),e(236,`;
`),n(237,"span",30),e(238,"using"),t(),e(239,` Newtonsoft.Json;
`),n(240,"span",30),e(241,"public"),t(),e(242," "),n(243,"span",30),e(244,"class"),t(),e(245," "),n(246,"span",32),e(247,"VersionResponseModel"),t(),e(248,`
{
    `),n(249,"span",36)(250,"span",30),e(251,"public"),t(),e(252," "),n(253,"span",32),e(254,"VersionResponseModel"),t(),e(255,"()"),t(),e(256,`
    {
        Hash = `),n(257,"span",35),e(258,'"b607b9112d721b487e78121fc3bbf455"'),t(),e(259,`;
    }

    [`),n(260,"span",29),e(261,"JsonProperty("),n(262,"span",35),e(263,'"hash"'),t(),e(264,")"),t(),e(265,`]
    `),n(266,"span",30),e(267,"public"),t(),e(268," "),n(269,"span",39),e(270,"string"),t(),e(271,"? Hash { "),n(272,"span",30),e(273,"get"),t(),e(274,"; } = "),n(275,"span",45),e(276,"default"),t(),e(277,`!;
}`),t()(),n(278,"p"),e(279,"In my "),n(280,"code"),e(281,"app.component.ts"),t(),e(282,", I have something like this:"),t(),n(283,"pre",42)(284,"code")(285,"span",29),e(286,"@Component"),t(),e(287,`({
  `),n(288,"span",43),e(289,"selector"),t(),e(290,": "),n(291,"span",35),e(292,"'app-root'"),t(),e(293,`,
  `),n(294,"span",43),e(295,"template"),t(),e(296,": "),n(297,"span",35),e(298,`\`
    <div class="page-wrapper">
      <app-header [windowWidth]="windowWidth" [isLoggedIn]="isLoggedIn" [username]="username"> </app-header>
      <ng-container *ngIf="notification">
        <nz-card>
          <div nz-row nzJustify="center">
            <div nz-col>
              <h5 nz-typography nzType="danger" [nzContent]="notification"></h5>
            </div>
          </div>
        </nz-card>
      </ng-container>
...
\``),t(),e(299,`
  `),n(300,"span",46),e(301,"ngOnInit"),t(),e(302,"(): "),n(303,"span",39),e(304,"void"),t(),e(305,` {
    `),n(306,"span",41),e(307,"this"),t(),e(308,"."),n(309,"span",47),e(310,"versionFacade"),t(),e(311,"."),n(312,"span",46),e(313,"getVersion"),t(),e(314,`();

    `),n(315,"span",41),e(316,"this"),t(),e(317,"."),n(318,"span",47),e(319,"versionFacade"),t(),e(320,"."),n(321,"span",47),e(322,"versionHash$"),t(),e(323,"."),n(324,"span",46),e(325,"pipe"),t(),e(326,"("),n(327,"span",46),e(328,"takeUntil"),t(),e(329,"("),n(330,"span",41),e(331,"this"),t(),e(332,"."),n(333,"span",47),e(334,"destroy$"),t(),e(335,"))."),n(336,"span",46),e(337,"subscribe"),t(),e(338,"("),n(339,"span",36),e(340,"("),n(341,"span",37)(342,"span",43),e(343,"hash"),t(),e(344,": "),n(345,"span",39),e(346,"string"),t()(),e(347,") =>"),t(),e(348,` {
      `),n(349,"span",30),e(350,"if"),t(),e(351," (hash && hash !== "),n(352,"span",34),e(353,"APP_VERSION"),t(),e(354,"."),n(355,"span",47),e(356,"hash"),t(),e(357,`) {
        `),n(358,"span",41),e(359,"this"),t(),e(360,"."),n(361,"span",47),e(362,"notification"),t(),e(363,` =
          `),n(364,"span",35),e(365,"'You are using an old version of this website and some pages may not work correctly. Please reload/refresh the page in order to load the latest version.'"),t(),e(366,`;
        `),n(367,"span",41),e(368,"this"),t(),e(369,"."),n(370,"span",47),e(371,"cdr"),t(),e(372,"."),n(373,"span",46),e(374,"markForCheck"),t(),e(375,`();
      }
    });
  }`),t()(),n(376,"p"),e(377,"I compile my frontend app with a command like this: "),n(378,"code"),e(379,"yarn build:site"),t(),e(380,". This simple solution helped me to solve my FireFox problem, however, the most logical solution is not to allow outdated web browsers to access this website."),t(),n(381,"h2",48)(382,"span"),e(383,"Case Scenario #2"),t(),n(384,"a",49),e(385,"#"),t()(),n(386,"p"),e(387,"This is the most common case scenario for modern (up to date) web browsers based on Google Chrome. It happens when you open this website from the browser bookmarks or when you browse this website while a new version was deployed to the server. You will get a message to reload/refresh the page with "),n(388,"strong"),e(389,"ERROR: SwUpdatesService: activated"),t(),e(390,". This website uses a Service Worker loaded from "),n(391,"code"),e(392,"ngsw-worker.js"),t(),e(393,". In addition, we use Angular "),n(394,"a",50),e(395,"SwUpdates"),t(),e(396," which will load updated resources of the website behind the scene on the user's machine. Theoretically, this website should work fine without reloading most of the time."),t(),n(397,"h2",51)(398,"span"),e(399,"Case Scenario #3"),t(),n(400,"a",52),e(401,"#"),t()(),n(402,"p"),e(403,"This case scenario happens when you open multiple tabs of this website while a new version was deployed to the server. You will get a message to reload/refresh the page with "),n(404,"strong"),e(405,"ERROR: GlobalErrorHandler"),t(),e(406,". It means that the browser tries to load old resources that were deleted by a new deployment."),t()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),J("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,mi)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,W,j,O,L,I,P,D,F,U,V,H,B,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var ci=()=>({standalone:!0});function xi(a,s){if(a&1){let i=_();b(0),n(1,"a",94),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",95),d(3,"nz-icon",96),t()(),w()}}function hi(a,s){if(a&1){let i=_();b(0),n(1,"a",94),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",95),e(3,"Alexei Cioina's blog"),t()(),w()}}var Mn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-svg-icons"]],viewQuery:function(l,r){if(l&1&&R(y,7),l&2){let o;N(o=M())&&(r.affixEl=o.first)}},decls:882,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-175576ef003bf799bcb57b8ca42ad3c2","nzTitle","List of icons"],["nzHref","#h-db974238714ca8de634a7ce1d083a14f","nzTitle","API"],["nzHref","#h-cf0c08580649cca4d27fe03e3c45d398","nzTitle","[nz-icon]"],["nzHref","#h-1a35350834d43f0d0f324f4a0348eba3","nzTitle","NzIconService"],["nzHref","#h-ed485f46b93499de3700bacfe35e1334","nzTitle","SVG icons"],["nzHref","#h-ec99ccb95aa0e7cb6fd9e61a7c60ff7c","nzTitle","Static loading and dynamic loading"],["nzHref","#h-10028ae625de15d5eefce48a85bff434","nzTitle","Add Icons in Lazy-loaded Modules"],["nzHref","#h-93e3a3a1bd8c21444d8b8ae1baea0fc0","nzTitle","Set Default TwoTone Color"],["nzHref","#h-3ce4aec90030342571cd93b6370e0693","nzTitle","Custom Font Icon"],["nzHref","#h-b3ba0fe968ce39dcfc6fe8cc0f1b02da","nzTitle","Namespace"],["nzHref","#h-1fe917b01f9a3f87fa2d7d3b7643fac1","nzTitle","FAQ"],["nzHref","#h-8e1d73289aa92536789394b9371858f6","nzTitle","All my icons are gone"],["nzHref","#h-a81dd5f26e5a5e33d037266277360e1c","nzTitle","There are two similar icons in a "],["nzHref","#h-62a9076a6bbec0d3ce2959c0922bcc02","nzTitle","I want to import all icons statically. What should I do?"],["nzHref","#h-5de90099b2e7ac70e7615eaaebe36d60","nzTitle","Does dynamic loading affect web pages' performance?"],["nzHref","#h-b7b1fb211a7b65e0bc5d6ee9d98c00f6","nzTitle","How do I know a icon's corresponding module to import?"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230219-svg-icons.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[2,"border-color","#faad14"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/doc/index.en-US.md","target","_blank","rel","noopener"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE","target","_blank","rel","noopener"],["id","h-175576ef003bf799bcb57b8ca42ad3c2"],["onclick","window.location.hash = 'h-175576ef003bf799bcb57b8ca42ad3c2'",1,"anchor"],["href","https://ant.design/components/icon/","target","_blank","rel","noopener"],[1,"language-ts"],[1,"hljs-keyword"],[1,"hljs-title","class_"],[1,"hljs-string"],["id","h-db974238714ca8de634a7ce1d083a14f"],["onclick","window.location.hash = 'h-db974238714ca8de634a7ce1d083a14f'",1,"anchor"],["id","h-cf0c08580649cca4d27fe03e3c45d398"],[1,"api-type-label","directive"],["onclick","window.location.hash = 'h-cf0c08580649cca4d27fe03e3c45d398'",1,"anchor"],["href","https://github.com/twbs/icons","target","_blank","rel","noopener"],["href","https://icons.getbootstrap.com/","target","_blank","rel","noopener"],["href","https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-svg","target","_blank","rel","noopener"],["id","h-1a35350834d43f0d0f324f4a0348eba3"],[1,"api-type-label","service"],["onclick","window.location.hash = 'h-1a35350834d43f0d0f324f4a0348eba3'",1,"anchor"],["id","h-ed485f46b93499de3700bacfe35e1334"],["onclick","window.location.hash = 'h-ed485f46b93499de3700bacfe35e1334'",1,"anchor"],["href","https://github.com/ant-design/ant-design/issues/10353","target","_blank","rel","noopener"],[1,"language-html"],[1,"hljs-tag"],[1,"hljs-name"],[1,"hljs-attr"],["id","h-ec99ccb95aa0e7cb6fd9e61a7c60ff7c"],["onclick","window.location.hash = 'h-ec99ccb95aa0e7cb6fd9e61a7c60ff7c'",1,"anchor"],[1,"hljs-comment"],[1,"hljs-meta"],[1,"hljs-title","function_"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/icons.ts","target","_blank","rel","noopener"],[1,"language-json"],[1,"hljs-punctuation"],["id","h-10028ae625de15d5eefce48a85bff434"],["onclick","window.location.hash = 'h-10028ae625de15d5eefce48a85bff434'",1,"anchor"],["id","h-93e3a3a1bd8c21444d8b8ae1baea0fc0"],["onclick","window.location.hash = 'h-93e3a3a1bd8c21444d8b8ae1baea0fc0'",1,"anchor"],["id","h-3ce4aec90030342571cd93b6370e0693"],["onclick","window.location.hash = 'h-3ce4aec90030342571cd93b6370e0693'",1,"anchor"],["href","http://iconfont.cn/","target","_blank","rel","noopener"],[1,"hljs-variable","language_"],[1,"hljs-property"],["href","http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code","target","_blank","rel","noopener"],["id","h-b3ba0fe968ce39dcfc6fe8cc0f1b02da"],["onclick","window.location.hash = 'h-b3ba0fe968ce39dcfc6fe8cc0f1b02da'",1,"anchor"],["id","h-1fe917b01f9a3f87fa2d7d3b7643fac1"],["onclick","window.location.hash = 'h-1fe917b01f9a3f87fa2d7d3b7643fac1'",1,"anchor"],["id","h-8e1d73289aa92536789394b9371858f6"],["onclick","window.location.hash = 'h-8e1d73289aa92536789394b9371858f6'",1,"anchor"],["id","h-0dfac33e812ac318cdabc8c2135f71c5"],["onclick","window.location.hash = 'h-0dfac33e812ac318cdabc8c2135f71c5'",1,"anchor"],["id","h-62a9076a6bbec0d3ce2959c0922bcc02"],["onclick","window.location.hash = 'h-62a9076a6bbec0d3ce2959c0922bcc02'",1,"anchor"],["id","h-5de90099b2e7ac70e7615eaaebe36d60"],["onclick","window.location.hash = 'h-5de90099b2e7ac70e7615eaaebe36d60'",1,"anchor"],["id","h-b7b1fb211a7b65e0bc5d6ee9d98c00f6"],["onclick","window.location.hash = 'h-b7b1fb211a7b65e0bc5d6ee9d98c00f6'",1,"anchor"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,xi,4,0,"ng-container",5)(6,hi,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),G("ngModelChange",function(h){return Q(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20)(25,"nz-link",21)(26,"nz-link",22)(27,"nz-link",23)(28,"nz-link",24)(29,"nz-link",25)(30,"nz-link",26)(31,"nz-link",27),t()(),n(32,"span",28),e(33," Semantic Vector Graphics (SVG) Icons"),d(34,"span",29)(35,"span",30),n(36,"a",31),d(37,"nz-icon",32),t()(),n(38,"article",33)(39,"blockquote",34)(40,"p")(41,"strong"),e(42,"This is a modified version of the "),n(43,"a",35),e(44,"NG-ZORRO original"),t(),e(45," document provided under "),n(46,"a",36),e(47,"Alibaba.com MIT LICENSE"),t(),e(48,"."),t()()(),n(49,"h2",37)(50,"span"),e(51,"List of icons"),t(),n(52,"a",38),e(53,"#"),t()(),n(54,"p"),e(55,"We are still adding icons right now, syncing to "),n(56,"a",39),e(57,"antd"),t(),e(58,"."),t(),n(59,"pre",40)(60,"code")(61,"span",41),e(62,"import"),t(),e(63," { "),n(64,"span",42),e(65,"NzIconModule"),t(),e(66," } "),n(67,"span",41),e(68,"from"),t(),e(69," "),n(70,"span",43),e(71,"'ng-zorro-antd/icon'"),t(),e(72,";"),t()(),n(73,"h2",44)(74,"span"),e(75,"API"),t(),n(76,"a",45),e(77,"#"),t()(),n(78,"h3",46)(79,"span"),e(80,"[nz-icon]"),t(),n(81,"label",47),e(82,"directive"),t(),n(83,"a",48),e(84,"#"),t()(),n(85,"table")(86,"thead")(87,"tr")(88,"th"),e(89,"Property"),t(),n(90,"th"),e(91,"Description"),t(),n(92,"th"),e(93,"Type"),t(),n(94,"th"),e(95,"Default"),t(),n(96,"th"),e(97,"Global Config"),t()()(),n(98,"tbody")(99,"tr")(100,"td")(101,"code"),e(102,"[nzType]"),t()(),n(103,"td"),e(104,"Type of the ant design icon"),t(),n(105,"td")(106,"code"),e(107,"string"),t()(),n(108,"td"),e(109,"-"),t(),d(110,"td"),t(),n(111,"tr")(112,"td")(113,"code"),e(114,"[nzTheme]"),t()(),n(115,"td"),e(116,"Type of the ant design icon"),t(),n(117,"td")(118,"code"),e(119,"'fill'|'outline'|'twotone'|'feather'"),t()(),n(120,"td")(121,"code"),e(122,"'outline'"),t()(),n(123,"td"),e(124,"\u2705"),t()(),n(125,"tr")(126,"td")(127,"code"),e(128,"[nzSpin]"),t()(),n(129,"td"),e(130,"Rotate icon with animation"),t(),n(131,"td")(132,"code"),e(133,"boolean"),t()(),n(134,"td")(135,"code"),e(136,"false"),t()(),d(137,"td"),t(),n(138,"tr")(139,"td")(140,"code"),e(141,"[nzTwotoneColor]"),t()(),n(142,"td"),e(143,"Only support the two-tone icon. Specific the primary color."),t(),n(144,"td")(145,"code"),e(146,"string (hex color)"),t()(),n(147,"td"),e(148,"-"),t(),n(149,"td"),e(150,"\u2705"),t()(),n(151,"tr")(152,"td")(153,"code"),e(154,"[nzIconfont]"),t()(),n(155,"td"),e(156,"Type of the icon from iconfont"),t(),n(157,"td")(158,"code"),e(159,"string"),t()(),n(160,"td"),e(161,"-"),t(),d(162,"td"),t(),n(163,"tr")(164,"td")(165,"code"),e(166,"[nzRotate]"),t()(),n(167,"td"),e(168,"Rotate degrees"),t(),n(169,"td")(170,"code"),e(171,"number"),t()(),n(172,"td"),e(173,"-"),t(),d(174,"td"),t(),n(175,"tr")(176,"td")(177,"code"),e(178,"[nzWidth]"),t()(),n(179,"td"),e(180,"SVG width"),t(),n(181,"td")(182,"code"),e(183,"number|string"),t()(),n(184,"td")(185,"code"),e(186,"1em"),t()(),d(187,"td"),t(),n(188,"tr")(189,"td")(190,"code"),e(191,"[nzHeight]"),t()(),n(192,"td"),e(193,"SVG height"),t(),n(194,"td")(195,"code"),e(196,"number|string"),t()(),n(197,"td")(198,"code"),e(199,"1em"),t()(),d(200,"td"),t()()(),n(201,"blockquote")(202,"p"),e(203,"In "),n(204,"code"),e(205,"feather"),t(),e(206," folder, there are all "),n(207,"a",49),e(208,"official open source SVG icons for Bootstrap"),t(),e(209," that can be viewed "),n(210,"a",50),e(211,"here"),t(),e(212,". In "),n(213,"code"),e(214,"fill"),t(),e(215,","),n(216,"code"),e(217,"outline"),t(),e(218," and "),n(219,"code"),e(220,"twotone"),t(),e(221," folders, there are all "),n(222,"a",51),e(223,"Ant Design SVG icons"),t(),e(224," that can be viewed "),n(225,"a",39),e(226,"here"),t(),e(227,". In "),n(228,"code"),e(229,"custom"),t(),e(230," folder, there are a few SVG icons added by hand witch can be accessed by "),n(231,"code"),e(232,'nzType="custom:some-icon-file-name"'),t(),e(233,"."),t()(),n(234,"h3",52)(235,"span"),e(236,"NzIconService"),t(),n(237,"label",53),e(238,"service"),t(),n(239,"a",54),e(240,"#"),t()(),n(241,"table")(242,"thead")(243,"tr")(244,"th"),e(245,"Methods/Properties"),t(),n(246,"th"),e(247,"Description"),t(),n(248,"th"),e(249,"Parameters"),t()()(),n(250,"tbody")(251,"tr")(252,"td")(253,"code"),e(254,"useJsonpLoading()"),t()(),n(255,"td"),e(256,"Call this method to switch to jsonp like loading"),t(),d(257,"td"),t(),n(258,"tr")(259,"td")(260,"code"),e(261,"addIcon()"),t()(),n(262,"td"),e(263,"To import icons statically"),t(),n(264,"td")(265,"code"),e(266,"IconDefinition"),t()()(),n(267,"tr")(268,"td")(269,"code"),e(270,"addIconLiteral()"),t()(),n(271,"td"),e(272,"To statically import custom icons"),t(),n(273,"td")(274,"code"),e(275,"string"),t(),e(276,", "),n(277,"code"),e(278,"string (SVG)"),t()()(),n(279,"tr")(280,"td")(281,"code"),e(282,"fetchFromIconfont()"),t()(),n(283,"td"),e(284,"To get icon assets from fonticon"),t(),n(285,"td")(286,"code"),e(287,"NzIconfontOption"),t()()(),n(288,"tr")(289,"td")(290,"code"),e(291,"changeAssetsSource()"),t()(),n(292,"td"),e(293,"To change the location of your icon assets, so that you can deploy these icons wherever you want"),t(),n(294,"td")(295,"code"),e(296,"string"),t()()()()(),n(297,"h3",55)(298,"span"),e(299,"SVG icons"),t(),n(300,"a",56),e(301,"#"),t()(),n(302,"p"),e(303,"We synced to Ant Design and replaced font icons with svg icons which bring benefits below:"),t(),n(304,"ul")(305,"li"),e(306,"Complete offline usage of icon, no dependency of alipay cdn font icon file and no more empty square during downloading."),t(),n(307,"li"),e(308,"Much more display accuracy in lower-level screens."),t(),n(309,"li"),e(310,"Support multiple colors for icon."),t(),n(311,"li"),e(312,"No need to change built-in icons with overriding styles by providing more props in component."),t()(),n(313,"p"),e(314,"You can join in "),n(315,"a",57),e(316,"this dicussion of Ant Design"),t(),e(317,"."),t(),n(318,"p"),e(319,"NG-ZORRO hadn't provided an icon component. Instead, icon based on font files was provided. We make this new directive compatible to old API. If you make no changes to your existing code, old icons would be dynamically loaded as "),n(320,"code"),e(321,"outline"),t(),e(322," icons. But the best pratice is always to use "),n(323,"code"),e(324,"nz-icon"),t(),e(325," directive and specify the "),n(326,"code"),e(327,"theme"),t(),e(328," prop."),t(),n(329,"pre",58)(330,"code")(331,"span",59),e(332,"<"),n(333,"span",60),e(334,"span"),t(),e(335," "),n(336,"span",61),e(337,"nz-icon"),t(),e(338," ["),n(339,"span",61),e(340,"nzType"),t(),e(341,"]="),n(342,"span",43),e(343,`"'star'"`),t(),e(344," ["),n(345,"span",61),e(346,"nzTheme"),t(),e(347,"]="),n(348,"span",43),e(349,`"'fill'"`),t(),e(350,">"),t(),n(351,"span",59),e(352,"</"),n(353,"span",60),e(354,"span"),t(),e(355,">"),t()()(),n(356,"p"),e(357,"All the icons will be rendered to "),n(358,"code"),e(359,"<svg>"),t(),e(360,", and styles and classes applied to "),n(361,"code"),e(362,"<i>"),t(),e(363," would work."),t(),n(364,"pre",58)(365,"code")(366,"span",59),e(367,"<"),n(368,"span",60),e(369,"span"),t(),e(370," "),n(371,"span",61),e(372,"nz-icon"),t(),e(373," ["),n(374,"span",61),e(375,"nzType"),t(),e(376,"]="),n(377,"span",43),e(378,`"'message'"`),t(),e(379," "),n(380,"span",61),e(381,"style"),t(),e(382,"="),n(383,"span",43),e(384,'"font-size: 16px; color: #08c;"'),t(),e(385,">"),t(),n(386,"span",59),e(387,"</"),n(388,"span",60),e(389,"span"),t(),e(390,">"),t()()(),n(391,"h3",62)(392,"span"),e(393,"Static loading and dynamic loading"),t(),n(394,"a",63),e(395,"#"),t()(),n(396,"p"),e(397,"As for icons provided by Ant Design, there are two ways of importing them into your project."),t(),n(398,"p"),e(399,"Static loading. By registering icons to "),n(400,"code"),e(401,"AppModule"),t(),e(402," you load icons statically."),t(),n(403,"pre",40)(404,"code")(405,"span",41),e(406,"import"),t(),e(407," { "),n(408,"span",42),e(409,"IconDefinition"),t(),e(410," } "),n(411,"span",41),e(412,"from"),t(),e(413," "),n(414,"span",43),e(415,"'@ant-design/icons-angular'"),t(),e(416,`;
`),n(417,"span",41),e(418,"import"),t(),e(419," { "),n(420,"span",42),e(421,"NzIconModule"),t(),e(422," } "),n(423,"span",41),e(424,"from"),t(),e(425," "),n(426,"span",43),e(427,"'ng-zorro-antd/icon'"),t(),e(428,`;

`),n(429,"span",64),e(430,"// Import what you need. RECOMMENDED. \u2714\uFE0F"),t(),e(431,`
`),n(432,"span",41),e(433,"import"),t(),e(434," { "),n(435,"span",42),e(436,"AccountBookFill"),t(),e(437,", "),n(438,"span",42),e(439,"AlertFill"),t(),e(440,", "),n(441,"span",42),e(442,"AlertOutline"),t(),e(443," } "),n(444,"span",41),e(445,"from"),t(),e(446," "),n(447,"span",43),e(448,"'@ant-design/icons-angular/icons'"),t(),e(449,`;

`),n(450,"span",41),e(451,"const"),t(),e(452," "),n(453,"span",61),e(454,"icons"),t(),e(455,": "),n(456,"span",42),e(457,"IconDefinition"),t(),e(458,"[] = [ "),n(459,"span",42),e(460,"AccountBookFill"),t(),e(461,", "),n(462,"span",42),e(463,"AlertOutline"),t(),e(464,", "),n(465,"span",42),e(466,"AlertFill"),t(),e(467,` ];

`),n(468,"span",64),e(469,"// Import all. NOT RECOMMENDED. \u274C"),t(),e(470,`
`),n(471,"span",64),e(472,"// import * as AllIcons from '@ant-design/icons-angular/icons';"),t(),e(473,`

`),n(474,"span",64),e(475,"// const antDesignIcons = AllIcons as {"),t(),e(476,`
`),n(477,"span",64),e(478,"//   [key: string]: IconDefinition;"),t(),e(479,`
`),n(480,"span",64),e(481,"// };"),t(),e(482,`
`),n(483,"span",64),e(484,"// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])"),t(),e(485,`

`),n(486,"span",65),e(487,"@NgModule"),t(),e(488,`({
  `),n(489,"span",61),e(490,"declarations"),t(),e(491,`: [
    `),n(492,"span",42),e(493,"AppComponent"),t(),e(494,`
  ],
  `),n(495,"span",61),e(496,"imports"),t(),e(497,`: [
    `),n(498,"span",42),e(499,"NzIconModule"),t(),e(500,"."),n(501,"span",66),e(502,"forRoot"),t(),e(503,`(icons),
  ]
  `),n(504,"span",61),e(505,"bootstrap"),t(),e(506,": [ "),n(507,"span",42),e(508,"AppComponent"),t(),e(509,` ]
})
`),n(510,"span",41),e(511,"export"),t(),e(512," "),n(513,"span",41),e(514,"class"),t(),e(515," "),n(516,"span",42),e(517,"AppModule"),t(),e(518,` {
}`),t()(),n(519,"p"),e(520,"Actually this calls "),n(521,"code"),e(522,"addIcon"),t(),e(523," of "),n(524,"code"),e(525,"NzIconService"),t(),e(526,". Icons imported would be bundled into your "),n(527,"code"),e(528,".js"),t(),e(529," files. Static loading would increase your bundle's size so we recommend use dynamic importing as much as you can."),t(),n(530,"blockquote")(531,"p"),e(532,"Icons used by NG-ZORRO itself "),n(533,"a",67),e(534,"(NZ_ICONS_USED_BY_ZORRO)"),t(),e(535," are imported statically to increase loading speed. However, icons demonstrated on the official website are loaded dynamically."),t()(),n(536,"p"),e(537,"Dynamic importing. This way would not increase your bundle's size. When NG-ZORRO detects that the icon you want to render hasn't been registered, it would fire a HTTP request to load it. All you have to do is to config your "),n(538,"code"),e(539,"angular.json"),t(),e(540," like this:"),t(),n(541,"pre",68)(542,"code")(543,"span",69),e(544,"{"),t(),e(545,`
  `),n(546,"span",61),e(547,'"assets"'),t(),n(548,"span",69),e(549,":"),t(),e(550," "),n(551,"span",69),e(552,"["),t(),e(553,`
    `),n(554,"span",69),e(555,"{"),t(),e(556,`
      `),n(557,"span",61),e(558,'"glob"'),t(),n(559,"span",69),e(560,":"),t(),e(561," "),n(562,"span",43),e(563,'"**/*"'),t(),n(564,"span",69),e(565,","),t(),e(566,`
      `),n(567,"span",61),e(568,'"input"'),t(),n(569,"span",69),e(570,":"),t(),e(571," "),n(572,"span",43),e(573,'"./node_modules/@ant-design/icons-angular/src/inline-svg/"'),t(),n(574,"span",69),e(575,","),t(),e(576,`
      `),n(577,"span",61),e(578,'"output"'),t(),n(579,"span",69),e(580,":"),t(),e(581," "),n(582,"span",43),e(583,'"/assets/"'),t(),e(584,`
    `),n(585,"span",69),e(586,"}"),t(),e(587,`
  `),n(588,"span",69),e(589,"]"),t(),e(590,`
`),n(591,"span",69),e(592,"}"),t()()(),n(593,"p"),e(594,"You can call "),n(595,"code"),e(596,"changeAssetsSource()"),t(),e(597," of "),n(598,"code"),e(599,"NzIconService"),t(),e(600," to change the location of your icon assets, so that you can deploy these icon assets to cdn. The parameter you passed would be add in front of "),n(601,"code"),e(602,"assets/"),t(),e(603,"."),t(),n(604,"p"),e(605,"Let's assume that you deploy static assets under "),n(606,"code"),e(607,"https://mycdn.somecdn.com/icons/assets"),t(),e(608,". You can call "),n(609,"code"),e(610,"changeAssetsSource('https://mycdn.somecdn.com/icons')"),t(),e(611," to tell NG-ZORRO that all your resources are located there."),t(),n(612,"p"),e(613,"Please call this in component's constructor or "),n(614,"code"),e(615,"AppInitService"),t(),e(616,"."),t(),n(617,"h3",70)(618,"span"),e(619,"Add Icons in Lazy-loaded Modules"),t(),n(620,"a",71),e(621,"#"),t()(),n(622,"p"),e(623,"Sometimes, you want to import icons in lazy modules to avoid increasing the size of the main.js. You can use "),n(624,"code"),e(625,"NzIconModule.forChild"),t(),e(626,"."),t(),n(627,"pre",40)(628,"code")(629,"span",65),e(630,"@NgModule"),t(),e(631,`({
  `),n(632,"span",61),e(633,"imports"),t(),e(634,": ["),n(635,"span",42),e(636,"CommonModule"),t(),e(637,", "),n(638,"span",42),e(639,"NzIconModule"),t(),e(640,"."),n(641,"span",66),e(642,"forChild"),t(),e(643,"(["),n(644,"span",42),e(645,"QuestionOutline"),t(),e(646,`])],
})
`),n(647,"span",41),e(648,"class"),t(),e(649," "),n(650,"span",42),e(651,"ChildModule"),t(),e(652," {}"),t()(),n(653,"p"),e(654,"When "),n(655,"code"),e(656,"ChildModule"),t(),e(657," get loaded, the icon QuestionOutline would be usable across the application."),t(),n(658,"h3",72)(659,"span"),e(660,"Set Default TwoTone Color"),t(),n(661,"a",73),e(662,"#"),t()(),n(663,"p"),e(664,"When using the two-tone icons, you provide a global configuration like "),n(665,"code"),e(666,"{ nzIcon: { nzTwotoneColor: 'xxx' } }"),t(),e(667," via "),n(668,"code"),e(669,"NzConfigService"),t(),e(670," or call corresponding "),n(671,"code"),e(672,"set"),t(),e(673," method to change two default twotone color."),t(),n(674,"h3",74)(675,"span"),e(676,"Custom Font Icon"),t(),n(677,"a",75),e(678,"#"),t()(),n(679,"p"),e(680,"We added a "),n(681,"code"),e(682,"fetchFromIconfont"),t(),e(683," method function to help developer using their own icons deployed at "),n(684,"a",76),e(685,"iconfont.cn"),t(),e(686," in a convenient way."),t(),n(687,"blockquote")(688,"p"),e(689,"This method is specified for iconfont.cn."),t()(),n(690,"pre",40)(691,"code")(692,"span",77),e(693,"this"),t(),e(694,"."),n(695,"span",78),e(696,"_iconService"),t(),e(697,"."),n(698,"span",66),e(699,"fetchFromIconfont"),t(),e(700,`({
  `),n(701,"span",61),e(702,"scriptUrl"),t(),e(703,": "),n(704,"span",43),e(705,"'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'"),t(),e(706,`,
});`),t()(),n(707,"pre",58)(708,"code")(709,"span",59),e(710,"<"),n(711,"span",60),e(712,"span"),t(),e(713," "),n(714,"span",61),e(715,"nz-icon"),t(),e(716," ["),n(717,"span",61),e(718,"nzIconfont"),t(),e(719,"]="),n(720,"span",43),e(721,`"'icon-tuichu'"`),t(),e(722,">"),t(),n(723,"span",59),e(724,"</"),n(725,"span",60),e(726,"span"),t(),e(727,">"),t()()(),n(728,"p"),e(729,"It create a component that uses SVG sprites in essence."),t(),n(730,"p"),e(731,"The following option are available:"),t(),n(732,"table")(733,"thead")(734,"tr")(735,"th"),e(736,"Property"),t(),n(737,"th"),e(738,"Description"),t(),n(739,"th"),e(740,"Type"),t(),n(741,"th"),e(742,"Default"),t()()(),n(743,"tbody")(744,"tr")(745,"td")(746,"code"),e(747,"scriptUrl"),t()(),n(748,"td"),e(749,"The URL generated by iconfont.cn project."),t(),n(750,"td")(751,"code"),e(752,"string"),t()(),n(753,"td"),e(754,"-"),t()()()(),n(755,"p"),e(756,"The property scriptUrl should be set to import the svg sprite symbols."),t(),n(757,"p"),e(758,"See "),n(759,"a",79),e(760,"iconfont.cn"),t(),e(761," documents to learn about how to generate scriptUrl."),t(),n(762,"h3",80)(763,"span"),e(764,"Namespace"),t(),n(765,"a",81),e(766,"#"),t()(),n(767,"p"),e(768,"We introduced namespace so you could add your own icons in a convenient way. When you wan to render an icon, you could assign "),n(769,"code"),e(770,"type"),t(),n(771,"code"),e(772,"namespace:name"),t(),e(773,". Dynamic importing and static importing are both supported."),t(),n(774,"p"),e(775,"Static importing. Invoke "),n(776,"code"),e(777,"addIconLiteral"),t(),e(778," of "),n(779,"code"),e(780,"NzIconService"),t(),e(781,"."),t(),n(782,"p"),e(783,"Dynamic importing. Make sure that you have put your SVG resources in dir like "),n(784,"code"),e(785,"assets/${namespace}"),t(),e(786,". For example, if you have a "),n(787,"code"),e(788,"panda"),t(),e(789," icon and in "),n(790,"code"),e(791,"zoo"),t(),e(792," namespace, you should put "),n(793,"code"),e(794,"panda.svg"),t(),e(795," in "),n(796,"code"),e(797,"assets/zoo"),t(),e(798,"."),t(),n(799,"h2",82)(800,"span"),e(801,"FAQ"),t(),n(802,"a",83),e(803,"#"),t()(),n(804,"h3",84)(805,"span"),e(806,"All my icons are gone"),t(),n(807,"a",85),e(808,"#"),t()(),n(809,"p"),e(810,"Have you read the docs above?"),t(),n(811,"h3",86)(812,"span"),e(813,"There are two similar icons in a "),n(814,"code"),e(815,"<span></span>"),t(),e(816," tag. What happened?"),t(),n(817,"a",87),e(818,"#"),t()(),n(819,"p"),e(820,"In older versions of NG-ZORRO, there was a font file which would use "),n(821,"code"),e(822,":before"),t(),e(823," to insert a icon according to a "),n(824,"code"),e(825,"i"),t(),e(826," tag's "),n(827,"code"),e(828,"className"),t(),e(829,". So if you have two icons, try to remove "),n(830,"code"),e(831,"node_modules"),t(),e(832," and reinstall. If the problem is still there, search "),n(833,"code"),e(834,"@icon-url"),t(),e(835," and remove that line."),t(),n(836,"h3",88)(837,"span"),e(838,"I want to import all icons statically. What should I do?"),t(),n(839,"a",89),e(840,"#"),t()(),n(841,"p"),e(842,"Actually we demonstrate it here:"),t(),n(843,"pre",40)(844,"code")(845,"span",64),e(846,"// import * as AllIcons from '@ant-design/icons-angular/icons';"),t(),e(847,`

`),n(848,"span",64),e(849,"// const antDesignIcons = AllIcons as {"),t(),e(850,`
`),n(851,"span",64),e(852,"//   [key: string]: IconDefinition;"),t(),e(853,`
`),n(854,"span",64),e(855,"// };"),t(),e(856,`
`),n(857,"span",64),e(858,"// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])"),t()()(),n(859,"h3",90)(860,"span"),e(861,"Does dynamic loading affect web pages' performance?"),t(),n(862,"a",91),e(863,"#"),t()(),n(864,"p"),e(865,"We used several methods to reduce requests, like static cache, dynamic cache and reusable request. It's basically not noticeable for visitors that icons are loaded asynchronously assuming web connections are fairly good."),t(),n(866,"h3",92)(867,"span"),e(868,"How do I know a icon's corresponding module to import?"),t(),n(869,"a",93),e(870,"#"),t()(),n(871,"p"),e(872,"Capital camel-case "),n(873,"code"),e(874,"type & theme"),t(),e(875,", i.e. "),n(876,"code"),e(877,"alibaba"),t(),e(878," => "),n(879,"code"),e(880,"AlibabaOutline"),t(),e(881,"."),t()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),J("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,ci)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,W,j,O,L,I,P,D,F,U,V,H,B,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var Si=()=>({standalone:!0});function ui(a,s){if(a&1){let i=_();b(0),n(1,"a",90),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",91),d(3,"nz-icon",92),t()(),w()}}function Ei(a,s){if(a&1){let i=_();b(0),n(1,"a",90),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",91),e(3,"Alexei Cioina's blog"),t()(),w()}}var Rn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-dotnet-core-testing"]],viewQuery:function(l,r){if(l&1&&R(y,7),l&2){let o;N(o=M())&&(r.affixEl=o.first)}},decls:3102,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-5a4865611d30c4d0ac6cdff755948150","nzTitle","MyTested Library Out of The Box"],["nzHref","#h-24135ede33965f0be2e01ca803fc7acf","nzTitle",".NET Core Identity Controller Implementation"],["nzHref","#h-c9515f97f83c49f869c71169c44d54be","nzTitle","IdentityController"],["nzHref","#h-88d4cd62d014eafd197c0de96122deeb","nzTitle",".NET Core Identity Service Implementation"],["nzHref","#h-6278f57bf8770eb44c6ba948cbe245f9","nzTitle","IdentityService"],["nzHref","#h-53b802f84a1c06b33df89250feb02691","nzTitle","Comprehensive Identity Controller Testing"],["nzHref","#h-3505cd435c8f4001d7e7ef30f366a87f","nzTitle","Data Validation with FluentValidation Library"],["nzHref","#h-6f8b794f3246b0c1e1780bb4d4d5dc53","nzTitle","Conclusion"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230605-dotnet-core-testing.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[2,"border-color","#faad14"],["href","https://versionsof.net/","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/LICENSE","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore/blob/main/LICENSE","target","_blank","rel","noopener"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example","target","_blank","rel","noopener"],["href","https://github.com/cioina/cioina.azurewebsites.net","target","_blank","rel","noopener"],["id","h-5a4865611d30c4d0ac6cdff755948150"],["onclick","window.location.hash = 'h-5a4865611d30c4d0ac6cdff755948150'",1,"anchor"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs","target","_blank","rel","noopener"],[1,"language-csharp"],[1,"hljs-meta"],[1,"hljs-keyword"],[1,"hljs-title"],[1,"hljs-function"],[1,"hljs-string"],["id","h-24135ede33965f0be2e01ca803fc7acf"],["onclick","window.location.hash = 'h-24135ede33965f0be2e01ca803fc7acf'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Web/Features/IdentityController.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs","target","_blank","rel","noopener"],["id","h-c9515f97f83c49f869c71169c44d54be"],["onclick","window.location.hash = 'h-c9515f97f83c49f869c71169c44d54be'",1,"anchor"],["id","h-88d4cd62d014eafd197c0de96122deeb"],["onclick","window.location.hash = 'h-88d4cd62d014eafd197c0de96122deeb'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Infrastructure/Identity/Services/IdentityService.cs","target","_blank","rel","noopener"],["id","h-6278f57bf8770eb44c6ba948cbe245f9"],["onclick","window.location.hash = 'h-6278f57bf8770eb44c6ba948cbe245f9'",1,"anchor"],[1,"hljs-built_in"],[1,"hljs-params"],[1,"hljs-literal"],[1,"hljs-number"],[1,"hljs-subst"],["id","h-53b802f84a1c06b33df89250feb02691"],["onclick","window.location.hash = 'h-53b802f84a1c06b33df89250feb02691'",1,"anchor"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/samples/Blog/Blog.Test/Pipeline/Admin/ArticlesPipelineTest.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Users/LoginTests.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs","target","_blank","rel","noopener"],[1,"hljs-comment"],["id","h-3505cd435c8f4001d7e7ef30f366a87f"],["onclick","window.location.hash = 'h-3505cd435c8f4001d7e7ef30f366a87f'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs#L626","target","_blank","rel","noopener"],["id","h-6f8b794f3246b0c1e1780bb4d4d5dc53"],["onclick","window.location.hash = 'h-6f8b794f3246b0c1e1780bb4d4d5dc53'",1,"anchor"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/ivaylokenov","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov","target","_blank","rel","noopener"],["href","https://github.com/ardalis","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev","target","_blank","rel","noopener"],["href","https://github.com/stefanprodan","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti","target","_blank","rel","noopener"],["href","https://github.com/jbogard","target","_blank","rel","noopener"],["href","https://github.com/BenMorris","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,ui,4,0,"ng-container",5)(6,Ei,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),G("ngModelChange",function(h){return Q(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20)(25,"nz-link",21),t()(),n(26,"span",22),e(27," ASP.NET Core 9 Testing"),d(28,"span",23)(29,"span",24),n(30,"a",25),d(31,"nz-icon",26),t()(),n(32,"article",27),bt(),n(33,"blockquote",28)(34,"p")(35,"strong"),e(36,"All C# code from this article was tested using "),n(37,"a",29),e(38,".NET Core 9.0.0"),t(),e(39,", modified source code of "),n(40,"a",30),e(41,"MyTested.AspNetCore.Mvc - Fluent Testing Library for ASP.NET Core MVC"),t(),e(42," provided under "),n(43,"a",31),e(44,"Apache License, Version 2.0 or Microsoft Public License (Ms-PL)"),t(),e(45,", and modified source code of "),n(46,"a",32),e(47,"BookStore"),t(),e(48," provided under "),n(49,"a",33),e(50,"MIT License"),t()()()(),n(51,"h2",34)(52,"span"),e(53,"Introduction"),t(),n(54,"a",35),e(55,"#"),t()(),n(56,"p"),e(57,"In this article, we will give an example of testing of .NET Core code. We will use "),n(58,"a",30),e(59,"MyTested"),t(),e(60," - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 9 project is based on "),n(61,"a",32),e(62,"BookStore"),t(),e(63," repository and adapted to work with MyTested library. A full test project example is on "),n(64,"a",36),e(65,"our GitHub repository"),t(),e(66,"."),t(),n(67,"p"),e(68,"The main focus of our example is testing of the standard "),n(69,"code"),e(70,"User Identity"),t(),e(71," provided by "),n(72,"code"),e(73,"Microsoft.AspNetCore.Identity"),t(),e(74,". The access to the user is provided by "),n(75,"code"),e(76,"UserManager<User>"),t(),e(77," micro service. The source code of all our examples is copied and pasted from our actual application. The compiled code of our .NET Core 8 application can be found on "),n(78,"a",37),e(79,"our GitHub repository"),t(),e(80,"."),t(),n(81,"p"),e(82,"One of the advantages of having of a detailed test module for standard "),n(83,"code"),e(84,"Microsoft.AspNetCore.Identity"),t(),e(85," implementation is the fact that it is used very frequently in .NET Core applications. Following, we will give examples of API controller, the implementation of "),n(86,"code"),e(87,"User Identity"),t(),e(88," with Bearer Header Authorization based on JWT token and an example of a comprehensive "),n(89,"code"),e(90,"User Identity"),t(),e(91," controller testing."),t(),n(92,"h2",38)(93,"span"),e(94,"MyTested Library Out of The Box"),t(),n(95,"a",39),e(96,"#"),t()(),n(97,"p"),e(98,"I found out about MyTested for the first time from "),n(99,"a",40),e(100,"BlazorShop"),t(),e(101," repository. At the same time, I found out about "),n(102,"code"),e(103,"JwtAuthentication"),t(),e(104," implementation from same "),n(105,"a",41),e(106,"BlazorShop"),t(),e(107," repository and from "),n(108,"a",42),e(109,"aspnetcore-realworld-example"),t(),e(110," repository. Both "),n(111,"code"),e(112,"JwtAuthentication"),t(),e(113," implementations did not work with original "),n(114,"a",30),e(115,"MyTested"),t(),e(116," library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was able only to add some small pieces of code to make MyTested and my own "),n(117,"code"),e(118,"JwtAuthentication"),t(),e(119," implementation work and not to break any original MyTested tests. But, what MyTested can do out of the box? The best answer is in "),n(120,"a",43),e(121,"MusicStore"),t(),e(122," testing project. For the API controller, "),n(123,"a",44),e(124,"here"),t(),e(125," is an example:"),t(),n(126,"pre",45)(127,"code")(128,"span",46),e(129,"#"),n(130,"span",47),e(131,"if"),t(),e(132," DEBUG"),t(),e(133,`
`),n(134,"span",47),e(135,"using"),t(),e(136,` BlogAngular.Application.Common.Version;
`),n(137,"span",47),e(138,"using"),t(),e(139,` BlogAngular.Web.Features;
`),n(140,"span",47),e(141,"using"),t(),e(142,` MyTested.AspNetCore.Mvc;
`),n(143,"span",47),e(144,"using"),t(),e(145,` Xunit;

`),n(146,"span",47),e(147,"namespace"),t(),e(148," "),n(149,"span",48),e(150,"BlogAngular.Test.Routing"),t(),e(151,`
{
    `),n(152,"span",47),e(153,"public"),t(),e(154," "),n(155,"span",47),e(156,"class"),t(),e(157," "),n(158,"span",48),e(159,"FrontEndRouteTest"),t(),e(160,`
    {
        [`),n(161,"span",46),e(162,"Fact"),t(),e(163,`]
        `),n(164,"span",49)(165,"span",47),e(166,"public"),t(),e(167," "),n(168,"span",47),e(169,"void"),t(),e(170," "),n(171,"span",48),e(172,"VersionShouldBeRouted"),t(),e(173,"()"),t(),e(174,`
            => MyMvc
            .Pipeline()
            .ShouldMap(request => request
                .WithMethod(HttpMethod.Get)
                .WithLocation(`),n(175,"span",50),e(176,'"api/v1.0/version"'),t(),e(177,`))
            .To<VersionController>(c => c.Index())
            .Which()
            .ShouldReturn()
            .ActionResult(result => result.Result(`),n(178,"span",47),e(179,"new"),t(),e(180,` VersionResponseEnvelope
            {
                VersionJson = `),n(181,"span",47),e(182,"new"),t(),e(183,` VersionResponseModel()
            }));
    }
}
`),n(184,"span",46),e(185,"#"),n(186,"span",47),e(187,"endif"),t()()()(),n(188,"h2",51)(189,"span"),e(190,".NET Core Identity Controller Implementation"),t(),n(191,"a",52),e(192,"#"),t()(),n(193,"p"),e(194,"Our controller implementation is based on "),n(195,"a",53),e(196,"this GitHub repository"),t(),e(197,". We added two more methods: "),n(198,"code"),e(199,"LoginPassword"),t(),e(200," and "),n(201,"code"),e(202,"Update"),t(),e(203," with "),n(204,"code"),e(205,"[Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy)]"),t(),e(206," attribute that uses Bearer Header Authorization based on JWT token implementation provided by .NET Core 8. Our Angular 18 application that runs in a web browser will make a request to the endpoint "),n(207,"code"),e(208,"http://localhost:1503/api/v1.0/identity/update"),t(),e(209,". The request has an Authorization header with a JWT token. The request body has some data in JSON format. Our .NET Core 8 application must authenticate the user based on the JWT token and authorize the user based on a specific policy. Once the user passes the authorization process, the application must execute a command and return some data in JSON format. Below, we give an example of an "),n(210,"a",54),e(211,"API controller"),t()(),n(212,"h3",55)(213,"span"),e(214,"IdentityController"),t(),n(215,"a",56),e(216,"#"),t()(),n(217,"pre",45)(218,"code")(219,"span",47),e(220,"using"),t(),e(221,` BlogAngular.Application.Identity.Commands.Common;
`),n(222,"span",47),e(223,"using"),t(),e(224,` BlogAngular.Application.Identity.Commands.Login;
`),n(225,"span",47),e(226,"using"),t(),e(227,` BlogAngular.Application.Identity.Commands.Register;
`),n(228,"span",47),e(229,"using"),t(),e(230,` BlogAngular.Application.Identity.Commands.Update;
`),n(231,"span",47),e(232,"using"),t(),e(233,` Microsoft.AspNetCore.Authorization;
`),n(234,"span",47),e(235,"using"),t(),e(236,` Microsoft.AspNetCore.Mvc;
`),n(237,"span",47),e(238,"using"),t(),e(239,` System.Threading.Tasks;

`),n(240,"span",47),e(241,"using"),t(),e(242," "),n(243,"span",47),e(244,"static"),t(),e(245,` BlogAngular.Domain.Common.Models.ModelConstants.Identity;

`),n(246,"span",47),e(247,"namespace"),t(),e(248," "),n(249,"span",48),e(250,"BlogAngular.Web.Features"),t(),e(251,`
{
    `),n(252,"span",47),e(253,"public"),t(),e(254," "),n(255,"span",47),e(256,"class"),t(),e(257," "),n(258,"span",48),e(259,"IdentityController"),t(),e(260," : "),n(261,"span",48),e(262,"ApiController"),t(),e(263,`
    {
        [`),n(264,"span",46),e(265,"HttpPost"),t(),e(266,`]
        [`),n(267,"span",46),e(268,"Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)"),t(),e(269,`]
        `),n(270,"span",47),e(271,"public"),t(),e(272," "),n(273,"span",47),e(274,"async"),t(),e(275,` Task<ActionResult<UserResponseEnvelope>> LoginPassword(
            LoginPasswordCommand command)
            => `),n(276,"span",47),e(277,"await"),t(),e(278," "),n(279,"span",47),e(280,"this"),t(),e(281,`.Send(command);

        [`),n(282,"span",46),e(283,"HttpPost"),t(),e(284,`]
        [`),n(285,"span",46),e(286,"Route(nameof(Login))"),t(),e(287,`]
        `),n(288,"span",47),e(289,"public"),t(),e(290," "),n(291,"span",47),e(292,"async"),t(),e(293,` Task<ActionResult<UserResponseEnvelope>> Login(
            UserLoginCommand command)
            => `),n(294,"span",47),e(295,"await"),t(),e(296," "),n(297,"span",47),e(298,"this"),t(),e(299,`.Send(command);

        [`),n(300,"span",46),e(301,"HttpPost"),t(),e(302,`]
        [`),n(303,"span",46),e(304,"Route(nameof(Register))"),t(),e(305,`]
        `),n(306,"span",47),e(307,"public"),t(),e(308," "),n(309,"span",47),e(310,"async"),t(),e(311,` Task<ActionResult<UserResponseEnvelope>> Register(
            UserRegisterCommand command)
            => `),n(312,"span",47),e(313,"await"),t(),e(314," "),n(315,"span",47),e(316,"this"),t(),e(317,`.Send(command);

        [`),n(318,"span",46),e(319,"HttpPut"),t(),e(320,`]
        [`),n(321,"span",46),e(322,"Route(nameof(Update))"),t(),e(323,`]
        [`),n(324,"span",46),e(325,"Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)"),t(),e(326,`]
        `),n(327,"span",47),e(328,"public"),t(),e(329," "),n(330,"span",47),e(331,"async"),t(),e(332,` Task<ActionResult<UserResponseEnvelope>> Update(
            UserUpdateCommand command)
            => `),n(333,"span",47),e(334,"await"),t(),e(335," "),n(336,"span",47),e(337,"this"),t(),e(338,`.Send(command);
    }
}`),t()(),n(339,"h2",57)(340,"span"),e(341,".NET Core Identity Service Implementation"),t(),n(342,"a",58),e(343,"#"),t()(),n(344,"p"),e(345,"Our service implementation is based on "),n(346,"a",59),e(347,"this GitHub repository"),t(),e(348,". As we said earlier, this kind of "),n(349,"code"),e(350,"Identity Service"),t(),e(351," will look the same for all .NET Core 9 applications that use a standard "),n(352,"code"),e(353,"Microsoft.AspNetCore.Identity"),t(),e(354," implementation. Below, there is an example that we copied and pasted direct from our actual application."),t(),n(355,"h3",60)(356,"span"),e(357,"IdentityService"),t(),n(358,"a",61),e(359,"#"),t()(),n(360,"pre",45)(361,"code")(362,"span",47),e(363,"using"),t(),e(364,` BlogAngular.Application.Common;
`),n(365,"span",47),e(366,"using"),t(),e(367,` BlogAngular.Application.Common.Models;
`),n(368,"span",47),e(369,"using"),t(),e(370,` BlogAngular.Application.Identity;
`),n(371,"span",47),e(372,"using"),t(),e(373,` BlogAngular.Application.Identity.Commands.Common;
`),n(374,"span",47),e(375,"using"),t(),e(376,` BlogAngular.Application.Identity.Commands.Register;
`),n(377,"span",47),e(378,"using"),t(),e(379,` BlogAngular.Application.Identity.Commands.Update;
`),n(380,"span",47),e(381,"using"),t(),e(382,` BlogAngular.Application.Identity.Queries.Profile;
`),n(383,"span",47),e(384,"using"),t(),e(385,` BlogAngular.Domain.Common.Events.Identity;
`),n(386,"span",47),e(387,"using"),t(),e(388,` BlogAngular.Infrastructure.Common.Events;
`),n(389,"span",47),e(390,"using"),t(),e(391,` BlogAngular.Infrastructure.Common.Extensions;
`),n(392,"span",47),e(393,"using"),t(),e(394,` Microsoft.AspNetCore.Hosting;
`),n(395,"span",47),e(396,"using"),t(),e(397,` Microsoft.AspNetCore.Http;
`),n(398,"span",47),e(399,"using"),t(),e(400,` Microsoft.AspNetCore.Identity;
`),n(401,"span",47),e(402,"using"),t(),e(403,` Microsoft.Extensions.Options;
`),n(404,"span",47),e(405,"using"),t(),e(406,` System;
`),n(407,"span",47),e(408,"using"),t(),e(409,` System.Collections.Generic;
`),n(410,"span",47),e(411,"using"),t(),e(412,` System.Security.Claims;
`),n(413,"span",47),e(414,"using"),t(),e(415,` System.Threading.Tasks;

`),n(416,"span",47),e(417,"namespace"),t(),e(418," "),n(419,"span",48),e(420,"BlogAngular.Infrastructure.Identity.Services"),t(),e(421,`
{
    `),n(422,"span",47),e(423,"internal"),t(),e(424," "),n(425,"span",47),e(426,"class"),t(),e(427," "),n(428,"span",48),e(429,"IdentityService"),t(),e(430," : "),n(431,"span",48),e(432,"IIdentity"),t(),e(433,`
    {
        `),n(434,"span",47),e(435,"private"),t(),e(436," "),n(437,"span",47),e(438,"const"),t(),e(439," "),n(440,"span",62),e(441,"string"),t(),e(442," InvalidErrorMessage = "),n(443,"span",50),e(444,'"Invalid credentials."'),t(),e(445,`;
        `),n(446,"span",47),e(447,"private"),t(),e(448," "),n(449,"span",47),e(450,"const"),t(),e(451," "),n(452,"span",62),e(453,"string"),t(),e(454," NoDataErrorMessage = "),n(455,"span",50),e(456,'"There is no data to proccess."'),t(),e(457,`;
        `),n(458,"span",47),e(459,"private"),t(),e(460," "),n(461,"span",47),e(462,"const"),t(),e(463," "),n(464,"span",62),e(465,"string"),t(),e(466," IdentityErrorMessage = "),n(467,"span",50),e(468,'"Something went wrong. The server may be down."'),t(),e(469,`;
        `),n(470,"span",47),e(471,"private"),t(),e(472," "),n(473,"span",47),e(474,"const"),t(),e(475," "),n(476,"span",62),e(477,"string"),t(),e(478," IdentityRoleErrorMessage = "),n(479,"span",50),e(480,'@"Cannot find role {0}"'),t(),e(481,`;
        `),n(482,"span",47),e(483,"private"),t(),e(484," "),n(485,"span",47),e(486,"const"),t(),e(487," "),n(488,"span",62),e(489,"string"),t(),e(490," UserNameTakenErrorMessage = "),n(491,"span",50),e(492,'"The user name has been taken."'),t(),e(493,`;
        `),n(494,"span",47),e(495,"private"),t(),e(496," "),n(497,"span",47),e(498,"const"),t(),e(499," "),n(500,"span",62),e(501,"string"),t(),e(502," EmailTakenErrorMessage = "),n(503,"span",50),e(504,'"The email has been taken."'),t(),e(505,`;
        `),n(506,"span",47),e(507,"private"),t(),e(508," "),n(509,"span",47),e(510,"const"),t(),e(511," "),n(512,"span",62),e(513,"string"),t(),e(514," UserNullErrorMessage = "),n(515,"span",50),e(516,'"Cannot find user by Id."'),t(),e(517,`;
        `),n(518,"span",47),e(519,"private"),t(),e(520," "),n(521,"span",47),e(522,"const"),t(),e(523," "),n(524,"span",62),e(525,"string"),t(),e(526," ProfileErrorMessage = "),n(527,"span",50),e(528,'"Cannot find user profile."'),t(),e(529,`;
        `),n(530,"span",47),e(531,"private"),t(),e(532," "),n(533,"span",47),e(534,"const"),t(),e(535," "),n(536,"span",62),e(537,"string"),t(),e(538," UsernameFormatErrorMessage = "),n(539,"span",50),e(540,'"Username must contain letters and numbers."'),t(),e(541,`;
        `),n(542,"span",47),e(543,"private"),t(),e(544," "),n(545,"span",47),e(546,"const"),t(),e(547," "),n(548,"span",62),e(549,"string"),t(),e(550," PasswordFormatErrorMessage = "),n(551,"span",50),e(552,'"Password requared upper and lower case letters, digits, and at least one special simbol."'),t(),e(553,`;
        `),n(554,"span",47),e(555,"private"),t(),e(556," "),n(557,"span",47),e(558,"const"),t(),e(559," "),n(560,"span",62),e(561,"string"),t(),e(562," LockoutErrorMessage = "),n(563,"span",50),e(564,'@"You have been lockout for {0} minutes.{1}"'),t(),e(565,`;
        `),n(566,"span",47),e(567,"private"),t(),e(568," "),n(569,"span",47),e(570,"const"),t(),e(571," "),n(572,"span",62),e(573,"string"),t(),e(574," LockoutEnabledErrorMessage = "),n(575,"span",50),e(576,'"Lockout setting is not enabled."'),t(),e(577,`;

        `),n(578,"span",47),e(579,"private"),t(),e(580," "),n(581,"span",47),e(582,"readonly"),t(),e(583,` IWebHostEnvironment env;
        `),n(584,"span",47),e(585,"private"),t(),e(586," "),n(587,"span",47),e(588,"readonly"),t(),e(589,` UserManager<User> userManager;
        `),n(590,"span",47),e(591,"private"),t(),e(592," "),n(593,"span",47),e(594,"readonly"),t(),e(595,` IJwtGenerator jwtGenerator;
        `),n(596,"span",47),e(597,"private"),t(),e(598," "),n(599,"span",47),e(600,"readonly"),t(),e(601,` IEventDispatcher eventDispatcher;
        `),n(602,"span",47),e(603,"private"),t(),e(604," "),n(605,"span",47),e(606,"readonly"),t(),e(607,` ApplicationSettings applicationSettings;
        `),n(608,"span",47),e(609,"private"),t(),e(610," "),n(611,"span",47),e(612,"readonly"),t(),e(613,` IHttpContextAccessor httpContextAccessor;
        `),n(614,"span",47),e(615,"internal"),t(),e(616," "),n(617,"span",47),e(618,"static"),t(),e(619," "),n(620,"span",47),e(621,"readonly"),t(),e(622," "),n(623,"span",62),e(624,"string"),t(),e(625,"[] registerNotImplemented = "),n(626,"span",47),e(627,"new"),t(),e(628,"[] { "),n(629,"span",50),e(630,'"Register is not implemented yet."'),t(),e(631,` };

        `),n(632,"span",49)(633,"span",47),e(634,"public"),t(),e(635," "),n(636,"span",48),e(637,"IdentityService"),t(),e(638,"("),n(639,"span",63),e(640,`
            IWebHostEnvironment env,
            UserManager<User> userManager,
            IJwtGenerator jwtGenerator,
            IEventDispatcher eventDispatcher,
            IOptions<ApplicationSettings> applicationSettings,
            IHttpContextAccessor httpContextAccessor
            `),t(),e(641,")"),t(),e(642,`
        {
            `),n(643,"span",47),e(644,"this"),t(),e(645,`.env = env;
            `),n(646,"span",47),e(647,"this"),t(),e(648,`.userManager = userManager;
            `),n(649,"span",47),e(650,"this"),t(),e(651,`.jwtGenerator = jwtGenerator;
            `),n(652,"span",47),e(653,"this"),t(),e(654,`.eventDispatcher = eventDispatcher;
            `),n(655,"span",47),e(656,"this"),t(),e(657,`.applicationSettings = applicationSettings.Value;
            `),n(658,"span",47),e(659,"this"),t(),e(660,`.httpContextAccessor = httpContextAccessor;
        }

        `),n(661,"span",46),e(662,"#"),n(663,"span",47),e(664,"region"),t(),e(665," IsInRoleAsync"),t(),e(666,`
        `),n(667,"span",47),e(668,"public"),t(),e(669," "),n(670,"span",47),e(671,"async"),t(),e(672," Task<Result<"),n(673,"span",62),e(674,"bool"),t(),e(675,`>> IsInRoleAsync()
        {
            ClaimsPrincipal? claimsPrincipal = `),n(676,"span",47),e(677,"this"),t(),e(678,`.httpContextAccessor.HttpContext!.User!;
            `),n(679,"span",47),e(680,"if"),t(),e(681," (claimsPrincipal != "),n(682,"span",64),e(683,"null"),t(),e(684,`)
            {
                `),n(685,"span",47),e(686,"var"),t(),e(687,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),n(688,"span",47),e(689,"if"),t(),e(690," (isAuthenticated == "),n(691,"span",64),e(692,"null"),t(),e(693," || !("),n(694,"span",62),e(695,"bool"),t(),e(696,`)isAuthenticated)
                {
                    `),n(697,"span",47),e(698,"return"),t(),e(699," Result<"),n(700,"span",62),e(701,"bool"),t(),e(702,">.Failure("),n(703,"span",47),e(704,"new"),t(),e(705," Dictionary<"),n(706,"span",62),e(707,"string"),t(),e(708,", "),n(709,"span",62),e(710,"string"),t(),e(711,`[]>
                {
                    { `),n(712,"span",50),e(713,'"identity_error"'),t(),e(714,", "),n(715,"span",47),e(716,"new"),t(),e(717,`[] { IdentityErrorMessage } }
                });
                }
            }
            `),n(718,"span",47),e(719,"else"),t(),e(720,`
            {
                `),n(721,"span",47),e(722,"return"),t(),e(723," Result<"),n(724,"span",62),e(725,"bool"),t(),e(726,">.Failure("),n(727,"span",47),e(728,"new"),t(),e(729," Dictionary<"),n(730,"span",62),e(731,"string"),t(),e(732,", "),n(733,"span",62),e(734,"string"),t(),e(735,`[]>
            {
                { `),n(736,"span",50),e(737,'"identity_error"'),t(),e(738,", "),n(739,"span",47),e(740,"new"),t(),e(741,`[] { IdentityErrorMessage } }
            });
            }

            User? user;
            `),n(742,"span",47),e(743,"if"),t(),e(744," ("),n(745,"span",47),e(746,"this"),t(),e(747,".env.EnvironmentName == "),n(748,"span",50),e(749,'"Test"'),t(),e(750,`)
            {
                `),n(751,"span",47),e(752,"var"),t(),e(753,` name = claimsPrincipal.Identity?.Name;
                `),n(754,"span",47),e(755,"if"),t(),e(756," (name == "),n(757,"span",64),e(758,"null"),t(),e(759,`)
                {
                    `),n(760,"span",47),e(761,"return"),t(),e(762," Result<"),n(763,"span",62),e(764,"bool"),t(),e(765,">.Failure("),n(766,"span",47),e(767,"new"),t(),e(768," Dictionary<"),n(769,"span",62),e(770,"string"),t(),e(771,", "),n(772,"span",62),e(773,"string"),t(),e(774,`[]>
                {
                    { `),n(775,"span",50),e(776,'"debug_error"'),t(),e(777,", "),n(778,"span",47),e(779,"new"),t(),e(780,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(781,"span",47),e(782,"await"),t(),e(783," "),n(784,"span",47),e(785,"this"),t(),e(786,`.userManager.FindByEmailAsync(name);
            }
            `),n(787,"span",47),e(788,"else"),t(),e(789,`
            {
                `),n(790,"span",47),e(791,"var"),t(),e(792,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),n(793,"span",47),e(794,"if"),t(),e(795," (claim == "),n(796,"span",64),e(797,"null"),t(),e(798,`)
                {
                    `),n(799,"span",47),e(800,"return"),t(),e(801," Result<"),n(802,"span",62),e(803,"bool"),t(),e(804,">.Failure("),n(805,"span",47),e(806,"new"),t(),e(807," Dictionary<"),n(808,"span",62),e(809,"string"),t(),e(810,", "),n(811,"span",62),e(812,"string"),t(),e(813,`[]>
                {
                    { `),n(814,"span",50),e(815,'"name_identifier_error"'),t(),e(816,", "),n(817,"span",47),e(818,"new"),t(),e(819,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(820,"span",47),e(821,"await"),t(),e(822," "),n(823,"span",47),e(824,"this"),t(),e(825,`.userManager.FindByIdAsync(claim.Value);
            }

            `),n(826,"span",47),e(827,"if"),t(),e(828," (user == "),n(829,"span",64),e(830,"null"),t(),e(831,`)
            {
                `),n(832,"span",47),e(833,"return"),t(),e(834," Result<"),n(835,"span",62),e(836,"bool"),t(),e(837,">.Failure("),n(838,"span",47),e(839,"new"),t(),e(840," Dictionary<"),n(841,"span",62),e(842,"string"),t(),e(843,", "),n(844,"span",62),e(845,"string"),t(),e(846,`[]>
            {
                { `),n(847,"span",50),e(848,'"user_error"'),t(),e(849,", "),n(850,"span",47),e(851,"new"),t(),e(852,`[] { UserNullErrorMessage } }
            });
            }

            `),n(853,"span",47),e(854,"var"),t(),e(855,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),n(856,"span",47),e(857,"if"),t(),e(858," (claimRole == "),n(859,"span",64),e(860,"null"),t(),e(861,`)
            {
                `),n(862,"span",47),e(863,"return"),t(),e(864," Result<"),n(865,"span",62),e(866,"bool"),t(),e(867,">.Failure("),n(868,"span",47),e(869,"new"),t(),e(870," Dictionary<"),n(871,"span",62),e(872,"string"),t(),e(873,", "),n(874,"span",62),e(875,"string"),t(),e(876,`[]>
                {
                    { `),n(877,"span",50),e(878,'"is_in_role_error"'),t(),e(879,", "),n(880,"span",47),e(881,"new"),t(),e(882,"[] { "),n(883,"span",62),e(884,"string"),t(),e(885,".Format(IdentityRoleErrorMessage, "),n(886,"span",50),e(887,'""'),t(),e(888,`) } }
                });
            }
            `),n(889,"span",47),e(890,"var"),t(),e(891," isInRole = "),n(892,"span",47),e(893,"await"),t(),e(894," "),n(895,"span",47),e(896,"this"),t(),e(897,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),n(898,"span",47),e(899,"if"),t(),e(900,` (!isInRole)
            {
                `),n(901,"span",47),e(902,"return"),t(),e(903," Result<"),n(904,"span",62),e(905,"bool"),t(),e(906,">.Failure("),n(907,"span",47),e(908,"new"),t(),e(909," Dictionary<"),n(910,"span",62),e(911,"string"),t(),e(912,", "),n(913,"span",62),e(914,"string"),t(),e(915,`[]>
                {
                    { `),n(916,"span",50),e(917,'"is_in_role_error"'),t(),e(918,", "),n(919,"span",47),e(920,"new"),t(),e(921,"[] { "),n(922,"span",62),e(923,"string"),t(),e(924,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),n(925,"span",47),e(926,"return"),t(),e(927," "),n(928,"span",64),e(929,"true"),t(),e(930,`;
        }
        `),n(931,"span",46),e(932,"#"),n(933,"span",47),e(934,"endregion"),t()(),e(935,`

        `),n(936,"span",46),e(937,"#"),n(938,"span",47),e(939,"region"),t(),e(940," LoginPassword  "),t(),e(941,`
        `),n(942,"span",47),e(943,"public"),t(),e(944," "),n(945,"span",47),e(946,"async"),t(),e(947,` Task<Result<UserResponseEnvelope>> LoginPassword(LoginPasswordCommand userRequest)
        {
            `),n(948,"span",47),e(949,"if"),t(),e(950," (userRequest.UserJson.Password == "),n(951,"span",64),e(952,"null"),t(),e(953,`)
            {
                `),n(954,"span",47),e(955,"return"),t(),e(956," Result<UserResponseEnvelope>.Failure("),n(957,"span",47),e(958,"new"),t(),e(959," Dictionary<"),n(960,"span",62),e(961,"string"),t(),e(962,", "),n(963,"span",62),e(964,"string"),t(),e(965,`[]>
            {
                { `),n(966,"span",50),e(967,'"no_data_error"'),t(),e(968,", "),n(969,"span",47),e(970,"new"),t(),e(971,`[] { NoDataErrorMessage } }
            });
            }

            `),n(972,"span",62),e(973,"bool"),t(),e(974," isNewToken = "),n(975,"span",64),e(976,"false"),t(),e(977,`;
            ClaimsPrincipal? claimsPrincipal = `),n(978,"span",47),e(979,"this"),t(),e(980,`.httpContextAccessor.HttpContext!.User!;
            `),n(981,"span",47),e(982,"if"),t(),e(983," (claimsPrincipal != "),n(984,"span",64),e(985,"null"),t(),e(986,`)
            {
                `),n(987,"span",47),e(988,"var"),t(),e(989,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),n(990,"span",47),e(991,"if"),t(),e(992," (isAuthenticated == "),n(993,"span",64),e(994,"null"),t(),e(995," || !("),n(996,"span",62),e(997,"bool"),t(),e(998,`)isAuthenticated)
                {
                    `),n(999,"span",47),e(1e3,"return"),t(),e(1001," Result<UserResponseEnvelope>.Failure("),n(1002,"span",47),e(1003,"new"),t(),e(1004," Dictionary<"),n(1005,"span",62),e(1006,"string"),t(),e(1007,", "),n(1008,"span",62),e(1009,"string"),t(),e(1010,`[]>
                {
                    { `),n(1011,"span",50),e(1012,'"identity_error"'),t(),e(1013,", "),n(1014,"span",47),e(1015,"new"),t(),e(1016,`[] { IdentityErrorMessage } }
                });
                }
                `),n(1017,"span",47),e(1018,"var"),t(),e(1019," iat = claimsPrincipal.FindFirst("),n(1020,"span",50),e(1021,'"iat"'),t(),e(1022,`);
                `),n(1023,"span",47),e(1024,"var"),t(),e(1025," exp = claimsPrincipal.FindFirst("),n(1026,"span",50),e(1027,'"exp"'),t(),e(1028,`);
                `),n(1029,"span",47),e(1030,"if"),t(),e(1031," (iat == "),n(1032,"span",64),e(1033,"null"),t(),e(1034," || exp == "),n(1035,"span",64),e(1036,"null"),t(),e(1037,`)
                {
                    `),n(1038,"span",47),e(1039,"return"),t(),e(1040," Result<UserResponseEnvelope>.Failure("),n(1041,"span",47),e(1042,"new"),t(),e(1043," Dictionary<"),n(1044,"span",62),e(1045,"string"),t(),e(1046,", "),n(1047,"span",62),e(1048,"string"),t(),e(1049,`[]>
                {
                    { `),n(1050,"span",50),e(1051,'"identity_error"'),t(),e(1052,", "),n(1053,"span",47),e(1054,"new"),t(),e(1055,`[] { IdentityErrorMessage } }
                });
                }

                `),n(1056,"span",47),e(1057,"var"),t(),e(1058," rate = ("),n(1059,"span",62),e(1060,"long"),t(),e(1061,".Parse(exp.Value) - "),n(1062,"span",62),e(1063,"long"),t(),e(1064,`.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                `),n(1065,"span",47),e(1066,"var"),t(),e(1067," current = "),n(1068,"span",62),e(1069,"long"),t(),e(1070,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            `),n(1071,"span",47),e(1072,"else"),t(),e(1073,`
            {
                `),n(1074,"span",47),e(1075,"return"),t(),e(1076," Result<UserResponseEnvelope>.Failure("),n(1077,"span",47),e(1078,"new"),t(),e(1079," Dictionary<"),n(1080,"span",62),e(1081,"string"),t(),e(1082,", "),n(1083,"span",62),e(1084,"string"),t(),e(1085,`[]>
            {
                { `),n(1086,"span",50),e(1087,'"identity_error"'),t(),e(1088,", "),n(1089,"span",47),e(1090,"new"),t(),e(1091,`[] { IdentityErrorMessage } }
            });
            }

            User? user;
            `),n(1092,"span",47),e(1093,"if"),t(),e(1094," ("),n(1095,"span",47),e(1096,"this"),t(),e(1097,".env.EnvironmentName == "),n(1098,"span",50),e(1099,'"Test"'),t(),e(1100,`)
            {
                `),n(1101,"span",47),e(1102,"var"),t(),e(1103,` name = claimsPrincipal.Identity?.Name;
                `),n(1104,"span",47),e(1105,"if"),t(),e(1106," (name == "),n(1107,"span",64),e(1108,"null"),t(),e(1109,`)
                {
                    `),n(1110,"span",47),e(1111,"return"),t(),e(1112," Result<UserResponseEnvelope>.Failure("),n(1113,"span",47),e(1114,"new"),t(),e(1115," Dictionary<"),n(1116,"span",62),e(1117,"string"),t(),e(1118,", "),n(1119,"span",62),e(1120,"string"),t(),e(1121,`[]>
                {
                    { `),n(1122,"span",50),e(1123,'"debug_error"'),t(),e(1124,", "),n(1125,"span",47),e(1126,"new"),t(),e(1127,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(1128,"span",47),e(1129,"await"),t(),e(1130," "),n(1131,"span",47),e(1132,"this"),t(),e(1133,`.userManager.FindByEmailAsync(name);
            }
            `),n(1134,"span",47),e(1135,"else"),t(),e(1136,`
            {
                `),n(1137,"span",47),e(1138,"var"),t(),e(1139,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),n(1140,"span",47),e(1141,"if"),t(),e(1142," (claim == "),n(1143,"span",64),e(1144,"null"),t(),e(1145,`)
                {
                    `),n(1146,"span",47),e(1147,"return"),t(),e(1148," Result<UserResponseEnvelope>.Failure("),n(1149,"span",47),e(1150,"new"),t(),e(1151," Dictionary<"),n(1152,"span",62),e(1153,"string"),t(),e(1154,", "),n(1155,"span",62),e(1156,"string"),t(),e(1157,`[]>
                {
                    { `),n(1158,"span",50),e(1159,'"name_identifier_error"'),t(),e(1160,", "),n(1161,"span",47),e(1162,"new"),t(),e(1163,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(1164,"span",47),e(1165,"await"),t(),e(1166," "),n(1167,"span",47),e(1168,"this"),t(),e(1169,`.userManager.FindByIdAsync(claim.Value);
            }

            `),n(1170,"span",47),e(1171,"if"),t(),e(1172," (user == "),n(1173,"span",64),e(1174,"null"),t(),e(1175,`)
            {
                `),n(1176,"span",47),e(1177,"return"),t(),e(1178," Result<UserResponseEnvelope>.Failure("),n(1179,"span",47),e(1180,"new"),t(),e(1181," Dictionary<"),n(1182,"span",62),e(1183,"string"),t(),e(1184,", "),n(1185,"span",62),e(1186,"string"),t(),e(1187,`[]>
            {
                { `),n(1188,"span",50),e(1189,'"user_error"'),t(),e(1190,", "),n(1191,"span",47),e(1192,"new"),t(),e(1193,`[] { UserNullErrorMessage } }
            });
            }

            `),n(1194,"span",47),e(1195,"var"),t(),e(1196,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),n(1197,"span",47),e(1198,"if"),t(),e(1199," (claimRole == "),n(1200,"span",64),e(1201,"null"),t(),e(1202,`)
            {
                `),n(1203,"span",47),e(1204,"return"),t(),e(1205," Result<UserResponseEnvelope>.Failure("),n(1206,"span",47),e(1207,"new"),t(),e(1208," Dictionary<"),n(1209,"span",62),e(1210,"string"),t(),e(1211,", "),n(1212,"span",62),e(1213,"string"),t(),e(1214,`[]>
                {
                    { `),n(1215,"span",50),e(1216,'"is_in_role_error"'),t(),e(1217,", "),n(1218,"span",47),e(1219,"new"),t(),e(1220,"[] { "),n(1221,"span",62),e(1222,"string"),t(),e(1223,".Format(IdentityRoleErrorMessage, "),n(1224,"span",50),e(1225,'""'),t(),e(1226,`) } }
                });
            }
            `),n(1227,"span",47),e(1228,"var"),t(),e(1229," isInRole = "),n(1230,"span",47),e(1231,"await"),t(),e(1232," "),n(1233,"span",47),e(1234,"this"),t(),e(1235,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),n(1236,"span",47),e(1237,"if"),t(),e(1238,` (!isInRole)
            {
                `),n(1239,"span",47),e(1240,"return"),t(),e(1241," Result<UserResponseEnvelope>.Failure("),n(1242,"span",47),e(1243,"new"),t(),e(1244," Dictionary<"),n(1245,"span",62),e(1246,"string"),t(),e(1247,", "),n(1248,"span",62),e(1249,"string"),t(),e(1250,`[]>
                {
                    { `),n(1251,"span",50),e(1252,'"is_in_role_error"'),t(),e(1253,", "),n(1254,"span",47),e(1255,"new"),t(),e(1256,"[] { "),n(1257,"span",62),e(1258,"string"),t(),e(1259,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),n(1260,"span",47),e(1261,"var"),t(),e(1262," isLockoutEnabled = "),n(1263,"span",47),e(1264,"await"),t(),e(1265,` userManager.GetLockoutEnabledAsync(user);

            `),n(1266,"span",47),e(1267,"if"),t(),e(1268,` (isLockoutEnabled)
            {
                `),n(1269,"span",47),e(1270,"var"),t(),e(1271," count = "),n(1272,"span",47),e(1273,"await"),t(),e(1274,` userManager.GetAccessFailedCountAsync(user);
                `),n(1275,"span",47),e(1276,"if"),t(),e(1277," (count == applicationSettings.MaxFailedAccessAttempts - "),n(1278,"span",65),e(1279,"1"),t(),e(1280,`)
                {
                    `),n(1281,"span",47),e(1282,"var"),t(),e(1283," endDate = "),n(1284,"span",47),e(1285,"await"),t(),e(1286,` userManager.GetLockoutEndDateAsync(user);
                    `),n(1287,"span",47),e(1288,"var"),t(),e(1289,` currectDate = DateTimeOffset.UtcNow;
                    `),n(1290,"span",47),e(1291,"if"),t(),e(1292,` (endDate > currectDate)
                    {
                        `),n(1293,"span",47),e(1294,"return"),t(),e(1295," Result<UserResponseEnvelope>.Failure("),n(1296,"span",47),e(1297,"new"),t(),e(1298," Dictionary<"),n(1299,"span",62),e(1300,"string"),t(),e(1301,", "),n(1302,"span",62),e(1303,"string"),t(),e(1304,`[]>
                    {
                        { `),n(1305,"span",50),e(1306,'"lockout_error"'),t(),e(1307,", "),n(1308,"span",47),e(1309,"new"),t(),e(1310,"[] {  "),n(1311,"span",62),e(1312,"string"),t(),e(1313,".Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,"),n(1314,"span",50),e(1315,'""'),t(),e(1316,`) } }
                    });
                    }
                }

                `),n(1317,"span",47),e(1318,"var"),t(),e(1319," passwordValid = "),n(1320,"span",47),e(1321,"await"),t(),e(1322," "),n(1323,"span",47),e(1324,"this"),t(),e(1325,`.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                `),n(1326,"span",47),e(1327,"if"),t(),e(1328,` (!passwordValid)
                {
                    `),n(1329,"span",47),e(1330,"var"),t(),e(1331," accessFailed = "),n(1332,"span",47),e(1333,"await"),t(),e(1334," "),n(1335,"span",47),e(1336,"this"),t(),e(1337,`.userManager.AccessFailedAsync(user);
                    `),n(1338,"span",47),e(1339,"if"),t(),e(1340,` (!accessFailed.Succeeded)
                    {
                        `),n(1341,"span",47),e(1342,"var"),t(),e(1343," errors = "),n(1344,"span",47),e(1345,"new"),t(),e(1346," Dictionary<"),n(1347,"span",62),e(1348,"string"),t(),e(1349,", "),n(1350,"span",62),e(1351,"string"),t(),e(1352,`[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            `),n(1353,"span",47),e(1354,"switch"),t(),e(1355,` (e.Code)
                            {
                                `),n(1356,"span",47),e(1357,"case"),t(),e(1358," "),n(1359,"span",50),e(1360,'"TODO: need to debug e.Code"'),t(),e(1361,`:
                                    e.Description = `),n(1362,"span",62),e(1363,"string"),t(),e(1364,".Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, "),n(1365,"span",50),e(1366,'""'),t(),e(1367,`);
                                    `),n(1368,"span",47),e(1369,"break"),t(),e(1370,`;
                            }

                            e.Description = `),n(1371,"span",62),e(1372,"string"),t(),e(1373,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, `),n(1374,"span",47),e(1375,"new"),t(),e(1376,`[] { e.Description });
                        });

                        `),n(1377,"span",47),e(1378,"return"),t(),e(1379,` Result<UserResponseEnvelope>.Failure(errors);
                    }

                    `),n(1380,"span",47),e(1381,"return"),t(),e(1382," Result<UserResponseEnvelope>.Failure("),n(1383,"span",47),e(1384,"new"),t(),e(1385," Dictionary<"),n(1386,"span",62),e(1387,"string"),t(),e(1388,", "),n(1389,"span",62),e(1390,"string"),t(),e(1391,`[]>
                {
                    { `),n(1392,"span",50),e(1393,'"invalid_error"'),t(),e(1394,", "),n(1395,"span",47),e(1396,"new"),t(),e(1397,`[] { InvalidErrorMessage } }
                });
                }
            }
            `),n(1398,"span",47),e(1399,"else"),t(),e(1400,`
            {
                `),n(1401,"span",47),e(1402,"if"),t(),e(1403," ("),n(1404,"span",47),e(1405,"this"),t(),e(1406,".env.EnvironmentName == "),n(1407,"span",50),e(1408,'"Test"'),t(),e(1409,`)
                {
                    `),n(1410,"span",47),e(1411,"var"),t(),e(1412," passwordValid = "),n(1413,"span",47),e(1414,"await"),t(),e(1415," "),n(1416,"span",47),e(1417,"this"),t(),e(1418,`.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    `),n(1419,"span",47),e(1420,"if"),t(),e(1421,` (!passwordValid)
                    {
                        `),n(1422,"span",47),e(1423,"return"),t(),e(1424," Result<UserResponseEnvelope>.Failure("),n(1425,"span",47),e(1426,"new"),t(),e(1427," Dictionary<"),n(1428,"span",62),e(1429,"string"),t(),e(1430,", "),n(1431,"span",62),e(1432,"string"),t(),e(1433,`[]>
                    {
                        { `),n(1434,"span",50),e(1435,'"invalid_error"'),t(),e(1436,", "),n(1437,"span",47),e(1438,"new"),t(),e(1439,`[] { InvalidErrorMessage } }
                    });
                    }
                }
                `),n(1440,"span",47),e(1441,"else"),t(),e(1442,`
                {
                    `),n(1443,"span",47),e(1444,"return"),t(),e(1445," Result<UserResponseEnvelope>.Failure("),n(1446,"span",47),e(1447,"new"),t(),e(1448," Dictionary<"),n(1449,"span",62),e(1450,"string"),t(),e(1451,", "),n(1452,"span",62),e(1453,"string"),t(),e(1454,`[]>
                {
                    { `),n(1455,"span",50),e(1456,'"lockout_enabled_error"'),t(),e(1457,", "),n(1458,"span",47),e(1459,"new"),t(),e(1460,`[] { LockoutEnabledErrorMessage } }
                });
                }
            }

            `),n(1461,"span",62),e(1462,"string"),t(),e(1463,`? token;
            `),n(1464,"span",47),e(1465,"if"),t(),e(1466," ("),n(1467,"span",47),e(1468,"this"),t(),e(1469,".env.EnvironmentName == "),n(1470,"span",50),e(1471,'"Test"'),t(),e(1472,`)
            {
                token = `),n(1473,"span",50),e(1474,'$"Token: '),n(1475,"span",66),e(1476,"{user.Email}"),t(),e(1477,'"'),t(),e(1478,`;
            }
            `),n(1479,"span",47),e(1480,"else"),t(),e(1481,`
            {
                token = isNewToken ? `),n(1482,"span",47),e(1483,"await"),t(),e(1484," "),n(1485,"span",47),e(1486,"this"),t(),e(1487,`.jwtGenerator.GenerateToken(user) :
                `),n(1488,"span",47),e(1489,"this"),t(),e(1490,".httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()["),n(1491,"span",50),e(1492,'"Bearer "'),t(),e(1493,`.Length..].Trim();
            }

            `),n(1494,"span",47),e(1495,"return"),t(),e(1496," "),n(1497,"span",47),e(1498,"new"),t(),e(1499,` UserResponseEnvelope
            {
                UserJson = `),n(1500,"span",47),e(1501,"new"),t(),e(1502,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        `),n(1503,"span",46),e(1504,"#"),n(1505,"span",47),e(1506,"endregion"),t()(),e(1507,`

        `),n(1508,"span",46),e(1509,"#"),n(1510,"span",47),e(1511,"region"),t(),e(1512," Update"),t(),e(1513,`
        `),n(1514,"span",47),e(1515,"public"),t(),e(1516," "),n(1517,"span",47),e(1518,"async"),t(),e(1519,` Task<Result<UserResponseEnvelope>> Update(UserUpdateCommand userRequest)
        {
            `),n(1520,"span",47),e(1521,"if"),t(),e(1522," (userRequest.UserJson.FullName == "),n(1523,"span",64),e(1524,"null"),t(),e(1525," && userRequest.UserJson.Password == "),n(1526,"span",64),e(1527,"null"),t(),e(1528,`)
            {
                `),n(1529,"span",47),e(1530,"return"),t(),e(1531," Result<UserResponseEnvelope>.Failure("),n(1532,"span",47),e(1533,"new"),t(),e(1534," Dictionary<"),n(1535,"span",62),e(1536,"string"),t(),e(1537,", "),n(1538,"span",62),e(1539,"string"),t(),e(1540,`[]>
            {
                 { `),n(1541,"span",50),e(1542,'"no_data_error"'),t(),e(1543,", "),n(1544,"span",47),e(1545,"new"),t(),e(1546,`[] { NoDataErrorMessage } }
            });
            }

            `),n(1547,"span",62),e(1548,"bool"),t(),e(1549," isNewToken = "),n(1550,"span",64),e(1551,"false"),t(),e(1552,`;
            ClaimsPrincipal? claimsPrincipal = `),n(1553,"span",47),e(1554,"this"),t(),e(1555,`.httpContextAccessor.HttpContext!.User!;
            `),n(1556,"span",47),e(1557,"if"),t(),e(1558," (claimsPrincipal != "),n(1559,"span",64),e(1560,"null"),t(),e(1561,`)
            {
                `),n(1562,"span",47),e(1563,"var"),t(),e(1564,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),n(1565,"span",47),e(1566,"if"),t(),e(1567," (isAuthenticated == "),n(1568,"span",64),e(1569,"null"),t(),e(1570," || !("),n(1571,"span",62),e(1572,"bool"),t(),e(1573,`)isAuthenticated)
                {
                    `),n(1574,"span",47),e(1575,"return"),t(),e(1576," Result<UserResponseEnvelope>.Failure("),n(1577,"span",47),e(1578,"new"),t(),e(1579," Dictionary<"),n(1580,"span",62),e(1581,"string"),t(),e(1582,", "),n(1583,"span",62),e(1584,"string"),t(),e(1585,`[]>
                {
                    { `),n(1586,"span",50),e(1587,'"identity_error"'),t(),e(1588,", "),n(1589,"span",47),e(1590,"new"),t(),e(1591,`[] { IdentityErrorMessage } }
                });
                }
                `),n(1592,"span",47),e(1593,"var"),t(),e(1594," iat = claimsPrincipal.FindFirst("),n(1595,"span",50),e(1596,'"iat"'),t(),e(1597,`);
                `),n(1598,"span",47),e(1599,"var"),t(),e(1600," exp = claimsPrincipal.FindFirst("),n(1601,"span",50),e(1602,'"exp"'),t(),e(1603,`);
                `),n(1604,"span",47),e(1605,"if"),t(),e(1606," (iat == "),n(1607,"span",64),e(1608,"null"),t(),e(1609," || exp == "),n(1610,"span",64),e(1611,"null"),t(),e(1612,`)
                {
                    `),n(1613,"span",47),e(1614,"return"),t(),e(1615," Result<UserResponseEnvelope>.Failure("),n(1616,"span",47),e(1617,"new"),t(),e(1618," Dictionary<"),n(1619,"span",62),e(1620,"string"),t(),e(1621,", "),n(1622,"span",62),e(1623,"string"),t(),e(1624,`[]>
                {
                    { `),n(1625,"span",50),e(1626,'"identity_error"'),t(),e(1627,", "),n(1628,"span",47),e(1629,"new"),t(),e(1630,`[] { IdentityErrorMessage } }
                });
                }

                `),n(1631,"span",47),e(1632,"var"),t(),e(1633," rate = ("),n(1634,"span",62),e(1635,"long"),t(),e(1636,".Parse(exp.Value) - "),n(1637,"span",62),e(1638,"long"),t(),e(1639,`.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                `),n(1640,"span",47),e(1641,"var"),t(),e(1642," current = "),n(1643,"span",62),e(1644,"long"),t(),e(1645,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            `),n(1646,"span",47),e(1647,"else"),t(),e(1648,`
            {
                `),n(1649,"span",47),e(1650,"return"),t(),e(1651," Result<UserResponseEnvelope>.Failure("),n(1652,"span",47),e(1653,"new"),t(),e(1654," Dictionary<"),n(1655,"span",62),e(1656,"string"),t(),e(1657,", "),n(1658,"span",62),e(1659,"string"),t(),e(1660,`[]>
            {
                { `),n(1661,"span",50),e(1662,'"identity_error"'),t(),e(1663,", "),n(1664,"span",47),e(1665,"new"),t(),e(1666,`[] { IdentityErrorMessage } }
            });
            }

            `),n(1667,"span",47),e(1668,"if"),t(),e(1669," (userRequest.UserJson.FullName != "),n(1670,"span",64),e(1671,"null"),t(),e(1672,`)
            {
                `),n(1673,"span",47),e(1674,"var"),t(),e(1675," userByName = "),n(1676,"span",47),e(1677,"await"),t(),e(1678," "),n(1679,"span",47),e(1680,"this"),t(),e(1681,`.userManager.FindByNameAsync(userRequest.UserJson.FullName);

                `),n(1682,"span",47),e(1683,"if"),t(),e(1684," (userByName != "),n(1685,"span",64),e(1686,"null"),t(),e(1687,`)
                {
                    `),n(1688,"span",47),e(1689,"return"),t(),e(1690," Result<UserResponseEnvelope>.Failure("),n(1691,"span",47),e(1692,"new"),t(),e(1693," Dictionary<"),n(1694,"span",62),e(1695,"string"),t(),e(1696,", "),n(1697,"span",62),e(1698,"string"),t(),e(1699,`[]>
                {
                    { `),n(1700,"span",50),e(1701,'"name_error"'),t(),e(1702,", "),n(1703,"span",47),e(1704,"new"),t(),e(1705,`[] { UserNameTakenErrorMessage } }
                });
                }
            }

            User? user;
            `),n(1706,"span",47),e(1707,"if"),t(),e(1708," ("),n(1709,"span",47),e(1710,"this"),t(),e(1711,".env.EnvironmentName == "),n(1712,"span",50),e(1713,'"Test"'),t(),e(1714,`)
            {
                `),n(1715,"span",47),e(1716,"var"),t(),e(1717,` name = claimsPrincipal.Identity?.Name;
                `),n(1718,"span",47),e(1719,"if"),t(),e(1720," (name == "),n(1721,"span",64),e(1722,"null"),t(),e(1723,`)
                {
                    `),n(1724,"span",47),e(1725,"return"),t(),e(1726," Result<UserResponseEnvelope>.Failure("),n(1727,"span",47),e(1728,"new"),t(),e(1729," Dictionary<"),n(1730,"span",62),e(1731,"string"),t(),e(1732,", "),n(1733,"span",62),e(1734,"string"),t(),e(1735,`[]>
                {
                    { `),n(1736,"span",50),e(1737,'"debug_error"'),t(),e(1738,", "),n(1739,"span",47),e(1740,"new"),t(),e(1741,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(1742,"span",47),e(1743,"await"),t(),e(1744," "),n(1745,"span",47),e(1746,"this"),t(),e(1747,`.userManager.FindByEmailAsync(name);
            }
            `),n(1748,"span",47),e(1749,"else"),t(),e(1750,`
            {
                `),n(1751,"span",47),e(1752,"var"),t(),e(1753,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),n(1754,"span",47),e(1755,"if"),t(),e(1756," (claim == "),n(1757,"span",64),e(1758,"null"),t(),e(1759,`)
                {
                    `),n(1760,"span",47),e(1761,"return"),t(),e(1762," Result<UserResponseEnvelope>.Failure("),n(1763,"span",47),e(1764,"new"),t(),e(1765," Dictionary<"),n(1766,"span",62),e(1767,"string"),t(),e(1768,", "),n(1769,"span",62),e(1770,"string"),t(),e(1771,`[]>
                {
                    { `),n(1772,"span",50),e(1773,'"name_identifier_error"'),t(),e(1774,", "),n(1775,"span",47),e(1776,"new"),t(),e(1777,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(1778,"span",47),e(1779,"await"),t(),e(1780," "),n(1781,"span",47),e(1782,"this"),t(),e(1783,`.userManager.FindByIdAsync(claim.Value);
            }

            `),n(1784,"span",47),e(1785,"if"),t(),e(1786," (user == "),n(1787,"span",64),e(1788,"null"),t(),e(1789,`)
            {
                `),n(1790,"span",47),e(1791,"return"),t(),e(1792," Result<UserResponseEnvelope>.Failure("),n(1793,"span",47),e(1794,"new"),t(),e(1795," Dictionary<"),n(1796,"span",62),e(1797,"string"),t(),e(1798,", "),n(1799,"span",62),e(1800,"string"),t(),e(1801,`[]>
            {
                { `),n(1802,"span",50),e(1803,'"user_error"'),t(),e(1804,", "),n(1805,"span",47),e(1806,"new"),t(),e(1807,`[] { UserNullErrorMessage } }
            });
            }

            `),n(1808,"span",47),e(1809,"var"),t(),e(1810,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),n(1811,"span",47),e(1812,"if"),t(),e(1813," (claimRole == "),n(1814,"span",64),e(1815,"null"),t(),e(1816,`)
            {
                `),n(1817,"span",47),e(1818,"return"),t(),e(1819," Result<UserResponseEnvelope>.Failure("),n(1820,"span",47),e(1821,"new"),t(),e(1822," Dictionary<"),n(1823,"span",62),e(1824,"string"),t(),e(1825,", "),n(1826,"span",62),e(1827,"string"),t(),e(1828,`[]>
                {
                    { `),n(1829,"span",50),e(1830,'"is_in_role_error"'),t(),e(1831,", "),n(1832,"span",47),e(1833,"new"),t(),e(1834,"[] { "),n(1835,"span",62),e(1836,"string"),t(),e(1837,".Format(IdentityRoleErrorMessage, "),n(1838,"span",50),e(1839,'""'),t(),e(1840,`) } }
                });
            }
            `),n(1841,"span",47),e(1842,"var"),t(),e(1843," isInRole = "),n(1844,"span",47),e(1845,"await"),t(),e(1846," "),n(1847,"span",47),e(1848,"this"),t(),e(1849,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),n(1850,"span",47),e(1851,"if"),t(),e(1852,` (!isInRole)
            {
                `),n(1853,"span",47),e(1854,"return"),t(),e(1855," Result<UserResponseEnvelope>.Failure("),n(1856,"span",47),e(1857,"new"),t(),e(1858," Dictionary<"),n(1859,"span",62),e(1860,"string"),t(),e(1861,", "),n(1862,"span",62),e(1863,"string"),t(),e(1864,`[]>
                {
                    { `),n(1865,"span",50),e(1866,'"is_in_role_error"'),t(),e(1867,", "),n(1868,"span",47),e(1869,"new"),t(),e(1870,"[] { "),n(1871,"span",62),e(1872,"string"),t(),e(1873,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),n(1874,"span",47),e(1875,"if"),t(),e(1876," (userRequest.UserJson.FullName != "),n(1877,"span",64),e(1878,"null"),t(),e(1879,`)
            {
                `),n(1880,"span",47),e(1881,"var"),t(),e(1882," identityResult1 = "),n(1883,"span",47),e(1884,"await"),t(),e(1885," "),n(1886,"span",47),e(1887,"this"),t(),e(1888,`.userManager.SetUserNameAsync(
                     user,
                     userRequest.UserJson.FullName);

                `),n(1889,"span",47),e(1890,"if"),t(),e(1891,` (!identityResult1.Succeeded)
                {
                    `),n(1892,"span",47),e(1893,"var"),t(),e(1894," errors = "),n(1895,"span",47),e(1896,"new"),t(),e(1897," Dictionary<"),n(1898,"span",62),e(1899,"string"),t(),e(1900,", "),n(1901,"span",62),e(1902,"string"),t(),e(1903,`[]>();
                    identityResult1.Errors.ForEach(e =>
                    {
                        `),n(1904,"span",47),e(1905,"switch"),t(),e(1906,` (e.Code)
                        {
                            `),n(1907,"span",47),e(1908,"case"),t(),e(1909," "),n(1910,"span",50),e(1911,'"InvalidUserName"'),t(),e(1912,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),n(1913,"span",47),e(1914,"break"),t(),e(1915,`;
                        }
                        errors.Add(e.Code, `),n(1916,"span",47),e(1917,"new"),t(),e(1918,`[] { e.Description });
                    });

                    `),n(1919,"span",47),e(1920,"return"),t(),e(1921,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }

            `),n(1922,"span",47),e(1923,"if"),t(),e(1924," (userRequest.UserJson.Password != "),n(1925,"span",64),e(1926,"null"),t(),e(1927,`)
            {
                `),n(1928,"span",47),e(1929,"var"),t(),e(1930," identityResult2 = "),n(1931,"span",47),e(1932,"await"),t(),e(1933," "),n(1934,"span",47),e(1935,"this"),t(),e(1936,`.userManager.RemovePasswordAsync(user);

                `),n(1937,"span",47),e(1938,"if"),t(),e(1939,` (!identityResult2.Succeeded)
                {
                    `),n(1940,"span",47),e(1941,"var"),t(),e(1942," errors = "),n(1943,"span",47),e(1944,"new"),t(),e(1945," Dictionary<"),n(1946,"span",62),e(1947,"string"),t(),e(1948,", "),n(1949,"span",62),e(1950,"string"),t(),e(1951,`[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        errors.Add(e.Code, `),n(1952,"span",47),e(1953,"new"),t(),e(1954,`[] { e.Description });
                    });

                    `),n(1955,"span",47),e(1956,"return"),t(),e(1957,` Result<UserResponseEnvelope>.Failure(errors);
                }

                identityResult2 = `),n(1958,"span",47),e(1959,"await"),t(),e(1960," "),n(1961,"span",47),e(1962,"this"),t(),e(1963,`.userManager.AddPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                `),n(1964,"span",47),e(1965,"if"),t(),e(1966,` (!identityResult2.Succeeded)
                {
                    `),n(1967,"span",47),e(1968,"var"),t(),e(1969," errors = "),n(1970,"span",47),e(1971,"new"),t(),e(1972," Dictionary<"),n(1973,"span",62),e(1974,"string"),t(),e(1975,", "),n(1976,"span",62),e(1977,"string"),t(),e(1978,`[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        `),n(1979,"span",47),e(1980,"switch"),t(),e(1981,` (e.Code)
                        {
                            `),n(1982,"span",47),e(1983,"case"),t(),e(1984," "),n(1985,"span",50),e(1986,'"PasswordRequiresDigit"'),t(),e(1987,`:
                                e.Description = PasswordFormatErrorMessage;
                                `),n(1988,"span",47),e(1989,"break"),t(),e(1990,`;
                        }
                        errors.Add(e.Code, `),n(1991,"span",47),e(1992,"new"),t(),e(1993,`[] { e.Description });
                    });
                    `),n(1994,"span",47),e(1995,"return"),t(),e(1996,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }

            `),n(1997,"span",62),e(1998,"string"),t(),e(1999,`? token;
            `),n(2e3,"span",47),e(2001,"if"),t(),e(2002," ("),n(2003,"span",47),e(2004,"this"),t(),e(2005,".env.EnvironmentName == "),n(2006,"span",50),e(2007,'"Test"'),t(),e(2008,`)
            {
                token = `),n(2009,"span",50),e(2010,'$"Token: '),n(2011,"span",66),e(2012,"{user.Email}"),t(),e(2013,'"'),t(),e(2014,`;
            }
            `),n(2015,"span",47),e(2016,"else"),t(),e(2017,`
            {
                token = isNewToken ? `),n(2018,"span",47),e(2019,"await"),t(),e(2020," "),n(2021,"span",47),e(2022,"this"),t(),e(2023,`.jwtGenerator.GenerateToken(user) :
                `),n(2024,"span",47),e(2025,"this"),t(),e(2026,".httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()["),n(2027,"span",50),e(2028,'"Bearer "'),t(),e(2029,`.Length..].Trim();
            }

            `),n(2030,"span",47),e(2031,"return"),t(),e(2032," "),n(2033,"span",47),e(2034,"new"),t(),e(2035,` UserResponseEnvelope
            {
                UserJson = `),n(2036,"span",47),e(2037,"new"),t(),e(2038,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        `),n(2039,"span",46),e(2040,"#"),n(2041,"span",47),e(2042,"endregion"),t()(),e(2043,`

        `),n(2044,"span",47),e(2045,"public"),t(),e(2046," "),n(2047,"span",47),e(2048,"async"),t(),e(2049," Task<Result<ProfileResponseEnvelope>> Profile("),n(2050,"span",62),e(2051,"string"),t(),e(2052,` userName)
        {
            `),n(2053,"span",47),e(2054,"var"),t(),e(2055," user = "),n(2056,"span",47),e(2057,"await"),t(),e(2058," "),n(2059,"span",47),e(2060,"this"),t(),e(2061,`.userManager.FindByNameAsync(userName);

            `),n(2062,"span",47),e(2063,"if"),t(),e(2064," (user == "),n(2065,"span",64),e(2066,"null"),t(),e(2067,`)
            {
                `),n(2068,"span",47),e(2069,"return"),t(),e(2070," Result<ProfileResponseEnvelope>.Failure("),n(2071,"span",47),e(2072,"new"),t(),e(2073," Dictionary<"),n(2074,"span",62),e(2075,"string"),t(),e(2076,", "),n(2077,"span",62),e(2078,"string"),t(),e(2079,`[]>
                    {
                       { `),n(2080,"span",50),e(2081,'"profile_error"'),t(),e(2082,", "),n(2083,"span",47),e(2084,"new"),t(),e(2085,`[] { ProfileErrorMessage } }
                    }
                );
            }

            `),n(2086,"span",47),e(2087,"return"),t(),e(2088," "),n(2089,"span",47),e(2090,"new"),t(),e(2091,` ProfileResponseEnvelope
            {
                ProfileJson = `),n(2092,"span",47),e(2093,"new"),t(),e(2094,` ProfileResponseModel(user.UserName, user.UserName, user.UserName)
            };

        }

        `),n(2095,"span",47),e(2096,"public"),t(),e(2097," "),n(2098,"span",47),e(2099,"async"),t(),e(2100,` Task<Result<UserResponseEnvelope>> Register(UserRegisterRequestEnvelope userRequest)
        {
            `),n(2101,"span",47),e(2102,"var"),t(),e(2103," userByEmail = "),n(2104,"span",47),e(2105,"await"),t(),e(2106," "),n(2107,"span",47),e(2108,"this"),t(),e(2109,`.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            `),n(2110,"span",47),e(2111,"if"),t(),e(2112," (userByEmail != "),n(2113,"span",64),e(2114,"null"),t(),e(2115,`)
            {
                `),n(2116,"span",47),e(2117,"return"),t(),e(2118," Result<UserResponseEnvelope>.Failure("),n(2119,"span",47),e(2120,"new"),t(),e(2121," Dictionary<"),n(2122,"span",62),e(2123,"string"),t(),e(2124,", "),n(2125,"span",62),e(2126,"string"),t(),e(2127,`[]>
            {
                { `),n(2128,"span",50),e(2129,'"email_error"'),t(),e(2130,", "),n(2131,"span",47),e(2132,"new"),t(),e(2133,`[] { EmailTakenErrorMessage } }
            });
            }

            `),n(2134,"span",47),e(2135,"var"),t(),e(2136," userByName = "),n(2137,"span",47),e(2138,"await"),t(),e(2139," "),n(2140,"span",47),e(2141,"this"),t(),e(2142,`.userManager.FindByNameAsync(userRequest.UserJson.FullName);

            `),n(2143,"span",47),e(2144,"if"),t(),e(2145," (userByName != "),n(2146,"span",64),e(2147,"null"),t(),e(2148,`)
            {
                `),n(2149,"span",47),e(2150,"return"),t(),e(2151," Result<UserResponseEnvelope>.Failure("),n(2152,"span",47),e(2153,"new"),t(),e(2154," Dictionary<"),n(2155,"span",62),e(2156,"string"),t(),e(2157,", "),n(2158,"span",62),e(2159,"string"),t(),e(2160,`[]>
            {
               { `),n(2161,"span",50),e(2162,'"name_error"'),t(),e(2163,", "),n(2164,"span",47),e(2165,"new"),t(),e(2166,`[] { UserNameTakenErrorMessage } }
            });
            }

            `),n(2167,"span",47),e(2168,"if"),t(),e(2169," ("),n(2170,"span",47),e(2171,"this"),t(),e(2172,".env.EnvironmentName == "),n(2173,"span",50),e(2174,'"Test"'),t(),e(2175,`)
            {
                `),n(2176,"span",47),e(2177,"var"),t(),e(2178," user = "),n(2179,"span",47),e(2180,"new"),t(),e(2181,` User(userRequest.UserJson.Email, userRequest.UserJson.FullName);

                `),n(2182,"span",47),e(2183,"var"),t(),e(2184," identityResult = "),n(2185,"span",47),e(2186,"await"),t(),e(2187," "),n(2188,"span",47),e(2189,"this"),t(),e(2190,`.userManager.CreateAsync(
                    user,
                    userRequest.UserJson.Password);

                `),n(2191,"span",47),e(2192,"if"),t(),e(2193,` (!identityResult.Succeeded)
                {
                    `),n(2194,"span",47),e(2195,"var"),t(),e(2196," errors = "),n(2197,"span",47),e(2198,"new"),t(),e(2199," Dictionary<"),n(2200,"span",62),e(2201,"string"),t(),e(2202,", "),n(2203,"span",62),e(2204,"string"),t(),e(2205,`[]>();
                    identityResult.Errors.ForEach(e =>
                    {
                        `),n(2206,"span",47),e(2207,"switch"),t(),e(2208,` (e.Code)
                        {
                            `),n(2209,"span",47),e(2210,"case"),t(),e(2211," "),n(2212,"span",50),e(2213,'"InvalidUserName"'),t(),e(2214,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),n(2215,"span",47),e(2216,"break"),t(),e(2217,`;
                            `),n(2218,"span",47),e(2219,"case"),t(),e(2220," "),n(2221,"span",50),e(2222,'"PasswordRequiresDigit"'),t(),e(2223,`:
                                e.Description = PasswordFormatErrorMessage;
                                `),n(2224,"span",47),e(2225,"break"),t(),e(2226,`;
                        }
                        errors.Add(e.Code, `),n(2227,"span",47),e(2228,"new"),t(),e(2229,`[] { e.Description });
                    });

                    `),n(2230,"span",47),e(2231,"return"),t(),e(2232,` Result<UserResponseEnvelope>.Failure(errors);
                }

                `),n(2233,"span",47),e(2234,"var"),t(),e(2235," token = "),n(2236,"span",50),e(2237,'$"Token: '),n(2238,"span",66),e(2239,"{user.Email}"),t(),e(2240,'"'),t(),e(2241,`;

                `),n(2242,"span",47),e(2243,"await"),t(),e(2244," "),n(2245,"span",47),e(2246,"this"),t(),e(2247,".eventDispatcher.Dispatch("),n(2248,"span",47),e(2249,"new"),t(),e(2250,` UserRegisteredEvent(
                    user.Id,
                    userRequest.UserJson.FullName));

                `),n(2251,"span",47),e(2252,"return"),t(),e(2253," "),n(2254,"span",47),e(2255,"new"),t(),e(2256,` UserResponseEnvelope
                {
                    UserJson = `),n(2257,"span",47),e(2258,"new"),t(),e(2259,`()
                    {
                        Email = user.Email!,
                        UserName = user.UserName!,
                        Token = token,
                    }
                };
            }
            `),n(2260,"span",47),e(2261,"else"),t(),e(2262,`
            {
                `),n(2263,"span",47),e(2264,"return"),t(),e(2265," Result<UserResponseEnvelope>.Failure("),n(2266,"span",47),e(2267,"new"),t(),e(2268," Dictionary<"),n(2269,"span",62),e(2270,"string"),t(),e(2271,", "),n(2272,"span",62),e(2273,"string"),t(),e(2274,`[]>
            {
                 { `),n(2275,"span",50),e(2276,'"not_implemended_error"'),t(),e(2277,`, registerNotImplemented }
            });
            }
        }

        `),n(2278,"span",47),e(2279,"public"),t(),e(2280," "),n(2281,"span",47),e(2282,"async"),t(),e(2283,` Task<Result<UserResponseEnvelope>> Login(UserLoginRequestEnvelope userRequest)
        {
            `),n(2284,"span",47),e(2285,"var"),t(),e(2286," user = "),n(2287,"span",47),e(2288,"await"),t(),e(2289," "),n(2290,"span",47),e(2291,"this"),t(),e(2292,`.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            `),n(2293,"span",47),e(2294,"if"),t(),e(2295," (user == "),n(2296,"span",64),e(2297,"null"),t(),e(2298,`)
            {
                `),n(2299,"span",47),e(2300,"return"),t(),e(2301," Result<UserResponseEnvelope>.Failure("),n(2302,"span",47),e(2303,"new"),t(),e(2304," Dictionary<"),n(2305,"span",62),e(2306,"string"),t(),e(2307,", "),n(2308,"span",62),e(2309,"string"),t(),e(2310,`[]>
            {
                { `),n(2311,"span",50),e(2312,'"invalid_error"'),t(),e(2313,", "),n(2314,"span",47),e(2315,"new"),t(),e(2316,`[] { InvalidErrorMessage } }
            });
            }

            `),n(2317,"span",47),e(2318,"var"),t(),e(2319," isLockoutEnabled = "),n(2320,"span",47),e(2321,"await"),t(),e(2322,` userManager.GetLockoutEnabledAsync(user);

            `),n(2323,"span",47),e(2324,"if"),t(),e(2325,` (isLockoutEnabled)
            {
                `),n(2326,"span",47),e(2327,"var"),t(),e(2328," count = "),n(2329,"span",47),e(2330,"await"),t(),e(2331,` userManager.GetAccessFailedCountAsync(user);
                `),n(2332,"span",47),e(2333,"if"),t(),e(2334," (count == applicationSettings.MaxFailedAccessAttempts - "),n(2335,"span",65),e(2336,"1"),t(),e(2337,`)
                {
                    `),n(2338,"span",47),e(2339,"var"),t(),e(2340," endDate = "),n(2341,"span",47),e(2342,"await"),t(),e(2343,` userManager.GetLockoutEndDateAsync(user);
                    `),n(2344,"span",47),e(2345,"var"),t(),e(2346,` currectDate = DateTimeOffset.UtcNow;
                    `),n(2347,"span",47),e(2348,"if"),t(),e(2349,` (endDate > currectDate)
                    {
                        `),n(2350,"span",47),e(2351,"return"),t(),e(2352," Result<UserResponseEnvelope>.Failure("),n(2353,"span",47),e(2354,"new"),t(),e(2355," Dictionary<"),n(2356,"span",62),e(2357,"string"),t(),e(2358,", "),n(2359,"span",62),e(2360,"string"),t(),e(2361,`[]>
                    {
                        { `),n(2362,"span",50),e(2363,'"lockout_error"'),t(),e(2364,", "),n(2365,"span",47),e(2366,"new"),t(),e(2367,"[] {  "),n(2368,"span",62),e(2369,"string"),t(),e(2370,".Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,"),n(2371,"span",50),e(2372,'""'),t(),e(2373,`) } }
                    });
                    }
                }

                `),n(2374,"span",47),e(2375,"var"),t(),e(2376," passwordValid = "),n(2377,"span",47),e(2378,"await"),t(),e(2379," "),n(2380,"span",47),e(2381,"this"),t(),e(2382,`.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                `),n(2383,"span",47),e(2384,"if"),t(),e(2385,` (!passwordValid)
                {
                    `),n(2386,"span",47),e(2387,"var"),t(),e(2388," accessFailed = "),n(2389,"span",47),e(2390,"await"),t(),e(2391," "),n(2392,"span",47),e(2393,"this"),t(),e(2394,`.userManager.AccessFailedAsync(user);
                    `),n(2395,"span",47),e(2396,"if"),t(),e(2397,` (!accessFailed.Succeeded)
                    {
                        `),n(2398,"span",47),e(2399,"var"),t(),e(2400," errors = "),n(2401,"span",47),e(2402,"new"),t(),e(2403," Dictionary<"),n(2404,"span",62),e(2405,"string"),t(),e(2406,", "),n(2407,"span",62),e(2408,"string"),t(),e(2409,`[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            `),n(2410,"span",47),e(2411,"switch"),t(),e(2412,` (e.Code)
                            {
                                `),n(2413,"span",47),e(2414,"case"),t(),e(2415," "),n(2416,"span",50),e(2417,'"TODO: need to debug e.Code"'),t(),e(2418,`:
                                    e.Description = `),n(2419,"span",62),e(2420,"string"),t(),e(2421,".Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, "),n(2422,"span",50),e(2423,'""'),t(),e(2424,`);
                                    `),n(2425,"span",47),e(2426,"break"),t(),e(2427,`;
                            }

                            e.Description = `),n(2428,"span",62),e(2429,"string"),t(),e(2430,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, `),n(2431,"span",47),e(2432,"new"),t(),e(2433,`[] { e.Description });
                        });

                        `),n(2434,"span",47),e(2435,"return"),t(),e(2436,` Result<UserResponseEnvelope>.Failure(errors);
                    }

                    `),n(2437,"span",47),e(2438,"return"),t(),e(2439," Result<UserResponseEnvelope>.Failure("),n(2440,"span",47),e(2441,"new"),t(),e(2442," Dictionary<"),n(2443,"span",62),e(2444,"string"),t(),e(2445,", "),n(2446,"span",62),e(2447,"string"),t(),e(2448,`[]>
                {
                    { `),n(2449,"span",50),e(2450,'"invalid_error"'),t(),e(2451,", "),n(2452,"span",47),e(2453,"new"),t(),e(2454,`[] { InvalidErrorMessage } }
                });
                }
            }
            `),n(2455,"span",47),e(2456,"else"),t(),e(2457,`
            {
                `),n(2458,"span",47),e(2459,"if"),t(),e(2460," ("),n(2461,"span",47),e(2462,"this"),t(),e(2463,".env.EnvironmentName == "),n(2464,"span",50),e(2465,'"Test"'),t(),e(2466,`)
                {
                    `),n(2467,"span",47),e(2468,"var"),t(),e(2469," passwordValid = "),n(2470,"span",47),e(2471,"await"),t(),e(2472," "),n(2473,"span",47),e(2474,"this"),t(),e(2475,`.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    `),n(2476,"span",47),e(2477,"if"),t(),e(2478,` (!passwordValid)
                    {
                        `),n(2479,"span",47),e(2480,"return"),t(),e(2481," Result<UserResponseEnvelope>.Failure("),n(2482,"span",47),e(2483,"new"),t(),e(2484," Dictionary<"),n(2485,"span",62),e(2486,"string"),t(),e(2487,", "),n(2488,"span",62),e(2489,"string"),t(),e(2490,`[]>
                    {
                        { `),n(2491,"span",50),e(2492,'"invalid_error"'),t(),e(2493,", "),n(2494,"span",47),e(2495,"new"),t(),e(2496,`[] { InvalidErrorMessage } }
                    });
                    }
                }
                `),n(2497,"span",47),e(2498,"else"),t(),e(2499,`
                {
                    `),n(2500,"span",47),e(2501,"return"),t(),e(2502," Result<UserResponseEnvelope>.Failure("),n(2503,"span",47),e(2504,"new"),t(),e(2505," Dictionary<"),n(2506,"span",62),e(2507,"string"),t(),e(2508,", "),n(2509,"span",62),e(2510,"string"),t(),e(2511,`[]>
                {
                    { `),n(2512,"span",50),e(2513,'"lockout_enabled_error"'),t(),e(2514,", "),n(2515,"span",47),e(2516,"new"),t(),e(2517,`[] { LockoutEnabledErrorMessage } }
                });
                }
            }

            `),n(2518,"span",62),e(2519,"string"),t(),e(2520,`? token;
            `),n(2521,"span",47),e(2522,"if"),t(),e(2523," ("),n(2524,"span",47),e(2525,"this"),t(),e(2526,".env.EnvironmentName == "),n(2527,"span",50),e(2528,'"Test"'),t(),e(2529,`)
            {
                token = `),n(2530,"span",50),e(2531,'$"Token: '),n(2532,"span",66),e(2533,"{user.Email}"),t(),e(2534,'"'),t(),e(2535,`;
            }
            `),n(2536,"span",47),e(2537,"else"),t(),e(2538,`
            {
                token = `),n(2539,"span",47),e(2540,"await"),t(),e(2541," "),n(2542,"span",47),e(2543,"this"),t(),e(2544,`.jwtGenerator.GenerateToken(user);
            }
            `),n(2545,"span",47),e(2546,"return"),t(),e(2547," "),n(2548,"span",47),e(2549,"new"),t(),e(2550,` UserResponseEnvelope
            {
                UserJson = `),n(2551,"span",47),e(2552,"new"),t(),e(2553,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
    }
}`),t()(),n(2554,"h2",67)(2555,"span"),e(2556,"Comprehensive Identity Controller Testing"),t(),n(2557,"a",68),e(2558,"#"),t()(),n(2559,"p"),e(2560,"The starting point for our implementation comes from "),n(2561,"a",69),e(2562,"this GitHub repository"),t(),e(2563,". As you can see, MyTested library was created for testing ASP.NET MVC. However, we made some changes and adapted it for testing API controllers with JWT token. First, we added "),n(2564,"code"),e(2565,"WithHeaderAuthorization"),t(),e(2566," method which implements Bearer Header Authorization- a string that starts with the word "),n(2567,"em"),e(2568,"Bearer"),t(),e(2569," and has a valid JWT token. Following is an example of using it:"),t(),n(2570,"pre",45)(2571,"code"),e(2572,"        ["),n(2573,"span",46),e(2574,"Theory"),t(),e(2575,`]
        [`),n(2576,"span",46),e(2577,"MemberData(nameof(RegisterValidData))"),t(),e(2578,`]
        `),n(2579,"span",49)(2580,"span",47),e(2581,"public"),t(),e(2582," "),n(2583,"span",47),e(2584,"void"),t(),e(2585," "),n(2586,"span",48),e(2587,"Update_user_should_return_success_with_token"),t(),e(2588,"("),n(2589,"span",63),e(2590,`
         `),n(2591,"span",62),e(2592,"string"),t(),e(2593,` fullName,
         `),n(2594,"span",62),e(2595,"string"),t(),e(2596,` email,
         `),n(2597,"span",62),e(2598,"string"),t(),e(2599," password"),t(),e(2600,")"),t(),e(2601,`
         => MyMvc
             .Pipeline()
             .ShouldMap(request => request
                .WithMethod(HttpMethod.Put)
                .WithHeaderAuthorization(StaticTestData.GetJwtBearerAdministratorRole(email, `),n(2602,"span",65),e(2603,"1"),t(),e(2604,`))
                .WithLocation(`),n(2605,"span",50),e(2606,'"api/v1.0/identity/update"'),t(),e(2607,`)
                .WithJsonBody(
                     `),n(2608,"span",62),e(2609,"string"),t(),e(2610,".Format("),n(2611,"span",50),e(2612,'@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}"'),t(),e(2613,`,
                         `),n(2614,"span",62),e(2615,"string"),t(),e(2616,".Format(CultureInfo.InvariantCulture, "),n(2617,"span",50),e(2618,'"{0}{1}"'),t(),e(2619,", password, "),n(2620,"span",65),e(2621,"4"),t(),e(2622,`),
                         `),n(2623,"span",62),e(2624,"string"),t(),e(2625,".Format(CultureInfo.InvariantCulture, "),n(2626,"span",50),e(2627,'"{0}{1}"'),t(),e(2628,", fullName, "),n(2629,"span",65),e(2630,"4"),t(),e(2631,`)
                     )
                )
             )
             .To<IdentityController>(c => c.Update(`),n(2632,"span",47),e(2633,"new"),t(),e(2634,` UserUpdateCommand
             {
                 UserJson = `),n(2635,"span",47),e(2636,"new"),t(),e(2637,`()
                 {
                     FullName = `),n(2638,"span",62),e(2639,"string"),t(),e(2640,".Format(CultureInfo.InvariantCulture, "),n(2641,"span",50),e(2642,'"{0}{1}"'),t(),e(2643,", fullName, "),n(2644,"span",65),e(2645,"4"),t(),e(2646,`),
                     Password = `),n(2647,"span",62),e(2648,"string"),t(),e(2649,".Format(CultureInfo.InvariantCulture, "),n(2650,"span",50),e(2651,'"{0}{1}"'),t(),e(2652,", password, "),n(2653,"span",65),e(2654,"4"),t(),e(2655,`),
                 }
             }))
            .Which(controller => controller
                   .WithData(db => db
                        .WithEntities(entities => StaticTestData.GetUsersWithRole(
                            count: `),n(2656,"span",65),e(2657,"3"),t(),e(2658,`,
                            email: email,
                            userName: fullName,
                            password: password,
                            dbContext: entities))))
             .ShouldHave()
             .ActionAttributes(attrs => attrs
                 .RestrictingForHttpMethod(HttpMethod.Put)
                 .RestrictingForAuthorizedRequests())
             .AndAlso()
             .ShouldReturn()
             .ActionResult(result => result.Result(`),n(2659,"span",47),e(2660,"new"),t(),e(2661,` UserResponseEnvelope
             {
                 UserJson = `),n(2662,"span",47),e(2663,"new"),t(),e(2664,`()
                 {
                     Email = `),n(2665,"span",62),e(2666,"string"),t(),e(2667,".Format(CultureInfo.InvariantCulture, "),n(2668,"span",50),e(2669,'"{0}{1}"'),t(),e(2670,", email, "),n(2671,"span",65),e(2672,"1"),t(),e(2673,`),
                     UserName = `),n(2674,"span",62),e(2675,"string"),t(),e(2676,".Format(CultureInfo.InvariantCulture, "),n(2677,"span",50),e(2678,'"{0}{1}"'),t(),e(2679,", fullName, "),n(2680,"span",65),e(2681,"4"),t(),e(2682,`),
                     Token = `),n(2683,"span",50),e(2684,'$"Token: '),n(2685,"span",66),e(2686,"{"),n(2687,"span",62),e(2688,"string"),t(),e(2689,".Format(CultureInfo.InvariantCulture, "),n(2690,"span",50),e(2691,'"{0}{1}"'),t(),e(2692,", email, "),n(2693,"span",65),e(2694,"1"),t(),e(2695,")}"),t(),e(2696,'"'),t(),e(2697,`,
                 }
             }))
             .AndAlso()
             .ShouldPassForThe<ActionAttributes>(attributes =>
             {
                 Assert.Equal(`),n(2698,"span",65),e(2699,"5"),t(),e(2700,`, attributes.Count());
             });`),t()(),n(2701,"p"),e(2702,"To really appreciate the beauty of MyTested, It must be compared to "),n(2703,"a",70),e(2704,"an alternative"),t(),e(2705,` method of testing. With MyTested library, it is very easy to test against endpoint locations, input data in JSON format and output data.
When it comes to JWT authorization, a big amount of testing consists in testing for invalid JWT tokens:`),t(),n(2706,"ul")(2707,"li")(2708,"code"),e(2709,"Update_user_without_authorization_header_should_fail"),t(),e(2710,"- tests when JWT token is absent"),t(),n(2711,"li")(2712,"code"),e(2713,"Update_user_with_altered_authorization_header_should_fail"),t(),e(2714,"- tests when to a valid JWT token is added one character"),t(),n(2715,"li")(2716,"code"),e(2717,"Update_user_with_malformated_authorization_header_should_fail"),t(),e(2718,"- tests when JWT token has format "),n(2719,"code"),e(2720,"a.b"),t()(),n(2721,"li")(2722,"code"),e(2723,"Update_user_with_fake_authorization_header_should_fail"),t(),e(2724,"- tests when JWT token has correct format "),n(2725,"code"),e(2726,"a.b.c"),t(),e(2727," but random characters"),t(),n(2728,"li")(2729,"code"),e(2730,"Update_user_with_incorrect_authorization_header_key_should_fail"),t(),e(2731,"- tests when JWT token is valid but was encrypted with a different key"),t(),n(2732,"li")(2733,"code"),e(2734,"Update_user_with_expired_authorization_header_should_fail"),t(),e(2735,"- tests when a valid JWT token was expired"),t()(),n(2736,"p"),e(2737,`These are the most common case scenarios to test against an invalid JWT token and must be done just for one controller!
MyTested cannot catch 401 error code directly. We found a workaround by using `),n(2738,"a",71),e(2739,"HeaderAuthorizationException"),t(),e(2740,`
In real life, .NET Core 8 will return a 401-error code. We created a series of tests for testing invalid JWT tokens such as:`),t(),n(2741,"pre",45)(2742,"code"),e(2743,"        ["),n(2744,"span",46),e(2745,"Theory"),t(),e(2746,`]
        [`),n(2747,"span",46),e(2748,"MemberData(nameof(RegisterValidData))"),t(),e(2749,`]
        `),n(2750,"span",49)(2751,"span",47),e(2752,"public"),t(),e(2753," "),n(2754,"span",47),e(2755,"void"),t(),e(2756," "),n(2757,"span",48),e(2758,"Update_user_without_authorization_header_should_fail"),t(),e(2759,"("),n(2760,"span",63),e(2761,`
         `),n(2762,"span",62),e(2763,"string"),t(),e(2764,` fullName,
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
         `),n(2765,"span",62),e(2766,"string"),t(),e(2767,` email,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
         `),n(2768,"span",62),e(2769,"string"),t(),e(2770," password"),t(),e(2771,")"),t(),e(2772,`
         => AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
         () =>
         {
             MyMvc
            .Pipeline()
            .ShouldMap(request => request
                .WithMethod(HttpMethod.Put)
                `),n(2773,"span",72),e(2774,"// without WithHeaderAuthorization"),t(),e(2775,`
                .WithLocation(`),n(2776,"span",50),e(2777,'"api/v1.0/identity/update"'),t(),e(2778,`)
                .WithJsonBody(
                     `),n(2779,"span",62),e(2780,"string"),t(),e(2781,".Format("),n(2782,"span",50),e(2783,'@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}"'),t(),e(2784,`,
                         `),n(2785,"span",62),e(2786,"string"),t(),e(2787,".Format(CultureInfo.InvariantCulture, "),n(2788,"span",50),e(2789,'"{0}{1}"'),t(),e(2790,", password, "),n(2791,"span",65),e(2792,"1"),t(),e(2793,`),
                         `),n(2794,"span",62),e(2795,"string"),t(),e(2796,".Format(CultureInfo.InvariantCulture, "),n(2797,"span",50),e(2798,'"{0}{1}"'),t(),e(2799,", fullName, "),n(2800,"span",65),e(2801,"1"),t(),e(2802,`)
                     )
                )
            )
            .To<IdentityController>(c => c.Update(`),n(2803,"span",47),e(2804,"new"),t(),e(2805,` UserUpdateCommand
            {
                UserJson = `),n(2806,"span",47),e(2807,"new"),t(),e(2808,`()
                {
                    FullName = `),n(2809,"span",62),e(2810,"string"),t(),e(2811,".Format(CultureInfo.InvariantCulture, "),n(2812,"span",50),e(2813,'"{0}{1}"'),t(),e(2814,", fullName, "),n(2815,"span",65),e(2816,"1"),t(),e(2817,`),
                    Password = `),n(2818,"span",62),e(2819,"string"),t(),e(2820,".Format(CultureInfo.InvariantCulture, "),n(2821,"span",50),e(2822,'"{0}{1}"'),t(),e(2823,", password, "),n(2824,"span",65),e(2825,"1"),t(),e(2826,`),
                }
            }));

         }, `),n(2827,"span",62),e(2828,"string"),t(),e(2829,".Format(HeaderAuthorizationException.Replace(Environment.NewLine, "),n(2830,"span",50),e(2831,'""'),t(),e(2832,"), "),n(2833,"span",50),e(2834,'"/api/v1.0/identity/update"'),t(),e(2835,", "),n(2836,"span",50),e(2837,'"Update"'),t(),e(2838,", "),n(2839,"span",50),e(2840,'"IdentityController"'),t(),e(2841,"));"),t()(),n(2842,"p"),e(2843,"The full set of tests of "),n(2844,"code"),e(2845,"IdentityController"),t(),e(2846," is on "),n(2847,"a",71),e(2848,"our GitHub repository"),t(),e(2849,"."),t(),n(2850,"h2",73)(2851,"span"),e(2852,"Data Validation with FluentValidation Library"),t(),n(2853,"a",74),e(2854,"#"),t()(),n(2855,"p"),e(2856,"Another change we made to MyTested is adding the possibility of testing data validation. For now, we will give an example of testing using "),n(2857,"a",75),e(2858,"FluentValidation"),t(),e(2859,". Following is an example of testing data validation using modified version of MyTested library:"),t(),n(2860,"pre",45)(2861,"code"),e(2862,"        ["),n(2863,"span",46),e(2864,"Theory"),t(),e(2865,`]
        [`),n(2866,"span",46),e(2867,"InlineData("),n(2868,"span",50),e(2869,'"n"'),t(),e(2870,", "),n(2871,"span",50),e(2872,'"ValidEmail@a.bcde"'),t(),e(2873,", "),n(2874,"span",50),e(2875,'"p"'),t(),e(2876,")"),t(),e(2877,`]
        `),n(2878,"span",49)(2879,"span",47),e(2880,"public"),t(),e(2881," "),n(2882,"span",47),e(2883,"void"),t(),e(2884," "),n(2885,"span",48),e(2886,"Update_user_with_bad_input_should_return_validation_errors"),t(),e(2887,"("),n(2888,"span",63),e(2889,`
         `),n(2890,"span",62),e(2891,"string"),t(),e(2892,` fullName,
         `),n(2893,"span",62),e(2894,"string"),t(),e(2895,` email,
         `),n(2896,"span",62),e(2897,"string"),t(),e(2898," password"),t(),e(2899,")"),t(),e(2900,`
         => AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
         () =>
         {
             MyMvc
             .Pipeline()
             .ShouldMap(request => request
                .WithMethod(HttpMethod.Put)
                .WithHeaderAuthorization(StaticTestData.GetJwtBearerAdministratorRole(email, `),n(2901,"span",65),e(2902,"1"),t(),e(2903,`))
                .WithLocation(`),n(2904,"span",50),e(2905,'"api/v1.0/identity/update"'),t(),e(2906,`)
                .WithJsonBody(
                     `),n(2907,"span",62),e(2908,"string"),t(),e(2909,".Format("),n(2910,"span",50),e(2911,'@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}"'),t(),e(2912,`,
                         `),n(2913,"span",62),e(2914,"string"),t(),e(2915,".Format(CultureInfo.InvariantCulture, "),n(2916,"span",50),e(2917,'"{0}"'),t(),e(2918,`, password),
                         `),n(2919,"span",62),e(2920,"string"),t(),e(2921,".Format(CultureInfo.InvariantCulture, "),n(2922,"span",50),e(2923,'"{0}"'),t(),e(2924,`, fullName)
                     )
                )
             )
             .To<IdentityController>(c => c.Update(`),n(2925,"span",47),e(2926,"new"),t(),e(2927,` UserUpdateCommand
             {
                 UserJson = `),n(2928,"span",47),e(2929,"new"),t(),e(2930,`()
                 {
                     FullName = fullName,
                     Password = password,
                 }
             }))
             .Which(controller => controller
                .WithData(StaticTestData.GetUsers(`),n(2931,"span",65),e(2932,"3"),t(),e(2933,`, email, fullName, password)))
             .ShouldReturn();

         }, `),n(2934,"span",47),e(2935,"new"),t(),e(2936," Dictionary<"),n(2937,"span",62),e(2938,"string"),t(),e(2939,", "),n(2940,"span",62),e(2941,"string"),t(),e(2942,`[]>
            {
            { `),n(2943,"span",50),e(2944,'"UserJson.Password"'),t(),e(2945,", "),n(2946,"span",47),e(2947,"new"),t(),e(2948,"[] { "),n(2949,"span",50),e(2950,`"The length of 'User Json Password' must be at least 16 characters. You entered 1 characters."`),t(),e(2951,` } },
            { `),n(2952,"span",50),e(2953,'"UserJson.FullName"'),t(),e(2954,", "),n(2955,"span",47),e(2956,"new"),t(),e(2957,"[] { "),n(2958,"span",50),e(2959,`"The length of 'User Json Full Name' must be at least 2 characters. You entered 1 characters."`),t(),e(2960,` } },
            });`),t()(),n(2961,"p"),e(2962,"As you can see, now we can test data validation against the validation errors coming from FluentValidation library. Following are "),n(2963,"a",76),e(2964,"three tests"),t(),e(2965," witch test against the constraint that the tag name is unique:"),t(),n(2966,"ul")(2967,"li")(2968,"code"),e(2969,"Create_tag_with_same_name_should_fail_with_validation_error"),t(),e(2970,"- Creates tag with name when the name has already taken."),t(),n(2971,"li")(2972,"code"),e(2973,"Edit_tag_with_same_name_should_fail_with_validation_error"),t(),e(2974,"- Updates tag name when the name has already taken."),t(),n(2975,"li")(2976,"code"),e(2977,"Edit_same_tag_with_same_name_should_return_success_with_data"),t(),e(2978,"- Updates tag name when the name did not change."),t()(),n(2979,"p"),e(2980,"Sometimes, we need to validate against standard .Net services. For example, in the "),n(2981,"code"),e(2982,"IdentityService"),t(),e(2983," from above we have:"),t(),n(2984,"pre",45)(2985,"code"),e(2986,`\u2026
        `),n(2987,"span",47),e(2988,"if"),t(),e(2989," (userRequest.UserJson.FullName != "),n(2990,"span",64),e(2991,"null"),t(),e(2992,`)
            {
                `),n(2993,"span",47),e(2994,"var"),t(),e(2995," identityResult1 = "),n(2996,"span",47),e(2997,"await"),t(),e(2998," "),n(2999,"span",47),e(3e3,"this"),t(),e(3001,`.userManager.SetUserNameAsync(
                     user,
                     userRequest.UserJson.FullName);

                `),n(3002,"span",47),e(3003,"if"),t(),e(3004,` (!identityResult1.Succeeded)
                {
                    `),n(3005,"span",47),e(3006,"var"),t(),e(3007," errors = "),n(3008,"span",47),e(3009,"new"),t(),e(3010," Dictionary<"),n(3011,"span",62),e(3012,"string"),t(),e(3013,", "),n(3014,"span",62),e(3015,"string"),t(),e(3016,`[]>();
                    identityResult1.Errors.ForEach(e =>
                    {
                        `),n(3017,"span",47),e(3018,"switch"),t(),e(3019,` (e.Code)
                        {
                            `),n(3020,"span",47),e(3021,"case"),t(),e(3022," "),n(3023,"span",50),e(3024,'"InvalidUserName"'),t(),e(3025,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),n(3026,"span",47),e(3027,"break"),t(),e(3028,`;
                        }
                        errors.Add(e.Code, `),n(3029,"span",47),e(3030,"new"),t(),e(3031,`[] { e.Description });
                    });

                    `),n(3032,"span",47),e(3033,"return"),t(),e(3034,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }
\u2026`),t()(),n(3035,"p")(3036,"a",77),e(3037,"Here"),t(),e(3038," is the test:"),t(),n(3039,"ul")(3040,"li")(3041,"code"),e(3042,"Update_user_with_incorrect_user_name_should_fail"),t(),e(3043,"- Tests against the username implemented in "),n(3044,"code"),e(3045,"UserManager<User>"),t(),e(3046,"."),t()(),n(3047,"h2",78)(3048,"span"),e(3049,"Conclusion"),t(),n(3050,"a",79),e(3051,"#"),t()(),n(3052,"p"),e(3053,"In this article, we gave a common example of a .NET Core "),n(3054,"code"),e(3055,"Identity"),t(),e(3056," controller, implemented a common "),n(3057,"code"),e(3058,"User Identity"),t(),e(3059," service based on "),n(3060,"code"),e(3061,"UserManager<User>"),t(),e(3062,", and showed a comprehensive "),n(3063,"code"),e(3064,"Identity"),t(),e(3065," controller testing using MyTested library. From multiple examples, we can see how easy is to test against endpoint locations, input data as JSON strings, and output data. In addition, we showed a lot of examples for data validation against the validation errors coming from "),n(3066,"code"),e(3067,"FluentValidation"),t(),e(3068,` library.
It is important to note, that having a detailed testing of API controllers based on MyTested library, gives us the possibility to debug .NET Core applications in Visual Studio 2022. For example, we can set a breakpoint in our application, go to test panel, find a MyTested test, and click Debug instead on Run.
The Markdown version of this article and the compiled code of our .NET Core 8 application can be found on `),n(3069,"a",37),e(3070,"our GitHub repository"),t(),e(3071,"."),t(),n(3072,"h2",80)(3073,"span"),e(3074,"Credits"),t(),n(3075,"a",81),e(3076,"#"),t()(),n(3077,"ul")(3078,"li")(3079,"a",82),e(3080,"Ivaylo Kenov"),t()(),n(3081,"li")(3082,"a",83),e(3083,"Kalin Tsenkov"),t()(),n(3084,"li")(3085,"a",84),e(3086,"Steve Smith"),t()(),n(3087,"li")(3088,"a",85),e(3089,"Jason Taylor"),t()(),n(3090,"li")(3091,"a",86),e(3092,"Stefan Prodan"),t()(),n(3093,"li")(3094,"a",87),e(3095,"Mark Cilia Vincenti"),t()(),n(3096,"li")(3097,"a",88),e(3098,"Jimmy Bogard"),t()(),n(3099,"li")(3100,"a",89),e(3101,"Ben Morris"),t()()(),ft(),t()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),J("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,Si)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,W,j,O,L,I,P,D,F,U,V,H,B,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var gi=()=>({standalone:!0});function fi(a,s){if(a&1){let i=_();b(0),n(1,"a",68),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",69),d(3,"nz-icon",70),t()(),w()}}function bi(a,s){if(a&1){let i=_();b(0),n(1,"a",68),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",69),e(3,"Alexei Cioina's blog"),t()(),w()}}var In=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-about-this-blog"]],viewQuery:function(l,r){if(l&1&&R(y,7),l&2){let o;N(o=M())&&(r.affixEl=o.first)}},decls:481,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-375bae567e442b3aaffb4ff7fb6f6290","nzTitle","Generate Posts from Markdown Files"],["nzHref","#h-9ee0998d20e8918a0353459c822be833","nzTitle","Generate Static Syntax Highlighting"],["nzHref","#h-ae84e8a9827ba10eaf0c302cce6516ff","nzTitle","Deploy to a Cloud Platform"],["nzHref","#h-0ac07f265ac9e3a83dc1fb1d75e2079c","nzTitle","Simulate Static Content"],["nzHref","#h-3d814a590e1db6de636f3c2fc37cac08","nzTitle","Markdown Extension"],["nzHref","#h-d748b3e2a7d5e33441fd51f0bd59c938","nzTitle","Blog Listing"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241008-about-this-blog.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[1,"pic-plus"],["nz-icon","","nzType","custom:zorro","nzWidth","180px","nzHeight","180px"],["nz-icon","","nzType","custom:angular","nzWidth","180px","nzHeight","180px"],["nz-icon","","nzType","custom:ng-zorro","nzWidth","180px","nzHeight","180px"],["id","h-375bae567e442b3aaffb4ff7fb6f6290"],["onclick","window.location.hash = 'h-375bae567e442b3aaffb4ff7fb6f6290'",1,"anchor"],["href","https://github.com/cioina/alexei-cioina.b9ad.pro-us-east-1.openshiftapps.com/tree/main/posts","target","_blank","rel","noopener"],["id","h-9ee0998d20e8918a0353459c822be833"],["onclick","window.location.hash = 'h-9ee0998d20e8918a0353459c822be833'",1,"anchor"],[1,"language-javascript"],[1,"hljs-keyword"],[1,"hljs-built_in"],[1,"hljs-string"],[1,"hljs-title","function_"],[1,"hljs-params"],[1,"hljs-function"],[1,"hljs-literal"],[1,"hljs-title","class_"],[1,"hljs-regexp"],[1,"hljs-variable","language_"],[1,"hljs-property"],["id","h-ae84e8a9827ba10eaf0c302cce6516ff"],["onclick","window.location.hash = 'h-ae84e8a9827ba10eaf0c302cce6516ff'",1,"anchor"],["href","https://www.openshift.com/products/online/","target","_blank","rel","noopener"],["href","https://docs.openshift.com/container-platform/3.11/architecture/core_concepts/builds_and_image_streams.html#source-build","target","_blank","rel","noopener"],["href","https://docs.openshift.com/container-platform/3.11/dev_guide/deployments/deployment_strategies.html#recreate-strategy","target","_blank","rel","noopener"],["id","h-0ac07f265ac9e3a83dc1fb1d75e2079c"],["onclick","window.location.hash = 'h-0ac07f265ac9e3a83dc1fb1d75e2079c'",1,"anchor"],["href","https://github.com/dwightwatson/dwightwatson.com","target","_blank","rel","noopener"],["href","https://github.com/dwightwatson/neontsunami-laravel","target","_blank","rel","noopener"],["href","https://github.com/dwightwatson/neontsunami-laravel/blob/master/resources/views/posts/show.blade.php","target","_blank","rel","noopener"],["href","https://github.com/cioina/neontsunami","target","_blank","rel","noopener"],["href","https://laravel.com/docs/8.x/octane","target","_blank","rel","noopener"],["id","h-3d814a590e1db6de636f3c2fc37cac08"],["onclick","window.location.hash = 'h-3d814a590e1db6de636f3c2fc37cac08'",1,"anchor"],[1,"language-html"],[1,"hljs-tag"],[1,"hljs-name"],[1,"hljs-attr"],["href","https://mdxjs.com/","target","_blank","rel","noopener"],["id","h-d748b3e2a7d5e33441fd51f0bd59c938"],["onclick","window.location.hash = 'h-d748b3e2a7d5e33441fd51f0bd59c938'",1,"anchor"],["href","https://github.com/AndyT2503/angular-conduit-signals","target","_blank","rel","noopener"],["href","https://github.com/alexeymezenin/laravel-realworld-example-app","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,fi,4,0,"ng-container",5)(6,bi,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),G("ngModelChange",function(h){return Q(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17),t()(),n(22,"span",18),e(23," About This Blog"),d(24,"span",19)(25,"span",20),n(26,"a",21),d(27,"nz-icon",22),t()(),n(28,"article",23)(29,"div",24),d(30,"span",25),n(31,"span"),e(32,"+"),t(),d(33,"span",26),n(34,"span"),e(35,"="),t(),d(36,"span",27),t(),n(37,"p"),e(38,"Here we've built a blog that is able to:"),t(),n(39,"ul")(40,"li"),e(41,"Generate posts from markdown files"),t(),n(42,"li"),e(43,"Generate static syntax highlighting"),t(),n(44,"li"),e(45,"Deploy to a cloud platform"),t(),n(46,"li"),e(47,"Simulate static content"),t()(),n(48,"h2",28)(49,"span"),e(50,"Generate Posts from Markdown Files"),t(),n(51,"a",29),e(52,"#"),t()(),n(53,"p"),e(54,"We use a "),n(55,"code"),e(56,"ng-zorro-antd"),t(),e(57," Node.js script to generate compiled Angular modules from "),n(58,"a",30),e(59,"a set of markdown files"),t(),e(60,`.
Each post represents a compiled JavaScrip file that loads via lazy-loading. The content of a markdown file is included into compiled Angular module witch is smaller than a generated static HTML.`),t(),n(61,"h2",31)(62,"span"),e(63,"Generate Static Syntax Highlighting"),t(),n(64,"a",32),e(65,"#"),t()(),n(66,"p"),e(67,"To generate static syntax highlighting (which is static HTML,) we use "),n(68,"code"),e(69,"prismjs"),t(),e(70," on Node.js. This way, we do not need to include "),n(71,"code"),e(72,"prismjs"),t(),e(73," JavaScript in our web application."),t(),n(74,"pre",33)(75,"code")(76,"span",34),e(77,"const"),t(),e(78," fs = "),n(79,"span",35),e(80,"require"),t(),e(81,"("),n(82,"span",36),e(83,"'fs'"),t(),e(84,`);
`),n(85,"span",34),e(86,"const"),t(),e(87," path = "),n(88,"span",35),e(89,"require"),t(),e(90,"("),n(91,"span",36),e(92,"'path'"),t(),e(93,`);

`),n(94,"span",34),e(95,"function"),t(),e(96," "),n(97,"span",37),e(98,"uniq"),t(),e(99,"("),n(100,"span",38),e(101,"arr"),t(),e(102,`) {
  `),n(103,"span",34),e(104,"const"),t(),e(105," set = arr."),n(106,"span",37),e(107,"reduce"),t(),e(108,"("),n(109,"span",39),e(110,"("),n(111,"span",38),e(112,"set, item"),t(),e(113,") =>"),t(),e(114,` {
    set[item] = `),n(115,"span",40),e(116,"true"),t(),e(117,`;
    `),n(118,"span",34),e(119,"return"),t(),e(120,` set;
  }, {});
  `),n(121,"span",34),e(122,"return"),t(),e(123," "),n(124,"span",41),e(125,"Object"),t(),e(126,"."),n(127,"span",37),e(128,"keys"),t(),e(129,`(set);
}

`),n(130,"span",34),e(131,"const"),t(),e(132," prismCore = "),n(133,"span",36),e(134,"'../../node-prismjs/components/prism-core.js'"),t(),e(135,`;
`),n(136,"span",34),e(137,"const"),t(),e(138," "),n(139,"span",41),e(140,"Prism"),t(),e(141," = "),n(142,"span",35),e(143,"require"),t(),e(144,`(prismCore);

`),n(145,"span",34),e(146,"const"),t(),e(147,` prelude = [
  `),n(148,"span",36),e(149,"'prism-markup'"),t(),e(150,`,
  `),n(151,"span",36),e(152,"'prism-css'"),t(),e(153,`,
  `),n(154,"span",36),e(155,"'prism-clike'"),t(),e(156,`,
  `),n(157,"span",36),e(158,"'prism-javascript'"),t(),e(159,`,
  `),n(160,"span",36),e(161,"'prism-css-extras'"),t(),e(162,`,
  `),n(163,"span",36),e(164,"'prism-json'"),t(),e(165,`,
  `),n(166,"span",36),e(167,"'prism-markup-templating'"),t(),e(168,`,
  `),n(169,"span",36),e(170,"'prism-php'"),t(),e(171,`,
  `),n(172,"span",36),e(173,"'prism-php-extras'"),t(),e(174,`,
  `),n(175,"span",36),e(176,"'prism-typescript'"),t(),e(177,`,
];

`),n(178,"span",34),e(179,"const"),t(),e(180," prismComponents = path."),n(181,"span",37),e(182,"dirname"),t(),e(183,"("),n(184,"span",35),e(185,"require"),t(),e(186,"."),n(187,"span",37),e(188,"resolve"),t(),e(189,`(prismCore));
`),n(190,"span",34),e(191,"const"),t(),e(192,` components = prelude
  .`),n(193,"span",37),e(194,"concat"),t(),e(195,"(fs."),n(196,"span",37),e(197,"readdirSync"),t(),e(198,`(prismComponents))
  .`),n(199,"span",37),e(200,"map"),t(),e(201,"("),n(202,"span",39)(203,"span",38),e(204,"component"),t(),e(205," =>"),t(),e(206," component."),n(207,"span",37),e(208,"replace"),t(),e(209,"("),n(210,"span",42),e(211,"/(\\.min)?\\.js$/"),t(),e(212,", "),n(213,"span",36),e(214,"''"),t(),e(215,`));

`),n(216,"span",34),e(217,"const"),t(),e(218," componentsSet = "),n(219,"span",37),e(220,"uniq"),t(),e(221,`(components);
componentsSet.`),n(222,"span",37),e(223,"forEach"),t(),e(224,"("),n(225,"span",39)(226,"span",38),e(227,"component"),t(),e(228," =>"),t(),e(229,` {
  `),n(230,"span",35),e(231,"require"),t(),e(232,"(path."),n(233,"span",37),e(234,"join"),t(),e(235,`(prismComponents, component));
});

`),n(236,"span",43),e(237,"module"),t(),e(238,"."),n(239,"span",44),e(240,"exports"),t(),e(241," = "),n(242,"span",41),e(243,"Prism"),t(),e(244,";"),t()(),n(245,"h2",45)(246,"span"),e(247,"Deploy to a Cloud Platform"),t(),n(248,"a",46),e(249,"#"),t()(),n(250,"p"),e(251,"We use Red Hat "),n(252,"a",47),e(253,"OpenShift Online"),t(),e(254,` public cloud
with `),n(255,"a",48),e(256,"Source-to-Image"),t(),e(257,` (S2I) build
and `),n(258,"a",49),e(259,"Recreate Strategy"),t(),e(260," with less than 60 seconds downtime."),t(),n(261,"h2",50)(262,"span"),e(263,"Simulate Static Content"),t(),n(264,"a",51),e(265,"#"),t()(),n(266,"p"),e(267,"We've found "),n(268,"a",52),e(269,"a GitHub repository"),t(),e(270,` that satisfies all 4 conditions. Well, in fact, it generates a static website, so condition 4 is not
just simulated. In contrast, `),n(271,"a",53),e(272,"this GitHub repository"),t(),e(273,` uses Laravel's Blade template and a MySQL database to
`),n(274,"a",54),e(275,"generate posts"),t(),e(276,` on the server-side. It means that every time you access a post,
your web browser makes a request to the server and the server will get the content from the database and render HTML (BTW, `),n(277,"a",55),e(278,"here"),t(),e(279," is a version adapted for OpenShift.) Even if Blade caches the result, every request creates a connection to the database (We do not consider "),n(280,"a",56),e(281,"Laravel Octane"),t(),e(282," here.) Static websites do not need a database and the content is cached on the user's side. So, the user makes less requests to the server."),t(),n(283,"p"),e(284,"How do we simulate static content? All posts from this blog are Angular compiled JavaScript files that are cached on the user's side."),t(),n(285,"h2",57)(286,"span"),e(287,"Markdown Extension"),t(),n(288,"a",58),e(289,"#"),t()(),n(290,"p"),e(291,"While transforming a markdown file into an Angular component and module, we implemented a markdown extension that will create a navigation menue from all heading lines of a markdown file. In addition, we implemented the posibility to include a code block with a special name "),n(292,"code"),e(293,"angular-template-block"),t(),e(294," to be iterpreded as a part of the Angular template. The code block below, will be included in the generated Angular component as a parth of the template."),t(),n(295,"pre",59)(296,"code")(297,"span",60),e(298,"<"),n(299,"span",61),e(300,"div"),t(),e(301," "),n(302,"span",62),e(303,"class"),t(),e(304,"="),n(305,"span",36),e(306,'"pic-plus"'),t(),e(307,">"),t(),e(308,`
  `),n(309,"span",60),e(310,"<"),n(311,"span",61),e(312,"span"),t(),e(313," "),n(314,"span",62),e(315,"nz-icon"),t(),e(316," "),n(317,"span",62),e(318,"nzType"),t(),e(319,"="),n(320,"span",36),e(321,'"custom:zorro"'),t(),e(322," "),n(323,"span",62),e(324,"nzWidth"),t(),e(325,"="),n(326,"span",36),e(327,'"180px"'),t(),e(328," "),n(329,"span",62),e(330,"nzHeight"),t(),e(331,"="),n(332,"span",36),e(333,'"180px"'),t(),e(334,">"),t(),n(335,"span",60),e(336,"</"),n(337,"span",61),e(338,"span"),t(),e(339,">"),t(),e(340,`
  `),n(341,"span",60),e(342,"<"),n(343,"span",61),e(344,"span"),t(),e(345,">"),t(),e(346,"+"),n(347,"span",60),e(348,"</"),n(349,"span",61),e(350,"span"),t(),e(351,">"),t(),e(352,`
  `),n(353,"span",60),e(354,"<"),n(355,"span",61),e(356,"span"),t(),e(357," "),n(358,"span",62),e(359,"nz-icon"),t(),e(360," "),n(361,"span",62),e(362,"nzType"),t(),e(363,"="),n(364,"span",36),e(365,'"custom:angular"'),t(),e(366," "),n(367,"span",62),e(368,"nzWidth"),t(),e(369,"="),n(370,"span",36),e(371,'"180px"'),t(),e(372," "),n(373,"span",62),e(374,"nzHeight"),t(),e(375,"="),n(376,"span",36),e(377,'"180px"'),t(),e(378,">"),t(),n(379,"span",60),e(380,"</"),n(381,"span",61),e(382,"span"),t(),e(383,">"),t(),e(384,`
  `),n(385,"span",60),e(386,"<"),n(387,"span",61),e(388,"span"),t(),e(389,">"),t(),e(390,"="),n(391,"span",60),e(392,"</"),n(393,"span",61),e(394,"span"),t(),e(395,">"),t(),e(396,`
  `),n(397,"span",60),e(398,"<"),n(399,"span",61),e(400,"span"),t(),e(401,`
    `),n(402,"span",62),e(403,"nz-icon"),t(),e(404,`
    `),n(405,"span",62),e(406,"nzType"),t(),e(407,"="),n(408,"span",36),e(409,'"custom:ng-zorro"'),t(),e(410,`
    `),n(411,"span",62),e(412,"nzWidth"),t(),e(413,"="),n(414,"span",36),e(415,'"180px"'),t(),e(416,`
    `),n(417,"span",62),e(418,"nzHeight"),t(),e(419,"="),n(420,"span",36),e(421,'"180px"'),t(),e(422,`
  >`),t(),n(423,"span",60),e(424,"</"),n(425,"span",61),e(426,"span"),t(),e(427,">"),t(),e(428,`
`),n(429,"span",60),e(430,"</"),n(431,"span",61),e(432,"div"),t(),e(433,">"),t()()(),n(434,"p"),e(435,"For more complex markdown format extensions, please visit "),n(436,"a",63),e(437,"MDX 2!"),t()(),n(438,"h2",64)(439,"span"),e(440,"Blog Listing"),t(),n(441,"a",65),e(442,"#"),t()(),n(443,"p"),e(444,"Client-side listing api is based on "),n(445,"a",66),e(446,"this GitHub repository"),t(),e(447," and server-side is similar to "),n(448,"a",67),e(449,"this GitHub repository"),t()(),n(450,"p"),e(451,"As you can see, we use a lot of "),n(452,"code"),e(453,"ng-zorro-antd"),t(),e(454," Angular components:"),t(),n(455,"ul")(456,"li")(457,"code"),e(458,"nz-list"),t(),e(459,", "),n(460,"code"),e(461,"nz-pagination"),t(),e(462,", "),n(463,"code"),e(464,"nz-image"),t(),e(465,", "),n(466,"code"),e(467,"nz-transfer"),t(),e(468,", "),n(469,"code"),e(470,"nz-select"),t(),e(471,", "),n(472,"code"),e(473,"nz-table"),t(),e(474,", and more"),t(),n(475,"li")(476,"code"),e(477,"NzDrawerService"),t(),e(478,", "),n(479,"code"),e(480,"NzDrawerRef"),t()()()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),J("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,gi)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,W,j,O,L,I,P,D,F,U,V,H,B,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var wi=()=>({standalone:!0});function _i(a,s){if(a&1){let i=_();b(0),n(1,"a",94),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",95),d(3,"nz-icon",96),t()(),w()}}function zi(a,s){if(a&1){let i=_();b(0),n(1,"a",94),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",95),e(3,"Alexei Cioina's blog"),t()(),w()}}var Ln=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-test-readme"]],viewQuery:function(l,r){if(l&1&&R(y,7),l&2){let o;N(o=M())&&(r.affixEl=o.first)}},decls:437,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-5a4865611d30c4d0ac6cdff755948150","nzTitle","MyTested Library Out of The Box"],["nzHref","#h-dacb62dd70222911e575fe6bc62bd073","nzTitle","Basic API Controller Testing"],["nzHref","#h-3505cd435c8f4001d7e7ef30f366a87f","nzTitle","Data Validation with FluentValidation Library"],["nzHref","#h-adda9d19dcc5465fd2fd1976110cca26","nzTitle","Exception Testing"],["nzHref","#h-7aa876f065cdeedf68f8ddc07088167f","nzTitle","Identity Controller Testing"],["nzHref","#h-f6950690e976c659a87214d8a73e4757","nzTitle","Advanced Testing with Mytested Library"],["nzHref","#h-ff4316b63dd50be58ed564565963d5f9","nzTitle","MyTested Library Limitations"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241009-test-readme.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://github.com/cioina/cioina.azurewebsites.net","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore","target","_blank","rel","noopener"],["id","h-5a4865611d30c4d0ac6cdff755948150"],["onclick","window.location.hash = 'h-5a4865611d30c4d0ac6cdff755948150'",1,"anchor"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs","target","_blank","rel","noopener"],[1,"language-csharp"],[1,"hljs-meta"],[1,"hljs-keyword"],[1,"hljs-title"],[1,"hljs-function"],[1,"hljs-string"],["id","h-dacb62dd70222911e575fe6bc62bd073"],["onclick","window.location.hash = 'h-dacb62dd70222911e575fe6bc62bd073'",1,"anchor"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Endpoints/TodoLists.cs","target","_blank","rel","noopener"],["href","https://github.com/EdiWang/Moonglade/blob/master/src/Moonglade.Web/Controllers/TagsController.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Tags/TagsController.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/TagsController.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Web.csproj","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/specification.json","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs","target","_blank","rel","noopener"],["id","h-3505cd435c8f4001d7e7ef30f366a87f"],["onclick","window.location.hash = 'h-3505cd435c8f4001d7e7ef30f366a87f'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Articles/EditTests.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Application.UnitTests/Common/Exceptions/ValidationExceptionTests.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Web.AcceptanceTests/StepDefinitions/LoginStepDefinitions.cs","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Common/AuthorCommandValidator.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Users/Create.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Application/TodoLists/Commands/UpdateTodoList/UpdateTodoListCommandValidator.cs","target","_blank","rel","noopener"],[1,"language-json"],[1,"hljs-punctuation"],[1,"hljs-attr"],["id","h-adda9d19dcc5465fd2fd1976110cca26"],["onclick","window.location.hash = 'h-adda9d19dcc5465fd2fd1976110cca26'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Domain/Common/BaseDomainException.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Middleware/ValidationExceptionHandlerMiddleware.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs","target","_blank","rel","noopener"],["id","h-7aa876f065cdeedf68f8ddc07088167f"],["onclick","window.location.hash = 'h-7aa876f065cdeedf68f8ddc07088167f'",1,"anchor"],["href","https://cioina.azurewebsites.net/articles/dotnet-core-testing#h-f5dcf3f1743665e0100f5e709e3971acd67ebe05","target","_blank","rel","noopener"],["id","h-f6950690e976c659a87214d8a73e4757"],["onclick","window.location.hash = 'h-f6950690e976c659a87214d8a73e4757'",1,"anchor"],["href","https://cioina.azurewebsites.net/articles/ratelimit-middleware#h-a90d2c17e9a232581a789c637804ea076f23460a","target","_blank","rel","noopener"],["id","h-ff4316b63dd50be58ed564565963d5f9"],["onclick","window.location.hash = 'h-ff4316b63dd50be58ed564565963d5f9'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/tree/main/src/Server","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/tree/master/src/Conduit","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/tree/main/src","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test","target","_blank","rel","noopener"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/ivaylokenov","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov","target","_blank","rel","noopener"],["href","https://github.com/ardalis","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev","target","_blank","rel","noopener"],["href","https://github.com/stefanprodan","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti","target","_blank","rel","noopener"],["href","https://github.com/jbogard","target","_blank","rel","noopener"],["href","https://github.com/BenMorris","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,_i,4,0,"ng-container",5)(6,zi,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),G("ngModelChange",function(h){return Q(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20),t()(),n(25,"span",21),e(26," MyTested Test Project Example"),d(27,"span",22)(28,"span",23),n(29,"a",24),d(30,"nz-icon",25),t()(),n(31,"article",26)(32,"h2",27)(33,"span"),e(34,"Introduction"),t(),n(35,"a",28),e(36,"#"),t()(),n(37,"p"),e(38,"The compiled code of our .NET Core 8 application is on "),n(39,"a",29),e(40,"our GitHub repository"),t(),e(41,". For this test project, which is part our application, we will use "),n(42,"a",30),e(43,"MyTested"),t(),e(44," - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 9 project is based on "),n(45,"a",31),e(46,"BookStore"),t(),e(47," repository and adapted to work with MyTested library."),t(),n(48,"h2",32)(49,"span"),e(50,"MyTested Library Out of The Box"),t(),n(51,"a",33),e(52,"#"),t()(),n(53,"p"),e(54,"I found out about MyTested for the first time from "),n(55,"a",34),e(56,"BlazorShop"),t(),e(57," repository. At the same time, I found out about "),n(58,"code"),e(59,"Jwt Authentication"),t(),e(60," implementation from same "),n(61,"a",35),e(62,"BlazorShop"),t(),e(63," repository and from "),n(64,"a",36),e(65,"aspnetcore-realworld-example"),t(),e(66," repository. Both "),n(67,"code"),e(68,"Jwt Authentication"),t(),e(69," implementations did not work with original "),n(70,"a",30),e(71,"MyTested"),t(),e(72," library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was only able to add some small pieces of code to make MyTested and my own "),n(73,"code"),e(74,"Jwt Authentication"),t(),e(75," implementation work and not to break any original MyTested tests. One interesting idea of JWT token implementation together with refresh token is on "),n(76,"a",37),e(77,"EdiWang"),t(),e(78,` GitHub repository.
But, what MyTested can do out of the box? The best answer is in `),n(79,"a",38),e(80,"MusicStore"),t(),e(81," testing project. For the API controller, "),n(82,"a",39),e(83,"here"),t(),e(84," is an example:"),t(),n(85,"pre",40)(86,"code")(87,"span",41),e(88,"#"),n(89,"span",42),e(90,"if"),t(),e(91," DEBUG"),t(),e(92,`
`),n(93,"span",42),e(94,"using"),t(),e(95,` BlogAngular.Application.Common.Version;
`),n(96,"span",42),e(97,"using"),t(),e(98,` BlogAngular.Web.Features;
`),n(99,"span",42),e(100,"using"),t(),e(101,` MyTested.AspNetCore.Mvc;
`),n(102,"span",42),e(103,"using"),t(),e(104,` Xunit;

`),n(105,"span",42),e(106,"namespace"),t(),e(107," "),n(108,"span",43),e(109,"BlogAngular.Test.Routing"),t(),e(110,`
{
    `),n(111,"span",42),e(112,"public"),t(),e(113," "),n(114,"span",42),e(115,"class"),t(),e(116," "),n(117,"span",43),e(118,"FrontEndRouteTest"),t(),e(119,`
    {
        [`),n(120,"span",41),e(121,"Fact"),t(),e(122,`]
        `),n(123,"span",44)(124,"span",42),e(125,"public"),t(),e(126," "),n(127,"span",42),e(128,"void"),t(),e(129," "),n(130,"span",43),e(131,"VersionShouldBeRouted"),t(),e(132,"()"),t(),e(133,`
            => MyMvc
            .Pipeline()
            .ShouldMap(request => request
                .WithMethod(HttpMethod.Get)
                .WithLocation(`),n(134,"span",45),e(135,'"api/v1.0/version"'),t(),e(136,`))
            .To<VersionController>(c => c.Index())
            .Which()
            .ShouldReturn()
            .ActionResult(result => result.Result(`),n(137,"span",42),e(138,"new"),t(),e(139,` VersionResponseEnvelope
            {
                VersionJson = `),n(140,"span",42),e(141,"new"),t(),e(142,` VersionResponseModel()
            }));
    }
}
`),n(143,"span",41),e(144,"#"),n(145,"span",42),e(146,"endif"),t()(),e(147,`
`),t()(),n(148,"h2",46)(149,"span"),e(150,"Basic API Controller Testing"),t(),n(151,"a",47),e(152,"#"),t()(),n(153,"p"),e(154,"There are different ways to define API controllers: "),n(155,"a",48),e(156,"CleanArchitecture"),t(),e(157,", "),n(158,"a",49),e(159,"Moonglade"),t(),e(160,", "),n(161,"a",50),e(162,"Conduit"),t(),e(163,", and "),n(164,"a",51),e(165,"this one"),t(),e(166,". The main reason we implemented API control in a certain way is "),n(167,"a",52),e(168,"NSwag.AspNetCore and NSwag.MSBuild"),t(),e(169," which we use just in Debug mode to generate "),n(170,"a",53),e(171,"specification.json"),t(),e(172,". "),n(173,"code"),e(174,"NSwag"),t(),e(175,` tool is \u201Cvery sensitive\u201D to how API controllers look.
By basic API controller testing, we mean at least one test per CRUD concept.
`),n(176,"a",54),e(177,"Here"),t(),e(178," is an example:"),t(),n(179,"ul")(180,"li")(181,"code"),e(182,"Create_tag_should_return_success_with_data"),t(),e(183,"- Create"),t(),n(184,"li")(185,"code"),e(186,"Listing_tags_without_url_parameters_should_return_success_with_all_tags"),t(),e(187,"- Read"),t(),n(188,"li")(189,"code"),e(190,"Edit_tag_should_return_success_with_data"),t(),e(191,"- Update"),t(),n(192,"li")(193,"code"),e(194,"Delete_tag_should_return_success_with_tag_id"),t(),e(195," - Delete"),t()(),n(196,"h2",55)(197,"span"),e(198,"Data Validation with FluentValidation Library"),t(),n(199,"a",56),e(200,"#"),t()(),n(201,"p"),e(202,"A particular change we made to MyTested is adding the possibility of testing data validation. In fact, now, we can implement all following tests: "),n(203,"a",57),e(204,"BookStore"),t(),e(205,", "),n(206,"a",58),e(207,"RealWorld"),t(),e(208,", "),n(209,"a",59),e(210,"CleanArchitecture1"),t(),e(211,", and "),n(212,"a",60),e(213,"CleanArchitecture2"),t(),e(214," in a set of beautiful tests. "),n(215,"a",54),e(216,"Here"),t(),e(217," are examples of testing data validation using modified version of MyTested library:"),t(),n(218,"ul")(219,"li")(220,"code"),e(221,"Create_tag_with_one_char_should_return_validation_error"),t(),e(222,"- Creates tag name length bellow allowed by database constraint"),t(),n(223,"li")(224,"code"),e(225,"Create_tag_with_max_chars_should_return_validation_error"),t(),e(226,"- Creates tag name length above allowed by database constraint"),t(),n(227,"li")(228,"code"),e(229,"Edit_tag_with_one_char_should_return_validation_error"),t(),e(230,"- Updates tag name length bellow allowed by database constraint"),t(),n(231,"li")(232,"code"),e(233,"Edit_tag_with_max_chars_should_return_validation_error"),t(),e(234," - Updates tag name length above allowed by database constraint"),t()(),n(235,"p"),e(236,"Our validation implementation is based mostly on "),n(237,"a",61),e(238,"BookStore"),t(),e(239,". One useful technique to validate unique data comes from "),n(240,"a",62),e(241,"Conduit"),t(),e(242," and "),n(243,"a",63),e(244,"CleanArchitecture"),t(),e(245,". Following are "),n(246,"a",54),e(247,"three tests"),t(),e(248," with the constraint that the tag name is unique:"),t(),n(249,"ul")(250,"li")(251,"code"),e(252,"Create_tag_with_same_name_should_fail_with_validation_error"),t(),e(253,"- Creates tag with name when the name has already taken."),t(),n(254,"li")(255,"code"),e(256,"Edit_tag_with_same_name_should_fail_with_validation_error"),t(),e(257,"- Updates tag name when the name has already taken."),t(),n(258,"li")(259,"code"),e(260,"Edit_same_tag_with_same_name_should_return_success_with_data"),t(),e(261,"- Updates tag name when the name did not change."),t()(),n(262,"p"),e(263,"In "),n(264,"a",29),e(265,"our application"),t(),e(266,", any "),n(267,"code"),e(268,"MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException"),t(),e(269," will return 422 with JSON string similar to this:"),t(),n(270,"pre",64)(271,"code")(272,"span",65),e(273,"{"),t(),e(274,`
   `),n(275,"span",66),e(276,'"TagJson.Title"'),t(),n(277,"span",65),e(278,":"),t(),e(279,"  "),n(280,"span",65),e(281,"["),t(),n(282,"span",45),e(283,`"The length of 'Tag Json Title' must be 420 characters or fewer. You entered 421 characters."`),t(),n(284,"span",65),e(285,"]"),t(),e(286,`
`),n(287,"span",65),e(288,"}"),t()()(),n(289,"p"),e(290,"That represents a standard validation message from "),n(291,"code"),e(292,"FluentValidation"),t(),e(293," library which can be customized."),t(),n(294,"h2",67)(295,"span"),e(296,"Exception Testing"),t(),n(297,"a",68),e(298,"#"),t()(),n(299,"p"),e(300,"In our application, we use "),n(301,"code"),e(302,"Ardalis.GuardClauses.NotFoundException"),t(),e(303," instead of "),n(304,"a",69),e(305,"BaseDomainException"),t(),e(306,". In addition, we use "),n(307,"a",70),e(308,"ValidationExceptionHandlerMiddleware"),t(),e(309," to intercept all validation exceptions that return "),n(310,"code"),e(311,"HttpStatusCode.UnprocessableEntity"),t(),e(312,"(422). Unfortunately, MyTested does not work with the middleware concept. But, we can use "),n(313,"code"),e(314,"MyTested.AspNetCore.Mvc.Exceptions.InvocationAssertionException"),t(),e(315," and "),n(316,"a",71),e(317,"FromNotFoundException"),t(),e(318," to test against two common exceptions:"),t(),n(319,"ul")(320,"li")(321,"code"),e(322,"Edit_tag_with_wrong_id_should_fail"),t(),e(323,"- The tag with the specified id does not exist in the database."),t(),n(324,"li")(325,"code"),e(326,"Update_user_with_malformated_data_should_fail"),t(),e(327,"- The webserver cannot create the object from the json data request."),t()(),n(328,"h2",72)(329,"span"),e(330,"Identity Controller Testing"),t(),n(331,"a",73),e(332,"#"),t()(),n(333,"p"),e(334,"When it comes to JWT authorization, a big amount of testing consists in testing for invalid JWT tokens:"),t(),n(335,"ul")(336,"li")(337,"code"),e(338,"Update_user_without_authorization_header_should_fail"),t(),e(339,"- tests when JWT token is absent"),t(),n(340,"li")(341,"code"),e(342,"Update_user_with_altered_authorization_header_should_fail"),t(),e(343,"- tests when to a valid JWT token is added one character"),t(),n(344,"li")(345,"code"),e(346,"Update_user_with_malformated_authorization_header_should_fail"),t(),e(347,"- tests when JWT token has format "),n(348,"code"),e(349,"a.b"),t()(),n(350,"li")(351,"code"),e(352,"Update_user_with_fake_authorization_header_should_fail"),t(),e(353,"- tests when JWT token has correct format "),n(354,"code"),e(355,"a.b.c"),t(),e(356," but random characters"),t(),n(357,"li")(358,"code"),e(359,"Update_user_with_incorrect_authorization_header_key_should_fail"),t(),e(360,"- tests when JWT token is valid but was encrypted with a different key"),t(),n(361,"li")(362,"code"),e(363,"Update_user_with_expired_authorization_header_should_fail"),t(),e(364,"- tests when a valid JWT token was expired"),t()(),n(365,"p"),e(366,`These are the most common case scenarios to test against an invalid JWT token and must be done just for one controller!
MyTested cannot catch 401 error code directly. We found a workaround by using `),n(367,"a",71),e(368,"HeaderAuthorizationException"),t(),e(369,`
The full source code for the .NET Core `),n(370,"code"),e(371,"IdentityService"),t(),e(372," implementation can be found "),n(373,"a",74),e(374,"here"),t()(),n(375,"h2",75)(376,"span"),e(377,"Advanced Testing with Mytested Library"),t(),n(378,"a",76),e(379,"#"),t()(),n(380,"p"),e(381,"See "),n(382,"a",77),e(383,"this"),t(),e(384," article."),t(),n(385,"h2",78)(386,"span"),e(387,"MyTested Library Limitations"),t(),n(388,"a",79),e(389,"#"),t()(),n(390,"p"),e(391,"We applied modified version of MyTested library to three popular GitHub repositories: "),n(392,"a",80),e(393,"BookStore"),t(),e(394,", "),n(395,"a",81),e(396,"RealWorld"),t(),e(397,", and "),n(398,"a",82),e(399,"CleanArchitecture"),t(),e(400,". Our quick investigation shows that BookStore can be configurated to work 100% with MyTested while RealWorld works only with "),n(401,"a",50),e(402,"anonymous controllers"),t(),e(403,` and CleanArchitecture does not work at all.
The full test project source code can be found on `),n(404,"a",83),e(405,"our GitHub repository"),t(),e(406,"."),t(),n(407,"h2",84)(408,"span"),e(409,"Credits"),t(),n(410,"a",85),e(411,"#"),t()(),n(412,"ul")(413,"li")(414,"a",86),e(415,"Ivaylo Kenov"),t()(),n(416,"li")(417,"a",87),e(418,"Kalin Tsenkov"),t()(),n(419,"li")(420,"a",88),e(421,"Steve Smith"),t()(),n(422,"li")(423,"a",89),e(424,"Jason Taylor"),t()(),n(425,"li")(426,"a",90),e(427,"Stefan Prodan"),t()(),n(428,"li")(429,"a",91),e(430,"Mark Cilia Vincenti"),t()(),n(431,"li")(432,"a",92),e(433,"Jimmy Bogard"),t()(),n(434,"li")(435,"a",93),e(436,"Ben Morris"),t()()()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),J("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,wi)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,W,j,O,L,I,P,D,F,U,V,H,B,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var yi=()=>({standalone:!0});function Ci(a,s){if(a&1){let i=_();b(0),n(1,"a",85),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",86),d(3,"nz-icon",87),t()(),w()}}function Ti(a,s){if(a&1){let i=_();b(0),n(1,"a",85),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",86),e(3,"Alexei Cioina's blog"),t()(),w()}}var Bn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-ratelimit-middleware"]],viewQuery:function(l,r){if(l&1&&R(y,7),l&2){let o;N(o=M())&&(r.affixEl=o.first)}},decls:1568,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-ce31d7687a5dd7132969c9c34ec935fd","nzTitle","Use Case Scenario"],["nzHref","#h-c73a370e6de61c37a931b53e01ac1474","nzTitle","JWT Token Refresh Concept"],["nzHref","#h-2ee872d2e537cfc7d3ac87394ef94bd0","nzTitle","JWT Token Refresh Implementation"],["nzHref","#h-dabba4053540ace5387194a926c7e285","nzTitle","Modified RateLimitMiddleware"],["nzHref","#h-bd1baabd87b923e02405c8e9aa86c826","nzTitle","Testing of RateLimitMiddleware With MyTested Library"],["nzHref","#h-009deb37fd917675f32d69efa5650da2","nzTitle","Test Settings"],["nzHref","#h-fb5fe24a643cb590fd64c959dc9b2549","nzTitle","Proof of Concept"],["nzHref","#h-6f8b794f3246b0c1e1780bb4d4d5dc53","nzTitle","Conclusion"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241018-ratelimit-middleware.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://github.com/cioina/cioina.azurewebsites.net","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test","target","_blank","rel","noopener"],["id","h-ce31d7687a5dd7132969c9c34ec935fd"],["onclick","window.location.hash = 'h-ce31d7687a5dd7132969c9c34ec935fd'",1,"anchor"],["id","h-c73a370e6de61c37a931b53e01ac1474"],["onclick","window.location.hash = 'h-c73a370e6de61c37a931b53e01ac1474'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs","target","_blank","rel","noopener"],[1,"language-csharp"],[1,"hljs-meta"],[1,"hljs-keyword"],["href","https://github.com/cioina/cioina.azurewebsites.net/blob/main/bin/Release/net8.0/appsettings.json","target","_blank","rel","noopener"],["id","h-2ee872d2e537cfc7d3ac87394ef94bd0"],["onclick","window.location.hash = 'h-2ee872d2e537cfc7d3ac87394ef94bd0'",1,"anchor"],["href","https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs","target","_blank","rel","noopener"],[1,"hljs-literal"],[1,"hljs-built_in"],[1,"hljs-string"],["href","https://github.com/stefanprodan/AspNetCoreRateLimit/blob/master/src/AspNetCoreRateLimit/Middleware/RateLimitMiddleware.cs","target","_blank","rel","noopener"],["id","h-dabba4053540ace5387194a926c7e285"],["onclick","window.location.hash = 'h-dabba4053540ace5387194a926c7e285'",1,"anchor"],[1,"hljs-title"],[1,"hljs-function"],[1,"hljs-params"],[1,"hljs-comment"],[1,"hljs-subst"],[1,"hljs-number"],["id","h-bd1baabd87b923e02405c8e9aa86c826"],["onclick","window.location.hash = 'h-bd1baabd87b923e02405c8e9aa86c826'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/testsettings.json","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test/RateLimit","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/RateLimit/AsyncKeyedLockTest.cs","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti/AsyncKeyedLock","target","_blank","rel","noopener"],["href","https://github.com/EdiWang/Edi.CacheAside.InMemory/blob/master/src/Edi.CacheAside.InMemory/MemoryCacheAside.cs","target","_blank","rel","noopener"],["id","h-009deb37fd917675f32d69efa5650da2"],["onclick","window.location.hash = 'h-009deb37fd917675f32d69efa5650da2'",1,"anchor"],[1,"language-json"],[1,"hljs-punctuation"],[1,"hljs-attr"],["id","h-fb5fe24a643cb590fd64c959dc9b2549"],["onclick","window.location.hash = 'h-fb5fe24a643cb590fd64c959dc9b2549'",1,"anchor"],["id","h-6f8b794f3246b0c1e1780bb4d4d5dc53"],["onclick","window.location.hash = 'h-6f8b794f3246b0c1e1780bb4d4d5dc53'",1,"anchor"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/ivaylokenov","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov","target","_blank","rel","noopener"],["href","https://github.com/ardalis","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev","target","_blank","rel","noopener"],["href","https://github.com/stefanprodan","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti","target","_blank","rel","noopener"],["href","https://github.com/jbogard","target","_blank","rel","noopener"],["href","https://github.com/BenMorris","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,Ci,4,0,"ng-container",5)(6,Ti,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),G("ngModelChange",function(h){return Q(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20)(25,"nz-link",21),t()(),n(26,"span",22),e(27," Implementing JWT Token Refresh Concept for .NET Core 9"),d(28,"span",23)(29,"span",24),n(30,"a",25),d(31,"nz-icon",26),t()(),n(32,"article",27)(33,"h2",28)(34,"span"),e(35,"Introduction"),t(),n(36,"a",29),e(37,"#"),t()(),n(38,"p"),e(39,"The compiled code of our .NET Core 8 application is on "),n(40,"a",30),e(41,"our GitHub repository"),t(),e(42,". For testing purpose, we will use "),n(43,"a",31),e(44,"MyTested"),t(),e(45," - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our project is based on "),n(46,"a",32),e(47,"BookStore"),t(),e(48," repository and adapted to work with MyTested library. MyTested was engineered to work without middleware which is an advantage for many cases. However, the scope of this article was to find a way to tests middleware with MyTested. The full test project source code can be found on "),n(49,"a",33),e(50,"our another GitHub repository"),t(),e(51,"."),t(),n(52,"h2",34)(53,"span"),e(54,"Use Case Scenario"),t(),n(55,"a",35),e(56,"#"),t()(),n(57,"p"),e(58,"The user signs in and gets a JWT token valid for 30 minutes. The user opens a webpage to create/edit an article. It takes 35 minutes to finish the work. The user clicks on submit button. A modal form pops up and asks the user to refresh JWT token by entering a password. The user gets a new JWT token valid for next 30 minutes. Finally, the user clicks submit button and saves the work."),t(),n(59,"h2",36)(60,"span"),e(61,"JWT Token Refresh Concept"),t(),n(62,"a",37),e(63,"#"),t()(),n(64,"p"),e(65,"First, we need to know how basic native JWT token implemented in .NET Core 8 works. Usually, there are "),n(66,"a",38),e(67,"two types of API endpoints: public and private"),t(),e(68,". A private API endpoint look like this:"),t(),n(69,"pre",39)(70,"code"),e(71,"["),n(72,"span",40),e(73,"HttpPut"),t(),e(74,`]
[`),n(75,"span",40),e(76,"Route(nameof(Update))"),t(),e(77,`]
[`),n(78,"span",40),e(79,"Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)"),t(),e(80,`]
`),n(81,"span",41),e(82,"public"),t(),e(83," "),n(84,"span",41),e(85,"async"),t(),e(86,` Task<ActionResult<UserResponseEnvelope>> Update(
    UserUpdateCommand command)
    => `),n(87,"span",41),e(88,"await"),t(),e(89," "),n(90,"span",41),e(91,"this"),t(),e(92,".Send(command);"),t()(),n(93,"p"),e(94,"The user signs in and gets a JWT token which is saved in localStorage. Then, any request to the server includes obtained JWT token in the Authorization header. The server won\u2019t use the token on public endpoints. It means that the server won\u2019t try to decrypt the token. On the private endpoints, the server will try to decrypt the token, apply "),n(95,"code"),e(96,"BearerPolicy"),t(),e(97,", and match the role from the token to "),n(98,"code"),e(99,"AdministratorRoleName"),t(),e(100," list. At this point, the basic native .NET Core 8 implementation does not care if the user form the JWT token exists in the database, and it does not care if the role exists in the database ether. However, the server checks if the token expired and returns a 401 error if it\u2019s the case. With all this in mind, we implemented the concept of JWT token refresh period called PRefresh. Let\u2019s call the token\u2019s valid period PValid. Then, "),n(101,"code"),e(102,"SecurityTokenDescriptorExpiresInMinutes"),t(),e(103," from "),n(104,"a",42),e(105,"appsettings.json"),t(),e(106," = PValid + PRefresh and "),n(107,"code"),e(108,"SecurityTokenRefreshRate "),t(),e(109," = PRefresh/(PValid + PRefresh). So, if "),n(110,"code"),e(111,"SecurityTokenDescriptorExpiresInMinutes"),t(),e(112,"= 60 minutes and "),n(113,"code"),e(114,"SecurityTokenRefreshRate "),t(),e(115," = 1/2, it means that PValid = 30 minutes and PRefresh = 30 minutes. If "),n(116,"code"),e(117,"SecurityTokenRefreshRate "),t(),e(118," = 1/4, it means that PValid = 45 minutes and PRefresh = 15 minutes. If "),n(119,"code"),e(120,"SecurityTokenRefreshRate "),t(),e(121," = 3/4, it means that PValid = 15 minutes and PRefresh = 45 minutes and so on. "),t(),n(122,"h2",43)(123,"span"),e(124,"JWT Token Refresh Implementation"),t(),n(125,"a",44),e(126,"#"),t()(),n(127,"p"),e(128,"One interesting idea of JWT token implementation together with refresh token is on "),n(129,"a",45),e(130,"EdiWang"),t(),e(131," GitHub repository. We use native .NET Core implementation which is \u201Ccontrolled\u201D by the .NET Core framework itself. One problem we solved in this article, is the implementation of "),n(132,"code"),e(133,"JWT Token"),t(),e(134," refresh mechanism. There is no standard way to refresh JWT token in .NET Core 8. The main idea was to check a valid "),n(135,"code"),e(136,"JWT token"),t(),e(137," right after standard .NET Core authorization and before entering of an API controller. In fact, we needed to use following formula with this small piece of code:"),t(),n(138,"pre",39)(139,"code"),e(140," "),n(141,"span",41),e(142,"var"),t(),e(143,` claimsPrincipal = context.User!;
 `),n(144,"span",41),e(145,"if"),t(),e(146," (claimsPrincipal != "),n(147,"span",46),e(148,"null"),t(),e(149,`)
 {
     `),n(150,"span",41),e(151,"var"),t(),e(152,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
     `),n(153,"span",41),e(154,"if"),t(),e(155," (isAuthenticated != "),n(156,"span",46),e(157,"null"),t(),e(158," && ("),n(159,"span",47),e(160,"bool"),t(),e(161,`)isAuthenticated)
     {
         `),n(162,"span",41),e(163,"var"),t(),e(164,` claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
         `),n(165,"span",41),e(166,"if"),t(),e(167," (claim != "),n(168,"span",46),e(169,"null"),t(),e(170,`)
         {
             clientId = claim.Value;
         }
     }
 }
 `),n(171,"span",41),e(172,"if"),t(),e(173," (clientId != "),n(174,"span",46),e(175,"null"),t(),e(176,`)
 {
     `),n(177,"span",41),e(178,"var"),t(),e(179," iat = claimsPrincipal.FindFirst("),n(180,"span",48),e(181,'"iat"'),t(),e(182,`);
     `),n(183,"span",41),e(184,"var"),t(),e(185," exp = claimsPrincipal.FindFirst("),n(186,"span",48),e(187,'"exp"'),t(),e(188,`);
     `),n(189,"span",41),e(190,"if"),t(),e(191," (iat != "),n(192,"span",46),e(193,"null"),t(),e(194," && exp != "),n(195,"span",46),e(196,"null"),t(),e(197,`)
     {
         `),n(198,"span",41),e(199,"var"),t(),e(200," pValid = ("),n(201,"span",47),e(202,"long"),t(),e(203,".Parse(exp.Value) - "),n(204,"span",47),e(205,"long"),t(),e(206,`.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
         `),n(207,"span",41),e(208,"var"),t(),e(209," current = "),n(210,"span",47),e(211,"long"),t(),e(212,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();
         `),n(213,"span",41),e(214,"if"),t(),e(215,` (current < pValid)
         {
             `),n(216,"span",41),e(217,"await"),t(),e(218," ReturnSecurityTokenRefreshRate(context, "),n(219,"span",48),e(220,'"SecurityTokenRefreshRate"'),t(),e(221,", "),n(222,"span",48),e(223,'"Please refresh your JWT token"'),t(),e(224,`);
             `),n(225,"span",41),e(226,"return"),t(),e(227,`;
         }
     }
 }`),t()(),n(228,"p"),e(229,"So, we needed a middleware to place the above piece of code. A good candidate we found was AspNetCoreRateLimit library, so we decided to modify its source code keeping in mind also the possibility of testing it with MyTested. The original AspNetCoreRateLimit middleware is called "),n(230,"a",49),e(231,"RateLimitMiddleware.cs"),t(),e(232," Following is the modified source code that is used in our actual application."),t(),n(233,"h3",50)(234,"span"),e(235,"Modified RateLimitMiddleware"),t(),n(236,"a",51),e(237,"#"),t()(),n(238,"pre",39)(239,"code")(240,"span",41),e(241,"using"),t(),e(242,` Microsoft.AspNetCore.Hosting;
`),n(243,"span",41),e(244,"using"),t(),e(245,` Microsoft.AspNetCore.Http;
`),n(246,"span",41),e(247,"using"),t(),e(248,` Newtonsoft.Json;
`),n(249,"span",41),e(250,"using"),t(),e(251,` Newtonsoft.Json.Serialization;
`),n(252,"span",41),e(253,"using"),t(),e(254,` System;
`),n(255,"span",41),e(256,"using"),t(),e(257,` System.Collections.Generic;
`),n(258,"span",41),e(259,"using"),t(),e(260,` System.Data;
`),n(261,"span",41),e(262,"using"),t(),e(263,` System.Linq;
`),n(264,"span",41),e(265,"using"),t(),e(266,` System.Net;
`),n(267,"span",41),e(268,"using"),t(),e(269,` System.Security.Claims;
`),n(270,"span",41),e(271,"using"),t(),e(272,` System.Text;
`),n(273,"span",41),e(274,"using"),t(),e(275,` System.Threading.Tasks;

`),n(276,"span",41),e(277,"namespace"),t(),e(278," "),n(279,"span",52),e(280,"AspNetCoreRateLimit"),t(),e(281,`
{
    `),n(282,"span",41),e(283,"public"),t(),e(284," "),n(285,"span",41),e(286,"abstract"),t(),e(287," "),n(288,"span",41),e(289,"class"),t(),e(290," "),n(291,"span",52),e(292,"RateLimitMiddleware"),t(),e(293,"<"),n(294,"span",52),e(295,"TProcessor"),t(),e(296,"> : "),n(297,"span",52),e(298,"IMiddleware"),t(),e(299,`
        `),n(300,"span",41),e(301,"where"),t(),e(302," "),n(303,"span",52),e(304,"TProcessor"),t(),e(305," : "),n(306,"span",52),e(307,"IRateLimitProcessor"),t(),e(308,`
    {
        `),n(309,"span",41),e(310,"private"),t(),e(311," "),n(312,"span",41),e(313,"readonly"),t(),e(314,` IWebHostEnvironment _env;
        `),n(315,"span",41),e(316,"private"),t(),e(317," "),n(318,"span",41),e(319,"readonly"),t(),e(320,` TProcessor _processor;
        `),n(321,"span",41),e(322,"private"),t(),e(323," "),n(324,"span",41),e(325,"readonly"),t(),e(326,` RateLimitOptions _options;
        `),n(327,"span",41),e(328,"private"),t(),e(329," "),n(330,"span",41),e(331,"readonly"),t(),e(332,` IRateLimitConfiguration _config;
        `),n(333,"span",41),e(334,"private"),t(),e(335," "),n(336,"span",41),e(337,"readonly"),t(),e(338," "),n(339,"span",47),e(340,"bool"),t(),e(341,` _securityTokenRefreshOnly;
        `),n(342,"span",53)(343,"span",41),e(344,"protected"),t(),e(345," "),n(346,"span",52),e(347,"RateLimitMiddleware"),t(),e(348,"("),n(349,"span",54),e(350,`
            IWebHostEnvironment env,
            RateLimitOptions options,
            TProcessor processor,
            IRateLimitConfiguration config,
            `),n(351,"span",47),e(352,"bool"),t(),e(353," securityTokenRefreshOnly"),t(),e(354,")"),t(),e(355,`
        {
            _env = env;
            _options = options;
            _processor = processor;
            _config = config;
            _securityTokenRefreshOnly = securityTokenRefreshOnly;

            `),n(356,"span",41),e(357,"if"),t(),e(358," (_env.EnvironmentName == "),n(359,"span",48),e(360,'"Test"'),t(),e(361,`)
            {
                _config.RegisterResolvers();
            }
        }

        `),n(362,"span",53)(363,"span",41),e(364,"public"),t(),e(365," "),n(366,"span",41),e(367,"async"),t(),e(368," Task "),n(369,"span",52),e(370,"InvokeAsync"),t(),e(371,"("),n(372,"span",54),e(373,"HttpContext context, RequestDelegate _next"),t(),e(374,")"),t(),e(375,`
        {
            `),n(376,"span",55),e(377,"// check if rate limiting is enabled (EnableEndpointRateLimiting)"),t(),e(378,`
            `),n(379,"span",41),e(380,"if"),t(),e(381," (_options == "),n(382,"span",46),e(383,"null"),t(),e(384,`)
            {
                `),n(385,"span",41),e(386,"await"),t(),e(387,` _next.Invoke(context);
                `),n(388,"span",41),e(389,"return"),t(),e(390,`;
            }

            `),n(391,"span",47),e(392,"string"),t(),e(393," clientIp = "),n(394,"span",46),e(395,"null"),t(),e(396,`;
            `),n(397,"span",47),e(398,"string"),t(),e(399," clientId = "),n(400,"span",46),e(401,"null"),t(),e(402,`;

            `),n(403,"span",41),e(404,"var"),t(),e(405,` claimsPrincipal = context.User!;

            `),n(406,"span",41),e(407,"if"),t(),e(408," (claimsPrincipal != "),n(409,"span",46),e(410,"null"),t(),e(411,`)
            {
                `),n(412,"span",41),e(413,"var"),t(),e(414,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),n(415,"span",41),e(416,"if"),t(),e(417," (isAuthenticated != "),n(418,"span",46),e(419,"null"),t(),e(420," && ("),n(421,"span",47),e(422,"bool"),t(),e(423,`)isAuthenticated)
                {
                    `),n(424,"span",41),e(425,"var"),t(),e(426,` claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
                    `),n(427,"span",41),e(428,"if"),t(),e(429," (claim != "),n(430,"span",46),e(431,"null"),t(),e(432,`)
                    {
                        clientId = claim.Value;
                    }
                }
            }

            `),n(433,"span",41),e(434,"if"),t(),e(435,` (!_config.IpResolvers.IsEmpty)
            {
                `),n(436,"span",41),e(437,"var"),t(),e(438,` resolver = _config.IpResolvers.GetEnumerator();
                `),n(439,"span",41),e(440,"while"),t(),e(441,` (resolver.MoveNext())
                {
                    clientIp = resolver.Current.Value.ResolveIp(context);
                    `),n(442,"span",41),e(443,"if"),t(),e(444," (!"),n(445,"span",47),e(446,"string"),t(),e(447,`.IsNullOrEmpty(clientIp))
                    {
                        `),n(448,"span",41),e(449,"break"),t(),e(450,`;
                    }
                }
            }

            `),n(451,"span",41),e(452,"var"),t(),e(453,` path = context.Request.Path.ToString().ToLowerInvariant();
            `),n(454,"span",41),e(455,"var"),t(),e(456," identity = "),n(457,"span",41),e(458,"new"),t(),e(459,` ClientRequestIdentity
            {
                ClientIp = clientIp ?? context.Connection.RemoteIpAddress?.MapToIPv4().ToString(),
                Path = path == `),n(460,"span",48),e(461,'"/"'),t(),e(462,`
                    ? path
                    : path.TrimEnd(`),n(463,"span",48),e(464,"'/'"),t(),e(465,`),
                HttpVerb = context.Request.Method.ToLowerInvariant(),
                ClientId = clientId ?? `),n(466,"span",48),e(467,'"anon"'),t(),e(468,`
            };


            `),n(469,"span",55),e(470,"// check white list"),t(),e(471,`
            `),n(472,"span",41),e(473,"if"),t(),e(474,` (!_processor.IsWhitelisted(identity))
            {
                `),n(475,"span",41),e(476,"if"),t(),e(477," (clientId != "),n(478,"span",46),e(479,"null"),t(),e(480,`)
                {
                    `),n(481,"span",41),e(482,"var"),t(),e(483," iat = claimsPrincipal.FindFirst("),n(484,"span",48),e(485,'"iat"'),t(),e(486,`);
                    `),n(487,"span",41),e(488,"var"),t(),e(489," exp = claimsPrincipal.FindFirst("),n(490,"span",48),e(491,'"exp"'),t(),e(492,`);
                    `),n(493,"span",41),e(494,"if"),t(),e(495," (iat != "),n(496,"span",46),e(497,"null"),t(),e(498," && exp != "),n(499,"span",46),e(500,"null"),t(),e(501,`)
                    {
                        `),n(502,"span",41),e(503,"var"),t(),e(504," pValid = ("),n(505,"span",47),e(506,"long"),t(),e(507,".Parse(exp.Value) - "),n(508,"span",47),e(509,"long"),t(),e(510,`.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
                        `),n(511,"span",41),e(512,"var"),t(),e(513," current = "),n(514,"span",47),e(515,"long"),t(),e(516,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                        `),n(517,"span",41),e(518,"if"),t(),e(519," ("),n(520,"span",41),e(521,"this"),t(),e(522,"._env.EnvironmentName == "),n(523,"span",48),e(524,'"Test"'),t(),e(525,`)
                        {
                            `),n(526,"span",41),e(527,"if"),t(),e(528," (clientId == "),n(529,"span",48),e(530,'"SecurityTokenRefreshException@email.com1"'),t(),e(531,`)
                            {
                                `),n(532,"span",41),e(533,"await"),t(),e(534," Task.FromException("),n(535,"span",41),e(536,"new"),t(),e(537," SecurityTokenRefreshException("),n(538,"span",48),e(539,'$"This is a test. PValid:  '),n(540,"span",56),e(541,"{pValid}"),t(),e(542," Current: "),n(543,"span",56),e(544,"{current}"),t(),e(545," ClientId: "),n(546,"span",56),e(547,"{clientId}"),t(),e(548,'"'),t(),e(549,`));
                            }
                        }
                        `),n(550,"span",41),e(551,"else"),t(),e(552," "),n(553,"span",41),e(554,"if"),t(),e(555,` (current < pValid)
                        {
                            `),n(556,"span",41),e(557,"await"),t(),e(558," ReturnSecurityTokenRefreshRate(context, "),n(559,"span",48),e(560,'"SecurityTokenRefreshRate"'),t(),e(561,", "),n(562,"span",48),e(563,'"Please refresh your JWT token"'),t(),e(564,`);
                            `),n(565,"span",41),e(566,"return"),t(),e(567,`;
                        }
                    }
                }

                `),n(568,"span",40),e(569,"#"),n(570,"span",41),e(571,"region"),t(),e(572," NOT securityTokenRefreshOnly"),t(),e(573,`
                `),n(574,"span",41),e(575,"if"),t(),e(576,` (!_securityTokenRefreshOnly)
                {
                    `),n(577,"span",41),e(578,"if"),t(),e(579," ("),n(580,"span",41),e(581,"this"),t(),e(582,"._env.EnvironmentName == "),n(583,"span",48),e(584,'"Test"'),t(),e(585,`)
                    {
                        `),n(586,"span",41),e(587,"if"),t(),e(588," (clientIp == "),n(589,"span",48),e(590,'"0.0.0.0"'),t(),e(591,`)
                        {
                            `),n(592,"span",41),e(593,"await"),t(),e(594," Task.FromException("),n(595,"span",41),e(596,"new"),t(),e(597," MatchingRulesException("),n(598,"span",48),e(599,'$"This is a test. ClientIp: '),n(600,"span",56),e(601,"{identity.ClientIp}"),t(),e(602,'"'),t(),e(603,`));
                        }
                    }

                    IEnumerable<RateLimitRule> rules = `),n(604,"span",46),e(605,"null"),t(),e(606,`;
                    rules = `),n(607,"span",41),e(608,"await"),t(),e(609,` _processor.GetMatchingRulesAsync(identity, context.RequestAborted);
                    `),n(610,"span",41),e(611,"if"),t(),e(612," (rules == "),n(613,"span",46),e(614,"null"),t(),e(615,`)
                    {
                        `),n(616,"span",41),e(617,"if"),t(),e(618," ("),n(619,"span",41),e(620,"this"),t(),e(621,"._env.EnvironmentName == "),n(622,"span",48),e(623,'"Test"'),t(),e(624,`)
                        {
                            `),n(625,"span",41),e(626,"await"),t(),e(627," Task.FromException("),n(628,"span",41),e(629,"new"),t(),e(630," MatchingRulesException("),n(631,"span",48),e(632,'$"This is a test. ClientIp: '),n(633,"span",56),e(634,"{identity.ClientIp}"),t(),e(635,'"'),t(),e(636,`));
                        }
                        `),n(637,"span",41),e(638,"else"),t(),e(639,`
                        {
                            `),n(640,"span",41),e(641,"await"),t(),e(642," ReturnSecurityTokenRefreshRate(context, "),n(643,"span",48),e(644,'"MatchingRulesException"'),t(),e(645,", "),n(646,"span",48),e(647,'$"Matching rules is null. Your IP address is: '),n(648,"span",56),e(649,"{identity.ClientIp}"),t(),e(650,'"'),t(),e(651,`);
                            `),n(652,"span",41),e(653,"return"),t(),e(654,`;
                        }
                    }

                    `),n(655,"span",41),e(656,"var"),t(),e(657," rulesDict = "),n(658,"span",41),e(659,"new"),t(),e(660,` Dictionary<RateLimitRule, RateLimitCounter>();

                    `),n(661,"span",41),e(662,"foreach"),t(),e(663," ("),n(664,"span",41),e(665,"var"),t(),e(666," rule "),n(667,"span",41),e(668,"in"),t(),e(669,` rules)
                    {
                        `),n(670,"span",55),e(671,"// increment counter"),t(),e(672,`
                        `),n(673,"span",41),e(674,"var"),t(),e(675," rateLimitCounter = "),n(676,"span",41),e(677,"await"),t(),e(678,` _processor.ProcessRequestAsync(identity, rule, context.RequestAborted);

                        `),n(679,"span",41),e(680,"if"),t(),e(681," (rule.Limit > "),n(682,"span",57),e(683,"0"),t(),e(684,`)
                        {
                            `),n(685,"span",55),e(686,"// check if key expired"),t(),e(687,`
                            `),n(688,"span",41),e(689,"if"),t(),e(690,` (rateLimitCounter.Timestamp + rule.PeriodTimespan.Value < DateTime.UtcNow)
                            {
                                `),n(691,"span",41),e(692,"continue"),t(),e(693,`;
                            }

                            `),n(694,"span",55),e(695,"// check if limit is reached"),t(),e(696,`
                            `),n(697,"span",41),e(698,"if"),t(),e(699,` (rateLimitCounter.Count > rule.Limit)
                            {
                                `),n(700,"span",55),e(701,"//compute retry after value"),t(),e(702,`
                                `),n(703,"span",41),e(704,"var"),t(),e(705,` retryAfter = rateLimitCounter.Timestamp.RetryAfterFrom(rule);

                                `),n(706,"span",55),e(707,"// log blocked request"),t(),e(708,`
                                LogBlockedRequest(context, identity, rateLimitCounter, rule);

                                `),n(709,"span",41),e(710,"if"),t(),e(711," (_options.RequestBlockedBehaviorAsync != "),n(712,"span",46),e(713,"null"),t(),e(714,`)
                                {
                                    `),n(715,"span",41),e(716,"await"),t(),e(717,` _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                                }

                                `),n(718,"span",41),e(719,"if"),t(),e(720," ("),n(721,"span",41),e(722,"this"),t(),e(723,"._env.EnvironmentName == "),n(724,"span",48),e(725,'"Test"'),t(),e(726,`)
                                {
                                    `),n(727,"span",41),e(728,"await"),t(),e(729," Task.FromException("),n(730,"span",41),e(731,"new"),t(),e(732," RateLimitMiddlewareException("),n(733,"span",48),e(734,'$"This is a test. rateLimitCounter.Count '),n(735,"span",56),e(736,"{rateLimitCounter.Count}"),t(),e(737," rule.Limit: "),n(738,"span",56),e(739,"{rule.Limit}"),t(),e(740," ClientIp: "),n(741,"span",56),e(742,"{identity.ClientIp}"),t(),e(743,'"'),t(),e(744,`));
                                }

                                `),n(745,"span",41),e(746,"if"),t(),e(747,` (!rule.MonitorMode)
                                {
                                    `),n(748,"span",55),e(749,"// break execution"),t(),e(750,`
                                    `),n(751,"span",41),e(752,"await"),t(),e(753,` ReturnQuotaExceededResponse(context, rule, retryAfter, identity.ClientIp);

                                    `),n(754,"span",41),e(755,"return"),t(),e(756,`;
                                }
                            }
                        }
                        `),n(757,"span",55),e(758,"// if limit is zero or less, block the request."),t(),e(759,`
                        `),n(760,"span",41),e(761,"else"),t(),e(762,`
                        {
                            `),n(763,"span",55),e(764,"// log blocked request"),t(),e(765,`
                            LogBlockedRequest(context, identity, rateLimitCounter, rule);

                            `),n(766,"span",41),e(767,"if"),t(),e(768," (_options.RequestBlockedBehaviorAsync != "),n(769,"span",46),e(770,"null"),t(),e(771,`)
                            {
                                `),n(772,"span",41),e(773,"await"),t(),e(774,` _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                            }

                            `),n(775,"span",41),e(776,"if"),t(),e(777," ("),n(778,"span",41),e(779,"this"),t(),e(780,"._env.EnvironmentName == "),n(781,"span",48),e(782,'"Test"'),t(),e(783,`)
                            {
                                `),n(784,"span",41),e(785,"await"),t(),e(786," Task.FromException("),n(787,"span",41),e(788,"new"),t(),e(789," RateLimitMiddlewareException("),n(790,"span",48),e(791,'$"This is a test. rateLimitCounter.Count '),n(792,"span",56),e(793,"{rateLimitCounter.Count}"),t(),e(794," rule.Limit: "),n(795,"span",56),e(796,"{rule.Limit}"),t(),e(797," ClientIp: "),n(798,"span",56),e(799,"{identity.ClientIp}"),t(),e(800,'"'),t(),e(801,`));
                            }

                            `),n(802,"span",41),e(803,"if"),t(),e(804,` (!rule.MonitorMode)
                            {
                                `),n(805,"span",55),e(806,"// break execution (Int32 max used to represent infinity)"),t(),e(807,`
                                `),n(808,"span",41),e(809,"await"),t(),e(810," ReturnQuotaExceededResponse(context, rule, "),n(811,"span",47),e(812,"int"),t(),e(813,`.MaxValue.ToString(System.Globalization.CultureInfo.InvariantCulture), identity.ClientIp);

                                `),n(814,"span",41),e(815,"return"),t(),e(816,`;
                            }
                        }

                        rulesDict.Add(rule, rateLimitCounter);
                    }

                    `),n(817,"span",55),e(818,"// set X-Rate-Limit headers for the longest period"),t(),e(819,`
                    `),n(820,"span",41),e(821,"if"),t(),e(822," (rulesDict.Count != "),n(823,"span",57),e(824,"0"),t(),e(825,` && !_options.DisableRateLimitHeaders)
                    {
                        `),n(826,"span",41),e(827,"var"),t(),e(828,` rule = rulesDict.OrderByDescending(x => x.Key.PeriodTimespan).FirstOrDefault();
                        `),n(829,"span",41),e(830,"var"),t(),e(831,` headers = _processor.GetRateLimitHeaders(rule.Value, rule.Key, context.RequestAborted);

                        headers.Context = context;

                        context.Response.OnStarting(SetRateLimitHeaders, state: headers);
                    }
                }
                `),n(832,"span",40),e(833,"#"),n(834,"span",41),e(835,"endregion"),t()(),e(836,`
            }

            `),n(837,"span",41),e(838,"if"),t(),e(839," ("),n(840,"span",41),e(841,"this"),t(),e(842,"._env.EnvironmentName == "),n(843,"span",48),e(844,'"Test"'),t(),e(845,`)
            {
                `),n(846,"span",41),e(847,"await"),t(),e(848," Task.FromResult("),n(849,"span",46),e(850,"true"),t(),e(851,`);
            }
            `),n(852,"span",41),e(853,"else"),t(),e(854,`
            {
                `),n(855,"span",41),e(856,"await"),t(),e(857,` _next.Invoke(context);
            }
        }

        `),n(858,"span",53)(859,"span",41),e(860,"private"),t(),e(861," "),n(862,"span",41),e(863,"static"),t(),e(864," Task "),n(865,"span",52),e(866,"ReturnSecurityTokenRefreshRate"),t(),e(867,"("),n(868,"span",54),e(869,"HttpContext context, "),n(870,"span",47),e(871,"string"),t(),e(872," key, "),n(873,"span",47),e(874,"string"),t(),e(875," message"),t(),e(876,")"),t(),e(877,`
        {
            context.Response.ContentType = `),n(878,"span",48),e(879,'"application/json"'),t(),e(880,`;
            context.Response.StatusCode = (`),n(881,"span",47),e(882,"int"),t(),e(883,`)HttpStatusCode.UnprocessableEntity;

            `),n(884,"span",41),e(885,"var"),t(),e(886," result = SerializeObject("),n(887,"span",41),e(888,"new"),t(),e(889,` ErrorListResult(key,
                        [
                            message
                        ]));

            `),n(890,"span",41),e(891,"return"),t(),e(892,` context.Response.WriteAsync(result);
        }

        `),n(893,"span",53)(894,"span",41),e(895,"private"),t(),e(896," "),n(897,"span",41),e(898,"static"),t(),e(899," "),n(900,"span",47),e(901,"string"),t(),e(902," "),n(903,"span",52),e(904,"SerializeObject"),t(),e(905,"("),n(906,"span",54)(907,"span",47),e(908,"object"),t(),e(909," obj"),t(),e(910,")"),t(),e(911,`
            => JsonConvert.SerializeObject(obj, `),n(912,"span",41),e(913,"new"),t(),e(914,` JsonSerializerSettings
            {
                ContractResolver = `),n(915,"span",41),e(916,"new"),t(),e(917,` DefaultContractResolver
                {
                    NamingStrategy = `),n(918,"span",41),e(919,"new"),t(),e(920," CamelCaseNamingStrategy("),n(921,"span",46),e(922,"true"),t(),e(923,", "),n(924,"span",46),e(925,"true"),t(),e(926,`)
                }
            });

        `),n(927,"span",53)(928,"span",41),e(929,"public"),t(),e(930," "),n(931,"span",41),e(932,"virtual"),t(),e(933," Task "),n(934,"span",52),e(935,"ReturnQuotaExceededResponse"),t(),e(936,"("),n(937,"span",54),e(938,"HttpContext httpContext, RateLimitRule rule, "),n(939,"span",47),e(940,"string"),t(),e(941," retryAfter, "),n(942,"span",47),e(943,"string"),t(),e(944," clientIp"),t(),e(945,")"),t(),e(946,`
        {
            `),n(947,"span",55),e(948,"//Use Endpoint QuotaExceededResponse"),t(),e(949,`
            `),n(950,"span",41),e(951,"if"),t(),e(952," (rule.QuotaExceededResponse != "),n(953,"span",46),e(954,"null"),t(),e(955,`)
            {
                _options.QuotaExceededResponse = rule.QuotaExceededResponse;
            }
            `),n(956,"span",41),e(957,"var"),t(),e(958," message = "),n(959,"span",47),e(960,"string"),t(),e(961,`.Format(
                    _options.QuotaExceededResponse?.Content ??
                    _options.QuotaExceededMessage ??
                    `),n(962,"span",48),e(963,'"Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP adress is {3}"'),t(),e(964,`,
                    rule.Limit,
                    rule.PeriodTimespan.HasValue ? FormatPeriodTimespan(rule.PeriodTimespan.Value) : rule.Period, retryAfter, clientIp
             );

            `),n(965,"span",41),e(966,"if"),t(),e(967,` (!_options.DisableRateLimitHeaders)
            {
                httpContext.Response.Headers.RetryAfter = retryAfter;
            }

            httpContext.Response.ContentType = _options.QuotaExceededResponse?.ContentType ?? `),n(968,"span",48),e(969,'"text/plain"'),t(),e(970,`;
            httpContext.Response.StatusCode = _options.QuotaExceededResponse?.StatusCode ?? _options.HttpStatusCode;


            `),n(971,"span",41),e(972,"var"),t(),e(973," result = SerializeObject("),n(974,"span",41),e(975,"new"),t(),e(976," ErrorListResult("),n(977,"span",48),e(978,'"QuotaExceeded"'),t(),e(979,`,
                        [
                            message
                        ]));

            `),n(980,"span",41),e(981,"return"),t(),e(982,` httpContext.Response.WriteAsync(result);
        }

        `),n(983,"span",53)(984,"span",41),e(985,"private"),t(),e(986," "),n(987,"span",41),e(988,"static"),t(),e(989," "),n(990,"span",47),e(991,"string"),t(),e(992," "),n(993,"span",52),e(994,"FormatPeriodTimespan"),t(),e(995,"("),n(996,"span",54),e(997,"TimeSpan period"),t(),e(998,")"),t(),e(999,`
        {
            `),n(1e3,"span",41),e(1001,"var"),t(),e(1002," sb = "),n(1003,"span",41),e(1004,"new"),t(),e(1005,` StringBuilder();

            `),n(1006,"span",41),e(1007,"if"),t(),e(1008," (period.Days > "),n(1009,"span",57),e(1010,"0"),t(),e(1011,`)
            {
                sb.Append(`),n(1012,"span",48),e(1013,'$"'),n(1014,"span",56),e(1015,"{period.Days}"),t(),e(1016,'d"'),t(),e(1017,`);
            }

            `),n(1018,"span",41),e(1019,"if"),t(),e(1020," (period.Hours > "),n(1021,"span",57),e(1022,"0"),t(),e(1023,`)
            {
                sb.Append(`),n(1024,"span",48),e(1025,'$"'),n(1026,"span",56),e(1027,"{period.Hours}"),t(),e(1028,'h"'),t(),e(1029,`);
            }

            `),n(1030,"span",41),e(1031,"if"),t(),e(1032," (period.Minutes > "),n(1033,"span",57),e(1034,"0"),t(),e(1035,`)
            {
                sb.Append(`),n(1036,"span",48),e(1037,'$"'),n(1038,"span",56),e(1039,"{period.Minutes}"),t(),e(1040,'m"'),t(),e(1041,`);
            }

            `),n(1042,"span",41),e(1043,"if"),t(),e(1044," (period.Seconds > "),n(1045,"span",57),e(1046,"0"),t(),e(1047,`)
            {
                sb.Append(`),n(1048,"span",48),e(1049,'$"'),n(1050,"span",56),e(1051,"{period.Seconds}"),t(),e(1052,'s"'),t(),e(1053,`);
            }

            `),n(1054,"span",41),e(1055,"if"),t(),e(1056," (period.Milliseconds > "),n(1057,"span",57),e(1058,"0"),t(),e(1059,`)
            {
                sb.Append(`),n(1060,"span",48),e(1061,'$"'),n(1062,"span",56),e(1063,"{period.Milliseconds}"),t(),e(1064,'ms"'),t(),e(1065,`);
            }

            `),n(1066,"span",41),e(1067,"return"),t(),e(1068,` sb.ToString();
        }

        `),n(1069,"span",53)(1070,"span",41),e(1071,"protected"),t(),e(1072," "),n(1073,"span",41),e(1074,"abstract"),t(),e(1075," "),n(1076,"span",41),e(1077,"void"),t(),e(1078," "),n(1079,"span",52),e(1080,"LogBlockedRequest"),t(),e(1081,"("),n(1082,"span",54),e(1083,"HttpContext httpContext, ClientRequestIdentity identity, RateLimitCounter counter, RateLimitRule rule"),t(),e(1084,")"),t(),e(1085,`;

        `),n(1086,"span",53)(1087,"span",41),e(1088,"private"),t(),e(1089," Task "),n(1090,"span",52),e(1091,"SetRateLimitHeaders"),t(),e(1092,"("),n(1093,"span",54)(1094,"span",47),e(1095,"object"),t(),e(1096," rateLimitHeaders"),t(),e(1097,")"),t(),e(1098,`
        {
            `),n(1099,"span",41),e(1100,"var"),t(),e(1101,` headers = (RateLimitHeaders)rateLimitHeaders;

            headers.Context.Response.Headers[`),n(1102,"span",48),e(1103,'"X-Rate-Limit-Limit"'),t(),e(1104,`] = headers.Limit;
            headers.Context.Response.Headers[`),n(1105,"span",48),e(1106,'"X-Rate-Limit-Remaining"'),t(),e(1107,`] = headers.Remaining;
            headers.Context.Response.Headers[`),n(1108,"span",48),e(1109,'"X-Rate-Limit-Reset"'),t(),e(1110,`] = headers.Reset;

            `),n(1111,"span",41),e(1112,"return"),t(),e(1113,` Task.CompletedTask;
        }
    }
}`),t()(),n(1114,"h2",58)(1115,"span"),e(1116,"Testing of RateLimitMiddleware With MyTested Library"),t(),n(1117,"a",59),e(1118,"#"),t()(),n(1119,"p"),e(1120,"From the start, we need to keep in mind that MyTested does not provide support for middleware testing. So, we found a work around which is not 100% accurate. The main idea is that you have to setup the middleware manually in the right place to be logically correct. In our case, we\u2019ve got "),n(1121,"code"),e(1122,"GetTagsWithRateLimitMiddleware"),t(),e(1123," and "),n(1124,"code"),e(1125,"GetAllWithRateLimitMiddleware"),t(),e(1126," from "),n(1127,"a",60),e(1128,"StaticTestData.cs"),t(),e(1129,"). Also, RateLimitMiddleware needs shared "),n(1130,"code"),e(1131,"MemoryCache"),t(),e(1132,". On the other hand, MyTested just simulates shared "),n(1133,"code"),e(1134,"MeroryCache"),t(),e(1135,". So, we modified source code of MyTested to work with the actual "),n(1136,"code"),e(1137,"MeroryCache"),t(),e(1138," Also, we introduced an option "),n(1139,"code"),e(1140,'\u201DReplaceMemoryCache": false'),t(),e(1141," (See "),n(1142,"a",61),e(1143,"testsettings.json"),t(),e(1144,"). From our modified source code of RateLimitMiddleware, you can see that we try to keep the original functional and add JWT token refresh concept also. As a result, we\u2019ve got following limitations:"),t(),n(1145,"ul")(1146,"li"),e(1147,"the "),n(1148,"code"),e(1149,"clientId"),t(),e(1150," is taken from JWT token only"),t(),n(1151,"li"),e(1152,"the "),n(1153,"code"),e(1154,"clientIp"),t(),e(1155," is taken from "),n(1156,"code"),e(1157,"context.Connection.RemoteIpAddress"),t(),e(1158," only"),t(),n(1159,"li")(1160,"code"),e(1161,"ClientWhitelist"),t(),e(1162,` configuration option does not work with public endpoints, and it should be empty.
Also, the \u201Ccorrect way\u201D to configure it is following:`),t()(),n(1163,"pre",39)(1164,"code"),e(1165,`...
.UseRouting()
.InitializeRateLimit()
.UseMiddleware<IpRateLimitMiddleware>()
.UseAuthentication()
.UseAuthorization()
.UseMiddleware<ClientRateLimitMiddleware>()
...`),t()(),n(1166,"p"),e(1167,"All our middleware tests are in "),n(1168,"a",62),e(1169,"RateLimit"),t(),e(1170," folder. For token refresh concept, we\u2019ve got just two tests: "),n(1171,"code"),e(1172,"Edit_tag_with_refresh_token_should_fail"),t(),e(1173," and "),n(1174,"code"),e(1175,"Login_with_password_with_refresh_token_and_whitelisted_private_route_should_return_success_with_token"),t(),e(1176,". One interesting idea of a test( See "),n(1177,"a",63),e(1178,"AsyncKeyedLockTest.cs"),t(),e(1179,") comes from "),n(1180,"a",64),e(1181,"AsyncKeyedLock"),t(),e(1182,`.
Also, we made some additional small changes in AspNetCoreRateLimit library by borrowing some ideas from `),n(1183,"a",65),e(1184,"Edi.CacheAside.InMemory"),t(),e(1185,". Finaly, we\u2019ve used following settings for our tests project:"),t(),n(1186,"h3",66)(1187,"span"),e(1188,"Test Settings"),t(),n(1189,"a",67),e(1190,"#"),t()(),n(1191,"pre",68)(1192,"code"),e(1193," "),n(1194,"span",69),e(1195,"{"),t(),e(1196,`
  `),n(1197,"span",70),e(1198,'"General"'),t(),n(1199,"span",69),e(1200,":"),t(),e(1201," "),n(1202,"span",69),e(1203,"{"),t(),e(1204,`
    `),n(1205,"span",70),e(1206,'"ReplaceMemoryCache"'),t(),n(1207,"span",69),e(1208,":"),t(),e(1209," "),n(1210,"span",46)(1211,"span",41),e(1212,"false"),t()(),e(1213,`
  `),n(1214,"span",69),e(1215,"}"),t(),n(1216,"span",69),e(1217,","),t(),e(1218,`

  `),n(1219,"span",70),e(1220,'"ApplicationSettings"'),t(),n(1221,"span",69),e(1222,":"),t(),e(1223," "),n(1224,"span",69),e(1225,"{"),t(),e(1226,`
    `),n(1227,"span",70),e(1228,'"SecurityTokenDescriptorKey"'),t(),n(1229,"span",69),e(1230,":"),t(),e(1231," "),n(1232,"span",48),e(1233,'"test1223dfgdfkffpie"'),t(),n(1234,"span",69),e(1235,","),t(),e(1236,`
    `),n(1237,"span",70),e(1238,'"SecurityTokenDescriptorExpiresInMinutes"'),t(),n(1239,"span",69),e(1240,":"),t(),e(1241," "),n(1242,"span",57),e(1243,"10"),t(),n(1244,"span",69),e(1245,","),t(),e(1246,`
    `),n(1247,"span",70),e(1248,'"SecurityTokenRefreshRate"'),t(),n(1249,"span",69),e(1250,":"),t(),e(1251," "),n(1252,"span",57),e(1253,"0.5"),t(),n(1254,"span",69),e(1255,","),t(),e(1256,`
    `),n(1257,"span",70),e(1258,'"MaxFailedAccessAttempts"'),t(),n(1259,"span",69),e(1260,":"),t(),e(1261," "),n(1262,"span",57),e(1263,"5"),t(),n(1264,"span",69),e(1265,","),t(),e(1266,`
    `),n(1267,"span",70),e(1268,'"DefaultLockoutTimeSpanInMinutes"'),t(),n(1269,"span",69),e(1270,":"),t(),e(1271," "),n(1272,"span",57),e(1273,"0"),t(),n(1274,"span",69),e(1275,","),t(),e(1276,`
    `),n(1277,"span",70),e(1278,'"ExperimentalIpAddress"'),t(),n(1279,"span",69),e(1280,":"),t(),e(1281," "),n(1282,"span",48),e(1283,'"::1"'),t(),e(1284,`
  `),n(1285,"span",69),e(1286,"}"),t(),n(1287,"span",69),e(1288,","),t(),e(1289,`

  `),n(1290,"span",70),e(1291,'"IpRateLimiting"'),t(),n(1292,"span",69),e(1293,":"),t(),e(1294," "),n(1295,"span",69),e(1296,"{"),t(),e(1297,`
    `),n(1298,"span",70),e(1299,'"EnableEndpointRateLimiting"'),t(),n(1300,"span",69),e(1301,":"),t(),e(1302," "),n(1303,"span",46)(1304,"span",41),e(1305,"true"),t()(),n(1306,"span",69),e(1307,","),t(),e(1308,`
    `),n(1309,"span",70),e(1310,'"SecurityTokenRefreshRate"'),t(),n(1311,"span",69),e(1312,":"),t(),e(1313," "),n(1314,"span",57),e(1315,"0.5"),t(),n(1316,"span",69),e(1317,","),t(),e(1318,`
    `),n(1319,"span",70),e(1320,'"StackBlockedRequests"'),t(),n(1321,"span",69),e(1322,":"),t(),e(1323," "),n(1324,"span",46)(1325,"span",41),e(1326,"false"),t()(),n(1327,"span",69),e(1328,","),t(),e(1329,`
    `),n(1330,"span",70),e(1331,'"RealIpHeader"'),t(),n(1332,"span",69),e(1333,":"),t(),e(1334," "),n(1335,"span",48),e(1336,'"X-Real-IP"'),t(),n(1337,"span",69),e(1338,","),t(),e(1339,`
    `),n(1340,"span",70),e(1341,'"HttpStatusCode"'),t(),n(1342,"span",69),e(1343,":"),t(),e(1344," "),n(1345,"span",57),e(1346,"429"),t(),n(1347,"span",69),e(1348,","),t(),e(1349,`
    `),n(1350,"span",70),e(1351,'"IpWhitelist"'),t(),n(1352,"span",69),e(1353,":"),t(),e(1354," "),n(1355,"span",69),e(1356,"["),t(),e(1357," "),n(1358,"span",48),e(1359,'"::1/10"'),t(),n(1360,"span",69),e(1361,","),t(),e(1362," "),n(1363,"span",48),e(1364,'"192.168.0.0/24"'),t(),e(1365," "),n(1366,"span",69),e(1367,"]"),t(),n(1368,"span",69),e(1369,","),t(),e(1370,`
    `),n(1371,"span",70),e(1372,'"EndpointWhitelist"'),t(),n(1373,"span",69),e(1374,":"),t(),e(1375," "),n(1376,"span",69),e(1377,"["),t(),e(1378,`
      `),n(1379,"span",48),e(1380,'"post:/api/v1.0/identity"'),t(),n(1381,"span",69),e(1382,","),t(),e(1383,`
      `),n(1384,"span",48),e(1385,'"post:/api/v1.0/identity/login"'),t(),n(1386,"span",69),e(1387,","),t(),e(1388,`
      `),n(1389,"span",48),e(1390,'"get:/*.json"'),t(),n(1391,"span",69),e(1392,","),t(),e(1393,`
      `),n(1394,"span",48),e(1395,'"get:/*.js"'),t(),n(1396,"span",69),e(1397,","),t(),e(1398,`
      `),n(1399,"span",48),e(1400,'"get:/*.css"'),t(),n(1401,"span",69),e(1402,","),t(),e(1403,`
      `),n(1404,"span",48),e(1405,'"get:/*.ico"'),t(),e(1406,`
    `),n(1407,"span",69),e(1408,"]"),t(),n(1409,"span",69),e(1410,","),t(),e(1411,`
    `),n(1412,"span",70),e(1413,'"ClientWhitelist"'),t(),n(1414,"span",69),e(1415,":"),t(),e(1416," "),n(1417,"span",69),e(1418,"["),t(),e(1419," "),n(1420,"span",48),e(1421,'"ClientWhitelist@email.com1"'),t(),e(1422," "),n(1423,"span",69),e(1424,"]"),t(),n(1425,"span",69),e(1426,","),t(),e(1427,`
    `),n(1428,"span",70),e(1429,'"QuotaExceededResponse"'),t(),n(1430,"span",69),e(1431,":"),t(),e(1432," "),n(1433,"span",69),e(1434,"{"),t(),e(1435,`
      `),n(1436,"span",70),e(1437,'"Content"'),t(),n(1438,"span",69),e(1439,":"),t(),e(1440," "),n(1441,"span",48),e(1442,'"Quota exceeded. Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP address is {3}"'),t(),n(1443,"span",69),e(1444,","),t(),e(1445,`
      `),n(1446,"span",70),e(1447,'"ContentType"'),t(),n(1448,"span",69),e(1449,":"),t(),e(1450," "),n(1451,"span",48),e(1452,'"application/json"'),t(),e(1453,`
    `),n(1454,"span",69),e(1455,"}"),t(),n(1456,"span",69),e(1457,","),t(),e(1458,`
    `),n(1459,"span",70),e(1460,'"GeneralRules"'),t(),n(1461,"span",69),e(1462,":"),t(),e(1463," "),n(1464,"span",69),e(1465,"["),t(),e(1466,`
    `),n(1467,"span",69),e(1468,"]"),t(),e(1469,`
  `),n(1470,"span",69),e(1471,"}"),t(),n(1472,"span",69),e(1473,","),t(),e(1474,`

  `),n(1475,"span",70),e(1476,'"IpRateLimitPolicies"'),t(),n(1477,"span",69),e(1478,":"),t(),e(1479," "),n(1480,"span",69),e(1481,"{"),t(),e(1482,`
    `),n(1483,"span",70),e(1484,'"IpRules"'),t(),n(1485,"span",69),e(1486,":"),t(),e(1487," "),n(1488,"span",69),e(1489,"["),t(),e(1490,`
    `),n(1491,"span",69),e(1492,"]"),t(),e(1493,`
  `),n(1494,"span",69),e(1495,"}"),t(),e(1496,`
`),n(1497,"span",69),e(1498,"}"),t()()(),n(1499,"h2",71)(1500,"span"),e(1501,"Proof of Concept"),t(),n(1502,"a",72),e(1503,"#"),t()(),n(1504,"ol")(1505,"li"),e(1506,"Clone "),n(1507,"a",30),e(1508,"our GitHub repository"),t()(),n(1509,"li"),e(1510,"Follow the instruction form the Readme.md"),t(),n(1511,"li"),e(1512,"Change following in "),n(1513,"a",42),e(1514,"appsettings.json"),t(),e(1515,': "SecurityTokenDescriptorExpiresInMinutes": 10, "SecurityTokenRefreshRate": 0.9 (both places)'),t(),n(1516,"li"),e(1517,"Sign-in as admin using menu: Home -> Sign-in"),t(),n(1518,"li"),e(1519,"Go to menu Admin->Articles editor"),t(),n(1520,"li"),e(1521,"Click on New Article button."),t(),n(1522,"li"),e(1523,"Fill in the form and wait for 2 minutes."),t(),n(1524,"li"),e(1525,"Click Submit button and Yes button"),t(),n(1526,"li"),e(1527,"A drawer must show up asking to confirm password. It means that your JWT token expired, but you can refresh it."),t()(),n(1528,"h2",73)(1529,"span"),e(1530,"Conclusion"),t(),n(1531,"a",74),e(1532,"#"),t()(),n(1533,"p"),e(1534,"In this article, we introduced JWT token Refresh period concept and used a middleware to implement it. In fact, we used modified source code of RateLimitMiddleware from AspNetCoreRateLimit library. It means that it still can be used to limit public endpoints (See "),n(1535,"a",42),e(1536,"GeneralRules"),t(),e(1537," example). We implemented a way for testing the middleware with MyTested library. Finally, we provided a compiled .NET application for proof of concept."),t(),n(1538,"h2",75)(1539,"span"),e(1540,"Credits"),t(),n(1541,"a",76),e(1542,"#"),t()(),n(1543,"ul")(1544,"li")(1545,"a",77),e(1546,"Ivaylo Kenov"),t()(),n(1547,"li")(1548,"a",78),e(1549,"Kalin Tsenkov"),t()(),n(1550,"li")(1551,"a",79),e(1552,"Steve Smith"),t()(),n(1553,"li")(1554,"a",80),e(1555,"Jason Taylor"),t()(),n(1556,"li")(1557,"a",81),e(1558,"Stefan Prodan"),t()(),n(1559,"li")(1560,"a",82),e(1561,"Mark Cilia Vincenti"),t()(),n(1562,"li")(1563,"a",83),e(1564,"Jimmy Bogard"),t()(),n(1565,"li")(1566,"a",84),e(1567,"Ben Morris"),t()()()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),J("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,yi)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,W,j,O,L,I,P,D,F,U,V,H,B,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var vi=()=>({standalone:!0});function ki(a,s){if(a&1){let i=_();b(0),n(1,"a",64),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",65),d(3,"nz-icon",66),t()(),w()}}function Ai(a,s){if(a&1){let i=_();b(0),n(1,"a",64),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",65),e(3,"Alexei Cioina's blog"),t()(),w()}}var Dn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-testing-angular-apps"]],viewQuery:function(l,r){if(l&1&&R(y,7),l&2){let o;N(o=M())&&(r.affixEl=o.first)}},decls:184,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-c8cadc22f79af7b361f5c3da7dcbffca","nzTitle","Testing tools for Angular"],["nzHref","#h-704dc335d9064216f8927fafe48cd590","nzTitle","Testing Angular app together with .NET Core app"],["nzHref","#h-eacbc5c7d3fd4f0f6d7816bc2b9fdb7a","nzTitle","Using Signal type in Angular together with Reactive State library"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241110-testing-angular-apps.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://cioina.azurewebsites.net/","target","_blank","rel","noopener"],["href","https://github.com/huajian123/ng-antd-admin","target","_blank","rel","noopener"],["href","https://github.com/AndyT2503/angular-conduit-signals","target","_blank","rel","noopener"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components","target","_blank","rel","noopener"],["href","https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-angular/src","target","_blank","rel","noopener"],["href","https://github.com/ngrx/platform/tree/main/modules/component-store/src","target","_blank","rel","noopener"],["href","https://github.com/AndyT2503/angular-conduit-signals/blob/dev/src/app/shared/store/auth.store.ts","target","_blank","rel","noopener"],["href","https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net8.0","target","_blank","rel","noopener"],["href","https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net8.0/wwwroot","target","_blank","rel","noopener"],["id","h-c8cadc22f79af7b361f5c3da7dcbffca"],["onclick","window.location.hash = 'h-c8cadc22f79af7b361f5c3da7dcbffca'",1,"anchor"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/package.json","target","_blank","rel","noopener"],["href","https://github.com/angular/angular/blob/main/adev/BUILD.bazel","target","_blank","rel","noopener"],[1,"language-javascript"],[1,"hljs-keyword"],[1,"hljs-title","class_"],[1,"hljs-string"],["id","h-704dc335d9064216f8927fafe48cd590"],["onclick","window.location.hash = 'h-704dc335d9064216f8927fafe48cd590'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test","target","_blank","rel","noopener"],["href","https://cioina.azurewebsites.net/articles/dotnet-core-testing","target","_blank","rel","noopener"],["href","https://github.com/cioina/angular-test-example/tree/main/version-2","target","_blank","rel","noopener"],["href","https://github.com/cioina/angular-test-example/blob/main/version-2/home.store.spec.ts","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/realworld/blob/main/api/run-api-tests.sh","target","_blank","rel","noopener"],["href","https://github.com/nina1012/realworld-app/blob/main/jest.config.js","target","_blank","rel","noopener"],["id","h-eacbc5c7d3fd4f0f6d7816bc2b9fdb7a"],["onclick","window.location.hash = 'h-eacbc5c7d3fd4f0f6d7816bc2b9fdb7a'",1,"anchor"],["href","https://github.com/ngrx/platform","target","_blank","rel","noopener"],["href","https://github.com/cioina/angular-test-example/tree/main/version-1","target","_blank","rel","noopener"],["href","https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/libs/auth/data-access/src/auth.store.ts","target","_blank","rel","noopener"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/angular/angular/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/ant-design/ant-design-icons/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/ngrx/platform/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/huajian123","target","_blank","rel","noopener"],["href","https://github.com/AndyT2503","target","_blank","rel","noopener"],["href","https://github.com/stefanoslig","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,ki,4,0,"ng-container",5)(6,Ai,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),G("ngModelChange",function(h){return Q(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16),t()(),n(21,"span",17),e(22," Testing Angular Applications"),d(23,"span",18)(24,"span",19),n(25,"a",20),d(26,"nz-icon",21),t()(),n(27,"article",22)(28,"h2",23)(29,"span"),e(30,"Introduction"),t(),n(31,"a",24),e(32,"#"),t()(),n(33,"p")(34,"a",25),e(35,"Our Angular app"),t(),e(36," Is based on "),n(37,"a",26),e(38,"ng-antd-admin"),t(),e(39," combined with "),n(40,"a",27),e(41,"angular-conduit-signals"),t(),e(42,". In addition, we use following Angular libraries direct form sources: "),n(43,"a",28),e(44,"NG-ZORRO components src"),t(),e(45,", "),n(46,"a",29),e(47,"icons-angular src"),t(),e(48," and "),n(49,"a",30),e(50,"component-store src"),t(),e(51," with some minor changes. All our reactive states look similar to "),n(52,"a",31),e(53,"auth.store.ts"),t(),e(54,`
The app communicates with the server via REST API controllers built on top of .NET Core 9. The compiled bin code is on `),n(55,"a",32),e(56,"our GitHub repository"),t(),e(57," together with "),n(58,"a",33),e(59,"compiled Angular app"),t()(),n(60,"h2",34)(61,"span"),e(62,"Testing tools for Angular"),t(),n(63,"a",35),e(64,"#"),t()(),n(65,"p"),e(66,"We use the same tools/packages as in "),n(67,"a",36),e(68,"NG-ZORRO"),t(),e(69,", which are the same as in "),n(70,"a",37),e(71,"TEST_DEPS"),t(),e(72," plus "),n(73,"code"),e(74,"puppeteer"),t(),e(75,". In addition, Angular and NG-ZORRO have a lot of classes and functions ready to use right out of the box:"),t(),n(76,"pre",38)(77,"code")(78,"span",39),e(79,"import"),t(),e(80," { "),n(81,"span",40),e(82,"ComponentFixture"),t(),e(83,", "),n(84,"span",40),e(85,"TestBed"),t(),e(86,", fakeAsync, tick, waitForAsync, inject "),n(87,"span",39),e(88,"as"),t(),e(89," testInject } "),n(90,"span",39),e(91,"from"),t(),e(92," "),n(93,"span",41),e(94,"'@angular/core/testing'"),t(),e(95,`;
`),n(96,"span",39),e(97,"import"),t(),e(98," { dispatchMouseEvent, dispatchFakeEvent, typeInElement } "),n(99,"span",39),e(100,"from"),t(),e(101," "),n(102,"span",41),e(103,"'ng-zorro-antd/core/testing'"),t(),e(104,`;
`),n(105,"span",39),e(106,"import"),t(),e(107," { provideNzIconsTesting } "),n(108,"span",39),e(109,"from"),t(),e(110," "),n(111,"span",41),e(112,"'ng-zorro-antd/icon/testing'"),t(),e(113,";"),t()(),n(114,"h2",42)(115,"span"),e(116,"Testing Angular app together with .NET Core app"),t(),n(117,"a",43),e(118,"#"),t()(),n(119,"p"),e(120,"Our actual(up to date) "),n(121,"a",44),e(122,"test project"),t(),e(123," for our .NET Core app uses in memory database which is very convenient for testing (read more about it "),n(124,"a",45),e(125,"here"),t(),e(126," ) Next, would be great to test on a real database. So, all our Angular test from "),n(127,"a",46),e(128,"our GitHub repository"),t(),e(129,` will connect with our .NET Core app which is connected to real MS SQL database. Therefore, it represents a type of integration test.
All the files ending in `),n(130,"a",47),e(131,"*.store.spec.ts"),t(),e(132," can be considered as real API testing which is an alternative to "),n(133,"a",48),e(134,"Newman"),t(),e(135," or "),n(136,"a",49),e(137,"cypress"),t()(),n(138,"h2",50)(139,"span"),e(140,"Using Signal type in Angular together with Reactive State library"),t(),n(141,"a",51),e(142,"#"),t()(),n(143,"p"),e(144,"Before Signal type became native in Angular, we used "),n(145,"a",52),e(146,"Reactive State library"),t(),e(147," for "),n(148,"a",53),e(149,"our integration tests"),t(),e(150,". Now, the library has implemented two ways of using Signals: "),n(151,"a",54),e(152,"@ngrx/signals"),t(),e(153," and "),n(154,"a",31),e(155,"@ngrx/component-store"),t(),e(156,". We use the second one direct from sources."),t(),n(157,"h2",55)(158,"span"),e(159,"Credits"),t(),n(160,"a",56),e(161,"#"),t()(),n(162,"ul")(163,"li")(164,"a",57),e(165,"Angular contributors"),t()(),n(166,"li")(167,"a",58),e(168,"NG-ZORRO contributors"),t()(),n(169,"li")(170,"a",59),e(171,"Ant Design contributors"),t()(),n(172,"li")(173,"a",60),e(174,"Reactive State for Angular contributors"),t()(),n(175,"li")(176,"a",61),e(177,"hua jian"),t()(),n(178,"li")(179,"a",62),e(180,"Andy Tu Hoang"),t()(),n(181,"li")(182,"a",63),e(183,"Stefanos Lignos"),t()()()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),J("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,vi)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,W,j,O,L,I,P,D,F,U,V,H,B,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var ot=(()=>{class a extends En{#e=S(X);#t=S(Kt);#a=S(Yt);#i=S(te);articleListConfig=this.#e.selectors.articleListConfig;ngrxOnStoreInit(){this.setState({articleList:[],tags:[],articleCount:0})}getTags=this.effect(Xe(i=>(i.set(!0),this.#a.getTags().pipe(it(l=>{this.patchState({tags:l.tags})},l=>{nt()?console.error("Get Tags Failed",l):console.warn(`Get Tags Failed: ${l.message}`)},()=>{i.set(!1)})))));queryArticle=this.effect(je(i=>{this.#e.patchState({articleListConfig:ge(Ee({},this.articleListConfig()),{currentPage:i.params.offset?this.articleListConfig().currentPage:1,filters:{limit:i.params.limit,offset:i.params.offset,tags:i.params.tags,createdAtAsc:i.params.createdAtAsc}})}),this.#n(i.loading)}));onOffsetChange=this.effect(je(i=>{this.#e.patchState({articleListConfig:ge(Ee({},this.articleListConfig()),{currentPage:i.offset,filters:ge(Ee({},this.articleListConfig()?.filters),{offset:Number(this.articleListConfig().filters.limit)*(i.offset-1)})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));onLimitChange=this.effect(je(i=>{this.#e.patchState({articleListConfig:ge(Ee({},this.articleListConfig()),{currentPage:1,filters:ge(Ee({},this.articleListConfig()?.filters),{limit:i.limit,offset:0})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));#n=this.effect(Xe(i=>(i.set(!0),(()=>{let l=this.articleListConfig()?.filters;return this.#t.getPublicArticles({limit:l?.limit,offset:l?.offset,tags:l?.tags,createdAtAsc:l?.createdAtAsc})})().pipe(it(l=>{this.patchState({articleList:l.articles,articleCount:l.total})},l=>{nt()?console.error("getPublicArticles Failed",l):console.warn(`getPublicArticles Failed: ${l.message}`)},()=>{i.set(!1)})))));static \u0275fac=(()=>{let i;return function(r){return(i||(i=wt(a)))(r||a)}})();static \u0275prov=ut({token:a,factory:a.\u0275fac})}return a})();var Ni=(a,s,i)=>[a,s,i];function Mi(a,s){a&1&&(n(0,"div",9),d(1,"nz-spin",11),t())}function Ri(a,s){if(a&1&&(d(0,"nz-icon",14),e(1)),a&2){let i=p().$implicit;m(),ze(" ",i.title.length," ")}}function Ii(a,s){if(a&1&&(d(0,"nz-icon",15),e(1)),a&2){let i=p().$implicit;m(),ze(" ",i.slug.length," ")}}function Li(a,s){if(a&1&&(d(0,"nz-icon",16),e(1)),a&2){let i=p().$implicit;m(),ze(" ",i.id," ")}}function Bi(a,s){if(a&1){let i=_();n(0,"a",17),x("click",function(){u(i);let r=p().$implicit,o=p();return E(o.clickArticleLink(r))}),e(1),t()}if(a&2){let i=p().$implicit;m(),ze(" ",i.title," ")}}function Di(a,s){if(a&1&&e(0),a&2){let i=p(2).$implicit;ze(" ",i.description," ")}}function Fi(a,s){if(a&1){let i=_();g(0,Di,1,1),n(1,"a",18),x("click",function(){u(i);let r=p().$implicit,o=p();return E(o.clickArticleLink(r))}),e(2,"Read more"),d(3,"nz-icon",19),t()}if(a&2){let i=p().$implicit,l=p();ue(i.published?0:-1),m(),c("nzLoading",l.routerLinkLoadingId()===i.id)("disabled",l.routerLinkLoadingId()!==i.id&&l.routerLinkLoadingId()!==0)}}function Pi(a,s){if(a&1&&(n(0,"div",20)(1,"div",21)(2,"h5",22),e(3),Bt(4,"date"),t()()(),n(5,"div",23)(6,"div",24),d(7,"img",25),t()()),a&2){let i=p().$implicit,l=p();m(),et("id",i.slug),m(2),_e(Dt(4,7,i.createdAt,"MMMM d, yyyy")),m(4),At("nzSrc","https://picsum.photos/id/",i.id,"/300/200.jpg"),et("alt",i.title),c("nzFallback",l.fallback)("nzPlaceholder",l.fallback)}}function Hi(a,s){if(a&1&&(n(0,"nz-list-item",12),g(1,Ri,2,1,"ng-template",null,3,A)(3,Ii,2,1,"ng-template",null,4,A)(5,Li,2,1,"ng-template",null,5,A),n(7,"nz-list-item-meta",13),g(8,Bi,2,1,"ng-template",null,6,A)(10,Fi,4,3,"ng-template",null,7,A),t(),g(12,Pi,8,10,"ng-template",null,8,A),t()),a&2){let i=k(2),l=k(4),r=k(6),o=k(9),h=k(11),C=k(13);c("nzActions",Lt(4,Ni,i,l,r))("nzExtra",C),m(7),c("nzTitle",o)("nzDescription",h)}}function Vi(a,s){if(a&1&&(n(0,"div",20)(1,"div",24)(2,"h5",26),e(3),t()()()),a&2){let i=s,l=p(2);m(3),Mt(" ",l.articleListConfig().filters.limit*(l.articleListConfig().currentPage-1)+1," - ",l.articleListConfig().filters.limit*l.articleListConfig().currentPage>i?i:l.articleListConfig().filters.limit*l.articleListConfig().currentPage," of ",i," records ")}}function Ui(a,s){if(a&1&&g(0,Vi,4,3,"div",20),a&2){let i,l=p();ue((i=l.articlesCount())?0:-1,i)}}function Oi(a,s){if(a&1){let i=_();n(0,"nz-pagination",27),x("nzPageSizeChange",function(r){u(i);let o=p();return E(o.setPageSize(r))})("nzPageIndexChange",function(r){u(i);let o=p();return E(o.setPage(r))}),t()}if(a&2){let i=p();c("nzShowSizeChanger",!0)("nzPageSize",i.articleListConfig().filters.limit)("nzPageIndex",i.articleListConfig().currentPage)("nzTotal",i.articlesCount())}}var Fn=(()=>{class a{articleList;articlesCount;isLoading;articleListConfig;oldLimit;nzSetPage=new Ne;nzSetPageSize=new Ne;router=S(ne);changeDetectorRef=S(K);routerLinkLoadingId=Be(0);fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==";clickArticleLink(i){this.routerLinkLoadingId.set(i.id),this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.router.navigate(["articles",i.slug])})}setPage(i){this.oldLimit()===this.articleListConfig().filters.limit?this.nzSetPage.emit(i):this.oldLimit.set(this.articleListConfig().filters.limit)}setPageSize(i){this.articleListConfig().currentPage>Math.ceil(this.articlesCount()/i)?this.oldLimit.set(this.articleListConfig().filters.limit):this.oldLimit.set(i),this.nzSetPageSize.emit(i)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["app-articles"]],inputs:{articleList:"articleList",articlesCount:"articlesCount",isLoading:"isLoading",articleListConfig:"articleListConfig",oldLimit:"oldLimit"},outputs:{nzSetPage:"nzSetPage",nzSetPageSize:"nzSetPageSize"},decls:8,vars:7,consts:[["item",""],["footer",""],["pagination",""],["starAction",""],["likeAction",""],["msgAction",""],["nzTitle",""],["nzDescription",""],["extra",""],[1,"app-article-preview"],[3,"hidden","nzDataSource","nzItemLayout","nzRenderItem","nzPagination","nzFooter"],["nzTip","Loading posts..."],[3,"nzActions","nzExtra"],[3,"nzTitle","nzDescription"],["nzType","star-o",2,"margin-right","8px"],["nzType","like-o",2,"margin-right","8px"],["nzType","message",2,"margin-right","8px"],[3,"click"],["nz-button","","nzType","link",3,"click","nzLoading","disabled"],["nzType","arrow-right"],["nz-row","","nzJustify","end"],["nz-col","",3,"id"],["nz-typography","","nzType","secondary"],["nz-row",""],["nz-col",""],["nz-image","","width","300px","height","200px",3,"nzSrc","nzFallback","nzPlaceholder","alt"],["nz-typography",""],[3,"nzPageSizeChange","nzPageIndexChange","nzShowSizeChanger","nzPageSize","nzPageIndex","nzTotal"]],template:function(l,r){if(l&1&&(g(0,Mi,2,0,"div",9),n(1,"nz-list",10),g(2,Hi,14,8,"ng-template",null,0,A)(4,Ui,1,1,"ng-template",null,1,A)(6,Oi,1,4,"ng-template",null,2,A),t()),l&2){let o=k(3),h=k(5),C=k(7);ue(r.isLoading()?0:-1),m(),c("hidden",r.isLoading())("nzDataSource",r.articleList())("nzItemLayout","vertical")("nzRenderItem",o)("nzPagination",C)("nzFooter",h)}},dependencies:[Vt,sn,on,W,j,O,zn,wn,_n,bn,B,Zt,H,mn,Tn,Cn,P,D,F,L,I,De,U,V],encapsulation:2,changeDetection:0})}return a})();var Ji=(a,s)=>[a,s],Pn=()=>({standalone:!0});function Qi(a,s){if(a&1&&(b(0),n(1,"h5",16),d(2,"nz-icon",17),t(),w()),a&2){let i=p(2);m(2),c("nzTooltipTitle",i.applyTooltipTitle)}}function Gi(a,s){a&1&&g(0,Qi,3,1,"ng-container",11)}function qi(a,s){if(a&1){let i=_();b(0),n(1,"button",18),x("nzOnConfirm",function(){u(i);let r=p();return E(r.confirmApply())}),d(2,"nz-icon",19),e(3," Apply "),t(),w()}if(a&2){let i=p(),l=k(9);m(),c("disabled",i.disableApply())("nzIcon",l)}}function Ki(a,s){if(a&1){let i=_();b(0),n(1,"button",20),x("nzOnConfirm",function(){u(i);let r=p();return E(r.confirmClose())}),d(2,"nz-icon",21),e(3," Close "),t(),w()}if(a&2){p();let i=k(7);m(),c("nzIcon",i)("nzOkDanger",!0)}}function Yi(a,s){a&1&&(b(0),n(1,"h4",16),d(2,"nz-icon",22),t(),w())}function Zi(a,s){a&1&&(b(0),n(1,"h5",23),e(2,"Do you want to close without changes?"),t(),w())}function Xi(a,s){a&1&&(n(0,"nz-space",10),g(1,Yi,3,0,"ng-container",11)(2,Zi,3,0,"ng-container",11),t())}function $i(a,s){a&1&&(b(0),n(1,"h4",24),d(2,"nz-icon",22),t(),w())}function ea(a,s){a&1&&(b(0),n(1,"h5",23),e(2,"Do you want to apply changes?"),t(),w())}function ta(a,s){a&1&&(n(0,"nz-space",10),g(1,$i,3,0,"ng-container",11)(2,ea,3,0,"ng-container",11),t())}function na(a,s){if(a&1){let i=_();b(0),n(1,"nz-switch",25),G("ngModelChange",function(r){u(i);let o=p();return Q(o.isAscending,r)||(o.isAscending=r),E(r)}),x("click",function(){u(i);let r=p();return E(r.ascendingEnable())}),t(),w()}if(a&2){let i=p();m(),J("ngModel",i.isAscending),c("ngModelOptions",ee(2,Pn))}}function ia(a,s){if(a&1){let i=_();b(0),n(1,"nz-switch",26),G("ngModelChange",function(r){u(i);let o=p();return Q(o.showSearch,r)||(o.showSearch=r),E(r)}),x("click",function(){u(i);let r=p();return E(r.disableEnable())}),t(),w()}if(a&2){let i=p();m(),J("ngModel",i.showSearch),c("ngModelOptions",ee(3,Pn))("disabled",i.leftSearch||i.rightSearch)}}function aa(a,s){a&1&&(b(0),n(1,"h5",16),d(2,"nz-icon",27),t(),w())}function ra(a,s){a&1&&g(0,aa,3,0,"ng-container",11)}function la(a,s){a&1&&(b(0),n(1,"h4",33),e(2,"Remaining Tags"),t(),w())}function oa(a,s){a&1&&(b(0),n(1,"h5",33),d(2,"nz-icon",34),t(),w())}function sa(a,s){if(a&1&&d(0,"nz-option",30),a&2){let i=s.$implicit;c("nzLabel",i.label)("nzValue",i.value)}}function ma(a,s){if(a&1&&(d(0,"nz-icon",35),e(1)),a&2){let i=s.$implicit;c("nzType","sort-"+i.nzValue),m(),ze(" ",i.nzLabel," ")}}function da(a,s){if(a&1){let i=_();n(0,"tr",36),x("click",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),n(1,"td",37),x("nzCheckedChange",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),t(),n(2,"td"),e(3),t()()}if(a&2){let i=s.$implicit,l=p().disabled;m(),c("nzChecked",i.checked)("nzDisabled",l||i.disabled),m(2),_e(i.title)}}function pa(a,s){if(a&1){let i=_();n(0,"div",28)(1,"div",9)(2,"nz-space",10),g(3,la,3,0,"ng-container",11)(4,oa,3,0,"ng-container",11),t()()(),n(5,"div",28)(6,"div",9)(7,"nz-select",29),G("ngModelChange",function(r){u(i);let o=p();return Q(o.orderModelLeft,r)||(o.orderModelLeft=r),E(r)}),x("ngModelChange",function(r){u(i);let o=p();return E(o.handleOrderLeft(r))}),Ve(8,sa,1,2,"nz-option",30,He),t(),g(10,ma,2,2,"ng-template",null,4,A),t()(),n(12,"nz-table",31,5)(14,"thead")(15,"tr")(16,"th",32),x("nzCheckedChange",function(r){let o=u(i).onItemSelectAll;return E(o(r))}),t(),n(17,"th"),e(18,"All"),t()()(),n(19,"tbody"),Ve(20,da,4,3,"tr",null,He),t()()}if(a&2){let i=s.$implicit,l=s.stat,r=s.disabled,o=k(11),h=k(13),C=p();m(7),c("nzBackdrop",!0)("nzCustomTemplate",o),J("ngModel",C.orderModelLeft),m(),Ue(C.listOfOption),m(4),c("nzData",C.convertItemsRight(i)),m(4),c("nzDisabled",r)("nzChecked",l.checkAll)("nzIndeterminate",l.checkHalf),m(4),Ue(h.data)}}function ca(a,s){a&1&&(b(0),n(1,"h4",24),e(2,"Selected Tags"),t(),w())}function xa(a,s){a&1&&(b(0),n(1,"h5",24),d(2,"nz-icon",38),t(),w())}function ha(a,s){if(a&1&&d(0,"nz-option",30),a&2){let i=s.$implicit;c("nzLabel",i.label)("nzValue",i.value)}}function Sa(a,s){if(a&1&&(d(0,"nz-icon",35),e(1)),a&2){let i=s.$implicit;c("nzType","sort-"+i.nzValue),m(),ze(" ",i.nzLabel," ")}}function ua(a,s){if(a&1){let i=_();n(0,"tr",36),x("click",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),n(1,"td",37),x("nzCheckedChange",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),t(),n(2,"td"),e(3),t()()}if(a&2){let i=s.$implicit,l=p().disabled;m(),c("nzChecked",i.checked)("nzDisabled",l||i.disabled),m(2),_e(i.title)}}function Ea(a,s){if(a&1){let i=_();n(0,"div",28)(1,"div",9)(2,"nz-space",10),g(3,ca,3,0,"ng-container",11)(4,xa,3,0,"ng-container",11),t()()(),n(5,"div",28)(6,"div",9)(7,"nz-select",29),G("ngModelChange",function(r){u(i);let o=p();return Q(o.orderModelRight,r)||(o.orderModelRight=r),E(r)}),x("ngModelChange",function(r){u(i);let o=p();return E(o.handleOrderRight(r))}),Ve(8,ha,1,2,"nz-option",30,He),t(),g(10,Sa,2,2,"ng-template",null,6,A),t()(),n(12,"nz-table",31,7)(14,"thead")(15,"tr")(16,"th",32),x("nzCheckedChange",function(r){let o=u(i).onItemSelectAll;return E(o(r))}),t(),n(17,"th"),e(18,"All"),t()()(),n(19,"tbody"),Ve(20,ua,4,3,"tr",null,He),t()()}if(a&2){let i=s.$implicit,l=s.stat,r=s.disabled,o=k(11),h=k(13),C=p();m(7),c("nzBackdrop",!0)("nzCustomTemplate",o),J("ngModel",C.orderModelRight),m(),Ue(C.listOfOption),m(4),c("nzData",C.convertItemsLeft(i)),m(4),c("nzDisabled",r)("nzChecked",l.checkAll)("nzIndeterminate",l.checkHalf),m(4),Ue(h.data)}}var Hn=(()=>{class a{params;nzMessageService=S(un);drawerRef=S(jt);selectedCount=0;list=[];showSearch=!1;leftSearch=!1;rightSearch=!1;selectedTags=[];applyTooltipTitle="";orderModelLeft=null;orderModelRight=null;listOfOption=[{label:"Ascending",value:"ascending"},{label:"Descending",value:"descending"}];sortOrder=null;isAscending=!1;createdAtAsc=null;initialCreatedAtAsc=null;isTagListChange(){let i=this.selectedTags||[];if(this.selectedTags=[],this.list.filter(r=>r.direction==="right").forEach(r=>this.selectedTags.push(r.id)),this.createdAtAsc!==this.initialCreatedAtAsc||i?.length!==this.selectedTags.length)return!0;let l=!0;return i.forEach(r=>l=l&&this.selectedTags.includes(r)),!l}ngOnInit(){this.params.createdAtAsc===void 0?(this.isAscending=!1,this.createdAtAsc=null):(this.isAscending=this.params.createdAtAsc,this.createdAtAsc=this.isAscending),this.initialCreatedAtAsc=this.createdAtAsc,this.params.tags?this.selectedTags=this.params.tags:(this.selectedTags=[],this.params.tagList.forEach(i=>this.selectedTags.push(i.id))),this.list=[],this.params.tagList.forEach(i=>this.list.push({title:i.title,id:i.id,direction:this.selectedTags.includes(i.id)?"right":"left"})),this.selectedCount=this.selectedTags.length}ascendingEnable(){this.isAscending?this.createdAtAsc=null:this.createdAtAsc=!0}disableEnable(){this.showSearch||(this.showSearch=this.leftSearch||this.rightSearch)}handleSearchChange(i){i.direction==="left"?this.leftSearch=i.value!=="":this.rightSearch=i.value!==""}handleChange(i){i.from==="right"?(this.orderModelLeft=null,this.sortOrder={direction:"left",sortOrder:null},this.selectedCount-=i.list.length):(this.orderModelRight=null,this.sortOrder={direction:"right",sortOrder:null},this.selectedCount+=i.list.length)}handleFilterOption(i,l){return l.title.toLowerCase().includes(i.toLowerCase())}confirmClose(){this.isTagListChange()&&this.nzMessageService.warning("Changes were not saved!"),this.drawerRef.close(!1)}disableApply(){return this.selectedCount<1?(this.applyTooltipTitle="It should be at least one selected tag.",!0):this.selectedCount>100?(this.applyTooltipTitle="It should not be more than 100 selected tags.",!0):!1}confirmApply(){this.isTagListChange()?(this.nzMessageService.info("Applying selected tags."),this.selectedTags.length===this.list.length&&(this.selectedTags=null),this.drawerRef.close({tags:this.selectedTags,createdAtAsc:this.createdAtAsc})):this.drawerRef.close(null)}convertItemsRight(i){return i.filter(l=>!l.hide)}convertItemsLeft(i){return i.filter(l=>!l.hide)}handleOrderRight(i){this.sortOrder={direction:"right",sortOrder:i}}handleOrderLeft(i){this.sortOrder={direction:"left",sortOrder:i}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["app-article-listing-tags"]],inputs:{params:"params"},decls:24,vars:11,consts:[["closeTpl",""],["applyTpl",""],["renderList",""],["renderSelectedList",""],["orderTemplateLeft",""],["t1",""],["orderTemplateRight",""],["t2",""],["nz-row","","nzJustify","end"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],["nz-row","","nzJustify","end",2,"margin-top","20px"],["nz-row","","nzJustify","start",2,"margin-bottom","20px"],["nzSize","small","nzAlign","center"],[3,"nzSearchChange","nzChange","nzDataSource","nzShowSearch","nzShowSelectAll","nzFilterOption","nzRenderList","nzSortOrder"],["nz-typography","","nzType","danger"],["nzType","info-circle","nz-tooltip","",3,"nzTooltipTitle"],["nz-button","","nzType","primary","nzShape","round","nz-popconfirm","","nzPopconfirmTitle"," ","nzPopconfirmShowArrow","false","nzOkText","Yes","nzCancelText","No",3,"nzOnConfirm","disabled","nzIcon"],["nzType","check"],["nz-button","","nzDanger","true","nzShape","round","nz-popconfirm","","nzPopconfirmTitle"," ","nzPopconfirmShowArrow","false","nzOkText","Yes","nzCancelText","No",3,"nzOnConfirm","nzIcon","nzOkDanger"],["nzType","close"],["nzType","question-circle-o"],["nz-typography",""],["nz-typography","","nzType","success"],["nzCheckedChildren","Oldest articles first","nzUnCheckedChildren","Newest articles first",3,"ngModelChange","click","ngModel","ngModelOptions"],["nzCheckedChildren","Hide Search","nzUnCheckedChildren","Show Search",3,"ngModelChange","click","ngModel","ngModelOptions","disabled"],["nzType","info-circle","nz-tooltip","","nzTooltipTitle","Clear out all search boxes in order to hide them."],["nz-row","","nzJustify","center"],["nzAllowClear","","nzPlaceHolder","Sort Order...",3,"ngModelChange","nzBackdrop","nzCustomTemplate","ngModel"],[3,"nzLabel","nzValue"],["nzSize","small",3,"nzData"],["nzShowCheckbox","",3,"nzCheckedChange","nzDisabled","nzChecked","nzIndeterminate"],["nz-typography","","nzType","warning"],["nzType","info-circle","nz-tooltip","","nzTooltipTitle","Here are all remaining tags."],[3,"nzType"],[3,"click"],["nzShowCheckbox","",3,"nzCheckedChange","nzChecked","nzDisabled"],["nzType","info-circle","nz-tooltip","","nzTooltipTitle","Here are all selected tags."]],template:function(l,r){if(l&1){let o=_();n(0,"div",8)(1,"div",9)(2,"nz-space",10),g(3,Gi,1,0,"ng-container")(4,qi,4,2,"ng-container",11)(5,Ki,4,2,"ng-container",11),t()(),g(6,Xi,3,0,"ng-template",null,0,A)(8,ta,3,0,"ng-template",null,1,A),t(),n(10,"div",12)(11,"div",9)(12,"nz-space",10),g(13,na,2,3,"ng-container",11),t()()(),n(14,"div",13)(15,"div",9)(16,"nz-space",14),g(17,ia,2,4,"ng-container",11)(18,ra,1,0,"ng-container"),t()()(),n(19,"nz-transfer",15),x("nzSearchChange",function(C){return u(o),E(r.handleSearchChange(C))})("nzChange",function(C){return u(o),E(r.handleChange(C))}),g(20,pa,22,7,"ng-template",null,2,A)(22,Ea,22,7,"ng-template",null,3,A),t()}if(l&2){let o=k(21),h=k(23);m(3),ue(r.disableApply()?3:-1),m(15),ue(r.leftSearch||r.rightSearch?18:-1),m(),c("nzDataSource",r.list)("nzShowSearch",r.showSearch)("nzShowSelectAll",!1)("nzFilterOption",r.handleFilterOption)("nzRenderList",It(8,Ji,o,h))("nzSortOrder",r.sortOrder)}},dependencies:[re,ie,ae,P,D,F,Ye,qt,W,j,O,L,I,De,Ze,B,Z,Y,H,xn,dn,Xt,en,$t,cn,nn,pn,tn,kn,vn,Sn,hn,de,me,ln,an,rn,U,V],encapsulation:2,changeDetection:0})}return a})();var ga=["drawerTitleTemplate"];function fa(a,s){a&1&&(b(0),n(1,"h4",13),d(2,"nz-icon",14),t(),w())}function ba(a,s){a&1&&(b(0),n(1,"h5",15),e(2,"Do you want to reload all articles?"),t(),w())}function wa(a,s){a&1&&(n(0,"nz-space",7),g(1,fa,3,0,"ng-container",8)(2,ba,3,0,"ng-container",8),t())}function _a(a,s){if(a&1){let i=_();b(0),n(1,"button",11),x("nzOnConfirm",function(){u(i);let r=p();return E(r.selectAll())}),d(2,"nz-icon",12),t(),g(3,wa,3,0,"ng-template",null,1,A),w()}if(a&2){let i=k(4),l=p();m(),c("nzLoading",l.isArticlesLoading())("nzIcon",i)}}function za(a,s){if(a&1){let i=_();b(0),n(1,"button",16),x("click",function(){u(i);let r=p();return E(r.openTagsFilter())}),d(2,"nz-icon",17),e(3," Tags "),t(),n(4,"nz-badge",18),d(5,"a",19),t(),w()}if(a&2){let i=p();m(),c("nzLoading",i.isTagsLoading()),m(3),c("nzCount",i.tagCount())}}function ya(a,s){if(a&1&&(n(0,"div",5)(1,"div",6)(2,"h3",20),e(3),t()()()),a&2){let i=p();m(3),_e(i.title)}}var Un=(()=>{class a{drawerTitleTemplate;#e=S(ot);#t=S(X);articleListConfig=this.#t.selectors.articleListConfig;windowWidth=this.#t.selectors.width;articleCount=this.#e.selectors.articleCount;articleList=this.#e.selectors.articleList;tagList=this.#e.selectors.tags;drawerService=S(Gt);isTagsLoading=Be(!1);isArticlesLoading=Be(!1);tagCount=Pt(()=>this.articleListConfig()?.filters.tags?this.articleListConfig()?.filters.tags.length:0);oldLimit=Be(this.articleListConfig().filters.limit);title="";noCancel(){return new Promise(l=>{try{l(!1)}finally{}})}ngOnInit(){this.#t.setAdminArticles(!1);let i=this.articleListConfig()?.filters;(i?.tags===void 0||i?.tags===null)&&(i?.createdAtAsc===void 0||i?.createdAtAsc===null)?this.selectAll():(this.#e.getTags(this.isTagsLoading),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:i?.limit,offset:0,tags:i?.tags,createdAtAsc:i?.createdAtAsc}}))}selectAll(){this.#e.getTags(this.isTagsLoading),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:10,offset:0}}),this.oldLimit.set(10)}onPageOffsetChange(i){this.#e.onOffsetChange({loading:this.isArticlesLoading,offset:i})}onPageLimitChange(i){this.#e.onLimitChange({loading:this.isArticlesLoading,limit:i})}openTagsFilter(){if(this.isTagsLoading())return;this.isTagsLoading.set(!0),this.title="Article Tags";let i=this.articleListConfig()?.filters;this.drawerService.create({nzTitle:this.drawerTitleTemplate,nzContent:Hn,nzWidth:this.windowWidth()>600?600:this.windowWidth(),nzClosable:!1,nzOnCancel:this.noCancel,nzContentParams:{params:{tagList:this.tagList(),tags:i?.tags,createdAtAsc:i?.createdAtAsc}}}).afterClose.subscribe(r=>{if(r){let o=this.articleListConfig()?.filters;this.#e.queryArticle({loading:this.isArticlesLoading,params:ge(Ee({},r),{limit:o?.limit,offset:0})})}this.isTagsLoading.set(!1)})}pageHeaderInfo={title:"Articles",desc:"This page is a symbiose between dynamic (.NET Core, SQL Server database) and static (JavaScript, CSS, icon, etc.) resources. All articles are served as static content from JavaScript files compiled by Angular framework. In addition, JavaScript files are served via lazy loading. Articles metadata is stored in the database and served dynamically by .NET Core API controllers."};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["app-home-listing"]],viewQuery:function(l,r){if(l&1&&R(ga,5),l&2){let o;N(o=M())&&(r.drawerTitleTemplate=o.first)}},features:[Rt([Ot(ot)])],decls:14,vars:7,consts:[["drawerTitleTemplate",""],["applyTpl",""],[3,"pageHeaderInfo"],[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","center"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],["nz-row","","nzJustify","end"],[3,"nzSetPage","nzSetPageSize","articleList","articlesCount","isLoading","articleListConfig","oldLimit"],["nz-button","","nzType","primary","nzShape","circle","nz-popconfirm","","nzPopconfirmTitle"," ","nzPopconfirmShowArrow","false","nzOkText","Yes","nzCancelText","No",3,"nzOnConfirm","nzLoading","nzIcon"],["nzType","sync"],["nz-typography","","nzType","success"],["nzType","question-circle-o"],["nz-typography",""],["nz-button","","nzType","primary","nzShape","round",3,"click","nzLoading"],["nzType","tag"],[3,"nzCount"],[1,"head-example"],["nz-typography","","nzType","warning"]],template:function(l,r){if(l&1){let o=_();d(0,"app-page-header",2),n(1,"div",3)(2,"nz-card",4)(3,"div",5)(4,"div",6)(5,"nz-space",7),g(6,_a,5,2,"ng-container",8),t()()(),n(7,"div",9)(8,"div",6)(9,"nz-space",7),g(10,za,6,2,"ng-container",8),t()()(),n(11,"app-articles",10),x("nzSetPage",function(C){return u(o),E(r.onPageOffsetChange(C))})("nzSetPageSize",function(C){return u(o),E(r.onPageLimitChange(C))}),t(),g(12,ya,4,1,"ng-template",null,0,A),t()()}l&2&&(c("pageHeaderInfo",r.pageHeaderInfo),m(2),c("nzBordered",!0),m(9),c("articleList",r.articleList)("articlesCount",r.articleCount)("isLoading",r.isArticlesLoading)("articleListConfig",r.articleListConfig)("oldLimit",r.oldLimit))},dependencies:[yn,Fn,fn,gn,P,D,F,Ye,oe,le,L,I,De,Ze,B,Z,Y,H,U,V,W,j,O],encapsulation:2,changeDetection:0})}return a})();var Ts=[{path:"",pathMatch:"full",title:"Articles",data:{key:"articles"},component:Un},{path:"what-version-of-this-blog",title:"What Version?",data:{key:"what-version-of-this-blog"},component:Nn},{path:"svg-icons",title:"SVG Icons",data:{key:"svg-icons"},component:Mn},{path:"dotnet-core-testing",title:"ASP.NET Testing",data:{key:"dotnet-core-testing"},component:Rn},{path:"about-this-blog",title:"My Blog",data:{key:"about-this-blog"},component:In},{path:"test-readme",title:"MyTested Example",data:{key:"test-readme"},component:Ln},{path:"ratelimit-middleware",title:"JWT Token Refresh",data:{key:"ratelimit-middleware"},component:Bn},{path:"testing-angular-apps",title:"Testing Angular Apps",data:{key:"testing-angular-apps"},component:Dn}];export{Ts as BLOG_ROUTES};
