import{a as y,b as se}from"./chunk-RG5OJTJW.js";import{a as vn,b as kn,c as An,d as Nn}from"./chunk-B3EYXXTJ.js";import{a as bn,b as wn,c as _n,d as zn,e as yn,f as Cn}from"./chunk-V3L45LCM.js";import{a as me,b as de}from"./chunk-NYRDAQMN.js";import{A as D,B as cn,C as xn,D as hn,E as Sn,G as gn,I as fn,J as X,d as jt,e as it,h as Zt,j as Xt,m as en,n as tn,o as nn,p as an,t as rn,u as ln,v as on,w as sn,x as mn,y as dn,z as pn}from"./chunk-4PO7O4NZ.js";import"./chunk-2FDDJB45.js";import"./chunk-I5IUNEL4.js";import"./chunk-MDGI55SD.js";import{a as Tn}from"./chunk-JCTCT3GX.js";import{b as Wt,d as Kt,e as Yt,k as Ze,l as De}from"./chunk-QFYNYEV4.js";import{A as re,K as un,M as En,S as F,T as P,U as H,V,W as O,o as ie,t as ae}from"./chunk-WJOQJ6KR.js";import{$a as Jt,Cb as N,E as ne,Eb as M,Ib as Y,Jb as Z,K as ce,Kb as R,L as Ke,La as at,Rb as I,Sb as L,Tb as Ye,Vb as B,Yb as $t,a as Ot,ab as Qt,ac as le,bb as Ue,bc as oe,f as qe,h as Ut,j as te,kb as Gt,qb as qt}from"./chunk-MKBE3CDJ.js";import{Ac as j,Bc as Mt,Ca as gt,Cb as Ct,Cc as Rt,Da as ft,Dc as k,Ea as bt,Ec as e,Fa as u,Fc as _e,Ga as E,Gb as v,Gc as ze,Hb as Tt,Ia as wt,Ic as It,Jc as W,Kc as J,Lc as Q,Mb as g,Oa as Me,Pc as Lt,Qc as ee,Rc as tt,Sc as Bt,Ta as _t,Tc as Dt,Ub as vt,V as Xe,Va as Ae,Vb as c,Wc as Ft,Yb as kt,Yc as Pt,Zb as $e,_c as A,a as Ee,ac as ue,b as ge,cc as He,dc as Ve,dd as nt,ec as Oe,ed as K,fa as ht,fc as n,gc as t,ha as je,hc as m,ia as St,ic as b,id as Ge,j as xt,jc as w,jd as Ht,lc as _,ld as Vt,ma as ut,na as Et,q as Pe,qc as x,r as we,rb as zt,sa as S,sc as p,tc as Je,ub as d,uc as Qe,vc as et,wb as yt,wc as At,xc as Nt,yb as We,yc as q,zb as fe,zc as U}from"./chunk-DST2LAMD.js";function rt(a,s){if(!a||!a.getClientRects().length)return 0;let i=a.getBoundingClientRect();if(i.width||i.height){if(s===window){let l=a.ownerDocument.documentElement;return i.top-l.clientTop}return i.top-s.getBoundingClientRect().top}return i.top}var Jn=["ink"],Qn=["*"],Gn=a=>({"ant-anchor-wrapper-horizontal":a}),qn=a=>({"ant-anchor-fixed":a});function Kn(a,s){}function Yn(a,s){if(a&1&&(n(0,"nz-affix",2),g(1,Kn,0,0,"ng-template",3),t()),a&2){let i=p(),l=k(3);c("nzOffsetTop",i.nzOffsetTop)("nzTarget",i.container),d(),c("ngTemplateOutlet",l)}}function Zn(a,s){}function Xn(a,s){if(a&1&&g(0,Zn,0,0,"ng-template",3),a&2){p();let i=k(3);c("ngTemplateOutlet",i)}}function $n(a,s){if(a&1&&(n(0,"div",4)(1,"div",5)(2,"div",6),m(3,"div",7,1),t(),Qe(5),t()()),a&2){let i=p();kt(i.wrapperStyle),$e(tt(6,Gn,i.nzDirection==="horizontal")),d(),$e(tt(8,qn,!i.nzAffix&&!i.nzShowInkInFixed))}}var Mn="ant-anchor-ink-ball-visible",ei="anchor",ti=/#([^#]+)$/,ni=qt({passive:!0}),$=(()=>{let a,s=[],i=[],l,r=[],o=[],h,C=[],st=[],mt,dt=[],pt=[];return class lt{static{let z=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;a=[Ue()],l=[Ue()],h=[Ue()],mt=[Ue()],Pe(null,null,a,{kind:"field",name:"nzShowInkInFixed",static:!1,private:!1,access:{has:f=>"nzShowInkInFixed"in f,get:f=>f.nzShowInkInFixed,set:(f,T)=>{f.nzShowInkInFixed=T}},metadata:z},s,i),Pe(null,null,l,{kind:"field",name:"nzBounds",static:!1,private:!1,access:{has:f=>"nzBounds"in f,get:f=>f.nzBounds,set:(f,T)=>{f.nzBounds=T}},metadata:z},r,o),Pe(null,null,h,{kind:"field",name:"nzOffsetTop",static:!1,private:!1,access:{has:f=>"nzOffsetTop"in f,get:f=>f.nzOffsetTop,set:(f,T)=>{f.nzOffsetTop=T}},metadata:z},C,st),Pe(null,null,mt,{kind:"field",name:"nzTargetOffset",static:!1,private:!1,access:{has:f=>"nzTargetOffset"in f,get:f=>f.nzTargetOffset,set:(f,T)=>{f.nzTargetOffset=T}},metadata:z},dt,pt),z&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:z})}constructor(z,f,T,G,pe){this.nzConfigService=z,this.scrollSrv=f,this.cdr=T,this.platform=G,this.renderer=pe,this._nzModuleName=ei,this.nzAffix=!0,this.nzShow=!0,this.nzShowInkInFixed=we(this,s,!1),this.nzBounds=(we(this,i),we(this,r,5)),this.nzOffsetTop=(we(this,o),we(this,C,void 0)),this.nzTargetOffset=(we(this,st),we(this,dt,void 0)),this.nzContainer=we(this,pt),this.nzDirection="vertical",this.nzClick=new Me,this.nzChange=new Me,this.nzScroll=new Me,this.visible=!1,this.wrapperStyle={"max-height":"100vh"},this.links=[],this.animating=!1,this.destroy$=new xt,this.doc=S(Ot)}registerLink(z){this.links.push(z)}unregisterLink(z){this.links.splice(this.links.indexOf(z),1)}getContainer(){return this.container||window}ngAfterViewInit(){this.registerScrollEvent()}ngOnDestroy(){clearTimeout(this.handleScrollTimeoutID),this.destroy$.next(!0),this.destroy$.complete()}registerScrollEvent(){this.platform.isBrowser&&(this.destroy$.next(!0),Jt(this.getContainer(),"scroll",ni).pipe(St(50),ht(this.destroy$)).subscribe(()=>this.handleScroll()),this.handleScrollTimeoutID=setTimeout(()=>this.handleScroll()))}handleScroll(){if(typeof document>"u"||this.animating)return;let z=[],T=(this.nzTargetOffset?this.nzTargetOffset:this.nzOffsetTop||0)+this.nzBounds;if(this.links.forEach(G=>{let pe=ti.exec(G.nzHref.toString());if(!pe)return;let be=this.doc.getElementById(pe[1]);if(be){let ct=rt(be,this.getContainer());ct<T&&z.push({top:ct,comp:G})}}),this.visible=!!z.length,!this.visible)this.clearActive(),this.cdr.detectChanges();else{let G=z.reduce((pe,be)=>be.top>pe.top?be:pe);this.handleActive(G.comp)}this.setVisible()}clearActive(){this.links.forEach(z=>{z.unsetActive()})}setActive(z){let f=this.activeLink,T=this.nzCurrentAnchor&&this.links.find(pe=>pe.nzHref===this.nzCurrentAnchor)||z;if(!T)return;T.setActive();let G=T.getLinkTitleElement();this.nzDirection==="vertical"?this.ink.nativeElement.style.top=`${G.offsetTop+G.clientHeight/2-4.5}px`:this.ink.nativeElement.style.left=`${G.offsetLeft+G.clientWidth/2}px`,this.activeLink=(z||T).nzHref,f!==this.activeLink&&this.nzChange.emit(this.activeLink)}handleActive(z){this.clearActive(),this.setActive(z),this.visible=!0,this.setVisible(),this.nzScroll.emit(z)}setVisible(){this.ink&&(this.visible?this.renderer.addClass(this.ink.nativeElement,Mn):this.renderer.removeClass(this.ink.nativeElement,Mn))}handleScrollTo(z){let f=this.doc.querySelector(z.nzHref);if(!f)return;this.animating=!0;let T=this.scrollSrv.getScroll(this.getContainer()),G=rt(f,this.getContainer()),pe=T+G;pe-=this.nzTargetOffset!==void 0?this.nzTargetOffset:this.nzOffsetTop||0,this.scrollSrv.scrollTo(this.getContainer(),pe,{callback:()=>{this.animating=!1,this.handleActive(z)}}),this.nzClick.emit(z.nzHref)}ngOnChanges(z){let{nzShow:f,nzOffsetTop:T,nzContainer:G,nzCurrentAnchor:pe}=z;if(T&&(this.wrapperStyle=ge(Ee({},this.wrapperStyle),{"max-height":`calc(100vh - ${this.nzOffsetTop}px)`})),f&&(this.wrapperStyle=ge(Ee({},this.wrapperStyle),{display:this.nzShow?"block":"none"})),G){let be=this.nzContainer;this.container=typeof be=="string"?this.doc.querySelector(be):be,this.registerScrollEvent()}pe&&this.setActive()}static{this.\u0275fac=function(f){return new(f||lt)(fe(Qt),fe(Gt),fe(K),fe(Ke),fe(We))}}static{this.\u0275cmp=v({type:lt,selectors:[["nz-anchor"]],viewQuery:function(f,T){if(f&1&&q(Jn,5),f&2){let G;U(G=j())&&(T.ink=G.first)}},inputs:{nzAffix:[2,"nzAffix","nzAffix",Ge],nzShow:[2,"nzShow","nzShow",Ge],nzShowInkInFixed:[2,"nzShowInkInFixed","nzShowInkInFixed",Ge],nzBounds:[2,"nzBounds","nzBounds",Ht],nzOffsetTop:[2,"nzOffsetTop","nzOffsetTop",at],nzTargetOffset:[2,"nzTargetOffset","nzTargetOffset",at],nzContainer:"nzContainer",nzCurrentAnchor:"nzCurrentAnchor",nzDirection:"nzDirection"},outputs:{nzClick:"nzClick",nzChange:"nzChange",nzScroll:"nzScroll"},exportAs:["nzAnchor"],features:[gt],ngContentSelectors:Qn,decls:4,vars:1,consts:[["content",""],["ink",""],[3,"nzOffsetTop","nzTarget"],[3,"ngTemplateOutlet"],[1,"ant-anchor-wrapper"],[1,"ant-anchor"],[1,"ant-anchor-ink"],[1,"ant-anchor-ink-ball"]],template:function(f,T){f&1&&(Je(),g(0,Yn,2,3,"nz-affix",2)(1,Xn,1,1,null,3)(2,$n,6,10,"ng-template",null,0,A)),f&2&&ue(T.nzAffix?0:1)},dependencies:[qe,se,y],encapsulation:2,changeDetection:0})}}})();var ai=["nzTemplate"],ri=["linkTitle"],li=["*"];function oi(a,s){if(a&1&&(n(0,"span"),e(1),t()),a&2){let i=p();d(),_e(i.titleStr)}}function si(a,s){}function mi(a,s){if(a&1&&g(0,si,0,0,"ng-template",2),a&2){let i=p();c("ngTemplateOutlet",i.titleTpl||i.nzTemplate)}}function di(a,s){a&1&&Qe(0)}var xe=(()=>{class a{set nzTitle(i){i instanceof yt?(this.titleStr=null,this.titleTpl=i):this.titleStr=i}constructor(i,l,r,o){this.elementRef=i,this.anchorComp=l,this.platform=r,this.renderer=o,this.nzHref="#",this.titleStr="",this.nzDirection="vertical"}ngOnInit(){this.anchorComp.registerLink(this),this.nzDirection=this.anchorComp.nzDirection}getLinkTitleElement(){return this.linkTitle.nativeElement}setActive(){this.renderer.addClass(this.elementRef.nativeElement,"ant-anchor-link-active")}unsetActive(){this.renderer.removeClass(this.elementRef.nativeElement,"ant-anchor-link-active")}goToClick(i){i.preventDefault(),i.stopPropagation(),this.platform.isBrowser&&this.anchorComp.handleScrollTo(this)}ngOnDestroy(){this.anchorComp.unregisterLink(this)}static{this.\u0275fac=function(l){return new(l||a)(fe(_t),fe($),fe(Ke),fe(We))}}static{this.\u0275cmp=v({type:a,selectors:[["nz-link"]],contentQueries:function(l,r,o){if(l&1&&Nt(o,ai,5),l&2){let h;U(h=j())&&(r.nzTemplate=h.first)}},viewQuery:function(l,r){if(l&1&&q(ri,5),l&2){let o;U(o=j())&&(r.linkTitle=o.first)}},hostAttrs:[1,"ant-anchor-link"],inputs:{nzHref:"nzHref",nzTarget:"nzTarget",nzTitle:"nzTitle"},exportAs:["nzLink"],ngContentSelectors:li,decls:5,vars:5,consts:[["linkTitle",""],[1,"ant-anchor-link-title",3,"click","href","target"],[3,"ngTemplateOutlet"]],template:function(l,r){if(l&1){let o=_();Je(),n(0,"a",1,0),x("click",function(C){return u(o),E(r.goToClick(C))}),g(2,oi,2,1,"span")(3,mi,1,1,null,2),t(),g(4,di,1,0)}l&2&&(c("href",r.nzHref,zt)("target",r.nzTarget),vt("title",r.titleStr),d(2),ue(r.titleStr?2:3),d(2),ue(r.nzDirection==="vertical"?4:-1))},dependencies:[qe],encapsulation:2,changeDetection:0})}}return a})();var he=(()=>{class a{static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275mod=Tt({type:a})}static{this.\u0275inj=Et({imports:[$]})}}return a})();var pi=()=>({standalone:!0});function ci(a,s){if(a&1){let i=_();b(0),n(1,"a",53),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",54),m(3,"nz-icon",55),t()(),w()}}function xi(a,s){if(a&1){let i=_();b(0),n(1,"a",53),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",54),e(3,"Alexei Cioina's blog"),t()(),w()}}var Rn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-what-version-of-this-blog"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;U(o=j())&&(r.affixEl=o.first)}},decls:407,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-8a3037627685a35a360fc6fc7139ab82","nzTitle","The Problem"],["nzHref","#h-c36299acad44969a87a312672fc3467a","nzTitle","Case Scenario #1"],["nzHref","#h-a42d426924ef47ad9f3ba9f9eef303f7","nzTitle","Case Scenario #2"],["nzHref","#h-b3708047a4d3ddf05a74c7ff57027c22","nzTitle","Case Scenario #3"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20211009-what-version-of-this-blog.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],["id","h-8a3037627685a35a360fc6fc7139ab82"],["onclick","window.location.hash = 'h-8a3037627685a35a360fc6fc7139ab82'",1,"anchor"],["href","https://stackoverflow.com/questions/55494181/what-is-the-purpose-of-swupdate-activateupdate-in-angular/59175788#59175788","target","_blank","rel","noopener"],["id","h-c36299acad44969a87a312672fc3467a"],["onclick","window.location.hash = 'h-c36299acad44969a87a312672fc3467a'",1,"anchor"],["href","https://github.com/cioina/openshift-laravel-example/blob/main/src/acioina/site/src/Acioina/UserManagement/Http/Controllers/Api/VersionController.php","target","_blank","rel","noopener"],[1,"language-php"],[1,"hljs-meta"],[1,"hljs-keyword"],[1,"hljs-title","class_"],[1,"hljs-title"],[1,"hljs-class"],[1,"hljs-variable","constant_"],[1,"hljs-string"],[1,"hljs-function"],[1,"hljs-params"],[1,"hljs-variable"],[1,"hljs-built_in"],[1,"hljs-title","function_","invoke__"],[1,"hljs-variable","language_"],[1,"language-typescript"],[1,"hljs-attr"],[1,"language-csharp"],[1,"hljs-literal"],[1,"hljs-title","function_"],[1,"hljs-property"],["id","h-a42d426924ef47ad9f3ba9f9eef303f7"],["onclick","window.location.hash = 'h-a42d426924ef47ad9f3ba9f9eef303f7'",1,"anchor"],["href","https://github.com/ngrx/platform/blob/main/projects/ngrx.io/src/app/sw-updates/sw-updates.service.ts","target","_blank","rel","noopener"],["id","h-b3708047a4d3ddf05a74c7ff57027c22"],["onclick","window.location.hash = 'h-b3708047a4d3ddf05a74c7ff57027c22'",1,"anchor"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,ci,4,0,"ng-container",5)(6,xi,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),m(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),m(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15),t()(),n(20,"span",16),e(21," What Version of This Blog Do You See?"),m(22,"span",17)(23,"span",18),n(24,"a",19),m(25,"nz-icon",20),t()(),n(26,"article",21)(27,"p"),e(28,"As you can see, this website does not have a formal version tag. It uses the latest version of "),n(29,"code"),e(30,"ng-zorro-antd"),t(),e(31," and Angular as some kind of version tag. So, just imagine how surprised I was when I deployed this website compiled with Angular "),n(32,"code"),e(33,"12.2.9"),t(),e(34," and checking my very old Samsung that runs on Android 4.4.2. For some reason, the old Chrome web browser does not want to load this website correctly, so, I use an old version of FireFox browser for Android (As you may know, Google does not allow to update apps for old Android versions.) FireFox worked ok at first. But, when I closed and opened the browser again, this site loaded automatically and showed Angular "),n(35,"code"),e(36,"12.2.4"),t(),e(37," at the bottom of the footer. Somehow, FireFox cached an old version of my website. Deleting the FireFox cache did not help, but, reloading the URL would show the correct Angular "),n(38,"code"),e(39,"12.2.9"),t(),e(40,"."),t(),n(41,"blockquote")(42,"p"),e(43,"It looks like starting with Angular 16, this website will not work at all anymore on outdated devices!"),t()(),n(44,"h2",22)(45,"span"),e(46,"The Problem"),t(),n(47,"a",23),e(48,"#"),t()(),n(49,"p"),e(50,"It may be problematic to have latest version for some websites that use Angular with a lot of lazy-loading modules. Imagine a user browsing your website just seconds before you start to deploy a new version of your website. The user will still have the old version (old Angular compiled JavaScript files) even after the deployment ends. We will consider three case scenarios here and will try to implement solution #2 from "),n(51,"strong"),e(52,"gkalpak"),t(),e(53,"'s "),n(54,"a",24),e(55,"StackOverflow"),t(),e(56," answer. We will let website users know that a new version is available and ask them to refresh the webpage."),t(),n(57,"h2",25)(58,"span"),e(59,"Case Scenario #1"),t(),n(60,"a",26),e(61,"#"),t()(),n(62,"p"),e(63,"From my experience, the problem may appear for old/outdated web browsers like one described above or when you open multiple tabs of the same page. You will get a message to reload/refresh the page with an error similar to "),n(64,"strong"),e(65,"ERROR: b607b9112d721b487e78121fc3bbf455"),t(),e(66," (where b607b9112d721b487e78121fc3bbf455 is the new hash.)"),t(),n(67,"p"),e(68,"It was very simple for me to implement this solution because I use a server-side API and deploy my backend and frontend on the same server and generate my deployment with a Node.js script. So, I generate "),n(69,"a",27),e(70,"a small PHP file"),t(),e(71," and small TypeScript file with some unique hash."),t(),n(72,"p")(73,"strong")(74,"code"),e(75,"VersionController.php"),t()()(),n(76,"pre",28)(77,"code")(78,"span",29),e(79,"<?php"),t(),e(80,`
`),n(81,"span",30),e(82,"namespace"),t(),e(83," "),n(84,"span",31),e(85,"Acioina"),t(),e(86,"\\"),n(87,"span",31),e(88,"UserManagement"),t(),e(89,"\\"),n(90,"span",31),e(91,"Http"),t(),e(92,"\\"),n(93,"span",31),e(94,"Controllers"),t(),e(95,"\\"),n(96,"span",31),e(97,"Api"),t(),e(98,`;
`),n(99,"span",30),e(100,"use"),t(),e(101," "),n(102,"span",32),e(103,"Acioina"),t(),e(104,"\\"),n(105,"span",32),e(106,"UserManagement"),t(),e(107,"\\"),n(108,"span",32),e(109,"Transformers"),t(),e(110,"\\"),n(111,"span",32),e(112,"VersionTransformer"),t(),e(113,`;

