import{n as s,t as r}from"./chunk-CK8a7LA6.js";import{$r as rV,$t as Tu,Ai as zt,Bt as Sb,Ci as yd,Ct as Ob,Dt as P1,En as ZD,Et as Ow,Fn as _,Fr as md,Ft as R1,Gt as Sw,Hn as ae,Ht as Sl,It as Rb,Jn as ce,Jr as pe,Kn as bu,N as Fw,Oi as zi$1,On as Ze,P as Gb,Pt as Qw,Q as Iv,Rt as Rw,T as DC,Tn as Yw,Un as ag,Vn as aD,Vt as Sg,Wn as bC,Wr as og,Xr as pw,Xt as Tl,_i as xg,_n as Xb,bt as Nl,ci as vE,cn as Vb,dr as gd,dt as Mb,en as Tw,gn as Ww,gr as hd,hn as Wu,ii as tg,ir as ew,jt as Qh,kr as jw,l as Ab,li as vg,lt as Ll,or as fe,pt as Mg,q as Hw,rr as ev,rt as KD,sr as fg,t as $1,tr as eg,u as Ag,v as Bw,vi as xl,wr as j1,wt as Oe,x as Cc,xr as iD,y as By,zr as nV}from"./chunk-4C0-umFg.js";import{Ft as qa,I as Wl,Mt as p9,Q as be,Vt as u9,ft as hc,jt as p7,p as G4,xt as ka$1,zt as sc}from"./chunk-sfSUphMT.js";import{Y as qf,Z as rd,at as yu,r as Cg,x as Te$1}from"./chunk-CmuCpUoM.js";import{B as ma$1,D as _n,G as qi$1,N as ji$1,V as ml,i as Ds,j as ga$1,m as Nr,x as Ui$1,y as So}from"./chunk-CKQkUQTp.js";import{c as cr,d as nt,l as ir,n as Fa,o as Za,r as Jo,u as lt$1}from"./chunk-z-dShase.js";import{f as ta$1,m as wn,o as Zi$1,r as Jn$1,u as na$1}from"./chunk-CEYu95uz.js";import"./chunk-Bwggjtwv.js";import{n}from"./chunk-jFiBYcdD.js";import{A as Zi$2,B as qr,D as Yi,F as lo,H as rs,I as mm,L as ns,M as dm$1,N as dr,R as o0,T as Un$1,U as ss,V as rr,W as ts,f as $u,g as Dl,k as Z0,m as At,n as Et,p as Al,t as Bt,v as Jl,w as Tp,x as Ql,z as pr}from"./main-RI7DDUWY.js";import{t as en}from"./chunk-BS_vTPqe.js";import{n as pa$1,t as lt$2}from"./chunk-Dkf09BUb.js";import{n as fn,t as Bn$1}from"./chunk-CJZ_BNvb.js";import{c as me,f as Ve,l as oe,o as ie,p as pe$1,s as je}from"./chunk-CqyLQqbi.js";import{i as Vn,n as Si$1,r as Un$2,t as Cn}from"./chunk-B6GdzNS_.js";import{n as bt,r as re,t as ae$1}from"./chunk-BQ3A3nUz.js";var Bn=`alert`;var yt=(()=>{let a,h=[],i=[],o,r=[],c=[];return class Ct{static{let _=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;a=[Wl()],o=[Wl()],DC(null,null,a,{kind:`field`,name:`nzCloseable`,static:!1,private:!1,access:{has:H=>`nzCloseable`in H,get:H=>H.nzCloseable,set:(H,Ie)=>{H.nzCloseable=Ie}},metadata:_},h,i),DC(null,null,o,{kind:`field`,name:`nzShowIcon`,static:!1,private:!1,access:{has:H=>`nzShowIcon`in H,get:H=>H.nzShowIcon,set:(H,Ie)=>{H.nzShowIcon=Ie}},metadata:_},r,c),_&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_})}cdr=_(P1);animationType=_(By,{optional:!0});dir=_(qa).valueSignal;_nzModuleName=Bn;nzAction=null;nzCloseText=null;nzIconType=null;nzMessage=null;nzDescription=null;nzType=`info`;nzCloseable=bC(this,h,!1);nzShowIcon=(bC(this,i),bC(this,r,!1));nzBanner=(bC(this,c),!1);nzNoAnimation=!1;nzIcon=null;nzOnClose=new Ze;closed=!1;iconTheme=`fill`;inferredIconType=`info-circle`;isTypeSet=!1;isShowIconSet=!1;constructor(){G4(Bn,()=>this.cdr.markForCheck())}closeAlert(){this.closed=!0,(this.nzNoAnimation||this.animationType===`NoopAnimations`)&&this.nzOnClose.emit(!0)}onLeaveAnimationDone(_){let H=_.target;if(this.nzNoAnimation||this.animationType===`NoopAnimations`){_.animationComplete();return}H.classList.add(`ant-alert-motion-leave`,`ant-alert-motion-leave-active`);let Ie=()=>{H.removeEventListener(`transitionend`,Ie),this.nzOnClose.emit(!0),_.animationComplete()};H.addEventListener(`transitionend`,Ie)}ngOnChanges(_){let{nzShowIcon:H,nzDescription:Ie,nzType:pt,nzBanner:ct}=_;if(H&&(this.isShowIconSet=!0),pt)switch(this.isTypeSet=!0,this.nzType){case`error`:this.inferredIconType=`close-circle`;break;case`success`:this.inferredIconType=`check-circle`;break;case`info`:this.inferredIconType=`info-circle`;break;case`warning`:this.inferredIconType=`exclamation-circle`}Ie&&(this.iconTheme=this.nzDescription?`outline`:`fill`),ct&&(this.isTypeSet||(this.nzType=`warning`),this.isShowIconSet||(this.nzShowIcon=!0))}static ɵfac=function(H){return new(H||Ct)};static ɵcmp=(function(){function _(C,ee){C&1&&og(0)}function H(C,ee){if(C&1&&Qh(0,_,1,0,`ng-container`,7),C&2){let A=Gb(3);eg(`nzStringTemplateOutlet`,A.nzIcon)}}function Ie(C,ee){if(C&1&&tg(0,`nz-icon`,6),C&2){let A=Gb(3);eg(`nzType`,A.nzIconType||A.inferredIconType)(`nzTheme`,A.iconTheme)}}function pt(C,ee){if(C&1&&(zi$1(0,`div`,2),Mb(1,H,1,1,`ng-container`)(2,Ie,1,2,`nz-icon`,6),Tl()),C&2){let A=Gb(2);vE(),Sb(A.nzIcon?1:2)}}function ct(C,ee){if(C&1&&(Nl(0),Tw(1),Sl()),C&2){let A=Gb(4);vE(),Mg(A.nzMessage)}}function qn(C,ee){if(C&1&&(zi$1(0,`span`,8),Qh(1,ct,2,1,`ng-container`,7),Tl()),C&2){let A=Gb(3);vE(),eg(`nzStringTemplateOutlet`,A.nzMessage)}}function Zn(C,ee){if(C&1&&(Nl(0),Tw(1),Sl()),C&2){let A=Gb(4);vE(),Mg(A.nzDescription)}}function Xn(C,ee){if(C&1&&(zi$1(0,`span`,9),Qh(1,Zn,2,1,`ng-container`,7),Tl()),C&2){let A=Gb(3);vE(),eg(`nzStringTemplateOutlet`,A.nzDescription)}}function $n(C,ee){if(C&1&&(zi$1(0,`div`,3),Mb(1,qn,2,1,`span`,8),Mb(2,Xn,2,1,`span`,9),Tl()),C&2){let A=Gb(2);vE(),Sb(A.nzMessage?1:-1),vE(),Sb(A.nzDescription?2:-1)}}function ei(C,ee){if(C&1&&(Nl(0),Tw(1),Sl()),C&2){let A=Gb(3);vE(),Mg(A.nzAction)}}function ti(C,ee){if(C&1&&(zi$1(0,`div`,4),Qh(1,ei,2,1,`ng-container`,7),Tl()),C&2){let A=Gb(2);vE(),eg(`nzStringTemplateOutlet`,A.nzAction)}}function ni(C,ee){if(C&1&&(Nl(0),zi$1(1,`span`,12),Tw(2),Tl(),Sl()),C&2){let A=Gb(4);vE(2),Mg(A.nzCloseText)}}function ii(C,ee){if(C&1&&Qh(0,ni,3,1,`ng-container`,7),C&2){let A=Gb(3);eg(`nzStringTemplateOutlet`,A.nzCloseText)}}function ai(C,ee){C&1&&tg(0,`nz-icon`,11)}function ri(C,ee){if(C&1){let A=Vb();zi$1(0,`button`,10),ag(`click`,function(){md(A);let xt=Gb(2);return yd(xt.closeAlert())}),Mb(1,ii,1,1,`ng-container`)(2,ai,1,0,`nz-icon`,11),Tl()}if(C&2){let A=Gb(2);vE(),Sb(A.nzCloseText?1:2)}}function oi(C,ee){if(C&1){let A=Vb();zi$1(0,`div`,1),Cc(function(xt){md(A);let si=Gb();return yd(si.onLeaveAnimationDone(xt))}),Mb(1,pt,3,1,`div`,2),Mb(2,$n,3,2,`div`,3),Mb(3,ti,2,1,`div`,4),Mb(4,ri,3,1,`button`,5),Tl()}if(C&2){let A=Gb();vg(`ant-alert-rtl`,A.dir()===`rtl`)(`ant-alert-success`,A.nzType===`success`)(`ant-alert-info`,A.nzType===`info`)(`ant-alert-warning`,A.nzType===`warning`)(`ant-alert-error`,A.nzType===`error`)(`ant-alert-no-icon`,!A.nzShowIcon)(`ant-alert-banner`,A.nzBanner)(`ant-alert-closable`,A.nzCloseable)(`ant-alert-with-description`,!!A.nzDescription),eg(`nzNoAnimation`,A.nzNoAnimation),vE(),Sb(A.nzShowIcon?1:-1),vE(),Sb(A.nzMessage||A.nzDescription?2:-1),vE(),Sb(A.nzAction?3:-1),vE(),Sb(A.nzCloseable||A.nzCloseText?4:-1)}}return ZD({type:Ct,selectors:[[`nz-alert`]],inputs:{nzAction:`nzAction`,nzCloseText:`nzCloseText`,nzIconType:`nzIconType`,nzMessage:`nzMessage`,nzDescription:`nzDescription`,nzType:`nzType`,nzCloseable:[2,`nzCloseable`,`nzCloseable`,j1],nzShowIcon:[2,`nzShowIcon`,`nzShowIcon`,j1],nzBanner:[2,`nzBanner`,`nzBanner`,j1],nzNoAnimation:[2,`nzNoAnimation`,`nzNoAnimation`,j1],nzIcon:`nzIcon`},outputs:{nzOnClose:`nzOnClose`},exportAs:[`nzAlert`],features:[ev],decls:1,vars:1,consts:[[1,`ant-alert`,3,`nzNoAnimation`,`ant-alert-rtl`,`ant-alert-success`,`ant-alert-info`,`ant-alert-warning`,`ant-alert-error`,`ant-alert-no-icon`,`ant-alert-banner`,`ant-alert-closable`,`ant-alert-with-description`],[1,`ant-alert`,3,`nzNoAnimation`],[1,`ant-alert-icon`],[1,`ant-alert-content`],[1,`ant-alert-action`],[`type`,`button`,`tabindex`,`0`,1,`ant-alert-close-icon`],[3,`nzType`,`nzTheme`],[4,`nzStringTemplateOutlet`],[1,`ant-alert-message`],[1,`ant-alert-description`],[`type`,`button`,`tabindex`,`0`,1,`ant-alert-close-icon`,3,`click`],[`nzType`,`close`],[1,`ant-alert-close-text`]],template:function(ee,A){ee&1&&Mb(0,oi,5,23,`div`,0),ee&2&&Sb(A.closed?-1:0)},dependencies:[u9,p9,sc,hc,ka$1],encapsulation:2})})()}})();var Te=class bt{static ɵfac=function(o){return new(o||bt)};static ɵmod=KD({type:bt});static ɵinj=Wu({imports:[yt]})};var di=()=>({standalone:!0});function pi(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,53),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,54),tg(3,`nz-icon`,55),Tl()(),Sl()}}function ci(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,53),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,54),Tw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var it=110;var Rn=(()=>{class a{destroyRef=_(ce);router=_(Te$1);#e=_(Z0);injector=_(ae);viewPort=_(p7);zone=_(fe);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=zt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){rV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-it>640?this.width.set(640):this.width.set(this.windowWidth()-it-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-it>640?this.width.set(640):this.width.set(i-it-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Oe(i).pipe(nV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`nz-blog-what-version-of-this-blog`]],features:[Fw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:432,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-8a303762`,`nzTitle`,`The Problem`],[`nzHref`,`#h-c36299ac`,`nzTitle`,`Case Scenario #1`],[`nzHref`,`#h-a42d4269`,`nzTitle`,`Case Scenario #2`],[`nzHref`,`#h-b3708047`,`nzTitle`,`Case Scenario #3`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20211009-what-version-of-this-blog.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[`id`,`h-8a303762`],[`onclick`,`window.location.hash = 'h-8a303762'`,1,`anchor`],[`href`,`https://stackoverflow.com/questions/55494181/what-is-the-purpose-of-swupdate-activateupdate-in-angular/59175788#59175788`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-c36299ac`],[`onclick`,`window.location.hash = 'h-c36299ac'`,1,`anchor`],[`href`,`https://github.com/cioina/openshift-laravel-example/blob/main/src/acioina/site/src/Acioina/UserManagement/Http/Controllers/Api/VersionController.php`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-php`],[1,`hljs-meta`],[1,`hljs-keyword`],[1,`hljs-title`,`class_`],[1,`hljs-title`],[1,`hljs-class`],[1,`hljs-variable`,`constant_`],[1,`hljs-string`],[1,`hljs-function`],[1,`hljs-params`],[1,`hljs-variable`],[1,`hljs-built_in`],[1,`hljs-title`,`function_`,`invoke__`],[1,`hljs-variable`,`language_`],[1,`language-typescript`],[1,`hljs-attr`],[1,`language-csharp`],[1,`hljs-literal`],[1,`hljs-title`,`function_`],[1,`hljs-property`],[`id`,`h-a42d4269`],[`onclick`,`window.location.hash = 'h-a42d4269'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0/wwwroot`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ngrx/platform/blob/19.2.x/projects/ngrx.io/src/app/sw-updates/sw-updates.service.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-b3708047`],[`onclick`,`window.location.hash = 'h-b3708047'`,1,`anchor`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(zi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,pi,4,0,`ng-container`,5)(6,ci,4,0,`ng-container`,5),Tl()()(),zi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),Tw(11,`Jump to top`),Tl()(),zi$1(12,`div`,3)(13,`nz-switch`,9),iD(),Ag(`ngModelChange`,function(g){return Sw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),zi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14),Tl()(),zi$1(19,`span`,15),Tw(20,` What Version of This Blog Do You See?`),tg(21,`span`,16)(22,`span`,17),zi$1(23,`a`,18),tg(24,`nz-icon`,19),Tl()(),zi$1(25,`article`,20),gd(),zi$1(26,`p`),Tw(27,`As you can see, this website does not have a formal version tag. It uses the latest version of `),zi$1(28,`code`),Tw(29,`ng-zorro-antd`),Tl(),Tw(30,` and Angular as some kind of version tag. So, just imagine how surprised I was when I deployed this website compiled with Angular `),zi$1(31,`code`),Tw(32,`12.2.9`),Tl(),Tw(33,` and checking my very old Samsung that runs on Android 4.4.2. For some reason, the old Chrome web browser does not want to load this website correctly, so, I use an old version of FireFox browser for Android (As you may know, Google does not allow to update apps for old Android versions.) FireFox worked ok at first. But, when I closed and opened the browser again, this site loaded automatically and showed Angular `),zi$1(34,`code`),Tw(35,`12.2.4`),Tl(),Tw(36,` at the bottom of the footer. Somehow, FireFox cached an old version of my website. Deleting the FireFox cache did not help, but, reloading the URL would show the correct Angular `),zi$1(37,`code`),Tw(38,`12.2.9`),Tl(),Tw(39,`.`),Tl(),zi$1(40,`blockquote`)(41,`p`),Tw(42,`It looks like starting with Angular 16, this website will not work at all anymore on outdated devices!`),Tl()(),zi$1(43,`h2`,21)(44,`span`),Tw(45,`The Problem`),Tl(),zi$1(46,`a`,22),Tw(47,`#`),Tl()(),zi$1(48,`p`),Tw(49,`It may be problematic to have latest version for some websites that use Angular with a lot of lazy-loading modules. Imagine a user browsing your website just seconds before you start to deploy a new version of your website. The user will still have the old version (old Angular compiled JavaScript files) even after the deployment ends. We will consider three case scenarios here and will try to implement solution #2 from `),zi$1(50,`strong`),Tw(51,`gkalpak`),Tl(),Tw(52,`'s `),zi$1(53,`a`,23),Tw(54,`StackOverflow`),Tl(),Tw(55,` answer. We will let website users know that a new version is available and ask them to refresh the webpage.`),Tl(),zi$1(56,`h2`,24)(57,`span`),Tw(58,`Case Scenario #1`),Tl(),zi$1(59,`a`,25),Tw(60,`#`),Tl()(),zi$1(61,`p`),Tw(62,`From my experience, the problem may appear for old/outdated web browsers like one described above or when you open multiple tabs of the same page. You will get a message to reload/refresh the page with an error similar to `),zi$1(63,`strong`),Tw(64,`ERROR: b607b9112d`),Tl(),Tw(65,` (where b607b9112d is the new hash.)`),Tl(),zi$1(66,`p`),Tw(67,`It was very simple for me to implement this solution because I use a server-side API and deploy my backend and frontend on the same server and generate my deployment with a Node.js script. So, I generate `),zi$1(68,`a`,26),Tw(69,`a small PHP file`),Tl(),Tw(70,` and small TypeScript file with some unique hash.`),Tl(),zi$1(71,`p`)(72,`strong`)(73,`code`),Tw(74,`VersionController.php`),Tl()()(),zi$1(75,`pre`,27)(76,`code`)(77,`span`,28),Tw(78,`<?php`),Tl(),Tw(79,`
`),zi$1(80,`span`,29),Tw(81,`namespace`),Tl(),Tw(82,` `),zi$1(83,`span`,30),Tw(84,`Acioina`),Tl(),Tw(85,`\\`),zi$1(86,`span`,30),Tw(87,`UserManagement`),Tl(),Tw(88,`\\`),zi$1(89,`span`,30),Tw(90,`Http`),Tl(),Tw(91,`\\`),zi$1(92,`span`,30),Tw(93,`Controllers`),Tl(),Tw(94,`\\`),zi$1(95,`span`,30),Tw(96,`Api`),Tl(),Tw(97,`;
`),zi$1(98,`span`,29),Tw(99,`use`),Tl(),Tw(100,` `),zi$1(101,`span`,31),Tw(102,`Acioina`),Tl(),Tw(103,`\\`),zi$1(104,`span`,31),Tw(105,`UserManagement`),Tl(),Tw(106,`\\`),zi$1(107,`span`,31),Tw(108,`Transformers`),Tl(),Tw(109,`\\`),zi$1(110,`span`,31),Tw(111,`VersionTransformer`),Tl(),Tw(112,`;

`),zi$1(113,`span`,32)(114,`span`,29),Tw(115,`class`),Tl(),Tw(116,` `),zi$1(117,`span`,31),Tw(118,`VersionController`),Tl(),Tw(119,` `),zi$1(120,`span`,29),Tw(121,`extends`),Tl(),Tw(122,` `),zi$1(123,`span`,31),Tw(124,`ApiController`),Tl(),Tw(125,`
`),Tl(),Tw(126,`{
    `),zi$1(127,`span`,29),Tw(128,`private`),Tl(),Tw(129,` `),zi$1(130,`span`,29),Tw(131,`const`),Tl(),Tw(132,` `),zi$1(133,`span`,33),Tw(134,`ANGULAR_APP_HASH`),Tl(),Tw(135,` = `),zi$1(136,`span`,34),Tw(137,`'b607b9112d'`),Tl(),Tw(138,`;

    `),zi$1(139,`span`,29),Tw(140,`public`),Tl(),Tw(141,` `),zi$1(142,`span`,35)(143,`span`,29),Tw(144,`function`),Tl(),Tw(145,` `),zi$1(146,`span`,31),Tw(147,`__construct`),Tl(),Tw(148,`(`),zi$1(149,`span`,36),Tw(150,`VersionTransformer `),zi$1(151,`span`,37),Tw(152,`$transformer`),Tl()(),Tw(153,`)
    `),Tl(),Tw(154,`{
        `),zi$1(155,`span`,38),Tw(156,`parent`),Tl(),Tw(157,`::`),zi$1(158,`span`,39),Tw(159,`__construct`),Tl(),Tw(160,`(`),zi$1(161,`span`,37),Tw(162,`$transformer`),Tl(),Tw(163,`);
    }

    `),zi$1(164,`span`,29),Tw(165,`public`),Tl(),Tw(166,` `),zi$1(167,`span`,35)(168,`span`,29),Tw(169,`function`),Tl(),Tw(170,` `),zi$1(171,`span`,31),Tw(172,`index`),Tl(),Tw(173,`(`),tg(174,`span`,36),Tw(175,`)
    `),Tl(),Tw(176,`{
        `),zi$1(177,`span`,29),Tw(178,`return`),Tl(),Tw(179,` `),zi$1(180,`span`,40),Tw(181,`$this`),Tl(),Tw(182,`->`),zi$1(183,`span`,39),Tw(184,`respondWithTransformer`),Tl(),Tw(185,`([`),zi$1(186,`span`,34),Tw(187,`'hash'`),Tl(),Tw(188,` => `),zi$1(189,`span`,38),Tw(190,`self`),Tl(),Tw(191,`::`),zi$1(192,`span`,33),Tw(193,`ANGULAR_APP_HASH`),Tl(),Tw(194,`]);
    }
}`),Tl()(),zi$1(195,`p`)(196,`strong`)(197,`code`),Tw(198,`version.ts`),Tl()()(),zi$1(199,`pre`,41)(200,`code`)(201,`span`,29),Tw(202,`export`),Tl(),Tw(203,` `),zi$1(204,`span`,29),Tw(205,`const`),Tl(),Tw(206,` `),zi$1(207,`span`,33),Tw(208,`APP_VERSION`),Tl(),Tw(209,` = {
  `),zi$1(210,`span`,42),Tw(211,`version`),Tl(),Tw(212,`: `),zi$1(213,`span`,34),Tw(214,`'0.0.0'`),Tl(),Tw(215,`,
  `),zi$1(216,`span`,42),Tw(217,`hash`),Tl(),Tw(218,`: `),zi$1(219,`span`,34),Tw(220,`'b607b9112d'`),Tl(),Tw(221,`,
};`),Tl()(),zi$1(222,`p`),Tw(223,`Currently we are moving our server-side to ASP.NET Core and we are generating this small file:`),Tl(),zi$1(224,`p`)(225,`strong`)(226,`code`),Tw(227,`VersionResponseModel.cs`),Tl()()(),zi$1(228,`pre`,43)(229,`code`)(230,`span`,29),Tw(231,`namespace`),Tl(),Tw(232,` `),zi$1(233,`span`,31),Tw(234,`BlogAngular.Application.Common.Version`),Tl(),Tw(235,`;
`),zi$1(236,`span`,29),Tw(237,`using`),Tl(),Tw(238,` Newtonsoft.Json;
`),zi$1(239,`span`,29),Tw(240,`public`),Tl(),Tw(241,` `),zi$1(242,`span`,29),Tw(243,`class`),Tl(),Tw(244,` `),zi$1(245,`span`,31),Tw(246,`VersionResponseModel`),Tl(),Tw(247,`
{
    `),zi$1(248,`span`,35)(249,`span`,29),Tw(250,`public`),Tl(),Tw(251,` `),zi$1(252,`span`,31),Tw(253,`VersionResponseModel`),Tl(),Tw(254,`()`),Tl(),Tw(255,`
    {
        Hash = `),zi$1(256,`span`,34),Tw(257,`"b607b9112d"`),Tl(),Tw(258,`;
    }

    [`),zi$1(259,`span`,28),Tw(260,`JsonProperty(`),zi$1(261,`span`,34),Tw(262,`"hash"`),Tl(),Tw(263,`)`),Tl(),Tw(264,`]
    `),zi$1(265,`span`,29),Tw(266,`public`),Tl(),Tw(267,` `),zi$1(268,`span`,38),Tw(269,`string`),Tl(),Tw(270,`? Hash { `),zi$1(271,`span`,29),Tw(272,`get`),Tl(),Tw(273,`; } = `),zi$1(274,`span`,44),Tw(275,`default`),Tl(),Tw(276,`!;
}`),Tl()(),zi$1(277,`p`),Tw(278,`In my `),zi$1(279,`code`),Tw(280,`app.component.ts`),Tl(),Tw(281,`, I have something like this:`),Tl(),zi$1(282,`pre`,41)(283,`code`)(284,`span`,28),Tw(285,`@Component`),Tl(),Tw(286,`({
  `),zi$1(287,`span`,42),Tw(288,`selector`),Tl(),Tw(289,`: `),zi$1(290,`span`,34),Tw(291,`'app-root'`),Tl(),Tw(292,`,
  `),zi$1(293,`span`,42),Tw(294,`template`),Tl(),Tw(295,`: `),zi$1(296,`span`,34),Tw(297,`\`
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
\``),Tl(),Tw(298,`
`),zi$1(299,`span`,29),Tw(300,`export`),Tl(),Tw(301,` `),zi$1(302,`span`,29),Tw(303,`class`),Tl(),Tw(304,` `),zi$1(305,`span`,30),Tw(306,`DefaultComponent`),Tl(),Tw(307,` {
  `),zi$1(308,`span`,29),Tw(309,`readonly`),Tl(),Tw(310,` #authStore = `),zi$1(311,`span`,45),Tw(312,`inject`),Tl(),Tw(313,`(`),zi$1(314,`span`,30),Tw(315,`AuthStore`),Tl(),Tw(316,`);
  `),zi$1(317,`span`,29),Tw(318,`readonly`),Tl(),Tw(319,` isNotCurrentVersion = computed<`),zi$1(320,`span`,38),Tw(321,`boolean`),Tl(),Tw(322,`>(
    `),zi$1(323,`span`,35),Tw(324,`() =>`),Tl(),Tw(325,` !!`),zi$1(326,`span`,40),Tw(327,`this`),Tl(),Tw(328,`.`),zi$1(329,`span`,45),Tw(330,`hash`),Tl(),Tw(331,`() && !(`),zi$1(332,`span`,40),Tw(333,`this`),Tl(),Tw(334,`.`),zi$1(335,`span`,45),Tw(336,`hash`),Tl(),Tw(337,`() === `),zi$1(338,`span`,33),Tw(339,`APP_VERSION`),Tl(),Tw(340,`.`),zi$1(341,`span`,46),Tw(342,`hash`),Tl(),Tw(343,` || `),zi$1(344,`span`,40),Tw(345,`this`),Tl(),Tw(346,`.`),zi$1(347,`span`,45),Tw(348,`hash`),Tl(),Tw(349,`() === `),zi$1(350,`span`,34),Tw(351,`'SwUpdatesService: activated'`),Tl(),Tw(352,`)
  );
  `),zi$1(353,`span`,29),Tw(354,`readonly`),Tl(),Tw(355,` hash = computed<`),zi$1(356,`span`,38),Tw(357,`string`),Tl(),Tw(358,`>(`),zi$1(359,`span`,35),Tw(360,`() =>`),Tl(),Tw(361,` `),zi$1(362,`span`,40),Tw(363,`this`),Tl(),Tw(364,`.#authStore.`),zi$1(365,`span`,46),Tw(366,`selectors`),Tl(),Tw(367,`.`),zi$1(368,`span`,45),Tw(369,`version`),Tl(),Tw(370,`().`),zi$1(371,`span`,46),Tw(372,`hash`),Tl(),Tw(373,`);
  `),zi$1(374,`span`,29),Tw(375,`readonly`),Tl(),Tw(376,` currentVersion = `),zi$1(377,`span`,33),Tw(378,`ZORRO_VERSION`),Tl(),Tw(379,`.`),zi$1(380,`span`,46),Tw(381,`full`),Tl(),Tw(382,`;
  `),zi$1(383,`span`,29),Tw(384,`readonly`),Tl(),Tw(385,` angularVersion = `),zi$1(386,`span`,33),Tw(387,`ANGULAR_VERSION`),Tl(),Tw(388,`.`),zi$1(389,`span`,46),Tw(390,`full`),Tl(),Tw(391,`;
  `),zi$1(392,`span`,29),Tw(393,`readonly`),Tl(),Tw(394,` compiledDate = `),zi$1(395,`span`,33),Tw(396,`APP_VERSION`),Tl(),Tw(397,`.`),zi$1(398,`span`,46),Tw(399,`version`),Tl(),Tw(400,`;`),Tl()(),zi$1(401,`p`),Tw(402,`I compile my frontend app with a command like this: `),zi$1(403,`code`),Tw(404,`yarn build:site`),Tl(),Tw(405,`. This simple solution helped me to solve my FireFox problem, however, the most logical solution is not to allow outdated web browsers to access this website.`),Tl(),zi$1(406,`h2`,47)(407,`span`),Tw(408,`Case Scenario #2`),Tl(),zi$1(409,`a`,48),Tw(410,`#`),Tl()(),zi$1(411,`p`),Tw(412,`This is the most common case scenario for modern (up to date) web browsers based on Google Chrome. It happens when you open this website from the browser bookmarks or when you browse this website while a new version was deployed to the server. You will get a message to reload/refresh the page with `),zi$1(413,`strong`),Tw(414,`ERROR: SwUpdatesService: activated`),Tl(),Tw(415,`. This website uses a Service Worker loaded from `),zi$1(416,`a`,49),Tw(417,`ngsw-worker.js`),Tl(),Tw(418,`. In addition, we use Angular `),zi$1(419,`a`,50),Tw(420,`SwUpdates`),Tl(),Tw(421,` which will load updated resources of the website behind the scene on the user's machine. Theoretically, this website should work fine without reloading most of the time.`),Tl(),zi$1(422,`h2`,51)(423,`span`),Tw(424,`Case Scenario #3`),Tl(),zi$1(425,`a`,52),Tw(426,`#`),Tl()(),zi$1(427,`p`),Tw(428,`This case scenario happens when you open multiple tabs of this website while a new version was deployed to the server. You will get a message to reload/refresh the page with `),zi$1(429,`strong`),Tw(430,`ERROR: GlobalErrorHandler`),Tl(),Tw(431,`. It means that the browser tries to load old resources that were deleted by a new deployment.`),Tl(),hd(),Tl()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,jw(7,di)),aD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,Cg,rd,cr,ir,Fa,u9,p9,Un$2,qi$1,_n,ji$1,Jo,Za,Al,ga$1,ma$1,So,Ve,pe$1,yu],encapsulation:2})}return a})();var xi=()=>({standalone:!0});function hi(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,123),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,124),tg(3,`nz-icon`,125),Tl()(),Sl()}}function Ei(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,123),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,124),Tw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var at=110;var Dn=(()=>{class a{destroyRef=_(ce);router=_(Te$1);#e=_(Z0);injector=_(ae);viewPort=_(p7);zone=_(fe);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!0;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=zt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){rV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-at>640?this.width.set(640):this.width.set(this.windowWidth()-at-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-at>640?this.width.set(640):this.width.set(i-at-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Oe(i).pipe(nV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`nz-blog-svg-icons`]],features:[Fw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!0}}])],decls:980,vars:10,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-175576ef`,`nzTitle`,`List of icons`],[`nzHref`,`#h-db974238`,`nzTitle`,`API`],[`nzHref`,`#h-47e19927`,`nzTitle`,`nz-icon, [nz-icon]`],[`nzHref`,`#h-1a353508`,`nzTitle`,`NzIconService`],[`nzHref`,`#h-ed485f46`,`nzTitle`,`SVG icons`],[`nzHref`,`#h-ec99ccb9`,`nzTitle`,`Static loading and dynamic loading`],[`nzHref`,`#h-32e641c4`,`nzTitle`,`Add Icons in Lazy-loaded Components`],[`nzHref`,`#h-93e3a3a1`,`nzTitle`,`Set Default TwoTone Color`],[`nzHref`,`#h-3ce4aec9`,`nzTitle`,`Custom Font Icon`],[`nzHref`,`#h-b3ba0fe9`,`nzTitle`,`Namespace`],[`nzHref`,`#h-1fe917b0`,`nzTitle`,`FAQ`],[`nzHref`,`#h-81929100`,`nzTitle`,`All my icons are gone!`],[`nzHref`,`#h-a81dd5f2`,`nzTitle`,`There are two similar icons in a `],[`nzHref`,`#h-62a9076a`,`nzTitle`,`I want to import all icons statically. What should I do?`],[`nzHref`,`#h-5de90099`,`nzTitle`,`Does dynamic loading affect web pages' performance?`],[`nzHref`,`#h-3d43bf4a`,`nzTitle`,`How do I know an icon's corresponding module to import?`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230219-svg-icons.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/doc/index.en-US.md`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`pic-plus`,2,`text-align`,`center`],[`nzType`,`custom:zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:angular`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:ng-zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-row`,``,`nzJustify`,`center`,1,`p-t-24`],[`videoId`,`bGUfm_E5iZo`,`placeholderImageQuality`,`high`,3,`width`],[`videoId`,`7j1t3UZA1TY`,`placeholderImageQuality`,`high`,3,`width`],[`id`,`h-5504977c`],[`onclick`,`window.location.hash = 'h-5504977c'`,1,`anchor`],[1,`mermaid`],[`id`,`h-5f3a8aa0`],[`onclick`,`window.location.hash = 'h-5f3a8aa0'`,1,`anchor`],[`id`,`h-ed81be50`],[`onclick`,`window.location.hash = 'h-ed81be50'`,1,`anchor`],[`id`,`h-d67b37b2`],[`onclick`,`window.location.hash = 'h-d67b37b2'`,1,`anchor`],[`id`,`h-f3b60b4e`],[`onclick`,`window.location.hash = 'h-f3b60b4e'`,1,`anchor`],[`id`,`h-c75b170a`],[`onclick`,`window.location.hash = 'h-c75b170a'`,1,`anchor`],[`id`,`h-0fd89a6a`],[`onclick`,`window.location.hash = 'h-0fd89a6a'`,1,`anchor`],[`id`,`h-9f221950`],[`onclick`,`window.location.hash = 'h-9f221950'`,1,`anchor`],[`id`,`h-f2803148`],[`onclick`,`window.location.hash = 'h-f2803148'`,1,`anchor`],[`id`,`h-175576ef`],[`onclick`,`window.location.hash = 'h-175576ef'`,1,`anchor`],[`href`,`https://ant.design/components/icon/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-db974238`],[`onclick`,`window.location.hash = 'h-db974238'`,1,`anchor`],[`id`,`h-47e19927`],[1,`api-type-label`,`component`],[`onclick`,`window.location.hash = 'h-47e19927'`,1,`anchor`],[`href`,`https://github.com/twbs/icons`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://icons.getbootstrap.com/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-svg`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-1a353508`],[1,`api-type-label`,`service`],[`onclick`,`window.location.hash = 'h-1a353508'`,1,`anchor`],[`id`,`h-ed485f46`],[`onclick`,`window.location.hash = 'h-ed485f46'`,1,`anchor`],[1,`language-html`],[1,`hljs-tag`],[1,`hljs-name`],[1,`hljs-attr`],[1,`hljs-string`],[`id`,`h-ec99ccb9`],[`onclick`,`window.location.hash = 'h-ec99ccb9'`,1,`anchor`],[`nzType`,`info`,`nzMessage`,`Note:`,`nzDescription`,`As for icons provided by Ant Design, there are two ways to import them into your project.`,`nzShowIcon`,``],[1,`language-ts`],[1,`hljs-keyword`],[1,`hljs-title`,`class_`],[1,`hljs-comment`],[1,`hljs-title`,`function_`],[1,`language-json`],[1,`hljs-punctuation`],[`id`,`h-32e641c4`],[`onclick`,`window.location.hash = 'h-32e641c4'`,1,`anchor`],[1,`hljs-meta`],[`id`,`h-93e3a3a1`],[`onclick`,`window.location.hash = 'h-93e3a3a1'`,1,`anchor`],[`id`,`h-3ce4aec9`],[`onclick`,`window.location.hash = 'h-3ce4aec9'`,1,`anchor`],[`href`,`http://iconfont.cn/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-variable`,`language_`],[1,`hljs-property`],[`href`,`https://www.iconfont.cn/help/detail?helptype=code`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-b3ba0fe9`],[`onclick`,`window.location.hash = 'h-b3ba0fe9'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0/wwwroot/assets/custom`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-1fe917b0`],[`onclick`,`window.location.hash = 'h-1fe917b0'`,1,`anchor`],[`id`,`h-81929100`],[`onclick`,`window.location.hash = 'h-81929100'`,1,`anchor`],[`id`,`h-0dfac33e`],[`onclick`,`window.location.hash = 'h-0dfac33e'`,1,`anchor`],[`id`,`h-62a9076a`],[`onclick`,`window.location.hash = 'h-62a9076a'`,1,`anchor`],[`href`,`https://ng.ant.design/components/icon/en#static-loading-and-dynamic-loading`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-built_in`],[1,`hljs-function`],[1,`hljs-params`],[`id`,`h-5de90099`],[`onclick`,`window.location.hash = 'h-5de90099'`,1,`anchor`],[`id`,`h-3d43bf4a`],[`onclick`,`window.location.hash = 'h-3d43bf4a'`,1,`anchor`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(zi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,hi,4,0,`ng-container`,5)(6,Ei,4,0,`ng-container`,5),Tl()()(),zi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),Tw(11,`Jump to top`),Tl()(),zi$1(12,`div`,3)(13,`nz-switch`,9),iD(),Ag(`ngModelChange`,function(g){return Sw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),zi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19)(24,`nz-link`,20)(25,`nz-link`,21)(26,`nz-link`,22)(27,`nz-link`,23)(28,`nz-link`,24)(29,`nz-link`,25)(30,`nz-link`,26),Tl()(),zi$1(31,`span`,27),Tw(32,` Semantic Vector Graphics (SVG) Icons`),tg(33,`span`,28)(34,`span`,29),zi$1(35,`a`,30),tg(36,`nz-icon`,31),Tl()(),zi$1(37,`article`,32)(38,`blockquote`,33)(39,`p`)(40,`strong`),Tw(41,`This is a modified version of the `),zi$1(42,`a`,34),Tw(43,`NG-ZORRO original`),Tl(),Tw(44,` document provided under `),zi$1(45,`a`,35),Tw(46,`Alibaba.com MIT LICENSE`),Tl(),Tw(47,`.`),Tl()()(),zi$1(48,`div`,36),tg(49,`nz-icon`,37),zi$1(50,`span`),Tw(51,`+`),Tl(),tg(52,`nz-icon`,38),zi$1(53,`span`),Tw(54,`=`),Tl(),tg(55,`nz-icon`,39),Tl(),zi$1(56,`div`,40),tg(57,`app-youtube-player`,41),Tl(),zi$1(58,`div`,40),tg(59,`app-youtube-player`,42),Tl(),zi$1(60,`h4`,43)(61,`span`),Tw(62,`Example 1`),Tl(),zi$1(63,`a`,44),Tw(64,`#`),Tl()(),zi$1(65,`pre`,45),Tw(66,`block-beta
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
  style B fill:#969,stroke:#333,stroke-width:4px`),Tl(),zi$1(67,`h4`,46)(68,`span`),Tw(69,`Example 2`),Tl(),zi$1(70,`a`,47),Tw(71,`#`),Tl()(),zi$1(72,`pre`,45),Tw(73,`block-beta
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
  end  `),Tl(),zi$1(74,`h4`,48)(75,`span`),Tw(76,`Example 3`),Tl(),zi$1(77,`a`,49),Tw(78,`#`),Tl()(),zi$1(79,`pre`,45),Tw(80,`block-beta
  id1[/"This is the text in the box"/]
  id2["This is the text in the box"]
  A[/"Christmas"]
  B["Go shopping"/]`),Tl(),zi$1(81,`h4`,50)(82,`span`),Tw(83,`Example 4`),Tl(),zi$1(84,`a`,51),Tw(85,`#`),Tl()(),zi$1(86,`pre`,45),Tw(87,`block-beta
  blockArrowId<["Label"]>(right)
  blockArrowId2<["Label"]>(left)
  blockArrowId3<["Label"]>(up)
  blockArrowId4<["Label"]>(down)
  blockArrowId5<["Label"]>(x)
  blockArrowId6<["Label"]>(y)
  blockArrowId6<["Label"]>(x, down)`),Tl(),zi$1(88,`h4`,52)(89,`span`),Tw(90,`Example 5`),Tl(),zi$1(91,`a`,53),Tw(92,`#`),Tl()(),zi$1(93,`pre`,45),Tw(94,`block-beta
  columns 3
  Start(("Start")) space:2
  down<[" "]>(down) space:2
  Decision("Make Decision") right<["Yes"]>(right) Process1["Process A"]
  downAgain<["No"]>(down) space r3<["Done"]>(down)
  Process2["Process B"] r2<["Done"]>(right) End(("End"))

  style Start fill:#969;
  style End fill:#696;`),Tl(),zi$1(95,`h4`,54)(96,`span`),Tw(97,`Example 6`),Tl(),zi$1(98,`a`,55),Tw(99,`#`),Tl()(),zi$1(100,`pre`,45),Tw(101,`graph LR
  A["(1.1)"]
  B("$$\\begin{array} {lcl} L(p,w_i) &=& \\dfrac{1}{N}\\Sigma_{i=1}^N(\\underbrace{f_r(x_2 \\rightarrow x_1 \\rightarrow x_0)G(x_1 \\longleftrightarrow x_2)f_r(x_3 \\rightarrow x_2 \\rightarrow x_1)}_{sample\\, radiance\\,evaluation\\, in\\, stage2} \\\\\\\\\\\\\\\\ &=& \\prod_{i=3}^{k-1}(\\underbrace{\\dfrac{f_r(x_{i+1} \\rightarrow x_i \\rightarrow x_{i-1})G(x_i \\longleftrightarrow x_{i-1})}{p_a(x_{i-1})}}_{stored\\,in\\,vertex\\, during\\,light\\, path\\, tracing\\, in\\, stage1})\\dfrac{G(x_k \\longleftrightarrow x_{k-1})L_e(x_k \\rightarrow x_{k-1})}{p_a(x_{k-1})p_a(x_k)}) \\end{array}$$")
  A-->B`),Tl(),zi$1(102,`h4`,56)(103,`span`),Tw(104,`Example 7`),Tl(),zi$1(105,`a`,57),Tw(106,`#`),Tl()(),zi$1(107,`pre`,45),Tw(108,`graph LR
  A["(1.2)"]
  B("$$\\sqrt{\\frac{\\pi(1-\\pi)}{n}}$$")
  A-->B`),Tl(),zi$1(109,`h4`,58)(110,`span`),Tw(111,`Example 8`),Tl(),zi$1(112,`a`,59),Tw(113,`#`),Tl()(),zi$1(114,`pre`,45),Tw(115,` graph LR
   A["$$x^2$$"] -->|"$$\\sqrt{x+3}$$"| B("$$\\frac{1}{2}$$")
   A -->|"$$\\overbrace{a+b+c}^{\\text{note}}$$"| C("$$\\pi r^2$$")
   B --> D("$$x = \\begin{cases} a &\\text{if } b \\\\ c &\\text{if } d \\end{cases}$$")
   C --> E("$$x(t)=c_1\\begin{bmatrix}-\\cos{t}+\\sin{t}\\\\ 2\\cos{t} \\end{bmatrix}e^{2t}$$")`),Tl(),zi$1(116,`h4`,60)(117,`span`),Tw(118,`Example 9`),Tl(),zi$1(119,`a`,61),Tw(120,`#`),Tl()(),zi$1(121,`pre`,45),Tw(122,`sequenceDiagram
  autonumber
  participant 1 as $$\\alpha$$
  participant 2 as $$\\beta$$
  1->>2: Solve: $$\\sqrt{2+2}$$
  2-->>1: Answer: $$2$$
  Note right of 2: $$\\sqrt{2+2}=\\sqrt{4}=2$$`),Tl(),zi$1(123,`h2`,62)(124,`span`),Tw(125,`List of icons`),Tl(),zi$1(126,`a`,63),Tw(127,`#`),Tl()(),zi$1(128,`p`),Tw(129,`We keep in syncing with `),zi$1(130,`a`,64),Tw(131,`antd`),Tl(),Tw(132,`.`),Tl(),zi$1(133,`h2`,65)(134,`span`),Tw(135,`API`),Tl(),zi$1(136,`a`,66),Tw(137,`#`),Tl()(),zi$1(138,`h3`,67)(139,`span`),Tw(140,`nz-icon, [nz-icon]`),Tl(),zi$1(141,`label`,68),Tw(142,`component`),Tl(),zi$1(143,`a`,69),Tw(144,`#`),Tl()(),zi$1(145,`table`)(146,`thead`)(147,`tr`)(148,`th`),Tw(149,`Property`),Tl(),zi$1(150,`th`),Tw(151,`Description`),Tl(),zi$1(152,`th`),Tw(153,`Type`),Tl(),zi$1(154,`th`),Tw(155,`Default`),Tl(),zi$1(156,`th`),Tw(157,`Global Config`),Tl()()(),zi$1(158,`tbody`)(159,`tr`)(160,`td`)(161,`code`),Tw(162,`[nzType]`),Tl()(),zi$1(163,`td`),Tw(164,`Type of the ant design icon`),Tl(),zi$1(165,`td`)(166,`code`),Tw(167,`string`),Tl()(),zi$1(168,`td`),Tw(169,`-`),Tl(),zi$1(170,`td`),Tw(171,`-`),Tl()(),zi$1(172,`tr`)(173,`td`)(174,`code`),Tw(175,`[nzTheme]`),Tl()(),zi$1(176,`td`),Tw(177,`Type of the ant design icon`),Tl(),zi$1(178,`td`)(179,`code`),Tw(180,`'fill'|'outline'|'twotone'`),Tl()(),zi$1(181,`td`)(182,`code`),Tw(183,`'outline'`),Tl()(),zi$1(184,`td`),Tw(185,`✅`),Tl()(),zi$1(186,`tr`)(187,`td`)(188,`code`),Tw(189,`[nzSpin]`),Tl()(),zi$1(190,`td`),Tw(191,`Rotate icon with animation`),Tl(),zi$1(192,`td`)(193,`code`),Tw(194,`boolean`),Tl()(),zi$1(195,`td`)(196,`code`),Tw(197,`false`),Tl()(),zi$1(198,`td`),Tw(199,`-`),Tl()(),zi$1(200,`tr`)(201,`td`)(202,`code`),Tw(203,`[nzTwotoneColor]`),Tl()(),zi$1(204,`td`),Tw(205,`Primary color of the two-tone icon.`),Tl(),zi$1(206,`td`)(207,`code`),Tw(208,`string (hex color)`),Tl()(),zi$1(209,`td`),Tw(210,`-`),Tl(),zi$1(211,`td`),Tw(212,`✅`),Tl()(),zi$1(213,`tr`)(214,`td`)(215,`code`),Tw(216,`[nzIconfont]`),Tl()(),zi$1(217,`td`),Tw(218,`Type of the icon from iconfont`),Tl(),zi$1(219,`td`)(220,`code`),Tw(221,`string`),Tl()(),zi$1(222,`td`),Tw(223,`-`),Tl(),zi$1(224,`td`),Tw(225,`-`),Tl()(),zi$1(226,`tr`)(227,`td`)(228,`code`),Tw(229,`[nzRotate]`),Tl()(),zi$1(230,`td`),Tw(231,`Rotate degrees`),Tl(),zi$1(232,`td`)(233,`code`),Tw(234,`number`),Tl()(),zi$1(235,`td`),Tw(236,`-`),Tl(),zi$1(237,`td`),Tw(238,`-`),Tl()(),zi$1(239,`tr`)(240,`td`)(241,`code`),Tw(242,`[nzWidth]`),Tl()(),zi$1(243,`td`),Tw(244,`SVG width`),Tl(),zi$1(245,`td`)(246,`code`),Tw(247,`number|string`),Tl()(),zi$1(248,`td`)(249,`code`),Tw(250,`1em`),Tl()(),tg(251,`td`),Tl(),zi$1(252,`tr`)(253,`td`)(254,`code`),Tw(255,`[nzHeight]`),Tl()(),zi$1(256,`td`),Tw(257,`SVG height`),Tl(),zi$1(258,`td`)(259,`code`),Tw(260,`number|string`),Tl()(),zi$1(261,`td`)(262,`code`),Tw(263,`1em`),Tl()(),tg(264,`td`),Tl()()(),zi$1(265,`blockquote`)(266,`p`),Tw(267,`In `),zi$1(268,`code`),Tw(269,`feather`),Tl(),Tw(270,` folder, there are all `),zi$1(271,`a`,70),Tw(272,`official open source SVG icons for Bootstrap`),Tl(),Tw(273,` that can be viewed `),zi$1(274,`a`,71),Tw(275,`here`),Tl(),Tw(276,`. In `),zi$1(277,`code`),Tw(278,`fill`),Tl(),Tw(279,`, `),zi$1(280,`code`),Tw(281,`outline`),Tl(),Tw(282,` and `),zi$1(283,`code`),Tw(284,`twotone`),Tl(),Tw(285,` folders, there are all `),zi$1(286,`a`,72),Tw(287,`Ant Design SVG icons`),Tl(),Tw(288,` that can be viewed `),zi$1(289,`a`,64),Tw(290,`here`),Tl(),Tw(291,`. In `),zi$1(292,`code`),Tw(293,`custom`),Tl(),Tw(294,` folder, there are a few SVG icons added by hand witch can be accessed by `),zi$1(295,`code`),Tw(296,`nzType="custom:some-icon-file-name"`),Tl(),Tw(297,`.`),Tl()(),zi$1(298,`h3`,73)(299,`span`),Tw(300,`NzIconService`),Tl(),zi$1(301,`label`,74),Tw(302,`service`),Tl(),zi$1(303,`a`,75),Tw(304,`#`),Tl()(),zi$1(305,`table`)(306,`thead`)(307,`tr`)(308,`th`),Tw(309,`Methods`),Tl(),zi$1(310,`th`),Tw(311,`Description`),Tl(),zi$1(312,`th`),Tw(313,`Parameters`),Tl()()(),zi$1(314,`tbody`)(315,`tr`)(316,`td`)(317,`code`),Tw(318,`addIcon()`),Tl()(),zi$1(319,`td`),Tw(320,`To import icons statically`),Tl(),zi$1(321,`td`)(322,`code`),Tw(323,`IconDefinition`),Tl()()(),zi$1(324,`tr`)(325,`td`)(326,`code`),Tw(327,`addIconLiteral()`),Tl()(),zi$1(328,`td`),Tw(329,`To statically import custom icons`),Tl(),zi$1(330,`td`)(331,`code`),Tw(332,`string`),Tl(),Tw(333,`, `),zi$1(334,`code`),Tw(335,`string (SVG)`),Tl()()(),zi$1(336,`tr`)(337,`td`)(338,`code`),Tw(339,`fetchFromIconfont()`),Tl()(),zi$1(340,`td`),Tw(341,`To get icon assets from iconfont`),Tl(),zi$1(342,`td`)(343,`code`),Tw(344,`NzIconfontOption`),Tl()()(),zi$1(345,`tr`)(346,`td`)(347,`code`),Tw(348,`changeAssetsSource()`),Tl()(),zi$1(349,`td`),Tw(350,`Change the location of your icon assets, so that you can deploy them anywhere`),Tl(),zi$1(351,`td`)(352,`code`),Tw(353,`string`),Tl()()()()(),zi$1(354,`h3`,76)(355,`span`),Tw(356,`SVG icons`),Tl(),zi$1(357,`a`,77),Tw(358,`#`),Tl()(),zi$1(359,`p`),Tw(360,`NG-ZORRO supports svg icons, which bring benefits below:`),Tl(),zi$1(361,`ul`)(362,`li`),Tw(363,`Support multiple colors.`),Tl(),zi$1(364,`li`),Tw(365,`Much more display accuracy in lower-level devices.`),Tl(),zi$1(366,`li`),Tw(367,`Able to change built-in icons with more props but no styles override.`),Tl()(),zi$1(368,`p`),Tw(369,`You can use `),zi$1(370,`code`),Tw(371,`nz-icon`),Tl(),Tw(372,` component and specify the `),zi$1(373,`code`),Tw(374,`theme`),Tl(),Tw(375,` property.`),Tl(),zi$1(376,`pre`,78)(377,`code`)(378,`span`,79),Tw(379,`<`),zi$1(380,`span`,80),Tw(381,`nz-icon`),Tl(),Tw(382,` `),zi$1(383,`span`,81),Tw(384,`nzType`),Tl(),Tw(385,`=`),zi$1(386,`span`,82),Tw(387,`"star"`),Tl(),Tw(388,` `),zi$1(389,`span`,81),Tw(390,`nzTheme`),Tl(),Tw(391,`=`),zi$1(392,`span`,82),Tw(393,`"fill"`),Tl(),Tw(394,` />`),Tl()()(),zi$1(395,`h3`,83)(396,`span`),Tw(397,`Static loading and dynamic loading`),Tl(),zi$1(398,`a`,84),Tw(399,`#`),Tl()(),tg(400,`nz-alert`,85),zi$1(401,`p`)(402,`strong`),Tw(403,`Static loading`),Tl(),Tw(404,`. You can load icons statically by registering icons in `),zi$1(405,`code`),Tw(406,`app.config.ts`),Tl(),Tw(407,` with `),zi$1(408,`code`),Tw(409,`provideNzIcons`),Tl(),Tw(410,` API.`),Tl(),zi$1(411,`pre`,86)(412,`code`)(413,`span`,87),Tw(414,`import`),Tl(),Tw(415,` { `),zi$1(416,`span`,88),Tw(417,`IconDefinition`),Tl(),Tw(418,` } `),zi$1(419,`span`,87),Tw(420,`from`),Tl(),Tw(421,` `),zi$1(422,`span`,82),Tw(423,`'@ant-design/icons-angular'`),Tl(),Tw(424,`;
`),zi$1(425,`span`,87),Tw(426,`import`),Tl(),Tw(427,` { provideNzIcons } `),zi$1(428,`span`,87),Tw(429,`from`),Tl(),Tw(430,` `),zi$1(431,`span`,82),Tw(432,`'ng-zorro-antd/icon'`),Tl(),Tw(433,`;

`),zi$1(434,`span`,89),Tw(435,`// Import what you need. RECOMMENDED. ✔️`),Tl(),Tw(436,`
`),zi$1(437,`span`,87),Tw(438,`import`),Tl(),Tw(439,` { `),zi$1(440,`span`,88),Tw(441,`AccountBookFill`),Tl(),Tw(442,`, `),zi$1(443,`span`,88),Tw(444,`AlertFill`),Tl(),Tw(445,`, `),zi$1(446,`span`,88),Tw(447,`AlertOutline`),Tl(),Tw(448,` } `),zi$1(449,`span`,87),Tw(450,`from`),Tl(),Tw(451,` `),zi$1(452,`span`,82),Tw(453,`'@ant-design/icons-angular/icons'`),Tl(),Tw(454,`;

`),zi$1(455,`span`,87),Tw(456,`const`),Tl(),Tw(457,` `),zi$1(458,`span`,81),Tw(459,`icons`),Tl(),Tw(460,`: `),zi$1(461,`span`,88),Tw(462,`IconDefinition`),Tl(),Tw(463,`[] = [`),zi$1(464,`span`,88),Tw(465,`AccountBookFill`),Tl(),Tw(466,`, `),zi$1(467,`span`,88),Tw(468,`AlertOutline`),Tl(),Tw(469,`, `),zi$1(470,`span`,88),Tw(471,`AlertFill`),Tl(),Tw(472,`];

`),zi$1(473,`span`,89),Tw(474,`// Import all. NOT RECOMMENDED. ❌`),Tl(),Tw(475,`
`),zi$1(476,`span`,89),Tw(477,`// import * as AllIcons from '@ant-design/icons-angular/icons';`),Tl(),Tw(478,`

`),zi$1(479,`span`,89),Tw(480,`// const antDesignIcons = AllIcons as Record<string, IconDefinition>;`),Tl(),Tw(481,`
`),zi$1(482,`span`,89),Tw(483,`// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])`),Tl(),Tw(484,`

`),zi$1(485,`span`,87),Tw(486,`export`),Tl(),Tw(487,` `),zi$1(488,`span`,87),Tw(489,`const`),Tl(),Tw(490,` `),zi$1(491,`span`,81),Tw(492,`appConfig`),Tl(),Tw(493,`: `),zi$1(494,`span`,88),Tw(495,`ApplicationConfig`),Tl(),Tw(496,` = {
  `),zi$1(497,`span`,81),Tw(498,`providers`),Tl(),Tw(499,`: [`),zi$1(500,`span`,90),Tw(501,`provideNzIcons`),Tl(),Tw(502,`(icons)]
};`),Tl()(),zi$1(503,`p`),Tw(504,`Actually this calls `),zi$1(505,`code`),Tw(506,`addIcon`),Tl(),Tw(507,` of `),zi$1(508,`code`),Tw(509,`NzIconService`),Tl(),Tw(510,`. Imported icons would be bundled into your `),zi$1(511,`code`),Tw(512,`.js`),Tl(),Tw(513,` files.
Static loading may increase your bundle size, thus we recommend to use dynamic importing.`),Tl(),zi$1(514,`blockquote`)(515,`p`),Tw(516,`Icons used by `),zi$1(517,`code`),Tw(518,`NG-ZORRO`),Tl(),Tw(519,` itself are imported statically to increase loading speed. However, icons demonstrated on the
official website are loaded dynamically.`),Tl()(),zi$1(520,`p`)(521,`strong`),Tw(522,`Dynamic loading`),Tl(),Tw(523,`. This way would not increase your bundle size. When NG-ZORRO detects that the icon you want to
render hasn't been registered yet, it would fire an HTTP request to load it. All you have to do is to config your
`),zi$1(524,`code`),Tw(525,`angular.json`),Tl(),Tw(526,` like this:`),Tl(),zi$1(527,`pre`,91)(528,`code`)(529,`span`,92),Tw(530,`{`),Tl(),Tw(531,`
  `),zi$1(532,`span`,81),Tw(533,`"assets"`),Tl(),zi$1(534,`span`,92),Tw(535,`:`),Tl(),Tw(536,` `),zi$1(537,`span`,92),Tw(538,`[`),Tl(),Tw(539,`
    `),zi$1(540,`span`,92),Tw(541,`{`),Tl(),Tw(542,`
      `),zi$1(543,`span`,81),Tw(544,`"glob"`),Tl(),zi$1(545,`span`,92),Tw(546,`:`),Tl(),Tw(547,` `),zi$1(548,`span`,82),Tw(549,`"**/*"`),Tl(),zi$1(550,`span`,92),Tw(551,`,`),Tl(),Tw(552,`
      `),zi$1(553,`span`,81),Tw(554,`"input"`),Tl(),zi$1(555,`span`,92),Tw(556,`:`),Tl(),Tw(557,` `),zi$1(558,`span`,82),Tw(559,`"./node_modules/@ant-design/icons-angular/src/inline-svg/"`),Tl(),zi$1(560,`span`,92),Tw(561,`,`),Tl(),Tw(562,`
      `),zi$1(563,`span`,81),Tw(564,`"output"`),Tl(),zi$1(565,`span`,92),Tw(566,`:`),Tl(),Tw(567,` `),zi$1(568,`span`,82),Tw(569,`"/assets/"`),Tl(),Tw(570,`
    `),zi$1(571,`span`,92),Tw(572,`}`),Tl(),Tw(573,`
  `),zi$1(574,`span`,92),Tw(575,`]`),Tl(),Tw(576,`
`),zi$1(577,`span`,92),Tw(578,`}`),Tl()()(),zi$1(579,`p`),Tw(580,`You can call `),zi$1(581,`code`),Tw(582,`changeAssetsSource()`),Tl(),Tw(583,` of `),zi$1(584,`code`),Tw(585,`NzIconService`),Tl(),Tw(586,` to change the location of your icon assets, so that you can
deploy the assets to CDN. The parameter you passed would be added in front of `),zi$1(587,`code`),Tw(588,`assets/`),Tl(),Tw(589,`.`),Tl(),zi$1(590,`p`),Tw(591,`Assume that you deploy the static assets under `),zi$1(592,`code`),Tw(593,`https://mycdn.somecdn.com/icons/assets`),Tl(),Tw(594,`. You can call
`),zi$1(595,`code`),Tw(596,`changeAssetsSource('https://mycdn.somecdn.com/icons')`),Tl(),Tw(597,` to tell NG-ZORRO that all your resources are located there.`),Tl(),zi$1(598,`h3`,93)(599,`span`),Tw(600,`Add Icons in Lazy-loaded Components`),Tl(),zi$1(601,`a`,94),Tw(602,`#`),Tl()(),zi$1(603,`p`),Tw(604,`Sometimes, you want to import icons in lazy components to avoid increasing the size of the `),zi$1(605,`code`),Tw(606,`main.js`),Tl(),Tw(607,`.
You can import icons in `),zi$1(608,`code`),Tw(609,`providers`),Tl(),Tw(610,` of the component or router with `),zi$1(611,`code`),Tw(612,`provideNzIconsPatch`),Tl(),Tw(613,` API.`),Tl(),zi$1(614,`pre`,86)(615,`code`)(616,`span`,87),Tw(617,`import`),Tl(),Tw(618,` { `),zi$1(619,`span`,88),Tw(620,`NzIconModule`),Tl(),Tw(621,`, provideNzIconsPatch } `),zi$1(622,`span`,87),Tw(623,`from`),Tl(),Tw(624,` `),zi$1(625,`span`,82),Tw(626,`'ng-zorro-antd/icon'`),Tl(),Tw(627,`;

`),zi$1(628,`span`,89),Tw(629,`// in xxx.component.ts`),Tl(),Tw(630,`
`),zi$1(631,`span`,95),Tw(632,`@Component`),Tl(),Tw(633,`({
  `),zi$1(634,`span`,81),Tw(635,`imports`),Tl(),Tw(636,`: [`),zi$1(637,`span`,88),Tw(638,`NzIconModule`),Tl(),Tw(639,`],
  `),zi$1(640,`span`,81),Tw(641,`providers`),Tl(),Tw(642,`: [`),zi$1(643,`span`,90),Tw(644,`provideNzIconsPatch`),Tl(),Tw(645,`([`),zi$1(646,`span`,88),Tw(647,`QuestionOutline`),Tl(),Tw(648,`])]
})
`),zi$1(649,`span`,87),Tw(650,`class`),Tl(),Tw(651,` `),zi$1(652,`span`,88),Tw(653,`ChildComponent`),Tl(),Tw(654,` {}

`),zi$1(655,`span`,89),Tw(656,`// or in xxx.routes.ts`),Tl(),Tw(657,`
`),zi$1(658,`span`,87),Tw(659,`const`),Tl(),Tw(660,` `),zi$1(661,`span`,81),Tw(662,`routes`),Tl(),Tw(663,`: `),zi$1(664,`span`,88),Tw(665,`Routes`),Tl(),Tw(666,` = [
  {
    `),zi$1(667,`span`,81),Tw(668,`path`),Tl(),Tw(669,`: `),zi$1(670,`span`,82),Tw(671,`''`),Tl(),Tw(672,`,
    `),zi$1(673,`span`,81),Tw(674,`providers`),Tl(),Tw(675,`: [`),zi$1(676,`span`,90),Tw(677,`provideNzIconsPatch`),Tl(),Tw(678,`([`),zi$1(679,`span`,88),Tw(680,`QuestionOutline`),Tl(),Tw(681,`])]
  }
];`),Tl()(),zi$1(682,`p`),Tw(683,`Once the QuestionOutline icon get loaded, it would be usable across the application.`),Tl(),zi$1(684,`h3`,96)(685,`span`),Tw(686,`Set Default TwoTone Color`),Tl(),zi$1(687,`a`,97),Tw(688,`#`),Tl()(),zi$1(689,`p`),Tw(690,`When using two-tone icons, you should provide a global configuration like `),zi$1(691,`code`),Tw(692,`{ nzIcon: { nzTwotoneColor: 'xxx' } }`),Tl(),Tw(693,` via `),zi$1(694,`code`),Tw(695,`NzConfigService`),Tl(),Tw(696,` or call corresponding `),zi$1(697,`code`),Tw(698,`set`),Tl(),Tw(699,` method to change to default twotone color.`),Tl(),zi$1(700,`h3`,98)(701,`span`),Tw(702,`Custom Font Icon`),Tl(),zi$1(703,`a`,99),Tw(704,`#`),Tl()(),zi$1(705,`p`),Tw(706,`We provided a `),zi$1(707,`code`),Tw(708,`fetchFromIconfont`),Tl(),Tw(709,` method, which is specified for iconfont, to help you use your own icons deployed at `),zi$1(710,`a`,100),Tw(711,`iconfont.cn`),Tl(),Tw(712,` in a convenient way.`),Tl(),zi$1(713,`pre`,86)(714,`code`)(715,`span`,101),Tw(716,`this`),Tl(),Tw(717,`.`),zi$1(718,`span`,102),Tw(719,`_iconService`),Tl(),Tw(720,`.`),zi$1(721,`span`,90),Tw(722,`fetchFromIconfont`),Tl(),Tw(723,`({
  `),zi$1(724,`span`,81),Tw(725,`scriptUrl`),Tl(),Tw(726,`: `),zi$1(727,`span`,82),Tw(728,`'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'`),Tl(),Tw(729,`
});`),Tl()(),zi$1(730,`p`),Tw(731,`And then you can use it like this:`),Tl(),zi$1(732,`pre`,78)(733,`code`)(734,`span`,79),Tw(735,`<`),zi$1(736,`span`,80),Tw(737,`nz-icon`),Tl(),Tw(738,` `),zi$1(739,`span`,81),Tw(740,`nzIconfont`),Tl(),Tw(741,`=`),zi$1(742,`span`,82),Tw(743,`"icon-tuichu"`),Tl(),Tw(744,` />`),Tl()()(),zi$1(745,`p`),Tw(746,`It creates a component that uses SVG sprites in essence.`),Tl(),zi$1(747,`p`),Tw(748,`The following options are available:`),Tl(),zi$1(749,`table`)(750,`thead`)(751,`tr`)(752,`th`),Tw(753,`Property`),Tl(),zi$1(754,`th`),Tw(755,`Description`),Tl(),zi$1(756,`th`),Tw(757,`Type`),Tl(),zi$1(758,`th`),Tw(759,`Default`),Tl()()(),zi$1(760,`tbody`)(761,`tr`)(762,`td`)(763,`code`),Tw(764,`scriptUrl`),Tl()(),zi$1(765,`td`),Tw(766,`The URL generated by iconfont.cn project.`),Tl(),zi$1(767,`td`)(768,`code`),Tw(769,`string`),Tl()(),zi$1(770,`td`),Tw(771,`-`),Tl()()()(),zi$1(772,`p`),Tw(773,`The property `),zi$1(774,`code`),Tw(775,`scriptUrl`),Tl(),Tw(776,` should be set to import the svg sprite symbols.`),Tl(),zi$1(777,`p`),Tw(778,`See `),zi$1(779,`a`,103),Tw(780,`iconfont.cn document`),Tl(),Tw(781,` to learn about how to generate the `),zi$1(782,`code`),Tw(783,`scriptUrl`),Tl(),Tw(784,`.`),Tl(),zi$1(785,`h3`,104)(786,`span`),Tw(787,`Namespace`),Tl(),zi$1(788,`a`,105),Tw(789,`#`),Tl()(),zi$1(790,`p`),Tw(791,`We introduced namespace so you could add your own icons in a convenient way.
When you want to render an icon, you could assign `),zi$1(792,`code`),Tw(793,`type`),Tl(),zi$1(794,`code`),Tw(795,`namespace:name`),Tl(),Tw(796,`. Dynamic importing and static importing are both supported.`),Tl(),zi$1(797,`p`),Tw(798,`Static importing. Invoke `),zi$1(799,`code`),Tw(800,`addIconLiteral`),Tl(),Tw(801,` of `),zi$1(802,`code`),Tw(803,`NzIconService`),Tl(),Tw(804,`.`),Tl(),zi$1(805,`p`),Tw(806,`Dynamic importing. Make sure that you have put your SVG resources in directory like `),zi$1(807,`code`),Tw(808,"assets/${namespace}"),Tl(),Tw(809,`.
For example, if you have an `),zi$1(810,`code`),Tw(811,`angular`),Tl(),Tw(812,` icon and a `),zi$1(813,`code`),Tw(814,`custom`),Tl(),Tw(815,` namespace, you should put the file `),zi$1(816,`code`),Tw(817,`angular.js`),Tl(),Tw(818,` in `),zi$1(819,`code`),Tw(820,`assets/custom`),Tl(),Tw(821,`.`),Tl(),zi$1(822,`pre`,78)(823,`code`)(824,`span`,79),Tw(825,`<`),zi$1(826,`span`,80),Tw(827,`nz-icon`),Tl(),Tw(828,` `),zi$1(829,`span`,81),Tw(830,`nzType`),Tl(),Tw(831,`=`),zi$1(832,`span`,82),Tw(833,`"custom:angular"`),Tl(),Tw(834,` `),zi$1(835,`span`,81),Tw(836,`nzWidth`),Tl(),Tw(837,`=`),zi$1(838,`span`,82),Tw(839,`"180px"`),Tl(),Tw(840,` `),zi$1(841,`span`,81),Tw(842,`nzHeight`),Tl(),Tw(843,`=`),zi$1(844,`span`,82),Tw(845,`"180px"`),Tl(),Tw(846,` />`),Tl()()(),zi$1(847,`p`),Tw(848,`See `),zi$1(849,`a`,106),Tw(850,`custom`),Tl(),Tw(851,` assets for this website.`),Tl(),zi$1(852,`h2`,107)(853,`span`),Tw(854,`FAQ`),Tl(),zi$1(855,`a`,108),Tw(856,`#`),Tl()(),zi$1(857,`h3`,109)(858,`span`),Tw(859,`All my icons are gone!`),Tl(),zi$1(860,`a`,110),Tw(861,`#`),Tl()(),zi$1(862,`p`),Tw(863,`Have you ever read the docs above?`),Tl(),zi$1(864,`h3`,111)(865,`span`),Tw(866,`There are two similar icons in a `),zi$1(867,`code`),Tw(868,`<span></span>`),Tl(),Tw(869,` tag. What happened?`),Tl(),zi$1(870,`a`,112),Tw(871,`#`),Tl()(),zi$1(872,`p`),Tw(873,`In older versions of NG-ZORRO, there was a font file which would use `),zi$1(874,`code`),Tw(875,`:before`),Tl(),Tw(876,` to insert an icon according to a `),zi$1(877,`code`),Tw(878,`<i>`),Tl(),Tw(879,` tag's `),zi$1(880,`code`),Tw(881,`class`),Tl(),Tw(882,`.
So if you have two icons, try to remove `),zi$1(883,`code`),Tw(884,`node_modules`),Tl(),Tw(885,` and install again. If the problem is still there, search `),zi$1(886,`code`),Tw(887,`@icon-url`),Tl(),Tw(888,` and remove that line.`),Tl(),zi$1(889,`h3`,113)(890,`span`),Tw(891,`I want to import all icons statically. What should I do?`),Tl(),zi$1(892,`a`,114),Tw(893,`#`),Tl()(),zi$1(894,`p`),Tw(895,`Although it is not recommended, actually we demonstrate it at section `),zi$1(896,`a`,115),Tw(897,`Static loading and dynamic loading`),Tl(),Tw(898,`:`),Tl(),zi$1(899,`pre`,86)(900,`code`)(901,`span`,87),Tw(902,`import`),Tl(),Tw(903,` * `),zi$1(904,`span`,87),Tw(905,`as`),Tl(),Tw(906,` `),zi$1(907,`span`,88),Tw(908,`AllIcons`),Tl(),Tw(909,` `),zi$1(910,`span`,87),Tw(911,`from`),Tl(),Tw(912,` `),zi$1(913,`span`,82),Tw(914,`'@ant-design/icons-angular/icons'`),Tl(),Tw(915,`;

`),zi$1(916,`span`,87),Tw(917,`const`),Tl(),Tw(918,` antDesignIcons = `),zi$1(919,`span`,88),Tw(920,`AllIcons`),Tl(),Tw(921,` `),zi$1(922,`span`,87),Tw(923,`as`),Tl(),Tw(924,` `),zi$1(925,`span`,88),Tw(926,`Record`),Tl(),Tw(927,`<`),zi$1(928,`span`,116),Tw(929,`string`),Tl(),Tw(930,`, `),zi$1(931,`span`,88),Tw(932,`IconDefinition`),Tl(),Tw(933,`>;
`),zi$1(934,`span`,87),Tw(935,`const`),Tl(),Tw(936,` `),zi$1(937,`span`,81),Tw(938,`icons`),Tl(),Tw(939,`: `),zi$1(940,`span`,88),Tw(941,`IconDefinition`),Tl(),Tw(942,`[] = `),zi$1(943,`span`,88),Tw(944,`Object`),Tl(),Tw(945,`.`),zi$1(946,`span`,90),Tw(947,`keys`),Tl(),Tw(948,`(antDesignIcons).`),zi$1(949,`span`,90),Tw(950,`map`),Tl(),Tw(951,`(`),zi$1(952,`span`,117)(953,`span`,118),Tw(954,`key`),Tl(),Tw(955,` =>`),Tl(),Tw(956,` antDesignIcons[key]);`),Tl()(),zi$1(957,`h3`,119)(958,`span`),Tw(959,`Does dynamic loading affect web pages' performance?`),Tl(),zi$1(960,`a`,120),Tw(961,`#`),Tl()(),zi$1(962,`p`),Tw(963,`We used several methods to reduce requests, such as static cache, dynamic cache and reusable request.
It's basically not noticeable for visitors that icons are loaded asynchronously assuming web connections are fairly good.`),Tl(),zi$1(964,`h3`,121)(965,`span`),Tw(966,`How do I know an icon's corresponding module to import?`),Tl(),zi$1(967,`a`,122),Tw(968,`#`),Tl()(),zi$1(969,`p`),Tw(970,`Capital camel-case `),zi$1(971,`code`),Tw(972,`type & theme`),Tl(),Tw(973,`, i.e. `),zi$1(974,`code`),Tw(975,`alibaba`),Tl(),Tw(976,` => `),zi$1(977,`code`),Tw(978,`AlibabaOutline`),Tl(),Tw(979,`.`),Tl()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,jw(9,xi)),aD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()),vE(43),eg(`width`,r.width()),vE(2),eg(`width`,r.width()))},dependencies:[ml,Nr,Ds,Te,yt,ae$1,bt,re,Bt,Et,Cg,rd,cr,ir,Fa,u9,p9,Un$2,qi$1,_n,ji$1,Jo,Za,Al,ga$1,ma$1,So,Ve,pe$1,yu,pa$1],encapsulation:2})}return a})();var gi=()=>({standalone:!0});function Si(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,87),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,88),tg(3,`nz-icon`,89),Tl()(),Sl()}}function ui(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,87),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,88),Tw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var rt=110;var Pn=(()=>{class a{destroyRef=_(ce);router=_(Te$1);#e=_(Z0);injector=_(ae);viewPort=_(p7);zone=_(fe);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=zt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){rV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-rt>640?this.width.set(640):this.width.set(this.windowWidth()-rt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-rt>640?this.width.set(640):this.width.set(i-rt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Oe(i).pipe(nV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`nz-blog-dotnet-core-testing`]],features:[Fw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:2934,vars:12,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-5a486561`,`nzTitle`,`MyTested Library Out of The Box`],[`nzHref`,`#h-24135ede`,`nzTitle`,`.NET Core Identity Controller Implementation`],[`nzHref`,`#h-c9515f97`,`nzTitle`,`IdentityController`],[`nzHref`,`#h-88d4cd62`,`nzTitle`,`.NET Core Identity Service Implementation`],[`nzHref`,`#h-6278f57b`,`nzTitle`,`IdentityService`],[`nzHref`,`#h-3505cd43`,`nzTitle`,`Data Validation with FluentValidation Library`],[`nzHref`,`#h-6f8b794f`,`nzTitle`,`Conclusion`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230605-dotnet-core-testing.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`href`,`https://versionsof.net/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/LICENSE`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/LICENSE`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[`nz-row`,``,`nzJustify`,`center`,1,`p-t-24`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/MyTested-test-project-example/refs/heads/main/test-run.png`,`alt`,`test-run`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`href`,`https://github.com/cioina/MyTested-test-project-example`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-5a486561`],[`onclick`,`window.location.hash = 'h-5a486561'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-csharp`],[1,`hljs-keyword`],[1,`hljs-title`],[1,`hljs-meta`],[1,`hljs-function`],[1,`hljs-string`],[`id`,`h-24135ede`],[`onclick`,`window.location.hash = 'h-24135ede'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Web/Features/IdentityController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-c9515f97`],[`onclick`,`window.location.hash = 'h-c9515f97'`,1,`anchor`],[`id`,`h-88d4cd62`],[`onclick`,`window.location.hash = 'h-88d4cd62'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Infrastructure/Identity/Services/IdentityService.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6278f57b`],[`onclick`,`window.location.hash = 'h-6278f57b'`,1,`anchor`],[1,`hljs-params`],[1,`hljs-built_in`],[1,`hljs-literal`],[1,`hljs-number`],[1,`hljs-subst`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Users/LoginTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-comment`],[`id`,`h-3505cd43`],[`onclick`,`window.location.hash = 'h-3505cd43'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs#L696`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6f8b794f`],[`onclick`,`window.location.hash = 'h-6f8b794f'`,1,`anchor`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/ivaylokenov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ardalis`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanprodan`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jbogard`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/BenMorris`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(zi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,Si,4,0,`ng-container`,5)(6,ui,4,0,`ng-container`,5),Tl()()(),zi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),Tw(11,`Jump to top`),Tl()(),zi$1(12,`div`,3)(13,`nz-switch`,9),iD(),Ag(`ngModelChange`,function(g){return Sw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),zi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19),Tl()(),zi$1(24,`span`,20),Tw(25,` ASP.NET Core 10 Testing`),tg(26,`span`,21)(27,`span`,22),zi$1(28,`a`,23),tg(29,`nz-icon`,24),Tl()(),zi$1(30,`article`,25)(31,`blockquote`,26)(32,`p`)(33,`strong`),Tw(34,`All C# code from this article was tested using `),zi$1(35,`a`,27),Tw(36,`.NET Core 10.0.9`),Tl(),Tw(37,`, modified source code of `),zi$1(38,`a`,28),Tw(39,`MyTested.AspNetCore.Mvc - Fluent Testing Library for ASP.NET Core MVC`),Tl(),Tw(40,` provided under `),zi$1(41,`a`,29),Tw(42,`Apache License, Version 2.0 or Microsoft Public License (Ms-PL)`),Tl(),Tw(43,`, and modified source code of `),zi$1(44,`a`,30),Tw(45,`BookStore`),Tl(),Tw(46,` provided under `),zi$1(47,`a`,31),Tw(48,`MIT License`),Tl()()()(),zi$1(49,`h2`,32)(50,`span`),Tw(51,`Introduction`),Tl(),zi$1(52,`a`,33),Tw(53,`#`),Tl()(),zi$1(54,`div`,34),tg(55,`img`,35),Tl(),zi$1(56,`p`),Tw(57,`In this article, we will give an example of testing of .NET Core code. We will use `),zi$1(58,`a`,28),Tw(59,`MyTested`),Tl(),Tw(60,` - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 10 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 10 project is based on `),zi$1(61,`a`,30),Tw(62,`BookStore`),Tl(),Tw(63,` repository and adapted to work with MyTested library. A full test project example is on `),zi$1(64,`a`,36),Tw(65,`our GitHub repository`),Tl(),Tw(66,`.`),Tl(),zi$1(67,`p`),Tw(68,`The main focus of our example is testing of the standard `),zi$1(69,`code`),Tw(70,`User Identity`),Tl(),Tw(71,` provided by `),zi$1(72,`code`),Tw(73,`Microsoft.AspNetCore.Identity`),Tl(),Tw(74,`. The access to the user is provided by `),zi$1(75,`code`),Tw(76,`UserManager<User>`),Tl(),Tw(77,` micro service. The source code of all our examples is copied and pasted from our actual application. The compiled code of our .NET Core 10 application can be found on `),zi$1(78,`a`,37),Tw(79,`our GitHub repository`),Tl(),Tw(80,`.`),Tl(),zi$1(81,`p`),Tw(82,`One of the advantages of having of a detailed test module for standard `),zi$1(83,`code`),Tw(84,`Microsoft.AspNetCore.Identity`),Tl(),Tw(85,` implementation is the fact that it is used very frequently in .NET Core applications. Following, we will give examples of API controller, the implementation of `),zi$1(86,`code`),Tw(87,`User Identity`),Tl(),Tw(88,` with Bearer Header Authorization based on JWT token and an example of a comprehensive `),zi$1(89,`code`),Tw(90,`User Identity`),Tl(),Tw(91,` controller testing.`),Tl(),zi$1(92,`h2`,38)(93,`span`),Tw(94,`MyTested Library Out of The Box`),Tl(),zi$1(95,`a`,39),Tw(96,`#`),Tl()(),zi$1(97,`p`),Tw(98,`I found out about MyTested for the first time from `),zi$1(99,`a`,40),Tw(100,`BlazorShop`),Tl(),Tw(101,` repository. At the same time, I found out about `),zi$1(102,`code`),Tw(103,`JwtAuthentication`),Tl(),Tw(104,` implementation from same `),zi$1(105,`a`,41),Tw(106,`BlazorShop`),Tl(),Tw(107,` repository and from `),zi$1(108,`a`,42),Tw(109,`aspnetcore-realworld-example`),Tl(),Tw(110,` repository. Both `),zi$1(111,`code`),Tw(112,`JwtAuthentication`),Tl(),Tw(113,` implementations did not work with original `),zi$1(114,`a`,28),Tw(115,`MyTested`),Tl(),Tw(116,` library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was able only to add some small pieces of code to make MyTested and my own `),zi$1(117,`code`),Tw(118,`JwtAuthentication`),Tl(),Tw(119,` implementation work and not to break any original MyTested tests. But, what MyTested can do out of the box? The best answer is in `),zi$1(120,`a`,43),Tw(121,`MusicStore`),Tl(),Tw(122,` testing project. For the API controller, `),zi$1(123,`a`,44),Tw(124,`here`),Tl(),Tw(125,` is an example:`),Tl(),zi$1(126,`pre`,45)(127,`code`)(128,`span`,46),Tw(129,`using`),Tl(),Tw(130,` BlogAngular.Application.Common.Version;
`),zi$1(131,`span`,46),Tw(132,`using`),Tl(),Tw(133,` BlogAngular.Web.Features;
`),zi$1(134,`span`,46),Tw(135,`using`),Tl(),Tw(136,` MyTested.AspNetCore.Mvc;
`),zi$1(137,`span`,46),Tw(138,`using`),Tl(),Tw(139,` Xunit;

`),zi$1(140,`span`,46),Tw(141,`namespace`),Tl(),Tw(142,` `),zi$1(143,`span`,47),Tw(144,`BlogAngular.Test.Routing`),Tl(),Tw(145,`
{
    `),zi$1(146,`span`,46),Tw(147,`public`),Tl(),Tw(148,` `),zi$1(149,`span`,46),Tw(150,`class`),Tl(),Tw(151,` `),zi$1(152,`span`,47),Tw(153,`FrontEndRouteTest`),Tl(),Tw(154,`
    {
        [`),zi$1(155,`span`,48),Tw(156,`Fact`),Tl(),Tw(157,`]
        `),zi$1(158,`span`,49)(159,`span`,46),Tw(160,`public`),Tl(),Tw(161,` `),zi$1(162,`span`,46),Tw(163,`void`),Tl(),Tw(164,` `),zi$1(165,`span`,47),Tw(166,`VersionShouldBeRouted`),Tl(),Tw(167,`()`),Tl(),Tw(168,`
        => MyMvc
        .Pipeline()
        .ShouldMap(request => request
            .WithMethod(HttpMethod.Get)
            .WithLocation(`),zi$1(169,`span`,50),Tw(170,`"api/v1.0/version"`),Tl(),Tw(171,`))
        .To<VersionController>(c => c.Index())
        .Which()
        .ShouldReturn()
        .ActionResult(result => result.Result(`),zi$1(172,`span`,46),Tw(173,`new`),Tl(),Tw(174,` VersionResponseEnvelope
        {
            VersionJson = `),zi$1(175,`span`,46),Tw(176,`new`),Tl(),Tw(177,` VersionResponseModel()
        }));
    }
}`),Tl()(),zi$1(178,`h2`,51)(179,`span`),Tw(180,`.NET Core Identity Controller Implementation`),Tl(),zi$1(181,`a`,52),Tw(182,`#`),Tl()(),zi$1(183,`p`),Tw(184,`Our controller implementation is based on `),zi$1(185,`a`,53),Tw(186,`this GitHub repository`),Tl(),Tw(187,`. We added two more methods: `),zi$1(188,`code`),Tw(189,`LoginPassword`),Tl(),Tw(190,` and `),zi$1(191,`code`),Tw(192,`Update`),Tl(),Tw(193,` with `),zi$1(194,`code`),Tw(195,`[Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy)]`),Tl(),Tw(196,` attribute that uses Bearer Header Authorization based on JWT token implementation provided by .NET Core 10. Our Angular 20 application that runs in a web browser will make a request to the endpoint `),zi$1(197,`code`),Tw(198,`http://localhost:1503/api/v1.0/identity/update`),Tl(),Tw(199,`. The request has an Authorization header with a JWT token. The request body has some data in JSON format. Our .NET Core 10 application must authenticate the user based on the JWT token and authorize the user based on a specific policy. Once the user passes the authorization process, the application must execute a command and return some data in JSON format. Below, we give an example of an `),zi$1(200,`a`,54),Tw(201,`API controller`),Tl()(),zi$1(202,`h3`,55)(203,`span`),Tw(204,`IdentityController`),Tl(),zi$1(205,`a`,56),Tw(206,`#`),Tl()(),zi$1(207,`pre`,45)(208,`code`)(209,`span`,46),Tw(210,`using`),Tl(),Tw(211,` BlogAngular.Application.Identity.Commands.Common;
`),zi$1(212,`span`,46),Tw(213,`using`),Tl(),Tw(214,` BlogAngular.Application.Identity.Commands.Login;
`),zi$1(215,`span`,46),Tw(216,`using`),Tl(),Tw(217,` BlogAngular.Application.Identity.Commands.Register;
`),zi$1(218,`span`,46),Tw(219,`using`),Tl(),Tw(220,` BlogAngular.Application.Identity.Commands.Update;
`),zi$1(221,`span`,46),Tw(222,`using`),Tl(),Tw(223,` Microsoft.AspNetCore.Authorization;
`),zi$1(224,`span`,46),Tw(225,`using`),Tl(),Tw(226,` Microsoft.AspNetCore.Mvc;
`),zi$1(227,`span`,46),Tw(228,`using`),Tl(),Tw(229,` System.Threading.Tasks;

`),zi$1(230,`span`,46),Tw(231,`using`),Tl(),Tw(232,` `),zi$1(233,`span`,46),Tw(234,`static`),Tl(),Tw(235,` BlogAngular.Domain.Common.Models.ModelConstants.Identity;

`),zi$1(236,`span`,46),Tw(237,`namespace`),Tl(),Tw(238,` `),zi$1(239,`span`,47),Tw(240,`BlogAngular.Web.Features`),Tl(),Tw(241,`
{
    `),zi$1(242,`span`,46),Tw(243,`public`),Tl(),Tw(244,` `),zi$1(245,`span`,46),Tw(246,`class`),Tl(),Tw(247,` `),zi$1(248,`span`,47),Tw(249,`IdentityController`),Tl(),Tw(250,` : `),zi$1(251,`span`,47),Tw(252,`ApiController`),Tl(),Tw(253,`
    {
        [`),zi$1(254,`span`,48),Tw(255,`HttpPost`),Tl(),Tw(256,`]
        [`),zi$1(257,`span`,48),Tw(258,`Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)`),Tl(),Tw(259,`]
        `),zi$1(260,`span`,46),Tw(261,`public`),Tl(),Tw(262,` `),zi$1(263,`span`,46),Tw(264,`async`),Tl(),Tw(265,` Task<ActionResult<UserResponseEnvelope>> LoginPassword(
            LoginPasswordCommand command)
            => `),zi$1(266,`span`,46),Tw(267,`await`),Tl(),Tw(268,` `),zi$1(269,`span`,46),Tw(270,`this`),Tl(),Tw(271,`.Send(command);

        [`),zi$1(272,`span`,48),Tw(273,`HttpPost`),Tl(),Tw(274,`]
        [`),zi$1(275,`span`,48),Tw(276,`Route(nameof(Login))`),Tl(),Tw(277,`]
        `),zi$1(278,`span`,46),Tw(279,`public`),Tl(),Tw(280,` `),zi$1(281,`span`,46),Tw(282,`async`),Tl(),Tw(283,` Task<ActionResult<UserResponseEnvelope>> Login(
            UserLoginCommand command)
            => `),zi$1(284,`span`,46),Tw(285,`await`),Tl(),Tw(286,` `),zi$1(287,`span`,46),Tw(288,`this`),Tl(),Tw(289,`.Send(command);

        [`),zi$1(290,`span`,48),Tw(291,`HttpPost`),Tl(),Tw(292,`]
        [`),zi$1(293,`span`,48),Tw(294,`Route(nameof(Register))`),Tl(),Tw(295,`]
        `),zi$1(296,`span`,46),Tw(297,`public`),Tl(),Tw(298,` `),zi$1(299,`span`,46),Tw(300,`async`),Tl(),Tw(301,` Task<ActionResult<UserResponseEnvelope>> Register(
            UserRegisterCommand command)
            => `),zi$1(302,`span`,46),Tw(303,`await`),Tl(),Tw(304,` `),zi$1(305,`span`,46),Tw(306,`this`),Tl(),Tw(307,`.Send(command);

        [`),zi$1(308,`span`,48),Tw(309,`HttpPut`),Tl(),Tw(310,`]
        [`),zi$1(311,`span`,48),Tw(312,`Route(nameof(Update))`),Tl(),Tw(313,`]
        [`),zi$1(314,`span`,48),Tw(315,`Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)`),Tl(),Tw(316,`]
        `),zi$1(317,`span`,46),Tw(318,`public`),Tl(),Tw(319,` `),zi$1(320,`span`,46),Tw(321,`async`),Tl(),Tw(322,` Task<ActionResult<UserResponseEnvelope>> Update(
            UserUpdateCommand command)
            => `),zi$1(323,`span`,46),Tw(324,`await`),Tl(),Tw(325,` `),zi$1(326,`span`,46),Tw(327,`this`),Tl(),Tw(328,`.Send(command);
    }
}`),Tl()(),zi$1(329,`h2`,57)(330,`span`),Tw(331,`.NET Core Identity Service Implementation`),Tl(),zi$1(332,`a`,58),Tw(333,`#`),Tl()(),zi$1(334,`p`),Tw(335,`Our service implementation is based on `),zi$1(336,`a`,59),Tw(337,`this GitHub repository`),Tl(),Tw(338,`. As we said earlier, this kind of `),zi$1(339,`code`),Tw(340,`Identity Service`),Tl(),Tw(341,` will look the same for all .NET Core 10 applications that use a standard `),zi$1(342,`code`),Tw(343,`Microsoft.AspNetCore.Identity`),Tl(),Tw(344,` implementation. Below, there is an example that we copied and pasted direct from our actual application.`),Tl(),zi$1(345,`h3`,60)(346,`span`),Tw(347,`IdentityService`),Tl(),zi$1(348,`a`,61),Tw(349,`#`),Tl()(),zi$1(350,`pre`,45)(351,`code`)(352,`span`,46),Tw(353,`using`),Tl(),Tw(354,` BlogAngular.Application.Common;
`),zi$1(355,`span`,46),Tw(356,`using`),Tl(),Tw(357,` BlogAngular.Application.Common.Models;
`),zi$1(358,`span`,46),Tw(359,`using`),Tl(),Tw(360,` BlogAngular.Application.Identity;
`),zi$1(361,`span`,46),Tw(362,`using`),Tl(),Tw(363,` BlogAngular.Application.Identity.Commands.Common;
`),zi$1(364,`span`,46),Tw(365,`using`),Tl(),Tw(366,` BlogAngular.Application.Identity.Commands.Register;
`),zi$1(367,`span`,46),Tw(368,`using`),Tl(),Tw(369,` BlogAngular.Application.Identity.Commands.Update;
`),zi$1(370,`span`,46),Tw(371,`using`),Tl(),Tw(372,` BlogAngular.Application.Identity.Queries.Profile;
`),zi$1(373,`span`,46),Tw(374,`using`),Tl(),Tw(375,` BlogAngular.Domain.Common.Events.Identity;
`),zi$1(376,`span`,46),Tw(377,`using`),Tl(),Tw(378,` BlogAngular.Infrastructure.Common.Events;
`),zi$1(379,`span`,46),Tw(380,`using`),Tl(),Tw(381,` BlogAngular.Infrastructure.Common.Extensions;
`),zi$1(382,`span`,46),Tw(383,`using`),Tl(),Tw(384,` Microsoft.AspNetCore.Hosting;
`),zi$1(385,`span`,46),Tw(386,`using`),Tl(),Tw(387,` Microsoft.AspNetCore.Http;
`),zi$1(388,`span`,46),Tw(389,`using`),Tl(),Tw(390,` Microsoft.AspNetCore.Identity;
`),zi$1(391,`span`,46),Tw(392,`using`),Tl(),Tw(393,` Microsoft.Extensions.Options;
`),zi$1(394,`span`,46),Tw(395,`using`),Tl(),Tw(396,` System;
`),zi$1(397,`span`,46),Tw(398,`using`),Tl(),Tw(399,` System.Collections.Generic;
`),zi$1(400,`span`,46),Tw(401,`using`),Tl(),Tw(402,` System.Security.Claims;
`),zi$1(403,`span`,46),Tw(404,`using`),Tl(),Tw(405,` System.Threading.Tasks;

`),zi$1(406,`span`,46),Tw(407,`namespace`),Tl(),Tw(408,` `),zi$1(409,`span`,47),Tw(410,`BlogAngular.Infrastructure.Identity.Services`),Tl(),Tw(411,`
{
    `),zi$1(412,`span`,49)(413,`span`,46),Tw(414,`internal`),Tl(),Tw(415,` `),zi$1(416,`span`,46),Tw(417,`class`),Tl(),Tw(418,` `),zi$1(419,`span`,47),Tw(420,`IdentityService`),Tl(),Tw(421,`(`),zi$1(422,`span`,62),Tw(423,`
        IWebHostEnvironment env,
        UserManager<User> userManager,
        IJwtGenerator jwtGenerator,
        IEventDispatcher eventDispatcher,
        IOptions<ApplicationSettings> applicationSettings,
        IHttpContextAccessor httpContextAccessor
            `),Tl(),Tw(424,`) : IIdentity`),Tl(),Tw(425,`
    {
        `),zi$1(426,`span`,46),Tw(427,`private`),Tl(),Tw(428,` `),zi$1(429,`span`,46),Tw(430,`const`),Tl(),Tw(431,` `),zi$1(432,`span`,63),Tw(433,`string`),Tl(),Tw(434,` InvalidErrorMessage = `),zi$1(435,`span`,50),Tw(436,`"Invalid credentials."`),Tl(),Tw(437,`;
        `),zi$1(438,`span`,46),Tw(439,`private`),Tl(),Tw(440,` `),zi$1(441,`span`,46),Tw(442,`const`),Tl(),Tw(443,` `),zi$1(444,`span`,63),Tw(445,`string`),Tl(),Tw(446,` NoDataErrorMessage = `),zi$1(447,`span`,50),Tw(448,`"There is no data to process."`),Tl(),Tw(449,`;
        `),zi$1(450,`span`,46),Tw(451,`private`),Tl(),Tw(452,` `),zi$1(453,`span`,46),Tw(454,`const`),Tl(),Tw(455,` `),zi$1(456,`span`,63),Tw(457,`string`),Tl(),Tw(458,` IdentityErrorMessage = `),zi$1(459,`span`,50),Tw(460,`"Something went wrong. The server may be down."`),Tl(),Tw(461,`;
        `),zi$1(462,`span`,46),Tw(463,`private`),Tl(),Tw(464,` `),zi$1(465,`span`,46),Tw(466,`const`),Tl(),Tw(467,` `),zi$1(468,`span`,63),Tw(469,`string`),Tl(),Tw(470,` IdentityRoleErrorMessage = `),zi$1(471,`span`,50),Tw(472,`@"Cannot find role {0}"`),Tl(),Tw(473,`;
        `),zi$1(474,`span`,46),Tw(475,`private`),Tl(),Tw(476,` `),zi$1(477,`span`,46),Tw(478,`const`),Tl(),Tw(479,` `),zi$1(480,`span`,63),Tw(481,`string`),Tl(),Tw(482,` UserNameTakenErrorMessage = `),zi$1(483,`span`,50),Tw(484,`"The user name has been taken."`),Tl(),Tw(485,`;
        `),zi$1(486,`span`,46),Tw(487,`private`),Tl(),Tw(488,` `),zi$1(489,`span`,46),Tw(490,`const`),Tl(),Tw(491,` `),zi$1(492,`span`,63),Tw(493,`string`),Tl(),Tw(494,` EmailTakenErrorMessage = `),zi$1(495,`span`,50),Tw(496,`"The email has been taken."`),Tl(),Tw(497,`;
        `),zi$1(498,`span`,46),Tw(499,`private`),Tl(),Tw(500,` `),zi$1(501,`span`,46),Tw(502,`const`),Tl(),Tw(503,` `),zi$1(504,`span`,63),Tw(505,`string`),Tl(),Tw(506,` UserNullErrorMessage = `),zi$1(507,`span`,50),Tw(508,`"Cannot find user by Id."`),Tl(),Tw(509,`;
        `),zi$1(510,`span`,46),Tw(511,`private`),Tl(),Tw(512,` `),zi$1(513,`span`,46),Tw(514,`const`),Tl(),Tw(515,` `),zi$1(516,`span`,63),Tw(517,`string`),Tl(),Tw(518,` ProfileErrorMessage = `),zi$1(519,`span`,50),Tw(520,`"Cannot find user profile."`),Tl(),Tw(521,`;
        `),zi$1(522,`span`,46),Tw(523,`private`),Tl(),Tw(524,` `),zi$1(525,`span`,46),Tw(526,`const`),Tl(),Tw(527,` `),zi$1(528,`span`,63),Tw(529,`string`),Tl(),Tw(530,` UsernameFormatErrorMessage = `),zi$1(531,`span`,50),Tw(532,`"Username must contain letters and numbers."`),Tl(),Tw(533,`;
        `),zi$1(534,`span`,46),Tw(535,`private`),Tl(),Tw(536,` `),zi$1(537,`span`,46),Tw(538,`const`),Tl(),Tw(539,` `),zi$1(540,`span`,63),Tw(541,`string`),Tl(),Tw(542,` PasswordFormatErrorMessage = `),zi$1(543,`span`,50),Tw(544,`"Password required upper and lower case letters, digits, and at least one special symbol."`),Tl(),Tw(545,`;
        `),zi$1(546,`span`,46),Tw(547,`private`),Tl(),Tw(548,` `),zi$1(549,`span`,46),Tw(550,`const`),Tl(),Tw(551,` `),zi$1(552,`span`,63),Tw(553,`string`),Tl(),Tw(554,` PasswordDeletedErrorMessage = `),zi$1(555,`span`,50),Tw(556,`"The old password was deleted. You must provide a new password."`),Tl(),Tw(557,`;
        `),zi$1(558,`span`,46),Tw(559,`private`),Tl(),Tw(560,` `),zi$1(561,`span`,46),Tw(562,`const`),Tl(),Tw(563,` `),zi$1(564,`span`,63),Tw(565,`string`),Tl(),Tw(566,` LockoutErrorMessage = `),zi$1(567,`span`,50),Tw(568,`@"You have been lockout for {0} minutes.{1}"`),Tl(),Tw(569,`;
        `),zi$1(570,`span`,46),Tw(571,`private`),Tl(),Tw(572,` `),zi$1(573,`span`,46),Tw(574,`const`),Tl(),Tw(575,` `),zi$1(576,`span`,63),Tw(577,`string`),Tl(),Tw(578,` LockoutEnabledErrorMessage = `),zi$1(579,`span`,50),Tw(580,`"Lockout setting is not enabled."`),Tl(),Tw(581,`;

        `),zi$1(582,`span`,46),Tw(583,`private`),Tl(),Tw(584,` `),zi$1(585,`span`,46),Tw(586,`readonly`),Tl(),Tw(587,` IWebHostEnvironment env = env;
        `),zi$1(588,`span`,46),Tw(589,`private`),Tl(),Tw(590,` `),zi$1(591,`span`,46),Tw(592,`readonly`),Tl(),Tw(593,` UserManager<User> userManager = userManager;
        `),zi$1(594,`span`,46),Tw(595,`private`),Tl(),Tw(596,` `),zi$1(597,`span`,46),Tw(598,`readonly`),Tl(),Tw(599,` IJwtGenerator jwtGenerator = jwtGenerator;
        `),zi$1(600,`span`,46),Tw(601,`private`),Tl(),Tw(602,` `),zi$1(603,`span`,46),Tw(604,`readonly`),Tl(),Tw(605,` IEventDispatcher eventDispatcher = eventDispatcher;
        `),zi$1(606,`span`,46),Tw(607,`private`),Tl(),Tw(608,` `),zi$1(609,`span`,46),Tw(610,`readonly`),Tl(),Tw(611,` ApplicationSettings applicationSettings = applicationSettings.Value;
        `),zi$1(612,`span`,46),Tw(613,`private`),Tl(),Tw(614,` `),zi$1(615,`span`,46),Tw(616,`readonly`),Tl(),Tw(617,` IHttpContextAccessor httpContextAccessor = httpContextAccessor;
        `),zi$1(618,`span`,46),Tw(619,`internal`),Tl(),Tw(620,` `),zi$1(621,`span`,46),Tw(622,`static`),Tl(),Tw(623,` `),zi$1(624,`span`,46),Tw(625,`readonly`),Tl(),Tw(626,` `),zi$1(627,`span`,63),Tw(628,`string`),Tl(),Tw(629,`[] registerNotImplemented = [`),zi$1(630,`span`,50),Tw(631,`"Register is not implemented yet."`),Tl(),Tw(632,`];

        `),zi$1(633,`span`,48),Tw(634,`#`),zi$1(635,`span`,46),Tw(636,`region`),Tl(),Tw(637,` IsInRoleAsync`),Tl(),Tw(638,`
        `),zi$1(639,`span`,46),Tw(640,`public`),Tl(),Tw(641,` `),zi$1(642,`span`,46),Tw(643,`async`),Tl(),Tw(644,` Task<Result<`),zi$1(645,`span`,63),Tw(646,`bool`),Tl(),Tw(647,`>> IsInRoleAsync()
        {
            ClaimsPrincipal? claimsPrincipal = `),zi$1(648,`span`,46),Tw(649,`this`),Tl(),Tw(650,`.httpContextAccessor.HttpContext!.User!;
            `),zi$1(651,`span`,46),Tw(652,`if`),Tl(),Tw(653,` (claimsPrincipal != `),zi$1(654,`span`,64),Tw(655,`null`),Tl(),Tw(656,`)
            {
                `),zi$1(657,`span`,46),Tw(658,`var`),Tl(),Tw(659,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),zi$1(660,`span`,46),Tw(661,`if`),Tl(),Tw(662,` (isAuthenticated == `),zi$1(663,`span`,64),Tw(664,`null`),Tl(),Tw(665,` || !(`),zi$1(666,`span`,63),Tw(667,`bool`),Tl(),Tw(668,`)isAuthenticated)
                {
                    `),zi$1(669,`span`,46),Tw(670,`return`),Tl(),Tw(671,` Result<`),zi$1(672,`span`,63),Tw(673,`bool`),Tl(),Tw(674,`>.Failure(`),zi$1(675,`span`,46),Tw(676,`new`),Tl(),Tw(677,` Dictionary<`),zi$1(678,`span`,63),Tw(679,`string`),Tl(),Tw(680,`, `),zi$1(681,`span`,63),Tw(682,`string`),Tl(),Tw(683,`[]>
                {
                    { `),zi$1(684,`span`,50),Tw(685,`"identity_error"`),Tl(),Tw(686,`, `),zi$1(687,`span`,46),Tw(688,`new`),Tl(),Tw(689,`[] { IdentityErrorMessage } }
                });
                }
            }
            `),zi$1(690,`span`,46),Tw(691,`else`),Tl(),Tw(692,`
            {
                `),zi$1(693,`span`,46),Tw(694,`return`),Tl(),Tw(695,` Result<`),zi$1(696,`span`,63),Tw(697,`bool`),Tl(),Tw(698,`>.Failure(`),zi$1(699,`span`,46),Tw(700,`new`),Tl(),Tw(701,` Dictionary<`),zi$1(702,`span`,63),Tw(703,`string`),Tl(),Tw(704,`, `),zi$1(705,`span`,63),Tw(706,`string`),Tl(),Tw(707,`[]>
            {
                { `),zi$1(708,`span`,50),Tw(709,`"identity_error"`),Tl(),Tw(710,`, `),zi$1(711,`span`,46),Tw(712,`new`),Tl(),Tw(713,`[] { IdentityErrorMessage } }
            });
            }

            User? user;
            `),zi$1(714,`span`,46),Tw(715,`if`),Tl(),Tw(716,` (`),zi$1(717,`span`,46),Tw(718,`this`),Tl(),Tw(719,`.env.EnvironmentName == `),zi$1(720,`span`,50),Tw(721,`"Test"`),Tl(),Tw(722,`)
            {
                `),zi$1(723,`span`,46),Tw(724,`var`),Tl(),Tw(725,` name = claimsPrincipal.Identity?.Name;
                `),zi$1(726,`span`,46),Tw(727,`if`),Tl(),Tw(728,` (name == `),zi$1(729,`span`,64),Tw(730,`null`),Tl(),Tw(731,`)
                {
                    `),zi$1(732,`span`,46),Tw(733,`return`),Tl(),Tw(734,` Result<`),zi$1(735,`span`,63),Tw(736,`bool`),Tl(),Tw(737,`>.Failure(`),zi$1(738,`span`,46),Tw(739,`new`),Tl(),Tw(740,` Dictionary<`),zi$1(741,`span`,63),Tw(742,`string`),Tl(),Tw(743,`, `),zi$1(744,`span`,63),Tw(745,`string`),Tl(),Tw(746,`[]>
                {
                    { `),zi$1(747,`span`,50),Tw(748,`"debug_error"`),Tl(),Tw(749,`, `),zi$1(750,`span`,46),Tw(751,`new`),Tl(),Tw(752,`[] { IdentityErrorMessage } }
                });
                }
                user = `),zi$1(753,`span`,46),Tw(754,`await`),Tl(),Tw(755,` `),zi$1(756,`span`,46),Tw(757,`this`),Tl(),Tw(758,`.userManager.FindByEmailAsync(name);
            }
            `),zi$1(759,`span`,46),Tw(760,`else`),Tl(),Tw(761,`
            {
                `),zi$1(762,`span`,46),Tw(763,`var`),Tl(),Tw(764,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),zi$1(765,`span`,46),Tw(766,`if`),Tl(),Tw(767,` (claim == `),zi$1(768,`span`,64),Tw(769,`null`),Tl(),Tw(770,`)
                {
                    `),zi$1(771,`span`,46),Tw(772,`return`),Tl(),Tw(773,` Result<`),zi$1(774,`span`,63),Tw(775,`bool`),Tl(),Tw(776,`>.Failure(`),zi$1(777,`span`,46),Tw(778,`new`),Tl(),Tw(779,` Dictionary<`),zi$1(780,`span`,63),Tw(781,`string`),Tl(),Tw(782,`, `),zi$1(783,`span`,63),Tw(784,`string`),Tl(),Tw(785,`[]>
                {
                    { `),zi$1(786,`span`,50),Tw(787,`"name_identifier_error"`),Tl(),Tw(788,`, `),zi$1(789,`span`,46),Tw(790,`new`),Tl(),Tw(791,`[] { IdentityErrorMessage } }
                });
                }
                user = `),zi$1(792,`span`,46),Tw(793,`await`),Tl(),Tw(794,` `),zi$1(795,`span`,46),Tw(796,`this`),Tl(),Tw(797,`.userManager.FindByIdAsync(claim.Value);
            }

            `),zi$1(798,`span`,46),Tw(799,`if`),Tl(),Tw(800,` (user == `),zi$1(801,`span`,64),Tw(802,`null`),Tl(),Tw(803,`)
            {
                `),zi$1(804,`span`,46),Tw(805,`return`),Tl(),Tw(806,` Result<`),zi$1(807,`span`,63),Tw(808,`bool`),Tl(),Tw(809,`>.Failure(`),zi$1(810,`span`,46),Tw(811,`new`),Tl(),Tw(812,` Dictionary<`),zi$1(813,`span`,63),Tw(814,`string`),Tl(),Tw(815,`, `),zi$1(816,`span`,63),Tw(817,`string`),Tl(),Tw(818,`[]>
            {
                { `),zi$1(819,`span`,50),Tw(820,`"user_error"`),Tl(),Tw(821,`, `),zi$1(822,`span`,46),Tw(823,`new`),Tl(),Tw(824,`[] { UserNullErrorMessage } }
            });
            }

            `),zi$1(825,`span`,46),Tw(826,`var`),Tl(),Tw(827,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),zi$1(828,`span`,46),Tw(829,`if`),Tl(),Tw(830,` (claimRole == `),zi$1(831,`span`,64),Tw(832,`null`),Tl(),Tw(833,`)
            {
                `),zi$1(834,`span`,46),Tw(835,`return`),Tl(),Tw(836,` Result<`),zi$1(837,`span`,63),Tw(838,`bool`),Tl(),Tw(839,`>.Failure(`),zi$1(840,`span`,46),Tw(841,`new`),Tl(),Tw(842,` Dictionary<`),zi$1(843,`span`,63),Tw(844,`string`),Tl(),Tw(845,`, `),zi$1(846,`span`,63),Tw(847,`string`),Tl(),Tw(848,`[]>
                {
                    { `),zi$1(849,`span`,50),Tw(850,`"is_in_role_error"`),Tl(),Tw(851,`, `),zi$1(852,`span`,46),Tw(853,`new`),Tl(),Tw(854,`[] { `),zi$1(855,`span`,63),Tw(856,`string`),Tl(),Tw(857,`.Format(IdentityRoleErrorMessage, `),zi$1(858,`span`,50),Tw(859,`""`),Tl(),Tw(860,`) } }
                });
            }
            `),zi$1(861,`span`,46),Tw(862,`var`),Tl(),Tw(863,` isInRole = `),zi$1(864,`span`,46),Tw(865,`await`),Tl(),Tw(866,` `),zi$1(867,`span`,46),Tw(868,`this`),Tl(),Tw(869,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),zi$1(870,`span`,46),Tw(871,`if`),Tl(),Tw(872,` (!isInRole)
            {
                `),zi$1(873,`span`,46),Tw(874,`return`),Tl(),Tw(875,` Result<`),zi$1(876,`span`,63),Tw(877,`bool`),Tl(),Tw(878,`>.Failure(`),zi$1(879,`span`,46),Tw(880,`new`),Tl(),Tw(881,` Dictionary<`),zi$1(882,`span`,63),Tw(883,`string`),Tl(),Tw(884,`, `),zi$1(885,`span`,63),Tw(886,`string`),Tl(),Tw(887,`[]>
                {
                    { `),zi$1(888,`span`,50),Tw(889,`"is_in_role_error"`),Tl(),Tw(890,`, `),zi$1(891,`span`,46),Tw(892,`new`),Tl(),Tw(893,`[] { `),zi$1(894,`span`,63),Tw(895,`string`),Tl(),Tw(896,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),zi$1(897,`span`,46),Tw(898,`return`),Tl(),Tw(899,` `),zi$1(900,`span`,64),Tw(901,`true`),Tl(),Tw(902,`;
        }
        `),zi$1(903,`span`,48),Tw(904,`#`),zi$1(905,`span`,46),Tw(906,`endregion`),Tl()(),Tw(907,`

        `),zi$1(908,`span`,48),Tw(909,`#`),zi$1(910,`span`,46),Tw(911,`region`),Tl(),Tw(912,` LoginPassword  `),Tl(),Tw(913,`
        `),zi$1(914,`span`,46),Tw(915,`public`),Tl(),Tw(916,` `),zi$1(917,`span`,46),Tw(918,`async`),Tl(),Tw(919,` Task<Result<UserResponseEnvelope>> LoginPassword(LoginPasswordCommand userRequest)
        {
            `),zi$1(920,`span`,46),Tw(921,`if`),Tl(),Tw(922,` (userRequest.UserJson.Password == `),zi$1(923,`span`,64),Tw(924,`null`),Tl(),Tw(925,`)
            {
                `),zi$1(926,`span`,46),Tw(927,`return`),Tl(),Tw(928,` Result<UserResponseEnvelope>.Failure(`),zi$1(929,`span`,46),Tw(930,`new`),Tl(),Tw(931,` Dictionary<`),zi$1(932,`span`,63),Tw(933,`string`),Tl(),Tw(934,`, `),zi$1(935,`span`,63),Tw(936,`string`),Tl(),Tw(937,`[]>
            {
                { `),zi$1(938,`span`,50),Tw(939,`"no_data_error"`),Tl(),Tw(940,`, `),zi$1(941,`span`,46),Tw(942,`new`),Tl(),Tw(943,`[] { NoDataErrorMessage } }
            });
            }

            `),zi$1(944,`span`,63),Tw(945,`bool`),Tl(),Tw(946,` isNewToken = `),zi$1(947,`span`,64),Tw(948,`false`),Tl(),Tw(949,`;
            ClaimsPrincipal? claimsPrincipal = `),zi$1(950,`span`,46),Tw(951,`this`),Tl(),Tw(952,`.httpContextAccessor.HttpContext!.User!;
            `),zi$1(953,`span`,46),Tw(954,`if`),Tl(),Tw(955,` (claimsPrincipal != `),zi$1(956,`span`,64),Tw(957,`null`),Tl(),Tw(958,`)
            {
                `),zi$1(959,`span`,46),Tw(960,`var`),Tl(),Tw(961,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),zi$1(962,`span`,46),Tw(963,`if`),Tl(),Tw(964,` (isAuthenticated == `),zi$1(965,`span`,64),Tw(966,`null`),Tl(),Tw(967,` || !(`),zi$1(968,`span`,63),Tw(969,`bool`),Tl(),Tw(970,`)isAuthenticated)
                {
                    `),zi$1(971,`span`,46),Tw(972,`return`),Tl(),Tw(973,` Result<UserResponseEnvelope>.Failure(`),zi$1(974,`span`,46),Tw(975,`new`),Tl(),Tw(976,` Dictionary<`),zi$1(977,`span`,63),Tw(978,`string`),Tl(),Tw(979,`, `),zi$1(980,`span`,63),Tw(981,`string`),Tl(),Tw(982,`[]>
                {
                    { `),zi$1(983,`span`,50),Tw(984,`"identity_error"`),Tl(),Tw(985,`, `),zi$1(986,`span`,46),Tw(987,`new`),Tl(),Tw(988,`[] { IdentityErrorMessage } }
                });
                }
                `),zi$1(989,`span`,46),Tw(990,`var`),Tl(),Tw(991,` iat = claimsPrincipal.FindFirst(`),zi$1(992,`span`,50),Tw(993,`"iat"`),Tl(),Tw(994,`);
                `),zi$1(995,`span`,46),Tw(996,`var`),Tl(),Tw(997,` exp = claimsPrincipal.FindFirst(`),zi$1(998,`span`,50),Tw(999,`"exp"`),Tl(),Tw(1e3,`);
                `),zi$1(1001,`span`,46),Tw(1002,`if`),Tl(),Tw(1003,` (iat == `),zi$1(1004,`span`,64),Tw(1005,`null`),Tl(),Tw(1006,` || exp == `),zi$1(1007,`span`,64),Tw(1008,`null`),Tl(),Tw(1009,`)
                {
                    `),zi$1(1010,`span`,46),Tw(1011,`return`),Tl(),Tw(1012,` Result<UserResponseEnvelope>.Failure(`),zi$1(1013,`span`,46),Tw(1014,`new`),Tl(),Tw(1015,` Dictionary<`),zi$1(1016,`span`,63),Tw(1017,`string`),Tl(),Tw(1018,`, `),zi$1(1019,`span`,63),Tw(1020,`string`),Tl(),Tw(1021,`[]>
                {
                    { `),zi$1(1022,`span`,50),Tw(1023,`"identity_error"`),Tl(),Tw(1024,`, `),zi$1(1025,`span`,46),Tw(1026,`new`),Tl(),Tw(1027,`[] { IdentityErrorMessage } }
                });
                }

                `),zi$1(1028,`span`,46),Tw(1029,`var`),Tl(),Tw(1030,` rate = (`),zi$1(1031,`span`,63),Tw(1032,`long`),Tl(),Tw(1033,`.Parse(exp.Value) - `),zi$1(1034,`span`,63),Tw(1035,`long`),Tl(),Tw(1036,`.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                `),zi$1(1037,`span`,46),Tw(1038,`var`),Tl(),Tw(1039,` current = `),zi$1(1040,`span`,63),Tw(1041,`long`),Tl(),Tw(1042,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            `),zi$1(1043,`span`,46),Tw(1044,`else`),Tl(),Tw(1045,`
            {
                `),zi$1(1046,`span`,46),Tw(1047,`return`),Tl(),Tw(1048,` Result<UserResponseEnvelope>.Failure(`),zi$1(1049,`span`,46),Tw(1050,`new`),Tl(),Tw(1051,` Dictionary<`),zi$1(1052,`span`,63),Tw(1053,`string`),Tl(),Tw(1054,`, `),zi$1(1055,`span`,63),Tw(1056,`string`),Tl(),Tw(1057,`[]>
            {
                { `),zi$1(1058,`span`,50),Tw(1059,`"identity_error"`),Tl(),Tw(1060,`, `),zi$1(1061,`span`,46),Tw(1062,`new`),Tl(),Tw(1063,`[] { IdentityErrorMessage } }
            });
            }

            User? user;
            `),zi$1(1064,`span`,46),Tw(1065,`if`),Tl(),Tw(1066,` (`),zi$1(1067,`span`,46),Tw(1068,`this`),Tl(),Tw(1069,`.env.EnvironmentName == `),zi$1(1070,`span`,50),Tw(1071,`"Test"`),Tl(),Tw(1072,`)
            {
                `),zi$1(1073,`span`,46),Tw(1074,`var`),Tl(),Tw(1075,` name = claimsPrincipal.Identity?.Name;
                `),zi$1(1076,`span`,46),Tw(1077,`if`),Tl(),Tw(1078,` (name == `),zi$1(1079,`span`,64),Tw(1080,`null`),Tl(),Tw(1081,`)
                {
                    `),zi$1(1082,`span`,46),Tw(1083,`return`),Tl(),Tw(1084,` Result<UserResponseEnvelope>.Failure(`),zi$1(1085,`span`,46),Tw(1086,`new`),Tl(),Tw(1087,` Dictionary<`),zi$1(1088,`span`,63),Tw(1089,`string`),Tl(),Tw(1090,`, `),zi$1(1091,`span`,63),Tw(1092,`string`),Tl(),Tw(1093,`[]>
                {
                    { `),zi$1(1094,`span`,50),Tw(1095,`"debug_error"`),Tl(),Tw(1096,`, `),zi$1(1097,`span`,46),Tw(1098,`new`),Tl(),Tw(1099,`[] { IdentityErrorMessage } }
                });
                }
                user = `),zi$1(1100,`span`,46),Tw(1101,`await`),Tl(),Tw(1102,` `),zi$1(1103,`span`,46),Tw(1104,`this`),Tl(),Tw(1105,`.userManager.FindByEmailAsync(name);
            }
            `),zi$1(1106,`span`,46),Tw(1107,`else`),Tl(),Tw(1108,`
            {
                `),zi$1(1109,`span`,46),Tw(1110,`var`),Tl(),Tw(1111,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),zi$1(1112,`span`,46),Tw(1113,`if`),Tl(),Tw(1114,` (claim == `),zi$1(1115,`span`,64),Tw(1116,`null`),Tl(),Tw(1117,`)
                {
                    `),zi$1(1118,`span`,46),Tw(1119,`return`),Tl(),Tw(1120,` Result<UserResponseEnvelope>.Failure(`),zi$1(1121,`span`,46),Tw(1122,`new`),Tl(),Tw(1123,` Dictionary<`),zi$1(1124,`span`,63),Tw(1125,`string`),Tl(),Tw(1126,`, `),zi$1(1127,`span`,63),Tw(1128,`string`),Tl(),Tw(1129,`[]>
                {
                    { `),zi$1(1130,`span`,50),Tw(1131,`"name_identifier_error"`),Tl(),Tw(1132,`, `),zi$1(1133,`span`,46),Tw(1134,`new`),Tl(),Tw(1135,`[] { IdentityErrorMessage } }
                });
                }
                user = `),zi$1(1136,`span`,46),Tw(1137,`await`),Tl(),Tw(1138,` `),zi$1(1139,`span`,46),Tw(1140,`this`),Tl(),Tw(1141,`.userManager.FindByIdAsync(claim.Value);
            }

            `),zi$1(1142,`span`,46),Tw(1143,`if`),Tl(),Tw(1144,` (user == `),zi$1(1145,`span`,64),Tw(1146,`null`),Tl(),Tw(1147,`)
            {
                `),zi$1(1148,`span`,46),Tw(1149,`return`),Tl(),Tw(1150,` Result<UserResponseEnvelope>.Failure(`),zi$1(1151,`span`,46),Tw(1152,`new`),Tl(),Tw(1153,` Dictionary<`),zi$1(1154,`span`,63),Tw(1155,`string`),Tl(),Tw(1156,`, `),zi$1(1157,`span`,63),Tw(1158,`string`),Tl(),Tw(1159,`[]>
            {
                { `),zi$1(1160,`span`,50),Tw(1161,`"user_error"`),Tl(),Tw(1162,`, `),zi$1(1163,`span`,46),Tw(1164,`new`),Tl(),Tw(1165,`[] { UserNullErrorMessage } }
            });
            }

            `),zi$1(1166,`span`,46),Tw(1167,`var`),Tl(),Tw(1168,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),zi$1(1169,`span`,46),Tw(1170,`if`),Tl(),Tw(1171,` (claimRole == `),zi$1(1172,`span`,64),Tw(1173,`null`),Tl(),Tw(1174,`)
            {
                `),zi$1(1175,`span`,46),Tw(1176,`return`),Tl(),Tw(1177,` Result<UserResponseEnvelope>.Failure(`),zi$1(1178,`span`,46),Tw(1179,`new`),Tl(),Tw(1180,` Dictionary<`),zi$1(1181,`span`,63),Tw(1182,`string`),Tl(),Tw(1183,`, `),zi$1(1184,`span`,63),Tw(1185,`string`),Tl(),Tw(1186,`[]>
                {
                    { `),zi$1(1187,`span`,50),Tw(1188,`"is_in_role_error"`),Tl(),Tw(1189,`, `),zi$1(1190,`span`,46),Tw(1191,`new`),Tl(),Tw(1192,`[] { `),zi$1(1193,`span`,63),Tw(1194,`string`),Tl(),Tw(1195,`.Format(IdentityRoleErrorMessage, `),zi$1(1196,`span`,50),Tw(1197,`""`),Tl(),Tw(1198,`) } }
                });
            }
            `),zi$1(1199,`span`,46),Tw(1200,`var`),Tl(),Tw(1201,` isInRole = `),zi$1(1202,`span`,46),Tw(1203,`await`),Tl(),Tw(1204,` `),zi$1(1205,`span`,46),Tw(1206,`this`),Tl(),Tw(1207,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),zi$1(1208,`span`,46),Tw(1209,`if`),Tl(),Tw(1210,` (!isInRole)
            {
                `),zi$1(1211,`span`,46),Tw(1212,`return`),Tl(),Tw(1213,` Result<UserResponseEnvelope>.Failure(`),zi$1(1214,`span`,46),Tw(1215,`new`),Tl(),Tw(1216,` Dictionary<`),zi$1(1217,`span`,63),Tw(1218,`string`),Tl(),Tw(1219,`, `),zi$1(1220,`span`,63),Tw(1221,`string`),Tl(),Tw(1222,`[]>
                {
                    { `),zi$1(1223,`span`,50),Tw(1224,`"is_in_role_error"`),Tl(),Tw(1225,`, `),zi$1(1226,`span`,46),Tw(1227,`new`),Tl(),Tw(1228,`[] { `),zi$1(1229,`span`,63),Tw(1230,`string`),Tl(),Tw(1231,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),zi$1(1232,`span`,46),Tw(1233,`var`),Tl(),Tw(1234,` isLockoutEnabled = `),zi$1(1235,`span`,46),Tw(1236,`await`),Tl(),Tw(1237,` userManager.GetLockoutEnabledAsync(user);

            `),zi$1(1238,`span`,46),Tw(1239,`if`),Tl(),Tw(1240,` (isLockoutEnabled)
            {
                `),zi$1(1241,`span`,46),Tw(1242,`var`),Tl(),Tw(1243,` count = `),zi$1(1244,`span`,46),Tw(1245,`await`),Tl(),Tw(1246,` userManager.GetAccessFailedCountAsync(user);
                `),zi$1(1247,`span`,46),Tw(1248,`if`),Tl(),Tw(1249,` (count == applicationSettings.MaxFailedAccessAttempts - `),zi$1(1250,`span`,65),Tw(1251,`1`),Tl(),Tw(1252,`)
                {
                    `),zi$1(1253,`span`,46),Tw(1254,`var`),Tl(),Tw(1255,` endDate = `),zi$1(1256,`span`,46),Tw(1257,`await`),Tl(),Tw(1258,` userManager.GetLockoutEndDateAsync(user);
                    `),zi$1(1259,`span`,46),Tw(1260,`var`),Tl(),Tw(1261,` currentDate = DateTimeOffset.UtcNow;
                    `),zi$1(1262,`span`,46),Tw(1263,`if`),Tl(),Tw(1264,` (endDate > currentDate)
                    {
                        `),zi$1(1265,`span`,46),Tw(1266,`return`),Tl(),Tw(1267,` Result<UserResponseEnvelope>.Failure(`),zi$1(1268,`span`,46),Tw(1269,`new`),Tl(),Tw(1270,` Dictionary<`),zi$1(1271,`span`,63),Tw(1272,`string`),Tl(),Tw(1273,`, `),zi$1(1274,`span`,63),Tw(1275,`string`),Tl(),Tw(1276,`[]>
                    {
                        { `),zi$1(1277,`span`,50),Tw(1278,`"lockout_error"`),Tl(),Tw(1279,`, `),zi$1(1280,`span`,46),Tw(1281,`new`),Tl(),Tw(1282,`[] {  `),zi$1(1283,`span`,63),Tw(1284,`string`),Tl(),Tw(1285,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,`),zi$1(1286,`span`,50),Tw(1287,`""`),Tl(),Tw(1288,`) } }
                    });
                    }
                }

                `),zi$1(1289,`span`,46),Tw(1290,`var`),Tl(),Tw(1291,` passwordValid = `),zi$1(1292,`span`,46),Tw(1293,`await`),Tl(),Tw(1294,` `),zi$1(1295,`span`,46),Tw(1296,`this`),Tl(),Tw(1297,`.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                `),zi$1(1298,`span`,46),Tw(1299,`if`),Tl(),Tw(1300,` (!passwordValid)
                {
                    `),zi$1(1301,`span`,46),Tw(1302,`var`),Tl(),Tw(1303,` accessFailed = `),zi$1(1304,`span`,46),Tw(1305,`await`),Tl(),Tw(1306,` `),zi$1(1307,`span`,46),Tw(1308,`this`),Tl(),Tw(1309,`.userManager.AccessFailedAsync(user);
                    `),zi$1(1310,`span`,46),Tw(1311,`if`),Tl(),Tw(1312,` (!accessFailed.Succeeded)
                    {
                        `),zi$1(1313,`span`,46),Tw(1314,`var`),Tl(),Tw(1315,` errors = `),zi$1(1316,`span`,46),Tw(1317,`new`),Tl(),Tw(1318,` Dictionary<`),zi$1(1319,`span`,63),Tw(1320,`string`),Tl(),Tw(1321,`, `),zi$1(1322,`span`,63),Tw(1323,`string`),Tl(),Tw(1324,`[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            `),zi$1(1325,`span`,46),Tw(1326,`switch`),Tl(),Tw(1327,` (e.Code)
                            {
                                `),zi$1(1328,`span`,46),Tw(1329,`case`),Tl(),Tw(1330,` `),zi$1(1331,`span`,50),Tw(1332,`"TODO: need to debug e.Code"`),Tl(),Tw(1333,`:
                                    e.Description = `),zi$1(1334,`span`,63),Tw(1335,`string`),Tl(),Tw(1336,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, `),zi$1(1337,`span`,50),Tw(1338,`""`),Tl(),Tw(1339,`);
                                    `),zi$1(1340,`span`,46),Tw(1341,`break`),Tl(),Tw(1342,`;
                            }

                            e.Description = `),zi$1(1343,`span`,63),Tw(1344,`string`),Tl(),Tw(1345,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, [e.Description]);
                        });

                        `),zi$1(1346,`span`,46),Tw(1347,`return`),Tl(),Tw(1348,` Result<UserResponseEnvelope>.Failure(errors);
                    }

                    `),zi$1(1349,`span`,46),Tw(1350,`return`),Tl(),Tw(1351,` Result<UserResponseEnvelope>.Failure(`),zi$1(1352,`span`,46),Tw(1353,`new`),Tl(),Tw(1354,` Dictionary<`),zi$1(1355,`span`,63),Tw(1356,`string`),Tl(),Tw(1357,`, `),zi$1(1358,`span`,63),Tw(1359,`string`),Tl(),Tw(1360,`[]>
                {
                    { `),zi$1(1361,`span`,50),Tw(1362,`"invalid_error"`),Tl(),Tw(1363,`, `),zi$1(1364,`span`,46),Tw(1365,`new`),Tl(),Tw(1366,`[] { InvalidErrorMessage } }
                });
                }
            }
            `),zi$1(1367,`span`,46),Tw(1368,`else`),Tl(),Tw(1369,`
            {
                `),zi$1(1370,`span`,46),Tw(1371,`if`),Tl(),Tw(1372,` (`),zi$1(1373,`span`,46),Tw(1374,`this`),Tl(),Tw(1375,`.env.EnvironmentName == `),zi$1(1376,`span`,50),Tw(1377,`"Test"`),Tl(),Tw(1378,`)
                {
                    `),zi$1(1379,`span`,46),Tw(1380,`var`),Tl(),Tw(1381,` passwordValid = `),zi$1(1382,`span`,46),Tw(1383,`await`),Tl(),Tw(1384,` `),zi$1(1385,`span`,46),Tw(1386,`this`),Tl(),Tw(1387,`.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    `),zi$1(1388,`span`,46),Tw(1389,`if`),Tl(),Tw(1390,` (!passwordValid)
                    {
                        `),zi$1(1391,`span`,46),Tw(1392,`return`),Tl(),Tw(1393,` Result<UserResponseEnvelope>.Failure(`),zi$1(1394,`span`,46),Tw(1395,`new`),Tl(),Tw(1396,` Dictionary<`),zi$1(1397,`span`,63),Tw(1398,`string`),Tl(),Tw(1399,`, `),zi$1(1400,`span`,63),Tw(1401,`string`),Tl(),Tw(1402,`[]>
                    {
                        { `),zi$1(1403,`span`,50),Tw(1404,`"invalid_error"`),Tl(),Tw(1405,`, `),zi$1(1406,`span`,46),Tw(1407,`new`),Tl(),Tw(1408,`[] { InvalidErrorMessage } }
                    });
                    }
                }
                `),zi$1(1409,`span`,46),Tw(1410,`else`),Tl(),Tw(1411,`
                {
                    `),zi$1(1412,`span`,46),Tw(1413,`return`),Tl(),Tw(1414,` Result<UserResponseEnvelope>.Failure(`),zi$1(1415,`span`,46),Tw(1416,`new`),Tl(),Tw(1417,` Dictionary<`),zi$1(1418,`span`,63),Tw(1419,`string`),Tl(),Tw(1420,`, `),zi$1(1421,`span`,63),Tw(1422,`string`),Tl(),Tw(1423,`[]>
                {
                    { `),zi$1(1424,`span`,50),Tw(1425,`"lockout_enabled_error"`),Tl(),Tw(1426,`, `),zi$1(1427,`span`,46),Tw(1428,`new`),Tl(),Tw(1429,`[] { LockoutEnabledErrorMessage } }
                });
                }
            }

            `),zi$1(1430,`span`,63),Tw(1431,`string`),Tl(),Tw(1432,`? token;
            `),zi$1(1433,`span`,46),Tw(1434,`if`),Tl(),Tw(1435,` (`),zi$1(1436,`span`,46),Tw(1437,`this`),Tl(),Tw(1438,`.env.EnvironmentName == `),zi$1(1439,`span`,50),Tw(1440,`"Test"`),Tl(),Tw(1441,`)
            {
                token = `),zi$1(1442,`span`,50),Tw(1443,`$"Token: `),zi$1(1444,`span`,66),Tw(1445,`{user.Email}`),Tl(),Tw(1446,`"`),Tl(),Tw(1447,`;
            }
            `),zi$1(1448,`span`,46),Tw(1449,`else`),Tl(),Tw(1450,`
            {
                token = isNewToken ? `),zi$1(1451,`span`,46),Tw(1452,`await`),Tl(),Tw(1453,` `),zi$1(1454,`span`,46),Tw(1455,`this`),Tl(),Tw(1456,`.jwtGenerator.GenerateToken(user) :
                `),zi$1(1457,`span`,46),Tw(1458,`this`),Tl(),Tw(1459,`.httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()[`),zi$1(1460,`span`,50),Tw(1461,`"Bearer "`),Tl(),Tw(1462,`.Length..].Trim();
            }

            `),zi$1(1463,`span`,46),Tw(1464,`return`),Tl(),Tw(1465,` `),zi$1(1466,`span`,46),Tw(1467,`new`),Tl(),Tw(1468,` UserResponseEnvelope
            {
                UserJson = `),zi$1(1469,`span`,46),Tw(1470,`new`),Tl(),Tw(1471,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        `),zi$1(1472,`span`,48),Tw(1473,`#`),zi$1(1474,`span`,46),Tw(1475,`endregion`),Tl()(),Tw(1476,`

        `),zi$1(1477,`span`,48),Tw(1478,`#`),zi$1(1479,`span`,46),Tw(1480,`region`),Tl(),Tw(1481,` Update`),Tl(),Tw(1482,`
        `),zi$1(1483,`span`,46),Tw(1484,`public`),Tl(),Tw(1485,` `),zi$1(1486,`span`,46),Tw(1487,`async`),Tl(),Tw(1488,` Task<Result<UserResponseEnvelope>> Update(UserUpdateCommand userRequest)
        {
            `),zi$1(1489,`span`,46),Tw(1490,`if`),Tl(),Tw(1491,` (userRequest.UserJson.FullName == `),zi$1(1492,`span`,64),Tw(1493,`null`),Tl(),Tw(1494,` && userRequest.UserJson.Password == `),zi$1(1495,`span`,64),Tw(1496,`null`),Tl(),Tw(1497,`)
            {
                `),zi$1(1498,`span`,46),Tw(1499,`return`),Tl(),Tw(1500,` Result<UserResponseEnvelope>.Failure(`),zi$1(1501,`span`,46),Tw(1502,`new`),Tl(),Tw(1503,` Dictionary<`),zi$1(1504,`span`,63),Tw(1505,`string`),Tl(),Tw(1506,`, `),zi$1(1507,`span`,63),Tw(1508,`string`),Tl(),Tw(1509,`[]>
            {
                 { `),zi$1(1510,`span`,50),Tw(1511,`"no_data_error"`),Tl(),Tw(1512,`, `),zi$1(1513,`span`,46),Tw(1514,`new`),Tl(),Tw(1515,`[] { NoDataErrorMessage } }
            });
            }

            `),zi$1(1516,`span`,63),Tw(1517,`bool`),Tl(),Tw(1518,` isNewToken = `),zi$1(1519,`span`,64),Tw(1520,`false`),Tl(),Tw(1521,`;
            ClaimsPrincipal? claimsPrincipal = `),zi$1(1522,`span`,46),Tw(1523,`this`),Tl(),Tw(1524,`.httpContextAccessor.HttpContext!.User!;
            `),zi$1(1525,`span`,46),Tw(1526,`if`),Tl(),Tw(1527,` (claimsPrincipal != `),zi$1(1528,`span`,64),Tw(1529,`null`),Tl(),Tw(1530,`)
            {
                `),zi$1(1531,`span`,46),Tw(1532,`var`),Tl(),Tw(1533,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),zi$1(1534,`span`,46),Tw(1535,`if`),Tl(),Tw(1536,` (isAuthenticated == `),zi$1(1537,`span`,64),Tw(1538,`null`),Tl(),Tw(1539,` || !(`),zi$1(1540,`span`,63),Tw(1541,`bool`),Tl(),Tw(1542,`)isAuthenticated)
                {
                    `),zi$1(1543,`span`,46),Tw(1544,`return`),Tl(),Tw(1545,` Result<UserResponseEnvelope>.Failure(`),zi$1(1546,`span`,46),Tw(1547,`new`),Tl(),Tw(1548,` Dictionary<`),zi$1(1549,`span`,63),Tw(1550,`string`),Tl(),Tw(1551,`, `),zi$1(1552,`span`,63),Tw(1553,`string`),Tl(),Tw(1554,`[]>
                {
                    { `),zi$1(1555,`span`,50),Tw(1556,`"identity_error"`),Tl(),Tw(1557,`, `),zi$1(1558,`span`,46),Tw(1559,`new`),Tl(),Tw(1560,`[] { IdentityErrorMessage } }
                });
                }
                `),zi$1(1561,`span`,46),Tw(1562,`var`),Tl(),Tw(1563,` iat = claimsPrincipal.FindFirst(`),zi$1(1564,`span`,50),Tw(1565,`"iat"`),Tl(),Tw(1566,`);
                `),zi$1(1567,`span`,46),Tw(1568,`var`),Tl(),Tw(1569,` exp = claimsPrincipal.FindFirst(`),zi$1(1570,`span`,50),Tw(1571,`"exp"`),Tl(),Tw(1572,`);
                `),zi$1(1573,`span`,46),Tw(1574,`if`),Tl(),Tw(1575,` (iat == `),zi$1(1576,`span`,64),Tw(1577,`null`),Tl(),Tw(1578,` || exp == `),zi$1(1579,`span`,64),Tw(1580,`null`),Tl(),Tw(1581,`)
                {
                    `),zi$1(1582,`span`,46),Tw(1583,`return`),Tl(),Tw(1584,` Result<UserResponseEnvelope>.Failure(`),zi$1(1585,`span`,46),Tw(1586,`new`),Tl(),Tw(1587,` Dictionary<`),zi$1(1588,`span`,63),Tw(1589,`string`),Tl(),Tw(1590,`, `),zi$1(1591,`span`,63),Tw(1592,`string`),Tl(),Tw(1593,`[]>
                {
                    { `),zi$1(1594,`span`,50),Tw(1595,`"identity_error"`),Tl(),Tw(1596,`, `),zi$1(1597,`span`,46),Tw(1598,`new`),Tl(),Tw(1599,`[] { IdentityErrorMessage } }
                });
                }

                `),zi$1(1600,`span`,46),Tw(1601,`var`),Tl(),Tw(1602,` rate = (`),zi$1(1603,`span`,63),Tw(1604,`long`),Tl(),Tw(1605,`.Parse(exp.Value) - `),zi$1(1606,`span`,63),Tw(1607,`long`),Tl(),Tw(1608,`.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                `),zi$1(1609,`span`,46),Tw(1610,`var`),Tl(),Tw(1611,` current = `),zi$1(1612,`span`,63),Tw(1613,`long`),Tl(),Tw(1614,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            `),zi$1(1615,`span`,46),Tw(1616,`else`),Tl(),Tw(1617,`
            {
                `),zi$1(1618,`span`,46),Tw(1619,`return`),Tl(),Tw(1620,` Result<UserResponseEnvelope>.Failure(`),zi$1(1621,`span`,46),Tw(1622,`new`),Tl(),Tw(1623,` Dictionary<`),zi$1(1624,`span`,63),Tw(1625,`string`),Tl(),Tw(1626,`, `),zi$1(1627,`span`,63),Tw(1628,`string`),Tl(),Tw(1629,`[]>
            {
                { `),zi$1(1630,`span`,50),Tw(1631,`"identity_error"`),Tl(),Tw(1632,`, `),zi$1(1633,`span`,46),Tw(1634,`new`),Tl(),Tw(1635,`[] { IdentityErrorMessage } }
            });
            }

            `),zi$1(1636,`span`,46),Tw(1637,`if`),Tl(),Tw(1638,` (userRequest.UserJson.FullName != `),zi$1(1639,`span`,64),Tw(1640,`null`),Tl(),Tw(1641,`)
            {
                `),zi$1(1642,`span`,46),Tw(1643,`var`),Tl(),Tw(1644,` userByName = `),zi$1(1645,`span`,46),Tw(1646,`await`),Tl(),Tw(1647,` `),zi$1(1648,`span`,46),Tw(1649,`this`),Tl(),Tw(1650,`.userManager.FindByNameAsync(userRequest.UserJson.FullName);

                `),zi$1(1651,`span`,46),Tw(1652,`if`),Tl(),Tw(1653,` (userByName != `),zi$1(1654,`span`,64),Tw(1655,`null`),Tl(),Tw(1656,`)
                {
                    `),zi$1(1657,`span`,46),Tw(1658,`return`),Tl(),Tw(1659,` Result<UserResponseEnvelope>.Failure(`),zi$1(1660,`span`,46),Tw(1661,`new`),Tl(),Tw(1662,` Dictionary<`),zi$1(1663,`span`,63),Tw(1664,`string`),Tl(),Tw(1665,`, `),zi$1(1666,`span`,63),Tw(1667,`string`),Tl(),Tw(1668,`[]>
                {
                    { `),zi$1(1669,`span`,50),Tw(1670,`"name_error"`),Tl(),Tw(1671,`, `),zi$1(1672,`span`,46),Tw(1673,`new`),Tl(),Tw(1674,`[] { UserNameTakenErrorMessage } }
                });
                }
            }

            User? user;
            `),zi$1(1675,`span`,46),Tw(1676,`if`),Tl(),Tw(1677,` (`),zi$1(1678,`span`,46),Tw(1679,`this`),Tl(),Tw(1680,`.env.EnvironmentName == `),zi$1(1681,`span`,50),Tw(1682,`"Test"`),Tl(),Tw(1683,`)
            {
                `),zi$1(1684,`span`,46),Tw(1685,`var`),Tl(),Tw(1686,` name = claimsPrincipal.Identity?.Name;
                `),zi$1(1687,`span`,46),Tw(1688,`if`),Tl(),Tw(1689,` (name == `),zi$1(1690,`span`,64),Tw(1691,`null`),Tl(),Tw(1692,`)
                {
                    `),zi$1(1693,`span`,46),Tw(1694,`return`),Tl(),Tw(1695,` Result<UserResponseEnvelope>.Failure(`),zi$1(1696,`span`,46),Tw(1697,`new`),Tl(),Tw(1698,` Dictionary<`),zi$1(1699,`span`,63),Tw(1700,`string`),Tl(),Tw(1701,`, `),zi$1(1702,`span`,63),Tw(1703,`string`),Tl(),Tw(1704,`[]>
                {
                    { `),zi$1(1705,`span`,50),Tw(1706,`"debug_error"`),Tl(),Tw(1707,`, `),zi$1(1708,`span`,46),Tw(1709,`new`),Tl(),Tw(1710,`[] { IdentityErrorMessage } }
                });
                }
                user = `),zi$1(1711,`span`,46),Tw(1712,`await`),Tl(),Tw(1713,` `),zi$1(1714,`span`,46),Tw(1715,`this`),Tl(),Tw(1716,`.userManager.FindByEmailAsync(name);
            }
            `),zi$1(1717,`span`,46),Tw(1718,`else`),Tl(),Tw(1719,`
            {
                `),zi$1(1720,`span`,46),Tw(1721,`var`),Tl(),Tw(1722,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),zi$1(1723,`span`,46),Tw(1724,`if`),Tl(),Tw(1725,` (claim == `),zi$1(1726,`span`,64),Tw(1727,`null`),Tl(),Tw(1728,`)
                {
                    `),zi$1(1729,`span`,46),Tw(1730,`return`),Tl(),Tw(1731,` Result<UserResponseEnvelope>.Failure(`),zi$1(1732,`span`,46),Tw(1733,`new`),Tl(),Tw(1734,` Dictionary<`),zi$1(1735,`span`,63),Tw(1736,`string`),Tl(),Tw(1737,`, `),zi$1(1738,`span`,63),Tw(1739,`string`),Tl(),Tw(1740,`[]>
                {
                    { `),zi$1(1741,`span`,50),Tw(1742,`"name_identifier_error"`),Tl(),Tw(1743,`, `),zi$1(1744,`span`,46),Tw(1745,`new`),Tl(),Tw(1746,`[] { IdentityErrorMessage } }
                });
                }
                user = `),zi$1(1747,`span`,46),Tw(1748,`await`),Tl(),Tw(1749,` `),zi$1(1750,`span`,46),Tw(1751,`this`),Tl(),Tw(1752,`.userManager.FindByIdAsync(claim.Value);
            }

            `),zi$1(1753,`span`,46),Tw(1754,`if`),Tl(),Tw(1755,` (user == `),zi$1(1756,`span`,64),Tw(1757,`null`),Tl(),Tw(1758,`)
            {
                `),zi$1(1759,`span`,46),Tw(1760,`return`),Tl(),Tw(1761,` Result<UserResponseEnvelope>.Failure(`),zi$1(1762,`span`,46),Tw(1763,`new`),Tl(),Tw(1764,` Dictionary<`),zi$1(1765,`span`,63),Tw(1766,`string`),Tl(),Tw(1767,`, `),zi$1(1768,`span`,63),Tw(1769,`string`),Tl(),Tw(1770,`[]>
            {
                { `),zi$1(1771,`span`,50),Tw(1772,`"user_error"`),Tl(),Tw(1773,`, `),zi$1(1774,`span`,46),Tw(1775,`new`),Tl(),Tw(1776,`[] { UserNullErrorMessage } }
            });
            }

            `),zi$1(1777,`span`,46),Tw(1778,`var`),Tl(),Tw(1779,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),zi$1(1780,`span`,46),Tw(1781,`if`),Tl(),Tw(1782,` (claimRole == `),zi$1(1783,`span`,64),Tw(1784,`null`),Tl(),Tw(1785,`)
            {
                `),zi$1(1786,`span`,46),Tw(1787,`return`),Tl(),Tw(1788,` Result<UserResponseEnvelope>.Failure(`),zi$1(1789,`span`,46),Tw(1790,`new`),Tl(),Tw(1791,` Dictionary<`),zi$1(1792,`span`,63),Tw(1793,`string`),Tl(),Tw(1794,`, `),zi$1(1795,`span`,63),Tw(1796,`string`),Tl(),Tw(1797,`[]>
                {
                    { `),zi$1(1798,`span`,50),Tw(1799,`"is_in_role_error"`),Tl(),Tw(1800,`, `),zi$1(1801,`span`,46),Tw(1802,`new`),Tl(),Tw(1803,`[] { `),zi$1(1804,`span`,63),Tw(1805,`string`),Tl(),Tw(1806,`.Format(IdentityRoleErrorMessage, `),zi$1(1807,`span`,50),Tw(1808,`""`),Tl(),Tw(1809,`) } }
                });
            }
            `),zi$1(1810,`span`,46),Tw(1811,`var`),Tl(),Tw(1812,` isInRole = `),zi$1(1813,`span`,46),Tw(1814,`await`),Tl(),Tw(1815,` `),zi$1(1816,`span`,46),Tw(1817,`this`),Tl(),Tw(1818,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),zi$1(1819,`span`,46),Tw(1820,`if`),Tl(),Tw(1821,` (!isInRole)
            {
                `),zi$1(1822,`span`,46),Tw(1823,`return`),Tl(),Tw(1824,` Result<UserResponseEnvelope>.Failure(`),zi$1(1825,`span`,46),Tw(1826,`new`),Tl(),Tw(1827,` Dictionary<`),zi$1(1828,`span`,63),Tw(1829,`string`),Tl(),Tw(1830,`, `),zi$1(1831,`span`,63),Tw(1832,`string`),Tl(),Tw(1833,`[]>
                {
                    { `),zi$1(1834,`span`,50),Tw(1835,`"is_in_role_error"`),Tl(),Tw(1836,`, `),zi$1(1837,`span`,46),Tw(1838,`new`),Tl(),Tw(1839,`[] { `),zi$1(1840,`span`,63),Tw(1841,`string`),Tl(),Tw(1842,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),zi$1(1843,`span`,46),Tw(1844,`if`),Tl(),Tw(1845,` (userRequest.UserJson.Password != `),zi$1(1846,`span`,64),Tw(1847,`null`),Tl(),Tw(1848,`)
            {
                `),zi$1(1849,`span`,46),Tw(1850,`var`),Tl(),Tw(1851,` identityResult2 = `),zi$1(1852,`span`,46),Tw(1853,`await`),Tl(),Tw(1854,` `),zi$1(1855,`span`,46),Tw(1856,`this`),Tl(),Tw(1857,`.userManager.RemovePasswordAsync(user);

                `),zi$1(1858,`span`,46),Tw(1859,`if`),Tl(),Tw(1860,` (!identityResult2.Succeeded)
                {
                    `),zi$1(1861,`span`,46),Tw(1862,`var`),Tl(),Tw(1863,` errors = `),zi$1(1864,`span`,46),Tw(1865,`new`),Tl(),Tw(1866,` Dictionary<`),zi$1(1867,`span`,63),Tw(1868,`string`),Tl(),Tw(1869,`, `),zi$1(1870,`span`,63),Tw(1871,`string`),Tl(),Tw(1872,`[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),zi$1(1873,`span`,46),Tw(1874,`return`),Tl(),Tw(1875,` Result<UserResponseEnvelope>.Failure(errors);
                }

                identityResult2 = `),zi$1(1876,`span`,46),Tw(1877,`await`),Tl(),Tw(1878,` `),zi$1(1879,`span`,46),Tw(1880,`this`),Tl(),Tw(1881,`.userManager.AddPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                `),zi$1(1882,`span`,46),Tw(1883,`if`),Tl(),Tw(1884,` (!identityResult2.Succeeded)
                {
                    `),zi$1(1885,`span`,46),Tw(1886,`var`),Tl(),Tw(1887,` errors = `),zi$1(1888,`span`,46),Tw(1889,`new`),Tl(),Tw(1890,` Dictionary<`),zi$1(1891,`span`,63),Tw(1892,`string`),Tl(),Tw(1893,`, `),zi$1(1894,`span`,63),Tw(1895,`string`),Tl(),Tw(1896,`[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        `),zi$1(1897,`span`,46),Tw(1898,`switch`),Tl(),Tw(1899,` (e.Code)
                        {
                            `),zi$1(1900,`span`,46),Tw(1901,`case`),Tl(),Tw(1902,` `),zi$1(1903,`span`,50),Tw(1904,`"PasswordRequiresDigit"`),Tl(),Tw(1905,`:
                                e.Description = PasswordFormatErrorMessage;
                                `),zi$1(1906,`span`,46),Tw(1907,`break`),Tl(),Tw(1908,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });
                    errors.Add(`),zi$1(1909,`span`,50),Tw(1910,`"PasswordDeleted"`),Tl(),Tw(1911,`, [PasswordDeletedErrorMessage]);
                    `),zi$1(1912,`span`,46),Tw(1913,`return`),Tl(),Tw(1914,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }

            `),zi$1(1915,`span`,46),Tw(1916,`if`),Tl(),Tw(1917,` (userRequest.UserJson.FullName != `),zi$1(1918,`span`,64),Tw(1919,`null`),Tl(),Tw(1920,`)
            {
                `),zi$1(1921,`span`,46),Tw(1922,`var`),Tl(),Tw(1923,` identityResult1 = `),zi$1(1924,`span`,46),Tw(1925,`await`),Tl(),Tw(1926,` `),zi$1(1927,`span`,46),Tw(1928,`this`),Tl(),Tw(1929,`.userManager.SetUserNameAsync(
                     user,
                     userRequest.UserJson.FullName);

                `),zi$1(1930,`span`,46),Tw(1931,`if`),Tl(),Tw(1932,` (!identityResult1.Succeeded)
                {
                    `),zi$1(1933,`span`,46),Tw(1934,`var`),Tl(),Tw(1935,` errors = `),zi$1(1936,`span`,46),Tw(1937,`new`),Tl(),Tw(1938,` Dictionary<`),zi$1(1939,`span`,63),Tw(1940,`string`),Tl(),Tw(1941,`, `),zi$1(1942,`span`,63),Tw(1943,`string`),Tl(),Tw(1944,`[]>();
                    identityResult1.Errors.ForEach(e =>
                    {
                        `),zi$1(1945,`span`,46),Tw(1946,`switch`),Tl(),Tw(1947,` (e.Code)
                        {
                            `),zi$1(1948,`span`,46),Tw(1949,`case`),Tl(),Tw(1950,` `),zi$1(1951,`span`,50),Tw(1952,`"InvalidUserName"`),Tl(),Tw(1953,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),zi$1(1954,`span`,46),Tw(1955,`break`),Tl(),Tw(1956,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),zi$1(1957,`span`,46),Tw(1958,`return`),Tl(),Tw(1959,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }

            `),zi$1(1960,`span`,63),Tw(1961,`string`),Tl(),Tw(1962,`? token;
            `),zi$1(1963,`span`,46),Tw(1964,`if`),Tl(),Tw(1965,` (`),zi$1(1966,`span`,46),Tw(1967,`this`),Tl(),Tw(1968,`.env.EnvironmentName == `),zi$1(1969,`span`,50),Tw(1970,`"Test"`),Tl(),Tw(1971,`)
            {
                token = `),zi$1(1972,`span`,50),Tw(1973,`$"Token: `),zi$1(1974,`span`,66),Tw(1975,`{user.Email}`),Tl(),Tw(1976,`"`),Tl(),Tw(1977,`;
            }
            `),zi$1(1978,`span`,46),Tw(1979,`else`),Tl(),Tw(1980,`
            {
                token = isNewToken ? `),zi$1(1981,`span`,46),Tw(1982,`await`),Tl(),Tw(1983,` `),zi$1(1984,`span`,46),Tw(1985,`this`),Tl(),Tw(1986,`.jwtGenerator.GenerateToken(user) :
                `),zi$1(1987,`span`,46),Tw(1988,`this`),Tl(),Tw(1989,`.httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()[`),zi$1(1990,`span`,50),Tw(1991,`"Bearer "`),Tl(),Tw(1992,`.Length..].Trim();
            }

            `),zi$1(1993,`span`,46),Tw(1994,`return`),Tl(),Tw(1995,` `),zi$1(1996,`span`,46),Tw(1997,`new`),Tl(),Tw(1998,` UserResponseEnvelope
            {
                UserJson = `),zi$1(1999,`span`,46),Tw(2e3,`new`),Tl(),Tw(2001,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        `),zi$1(2002,`span`,48),Tw(2003,`#`),zi$1(2004,`span`,46),Tw(2005,`endregion`),Tl()(),Tw(2006,`

        `),zi$1(2007,`span`,46),Tw(2008,`public`),Tl(),Tw(2009,` `),zi$1(2010,`span`,46),Tw(2011,`async`),Tl(),Tw(2012,` Task<Result<ProfileResponseEnvelope>> Profile(`),zi$1(2013,`span`,63),Tw(2014,`string`),Tl(),Tw(2015,` userName)
        {
            `),zi$1(2016,`span`,46),Tw(2017,`var`),Tl(),Tw(2018,` user = `),zi$1(2019,`span`,46),Tw(2020,`await`),Tl(),Tw(2021,` `),zi$1(2022,`span`,46),Tw(2023,`this`),Tl(),Tw(2024,`.userManager.FindByNameAsync(userName);

            `),zi$1(2025,`span`,46),Tw(2026,`if`),Tl(),Tw(2027,` (user == `),zi$1(2028,`span`,64),Tw(2029,`null`),Tl(),Tw(2030,`)
            {
                `),zi$1(2031,`span`,46),Tw(2032,`return`),Tl(),Tw(2033,` Result<ProfileResponseEnvelope>.Failure(`),zi$1(2034,`span`,46),Tw(2035,`new`),Tl(),Tw(2036,` Dictionary<`),zi$1(2037,`span`,63),Tw(2038,`string`),Tl(),Tw(2039,`, `),zi$1(2040,`span`,63),Tw(2041,`string`),Tl(),Tw(2042,`[]>
                    {
                       { `),zi$1(2043,`span`,50),Tw(2044,`"profile_error"`),Tl(),Tw(2045,`, `),zi$1(2046,`span`,46),Tw(2047,`new`),Tl(),Tw(2048,`[] { ProfileErrorMessage } }
                    }
                );
            }

            `),zi$1(2049,`span`,46),Tw(2050,`return`),Tl(),Tw(2051,` `),zi$1(2052,`span`,46),Tw(2053,`new`),Tl(),Tw(2054,` ProfileResponseEnvelope
            {
                ProfileJson = `),zi$1(2055,`span`,46),Tw(2056,`new`),Tl(),Tw(2057,` ProfileResponseModel(user.UserName, user.UserName, user.UserName)
            };

        }

        `),zi$1(2058,`span`,46),Tw(2059,`public`),Tl(),Tw(2060,` `),zi$1(2061,`span`,46),Tw(2062,`async`),Tl(),Tw(2063,` Task<Result<UserResponseEnvelope>> Register(UserRegisterRequestEnvelope userRequest)
        {
            `),zi$1(2064,`span`,46),Tw(2065,`var`),Tl(),Tw(2066,` userByEmail = `),zi$1(2067,`span`,46),Tw(2068,`await`),Tl(),Tw(2069,` `),zi$1(2070,`span`,46),Tw(2071,`this`),Tl(),Tw(2072,`.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            `),zi$1(2073,`span`,46),Tw(2074,`if`),Tl(),Tw(2075,` (userByEmail != `),zi$1(2076,`span`,64),Tw(2077,`null`),Tl(),Tw(2078,`)
            {
                `),zi$1(2079,`span`,46),Tw(2080,`return`),Tl(),Tw(2081,` Result<UserResponseEnvelope>.Failure(`),zi$1(2082,`span`,46),Tw(2083,`new`),Tl(),Tw(2084,` Dictionary<`),zi$1(2085,`span`,63),Tw(2086,`string`),Tl(),Tw(2087,`, `),zi$1(2088,`span`,63),Tw(2089,`string`),Tl(),Tw(2090,`[]>
            {
                { `),zi$1(2091,`span`,50),Tw(2092,`"email_error"`),Tl(),Tw(2093,`, `),zi$1(2094,`span`,46),Tw(2095,`new`),Tl(),Tw(2096,`[] { EmailTakenErrorMessage } }
            });
            }

            `),zi$1(2097,`span`,46),Tw(2098,`var`),Tl(),Tw(2099,` userByName = `),zi$1(2100,`span`,46),Tw(2101,`await`),Tl(),Tw(2102,` `),zi$1(2103,`span`,46),Tw(2104,`this`),Tl(),Tw(2105,`.userManager.FindByNameAsync(userRequest.UserJson.FullName);

            `),zi$1(2106,`span`,46),Tw(2107,`if`),Tl(),Tw(2108,` (userByName != `),zi$1(2109,`span`,64),Tw(2110,`null`),Tl(),Tw(2111,`)
            {
                `),zi$1(2112,`span`,46),Tw(2113,`return`),Tl(),Tw(2114,` Result<UserResponseEnvelope>.Failure(`),zi$1(2115,`span`,46),Tw(2116,`new`),Tl(),Tw(2117,` Dictionary<`),zi$1(2118,`span`,63),Tw(2119,`string`),Tl(),Tw(2120,`, `),zi$1(2121,`span`,63),Tw(2122,`string`),Tl(),Tw(2123,`[]>
            {
               { `),zi$1(2124,`span`,50),Tw(2125,`"name_error"`),Tl(),Tw(2126,`, `),zi$1(2127,`span`,46),Tw(2128,`new`),Tl(),Tw(2129,`[] { UserNameTakenErrorMessage } }
            });
            }

            `),zi$1(2130,`span`,46),Tw(2131,`if`),Tl(),Tw(2132,` (`),zi$1(2133,`span`,46),Tw(2134,`this`),Tl(),Tw(2135,`.env.EnvironmentName == `),zi$1(2136,`span`,50),Tw(2137,`"Test"`),Tl(),Tw(2138,`)
            {
                `),zi$1(2139,`span`,46),Tw(2140,`var`),Tl(),Tw(2141,` user = `),zi$1(2142,`span`,46),Tw(2143,`new`),Tl(),Tw(2144,` User(userRequest.UserJson.Email, userRequest.UserJson.FullName);

                `),zi$1(2145,`span`,46),Tw(2146,`var`),Tl(),Tw(2147,` identityResult = `),zi$1(2148,`span`,46),Tw(2149,`await`),Tl(),Tw(2150,` `),zi$1(2151,`span`,46),Tw(2152,`this`),Tl(),Tw(2153,`.userManager.CreateAsync(
                    user,
                    userRequest.UserJson.Password);

                `),zi$1(2154,`span`,46),Tw(2155,`if`),Tl(),Tw(2156,` (!identityResult.Succeeded)
                {
                    `),zi$1(2157,`span`,46),Tw(2158,`var`),Tl(),Tw(2159,` errors = `),zi$1(2160,`span`,46),Tw(2161,`new`),Tl(),Tw(2162,` Dictionary<`),zi$1(2163,`span`,63),Tw(2164,`string`),Tl(),Tw(2165,`, `),zi$1(2166,`span`,63),Tw(2167,`string`),Tl(),Tw(2168,`[]>();
                    identityResult.Errors.ForEach(e =>
                    {
                        `),zi$1(2169,`span`,46),Tw(2170,`switch`),Tl(),Tw(2171,` (e.Code)
                        {
                            `),zi$1(2172,`span`,46),Tw(2173,`case`),Tl(),Tw(2174,` `),zi$1(2175,`span`,50),Tw(2176,`"InvalidUserName"`),Tl(),Tw(2177,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),zi$1(2178,`span`,46),Tw(2179,`break`),Tl(),Tw(2180,`;
                            `),zi$1(2181,`span`,46),Tw(2182,`case`),Tl(),Tw(2183,` `),zi$1(2184,`span`,50),Tw(2185,`"PasswordRequiresDigit"`),Tl(),Tw(2186,`:
                                e.Description = PasswordFormatErrorMessage;
                                `),zi$1(2187,`span`,46),Tw(2188,`break`),Tl(),Tw(2189,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),zi$1(2190,`span`,46),Tw(2191,`return`),Tl(),Tw(2192,` Result<UserResponseEnvelope>.Failure(errors);
                }

                `),zi$1(2193,`span`,46),Tw(2194,`var`),Tl(),Tw(2195,` token = `),zi$1(2196,`span`,50),Tw(2197,`$"Token: `),zi$1(2198,`span`,66),Tw(2199,`{user.Email}`),Tl(),Tw(2200,`"`),Tl(),Tw(2201,`;

                `),zi$1(2202,`span`,46),Tw(2203,`await`),Tl(),Tw(2204,` `),zi$1(2205,`span`,46),Tw(2206,`this`),Tl(),Tw(2207,`.eventDispatcher.Dispatch(`),zi$1(2208,`span`,46),Tw(2209,`new`),Tl(),Tw(2210,` UserRegisteredEvent(
                    user.Id,
                    userRequest.UserJson.FullName));

                `),zi$1(2211,`span`,46),Tw(2212,`return`),Tl(),Tw(2213,` `),zi$1(2214,`span`,46),Tw(2215,`new`),Tl(),Tw(2216,` UserResponseEnvelope
                {
                    UserJson = `),zi$1(2217,`span`,46),Tw(2218,`new`),Tl(),Tw(2219,`()
                    {
                        Email = user.Email!,
                        UserName = user.UserName!,
                        Token = token,
                    }
                };
            }
            `),zi$1(2220,`span`,46),Tw(2221,`else`),Tl(),Tw(2222,`
            {
                `),zi$1(2223,`span`,46),Tw(2224,`return`),Tl(),Tw(2225,` Result<UserResponseEnvelope>.Failure(`),zi$1(2226,`span`,46),Tw(2227,`new`),Tl(),Tw(2228,` Dictionary<`),zi$1(2229,`span`,63),Tw(2230,`string`),Tl(),Tw(2231,`, `),zi$1(2232,`span`,63),Tw(2233,`string`),Tl(),Tw(2234,`[]>
            {
                 { `),zi$1(2235,`span`,50),Tw(2236,`"not_implemented_error"`),Tl(),Tw(2237,`, registerNotImplemented }
            });
            }
        }

        `),zi$1(2238,`span`,46),Tw(2239,`public`),Tl(),Tw(2240,` `),zi$1(2241,`span`,46),Tw(2242,`async`),Tl(),Tw(2243,` Task<Result<UserResponseEnvelope>> Login(UserLoginRequestEnvelope userRequest)
        {
            `),zi$1(2244,`span`,46),Tw(2245,`var`),Tl(),Tw(2246,` user = `),zi$1(2247,`span`,46),Tw(2248,`await`),Tl(),Tw(2249,` `),zi$1(2250,`span`,46),Tw(2251,`this`),Tl(),Tw(2252,`.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            `),zi$1(2253,`span`,46),Tw(2254,`if`),Tl(),Tw(2255,` (user == `),zi$1(2256,`span`,64),Tw(2257,`null`),Tl(),Tw(2258,`)
            {
                `),zi$1(2259,`span`,46),Tw(2260,`return`),Tl(),Tw(2261,` Result<UserResponseEnvelope>.Failure(`),zi$1(2262,`span`,46),Tw(2263,`new`),Tl(),Tw(2264,` Dictionary<`),zi$1(2265,`span`,63),Tw(2266,`string`),Tl(),Tw(2267,`, `),zi$1(2268,`span`,63),Tw(2269,`string`),Tl(),Tw(2270,`[]>
            {
                { `),zi$1(2271,`span`,50),Tw(2272,`"invalid_error"`),Tl(),Tw(2273,`, `),zi$1(2274,`span`,46),Tw(2275,`new`),Tl(),Tw(2276,`[] { InvalidErrorMessage } }
            });
            }

            `),zi$1(2277,`span`,46),Tw(2278,`var`),Tl(),Tw(2279,` isLockoutEnabled = `),zi$1(2280,`span`,46),Tw(2281,`await`),Tl(),Tw(2282,` userManager.GetLockoutEnabledAsync(user);

            `),zi$1(2283,`span`,46),Tw(2284,`if`),Tl(),Tw(2285,` (isLockoutEnabled)
            {
                `),zi$1(2286,`span`,46),Tw(2287,`var`),Tl(),Tw(2288,` count = `),zi$1(2289,`span`,46),Tw(2290,`await`),Tl(),Tw(2291,` userManager.GetAccessFailedCountAsync(user);
                `),zi$1(2292,`span`,46),Tw(2293,`if`),Tl(),Tw(2294,` (count == applicationSettings.MaxFailedAccessAttempts - `),zi$1(2295,`span`,65),Tw(2296,`1`),Tl(),Tw(2297,`)
                {
                    `),zi$1(2298,`span`,46),Tw(2299,`var`),Tl(),Tw(2300,` endDate = `),zi$1(2301,`span`,46),Tw(2302,`await`),Tl(),Tw(2303,` userManager.GetLockoutEndDateAsync(user);
                    `),zi$1(2304,`span`,46),Tw(2305,`var`),Tl(),Tw(2306,` currentDate = DateTimeOffset.UtcNow;
                    `),zi$1(2307,`span`,46),Tw(2308,`if`),Tl(),Tw(2309,` (endDate > currentDate)
                    {
                        `),zi$1(2310,`span`,46),Tw(2311,`return`),Tl(),Tw(2312,` Result<UserResponseEnvelope>.Failure(`),zi$1(2313,`span`,46),Tw(2314,`new`),Tl(),Tw(2315,` Dictionary<`),zi$1(2316,`span`,63),Tw(2317,`string`),Tl(),Tw(2318,`, `),zi$1(2319,`span`,63),Tw(2320,`string`),Tl(),Tw(2321,`[]>
                    {
                        { `),zi$1(2322,`span`,50),Tw(2323,`"lockout_error"`),Tl(),Tw(2324,`, `),zi$1(2325,`span`,46),Tw(2326,`new`),Tl(),Tw(2327,`[] {  `),zi$1(2328,`span`,63),Tw(2329,`string`),Tl(),Tw(2330,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,`),zi$1(2331,`span`,50),Tw(2332,`""`),Tl(),Tw(2333,`) } }
                    });
                    }
                }

                `),zi$1(2334,`span`,46),Tw(2335,`var`),Tl(),Tw(2336,` passwordValid = `),zi$1(2337,`span`,46),Tw(2338,`await`),Tl(),Tw(2339,` `),zi$1(2340,`span`,46),Tw(2341,`this`),Tl(),Tw(2342,`.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                `),zi$1(2343,`span`,46),Tw(2344,`if`),Tl(),Tw(2345,` (!passwordValid)
                {
                    `),zi$1(2346,`span`,46),Tw(2347,`var`),Tl(),Tw(2348,` accessFailed = `),zi$1(2349,`span`,46),Tw(2350,`await`),Tl(),Tw(2351,` `),zi$1(2352,`span`,46),Tw(2353,`this`),Tl(),Tw(2354,`.userManager.AccessFailedAsync(user);
                    `),zi$1(2355,`span`,46),Tw(2356,`if`),Tl(),Tw(2357,` (!accessFailed.Succeeded)
                    {
                        `),zi$1(2358,`span`,46),Tw(2359,`var`),Tl(),Tw(2360,` errors = `),zi$1(2361,`span`,46),Tw(2362,`new`),Tl(),Tw(2363,` Dictionary<`),zi$1(2364,`span`,63),Tw(2365,`string`),Tl(),Tw(2366,`, `),zi$1(2367,`span`,63),Tw(2368,`string`),Tl(),Tw(2369,`[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            `),zi$1(2370,`span`,46),Tw(2371,`switch`),Tl(),Tw(2372,` (e.Code)
                            {
                                `),zi$1(2373,`span`,46),Tw(2374,`case`),Tl(),Tw(2375,` `),zi$1(2376,`span`,50),Tw(2377,`"TODO: need to debug e.Code"`),Tl(),Tw(2378,`:
                                    e.Description = `),zi$1(2379,`span`,63),Tw(2380,`string`),Tl(),Tw(2381,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, `),zi$1(2382,`span`,50),Tw(2383,`""`),Tl(),Tw(2384,`);
                                    `),zi$1(2385,`span`,46),Tw(2386,`break`),Tl(),Tw(2387,`;
                            }

                            e.Description = `),zi$1(2388,`span`,63),Tw(2389,`string`),Tl(),Tw(2390,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, [e.Description]);
                        });

                        `),zi$1(2391,`span`,46),Tw(2392,`return`),Tl(),Tw(2393,` Result<UserResponseEnvelope>.Failure(errors);
                    }

                    `),zi$1(2394,`span`,46),Tw(2395,`return`),Tl(),Tw(2396,` Result<UserResponseEnvelope>.Failure(`),zi$1(2397,`span`,46),Tw(2398,`new`),Tl(),Tw(2399,` Dictionary<`),zi$1(2400,`span`,63),Tw(2401,`string`),Tl(),Tw(2402,`, `),zi$1(2403,`span`,63),Tw(2404,`string`),Tl(),Tw(2405,`[]>
                {
                    { `),zi$1(2406,`span`,50),Tw(2407,`"invalid_error"`),Tl(),Tw(2408,`, `),zi$1(2409,`span`,46),Tw(2410,`new`),Tl(),Tw(2411,`[] { InvalidErrorMessage } }
                });
                }
            }
            `),zi$1(2412,`span`,46),Tw(2413,`else`),Tl(),Tw(2414,`
            {
                `),zi$1(2415,`span`,46),Tw(2416,`if`),Tl(),Tw(2417,` (`),zi$1(2418,`span`,46),Tw(2419,`this`),Tl(),Tw(2420,`.env.EnvironmentName == `),zi$1(2421,`span`,50),Tw(2422,`"Test"`),Tl(),Tw(2423,`)
                {
                    `),zi$1(2424,`span`,46),Tw(2425,`var`),Tl(),Tw(2426,` passwordValid = `),zi$1(2427,`span`,46),Tw(2428,`await`),Tl(),Tw(2429,` `),zi$1(2430,`span`,46),Tw(2431,`this`),Tl(),Tw(2432,`.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    `),zi$1(2433,`span`,46),Tw(2434,`if`),Tl(),Tw(2435,` (!passwordValid)
                    {
                        `),zi$1(2436,`span`,46),Tw(2437,`return`),Tl(),Tw(2438,` Result<UserResponseEnvelope>.Failure(`),zi$1(2439,`span`,46),Tw(2440,`new`),Tl(),Tw(2441,` Dictionary<`),zi$1(2442,`span`,63),Tw(2443,`string`),Tl(),Tw(2444,`, `),zi$1(2445,`span`,63),Tw(2446,`string`),Tl(),Tw(2447,`[]>
                    {
                        { `),zi$1(2448,`span`,50),Tw(2449,`"invalid_error"`),Tl(),Tw(2450,`, `),zi$1(2451,`span`,46),Tw(2452,`new`),Tl(),Tw(2453,`[] { InvalidErrorMessage } }
                    });
                    }
                }
                `),zi$1(2454,`span`,46),Tw(2455,`else`),Tl(),Tw(2456,`
                {
                    `),zi$1(2457,`span`,46),Tw(2458,`return`),Tl(),Tw(2459,` Result<UserResponseEnvelope>.Failure(`),zi$1(2460,`span`,46),Tw(2461,`new`),Tl(),Tw(2462,` Dictionary<`),zi$1(2463,`span`,63),Tw(2464,`string`),Tl(),Tw(2465,`, `),zi$1(2466,`span`,63),Tw(2467,`string`),Tl(),Tw(2468,`[]>
                {
                    { `),zi$1(2469,`span`,50),Tw(2470,`"lockout_enabled_error"`),Tl(),Tw(2471,`, `),zi$1(2472,`span`,46),Tw(2473,`new`),Tl(),Tw(2474,`[] { LockoutEnabledErrorMessage } }
                });
                }
            }

            `),zi$1(2475,`span`,63),Tw(2476,`string`),Tl(),Tw(2477,`? token;
            `),zi$1(2478,`span`,46),Tw(2479,`if`),Tl(),Tw(2480,` (`),zi$1(2481,`span`,46),Tw(2482,`this`),Tl(),Tw(2483,`.env.EnvironmentName == `),zi$1(2484,`span`,50),Tw(2485,`"Test"`),Tl(),Tw(2486,`)
            {
                token = `),zi$1(2487,`span`,50),Tw(2488,`$"Token: `),zi$1(2489,`span`,66),Tw(2490,`{user.Email}`),Tl(),Tw(2491,`"`),Tl(),Tw(2492,`;
            }
            `),zi$1(2493,`span`,46),Tw(2494,`else`),Tl(),Tw(2495,`
            {
                token = `),zi$1(2496,`span`,46),Tw(2497,`await`),Tl(),Tw(2498,` `),zi$1(2499,`span`,46),Tw(2500,`this`),Tl(),Tw(2501,`.jwtGenerator.GenerateToken(user);
            }
            `),zi$1(2502,`span`,46),Tw(2503,`return`),Tl(),Tw(2504,` `),zi$1(2505,`span`,46),Tw(2506,`new`),Tl(),Tw(2507,` UserResponseEnvelope
            {
                UserJson = `),zi$1(2508,`span`,46),Tw(2509,`new`),Tl(),Tw(2510,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
    }
}`),Tl()(),zi$1(2511,`p`),Tw(2512,`To really appreciate the beauty of MyTested, It must be compared to `),zi$1(2513,`a`,67),Tw(2514,`an alternative`),Tl(),Tw(2515,` method of testing. With MyTested library, it is very easy to test against endpoint locations, input data in JSON format and output data.
When it comes to JWT authorization, a big amount of testing consists in testing for invalid JWT tokens:`),Tl(),zi$1(2516,`ul`)(2517,`li`)(2518,`code`),Tw(2519,`Update_user_without_authorization_header_should_fail`),Tl(),Tw(2520,`- tests when JWT token is absent`),Tl(),zi$1(2521,`li`)(2522,`code`),Tw(2523,`Update_user_with_altered_authorization_header_should_fail`),Tl(),Tw(2524,`- tests when to a valid JWT token is added one character`),Tl(),zi$1(2525,`li`)(2526,`code`),Tw(2527,`Update_user_with_malformed_authorization_header_should_fail`),Tl(),Tw(2528,`- tests when JWT token has format `),zi$1(2529,`code`),Tw(2530,`a.b`),Tl()(),zi$1(2531,`li`)(2532,`code`),Tw(2533,`Update_user_with_fake_authorization_header_should_fail`),Tl(),Tw(2534,`- tests when JWT token has correct format `),zi$1(2535,`code`),Tw(2536,`a.b.c`),Tl(),Tw(2537,` but random characters`),Tl(),zi$1(2538,`li`)(2539,`code`),Tw(2540,`Update_user_with_incorrect_authorization_header_key_should_fail`),Tl(),Tw(2541,`- tests when JWT token is valid but was encrypted with a different key`),Tl(),zi$1(2542,`li`)(2543,`code`),Tw(2544,`Update_user_with_expired_authorization_header_should_fail`),Tl(),Tw(2545,`- tests when a valid JWT token was expired`),Tl()(),zi$1(2546,`p`),Tw(2547,`These are the most common case scenarios to test against an invalid JWT token and must be done just for one controller!
MyTested cannot catch 401 error code directly. We found a workaround by using `),zi$1(2548,`a`,68),Tw(2549,`HeaderAuthorizationException`),Tl(),Tw(2550,`
In real life, .NET Core 10 will return a 401-error code. We created a series of tests for testing invalid JWT tokens such as:`),Tl(),zi$1(2551,`pre`,45)(2552,`code`),Tw(2553,`        [`),zi$1(2554,`span`,48),Tw(2555,`Theory`),Tl(),Tw(2556,`]
        [`),zi$1(2557,`span`,48),Tw(2558,`MemberData(nameof(RegisterValidData))`),Tl(),Tw(2559,`]
        `),zi$1(2560,`span`,49)(2561,`span`,46),Tw(2562,`public`),Tl(),Tw(2563,` `),zi$1(2564,`span`,46),Tw(2565,`void`),Tl(),Tw(2566,` `),zi$1(2567,`span`,47),Tw(2568,`Update_user_without_authorization_header_should_fail`),Tl(),Tw(2569,`(`),zi$1(2570,`span`,62),Tw(2571,`
         `),zi$1(2572,`span`,63),Tw(2573,`string`),Tl(),Tw(2574,` fullName,
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
         `),zi$1(2575,`span`,63),Tw(2576,`string`),Tl(),Tw(2577,` email,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
         `),zi$1(2578,`span`,63),Tw(2579,`string`),Tl(),Tw(2580,` password`),Tl(),Tw(2581,`)`),Tl(),Tw(2582,`
        => AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
        () =>
        {
            MyMvc
             .Pipeline()
             .ShouldMap(request => request
                 .WithMethod(HttpMethod.Put)
                 `),zi$1(2583,`span`,69),Tw(2584,`// without WithHeaderAuthorization`),Tl(),Tw(2585,`
                 .WithLocation(`),zi$1(2586,`span`,50),Tw(2587,`"api/v1.0/identity/update"`),Tl(),Tw(2588,`)
                 .WithJsonBody(
                      `),zi$1(2589,`span`,63),Tw(2590,`string`),Tl(),Tw(2591,`.Format(`),zi$1(2592,`span`,50),Tw(2593,`"{{"`),Tl(),zi$1(2594,`span`,50),Tw(2595,`"user"`),Tl(),zi$1(2596,`span`,50),Tw(2597,`":{{"`),Tl(),zi$1(2598,`span`,50),Tw(2599,`"password"`),Tl(),zi$1(2600,`span`,50),Tw(2601,`":"`),Tl(),zi$1(2602,`span`,50),Tw(2603,`"{0}"`),Tl(),zi$1(2604,`span`,50),Tw(2605,`","`),Tl(),zi$1(2606,`span`,50),Tw(2607,`"username"`),Tl(),zi$1(2608,`span`,50),Tw(2609,`":"`),Tl(),zi$1(2610,`span`,50),Tw(2611,`"{1}"`),Tl(),zi$1(2612,`span`,50),Tw(2613,`"}}}}"`),Tl(),Tw(2614,`,
                          `),zi$1(2615,`span`,50),Tw(2616,`$"`),zi$1(2617,`span`,66),Tw(2618,`{password}`),Tl(),Tw(2619,`1"`),Tl(),Tw(2620,`,
                          `),zi$1(2621,`span`,50),Tw(2622,`$"`),zi$1(2623,`span`,66),Tw(2624,`{fullName}`),Tl(),Tw(2625,`1"`),Tl(),Tw(2626,`
                      )
                 )
             )
             .To<IdentityController>(c => c.Update(`),zi$1(2627,`span`,46),Tw(2628,`new`),Tl(),Tw(2629,` UserUpdateCommand
             {
                 UserJson = `),zi$1(2630,`span`,46),Tw(2631,`new`),Tl(),Tw(2632,`()
                 {
                     FullName = `),zi$1(2633,`span`,50),Tw(2634,`$"`),zi$1(2635,`span`,66),Tw(2636,`{fullName}`),Tl(),Tw(2637,`1"`),Tl(),Tw(2638,`,
                     Password = `),zi$1(2639,`span`,50),Tw(2640,`$"`),zi$1(2641,`span`,66),Tw(2642,`{password}`),Tl(),Tw(2643,`1"`),Tl(),Tw(2644,`
                 }
             }));
        }, `),zi$1(2645,`span`,63),Tw(2646,`string`),Tl(),Tw(2647,`.Format(HeaderAuthorizationException.Replace(Environment.NewLine, `),zi$1(2648,`span`,50),Tw(2649,`""`),Tl(),Tw(2650,`), `),zi$1(2651,`span`,50),Tw(2652,`"/api/v1.0/identity/update"`),Tl(),Tw(2653,`, `),zi$1(2654,`span`,50),Tw(2655,`"Update"`),Tl(),Tw(2656,`, `),zi$1(2657,`span`,50),Tw(2658,`"IdentityController"`),Tl(),Tw(2659,`));`),Tl()(),zi$1(2660,`p`),Tw(2661,`The full set of tests of `),zi$1(2662,`code`),Tw(2663,`IdentityController`),Tl(),Tw(2664,` is on `),zi$1(2665,`a`,68),Tw(2666,`our GitHub repository`),Tl(),Tw(2667,`.`),Tl(),zi$1(2668,`h2`,70)(2669,`span`),Tw(2670,`Data Validation with FluentValidation Library`),Tl(),zi$1(2671,`a`,71),Tw(2672,`#`),Tl()(),zi$1(2673,`p`),Tw(2674,`Another change we made to MyTested is adding the possibility of testing data validation. For now, we will give an example of testing using `),zi$1(2675,`a`,72),Tw(2676,`FluentValidation`),Tl(),Tw(2677,`. Following is an example of testing data validation using modified version of MyTested library:`),Tl(),zi$1(2678,`pre`,45)(2679,`code`),Tw(2680,`[`),zi$1(2681,`span`,48),Tw(2682,`Theory`),Tl(),Tw(2683,`]
[`),zi$1(2684,`span`,48),Tw(2685,`InlineData(`),zi$1(2686,`span`,50),Tw(2687,`"n"`),Tl(),Tw(2688,`, `),zi$1(2689,`span`,50),Tw(2690,`"ValidEmail@a.bcde"`),Tl(),Tw(2691,`, `),zi$1(2692,`span`,50),Tw(2693,`"p"`),Tl(),Tw(2694,`)`),Tl(),Tw(2695,`]
`),zi$1(2696,`span`,49)(2697,`span`,46),Tw(2698,`public`),Tl(),Tw(2699,` `),zi$1(2700,`span`,46),Tw(2701,`void`),Tl(),Tw(2702,` `),zi$1(2703,`span`,47),Tw(2704,`Update_user_with_bad_input_should_return_validation_errors`),Tl(),Tw(2705,`(`),zi$1(2706,`span`,62),Tw(2707,`
 `),zi$1(2708,`span`,63),Tw(2709,`string`),Tl(),Tw(2710,` fullName,
 `),zi$1(2711,`span`,63),Tw(2712,`string`),Tl(),Tw(2713,` email,
 `),zi$1(2714,`span`,63),Tw(2715,`string`),Tl(),Tw(2716,` password`),Tl(),Tw(2717,`)`),Tl(),Tw(2718,`
=> AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
() =>
{
    MyMvc
     .Pipeline()
     .ShouldMap(request => request
        .WithMethod(HttpMethod.Put)
        .WithHeaderAuthorization(StaticTestData.GetJwtBearerAdministratorRole(email, `),zi$1(2719,`span`,65),Tw(2720,`1`),Tl(),Tw(2721,`))
        .WithLocation(`),zi$1(2722,`span`,50),Tw(2723,`"api/v1.0/identity/update"`),Tl(),Tw(2724,`)
        .WithJsonBody(
             `),zi$1(2725,`span`,63),Tw(2726,`string`),Tl(),Tw(2727,`.Format(`),zi$1(2728,`span`,50),Tw(2729,`"{{"`),Tl(),zi$1(2730,`span`,50),Tw(2731,`"user"`),Tl(),zi$1(2732,`span`,50),Tw(2733,`":{{"`),Tl(),zi$1(2734,`span`,50),Tw(2735,`"password"`),Tl(),zi$1(2736,`span`,50),Tw(2737,`":"`),Tl(),zi$1(2738,`span`,50),Tw(2739,`"{0}"`),Tl(),zi$1(2740,`span`,50),Tw(2741,`","`),Tl(),zi$1(2742,`span`,50),Tw(2743,`"username"`),Tl(),zi$1(2744,`span`,50),Tw(2745,`":"`),Tl(),zi$1(2746,`span`,50),Tw(2747,`"{1}"`),Tl(),zi$1(2748,`span`,50),Tw(2749,`"}}}}"`),Tl(),Tw(2750,`,
                 `),zi$1(2751,`span`,50),Tw(2752,`$"`),zi$1(2753,`span`,66),Tw(2754,`{password}`),Tl(),Tw(2755,`"`),Tl(),Tw(2756,`,
                 `),zi$1(2757,`span`,50),Tw(2758,`$"`),zi$1(2759,`span`,66),Tw(2760,`{fullName}`),Tl(),Tw(2761,`"`),Tl(),Tw(2762,`
             )
        )
     )
     .To<IdentityController>(c => c.Update(`),zi$1(2763,`span`,46),Tw(2764,`new`),Tl(),Tw(2765,` UserUpdateCommand
     {
         UserJson = `),zi$1(2766,`span`,46),Tw(2767,`new`),Tl(),Tw(2768,`()
         {
             FullName = fullName,
             Password = password,
         }
     }))
     .Which(controller => controller
        .WithData(StaticTestData.GetUsers(`),zi$1(2769,`span`,65),Tw(2770,`3`),Tl(),Tw(2771,`, email, fullName, password)))
     .ShouldReturn();
}, `),zi$1(2772,`span`,46),Tw(2773,`new`),Tl(),Tw(2774,` Dictionary<`),zi$1(2775,`span`,63),Tw(2776,`string`),Tl(),Tw(2777,`, `),zi$1(2778,`span`,63),Tw(2779,`string`),Tl(),Tw(2780,`[]>
{
   { `),zi$1(2781,`span`,50),Tw(2782,`"UserJson.Password"`),Tl(),Tw(2783,`, [`),zi$1(2784,`span`,50),Tw(2785,`"The length of 'User Json Password' must be at least 16 characters. You entered 1 characters."`),Tl(),Tw(2786,`] },
   { `),zi$1(2787,`span`,50),Tw(2788,`"UserJson.FullName"`),Tl(),Tw(2789,`, [`),zi$1(2790,`span`,50),Tw(2791,`"The length of 'User Json Full Name' must be at least 2 characters. You entered 1 characters."`),Tl(),Tw(2792,`] },
});`),Tl()(),zi$1(2793,`p`),Tw(2794,`As you can see, now we can test data validation against the validation errors coming from FluentValidation library. Following are `),zi$1(2795,`a`,73),Tw(2796,`three tests`),Tl(),Tw(2797,` witch test against the constraint that the tag name is unique:`),Tl(),zi$1(2798,`ul`)(2799,`li`)(2800,`code`),Tw(2801,`Create_tag_with_same_name_should_fail_with_validation_error`),Tl(),Tw(2802,`- Creates tag with name when the name has already taken.`),Tl(),zi$1(2803,`li`)(2804,`code`),Tw(2805,`Edit_tag_with_same_name_should_fail_with_validation_error`),Tl(),Tw(2806,`- Updates tag name when the name has already taken.`),Tl(),zi$1(2807,`li`)(2808,`code`),Tw(2809,`Edit_same_tag_with_same_name_should_return_success_with_data`),Tl(),Tw(2810,`- Updates tag name when the name did not change.`),Tl()(),zi$1(2811,`p`),Tw(2812,`Sometimes, we need to validate against standard .Net services. For example, in the `),zi$1(2813,`code`),Tw(2814,`IdentityService`),Tl(),Tw(2815,` from above we have:`),Tl(),zi$1(2816,`pre`,45)(2817,`code`),Tw(2818,`\u2026
`),zi$1(2819,`span`,46),Tw(2820,`if`),Tl(),Tw(2821,` (userRequest.UserJson.FullName != `),zi$1(2822,`span`,64),Tw(2823,`null`),Tl(),Tw(2824,`)
{
    `),zi$1(2825,`span`,46),Tw(2826,`var`),Tl(),Tw(2827,` identityResult1 = `),zi$1(2828,`span`,46),Tw(2829,`await`),Tl(),Tw(2830,` `),zi$1(2831,`span`,46),Tw(2832,`this`),Tl(),Tw(2833,`.userManager.SetUserNameAsync(
         user,
         userRequest.UserJson.FullName);

    `),zi$1(2834,`span`,46),Tw(2835,`if`),Tl(),Tw(2836,` (!identityResult1.Succeeded)
    {
        `),zi$1(2837,`span`,46),Tw(2838,`var`),Tl(),Tw(2839,` errors = `),zi$1(2840,`span`,46),Tw(2841,`new`),Tl(),Tw(2842,` Dictionary<`),zi$1(2843,`span`,63),Tw(2844,`string`),Tl(),Tw(2845,`, `),zi$1(2846,`span`,63),Tw(2847,`string`),Tl(),Tw(2848,`[]>();
        identityResult1.Errors.ForEach(e =>
        {
            `),zi$1(2849,`span`,46),Tw(2850,`switch`),Tl(),Tw(2851,` (e.Code)
            {
                `),zi$1(2852,`span`,46),Tw(2853,`case`),Tl(),Tw(2854,` `),zi$1(2855,`span`,50),Tw(2856,`"InvalidUserName"`),Tl(),Tw(2857,`:
                    e.Description = UsernameFormatErrorMessage;
                    `),zi$1(2858,`span`,46),Tw(2859,`break`),Tl(),Tw(2860,`;
            }
            errors.Add(e.Code, `),zi$1(2861,`span`,46),Tw(2862,`new`),Tl(),Tw(2863,`[] { e.Description });
        });

        `),zi$1(2864,`span`,46),Tw(2865,`return`),Tl(),Tw(2866,` Result<UserResponseEnvelope>.Failure(errors);
    }
}
\u2026`),Tl()(),zi$1(2867,`p`)(2868,`a`,74),Tw(2869,`Here`),Tl(),Tw(2870,` is the test:`),Tl(),zi$1(2871,`ul`)(2872,`li`)(2873,`code`),Tw(2874,`Update_user_with_incorrect_user_name_should_fail`),Tl(),Tw(2875,`- Tests against the username implemented in `),zi$1(2876,`code`),Tw(2877,`UserManager<User>`),Tl(),Tw(2878,`.`),Tl()(),zi$1(2879,`h2`,75)(2880,`span`),Tw(2881,`Conclusion`),Tl(),zi$1(2882,`a`,76),Tw(2883,`#`),Tl()(),zi$1(2884,`p`),Tw(2885,`In this article, we gave a common example of a .NET Core `),zi$1(2886,`code`),Tw(2887,`Identity`),Tl(),Tw(2888,` controller, implemented a common `),zi$1(2889,`code`),Tw(2890,`User Identity`),Tl(),Tw(2891,` service based on `),zi$1(2892,`code`),Tw(2893,`UserManager<User>`),Tl(),Tw(2894,`, and showed a comprehensive `),zi$1(2895,`code`),Tw(2896,`Identity`),Tl(),Tw(2897,` controller testing using MyTested library. From multiple examples, we can see how easy is to test against endpoint locations, input data as JSON strings, and output data. In addition, we showed a lot of examples for data validation against the validation errors coming from `),zi$1(2898,`code`),Tw(2899,`FluentValidation`),Tl(),Tw(2900,` library.
It is important to note, that having a detailed testing of API controllers based on MyTested library, gives us the possibility to debug .NET Core applications in Visual Studio 2022. For example, we can set a breakpoint in our application, go to test panel, find a MyTested test, and click Debug instead on Run.
The Markdown version of this article and the compiled code of our .NET Core 10 application can be found on `),zi$1(2901,`a`,37),Tw(2902,`our GitHub repository`),Tl(),Tw(2903,`.`),Tl(),zi$1(2904,`h2`,77)(2905,`span`),Tw(2906,`Credits`),Tl(),zi$1(2907,`a`,78),Tw(2908,`#`),Tl()(),zi$1(2909,`ul`)(2910,`li`)(2911,`a`,79),Tw(2912,`Ivaylo Kenov`),Tl()(),zi$1(2913,`li`)(2914,`a`,80),Tw(2915,`Kalin Tsenkov`),Tl()(),zi$1(2916,`li`)(2917,`a`,81),Tw(2918,`Steve Smith`),Tl()(),zi$1(2919,`li`)(2920,`a`,82),Tw(2921,`Jason Taylor`),Tl()(),zi$1(2922,`li`)(2923,`a`,83),Tw(2924,`Stefan Prodan`),Tl()(),zi$1(2925,`li`)(2926,`a`,84),Tw(2927,`Mark Cilia Vincenti`),Tl()(),zi$1(2928,`li`)(2929,`a`,85),Tw(2930,`Jimmy Bogard`),Tl()(),zi$1(2931,`li`)(2932,`a`,86),Tw(2933,`Ben Morris`),Tl()()()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,jw(11,gi)),aD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()),vE(41),eg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,Cg,rd,cr,ir,Fa,u9,p9,Un$2,Vn,qi$1,_n,ji$1,Jo,Za,Al,ga$1,ma$1,So,Ve,pe$1,yu],encapsulation:2})}return a})();var Ai=()=>({standalone:!0});function fi(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,67),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,68),tg(3,`nz-icon`,69),Tl()(),Sl()}}function wi(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,67),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,68),Tw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var ot=110;var Jn=(()=>{class a{destroyRef=_(ce);router=_(Te$1);#e=_(Z0);injector=_(ae);viewPort=_(p7);zone=_(fe);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=zt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){rV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-ot>640?this.width.set(640):this.width.set(this.windowWidth()-ot-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-ot>640?this.width.set(640):this.width.set(i-ot-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Oe(i).pipe(nV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`nz-blog-about-this-blog`]],features:[Fw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:480,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-375bae56`,`nzTitle`,`Generate Posts from Markdown Files`],[`nzHref`,`#h-9ee0998d`,`nzTitle`,`Generate Static Syntax Highlighting`],[`nzHref`,`#h-ae84e8a9`,`nzTitle`,`Deploy to a Cloud Platform`],[`nzHref`,`#h-0ac07f26`,`nzTitle`,`Simulate Static Content`],[`nzHref`,`#h-3d814a59`,`nzTitle`,`Markdown Extension`],[`nzHref`,`#h-d748b3e2`,`nzTitle`,`Blog Listing`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241008-about-this-blog.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[1,`pic-plus`],[`nz-icon`,``,`nzType`,`custom:zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-icon`,``,`nzType`,`custom:angular`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-icon`,``,`nzType`,`custom:ng-zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`id`,`h-375bae56`],[`onclick`,`window.location.hash = 'h-375bae56'`,1,`anchor`],[`href`,`https://github.com/cioina/alexei-cioina.b9ad.pro-us-east-1.openshiftapps.com/tree/main/posts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-9ee0998d`],[`onclick`,`window.location.hash = 'h-9ee0998d'`,1,`anchor`],[1,`language-javascript`],[1,`hljs-keyword`],[1,`hljs-built_in`],[1,`hljs-string`],[1,`hljs-title`,`function_`],[1,`hljs-params`],[1,`hljs-function`],[1,`hljs-literal`],[1,`hljs-title`,`class_`],[1,`hljs-regexp`],[1,`hljs-variable`,`language_`],[1,`hljs-property`],[`id`,`h-ae84e8a9`],[`onclick`,`window.location.hash = 'h-ae84e8a9'`,1,`anchor`],[`href`,`https://www.openshift.com/products/online/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://docs.openshift.com/container-platform/3.11/architecture/core_concepts/builds_and_image_streams.html#source-build`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://docs.openshift.com/container-platform/3.11/dev_guide/deployments/deployment_strategies.html#recreate-strategy`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-0ac07f26`],[`onclick`,`window.location.hash = 'h-0ac07f26'`,1,`anchor`],[`href`,`https://github.com/dwightwatson/dwightwatson.com`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/dwightwatson/neontsunami-laravel`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/dwightwatson/neontsunami-laravel/blob/master/resources/views/posts/show.blade.php`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/neontsunami`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://laravel.com/docs/8.x/octane`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-3d814a59`],[`onclick`,`window.location.hash = 'h-3d814a59'`,1,`anchor`],[1,`language-html`],[1,`hljs-tag`],[1,`hljs-name`],[1,`hljs-attr`],[`href`,`https://mdxjs.com/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-d748b3e2`],[`onclick`,`window.location.hash = 'h-d748b3e2'`,1,`anchor`],[`href`,`https://github.com/AndyT2503/angular-conduit-signals`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/alexeymezenin/laravel-realworld-example-app`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(zi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,fi,4,0,`ng-container`,5)(6,wi,4,0,`ng-container`,5),Tl()()(),zi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),Tw(11,`Jump to top`),Tl()(),zi$1(12,`div`,3)(13,`nz-switch`,9),iD(),Ag(`ngModelChange`,function(g){return Sw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),zi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16),Tl()(),zi$1(21,`span`,17),Tw(22,` About This Blog`),tg(23,`span`,18)(24,`span`,19),zi$1(25,`a`,20),tg(26,`nz-icon`,21),Tl()(),zi$1(27,`article`,22)(28,`div`,23),tg(29,`span`,24),zi$1(30,`span`),Tw(31,`+`),Tl(),tg(32,`span`,25),zi$1(33,`span`),Tw(34,`=`),Tl(),tg(35,`span`,26),Tl(),zi$1(36,`p`),Tw(37,`Here we've built a blog that is able to:`),Tl(),zi$1(38,`ul`)(39,`li`),Tw(40,`Generate posts from markdown files`),Tl(),zi$1(41,`li`),Tw(42,`Generate static syntax highlighting`),Tl(),zi$1(43,`li`),Tw(44,`Deploy to a cloud platform`),Tl(),zi$1(45,`li`),Tw(46,`Simulate static content`),Tl()(),zi$1(47,`h2`,27)(48,`span`),Tw(49,`Generate Posts from Markdown Files`),Tl(),zi$1(50,`a`,28),Tw(51,`#`),Tl()(),zi$1(52,`p`),Tw(53,`We use a `),zi$1(54,`code`),Tw(55,`ng-zorro-antd`),Tl(),Tw(56,` Node.js script to generate compiled Angular modules from `),zi$1(57,`a`,29),Tw(58,`a set of markdown files`),Tl(),Tw(59,`.
Each post represents a compiled JavaScrip file that loads via lazy-loading. The content of a markdown file is included into compiled Angular module witch is smaller than a generated static HTML.`),Tl(),zi$1(60,`h2`,30)(61,`span`),Tw(62,`Generate Static Syntax Highlighting`),Tl(),zi$1(63,`a`,31),Tw(64,`#`),Tl()(),zi$1(65,`p`),Tw(66,`To generate static syntax highlighting (which is static HTML,) we use `),zi$1(67,`code`),Tw(68,`prismjs`),Tl(),Tw(69,` on Node.js. This way, we do not need to include `),zi$1(70,`code`),Tw(71,`prismjs`),Tl(),Tw(72,` JavaScript in our web application.`),Tl(),zi$1(73,`pre`,32)(74,`code`)(75,`span`,33),Tw(76,`const`),Tl(),Tw(77,` fs = `),zi$1(78,`span`,34),Tw(79,`require`),Tl(),Tw(80,`(`),zi$1(81,`span`,35),Tw(82,`'fs'`),Tl(),Tw(83,`);
`),zi$1(84,`span`,33),Tw(85,`const`),Tl(),Tw(86,` path = `),zi$1(87,`span`,34),Tw(88,`require`),Tl(),Tw(89,`(`),zi$1(90,`span`,35),Tw(91,`'path'`),Tl(),Tw(92,`);

`),zi$1(93,`span`,33),Tw(94,`function`),Tl(),Tw(95,` `),zi$1(96,`span`,36),Tw(97,`uniq`),Tl(),Tw(98,`(`),zi$1(99,`span`,37),Tw(100,`arr`),Tl(),Tw(101,`) {
  `),zi$1(102,`span`,33),Tw(103,`const`),Tl(),Tw(104,` set = arr.`),zi$1(105,`span`,36),Tw(106,`reduce`),Tl(),Tw(107,`(`),zi$1(108,`span`,38),Tw(109,`(`),zi$1(110,`span`,37),Tw(111,`set, item`),Tl(),Tw(112,`) =>`),Tl(),Tw(113,` {
    set[item] = `),zi$1(114,`span`,39),Tw(115,`true`),Tl(),Tw(116,`;
    `),zi$1(117,`span`,33),Tw(118,`return`),Tl(),Tw(119,` set;
  }, {});
  `),zi$1(120,`span`,33),Tw(121,`return`),Tl(),Tw(122,` `),zi$1(123,`span`,40),Tw(124,`Object`),Tl(),Tw(125,`.`),zi$1(126,`span`,36),Tw(127,`keys`),Tl(),Tw(128,`(set);
}

`),zi$1(129,`span`,33),Tw(130,`const`),Tl(),Tw(131,` prismCore = `),zi$1(132,`span`,35),Tw(133,`'../../node-prismjs/components/prism-core.js'`),Tl(),Tw(134,`;
`),zi$1(135,`span`,33),Tw(136,`const`),Tl(),Tw(137,` `),zi$1(138,`span`,40),Tw(139,`Prism`),Tl(),Tw(140,` = `),zi$1(141,`span`,34),Tw(142,`require`),Tl(),Tw(143,`(prismCore);

`),zi$1(144,`span`,33),Tw(145,`const`),Tl(),Tw(146,` prelude = [
  `),zi$1(147,`span`,35),Tw(148,`'prism-markup'`),Tl(),Tw(149,`,
  `),zi$1(150,`span`,35),Tw(151,`'prism-css'`),Tl(),Tw(152,`,
  `),zi$1(153,`span`,35),Tw(154,`'prism-clike'`),Tl(),Tw(155,`,
  `),zi$1(156,`span`,35),Tw(157,`'prism-javascript'`),Tl(),Tw(158,`,
  `),zi$1(159,`span`,35),Tw(160,`'prism-css-extras'`),Tl(),Tw(161,`,
  `),zi$1(162,`span`,35),Tw(163,`'prism-json'`),Tl(),Tw(164,`,
  `),zi$1(165,`span`,35),Tw(166,`'prism-markup-templating'`),Tl(),Tw(167,`,
  `),zi$1(168,`span`,35),Tw(169,`'prism-php'`),Tl(),Tw(170,`,
  `),zi$1(171,`span`,35),Tw(172,`'prism-php-extras'`),Tl(),Tw(173,`,
  `),zi$1(174,`span`,35),Tw(175,`'prism-typescript'`),Tl(),Tw(176,`,
];

`),zi$1(177,`span`,33),Tw(178,`const`),Tl(),Tw(179,` prismComponents = path.`),zi$1(180,`span`,36),Tw(181,`dirname`),Tl(),Tw(182,`(`),zi$1(183,`span`,34),Tw(184,`require`),Tl(),Tw(185,`.`),zi$1(186,`span`,36),Tw(187,`resolve`),Tl(),Tw(188,`(prismCore));
`),zi$1(189,`span`,33),Tw(190,`const`),Tl(),Tw(191,` components = prelude
  .`),zi$1(192,`span`,36),Tw(193,`concat`),Tl(),Tw(194,`(fs.`),zi$1(195,`span`,36),Tw(196,`readdirSync`),Tl(),Tw(197,`(prismComponents))
  .`),zi$1(198,`span`,36),Tw(199,`map`),Tl(),Tw(200,`(`),zi$1(201,`span`,38)(202,`span`,37),Tw(203,`component`),Tl(),Tw(204,` =>`),Tl(),Tw(205,` component.`),zi$1(206,`span`,36),Tw(207,`replace`),Tl(),Tw(208,`(`),zi$1(209,`span`,41),Tw(210,`/(\\.min)?\\.js$/`),Tl(),Tw(211,`, `),zi$1(212,`span`,35),Tw(213,`''`),Tl(),Tw(214,`));

`),zi$1(215,`span`,33),Tw(216,`const`),Tl(),Tw(217,` componentsSet = `),zi$1(218,`span`,36),Tw(219,`uniq`),Tl(),Tw(220,`(components);
componentsSet.`),zi$1(221,`span`,36),Tw(222,`forEach`),Tl(),Tw(223,`(`),zi$1(224,`span`,38)(225,`span`,37),Tw(226,`component`),Tl(),Tw(227,` =>`),Tl(),Tw(228,` {
  `),zi$1(229,`span`,34),Tw(230,`require`),Tl(),Tw(231,`(path.`),zi$1(232,`span`,36),Tw(233,`join`),Tl(),Tw(234,`(prismComponents, component));
});

`),zi$1(235,`span`,42),Tw(236,`module`),Tl(),Tw(237,`.`),zi$1(238,`span`,43),Tw(239,`exports`),Tl(),Tw(240,` = `),zi$1(241,`span`,40),Tw(242,`Prism`),Tl(),Tw(243,`;`),Tl()(),zi$1(244,`h2`,44)(245,`span`),Tw(246,`Deploy to a Cloud Platform`),Tl(),zi$1(247,`a`,45),Tw(248,`#`),Tl()(),zi$1(249,`p`),Tw(250,`We use Red Hat `),zi$1(251,`a`,46),Tw(252,`OpenShift Online`),Tl(),Tw(253,` public cloud
with `),zi$1(254,`a`,47),Tw(255,`Source-to-Image`),Tl(),Tw(256,` (S2I) build
and `),zi$1(257,`a`,48),Tw(258,`Recreate Strategy`),Tl(),Tw(259,` with less than 60 seconds downtime.`),Tl(),zi$1(260,`h2`,49)(261,`span`),Tw(262,`Simulate Static Content`),Tl(),zi$1(263,`a`,50),Tw(264,`#`),Tl()(),zi$1(265,`p`),Tw(266,`We've found `),zi$1(267,`a`,51),Tw(268,`a GitHub repository`),Tl(),Tw(269,` that satisfies all 4 conditions. Well, in fact, it generates a static website, so condition 4 is not
just simulated. In contrast, `),zi$1(270,`a`,52),Tw(271,`this GitHub repository`),Tl(),Tw(272,` uses Laravel's Blade template and a MySQL database to
`),zi$1(273,`a`,53),Tw(274,`generate posts`),Tl(),Tw(275,` on the server-side. It means that every time you access a post,
your web browser makes a request to the server and the server will get the content from the database and render HTML (BTW, `),zi$1(276,`a`,54),Tw(277,`here`),Tl(),Tw(278,` is a version adapted for OpenShift.) Even if Blade caches the result, every request creates a connection to the database (We do not consider `),zi$1(279,`a`,55),Tw(280,`Laravel Octane`),Tl(),Tw(281,` here.) Static websites do not need a database and the content is cached on the user's side. So, the user makes less requests to the server.`),Tl(),zi$1(282,`p`),Tw(283,`How do we simulate static content? All posts from this blog are Angular compiled JavaScript files that are cached on the user's side.`),Tl(),zi$1(284,`h2`,56)(285,`span`),Tw(286,`Markdown Extension`),Tl(),zi$1(287,`a`,57),Tw(288,`#`),Tl()(),zi$1(289,`p`),Tw(290,`While transforming a markdown file into an Angular component and module, we implemented a markdown extension that will create a navigation menue from all heading lines of a markdown file. In addition, we implemented the posibility to include a code block with a special name `),zi$1(291,`code`),Tw(292,`angular-template-block`),Tl(),Tw(293,` to be iterpreded as a part of the Angular template. The code block below, will be included in the generated Angular component as a parth of the template.`),Tl(),zi$1(294,`pre`,58)(295,`code`)(296,`span`,59),Tw(297,`<`),zi$1(298,`span`,60),Tw(299,`div`),Tl(),Tw(300,` `),zi$1(301,`span`,61),Tw(302,`class`),Tl(),Tw(303,`=`),zi$1(304,`span`,35),Tw(305,`"pic-plus"`),Tl(),Tw(306,`>`),Tl(),Tw(307,`
  `),zi$1(308,`span`,59),Tw(309,`<`),zi$1(310,`span`,60),Tw(311,`span`),Tl(),Tw(312,` `),zi$1(313,`span`,61),Tw(314,`nz-icon`),Tl(),Tw(315,` `),zi$1(316,`span`,61),Tw(317,`nzType`),Tl(),Tw(318,`=`),zi$1(319,`span`,35),Tw(320,`"custom:zorro"`),Tl(),Tw(321,` `),zi$1(322,`span`,61),Tw(323,`nzWidth`),Tl(),Tw(324,`=`),zi$1(325,`span`,35),Tw(326,`"180px"`),Tl(),Tw(327,` `),zi$1(328,`span`,61),Tw(329,`nzHeight`),Tl(),Tw(330,`=`),zi$1(331,`span`,35),Tw(332,`"180px"`),Tl(),Tw(333,`>`),Tl(),zi$1(334,`span`,59),Tw(335,`</`),zi$1(336,`span`,60),Tw(337,`span`),Tl(),Tw(338,`>`),Tl(),Tw(339,`
  `),zi$1(340,`span`,59),Tw(341,`<`),zi$1(342,`span`,60),Tw(343,`span`),Tl(),Tw(344,`>`),Tl(),Tw(345,`+`),zi$1(346,`span`,59),Tw(347,`</`),zi$1(348,`span`,60),Tw(349,`span`),Tl(),Tw(350,`>`),Tl(),Tw(351,`
  `),zi$1(352,`span`,59),Tw(353,`<`),zi$1(354,`span`,60),Tw(355,`span`),Tl(),Tw(356,` `),zi$1(357,`span`,61),Tw(358,`nz-icon`),Tl(),Tw(359,` `),zi$1(360,`span`,61),Tw(361,`nzType`),Tl(),Tw(362,`=`),zi$1(363,`span`,35),Tw(364,`"custom:angular"`),Tl(),Tw(365,` `),zi$1(366,`span`,61),Tw(367,`nzWidth`),Tl(),Tw(368,`=`),zi$1(369,`span`,35),Tw(370,`"180px"`),Tl(),Tw(371,` `),zi$1(372,`span`,61),Tw(373,`nzHeight`),Tl(),Tw(374,`=`),zi$1(375,`span`,35),Tw(376,`"180px"`),Tl(),Tw(377,`>`),Tl(),zi$1(378,`span`,59),Tw(379,`</`),zi$1(380,`span`,60),Tw(381,`span`),Tl(),Tw(382,`>`),Tl(),Tw(383,`
  `),zi$1(384,`span`,59),Tw(385,`<`),zi$1(386,`span`,60),Tw(387,`span`),Tl(),Tw(388,`>`),Tl(),Tw(389,`=`),zi$1(390,`span`,59),Tw(391,`</`),zi$1(392,`span`,60),Tw(393,`span`),Tl(),Tw(394,`>`),Tl(),Tw(395,`
  `),zi$1(396,`span`,59),Tw(397,`<`),zi$1(398,`span`,60),Tw(399,`span`),Tl(),Tw(400,`
    `),zi$1(401,`span`,61),Tw(402,`nz-icon`),Tl(),Tw(403,`
    `),zi$1(404,`span`,61),Tw(405,`nzType`),Tl(),Tw(406,`=`),zi$1(407,`span`,35),Tw(408,`"custom:ng-zorro"`),Tl(),Tw(409,`
    `),zi$1(410,`span`,61),Tw(411,`nzWidth`),Tl(),Tw(412,`=`),zi$1(413,`span`,35),Tw(414,`"180px"`),Tl(),Tw(415,`
    `),zi$1(416,`span`,61),Tw(417,`nzHeight`),Tl(),Tw(418,`=`),zi$1(419,`span`,35),Tw(420,`"180px"`),Tl(),Tw(421,`
  >`),Tl(),zi$1(422,`span`,59),Tw(423,`</`),zi$1(424,`span`,60),Tw(425,`span`),Tl(),Tw(426,`>`),Tl(),Tw(427,`
`),zi$1(428,`span`,59),Tw(429,`</`),zi$1(430,`span`,60),Tw(431,`div`),Tl(),Tw(432,`>`),Tl()()(),zi$1(433,`p`),Tw(434,`For more complex markdown format extensions, please visit `),zi$1(435,`a`,62),Tw(436,`MDX 2!`),Tl()(),zi$1(437,`h2`,63)(438,`span`),Tw(439,`Blog Listing`),Tl(),zi$1(440,`a`,64),Tw(441,`#`),Tl()(),zi$1(442,`p`),Tw(443,`Client-side listing api is based on `),zi$1(444,`a`,65),Tw(445,`this GitHub repository`),Tl(),Tw(446,` and server-side is similar to `),zi$1(447,`a`,66),Tw(448,`this GitHub repository`),Tl()(),zi$1(449,`p`),Tw(450,`As you can see, we use a lot of `),zi$1(451,`code`),Tw(452,`ng-zorro-antd`),Tl(),Tw(453,` Angular components:`),Tl(),zi$1(454,`ul`)(455,`li`)(456,`code`),Tw(457,`nz-list`),Tl(),Tw(458,`, `),zi$1(459,`code`),Tw(460,`nz-pagination`),Tl(),Tw(461,`, `),zi$1(462,`code`),Tw(463,`nz-image`),Tl(),Tw(464,`, `),zi$1(465,`code`),Tw(466,`nz-transfer`),Tl(),Tw(467,`, `),zi$1(468,`code`),Tw(469,`nz-select`),Tl(),Tw(470,`, `),zi$1(471,`code`),Tw(472,`nz-table`),Tl(),Tw(473,`, and more`),Tl(),zi$1(474,`li`)(475,`code`),Tw(476,`NzDrawerService`),Tl(),Tw(477,`, `),zi$1(478,`code`),Tw(479,`NzDrawerRef`),Tl()()()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,jw(7,Ai)),aD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,Cg,rd,cr,ir,Fa,u9,p9,Un$2,qi$1,_n,ji$1,Jo,Za,Al,ga$1,ma$1,So,Ve,pe$1,yu],encapsulation:2})}return a})();var zi=()=>({standalone:!0});function Ci(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,95),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,96),tg(3,`nz-icon`,97),Tl()(),Sl()}}function bi(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,95),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,96),Tw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var lt=110;var Fn=(()=>{class a{destroyRef=_(ce);router=_(Te$1);#e=_(Z0);injector=_(ae);viewPort=_(p7);zone=_(fe);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=zt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){rV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-lt>640?this.width.set(640):this.width.set(this.windowWidth()-lt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-lt>640?this.width.set(640):this.width.set(i-lt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Oe(i).pipe(nV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`nz-blog-test-readme`]],features:[Fw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:440,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-5a486561`,`nzTitle`,`MyTested Library Out of The Box`],[`nzHref`,`#h-dacb62dd`,`nzTitle`,`Basic API Controller Testing`],[`nzHref`,`#h-3505cd43`,`nzTitle`,`Data Validation with FluentValidation Library`],[`nzHref`,`#h-adda9d19`,`nzTitle`,`Exception Testing`],[`nzHref`,`#h-7aa876f0`,`nzTitle`,`Identity Controller Testing`],[`nzHref`,`#h-dde4549b`,`nzTitle`,`Advanced Testing with MyTested Library`],[`nzHref`,`#h-ff4316b6`,`nzTitle`,`MyTested Library Limitations`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241009-test-readme.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-5a486561`],[`onclick`,`window.location.hash = 'h-5a486561'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-csharp`],[1,`hljs-keyword`],[1,`hljs-title`],[1,`hljs-meta`],[1,`hljs-function`],[1,`hljs-string`],[`id`,`h-dacb62dd`],[`onclick`,`window.location.hash = 'h-dacb62dd'`,1,`anchor`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Endpoints/TodoLists.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/EdiWang/Moonglade/blob/master/src/Moonglade.Web/Controllers/TagsController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Tags/TagsController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/TagsController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Web.csproj`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/specification.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-3505cd43`],[`onclick`,`window.location.hash = 'h-3505cd43'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Articles/EditTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Application.UnitTests/Common/Exceptions/ValidationExceptionTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Web.AcceptanceTests/StepDefinitions/LoginStepDefinitions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MoongladePure/blob/main/tests/Moonglade.Tests/IntegrationTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Common/AuthorCommandValidator.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Users/Create.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Application/TodoLists/Commands/UpdateTodoList/UpdateTodoListCommandValidator.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-json`],[1,`hljs-punctuation`],[1,`hljs-attr`],[`id`,`h-adda9d19`],[`onclick`,`window.location.hash = 'h-adda9d19'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Domain/Common/BaseDomainException.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Middleware/ValidationExceptionHandlerMiddleware.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-7aa876f0`],[`onclick`,`window.location.hash = 'h-7aa876f0'`,1,`anchor`],[`href`,`https://cioina.azurewebsites.net/articles/dotnet-core-testing#h-6278f57b`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-dde4549b`],[`onclick`,`window.location.hash = 'h-dde4549b'`,1,`anchor`],[`href`,`https://cioina.azurewebsites.net/articles/ratelimit-middleware`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-ff4316b6`],[`onclick`,`window.location.hash = 'h-ff4316b6'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/tree/main/src/Server`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/tree/master/src/Conduit`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/tree/main/src`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/ivaylokenov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ardalis`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanprodan`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jbogard`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/BenMorris`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(zi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,Ci,4,0,`ng-container`,5)(6,bi,4,0,`ng-container`,5),Tl()()(),zi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),Tw(11,`Jump to top`),Tl()(),zi$1(12,`div`,3)(13,`nz-switch`,9),iD(),Ag(`ngModelChange`,function(g){return Sw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),zi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19),Tl()(),zi$1(24,`span`,20),Tw(25,` MyTested Test Project Example`),tg(26,`span`,21)(27,`span`,22),zi$1(28,`a`,23),tg(29,`nz-icon`,24),Tl()(),zi$1(30,`article`,25)(31,`h2`,26)(32,`span`),Tw(33,`Introduction`),Tl(),zi$1(34,`a`,27),Tw(35,`#`),Tl()(),zi$1(36,`p`),Tw(37,`The compiled code of our .NET Core 10 application is on `),zi$1(38,`a`,28),Tw(39,`our GitHub repository`),Tl(),Tw(40,`. For this test project, which is part our application, we will use `),zi$1(41,`a`,29),Tw(42,`MyTested`),Tl(),Tw(43,` - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 10 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 10 project is based on `),zi$1(44,`a`,30),Tw(45,`BookStore`),Tl(),Tw(46,` repository and adapted to work with MyTested library.`),Tl(),zi$1(47,`h2`,31)(48,`span`),Tw(49,`MyTested Library Out of The Box`),Tl(),zi$1(50,`a`,32),Tw(51,`#`),Tl()(),zi$1(52,`p`),Tw(53,`I found out about MyTested for the first time from `),zi$1(54,`a`,33),Tw(55,`BlazorShop`),Tl(),Tw(56,` repository. At the same time, I found out about `),zi$1(57,`code`),Tw(58,`Jwt Authentication`),Tl(),Tw(59,` implementation from same `),zi$1(60,`a`,34),Tw(61,`BlazorShop`),Tl(),Tw(62,` repository and from `),zi$1(63,`a`,35),Tw(64,`aspnetcore-realworld-example`),Tl(),Tw(65,` repository. Both `),zi$1(66,`code`),Tw(67,`Jwt Authentication`),Tl(),Tw(68,` implementations did not work with original `),zi$1(69,`a`,29),Tw(70,`MyTested`),Tl(),Tw(71,` library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was only able to add some small pieces of code to make MyTested and my own `),zi$1(72,`code`),Tw(73,`Jwt Authentication`),Tl(),Tw(74,` implementation work and not to break any original MyTested tests. One interesting idea of JWT token implementation together with refresh token is on `),zi$1(75,`a`,36),Tw(76,`EdiWang`),Tl(),Tw(77,` GitHub repository.
But, what MyTested can do out of the box? The best answer is in `),zi$1(78,`a`,37),Tw(79,`MusicStore`),Tl(),Tw(80,` testing project. For the API controller, `),zi$1(81,`a`,38),Tw(82,`here`),Tl(),Tw(83,` is an example:`),Tl(),zi$1(84,`pre`,39)(85,`code`)(86,`span`,40),Tw(87,`using`),Tl(),Tw(88,` BlogAngular.Application.Common.Version;
`),zi$1(89,`span`,40),Tw(90,`using`),Tl(),Tw(91,` BlogAngular.Web.Features;
`),zi$1(92,`span`,40),Tw(93,`using`),Tl(),Tw(94,` MyTested.AspNetCore.Mvc;
`),zi$1(95,`span`,40),Tw(96,`using`),Tl(),Tw(97,` Xunit;

`),zi$1(98,`span`,40),Tw(99,`namespace`),Tl(),Tw(100,` `),zi$1(101,`span`,41),Tw(102,`BlogAngular.Test.Routing`),Tl(),Tw(103,`
{
    `),zi$1(104,`span`,40),Tw(105,`public`),Tl(),Tw(106,` `),zi$1(107,`span`,40),Tw(108,`class`),Tl(),Tw(109,` `),zi$1(110,`span`,41),Tw(111,`FrontEndRouteTest`),Tl(),Tw(112,`
    {
        [`),zi$1(113,`span`,42),Tw(114,`Fact`),Tl(),Tw(115,`]
        `),zi$1(116,`span`,43)(117,`span`,40),Tw(118,`public`),Tl(),Tw(119,` `),zi$1(120,`span`,40),Tw(121,`void`),Tl(),Tw(122,` `),zi$1(123,`span`,41),Tw(124,`VersionShouldBeRouted`),Tl(),Tw(125,`()`),Tl(),Tw(126,`
        => MyMvc
        .Pipeline()
        .ShouldMap(request => request
            .WithMethod(HttpMethod.Get)
            .WithLocation(`),zi$1(127,`span`,44),Tw(128,`"api/v1.0/version"`),Tl(),Tw(129,`))
        .To<VersionController>(c => c.Index())
        .Which()
        .ShouldReturn()
        .ActionResult(result => result.Result(`),zi$1(130,`span`,40),Tw(131,`new`),Tl(),Tw(132,` VersionResponseEnvelope
        {
            VersionJson = `),zi$1(133,`span`,40),Tw(134,`new`),Tl(),Tw(135,` VersionResponseModel()
        }));
    }
}`),Tl()(),zi$1(136,`h2`,45)(137,`span`),Tw(138,`Basic API Controller Testing`),Tl(),zi$1(139,`a`,46),Tw(140,`#`),Tl()(),zi$1(141,`p`),Tw(142,`There are different ways to define API controllers: `),zi$1(143,`a`,47),Tw(144,`CleanArchitecture`),Tl(),Tw(145,`, `),zi$1(146,`a`,48),Tw(147,`Moonglade`),Tl(),Tw(148,`, `),zi$1(149,`a`,49),Tw(150,`Conduit`),Tl(),Tw(151,`, and `),zi$1(152,`a`,50),Tw(153,`this one`),Tl(),Tw(154,`. The main reason we implemented API control in a certain way is `),zi$1(155,`a`,51),Tw(156,`NSwag.AspNetCore and NSwag.MSBuild`),Tl(),Tw(157,` which we use just in Debug mode to generate `),zi$1(158,`a`,52),Tw(159,`specification.json`),Tl(),Tw(160,`. `),zi$1(161,`code`),Tw(162,`NSwag`),Tl(),Tw(163,` tool is \u201Cvery sensitive\u201D to how API controllers look.
By basic API controller testing, we mean at least one test per CRUD concept.
`),zi$1(164,`a`,53),Tw(165,`Here`),Tl(),Tw(166,` is an example:`),Tl(),zi$1(167,`ul`)(168,`li`)(169,`code`),Tw(170,`Create_tag_should_return_success_with_data`),Tl(),Tw(171,`- Create`),Tl(),zi$1(172,`li`)(173,`code`),Tw(174,`Listing_tags_without_url_parameters_should_return_success_with_all_tags`),Tl(),Tw(175,`- Read`),Tl(),zi$1(176,`li`)(177,`code`),Tw(178,`Edit_tag_should_return_success_with_data`),Tl(),Tw(179,`- Update`),Tl(),zi$1(180,`li`)(181,`code`),Tw(182,`Delete_tag_should_return_success_with_tag_id`),Tl(),Tw(183,` - Delete`),Tl()(),zi$1(184,`h2`,54)(185,`span`),Tw(186,`Data Validation with FluentValidation Library`),Tl(),zi$1(187,`a`,55),Tw(188,`#`),Tl()(),zi$1(189,`p`),Tw(190,`A particular change we made to MyTested is adding the possibility of testing data validation. In fact, now, we can implement all following tests: `),zi$1(191,`a`,56),Tw(192,`BookStore`),Tl(),Tw(193,`, `),zi$1(194,`a`,57),Tw(195,`RealWorld`),Tl(),Tw(196,`, `),zi$1(197,`a`,58),Tw(198,`CleanArchitecture1`),Tl(),Tw(199,`, and `),zi$1(200,`a`,59),Tw(201,`CleanArchitecture2`),Tl(),Tw(202,`, `),zi$1(203,`a`,60),Tw(204,`MoongladePure`),Tl(),Tw(205,` in a set of beautiful tests. `),zi$1(206,`a`,53),Tw(207,`Here`),Tl(),Tw(208,` are examples of testing data validation using modified version of MyTested library:`),Tl(),zi$1(209,`ul`)(210,`li`)(211,`code`),Tw(212,`Create_tag_with_one_char_should_return_validation_error`),Tl(),Tw(213,`- Creates tag name length bellow allowed by database constraint`),Tl(),zi$1(214,`li`)(215,`code`),Tw(216,`Create_tag_with_max_chars_should_return_validation_error`),Tl(),Tw(217,`- Creates tag name length above allowed by database constraint`),Tl(),zi$1(218,`li`)(219,`code`),Tw(220,`Edit_tag_with_one_char_should_return_validation_error`),Tl(),Tw(221,`- Updates tag name length bellow allowed by database constraint`),Tl(),zi$1(222,`li`)(223,`code`),Tw(224,`Edit_tag_with_max_chars_should_return_validation_error`),Tl(),Tw(225,` - Updates tag name length above allowed by database constraint`),Tl()(),zi$1(226,`p`),Tw(227,`Our validation implementation is based mostly on `),zi$1(228,`a`,61),Tw(229,`BookStore`),Tl(),Tw(230,`. One useful technique to validate unique data comes from `),zi$1(231,`a`,62),Tw(232,`Conduit`),Tl(),Tw(233,` and `),zi$1(234,`a`,63),Tw(235,`CleanArchitecture`),Tl(),Tw(236,`. Following are `),zi$1(237,`a`,53),Tw(238,`three tests`),Tl(),Tw(239,` with the constraint that the tag name is unique:`),Tl(),zi$1(240,`ul`)(241,`li`)(242,`code`),Tw(243,`Create_tag_with_same_name_should_fail_with_validation_error`),Tl(),Tw(244,`- Creates tag with name when the name has already taken.`),Tl(),zi$1(245,`li`)(246,`code`),Tw(247,`Edit_tag_with_same_name_should_fail_with_validation_error`),Tl(),Tw(248,`- Updates tag name when the name has already taken.`),Tl(),zi$1(249,`li`)(250,`code`),Tw(251,`Edit_same_tag_with_same_name_should_return_success_with_data`),Tl(),Tw(252,`- Updates tag name when the name did not change.`),Tl()(),zi$1(253,`p`),Tw(254,`In `),zi$1(255,`a`,28),Tw(256,`our application`),Tl(),Tw(257,`, any `),zi$1(258,`code`),Tw(259,`MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException`),Tl(),Tw(260,` will return 422 with JSON string similar to this:`),Tl(),zi$1(261,`pre`,64)(262,`code`)(263,`span`,65),Tw(264,`{`),Tl(),Tw(265,`
   `),zi$1(266,`span`,66),Tw(267,`"TagJson.Title"`),Tl(),zi$1(268,`span`,65),Tw(269,`:`),Tl(),Tw(270,`  `),zi$1(271,`span`,65),Tw(272,`[`),Tl(),zi$1(273,`span`,44),Tw(274,`"The length of 'Tag Json Title' must be 420 characters or fewer. You entered 421 characters."`),Tl(),zi$1(275,`span`,65),Tw(276,`]`),Tl(),Tw(277,`
`),zi$1(278,`span`,65),Tw(279,`}`),Tl()()(),zi$1(280,`p`),Tw(281,`That represents a standard validation message from `),zi$1(282,`code`),Tw(283,`FluentValidation`),Tl(),Tw(284,` library which can be customized.`),Tl(),zi$1(285,`h2`,67)(286,`span`),Tw(287,`Exception Testing`),Tl(),zi$1(288,`a`,68),Tw(289,`#`),Tl()(),zi$1(290,`p`),Tw(291,`In our application, we use `),zi$1(292,`code`),Tw(293,`Ardalis.GuardClauses.NotFoundException`),Tl(),Tw(294,` instead of `),zi$1(295,`a`,69),Tw(296,`BaseDomainException`),Tl(),Tw(297,`. In addition, we use `),zi$1(298,`a`,70),Tw(299,`ValidationExceptionHandlerMiddleware`),Tl(),Tw(300,` to intercept all validation exceptions that return `),zi$1(301,`code`),Tw(302,`HttpStatusCode.UnprocessableEntity`),Tl(),Tw(303,`(422). Unfortunately, MyTested does not work with the middleware concept. But, we can use `),zi$1(304,`code`),Tw(305,`MyTested.AspNetCore.Mvc.Exceptions.InvocationAssertionException`),Tl(),Tw(306,` and `),zi$1(307,`a`,71),Tw(308,`FromNotFoundException`),Tl(),Tw(309,` to test against two common exceptions:`),Tl(),zi$1(310,`ul`)(311,`li`)(312,`code`),Tw(313,`Edit_tag_with_wrong_id_should_fail`),Tl(),Tw(314,`- The tag with the specified id does not exist in the database.`),Tl(),zi$1(315,`li`)(316,`code`),Tw(317,`Update_user_with_malformed_data_should_fail`),Tl(),Tw(318,`- The webserver cannot create the object from the json data request.`),Tl()(),zi$1(319,`h2`,72)(320,`span`),Tw(321,`Identity Controller Testing`),Tl(),zi$1(322,`a`,73),Tw(323,`#`),Tl()(),zi$1(324,`p`),Tw(325,`When it comes to JWT authorization, a big amount of testing consists in testing for invalid JWT tokens:`),Tl(),zi$1(326,`ul`)(327,`li`)(328,`code`),Tw(329,`Update_user_without_authorization_header_should_fail`),Tl(),Tw(330,`- tests when JWT token is absent`),Tl(),zi$1(331,`li`)(332,`code`),Tw(333,`Update_user_with_altered_authorization_header_should_fail`),Tl(),Tw(334,`- tests when to a valid JWT token is added one character`),Tl(),zi$1(335,`li`)(336,`code`),Tw(337,`Update_user_with_malformed_authorization_header_should_fail`),Tl(),Tw(338,`- tests when JWT token has format `),zi$1(339,`code`),Tw(340,`a.b`),Tl()(),zi$1(341,`li`)(342,`code`),Tw(343,`Update_user_with_fake_authorization_header_should_fail`),Tl(),Tw(344,`- tests when JWT token has correct format `),zi$1(345,`code`),Tw(346,`a.b.c`),Tl(),Tw(347,` but random characters`),Tl(),zi$1(348,`li`)(349,`code`),Tw(350,`Update_user_with_incorrect_authorization_header_key_should_fail`),Tl(),Tw(351,`- tests when JWT token is valid but was encrypted with a different key`),Tl(),zi$1(352,`li`)(353,`code`),Tw(354,`Update_user_with_expired_authorization_header_should_fail`),Tl(),Tw(355,`- tests when a valid JWT token was expired`),Tl()(),zi$1(356,`p`),Tw(357,`These are the most common case scenarios to test against an invalid JWT token and must be done just for one controller!
MyTested cannot catch 401 error code directly. We found a workaround by using `),zi$1(358,`a`,71),Tw(359,`HeaderAuthorizationException`),Tl(),Tw(360,`
The full source code for the .NET Core `),zi$1(361,`code`),Tw(362,`IdentityService`),Tl(),Tw(363,` implementation can be found `),zi$1(364,`a`,74),Tw(365,`here`),Tl()(),zi$1(366,`h2`,75)(367,`span`),Tw(368,`Advanced Testing with MyTested Library`),Tl(),zi$1(369,`a`,76),Tw(370,`#`),Tl()(),zi$1(371,`p`),Tw(372,`In `),zi$1(373,`a`,77),Tw(374,`"Implementing JWT Token Refresh Concept for .NET Core 10"`),Tl(),Tw(375,`, we show an example of RateLimitMiddleware and try some advanced testing with shared `),zi$1(376,`code`),Tw(377,`MemoryCache`),Tl(),Tw(378,`: `),zi$1(379,`code`),Tw(380,`GetTagsWithRateLimitMiddleware`),Tl(),Tw(381,` and `),zi$1(382,`code`),Tw(383,`GetAllWithRateLimitMiddleware`),Tl(),Tw(384,` from `),zi$1(385,`a`,78),Tw(386,`StaticTestData.cs`),Tl(),Tw(387,`).`),Tl(),zi$1(388,`h2`,79)(389,`span`),Tw(390,`MyTested Library Limitations`),Tl(),zi$1(391,`a`,80),Tw(392,`#`),Tl()(),zi$1(393,`p`),Tw(394,`We applied modified version of MyTested library to three popular GitHub repositories: `),zi$1(395,`a`,81),Tw(396,`BookStore`),Tl(),Tw(397,`, `),zi$1(398,`a`,82),Tw(399,`RealWorld`),Tl(),Tw(400,`, and `),zi$1(401,`a`,83),Tw(402,`CleanArchitecture`),Tl(),Tw(403,`. Our quick investigation shows that BookStore can be configured to work 100% with MyTested while RealWorld works only with `),zi$1(404,`a`,49),Tw(405,`anonymous controllers`),Tl(),Tw(406,` and CleanArchitecture does not work at all.
The full test project source code can be found on `),zi$1(407,`a`,84),Tw(408,`our GitHub repository`),Tl(),Tw(409,`.`),Tl(),zi$1(410,`h2`,85)(411,`span`),Tw(412,`Credits`),Tl(),zi$1(413,`a`,86),Tw(414,`#`),Tl()(),zi$1(415,`ul`)(416,`li`)(417,`a`,87),Tw(418,`Ivaylo Kenov`),Tl()(),zi$1(419,`li`)(420,`a`,88),Tw(421,`Kalin Tsenkov`),Tl()(),zi$1(422,`li`)(423,`a`,89),Tw(424,`Steve Smith`),Tl()(),zi$1(425,`li`)(426,`a`,90),Tw(427,`Jason Taylor`),Tl()(),zi$1(428,`li`)(429,`a`,91),Tw(430,`Stefan Prodan`),Tl()(),zi$1(431,`li`)(432,`a`,92),Tw(433,`Mark Cilia Vincenti`),Tl()(),zi$1(434,`li`)(435,`a`,93),Tw(436,`Jimmy Bogard`),Tl()(),zi$1(437,`li`)(438,`a`,94),Tw(439,`Ben Morris`),Tl()()()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,jw(7,zi)),aD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,Cg,rd,cr,ir,Fa,u9,p9,Un$2,qi$1,_n,ji$1,Jo,Za,Al,ga$1,ma$1,So,Ve,pe$1,yu],encapsulation:2})}return a})();var yi=()=>({standalone:!0});function _i(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,85),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,86),tg(3,`nz-icon`,87),Tl()(),Sl()}}function Ti(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,85),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,86),Tw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var st=110;var Hn=(()=>{class a{destroyRef=_(ce);router=_(Te$1);#e=_(Z0);injector=_(ae);viewPort=_(p7);zone=_(fe);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=zt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){rV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-st>640?this.width.set(640):this.width.set(this.windowWidth()-st-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-st>640?this.width.set(640):this.width.set(i-st-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Oe(i).pipe(nV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`nz-blog-ratelimit-middleware`]],features:[Fw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:1657,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-ce31d768`,`nzTitle`,`Use Case Scenario`],[`nzHref`,`#h-c73a370e`,`nzTitle`,`JWT Token Refresh Concept`],[`nzHref`,`#h-2ee872d2`,`nzTitle`,`JWT Token Refresh Implementation`],[`nzHref`,`#h-dabba405`,`nzTitle`,`Modified RateLimitMiddleware`],[`nzHref`,`#h-bd1baabd`,`nzTitle`,`Testing of RateLimitMiddleware With MyTested Library`],[`nzHref`,`#h-009deb37`,`nzTitle`,`Test Settings`],[`nzHref`,`#h-fb5fe24a`,`nzTitle`,`Proof of Concept`],[`nzHref`,`#h-6f8b794f`,`nzTitle`,`Conclusion`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241018-ratelimit-middleware.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-ce31d768`],[`onclick`,`window.location.hash = 'h-ce31d768'`,1,`anchor`],[`id`,`h-c73a370e`],[`onclick`,`window.location.hash = 'h-c73a370e'`,1,`anchor`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-csharp`],[1,`hljs-meta`],[1,`hljs-keyword`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/blob/main/bin/Release/net10.0/appsettings.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-2ee872d2`],[`onclick`,`window.location.hash = 'h-2ee872d2'`,1,`anchor`],[`href`,`https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-literal`],[1,`hljs-built_in`],[1,`hljs-string`],[`href`,`https://github.com/stefanprodan/AspNetCoreRateLimit/blob/master/src/AspNetCoreRateLimit/Middleware/RateLimitMiddleware.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-dabba405`],[`onclick`,`window.location.hash = 'h-dabba405'`,1,`anchor`],[1,`hljs-title`],[1,`hljs-function`],[1,`hljs-params`],[1,`hljs-comment`],[1,`hljs-subst`],[1,`hljs-number`],[`id`,`h-bd1baabd`],[`onclick`,`window.location.hash = 'h-bd1baabd'`,1,`anchor`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/testsettings.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test/RateLimit`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/RateLimit/AsyncKeyedLockTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti/AsyncKeyedLock`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/EdiWang/Edi.CacheAside.InMemory/blob/master/src/Edi.CacheAside.InMemory/MemoryCacheAside.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-009deb37`],[`onclick`,`window.location.hash = 'h-009deb37'`,1,`anchor`],[1,`language-json`],[1,`hljs-punctuation`],[1,`hljs-attr`],[`id`,`h-fb5fe24a`],[`onclick`,`window.location.hash = 'h-fb5fe24a'`,1,`anchor`],[`id`,`h-6f8b794f`],[`onclick`,`window.location.hash = 'h-6f8b794f'`,1,`anchor`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/ivaylokenov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ardalis`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanprodan`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jbogard`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/BenMorris`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(zi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,_i,4,0,`ng-container`,5)(6,Ti,4,0,`ng-container`,5),Tl()()(),zi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),Tw(11,`Jump to top`),Tl()(),zi$1(12,`div`,3)(13,`nz-switch`,9),iD(),Ag(`ngModelChange`,function(g){return Sw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),zi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19)(24,`nz-link`,20),Tl()(),zi$1(25,`span`,21),Tw(26,` Implementing JWT Token Refresh Concept for .NET Core 10`),tg(27,`span`,22)(28,`span`,23),zi$1(29,`a`,24),tg(30,`nz-icon`,25),Tl()(),zi$1(31,`article`,26)(32,`blockquote`,27)(33,`p`)(34,`strong`),Tw(35,`The concept of Bearer Header Authorization based on JWT token implementation provided by .NET Core 10 is the same as in .NET Core 8. `),Tl()()(),zi$1(36,`h2`,28)(37,`span`),Tw(38,`Introduction`),Tl(),zi$1(39,`a`,29),Tw(40,`#`),Tl()(),zi$1(41,`p`),Tw(42,`The compiled code of our .NET Core 10 application is on `),zi$1(43,`a`,30),Tw(44,`our GitHub repository`),Tl(),Tw(45,`. For testing purpose, we will use `),zi$1(46,`a`,31),Tw(47,`MyTested`),Tl(),Tw(48,` - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 10 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our project is based on `),zi$1(49,`a`,32),Tw(50,`BookStore`),Tl(),Tw(51,` repository and adapted to work with MyTested library. MyTested was engineered to work without middleware which is an advantage for many cases. However, the scope of this article was to find a way to tests middleware with MyTested. The full test project source code can be found on `),zi$1(52,`a`,33),Tw(53,`our another GitHub repository`),Tl(),Tw(54,`.`),Tl(),zi$1(55,`h2`,34)(56,`span`),Tw(57,`Use Case Scenario`),Tl(),zi$1(58,`a`,35),Tw(59,`#`),Tl()(),zi$1(60,`p`),Tw(61,`The user signs in and gets a JWT token valid for 30 minutes. The user opens a webpage to create/edit an article. It takes 35 minutes to finish the work. The user clicks on submit button. A modal form pops up and asks the user to refresh JWT token by entering a password. The user gets a new JWT token valid for next 30 minutes. Finally, the user clicks submit button and saves the work.`),Tl(),zi$1(62,`h2`,36)(63,`span`),Tw(64,`JWT Token Refresh Concept`),Tl(),zi$1(65,`a`,37),Tw(66,`#`),Tl()(),zi$1(67,`p`),Tw(68,`First, we need to know how basic native JWT token implemented in .NET Core 10 works. Usually, there are `),zi$1(69,`a`,38),Tw(70,`two types of API endpoints: public and private`),Tl(),Tw(71,`. A private API endpoint look like this:`),Tl(),zi$1(72,`pre`,39)(73,`code`),Tw(74,`[`),zi$1(75,`span`,40),Tw(76,`HttpPut`),Tl(),Tw(77,`]
[`),zi$1(78,`span`,40),Tw(79,`Route(nameof(Update))`),Tl(),Tw(80,`]
[`),zi$1(81,`span`,40),Tw(82,`Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)`),Tl(),Tw(83,`]
`),zi$1(84,`span`,41),Tw(85,`public`),Tl(),Tw(86,` `),zi$1(87,`span`,41),Tw(88,`async`),Tl(),Tw(89,` Task<ActionResult<UserResponseEnvelope>> Update(
    UserUpdateCommand command)
    => `),zi$1(90,`span`,41),Tw(91,`await`),Tl(),Tw(92,` `),zi$1(93,`span`,41),Tw(94,`this`),Tl(),Tw(95,`.Send(command);`),Tl()(),zi$1(96,`p`),Tw(97,`The user signs in and gets a JWT token which is saved in localStorage. Then, any request to the server includes obtained JWT token in the Authorization header. The server won’t use the token on public endpoints. It means that the server won’t try to decrypt the token. On the private endpoints, the server will try to decrypt the token, apply `),zi$1(98,`code`),Tw(99,`BearerPolicy`),Tl(),Tw(100,`, and match the role from the token to `),zi$1(101,`code`),Tw(102,`AdministratorRoleName`),Tl(),Tw(103,` list. At this point, the basic native .NET Core 10 implementation does not care if the user form the JWT token exists in the database, and it does not care if the role exists in the database ether. However, the server checks if the token expired and returns a 401 error if it’s the case. With all this in mind, we implemented the concept of JWT token refresh period called PRefresh. Let’s call the token’s valid period PValid. Then, `),zi$1(104,`code`),Tw(105,`SecurityTokenDescriptorExpiresInMinutes`),Tl(),Tw(106,` from `),zi$1(107,`a`,42),Tw(108,`appsettings.json`),Tl(),Tw(109,` = PValid + PRefresh and `),zi$1(110,`code`),Tw(111,`SecurityTokenRefreshRate`),Tl(),Tw(112,` = PRefresh/(PValid + PRefresh). So, if `),zi$1(113,`code`),Tw(114,`SecurityTokenDescriptorExpiresInMinutes`),Tl(),Tw(115,`= 60 minutes and `),zi$1(116,`code`),Tw(117,`SecurityTokenRefreshRate`),Tl(),Tw(118,` = 1/2, it means that PValid = 30 minutes and PRefresh = 30 minutes. If `),zi$1(119,`code`),Tw(120,`SecurityTokenRefreshRate`),Tl(),Tw(121,` = 1/4, it means that PValid = 45 minutes and PRefresh = 15 minutes. If `),zi$1(122,`code`),Tw(123,`SecurityTokenRefreshRate`),Tl(),Tw(124,` = 3/4, it means that PValid = 15 minutes and PRefresh = 45 minutes and so on. `),Tl(),zi$1(125,`h2`,43)(126,`span`),Tw(127,`JWT Token Refresh Implementation`),Tl(),zi$1(128,`a`,44),Tw(129,`#`),Tl()(),zi$1(130,`p`),Tw(131,`One interesting idea of JWT token implementation together with refresh token is on `),zi$1(132,`a`,45),Tw(133,`EdiWang`),Tl(),Tw(134,` GitHub repository. Our main difference from above implementation is not using web browser cookies and uses native .NET Core implementation which is “controlled” by the .NET Core framework itself. One problem we solved in this article, is the implementation of `),zi$1(135,`code`),Tw(136,`JWT Token`),Tl(),Tw(137,` refresh mechanism. There is no standard way to refresh JWT token in .NET Core 10. The main idea was to check a valid `),zi$1(138,`code`),Tw(139,`JWT token`),Tl(),Tw(140,` right after standard .NET Core authorization and before entering of an API controller. In fact, we needed to use following formula with this small piece of code:`),Tl(),zi$1(141,`pre`,39)(142,`code`)(143,`span`,41),Tw(144,`var`),Tl(),Tw(145,` claimsPrincipal = context.User!;
 `),zi$1(146,`span`,41),Tw(147,`if`),Tl(),Tw(148,` (claimsPrincipal != `),zi$1(149,`span`,46),Tw(150,`null`),Tl(),Tw(151,`)
 {
     `),zi$1(152,`span`,41),Tw(153,`var`),Tl(),Tw(154,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
     `),zi$1(155,`span`,41),Tw(156,`if`),Tl(),Tw(157,` (isAuthenticated != `),zi$1(158,`span`,46),Tw(159,`null`),Tl(),Tw(160,` && (`),zi$1(161,`span`,47),Tw(162,`bool`),Tl(),Tw(163,`)isAuthenticated)
     {
         `),zi$1(164,`span`,41),Tw(165,`var`),Tl(),Tw(166,` claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
         `),zi$1(167,`span`,41),Tw(168,`if`),Tl(),Tw(169,` (claim != `),zi$1(170,`span`,46),Tw(171,`null`),Tl(),Tw(172,`)
         {
             clientId = claim.Value;
         }
     }
 }
 `),zi$1(173,`span`,41),Tw(174,`if`),Tl(),Tw(175,` (clientId != `),zi$1(176,`span`,46),Tw(177,`null`),Tl(),Tw(178,`)
 {
     `),zi$1(179,`span`,41),Tw(180,`var`),Tl(),Tw(181,` iat = claimsPrincipal.FindFirst(`),zi$1(182,`span`,48),Tw(183,`"iat"`),Tl(),Tw(184,`);
     `),zi$1(185,`span`,41),Tw(186,`var`),Tl(),Tw(187,` exp = claimsPrincipal.FindFirst(`),zi$1(188,`span`,48),Tw(189,`"exp"`),Tl(),Tw(190,`);
     `),zi$1(191,`span`,41),Tw(192,`if`),Tl(),Tw(193,` (iat != `),zi$1(194,`span`,46),Tw(195,`null`),Tl(),Tw(196,` && exp != `),zi$1(197,`span`,46),Tw(198,`null`),Tl(),Tw(199,`)
     {
         `),zi$1(200,`span`,41),Tw(201,`var`),Tl(),Tw(202,` pValid = (`),zi$1(203,`span`,47),Tw(204,`long`),Tl(),Tw(205,`.Parse(exp.Value) - `),zi$1(206,`span`,47),Tw(207,`long`),Tl(),Tw(208,`.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
         `),zi$1(209,`span`,41),Tw(210,`var`),Tl(),Tw(211,` current = `),zi$1(212,`span`,47),Tw(213,`long`),Tl(),Tw(214,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();
         `),zi$1(215,`span`,41),Tw(216,`if`),Tl(),Tw(217,` (current < pValid)
         {
             `),zi$1(218,`span`,41),Tw(219,`await`),Tl(),Tw(220,` ReturnSecurityTokenRefreshRate(context, `),zi$1(221,`span`,48),Tw(222,`"SecurityTokenRefreshRate"`),Tl(),Tw(223,`, `),zi$1(224,`span`,48),Tw(225,`"Please refresh your JWT token"`),Tl(),Tw(226,`);
             `),zi$1(227,`span`,41),Tw(228,`return`),Tl(),Tw(229,`;
         }
     }
 }`),Tl()(),zi$1(230,`p`),Tw(231,`So, we needed a middleware to place the above piece of code. A good candidate we found was AspNetCoreRateLimit library, so we decided to modify its source code keeping in mind also the possibility of testing it with MyTested. The original AspNetCoreRateLimit middleware is called `),zi$1(232,`a`,49),Tw(233,`RateLimitMiddleware.cs`),Tl(),Tw(234,` Following is the modified source code that is used in our actual application.`),Tl(),zi$1(235,`h3`,50)(236,`span`),Tw(237,`Modified RateLimitMiddleware`),Tl(),zi$1(238,`a`,51),Tw(239,`#`),Tl()(),zi$1(240,`pre`,39)(241,`code`)(242,`span`,41),Tw(243,`using`),Tl(),Tw(244,` Microsoft.AspNetCore.Hosting;
`),zi$1(245,`span`,41),Tw(246,`using`),Tl(),Tw(247,` Microsoft.AspNetCore.Http;
`),zi$1(248,`span`,41),Tw(249,`using`),Tl(),Tw(250,` Newtonsoft.Json;
`),zi$1(251,`span`,41),Tw(252,`using`),Tl(),Tw(253,` Newtonsoft.Json.Serialization;
`),zi$1(254,`span`,41),Tw(255,`using`),Tl(),Tw(256,` System;
`),zi$1(257,`span`,41),Tw(258,`using`),Tl(),Tw(259,` System.Collections.Generic;
`),zi$1(260,`span`,41),Tw(261,`using`),Tl(),Tw(262,` System.Data;
`),zi$1(263,`span`,41),Tw(264,`using`),Tl(),Tw(265,` System.Linq;
`),zi$1(266,`span`,41),Tw(267,`using`),Tl(),Tw(268,` System.Net;
`),zi$1(269,`span`,41),Tw(270,`using`),Tl(),Tw(271,` System.Security.Claims;
`),zi$1(272,`span`,41),Tw(273,`using`),Tl(),Tw(274,` System.Text;
`),zi$1(275,`span`,41),Tw(276,`using`),Tl(),Tw(277,` System.Threading.Tasks;

`),zi$1(278,`span`,41),Tw(279,`namespace`),Tl(),Tw(280,` `),zi$1(281,`span`,52),Tw(282,`AspNetCoreRateLimit`),Tl(),Tw(283,`
{
    `),zi$1(284,`span`,41),Tw(285,`public`),Tl(),Tw(286,` `),zi$1(287,`span`,41),Tw(288,`abstract`),Tl(),Tw(289,` `),zi$1(290,`span`,41),Tw(291,`class`),Tl(),Tw(292,` `),zi$1(293,`span`,52),Tw(294,`RateLimitMiddleware`),Tl(),Tw(295,`<`),zi$1(296,`span`,52),Tw(297,`TProcessor`),Tl(),Tw(298,`> : `),zi$1(299,`span`,52),Tw(300,`IMiddleware`),Tl(),Tw(301,`
        `),zi$1(302,`span`,41),Tw(303,`where`),Tl(),Tw(304,` `),zi$1(305,`span`,52),Tw(306,`TProcessor`),Tl(),Tw(307,` : `),zi$1(308,`span`,52),Tw(309,`IRateLimitProcessor`),Tl(),Tw(310,`
    {
        `),zi$1(311,`span`,41),Tw(312,`private`),Tl(),Tw(313,` `),zi$1(314,`span`,41),Tw(315,`readonly`),Tl(),Tw(316,` IWebHostEnvironment _env;
        `),zi$1(317,`span`,41),Tw(318,`private`),Tl(),Tw(319,` `),zi$1(320,`span`,41),Tw(321,`readonly`),Tl(),Tw(322,` TProcessor _processor;
        `),zi$1(323,`span`,41),Tw(324,`private`),Tl(),Tw(325,` `),zi$1(326,`span`,41),Tw(327,`readonly`),Tl(),Tw(328,` RateLimitOptions _options;
        `),zi$1(329,`span`,41),Tw(330,`private`),Tl(),Tw(331,` `),zi$1(332,`span`,41),Tw(333,`readonly`),Tl(),Tw(334,` IRateLimitConfiguration _config;
        `),zi$1(335,`span`,41),Tw(336,`private`),Tl(),Tw(337,` `),zi$1(338,`span`,41),Tw(339,`readonly`),Tl(),Tw(340,` `),zi$1(341,`span`,47),Tw(342,`bool`),Tl(),Tw(343,` _securityTokenRefreshOnly;
        `),zi$1(344,`span`,53)(345,`span`,41),Tw(346,`protected`),Tl(),Tw(347,` `),zi$1(348,`span`,52),Tw(349,`RateLimitMiddleware`),Tl(),Tw(350,`(`),zi$1(351,`span`,54),Tw(352,`
            IWebHostEnvironment env,
            RateLimitOptions options,
            TProcessor processor,
            IRateLimitConfiguration config,
            `),zi$1(353,`span`,47),Tw(354,`bool`),Tl(),Tw(355,` securityTokenRefreshOnly`),Tl(),Tw(356,`)`),Tl(),Tw(357,`
        {
            _env = env;
            _options = options;
            _processor = processor;
            _config = config;
            _securityTokenRefreshOnly = securityTokenRefreshOnly;

            `),zi$1(358,`span`,41),Tw(359,`if`),Tl(),Tw(360,` (_env.EnvironmentName == `),zi$1(361,`span`,48),Tw(362,`"Test"`),Tl(),Tw(363,`)
            {
                _config.RegisterResolvers();
            }
        }

        `),zi$1(364,`span`,53)(365,`span`,41),Tw(366,`public`),Tl(),Tw(367,` `),zi$1(368,`span`,41),Tw(369,`async`),Tl(),Tw(370,` Task `),zi$1(371,`span`,52),Tw(372,`InvokeAsync`),Tl(),Tw(373,`(`),zi$1(374,`span`,54),Tw(375,`HttpContext context, RequestDelegate _next`),Tl(),Tw(376,`)`),Tl(),Tw(377,`
        {
            `),zi$1(378,`span`,55),Tw(379,`// check if rate limiting is enabled (EnableEndpointRateLimiting)`),Tl(),Tw(380,`
            `),zi$1(381,`span`,41),Tw(382,`if`),Tl(),Tw(383,` (_options == `),zi$1(384,`span`,46),Tw(385,`null`),Tl(),Tw(386,`)
            {
                `),zi$1(387,`span`,41),Tw(388,`await`),Tl(),Tw(389,` _next.Invoke(context);
                `),zi$1(390,`span`,41),Tw(391,`return`),Tl(),Tw(392,`;
            }

            `),zi$1(393,`span`,47),Tw(394,`string`),Tl(),Tw(395,` clientIp = `),zi$1(396,`span`,46),Tw(397,`null`),Tl(),Tw(398,`;
            `),zi$1(399,`span`,47),Tw(400,`string`),Tl(),Tw(401,` clientId = `),zi$1(402,`span`,46),Tw(403,`null`),Tl(),Tw(404,`;

            `),zi$1(405,`span`,41),Tw(406,`var`),Tl(),Tw(407,` claimsPrincipal = context.User!;

            `),zi$1(408,`span`,41),Tw(409,`if`),Tl(),Tw(410,` (claimsPrincipal != `),zi$1(411,`span`,46),Tw(412,`null`),Tl(),Tw(413,`)
            {
                `),zi$1(414,`span`,41),Tw(415,`var`),Tl(),Tw(416,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),zi$1(417,`span`,41),Tw(418,`if`),Tl(),Tw(419,` (isAuthenticated != `),zi$1(420,`span`,46),Tw(421,`null`),Tl(),Tw(422,` && (`),zi$1(423,`span`,47),Tw(424,`bool`),Tl(),Tw(425,`)isAuthenticated)
                {
                    `),zi$1(426,`span`,41),Tw(427,`var`),Tl(),Tw(428,` claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
                    `),zi$1(429,`span`,41),Tw(430,`if`),Tl(),Tw(431,` (claim != `),zi$1(432,`span`,46),Tw(433,`null`),Tl(),Tw(434,`)
                    {
                        clientId = claim.Value;
                    }
                }
            }

            `),zi$1(435,`span`,41),Tw(436,`if`),Tl(),Tw(437,` (!_config.IpResolvers.IsEmpty)
            {
                `),zi$1(438,`span`,41),Tw(439,`var`),Tl(),Tw(440,` resolver = _config.IpResolvers.GetEnumerator();
                `),zi$1(441,`span`,41),Tw(442,`while`),Tl(),Tw(443,` (resolver.MoveNext())
                {
                    clientIp = resolver.Current.Value.ResolveIp(context);
                    `),zi$1(444,`span`,41),Tw(445,`if`),Tl(),Tw(446,` (!`),zi$1(447,`span`,47),Tw(448,`string`),Tl(),Tw(449,`.IsNullOrEmpty(clientIp))
                    {
                        `),zi$1(450,`span`,41),Tw(451,`break`),Tl(),Tw(452,`;
                    }
                }
            }

            `),zi$1(453,`span`,41),Tw(454,`var`),Tl(),Tw(455,` path = context.Request.Path.ToString().ToLowerInvariant();
            `),zi$1(456,`span`,41),Tw(457,`var`),Tl(),Tw(458,` identity = `),zi$1(459,`span`,41),Tw(460,`new`),Tl(),Tw(461,` ClientRequestIdentity
            {
                ClientIp = clientIp ?? context.Connection.RemoteIpAddress?.MapToIPv4().ToString(),
                Path = path == `),zi$1(462,`span`,48),Tw(463,`"/"`),Tl(),Tw(464,`
                    ? path
                    : path.TrimEnd(`),zi$1(465,`span`,48),Tw(466,`'/'`),Tl(),Tw(467,`),
                HttpVerb = context.Request.Method.ToLowerInvariant(),
                ClientId = clientId ?? `),zi$1(468,`span`,48),Tw(469,`"anon"`),Tl(),Tw(470,`
            };


            `),zi$1(471,`span`,55),Tw(472,`// check white list`),Tl(),Tw(473,`
            `),zi$1(474,`span`,41),Tw(475,`if`),Tl(),Tw(476,` (!_processor.IsWhitelisted(identity))
            {
                `),zi$1(477,`span`,41),Tw(478,`if`),Tl(),Tw(479,` (clientId != `),zi$1(480,`span`,46),Tw(481,`null`),Tl(),Tw(482,`)
                {
                    `),zi$1(483,`span`,41),Tw(484,`var`),Tl(),Tw(485,` iat = claimsPrincipal.FindFirst(`),zi$1(486,`span`,48),Tw(487,`"iat"`),Tl(),Tw(488,`);
                    `),zi$1(489,`span`,41),Tw(490,`var`),Tl(),Tw(491,` exp = claimsPrincipal.FindFirst(`),zi$1(492,`span`,48),Tw(493,`"exp"`),Tl(),Tw(494,`);
                    `),zi$1(495,`span`,41),Tw(496,`if`),Tl(),Tw(497,` (iat != `),zi$1(498,`span`,46),Tw(499,`null`),Tl(),Tw(500,` && exp != `),zi$1(501,`span`,46),Tw(502,`null`),Tl(),Tw(503,`)
                    {
                        `),zi$1(504,`span`,41),Tw(505,`var`),Tl(),Tw(506,` pValid = (`),zi$1(507,`span`,47),Tw(508,`long`),Tl(),Tw(509,`.Parse(exp.Value) - `),zi$1(510,`span`,47),Tw(511,`long`),Tl(),Tw(512,`.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
                        `),zi$1(513,`span`,41),Tw(514,`var`),Tl(),Tw(515,` current = `),zi$1(516,`span`,47),Tw(517,`long`),Tl(),Tw(518,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                        `),zi$1(519,`span`,41),Tw(520,`if`),Tl(),Tw(521,` (`),zi$1(522,`span`,41),Tw(523,`this`),Tl(),Tw(524,`._env.EnvironmentName == `),zi$1(525,`span`,48),Tw(526,`"Test"`),Tl(),Tw(527,`)
                        {
                            `),zi$1(528,`span`,41),Tw(529,`if`),Tl(),Tw(530,` (clientId == `),zi$1(531,`span`,48),Tw(532,`"SecurityTokenRefreshException@email.com1"`),Tl(),Tw(533,`)
                            {
                                `),zi$1(534,`span`,41),Tw(535,`await`),Tl(),Tw(536,` Task.FromException(`),zi$1(537,`span`,41),Tw(538,`new`),Tl(),Tw(539,` SecurityTokenRefreshException(`),zi$1(540,`span`,48),Tw(541,`$"This is a test. PValid:  `),zi$1(542,`span`,56),Tw(543,`{pValid}`),Tl(),Tw(544,` Current: `),zi$1(545,`span`,56),Tw(546,`{current}`),Tl(),Tw(547,` ClientId: `),zi$1(548,`span`,56),Tw(549,`{clientId}`),Tl(),Tw(550,`"`),Tl(),Tw(551,`));
                            }
                        }
                        `),zi$1(552,`span`,41),Tw(553,`else`),Tl(),Tw(554,` `),zi$1(555,`span`,41),Tw(556,`if`),Tl(),Tw(557,` (current < pValid)
                        {
                            LogBlockedRequest(context, identity, identity.ClientIp);
                            `),zi$1(558,`span`,41),Tw(559,`await`),Tl(),Tw(560,` ReturnSecurityTokenRefreshRate(context, `),zi$1(561,`span`,48),Tw(562,`"SecurityTokenRefreshRate"`),Tl(),Tw(563,`, `),zi$1(564,`span`,48),Tw(565,`"Please refresh your JWT token"`),Tl(),Tw(566,`);
                            `),zi$1(567,`span`,41),Tw(568,`return`),Tl(),Tw(569,`;
                        }

                        `),zi$1(570,`span`,41),Tw(571,`var`),Tl(),Tw(572,` claim = claimsPrincipal.FindFirst(ClaimTypes.UserData);
                        `),zi$1(573,`span`,41),Tw(574,`if`),Tl(),Tw(575,` (claim != `),zi$1(576,`span`,46),Tw(577,`null`),Tl(),Tw(578,`)
                        {
                            `),zi$1(579,`span`,41),Tw(580,`if`),Tl(),Tw(581,` (`),zi$1(582,`span`,41),Tw(583,`this`),Tl(),Tw(584,`._env.EnvironmentName == `),zi$1(585,`span`,48),Tw(586,`"Test"`),Tl(),Tw(587,`)
                            {
                                `),zi$1(588,`span`,41),Tw(589,`if`),Tl(),Tw(590,` (claim.Value == `),zi$1(591,`span`,48),Tw(592,`"0.0.0.0"`),Tl(),Tw(593,`)
                                {
                                    `),zi$1(594,`span`,41),Tw(595,`await`),Tl(),Tw(596,` Task.FromException(`),zi$1(597,`span`,41),Tw(598,`new`),Tl(),Tw(599,` SecurityTokenRefreshException(`),zi$1(600,`span`,48),Tw(601,`$"This is a test. PValid:  `),zi$1(602,`span`,56),Tw(603,`{pValid}`),Tl(),Tw(604,` Current: `),zi$1(605,`span`,56),Tw(606,`{current}`),Tl(),Tw(607,` ClientId: `),zi$1(608,`span`,56),Tw(609,`{clientId}`),Tl(),Tw(610,`"`),Tl(),Tw(611,`));
                                }
                            }
                            `),zi$1(612,`span`,41),Tw(613,`else`),Tl(),Tw(614,` `),zi$1(615,`span`,41),Tw(616,`if`),Tl(),Tw(617,` (identity.ClientIp != claim.Value)
                            {
                                LogBlockedRequest(context, identity, `),zi$1(618,`span`,48),Tw(619,`$"New: `),zi$1(620,`span`,56),Tw(621,`{identity.ClientIp}`),Tl(),Tw(622,` Old: `),zi$1(623,`span`,56),Tw(624,`{claim.Value}`),Tl(),Tw(625,`"`),Tl(),Tw(626,`);
                                `),zi$1(627,`span`,41),Tw(628,`await`),Tl(),Tw(629,` ReturnSecurityTokenRefreshRate(context, `),zi$1(630,`span`,48),Tw(631,`"SecurityTokenRefreshRate"`),Tl(),Tw(632,`, `),zi$1(633,`span`,48),Tw(634,`"Please refresh your IP"`),Tl(),Tw(635,`);
                                `),zi$1(636,`span`,41),Tw(637,`return`),Tl(),Tw(638,`;
                            }
                        }

                    }
                }

                `),zi$1(639,`span`,40),Tw(640,`#`),zi$1(641,`span`,41),Tw(642,`region`),Tl(),Tw(643,` NOT securityTokenRefreshOnly`),Tl(),Tw(644,`
                `),zi$1(645,`span`,41),Tw(646,`if`),Tl(),Tw(647,` (!_securityTokenRefreshOnly)
                {
                    `),zi$1(648,`span`,41),Tw(649,`if`),Tl(),Tw(650,` (`),zi$1(651,`span`,41),Tw(652,`this`),Tl(),Tw(653,`._env.EnvironmentName == `),zi$1(654,`span`,48),Tw(655,`"Test"`),Tl(),Tw(656,`)
                    {
                        `),zi$1(657,`span`,41),Tw(658,`if`),Tl(),Tw(659,` (clientIp == `),zi$1(660,`span`,48),Tw(661,`"0.0.0.0"`),Tl(),Tw(662,`)
                        {
                            `),zi$1(663,`span`,41),Tw(664,`await`),Tl(),Tw(665,` Task.FromException(`),zi$1(666,`span`,41),Tw(667,`new`),Tl(),Tw(668,` MatchingRulesException(`),zi$1(669,`span`,48),Tw(670,`$"This is a test. ClientIp: `),zi$1(671,`span`,56),Tw(672,`{identity.ClientIp}`),Tl(),Tw(673,`"`),Tl(),Tw(674,`));
                        }
                    }

                    IEnumerable<RateLimitRule> rules = `),zi$1(675,`span`,46),Tw(676,`null`),Tl(),Tw(677,`;
                    rules = `),zi$1(678,`span`,41),Tw(679,`await`),Tl(),Tw(680,` _processor.GetMatchingRulesAsync(identity, context.RequestAborted);
                    `),zi$1(681,`span`,41),Tw(682,`if`),Tl(),Tw(683,` (rules == `),zi$1(684,`span`,46),Tw(685,`null`),Tl(),Tw(686,`)
                    {
                        `),zi$1(687,`span`,41),Tw(688,`if`),Tl(),Tw(689,` (`),zi$1(690,`span`,41),Tw(691,`this`),Tl(),Tw(692,`._env.EnvironmentName == `),zi$1(693,`span`,48),Tw(694,`"Test"`),Tl(),Tw(695,`)
                        {
                            `),zi$1(696,`span`,41),Tw(697,`await`),Tl(),Tw(698,` Task.FromException(`),zi$1(699,`span`,41),Tw(700,`new`),Tl(),Tw(701,` MatchingRulesException(`),zi$1(702,`span`,48),Tw(703,`$"This is a test. ClientIp: `),zi$1(704,`span`,56),Tw(705,`{identity.ClientIp}`),Tl(),Tw(706,`"`),Tl(),Tw(707,`));
                        }
                        `),zi$1(708,`span`,41),Tw(709,`else`),Tl(),Tw(710,`
                        {
                            `),zi$1(711,`span`,41),Tw(712,`await`),Tl(),Tw(713,` ReturnSecurityTokenRefreshRate(context, `),zi$1(714,`span`,48),Tw(715,`"MatchingRulesException"`),Tl(),Tw(716,`, `),zi$1(717,`span`,48),Tw(718,`$"Matching rules is null. Your IP address is: `),zi$1(719,`span`,56),Tw(720,`{identity.ClientIp}`),Tl(),Tw(721,`"`),Tl(),Tw(722,`);
                            `),zi$1(723,`span`,41),Tw(724,`return`),Tl(),Tw(725,`;
                        }
                    }

                    `),zi$1(726,`span`,41),Tw(727,`var`),Tl(),Tw(728,` rulesDict = `),zi$1(729,`span`,41),Tw(730,`new`),Tl(),Tw(731,` Dictionary<RateLimitRule, RateLimitCounter>();

                    `),zi$1(732,`span`,41),Tw(733,`foreach`),Tl(),Tw(734,` (`),zi$1(735,`span`,41),Tw(736,`var`),Tl(),Tw(737,` rule `),zi$1(738,`span`,41),Tw(739,`in`),Tl(),Tw(740,` rules)
                    {
                        `),zi$1(741,`span`,55),Tw(742,`// increment counter`),Tl(),Tw(743,`
                        `),zi$1(744,`span`,41),Tw(745,`var`),Tl(),Tw(746,` rateLimitCounter = `),zi$1(747,`span`,41),Tw(748,`await`),Tl(),Tw(749,` _processor.ProcessRequestAsync(identity, rule, context.RequestAborted);

                        `),zi$1(750,`span`,41),Tw(751,`if`),Tl(),Tw(752,` (rule.Limit > `),zi$1(753,`span`,57),Tw(754,`0`),Tl(),Tw(755,`)
                        {
                            `),zi$1(756,`span`,55),Tw(757,`// check if key expired`),Tl(),Tw(758,`
                            `),zi$1(759,`span`,41),Tw(760,`if`),Tl(),Tw(761,` (rateLimitCounter.Timestamp + rule.PeriodTimespan.Value < DateTime.UtcNow)
                            {
                                `),zi$1(762,`span`,41),Tw(763,`continue`),Tl(),Tw(764,`;
                            }

                            `),zi$1(765,`span`,55),Tw(766,`// check if limit is reached`),Tl(),Tw(767,`
                            `),zi$1(768,`span`,41),Tw(769,`if`),Tl(),Tw(770,` (rateLimitCounter.Count > rule.Limit)
                            {
                                `),zi$1(771,`span`,55),Tw(772,`//compute retry after value`),Tl(),Tw(773,`
                                `),zi$1(774,`span`,41),Tw(775,`var`),Tl(),Tw(776,` retryAfter = rateLimitCounter.Timestamp.RetryAfterFrom(rule);

                                `),zi$1(777,`span`,55),Tw(778,`// log blocked request`),Tl(),Tw(779,`
                                `),zi$1(780,`span`,55),Tw(781,`//LogBlockedRequest(context, identity, rateLimitCounter, rule);`),Tl(),Tw(782,`

                                `),zi$1(783,`span`,41),Tw(784,`if`),Tl(),Tw(785,` (_options.RequestBlockedBehaviorAsync != `),zi$1(786,`span`,46),Tw(787,`null`),Tl(),Tw(788,`)
                                {
                                    `),zi$1(789,`span`,41),Tw(790,`await`),Tl(),Tw(791,` _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                                }

                                `),zi$1(792,`span`,41),Tw(793,`if`),Tl(),Tw(794,` (`),zi$1(795,`span`,41),Tw(796,`this`),Tl(),Tw(797,`._env.EnvironmentName == `),zi$1(798,`span`,48),Tw(799,`"Test"`),Tl(),Tw(800,`)
                                {
                                    `),zi$1(801,`span`,41),Tw(802,`await`),Tl(),Tw(803,` Task.FromException(`),zi$1(804,`span`,41),Tw(805,`new`),Tl(),Tw(806,` RateLimitMiddlewareException(`),zi$1(807,`span`,48),Tw(808,`$"This is a test. rateLimitCounter.Count `),zi$1(809,`span`,56),Tw(810,`{rateLimitCounter.Count}`),Tl(),Tw(811,` rule.Limit: `),zi$1(812,`span`,56),Tw(813,`{rule.Limit}`),Tl(),Tw(814,` ClientIp: `),zi$1(815,`span`,56),Tw(816,`{identity.ClientIp}`),Tl(),Tw(817,`"`),Tl(),Tw(818,`));
                                }

                                `),zi$1(819,`span`,41),Tw(820,`if`),Tl(),Tw(821,` (!rule.MonitorMode)
                                {
                                    `),zi$1(822,`span`,55),Tw(823,`// break execution`),Tl(),Tw(824,`
                                    `),zi$1(825,`span`,41),Tw(826,`await`),Tl(),Tw(827,` ReturnQuotaExceededResponse(context, rule, retryAfter, identity.ClientIp);

                                    `),zi$1(828,`span`,41),Tw(829,`return`),Tl(),Tw(830,`;
                                }
                            }
                        }
                        `),zi$1(831,`span`,55),Tw(832,`// if limit is zero or less, block the request.`),Tl(),Tw(833,`
                        `),zi$1(834,`span`,41),Tw(835,`else`),Tl(),Tw(836,`
                        {
                            `),zi$1(837,`span`,55),Tw(838,`// log blocked request`),Tl(),Tw(839,`
                            `),zi$1(840,`span`,55),Tw(841,`//LogBlockedRequest(context, identity, rateLimitCounter, rule);`),Tl(),Tw(842,`

                            `),zi$1(843,`span`,41),Tw(844,`if`),Tl(),Tw(845,` (_options.RequestBlockedBehaviorAsync != `),zi$1(846,`span`,46),Tw(847,`null`),Tl(),Tw(848,`)
                            {
                                `),zi$1(849,`span`,41),Tw(850,`await`),Tl(),Tw(851,` _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                            }

                            `),zi$1(852,`span`,41),Tw(853,`if`),Tl(),Tw(854,` (`),zi$1(855,`span`,41),Tw(856,`this`),Tl(),Tw(857,`._env.EnvironmentName == `),zi$1(858,`span`,48),Tw(859,`"Test"`),Tl(),Tw(860,`)
                            {
                                `),zi$1(861,`span`,41),Tw(862,`await`),Tl(),Tw(863,` Task.FromException(`),zi$1(864,`span`,41),Tw(865,`new`),Tl(),Tw(866,` RateLimitMiddlewareException(`),zi$1(867,`span`,48),Tw(868,`$"This is a test. rateLimitCounter.Count `),zi$1(869,`span`,56),Tw(870,`{rateLimitCounter.Count}`),Tl(),Tw(871,` rule.Limit: `),zi$1(872,`span`,56),Tw(873,`{rule.Limit}`),Tl(),Tw(874,` ClientIp: `),zi$1(875,`span`,56),Tw(876,`{identity.ClientIp}`),Tl(),Tw(877,`"`),Tl(),Tw(878,`));
                            }

                            `),zi$1(879,`span`,41),Tw(880,`if`),Tl(),Tw(881,` (!rule.MonitorMode)
                            {
                                `),zi$1(882,`span`,55),Tw(883,`// break execution (Int32 max used to represent infinity)`),Tl(),Tw(884,`
                                `),zi$1(885,`span`,41),Tw(886,`await`),Tl(),Tw(887,` ReturnQuotaExceededResponse(context, rule, `),zi$1(888,`span`,47),Tw(889,`int`),Tl(),Tw(890,`.MaxValue.ToString(System.Globalization.CultureInfo.InvariantCulture), identity.ClientIp);

                                `),zi$1(891,`span`,41),Tw(892,`return`),Tl(),Tw(893,`;
                            }
                        }

                        rulesDict.Add(rule, rateLimitCounter);
                    }

                    `),zi$1(894,`span`,55),Tw(895,`// set X-Rate-Limit headers for the longest period`),Tl(),Tw(896,`
                    `),zi$1(897,`span`,41),Tw(898,`if`),Tl(),Tw(899,` (rulesDict.Count != `),zi$1(900,`span`,57),Tw(901,`0`),Tl(),Tw(902,` && !_options.DisableRateLimitHeaders)
                    {
                        `),zi$1(903,`span`,41),Tw(904,`var`),Tl(),Tw(905,` rule = rulesDict.OrderByDescending(x => x.Key.PeriodTimespan).FirstOrDefault();
                        `),zi$1(906,`span`,41),Tw(907,`var`),Tl(),Tw(908,` headers = _processor.GetRateLimitHeaders(rule.Value, rule.Key, context.RequestAborted);

                        headers.Context = context;

                        context.Response.OnStarting(SetRateLimitHeaders, state: headers);
                    }
                }
                `),zi$1(909,`span`,40),Tw(910,`#`),zi$1(911,`span`,41),Tw(912,`endregion`),Tl()(),Tw(913,`
            }

            `),zi$1(914,`span`,41),Tw(915,`if`),Tl(),Tw(916,` (`),zi$1(917,`span`,41),Tw(918,`this`),Tl(),Tw(919,`._env.EnvironmentName == `),zi$1(920,`span`,48),Tw(921,`"Test"`),Tl(),Tw(922,`)
            {
                `),zi$1(923,`span`,41),Tw(924,`await`),Tl(),Tw(925,` Task.FromResult(`),zi$1(926,`span`,46),Tw(927,`true`),Tl(),Tw(928,`);
            }
            `),zi$1(929,`span`,41),Tw(930,`else`),Tl(),Tw(931,`
            {
                `),zi$1(932,`span`,41),Tw(933,`await`),Tl(),Tw(934,` _next.Invoke(context);
            }
        }

        `),zi$1(935,`span`,53)(936,`span`,41),Tw(937,`private`),Tl(),Tw(938,` `),zi$1(939,`span`,41),Tw(940,`static`),Tl(),Tw(941,` Task `),zi$1(942,`span`,52),Tw(943,`ReturnSecurityTokenRefreshRate`),Tl(),Tw(944,`(`),zi$1(945,`span`,54),Tw(946,`HttpContext context, `),zi$1(947,`span`,47),Tw(948,`string`),Tl(),Tw(949,` key, `),zi$1(950,`span`,47),Tw(951,`string`),Tl(),Tw(952,` message`),Tl(),Tw(953,`)`),Tl(),Tw(954,`
        {
            context.Response.ContentType = `),zi$1(955,`span`,48),Tw(956,`"application/json"`),Tl(),Tw(957,`;
            context.Response.StatusCode = (`),zi$1(958,`span`,47),Tw(959,`int`),Tl(),Tw(960,`)HttpStatusCode.UnprocessableEntity;

            `),zi$1(961,`span`,41),Tw(962,`var`),Tl(),Tw(963,` result = SerializeObject(`),zi$1(964,`span`,41),Tw(965,`new`),Tl(),Tw(966,` ErrorListResult(key,
                        [
                            message
                        ]));

            `),zi$1(967,`span`,41),Tw(968,`return`),Tl(),Tw(969,` context.Response.WriteAsync(result);
        }

        `),zi$1(970,`span`,53)(971,`span`,41),Tw(972,`private`),Tl(),Tw(973,` `),zi$1(974,`span`,41),Tw(975,`static`),Tl(),Tw(976,` `),zi$1(977,`span`,47),Tw(978,`string`),Tl(),Tw(979,` `),zi$1(980,`span`,52),Tw(981,`SerializeObject`),Tl(),Tw(982,`(`),zi$1(983,`span`,54)(984,`span`,47),Tw(985,`object`),Tl(),Tw(986,` obj`),Tl(),Tw(987,`)`),Tl(),Tw(988,`
            => JsonConvert.SerializeObject(obj, `),zi$1(989,`span`,41),Tw(990,`new`),Tl(),Tw(991,` JsonSerializerSettings
            {
                ContractResolver = `),zi$1(992,`span`,41),Tw(993,`new`),Tl(),Tw(994,` DefaultContractResolver
                {
                    NamingStrategy = `),zi$1(995,`span`,41),Tw(996,`new`),Tl(),Tw(997,` CamelCaseNamingStrategy(`),zi$1(998,`span`,46),Tw(999,`true`),Tl(),Tw(1e3,`, `),zi$1(1001,`span`,46),Tw(1002,`true`),Tl(),Tw(1003,`)
                }
            });

        `),zi$1(1004,`span`,53)(1005,`span`,41),Tw(1006,`public`),Tl(),Tw(1007,` `),zi$1(1008,`span`,41),Tw(1009,`virtual`),Tl(),Tw(1010,` Task `),zi$1(1011,`span`,52),Tw(1012,`ReturnQuotaExceededResponse`),Tl(),Tw(1013,`(`),zi$1(1014,`span`,54),Tw(1015,`HttpContext httpContext, RateLimitRule rule, `),zi$1(1016,`span`,47),Tw(1017,`string`),Tl(),Tw(1018,` retryAfter, `),zi$1(1019,`span`,47),Tw(1020,`string`),Tl(),Tw(1021,` clientIp`),Tl(),Tw(1022,`)`),Tl(),Tw(1023,`
        {
            `),zi$1(1024,`span`,55),Tw(1025,`//Use Endpoint QuotaExceededResponse`),Tl(),Tw(1026,`
            `),zi$1(1027,`span`,41),Tw(1028,`if`),Tl(),Tw(1029,` (rule.QuotaExceededResponse != `),zi$1(1030,`span`,46),Tw(1031,`null`),Tl(),Tw(1032,`)
            {
                _options.QuotaExceededResponse = rule.QuotaExceededResponse;
            }
            `),zi$1(1033,`span`,41),Tw(1034,`var`),Tl(),Tw(1035,` message = `),zi$1(1036,`span`,47),Tw(1037,`string`),Tl(),Tw(1038,`.Format(
                    _options.QuotaExceededResponse?.Content ??
                    _options.QuotaExceededMessage ??
                    `),zi$1(1039,`span`,48),Tw(1040,`"Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP adress is {3}"`),Tl(),Tw(1041,`,
                    rule.Limit,
                    rule.PeriodTimespan.HasValue ? FormatPeriodTimespan(rule.PeriodTimespan.Value) : rule.Period, retryAfter, clientIp
             );

            `),zi$1(1042,`span`,41),Tw(1043,`if`),Tl(),Tw(1044,` (!_options.DisableRateLimitHeaders)
            {
                httpContext.Response.Headers.RetryAfter = retryAfter;
            }

            httpContext.Response.ContentType = _options.QuotaExceededResponse?.ContentType ?? `),zi$1(1045,`span`,48),Tw(1046,`"text/plain"`),Tl(),Tw(1047,`;
            httpContext.Response.StatusCode = _options.QuotaExceededResponse?.StatusCode ?? _options.HttpStatusCode;


            `),zi$1(1048,`span`,41),Tw(1049,`var`),Tl(),Tw(1050,` result = SerializeObject(`),zi$1(1051,`span`,41),Tw(1052,`new`),Tl(),Tw(1053,` ErrorListResult(`),zi$1(1054,`span`,48),Tw(1055,`"QuotaExceeded"`),Tl(),Tw(1056,`,
                        [
                            message
                        ]));

            `),zi$1(1057,`span`,41),Tw(1058,`return`),Tl(),Tw(1059,` httpContext.Response.WriteAsync(result);
        }

        `),zi$1(1060,`span`,53)(1061,`span`,41),Tw(1062,`private`),Tl(),Tw(1063,` `),zi$1(1064,`span`,41),Tw(1065,`static`),Tl(),Tw(1066,` `),zi$1(1067,`span`,47),Tw(1068,`string`),Tl(),Tw(1069,` `),zi$1(1070,`span`,52),Tw(1071,`FormatPeriodTimespan`),Tl(),Tw(1072,`(`),zi$1(1073,`span`,54),Tw(1074,`TimeSpan period`),Tl(),Tw(1075,`)`),Tl(),Tw(1076,`
        {
            `),zi$1(1077,`span`,41),Tw(1078,`var`),Tl(),Tw(1079,` sb = `),zi$1(1080,`span`,41),Tw(1081,`new`),Tl(),Tw(1082,` StringBuilder();

            `),zi$1(1083,`span`,41),Tw(1084,`if`),Tl(),Tw(1085,` (period.Days > `),zi$1(1086,`span`,57),Tw(1087,`0`),Tl(),Tw(1088,`)
            {
                sb.Append(`),zi$1(1089,`span`,48),Tw(1090,`$"`),zi$1(1091,`span`,56),Tw(1092,`{period.Days}`),Tl(),Tw(1093,`d"`),Tl(),Tw(1094,`);
            }

            `),zi$1(1095,`span`,41),Tw(1096,`if`),Tl(),Tw(1097,` (period.Hours > `),zi$1(1098,`span`,57),Tw(1099,`0`),Tl(),Tw(1100,`)
            {
                sb.Append(`),zi$1(1101,`span`,48),Tw(1102,`$"`),zi$1(1103,`span`,56),Tw(1104,`{period.Hours}`),Tl(),Tw(1105,`h"`),Tl(),Tw(1106,`);
            }

            `),zi$1(1107,`span`,41),Tw(1108,`if`),Tl(),Tw(1109,` (period.Minutes > `),zi$1(1110,`span`,57),Tw(1111,`0`),Tl(),Tw(1112,`)
            {
                sb.Append(`),zi$1(1113,`span`,48),Tw(1114,`$"`),zi$1(1115,`span`,56),Tw(1116,`{period.Minutes}`),Tl(),Tw(1117,`m"`),Tl(),Tw(1118,`);
            }

            `),zi$1(1119,`span`,41),Tw(1120,`if`),Tl(),Tw(1121,` (period.Seconds > `),zi$1(1122,`span`,57),Tw(1123,`0`),Tl(),Tw(1124,`)
            {
                sb.Append(`),zi$1(1125,`span`,48),Tw(1126,`$"`),zi$1(1127,`span`,56),Tw(1128,`{period.Seconds}`),Tl(),Tw(1129,`s"`),Tl(),Tw(1130,`);
            }

            `),zi$1(1131,`span`,41),Tw(1132,`if`),Tl(),Tw(1133,` (period.Milliseconds > `),zi$1(1134,`span`,57),Tw(1135,`0`),Tl(),Tw(1136,`)
            {
                sb.Append(`),zi$1(1137,`span`,48),Tw(1138,`$"`),zi$1(1139,`span`,56),Tw(1140,`{period.Milliseconds}`),Tl(),Tw(1141,`ms"`),Tl(),Tw(1142,`);
            }

            `),zi$1(1143,`span`,41),Tw(1144,`return`),Tl(),Tw(1145,` sb.ToString();
        }

        `),zi$1(1146,`span`,55),Tw(1147,`//protected abstract void LogBlockedRequest(HttpContext httpContext, ClientRequestIdentity identity, RateLimitCounter counter, RateLimitRule rule);`),Tl(),Tw(1148,`
        `),zi$1(1149,`span`,53)(1150,`span`,41),Tw(1151,`protected`),Tl(),Tw(1152,` `),zi$1(1153,`span`,41),Tw(1154,`abstract`),Tl(),Tw(1155,` `),zi$1(1156,`span`,41),Tw(1157,`void`),Tl(),Tw(1158,` `),zi$1(1159,`span`,52),Tw(1160,`LogBlockedRequest`),Tl(),Tw(1161,`(`),zi$1(1162,`span`,54),Tw(1163,`HttpContext httpContext, ClientRequestIdentity identity, `),zi$1(1164,`span`,47),Tw(1165,`string`),Tl(),Tw(1166,` message`),Tl(),Tw(1167,`)`),Tl(),Tw(1168,`;
        `),zi$1(1169,`span`,53)(1170,`span`,41),Tw(1171,`private`),Tl(),Tw(1172,` Task `),zi$1(1173,`span`,52),Tw(1174,`SetRateLimitHeaders`),Tl(),Tw(1175,`(`),zi$1(1176,`span`,54)(1177,`span`,47),Tw(1178,`object`),Tl(),Tw(1179,` rateLimitHeaders`),Tl(),Tw(1180,`)`),Tl(),Tw(1181,`
        {
            `),zi$1(1182,`span`,41),Tw(1183,`var`),Tl(),Tw(1184,` headers = (RateLimitHeaders)rateLimitHeaders;

            headers.Context.Response.Headers[`),zi$1(1185,`span`,48),Tw(1186,`"X-Rate-Limit-Limit"`),Tl(),Tw(1187,`] = headers.Limit;
            headers.Context.Response.Headers[`),zi$1(1188,`span`,48),Tw(1189,`"X-Rate-Limit-Remaining"`),Tl(),Tw(1190,`] = headers.Remaining;
            headers.Context.Response.Headers[`),zi$1(1191,`span`,48),Tw(1192,`"X-Rate-Limit-Reset"`),Tl(),Tw(1193,`] = headers.Reset;

            `),zi$1(1194,`span`,41),Tw(1195,`return`),Tl(),Tw(1196,` Task.CompletedTask;
        }
    }
}`),Tl()(),zi$1(1197,`h2`,58)(1198,`span`),Tw(1199,`Testing of RateLimitMiddleware With MyTested Library`),Tl(),zi$1(1200,`a`,59),Tw(1201,`#`),Tl()(),zi$1(1202,`p`),Tw(1203,`From the start, we need to keep in mind that MyTested does not provide support for middleware testing. So, we found a work around which is not 100% accurate. The main idea is that you have to setup the middleware manually in the right place to be logically correct. In our case, we’ve got `),zi$1(1204,`code`),Tw(1205,`GetTagsWithRateLimitMiddleware`),Tl(),Tw(1206,` and `),zi$1(1207,`code`),Tw(1208,`GetAllWithRateLimitMiddleware`),Tl(),Tw(1209,` from `),zi$1(1210,`a`,60),Tw(1211,`StaticTestData.cs`),Tl(),Tw(1212,`). Also, RateLimitMiddleware needs shared `),zi$1(1213,`code`),Tw(1214,`MemoryCache`),Tl(),Tw(1215,`. On the other hand, MyTested just simulates shared `),zi$1(1216,`code`),Tw(1217,`MeroryCache`),Tl(),Tw(1218,`. So, we modified source code of MyTested to work with the actual `),zi$1(1219,`code`),Tw(1220,`MeroryCache`),Tl(),Tw(1221,` Also, we introduced an option `),zi$1(1222,`code`),Tw(1223,`”ReplaceMemoryCache": false`),Tl(),Tw(1224,` (See `),zi$1(1225,`a`,61),Tw(1226,`testsettings.json`),Tl(),Tw(1227,`). From our modified source code of RateLimitMiddleware, you can see that we try to keep the original functional and add JWT token refresh concept also. As a result, we’ve got following limitations:`),Tl(),zi$1(1228,`ul`)(1229,`li`),Tw(1230,`the `),zi$1(1231,`code`),Tw(1232,`clientId`),Tl(),Tw(1233,` is taken from JWT token only`),Tl(),zi$1(1234,`li`),Tw(1235,`the `),zi$1(1236,`code`),Tw(1237,`clientIp`),Tl(),Tw(1238,` is taken from `),zi$1(1239,`code`),Tw(1240,`context.Connection.RemoteIpAddress`),Tl(),Tw(1241,` only`),Tl(),zi$1(1242,`li`)(1243,`code`),Tw(1244,`ClientWhitelist`),Tl(),Tw(1245,` configuration option does not work with public endpoints, and it should be empty.
Also, the \u201Ccorrect way\u201D to configure it is following:`),Tl()(),zi$1(1246,`pre`,39)(1247,`code`),Tw(1248,`...
.UseRouting()
.InitializeRateLimit()
.UseMiddleware<IpRateLimitMiddleware>()
.UseAuthentication()
.UseAuthorization()
.UseMiddleware<ClientRateLimitMiddleware>()
...`),Tl()(),zi$1(1249,`p`),Tw(1250,`All our middleware tests are in `),zi$1(1251,`a`,62),Tw(1252,`RateLimit`),Tl(),Tw(1253,` folder. For token refresh concept, we’ve got just two tests: `),zi$1(1254,`code`),Tw(1255,`Edit_tag_with_refresh_token_should_fail`),Tl(),Tw(1256,` and `),zi$1(1257,`code`),Tw(1258,`Login_with_password_with_refresh_token_and_whitelisted_private_route_should_return_success_with_token`),Tl(),Tw(1259,`. One interesting idea of a test( See `),zi$1(1260,`a`,63),Tw(1261,`AsyncKeyedLockTest.cs`),Tl(),Tw(1262,`) comes from `),zi$1(1263,`a`,64),Tw(1264,`AsyncKeyedLock`),Tl(),Tw(1265,`.
Also, we made some additional small changes in AspNetCoreRateLimit library by borrowing some ideas from `),zi$1(1266,`a`,65),Tw(1267,`Edi.CacheAside.InMemory`),Tl(),Tw(1268,`. Finaly, we’ve used following settings for our tests project:`),Tl(),zi$1(1269,`h3`,66)(1270,`span`),Tw(1271,`Test Settings`),Tl(),zi$1(1272,`a`,67),Tw(1273,`#`),Tl()(),zi$1(1274,`pre`,68)(1275,`code`),Tw(1276,` `),zi$1(1277,`span`,69),Tw(1278,`{`),Tl(),Tw(1279,`
  `),zi$1(1280,`span`,70),Tw(1281,`"General"`),Tl(),zi$1(1282,`span`,69),Tw(1283,`:`),Tl(),Tw(1284,` `),zi$1(1285,`span`,69),Tw(1286,`{`),Tl(),Tw(1287,`
    `),zi$1(1288,`span`,70),Tw(1289,`"ReplaceMemoryCache"`),Tl(),zi$1(1290,`span`,69),Tw(1291,`:`),Tl(),Tw(1292,` `),zi$1(1293,`span`,46)(1294,`span`,41),Tw(1295,`false`),Tl()(),Tw(1296,`
  `),zi$1(1297,`span`,69),Tw(1298,`}`),Tl(),zi$1(1299,`span`,69),Tw(1300,`,`),Tl(),Tw(1301,`

  `),zi$1(1302,`span`,70),Tw(1303,`"ApplicationSettings"`),Tl(),zi$1(1304,`span`,69),Tw(1305,`:`),Tl(),Tw(1306,` `),zi$1(1307,`span`,69),Tw(1308,`{`),Tl(),Tw(1309,`
    `),zi$1(1310,`span`,70),Tw(1311,`"SecurityTokenDescriptorKey"`),Tl(),zi$1(1312,`span`,69),Tw(1313,`:`),Tl(),Tw(1314,` `),zi$1(1315,`span`,48),Tw(1316,`"test1223dfgdfkffpie"`),Tl(),zi$1(1317,`span`,69),Tw(1318,`,`),Tl(),Tw(1319,`
    `),zi$1(1320,`span`,70),Tw(1321,`"SecurityTokenDescriptorExpiresInMinutes"`),Tl(),zi$1(1322,`span`,69),Tw(1323,`:`),Tl(),Tw(1324,` `),zi$1(1325,`span`,57),Tw(1326,`10`),Tl(),zi$1(1327,`span`,69),Tw(1328,`,`),Tl(),Tw(1329,`
    `),zi$1(1330,`span`,70),Tw(1331,`"SecurityTokenRefreshRate"`),Tl(),zi$1(1332,`span`,69),Tw(1333,`:`),Tl(),Tw(1334,` `),zi$1(1335,`span`,57),Tw(1336,`0.5`),Tl(),zi$1(1337,`span`,69),Tw(1338,`,`),Tl(),Tw(1339,`
    `),zi$1(1340,`span`,70),Tw(1341,`"MaxFailedAccessAttempts"`),Tl(),zi$1(1342,`span`,69),Tw(1343,`:`),Tl(),Tw(1344,` `),zi$1(1345,`span`,57),Tw(1346,`5`),Tl(),zi$1(1347,`span`,69),Tw(1348,`,`),Tl(),Tw(1349,`
    `),zi$1(1350,`span`,70),Tw(1351,`"DefaultLockoutTimeSpanInMinutes"`),Tl(),zi$1(1352,`span`,69),Tw(1353,`:`),Tl(),Tw(1354,` `),zi$1(1355,`span`,57),Tw(1356,`0`),Tl(),zi$1(1357,`span`,69),Tw(1358,`,`),Tl(),Tw(1359,`
    `),zi$1(1360,`span`,70),Tw(1361,`"ExperimentalIpAddress"`),Tl(),zi$1(1362,`span`,69),Tw(1363,`:`),Tl(),Tw(1364,` `),zi$1(1365,`span`,48),Tw(1366,`"::1"`),Tl(),Tw(1367,`
  `),zi$1(1368,`span`,69),Tw(1369,`}`),Tl(),zi$1(1370,`span`,69),Tw(1371,`,`),Tl(),Tw(1372,`

  `),zi$1(1373,`span`,70),Tw(1374,`"IpRateLimiting"`),Tl(),zi$1(1375,`span`,69),Tw(1376,`:`),Tl(),Tw(1377,` `),zi$1(1378,`span`,69),Tw(1379,`{`),Tl(),Tw(1380,`
    `),zi$1(1381,`span`,70),Tw(1382,`"EnableEndpointRateLimiting"`),Tl(),zi$1(1383,`span`,69),Tw(1384,`:`),Tl(),Tw(1385,` `),zi$1(1386,`span`,46)(1387,`span`,41),Tw(1388,`true`),Tl()(),zi$1(1389,`span`,69),Tw(1390,`,`),Tl(),Tw(1391,`
    `),zi$1(1392,`span`,70),Tw(1393,`"SecurityTokenRefreshRate"`),Tl(),zi$1(1394,`span`,69),Tw(1395,`:`),Tl(),Tw(1396,` `),zi$1(1397,`span`,57),Tw(1398,`0.5`),Tl(),zi$1(1399,`span`,69),Tw(1400,`,`),Tl(),Tw(1401,`
    `),zi$1(1402,`span`,70),Tw(1403,`"StackBlockedRequests"`),Tl(),zi$1(1404,`span`,69),Tw(1405,`:`),Tl(),Tw(1406,` `),zi$1(1407,`span`,46)(1408,`span`,41),Tw(1409,`false`),Tl()(),zi$1(1410,`span`,69),Tw(1411,`,`),Tl(),Tw(1412,`
    `),zi$1(1413,`span`,70),Tw(1414,`"RealIpHeader"`),Tl(),zi$1(1415,`span`,69),Tw(1416,`:`),Tl(),Tw(1417,` `),zi$1(1418,`span`,48),Tw(1419,`"X-Real-IP"`),Tl(),zi$1(1420,`span`,69),Tw(1421,`,`),Tl(),Tw(1422,`
    `),zi$1(1423,`span`,70),Tw(1424,`"HttpStatusCode"`),Tl(),zi$1(1425,`span`,69),Tw(1426,`:`),Tl(),Tw(1427,` `),zi$1(1428,`span`,57),Tw(1429,`429`),Tl(),zi$1(1430,`span`,69),Tw(1431,`,`),Tl(),Tw(1432,`
    `),zi$1(1433,`span`,70),Tw(1434,`"IpWhitelist"`),Tl(),zi$1(1435,`span`,69),Tw(1436,`:`),Tl(),Tw(1437,` `),zi$1(1438,`span`,69),Tw(1439,`[`),Tl(),Tw(1440,` `),zi$1(1441,`span`,48),Tw(1442,`"::1/10"`),Tl(),zi$1(1443,`span`,69),Tw(1444,`,`),Tl(),Tw(1445,` `),zi$1(1446,`span`,48),Tw(1447,`"192.168.0.0/24"`),Tl(),Tw(1448,` `),zi$1(1449,`span`,69),Tw(1450,`]`),Tl(),zi$1(1451,`span`,69),Tw(1452,`,`),Tl(),Tw(1453,`
    `),zi$1(1454,`span`,70),Tw(1455,`"EndpointWhitelist"`),Tl(),zi$1(1456,`span`,69),Tw(1457,`:`),Tl(),Tw(1458,` `),zi$1(1459,`span`,69),Tw(1460,`[`),Tl(),Tw(1461,`
      `),zi$1(1462,`span`,48),Tw(1463,`"post:/api/v1.0/identity"`),Tl(),zi$1(1464,`span`,69),Tw(1465,`,`),Tl(),Tw(1466,`
      `),zi$1(1467,`span`,48),Tw(1468,`"post:/api/v1.0/identity/login"`),Tl(),zi$1(1469,`span`,69),Tw(1470,`,`),Tl(),Tw(1471,`
      `),zi$1(1472,`span`,48),Tw(1473,`"get:/*.json"`),Tl(),zi$1(1474,`span`,69),Tw(1475,`,`),Tl(),Tw(1476,`
      `),zi$1(1477,`span`,48),Tw(1478,`"get:/*.js"`),Tl(),zi$1(1479,`span`,69),Tw(1480,`,`),Tl(),Tw(1481,`
      `),zi$1(1482,`span`,48),Tw(1483,`"get:/*.css"`),Tl(),zi$1(1484,`span`,69),Tw(1485,`,`),Tl(),Tw(1486,`
      `),zi$1(1487,`span`,48),Tw(1488,`"get:/*.ico"`),Tl(),Tw(1489,`
    `),zi$1(1490,`span`,69),Tw(1491,`]`),Tl(),zi$1(1492,`span`,69),Tw(1493,`,`),Tl(),Tw(1494,`
    `),zi$1(1495,`span`,70),Tw(1496,`"ClientWhitelist"`),Tl(),zi$1(1497,`span`,69),Tw(1498,`:`),Tl(),Tw(1499,` `),zi$1(1500,`span`,69),Tw(1501,`[`),Tl(),Tw(1502,` `),zi$1(1503,`span`,48),Tw(1504,`"ClientWhitelist@email.com1"`),Tl(),Tw(1505,` `),zi$1(1506,`span`,69),Tw(1507,`]`),Tl(),zi$1(1508,`span`,69),Tw(1509,`,`),Tl(),Tw(1510,`
    `),zi$1(1511,`span`,70),Tw(1512,`"QuotaExceededResponse"`),Tl(),zi$1(1513,`span`,69),Tw(1514,`:`),Tl(),Tw(1515,` `),zi$1(1516,`span`,69),Tw(1517,`{`),Tl(),Tw(1518,`
      `),zi$1(1519,`span`,70),Tw(1520,`"Content"`),Tl(),zi$1(1521,`span`,69),Tw(1522,`:`),Tl(),Tw(1523,` `),zi$1(1524,`span`,48),Tw(1525,`"Quota exceeded. Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP address is {3}"`),Tl(),zi$1(1526,`span`,69),Tw(1527,`,`),Tl(),Tw(1528,`
      `),zi$1(1529,`span`,70),Tw(1530,`"ContentType"`),Tl(),zi$1(1531,`span`,69),Tw(1532,`:`),Tl(),Tw(1533,` `),zi$1(1534,`span`,48),Tw(1535,`"application/json"`),Tl(),Tw(1536,`
    `),zi$1(1537,`span`,69),Tw(1538,`}`),Tl(),zi$1(1539,`span`,69),Tw(1540,`,`),Tl(),Tw(1541,`
    `),zi$1(1542,`span`,70),Tw(1543,`"GeneralRules"`),Tl(),zi$1(1544,`span`,69),Tw(1545,`:`),Tl(),Tw(1546,` `),zi$1(1547,`span`,69),Tw(1548,`[`),Tl(),Tw(1549,`
    `),zi$1(1550,`span`,69),Tw(1551,`]`),Tl(),Tw(1552,`
  `),zi$1(1553,`span`,69),Tw(1554,`}`),Tl(),zi$1(1555,`span`,69),Tw(1556,`,`),Tl(),Tw(1557,`

  `),zi$1(1558,`span`,70),Tw(1559,`"IpRateLimitPolicies"`),Tl(),zi$1(1560,`span`,69),Tw(1561,`:`),Tl(),Tw(1562,` `),zi$1(1563,`span`,69),Tw(1564,`{`),Tl(),Tw(1565,`
    `),zi$1(1566,`span`,70),Tw(1567,`"IpRules"`),Tl(),zi$1(1568,`span`,69),Tw(1569,`:`),Tl(),Tw(1570,` `),zi$1(1571,`span`,69),Tw(1572,`[`),Tl(),Tw(1573,`
    `),zi$1(1574,`span`,69),Tw(1575,`]`),Tl(),Tw(1576,`
  `),zi$1(1577,`span`,69),Tw(1578,`}`),Tl(),Tw(1579,`
`),zi$1(1580,`span`,69),Tw(1581,`}`),Tl()()(),zi$1(1582,`h2`,71)(1583,`span`),Tw(1584,`Proof of Concept`),Tl(),zi$1(1585,`a`,72),Tw(1586,`#`),Tl()(),zi$1(1587,`ol`)(1588,`li`),Tw(1589,`Clone `),zi$1(1590,`a`,30),Tw(1591,`our GitHub repository`),Tl()(),zi$1(1592,`li`),Tw(1593,`Follow the instruction form the Readme.md`),Tl(),zi$1(1594,`li`),Tw(1595,`Change following in `),zi$1(1596,`a`,42),Tw(1597,`appsettings.json`),Tl(),Tw(1598,`: `),zi$1(1599,`code`),Tw(1600,`SecurityTokenDescriptorExpiresInMinutes`),Tl(),Tw(1601,`: 10, `),zi$1(1602,`code`),Tw(1603,`SecurityTokenRefreshRate`),Tl(),Tw(1604,`: 0.9 (both places)`),Tl(),zi$1(1605,`li`),Tw(1606,`Sign-in as admin using menu: Home -> Sign-in`),Tl(),zi$1(1607,`li`),Tw(1608,`Go to menu Admin->Articles editor`),Tl(),zi$1(1609,`li`),Tw(1610,`Click on New Article button.`),Tl(),zi$1(1611,`li`),Tw(1612,`Fill in the form and wait for 2 minutes.`),Tl(),zi$1(1613,`li`),Tw(1614,`Click Submit button and Yes button`),Tl(),zi$1(1615,`li`),Tw(1616,`A drawer must show up asking to confirm password. It means that your JWT token expired, but you can refresh it.`),Tl()(),zi$1(1617,`h2`,73)(1618,`span`),Tw(1619,`Conclusion`),Tl(),zi$1(1620,`a`,74),Tw(1621,`#`),Tl()(),zi$1(1622,`p`),Tw(1623,`In this article, we introduced JWT token Refresh period concept and used a middleware to implement it. In fact, we used modified source code of RateLimitMiddleware from AspNetCoreRateLimit library. It means that it still can be used to limit public endpoints (See `),zi$1(1624,`a`,42),Tw(1625,`GeneralRules`),Tl(),Tw(1626,` example). We implemented a way for testing the middleware with MyTested library. Finally, we provided a compiled .NET application for proof of concept.`),Tl(),zi$1(1627,`h2`,75)(1628,`span`),Tw(1629,`Credits`),Tl(),zi$1(1630,`a`,76),Tw(1631,`#`),Tl()(),zi$1(1632,`ul`)(1633,`li`)(1634,`a`,77),Tw(1635,`Ivaylo Kenov`),Tl()(),zi$1(1636,`li`)(1637,`a`,78),Tw(1638,`Kalin Tsenkov`),Tl()(),zi$1(1639,`li`)(1640,`a`,79),Tw(1641,`Steve Smith`),Tl()(),zi$1(1642,`li`)(1643,`a`,80),Tw(1644,`Jason Taylor`),Tl()(),zi$1(1645,`li`)(1646,`a`,81),Tw(1647,`Stefan Prodan`),Tl()(),zi$1(1648,`li`)(1649,`a`,82),Tw(1650,`Mark Cilia Vincenti`),Tl()(),zi$1(1651,`li`)(1652,`a`,83),Tw(1653,`Jimmy Bogard`),Tl()(),zi$1(1654,`li`)(1655,`a`,84),Tw(1656,`Ben Morris`),Tl()()()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,jw(7,yi)),aD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,Cg,rd,cr,ir,Fa,u9,p9,Un$2,qi$1,_n,ji$1,Jo,Za,Al,ga$1,ma$1,So,Ve,pe$1,yu],encapsulation:2})}return a})();var ki=()=>({standalone:!0});function vi(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,74),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,75),tg(3,`nz-icon`,76),Tl()(),Sl()}}function Ni(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,74),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,75),Tw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var mt=110;var Un=(()=>{class a{destroyRef=_(ce);router=_(Te$1);#e=_(Z0);injector=_(ae);viewPort=_(p7);zone=_(fe);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=zt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){rV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-mt>640?this.width.set(640):this.width.set(this.windowWidth()-mt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-mt>640?this.width.set(640):this.width.set(i-mt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Oe(i).pipe(nV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`nz-blog-testing-angular-apps`]],features:[Fw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:206,vars:20,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-c8cadc22`,`nzTitle`,`Testing tools for Angular`],[`nzHref`,`#h-704dc335`,`nzTitle`,`Testing Angular app together with .NET Core app`],[`nzHref`,`#h-eacbc5c7`,`nzTitle`,`Using Signal type in Angular together with Reactive State library`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241110-testing-angular-apps.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[1,`pic-plus`,2,`text-align`,`center`],[`nzType`,`custom:zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:angular`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:ng-zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-row`,``,`nzJustify`,`center`,1,`p-t-24`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/angular-test-example/refs/heads/main/version-2/test-run.png`,`alt`,`test-run`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`href`,`https://cioina.azurewebsites.net/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/huajian123/ng-antd-admin`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/AndyT2503/angular-conduit-signals`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-angular/src`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ngrx/platform/tree/main/modules/component-store/src`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/AndyT2503/angular-conduit-signals/blob/dev/src/app/shared/store/auth.store.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0/wwwroot`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-c8cadc22`],[`onclick`,`window.location.hash = 'h-c8cadc22'`,1,`anchor`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/package.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/angular/angular/blob/main/adev/BUILD.bazel`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-javascript`],[1,`hljs-keyword`],[1,`hljs-title`,`class_`],[1,`hljs-string`],[`id`,`h-704dc335`],[`onclick`,`window.location.hash = 'h-704dc335'`,1,`anchor`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://cioina.azurewebsites.net/articles/dotnet-core-testing`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-test-example/tree/main/version-2`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-test-example/blob/main/version-2/home.store.spec.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/ng-zorro-antd-site`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/vitest-browser-angular`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/realworld-apps/realworld/blob/main/specs/api/README.md`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-vite-storybook/blob/main/src/stories/page.stories.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/apps/conduit-e2e/src/auth/auth.spec.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-eacbc5c7`],[`onclick`,`window.location.hash = 'h-eacbc5c7'`,1,`anchor`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/angular-test-example/refs/heads/main/vs.png`,`alt`,`vs`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/angular-test-example/refs/heads/main/ng-blog.png`,`alt`,`ng-blog`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`href`,`https://github.com/ngrx/platform`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-test-example/tree/main/version-1`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/libs/auth/data-access/src/auth.store.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/angular/angular/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ant-design/ant-design-icons/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ngrx/platform/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/huajian123`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/AndyT2503`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanoslig`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(zi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,vi,4,0,`ng-container`,5)(6,Ni,4,0,`ng-container`,5),Tl()()(),zi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),Tw(11,`Jump to top`),Tl()(),zi$1(12,`div`,3)(13,`nz-switch`,9),iD(),Ag(`ngModelChange`,function(g){return Sw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),zi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15),Tl()(),zi$1(20,`span`,16),Tw(21,` Testing Angular Applications`),tg(22,`span`,17)(23,`span`,18),zi$1(24,`a`,19),tg(25,`nz-icon`,20),Tl()(),zi$1(26,`article`,21)(27,`h2`,22)(28,`span`),Tw(29,`Introduction`),Tl(),zi$1(30,`a`,23),Tw(31,`#`),Tl()(),zi$1(32,`div`,24),tg(33,`nz-icon`,25),zi$1(34,`span`),Tw(35,`+`),Tl(),tg(36,`nz-icon`,26),zi$1(37,`span`),Tw(38,`=`),Tl(),tg(39,`nz-icon`,27),Tl(),zi$1(40,`div`,28),tg(41,`img`,29),Tl(),zi$1(42,`p`)(43,`a`,30),Tw(44,`Our Angular app`),Tl(),Tw(45,` Is based on `),zi$1(46,`a`,31),Tw(47,`ng-antd-admin`),Tl(),Tw(48,` combined with `),zi$1(49,`a`,32),Tw(50,`angular-conduit-signals`),Tl(),Tw(51,`. In addition, we use following Angular libraries direct form sources: `),zi$1(52,`a`,33),Tw(53,`NG-ZORRO components src`),Tl(),Tw(54,`, `),zi$1(55,`a`,34),Tw(56,`icons-angular src`),Tl(),Tw(57,` and `),zi$1(58,`a`,35),Tw(59,`component-store src`),Tl(),Tw(60,` with some minor changes. All our reactive states look similar to `),zi$1(61,`a`,36),Tw(62,`auth.store.ts`),Tl(),Tw(63,`
The app communicates with the server via REST API controllers built on top of .NET Core 10. The compiled bin code is on `),zi$1(64,`a`,37),Tw(65,`our GitHub repository`),Tl(),Tw(66,` together with `),zi$1(67,`a`,38),Tw(68,`compiled Angular app`),Tl()(),zi$1(69,`h2`,39)(70,`span`),Tw(71,`Testing tools for Angular`),Tl(),zi$1(72,`a`,40),Tw(73,`#`),Tl()(),zi$1(74,`p`),Tw(75,`We use the same tools/packages as in `),zi$1(76,`a`,41),Tw(77,`NG-ZORRO`),Tl(),Tw(78,`, which are the same as in `),zi$1(79,`a`,42),Tw(80,`TEST_DEPS`),Tl(),Tw(81,` plus `),zi$1(82,`code`),Tw(83,`puppeteer`),Tl(),Tw(84,`. In addition, Angular and NG-ZORRO have a lot of classes and functions ready to use right out of the box:`),Tl(),zi$1(85,`pre`,43)(86,`code`)(87,`span`,44),Tw(88,`import`),Tl(),Tw(89,` { `),zi$1(90,`span`,45),Tw(91,`ComponentFixture`),Tl(),Tw(92,`, `),zi$1(93,`span`,45),Tw(94,`TestBed`),Tl(),Tw(95,`, waitForAsync, inject `),zi$1(96,`span`,44),Tw(97,`as`),Tl(),Tw(98,` testInject } `),zi$1(99,`span`,44),Tw(100,`from`),Tl(),Tw(101,` `),zi$1(102,`span`,46),Tw(103,`'@angular/core/testing'`),Tl(),Tw(104,`;
`),zi$1(105,`span`,44),Tw(106,`import`),Tl(),Tw(107,` { dispatchMouseEvent, dispatchFakeEvent, typeInElement } `),zi$1(108,`span`,44),Tw(109,`from`),Tl(),Tw(110,` `),zi$1(111,`span`,46),Tw(112,`'ng-zorro-antd/core/testing'`),Tl(),Tw(113,`;
`),zi$1(114,`span`,44),Tw(115,`import`),Tl(),Tw(116,` { provideNzIconsTesting } `),zi$1(117,`span`,44),Tw(118,`from`),Tl(),Tw(119,` `),zi$1(120,`span`,46),Tw(121,`'ng-zorro-antd/icon/testing'`),Tl(),Tw(122,`;`),Tl()(),zi$1(123,`h2`,47)(124,`span`),Tw(125,`Testing Angular app together with .NET Core app`),Tl(),zi$1(126,`a`,48),Tw(127,`#`),Tl()(),zi$1(128,`p`),Tw(129,`Our actual(up to date) `),zi$1(130,`a`,49),Tw(131,`test project`),Tl(),Tw(132,` for our .NET Core app uses in memory database which is very convenient for testing (read more about it `),zi$1(133,`a`,50),Tw(134,`here`),Tl(),Tw(135,` ) Next, would be great to test on a real database. So, all our Angular test from `),zi$1(136,`a`,51),Tw(137,`our GitHub repository`),Tl(),Tw(138,` will connect with our .NET Core app which is connected to real MS SQL database. Therefore, it represents a type of integration test.
All the files ending in `),zi$1(139,`a`,52),Tw(140,`*.store.spec.ts`),Tl(),Tw(141,` can be considered as real API testing which is an alternative to `),zi$1(142,`a`,53),Tw(143,`Karma/Puppeteer`),Tl(),Tw(144,`, `),zi$1(145,`a`,54),Tw(146,`Vitest`),Tl(),Tw(147,`, `),zi$1(148,`a`,55),Tw(149,`Bruno`),Tl(),Tw(150,`, `),zi$1(151,`a`,56),Tw(152,`Storybook`),Tl(),Tw(153,` or `),zi$1(154,`a`,57),Tw(155,`Playwright`),Tl()(),zi$1(156,`h2`,58)(157,`span`),Tw(158,`Using Signal type in Angular together with Reactive State library`),Tl(),zi$1(159,`a`,59),Tw(160,`#`),Tl()(),zi$1(161,`div`,28),tg(162,`img`,60),Tl(),zi$1(163,`div`,28),tg(164,`img`,61),Tl(),zi$1(165,`p`),Tw(166,`Before Signal type became native in Angular, we used `),zi$1(167,`a`,62),Tw(168,`Reactive State library`),Tl(),Tw(169,` for `),zi$1(170,`a`,63),Tw(171,`our integration tests`),Tl(),Tw(172,`. Now, the library has implemented two ways of using Signals: `),zi$1(173,`a`,64),Tw(174,`@ngrx/signals`),Tl(),Tw(175,` and `),zi$1(176,`a`,36),Tw(177,`@ngrx/component-store`),Tl(),Tw(178,`. We use the second one direct from sources.`),Tl(),zi$1(179,`h2`,65)(180,`span`),Tw(181,`Credits`),Tl(),zi$1(182,`a`,66),Tw(183,`#`),Tl()(),zi$1(184,`ul`)(185,`li`)(186,`a`,67),Tw(187,`Angular contributors`),Tl()(),zi$1(188,`li`)(189,`a`,68),Tw(190,`NG-ZORRO contributors`),Tl()(),zi$1(191,`li`)(192,`a`,69),Tw(193,`Ant Design contributors`),Tl()(),zi$1(194,`li`)(195,`a`,70),Tw(196,`Reactive State for Angular contributors`),Tl()(),zi$1(197,`li`)(198,`a`,71),Tw(199,`hua jian`),Tl()(),zi$1(200,`li`)(201,`a`,72),Tw(202,`Andy Tu Hoang`),Tl()(),zi$1(203,`li`)(204,`a`,73),Tw(205,`Stefanos Lignos`),Tl()()()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,jw(19,ki)),aD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()),vE(27),eg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback),vE(121),eg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback),vE(2),eg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,Cg,rd,cr,ir,Fa,u9,p9,Un$2,Vn,qi$1,_n,ji$1,Jo,Za,Al,ga$1,ma$1,So,Ve,pe$1,yu],encapsulation:2})}return a})();var Ii=()=>({standalone:!0});function Qi(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,93),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,94),tg(3,`nz-icon`,95),Tl()(),Sl()}}function Mi(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`a`,93),ag(`click`,function(){md(i);let r=Gb();return yd(r.clickLink())}),zi$1(2,`h3`,94),Tw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var dt=110;var jn=(()=>{class a{destroyRef=_(ce);router=_(Te$1);#e=_(Z0);injector=_(ae);viewPort=_(p7);zone=_(fe);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!0;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=zt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){rV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-dt>640?this.width.set(640):this.width.set(this.windowWidth()-dt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-dt>640?this.width.set(640):this.width.set(i-dt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),rV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Oe(i).pipe(nV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`nz-blog-mermaid`]],features:[Fw([{provide:lt$2,useValue:{disableCookies:!0,loadApi:!1}}])],decls:251,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-b99efddd`,`nzTitle`,`Invalid Diagrams`],[`nzHref`,`#h-839c4527`,`nzTitle`,`Invalid type`],[`nzHref`,`#h-3ee0c881`,`nzTitle`,`Invalid content`],[`nzHref`,`#h-b44a7c95`,`nzTitle`,`Sequence Diagram`],[`nzHref`,`#h-9f629726`,`nzTitle`,`Sequence Diagram (forest theme directive)`],[`nzHref`,`#h-ba0db7f3`,`nzTitle`,`Gantt Chart`],[`nzHref`,`#h-70d1834f`,`nzTitle`,`Flow Chart`],[`nzHref`,`#h-d92c77a8`,`nzTitle`,`With Markdown:`],[`nzHref`,`#h-0bb074dd`,`nzTitle`,`Class Diagram`],[`nzHref`,`#h-884021fe`,`nzTitle`,`State Diagram`],[`nzHref`,`#h-1dddb92d`,`nzTitle`,`Entity Relationship Diagram`],[`nzHref`,`#h-cc18880d`,`nzTitle`,`User Journey`],[`nzHref`,`#h-6199bdbb`,`nzTitle`,`Pie Chart`],[`nzHref`,`#h-e0a1267c`,`nzTitle`,`Requirement Diagram`],[`nzHref`,`#h-48601e7f`,`nzTitle`,`Gitgraph (Git) Diagram`],[`nzHref`,`#h-bc3ffeb2`,`nzTitle`,`Mermaid in tabs`],[`nzHref`,`#h-8e40f9ee`,`nzTitle`,`Mindmap`],[`nzHref`,`#h-e3199e80`,`nzTitle`,`Quadrant Chart`],[`nzHref`,`#h-a5836c8e`,`nzTitle`,`Architecture Diagram`],[`nzHref`,`#h-6c728fee`,`nzTitle`,`ELK Styling`],[`nzHref`,`#h-df7ec4d7`,`nzTitle`,`Dagre`],[`nzHref`,`#h-790fe0d1`,`nzTitle`,`ELK er diagram layout`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20250825-mermaid.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`href`,`https://github.com/facebook/docusaurus/blob/main/website/_dogfooding/_pages%20tests/diagrams.mdx`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/facebook/docusaurus/blob/main/LICENSE-docs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-b99efddd`],[`onclick`,`window.location.hash = 'h-b99efddd'`,1,`anchor`],[`id`,`h-839c4527`],[`onclick`,`window.location.hash = 'h-839c4527'`,1,`anchor`],[1,`mermaid`],[`id`,`h-3ee0c881`],[`onclick`,`window.location.hash = 'h-3ee0c881'`,1,`anchor`],[`id`,`h-b44a7c95`],[`onclick`,`window.location.hash = 'h-b44a7c95'`,1,`anchor`],[`id`,`h-9f629726`],[`onclick`,`window.location.hash = 'h-9f629726'`,1,`anchor`],[1,`language-bash`],[1,`hljs-string`],[`id`,`h-ba0db7f3`],[`onclick`,`window.location.hash = 'h-ba0db7f3'`,1,`anchor`],[`id`,`h-70d1834f`],[`onclick`,`window.location.hash = 'h-70d1834f'`,1,`anchor`],[`id`,`h-d92c77a8`],[`onclick`,`window.location.hash = 'h-d92c77a8'`,1,`anchor`],[`id`,`h-0bb074dd`],[`onclick`,`window.location.hash = 'h-0bb074dd'`,1,`anchor`],[`id`,`h-884021fe`],[`onclick`,`window.location.hash = 'h-884021fe'`,1,`anchor`],[`id`,`h-1dddb92d`],[`onclick`,`window.location.hash = 'h-1dddb92d'`,1,`anchor`],[`id`,`h-cc18880d`],[`onclick`,`window.location.hash = 'h-cc18880d'`,1,`anchor`],[`href`,`https://github.com/mermaid-js/mermaid/issues/3501`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6199bdbb`],[`onclick`,`window.location.hash = 'h-6199bdbb'`,1,`anchor`],[`id`,`h-e0a1267c`],[`onclick`,`window.location.hash = 'h-e0a1267c'`,1,`anchor`],[`id`,`h-48601e7f`],[`onclick`,`window.location.hash = 'h-48601e7f'`,1,`anchor`],[`id`,`h-bc3ffeb2`],[`onclick`,`window.location.hash = 'h-bc3ffeb2'`,1,`anchor`],[`id`,`h-8e40f9ee`],[`onclick`,`window.location.hash = 'h-8e40f9ee'`,1,`anchor`],[`id`,`h-e3199e80`],[`onclick`,`window.location.hash = 'h-e3199e80'`,1,`anchor`],[`id`,`h-a5836c8e`],[`onclick`,`window.location.hash = 'h-a5836c8e'`,1,`anchor`],[`href`,`https://mermaid.js.org/syntax/architecture`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/facebook/docusaurus/discussions/10508`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6c728fee`],[`onclick`,`window.location.hash = 'h-6c728fee'`,1,`anchor`],[`href`,`https://mermaid.js.org/syntax/entityRelationshipDiagram.html#layout`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-df7ec4d7`],[`onclick`,`window.location.hash = 'h-df7ec4d7'`,1,`anchor`],[`id`,`h-790fe0d1`],[`onclick`,`window.location.hash = 'h-790fe0d1'`,1,`anchor`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(zi$1(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Qh(5,Qi,4,0,`ng-container`,5)(6,Mi,4,0,`ng-container`,5),Tl()()(),zi$1(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),ag(`click`,function(){return r.scrollTop()}),Tw(11,`Jump to top`),Tl()(),zi$1(12,`div`,3)(13,`nz-switch`,9),iD(),Ag(`ngModelChange`,function(g){return Sw(r.enableNavigation,g)||(r.enableNavigation=g),g}),ag(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),zi$1(14,`nz-anchor`,10),ag(`nzClick`,function(g){return r.goLink(g)}),tg(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19)(24,`nz-link`,20)(25,`nz-link`,21)(26,`nz-link`,22)(27,`nz-link`,23)(28,`nz-link`,24)(29,`nz-link`,25)(30,`nz-link`,26)(31,`nz-link`,27)(32,`nz-link`,28)(33,`nz-link`,29)(34,`nz-link`,30)(35,`nz-link`,31)(36,`nz-link`,32),Tl()(),zi$1(37,`span`,33),Tw(38,` Diagram Examples`),tg(39,`span`,34)(40,`span`,35),zi$1(41,`a`,36),tg(42,`nz-icon`,37),Tl()(),zi$1(43,`article`,38)(44,`blockquote`,39)(45,`p`)(46,`strong`),Tw(47,`This is a modified version of the `),zi$1(48,`a`,40),Tw(49,`Docusaurus original`),Tl(),Tw(50,` document provided under `),zi$1(51,`a`,41),Tw(52,`Creative Commons public licenses`),Tl(),Tw(53,`.`),Tl()()(),zi$1(54,`h2`,42)(55,`span`),Tw(56,`Invalid Diagrams`),Tl(),zi$1(57,`a`,43),Tw(58,`#`),Tl()(),zi$1(59,`p`),Tw(60,`Those errors should not crash the whole page`),Tl(),zi$1(61,`h3`,44)(62,`span`),Tw(63,`Invalid type`),Tl(),zi$1(64,`a`,45),Tw(65,`#`),Tl()(),zi$1(66,`pre`,46),Tw(67,`badType
    participant Alice
    participant Bob`),Tl(),zi$1(68,`h3`,47)(69,`span`),Tw(70,`Invalid content`),Tl(),zi$1(71,`a`,48),Tw(72,`#`),Tl()(),zi$1(73,`pre`,46),Tw(74,`sequenceDiagram
    badInstruction Alice
    participant Bob`),Tl(),zi$1(75,`h2`,49)(76,`span`),Tw(77,`Sequence Diagram`),Tl(),zi$1(78,`a`,50),Tw(79,`#`),Tl()(),zi$1(80,`pre`,46),Tw(81,`sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Health check
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts `),tg(82,`br`),Tw(83,`prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`),Tl(),zi$1(84,`h2`,51)(85,`span`),Tw(86,`Sequence Diagram (forest theme directive)`),Tl(),zi$1(87,`a`,52),Tw(88,`#`),Tl()(),zi$1(89,`p`),Tw(90,`It is possible to override default config locally with Mermaid text directives such as:`),Tl(),zi$1(91,`pre`,53)(92,`code`),Tw(93,`%%{init: { `),zi$1(94,`span`,54),Tw(95,`"theme"`),Tl(),Tw(96,`: `),zi$1(97,`span`,54),Tw(98,`"forest"`),Tl(),Tw(99,` } }%%`),Tl()(),zi$1(100,`pre`,46),Tw(101,`%%{init: { "theme": "forest" } }%%

sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Health check
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts `),tg(102,`br`),Tw(103,`prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`),Tl(),zi$1(104,`h2`,55)(105,`span`),Tw(106,`Gantt Chart`),Tl(),zi$1(107,`a`,56),Tw(108,`#`),Tl()(),zi$1(109,`pre`,46),Tw(110,`gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d`),Tl(),zi$1(111,`h2`,57)(112,`span`),Tw(113,`Flow Chart`),Tl(),zi$1(114,`a`,58),Tw(115,`#`),Tl()(),zi$1(116,`pre`,46),Tw(117,`flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]`),Tl(),zi$1(118,`h3`,59)(119,`span`),Tw(120,`With Markdown:`),Tl(),zi$1(121,`a`,60),Tw(122,`#`),Tl()(),zi$1(123,`pre`,46),Tw(124,`flowchart LR
    markdown["\`This **is** _Markdown_\`"]
    newLines["\`Line1
    Line 2
    Line 3\`"]
    markdown --> newLines`),Tl(),zi$1(125,`h2`,61)(126,`span`),Tw(127,`Class Diagram`),Tl(),zi$1(128,`a`,62),Tw(129,`#`),Tl()(),zi$1(130,`pre`,46),Tw(131,` classDiagram
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
      }`),Tl(),zi$1(132,`h2`,63)(133,`span`),Tw(134,`State Diagram`),Tl(),zi$1(135,`a`,64),Tw(136,`#`),Tl()(),zi$1(137,`pre`,46),Tw(138,`stateDiagram-v2
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
    }`),Tl(),zi$1(139,`h2`,65)(140,`span`),Tw(141,`Entity Relationship Diagram`),Tl(),zi$1(142,`a`,66),Tw(143,`#`),Tl()(),zi$1(144,`pre`,46),Tw(145,`erDiagram
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
    }`),Tl(),zi$1(146,`h2`,67)(147,`span`),Tw(148,`User Journey`),Tl(),zi$1(149,`a`,68),Tw(150,`#`),Tl()(),zi$1(151,`pre`,46),Tw(152,`journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me`),Tl(),zi$1(153,`blockquote`)(154,`p`),Tw(155,`If there's too much space above it's due to a `),zi$1(156,`a`,69),Tw(157,`Mermaid bug`),Tl()()(),zi$1(158,`h2`,70)(159,`span`),Tw(160,`Pie Chart`),Tl(),zi$1(161,`a`,71),Tw(162,`#`),Tl()(),zi$1(163,`pre`,46),Tw(164,`pie showData
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5`),Tl(),zi$1(165,`h2`,72)(166,`span`),Tw(167,`Requirement Diagram`),Tl(),zi$1(168,`a`,73),Tw(169,`#`),Tl()(),zi$1(170,`pre`,46),Tw(171,`    requirementDiagram

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
    test_req <- copies - test_entity2`),Tl(),zi$1(172,`h2`,74)(173,`span`),Tw(174,`Gitgraph (Git) Diagram`),Tl(),zi$1(175,`a`,75),Tw(176,`#`),Tl()(),zi$1(177,`pre`,46),Tw(178,`%%{init: { 'logLevel': 'debug', 'theme': 'base' } }%%
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
        merge release`),Tl(),zi$1(179,`h2`,76)(180,`span`),Tw(181,`Mermaid in tabs`),Tl(),zi$1(182,`a`,77),Tw(183,`#`),Tl()(),zi$1(184,`p`),Tw(185,`The following mermaid diagram is shown:`),Tl(),zi$1(186,`pre`,46),Tw(187,`graph LR
  a ---> c(10)
  b ---> c(10)`),Tl(),zi$1(188,`h2`,78)(189,`span`),Tw(190,`Mindmap`),Tl(),zi$1(191,`a`,79),Tw(192,`#`),Tl()(),zi$1(193,`pre`,46),Tw(194,`mindmap
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
        Circle CI`),Tl(),zi$1(195,`h2`,80)(196,`span`),Tw(197,`Quadrant Chart`),Tl(),zi$1(198,`a`,81),Tw(199,`#`),Tl()(),zi$1(200,`pre`,46),Tw(201,`quadrantChart
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
    Campaign F: [0.35, 0.78]`),Tl(),zi$1(202,`h2`,82)(203,`span`),Tw(204,`Architecture Diagram`),Tl(),zi$1(205,`a`,83),Tw(206,`#`),Tl()(),zi$1(207,`ul`)(208,`li`),Tw(209,`See `),zi$1(210,`a`,84),Tw(211,`1`),Tl()(),zi$1(212,`li`),Tw(213,`See `),zi$1(214,`a`,85),Tw(215,`2`),Tl()()(),zi$1(216,`pre`,46),Tw(217,`architecture-beta
    group api(cloud)[API]

    service db(database)[Database] in api
    service disk1(disk)[Storage] in api
    service disk2(disk)[Storage] in api
    service server(server)[Server] in api

    db:L -- R:server
    disk1:T -- B:server
    disk2:T -- B:db`),Tl(),zi$1(218,`h2`,86)(219,`span`),Tw(220,`ELK Styling`),Tl(),zi$1(221,`a`,87),Tw(222,`#`),Tl()(),zi$1(223,`p`),Tw(224,`Mermaid provides an `),zi$1(225,`a`,88),Tw(226,`ELK layout`),Tl()(),zi$1(227,`h3`,89)(228,`span`),Tw(229,`Dagre`),Tl(),zi$1(230,`a`,90),Tw(231,`#`),Tl()(),zi$1(232,`p`),Tw(233,`This is a "classical" Mermaid diagram, using the default Dagre layout.`),Tl(),zi$1(234,`pre`,46),Tw(235,`erDiagram

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
`),Tl(),zi$1(236,`h3`,91)(237,`span`),Tw(238,`ELK er diagram layout`),Tl(),zi$1(239,`a`,92),Tw(240,`#`),Tl()(),zi$1(241,`p`),Tw(242,`This ER diagram should look different, using the ELK layout.`),Tl(),zi$1(243,`pre`,46),Tw(244,`---
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
`),Tl(),zi$1(245,`p`),Tw(246,`Mermaid also provides a way of setting config parameters using a directive `),zi$1(247,`code`),Tw(248,`%%{init:{"layout":"elk"}}%%`),Tl()(),zi$1(249,`pre`,46),Tw(250,`%%{init:{"layout":"elk"}}%%
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
`),Tl()()()()),o&2&&(vE(),eg(`nzBordered`,!0),vE(6),eg(`nzOffsetTop`,45),vE(6),xg(`ngModel`,r.enableNavigation),eg(`ngModelOptions`,jw(7,Ii)),aD(),vE(),eg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae$1,bt,re,Bt,Et,Cg,rd,cr,ir,Fa,u9,p9,Un$2,qi$1,_n,ji$1,Jo,Za,Al,ga$1,ma$1,So,Ve,pe$1,yu],encapsulation:2})}return a})();var _t=(()=>{class a extends Un$1{#e=_(Z0);#t=_($u);#a=_(o0);#i=_(p7);articleListConfig=this.#e.selectors.articleListConfig;ngrxOnStoreInit(){this.setState({articleList:[],tags:[],articleCount:0})}getTags=this.effect(bu(i=>(i.loading.set(!0),this.#a.getTags(i.params).pipe(At(o=>{this.patchState({tags:o.tags})},o=>{$1()?console.error(`Get Tags Failed`,o):console.warn(`Get Tags Failed: ${o.message}`)},()=>{i.loading.set(!1)})))));queryArticle=this.effect(Tu(i=>{this.#e.patchState({articleListConfig:s(r({},this.articleListConfig()),{currentPage:i.params.offset?this.articleListConfig().currentPage:1,filters:{limit:i.params.limit,offset:i.params.offset,tags:i.params.tags,createdAtAsc:i.params.createdAtAsc}})}),this.#n(i.loading)}));onOffsetChange=this.effect(Tu(i=>{this.#e.patchState({articleListConfig:s(r({},this.articleListConfig()),{currentPage:i.offset,filters:s(r({},this.articleListConfig().filters),{offset:Number(this.articleListConfig().filters.limit)*(i.offset-1)})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));onLimitChange=this.effect(Tu(i=>{this.#e.patchState({articleListConfig:s(r({},this.articleListConfig()),{currentPage:1,filters:s(r({},this.articleListConfig().filters),{limit:i.limit,offset:0})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));#n=this.effect(bu(i=>(i.set(!0),(()=>{let o=this.articleListConfig()?.filters;return this.#t.getPublicArticles({limit:o.limit,offset:o.offset,tags:o.tags,createdAtAsc:o.createdAtAsc})})().pipe(At(o=>{this.patchState({articleList:o.articles,articleCount:o.total})},o=>{$1()?console.error(`getPublicArticles Failed`,o):console.warn(`getPublicArticles Failed: ${o.message}`),this.#e.openMessageDrawer(zt(o.message))},()=>{i.set(!1)})))));static ɵfac=(()=>{let i;return function(r){return(i||(i=Iv(a)))(r||a)}})();static ɵprov=pe({token:a,factory:a.ɵfac})}return a})();var Bi=(a,h,i)=>[a,h,i];function Ri(a,h){a&1&&(zi$1(0,`div`,9),tg(1,`nz-spin`,11),Tl())}function Di(a,h){if(a&1&&(tg(0,`nz-icon`,14),Tw(1)),a&2){let i=Gb().$implicit;vE(),xl(` `,i.title.length,` `)}}function Li(a,h){if(a&1&&(tg(0,`nz-icon`,15),Tw(1)),a&2){let i=Gb().$implicit;vE(),xl(` `,i.slug.length,` `)}}function Pi(a,h){if(a&1&&(tg(0,`nz-icon`,16),Tw(1)),a&2){let i=Gb().$implicit;vE(),xl(` `,i.id,` `)}}function Ji(a,h){if(a&1){let i=Vb();zi$1(0,`a`,17),ag(`click`,function(){md(i);let r=Gb().$implicit,c=Gb();return yd(c.clickArticleLink(r))}),Tw(1),Tl()}if(a&2){let i=Gb().$implicit;vE(),xl(` `,i.title,` `)}}function Fi(a,h){if(a&1&&Tw(0),a&2){let i=Gb(2).$implicit;xl(` `,i.description,` `)}}function Hi(a,h){if(a&1){let i=Vb();Mb(0,Fi,1,1),zi$1(1,`a`,18),ag(`click`,function(){md(i);let r=Gb().$implicit,c=Gb();return yd(c.clickArticleLink(r))}),Tw(2,`Read more`),tg(3,`nz-icon`,19),Tl()}if(a&2){let i=Gb().$implicit,o=Gb();Sb(i.published?0:-1),vE(),eg(`nzLoading`,o.routerLinkLoadingId()===i.id)(`disabled`,o.routerLinkLoadingId()!==i.id&&o.routerLinkLoadingId()!==0)}}function Ui(a,h){if(a&1&&(zi$1(0,`div`,20)(1,`div`,21)(2,`h5`,22),Tw(3),Ww(4,`date`),Tl()()(),zi$1(5,`div`,23)(6,`div`,24),tg(7,`img`,25),Tl()()),a&2){let i=Gb().$implicit,o=Gb();vE(),eg(`id`,Rw(i.slug)),vE(2),Mg(Qw(4,9,i.createdAt,`MMMM d, yyyy`)),vE(4),eg(`nzSrc`,Ow(`https://picsum.photos/id/`,i.id,`/300/200.jpg`))(`alt`,Rw(i.title))(`nzFallback`,o.fallback)(`nzPlaceholder`,o.fallback)}}function ji(a,h){if(a&1&&(zi$1(0,`nz-list-item`,12),Qh(1,Di,2,1,`ng-template`,null,3,Yw)(3,Li,2,1,`ng-template`,null,4,Yw)(5,Pi,2,1,`ng-template`,null,5,Yw),zi$1(7,`nz-list-item-meta`,13),Qh(8,Ji,2,1,`ng-template`,null,6,Yw)(10,Hi,4,3,`ng-template`,null,7,Yw),Tl(),Qh(12,Ui,8,12,`ng-template`,null,8,Yw),Tl()),a&2){let i=ew(2),o=ew(4),r=ew(6),c=ew(9),g=ew(11),_=ew(13);eg(`nzActions`,Bw(4,Bi,i,o,r))(`nzExtra`,_),vE(7),eg(`nzTitle`,c)(`nzDescription`,g)}}function Oi(a,h){if(a&1&&(zi$1(0,`div`,20)(1,`div`,24)(2,`h5`,26),Tw(3),Tl()()()),a&2){let i=h,o=Gb(2);vE(3),Sg(` `,o.articleListConfig().filters.limit*(o.articleListConfig().currentPage-1)+1,` - `,o.articleListConfig().filters.limit*o.articleListConfig().currentPage>i?i:o.articleListConfig().filters.limit*o.articleListConfig().currentPage,` of `,i,` records `)}}function Ki(a,h){if(a&1&&Mb(0,Oi,4,3,`div`,20),a&2){let i,o=Gb();Sb((i=o.articlesCount())?0:-1,i)}}function Wi(a,h){if(a&1){let i=Vb();zi$1(0,`nz-pagination`,27),ag(`nzPageSizeChange`,function(r){md(i);let c=Gb();return yd(c.setPageSize(r))})(`nzPageIndexChange`,function(r){md(i);let c=Gb();return yd(c.setPage(r))}),Tl()}if(a&2){let i=Gb();eg(`nzShowSizeChanger`,!0)(`nzPageSize`,i.articleListConfig().filters.limit)(`nzPageIndex`,i.articleListConfig().currentPage)(`nzTotal`,i.articlesCount())}}var On=(()=>{class a{articleList;articlesCount;isLoading;articleListConfig;oldLimit;nzSetPage=new Ze;nzSetPageSize=new Ze;router=_(Te$1);changeDetectorRef=_(P1);routerLinkLoadingId=zt(0);fallback=`data:image/png;base64,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`;clickArticleLink(i){this.routerLinkLoadingId.set(i.id),this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.router.navigate([`articles`,i.slug])})}setPage(i){this.oldLimit()===this.articleListConfig().filters.limit?this.nzSetPage.emit(i):this.oldLimit.set(this.articleListConfig().filters.limit)}setPageSize(i){this.articleListConfig().currentPage>Math.ceil(this.articlesCount()/i)?this.oldLimit.set(this.articleListConfig().filters.limit):this.oldLimit.set(i),this.nzSetPageSize.emit(i)}static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`app-articles`]],inputs:{articleList:`articleList`,articlesCount:`articlesCount`,isLoading:`isLoading`,articleListConfig:`articleListConfig`,oldLimit:`oldLimit`},outputs:{nzSetPage:`nzSetPage`,nzSetPageSize:`nzSetPageSize`},decls:8,vars:6,consts:[[`item`,``],[`footer`,``],[`pagination`,``],[`starAction`,``],[`likeAction`,``],[`msgAction`,``],[`nzTitle`,``],[`nzDescription`,``],[`extra`,``],[1,`app-article-preview`],[`nzItemLayout`,`vertical`,3,`hidden`,`nzDataSource`,`nzRenderItem`,`nzPagination`,`nzFooter`],[`nzTip`,`Loading posts...`],[3,`nzActions`,`nzExtra`],[3,`nzTitle`,`nzDescription`],[`nzType`,`star-o`,2,`margin-right`,`8px`],[`nzType`,`like-o`,2,`margin-right`,`8px`],[`nzType`,`message`,2,`margin-right`,`8px`],[3,`click`],[`nz-button`,``,`nzType`,`link`,3,`click`,`nzLoading`,`disabled`],[`nzType`,`arrow-right`],[`nz-row`,``,`nzJustify`,`end`],[`nz-col`,``,3,`id`],[`nz-typography`,``,`nzType`,`secondary`],[`nz-row`,``],[`nz-col`,``],[`nz-image`,``,`width`,`300px`,`height`,`200px`,3,`nzSrc`,`nzFallback`,`nzPlaceholder`,`alt`],[`nz-typography`,``],[3,`nzPageSizeChange`,`nzPageIndexChange`,`nzShowSizeChanger`,`nzPageSize`,`nzPageIndex`,`nzTotal`]],template:function(o,r){if(o&1&&(Mb(0,Ri,2,0,`div`,9),zi$1(1,`nz-list`,10),Qh(2,ji,14,8,`ng-template`,null,0,Yw)(4,Ki,1,1,`ng-template`,null,1,Yw)(6,Wi,1,4,`ng-template`,null,2,Yw),Tl()),o&2){let c=ew(3),g=ew(5),_=ew(7);Sb(r.isLoading()?0:-1),vE(),eg(`hidden`,r.isLoading())(`nzDataSource`,r.articleList())(`nzRenderItem`,c)(`nzPagination`,_)(`nzFooter`,g)}},dependencies:[Jl,lo,cr,ir,Fa,je,ie,me,oe,ga$1,qf,Al,Dl,Un$2,Vn,qi$1,_n,ji$1,u9,p9,na$1,Jo,Za,be],encapsulation:2})}return a})();var Gi=()=>({overflow:`auto`,display:`block`,width:`100%`});var qi=(a,h)=>[a,h];var Kn=()=>({standalone:!0});function Zi(a,h){if(a&1&&(Nl(0),zi$1(1,`h5`,16),tg(2,`nz-icon`,17),Tl(),Sl()),a&2){let i=Gb(2);vE(2),eg(`nzTooltipTitle`,i.applyTooltipTitle)}}function Xi(a,h){a&1&&Qh(0,Zi,3,1,`ng-container`,11)}function $i(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`button`,18),ag(`nzOnConfirm`,function(){md(i);let r=Gb();return yd(r.confirmApply())}),tg(2,`nz-icon`,19),Tw(3,` Apply `),Tl(),Sl()}if(a&2){let i=Gb(),o=ew(9);vE(),eg(`disabled`,i.disableApply())(`nzIcon`,o)}}function ea(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`button`,20),ag(`nzOnConfirm`,function(){md(i);let r=Gb();return yd(r.confirmClose())}),tg(2,`nz-icon`,21),Tw(3,` Close `),Tl(),Sl()}if(a&2){Gb();let i=ew(7);vE(),eg(`nzIcon`,i)(`nzOkDanger`,!0)}}function ta(a,h){a&1&&(Nl(0),zi$1(1,`h4`,16),tg(2,`nz-icon`,22),Tl(),Sl())}function na(a,h){a&1&&(Nl(0),zi$1(1,`h5`,23),Tw(2,`Do you want to `),tg(3,`br`),Tw(4,` close without changes?`),Tl(),Sl())}function ia(a,h){a&1&&(zi$1(0,`nz-space`,10),Qh(1,ta,3,0,`ng-container`,11)(2,na,5,0,`ng-container`,11),Tl())}function aa(a,h){a&1&&(Nl(0),zi$1(1,`h4`,24),tg(2,`nz-icon`,22),Tl(),Sl())}function ra(a,h){a&1&&(Nl(0),zi$1(1,`h5`,23),Tw(2,`Do you want to `),tg(3,`br`),Tw(4,` apply changes?`),Tl(),Sl())}function oa(a,h){a&1&&(zi$1(0,`nz-space`,10),Qh(1,aa,3,0,`ng-container`,11)(2,ra,5,0,`ng-container`,11),Tl())}function la(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`nz-switch`,25),iD(),Ag(`ngModelChange`,function(r){md(i);let c=Gb();return Sw(c.isAscending,r)||(c.isAscending=r),yd(r)}),ag(`click`,function(){md(i);let r=Gb();return yd(r.ascendingEnable())}),Tl(),Sl()}if(a&2){let i=Gb();vE(),xg(`ngModel`,i.isAscending),eg(`ngModelOptions`,jw(2,Kn)),aD()}}function sa(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`nz-switch`,26),iD(),Ag(`ngModelChange`,function(r){md(i);let c=Gb();return Sw(c.showSearch,r)||(c.showSearch=r),yd(r)}),ag(`click`,function(){md(i);let r=Gb();return yd(r.disableEnable())}),Tl(),Sl()}if(a&2){let i=Gb();vE(),xg(`ngModel`,i.showSearch),eg(`ngModelOptions`,jw(3,Kn))(`disabled`,i.leftSearch||i.rightSearch),aD()}}function ma(a,h){a&1&&(Nl(0),zi$1(1,`h5`,16),tg(2,`nz-icon`,27),Tl(),Sl())}function da(a,h){a&1&&Qh(0,ma,3,0,`ng-container`,11)}function pa(a,h){a&1&&(Nl(0),zi$1(1,`h4`,33),Tw(2,`Remaining Tags`),Tl(),Sl())}function ca(a,h){a&1&&(Nl(0),zi$1(1,`h5`,33),tg(2,`nz-icon`,34),Tl(),Sl())}function xa(a,h){if(a&1&&tg(0,`nz-option`,30),a&2){let i=h.$implicit;eg(`nzLabel`,i.label)(`nzValue`,i.value)}}function ha(a,h){if(a&1&&(tg(0,`nz-icon`,35),Tw(1)),a&2){let i=h.$implicit;eg(`nzType`,`sort-`+i.nzValue),vE(),xl(` `,i.nzLabel,` `)}}function Ea(a,h){if(a&1){let i=Vb();zi$1(0,`tr`,36),ag(`click`,function(){let r=md(i).$implicit,c=Gb().onItemSelect;return yd(c(r))}),zi$1(1,`td`,37),ag(`nzCheckedChange`,function(){let r=md(i).$implicit,c=Gb().onItemSelect;return yd(c(r))}),Tl(),zi$1(2,`td`),Tw(3),Tl()()}if(a&2){let i=h.$implicit,o=Gb().disabled;vE(),eg(`nzChecked`,i.checked)(`nzDisabled`,o||i.disabled),vE(2),Mg(i.title)}}function ga(a,h){if(a&1){let i=Vb();zi$1(0,`div`,28)(1,`div`,9)(2,`nz-space`,10),Qh(3,pa,3,0,`ng-container`,11)(4,ca,3,0,`ng-container`,11),Tl()()(),zi$1(5,`div`,28)(6,`div`,9)(7,`nz-select`,29),iD(),Ag(`ngModelChange`,function(r){md(i);let c=Gb();return Sw(c.orderModelLeft,r)||(c.orderModelLeft=r),yd(r)}),ag(`ngModelChange`,function(r){md(i);let c=Gb();return yd(c.handleOrderLeft(r))}),Rb(8,xa,1,2,`nz-option`,30,Ab),Tl(),Qh(10,ha,2,2,`ng-template`,null,4,Yw),Tl()(),zi$1(12,`nz-table`,31,5)(14,`thead`)(15,`tr`)(16,`th`,32),ag(`nzCheckedChange`,function(r){let c=md(i).onItemSelectAll;return yd(c(r))}),Tl(),zi$1(17,`th`),Tw(18,`All`),Tl()()(),zi$1(19,`tbody`),Rb(20,Ea,4,3,`tr`,null,Ab),Tl()()}if(a&2){let i=h.$implicit,o=h.stat,r=h.disabled,c=ew(11),g=ew(13),_=Gb();vE(7),eg(`nzBackdrop`,!1)(`nzCustomTemplate`,c),xg(`ngModel`,_.orderModelLeft),aD(),vE(),Ob(_.listOfOption),vE(4),eg(`nzData`,_.convertItemsRight(i)),vE(4),eg(`nzDisabled`,r)(`nzChecked`,o.checkAll)(`nzIndeterminate`,o.checkHalf),vE(4),Ob(g.data)}}function Sa(a,h){a&1&&(Nl(0),zi$1(1,`h4`,24),Tw(2,`Selected Tags`),Tl(),Sl())}function ua(a,h){a&1&&(Nl(0),zi$1(1,`h5`,24),tg(2,`nz-icon`,38),Tl(),Sl())}function Aa(a,h){if(a&1&&tg(0,`nz-option`,30),a&2){let i=h.$implicit;eg(`nzLabel`,i.label)(`nzValue`,i.value)}}function fa(a,h){if(a&1&&(tg(0,`nz-icon`,35),Tw(1)),a&2){let i=h.$implicit;eg(`nzType`,`sort-`+i.nzValue),vE(),xl(` `,i.nzLabel,` `)}}function wa(a,h){if(a&1){let i=Vb();zi$1(0,`tr`,36),ag(`click`,function(){let r=md(i).$implicit,c=Gb().onItemSelect;return yd(c(r))}),zi$1(1,`td`,37),ag(`nzCheckedChange`,function(){let r=md(i).$implicit,c=Gb().onItemSelect;return yd(c(r))}),Tl(),zi$1(2,`td`),Tw(3),Tl()()}if(a&2){let i=h.$implicit,o=Gb().disabled;vE(),eg(`nzChecked`,i.checked)(`nzDisabled`,o||i.disabled),vE(2),Mg(i.title)}}function za(a,h){if(a&1){let i=Vb();zi$1(0,`div`,28)(1,`div`,9)(2,`nz-space`,10),Qh(3,Sa,3,0,`ng-container`,11)(4,ua,3,0,`ng-container`,11),Tl()()(),zi$1(5,`div`,28)(6,`div`,9)(7,`nz-select`,29),iD(),Ag(`ngModelChange`,function(r){md(i);let c=Gb();return Sw(c.orderModelRight,r)||(c.orderModelRight=r),yd(r)}),ag(`ngModelChange`,function(r){md(i);let c=Gb();return yd(c.handleOrderRight(r))}),Rb(8,Aa,1,2,`nz-option`,30,Ab),Tl(),Qh(10,fa,2,2,`ng-template`,null,6,Yw),Tl()(),zi$1(12,`nz-table`,31,7)(14,`thead`)(15,`tr`)(16,`th`,32),ag(`nzCheckedChange`,function(r){let c=md(i).onItemSelectAll;return yd(c(r))}),Tl(),zi$1(17,`th`),Tw(18,`All`),Tl()()(),zi$1(19,`tbody`),Rb(20,wa,4,3,`tr`,null,Ab),Tl()()}if(a&2){let i=h.$implicit,o=h.stat,r=h.disabled,c=ew(11),g=ew(13),_=Gb();vE(7),eg(`nzBackdrop`,!1)(`nzCustomTemplate`,c),xg(`ngModel`,_.orderModelRight),aD(),vE(),Ob(_.listOfOption),vE(4),eg(`nzData`,_.convertItemsLeft(i)),vE(4),eg(`nzDisabled`,r)(`nzChecked`,o.checkAll)(`nzIndeterminate`,o.checkHalf),vE(4),Ob(g.data)}}var Wn=(()=>{class a{params;nzMessageService=_(dr);drawerRef=_(wn);selectedCount=0;list=[];showSearch=!1;leftSearch=!1;rightSearch=!1;selectedTags=[];applyTooltipTitle=``;orderModelLeft=null;orderModelRight=null;listOfOption=[{label:`Ascending`,value:`ascending`},{label:`Descending`,value:`descending`}];sortOrder=null;isAscending=!1;createdAtAsc=null;initialCreatedAtAsc=null;isTagListChange(){let i=this.selectedTags||[];if(this.selectedTags=[],this.list.filter(r=>r.direction===`right`).forEach(r=>this.selectedTags.push(r.id)),this.createdAtAsc!==this.initialCreatedAtAsc||i?.length!==this.selectedTags.length)return!0;let o=!0;return i.forEach(r=>o=o&&this.selectedTags.includes(r)),!o}ngOnInit(){this.params.createdAtAsc===void 0?(this.isAscending=!1,this.createdAtAsc=null):(this.isAscending=this.params.createdAtAsc,this.createdAtAsc=this.isAscending),this.initialCreatedAtAsc=this.createdAtAsc,this.params.tags?this.selectedTags=this.params.tags:(this.selectedTags=[],this.params.tagList.forEach(i=>this.selectedTags.push(i.id))),this.list=[],this.params.tagList.forEach(i=>this.list.push({title:i.title,id:i.id,direction:this.selectedTags.includes(i.id)?`right`:`left`})),this.selectedCount=this.selectedTags.length}ascendingEnable(){this.isAscending?this.createdAtAsc=null:this.createdAtAsc=!0}disableEnable(){this.showSearch||(this.showSearch=this.leftSearch||this.rightSearch)}handleSearchChange(i){i.direction===`left`?this.leftSearch=i.value!==``:this.rightSearch=i.value!==``}handleChange(i){i.from===`right`?(this.orderModelLeft=null,this.sortOrder={direction:`left`,sortOrder:null},this.selectedCount-=i.list.length):(this.orderModelRight=null,this.sortOrder={direction:`right`,sortOrder:null},this.selectedCount+=i.list.length)}handleFilterOption(i,o){return o.title.toLowerCase().includes(i.toLowerCase())}confirmClose(){this.isTagListChange()&&this.nzMessageService.warning(`Changes were not saved!`),this.drawerRef.close(!1)}disableApply(){return this.selectedCount<1?(this.applyTooltipTitle=`It should be at least one selected tag.`,!0):this.selectedCount>100?(this.applyTooltipTitle=`It should not be more than 100 selected tags.`,!0):!1}confirmApply(){this.isTagListChange()?(this.nzMessageService.info(`Applying selected tags.`),this.selectedTags.length===this.list.length&&(this.selectedTags=null),this.drawerRef.close({tags:this.selectedTags,createdAtAsc:this.createdAtAsc})):this.drawerRef.close(null)}convertItemsRight(i){return i.filter(o=>!o.hide)}convertItemsLeft(i){return i.filter(o=>!o.hide)}handleOrderRight(i){this.sortOrder={direction:`right`,sortOrder:i}}handleOrderLeft(i){this.sortOrder={direction:`left`,sortOrder:i}}static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`app-article-listing-tags`]],inputs:{params:`params`},decls:25,vars:14,consts:[[`closeTpl`,``],[`applyTpl`,``],[`renderList`,``],[`renderSelectedList`,``],[`orderTemplateLeft`,``],[`t1`,``],[`orderTemplateRight`,``],[`t2`,``],[`nz-row`,``,`nzJustify`,`end`,1,`m-b-20`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[`nz-row`,``,`nzJustify`,`end`],[`nz-row`,``,`nzJustify`,`start`,1,`m-b-20`],[`nzSize`,`small`,`nzAlign`,`center`],[3,`nzSearchChange`,`nzChange`,`nzDataSource`,`nzShowSearch`,`nzShowSelectAll`,`nzFilterOption`,`nzRenderList`,`nzSortOrder`],[`nz-typography`,``,`nzType`,`danger`],[`nzType`,`info-circle`,`nz-tooltip`,``,3,`nzTooltipTitle`],[`nz-button`,``,`nzType`,`primary`,`nzShape`,`round`,`nz-popconfirm`,``,`nzPopconfirmTitle`,` `,`nzPopconfirmShowArrow`,`false`,`nzOkText`,`Yes`,`nzCancelText`,`No`,3,`nzOnConfirm`,`disabled`,`nzIcon`],[`nzType`,`check`],[`nz-button`,``,`nzDanger`,`true`,`nzShape`,`round`,`nz-popconfirm`,``,`nzPopconfirmTitle`,` `,`nzPopconfirmShowArrow`,`false`,`nzOkText`,`Yes`,`nzCancelText`,`No`,3,`nzOnConfirm`,`nzIcon`,`nzOkDanger`],[`nzType`,`close`],[`nzType`,`question-circle-o`],[`nz-typography`,``],[`nz-typography`,``,`nzType`,`success`],[`nzCheckedChildren`,`Oldest articles first`,`nzUnCheckedChildren`,`Newest articles first`,3,`ngModelChange`,`click`,`ngModel`,`ngModelOptions`],[`nzCheckedChildren`,`Hide Search`,`nzUnCheckedChildren`,`Show Search`,3,`ngModelChange`,`click`,`ngModel`,`ngModelOptions`,`disabled`],[`nzType`,`info-circle`,`nz-tooltip`,``,`nzTooltipTitle`,`Clear out all search boxes in order to hide them.`],[`nz-row`,``,`nzJustify`,`center`],[`nzAllowClear`,``,`nzPlaceHolder`,`Sort Order...`,3,`ngModelChange`,`nzBackdrop`,`nzCustomTemplate`,`ngModel`],[3,`nzLabel`,`nzValue`],[`nzSize`,`small`,3,`nzData`],[`nzShowCheckbox`,``,3,`nzCheckedChange`,`nzDisabled`,`nzChecked`,`nzIndeterminate`],[`nz-typography`,``,`nzType`,`warning`],[`nzType`,`info-circle`,`nz-tooltip`,``,`nzTooltipTitle`,`Here are all remaining tags.`],[3,`nzType`],[3,`click`],[`nzShowCheckbox`,``,3,`nzCheckedChange`,`nzChecked`,`nzDisabled`],[`nzType`,`info-circle`,`nz-tooltip`,``,`nzTooltipTitle`,`Here are all selected tags.`]],template:function(o,r){if(o&1&&(zi$1(0,`div`,8)(1,`div`,9)(2,`nz-space`,10),Mb(3,Xi,1,0,`ng-container`),Qh(4,$i,4,2,`ng-container`,11)(5,ea,4,2,`ng-container`,11),Tl()(),Qh(6,ia,3,0,`ng-template`,null,0,Yw)(8,oa,3,0,`ng-template`,null,1,Yw),Tl(),zi$1(10,`div`,12)(11,`div`,9)(12,`nz-space`,10),Qh(13,la,2,3,`ng-container`,11),Tl()()(),zi$1(14,`div`,13)(15,`div`,9)(16,`nz-space`,14),Qh(17,sa,2,4,`ng-container`,11),Mb(18,da,1,0,`ng-container`),Tl()()(),zi$1(19,`div`)(20,`nz-transfer`,15),ag(`nzSearchChange`,function(g){return r.handleSearchChange(g)})(`nzChange`,function(g){return r.handleChange(g)}),Qh(21,ga,22,7,`ng-template`,null,2,Yw)(23,za,22,7,`ng-template`,null,3,Yw),Tl()()),o&2){let c=ew(22),g=ew(24);vE(3),Sb(r.disableApply()?3:-1),vE(15),Sb(r.leftSearch||r.rightSearch?18:-1),vE(),pw(jw(10,Gi)),vE(),eg(`nzDataSource`,r.list)(`nzShowSearch`,r.showSearch)(`nzShowSelectAll`,!1)(`nzFilterOption`,r.handleFilterOption)(`nzRenderList`,Hw(11,qi,c,g))(`nzSortOrder`,r.sortOrder)}},dependencies:[ml,Nr,Ds,qi$1,_n,ji$1,Ui$1,Zi$1,cr,ir,Fa,u9,p9,na$1,ta$1,ga$1,ma$1,So,Al,pr,rs,dm$1,ts,qr,mm,rr,ss,ns,Si$1,Cn,lt$1,nt,Ve,pe$1,Ql,Zi$2,Yi,Jo,Za],encapsulation:2})}return a})();var Ca=[`drawerTitleTemplate`];function ba(a,h){a&1&&(Nl(0),zi$1(1,`h4`,13),tg(2,`nz-icon`,14),Tl(),Sl())}function ya(a,h){a&1&&(Nl(0),zi$1(1,`h5`,15),Tw(2,`Do you want to `),tg(3,`br`),Tw(4,` reload all articles?`),Tl(),Sl())}function _a(a,h){a&1&&(zi$1(0,`nz-space`,7),Qh(1,ba,3,0,`ng-container`,8)(2,ya,5,0,`ng-container`,8),Tl())}function Ta(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`button`,11),ag(`nzOnConfirm`,function(){md(i);let r=Gb();return yd(r.selectAll())}),tg(2,`nz-icon`,12),Tl(),Qh(3,_a,3,0,`ng-template`,null,1,Yw),Sl()}if(a&2){let i=ew(4),o=Gb();vE(),eg(`nzLoading`,o.isArticlesLoading())(`nzIcon`,i)}}function ka(a,h){if(a&1){let i=Vb();Nl(0),zi$1(1,`button`,16),ag(`click`,function(){md(i);let r=Gb();return yd(r.openTagsFilter())}),tg(2,`nz-icon`,17),Tw(3,` Tags `),Tl(),zi$1(4,`nz-badge`,18),tg(5,`a`,19),Tl(),Sl()}if(a&2){let i=Gb();vE(),eg(`nzLoading`,i.isTagsLoading()),vE(3),eg(`nzCount`,i.tagCount())}}function va(a,h){if(a&1&&(zi$1(0,`div`,5)(1,`div`,6)(2,`h3`,20),Tw(3),Tl()()()),a&2){let i=Gb();vE(3),Mg(i.drawerTitle)}}var dm=[{path:``,pathMatch:`full`,title:`Articles`,data:{key:`articles`},component:(()=>{class a{drawerTitleTemplate=R1(`drawerTitleTemplate`);#e=_(_t);#t=_(Z0);articleListConfig=this.#t.selectors.articleListConfig;windowWidth=this.#t.selectors.width;articleCount=this.#e.selectors.articleCount;articleList=this.#e.selectors.articleList;tagList=this.#e.selectors.tags;drawerService=_(Jn$1);isTagsLoading=zt(!1);isArticlesLoading=zt(!1);tagCount=Ll(()=>this.articleListConfig()?.filters.tags?this.articleListConfig().filters.tags.length:0);oldLimit=zt(this.articleListConfig().filters.limit);drawerTitle=``;noCancel(){return new Promise(o=>{o(!1)})}ngOnInit(){this.#t.setAdminArticles(!1);let i=this.articleListConfig()?.filters;(i?.tags===void 0||i?.tags===null)&&(i?.createdAtAsc===void 0||i?.createdAtAsc===null)?this.selectAll():(this.#e.getTags({loading:this.isTagsLoading,params:null}),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:i.limit,offset:0,tags:i.tags,createdAtAsc:i.createdAtAsc}}))}selectAll(){this.#e.getTags({loading:this.isTagsLoading,params:null}),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:10,offset:0}}),this.oldLimit.set(10)}onPageOffsetChange(i){this.#e.onOffsetChange({loading:this.isArticlesLoading,offset:i})}onPageLimitChange(i){this.#e.onLimitChange({loading:this.isArticlesLoading,limit:i})}openTagsFilter(){if(this.isTagsLoading())return;this.isTagsLoading.set(!0),this.drawerTitle=`Article Tags`;let i=this.articleListConfig()?.filters;this.drawerService.create({nzTitle:this.drawerTitleTemplate(),nzContent:Wn,nzWidth:this.windowWidth()>600?600:this.windowWidth(),nzClosable:!1,nzOnCancel:this.noCancel,nzContentParams:{params:{tagList:this.tagList(),tags:i.tags,createdAtAsc:i.createdAtAsc}}}).afterClose.subscribe(r$1=>{if(r$1){let c=this.articleListConfig()?.filters;this.#e.queryArticle({loading:this.isArticlesLoading,params:s(r({},r$1),{limit:c.limit,offset:0})})}this.isTagsLoading.set(!1)})}pageHeaderInfo={title:`Articles`,desc:`This page is a symbiose between dynamic (.NET Core, SQL Server database) and static (JavaScript, CSS, icon, etc.) resources. All articles are served as static content from JavaScript files compiled by Angular framework. In addition, JavaScript files are served via lazy loading. Articles metadata is stored in the database and served dynamically by .NET Core API controllers.`};static ɵfac=function(o){return new(o||a)};static ɵcmp=ZD({type:a,selectors:[[`app-home-listing`]],viewQuery:function(o,r){o&1&&fg(r.drawerTitleTemplate,Ca,5),o&2&&Xb()},features:[Fw([Tp(_t)])],decls:14,vars:7,consts:[[`drawerTitleTemplate`,``],[`applyTpl`,``],[3,`pageHeaderInfo`],[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`center`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[`nz-row`,``,`nzJustify`,`end`],[3,`nzSetPage`,`nzSetPageSize`,`articleList`,`articlesCount`,`isLoading`,`articleListConfig`,`oldLimit`],[`nz-button`,``,`nzType`,`primary`,`nzShape`,`circle`,`nz-popconfirm`,``,`nzPopconfirmTitle`,` `,`nzPopconfirmShowArrow`,`false`,`nzOkText`,`Yes`,`nzCancelText`,`No`,3,`nzOnConfirm`,`nzLoading`,`nzIcon`],[`nzType`,`sync`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`question-circle-o`],[`nz-typography`,``],[`nz-button`,``,`nzType`,`primary`,`nzShape`,`round`,3,`click`,`nzLoading`],[`nzType`,`tag`],[3,`nzCount`],[1,`head-example`],[`nz-typography`,``,`nzType`,`warning`]],template:function(o,r){o&1&&(tg(0,`app-page-header`,2),zi$1(1,`div`,3)(2,`nz-card`,4)(3,`div`,5)(4,`div`,6)(5,`nz-space`,7),Qh(6,Ta,5,2,`ng-container`,8),Tl()()(),zi$1(7,`div`,9)(8,`div`,6)(9,`nz-space`,7),Qh(10,ka,6,2,`ng-container`,8),Tl()()(),zi$1(11,`app-articles`,10),ag(`nzSetPage`,function(g){return r.onPageOffsetChange(g)})(`nzSetPageSize`,function(g){return r.onPageLimitChange(g)}),Tl(),Qh(12,va,4,1,`ng-template`,null,0,Yw),Tl()()),o&2&&(eg(`pageHeaderInfo`,r.pageHeaderInfo),vE(2),eg(`nzBordered`,!0),vE(9),eg(`articleList`,r.articleList)(`articlesCount`,r.articleCount)(`isLoading`,r.isArticlesLoading)(`articleListConfig`,r.articleListConfig)(`oldLimit`,r.oldLimit))},dependencies:[en,On,Bn$1,fn,qi$1,_n,ji$1,Ui$1,Cg,rd,u9,p9,na$1,ta$1,ga$1,ma$1,So,Al,Jo,Za,cr,ir,Fa],encapsulation:2})}return a})()},{path:`what-version-of-this-blog`,title:`What Version?`,data:{key:`what-version-of-this-blog`},component:Rn},{path:`svg-icons`,title:`SVG Icons`,data:{key:`svg-icons`},component:Dn},{path:`dotnet-core-testing`,title:`ASP.NET Testing`,data:{key:`dotnet-core-testing`},component:Pn},{path:`about-this-blog`,title:`My Blog`,data:{key:`about-this-blog`},component:Jn},{path:`test-readme`,title:`MyTested Example`,data:{key:`test-readme`},component:Fn},{path:`ratelimit-middleware`,title:`JWT Token Refresh`,data:{key:`ratelimit-middleware`},component:Hn},{path:`testing-angular-apps`,title:`Testing Angular Apps`,data:{key:`testing-angular-apps`},component:Un},{path:`mermaid`,title:`Diagram Examples`,data:{key:`mermaid`},component:jn}];export{dm as BLOG_ROUTES};