import{a as y,b as se}from"./chunk-3CVOTWYR.js";import{a as vn,b as kn,c as An,d as Nn}from"./chunk-GJYOVCJI.js";import{a as bn,b as wn,c as _n,d as zn,e as yn,f as Cn}from"./chunk-RQOXHSAQ.js";import{a as me,b as de}from"./chunk-PIECI2SU.js";import{A as D,B as cn,C as xn,D as hn,E as Sn,G as gn,I as fn,J as X,d as Wt,e as it,h as Zt,j as Xt,m as en,n as tn,o as nn,p as an,t as rn,u as ln,v as on,w as sn,x as mn,y as dn,z as pn}from"./chunk-DQL7YQFK.js";import"./chunk-OJS4HORB.js";import"./chunk-7B4C2SUX.js";import{a as Tn}from"./chunk-SCSUKDHS.js";import{b as Jt,d as Kt,e as Yt,k as Ze,l as De}from"./chunk-5DICTUBO.js";import{C as un,E as En,K as F,L as P,M as H,N as V,O as U,g as ie,l as ae,s as re}from"./chunk-UHWNKUEP.js";import{A as ce,D as Ke,Db as Y,Eb as Z,F as jt,Fb as R,Ja as at,Mb as I,Nb as L,Ob as Ye,Qb as B,Tb as $t,Xb as le,Ya as Qt,Yb as oe,Za as Gt,_a as Oe,hb as qt,u as ne,xb as N,zb as M}from"./chunk-GXB3XVBA.js";import{$b as ue,$c as nt,Ab as fe,Ac as k,Bc as e,Cc as _e,Da as gt,Db as Ct,Dc as ze,Dd as te,Ea as ft,Fa as bt,Fc as It,Ga as u,Gc as W,Ha as E,Hb as v,Hc as J,Ib as Tt,Ic as Q,Ja as wt,Mc as Lt,Nb as g,Nc as ee,Oc as tt,Pa as Me,Pc as Bt,Qc as Dt,Tb as vt,Tc as Ft,Ua as _t,Ub as c,V as Xe,Vc as Pt,Xa as Ae,Xb as kt,Xc as A,Yb as $e,a as Ee,ad as K,b as ge,bc as He,cc as Ve,dc as Ue,dd as Ge,ec as n,ed as Ht,fc as t,fd as Vt,ga as ht,gc as d,hc as b,ia as je,ic as w,j as xt,ja as St,kc as _,na as ut,nc as x,oa as Et,od as Ut,pc as p,q as Pe,qc as Je,r as we,rc as Qe,sb as zt,sc as et,ta as S,tc as At,uc as Nt,vb as m,vc as q,wc as O,xb as yt,xc as j,xd as qe,yc as Mt,zb as We,zc as Rt,zd as Ot}from"./chunk-M4WFQFY3.js";function rt(a,s){if(!a||!a.getClientRects().length)return 0;let i=a.getBoundingClientRect();if(i.width||i.height){if(s===window){let l=a.ownerDocument.documentElement;return i.top-l.clientTop}return i.top-s.getBoundingClientRect().top}return i.top}var Jn=["ink"],Qn=["*"],Gn=a=>({"ant-anchor-wrapper-horizontal":a}),qn=a=>({"ant-anchor-fixed":a});function Kn(a,s){}function Yn(a,s){if(a&1&&(n(0,"nz-affix",2),g(1,Kn,0,0,"ng-template",3),t()),a&2){let i=p(),l=k(3);c("nzOffsetTop",i.nzOffsetTop)("nzTarget",i.container),m(),c("ngTemplateOutlet",l)}}function Zn(a,s){}function Xn(a,s){if(a&1&&g(0,Zn,0,0,"ng-template",3),a&2){p();let i=k(3);c("ngTemplateOutlet",i)}}function $n(a,s){if(a&1&&(n(0,"div",4)(1,"div",5)(2,"div",6),d(3,"div",7,1),t(),Qe(5),t()()),a&2){let i=p();kt(i.wrapperStyle),$e(tt(6,Gn,i.nzDirection==="horizontal")),m(),$e(tt(8,qn,!i.nzAffix&&!i.nzShowInkInFixed))}}var Mn="ant-anchor-ink-ball-visible",ei="anchor",ti=/#([^#]+)$/,ni=jt({passive:!0}),$=(()=>{let a,s=[],i=[],l,r=[],o=[],h,C=[],st=[],mt,dt=[],pt=[];return class lt{static{let z=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;a=[Oe()],l=[Oe()],h=[Oe()],mt=[Oe()],Pe(null,null,a,{kind:"field",name:"nzShowInkInFixed",static:!1,private:!1,access:{has:f=>"nzShowInkInFixed"in f,get:f=>f.nzShowInkInFixed,set:(f,T)=>{f.nzShowInkInFixed=T}},metadata:z},s,i),Pe(null,null,l,{kind:"field",name:"nzBounds",static:!1,private:!1,access:{has:f=>"nzBounds"in f,get:f=>f.nzBounds,set:(f,T)=>{f.nzBounds=T}},metadata:z},r,o),Pe(null,null,h,{kind:"field",name:"nzOffsetTop",static:!1,private:!1,access:{has:f=>"nzOffsetTop"in f,get:f=>f.nzOffsetTop,set:(f,T)=>{f.nzOffsetTop=T}},metadata:z},C,st),Pe(null,null,mt,{kind:"field",name:"nzTargetOffset",static:!1,private:!1,access:{has:f=>"nzTargetOffset"in f,get:f=>f.nzTargetOffset,set:(f,T)=>{f.nzTargetOffset=T}},metadata:z},dt,pt),z&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:z})}constructor(z,f,T,G,pe){this.nzConfigService=z,this.scrollSrv=f,this.cdr=T,this.platform=G,this.renderer=pe,this._nzModuleName=ei,this.nzAffix=!0,this.nzShow=!0,this.nzShowInkInFixed=we(this,s,!1),this.nzBounds=(we(this,i),we(this,r,5)),this.nzOffsetTop=(we(this,o),we(this,C,void 0)),this.nzTargetOffset=(we(this,st),we(this,dt,void 0)),this.nzContainer=we(this,pt),this.nzDirection="vertical",this.nzClick=new Me,this.nzChange=new Me,this.nzScroll=new Me,this.visible=!1,this.wrapperStyle={"max-height":"100vh"},this.links=[],this.animating=!1,this.destroy$=new xt,this.doc=S(Ut)}registerLink(z){this.links.push(z)}unregisterLink(z){this.links.splice(this.links.indexOf(z),1)}getContainer(){return this.container||window}ngAfterViewInit(){this.registerScrollEvent()}ngOnDestroy(){clearTimeout(this.handleScrollTimeoutID),this.destroy$.next(!0),this.destroy$.complete()}registerScrollEvent(){this.platform.isBrowser&&(this.destroy$.next(!0),Qt(this.getContainer(),"scroll",ni).pipe(St(50),ht(this.destroy$)).subscribe(()=>this.handleScroll()),this.handleScrollTimeoutID=setTimeout(()=>this.handleScroll()))}handleScroll(){if(typeof document>"u"||this.animating)return;let z=[],T=(this.nzTargetOffset?this.nzTargetOffset:this.nzOffsetTop||0)+this.nzBounds;if(this.links.forEach(G=>{let pe=ti.exec(G.nzHref.toString());if(!pe)return;let be=this.doc.getElementById(pe[1]);if(be){let ct=rt(be,this.getContainer());ct<T&&z.push({top:ct,comp:G})}}),this.visible=!!z.length,!this.visible)this.clearActive(),this.cdr.detectChanges();else{let G=z.reduce((pe,be)=>be.top>pe.top?be:pe);this.handleActive(G.comp)}this.setVisible()}clearActive(){this.links.forEach(z=>{z.unsetActive()})}setActive(z){let f=this.activeLink,T=this.nzCurrentAnchor&&this.links.find(pe=>pe.nzHref===this.nzCurrentAnchor)||z;if(!T)return;T.setActive();let G=T.getLinkTitleElement();this.nzDirection==="vertical"?this.ink.nativeElement.style.top=`${G.offsetTop+G.clientHeight/2-4.5}px`:this.ink.nativeElement.style.left=`${G.offsetLeft+G.clientWidth/2}px`,this.activeLink=(z||T).nzHref,f!==this.activeLink&&this.nzChange.emit(this.activeLink)}handleActive(z){this.clearActive(),this.setActive(z),this.visible=!0,this.setVisible(),this.nzScroll.emit(z)}setVisible(){this.ink&&(this.visible?this.renderer.addClass(this.ink.nativeElement,Mn):this.renderer.removeClass(this.ink.nativeElement,Mn))}handleScrollTo(z){let f=this.doc.querySelector(z.nzHref);if(!f)return;this.animating=!0;let T=this.scrollSrv.getScroll(this.getContainer()),G=rt(f,this.getContainer()),pe=T+G;pe-=this.nzTargetOffset!==void 0?this.nzTargetOffset:this.nzOffsetTop||0,this.scrollSrv.scrollTo(this.getContainer(),pe,{callback:()=>{this.animating=!1,this.handleActive(z)}}),this.nzClick.emit(z.nzHref)}ngOnChanges(z){let{nzShow:f,nzOffsetTop:T,nzContainer:G,nzCurrentAnchor:pe}=z;if(T&&(this.wrapperStyle=ge(Ee({},this.wrapperStyle),{"max-height":`calc(100vh - ${this.nzOffsetTop}px)`})),f&&(this.wrapperStyle=ge(Ee({},this.wrapperStyle),{display:this.nzShow?"block":"none"})),G){let be=this.nzContainer;this.container=typeof be=="string"?this.doc.querySelector(be):be,this.registerScrollEvent()}pe&&this.setActive()}static{this.\u0275fac=function(f){return new(f||lt)(fe(Gt),fe(qt),fe(K),fe(Ke),fe(We))}}static{this.\u0275cmp=v({type:lt,selectors:[["nz-anchor"]],viewQuery:function(f,T){if(f&1&&q(Jn,5),f&2){let G;O(G=j())&&(T.ink=G.first)}},inputs:{nzAffix:[2,"nzAffix","nzAffix",Ge],nzShow:[2,"nzShow","nzShow",Ge],nzShowInkInFixed:[2,"nzShowInkInFixed","nzShowInkInFixed",Ge],nzBounds:[2,"nzBounds","nzBounds",Ht],nzOffsetTop:[2,"nzOffsetTop","nzOffsetTop",at],nzTargetOffset:[2,"nzTargetOffset","nzTargetOffset",at],nzContainer:"nzContainer",nzCurrentAnchor:"nzCurrentAnchor",nzDirection:"nzDirection"},outputs:{nzClick:"nzClick",nzChange:"nzChange",nzScroll:"nzScroll"},exportAs:["nzAnchor"],features:[gt],ngContentSelectors:Qn,decls:4,vars:1,consts:[["content",""],["ink",""],[3,"nzOffsetTop","nzTarget"],[3,"ngTemplateOutlet"],[1,"ant-anchor-wrapper"],[1,"ant-anchor"],[1,"ant-anchor-ink"],[1,"ant-anchor-ink-ball"]],template:function(f,T){f&1&&(Je(),g(0,Yn,2,3,"nz-affix",2)(1,Xn,1,1,null,3)(2,$n,6,10,"ng-template",null,0,A)),f&2&&ue(T.nzAffix?0:1)},dependencies:[qe,se,y],encapsulation:2,changeDetection:0})}}})();var ai=["nzTemplate"],ri=["linkTitle"],li=["*"];function oi(a,s){if(a&1&&(n(0,"span"),e(1),t()),a&2){let i=p();m(),_e(i.titleStr)}}function si(a,s){}function mi(a,s){if(a&1&&g(0,si,0,0,"ng-template",2),a&2){let i=p();c("ngTemplateOutlet",i.titleTpl||i.nzTemplate)}}function di(a,s){a&1&&Qe(0)}var xe=(()=>{class a{set nzTitle(i){i instanceof yt?(this.titleStr=null,this.titleTpl=i):this.titleStr=i}constructor(i,l,r,o){this.elementRef=i,this.anchorComp=l,this.platform=r,this.renderer=o,this.nzHref="#",this.titleStr="",this.nzDirection="vertical"}ngOnInit(){this.anchorComp.registerLink(this),this.nzDirection=this.anchorComp.nzDirection}getLinkTitleElement(){return this.linkTitle.nativeElement}setActive(){this.renderer.addClass(this.elementRef.nativeElement,"ant-anchor-link-active")}unsetActive(){this.renderer.removeClass(this.elementRef.nativeElement,"ant-anchor-link-active")}goToClick(i){i.preventDefault(),i.stopPropagation(),this.platform.isBrowser&&this.anchorComp.handleScrollTo(this)}ngOnDestroy(){this.anchorComp.unregisterLink(this)}static{this.\u0275fac=function(l){return new(l||a)(fe(_t),fe($),fe(Ke),fe(We))}}static{this.\u0275cmp=v({type:a,selectors:[["nz-link"]],contentQueries:function(l,r,o){if(l&1&&Nt(o,ai,5),l&2){let h;O(h=j())&&(r.nzTemplate=h.first)}},viewQuery:function(l,r){if(l&1&&q(ri,5),l&2){let o;O(o=j())&&(r.linkTitle=o.first)}},hostAttrs:[1,"ant-anchor-link"],inputs:{nzHref:"nzHref",nzTarget:"nzTarget",nzTitle:"nzTitle"},exportAs:["nzLink"],ngContentSelectors:li,decls:5,vars:5,consts:[["linkTitle",""],[1,"ant-anchor-link-title",3,"click","href","target"],[3,"ngTemplateOutlet"]],template:function(l,r){if(l&1){let o=_();Je(),n(0,"a",1,0),x("click",function(C){return u(o),E(r.goToClick(C))}),g(2,oi,2,1,"span")(3,mi,1,1,null,2),t(),g(4,di,1,0)}l&2&&(c("href",r.nzHref,zt)("target",r.nzTarget),vt("title",r.titleStr),m(2),ue(r.titleStr?2:3),m(2),ue(r.nzDirection==="vertical"?4:-1))},dependencies:[qe],encapsulation:2,changeDetection:0})}}return a})();var he=(()=>{class a{static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275mod=Tt({type:a})}static{this.\u0275inj=Et({imports:[$]})}}return a})();var pi=()=>({standalone:!0});function ci(a,s){if(a&1){let i=_();b(0),n(1,"a",53),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",54),d(3,"nz-icon",55),t()(),w()}}function xi(a,s){if(a&1){let i=_();b(0),n(1,"a",53),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",54),e(3,"Alexei Cioina's blog"),t()(),w()}}var Rn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-what-version-of-this-blog"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;O(o=j())&&(r.affixEl=o.first)}},decls:407,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-8a3037627685a35a360fc6fc7139ab82","nzTitle","The Problem"],["nzHref","#h-c36299acad44969a87a312672fc3467a","nzTitle","Case Scenario #1"],["nzHref","#h-a42d426924ef47ad9f3ba9f9eef303f7","nzTitle","Case Scenario #2"],["nzHref","#h-b3708047a4d3ddf05a74c7ff57027c22","nzTitle","Case Scenario #3"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20211009-what-version-of-this-blog.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],["id","h-8a3037627685a35a360fc6fc7139ab82"],["onclick","window.location.hash = 'h-8a3037627685a35a360fc6fc7139ab82'",1,"anchor"],["href","https://stackoverflow.com/questions/55494181/what-is-the-purpose-of-swupdate-activateupdate-in-angular/59175788#59175788","target","_blank","rel","noopener"],["id","h-c36299acad44969a87a312672fc3467a"],["onclick","window.location.hash = 'h-c36299acad44969a87a312672fc3467a'",1,"anchor"],["href","https://github.com/cioina/openshift-laravel-example/blob/main/src/acioina/site/src/Acioina/UserManagement/Http/Controllers/Api/VersionController.php","target","_blank","rel","noopener"],[1,"language-php"],[1,"hljs-meta"],[1,"hljs-keyword"],[1,"hljs-title","class_"],[1,"hljs-title"],[1,"hljs-class"],[1,"hljs-variable","constant_"],[1,"hljs-string"],[1,"hljs-function"],[1,"hljs-params"],[1,"hljs-variable"],[1,"hljs-built_in"],[1,"hljs-title","function_","invoke__"],[1,"hljs-variable","language_"],[1,"language-typescript"],[1,"hljs-attr"],[1,"language-csharp"],[1,"hljs-literal"],[1,"hljs-title","function_"],[1,"hljs-property"],["id","h-a42d426924ef47ad9f3ba9f9eef303f7"],["onclick","window.location.hash = 'h-a42d426924ef47ad9f3ba9f9eef303f7'",1,"anchor"],["href","https://github.com/ngrx/platform/blob/main/projects/ngrx.io/src/app/sw-updates/sw-updates.service.ts","target","_blank","rel","noopener"],["id","h-b3708047a4d3ddf05a74c7ff57027c22"],["onclick","window.location.hash = 'h-b3708047a4d3ddf05a74c7ff57027c22'",1,"anchor"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,ci,4,0,"ng-container",5)(6,xi,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15),t()(),n(20,"span",16),e(21," What Version of This Blog Do You See?"),d(22,"span",17)(23,"span",18),n(24,"a",19),d(25,"nz-icon",20),t()(),n(26,"article",21)(27,"p"),e(28,"As you can see, this website does not have a formal version tag. It uses the latest version of "),n(29,"code"),e(30,"ng-zorro-antd"),t(),e(31," and Angular as some kind of version tag. So, just imagine how surprised I was when I deployed this website compiled with Angular "),n(32,"code"),e(33,"12.2.9"),t(),e(34," and checking my very old Samsung that runs on Android 4.4.2. For some reason, the old Chrome web browser does not want to load this website correctly, so, I use an old version of FireFox browser for Android (As you may know, Google does not allow to update apps for old Android versions.) FireFox worked ok at first. But, when I closed and opened the browser again, this site loaded automatically and showed Angular "),n(35,"code"),e(36,"12.2.4"),t(),e(37," at the bottom of the footer. Somehow, FireFox cached an old version of my website. Deleting the FireFox cache did not help, but, reloading the URL would show the correct Angular "),n(38,"code"),e(39,"12.2.9"),t(),e(40,"."),t(),n(41,"blockquote")(42,"p"),e(43,"It looks like starting with Angular 16, this website will not work at all anymore on outdated devices!"),t()(),n(44,"h2",22)(45,"span"),e(46,"The Problem"),t(),n(47,"a",23),e(48,"#"),t()(),n(49,"p"),e(50,"It may be problematic to have latest version for some websites that use Angular with a lot of lazy-loading modules. Imagine a user browsing your website just seconds before you start to deploy a new version of your website. The user will still have the old version (old Angular compiled JavaScript files) even after the deployment ends. We will consider three case scenarios here and will try to implement solution #2 from "),n(51,"strong"),e(52,"gkalpak"),t(),e(53,"'s "),n(54,"a",24),e(55,"StackOverflow"),t(),e(56," answer. We will let website users know that a new version is available and ask them to refresh the webpage."),t(),n(57,"h2",25)(58,"span"),e(59,"Case Scenario #1"),t(),n(60,"a",26),e(61,"#"),t()(),n(62,"p"),e(63,"From my experience, the problem may appear for old/outdated web browsers like one described above or when you open multiple tabs of the same page. You will get a message to reload/refresh the page with an error similar to "),n(64,"strong"),e(65,"ERROR: b607b9112d721b487e78121fc3bbf455"),t(),e(66," (where b607b9112d721b487e78121fc3bbf455 is the new hash.)"),t(),n(67,"p"),e(68,"It was very simple for me to implement this solution because I use a server-side API and deploy my backend and frontend on the same server and generate my deployment with a Node.js script. So, I generate "),n(69,"a",27),e(70,"a small PHP file"),t(),e(71," and small TypeScript file with some unique hash."),t(),n(72,"p")(73,"strong")(74,"code"),e(75,"VersionController.php"),t()()(),n(76,"pre",28)(77,"code")(78,"span",29),e(79,"<?php"),t(),e(80,`
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
  }`),t()(),n(376,"p"),e(377,"I compile my frontend app with a command like this: "),n(378,"code"),e(379,"yarn build:site"),t(),e(380,". This simple solution helped me to solve my FireFox problem, however, the most logical solution is not to allow outdated web browsers to access this website."),t(),n(381,"h2",48)(382,"span"),e(383,"Case Scenario #2"),t(),n(384,"a",49),e(385,"#"),t()(),n(386,"p"),e(387,"This is the most common case scenario for modern (up to date) web browsers based on Google Chrome. It happens when you open this website from the browser bookmarks or when you browse this website while a new version was deployed to the server. You will get a message to reload/refresh the page with "),n(388,"strong"),e(389,"ERROR: SwUpdatesService: activated"),t(),e(390,". This website uses a Service Worker loaded from "),n(391,"code"),e(392,"ngsw-worker.js"),t(),e(393,". In addition, we use Angular "),n(394,"a",50),e(395,"SwUpdates"),t(),e(396," which will load updated resources of the website behind the scene on the user's machine. Theoretically, this website should work fine without reloading most of the time."),t(),n(397,"h2",51)(398,"span"),e(399,"Case Scenario #3"),t(),n(400,"a",52),e(401,"#"),t()(),n(402,"p"),e(403,"This case scenario happens when you open multiple tabs of this website while a new version was deployed to the server. You will get a message to reload/refresh the page with "),n(404,"strong"),e(405,"ERROR: GlobalErrorHandler"),t(),e(406,". It means that the browser tries to load old resources that were deleted by a new deployment."),t()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,pi)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,U,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var hi=()=>({standalone:!0});function Si(a,s){if(a&1){let i=_();b(0),n(1,"a",94),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",95),d(3,"nz-icon",96),t()(),w()}}function ui(a,s){if(a&1){let i=_();b(0),n(1,"a",94),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",95),e(3,"Alexei Cioina's blog"),t()(),w()}}var In=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-svg-icons"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;O(o=j())&&(r.affixEl=o.first)}},decls:882,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-175576ef003bf799bcb57b8ca42ad3c2","nzTitle","List of icons"],["nzHref","#h-db974238714ca8de634a7ce1d083a14f","nzTitle","API"],["nzHref","#h-cf0c08580649cca4d27fe03e3c45d398","nzTitle","[nz-icon]"],["nzHref","#h-1a35350834d43f0d0f324f4a0348eba3","nzTitle","NzIconService"],["nzHref","#h-ed485f46b93499de3700bacfe35e1334","nzTitle","SVG icons"],["nzHref","#h-ec99ccb95aa0e7cb6fd9e61a7c60ff7c","nzTitle","Static loading and dynamic loading"],["nzHref","#h-10028ae625de15d5eefce48a85bff434","nzTitle","Add Icons in Lazy-loaded Modules"],["nzHref","#h-93e3a3a1bd8c21444d8b8ae1baea0fc0","nzTitle","Set Default TwoTone Color"],["nzHref","#h-3ce4aec90030342571cd93b6370e0693","nzTitle","Custom Font Icon"],["nzHref","#h-b3ba0fe968ce39dcfc6fe8cc0f1b02da","nzTitle","Namespace"],["nzHref","#h-1fe917b01f9a3f87fa2d7d3b7643fac1","nzTitle","FAQ"],["nzHref","#h-8e1d73289aa92536789394b9371858f6","nzTitle","All my icons are gone"],["nzHref","#h-a81dd5f26e5a5e33d037266277360e1c","nzTitle","There are two similar icons in a "],["nzHref","#h-62a9076a6bbec0d3ce2959c0922bcc02","nzTitle","I want to import all icons statically. What should I do?"],["nzHref","#h-5de90099b2e7ac70e7615eaaebe36d60","nzTitle","Does dynamic loading affect web pages' performance?"],["nzHref","#h-b7b1fb211a7b65e0bc5d6ee9d98c00f6","nzTitle","How do I know a icon's corresponding module to import?"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230219-svg-icons.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[2,"border-color","#faad14"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/doc/index.en-US.md","target","_blank","rel","noopener"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE","target","_blank","rel","noopener"],["id","h-175576ef003bf799bcb57b8ca42ad3c2"],["onclick","window.location.hash = 'h-175576ef003bf799bcb57b8ca42ad3c2'",1,"anchor"],["href","https://ant.design/components/icon/","target","_blank","rel","noopener"],[1,"language-ts"],[1,"hljs-keyword"],[1,"hljs-title","class_"],[1,"hljs-string"],["id","h-db974238714ca8de634a7ce1d083a14f"],["onclick","window.location.hash = 'h-db974238714ca8de634a7ce1d083a14f'",1,"anchor"],["id","h-cf0c08580649cca4d27fe03e3c45d398"],[1,"api-type-label","directive"],["onclick","window.location.hash = 'h-cf0c08580649cca4d27fe03e3c45d398'",1,"anchor"],["href","https://github.com/twbs/icons","target","_blank","rel","noopener"],["href","https://icons.getbootstrap.com/","target","_blank","rel","noopener"],["href","https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-svg","target","_blank","rel","noopener"],["id","h-1a35350834d43f0d0f324f4a0348eba3"],[1,"api-type-label","service"],["onclick","window.location.hash = 'h-1a35350834d43f0d0f324f4a0348eba3'",1,"anchor"],["id","h-ed485f46b93499de3700bacfe35e1334"],["onclick","window.location.hash = 'h-ed485f46b93499de3700bacfe35e1334'",1,"anchor"],["href","https://github.com/ant-design/ant-design/issues/10353","target","_blank","rel","noopener"],[1,"language-html"],[1,"hljs-tag"],[1,"hljs-name"],[1,"hljs-attr"],["id","h-ec99ccb95aa0e7cb6fd9e61a7c60ff7c"],["onclick","window.location.hash = 'h-ec99ccb95aa0e7cb6fd9e61a7c60ff7c'",1,"anchor"],[1,"hljs-comment"],[1,"hljs-meta"],[1,"hljs-title","function_"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/icons.ts","target","_blank","rel","noopener"],[1,"language-json"],[1,"hljs-punctuation"],["id","h-10028ae625de15d5eefce48a85bff434"],["onclick","window.location.hash = 'h-10028ae625de15d5eefce48a85bff434'",1,"anchor"],["id","h-93e3a3a1bd8c21444d8b8ae1baea0fc0"],["onclick","window.location.hash = 'h-93e3a3a1bd8c21444d8b8ae1baea0fc0'",1,"anchor"],["id","h-3ce4aec90030342571cd93b6370e0693"],["onclick","window.location.hash = 'h-3ce4aec90030342571cd93b6370e0693'",1,"anchor"],["href","http://iconfont.cn/","target","_blank","rel","noopener"],[1,"hljs-variable","language_"],[1,"hljs-property"],["href","http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code","target","_blank","rel","noopener"],["id","h-b3ba0fe968ce39dcfc6fe8cc0f1b02da"],["onclick","window.location.hash = 'h-b3ba0fe968ce39dcfc6fe8cc0f1b02da'",1,"anchor"],["id","h-1fe917b01f9a3f87fa2d7d3b7643fac1"],["onclick","window.location.hash = 'h-1fe917b01f9a3f87fa2d7d3b7643fac1'",1,"anchor"],["id","h-8e1d73289aa92536789394b9371858f6"],["onclick","window.location.hash = 'h-8e1d73289aa92536789394b9371858f6'",1,"anchor"],["id","h-0dfac33e812ac318cdabc8c2135f71c5"],["onclick","window.location.hash = 'h-0dfac33e812ac318cdabc8c2135f71c5'",1,"anchor"],["id","h-62a9076a6bbec0d3ce2959c0922bcc02"],["onclick","window.location.hash = 'h-62a9076a6bbec0d3ce2959c0922bcc02'",1,"anchor"],["id","h-5de90099b2e7ac70e7615eaaebe36d60"],["onclick","window.location.hash = 'h-5de90099b2e7ac70e7615eaaebe36d60'",1,"anchor"],["id","h-b7b1fb211a7b65e0bc5d6ee9d98c00f6"],["onclick","window.location.hash = 'h-b7b1fb211a7b65e0bc5d6ee9d98c00f6'",1,"anchor"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,Si,4,0,"ng-container",5)(6,ui,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20)(25,"nz-link",21)(26,"nz-link",22)(27,"nz-link",23)(28,"nz-link",24)(29,"nz-link",25)(30,"nz-link",26)(31,"nz-link",27),t()(),n(32,"span",28),e(33," Semantic Vector Graphics (SVG) Icons"),d(34,"span",29)(35,"span",30),n(36,"a",31),d(37,"nz-icon",32),t()(),n(38,"article",33)(39,"blockquote",34)(40,"p")(41,"strong"),e(42,"This is a modified version of the "),n(43,"a",35),e(44,"NG-ZORRO original"),t(),e(45," document provided under "),n(46,"a",36),e(47,"Alibaba.com MIT LICENSE"),t(),e(48,"."),t()()(),n(49,"h2",37)(50,"span"),e(51,"List of icons"),t(),n(52,"a",38),e(53,"#"),t()(),n(54,"p"),e(55,"We are still adding icons right now, syncing to "),n(56,"a",39),e(57,"antd"),t(),e(58,"."),t(),n(59,"pre",40)(60,"code")(61,"span",41),e(62,"import"),t(),e(63," { "),n(64,"span",42),e(65,"NzIconModule"),t(),e(66," } "),n(67,"span",41),e(68,"from"),t(),e(69," "),n(70,"span",43),e(71,"'ng-zorro-antd/icon'"),t(),e(72,";"),t()(),n(73,"h2",44)(74,"span"),e(75,"API"),t(),n(76,"a",45),e(77,"#"),t()(),n(78,"h3",46)(79,"span"),e(80,"[nz-icon]"),t(),n(81,"label",47),e(82,"directive"),t(),n(83,"a",48),e(84,"#"),t()(),n(85,"table")(86,"thead")(87,"tr")(88,"th"),e(89,"Property"),t(),n(90,"th"),e(91,"Description"),t(),n(92,"th"),e(93,"Type"),t(),n(94,"th"),e(95,"Default"),t(),n(96,"th"),e(97,"Global Config"),t()()(),n(98,"tbody")(99,"tr")(100,"td")(101,"code"),e(102,"[nzType]"),t()(),n(103,"td"),e(104,"Type of the ant design icon"),t(),n(105,"td")(106,"code"),e(107,"string"),t()(),n(108,"td"),e(109,"-"),t(),d(110,"td"),t(),n(111,"tr")(112,"td")(113,"code"),e(114,"[nzTheme]"),t()(),n(115,"td"),e(116,"Type of the ant design icon"),t(),n(117,"td")(118,"code"),e(119,"'fill'|'outline'|'twotone'|'feather'"),t()(),n(120,"td")(121,"code"),e(122,"'outline'"),t()(),n(123,"td"),e(124,"\u2705"),t()(),n(125,"tr")(126,"td")(127,"code"),e(128,"[nzSpin]"),t()(),n(129,"td"),e(130,"Rotate icon with animation"),t(),n(131,"td")(132,"code"),e(133,"boolean"),t()(),n(134,"td")(135,"code"),e(136,"false"),t()(),d(137,"td"),t(),n(138,"tr")(139,"td")(140,"code"),e(141,"[nzTwotoneColor]"),t()(),n(142,"td"),e(143,"Only support the two-tone icon. Specific the primary color."),t(),n(144,"td")(145,"code"),e(146,"string (hex color)"),t()(),n(147,"td"),e(148,"-"),t(),n(149,"td"),e(150,"\u2705"),t()(),n(151,"tr")(152,"td")(153,"code"),e(154,"[nzIconfont]"),t()(),n(155,"td"),e(156,"Type of the icon from iconfont"),t(),n(157,"td")(158,"code"),e(159,"string"),t()(),n(160,"td"),e(161,"-"),t(),d(162,"td"),t(),n(163,"tr")(164,"td")(165,"code"),e(166,"[nzRotate]"),t()(),n(167,"td"),e(168,"Rotate degrees"),t(),n(169,"td")(170,"code"),e(171,"number"),t()(),n(172,"td"),e(173,"-"),t(),d(174,"td"),t(),n(175,"tr")(176,"td")(177,"code"),e(178,"[nzWidth]"),t()(),n(179,"td"),e(180,"SVG width"),t(),n(181,"td")(182,"code"),e(183,"number|string"),t()(),n(184,"td")(185,"code"),e(186,"1em"),t()(),d(187,"td"),t(),n(188,"tr")(189,"td")(190,"code"),e(191,"[nzHeight]"),t()(),n(192,"td"),e(193,"SVG height"),t(),n(194,"td")(195,"code"),e(196,"number|string"),t()(),n(197,"td")(198,"code"),e(199,"1em"),t()(),d(200,"td"),t()()(),n(201,"blockquote")(202,"p"),e(203,"In "),n(204,"code"),e(205,"feather"),t(),e(206," folder, there are all "),n(207,"a",49),e(208,"official open source SVG icons for Bootstrap"),t(),e(209," that can be viewed "),n(210,"a",50),e(211,"here"),t(),e(212,". In "),n(213,"code"),e(214,"fill"),t(),e(215,","),n(216,"code"),e(217,"outline"),t(),e(218," and "),n(219,"code"),e(220,"twotone"),t(),e(221," folders, there are all "),n(222,"a",51),e(223,"Ant Design SVG icons"),t(),e(224," that can be viewed "),n(225,"a",39),e(226,"here"),t(),e(227,". In "),n(228,"code"),e(229,"custom"),t(),e(230," folder, there are a few SVG icons added by hand witch can be accessed by "),n(231,"code"),e(232,'nzType="custom:some-icon-file-name"'),t(),e(233,"."),t()(),n(234,"h3",52)(235,"span"),e(236,"NzIconService"),t(),n(237,"label",53),e(238,"service"),t(),n(239,"a",54),e(240,"#"),t()(),n(241,"table")(242,"thead")(243,"tr")(244,"th"),e(245,"Methods/Properties"),t(),n(246,"th"),e(247,"Description"),t(),n(248,"th"),e(249,"Parameters"),t()()(),n(250,"tbody")(251,"tr")(252,"td")(253,"code"),e(254,"useJsonpLoading()"),t()(),n(255,"td"),e(256,"Call this method to switch to jsonp like loading"),t(),d(257,"td"),t(),n(258,"tr")(259,"td")(260,"code"),e(261,"addIcon()"),t()(),n(262,"td"),e(263,"To import icons statically"),t(),n(264,"td")(265,"code"),e(266,"IconDefinition"),t()()(),n(267,"tr")(268,"td")(269,"code"),e(270,"addIconLiteral()"),t()(),n(271,"td"),e(272,"To statically import custom icons"),t(),n(273,"td")(274,"code"),e(275,"string"),t(),e(276,", "),n(277,"code"),e(278,"string (SVG)"),t()()(),n(279,"tr")(280,"td")(281,"code"),e(282,"fetchFromIconfont()"),t()(),n(283,"td"),e(284,"To get icon assets from fonticon"),t(),n(285,"td")(286,"code"),e(287,"NzIconfontOption"),t()()(),n(288,"tr")(289,"td")(290,"code"),e(291,"changeAssetsSource()"),t()(),n(292,"td"),e(293,"To change the location of your icon assets, so that you can deploy these icons wherever you want"),t(),n(294,"td")(295,"code"),e(296,"string"),t()()()()(),n(297,"h3",55)(298,"span"),e(299,"SVG icons"),t(),n(300,"a",56),e(301,"#"),t()(),n(302,"p"),e(303,"We synced to Ant Design and replaced font icons with svg icons which bring benefits below:"),t(),n(304,"ul")(305,"li"),e(306,"Complete offline usage of icon, no dependency of alipay cdn font icon file and no more empty square during downloading."),t(),n(307,"li"),e(308,"Much more display accuracy in lower-level screens."),t(),n(309,"li"),e(310,"Support multiple colors for icon."),t(),n(311,"li"),e(312,"No need to change built-in icons with overriding styles by providing more props in component."),t()(),n(313,"p"),e(314,"You can join in "),n(315,"a",57),e(316,"this dicussion of Ant Design"),t(),e(317,"."),t(),n(318,"p"),e(319,"NG-ZORRO hadn't provided an icon component. Instead, icon based on font files was provided. We make this new directive compatible to old API. If you make no changes to your existing code, old icons would be dynamically loaded as "),n(320,"code"),e(321,"outline"),t(),e(322," icons. But the best pratice is always to use "),n(323,"code"),e(324,"nz-icon"),t(),e(325," directive and specify the "),n(326,"code"),e(327,"theme"),t(),e(328," prop."),t(),n(329,"pre",58)(330,"code")(331,"span",59),e(332,"<"),n(333,"span",60),e(334,"span"),t(),e(335," "),n(336,"span",61),e(337,"nz-icon"),t(),e(338," ["),n(339,"span",61),e(340,"nzType"),t(),e(341,"]="),n(342,"span",43),e(343,`"'star'"`),t(),e(344," ["),n(345,"span",61),e(346,"nzTheme"),t(),e(347,"]="),n(348,"span",43),e(349,`"'fill'"`),t(),e(350,">"),t(),n(351,"span",59),e(352,"</"),n(353,"span",60),e(354,"span"),t(),e(355,">"),t()()(),n(356,"p"),e(357,"All the icons will be rendered to "),n(358,"code"),e(359,"<svg>"),t(),e(360,", and styles and classes applied to "),n(361,"code"),e(362,"<i>"),t(),e(363," would work."),t(),n(364,"pre",58)(365,"code")(366,"span",59),e(367,"<"),n(368,"span",60),e(369,"span"),t(),e(370," "),n(371,"span",61),e(372,"nz-icon"),t(),e(373," ["),n(374,"span",61),e(375,"nzType"),t(),e(376,"]="),n(377,"span",43),e(378,`"'message'"`),t(),e(379," "),n(380,"span",61),e(381,"style"),t(),e(382,"="),n(383,"span",43),e(384,'"font-size: 16px; color: #08c;"'),t(),e(385,">"),t(),n(386,"span",59),e(387,"</"),n(388,"span",60),e(389,"span"),t(),e(390,">"),t()()(),n(391,"h3",62)(392,"span"),e(393,"Static loading and dynamic loading"),t(),n(394,"a",63),e(395,"#"),t()(),n(396,"p"),e(397,"As for icons provided by Ant Design, there are two ways of importing them into your project."),t(),n(398,"p"),e(399,"Static loading. By registering icons to "),n(400,"code"),e(401,"AppModule"),t(),e(402," you load icons statically."),t(),n(403,"pre",40)(404,"code")(405,"span",41),e(406,"import"),t(),e(407," { "),n(408,"span",42),e(409,"IconDefinition"),t(),e(410," } "),n(411,"span",41),e(412,"from"),t(),e(413," "),n(414,"span",43),e(415,"'@ant-design/icons-angular'"),t(),e(416,`;
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
`),n(857,"span",64),e(858,"// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])"),t()()(),n(859,"h3",90)(860,"span"),e(861,"Does dynamic loading affect web pages' performance?"),t(),n(862,"a",91),e(863,"#"),t()(),n(864,"p"),e(865,"We used several methods to reduce requests, like static cache, dynamic cache and reusable request. It's basically not noticeable for visitors that icons are loaded asynchronously assuming web connections are fairly good."),t(),n(866,"h3",92)(867,"span"),e(868,"How do I know a icon's corresponding module to import?"),t(),n(869,"a",93),e(870,"#"),t()(),n(871,"p"),e(872,"Capital camel-case "),n(873,"code"),e(874,"type & theme"),t(),e(875,", i.e. "),n(876,"code"),e(877,"alibaba"),t(),e(878," => "),n(879,"code"),e(880,"AlibabaOutline"),t(),e(881,"."),t()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,hi)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,U,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var Ei=()=>({standalone:!0});function gi(a,s){if(a&1){let i=_();b(0),n(1,"a",90),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",91),d(3,"nz-icon",92),t()(),w()}}function fi(a,s){if(a&1){let i=_();b(0),n(1,"a",90),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",91),e(3,"Alexei Cioina's blog"),t()(),w()}}var Ln=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-dotnet-core-testing"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;O(o=j())&&(r.affixEl=o.first)}},decls:3102,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-5a4865611d30c4d0ac6cdff755948150","nzTitle","MyTested Library Out of The Box"],["nzHref","#h-24135ede33965f0be2e01ca803fc7acf","nzTitle",".NET Core Identity Controller Implementation"],["nzHref","#h-c9515f97f83c49f869c71169c44d54be","nzTitle","IdentityController"],["nzHref","#h-88d4cd62d014eafd197c0de96122deeb","nzTitle",".NET Core Identity Service Implementation"],["nzHref","#h-6278f57bf8770eb44c6ba948cbe245f9","nzTitle","IdentityService"],["nzHref","#h-53b802f84a1c06b33df89250feb02691","nzTitle","Comprehensive Identity Controller Testing"],["nzHref","#h-3505cd435c8f4001d7e7ef30f366a87f","nzTitle","Data Validation with FluentValidation Library"],["nzHref","#h-6f8b794f3246b0c1e1780bb4d4d5dc53","nzTitle","Conclusion"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230605-dotnet-core-testing.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[2,"border-color","#faad14"],["href","https://versionsof.net/","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/LICENSE","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore/blob/main/LICENSE","target","_blank","rel","noopener"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example","target","_blank","rel","noopener"],["href","https://github.com/cioina/cioina.azurewebsites.net","target","_blank","rel","noopener"],["id","h-5a4865611d30c4d0ac6cdff755948150"],["onclick","window.location.hash = 'h-5a4865611d30c4d0ac6cdff755948150'",1,"anchor"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs","target","_blank","rel","noopener"],[1,"language-csharp"],[1,"hljs-meta"],[1,"hljs-keyword"],[1,"hljs-title"],[1,"hljs-function"],[1,"hljs-string"],["id","h-24135ede33965f0be2e01ca803fc7acf"],["onclick","window.location.hash = 'h-24135ede33965f0be2e01ca803fc7acf'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Web/Features/IdentityController.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs","target","_blank","rel","noopener"],["id","h-c9515f97f83c49f869c71169c44d54be"],["onclick","window.location.hash = 'h-c9515f97f83c49f869c71169c44d54be'",1,"anchor"],["id","h-88d4cd62d014eafd197c0de96122deeb"],["onclick","window.location.hash = 'h-88d4cd62d014eafd197c0de96122deeb'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Infrastructure/Identity/Services/IdentityService.cs","target","_blank","rel","noopener"],["id","h-6278f57bf8770eb44c6ba948cbe245f9"],["onclick","window.location.hash = 'h-6278f57bf8770eb44c6ba948cbe245f9'",1,"anchor"],[1,"hljs-built_in"],[1,"hljs-params"],[1,"hljs-literal"],[1,"hljs-number"],[1,"hljs-subst"],["id","h-53b802f84a1c06b33df89250feb02691"],["onclick","window.location.hash = 'h-53b802f84a1c06b33df89250feb02691'",1,"anchor"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/samples/Blog/Blog.Test/Pipeline/Admin/ArticlesPipelineTest.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Users/LoginTests.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs","target","_blank","rel","noopener"],[1,"hljs-comment"],["id","h-3505cd435c8f4001d7e7ef30f366a87f"],["onclick","window.location.hash = 'h-3505cd435c8f4001d7e7ef30f366a87f'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs#L626","target","_blank","rel","noopener"],["id","h-6f8b794f3246b0c1e1780bb4d4d5dc53"],["onclick","window.location.hash = 'h-6f8b794f3246b0c1e1780bb4d4d5dc53'",1,"anchor"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/ivaylokenov","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov","target","_blank","rel","noopener"],["href","https://github.com/ardalis","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev","target","_blank","rel","noopener"],["href","https://github.com/stefanprodan","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti","target","_blank","rel","noopener"],["href","https://github.com/jbogard","target","_blank","rel","noopener"],["href","https://github.com/BenMorris","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,gi,4,0,"ng-container",5)(6,fi,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20)(25,"nz-link",21),t()(),n(26,"span",22),e(27," ASP.NET Core 9 Testing"),d(28,"span",23)(29,"span",24),n(30,"a",25),d(31,"nz-icon",26),t()(),n(32,"article",27),bt(),n(33,"blockquote",28)(34,"p")(35,"strong"),e(36,"All C# code from this article was tested using "),n(37,"a",29),e(38,".NET Core 9.0.1"),t(),e(39,", modified source code of "),n(40,"a",30),e(41,"MyTested.AspNetCore.Mvc - Fluent Testing Library for ASP.NET Core MVC"),t(),e(42," provided under "),n(43,"a",31),e(44,"Apache License, Version 2.0 or Microsoft Public License (Ms-PL)"),t(),e(45,", and modified source code of "),n(46,"a",32),e(47,"BookStore"),t(),e(48," provided under "),n(49,"a",33),e(50,"MIT License"),t()()()(),n(51,"h2",34)(52,"span"),e(53,"Introduction"),t(),n(54,"a",35),e(55,"#"),t()(),n(56,"p"),e(57,"In this article, we will give an example of testing of .NET Core code. We will use "),n(58,"a",30),e(59,"MyTested"),t(),e(60," - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 9 project is based on "),n(61,"a",32),e(62,"BookStore"),t(),e(63," repository and adapted to work with MyTested library. A full test project example is on "),n(64,"a",36),e(65,"our GitHub repository"),t(),e(66,"."),t(),n(67,"p"),e(68,"The main focus of our example is testing of the standard "),n(69,"code"),e(70,"User Identity"),t(),e(71," provided by "),n(72,"code"),e(73,"Microsoft.AspNetCore.Identity"),t(),e(74,". The access to the user is provided by "),n(75,"code"),e(76,"UserManager<User>"),t(),e(77," micro service. The source code of all our examples is copied and pasted from our actual application. The compiled code of our .NET Core 9 application can be found on "),n(78,"a",37),e(79,"our GitHub repository"),t(),e(80,"."),t(),n(81,"p"),e(82,"One of the advantages of having of a detailed test module for standard "),n(83,"code"),e(84,"Microsoft.AspNetCore.Identity"),t(),e(85," implementation is the fact that it is used very frequently in .NET Core applications. Following, we will give examples of API controller, the implementation of "),n(86,"code"),e(87,"User Identity"),t(),e(88," with Bearer Header Authorization based on JWT token and an example of a comprehensive "),n(89,"code"),e(90,"User Identity"),t(),e(91," controller testing."),t(),n(92,"h2",38)(93,"span"),e(94,"MyTested Library Out of The Box"),t(),n(95,"a",39),e(96,"#"),t()(),n(97,"p"),e(98,"I found out about MyTested for the first time from "),n(99,"a",40),e(100,"BlazorShop"),t(),e(101," repository. At the same time, I found out about "),n(102,"code"),e(103,"JwtAuthentication"),t(),e(104," implementation from same "),n(105,"a",41),e(106,"BlazorShop"),t(),e(107," repository and from "),n(108,"a",42),e(109,"aspnetcore-realworld-example"),t(),e(110," repository. Both "),n(111,"code"),e(112,"JwtAuthentication"),t(),e(113," implementations did not work with original "),n(114,"a",30),e(115,"MyTested"),t(),e(116," library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was able only to add some small pieces of code to make MyTested and my own "),n(117,"code"),e(118,"JwtAuthentication"),t(),e(119," implementation work and not to break any original MyTested tests. But, what MyTested can do out of the box? The best answer is in "),n(120,"a",43),e(121,"MusicStore"),t(),e(122," testing project. For the API controller, "),n(123,"a",44),e(124,"here"),t(),e(125," is an example:"),t(),n(126,"pre",45)(127,"code")(128,"span",46),e(129,"#"),n(130,"span",47),e(131,"if"),t(),e(132," DEBUG"),t(),e(133,`
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
`),n(184,"span",46),e(185,"#"),n(186,"span",47),e(187,"endif"),t()()()(),n(188,"h2",51)(189,"span"),e(190,".NET Core Identity Controller Implementation"),t(),n(191,"a",52),e(192,"#"),t()(),n(193,"p"),e(194,"Our controller implementation is based on "),n(195,"a",53),e(196,"this GitHub repository"),t(),e(197,". We added two more methods: "),n(198,"code"),e(199,"LoginPassword"),t(),e(200," and "),n(201,"code"),e(202,"Update"),t(),e(203," with "),n(204,"code"),e(205,"[Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy)]"),t(),e(206," attribute that uses Bearer Header Authorization based on JWT token implementation provided by .NET Core 9. Our Angular 18 application that runs in a web browser will make a request to the endpoint "),n(207,"code"),e(208,"http://localhost:1503/api/v1.0/identity/update"),t(),e(209,". The request has an Authorization header with a JWT token. The request body has some data in JSON format. Our .NET Core 9 application must authenticate the user based on the JWT token and authorize the user based on a specific policy. Once the user passes the authorization process, the application must execute a command and return some data in JSON format. Below, we give an example of an "),n(210,"a",54),e(211,"API controller"),t()(),n(212,"h3",55)(213,"span"),e(214,"IdentityController"),t(),n(215,"a",56),e(216,"#"),t()(),n(217,"pre",45)(218,"code")(219,"span",47),e(220,"using"),t(),e(221,` BlogAngular.Application.Identity.Commands.Common;
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
In real life, .NET Core 9 will return a 401-error code. We created a series of tests for testing invalid JWT tokens such as:`),t(),n(2741,"pre",45)(2742,"code"),e(2743,"        ["),n(2744,"span",46),e(2745,"Theory"),t(),e(2746,`]
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
The Markdown version of this article and the compiled code of our .NET Core 9 application can be found on `),n(3069,"a",37),e(3070,"our GitHub repository"),t(),e(3071,"."),t(),n(3072,"h2",80)(3073,"span"),e(3074,"Credits"),t(),n(3075,"a",81),e(3076,"#"),t()(),n(3077,"ul")(3078,"li")(3079,"a",82),e(3080,"Ivaylo Kenov"),t()(),n(3081,"li")(3082,"a",83),e(3083,"Kalin Tsenkov"),t()(),n(3084,"li")(3085,"a",84),e(3086,"Steve Smith"),t()(),n(3087,"li")(3088,"a",85),e(3089,"Jason Taylor"),t()(),n(3090,"li")(3091,"a",86),e(3092,"Stefan Prodan"),t()(),n(3093,"li")(3094,"a",87),e(3095,"Mark Cilia Vincenti"),t()(),n(3096,"li")(3097,"a",88),e(3098,"Jimmy Bogard"),t()(),n(3099,"li")(3100,"a",89),e(3101,"Ben Morris"),t()()(),ft(),t()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,Ei)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,U,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var bi=()=>({standalone:!0});function wi(a,s){if(a&1){let i=_();b(0),n(1,"a",68),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",69),d(3,"nz-icon",70),t()(),w()}}function _i(a,s){if(a&1){let i=_();b(0),n(1,"a",68),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",69),e(3,"Alexei Cioina's blog"),t()(),w()}}var Bn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-about-this-blog"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;O(o=j())&&(r.affixEl=o.first)}},decls:481,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-375bae567e442b3aaffb4ff7fb6f6290","nzTitle","Generate Posts from Markdown Files"],["nzHref","#h-9ee0998d20e8918a0353459c822be833","nzTitle","Generate Static Syntax Highlighting"],["nzHref","#h-ae84e8a9827ba10eaf0c302cce6516ff","nzTitle","Deploy to a Cloud Platform"],["nzHref","#h-0ac07f265ac9e3a83dc1fb1d75e2079c","nzTitle","Simulate Static Content"],["nzHref","#h-3d814a590e1db6de636f3c2fc37cac08","nzTitle","Markdown Extension"],["nzHref","#h-d748b3e2a7d5e33441fd51f0bd59c938","nzTitle","Blog Listing"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241008-about-this-blog.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[1,"pic-plus"],["nz-icon","","nzType","custom:zorro","nzWidth","180px","nzHeight","180px"],["nz-icon","","nzType","custom:angular","nzWidth","180px","nzHeight","180px"],["nz-icon","","nzType","custom:ng-zorro","nzWidth","180px","nzHeight","180px"],["id","h-375bae567e442b3aaffb4ff7fb6f6290"],["onclick","window.location.hash = 'h-375bae567e442b3aaffb4ff7fb6f6290'",1,"anchor"],["href","https://github.com/cioina/alexei-cioina.b9ad.pro-us-east-1.openshiftapps.com/tree/main/posts","target","_blank","rel","noopener"],["id","h-9ee0998d20e8918a0353459c822be833"],["onclick","window.location.hash = 'h-9ee0998d20e8918a0353459c822be833'",1,"anchor"],[1,"language-javascript"],[1,"hljs-keyword"],[1,"hljs-built_in"],[1,"hljs-string"],[1,"hljs-title","function_"],[1,"hljs-params"],[1,"hljs-function"],[1,"hljs-literal"],[1,"hljs-title","class_"],[1,"hljs-regexp"],[1,"hljs-variable","language_"],[1,"hljs-property"],["id","h-ae84e8a9827ba10eaf0c302cce6516ff"],["onclick","window.location.hash = 'h-ae84e8a9827ba10eaf0c302cce6516ff'",1,"anchor"],["href","https://www.openshift.com/products/online/","target","_blank","rel","noopener"],["href","https://docs.openshift.com/container-platform/3.11/architecture/core_concepts/builds_and_image_streams.html#source-build","target","_blank","rel","noopener"],["href","https://docs.openshift.com/container-platform/3.11/dev_guide/deployments/deployment_strategies.html#recreate-strategy","target","_blank","rel","noopener"],["id","h-0ac07f265ac9e3a83dc1fb1d75e2079c"],["onclick","window.location.hash = 'h-0ac07f265ac9e3a83dc1fb1d75e2079c'",1,"anchor"],["href","https://github.com/dwightwatson/dwightwatson.com","target","_blank","rel","noopener"],["href","https://github.com/dwightwatson/neontsunami-laravel","target","_blank","rel","noopener"],["href","https://github.com/dwightwatson/neontsunami-laravel/blob/master/resources/views/posts/show.blade.php","target","_blank","rel","noopener"],["href","https://github.com/cioina/neontsunami","target","_blank","rel","noopener"],["href","https://laravel.com/docs/8.x/octane","target","_blank","rel","noopener"],["id","h-3d814a590e1db6de636f3c2fc37cac08"],["onclick","window.location.hash = 'h-3d814a590e1db6de636f3c2fc37cac08'",1,"anchor"],[1,"language-html"],[1,"hljs-tag"],[1,"hljs-name"],[1,"hljs-attr"],["href","https://mdxjs.com/","target","_blank","rel","noopener"],["id","h-d748b3e2a7d5e33441fd51f0bd59c938"],["onclick","window.location.hash = 'h-d748b3e2a7d5e33441fd51f0bd59c938'",1,"anchor"],["href","https://github.com/AndyT2503/angular-conduit-signals","target","_blank","rel","noopener"],["href","https://github.com/alexeymezenin/laravel-realworld-example-app","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,wi,4,0,"ng-container",5)(6,_i,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17),t()(),n(22,"span",18),e(23," About This Blog"),d(24,"span",19)(25,"span",20),n(26,"a",21),d(27,"nz-icon",22),t()(),n(28,"article",23)(29,"div",24),d(30,"span",25),n(31,"span"),e(32,"+"),t(),d(33,"span",26),n(34,"span"),e(35,"="),t(),d(36,"span",27),t(),n(37,"p"),e(38,"Here we've built a blog that is able to:"),t(),n(39,"ul")(40,"li"),e(41,"Generate posts from markdown files"),t(),n(42,"li"),e(43,"Generate static syntax highlighting"),t(),n(44,"li"),e(45,"Deploy to a cloud platform"),t(),n(46,"li"),e(47,"Simulate static content"),t()(),n(48,"h2",28)(49,"span"),e(50,"Generate Posts from Markdown Files"),t(),n(51,"a",29),e(52,"#"),t()(),n(53,"p"),e(54,"We use a "),n(55,"code"),e(56,"ng-zorro-antd"),t(),e(57," Node.js script to generate compiled Angular modules from "),n(58,"a",30),e(59,"a set of markdown files"),t(),e(60,`.
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
`),n(429,"span",60),e(430,"</"),n(431,"span",61),e(432,"div"),t(),e(433,">"),t()()(),n(434,"p"),e(435,"For more complex markdown format extensions, please visit "),n(436,"a",63),e(437,"MDX 2!"),t()(),n(438,"h2",64)(439,"span"),e(440,"Blog Listing"),t(),n(441,"a",65),e(442,"#"),t()(),n(443,"p"),e(444,"Client-side listing api is based on "),n(445,"a",66),e(446,"this GitHub repository"),t(),e(447," and server-side is similar to "),n(448,"a",67),e(449,"this GitHub repository"),t()(),n(450,"p"),e(451,"As you can see, we use a lot of "),n(452,"code"),e(453,"ng-zorro-antd"),t(),e(454," Angular components:"),t(),n(455,"ul")(456,"li")(457,"code"),e(458,"nz-list"),t(),e(459,", "),n(460,"code"),e(461,"nz-pagination"),t(),e(462,", "),n(463,"code"),e(464,"nz-image"),t(),e(465,", "),n(466,"code"),e(467,"nz-transfer"),t(),e(468,", "),n(469,"code"),e(470,"nz-select"),t(),e(471,", "),n(472,"code"),e(473,"nz-table"),t(),e(474,", and more"),t(),n(475,"li")(476,"code"),e(477,"NzDrawerService"),t(),e(478,", "),n(479,"code"),e(480,"NzDrawerRef"),t()()()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,bi)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,U,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var zi=()=>({standalone:!0});function yi(a,s){if(a&1){let i=_();b(0),n(1,"a",95),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",96),d(3,"nz-icon",97),t()(),w()}}function Ci(a,s){if(a&1){let i=_();b(0),n(1,"a",95),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",96),e(3,"Alexei Cioina's blog"),t()(),w()}}var Dn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-test-readme"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;O(o=j())&&(r.affixEl=o.first)}},decls:449,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-5a4865611d30c4d0ac6cdff755948150","nzTitle","MyTested Library Out of The Box"],["nzHref","#h-dacb62dd70222911e575fe6bc62bd073","nzTitle","Basic API Controller Testing"],["nzHref","#h-3505cd435c8f4001d7e7ef30f366a87f","nzTitle","Data Validation with FluentValidation Library"],["nzHref","#h-adda9d19dcc5465fd2fd1976110cca26","nzTitle","Exception Testing"],["nzHref","#h-7aa876f065cdeedf68f8ddc07088167f","nzTitle","Identity Controller Testing"],["nzHref","#h-dde4549bc1aab56925b8bfa2b191b5e8","nzTitle","Advanced Testing with MyTested Library"],["nzHref","#h-ff4316b63dd50be58ed564565963d5f9","nzTitle","MyTested Library Limitations"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241009-test-readme.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://github.com/cioina/cioina.azurewebsites.net","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore","target","_blank","rel","noopener"],["id","h-5a4865611d30c4d0ac6cdff755948150"],["onclick","window.location.hash = 'h-5a4865611d30c4d0ac6cdff755948150'",1,"anchor"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs","target","_blank","rel","noopener"],[1,"language-csharp"],[1,"hljs-meta"],[1,"hljs-keyword"],[1,"hljs-title"],[1,"hljs-function"],[1,"hljs-string"],["id","h-dacb62dd70222911e575fe6bc62bd073"],["onclick","window.location.hash = 'h-dacb62dd70222911e575fe6bc62bd073'",1,"anchor"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Endpoints/TodoLists.cs","target","_blank","rel","noopener"],["href","https://github.com/EdiWang/Moonglade/blob/master/src/Moonglade.Web/Controllers/TagsController.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Tags/TagsController.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/TagsController.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Web.csproj","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/specification.json","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs","target","_blank","rel","noopener"],["id","h-3505cd435c8f4001d7e7ef30f366a87f"],["onclick","window.location.hash = 'h-3505cd435c8f4001d7e7ef30f366a87f'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Articles/EditTests.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Application.UnitTests/Common/Exceptions/ValidationExceptionTests.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Web.AcceptanceTests/StepDefinitions/LoginStepDefinitions.cs","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Common/AuthorCommandValidator.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Users/Create.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Application/TodoLists/Commands/UpdateTodoList/UpdateTodoListCommandValidator.cs","target","_blank","rel","noopener"],[1,"language-json"],[1,"hljs-punctuation"],[1,"hljs-attr"],["id","h-adda9d19dcc5465fd2fd1976110cca26"],["onclick","window.location.hash = 'h-adda9d19dcc5465fd2fd1976110cca26'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Domain/Common/BaseDomainException.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Middleware/ValidationExceptionHandlerMiddleware.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs","target","_blank","rel","noopener"],["id","h-7aa876f065cdeedf68f8ddc07088167f"],["onclick","window.location.hash = 'h-7aa876f065cdeedf68f8ddc07088167f'",1,"anchor"],["href","https://cioina.azurewebsites.net/articles/dotnet-core-testing#h-f5dcf3f1743665e0100f5e709e3971acd67ebe05","target","_blank","rel","noopener"],["id","h-dde4549bc1aab56925b8bfa2b191b5e8"],["onclick","window.location.hash = 'h-dde4549bc1aab56925b8bfa2b191b5e8'",1,"anchor"],["href","https://cioina.azurewebsites.net/articles/ratelimit-middleware","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs","target","_blank","rel","noopener"],["id","h-ff4316b63dd50be58ed564565963d5f9"],["onclick","window.location.hash = 'h-ff4316b63dd50be58ed564565963d5f9'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/tree/main/src/Server","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/tree/master/src/Conduit","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/tree/main/src","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test","target","_blank","rel","noopener"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/ivaylokenov","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov","target","_blank","rel","noopener"],["href","https://github.com/ardalis","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev","target","_blank","rel","noopener"],["href","https://github.com/stefanprodan","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti","target","_blank","rel","noopener"],["href","https://github.com/jbogard","target","_blank","rel","noopener"],["href","https://github.com/BenMorris","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,yi,4,0,"ng-container",5)(6,Ci,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20),t()(),n(25,"span",21),e(26," MyTested Test Project Example"),d(27,"span",22)(28,"span",23),n(29,"a",24),d(30,"nz-icon",25),t()(),n(31,"article",26)(32,"h2",27)(33,"span"),e(34,"Introduction"),t(),n(35,"a",28),e(36,"#"),t()(),n(37,"p"),e(38,"The compiled code of our .NET Core 9 application is on "),n(39,"a",29),e(40,"our GitHub repository"),t(),e(41,". For this test project, which is part our application, we will use "),n(42,"a",30),e(43,"MyTested"),t(),e(44," - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 9 project is based on "),n(45,"a",31),e(46,"BookStore"),t(),e(47," repository and adapted to work with MyTested library."),t(),n(48,"h2",32)(49,"span"),e(50,"MyTested Library Out of The Box"),t(),n(51,"a",33),e(52,"#"),t()(),n(53,"p"),e(54,"I found out about MyTested for the first time from "),n(55,"a",34),e(56,"BlazorShop"),t(),e(57," repository. At the same time, I found out about "),n(58,"code"),e(59,"Jwt Authentication"),t(),e(60," implementation from same "),n(61,"a",35),e(62,"BlazorShop"),t(),e(63," repository and from "),n(64,"a",36),e(65,"aspnetcore-realworld-example"),t(),e(66," repository. Both "),n(67,"code"),e(68,"Jwt Authentication"),t(),e(69," implementations did not work with original "),n(70,"a",30),e(71,"MyTested"),t(),e(72," library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was only able to add some small pieces of code to make MyTested and my own "),n(73,"code"),e(74,"Jwt Authentication"),t(),e(75," implementation work and not to break any original MyTested tests. One interesting idea of JWT token implementation together with refresh token is on "),n(76,"a",37),e(77,"EdiWang"),t(),e(78,` GitHub repository.
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
The full source code for the .NET Core `),n(370,"code"),e(371,"IdentityService"),t(),e(372," implementation can be found "),n(373,"a",74),e(374,"here"),t()(),n(375,"h2",75)(376,"span"),e(377,"Advanced Testing with MyTested Library"),t(),n(378,"a",76),e(379,"#"),t()(),n(380,"p"),e(381,"In "),n(382,"a",77),e(383,"\u201CImplementing JWT Token Refresh Concept for .NET Core 9\u201D"),t(),e(384,", we show an example of RateLimitMiddleware and try some advanced testing with shared "),n(385,"code"),e(386,"MemoryCache"),t(),e(387,": "),n(388,"code"),e(389,"GetTagsWithRateLimitMiddleware"),t(),e(390," and "),n(391,"code"),e(392,"GetAllWithRateLimitMiddleware"),t(),e(393," from "),n(394,"a",78),e(395,"StaticTestData.cs"),t(),e(396,")."),t(),n(397,"h2",79)(398,"span"),e(399,"MyTested Library Limitations"),t(),n(400,"a",80),e(401,"#"),t()(),n(402,"p"),e(403,"We applied modified version of MyTested library to three popular GitHub repositories: "),n(404,"a",81),e(405,"BookStore"),t(),e(406,", "),n(407,"a",82),e(408,"RealWorld"),t(),e(409,", and "),n(410,"a",83),e(411,"CleanArchitecture"),t(),e(412,". Our quick investigation shows that BookStore can be configurated to work 100% with MyTested while RealWorld works only with "),n(413,"a",50),e(414,"anonymous controllers"),t(),e(415,` and CleanArchitecture does not work at all.
The full test project source code can be found on `),n(416,"a",84),e(417,"our GitHub repository"),t(),e(418,"."),t(),n(419,"h2",85)(420,"span"),e(421,"Credits"),t(),n(422,"a",86),e(423,"#"),t()(),n(424,"ul")(425,"li")(426,"a",87),e(427,"Ivaylo Kenov"),t()(),n(428,"li")(429,"a",88),e(430,"Kalin Tsenkov"),t()(),n(431,"li")(432,"a",89),e(433,"Steve Smith"),t()(),n(434,"li")(435,"a",90),e(436,"Jason Taylor"),t()(),n(437,"li")(438,"a",91),e(439,"Stefan Prodan"),t()(),n(440,"li")(441,"a",92),e(442,"Mark Cilia Vincenti"),t()(),n(443,"li")(444,"a",93),e(445,"Jimmy Bogard"),t()(),n(446,"li")(447,"a",94),e(448,"Ben Morris"),t()()()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,zi)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,U,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var Ti=()=>({standalone:!0});function vi(a,s){if(a&1){let i=_();b(0),n(1,"a",86),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",87),d(3,"nz-icon",88),t()(),w()}}function ki(a,s){if(a&1){let i=_();b(0),n(1,"a",86),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",87),e(3,"Alexei Cioina's blog"),t()(),w()}}var Fn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-ratelimit-middleware"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;O(o=j())&&(r.affixEl=o.first)}},decls:1571,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-ce31d7687a5dd7132969c9c34ec935fd","nzTitle","Use Case Scenario"],["nzHref","#h-c73a370e6de61c37a931b53e01ac1474","nzTitle","JWT Token Refresh Concept"],["nzHref","#h-2ee872d2e537cfc7d3ac87394ef94bd0","nzTitle","JWT Token Refresh Implementation"],["nzHref","#h-dabba4053540ace5387194a926c7e285","nzTitle","Modified RateLimitMiddleware"],["nzHref","#h-bd1baabd87b923e02405c8e9aa86c826","nzTitle","Testing of RateLimitMiddleware With MyTested Library"],["nzHref","#h-009deb37fd917675f32d69efa5650da2","nzTitle","Test Settings"],["nzHref","#h-fb5fe24a643cb590fd64c959dc9b2549","nzTitle","Proof of Concept"],["nzHref","#h-6f8b794f3246b0c1e1780bb4d4d5dc53","nzTitle","Conclusion"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241018-ratelimit-middleware.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[2,"border-color","#faad14"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://github.com/cioina/cioina.azurewebsites.net","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test","target","_blank","rel","noopener"],["id","h-ce31d7687a5dd7132969c9c34ec935fd"],["onclick","window.location.hash = 'h-ce31d7687a5dd7132969c9c34ec935fd'",1,"anchor"],["id","h-c73a370e6de61c37a931b53e01ac1474"],["onclick","window.location.hash = 'h-c73a370e6de61c37a931b53e01ac1474'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs","target","_blank","rel","noopener"],[1,"language-csharp"],[1,"hljs-meta"],[1,"hljs-keyword"],["href","https://github.com/cioina/cioina.azurewebsites.net/blob/main/bin/Release/net8.0/appsettings.json","target","_blank","rel","noopener"],["id","h-2ee872d2e537cfc7d3ac87394ef94bd0"],["onclick","window.location.hash = 'h-2ee872d2e537cfc7d3ac87394ef94bd0'",1,"anchor"],["href","https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs","target","_blank","rel","noopener"],[1,"hljs-literal"],[1,"hljs-built_in"],[1,"hljs-string"],["href","https://github.com/stefanprodan/AspNetCoreRateLimit/blob/master/src/AspNetCoreRateLimit/Middleware/RateLimitMiddleware.cs","target","_blank","rel","noopener"],["id","h-dabba4053540ace5387194a926c7e285"],["onclick","window.location.hash = 'h-dabba4053540ace5387194a926c7e285'",1,"anchor"],[1,"hljs-title"],[1,"hljs-function"],[1,"hljs-params"],[1,"hljs-comment"],[1,"hljs-subst"],[1,"hljs-number"],["id","h-bd1baabd87b923e02405c8e9aa86c826"],["onclick","window.location.hash = 'h-bd1baabd87b923e02405c8e9aa86c826'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/testsettings.json","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test/RateLimit","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/RateLimit/AsyncKeyedLockTest.cs","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti/AsyncKeyedLock","target","_blank","rel","noopener"],["href","https://github.com/EdiWang/Edi.CacheAside.InMemory/blob/master/src/Edi.CacheAside.InMemory/MemoryCacheAside.cs","target","_blank","rel","noopener"],["id","h-009deb37fd917675f32d69efa5650da2"],["onclick","window.location.hash = 'h-009deb37fd917675f32d69efa5650da2'",1,"anchor"],[1,"language-json"],[1,"hljs-punctuation"],[1,"hljs-attr"],["id","h-fb5fe24a643cb590fd64c959dc9b2549"],["onclick","window.location.hash = 'h-fb5fe24a643cb590fd64c959dc9b2549'",1,"anchor"],["id","h-6f8b794f3246b0c1e1780bb4d4d5dc53"],["onclick","window.location.hash = 'h-6f8b794f3246b0c1e1780bb4d4d5dc53'",1,"anchor"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/ivaylokenov","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov","target","_blank","rel","noopener"],["href","https://github.com/ardalis","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev","target","_blank","rel","noopener"],["href","https://github.com/stefanprodan","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti","target","_blank","rel","noopener"],["href","https://github.com/jbogard","target","_blank","rel","noopener"],["href","https://github.com/BenMorris","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,vi,4,0,"ng-container",5)(6,ki,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20)(25,"nz-link",21),t()(),n(26,"span",22),e(27," Implementing JWT Token Refresh Concept for .NET Core 9"),d(28,"span",23)(29,"span",24),n(30,"a",25),d(31,"nz-icon",26),t()(),n(32,"article",27)(33,"blockquote",28)(34,"p")(35,"strong"),e(36,"The concept of Bearer Header Authorization based on JWT token implementation provided by .NET Core 9 is the same as in .NET Core 8. "),t()()(),n(37,"h2",29)(38,"span"),e(39,"Introduction"),t(),n(40,"a",30),e(41,"#"),t()(),n(42,"p"),e(43,"The compiled code of our .NET Core 9 application is on "),n(44,"a",31),e(45,"our GitHub repository"),t(),e(46,". For testing purpose, we will use "),n(47,"a",32),e(48,"MyTested"),t(),e(49," - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our project is based on "),n(50,"a",33),e(51,"BookStore"),t(),e(52," repository and adapted to work with MyTested library. MyTested was engineered to work without middleware which is an advantage for many cases. However, the scope of this article was to find a way to tests middleware with MyTested. The full test project source code can be found on "),n(53,"a",34),e(54,"our another GitHub repository"),t(),e(55,"."),t(),n(56,"h2",35)(57,"span"),e(58,"Use Case Scenario"),t(),n(59,"a",36),e(60,"#"),t()(),n(61,"p"),e(62,"The user signs in and gets a JWT token valid for 30 minutes. The user opens a webpage to create/edit an article. It takes 35 minutes to finish the work. The user clicks on submit button. A modal form pops up and asks the user to refresh JWT token by entering a password. The user gets a new JWT token valid for next 30 minutes. Finally, the user clicks submit button and saves the work."),t(),n(63,"h2",37)(64,"span"),e(65,"JWT Token Refresh Concept"),t(),n(66,"a",38),e(67,"#"),t()(),n(68,"p"),e(69,"First, we need to know how basic native JWT token implemented in .NET Core 9 works. Usually, there are "),n(70,"a",39),e(71,"two types of API endpoints: public and private"),t(),e(72,". A private API endpoint look like this:"),t(),n(73,"pre",40)(74,"code"),e(75,"["),n(76,"span",41),e(77,"HttpPut"),t(),e(78,`]
[`),n(79,"span",41),e(80,"Route(nameof(Update))"),t(),e(81,`]
[`),n(82,"span",41),e(83,"Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)"),t(),e(84,`]
`),n(85,"span",42),e(86,"public"),t(),e(87," "),n(88,"span",42),e(89,"async"),t(),e(90,` Task<ActionResult<UserResponseEnvelope>> Update(
    UserUpdateCommand command)
    => `),n(91,"span",42),e(92,"await"),t(),e(93," "),n(94,"span",42),e(95,"this"),t(),e(96,".Send(command);"),t()(),n(97,"p"),e(98,"The user signs in and gets a JWT token which is saved in localStorage. Then, any request to the server includes obtained JWT token in the Authorization header. The server won\u2019t use the token on public endpoints. It means that the server won\u2019t try to decrypt the token. On the private endpoints, the server will try to decrypt the token, apply "),n(99,"code"),e(100,"BearerPolicy"),t(),e(101,", and match the role from the token to "),n(102,"code"),e(103,"AdministratorRoleName"),t(),e(104," list. At this point, the basic native .NET Core 9 implementation does not care if the user form the JWT token exists in the database, and it does not care if the role exists in the database ether. However, the server checks if the token expired and returns a 401 error if it\u2019s the case. With all this in mind, we implemented the concept of JWT token refresh period called PRefresh. Let\u2019s call the token\u2019s valid period PValid. Then, "),n(105,"code"),e(106,"SecurityTokenDescriptorExpiresInMinutes"),t(),e(107," from "),n(108,"a",43),e(109,"appsettings.json"),t(),e(110," = PValid + PRefresh and "),n(111,"code"),e(112,"SecurityTokenRefreshRate "),t(),e(113," = PRefresh/(PValid + PRefresh). So, if "),n(114,"code"),e(115,"SecurityTokenDescriptorExpiresInMinutes"),t(),e(116,"= 60 minutes and "),n(117,"code"),e(118,"SecurityTokenRefreshRate "),t(),e(119," = 1/2, it means that PValid = 30 minutes and PRefresh = 30 minutes. If "),n(120,"code"),e(121,"SecurityTokenRefreshRate "),t(),e(122," = 1/4, it means that PValid = 45 minutes and PRefresh = 15 minutes. If "),n(123,"code"),e(124,"SecurityTokenRefreshRate "),t(),e(125," = 3/4, it means that PValid = 15 minutes and PRefresh = 45 minutes and so on. "),t(),n(126,"h2",44)(127,"span"),e(128,"JWT Token Refresh Implementation"),t(),n(129,"a",45),e(130,"#"),t()(),n(131,"p"),e(132,"One interesting idea of JWT token implementation together with refresh token is on "),n(133,"a",46),e(134,"EdiWang"),t(),e(135," GitHub repository. Our main difference from above implementation is not using web browser cookies and uses native .NET Core implementation which is \u201Ccontrolled\u201D by the .NET Core framework itself. One problem we solved in this article, is the implementation of "),n(136,"code"),e(137,"JWT Token"),t(),e(138," refresh mechanism. There is no standard way to refresh JWT token in .NET Core 9. The main idea was to check a valid "),n(139,"code"),e(140,"JWT token"),t(),e(141," right after standard .NET Core authorization and before entering of an API controller. In fact, we needed to use following formula with this small piece of code:"),t(),n(142,"pre",40)(143,"code")(144,"span",42),e(145,"var"),t(),e(146,` claimsPrincipal = context.User!;
 `),n(147,"span",42),e(148,"if"),t(),e(149," (claimsPrincipal != "),n(150,"span",47),e(151,"null"),t(),e(152,`)
 {
     `),n(153,"span",42),e(154,"var"),t(),e(155,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
     `),n(156,"span",42),e(157,"if"),t(),e(158," (isAuthenticated != "),n(159,"span",47),e(160,"null"),t(),e(161," && ("),n(162,"span",48),e(163,"bool"),t(),e(164,`)isAuthenticated)
     {
         `),n(165,"span",42),e(166,"var"),t(),e(167,` claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
         `),n(168,"span",42),e(169,"if"),t(),e(170," (claim != "),n(171,"span",47),e(172,"null"),t(),e(173,`)
         {
             clientId = claim.Value;
         }
     }
 }
 `),n(174,"span",42),e(175,"if"),t(),e(176," (clientId != "),n(177,"span",47),e(178,"null"),t(),e(179,`)
 {
     `),n(180,"span",42),e(181,"var"),t(),e(182," iat = claimsPrincipal.FindFirst("),n(183,"span",49),e(184,'"iat"'),t(),e(185,`);
     `),n(186,"span",42),e(187,"var"),t(),e(188," exp = claimsPrincipal.FindFirst("),n(189,"span",49),e(190,'"exp"'),t(),e(191,`);
     `),n(192,"span",42),e(193,"if"),t(),e(194," (iat != "),n(195,"span",47),e(196,"null"),t(),e(197," && exp != "),n(198,"span",47),e(199,"null"),t(),e(200,`)
     {
         `),n(201,"span",42),e(202,"var"),t(),e(203," pValid = ("),n(204,"span",48),e(205,"long"),t(),e(206,".Parse(exp.Value) - "),n(207,"span",48),e(208,"long"),t(),e(209,`.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
         `),n(210,"span",42),e(211,"var"),t(),e(212," current = "),n(213,"span",48),e(214,"long"),t(),e(215,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();
         `),n(216,"span",42),e(217,"if"),t(),e(218,` (current < pValid)
         {
             `),n(219,"span",42),e(220,"await"),t(),e(221," ReturnSecurityTokenRefreshRate(context, "),n(222,"span",49),e(223,'"SecurityTokenRefreshRate"'),t(),e(224,", "),n(225,"span",49),e(226,'"Please refresh your JWT token"'),t(),e(227,`);
             `),n(228,"span",42),e(229,"return"),t(),e(230,`;
         }
     }
 }`),t()(),n(231,"p"),e(232,"So, we needed a middleware to place the above piece of code. A good candidate we found was AspNetCoreRateLimit library, so we decided to modify its source code keeping in mind also the possibility of testing it with MyTested. The original AspNetCoreRateLimit middleware is called "),n(233,"a",50),e(234,"RateLimitMiddleware.cs"),t(),e(235," Following is the modified source code that is used in our actual application."),t(),n(236,"h3",51)(237,"span"),e(238,"Modified RateLimitMiddleware"),t(),n(239,"a",52),e(240,"#"),t()(),n(241,"pre",40)(242,"code")(243,"span",42),e(244,"using"),t(),e(245,` Microsoft.AspNetCore.Hosting;