`),n(114,"span",33)(115,"span",30),e(116,"class"),t(),e(117," "),n(118,"span",32),e(119,"VersionController"),t(),e(120," "),n(121,"span",30),e(122,"extends"),t(),e(123," "),n(124,"span",32),e(125,"ApiController"),t(),e(126,`
`),t(),e(127,`{
    `),n(128,"span",30),e(129,"private"),t(),e(130," "),n(131,"span",30),e(132,"const"),t(),e(133," "),n(134,"span",34),e(135,"ANGULAR_APP_HASH"),t(),e(136," = "),n(137,"span",35),e(138,"'b607b9112d721b487e78121fc3bbf455'"),t(),e(139,`;

    `),n(140,"span",30),e(141,"public"),t(),e(142," "),n(143,"span",36)(144,"span",30),e(145,"function"),t(),e(146," "),n(147,"span",32),e(148,"__construct"),t(),e(149,"("),n(150,"span",37),e(151,"VersionTransformer "),n(152,"span",38),e(153,"$transformer"),t()(),e(154,`)
    `),t(),e(155,`{
        `),n(156,"span",39),e(157,"parent"),t(),e(158,"::"),n(159,"span",40),e(160,"__construct"),t(),e(161,"("),n(162,"span",38),e(163,"$transformer"),t(),e(164,`);
    }

    `),n(165,"span",30),e(166,"public"),t(),e(167," "),n(168,"span",36)(169,"span",30),e(170,"function"),t(),e(171," "),n(172,"span",32),e(173,"index"),t(),e(174,"("),m(175,"span",37),e(176,`)
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
  }`),t()(),n(376,"p"),e(377,"I compile my frontend app with a command like this: "),n(378,"code"),e(379,"yarn build:site"),t(),e(380,". This simple solution helped me to solve my FireFox problem, however, the most logical solution is not to allow outdated web browsers to access this website."),t(),n(381,"h2",48)(382,"span"),e(383,"Case Scenario #2"),t(),n(384,"a",49),e(385,"#"),t()(),n(386,"p"),e(387,"This is the most common case scenario for modern (up to date) web browsers based on Google Chrome. It happens when you open this website from the browser bookmarks or when you browse this website while a new version was deployed to the server. You will get a message to reload/refresh the page with "),n(388,"strong"),e(389,"ERROR: SwUpdatesService: activated"),t(),e(390,". This website uses a Service Worker loaded from "),n(391,"code"),e(392,"ngsw-worker.js"),t(),e(393,". In addition, we use Angular "),n(394,"a",50),e(395,"SwUpdates"),t(),e(396," which will load updated resources of the website behind the scene on the user's machine. Theoretically, this website should work fine without reloading most of the time."),t(),n(397,"h2",51)(398,"span"),e(399,"Case Scenario #3"),t(),n(400,"a",52),e(401,"#"),t()(),n(402,"p"),e(403,"This case scenario happens when you open multiple tabs of this website while a new version was deployed to the server. You will get a message to reload/refresh the page with "),n(404,"strong"),e(405,"ERROR: GlobalErrorHandler"),t(),e(406,". It means that the browser tries to load old resources that were deleted by a new deployment."),t()()()()),l&2&&(d(),c("nzBordered",!0),d(6),c("nzOffsetTop",100),d(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,pi)),d(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,O,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var hi=()=>({standalone:!0});function Si(a,s){if(a&1){let i=_();b(0),n(1,"a",98),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",99),m(3,"nz-icon",100),t()(),w()}}function ui(a,s){if(a&1){let i=_();b(0),n(1,"a",98),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",99),e(3,"Alexei Cioina's blog"),t()(),w()}}var In=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-svg-icons"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;U(o=j())&&(r.affixEl=o.first)}},decls:890,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-175576ef003bf799bcb57b8ca42ad3c2","nzTitle","List of icons"],["nzHref","#h-db974238714ca8de634a7ce1d083a14f","nzTitle","API"],["nzHref","#h-cf0c08580649cca4d27fe03e3c45d398","nzTitle","[nz-icon]"],["nzHref","#h-1a35350834d43f0d0f324f4a0348eba3","nzTitle","NzIconService"],["nzHref","#h-ed485f46b93499de3700bacfe35e1334","nzTitle","SVG icons"],["nzHref","#h-ec99ccb95aa0e7cb6fd9e61a7c60ff7c","nzTitle","Static loading and dynamic loading"],["nzHref","#h-10028ae625de15d5eefce48a85bff434","nzTitle","Add Icons in Lazy-loaded Modules"],["nzHref","#h-93e3a3a1bd8c21444d8b8ae1baea0fc0","nzTitle","Set Default TwoTone Color"],["nzHref","#h-3ce4aec90030342571cd93b6370e0693","nzTitle","Custom Font Icon"],["nzHref","#h-b3ba0fe968ce39dcfc6fe8cc0f1b02da","nzTitle","Namespace"],["nzHref","#h-1fe917b01f9a3f87fa2d7d3b7643fac1","nzTitle","FAQ"],["nzHref","#h-8e1d73289aa92536789394b9371858f6","nzTitle","All my icons are gone"],["nzHref","#h-a81dd5f26e5a5e33d037266277360e1c","nzTitle","There are two similar icons in a "],["nzHref","#h-62a9076a6bbec0d3ce2959c0922bcc02","nzTitle","I want to import all icons statically. What should I do?"],["nzHref","#h-5de90099b2e7ac70e7615eaaebe36d60","nzTitle","Does dynamic loading affect web pages' performance?"],["nzHref","#h-b7b1fb211a7b65e0bc5d6ee9d98c00f6","nzTitle","How do I know a icon's corresponding module to import?"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230219-svg-icons.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[2,"border-color","#faad14"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/doc/index.en-US.md","target","_blank","rel","noopener"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE","target","_blank","rel","noopener"],[1,"pic-plus",2,"text-align","center"],["nzType","custom:zorro","nzWidth","180px","nzHeight","180px"],["nzType","custom:angular","nzWidth","180px","nzHeight","180px"],["nzType","custom:ng-zorro","nzWidth","180px","nzHeight","180px"],["id","h-175576ef003bf799bcb57b8ca42ad3c2"],["onclick","window.location.hash = 'h-175576ef003bf799bcb57b8ca42ad3c2'",1,"anchor"],["href","https://ant.design/components/icon/","target","_blank","rel","noopener"],[1,"language-ts"],[1,"hljs-keyword"],[1,"hljs-title","class_"],[1,"hljs-string"],["id","h-db974238714ca8de634a7ce1d083a14f"],["onclick","window.location.hash = 'h-db974238714ca8de634a7ce1d083a14f'",1,"anchor"],["id","h-cf0c08580649cca4d27fe03e3c45d398"],[1,"api-type-label","directive"],["onclick","window.location.hash = 'h-cf0c08580649cca4d27fe03e3c45d398'",1,"anchor"],["href","https://github.com/twbs/icons","target","_blank","rel","noopener"],["href","https://icons.getbootstrap.com/","target","_blank","rel","noopener"],["href","https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-svg","target","_blank","rel","noopener"],["id","h-1a35350834d43f0d0f324f4a0348eba3"],[1,"api-type-label","service"],["onclick","window.location.hash = 'h-1a35350834d43f0d0f324f4a0348eba3'",1,"anchor"],["id","h-ed485f46b93499de3700bacfe35e1334"],["onclick","window.location.hash = 'h-ed485f46b93499de3700bacfe35e1334'",1,"anchor"],["href","https://github.com/ant-design/ant-design/issues/10353","target","_blank","rel","noopener"],[1,"language-html"],[1,"hljs-tag"],[1,"hljs-name"],[1,"hljs-attr"],["id","h-ec99ccb95aa0e7cb6fd9e61a7c60ff7c"],["onclick","window.location.hash = 'h-ec99ccb95aa0e7cb6fd9e61a7c60ff7c'",1,"anchor"],[1,"hljs-comment"],[1,"hljs-meta"],[1,"hljs-title","function_"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/icons.ts","target","_blank","rel","noopener"],[1,"language-json"],[1,"hljs-punctuation"],["id","h-10028ae625de15d5eefce48a85bff434"],["onclick","window.location.hash = 'h-10028ae625de15d5eefce48a85bff434'",1,"anchor"],["id","h-93e3a3a1bd8c21444d8b8ae1baea0fc0"],["onclick","window.location.hash = 'h-93e3a3a1bd8c21444d8b8ae1baea0fc0'",1,"anchor"],["id","h-3ce4aec90030342571cd93b6370e0693"],["onclick","window.location.hash = 'h-3ce4aec90030342571cd93b6370e0693'",1,"anchor"],["href","http://iconfont.cn/","target","_blank","rel","noopener"],[1,"hljs-variable","language_"],[1,"hljs-property"],["href","http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code","target","_blank","rel","noopener"],["id","h-b3ba0fe968ce39dcfc6fe8cc0f1b02da"],["onclick","window.location.hash = 'h-b3ba0fe968ce39dcfc6fe8cc0f1b02da'",1,"anchor"],["id","h-1fe917b01f9a3f87fa2d7d3b7643fac1"],["onclick","window.location.hash = 'h-1fe917b01f9a3f87fa2d7d3b7643fac1'",1,"anchor"],["id","h-8e1d73289aa92536789394b9371858f6"],["onclick","window.location.hash = 'h-8e1d73289aa92536789394b9371858f6'",1,"anchor"],["id","h-0dfac33e812ac318cdabc8c2135f71c5"],["onclick","window.location.hash = 'h-0dfac33e812ac318cdabc8c2135f71c5'",1,"anchor"],["id","h-62a9076a6bbec0d3ce2959c0922bcc02"],["onclick","window.location.hash = 'h-62a9076a6bbec0d3ce2959c0922bcc02'",1,"anchor"],["id","h-5de90099b2e7ac70e7615eaaebe36d60"],["onclick","window.location.hash = 'h-5de90099b2e7ac70e7615eaaebe36d60'",1,"anchor"],["id","h-b7b1fb211a7b65e0bc5d6ee9d98c00f6"],["onclick","window.location.hash = 'h-b7b1fb211a7b65e0bc5d6ee9d98c00f6'",1,"anchor"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,Si,4,0,"ng-container",5)(6,ui,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),m(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),m(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20)(25,"nz-link",21)(26,"nz-link",22)(27,"nz-link",23)(28,"nz-link",24)(29,"nz-link",25)(30,"nz-link",26)(31,"nz-link",27),t()(),n(32,"span",28),e(33," Semantic Vector Graphics (SVG) Icons"),m(34,"span",29)(35,"span",30),n(36,"a",31),m(37,"nz-icon",32),t()(),n(38,"article",33)(39,"blockquote",34)(40,"p")(41,"strong"),e(42,"This is a modified version of the "),n(43,"a",35),e(44,"NG-ZORRO original"),t(),e(45," document provided under "),n(46,"a",36),e(47,"Alibaba.com MIT LICENSE"),t(),e(48,"."),t()()(),n(49,"div",37),m(50,"nz-icon",38),n(51,"span"),e(52,"+"),t(),m(53,"nz-icon",39),n(54,"span"),e(55,"="),t(),m(56,"nz-icon",40),t(),n(57,"h2",41)(58,"span"),e(59,"List of icons"),t(),n(60,"a",42),e(61,"#"),t()(),n(62,"p"),e(63,"We are still adding icons right now, syncing to "),n(64,"a",43),e(65,"antd"),t(),e(66,"."),t(),n(67,"pre",44)(68,"code")(69,"span",45),e(70,"import"),t(),e(71," { "),n(72,"span",46),e(73,"NzIconModule"),t(),e(74," } "),n(75,"span",45),e(76,"from"),t(),e(77," "),n(78,"span",47),e(79,"'ng-zorro-antd/icon'"),t(),e(80,";"),t()(),n(81,"h2",48)(82,"span"),e(83,"API"),t(),n(84,"a",49),e(85,"#"),t()(),n(86,"h3",50)(87,"span"),e(88,"[nz-icon]"),t(),n(89,"label",51),e(90,"directive"),t(),n(91,"a",52),e(92,"#"),t()(),n(93,"table")(94,"thead")(95,"tr")(96,"th"),e(97,"Property"),t(),n(98,"th"),e(99,"Description"),t(),n(100,"th"),e(101,"Type"),t(),n(102,"th"),e(103,"Default"),t(),n(104,"th"),e(105,"Global Config"),t()()(),n(106,"tbody")(107,"tr")(108,"td")(109,"code"),e(110,"[nzType]"),t()(),n(111,"td"),e(112,"Type of the ant design icon"),t(),n(113,"td")(114,"code"),e(115,"string"),t()(),n(116,"td"),e(117,"-"),t(),m(118,"td"),t(),n(119,"tr")(120,"td")(121,"code"),e(122,"[nzTheme]"),t()(),n(123,"td"),e(124,"Type of the ant design icon"),t(),n(125,"td")(126,"code"),e(127,"'fill'|'outline'|'twotone'|'feather'"),t()(),n(128,"td")(129,"code"),e(130,"'outline'"),t()(),n(131,"td"),e(132,"\u2705"),t()(),n(133,"tr")(134,"td")(135,"code"),e(136,"[nzSpin]"),t()(),n(137,"td"),e(138,"Rotate icon with animation"),t(),n(139,"td")(140,"code"),e(141,"boolean"),t()(),n(142,"td")(143,"code"),e(144,"false"),t()(),m(145,"td"),t(),n(146,"tr")(147,"td")(148,"code"),e(149,"[nzTwotoneColor]"),t()(),n(150,"td"),e(151,"Only support the two-tone icon. Specific the primary color."),t(),n(152,"td")(153,"code"),e(154,"string (hex color)"),t()(),n(155,"td"),e(156,"-"),t(),n(157,"td"),e(158,"\u2705"),t()(),n(159,"tr")(160,"td")(161,"code"),e(162,"[nzIconfont]"),t()(),n(163,"td"),e(164,"Type of the icon from iconfont"),t(),n(165,"td")(166,"code"),e(167,"string"),t()(),n(168,"td"),e(169,"-"),t(),m(170,"td"),t(),n(171,"tr")(172,"td")(173,"code"),e(174,"[nzRotate]"),t()(),n(175,"td"),e(176,"Rotate degrees"),t(),n(177,"td")(178,"code"),e(179,"number"),t()(),n(180,"td"),e(181,"-"),t(),m(182,"td"),t(),n(183,"tr")(184,"td")(185,"code"),e(186,"[nzWidth]"),t()(),n(187,"td"),e(188,"SVG width"),t(),n(189,"td")(190,"code"),e(191,"number|string"),t()(),n(192,"td")(193,"code"),e(194,"1em"),t()(),m(195,"td"),t(),n(196,"tr")(197,"td")(198,"code"),e(199,"[nzHeight]"),t()(),n(200,"td"),e(201,"SVG height"),t(),n(202,"td")(203,"code"),e(204,"number|string"),t()(),n(205,"td")(206,"code"),e(207,"1em"),t()(),m(208,"td"),t()()(),n(209,"blockquote")(210,"p"),e(211,"In "),n(212,"code"),e(213,"feather"),t(),e(214," folder, there are all "),n(215,"a",53),e(216,"official open source SVG icons for Bootstrap"),t(),e(217," that can be viewed "),n(218,"a",54),e(219,"here"),t(),e(220,". In "),n(221,"code"),e(222,"fill"),t(),e(223,","),n(224,"code"),e(225,"outline"),t(),e(226," and "),n(227,"code"),e(228,"twotone"),t(),e(229," folders, there are all "),n(230,"a",55),e(231,"Ant Design SVG icons"),t(),e(232," that can be viewed "),n(233,"a",43),e(234,"here"),t(),e(235,". In "),n(236,"code"),e(237,"custom"),t(),e(238," folder, there are a few SVG icons added by hand witch can be accessed by "),n(239,"code"),e(240,'nzType="custom:some-icon-file-name"'),t(),e(241,"."),t()(),n(242,"h3",56)(243,"span"),e(244,"NzIconService"),t(),n(245,"label",57),e(246,"service"),t(),n(247,"a",58),e(248,"#"),t()(),n(249,"table")(250,"thead")(251,"tr")(252,"th"),e(253,"Methods/Properties"),t(),n(254,"th"),e(255,"Description"),t(),n(256,"th"),e(257,"Parameters"),t()()(),n(258,"tbody")(259,"tr")(260,"td")(261,"code"),e(262,"useJsonpLoading()"),t()(),n(263,"td"),e(264,"Call this method to switch to jsonp like loading"),t(),m(265,"td"),t(),n(266,"tr")(267,"td")(268,"code"),e(269,"addIcon()"),t()(),n(270,"td"),e(271,"To import icons statically"),t(),n(272,"td")(273,"code"),e(274,"IconDefinition"),t()()(),n(275,"tr")(276,"td")(277,"code"),e(278,"addIconLiteral()"),t()(),n(279,"td"),e(280,"To statically import custom icons"),t(),n(281,"td")(282,"code"),e(283,"string"),t(),e(284,", "),n(285,"code"),e(286,"string (SVG)"),t()()(),n(287,"tr")(288,"td")(289,"code"),e(290,"fetchFromIconfont()"),t()(),n(291,"td"),e(292,"To get icon assets from fonticon"),t(),n(293,"td")(294,"code"),e(295,"NzIconfontOption"),t()()(),n(296,"tr")(297,"td")(298,"code"),e(299,"changeAssetsSource()"),t()(),n(300,"td"),e(301,"To change the location of your icon assets, so that you can deploy these icons wherever you want"),t(),n(302,"td")(303,"code"),e(304,"string"),t()()()()(),n(305,"h3",59)(306,"span"),e(307,"SVG icons"),t(),n(308,"a",60),e(309,"#"),t()(),n(310,"p"),e(311,"We synced to Ant Design and replaced font icons with svg icons which bring benefits below:"),t(),n(312,"ul")(313,"li"),e(314,"Complete offline usage of icon, no dependency of alipay cdn font icon file and no more empty square during downloading."),t(),n(315,"li"),e(316,"Much more display accuracy in lower-level screens."),t(),n(317,"li"),e(318,"Support multiple colors for icon."),t(),n(319,"li"),e(320,"No need to change built-in icons with overriding styles by providing more props in component."),t()(),n(321,"p"),e(322,"You can join in "),n(323,"a",61),e(324,"this dicussion of Ant Design"),t(),e(325,"."),t(),n(326,"p"),e(327,"NG-ZORRO hadn't provided an icon component. Instead, icon based on font files was provided. We make this new directive compatible to old API. If you make no changes to your existing code, old icons would be dynamically loaded as "),n(328,"code"),e(329,"outline"),t(),e(330," icons. But the best pratice is always to use "),n(331,"code"),e(332,"nz-icon"),t(),e(333," directive and specify the "),n(334,"code"),e(335,"theme"),t(),e(336," prop."),t(),n(337,"pre",62)(338,"code")(339,"span",63),e(340,"<"),n(341,"span",64),e(342,"span"),t(),e(343," "),n(344,"span",65),e(345,"nz-icon"),t(),e(346," ["),n(347,"span",65),e(348,"nzType"),t(),e(349,"]="),n(350,"span",47),e(351,`"'star'"`),t(),e(352," ["),n(353,"span",65),e(354,"nzTheme"),t(),e(355,"]="),n(356,"span",47),e(357,`"'fill'"`),t(),e(358,">"),t(),n(359,"span",63),e(360,"</"),n(361,"span",64),e(362,"span"),t(),e(363,">"),t()()(),n(364,"p"),e(365,"All the icons will be rendered to "),n(366,"code"),e(367,"<svg>"),t(),e(368,", and styles and classes applied to "),n(369,"code"),e(370,"<i>"),t(),e(371," would work."),t(),n(372,"pre",62)(373,"code")(374,"span",63),e(375,"<"),n(376,"span",64),e(377,"span"),t(),e(378," "),n(379,"span",65),e(380,"nz-icon"),t(),e(381," ["),n(382,"span",65),e(383,"nzType"),t(),e(384,"]="),n(385,"span",47),e(386,`"'message'"`),t(),e(387," "),n(388,"span",65),e(389,"style"),t(),e(390,"="),n(391,"span",47),e(392,'"font-size: 16px; color: #08c;"'),t(),e(393,">"),t(),n(394,"span",63),e(395,"</"),n(396,"span",64),e(397,"span"),t(),e(398,">"),t()()(),n(399,"h3",66)(400,"span"),e(401,"Static loading and dynamic loading"),t(),n(402,"a",67),e(403,"#"),t()(),n(404,"p"),e(405,"As for icons provided by Ant Design, there are two ways of importing them into your project."),t(),n(406,"p"),e(407,"Static loading. By registering icons to "),n(408,"code"),e(409,"AppModule"),t(),e(410," you load icons statically."),t(),n(411,"pre",44)(412,"code")(413,"span",45),e(414,"import"),t(),e(415," { "),n(416,"span",46),e(417,"IconDefinition"),t(),e(418," } "),n(419,"span",45),e(420,"from"),t(),e(421," "),n(422,"span",47),e(423,"'@ant-design/icons-angular'"),t(),e(424,`;
`),n(425,"span",45),e(426,"import"),t(),e(427," { "),n(428,"span",46),e(429,"NzIconModule"),t(),e(430," } "),n(431,"span",45),e(432,"from"),t(),e(433," "),n(434,"span",47),e(435,"'ng-zorro-antd/icon'"),t(),e(436,`;

`),n(437,"span",68),e(438,"// Import what you need. RECOMMENDED. \u2714\uFE0F"),t(),e(439,`
`),n(440,"span",45),e(441,"import"),t(),e(442," { "),n(443,"span",46),e(444,"AccountBookFill"),t(),e(445,", "),n(446,"span",46),e(447,"AlertFill"),t(),e(448,", "),n(449,"span",46),e(450,"AlertOutline"),t(),e(451," } "),n(452,"span",45),e(453,"from"),t(),e(454," "),n(455,"span",47),e(456,"'@ant-design/icons-angular/icons'"),t(),e(457,`;

`),n(458,"span",45),e(459,"const"),t(),e(460," "),n(461,"span",65),e(462,"icons"),t(),e(463,": "),n(464,"span",46),e(465,"IconDefinition"),t(),e(466,"[] = [ "),n(467,"span",46),e(468,"AccountBookFill"),t(),e(469,", "),n(470,"span",46),e(471,"AlertOutline"),t(),e(472,", "),n(473,"span",46),e(474,"AlertFill"),t(),e(475,` ];

`),n(476,"span",68),e(477,"// Import all. NOT RECOMMENDED. \u274C"),t(),e(478,`
`),n(479,"span",68),e(480,"// import * as AllIcons from '@ant-design/icons-angular/icons';"),t(),e(481,`

`),n(482,"span",68),e(483,"// const antDesignIcons = AllIcons as {"),t(),e(484,`
`),n(485,"span",68),e(486,"//   [key: string]: IconDefinition;"),t(),e(487,`
`),n(488,"span",68),e(489,"// };"),t(),e(490,`
`),n(491,"span",68),e(492,"// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])"),t(),e(493,`

`),n(494,"span",69),e(495,"@NgModule"),t(),e(496,`({
  `),n(497,"span",65),e(498,"declarations"),t(),e(499,`: [
    `),n(500,"span",46),e(501,"AppComponent"),t(),e(502,`
  ],
  `),n(503,"span",65),e(504,"imports"),t(),e(505,`: [
    `),n(506,"span",46),e(507,"NzIconModule"),t(),e(508,"."),n(509,"span",70),e(510,"forRoot"),t(),e(511,`(icons),
  ]
  `),n(512,"span",65),e(513,"bootstrap"),t(),e(514,": [ "),n(515,"span",46),e(516,"AppComponent"),t(),e(517,` ]
})
`),n(518,"span",45),e(519,"export"),t(),e(520," "),n(521,"span",45),e(522,"class"),t(),e(523," "),n(524,"span",46),e(525,"AppModule"),t(),e(526,` {
}`),t()(),n(527,"p"),e(528,"Actually this calls "),n(529,"code"),e(530,"addIcon"),t(),e(531," of "),n(532,"code"),e(533,"NzIconService"),t(),e(534,". Icons imported would be bundled into your "),n(535,"code"),e(536,".js"),t(),e(537," files. Static loading would increase your bundle's size so we recommend use dynamic importing as much as you can."),t(),n(538,"blockquote")(539,"p"),e(540,"Icons used by NG-ZORRO itself "),n(541,"a",71),e(542,"(NZ_ICONS_USED_BY_ZORRO)"),t(),e(543," are imported statically to increase loading speed. However, icons demonstrated on the official website are loaded dynamically."),t()(),n(544,"p"),e(545,"Dynamic importing. This way would not increase your bundle's size. When NG-ZORRO detects that the icon you want to render hasn't been registered, it would fire a HTTP request to load it. All you have to do is to config your "),n(546,"code"),e(547,"angular.json"),t(),e(548," like this:"),t(),n(549,"pre",72)(550,"code")(551,"span",73),e(552,"{"),t(),e(553,`
  `),n(554,"span",65),e(555,'"assets"'),t(),n(556,"span",73),e(557,":"),t(),e(558," "),n(559,"span",73),e(560,"["),t(),e(561,`
    `),n(562,"span",73),e(563,"{"),t(),e(564,`
      `),n(565,"span",65),e(566,'"glob"'),t(),n(567,"span",73),e(568,":"),t(),e(569," "),n(570,"span",47),e(571,'"**/*"'),t(),n(572,"span",73),e(573,","),t(),e(574,`
      `),n(575,"span",65),e(576,'"input"'),t(),n(577,"span",73),e(578,":"),t(),e(579," "),n(580,"span",47),e(581,'"./node_modules/@ant-design/icons-angular/src/inline-svg/"'),t(),n(582,"span",73),e(583,","),t(),e(584,`
      `),n(585,"span",65),e(586,'"output"'),t(),n(587,"span",73),e(588,":"),t(),e(589," "),n(590,"span",47),e(591,'"/assets/"'),t(),e(592,`
    `),n(593,"span",73),e(594,"}"),t(),e(595,`
  `),n(596,"span",73),e(597,"]"),t(),e(598,`
`),n(599,"span",73),e(600,"}"),t()()(),n(601,"p"),e(602,"You can call "),n(603,"code"),e(604,"changeAssetsSource()"),t(),e(605," of "),n(606,"code"),e(607,"NzIconService"),t(),e(608," to change the location of your icon assets, so that you can deploy these icon assets to cdn. The parameter you passed would be add in front of "),n(609,"code"),e(610,"assets/"),t(),e(611,"."),t(),n(612,"p"),e(613,"Let's assume that you deploy static assets under "),n(614,"code"),e(615,"https://mycdn.somecdn.com/icons/assets"),t(),e(616,". You can call "),n(617,"code"),e(618,"changeAssetsSource('https://mycdn.somecdn.com/icons')"),t(),e(619," to tell NG-ZORRO that all your resources are located there."),t(),n(620,"p"),e(621,"Please call this in component's constructor or "),n(622,"code"),e(623,"AppInitService"),t(),e(624,"."),t(),n(625,"h3",74)(626,"span"),e(627,"Add Icons in Lazy-loaded Modules"),t(),n(628,"a",75),e(629,"#"),t()(),n(630,"p"),e(631,"Sometimes, you want to import icons in lazy modules to avoid increasing the size of the main.js. You can use "),n(632,"code"),e(633,"NzIconModule.forChild"),t(),e(634,"."),t(),n(635,"pre",44)(636,"code")(637,"span",69),e(638,"@NgModule"),t(),e(639,`({
  `),n(640,"span",65),e(641,"imports"),t(),e(642,": ["),n(643,"span",46),e(644,"CommonModule"),t(),e(645,", "),n(646,"span",46),e(647,"NzIconModule"),t(),e(648,"."),n(649,"span",70),e(650,"forChild"),t(),e(651,"(["),n(652,"span",46),e(653,"QuestionOutline"),t(),e(654,`])],
})
`),n(655,"span",45),e(656,"class"),t(),e(657," "),n(658,"span",46),e(659,"ChildModule"),t(),e(660," {}"),t()(),n(661,"p"),e(662,"When "),n(663,"code"),e(664,"ChildModule"),t(),e(665," get loaded, the icon QuestionOutline would be usable across the application."),t(),n(666,"h3",76)(667,"span"),e(668,"Set Default TwoTone Color"),t(),n(669,"a",77),e(670,"#"),t()(),n(671,"p"),e(672,"When using the two-tone icons, you provide a global configuration like "),n(673,"code"),e(674,"{ nzIcon: { nzTwotoneColor: 'xxx' } }"),t(),e(675," via "),n(676,"code"),e(677,"NzConfigService"),t(),e(678," or call corresponding "),n(679,"code"),e(680,"set"),t(),e(681," method to change two default twotone color."),t(),n(682,"h3",78)(683,"span"),e(684,"Custom Font Icon"),t(),n(685,"a",79),e(686,"#"),t()(),n(687,"p"),e(688,"We added a "),n(689,"code"),e(690,"fetchFromIconfont"),t(),e(691," method function to help developer using their own icons deployed at "),n(692,"a",80),e(693,"iconfont.cn"),t(),e(694," in a convenient way."),t(),n(695,"blockquote")(696,"p"),e(697,"This method is specified for iconfont.cn."),t()(),n(698,"pre",44)(699,"code")(700,"span",81),e(701,"this"),t(),e(702,"."),n(703,"span",82),e(704,"_iconService"),t(),e(705,"."),n(706,"span",70),e(707,"fetchFromIconfont"),t(),e(708,`({
  `),n(709,"span",65),e(710,"scriptUrl"),t(),e(711,": "),n(712,"span",47),e(713,"'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'"),t(),e(714,`,
});`),t()(),n(715,"pre",62)(716,"code")(717,"span",63),e(718,"<"),n(719,"span",64),e(720,"span"),t(),e(721," "),n(722,"span",65),e(723,"nz-icon"),t(),e(724," ["),n(725,"span",65),e(726,"nzIconfont"),t(),e(727,"]="),n(728,"span",47),e(729,`"'icon-tuichu'"`),t(),e(730,">"),t(),n(731,"span",63),e(732,"</"),n(733,"span",64),e(734,"span"),t(),e(735,">"),t()()(),n(736,"p"),e(737,"It create a component that uses SVG sprites in essence."),t(),n(738,"p"),e(739,"The following option are available:"),t(),n(740,"table")(741,"thead")(742,"tr")(743,"th"),e(744,"Property"),t(),n(745,"th"),e(746,"Description"),t(),n(747,"th"),e(748,"Type"),t(),n(749,"th"),e(750,"Default"),t()()(),n(751,"tbody")(752,"tr")(753,"td")(754,"code"),e(755,"scriptUrl"),t()(),n(756,"td"),e(757,"The URL generated by iconfont.cn project."),t(),n(758,"td")(759,"code"),e(760,"string"),t()(),n(761,"td"),e(762,"-"),t()()()(),n(763,"p"),e(764,"The property scriptUrl should be set to import the svg sprite symbols."),t(),n(765,"p"),e(766,"See "),n(767,"a",83),e(768,"iconfont.cn"),t(),e(769," documents to learn about how to generate scriptUrl."),t(),n(770,"h3",84)(771,"span"),e(772,"Namespace"),t(),n(773,"a",85),e(774,"#"),t()(),n(775,"p"),e(776,"We introduced namespace so you could add your own icons in a convenient way. When you wan to render an icon, you could assign "),n(777,"code"),e(778,"type"),t(),n(779,"code"),e(780,"namespace:name"),t(),e(781,". Dynamic importing and static importing are both supported."),t(),n(782,"p"),e(783,"Static importing. Invoke "),n(784,"code"),e(785,"addIconLiteral"),t(),e(786," of "),n(787,"code"),e(788,"NzIconService"),t(),e(789,"."),t(),n(790,"p"),e(791,"Dynamic importing. Make sure that you have put your SVG resources in dir like "),n(792,"code"),e(793,"assets/${namespace}"),t(),e(794,". For example, if you have a "),n(795,"code"),e(796,"panda"),t(),e(797," icon and in "),n(798,"code"),e(799,"zoo"),t(),e(800," namespace, you should put "),n(801,"code"),e(802,"panda.svg"),t(),e(803," in "),n(804,"code"),e(805,"assets/zoo"),t(),e(806,"."),t(),n(807,"h2",86)(808,"span"),e(809,"FAQ"),t(),n(810,"a",87),e(811,"#"),t()(),n(812,"h3",88)(813,"span"),e(814,"All my icons are gone"),t(),n(815,"a",89),e(816,"#"),t()(),n(817,"p"),e(818,"Have you read the docs above?"),t(),n(819,"h3",90)(820,"span"),e(821,"There are two similar icons in a "),n(822,"code"),e(823,"<span></span>"),t(),e(824," tag. What happened?"),t(),n(825,"a",91),e(826,"#"),t()(),n(827,"p"),e(828,"In older versions of NG-ZORRO, there was a font file which would use "),n(829,"code"),e(830,":before"),t(),e(831," to insert a icon according to a "),n(832,"code"),e(833,"i"),t(),e(834," tag's "),n(835,"code"),e(836,"className"),t(),e(837,". So if you have two icons, try to remove "),n(838,"code"),e(839,"node_modules"),t(),e(840," and reinstall. If the problem is still there, search "),n(841,"code"),e(842,"@icon-url"),t(),e(843," and remove that line."),t(),n(844,"h3",92)(845,"span"),e(846,"I want to import all icons statically. What should I do?"),t(),n(847,"a",93),e(848,"#"),t()(),n(849,"p"),e(850,"Actually we demonstrate it here:"),t(),n(851,"pre",44)(852,"code")(853,"span",68),e(854,"// import * as AllIcons from '@ant-design/icons-angular/icons';"),t(),e(855,`

