import{n as s,t as r}from"./chunk-CK8a7LA6.js";import{Bn as eg,Cr as md,Ct as Ow,Dn as _w,Dt as Qh,Et as Qe,Gn as fg,Gt as Tl,Hn as ew,Jt as U1,Kr as se,L as Gt,Ln as de,Lt as Sg,Nn as bu,Nr as og,Nt as Rb,O as F1,Oi as zb,On as ae,Pn as cD,Pt as Re,R as Gw,Si as xw,Sn as _,Ur as rV,V as Hb,Vn as ev,Wn as fe,Wr as sD,X as JD,Xn as gd,Xr as tg,Y as Iv,_ as By,_i as xb,a as $w,ai as vE,an as Wi$1,ar as hw,bi as xl,bt as O1,ci as vg,cn as Wu,di as wC,dt as Mg,ei as tw,g as Bw,hr as kb,ht as Nb,in as Vw,jn as bC,jr as oV,kn as ag,l as Ag,lt as Ll,pn as YD,pr as jw,qt as Tu,st as Kw,tn as V1,tr as hd,vi as xg,vt as Nl,wi as yd,xn as Zw,xt as Ob,y as Cc,yr as kw,zt as Sl}from"./chunk-DwsYIa9-.js";import{Bt as tc,N as Sa$1,R as Ve,ct as d9,d as Gl,jt as p9,mt as hc,s as Da,st as d7,u as G4}from"./chunk-BaoWqzfF.js";import{I as bg,N as _u,O as Xf,tt as sd,x as Te$1}from"./chunk-Dk9GcpQz.js";import{B as ma$1,C as Ui$1,G as qi$1,M as ga$1,O as _n,P as ji$1,V as ml,a as Ds,g as Nr,x as So}from"./chunk-Dt3vlMuh.js";import{c as cr,d as nt,l as ir,n as Fa,o as Za,r as Jo,u as lt$1}from"./chunk-DrGlg5bt.js";import{c as ea$1,i as Qi$1,n as Dn$1,p as ta$1,r as Kn$1}from"./chunk-CW2i1SS3.js";import"./chunk-pxgF5FFR.js";import{n}from"./chunk-D_wcKfaa.js";import{B as qr,C as Tp,E as Yi,F as lo,H as rs,I as mm,L as ns,M as dr,O as Z0,R as o0,U as ss,V as rr,W as ts,b as Ql,f as $u,g as Jl,h as Dl,j as dm$1,k as Zi$1,n as Et,p as At,t as Bt,w as Un$1,y as Pl,z as pr}from"./main-3BTUZWHQ.js";import{t as en}from"./chunk-Cy-dMvtp.js";import{i as vi$1,n as Wn$1,r as gn,t as Vn}from"./chunk-DXfCNpHi.js";import{n as fn,t as Bn$1}from"./chunk-BzA7cBDS.js";import{_ as pe,f as ie,g as Ve$1,h as oe,m as me,p as je}from"./chunk-DFOTZA7i.js";import{n as bt,r as re,t as ae$1}from"./chunk-P1ibnssf.js";import{n as pa$1,t as lt$2}from"./chunk-BWb0mjb9.js";var Bn=`alert`;var yt=(()=>{let a,h=[],i=[],o,r=[],c=[];return class Ct{static{let _=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;a=[Gl()],o=[Gl()],bC(null,null,a,{kind:`field`,name:`nzCloseable`,static:!1,private:!1,access:{has:H=>`nzCloseable`in H,get:H=>H.nzCloseable,set:(H,Ie)=>{H.nzCloseable=Ie}},metadata:_},h,i),bC(null,null,o,{kind:`field`,name:`nzShowIcon`,static:!1,private:!1,access:{has:H=>`nzShowIcon`in H,get:H=>H.nzShowIcon,set:(H,Ie)=>{H.nzShowIcon=Ie}},metadata:_},r,c),_&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_})}cdr=_(F1);animationType=_(By,{optional:!0});dir=_(Sa$1).valueSignal;_nzModuleName=Bn;nzAction=null;nzCloseText=null;nzIconType=null;nzMessage=null;nzDescription=null;nzType=`info`;nzCloseable=wC(this,h,!1);nzShowIcon=(wC(this,i),wC(this,r,!1));nzBanner=(wC(this,c),!1);nzNoAnimation=!1;nzIcon=null;nzOnClose=new Qe;closed=!1;iconTheme=`fill`;inferredIconType=`info-circle`;isTypeSet=!1;isShowIconSet=!1;constructor(){G4(Bn,()=>this.cdr.markForCheck())}closeAlert(){this.closed=!0,(this.nzNoAnimation||this.animationType===`NoopAnimations`)&&this.nzOnClose.emit(!0)}onLeaveAnimationDone(_){let H=_.target;if(this.nzNoAnimation||this.animationType===`NoopAnimations`){_.animationComplete();return}H.classList.add(`ant-alert-motion-leave`,`ant-alert-motion-leave-active`);let Ie=()=>{H.removeEventListener(`transitionend`,Ie),this.nzOnClose.emit(!0),_.animationComplete()};H.addEventListener(`transitionend`,Ie)}ngOnChanges(_){let{nzShowIcon:H,nzDescription:Ie,nzType:pt,nzBanner:ct}=_;if(H&&(this.isShowIconSet=!0),pt)switch(this.isTypeSet=!0,this.nzType){case`error`:this.inferredIconType=`close-circle`;break;case`success`:this.inferredIconType=`check-circle`;break;case`info`:this.inferredIconType=`info-circle`;break;case`warning`:this.inferredIconType=`exclamation-circle`}Ie&&(this.iconTheme=this.nzDescription?`outline`:`fill`),ct&&(this.isTypeSet||(this.nzType=`warning`),this.isShowIconSet||(this.nzShowIcon=!0))}static ɵfac=function(H){return new(H||Ct)};static ɵcmp=(function(){function _(C,ee){C&1&&og(0)}function H(C,ee){if(C&1&&Qh(0,_,1,0,`ng-container`,7),C&2){let A=zb(3);eg(`nzStringTemplateOutlet`,A.nzIcon)}}function Ie(C,ee){if(C&1&&tg(0,`nz-icon`,6),C&2){let A=zb(3);eg(`nzType`,A.nzIconType||A.inferredIconType)(`nzTheme`,A.iconTheme)}}function pt(C,ee){if(C&1&&(Wi$1(0,`div`,2),Nb(1,H,1,1,`ng-container`)(2,Ie,1,2,`nz-icon`,6),Tl()),C&2){let A=zb(2);vE(),xb(A.nzIcon?1:2)}}function ct(C,ee){if(C&1&&(Nl(0),_w(1),Sl()),C&2){let A=zb(4);vE(),Mg(A.nzMessage)}}function qn(C,ee){if(C&1&&(Wi$1(0,`span`,8),Qh(1,ct,2,1,`ng-container`,7),Tl()),C&2){let A=zb(3);vE(),eg(`nzStringTemplateOutlet`,A.nzMessage)}}function Zn(C,ee){if(C&1&&(Nl(0),_w(1),Sl()),C&2){let A=zb(4);vE(),Mg(A.nzDescription)}}function Xn(C,ee){if(C&1&&(Wi$1(0,`span`,9),Qh(1,Zn,2,1,`ng-container`,7),Tl()),C&2){let A=zb(3);vE(),eg(`nzStringTemplateOutlet`,A.nzDescription)}}function $n(C,ee){if(C&1&&(Wi$1(0,`div`,3),Nb(1,qn,2,1,`span`,8),Nb(2,Xn,2,1,`span`,9),Tl()),C&2){let A=zb(2);vE(),xb(A.nzMessage?1:-1),vE(),xb(A.nzDescription?2:-1)}}function ei(C,ee){if(C&1&&(Nl(0),_w(1),Sl()),C&2){let A=zb(3);vE(),Mg(A.nzAction)}}function ti(C,ee){if(C&1&&(Wi$1(0,`div`,4),Qh(1,ei,2,1,`ng-container`,7),Tl()),C&2){let A=zb(2);vE(),eg(`nzStringTemplateOutlet`,A.nzAction)}}function ni(C,ee){if(C&1&&(Nl(0),Wi$1(1,`span`,12),_w(2),Tl(),Sl()),C&2){let A=zb(4);vE(2),Mg(A.nzCloseText)}}function ii(C,ee){if(C&1&&Qh(0,ni,3,1,`ng-container`,7),C&2){let A=zb(3);eg(`nzStringTemplateOutlet`,A.nzCloseText)}}function ai(C,ee){C&1&&tg(0,`nz-icon`,11)}function ri(C,ee){if(C&1){let A=Hb();Wi$1(0,`button`,10),ag(`click`,function(){md(A);let xt=zb(2);return yd(xt.closeAlert())}),Nb(1,ii,1,1,`ng-container`)(2,ai,1,0,`nz-icon`,11),Tl()}if(C&2){let A=zb(2);vE(),xb(A.nzCloseText?1:2)}}function oi(C,ee){if(C&1){let A=Hb();Wi$1(0,`div`,1),Cc(function(xt){md(A);let si=zb();return yd(si.onLeaveAnimationDone(xt))}),Nb(1,pt,3,1,`div`,2),Nb(2,$n,3,2,`div`,3),Nb(3,ti,2,1,`div`,4),Nb(4,ri,3,1,`button`,5),Tl()}if(C&2){let A=zb();vg(`ant-alert-rtl`,A.dir()===`rtl`)(`ant-alert-success`,A.nzType===`success`)(`ant-alert-info`,A.nzType===`info`)(`ant-alert-warning`,A.nzType===`warning`)(`ant-alert-error`,A.nzType===`error`)(`ant-alert-no-icon`,!A.nzShowIcon)(`ant-alert-banner`,A.nzBanner)(`ant-alert-closable`,A.nzCloseable)(`ant-alert-with-description`,!!A.nzDescription),eg(`nzNoAnimation`,A.nzNoAnimation),vE(),xb(A.nzShowIcon?1:-1),vE(),xb(A.nzMessage||A.nzDescription?2:-1),vE(),xb(A.nzAction?3:-1),vE(),xb(A.nzCloseable||A.nzCloseText?4:-1)}}return YD({type:Ct,selectors:[[`nz-alert`]],inputs:{nzAction:`nzAction`,nzCloseText:`nzCloseText`,nzIconType:`nzIconType`,nzMessage:`nzMessage`,nzDescription:`nzDescription`,nzType:`nzType`,nzCloseable:[2,`nzCloseable`,`nzCloseable`,V1],nzShowIcon:[2,`nzShowIcon`,`nzShowIcon`,V1],nzBanner:[2,`nzBanner`,`nzBanner`,V1],nzNoAnimation:[2,`nzNoAnimation`,`nzNoAnimation`,V1],nzIcon:`nzIcon`},outputs:{nzOnClose:`nzOnClose`},exportAs:[`nzAlert`],features:[ev],decls:1,vars:1,consts:[[1,`ant-alert`,3,`nzNoAnimation`,`ant-alert-rtl`,`ant-alert-success`,`ant-alert-info`,`ant-alert-warning`,`ant-alert-error`,`ant-alert-no-icon`,`ant-alert-banner`,`ant-alert-closable`,`ant-alert-with-description`],[1,`ant-alert`,3,`nzNoAnimation`],[1,`ant-alert-icon`],[1,`ant-alert-content`],[1,`ant-alert-action`],[`type`,`button`,`tabindex`,`0`,1,`ant-alert-close-icon`],[3,`nzType`,`nzTheme`],[4,`nzStringTemplateOutlet`],[1,`ant-alert-message`],[1,`ant-alert-description`],[`type`,`button`,`tabindex`,`0`,1,`ant-alert-close-icon`,3,`click`],[`nzType`,`close`],[1,`ant-alert-close-text`]],template:function(ee,A){ee&1&&Nb(0,oi,5,23,`div`,0),ee&2&&xb(A.closed?-1:0)},dependencies:[p9,d9,hc,tc,Da],encapsulation:2})})()}})();var Te=class bt{static ɵfac=function(o){return new(o||bt)};static ɵmod=JD({type:bt});static ɵinj=Wu({imports:[yt]})};var di=()=>({standalone:!0});function pi(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,53),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,54),tg(3,`nz-icon`,55),Tl()(),Sl()}}function ci(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,53),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,54),_w(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var it=110;var Rn=(()=>{class a{destroyRef=_(ae);router=_(Te$1);#e=_(Z0);injector=_(se);viewPort=_(d7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){oV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-it>640?this.width.set(640):this.width.set(this.windowWidth()-it-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-it>640?this.width.set(640):this.width.set(i-it-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(rV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`nz-blog-what-version-of-this-blog`]],features:[jw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:432,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-8a303762`,`nzTitle`,`The Problem`],[`nzHref`,`#h-c36299ac`,`nzTitle`,`Case Scenario #1`],[`nzHref`,`#h-a42d4269`,`nzTitle`,`Case Scenario #2`],[`nzHref`,`#h-b3708047`,`nzTitle`,`Case Scenario #3`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20211009-what-version-of-this-blog.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[`id`,`h-8a303762`],[`onclick`,`window.location.hash = 'h-8a303762'`,1,`anchor`],[`href`,`https://stackoverflow.com/questions/55494181/what-is-the-purpose-of-swupdate-activateupdate-in-angular/59175788#59175788`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-c36299ac`],[`onclick`,`window.location.hash = 'h-c36299ac'`,1,`anchor`],[`href`,`https://github.com/cioina/openshift-laravel-example/blob/main/src/acioina/site/src/Acioina/UserManagement/Http/Controllers/Api/VersionController.php`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-php`],[1,`hljs-meta`],[1,`hljs-keyword`],[1,`hljs-title`,`class_`],[1,`hljs-title`],[1,`hljs-class`],[1,`hljs-variable`,`constant_`],[1,`hljs-string`],[1,`hljs-function`],[1,`hljs-params`],[1,`hljs-variable`],[1,`hljs-built_in`],[1,`hljs-title`,`function_`,`invoke__`],[1,`hljs-variable`,`language_`],[1,`language-typescript`],[1,`hljs-attr`],[1,`language-csharp`],[1,`hljs-literal`],[1,`hljs-title`,`function_`],[1,`hljs-property`],[`id`,`h-a42d4269`],[`onclick`,`window.location.hash = 'h-a42d4269'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0/wwwroot`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ngrx/platform/blob/19.2.x/projects/ngrx.io/src/app/sw-updates/sw-updates.service.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-b3708047`],[`onclick`,`window.location.hash = 'h-b3708047'`,1,`anchor`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(Wi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,pi,4,0,`ng-container`,5)(6,ci,4,0,`ng-container`,5),Tl()()(),Wi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),_w(11,`Jump to top`),Tl()(),Wi$1(12,`div`,3)(13,`nz-switch`,9),sD(),Ag(`ngModelChange`,function(g){return xw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),Wi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14),Tl()(),Wi$1(19,`span`,15),_w(20,` What Version of This Blog Do You See?`),tg(21,`span`,16)(22,`span`,17),Wi$1(23,`a`,18),tg(24,`nz-icon`,19),Tl()(),Wi$1(25,`article`,20),gd(),Wi$1(26,`p`),_w(27,`As you can see, this website does not have a formal version tag. It uses the latest version of `),Wi$1(28,`code`),_w(29,`ng-zorro-antd`),Tl(),_w(30,` and Angular as some kind of version tag. So, just imagine how surprised I was when I deployed this website compiled with Angular `),Wi$1(31,`code`),_w(32,`12.2.9`),Tl(),_w(33,` and checking my very old Samsung that runs on Android 4.4.2. For some reason, the old Chrome web browser does not want to load this website correctly, so, I use an old version of FireFox browser for Android (As you may know, Google does not allow to update apps for old Android versions.) FireFox worked ok at first. But, when I closed and opened the browser again, this site loaded automatically and showed Angular `),Wi$1(34,`code`),_w(35,`12.2.4`),Tl(),_w(36,` at the bottom of the footer. Somehow, FireFox cached an old version of my website. Deleting the FireFox cache did not help, but, reloading the URL would show the correct Angular `),Wi$1(37,`code`),_w(38,`12.2.9`),Tl(),_w(39,`.`),Tl(),Wi$1(40,`blockquote`)(41,`p`),_w(42,`It looks like starting with Angular 16, this website will not work at all anymore on outdated devices!`),Tl()(),Wi$1(43,`h2`,21)(44,`span`),_w(45,`The Problem`),Tl(),Wi$1(46,`a`,22),_w(47,`#`),Tl()(),Wi$1(48,`p`),_w(49,`It may be problematic to have latest version for some websites that use Angular with a lot of lazy-loading modules. Imagine a user browsing your website just seconds before you start to deploy a new version of your website. The user will still have the old version (old Angular compiled JavaScript files) even after the deployment ends. We will consider three case scenarios here and will try to implement solution #2 from `),Wi$1(50,`strong`),_w(51,`gkalpak`),Tl(),_w(52,`'s `),Wi$1(53,`a`,23),_w(54,`StackOverflow`),Tl(),_w(55,` answer. We will let website users know that a new version is available and ask them to refresh the webpage.`),Tl(),Wi$1(56,`h2`,24)(57,`span`),_w(58,`Case Scenario #1`),Tl(),Wi$1(59,`a`,25),_w(60,`#`),Tl()(),Wi$1(61,`p`),_w(62,`From my experience, the problem may appear for old/outdated web browsers like one described above or when you open multiple tabs of the same page. You will get a message to reload/refresh the page with an error similar to `),Wi$1(63,`strong`),_w(64,`ERROR: b607b9112d`),Tl(),_w(65,` (where b607b9112d is the new hash.)`),Tl(),Wi$1(66,`p`),_w(67,`It was very simple for me to implement this solution because I use a server-side API and deploy my backend and frontend on the same server and generate my deployment with a Node.js script. So, I generate `),Wi$1(68,`a`,26),_w(69,`a small PHP file`),Tl(),_w(70,` and small TypeScript file with some unique hash.`),Tl(),Wi$1(71,`p`)(72,`strong`)(73,`code`),_w(74,`VersionController.php`),Tl()()(),Wi$1(75,`pre`,27)(76,`code`)(77,`span`,28),_w(78,`<?php`),Tl(),_w(79,`
`),Wi$1(80,`span`,29),_w(81,`namespace`),Tl(),_w(82,` `),Wi$1(83,`span`,30),_w(84,`Acioina`),Tl(),_w(85,`\\`),Wi$1(86,`span`,30),_w(87,`UserManagement`),Tl(),_w(88,`\\`),Wi$1(89,`span`,30),_w(90,`Http`),Tl(),_w(91,`\\`),Wi$1(92,`span`,30),_w(93,`Controllers`),Tl(),_w(94,`\\`),Wi$1(95,`span`,30),_w(96,`Api`),Tl(),_w(97,`;
`),Wi$1(98,`span`,29),_w(99,`use`),Tl(),_w(100,` `),Wi$1(101,`span`,31),_w(102,`Acioina`),Tl(),_w(103,`\\`),Wi$1(104,`span`,31),_w(105,`UserManagement`),Tl(),_w(106,`\\`),Wi$1(107,`span`,31),_w(108,`Transformers`),Tl(),_w(109,`\\`),Wi$1(110,`span`,31),_w(111,`VersionTransformer`),Tl(),_w(112,`;

`),Wi$1(113,`span`,32)(114,`span`,29),_w(115,`class`),Tl(),_w(116,` `),Wi$1(117,`span`,31),_w(118,`VersionController`),Tl(),_w(119,` `),Wi$1(120,`span`,29),_w(121,`extends`),Tl(),_w(122,` `),Wi$1(123,`span`,31),_w(124,`ApiController`),Tl(),_w(125,`
`),Tl(),_w(126,`{
    `),Wi$1(127,`span`,29),_w(128,`private`),Tl(),_w(129,` `),Wi$1(130,`span`,29),_w(131,`const`),Tl(),_w(132,` `),Wi$1(133,`span`,33),_w(134,`ANGULAR_APP_HASH`),Tl(),_w(135,` = `),Wi$1(136,`span`,34),_w(137,`'b607b9112d'`),Tl(),_w(138,`;

    `),Wi$1(139,`span`,29),_w(140,`public`),Tl(),_w(141,` `),Wi$1(142,`span`,35)(143,`span`,29),_w(144,`function`),Tl(),_w(145,` `),Wi$1(146,`span`,31),_w(147,`__construct`),Tl(),_w(148,`(`),Wi$1(149,`span`,36),_w(150,`VersionTransformer `),Wi$1(151,`span`,37),_w(152,`$transformer`),Tl()(),_w(153,`)
    `),Tl(),_w(154,`{
        `),Wi$1(155,`span`,38),_w(156,`parent`),Tl(),_w(157,`::`),Wi$1(158,`span`,39),_w(159,`__construct`),Tl(),_w(160,`(`),Wi$1(161,`span`,37),_w(162,`$transformer`),Tl(),_w(163,`);
    }

    `),Wi$1(164,`span`,29),_w(165,`public`),Tl(),_w(166,` `),Wi$1(167,`span`,35)(168,`span`,29),_w(169,`function`),Tl(),_w(170,` `),Wi$1(171,`span`,31),_w(172,`index`),Tl(),_w(173,`(`),tg(174,`span`,36),_w(175,`)
    `),Tl(),_w(176,`{
        `),Wi$1(177,`span`,29),_w(178,`return`),Tl(),_w(179,` `),Wi$1(180,`span`,40),_w(181,`$this`),Tl(),_w(182,`->`),Wi$1(183,`span`,39),_w(184,`respondWithTransformer`),Tl(),_w(185,`([`),Wi$1(186,`span`,34),_w(187,`'hash'`),Tl(),_w(188,` => `),Wi$1(189,`span`,38),_w(190,`self`),Tl(),_w(191,`::`),Wi$1(192,`span`,33),_w(193,`ANGULAR_APP_HASH`),Tl(),_w(194,`]);
    }
}`),Tl()(),Wi$1(195,`p`)(196,`strong`)(197,`code`),_w(198,`version.ts`),Tl()()(),Wi$1(199,`pre`,41)(200,`code`)(201,`span`,29),_w(202,`export`),Tl(),_w(203,` `),Wi$1(204,`span`,29),_w(205,`const`),Tl(),_w(206,` `),Wi$1(207,`span`,33),_w(208,`APP_VERSION`),Tl(),_w(209,` = {
  `),Wi$1(210,`span`,42),_w(211,`version`),Tl(),_w(212,`: `),Wi$1(213,`span`,34),_w(214,`'0.0.0'`),Tl(),_w(215,`,
  `),Wi$1(216,`span`,42),_w(217,`hash`),Tl(),_w(218,`: `),Wi$1(219,`span`,34),_w(220,`'b607b9112d'`),Tl(),_w(221,`,
};`),Tl()(),Wi$1(222,`p`),_w(223,`Currently we are moving our server-side to ASP.NET Core and we are generating this small file:`),Tl(),Wi$1(224,`p`)(225,`strong`)(226,`code`),_w(227,`VersionResponseModel.cs`),Tl()()(),Wi$1(228,`pre`,43)(229,`code`)(230,`span`,29),_w(231,`namespace`),Tl(),_w(232,` `),Wi$1(233,`span`,31),_w(234,`BlogAngular.Application.Common.Version`),Tl(),_w(235,`;
`),Wi$1(236,`span`,29),_w(237,`using`),Tl(),_w(238,` Newtonsoft.Json;
`),Wi$1(239,`span`,29),_w(240,`public`),Tl(),_w(241,` `),Wi$1(242,`span`,29),_w(243,`class`),Tl(),_w(244,` `),Wi$1(245,`span`,31),_w(246,`VersionResponseModel`),Tl(),_w(247,`
{
    `),Wi$1(248,`span`,35)(249,`span`,29),_w(250,`public`),Tl(),_w(251,` `),Wi$1(252,`span`,31),_w(253,`VersionResponseModel`),Tl(),_w(254,`()`),Tl(),_w(255,`
    {
        Hash = `),Wi$1(256,`span`,34),_w(257,`"b607b9112d"`),Tl(),_w(258,`;
    }

    [`),Wi$1(259,`span`,28),_w(260,`JsonProperty(`),Wi$1(261,`span`,34),_w(262,`"hash"`),Tl(),_w(263,`)`),Tl(),_w(264,`]
    `),Wi$1(265,`span`,29),_w(266,`public`),Tl(),_w(267,` `),Wi$1(268,`span`,38),_w(269,`string`),Tl(),_w(270,`? Hash { `),Wi$1(271,`span`,29),_w(272,`get`),Tl(),_w(273,`; } = `),Wi$1(274,`span`,44),_w(275,`default`),Tl(),_w(276,`!;
}`),Tl()(),Wi$1(277,`p`),_w(278,`In my `),Wi$1(279,`code`),_w(280,`app.component.ts`),Tl(),_w(281,`, I have something like this:`),Tl(),Wi$1(282,`pre`,41)(283,`code`)(284,`span`,28),_w(285,`@Component`),Tl(),_w(286,`({
  `),Wi$1(287,`span`,42),_w(288,`selector`),Tl(),_w(289,`: `),Wi$1(290,`span`,34),_w(291,`'app-root'`),Tl(),_w(292,`,
  `),Wi$1(293,`span`,42),_w(294,`template`),Tl(),_w(295,`: `),Wi$1(296,`span`,34),_w(297,`\`
  ...
  @if (themesOptions().hasFooterArea) {
    @if (isNotCurrentVersion()) {
      <nz-card>
        <div nz-row nzJustify="center">
          <div nz-col>
            <h5
              nz-typography
              nzType="danger"
              nzContent="You are using an old version of this website and some pages may not work correctly.
              Please reload/refresh the page in order to load the latest version. (ERROR: {{ hash() }})"
            ></h5>
          </div>
        </div>
      </nz-card>
    }

    <nz-footer class="text-center"
      >2026 Made with
      <nz-icon nzType="heart-fill" nzTheme="feather" style="color: red;" />
      by Alexei Cioina based on NG-ZORRO version {{ currentVersion }} and Angular {{ angularVersion }} compiled
      on {{ compiledDate }}
    </nz-footer>
  }
 ...
\``),Tl(),_w(298,`
`),Wi$1(299,`span`,29),_w(300,`export`),Tl(),_w(301,` `),Wi$1(302,`span`,29),_w(303,`class`),Tl(),_w(304,` `),Wi$1(305,`span`,30),_w(306,`DefaultComponent`),Tl(),_w(307,` {
  `),Wi$1(308,`span`,29),_w(309,`readonly`),Tl(),_w(310,` #authStore = `),Wi$1(311,`span`,45),_w(312,`inject`),Tl(),_w(313,`(`),Wi$1(314,`span`,30),_w(315,`AuthStore`),Tl(),_w(316,`);
  `),Wi$1(317,`span`,29),_w(318,`readonly`),Tl(),_w(319,` isNotCurrentVersion = computed<`),Wi$1(320,`span`,38),_w(321,`boolean`),Tl(),_w(322,`>(
    `),Wi$1(323,`span`,35),_w(324,`() =>`),Tl(),_w(325,` !!`),Wi$1(326,`span`,40),_w(327,`this`),Tl(),_w(328,`.`),Wi$1(329,`span`,45),_w(330,`hash`),Tl(),_w(331,`() && !(`),Wi$1(332,`span`,40),_w(333,`this`),Tl(),_w(334,`.`),Wi$1(335,`span`,45),_w(336,`hash`),Tl(),_w(337,`() === `),Wi$1(338,`span`,33),_w(339,`APP_VERSION`),Tl(),_w(340,`.`),Wi$1(341,`span`,46),_w(342,`hash`),Tl(),_w(343,` || `),Wi$1(344,`span`,40),_w(345,`this`),Tl(),_w(346,`.`),Wi$1(347,`span`,45),_w(348,`hash`),Tl(),_w(349,`() === `),Wi$1(350,`span`,34),_w(351,`'SwUpdatesService: activated'`),Tl(),_w(352,`)
  );
  `),Wi$1(353,`span`,29),_w(354,`readonly`),Tl(),_w(355,` hash = computed<`),Wi$1(356,`span`,38),_w(357,`string`),Tl(),_w(358,`>(`),Wi$1(359,`span`,35),_w(360,`() =>`),Tl(),_w(361,` `),Wi$1(362,`span`,40),_w(363,`this`),Tl(),_w(364,`.#authStore.`),Wi$1(365,`span`,46),_w(366,`selectors`),Tl(),_w(367,`.`),Wi$1(368,`span`,45),_w(369,`version`),Tl(),_w(370,`().`),Wi$1(371,`span`,46),_w(372,`hash`),Tl(),_w(373,`);
  `),Wi$1(374,`span`,29),_w(375,`readonly`),Tl(),_w(376,` currentVersion = `),Wi$1(377,`span`,33),_w(378,`ZORRO_VERSION`),Tl(),_w(379,`.`),Wi$1(380,`span`,46),_w(381,`full`),Tl(),_w(382,`;
  `),Wi$1(383,`span`,29),_w(384,`readonly`),Tl(),_w(385,` angularVersion = `),Wi$1(386,`span`,33),_w(387,`ANGULAR_VERSION`),Tl(),_w(388,`.`),Wi$1(389,`span`,46),_w(390,`full`),Tl(),_w(391,`;
  `),Wi$1(392,`span`,29),_w(393,`readonly`),Tl(),_w(394,` compiledDate = `),Wi$1(395,`span`,33),_w(396,`APP_VERSION`),Tl(),_w(397,`.`),Wi$1(398,`span`,46),_w(399,`version`),Tl(),_w(400,`;`),Tl()(),Wi$1(401,`p`),_w(402,`I compile my frontend app with a command like this: `),Wi$1(403,`code`),_w(404,`yarn build:site`),Tl(),_w(405,`. This simple solution helped me to solve my FireFox problem, however, the most logical solution is not to allow outdated web browsers to access this website.`),Tl(),Wi$1(406,`h2`,47)(407,`span`),_w(408,`Case Scenario #2`),Tl(),Wi$1(409,`a`,48),_w(410,`#`),Tl()(),Wi$1(411,`p`),_w(412,`This is the most common case scenario for modern (up to date) web browsers based on Google Chrome. It happens when you open this website from the browser bookmarks or when you browse this website while a new version was deployed to the server. You will get a message to reload/refresh the page with `),Wi$1(413,`strong`),_w(414,`ERROR: SwUpdatesService: activated`),Tl(),_w(415,`. This website uses a Service Worker loaded from `),Wi$1(416,`a`,49),_w(417,`ngsw-worker.js`),Tl(),_w(418,`. In addition, we use Angular `),Wi$1(419,`a`,50),_w(420,`SwUpdates`),Tl(),_w(421,` which will load updated resources of the website behind the scene on the user's machine. Theoretically, this website should work fine without reloading most of the time.`),Tl(),Wi$1(422,`h2`,51)(423,`span`),_w(424,`Case Scenario #3`),Tl(),Wi$1(425,`a`,52),_w(426,`#`),Tl()(),Wi$1(427,`p`),_w(428,`This case scenario happens when you open multiple tabs of this website while a new version was deployed to the server. You will get a message to reload/refresh the page with `),Wi$1(429,`strong`),_w(430,`ERROR: GlobalErrorHandler`),Tl(),_w(431,`. It means that the browser tries to load old resources that were deleted by a new deployment.`),Tl(),hd(),Tl()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,Vw(7,di)),cD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,bg,sd,cr,ir,Fa,p9,d9,Vn,qi$1,_n,ji$1,Jo,Za,Dl,ga$1,ma$1,So,Ve$1,pe,_u],encapsulation:2})}return a})();var xi=()=>({standalone:!0});function hi(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,123),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,124),tg(3,`nz-icon`,125),Tl()(),Sl()}}function Ei(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,123),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,124),_w(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var at=110;var Dn=(()=>{class a{destroyRef=_(ae);router=_(Te$1);#e=_(Z0);injector=_(se);viewPort=_(d7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!0;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){oV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-at>640?this.width.set(640):this.width.set(this.windowWidth()-at-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-at>640?this.width.set(640):this.width.set(i-at-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(rV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`nz-blog-svg-icons`]],features:[jw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!0}}])],decls:980,vars:10,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-175576ef`,`nzTitle`,`List of icons`],[`nzHref`,`#h-db974238`,`nzTitle`,`API`],[`nzHref`,`#h-47e19927`,`nzTitle`,`nz-icon, [nz-icon]`],[`nzHref`,`#h-1a353508`,`nzTitle`,`NzIconService`],[`nzHref`,`#h-ed485f46`,`nzTitle`,`SVG icons`],[`nzHref`,`#h-ec99ccb9`,`nzTitle`,`Static loading and dynamic loading`],[`nzHref`,`#h-32e641c4`,`nzTitle`,`Add Icons in Lazy-loaded Components`],[`nzHref`,`#h-93e3a3a1`,`nzTitle`,`Set Default TwoTone Color`],[`nzHref`,`#h-3ce4aec9`,`nzTitle`,`Custom Font Icon`],[`nzHref`,`#h-b3ba0fe9`,`nzTitle`,`Namespace`],[`nzHref`,`#h-1fe917b0`,`nzTitle`,`FAQ`],[`nzHref`,`#h-81929100`,`nzTitle`,`All my icons are gone!`],[`nzHref`,`#h-a81dd5f2`,`nzTitle`,`There are two similar icons in a `],[`nzHref`,`#h-62a9076a`,`nzTitle`,`I want to import all icons statically. What should I do?`],[`nzHref`,`#h-5de90099`,`nzTitle`,`Does dynamic loading affect web pages' performance?`],[`nzHref`,`#h-3d43bf4a`,`nzTitle`,`How do I know an icon's corresponding module to import?`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230219-svg-icons.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/doc/index.en-US.md`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`pic-plus`,2,`text-align`,`center`],[`nzType`,`custom:zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:angular`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:ng-zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-row`,``,`nzJustify`,`center`,1,`p-t-24`],[`videoId`,`bGUfm_E5iZo`,`placeholderImageQuality`,`high`,3,`width`],[`videoId`,`7j1t3UZA1TY`,`placeholderImageQuality`,`high`,3,`width`],[`id`,`h-5504977c`],[`onclick`,`window.location.hash = 'h-5504977c'`,1,`anchor`],[1,`mermaid`],[`id`,`h-5f3a8aa0`],[`onclick`,`window.location.hash = 'h-5f3a8aa0'`,1,`anchor`],[`id`,`h-ed81be50`],[`onclick`,`window.location.hash = 'h-ed81be50'`,1,`anchor`],[`id`,`h-d67b37b2`],[`onclick`,`window.location.hash = 'h-d67b37b2'`,1,`anchor`],[`id`,`h-f3b60b4e`],[`onclick`,`window.location.hash = 'h-f3b60b4e'`,1,`anchor`],[`id`,`h-c75b170a`],[`onclick`,`window.location.hash = 'h-c75b170a'`,1,`anchor`],[`id`,`h-0fd89a6a`],[`onclick`,`window.location.hash = 'h-0fd89a6a'`,1,`anchor`],[`id`,`h-9f221950`],[`onclick`,`window.location.hash = 'h-9f221950'`,1,`anchor`],[`id`,`h-f2803148`],[`onclick`,`window.location.hash = 'h-f2803148'`,1,`anchor`],[`id`,`h-175576ef`],[`onclick`,`window.location.hash = 'h-175576ef'`,1,`anchor`],[`href`,`https://ant.design/components/icon/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-db974238`],[`onclick`,`window.location.hash = 'h-db974238'`,1,`anchor`],[`id`,`h-47e19927`],[1,`api-type-label`,`component`],[`onclick`,`window.location.hash = 'h-47e19927'`,1,`anchor`],[`href`,`https://github.com/twbs/icons`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://icons.getbootstrap.com/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-svg`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-1a353508`],[1,`api-type-label`,`service`],[`onclick`,`window.location.hash = 'h-1a353508'`,1,`anchor`],[`id`,`h-ed485f46`],[`onclick`,`window.location.hash = 'h-ed485f46'`,1,`anchor`],[1,`language-html`],[1,`hljs-tag`],[1,`hljs-name`],[1,`hljs-attr`],[1,`hljs-string`],[`id`,`h-ec99ccb9`],[`onclick`,`window.location.hash = 'h-ec99ccb9'`,1,`anchor`],[`nzType`,`info`,`nzMessage`,`Note:`,`nzDescription`,`As for icons provided by Ant Design, there are two ways to import them into your project.`,`nzShowIcon`,``],[1,`language-ts`],[1,`hljs-keyword`],[1,`hljs-title`,`class_`],[1,`hljs-comment`],[1,`hljs-title`,`function_`],[1,`language-json`],[1,`hljs-punctuation`],[`id`,`h-32e641c4`],[`onclick`,`window.location.hash = 'h-32e641c4'`,1,`anchor`],[1,`hljs-meta`],[`id`,`h-93e3a3a1`],[`onclick`,`window.location.hash = 'h-93e3a3a1'`,1,`anchor`],[`id`,`h-3ce4aec9`],[`onclick`,`window.location.hash = 'h-3ce4aec9'`,1,`anchor`],[`href`,`http://iconfont.cn/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-variable`,`language_`],[1,`hljs-property`],[`href`,`https://www.iconfont.cn/help/detail?helptype=code`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-b3ba0fe9`],[`onclick`,`window.location.hash = 'h-b3ba0fe9'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0/wwwroot/assets/custom`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-1fe917b0`],[`onclick`,`window.location.hash = 'h-1fe917b0'`,1,`anchor`],[`id`,`h-81929100`],[`onclick`,`window.location.hash = 'h-81929100'`,1,`anchor`],[`id`,`h-0dfac33e`],[`onclick`,`window.location.hash = 'h-0dfac33e'`,1,`anchor`],[`id`,`h-62a9076a`],[`onclick`,`window.location.hash = 'h-62a9076a'`,1,`anchor`],[`href`,`https://ng.ant.design/components/icon/en#static-loading-and-dynamic-loading`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-built_in`],[1,`hljs-function`],[1,`hljs-params`],[`id`,`h-5de90099`],[`onclick`,`window.location.hash = 'h-5de90099'`,1,`anchor`],[`id`,`h-3d43bf4a`],[`onclick`,`window.location.hash = 'h-3d43bf4a'`,1,`anchor`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(Wi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,hi,4,0,`ng-container`,5)(6,Ei,4,0,`ng-container`,5),Tl()()(),Wi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),_w(11,`Jump to top`),Tl()(),Wi$1(12,`div`,3)(13,`nz-switch`,9),sD(),Ag(`ngModelChange`,function(g){return xw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),Wi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19)(24,`nz-link`,20)(25,`nz-link`,21)(26,`nz-link`,22)(27,`nz-link`,23)(28,`nz-link`,24)(29,`nz-link`,25)(30,`nz-link`,26),Tl()(),Wi$1(31,`span`,27),_w(32,` Semantic Vector Graphics (SVG) Icons`),tg(33,`span`,28)(34,`span`,29),Wi$1(35,`a`,30),tg(36,`nz-icon`,31),Tl()(),Wi$1(37,`article`,32)(38,`blockquote`,33)(39,`p`)(40,`strong`),_w(41,`This is a modified version of the `),Wi$1(42,`a`,34),_w(43,`NG-ZORRO original`),Tl(),_w(44,` document provided under `),Wi$1(45,`a`,35),_w(46,`Alibaba.com MIT LICENSE`),Tl(),_w(47,`.`),Tl()()(),Wi$1(48,`div`,36),tg(49,`nz-icon`,37),Wi$1(50,`span`),_w(51,`+`),Tl(),tg(52,`nz-icon`,38),Wi$1(53,`span`),_w(54,`=`),Tl(),tg(55,`nz-icon`,39),Tl(),Wi$1(56,`div`,40),tg(57,`app-youtube-player`,41),Tl(),Wi$1(58,`div`,40),tg(59,`app-youtube-player`,42),Tl(),Wi$1(60,`h4`,43)(61,`span`),_w(62,`Example 1`),Tl(),Wi$1(63,`a`,44),_w(64,`#`),Tl()(),Wi$1(65,`pre`,45),_w(66,`block-beta
columns 1
  db(("DB"))
  blockArrowId6<["\xA0\xA0\xA0"]>(down)
  block:ID
    A
    B["A wide one in the middle"]
    C
  end
  space
  D
  ID --> D
  C --> D
  style B fill:#969,stroke:#333,stroke-width:4px`),Tl(),Wi$1(67,`h4`,46)(68,`span`),_w(69,`Example 2`),Tl(),Wi$1(70,`a`,47),_w(71,`#`),Tl()(),Wi$1(72,`pre`,45),_w(73,`block-beta
  columns 3
  a:3
  block:group1:2
    columns 2
    h i j k
  end
  g
  block:group2:3
    %% columns auto (default)
    l m n o p q r
  end  `),Tl(),Wi$1(74,`h4`,48)(75,`span`),_w(76,`Example 3`),Tl(),Wi$1(77,`a`,49),_w(78,`#`),Tl()(),Wi$1(79,`pre`,45),_w(80,`block-beta
  id1[/"This is the text in the box"/]
  id2["This is the text in the box"]
  A[/"Christmas"]
  B["Go shopping"/]`),Tl(),Wi$1(81,`h4`,50)(82,`span`),_w(83,`Example 4`),Tl(),Wi$1(84,`a`,51),_w(85,`#`),Tl()(),Wi$1(86,`pre`,45),_w(87,`block-beta
  blockArrowId<["Label"]>(right)
  blockArrowId2<["Label"]>(left)
  blockArrowId3<["Label"]>(up)
  blockArrowId4<["Label"]>(down)
  blockArrowId5<["Label"]>(x)
  blockArrowId6<["Label"]>(y)
  blockArrowId6<["Label"]>(x, down)`),Tl(),Wi$1(88,`h4`,52)(89,`span`),_w(90,`Example 5`),Tl(),Wi$1(91,`a`,53),_w(92,`#`),Tl()(),Wi$1(93,`pre`,45),_w(94,`block-beta
  columns 3
  Start(("Start")) space:2
  down<[" "]>(down) space:2
  Decision("Make Decision") right<["Yes"]>(right) Process1["Process A"]
  downAgain<["No"]>(down) space r3<["Done"]>(down)
  Process2["Process B"] r2<["Done"]>(right) End(("End"))

  style Start fill:#969;
  style End fill:#696;`),Tl(),Wi$1(95,`h4`,54)(96,`span`),_w(97,`Example 6`),Tl(),Wi$1(98,`a`,55),_w(99,`#`),Tl()(),Wi$1(100,`pre`,45),_w(101,`graph LR
  A["(1.1)"]
  B("$$\\begin{array} {lcl} L(p,w_i) &=& \\dfrac{1}{N}\\Sigma_{i=1}^N(\\underbrace{f_r(x_2 \\rightarrow x_1 \\rightarrow x_0)G(x_1 \\longleftrightarrow x_2)f_r(x_3 \\rightarrow x_2 \\rightarrow x_1)}_{sample\\, radiance\\,evaluation\\, in\\, stage2} \\\\\\\\\\\\\\\\ &=& \\prod_{i=3}^{k-1}(\\underbrace{\\dfrac{f_r(x_{i+1} \\rightarrow x_i \\rightarrow x_{i-1})G(x_i \\longleftrightarrow x_{i-1})}{p_a(x_{i-1})}}_{stored\\,in\\,vertex\\, during\\,light\\, path\\, tracing\\, in\\, stage1})\\dfrac{G(x_k \\longleftrightarrow x_{k-1})L_e(x_k \\rightarrow x_{k-1})}{p_a(x_{k-1})p_a(x_k)}) \\end{array}$$")
  A-->B`),Tl(),Wi$1(102,`h4`,56)(103,`span`),_w(104,`Example 7`),Tl(),Wi$1(105,`a`,57),_w(106,`#`),Tl()(),Wi$1(107,`pre`,45),_w(108,`graph LR
  A["(1.2)"]
  B("$$\\sqrt{\\frac{\\pi(1-\\pi)}{n}}$$")
  A-->B`),Tl(),Wi$1(109,`h4`,58)(110,`span`),_w(111,`Example 8`),Tl(),Wi$1(112,`a`,59),_w(113,`#`),Tl()(),Wi$1(114,`pre`,45),_w(115,` graph LR
   A["$$x^2$$"] -->|"$$\\sqrt{x+3}$$"| B("$$\\frac{1}{2}$$")
   A -->|"$$\\overbrace{a+b+c}^{\\text{note}}$$"| C("$$\\pi r^2$$")
   B --> D("$$x = \\begin{cases} a &\\text{if } b \\\\ c &\\text{if } d \\end{cases}$$")
   C --> E("$$x(t)=c_1\\begin{bmatrix}-\\cos{t}+\\sin{t}\\\\ 2\\cos{t} \\end{bmatrix}e^{2t}$$")`),Tl(),Wi$1(116,`h4`,60)(117,`span`),_w(118,`Example 9`),Tl(),Wi$1(119,`a`,61),_w(120,`#`),Tl()(),Wi$1(121,`pre`,45),_w(122,`sequenceDiagram
  autonumber
  participant 1 as $$\\alpha$$
  participant 2 as $$\\beta$$
  1->>2: Solve: $$\\sqrt{2+2}$$
  2-->>1: Answer: $$2$$
  Note right of 2: $$\\sqrt{2+2}=\\sqrt{4}=2$$`),Tl(),Wi$1(123,`h2`,62)(124,`span`),_w(125,`List of icons`),Tl(),Wi$1(126,`a`,63),_w(127,`#`),Tl()(),Wi$1(128,`p`),_w(129,`We keep in syncing with `),Wi$1(130,`a`,64),_w(131,`antd`),Tl(),_w(132,`.`),Tl(),Wi$1(133,`h2`,65)(134,`span`),_w(135,`API`),Tl(),Wi$1(136,`a`,66),_w(137,`#`),Tl()(),Wi$1(138,`h3`,67)(139,`span`),_w(140,`nz-icon, [nz-icon]`),Tl(),Wi$1(141,`label`,68),_w(142,`component`),Tl(),Wi$1(143,`a`,69),_w(144,`#`),Tl()(),Wi$1(145,`table`)(146,`thead`)(147,`tr`)(148,`th`),_w(149,`Property`),Tl(),Wi$1(150,`th`),_w(151,`Description`),Tl(),Wi$1(152,`th`),_w(153,`Type`),Tl(),Wi$1(154,`th`),_w(155,`Default`),Tl(),Wi$1(156,`th`),_w(157,`Global Config`),Tl()()(),Wi$1(158,`tbody`)(159,`tr`)(160,`td`)(161,`code`),_w(162,`[nzType]`),Tl()(),Wi$1(163,`td`),_w(164,`Type of the ant design icon`),Tl(),Wi$1(165,`td`)(166,`code`),_w(167,`string`),Tl()(),Wi$1(168,`td`),_w(169,`-`),Tl(),Wi$1(170,`td`),_w(171,`-`),Tl()(),Wi$1(172,`tr`)(173,`td`)(174,`code`),_w(175,`[nzTheme]`),Tl()(),Wi$1(176,`td`),_w(177,`Type of the ant design icon`),Tl(),Wi$1(178,`td`)(179,`code`),_w(180,`'fill'|'outline'|'twotone'`),Tl()(),Wi$1(181,`td`)(182,`code`),_w(183,`'outline'`),Tl()(),Wi$1(184,`td`),_w(185,`✅`),Tl()(),Wi$1(186,`tr`)(187,`td`)(188,`code`),_w(189,`[nzSpin]`),Tl()(),Wi$1(190,`td`),_w(191,`Rotate icon with animation`),Tl(),Wi$1(192,`td`)(193,`code`),_w(194,`boolean`),Tl()(),Wi$1(195,`td`)(196,`code`),_w(197,`false`),Tl()(),Wi$1(198,`td`),_w(199,`-`),Tl()(),Wi$1(200,`tr`)(201,`td`)(202,`code`),_w(203,`[nzTwotoneColor]`),Tl()(),Wi$1(204,`td`),_w(205,`Primary color of the two-tone icon.`),Tl(),Wi$1(206,`td`)(207,`code`),_w(208,`string (hex color)`),Tl()(),Wi$1(209,`td`),_w(210,`-`),Tl(),Wi$1(211,`td`),_w(212,`✅`),Tl()(),Wi$1(213,`tr`)(214,`td`)(215,`code`),_w(216,`[nzIconfont]`),Tl()(),Wi$1(217,`td`),_w(218,`Type of the icon from iconfont`),Tl(),Wi$1(219,`td`)(220,`code`),_w(221,`string`),Tl()(),Wi$1(222,`td`),_w(223,`-`),Tl(),Wi$1(224,`td`),_w(225,`-`),Tl()(),Wi$1(226,`tr`)(227,`td`)(228,`code`),_w(229,`[nzRotate]`),Tl()(),Wi$1(230,`td`),_w(231,`Rotate degrees`),Tl(),Wi$1(232,`td`)(233,`code`),_w(234,`number`),Tl()(),Wi$1(235,`td`),_w(236,`-`),Tl(),Wi$1(237,`td`),_w(238,`-`),Tl()(),Wi$1(239,`tr`)(240,`td`)(241,`code`),_w(242,`[nzWidth]`),Tl()(),Wi$1(243,`td`),_w(244,`SVG width`),Tl(),Wi$1(245,`td`)(246,`code`),_w(247,`number|string`),Tl()(),Wi$1(248,`td`)(249,`code`),_w(250,`1em`),Tl()(),tg(251,`td`),Tl(),Wi$1(252,`tr`)(253,`td`)(254,`code`),_w(255,`[nzHeight]`),Tl()(),Wi$1(256,`td`),_w(257,`SVG height`),Tl(),Wi$1(258,`td`)(259,`code`),_w(260,`number|string`),Tl()(),Wi$1(261,`td`)(262,`code`),_w(263,`1em`),Tl()(),tg(264,`td`),Tl()()(),Wi$1(265,`blockquote`)(266,`p`),_w(267,`In `),Wi$1(268,`code`),_w(269,`feather`),Tl(),_w(270,` folder, there are all `),Wi$1(271,`a`,70),_w(272,`official open source SVG icons for Bootstrap`),Tl(),_w(273,` that can be viewed `),Wi$1(274,`a`,71),_w(275,`here`),Tl(),_w(276,`. In `),Wi$1(277,`code`),_w(278,`fill`),Tl(),_w(279,`, `),Wi$1(280,`code`),_w(281,`outline`),Tl(),_w(282,` and `),Wi$1(283,`code`),_w(284,`twotone`),Tl(),_w(285,` folders, there are all `),Wi$1(286,`a`,72),_w(287,`Ant Design SVG icons`),Tl(),_w(288,` that can be viewed `),Wi$1(289,`a`,64),_w(290,`here`),Tl(),_w(291,`. In `),Wi$1(292,`code`),_w(293,`custom`),Tl(),_w(294,` folder, there are a few SVG icons added by hand witch can be accessed by `),Wi$1(295,`code`),_w(296,`nzType="custom:some-icon-file-name"`),Tl(),_w(297,`.`),Tl()(),Wi$1(298,`h3`,73)(299,`span`),_w(300,`NzIconService`),Tl(),Wi$1(301,`label`,74),_w(302,`service`),Tl(),Wi$1(303,`a`,75),_w(304,`#`),Tl()(),Wi$1(305,`table`)(306,`thead`)(307,`tr`)(308,`th`),_w(309,`Methods`),Tl(),Wi$1(310,`th`),_w(311,`Description`),Tl(),Wi$1(312,`th`),_w(313,`Parameters`),Tl()()(),Wi$1(314,`tbody`)(315,`tr`)(316,`td`)(317,`code`),_w(318,`addIcon()`),Tl()(),Wi$1(319,`td`),_w(320,`To import icons statically`),Tl(),Wi$1(321,`td`)(322,`code`),_w(323,`IconDefinition`),Tl()()(),Wi$1(324,`tr`)(325,`td`)(326,`code`),_w(327,`addIconLiteral()`),Tl()(),Wi$1(328,`td`),_w(329,`To statically import custom icons`),Tl(),Wi$1(330,`td`)(331,`code`),_w(332,`string`),Tl(),_w(333,`, `),Wi$1(334,`code`),_w(335,`string (SVG)`),Tl()()(),Wi$1(336,`tr`)(337,`td`)(338,`code`),_w(339,`fetchFromIconfont()`),Tl()(),Wi$1(340,`td`),_w(341,`To get icon assets from iconfont`),Tl(),Wi$1(342,`td`)(343,`code`),_w(344,`NzIconfontOption`),Tl()()(),Wi$1(345,`tr`)(346,`td`)(347,`code`),_w(348,`changeAssetsSource()`),Tl()(),Wi$1(349,`td`),_w(350,`Change the location of your icon assets, so that you can deploy them anywhere`),Tl(),Wi$1(351,`td`)(352,`code`),_w(353,`string`),Tl()()()()(),Wi$1(354,`h3`,76)(355,`span`),_w(356,`SVG icons`),Tl(),Wi$1(357,`a`,77),_w(358,`#`),Tl()(),Wi$1(359,`p`),_w(360,`NG-ZORRO supports svg icons, which bring benefits below:`),Tl(),Wi$1(361,`ul`)(362,`li`),_w(363,`Support multiple colors.`),Tl(),Wi$1(364,`li`),_w(365,`Much more display accuracy in lower-level devices.`),Tl(),Wi$1(366,`li`),_w(367,`Able to change built-in icons with more props but no styles override.`),Tl()(),Wi$1(368,`p`),_w(369,`You can use `),Wi$1(370,`code`),_w(371,`nz-icon`),Tl(),_w(372,` component and specify the `),Wi$1(373,`code`),_w(374,`theme`),Tl(),_w(375,` property.`),Tl(),Wi$1(376,`pre`,78)(377,`code`)(378,`span`,79),_w(379,`<`),Wi$1(380,`span`,80),_w(381,`nz-icon`),Tl(),_w(382,` `),Wi$1(383,`span`,81),_w(384,`nzType`),Tl(),_w(385,`=`),Wi$1(386,`span`,82),_w(387,`"star"`),Tl(),_w(388,` `),Wi$1(389,`span`,81),_w(390,`nzTheme`),Tl(),_w(391,`=`),Wi$1(392,`span`,82),_w(393,`"fill"`),Tl(),_w(394,` />`),Tl()()(),Wi$1(395,`h3`,83)(396,`span`),_w(397,`Static loading and dynamic loading`),Tl(),Wi$1(398,`a`,84),_w(399,`#`),Tl()(),tg(400,`nz-alert`,85),Wi$1(401,`p`)(402,`strong`),_w(403,`Static loading`),Tl(),_w(404,`. You can load icons statically by registering icons in `),Wi$1(405,`code`),_w(406,`app.config.ts`),Tl(),_w(407,` with `),Wi$1(408,`code`),_w(409,`provideNzIcons`),Tl(),_w(410,` API.`),Tl(),Wi$1(411,`pre`,86)(412,`code`)(413,`span`,87),_w(414,`import`),Tl(),_w(415,` { `),Wi$1(416,`span`,88),_w(417,`IconDefinition`),Tl(),_w(418,` } `),Wi$1(419,`span`,87),_w(420,`from`),Tl(),_w(421,` `),Wi$1(422,`span`,82),_w(423,`'@ant-design/icons-angular'`),Tl(),_w(424,`;
`),Wi$1(425,`span`,87),_w(426,`import`),Tl(),_w(427,` { provideNzIcons } `),Wi$1(428,`span`,87),_w(429,`from`),Tl(),_w(430,` `),Wi$1(431,`span`,82),_w(432,`'ng-zorro-antd/icon'`),Tl(),_w(433,`;

`),Wi$1(434,`span`,89),_w(435,`// Import what you need. RECOMMENDED. ✔️`),Tl(),_w(436,`
`),Wi$1(437,`span`,87),_w(438,`import`),Tl(),_w(439,` { `),Wi$1(440,`span`,88),_w(441,`AccountBookFill`),Tl(),_w(442,`, `),Wi$1(443,`span`,88),_w(444,`AlertFill`),Tl(),_w(445,`, `),Wi$1(446,`span`,88),_w(447,`AlertOutline`),Tl(),_w(448,` } `),Wi$1(449,`span`,87),_w(450,`from`),Tl(),_w(451,` `),Wi$1(452,`span`,82),_w(453,`'@ant-design/icons-angular/icons'`),Tl(),_w(454,`;

`),Wi$1(455,`span`,87),_w(456,`const`),Tl(),_w(457,` `),Wi$1(458,`span`,81),_w(459,`icons`),Tl(),_w(460,`: `),Wi$1(461,`span`,88),_w(462,`IconDefinition`),Tl(),_w(463,`[] = [`),Wi$1(464,`span`,88),_w(465,`AccountBookFill`),Tl(),_w(466,`, `),Wi$1(467,`span`,88),_w(468,`AlertOutline`),Tl(),_w(469,`, `),Wi$1(470,`span`,88),_w(471,`AlertFill`),Tl(),_w(472,`];

`),Wi$1(473,`span`,89),_w(474,`// Import all. NOT RECOMMENDED. ❌`),Tl(),_w(475,`
`),Wi$1(476,`span`,89),_w(477,`// import * as AllIcons from '@ant-design/icons-angular/icons';`),Tl(),_w(478,`

`),Wi$1(479,`span`,89),_w(480,`// const antDesignIcons = AllIcons as Record<string, IconDefinition>;`),Tl(),_w(481,`
`),Wi$1(482,`span`,89),_w(483,`// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])`),Tl(),_w(484,`

`),Wi$1(485,`span`,87),_w(486,`export`),Tl(),_w(487,` `),Wi$1(488,`span`,87),_w(489,`const`),Tl(),_w(490,` `),Wi$1(491,`span`,81),_w(492,`appConfig`),Tl(),_w(493,`: `),Wi$1(494,`span`,88),_w(495,`ApplicationConfig`),Tl(),_w(496,` = {
  `),Wi$1(497,`span`,81),_w(498,`providers`),Tl(),_w(499,`: [`),Wi$1(500,`span`,90),_w(501,`provideNzIcons`),Tl(),_w(502,`(icons)]
};`),Tl()(),Wi$1(503,`p`),_w(504,`Actually this calls `),Wi$1(505,`code`),_w(506,`addIcon`),Tl(),_w(507,` of `),Wi$1(508,`code`),_w(509,`NzIconService`),Tl(),_w(510,`. Imported icons would be bundled into your `),Wi$1(511,`code`),_w(512,`.js`),Tl(),_w(513,` files.
Static loading may increase your bundle size, thus we recommend to use dynamic importing.`),Tl(),Wi$1(514,`blockquote`)(515,`p`),_w(516,`Icons used by `),Wi$1(517,`code`),_w(518,`NG-ZORRO`),Tl(),_w(519,` itself are imported statically to increase loading speed. However, icons demonstrated on the
official website are loaded dynamically.`),Tl()(),Wi$1(520,`p`)(521,`strong`),_w(522,`Dynamic loading`),Tl(),_w(523,`. This way would not increase your bundle size. When NG-ZORRO detects that the icon you want to
render hasn't been registered yet, it would fire an HTTP request to load it. All you have to do is to config your
`),Wi$1(524,`code`),_w(525,`angular.json`),Tl(),_w(526,` like this:`),Tl(),Wi$1(527,`pre`,91)(528,`code`)(529,`span`,92),_w(530,`{`),Tl(),_w(531,`
  `),Wi$1(532,`span`,81),_w(533,`"assets"`),Tl(),Wi$1(534,`span`,92),_w(535,`:`),Tl(),_w(536,` `),Wi$1(537,`span`,92),_w(538,`[`),Tl(),_w(539,`
    `),Wi$1(540,`span`,92),_w(541,`{`),Tl(),_w(542,`
      `),Wi$1(543,`span`,81),_w(544,`"glob"`),Tl(),Wi$1(545,`span`,92),_w(546,`:`),Tl(),_w(547,` `),Wi$1(548,`span`,82),_w(549,`"**/*"`),Tl(),Wi$1(550,`span`,92),_w(551,`,`),Tl(),_w(552,`
      `),Wi$1(553,`span`,81),_w(554,`"input"`),Tl(),Wi$1(555,`span`,92),_w(556,`:`),Tl(),_w(557,` `),Wi$1(558,`span`,82),_w(559,`"./node_modules/@ant-design/icons-angular/src/inline-svg/"`),Tl(),Wi$1(560,`span`,92),_w(561,`,`),Tl(),_w(562,`
      `),Wi$1(563,`span`,81),_w(564,`"output"`),Tl(),Wi$1(565,`span`,92),_w(566,`:`),Tl(),_w(567,` `),Wi$1(568,`span`,82),_w(569,`"/assets/"`),Tl(),_w(570,`
    `),Wi$1(571,`span`,92),_w(572,`}`),Tl(),_w(573,`
  `),Wi$1(574,`span`,92),_w(575,`]`),Tl(),_w(576,`
`),Wi$1(577,`span`,92),_w(578,`}`),Tl()()(),Wi$1(579,`p`),_w(580,`You can call `),Wi$1(581,`code`),_w(582,`changeAssetsSource()`),Tl(),_w(583,` of `),Wi$1(584,`code`),_w(585,`NzIconService`),Tl(),_w(586,` to change the location of your icon assets, so that you can
deploy the assets to CDN. The parameter you passed would be added in front of `),Wi$1(587,`code`),_w(588,`assets/`),Tl(),_w(589,`.`),Tl(),Wi$1(590,`p`),_w(591,`Assume that you deploy the static assets under `),Wi$1(592,`code`),_w(593,`https://mycdn.somecdn.com/icons/assets`),Tl(),_w(594,`. You can call
`),Wi$1(595,`code`),_w(596,`changeAssetsSource('https://mycdn.somecdn.com/icons')`),Tl(),_w(597,` to tell NG-ZORRO that all your resources are located there.`),Tl(),Wi$1(598,`h3`,93)(599,`span`),_w(600,`Add Icons in Lazy-loaded Components`),Tl(),Wi$1(601,`a`,94),_w(602,`#`),Tl()(),Wi$1(603,`p`),_w(604,`Sometimes, you want to import icons in lazy components to avoid increasing the size of the `),Wi$1(605,`code`),_w(606,`main.js`),Tl(),_w(607,`.
You can import icons in `),Wi$1(608,`code`),_w(609,`providers`),Tl(),_w(610,` of the component or router with `),Wi$1(611,`code`),_w(612,`provideNzIconsPatch`),Tl(),_w(613,` API.`),Tl(),Wi$1(614,`pre`,86)(615,`code`)(616,`span`,87),_w(617,`import`),Tl(),_w(618,` { `),Wi$1(619,`span`,88),_w(620,`NzIconModule`),Tl(),_w(621,`, provideNzIconsPatch } `),Wi$1(622,`span`,87),_w(623,`from`),Tl(),_w(624,` `),Wi$1(625,`span`,82),_w(626,`'ng-zorro-antd/icon'`),Tl(),_w(627,`;

`),Wi$1(628,`span`,89),_w(629,`// in xxx.component.ts`),Tl(),_w(630,`
`),Wi$1(631,`span`,95),_w(632,`@Component`),Tl(),_w(633,`({
  `),Wi$1(634,`span`,81),_w(635,`imports`),Tl(),_w(636,`: [`),Wi$1(637,`span`,88),_w(638,`NzIconModule`),Tl(),_w(639,`],
  `),Wi$1(640,`span`,81),_w(641,`providers`),Tl(),_w(642,`: [`),Wi$1(643,`span`,90),_w(644,`provideNzIconsPatch`),Tl(),_w(645,`([`),Wi$1(646,`span`,88),_w(647,`QuestionOutline`),Tl(),_w(648,`])]
})
`),Wi$1(649,`span`,87),_w(650,`class`),Tl(),_w(651,` `),Wi$1(652,`span`,88),_w(653,`ChildComponent`),Tl(),_w(654,` {}

`),Wi$1(655,`span`,89),_w(656,`// or in xxx.routes.ts`),Tl(),_w(657,`
`),Wi$1(658,`span`,87),_w(659,`const`),Tl(),_w(660,` `),Wi$1(661,`span`,81),_w(662,`routes`),Tl(),_w(663,`: `),Wi$1(664,`span`,88),_w(665,`Routes`),Tl(),_w(666,` = [
  {
    `),Wi$1(667,`span`,81),_w(668,`path`),Tl(),_w(669,`: `),Wi$1(670,`span`,82),_w(671,`''`),Tl(),_w(672,`,
    `),Wi$1(673,`span`,81),_w(674,`providers`),Tl(),_w(675,`: [`),Wi$1(676,`span`,90),_w(677,`provideNzIconsPatch`),Tl(),_w(678,`([`),Wi$1(679,`span`,88),_w(680,`QuestionOutline`),Tl(),_w(681,`])]
  }
];`),Tl()(),Wi$1(682,`p`),_w(683,`Once the QuestionOutline icon get loaded, it would be usable across the application.`),Tl(),Wi$1(684,`h3`,96)(685,`span`),_w(686,`Set Default TwoTone Color`),Tl(),Wi$1(687,`a`,97),_w(688,`#`),Tl()(),Wi$1(689,`p`),_w(690,`When using two-tone icons, you should provide a global configuration like `),Wi$1(691,`code`),_w(692,`{ nzIcon: { nzTwotoneColor: 'xxx' } }`),Tl(),_w(693,` via `),Wi$1(694,`code`),_w(695,`NzConfigService`),Tl(),_w(696,` or call corresponding `),Wi$1(697,`code`),_w(698,`set`),Tl(),_w(699,` method to change to default twotone color.`),Tl(),Wi$1(700,`h3`,98)(701,`span`),_w(702,`Custom Font Icon`),Tl(),Wi$1(703,`a`,99),_w(704,`#`),Tl()(),Wi$1(705,`p`),_w(706,`We provided a `),Wi$1(707,`code`),_w(708,`fetchFromIconfont`),Tl(),_w(709,` method, which is specified for iconfont, to help you use your own icons deployed at `),Wi$1(710,`a`,100),_w(711,`iconfont.cn`),Tl(),_w(712,` in a convenient way.`),Tl(),Wi$1(713,`pre`,86)(714,`code`)(715,`span`,101),_w(716,`this`),Tl(),_w(717,`.`),Wi$1(718,`span`,102),_w(719,`_iconService`),Tl(),_w(720,`.`),Wi$1(721,`span`,90),_w(722,`fetchFromIconfont`),Tl(),_w(723,`({
  `),Wi$1(724,`span`,81),_w(725,`scriptUrl`),Tl(),_w(726,`: `),Wi$1(727,`span`,82),_w(728,`'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'`),Tl(),_w(729,`
});`),Tl()(),Wi$1(730,`p`),_w(731,`And then you can use it like this:`),Tl(),Wi$1(732,`pre`,78)(733,`code`)(734,`span`,79),_w(735,`<`),Wi$1(736,`span`,80),_w(737,`nz-icon`),Tl(),_w(738,` `),Wi$1(739,`span`,81),_w(740,`nzIconfont`),Tl(),_w(741,`=`),Wi$1(742,`span`,82),_w(743,`"icon-tuichu"`),Tl(),_w(744,` />`),Tl()()(),Wi$1(745,`p`),_w(746,`It creates a component that uses SVG sprites in essence.`),Tl(),Wi$1(747,`p`),_w(748,`The following options are available:`),Tl(),Wi$1(749,`table`)(750,`thead`)(751,`tr`)(752,`th`),_w(753,`Property`),Tl(),Wi$1(754,`th`),_w(755,`Description`),Tl(),Wi$1(756,`th`),_w(757,`Type`),Tl(),Wi$1(758,`th`),_w(759,`Default`),Tl()()(),Wi$1(760,`tbody`)(761,`tr`)(762,`td`)(763,`code`),_w(764,`scriptUrl`),Tl()(),Wi$1(765,`td`),_w(766,`The URL generated by iconfont.cn project.`),Tl(),Wi$1(767,`td`)(768,`code`),_w(769,`string`),Tl()(),Wi$1(770,`td`),_w(771,`-`),Tl()()()(),Wi$1(772,`p`),_w(773,`The property `),Wi$1(774,`code`),_w(775,`scriptUrl`),Tl(),_w(776,` should be set to import the svg sprite symbols.`),Tl(),Wi$1(777,`p`),_w(778,`See `),Wi$1(779,`a`,103),_w(780,`iconfont.cn document`),Tl(),_w(781,` to learn about how to generate the `),Wi$1(782,`code`),_w(783,`scriptUrl`),Tl(),_w(784,`.`),Tl(),Wi$1(785,`h3`,104)(786,`span`),_w(787,`Namespace`),Tl(),Wi$1(788,`a`,105),_w(789,`#`),Tl()(),Wi$1(790,`p`),_w(791,`We introduced namespace so you could add your own icons in a convenient way.
When you want to render an icon, you could assign `),Wi$1(792,`code`),_w(793,`type`),Tl(),Wi$1(794,`code`),_w(795,`namespace:name`),Tl(),_w(796,`. Dynamic importing and static importing are both supported.`),Tl(),Wi$1(797,`p`),_w(798,`Static importing. Invoke `),Wi$1(799,`code`),_w(800,`addIconLiteral`),Tl(),_w(801,` of `),Wi$1(802,`code`),_w(803,`NzIconService`),Tl(),_w(804,`.`),Tl(),Wi$1(805,`p`),_w(806,`Dynamic importing. Make sure that you have put your SVG resources in directory like `),Wi$1(807,`code`),_w(808,"assets/${namespace}"),Tl(),_w(809,`.
For example, if you have an `),Wi$1(810,`code`),_w(811,`angular`),Tl(),_w(812,` icon and a `),Wi$1(813,`code`),_w(814,`custom`),Tl(),_w(815,` namespace, you should put the file `),Wi$1(816,`code`),_w(817,`angular.js`),Tl(),_w(818,` in `),Wi$1(819,`code`),_w(820,`assets/custom`),Tl(),_w(821,`.`),Tl(),Wi$1(822,`pre`,78)(823,`code`)(824,`span`,79),_w(825,`<`),Wi$1(826,`span`,80),_w(827,`nz-icon`),Tl(),_w(828,` `),Wi$1(829,`span`,81),_w(830,`nzType`),Tl(),_w(831,`=`),Wi$1(832,`span`,82),_w(833,`"custom:angular"`),Tl(),_w(834,` `),Wi$1(835,`span`,81),_w(836,`nzWidth`),Tl(),_w(837,`=`),Wi$1(838,`span`,82),_w(839,`"180px"`),Tl(),_w(840,` `),Wi$1(841,`span`,81),_w(842,`nzHeight`),Tl(),_w(843,`=`),Wi$1(844,`span`,82),_w(845,`"180px"`),Tl(),_w(846,` />`),Tl()()(),Wi$1(847,`p`),_w(848,`See `),Wi$1(849,`a`,106),_w(850,`custom`),Tl(),_w(851,` assets for this website.`),Tl(),Wi$1(852,`h2`,107)(853,`span`),_w(854,`FAQ`),Tl(),Wi$1(855,`a`,108),_w(856,`#`),Tl()(),Wi$1(857,`h3`,109)(858,`span`),_w(859,`All my icons are gone!`),Tl(),Wi$1(860,`a`,110),_w(861,`#`),Tl()(),Wi$1(862,`p`),_w(863,`Have you ever read the docs above?`),Tl(),Wi$1(864,`h3`,111)(865,`span`),_w(866,`There are two similar icons in a `),Wi$1(867,`code`),_w(868,`<span></span>`),Tl(),_w(869,` tag. What happened?`),Tl(),Wi$1(870,`a`,112),_w(871,`#`),Tl()(),Wi$1(872,`p`),_w(873,`In older versions of NG-ZORRO, there was a font file which would use `),Wi$1(874,`code`),_w(875,`:before`),Tl(),_w(876,` to insert an icon according to a `),Wi$1(877,`code`),_w(878,`<i>`),Tl(),_w(879,` tag's `),Wi$1(880,`code`),_w(881,`class`),Tl(),_w(882,`.
So if you have two icons, try to remove `),Wi$1(883,`code`),_w(884,`node_modules`),Tl(),_w(885,` and install again. If the problem is still there, search `),Wi$1(886,`code`),_w(887,`@icon-url`),Tl(),_w(888,` and remove that line.`),Tl(),Wi$1(889,`h3`,113)(890,`span`),_w(891,`I want to import all icons statically. What should I do?`),Tl(),Wi$1(892,`a`,114),_w(893,`#`),Tl()(),Wi$1(894,`p`),_w(895,`Although it is not recommended, actually we demonstrate it at section `),Wi$1(896,`a`,115),_w(897,`Static loading and dynamic loading`),Tl(),_w(898,`:`),Tl(),Wi$1(899,`pre`,86)(900,`code`)(901,`span`,87),_w(902,`import`),Tl(),_w(903,` * `),Wi$1(904,`span`,87),_w(905,`as`),Tl(),_w(906,` `),Wi$1(907,`span`,88),_w(908,`AllIcons`),Tl(),_w(909,` `),Wi$1(910,`span`,87),_w(911,`from`),Tl(),_w(912,` `),Wi$1(913,`span`,82),_w(914,`'@ant-design/icons-angular/icons'`),Tl(),_w(915,`;

`),Wi$1(916,`span`,87),_w(917,`const`),Tl(),_w(918,` antDesignIcons = `),Wi$1(919,`span`,88),_w(920,`AllIcons`),Tl(),_w(921,` `),Wi$1(922,`span`,87),_w(923,`as`),Tl(),_w(924,` `),Wi$1(925,`span`,88),_w(926,`Record`),Tl(),_w(927,`<`),Wi$1(928,`span`,116),_w(929,`string`),Tl(),_w(930,`, `),Wi$1(931,`span`,88),_w(932,`IconDefinition`),Tl(),_w(933,`>;
`),Wi$1(934,`span`,87),_w(935,`const`),Tl(),_w(936,` `),Wi$1(937,`span`,81),_w(938,`icons`),Tl(),_w(939,`: `),Wi$1(940,`span`,88),_w(941,`IconDefinition`),Tl(),_w(942,`[] = `),Wi$1(943,`span`,88),_w(944,`Object`),Tl(),_w(945,`.`),Wi$1(946,`span`,90),_w(947,`keys`),Tl(),_w(948,`(antDesignIcons).`),Wi$1(949,`span`,90),_w(950,`map`),Tl(),_w(951,`(`),Wi$1(952,`span`,117)(953,`span`,118),_w(954,`key`),Tl(),_w(955,` =>`),Tl(),_w(956,` antDesignIcons[key]);`),Tl()(),Wi$1(957,`h3`,119)(958,`span`),_w(959,`Does dynamic loading affect web pages' performance?`),Tl(),Wi$1(960,`a`,120),_w(961,`#`),Tl()(),Wi$1(962,`p`),_w(963,`We used several methods to reduce requests, such as static cache, dynamic cache and reusable request.
It's basically not noticeable for visitors that icons are loaded asynchronously assuming web connections are fairly good.`),Tl(),Wi$1(964,`h3`,121)(965,`span`),_w(966,`How do I know an icon's corresponding module to import?`),Tl(),Wi$1(967,`a`,122),_w(968,`#`),Tl()(),Wi$1(969,`p`),_w(970,`Capital camel-case `),Wi$1(971,`code`),_w(972,`type & theme`),Tl(),_w(973,`, i.e. `),Wi$1(974,`code`),_w(975,`alibaba`),Tl(),_w(976,` => `),Wi$1(977,`code`),_w(978,`AlibabaOutline`),Tl(),_w(979,`.`),Tl()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,Vw(9,xi)),cD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()),vE(43),eg(`width`,r.width()),vE(2),eg(`width`,r.width()))},dependencies:[ml,Nr,Ds,Te,yt,ae$1,bt,re,Bt,Et,bg,sd,cr,ir,Fa,p9,d9,Vn,qi$1,_n,ji$1,Jo,Za,Dl,ga$1,ma$1,So,Ve$1,pe,_u,pa$1],encapsulation:2})}return a})();var gi=()=>({standalone:!0});function Si(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,88),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,89),tg(3,`nz-icon`,90),Tl()(),Sl()}}function ui(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,88),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,89),_w(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var rt=110;var Pn=(()=>{class a{destroyRef=_(ae);router=_(Te$1);#e=_(Z0);injector=_(se);viewPort=_(d7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){oV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-rt>640?this.width.set(640):this.width.set(this.windowWidth()-rt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-rt>640?this.width.set(640):this.width.set(i-rt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(rV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`nz-blog-dotnet-core-testing`]],features:[jw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:2940,vars:12,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-5a486561`,`nzTitle`,`MyTested Library Out of The Box`],[`nzHref`,`#h-24135ede`,`nzTitle`,`.NET Core Identity Controller Implementation`],[`nzHref`,`#h-c9515f97`,`nzTitle`,`IdentityController`],[`nzHref`,`#h-88d4cd62`,`nzTitle`,`.NET Core Identity Service Implementation`],[`nzHref`,`#h-6278f57b`,`nzTitle`,`IdentityService`],[`nzHref`,`#h-3505cd43`,`nzTitle`,`Data Validation with FluentValidation Library`],[`nzHref`,`#h-6f8b794f`,`nzTitle`,`Conclusion`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230605-dotnet-core-testing.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`href`,`https://versionsof.net/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/LICENSE`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/LICENSE`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[`nz-row`,``,`nzJustify`,`center`,1,`p-t-24`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/MyTested-test-project-example/refs/heads/main/test-run.png`,`alt`,`test-run`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`href`,`https://github.com/cioina/MyTested-test-project-example`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-5a486561`],[`onclick`,`window.location.hash = 'h-5a486561'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-csharp`],[1,`hljs-keyword`],[1,`hljs-title`],[1,`hljs-meta`],[1,`hljs-function`],[1,`hljs-string`],[`id`,`h-24135ede`],[`onclick`,`window.location.hash = 'h-24135ede'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Web/Features/IdentityController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-c9515f97`],[`onclick`,`window.location.hash = 'h-c9515f97'`,1,`anchor`],[`id`,`h-88d4cd62`],[`onclick`,`window.location.hash = 'h-88d4cd62'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Infrastructure/Identity/Services/IdentityService.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6278f57b`],[`onclick`,`window.location.hash = 'h-6278f57b'`,1,`anchor`],[1,`hljs-params`],[1,`hljs-built_in`],[1,`hljs-literal`],[1,`hljs-number`],[1,`hljs-subst`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Users/LoginTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-comment`],[`id`,`h-3505cd43`],[`onclick`,`window.location.hash = 'h-3505cd43'`,1,`anchor`],[`href`,`https://github.com/realworld-apps/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Articles/Create.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs#L696`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6f8b794f`],[`onclick`,`window.location.hash = 'h-6f8b794f'`,1,`anchor`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/ivaylokenov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ardalis`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanprodan`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jbogard`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/BenMorris`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(Wi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,Si,4,0,`ng-container`,5)(6,ui,4,0,`ng-container`,5),Tl()()(),Wi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),_w(11,`Jump to top`),Tl()(),Wi$1(12,`div`,3)(13,`nz-switch`,9),sD(),Ag(`ngModelChange`,function(g){return xw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),Wi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19),Tl()(),Wi$1(24,`span`,20),_w(25,` ASP.NET Core 10 Testing`),tg(26,`span`,21)(27,`span`,22),Wi$1(28,`a`,23),tg(29,`nz-icon`,24),Tl()(),Wi$1(30,`article`,25)(31,`blockquote`,26)(32,`p`)(33,`strong`),_w(34,`All C# code from this article was tested using `),Wi$1(35,`a`,27),_w(36,`.NET Core 10.0.14`),Tl(),_w(37,`, modified source code of `),Wi$1(38,`a`,28),_w(39,`MyTested.AspNetCore.Mvc - Fluent Testing Library for ASP.NET Core MVC`),Tl(),_w(40,` provided under `),Wi$1(41,`a`,29),_w(42,`Apache License, Version 2.0 or Microsoft Public License (Ms-PL)`),Tl(),_w(43,`, and modified source code of `),Wi$1(44,`a`,30),_w(45,`BookStore`),Tl(),_w(46,` provided under `),Wi$1(47,`a`,31),_w(48,`MIT License`),Tl()()()(),Wi$1(49,`h2`,32)(50,`span`),_w(51,`Introduction`),Tl(),Wi$1(52,`a`,33),_w(53,`#`),Tl()(),Wi$1(54,`div`,34),tg(55,`img`,35),Tl(),Wi$1(56,`p`),_w(57,`In this article, we will give an example of testing of .NET Core code. We will use `),Wi$1(58,`a`,28),_w(59,`MyTested`),Tl(),_w(60,` - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 10 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 10 project is based on `),Wi$1(61,`a`,30),_w(62,`BookStore`),Tl(),_w(63,` repository and adapted to work with MyTested library. A full test project example is on `),Wi$1(64,`a`,36),_w(65,`our GitHub repository`),Tl(),_w(66,`.`),Tl(),Wi$1(67,`p`),_w(68,`The main focus of our example is testing of the standard `),Wi$1(69,`code`),_w(70,`User Identity`),Tl(),_w(71,` provided by `),Wi$1(72,`code`),_w(73,`Microsoft.AspNetCore.Identity`),Tl(),_w(74,`. The access to the user is provided by `),Wi$1(75,`code`),_w(76,`UserManager<User>`),Tl(),_w(77,` micro service. The source code of all our examples is copied and pasted from our actual application. The compiled code of our .NET Core 10 application can be found on `),Wi$1(78,`a`,37),_w(79,`our GitHub repository`),Tl(),_w(80,`.`),Tl(),Wi$1(81,`p`),_w(82,`One of the advantages of having of a detailed test module for standard `),Wi$1(83,`code`),_w(84,`Microsoft.AspNetCore.Identity`),Tl(),_w(85,` implementation is the fact that it is used very frequently in .NET Core applications. Following, we will give examples of API controller, the implementation of `),Wi$1(86,`code`),_w(87,`User Identity`),Tl(),_w(88,` with Bearer Header Authorization based on JWT token and an example of a comprehensive `),Wi$1(89,`code`),_w(90,`User Identity`),Tl(),_w(91,` controller testing.`),Tl(),Wi$1(92,`h2`,38)(93,`span`),_w(94,`MyTested Library Out of The Box`),Tl(),Wi$1(95,`a`,39),_w(96,`#`),Tl()(),Wi$1(97,`p`),_w(98,`I found out about MyTested for the first time from `),Wi$1(99,`a`,40),_w(100,`BlazorShop`),Tl(),_w(101,` repository. At the same time, I found out about `),Wi$1(102,`code`),_w(103,`JwtAuthentication`),Tl(),_w(104,` implementation from same `),Wi$1(105,`a`,41),_w(106,`BlazorShop`),Tl(),_w(107,` repository and from `),Wi$1(108,`a`,42),_w(109,`aspnetcore-realworld-example`),Tl(),_w(110,` repository. Both `),Wi$1(111,`code`),_w(112,`JwtAuthentication`),Tl(),_w(113,` implementations did not work with original `),Wi$1(114,`a`,28),_w(115,`MyTested`),Tl(),_w(116,` library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was able only to add some small pieces of code to make MyTested and my own `),Wi$1(117,`code`),_w(118,`JwtAuthentication`),Tl(),_w(119,` implementation work and not to break any original MyTested tests. But, what MyTested can do out of the box? The best answer is in `),Wi$1(120,`a`,43),_w(121,`MusicStore`),Tl(),_w(122,` testing project. For the API controller, `),Wi$1(123,`a`,44),_w(124,`here`),Tl(),_w(125,` is an example:`),Tl(),Wi$1(126,`pre`,45)(127,`code`)(128,`span`,46),_w(129,`using`),Tl(),_w(130,` BlogAngular.Application.Common.Version;
`),Wi$1(131,`span`,46),_w(132,`using`),Tl(),_w(133,` BlogAngular.Web.Features;
`),Wi$1(134,`span`,46),_w(135,`using`),Tl(),_w(136,` MyTested.AspNetCore.Mvc;
`),Wi$1(137,`span`,46),_w(138,`using`),Tl(),_w(139,` Xunit;

`),Wi$1(140,`span`,46),_w(141,`namespace`),Tl(),_w(142,` `),Wi$1(143,`span`,47),_w(144,`BlogAngular.Test.Routing`),Tl(),_w(145,`
{
    `),Wi$1(146,`span`,46),_w(147,`public`),Tl(),_w(148,` `),Wi$1(149,`span`,46),_w(150,`class`),Tl(),_w(151,` `),Wi$1(152,`span`,47),_w(153,`FrontEndRouteTest`),Tl(),_w(154,`
    {
        [`),Wi$1(155,`span`,48),_w(156,`Fact`),Tl(),_w(157,`]
        `),Wi$1(158,`span`,49)(159,`span`,46),_w(160,`public`),Tl(),_w(161,` `),Wi$1(162,`span`,46),_w(163,`void`),Tl(),_w(164,` `),Wi$1(165,`span`,47),_w(166,`VersionShouldBeRouted`),Tl(),_w(167,`()`),Tl(),_w(168,`
        => MyMvc
        .Pipeline()
        .ShouldMap(request => request
            .WithMethod(HttpMethod.Get)
            .WithLocation(`),Wi$1(169,`span`,50),_w(170,`"api/v1.0/version"`),Tl(),_w(171,`))
        .To<VersionController>(c => c.Index())
        .Which()
        .ShouldReturn()
        .ActionResult(result => result.Result(`),Wi$1(172,`span`,46),_w(173,`new`),Tl(),_w(174,` VersionResponseEnvelope
        {
            VersionJson = `),Wi$1(175,`span`,46),_w(176,`new`),Tl(),_w(177,` VersionResponseModel()
        }));
    }
}`),Tl()(),Wi$1(178,`h2`,51)(179,`span`),_w(180,`.NET Core Identity Controller Implementation`),Tl(),Wi$1(181,`a`,52),_w(182,`#`),Tl()(),Wi$1(183,`p`),_w(184,`Our controller implementation is based on `),Wi$1(185,`a`,53),_w(186,`this GitHub repository`),Tl(),_w(187,`. We added two more methods: `),Wi$1(188,`code`),_w(189,`LoginPassword`),Tl(),_w(190,` and `),Wi$1(191,`code`),_w(192,`Update`),Tl(),_w(193,` with `),Wi$1(194,`code`),_w(195,`[Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy)]`),Tl(),_w(196,` attribute that uses Bearer Header Authorization based on JWT token implementation provided by .NET Core 10. Our Angular 20 application that runs in a web browser will make a request to the endpoint `),Wi$1(197,`code`),_w(198,`http://localhost:1503/api/v1.0/identity/update`),Tl(),_w(199,`. The request has an Authorization header with a JWT token. The request body has some data in JSON format. Our .NET Core 10 application must authenticate the user based on the JWT token and authorize the user based on a specific policy. Once the user passes the authorization process, the application must execute a command and return some data in JSON format. Below, we give an example of an `),Wi$1(200,`a`,54),_w(201,`API controller`),Tl()(),Wi$1(202,`h3`,55)(203,`span`),_w(204,`IdentityController`),Tl(),Wi$1(205,`a`,56),_w(206,`#`),Tl()(),Wi$1(207,`pre`,45)(208,`code`)(209,`span`,46),_w(210,`using`),Tl(),_w(211,` BlogAngular.Application.Identity.Commands.Common;
`),Wi$1(212,`span`,46),_w(213,`using`),Tl(),_w(214,` BlogAngular.Application.Identity.Commands.Login;
`),Wi$1(215,`span`,46),_w(216,`using`),Tl(),_w(217,` BlogAngular.Application.Identity.Commands.Register;
`),Wi$1(218,`span`,46),_w(219,`using`),Tl(),_w(220,` BlogAngular.Application.Identity.Commands.Update;
`),Wi$1(221,`span`,46),_w(222,`using`),Tl(),_w(223,` Microsoft.AspNetCore.Authorization;
`),Wi$1(224,`span`,46),_w(225,`using`),Tl(),_w(226,` Microsoft.AspNetCore.Mvc;
`),Wi$1(227,`span`,46),_w(228,`using`),Tl(),_w(229,` System.Threading.Tasks;

`),Wi$1(230,`span`,46),_w(231,`using`),Tl(),_w(232,` `),Wi$1(233,`span`,46),_w(234,`static`),Tl(),_w(235,` BlogAngular.Domain.Common.Models.ModelConstants.Identity;

`),Wi$1(236,`span`,46),_w(237,`namespace`),Tl(),_w(238,` `),Wi$1(239,`span`,47),_w(240,`BlogAngular.Web.Features`),Tl(),_w(241,`
{
    `),Wi$1(242,`span`,46),_w(243,`public`),Tl(),_w(244,` `),Wi$1(245,`span`,46),_w(246,`class`),Tl(),_w(247,` `),Wi$1(248,`span`,47),_w(249,`IdentityController`),Tl(),_w(250,` : `),Wi$1(251,`span`,47),_w(252,`ApiController`),Tl(),_w(253,`
    {
        [`),Wi$1(254,`span`,48),_w(255,`HttpPost`),Tl(),_w(256,`]
        [`),Wi$1(257,`span`,48),_w(258,`Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)`),Tl(),_w(259,`]
        `),Wi$1(260,`span`,46),_w(261,`public`),Tl(),_w(262,` `),Wi$1(263,`span`,46),_w(264,`async`),Tl(),_w(265,` Task<ActionResult<UserResponseEnvelope>> LoginPassword(
            LoginPasswordCommand command)
            => `),Wi$1(266,`span`,46),_w(267,`await`),Tl(),_w(268,` `),Wi$1(269,`span`,46),_w(270,`this`),Tl(),_w(271,`.Send(command);

        [`),Wi$1(272,`span`,48),_w(273,`HttpPost`),Tl(),_w(274,`]
        [`),Wi$1(275,`span`,48),_w(276,`Route(nameof(Login))`),Tl(),_w(277,`]
        `),Wi$1(278,`span`,46),_w(279,`public`),Tl(),_w(280,` `),Wi$1(281,`span`,46),_w(282,`async`),Tl(),_w(283,` Task<ActionResult<UserResponseEnvelope>> Login(
            UserLoginCommand command)
            => `),Wi$1(284,`span`,46),_w(285,`await`),Tl(),_w(286,` `),Wi$1(287,`span`,46),_w(288,`this`),Tl(),_w(289,`.Send(command);

        [`),Wi$1(290,`span`,48),_w(291,`HttpPost`),Tl(),_w(292,`]
        [`),Wi$1(293,`span`,48),_w(294,`Route(nameof(Register))`),Tl(),_w(295,`]
        `),Wi$1(296,`span`,46),_w(297,`public`),Tl(),_w(298,` `),Wi$1(299,`span`,46),_w(300,`async`),Tl(),_w(301,` Task<ActionResult<UserResponseEnvelope>> Register(
            UserRegisterCommand command)
            => `),Wi$1(302,`span`,46),_w(303,`await`),Tl(),_w(304,` `),Wi$1(305,`span`,46),_w(306,`this`),Tl(),_w(307,`.Send(command);

        [`),Wi$1(308,`span`,48),_w(309,`HttpPut`),Tl(),_w(310,`]
        [`),Wi$1(311,`span`,48),_w(312,`Route(nameof(Update))`),Tl(),_w(313,`]
        [`),Wi$1(314,`span`,48),_w(315,`Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)`),Tl(),_w(316,`]
        `),Wi$1(317,`span`,46),_w(318,`public`),Tl(),_w(319,` `),Wi$1(320,`span`,46),_w(321,`async`),Tl(),_w(322,` Task<ActionResult<UserResponseEnvelope>> Update(
            UserUpdateCommand command)
            => `),Wi$1(323,`span`,46),_w(324,`await`),Tl(),_w(325,` `),Wi$1(326,`span`,46),_w(327,`this`),Tl(),_w(328,`.Send(command);
    }
}`),Tl()(),Wi$1(329,`h2`,57)(330,`span`),_w(331,`.NET Core Identity Service Implementation`),Tl(),Wi$1(332,`a`,58),_w(333,`#`),Tl()(),Wi$1(334,`p`),_w(335,`Our service implementation is based on `),Wi$1(336,`a`,59),_w(337,`this GitHub repository`),Tl(),_w(338,`. As we said earlier, this kind of `),Wi$1(339,`code`),_w(340,`Identity Service`),Tl(),_w(341,` will look the same for all .NET Core 10 applications that use a standard `),Wi$1(342,`code`),_w(343,`Microsoft.AspNetCore.Identity`),Tl(),_w(344,` implementation. Below, there is an example that we copied and pasted direct from our actual application.`),Tl(),Wi$1(345,`h3`,60)(346,`span`),_w(347,`IdentityService`),Tl(),Wi$1(348,`a`,61),_w(349,`#`),Tl()(),Wi$1(350,`pre`,45)(351,`code`)(352,`span`,46),_w(353,`using`),Tl(),_w(354,` BlogAngular.Application.Common;
`),Wi$1(355,`span`,46),_w(356,`using`),Tl(),_w(357,` BlogAngular.Application.Common.Models;
`),Wi$1(358,`span`,46),_w(359,`using`),Tl(),_w(360,` BlogAngular.Application.Identity;
`),Wi$1(361,`span`,46),_w(362,`using`),Tl(),_w(363,` BlogAngular.Application.Identity.Commands.Common;
`),Wi$1(364,`span`,46),_w(365,`using`),Tl(),_w(366,` BlogAngular.Application.Identity.Commands.Register;
`),Wi$1(367,`span`,46),_w(368,`using`),Tl(),_w(369,` BlogAngular.Application.Identity.Commands.Update;
`),Wi$1(370,`span`,46),_w(371,`using`),Tl(),_w(372,` BlogAngular.Application.Identity.Queries.Profile;
`),Wi$1(373,`span`,46),_w(374,`using`),Tl(),_w(375,` BlogAngular.Domain.Common.Events.Identity;
`),Wi$1(376,`span`,46),_w(377,`using`),Tl(),_w(378,` BlogAngular.Infrastructure.Common.Events;
`),Wi$1(379,`span`,46),_w(380,`using`),Tl(),_w(381,` BlogAngular.Infrastructure.Common.Extensions;
`),Wi$1(382,`span`,46),_w(383,`using`),Tl(),_w(384,` Microsoft.AspNetCore.Hosting;
`),Wi$1(385,`span`,46),_w(386,`using`),Tl(),_w(387,` Microsoft.AspNetCore.Http;
`),Wi$1(388,`span`,46),_w(389,`using`),Tl(),_w(390,` Microsoft.AspNetCore.Identity;
`),Wi$1(391,`span`,46),_w(392,`using`),Tl(),_w(393,` Microsoft.Extensions.Options;
`),Wi$1(394,`span`,46),_w(395,`using`),Tl(),_w(396,` System;
`),Wi$1(397,`span`,46),_w(398,`using`),Tl(),_w(399,` System.Collections.Generic;
`),Wi$1(400,`span`,46),_w(401,`using`),Tl(),_w(402,` System.Security.Claims;
`),Wi$1(403,`span`,46),_w(404,`using`),Tl(),_w(405,` System.Threading.Tasks;

`),Wi$1(406,`span`,46),_w(407,`namespace`),Tl(),_w(408,` `),Wi$1(409,`span`,47),_w(410,`BlogAngular.Infrastructure.Identity.Services`),Tl(),_w(411,`
{
    `),Wi$1(412,`span`,49)(413,`span`,46),_w(414,`internal`),Tl(),_w(415,` `),Wi$1(416,`span`,46),_w(417,`class`),Tl(),_w(418,` `),Wi$1(419,`span`,47),_w(420,`IdentityService`),Tl(),_w(421,`(`),Wi$1(422,`span`,62),_w(423,`
        IWebHostEnvironment env,
        UserManager<User> userManager,
        IJwtGenerator jwtGenerator,
        IEventDispatcher eventDispatcher,
        IOptions<ApplicationSettings> applicationSettings,
        IHttpContextAccessor httpContextAccessor
            `),Tl(),_w(424,`) : IIdentity`),Tl(),_w(425,`
    {
        `),Wi$1(426,`span`,46),_w(427,`private`),Tl(),_w(428,` `),Wi$1(429,`span`,46),_w(430,`const`),Tl(),_w(431,` `),Wi$1(432,`span`,63),_w(433,`string`),Tl(),_w(434,` InvalidErrorMessage = `),Wi$1(435,`span`,50),_w(436,`"Invalid credentials."`),Tl(),_w(437,`;
        `),Wi$1(438,`span`,46),_w(439,`private`),Tl(),_w(440,` `),Wi$1(441,`span`,46),_w(442,`const`),Tl(),_w(443,` `),Wi$1(444,`span`,63),_w(445,`string`),Tl(),_w(446,` NoDataErrorMessage = `),Wi$1(447,`span`,50),_w(448,`"There is no data to process."`),Tl(),_w(449,`;
        `),Wi$1(450,`span`,46),_w(451,`private`),Tl(),_w(452,` `),Wi$1(453,`span`,46),_w(454,`const`),Tl(),_w(455,` `),Wi$1(456,`span`,63),_w(457,`string`),Tl(),_w(458,` IdentityErrorMessage = `),Wi$1(459,`span`,50),_w(460,`"Something went wrong. The server may be down."`),Tl(),_w(461,`;
        `),Wi$1(462,`span`,46),_w(463,`private`),Tl(),_w(464,` `),Wi$1(465,`span`,46),_w(466,`const`),Tl(),_w(467,` `),Wi$1(468,`span`,63),_w(469,`string`),Tl(),_w(470,` IdentityRoleErrorMessage = `),Wi$1(471,`span`,50),_w(472,`@"Cannot find role {0}"`),Tl(),_w(473,`;
        `),Wi$1(474,`span`,46),_w(475,`private`),Tl(),_w(476,` `),Wi$1(477,`span`,46),_w(478,`const`),Tl(),_w(479,` `),Wi$1(480,`span`,63),_w(481,`string`),Tl(),_w(482,` UserNameTakenErrorMessage = `),Wi$1(483,`span`,50),_w(484,`"The user name has been taken."`),Tl(),_w(485,`;
        `),Wi$1(486,`span`,46),_w(487,`private`),Tl(),_w(488,` `),Wi$1(489,`span`,46),_w(490,`const`),Tl(),_w(491,` `),Wi$1(492,`span`,63),_w(493,`string`),Tl(),_w(494,` EmailTakenErrorMessage = `),Wi$1(495,`span`,50),_w(496,`"The email has been taken."`),Tl(),_w(497,`;
        `),Wi$1(498,`span`,46),_w(499,`private`),Tl(),_w(500,` `),Wi$1(501,`span`,46),_w(502,`const`),Tl(),_w(503,` `),Wi$1(504,`span`,63),_w(505,`string`),Tl(),_w(506,` UserNullErrorMessage = `),Wi$1(507,`span`,50),_w(508,`"Cannot find user by Id."`),Tl(),_w(509,`;
        `),Wi$1(510,`span`,46),_w(511,`private`),Tl(),_w(512,` `),Wi$1(513,`span`,46),_w(514,`const`),Tl(),_w(515,` `),Wi$1(516,`span`,63),_w(517,`string`),Tl(),_w(518,` ProfileErrorMessage = `),Wi$1(519,`span`,50),_w(520,`"Cannot find user profile."`),Tl(),_w(521,`;
        `),Wi$1(522,`span`,46),_w(523,`private`),Tl(),_w(524,` `),Wi$1(525,`span`,46),_w(526,`const`),Tl(),_w(527,` `),Wi$1(528,`span`,63),_w(529,`string`),Tl(),_w(530,` UsernameFormatErrorMessage = `),Wi$1(531,`span`,50),_w(532,`"Username must contain letters and numbers."`),Tl(),_w(533,`;
        `),Wi$1(534,`span`,46),_w(535,`private`),Tl(),_w(536,` `),Wi$1(537,`span`,46),_w(538,`const`),Tl(),_w(539,` `),Wi$1(540,`span`,63),_w(541,`string`),Tl(),_w(542,` PasswordFormatErrorMessage = `),Wi$1(543,`span`,50),_w(544,`"Password required upper and lower case letters, digits, and at least one special symbol."`),Tl(),_w(545,`;
        `),Wi$1(546,`span`,46),_w(547,`private`),Tl(),_w(548,` `),Wi$1(549,`span`,46),_w(550,`const`),Tl(),_w(551,` `),Wi$1(552,`span`,63),_w(553,`string`),Tl(),_w(554,` PasswordDeletedErrorMessage = `),Wi$1(555,`span`,50),_w(556,`"The old password was deleted. You must provide a new password."`),Tl(),_w(557,`;
        `),Wi$1(558,`span`,46),_w(559,`private`),Tl(),_w(560,` `),Wi$1(561,`span`,46),_w(562,`const`),Tl(),_w(563,` `),Wi$1(564,`span`,63),_w(565,`string`),Tl(),_w(566,` LockoutErrorMessage = `),Wi$1(567,`span`,50),_w(568,`@"You have been lockout for {0} minutes.{1}"`),Tl(),_w(569,`;
        `),Wi$1(570,`span`,46),_w(571,`private`),Tl(),_w(572,` `),Wi$1(573,`span`,46),_w(574,`const`),Tl(),_w(575,` `),Wi$1(576,`span`,63),_w(577,`string`),Tl(),_w(578,` LockoutEnabledErrorMessage = `),Wi$1(579,`span`,50),_w(580,`"Lockout setting is not enabled."`),Tl(),_w(581,`;

        `),Wi$1(582,`span`,46),_w(583,`private`),Tl(),_w(584,` `),Wi$1(585,`span`,46),_w(586,`readonly`),Tl(),_w(587,` IWebHostEnvironment env = env;
        `),Wi$1(588,`span`,46),_w(589,`private`),Tl(),_w(590,` `),Wi$1(591,`span`,46),_w(592,`readonly`),Tl(),_w(593,` UserManager<User> userManager = userManager;
        `),Wi$1(594,`span`,46),_w(595,`private`),Tl(),_w(596,` `),Wi$1(597,`span`,46),_w(598,`readonly`),Tl(),_w(599,` IJwtGenerator jwtGenerator = jwtGenerator;
        `),Wi$1(600,`span`,46),_w(601,`private`),Tl(),_w(602,` `),Wi$1(603,`span`,46),_w(604,`readonly`),Tl(),_w(605,` IEventDispatcher eventDispatcher = eventDispatcher;
        `),Wi$1(606,`span`,46),_w(607,`private`),Tl(),_w(608,` `),Wi$1(609,`span`,46),_w(610,`readonly`),Tl(),_w(611,` ApplicationSettings applicationSettings = applicationSettings.Value;
        `),Wi$1(612,`span`,46),_w(613,`private`),Tl(),_w(614,` `),Wi$1(615,`span`,46),_w(616,`readonly`),Tl(),_w(617,` IHttpContextAccessor httpContextAccessor = httpContextAccessor;
        `),Wi$1(618,`span`,46),_w(619,`internal`),Tl(),_w(620,` `),Wi$1(621,`span`,46),_w(622,`static`),Tl(),_w(623,` `),Wi$1(624,`span`,46),_w(625,`readonly`),Tl(),_w(626,` `),Wi$1(627,`span`,63),_w(628,`string`),Tl(),_w(629,`[] registerNotImplemented = [`),Wi$1(630,`span`,50),_w(631,`"Register is not implemented yet."`),Tl(),_w(632,`];

        `),Wi$1(633,`span`,48),_w(634,`#`),Wi$1(635,`span`,46),_w(636,`region`),Tl(),_w(637,` IsInRoleAsync`),Tl(),_w(638,`
        `),Wi$1(639,`span`,46),_w(640,`public`),Tl(),_w(641,` `),Wi$1(642,`span`,46),_w(643,`async`),Tl(),_w(644,` Task<Result<`),Wi$1(645,`span`,63),_w(646,`bool`),Tl(),_w(647,`>> IsInRoleAsync()
        {
            ClaimsPrincipal? claimsPrincipal = `),Wi$1(648,`span`,46),_w(649,`this`),Tl(),_w(650,`.httpContextAccessor.HttpContext!.User!;
            `),Wi$1(651,`span`,46),_w(652,`if`),Tl(),_w(653,` (claimsPrincipal != `),Wi$1(654,`span`,64),_w(655,`null`),Tl(),_w(656,`)
            {
                `),Wi$1(657,`span`,46),_w(658,`var`),Tl(),_w(659,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),Wi$1(660,`span`,46),_w(661,`if`),Tl(),_w(662,` (isAuthenticated == `),Wi$1(663,`span`,64),_w(664,`null`),Tl(),_w(665,` || !(`),Wi$1(666,`span`,63),_w(667,`bool`),Tl(),_w(668,`)isAuthenticated)
                {
                    `),Wi$1(669,`span`,46),_w(670,`return`),Tl(),_w(671,` Result<`),Wi$1(672,`span`,63),_w(673,`bool`),Tl(),_w(674,`>.Failure(`),Wi$1(675,`span`,46),_w(676,`new`),Tl(),_w(677,` Dictionary<`),Wi$1(678,`span`,63),_w(679,`string`),Tl(),_w(680,`, `),Wi$1(681,`span`,63),_w(682,`string`),Tl(),_w(683,`[]>
                {
                    { `),Wi$1(684,`span`,50),_w(685,`"identity_error"`),Tl(),_w(686,`, `),Wi$1(687,`span`,46),_w(688,`new`),Tl(),_w(689,`[] { IdentityErrorMessage } }
                });
                }
            }
            `),Wi$1(690,`span`,46),_w(691,`else`),Tl(),_w(692,`
            {
                `),Wi$1(693,`span`,46),_w(694,`return`),Tl(),_w(695,` Result<`),Wi$1(696,`span`,63),_w(697,`bool`),Tl(),_w(698,`>.Failure(`),Wi$1(699,`span`,46),_w(700,`new`),Tl(),_w(701,` Dictionary<`),Wi$1(702,`span`,63),_w(703,`string`),Tl(),_w(704,`, `),Wi$1(705,`span`,63),_w(706,`string`),Tl(),_w(707,`[]>
            {
                { `),Wi$1(708,`span`,50),_w(709,`"identity_error"`),Tl(),_w(710,`, `),Wi$1(711,`span`,46),_w(712,`new`),Tl(),_w(713,`[] { IdentityErrorMessage } }
            });
            }

            User? user;
            `),Wi$1(714,`span`,46),_w(715,`if`),Tl(),_w(716,` (`),Wi$1(717,`span`,46),_w(718,`this`),Tl(),_w(719,`.env.EnvironmentName == `),Wi$1(720,`span`,50),_w(721,`"Test"`),Tl(),_w(722,`)
            {
                `),Wi$1(723,`span`,46),_w(724,`var`),Tl(),_w(725,` name = claimsPrincipal.Identity?.Name;
                `),Wi$1(726,`span`,46),_w(727,`if`),Tl(),_w(728,` (name == `),Wi$1(729,`span`,64),_w(730,`null`),Tl(),_w(731,`)
                {
                    `),Wi$1(732,`span`,46),_w(733,`return`),Tl(),_w(734,` Result<`),Wi$1(735,`span`,63),_w(736,`bool`),Tl(),_w(737,`>.Failure(`),Wi$1(738,`span`,46),_w(739,`new`),Tl(),_w(740,` Dictionary<`),Wi$1(741,`span`,63),_w(742,`string`),Tl(),_w(743,`, `),Wi$1(744,`span`,63),_w(745,`string`),Tl(),_w(746,`[]>
                {
                    { `),Wi$1(747,`span`,50),_w(748,`"debug_error"`),Tl(),_w(749,`, `),Wi$1(750,`span`,46),_w(751,`new`),Tl(),_w(752,`[] { IdentityErrorMessage } }
                });
                }
                user = `),Wi$1(753,`span`,46),_w(754,`await`),Tl(),_w(755,` `),Wi$1(756,`span`,46),_w(757,`this`),Tl(),_w(758,`.userManager.FindByEmailAsync(name);
            }
            `),Wi$1(759,`span`,46),_w(760,`else`),Tl(),_w(761,`
            {
                `),Wi$1(762,`span`,46),_w(763,`var`),Tl(),_w(764,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),Wi$1(765,`span`,46),_w(766,`if`),Tl(),_w(767,` (claim == `),Wi$1(768,`span`,64),_w(769,`null`),Tl(),_w(770,`)
                {
                    `),Wi$1(771,`span`,46),_w(772,`return`),Tl(),_w(773,` Result<`),Wi$1(774,`span`,63),_w(775,`bool`),Tl(),_w(776,`>.Failure(`),Wi$1(777,`span`,46),_w(778,`new`),Tl(),_w(779,` Dictionary<`),Wi$1(780,`span`,63),_w(781,`string`),Tl(),_w(782,`, `),Wi$1(783,`span`,63),_w(784,`string`),Tl(),_w(785,`[]>
                {
                    { `),Wi$1(786,`span`,50),_w(787,`"name_identifier_error"`),Tl(),_w(788,`, `),Wi$1(789,`span`,46),_w(790,`new`),Tl(),_w(791,`[] { IdentityErrorMessage } }
                });
                }
                user = `),Wi$1(792,`span`,46),_w(793,`await`),Tl(),_w(794,` `),Wi$1(795,`span`,46),_w(796,`this`),Tl(),_w(797,`.userManager.FindByIdAsync(claim.Value);
            }

            `),Wi$1(798,`span`,46),_w(799,`if`),Tl(),_w(800,` (user == `),Wi$1(801,`span`,64),_w(802,`null`),Tl(),_w(803,`)
            {
                `),Wi$1(804,`span`,46),_w(805,`return`),Tl(),_w(806,` Result<`),Wi$1(807,`span`,63),_w(808,`bool`),Tl(),_w(809,`>.Failure(`),Wi$1(810,`span`,46),_w(811,`new`),Tl(),_w(812,` Dictionary<`),Wi$1(813,`span`,63),_w(814,`string`),Tl(),_w(815,`, `),Wi$1(816,`span`,63),_w(817,`string`),Tl(),_w(818,`[]>
            {
                { `),Wi$1(819,`span`,50),_w(820,`"user_error"`),Tl(),_w(821,`, `),Wi$1(822,`span`,46),_w(823,`new`),Tl(),_w(824,`[] { UserNullErrorMessage } }
            });
            }

            `),Wi$1(825,`span`,46),_w(826,`var`),Tl(),_w(827,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),Wi$1(828,`span`,46),_w(829,`if`),Tl(),_w(830,` (claimRole == `),Wi$1(831,`span`,64),_w(832,`null`),Tl(),_w(833,`)
            {
                `),Wi$1(834,`span`,46),_w(835,`return`),Tl(),_w(836,` Result<`),Wi$1(837,`span`,63),_w(838,`bool`),Tl(),_w(839,`>.Failure(`),Wi$1(840,`span`,46),_w(841,`new`),Tl(),_w(842,` Dictionary<`),Wi$1(843,`span`,63),_w(844,`string`),Tl(),_w(845,`, `),Wi$1(846,`span`,63),_w(847,`string`),Tl(),_w(848,`[]>
                {
                    { `),Wi$1(849,`span`,50),_w(850,`"is_in_role_error"`),Tl(),_w(851,`, `),Wi$1(852,`span`,46),_w(853,`new`),Tl(),_w(854,`[] { `),Wi$1(855,`span`,63),_w(856,`string`),Tl(),_w(857,`.Format(IdentityRoleErrorMessage, `),Wi$1(858,`span`,50),_w(859,`""`),Tl(),_w(860,`) } }
                });
            }
            `),Wi$1(861,`span`,46),_w(862,`var`),Tl(),_w(863,` isInRole = `),Wi$1(864,`span`,46),_w(865,`await`),Tl(),_w(866,` `),Wi$1(867,`span`,46),_w(868,`this`),Tl(),_w(869,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),Wi$1(870,`span`,46),_w(871,`if`),Tl(),_w(872,` (!isInRole)
            {
                `),Wi$1(873,`span`,46),_w(874,`return`),Tl(),_w(875,` Result<`),Wi$1(876,`span`,63),_w(877,`bool`),Tl(),_w(878,`>.Failure(`),Wi$1(879,`span`,46),_w(880,`new`),Tl(),_w(881,` Dictionary<`),Wi$1(882,`span`,63),_w(883,`string`),Tl(),_w(884,`, `),Wi$1(885,`span`,63),_w(886,`string`),Tl(),_w(887,`[]>
                {
                    { `),Wi$1(888,`span`,50),_w(889,`"is_in_role_error"`),Tl(),_w(890,`, `),Wi$1(891,`span`,46),_w(892,`new`),Tl(),_w(893,`[] { `),Wi$1(894,`span`,63),_w(895,`string`),Tl(),_w(896,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),Wi$1(897,`span`,46),_w(898,`return`),Tl(),_w(899,` `),Wi$1(900,`span`,64),_w(901,`true`),Tl(),_w(902,`;
        }
        `),Wi$1(903,`span`,48),_w(904,`#`),Wi$1(905,`span`,46),_w(906,`endregion`),Tl()(),_w(907,`

        `),Wi$1(908,`span`,48),_w(909,`#`),Wi$1(910,`span`,46),_w(911,`region`),Tl(),_w(912,` LoginPassword  `),Tl(),_w(913,`
        `),Wi$1(914,`span`,46),_w(915,`public`),Tl(),_w(916,` `),Wi$1(917,`span`,46),_w(918,`async`),Tl(),_w(919,` Task<Result<UserResponseEnvelope>> LoginPassword(LoginPasswordCommand userRequest)
        {
            `),Wi$1(920,`span`,46),_w(921,`if`),Tl(),_w(922,` (userRequest.UserJson.Password == `),Wi$1(923,`span`,64),_w(924,`null`),Tl(),_w(925,`)
            {
                `),Wi$1(926,`span`,46),_w(927,`return`),Tl(),_w(928,` Result<UserResponseEnvelope>.Failure(`),Wi$1(929,`span`,46),_w(930,`new`),Tl(),_w(931,` Dictionary<`),Wi$1(932,`span`,63),_w(933,`string`),Tl(),_w(934,`, `),Wi$1(935,`span`,63),_w(936,`string`),Tl(),_w(937,`[]>
            {
                { `),Wi$1(938,`span`,50),_w(939,`"no_data_error"`),Tl(),_w(940,`, `),Wi$1(941,`span`,46),_w(942,`new`),Tl(),_w(943,`[] { NoDataErrorMessage } }
            });
            }

            `),Wi$1(944,`span`,63),_w(945,`bool`),Tl(),_w(946,` isNewToken = `),Wi$1(947,`span`,64),_w(948,`false`),Tl(),_w(949,`;
            ClaimsPrincipal? claimsPrincipal = `),Wi$1(950,`span`,46),_w(951,`this`),Tl(),_w(952,`.httpContextAccessor.HttpContext!.User!;
            `),Wi$1(953,`span`,46),_w(954,`if`),Tl(),_w(955,` (claimsPrincipal != `),Wi$1(956,`span`,64),_w(957,`null`),Tl(),_w(958,`)
            {
                `),Wi$1(959,`span`,46),_w(960,`var`),Tl(),_w(961,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),Wi$1(962,`span`,46),_w(963,`if`),Tl(),_w(964,` (isAuthenticated == `),Wi$1(965,`span`,64),_w(966,`null`),Tl(),_w(967,` || !(`),Wi$1(968,`span`,63),_w(969,`bool`),Tl(),_w(970,`)isAuthenticated)
                {
                    `),Wi$1(971,`span`,46),_w(972,`return`),Tl(),_w(973,` Result<UserResponseEnvelope>.Failure(`),Wi$1(974,`span`,46),_w(975,`new`),Tl(),_w(976,` Dictionary<`),Wi$1(977,`span`,63),_w(978,`string`),Tl(),_w(979,`, `),Wi$1(980,`span`,63),_w(981,`string`),Tl(),_w(982,`[]>
                {
                    { `),Wi$1(983,`span`,50),_w(984,`"identity_error"`),Tl(),_w(985,`, `),Wi$1(986,`span`,46),_w(987,`new`),Tl(),_w(988,`[] { IdentityErrorMessage } }
                });
                }
                `),Wi$1(989,`span`,46),_w(990,`var`),Tl(),_w(991,` iat = claimsPrincipal.FindFirst(`),Wi$1(992,`span`,50),_w(993,`"iat"`),Tl(),_w(994,`);
                `),Wi$1(995,`span`,46),_w(996,`var`),Tl(),_w(997,` exp = claimsPrincipal.FindFirst(`),Wi$1(998,`span`,50),_w(999,`"exp"`),Tl(),_w(1e3,`);
                `),Wi$1(1001,`span`,46),_w(1002,`if`),Tl(),_w(1003,` (iat == `),Wi$1(1004,`span`,64),_w(1005,`null`),Tl(),_w(1006,` || exp == `),Wi$1(1007,`span`,64),_w(1008,`null`),Tl(),_w(1009,`)
                {
                    `),Wi$1(1010,`span`,46),_w(1011,`return`),Tl(),_w(1012,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1013,`span`,46),_w(1014,`new`),Tl(),_w(1015,` Dictionary<`),Wi$1(1016,`span`,63),_w(1017,`string`),Tl(),_w(1018,`, `),Wi$1(1019,`span`,63),_w(1020,`string`),Tl(),_w(1021,`[]>
                {
                    { `),Wi$1(1022,`span`,50),_w(1023,`"identity_error"`),Tl(),_w(1024,`, `),Wi$1(1025,`span`,46),_w(1026,`new`),Tl(),_w(1027,`[] { IdentityErrorMessage } }
                });
                }

                `),Wi$1(1028,`span`,46),_w(1029,`var`),Tl(),_w(1030,` rate = (`),Wi$1(1031,`span`,63),_w(1032,`long`),Tl(),_w(1033,`.Parse(exp.Value) - `),Wi$1(1034,`span`,63),_w(1035,`long`),Tl(),_w(1036,`.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                `),Wi$1(1037,`span`,46),_w(1038,`var`),Tl(),_w(1039,` current = `),Wi$1(1040,`span`,63),_w(1041,`long`),Tl(),_w(1042,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            `),Wi$1(1043,`span`,46),_w(1044,`else`),Tl(),_w(1045,`
            {
                `),Wi$1(1046,`span`,46),_w(1047,`return`),Tl(),_w(1048,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1049,`span`,46),_w(1050,`new`),Tl(),_w(1051,` Dictionary<`),Wi$1(1052,`span`,63),_w(1053,`string`),Tl(),_w(1054,`, `),Wi$1(1055,`span`,63),_w(1056,`string`),Tl(),_w(1057,`[]>
            {
                { `),Wi$1(1058,`span`,50),_w(1059,`"identity_error"`),Tl(),_w(1060,`, `),Wi$1(1061,`span`,46),_w(1062,`new`),Tl(),_w(1063,`[] { IdentityErrorMessage } }
            });
            }

            User? user;
            `),Wi$1(1064,`span`,46),_w(1065,`if`),Tl(),_w(1066,` (`),Wi$1(1067,`span`,46),_w(1068,`this`),Tl(),_w(1069,`.env.EnvironmentName == `),Wi$1(1070,`span`,50),_w(1071,`"Test"`),Tl(),_w(1072,`)
            {
                `),Wi$1(1073,`span`,46),_w(1074,`var`),Tl(),_w(1075,` name = claimsPrincipal.Identity?.Name;
                `),Wi$1(1076,`span`,46),_w(1077,`if`),Tl(),_w(1078,` (name == `),Wi$1(1079,`span`,64),_w(1080,`null`),Tl(),_w(1081,`)
                {
                    `),Wi$1(1082,`span`,46),_w(1083,`return`),Tl(),_w(1084,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1085,`span`,46),_w(1086,`new`),Tl(),_w(1087,` Dictionary<`),Wi$1(1088,`span`,63),_w(1089,`string`),Tl(),_w(1090,`, `),Wi$1(1091,`span`,63),_w(1092,`string`),Tl(),_w(1093,`[]>
                {
                    { `),Wi$1(1094,`span`,50),_w(1095,`"debug_error"`),Tl(),_w(1096,`, `),Wi$1(1097,`span`,46),_w(1098,`new`),Tl(),_w(1099,`[] { IdentityErrorMessage } }
                });
                }
                user = `),Wi$1(1100,`span`,46),_w(1101,`await`),Tl(),_w(1102,` `),Wi$1(1103,`span`,46),_w(1104,`this`),Tl(),_w(1105,`.userManager.FindByEmailAsync(name);
            }
            `),Wi$1(1106,`span`,46),_w(1107,`else`),Tl(),_w(1108,`
            {
                `),Wi$1(1109,`span`,46),_w(1110,`var`),Tl(),_w(1111,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),Wi$1(1112,`span`,46),_w(1113,`if`),Tl(),_w(1114,` (claim == `),Wi$1(1115,`span`,64),_w(1116,`null`),Tl(),_w(1117,`)
                {
                    `),Wi$1(1118,`span`,46),_w(1119,`return`),Tl(),_w(1120,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1121,`span`,46),_w(1122,`new`),Tl(),_w(1123,` Dictionary<`),Wi$1(1124,`span`,63),_w(1125,`string`),Tl(),_w(1126,`, `),Wi$1(1127,`span`,63),_w(1128,`string`),Tl(),_w(1129,`[]>
                {
                    { `),Wi$1(1130,`span`,50),_w(1131,`"name_identifier_error"`),Tl(),_w(1132,`, `),Wi$1(1133,`span`,46),_w(1134,`new`),Tl(),_w(1135,`[] { IdentityErrorMessage } }
                });
                }
                user = `),Wi$1(1136,`span`,46),_w(1137,`await`),Tl(),_w(1138,` `),Wi$1(1139,`span`,46),_w(1140,`this`),Tl(),_w(1141,`.userManager.FindByIdAsync(claim.Value);
            }

            `),Wi$1(1142,`span`,46),_w(1143,`if`),Tl(),_w(1144,` (user == `),Wi$1(1145,`span`,64),_w(1146,`null`),Tl(),_w(1147,`)
            {
                `),Wi$1(1148,`span`,46),_w(1149,`return`),Tl(),_w(1150,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1151,`span`,46),_w(1152,`new`),Tl(),_w(1153,` Dictionary<`),Wi$1(1154,`span`,63),_w(1155,`string`),Tl(),_w(1156,`, `),Wi$1(1157,`span`,63),_w(1158,`string`),Tl(),_w(1159,`[]>
            {
                { `),Wi$1(1160,`span`,50),_w(1161,`"user_error"`),Tl(),_w(1162,`, `),Wi$1(1163,`span`,46),_w(1164,`new`),Tl(),_w(1165,`[] { UserNullErrorMessage } }
            });
            }

            `),Wi$1(1166,`span`,46),_w(1167,`var`),Tl(),_w(1168,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),Wi$1(1169,`span`,46),_w(1170,`if`),Tl(),_w(1171,` (claimRole == `),Wi$1(1172,`span`,64),_w(1173,`null`),Tl(),_w(1174,`)
            {
                `),Wi$1(1175,`span`,46),_w(1176,`return`),Tl(),_w(1177,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1178,`span`,46),_w(1179,`new`),Tl(),_w(1180,` Dictionary<`),Wi$1(1181,`span`,63),_w(1182,`string`),Tl(),_w(1183,`, `),Wi$1(1184,`span`,63),_w(1185,`string`),Tl(),_w(1186,`[]>
                {
                    { `),Wi$1(1187,`span`,50),_w(1188,`"is_in_role_error"`),Tl(),_w(1189,`, `),Wi$1(1190,`span`,46),_w(1191,`new`),Tl(),_w(1192,`[] { `),Wi$1(1193,`span`,63),_w(1194,`string`),Tl(),_w(1195,`.Format(IdentityRoleErrorMessage, `),Wi$1(1196,`span`,50),_w(1197,`""`),Tl(),_w(1198,`) } }
                });
            }
            `),Wi$1(1199,`span`,46),_w(1200,`var`),Tl(),_w(1201,` isInRole = `),Wi$1(1202,`span`,46),_w(1203,`await`),Tl(),_w(1204,` `),Wi$1(1205,`span`,46),_w(1206,`this`),Tl(),_w(1207,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),Wi$1(1208,`span`,46),_w(1209,`if`),Tl(),_w(1210,` (!isInRole)
            {
                `),Wi$1(1211,`span`,46),_w(1212,`return`),Tl(),_w(1213,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1214,`span`,46),_w(1215,`new`),Tl(),_w(1216,` Dictionary<`),Wi$1(1217,`span`,63),_w(1218,`string`),Tl(),_w(1219,`, `),Wi$1(1220,`span`,63),_w(1221,`string`),Tl(),_w(1222,`[]>
                {
                    { `),Wi$1(1223,`span`,50),_w(1224,`"is_in_role_error"`),Tl(),_w(1225,`, `),Wi$1(1226,`span`,46),_w(1227,`new`),Tl(),_w(1228,`[] { `),Wi$1(1229,`span`,63),_w(1230,`string`),Tl(),_w(1231,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),Wi$1(1232,`span`,46),_w(1233,`var`),Tl(),_w(1234,` isLockoutEnabled = `),Wi$1(1235,`span`,46),_w(1236,`await`),Tl(),_w(1237,` userManager.GetLockoutEnabledAsync(user);

            `),Wi$1(1238,`span`,46),_w(1239,`if`),Tl(),_w(1240,` (isLockoutEnabled)
            {
                `),Wi$1(1241,`span`,46),_w(1242,`var`),Tl(),_w(1243,` count = `),Wi$1(1244,`span`,46),_w(1245,`await`),Tl(),_w(1246,` userManager.GetAccessFailedCountAsync(user);
                `),Wi$1(1247,`span`,46),_w(1248,`if`),Tl(),_w(1249,` (count == applicationSettings.MaxFailedAccessAttempts - `),Wi$1(1250,`span`,65),_w(1251,`1`),Tl(),_w(1252,`)
                {
                    `),Wi$1(1253,`span`,46),_w(1254,`var`),Tl(),_w(1255,` endDate = `),Wi$1(1256,`span`,46),_w(1257,`await`),Tl(),_w(1258,` userManager.GetLockoutEndDateAsync(user);
                    `),Wi$1(1259,`span`,46),_w(1260,`var`),Tl(),_w(1261,` currentDate = DateTimeOffset.UtcNow;
                    `),Wi$1(1262,`span`,46),_w(1263,`if`),Tl(),_w(1264,` (endDate > currentDate)
                    {
                        `),Wi$1(1265,`span`,46),_w(1266,`return`),Tl(),_w(1267,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1268,`span`,46),_w(1269,`new`),Tl(),_w(1270,` Dictionary<`),Wi$1(1271,`span`,63),_w(1272,`string`),Tl(),_w(1273,`, `),Wi$1(1274,`span`,63),_w(1275,`string`),Tl(),_w(1276,`[]>
                    {
                        { `),Wi$1(1277,`span`,50),_w(1278,`"lockout_error"`),Tl(),_w(1279,`, `),Wi$1(1280,`span`,46),_w(1281,`new`),Tl(),_w(1282,`[] {  `),Wi$1(1283,`span`,63),_w(1284,`string`),Tl(),_w(1285,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,`),Wi$1(1286,`span`,50),_w(1287,`""`),Tl(),_w(1288,`) } }
                    });
                    }
                }

                `),Wi$1(1289,`span`,46),_w(1290,`var`),Tl(),_w(1291,` passwordValid = `),Wi$1(1292,`span`,46),_w(1293,`await`),Tl(),_w(1294,` `),Wi$1(1295,`span`,46),_w(1296,`this`),Tl(),_w(1297,`.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                `),Wi$1(1298,`span`,46),_w(1299,`if`),Tl(),_w(1300,` (!passwordValid)
                {
                    `),Wi$1(1301,`span`,46),_w(1302,`var`),Tl(),_w(1303,` accessFailed = `),Wi$1(1304,`span`,46),_w(1305,`await`),Tl(),_w(1306,` `),Wi$1(1307,`span`,46),_w(1308,`this`),Tl(),_w(1309,`.userManager.AccessFailedAsync(user);
                    `),Wi$1(1310,`span`,46),_w(1311,`if`),Tl(),_w(1312,` (!accessFailed.Succeeded)
                    {
                        `),Wi$1(1313,`span`,46),_w(1314,`var`),Tl(),_w(1315,` errors = `),Wi$1(1316,`span`,46),_w(1317,`new`),Tl(),_w(1318,` Dictionary<`),Wi$1(1319,`span`,63),_w(1320,`string`),Tl(),_w(1321,`, `),Wi$1(1322,`span`,63),_w(1323,`string`),Tl(),_w(1324,`[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            `),Wi$1(1325,`span`,46),_w(1326,`switch`),Tl(),_w(1327,` (e.Code)
                            {
                                `),Wi$1(1328,`span`,46),_w(1329,`case`),Tl(),_w(1330,` `),Wi$1(1331,`span`,50),_w(1332,`"TODO: need to debug e.Code"`),Tl(),_w(1333,`:
                                    e.Description = `),Wi$1(1334,`span`,63),_w(1335,`string`),Tl(),_w(1336,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, `),Wi$1(1337,`span`,50),_w(1338,`""`),Tl(),_w(1339,`);
                                    `),Wi$1(1340,`span`,46),_w(1341,`break`),Tl(),_w(1342,`;
                            }

                            e.Description = `),Wi$1(1343,`span`,63),_w(1344,`string`),Tl(),_w(1345,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, [e.Description]);
                        });

                        `),Wi$1(1346,`span`,46),_w(1347,`return`),Tl(),_w(1348,` Result<UserResponseEnvelope>.Failure(errors);
                    }

                    `),Wi$1(1349,`span`,46),_w(1350,`return`),Tl(),_w(1351,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1352,`span`,46),_w(1353,`new`),Tl(),_w(1354,` Dictionary<`),Wi$1(1355,`span`,63),_w(1356,`string`),Tl(),_w(1357,`, `),Wi$1(1358,`span`,63),_w(1359,`string`),Tl(),_w(1360,`[]>
                {
                    { `),Wi$1(1361,`span`,50),_w(1362,`"invalid_error"`),Tl(),_w(1363,`, `),Wi$1(1364,`span`,46),_w(1365,`new`),Tl(),_w(1366,`[] { InvalidErrorMessage } }
                });
                }
            }
            `),Wi$1(1367,`span`,46),_w(1368,`else`),Tl(),_w(1369,`
            {
                `),Wi$1(1370,`span`,46),_w(1371,`if`),Tl(),_w(1372,` (`),Wi$1(1373,`span`,46),_w(1374,`this`),Tl(),_w(1375,`.env.EnvironmentName == `),Wi$1(1376,`span`,50),_w(1377,`"Test"`),Tl(),_w(1378,`)
                {
                    `),Wi$1(1379,`span`,46),_w(1380,`var`),Tl(),_w(1381,` passwordValid = `),Wi$1(1382,`span`,46),_w(1383,`await`),Tl(),_w(1384,` `),Wi$1(1385,`span`,46),_w(1386,`this`),Tl(),_w(1387,`.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    `),Wi$1(1388,`span`,46),_w(1389,`if`),Tl(),_w(1390,` (!passwordValid)
                    {
                        `),Wi$1(1391,`span`,46),_w(1392,`return`),Tl(),_w(1393,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1394,`span`,46),_w(1395,`new`),Tl(),_w(1396,` Dictionary<`),Wi$1(1397,`span`,63),_w(1398,`string`),Tl(),_w(1399,`, `),Wi$1(1400,`span`,63),_w(1401,`string`),Tl(),_w(1402,`[]>
                    {
                        { `),Wi$1(1403,`span`,50),_w(1404,`"invalid_error"`),Tl(),_w(1405,`, `),Wi$1(1406,`span`,46),_w(1407,`new`),Tl(),_w(1408,`[] { InvalidErrorMessage } }
                    });
                    }
                }
                `),Wi$1(1409,`span`,46),_w(1410,`else`),Tl(),_w(1411,`
                {
                    `),Wi$1(1412,`span`,46),_w(1413,`return`),Tl(),_w(1414,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1415,`span`,46),_w(1416,`new`),Tl(),_w(1417,` Dictionary<`),Wi$1(1418,`span`,63),_w(1419,`string`),Tl(),_w(1420,`, `),Wi$1(1421,`span`,63),_w(1422,`string`),Tl(),_w(1423,`[]>
                {
                    { `),Wi$1(1424,`span`,50),_w(1425,`"lockout_enabled_error"`),Tl(),_w(1426,`, `),Wi$1(1427,`span`,46),_w(1428,`new`),Tl(),_w(1429,`[] { LockoutEnabledErrorMessage } }
                });
                }
            }

            `),Wi$1(1430,`span`,63),_w(1431,`string`),Tl(),_w(1432,`? token;
            `),Wi$1(1433,`span`,46),_w(1434,`if`),Tl(),_w(1435,` (`),Wi$1(1436,`span`,46),_w(1437,`this`),Tl(),_w(1438,`.env.EnvironmentName == `),Wi$1(1439,`span`,50),_w(1440,`"Test"`),Tl(),_w(1441,`)
            {
                token = `),Wi$1(1442,`span`,50),_w(1443,`$"Token: `),Wi$1(1444,`span`,66),_w(1445,`{user.Email}`),Tl(),_w(1446,`"`),Tl(),_w(1447,`;
            }
            `),Wi$1(1448,`span`,46),_w(1449,`else`),Tl(),_w(1450,`
            {
                token = isNewToken ? `),Wi$1(1451,`span`,46),_w(1452,`await`),Tl(),_w(1453,` `),Wi$1(1454,`span`,46),_w(1455,`this`),Tl(),_w(1456,`.jwtGenerator.GenerateToken(user) :
                `),Wi$1(1457,`span`,46),_w(1458,`this`),Tl(),_w(1459,`.httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()[`),Wi$1(1460,`span`,50),_w(1461,`"Bearer "`),Tl(),_w(1462,`.Length..].Trim();
            }

            `),Wi$1(1463,`span`,46),_w(1464,`return`),Tl(),_w(1465,` `),Wi$1(1466,`span`,46),_w(1467,`new`),Tl(),_w(1468,` UserResponseEnvelope
            {
                UserJson = `),Wi$1(1469,`span`,46),_w(1470,`new`),Tl(),_w(1471,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        `),Wi$1(1472,`span`,48),_w(1473,`#`),Wi$1(1474,`span`,46),_w(1475,`endregion`),Tl()(),_w(1476,`

        `),Wi$1(1477,`span`,48),_w(1478,`#`),Wi$1(1479,`span`,46),_w(1480,`region`),Tl(),_w(1481,` Update`),Tl(),_w(1482,`
        `),Wi$1(1483,`span`,46),_w(1484,`public`),Tl(),_w(1485,` `),Wi$1(1486,`span`,46),_w(1487,`async`),Tl(),_w(1488,` Task<Result<UserResponseEnvelope>> Update(UserUpdateCommand userRequest)
        {
            `),Wi$1(1489,`span`,46),_w(1490,`if`),Tl(),_w(1491,` (userRequest.UserJson.FullName == `),Wi$1(1492,`span`,64),_w(1493,`null`),Tl(),_w(1494,` && userRequest.UserJson.Password == `),Wi$1(1495,`span`,64),_w(1496,`null`),Tl(),_w(1497,`)
            {
                `),Wi$1(1498,`span`,46),_w(1499,`return`),Tl(),_w(1500,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1501,`span`,46),_w(1502,`new`),Tl(),_w(1503,` Dictionary<`),Wi$1(1504,`span`,63),_w(1505,`string`),Tl(),_w(1506,`, `),Wi$1(1507,`span`,63),_w(1508,`string`),Tl(),_w(1509,`[]>
            {
                 { `),Wi$1(1510,`span`,50),_w(1511,`"no_data_error"`),Tl(),_w(1512,`, `),Wi$1(1513,`span`,46),_w(1514,`new`),Tl(),_w(1515,`[] { NoDataErrorMessage } }
            });
            }

            `),Wi$1(1516,`span`,63),_w(1517,`bool`),Tl(),_w(1518,` isNewToken = `),Wi$1(1519,`span`,64),_w(1520,`false`),Tl(),_w(1521,`;
            ClaimsPrincipal? claimsPrincipal = `),Wi$1(1522,`span`,46),_w(1523,`this`),Tl(),_w(1524,`.httpContextAccessor.HttpContext!.User!;
            `),Wi$1(1525,`span`,46),_w(1526,`if`),Tl(),_w(1527,` (claimsPrincipal != `),Wi$1(1528,`span`,64),_w(1529,`null`),Tl(),_w(1530,`)
            {
                `),Wi$1(1531,`span`,46),_w(1532,`var`),Tl(),_w(1533,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),Wi$1(1534,`span`,46),_w(1535,`if`),Tl(),_w(1536,` (isAuthenticated == `),Wi$1(1537,`span`,64),_w(1538,`null`),Tl(),_w(1539,` || !(`),Wi$1(1540,`span`,63),_w(1541,`bool`),Tl(),_w(1542,`)isAuthenticated)
                {
                    `),Wi$1(1543,`span`,46),_w(1544,`return`),Tl(),_w(1545,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1546,`span`,46),_w(1547,`new`),Tl(),_w(1548,` Dictionary<`),Wi$1(1549,`span`,63),_w(1550,`string`),Tl(),_w(1551,`, `),Wi$1(1552,`span`,63),_w(1553,`string`),Tl(),_w(1554,`[]>
                {
                    { `),Wi$1(1555,`span`,50),_w(1556,`"identity_error"`),Tl(),_w(1557,`, `),Wi$1(1558,`span`,46),_w(1559,`new`),Tl(),_w(1560,`[] { IdentityErrorMessage } }
                });
                }
                `),Wi$1(1561,`span`,46),_w(1562,`var`),Tl(),_w(1563,` iat = claimsPrincipal.FindFirst(`),Wi$1(1564,`span`,50),_w(1565,`"iat"`),Tl(),_w(1566,`);
                `),Wi$1(1567,`span`,46),_w(1568,`var`),Tl(),_w(1569,` exp = claimsPrincipal.FindFirst(`),Wi$1(1570,`span`,50),_w(1571,`"exp"`),Tl(),_w(1572,`);
                `),Wi$1(1573,`span`,46),_w(1574,`if`),Tl(),_w(1575,` (iat == `),Wi$1(1576,`span`,64),_w(1577,`null`),Tl(),_w(1578,` || exp == `),Wi$1(1579,`span`,64),_w(1580,`null`),Tl(),_w(1581,`)
                {
                    `),Wi$1(1582,`span`,46),_w(1583,`return`),Tl(),_w(1584,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1585,`span`,46),_w(1586,`new`),Tl(),_w(1587,` Dictionary<`),Wi$1(1588,`span`,63),_w(1589,`string`),Tl(),_w(1590,`, `),Wi$1(1591,`span`,63),_w(1592,`string`),Tl(),_w(1593,`[]>
                {
                    { `),Wi$1(1594,`span`,50),_w(1595,`"identity_error"`),Tl(),_w(1596,`, `),Wi$1(1597,`span`,46),_w(1598,`new`),Tl(),_w(1599,`[] { IdentityErrorMessage } }
                });
                }

                `),Wi$1(1600,`span`,46),_w(1601,`var`),Tl(),_w(1602,` rate = (`),Wi$1(1603,`span`,63),_w(1604,`long`),Tl(),_w(1605,`.Parse(exp.Value) - `),Wi$1(1606,`span`,63),_w(1607,`long`),Tl(),_w(1608,`.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                `),Wi$1(1609,`span`,46),_w(1610,`var`),Tl(),_w(1611,` current = `),Wi$1(1612,`span`,63),_w(1613,`long`),Tl(),_w(1614,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            `),Wi$1(1615,`span`,46),_w(1616,`else`),Tl(),_w(1617,`
            {
                `),Wi$1(1618,`span`,46),_w(1619,`return`),Tl(),_w(1620,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1621,`span`,46),_w(1622,`new`),Tl(),_w(1623,` Dictionary<`),Wi$1(1624,`span`,63),_w(1625,`string`),Tl(),_w(1626,`, `),Wi$1(1627,`span`,63),_w(1628,`string`),Tl(),_w(1629,`[]>
            {
                { `),Wi$1(1630,`span`,50),_w(1631,`"identity_error"`),Tl(),_w(1632,`, `),Wi$1(1633,`span`,46),_w(1634,`new`),Tl(),_w(1635,`[] { IdentityErrorMessage } }
            });
            }

            `),Wi$1(1636,`span`,46),_w(1637,`if`),Tl(),_w(1638,` (userRequest.UserJson.FullName != `),Wi$1(1639,`span`,64),_w(1640,`null`),Tl(),_w(1641,`)
            {
                `),Wi$1(1642,`span`,46),_w(1643,`var`),Tl(),_w(1644,` userByName = `),Wi$1(1645,`span`,46),_w(1646,`await`),Tl(),_w(1647,` `),Wi$1(1648,`span`,46),_w(1649,`this`),Tl(),_w(1650,`.userManager.FindByNameAsync(userRequest.UserJson.FullName);

                `),Wi$1(1651,`span`,46),_w(1652,`if`),Tl(),_w(1653,` (userByName != `),Wi$1(1654,`span`,64),_w(1655,`null`),Tl(),_w(1656,`)
                {
                    `),Wi$1(1657,`span`,46),_w(1658,`return`),Tl(),_w(1659,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1660,`span`,46),_w(1661,`new`),Tl(),_w(1662,` Dictionary<`),Wi$1(1663,`span`,63),_w(1664,`string`),Tl(),_w(1665,`, `),Wi$1(1666,`span`,63),_w(1667,`string`),Tl(),_w(1668,`[]>
                {
                    { `),Wi$1(1669,`span`,50),_w(1670,`"name_error"`),Tl(),_w(1671,`, `),Wi$1(1672,`span`,46),_w(1673,`new`),Tl(),_w(1674,`[] { UserNameTakenErrorMessage } }
                });
                }
            }

            User? user;
            `),Wi$1(1675,`span`,46),_w(1676,`if`),Tl(),_w(1677,` (`),Wi$1(1678,`span`,46),_w(1679,`this`),Tl(),_w(1680,`.env.EnvironmentName == `),Wi$1(1681,`span`,50),_w(1682,`"Test"`),Tl(),_w(1683,`)
            {
                `),Wi$1(1684,`span`,46),_w(1685,`var`),Tl(),_w(1686,` name = claimsPrincipal.Identity?.Name;
                `),Wi$1(1687,`span`,46),_w(1688,`if`),Tl(),_w(1689,` (name == `),Wi$1(1690,`span`,64),_w(1691,`null`),Tl(),_w(1692,`)
                {
                    `),Wi$1(1693,`span`,46),_w(1694,`return`),Tl(),_w(1695,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1696,`span`,46),_w(1697,`new`),Tl(),_w(1698,` Dictionary<`),Wi$1(1699,`span`,63),_w(1700,`string`),Tl(),_w(1701,`, `),Wi$1(1702,`span`,63),_w(1703,`string`),Tl(),_w(1704,`[]>
                {
                    { `),Wi$1(1705,`span`,50),_w(1706,`"debug_error"`),Tl(),_w(1707,`, `),Wi$1(1708,`span`,46),_w(1709,`new`),Tl(),_w(1710,`[] { IdentityErrorMessage } }
                });
                }
                user = `),Wi$1(1711,`span`,46),_w(1712,`await`),Tl(),_w(1713,` `),Wi$1(1714,`span`,46),_w(1715,`this`),Tl(),_w(1716,`.userManager.FindByEmailAsync(name);
            }
            `),Wi$1(1717,`span`,46),_w(1718,`else`),Tl(),_w(1719,`
            {
                `),Wi$1(1720,`span`,46),_w(1721,`var`),Tl(),_w(1722,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),Wi$1(1723,`span`,46),_w(1724,`if`),Tl(),_w(1725,` (claim == `),Wi$1(1726,`span`,64),_w(1727,`null`),Tl(),_w(1728,`)
                {
                    `),Wi$1(1729,`span`,46),_w(1730,`return`),Tl(),_w(1731,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1732,`span`,46),_w(1733,`new`),Tl(),_w(1734,` Dictionary<`),Wi$1(1735,`span`,63),_w(1736,`string`),Tl(),_w(1737,`, `),Wi$1(1738,`span`,63),_w(1739,`string`),Tl(),_w(1740,`[]>
                {
                    { `),Wi$1(1741,`span`,50),_w(1742,`"name_identifier_error"`),Tl(),_w(1743,`, `),Wi$1(1744,`span`,46),_w(1745,`new`),Tl(),_w(1746,`[] { IdentityErrorMessage } }
                });
                }
                user = `),Wi$1(1747,`span`,46),_w(1748,`await`),Tl(),_w(1749,` `),Wi$1(1750,`span`,46),_w(1751,`this`),Tl(),_w(1752,`.userManager.FindByIdAsync(claim.Value);
            }

            `),Wi$1(1753,`span`,46),_w(1754,`if`),Tl(),_w(1755,` (user == `),Wi$1(1756,`span`,64),_w(1757,`null`),Tl(),_w(1758,`)
            {
                `),Wi$1(1759,`span`,46),_w(1760,`return`),Tl(),_w(1761,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1762,`span`,46),_w(1763,`new`),Tl(),_w(1764,` Dictionary<`),Wi$1(1765,`span`,63),_w(1766,`string`),Tl(),_w(1767,`, `),Wi$1(1768,`span`,63),_w(1769,`string`),Tl(),_w(1770,`[]>
            {
                { `),Wi$1(1771,`span`,50),_w(1772,`"user_error"`),Tl(),_w(1773,`, `),Wi$1(1774,`span`,46),_w(1775,`new`),Tl(),_w(1776,`[] { UserNullErrorMessage } }
            });
            }

            `),Wi$1(1777,`span`,46),_w(1778,`var`),Tl(),_w(1779,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),Wi$1(1780,`span`,46),_w(1781,`if`),Tl(),_w(1782,` (claimRole == `),Wi$1(1783,`span`,64),_w(1784,`null`),Tl(),_w(1785,`)
            {
                `),Wi$1(1786,`span`,46),_w(1787,`return`),Tl(),_w(1788,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1789,`span`,46),_w(1790,`new`),Tl(),_w(1791,` Dictionary<`),Wi$1(1792,`span`,63),_w(1793,`string`),Tl(),_w(1794,`, `),Wi$1(1795,`span`,63),_w(1796,`string`),Tl(),_w(1797,`[]>
                {
                    { `),Wi$1(1798,`span`,50),_w(1799,`"is_in_role_error"`),Tl(),_w(1800,`, `),Wi$1(1801,`span`,46),_w(1802,`new`),Tl(),_w(1803,`[] { `),Wi$1(1804,`span`,63),_w(1805,`string`),Tl(),_w(1806,`.Format(IdentityRoleErrorMessage, `),Wi$1(1807,`span`,50),_w(1808,`""`),Tl(),_w(1809,`) } }
                });
            }
            `),Wi$1(1810,`span`,46),_w(1811,`var`),Tl(),_w(1812,` isInRole = `),Wi$1(1813,`span`,46),_w(1814,`await`),Tl(),_w(1815,` `),Wi$1(1816,`span`,46),_w(1817,`this`),Tl(),_w(1818,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),Wi$1(1819,`span`,46),_w(1820,`if`),Tl(),_w(1821,` (!isInRole)
            {
                `),Wi$1(1822,`span`,46),_w(1823,`return`),Tl(),_w(1824,` Result<UserResponseEnvelope>.Failure(`),Wi$1(1825,`span`,46),_w(1826,`new`),Tl(),_w(1827,` Dictionary<`),Wi$1(1828,`span`,63),_w(1829,`string`),Tl(),_w(1830,`, `),Wi$1(1831,`span`,63),_w(1832,`string`),Tl(),_w(1833,`[]>
                {
                    { `),Wi$1(1834,`span`,50),_w(1835,`"is_in_role_error"`),Tl(),_w(1836,`, `),Wi$1(1837,`span`,46),_w(1838,`new`),Tl(),_w(1839,`[] { `),Wi$1(1840,`span`,63),_w(1841,`string`),Tl(),_w(1842,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),Wi$1(1843,`span`,46),_w(1844,`if`),Tl(),_w(1845,` (userRequest.UserJson.Password != `),Wi$1(1846,`span`,64),_w(1847,`null`),Tl(),_w(1848,`)
            {
                `),Wi$1(1849,`span`,46),_w(1850,`var`),Tl(),_w(1851,` identityResult2 = `),Wi$1(1852,`span`,46),_w(1853,`await`),Tl(),_w(1854,` `),Wi$1(1855,`span`,46),_w(1856,`this`),Tl(),_w(1857,`.userManager.RemovePasswordAsync(user);

                `),Wi$1(1858,`span`,46),_w(1859,`if`),Tl(),_w(1860,` (!identityResult2.Succeeded)
                {
                    `),Wi$1(1861,`span`,46),_w(1862,`var`),Tl(),_w(1863,` errors = `),Wi$1(1864,`span`,46),_w(1865,`new`),Tl(),_w(1866,` Dictionary<`),Wi$1(1867,`span`,63),_w(1868,`string`),Tl(),_w(1869,`, `),Wi$1(1870,`span`,63),_w(1871,`string`),Tl(),_w(1872,`[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),Wi$1(1873,`span`,46),_w(1874,`return`),Tl(),_w(1875,` Result<UserResponseEnvelope>.Failure(errors);
                }

                identityResult2 = `),Wi$1(1876,`span`,46),_w(1877,`await`),Tl(),_w(1878,` `),Wi$1(1879,`span`,46),_w(1880,`this`),Tl(),_w(1881,`.userManager.AddPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                `),Wi$1(1882,`span`,46),_w(1883,`if`),Tl(),_w(1884,` (!identityResult2.Succeeded)
                {
                    `),Wi$1(1885,`span`,46),_w(1886,`var`),Tl(),_w(1887,` errors = `),Wi$1(1888,`span`,46),_w(1889,`new`),Tl(),_w(1890,` Dictionary<`),Wi$1(1891,`span`,63),_w(1892,`string`),Tl(),_w(1893,`, `),Wi$1(1894,`span`,63),_w(1895,`string`),Tl(),_w(1896,`[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        `),Wi$1(1897,`span`,46),_w(1898,`switch`),Tl(),_w(1899,` (e.Code)
                        {
                            `),Wi$1(1900,`span`,46),_w(1901,`case`),Tl(),_w(1902,` `),Wi$1(1903,`span`,50),_w(1904,`"PasswordRequiresDigit"`),Tl(),_w(1905,`:
                                e.Description = PasswordFormatErrorMessage;
                                `),Wi$1(1906,`span`,46),_w(1907,`break`),Tl(),_w(1908,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });
                    errors.Add(`),Wi$1(1909,`span`,50),_w(1910,`"PasswordDeleted"`),Tl(),_w(1911,`, [PasswordDeletedErrorMessage]);
                    `),Wi$1(1912,`span`,46),_w(1913,`return`),Tl(),_w(1914,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }

            `),Wi$1(1915,`span`,46),_w(1916,`if`),Tl(),_w(1917,` (userRequest.UserJson.FullName != `),Wi$1(1918,`span`,64),_w(1919,`null`),Tl(),_w(1920,`)
            {
                `),Wi$1(1921,`span`,46),_w(1922,`var`),Tl(),_w(1923,` identityResult1 = `),Wi$1(1924,`span`,46),_w(1925,`await`),Tl(),_w(1926,` `),Wi$1(1927,`span`,46),_w(1928,`this`),Tl(),_w(1929,`.userManager.SetUserNameAsync(
                     user,
                     userRequest.UserJson.FullName);

                `),Wi$1(1930,`span`,46),_w(1931,`if`),Tl(),_w(1932,` (!identityResult1.Succeeded)
                {
                    `),Wi$1(1933,`span`,46),_w(1934,`var`),Tl(),_w(1935,` errors = `),Wi$1(1936,`span`,46),_w(1937,`new`),Tl(),_w(1938,` Dictionary<`),Wi$1(1939,`span`,63),_w(1940,`string`),Tl(),_w(1941,`, `),Wi$1(1942,`span`,63),_w(1943,`string`),Tl(),_w(1944,`[]>();
                    identityResult1.Errors.ForEach(e =>
                    {
                        `),Wi$1(1945,`span`,46),_w(1946,`switch`),Tl(),_w(1947,` (e.Code)
                        {
                            `),Wi$1(1948,`span`,46),_w(1949,`case`),Tl(),_w(1950,` `),Wi$1(1951,`span`,50),_w(1952,`"InvalidUserName"`),Tl(),_w(1953,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),Wi$1(1954,`span`,46),_w(1955,`break`),Tl(),_w(1956,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),Wi$1(1957,`span`,46),_w(1958,`return`),Tl(),_w(1959,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }

            `),Wi$1(1960,`span`,63),_w(1961,`string`),Tl(),_w(1962,`? token;
            `),Wi$1(1963,`span`,46),_w(1964,`if`),Tl(),_w(1965,` (`),Wi$1(1966,`span`,46),_w(1967,`this`),Tl(),_w(1968,`.env.EnvironmentName == `),Wi$1(1969,`span`,50),_w(1970,`"Test"`),Tl(),_w(1971,`)
            {
                token = `),Wi$1(1972,`span`,50),_w(1973,`$"Token: `),Wi$1(1974,`span`,66),_w(1975,`{user.Email}`),Tl(),_w(1976,`"`),Tl(),_w(1977,`;
            }
            `),Wi$1(1978,`span`,46),_w(1979,`else`),Tl(),_w(1980,`
            {
                token = isNewToken ? `),Wi$1(1981,`span`,46),_w(1982,`await`),Tl(),_w(1983,` `),Wi$1(1984,`span`,46),_w(1985,`this`),Tl(),_w(1986,`.jwtGenerator.GenerateToken(user) :
                `),Wi$1(1987,`span`,46),_w(1988,`this`),Tl(),_w(1989,`.httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()[`),Wi$1(1990,`span`,50),_w(1991,`"Bearer "`),Tl(),_w(1992,`.Length..].Trim();
            }

            `),Wi$1(1993,`span`,46),_w(1994,`return`),Tl(),_w(1995,` `),Wi$1(1996,`span`,46),_w(1997,`new`),Tl(),_w(1998,` UserResponseEnvelope
            {
                UserJson = `),Wi$1(1999,`span`,46),_w(2e3,`new`),Tl(),_w(2001,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        `),Wi$1(2002,`span`,48),_w(2003,`#`),Wi$1(2004,`span`,46),_w(2005,`endregion`),Tl()(),_w(2006,`

        `),Wi$1(2007,`span`,46),_w(2008,`public`),Tl(),_w(2009,` `),Wi$1(2010,`span`,46),_w(2011,`async`),Tl(),_w(2012,` Task<Result<ProfileResponseEnvelope>> Profile(`),Wi$1(2013,`span`,63),_w(2014,`string`),Tl(),_w(2015,` userName)
        {
            `),Wi$1(2016,`span`,46),_w(2017,`var`),Tl(),_w(2018,` user = `),Wi$1(2019,`span`,46),_w(2020,`await`),Tl(),_w(2021,` `),Wi$1(2022,`span`,46),_w(2023,`this`),Tl(),_w(2024,`.userManager.FindByNameAsync(userName);

            `),Wi$1(2025,`span`,46),_w(2026,`if`),Tl(),_w(2027,` (user == `),Wi$1(2028,`span`,64),_w(2029,`null`),Tl(),_w(2030,`)
            {
                `),Wi$1(2031,`span`,46),_w(2032,`return`),Tl(),_w(2033,` Result<ProfileResponseEnvelope>.Failure(`),Wi$1(2034,`span`,46),_w(2035,`new`),Tl(),_w(2036,` Dictionary<`),Wi$1(2037,`span`,63),_w(2038,`string`),Tl(),_w(2039,`, `),Wi$1(2040,`span`,63),_w(2041,`string`),Tl(),_w(2042,`[]>
                    {
                       { `),Wi$1(2043,`span`,50),_w(2044,`"profile_error"`),Tl(),_w(2045,`, `),Wi$1(2046,`span`,46),_w(2047,`new`),Tl(),_w(2048,`[] { ProfileErrorMessage } }
                    }
                );
            }

            `),Wi$1(2049,`span`,46),_w(2050,`return`),Tl(),_w(2051,` `),Wi$1(2052,`span`,46),_w(2053,`new`),Tl(),_w(2054,` ProfileResponseEnvelope
            {
                ProfileJson = `),Wi$1(2055,`span`,46),_w(2056,`new`),Tl(),_w(2057,` ProfileResponseModel(user.UserName, user.UserName, user.UserName)
            };

        }

        `),Wi$1(2058,`span`,46),_w(2059,`public`),Tl(),_w(2060,` `),Wi$1(2061,`span`,46),_w(2062,`async`),Tl(),_w(2063,` Task<Result<UserResponseEnvelope>> Register(UserRegisterRequestEnvelope userRequest)
        {
            `),Wi$1(2064,`span`,46),_w(2065,`var`),Tl(),_w(2066,` userByEmail = `),Wi$1(2067,`span`,46),_w(2068,`await`),Tl(),_w(2069,` `),Wi$1(2070,`span`,46),_w(2071,`this`),Tl(),_w(2072,`.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            `),Wi$1(2073,`span`,46),_w(2074,`if`),Tl(),_w(2075,` (userByEmail != `),Wi$1(2076,`span`,64),_w(2077,`null`),Tl(),_w(2078,`)
            {
                `),Wi$1(2079,`span`,46),_w(2080,`return`),Tl(),_w(2081,` Result<UserResponseEnvelope>.Failure(`),Wi$1(2082,`span`,46),_w(2083,`new`),Tl(),_w(2084,` Dictionary<`),Wi$1(2085,`span`,63),_w(2086,`string`),Tl(),_w(2087,`, `),Wi$1(2088,`span`,63),_w(2089,`string`),Tl(),_w(2090,`[]>
            {
                { `),Wi$1(2091,`span`,50),_w(2092,`"email_error"`),Tl(),_w(2093,`, `),Wi$1(2094,`span`,46),_w(2095,`new`),Tl(),_w(2096,`[] { EmailTakenErrorMessage } }
            });
            }

            `),Wi$1(2097,`span`,46),_w(2098,`var`),Tl(),_w(2099,` userByName = `),Wi$1(2100,`span`,46),_w(2101,`await`),Tl(),_w(2102,` `),Wi$1(2103,`span`,46),_w(2104,`this`),Tl(),_w(2105,`.userManager.FindByNameAsync(userRequest.UserJson.FullName);

            `),Wi$1(2106,`span`,46),_w(2107,`if`),Tl(),_w(2108,` (userByName != `),Wi$1(2109,`span`,64),_w(2110,`null`),Tl(),_w(2111,`)
            {
                `),Wi$1(2112,`span`,46),_w(2113,`return`),Tl(),_w(2114,` Result<UserResponseEnvelope>.Failure(`),Wi$1(2115,`span`,46),_w(2116,`new`),Tl(),_w(2117,` Dictionary<`),Wi$1(2118,`span`,63),_w(2119,`string`),Tl(),_w(2120,`, `),Wi$1(2121,`span`,63),_w(2122,`string`),Tl(),_w(2123,`[]>
            {
               { `),Wi$1(2124,`span`,50),_w(2125,`"name_error"`),Tl(),_w(2126,`, `),Wi$1(2127,`span`,46),_w(2128,`new`),Tl(),_w(2129,`[] { UserNameTakenErrorMessage } }
            });
            }

            `),Wi$1(2130,`span`,46),_w(2131,`if`),Tl(),_w(2132,` (`),Wi$1(2133,`span`,46),_w(2134,`this`),Tl(),_w(2135,`.env.EnvironmentName == `),Wi$1(2136,`span`,50),_w(2137,`"Test"`),Tl(),_w(2138,`)
            {
                `),Wi$1(2139,`span`,46),_w(2140,`var`),Tl(),_w(2141,` user = `),Wi$1(2142,`span`,46),_w(2143,`new`),Tl(),_w(2144,` User(userRequest.UserJson.Email, userRequest.UserJson.FullName);

                `),Wi$1(2145,`span`,46),_w(2146,`var`),Tl(),_w(2147,` identityResult = `),Wi$1(2148,`span`,46),_w(2149,`await`),Tl(),_w(2150,` `),Wi$1(2151,`span`,46),_w(2152,`this`),Tl(),_w(2153,`.userManager.CreateAsync(
                    user,
                    userRequest.UserJson.Password);

                `),Wi$1(2154,`span`,46),_w(2155,`if`),Tl(),_w(2156,` (!identityResult.Succeeded)
                {
                    `),Wi$1(2157,`span`,46),_w(2158,`var`),Tl(),_w(2159,` errors = `),Wi$1(2160,`span`,46),_w(2161,`new`),Tl(),_w(2162,` Dictionary<`),Wi$1(2163,`span`,63),_w(2164,`string`),Tl(),_w(2165,`, `),Wi$1(2166,`span`,63),_w(2167,`string`),Tl(),_w(2168,`[]>();
                    identityResult.Errors.ForEach(e =>
                    {
                        `),Wi$1(2169,`span`,46),_w(2170,`switch`),Tl(),_w(2171,` (e.Code)
                        {
                            `),Wi$1(2172,`span`,46),_w(2173,`case`),Tl(),_w(2174,` `),Wi$1(2175,`span`,50),_w(2176,`"InvalidUserName"`),Tl(),_w(2177,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),Wi$1(2178,`span`,46),_w(2179,`break`),Tl(),_w(2180,`;
                            `),Wi$1(2181,`span`,46),_w(2182,`case`),Tl(),_w(2183,` `),Wi$1(2184,`span`,50),_w(2185,`"PasswordRequiresDigit"`),Tl(),_w(2186,`:
                                e.Description = PasswordFormatErrorMessage;
                                `),Wi$1(2187,`span`,46),_w(2188,`break`),Tl(),_w(2189,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),Wi$1(2190,`span`,46),_w(2191,`return`),Tl(),_w(2192,` Result<UserResponseEnvelope>.Failure(errors);
                }

                `),Wi$1(2193,`span`,46),_w(2194,`var`),Tl(),_w(2195,` token = `),Wi$1(2196,`span`,50),_w(2197,`$"Token: `),Wi$1(2198,`span`,66),_w(2199,`{user.Email}`),Tl(),_w(2200,`"`),Tl(),_w(2201,`;

                `),Wi$1(2202,`span`,46),_w(2203,`await`),Tl(),_w(2204,` `),Wi$1(2205,`span`,46),_w(2206,`this`),Tl(),_w(2207,`.eventDispatcher.Dispatch(`),Wi$1(2208,`span`,46),_w(2209,`new`),Tl(),_w(2210,` UserRegisteredEvent(
                    user.Id,
                    userRequest.UserJson.FullName));

                `),Wi$1(2211,`span`,46),_w(2212,`return`),Tl(),_w(2213,` `),Wi$1(2214,`span`,46),_w(2215,`new`),Tl(),_w(2216,` UserResponseEnvelope
                {
                    UserJson = `),Wi$1(2217,`span`,46),_w(2218,`new`),Tl(),_w(2219,`()
                    {
                        Email = user.Email!,
                        UserName = user.UserName!,
                        Token = token,
                    }
                };
            }
            `),Wi$1(2220,`span`,46),_w(2221,`else`),Tl(),_w(2222,`
            {
                `),Wi$1(2223,`span`,46),_w(2224,`return`),Tl(),_w(2225,` Result<UserResponseEnvelope>.Failure(`),Wi$1(2226,`span`,46),_w(2227,`new`),Tl(),_w(2228,` Dictionary<`),Wi$1(2229,`span`,63),_w(2230,`string`),Tl(),_w(2231,`, `),Wi$1(2232,`span`,63),_w(2233,`string`),Tl(),_w(2234,`[]>
            {
                 { `),Wi$1(2235,`span`,50),_w(2236,`"not_implemented_error"`),Tl(),_w(2237,`, registerNotImplemented }
            });
            }
        }

        `),Wi$1(2238,`span`,46),_w(2239,`public`),Tl(),_w(2240,` `),Wi$1(2241,`span`,46),_w(2242,`async`),Tl(),_w(2243,` Task<Result<UserResponseEnvelope>> Login(UserLoginRequestEnvelope userRequest)
        {
            `),Wi$1(2244,`span`,46),_w(2245,`var`),Tl(),_w(2246,` user = `),Wi$1(2247,`span`,46),_w(2248,`await`),Tl(),_w(2249,` `),Wi$1(2250,`span`,46),_w(2251,`this`),Tl(),_w(2252,`.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            `),Wi$1(2253,`span`,46),_w(2254,`if`),Tl(),_w(2255,` (user == `),Wi$1(2256,`span`,64),_w(2257,`null`),Tl(),_w(2258,`)
            {
                `),Wi$1(2259,`span`,46),_w(2260,`return`),Tl(),_w(2261,` Result<UserResponseEnvelope>.Failure(`),Wi$1(2262,`span`,46),_w(2263,`new`),Tl(),_w(2264,` Dictionary<`),Wi$1(2265,`span`,63),_w(2266,`string`),Tl(),_w(2267,`, `),Wi$1(2268,`span`,63),_w(2269,`string`),Tl(),_w(2270,`[]>
            {
                { `),Wi$1(2271,`span`,50),_w(2272,`"invalid_error"`),Tl(),_w(2273,`, `),Wi$1(2274,`span`,46),_w(2275,`new`),Tl(),_w(2276,`[] { InvalidErrorMessage } }
            });
            }

            `),Wi$1(2277,`span`,46),_w(2278,`var`),Tl(),_w(2279,` isLockoutEnabled = `),Wi$1(2280,`span`,46),_w(2281,`await`),Tl(),_w(2282,` userManager.GetLockoutEnabledAsync(user);

            `),Wi$1(2283,`span`,46),_w(2284,`if`),Tl(),_w(2285,` (isLockoutEnabled)
            {
                `),Wi$1(2286,`span`,46),_w(2287,`var`),Tl(),_w(2288,` count = `),Wi$1(2289,`span`,46),_w(2290,`await`),Tl(),_w(2291,` userManager.GetAccessFailedCountAsync(user);
                `),Wi$1(2292,`span`,46),_w(2293,`if`),Tl(),_w(2294,` (count == applicationSettings.MaxFailedAccessAttempts - `),Wi$1(2295,`span`,65),_w(2296,`1`),Tl(),_w(2297,`)
                {
                    `),Wi$1(2298,`span`,46),_w(2299,`var`),Tl(),_w(2300,` endDate = `),Wi$1(2301,`span`,46),_w(2302,`await`),Tl(),_w(2303,` userManager.GetLockoutEndDateAsync(user);
                    `),Wi$1(2304,`span`,46),_w(2305,`var`),Tl(),_w(2306,` currentDate = DateTimeOffset.UtcNow;
                    `),Wi$1(2307,`span`,46),_w(2308,`if`),Tl(),_w(2309,` (endDate > currentDate)
                    {
                        `),Wi$1(2310,`span`,46),_w(2311,`return`),Tl(),_w(2312,` Result<UserResponseEnvelope>.Failure(`),Wi$1(2313,`span`,46),_w(2314,`new`),Tl(),_w(2315,` Dictionary<`),Wi$1(2316,`span`,63),_w(2317,`string`),Tl(),_w(2318,`, `),Wi$1(2319,`span`,63),_w(2320,`string`),Tl(),_w(2321,`[]>
                    {
                        { `),Wi$1(2322,`span`,50),_w(2323,`"lockout_error"`),Tl(),_w(2324,`, `),Wi$1(2325,`span`,46),_w(2326,`new`),Tl(),_w(2327,`[] {  `),Wi$1(2328,`span`,63),_w(2329,`string`),Tl(),_w(2330,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,`),Wi$1(2331,`span`,50),_w(2332,`""`),Tl(),_w(2333,`) } }
                    });
                    }
                }

                `),Wi$1(2334,`span`,46),_w(2335,`var`),Tl(),_w(2336,` passwordValid = `),Wi$1(2337,`span`,46),_w(2338,`await`),Tl(),_w(2339,` `),Wi$1(2340,`span`,46),_w(2341,`this`),Tl(),_w(2342,`.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                `),Wi$1(2343,`span`,46),_w(2344,`if`),Tl(),_w(2345,` (!passwordValid)
                {
                    `),Wi$1(2346,`span`,46),_w(2347,`var`),Tl(),_w(2348,` accessFailed = `),Wi$1(2349,`span`,46),_w(2350,`await`),Tl(),_w(2351,` `),Wi$1(2352,`span`,46),_w(2353,`this`),Tl(),_w(2354,`.userManager.AccessFailedAsync(user);
                    `),Wi$1(2355,`span`,46),_w(2356,`if`),Tl(),_w(2357,` (!accessFailed.Succeeded)
                    {
                        `),Wi$1(2358,`span`,46),_w(2359,`var`),Tl(),_w(2360,` errors = `),Wi$1(2361,`span`,46),_w(2362,`new`),Tl(),_w(2363,` Dictionary<`),Wi$1(2364,`span`,63),_w(2365,`string`),Tl(),_w(2366,`, `),Wi$1(2367,`span`,63),_w(2368,`string`),Tl(),_w(2369,`[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            `),Wi$1(2370,`span`,46),_w(2371,`switch`),Tl(),_w(2372,` (e.Code)
                            {
                                `),Wi$1(2373,`span`,46),_w(2374,`case`),Tl(),_w(2375,` `),Wi$1(2376,`span`,50),_w(2377,`"TODO: need to debug e.Code"`),Tl(),_w(2378,`:
                                    e.Description = `),Wi$1(2379,`span`,63),_w(2380,`string`),Tl(),_w(2381,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, `),Wi$1(2382,`span`,50),_w(2383,`""`),Tl(),_w(2384,`);
                                    `),Wi$1(2385,`span`,46),_w(2386,`break`),Tl(),_w(2387,`;
                            }

                            e.Description = `),Wi$1(2388,`span`,63),_w(2389,`string`),Tl(),_w(2390,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, [e.Description]);
                        });

                        `),Wi$1(2391,`span`,46),_w(2392,`return`),Tl(),_w(2393,` Result<UserResponseEnvelope>.Failure(errors);
                    }

                    `),Wi$1(2394,`span`,46),_w(2395,`return`),Tl(),_w(2396,` Result<UserResponseEnvelope>.Failure(`),Wi$1(2397,`span`,46),_w(2398,`new`),Tl(),_w(2399,` Dictionary<`),Wi$1(2400,`span`,63),_w(2401,`string`),Tl(),_w(2402,`, `),Wi$1(2403,`span`,63),_w(2404,`string`),Tl(),_w(2405,`[]>
                {
                    { `),Wi$1(2406,`span`,50),_w(2407,`"invalid_error"`),Tl(),_w(2408,`, `),Wi$1(2409,`span`,46),_w(2410,`new`),Tl(),_w(2411,`[] { InvalidErrorMessage } }
                });
                }
            }
            `),Wi$1(2412,`span`,46),_w(2413,`else`),Tl(),_w(2414,`
            {
                `),Wi$1(2415,`span`,46),_w(2416,`if`),Tl(),_w(2417,` (`),Wi$1(2418,`span`,46),_w(2419,`this`),Tl(),_w(2420,`.env.EnvironmentName == `),Wi$1(2421,`span`,50),_w(2422,`"Test"`),Tl(),_w(2423,`)
                {
                    `),Wi$1(2424,`span`,46),_w(2425,`var`),Tl(),_w(2426,` passwordValid = `),Wi$1(2427,`span`,46),_w(2428,`await`),Tl(),_w(2429,` `),Wi$1(2430,`span`,46),_w(2431,`this`),Tl(),_w(2432,`.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    `),Wi$1(2433,`span`,46),_w(2434,`if`),Tl(),_w(2435,` (!passwordValid)
                    {
                        `),Wi$1(2436,`span`,46),_w(2437,`return`),Tl(),_w(2438,` Result<UserResponseEnvelope>.Failure(`),Wi$1(2439,`span`,46),_w(2440,`new`),Tl(),_w(2441,` Dictionary<`),Wi$1(2442,`span`,63),_w(2443,`string`),Tl(),_w(2444,`, `),Wi$1(2445,`span`,63),_w(2446,`string`),Tl(),_w(2447,`[]>
                    {
                        { `),Wi$1(2448,`span`,50),_w(2449,`"invalid_error"`),Tl(),_w(2450,`, `),Wi$1(2451,`span`,46),_w(2452,`new`),Tl(),_w(2453,`[] { InvalidErrorMessage } }
                    });
                    }
                }
                `),Wi$1(2454,`span`,46),_w(2455,`else`),Tl(),_w(2456,`
                {
                    `),Wi$1(2457,`span`,46),_w(2458,`return`),Tl(),_w(2459,` Result<UserResponseEnvelope>.Failure(`),Wi$1(2460,`span`,46),_w(2461,`new`),Tl(),_w(2462,` Dictionary<`),Wi$1(2463,`span`,63),_w(2464,`string`),Tl(),_w(2465,`, `),Wi$1(2466,`span`,63),_w(2467,`string`),Tl(),_w(2468,`[]>
                {
                    { `),Wi$1(2469,`span`,50),_w(2470,`"lockout_enabled_error"`),Tl(),_w(2471,`, `),Wi$1(2472,`span`,46),_w(2473,`new`),Tl(),_w(2474,`[] { LockoutEnabledErrorMessage } }
                });
                }
            }

            `),Wi$1(2475,`span`,63),_w(2476,`string`),Tl(),_w(2477,`? token;
            `),Wi$1(2478,`span`,46),_w(2479,`if`),Tl(),_w(2480,` (`),Wi$1(2481,`span`,46),_w(2482,`this`),Tl(),_w(2483,`.env.EnvironmentName == `),Wi$1(2484,`span`,50),_w(2485,`"Test"`),Tl(),_w(2486,`)
            {
                token = `),Wi$1(2487,`span`,50),_w(2488,`$"Token: `),Wi$1(2489,`span`,66),_w(2490,`{user.Email}`),Tl(),_w(2491,`"`),Tl(),_w(2492,`;
            }
            `),Wi$1(2493,`span`,46),_w(2494,`else`),Tl(),_w(2495,`
            {
                token = `),Wi$1(2496,`span`,46),_w(2497,`await`),Tl(),_w(2498,` `),Wi$1(2499,`span`,46),_w(2500,`this`),Tl(),_w(2501,`.jwtGenerator.GenerateToken(user);
            }
            `),Wi$1(2502,`span`,46),_w(2503,`return`),Tl(),_w(2504,` `),Wi$1(2505,`span`,46),_w(2506,`new`),Tl(),_w(2507,` UserResponseEnvelope
            {
                UserJson = `),Wi$1(2508,`span`,46),_w(2509,`new`),Tl(),_w(2510,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
    }
}`),Tl()(),Wi$1(2511,`p`),_w(2512,`To really appreciate the beauty of MyTested, It must be compared to `),Wi$1(2513,`a`,67),_w(2514,`an alternative`),Tl(),_w(2515,` method of testing. With MyTested library, it is very easy to test against endpoint locations, input data in JSON format and output data.
When it comes to JWT authorization, a big amount of testing consists in testing for invalid JWT tokens:`),Tl(),Wi$1(2516,`ul`)(2517,`li`)(2518,`code`),_w(2519,`Update_user_without_authorization_header_should_fail`),Tl(),_w(2520,`- tests when JWT token is absent`),Tl(),Wi$1(2521,`li`)(2522,`code`),_w(2523,`Update_user_with_altered_authorization_header_should_fail`),Tl(),_w(2524,`- tests when to a valid JWT token is added one character`),Tl(),Wi$1(2525,`li`)(2526,`code`),_w(2527,`Update_user_with_malformed_authorization_header_should_fail`),Tl(),_w(2528,`- tests when JWT token has format `),Wi$1(2529,`code`),_w(2530,`a.b`),Tl()(),Wi$1(2531,`li`)(2532,`code`),_w(2533,`Update_user_with_fake_authorization_header_should_fail`),Tl(),_w(2534,`- tests when JWT token has correct format `),Wi$1(2535,`code`),_w(2536,`a.b.c`),Tl(),_w(2537,` but random characters`),Tl(),Wi$1(2538,`li`)(2539,`code`),_w(2540,`Update_user_with_incorrect_authorization_header_key_should_fail`),Tl(),_w(2541,`- tests when JWT token is valid but was encrypted with a different key`),Tl(),Wi$1(2542,`li`)(2543,`code`),_w(2544,`Update_user_with_expired_authorization_header_should_fail`),Tl(),_w(2545,`- tests when a valid JWT token was expired`),Tl()(),Wi$1(2546,`p`),_w(2547,`These are the most common case scenarios to test against an invalid JWT token and must be done just for one controller!
MyTested cannot catch 401 error code directly. We found a workaround by using `),Wi$1(2548,`a`,68),_w(2549,`HeaderAuthorizationException`),Tl(),_w(2550,`
In real life, .NET Core 10 will return a 401-error code. We created a series of tests for testing invalid JWT tokens such as:`),Tl(),Wi$1(2551,`pre`,45)(2552,`code`),_w(2553,`        [`),Wi$1(2554,`span`,48),_w(2555,`Theory`),Tl(),_w(2556,`]
        [`),Wi$1(2557,`span`,48),_w(2558,`MemberData(nameof(RegisterValidData))`),Tl(),_w(2559,`]
        `),Wi$1(2560,`span`,49)(2561,`span`,46),_w(2562,`public`),Tl(),_w(2563,` `),Wi$1(2564,`span`,46),_w(2565,`void`),Tl(),_w(2566,` `),Wi$1(2567,`span`,47),_w(2568,`Update_user_without_authorization_header_should_fail`),Tl(),_w(2569,`(`),Wi$1(2570,`span`,62),_w(2571,`
         `),Wi$1(2572,`span`,63),_w(2573,`string`),Tl(),_w(2574,` fullName,
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
         `),Wi$1(2575,`span`,63),_w(2576,`string`),Tl(),_w(2577,` email,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
         `),Wi$1(2578,`span`,63),_w(2579,`string`),Tl(),_w(2580,` password`),Tl(),_w(2581,`)`),Tl(),_w(2582,`
        => AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
        () =>
        {
            MyMvc
             .Pipeline()
             .ShouldMap(request => request
                 .WithMethod(HttpMethod.Put)
                 `),Wi$1(2583,`span`,69),_w(2584,`// without WithHeaderAuthorization`),Tl(),_w(2585,`
                 .WithLocation(`),Wi$1(2586,`span`,50),_w(2587,`"api/v1.0/identity/update"`),Tl(),_w(2588,`)
                 .WithJsonBody(
                      `),Wi$1(2589,`span`,63),_w(2590,`string`),Tl(),_w(2591,`.Format(`),Wi$1(2592,`span`,50),_w(2593,`"{{"`),Tl(),Wi$1(2594,`span`,50),_w(2595,`"user"`),Tl(),Wi$1(2596,`span`,50),_w(2597,`":{{"`),Tl(),Wi$1(2598,`span`,50),_w(2599,`"password"`),Tl(),Wi$1(2600,`span`,50),_w(2601,`":"`),Tl(),Wi$1(2602,`span`,50),_w(2603,`"{0}"`),Tl(),Wi$1(2604,`span`,50),_w(2605,`","`),Tl(),Wi$1(2606,`span`,50),_w(2607,`"username"`),Tl(),Wi$1(2608,`span`,50),_w(2609,`":"`),Tl(),Wi$1(2610,`span`,50),_w(2611,`"{1}"`),Tl(),Wi$1(2612,`span`,50),_w(2613,`"}}}}"`),Tl(),_w(2614,`,
                          `),Wi$1(2615,`span`,50),_w(2616,`$"`),Wi$1(2617,`span`,66),_w(2618,`{password}`),Tl(),_w(2619,`1"`),Tl(),_w(2620,`,
                          `),Wi$1(2621,`span`,50),_w(2622,`$"`),Wi$1(2623,`span`,66),_w(2624,`{fullName}`),Tl(),_w(2625,`1"`),Tl(),_w(2626,`
                      )
                 )
             )
             .To<IdentityController>(c => c.Update(`),Wi$1(2627,`span`,46),_w(2628,`new`),Tl(),_w(2629,` UserUpdateCommand
             {
                 UserJson = `),Wi$1(2630,`span`,46),_w(2631,`new`),Tl(),_w(2632,`()
                 {
                     FullName = `),Wi$1(2633,`span`,50),_w(2634,`$"`),Wi$1(2635,`span`,66),_w(2636,`{fullName}`),Tl(),_w(2637,`1"`),Tl(),_w(2638,`,
                     Password = `),Wi$1(2639,`span`,50),_w(2640,`$"`),Wi$1(2641,`span`,66),_w(2642,`{password}`),Tl(),_w(2643,`1"`),Tl(),_w(2644,`
                 }
             }));
        }, `),Wi$1(2645,`span`,63),_w(2646,`string`),Tl(),_w(2647,`.Format(HeaderAuthorizationException.Replace(Environment.NewLine, `),Wi$1(2648,`span`,50),_w(2649,`""`),Tl(),_w(2650,`), `),Wi$1(2651,`span`,50),_w(2652,`"/api/v1.0/identity/update"`),Tl(),_w(2653,`, `),Wi$1(2654,`span`,50),_w(2655,`"Update"`),Tl(),_w(2656,`, `),Wi$1(2657,`span`,50),_w(2658,`"IdentityController"`),Tl(),_w(2659,`));`),Tl()(),Wi$1(2660,`p`),_w(2661,`The full set of tests of `),Wi$1(2662,`code`),_w(2663,`IdentityController`),Tl(),_w(2664,` is on `),Wi$1(2665,`a`,68),_w(2666,`our GitHub repository`),Tl(),_w(2667,`.`),Tl(),Wi$1(2668,`h2`,70)(2669,`span`),_w(2670,`Data Validation with FluentValidation Library`),Tl(),Wi$1(2671,`a`,71),_w(2672,`#`),Tl()(),Wi$1(2673,`p`),_w(2674,`Another change we made to MyTested is adding the possibility of testing data validation. For now, we will give an example of testing using `),Wi$1(2675,`code`),_w(2676,`FluentValidation`),Tl(),_w(2677,` from `),Wi$1(2678,`a`,72),_w(2679,`Conduit`),Tl(),_w(2680,` and `),Wi$1(2681,`a`,73),_w(2682,`BookStore`),Tl(),_w(2683,`. Following is an example of testing data validation using modified version of MyTested library:`),Tl(),Wi$1(2684,`pre`,45)(2685,`code`),_w(2686,`[`),Wi$1(2687,`span`,48),_w(2688,`Theory`),Tl(),_w(2689,`]
[`),Wi$1(2690,`span`,48),_w(2691,`InlineData(`),Wi$1(2692,`span`,50),_w(2693,`"n"`),Tl(),_w(2694,`, `),Wi$1(2695,`span`,50),_w(2696,`"ValidEmail@a.bcde"`),Tl(),_w(2697,`, `),Wi$1(2698,`span`,50),_w(2699,`"p"`),Tl(),_w(2700,`)`),Tl(),_w(2701,`]
`),Wi$1(2702,`span`,49)(2703,`span`,46),_w(2704,`public`),Tl(),_w(2705,` `),Wi$1(2706,`span`,46),_w(2707,`void`),Tl(),_w(2708,` `),Wi$1(2709,`span`,47),_w(2710,`Update_user_with_bad_input_should_return_validation_errors`),Tl(),_w(2711,`(`),Wi$1(2712,`span`,62),_w(2713,`
 `),Wi$1(2714,`span`,63),_w(2715,`string`),Tl(),_w(2716,` fullName,
 `),Wi$1(2717,`span`,63),_w(2718,`string`),Tl(),_w(2719,` email,
 `),Wi$1(2720,`span`,63),_w(2721,`string`),Tl(),_w(2722,` password`),Tl(),_w(2723,`)`),Tl(),_w(2724,`
=> AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
() =>
{
    MyMvc
     .Pipeline()
     .ShouldMap(request => request
        .WithMethod(HttpMethod.Put)
        .WithHeaderAuthorization(StaticTestData.GetJwtBearerAdministratorRole(email, `),Wi$1(2725,`span`,65),_w(2726,`1`),Tl(),_w(2727,`))
        .WithLocation(`),Wi$1(2728,`span`,50),_w(2729,`"api/v1.0/identity/update"`),Tl(),_w(2730,`)
        .WithJsonBody(
             `),Wi$1(2731,`span`,63),_w(2732,`string`),Tl(),_w(2733,`.Format(`),Wi$1(2734,`span`,50),_w(2735,`"{{"`),Tl(),Wi$1(2736,`span`,50),_w(2737,`"user"`),Tl(),Wi$1(2738,`span`,50),_w(2739,`":{{"`),Tl(),Wi$1(2740,`span`,50),_w(2741,`"password"`),Tl(),Wi$1(2742,`span`,50),_w(2743,`":"`),Tl(),Wi$1(2744,`span`,50),_w(2745,`"{0}"`),Tl(),Wi$1(2746,`span`,50),_w(2747,`","`),Tl(),Wi$1(2748,`span`,50),_w(2749,`"username"`),Tl(),Wi$1(2750,`span`,50),_w(2751,`":"`),Tl(),Wi$1(2752,`span`,50),_w(2753,`"{1}"`),Tl(),Wi$1(2754,`span`,50),_w(2755,`"}}}}"`),Tl(),_w(2756,`,
                 `),Wi$1(2757,`span`,50),_w(2758,`$"`),Wi$1(2759,`span`,66),_w(2760,`{password}`),Tl(),_w(2761,`"`),Tl(),_w(2762,`,
                 `),Wi$1(2763,`span`,50),_w(2764,`$"`),Wi$1(2765,`span`,66),_w(2766,`{fullName}`),Tl(),_w(2767,`"`),Tl(),_w(2768,`
             )
        )
     )
     .To<IdentityController>(c => c.Update(`),Wi$1(2769,`span`,46),_w(2770,`new`),Tl(),_w(2771,` UserUpdateCommand
     {
         UserJson = `),Wi$1(2772,`span`,46),_w(2773,`new`),Tl(),_w(2774,`()
         {
             FullName = fullName,
             Password = password,
         }
     }))
     .Which(controller => controller
        .WithData(StaticTestData.GetUsers(`),Wi$1(2775,`span`,65),_w(2776,`3`),Tl(),_w(2777,`, email, fullName, password)))
     .ShouldReturn();
}, `),Wi$1(2778,`span`,46),_w(2779,`new`),Tl(),_w(2780,` Dictionary<`),Wi$1(2781,`span`,63),_w(2782,`string`),Tl(),_w(2783,`, `),Wi$1(2784,`span`,63),_w(2785,`string`),Tl(),_w(2786,`[]>
{
   { `),Wi$1(2787,`span`,50),_w(2788,`"UserJson.Password"`),Tl(),_w(2789,`, [`),Wi$1(2790,`span`,50),_w(2791,`"The length of 'User Json Password' must be at least 16 characters. You entered 1 characters."`),Tl(),_w(2792,`] },
   { `),Wi$1(2793,`span`,50),_w(2794,`"UserJson.FullName"`),Tl(),_w(2795,`, [`),Wi$1(2796,`span`,50),_w(2797,`"The length of 'User Json Full Name' must be at least 2 characters. You entered 1 characters."`),Tl(),_w(2798,`] },
});`),Tl()(),Wi$1(2799,`p`),_w(2800,`As you can see, now we can test data validation against the validation errors coming from FluentValidation library. Following are `),Wi$1(2801,`a`,74),_w(2802,`three tests`),Tl(),_w(2803,` witch test against the constraint that the tag name is unique:`),Tl(),Wi$1(2804,`ul`)(2805,`li`)(2806,`code`),_w(2807,`Create_tag_with_same_name_should_fail_with_validation_error`),Tl(),_w(2808,`- Creates tag with name when the name has already taken.`),Tl(),Wi$1(2809,`li`)(2810,`code`),_w(2811,`Edit_tag_with_same_name_should_fail_with_validation_error`),Tl(),_w(2812,`- Updates tag name when the name has already taken.`),Tl(),Wi$1(2813,`li`)(2814,`code`),_w(2815,`Edit_same_tag_with_same_name_should_return_success_with_data`),Tl(),_w(2816,`- Updates tag name when the name did not change.`),Tl()(),Wi$1(2817,`p`),_w(2818,`Sometimes, we need to validate against standard .Net services. For example, in the `),Wi$1(2819,`code`),_w(2820,`IdentityService`),Tl(),_w(2821,` from above we have:`),Tl(),Wi$1(2822,`pre`,45)(2823,`code`),_w(2824,`\u2026
`),Wi$1(2825,`span`,46),_w(2826,`if`),Tl(),_w(2827,` (userRequest.UserJson.FullName != `),Wi$1(2828,`span`,64),_w(2829,`null`),Tl(),_w(2830,`)
{
    `),Wi$1(2831,`span`,46),_w(2832,`var`),Tl(),_w(2833,` identityResult1 = `),Wi$1(2834,`span`,46),_w(2835,`await`),Tl(),_w(2836,` `),Wi$1(2837,`span`,46),_w(2838,`this`),Tl(),_w(2839,`.userManager.SetUserNameAsync(
         user,
         userRequest.UserJson.FullName);

    `),Wi$1(2840,`span`,46),_w(2841,`if`),Tl(),_w(2842,` (!identityResult1.Succeeded)
    {
        `),Wi$1(2843,`span`,46),_w(2844,`var`),Tl(),_w(2845,` errors = `),Wi$1(2846,`span`,46),_w(2847,`new`),Tl(),_w(2848,` Dictionary<`),Wi$1(2849,`span`,63),_w(2850,`string`),Tl(),_w(2851,`, `),Wi$1(2852,`span`,63),_w(2853,`string`),Tl(),_w(2854,`[]>();
        identityResult1.Errors.ForEach(e =>
        {
            `),Wi$1(2855,`span`,46),_w(2856,`switch`),Tl(),_w(2857,` (e.Code)
            {
                `),Wi$1(2858,`span`,46),_w(2859,`case`),Tl(),_w(2860,` `),Wi$1(2861,`span`,50),_w(2862,`"InvalidUserName"`),Tl(),_w(2863,`:
                    e.Description = UsernameFormatErrorMessage;
                    `),Wi$1(2864,`span`,46),_w(2865,`break`),Tl(),_w(2866,`;
            }
            errors.Add(e.Code, `),Wi$1(2867,`span`,46),_w(2868,`new`),Tl(),_w(2869,`[] { e.Description });
        });

        `),Wi$1(2870,`span`,46),_w(2871,`return`),Tl(),_w(2872,` Result<UserResponseEnvelope>.Failure(errors);
    }
}
\u2026`),Tl()(),Wi$1(2873,`p`)(2874,`a`,75),_w(2875,`Here`),Tl(),_w(2876,` is the test:`),Tl(),Wi$1(2877,`ul`)(2878,`li`)(2879,`code`),_w(2880,`Update_user_with_incorrect_user_name_should_fail`),Tl(),_w(2881,`- Tests against the username implemented in `),Wi$1(2882,`code`),_w(2883,`UserManager<User>`),Tl(),_w(2884,`.`),Tl()(),Wi$1(2885,`h2`,76)(2886,`span`),_w(2887,`Conclusion`),Tl(),Wi$1(2888,`a`,77),_w(2889,`#`),Tl()(),Wi$1(2890,`p`),_w(2891,`In this article, we gave a common example of a .NET Core `),Wi$1(2892,`code`),_w(2893,`Identity`),Tl(),_w(2894,` controller, implemented a common `),Wi$1(2895,`code`),_w(2896,`User Identity`),Tl(),_w(2897,` service based on `),Wi$1(2898,`code`),_w(2899,`UserManager<User>`),Tl(),_w(2900,`, and showed a comprehensive `),Wi$1(2901,`code`),_w(2902,`Identity`),Tl(),_w(2903,` controller testing using MyTested library. From multiple examples, we can see how easy is to test against endpoint locations, input data as JSON strings, and output data. In addition, we showed a lot of examples for data validation against the validation errors coming from `),Wi$1(2904,`code`),_w(2905,`FluentValidation`),Tl(),_w(2906,` library.
It is important to note, that having a detailed testing of API controllers based on MyTested library, gives us the possibility to debug .NET Core applications in Visual Studio 2022. For example, we can set a breakpoint in our application, go to test panel, find a MyTested test, and click Debug instead on Run.
The Markdown version of this article and the compiled code of our .NET Core 10 application can be found on `),Wi$1(2907,`a`,37),_w(2908,`our GitHub repository`),Tl(),_w(2909,`.`),Tl(),Wi$1(2910,`h2`,78)(2911,`span`),_w(2912,`Credits`),Tl(),Wi$1(2913,`a`,79),_w(2914,`#`),Tl()(),Wi$1(2915,`ul`)(2916,`li`)(2917,`a`,80),_w(2918,`Ivaylo Kenov`),Tl()(),Wi$1(2919,`li`)(2920,`a`,81),_w(2921,`Kalin Tsenkov`),Tl()(),Wi$1(2922,`li`)(2923,`a`,82),_w(2924,`Steve Smith`),Tl()(),Wi$1(2925,`li`)(2926,`a`,83),_w(2927,`Jason Taylor`),Tl()(),Wi$1(2928,`li`)(2929,`a`,84),_w(2930,`Stefan Prodan`),Tl()(),Wi$1(2931,`li`)(2932,`a`,85),_w(2933,`Mark Cilia Vincenti`),Tl()(),Wi$1(2934,`li`)(2935,`a`,86),_w(2936,`Jimmy Bogard`),Tl()(),Wi$1(2937,`li`)(2938,`a`,87),_w(2939,`Ben Morris`),Tl()()()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,Vw(11,gi)),cD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()),vE(41),eg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,bg,sd,cr,ir,Fa,p9,d9,Vn,Wn$1,qi$1,_n,ji$1,Jo,Za,Dl,ga$1,ma$1,So,Ve$1,pe,_u],encapsulation:2})}return a})();var Ai=()=>({standalone:!0});function fi(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,67),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,68),tg(3,`nz-icon`,69),Tl()(),Sl()}}function wi(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,67),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,68),_w(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var ot=110;var Jn=(()=>{class a{destroyRef=_(ae);router=_(Te$1);#e=_(Z0);injector=_(se);viewPort=_(d7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){oV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-ot>640?this.width.set(640):this.width.set(this.windowWidth()-ot-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-ot>640?this.width.set(640):this.width.set(i-ot-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(rV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`nz-blog-about-this-blog`]],features:[jw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:480,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-375bae56`,`nzTitle`,`Generate Posts from Markdown Files`],[`nzHref`,`#h-9ee0998d`,`nzTitle`,`Generate Static Syntax Highlighting`],[`nzHref`,`#h-ae84e8a9`,`nzTitle`,`Deploy to a Cloud Platform`],[`nzHref`,`#h-0ac07f26`,`nzTitle`,`Simulate Static Content`],[`nzHref`,`#h-3d814a59`,`nzTitle`,`Markdown Extension`],[`nzHref`,`#h-d748b3e2`,`nzTitle`,`Blog Listing`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241008-about-this-blog.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[1,`pic-plus`],[`nz-icon`,``,`nzType`,`custom:zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-icon`,``,`nzType`,`custom:angular`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-icon`,``,`nzType`,`custom:ng-zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`id`,`h-375bae56`],[`onclick`,`window.location.hash = 'h-375bae56'`,1,`anchor`],[`href`,`https://github.com/cioina/alexei-cioina.b9ad.pro-us-east-1.openshiftapps.com/tree/main/posts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-9ee0998d`],[`onclick`,`window.location.hash = 'h-9ee0998d'`,1,`anchor`],[1,`language-javascript`],[1,`hljs-keyword`],[1,`hljs-built_in`],[1,`hljs-string`],[1,`hljs-title`,`function_`],[1,`hljs-params`],[1,`hljs-function`],[1,`hljs-literal`],[1,`hljs-title`,`class_`],[1,`hljs-regexp`],[1,`hljs-variable`,`language_`],[1,`hljs-property`],[`id`,`h-ae84e8a9`],[`onclick`,`window.location.hash = 'h-ae84e8a9'`,1,`anchor`],[`href`,`https://www.openshift.com/products/online/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://docs.openshift.com/container-platform/3.11/architecture/core_concepts/builds_and_image_streams.html#source-build`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://docs.openshift.com/container-platform/3.11/dev_guide/deployments/deployment_strategies.html#recreate-strategy`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-0ac07f26`],[`onclick`,`window.location.hash = 'h-0ac07f26'`,1,`anchor`],[`href`,`https://github.com/dwightwatson/dwightwatson.com`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/dwightwatson/neontsunami-laravel`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/dwightwatson/neontsunami-laravel/blob/master/resources/views/posts/show.blade.php`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/neontsunami`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://laravel.com/docs/8.x/octane`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-3d814a59`],[`onclick`,`window.location.hash = 'h-3d814a59'`,1,`anchor`],[1,`language-html`],[1,`hljs-tag`],[1,`hljs-name`],[1,`hljs-attr`],[`href`,`https://mdxjs.com/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-d748b3e2`],[`onclick`,`window.location.hash = 'h-d748b3e2'`,1,`anchor`],[`href`,`https://github.com/AndyT2503/angular-conduit-signals`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/alexeymezenin/laravel-realworld-example-app`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(Wi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,fi,4,0,`ng-container`,5)(6,wi,4,0,`ng-container`,5),Tl()()(),Wi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),_w(11,`Jump to top`),Tl()(),Wi$1(12,`div`,3)(13,`nz-switch`,9),sD(),Ag(`ngModelChange`,function(g){return xw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),Wi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16),Tl()(),Wi$1(21,`span`,17),_w(22,` About This Blog`),tg(23,`span`,18)(24,`span`,19),Wi$1(25,`a`,20),tg(26,`nz-icon`,21),Tl()(),Wi$1(27,`article`,22)(28,`div`,23),tg(29,`span`,24),Wi$1(30,`span`),_w(31,`+`),Tl(),tg(32,`span`,25),Wi$1(33,`span`),_w(34,`=`),Tl(),tg(35,`span`,26),Tl(),Wi$1(36,`p`),_w(37,`Here we've built a blog that is able to:`),Tl(),Wi$1(38,`ul`)(39,`li`),_w(40,`Generate posts from markdown files`),Tl(),Wi$1(41,`li`),_w(42,`Generate static syntax highlighting`),Tl(),Wi$1(43,`li`),_w(44,`Deploy to a cloud platform`),Tl(),Wi$1(45,`li`),_w(46,`Simulate static content`),Tl()(),Wi$1(47,`h2`,27)(48,`span`),_w(49,`Generate Posts from Markdown Files`),Tl(),Wi$1(50,`a`,28),_w(51,`#`),Tl()(),Wi$1(52,`p`),_w(53,`We use a `),Wi$1(54,`code`),_w(55,`ng-zorro-antd`),Tl(),_w(56,` Node.js script to generate compiled Angular modules from `),Wi$1(57,`a`,29),_w(58,`a set of markdown files`),Tl(),_w(59,`.
Each post represents a compiled JavaScrip file that loads via lazy-loading. The content of a markdown file is included into compiled Angular module witch is smaller than a generated static HTML.`),Tl(),Wi$1(60,`h2`,30)(61,`span`),_w(62,`Generate Static Syntax Highlighting`),Tl(),Wi$1(63,`a`,31),_w(64,`#`),Tl()(),Wi$1(65,`p`),_w(66,`To generate static syntax highlighting (which is static HTML,) we use `),Wi$1(67,`code`),_w(68,`prismjs`),Tl(),_w(69,` on Node.js. This way, we do not need to include `),Wi$1(70,`code`),_w(71,`prismjs`),Tl(),_w(72,` JavaScript in our web application.`),Tl(),Wi$1(73,`pre`,32)(74,`code`)(75,`span`,33),_w(76,`const`),Tl(),_w(77,` fs = `),Wi$1(78,`span`,34),_w(79,`require`),Tl(),_w(80,`(`),Wi$1(81,`span`,35),_w(82,`'fs'`),Tl(),_w(83,`);
`),Wi$1(84,`span`,33),_w(85,`const`),Tl(),_w(86,` path = `),Wi$1(87,`span`,34),_w(88,`require`),Tl(),_w(89,`(`),Wi$1(90,`span`,35),_w(91,`'path'`),Tl(),_w(92,`);

`),Wi$1(93,`span`,33),_w(94,`function`),Tl(),_w(95,` `),Wi$1(96,`span`,36),_w(97,`uniq`),Tl(),_w(98,`(`),Wi$1(99,`span`,37),_w(100,`arr`),Tl(),_w(101,`) {
  `),Wi$1(102,`span`,33),_w(103,`const`),Tl(),_w(104,` set = arr.`),Wi$1(105,`span`,36),_w(106,`reduce`),Tl(),_w(107,`(`),Wi$1(108,`span`,38),_w(109,`(`),Wi$1(110,`span`,37),_w(111,`set, item`),Tl(),_w(112,`) =>`),Tl(),_w(113,` {
    set[item] = `),Wi$1(114,`span`,39),_w(115,`true`),Tl(),_w(116,`;
    `),Wi$1(117,`span`,33),_w(118,`return`),Tl(),_w(119,` set;
  }, {});
  `),Wi$1(120,`span`,33),_w(121,`return`),Tl(),_w(122,` `),Wi$1(123,`span`,40),_w(124,`Object`),Tl(),_w(125,`.`),Wi$1(126,`span`,36),_w(127,`keys`),Tl(),_w(128,`(set);
}

`),Wi$1(129,`span`,33),_w(130,`const`),Tl(),_w(131,` prismCore = `),Wi$1(132,`span`,35),_w(133,`'../../node-prismjs/components/prism-core.js'`),Tl(),_w(134,`;
`),Wi$1(135,`span`,33),_w(136,`const`),Tl(),_w(137,` `),Wi$1(138,`span`,40),_w(139,`Prism`),Tl(),_w(140,` = `),Wi$1(141,`span`,34),_w(142,`require`),Tl(),_w(143,`(prismCore);

`),Wi$1(144,`span`,33),_w(145,`const`),Tl(),_w(146,` prelude = [
  `),Wi$1(147,`span`,35),_w(148,`'prism-markup'`),Tl(),_w(149,`,
  `),Wi$1(150,`span`,35),_w(151,`'prism-css'`),Tl(),_w(152,`,
  `),Wi$1(153,`span`,35),_w(154,`'prism-clike'`),Tl(),_w(155,`,
  `),Wi$1(156,`span`,35),_w(157,`'prism-javascript'`),Tl(),_w(158,`,
  `),Wi$1(159,`span`,35),_w(160,`'prism-css-extras'`),Tl(),_w(161,`,
  `),Wi$1(162,`span`,35),_w(163,`'prism-json'`),Tl(),_w(164,`,
  `),Wi$1(165,`span`,35),_w(166,`'prism-markup-templating'`),Tl(),_w(167,`,
  `),Wi$1(168,`span`,35),_w(169,`'prism-php'`),Tl(),_w(170,`,
  `),Wi$1(171,`span`,35),_w(172,`'prism-php-extras'`),Tl(),_w(173,`,
  `),Wi$1(174,`span`,35),_w(175,`'prism-typescript'`),Tl(),_w(176,`,
];

`),Wi$1(177,`span`,33),_w(178,`const`),Tl(),_w(179,` prismComponents = path.`),Wi$1(180,`span`,36),_w(181,`dirname`),Tl(),_w(182,`(`),Wi$1(183,`span`,34),_w(184,`require`),Tl(),_w(185,`.`),Wi$1(186,`span`,36),_w(187,`resolve`),Tl(),_w(188,`(prismCore));
`),Wi$1(189,`span`,33),_w(190,`const`),Tl(),_w(191,` components = prelude
  .`),Wi$1(192,`span`,36),_w(193,`concat`),Tl(),_w(194,`(fs.`),Wi$1(195,`span`,36),_w(196,`readdirSync`),Tl(),_w(197,`(prismComponents))
  .`),Wi$1(198,`span`,36),_w(199,`map`),Tl(),_w(200,`(`),Wi$1(201,`span`,38)(202,`span`,37),_w(203,`component`),Tl(),_w(204,` =>`),Tl(),_w(205,` component.`),Wi$1(206,`span`,36),_w(207,`replace`),Tl(),_w(208,`(`),Wi$1(209,`span`,41),_w(210,`/(\\.min)?\\.js$/`),Tl(),_w(211,`, `),Wi$1(212,`span`,35),_w(213,`''`),Tl(),_w(214,`));

`),Wi$1(215,`span`,33),_w(216,`const`),Tl(),_w(217,` componentsSet = `),Wi$1(218,`span`,36),_w(219,`uniq`),Tl(),_w(220,`(components);
componentsSet.`),Wi$1(221,`span`,36),_w(222,`forEach`),Tl(),_w(223,`(`),Wi$1(224,`span`,38)(225,`span`,37),_w(226,`component`),Tl(),_w(227,` =>`),Tl(),_w(228,` {
  `),Wi$1(229,`span`,34),_w(230,`require`),Tl(),_w(231,`(path.`),Wi$1(232,`span`,36),_w(233,`join`),Tl(),_w(234,`(prismComponents, component));
});

`),Wi$1(235,`span`,42),_w(236,`module`),Tl(),_w(237,`.`),Wi$1(238,`span`,43),_w(239,`exports`),Tl(),_w(240,` = `),Wi$1(241,`span`,40),_w(242,`Prism`),Tl(),_w(243,`;`),Tl()(),Wi$1(244,`h2`,44)(245,`span`),_w(246,`Deploy to a Cloud Platform`),Tl(),Wi$1(247,`a`,45),_w(248,`#`),Tl()(),Wi$1(249,`p`),_w(250,`We use Red Hat `),Wi$1(251,`a`,46),_w(252,`OpenShift Online`),Tl(),_w(253,` public cloud
with `),Wi$1(254,`a`,47),_w(255,`Source-to-Image`),Tl(),_w(256,` (S2I) build
and `),Wi$1(257,`a`,48),_w(258,`Recreate Strategy`),Tl(),_w(259,` with less than 60 seconds downtime.`),Tl(),Wi$1(260,`h2`,49)(261,`span`),_w(262,`Simulate Static Content`),Tl(),Wi$1(263,`a`,50),_w(264,`#`),Tl()(),Wi$1(265,`p`),_w(266,`We've found `),Wi$1(267,`a`,51),_w(268,`a GitHub repository`),Tl(),_w(269,` that satisfies all 4 conditions. Well, in fact, it generates a static website, so condition 4 is not
just simulated. In contrast, `),Wi$1(270,`a`,52),_w(271,`this GitHub repository`),Tl(),_w(272,` uses Laravel's Blade template and a MySQL database to
`),Wi$1(273,`a`,53),_w(274,`generate posts`),Tl(),_w(275,` on the server-side. It means that every time you access a post,
your web browser makes a request to the server and the server will get the content from the database and render HTML (BTW, `),Wi$1(276,`a`,54),_w(277,`here`),Tl(),_w(278,` is a version adapted for OpenShift.) Even if Blade caches the result, every request creates a connection to the database (We do not consider `),Wi$1(279,`a`,55),_w(280,`Laravel Octane`),Tl(),_w(281,` here.) Static websites do not need a database and the content is cached on the user's side. So, the user makes less requests to the server.`),Tl(),Wi$1(282,`p`),_w(283,`How do we simulate static content? All posts from this blog are Angular compiled JavaScript files that are cached on the user's side.`),Tl(),Wi$1(284,`h2`,56)(285,`span`),_w(286,`Markdown Extension`),Tl(),Wi$1(287,`a`,57),_w(288,`#`),Tl()(),Wi$1(289,`p`),_w(290,`While transforming a markdown file into an Angular component and module, we implemented a markdown extension that will create a navigation menue from all heading lines of a markdown file. In addition, we implemented the posibility to include a code block with a special name `),Wi$1(291,`code`),_w(292,`angular-template-block`),Tl(),_w(293,` to be iterpreded as a part of the Angular template. The code block below, will be included in the generated Angular component as a parth of the template.`),Tl(),Wi$1(294,`pre`,58)(295,`code`)(296,`span`,59),_w(297,`<`),Wi$1(298,`span`,60),_w(299,`div`),Tl(),_w(300,` `),Wi$1(301,`span`,61),_w(302,`class`),Tl(),_w(303,`=`),Wi$1(304,`span`,35),_w(305,`"pic-plus"`),Tl(),_w(306,`>`),Tl(),_w(307,`
  `),Wi$1(308,`span`,59),_w(309,`<`),Wi$1(310,`span`,60),_w(311,`span`),Tl(),_w(312,` `),Wi$1(313,`span`,61),_w(314,`nz-icon`),Tl(),_w(315,` `),Wi$1(316,`span`,61),_w(317,`nzType`),Tl(),_w(318,`=`),Wi$1(319,`span`,35),_w(320,`"custom:zorro"`),Tl(),_w(321,` `),Wi$1(322,`span`,61),_w(323,`nzWidth`),Tl(),_w(324,`=`),Wi$1(325,`span`,35),_w(326,`"180px"`),Tl(),_w(327,` `),Wi$1(328,`span`,61),_w(329,`nzHeight`),Tl(),_w(330,`=`),Wi$1(331,`span`,35),_w(332,`"180px"`),Tl(),_w(333,`>`),Tl(),Wi$1(334,`span`,59),_w(335,`</`),Wi$1(336,`span`,60),_w(337,`span`),Tl(),_w(338,`>`),Tl(),_w(339,`
  `),Wi$1(340,`span`,59),_w(341,`<`),Wi$1(342,`span`,60),_w(343,`span`),Tl(),_w(344,`>`),Tl(),_w(345,`+`),Wi$1(346,`span`,59),_w(347,`</`),Wi$1(348,`span`,60),_w(349,`span`),Tl(),_w(350,`>`),Tl(),_w(351,`
  `),Wi$1(352,`span`,59),_w(353,`<`),Wi$1(354,`span`,60),_w(355,`span`),Tl(),_w(356,` `),Wi$1(357,`span`,61),_w(358,`nz-icon`),Tl(),_w(359,` `),Wi$1(360,`span`,61),_w(361,`nzType`),Tl(),_w(362,`=`),Wi$1(363,`span`,35),_w(364,`"custom:angular"`),Tl(),_w(365,` `),Wi$1(366,`span`,61),_w(367,`nzWidth`),Tl(),_w(368,`=`),Wi$1(369,`span`,35),_w(370,`"180px"`),Tl(),_w(371,` `),Wi$1(372,`span`,61),_w(373,`nzHeight`),Tl(),_w(374,`=`),Wi$1(375,`span`,35),_w(376,`"180px"`),Tl(),_w(377,`>`),Tl(),Wi$1(378,`span`,59),_w(379,`</`),Wi$1(380,`span`,60),_w(381,`span`),Tl(),_w(382,`>`),Tl(),_w(383,`
  `),Wi$1(384,`span`,59),_w(385,`<`),Wi$1(386,`span`,60),_w(387,`span`),Tl(),_w(388,`>`),Tl(),_w(389,`=`),Wi$1(390,`span`,59),_w(391,`</`),Wi$1(392,`span`,60),_w(393,`span`),Tl(),_w(394,`>`),Tl(),_w(395,`
  `),Wi$1(396,`span`,59),_w(397,`<`),Wi$1(398,`span`,60),_w(399,`span`),Tl(),_w(400,`
    `),Wi$1(401,`span`,61),_w(402,`nz-icon`),Tl(),_w(403,`
    `),Wi$1(404,`span`,61),_w(405,`nzType`),Tl(),_w(406,`=`),Wi$1(407,`span`,35),_w(408,`"custom:ng-zorro"`),Tl(),_w(409,`
    `),Wi$1(410,`span`,61),_w(411,`nzWidth`),Tl(),_w(412,`=`),Wi$1(413,`span`,35),_w(414,`"180px"`),Tl(),_w(415,`
    `),Wi$1(416,`span`,61),_w(417,`nzHeight`),Tl(),_w(418,`=`),Wi$1(419,`span`,35),_w(420,`"180px"`),Tl(),_w(421,`
  >`),Tl(),Wi$1(422,`span`,59),_w(423,`</`),Wi$1(424,`span`,60),_w(425,`span`),Tl(),_w(426,`>`),Tl(),_w(427,`
`),Wi$1(428,`span`,59),_w(429,`</`),Wi$1(430,`span`,60),_w(431,`div`),Tl(),_w(432,`>`),Tl()()(),Wi$1(433,`p`),_w(434,`For more complex markdown format extensions, please visit `),Wi$1(435,`a`,62),_w(436,`MDX 2!`),Tl()(),Wi$1(437,`h2`,63)(438,`span`),_w(439,`Blog Listing`),Tl(),Wi$1(440,`a`,64),_w(441,`#`),Tl()(),Wi$1(442,`p`),_w(443,`Client-side listing api is based on `),Wi$1(444,`a`,65),_w(445,`this GitHub repository`),Tl(),_w(446,` and server-side is similar to `),Wi$1(447,`a`,66),_w(448,`this GitHub repository`),Tl()(),Wi$1(449,`p`),_w(450,`As you can see, we use a lot of `),Wi$1(451,`code`),_w(452,`ng-zorro-antd`),Tl(),_w(453,` Angular components:`),Tl(),Wi$1(454,`ul`)(455,`li`)(456,`code`),_w(457,`nz-list`),Tl(),_w(458,`, `),Wi$1(459,`code`),_w(460,`nz-pagination`),Tl(),_w(461,`, `),Wi$1(462,`code`),_w(463,`nz-image`),Tl(),_w(464,`, `),Wi$1(465,`code`),_w(466,`nz-transfer`),Tl(),_w(467,`, `),Wi$1(468,`code`),_w(469,`nz-select`),Tl(),_w(470,`, `),Wi$1(471,`code`),_w(472,`nz-table`),Tl(),_w(473,`, and more`),Tl(),Wi$1(474,`li`)(475,`code`),_w(476,`NzDrawerService`),Tl(),_w(477,`, `),Wi$1(478,`code`),_w(479,`NzDrawerRef`),Tl()()()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,Vw(7,Ai)),cD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,bg,sd,cr,ir,Fa,p9,d9,Vn,qi$1,_n,ji$1,Jo,Za,Dl,ga$1,ma$1,So,Ve$1,pe,_u],encapsulation:2})}return a})();var zi=()=>({standalone:!0});function Ci(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,95),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,96),tg(3,`nz-icon`,97),Tl()(),Sl()}}function bi(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,95),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,96),_w(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var lt=110;var Fn=(()=>{class a{destroyRef=_(ae);router=_(Te$1);#e=_(Z0);injector=_(se);viewPort=_(d7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){oV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-lt>640?this.width.set(640):this.width.set(this.windowWidth()-lt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-lt>640?this.width.set(640):this.width.set(i-lt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(rV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`nz-blog-test-readme`]],features:[jw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:440,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-5a486561`,`nzTitle`,`MyTested Library Out of The Box`],[`nzHref`,`#h-dacb62dd`,`nzTitle`,`Basic API Controller Testing`],[`nzHref`,`#h-3505cd43`,`nzTitle`,`Data Validation with FluentValidation Library`],[`nzHref`,`#h-adda9d19`,`nzTitle`,`Exception Testing`],[`nzHref`,`#h-7aa876f0`,`nzTitle`,`Identity Controller Testing`],[`nzHref`,`#h-dde4549b`,`nzTitle`,`Advanced Testing with MyTested Library`],[`nzHref`,`#h-ff4316b6`,`nzTitle`,`MyTested Library Limitations`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241009-test-readme.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-5a486561`],[`onclick`,`window.location.hash = 'h-5a486561'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-csharp`],[1,`hljs-keyword`],[1,`hljs-title`],[1,`hljs-meta`],[1,`hljs-function`],[1,`hljs-string`],[`id`,`h-dacb62dd`],[`onclick`,`window.location.hash = 'h-dacb62dd'`,1,`anchor`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Endpoints/TodoLists.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/EdiWang/Moonglade/blob/master/src/Moonglade.Web/Controllers/TagsController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Tags/TagsController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/TagsController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Web.csproj`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/specification.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-3505cd43`],[`onclick`,`window.location.hash = 'h-3505cd43'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Articles/EditTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Application.UnitTests/Common/Exceptions/ValidationExceptionTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Web.AcceptanceTests/StepDefinitions/LoginStepDefinitions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MoongladePure/blob/main/tests/Moonglade.Tests/IntegrationTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Common/AuthorCommandValidator.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Users/Create.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Application/TodoLists/Commands/UpdateTodoList/UpdateTodoListCommandValidator.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-json`],[1,`hljs-punctuation`],[1,`hljs-attr`],[`id`,`h-adda9d19`],[`onclick`,`window.location.hash = 'h-adda9d19'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Domain/Common/BaseDomainException.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Middleware/ValidationExceptionHandlerMiddleware.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-7aa876f0`],[`onclick`,`window.location.hash = 'h-7aa876f0'`,1,`anchor`],[`href`,`https://cioina.azurewebsites.net/articles/dotnet-core-testing#h-6278f57b`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-dde4549b`],[`onclick`,`window.location.hash = 'h-dde4549b'`,1,`anchor`],[`href`,`https://cioina.azurewebsites.net/articles/ratelimit-middleware`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-ff4316b6`],[`onclick`,`window.location.hash = 'h-ff4316b6'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/tree/main/src/Server`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/tree/master/src/Conduit`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/tree/main/src`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/ivaylokenov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ardalis`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanprodan`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jbogard`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/BenMorris`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(Wi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,Ci,4,0,`ng-container`,5)(6,bi,4,0,`ng-container`,5),Tl()()(),Wi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),_w(11,`Jump to top`),Tl()(),Wi$1(12,`div`,3)(13,`nz-switch`,9),sD(),Ag(`ngModelChange`,function(g){return xw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),Wi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19),Tl()(),Wi$1(24,`span`,20),_w(25,` MyTested Test Project Example`),tg(26,`span`,21)(27,`span`,22),Wi$1(28,`a`,23),tg(29,`nz-icon`,24),Tl()(),Wi$1(30,`article`,25)(31,`h2`,26)(32,`span`),_w(33,`Introduction`),Tl(),Wi$1(34,`a`,27),_w(35,`#`),Tl()(),Wi$1(36,`p`),_w(37,`The compiled code of our .NET Core 10 application is on `),Wi$1(38,`a`,28),_w(39,`our GitHub repository`),Tl(),_w(40,`. For this test project, which is part our application, we will use `),Wi$1(41,`a`,29),_w(42,`MyTested`),Tl(),_w(43,` - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 10 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 10 project is based on `),Wi$1(44,`a`,30),_w(45,`BookStore`),Tl(),_w(46,` repository and adapted to work with MyTested library.`),Tl(),Wi$1(47,`h2`,31)(48,`span`),_w(49,`MyTested Library Out of The Box`),Tl(),Wi$1(50,`a`,32),_w(51,`#`),Tl()(),Wi$1(52,`p`),_w(53,`I found out about MyTested for the first time from `),Wi$1(54,`a`,33),_w(55,`BlazorShop`),Tl(),_w(56,` repository. At the same time, I found out about `),Wi$1(57,`code`),_w(58,`Jwt Authentication`),Tl(),_w(59,` implementation from same `),Wi$1(60,`a`,34),_w(61,`BlazorShop`),Tl(),_w(62,` repository and from `),Wi$1(63,`a`,35),_w(64,`aspnetcore-realworld-example`),Tl(),_w(65,` repository. Both `),Wi$1(66,`code`),_w(67,`Jwt Authentication`),Tl(),_w(68,` implementations did not work with original `),Wi$1(69,`a`,29),_w(70,`MyTested`),Tl(),_w(71,` library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was only able to add some small pieces of code to make MyTested and my own `),Wi$1(72,`code`),_w(73,`Jwt Authentication`),Tl(),_w(74,` implementation work and not to break any original MyTested tests. One interesting idea of JWT token implementation together with refresh token is on `),Wi$1(75,`a`,36),_w(76,`EdiWang`),Tl(),_w(77,` GitHub repository.
But, what MyTested can do out of the box? The best answer is in `),Wi$1(78,`a`,37),_w(79,`MusicStore`),Tl(),_w(80,` testing project. For the API controller, `),Wi$1(81,`a`,38),_w(82,`here`),Tl(),_w(83,` is an example:`),Tl(),Wi$1(84,`pre`,39)(85,`code`)(86,`span`,40),_w(87,`using`),Tl(),_w(88,` BlogAngular.Application.Common.Version;
`),Wi$1(89,`span`,40),_w(90,`using`),Tl(),_w(91,` BlogAngular.Web.Features;
`),Wi$1(92,`span`,40),_w(93,`using`),Tl(),_w(94,` MyTested.AspNetCore.Mvc;
`),Wi$1(95,`span`,40),_w(96,`using`),Tl(),_w(97,` Xunit;

`),Wi$1(98,`span`,40),_w(99,`namespace`),Tl(),_w(100,` `),Wi$1(101,`span`,41),_w(102,`BlogAngular.Test.Routing`),Tl(),_w(103,`
{
    `),Wi$1(104,`span`,40),_w(105,`public`),Tl(),_w(106,` `),Wi$1(107,`span`,40),_w(108,`class`),Tl(),_w(109,` `),Wi$1(110,`span`,41),_w(111,`FrontEndRouteTest`),Tl(),_w(112,`
    {
        [`),Wi$1(113,`span`,42),_w(114,`Fact`),Tl(),_w(115,`]
        `),Wi$1(116,`span`,43)(117,`span`,40),_w(118,`public`),Tl(),_w(119,` `),Wi$1(120,`span`,40),_w(121,`void`),Tl(),_w(122,` `),Wi$1(123,`span`,41),_w(124,`VersionShouldBeRouted`),Tl(),_w(125,`()`),Tl(),_w(126,`
        => MyMvc
        .Pipeline()
        .ShouldMap(request => request
            .WithMethod(HttpMethod.Get)
            .WithLocation(`),Wi$1(127,`span`,44),_w(128,`"api/v1.0/version"`),Tl(),_w(129,`))
        .To<VersionController>(c => c.Index())
        .Which()
        .ShouldReturn()
        .ActionResult(result => result.Result(`),Wi$1(130,`span`,40),_w(131,`new`),Tl(),_w(132,` VersionResponseEnvelope
        {
            VersionJson = `),Wi$1(133,`span`,40),_w(134,`new`),Tl(),_w(135,` VersionResponseModel()
        }));
    }
}`),Tl()(),Wi$1(136,`h2`,45)(137,`span`),_w(138,`Basic API Controller Testing`),Tl(),Wi$1(139,`a`,46),_w(140,`#`),Tl()(),Wi$1(141,`p`),_w(142,`There are different ways to define API controllers: `),Wi$1(143,`a`,47),_w(144,`CleanArchitecture`),Tl(),_w(145,`, `),Wi$1(146,`a`,48),_w(147,`Moonglade`),Tl(),_w(148,`, `),Wi$1(149,`a`,49),_w(150,`Conduit`),Tl(),_w(151,`, and `),Wi$1(152,`a`,50),_w(153,`this one`),Tl(),_w(154,`. The main reason we implemented API control in a certain way is `),Wi$1(155,`a`,51),_w(156,`NSwag.AspNetCore and NSwag.MSBuild`),Tl(),_w(157,` which we use just in Debug mode to generate `),Wi$1(158,`a`,52),_w(159,`specification.json`),Tl(),_w(160,`. `),Wi$1(161,`code`),_w(162,`NSwag`),Tl(),_w(163,` tool is \u201Cvery sensitive\u201D to how API controllers look.
By basic API controller testing, we mean at least one test per CRUD concept.
`),Wi$1(164,`a`,53),_w(165,`Here`),Tl(),_w(166,` is an example:`),Tl(),Wi$1(167,`ul`)(168,`li`)(169,`code`),_w(170,`Create_tag_should_return_success_with_data`),Tl(),_w(171,`- Create`),Tl(),Wi$1(172,`li`)(173,`code`),_w(174,`Listing_tags_without_url_parameters_should_return_success_with_all_tags`),Tl(),_w(175,`- Read`),Tl(),Wi$1(176,`li`)(177,`code`),_w(178,`Edit_tag_should_return_success_with_data`),Tl(),_w(179,`- Update`),Tl(),Wi$1(180,`li`)(181,`code`),_w(182,`Delete_tag_should_return_success_with_tag_id`),Tl(),_w(183,` - Delete`),Tl()(),Wi$1(184,`h2`,54)(185,`span`),_w(186,`Data Validation with FluentValidation Library`),Tl(),Wi$1(187,`a`,55),_w(188,`#`),Tl()(),Wi$1(189,`p`),_w(190,`A particular change we made to MyTested is adding the possibility of testing data validation. In fact, now, we can implement all following tests: `),Wi$1(191,`a`,56),_w(192,`BookStore`),Tl(),_w(193,`, `),Wi$1(194,`a`,57),_w(195,`RealWorld`),Tl(),_w(196,`, `),Wi$1(197,`a`,58),_w(198,`CleanArchitecture1`),Tl(),_w(199,`, and `),Wi$1(200,`a`,59),_w(201,`CleanArchitecture2`),Tl(),_w(202,`, `),Wi$1(203,`a`,60),_w(204,`MoongladePure`),Tl(),_w(205,` in a set of beautiful tests. `),Wi$1(206,`a`,53),_w(207,`Here`),Tl(),_w(208,` are examples of testing data validation using modified version of MyTested library:`),Tl(),Wi$1(209,`ul`)(210,`li`)(211,`code`),_w(212,`Create_tag_with_one_char_should_return_validation_error`),Tl(),_w(213,`- Creates tag name length bellow allowed by database constraint`),Tl(),Wi$1(214,`li`)(215,`code`),_w(216,`Create_tag_with_max_chars_should_return_validation_error`),Tl(),_w(217,`- Creates tag name length above allowed by database constraint`),Tl(),Wi$1(218,`li`)(219,`code`),_w(220,`Edit_tag_with_one_char_should_return_validation_error`),Tl(),_w(221,`- Updates tag name length bellow allowed by database constraint`),Tl(),Wi$1(222,`li`)(223,`code`),_w(224,`Edit_tag_with_max_chars_should_return_validation_error`),Tl(),_w(225,` - Updates tag name length above allowed by database constraint`),Tl()(),Wi$1(226,`p`),_w(227,`Our validation implementation is based mostly on `),Wi$1(228,`a`,61),_w(229,`BookStore`),Tl(),_w(230,`. One useful technique to validate unique data comes from `),Wi$1(231,`a`,62),_w(232,`Conduit`),Tl(),_w(233,` and `),Wi$1(234,`a`,63),_w(235,`CleanArchitecture`),Tl(),_w(236,`. Following are `),Wi$1(237,`a`,53),_w(238,`three tests`),Tl(),_w(239,` with the constraint that the tag name is unique:`),Tl(),Wi$1(240,`ul`)(241,`li`)(242,`code`),_w(243,`Create_tag_with_same_name_should_fail_with_validation_error`),Tl(),_w(244,`- Creates tag with name when the name has already taken.`),Tl(),Wi$1(245,`li`)(246,`code`),_w(247,`Edit_tag_with_same_name_should_fail_with_validation_error`),Tl(),_w(248,`- Updates tag name when the name has already taken.`),Tl(),Wi$1(249,`li`)(250,`code`),_w(251,`Edit_same_tag_with_same_name_should_return_success_with_data`),Tl(),_w(252,`- Updates tag name when the name did not change.`),Tl()(),Wi$1(253,`p`),_w(254,`In `),Wi$1(255,`a`,28),_w(256,`our application`),Tl(),_w(257,`, any `),Wi$1(258,`code`),_w(259,`MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException`),Tl(),_w(260,` will return 422 with JSON string similar to this:`),Tl(),Wi$1(261,`pre`,64)(262,`code`)(263,`span`,65),_w(264,`{`),Tl(),_w(265,`
   `),Wi$1(266,`span`,66),_w(267,`"TagJson.Title"`),Tl(),Wi$1(268,`span`,65),_w(269,`:`),Tl(),_w(270,`  `),Wi$1(271,`span`,65),_w(272,`[`),Tl(),Wi$1(273,`span`,44),_w(274,`"The length of 'Tag Json Title' must be 420 characters or fewer. You entered 421 characters."`),Tl(),Wi$1(275,`span`,65),_w(276,`]`),Tl(),_w(277,`
`),Wi$1(278,`span`,65),_w(279,`}`),Tl()()(),Wi$1(280,`p`),_w(281,`That represents a standard validation message from `),Wi$1(282,`code`),_w(283,`FluentValidation`),Tl(),_w(284,` library which can be customized.`),Tl(),Wi$1(285,`h2`,67)(286,`span`),_w(287,`Exception Testing`),Tl(),Wi$1(288,`a`,68),_w(289,`#`),Tl()(),Wi$1(290,`p`),_w(291,`In our application, we use `),Wi$1(292,`code`),_w(293,`Ardalis.GuardClauses.NotFoundException`),Tl(),_w(294,` instead of `),Wi$1(295,`a`,69),_w(296,`BaseDomainException`),Tl(),_w(297,`. In addition, we use `),Wi$1(298,`a`,70),_w(299,`ValidationExceptionHandlerMiddleware`),Tl(),_w(300,` to intercept all validation exceptions that return `),Wi$1(301,`code`),_w(302,`HttpStatusCode.UnprocessableEntity`),Tl(),_w(303,`(422). Unfortunately, MyTested does not work with the middleware concept. But, we can use `),Wi$1(304,`code`),_w(305,`MyTested.AspNetCore.Mvc.Exceptions.InvocationAssertionException`),Tl(),_w(306,` and `),Wi$1(307,`a`,71),_w(308,`FromNotFoundException`),Tl(),_w(309,` to test against two common exceptions:`),Tl(),Wi$1(310,`ul`)(311,`li`)(312,`code`),_w(313,`Edit_tag_with_wrong_id_should_fail`),Tl(),_w(314,`- The tag with the specified id does not exist in the database.`),Tl(),Wi$1(315,`li`)(316,`code`),_w(317,`Update_user_with_malformed_data_should_fail`),Tl(),_w(318,`- The webserver cannot create the object from the json data request.`),Tl()(),Wi$1(319,`h2`,72)(320,`span`),_w(321,`Identity Controller Testing`),Tl(),Wi$1(322,`a`,73),_w(323,`#`),Tl()(),Wi$1(324,`p`),_w(325,`When it comes to JWT authorization, a big amount of testing consists in testing for invalid JWT tokens:`),Tl(),Wi$1(326,`ul`)(327,`li`)(328,`code`),_w(329,`Update_user_without_authorization_header_should_fail`),Tl(),_w(330,`- tests when JWT token is absent`),Tl(),Wi$1(331,`li`)(332,`code`),_w(333,`Update_user_with_altered_authorization_header_should_fail`),Tl(),_w(334,`- tests when to a valid JWT token is added one character`),Tl(),Wi$1(335,`li`)(336,`code`),_w(337,`Update_user_with_malformed_authorization_header_should_fail`),Tl(),_w(338,`- tests when JWT token has format `),Wi$1(339,`code`),_w(340,`a.b`),Tl()(),Wi$1(341,`li`)(342,`code`),_w(343,`Update_user_with_fake_authorization_header_should_fail`),Tl(),_w(344,`- tests when JWT token has correct format `),Wi$1(345,`code`),_w(346,`a.b.c`),Tl(),_w(347,` but random characters`),Tl(),Wi$1(348,`li`)(349,`code`),_w(350,`Update_user_with_incorrect_authorization_header_key_should_fail`),Tl(),_w(351,`- tests when JWT token is valid but was encrypted with a different key`),Tl(),Wi$1(352,`li`)(353,`code`),_w(354,`Update_user_with_expired_authorization_header_should_fail`),Tl(),_w(355,`- tests when a valid JWT token was expired`),Tl()(),Wi$1(356,`p`),_w(357,`These are the most common case scenarios to test against an invalid JWT token and must be done just for one controller!
MyTested cannot catch 401 error code directly. We found a workaround by using `),Wi$1(358,`a`,71),_w(359,`HeaderAuthorizationException`),Tl(),_w(360,`
The full source code for the .NET Core `),Wi$1(361,`code`),_w(362,`IdentityService`),Tl(),_w(363,` implementation can be found `),Wi$1(364,`a`,74),_w(365,`here`),Tl()(),Wi$1(366,`h2`,75)(367,`span`),_w(368,`Advanced Testing with MyTested Library`),Tl(),Wi$1(369,`a`,76),_w(370,`#`),Tl()(),Wi$1(371,`p`),_w(372,`In `),Wi$1(373,`a`,77),_w(374,`"Implementing JWT Token Refresh Concept for .NET Core 10"`),Tl(),_w(375,`, we show an example of RateLimitMiddleware and try some advanced testing with shared `),Wi$1(376,`code`),_w(377,`MemoryCache`),Tl(),_w(378,`: `),Wi$1(379,`code`),_w(380,`GetTagsWithRateLimitMiddleware`),Tl(),_w(381,` and `),Wi$1(382,`code`),_w(383,`GetAllWithRateLimitMiddleware`),Tl(),_w(384,` from `),Wi$1(385,`a`,78),_w(386,`StaticTestData.cs`),Tl(),_w(387,`).`),Tl(),Wi$1(388,`h2`,79)(389,`span`),_w(390,`MyTested Library Limitations`),Tl(),Wi$1(391,`a`,80),_w(392,`#`),Tl()(),Wi$1(393,`p`),_w(394,`We applied modified version of MyTested library to three popular GitHub repositories: `),Wi$1(395,`a`,81),_w(396,`BookStore`),Tl(),_w(397,`, `),Wi$1(398,`a`,82),_w(399,`RealWorld`),Tl(),_w(400,`, and `),Wi$1(401,`a`,83),_w(402,`CleanArchitecture`),Tl(),_w(403,`. Our quick investigation shows that BookStore can be configured to work 100% with MyTested while RealWorld works only with `),Wi$1(404,`a`,49),_w(405,`anonymous controllers`),Tl(),_w(406,` and CleanArchitecture does not work at all.
The full test project source code can be found on `),Wi$1(407,`a`,84),_w(408,`our GitHub repository`),Tl(),_w(409,`.`),Tl(),Wi$1(410,`h2`,85)(411,`span`),_w(412,`Credits`),Tl(),Wi$1(413,`a`,86),_w(414,`#`),Tl()(),Wi$1(415,`ul`)(416,`li`)(417,`a`,87),_w(418,`Ivaylo Kenov`),Tl()(),Wi$1(419,`li`)(420,`a`,88),_w(421,`Kalin Tsenkov`),Tl()(),Wi$1(422,`li`)(423,`a`,89),_w(424,`Steve Smith`),Tl()(),Wi$1(425,`li`)(426,`a`,90),_w(427,`Jason Taylor`),Tl()(),Wi$1(428,`li`)(429,`a`,91),_w(430,`Stefan Prodan`),Tl()(),Wi$1(431,`li`)(432,`a`,92),_w(433,`Mark Cilia Vincenti`),Tl()(),Wi$1(434,`li`)(435,`a`,93),_w(436,`Jimmy Bogard`),Tl()(),Wi$1(437,`li`)(438,`a`,94),_w(439,`Ben Morris`),Tl()()()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,Vw(7,zi)),cD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,bg,sd,cr,ir,Fa,p9,d9,Vn,qi$1,_n,ji$1,Jo,Za,Dl,ga$1,ma$1,So,Ve$1,pe,_u],encapsulation:2})}return a})();var yi=()=>({standalone:!0});function _i(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,86),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,87),tg(3,`nz-icon`,88),Tl()(),Sl()}}function Ti(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,86),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,87),_w(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var st=110;var Hn=(()=>{class a{destroyRef=_(ae);router=_(Te$1);#e=_(Z0);injector=_(se);viewPort=_(d7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){oV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-st>640?this.width.set(640):this.width.set(this.windowWidth()-st-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-st>640?this.width.set(640):this.width.set(i-st-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(rV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`nz-blog-ratelimit-middleware`]],features:[jw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:1660,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-ce31d768`,`nzTitle`,`Use Case Scenario`],[`nzHref`,`#h-c73a370e`,`nzTitle`,`JWT Token Refresh Concept`],[`nzHref`,`#h-2ee872d2`,`nzTitle`,`JWT Token Refresh Implementation`],[`nzHref`,`#h-dabba405`,`nzTitle`,`Modified RateLimitMiddleware`],[`nzHref`,`#h-bd1baabd`,`nzTitle`,`Testing of RateLimitMiddleware With MyTested Library`],[`nzHref`,`#h-009deb37`,`nzTitle`,`Test Settings`],[`nzHref`,`#h-fb5fe24a`,`nzTitle`,`Proof of Concept`],[`nzHref`,`#h-6f8b794f`,`nzTitle`,`Conclusion`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241018-ratelimit-middleware.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/realworld-apps/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-ce31d768`],[`onclick`,`window.location.hash = 'h-ce31d768'`,1,`anchor`],[`id`,`h-c73a370e`],[`onclick`,`window.location.hash = 'h-c73a370e'`,1,`anchor`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-csharp`],[1,`hljs-meta`],[1,`hljs-keyword`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/blob/main/bin/Release/net10.0/appsettings.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-2ee872d2`],[`onclick`,`window.location.hash = 'h-2ee872d2'`,1,`anchor`],[`href`,`https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-literal`],[1,`hljs-built_in`],[1,`hljs-string`],[`href`,`https://github.com/stefanprodan/AspNetCoreRateLimit/blob/master/src/AspNetCoreRateLimit/Middleware/RateLimitMiddleware.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-dabba405`],[`onclick`,`window.location.hash = 'h-dabba405'`,1,`anchor`],[1,`hljs-title`],[1,`hljs-function`],[1,`hljs-params`],[1,`hljs-comment`],[1,`hljs-subst`],[1,`hljs-number`],[`id`,`h-bd1baabd`],[`onclick`,`window.location.hash = 'h-bd1baabd'`,1,`anchor`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/testsettings.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test/RateLimit`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/RateLimit/AsyncKeyedLockTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti/AsyncKeyedLock`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/EdiWang/Edi.CacheAside.InMemory/blob/master/src/Edi.CacheAside.InMemory/MemoryCacheAside.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-009deb37`],[`onclick`,`window.location.hash = 'h-009deb37'`,1,`anchor`],[1,`language-json`],[1,`hljs-punctuation`],[1,`hljs-attr`],[`id`,`h-fb5fe24a`],[`onclick`,`window.location.hash = 'h-fb5fe24a'`,1,`anchor`],[`id`,`h-6f8b794f`],[`onclick`,`window.location.hash = 'h-6f8b794f'`,1,`anchor`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/ivaylokenov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ardalis`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanprodan`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jbogard`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/BenMorris`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(Wi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,_i,4,0,`ng-container`,5)(6,Ti,4,0,`ng-container`,5),Tl()()(),Wi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),_w(11,`Jump to top`),Tl()(),Wi$1(12,`div`,3)(13,`nz-switch`,9),sD(),Ag(`ngModelChange`,function(g){return xw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),Wi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19)(24,`nz-link`,20),Tl()(),Wi$1(25,`span`,21),_w(26,` Implementing JWT Token Refresh Concept for .NET Core 10`),tg(27,`span`,22)(28,`span`,23),Wi$1(29,`a`,24),tg(30,`nz-icon`,25),Tl()(),Wi$1(31,`article`,26)(32,`blockquote`,27)(33,`p`)(34,`strong`),_w(35,`The concept of Bearer Header Authorization based on JWT token implementation provided by .NET Core 10 is the same as in .NET Core 8. `),Tl()()(),Wi$1(36,`h2`,28)(37,`span`),_w(38,`Introduction`),Tl(),Wi$1(39,`a`,29),_w(40,`#`),Tl()(),Wi$1(41,`p`),_w(42,`The compiled code of our .NET Core 10 application is on `),Wi$1(43,`a`,30),_w(44,`our GitHub repository`),Tl(),_w(45,`. For testing purpose, we will use `),Wi$1(46,`a`,31),_w(47,`MyTested`),Tl(),_w(48,` - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 10 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our project is based on `),Wi$1(49,`a`,32),_w(50,`Conduit`),Tl(),_w(51,` and `),Wi$1(52,`a`,33),_w(53,`BookStore`),Tl(),_w(54,` repository and adapted to work with MyTested library. MyTested was engineered to work without middleware which is an advantage for many cases. However, the scope of this article was to find a way to tests middleware with MyTested. The full test project source code can be found on `),Wi$1(55,`a`,34),_w(56,`our another GitHub repository`),Tl(),_w(57,`.`),Tl(),Wi$1(58,`h2`,35)(59,`span`),_w(60,`Use Case Scenario`),Tl(),Wi$1(61,`a`,36),_w(62,`#`),Tl()(),Wi$1(63,`p`),_w(64,`The user signs in and gets a JWT token valid for 30 minutes. The user opens a webpage to create/edit an article. It takes 35 minutes to finish the work. The user clicks on submit button. A modal form pops up and asks the user to refresh JWT token by entering a password. The user gets a new JWT token valid for next 30 minutes. Finally, the user clicks submit button and saves the work.`),Tl(),Wi$1(65,`h2`,37)(66,`span`),_w(67,`JWT Token Refresh Concept`),Tl(),Wi$1(68,`a`,38),_w(69,`#`),Tl()(),Wi$1(70,`p`),_w(71,`First, we need to know how basic native JWT token implemented in .NET Core 10 works. Usually, there are `),Wi$1(72,`a`,39),_w(73,`two types of API endpoints: public and private`),Tl(),_w(74,`. A private API endpoint look like this:`),Tl(),Wi$1(75,`pre`,40)(76,`code`),_w(77,`[`),Wi$1(78,`span`,41),_w(79,`HttpPut`),Tl(),_w(80,`]
[`),Wi$1(81,`span`,41),_w(82,`Route(nameof(Update))`),Tl(),_w(83,`]
[`),Wi$1(84,`span`,41),_w(85,`Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)`),Tl(),_w(86,`]
`),Wi$1(87,`span`,42),_w(88,`public`),Tl(),_w(89,` `),Wi$1(90,`span`,42),_w(91,`async`),Tl(),_w(92,` Task<ActionResult<UserResponseEnvelope>> Update(
    UserUpdateCommand command)
    => `),Wi$1(93,`span`,42),_w(94,`await`),Tl(),_w(95,` `),Wi$1(96,`span`,42),_w(97,`this`),Tl(),_w(98,`.Send(command);`),Tl()(),Wi$1(99,`p`),_w(100,`The user signs in and gets a JWT token which is saved in localStorage. Then, any request to the server includes obtained JWT token in the Authorization header. The server won’t use the token on public endpoints. It means that the server won’t try to decrypt the token. On the private endpoints, the server will try to decrypt the token, apply `),Wi$1(101,`code`),_w(102,`BearerPolicy`),Tl(),_w(103,`, and match the role from the token to `),Wi$1(104,`code`),_w(105,`AdministratorRoleName`),Tl(),_w(106,` list. At this point, the basic native .NET Core 10 implementation does not care if the user form the JWT token exists in the database, and it does not care if the role exists in the database ether. However, the server checks if the token expired and returns a 401 error if it’s the case. With all this in mind, we implemented the concept of JWT token refresh period called PRefresh. Let’s call the token’s valid period PValid. Then, `),Wi$1(107,`code`),_w(108,`SecurityTokenDescriptorExpiresInMinutes`),Tl(),_w(109,` from `),Wi$1(110,`a`,43),_w(111,`appsettings.json`),Tl(),_w(112,` = PValid + PRefresh and `),Wi$1(113,`code`),_w(114,`SecurityTokenRefreshRate`),Tl(),_w(115,` = PRefresh/(PValid + PRefresh). So, if `),Wi$1(116,`code`),_w(117,`SecurityTokenDescriptorExpiresInMinutes`),Tl(),_w(118,`= 60 minutes and `),Wi$1(119,`code`),_w(120,`SecurityTokenRefreshRate`),Tl(),_w(121,` = 1/2, it means that PValid = 30 minutes and PRefresh = 30 minutes. If `),Wi$1(122,`code`),_w(123,`SecurityTokenRefreshRate`),Tl(),_w(124,` = 1/4, it means that PValid = 45 minutes and PRefresh = 15 minutes. If `),Wi$1(125,`code`),_w(126,`SecurityTokenRefreshRate`),Tl(),_w(127,` = 3/4, it means that PValid = 15 minutes and PRefresh = 45 minutes and so on. `),Tl(),Wi$1(128,`h2`,44)(129,`span`),_w(130,`JWT Token Refresh Implementation`),Tl(),Wi$1(131,`a`,45),_w(132,`#`),Tl()(),Wi$1(133,`p`),_w(134,`One interesting idea of JWT token implementation together with refresh token is on `),Wi$1(135,`a`,46),_w(136,`EdiWang`),Tl(),_w(137,` GitHub repository. Our main difference from above implementation is not using web browser cookies and uses native .NET Core implementation which is “controlled” by the .NET Core framework itself. One problem we solved in this article, is the implementation of `),Wi$1(138,`code`),_w(139,`JWT Token`),Tl(),_w(140,` refresh mechanism. There is no standard way to refresh JWT token in .NET Core 10. The main idea was to check a valid `),Wi$1(141,`code`),_w(142,`JWT token`),Tl(),_w(143,` right after standard .NET Core authorization and before entering of an API controller. In fact, we needed to use following formula with this small piece of code:`),Tl(),Wi$1(144,`pre`,40)(145,`code`)(146,`span`,42),_w(147,`var`),Tl(),_w(148,` claimsPrincipal = context.User!;
 `),Wi$1(149,`span`,42),_w(150,`if`),Tl(),_w(151,` (claimsPrincipal != `),Wi$1(152,`span`,47),_w(153,`null`),Tl(),_w(154,`)
 {
     `),Wi$1(155,`span`,42),_w(156,`var`),Tl(),_w(157,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
     `),Wi$1(158,`span`,42),_w(159,`if`),Tl(),_w(160,` (isAuthenticated != `),Wi$1(161,`span`,47),_w(162,`null`),Tl(),_w(163,` && (`),Wi$1(164,`span`,48),_w(165,`bool`),Tl(),_w(166,`)isAuthenticated)
     {
         `),Wi$1(167,`span`,42),_w(168,`var`),Tl(),_w(169,` claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
         `),Wi$1(170,`span`,42),_w(171,`if`),Tl(),_w(172,` (claim != `),Wi$1(173,`span`,47),_w(174,`null`),Tl(),_w(175,`)
         {
             clientId = claim.Value;
         }
     }
 }
 `),Wi$1(176,`span`,42),_w(177,`if`),Tl(),_w(178,` (clientId != `),Wi$1(179,`span`,47),_w(180,`null`),Tl(),_w(181,`)
 {
     `),Wi$1(182,`span`,42),_w(183,`var`),Tl(),_w(184,` iat = claimsPrincipal.FindFirst(`),Wi$1(185,`span`,49),_w(186,`"iat"`),Tl(),_w(187,`);
     `),Wi$1(188,`span`,42),_w(189,`var`),Tl(),_w(190,` exp = claimsPrincipal.FindFirst(`),Wi$1(191,`span`,49),_w(192,`"exp"`),Tl(),_w(193,`);
     `),Wi$1(194,`span`,42),_w(195,`if`),Tl(),_w(196,` (iat != `),Wi$1(197,`span`,47),_w(198,`null`),Tl(),_w(199,` && exp != `),Wi$1(200,`span`,47),_w(201,`null`),Tl(),_w(202,`)
     {
         `),Wi$1(203,`span`,42),_w(204,`var`),Tl(),_w(205,` pValid = (`),Wi$1(206,`span`,48),_w(207,`long`),Tl(),_w(208,`.Parse(exp.Value) - `),Wi$1(209,`span`,48),_w(210,`long`),Tl(),_w(211,`.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
         `),Wi$1(212,`span`,42),_w(213,`var`),Tl(),_w(214,` current = `),Wi$1(215,`span`,48),_w(216,`long`),Tl(),_w(217,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();
         `),Wi$1(218,`span`,42),_w(219,`if`),Tl(),_w(220,` (current < pValid)
         {
             `),Wi$1(221,`span`,42),_w(222,`await`),Tl(),_w(223,` ReturnSecurityTokenRefreshRate(context, `),Wi$1(224,`span`,49),_w(225,`"SecurityTokenRefreshRate"`),Tl(),_w(226,`, `),Wi$1(227,`span`,49),_w(228,`"Please refresh your JWT token"`),Tl(),_w(229,`);
             `),Wi$1(230,`span`,42),_w(231,`return`),Tl(),_w(232,`;
         }
     }
 }`),Tl()(),Wi$1(233,`p`),_w(234,`So, we needed a middleware to place the above piece of code. A good candidate we found was AspNetCoreRateLimit library, so we decided to modify its source code keeping in mind also the possibility of testing it with MyTested. The original AspNetCoreRateLimit middleware is called `),Wi$1(235,`a`,50),_w(236,`RateLimitMiddleware.cs`),Tl(),_w(237,` Following is the modified source code that is used in our actual application.`),Tl(),Wi$1(238,`h3`,51)(239,`span`),_w(240,`Modified RateLimitMiddleware`),Tl(),Wi$1(241,`a`,52),_w(242,`#`),Tl()(),Wi$1(243,`pre`,40)(244,`code`)(245,`span`,42),_w(246,`using`),Tl(),_w(247,` Microsoft.AspNetCore.Hosting;
`),Wi$1(248,`span`,42),_w(249,`using`),Tl(),_w(250,` Microsoft.AspNetCore.Http;
`),Wi$1(251,`span`,42),_w(252,`using`),Tl(),_w(253,` Newtonsoft.Json;
`),Wi$1(254,`span`,42),_w(255,`using`),Tl(),_w(256,` Newtonsoft.Json.Serialization;
`),Wi$1(257,`span`,42),_w(258,`using`),Tl(),_w(259,` System;
`),Wi$1(260,`span`,42),_w(261,`using`),Tl(),_w(262,` System.Collections.Generic;
`),Wi$1(263,`span`,42),_w(264,`using`),Tl(),_w(265,` System.Data;
`),Wi$1(266,`span`,42),_w(267,`using`),Tl(),_w(268,` System.Linq;
`),Wi$1(269,`span`,42),_w(270,`using`),Tl(),_w(271,` System.Net;
`),Wi$1(272,`span`,42),_w(273,`using`),Tl(),_w(274,` System.Security.Claims;
`),Wi$1(275,`span`,42),_w(276,`using`),Tl(),_w(277,` System.Text;
`),Wi$1(278,`span`,42),_w(279,`using`),Tl(),_w(280,` System.Threading.Tasks;

`),Wi$1(281,`span`,42),_w(282,`namespace`),Tl(),_w(283,` `),Wi$1(284,`span`,53),_w(285,`AspNetCoreRateLimit`),Tl(),_w(286,`
{
    `),Wi$1(287,`span`,42),_w(288,`public`),Tl(),_w(289,` `),Wi$1(290,`span`,42),_w(291,`abstract`),Tl(),_w(292,` `),Wi$1(293,`span`,42),_w(294,`class`),Tl(),_w(295,` `),Wi$1(296,`span`,53),_w(297,`RateLimitMiddleware`),Tl(),_w(298,`<`),Wi$1(299,`span`,53),_w(300,`TProcessor`),Tl(),_w(301,`> : `),Wi$1(302,`span`,53),_w(303,`IMiddleware`),Tl(),_w(304,`
        `),Wi$1(305,`span`,42),_w(306,`where`),Tl(),_w(307,` `),Wi$1(308,`span`,53),_w(309,`TProcessor`),Tl(),_w(310,` : `),Wi$1(311,`span`,53),_w(312,`IRateLimitProcessor`),Tl(),_w(313,`
    {
        `),Wi$1(314,`span`,42),_w(315,`private`),Tl(),_w(316,` `),Wi$1(317,`span`,42),_w(318,`readonly`),Tl(),_w(319,` IWebHostEnvironment _env;
        `),Wi$1(320,`span`,42),_w(321,`private`),Tl(),_w(322,` `),Wi$1(323,`span`,42),_w(324,`readonly`),Tl(),_w(325,` TProcessor _processor;
        `),Wi$1(326,`span`,42),_w(327,`private`),Tl(),_w(328,` `),Wi$1(329,`span`,42),_w(330,`readonly`),Tl(),_w(331,` RateLimitOptions _options;
        `),Wi$1(332,`span`,42),_w(333,`private`),Tl(),_w(334,` `),Wi$1(335,`span`,42),_w(336,`readonly`),Tl(),_w(337,` IRateLimitConfiguration _config;
        `),Wi$1(338,`span`,42),_w(339,`private`),Tl(),_w(340,` `),Wi$1(341,`span`,42),_w(342,`readonly`),Tl(),_w(343,` `),Wi$1(344,`span`,48),_w(345,`bool`),Tl(),_w(346,` _securityTokenRefreshOnly;
        `),Wi$1(347,`span`,54)(348,`span`,42),_w(349,`protected`),Tl(),_w(350,` `),Wi$1(351,`span`,53),_w(352,`RateLimitMiddleware`),Tl(),_w(353,`(`),Wi$1(354,`span`,55),_w(355,`
            IWebHostEnvironment env,
            RateLimitOptions options,
            TProcessor processor,
            IRateLimitConfiguration config,
            `),Wi$1(356,`span`,48),_w(357,`bool`),Tl(),_w(358,` securityTokenRefreshOnly`),Tl(),_w(359,`)`),Tl(),_w(360,`
        {
            _env = env;
            _options = options;
            _processor = processor;
            _config = config;
            _securityTokenRefreshOnly = securityTokenRefreshOnly;

            `),Wi$1(361,`span`,42),_w(362,`if`),Tl(),_w(363,` (_env.EnvironmentName == `),Wi$1(364,`span`,49),_w(365,`"Test"`),Tl(),_w(366,`)
            {
                _config.RegisterResolvers();
            }
        }

        `),Wi$1(367,`span`,54)(368,`span`,42),_w(369,`public`),Tl(),_w(370,` `),Wi$1(371,`span`,42),_w(372,`async`),Tl(),_w(373,` Task `),Wi$1(374,`span`,53),_w(375,`InvokeAsync`),Tl(),_w(376,`(`),Wi$1(377,`span`,55),_w(378,`HttpContext context, RequestDelegate _next`),Tl(),_w(379,`)`),Tl(),_w(380,`
        {
            `),Wi$1(381,`span`,56),_w(382,`// check if rate limiting is enabled (EnableEndpointRateLimiting)`),Tl(),_w(383,`
            `),Wi$1(384,`span`,42),_w(385,`if`),Tl(),_w(386,` (_options == `),Wi$1(387,`span`,47),_w(388,`null`),Tl(),_w(389,`)
            {
                `),Wi$1(390,`span`,42),_w(391,`await`),Tl(),_w(392,` _next.Invoke(context);
                `),Wi$1(393,`span`,42),_w(394,`return`),Tl(),_w(395,`;
            }

            `),Wi$1(396,`span`,48),_w(397,`string`),Tl(),_w(398,` clientIp = `),Wi$1(399,`span`,47),_w(400,`null`),Tl(),_w(401,`;
            `),Wi$1(402,`span`,48),_w(403,`string`),Tl(),_w(404,` clientId = `),Wi$1(405,`span`,47),_w(406,`null`),Tl(),_w(407,`;

            `),Wi$1(408,`span`,42),_w(409,`var`),Tl(),_w(410,` claimsPrincipal = context.User!;

            `),Wi$1(411,`span`,42),_w(412,`if`),Tl(),_w(413,` (claimsPrincipal != `),Wi$1(414,`span`,47),_w(415,`null`),Tl(),_w(416,`)
            {
                `),Wi$1(417,`span`,42),_w(418,`var`),Tl(),_w(419,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),Wi$1(420,`span`,42),_w(421,`if`),Tl(),_w(422,` (isAuthenticated != `),Wi$1(423,`span`,47),_w(424,`null`),Tl(),_w(425,` && (`),Wi$1(426,`span`,48),_w(427,`bool`),Tl(),_w(428,`)isAuthenticated)
                {
                    `),Wi$1(429,`span`,42),_w(430,`var`),Tl(),_w(431,` claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
                    `),Wi$1(432,`span`,42),_w(433,`if`),Tl(),_w(434,` (claim != `),Wi$1(435,`span`,47),_w(436,`null`),Tl(),_w(437,`)
                    {
                        clientId = claim.Value;
                    }
                }
            }

            `),Wi$1(438,`span`,42),_w(439,`if`),Tl(),_w(440,` (!_config.IpResolvers.IsEmpty)
            {
                `),Wi$1(441,`span`,42),_w(442,`var`),Tl(),_w(443,` resolver = _config.IpResolvers.GetEnumerator();
                `),Wi$1(444,`span`,42),_w(445,`while`),Tl(),_w(446,` (resolver.MoveNext())
                {
                    clientIp = resolver.Current.Value.ResolveIp(context);
                    `),Wi$1(447,`span`,42),_w(448,`if`),Tl(),_w(449,` (!`),Wi$1(450,`span`,48),_w(451,`string`),Tl(),_w(452,`.IsNullOrEmpty(clientIp))
                    {
                        `),Wi$1(453,`span`,42),_w(454,`break`),Tl(),_w(455,`;
                    }
                }
            }

            `),Wi$1(456,`span`,42),_w(457,`var`),Tl(),_w(458,` path = context.Request.Path.ToString().ToLowerInvariant();
            `),Wi$1(459,`span`,42),_w(460,`var`),Tl(),_w(461,` identity = `),Wi$1(462,`span`,42),_w(463,`new`),Tl(),_w(464,` ClientRequestIdentity
            {
                ClientIp = clientIp ?? context.Connection.RemoteIpAddress?.MapToIPv4().ToString(),
                Path = path == `),Wi$1(465,`span`,49),_w(466,`"/"`),Tl(),_w(467,`
                    ? path
                    : path.TrimEnd(`),Wi$1(468,`span`,49),_w(469,`'/'`),Tl(),_w(470,`),
                HttpVerb = context.Request.Method.ToLowerInvariant(),
                ClientId = clientId ?? `),Wi$1(471,`span`,49),_w(472,`"anon"`),Tl(),_w(473,`
            };


            `),Wi$1(474,`span`,56),_w(475,`// check white list`),Tl(),_w(476,`
            `),Wi$1(477,`span`,42),_w(478,`if`),Tl(),_w(479,` (!_processor.IsWhitelisted(identity))
            {
                `),Wi$1(480,`span`,42),_w(481,`if`),Tl(),_w(482,` (clientId != `),Wi$1(483,`span`,47),_w(484,`null`),Tl(),_w(485,`)
                {
                    `),Wi$1(486,`span`,42),_w(487,`var`),Tl(),_w(488,` iat = claimsPrincipal.FindFirst(`),Wi$1(489,`span`,49),_w(490,`"iat"`),Tl(),_w(491,`);
                    `),Wi$1(492,`span`,42),_w(493,`var`),Tl(),_w(494,` exp = claimsPrincipal.FindFirst(`),Wi$1(495,`span`,49),_w(496,`"exp"`),Tl(),_w(497,`);
                    `),Wi$1(498,`span`,42),_w(499,`if`),Tl(),_w(500,` (iat != `),Wi$1(501,`span`,47),_w(502,`null`),Tl(),_w(503,` && exp != `),Wi$1(504,`span`,47),_w(505,`null`),Tl(),_w(506,`)
                    {
                        `),Wi$1(507,`span`,42),_w(508,`var`),Tl(),_w(509,` pValid = (`),Wi$1(510,`span`,48),_w(511,`long`),Tl(),_w(512,`.Parse(exp.Value) - `),Wi$1(513,`span`,48),_w(514,`long`),Tl(),_w(515,`.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
                        `),Wi$1(516,`span`,42),_w(517,`var`),Tl(),_w(518,` current = `),Wi$1(519,`span`,48),_w(520,`long`),Tl(),_w(521,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                        `),Wi$1(522,`span`,42),_w(523,`if`),Tl(),_w(524,` (`),Wi$1(525,`span`,42),_w(526,`this`),Tl(),_w(527,`._env.EnvironmentName == `),Wi$1(528,`span`,49),_w(529,`"Test"`),Tl(),_w(530,`)
                        {
                            `),Wi$1(531,`span`,42),_w(532,`if`),Tl(),_w(533,` (clientId == `),Wi$1(534,`span`,49),_w(535,`"SecurityTokenRefreshException@email.com1"`),Tl(),_w(536,`)
                            {
                                `),Wi$1(537,`span`,42),_w(538,`await`),Tl(),_w(539,` Task.FromException(`),Wi$1(540,`span`,42),_w(541,`new`),Tl(),_w(542,` SecurityTokenRefreshException(`),Wi$1(543,`span`,49),_w(544,`$"This is a test. PValid:  `),Wi$1(545,`span`,57),_w(546,`{pValid}`),Tl(),_w(547,` Current: `),Wi$1(548,`span`,57),_w(549,`{current}`),Tl(),_w(550,` ClientId: `),Wi$1(551,`span`,57),_w(552,`{clientId}`),Tl(),_w(553,`"`),Tl(),_w(554,`));
                            }
                        }
                        `),Wi$1(555,`span`,42),_w(556,`else`),Tl(),_w(557,` `),Wi$1(558,`span`,42),_w(559,`if`),Tl(),_w(560,` (current < pValid)
                        {
                            LogBlockedRequest(context, identity, identity.ClientIp);
                            `),Wi$1(561,`span`,42),_w(562,`await`),Tl(),_w(563,` ReturnSecurityTokenRefreshRate(context, `),Wi$1(564,`span`,49),_w(565,`"SecurityTokenRefreshRate"`),Tl(),_w(566,`, `),Wi$1(567,`span`,49),_w(568,`"Please refresh your JWT token"`),Tl(),_w(569,`);
                            `),Wi$1(570,`span`,42),_w(571,`return`),Tl(),_w(572,`;
                        }

                        `),Wi$1(573,`span`,42),_w(574,`var`),Tl(),_w(575,` claim = claimsPrincipal.FindFirst(ClaimTypes.UserData);
                        `),Wi$1(576,`span`,42),_w(577,`if`),Tl(),_w(578,` (claim != `),Wi$1(579,`span`,47),_w(580,`null`),Tl(),_w(581,`)
                        {
                            `),Wi$1(582,`span`,42),_w(583,`if`),Tl(),_w(584,` (`),Wi$1(585,`span`,42),_w(586,`this`),Tl(),_w(587,`._env.EnvironmentName == `),Wi$1(588,`span`,49),_w(589,`"Test"`),Tl(),_w(590,`)
                            {
                                `),Wi$1(591,`span`,42),_w(592,`if`),Tl(),_w(593,` (claim.Value == `),Wi$1(594,`span`,49),_w(595,`"0.0.0.0"`),Tl(),_w(596,`)
                                {
                                    `),Wi$1(597,`span`,42),_w(598,`await`),Tl(),_w(599,` Task.FromException(`),Wi$1(600,`span`,42),_w(601,`new`),Tl(),_w(602,` SecurityTokenRefreshException(`),Wi$1(603,`span`,49),_w(604,`$"This is a test. PValid:  `),Wi$1(605,`span`,57),_w(606,`{pValid}`),Tl(),_w(607,` Current: `),Wi$1(608,`span`,57),_w(609,`{current}`),Tl(),_w(610,` ClientId: `),Wi$1(611,`span`,57),_w(612,`{clientId}`),Tl(),_w(613,`"`),Tl(),_w(614,`));
                                }
                            }
                            `),Wi$1(615,`span`,42),_w(616,`else`),Tl(),_w(617,` `),Wi$1(618,`span`,42),_w(619,`if`),Tl(),_w(620,` (identity.ClientIp != claim.Value)
                            {
                                LogBlockedRequest(context, identity, `),Wi$1(621,`span`,49),_w(622,`$"New: `),Wi$1(623,`span`,57),_w(624,`{identity.ClientIp}`),Tl(),_w(625,` Old: `),Wi$1(626,`span`,57),_w(627,`{claim.Value}`),Tl(),_w(628,`"`),Tl(),_w(629,`);
                                `),Wi$1(630,`span`,42),_w(631,`await`),Tl(),_w(632,` ReturnSecurityTokenRefreshRate(context, `),Wi$1(633,`span`,49),_w(634,`"SecurityTokenRefreshRate"`),Tl(),_w(635,`, `),Wi$1(636,`span`,49),_w(637,`"Please refresh your IP"`),Tl(),_w(638,`);
                                `),Wi$1(639,`span`,42),_w(640,`return`),Tl(),_w(641,`;
                            }
                        }

                    }
                }

                `),Wi$1(642,`span`,41),_w(643,`#`),Wi$1(644,`span`,42),_w(645,`region`),Tl(),_w(646,` NOT securityTokenRefreshOnly`),Tl(),_w(647,`
                `),Wi$1(648,`span`,42),_w(649,`if`),Tl(),_w(650,` (!_securityTokenRefreshOnly)
                {
                    `),Wi$1(651,`span`,42),_w(652,`if`),Tl(),_w(653,` (`),Wi$1(654,`span`,42),_w(655,`this`),Tl(),_w(656,`._env.EnvironmentName == `),Wi$1(657,`span`,49),_w(658,`"Test"`),Tl(),_w(659,`)
                    {
                        `),Wi$1(660,`span`,42),_w(661,`if`),Tl(),_w(662,` (clientIp == `),Wi$1(663,`span`,49),_w(664,`"0.0.0.0"`),Tl(),_w(665,`)
                        {
                            `),Wi$1(666,`span`,42),_w(667,`await`),Tl(),_w(668,` Task.FromException(`),Wi$1(669,`span`,42),_w(670,`new`),Tl(),_w(671,` MatchingRulesException(`),Wi$1(672,`span`,49),_w(673,`$"This is a test. ClientIp: `),Wi$1(674,`span`,57),_w(675,`{identity.ClientIp}`),Tl(),_w(676,`"`),Tl(),_w(677,`));
                        }
                    }

                    IEnumerable<RateLimitRule> rules = `),Wi$1(678,`span`,47),_w(679,`null`),Tl(),_w(680,`;
                    rules = `),Wi$1(681,`span`,42),_w(682,`await`),Tl(),_w(683,` _processor.GetMatchingRulesAsync(identity, context.RequestAborted);
                    `),Wi$1(684,`span`,42),_w(685,`if`),Tl(),_w(686,` (rules == `),Wi$1(687,`span`,47),_w(688,`null`),Tl(),_w(689,`)
                    {
                        `),Wi$1(690,`span`,42),_w(691,`if`),Tl(),_w(692,` (`),Wi$1(693,`span`,42),_w(694,`this`),Tl(),_w(695,`._env.EnvironmentName == `),Wi$1(696,`span`,49),_w(697,`"Test"`),Tl(),_w(698,`)
                        {
                            `),Wi$1(699,`span`,42),_w(700,`await`),Tl(),_w(701,` Task.FromException(`),Wi$1(702,`span`,42),_w(703,`new`),Tl(),_w(704,` MatchingRulesException(`),Wi$1(705,`span`,49),_w(706,`$"This is a test. ClientIp: `),Wi$1(707,`span`,57),_w(708,`{identity.ClientIp}`),Tl(),_w(709,`"`),Tl(),_w(710,`));
                        }
                        `),Wi$1(711,`span`,42),_w(712,`else`),Tl(),_w(713,`
                        {
                            `),Wi$1(714,`span`,42),_w(715,`await`),Tl(),_w(716,` ReturnSecurityTokenRefreshRate(context, `),Wi$1(717,`span`,49),_w(718,`"MatchingRulesException"`),Tl(),_w(719,`, `),Wi$1(720,`span`,49),_w(721,`$"Matching rules is null. Your IP address is: `),Wi$1(722,`span`,57),_w(723,`{identity.ClientIp}`),Tl(),_w(724,`"`),Tl(),_w(725,`);
                            `),Wi$1(726,`span`,42),_w(727,`return`),Tl(),_w(728,`;
                        }
                    }

                    `),Wi$1(729,`span`,42),_w(730,`var`),Tl(),_w(731,` rulesDict = `),Wi$1(732,`span`,42),_w(733,`new`),Tl(),_w(734,` Dictionary<RateLimitRule, RateLimitCounter>();

                    `),Wi$1(735,`span`,42),_w(736,`foreach`),Tl(),_w(737,` (`),Wi$1(738,`span`,42),_w(739,`var`),Tl(),_w(740,` rule `),Wi$1(741,`span`,42),_w(742,`in`),Tl(),_w(743,` rules)
                    {
                        `),Wi$1(744,`span`,56),_w(745,`// increment counter`),Tl(),_w(746,`
                        `),Wi$1(747,`span`,42),_w(748,`var`),Tl(),_w(749,` rateLimitCounter = `),Wi$1(750,`span`,42),_w(751,`await`),Tl(),_w(752,` _processor.ProcessRequestAsync(identity, rule, context.RequestAborted);

                        `),Wi$1(753,`span`,42),_w(754,`if`),Tl(),_w(755,` (rule.Limit > `),Wi$1(756,`span`,58),_w(757,`0`),Tl(),_w(758,`)
                        {
                            `),Wi$1(759,`span`,56),_w(760,`// check if key expired`),Tl(),_w(761,`
                            `),Wi$1(762,`span`,42),_w(763,`if`),Tl(),_w(764,` (rateLimitCounter.Timestamp + rule.PeriodTimespan.Value < DateTime.UtcNow)
                            {
                                `),Wi$1(765,`span`,42),_w(766,`continue`),Tl(),_w(767,`;
                            }

                            `),Wi$1(768,`span`,56),_w(769,`// check if limit is reached`),Tl(),_w(770,`
                            `),Wi$1(771,`span`,42),_w(772,`if`),Tl(),_w(773,` (rateLimitCounter.Count > rule.Limit)
                            {
                                `),Wi$1(774,`span`,56),_w(775,`//compute retry after value`),Tl(),_w(776,`
                                `),Wi$1(777,`span`,42),_w(778,`var`),Tl(),_w(779,` retryAfter = rateLimitCounter.Timestamp.RetryAfterFrom(rule);

                                `),Wi$1(780,`span`,56),_w(781,`// log blocked request`),Tl(),_w(782,`
                                `),Wi$1(783,`span`,56),_w(784,`//LogBlockedRequest(context, identity, rateLimitCounter, rule);`),Tl(),_w(785,`

                                `),Wi$1(786,`span`,42),_w(787,`if`),Tl(),_w(788,` (_options.RequestBlockedBehaviorAsync != `),Wi$1(789,`span`,47),_w(790,`null`),Tl(),_w(791,`)
                                {
                                    `),Wi$1(792,`span`,42),_w(793,`await`),Tl(),_w(794,` _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                                }

                                `),Wi$1(795,`span`,42),_w(796,`if`),Tl(),_w(797,` (`),Wi$1(798,`span`,42),_w(799,`this`),Tl(),_w(800,`._env.EnvironmentName == `),Wi$1(801,`span`,49),_w(802,`"Test"`),Tl(),_w(803,`)
                                {
                                    `),Wi$1(804,`span`,42),_w(805,`await`),Tl(),_w(806,` Task.FromException(`),Wi$1(807,`span`,42),_w(808,`new`),Tl(),_w(809,` RateLimitMiddlewareException(`),Wi$1(810,`span`,49),_w(811,`$"This is a test. rateLimitCounter.Count `),Wi$1(812,`span`,57),_w(813,`{rateLimitCounter.Count}`),Tl(),_w(814,` rule.Limit: `),Wi$1(815,`span`,57),_w(816,`{rule.Limit}`),Tl(),_w(817,` ClientIp: `),Wi$1(818,`span`,57),_w(819,`{identity.ClientIp}`),Tl(),_w(820,`"`),Tl(),_w(821,`));
                                }

                                `),Wi$1(822,`span`,42),_w(823,`if`),Tl(),_w(824,` (!rule.MonitorMode)
                                {
                                    `),Wi$1(825,`span`,56),_w(826,`// break execution`),Tl(),_w(827,`
                                    `),Wi$1(828,`span`,42),_w(829,`await`),Tl(),_w(830,` ReturnQuotaExceededResponse(context, rule, retryAfter, identity.ClientIp);

                                    `),Wi$1(831,`span`,42),_w(832,`return`),Tl(),_w(833,`;
                                }
                            }
                        }
                        `),Wi$1(834,`span`,56),_w(835,`// if limit is zero or less, block the request.`),Tl(),_w(836,`
                        `),Wi$1(837,`span`,42),_w(838,`else`),Tl(),_w(839,`
                        {
                            `),Wi$1(840,`span`,56),_w(841,`// log blocked request`),Tl(),_w(842,`
                            `),Wi$1(843,`span`,56),_w(844,`//LogBlockedRequest(context, identity, rateLimitCounter, rule);`),Tl(),_w(845,`

                            `),Wi$1(846,`span`,42),_w(847,`if`),Tl(),_w(848,` (_options.RequestBlockedBehaviorAsync != `),Wi$1(849,`span`,47),_w(850,`null`),Tl(),_w(851,`)
                            {
                                `),Wi$1(852,`span`,42),_w(853,`await`),Tl(),_w(854,` _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                            }

                            `),Wi$1(855,`span`,42),_w(856,`if`),Tl(),_w(857,` (`),Wi$1(858,`span`,42),_w(859,`this`),Tl(),_w(860,`._env.EnvironmentName == `),Wi$1(861,`span`,49),_w(862,`"Test"`),Tl(),_w(863,`)
                            {
                                `),Wi$1(864,`span`,42),_w(865,`await`),Tl(),_w(866,` Task.FromException(`),Wi$1(867,`span`,42),_w(868,`new`),Tl(),_w(869,` RateLimitMiddlewareException(`),Wi$1(870,`span`,49),_w(871,`$"This is a test. rateLimitCounter.Count `),Wi$1(872,`span`,57),_w(873,`{rateLimitCounter.Count}`),Tl(),_w(874,` rule.Limit: `),Wi$1(875,`span`,57),_w(876,`{rule.Limit}`),Tl(),_w(877,` ClientIp: `),Wi$1(878,`span`,57),_w(879,`{identity.ClientIp}`),Tl(),_w(880,`"`),Tl(),_w(881,`));
                            }

                            `),Wi$1(882,`span`,42),_w(883,`if`),Tl(),_w(884,` (!rule.MonitorMode)
                            {
                                `),Wi$1(885,`span`,56),_w(886,`// break execution (Int32 max used to represent infinity)`),Tl(),_w(887,`
                                `),Wi$1(888,`span`,42),_w(889,`await`),Tl(),_w(890,` ReturnQuotaExceededResponse(context, rule, `),Wi$1(891,`span`,48),_w(892,`int`),Tl(),_w(893,`.MaxValue.ToString(System.Globalization.CultureInfo.InvariantCulture), identity.ClientIp);

                                `),Wi$1(894,`span`,42),_w(895,`return`),Tl(),_w(896,`;
                            }
                        }

                        rulesDict.Add(rule, rateLimitCounter);
                    }

                    `),Wi$1(897,`span`,56),_w(898,`// set X-Rate-Limit headers for the longest period`),Tl(),_w(899,`
                    `),Wi$1(900,`span`,42),_w(901,`if`),Tl(),_w(902,` (rulesDict.Count != `),Wi$1(903,`span`,58),_w(904,`0`),Tl(),_w(905,` && !_options.DisableRateLimitHeaders)
                    {
                        `),Wi$1(906,`span`,42),_w(907,`var`),Tl(),_w(908,` rule = rulesDict.OrderByDescending(x => x.Key.PeriodTimespan).FirstOrDefault();
                        `),Wi$1(909,`span`,42),_w(910,`var`),Tl(),_w(911,` headers = _processor.GetRateLimitHeaders(rule.Value, rule.Key, context.RequestAborted);

                        headers.Context = context;

                        context.Response.OnStarting(SetRateLimitHeaders, state: headers);
                    }
                }
                `),Wi$1(912,`span`,41),_w(913,`#`),Wi$1(914,`span`,42),_w(915,`endregion`),Tl()(),_w(916,`
            }

            `),Wi$1(917,`span`,42),_w(918,`if`),Tl(),_w(919,` (`),Wi$1(920,`span`,42),_w(921,`this`),Tl(),_w(922,`._env.EnvironmentName == `),Wi$1(923,`span`,49),_w(924,`"Test"`),Tl(),_w(925,`)
            {
                `),Wi$1(926,`span`,42),_w(927,`await`),Tl(),_w(928,` Task.FromResult(`),Wi$1(929,`span`,47),_w(930,`true`),Tl(),_w(931,`);
            }
            `),Wi$1(932,`span`,42),_w(933,`else`),Tl(),_w(934,`
            {
                `),Wi$1(935,`span`,42),_w(936,`await`),Tl(),_w(937,` _next.Invoke(context);
            }
        }

        `),Wi$1(938,`span`,54)(939,`span`,42),_w(940,`private`),Tl(),_w(941,` `),Wi$1(942,`span`,42),_w(943,`static`),Tl(),_w(944,` Task `),Wi$1(945,`span`,53),_w(946,`ReturnSecurityTokenRefreshRate`),Tl(),_w(947,`(`),Wi$1(948,`span`,55),_w(949,`HttpContext context, `),Wi$1(950,`span`,48),_w(951,`string`),Tl(),_w(952,` key, `),Wi$1(953,`span`,48),_w(954,`string`),Tl(),_w(955,` message`),Tl(),_w(956,`)`),Tl(),_w(957,`
        {
            context.Response.ContentType = `),Wi$1(958,`span`,49),_w(959,`"application/json"`),Tl(),_w(960,`;
            context.Response.StatusCode = (`),Wi$1(961,`span`,48),_w(962,`int`),Tl(),_w(963,`)HttpStatusCode.UnprocessableEntity;

            `),Wi$1(964,`span`,42),_w(965,`var`),Tl(),_w(966,` result = SerializeObject(`),Wi$1(967,`span`,42),_w(968,`new`),Tl(),_w(969,` ErrorListResult(key,
                        [
                            message
                        ]));

            `),Wi$1(970,`span`,42),_w(971,`return`),Tl(),_w(972,` context.Response.WriteAsync(result);
        }

        `),Wi$1(973,`span`,54)(974,`span`,42),_w(975,`private`),Tl(),_w(976,` `),Wi$1(977,`span`,42),_w(978,`static`),Tl(),_w(979,` `),Wi$1(980,`span`,48),_w(981,`string`),Tl(),_w(982,` `),Wi$1(983,`span`,53),_w(984,`SerializeObject`),Tl(),_w(985,`(`),Wi$1(986,`span`,55)(987,`span`,48),_w(988,`object`),Tl(),_w(989,` obj`),Tl(),_w(990,`)`),Tl(),_w(991,`
            => JsonConvert.SerializeObject(obj, `),Wi$1(992,`span`,42),_w(993,`new`),Tl(),_w(994,` JsonSerializerSettings
            {
                ContractResolver = `),Wi$1(995,`span`,42),_w(996,`new`),Tl(),_w(997,` DefaultContractResolver
                {
                    NamingStrategy = `),Wi$1(998,`span`,42),_w(999,`new`),Tl(),_w(1e3,` CamelCaseNamingStrategy(`),Wi$1(1001,`span`,47),_w(1002,`true`),Tl(),_w(1003,`, `),Wi$1(1004,`span`,47),_w(1005,`true`),Tl(),_w(1006,`)
                }
            });

        `),Wi$1(1007,`span`,54)(1008,`span`,42),_w(1009,`public`),Tl(),_w(1010,` `),Wi$1(1011,`span`,42),_w(1012,`virtual`),Tl(),_w(1013,` Task `),Wi$1(1014,`span`,53),_w(1015,`ReturnQuotaExceededResponse`),Tl(),_w(1016,`(`),Wi$1(1017,`span`,55),_w(1018,`HttpContext httpContext, RateLimitRule rule, `),Wi$1(1019,`span`,48),_w(1020,`string`),Tl(),_w(1021,` retryAfter, `),Wi$1(1022,`span`,48),_w(1023,`string`),Tl(),_w(1024,` clientIp`),Tl(),_w(1025,`)`),Tl(),_w(1026,`
        {
            `),Wi$1(1027,`span`,56),_w(1028,`//Use Endpoint QuotaExceededResponse`),Tl(),_w(1029,`
            `),Wi$1(1030,`span`,42),_w(1031,`if`),Tl(),_w(1032,` (rule.QuotaExceededResponse != `),Wi$1(1033,`span`,47),_w(1034,`null`),Tl(),_w(1035,`)
            {
                _options.QuotaExceededResponse = rule.QuotaExceededResponse;
            }
            `),Wi$1(1036,`span`,42),_w(1037,`var`),Tl(),_w(1038,` message = `),Wi$1(1039,`span`,48),_w(1040,`string`),Tl(),_w(1041,`.Format(
                    _options.QuotaExceededResponse?.Content ??
                    _options.QuotaExceededMessage ??
                    `),Wi$1(1042,`span`,49),_w(1043,`"Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP adress is {3}"`),Tl(),_w(1044,`,
                    rule.Limit,
                    rule.PeriodTimespan.HasValue ? FormatPeriodTimespan(rule.PeriodTimespan.Value) : rule.Period, retryAfter, clientIp
             );

            `),Wi$1(1045,`span`,42),_w(1046,`if`),Tl(),_w(1047,` (!_options.DisableRateLimitHeaders)
            {
                httpContext.Response.Headers.RetryAfter = retryAfter;
            }

            httpContext.Response.ContentType = _options.QuotaExceededResponse?.ContentType ?? `),Wi$1(1048,`span`,49),_w(1049,`"text/plain"`),Tl(),_w(1050,`;
            httpContext.Response.StatusCode = _options.QuotaExceededResponse?.StatusCode ?? _options.HttpStatusCode;


            `),Wi$1(1051,`span`,42),_w(1052,`var`),Tl(),_w(1053,` result = SerializeObject(`),Wi$1(1054,`span`,42),_w(1055,`new`),Tl(),_w(1056,` ErrorListResult(`),Wi$1(1057,`span`,49),_w(1058,`"QuotaExceeded"`),Tl(),_w(1059,`,
                        [
                            message
                        ]));

            `),Wi$1(1060,`span`,42),_w(1061,`return`),Tl(),_w(1062,` httpContext.Response.WriteAsync(result);
        }

        `),Wi$1(1063,`span`,54)(1064,`span`,42),_w(1065,`private`),Tl(),_w(1066,` `),Wi$1(1067,`span`,42),_w(1068,`static`),Tl(),_w(1069,` `),Wi$1(1070,`span`,48),_w(1071,`string`),Tl(),_w(1072,` `),Wi$1(1073,`span`,53),_w(1074,`FormatPeriodTimespan`),Tl(),_w(1075,`(`),Wi$1(1076,`span`,55),_w(1077,`TimeSpan period`),Tl(),_w(1078,`)`),Tl(),_w(1079,`
        {
            `),Wi$1(1080,`span`,42),_w(1081,`var`),Tl(),_w(1082,` sb = `),Wi$1(1083,`span`,42),_w(1084,`new`),Tl(),_w(1085,` StringBuilder();

            `),Wi$1(1086,`span`,42),_w(1087,`if`),Tl(),_w(1088,` (period.Days > `),Wi$1(1089,`span`,58),_w(1090,`0`),Tl(),_w(1091,`)
            {
                sb.Append(`),Wi$1(1092,`span`,49),_w(1093,`$"`),Wi$1(1094,`span`,57),_w(1095,`{period.Days}`),Tl(),_w(1096,`d"`),Tl(),_w(1097,`);
            }

            `),Wi$1(1098,`span`,42),_w(1099,`if`),Tl(),_w(1100,` (period.Hours > `),Wi$1(1101,`span`,58),_w(1102,`0`),Tl(),_w(1103,`)
            {
                sb.Append(`),Wi$1(1104,`span`,49),_w(1105,`$"`),Wi$1(1106,`span`,57),_w(1107,`{period.Hours}`),Tl(),_w(1108,`h"`),Tl(),_w(1109,`);
            }

            `),Wi$1(1110,`span`,42),_w(1111,`if`),Tl(),_w(1112,` (period.Minutes > `),Wi$1(1113,`span`,58),_w(1114,`0`),Tl(),_w(1115,`)
            {
                sb.Append(`),Wi$1(1116,`span`,49),_w(1117,`$"`),Wi$1(1118,`span`,57),_w(1119,`{period.Minutes}`),Tl(),_w(1120,`m"`),Tl(),_w(1121,`);
            }

            `),Wi$1(1122,`span`,42),_w(1123,`if`),Tl(),_w(1124,` (period.Seconds > `),Wi$1(1125,`span`,58),_w(1126,`0`),Tl(),_w(1127,`)
            {
                sb.Append(`),Wi$1(1128,`span`,49),_w(1129,`$"`),Wi$1(1130,`span`,57),_w(1131,`{period.Seconds}`),Tl(),_w(1132,`s"`),Tl(),_w(1133,`);
            }

            `),Wi$1(1134,`span`,42),_w(1135,`if`),Tl(),_w(1136,` (period.Milliseconds > `),Wi$1(1137,`span`,58),_w(1138,`0`),Tl(),_w(1139,`)
            {
                sb.Append(`),Wi$1(1140,`span`,49),_w(1141,`$"`),Wi$1(1142,`span`,57),_w(1143,`{period.Milliseconds}`),Tl(),_w(1144,`ms"`),Tl(),_w(1145,`);
            }

            `),Wi$1(1146,`span`,42),_w(1147,`return`),Tl(),_w(1148,` sb.ToString();
        }

        `),Wi$1(1149,`span`,56),_w(1150,`//protected abstract void LogBlockedRequest(HttpContext httpContext, ClientRequestIdentity identity, RateLimitCounter counter, RateLimitRule rule);`),Tl(),_w(1151,`
        `),Wi$1(1152,`span`,54)(1153,`span`,42),_w(1154,`protected`),Tl(),_w(1155,` `),Wi$1(1156,`span`,42),_w(1157,`abstract`),Tl(),_w(1158,` `),Wi$1(1159,`span`,42),_w(1160,`void`),Tl(),_w(1161,` `),Wi$1(1162,`span`,53),_w(1163,`LogBlockedRequest`),Tl(),_w(1164,`(`),Wi$1(1165,`span`,55),_w(1166,`HttpContext httpContext, ClientRequestIdentity identity, `),Wi$1(1167,`span`,48),_w(1168,`string`),Tl(),_w(1169,` message`),Tl(),_w(1170,`)`),Tl(),_w(1171,`;
        `),Wi$1(1172,`span`,54)(1173,`span`,42),_w(1174,`private`),Tl(),_w(1175,` Task `),Wi$1(1176,`span`,53),_w(1177,`SetRateLimitHeaders`),Tl(),_w(1178,`(`),Wi$1(1179,`span`,55)(1180,`span`,48),_w(1181,`object`),Tl(),_w(1182,` rateLimitHeaders`),Tl(),_w(1183,`)`),Tl(),_w(1184,`
        {
            `),Wi$1(1185,`span`,42),_w(1186,`var`),Tl(),_w(1187,` headers = (RateLimitHeaders)rateLimitHeaders;

            headers.Context.Response.Headers[`),Wi$1(1188,`span`,49),_w(1189,`"X-Rate-Limit-Limit"`),Tl(),_w(1190,`] = headers.Limit;
            headers.Context.Response.Headers[`),Wi$1(1191,`span`,49),_w(1192,`"X-Rate-Limit-Remaining"`),Tl(),_w(1193,`] = headers.Remaining;
            headers.Context.Response.Headers[`),Wi$1(1194,`span`,49),_w(1195,`"X-Rate-Limit-Reset"`),Tl(),_w(1196,`] = headers.Reset;

            `),Wi$1(1197,`span`,42),_w(1198,`return`),Tl(),_w(1199,` Task.CompletedTask;
        }
    }
}`),Tl()(),Wi$1(1200,`h2`,59)(1201,`span`),_w(1202,`Testing of RateLimitMiddleware With MyTested Library`),Tl(),Wi$1(1203,`a`,60),_w(1204,`#`),Tl()(),Wi$1(1205,`p`),_w(1206,`From the start, we need to keep in mind that MyTested does not provide support for middleware testing. So, we found a work around which is not 100% accurate. The main idea is that you have to setup the middleware manually in the right place to be logically correct. In our case, we’ve got `),Wi$1(1207,`code`),_w(1208,`GetTagsWithRateLimitMiddleware`),Tl(),_w(1209,` and `),Wi$1(1210,`code`),_w(1211,`GetAllWithRateLimitMiddleware`),Tl(),_w(1212,` from `),Wi$1(1213,`a`,61),_w(1214,`StaticTestData.cs`),Tl(),_w(1215,`). Also, RateLimitMiddleware needs shared `),Wi$1(1216,`code`),_w(1217,`MemoryCache`),Tl(),_w(1218,`. On the other hand, MyTested just simulates shared `),Wi$1(1219,`code`),_w(1220,`MeroryCache`),Tl(),_w(1221,`. So, we modified source code of MyTested to work with the actual `),Wi$1(1222,`code`),_w(1223,`MeroryCache`),Tl(),_w(1224,` Also, we introduced an option `),Wi$1(1225,`code`),_w(1226,`”ReplaceMemoryCache": false`),Tl(),_w(1227,` (See `),Wi$1(1228,`a`,62),_w(1229,`testsettings.json`),Tl(),_w(1230,`). From our modified source code of RateLimitMiddleware, you can see that we try to keep the original functional and add JWT token refresh concept also. As a result, we’ve got following limitations:`),Tl(),Wi$1(1231,`ul`)(1232,`li`),_w(1233,`the `),Wi$1(1234,`code`),_w(1235,`clientId`),Tl(),_w(1236,` is taken from JWT token only`),Tl(),Wi$1(1237,`li`),_w(1238,`the `),Wi$1(1239,`code`),_w(1240,`clientIp`),Tl(),_w(1241,` is taken from `),Wi$1(1242,`code`),_w(1243,`context.Connection.RemoteIpAddress`),Tl(),_w(1244,` only`),Tl(),Wi$1(1245,`li`)(1246,`code`),_w(1247,`ClientWhitelist`),Tl(),_w(1248,` configuration option does not work with public endpoints, and it should be empty.
Also, the \u201Ccorrect way\u201D to configure it is following:`),Tl()(),Wi$1(1249,`pre`,40)(1250,`code`),_w(1251,`...
.UseRouting()
.InitializeRateLimit()
.UseMiddleware<IpRateLimitMiddleware>()
.UseAuthentication()
.UseAuthorization()
.UseMiddleware<ClientRateLimitMiddleware>()
...`),Tl()(),Wi$1(1252,`p`),_w(1253,`All our middleware tests are in `),Wi$1(1254,`a`,63),_w(1255,`RateLimit`),Tl(),_w(1256,` folder. For token refresh concept, we’ve got just two tests: `),Wi$1(1257,`code`),_w(1258,`Edit_tag_with_refresh_token_should_fail`),Tl(),_w(1259,` and `),Wi$1(1260,`code`),_w(1261,`Login_with_password_with_refresh_token_and_whitelisted_private_route_should_return_success_with_token`),Tl(),_w(1262,`. One interesting idea of a test( See `),Wi$1(1263,`a`,64),_w(1264,`AsyncKeyedLockTest.cs`),Tl(),_w(1265,`) comes from `),Wi$1(1266,`a`,65),_w(1267,`AsyncKeyedLock`),Tl(),_w(1268,`.
Also, we made some additional small changes in AspNetCoreRateLimit library by borrowing some ideas from `),Wi$1(1269,`a`,66),_w(1270,`Edi.CacheAside.InMemory`),Tl(),_w(1271,`. Finaly, we’ve used following settings for our tests project:`),Tl(),Wi$1(1272,`h3`,67)(1273,`span`),_w(1274,`Test Settings`),Tl(),Wi$1(1275,`a`,68),_w(1276,`#`),Tl()(),Wi$1(1277,`pre`,69)(1278,`code`),_w(1279,` `),Wi$1(1280,`span`,70),_w(1281,`{`),Tl(),_w(1282,`
  `),Wi$1(1283,`span`,71),_w(1284,`"General"`),Tl(),Wi$1(1285,`span`,70),_w(1286,`:`),Tl(),_w(1287,` `),Wi$1(1288,`span`,70),_w(1289,`{`),Tl(),_w(1290,`
    `),Wi$1(1291,`span`,71),_w(1292,`"ReplaceMemoryCache"`),Tl(),Wi$1(1293,`span`,70),_w(1294,`:`),Tl(),_w(1295,` `),Wi$1(1296,`span`,47)(1297,`span`,42),_w(1298,`false`),Tl()(),_w(1299,`
  `),Wi$1(1300,`span`,70),_w(1301,`}`),Tl(),Wi$1(1302,`span`,70),_w(1303,`,`),Tl(),_w(1304,`

  `),Wi$1(1305,`span`,71),_w(1306,`"ApplicationSettings"`),Tl(),Wi$1(1307,`span`,70),_w(1308,`:`),Tl(),_w(1309,` `),Wi$1(1310,`span`,70),_w(1311,`{`),Tl(),_w(1312,`
    `),Wi$1(1313,`span`,71),_w(1314,`"SecurityTokenDescriptorKey"`),Tl(),Wi$1(1315,`span`,70),_w(1316,`:`),Tl(),_w(1317,` `),Wi$1(1318,`span`,49),_w(1319,`"test1223dfgdfkffpie"`),Tl(),Wi$1(1320,`span`,70),_w(1321,`,`),Tl(),_w(1322,`
    `),Wi$1(1323,`span`,71),_w(1324,`"SecurityTokenDescriptorExpiresInMinutes"`),Tl(),Wi$1(1325,`span`,70),_w(1326,`:`),Tl(),_w(1327,` `),Wi$1(1328,`span`,58),_w(1329,`10`),Tl(),Wi$1(1330,`span`,70),_w(1331,`,`),Tl(),_w(1332,`
    `),Wi$1(1333,`span`,71),_w(1334,`"SecurityTokenRefreshRate"`),Tl(),Wi$1(1335,`span`,70),_w(1336,`:`),Tl(),_w(1337,` `),Wi$1(1338,`span`,58),_w(1339,`0.5`),Tl(),Wi$1(1340,`span`,70),_w(1341,`,`),Tl(),_w(1342,`
    `),Wi$1(1343,`span`,71),_w(1344,`"MaxFailedAccessAttempts"`),Tl(),Wi$1(1345,`span`,70),_w(1346,`:`),Tl(),_w(1347,` `),Wi$1(1348,`span`,58),_w(1349,`5`),Tl(),Wi$1(1350,`span`,70),_w(1351,`,`),Tl(),_w(1352,`
    `),Wi$1(1353,`span`,71),_w(1354,`"DefaultLockoutTimeSpanInMinutes"`),Tl(),Wi$1(1355,`span`,70),_w(1356,`:`),Tl(),_w(1357,` `),Wi$1(1358,`span`,58),_w(1359,`0`),Tl(),Wi$1(1360,`span`,70),_w(1361,`,`),Tl(),_w(1362,`
    `),Wi$1(1363,`span`,71),_w(1364,`"ExperimentalIpAddress"`),Tl(),Wi$1(1365,`span`,70),_w(1366,`:`),Tl(),_w(1367,` `),Wi$1(1368,`span`,49),_w(1369,`"::1"`),Tl(),_w(1370,`
  `),Wi$1(1371,`span`,70),_w(1372,`}`),Tl(),Wi$1(1373,`span`,70),_w(1374,`,`),Tl(),_w(1375,`

  `),Wi$1(1376,`span`,71),_w(1377,`"IpRateLimiting"`),Tl(),Wi$1(1378,`span`,70),_w(1379,`:`),Tl(),_w(1380,` `),Wi$1(1381,`span`,70),_w(1382,`{`),Tl(),_w(1383,`
    `),Wi$1(1384,`span`,71),_w(1385,`"EnableEndpointRateLimiting"`),Tl(),Wi$1(1386,`span`,70),_w(1387,`:`),Tl(),_w(1388,` `),Wi$1(1389,`span`,47)(1390,`span`,42),_w(1391,`true`),Tl()(),Wi$1(1392,`span`,70),_w(1393,`,`),Tl(),_w(1394,`
    `),Wi$1(1395,`span`,71),_w(1396,`"SecurityTokenRefreshRate"`),Tl(),Wi$1(1397,`span`,70),_w(1398,`:`),Tl(),_w(1399,` `),Wi$1(1400,`span`,58),_w(1401,`0.5`),Tl(),Wi$1(1402,`span`,70),_w(1403,`,`),Tl(),_w(1404,`
    `),Wi$1(1405,`span`,71),_w(1406,`"StackBlockedRequests"`),Tl(),Wi$1(1407,`span`,70),_w(1408,`:`),Tl(),_w(1409,` `),Wi$1(1410,`span`,47)(1411,`span`,42),_w(1412,`false`),Tl()(),Wi$1(1413,`span`,70),_w(1414,`,`),Tl(),_w(1415,`
    `),Wi$1(1416,`span`,71),_w(1417,`"RealIpHeader"`),Tl(),Wi$1(1418,`span`,70),_w(1419,`:`),Tl(),_w(1420,` `),Wi$1(1421,`span`,49),_w(1422,`"X-Real-IP"`),Tl(),Wi$1(1423,`span`,70),_w(1424,`,`),Tl(),_w(1425,`
    `),Wi$1(1426,`span`,71),_w(1427,`"HttpStatusCode"`),Tl(),Wi$1(1428,`span`,70),_w(1429,`:`),Tl(),_w(1430,` `),Wi$1(1431,`span`,58),_w(1432,`429`),Tl(),Wi$1(1433,`span`,70),_w(1434,`,`),Tl(),_w(1435,`
    `),Wi$1(1436,`span`,71),_w(1437,`"IpWhitelist"`),Tl(),Wi$1(1438,`span`,70),_w(1439,`:`),Tl(),_w(1440,` `),Wi$1(1441,`span`,70),_w(1442,`[`),Tl(),_w(1443,` `),Wi$1(1444,`span`,49),_w(1445,`"::1/10"`),Tl(),Wi$1(1446,`span`,70),_w(1447,`,`),Tl(),_w(1448,` `),Wi$1(1449,`span`,49),_w(1450,`"192.168.0.0/24"`),Tl(),_w(1451,` `),Wi$1(1452,`span`,70),_w(1453,`]`),Tl(),Wi$1(1454,`span`,70),_w(1455,`,`),Tl(),_w(1456,`
    `),Wi$1(1457,`span`,71),_w(1458,`"EndpointWhitelist"`),Tl(),Wi$1(1459,`span`,70),_w(1460,`:`),Tl(),_w(1461,` `),Wi$1(1462,`span`,70),_w(1463,`[`),Tl(),_w(1464,`
      `),Wi$1(1465,`span`,49),_w(1466,`"post:/api/v1.0/identity"`),Tl(),Wi$1(1467,`span`,70),_w(1468,`,`),Tl(),_w(1469,`
      `),Wi$1(1470,`span`,49),_w(1471,`"post:/api/v1.0/identity/login"`),Tl(),Wi$1(1472,`span`,70),_w(1473,`,`),Tl(),_w(1474,`
      `),Wi$1(1475,`span`,49),_w(1476,`"get:/*.json"`),Tl(),Wi$1(1477,`span`,70),_w(1478,`,`),Tl(),_w(1479,`
      `),Wi$1(1480,`span`,49),_w(1481,`"get:/*.js"`),Tl(),Wi$1(1482,`span`,70),_w(1483,`,`),Tl(),_w(1484,`
      `),Wi$1(1485,`span`,49),_w(1486,`"get:/*.css"`),Tl(),Wi$1(1487,`span`,70),_w(1488,`,`),Tl(),_w(1489,`
      `),Wi$1(1490,`span`,49),_w(1491,`"get:/*.ico"`),Tl(),_w(1492,`
    `),Wi$1(1493,`span`,70),_w(1494,`]`),Tl(),Wi$1(1495,`span`,70),_w(1496,`,`),Tl(),_w(1497,`
    `),Wi$1(1498,`span`,71),_w(1499,`"ClientWhitelist"`),Tl(),Wi$1(1500,`span`,70),_w(1501,`:`),Tl(),_w(1502,` `),Wi$1(1503,`span`,70),_w(1504,`[`),Tl(),_w(1505,` `),Wi$1(1506,`span`,49),_w(1507,`"ClientWhitelist@email.com1"`),Tl(),_w(1508,` `),Wi$1(1509,`span`,70),_w(1510,`]`),Tl(),Wi$1(1511,`span`,70),_w(1512,`,`),Tl(),_w(1513,`
    `),Wi$1(1514,`span`,71),_w(1515,`"QuotaExceededResponse"`),Tl(),Wi$1(1516,`span`,70),_w(1517,`:`),Tl(),_w(1518,` `),Wi$1(1519,`span`,70),_w(1520,`{`),Tl(),_w(1521,`
      `),Wi$1(1522,`span`,71),_w(1523,`"Content"`),Tl(),Wi$1(1524,`span`,70),_w(1525,`:`),Tl(),_w(1526,` `),Wi$1(1527,`span`,49),_w(1528,`"Quota exceeded. Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP address is {3}"`),Tl(),Wi$1(1529,`span`,70),_w(1530,`,`),Tl(),_w(1531,`
      `),Wi$1(1532,`span`,71),_w(1533,`"ContentType"`),Tl(),Wi$1(1534,`span`,70),_w(1535,`:`),Tl(),_w(1536,` `),Wi$1(1537,`span`,49),_w(1538,`"application/json"`),Tl(),_w(1539,`
    `),Wi$1(1540,`span`,70),_w(1541,`}`),Tl(),Wi$1(1542,`span`,70),_w(1543,`,`),Tl(),_w(1544,`
    `),Wi$1(1545,`span`,71),_w(1546,`"GeneralRules"`),Tl(),Wi$1(1547,`span`,70),_w(1548,`:`),Tl(),_w(1549,` `),Wi$1(1550,`span`,70),_w(1551,`[`),Tl(),_w(1552,`
    `),Wi$1(1553,`span`,70),_w(1554,`]`),Tl(),_w(1555,`
  `),Wi$1(1556,`span`,70),_w(1557,`}`),Tl(),Wi$1(1558,`span`,70),_w(1559,`,`),Tl(),_w(1560,`

  `),Wi$1(1561,`span`,71),_w(1562,`"IpRateLimitPolicies"`),Tl(),Wi$1(1563,`span`,70),_w(1564,`:`),Tl(),_w(1565,` `),Wi$1(1566,`span`,70),_w(1567,`{`),Tl(),_w(1568,`
    `),Wi$1(1569,`span`,71),_w(1570,`"IpRules"`),Tl(),Wi$1(1571,`span`,70),_w(1572,`:`),Tl(),_w(1573,` `),Wi$1(1574,`span`,70),_w(1575,`[`),Tl(),_w(1576,`
    `),Wi$1(1577,`span`,70),_w(1578,`]`),Tl(),_w(1579,`
  `),Wi$1(1580,`span`,70),_w(1581,`}`),Tl(),_w(1582,`
`),Wi$1(1583,`span`,70),_w(1584,`}`),Tl()()(),Wi$1(1585,`h2`,72)(1586,`span`),_w(1587,`Proof of Concept`),Tl(),Wi$1(1588,`a`,73),_w(1589,`#`),Tl()(),Wi$1(1590,`ol`)(1591,`li`),_w(1592,`Clone `),Wi$1(1593,`a`,30),_w(1594,`our GitHub repository`),Tl()(),Wi$1(1595,`li`),_w(1596,`Follow the instruction form the Readme.md`),Tl(),Wi$1(1597,`li`),_w(1598,`Change following in `),Wi$1(1599,`a`,43),_w(1600,`appsettings.json`),Tl(),_w(1601,`: `),Wi$1(1602,`code`),_w(1603,`SecurityTokenDescriptorExpiresInMinutes`),Tl(),_w(1604,`: 10, `),Wi$1(1605,`code`),_w(1606,`SecurityTokenRefreshRate`),Tl(),_w(1607,`: 0.9 (both places)`),Tl(),Wi$1(1608,`li`),_w(1609,`Sign-in as admin using menu: Home -> Sign-in`),Tl(),Wi$1(1610,`li`),_w(1611,`Go to menu Admin->Articles editor`),Tl(),Wi$1(1612,`li`),_w(1613,`Click on New Article button.`),Tl(),Wi$1(1614,`li`),_w(1615,`Fill in the form and wait for 2 minutes.`),Tl(),Wi$1(1616,`li`),_w(1617,`Click Submit button and Yes button`),Tl(),Wi$1(1618,`li`),_w(1619,`A drawer must show up asking to confirm password. It means that your JWT token expired, but you can refresh it.`),Tl()(),Wi$1(1620,`h2`,74)(1621,`span`),_w(1622,`Conclusion`),Tl(),Wi$1(1623,`a`,75),_w(1624,`#`),Tl()(),Wi$1(1625,`p`),_w(1626,`In this article, we introduced JWT token Refresh period concept and used a middleware to implement it. In fact, we used modified source code of RateLimitMiddleware from AspNetCoreRateLimit library. It means that it still can be used to limit public endpoints (See `),Wi$1(1627,`a`,43),_w(1628,`GeneralRules`),Tl(),_w(1629,` example). We implemented a way for testing the middleware with MyTested library. Finally, we provided a compiled .NET application for proof of concept.`),Tl(),Wi$1(1630,`h2`,76)(1631,`span`),_w(1632,`Credits`),Tl(),Wi$1(1633,`a`,77),_w(1634,`#`),Tl()(),Wi$1(1635,`ul`)(1636,`li`)(1637,`a`,78),_w(1638,`Ivaylo Kenov`),Tl()(),Wi$1(1639,`li`)(1640,`a`,79),_w(1641,`Kalin Tsenkov`),Tl()(),Wi$1(1642,`li`)(1643,`a`,80),_w(1644,`Steve Smith`),Tl()(),Wi$1(1645,`li`)(1646,`a`,81),_w(1647,`Jason Taylor`),Tl()(),Wi$1(1648,`li`)(1649,`a`,82),_w(1650,`Stefan Prodan`),Tl()(),Wi$1(1651,`li`)(1652,`a`,83),_w(1653,`Mark Cilia Vincenti`),Tl()(),Wi$1(1654,`li`)(1655,`a`,84),_w(1656,`Jimmy Bogard`),Tl()(),Wi$1(1657,`li`)(1658,`a`,85),_w(1659,`Ben Morris`),Tl()()()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,Vw(7,yi)),cD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,bg,sd,cr,ir,Fa,p9,d9,Vn,qi$1,_n,ji$1,Jo,Za,Dl,ga$1,ma$1,So,Ve$1,pe,_u],encapsulation:2})}return a})();var ki=()=>({standalone:!0});function vi(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,74),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,75),tg(3,`nz-icon`,76),Tl()(),Sl()}}function Ni(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,74),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,75),_w(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var mt=110;var Un=(()=>{class a{destroyRef=_(ae);router=_(Te$1);#e=_(Z0);injector=_(se);viewPort=_(d7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){oV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-mt>640?this.width.set(640):this.width.set(this.windowWidth()-mt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-mt>640?this.width.set(640):this.width.set(i-mt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(rV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`nz-blog-testing-angular-apps`]],features:[jw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:206,vars:20,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-c8cadc22`,`nzTitle`,`Testing tools for Angular`],[`nzHref`,`#h-704dc335`,`nzTitle`,`Testing Angular app together with .NET Core app`],[`nzHref`,`#h-eacbc5c7`,`nzTitle`,`Using Signal type in Angular together with Reactive State library`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241110-testing-angular-apps.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[1,`pic-plus`,2,`text-align`,`center`],[`nzType`,`custom:zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:angular`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:ng-zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-row`,``,`nzJustify`,`center`,1,`p-t-24`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/angular-test-example/refs/heads/main/version-2/test-run.png`,`alt`,`test-run`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`href`,`https://cioina.azurewebsites.net/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/huajian123/ng-antd-admin`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/AndyT2503/angular-conduit-signals`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-angular/src`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ngrx/platform/tree/main/modules/component-store/src`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/AndyT2503/angular-conduit-signals/blob/dev/src/app/shared/store/auth.store.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0/wwwroot`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-c8cadc22`],[`onclick`,`window.location.hash = 'h-c8cadc22'`,1,`anchor`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/package.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/angular/angular/blob/main/adev/BUILD.bazel`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-javascript`],[1,`hljs-keyword`],[1,`hljs-title`,`class_`],[1,`hljs-string`],[`id`,`h-704dc335`],[`onclick`,`window.location.hash = 'h-704dc335'`,1,`anchor`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://cioina.azurewebsites.net/articles/dotnet-core-testing`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-test-example/tree/main/version-2`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-test-example/blob/main/version-2/home.store.spec.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/ng-zorro-antd-site`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/vitest-browser-angular`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/realworld-apps/realworld/blob/main/specs/api/README.md`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-vite-storybook/blob/main/src/stories/page.stories.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/apps/conduit-e2e/src/auth/auth.spec.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-eacbc5c7`],[`onclick`,`window.location.hash = 'h-eacbc5c7'`,1,`anchor`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/angular-test-example/refs/heads/main/vs.png`,`alt`,`vs`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/angular-test-example/refs/heads/main/ng-blog.png`,`alt`,`ng-blog`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`href`,`https://github.com/ngrx/platform`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-test-example/tree/main/version-1`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/libs/auth/data-access/src/auth.store.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/angular/angular/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ant-design/ant-design-icons/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ngrx/platform/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/huajian123`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/AndyT2503`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanoslig`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(Wi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,vi,4,0,`ng-container`,5)(6,Ni,4,0,`ng-container`,5),Tl()()(),Wi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),_w(11,`Jump to top`),Tl()(),Wi$1(12,`div`,3)(13,`nz-switch`,9),sD(),Ag(`ngModelChange`,function(g){return xw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),Wi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15),Tl()(),Wi$1(20,`span`,16),_w(21,` Testing Angular Applications`),tg(22,`span`,17)(23,`span`,18),Wi$1(24,`a`,19),tg(25,`nz-icon`,20),Tl()(),Wi$1(26,`article`,21)(27,`h2`,22)(28,`span`),_w(29,`Introduction`),Tl(),Wi$1(30,`a`,23),_w(31,`#`),Tl()(),Wi$1(32,`div`,24),tg(33,`nz-icon`,25),Wi$1(34,`span`),_w(35,`+`),Tl(),tg(36,`nz-icon`,26),Wi$1(37,`span`),_w(38,`=`),Tl(),tg(39,`nz-icon`,27),Tl(),Wi$1(40,`div`,28),tg(41,`img`,29),Tl(),Wi$1(42,`p`)(43,`a`,30),_w(44,`Our Angular app`),Tl(),_w(45,` Is based on `),Wi$1(46,`a`,31),_w(47,`ng-antd-admin`),Tl(),_w(48,` combined with `),Wi$1(49,`a`,32),_w(50,`angular-conduit-signals`),Tl(),_w(51,`. In addition, we use following Angular libraries direct form sources: `),Wi$1(52,`a`,33),_w(53,`NG-ZORRO components src`),Tl(),_w(54,`, `),Wi$1(55,`a`,34),_w(56,`icons-angular src`),Tl(),_w(57,` and `),Wi$1(58,`a`,35),_w(59,`component-store src`),Tl(),_w(60,` with some minor changes. All our reactive states look similar to `),Wi$1(61,`a`,36),_w(62,`auth.store.ts`),Tl(),_w(63,`
The app communicates with the server via REST API controllers built on top of .NET Core 10. The compiled bin code is on `),Wi$1(64,`a`,37),_w(65,`our GitHub repository`),Tl(),_w(66,` together with `),Wi$1(67,`a`,38),_w(68,`compiled Angular app`),Tl()(),Wi$1(69,`h2`,39)(70,`span`),_w(71,`Testing tools for Angular`),Tl(),Wi$1(72,`a`,40),_w(73,`#`),Tl()(),Wi$1(74,`p`),_w(75,`We use the same tools/packages as in `),Wi$1(76,`a`,41),_w(77,`NG-ZORRO`),Tl(),_w(78,`, which are the same as in `),Wi$1(79,`a`,42),_w(80,`TEST_DEPS`),Tl(),_w(81,` plus `),Wi$1(82,`code`),_w(83,`puppeteer`),Tl(),_w(84,`. In addition, Angular and NG-ZORRO have a lot of classes and functions ready to use right out of the box:`),Tl(),Wi$1(85,`pre`,43)(86,`code`)(87,`span`,44),_w(88,`import`),Tl(),_w(89,` { `),Wi$1(90,`span`,45),_w(91,`ComponentFixture`),Tl(),_w(92,`, `),Wi$1(93,`span`,45),_w(94,`TestBed`),Tl(),_w(95,`, waitForAsync, inject `),Wi$1(96,`span`,44),_w(97,`as`),Tl(),_w(98,` testInject } `),Wi$1(99,`span`,44),_w(100,`from`),Tl(),_w(101,` `),Wi$1(102,`span`,46),_w(103,`'@angular/core/testing'`),Tl(),_w(104,`;
`),Wi$1(105,`span`,44),_w(106,`import`),Tl(),_w(107,` { dispatchMouseEvent, dispatchFakeEvent, typeInElement } `),Wi$1(108,`span`,44),_w(109,`from`),Tl(),_w(110,` `),Wi$1(111,`span`,46),_w(112,`'ng-zorro-antd/core/testing'`),Tl(),_w(113,`;
`),Wi$1(114,`span`,44),_w(115,`import`),Tl(),_w(116,` { provideNzIconsTesting } `),Wi$1(117,`span`,44),_w(118,`from`),Tl(),_w(119,` `),Wi$1(120,`span`,46),_w(121,`'ng-zorro-antd/icon/testing'`),Tl(),_w(122,`;`),Tl()(),Wi$1(123,`h2`,47)(124,`span`),_w(125,`Testing Angular app together with .NET Core app`),Tl(),Wi$1(126,`a`,48),_w(127,`#`),Tl()(),Wi$1(128,`p`),_w(129,`Our actual(up to date) `),Wi$1(130,`a`,49),_w(131,`test project`),Tl(),_w(132,` for our .NET Core app uses in memory database which is very convenient for testing (read more about it `),Wi$1(133,`a`,50),_w(134,`here`),Tl(),_w(135,` ) Next, would be great to test on a real database. So, all our Angular test from `),Wi$1(136,`a`,51),_w(137,`our GitHub repository`),Tl(),_w(138,` will connect with our .NET Core app which is connected to real MS SQL database. Therefore, it represents a type of integration test.
All the files ending in `),Wi$1(139,`a`,52),_w(140,`*.store.spec.ts`),Tl(),_w(141,` can be considered as real API testing which is an alternative to `),Wi$1(142,`a`,53),_w(143,`Karma/Puppeteer`),Tl(),_w(144,`, `),Wi$1(145,`a`,54),_w(146,`Vitest`),Tl(),_w(147,`, `),Wi$1(148,`a`,55),_w(149,`Bruno`),Tl(),_w(150,`, `),Wi$1(151,`a`,56),_w(152,`Storybook`),Tl(),_w(153,` or `),Wi$1(154,`a`,57),_w(155,`Playwright`),Tl()(),Wi$1(156,`h2`,58)(157,`span`),_w(158,`Using Signal type in Angular together with Reactive State library`),Tl(),Wi$1(159,`a`,59),_w(160,`#`),Tl()(),Wi$1(161,`div`,28),tg(162,`img`,60),Tl(),Wi$1(163,`div`,28),tg(164,`img`,61),Tl(),Wi$1(165,`p`),_w(166,`Before Signal type became native in Angular, we used `),Wi$1(167,`a`,62),_w(168,`Reactive State library`),Tl(),_w(169,` for `),Wi$1(170,`a`,63),_w(171,`our integration tests`),Tl(),_w(172,`. Now, the library has implemented two ways of using Signals: `),Wi$1(173,`a`,64),_w(174,`@ngrx/signals`),Tl(),_w(175,` and `),Wi$1(176,`a`,36),_w(177,`@ngrx/component-store`),Tl(),_w(178,`. We use the second one direct from sources.`),Tl(),Wi$1(179,`h2`,65)(180,`span`),_w(181,`Credits`),Tl(),Wi$1(182,`a`,66),_w(183,`#`),Tl()(),Wi$1(184,`ul`)(185,`li`)(186,`a`,67),_w(187,`Angular contributors`),Tl()(),Wi$1(188,`li`)(189,`a`,68),_w(190,`NG-ZORRO contributors`),Tl()(),Wi$1(191,`li`)(192,`a`,69),_w(193,`Ant Design contributors`),Tl()(),Wi$1(194,`li`)(195,`a`,70),_w(196,`Reactive State for Angular contributors`),Tl()(),Wi$1(197,`li`)(198,`a`,71),_w(199,`hua jian`),Tl()(),Wi$1(200,`li`)(201,`a`,72),_w(202,`Andy Tu Hoang`),Tl()(),Wi$1(203,`li`)(204,`a`,73),_w(205,`Stefanos Lignos`),Tl()()()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,Vw(19,ki)),cD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()),vE(27),eg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback),vE(121),eg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback),vE(2),eg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,bg,sd,cr,ir,Fa,p9,d9,Vn,Wn$1,qi$1,_n,ji$1,Jo,Za,Dl,ga$1,ma$1,So,Ve$1,pe,_u],encapsulation:2})}return a})();var Ii=()=>({standalone:!0});function Qi(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,93),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,94),tg(3,`nz-icon`,95),Tl()(),Sl()}}function Mi(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`a`,93),ag(`click`,function(){md(i);let r=zb();return yd(r.clickLink())}),Wi$1(2,`h3`,94),_w(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var dt=110;var jn=(()=>{class a{destroyRef=_(ae);router=_(Te$1);#e=_(Z0);injector=_(se);viewPort=_(d7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!0;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){oV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-dt>640?this.width.set(640):this.width.set(this.windowWidth()-dt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-dt>640?this.width.set(640):this.width.set(i-dt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),oV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(rV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`nz-blog-mermaid`]],features:[jw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:251,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-b99efddd`,`nzTitle`,`Invalid Diagrams`],[`nzHref`,`#h-839c4527`,`nzTitle`,`Invalid type`],[`nzHref`,`#h-3ee0c881`,`nzTitle`,`Invalid content`],[`nzHref`,`#h-b44a7c95`,`nzTitle`,`Sequence Diagram`],[`nzHref`,`#h-9f629726`,`nzTitle`,`Sequence Diagram (forest theme directive)`],[`nzHref`,`#h-ba0db7f3`,`nzTitle`,`Gantt Chart`],[`nzHref`,`#h-70d1834f`,`nzTitle`,`Flow Chart`],[`nzHref`,`#h-d92c77a8`,`nzTitle`,`With Markdown:`],[`nzHref`,`#h-0bb074dd`,`nzTitle`,`Class Diagram`],[`nzHref`,`#h-884021fe`,`nzTitle`,`State Diagram`],[`nzHref`,`#h-1dddb92d`,`nzTitle`,`Entity Relationship Diagram`],[`nzHref`,`#h-cc18880d`,`nzTitle`,`User Journey`],[`nzHref`,`#h-6199bdbb`,`nzTitle`,`Pie Chart`],[`nzHref`,`#h-e0a1267c`,`nzTitle`,`Requirement Diagram`],[`nzHref`,`#h-48601e7f`,`nzTitle`,`Gitgraph (Git) Diagram`],[`nzHref`,`#h-bc3ffeb2`,`nzTitle`,`Mermaid in tabs`],[`nzHref`,`#h-8e40f9ee`,`nzTitle`,`Mindmap`],[`nzHref`,`#h-e3199e80`,`nzTitle`,`Quadrant Chart`],[`nzHref`,`#h-a5836c8e`,`nzTitle`,`Architecture Diagram`],[`nzHref`,`#h-6c728fee`,`nzTitle`,`ELK Styling`],[`nzHref`,`#h-df7ec4d7`,`nzTitle`,`Dagre`],[`nzHref`,`#h-790fe0d1`,`nzTitle`,`ELK er diagram layout`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20250825-mermaid.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`href`,`https://github.com/facebook/docusaurus/blob/main/website/_dogfooding/_pages%20tests/diagrams.mdx`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/facebook/docusaurus/blob/main/LICENSE-docs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-b99efddd`],[`onclick`,`window.location.hash = 'h-b99efddd'`,1,`anchor`],[`id`,`h-839c4527`],[`onclick`,`window.location.hash = 'h-839c4527'`,1,`anchor`],[1,`mermaid`],[`id`,`h-3ee0c881`],[`onclick`,`window.location.hash = 'h-3ee0c881'`,1,`anchor`],[`id`,`h-b44a7c95`],[`onclick`,`window.location.hash = 'h-b44a7c95'`,1,`anchor`],[`id`,`h-9f629726`],[`onclick`,`window.location.hash = 'h-9f629726'`,1,`anchor`],[1,`language-bash`],[1,`hljs-string`],[`id`,`h-ba0db7f3`],[`onclick`,`window.location.hash = 'h-ba0db7f3'`,1,`anchor`],[`id`,`h-70d1834f`],[`onclick`,`window.location.hash = 'h-70d1834f'`,1,`anchor`],[`id`,`h-d92c77a8`],[`onclick`,`window.location.hash = 'h-d92c77a8'`,1,`anchor`],[`id`,`h-0bb074dd`],[`onclick`,`window.location.hash = 'h-0bb074dd'`,1,`anchor`],[`id`,`h-884021fe`],[`onclick`,`window.location.hash = 'h-884021fe'`,1,`anchor`],[`id`,`h-1dddb92d`],[`onclick`,`window.location.hash = 'h-1dddb92d'`,1,`anchor`],[`id`,`h-cc18880d`],[`onclick`,`window.location.hash = 'h-cc18880d'`,1,`anchor`],[`href`,`https://github.com/mermaid-js/mermaid/issues/3501`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6199bdbb`],[`onclick`,`window.location.hash = 'h-6199bdbb'`,1,`anchor`],[`id`,`h-e0a1267c`],[`onclick`,`window.location.hash = 'h-e0a1267c'`,1,`anchor`],[`id`,`h-48601e7f`],[`onclick`,`window.location.hash = 'h-48601e7f'`,1,`anchor`],[`id`,`h-bc3ffeb2`],[`onclick`,`window.location.hash = 'h-bc3ffeb2'`,1,`anchor`],[`id`,`h-8e40f9ee`],[`onclick`,`window.location.hash = 'h-8e40f9ee'`,1,`anchor`],[`id`,`h-e3199e80`],[`onclick`,`window.location.hash = 'h-e3199e80'`,1,`anchor`],[`id`,`h-a5836c8e`],[`onclick`,`window.location.hash = 'h-a5836c8e'`,1,`anchor`],[`href`,`https://mermaid.js.org/syntax/architecture`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/facebook/docusaurus/discussions/10508`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6c728fee`],[`onclick`,`window.location.hash = 'h-6c728fee'`,1,`anchor`],[`href`,`https://mermaid.js.org/syntax/entityRelationshipDiagram.html#layout`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-df7ec4d7`],[`onclick`,`window.location.hash = 'h-df7ec4d7'`,1,`anchor`],[`id`,`h-790fe0d1`],[`onclick`,`window.location.hash = 'h-790fe0d1'`,1,`anchor`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(Wi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,Qi,4,0,`ng-container`,5)(6,Mi,4,0,`ng-container`,5),Tl()()(),Wi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),_w(11,`Jump to top`),Tl()(),Wi$1(12,`div`,3)(13,`nz-switch`,9),sD(),Ag(`ngModelChange`,function(g){return xw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),Wi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19)(24,`nz-link`,20)(25,`nz-link`,21)(26,`nz-link`,22)(27,`nz-link`,23)(28,`nz-link`,24)(29,`nz-link`,25)(30,`nz-link`,26)(31,`nz-link`,27)(32,`nz-link`,28)(33,`nz-link`,29)(34,`nz-link`,30)(35,`nz-link`,31)(36,`nz-link`,32),Tl()(),Wi$1(37,`span`,33),_w(38,` Diagram Examples`),tg(39,`span`,34)(40,`span`,35),Wi$1(41,`a`,36),tg(42,`nz-icon`,37),Tl()(),Wi$1(43,`article`,38)(44,`blockquote`,39)(45,`p`)(46,`strong`),_w(47,`This is a modified version of the `),Wi$1(48,`a`,40),_w(49,`Docusaurus original`),Tl(),_w(50,` document provided under `),Wi$1(51,`a`,41),_w(52,`Creative Commons public licenses`),Tl(),_w(53,`.`),Tl()()(),Wi$1(54,`h2`,42)(55,`span`),_w(56,`Invalid Diagrams`),Tl(),Wi$1(57,`a`,43),_w(58,`#`),Tl()(),Wi$1(59,`p`),_w(60,`Those errors should not crash the whole page`),Tl(),Wi$1(61,`h3`,44)(62,`span`),_w(63,`Invalid type`),Tl(),Wi$1(64,`a`,45),_w(65,`#`),Tl()(),Wi$1(66,`pre`,46),_w(67,`badType
    participant Alice
    participant Bob`),Tl(),Wi$1(68,`h3`,47)(69,`span`),_w(70,`Invalid content`),Tl(),Wi$1(71,`a`,48),_w(72,`#`),Tl()(),Wi$1(73,`pre`,46),_w(74,`sequenceDiagram
    badInstruction Alice
    participant Bob`),Tl(),Wi$1(75,`h2`,49)(76,`span`),_w(77,`Sequence Diagram`),Tl(),Wi$1(78,`a`,50),_w(79,`#`),Tl()(),Wi$1(80,`pre`,46),_w(81,`sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Health check
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts `),tg(82,`br`),_w(83,`prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`),Tl(),Wi$1(84,`h2`,51)(85,`span`),_w(86,`Sequence Diagram (forest theme directive)`),Tl(),Wi$1(87,`a`,52),_w(88,`#`),Tl()(),Wi$1(89,`p`),_w(90,`It is possible to override default config locally with Mermaid text directives such as:`),Tl(),Wi$1(91,`pre`,53)(92,`code`),_w(93,`%%{init: { `),Wi$1(94,`span`,54),_w(95,`"theme"`),Tl(),_w(96,`: `),Wi$1(97,`span`,54),_w(98,`"forest"`),Tl(),_w(99,` } }%%`),Tl()(),Wi$1(100,`pre`,46),_w(101,`%%{init: { "theme": "forest" } }%%

sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Health check
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts `),tg(102,`br`),_w(103,`prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`),Tl(),Wi$1(104,`h2`,55)(105,`span`),_w(106,`Gantt Chart`),Tl(),Wi$1(107,`a`,56),_w(108,`#`),Tl()(),Wi$1(109,`pre`,46),_w(110,`gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d`),Tl(),Wi$1(111,`h2`,57)(112,`span`),_w(113,`Flow Chart`),Tl(),Wi$1(114,`a`,58),_w(115,`#`),Tl()(),Wi$1(116,`pre`,46),_w(117,`flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]`),Tl(),Wi$1(118,`h3`,59)(119,`span`),_w(120,`With Markdown:`),Tl(),Wi$1(121,`a`,60),_w(122,`#`),Tl()(),Wi$1(123,`pre`,46),_w(124,`flowchart LR
    markdown["\`This **is** _Markdown_\`"]
    newLines["\`Line1
    Line 2
    Line 3\`"]
    markdown --> newLines`),Tl(),Wi$1(125,`h2`,61)(126,`span`),_w(127,`Class Diagram`),Tl(),Wi$1(128,`a`,62),_w(129,`#`),Tl()(),Wi$1(130,`pre`,46),_w(131,` classDiagram
      Animal <|-- Duck
      Animal <|-- Fish
      Animal <|-- Zebra
      Animal : +int age
      Animal : +String gender
      Animal: +isMammal()
      Animal: +mate()
      class Duck{
          +String beakColor
          +swim()
          +quack()
      }
      class Fish{
          -int sizeInFeet
          -canEat()
      }
      class Zebra{
          +bool is_wild
          +run()
      }`),Tl(),Wi$1(132,`h2`,63)(133,`span`),_w(134,`State Diagram`),Tl(),Wi$1(135,`a`,64),_w(136,`#`),Tl()(),Wi$1(137,`pre`,46),_w(138,`stateDiagram-v2
    [*] --> Active

    state Active {
        [*] --> NumLockOff
        NumLockOff --> NumLockOn : EvNumLockPressed
        NumLockOn --> NumLockOff : EvNumLockPressed
        --
        [*] --> CapsLockOff
        CapsLockOff --> CapsLockOn : EvCapsLockPressed
        CapsLockOn --> CapsLockOff : EvCapsLockPressed
        --
        [*] --> ScrollLockOff
        ScrollLockOff --> ScrollLockOn : EvScrollLockPressed
        ScrollLockOn --> ScrollLockOff : EvScrollLockPressed
    }`),Tl(),Wi$1(139,`h2`,65)(140,`span`),_w(141,`Entity Relationship Diagram`),Tl(),Wi$1(142,`a`,66),_w(143,`#`),Tl()(),Wi$1(144,`pre`,46),_w(145,`erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string firstName
        string lastName
        int age
    }`),Tl(),Wi$1(146,`h2`,67)(147,`span`),_w(148,`User Journey`),Tl(),Wi$1(149,`a`,68),_w(150,`#`),Tl()(),Wi$1(151,`pre`,46),_w(152,`journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me`),Tl(),Wi$1(153,`blockquote`)(154,`p`),_w(155,`If there's too much space above it's due to a `),Wi$1(156,`a`,69),_w(157,`Mermaid bug`),Tl()()(),Wi$1(158,`h2`,70)(159,`span`),_w(160,`Pie Chart`),Tl(),Wi$1(161,`a`,71),_w(162,`#`),Tl()(),Wi$1(163,`pre`,46),_w(164,`pie showData
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5`),Tl(),Wi$1(165,`h2`,72)(166,`span`),_w(167,`Requirement Diagram`),Tl(),Wi$1(168,`a`,73),_w(169,`#`),Tl()(),Wi$1(170,`pre`,46),_w(171,`    requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    functionalRequirement test_req2 {
    id: 1.1
    text: the second test text.
    risk: low
    verifymethod: inspection
    }

    performanceRequirement test_req3 {
    id: 1.2
    text: the third test text.
    risk: medium
    verifymethod: demonstration
    }

    interfaceRequirement test_req4 {
    id: 1.2.1
    text: the fourth test text.
    risk: medium
    verifymethod: analysis
    }

    physicalRequirement test_req5 {
    id: 1.2.2
    text: the fifth test text.
    risk: medium
    verifymethod: analysis
    }

    designConstraint test_req6 {
    id: 1.2.3
    text: the sixth test text.
    risk: medium
    verifymethod: analysis
    }

    element test_entity {
    type: simulation
    }

    element test_entity2 {
    type: word doc
    docRef: reqs/test_entity
    }

    element test_entity3 {
    type: "test suite"
    docRef: github.com/all_the_tests
    }


    test_entity - satisfies -> test_req2
    test_req - traces -> test_req2
    test_req - contains -> test_req3
    test_req3 - contains -> test_req4
    test_req4 - derives -> test_req5
    test_req5 - refines -> test_req6
    test_entity3 - verifies -> test_req5
    test_req <- copies - test_entity2`),Tl(),Wi$1(172,`h2`,74)(173,`span`),_w(174,`Gitgraph (Git) Diagram`),Tl(),Wi$1(175,`a`,75),_w(176,`#`),Tl()(),Wi$1(177,`pre`,46),_w(178,`%%{init: { 'logLevel': 'debug', 'theme': 'base' } }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:"ash" tag:"abc"
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release`),Tl(),Wi$1(179,`h2`,76)(180,`span`),_w(181,`Mermaid in tabs`),Tl(),Wi$1(182,`a`,77),_w(183,`#`),Tl()(),Wi$1(184,`p`),_w(185,`The following mermaid diagram is shown:`),Tl(),Wi$1(186,`pre`,46),_w(187,`graph LR
  a ---> c(10)
  b ---> c(10)`),Tl(),Wi$1(188,`h2`,78)(189,`span`),_w(190,`Mindmap`),Tl(),Wi$1(191,`a`,79),_w(192,`#`),Tl()(),Wi$1(193,`pre`,46),_w(194,`mindmap
  root((conda-forge))
    (Repos)
        (Package building)
            [*-feedstock]
            [staged-recipes]
            [cdt-builds]
            [msys2-recipes]
        (Maintenance)
            [admin-requests]
            [repodata-patches]
        (Configuration)
            [.github]
            [.cirun]
            [conda-forge-pinning]
            [conda-forge-ci-setup]
            [docker-images]
            [conda-smithy]
        (Automations)
            [admin-migrations]
            [artifact-validation]
            [regro/cf-scripts]
            [conda-forge-webservices]
            [regro/cf-graph-countyfair]
            [regro/libcfgraph + regro/libcflib]
            [feedstock-outputs]
        (Communications)
            [conda-forge.github.io]
            [blog]
            [status]
            [by-the-numbers]
            [conda-forge-status-monitor]
            [feedstocks]
    (Bots & apps)
        [conda-forge-admin]
        [conda-forge-bot]
        [conda-forge-coordinator]
        [conda-forge-daemon]
        [conda-forge-linter]
        [conda-forge-manager]
        [conda-forge-status]
        [regro-cf-autotick-bot]
        [conda-forge-curator]
        [conda-forge-webservices]
    (Delivery)
        [anaconda.org]
        [ghcr.io]
        [quay.io]
    (Installers)
        Miniforge
        Mambaforge
    (CI for builds)
        Azure Pipelines
        Travis CI
        cirun.io
    (Infra)
        Heroku
        Github Actions
        Circle CI`),Tl(),Wi$1(195,`h2`,80)(196,`span`),_w(197,`Quadrant Chart`),Tl(),Wi$1(198,`a`,81),_w(199,`#`),Tl()(),Wi$1(200,`pre`,46),_w(201,`quadrantChart
    title Reach and engagement of campaigns
    x-axis Low Reach --> High Reach
    y-axis Low Engagement --> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A: [0.3, 0.6]
    Campaign B: [0.45, 0.23]
    Campaign C: [0.57, 0.69]
    Campaign D: [0.78, 0.34]
    Campaign E: [0.40, 0.34]
    Campaign F: [0.35, 0.78]`),Tl(),Wi$1(202,`h2`,82)(203,`span`),_w(204,`Architecture Diagram`),Tl(),Wi$1(205,`a`,83),_w(206,`#`),Tl()(),Wi$1(207,`ul`)(208,`li`),_w(209,`See `),Wi$1(210,`a`,84),_w(211,`1`),Tl()(),Wi$1(212,`li`),_w(213,`See `),Wi$1(214,`a`,85),_w(215,`2`),Tl()()(),Wi$1(216,`pre`,46),_w(217,`architecture-beta
    group api(cloud)[API]

    service db(database)[Database] in api
    service disk1(disk)[Storage] in api
    service disk2(disk)[Storage] in api
    service server(server)[Server] in api

    db:L -- R:server
    disk1:T -- B:server
    disk2:T -- B:db`),Tl(),Wi$1(218,`h2`,86)(219,`span`),_w(220,`ELK Styling`),Tl(),Wi$1(221,`a`,87),_w(222,`#`),Tl()(),Wi$1(223,`p`),_w(224,`Mermaid provides an `),Wi$1(225,`a`,88),_w(226,`ELK layout`),Tl()(),Wi$1(227,`h3`,89)(228,`span`),_w(229,`Dagre`),Tl(),Wi$1(230,`a`,90),_w(231,`#`),Tl()(),Wi$1(232,`p`),_w(233,`This is a "classical" Mermaid diagram, using the default Dagre layout.`),Tl(),Wi$1(234,`pre`,46),_w(235,`erDiagram

  COMPANY ||--o{ DEPARTMENT : has
  COMPANY ||--o{ PROJECT : undertakes
  COMPANY ||--o{ LOCATION : operates_in
  COMPANY ||--o{ CLIENT : serves

  DEPARTMENT ||--o{ EMPLOYEE : employs
  DEPARTMENT ||--o{ PROJECT : manages
  DEPARTMENT ||--o{ BUDGET : allocated

  EMPLOYEE }o--o{ PROJECT : works_on
  EMPLOYEE ||--|| ADDRESS : lives_at
  EMPLOYEE }o--o{ SKILL : has
  EMPLOYEE ||--o{ DEPENDENT : supports

  PROJECT ||--o{ CLIENT : for
  PROJECT ||--o{ TASK : contains
`),Tl(),Wi$1(236,`h3`,91)(237,`span`),_w(238,`ELK er diagram layout`),Tl(),Wi$1(239,`a`,92),_w(240,`#`),Tl()(),Wi$1(241,`p`),_w(242,`This ER diagram should look different, using the ELK layout.`),Tl(),Wi$1(243,`pre`,46),_w(244,`---
config:
  layout: elk
---
erDiagram

  COMPANY ||--o{ DEPARTMENT : has
  COMPANY ||--o{ PROJECT : undertakes
  COMPANY ||--o{ LOCATION : operates_in
  COMPANY ||--o{ CLIENT : serves

  DEPARTMENT ||--o{ EMPLOYEE : employs
  DEPARTMENT ||--o{ PROJECT : manages
  DEPARTMENT ||--o{ BUDGET : allocated

  EMPLOYEE }o--o{ PROJECT : works_on
  EMPLOYEE ||--|| ADDRESS : lives_at
  EMPLOYEE }o--o{ SKILL : has
  EMPLOYEE ||--o{ DEPENDENT : supports

  PROJECT ||--o{ CLIENT : for
  PROJECT ||--o{ TASK : contains
`),Tl(),Wi$1(245,`p`),_w(246,`Mermaid also provides a way of setting config parameters using a directive `),Wi$1(247,`code`),_w(248,`%%{init:{"layout":"elk"}}%%`),Tl()(),Wi$1(249,`pre`,46),_w(250,`%%{init:{"layout":"elk"}}%%
erDiagram

  COMPANY ||--o{ DEPARTMENT : has
  COMPANY ||--o{ PROJECT : undertakes
  COMPANY ||--o{ LOCATION : operates_in
  COMPANY ||--o{ CLIENT : serves

  DEPARTMENT ||--o{ EMPLOYEE : employs
  DEPARTMENT ||--o{ PROJECT : manages
  DEPARTMENT ||--o{ BUDGET : allocated

  EMPLOYEE }o--o{ PROJECT : works_on
  EMPLOYEE ||--|| ADDRESS : lives_at
  EMPLOYEE }o--o{ SKILL : has
  EMPLOYEE ||--o{ DEPENDENT : supports

  PROJECT ||--o{ CLIENT : for
  PROJECT ||--o{ TASK : contains
`),Tl()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,Vw(7,Ii)),cD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,bg,sd,cr,ir,Fa,p9,d9,Vn,qi$1,_n,ji$1,Jo,Za,Dl,ga$1,ma$1,So,Ve$1,pe,_u],encapsulation:2})}return a})();var _t=(()=>{class a extends Un$1{#e=_(Z0);#t=_($u);#a=_(o0);#i=_(d7);articleListConfig=this.#e.selectors.articleListConfig;ngrxOnStoreInit(){this.setState({articleList:[],tags:[],articleCount:0})}getTags=this.effect(bu(i=>(i.loading.set(!0),this.#a.getTags(i.params).pipe(At(o=>{this.patchState({tags:o.tags})},o=>{U1()?console.error(`Get Tags Failed`,o):console.warn(`Get Tags Failed: ${o.message}`)},()=>{i.loading.set(!1)})))));queryArticle=this.effect(Tu(i=>{this.#e.patchState({articleListConfig:s(r({},this.articleListConfig()),{currentPage:i.params.offset?this.articleListConfig().currentPage:1,filters:{limit:i.params.limit,offset:i.params.offset,tags:i.params.tags,createdAtAsc:i.params.createdAtAsc}})}),this.#n(i.loading)}));onOffsetChange=this.effect(Tu(i=>{this.#e.patchState({articleListConfig:s(r({},this.articleListConfig()),{currentPage:i.offset,filters:s(r({},this.articleListConfig().filters),{offset:Number(this.articleListConfig().filters.limit)*(i.offset-1)})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));onLimitChange=this.effect(Tu(i=>{this.#e.patchState({articleListConfig:s(r({},this.articleListConfig()),{currentPage:1,filters:s(r({},this.articleListConfig().filters),{limit:i.limit,offset:0})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));#n=this.effect(bu(i=>(i.set(!0),(()=>{let o=this.articleListConfig()?.filters;return this.#t.getPublicArticles({limit:o.limit,offset:o.offset,tags:o.tags,createdAtAsc:o.createdAtAsc})})().pipe(At(o=>{this.patchState({articleList:o.articles,articleCount:o.total})},o=>{U1()?console.error(`getPublicArticles Failed`,o):console.warn(`getPublicArticles Failed: ${o.message}`),this.#e.openMessageDrawer(Gt(o.message))},()=>{i.set(!1)})))));static ɵfac=(()=>{let i;return function(r){return(i||(i=Iv(a)))(r||a)}})();static ɵprov=fe({token:a,factory:a.ɵfac})}return a})();var Bi=(a,h,i)=>[a,h,i];function Ri(a,h){a&1&&(Wi$1(0,`div`,9),tg(1,`nz-spin`,11),Tl())}function Di(a,h){if(a&1&&(tg(0,`nz-icon`,14),_w(1)),a&2){let i=zb().$implicit;vE(),xl(` `,i.title.length,` `)}}function Li(a,h){if(a&1&&(tg(0,`nz-icon`,15),_w(1)),a&2){let i=zb().$implicit;vE(),xl(` `,i.slug.length,` `)}}function Pi(a,h){if(a&1&&(tg(0,`nz-icon`,16),_w(1)),a&2){let i=zb().$implicit;vE(),xl(` `,i.id,` `)}}function Ji(a,h){if(a&1){let i=Hb();Wi$1(0,`a`,17),ag(`click`,function(){md(i);let r=zb().$implicit,c=zb();return yd(c.clickArticleLink(r))}),_w(1),Tl()}if(a&2){let i=zb().$implicit;vE(),xl(` `,i.title,` `)}}function Fi(a,h){if(a&1&&_w(0),a&2){let i=zb(2).$implicit;xl(` `,i.description,` `)}}function Hi(a,h){if(a&1){let i=Hb();Nb(0,Fi,1,1),Wi$1(1,`a`,18),ag(`click`,function(){md(i);let r=zb().$implicit,c=zb();return yd(c.clickArticleLink(r))}),_w(2,`Read more`),tg(3,`nz-icon`,19),Tl()}if(a&2){let i=zb().$implicit,o=zb();xb(i.published?0:-1),vE(),eg(`nzLoading`,o.routerLinkLoadingId()===i.id)(`disabled`,o.routerLinkLoadingId()!==i.id&&o.routerLinkLoadingId()!==0)}}function Ui(a,h){if(a&1&&(Wi$1(0,`div`,20)(1,`div`,21)(2,`h5`,22),_w(3),Gw(4,`date`),Tl()()(),Wi$1(5,`div`,23)(6,`div`,24),tg(7,`img`,25),Tl()()),a&2){let i=zb().$implicit,o=zb();vE(),eg(`id`,Ow(i.slug)),vE(2),Mg(Zw(4,9,i.createdAt,`MMMM d, yyyy`)),vE(4),eg(`nzSrc`,kw(`https://picsum.photos/id/`,i.id,`/300/200.jpg`))(`alt`,Ow(i.title))(`nzFallback`,o.fallback)(`nzPlaceholder`,o.fallback)}}function ji(a,h){if(a&1&&(Wi$1(0,`nz-list-item`,12),Qh(1,Di,2,1,`ng-template`,null,3,Kw)(3,Li,2,1,`ng-template`,null,4,Kw)(5,Pi,2,1,`ng-template`,null,5,Kw),Wi$1(7,`nz-list-item-meta`,13),Qh(8,Ji,2,1,`ng-template`,null,6,Kw)(10,Hi,4,3,`ng-template`,null,7,Kw),Tl(),Qh(12,Ui,8,12,`ng-template`,null,8,Kw),Tl()),a&2){let i=tw(2),o=tw(4),r=tw(6),c=tw(9),g=tw(11),_=tw(13);eg(`nzActions`,$w(4,Bi,i,o,r))(`nzExtra`,_),vE(7),eg(`nzTitle`,c)(`nzDescription`,g)}}function Oi(a,h){if(a&1&&(Wi$1(0,`div`,20)(1,`div`,24)(2,`h5`,26),_w(3),Tl()()()),a&2){let i=h,o=zb(2);vE(3),Sg(` `,o.articleListConfig().filters.limit*(o.articleListConfig().currentPage-1)+1,` - `,o.articleListConfig().filters.limit*o.articleListConfig().currentPage>i?i:o.articleListConfig().filters.limit*o.articleListConfig().currentPage,` of `,i,` records `)}}function Ki(a,h){if(a&1&&Nb(0,Oi,4,3,`div`,20),a&2){let i,o=zb();xb((i=o.articlesCount())?0:-1,i)}}function Wi(a,h){if(a&1){let i=Hb();Wi$1(0,`nz-pagination`,27),ag(`nzPageSizeChange`,function(r){md(i);let c=zb();return yd(c.setPageSize(r))})(`nzPageIndexChange`,function(r){md(i);let c=zb();return yd(c.setPage(r))}),Tl()}if(a&2){let i=zb();eg(`nzShowSizeChanger`,!0)(`nzPageSize`,i.articleListConfig().filters.limit)(`nzPageIndex`,i.articleListConfig().currentPage)(`nzTotal`,i.articlesCount())}}var On=(()=>{class a{articleList;articlesCount;isLoading;articleListConfig;oldLimit;nzSetPage=new Qe;nzSetPageSize=new Qe;router=_(Te$1);changeDetectorRef=_(F1);routerLinkLoadingId=Gt(0);fallback=`data:image/png;base64,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`;clickArticleLink(i){this.routerLinkLoadingId.set(i.id),this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.router.navigate([`articles`,i.slug])})}setPage(i){this.oldLimit()===this.articleListConfig().filters.limit?this.nzSetPage.emit(i):this.oldLimit.set(this.articleListConfig().filters.limit)}setPageSize(i){this.articleListConfig().currentPage>Math.ceil(this.articlesCount()/i)?this.oldLimit.set(this.articleListConfig().filters.limit):this.oldLimit.set(i),this.nzSetPageSize.emit(i)}static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`app-articles`]],inputs:{articleList:`articleList`,articlesCount:`articlesCount`,isLoading:`isLoading`,articleListConfig:`articleListConfig`,oldLimit:`oldLimit`},outputs:{nzSetPage:`nzSetPage`,nzSetPageSize:`nzSetPageSize`},decls:8,vars:6,consts:[[`item`,``],[`footer`,``],[`pagination`,``],[`starAction`,``],[`likeAction`,``],[`msgAction`,``],[`nzTitle`,``],[`nzDescription`,``],[`extra`,``],[1,`app-article-preview`],[`nzItemLayout`,`vertical`,3,`hidden`,`nzDataSource`,`nzRenderItem`,`nzPagination`,`nzFooter`],[`nzTip`,`Loading posts...`],[3,`nzActions`,`nzExtra`],[3,`nzTitle`,`nzDescription`],[`nzType`,`star-o`,2,`margin-right`,`8px`],[`nzType`,`like-o`,2,`margin-right`,`8px`],[`nzType`,`message`,2,`margin-right`,`8px`],[3,`click`],[`nz-button`,``,`nzType`,`link`,3,`click`,`nzLoading`,`disabled`],[`nzType`,`arrow-right`],[`nz-row`,``,`nzJustify`,`end`],[`nz-col`,``,3,`id`],[`nz-typography`,``,`nzType`,`secondary`],[`nz-row`,``],[`nz-col`,``],[`nz-image`,``,`width`,`300px`,`height`,`200px`,3,`nzSrc`,`nzFallback`,`nzPlaceholder`,`alt`],[`nz-typography`,``],[3,`nzPageSizeChange`,`nzPageIndexChange`,`nzShowSizeChanger`,`nzPageSize`,`nzPageIndex`,`nzTotal`]],template:function(o,r){if(o&1&&(Nb(0,Ri,2,0,`div`,9),Wi$1(1,`nz-list`,10),Qh(2,ji,14,8,`ng-template`,null,0,Kw)(4,Ki,1,1,`ng-template`,null,1,Kw)(6,Wi,1,4,`ng-template`,null,2,Kw),Tl()),o&2){let c=tw(3),g=tw(5),_=tw(7);xb(r.isLoading()?0:-1),vE(),eg(`hidden`,r.isLoading())(`nzDataSource`,r.articleList())(`nzRenderItem`,c)(`nzPagination`,_)(`nzFooter`,g)}},dependencies:[Jl,lo,cr,ir,Fa,je,ie,me,oe,ga$1,Xf,Dl,Pl,Vn,Wn$1,qi$1,_n,ji$1,p9,d9,ta$1,Jo,Za,Ve],encapsulation:2})}return a})();var Gi=()=>({overflow:`auto`,display:`block`,width:`100%`});var qi=(a,h)=>[a,h];var Kn=()=>({standalone:!0});function Zi(a,h){if(a&1&&(Nl(0),Wi$1(1,`h5`,16),tg(2,`nz-icon`,17),Tl(),Sl()),a&2){let i=zb(2);vE(2),eg(`nzTooltipTitle`,i.applyTooltipTitle)}}function Xi(a,h){a&1&&Qh(0,Zi,3,1,`ng-container`,11)}function $i(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`button`,18),ag(`nzOnConfirm`,function(){md(i);let r=zb();return yd(r.confirmApply())}),tg(2,`nz-icon`,19),_w(3,` Apply `),Tl(),Sl()}if(a&2){let i=zb(),o=tw(9);vE(),eg(`disabled`,i.disableApply())(`nzIcon`,o)}}function ea(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`button`,20),ag(`nzOnConfirm`,function(){md(i);let r=zb();return yd(r.confirmClose())}),tg(2,`nz-icon`,21),_w(3,` Close `),Tl(),Sl()}if(a&2){zb();let i=tw(7);vE(),eg(`nzIcon`,i)(`nzOkDanger`,!0)}}function ta(a,h){a&1&&(Nl(0),Wi$1(1,`h4`,16),tg(2,`nz-icon`,22),Tl(),Sl())}function na(a,h){a&1&&(Nl(0),Wi$1(1,`h5`,23),_w(2,`Do you want to `),tg(3,`br`),_w(4,` close without changes?`),Tl(),Sl())}function ia(a,h){a&1&&(Wi$1(0,`nz-space`,10),Qh(1,ta,3,0,`ng-container`,11)(2,na,5,0,`ng-container`,11),Tl())}function aa(a,h){a&1&&(Nl(0),Wi$1(1,`h4`,24),tg(2,`nz-icon`,22),Tl(),Sl())}function ra(a,h){a&1&&(Nl(0),Wi$1(1,`h5`,23),_w(2,`Do you want to `),tg(3,`br`),_w(4,` apply changes?`),Tl(),Sl())}function oa(a,h){a&1&&(Wi$1(0,`nz-space`,10),Qh(1,aa,3,0,`ng-container`,11)(2,ra,5,0,`ng-container`,11),Tl())}function la(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`nz-switch`,25),sD(),Ag(`ngModelChange`,function(r){md(i);let c=zb();return xw(c.isAscending,r)||(c.isAscending=r),yd(r)}),ag(`click`,function(){md(i);let r=zb();return yd(r.ascendingEnable())}),Tl(),Sl()}if(a&2){let i=zb();vE(),xg(`ngModel`,i.isAscending),eg(`ngModelOptions`,Vw(2,Kn)),cD()}}function sa(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`nz-switch`,26),sD(),Ag(`ngModelChange`,function(r){md(i);let c=zb();return xw(c.showSearch,r)||(c.showSearch=r),yd(r)}),ag(`click`,function(){md(i);let r=zb();return yd(r.disableEnable())}),Tl(),Sl()}if(a&2){let i=zb();vE(),xg(`ngModel`,i.showSearch),eg(`ngModelOptions`,Vw(3,Kn))(`disabled`,i.leftSearch||i.rightSearch),cD()}}function ma(a,h){a&1&&(Nl(0),Wi$1(1,`h5`,16),tg(2,`nz-icon`,27),Tl(),Sl())}function da(a,h){a&1&&Qh(0,ma,3,0,`ng-container`,11)}function pa(a,h){a&1&&(Nl(0),Wi$1(1,`h4`,33),_w(2,`Remaining Tags`),Tl(),Sl())}function ca(a,h){a&1&&(Nl(0),Wi$1(1,`h5`,33),tg(2,`nz-icon`,34),Tl(),Sl())}function xa(a,h){if(a&1&&tg(0,`nz-option`,30),a&2){let i=h.$implicit;eg(`nzLabel`,i.label)(`nzValue`,i.value)}}function ha(a,h){if(a&1&&(tg(0,`nz-icon`,35),_w(1)),a&2){let i=h.$implicit;eg(`nzType`,`sort-`+i.nzValue),vE(),xl(` `,i.nzLabel,` `)}}function Ea(a,h){if(a&1){let i=Hb();Wi$1(0,`tr`,36),ag(`click`,function(){let r=md(i).$implicit,c=zb().onItemSelect;return yd(c(r))}),Wi$1(1,`td`,37),ag(`nzCheckedChange`,function(){let r=md(i).$implicit,c=zb().onItemSelect;return yd(c(r))}),Tl(),Wi$1(2,`td`),_w(3),Tl()()}if(a&2){let i=h.$implicit,o=zb().disabled;vE(),eg(`nzChecked`,i.checked)(`nzDisabled`,o||i.disabled),vE(2),Mg(i.title)}}function ga(a,h){if(a&1){let i=Hb();Wi$1(0,`div`,28)(1,`div`,9)(2,`nz-space`,10),Qh(3,pa,3,0,`ng-container`,11)(4,ca,3,0,`ng-container`,11),Tl()()(),Wi$1(5,`div`,28)(6,`div`,9)(7,`nz-select`,29),sD(),Ag(`ngModelChange`,function(r){md(i);let c=zb();return xw(c.orderModelLeft,r)||(c.orderModelLeft=r),yd(r)}),ag(`ngModelChange`,function(r){md(i);let c=zb();return yd(c.handleOrderLeft(r))}),Ob(8,xa,1,2,`nz-option`,30,Rb),Tl(),Qh(10,ha,2,2,`ng-template`,null,4,Kw),Tl()(),Wi$1(12,`nz-table`,31,5)(14,`thead`)(15,`tr`)(16,`th`,32),ag(`nzCheckedChange`,function(r){let c=md(i).onItemSelectAll;return yd(c(r))}),Tl(),Wi$1(17,`th`),_w(18,`All`),Tl()()(),Wi$1(19,`tbody`),Ob(20,Ea,4,3,`tr`,null,Rb),Tl()()}if(a&2){let i=h.$implicit,o=h.stat,r=h.disabled,c=tw(11),g=tw(13),_=zb();vE(7),eg(`nzBackdrop`,!1)(`nzCustomTemplate`,c),xg(`ngModel`,_.orderModelLeft),cD(),vE(),kb(_.listOfOption),vE(4),eg(`nzData`,_.convertItemsRight(i)),vE(4),eg(`nzDisabled`,r)(`nzChecked`,o.checkAll)(`nzIndeterminate`,o.checkHalf),vE(4),kb(g.data)}}function Sa(a,h){a&1&&(Nl(0),Wi$1(1,`h4`,24),_w(2,`Selected Tags`),Tl(),Sl())}function ua(a,h){a&1&&(Nl(0),Wi$1(1,`h5`,24),tg(2,`nz-icon`,38),Tl(),Sl())}function Aa(a,h){if(a&1&&tg(0,`nz-option`,30),a&2){let i=h.$implicit;eg(`nzLabel`,i.label)(`nzValue`,i.value)}}function fa(a,h){if(a&1&&(tg(0,`nz-icon`,35),_w(1)),a&2){let i=h.$implicit;eg(`nzType`,`sort-`+i.nzValue),vE(),xl(` `,i.nzLabel,` `)}}function wa(a,h){if(a&1){let i=Hb();Wi$1(0,`tr`,36),ag(`click`,function(){let r=md(i).$implicit,c=zb().onItemSelect;return yd(c(r))}),Wi$1(1,`td`,37),ag(`nzCheckedChange`,function(){let r=md(i).$implicit,c=zb().onItemSelect;return yd(c(r))}),Tl(),Wi$1(2,`td`),_w(3),Tl()()}if(a&2){let i=h.$implicit,o=zb().disabled;vE(),eg(`nzChecked`,i.checked)(`nzDisabled`,o||i.disabled),vE(2),Mg(i.title)}}function za(a,h){if(a&1){let i=Hb();Wi$1(0,`div`,28)(1,`div`,9)(2,`nz-space`,10),Qh(3,Sa,3,0,`ng-container`,11)(4,ua,3,0,`ng-container`,11),Tl()()(),Wi$1(5,`div`,28)(6,`div`,9)(7,`nz-select`,29),sD(),Ag(`ngModelChange`,function(r){md(i);let c=zb();return xw(c.orderModelRight,r)||(c.orderModelRight=r),yd(r)}),ag(`ngModelChange`,function(r){md(i);let c=zb();return yd(c.handleOrderRight(r))}),Ob(8,Aa,1,2,`nz-option`,30,Rb),Tl(),Qh(10,fa,2,2,`ng-template`,null,6,Kw),Tl()(),Wi$1(12,`nz-table`,31,7)(14,`thead`)(15,`tr`)(16,`th`,32),ag(`nzCheckedChange`,function(r){let c=md(i).onItemSelectAll;return yd(c(r))}),Tl(),Wi$1(17,`th`),_w(18,`All`),Tl()()(),Wi$1(19,`tbody`),Ob(20,wa,4,3,`tr`,null,Rb),Tl()()}if(a&2){let i=h.$implicit,o=h.stat,r=h.disabled,c=tw(11),g=tw(13),_=zb();vE(7),eg(`nzBackdrop`,!1)(`nzCustomTemplate`,c),xg(`ngModel`,_.orderModelRight),cD(),vE(),kb(_.listOfOption),vE(4),eg(`nzData`,_.convertItemsLeft(i)),vE(4),eg(`nzDisabled`,r)(`nzChecked`,o.checkAll)(`nzIndeterminate`,o.checkHalf),vE(4),kb(g.data)}}var Wn=(()=>{class a{params;nzMessageService=_(dr);drawerRef=_(Dn$1);selectedCount=0;list=[];showSearch=!1;leftSearch=!1;rightSearch=!1;selectedTags=[];applyTooltipTitle=``;orderModelLeft=null;orderModelRight=null;listOfOption=[{label:`Ascending`,value:`ascending`},{label:`Descending`,value:`descending`}];sortOrder=null;isAscending=!1;createdAtAsc=null;initialCreatedAtAsc=null;isTagListChange(){let i=this.selectedTags||[];if(this.selectedTags=[],this.list.filter(r=>r.direction===`right`).forEach(r=>this.selectedTags.push(r.id)),this.createdAtAsc!==this.initialCreatedAtAsc||i?.length!==this.selectedTags.length)return!0;let o=!0;return i.forEach(r=>o=o&&this.selectedTags.includes(r)),!o}ngOnInit(){this.params.createdAtAsc===void 0?(this.isAscending=!1,this.createdAtAsc=null):(this.isAscending=this.params.createdAtAsc,this.createdAtAsc=this.isAscending),this.initialCreatedAtAsc=this.createdAtAsc,this.params.tags?this.selectedTags=this.params.tags:(this.selectedTags=[],this.params.tagList.forEach(i=>this.selectedTags.push(i.id))),this.list=[],this.params.tagList.forEach(i=>this.list.push({title:i.title,id:i.id,direction:this.selectedTags.includes(i.id)?`right`:`left`})),this.selectedCount=this.selectedTags.length}ascendingEnable(){this.isAscending?this.createdAtAsc=null:this.createdAtAsc=!0}disableEnable(){this.showSearch||(this.showSearch=this.leftSearch||this.rightSearch)}handleSearchChange(i){i.direction===`left`?this.leftSearch=i.value!==``:this.rightSearch=i.value!==``}handleChange(i){i.from===`right`?(this.orderModelLeft=null,this.sortOrder={direction:`left`,sortOrder:null},this.selectedCount-=i.list.length):(this.orderModelRight=null,this.sortOrder={direction:`right`,sortOrder:null},this.selectedCount+=i.list.length)}handleFilterOption(i,o){return o.title.toLowerCase().includes(i.toLowerCase())}confirmClose(){this.isTagListChange()&&this.nzMessageService.warning(`Changes were not saved!`),this.drawerRef.close(!1)}disableApply(){return this.selectedCount<1?(this.applyTooltipTitle=`It should be at least one selected tag.`,!0):this.selectedCount>100?(this.applyTooltipTitle=`It should not be more than 100 selected tags.`,!0):!1}confirmApply(){this.isTagListChange()?(this.nzMessageService.info(`Applying selected tags.`),this.selectedTags.length===this.list.length&&(this.selectedTags=null),this.drawerRef.close({tags:this.selectedTags,createdAtAsc:this.createdAtAsc})):this.drawerRef.close(null)}convertItemsRight(i){return i.filter(o=>!o.hide)}convertItemsLeft(i){return i.filter(o=>!o.hide)}handleOrderRight(i){this.sortOrder={direction:`right`,sortOrder:i}}handleOrderLeft(i){this.sortOrder={direction:`left`,sortOrder:i}}static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`app-article-listing-tags`]],inputs:{params:`params`},decls:25,vars:14,consts:[[`closeTpl`,``],[`applyTpl`,``],[`renderList`,``],[`renderSelectedList`,``],[`orderTemplateLeft`,``],[`t1`,``],[`orderTemplateRight`,``],[`t2`,``],[`nz-row`,``,`nzJustify`,`end`,1,`m-b-20`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[`nz-row`,``,`nzJustify`,`end`],[`nz-row`,``,`nzJustify`,`start`,1,`m-b-20`],[`nzSize`,`small`,`nzAlign`,`center`],[3,`nzSearchChange`,`nzChange`,`nzDataSource`,`nzShowSearch`,`nzShowSelectAll`,`nzFilterOption`,`nzRenderList`,`nzSortOrder`],[`nz-typography`,``,`nzType`,`danger`],[`nzType`,`info-circle`,`nz-tooltip`,``,3,`nzTooltipTitle`],[`nz-button`,``,`nzType`,`primary`,`nzShape`,`round`,`nz-popconfirm`,``,`nzPopconfirmTitle`,` `,`nzPopconfirmShowArrow`,`false`,`nzOkText`,`Yes`,`nzCancelText`,`No`,3,`nzOnConfirm`,`disabled`,`nzIcon`],[`nzType`,`check`],[`nz-button`,``,`nzDanger`,`true`,`nzShape`,`round`,`nz-popconfirm`,``,`nzPopconfirmTitle`,` `,`nzPopconfirmShowArrow`,`false`,`nzOkText`,`Yes`,`nzCancelText`,`No`,3,`nzOnConfirm`,`nzIcon`,`nzOkDanger`],[`nzType`,`close`],[`nzType`,`question-circle-o`],[`nz-typography`,``],[`nz-typography`,``,`nzType`,`success`],[`nzCheckedChildren`,`Oldest articles first`,`nzUnCheckedChildren`,`Newest articles first`,3,`ngModelChange`,`click`,`ngModel`,`ngModelOptions`],[`nzCheckedChildren`,`Hide Search`,`nzUnCheckedChildren`,`Show Search`,3,`ngModelChange`,`click`,`ngModel`,`ngModelOptions`,`disabled`],[`nzType`,`info-circle`,`nz-tooltip`,``,`nzTooltipTitle`,`Clear out all search boxes in order to hide them.`],[`nz-row`,``,`nzJustify`,`center`],[`nzAllowClear`,``,`nzPlaceHolder`,`Sort Order...`,3,`ngModelChange`,`nzBackdrop`,`nzCustomTemplate`,`ngModel`],[3,`nzLabel`,`nzValue`],[`nzSize`,`small`,3,`nzData`],[`nzShowCheckbox`,``,3,`nzCheckedChange`,`nzDisabled`,`nzChecked`,`nzIndeterminate`],[`nz-typography`,``,`nzType`,`warning`],[`nzType`,`info-circle`,`nz-tooltip`,``,`nzTooltipTitle`,`Here are all remaining tags.`],[3,`nzType`],[3,`click`],[`nzShowCheckbox`,``,3,`nzCheckedChange`,`nzChecked`,`nzDisabled`],[`nzType`,`info-circle`,`nz-tooltip`,``,`nzTooltipTitle`,`Here are all selected tags.`]],template:function(o,r){if(o&1&&(Wi$1(0,`div`,8)(1,`div`,9)(2,`nz-space`,10),Nb(3,Xi,1,0,`ng-container`),Qh(4,$i,4,2,`ng-container`,11)(5,ea,4,2,`ng-container`,11),Tl()(),Qh(6,ia,3,0,`ng-template`,null,0,Kw)(8,oa,3,0,`ng-template`,null,1,Kw),Tl(),Wi$1(10,`div`,12)(11,`div`,9)(12,`nz-space`,10),Qh(13,la,2,3,`ng-container`,11),Tl()()(),Wi$1(14,`div`,13)(15,`div`,9)(16,`nz-space`,14),Qh(17,sa,2,4,`ng-container`,11),Nb(18,da,1,0,`ng-container`),Tl()()(),Wi$1(19,`div`)(20,`nz-transfer`,15),ag(`nzSearchChange`,function(g){return r.handleSearchChange(g)})(`nzChange`,function(g){return r.handleChange(g)}),Qh(21,ga,22,7,`ng-template`,null,2,Kw)(23,za,22,7,`ng-template`,null,3,Kw),Tl()()),o&2){let c=tw(22),g=tw(24);vE(3),xb(r.disableApply()?3:-1),vE(15),xb(r.leftSearch||r.rightSearch?18:-1),vE(),hw(Vw(10,Gi)),vE(),eg(`nzDataSource`,r.list)(`nzShowSearch`,r.showSearch)(`nzShowSelectAll`,!1)(`nzFilterOption`,r.handleFilterOption)(`nzRenderList`,Bw(11,qi,c,g))(`nzSortOrder`,r.sortOrder)}},dependencies:[ml,Nr,Ds,qi$1,_n,ji$1,Ui$1,Qi$1,cr,ir,Fa,p9,d9,ta$1,ea$1,ga$1,ma$1,So,Dl,pr,rs,dm$1,ts,qr,mm,rr,ss,ns,vi$1,gn,lt$1,nt,Ve$1,pe,Ql,Zi$1,Yi,Jo,Za],encapsulation:2})}return a})();var Ca=[`drawerTitleTemplate`];function ba(a,h){a&1&&(Nl(0),Wi$1(1,`h4`,13),tg(2,`nz-icon`,14),Tl(),Sl())}function ya(a,h){a&1&&(Nl(0),Wi$1(1,`h5`,15),_w(2,`Do you want to `),tg(3,`br`),_w(4,` reload all articles?`),Tl(),Sl())}function _a(a,h){a&1&&(Wi$1(0,`nz-space`,7),Qh(1,ba,3,0,`ng-container`,8)(2,ya,5,0,`ng-container`,8),Tl())}function Ta(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`button`,11),ag(`nzOnConfirm`,function(){md(i);let r=zb();return yd(r.selectAll())}),tg(2,`nz-icon`,12),Tl(),Qh(3,_a,3,0,`ng-template`,null,1,Kw),Sl()}if(a&2){let i=tw(4),o=zb();vE(),eg(`nzLoading`,o.isArticlesLoading())(`nzIcon`,i)}}function ka(a,h){if(a&1){let i=Hb();Nl(0),Wi$1(1,`button`,16),ag(`click`,function(){md(i);let r=zb();return yd(r.openTagsFilter())}),tg(2,`nz-icon`,17),_w(3,` Tags `),Tl(),Wi$1(4,`nz-badge`,18),tg(5,`a`,19),Tl(),Sl()}if(a&2){let i=zb();vE(),eg(`nzLoading`,i.isTagsLoading()),vE(3),eg(`nzCount`,i.tagCount())}}function va(a,h){if(a&1&&(Wi$1(0,`div`,5)(1,`div`,6)(2,`h3`,20),_w(3),Tl()()()),a&2){let i=zb();vE(3),Mg(i.drawerTitle)}}var dm=[{path:``,pathMatch:`full`,title:`Articles`,data:{key:`articles`},component:(()=>{class a{drawerTitleTemplate=O1(`drawerTitleTemplate`);#e=_(_t);#t=_(Z0);articleListConfig=this.#t.selectors.articleListConfig;windowWidth=this.#t.selectors.width;articleCount=this.#e.selectors.articleCount;articleList=this.#e.selectors.articleList;tagList=this.#e.selectors.tags;drawerService=_(Kn$1);isTagsLoading=Gt(!1);isArticlesLoading=Gt(!1);tagCount=Ll(()=>this.articleListConfig()?.filters.tags?this.articleListConfig().filters.tags.length:0);oldLimit=Gt(this.articleListConfig().filters.limit);drawerTitle=``;noCancel(){return new Promise(o=>{o(!1)})}ngOnInit(){this.#t.setAdminArticles(!1);let i=this.articleListConfig()?.filters;(i?.tags===void 0||i?.tags===null)&&(i?.createdAtAsc===void 0||i?.createdAtAsc===null)?this.selectAll():(this.#e.getTags({loading:this.isTagsLoading,params:null}),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:i.limit,offset:0,tags:i.tags,createdAtAsc:i.createdAtAsc}}))}selectAll(){this.#e.getTags({loading:this.isTagsLoading,params:null}),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:10,offset:0}}),this.oldLimit.set(10)}onPageOffsetChange(i){this.#e.onOffsetChange({loading:this.isArticlesLoading,offset:i})}onPageLimitChange(i){this.#e.onLimitChange({loading:this.isArticlesLoading,limit:i})}openTagsFilter(){if(this.isTagsLoading())return;this.isTagsLoading.set(!0),this.drawerTitle=`Article Tags`;let i=this.articleListConfig()?.filters;this.drawerService.create({nzTitle:this.drawerTitleTemplate(),nzContent:Wn,nzWidth:this.windowWidth()>600?600:this.windowWidth(),nzClosable:!1,nzOnCancel:this.noCancel,nzContentParams:{params:{tagList:this.tagList(),tags:i.tags,createdAtAsc:i.createdAtAsc}}}).afterClose.subscribe(r$1=>{if(r$1){let c=this.articleListConfig()?.filters;this.#e.queryArticle({loading:this.isArticlesLoading,params:s(r({},r$1),{limit:c.limit,offset:0})})}this.isTagsLoading.set(!1)})}pageHeaderInfo={title:`Articles`,desc:`This page is a symbiose between dynamic (.NET Core, SQL Server database) and static (JavaScript, CSS, icon, etc.) resources. All articles are served as static content from JavaScript files compiled by Angular framework. In addition, JavaScript files are served via lazy loading. Articles metadata is stored in the database and served dynamically by .NET Core API controllers.`};static ɵfac=function(o){return new(o||a)};static ɵcmp=YD({type:a,selectors:[[`app-home-listing`]],viewQuery:function(o,r){o&1&&fg(r.drawerTitleTemplate,Ca,5),o&2&&ew()},features:[jw([Tp(_t)])],decls:14,vars:7,consts:[[`drawerTitleTemplate`,``],[`applyTpl`,``],[3,`pageHeaderInfo`],[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`center`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[`nz-row`,``,`nzJustify`,`end`],[3,`nzSetPage`,`nzSetPageSize`,`articleList`,`articlesCount`,`isLoading`,`articleListConfig`,`oldLimit`],[`nz-button`,``,`nzType`,`primary`,`nzShape`,`circle`,`nz-popconfirm`,``,`nzPopconfirmTitle`,` `,`nzPopconfirmShowArrow`,`false`,`nzOkText`,`Yes`,`nzCancelText`,`No`,3,`nzOnConfirm`,`nzLoading`,`nzIcon`],[`nzType`,`sync`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`question-circle-o`],[`nz-typography`,``],[`nz-button`,``,`nzType`,`primary`,`nzShape`,`round`,3,`click`,`nzLoading`],[`nzType`,`tag`],[3,`nzCount`],[1,`head-example`],[`nz-typography`,``,`nzType`,`warning`]],template:function(o,r){o&1&&(tg(0,`app-page-header`,2),Wi$1(1,`div`,3)(2,`nz-card`,4)(3,`div`,5)(4,`div`,6)(5,`nz-space`,7),Qh(6,Ta,5,2,`ng-container`,8),Tl()()(),Wi$1(7,`div`,9)(8,`div`,6)(9,`nz-space`,7),Qh(10,ka,6,2,`ng-container`,8),Tl()()(),Wi$1(11,`app-articles`,10),ag(`nzSetPage`,function(g){return r.onPageOffsetChange(g)})(`nzSetPageSize`,function(g){return r.onPageLimitChange(g)}),Tl(),Qh(12,va,4,1,`ng-template`,null,0,Kw),Tl()()),o&2&&(eg(`pageHeaderInfo`,r.pageHeaderInfo),vE(2),eg(`nzBordered`,!0),vE(9),eg(`articleList`,r.articleList)(`articlesCount`,r.articleCount)(`isLoading`,r.isArticlesLoading)(`articleListConfig`,r.articleListConfig)(`oldLimit`,r.oldLimit))},dependencies:[en,On,Bn$1,fn,qi$1,_n,ji$1,Ui$1,bg,sd,p9,d9,ta$1,ea$1,ga$1,ma$1,So,Dl,Jo,Za,cr,ir,Fa],encapsulation:2})}return a})()},{path:`what-version-of-this-blog`,title:`What Version?`,data:{key:`what-version-of-this-blog`},component:Rn},{path:`svg-icons`,title:`SVG Icons`,data:{key:`svg-icons`},component:Dn},{path:`dotnet-core-testing`,title:`ASP.NET Testing`,data:{key:`dotnet-core-testing`},component:Pn},{path:`about-this-blog`,title:`My Blog`,data:{key:`about-this-blog`},component:Jn},{path:`test-readme`,title:`MyTested Example`,data:{key:`test-readme`},component:Fn},{path:`ratelimit-middleware`,title:`JWT Token Refresh`,data:{key:`ratelimit-middleware`},component:Hn},{path:`testing-angular-apps`,title:`Testing Angular Apps`,data:{key:`testing-angular-apps`},component:Un},{path:`mermaid`,title:`Diagram Examples`,data:{key:`mermaid`},component:jn}];export{dm as BLOG_ROUTES};