`),n(246,"span",42),e(247,"using"),t(),e(248,` Microsoft.AspNetCore.Http;
`),n(249,"span",42),e(250,"using"),t(),e(251,` Newtonsoft.Json;
`),n(252,"span",42),e(253,"using"),t(),e(254,` Newtonsoft.Json.Serialization;
`),n(255,"span",42),e(256,"using"),t(),e(257,` System;
`),n(258,"span",42),e(259,"using"),t(),e(260,` System.Collections.Generic;
`),n(261,"span",42),e(262,"using"),t(),e(263,` System.Data;
`),n(264,"span",42),e(265,"using"),t(),e(266,` System.Linq;
`),n(267,"span",42),e(268,"using"),t(),e(269,` System.Net;
`),n(270,"span",42),e(271,"using"),t(),e(272,` System.Security.Claims;
`),n(273,"span",42),e(274,"using"),t(),e(275,` System.Text;
`),n(276,"span",42),e(277,"using"),t(),e(278,` System.Threading.Tasks;

`),n(279,"span",42),e(280,"namespace"),t(),e(281," "),n(282,"span",53),e(283,"AspNetCoreRateLimit"),t(),e(284,`
{
    `),n(285,"span",42),e(286,"public"),t(),e(287," "),n(288,"span",42),e(289,"abstract"),t(),e(290," "),n(291,"span",42),e(292,"class"),t(),e(293," "),n(294,"span",53),e(295,"RateLimitMiddleware"),t(),e(296,"<"),n(297,"span",53),e(298,"TProcessor"),t(),e(299,"> : "),n(300,"span",53),e(301,"IMiddleware"),t(),e(302,`
        `),n(303,"span",42),e(304,"where"),t(),e(305," "),n(306,"span",53),e(307,"TProcessor"),t(),e(308," : "),n(309,"span",53),e(310,"IRateLimitProcessor"),t(),e(311,`
    {
        `),n(312,"span",42),e(313,"private"),t(),e(314," "),n(315,"span",42),e(316,"readonly"),t(),e(317,` IWebHostEnvironment _env;
        `),n(318,"span",42),e(319,"private"),t(),e(320," "),n(321,"span",42),e(322,"readonly"),t(),e(323,` TProcessor _processor;
        `),n(324,"span",42),e(325,"private"),t(),e(326," "),n(327,"span",42),e(328,"readonly"),t(),e(329,` RateLimitOptions _options;
        `),n(330,"span",42),e(331,"private"),t(),e(332," "),n(333,"span",42),e(334,"readonly"),t(),e(335,` IRateLimitConfiguration _config;
        `),n(336,"span",42),e(337,"private"),t(),e(338," "),n(339,"span",42),e(340,"readonly"),t(),e(341," "),n(342,"span",48),e(343,"bool"),t(),e(344,` _securityTokenRefreshOnly;
        `),n(345,"span",54)(346,"span",42),e(347,"protected"),t(),e(348," "),n(349,"span",53),e(350,"RateLimitMiddleware"),t(),e(351,"("),n(352,"span",55),e(353,`
            IWebHostEnvironment env,
            RateLimitOptions options,
            TProcessor processor,
            IRateLimitConfiguration config,
            `),n(354,"span",48),e(355,"bool"),t(),e(356," securityTokenRefreshOnly"),t(),e(357,")"),t(),e(358,`
        {
            _env = env;
            _options = options;
            _processor = processor;
            _config = config;
            _securityTokenRefreshOnly = securityTokenRefreshOnly;

            `),n(359,"span",42),e(360,"if"),t(),e(361," (_env.EnvironmentName == "),n(362,"span",49),e(363,'"Test"'),t(),e(364,`)
            {
                _config.RegisterResolvers();
            }
        }

        `),n(365,"span",54)(366,"span",42),e(367,"public"),t(),e(368," "),n(369,"span",42),e(370,"async"),t(),e(371," Task "),n(372,"span",53),e(373,"InvokeAsync"),t(),e(374,"("),n(375,"span",55),e(376,"HttpContext context, RequestDelegate _next"),t(),e(377,")"),t(),e(378,`
        {
            `),n(379,"span",56),e(380,"// check if rate limiting is enabled (EnableEndpointRateLimiting)"),t(),e(381,`
            `),n(382,"span",42),e(383,"if"),t(),e(384," (_options == "),n(385,"span",47),e(386,"null"),t(),e(387,`)
            {
                `),n(388,"span",42),e(389,"await"),t(),e(390,` _next.Invoke(context);
                `),n(391,"span",42),e(392,"return"),t(),e(393,`;
            }

            `),n(394,"span",48),e(395,"string"),t(),e(396," clientIp = "),n(397,"span",47),e(398,"null"),t(),e(399,`;
            `),n(400,"span",48),e(401,"string"),t(),e(402," clientId = "),n(403,"span",47),e(404,"null"),t(),e(405,`;

            `),n(406,"span",42),e(407,"var"),t(),e(408,` claimsPrincipal = context.User!;

            `),n(409,"span",42),e(410,"if"),t(),e(411," (claimsPrincipal != "),n(412,"span",47),e(413,"null"),t(),e(414,`)
            {
                `),n(415,"span",42),e(416,"var"),t(),e(417,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),n(418,"span",42),e(419,"if"),t(),e(420," (isAuthenticated != "),n(421,"span",47),e(422,"null"),t(),e(423," && ("),n(424,"span",48),e(425,"bool"),t(),e(426,`)isAuthenticated)
                {
                    `),n(427,"span",42),e(428,"var"),t(),e(429,` claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
                    `),n(430,"span",42),e(431,"if"),t(),e(432," (claim != "),n(433,"span",47),e(434,"null"),t(),e(435,`)
                    {
                        clientId = claim.Value;
                    }
                }
            }

            `),n(436,"span",42),e(437,"if"),t(),e(438,` (!_config.IpResolvers.IsEmpty)
            {
                `),n(439,"span",42),e(440,"var"),t(),e(441,` resolver = _config.IpResolvers.GetEnumerator();
                `),n(442,"span",42),e(443,"while"),t(),e(444,` (resolver.MoveNext())
                {
                    clientIp = resolver.Current.Value.ResolveIp(context);
                    `),n(445,"span",42),e(446,"if"),t(),e(447," (!"),n(448,"span",48),e(449,"string"),t(),e(450,`.IsNullOrEmpty(clientIp))
                    {
                        `),n(451,"span",42),e(452,"break"),t(),e(453,`;
                    }
                }
            }

            `),n(454,"span",42),e(455,"var"),t(),e(456,` path = context.Request.Path.ToString().ToLowerInvariant();
            `),n(457,"span",42),e(458,"var"),t(),e(459," identity = "),n(460,"span",42),e(461,"new"),t(),e(462,` ClientRequestIdentity
            {
                ClientIp = clientIp ?? context.Connection.RemoteIpAddress?.MapToIPv4().ToString(),
                Path = path == `),n(463,"span",49),e(464,'"/"'),t(),e(465,`
                    ? path
                    : path.TrimEnd(`),n(466,"span",49),e(467,"'/'"),t(),e(468,`),
                HttpVerb = context.Request.Method.ToLowerInvariant(),
                ClientId = clientId ?? `),n(469,"span",49),e(470,'"anon"'),t(),e(471,`
            };


            `),n(472,"span",56),e(473,"// check white list"),t(),e(474,`
            `),n(475,"span",42),e(476,"if"),t(),e(477,` (!_processor.IsWhitelisted(identity))
            {
                `),n(478,"span",42),e(479,"if"),t(),e(480," (clientId != "),n(481,"span",47),e(482,"null"),t(),e(483,`)
                {
                    `),n(484,"span",42),e(485,"var"),t(),e(486," iat = claimsPrincipal.FindFirst("),n(487,"span",49),e(488,'"iat"'),t(),e(489,`);
                    `),n(490,"span",42),e(491,"var"),t(),e(492," exp = claimsPrincipal.FindFirst("),n(493,"span",49),e(494,'"exp"'),t(),e(495,`);
                    `),n(496,"span",42),e(497,"if"),t(),e(498," (iat != "),n(499,"span",47),e(500,"null"),t(),e(501," && exp != "),n(502,"span",47),e(503,"null"),t(),e(504,`)
                    {
                        `),n(505,"span",42),e(506,"var"),t(),e(507," pValid = ("),n(508,"span",48),e(509,"long"),t(),e(510,".Parse(exp.Value) - "),n(511,"span",48),e(512,"long"),t(),e(513,`.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
                        `),n(514,"span",42),e(515,"var"),t(),e(516," current = "),n(517,"span",48),e(518,"long"),t(),e(519,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                        `),n(520,"span",42),e(521,"if"),t(),e(522," ("),n(523,"span",42),e(524,"this"),t(),e(525,"._env.EnvironmentName == "),n(526,"span",49),e(527,'"Test"'),t(),e(528,`)
                        {
                            `),n(529,"span",42),e(530,"if"),t(),e(531," (clientId == "),n(532,"span",49),e(533,'"SecurityTokenRefreshException@email.com1"'),t(),e(534,`)
                            {
                                `),n(535,"span",42),e(536,"await"),t(),e(537," Task.FromException("),n(538,"span",42),e(539,"new"),t(),e(540," SecurityTokenRefreshException("),n(541,"span",49),e(542,'$"This is a test. PValid:  '),n(543,"span",57),e(544,"{pValid}"),t(),e(545," Current: "),n(546,"span",57),e(547,"{current}"),t(),e(548," ClientId: "),n(549,"span",57),e(550,"{clientId}"),t(),e(551,'"'),t(),e(552,`));
                            }
                        }
                        `),n(553,"span",42),e(554,"else"),t(),e(555," "),n(556,"span",42),e(557,"if"),t(),e(558,` (current < pValid)
                        {
                            `),n(559,"span",42),e(560,"await"),t(),e(561," ReturnSecurityTokenRefreshRate(context, "),n(562,"span",49),e(563,'"SecurityTokenRefreshRate"'),t(),e(564,", "),n(565,"span",49),e(566,'"Please refresh your JWT token"'),t(),e(567,`);
                            `),n(568,"span",42),e(569,"return"),t(),e(570,`;
                        }
                    }
                }

                `),n(571,"span",41),e(572,"#"),n(573,"span",42),e(574,"region"),t(),e(575," NOT securityTokenRefreshOnly"),t(),e(576,`
                `),n(577,"span",42),e(578,"if"),t(),e(579,` (!_securityTokenRefreshOnly)
                {
                    `),n(580,"span",42),e(581,"if"),t(),e(582," ("),n(583,"span",42),e(584,"this"),t(),e(585,"._env.EnvironmentName == "),n(586,"span",49),e(587,'"Test"'),t(),e(588,`)
                    {
                        `),n(589,"span",42),e(590,"if"),t(),e(591," (clientIp == "),n(592,"span",49),e(593,'"0.0.0.0"'),t(),e(594,`)
                        {
                            `),n(595,"span",42),e(596,"await"),t(),e(597," Task.FromException("),n(598,"span",42),e(599,"new"),t(),e(600," MatchingRulesException("),n(601,"span",49),e(602,'$"This is a test. ClientIp: '),n(603,"span",57),e(604,"{identity.ClientIp}"),t(),e(605,'"'),t(),e(606,`));
                        }
                    }

                    IEnumerable<RateLimitRule> rules = `),n(607,"span",47),e(608,"null"),t(),e(609,`;
                    rules = `),n(610,"span",42),e(611,"await"),t(),e(612,` _processor.GetMatchingRulesAsync(identity, context.RequestAborted);
                    `),n(613,"span",42),e(614,"if"),t(),e(615," (rules == "),n(616,"span",47),e(617,"null"),t(),e(618,`)
                    {
                        `),n(619,"span",42),e(620,"if"),t(),e(621," ("),n(622,"span",42),e(623,"this"),t(),e(624,"._env.EnvironmentName == "),n(625,"span",49),e(626,'"Test"'),t(),e(627,`)
                        {
                            `),n(628,"span",42),e(629,"await"),t(),e(630," Task.FromException("),n(631,"span",42),e(632,"new"),t(),e(633," MatchingRulesException("),n(634,"span",49),e(635,'$"This is a test. ClientIp: '),n(636,"span",57),e(637,"{identity.ClientIp}"),t(),e(638,'"'),t(),e(639,`));
                        }
                        `),n(640,"span",42),e(641,"else"),t(),e(642,`
                        {
                            `),n(643,"span",42),e(644,"await"),t(),e(645," ReturnSecurityTokenRefreshRate(context, "),n(646,"span",49),e(647,'"MatchingRulesException"'),t(),e(648,", "),n(649,"span",49),e(650,'$"Matching rules is null. Your IP address is: '),n(651,"span",57),e(652,"{identity.ClientIp}"),t(),e(653,'"'),t(),e(654,`);
                            `),n(655,"span",42),e(656,"return"),t(),e(657,`;
                        }
                    }

                    `),n(658,"span",42),e(659,"var"),t(),e(660," rulesDict = "),n(661,"span",42),e(662,"new"),t(),e(663,` Dictionary<RateLimitRule, RateLimitCounter>();

                    `),n(664,"span",42),e(665,"foreach"),t(),e(666," ("),n(667,"span",42),e(668,"var"),t(),e(669," rule "),n(670,"span",42),e(671,"in"),t(),e(672,` rules)
                    {
                        `),n(673,"span",56),e(674,"// increment counter"),t(),e(675,`
                        `),n(676,"span",42),e(677,"var"),t(),e(678," rateLimitCounter = "),n(679,"span",42),e(680,"await"),t(),e(681,` _processor.ProcessRequestAsync(identity, rule, context.RequestAborted);

                        `),n(682,"span",42),e(683,"if"),t(),e(684," (rule.Limit > "),n(685,"span",58),e(686,"0"),t(),e(687,`)
                        {
                            `),n(688,"span",56),e(689,"// check if key expired"),t(),e(690,`
                            `),n(691,"span",42),e(692,"if"),t(),e(693,` (rateLimitCounter.Timestamp + rule.PeriodTimespan.Value < DateTime.UtcNow)
                            {
                                `),n(694,"span",42),e(695,"continue"),t(),e(696,`;
                            }

                            `),n(697,"span",56),e(698,"// check if limit is reached"),t(),e(699,`
                            `),n(700,"span",42),e(701,"if"),t(),e(702,` (rateLimitCounter.Count > rule.Limit)
                            {
                                `),n(703,"span",56),e(704,"//compute retry after value"),t(),e(705,`
                                `),n(706,"span",42),e(707,"var"),t(),e(708,` retryAfter = rateLimitCounter.Timestamp.RetryAfterFrom(rule);

                                `),n(709,"span",56),e(710,"// log blocked request"),t(),e(711,`
                                LogBlockedRequest(context, identity, rateLimitCounter, rule);

                                `),n(712,"span",42),e(713,"if"),t(),e(714," (_options.RequestBlockedBehaviorAsync != "),n(715,"span",47),e(716,"null"),t(),e(717,`)
                                {
                                    `),n(718,"span",42),e(719,"await"),t(),e(720,` _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                                }

                                `),n(721,"span",42),e(722,"if"),t(),e(723," ("),n(724,"span",42),e(725,"this"),t(),e(726,"._env.EnvironmentName == "),n(727,"span",49),e(728,'"Test"'),t(),e(729,`)
                                {
                                    `),n(730,"span",42),e(731,"await"),t(),e(732," Task.FromException("),n(733,"span",42),e(734,"new"),t(),e(735," RateLimitMiddlewareException("),n(736,"span",49),e(737,'$"This is a test. rateLimitCounter.Count '),n(738,"span",57),e(739,"{rateLimitCounter.Count}"),t(),e(740," rule.Limit: "),n(741,"span",57),e(742,"{rule.Limit}"),t(),e(743," ClientIp: "),n(744,"span",57),e(745,"{identity.ClientIp}"),t(),e(746,'"'),t(),e(747,`));
                                }

                                `),n(748,"span",42),e(749,"if"),t(),e(750,` (!rule.MonitorMode)
                                {
                                    `),n(751,"span",56),e(752,"// break execution"),t(),e(753,`
                                    `),n(754,"span",42),e(755,"await"),t(),e(756,` ReturnQuotaExceededResponse(context, rule, retryAfter, identity.ClientIp);

                                    `),n(757,"span",42),e(758,"return"),t(),e(759,`;
                                }
                            }
                        }
                        `),n(760,"span",56),e(761,"// if limit is zero or less, block the request."),t(),e(762,`
                        `),n(763,"span",42),e(764,"else"),t(),e(765,`
                        {
                            `),n(766,"span",56),e(767,"// log blocked request"),t(),e(768,`
                            LogBlockedRequest(context, identity, rateLimitCounter, rule);

                            `),n(769,"span",42),e(770,"if"),t(),e(771," (_options.RequestBlockedBehaviorAsync != "),n(772,"span",47),e(773,"null"),t(),e(774,`)
                            {
                                `),n(775,"span",42),e(776,"await"),t(),e(777,` _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                            }

                            `),n(778,"span",42),e(779,"if"),t(),e(780," ("),n(781,"span",42),e(782,"this"),t(),e(783,"._env.EnvironmentName == "),n(784,"span",49),e(785,'"Test"'),t(),e(786,`)
                            {
                                `),n(787,"span",42),e(788,"await"),t(),e(789," Task.FromException("),n(790,"span",42),e(791,"new"),t(),e(792," RateLimitMiddlewareException("),n(793,"span",49),e(794,'$"This is a test. rateLimitCounter.Count '),n(795,"span",57),e(796,"{rateLimitCounter.Count}"),t(),e(797," rule.Limit: "),n(798,"span",57),e(799,"{rule.Limit}"),t(),e(800," ClientIp: "),n(801,"span",57),e(802,"{identity.ClientIp}"),t(),e(803,'"'),t(),e(804,`));
                            }

                            `),n(805,"span",42),e(806,"if"),t(),e(807,` (!rule.MonitorMode)
                            {
                                `),n(808,"span",56),e(809,"// break execution (Int32 max used to represent infinity)"),t(),e(810,`
                                `),n(811,"span",42),e(812,"await"),t(),e(813," ReturnQuotaExceededResponse(context, rule, "),n(814,"span",48),e(815,"int"),t(),e(816,`.MaxValue.ToString(System.Globalization.CultureInfo.InvariantCulture), identity.ClientIp);

                                `),n(817,"span",42),e(818,"return"),t(),e(819,`;
                            }
                        }

                        rulesDict.Add(rule, rateLimitCounter);
                    }

                    `),n(820,"span",56),e(821,"// set X-Rate-Limit headers for the longest period"),t(),e(822,`
                    `),n(823,"span",42),e(824,"if"),t(),e(825," (rulesDict.Count != "),n(826,"span",58),e(827,"0"),t(),e(828,` && !_options.DisableRateLimitHeaders)
                    {
                        `),n(829,"span",42),e(830,"var"),t(),e(831,` rule = rulesDict.OrderByDescending(x => x.Key.PeriodTimespan).FirstOrDefault();
                        `),n(832,"span",42),e(833,"var"),t(),e(834,` headers = _processor.GetRateLimitHeaders(rule.Value, rule.Key, context.RequestAborted);

                        headers.Context = context;

                        context.Response.OnStarting(SetRateLimitHeaders, state: headers);
                    }
                }
                `),n(835,"span",41),e(836,"#"),n(837,"span",42),e(838,"endregion"),t()(),e(839,`
            }

            `),n(840,"span",42),e(841,"if"),t(),e(842," ("),n(843,"span",42),e(844,"this"),t(),e(845,"._env.EnvironmentName == "),n(846,"span",49),e(847,'"Test"'),t(),e(848,`)
            {
                `),n(849,"span",42),e(850,"await"),t(),e(851," Task.FromResult("),n(852,"span",47),e(853,"true"),t(),e(854,`);
            }
            `),n(855,"span",42),e(856,"else"),t(),e(857,`
            {
                `),n(858,"span",42),e(859,"await"),t(),e(860,` _next.Invoke(context);
            }
        }

        `),n(861,"span",54)(862,"span",42),e(863,"private"),t(),e(864," "),n(865,"span",42),e(866,"static"),t(),e(867," Task "),n(868,"span",53),e(869,"ReturnSecurityTokenRefreshRate"),t(),e(870,"("),n(871,"span",55),e(872,"HttpContext context, "),n(873,"span",48),e(874,"string"),t(),e(875," key, "),n(876,"span",48),e(877,"string"),t(),e(878," message"),t(),e(879,")"),t(),e(880,`
        {
            context.Response.ContentType = `),n(881,"span",49),e(882,'"application/json"'),t(),e(883,`;
            context.Response.StatusCode = (`),n(884,"span",48),e(885,"int"),t(),e(886,`)HttpStatusCode.UnprocessableEntity;

            `),n(887,"span",42),e(888,"var"),t(),e(889," result = SerializeObject("),n(890,"span",42),e(891,"new"),t(),e(892,` ErrorListResult(key,
                        [
                            message
                        ]));

            `),n(893,"span",42),e(894,"return"),t(),e(895,` context.Response.WriteAsync(result);
        }

        `),n(896,"span",54)(897,"span",42),e(898,"private"),t(),e(899," "),n(900,"span",42),e(901,"static"),t(),e(902," "),n(903,"span",48),e(904,"string"),t(),e(905," "),n(906,"span",53),e(907,"SerializeObject"),t(),e(908,"("),n(909,"span",55)(910,"span",48),e(911,"object"),t(),e(912," obj"),t(),e(913,")"),t(),e(914,`
            => JsonConvert.SerializeObject(obj, `),n(915,"span",42),e(916,"new"),t(),e(917,` JsonSerializerSettings
            {
                ContractResolver = `),n(918,"span",42),e(919,"new"),t(),e(920,` DefaultContractResolver
                {
                    NamingStrategy = `),n(921,"span",42),e(922,"new"),t(),e(923," CamelCaseNamingStrategy("),n(924,"span",47),e(925,"true"),t(),e(926,", "),n(927,"span",47),e(928,"true"),t(),e(929,`)
                }
            });

        `),n(930,"span",54)(931,"span",42),e(932,"public"),t(),e(933," "),n(934,"span",42),e(935,"virtual"),t(),e(936," Task "),n(937,"span",53),e(938,"ReturnQuotaExceededResponse"),t(),e(939,"("),n(940,"span",55),e(941,"HttpContext httpContext, RateLimitRule rule, "),n(942,"span",48),e(943,"string"),t(),e(944," retryAfter, "),n(945,"span",48),e(946,"string"),t(),e(947," clientIp"),t(),e(948,")"),t(),e(949,`
        {
            `),n(950,"span",56),e(951,"//Use Endpoint QuotaExceededResponse"),t(),e(952,`
            `),n(953,"span",42),e(954,"if"),t(),e(955," (rule.QuotaExceededResponse != "),n(956,"span",47),e(957,"null"),t(),e(958,`)
            {
                _options.QuotaExceededResponse = rule.QuotaExceededResponse;
            }
            `),n(959,"span",42),e(960,"var"),t(),e(961," message = "),n(962,"span",48),e(963,"string"),t(),e(964,`.Format(
                    _options.QuotaExceededResponse?.Content ??
                    _options.QuotaExceededMessage ??
                    `),n(965,"span",49),e(966,'"Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP adress is {3}"'),t(),e(967,`,
                    rule.Limit,
                    rule.PeriodTimespan.HasValue ? FormatPeriodTimespan(rule.PeriodTimespan.Value) : rule.Period, retryAfter, clientIp
             );

            `),n(968,"span",42),e(969,"if"),t(),e(970,` (!_options.DisableRateLimitHeaders)
            {
                httpContext.Response.Headers.RetryAfter = retryAfter;
            }

            httpContext.Response.ContentType = _options.QuotaExceededResponse?.ContentType ?? `),n(971,"span",49),e(972,'"text/plain"'),t(),e(973,`;
            httpContext.Response.StatusCode = _options.QuotaExceededResponse?.StatusCode ?? _options.HttpStatusCode;


            `),n(974,"span",42),e(975,"var"),t(),e(976," result = SerializeObject("),n(977,"span",42),e(978,"new"),t(),e(979," ErrorListResult("),n(980,"span",49),e(981,'"QuotaExceeded"'),t(),e(982,`,
                        [
                            message
                        ]));

            `),n(983,"span",42),e(984,"return"),t(),e(985,` httpContext.Response.WriteAsync(result);
        }

        `),n(986,"span",54)(987,"span",42),e(988,"private"),t(),e(989," "),n(990,"span",42),e(991,"static"),t(),e(992," "),n(993,"span",48),e(994,"string"),t(),e(995," "),n(996,"span",53),e(997,"FormatPeriodTimespan"),t(),e(998,"("),n(999,"span",55),e(1e3,"TimeSpan period"),t(),e(1001,")"),t(),e(1002,`
        {
            `),n(1003,"span",42),e(1004,"var"),t(),e(1005," sb = "),n(1006,"span",42),e(1007,"new"),t(),e(1008,` StringBuilder();

            `),n(1009,"span",42),e(1010,"if"),t(),e(1011," (period.Days > "),n(1012,"span",58),e(1013,"0"),t(),e(1014,`)
            {
                sb.Append(`),n(1015,"span",49),e(1016,'$"'),n(1017,"span",57),e(1018,"{period.Days}"),t(),e(1019,'d"'),t(),e(1020,`);
            }

            `),n(1021,"span",42),e(1022,"if"),t(),e(1023," (period.Hours > "),n(1024,"span",58),e(1025,"0"),t(),e(1026,`)
            {
                sb.Append(`),n(1027,"span",49),e(1028,'$"'),n(1029,"span",57),e(1030,"{period.Hours}"),t(),e(1031,'h"'),t(),e(1032,`);
            }

            `),n(1033,"span",42),e(1034,"if"),t(),e(1035," (period.Minutes > "),n(1036,"span",58),e(1037,"0"),t(),e(1038,`)
            {
                sb.Append(`),n(1039,"span",49),e(1040,'$"'),n(1041,"span",57),e(1042,"{period.Minutes}"),t(),e(1043,'m"'),t(),e(1044,`);
            }

            `),n(1045,"span",42),e(1046,"if"),t(),e(1047," (period.Seconds > "),n(1048,"span",58),e(1049,"0"),t(),e(1050,`)
            {
                sb.Append(`),n(1051,"span",49),e(1052,'$"'),n(1053,"span",57),e(1054,"{period.Seconds}"),t(),e(1055,'s"'),t(),e(1056,`);
            }

            `),n(1057,"span",42),e(1058,"if"),t(),e(1059," (period.Milliseconds > "),n(1060,"span",58),e(1061,"0"),t(),e(1062,`)
            {
                sb.Append(`),n(1063,"span",49),e(1064,'$"'),n(1065,"span",57),e(1066,"{period.Milliseconds}"),t(),e(1067,'ms"'),t(),e(1068,`);
            }

            `),n(1069,"span",42),e(1070,"return"),t(),e(1071,` sb.ToString();
        }

        `),n(1072,"span",54)(1073,"span",42),e(1074,"protected"),t(),e(1075," "),n(1076,"span",42),e(1077,"abstract"),t(),e(1078," "),n(1079,"span",42),e(1080,"void"),t(),e(1081," "),n(1082,"span",53),e(1083,"LogBlockedRequest"),t(),e(1084,"("),n(1085,"span",55),e(1086,"HttpContext httpContext, ClientRequestIdentity identity, RateLimitCounter counter, RateLimitRule rule"),t(),e(1087,")"),t(),e(1088,`;

        `),n(1089,"span",54)(1090,"span",42),e(1091,"private"),t(),e(1092," Task "),n(1093,"span",53),e(1094,"SetRateLimitHeaders"),t(),e(1095,"("),n(1096,"span",55)(1097,"span",48),e(1098,"object"),t(),e(1099," rateLimitHeaders"),t(),e(1100,")"),t(),e(1101,`
        {
            `),n(1102,"span",42),e(1103,"var"),t(),e(1104,` headers = (RateLimitHeaders)rateLimitHeaders;

            headers.Context.Response.Headers[`),n(1105,"span",49),e(1106,'"X-Rate-Limit-Limit"'),t(),e(1107,`] = headers.Limit;
            headers.Context.Response.Headers[`),n(1108,"span",49),e(1109,'"X-Rate-Limit-Remaining"'),t(),e(1110,`] = headers.Remaining;
            headers.Context.Response.Headers[`),n(1111,"span",49),e(1112,'"X-Rate-Limit-Reset"'),t(),e(1113,`] = headers.Reset;

            `),n(1114,"span",42),e(1115,"return"),t(),e(1116,` Task.CompletedTask;
        }
    }
}`),t()(),n(1117,"h2",59)(1118,"span"),e(1119,"Testing of RateLimitMiddleware With MyTested Library"),t(),n(1120,"a",60),e(1121,"#"),t()(),n(1122,"p"),e(1123,"From the start, we need to keep in mind that MyTested does not provide support for middleware testing. So, we found a work around which is not 100% accurate. The main idea is that you have to setup the middleware manually in the right place to be logically correct. In our case, we\u2019ve got "),n(1124,"code"),e(1125,"GetTagsWithRateLimitMiddleware"),t(),e(1126," and "),n(1127,"code"),e(1128,"GetAllWithRateLimitMiddleware"),t(),e(1129," from "),n(1130,"a",61),e(1131,"StaticTestData.cs"),t(),e(1132,"). Also, RateLimitMiddleware needs shared "),n(1133,"code"),e(1134,"MemoryCache"),t(),e(1135,". On the other hand, MyTested just simulates shared "),n(1136,"code"),e(1137,"MeroryCache"),t(),e(1138,". So, we modified source code of MyTested to work with the actual "),n(1139,"code"),e(1140,"MeroryCache"),t(),e(1141," Also, we introduced an option "),n(1142,"code"),e(1143,'\u201DReplaceMemoryCache": false'),t(),e(1144," (See "),n(1145,"a",62),e(1146,"testsettings.json"),t(),e(1147,"). From our modified source code of RateLimitMiddleware, you can see that we try to keep the original functional and add JWT token refresh concept also. As a result, we\u2019ve got following limitations:"),t(),n(1148,"ul")(1149,"li"),e(1150,"the "),n(1151,"code"),e(1152,"clientId"),t(),e(1153," is taken from JWT token only"),t(),n(1154,"li"),e(1155,"the "),n(1156,"code"),e(1157,"clientIp"),t(),e(1158," is taken from "),n(1159,"code"),e(1160,"context.Connection.RemoteIpAddress"),t(),e(1161," only"),t(),n(1162,"li")(1163,"code"),e(1164,"ClientWhitelist"),t(),e(1165,` configuration option does not work with public endpoints, and it should be empty.
Also, the \u201Ccorrect way\u201D to configure it is following:`),t()(),n(1166,"pre",40)(1167,"code"),e(1168,`...
.UseRouting()
.InitializeRateLimit()
.UseMiddleware<IpRateLimitMiddleware>()
.UseAuthentication()
.UseAuthorization()
.UseMiddleware<ClientRateLimitMiddleware>()
...`),t()(),n(1169,"p"),e(1170,"All our middleware tests are in "),n(1171,"a",63),e(1172,"RateLimit"),t(),e(1173," folder. For token refresh concept, we\u2019ve got just two tests: "),n(1174,"code"),e(1175,"Edit_tag_with_refresh_token_should_fail"),t(),e(1176," and "),n(1177,"code"),e(1178,"Login_with_password_with_refresh_token_and_whitelisted_private_route_should_return_success_with_token"),t(),e(1179,". One interesting idea of a test( See "),n(1180,"a",64),e(1181,"AsyncKeyedLockTest.cs"),t(),e(1182,") comes from "),n(1183,"a",65),e(1184,"AsyncKeyedLock"),t(),e(1185,`.
Also, we made some additional small changes in AspNetCoreRateLimit library by borrowing some ideas from `),n(1186,"a",66),e(1187,"Edi.CacheAside.InMemory"),t(),e(1188,". Finaly, we\u2019ve used following settings for our tests project:"),t(),n(1189,"h3",67)(1190,"span"),e(1191,"Test Settings"),t(),n(1192,"a",68),e(1193,"#"),t()(),n(1194,"pre",69)(1195,"code"),e(1196," "),n(1197,"span",70),e(1198,"{"),t(),e(1199,`
  `),n(1200,"span",71),e(1201,'"General"'),t(),n(1202,"span",70),e(1203,":"),t(),e(1204," "),n(1205,"span",70),e(1206,"{"),t(),e(1207,`
    `),n(1208,"span",71),e(1209,'"ReplaceMemoryCache"'),t(),n(1210,"span",70),e(1211,":"),t(),e(1212," "),n(1213,"span",47)(1214,"span",42),e(1215,"false"),t()(),e(1216,`
  `),n(1217,"span",70),e(1218,"}"),t(),n(1219,"span",70),e(1220,","),t(),e(1221,`

  `),n(1222,"span",71),e(1223,'"ApplicationSettings"'),t(),n(1224,"span",70),e(1225,":"),t(),e(1226," "),n(1227,"span",70),e(1228,"{"),t(),e(1229,`
    `),n(1230,"span",71),e(1231,'"SecurityTokenDescriptorKey"'),t(),n(1232,"span",70),e(1233,":"),t(),e(1234," "),n(1235,"span",49),e(1236,'"test1223dfgdfkffpie"'),t(),n(1237,"span",70),e(1238,","),t(),e(1239,`
    `),n(1240,"span",71),e(1241,'"SecurityTokenDescriptorExpiresInMinutes"'),t(),n(1242,"span",70),e(1243,":"),t(),e(1244," "),n(1245,"span",58),e(1246,"10"),t(),n(1247,"span",70),e(1248,","),t(),e(1249,`
    `),n(1250,"span",71),e(1251,'"SecurityTokenRefreshRate"'),t(),n(1252,"span",70),e(1253,":"),t(),e(1254," "),n(1255,"span",58),e(1256,"0.5"),t(),n(1257,"span",70),e(1258,","),t(),e(1259,`
    `),n(1260,"span",71),e(1261,'"MaxFailedAccessAttempts"'),t(),n(1262,"span",70),e(1263,":"),t(),e(1264," "),n(1265,"span",58),e(1266,"5"),t(),n(1267,"span",70),e(1268,","),t(),e(1269,`
    `),n(1270,"span",71),e(1271,'"DefaultLockoutTimeSpanInMinutes"'),t(),n(1272,"span",70),e(1273,":"),t(),e(1274," "),n(1275,"span",58),e(1276,"0"),t(),n(1277,"span",70),e(1278,","),t(),e(1279,`
    `),n(1280,"span",71),e(1281,'"ExperimentalIpAddress"'),t(),n(1282,"span",70),e(1283,":"),t(),e(1284," "),n(1285,"span",49),e(1286,'"::1"'),t(),e(1287,`
  `),n(1288,"span",70),e(1289,"}"),t(),n(1290,"span",70),e(1291,","),t(),e(1292,`

  `),n(1293,"span",71),e(1294,'"IpRateLimiting"'),t(),n(1295,"span",70),e(1296,":"),t(),e(1297," "),n(1298,"span",70),e(1299,"{"),t(),e(1300,`
    `),n(1301,"span",71),e(1302,'"EnableEndpointRateLimiting"'),t(),n(1303,"span",70),e(1304,":"),t(),e(1305," "),n(1306,"span",47)(1307,"span",42),e(1308,"true"),t()(),n(1309,"span",70),e(1310,","),t(),e(1311,`
    `),n(1312,"span",71),e(1313,'"SecurityTokenRefreshRate"'),t(),n(1314,"span",70),e(1315,":"),t(),e(1316," "),n(1317,"span",58),e(1318,"0.5"),t(),n(1319,"span",70),e(1320,","),t(),e(1321,`
    `),n(1322,"span",71),e(1323,'"StackBlockedRequests"'),t(),n(1324,"span",70),e(1325,":"),t(),e(1326," "),n(1327,"span",47)(1328,"span",42),e(1329,"false"),t()(),n(1330,"span",70),e(1331,","),t(),e(1332,`
    `),n(1333,"span",71),e(1334,'"RealIpHeader"'),t(),n(1335,"span",70),e(1336,":"),t(),e(1337," "),n(1338,"span",49),e(1339,'"X-Real-IP"'),t(),n(1340,"span",70),e(1341,","),t(),e(1342,`
    `),n(1343,"span",71),e(1344,'"HttpStatusCode"'),t(),n(1345,"span",70),e(1346,":"),t(),e(1347," "),n(1348,"span",58),e(1349,"429"),t(),n(1350,"span",70),e(1351,","),t(),e(1352,`
    `),n(1353,"span",71),e(1354,'"IpWhitelist"'),t(),n(1355,"span",70),e(1356,":"),t(),e(1357," "),n(1358,"span",70),e(1359,"["),t(),e(1360," "),n(1361,"span",49),e(1362,'"::1/10"'),t(),n(1363,"span",70),e(1364,","),t(),e(1365," "),n(1366,"span",49),e(1367,'"192.168.0.0/24"'),t(),e(1368," "),n(1369,"span",70),e(1370,"]"),t(),n(1371,"span",70),e(1372,","),t(),e(1373,`
    `),n(1374,"span",71),e(1375,'"EndpointWhitelist"'),t(),n(1376,"span",70),e(1377,":"),t(),e(1378," "),n(1379,"span",70),e(1380,"["),t(),e(1381,`
      `),n(1382,"span",49),e(1383,'"post:/api/v1.0/identity"'),t(),n(1384,"span",70),e(1385,","),t(),e(1386,`
      `),n(1387,"span",49),e(1388,'"post:/api/v1.0/identity/login"'),t(),n(1389,"span",70),e(1390,","),t(),e(1391,`
      `),n(1392,"span",49),e(1393,'"get:/*.json"'),t(),n(1394,"span",70),e(1395,","),t(),e(1396,`
      `),n(1397,"span",49),e(1398,'"get:/*.js"'),t(),n(1399,"span",70),e(1400,","),t(),e(1401,`
      `),n(1402,"span",49),e(1403,'"get:/*.css"'),t(),n(1404,"span",70),e(1405,","),t(),e(1406,`
      `),n(1407,"span",49),e(1408,'"get:/*.ico"'),t(),e(1409,`
    `),n(1410,"span",70),e(1411,"]"),t(),n(1412,"span",70),e(1413,","),t(),e(1414,`
    `),n(1415,"span",71),e(1416,'"ClientWhitelist"'),t(),n(1417,"span",70),e(1418,":"),t(),e(1419," "),n(1420,"span",70),e(1421,"["),t(),e(1422," "),n(1423,"span",49),e(1424,'"ClientWhitelist@email.com1"'),t(),e(1425," "),n(1426,"span",70),e(1427,"]"),t(),n(1428,"span",70),e(1429,","),t(),e(1430,`
    `),n(1431,"span",71),e(1432,'"QuotaExceededResponse"'),t(),n(1433,"span",70),e(1434,":"),t(),e(1435," "),n(1436,"span",70),e(1437,"{"),t(),e(1438,`
      `),n(1439,"span",71),e(1440,'"Content"'),t(),n(1441,"span",70),e(1442,":"),t(),e(1443," "),n(1444,"span",49),e(1445,'"Quota exceeded. Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP address is {3}"'),t(),n(1446,"span",70),e(1447,","),t(),e(1448,`
      `),n(1449,"span",71),e(1450,'"ContentType"'),t(),n(1451,"span",70),e(1452,":"),t(),e(1453," "),n(1454,"span",49),e(1455,'"application/json"'),t(),e(1456,`
    `),n(1457,"span",70),e(1458,"}"),t(),n(1459,"span",70),e(1460,","),t(),e(1461,`
    `),n(1462,"span",71),e(1463,'"GeneralRules"'),t(),n(1464,"span",70),e(1465,":"),t(),e(1466," "),n(1467,"span",70),e(1468,"["),t(),e(1469,`
    `),n(1470,"span",70),e(1471,"]"),t(),e(1472,`
  `),n(1473,"span",70),e(1474,"}"),t(),n(1475,"span",70),e(1476,","),t(),e(1477,`

  `),n(1478,"span",71),e(1479,'"IpRateLimitPolicies"'),t(),n(1480,"span",70),e(1481,":"),t(),e(1482," "),n(1483,"span",70),e(1484,"{"),t(),e(1485,`
    `),n(1486,"span",71),e(1487,'"IpRules"'),t(),n(1488,"span",70),e(1489,":"),t(),e(1490," "),n(1491,"span",70),e(1492,"["),t(),e(1493,`
    `),n(1494,"span",70),e(1495,"]"),t(),e(1496,`
  `),n(1497,"span",70),e(1498,"}"),t(),e(1499,`
`),n(1500,"span",70),e(1501,"}"),t()()(),n(1502,"h2",72)(1503,"span"),e(1504,"Proof of Concept"),t(),n(1505,"a",73),e(1506,"#"),t()(),n(1507,"ol")(1508,"li"),e(1509,"Clone "),n(1510,"a",31),e(1511,"our GitHub repository"),t()(),n(1512,"li"),e(1513,"Follow the instruction form the Readme.md"),t(),n(1514,"li"),e(1515,"Change following in "),n(1516,"a",43),e(1517,"appsettings.json"),t(),e(1518,': "SecurityTokenDescriptorExpiresInMinutes": 10, "SecurityTokenRefreshRate": 0.9 (both places)'),t(),n(1519,"li"),e(1520,"Sign-in as admin using menu: Home -> Sign-in"),t(),n(1521,"li"),e(1522,"Go to menu Admin->Articles editor"),t(),n(1523,"li"),e(1524,"Click on New Article button."),t(),n(1525,"li"),e(1526,"Fill in the form and wait for 2 minutes."),t(),n(1527,"li"),e(1528,"Click Submit button and Yes button"),t(),n(1529,"li"),e(1530,"A drawer must show up asking to confirm password. It means that your JWT token expired, but you can refresh it."),t()(),n(1531,"h2",74)(1532,"span"),e(1533,"Conclusion"),t(),n(1534,"a",75),e(1535,"#"),t()(),n(1536,"p"),e(1537,"In this article, we introduced JWT token Refresh period concept and used a middleware to implement it. In fact, we used modified source code of RateLimitMiddleware from AspNetCoreRateLimit library. It means that it still can be used to limit public endpoints (See "),n(1538,"a",43),e(1539,"GeneralRules"),t(),e(1540," example). We implemented a way for testing the middleware with MyTested library. Finally, we provided a compiled .NET application for proof of concept."),t(),n(1541,"h2",76)(1542,"span"),e(1543,"Credits"),t(),n(1544,"a",77),e(1545,"#"),t()(),n(1546,"ul")(1547,"li")(1548,"a",78),e(1549,"Ivaylo Kenov"),t()(),n(1550,"li")(1551,"a",79),e(1552,"Kalin Tsenkov"),t()(),n(1553,"li")(1554,"a",80),e(1555,"Steve Smith"),t()(),n(1556,"li")(1557,"a",81),e(1558,"Jason Taylor"),t()(),n(1559,"li")(1560,"a",82),e(1561,"Stefan Prodan"),t()(),n(1562,"li")(1563,"a",83),e(1564,"Mark Cilia Vincenti"),t()(),n(1565,"li")(1566,"a",84),e(1567,"Jimmy Bogard"),t()(),n(1568,"li")(1569,"a",85),e(1570,"Ben Morris"),t()()()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,Ti)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,U,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var Ai=()=>({standalone:!0});function Ni(a,s){if(a&1){let i=_();b(0),n(1,"a",64),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",65),d(3,"nz-icon",66),t()(),w()}}function Mi(a,s){if(a&1){let i=_();b(0),n(1,"a",64),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",65),e(3,"Alexei Cioina's blog"),t()(),w()}}var Pn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-testing-angular-apps"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;O(o=j())&&(r.affixEl=o.first)}},decls:184,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-c8cadc22f79af7b361f5c3da7dcbffca","nzTitle","Testing tools for Angular"],["nzHref","#h-704dc335d9064216f8927fafe48cd590","nzTitle","Testing Angular app together with .NET Core app"],["nzHref","#h-eacbc5c7d3fd4f0f6d7816bc2b9fdb7a","nzTitle","Using Signal type in Angular together with Reactive State library"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241110-testing-angular-apps.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://cioina.azurewebsites.net/","target","_blank","rel","noopener"],["href","https://github.com/huajian123/ng-antd-admin","target","_blank","rel","noopener"],["href","https://github.com/AndyT2503/angular-conduit-signals","target","_blank","rel","noopener"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components","target","_blank","rel","noopener"],["href","https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-angular/src","target","_blank","rel","noopener"],["href","https://github.com/ngrx/platform/tree/main/modules/component-store/src","target","_blank","rel","noopener"],["href","https://github.com/AndyT2503/angular-conduit-signals/blob/dev/src/app/shared/store/auth.store.ts","target","_blank","rel","noopener"],["href","https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net8.0","target","_blank","rel","noopener"],["href","https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net8.0/wwwroot","target","_blank","rel","noopener"],["id","h-c8cadc22f79af7b361f5c3da7dcbffca"],["onclick","window.location.hash = 'h-c8cadc22f79af7b361f5c3da7dcbffca'",1,"anchor"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/package.json","target","_blank","rel","noopener"],["href","https://github.com/angular/angular/blob/main/adev/BUILD.bazel","target","_blank","rel","noopener"],[1,"language-javascript"],[1,"hljs-keyword"],[1,"hljs-title","class_"],[1,"hljs-string"],["id","h-704dc335d9064216f8927fafe48cd590"],["onclick","window.location.hash = 'h-704dc335d9064216f8927fafe48cd590'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test","target","_blank","rel","noopener"],["href","https://cioina.azurewebsites.net/articles/dotnet-core-testing","target","_blank","rel","noopener"],["href","https://github.com/cioina/angular-test-example/tree/main/version-2","target","_blank","rel","noopener"],["href","https://github.com/cioina/angular-test-example/blob/main/version-2/home.store.spec.ts","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/realworld/blob/main/api/run-api-tests.sh","target","_blank","rel","noopener"],["href","https://github.com/cypress-io/cypress-example-conduit-app/blob/master/cypress/integration/login-spec.js","target","_blank","rel","noopener"],["id","h-eacbc5c7d3fd4f0f6d7816bc2b9fdb7a"],["onclick","window.location.hash = 'h-eacbc5c7d3fd4f0f6d7816bc2b9fdb7a'",1,"anchor"],["href","https://github.com/ngrx/platform","target","_blank","rel","noopener"],["href","https://github.com/cioina/angular-test-example/tree/main/version-1","target","_blank","rel","noopener"],["href","https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/libs/auth/data-access/src/auth.store.ts","target","_blank","rel","noopener"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/angular/angular/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/ant-design/ant-design-icons/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/ngrx/platform/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/huajian123","target","_blank","rel","noopener"],["href","https://github.com/AndyT2503","target","_blank","rel","noopener"],["href","https://github.com/stefanoslig","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,Ni,4,0,"ng-container",5)(6,Mi,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),d(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),d(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16),t()(),n(21,"span",17),e(22," Testing Angular Applications"),d(23,"span",18)(24,"span",19),n(25,"a",20),d(26,"nz-icon",21),t()(),n(27,"article",22)(28,"h2",23)(29,"span"),e(30,"Introduction"),t(),n(31,"a",24),e(32,"#"),t()(),n(33,"p")(34,"a",25),e(35,"Our Angular app"),t(),e(36," Is based on "),n(37,"a",26),e(38,"ng-antd-admin"),t(),e(39," combined with "),n(40,"a",27),e(41,"angular-conduit-signals"),t(),e(42,". In addition, we use following Angular libraries direct form sources: "),n(43,"a",28),e(44,"NG-ZORRO components src"),t(),e(45,", "),n(46,"a",29),e(47,"icons-angular src"),t(),e(48," and "),n(49,"a",30),e(50,"component-store src"),t(),e(51," with some minor changes. All our reactive states look similar to "),n(52,"a",31),e(53,"auth.store.ts"),t(),e(54,`
The app communicates with the server via REST API controllers built on top of .NET Core 8. The compiled bin code is on `),n(55,"a",32),e(56,"our GitHub repository"),t(),e(57," together with "),n(58,"a",33),e(59,"compiled Angular app"),t()(),n(60,"h2",34)(61,"span"),e(62,"Testing tools for Angular"),t(),n(63,"a",35),e(64,"#"),t()(),n(65,"p"),e(66,"We use the same tools/packages as in "),n(67,"a",36),e(68,"NG-ZORRO"),t(),e(69,", which are the same as in "),n(70,"a",37),e(71,"TEST_DEPS"),t(),e(72," plus "),n(73,"code"),e(74,"puppeteer"),t(),e(75,". In addition, Angular and NG-ZORRO have a lot of classes and functions ready to use right out of the box:"),t(),n(76,"pre",38)(77,"code")(78,"span",39),e(79,"import"),t(),e(80," { "),n(81,"span",40),e(82,"ComponentFixture"),t(),e(83,", "),n(84,"span",40),e(85,"TestBed"),t(),e(86,", fakeAsync, tick, waitForAsync, inject "),n(87,"span",39),e(88,"as"),t(),e(89," testInject } "),n(90,"span",39),e(91,"from"),t(),e(92," "),n(93,"span",41),e(94,"'@angular/core/testing'"),t(),e(95,`;
`),n(96,"span",39),e(97,"import"),t(),e(98," { dispatchMouseEvent, dispatchFakeEvent, typeInElement } "),n(99,"span",39),e(100,"from"),t(),e(101," "),n(102,"span",41),e(103,"'ng-zorro-antd/core/testing'"),t(),e(104,`;
`),n(105,"span",39),e(106,"import"),t(),e(107," { provideNzIconsTesting } "),n(108,"span",39),e(109,"from"),t(),e(110," "),n(111,"span",41),e(112,"'ng-zorro-antd/icon/testing'"),t(),e(113,";"),t()(),n(114,"h2",42)(115,"span"),e(116,"Testing Angular app together with .NET Core app"),t(),n(117,"a",43),e(118,"#"),t()(),n(119,"p"),e(120,"Our actual(up to date) "),n(121,"a",44),e(122,"test project"),t(),e(123," for our .NET Core app uses in memory database which is very convenient for testing (read more about it "),n(124,"a",45),e(125,"here"),t(),e(126," ) Next, would be great to test on a real database. So, all our Angular test from "),n(127,"a",46),e(128,"our GitHub repository"),t(),e(129,` will connect with our .NET Core app which is connected to real MS SQL database. Therefore, it represents a type of integration test.
All the files ending in `),n(130,"a",47),e(131,"*.store.spec.ts"),t(),e(132," can be considered as real API testing which is an alternative to "),n(133,"a",48),e(134,"Newman"),t(),e(135," or "),n(136,"a",49),e(137,"cypress"),t()(),n(138,"h2",50)(139,"span"),e(140,"Using Signal type in Angular together with Reactive State library"),t(),n(141,"a",51),e(142,"#"),t()(),n(143,"p"),e(144,"Before Signal type became native in Agular, we used "),n(145,"a",52),e(146,"Reactive State library"),t(),e(147," for "),n(148,"a",53),e(149,"our integration tests"),t(),e(150,". Now, the library has implemented two ways of using Signals: "),n(151,"a",54),e(152,"@ngrx/signals"),t(),e(153," and "),n(154,"a",31),e(155,"@ngrx/component-store"),t(),e(156,". We use the second one direct from sources."),t(),n(157,"h2",55)(158,"span"),e(159,"Credits"),t(),n(160,"a",56),e(161,"#"),t()(),n(162,"ul")(163,"li")(164,"a",57),e(165,"Angular contributors"),t()(),n(166,"li")(167,"a",58),e(168,"NG-ZORRO contributors"),t()(),n(169,"li")(170,"a",59),e(171,"Ant Design contributors"),t()(),n(172,"li")(173,"a",60),e(174,"Reactive State for Angular contributors"),t()(),n(175,"li")(176,"a",61),e(177,"hua jian"),t()(),n(178,"li")(179,"a",62),e(180,"Andy Tu Hoang"),t()(),n(181,"li")(182,"a",63),e(183,"Stefanos Lignos"),t()()()()()()),l&2&&(m(),c("nzBordered",!0),m(6),c("nzOffsetTop",100),m(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,Ai)),m(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,U,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var ot=(()=>{class a extends fn{#e=S(X);#t=S(Zt);#a=S(Xt);#i=S(te);articleListConfig=this.#e.selectors.articleListConfig;ngrxOnStoreInit(){this.setState({articleList:[],tags:[],articleCount:0})}getTags=this.effect(Xe(i=>(i.set(!0),this.#a.getTags().pipe(it(l=>{this.patchState({tags:l.tags})},l=>{nt()?console.error("Get Tags Failed",l):console.warn(`Get Tags Failed: ${l.message}`)},()=>{i.set(!1)})))));queryArticle=this.effect(je(i=>{this.#e.patchState({articleListConfig:ge(Ee({},this.articleListConfig()),{currentPage:i.params.offset?this.articleListConfig().currentPage:1,filters:{limit:i.params.limit,offset:i.params.offset,tags:i.params.tags,createdAtAsc:i.params.createdAtAsc}})}),this.#n(i.loading)}));onOffsetChange=this.effect(je(i=>{this.#e.patchState({articleListConfig:ge(Ee({},this.articleListConfig()),{currentPage:i.offset,filters:ge(Ee({},this.articleListConfig().filters),{offset:Number(this.articleListConfig().filters.limit)*(i.offset-1)})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));onLimitChange=this.effect(je(i=>{this.#e.patchState({articleListConfig:ge(Ee({},this.articleListConfig()),{currentPage:1,filters:ge(Ee({},this.articleListConfig().filters),{limit:i.limit,offset:0})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));#n=this.effect(Xe(i=>(i.set(!0),(()=>{let l=this.articleListConfig()?.filters;return this.#t.getPublicArticles({limit:l.limit,offset:l.offset,tags:l.tags,createdAtAsc:l.createdAtAsc})})().pipe(it(l=>{this.patchState({articleList:l.articles,articleCount:l.total})},l=>{nt()?console.error("getPublicArticles Failed",l):console.warn(`getPublicArticles Failed: ${l.message}`),this.#e.openMessageDrawer(Ae(l.message))},()=>{i.set(!1)})))));static \u0275fac=(()=>{let i;return function(r){return(i||(i=wt(a)))(r||a)}})();static \u0275prov=ut({token:a,factory:a.\u0275fac})}return a})();var Ri=(a,s,i)=>[a,s,i];function Ii(a,s){a&1&&(n(0,"div",9),d(1,"nz-spin",11),t())}function Li(a,s){if(a&1&&(d(0,"nz-icon",14),e(1)),a&2){let i=p().$implicit;m(),ze(" ",i.title.length," ")}}function Bi(a,s){if(a&1&&(d(0,"nz-icon",15),e(1)),a&2){let i=p().$implicit;m(),ze(" ",i.slug.length," ")}}function Di(a,s){if(a&1&&(d(0,"nz-icon",16),e(1)),a&2){let i=p().$implicit;m(),ze(" ",i.id," ")}}function Fi(a,s){if(a&1){let i=_();n(0,"a",17),x("click",function(){u(i);let r=p().$implicit,o=p();return E(o.clickArticleLink(r))}),e(1),t()}if(a&2){let i=p().$implicit;m(),ze(" ",i.title," ")}}function Pi(a,s){if(a&1&&e(0),a&2){let i=p(2).$implicit;ze(" ",i.description," ")}}function Hi(a,s){if(a&1){let i=_();g(0,Pi,1,1),n(1,"a",18),x("click",function(){u(i);let r=p().$implicit,o=p();return E(o.clickArticleLink(r))}),e(2,"Read more"),d(3,"nz-icon",19),t()}if(a&2){let i=p().$implicit,l=p();ue(i.published?0:-1),m(),c("nzLoading",l.routerLinkLoadingId()===i.id)("disabled",l.routerLinkLoadingId()!==i.id&&l.routerLinkLoadingId()!==0)}}function Vi(a,s){if(a&1&&(n(0,"div",20)(1,"div",21)(2,"h5",22),e(3),Ft(4,"date"),t()()(),n(5,"div",23)(6,"div",24),d(7,"img",25),t()()),a&2){let i=p().$implicit,l=p();m(),et("id",i.slug),m(2),_e(Pt(4,7,i.createdAt,"MMMM d, yyyy")),m(4),At("nzSrc","https://picsum.photos/id/",i.id,"/300/200.jpg"),et("alt",i.title),c("nzFallback",l.fallback)("nzPlaceholder",l.fallback)}}function Ui(a,s){if(a&1&&(n(0,"nz-list-item",12),g(1,Li,2,1,"ng-template",null,3,A)(3,Bi,2,1,"ng-template",null,4,A)(5,Di,2,1,"ng-template",null,5,A),n(7,"nz-list-item-meta",13),g(8,Fi,2,1,"ng-template",null,6,A)(10,Hi,4,3,"ng-template",null,7,A),t(),g(12,Vi,8,10,"ng-template",null,8,A),t()),a&2){let i=k(2),l=k(4),r=k(6),o=k(9),h=k(11),C=k(13);c("nzActions",Dt(4,Ri,i,l,r))("nzExtra",C),m(7),c("nzTitle",o)("nzDescription",h)}}function Oi(a,s){if(a&1&&(n(0,"div",20)(1,"div",24)(2,"h5",26),e(3),t()()()),a&2){let i=s,l=p(2);m(3),It(" ",l.articleListConfig().filters.limit*(l.articleListConfig().currentPage-1)+1," - ",l.articleListConfig().filters.limit*l.articleListConfig().currentPage>i?i:l.articleListConfig().filters.limit*l.articleListConfig().currentPage," of ",i," records ")}}function ji(a,s){if(a&1&&g(0,Oi,4,3,"div",20),a&2){let i,l=p();ue((i=l.articlesCount())?0:-1,i)}}function Wi(a,s){if(a&1){let i=_();n(0,"nz-pagination",27),x("nzPageSizeChange",function(r){u(i);let o=p();return E(o.setPageSize(r))})("nzPageIndexChange",function(r){u(i);let o=p();return E(o.setPage(r))}),t()}if(a&2){let i=p();c("nzShowSizeChanger",!0)("nzPageSize",i.articleListConfig().filters.limit)("nzPageIndex",i.articleListConfig().currentPage)("nzTotal",i.articlesCount())}}var Hn=(()=>{class a{articleList;articlesCount;isLoading;articleListConfig;oldLimit;nzSetPage=new Me;nzSetPageSize=new Me;router=S(ne);changeDetectorRef=S(K);routerLinkLoadingId=Ae(0);fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==";clickArticleLink(i){this.routerLinkLoadingId.set(i.id),this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.router.navigate(["articles",i.slug])})}setPage(i){this.oldLimit()===this.articleListConfig().filters.limit?this.nzSetPage.emit(i):this.oldLimit.set(this.articleListConfig().filters.limit)}setPageSize(i){this.articleListConfig().currentPage>Math.ceil(this.articlesCount()/i)?this.oldLimit.set(this.articleListConfig().filters.limit):this.oldLimit.set(i),this.nzSetPageSize.emit(i)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["app-articles"]],inputs:{articleList:"articleList",articlesCount:"articlesCount",isLoading:"isLoading",articleListConfig:"articleListConfig",oldLimit:"oldLimit"},outputs:{nzSetPage:"nzSetPage",nzSetPageSize:"nzSetPageSize"},decls:8,vars:7,consts:[["item",""],["footer",""],["pagination",""],["starAction",""],["likeAction",""],["msgAction",""],["nzTitle",""],["nzDescription",""],["extra",""],[1,"app-article-preview"],[3,"hidden","nzDataSource","nzItemLayout","nzRenderItem","nzPagination","nzFooter"],["nzTip","Loading posts..."],[3,"nzActions","nzExtra"],[3,"nzTitle","nzDescription"],["nzType","star-o",2,"margin-right","8px"],["nzType","like-o",2,"margin-right","8px"],["nzType","message",2,"margin-right","8px"],[3,"click"],["nz-button","","nzType","link",3,"click","nzLoading","disabled"],["nzType","arrow-right"],["nz-row","","nzJustify","end"],["nz-col","",3,"id"],["nz-typography","","nzType","secondary"],["nz-row",""],["nz-col",""],["nz-image","","width","300px","height","200px",3,"nzSrc","nzFallback","nzPlaceholder","alt"],["nz-typography",""],[3,"nzPageSizeChange","nzPageIndexChange","nzShowSizeChanger","nzPageSize","nzPageIndex","nzTotal"]],template:function(l,r){if(l&1&&(g(0,Ii,2,0,"div",9),n(1,"nz-list",10),g(2,Ui,14,8,"ng-template",null,0,A)(4,ji,1,1,"ng-template",null,1,A)(6,Wi,1,4,"ng-template",null,2,A),t()),l&2){let o=k(3),h=k(5),C=k(7);ue(r.isLoading()?0:-1),m(),c("hidden",r.isLoading())("nzDataSource",r.articleList())("nzItemLayout","vertical")("nzRenderItem",o)("nzPagination",C)("nzFooter",h)}},dependencies:[Ot,dn,mn,U,V,H,Cn,zn,yn,_n,R,$t,D,pn,kn,vn,B,I,L,M,N,De,P,F],encapsulation:2,changeDetection:0})}return a})();var Gi=(a,s)=>[a,s],Vn=()=>({standalone:!0});function qi(a,s){if(a&1&&(b(0),n(1,"h5",16),d(2,"nz-icon",17),t(),w()),a&2){let i=p(2);m(2),c("nzTooltipTitle",i.applyTooltipTitle)}}function Ki(a,s){a&1&&g(0,qi,3,1,"ng-container",11)}function Yi(a,s){if(a&1){let i=_();b(0),n(1,"button",18),x("nzOnConfirm",function(){u(i);let r=p();return E(r.confirmApply())}),d(2,"nz-icon",19),e(3," Apply "),t(),w()}if(a&2){let i=p(),l=k(9);m(),c("disabled",i.disableApply())("nzIcon",l)}}function Zi(a,s){if(a&1){let i=_();b(0),n(1,"button",20),x("nzOnConfirm",function(){u(i);let r=p();return E(r.confirmClose())}),d(2,"nz-icon",21),e(3," Close "),t(),w()}if(a&2){p();let i=k(7);m(),c("nzIcon",i)("nzOkDanger",!0)}}function Xi(a,s){a&1&&(b(0),n(1,"h4",16),d(2,"nz-icon",22),t(),w())}function $i(a,s){a&1&&(b(0),n(1,"h5",23),e(2,"Do you want to close without changes?"),t(),w())}function ea(a,s){a&1&&(n(0,"nz-space",10),g(1,Xi,3,0,"ng-container",11)(2,$i,3,0,"ng-container",11),t())}function ta(a,s){a&1&&(b(0),n(1,"h4",24),d(2,"nz-icon",22),t(),w())}function na(a,s){a&1&&(b(0),n(1,"h5",23),e(2,"Do you want to apply changes?"),t(),w())}function ia(a,s){a&1&&(n(0,"nz-space",10),g(1,ta,3,0,"ng-container",11)(2,na,3,0,"ng-container",11),t())}function aa(a,s){if(a&1){let i=_();b(0),n(1,"nz-switch",25),Q("ngModelChange",function(r){u(i);let o=p();return J(o.isAscending,r)||(o.isAscending=r),E(r)}),x("click",function(){u(i);let r=p();return E(r.ascendingEnable())}),t(),w()}if(a&2){let i=p();m(),W("ngModel",i.isAscending),c("ngModelOptions",ee(2,Vn))}}function ra(a,s){if(a&1){let i=_();b(0),n(1,"nz-switch",26),Q("ngModelChange",function(r){u(i);let o=p();return J(o.showSearch,r)||(o.showSearch=r),E(r)}),x("click",function(){u(i);let r=p();return E(r.disableEnable())}),t(),w()}if(a&2){let i=p();m(),W("ngModel",i.showSearch),c("ngModelOptions",ee(3,Vn))("disabled",i.leftSearch||i.rightSearch)}}function la(a,s){a&1&&(b(0),n(1,"h5",16),d(2,"nz-icon",27),t(),w())}function oa(a,s){a&1&&g(0,la,3,0,"ng-container",11)}function sa(a,s){a&1&&(b(0),n(1,"h4",33),e(2,"Remaining Tags"),t(),w())}function ma(a,s){a&1&&(b(0),n(1,"h5",33),d(2,"nz-icon",34),t(),w())}function da(a,s){if(a&1&&d(0,"nz-option",30),a&2){let i=s.$implicit;c("nzLabel",i.label)("nzValue",i.value)}}function pa(a,s){if(a&1&&(d(0,"nz-icon",35),e(1)),a&2){let i=s.$implicit;c("nzType","sort-"+i.nzValue),m(),ze(" ",i.nzLabel," ")}}function ca(a,s){if(a&1){let i=_();n(0,"tr",36),x("click",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),n(1,"td",37),x("nzCheckedChange",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),t(),n(2,"td"),e(3),t()()}if(a&2){let i=s.$implicit,l=p().disabled;m(),c("nzChecked",i.checked)("nzDisabled",l||i.disabled),m(2),_e(i.title)}}function xa(a,s){if(a&1){let i=_();n(0,"div",28)(1,"div",9)(2,"nz-space",10),g(3,sa,3,0,"ng-container",11)(4,ma,3,0,"ng-container",11),t()()(),n(5,"div",28)(6,"div",9)(7,"nz-select",29),Q("ngModelChange",function(r){u(i);let o=p();return J(o.orderModelLeft,r)||(o.orderModelLeft=r),E(r)}),x("ngModelChange",function(r){u(i);let o=p();return E(o.handleOrderLeft(r))}),Ve(8,da,1,2,"nz-option",30,He),t(),g(10,pa,2,2,"ng-template",null,4,A),t()(),n(12,"nz-table",31,5)(14,"thead")(15,"tr")(16,"th",32),x("nzCheckedChange",function(r){let o=u(i).onItemSelectAll;return E(o(r))}),t(),n(17,"th"),e(18,"All"),t()()(),n(19,"tbody"),Ve(20,ca,4,3,"tr",null,He),t()()}if(a&2){let i=s.$implicit,l=s.stat,r=s.disabled,o=k(11),h=k(13),C=p();m(7),c("nzBackdrop",!0)("nzCustomTemplate",o),W("ngModel",C.orderModelLeft),m(),Ue(C.listOfOption),m(4),c("nzData",C.convertItemsRight(i)),m(4),c("nzDisabled",r)("nzChecked",l.checkAll)("nzIndeterminate",l.checkHalf),m(4),Ue(h.data)}}function ha(a,s){a&1&&(b(0),n(1,"h4",24),e(2,"Selected Tags"),t(),w())}function Sa(a,s){a&1&&(b(0),n(1,"h5",24),d(2,"nz-icon",38),t(),w())}function ua(a,s){if(a&1&&d(0,"nz-option",30),a&2){let i=s.$implicit;c("nzLabel",i.label)("nzValue",i.value)}}function Ea(a,s){if(a&1&&(d(0,"nz-icon",35),e(1)),a&2){let i=s.$implicit;c("nzType","sort-"+i.nzValue),m(),ze(" ",i.nzLabel," ")}}function ga(a,s){if(a&1){let i=_();n(0,"tr",36),x("click",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),n(1,"td",37),x("nzCheckedChange",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),t(),n(2,"td"),e(3),t()()}if(a&2){let i=s.$implicit,l=p().disabled;m(),c("nzChecked",i.checked)("nzDisabled",l||i.disabled),m(2),_e(i.title)}}function fa(a,s){if(a&1){let i=_();n(0,"div",28)(1,"div",9)(2,"nz-space",10),g(3,ha,3,0,"ng-container",11)(4,Sa,3,0,"ng-container",11),t()()(),n(5,"div",28)(6,"div",9)(7,"nz-select",29),Q("ngModelChange",function(r){u(i);let o=p();return J(o.orderModelRight,r)||(o.orderModelRight=r),E(r)}),x("ngModelChange",function(r){u(i);let o=p();return E(o.handleOrderRight(r))}),Ve(8,ua,1,2,"nz-option",30,He),t(),g(10,Ea,2,2,"ng-template",null,6,A),t()(),n(12,"nz-table",31,7)(14,"thead")(15,"tr")(16,"th",32),x("nzCheckedChange",function(r){let o=u(i).onItemSelectAll;return E(o(r))}),t(),n(17,"th"),e(18,"All"),t()()(),n(19,"tbody"),Ve(20,ga,4,3,"tr",null,He),t()()}if(a&2){let i=s.$implicit,l=s.stat,r=s.disabled,o=k(11),h=k(13),C=p();m(7),c("nzBackdrop",!0)("nzCustomTemplate",o),W("ngModel",C.orderModelRight),m(),Ue(C.listOfOption),m(4),c("nzData",C.convertItemsLeft(i)),m(4),c("nzDisabled",r)("nzChecked",l.checkAll)("nzIndeterminate",l.checkHalf),m(4),Ue(h.data)}}var Un=(()=>{class a{params;nzMessageService=S(gn);drawerRef=S(Jt);selectedCount=0;list=[];showSearch=!1;leftSearch=!1;rightSearch=!1;selectedTags=[];applyTooltipTitle="";orderModelLeft=null;orderModelRight=null;listOfOption=[{label:"Ascending",value:"ascending"},{label:"Descending",value:"descending"}];sortOrder=null;isAscending=!1;createdAtAsc=null;initialCreatedAtAsc=null;isTagListChange(){let i=this.selectedTags||[];if(this.selectedTags=[],this.list.filter(r=>r.direction==="right").forEach(r=>this.selectedTags.push(r.id)),this.createdAtAsc!==this.initialCreatedAtAsc||i?.length!==this.selectedTags.length)return!0;let l=!0;return i.forEach(r=>l=l&&this.selectedTags.includes(r)),!l}ngOnInit(){this.params.createdAtAsc===void 0?(this.isAscending=!1,this.createdAtAsc=null):(this.isAscending=this.params.createdAtAsc,this.createdAtAsc=this.isAscending),this.initialCreatedAtAsc=this.createdAtAsc,this.params.tags?this.selectedTags=this.params.tags:(this.selectedTags=[],this.params.tagList.forEach(i=>this.selectedTags.push(i.id))),this.list=[],this.params.tagList.forEach(i=>this.list.push({title:i.title,id:i.id,direction:this.selectedTags.includes(i.id)?"right":"left"})),this.selectedCount=this.selectedTags.length}ascendingEnable(){this.isAscending?this.createdAtAsc=null:this.createdAtAsc=!0}disableEnable(){this.showSearch||(this.showSearch=this.leftSearch||this.rightSearch)}handleSearchChange(i){i.direction==="left"?this.leftSearch=i.value!=="":this.rightSearch=i.value!==""}handleChange(i){i.from==="right"?(this.orderModelLeft=null,this.sortOrder={direction:"left",sortOrder:null},this.selectedCount-=i.list.length):(this.orderModelRight=null,this.sortOrder={direction:"right",sortOrder:null},this.selectedCount+=i.list.length)}handleFilterOption(i,l){return l.title.toLowerCase().includes(i.toLowerCase())}confirmClose(){this.isTagListChange()&&this.nzMessageService.warning("Changes were not saved!"),this.drawerRef.close(!1)}disableApply(){return this.selectedCount<1?(this.applyTooltipTitle="It should be at least one selected tag.",!0):this.selectedCount>100?(this.applyTooltipTitle="It should not be more than 100 selected tags.",!0):!1}confirmApply(){this.isTagListChange()?(this.nzMessageService.info("Applying selected tags."),this.selectedTags.length===this.list.length&&(this.selectedTags=null),this.drawerRef.close({tags:this.selectedTags,createdAtAsc:this.createdAtAsc})):this.drawerRef.close(null)}convertItemsRight(i){return i.filter(l=>!l.hide)}convertItemsLeft(i){return i.filter(l=>!l.hide)}handleOrderRight(i){this.sortOrder={direction:"right",sortOrder:i}}handleOrderLeft(i){this.sortOrder={direction:"left",sortOrder:i}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["app-article-listing-tags"]],inputs:{params:"params"},decls:24,vars:11,consts:[["closeTpl",""],["applyTpl",""],["renderList",""],["renderSelectedList",""],["orderTemplateLeft",""],["t1",""],["orderTemplateRight",""],["t2",""],["nz-row","","nzJustify","end"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],["nz-row","","nzJustify","end",2,"margin-top","20px"],["nz-row","","nzJustify","start",2,"margin-bottom","20px"],["nzSize","small","nzAlign","center"],[3,"nzSearchChange","nzChange","nzDataSource","nzShowSearch","nzShowSelectAll","nzFilterOption","nzRenderList","nzSortOrder"],["nz-typography","","nzType","danger"],["nzType","info-circle","nz-tooltip","",3,"nzTooltipTitle"],["nz-button","","nzType","primary","nzShape","round","nz-popconfirm","","nzPopconfirmTitle"," ","nzPopconfirmShowArrow","false","nzOkText","Yes","nzCancelText","No",3,"nzOnConfirm","disabled","nzIcon"],["nzType","check"],["nz-button","","nzDanger","true","nzShape","round","nz-popconfirm","","nzPopconfirmTitle"," ","nzPopconfirmShowArrow","false","nzOkText","Yes","nzCancelText","No",3,"nzOnConfirm","nzIcon","nzOkDanger"],["nzType","close"],["nzType","question-circle-o"],["nz-typography",""],["nz-typography","","nzType","success"],["nzCheckedChildren","Oldest articles first","nzUnCheckedChildren","Newest articles first",3,"ngModelChange","click","ngModel","ngModelOptions"],["nzCheckedChildren","Hide Search","nzUnCheckedChildren","Show Search",3,"ngModelChange","click","ngModel","ngModelOptions","disabled"],["nzType","info-circle","nz-tooltip","","nzTooltipTitle","Clear out all search boxes in order to hide them."],["nz-row","","nzJustify","center"],["nzAllowClear","","nzPlaceHolder","Sort Order...",3,"ngModelChange","nzBackdrop","nzCustomTemplate","ngModel"],[3,"nzLabel","nzValue"],["nzSize","small",3,"nzData"],["nzShowCheckbox","",3,"nzCheckedChange","nzDisabled","nzChecked","nzIndeterminate"],["nz-typography","","nzType","warning"],["nzType","info-circle","nz-tooltip","","nzTooltipTitle","Here are all remaining tags."],[3,"nzType"],[3,"click"],["nzShowCheckbox","",3,"nzCheckedChange","nzChecked","nzDisabled"],["nzType","info-circle","nz-tooltip","","nzTooltipTitle","Here are all selected tags."]],template:function(l,r){if(l&1){let o=_();n(0,"div",8)(1,"div",9)(2,"nz-space",10),g(3,Ki,1,0,"ng-container")(4,Yi,4,2,"ng-container",11)(5,Zi,4,2,"ng-container",11),t()(),g(6,ea,3,0,"ng-template",null,0,A)(8,ia,3,0,"ng-template",null,1,A),t(),n(10,"div",12)(11,"div",9)(12,"nz-space",10),g(13,aa,2,3,"ng-container",11),t()()(),n(14,"div",13)(15,"div",9)(16,"nz-space",14),g(17,ra,2,4,"ng-container",11)(18,oa,1,0,"ng-container"),t()()(),n(19,"nz-transfer",15),x("nzSearchChange",function(C){return u(o),E(r.handleSearchChange(C))})("nzChange",function(C){return u(o),E(r.handleChange(C))}),g(20,xa,22,7,"ng-template",null,2,A)(22,fa,22,7,"ng-template",null,3,A),t()}if(l&2){let o=k(21),h=k(23);m(3),ue(r.disableApply()?3:-1),m(15),ue(r.leftSearch||r.rightSearch?18:-1),m(),c("nzDataSource",r.list)("nzShowSearch",r.showSearch)("nzShowSelectAll",!1)("nzFilterOption",r.handleFilterOption)("nzRenderList",Bt(8,Gi,o,h))("nzSortOrder",r.sortOrder)}},dependencies:[re,ie,ae,B,I,L,Ye,Yt,U,V,H,M,N,De,Ze,R,Z,Y,D,Sn,cn,en,nn,tn,hn,rn,xn,an,Nn,An,En,un,de,me,sn,ln,on,P,F],encapsulation:2,changeDetection:0})}return a})();var ba=["drawerTitleTemplate"];function wa(a,s){a&1&&(b(0),n(1,"h4",13),d(2,"nz-icon",14),t(),w())}function _a(a,s){a&1&&(b(0),n(1,"h5",15),e(2,"Do you want to reload all articles?"),t(),w())}function za(a,s){a&1&&(n(0,"nz-space",7),g(1,wa,3,0,"ng-container",8)(2,_a,3,0,"ng-container",8),t())}function ya(a,s){if(a&1){let i=_();b(0),n(1,"button",11),x("nzOnConfirm",function(){u(i);let r=p();return E(r.selectAll())}),d(2,"nz-icon",12),t(),g(3,za,3,0,"ng-template",null,1,A),w()}if(a&2){let i=k(4),l=p();m(),c("nzLoading",l.isArticlesLoading())("nzIcon",i)}}function Ca(a,s){if(a&1){let i=_();b(0),n(1,"button",16),x("click",function(){u(i);let r=p();return E(r.openTagsFilter())}),d(2,"nz-icon",17),e(3," Tags "),t(),n(4,"nz-badge",18),d(5,"a",19),t(),w()}if(a&2){let i=p();m(),c("nzLoading",i.isTagsLoading()),m(3),c("nzCount",i.tagCount())}}function Ta(a,s){if(a&1&&(n(0,"div",5)(1,"div",6)(2,"h3",20),e(3),t()()()),a&2){let i=p();m(3),_e(i.title)}}var jn=(()=>{class a{drawerTitleTemplate=Ct("drawerTitleTemplate");#e=S(ot);#t=S(X);articleListConfig=this.#t.selectors.articleListConfig;windowWidth=this.#t.selectors.width;articleCount=this.#e.selectors.articleCount;articleList=this.#e.selectors.articleList;tagList=this.#e.selectors.tags;drawerService=S(Kt);isTagsLoading=Ae(!1);isArticlesLoading=Ae(!1);tagCount=Vt(()=>this.articleListConfig()?.filters.tags?this.articleListConfig().filters.tags.length:0);oldLimit=Ae(this.articleListConfig().filters.limit);title="";noCancel(){return new Promise(l=>{try{l(!1)}finally{}})}ngOnInit(){this.#t.setAdminArticles(!1);let i=this.articleListConfig()?.filters;(i?.tags===void 0||i?.tags===null)&&(i?.createdAtAsc===void 0||i?.createdAtAsc===null)?this.selectAll():(this.#e.getTags(this.isTagsLoading),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:i.limit,offset:0,tags:i.tags,createdAtAsc:i.createdAtAsc}}))}selectAll(){this.#e.getTags(this.isTagsLoading),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:10,offset:0}}),this.oldLimit.set(10)}onPageOffsetChange(i){this.#e.onOffsetChange({loading:this.isArticlesLoading,offset:i})}onPageLimitChange(i){this.#e.onLimitChange({loading:this.isArticlesLoading,limit:i})}openTagsFilter(){if(this.isTagsLoading())return;this.isTagsLoading.set(!0),this.title="Article Tags";let i=this.articleListConfig()?.filters;this.drawerService.create({nzTitle:this.drawerTitleTemplate(),nzContent:Un,nzWidth:this.windowWidth()>600?600:this.windowWidth(),nzClosable:!1,nzOnCancel:this.noCancel,nzContentParams:{params:{tagList:this.tagList(),tags:i.tags,createdAtAsc:i.createdAtAsc}}}).afterClose.subscribe(r=>{if(r){let o=this.articleListConfig()?.filters;this.#e.queryArticle({loading:this.isArticlesLoading,params:ge(Ee({},r),{limit:o.limit,offset:0})})}this.isTagsLoading.set(!1)})}pageHeaderInfo={title:"Articles",desc:"This page is a symbiose between dynamic (.NET Core, SQL Server database) and static (JavaScript, CSS, icon, etc.) resources. All articles are served as static content from JavaScript files compiled by Angular framework. In addition, JavaScript files are served via lazy loading. Articles metadata is stored in the database and served dynamically by .NET Core API controllers."};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["app-home-listing"]],viewQuery:function(l,r){l&1&&Mt(r.drawerTitleTemplate,ba,5),l&2&&Rt()},features:[Lt([Wt(ot)])],decls:14,vars:7,consts:[["drawerTitleTemplate",""],["applyTpl",""],[3,"pageHeaderInfo"],[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","center"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],["nz-row","","nzJustify","end"],[3,"nzSetPage","nzSetPageSize","articleList","articlesCount","isLoading","articleListConfig","oldLimit"],["nz-button","","nzType","primary","nzShape","circle","nz-popconfirm","","nzPopconfirmTitle"," ","nzPopconfirmShowArrow","false","nzOkText","Yes","nzCancelText","No",3,"nzOnConfirm","nzLoading","nzIcon"],["nzType","sync"],["nz-typography","","nzType","success"],["nzType","question-circle-o"],["nz-typography",""],["nz-button","","nzType","primary","nzShape","round",3,"click","nzLoading"],["nzType","tag"],[3,"nzCount"],[1,"head-example"],["nz-typography","","nzType","warning"]],template:function(l,r){if(l&1){let o=_();d(0,"app-page-header",2),n(1,"div",3)(2,"nz-card",4)(3,"div",5)(4,"div",6)(5,"nz-space",7),g(6,ya,5,2,"ng-container",8),t()()(),n(7,"div",9)(8,"div",6)(9,"nz-space",7),g(10,Ca,6,2,"ng-container",8),t()()(),n(11,"app-articles",10),x("nzSetPage",function(C){return u(o),E(r.onPageOffsetChange(C))})("nzSetPageSize",function(C){return u(o),E(r.onPageLimitChange(C))}),t(),g(12,Ta,4,1,"ng-template",null,0,A),t()()}l&2&&(c("pageHeaderInfo",r.pageHeaderInfo),m(2),c("nzBordered",!0),m(9),c("articleList",r.articleList)("articlesCount",r.articleCount)("isLoading",r.isArticlesLoading)("articleListConfig",r.articleListConfig)("oldLimit",r.oldLimit))},dependencies:[Tn,Hn,wn,bn,B,I,L,Ye,oe,le,M,N,De,Ze,R,Z,Y,D,P,F,U,V,H],encapsulation:2,changeDetection:0})}return a})();var vs=[{path:"",pathMatch:"full",title:"Articles",data:{key:"articles"},component:jn},{path:"what-version-of-this-blog",title:"What Version?",data:{key:"what-version-of-this-blog"},component:Rn},{path:"svg-icons",title:"SVG Icons",data:{key:"svg-icons"},component:In},{path:"dotnet-core-testing",title:"ASP.NET Testing",data:{key:"dotnet-core-testing"},component:Ln},{path:"about-this-blog",title:"My Blog",data:{key:"about-this-blog"},component:Bn},{path:"test-readme",title:"MyTested Example",data:{key:"test-readme"},component:Dn},{path:"ratelimit-middleware",title:"JWT Token Refresh",data:{key:"ratelimit-middleware"},component:Fn},{path:"testing-angular-apps",title:"Testing Angular Apps",data:{key:"testing-angular-apps"},component:Pn}];export{vs as BLOG_ROUTES};