`),n(856,"span",68),e(857,"// const antDesignIcons = AllIcons as {"),t(),e(858,`
`),n(859,"span",68),e(860,"//   [key: string]: IconDefinition;"),t(),e(861,`
`),n(862,"span",68),e(863,"// };"),t(),e(864,`
`),n(865,"span",68),e(866,"// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])"),t()()(),n(867,"h3",94)(868,"span"),e(869,"Does dynamic loading affect web pages' performance?"),t(),n(870,"a",95),e(871,"#"),t()(),n(872,"p"),e(873,"We used several methods to reduce requests, like static cache, dynamic cache and reusable request. It's basically not noticeable for visitors that icons are loaded asynchronously assuming web connections are fairly good."),t(),n(874,"h3",96)(875,"span"),e(876,"How do I know a icon's corresponding module to import?"),t(),n(877,"a",97),e(878,"#"),t()(),n(879,"p"),e(880,"Capital camel-case "),n(881,"code"),e(882,"type & theme"),t(),e(883,", i.e. "),n(884,"code"),e(885,"alibaba"),t(),e(886," => "),n(887,"code"),e(888,"AlibabaOutline"),t(),e(889,"."),t()()()()),l&2&&(d(),c("nzBordered",!0),d(6),c("nzOffsetTop",100),d(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,hi)),d(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,O,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var Ei=()=>({standalone:!0});function gi(a,s){if(a&1){let i=_();b(0),n(1,"a",86),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",87),m(3,"nz-icon",88),t()(),w()}}function fi(a,s){if(a&1){let i=_();b(0),n(1,"a",86),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",87),e(3,"Alexei Cioina's blog"),t()(),w()}}var Ln=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-dotnet-core-testing"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;U(o=j())&&(r.affixEl=o.first)}},decls:2921,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-5a4865611d30c4d0ac6cdff755948150","nzTitle","MyTested Library Out of The Box"],["nzHref","#h-24135ede33965f0be2e01ca803fc7acf","nzTitle",".NET Core Identity Controller Implementation"],["nzHref","#h-c9515f97f83c49f869c71169c44d54be","nzTitle","IdentityController"],["nzHref","#h-88d4cd62d014eafd197c0de96122deeb","nzTitle",".NET Core Identity Service Implementation"],["nzHref","#h-6278f57bf8770eb44c6ba948cbe245f9","nzTitle","IdentityService"],["nzHref","#h-3505cd435c8f4001d7e7ef30f366a87f","nzTitle","Data Validation with FluentValidation Library"],["nzHref","#h-6f8b794f3246b0c1e1780bb4d4d5dc53","nzTitle","Conclusion"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230605-dotnet-core-testing.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[2,"border-color","#faad14"],["href","https://versionsof.net/","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/LICENSE","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore/blob/main/LICENSE","target","_blank","rel","noopener"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example","target","_blank","rel","noopener"],["href","https://github.com/cioina/cioina.azurewebsites.net","target","_blank","rel","noopener"],["id","h-5a4865611d30c4d0ac6cdff755948150"],["onclick","window.location.hash = 'h-5a4865611d30c4d0ac6cdff755948150'",1,"anchor"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs","target","_blank","rel","noopener"],[1,"language-csharp"],[1,"hljs-meta"],[1,"hljs-keyword"],[1,"hljs-title"],[1,"hljs-function"],[1,"hljs-string"],["id","h-24135ede33965f0be2e01ca803fc7acf"],["onclick","window.location.hash = 'h-24135ede33965f0be2e01ca803fc7acf'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Web/Features/IdentityController.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs","target","_blank","rel","noopener"],["id","h-c9515f97f83c49f869c71169c44d54be"],["onclick","window.location.hash = 'h-c9515f97f83c49f869c71169c44d54be'",1,"anchor"],["id","h-88d4cd62d014eafd197c0de96122deeb"],["onclick","window.location.hash = 'h-88d4cd62d014eafd197c0de96122deeb'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Infrastructure/Identity/Services/IdentityService.cs","target","_blank","rel","noopener"],["id","h-6278f57bf8770eb44c6ba948cbe245f9"],["onclick","window.location.hash = 'h-6278f57bf8770eb44c6ba948cbe245f9'",1,"anchor"],[1,"hljs-params"],[1,"hljs-built_in"],[1,"hljs-literal"],[1,"hljs-number"],[1,"hljs-subst"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Users/LoginTests.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs","target","_blank","rel","noopener"],[1,"hljs-comment"],["id","h-3505cd435c8f4001d7e7ef30f366a87f"],["onclick","window.location.hash = 'h-3505cd435c8f4001d7e7ef30f366a87f'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs#L626","target","_blank","rel","noopener"],["id","h-6f8b794f3246b0c1e1780bb4d4d5dc53"],["onclick","window.location.hash = 'h-6f8b794f3246b0c1e1780bb4d4d5dc53'",1,"anchor"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/ivaylokenov","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov","target","_blank","rel","noopener"],["href","https://github.com/ardalis","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev","target","_blank","rel","noopener"],["href","https://github.com/stefanprodan","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti","target","_blank","rel","noopener"],["href","https://github.com/jbogard","target","_blank","rel","noopener"],["href","https://github.com/BenMorris","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,gi,4,0,"ng-container",5)(6,fi,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),m(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),m(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20),t()(),n(25,"span",21),e(26," ASP.NET Core 9 Testing"),m(27,"span",22)(28,"span",23),n(29,"a",24),m(30,"nz-icon",25),t()(),n(31,"article",26),bt(),n(32,"blockquote",27)(33,"p")(34,"strong"),e(35,"All C# code from this article was tested using "),n(36,"a",28),e(37,".NET Core 9.0.1"),t(),e(38,", modified source code of "),n(39,"a",29),e(40,"MyTested.AspNetCore.Mvc - Fluent Testing Library for ASP.NET Core MVC"),t(),e(41," provided under "),n(42,"a",30),e(43,"Apache License, Version 2.0 or Microsoft Public License (Ms-PL)"),t(),e(44,", and modified source code of "),n(45,"a",31),e(46,"BookStore"),t(),e(47," provided under "),n(48,"a",32),e(49,"MIT License"),t()()()(),n(50,"h2",33)(51,"span"),e(52,"Introduction"),t(),n(53,"a",34),e(54,"#"),t()(),n(55,"p"),e(56,"In this article, we will give an example of testing of .NET Core code. We will use "),n(57,"a",29),e(58,"MyTested"),t(),e(59," - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 9 project is based on "),n(60,"a",31),e(61,"BookStore"),t(),e(62," repository and adapted to work with MyTested library. A full test project example is on "),n(63,"a",35),e(64,"our GitHub repository"),t(),e(65,"."),t(),n(66,"p"),e(67,"The main focus of our example is testing of the standard "),n(68,"code"),e(69,"User Identity"),t(),e(70," provided by "),n(71,"code"),e(72,"Microsoft.AspNetCore.Identity"),t(),e(73,". The access to the user is provided by "),n(74,"code"),e(75,"UserManager<User>"),t(),e(76," micro service. The source code of all our examples is copied and pasted from our actual application. The compiled code of our .NET Core 9 application can be found on "),n(77,"a",36),e(78,"our GitHub repository"),t(),e(79,"."),t(),n(80,"p"),e(81,"One of the advantages of having of a detailed test module for standard "),n(82,"code"),e(83,"Microsoft.AspNetCore.Identity"),t(),e(84," implementation is the fact that it is used very frequently in .NET Core applications. Following, we will give examples of API controller, the implementation of "),n(85,"code"),e(86,"User Identity"),t(),e(87," with Bearer Header Authorization based on JWT token and an example of a comprehensive "),n(88,"code"),e(89,"User Identity"),t(),e(90," controller testing."),t(),n(91,"h2",37)(92,"span"),e(93,"MyTested Library Out of The Box"),t(),n(94,"a",38),e(95,"#"),t()(),n(96,"p"),e(97,"I found out about MyTested for the first time from "),n(98,"a",39),e(99,"BlazorShop"),t(),e(100," repository. At the same time, I found out about "),n(101,"code"),e(102,"JwtAuthentication"),t(),e(103," implementation from same "),n(104,"a",40),e(105,"BlazorShop"),t(),e(106," repository and from "),n(107,"a",41),e(108,"aspnetcore-realworld-example"),t(),e(109," repository. Both "),n(110,"code"),e(111,"JwtAuthentication"),t(),e(112," implementations did not work with original "),n(113,"a",29),e(114,"MyTested"),t(),e(115," library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was able only to add some small pieces of code to make MyTested and my own "),n(116,"code"),e(117,"JwtAuthentication"),t(),e(118," implementation work and not to break any original MyTested tests. But, what MyTested can do out of the box? The best answer is in "),n(119,"a",42),e(120,"MusicStore"),t(),e(121," testing project. For the API controller, "),n(122,"a",43),e(123,"here"),t(),e(124," is an example:"),t(),n(125,"pre",44)(126,"code")(127,"span",45),e(128,"#"),n(129,"span",46),e(130,"if"),t(),e(131," DEBUG"),t(),e(132,`
`),n(133,"span",46),e(134,"using"),t(),e(135,` BlogAngular.Application.Common.Version;
`),n(136,"span",46),e(137,"using"),t(),e(138,` BlogAngular.Web.Features;
`),n(139,"span",46),e(140,"using"),t(),e(141,` MyTested.AspNetCore.Mvc;
`),n(142,"span",46),e(143,"using"),t(),e(144,` Xunit;

`),n(145,"span",46),e(146,"namespace"),t(),e(147," "),n(148,"span",47),e(149,"BlogAngular.Test.Routing"),t(),e(150,`
{
    `),n(151,"span",46),e(152,"public"),t(),e(153," "),n(154,"span",46),e(155,"class"),t(),e(156," "),n(157,"span",47),e(158,"FrontEndRouteTest"),t(),e(159,`
    {
        [`),n(160,"span",45),e(161,"Fact"),t(),e(162,`]
        `),n(163,"span",48)(164,"span",46),e(165,"public"),t(),e(166," "),n(167,"span",46),e(168,"void"),t(),e(169," "),n(170,"span",47),e(171,"VersionShouldBeRouted"),t(),e(172,"()"),t(),e(173,`
            => MyMvc
            .Pipeline()
            .ShouldMap(request => request
                .WithMethod(HttpMethod.Get)
                .WithLocation(`),n(174,"span",49),e(175,'"api/v1.0/version"'),t(),e(176,`))
            .To<VersionController>(c => c.Index())
            .Which()
            .ShouldReturn()
            .ActionResult(result => result.Result(`),n(177,"span",46),e(178,"new"),t(),e(179,` VersionResponseEnvelope
            {
                VersionJson = `),n(180,"span",46),e(181,"new"),t(),e(182,` VersionResponseModel()
            }));
    }
}
`),n(183,"span",45),e(184,"#"),n(185,"span",46),e(186,"endif"),t()()()(),n(187,"h2",50)(188,"span"),e(189,".NET Core Identity Controller Implementation"),t(),n(190,"a",51),e(191,"#"),t()(),n(192,"p"),e(193,"Our controller implementation is based on "),n(194,"a",52),e(195,"this GitHub repository"),t(),e(196,". We added two more methods: "),n(197,"code"),e(198,"LoginPassword"),t(),e(199," and "),n(200,"code"),e(201,"Update"),t(),e(202," with "),n(203,"code"),e(204,"[Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy)]"),t(),e(205," attribute that uses Bearer Header Authorization based on JWT token implementation provided by .NET Core 9. Our Angular 18 application that runs in a web browser will make a request to the endpoint "),n(206,"code"),e(207,"http://localhost:1503/api/v1.0/identity/update"),t(),e(208,". The request has an Authorization header with a JWT token. The request body has some data in JSON format. Our .NET Core 9 application must authenticate the user based on the JWT token and authorize the user based on a specific policy. Once the user passes the authorization process, the application must execute a command and return some data in JSON format. Below, we give an example of an "),n(209,"a",53),e(210,"API controller"),t()(),n(211,"h3",54)(212,"span"),e(213,"IdentityController"),t(),n(214,"a",55),e(215,"#"),t()(),n(216,"pre",44)(217,"code")(218,"span",46),e(219,"using"),t(),e(220,` BlogAngular.Application.Identity.Commands.Common;
`),n(221,"span",46),e(222,"using"),t(),e(223,` BlogAngular.Application.Identity.Commands.Login;
`),n(224,"span",46),e(225,"using"),t(),e(226,` BlogAngular.Application.Identity.Commands.Register;
`),n(227,"span",46),e(228,"using"),t(),e(229,` BlogAngular.Application.Identity.Commands.Update;
`),n(230,"span",46),e(231,"using"),t(),e(232,` Microsoft.AspNetCore.Authorization;
`),n(233,"span",46),e(234,"using"),t(),e(235,` Microsoft.AspNetCore.Mvc;
`),n(236,"span",46),e(237,"using"),t(),e(238,` System.Threading.Tasks;

`),n(239,"span",46),e(240,"using"),t(),e(241," "),n(242,"span",46),e(243,"static"),t(),e(244,` BlogAngular.Domain.Common.Models.ModelConstants.Identity;

`),n(245,"span",46),e(246,"namespace"),t(),e(247," "),n(248,"span",47),e(249,"BlogAngular.Web.Features"),t(),e(250,`
{
    `),n(251,"span",46),e(252,"public"),t(),e(253," "),n(254,"span",46),e(255,"class"),t(),e(256," "),n(257,"span",47),e(258,"IdentityController"),t(),e(259," : "),n(260,"span",47),e(261,"ApiController"),t(),e(262,`
    {
        [`),n(263,"span",45),e(264,"HttpPost"),t(),e(265,`]
        [`),n(266,"span",45),e(267,"Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)"),t(),e(268,`]
        `),n(269,"span",46),e(270,"public"),t(),e(271," "),n(272,"span",46),e(273,"async"),t(),e(274,` Task<ActionResult<UserResponseEnvelope>> LoginPassword(
            LoginPasswordCommand command)
            => `),n(275,"span",46),e(276,"await"),t(),e(277," "),n(278,"span",46),e(279,"this"),t(),e(280,`.Send(command);

        [`),n(281,"span",45),e(282,"HttpPost"),t(),e(283,`]
        [`),n(284,"span",45),e(285,"Route(nameof(Login))"),t(),e(286,`]
        `),n(287,"span",46),e(288,"public"),t(),e(289," "),n(290,"span",46),e(291,"async"),t(),e(292,` Task<ActionResult<UserResponseEnvelope>> Login(
            UserLoginCommand command)
            => `),n(293,"span",46),e(294,"await"),t(),e(295," "),n(296,"span",46),e(297,"this"),t(),e(298,`.Send(command);

        [`),n(299,"span",45),e(300,"HttpPost"),t(),e(301,`]
        [`),n(302,"span",45),e(303,"Route(nameof(Register))"),t(),e(304,`]
        `),n(305,"span",46),e(306,"public"),t(),e(307," "),n(308,"span",46),e(309,"async"),t(),e(310,` Task<ActionResult<UserResponseEnvelope>> Register(
            UserRegisterCommand command)
            => `),n(311,"span",46),e(312,"await"),t(),e(313," "),n(314,"span",46),e(315,"this"),t(),e(316,`.Send(command);

        [`),n(317,"span",45),e(318,"HttpPut"),t(),e(319,`]
        [`),n(320,"span",45),e(321,"Route(nameof(Update))"),t(),e(322,`]
        [`),n(323,"span",45),e(324,"Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)"),t(),e(325,`]
        `),n(326,"span",46),e(327,"public"),t(),e(328," "),n(329,"span",46),e(330,"async"),t(),e(331,` Task<ActionResult<UserResponseEnvelope>> Update(
            UserUpdateCommand command)
            => `),n(332,"span",46),e(333,"await"),t(),e(334," "),n(335,"span",46),e(336,"this"),t(),e(337,`.Send(command);
    }
}`),t()(),n(338,"h2",56)(339,"span"),e(340,".NET Core Identity Service Implementation"),t(),n(341,"a",57),e(342,"#"),t()(),n(343,"p"),e(344,"Our service implementation is based on "),n(345,"a",58),e(346,"this GitHub repository"),t(),e(347,". As we said earlier, this kind of "),n(348,"code"),e(349,"Identity Service"),t(),e(350," will look the same for all .NET Core 9 applications that use a standard "),n(351,"code"),e(352,"Microsoft.AspNetCore.Identity"),t(),e(353," implementation. Below, there is an example that we copied and pasted direct from our actual application."),t(),n(354,"h3",59)(355,"span"),e(356,"IdentityService"),t(),n(357,"a",60),e(358,"#"),t()(),n(359,"pre",44)(360,"code")(361,"span",46),e(362,"using"),t(),e(363,` BlogAngular.Application.Common;
`),n(364,"span",46),e(365,"using"),t(),e(366,` BlogAngular.Application.Common.Models;
`),n(367,"span",46),e(368,"using"),t(),e(369,` BlogAngular.Application.Identity;
`),n(370,"span",46),e(371,"using"),t(),e(372,` BlogAngular.Application.Identity.Commands.Common;
`),n(373,"span",46),e(374,"using"),t(),e(375,` BlogAngular.Application.Identity.Commands.Register;
`),n(376,"span",46),e(377,"using"),t(),e(378,` BlogAngular.Application.Identity.Commands.Update;
`),n(379,"span",46),e(380,"using"),t(),e(381,` BlogAngular.Application.Identity.Queries.Profile;
`),n(382,"span",46),e(383,"using"),t(),e(384,` BlogAngular.Domain.Common.Events.Identity;
`),n(385,"span",46),e(386,"using"),t(),e(387,` BlogAngular.Infrastructure.Common.Events;
`),n(388,"span",46),e(389,"using"),t(),e(390,` BlogAngular.Infrastructure.Common.Extensions;
`),n(391,"span",46),e(392,"using"),t(),e(393,` Microsoft.AspNetCore.Hosting;
`),n(394,"span",46),e(395,"using"),t(),e(396,` Microsoft.AspNetCore.Http;
`),n(397,"span",46),e(398,"using"),t(),e(399,` Microsoft.AspNetCore.Identity;
`),n(400,"span",46),e(401,"using"),t(),e(402,` Microsoft.Extensions.Options;
`),n(403,"span",46),e(404,"using"),t(),e(405,` System;
`),n(406,"span",46),e(407,"using"),t(),e(408,` System.Collections.Generic;
`),n(409,"span",46),e(410,"using"),t(),e(411,` System.Security.Claims;
`),n(412,"span",46),e(413,"using"),t(),e(414,` System.Threading.Tasks;

`),n(415,"span",46),e(416,"namespace"),t(),e(417," "),n(418,"span",47),e(419,"BlogAngular.Infrastructure.Identity.Services"),t(),e(420,`
{
    `),n(421,"span",48)(422,"span",46),e(423,"internal"),t(),e(424," "),n(425,"span",46),e(426,"class"),t(),e(427," "),n(428,"span",47),e(429,"IdentityService"),t(),e(430,"("),n(431,"span",61),e(432,`
        IWebHostEnvironment env,
        UserManager<User> userManager,
        IJwtGenerator jwtGenerator,
        IEventDispatcher eventDispatcher,
        IOptions<ApplicationSettings> applicationSettings,
        IHttpContextAccessor httpContextAccessor
            `),t(),e(433,") : IIdentity"),t(),e(434,`
    {
        `),n(435,"span",46),e(436,"private"),t(),e(437," "),n(438,"span",46),e(439,"const"),t(),e(440," "),n(441,"span",62),e(442,"string"),t(),e(443," InvalidErrorMessage = "),n(444,"span",49),e(445,'"Invalid credentials."'),t(),e(446,`;
        `),n(447,"span",46),e(448,"private"),t(),e(449," "),n(450,"span",46),e(451,"const"),t(),e(452," "),n(453,"span",62),e(454,"string"),t(),e(455," NoDataErrorMessage = "),n(456,"span",49),e(457,'"There is no data to process."'),t(),e(458,`;
        `),n(459,"span",46),e(460,"private"),t(),e(461," "),n(462,"span",46),e(463,"const"),t(),e(464," "),n(465,"span",62),e(466,"string"),t(),e(467," IdentityErrorMessage = "),n(468,"span",49),e(469,'"Something went wrong. The server may be down."'),t(),e(470,`;
        `),n(471,"span",46),e(472,"private"),t(),e(473," "),n(474,"span",46),e(475,"const"),t(),e(476," "),n(477,"span",62),e(478,"string"),t(),e(479," IdentityRoleErrorMessage = "),n(480,"span",49),e(481,'@"Cannot find role {0}"'),t(),e(482,`;
        `),n(483,"span",46),e(484,"private"),t(),e(485," "),n(486,"span",46),e(487,"const"),t(),e(488," "),n(489,"span",62),e(490,"string"),t(),e(491," UserNameTakenErrorMessage = "),n(492,"span",49),e(493,'"The user name has been taken."'),t(),e(494,`;
        `),n(495,"span",46),e(496,"private"),t(),e(497," "),n(498,"span",46),e(499,"const"),t(),e(500," "),n(501,"span",62),e(502,"string"),t(),e(503," EmailTakenErrorMessage = "),n(504,"span",49),e(505,'"The email has been taken."'),t(),e(506,`;
        `),n(507,"span",46),e(508,"private"),t(),e(509," "),n(510,"span",46),e(511,"const"),t(),e(512," "),n(513,"span",62),e(514,"string"),t(),e(515," UserNullErrorMessage = "),n(516,"span",49),e(517,'"Cannot find user by Id."'),t(),e(518,`;
        `),n(519,"span",46),e(520,"private"),t(),e(521," "),n(522,"span",46),e(523,"const"),t(),e(524," "),n(525,"span",62),e(526,"string"),t(),e(527," ProfileErrorMessage = "),n(528,"span",49),e(529,'"Cannot find user profile."'),t(),e(530,`;
        `),n(531,"span",46),e(532,"private"),t(),e(533," "),n(534,"span",46),e(535,"const"),t(),e(536," "),n(537,"span",62),e(538,"string"),t(),e(539," UsernameFormatErrorMessage = "),n(540,"span",49),e(541,'"Username must contain letters and numbers."'),t(),e(542,`;
        `),n(543,"span",46),e(544,"private"),t(),e(545," "),n(546,"span",46),e(547,"const"),t(),e(548," "),n(549,"span",62),e(550,"string"),t(),e(551," PasswordFormatErrorMessage = "),n(552,"span",49),e(553,'"Password required upper and lower case letters, digits, and at least one special symbol."'),t(),e(554,`;
        `),n(555,"span",46),e(556,"private"),t(),e(557," "),n(558,"span",46),e(559,"const"),t(),e(560," "),n(561,"span",62),e(562,"string"),t(),e(563," PasswordDeletedErrorMessage = "),n(564,"span",49),e(565,'"The old password was deleted. You must provide a new password."'),t(),e(566,`;
        `),n(567,"span",46),e(568,"private"),t(),e(569," "),n(570,"span",46),e(571,"const"),t(),e(572," "),n(573,"span",62),e(574,"string"),t(),e(575," LockoutErrorMessage = "),n(576,"span",49),e(577,'@"You have been lockout for {0} minutes.{1}"'),t(),e(578,`;
        `),n(579,"span",46),e(580,"private"),t(),e(581," "),n(582,"span",46),e(583,"const"),t(),e(584," "),n(585,"span",62),e(586,"string"),t(),e(587," LockoutEnabledErrorMessage = "),n(588,"span",49),e(589,'"Lockout setting is not enabled."'),t(),e(590,`;

        `),n(591,"span",46),e(592,"private"),t(),e(593," "),n(594,"span",46),e(595,"readonly"),t(),e(596,` IWebHostEnvironment env = env;
        `),n(597,"span",46),e(598,"private"),t(),e(599," "),n(600,"span",46),e(601,"readonly"),t(),e(602,` UserManager<User> userManager = userManager;
        `),n(603,"span",46),e(604,"private"),t(),e(605," "),n(606,"span",46),e(607,"readonly"),t(),e(608,` IJwtGenerator jwtGenerator = jwtGenerator;
        `),n(609,"span",46),e(610,"private"),t(),e(611," "),n(612,"span",46),e(613,"readonly"),t(),e(614,` IEventDispatcher eventDispatcher = eventDispatcher;
        `),n(615,"span",46),e(616,"private"),t(),e(617," "),n(618,"span",46),e(619,"readonly"),t(),e(620,` ApplicationSettings applicationSettings = applicationSettings.Value;
        `),n(621,"span",46),e(622,"private"),t(),e(623," "),n(624,"span",46),e(625,"readonly"),t(),e(626,` IHttpContextAccessor httpContextAccessor = httpContextAccessor;
        `),n(627,"span",46),e(628,"internal"),t(),e(629," "),n(630,"span",46),e(631,"static"),t(),e(632," "),n(633,"span",46),e(634,"readonly"),t(),e(635," "),n(636,"span",62),e(637,"string"),t(),e(638,"[] registerNotImplemented = ["),n(639,"span",49),e(640,'"Register is not implemented yet."'),t(),e(641,`];

        `),n(642,"span",45),e(643,"#"),n(644,"span",46),e(645,"region"),t(),e(646," IsInRoleAsync"),t(),e(647,`
        `),n(648,"span",46),e(649,"public"),t(),e(650," "),n(651,"span",46),e(652,"async"),t(),e(653," Task<Result<"),n(654,"span",62),e(655,"bool"),t(),e(656,`>> IsInRoleAsync()
        {
            ClaimsPrincipal? claimsPrincipal = `),n(657,"span",46),e(658,"this"),t(),e(659,`.httpContextAccessor.HttpContext!.User!;
            `),n(660,"span",46),e(661,"if"),t(),e(662," (claimsPrincipal != "),n(663,"span",63),e(664,"null"),t(),e(665,`)
            {
                `),n(666,"span",46),e(667,"var"),t(),e(668,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),n(669,"span",46),e(670,"if"),t(),e(671," (isAuthenticated == "),n(672,"span",63),e(673,"null"),t(),e(674," || !("),n(675,"span",62),e(676,"bool"),t(),e(677,`)isAuthenticated)
                {
                    `),n(678,"span",46),e(679,"return"),t(),e(680," Result<"),n(681,"span",62),e(682,"bool"),t(),e(683,">.Failure("),n(684,"span",46),e(685,"new"),t(),e(686," Dictionary<"),n(687,"span",62),e(688,"string"),t(),e(689,", "),n(690,"span",62),e(691,"string"),t(),e(692,`[]>
                {
                    { `),n(693,"span",49),e(694,'"identity_error"'),t(),e(695,", "),n(696,"span",46),e(697,"new"),t(),e(698,`[] { IdentityErrorMessage } }
                });
                }
            }
            `),n(699,"span",46),e(700,"else"),t(),e(701,`
            {
                `),n(702,"span",46),e(703,"return"),t(),e(704," Result<"),n(705,"span",62),e(706,"bool"),t(),e(707,">.Failure("),n(708,"span",46),e(709,"new"),t(),e(710," Dictionary<"),n(711,"span",62),e(712,"string"),t(),e(713,", "),n(714,"span",62),e(715,"string"),t(),e(716,`[]>
            {
                { `),n(717,"span",49),e(718,'"identity_error"'),t(),e(719,", "),n(720,"span",46),e(721,"new"),t(),e(722,`[] { IdentityErrorMessage } }
            });
            }

            User? user;
            `),n(723,"span",46),e(724,"if"),t(),e(725," ("),n(726,"span",46),e(727,"this"),t(),e(728,".env.EnvironmentName == "),n(729,"span",49),e(730,'"Test"'),t(),e(731,`)
            {
                `),n(732,"span",46),e(733,"var"),t(),e(734,` name = claimsPrincipal.Identity?.Name;
                `),n(735,"span",46),e(736,"if"),t(),e(737," (name == "),n(738,"span",63),e(739,"null"),t(),e(740,`)
                {
                    `),n(741,"span",46),e(742,"return"),t(),e(743," Result<"),n(744,"span",62),e(745,"bool"),t(),e(746,">.Failure("),n(747,"span",46),e(748,"new"),t(),e(749," Dictionary<"),n(750,"span",62),e(751,"string"),t(),e(752,", "),n(753,"span",62),e(754,"string"),t(),e(755,`[]>
                {
                    { `),n(756,"span",49),e(757,'"debug_error"'),t(),e(758,", "),n(759,"span",46),e(760,"new"),t(),e(761,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(762,"span",46),e(763,"await"),t(),e(764," "),n(765,"span",46),e(766,"this"),t(),e(767,`.userManager.FindByEmailAsync(name);
            }
            `),n(768,"span",46),e(769,"else"),t(),e(770,`
            {
                `),n(771,"span",46),e(772,"var"),t(),e(773,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),n(774,"span",46),e(775,"if"),t(),e(776," (claim == "),n(777,"span",63),e(778,"null"),t(),e(779,`)
                {
                    `),n(780,"span",46),e(781,"return"),t(),e(782," Result<"),n(783,"span",62),e(784,"bool"),t(),e(785,">.Failure("),n(786,"span",46),e(787,"new"),t(),e(788," Dictionary<"),n(789,"span",62),e(790,"string"),t(),e(791,", "),n(792,"span",62),e(793,"string"),t(),e(794,`[]>
                {
                    { `),n(795,"span",49),e(796,'"name_identifier_error"'),t(),e(797,", "),n(798,"span",46),e(799,"new"),t(),e(800,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(801,"span",46),e(802,"await"),t(),e(803," "),n(804,"span",46),e(805,"this"),t(),e(806,`.userManager.FindByIdAsync(claim.Value);
            }

            `),n(807,"span",46),e(808,"if"),t(),e(809," (user == "),n(810,"span",63),e(811,"null"),t(),e(812,`)
            {
                `),n(813,"span",46),e(814,"return"),t(),e(815," Result<"),n(816,"span",62),e(817,"bool"),t(),e(818,">.Failure("),n(819,"span",46),e(820,"new"),t(),e(821," Dictionary<"),n(822,"span",62),e(823,"string"),t(),e(824,", "),n(825,"span",62),e(826,"string"),t(),e(827,`[]>
            {
                { `),n(828,"span",49),e(829,'"user_error"'),t(),e(830,", "),n(831,"span",46),e(832,"new"),t(),e(833,`[] { UserNullErrorMessage } }
            });
            }

            `),n(834,"span",46),e(835,"var"),t(),e(836,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),n(837,"span",46),e(838,"if"),t(),e(839," (claimRole == "),n(840,"span",63),e(841,"null"),t(),e(842,`)
            {
                `),n(843,"span",46),e(844,"return"),t(),e(845," Result<"),n(846,"span",62),e(847,"bool"),t(),e(848,">.Failure("),n(849,"span",46),e(850,"new"),t(),e(851," Dictionary<"),n(852,"span",62),e(853,"string"),t(),e(854,", "),n(855,"span",62),e(856,"string"),t(),e(857,`[]>
                {
                    { `),n(858,"span",49),e(859,'"is_in_role_error"'),t(),e(860,", "),n(861,"span",46),e(862,"new"),t(),e(863,"[] { "),n(864,"span",62),e(865,"string"),t(),e(866,".Format(IdentityRoleErrorMessage, "),n(867,"span",49),e(868,'""'),t(),e(869,`) } }
                });
            }
            `),n(870,"span",46),e(871,"var"),t(),e(872," isInRole = "),n(873,"span",46),e(874,"await"),t(),e(875," "),n(876,"span",46),e(877,"this"),t(),e(878,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),n(879,"span",46),e(880,"if"),t(),e(881,` (!isInRole)
            {
                `),n(882,"span",46),e(883,"return"),t(),e(884," Result<"),n(885,"span",62),e(886,"bool"),t(),e(887,">.Failure("),n(888,"span",46),e(889,"new"),t(),e(890," Dictionary<"),n(891,"span",62),e(892,"string"),t(),e(893,", "),n(894,"span",62),e(895,"string"),t(),e(896,`[]>
                {
                    { `),n(897,"span",49),e(898,'"is_in_role_error"'),t(),e(899,", "),n(900,"span",46),e(901,"new"),t(),e(902,"[] { "),n(903,"span",62),e(904,"string"),t(),e(905,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),n(906,"span",46),e(907,"return"),t(),e(908," "),n(909,"span",63),e(910,"true"),t(),e(911,`;
        }
        `),n(912,"span",45),e(913,"#"),n(914,"span",46),e(915,"endregion"),t()(),e(916,`

        `),n(917,"span",45),e(918,"#"),n(919,"span",46),e(920,"region"),t(),e(921," LoginPassword  "),t(),e(922,`
        `),n(923,"span",46),e(924,"public"),t(),e(925," "),n(926,"span",46),e(927,"async"),t(),e(928,` Task<Result<UserResponseEnvelope>> LoginPassword(LoginPasswordCommand userRequest)
        {
            `),n(929,"span",46),e(930,"if"),t(),e(931," (userRequest.UserJson.Password == "),n(932,"span",63),e(933,"null"),t(),e(934,`)
            {
                `),n(935,"span",46),e(936,"return"),t(),e(937," Result<UserResponseEnvelope>.Failure("),n(938,"span",46),e(939,"new"),t(),e(940," Dictionary<"),n(941,"span",62),e(942,"string"),t(),e(943,", "),n(944,"span",62),e(945,"string"),t(),e(946,`[]>
            {
                { `),n(947,"span",49),e(948,'"no_data_error"'),t(),e(949,", "),n(950,"span",46),e(951,"new"),t(),e(952,`[] { NoDataErrorMessage } }
            });
            }

            `),n(953,"span",62),e(954,"bool"),t(),e(955," isNewToken = "),n(956,"span",63),e(957,"false"),t(),e(958,`;
            ClaimsPrincipal? claimsPrincipal = `),n(959,"span",46),e(960,"this"),t(),e(961,`.httpContextAccessor.HttpContext!.User!;
            `),n(962,"span",46),e(963,"if"),t(),e(964," (claimsPrincipal != "),n(965,"span",63),e(966,"null"),t(),e(967,`)
            {
                `),n(968,"span",46),e(969,"var"),t(),e(970,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),n(971,"span",46),e(972,"if"),t(),e(973," (isAuthenticated == "),n(974,"span",63),e(975,"null"),t(),e(976," || !("),n(977,"span",62),e(978,"bool"),t(),e(979,`)isAuthenticated)
                {
                    `),n(980,"span",46),e(981,"return"),t(),e(982," Result<UserResponseEnvelope>.Failure("),n(983,"span",46),e(984,"new"),t(),e(985," Dictionary<"),n(986,"span",62),e(987,"string"),t(),e(988,", "),n(989,"span",62),e(990,"string"),t(),e(991,`[]>
                {
                    { `),n(992,"span",49),e(993,'"identity_error"'),t(),e(994,", "),n(995,"span",46),e(996,"new"),t(),e(997,`[] { IdentityErrorMessage } }
                });
                }
                `),n(998,"span",46),e(999,"var"),t(),e(1e3," iat = claimsPrincipal.FindFirst("),n(1001,"span",49),e(1002,'"iat"'),t(),e(1003,`);
                `),n(1004,"span",46),e(1005,"var"),t(),e(1006," exp = claimsPrincipal.FindFirst("),n(1007,"span",49),e(1008,'"exp"'),t(),e(1009,`);
                `),n(1010,"span",46),e(1011,"if"),t(),e(1012," (iat == "),n(1013,"span",63),e(1014,"null"),t(),e(1015," || exp == "),n(1016,"span",63),e(1017,"null"),t(),e(1018,`)
                {
                    `),n(1019,"span",46),e(1020,"return"),t(),e(1021," Result<UserResponseEnvelope>.Failure("),n(1022,"span",46),e(1023,"new"),t(),e(1024," Dictionary<"),n(1025,"span",62),e(1026,"string"),t(),e(1027,", "),n(1028,"span",62),e(1029,"string"),t(),e(1030,`[]>
                {
                    { `),n(1031,"span",49),e(1032,'"identity_error"'),t(),e(1033,", "),n(1034,"span",46),e(1035,"new"),t(),e(1036,`[] { IdentityErrorMessage } }
                });
                }

                `),n(1037,"span",46),e(1038,"var"),t(),e(1039," rate = ("),n(1040,"span",62),e(1041,"long"),t(),e(1042,".Parse(exp.Value) - "),n(1043,"span",62),e(1044,"long"),t(),e(1045,`.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                `),n(1046,"span",46),e(1047,"var"),t(),e(1048," current = "),n(1049,"span",62),e(1050,"long"),t(),e(1051,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            `),n(1052,"span",46),e(1053,"else"),t(),e(1054,`
            {
                `),n(1055,"span",46),e(1056,"return"),t(),e(1057," Result<UserResponseEnvelope>.Failure("),n(1058,"span",46),e(1059,"new"),t(),e(1060," Dictionary<"),n(1061,"span",62),e(1062,"string"),t(),e(1063,", "),n(1064,"span",62),e(1065,"string"),t(),e(1066,`[]>
            {
                { `),n(1067,"span",49),e(1068,'"identity_error"'),t(),e(1069,", "),n(1070,"span",46),e(1071,"new"),t(),e(1072,`[] { IdentityErrorMessage } }
            });
            }

            User? user;
            `),n(1073,"span",46),e(1074,"if"),t(),e(1075," ("),n(1076,"span",46),e(1077,"this"),t(),e(1078,".env.EnvironmentName == "),n(1079,"span",49),e(1080,'"Test"'),t(),e(1081,`)
            {
                `),n(1082,"span",46),e(1083,"var"),t(),e(1084,` name = claimsPrincipal.Identity?.Name;
                `),n(1085,"span",46),e(1086,"if"),t(),e(1087," (name == "),n(1088,"span",63),e(1089,"null"),t(),e(1090,`)
                {
                    `),n(1091,"span",46),e(1092,"return"),t(),e(1093," Result<UserResponseEnvelope>.Failure("),n(1094,"span",46),e(1095,"new"),t(),e(1096," Dictionary<"),n(1097,"span",62),e(1098,"string"),t(),e(1099,", "),n(1100,"span",62),e(1101,"string"),t(),e(1102,`[]>
                {
                    { `),n(1103,"span",49),e(1104,'"debug_error"'),t(),e(1105,", "),n(1106,"span",46),e(1107,"new"),t(),e(1108,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(1109,"span",46),e(1110,"await"),t(),e(1111," "),n(1112,"span",46),e(1113,"this"),t(),e(1114,`.userManager.FindByEmailAsync(name);
            }
            `),n(1115,"span",46),e(1116,"else"),t(),e(1117,`
            {
                `),n(1118,"span",46),e(1119,"var"),t(),e(1120,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),n(1121,"span",46),e(1122,"if"),t(),e(1123," (claim == "),n(1124,"span",63),e(1125,"null"),t(),e(1126,`)
                {
                    `),n(1127,"span",46),e(1128,"return"),t(),e(1129," Result<UserResponseEnvelope>.Failure("),n(1130,"span",46),e(1131,"new"),t(),e(1132," Dictionary<"),n(1133,"span",62),e(1134,"string"),t(),e(1135,", "),n(1136,"span",62),e(1137,"string"),t(),e(1138,`[]>
                {
                    { `),n(1139,"span",49),e(1140,'"name_identifier_error"'),t(),e(1141,", "),n(1142,"span",46),e(1143,"new"),t(),e(1144,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(1145,"span",46),e(1146,"await"),t(),e(1147," "),n(1148,"span",46),e(1149,"this"),t(),e(1150,`.userManager.FindByIdAsync(claim.Value);
            }

            `),n(1151,"span",46),e(1152,"if"),t(),e(1153," (user == "),n(1154,"span",63),e(1155,"null"),t(),e(1156,`)
            {
                `),n(1157,"span",46),e(1158,"return"),t(),e(1159," Result<UserResponseEnvelope>.Failure("),n(1160,"span",46),e(1161,"new"),t(),e(1162," Dictionary<"),n(1163,"span",62),e(1164,"string"),t(),e(1165,", "),n(1166,"span",62),e(1167,"string"),t(),e(1168,`[]>
            {
                { `),n(1169,"span",49),e(1170,'"user_error"'),t(),e(1171,", "),n(1172,"span",46),e(1173,"new"),t(),e(1174,`[] { UserNullErrorMessage } }
            });
            }

            `),n(1175,"span",46),e(1176,"var"),t(),e(1177,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),n(1178,"span",46),e(1179,"if"),t(),e(1180," (claimRole == "),n(1181,"span",63),e(1182,"null"),t(),e(1183,`)
            {
                `),n(1184,"span",46),e(1185,"return"),t(),e(1186," Result<UserResponseEnvelope>.Failure("),n(1187,"span",46),e(1188,"new"),t(),e(1189," Dictionary<"),n(1190,"span",62),e(1191,"string"),t(),e(1192,", "),n(1193,"span",62),e(1194,"string"),t(),e(1195,`[]>
                {
                    { `),n(1196,"span",49),e(1197,'"is_in_role_error"'),t(),e(1198,", "),n(1199,"span",46),e(1200,"new"),t(),e(1201,"[] { "),n(1202,"span",62),e(1203,"string"),t(),e(1204,".Format(IdentityRoleErrorMessage, "),n(1205,"span",49),e(1206,'""'),t(),e(1207,`) } }
                });
            }
            `),n(1208,"span",46),e(1209,"var"),t(),e(1210," isInRole = "),n(1211,"span",46),e(1212,"await"),t(),e(1213," "),n(1214,"span",46),e(1215,"this"),t(),e(1216,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),n(1217,"span",46),e(1218,"if"),t(),e(1219,` (!isInRole)
            {
                `),n(1220,"span",46),e(1221,"return"),t(),e(1222," Result<UserResponseEnvelope>.Failure("),n(1223,"span",46),e(1224,"new"),t(),e(1225," Dictionary<"),n(1226,"span",62),e(1227,"string"),t(),e(1228,", "),n(1229,"span",62),e(1230,"string"),t(),e(1231,`[]>
                {
                    { `),n(1232,"span",49),e(1233,'"is_in_role_error"'),t(),e(1234,", "),n(1235,"span",46),e(1236,"new"),t(),e(1237,"[] { "),n(1238,"span",62),e(1239,"string"),t(),e(1240,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),n(1241,"span",46),e(1242,"var"),t(),e(1243," isLockoutEnabled = "),n(1244,"span",46),e(1245,"await"),t(),e(1246,` userManager.GetLockoutEnabledAsync(user);

            `),n(1247,"span",46),e(1248,"if"),t(),e(1249,` (isLockoutEnabled)
            {
                `),n(1250,"span",46),e(1251,"var"),t(),e(1252," count = "),n(1253,"span",46),e(1254,"await"),t(),e(1255,` userManager.GetAccessFailedCountAsync(user);
                `),n(1256,"span",46),e(1257,"if"),t(),e(1258," (count == applicationSettings.MaxFailedAccessAttempts - "),n(1259,"span",64),e(1260,"1"),t(),e(1261,`)
                {
                    `),n(1262,"span",46),e(1263,"var"),t(),e(1264," endDate = "),n(1265,"span",46),e(1266,"await"),t(),e(1267,` userManager.GetLockoutEndDateAsync(user);
                    `),n(1268,"span",46),e(1269,"var"),t(),e(1270,` currentDate = DateTimeOffset.UtcNow;
                    `),n(1271,"span",46),e(1272,"if"),t(),e(1273,` (endDate > currentDate)
                    {
                        `),n(1274,"span",46),e(1275,"return"),t(),e(1276," Result<UserResponseEnvelope>.Failure("),n(1277,"span",46),e(1278,"new"),t(),e(1279," Dictionary<"),n(1280,"span",62),e(1281,"string"),t(),e(1282,", "),n(1283,"span",62),e(1284,"string"),t(),e(1285,`[]>
                    {
                        { `),n(1286,"span",49),e(1287,'"lockout_error"'),t(),e(1288,", "),n(1289,"span",46),e(1290,"new"),t(),e(1291,"[] {  "),n(1292,"span",62),e(1293,"string"),t(),e(1294,".Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,"),n(1295,"span",49),e(1296,'""'),t(),e(1297,`) } }
                    });
                    }
                }

                `),n(1298,"span",46),e(1299,"var"),t(),e(1300," passwordValid = "),n(1301,"span",46),e(1302,"await"),t(),e(1303," "),n(1304,"span",46),e(1305,"this"),t(),e(1306,`.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                `),n(1307,"span",46),e(1308,"if"),t(),e(1309,` (!passwordValid)
                {
                    `),n(1310,"span",46),e(1311,"var"),t(),e(1312," accessFailed = "),n(1313,"span",46),e(1314,"await"),t(),e(1315," "),n(1316,"span",46),e(1317,"this"),t(),e(1318,`.userManager.AccessFailedAsync(user);
                    `),n(1319,"span",46),e(1320,"if"),t(),e(1321,` (!accessFailed.Succeeded)
                    {
                        `),n(1322,"span",46),e(1323,"var"),t(),e(1324," errors = "),n(1325,"span",46),e(1326,"new"),t(),e(1327," Dictionary<"),n(1328,"span",62),e(1329,"string"),t(),e(1330,", "),n(1331,"span",62),e(1332,"string"),t(),e(1333,`[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            `),n(1334,"span",46),e(1335,"switch"),t(),e(1336,` (e.Code)
                            {
                                `),n(1337,"span",46),e(1338,"case"),t(),e(1339," "),n(1340,"span",49),e(1341,'"TODO: need to debug e.Code"'),t(),e(1342,`:
                                    e.Description = `),n(1343,"span",62),e(1344,"string"),t(),e(1345,".Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, "),n(1346,"span",49),e(1347,'""'),t(),e(1348,`);
                                    `),n(1349,"span",46),e(1350,"break"),t(),e(1351,`;
                            }

                            e.Description = `),n(1352,"span",62),e(1353,"string"),t(),e(1354,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, [e.Description]);
                        });

                        `),n(1355,"span",46),e(1356,"return"),t(),e(1357,` Result<UserResponseEnvelope>.Failure(errors);
                    }

                    `),n(1358,"span",46),e(1359,"return"),t(),e(1360," Result<UserResponseEnvelope>.Failure("),n(1361,"span",46),e(1362,"new"),t(),e(1363," Dictionary<"),n(1364,"span",62),e(1365,"string"),t(),e(1366,", "),n(1367,"span",62),e(1368,"string"),t(),e(1369,`[]>
                {
                    { `),n(1370,"span",49),e(1371,'"invalid_error"'),t(),e(1372,", "),n(1373,"span",46),e(1374,"new"),t(),e(1375,`[] { InvalidErrorMessage } }
                });
                }
            }
            `),n(1376,"span",46),e(1377,"else"),t(),e(1378,`
            {
                `),n(1379,"span",46),e(1380,"if"),t(),e(1381," ("),n(1382,"span",46),e(1383,"this"),t(),e(1384,".env.EnvironmentName == "),n(1385,"span",49),e(1386,'"Test"'),t(),e(1387,`)
                {
                    `),n(1388,"span",46),e(1389,"var"),t(),e(1390," passwordValid = "),n(1391,"span",46),e(1392,"await"),t(),e(1393," "),n(1394,"span",46),e(1395,"this"),t(),e(1396,`.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    `),n(1397,"span",46),e(1398,"if"),t(),e(1399,` (!passwordValid)
                    {
                        `),n(1400,"span",46),e(1401,"return"),t(),e(1402," Result<UserResponseEnvelope>.Failure("),n(1403,"span",46),e(1404,"new"),t(),e(1405," Dictionary<"),n(1406,"span",62),e(1407,"string"),t(),e(1408,", "),n(1409,"span",62),e(1410,"string"),t(),e(1411,`[]>
                    {
                        { `),n(1412,"span",49),e(1413,'"invalid_error"'),t(),e(1414,", "),n(1415,"span",46),e(1416,"new"),t(),e(1417,`[] { InvalidErrorMessage } }
                    });
                    }
                }
                `),n(1418,"span",46),e(1419,"else"),t(),e(1420,`
                {
                    `),n(1421,"span",46),e(1422,"return"),t(),e(1423," Result<UserResponseEnvelope>.Failure("),n(1424,"span",46),e(1425,"new"),t(),e(1426," Dictionary<"),n(1427,"span",62),e(1428,"string"),t(),e(1429,", "),n(1430,"span",62),e(1431,"string"),t(),e(1432,`[]>
                {
                    { `),n(1433,"span",49),e(1434,'"lockout_enabled_error"'),t(),e(1435,", "),n(1436,"span",46),e(1437,"new"),t(),e(1438,`[] { LockoutEnabledErrorMessage } }
                });
                }
            }

            `),n(1439,"span",62),e(1440,"string"),t(),e(1441,`? token;
            `),n(1442,"span",46),e(1443,"if"),t(),e(1444," ("),n(1445,"span",46),e(1446,"this"),t(),e(1447,".env.EnvironmentName == "),n(1448,"span",49),e(1449,'"Test"'),t(),e(1450,`)
            {
                token = `),n(1451,"span",49),e(1452,'$"Token: '),n(1453,"span",65),e(1454,"{user.Email}"),t(),e(1455,'"'),t(),e(1456,`;
            }
            `),n(1457,"span",46),e(1458,"else"),t(),e(1459,`
            {
                token = isNewToken ? `),n(1460,"span",46),e(1461,"await"),t(),e(1462," "),n(1463,"span",46),e(1464,"this"),t(),e(1465,`.jwtGenerator.GenerateToken(user) :
                `),n(1466,"span",46),e(1467,"this"),t(),e(1468,".httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()["),n(1469,"span",49),e(1470,'"Bearer "'),t(),e(1471,`.Length..].Trim();
            }

            `),n(1472,"span",46),e(1473,"return"),t(),e(1474," "),n(1475,"span",46),e(1476,"new"),t(),e(1477,` UserResponseEnvelope
            {
                UserJson = `),n(1478,"span",46),e(1479,"new"),t(),e(1480,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        `),n(1481,"span",45),e(1482,"#"),n(1483,"span",46),e(1484,"endregion"),t()(),e(1485,`

        `),n(1486,"span",45),e(1487,"#"),n(1488,"span",46),e(1489,"region"),t(),e(1490," Update"),t(),e(1491,`
        `),n(1492,"span",46),e(1493,"public"),t(),e(1494," "),n(1495,"span",46),e(1496,"async"),t(),e(1497,` Task<Result<UserResponseEnvelope>> Update(UserUpdateCommand userRequest)
        {
            `),n(1498,"span",46),e(1499,"if"),t(),e(1500," (userRequest.UserJson.FullName == "),n(1501,"span",63),e(1502,"null"),t(),e(1503," && userRequest.UserJson.Password == "),n(1504,"span",63),e(1505,"null"),t(),e(1506,`)
            {
                `),n(1507,"span",46),e(1508,"return"),t(),e(1509," Result<UserResponseEnvelope>.Failure("),n(1510,"span",46),e(1511,"new"),t(),e(1512," Dictionary<"),n(1513,"span",62),e(1514,"string"),t(),e(1515,", "),n(1516,"span",62),e(1517,"string"),t(),e(1518,`[]>
            {
                 { `),n(1519,"span",49),e(1520,'"no_data_error"'),t(),e(1521,", "),n(1522,"span",46),e(1523,"new"),t(),e(1524,`[] { NoDataErrorMessage } }
            });
            }

            `),n(1525,"span",62),e(1526,"bool"),t(),e(1527," isNewToken = "),n(1528,"span",63),e(1529,"false"),t(),e(1530,`;
            ClaimsPrincipal? claimsPrincipal = `),n(1531,"span",46),e(1532,"this"),t(),e(1533,`.httpContextAccessor.HttpContext!.User!;
            `),n(1534,"span",46),e(1535,"if"),t(),e(1536," (claimsPrincipal != "),n(1537,"span",63),e(1538,"null"),t(),e(1539,`)
            {
                `),n(1540,"span",46),e(1541,"var"),t(),e(1542,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),n(1543,"span",46),e(1544,"if"),t(),e(1545," (isAuthenticated == "),n(1546,"span",63),e(1547,"null"),t(),e(1548," || !("),n(1549,"span",62),e(1550,"bool"),t(),e(1551,`)isAuthenticated)
                {
                    `),n(1552,"span",46),e(1553,"return"),t(),e(1554," Result<UserResponseEnvelope>.Failure("),n(1555,"span",46),e(1556,"new"),t(),e(1557," Dictionary<"),n(1558,"span",62),e(1559,"string"),t(),e(1560,", "),n(1561,"span",62),e(1562,"string"),t(),e(1563,`[]>
                {
                    { `),n(1564,"span",49),e(1565,'"identity_error"'),t(),e(1566,", "),n(1567,"span",46),e(1568,"new"),t(),e(1569,`[] { IdentityErrorMessage } }
                });
                }
                `),n(1570,"span",46),e(1571,"var"),t(),e(1572," iat = claimsPrincipal.FindFirst("),n(1573,"span",49),e(1574,'"iat"'),t(),e(1575,`);
                `),n(1576,"span",46),e(1577,"var"),t(),e(1578," exp = claimsPrincipal.FindFirst("),n(1579,"span",49),e(1580,'"exp"'),t(),e(1581,`);
                `),n(1582,"span",46),e(1583,"if"),t(),e(1584," (iat == "),n(1585,"span",63),e(1586,"null"),t(),e(1587," || exp == "),n(1588,"span",63),e(1589,"null"),t(),e(1590,`)
                {
                    `),n(1591,"span",46),e(1592,"return"),t(),e(1593," Result<UserResponseEnvelope>.Failure("),n(1594,"span",46),e(1595,"new"),t(),e(1596," Dictionary<"),n(1597,"span",62),e(1598,"string"),t(),e(1599,", "),n(1600,"span",62),e(1601,"string"),t(),e(1602,`[]>
                {
                    { `),n(1603,"span",49),e(1604,'"identity_error"'),t(),e(1605,", "),n(1606,"span",46),e(1607,"new"),t(),e(1608,`[] { IdentityErrorMessage } }
                });
                }

                `),n(1609,"span",46),e(1610,"var"),t(),e(1611," rate = ("),n(1612,"span",62),e(1613,"long"),t(),e(1614,".Parse(exp.Value) - "),n(1615,"span",62),e(1616,"long"),t(),e(1617,`.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                `),n(1618,"span",46),e(1619,"var"),t(),e(1620," current = "),n(1621,"span",62),e(1622,"long"),t(),e(1623,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            `),n(1624,"span",46),e(1625,"else"),t(),e(1626,`
            {
                `),n(1627,"span",46),e(1628,"return"),t(),e(1629," Result<UserResponseEnvelope>.Failure("),n(1630,"span",46),e(1631,"new"),t(),e(1632," Dictionary<"),n(1633,"span",62),e(1634,"string"),t(),e(1635,", "),n(1636,"span",62),e(1637,"string"),t(),e(1638,`[]>
            {
                { `),n(1639,"span",49),e(1640,'"identity_error"'),t(),e(1641,", "),n(1642,"span",46),e(1643,"new"),t(),e(1644,`[] { IdentityErrorMessage } }
            });
            }

            `),n(1645,"span",46),e(1646,"if"),t(),e(1647," (userRequest.UserJson.FullName != "),n(1648,"span",63),e(1649,"null"),t(),e(1650,`)
            {
                `),n(1651,"span",46),e(1652,"var"),t(),e(1653," userByName = "),n(1654,"span",46),e(1655,"await"),t(),e(1656," "),n(1657,"span",46),e(1658,"this"),t(),e(1659,`.userManager.FindByNameAsync(userRequest.UserJson.FullName);

                `),n(1660,"span",46),e(1661,"if"),t(),e(1662," (userByName != "),n(1663,"span",63),e(1664,"null"),t(),e(1665,`)
                {
                    `),n(1666,"span",46),e(1667,"return"),t(),e(1668," Result<UserResponseEnvelope>.Failure("),n(1669,"span",46),e(1670,"new"),t(),e(1671," Dictionary<"),n(1672,"span",62),e(1673,"string"),t(),e(1674,", "),n(1675,"span",62),e(1676,"string"),t(),e(1677,`[]>
                {
                    { `),n(1678,"span",49),e(1679,'"name_error"'),t(),e(1680,", "),n(1681,"span",46),e(1682,"new"),t(),e(1683,`[] { UserNameTakenErrorMessage } }
                });
                }
            }

            User? user;
            `),n(1684,"span",46),e(1685,"if"),t(),e(1686," ("),n(1687,"span",46),e(1688,"this"),t(),e(1689,".env.EnvironmentName == "),n(1690,"span",49),e(1691,'"Test"'),t(),e(1692,`)
            {
                `),n(1693,"span",46),e(1694,"var"),t(),e(1695,` name = claimsPrincipal.Identity?.Name;
                `),n(1696,"span",46),e(1697,"if"),t(),e(1698," (name == "),n(1699,"span",63),e(1700,"null"),t(),e(1701,`)
                {
                    `),n(1702,"span",46),e(1703,"return"),t(),e(1704," Result<UserResponseEnvelope>.Failure("),n(1705,"span",46),e(1706,"new"),t(),e(1707," Dictionary<"),n(1708,"span",62),e(1709,"string"),t(),e(1710,", "),n(1711,"span",62),e(1712,"string"),t(),e(1713,`[]>
                {
                    { `),n(1714,"span",49),e(1715,'"debug_error"'),t(),e(1716,", "),n(1717,"span",46),e(1718,"new"),t(),e(1719,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(1720,"span",46),e(1721,"await"),t(),e(1722," "),n(1723,"span",46),e(1724,"this"),t(),e(1725,`.userManager.FindByEmailAsync(name);
            }
            `),n(1726,"span",46),e(1727,"else"),t(),e(1728,`
            {
                `),n(1729,"span",46),e(1730,"var"),t(),e(1731,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),n(1732,"span",46),e(1733,"if"),t(),e(1734," (claim == "),n(1735,"span",63),e(1736,"null"),t(),e(1737,`)
                {
                    `),n(1738,"span",46),e(1739,"return"),t(),e(1740," Result<UserResponseEnvelope>.Failure("),n(1741,"span",46),e(1742,"new"),t(),e(1743," Dictionary<"),n(1744,"span",62),e(1745,"string"),t(),e(1746,", "),n(1747,"span",62),e(1748,"string"),t(),e(1749,`[]>
                {
                    { `),n(1750,"span",49),e(1751,'"name_identifier_error"'),t(),e(1752,", "),n(1753,"span",46),e(1754,"new"),t(),e(1755,`[] { IdentityErrorMessage } }
                });
                }
                user = `),n(1756,"span",46),e(1757,"await"),t(),e(1758," "),n(1759,"span",46),e(1760,"this"),t(),e(1761,`.userManager.FindByIdAsync(claim.Value);
            }

            `),n(1762,"span",46),e(1763,"if"),t(),e(1764," (user == "),n(1765,"span",63),e(1766,"null"),t(),e(1767,`)
            {
                `),n(1768,"span",46),e(1769,"return"),t(),e(1770," Result<UserResponseEnvelope>.Failure("),n(1771,"span",46),e(1772,"new"),t(),e(1773," Dictionary<"),n(1774,"span",62),e(1775,"string"),t(),e(1776,", "),n(1777,"span",62),e(1778,"string"),t(),e(1779,`[]>
            {
                { `),n(1780,"span",49),e(1781,'"user_error"'),t(),e(1782,", "),n(1783,"span",46),e(1784,"new"),t(),e(1785,`[] { UserNullErrorMessage } }
            });
            }

            `),n(1786,"span",46),e(1787,"var"),t(),e(1788,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),n(1789,"span",46),e(1790,"if"),t(),e(1791," (claimRole == "),n(1792,"span",63),e(1793,"null"),t(),e(1794,`)
            {
                `),n(1795,"span",46),e(1796,"return"),t(),e(1797," Result<UserResponseEnvelope>.Failure("),n(1798,"span",46),e(1799,"new"),t(),e(1800," Dictionary<"),n(1801,"span",62),e(1802,"string"),t(),e(1803,", "),n(1804,"span",62),e(1805,"string"),t(),e(1806,`[]>
                {
                    { `),n(1807,"span",49),e(1808,'"is_in_role_error"'),t(),e(1809,", "),n(1810,"span",46),e(1811,"new"),t(),e(1812,"[] { "),n(1813,"span",62),e(1814,"string"),t(),e(1815,".Format(IdentityRoleErrorMessage, "),n(1816,"span",49),e(1817,'""'),t(),e(1818,`) } }
                });
            }
            `),n(1819,"span",46),e(1820,"var"),t(),e(1821," isInRole = "),n(1822,"span",46),e(1823,"await"),t(),e(1824," "),n(1825,"span",46),e(1826,"this"),t(),e(1827,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),n(1828,"span",46),e(1829,"if"),t(),e(1830,` (!isInRole)
            {
                `),n(1831,"span",46),e(1832,"return"),t(),e(1833," Result<UserResponseEnvelope>.Failure("),n(1834,"span",46),e(1835,"new"),t(),e(1836," Dictionary<"),n(1837,"span",62),e(1838,"string"),t(),e(1839,", "),n(1840,"span",62),e(1841,"string"),t(),e(1842,`[]>
                {
                    { `),n(1843,"span",49),e(1844,'"is_in_role_error"'),t(),e(1845,", "),n(1846,"span",46),e(1847,"new"),t(),e(1848,"[] { "),n(1849,"span",62),e(1850,"string"),t(),e(1851,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),n(1852,"span",46),e(1853,"if"),t(),e(1854," (userRequest.UserJson.Password != "),n(1855,"span",63),e(1856,"null"),t(),e(1857,`)
            {
                `),n(1858,"span",46),e(1859,"var"),t(),e(1860," identityResult2 = "),n(1861,"span",46),e(1862,"await"),t(),e(1863," "),n(1864,"span",46),e(1865,"this"),t(),e(1866,`.userManager.RemovePasswordAsync(user);

                `),n(1867,"span",46),e(1868,"if"),t(),e(1869,` (!identityResult2.Succeeded)
                {
                    `),n(1870,"span",46),e(1871,"var"),t(),e(1872," errors = "),n(1873,"span",46),e(1874,"new"),t(),e(1875," Dictionary<"),n(1876,"span",62),e(1877,"string"),t(),e(1878,", "),n(1879,"span",62),e(1880,"string"),t(),e(1881,`[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),n(1882,"span",46),e(1883,"return"),t(),e(1884,` Result<UserResponseEnvelope>.Failure(errors);
                }

                identityResult2 = `),n(1885,"span",46),e(1886,"await"),t(),e(1887," "),n(1888,"span",46),e(1889,"this"),t(),e(1890,`.userManager.AddPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                `),n(1891,"span",46),e(1892,"if"),t(),e(1893,` (!identityResult2.Succeeded)
                {
                    `),n(1894,"span",46),e(1895,"var"),t(),e(1896," errors = "),n(1897,"span",46),e(1898,"new"),t(),e(1899," Dictionary<"),n(1900,"span",62),e(1901,"string"),t(),e(1902,", "),n(1903,"span",62),e(1904,"string"),t(),e(1905,`[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        `),n(1906,"span",46),e(1907,"switch"),t(),e(1908,` (e.Code)
                        {
                            `),n(1909,"span",46),e(1910,"case"),t(),e(1911," "),n(1912,"span",49),e(1913,'"PasswordRequiresDigit"'),t(),e(1914,`:
                                e.Description = PasswordFormatErrorMessage;
                                `),n(1915,"span",46),e(1916,"break"),t(),e(1917,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });
                    errors.Add(`),n(1918,"span",49),e(1919,'"PasswordDeleted"'),t(),e(1920,`, [PasswordDeletedErrorMessage]);
                    `),n(1921,"span",46),e(1922,"return"),t(),e(1923,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }

            `),n(1924,"span",46),e(1925,"if"),t(),e(1926," (userRequest.UserJson.FullName != "),n(1927,"span",63),e(1928,"null"),t(),e(1929,`)
            {
                `),n(1930,"span",46),e(1931,"var"),t(),e(1932," identityResult1 = "),n(1933,"span",46),e(1934,"await"),t(),e(1935," "),n(1936,"span",46),e(1937,"this"),t(),e(1938,`.userManager.SetUserNameAsync(
                     user,
                     userRequest.UserJson.FullName);

                `),n(1939,"span",46),e(1940,"if"),t(),e(1941,` (!identityResult1.Succeeded)
                {
                    `),n(1942,"span",46),e(1943,"var"),t(),e(1944," errors = "),n(1945,"span",46),e(1946,"new"),t(),e(1947," Dictionary<"),n(1948,"span",62),e(1949,"string"),t(),e(1950,", "),n(1951,"span",62),e(1952,"string"),t(),e(1953,`[]>();
                    identityResult1.Errors.ForEach(e =>
                    {
                        `),n(1954,"span",46),e(1955,"switch"),t(),e(1956,` (e.Code)
                        {
                            `),n(1957,"span",46),e(1958,"case"),t(),e(1959," "),n(1960,"span",49),e(1961,'"InvalidUserName"'),t(),e(1962,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),n(1963,"span",46),e(1964,"break"),t(),e(1965,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),n(1966,"span",46),e(1967,"return"),t(),e(1968,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }

            `),n(1969,"span",62),e(1970,"string"),t(),e(1971,`? token;
            `),n(1972,"span",46),e(1973,"if"),t(),e(1974," ("),n(1975,"span",46),e(1976,"this"),t(),e(1977,".env.EnvironmentName == "),n(1978,"span",49),e(1979,'"Test"'),t(),e(1980,`)
            {
                token = `),n(1981,"span",49),e(1982,'$"Token: '),n(1983,"span",65),e(1984,"{user.Email}"),t(),e(1985,'"'),t(),e(1986,`;
            }
            `),n(1987,"span",46),e(1988,"else"),t(),e(1989,`
            {
                token = isNewToken ? `),n(1990,"span",46),e(1991,"await"),t(),e(1992," "),n(1993,"span",46),e(1994,"this"),t(),e(1995,`.jwtGenerator.GenerateToken(user) :
                `),n(1996,"span",46),e(1997,"this"),t(),e(1998,".httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()["),n(1999,"span",49),e(2e3,'"Bearer "'),t(),e(2001,`.Length..].Trim();
            }

            `),n(2002,"span",46),e(2003,"return"),t(),e(2004," "),n(2005,"span",46),e(2006,"new"),t(),e(2007,` UserResponseEnvelope
            {
                UserJson = `),n(2008,"span",46),e(2009,"new"),t(),e(2010,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        `),n(2011,"span",45),e(2012,"#"),n(2013,"span",46),e(2014,"endregion"),t()(),e(2015,`

        `),n(2016,"span",46),e(2017,"public"),t(),e(2018," "),n(2019,"span",46),e(2020,"async"),t(),e(2021," Task<Result<ProfileResponseEnvelope>> Profile("),n(2022,"span",62),e(2023,"string"),t(),e(2024,` userName)
        {
            `),n(2025,"span",46),e(2026,"var"),t(),e(2027," user = "),n(2028,"span",46),e(2029,"await"),t(),e(2030," "),n(2031,"span",46),e(2032,"this"),t(),e(2033,`.userManager.FindByNameAsync(userName);

            `),n(2034,"span",46),e(2035,"if"),t(),e(2036," (user == "),n(2037,"span",63),e(2038,"null"),t(),e(2039,`)
            {
                `),n(2040,"span",46),e(2041,"return"),t(),e(2042," Result<ProfileResponseEnvelope>.Failure("),n(2043,"span",46),e(2044,"new"),t(),e(2045," Dictionary<"),n(2046,"span",62),e(2047,"string"),t(),e(2048,", "),n(2049,"span",62),e(2050,"string"),t(),e(2051,`[]>
                    {
                       { `),n(2052,"span",49),e(2053,'"profile_error"'),t(),e(2054,", "),n(2055,"span",46),e(2056,"new"),t(),e(2057,`[] { ProfileErrorMessage } }
                    }
                );
            }

            `),n(2058,"span",46),e(2059,"return"),t(),e(2060," "),n(2061,"span",46),e(2062,"new"),t(),e(2063,` ProfileResponseEnvelope
            {
                ProfileJson = `),n(2064,"span",46),e(2065,"new"),t(),e(2066,` ProfileResponseModel(user.UserName, user.UserName, user.UserName)
            };

        }

        `),n(2067,"span",46),e(2068,"public"),t(),e(2069," "),n(2070,"span",46),e(2071,"async"),t(),e(2072,` Task<Result<UserResponseEnvelope>> Register(UserRegisterRequestEnvelope userRequest)
        {
            `),n(2073,"span",46),e(2074,"var"),t(),e(2075," userByEmail = "),n(2076,"span",46),e(2077,"await"),t(),e(2078," "),n(2079,"span",46),e(2080,"this"),t(),e(2081,`.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            `),n(2082,"span",46),e(2083,"if"),t(),e(2084," (userByEmail != "),n(2085,"span",63),e(2086,"null"),t(),e(2087,`)
            {
                `),n(2088,"span",46),e(2089,"return"),t(),e(2090," Result<UserResponseEnvelope>.Failure("),n(2091,"span",46),e(2092,"new"),t(),e(2093," Dictionary<"),n(2094,"span",62),e(2095,"string"),t(),e(2096,", "),n(2097,"span",62),e(2098,"string"),t(),e(2099,`[]>
            {
                { `),n(2100,"span",49),e(2101,'"email_error"'),t(),e(2102,", "),n(2103,"span",46),e(2104,"new"),t(),e(2105,`[] { EmailTakenErrorMessage } }
            });
            }

            `),n(2106,"span",46),e(2107,"var"),t(),e(2108," userByName = "),n(2109,"span",46),e(2110,"await"),t(),e(2111," "),n(2112,"span",46),e(2113,"this"),t(),e(2114,`.userManager.FindByNameAsync(userRequest.UserJson.FullName);

            `),n(2115,"span",46),e(2116,"if"),t(),e(2117," (userByName != "),n(2118,"span",63),e(2119,"null"),t(),e(2120,`)
            {
                `),n(2121,"span",46),e(2122,"return"),t(),e(2123," Result<UserResponseEnvelope>.Failure("),n(2124,"span",46),e(2125,"new"),t(),e(2126," Dictionary<"),n(2127,"span",62),e(2128,"string"),t(),e(2129,", "),n(2130,"span",62),e(2131,"string"),t(),e(2132,`[]>
            {
               { `),n(2133,"span",49),e(2134,'"name_error"'),t(),e(2135,", "),n(2136,"span",46),e(2137,"new"),t(),e(2138,`[] { UserNameTakenErrorMessage } }
            });
            }

            `),n(2139,"span",46),e(2140,"if"),t(),e(2141," ("),n(2142,"span",46),e(2143,"this"),t(),e(2144,".env.EnvironmentName == "),n(2145,"span",49),e(2146,'"Test"'),t(),e(2147,`)
            {
                `),n(2148,"span",46),e(2149,"var"),t(),e(2150," user = "),n(2151,"span",46),e(2152,"new"),t(),e(2153,` User(userRequest.UserJson.Email, userRequest.UserJson.FullName);

                `),n(2154,"span",46),e(2155,"var"),t(),e(2156," identityResult = "),n(2157,"span",46),e(2158,"await"),t(),e(2159," "),n(2160,"span",46),e(2161,"this"),t(),e(2162,`.userManager.CreateAsync(
                    user,
                    userRequest.UserJson.Password);

                `),n(2163,"span",46),e(2164,"if"),t(),e(2165,` (!identityResult.Succeeded)
                {
                    `),n(2166,"span",46),e(2167,"var"),t(),e(2168," errors = "),n(2169,"span",46),e(2170,"new"),t(),e(2171," Dictionary<"),n(2172,"span",62),e(2173,"string"),t(),e(2174,", "),n(2175,"span",62),e(2176,"string"),t(),e(2177,`[]>();
                    identityResult.Errors.ForEach(e =>
                    {
                        `),n(2178,"span",46),e(2179,"switch"),t(),e(2180,` (e.Code)
                        {
                            `),n(2181,"span",46),e(2182,"case"),t(),e(2183," "),n(2184,"span",49),e(2185,'"InvalidUserName"'),t(),e(2186,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),n(2187,"span",46),e(2188,"break"),t(),e(2189,`;
                            `),n(2190,"span",46),e(2191,"case"),t(),e(2192," "),n(2193,"span",49),e(2194,'"PasswordRequiresDigit"'),t(),e(2195,`:
                                e.Description = PasswordFormatErrorMessage;
                                `),n(2196,"span",46),e(2197,"break"),t(),e(2198,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),n(2199,"span",46),e(2200,"return"),t(),e(2201,` Result<UserResponseEnvelope>.Failure(errors);
                }

                `),n(2202,"span",46),e(2203,"var"),t(),e(2204," token = "),n(2205,"span",49),e(2206,'$"Token: '),n(2207,"span",65),e(2208,"{user.Email}"),t(),e(2209,'"'),t(),e(2210,`;

                `),n(2211,"span",46),e(2212,"await"),t(),e(2213," "),n(2214,"span",46),e(2215,"this"),t(),e(2216,".eventDispatcher.Dispatch("),n(2217,"span",46),e(2218,"new"),t(),e(2219,` UserRegisteredEvent(
                    user.Id,
                    userRequest.UserJson.FullName));

                `),n(2220,"span",46),e(2221,"return"),t(),e(2222," "),n(2223,"span",46),e(2224,"new"),t(),e(2225,` UserResponseEnvelope
                {
                    UserJson = `),n(2226,"span",46),e(2227,"new"),t(),e(2228,`()
                    {
                        Email = user.Email!,
                        UserName = user.UserName!,
                        Token = token,
                    }
                };
            }
            `),n(2229,"span",46),e(2230,"else"),t(),e(2231,`
            {
                `),n(2232,"span",46),e(2233,"return"),t(),e(2234," Result<UserResponseEnvelope>.Failure("),n(2235,"span",46),e(2236,"new"),t(),e(2237," Dictionary<"),n(2238,"span",62),e(2239,"string"),t(),e(2240,", "),n(2241,"span",62),e(2242,"string"),t(),e(2243,`[]>
            {
                 { `),n(2244,"span",49),e(2245,'"not_implemented_error"'),t(),e(2246,`, registerNotImplemented }
            });
            }
        }

        `),n(2247,"span",46),e(2248,"public"),t(),e(2249," "),n(2250,"span",46),e(2251,"async"),t(),e(2252,` Task<Result<UserResponseEnvelope>> Login(UserLoginRequestEnvelope userRequest)
        {
            `),n(2253,"span",46),e(2254,"var"),t(),e(2255," user = "),n(2256,"span",46),e(2257,"await"),t(),e(2258," "),n(2259,"span",46),e(2260,"this"),t(),e(2261,`.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            `),n(2262,"span",46),e(2263,"if"),t(),e(2264," (user == "),n(2265,"span",63),e(2266,"null"),t(),e(2267,`)
            {
                `),n(2268,"span",46),e(2269,"return"),t(),e(2270," Result<UserResponseEnvelope>.Failure("),n(2271,"span",46),e(2272,"new"),t(),e(2273," Dictionary<"),n(2274,"span",62),e(2275,"string"),t(),e(2276,", "),n(2277,"span",62),e(2278,"string"),t(),e(2279,`[]>
            {
                { `),n(2280,"span",49),e(2281,'"invalid_error"'),t(),e(2282,", "),n(2283,"span",46),e(2284,"new"),t(),e(2285,`[] { InvalidErrorMessage } }
            });
            }

            `),n(2286,"span",46),e(2287,"var"),t(),e(2288," isLockoutEnabled = "),n(2289,"span",46),e(2290,"await"),t(),e(2291,` userManager.GetLockoutEnabledAsync(user);

            `),n(2292,"span",46),e(2293,"if"),t(),e(2294,` (isLockoutEnabled)
            {
                `),n(2295,"span",46),e(2296,"var"),t(),e(2297," count = "),n(2298,"span",46),e(2299,"await"),t(),e(2300,` userManager.GetAccessFailedCountAsync(user);
                `),n(2301,"span",46),e(2302,"if"),t(),e(2303," (count == applicationSettings.MaxFailedAccessAttempts - "),n(2304,"span",64),e(2305,"1"),t(),e(2306,`)
                {
                    `),n(2307,"span",46),e(2308,"var"),t(),e(2309," endDate = "),n(2310,"span",46),e(2311,"await"),t(),e(2312,` userManager.GetLockoutEndDateAsync(user);
                    `),n(2313,"span",46),e(2314,"var"),t(),e(2315,` currentDate = DateTimeOffset.UtcNow;
                    `),n(2316,"span",46),e(2317,"if"),t(),e(2318,` (endDate > currentDate)
                    {
                        `),n(2319,"span",46),e(2320,"return"),t(),e(2321," Result<UserResponseEnvelope>.Failure("),n(2322,"span",46),e(2323,"new"),t(),e(2324," Dictionary<"),n(2325,"span",62),e(2326,"string"),t(),e(2327,", "),n(2328,"span",62),e(2329,"string"),t(),e(2330,`[]>
                    {
                        { `),n(2331,"span",49),e(2332,'"lockout_error"'),t(),e(2333,", "),n(2334,"span",46),e(2335,"new"),t(),e(2336,"[] {  "),n(2337,"span",62),e(2338,"string"),t(),e(2339,".Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,"),n(2340,"span",49),e(2341,'""'),t(),e(2342,`) } }
                    });
                    }
                }

                `),n(2343,"span",46),e(2344,"var"),t(),e(2345," passwordValid = "),n(2346,"span",46),e(2347,"await"),t(),e(2348," "),n(2349,"span",46),e(2350,"this"),t(),e(2351,`.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                `),n(2352,"span",46),e(2353,"if"),t(),e(2354,` (!passwordValid)
                {
                    `),n(2355,"span",46),e(2356,"var"),t(),e(2357," accessFailed = "),n(2358,"span",46),e(2359,"await"),t(),e(2360," "),n(2361,"span",46),e(2362,"this"),t(),e(2363,`.userManager.AccessFailedAsync(user);
                    `),n(2364,"span",46),e(2365,"if"),t(),e(2366,` (!accessFailed.Succeeded)
                    {
                        `),n(2367,"span",46),e(2368,"var"),t(),e(2369," errors = "),n(2370,"span",46),e(2371,"new"),t(),e(2372," Dictionary<"),n(2373,"span",62),e(2374,"string"),t(),e(2375,", "),n(2376,"span",62),e(2377,"string"),t(),e(2378,`[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            `),n(2379,"span",46),e(2380,"switch"),t(),e(2381,` (e.Code)
                            {
                                `),n(2382,"span",46),e(2383,"case"),t(),e(2384," "),n(2385,"span",49),e(2386,'"TODO: need to debug e.Code"'),t(),e(2387,`:
                                    e.Description = `),n(2388,"span",62),e(2389,"string"),t(),e(2390,".Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, "),n(2391,"span",49),e(2392,'""'),t(),e(2393,`);
                                    `),n(2394,"span",46),e(2395,"break"),t(),e(2396,`;
                            }

                            e.Description = `),n(2397,"span",62),e(2398,"string"),t(),e(2399,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, [e.Description]);
                        });

                        `),n(2400,"span",46),e(2401,"return"),t(),e(2402,` Result<UserResponseEnvelope>.Failure(errors);
                    }

                    `),n(2403,"span",46),e(2404,"return"),t(),e(2405," Result<UserResponseEnvelope>.Failure("),n(2406,"span",46),e(2407,"new"),t(),e(2408," Dictionary<"),n(2409,"span",62),e(2410,"string"),t(),e(2411,", "),n(2412,"span",62),e(2413,"string"),t(),e(2414,`[]>
                {
                    { `),n(2415,"span",49),e(2416,'"invalid_error"'),t(),e(2417,", "),n(2418,"span",46),e(2419,"new"),t(),e(2420,`[] { InvalidErrorMessage } }
                });
                }
            }
            `),n(2421,"span",46),e(2422,"else"),t(),e(2423,`
            {
                `),n(2424,"span",46),e(2425,"if"),t(),e(2426," ("),n(2427,"span",46),e(2428,"this"),t(),e(2429,".env.EnvironmentName == "),n(2430,"span",49),e(2431,'"Test"'),t(),e(2432,`)
                {
                    `),n(2433,"span",46),e(2434,"var"),t(),e(2435," passwordValid = "),n(2436,"span",46),e(2437,"await"),t(),e(2438," "),n(2439,"span",46),e(2440,"this"),t(),e(2441,`.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    `),n(2442,"span",46),e(2443,"if"),t(),e(2444,` (!passwordValid)
                    {
                        `),n(2445,"span",46),e(2446,"return"),t(),e(2447," Result<UserResponseEnvelope>.Failure("),n(2448,"span",46),e(2449,"new"),t(),e(2450," Dictionary<"),n(2451,"span",62),e(2452,"string"),t(),e(2453,", "),n(2454,"span",62),e(2455,"string"),t(),e(2456,`[]>
                    {
                        { `),n(2457,"span",49),e(2458,'"invalid_error"'),t(),e(2459,", "),n(2460,"span",46),e(2461,"new"),t(),e(2462,`[] { InvalidErrorMessage } }
                    });
                    }
                }
                `),n(2463,"span",46),e(2464,"else"),t(),e(2465,`
                {
                    `),n(2466,"span",46),e(2467,"return"),t(),e(2468," Result<UserResponseEnvelope>.Failure("),n(2469,"span",46),e(2470,"new"),t(),e(2471," Dictionary<"),n(2472,"span",62),e(2473,"string"),t(),e(2474,", "),n(2475,"span",62),e(2476,"string"),t(),e(2477,`[]>
                {
                    { `),n(2478,"span",49),e(2479,'"lockout_enabled_error"'),t(),e(2480,", "),n(2481,"span",46),e(2482,"new"),t(),e(2483,`[] { LockoutEnabledErrorMessage } }
                });
                }
            }

            `),n(2484,"span",62),e(2485,"string"),t(),e(2486,`? token;
            `),n(2487,"span",46),e(2488,"if"),t(),e(2489," ("),n(2490,"span",46),e(2491,"this"),t(),e(2492,".env.EnvironmentName == "),n(2493,"span",49),e(2494,'"Test"'),t(),e(2495,`)
            {
                token = `),n(2496,"span",49),e(2497,'$"Token: '),n(2498,"span",65),e(2499,"{user.Email}"),t(),e(2500,'"'),t(),e(2501,`;
            }
            `),n(2502,"span",46),e(2503,"else"),t(),e(2504,`
            {
                token = `),n(2505,"span",46),e(2506,"await"),t(),e(2507," "),n(2508,"span",46),e(2509,"this"),t(),e(2510,`.jwtGenerator.GenerateToken(user);
            }
            `),n(2511,"span",46),e(2512,"return"),t(),e(2513," "),n(2514,"span",46),e(2515,"new"),t(),e(2516,` UserResponseEnvelope
            {
                UserJson = `),n(2517,"span",46),e(2518,"new"),t(),e(2519,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
    }
}`),t()(),n(2520,"p"),e(2521,"To really appreciate the beauty of MyTested, It must be compared to "),n(2522,"a",66),e(2523,"an alternative"),t(),e(2524,` method of testing. With MyTested library, it is very easy to test against endpoint locations, input data in JSON format and output data.
When it comes to JWT authorization, a big amount of testing consists in testing for invalid JWT tokens:`),t(),n(2525,"ul")(2526,"li")(2527,"code"),e(2528,"Update_user_without_authorization_header_should_fail"),t(),e(2529,"- tests when JWT token is absent"),t(),n(2530,"li")(2531,"code"),e(2532,"Update_user_with_altered_authorization_header_should_fail"),t(),e(2533,"- tests when to a valid JWT token is added one character"),t(),n(2534,"li")(2535,"code"),e(2536,"Update_user_with_malformated_authorization_header_should_fail"),t(),e(2537,"- tests when JWT token has format "),n(2538,"code"),e(2539,"a.b"),t()(),n(2540,"li")(2541,"code"),e(2542,"Update_user_with_fake_authorization_header_should_fail"),t(),e(2543,"- tests when JWT token has correct format "),n(2544,"code"),e(2545,"a.b.c"),t(),e(2546," but random characters"),t(),n(2547,"li")(2548,"code"),e(2549,"Update_user_with_incorrect_authorization_header_key_should_fail"),t(),e(2550,"- tests when JWT token is valid but was encrypted with a different key"),t(),n(2551,"li")(2552,"code"),e(2553,"Update_user_with_expired_authorization_header_should_fail"),t(),e(2554,"- tests when a valid JWT token was expired"),t()(),n(2555,"p"),e(2556,`These are the most common case scenarios to test against an invalid JWT token and must be done just for one controller!
MyTested cannot catch 401 error code directly. We found a workaround by using `),n(2557,"a",67),e(2558,"HeaderAuthorizationException"),t(),e(2559,`
In real life, .NET Core 9 will return a 401-error code. We created a series of tests for testing invalid JWT tokens such as:`),t(),n(2560,"pre",44)(2561,"code"),e(2562,"        ["),n(2563,"span",45),e(2564,"Theory"),t(),e(2565,`]
        [`),n(2566,"span",45),e(2567,"MemberData(nameof(RegisterValidData))"),t(),e(2568,`]
        `),n(2569,"span",48)(2570,"span",46),e(2571,"public"),t(),e(2572," "),n(2573,"span",46),e(2574,"void"),t(),e(2575," "),n(2576,"span",47),e(2577,"Update_user_without_authorization_header_should_fail"),t(),e(2578,"("),n(2579,"span",61),e(2580,`
         `),n(2581,"span",62),e(2582,"string"),t(),e(2583,` fullName,
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
         `),n(2584,"span",62),e(2585,"string"),t(),e(2586,` email,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
         `),n(2587,"span",62),e(2588,"string"),t(),e(2589," password"),t(),e(2590,")"),t(),e(2591,`
         => AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
         () =>
         {
             MyMvc
            .Pipeline()
            .ShouldMap(request => request
                .WithMethod(HttpMethod.Put)
                `),n(2592,"span",68),e(2593,"// without WithHeaderAuthorization"),t(),e(2594,`
                .WithLocation(`),n(2595,"span",49),e(2596,'"api/v1.0/identity/update"'),t(),e(2597,`)
                .WithJsonBody(
                     `),n(2598,"span",62),e(2599,"string"),t(),e(2600,".Format("),n(2601,"span",49),e(2602,'@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}"'),t(),e(2603,`,
                         `),n(2604,"span",62),e(2605,"string"),t(),e(2606,".Format(CultureInfo.InvariantCulture, "),n(2607,"span",49),e(2608,'"{0}{1}"'),t(),e(2609,", password, "),n(2610,"span",64),e(2611,"1"),t(),e(2612,`),
                         `),n(2613,"span",62),e(2614,"string"),t(),e(2615,".Format(CultureInfo.InvariantCulture, "),n(2616,"span",49),e(2617,'"{0}{1}"'),t(),e(2618,", fullName, "),n(2619,"span",64),e(2620,"1"),t(),e(2621,`)
                     )
                )
            )
            .To<IdentityController>(c => c.Update(`),n(2622,"span",46),e(2623,"new"),t(),e(2624,` UserUpdateCommand
            {
                UserJson = `),n(2625,"span",46),e(2626,"new"),t(),e(2627,`()
                {
                    FullName = `),n(2628,"span",62),e(2629,"string"),t(),e(2630,".Format(CultureInfo.InvariantCulture, "),n(2631,"span",49),e(2632,'"{0}{1}"'),t(),e(2633,", fullName, "),n(2634,"span",64),e(2635,"1"),t(),e(2636,`),
                    Password = `),n(2637,"span",62),e(2638,"string"),t(),e(2639,".Format(CultureInfo.InvariantCulture, "),n(2640,"span",49),e(2641,'"{0}{1}"'),t(),e(2642,", password, "),n(2643,"span",64),e(2644,"1"),t(),e(2645,`),
                }
            }));

         }, `),n(2646,"span",62),e(2647,"string"),t(),e(2648,".Format(HeaderAuthorizationException.Replace(Environment.NewLine, "),n(2649,"span",49),e(2650,'""'),t(),e(2651,"), "),n(2652,"span",49),e(2653,'"/api/v1.0/identity/update"'),t(),e(2654,", "),n(2655,"span",49),e(2656,'"Update"'),t(),e(2657,", "),n(2658,"span",49),e(2659,'"IdentityController"'),t(),e(2660,"));"),t()(),n(2661,"p"),e(2662,"The full set of tests of "),n(2663,"code"),e(2664,"IdentityController"),t(),e(2665," is on "),n(2666,"a",67),e(2667,"our GitHub repository"),t(),e(2668,"."),t(),n(2669,"h2",69)(2670,"span"),e(2671,"Data Validation with FluentValidation Library"),t(),n(2672,"a",70),e(2673,"#"),t()(),n(2674,"p"),e(2675,"Another change we made to MyTested is adding the possibility of testing data validation. For now, we will give an example of testing using "),n(2676,"a",71),e(2677,"FluentValidation"),t(),e(2678,". Following is an example of testing data validation using modified version of MyTested library:"),t(),n(2679,"pre",44)(2680,"code"),e(2681,"        ["),n(2682,"span",45),e(2683,"Theory"),t(),e(2684,`]
        [`),n(2685,"span",45),e(2686,"InlineData("),n(2687,"span",49),e(2688,'"n"'),t(),e(2689,", "),n(2690,"span",49),e(2691,'"ValidEmail@a.bcde"'),t(),e(2692,", "),n(2693,"span",49),e(2694,'"p"'),t(),e(2695,")"),t(),e(2696,`]
        `),n(2697,"span",48)(2698,"span",46),e(2699,"public"),t(),e(2700," "),n(2701,"span",46),e(2702,"void"),t(),e(2703," "),n(2704,"span",47),e(2705,"Update_user_with_bad_input_should_return_validation_errors"),t(),e(2706,"("),n(2707,"span",61),e(2708,`
         `),n(2709,"span",62),e(2710,"string"),t(),e(2711,` fullName,
         `),n(2712,"span",62),e(2713,"string"),t(),e(2714,` email,
         `),n(2715,"span",62),e(2716,"string"),t(),e(2717," password"),t(),e(2718,")"),t(),e(2719,`
         => AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
         () =>
         {
             MyMvc
             .Pipeline()
             .ShouldMap(request => request
                .WithMethod(HttpMethod.Put)
                .WithHeaderAuthorization(StaticTestData.GetJwtBearerAdministratorRole(email, `),n(2720,"span",64),e(2721,"1"),t(),e(2722,`))
                .WithLocation(`),n(2723,"span",49),e(2724,'"api/v1.0/identity/update"'),t(),e(2725,`)
                .WithJsonBody(
                     `),n(2726,"span",62),e(2727,"string"),t(),e(2728,".Format("),n(2729,"span",49),e(2730,'@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}"'),t(),e(2731,`,
                         `),n(2732,"span",62),e(2733,"string"),t(),e(2734,".Format(CultureInfo.InvariantCulture, "),n(2735,"span",49),e(2736,'"{0}"'),t(),e(2737,`, password),
                         `),n(2738,"span",62),e(2739,"string"),t(),e(2740,".Format(CultureInfo.InvariantCulture, "),n(2741,"span",49),e(2742,'"{0}"'),t(),e(2743,`, fullName)
                     )
                )
             )
             .To<IdentityController>(c => c.Update(`),n(2744,"span",46),e(2745,"new"),t(),e(2746,` UserUpdateCommand
             {
                 UserJson = `),n(2747,"span",46),e(2748,"new"),t(),e(2749,`()
                 {
                     FullName = fullName,
                     Password = password,
                 }
             }))
             .Which(controller => controller
                .WithData(StaticTestData.GetUsers(`),n(2750,"span",64),e(2751,"3"),t(),e(2752,`, email, fullName, password)))
             .ShouldReturn();

         }, `),n(2753,"span",46),e(2754,"new"),t(),e(2755," Dictionary<"),n(2756,"span",62),e(2757,"string"),t(),e(2758,", "),n(2759,"span",62),e(2760,"string"),t(),e(2761,`[]>
            {
            { `),n(2762,"span",49),e(2763,'"UserJson.Password"'),t(),e(2764,", "),n(2765,"span",46),e(2766,"new"),t(),e(2767,"[] { "),n(2768,"span",49),e(2769,`"The length of 'User Json Password' must be at least 16 characters. You entered 1 characters."`),t(),e(2770,` } },
            { `),n(2771,"span",49),e(2772,'"UserJson.FullName"'),t(),e(2773,", "),n(2774,"span",46),e(2775,"new"),t(),e(2776,"[] { "),n(2777,"span",49),e(2778,`"The length of 'User Json Full Name' must be at least 2 characters. You entered 1 characters."`),t(),e(2779,` } },
            });`),t()(),n(2780,"p"),e(2781,"As you can see, now we can test data validation against the validation errors coming from FluentValidation library. Following are "),n(2782,"a",72),e(2783,"three tests"),t(),e(2784," witch test against the constraint that the tag name is unique:"),t(),n(2785,"ul")(2786,"li")(2787,"code"),e(2788,"Create_tag_with_same_name_should_fail_with_validation_error"),t(),e(2789,"- Creates tag with name when the name has already taken."),t(),n(2790,"li")(2791,"code"),e(2792,"Edit_tag_with_same_name_should_fail_with_validation_error"),t(),e(2793,"- Updates tag name when the name has already taken."),t(),n(2794,"li")(2795,"code"),e(2796,"Edit_same_tag_with_same_name_should_return_success_with_data"),t(),e(2797,"- Updates tag name when the name did not change."),t()(),n(2798,"p"),e(2799,"Sometimes, we need to validate against standard .Net services. For example, in the "),n(2800,"code"),e(2801,"IdentityService"),t(),e(2802," from above we have:"),t(),n(2803,"pre",44)(2804,"code"),e(2805,`\u2026
        `),n(2806,"span",46),e(2807,"if"),t(),e(2808," (userRequest.UserJson.FullName != "),n(2809,"span",63),e(2810,"null"),t(),e(2811,`)
            {
                `),n(2812,"span",46),e(2813,"var"),t(),e(2814," identityResult1 = "),n(2815,"span",46),e(2816,"await"),t(),e(2817," "),n(2818,"span",46),e(2819,"this"),t(),e(2820,`.userManager.SetUserNameAsync(
                     user,
                     userRequest.UserJson.FullName);

                `),n(2821,"span",46),e(2822,"if"),t(),e(2823,` (!identityResult1.Succeeded)
                {
                    `),n(2824,"span",46),e(2825,"var"),t(),e(2826," errors = "),n(2827,"span",46),e(2828,"new"),t(),e(2829," Dictionary<"),n(2830,"span",62),e(2831,"string"),t(),e(2832,", "),n(2833,"span",62),e(2834,"string"),t(),e(2835,`[]>();
                    identityResult1.Errors.ForEach(e =>
                    {
                        `),n(2836,"span",46),e(2837,"switch"),t(),e(2838,` (e.Code)
                        {
                            `),n(2839,"span",46),e(2840,"case"),t(),e(2841," "),n(2842,"span",49),e(2843,'"InvalidUserName"'),t(),e(2844,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),n(2845,"span",46),e(2846,"break"),t(),e(2847,`;
                        }
                        errors.Add(e.Code, `),n(2848,"span",46),e(2849,"new"),t(),e(2850,`[] { e.Description });
                    });

                    `),n(2851,"span",46),e(2852,"return"),t(),e(2853,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }
\u2026`),t()(),n(2854,"p")(2855,"a",73),e(2856,"Here"),t(),e(2857," is the test:"),t(),n(2858,"ul")(2859,"li")(2860,"code"),e(2861,"Update_user_with_incorrect_user_name_should_fail"),t(),e(2862,"- Tests against the username implemented in "),n(2863,"code"),e(2864,"UserManager<User>"),t(),e(2865,"."),t()(),n(2866,"h2",74)(2867,"span"),e(2868,"Conclusion"),t(),n(2869,"a",75),e(2870,"#"),t()(),n(2871,"p"),e(2872,"In this article, we gave a common example of a .NET Core "),n(2873,"code"),e(2874,"Identity"),t(),e(2875," controller, implemented a common "),n(2876,"code"),e(2877,"User Identity"),t(),e(2878," service based on "),n(2879,"code"),e(2880,"UserManager<User>"),t(),e(2881,", and showed a comprehensive "),n(2882,"code"),e(2883,"Identity"),t(),e(2884," controller testing using MyTested library. From multiple examples, we can see how easy is to test against endpoint locations, input data as JSON strings, and output data. In addition, we showed a lot of examples for data validation against the validation errors coming from "),n(2885,"code"),e(2886,"FluentValidation"),t(),e(2887,` library.
It is important to note, that having a detailed testing of API controllers based on MyTested library, gives us the possibility to debug .NET Core applications in Visual Studio 2022. For example, we can set a breakpoint in our application, go to test panel, find a MyTested test, and click Debug instead on Run.
The Markdown version of this article and the compiled code of our .NET Core 9 application can be found on `),n(2888,"a",36),e(2889,"our GitHub repository"),t(),e(2890,"."),t(),n(2891,"h2",76)(2892,"span"),e(2893,"Credits"),t(),n(2894,"a",77),e(2895,"#"),t()(),n(2896,"ul")(2897,"li")(2898,"a",78),e(2899,"Ivaylo Kenov"),t()(),n(2900,"li")(2901,"a",79),e(2902,"Kalin Tsenkov"),t()(),n(2903,"li")(2904,"a",80),e(2905,"Steve Smith"),t()(),n(2906,"li")(2907,"a",81),e(2908,"Jason Taylor"),t()(),n(2909,"li")(2910,"a",82),e(2911,"Stefan Prodan"),t()(),n(2912,"li")(2913,"a",83),e(2914,"Mark Cilia Vincenti"),t()(),n(2915,"li")(2916,"a",84),e(2917,"Jimmy Bogard"),t()(),n(2918,"li")(2919,"a",85),e(2920,"Ben Morris"),t()()(),ft(),t()()()),l&2&&(d(),c("nzBordered",!0),d(6),c("nzOffsetTop",100),d(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,Ei)),d(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,O,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var bi=()=>({standalone:!0});function wi(a,s){if(a&1){let i=_();b(0),n(1,"a",68),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",69),m(3,"nz-icon",70),t()(),w()}}function _i(a,s){if(a&1){let i=_();b(0),n(1,"a",68),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",69),e(3,"Alexei Cioina's blog"),t()(),w()}}var Bn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-about-this-blog"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;U(o=j())&&(r.affixEl=o.first)}},decls:481,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-375bae567e442b3aaffb4ff7fb6f6290","nzTitle","Generate Posts from Markdown Files"],["nzHref","#h-9ee0998d20e8918a0353459c822be833","nzTitle","Generate Static Syntax Highlighting"],["nzHref","#h-ae84e8a9827ba10eaf0c302cce6516ff","nzTitle","Deploy to a Cloud Platform"],["nzHref","#h-0ac07f265ac9e3a83dc1fb1d75e2079c","nzTitle","Simulate Static Content"],["nzHref","#h-3d814a590e1db6de636f3c2fc37cac08","nzTitle","Markdown Extension"],["nzHref","#h-d748b3e2a7d5e33441fd51f0bd59c938","nzTitle","Blog Listing"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241008-about-this-blog.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[1,"pic-plus"],["nz-icon","","nzType","custom:zorro","nzWidth","180px","nzHeight","180px"],["nz-icon","","nzType","custom:angular","nzWidth","180px","nzHeight","180px"],["nz-icon","","nzType","custom:ng-zorro","nzWidth","180px","nzHeight","180px"],["id","h-375bae567e442b3aaffb4ff7fb6f6290"],["onclick","window.location.hash = 'h-375bae567e442b3aaffb4ff7fb6f6290'",1,"anchor"],["href","https://github.com/cioina/alexei-cioina.b9ad.pro-us-east-1.openshiftapps.com/tree/main/posts","target","_blank","rel","noopener"],["id","h-9ee0998d20e8918a0353459c822be833"],["onclick","window.location.hash = 'h-9ee0998d20e8918a0353459c822be833'",1,"anchor"],[1,"language-javascript"],[1,"hljs-keyword"],[1,"hljs-built_in"],[1,"hljs-string"],[1,"hljs-title","function_"],[1,"hljs-params"],[1,"hljs-function"],[1,"hljs-literal"],[1,"hljs-title","class_"],[1,"hljs-regexp"],[1,"hljs-variable","language_"],[1,"hljs-property"],["id","h-ae84e8a9827ba10eaf0c302cce6516ff"],["onclick","window.location.hash = 'h-ae84e8a9827ba10eaf0c302cce6516ff'",1,"anchor"],["href","https://www.openshift.com/products/online/","target","_blank","rel","noopener"],["href","https://docs.openshift.com/container-platform/3.11/architecture/core_concepts/builds_and_image_streams.html#source-build","target","_blank","rel","noopener"],["href","https://docs.openshift.com/container-platform/3.11/dev_guide/deployments/deployment_strategies.html#recreate-strategy","target","_blank","rel","noopener"],["id","h-0ac07f265ac9e3a83dc1fb1d75e2079c"],["onclick","window.location.hash = 'h-0ac07f265ac9e3a83dc1fb1d75e2079c'",1,"anchor"],["href","https://github.com/dwightwatson/dwightwatson.com","target","_blank","rel","noopener"],["href","https://github.com/dwightwatson/neontsunami-laravel","target","_blank","rel","noopener"],["href","https://github.com/dwightwatson/neontsunami-laravel/blob/master/resources/views/posts/show.blade.php","target","_blank","rel","noopener"],["href","https://github.com/cioina/neontsunami","target","_blank","rel","noopener"],["href","https://laravel.com/docs/8.x/octane","target","_blank","rel","noopener"],["id","h-3d814a590e1db6de636f3c2fc37cac08"],["onclick","window.location.hash = 'h-3d814a590e1db6de636f3c2fc37cac08'",1,"anchor"],[1,"language-html"],[1,"hljs-tag"],[1,"hljs-name"],[1,"hljs-attr"],["href","https://mdxjs.com/","target","_blank","rel","noopener"],["id","h-d748b3e2a7d5e33441fd51f0bd59c938"],["onclick","window.location.hash = 'h-d748b3e2a7d5e33441fd51f0bd59c938'",1,"anchor"],["href","https://github.com/AndyT2503/angular-conduit-signals","target","_blank","rel","noopener"],["href","https://github.com/alexeymezenin/laravel-realworld-example-app","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,wi,4,0,"ng-container",5)(6,_i,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),m(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),m(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17),t()(),n(22,"span",18),e(23," About This Blog"),m(24,"span",19)(25,"span",20),n(26,"a",21),m(27,"nz-icon",22),t()(),n(28,"article",23)(29,"div",24),m(30,"span",25),n(31,"span"),e(32,"+"),t(),m(33,"span",26),n(34,"span"),e(35,"="),t(),m(36,"span",27),t(),n(37,"p"),e(38,"Here we've built a blog that is able to:"),t(),n(39,"ul")(40,"li"),e(41,"Generate posts from markdown files"),t(),n(42,"li"),e(43,"Generate static syntax highlighting"),t(),n(44,"li"),e(45,"Deploy to a cloud platform"),t(),n(46,"li"),e(47,"Simulate static content"),t()(),n(48,"h2",28)(49,"span"),e(50,"Generate Posts from Markdown Files"),t(),n(51,"a",29),e(52,"#"),t()(),n(53,"p"),e(54,"We use a "),n(55,"code"),e(56,"ng-zorro-antd"),t(),e(57," Node.js script to generate compiled Angular modules from "),n(58,"a",30),e(59,"a set of markdown files"),t(),e(60,`.
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
`),n(429,"span",60),e(430,"</"),n(431,"span",61),e(432,"div"),t(),e(433,">"),t()()(),n(434,"p"),e(435,"For more complex markdown format extensions, please visit "),n(436,"a",63),e(437,"MDX 2!"),t()(),n(438,"h2",64)(439,"span"),e(440,"Blog Listing"),t(),n(441,"a",65),e(442,"#"),t()(),n(443,"p"),e(444,"Client-side listing api is based on "),n(445,"a",66),e(446,"this GitHub repository"),t(),e(447," and server-side is similar to "),n(448,"a",67),e(449,"this GitHub repository"),t()(),n(450,"p"),e(451,"As you can see, we use a lot of "),n(452,"code"),e(453,"ng-zorro-antd"),t(),e(454," Angular components:"),t(),n(455,"ul")(456,"li")(457,"code"),e(458,"nz-list"),t(),e(459,", "),n(460,"code"),e(461,"nz-pagination"),t(),e(462,", "),n(463,"code"),e(464,"nz-image"),t(),e(465,", "),n(466,"code"),e(467,"nz-transfer"),t(),e(468,", "),n(469,"code"),e(470,"nz-select"),t(),e(471,", "),n(472,"code"),e(473,"nz-table"),t(),e(474,", and more"),t(),n(475,"li")(476,"code"),e(477,"NzDrawerService"),t(),e(478,", "),n(479,"code"),e(480,"NzDrawerRef"),t()()()()()()),l&2&&(d(),c("nzBordered",!0),d(6),c("nzOffsetTop",100),d(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,bi)),d(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,O,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var zi=()=>({standalone:!0});function yi(a,s){if(a&1){let i=_();b(0),n(1,"a",95),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",96),m(3,"nz-icon",97),t()(),w()}}function Ci(a,s){if(a&1){let i=_();b(0),n(1,"a",95),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",96),e(3,"Alexei Cioina's blog"),t()(),w()}}var Dn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-test-readme"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;U(o=j())&&(r.affixEl=o.first)}},decls:449,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-5a4865611d30c4d0ac6cdff755948150","nzTitle","MyTested Library Out of The Box"],["nzHref","#h-dacb62dd70222911e575fe6bc62bd073","nzTitle","Basic API Controller Testing"],["nzHref","#h-3505cd435c8f4001d7e7ef30f366a87f","nzTitle","Data Validation with FluentValidation Library"],["nzHref","#h-adda9d19dcc5465fd2fd1976110cca26","nzTitle","Exception Testing"],["nzHref","#h-7aa876f065cdeedf68f8ddc07088167f","nzTitle","Identity Controller Testing"],["nzHref","#h-dde4549bc1aab56925b8bfa2b191b5e8","nzTitle","Advanced Testing with MyTested Library"],["nzHref","#h-ff4316b63dd50be58ed564565963d5f9","nzTitle","MyTested Library Limitations"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241009-test-readme.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://github.com/cioina/cioina.azurewebsites.net","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore","target","_blank","rel","noopener"],["id","h-5a4865611d30c4d0ac6cdff755948150"],["onclick","window.location.hash = 'h-5a4865611d30c4d0ac6cdff755948150'",1,"anchor"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs","target","_blank","rel","noopener"],["href","https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs","target","_blank","rel","noopener"],[1,"language-csharp"],[1,"hljs-meta"],[1,"hljs-keyword"],[1,"hljs-title"],[1,"hljs-function"],[1,"hljs-string"],["id","h-dacb62dd70222911e575fe6bc62bd073"],["onclick","window.location.hash = 'h-dacb62dd70222911e575fe6bc62bd073'",1,"anchor"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Endpoints/TodoLists.cs","target","_blank","rel","noopener"],["href","https://github.com/EdiWang/Moonglade/blob/master/src/Moonglade.Web/Controllers/TagsController.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Tags/TagsController.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/TagsController.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Web.csproj","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/specification.json","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs","target","_blank","rel","noopener"],["id","h-3505cd435c8f4001d7e7ef30f366a87f"],["onclick","window.location.hash = 'h-3505cd435c8f4001d7e7ef30f366a87f'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Articles/EditTests.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Application.UnitTests/Common/Exceptions/ValidationExceptionTests.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Web.AcceptanceTests/StepDefinitions/LoginStepDefinitions.cs","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Common/AuthorCommandValidator.cs","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Users/Create.cs","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Application/TodoLists/Commands/UpdateTodoList/UpdateTodoListCommandValidator.cs","target","_blank","rel","noopener"],[1,"language-json"],[1,"hljs-punctuation"],[1,"hljs-attr"],["id","h-adda9d19dcc5465fd2fd1976110cca26"],["onclick","window.location.hash = 'h-adda9d19dcc5465fd2fd1976110cca26'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Domain/Common/BaseDomainException.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Middleware/ValidationExceptionHandlerMiddleware.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs","target","_blank","rel","noopener"],["id","h-7aa876f065cdeedf68f8ddc07088167f"],["onclick","window.location.hash = 'h-7aa876f065cdeedf68f8ddc07088167f'",1,"anchor"],["href","https://cioina.azurewebsites.net/articles/dotnet-core-testing#h-f5dcf3f1743665e0100f5e709e3971acd67ebe05","target","_blank","rel","noopener"],["id","h-dde4549bc1aab56925b8bfa2b191b5e8"],["onclick","window.location.hash = 'h-dde4549bc1aab56925b8bfa2b191b5e8'",1,"anchor"],["href","https://cioina.azurewebsites.net/articles/ratelimit-middleware","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs","target","_blank","rel","noopener"],["id","h-ff4316b63dd50be58ed564565963d5f9"],["onclick","window.location.hash = 'h-ff4316b63dd50be58ed564565963d5f9'",1,"anchor"],["href","https://github.com/kalintsenkov/BookStore/tree/main/src/Server","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/aspnetcore-realworld-example-app/tree/master/src/Conduit","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev/CleanArchitecture/tree/main/src","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test","target","_blank","rel","noopener"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/ivaylokenov","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov","target","_blank","rel","noopener"],["href","https://github.com/ardalis","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev","target","_blank","rel","noopener"],["href","https://github.com/stefanprodan","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti","target","_blank","rel","noopener"],["href","https://github.com/jbogard","target","_blank","rel","noopener"],["href","https://github.com/BenMorris","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,yi,4,0,"ng-container",5)(6,Ci,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),m(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),m(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20),t()(),n(25,"span",21),e(26," MyTested Test Project Example"),m(27,"span",22)(28,"span",23),n(29,"a",24),m(30,"nz-icon",25),t()(),n(31,"article",26)(32,"h2",27)(33,"span"),e(34,"Introduction"),t(),n(35,"a",28),e(36,"#"),t()(),n(37,"p"),e(38,"The compiled code of our .NET Core 9 application is on "),n(39,"a",29),e(40,"our GitHub repository"),t(),e(41,". For this test project, which is part our application, we will use "),n(42,"a",30),e(43,"MyTested"),t(),e(44," - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 9 project is based on "),n(45,"a",31),e(46,"BookStore"),t(),e(47," repository and adapted to work with MyTested library."),t(),n(48,"h2",32)(49,"span"),e(50,"MyTested Library Out of The Box"),t(),n(51,"a",33),e(52,"#"),t()(),n(53,"p"),e(54,"I found out about MyTested for the first time from "),n(55,"a",34),e(56,"BlazorShop"),t(),e(57," repository. At the same time, I found out about "),n(58,"code"),e(59,"Jwt Authentication"),t(),e(60," implementation from same "),n(61,"a",35),e(62,"BlazorShop"),t(),e(63," repository and from "),n(64,"a",36),e(65,"aspnetcore-realworld-example"),t(),e(66," repository. Both "),n(67,"code"),e(68,"Jwt Authentication"),t(),e(69," implementations did not work with original "),n(70,"a",30),e(71,"MyTested"),t(),e(72," library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was only able to add some small pieces of code to make MyTested and my own "),n(73,"code"),e(74,"Jwt Authentication"),t(),e(75," implementation work and not to break any original MyTested tests. One interesting idea of JWT token implementation together with refresh token is on "),n(76,"a",37),e(77,"EdiWang"),t(),e(78,` GitHub repository.
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
The full source code for the .NET Core `),n(370,"code"),e(371,"IdentityService"),t(),e(372," implementation can be found "),n(373,"a",74),e(374,"here"),t()(),n(375,"h2",75)(376,"span"),e(377,"Advanced Testing with MyTested Library"),t(),n(378,"a",76),e(379,"#"),t()(),n(380,"p"),e(381,"In "),n(382,"a",77),e(383,'"Implementing JWT Token Refresh Concept for .NET Core 9"'),t(),e(384,", we show an example of RateLimitMiddleware and try some advanced testing with shared "),n(385,"code"),e(386,"MemoryCache"),t(),e(387,": "),n(388,"code"),e(389,"GetTagsWithRateLimitMiddleware"),t(),e(390," and "),n(391,"code"),e(392,"GetAllWithRateLimitMiddleware"),t(),e(393," from "),n(394,"a",78),e(395,"StaticTestData.cs"),t(),e(396,")."),t(),n(397,"h2",79)(398,"span"),e(399,"MyTested Library Limitations"),t(),n(400,"a",80),e(401,"#"),t()(),n(402,"p"),e(403,"We applied modified version of MyTested library to three popular GitHub repositories: "),n(404,"a",81),e(405,"BookStore"),t(),e(406,", "),n(407,"a",82),e(408,"RealWorld"),t(),e(409,", and "),n(410,"a",83),e(411,"CleanArchitecture"),t(),e(412,". Our quick investigation shows that BookStore can be configured to work 100% with MyTested while RealWorld works only with "),n(413,"a",50),e(414,"anonymous controllers"),t(),e(415,` and CleanArchitecture does not work at all.
The full test project source code can be found on `),n(416,"a",84),e(417,"our GitHub repository"),t(),e(418,"."),t(),n(419,"h2",85)(420,"span"),e(421,"Credits"),t(),n(422,"a",86),e(423,"#"),t()(),n(424,"ul")(425,"li")(426,"a",87),e(427,"Ivaylo Kenov"),t()(),n(428,"li")(429,"a",88),e(430,"Kalin Tsenkov"),t()(),n(431,"li")(432,"a",89),e(433,"Steve Smith"),t()(),n(434,"li")(435,"a",90),e(436,"Jason Taylor"),t()(),n(437,"li")(438,"a",91),e(439,"Stefan Prodan"),t()(),n(440,"li")(441,"a",92),e(442,"Mark Cilia Vincenti"),t()(),n(443,"li")(444,"a",93),e(445,"Jimmy Bogard"),t()(),n(446,"li")(447,"a",94),e(448,"Ben Morris"),t()()()()()()),l&2&&(d(),c("nzBordered",!0),d(6),c("nzOffsetTop",100),d(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,zi)),d(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,O,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var Ti=()=>({standalone:!0});function vi(a,s){if(a&1){let i=_();b(0),n(1,"a",86),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",87),m(3,"nz-icon",88),t()(),w()}}function ki(a,s){if(a&1){let i=_();b(0),n(1,"a",86),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",87),e(3,"Alexei Cioina's blog"),t()(),w()}}var Fn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-ratelimit-middleware"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;U(o=j())&&(r.affixEl=o.first)}},decls:1571,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-ce31d7687a5dd7132969c9c34ec935fd","nzTitle","Use Case Scenario"],["nzHref","#h-c73a370e6de61c37a931b53e01ac1474","nzTitle","JWT Token Refresh Concept"],["nzHref","#h-2ee872d2e537cfc7d3ac87394ef94bd0","nzTitle","JWT Token Refresh Implementation"],["nzHref","#h-dabba4053540ace5387194a926c7e285","nzTitle","Modified RateLimitMiddleware"],["nzHref","#h-bd1baabd87b923e02405c8e9aa86c826","nzTitle","Testing of RateLimitMiddleware With MyTested Library"],["nzHref","#h-009deb37fd917675f32d69efa5650da2","nzTitle","Test Settings"],["nzHref","#h-fb5fe24a643cb590fd64c959dc9b2549","nzTitle","Proof of Concept"],["nzHref","#h-6f8b794f3246b0c1e1780bb4d4d5dc53","nzTitle","Conclusion"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241018-ratelimit-middleware.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],[2,"border-color","#faad14"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],["href","https://github.com/cioina/cioina.azurewebsites.net","target","_blank","rel","noopener"],["href","https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov/BookStore","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test","target","_blank","rel","noopener"],["id","h-ce31d7687a5dd7132969c9c34ec935fd"],["onclick","window.location.hash = 'h-ce31d7687a5dd7132969c9c34ec935fd'",1,"anchor"],["id","h-c73a370e6de61c37a931b53e01ac1474"],["onclick","window.location.hash = 'h-c73a370e6de61c37a931b53e01ac1474'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs","target","_blank","rel","noopener"],[1,"language-csharp"],[1,"hljs-meta"],[1,"hljs-keyword"],["href","https://github.com/cioina/cioina.azurewebsites.net/blob/main/bin/Release/net9.0/appsettings.json","target","_blank","rel","noopener"],["id","h-2ee872d2e537cfc7d3ac87394ef94bd0"],["onclick","window.location.hash = 'h-2ee872d2e537cfc7d3ac87394ef94bd0'",1,"anchor"],["href","https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs","target","_blank","rel","noopener"],[1,"hljs-literal"],[1,"hljs-built_in"],[1,"hljs-string"],["href","https://github.com/stefanprodan/AspNetCoreRateLimit/blob/master/src/AspNetCoreRateLimit/Middleware/RateLimitMiddleware.cs","target","_blank","rel","noopener"],["id","h-dabba4053540ace5387194a926c7e285"],["onclick","window.location.hash = 'h-dabba4053540ace5387194a926c7e285'",1,"anchor"],[1,"hljs-title"],[1,"hljs-function"],[1,"hljs-params"],[1,"hljs-comment"],[1,"hljs-subst"],[1,"hljs-number"],["id","h-bd1baabd87b923e02405c8e9aa86c826"],["onclick","window.location.hash = 'h-bd1baabd87b923e02405c8e9aa86c826'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/testsettings.json","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test/RateLimit","target","_blank","rel","noopener"],["href","https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/RateLimit/AsyncKeyedLockTest.cs","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti/AsyncKeyedLock","target","_blank","rel","noopener"],["href","https://github.com/EdiWang/Edi.CacheAside.InMemory/blob/master/src/Edi.CacheAside.InMemory/MemoryCacheAside.cs","target","_blank","rel","noopener"],["id","h-009deb37fd917675f32d69efa5650da2"],["onclick","window.location.hash = 'h-009deb37fd917675f32d69efa5650da2'",1,"anchor"],[1,"language-json"],[1,"hljs-punctuation"],[1,"hljs-attr"],["id","h-fb5fe24a643cb590fd64c959dc9b2549"],["onclick","window.location.hash = 'h-fb5fe24a643cb590fd64c959dc9b2549'",1,"anchor"],["id","h-6f8b794f3246b0c1e1780bb4d4d5dc53"],["onclick","window.location.hash = 'h-6f8b794f3246b0c1e1780bb4d4d5dc53'",1,"anchor"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/ivaylokenov","target","_blank","rel","noopener"],["href","https://github.com/kalintsenkov","target","_blank","rel","noopener"],["href","https://github.com/ardalis","target","_blank","rel","noopener"],["href","https://github.com/jasontaylordev","target","_blank","rel","noopener"],["href","https://github.com/stefanprodan","target","_blank","rel","noopener"],["href","https://github.com/MarkCiliaVincenti","target","_blank","rel","noopener"],["href","https://github.com/jbogard","target","_blank","rel","noopener"],["href","https://github.com/BenMorris","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,vi,4,0,"ng-container",5)(6,ki,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),m(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),m(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16)(21,"nz-link",17)(22,"nz-link",18)(23,"nz-link",19)(24,"nz-link",20)(25,"nz-link",21),t()(),n(26,"span",22),e(27," Implementing JWT Token Refresh Concept for .NET Core 9"),m(28,"span",23)(29,"span",24),n(30,"a",25),m(31,"nz-icon",26),t()(),n(32,"article",27)(33,"blockquote",28)(34,"p")(35,"strong"),e(36,"The concept of Bearer Header Authorization based on JWT token implementation provided by .NET Core 9 is the same as in .NET Core 8. "),t()()(),n(37,"h2",29)(38,"span"),e(39,"Introduction"),t(),n(40,"a",30),e(41,"#"),t()(),n(42,"p"),e(43,"The compiled code of our .NET Core 9 application is on "),n(44,"a",31),e(45,"our GitHub repository"),t(),e(46,". For testing purpose, we will use "),n(47,"a",32),e(48,"MyTested"),t(),e(49," - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our project is based on "),n(50,"a",33),e(51,"BookStore"),t(),e(52," repository and adapted to work with MyTested library. MyTested was engineered to work without middleware which is an advantage for many cases. However, the scope of this article was to find a way to tests middleware with MyTested. The full test project source code can be found on "),n(53,"a",34),e(54,"our another GitHub repository"),t(),e(55,"."),t(),n(56,"h2",35)(57,"span"),e(58,"Use Case Scenario"),t(),n(59,"a",36),e(60,"#"),t()(),n(61,"p"),e(62,"The user signs in and gets a JWT token valid for 30 minutes. The user opens a webpage to create/edit an article. It takes 35 minutes to finish the work. The user clicks on submit button. A modal form pops up and asks the user to refresh JWT token by entering a password. The user gets a new JWT token valid for next 30 minutes. Finally, the user clicks submit button and saves the work."),t(),n(63,"h2",37)(64,"span"),e(65,"JWT Token Refresh Concept"),t(),n(66,"a",38),e(67,"#"),t()(),n(68,"p"),e(69,"First, we need to know how basic native JWT token implemented in .NET Core 9 works. Usually, there are "),n(70,"a",39),e(71,"two types of API endpoints: public and private"),t(),e(72,". A private API endpoint look like this:"),t(),n(73,"pre",40)(74,"code"),e(75,"["),n(76,"span",41),e(77,"HttpPut"),t(),e(78,`]
[`),n(79,"span",41),e(80,"Route(nameof(Update))"),t(),e(81,`]
[`),n(82,"span",41),e(83,"Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)"),t(),e(84,`]
`),n(85,"span",42),e(86,"public"),t(),e(87," "),n(88,"span",42),e(89,"async"),t(),e(90,` Task<ActionResult<UserResponseEnvelope>> Update(
    UserUpdateCommand command)
    => `),n(91,"span",42),e(92,"await"),t(),e(93," "),n(94,"span",42),e(95,"this"),t(),e(96,".Send(command);"),t()(),n(97,"p"),e(98,"The user signs in and gets a JWT token which is saved in localStorage. Then, any request to the server includes obtained JWT token in the Authorization header. The server won\u2019t use the token on public endpoints. It means that the server won\u2019t try to decrypt the token. On the private endpoints, the server will try to decrypt the token, apply "),n(99,"code"),e(100,"BearerPolicy"),t(),e(101,", and match the role from the token to "),n(102,"code"),e(103,"AdministratorRoleName"),t(),e(104," list. At this point, the basic native .NET Core 9 implementation does not care if the user form the JWT token exists in the database, and it does not care if the role exists in the database ether. However, the server checks if the token expired and returns a 401 error if it\u2019s the case. With all this in mind, we implemented the concept of JWT token refresh period called PRefresh. Let\u2019s call the token\u2019s valid period PValid. Then, "),n(105,"code"),e(106,"SecurityTokenDescriptorExpiresInMinutes"),t(),e(107," from "),n(108,"a",43),e(109,"appsettings.json"),t(),e(110," = PValid + PRefresh and "),n(111,"code"),e(112,"SecurityTokenRefreshRate"),t(),e(113," = PRefresh/(PValid + PRefresh). So, if "),n(114,"code"),e(115,"SecurityTokenDescriptorExpiresInMinutes"),t(),e(116,"= 60 minutes and "),n(117,"code"),e(118,"SecurityTokenRefreshRate"),t(),e(119," = 1/2, it means that PValid = 30 minutes and PRefresh = 30 minutes. If "),n(120,"code"),e(121,"SecurityTokenRefreshRate"),t(),e(122," = 1/4, it means that PValid = 45 minutes and PRefresh = 15 minutes. If "),n(123,"code"),e(124,"SecurityTokenRefreshRate"),t(),e(125," = 3/4, it means that PValid = 15 minutes and PRefresh = 45 minutes and so on. "),t(),n(126,"h2",44)(127,"span"),e(128,"JWT Token Refresh Implementation"),t(),n(129,"a",45),e(130,"#"),t()(),n(131,"p"),e(132,"One interesting idea of JWT token implementation together with refresh token is on "),n(133,"a",46),e(134,"EdiWang"),t(),e(135," GitHub repository. Our main difference from above implementation is not using web browser cookies and uses native .NET Core implementation which is \u201Ccontrolled\u201D by the .NET Core framework itself. One problem we solved in this article, is the implementation of "),n(136,"code"),e(137,"JWT Token"),t(),e(138," refresh mechanism. There is no standard way to refresh JWT token in .NET Core 9. The main idea was to check a valid "),n(139,"code"),e(140,"JWT token"),t(),e(141," right after standard .NET Core authorization and before entering of an API controller. In fact, we needed to use following formula with this small piece of code:"),t(),n(142,"pre",40)(143,"code")(144,"span",42),e(145,"var"),t(),e(146,` claimsPrincipal = context.User!;
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
`),n(1500,"span",70),e(1501,"}"),t()()(),n(1502,"h2",72)(1503,"span"),e(1504,"Proof of Concept"),t(),n(1505,"a",73),e(1506,"#"),t()(),n(1507,"ol")(1508,"li"),e(1509,"Clone "),n(1510,"a",31),e(1511,"our GitHub repository"),t()(),n(1512,"li"),e(1513,"Follow the instruction form the Readme.md"),t(),n(1514,"li"),e(1515,"Change following in "),n(1516,"a",43),e(1517,"appsettings.json"),t(),e(1518,': "SecurityTokenDescriptorExpiresInMinutes": 10, "SecurityTokenRefreshRate": 0.9 (both places)'),t(),n(1519,"li"),e(1520,"Sign-in as admin using menu: Home -> Sign-in"),t(),n(1521,"li"),e(1522,"Go to menu Admin->Articles editor"),t(),n(1523,"li"),e(1524,"Click on New Article button."),t(),n(1525,"li"),e(1526,"Fill in the form and wait for 2 minutes."),t(),n(1527,"li"),e(1528,"Click Submit button and Yes button"),t(),n(1529,"li"),e(1530,"A drawer must show up asking to confirm password. It means that your JWT token expired, but you can refresh it."),t()(),n(1531,"h2",74)(1532,"span"),e(1533,"Conclusion"),t(),n(1534,"a",75),e(1535,"#"),t()(),n(1536,"p"),e(1537,"In this article, we introduced JWT token Refresh period concept and used a middleware to implement it. In fact, we used modified source code of RateLimitMiddleware from AspNetCoreRateLimit library. It means that it still can be used to limit public endpoints (See "),n(1538,"a",43),e(1539,"GeneralRules"),t(),e(1540," example). We implemented a way for testing the middleware with MyTested library. Finally, we provided a compiled .NET application for proof of concept."),t(),n(1541,"h2",76)(1542,"span"),e(1543,"Credits"),t(),n(1544,"a",77),e(1545,"#"),t()(),n(1546,"ul")(1547,"li")(1548,"a",78),e(1549,"Ivaylo Kenov"),t()(),n(1550,"li")(1551,"a",79),e(1552,"Kalin Tsenkov"),t()(),n(1553,"li")(1554,"a",80),e(1555,"Steve Smith"),t()(),n(1556,"li")(1557,"a",81),e(1558,"Jason Taylor"),t()(),n(1559,"li")(1560,"a",82),e(1561,"Stefan Prodan"),t()(),n(1562,"li")(1563,"a",83),e(1564,"Mark Cilia Vincenti"),t()(),n(1565,"li")(1566,"a",84),e(1567,"Jimmy Bogard"),t()(),n(1568,"li")(1569,"a",85),e(1570,"Ben Morris"),t()()()()()()),l&2&&(d(),c("nzBordered",!0),d(6),c("nzOffsetTop",100),d(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,Ti)),d(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,O,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var Ai=()=>({standalone:!0});function Ni(a,s){if(a&1){let i=_();b(0),n(1,"a",69),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",70),m(3,"nz-icon",71),t()(),w()}}function Mi(a,s){if(a&1){let i=_();b(0),n(1,"a",69),x("click",function(){u(i);let r=p();return E(r.clickLink())}),n(2,"h3",70),e(3,"Alexei Cioina's blog"),t()(),w()}}var Pn=(()=>{class a{affixEl;changeDetectorRef=S(K);router=S(ne);#e=S(X);viewPort=S(te);enableNavigation=this.#e.selectors.isSwitcher();isLoading=!1;clickLink(){this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.#e.selectors.isAdminArticles()?this.router.navigate(["admin","articles"]):this.router.navigate(["articles"])})}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=""),this.viewPort.scrollToPosition([0,0])}pageHeaderInfo={};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["nz-blog-testing-angular-apps"]],viewQuery:function(l,r){if(l&1&&q(y,7),l&2){let o;U(o=j())&&(r.affixEl=o.first)}},decls:194,vars:7,consts:[[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","start"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],[1,"toc-affix",3,"nzOffsetTop"],["nz-row","","nzJustify","end"],["nz-button","","nzType","link","nzSize","small",3,"click"],["nzType","vertical-align-top"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzShowInkInFixed","",3,"nzClick","nzAffix","nzShow"],["nzHref","#h-0b79795d3efc95b9976c7c5b933afce2","nzTitle","Introduction"],["nzHref","#h-c8cadc22f79af7b361f5c3da7dcbffca","nzTitle","Testing tools for Angular"],["nzHref","#h-704dc335d9064216f8927fafe48cd590","nzTitle","Testing Angular app together with .NET Core app"],["nzHref","#h-eacbc5c7d3fd4f0f6d7816bc2b9fdb7a","nzTitle","Using Signal type in Angular together with Reactive State library"],["nzHref","#h-948a2e3548aaf7f9941a3192fa607d51","nzTitle","Credits"],[1,"markdown-title"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241110-testing-angular-apps.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nzType","edit"],[1,"markdown"],["id","h-0b79795d3efc95b9976c7c5b933afce2"],["onclick","window.location.hash = 'h-0b79795d3efc95b9976c7c5b933afce2'",1,"anchor"],[1,"pic-plus",2,"text-align","center"],["nzType","custom:zorro","nzWidth","180px","nzHeight","180px"],["nzType","custom:angular","nzWidth","180px","nzHeight","180px"],["nzType","custom:ng-zorro","nzWidth","180px","nzHeight","180px"],["href","https://cioina.azurewebsites.net/","target","_blank","rel","noopener"],["href","https://github.com/huajian123/ng-antd-admin","target","_blank","rel","noopener"],["href","https://github.com/AndyT2503/angular-conduit-signals","target","_blank","rel","noopener"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components","target","_blank","rel","noopener"],["href","https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-angular/src","target","_blank","rel","noopener"],["href","https://github.com/ngrx/platform/tree/main/modules/component-store/src","target","_blank","rel","noopener"],["href","https://github.com/AndyT2503/angular-conduit-signals/blob/dev/src/app/shared/store/auth.store.ts","target","_blank","rel","noopener"],["href","https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net9.0","target","_blank","rel","noopener"],["href","https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net9.0/wwwroot","target","_blank","rel","noopener"],["id","h-c8cadc22f79af7b361f5c3da7dcbffca"],["onclick","window.location.hash = 'h-c8cadc22f79af7b361f5c3da7dcbffca'",1,"anchor"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/package.json","target","_blank","rel","noopener"],["href","https://github.com/angular/angular/blob/main/adev/BUILD.bazel","target","_blank","rel","noopener"],[1,"language-javascript"],[1,"hljs-keyword"],[1,"hljs-title","class_"],[1,"hljs-string"],["id","h-704dc335d9064216f8927fafe48cd590"],["onclick","window.location.hash = 'h-704dc335d9064216f8927fafe48cd590'",1,"anchor"],["href","https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test","target","_blank","rel","noopener"],["href","https://cioina.azurewebsites.net/articles/dotnet-core-testing","target","_blank","rel","noopener"],["href","https://github.com/cioina/angular-test-example/tree/main/version-2","target","_blank","rel","noopener"],["href","https://github.com/cioina/angular-test-example/blob/main/version-2/home.store.spec.ts","target","_blank","rel","noopener"],["href","https://github.com/gothinkster/realworld/blob/main/api/run-api-tests.sh","target","_blank","rel","noopener"],["href","https://github.com/cypress-io/cypress-example-conduit-app/blob/master/cypress/integration/login-spec.js","target","_blank","rel","noopener"],["href","https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/apps/conduit-e2e/src/e2e/login/login.ts","target","_blank","rel","noopener"],["id","h-eacbc5c7d3fd4f0f6d7816bc2b9fdb7a"],["onclick","window.location.hash = 'h-eacbc5c7d3fd4f0f6d7816bc2b9fdb7a'",1,"anchor"],["href","https://github.com/ngrx/platform","target","_blank","rel","noopener"],["href","https://github.com/cioina/angular-test-example/tree/main/version-1","target","_blank","rel","noopener"],["href","https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/libs/auth/data-access/src/auth.store.ts","target","_blank","rel","noopener"],["id","h-948a2e3548aaf7f9941a3192fa607d51"],["onclick","window.location.hash = 'h-948a2e3548aaf7f9941a3192fa607d51'",1,"anchor"],["href","https://github.com/angular/angular/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/ant-design/ant-design-icons/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/ngrx/platform/graphs/contributors","target","_blank","rel","noopener"],["href","https://github.com/huajian123","target","_blank","rel","noopener"],["href","https://github.com/AndyT2503","target","_blank","rel","noopener"],["href","https://github.com/stefanoslig","target","_blank","rel","noopener"],[3,"click"],["nz-typography","","nzType","success"],["nzType","arrow-left"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"nz-card",1)(2,"div",2)(3,"div",3)(4,"nz-space",4),g(5,Ni,4,0,"ng-container",5)(6,Mi,4,0,"ng-container",5),t()()(),n(7,"nz-affix",6)(8,"div",7)(9,"div",3)(10,"a",8),x("click",function(){return r.scrollTop()}),m(11,"nz-icon",9),e(12,"Jump to top"),t()(),n(13,"div",3)(14,"nz-switch",10),Q("ngModelChange",function(h){return J(r.enableNavigation,h)||(r.enableNavigation=h),h}),x("ngModelChange",function(){return r.disableEnable()}),t()()(),n(15,"nz-anchor",11),x("nzClick",function(h){return r.goLink(h)}),m(16,"nz-link",12)(17,"nz-link",13)(18,"nz-link",14)(19,"nz-link",15)(20,"nz-link",16),t()(),n(21,"span",17),e(22," Testing Angular Applications"),m(23,"span",18)(24,"span",19),n(25,"a",20),m(26,"nz-icon",21),t()(),n(27,"article",22)(28,"h2",23)(29,"span"),e(30,"Introduction"),t(),n(31,"a",24),e(32,"#"),t()(),n(33,"div",25),m(34,"nz-icon",26),n(35,"span"),e(36,"+"),t(),m(37,"nz-icon",27),n(38,"span"),e(39,"="),t(),m(40,"nz-icon",28),t(),n(41,"p")(42,"a",29),e(43,"Our Angular app"),t(),e(44," Is based on "),n(45,"a",30),e(46,"ng-antd-admin"),t(),e(47," combined with "),n(48,"a",31),e(49,"angular-conduit-signals"),t(),e(50,". In addition, we use following Angular libraries direct form sources: "),n(51,"a",32),e(52,"NG-ZORRO components src"),t(),e(53,", "),n(54,"a",33),e(55,"icons-angular src"),t(),e(56," and "),n(57,"a",34),e(58,"component-store src"),t(),e(59," with some minor changes. All our reactive states look similar to "),n(60,"a",35),e(61,"auth.store.ts"),t(),e(62,`
The app communicates with the server via REST API controllers built on top of .NET Core 9. The compiled bin code is on `),n(63,"a",36),e(64,"our GitHub repository"),t(),e(65," together with "),n(66,"a",37),e(67,"compiled Angular app"),t()(),n(68,"h2",38)(69,"span"),e(70,"Testing tools for Angular"),t(),n(71,"a",39),e(72,"#"),t()(),n(73,"p"),e(74,"We use the same tools/packages as in "),n(75,"a",40),e(76,"NG-ZORRO"),t(),e(77,", which are the same as in "),n(78,"a",41),e(79,"TEST_DEPS"),t(),e(80," plus "),n(81,"code"),e(82,"puppeteer"),t(),e(83,". In addition, Angular and NG-ZORRO have a lot of classes and functions ready to use right out of the box:"),t(),n(84,"pre",42)(85,"code")(86,"span",43),e(87,"import"),t(),e(88," { "),n(89,"span",44),e(90,"ComponentFixture"),t(),e(91,", "),n(92,"span",44),e(93,"TestBed"),t(),e(94,", fakeAsync, tick, waitForAsync, inject "),n(95,"span",43),e(96,"as"),t(),e(97," testInject } "),n(98,"span",43),e(99,"from"),t(),e(100," "),n(101,"span",45),e(102,"'@angular/core/testing'"),t(),e(103,`;
`),n(104,"span",43),e(105,"import"),t(),e(106," { dispatchMouseEvent, dispatchFakeEvent, typeInElement } "),n(107,"span",43),e(108,"from"),t(),e(109," "),n(110,"span",45),e(111,"'ng-zorro-antd/core/testing'"),t(),e(112,`;
`),n(113,"span",43),e(114,"import"),t(),e(115," { provideNzIconsTesting } "),n(116,"span",43),e(117,"from"),t(),e(118," "),n(119,"span",45),e(120,"'ng-zorro-antd/icon/testing'"),t(),e(121,";"),t()(),n(122,"h2",46)(123,"span"),e(124,"Testing Angular app together with .NET Core app"),t(),n(125,"a",47),e(126,"#"),t()(),n(127,"p"),e(128,"Our actual(up to date) "),n(129,"a",48),e(130,"test project"),t(),e(131," for our .NET Core app uses in memory database which is very convenient for testing (read more about it "),n(132,"a",49),e(133,"here"),t(),e(134," ) Next, would be great to test on a real database. So, all our Angular test from "),n(135,"a",50),e(136,"our GitHub repository"),t(),e(137,` will connect with our .NET Core app which is connected to real MS SQL database. Therefore, it represents a type of integration test.
All the files ending in `),n(138,"a",51),e(139,"*.store.spec.ts"),t(),e(140," can be considered as real API testing which is an alternative to "),n(141,"a",52),e(142,"Newman"),t(),e(143," or "),n(144,"a",53),e(145,"cypress 1"),t(),n(146,"a",54),e(147,"cypress 2"),t()(),n(148,"h2",55)(149,"span"),e(150,"Using Signal type in Angular together with Reactive State library"),t(),n(151,"a",56),e(152,"#"),t()(),n(153,"p"),e(154,"Before Signal type became native in Angular, we used "),n(155,"a",57),e(156,"Reactive State library"),t(),e(157," for "),n(158,"a",58),e(159,"our integration tests"),t(),e(160,". Now, the library has implemented two ways of using Signals: "),n(161,"a",59),e(162,"@ngrx/signals"),t(),e(163," and "),n(164,"a",35),e(165,"@ngrx/component-store"),t(),e(166,". We use the second one direct from sources."),t(),n(167,"h2",60)(168,"span"),e(169,"Credits"),t(),n(170,"a",61),e(171,"#"),t()(),n(172,"ul")(173,"li")(174,"a",62),e(175,"Angular contributors"),t()(),n(176,"li")(177,"a",63),e(178,"NG-ZORRO contributors"),t()(),n(179,"li")(180,"a",64),e(181,"Ant Design contributors"),t()(),n(182,"li")(183,"a",65),e(184,"Reactive State for Angular contributors"),t()(),n(185,"li")(186,"a",66),e(187,"hua jian"),t()(),n(188,"li")(189,"a",67),e(190,"Andy Tu Hoang"),t()(),n(191,"li")(192,"a",68),e(193,"Stefanos Lignos"),t()()()()()()),l&2&&(d(),c("nzBordered",!0),d(6),c("nzOffsetTop",100),d(7),W("ngModel",r.enableNavigation),c("ngModelOptions",ee(6,Ai)),d(),c("nzAffix",!1)("nzShow",r.enableNavigation))},dependencies:[re,ie,ae,he,$,xe,se,y,oe,le,O,V,H,M,N,B,I,L,P,F,D,R,Z,Y,de,me,ce],encapsulation:2,changeDetection:0})}return a})();var ot=(()=>{class a extends fn{#e=S(X);#t=S(Zt);#a=S(Xt);#i=S(te);articleListConfig=this.#e.selectors.articleListConfig;ngrxOnStoreInit(){this.setState({articleList:[],tags:[],articleCount:0})}getTags=this.effect(Xe(i=>(i.loading.set(!0),this.#a.getTags(i.params).pipe(it(l=>{this.patchState({tags:l.tags})},l=>{nt()?console.error("Get Tags Failed",l):console.warn(`Get Tags Failed: ${l.message}`)},()=>{i.loading.set(!1)})))));queryArticle=this.effect(je(i=>{this.#e.patchState({articleListConfig:ge(Ee({},this.articleListConfig()),{currentPage:i.params.offset?this.articleListConfig().currentPage:1,filters:{limit:i.params.limit,offset:i.params.offset,tags:i.params.tags,createdAtAsc:i.params.createdAtAsc}})}),this.#n(i.loading)}));onOffsetChange=this.effect(je(i=>{this.#e.patchState({articleListConfig:ge(Ee({},this.articleListConfig()),{currentPage:i.offset,filters:ge(Ee({},this.articleListConfig().filters),{offset:Number(this.articleListConfig().filters.limit)*(i.offset-1)})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));onLimitChange=this.effect(je(i=>{this.#e.patchState({articleListConfig:ge(Ee({},this.articleListConfig()),{currentPage:1,filters:ge(Ee({},this.articleListConfig().filters),{limit:i.limit,offset:0})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));#n=this.effect(Xe(i=>(i.set(!0),(()=>{let l=this.articleListConfig()?.filters;return this.#t.getPublicArticles({limit:l.limit,offset:l.offset,tags:l.tags,createdAtAsc:l.createdAtAsc})})().pipe(it(l=>{this.patchState({articleList:l.articles,articleCount:l.total})},l=>{nt()?console.error("getPublicArticles Failed",l):console.warn(`getPublicArticles Failed: ${l.message}`),this.#e.openMessageDrawer(Ae(l.message))},()=>{i.set(!1)})))));static \u0275fac=(()=>{let i;return function(r){return(i||(i=wt(a)))(r||a)}})();static \u0275prov=ut({token:a,factory:a.\u0275fac})}return a})();var Ri=(a,s,i)=>[a,s,i];function Ii(a,s){a&1&&(n(0,"div",9),m(1,"nz-spin",11),t())}function Li(a,s){if(a&1&&(m(0,"nz-icon",14),e(1)),a&2){let i=p().$implicit;d(),ze(" ",i.title.length," ")}}function Bi(a,s){if(a&1&&(m(0,"nz-icon",15),e(1)),a&2){let i=p().$implicit;d(),ze(" ",i.slug.length," ")}}function Di(a,s){if(a&1&&(m(0,"nz-icon",16),e(1)),a&2){let i=p().$implicit;d(),ze(" ",i.id," ")}}function Fi(a,s){if(a&1){let i=_();n(0,"a",17),x("click",function(){u(i);let r=p().$implicit,o=p();return E(o.clickArticleLink(r))}),e(1),t()}if(a&2){let i=p().$implicit;d(),ze(" ",i.title," ")}}function Pi(a,s){if(a&1&&e(0),a&2){let i=p(2).$implicit;ze(" ",i.description," ")}}function Hi(a,s){if(a&1){let i=_();g(0,Pi,1,1),n(1,"a",18),x("click",function(){u(i);let r=p().$implicit,o=p();return E(o.clickArticleLink(r))}),e(2,"Read more"),m(3,"nz-icon",19),t()}if(a&2){let i=p().$implicit,l=p();ue(i.published?0:-1),d(),c("nzLoading",l.routerLinkLoadingId()===i.id)("disabled",l.routerLinkLoadingId()!==i.id&&l.routerLinkLoadingId()!==0)}}function Vi(a,s){if(a&1&&(n(0,"div",20)(1,"div",21)(2,"h5",22),e(3),Ft(4,"date"),t()()(),n(5,"div",23)(6,"div",24),m(7,"img",25),t()()),a&2){let i=p().$implicit,l=p();d(),et("id",i.slug),d(2),_e(Pt(4,7,i.createdAt,"MMMM d, yyyy")),d(4),At("nzSrc","https://picsum.photos/id/",i.id,"/300/200.jpg"),et("alt",i.title),c("nzFallback",l.fallback)("nzPlaceholder",l.fallback)}}function Oi(a,s){if(a&1&&(n(0,"nz-list-item",12),g(1,Li,2,1,"ng-template",null,3,A)(3,Bi,2,1,"ng-template",null,4,A)(5,Di,2,1,"ng-template",null,5,A),n(7,"nz-list-item-meta",13),g(8,Fi,2,1,"ng-template",null,6,A)(10,Hi,4,3,"ng-template",null,7,A),t(),g(12,Vi,8,10,"ng-template",null,8,A),t()),a&2){let i=k(2),l=k(4),r=k(6),o=k(9),h=k(11),C=k(13);c("nzActions",Dt(4,Ri,i,l,r))("nzExtra",C),d(7),c("nzTitle",o)("nzDescription",h)}}function Ui(a,s){if(a&1&&(n(0,"div",20)(1,"div",24)(2,"h5",26),e(3),t()()()),a&2){let i=s,l=p(2);d(3),It(" ",l.articleListConfig().filters.limit*(l.articleListConfig().currentPage-1)+1," - ",l.articleListConfig().filters.limit*l.articleListConfig().currentPage>i?i:l.articleListConfig().filters.limit*l.articleListConfig().currentPage," of ",i," records ")}}function ji(a,s){if(a&1&&g(0,Ui,4,3,"div",20),a&2){let i,l=p();ue((i=l.articlesCount())?0:-1,i)}}function Wi(a,s){if(a&1){let i=_();n(0,"nz-pagination",27),x("nzPageSizeChange",function(r){u(i);let o=p();return E(o.setPageSize(r))})("nzPageIndexChange",function(r){u(i);let o=p();return E(o.setPage(r))}),t()}if(a&2){let i=p();c("nzShowSizeChanger",!0)("nzPageSize",i.articleListConfig().filters.limit)("nzPageIndex",i.articleListConfig().currentPage)("nzTotal",i.articlesCount())}}var Hn=(()=>{class a{articleList;articlesCount;isLoading;articleListConfig;oldLimit;nzSetPage=new Me;nzSetPageSize=new Me;router=S(ne);changeDetectorRef=S(K);routerLinkLoadingId=Ae(0);fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==";clickArticleLink(i){this.routerLinkLoadingId.set(i.id),this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.router.navigate(["articles",i.slug])})}setPage(i){this.oldLimit()===this.articleListConfig().filters.limit?this.nzSetPage.emit(i):this.oldLimit.set(this.articleListConfig().filters.limit)}setPageSize(i){this.articleListConfig().currentPage>Math.ceil(this.articlesCount()/i)?this.oldLimit.set(this.articleListConfig().filters.limit):this.oldLimit.set(i),this.nzSetPageSize.emit(i)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["app-articles"]],inputs:{articleList:"articleList",articlesCount:"articlesCount",isLoading:"isLoading",articleListConfig:"articleListConfig",oldLimit:"oldLimit"},outputs:{nzSetPage:"nzSetPage",nzSetPageSize:"nzSetPageSize"},decls:8,vars:7,consts:[["item",""],["footer",""],["pagination",""],["starAction",""],["likeAction",""],["msgAction",""],["nzTitle",""],["nzDescription",""],["extra",""],[1,"app-article-preview"],[3,"hidden","nzDataSource","nzItemLayout","nzRenderItem","nzPagination","nzFooter"],["nzTip","Loading posts..."],[3,"nzActions","nzExtra"],[3,"nzTitle","nzDescription"],["nzType","star-o",2,"margin-right","8px"],["nzType","like-o",2,"margin-right","8px"],["nzType","message",2,"margin-right","8px"],[3,"click"],["nz-button","","nzType","link",3,"click","nzLoading","disabled"],["nzType","arrow-right"],["nz-row","","nzJustify","end"],["nz-col","",3,"id"],["nz-typography","","nzType","secondary"],["nz-row",""],["nz-col",""],["nz-image","","width","300px","height","200px",3,"nzSrc","nzFallback","nzPlaceholder","alt"],["nz-typography",""],[3,"nzPageSizeChange","nzPageIndexChange","nzShowSizeChanger","nzPageSize","nzPageIndex","nzTotal"]],template:function(l,r){if(l&1&&(g(0,Ii,2,0,"div",9),n(1,"nz-list",10),g(2,Oi,14,8,"ng-template",null,0,A)(4,ji,1,1,"ng-template",null,1,A)(6,Wi,1,4,"ng-template",null,2,A),t()),l&2){let o=k(3),h=k(5),C=k(7);ue(r.isLoading()?0:-1),d(),c("hidden",r.isLoading())("nzDataSource",r.articleList())("nzItemLayout","vertical")("nzRenderItem",o)("nzPagination",C)("nzFooter",h)}},dependencies:[Ut,dn,mn,O,V,H,Cn,zn,yn,_n,R,$t,D,pn,kn,vn,B,I,L,M,N,De,P,F],encapsulation:2,changeDetection:0})}return a})();var Gi=(a,s)=>[a,s],Vn=()=>({standalone:!0});function qi(a,s){if(a&1&&(b(0),n(1,"h5",16),m(2,"nz-icon",17),t(),w()),a&2){let i=p(2);d(2),c("nzTooltipTitle",i.applyTooltipTitle)}}function Ki(a,s){a&1&&g(0,qi,3,1,"ng-container",11)}function Yi(a,s){if(a&1){let i=_();b(0),n(1,"button",18),x("nzOnConfirm",function(){u(i);let r=p();return E(r.confirmApply())}),m(2,"nz-icon",19),e(3," Apply "),t(),w()}if(a&2){let i=p(),l=k(9);d(),c("disabled",i.disableApply())("nzIcon",l)}}function Zi(a,s){if(a&1){let i=_();b(0),n(1,"button",20),x("nzOnConfirm",function(){u(i);let r=p();return E(r.confirmClose())}),m(2,"nz-icon",21),e(3," Close "),t(),w()}if(a&2){p();let i=k(7);d(),c("nzIcon",i)("nzOkDanger",!0)}}function Xi(a,s){a&1&&(b(0),n(1,"h4",16),m(2,"nz-icon",22),t(),w())}function $i(a,s){a&1&&(b(0),n(1,"h5",23),e(2,"Do you want to close without changes?"),t(),w())}function ea(a,s){a&1&&(n(0,"nz-space",10),g(1,Xi,3,0,"ng-container",11)(2,$i,3,0,"ng-container",11),t())}function ta(a,s){a&1&&(b(0),n(1,"h4",24),m(2,"nz-icon",22),t(),w())}function na(a,s){a&1&&(b(0),n(1,"h5",23),e(2,"Do you want to apply changes?"),t(),w())}function ia(a,s){a&1&&(n(0,"nz-space",10),g(1,ta,3,0,"ng-container",11)(2,na,3,0,"ng-container",11),t())}function aa(a,s){if(a&1){let i=_();b(0),n(1,"nz-switch",25),Q("ngModelChange",function(r){u(i);let o=p();return J(o.isAscending,r)||(o.isAscending=r),E(r)}),x("click",function(){u(i);let r=p();return E(r.ascendingEnable())}),t(),w()}if(a&2){let i=p();d(),W("ngModel",i.isAscending),c("ngModelOptions",ee(2,Vn))}}function ra(a,s){if(a&1){let i=_();b(0),n(1,"nz-switch",26),Q("ngModelChange",function(r){u(i);let o=p();return J(o.showSearch,r)||(o.showSearch=r),E(r)}),x("click",function(){u(i);let r=p();return E(r.disableEnable())}),t(),w()}if(a&2){let i=p();d(),W("ngModel",i.showSearch),c("ngModelOptions",ee(3,Vn))("disabled",i.leftSearch||i.rightSearch)}}function la(a,s){a&1&&(b(0),n(1,"h5",16),m(2,"nz-icon",27),t(),w())}function oa(a,s){a&1&&g(0,la,3,0,"ng-container",11)}function sa(a,s){a&1&&(b(0),n(1,"h4",33),e(2,"Remaining Tags"),t(),w())}function ma(a,s){a&1&&(b(0),n(1,"h5",33),m(2,"nz-icon",34),t(),w())}function da(a,s){if(a&1&&m(0,"nz-option",30),a&2){let i=s.$implicit;c("nzLabel",i.label)("nzValue",i.value)}}function pa(a,s){if(a&1&&(m(0,"nz-icon",35),e(1)),a&2){let i=s.$implicit;c("nzType","sort-"+i.nzValue),d(),ze(" ",i.nzLabel," ")}}function ca(a,s){if(a&1){let i=_();n(0,"tr",36),x("click",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),n(1,"td",37),x("nzCheckedChange",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),t(),n(2,"td"),e(3),t()()}if(a&2){let i=s.$implicit,l=p().disabled;d(),c("nzChecked",i.checked)("nzDisabled",l||i.disabled),d(2),_e(i.title)}}function xa(a,s){if(a&1){let i=_();n(0,"div",28)(1,"div",9)(2,"nz-space",10),g(3,sa,3,0,"ng-container",11)(4,ma,3,0,"ng-container",11),t()()(),n(5,"div",28)(6,"div",9)(7,"nz-select",29),Q("ngModelChange",function(r){u(i);let o=p();return J(o.orderModelLeft,r)||(o.orderModelLeft=r),E(r)}),x("ngModelChange",function(r){u(i);let o=p();return E(o.handleOrderLeft(r))}),Ve(8,da,1,2,"nz-option",30,He),t(),g(10,pa,2,2,"ng-template",null,4,A),t()(),n(12,"nz-table",31,5)(14,"thead")(15,"tr")(16,"th",32),x("nzCheckedChange",function(r){let o=u(i).onItemSelectAll;return E(o(r))}),t(),n(17,"th"),e(18,"All"),t()()(),n(19,"tbody"),Ve(20,ca,4,3,"tr",null,He),t()()}if(a&2){let i=s.$implicit,l=s.stat,r=s.disabled,o=k(11),h=k(13),C=p();d(7),c("nzBackdrop",!0)("nzCustomTemplate",o),W("ngModel",C.orderModelLeft),d(),Oe(C.listOfOption),d(4),c("nzData",C.convertItemsRight(i)),d(4),c("nzDisabled",r)("nzChecked",l.checkAll)("nzIndeterminate",l.checkHalf),d(4),Oe(h.data)}}function ha(a,s){a&1&&(b(0),n(1,"h4",24),e(2,"Selected Tags"),t(),w())}function Sa(a,s){a&1&&(b(0),n(1,"h5",24),m(2,"nz-icon",38),t(),w())}function ua(a,s){if(a&1&&m(0,"nz-option",30),a&2){let i=s.$implicit;c("nzLabel",i.label)("nzValue",i.value)}}function Ea(a,s){if(a&1&&(m(0,"nz-icon",35),e(1)),a&2){let i=s.$implicit;c("nzType","sort-"+i.nzValue),d(),ze(" ",i.nzLabel," ")}}function ga(a,s){if(a&1){let i=_();n(0,"tr",36),x("click",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),n(1,"td",37),x("nzCheckedChange",function(){let r=u(i).$implicit,o=p().onItemSelect;return E(o(r))}),t(),n(2,"td"),e(3),t()()}if(a&2){let i=s.$implicit,l=p().disabled;d(),c("nzChecked",i.checked)("nzDisabled",l||i.disabled),d(2),_e(i.title)}}function fa(a,s){if(a&1){let i=_();n(0,"div",28)(1,"div",9)(2,"nz-space",10),g(3,ha,3,0,"ng-container",11)(4,Sa,3,0,"ng-container",11),t()()(),n(5,"div",28)(6,"div",9)(7,"nz-select",29),Q("ngModelChange",function(r){u(i);let o=p();return J(o.orderModelRight,r)||(o.orderModelRight=r),E(r)}),x("ngModelChange",function(r){u(i);let o=p();return E(o.handleOrderRight(r))}),Ve(8,ua,1,2,"nz-option",30,He),t(),g(10,Ea,2,2,"ng-template",null,6,A),t()(),n(12,"nz-table",31,7)(14,"thead")(15,"tr")(16,"th",32),x("nzCheckedChange",function(r){let o=u(i).onItemSelectAll;return E(o(r))}),t(),n(17,"th"),e(18,"All"),t()()(),n(19,"tbody"),Ve(20,ga,4,3,"tr",null,He),t()()}if(a&2){let i=s.$implicit,l=s.stat,r=s.disabled,o=k(11),h=k(13),C=p();d(7),c("nzBackdrop",!0)("nzCustomTemplate",o),W("ngModel",C.orderModelRight),d(),Oe(C.listOfOption),d(4),c("nzData",C.convertItemsLeft(i)),d(4),c("nzDisabled",r)("nzChecked",l.checkAll)("nzIndeterminate",l.checkHalf),d(4),Oe(h.data)}}var On=(()=>{class a{params;nzMessageService=S(gn);drawerRef=S(Wt);selectedCount=0;list=[];showSearch=!1;leftSearch=!1;rightSearch=!1;selectedTags=[];applyTooltipTitle="";orderModelLeft=null;orderModelRight=null;listOfOption=[{label:"Ascending",value:"ascending"},{label:"Descending",value:"descending"}];sortOrder=null;isAscending=!1;createdAtAsc=null;initialCreatedAtAsc=null;isTagListChange(){let i=this.selectedTags||[];if(this.selectedTags=[],this.list.filter(r=>r.direction==="right").forEach(r=>this.selectedTags.push(r.id)),this.createdAtAsc!==this.initialCreatedAtAsc||i?.length!==this.selectedTags.length)return!0;let l=!0;return i.forEach(r=>l=l&&this.selectedTags.includes(r)),!l}ngOnInit(){this.params.createdAtAsc===void 0?(this.isAscending=!1,this.createdAtAsc=null):(this.isAscending=this.params.createdAtAsc,this.createdAtAsc=this.isAscending),this.initialCreatedAtAsc=this.createdAtAsc,this.params.tags?this.selectedTags=this.params.tags:(this.selectedTags=[],this.params.tagList.forEach(i=>this.selectedTags.push(i.id))),this.list=[],this.params.tagList.forEach(i=>this.list.push({title:i.title,id:i.id,direction:this.selectedTags.includes(i.id)?"right":"left"})),this.selectedCount=this.selectedTags.length}ascendingEnable(){this.isAscending?this.createdAtAsc=null:this.createdAtAsc=!0}disableEnable(){this.showSearch||(this.showSearch=this.leftSearch||this.rightSearch)}handleSearchChange(i){i.direction==="left"?this.leftSearch=i.value!=="":this.rightSearch=i.value!==""}handleChange(i){i.from==="right"?(this.orderModelLeft=null,this.sortOrder={direction:"left",sortOrder:null},this.selectedCount-=i.list.length):(this.orderModelRight=null,this.sortOrder={direction:"right",sortOrder:null},this.selectedCount+=i.list.length)}handleFilterOption(i,l){return l.title.toLowerCase().includes(i.toLowerCase())}confirmClose(){this.isTagListChange()&&this.nzMessageService.warning("Changes were not saved!"),this.drawerRef.close(!1)}disableApply(){return this.selectedCount<1?(this.applyTooltipTitle="It should be at least one selected tag.",!0):this.selectedCount>100?(this.applyTooltipTitle="It should not be more than 100 selected tags.",!0):!1}confirmApply(){this.isTagListChange()?(this.nzMessageService.info("Applying selected tags."),this.selectedTags.length===this.list.length&&(this.selectedTags=null),this.drawerRef.close({tags:this.selectedTags,createdAtAsc:this.createdAtAsc})):this.drawerRef.close(null)}convertItemsRight(i){return i.filter(l=>!l.hide)}convertItemsLeft(i){return i.filter(l=>!l.hide)}handleOrderRight(i){this.sortOrder={direction:"right",sortOrder:i}}handleOrderLeft(i){this.sortOrder={direction:"left",sortOrder:i}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["app-article-listing-tags"]],inputs:{params:"params"},decls:24,vars:11,consts:[["closeTpl",""],["applyTpl",""],["renderList",""],["renderSelectedList",""],["orderTemplateLeft",""],["t1",""],["orderTemplateRight",""],["t2",""],["nz-row","","nzJustify","end"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],["nz-row","","nzJustify","end",2,"margin-top","20px"],["nz-row","","nzJustify","start",2,"margin-bottom","20px"],["nzSize","small","nzAlign","center"],[3,"nzSearchChange","nzChange","nzDataSource","nzShowSearch","nzShowSelectAll","nzFilterOption","nzRenderList","nzSortOrder"],["nz-typography","","nzType","danger"],["nzType","info-circle","nz-tooltip","",3,"nzTooltipTitle"],["nz-button","","nzType","primary","nzShape","round","nz-popconfirm","","nzPopconfirmTitle"," ","nzPopconfirmShowArrow","false","nzOkText","Yes","nzCancelText","No",3,"nzOnConfirm","disabled","nzIcon"],["nzType","check"],["nz-button","","nzDanger","true","nzShape","round","nz-popconfirm","","nzPopconfirmTitle"," ","nzPopconfirmShowArrow","false","nzOkText","Yes","nzCancelText","No",3,"nzOnConfirm","nzIcon","nzOkDanger"],["nzType","close"],["nzType","question-circle-o"],["nz-typography",""],["nz-typography","","nzType","success"],["nzCheckedChildren","Oldest articles first","nzUnCheckedChildren","Newest articles first",3,"ngModelChange","click","ngModel","ngModelOptions"],["nzCheckedChildren","Hide Search","nzUnCheckedChildren","Show Search",3,"ngModelChange","click","ngModel","ngModelOptions","disabled"],["nzType","info-circle","nz-tooltip","","nzTooltipTitle","Clear out all search boxes in order to hide them."],["nz-row","","nzJustify","center"],["nzAllowClear","","nzPlaceHolder","Sort Order...",3,"ngModelChange","nzBackdrop","nzCustomTemplate","ngModel"],[3,"nzLabel","nzValue"],["nzSize","small",3,"nzData"],["nzShowCheckbox","",3,"nzCheckedChange","nzDisabled","nzChecked","nzIndeterminate"],["nz-typography","","nzType","warning"],["nzType","info-circle","nz-tooltip","","nzTooltipTitle","Here are all remaining tags."],[3,"nzType"],[3,"click"],["nzShowCheckbox","",3,"nzCheckedChange","nzChecked","nzDisabled"],["nzType","info-circle","nz-tooltip","","nzTooltipTitle","Here are all selected tags."]],template:function(l,r){if(l&1){let o=_();n(0,"div",8)(1,"div",9)(2,"nz-space",10),g(3,Ki,1,0,"ng-container")(4,Yi,4,2,"ng-container",11)(5,Zi,4,2,"ng-container",11),t()(),g(6,ea,3,0,"ng-template",null,0,A)(8,ia,3,0,"ng-template",null,1,A),t(),n(10,"div",12)(11,"div",9)(12,"nz-space",10),g(13,aa,2,3,"ng-container",11),t()()(),n(14,"div",13)(15,"div",9)(16,"nz-space",14),g(17,ra,2,4,"ng-container",11)(18,oa,1,0,"ng-container"),t()()(),n(19,"nz-transfer",15),x("nzSearchChange",function(C){return u(o),E(r.handleSearchChange(C))})("nzChange",function(C){return u(o),E(r.handleChange(C))}),g(20,xa,22,7,"ng-template",null,2,A)(22,fa,22,7,"ng-template",null,3,A),t()}if(l&2){let o=k(21),h=k(23);d(3),ue(r.disableApply()?3:-1),d(15),ue(r.leftSearch||r.rightSearch?18:-1),d(),c("nzDataSource",r.list)("nzShowSearch",r.showSearch)("nzShowSelectAll",!1)("nzFilterOption",r.handleFilterOption)("nzRenderList",Bt(8,Gi,o,h))("nzSortOrder",r.sortOrder)}},dependencies:[re,ie,ae,B,I,L,Ye,Yt,O,V,H,M,N,De,Ze,R,Z,Y,D,Sn,cn,en,nn,tn,hn,rn,xn,an,Nn,An,En,un,de,me,sn,ln,on,P,F],encapsulation:2,changeDetection:0})}return a})();var ba=["drawerTitleTemplate"];function wa(a,s){a&1&&(b(0),n(1,"h4",13),m(2,"nz-icon",14),t(),w())}function _a(a,s){a&1&&(b(0),n(1,"h5",15),e(2,"Do you want to reload all articles?"),t(),w())}function za(a,s){a&1&&(n(0,"nz-space",7),g(1,wa,3,0,"ng-container",8)(2,_a,3,0,"ng-container",8),t())}function ya(a,s){if(a&1){let i=_();b(0),n(1,"button",11),x("nzOnConfirm",function(){u(i);let r=p();return E(r.selectAll())}),m(2,"nz-icon",12),t(),g(3,za,3,0,"ng-template",null,1,A),w()}if(a&2){let i=k(4),l=p();d(),c("nzLoading",l.isArticlesLoading())("nzIcon",i)}}function Ca(a,s){if(a&1){let i=_();b(0),n(1,"button",16),x("click",function(){u(i);let r=p();return E(r.openTagsFilter())}),m(2,"nz-icon",17),e(3," Tags "),t(),n(4,"nz-badge",18),m(5,"a",19),t(),w()}if(a&2){let i=p();d(),c("nzLoading",i.isTagsLoading()),d(3),c("nzCount",i.tagCount())}}function Ta(a,s){if(a&1&&(n(0,"div",5)(1,"div",6)(2,"h3",20),e(3),t()()()),a&2){let i=p();d(3),_e(i.title)}}var jn=(()=>{class a{drawerTitleTemplate=Ct("drawerTitleTemplate");#e=S(ot);#t=S(X);articleListConfig=this.#t.selectors.articleListConfig;windowWidth=this.#t.selectors.width;articleCount=this.#e.selectors.articleCount;articleList=this.#e.selectors.articleList;tagList=this.#e.selectors.tags;drawerService=S(Kt);isTagsLoading=Ae(!1);isArticlesLoading=Ae(!1);tagCount=Vt(()=>this.articleListConfig()?.filters.tags?this.articleListConfig().filters.tags.length:0);oldLimit=Ae(this.articleListConfig().filters.limit);title="";noCancel(){return new Promise(l=>{try{l(!1)}finally{}})}ngOnInit(){this.#t.setAdminArticles(!1);let i=this.articleListConfig()?.filters;(i?.tags===void 0||i?.tags===null)&&(i?.createdAtAsc===void 0||i?.createdAtAsc===null)?this.selectAll():(this.#e.getTags({loading:this.isTagsLoading,params:null}),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:i.limit,offset:0,tags:i.tags,createdAtAsc:i.createdAtAsc}}))}selectAll(){this.#e.getTags({loading:this.isTagsLoading,params:null}),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:10,offset:0}}),this.oldLimit.set(10)}onPageOffsetChange(i){this.#e.onOffsetChange({loading:this.isArticlesLoading,offset:i})}onPageLimitChange(i){this.#e.onLimitChange({loading:this.isArticlesLoading,limit:i})}openTagsFilter(){if(this.isTagsLoading())return;this.isTagsLoading.set(!0),this.title="Article Tags";let i=this.articleListConfig()?.filters;this.drawerService.create({nzTitle:this.drawerTitleTemplate(),nzContent:On,nzWidth:this.windowWidth()>600?600:this.windowWidth(),nzClosable:!1,nzOnCancel:this.noCancel,nzContentParams:{params:{tagList:this.tagList(),tags:i.tags,createdAtAsc:i.createdAtAsc}}}).afterClose.subscribe(r=>{if(r){let o=this.articleListConfig()?.filters;this.#e.queryArticle({loading:this.isArticlesLoading,params:ge(Ee({},r),{limit:o.limit,offset:0})})}this.isTagsLoading.set(!1)})}pageHeaderInfo={title:"Articles",desc:"This page is a symbiose between dynamic (.NET Core, SQL Server database) and static (JavaScript, CSS, icon, etc.) resources. All articles are served as static content from JavaScript files compiled by Angular framework. In addition, JavaScript files are served via lazy loading. Articles metadata is stored in the database and served dynamically by .NET Core API controllers."};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=v({type:a,selectors:[["app-home-listing"]],viewQuery:function(l,r){l&1&&Mt(r.drawerTitleTemplate,ba,5),l&2&&Rt()},features:[Lt([jt(ot)])],decls:14,vars:7,consts:[["drawerTitleTemplate",""],["applyTpl",""],[3,"pageHeaderInfo"],[1,"normal-table-wrap","bg-color-no","p-b-50"],[1,"m-b-20",3,"nzBordered"],["nz-row","","nzJustify","center"],["nz-col",""],["nzSize","small","nzAlign","baseline"],[4,"nzSpaceItem"],["nz-row","","nzJustify","end"],[3,"nzSetPage","nzSetPageSize","articleList","articlesCount","isLoading","articleListConfig","oldLimit"],["nz-button","","nzType","primary","nzShape","circle","nz-popconfirm","","nzPopconfirmTitle"," ","nzPopconfirmShowArrow","false","nzOkText","Yes","nzCancelText","No",3,"nzOnConfirm","nzLoading","nzIcon"],["nzType","sync"],["nz-typography","","nzType","success"],["nzType","question-circle-o"],["nz-typography",""],["nz-button","","nzType","primary","nzShape","round",3,"click","nzLoading"],["nzType","tag"],[3,"nzCount"],[1,"head-example"],["nz-typography","","nzType","warning"]],template:function(l,r){if(l&1){let o=_();m(0,"app-page-header",2),n(1,"div",3)(2,"nz-card",4)(3,"div",5)(4,"div",6)(5,"nz-space",7),g(6,ya,5,2,"ng-container",8),t()()(),n(7,"div",9)(8,"div",6)(9,"nz-space",7),g(10,Ca,6,2,"ng-container",8),t()()(),n(11,"app-articles",10),x("nzSetPage",function(C){return u(o),E(r.onPageOffsetChange(C))})("nzSetPageSize",function(C){return u(o),E(r.onPageLimitChange(C))}),t(),g(12,Ta,4,1,"ng-template",null,0,A),t()()}l&2&&(c("pageHeaderInfo",r.pageHeaderInfo),d(2),c("nzBordered",!0),d(9),c("articleList",r.articleList)("articlesCount",r.articleCount)("isLoading",r.isArticlesLoading)("articleListConfig",r.articleListConfig)("oldLimit",r.oldLimit))},dependencies:[Tn,Hn,wn,bn,B,I,L,Ye,oe,le,M,N,De,Ze,R,Z,Y,D,P,F,O,V,H],encapsulation:2,changeDetection:0})}return a})();var vs=[{path:"",pathMatch:"full",title:"Articles",data:{key:"articles"},component:jn},{path:"what-version-of-this-blog",title:"What Version?",data:{key:"what-version-of-this-blog"},component:Rn},{path:"svg-icons",title:"SVG Icons",data:{key:"svg-icons"},component:In},{path:"dotnet-core-testing",title:"ASP.NET Testing",data:{key:"dotnet-core-testing"},component:Ln},{path:"about-this-blog",title:"My Blog",data:{key:"about-this-blog"},component:Bn},{path:"test-readme",title:"MyTested Example",data:{key:"test-readme"},component:Dn},{path:"ratelimit-middleware",title:"JWT Token Refresh",data:{key:"ratelimit-middleware"},component:Fn},{path:"testing-angular-apps",title:"Testing Angular Apps",data:{key:"testing-angular-apps"},component:Pn}];export{vs as BLOG_ROUTES};
