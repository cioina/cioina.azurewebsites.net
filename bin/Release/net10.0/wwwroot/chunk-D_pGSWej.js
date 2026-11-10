import{i as vi$1,n as Wn$1,r as gn,t as Vn}from"./chunk-BVeeY52L.js";import{_ as pe,c as me,g as Ve,l as oe,o as ie,s as je}from"./chunk-C9tiZ580.js";import{t as en}from"./chunk-Dj9GAaOF.js";import{A as _p,B as os,D as Yl,E as Yi,F as hr,H as q0,I as is,L as l0,M as cs,P as hm,R as lo,T as Un$1,U as ts,V as ps,W as um,_ as El,f as Al,j as cr,k as Zi$1,n as Et,p as At,t as Bt,w as Ul,x as Qu,z as mr}from"./main-JVNSBADO.js";import{n as fn,t as Bn$1}from"./chunk-_kbs0aP3.js";import{n as bt,r as re,t as ae}from"./chunk-DbVTgzLB.js";import{n as pa$1,t as lt$1}from"./chunk-Bg3_vZbi.js";import{d as na$1,i as Ui$1,l as ei,m as pt,u as ia$1}from"./chunk-BWks1Yd2.js";import{c as cr$1,d as nt,l as ir,n as Fa,o as Za,r as Jo,u as lt$2}from"./chunk-D420wc46.js";import"./chunk-C4kmlP3G.js";import{$ as wu,F as cd,M as Zf,T as Te$1,at as zg}from"./chunk-CWMJmhsQ.js";import{F as ji$1,H as ml,K as qi$1,N as ga$1,S as So,V as ma$1,_ as Nr,a as Ds,k as _n,w as Ui$2}from"./chunk-78N6iMPQ.js";import{B as O7,C as Hc,J as Te$2,V as O9,X as Vc,ht as g9,k as Ka,nt as at$1,w as I9,yt as l6}from"./chunk-BJwoPWWJ.js";import{n}from"./chunk-B_wzNMQJ.js";import{$ as Jw,$n as gd,$r as tv,A as Ev,Br as qu,Ci as yd,Cn as Zh,Cr as md,Dt as Qe,En as _,Et as Qb,Fn as bu,Fr as q1,Gt as Tu,It as Sb,K as Ig,Kr as se,L as Gt,Lr as qi$2,Mn as ae$1,Nr as pg,Nt as Re,Or as ng,Pt as Rg,Qt as Uw,Rn as cg,U as Hw,Ut as Tl,W as IE,Wr as sV,Xr as tg,_i as xg,_t as Nl,a as $y,ar as hd,b as CC,br as lD,c as Ag,cr as iV,ct as Ll,ei as tw,en as V1,et as KD,f as B1,fi as wC,gt as Ng,hr as kb,i as $w,in as Vw,ji as zw,jr as nw,kn as aD,mn as XD,mt as Mw,ot as L1,p as Bb,qn as fe,rr as gw,s as Ab,st as Lb,u as Aw,ur as ig,ut as Lw,x as Cc,xn as Yw,xt as Ob,yi as xl,yr as kw,zn as de,zt as Sl}from"./chunk-DoyXUqQA.js";import{n as s,t as r}from"./chunk-Beksg5lM.js";var Bn=`alert`;var yt=(()=>{let a,h=[],i=[],o,r=[],c=[];return class Ct{static{let _=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;a=[g9()],o=[g9()],wC(null,null,a,{kind:`field`,name:`nzCloseable`,static:!1,private:!1,access:{has:H=>`nzCloseable`in H,get:H=>H.nzCloseable,set:(H,Ie)=>{H.nzCloseable=Ie}},metadata:_},h,i),wC(null,null,o,{kind:`field`,name:`nzShowIcon`,static:!1,private:!1,access:{has:H=>`nzShowIcon`in H,get:H=>H.nzShowIcon,set:(H,Ie)=>{H.nzShowIcon=Ie}},metadata:_},r,c),_&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_})}cdr=_(V1);animationType=_($y,{optional:!0});dir=_(Ka).valueSignal;_nzModuleName=Bn;nzAction=null;nzCloseText=null;nzIconType=null;nzMessage=null;nzDescription=null;nzType=`info`;nzCloseable=CC(this,h,!1);nzShowIcon=(CC(this,i),CC(this,r,!1));nzBanner=(CC(this,c),!1);nzNoAnimation=!1;nzIcon=null;nzOnClose=new Qe;closed=!1;iconTheme=`fill`;inferredIconType=`info-circle`;isTypeSet=!1;isShowIconSet=!1;constructor(){l6(Bn,()=>this.cdr.markForCheck())}closeAlert(){this.closed=!0,(this.nzNoAnimation||this.animationType===`NoopAnimations`)&&this.nzOnClose.emit(!0)}onLeaveAnimationDone(_){let H=_.target;if(this.nzNoAnimation||this.animationType===`NoopAnimations`){_.animationComplete();return}H.classList.add(`ant-alert-motion-leave`,`ant-alert-motion-leave-active`);let Ie=()=>{H.removeEventListener(`transitionend`,Ie),this.nzOnClose.emit(!0),_.animationComplete()};H.addEventListener(`transitionend`,Ie)}ngOnChanges(_){let{nzShowIcon:H,nzDescription:Ie,nzType:pt,nzBanner:ct}=_;if(H&&(this.isShowIconSet=!0),pt)switch(this.isTypeSet=!0,this.nzType){case`error`:this.inferredIconType=`close-circle`;break;case`success`:this.inferredIconType=`check-circle`;break;case`info`:this.inferredIconType=`info-circle`;break;case`warning`:this.inferredIconType=`exclamation-circle`}Ie&&(this.iconTheme=this.nzDescription?`outline`:`fill`),ct&&(this.isTypeSet||(this.nzType=`warning`),this.isShowIconSet||(this.nzShowIcon=!0))}static ɵfac=function(H){return new(H||Ct)};static ɵcmp=(function(){function _(C,ee){C&1&&ig(0)}function H(C,ee){if(C&1&&Zh(0,_,1,0,`ng-container`,7),C&2){let A=Qb(3);tg(`nzStringTemplateOutlet`,A.nzIcon)}}function Ie(C,ee){if(C&1&&ng(0,`nz-icon`,6),C&2){let A=Qb(3);tg(`nzType`,A.nzIconType||A.inferredIconType)(`nzTheme`,A.iconTheme)}}function pt(C,ee){if(C&1&&(qi$2(0,`div`,2),Sb(1,H,1,1,`ng-container`)(2,Ie,1,2,`nz-icon`,6),Tl()),C&2){let A=Qb(2);IE(),Ab(A.nzIcon?1:2)}}function ct(C,ee){if(C&1&&(Nl(0),Mw(1),Sl()),C&2){let A=Qb(4);IE(),Ng(A.nzMessage)}}function qn(C,ee){if(C&1&&(qi$2(0,`span`,8),Zh(1,ct,2,1,`ng-container`,7),Tl()),C&2){let A=Qb(3);IE(),tg(`nzStringTemplateOutlet`,A.nzMessage)}}function Zn(C,ee){if(C&1&&(Nl(0),Mw(1),Sl()),C&2){let A=Qb(4);IE(),Ng(A.nzDescription)}}function Xn(C,ee){if(C&1&&(qi$2(0,`span`,9),Zh(1,Zn,2,1,`ng-container`,7),Tl()),C&2){let A=Qb(3);IE(),tg(`nzStringTemplateOutlet`,A.nzDescription)}}function $n(C,ee){if(C&1&&(qi$2(0,`div`,3),Sb(1,qn,2,1,`span`,8),Sb(2,Xn,2,1,`span`,9),Tl()),C&2){let A=Qb(2);IE(),Ab(A.nzMessage?1:-1),IE(),Ab(A.nzDescription?2:-1)}}function ei(C,ee){if(C&1&&(Nl(0),Mw(1),Sl()),C&2){let A=Qb(3);IE(),Ng(A.nzAction)}}function ti(C,ee){if(C&1&&(qi$2(0,`div`,4),Zh(1,ei,2,1,`ng-container`,7),Tl()),C&2){let A=Qb(2);IE(),tg(`nzStringTemplateOutlet`,A.nzAction)}}function ni(C,ee){if(C&1&&(Nl(0),qi$2(1,`span`,12),Mw(2),Tl(),Sl()),C&2){let A=Qb(4);IE(2),Ng(A.nzCloseText)}}function ii(C,ee){if(C&1&&Zh(0,ni,3,1,`ng-container`,7),C&2){let A=Qb(3);tg(`nzStringTemplateOutlet`,A.nzCloseText)}}function ai(C,ee){C&1&&ng(0,`nz-icon`,11)}function ri(C,ee){if(C&1){let A=Bb();qi$2(0,`button`,10),cg(`click`,function(){md(A);let xt=Qb(2);return yd(xt.closeAlert())}),Sb(1,ii,1,1,`ng-container`)(2,ai,1,0,`nz-icon`,11),Tl()}if(C&2){let A=Qb(2);IE(),Ab(A.nzCloseText?1:2)}}function oi(C,ee){if(C&1){let A=Bb();qi$2(0,`div`,1),Cc(function(xt){md(A);let si=Qb();return yd(si.onLeaveAnimationDone(xt))}),Sb(1,pt,3,1,`div`,2),Sb(2,$n,3,2,`div`,3),Sb(3,ti,2,1,`div`,4),Sb(4,ri,3,1,`button`,5),Tl()}if(C&2){let A=Qb();Ig(`ant-alert-rtl`,A.dir()===`rtl`)(`ant-alert-success`,A.nzType===`success`)(`ant-alert-info`,A.nzType===`info`)(`ant-alert-warning`,A.nzType===`warning`)(`ant-alert-error`,A.nzType===`error`)(`ant-alert-no-icon`,!A.nzShowIcon)(`ant-alert-banner`,A.nzBanner)(`ant-alert-closable`,A.nzCloseable)(`ant-alert-with-description`,!!A.nzDescription),tg(`nzNoAnimation`,A.nzNoAnimation),IE(),Ab(A.nzShowIcon?1:-1),IE(),Ab(A.nzMessage||A.nzDescription?2:-1),IE(),Ab(A.nzAction?3:-1),IE(),Ab(A.nzCloseable||A.nzCloseText?4:-1)}}return KD({type:Ct,selectors:[[`nz-alert`]],inputs:{nzAction:`nzAction`,nzCloseText:`nzCloseText`,nzIconType:`nzIconType`,nzMessage:`nzMessage`,nzDescription:`nzDescription`,nzType:`nzType`,nzCloseable:[2,`nzCloseable`,`nzCloseable`,B1],nzShowIcon:[2,`nzShowIcon`,`nzShowIcon`,B1],nzBanner:[2,`nzBanner`,`nzBanner`,B1],nzNoAnimation:[2,`nzNoAnimation`,`nzNoAnimation`,B1],nzIcon:`nzIcon`},outputs:{nzOnClose:`nzOnClose`},exportAs:[`nzAlert`],features:[tv],decls:1,vars:1,consts:[[1,`ant-alert`,3,`nzNoAnimation`,`ant-alert-rtl`,`ant-alert-success`,`ant-alert-info`,`ant-alert-warning`,`ant-alert-error`,`ant-alert-no-icon`,`ant-alert-banner`,`ant-alert-closable`,`ant-alert-with-description`],[1,`ant-alert`,3,`nzNoAnimation`],[1,`ant-alert-icon`],[1,`ant-alert-content`],[1,`ant-alert-action`],[`type`,`button`,`tabindex`,`0`,1,`ant-alert-close-icon`],[3,`nzType`,`nzTheme`],[4,`nzStringTemplateOutlet`],[1,`ant-alert-message`],[1,`ant-alert-description`],[`type`,`button`,`tabindex`,`0`,1,`ant-alert-close-icon`,3,`click`],[`nzType`,`close`],[1,`ant-alert-close-text`]],template:function(ee,A){ee&1&&Sb(0,oi,5,23,`div`,0),ee&2&&Ab(A.closed?-1:0)},dependencies:[I9,O9,Hc,Vc,at$1],encapsulation:2})})()}})();var Te=class bt{static ɵfac=function(o){return new(o||bt)};static ɵmod=XD({type:bt});static ɵinj=qu({imports:[yt]})};var di=()=>({standalone:!0});function pi(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,53),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,54),ng(3,`nz-icon`,55),Tl()(),Sl()}}function ci(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,53),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,54),Mw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var it=110;var Rn=(()=>{class a{destroyRef=_(ae$1);router=_(Te$1);#e=_(q0);injector=_(se);viewPort=_(O7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){sV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-it>640?this.width.set(640):this.width.set(this.windowWidth()-it-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-it>640?this.width.set(640):this.width.set(i-it-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(iV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`nz-blog-what-version-of-this-blog`]],features:[Vw([{provide:lt$1,useValue:{disableCookies:!0,loadApi:!1}}])],decls:432,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-8a303762`,`nzTitle`,`The Problem`],[`nzHref`,`#h-c36299ac`,`nzTitle`,`Case Scenario #1`],[`nzHref`,`#h-a42d4269`,`nzTitle`,`Case Scenario #2`],[`nzHref`,`#h-b3708047`,`nzTitle`,`Case Scenario #3`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20211009-what-version-of-this-blog.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[`id`,`h-8a303762`],[`onclick`,`window.location.hash = 'h-8a303762'`,1,`anchor`],[`href`,`https://stackoverflow.com/questions/55494181/what-is-the-purpose-of-swupdate-activateupdate-in-angular/59175788#59175788`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-c36299ac`],[`onclick`,`window.location.hash = 'h-c36299ac'`,1,`anchor`],[`href`,`https://github.com/cioina/openshift-laravel-example/blob/main/src/acioina/site/src/Acioina/UserManagement/Http/Controllers/Api/VersionController.php`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-php`],[1,`hljs-meta`],[1,`hljs-keyword`],[1,`hljs-title`,`class_`],[1,`hljs-title`],[1,`hljs-class`],[1,`hljs-variable`,`constant_`],[1,`hljs-string`],[1,`hljs-function`],[1,`hljs-params`],[1,`hljs-variable`],[1,`hljs-built_in`],[1,`hljs-title`,`function_`,`invoke__`],[1,`hljs-variable`,`language_`],[1,`language-typescript`],[1,`hljs-attr`],[1,`language-csharp`],[1,`hljs-literal`],[1,`hljs-title`,`function_`],[1,`hljs-property`],[`id`,`h-a42d4269`],[`onclick`,`window.location.hash = 'h-a42d4269'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0/wwwroot`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ngrx/platform/blob/19.2.x/projects/ngrx.io/src/app/sw-updates/sw-updates.service.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-b3708047`],[`onclick`,`window.location.hash = 'h-b3708047'`,1,`anchor`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(qi$2(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Zh(5,pi,4,0,`ng-container`,5)(6,ci,4,0,`ng-container`,5),Tl()()(),qi$2(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),cg(`click`,function(){return r.scrollTop()}),Mw(11,`Jump to top`),Tl()(),qi$2(12,`div`,3)(13,`nz-switch`,9),aD(),Rg(`ngModelChange`,function(g){return Aw(r.enableNavigation,g)||(r.enableNavigation=g),g}),cg(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),qi$2(14,`nz-anchor`,10),cg(`nzClick`,function(g){return r.goLink(g)}),ng(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14),Tl()(),qi$2(19,`span`,15),Mw(20,` What Version of This Blog Do You See?`),ng(21,`span`,16)(22,`span`,17),qi$2(23,`a`,18),ng(24,`nz-icon`,19),Tl()(),qi$2(25,`article`,20),gd(),qi$2(26,`p`),Mw(27,`As you can see, this website does not have a formal version tag. It uses the latest version of `),qi$2(28,`code`),Mw(29,`ng-zorro-antd`),Tl(),Mw(30,` and Angular as some kind of version tag. So, just imagine how surprised I was when I deployed this website compiled with Angular `),qi$2(31,`code`),Mw(32,`12.2.9`),Tl(),Mw(33,` and checking my very old Samsung that runs on Android 4.4.2. For some reason, the old Chrome web browser does not want to load this website correctly, so, I use an old version of FireFox browser for Android (As you may know, Google does not allow to update apps for old Android versions.) FireFox worked ok at first. But, when I closed and opened the browser again, this site loaded automatically and showed Angular `),qi$2(34,`code`),Mw(35,`12.2.4`),Tl(),Mw(36,` at the bottom of the footer. Somehow, FireFox cached an old version of my website. Deleting the FireFox cache did not help, but, reloading the URL would show the correct Angular `),qi$2(37,`code`),Mw(38,`12.2.9`),Tl(),Mw(39,`.`),Tl(),qi$2(40,`blockquote`)(41,`p`),Mw(42,`It looks like starting with Angular 16, this website will not work at all anymore on outdated devices!`),Tl()(),qi$2(43,`h2`,21)(44,`span`),Mw(45,`The Problem`),Tl(),qi$2(46,`a`,22),Mw(47,`#`),Tl()(),qi$2(48,`p`),Mw(49,`It may be problematic to have latest version for some websites that use Angular with a lot of lazy-loading modules. Imagine a user browsing your website just seconds before you start to deploy a new version of your website. The user will still have the old version (old Angular compiled JavaScript files) even after the deployment ends. We will consider three case scenarios here and will try to implement solution #2 from `),qi$2(50,`strong`),Mw(51,`gkalpak`),Tl(),Mw(52,`'s `),qi$2(53,`a`,23),Mw(54,`StackOverflow`),Tl(),Mw(55,` answer. We will let website users know that a new version is available and ask them to refresh the webpage.`),Tl(),qi$2(56,`h2`,24)(57,`span`),Mw(58,`Case Scenario #1`),Tl(),qi$2(59,`a`,25),Mw(60,`#`),Tl()(),qi$2(61,`p`),Mw(62,`From my experience, the problem may appear for old/outdated web browsers like one described above or when you open multiple tabs of the same page. You will get a message to reload/refresh the page with an error similar to `),qi$2(63,`strong`),Mw(64,`ERROR: b607b9112d`),Tl(),Mw(65,` (where b607b9112d is the new hash.)`),Tl(),qi$2(66,`p`),Mw(67,`It was very simple for me to implement this solution because I use a server-side API and deploy my backend and frontend on the same server and generate my deployment with a Node.js script. So, I generate `),qi$2(68,`a`,26),Mw(69,`a small PHP file`),Tl(),Mw(70,` and small TypeScript file with some unique hash.`),Tl(),qi$2(71,`p`)(72,`strong`)(73,`code`),Mw(74,`VersionController.php`),Tl()()(),qi$2(75,`pre`,27)(76,`code`)(77,`span`,28),Mw(78,`<?php`),Tl(),Mw(79,`
`),qi$2(80,`span`,29),Mw(81,`namespace`),Tl(),Mw(82,` `),qi$2(83,`span`,30),Mw(84,`Acioina`),Tl(),Mw(85,`\\`),qi$2(86,`span`,30),Mw(87,`UserManagement`),Tl(),Mw(88,`\\`),qi$2(89,`span`,30),Mw(90,`Http`),Tl(),Mw(91,`\\`),qi$2(92,`span`,30),Mw(93,`Controllers`),Tl(),Mw(94,`\\`),qi$2(95,`span`,30),Mw(96,`Api`),Tl(),Mw(97,`;
`),qi$2(98,`span`,29),Mw(99,`use`),Tl(),Mw(100,` `),qi$2(101,`span`,31),Mw(102,`Acioina`),Tl(),Mw(103,`\\`),qi$2(104,`span`,31),Mw(105,`UserManagement`),Tl(),Mw(106,`\\`),qi$2(107,`span`,31),Mw(108,`Transformers`),Tl(),Mw(109,`\\`),qi$2(110,`span`,31),Mw(111,`VersionTransformer`),Tl(),Mw(112,`;

`),qi$2(113,`span`,32)(114,`span`,29),Mw(115,`class`),Tl(),Mw(116,` `),qi$2(117,`span`,31),Mw(118,`VersionController`),Tl(),Mw(119,` `),qi$2(120,`span`,29),Mw(121,`extends`),Tl(),Mw(122,` `),qi$2(123,`span`,31),Mw(124,`ApiController`),Tl(),Mw(125,`
`),Tl(),Mw(126,`{
    `),qi$2(127,`span`,29),Mw(128,`private`),Tl(),Mw(129,` `),qi$2(130,`span`,29),Mw(131,`const`),Tl(),Mw(132,` `),qi$2(133,`span`,33),Mw(134,`ANGULAR_APP_HASH`),Tl(),Mw(135,` = `),qi$2(136,`span`,34),Mw(137,`'b607b9112d'`),Tl(),Mw(138,`;

    `),qi$2(139,`span`,29),Mw(140,`public`),Tl(),Mw(141,` `),qi$2(142,`span`,35)(143,`span`,29),Mw(144,`function`),Tl(),Mw(145,` `),qi$2(146,`span`,31),Mw(147,`__construct`),Tl(),Mw(148,`(`),qi$2(149,`span`,36),Mw(150,`VersionTransformer `),qi$2(151,`span`,37),Mw(152,`$transformer`),Tl()(),Mw(153,`)
    `),Tl(),Mw(154,`{
        `),qi$2(155,`span`,38),Mw(156,`parent`),Tl(),Mw(157,`::`),qi$2(158,`span`,39),Mw(159,`__construct`),Tl(),Mw(160,`(`),qi$2(161,`span`,37),Mw(162,`$transformer`),Tl(),Mw(163,`);
    }

    `),qi$2(164,`span`,29),Mw(165,`public`),Tl(),Mw(166,` `),qi$2(167,`span`,35)(168,`span`,29),Mw(169,`function`),Tl(),Mw(170,` `),qi$2(171,`span`,31),Mw(172,`index`),Tl(),Mw(173,`(`),ng(174,`span`,36),Mw(175,`)
    `),Tl(),Mw(176,`{
        `),qi$2(177,`span`,29),Mw(178,`return`),Tl(),Mw(179,` `),qi$2(180,`span`,40),Mw(181,`$this`),Tl(),Mw(182,`->`),qi$2(183,`span`,39),Mw(184,`respondWithTransformer`),Tl(),Mw(185,`([`),qi$2(186,`span`,34),Mw(187,`'hash'`),Tl(),Mw(188,` => `),qi$2(189,`span`,38),Mw(190,`self`),Tl(),Mw(191,`::`),qi$2(192,`span`,33),Mw(193,`ANGULAR_APP_HASH`),Tl(),Mw(194,`]);
    }
}`),Tl()(),qi$2(195,`p`)(196,`strong`)(197,`code`),Mw(198,`version.ts`),Tl()()(),qi$2(199,`pre`,41)(200,`code`)(201,`span`,29),Mw(202,`export`),Tl(),Mw(203,` `),qi$2(204,`span`,29),Mw(205,`const`),Tl(),Mw(206,` `),qi$2(207,`span`,33),Mw(208,`APP_VERSION`),Tl(),Mw(209,` = {
  `),qi$2(210,`span`,42),Mw(211,`version`),Tl(),Mw(212,`: `),qi$2(213,`span`,34),Mw(214,`'0.0.0'`),Tl(),Mw(215,`,
  `),qi$2(216,`span`,42),Mw(217,`hash`),Tl(),Mw(218,`: `),qi$2(219,`span`,34),Mw(220,`'b607b9112d'`),Tl(),Mw(221,`,
};`),Tl()(),qi$2(222,`p`),Mw(223,`Currently we are moving our server-side to ASP.NET Core and we are generating this small file:`),Tl(),qi$2(224,`p`)(225,`strong`)(226,`code`),Mw(227,`VersionResponseModel.cs`),Tl()()(),qi$2(228,`pre`,43)(229,`code`)(230,`span`,29),Mw(231,`namespace`),Tl(),Mw(232,` `),qi$2(233,`span`,31),Mw(234,`BlogAngular.Application.Common.Version`),Tl(),Mw(235,`;
`),qi$2(236,`span`,29),Mw(237,`using`),Tl(),Mw(238,` Newtonsoft.Json;
`),qi$2(239,`span`,29),Mw(240,`public`),Tl(),Mw(241,` `),qi$2(242,`span`,29),Mw(243,`class`),Tl(),Mw(244,` `),qi$2(245,`span`,31),Mw(246,`VersionResponseModel`),Tl(),Mw(247,`
{
    `),qi$2(248,`span`,35)(249,`span`,29),Mw(250,`public`),Tl(),Mw(251,` `),qi$2(252,`span`,31),Mw(253,`VersionResponseModel`),Tl(),Mw(254,`()`),Tl(),Mw(255,`
    {
        Hash = `),qi$2(256,`span`,34),Mw(257,`"b607b9112d"`),Tl(),Mw(258,`;
    }

    [`),qi$2(259,`span`,28),Mw(260,`JsonProperty(`),qi$2(261,`span`,34),Mw(262,`"hash"`),Tl(),Mw(263,`)`),Tl(),Mw(264,`]
    `),qi$2(265,`span`,29),Mw(266,`public`),Tl(),Mw(267,` `),qi$2(268,`span`,38),Mw(269,`string`),Tl(),Mw(270,`? Hash { `),qi$2(271,`span`,29),Mw(272,`get`),Tl(),Mw(273,`; } = `),qi$2(274,`span`,44),Mw(275,`default`),Tl(),Mw(276,`!;
}`),Tl()(),qi$2(277,`p`),Mw(278,`In my `),qi$2(279,`code`),Mw(280,`app.component.ts`),Tl(),Mw(281,`, I have something like this:`),Tl(),qi$2(282,`pre`,41)(283,`code`)(284,`span`,28),Mw(285,`@Component`),Tl(),Mw(286,`({
  `),qi$2(287,`span`,42),Mw(288,`selector`),Tl(),Mw(289,`: `),qi$2(290,`span`,34),Mw(291,`'app-root'`),Tl(),Mw(292,`,
  `),qi$2(293,`span`,42),Mw(294,`template`),Tl(),Mw(295,`: `),qi$2(296,`span`,34),Mw(297,`\`
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
\``),Tl(),Mw(298,`
`),qi$2(299,`span`,29),Mw(300,`export`),Tl(),Mw(301,` `),qi$2(302,`span`,29),Mw(303,`class`),Tl(),Mw(304,` `),qi$2(305,`span`,30),Mw(306,`DefaultComponent`),Tl(),Mw(307,` {
  `),qi$2(308,`span`,29),Mw(309,`readonly`),Tl(),Mw(310,` #authStore = `),qi$2(311,`span`,45),Mw(312,`inject`),Tl(),Mw(313,`(`),qi$2(314,`span`,30),Mw(315,`AuthStore`),Tl(),Mw(316,`);
  `),qi$2(317,`span`,29),Mw(318,`readonly`),Tl(),Mw(319,` isNotCurrentVersion = computed<`),qi$2(320,`span`,38),Mw(321,`boolean`),Tl(),Mw(322,`>(
    `),qi$2(323,`span`,35),Mw(324,`() =>`),Tl(),Mw(325,` !!`),qi$2(326,`span`,40),Mw(327,`this`),Tl(),Mw(328,`.`),qi$2(329,`span`,45),Mw(330,`hash`),Tl(),Mw(331,`() && !(`),qi$2(332,`span`,40),Mw(333,`this`),Tl(),Mw(334,`.`),qi$2(335,`span`,45),Mw(336,`hash`),Tl(),Mw(337,`() === `),qi$2(338,`span`,33),Mw(339,`APP_VERSION`),Tl(),Mw(340,`.`),qi$2(341,`span`,46),Mw(342,`hash`),Tl(),Mw(343,` || `),qi$2(344,`span`,40),Mw(345,`this`),Tl(),Mw(346,`.`),qi$2(347,`span`,45),Mw(348,`hash`),Tl(),Mw(349,`() === `),qi$2(350,`span`,34),Mw(351,`'SwUpdatesService: activated'`),Tl(),Mw(352,`)
  );
  `),qi$2(353,`span`,29),Mw(354,`readonly`),Tl(),Mw(355,` hash = computed<`),qi$2(356,`span`,38),Mw(357,`string`),Tl(),Mw(358,`>(`),qi$2(359,`span`,35),Mw(360,`() =>`),Tl(),Mw(361,` `),qi$2(362,`span`,40),Mw(363,`this`),Tl(),Mw(364,`.#authStore.`),qi$2(365,`span`,46),Mw(366,`selectors`),Tl(),Mw(367,`.`),qi$2(368,`span`,45),Mw(369,`version`),Tl(),Mw(370,`().`),qi$2(371,`span`,46),Mw(372,`hash`),Tl(),Mw(373,`);
  `),qi$2(374,`span`,29),Mw(375,`readonly`),Tl(),Mw(376,` currentVersion = `),qi$2(377,`span`,33),Mw(378,`ZORRO_VERSION`),Tl(),Mw(379,`.`),qi$2(380,`span`,46),Mw(381,`full`),Tl(),Mw(382,`;
  `),qi$2(383,`span`,29),Mw(384,`readonly`),Tl(),Mw(385,` angularVersion = `),qi$2(386,`span`,33),Mw(387,`ANGULAR_VERSION`),Tl(),Mw(388,`.`),qi$2(389,`span`,46),Mw(390,`full`),Tl(),Mw(391,`;
  `),qi$2(392,`span`,29),Mw(393,`readonly`),Tl(),Mw(394,` compiledDate = `),qi$2(395,`span`,33),Mw(396,`APP_VERSION`),Tl(),Mw(397,`.`),qi$2(398,`span`,46),Mw(399,`version`),Tl(),Mw(400,`;`),Tl()(),qi$2(401,`p`),Mw(402,`I compile my frontend app with a command like this: `),qi$2(403,`code`),Mw(404,`yarn build:site`),Tl(),Mw(405,`. This simple solution helped me to solve my FireFox problem, however, the most logical solution is not to allow outdated web browsers to access this website.`),Tl(),qi$2(406,`h2`,47)(407,`span`),Mw(408,`Case Scenario #2`),Tl(),qi$2(409,`a`,48),Mw(410,`#`),Tl()(),qi$2(411,`p`),Mw(412,`This is the most common case scenario for modern (up to date) web browsers based on Google Chrome. It happens when you open this website from the browser bookmarks or when you browse this website while a new version was deployed to the server. You will get a message to reload/refresh the page with `),qi$2(413,`strong`),Mw(414,`ERROR: SwUpdatesService: activated`),Tl(),Mw(415,`. This website uses a Service Worker loaded from `),qi$2(416,`a`,49),Mw(417,`ngsw-worker.js`),Tl(),Mw(418,`. In addition, we use Angular `),qi$2(419,`a`,50),Mw(420,`SwUpdates`),Tl(),Mw(421,` which will load updated resources of the website behind the scene on the user's machine. Theoretically, this website should work fine without reloading most of the time.`),Tl(),qi$2(422,`h2`,51)(423,`span`),Mw(424,`Case Scenario #3`),Tl(),qi$2(425,`a`,52),Mw(426,`#`),Tl()(),qi$2(427,`p`),Mw(428,`This case scenario happens when you open multiple tabs of this website while a new version was deployed to the server. You will get a message to reload/refresh the page with `),qi$2(429,`strong`),Mw(430,`ERROR: GlobalErrorHandler`),Tl(),Mw(431,`. It means that the browser tries to load old resources that were deleted by a new deployment.`),Tl(),hd(),Tl()()()),o&2&&(IE(),tg(`nzBordered`,!0),IE(6),tg(`nzOffsetTop`,45),IE(6),Ag(`ngModel`,r.enableNavigation),tg(`ngModelOptions`,Hw(7,di)),lD(),IE(),tg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae,bt,re,Bt,Et,zg,cd,cr$1,ir,Fa,I9,O9,Vn,qi$1,_n,ji$1,Jo,Za,El,ga$1,ma$1,So,Ve,pe,wu],encapsulation:2})}return a})();var xi=()=>({standalone:!0});function hi(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,123),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,124),ng(3,`nz-icon`,125),Tl()(),Sl()}}function Ei(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,123),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,124),Mw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var at=110;var Dn=(()=>{class a{destroyRef=_(ae$1);router=_(Te$1);#e=_(q0);injector=_(se);viewPort=_(O7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!0;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){sV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-at>640?this.width.set(640):this.width.set(this.windowWidth()-at-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-at>640?this.width.set(640):this.width.set(i-at-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(iV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`nz-blog-svg-icons`]],features:[Vw([{provide:lt$1,useValue:{disableCookies:!0,loadApi:!0}}])],decls:980,vars:10,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-175576ef`,`nzTitle`,`List of icons`],[`nzHref`,`#h-db974238`,`nzTitle`,`API`],[`nzHref`,`#h-47e19927`,`nzTitle`,`nz-icon, [nz-icon]`],[`nzHref`,`#h-1a353508`,`nzTitle`,`NzIconService`],[`nzHref`,`#h-ed485f46`,`nzTitle`,`SVG icons`],[`nzHref`,`#h-ec99ccb9`,`nzTitle`,`Static loading and dynamic loading`],[`nzHref`,`#h-32e641c4`,`nzTitle`,`Add Icons in Lazy-loaded Components`],[`nzHref`,`#h-93e3a3a1`,`nzTitle`,`Set Default TwoTone Color`],[`nzHref`,`#h-3ce4aec9`,`nzTitle`,`Custom Font Icon`],[`nzHref`,`#h-b3ba0fe9`,`nzTitle`,`Namespace`],[`nzHref`,`#h-1fe917b0`,`nzTitle`,`FAQ`],[`nzHref`,`#h-81929100`,`nzTitle`,`All my icons are gone!`],[`nzHref`,`#h-a81dd5f2`,`nzTitle`,`There are two similar icons in a `],[`nzHref`,`#h-62a9076a`,`nzTitle`,`I want to import all icons statically. What should I do?`],[`nzHref`,`#h-5de90099`,`nzTitle`,`Does dynamic loading affect web pages' performance?`],[`nzHref`,`#h-3d43bf4a`,`nzTitle`,`How do I know an icon's corresponding module to import?`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230219-svg-icons.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/doc/index.en-US.md`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`pic-plus`,2,`text-align`,`center`],[`nzType`,`custom:zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:angular`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:ng-zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-row`,``,`nzJustify`,`center`,1,`p-t-24`],[`videoId`,`bGUfm_E5iZo`,`placeholderImageQuality`,`high`,3,`width`],[`videoId`,`7j1t3UZA1TY`,`placeholderImageQuality`,`high`,3,`width`],[`id`,`h-5504977c`],[`onclick`,`window.location.hash = 'h-5504977c'`,1,`anchor`],[1,`mermaid`],[`id`,`h-5f3a8aa0`],[`onclick`,`window.location.hash = 'h-5f3a8aa0'`,1,`anchor`],[`id`,`h-ed81be50`],[`onclick`,`window.location.hash = 'h-ed81be50'`,1,`anchor`],[`id`,`h-d67b37b2`],[`onclick`,`window.location.hash = 'h-d67b37b2'`,1,`anchor`],[`id`,`h-f3b60b4e`],[`onclick`,`window.location.hash = 'h-f3b60b4e'`,1,`anchor`],[`id`,`h-c75b170a`],[`onclick`,`window.location.hash = 'h-c75b170a'`,1,`anchor`],[`id`,`h-0fd89a6a`],[`onclick`,`window.location.hash = 'h-0fd89a6a'`,1,`anchor`],[`id`,`h-9f221950`],[`onclick`,`window.location.hash = 'h-9f221950'`,1,`anchor`],[`id`,`h-f2803148`],[`onclick`,`window.location.hash = 'h-f2803148'`,1,`anchor`],[`id`,`h-175576ef`],[`onclick`,`window.location.hash = 'h-175576ef'`,1,`anchor`],[`href`,`https://ant.design/components/icon/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-db974238`],[`onclick`,`window.location.hash = 'h-db974238'`,1,`anchor`],[`id`,`h-47e19927`],[1,`api-type-label`,`component`],[`onclick`,`window.location.hash = 'h-47e19927'`,1,`anchor`],[`href`,`https://github.com/twbs/icons`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://icons.getbootstrap.com/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-svg`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-1a353508`],[1,`api-type-label`,`service`],[`onclick`,`window.location.hash = 'h-1a353508'`,1,`anchor`],[`id`,`h-ed485f46`],[`onclick`,`window.location.hash = 'h-ed485f46'`,1,`anchor`],[1,`language-html`],[1,`hljs-tag`],[1,`hljs-name`],[1,`hljs-attr`],[1,`hljs-string`],[`id`,`h-ec99ccb9`],[`onclick`,`window.location.hash = 'h-ec99ccb9'`,1,`anchor`],[`nzType`,`info`,`nzMessage`,`Note:`,`nzDescription`,`As for icons provided by Ant Design, there are two ways to import them into your project.`,`nzShowIcon`,``],[1,`language-ts`],[1,`hljs-keyword`],[1,`hljs-title`,`class_`],[1,`hljs-comment`],[1,`hljs-title`,`function_`],[1,`language-json`],[1,`hljs-punctuation`],[`id`,`h-32e641c4`],[`onclick`,`window.location.hash = 'h-32e641c4'`,1,`anchor`],[1,`hljs-meta`],[`id`,`h-93e3a3a1`],[`onclick`,`window.location.hash = 'h-93e3a3a1'`,1,`anchor`],[`id`,`h-3ce4aec9`],[`onclick`,`window.location.hash = 'h-3ce4aec9'`,1,`anchor`],[`href`,`http://iconfont.cn/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-variable`,`language_`],[1,`hljs-property`],[`href`,`https://www.iconfont.cn/help/detail?helptype=code`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-b3ba0fe9`],[`onclick`,`window.location.hash = 'h-b3ba0fe9'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0/wwwroot/assets/custom`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-1fe917b0`],[`onclick`,`window.location.hash = 'h-1fe917b0'`,1,`anchor`],[`id`,`h-81929100`],[`onclick`,`window.location.hash = 'h-81929100'`,1,`anchor`],[`id`,`h-0dfac33e`],[`onclick`,`window.location.hash = 'h-0dfac33e'`,1,`anchor`],[`id`,`h-62a9076a`],[`onclick`,`window.location.hash = 'h-62a9076a'`,1,`anchor`],[`href`,`https://ng.ant.design/components/icon/en#static-loading-and-dynamic-loading`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-built_in`],[1,`hljs-function`],[1,`hljs-params`],[`id`,`h-5de90099`],[`onclick`,`window.location.hash = 'h-5de90099'`,1,`anchor`],[`id`,`h-3d43bf4a`],[`onclick`,`window.location.hash = 'h-3d43bf4a'`,1,`anchor`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(qi$2(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Zh(5,hi,4,0,`ng-container`,5)(6,Ei,4,0,`ng-container`,5),Tl()()(),qi$2(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),cg(`click`,function(){return r.scrollTop()}),Mw(11,`Jump to top`),Tl()(),qi$2(12,`div`,3)(13,`nz-switch`,9),aD(),Rg(`ngModelChange`,function(g){return Aw(r.enableNavigation,g)||(r.enableNavigation=g),g}),cg(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),qi$2(14,`nz-anchor`,10),cg(`nzClick`,function(g){return r.goLink(g)}),ng(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19)(24,`nz-link`,20)(25,`nz-link`,21)(26,`nz-link`,22)(27,`nz-link`,23)(28,`nz-link`,24)(29,`nz-link`,25)(30,`nz-link`,26),Tl()(),qi$2(31,`span`,27),Mw(32,` Semantic Vector Graphics (SVG) Icons`),ng(33,`span`,28)(34,`span`,29),qi$2(35,`a`,30),ng(36,`nz-icon`,31),Tl()(),qi$2(37,`article`,32)(38,`blockquote`,33)(39,`p`)(40,`strong`),Mw(41,`This is a modified version of the `),qi$2(42,`a`,34),Mw(43,`NG-ZORRO original`),Tl(),Mw(44,` document provided under `),qi$2(45,`a`,35),Mw(46,`Alibaba.com MIT LICENSE`),Tl(),Mw(47,`.`),Tl()()(),qi$2(48,`div`,36),ng(49,`nz-icon`,37),qi$2(50,`span`),Mw(51,`+`),Tl(),ng(52,`nz-icon`,38),qi$2(53,`span`),Mw(54,`=`),Tl(),ng(55,`nz-icon`,39),Tl(),qi$2(56,`div`,40),ng(57,`app-youtube-player`,41),Tl(),qi$2(58,`div`,40),ng(59,`app-youtube-player`,42),Tl(),qi$2(60,`h4`,43)(61,`span`),Mw(62,`Example 1`),Tl(),qi$2(63,`a`,44),Mw(64,`#`),Tl()(),qi$2(65,`pre`,45),Mw(66,`block-beta
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
  style B fill:#969,stroke:#333,stroke-width:4px`),Tl(),qi$2(67,`h4`,46)(68,`span`),Mw(69,`Example 2`),Tl(),qi$2(70,`a`,47),Mw(71,`#`),Tl()(),qi$2(72,`pre`,45),Mw(73,`block-beta
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
  end  `),Tl(),qi$2(74,`h4`,48)(75,`span`),Mw(76,`Example 3`),Tl(),qi$2(77,`a`,49),Mw(78,`#`),Tl()(),qi$2(79,`pre`,45),Mw(80,`block-beta
  id1[/"This is the text in the box"/]
  id2["This is the text in the box"]
  A[/"Christmas"]
  B["Go shopping"/]`),Tl(),qi$2(81,`h4`,50)(82,`span`),Mw(83,`Example 4`),Tl(),qi$2(84,`a`,51),Mw(85,`#`),Tl()(),qi$2(86,`pre`,45),Mw(87,`block-beta
  blockArrowId<["Label"]>(right)
  blockArrowId2<["Label"]>(left)
  blockArrowId3<["Label"]>(up)
  blockArrowId4<["Label"]>(down)
  blockArrowId5<["Label"]>(x)
  blockArrowId6<["Label"]>(y)
  blockArrowId6<["Label"]>(x, down)`),Tl(),qi$2(88,`h4`,52)(89,`span`),Mw(90,`Example 5`),Tl(),qi$2(91,`a`,53),Mw(92,`#`),Tl()(),qi$2(93,`pre`,45),Mw(94,`block-beta
  columns 3
  Start(("Start")) space:2
  down<[" "]>(down) space:2
  Decision("Make Decision") right<["Yes"]>(right) Process1["Process A"]
  downAgain<["No"]>(down) space r3<["Done"]>(down)
  Process2["Process B"] r2<["Done"]>(right) End(("End"))

  style Start fill:#969;
  style End fill:#696;`),Tl(),qi$2(95,`h4`,54)(96,`span`),Mw(97,`Example 6`),Tl(),qi$2(98,`a`,55),Mw(99,`#`),Tl()(),qi$2(100,`pre`,45),Mw(101,`graph LR
  A["(1.1)"]
  B("$$\\begin{array} {lcl} L(p,w_i) &=& \\dfrac{1}{N}\\Sigma_{i=1}^N(\\underbrace{f_r(x_2 \\rightarrow x_1 \\rightarrow x_0)G(x_1 \\longleftrightarrow x_2)f_r(x_3 \\rightarrow x_2 \\rightarrow x_1)}_{sample\\, radiance\\,evaluation\\, in\\, stage2} \\\\\\\\\\\\\\\\ &=& \\prod_{i=3}^{k-1}(\\underbrace{\\dfrac{f_r(x_{i+1} \\rightarrow x_i \\rightarrow x_{i-1})G(x_i \\longleftrightarrow x_{i-1})}{p_a(x_{i-1})}}_{stored\\,in\\,vertex\\, during\\,light\\, path\\, tracing\\, in\\, stage1})\\dfrac{G(x_k \\longleftrightarrow x_{k-1})L_e(x_k \\rightarrow x_{k-1})}{p_a(x_{k-1})p_a(x_k)}) \\end{array}$$")
  A-->B`),Tl(),qi$2(102,`h4`,56)(103,`span`),Mw(104,`Example 7`),Tl(),qi$2(105,`a`,57),Mw(106,`#`),Tl()(),qi$2(107,`pre`,45),Mw(108,`graph LR
  A["(1.2)"]
  B("$$\\sqrt{\\frac{\\pi(1-\\pi)}{n}}$$")
  A-->B`),Tl(),qi$2(109,`h4`,58)(110,`span`),Mw(111,`Example 8`),Tl(),qi$2(112,`a`,59),Mw(113,`#`),Tl()(),qi$2(114,`pre`,45),Mw(115,` graph LR
   A["$$x^2$$"] -->|"$$\\sqrt{x+3}$$"| B("$$\\frac{1}{2}$$")
   A -->|"$$\\overbrace{a+b+c}^{\\text{note}}$$"| C("$$\\pi r^2$$")
   B --> D("$$x = \\begin{cases} a &\\text{if } b \\\\ c &\\text{if } d \\end{cases}$$")
   C --> E("$$x(t)=c_1\\begin{bmatrix}-\\cos{t}+\\sin{t}\\\\ 2\\cos{t} \\end{bmatrix}e^{2t}$$")`),Tl(),qi$2(116,`h4`,60)(117,`span`),Mw(118,`Example 9`),Tl(),qi$2(119,`a`,61),Mw(120,`#`),Tl()(),qi$2(121,`pre`,45),Mw(122,`sequenceDiagram
  autonumber
  participant 1 as $$\\alpha$$
  participant 2 as $$\\beta$$
  1->>2: Solve: $$\\sqrt{2+2}$$
  2-->>1: Answer: $$2$$
  Note right of 2: $$\\sqrt{2+2}=\\sqrt{4}=2$$`),Tl(),qi$2(123,`h2`,62)(124,`span`),Mw(125,`List of icons`),Tl(),qi$2(126,`a`,63),Mw(127,`#`),Tl()(),qi$2(128,`p`),Mw(129,`We keep in syncing with `),qi$2(130,`a`,64),Mw(131,`antd`),Tl(),Mw(132,`.`),Tl(),qi$2(133,`h2`,65)(134,`span`),Mw(135,`API`),Tl(),qi$2(136,`a`,66),Mw(137,`#`),Tl()(),qi$2(138,`h3`,67)(139,`span`),Mw(140,`nz-icon, [nz-icon]`),Tl(),qi$2(141,`label`,68),Mw(142,`component`),Tl(),qi$2(143,`a`,69),Mw(144,`#`),Tl()(),qi$2(145,`table`)(146,`thead`)(147,`tr`)(148,`th`),Mw(149,`Property`),Tl(),qi$2(150,`th`),Mw(151,`Description`),Tl(),qi$2(152,`th`),Mw(153,`Type`),Tl(),qi$2(154,`th`),Mw(155,`Default`),Tl(),qi$2(156,`th`),Mw(157,`Global Config`),Tl()()(),qi$2(158,`tbody`)(159,`tr`)(160,`td`)(161,`code`),Mw(162,`[nzType]`),Tl()(),qi$2(163,`td`),Mw(164,`Type of the ant design icon`),Tl(),qi$2(165,`td`)(166,`code`),Mw(167,`string`),Tl()(),qi$2(168,`td`),Mw(169,`-`),Tl(),qi$2(170,`td`),Mw(171,`-`),Tl()(),qi$2(172,`tr`)(173,`td`)(174,`code`),Mw(175,`[nzTheme]`),Tl()(),qi$2(176,`td`),Mw(177,`Type of the ant design icon`),Tl(),qi$2(178,`td`)(179,`code`),Mw(180,`'fill'|'outline'|'twotone'`),Tl()(),qi$2(181,`td`)(182,`code`),Mw(183,`'outline'`),Tl()(),qi$2(184,`td`),Mw(185,`✅`),Tl()(),qi$2(186,`tr`)(187,`td`)(188,`code`),Mw(189,`[nzSpin]`),Tl()(),qi$2(190,`td`),Mw(191,`Rotate icon with animation`),Tl(),qi$2(192,`td`)(193,`code`),Mw(194,`boolean`),Tl()(),qi$2(195,`td`)(196,`code`),Mw(197,`false`),Tl()(),qi$2(198,`td`),Mw(199,`-`),Tl()(),qi$2(200,`tr`)(201,`td`)(202,`code`),Mw(203,`[nzTwotoneColor]`),Tl()(),qi$2(204,`td`),Mw(205,`Primary color of the two-tone icon.`),Tl(),qi$2(206,`td`)(207,`code`),Mw(208,`string (hex color)`),Tl()(),qi$2(209,`td`),Mw(210,`-`),Tl(),qi$2(211,`td`),Mw(212,`✅`),Tl()(),qi$2(213,`tr`)(214,`td`)(215,`code`),Mw(216,`[nzIconfont]`),Tl()(),qi$2(217,`td`),Mw(218,`Type of the icon from iconfont`),Tl(),qi$2(219,`td`)(220,`code`),Mw(221,`string`),Tl()(),qi$2(222,`td`),Mw(223,`-`),Tl(),qi$2(224,`td`),Mw(225,`-`),Tl()(),qi$2(226,`tr`)(227,`td`)(228,`code`),Mw(229,`[nzRotate]`),Tl()(),qi$2(230,`td`),Mw(231,`Rotate degrees`),Tl(),qi$2(232,`td`)(233,`code`),Mw(234,`number`),Tl()(),qi$2(235,`td`),Mw(236,`-`),Tl(),qi$2(237,`td`),Mw(238,`-`),Tl()(),qi$2(239,`tr`)(240,`td`)(241,`code`),Mw(242,`[nzWidth]`),Tl()(),qi$2(243,`td`),Mw(244,`SVG width`),Tl(),qi$2(245,`td`)(246,`code`),Mw(247,`number|string`),Tl()(),qi$2(248,`td`)(249,`code`),Mw(250,`1em`),Tl()(),ng(251,`td`),Tl(),qi$2(252,`tr`)(253,`td`)(254,`code`),Mw(255,`[nzHeight]`),Tl()(),qi$2(256,`td`),Mw(257,`SVG height`),Tl(),qi$2(258,`td`)(259,`code`),Mw(260,`number|string`),Tl()(),qi$2(261,`td`)(262,`code`),Mw(263,`1em`),Tl()(),ng(264,`td`),Tl()()(),qi$2(265,`blockquote`)(266,`p`),Mw(267,`In `),qi$2(268,`code`),Mw(269,`feather`),Tl(),Mw(270,` folder, there are all `),qi$2(271,`a`,70),Mw(272,`official open source SVG icons for Bootstrap`),Tl(),Mw(273,` that can be viewed `),qi$2(274,`a`,71),Mw(275,`here`),Tl(),Mw(276,`. In `),qi$2(277,`code`),Mw(278,`fill`),Tl(),Mw(279,`, `),qi$2(280,`code`),Mw(281,`outline`),Tl(),Mw(282,` and `),qi$2(283,`code`),Mw(284,`twotone`),Tl(),Mw(285,` folders, there are all `),qi$2(286,`a`,72),Mw(287,`Ant Design SVG icons`),Tl(),Mw(288,` that can be viewed `),qi$2(289,`a`,64),Mw(290,`here`),Tl(),Mw(291,`. In `),qi$2(292,`code`),Mw(293,`custom`),Tl(),Mw(294,` folder, there are a few SVG icons added by hand witch can be accessed by `),qi$2(295,`code`),Mw(296,`nzType="custom:some-icon-file-name"`),Tl(),Mw(297,`.`),Tl()(),qi$2(298,`h3`,73)(299,`span`),Mw(300,`NzIconService`),Tl(),qi$2(301,`label`,74),Mw(302,`service`),Tl(),qi$2(303,`a`,75),Mw(304,`#`),Tl()(),qi$2(305,`table`)(306,`thead`)(307,`tr`)(308,`th`),Mw(309,`Methods`),Tl(),qi$2(310,`th`),Mw(311,`Description`),Tl(),qi$2(312,`th`),Mw(313,`Parameters`),Tl()()(),qi$2(314,`tbody`)(315,`tr`)(316,`td`)(317,`code`),Mw(318,`addIcon()`),Tl()(),qi$2(319,`td`),Mw(320,`To import icons statically`),Tl(),qi$2(321,`td`)(322,`code`),Mw(323,`IconDefinition`),Tl()()(),qi$2(324,`tr`)(325,`td`)(326,`code`),Mw(327,`addIconLiteral()`),Tl()(),qi$2(328,`td`),Mw(329,`To statically import custom icons`),Tl(),qi$2(330,`td`)(331,`code`),Mw(332,`string`),Tl(),Mw(333,`, `),qi$2(334,`code`),Mw(335,`string (SVG)`),Tl()()(),qi$2(336,`tr`)(337,`td`)(338,`code`),Mw(339,`fetchFromIconfont()`),Tl()(),qi$2(340,`td`),Mw(341,`To get icon assets from iconfont`),Tl(),qi$2(342,`td`)(343,`code`),Mw(344,`NzIconfontOption`),Tl()()(),qi$2(345,`tr`)(346,`td`)(347,`code`),Mw(348,`changeAssetsSource()`),Tl()(),qi$2(349,`td`),Mw(350,`Change the location of your icon assets, so that you can deploy them anywhere`),Tl(),qi$2(351,`td`)(352,`code`),Mw(353,`string`),Tl()()()()(),qi$2(354,`h3`,76)(355,`span`),Mw(356,`SVG icons`),Tl(),qi$2(357,`a`,77),Mw(358,`#`),Tl()(),qi$2(359,`p`),Mw(360,`NG-ZORRO supports svg icons, which bring benefits below:`),Tl(),qi$2(361,`ul`)(362,`li`),Mw(363,`Support multiple colors.`),Tl(),qi$2(364,`li`),Mw(365,`Much more display accuracy in lower-level devices.`),Tl(),qi$2(366,`li`),Mw(367,`Able to change built-in icons with more props but no styles override.`),Tl()(),qi$2(368,`p`),Mw(369,`You can use `),qi$2(370,`code`),Mw(371,`nz-icon`),Tl(),Mw(372,` component and specify the `),qi$2(373,`code`),Mw(374,`theme`),Tl(),Mw(375,` property.`),Tl(),qi$2(376,`pre`,78)(377,`code`)(378,`span`,79),Mw(379,`<`),qi$2(380,`span`,80),Mw(381,`nz-icon`),Tl(),Mw(382,` `),qi$2(383,`span`,81),Mw(384,`nzType`),Tl(),Mw(385,`=`),qi$2(386,`span`,82),Mw(387,`"star"`),Tl(),Mw(388,` `),qi$2(389,`span`,81),Mw(390,`nzTheme`),Tl(),Mw(391,`=`),qi$2(392,`span`,82),Mw(393,`"fill"`),Tl(),Mw(394,` />`),Tl()()(),qi$2(395,`h3`,83)(396,`span`),Mw(397,`Static loading and dynamic loading`),Tl(),qi$2(398,`a`,84),Mw(399,`#`),Tl()(),ng(400,`nz-alert`,85),qi$2(401,`p`)(402,`strong`),Mw(403,`Static loading`),Tl(),Mw(404,`. You can load icons statically by registering icons in `),qi$2(405,`code`),Mw(406,`app.config.ts`),Tl(),Mw(407,` with `),qi$2(408,`code`),Mw(409,`provideNzIcons`),Tl(),Mw(410,` API.`),Tl(),qi$2(411,`pre`,86)(412,`code`)(413,`span`,87),Mw(414,`import`),Tl(),Mw(415,` { `),qi$2(416,`span`,88),Mw(417,`IconDefinition`),Tl(),Mw(418,` } `),qi$2(419,`span`,87),Mw(420,`from`),Tl(),Mw(421,` `),qi$2(422,`span`,82),Mw(423,`'@ant-design/icons-angular'`),Tl(),Mw(424,`;
`),qi$2(425,`span`,87),Mw(426,`import`),Tl(),Mw(427,` { provideNzIcons } `),qi$2(428,`span`,87),Mw(429,`from`),Tl(),Mw(430,` `),qi$2(431,`span`,82),Mw(432,`'ng-zorro-antd/icon'`),Tl(),Mw(433,`;

`),qi$2(434,`span`,89),Mw(435,`// Import what you need. RECOMMENDED. ✔️`),Tl(),Mw(436,`
`),qi$2(437,`span`,87),Mw(438,`import`),Tl(),Mw(439,` { `),qi$2(440,`span`,88),Mw(441,`AccountBookFill`),Tl(),Mw(442,`, `),qi$2(443,`span`,88),Mw(444,`AlertFill`),Tl(),Mw(445,`, `),qi$2(446,`span`,88),Mw(447,`AlertOutline`),Tl(),Mw(448,` } `),qi$2(449,`span`,87),Mw(450,`from`),Tl(),Mw(451,` `),qi$2(452,`span`,82),Mw(453,`'@ant-design/icons-angular/icons'`),Tl(),Mw(454,`;

`),qi$2(455,`span`,87),Mw(456,`const`),Tl(),Mw(457,` `),qi$2(458,`span`,81),Mw(459,`icons`),Tl(),Mw(460,`: `),qi$2(461,`span`,88),Mw(462,`IconDefinition`),Tl(),Mw(463,`[] = [`),qi$2(464,`span`,88),Mw(465,`AccountBookFill`),Tl(),Mw(466,`, `),qi$2(467,`span`,88),Mw(468,`AlertOutline`),Tl(),Mw(469,`, `),qi$2(470,`span`,88),Mw(471,`AlertFill`),Tl(),Mw(472,`];

`),qi$2(473,`span`,89),Mw(474,`// Import all. NOT RECOMMENDED. ❌`),Tl(),Mw(475,`
`),qi$2(476,`span`,89),Mw(477,`// import * as AllIcons from '@ant-design/icons-angular/icons';`),Tl(),Mw(478,`

`),qi$2(479,`span`,89),Mw(480,`// const antDesignIcons = AllIcons as Record<string, IconDefinition>;`),Tl(),Mw(481,`
`),qi$2(482,`span`,89),Mw(483,`// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])`),Tl(),Mw(484,`

`),qi$2(485,`span`,87),Mw(486,`export`),Tl(),Mw(487,` `),qi$2(488,`span`,87),Mw(489,`const`),Tl(),Mw(490,` `),qi$2(491,`span`,81),Mw(492,`appConfig`),Tl(),Mw(493,`: `),qi$2(494,`span`,88),Mw(495,`ApplicationConfig`),Tl(),Mw(496,` = {
  `),qi$2(497,`span`,81),Mw(498,`providers`),Tl(),Mw(499,`: [`),qi$2(500,`span`,90),Mw(501,`provideNzIcons`),Tl(),Mw(502,`(icons)]
};`),Tl()(),qi$2(503,`p`),Mw(504,`Actually this calls `),qi$2(505,`code`),Mw(506,`addIcon`),Tl(),Mw(507,` of `),qi$2(508,`code`),Mw(509,`NzIconService`),Tl(),Mw(510,`. Imported icons would be bundled into your `),qi$2(511,`code`),Mw(512,`.js`),Tl(),Mw(513,` files.
Static loading may increase your bundle size, thus we recommend to use dynamic importing.`),Tl(),qi$2(514,`blockquote`)(515,`p`),Mw(516,`Icons used by `),qi$2(517,`code`),Mw(518,`NG-ZORRO`),Tl(),Mw(519,` itself are imported statically to increase loading speed. However, icons demonstrated on the
official website are loaded dynamically.`),Tl()(),qi$2(520,`p`)(521,`strong`),Mw(522,`Dynamic loading`),Tl(),Mw(523,`. This way would not increase your bundle size. When NG-ZORRO detects that the icon you want to
render hasn't been registered yet, it would fire an HTTP request to load it. All you have to do is to config your
`),qi$2(524,`code`),Mw(525,`angular.json`),Tl(),Mw(526,` like this:`),Tl(),qi$2(527,`pre`,91)(528,`code`)(529,`span`,92),Mw(530,`{`),Tl(),Mw(531,`
  `),qi$2(532,`span`,81),Mw(533,`"assets"`),Tl(),qi$2(534,`span`,92),Mw(535,`:`),Tl(),Mw(536,` `),qi$2(537,`span`,92),Mw(538,`[`),Tl(),Mw(539,`
    `),qi$2(540,`span`,92),Mw(541,`{`),Tl(),Mw(542,`
      `),qi$2(543,`span`,81),Mw(544,`"glob"`),Tl(),qi$2(545,`span`,92),Mw(546,`:`),Tl(),Mw(547,` `),qi$2(548,`span`,82),Mw(549,`"**/*"`),Tl(),qi$2(550,`span`,92),Mw(551,`,`),Tl(),Mw(552,`
      `),qi$2(553,`span`,81),Mw(554,`"input"`),Tl(),qi$2(555,`span`,92),Mw(556,`:`),Tl(),Mw(557,` `),qi$2(558,`span`,82),Mw(559,`"./node_modules/@ant-design/icons-angular/src/inline-svg/"`),Tl(),qi$2(560,`span`,92),Mw(561,`,`),Tl(),Mw(562,`
      `),qi$2(563,`span`,81),Mw(564,`"output"`),Tl(),qi$2(565,`span`,92),Mw(566,`:`),Tl(),Mw(567,` `),qi$2(568,`span`,82),Mw(569,`"/assets/"`),Tl(),Mw(570,`
    `),qi$2(571,`span`,92),Mw(572,`}`),Tl(),Mw(573,`
  `),qi$2(574,`span`,92),Mw(575,`]`),Tl(),Mw(576,`
`),qi$2(577,`span`,92),Mw(578,`}`),Tl()()(),qi$2(579,`p`),Mw(580,`You can call `),qi$2(581,`code`),Mw(582,`changeAssetsSource()`),Tl(),Mw(583,` of `),qi$2(584,`code`),Mw(585,`NzIconService`),Tl(),Mw(586,` to change the location of your icon assets, so that you can
deploy the assets to CDN. The parameter you passed would be added in front of `),qi$2(587,`code`),Mw(588,`assets/`),Tl(),Mw(589,`.`),Tl(),qi$2(590,`p`),Mw(591,`Assume that you deploy the static assets under `),qi$2(592,`code`),Mw(593,`https://mycdn.somecdn.com/icons/assets`),Tl(),Mw(594,`. You can call
`),qi$2(595,`code`),Mw(596,`changeAssetsSource('https://mycdn.somecdn.com/icons')`),Tl(),Mw(597,` to tell NG-ZORRO that all your resources are located there.`),Tl(),qi$2(598,`h3`,93)(599,`span`),Mw(600,`Add Icons in Lazy-loaded Components`),Tl(),qi$2(601,`a`,94),Mw(602,`#`),Tl()(),qi$2(603,`p`),Mw(604,`Sometimes, you want to import icons in lazy components to avoid increasing the size of the `),qi$2(605,`code`),Mw(606,`main.js`),Tl(),Mw(607,`.
You can import icons in `),qi$2(608,`code`),Mw(609,`providers`),Tl(),Mw(610,` of the component or router with `),qi$2(611,`code`),Mw(612,`provideNzIconsPatch`),Tl(),Mw(613,` API.`),Tl(),qi$2(614,`pre`,86)(615,`code`)(616,`span`,87),Mw(617,`import`),Tl(),Mw(618,` { `),qi$2(619,`span`,88),Mw(620,`NzIconModule`),Tl(),Mw(621,`, provideNzIconsPatch } `),qi$2(622,`span`,87),Mw(623,`from`),Tl(),Mw(624,` `),qi$2(625,`span`,82),Mw(626,`'ng-zorro-antd/icon'`),Tl(),Mw(627,`;

`),qi$2(628,`span`,89),Mw(629,`// in xxx.component.ts`),Tl(),Mw(630,`
`),qi$2(631,`span`,95),Mw(632,`@Component`),Tl(),Mw(633,`({
  `),qi$2(634,`span`,81),Mw(635,`imports`),Tl(),Mw(636,`: [`),qi$2(637,`span`,88),Mw(638,`NzIconModule`),Tl(),Mw(639,`],
  `),qi$2(640,`span`,81),Mw(641,`providers`),Tl(),Mw(642,`: [`),qi$2(643,`span`,90),Mw(644,`provideNzIconsPatch`),Tl(),Mw(645,`([`),qi$2(646,`span`,88),Mw(647,`QuestionOutline`),Tl(),Mw(648,`])]
})
`),qi$2(649,`span`,87),Mw(650,`class`),Tl(),Mw(651,` `),qi$2(652,`span`,88),Mw(653,`ChildComponent`),Tl(),Mw(654,` {}

`),qi$2(655,`span`,89),Mw(656,`// or in xxx.routes.ts`),Tl(),Mw(657,`
`),qi$2(658,`span`,87),Mw(659,`const`),Tl(),Mw(660,` `),qi$2(661,`span`,81),Mw(662,`routes`),Tl(),Mw(663,`: `),qi$2(664,`span`,88),Mw(665,`Routes`),Tl(),Mw(666,` = [
  {
    `),qi$2(667,`span`,81),Mw(668,`path`),Tl(),Mw(669,`: `),qi$2(670,`span`,82),Mw(671,`''`),Tl(),Mw(672,`,
    `),qi$2(673,`span`,81),Mw(674,`providers`),Tl(),Mw(675,`: [`),qi$2(676,`span`,90),Mw(677,`provideNzIconsPatch`),Tl(),Mw(678,`([`),qi$2(679,`span`,88),Mw(680,`QuestionOutline`),Tl(),Mw(681,`])]
  }
];`),Tl()(),qi$2(682,`p`),Mw(683,`Once the QuestionOutline icon get loaded, it would be usable across the application.`),Tl(),qi$2(684,`h3`,96)(685,`span`),Mw(686,`Set Default TwoTone Color`),Tl(),qi$2(687,`a`,97),Mw(688,`#`),Tl()(),qi$2(689,`p`),Mw(690,`When using two-tone icons, you should provide a global configuration like `),qi$2(691,`code`),Mw(692,`{ nzIcon: { nzTwotoneColor: 'xxx' } }`),Tl(),Mw(693,` via `),qi$2(694,`code`),Mw(695,`NzConfigService`),Tl(),Mw(696,` or call corresponding `),qi$2(697,`code`),Mw(698,`set`),Tl(),Mw(699,` method to change to default twotone color.`),Tl(),qi$2(700,`h3`,98)(701,`span`),Mw(702,`Custom Font Icon`),Tl(),qi$2(703,`a`,99),Mw(704,`#`),Tl()(),qi$2(705,`p`),Mw(706,`We provided a `),qi$2(707,`code`),Mw(708,`fetchFromIconfont`),Tl(),Mw(709,` method, which is specified for iconfont, to help you use your own icons deployed at `),qi$2(710,`a`,100),Mw(711,`iconfont.cn`),Tl(),Mw(712,` in a convenient way.`),Tl(),qi$2(713,`pre`,86)(714,`code`)(715,`span`,101),Mw(716,`this`),Tl(),Mw(717,`.`),qi$2(718,`span`,102),Mw(719,`_iconService`),Tl(),Mw(720,`.`),qi$2(721,`span`,90),Mw(722,`fetchFromIconfont`),Tl(),Mw(723,`({
  `),qi$2(724,`span`,81),Mw(725,`scriptUrl`),Tl(),Mw(726,`: `),qi$2(727,`span`,82),Mw(728,`'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'`),Tl(),Mw(729,`
});`),Tl()(),qi$2(730,`p`),Mw(731,`And then you can use it like this:`),Tl(),qi$2(732,`pre`,78)(733,`code`)(734,`span`,79),Mw(735,`<`),qi$2(736,`span`,80),Mw(737,`nz-icon`),Tl(),Mw(738,` `),qi$2(739,`span`,81),Mw(740,`nzIconfont`),Tl(),Mw(741,`=`),qi$2(742,`span`,82),Mw(743,`"icon-tuichu"`),Tl(),Mw(744,` />`),Tl()()(),qi$2(745,`p`),Mw(746,`It creates a component that uses SVG sprites in essence.`),Tl(),qi$2(747,`p`),Mw(748,`The following options are available:`),Tl(),qi$2(749,`table`)(750,`thead`)(751,`tr`)(752,`th`),Mw(753,`Property`),Tl(),qi$2(754,`th`),Mw(755,`Description`),Tl(),qi$2(756,`th`),Mw(757,`Type`),Tl(),qi$2(758,`th`),Mw(759,`Default`),Tl()()(),qi$2(760,`tbody`)(761,`tr`)(762,`td`)(763,`code`),Mw(764,`scriptUrl`),Tl()(),qi$2(765,`td`),Mw(766,`The URL generated by iconfont.cn project.`),Tl(),qi$2(767,`td`)(768,`code`),Mw(769,`string`),Tl()(),qi$2(770,`td`),Mw(771,`-`),Tl()()()(),qi$2(772,`p`),Mw(773,`The property `),qi$2(774,`code`),Mw(775,`scriptUrl`),Tl(),Mw(776,` should be set to import the svg sprite symbols.`),Tl(),qi$2(777,`p`),Mw(778,`See `),qi$2(779,`a`,103),Mw(780,`iconfont.cn document`),Tl(),Mw(781,` to learn about how to generate the `),qi$2(782,`code`),Mw(783,`scriptUrl`),Tl(),Mw(784,`.`),Tl(),qi$2(785,`h3`,104)(786,`span`),Mw(787,`Namespace`),Tl(),qi$2(788,`a`,105),Mw(789,`#`),Tl()(),qi$2(790,`p`),Mw(791,`We introduced namespace so you could add your own icons in a convenient way.
When you want to render an icon, you could assign `),qi$2(792,`code`),Mw(793,`type`),Tl(),qi$2(794,`code`),Mw(795,`namespace:name`),Tl(),Mw(796,`. Dynamic importing and static importing are both supported.`),Tl(),qi$2(797,`p`),Mw(798,`Static importing. Invoke `),qi$2(799,`code`),Mw(800,`addIconLiteral`),Tl(),Mw(801,` of `),qi$2(802,`code`),Mw(803,`NzIconService`),Tl(),Mw(804,`.`),Tl(),qi$2(805,`p`),Mw(806,`Dynamic importing. Make sure that you have put your SVG resources in directory like `),qi$2(807,`code`),Mw(808,"assets/${namespace}"),Tl(),Mw(809,`.
For example, if you have an `),qi$2(810,`code`),Mw(811,`angular`),Tl(),Mw(812,` icon and a `),qi$2(813,`code`),Mw(814,`custom`),Tl(),Mw(815,` namespace, you should put the file `),qi$2(816,`code`),Mw(817,`angular.js`),Tl(),Mw(818,` in `),qi$2(819,`code`),Mw(820,`assets/custom`),Tl(),Mw(821,`.`),Tl(),qi$2(822,`pre`,78)(823,`code`)(824,`span`,79),Mw(825,`<`),qi$2(826,`span`,80),Mw(827,`nz-icon`),Tl(),Mw(828,` `),qi$2(829,`span`,81),Mw(830,`nzType`),Tl(),Mw(831,`=`),qi$2(832,`span`,82),Mw(833,`"custom:angular"`),Tl(),Mw(834,` `),qi$2(835,`span`,81),Mw(836,`nzWidth`),Tl(),Mw(837,`=`),qi$2(838,`span`,82),Mw(839,`"180px"`),Tl(),Mw(840,` `),qi$2(841,`span`,81),Mw(842,`nzHeight`),Tl(),Mw(843,`=`),qi$2(844,`span`,82),Mw(845,`"180px"`),Tl(),Mw(846,` />`),Tl()()(),qi$2(847,`p`),Mw(848,`See `),qi$2(849,`a`,106),Mw(850,`custom`),Tl(),Mw(851,` assets for this website.`),Tl(),qi$2(852,`h2`,107)(853,`span`),Mw(854,`FAQ`),Tl(),qi$2(855,`a`,108),Mw(856,`#`),Tl()(),qi$2(857,`h3`,109)(858,`span`),Mw(859,`All my icons are gone!`),Tl(),qi$2(860,`a`,110),Mw(861,`#`),Tl()(),qi$2(862,`p`),Mw(863,`Have you ever read the docs above?`),Tl(),qi$2(864,`h3`,111)(865,`span`),Mw(866,`There are two similar icons in a `),qi$2(867,`code`),Mw(868,`<span></span>`),Tl(),Mw(869,` tag. What happened?`),Tl(),qi$2(870,`a`,112),Mw(871,`#`),Tl()(),qi$2(872,`p`),Mw(873,`In older versions of NG-ZORRO, there was a font file which would use `),qi$2(874,`code`),Mw(875,`:before`),Tl(),Mw(876,` to insert an icon according to a `),qi$2(877,`code`),Mw(878,`<i>`),Tl(),Mw(879,` tag's `),qi$2(880,`code`),Mw(881,`class`),Tl(),Mw(882,`.
So if you have two icons, try to remove `),qi$2(883,`code`),Mw(884,`node_modules`),Tl(),Mw(885,` and install again. If the problem is still there, search `),qi$2(886,`code`),Mw(887,`@icon-url`),Tl(),Mw(888,` and remove that line.`),Tl(),qi$2(889,`h3`,113)(890,`span`),Mw(891,`I want to import all icons statically. What should I do?`),Tl(),qi$2(892,`a`,114),Mw(893,`#`),Tl()(),qi$2(894,`p`),Mw(895,`Although it is not recommended, actually we demonstrate it at section `),qi$2(896,`a`,115),Mw(897,`Static loading and dynamic loading`),Tl(),Mw(898,`:`),Tl(),qi$2(899,`pre`,86)(900,`code`)(901,`span`,87),Mw(902,`import`),Tl(),Mw(903,` * `),qi$2(904,`span`,87),Mw(905,`as`),Tl(),Mw(906,` `),qi$2(907,`span`,88),Mw(908,`AllIcons`),Tl(),Mw(909,` `),qi$2(910,`span`,87),Mw(911,`from`),Tl(),Mw(912,` `),qi$2(913,`span`,82),Mw(914,`'@ant-design/icons-angular/icons'`),Tl(),Mw(915,`;

`),qi$2(916,`span`,87),Mw(917,`const`),Tl(),Mw(918,` antDesignIcons = `),qi$2(919,`span`,88),Mw(920,`AllIcons`),Tl(),Mw(921,` `),qi$2(922,`span`,87),Mw(923,`as`),Tl(),Mw(924,` `),qi$2(925,`span`,88),Mw(926,`Record`),Tl(),Mw(927,`<`),qi$2(928,`span`,116),Mw(929,`string`),Tl(),Mw(930,`, `),qi$2(931,`span`,88),Mw(932,`IconDefinition`),Tl(),Mw(933,`>;
`),qi$2(934,`span`,87),Mw(935,`const`),Tl(),Mw(936,` `),qi$2(937,`span`,81),Mw(938,`icons`),Tl(),Mw(939,`: `),qi$2(940,`span`,88),Mw(941,`IconDefinition`),Tl(),Mw(942,`[] = `),qi$2(943,`span`,88),Mw(944,`Object`),Tl(),Mw(945,`.`),qi$2(946,`span`,90),Mw(947,`keys`),Tl(),Mw(948,`(antDesignIcons).`),qi$2(949,`span`,90),Mw(950,`map`),Tl(),Mw(951,`(`),qi$2(952,`span`,117)(953,`span`,118),Mw(954,`key`),Tl(),Mw(955,` =>`),Tl(),Mw(956,` antDesignIcons[key]);`),Tl()(),qi$2(957,`h3`,119)(958,`span`),Mw(959,`Does dynamic loading affect web pages' performance?`),Tl(),qi$2(960,`a`,120),Mw(961,`#`),Tl()(),qi$2(962,`p`),Mw(963,`We used several methods to reduce requests, such as static cache, dynamic cache and reusable request.
It's basically not noticeable for visitors that icons are loaded asynchronously assuming web connections are fairly good.`),Tl(),qi$2(964,`h3`,121)(965,`span`),Mw(966,`How do I know an icon's corresponding module to import?`),Tl(),qi$2(967,`a`,122),Mw(968,`#`),Tl()(),qi$2(969,`p`),Mw(970,`Capital camel-case `),qi$2(971,`code`),Mw(972,`type & theme`),Tl(),Mw(973,`, i.e. `),qi$2(974,`code`),Mw(975,`alibaba`),Tl(),Mw(976,` => `),qi$2(977,`code`),Mw(978,`AlibabaOutline`),Tl(),Mw(979,`.`),Tl()()()()),o&2&&(IE(),tg(`nzBordered`,!0),IE(6),tg(`nzOffsetTop`,45),IE(6),Ag(`ngModel`,r.enableNavigation),tg(`ngModelOptions`,Hw(9,xi)),lD(),IE(),tg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()),IE(43),tg(`width`,r.width()),IE(2),tg(`width`,r.width()))},dependencies:[ml,Nr,Ds,Te,yt,ae,bt,re,Bt,Et,zg,cd,cr$1,ir,Fa,I9,O9,Vn,qi$1,_n,ji$1,Jo,Za,El,ga$1,ma$1,So,Ve,pe,wu,pa$1],encapsulation:2})}return a})();var gi=()=>({standalone:!0});function Si(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,88),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,89),ng(3,`nz-icon`,90),Tl()(),Sl()}}function ui(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,88),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,89),Mw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var rt=110;var Pn=(()=>{class a{destroyRef=_(ae$1);router=_(Te$1);#e=_(q0);injector=_(se);viewPort=_(O7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){sV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-rt>640?this.width.set(640):this.width.set(this.windowWidth()-rt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-rt>640?this.width.set(640):this.width.set(i-rt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(iV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`nz-blog-dotnet-core-testing`]],features:[Vw([{provide:lt$1,useValue:{disableCookies:!0,loadApi:!1}}])],decls:2937,vars:12,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-5a486561`,`nzTitle`,`MyTested Library Out of The Box`],[`nzHref`,`#h-24135ede`,`nzTitle`,`.NET Core Identity Controller Implementation`],[`nzHref`,`#h-c9515f97`,`nzTitle`,`IdentityController`],[`nzHref`,`#h-88d4cd62`,`nzTitle`,`.NET Core Identity Service Implementation`],[`nzHref`,`#h-6278f57b`,`nzTitle`,`IdentityService`],[`nzHref`,`#h-3505cd43`,`nzTitle`,`Data Validation with FluentValidation Library`],[`nzHref`,`#h-6f8b794f`,`nzTitle`,`Conclusion`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20230605-dotnet-core-testing.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`href`,`https://versionsof.net/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/LICENSE`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/LICENSE`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[`nz-row`,``,`nzJustify`,`center`,1,`p-t-24`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/MyTested-test-project-example/refs/heads/main/test-run.png`,`alt`,`test-run`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`href`,`https://github.com/cioina/MyTested-test-project-example`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-5a486561`],[`onclick`,`window.location.hash = 'h-5a486561'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/realworld-example-app/blob/main/src/Conduit/ServicesExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-csharp`],[1,`hljs-keyword`],[1,`hljs-title`],[1,`hljs-meta`],[1,`hljs-function`],[1,`hljs-string`],[`id`,`h-24135ede`],[`onclick`,`window.location.hash = 'h-24135ede'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Web/Features/IdentityController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-c9515f97`],[`onclick`,`window.location.hash = 'h-c9515f97'`,1,`anchor`],[`id`,`h-88d4cd62`],[`onclick`,`window.location.hash = 'h-88d4cd62'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Infrastructure/Identity/Services/IdentityService.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6278f57b`],[`onclick`,`window.location.hash = 'h-6278f57b'`,1,`anchor`],[1,`hljs-params`],[1,`hljs-built_in`],[1,`hljs-literal`],[1,`hljs-number`],[1,`hljs-subst`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Users/LoginTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-comment`],[`id`,`h-3505cd43`],[`onclick`,`window.location.hash = 'h-3505cd43'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/realworld-apps/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Articles/Create.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs#L696`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6f8b794f`],[`onclick`,`window.location.hash = 'h-6f8b794f'`,1,`anchor`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/ivaylokenov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ardalis`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanprodan`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jbogard`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/BenMorris`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(qi$2(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Zh(5,Si,4,0,`ng-container`,5)(6,ui,4,0,`ng-container`,5),Tl()()(),qi$2(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),cg(`click`,function(){return r.scrollTop()}),Mw(11,`Jump to top`),Tl()(),qi$2(12,`div`,3)(13,`nz-switch`,9),aD(),Rg(`ngModelChange`,function(g){return Aw(r.enableNavigation,g)||(r.enableNavigation=g),g}),cg(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),qi$2(14,`nz-anchor`,10),cg(`nzClick`,function(g){return r.goLink(g)}),ng(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19),Tl()(),qi$2(24,`span`,20),Mw(25,` ASP.NET Core 10 Testing`),ng(26,`span`,21)(27,`span`,22),qi$2(28,`a`,23),ng(29,`nz-icon`,24),Tl()(),qi$2(30,`article`,25)(31,`blockquote`,26)(32,`p`)(33,`strong`),Mw(34,`All C# code from this article was tested using `),qi$2(35,`a`,27),Mw(36,`.NET Core 10.0.14`),Tl(),Mw(37,`, modified source code of `),qi$2(38,`a`,28),Mw(39,`MyTested.AspNetCore.Mvc - Fluent Testing Library for ASP.NET Core MVC`),Tl(),Mw(40,` provided under `),qi$2(41,`a`,29),Mw(42,`Apache License, Version 2.0 or Microsoft Public License (Ms-PL)`),Tl(),Mw(43,`, and modified source code of `),qi$2(44,`a`,30),Mw(45,`BookStore`),Tl(),Mw(46,` provided under `),qi$2(47,`a`,31),Mw(48,`MIT License`),Tl()()()(),qi$2(49,`h2`,32)(50,`span`),Mw(51,`Introduction`),Tl(),qi$2(52,`a`,33),Mw(53,`#`),Tl()(),qi$2(54,`div`,34),ng(55,`img`,35),Tl(),qi$2(56,`p`),Mw(57,`In this article, we will give an example of testing of .NET Core code. We will use `),qi$2(58,`a`,28),Mw(59,`MyTested`),Tl(),Mw(60,` - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 10 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 10 project is based on `),qi$2(61,`a`,30),Mw(62,`BookStore`),Tl(),Mw(63,` repository and adapted to work with MyTested library. A full test project example is on `),qi$2(64,`a`,36),Mw(65,`our GitHub repository`),Tl(),Mw(66,`.`),Tl(),qi$2(67,`p`),Mw(68,`The main focus of our example is testing of the standard `),qi$2(69,`code`),Mw(70,`User Identity`),Tl(),Mw(71,` provided by `),qi$2(72,`code`),Mw(73,`Microsoft.AspNetCore.Identity`),Tl(),Mw(74,`. The access to the user is provided by `),qi$2(75,`code`),Mw(76,`UserManager<User>`),Tl(),Mw(77,` micro service. The source code of all our examples is copied and pasted from our actual application. The compiled code of our .NET Core 10 application can be found on `),qi$2(78,`a`,37),Mw(79,`our GitHub repository`),Tl(),Mw(80,`.`),Tl(),qi$2(81,`p`),Mw(82,`One of the advantages of having of a detailed test module for standard `),qi$2(83,`code`),Mw(84,`Microsoft.AspNetCore.Identity`),Tl(),Mw(85,` implementation is the fact that it is used very frequently in .NET Core applications. Following, we will give examples of API controller, the implementation of `),qi$2(86,`code`),Mw(87,`User Identity`),Tl(),Mw(88,` with Bearer Header Authorization based on JWT token and an example of a comprehensive `),qi$2(89,`code`),Mw(90,`User Identity`),Tl(),Mw(91,` controller testing.`),Tl(),qi$2(92,`h2`,38)(93,`span`),Mw(94,`MyTested Library Out of The Box`),Tl(),qi$2(95,`a`,39),Mw(96,`#`),Tl()(),qi$2(97,`p`),Mw(98,`I found out about MyTested for the first time from `),qi$2(99,`a`,40),Mw(100,`BlazorShop`),Tl(),Mw(101,` repository. At the same time, I found out about `),qi$2(102,`code`),Mw(103,`JwtAuthentication`),Tl(),Mw(104,` implementation from same `),qi$2(105,`a`,41),Mw(106,`BlazorShop`),Tl(),Mw(107,` repository and from `),qi$2(108,`a`,42),Mw(109,`realworld-example-app`),Tl(),Mw(110,` repository. Both `),qi$2(111,`code`),Mw(112,`JwtAuthentication`),Tl(),Mw(113,` implementations did not work with original `),qi$2(114,`a`,28),Mw(115,`MyTested`),Tl(),Mw(116,` library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was able only to add some small pieces of code to make MyTested and my own `),qi$2(117,`code`),Mw(118,`JwtAuthentication`),Tl(),Mw(119,` implementation work and not to break any original MyTested tests. But, what MyTested can do out of the box? The best answer is in `),qi$2(120,`a`,43),Mw(121,`MusicStore`),Tl(),Mw(122,` testing project. For the API controller, `),qi$2(123,`a`,44),Mw(124,`here`),Tl(),Mw(125,` is an example:`),Tl(),qi$2(126,`pre`,45)(127,`code`)(128,`span`,46),Mw(129,`using`),Tl(),Mw(130,` BlogAngular.Application.Common.Version;
`),qi$2(131,`span`,46),Mw(132,`using`),Tl(),Mw(133,` BlogAngular.Web.Features;
`),qi$2(134,`span`,46),Mw(135,`using`),Tl(),Mw(136,` MyTested.AspNetCore.Mvc;
`),qi$2(137,`span`,46),Mw(138,`using`),Tl(),Mw(139,` Xunit;

`),qi$2(140,`span`,46),Mw(141,`namespace`),Tl(),Mw(142,` `),qi$2(143,`span`,47),Mw(144,`BlogAngular.Test.Routing`),Tl(),Mw(145,`
{
    `),qi$2(146,`span`,46),Mw(147,`public`),Tl(),Mw(148,` `),qi$2(149,`span`,46),Mw(150,`class`),Tl(),Mw(151,` `),qi$2(152,`span`,47),Mw(153,`FrontEndRouteTest`),Tl(),Mw(154,`
    {
        [`),qi$2(155,`span`,48),Mw(156,`Fact`),Tl(),Mw(157,`]
        `),qi$2(158,`span`,49)(159,`span`,46),Mw(160,`public`),Tl(),Mw(161,` `),qi$2(162,`span`,46),Mw(163,`void`),Tl(),Mw(164,` `),qi$2(165,`span`,47),Mw(166,`VersionShouldBeRouted`),Tl(),Mw(167,`()`),Tl(),Mw(168,`
        => MyMvc
        .Pipeline()
        .ShouldMap(request => request
            .WithMethod(HttpMethod.Get)
            .WithLocation(`),qi$2(169,`span`,50),Mw(170,`"api/v1.0/version"`),Tl(),Mw(171,`))
        .To<VersionController>(c => c.Index())
        .Which()
        .ShouldReturn()
        .ActionResult(result => result.Result(`),qi$2(172,`span`,46),Mw(173,`new`),Tl(),Mw(174,` VersionResponseEnvelope
        {
            VersionJson = `),qi$2(175,`span`,46),Mw(176,`new`),Tl(),Mw(177,` VersionResponseModel()
        }));
    }
}`),Tl()(),qi$2(178,`h2`,51)(179,`span`),Mw(180,`.NET Core Identity Controller Implementation`),Tl(),qi$2(181,`a`,52),Mw(182,`#`),Tl()(),qi$2(183,`p`),Mw(184,`Our controller implementation is based on `),qi$2(185,`a`,53),Mw(186,`this GitHub repository`),Tl(),Mw(187,`. We added two more methods: `),qi$2(188,`code`),Mw(189,`LoginPassword`),Tl(),Mw(190,` and `),qi$2(191,`code`),Mw(192,`Update`),Tl(),Mw(193,` with `),qi$2(194,`code`),Mw(195,`[Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy)]`),Tl(),Mw(196,` attribute that uses Bearer Header Authorization based on JWT token implementation provided by .NET Core 10. Our Angular 20 application that runs in a web browser will make a request to the endpoint `),qi$2(197,`code`),Mw(198,`http://localhost:5000/api/v1.0/identity/update`),Tl(),Mw(199,`. The request has an Authorization header with a JWT token. The request body has some data in JSON format. Our .NET Core 10 application must authenticate the user based on the JWT token and authorize the user based on a specific policy. Once the user passes the authorization process, the application must execute a command and return some data in JSON format. Below, we give an example of an `),qi$2(200,`a`,54),Mw(201,`API controller`),Tl()(),qi$2(202,`h3`,55)(203,`span`),Mw(204,`IdentityController`),Tl(),qi$2(205,`a`,56),Mw(206,`#`),Tl()(),qi$2(207,`pre`,45)(208,`code`)(209,`span`,46),Mw(210,`using`),Tl(),Mw(211,` BlogAngular.Application.Identity.Commands.Common;
`),qi$2(212,`span`,46),Mw(213,`using`),Tl(),Mw(214,` BlogAngular.Application.Identity.Commands.Login;
`),qi$2(215,`span`,46),Mw(216,`using`),Tl(),Mw(217,` BlogAngular.Application.Identity.Commands.Register;
`),qi$2(218,`span`,46),Mw(219,`using`),Tl(),Mw(220,` BlogAngular.Application.Identity.Commands.Update;
`),qi$2(221,`span`,46),Mw(222,`using`),Tl(),Mw(223,` Microsoft.AspNetCore.Authorization;
`),qi$2(224,`span`,46),Mw(225,`using`),Tl(),Mw(226,` Microsoft.AspNetCore.Mvc;
`),qi$2(227,`span`,46),Mw(228,`using`),Tl(),Mw(229,` System.Threading.Tasks;

`),qi$2(230,`span`,46),Mw(231,`using`),Tl(),Mw(232,` `),qi$2(233,`span`,46),Mw(234,`static`),Tl(),Mw(235,` BlogAngular.Domain.Common.Models.ModelConstants.Identity;

`),qi$2(236,`span`,46),Mw(237,`namespace`),Tl(),Mw(238,` `),qi$2(239,`span`,47),Mw(240,`BlogAngular.Web.Features`),Tl(),Mw(241,`
{
    `),qi$2(242,`span`,46),Mw(243,`public`),Tl(),Mw(244,` `),qi$2(245,`span`,46),Mw(246,`class`),Tl(),Mw(247,` `),qi$2(248,`span`,47),Mw(249,`IdentityController`),Tl(),Mw(250,` : `),qi$2(251,`span`,47),Mw(252,`ApiController`),Tl(),Mw(253,`
    {
        [`),qi$2(254,`span`,48),Mw(255,`HttpPost`),Tl(),Mw(256,`]
        [`),qi$2(257,`span`,48),Mw(258,`Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)`),Tl(),Mw(259,`]
        `),qi$2(260,`span`,46),Mw(261,`public`),Tl(),Mw(262,` `),qi$2(263,`span`,46),Mw(264,`async`),Tl(),Mw(265,` Task<ActionResult<UserResponseEnvelope>> LoginPassword(
            LoginPasswordCommand command)
            => `),qi$2(266,`span`,46),Mw(267,`await`),Tl(),Mw(268,` `),qi$2(269,`span`,46),Mw(270,`this`),Tl(),Mw(271,`.Send(command);

        [`),qi$2(272,`span`,48),Mw(273,`HttpPost`),Tl(),Mw(274,`]
        [`),qi$2(275,`span`,48),Mw(276,`Route(nameof(Login))`),Tl(),Mw(277,`]
        `),qi$2(278,`span`,46),Mw(279,`public`),Tl(),Mw(280,` `),qi$2(281,`span`,46),Mw(282,`async`),Tl(),Mw(283,` Task<ActionResult<UserResponseEnvelope>> Login(
            UserLoginCommand command)
            => `),qi$2(284,`span`,46),Mw(285,`await`),Tl(),Mw(286,` `),qi$2(287,`span`,46),Mw(288,`this`),Tl(),Mw(289,`.Send(command);

        [`),qi$2(290,`span`,48),Mw(291,`HttpPost`),Tl(),Mw(292,`]
        [`),qi$2(293,`span`,48),Mw(294,`Route(nameof(Register))`),Tl(),Mw(295,`]
        `),qi$2(296,`span`,46),Mw(297,`public`),Tl(),Mw(298,` `),qi$2(299,`span`,46),Mw(300,`async`),Tl(),Mw(301,` Task<ActionResult<UserResponseEnvelope>> Register(
            UserRegisterCommand command)
            => `),qi$2(302,`span`,46),Mw(303,`await`),Tl(),Mw(304,` `),qi$2(305,`span`,46),Mw(306,`this`),Tl(),Mw(307,`.Send(command);

        [`),qi$2(308,`span`,48),Mw(309,`HttpPut`),Tl(),Mw(310,`]
        [`),qi$2(311,`span`,48),Mw(312,`Route(nameof(Update))`),Tl(),Mw(313,`]
        [`),qi$2(314,`span`,48),Mw(315,`Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)`),Tl(),Mw(316,`]
        `),qi$2(317,`span`,46),Mw(318,`public`),Tl(),Mw(319,` `),qi$2(320,`span`,46),Mw(321,`async`),Tl(),Mw(322,` Task<ActionResult<UserResponseEnvelope>> Update(
            UserUpdateCommand command)
            => `),qi$2(323,`span`,46),Mw(324,`await`),Tl(),Mw(325,` `),qi$2(326,`span`,46),Mw(327,`this`),Tl(),Mw(328,`.Send(command);
    }
}`),Tl()(),qi$2(329,`h2`,57)(330,`span`),Mw(331,`.NET Core Identity Service Implementation`),Tl(),qi$2(332,`a`,58),Mw(333,`#`),Tl()(),qi$2(334,`p`),Mw(335,`Our service implementation is based on `),qi$2(336,`a`,59),Mw(337,`this GitHub repository`),Tl(),Mw(338,`. As we said earlier, this kind of `),qi$2(339,`code`),Mw(340,`Identity Service`),Tl(),Mw(341,` will look the same for all .NET Core 10 applications that use a standard `),qi$2(342,`code`),Mw(343,`Microsoft.AspNetCore.Identity`),Tl(),Mw(344,` implementation. Below, there is an example that we copied and pasted direct from our actual application.`),Tl(),qi$2(345,`h3`,60)(346,`span`),Mw(347,`IdentityService`),Tl(),qi$2(348,`a`,61),Mw(349,`#`),Tl()(),qi$2(350,`pre`,45)(351,`code`)(352,`span`,46),Mw(353,`using`),Tl(),Mw(354,` BlogAngular.Application.Common;
`),qi$2(355,`span`,46),Mw(356,`using`),Tl(),Mw(357,` BlogAngular.Application.Common.Models;
`),qi$2(358,`span`,46),Mw(359,`using`),Tl(),Mw(360,` BlogAngular.Application.Identity;
`),qi$2(361,`span`,46),Mw(362,`using`),Tl(),Mw(363,` BlogAngular.Application.Identity.Commands.Common;
`),qi$2(364,`span`,46),Mw(365,`using`),Tl(),Mw(366,` BlogAngular.Application.Identity.Commands.Register;
`),qi$2(367,`span`,46),Mw(368,`using`),Tl(),Mw(369,` BlogAngular.Application.Identity.Commands.Update;
`),qi$2(370,`span`,46),Mw(371,`using`),Tl(),Mw(372,` BlogAngular.Application.Identity.Queries.Profile;
`),qi$2(373,`span`,46),Mw(374,`using`),Tl(),Mw(375,` BlogAngular.Domain.Common.Events.Identity;
`),qi$2(376,`span`,46),Mw(377,`using`),Tl(),Mw(378,` BlogAngular.Infrastructure.Common.Events;
`),qi$2(379,`span`,46),Mw(380,`using`),Tl(),Mw(381,` BlogAngular.Infrastructure.Common.Extensions;
`),qi$2(382,`span`,46),Mw(383,`using`),Tl(),Mw(384,` Microsoft.AspNetCore.Hosting;
`),qi$2(385,`span`,46),Mw(386,`using`),Tl(),Mw(387,` Microsoft.AspNetCore.Http;
`),qi$2(388,`span`,46),Mw(389,`using`),Tl(),Mw(390,` Microsoft.AspNetCore.Identity;
`),qi$2(391,`span`,46),Mw(392,`using`),Tl(),Mw(393,` Microsoft.Extensions.Options;
`),qi$2(394,`span`,46),Mw(395,`using`),Tl(),Mw(396,` System;
`),qi$2(397,`span`,46),Mw(398,`using`),Tl(),Mw(399,` System.Collections.Generic;
`),qi$2(400,`span`,46),Mw(401,`using`),Tl(),Mw(402,` System.Security.Claims;
`),qi$2(403,`span`,46),Mw(404,`using`),Tl(),Mw(405,` System.Threading.Tasks;

`),qi$2(406,`span`,46),Mw(407,`namespace`),Tl(),Mw(408,` `),qi$2(409,`span`,47),Mw(410,`BlogAngular.Infrastructure.Identity.Services`),Tl(),Mw(411,`
{
    `),qi$2(412,`span`,49)(413,`span`,46),Mw(414,`internal`),Tl(),Mw(415,` `),qi$2(416,`span`,46),Mw(417,`class`),Tl(),Mw(418,` `),qi$2(419,`span`,47),Mw(420,`IdentityService`),Tl(),Mw(421,`(`),qi$2(422,`span`,62),Mw(423,`
        IWebHostEnvironment env,
        UserManager<User> userManager,
        IJwtGenerator jwtGenerator,
        IEventDispatcher eventDispatcher,
        IOptions<ApplicationSettings> applicationSettings,
        IHttpContextAccessor httpContextAccessor
            `),Tl(),Mw(424,`) : IIdentity`),Tl(),Mw(425,`
    {
        `),qi$2(426,`span`,46),Mw(427,`private`),Tl(),Mw(428,` `),qi$2(429,`span`,46),Mw(430,`const`),Tl(),Mw(431,` `),qi$2(432,`span`,63),Mw(433,`string`),Tl(),Mw(434,` InvalidErrorMessage = `),qi$2(435,`span`,50),Mw(436,`"Invalid credentials."`),Tl(),Mw(437,`;
        `),qi$2(438,`span`,46),Mw(439,`private`),Tl(),Mw(440,` `),qi$2(441,`span`,46),Mw(442,`const`),Tl(),Mw(443,` `),qi$2(444,`span`,63),Mw(445,`string`),Tl(),Mw(446,` NoDataErrorMessage = `),qi$2(447,`span`,50),Mw(448,`"There is no data to process."`),Tl(),Mw(449,`;
        `),qi$2(450,`span`,46),Mw(451,`private`),Tl(),Mw(452,` `),qi$2(453,`span`,46),Mw(454,`const`),Tl(),Mw(455,` `),qi$2(456,`span`,63),Mw(457,`string`),Tl(),Mw(458,` IdentityErrorMessage = `),qi$2(459,`span`,50),Mw(460,`"Something went wrong. The server may be down."`),Tl(),Mw(461,`;
        `),qi$2(462,`span`,46),Mw(463,`private`),Tl(),Mw(464,` `),qi$2(465,`span`,46),Mw(466,`const`),Tl(),Mw(467,` `),qi$2(468,`span`,63),Mw(469,`string`),Tl(),Mw(470,` IdentityRoleErrorMessage = `),qi$2(471,`span`,50),Mw(472,`@"Cannot find role {0}"`),Tl(),Mw(473,`;
        `),qi$2(474,`span`,46),Mw(475,`private`),Tl(),Mw(476,` `),qi$2(477,`span`,46),Mw(478,`const`),Tl(),Mw(479,` `),qi$2(480,`span`,63),Mw(481,`string`),Tl(),Mw(482,` UserNameTakenErrorMessage = `),qi$2(483,`span`,50),Mw(484,`"The user name has been taken."`),Tl(),Mw(485,`;
        `),qi$2(486,`span`,46),Mw(487,`private`),Tl(),Mw(488,` `),qi$2(489,`span`,46),Mw(490,`const`),Tl(),Mw(491,` `),qi$2(492,`span`,63),Mw(493,`string`),Tl(),Mw(494,` EmailTakenErrorMessage = `),qi$2(495,`span`,50),Mw(496,`"The email has been taken."`),Tl(),Mw(497,`;
        `),qi$2(498,`span`,46),Mw(499,`private`),Tl(),Mw(500,` `),qi$2(501,`span`,46),Mw(502,`const`),Tl(),Mw(503,` `),qi$2(504,`span`,63),Mw(505,`string`),Tl(),Mw(506,` UserNullErrorMessage = `),qi$2(507,`span`,50),Mw(508,`"Cannot find user by Id."`),Tl(),Mw(509,`;
        `),qi$2(510,`span`,46),Mw(511,`private`),Tl(),Mw(512,` `),qi$2(513,`span`,46),Mw(514,`const`),Tl(),Mw(515,` `),qi$2(516,`span`,63),Mw(517,`string`),Tl(),Mw(518,` ProfileErrorMessage = `),qi$2(519,`span`,50),Mw(520,`"Cannot find user profile."`),Tl(),Mw(521,`;
        `),qi$2(522,`span`,46),Mw(523,`private`),Tl(),Mw(524,` `),qi$2(525,`span`,46),Mw(526,`const`),Tl(),Mw(527,` `),qi$2(528,`span`,63),Mw(529,`string`),Tl(),Mw(530,` UsernameFormatErrorMessage = `),qi$2(531,`span`,50),Mw(532,`"Username must contain letters and numbers."`),Tl(),Mw(533,`;
        `),qi$2(534,`span`,46),Mw(535,`private`),Tl(),Mw(536,` `),qi$2(537,`span`,46),Mw(538,`const`),Tl(),Mw(539,` `),qi$2(540,`span`,63),Mw(541,`string`),Tl(),Mw(542,` PasswordFormatErrorMessage = `),qi$2(543,`span`,50),Mw(544,`"Password required upper and lower case letters, digits, and at least one special symbol."`),Tl(),Mw(545,`;
        `),qi$2(546,`span`,46),Mw(547,`private`),Tl(),Mw(548,` `),qi$2(549,`span`,46),Mw(550,`const`),Tl(),Mw(551,` `),qi$2(552,`span`,63),Mw(553,`string`),Tl(),Mw(554,` PasswordDeletedErrorMessage = `),qi$2(555,`span`,50),Mw(556,`"The old password was deleted. You must provide a new password."`),Tl(),Mw(557,`;
        `),qi$2(558,`span`,46),Mw(559,`private`),Tl(),Mw(560,` `),qi$2(561,`span`,46),Mw(562,`const`),Tl(),Mw(563,` `),qi$2(564,`span`,63),Mw(565,`string`),Tl(),Mw(566,` LockoutErrorMessage = `),qi$2(567,`span`,50),Mw(568,`@"You have been lockout for {0} minutes.{1}"`),Tl(),Mw(569,`;
        `),qi$2(570,`span`,46),Mw(571,`private`),Tl(),Mw(572,` `),qi$2(573,`span`,46),Mw(574,`const`),Tl(),Mw(575,` `),qi$2(576,`span`,63),Mw(577,`string`),Tl(),Mw(578,` LockoutEnabledErrorMessage = `),qi$2(579,`span`,50),Mw(580,`"Lockout setting is not enabled."`),Tl(),Mw(581,`;

        `),qi$2(582,`span`,46),Mw(583,`private`),Tl(),Mw(584,` `),qi$2(585,`span`,46),Mw(586,`readonly`),Tl(),Mw(587,` IWebHostEnvironment env = env;
        `),qi$2(588,`span`,46),Mw(589,`private`),Tl(),Mw(590,` `),qi$2(591,`span`,46),Mw(592,`readonly`),Tl(),Mw(593,` UserManager<User> userManager = userManager;
        `),qi$2(594,`span`,46),Mw(595,`private`),Tl(),Mw(596,` `),qi$2(597,`span`,46),Mw(598,`readonly`),Tl(),Mw(599,` IJwtGenerator jwtGenerator = jwtGenerator;
        `),qi$2(600,`span`,46),Mw(601,`private`),Tl(),Mw(602,` `),qi$2(603,`span`,46),Mw(604,`readonly`),Tl(),Mw(605,` IEventDispatcher eventDispatcher = eventDispatcher;
        `),qi$2(606,`span`,46),Mw(607,`private`),Tl(),Mw(608,` `),qi$2(609,`span`,46),Mw(610,`readonly`),Tl(),Mw(611,` ApplicationSettings applicationSettings = applicationSettings.Value;
        `),qi$2(612,`span`,46),Mw(613,`private`),Tl(),Mw(614,` `),qi$2(615,`span`,46),Mw(616,`readonly`),Tl(),Mw(617,` IHttpContextAccessor httpContextAccessor = httpContextAccessor;
        `),qi$2(618,`span`,46),Mw(619,`internal`),Tl(),Mw(620,` `),qi$2(621,`span`,46),Mw(622,`static`),Tl(),Mw(623,` `),qi$2(624,`span`,46),Mw(625,`readonly`),Tl(),Mw(626,` `),qi$2(627,`span`,63),Mw(628,`string`),Tl(),Mw(629,`[] registerNotImplemented = [`),qi$2(630,`span`,50),Mw(631,`"Register is not implemented yet."`),Tl(),Mw(632,`];

        `),qi$2(633,`span`,48),Mw(634,`#`),qi$2(635,`span`,46),Mw(636,`region`),Tl(),Mw(637,` IsInRoleAsync`),Tl(),Mw(638,`
        `),qi$2(639,`span`,46),Mw(640,`public`),Tl(),Mw(641,` `),qi$2(642,`span`,46),Mw(643,`async`),Tl(),Mw(644,` Task<Result<`),qi$2(645,`span`,63),Mw(646,`bool`),Tl(),Mw(647,`>> IsInRoleAsync()
        {
            ClaimsPrincipal? claimsPrincipal = `),qi$2(648,`span`,46),Mw(649,`this`),Tl(),Mw(650,`.httpContextAccessor.HttpContext!.User!;
            `),qi$2(651,`span`,46),Mw(652,`if`),Tl(),Mw(653,` (claimsPrincipal != `),qi$2(654,`span`,64),Mw(655,`null`),Tl(),Mw(656,`)
            {
                `),qi$2(657,`span`,46),Mw(658,`var`),Tl(),Mw(659,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),qi$2(660,`span`,46),Mw(661,`if`),Tl(),Mw(662,` (isAuthenticated == `),qi$2(663,`span`,64),Mw(664,`null`),Tl(),Mw(665,` || !(`),qi$2(666,`span`,63),Mw(667,`bool`),Tl(),Mw(668,`)isAuthenticated)
                {
                    `),qi$2(669,`span`,46),Mw(670,`return`),Tl(),Mw(671,` Result<`),qi$2(672,`span`,63),Mw(673,`bool`),Tl(),Mw(674,`>.Failure(`),qi$2(675,`span`,46),Mw(676,`new`),Tl(),Mw(677,` Dictionary<`),qi$2(678,`span`,63),Mw(679,`string`),Tl(),Mw(680,`, `),qi$2(681,`span`,63),Mw(682,`string`),Tl(),Mw(683,`[]>
                {
                    { `),qi$2(684,`span`,50),Mw(685,`"identity_error"`),Tl(),Mw(686,`, `),qi$2(687,`span`,46),Mw(688,`new`),Tl(),Mw(689,`[] { IdentityErrorMessage } }
                });
                }
            }
            `),qi$2(690,`span`,46),Mw(691,`else`),Tl(),Mw(692,`
            {
                `),qi$2(693,`span`,46),Mw(694,`return`),Tl(),Mw(695,` Result<`),qi$2(696,`span`,63),Mw(697,`bool`),Tl(),Mw(698,`>.Failure(`),qi$2(699,`span`,46),Mw(700,`new`),Tl(),Mw(701,` Dictionary<`),qi$2(702,`span`,63),Mw(703,`string`),Tl(),Mw(704,`, `),qi$2(705,`span`,63),Mw(706,`string`),Tl(),Mw(707,`[]>
            {
                { `),qi$2(708,`span`,50),Mw(709,`"identity_error"`),Tl(),Mw(710,`, `),qi$2(711,`span`,46),Mw(712,`new`),Tl(),Mw(713,`[] { IdentityErrorMessage } }
            });
            }

            User? user;
            `),qi$2(714,`span`,46),Mw(715,`if`),Tl(),Mw(716,` (`),qi$2(717,`span`,46),Mw(718,`this`),Tl(),Mw(719,`.env.EnvironmentName == `),qi$2(720,`span`,50),Mw(721,`"Test"`),Tl(),Mw(722,`)
            {
                `),qi$2(723,`span`,46),Mw(724,`var`),Tl(),Mw(725,` name = claimsPrincipal.Identity?.Name;
                `),qi$2(726,`span`,46),Mw(727,`if`),Tl(),Mw(728,` (name == `),qi$2(729,`span`,64),Mw(730,`null`),Tl(),Mw(731,`)
                {
                    `),qi$2(732,`span`,46),Mw(733,`return`),Tl(),Mw(734,` Result<`),qi$2(735,`span`,63),Mw(736,`bool`),Tl(),Mw(737,`>.Failure(`),qi$2(738,`span`,46),Mw(739,`new`),Tl(),Mw(740,` Dictionary<`),qi$2(741,`span`,63),Mw(742,`string`),Tl(),Mw(743,`, `),qi$2(744,`span`,63),Mw(745,`string`),Tl(),Mw(746,`[]>
                {
                    { `),qi$2(747,`span`,50),Mw(748,`"debug_error"`),Tl(),Mw(749,`, `),qi$2(750,`span`,46),Mw(751,`new`),Tl(),Mw(752,`[] { IdentityErrorMessage } }
                });
                }
                user = `),qi$2(753,`span`,46),Mw(754,`await`),Tl(),Mw(755,` `),qi$2(756,`span`,46),Mw(757,`this`),Tl(),Mw(758,`.userManager.FindByEmailAsync(name);
            }
            `),qi$2(759,`span`,46),Mw(760,`else`),Tl(),Mw(761,`
            {
                `),qi$2(762,`span`,46),Mw(763,`var`),Tl(),Mw(764,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),qi$2(765,`span`,46),Mw(766,`if`),Tl(),Mw(767,` (claim == `),qi$2(768,`span`,64),Mw(769,`null`),Tl(),Mw(770,`)
                {
                    `),qi$2(771,`span`,46),Mw(772,`return`),Tl(),Mw(773,` Result<`),qi$2(774,`span`,63),Mw(775,`bool`),Tl(),Mw(776,`>.Failure(`),qi$2(777,`span`,46),Mw(778,`new`),Tl(),Mw(779,` Dictionary<`),qi$2(780,`span`,63),Mw(781,`string`),Tl(),Mw(782,`, `),qi$2(783,`span`,63),Mw(784,`string`),Tl(),Mw(785,`[]>
                {
                    { `),qi$2(786,`span`,50),Mw(787,`"name_identifier_error"`),Tl(),Mw(788,`, `),qi$2(789,`span`,46),Mw(790,`new`),Tl(),Mw(791,`[] { IdentityErrorMessage } }
                });
                }
                user = `),qi$2(792,`span`,46),Mw(793,`await`),Tl(),Mw(794,` `),qi$2(795,`span`,46),Mw(796,`this`),Tl(),Mw(797,`.userManager.FindByIdAsync(claim.Value);
            }

            `),qi$2(798,`span`,46),Mw(799,`if`),Tl(),Mw(800,` (user == `),qi$2(801,`span`,64),Mw(802,`null`),Tl(),Mw(803,`)
            {
                `),qi$2(804,`span`,46),Mw(805,`return`),Tl(),Mw(806,` Result<`),qi$2(807,`span`,63),Mw(808,`bool`),Tl(),Mw(809,`>.Failure(`),qi$2(810,`span`,46),Mw(811,`new`),Tl(),Mw(812,` Dictionary<`),qi$2(813,`span`,63),Mw(814,`string`),Tl(),Mw(815,`, `),qi$2(816,`span`,63),Mw(817,`string`),Tl(),Mw(818,`[]>
            {
                { `),qi$2(819,`span`,50),Mw(820,`"user_error"`),Tl(),Mw(821,`, `),qi$2(822,`span`,46),Mw(823,`new`),Tl(),Mw(824,`[] { UserNullErrorMessage } }
            });
            }

            `),qi$2(825,`span`,46),Mw(826,`var`),Tl(),Mw(827,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),qi$2(828,`span`,46),Mw(829,`if`),Tl(),Mw(830,` (claimRole == `),qi$2(831,`span`,64),Mw(832,`null`),Tl(),Mw(833,`)
            {
                `),qi$2(834,`span`,46),Mw(835,`return`),Tl(),Mw(836,` Result<`),qi$2(837,`span`,63),Mw(838,`bool`),Tl(),Mw(839,`>.Failure(`),qi$2(840,`span`,46),Mw(841,`new`),Tl(),Mw(842,` Dictionary<`),qi$2(843,`span`,63),Mw(844,`string`),Tl(),Mw(845,`, `),qi$2(846,`span`,63),Mw(847,`string`),Tl(),Mw(848,`[]>
                {
                    { `),qi$2(849,`span`,50),Mw(850,`"is_in_role_error"`),Tl(),Mw(851,`, `),qi$2(852,`span`,46),Mw(853,`new`),Tl(),Mw(854,`[] { `),qi$2(855,`span`,63),Mw(856,`string`),Tl(),Mw(857,`.Format(IdentityRoleErrorMessage, `),qi$2(858,`span`,50),Mw(859,`""`),Tl(),Mw(860,`) } }
                });
            }
            `),qi$2(861,`span`,46),Mw(862,`var`),Tl(),Mw(863,` isInRole = `),qi$2(864,`span`,46),Mw(865,`await`),Tl(),Mw(866,` `),qi$2(867,`span`,46),Mw(868,`this`),Tl(),Mw(869,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),qi$2(870,`span`,46),Mw(871,`if`),Tl(),Mw(872,` (!isInRole)
            {
                `),qi$2(873,`span`,46),Mw(874,`return`),Tl(),Mw(875,` Result<`),qi$2(876,`span`,63),Mw(877,`bool`),Tl(),Mw(878,`>.Failure(`),qi$2(879,`span`,46),Mw(880,`new`),Tl(),Mw(881,` Dictionary<`),qi$2(882,`span`,63),Mw(883,`string`),Tl(),Mw(884,`, `),qi$2(885,`span`,63),Mw(886,`string`),Tl(),Mw(887,`[]>
                {
                    { `),qi$2(888,`span`,50),Mw(889,`"is_in_role_error"`),Tl(),Mw(890,`, `),qi$2(891,`span`,46),Mw(892,`new`),Tl(),Mw(893,`[] { `),qi$2(894,`span`,63),Mw(895,`string`),Tl(),Mw(896,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),qi$2(897,`span`,46),Mw(898,`return`),Tl(),Mw(899,` `),qi$2(900,`span`,64),Mw(901,`true`),Tl(),Mw(902,`;
        }
        `),qi$2(903,`span`,48),Mw(904,`#`),qi$2(905,`span`,46),Mw(906,`endregion`),Tl()(),Mw(907,`

        `),qi$2(908,`span`,48),Mw(909,`#`),qi$2(910,`span`,46),Mw(911,`region`),Tl(),Mw(912,` LoginPassword  `),Tl(),Mw(913,`
        `),qi$2(914,`span`,46),Mw(915,`public`),Tl(),Mw(916,` `),qi$2(917,`span`,46),Mw(918,`async`),Tl(),Mw(919,` Task<Result<UserResponseEnvelope>> LoginPassword(LoginPasswordCommand userRequest)
        {
            `),qi$2(920,`span`,46),Mw(921,`if`),Tl(),Mw(922,` (userRequest.UserJson.Password == `),qi$2(923,`span`,64),Mw(924,`null`),Tl(),Mw(925,`)
            {
                `),qi$2(926,`span`,46),Mw(927,`return`),Tl(),Mw(928,` Result<UserResponseEnvelope>.Failure(`),qi$2(929,`span`,46),Mw(930,`new`),Tl(),Mw(931,` Dictionary<`),qi$2(932,`span`,63),Mw(933,`string`),Tl(),Mw(934,`, `),qi$2(935,`span`,63),Mw(936,`string`),Tl(),Mw(937,`[]>
            {
                { `),qi$2(938,`span`,50),Mw(939,`"no_data_error"`),Tl(),Mw(940,`, `),qi$2(941,`span`,46),Mw(942,`new`),Tl(),Mw(943,`[] { NoDataErrorMessage } }
            });
            }

            `),qi$2(944,`span`,63),Mw(945,`bool`),Tl(),Mw(946,` isNewToken = `),qi$2(947,`span`,64),Mw(948,`false`),Tl(),Mw(949,`;
            ClaimsPrincipal? claimsPrincipal = `),qi$2(950,`span`,46),Mw(951,`this`),Tl(),Mw(952,`.httpContextAccessor.HttpContext!.User!;
            `),qi$2(953,`span`,46),Mw(954,`if`),Tl(),Mw(955,` (claimsPrincipal != `),qi$2(956,`span`,64),Mw(957,`null`),Tl(),Mw(958,`)
            {
                `),qi$2(959,`span`,46),Mw(960,`var`),Tl(),Mw(961,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),qi$2(962,`span`,46),Mw(963,`if`),Tl(),Mw(964,` (isAuthenticated == `),qi$2(965,`span`,64),Mw(966,`null`),Tl(),Mw(967,` || !(`),qi$2(968,`span`,63),Mw(969,`bool`),Tl(),Mw(970,`)isAuthenticated)
                {
                    `),qi$2(971,`span`,46),Mw(972,`return`),Tl(),Mw(973,` Result<UserResponseEnvelope>.Failure(`),qi$2(974,`span`,46),Mw(975,`new`),Tl(),Mw(976,` Dictionary<`),qi$2(977,`span`,63),Mw(978,`string`),Tl(),Mw(979,`, `),qi$2(980,`span`,63),Mw(981,`string`),Tl(),Mw(982,`[]>
                {
                    { `),qi$2(983,`span`,50),Mw(984,`"identity_error"`),Tl(),Mw(985,`, `),qi$2(986,`span`,46),Mw(987,`new`),Tl(),Mw(988,`[] { IdentityErrorMessage } }
                });
                }
                `),qi$2(989,`span`,46),Mw(990,`var`),Tl(),Mw(991,` iat = claimsPrincipal.FindFirst(`),qi$2(992,`span`,50),Mw(993,`"iat"`),Tl(),Mw(994,`);
                `),qi$2(995,`span`,46),Mw(996,`var`),Tl(),Mw(997,` exp = claimsPrincipal.FindFirst(`),qi$2(998,`span`,50),Mw(999,`"exp"`),Tl(),Mw(1e3,`);
                `),qi$2(1001,`span`,46),Mw(1002,`if`),Tl(),Mw(1003,` (iat == `),qi$2(1004,`span`,64),Mw(1005,`null`),Tl(),Mw(1006,` || exp == `),qi$2(1007,`span`,64),Mw(1008,`null`),Tl(),Mw(1009,`)
                {
                    `),qi$2(1010,`span`,46),Mw(1011,`return`),Tl(),Mw(1012,` Result<UserResponseEnvelope>.Failure(`),qi$2(1013,`span`,46),Mw(1014,`new`),Tl(),Mw(1015,` Dictionary<`),qi$2(1016,`span`,63),Mw(1017,`string`),Tl(),Mw(1018,`, `),qi$2(1019,`span`,63),Mw(1020,`string`),Tl(),Mw(1021,`[]>
                {
                    { `),qi$2(1022,`span`,50),Mw(1023,`"identity_error"`),Tl(),Mw(1024,`, `),qi$2(1025,`span`,46),Mw(1026,`new`),Tl(),Mw(1027,`[] { IdentityErrorMessage } }
                });
                }

                `),qi$2(1028,`span`,46),Mw(1029,`var`),Tl(),Mw(1030,` rate = (`),qi$2(1031,`span`,63),Mw(1032,`long`),Tl(),Mw(1033,`.Parse(exp.Value) - `),qi$2(1034,`span`,63),Mw(1035,`long`),Tl(),Mw(1036,`.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                `),qi$2(1037,`span`,46),Mw(1038,`var`),Tl(),Mw(1039,` current = `),qi$2(1040,`span`,63),Mw(1041,`long`),Tl(),Mw(1042,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            `),qi$2(1043,`span`,46),Mw(1044,`else`),Tl(),Mw(1045,`
            {
                `),qi$2(1046,`span`,46),Mw(1047,`return`),Tl(),Mw(1048,` Result<UserResponseEnvelope>.Failure(`),qi$2(1049,`span`,46),Mw(1050,`new`),Tl(),Mw(1051,` Dictionary<`),qi$2(1052,`span`,63),Mw(1053,`string`),Tl(),Mw(1054,`, `),qi$2(1055,`span`,63),Mw(1056,`string`),Tl(),Mw(1057,`[]>
            {
                { `),qi$2(1058,`span`,50),Mw(1059,`"identity_error"`),Tl(),Mw(1060,`, `),qi$2(1061,`span`,46),Mw(1062,`new`),Tl(),Mw(1063,`[] { IdentityErrorMessage } }
            });
            }

            User? user;
            `),qi$2(1064,`span`,46),Mw(1065,`if`),Tl(),Mw(1066,` (`),qi$2(1067,`span`,46),Mw(1068,`this`),Tl(),Mw(1069,`.env.EnvironmentName == `),qi$2(1070,`span`,50),Mw(1071,`"Test"`),Tl(),Mw(1072,`)
            {
                `),qi$2(1073,`span`,46),Mw(1074,`var`),Tl(),Mw(1075,` name = claimsPrincipal.Identity?.Name;
                `),qi$2(1076,`span`,46),Mw(1077,`if`),Tl(),Mw(1078,` (name == `),qi$2(1079,`span`,64),Mw(1080,`null`),Tl(),Mw(1081,`)
                {
                    `),qi$2(1082,`span`,46),Mw(1083,`return`),Tl(),Mw(1084,` Result<UserResponseEnvelope>.Failure(`),qi$2(1085,`span`,46),Mw(1086,`new`),Tl(),Mw(1087,` Dictionary<`),qi$2(1088,`span`,63),Mw(1089,`string`),Tl(),Mw(1090,`, `),qi$2(1091,`span`,63),Mw(1092,`string`),Tl(),Mw(1093,`[]>
                {
                    { `),qi$2(1094,`span`,50),Mw(1095,`"debug_error"`),Tl(),Mw(1096,`, `),qi$2(1097,`span`,46),Mw(1098,`new`),Tl(),Mw(1099,`[] { IdentityErrorMessage } }
                });
                }
                user = `),qi$2(1100,`span`,46),Mw(1101,`await`),Tl(),Mw(1102,` `),qi$2(1103,`span`,46),Mw(1104,`this`),Tl(),Mw(1105,`.userManager.FindByEmailAsync(name);
            }
            `),qi$2(1106,`span`,46),Mw(1107,`else`),Tl(),Mw(1108,`
            {
                `),qi$2(1109,`span`,46),Mw(1110,`var`),Tl(),Mw(1111,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),qi$2(1112,`span`,46),Mw(1113,`if`),Tl(),Mw(1114,` (claim == `),qi$2(1115,`span`,64),Mw(1116,`null`),Tl(),Mw(1117,`)
                {
                    `),qi$2(1118,`span`,46),Mw(1119,`return`),Tl(),Mw(1120,` Result<UserResponseEnvelope>.Failure(`),qi$2(1121,`span`,46),Mw(1122,`new`),Tl(),Mw(1123,` Dictionary<`),qi$2(1124,`span`,63),Mw(1125,`string`),Tl(),Mw(1126,`, `),qi$2(1127,`span`,63),Mw(1128,`string`),Tl(),Mw(1129,`[]>
                {
                    { `),qi$2(1130,`span`,50),Mw(1131,`"name_identifier_error"`),Tl(),Mw(1132,`, `),qi$2(1133,`span`,46),Mw(1134,`new`),Tl(),Mw(1135,`[] { IdentityErrorMessage } }
                });
                }
                user = `),qi$2(1136,`span`,46),Mw(1137,`await`),Tl(),Mw(1138,` `),qi$2(1139,`span`,46),Mw(1140,`this`),Tl(),Mw(1141,`.userManager.FindByIdAsync(claim.Value);
            }

            `),qi$2(1142,`span`,46),Mw(1143,`if`),Tl(),Mw(1144,` (user == `),qi$2(1145,`span`,64),Mw(1146,`null`),Tl(),Mw(1147,`)
            {
                `),qi$2(1148,`span`,46),Mw(1149,`return`),Tl(),Mw(1150,` Result<UserResponseEnvelope>.Failure(`),qi$2(1151,`span`,46),Mw(1152,`new`),Tl(),Mw(1153,` Dictionary<`),qi$2(1154,`span`,63),Mw(1155,`string`),Tl(),Mw(1156,`, `),qi$2(1157,`span`,63),Mw(1158,`string`),Tl(),Mw(1159,`[]>
            {
                { `),qi$2(1160,`span`,50),Mw(1161,`"user_error"`),Tl(),Mw(1162,`, `),qi$2(1163,`span`,46),Mw(1164,`new`),Tl(),Mw(1165,`[] { UserNullErrorMessage } }
            });
            }

            `),qi$2(1166,`span`,46),Mw(1167,`var`),Tl(),Mw(1168,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),qi$2(1169,`span`,46),Mw(1170,`if`),Tl(),Mw(1171,` (claimRole == `),qi$2(1172,`span`,64),Mw(1173,`null`),Tl(),Mw(1174,`)
            {
                `),qi$2(1175,`span`,46),Mw(1176,`return`),Tl(),Mw(1177,` Result<UserResponseEnvelope>.Failure(`),qi$2(1178,`span`,46),Mw(1179,`new`),Tl(),Mw(1180,` Dictionary<`),qi$2(1181,`span`,63),Mw(1182,`string`),Tl(),Mw(1183,`, `),qi$2(1184,`span`,63),Mw(1185,`string`),Tl(),Mw(1186,`[]>
                {
                    { `),qi$2(1187,`span`,50),Mw(1188,`"is_in_role_error"`),Tl(),Mw(1189,`, `),qi$2(1190,`span`,46),Mw(1191,`new`),Tl(),Mw(1192,`[] { `),qi$2(1193,`span`,63),Mw(1194,`string`),Tl(),Mw(1195,`.Format(IdentityRoleErrorMessage, `),qi$2(1196,`span`,50),Mw(1197,`""`),Tl(),Mw(1198,`) } }
                });
            }
            `),qi$2(1199,`span`,46),Mw(1200,`var`),Tl(),Mw(1201,` isInRole = `),qi$2(1202,`span`,46),Mw(1203,`await`),Tl(),Mw(1204,` `),qi$2(1205,`span`,46),Mw(1206,`this`),Tl(),Mw(1207,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),qi$2(1208,`span`,46),Mw(1209,`if`),Tl(),Mw(1210,` (!isInRole)
            {
                `),qi$2(1211,`span`,46),Mw(1212,`return`),Tl(),Mw(1213,` Result<UserResponseEnvelope>.Failure(`),qi$2(1214,`span`,46),Mw(1215,`new`),Tl(),Mw(1216,` Dictionary<`),qi$2(1217,`span`,63),Mw(1218,`string`),Tl(),Mw(1219,`, `),qi$2(1220,`span`,63),Mw(1221,`string`),Tl(),Mw(1222,`[]>
                {
                    { `),qi$2(1223,`span`,50),Mw(1224,`"is_in_role_error"`),Tl(),Mw(1225,`, `),qi$2(1226,`span`,46),Mw(1227,`new`),Tl(),Mw(1228,`[] { `),qi$2(1229,`span`,63),Mw(1230,`string`),Tl(),Mw(1231,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),qi$2(1232,`span`,46),Mw(1233,`var`),Tl(),Mw(1234,` isLockoutEnabled = `),qi$2(1235,`span`,46),Mw(1236,`await`),Tl(),Mw(1237,` userManager.GetLockoutEnabledAsync(user);

            `),qi$2(1238,`span`,46),Mw(1239,`if`),Tl(),Mw(1240,` (isLockoutEnabled)
            {
                `),qi$2(1241,`span`,46),Mw(1242,`var`),Tl(),Mw(1243,` count = `),qi$2(1244,`span`,46),Mw(1245,`await`),Tl(),Mw(1246,` userManager.GetAccessFailedCountAsync(user);
                `),qi$2(1247,`span`,46),Mw(1248,`if`),Tl(),Mw(1249,` (count == applicationSettings.MaxFailedAccessAttempts - `),qi$2(1250,`span`,65),Mw(1251,`1`),Tl(),Mw(1252,`)
                {
                    `),qi$2(1253,`span`,46),Mw(1254,`var`),Tl(),Mw(1255,` endDate = `),qi$2(1256,`span`,46),Mw(1257,`await`),Tl(),Mw(1258,` userManager.GetLockoutEndDateAsync(user);
                    `),qi$2(1259,`span`,46),Mw(1260,`var`),Tl(),Mw(1261,` currentDate = DateTimeOffset.UtcNow;
                    `),qi$2(1262,`span`,46),Mw(1263,`if`),Tl(),Mw(1264,` (endDate > currentDate)
                    {
                        `),qi$2(1265,`span`,46),Mw(1266,`return`),Tl(),Mw(1267,` Result<UserResponseEnvelope>.Failure(`),qi$2(1268,`span`,46),Mw(1269,`new`),Tl(),Mw(1270,` Dictionary<`),qi$2(1271,`span`,63),Mw(1272,`string`),Tl(),Mw(1273,`, `),qi$2(1274,`span`,63),Mw(1275,`string`),Tl(),Mw(1276,`[]>
                    {
                        { `),qi$2(1277,`span`,50),Mw(1278,`"lockout_error"`),Tl(),Mw(1279,`, `),qi$2(1280,`span`,46),Mw(1281,`new`),Tl(),Mw(1282,`[] {  `),qi$2(1283,`span`,63),Mw(1284,`string`),Tl(),Mw(1285,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,`),qi$2(1286,`span`,50),Mw(1287,`""`),Tl(),Mw(1288,`) } }
                    });
                    }
                }

                `),qi$2(1289,`span`,46),Mw(1290,`var`),Tl(),Mw(1291,` passwordValid = `),qi$2(1292,`span`,46),Mw(1293,`await`),Tl(),Mw(1294,` `),qi$2(1295,`span`,46),Mw(1296,`this`),Tl(),Mw(1297,`.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                `),qi$2(1298,`span`,46),Mw(1299,`if`),Tl(),Mw(1300,` (!passwordValid)
                {
                    `),qi$2(1301,`span`,46),Mw(1302,`var`),Tl(),Mw(1303,` accessFailed = `),qi$2(1304,`span`,46),Mw(1305,`await`),Tl(),Mw(1306,` `),qi$2(1307,`span`,46),Mw(1308,`this`),Tl(),Mw(1309,`.userManager.AccessFailedAsync(user);
                    `),qi$2(1310,`span`,46),Mw(1311,`if`),Tl(),Mw(1312,` (!accessFailed.Succeeded)
                    {
                        `),qi$2(1313,`span`,46),Mw(1314,`var`),Tl(),Mw(1315,` errors = `),qi$2(1316,`span`,46),Mw(1317,`new`),Tl(),Mw(1318,` Dictionary<`),qi$2(1319,`span`,63),Mw(1320,`string`),Tl(),Mw(1321,`, `),qi$2(1322,`span`,63),Mw(1323,`string`),Tl(),Mw(1324,`[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            `),qi$2(1325,`span`,46),Mw(1326,`switch`),Tl(),Mw(1327,` (e.Code)
                            {
                                `),qi$2(1328,`span`,46),Mw(1329,`case`),Tl(),Mw(1330,` `),qi$2(1331,`span`,50),Mw(1332,`"TODO: need to debug e.Code"`),Tl(),Mw(1333,`:
                                    e.Description = `),qi$2(1334,`span`,63),Mw(1335,`string`),Tl(),Mw(1336,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, `),qi$2(1337,`span`,50),Mw(1338,`""`),Tl(),Mw(1339,`);
                                    `),qi$2(1340,`span`,46),Mw(1341,`break`),Tl(),Mw(1342,`;
                            }

                            e.Description = `),qi$2(1343,`span`,63),Mw(1344,`string`),Tl(),Mw(1345,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, [e.Description]);
                        });

                        `),qi$2(1346,`span`,46),Mw(1347,`return`),Tl(),Mw(1348,` Result<UserResponseEnvelope>.Failure(errors);
                    }

                    `),qi$2(1349,`span`,46),Mw(1350,`return`),Tl(),Mw(1351,` Result<UserResponseEnvelope>.Failure(`),qi$2(1352,`span`,46),Mw(1353,`new`),Tl(),Mw(1354,` Dictionary<`),qi$2(1355,`span`,63),Mw(1356,`string`),Tl(),Mw(1357,`, `),qi$2(1358,`span`,63),Mw(1359,`string`),Tl(),Mw(1360,`[]>
                {
                    { `),qi$2(1361,`span`,50),Mw(1362,`"invalid_error"`),Tl(),Mw(1363,`, `),qi$2(1364,`span`,46),Mw(1365,`new`),Tl(),Mw(1366,`[] { InvalidErrorMessage } }
                });
                }
            }
            `),qi$2(1367,`span`,46),Mw(1368,`else`),Tl(),Mw(1369,`
            {
                `),qi$2(1370,`span`,46),Mw(1371,`if`),Tl(),Mw(1372,` (`),qi$2(1373,`span`,46),Mw(1374,`this`),Tl(),Mw(1375,`.env.EnvironmentName == `),qi$2(1376,`span`,50),Mw(1377,`"Test"`),Tl(),Mw(1378,`)
                {
                    `),qi$2(1379,`span`,46),Mw(1380,`var`),Tl(),Mw(1381,` passwordValid = `),qi$2(1382,`span`,46),Mw(1383,`await`),Tl(),Mw(1384,` `),qi$2(1385,`span`,46),Mw(1386,`this`),Tl(),Mw(1387,`.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    `),qi$2(1388,`span`,46),Mw(1389,`if`),Tl(),Mw(1390,` (!passwordValid)
                    {
                        `),qi$2(1391,`span`,46),Mw(1392,`return`),Tl(),Mw(1393,` Result<UserResponseEnvelope>.Failure(`),qi$2(1394,`span`,46),Mw(1395,`new`),Tl(),Mw(1396,` Dictionary<`),qi$2(1397,`span`,63),Mw(1398,`string`),Tl(),Mw(1399,`, `),qi$2(1400,`span`,63),Mw(1401,`string`),Tl(),Mw(1402,`[]>
                    {
                        { `),qi$2(1403,`span`,50),Mw(1404,`"invalid_error"`),Tl(),Mw(1405,`, `),qi$2(1406,`span`,46),Mw(1407,`new`),Tl(),Mw(1408,`[] { InvalidErrorMessage } }
                    });
                    }
                }
                `),qi$2(1409,`span`,46),Mw(1410,`else`),Tl(),Mw(1411,`
                {
                    `),qi$2(1412,`span`,46),Mw(1413,`return`),Tl(),Mw(1414,` Result<UserResponseEnvelope>.Failure(`),qi$2(1415,`span`,46),Mw(1416,`new`),Tl(),Mw(1417,` Dictionary<`),qi$2(1418,`span`,63),Mw(1419,`string`),Tl(),Mw(1420,`, `),qi$2(1421,`span`,63),Mw(1422,`string`),Tl(),Mw(1423,`[]>
                {
                    { `),qi$2(1424,`span`,50),Mw(1425,`"lockout_enabled_error"`),Tl(),Mw(1426,`, `),qi$2(1427,`span`,46),Mw(1428,`new`),Tl(),Mw(1429,`[] { LockoutEnabledErrorMessage } }
                });
                }
            }

            `),qi$2(1430,`span`,63),Mw(1431,`string`),Tl(),Mw(1432,`? token;
            `),qi$2(1433,`span`,46),Mw(1434,`if`),Tl(),Mw(1435,` (`),qi$2(1436,`span`,46),Mw(1437,`this`),Tl(),Mw(1438,`.env.EnvironmentName == `),qi$2(1439,`span`,50),Mw(1440,`"Test"`),Tl(),Mw(1441,`)
            {
                token = `),qi$2(1442,`span`,50),Mw(1443,`$"Token: `),qi$2(1444,`span`,66),Mw(1445,`{user.Email}`),Tl(),Mw(1446,`"`),Tl(),Mw(1447,`;
            }
            `),qi$2(1448,`span`,46),Mw(1449,`else`),Tl(),Mw(1450,`
            {
                token = isNewToken ? `),qi$2(1451,`span`,46),Mw(1452,`await`),Tl(),Mw(1453,` `),qi$2(1454,`span`,46),Mw(1455,`this`),Tl(),Mw(1456,`.jwtGenerator.GenerateToken(user) :
                `),qi$2(1457,`span`,46),Mw(1458,`this`),Tl(),Mw(1459,`.httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()[`),qi$2(1460,`span`,50),Mw(1461,`"Bearer "`),Tl(),Mw(1462,`.Length..].Trim();
            }

            `),qi$2(1463,`span`,46),Mw(1464,`return`),Tl(),Mw(1465,` `),qi$2(1466,`span`,46),Mw(1467,`new`),Tl(),Mw(1468,` UserResponseEnvelope
            {
                UserJson = `),qi$2(1469,`span`,46),Mw(1470,`new`),Tl(),Mw(1471,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        `),qi$2(1472,`span`,48),Mw(1473,`#`),qi$2(1474,`span`,46),Mw(1475,`endregion`),Tl()(),Mw(1476,`

        `),qi$2(1477,`span`,48),Mw(1478,`#`),qi$2(1479,`span`,46),Mw(1480,`region`),Tl(),Mw(1481,` Update`),Tl(),Mw(1482,`
        `),qi$2(1483,`span`,46),Mw(1484,`public`),Tl(),Mw(1485,` `),qi$2(1486,`span`,46),Mw(1487,`async`),Tl(),Mw(1488,` Task<Result<UserResponseEnvelope>> Update(UserUpdateCommand userRequest)
        {
            `),qi$2(1489,`span`,46),Mw(1490,`if`),Tl(),Mw(1491,` (userRequest.UserJson.FullName == `),qi$2(1492,`span`,64),Mw(1493,`null`),Tl(),Mw(1494,` && userRequest.UserJson.Password == `),qi$2(1495,`span`,64),Mw(1496,`null`),Tl(),Mw(1497,`)
            {
                `),qi$2(1498,`span`,46),Mw(1499,`return`),Tl(),Mw(1500,` Result<UserResponseEnvelope>.Failure(`),qi$2(1501,`span`,46),Mw(1502,`new`),Tl(),Mw(1503,` Dictionary<`),qi$2(1504,`span`,63),Mw(1505,`string`),Tl(),Mw(1506,`, `),qi$2(1507,`span`,63),Mw(1508,`string`),Tl(),Mw(1509,`[]>
            {
                 { `),qi$2(1510,`span`,50),Mw(1511,`"no_data_error"`),Tl(),Mw(1512,`, `),qi$2(1513,`span`,46),Mw(1514,`new`),Tl(),Mw(1515,`[] { NoDataErrorMessage } }
            });
            }

            `),qi$2(1516,`span`,63),Mw(1517,`bool`),Tl(),Mw(1518,` isNewToken = `),qi$2(1519,`span`,64),Mw(1520,`false`),Tl(),Mw(1521,`;
            ClaimsPrincipal? claimsPrincipal = `),qi$2(1522,`span`,46),Mw(1523,`this`),Tl(),Mw(1524,`.httpContextAccessor.HttpContext!.User!;
            `),qi$2(1525,`span`,46),Mw(1526,`if`),Tl(),Mw(1527,` (claimsPrincipal != `),qi$2(1528,`span`,64),Mw(1529,`null`),Tl(),Mw(1530,`)
            {
                `),qi$2(1531,`span`,46),Mw(1532,`var`),Tl(),Mw(1533,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),qi$2(1534,`span`,46),Mw(1535,`if`),Tl(),Mw(1536,` (isAuthenticated == `),qi$2(1537,`span`,64),Mw(1538,`null`),Tl(),Mw(1539,` || !(`),qi$2(1540,`span`,63),Mw(1541,`bool`),Tl(),Mw(1542,`)isAuthenticated)
                {
                    `),qi$2(1543,`span`,46),Mw(1544,`return`),Tl(),Mw(1545,` Result<UserResponseEnvelope>.Failure(`),qi$2(1546,`span`,46),Mw(1547,`new`),Tl(),Mw(1548,` Dictionary<`),qi$2(1549,`span`,63),Mw(1550,`string`),Tl(),Mw(1551,`, `),qi$2(1552,`span`,63),Mw(1553,`string`),Tl(),Mw(1554,`[]>
                {
                    { `),qi$2(1555,`span`,50),Mw(1556,`"identity_error"`),Tl(),Mw(1557,`, `),qi$2(1558,`span`,46),Mw(1559,`new`),Tl(),Mw(1560,`[] { IdentityErrorMessage } }
                });
                }
                `),qi$2(1561,`span`,46),Mw(1562,`var`),Tl(),Mw(1563,` iat = claimsPrincipal.FindFirst(`),qi$2(1564,`span`,50),Mw(1565,`"iat"`),Tl(),Mw(1566,`);
                `),qi$2(1567,`span`,46),Mw(1568,`var`),Tl(),Mw(1569,` exp = claimsPrincipal.FindFirst(`),qi$2(1570,`span`,50),Mw(1571,`"exp"`),Tl(),Mw(1572,`);
                `),qi$2(1573,`span`,46),Mw(1574,`if`),Tl(),Mw(1575,` (iat == `),qi$2(1576,`span`,64),Mw(1577,`null`),Tl(),Mw(1578,` || exp == `),qi$2(1579,`span`,64),Mw(1580,`null`),Tl(),Mw(1581,`)
                {
                    `),qi$2(1582,`span`,46),Mw(1583,`return`),Tl(),Mw(1584,` Result<UserResponseEnvelope>.Failure(`),qi$2(1585,`span`,46),Mw(1586,`new`),Tl(),Mw(1587,` Dictionary<`),qi$2(1588,`span`,63),Mw(1589,`string`),Tl(),Mw(1590,`, `),qi$2(1591,`span`,63),Mw(1592,`string`),Tl(),Mw(1593,`[]>
                {
                    { `),qi$2(1594,`span`,50),Mw(1595,`"identity_error"`),Tl(),Mw(1596,`, `),qi$2(1597,`span`,46),Mw(1598,`new`),Tl(),Mw(1599,`[] { IdentityErrorMessage } }
                });
                }

                `),qi$2(1600,`span`,46),Mw(1601,`var`),Tl(),Mw(1602,` rate = (`),qi$2(1603,`span`,63),Mw(1604,`long`),Tl(),Mw(1605,`.Parse(exp.Value) - `),qi$2(1606,`span`,63),Mw(1607,`long`),Tl(),Mw(1608,`.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                `),qi$2(1609,`span`,46),Mw(1610,`var`),Tl(),Mw(1611,` current = `),qi$2(1612,`span`,63),Mw(1613,`long`),Tl(),Mw(1614,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            `),qi$2(1615,`span`,46),Mw(1616,`else`),Tl(),Mw(1617,`
            {
                `),qi$2(1618,`span`,46),Mw(1619,`return`),Tl(),Mw(1620,` Result<UserResponseEnvelope>.Failure(`),qi$2(1621,`span`,46),Mw(1622,`new`),Tl(),Mw(1623,` Dictionary<`),qi$2(1624,`span`,63),Mw(1625,`string`),Tl(),Mw(1626,`, `),qi$2(1627,`span`,63),Mw(1628,`string`),Tl(),Mw(1629,`[]>
            {
                { `),qi$2(1630,`span`,50),Mw(1631,`"identity_error"`),Tl(),Mw(1632,`, `),qi$2(1633,`span`,46),Mw(1634,`new`),Tl(),Mw(1635,`[] { IdentityErrorMessage } }
            });
            }

            `),qi$2(1636,`span`,46),Mw(1637,`if`),Tl(),Mw(1638,` (userRequest.UserJson.FullName != `),qi$2(1639,`span`,64),Mw(1640,`null`),Tl(),Mw(1641,`)
            {
                `),qi$2(1642,`span`,46),Mw(1643,`var`),Tl(),Mw(1644,` userByName = `),qi$2(1645,`span`,46),Mw(1646,`await`),Tl(),Mw(1647,` `),qi$2(1648,`span`,46),Mw(1649,`this`),Tl(),Mw(1650,`.userManager.FindByNameAsync(userRequest.UserJson.FullName);

                `),qi$2(1651,`span`,46),Mw(1652,`if`),Tl(),Mw(1653,` (userByName != `),qi$2(1654,`span`,64),Mw(1655,`null`),Tl(),Mw(1656,`)
                {
                    `),qi$2(1657,`span`,46),Mw(1658,`return`),Tl(),Mw(1659,` Result<UserResponseEnvelope>.Failure(`),qi$2(1660,`span`,46),Mw(1661,`new`),Tl(),Mw(1662,` Dictionary<`),qi$2(1663,`span`,63),Mw(1664,`string`),Tl(),Mw(1665,`, `),qi$2(1666,`span`,63),Mw(1667,`string`),Tl(),Mw(1668,`[]>
                {
                    { `),qi$2(1669,`span`,50),Mw(1670,`"name_error"`),Tl(),Mw(1671,`, `),qi$2(1672,`span`,46),Mw(1673,`new`),Tl(),Mw(1674,`[] { UserNameTakenErrorMessage } }
                });
                }
            }

            User? user;
            `),qi$2(1675,`span`,46),Mw(1676,`if`),Tl(),Mw(1677,` (`),qi$2(1678,`span`,46),Mw(1679,`this`),Tl(),Mw(1680,`.env.EnvironmentName == `),qi$2(1681,`span`,50),Mw(1682,`"Test"`),Tl(),Mw(1683,`)
            {
                `),qi$2(1684,`span`,46),Mw(1685,`var`),Tl(),Mw(1686,` name = claimsPrincipal.Identity?.Name;
                `),qi$2(1687,`span`,46),Mw(1688,`if`),Tl(),Mw(1689,` (name == `),qi$2(1690,`span`,64),Mw(1691,`null`),Tl(),Mw(1692,`)
                {
                    `),qi$2(1693,`span`,46),Mw(1694,`return`),Tl(),Mw(1695,` Result<UserResponseEnvelope>.Failure(`),qi$2(1696,`span`,46),Mw(1697,`new`),Tl(),Mw(1698,` Dictionary<`),qi$2(1699,`span`,63),Mw(1700,`string`),Tl(),Mw(1701,`, `),qi$2(1702,`span`,63),Mw(1703,`string`),Tl(),Mw(1704,`[]>
                {
                    { `),qi$2(1705,`span`,50),Mw(1706,`"debug_error"`),Tl(),Mw(1707,`, `),qi$2(1708,`span`,46),Mw(1709,`new`),Tl(),Mw(1710,`[] { IdentityErrorMessage } }
                });
                }
                user = `),qi$2(1711,`span`,46),Mw(1712,`await`),Tl(),Mw(1713,` `),qi$2(1714,`span`,46),Mw(1715,`this`),Tl(),Mw(1716,`.userManager.FindByEmailAsync(name);
            }
            `),qi$2(1717,`span`,46),Mw(1718,`else`),Tl(),Mw(1719,`
            {
                `),qi$2(1720,`span`,46),Mw(1721,`var`),Tl(),Mw(1722,` claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                `),qi$2(1723,`span`,46),Mw(1724,`if`),Tl(),Mw(1725,` (claim == `),qi$2(1726,`span`,64),Mw(1727,`null`),Tl(),Mw(1728,`)
                {
                    `),qi$2(1729,`span`,46),Mw(1730,`return`),Tl(),Mw(1731,` Result<UserResponseEnvelope>.Failure(`),qi$2(1732,`span`,46),Mw(1733,`new`),Tl(),Mw(1734,` Dictionary<`),qi$2(1735,`span`,63),Mw(1736,`string`),Tl(),Mw(1737,`, `),qi$2(1738,`span`,63),Mw(1739,`string`),Tl(),Mw(1740,`[]>
                {
                    { `),qi$2(1741,`span`,50),Mw(1742,`"name_identifier_error"`),Tl(),Mw(1743,`, `),qi$2(1744,`span`,46),Mw(1745,`new`),Tl(),Mw(1746,`[] { IdentityErrorMessage } }
                });
                }
                user = `),qi$2(1747,`span`,46),Mw(1748,`await`),Tl(),Mw(1749,` `),qi$2(1750,`span`,46),Mw(1751,`this`),Tl(),Mw(1752,`.userManager.FindByIdAsync(claim.Value);
            }

            `),qi$2(1753,`span`,46),Mw(1754,`if`),Tl(),Mw(1755,` (user == `),qi$2(1756,`span`,64),Mw(1757,`null`),Tl(),Mw(1758,`)
            {
                `),qi$2(1759,`span`,46),Mw(1760,`return`),Tl(),Mw(1761,` Result<UserResponseEnvelope>.Failure(`),qi$2(1762,`span`,46),Mw(1763,`new`),Tl(),Mw(1764,` Dictionary<`),qi$2(1765,`span`,63),Mw(1766,`string`),Tl(),Mw(1767,`, `),qi$2(1768,`span`,63),Mw(1769,`string`),Tl(),Mw(1770,`[]>
            {
                { `),qi$2(1771,`span`,50),Mw(1772,`"user_error"`),Tl(),Mw(1773,`, `),qi$2(1774,`span`,46),Mw(1775,`new`),Tl(),Mw(1776,`[] { UserNullErrorMessage } }
            });
            }

            `),qi$2(1777,`span`,46),Mw(1778,`var`),Tl(),Mw(1779,` claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            `),qi$2(1780,`span`,46),Mw(1781,`if`),Tl(),Mw(1782,` (claimRole == `),qi$2(1783,`span`,64),Mw(1784,`null`),Tl(),Mw(1785,`)
            {
                `),qi$2(1786,`span`,46),Mw(1787,`return`),Tl(),Mw(1788,` Result<UserResponseEnvelope>.Failure(`),qi$2(1789,`span`,46),Mw(1790,`new`),Tl(),Mw(1791,` Dictionary<`),qi$2(1792,`span`,63),Mw(1793,`string`),Tl(),Mw(1794,`, `),qi$2(1795,`span`,63),Mw(1796,`string`),Tl(),Mw(1797,`[]>
                {
                    { `),qi$2(1798,`span`,50),Mw(1799,`"is_in_role_error"`),Tl(),Mw(1800,`, `),qi$2(1801,`span`,46),Mw(1802,`new`),Tl(),Mw(1803,`[] { `),qi$2(1804,`span`,63),Mw(1805,`string`),Tl(),Mw(1806,`.Format(IdentityRoleErrorMessage, `),qi$2(1807,`span`,50),Mw(1808,`""`),Tl(),Mw(1809,`) } }
                });
            }
            `),qi$2(1810,`span`,46),Mw(1811,`var`),Tl(),Mw(1812,` isInRole = `),qi$2(1813,`span`,46),Mw(1814,`await`),Tl(),Mw(1815,` `),qi$2(1816,`span`,46),Mw(1817,`this`),Tl(),Mw(1818,`.userManager.IsInRoleAsync(user, claimRole.Value);
            `),qi$2(1819,`span`,46),Mw(1820,`if`),Tl(),Mw(1821,` (!isInRole)
            {
                `),qi$2(1822,`span`,46),Mw(1823,`return`),Tl(),Mw(1824,` Result<UserResponseEnvelope>.Failure(`),qi$2(1825,`span`,46),Mw(1826,`new`),Tl(),Mw(1827,` Dictionary<`),qi$2(1828,`span`,63),Mw(1829,`string`),Tl(),Mw(1830,`, `),qi$2(1831,`span`,63),Mw(1832,`string`),Tl(),Mw(1833,`[]>
                {
                    { `),qi$2(1834,`span`,50),Mw(1835,`"is_in_role_error"`),Tl(),Mw(1836,`, `),qi$2(1837,`span`,46),Mw(1838,`new`),Tl(),Mw(1839,`[] { `),qi$2(1840,`span`,63),Mw(1841,`string`),Tl(),Mw(1842,`.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            `),qi$2(1843,`span`,46),Mw(1844,`if`),Tl(),Mw(1845,` (userRequest.UserJson.Password != `),qi$2(1846,`span`,64),Mw(1847,`null`),Tl(),Mw(1848,`)
            {
                `),qi$2(1849,`span`,46),Mw(1850,`var`),Tl(),Mw(1851,` identityResult2 = `),qi$2(1852,`span`,46),Mw(1853,`await`),Tl(),Mw(1854,` `),qi$2(1855,`span`,46),Mw(1856,`this`),Tl(),Mw(1857,`.userManager.RemovePasswordAsync(user);

                `),qi$2(1858,`span`,46),Mw(1859,`if`),Tl(),Mw(1860,` (!identityResult2.Succeeded)
                {
                    `),qi$2(1861,`span`,46),Mw(1862,`var`),Tl(),Mw(1863,` errors = `),qi$2(1864,`span`,46),Mw(1865,`new`),Tl(),Mw(1866,` Dictionary<`),qi$2(1867,`span`,63),Mw(1868,`string`),Tl(),Mw(1869,`, `),qi$2(1870,`span`,63),Mw(1871,`string`),Tl(),Mw(1872,`[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),qi$2(1873,`span`,46),Mw(1874,`return`),Tl(),Mw(1875,` Result<UserResponseEnvelope>.Failure(errors);
                }

                identityResult2 = `),qi$2(1876,`span`,46),Mw(1877,`await`),Tl(),Mw(1878,` `),qi$2(1879,`span`,46),Mw(1880,`this`),Tl(),Mw(1881,`.userManager.AddPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                `),qi$2(1882,`span`,46),Mw(1883,`if`),Tl(),Mw(1884,` (!identityResult2.Succeeded)
                {
                    `),qi$2(1885,`span`,46),Mw(1886,`var`),Tl(),Mw(1887,` errors = `),qi$2(1888,`span`,46),Mw(1889,`new`),Tl(),Mw(1890,` Dictionary<`),qi$2(1891,`span`,63),Mw(1892,`string`),Tl(),Mw(1893,`, `),qi$2(1894,`span`,63),Mw(1895,`string`),Tl(),Mw(1896,`[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        `),qi$2(1897,`span`,46),Mw(1898,`switch`),Tl(),Mw(1899,` (e.Code)
                        {
                            `),qi$2(1900,`span`,46),Mw(1901,`case`),Tl(),Mw(1902,` `),qi$2(1903,`span`,50),Mw(1904,`"PasswordRequiresDigit"`),Tl(),Mw(1905,`:
                                e.Description = PasswordFormatErrorMessage;
                                `),qi$2(1906,`span`,46),Mw(1907,`break`),Tl(),Mw(1908,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });
                    errors.Add(`),qi$2(1909,`span`,50),Mw(1910,`"PasswordDeleted"`),Tl(),Mw(1911,`, [PasswordDeletedErrorMessage]);
                    `),qi$2(1912,`span`,46),Mw(1913,`return`),Tl(),Mw(1914,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }

            `),qi$2(1915,`span`,46),Mw(1916,`if`),Tl(),Mw(1917,` (userRequest.UserJson.FullName != `),qi$2(1918,`span`,64),Mw(1919,`null`),Tl(),Mw(1920,`)
            {
                `),qi$2(1921,`span`,46),Mw(1922,`var`),Tl(),Mw(1923,` identityResult1 = `),qi$2(1924,`span`,46),Mw(1925,`await`),Tl(),Mw(1926,` `),qi$2(1927,`span`,46),Mw(1928,`this`),Tl(),Mw(1929,`.userManager.SetUserNameAsync(
                     user,
                     userRequest.UserJson.FullName);

                `),qi$2(1930,`span`,46),Mw(1931,`if`),Tl(),Mw(1932,` (!identityResult1.Succeeded)
                {
                    `),qi$2(1933,`span`,46),Mw(1934,`var`),Tl(),Mw(1935,` errors = `),qi$2(1936,`span`,46),Mw(1937,`new`),Tl(),Mw(1938,` Dictionary<`),qi$2(1939,`span`,63),Mw(1940,`string`),Tl(),Mw(1941,`, `),qi$2(1942,`span`,63),Mw(1943,`string`),Tl(),Mw(1944,`[]>();
                    identityResult1.Errors.ForEach(e =>
                    {
                        `),qi$2(1945,`span`,46),Mw(1946,`switch`),Tl(),Mw(1947,` (e.Code)
                        {
                            `),qi$2(1948,`span`,46),Mw(1949,`case`),Tl(),Mw(1950,` `),qi$2(1951,`span`,50),Mw(1952,`"InvalidUserName"`),Tl(),Mw(1953,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),qi$2(1954,`span`,46),Mw(1955,`break`),Tl(),Mw(1956,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),qi$2(1957,`span`,46),Mw(1958,`return`),Tl(),Mw(1959,` Result<UserResponseEnvelope>.Failure(errors);
                }
            }

            `),qi$2(1960,`span`,63),Mw(1961,`string`),Tl(),Mw(1962,`? token;
            `),qi$2(1963,`span`,46),Mw(1964,`if`),Tl(),Mw(1965,` (`),qi$2(1966,`span`,46),Mw(1967,`this`),Tl(),Mw(1968,`.env.EnvironmentName == `),qi$2(1969,`span`,50),Mw(1970,`"Test"`),Tl(),Mw(1971,`)
            {
                token = `),qi$2(1972,`span`,50),Mw(1973,`$"Token: `),qi$2(1974,`span`,66),Mw(1975,`{user.Email}`),Tl(),Mw(1976,`"`),Tl(),Mw(1977,`;
            }
            `),qi$2(1978,`span`,46),Mw(1979,`else`),Tl(),Mw(1980,`
            {
                token = isNewToken ? `),qi$2(1981,`span`,46),Mw(1982,`await`),Tl(),Mw(1983,` `),qi$2(1984,`span`,46),Mw(1985,`this`),Tl(),Mw(1986,`.jwtGenerator.GenerateToken(user) :
                `),qi$2(1987,`span`,46),Mw(1988,`this`),Tl(),Mw(1989,`.httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()[`),qi$2(1990,`span`,50),Mw(1991,`"Bearer "`),Tl(),Mw(1992,`.Length..].Trim();
            }

            `),qi$2(1993,`span`,46),Mw(1994,`return`),Tl(),Mw(1995,` `),qi$2(1996,`span`,46),Mw(1997,`new`),Tl(),Mw(1998,` UserResponseEnvelope
            {
                UserJson = `),qi$2(1999,`span`,46),Mw(2e3,`new`),Tl(),Mw(2001,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        `),qi$2(2002,`span`,48),Mw(2003,`#`),qi$2(2004,`span`,46),Mw(2005,`endregion`),Tl()(),Mw(2006,`

        `),qi$2(2007,`span`,46),Mw(2008,`public`),Tl(),Mw(2009,` `),qi$2(2010,`span`,46),Mw(2011,`async`),Tl(),Mw(2012,` Task<Result<ProfileResponseEnvelope>> Profile(`),qi$2(2013,`span`,63),Mw(2014,`string`),Tl(),Mw(2015,` userName)
        {
            `),qi$2(2016,`span`,46),Mw(2017,`var`),Tl(),Mw(2018,` user = `),qi$2(2019,`span`,46),Mw(2020,`await`),Tl(),Mw(2021,` `),qi$2(2022,`span`,46),Mw(2023,`this`),Tl(),Mw(2024,`.userManager.FindByNameAsync(userName);

            `),qi$2(2025,`span`,46),Mw(2026,`if`),Tl(),Mw(2027,` (user == `),qi$2(2028,`span`,64),Mw(2029,`null`),Tl(),Mw(2030,`)
            {
                `),qi$2(2031,`span`,46),Mw(2032,`return`),Tl(),Mw(2033,` Result<ProfileResponseEnvelope>.Failure(`),qi$2(2034,`span`,46),Mw(2035,`new`),Tl(),Mw(2036,` Dictionary<`),qi$2(2037,`span`,63),Mw(2038,`string`),Tl(),Mw(2039,`, `),qi$2(2040,`span`,63),Mw(2041,`string`),Tl(),Mw(2042,`[]>
                    {
                       { `),qi$2(2043,`span`,50),Mw(2044,`"profile_error"`),Tl(),Mw(2045,`, `),qi$2(2046,`span`,46),Mw(2047,`new`),Tl(),Mw(2048,`[] { ProfileErrorMessage } }
                    }
                );
            }

            `),qi$2(2049,`span`,46),Mw(2050,`return`),Tl(),Mw(2051,` `),qi$2(2052,`span`,46),Mw(2053,`new`),Tl(),Mw(2054,` ProfileResponseEnvelope
            {
                ProfileJson = `),qi$2(2055,`span`,46),Mw(2056,`new`),Tl(),Mw(2057,` ProfileResponseModel(user.UserName, user.UserName, user.UserName)
            };

        }

        `),qi$2(2058,`span`,46),Mw(2059,`public`),Tl(),Mw(2060,` `),qi$2(2061,`span`,46),Mw(2062,`async`),Tl(),Mw(2063,` Task<Result<UserResponseEnvelope>> Register(UserRegisterRequestEnvelope userRequest)
        {
            `),qi$2(2064,`span`,46),Mw(2065,`var`),Tl(),Mw(2066,` userByEmail = `),qi$2(2067,`span`,46),Mw(2068,`await`),Tl(),Mw(2069,` `),qi$2(2070,`span`,46),Mw(2071,`this`),Tl(),Mw(2072,`.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            `),qi$2(2073,`span`,46),Mw(2074,`if`),Tl(),Mw(2075,` (userByEmail != `),qi$2(2076,`span`,64),Mw(2077,`null`),Tl(),Mw(2078,`)
            {
                `),qi$2(2079,`span`,46),Mw(2080,`return`),Tl(),Mw(2081,` Result<UserResponseEnvelope>.Failure(`),qi$2(2082,`span`,46),Mw(2083,`new`),Tl(),Mw(2084,` Dictionary<`),qi$2(2085,`span`,63),Mw(2086,`string`),Tl(),Mw(2087,`, `),qi$2(2088,`span`,63),Mw(2089,`string`),Tl(),Mw(2090,`[]>
            {
                { `),qi$2(2091,`span`,50),Mw(2092,`"email_error"`),Tl(),Mw(2093,`, `),qi$2(2094,`span`,46),Mw(2095,`new`),Tl(),Mw(2096,`[] { EmailTakenErrorMessage } }
            });
            }

            `),qi$2(2097,`span`,46),Mw(2098,`var`),Tl(),Mw(2099,` userByName = `),qi$2(2100,`span`,46),Mw(2101,`await`),Tl(),Mw(2102,` `),qi$2(2103,`span`,46),Mw(2104,`this`),Tl(),Mw(2105,`.userManager.FindByNameAsync(userRequest.UserJson.FullName);

            `),qi$2(2106,`span`,46),Mw(2107,`if`),Tl(),Mw(2108,` (userByName != `),qi$2(2109,`span`,64),Mw(2110,`null`),Tl(),Mw(2111,`)
            {
                `),qi$2(2112,`span`,46),Mw(2113,`return`),Tl(),Mw(2114,` Result<UserResponseEnvelope>.Failure(`),qi$2(2115,`span`,46),Mw(2116,`new`),Tl(),Mw(2117,` Dictionary<`),qi$2(2118,`span`,63),Mw(2119,`string`),Tl(),Mw(2120,`, `),qi$2(2121,`span`,63),Mw(2122,`string`),Tl(),Mw(2123,`[]>
            {
               { `),qi$2(2124,`span`,50),Mw(2125,`"name_error"`),Tl(),Mw(2126,`, `),qi$2(2127,`span`,46),Mw(2128,`new`),Tl(),Mw(2129,`[] { UserNameTakenErrorMessage } }
            });
            }

            `),qi$2(2130,`span`,46),Mw(2131,`if`),Tl(),Mw(2132,` (`),qi$2(2133,`span`,46),Mw(2134,`this`),Tl(),Mw(2135,`.env.EnvironmentName == `),qi$2(2136,`span`,50),Mw(2137,`"Test"`),Tl(),Mw(2138,`)
            {
                `),qi$2(2139,`span`,46),Mw(2140,`var`),Tl(),Mw(2141,` user = `),qi$2(2142,`span`,46),Mw(2143,`new`),Tl(),Mw(2144,` User(userRequest.UserJson.Email, userRequest.UserJson.FullName);

                `),qi$2(2145,`span`,46),Mw(2146,`var`),Tl(),Mw(2147,` identityResult = `),qi$2(2148,`span`,46),Mw(2149,`await`),Tl(),Mw(2150,` `),qi$2(2151,`span`,46),Mw(2152,`this`),Tl(),Mw(2153,`.userManager.CreateAsync(
                    user,
                    userRequest.UserJson.Password);

                `),qi$2(2154,`span`,46),Mw(2155,`if`),Tl(),Mw(2156,` (!identityResult.Succeeded)
                {
                    `),qi$2(2157,`span`,46),Mw(2158,`var`),Tl(),Mw(2159,` errors = `),qi$2(2160,`span`,46),Mw(2161,`new`),Tl(),Mw(2162,` Dictionary<`),qi$2(2163,`span`,63),Mw(2164,`string`),Tl(),Mw(2165,`, `),qi$2(2166,`span`,63),Mw(2167,`string`),Tl(),Mw(2168,`[]>();
                    identityResult.Errors.ForEach(e =>
                    {
                        `),qi$2(2169,`span`,46),Mw(2170,`switch`),Tl(),Mw(2171,` (e.Code)
                        {
                            `),qi$2(2172,`span`,46),Mw(2173,`case`),Tl(),Mw(2174,` `),qi$2(2175,`span`,50),Mw(2176,`"InvalidUserName"`),Tl(),Mw(2177,`:
                                e.Description = UsernameFormatErrorMessage;
                                `),qi$2(2178,`span`,46),Mw(2179,`break`),Tl(),Mw(2180,`;
                            `),qi$2(2181,`span`,46),Mw(2182,`case`),Tl(),Mw(2183,` `),qi$2(2184,`span`,50),Mw(2185,`"PasswordRequiresDigit"`),Tl(),Mw(2186,`:
                                e.Description = PasswordFormatErrorMessage;
                                `),qi$2(2187,`span`,46),Mw(2188,`break`),Tl(),Mw(2189,`;
                        }
                        errors.Add(e.Code, [e.Description]);
                    });

                    `),qi$2(2190,`span`,46),Mw(2191,`return`),Tl(),Mw(2192,` Result<UserResponseEnvelope>.Failure(errors);
                }

                `),qi$2(2193,`span`,46),Mw(2194,`var`),Tl(),Mw(2195,` token = `),qi$2(2196,`span`,50),Mw(2197,`$"Token: `),qi$2(2198,`span`,66),Mw(2199,`{user.Email}`),Tl(),Mw(2200,`"`),Tl(),Mw(2201,`;

                `),qi$2(2202,`span`,46),Mw(2203,`await`),Tl(),Mw(2204,` `),qi$2(2205,`span`,46),Mw(2206,`this`),Tl(),Mw(2207,`.eventDispatcher.Dispatch(`),qi$2(2208,`span`,46),Mw(2209,`new`),Tl(),Mw(2210,` UserRegisteredEvent(
                    user.Id,
                    userRequest.UserJson.FullName));

                `),qi$2(2211,`span`,46),Mw(2212,`return`),Tl(),Mw(2213,` `),qi$2(2214,`span`,46),Mw(2215,`new`),Tl(),Mw(2216,` UserResponseEnvelope
                {
                    UserJson = `),qi$2(2217,`span`,46),Mw(2218,`new`),Tl(),Mw(2219,`()
                    {
                        Email = user.Email!,
                        UserName = user.UserName!,
                        Token = token,
                    }
                };
            }
            `),qi$2(2220,`span`,46),Mw(2221,`else`),Tl(),Mw(2222,`
            {
                `),qi$2(2223,`span`,46),Mw(2224,`return`),Tl(),Mw(2225,` Result<UserResponseEnvelope>.Failure(`),qi$2(2226,`span`,46),Mw(2227,`new`),Tl(),Mw(2228,` Dictionary<`),qi$2(2229,`span`,63),Mw(2230,`string`),Tl(),Mw(2231,`, `),qi$2(2232,`span`,63),Mw(2233,`string`),Tl(),Mw(2234,`[]>
            {
                 { `),qi$2(2235,`span`,50),Mw(2236,`"not_implemented_error"`),Tl(),Mw(2237,`, registerNotImplemented }
            });
            }
        }

        `),qi$2(2238,`span`,46),Mw(2239,`public`),Tl(),Mw(2240,` `),qi$2(2241,`span`,46),Mw(2242,`async`),Tl(),Mw(2243,` Task<Result<UserResponseEnvelope>> Login(UserLoginRequestEnvelope userRequest)
        {
            `),qi$2(2244,`span`,46),Mw(2245,`var`),Tl(),Mw(2246,` user = `),qi$2(2247,`span`,46),Mw(2248,`await`),Tl(),Mw(2249,` `),qi$2(2250,`span`,46),Mw(2251,`this`),Tl(),Mw(2252,`.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            `),qi$2(2253,`span`,46),Mw(2254,`if`),Tl(),Mw(2255,` (user == `),qi$2(2256,`span`,64),Mw(2257,`null`),Tl(),Mw(2258,`)
            {
                `),qi$2(2259,`span`,46),Mw(2260,`return`),Tl(),Mw(2261,` Result<UserResponseEnvelope>.Failure(`),qi$2(2262,`span`,46),Mw(2263,`new`),Tl(),Mw(2264,` Dictionary<`),qi$2(2265,`span`,63),Mw(2266,`string`),Tl(),Mw(2267,`, `),qi$2(2268,`span`,63),Mw(2269,`string`),Tl(),Mw(2270,`[]>
            {
                { `),qi$2(2271,`span`,50),Mw(2272,`"invalid_error"`),Tl(),Mw(2273,`, `),qi$2(2274,`span`,46),Mw(2275,`new`),Tl(),Mw(2276,`[] { InvalidErrorMessage } }
            });
            }

            `),qi$2(2277,`span`,46),Mw(2278,`var`),Tl(),Mw(2279,` isLockoutEnabled = `),qi$2(2280,`span`,46),Mw(2281,`await`),Tl(),Mw(2282,` userManager.GetLockoutEnabledAsync(user);

            `),qi$2(2283,`span`,46),Mw(2284,`if`),Tl(),Mw(2285,` (isLockoutEnabled)
            {
                `),qi$2(2286,`span`,46),Mw(2287,`var`),Tl(),Mw(2288,` count = `),qi$2(2289,`span`,46),Mw(2290,`await`),Tl(),Mw(2291,` userManager.GetAccessFailedCountAsync(user);
                `),qi$2(2292,`span`,46),Mw(2293,`if`),Tl(),Mw(2294,` (count == applicationSettings.MaxFailedAccessAttempts - `),qi$2(2295,`span`,65),Mw(2296,`1`),Tl(),Mw(2297,`)
                {
                    `),qi$2(2298,`span`,46),Mw(2299,`var`),Tl(),Mw(2300,` endDate = `),qi$2(2301,`span`,46),Mw(2302,`await`),Tl(),Mw(2303,` userManager.GetLockoutEndDateAsync(user);
                    `),qi$2(2304,`span`,46),Mw(2305,`var`),Tl(),Mw(2306,` currentDate = DateTimeOffset.UtcNow;
                    `),qi$2(2307,`span`,46),Mw(2308,`if`),Tl(),Mw(2309,` (endDate > currentDate)
                    {
                        `),qi$2(2310,`span`,46),Mw(2311,`return`),Tl(),Mw(2312,` Result<UserResponseEnvelope>.Failure(`),qi$2(2313,`span`,46),Mw(2314,`new`),Tl(),Mw(2315,` Dictionary<`),qi$2(2316,`span`,63),Mw(2317,`string`),Tl(),Mw(2318,`, `),qi$2(2319,`span`,63),Mw(2320,`string`),Tl(),Mw(2321,`[]>
                    {
                        { `),qi$2(2322,`span`,50),Mw(2323,`"lockout_error"`),Tl(),Mw(2324,`, `),qi$2(2325,`span`,46),Mw(2326,`new`),Tl(),Mw(2327,`[] {  `),qi$2(2328,`span`,63),Mw(2329,`string`),Tl(),Mw(2330,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,`),qi$2(2331,`span`,50),Mw(2332,`""`),Tl(),Mw(2333,`) } }
                    });
                    }
                }

                `),qi$2(2334,`span`,46),Mw(2335,`var`),Tl(),Mw(2336,` passwordValid = `),qi$2(2337,`span`,46),Mw(2338,`await`),Tl(),Mw(2339,` `),qi$2(2340,`span`,46),Mw(2341,`this`),Tl(),Mw(2342,`.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                `),qi$2(2343,`span`,46),Mw(2344,`if`),Tl(),Mw(2345,` (!passwordValid)
                {
                    `),qi$2(2346,`span`,46),Mw(2347,`var`),Tl(),Mw(2348,` accessFailed = `),qi$2(2349,`span`,46),Mw(2350,`await`),Tl(),Mw(2351,` `),qi$2(2352,`span`,46),Mw(2353,`this`),Tl(),Mw(2354,`.userManager.AccessFailedAsync(user);
                    `),qi$2(2355,`span`,46),Mw(2356,`if`),Tl(),Mw(2357,` (!accessFailed.Succeeded)
                    {
                        `),qi$2(2358,`span`,46),Mw(2359,`var`),Tl(),Mw(2360,` errors = `),qi$2(2361,`span`,46),Mw(2362,`new`),Tl(),Mw(2363,` Dictionary<`),qi$2(2364,`span`,63),Mw(2365,`string`),Tl(),Mw(2366,`, `),qi$2(2367,`span`,63),Mw(2368,`string`),Tl(),Mw(2369,`[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            `),qi$2(2370,`span`,46),Mw(2371,`switch`),Tl(),Mw(2372,` (e.Code)
                            {
                                `),qi$2(2373,`span`,46),Mw(2374,`case`),Tl(),Mw(2375,` `),qi$2(2376,`span`,50),Mw(2377,`"TODO: need to debug e.Code"`),Tl(),Mw(2378,`:
                                    e.Description = `),qi$2(2379,`span`,63),Mw(2380,`string`),Tl(),Mw(2381,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, `),qi$2(2382,`span`,50),Mw(2383,`""`),Tl(),Mw(2384,`);
                                    `),qi$2(2385,`span`,46),Mw(2386,`break`),Tl(),Mw(2387,`;
                            }

                            e.Description = `),qi$2(2388,`span`,63),Mw(2389,`string`),Tl(),Mw(2390,`.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, [e.Description]);
                        });

                        `),qi$2(2391,`span`,46),Mw(2392,`return`),Tl(),Mw(2393,` Result<UserResponseEnvelope>.Failure(errors);
                    }

                    `),qi$2(2394,`span`,46),Mw(2395,`return`),Tl(),Mw(2396,` Result<UserResponseEnvelope>.Failure(`),qi$2(2397,`span`,46),Mw(2398,`new`),Tl(),Mw(2399,` Dictionary<`),qi$2(2400,`span`,63),Mw(2401,`string`),Tl(),Mw(2402,`, `),qi$2(2403,`span`,63),Mw(2404,`string`),Tl(),Mw(2405,`[]>
                {
                    { `),qi$2(2406,`span`,50),Mw(2407,`"invalid_error"`),Tl(),Mw(2408,`, `),qi$2(2409,`span`,46),Mw(2410,`new`),Tl(),Mw(2411,`[] { InvalidErrorMessage } }
                });
                }
            }
            `),qi$2(2412,`span`,46),Mw(2413,`else`),Tl(),Mw(2414,`
            {
                `),qi$2(2415,`span`,46),Mw(2416,`if`),Tl(),Mw(2417,` (`),qi$2(2418,`span`,46),Mw(2419,`this`),Tl(),Mw(2420,`.env.EnvironmentName == `),qi$2(2421,`span`,50),Mw(2422,`"Test"`),Tl(),Mw(2423,`)
                {
                    `),qi$2(2424,`span`,46),Mw(2425,`var`),Tl(),Mw(2426,` passwordValid = `),qi$2(2427,`span`,46),Mw(2428,`await`),Tl(),Mw(2429,` `),qi$2(2430,`span`,46),Mw(2431,`this`),Tl(),Mw(2432,`.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    `),qi$2(2433,`span`,46),Mw(2434,`if`),Tl(),Mw(2435,` (!passwordValid)
                    {
                        `),qi$2(2436,`span`,46),Mw(2437,`return`),Tl(),Mw(2438,` Result<UserResponseEnvelope>.Failure(`),qi$2(2439,`span`,46),Mw(2440,`new`),Tl(),Mw(2441,` Dictionary<`),qi$2(2442,`span`,63),Mw(2443,`string`),Tl(),Mw(2444,`, `),qi$2(2445,`span`,63),Mw(2446,`string`),Tl(),Mw(2447,`[]>
                    {
                        { `),qi$2(2448,`span`,50),Mw(2449,`"invalid_error"`),Tl(),Mw(2450,`, `),qi$2(2451,`span`,46),Mw(2452,`new`),Tl(),Mw(2453,`[] { InvalidErrorMessage } }
                    });
                    }
                }
                `),qi$2(2454,`span`,46),Mw(2455,`else`),Tl(),Mw(2456,`
                {
                    `),qi$2(2457,`span`,46),Mw(2458,`return`),Tl(),Mw(2459,` Result<UserResponseEnvelope>.Failure(`),qi$2(2460,`span`,46),Mw(2461,`new`),Tl(),Mw(2462,` Dictionary<`),qi$2(2463,`span`,63),Mw(2464,`string`),Tl(),Mw(2465,`, `),qi$2(2466,`span`,63),Mw(2467,`string`),Tl(),Mw(2468,`[]>
                {
                    { `),qi$2(2469,`span`,50),Mw(2470,`"lockout_enabled_error"`),Tl(),Mw(2471,`, `),qi$2(2472,`span`,46),Mw(2473,`new`),Tl(),Mw(2474,`[] { LockoutEnabledErrorMessage } }
                });
                }
            }

            `),qi$2(2475,`span`,63),Mw(2476,`string`),Tl(),Mw(2477,`? token;
            `),qi$2(2478,`span`,46),Mw(2479,`if`),Tl(),Mw(2480,` (`),qi$2(2481,`span`,46),Mw(2482,`this`),Tl(),Mw(2483,`.env.EnvironmentName == `),qi$2(2484,`span`,50),Mw(2485,`"Test"`),Tl(),Mw(2486,`)
            {
                token = `),qi$2(2487,`span`,50),Mw(2488,`$"Token: `),qi$2(2489,`span`,66),Mw(2490,`{user.Email}`),Tl(),Mw(2491,`"`),Tl(),Mw(2492,`;
            }
            `),qi$2(2493,`span`,46),Mw(2494,`else`),Tl(),Mw(2495,`
            {
                token = `),qi$2(2496,`span`,46),Mw(2497,`await`),Tl(),Mw(2498,` `),qi$2(2499,`span`,46),Mw(2500,`this`),Tl(),Mw(2501,`.jwtGenerator.GenerateToken(user);
            }
            `),qi$2(2502,`span`,46),Mw(2503,`return`),Tl(),Mw(2504,` `),qi$2(2505,`span`,46),Mw(2506,`new`),Tl(),Mw(2507,` UserResponseEnvelope
            {
                UserJson = `),qi$2(2508,`span`,46),Mw(2509,`new`),Tl(),Mw(2510,`()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
    }
}`),Tl()(),qi$2(2511,`p`),Mw(2512,`To really appreciate the beauty of MyTested, It must be compared to `),qi$2(2513,`a`,67),Mw(2514,`an alternative`),Tl(),Mw(2515,` method of testing. With MyTested library, it is very easy to test against endpoint locations, input data in JSON format and output data.
When it comes to JWT authorization, a big amount of testing consists in testing for invalid JWT tokens:`),Tl(),qi$2(2516,`ul`)(2517,`li`)(2518,`code`),Mw(2519,`Update_user_without_authorization_header_should_fail`),Tl(),Mw(2520,`- tests when JWT token is absent`),Tl(),qi$2(2521,`li`)(2522,`code`),Mw(2523,`Update_user_with_altered_authorization_header_should_fail`),Tl(),Mw(2524,`- tests when to a valid JWT token is added one character`),Tl(),qi$2(2525,`li`)(2526,`code`),Mw(2527,`Update_user_with_malformed_authorization_header_should_fail`),Tl(),Mw(2528,`- tests when JWT token has format `),qi$2(2529,`code`),Mw(2530,`a.b`),Tl()(),qi$2(2531,`li`)(2532,`code`),Mw(2533,`Update_user_with_fake_authorization_header_should_fail`),Tl(),Mw(2534,`- tests when JWT token has correct format `),qi$2(2535,`code`),Mw(2536,`a.b.c`),Tl(),Mw(2537,` but random characters`),Tl(),qi$2(2538,`li`)(2539,`code`),Mw(2540,`Update_user_with_incorrect_authorization_header_key_should_fail`),Tl(),Mw(2541,`- tests when JWT token is valid but was encrypted with a different key`),Tl(),qi$2(2542,`li`)(2543,`code`),Mw(2544,`Update_user_with_expired_authorization_header_should_fail`),Tl(),Mw(2545,`- tests when a valid JWT token was expired`),Tl()(),qi$2(2546,`p`),Mw(2547,`These are the most common case scenarios to test against an invalid JWT token and must be done just for one controller!
MyTested cannot catch 401 error code directly. We found a workaround by using `),qi$2(2548,`a`,68),Mw(2549,`HeaderAuthorizationException`),Tl(),Mw(2550,`
In real life, .NET Core 10 will return a 401-error code. We created a series of tests for testing invalid JWT tokens such as:`),Tl(),qi$2(2551,`pre`,45)(2552,`code`),Mw(2553,`        [`),qi$2(2554,`span`,48),Mw(2555,`Theory`),Tl(),Mw(2556,`]
        [`),qi$2(2557,`span`,48),Mw(2558,`MemberData(nameof(RegisterValidData))`),Tl(),Mw(2559,`]
        `),qi$2(2560,`span`,49)(2561,`span`,46),Mw(2562,`public`),Tl(),Mw(2563,` `),qi$2(2564,`span`,46),Mw(2565,`void`),Tl(),Mw(2566,` `),qi$2(2567,`span`,47),Mw(2568,`Update_user_without_authorization_header_should_fail`),Tl(),Mw(2569,`(`),qi$2(2570,`span`,62),Mw(2571,`
         `),qi$2(2572,`span`,63),Mw(2573,`string`),Tl(),Mw(2574,` fullName,
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
         `),qi$2(2575,`span`,63),Mw(2576,`string`),Tl(),Mw(2577,` email,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
         `),qi$2(2578,`span`,63),Mw(2579,`string`),Tl(),Mw(2580,` password`),Tl(),Mw(2581,`)`),Tl(),Mw(2582,`
        => AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
        () =>
        {
            MyMvc
             .Pipeline()
             .ShouldMap(request => request
                 .WithMethod(HttpMethod.Put)
                 `),qi$2(2583,`span`,69),Mw(2584,`// without WithHeaderAuthorization`),Tl(),Mw(2585,`
                 .WithLocation(`),qi$2(2586,`span`,50),Mw(2587,`"api/v1.0/identity/update"`),Tl(),Mw(2588,`)
                 .WithJsonBody(
                      `),qi$2(2589,`span`,63),Mw(2590,`string`),Tl(),Mw(2591,`.Format(`),qi$2(2592,`span`,50),Mw(2593,`"{{"`),Tl(),qi$2(2594,`span`,50),Mw(2595,`"user"`),Tl(),qi$2(2596,`span`,50),Mw(2597,`":{{"`),Tl(),qi$2(2598,`span`,50),Mw(2599,`"password"`),Tl(),qi$2(2600,`span`,50),Mw(2601,`":"`),Tl(),qi$2(2602,`span`,50),Mw(2603,`"{0}"`),Tl(),qi$2(2604,`span`,50),Mw(2605,`","`),Tl(),qi$2(2606,`span`,50),Mw(2607,`"username"`),Tl(),qi$2(2608,`span`,50),Mw(2609,`":"`),Tl(),qi$2(2610,`span`,50),Mw(2611,`"{1}"`),Tl(),qi$2(2612,`span`,50),Mw(2613,`"}}}}"`),Tl(),Mw(2614,`,
                          `),qi$2(2615,`span`,50),Mw(2616,`$"`),qi$2(2617,`span`,66),Mw(2618,`{password}`),Tl(),Mw(2619,`1"`),Tl(),Mw(2620,`,
                          `),qi$2(2621,`span`,50),Mw(2622,`$"`),qi$2(2623,`span`,66),Mw(2624,`{fullName}`),Tl(),Mw(2625,`1"`),Tl(),Mw(2626,`
                      )
                 )
             )
             .To<IdentityController>(c => c.Update(`),qi$2(2627,`span`,46),Mw(2628,`new`),Tl(),Mw(2629,` UserUpdateCommand
             {
                 UserJson = `),qi$2(2630,`span`,46),Mw(2631,`new`),Tl(),Mw(2632,`()
                 {
                     FullName = `),qi$2(2633,`span`,50),Mw(2634,`$"`),qi$2(2635,`span`,66),Mw(2636,`{fullName}`),Tl(),Mw(2637,`1"`),Tl(),Mw(2638,`,
                     Password = `),qi$2(2639,`span`,50),Mw(2640,`$"`),qi$2(2641,`span`,66),Mw(2642,`{password}`),Tl(),Mw(2643,`1"`),Tl(),Mw(2644,`
                 }
             }));
        }, `),qi$2(2645,`span`,63),Mw(2646,`string`),Tl(),Mw(2647,`.Format(HeaderAuthorizationException.Replace(Environment.NewLine, `),qi$2(2648,`span`,50),Mw(2649,`""`),Tl(),Mw(2650,`), `),qi$2(2651,`span`,50),Mw(2652,`"/api/v1.0/identity/update"`),Tl(),Mw(2653,`, `),qi$2(2654,`span`,50),Mw(2655,`"Update"`),Tl(),Mw(2656,`, `),qi$2(2657,`span`,50),Mw(2658,`"IdentityController"`),Tl(),Mw(2659,`));`),Tl()(),qi$2(2660,`p`),Mw(2661,`The full set of tests of `),qi$2(2662,`code`),Mw(2663,`IdentityController`),Tl(),Mw(2664,` is on `),qi$2(2665,`a`,68),Mw(2666,`our GitHub repository`),Tl(),Mw(2667,`.`),Tl(),qi$2(2668,`h2`,70)(2669,`span`),Mw(2670,`Data Validation with FluentValidation Library`),Tl(),qi$2(2671,`a`,71),Mw(2672,`#`),Tl()(),qi$2(2673,`p`),Mw(2674,`Another change we made to MyTested is adding the possibility of testing data validation. For now, we will give an example of testing using `),qi$2(2675,`a`,72),Mw(2676,`FluentValidation`),Tl(),Mw(2677,`. Following is an example of testing data validation using modified version of MyTested library:`),Tl(),qi$2(2678,`pre`,45)(2679,`code`),Mw(2680,`[`),qi$2(2681,`span`,48),Mw(2682,`Theory`),Tl(),Mw(2683,`]
[`),qi$2(2684,`span`,48),Mw(2685,`InlineData(`),qi$2(2686,`span`,50),Mw(2687,`"n"`),Tl(),Mw(2688,`, `),qi$2(2689,`span`,50),Mw(2690,`"ValidEmail@a.bcde"`),Tl(),Mw(2691,`, `),qi$2(2692,`span`,50),Mw(2693,`"p"`),Tl(),Mw(2694,`)`),Tl(),Mw(2695,`]
`),qi$2(2696,`span`,49)(2697,`span`,46),Mw(2698,`public`),Tl(),Mw(2699,` `),qi$2(2700,`span`,46),Mw(2701,`void`),Tl(),Mw(2702,` `),qi$2(2703,`span`,47),Mw(2704,`Update_user_with_bad_input_should_return_validation_errors`),Tl(),Mw(2705,`(`),qi$2(2706,`span`,62),Mw(2707,`
 `),qi$2(2708,`span`,63),Mw(2709,`string`),Tl(),Mw(2710,` fullName,
 `),qi$2(2711,`span`,63),Mw(2712,`string`),Tl(),Mw(2713,` email,
 `),qi$2(2714,`span`,63),Mw(2715,`string`),Tl(),Mw(2716,` password`),Tl(),Mw(2717,`)`),Tl(),Mw(2718,`
=> AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
() =>
{
    MyMvc
     .Pipeline()
     .ShouldMap(request => request
        .WithMethod(HttpMethod.Put)
        .WithHeaderAuthorization(StaticTestData.GetJwtBearerAdministratorRole(email, `),qi$2(2719,`span`,65),Mw(2720,`1`),Tl(),Mw(2721,`))
        .WithLocation(`),qi$2(2722,`span`,50),Mw(2723,`"api/v1.0/identity/update"`),Tl(),Mw(2724,`)
        .WithJsonBody(
             `),qi$2(2725,`span`,63),Mw(2726,`string`),Tl(),Mw(2727,`.Format(`),qi$2(2728,`span`,50),Mw(2729,`"{{"`),Tl(),qi$2(2730,`span`,50),Mw(2731,`"user"`),Tl(),qi$2(2732,`span`,50),Mw(2733,`":{{"`),Tl(),qi$2(2734,`span`,50),Mw(2735,`"password"`),Tl(),qi$2(2736,`span`,50),Mw(2737,`":"`),Tl(),qi$2(2738,`span`,50),Mw(2739,`"{0}"`),Tl(),qi$2(2740,`span`,50),Mw(2741,`","`),Tl(),qi$2(2742,`span`,50),Mw(2743,`"username"`),Tl(),qi$2(2744,`span`,50),Mw(2745,`":"`),Tl(),qi$2(2746,`span`,50),Mw(2747,`"{1}"`),Tl(),qi$2(2748,`span`,50),Mw(2749,`"}}}}"`),Tl(),Mw(2750,`,
                 `),qi$2(2751,`span`,50),Mw(2752,`$"`),qi$2(2753,`span`,66),Mw(2754,`{password}`),Tl(),Mw(2755,`"`),Tl(),Mw(2756,`,
                 `),qi$2(2757,`span`,50),Mw(2758,`$"`),qi$2(2759,`span`,66),Mw(2760,`{fullName}`),Tl(),Mw(2761,`"`),Tl(),Mw(2762,`
             )
        )
     )
     .To<IdentityController>(c => c.Update(`),qi$2(2763,`span`,46),Mw(2764,`new`),Tl(),Mw(2765,` UserUpdateCommand
     {
         UserJson = `),qi$2(2766,`span`,46),Mw(2767,`new`),Tl(),Mw(2768,`()
         {
             FullName = fullName,
             Password = password,
         }
     }))
     .Which(controller => controller
        .WithData(StaticTestData.GetUsers(`),qi$2(2769,`span`,65),Mw(2770,`3`),Tl(),Mw(2771,`, email, fullName, password)))
     .ShouldReturn();
}, `),qi$2(2772,`span`,46),Mw(2773,`new`),Tl(),Mw(2774,` Dictionary<`),qi$2(2775,`span`,63),Mw(2776,`string`),Tl(),Mw(2777,`, `),qi$2(2778,`span`,63),Mw(2779,`string`),Tl(),Mw(2780,`[]>
{
   { `),qi$2(2781,`span`,50),Mw(2782,`"UserJson.Password"`),Tl(),Mw(2783,`, [`),qi$2(2784,`span`,50),Mw(2785,`"The length of 'User Json Password' must be at least 16 characters. You entered 1 characters."`),Tl(),Mw(2786,`] },
   { `),qi$2(2787,`span`,50),Mw(2788,`"UserJson.FullName"`),Tl(),Mw(2789,`, [`),qi$2(2790,`span`,50),Mw(2791,`"The length of 'User Json Full Name' must be at least 2 characters. You entered 1 characters."`),Tl(),Mw(2792,`] },
});`),Tl()(),qi$2(2793,`p`)(2794,`a`,73),Mw(2795,`Conduit`),Tl()(),qi$2(2796,`p`),Mw(2797,`As you can see, now we can test data validation against the validation errors coming from FluentValidation library. Following are `),qi$2(2798,`a`,74),Mw(2799,`three tests`),Tl(),Mw(2800,` witch test against the constraint that the tag name is unique:`),Tl(),qi$2(2801,`ul`)(2802,`li`)(2803,`code`),Mw(2804,`Create_tag_with_same_name_should_fail_with_validation_error`),Tl(),Mw(2805,`- Creates tag with name when the name has already taken.`),Tl(),qi$2(2806,`li`)(2807,`code`),Mw(2808,`Edit_tag_with_same_name_should_fail_with_validation_error`),Tl(),Mw(2809,`- Updates tag name when the name has already taken.`),Tl(),qi$2(2810,`li`)(2811,`code`),Mw(2812,`Edit_same_tag_with_same_name_should_return_success_with_data`),Tl(),Mw(2813,`- Updates tag name when the name did not change.`),Tl()(),qi$2(2814,`p`),Mw(2815,`Sometimes, we need to validate against standard .Net services. For example, in the `),qi$2(2816,`code`),Mw(2817,`IdentityService`),Tl(),Mw(2818,` from above we have:`),Tl(),qi$2(2819,`pre`,45)(2820,`code`),Mw(2821,`\u2026
`),qi$2(2822,`span`,46),Mw(2823,`if`),Tl(),Mw(2824,` (userRequest.UserJson.FullName != `),qi$2(2825,`span`,64),Mw(2826,`null`),Tl(),Mw(2827,`)
{
    `),qi$2(2828,`span`,46),Mw(2829,`var`),Tl(),Mw(2830,` identityResult1 = `),qi$2(2831,`span`,46),Mw(2832,`await`),Tl(),Mw(2833,` `),qi$2(2834,`span`,46),Mw(2835,`this`),Tl(),Mw(2836,`.userManager.SetUserNameAsync(
         user,
         userRequest.UserJson.FullName);

    `),qi$2(2837,`span`,46),Mw(2838,`if`),Tl(),Mw(2839,` (!identityResult1.Succeeded)
    {
        `),qi$2(2840,`span`,46),Mw(2841,`var`),Tl(),Mw(2842,` errors = `),qi$2(2843,`span`,46),Mw(2844,`new`),Tl(),Mw(2845,` Dictionary<`),qi$2(2846,`span`,63),Mw(2847,`string`),Tl(),Mw(2848,`, `),qi$2(2849,`span`,63),Mw(2850,`string`),Tl(),Mw(2851,`[]>();
        identityResult1.Errors.ForEach(e =>
        {
            `),qi$2(2852,`span`,46),Mw(2853,`switch`),Tl(),Mw(2854,` (e.Code)
            {
                `),qi$2(2855,`span`,46),Mw(2856,`case`),Tl(),Mw(2857,` `),qi$2(2858,`span`,50),Mw(2859,`"InvalidUserName"`),Tl(),Mw(2860,`:
                    e.Description = UsernameFormatErrorMessage;
                    `),qi$2(2861,`span`,46),Mw(2862,`break`),Tl(),Mw(2863,`;
            }
            errors.Add(e.Code, `),qi$2(2864,`span`,46),Mw(2865,`new`),Tl(),Mw(2866,`[] { e.Description });
        });

        `),qi$2(2867,`span`,46),Mw(2868,`return`),Tl(),Mw(2869,` Result<UserResponseEnvelope>.Failure(errors);
    }
}
\u2026`),Tl()(),qi$2(2870,`p`)(2871,`a`,75),Mw(2872,`Here`),Tl(),Mw(2873,` is the test:`),Tl(),qi$2(2874,`ul`)(2875,`li`)(2876,`code`),Mw(2877,`Update_user_with_incorrect_user_name_should_fail`),Tl(),Mw(2878,`- Tests against the username implemented in `),qi$2(2879,`code`),Mw(2880,`UserManager<User>`),Tl(),Mw(2881,`.`),Tl()(),qi$2(2882,`h2`,76)(2883,`span`),Mw(2884,`Conclusion`),Tl(),qi$2(2885,`a`,77),Mw(2886,`#`),Tl()(),qi$2(2887,`p`),Mw(2888,`In this article, we gave a common example of a .NET Core `),qi$2(2889,`code`),Mw(2890,`Identity`),Tl(),Mw(2891,` controller, implemented a common `),qi$2(2892,`code`),Mw(2893,`User Identity`),Tl(),Mw(2894,` service based on `),qi$2(2895,`code`),Mw(2896,`UserManager<User>`),Tl(),Mw(2897,`, and showed a comprehensive `),qi$2(2898,`code`),Mw(2899,`Identity`),Tl(),Mw(2900,` controller testing using MyTested library. From multiple examples, we can see how easy is to test against endpoint locations, input data as JSON strings, and output data. In addition, we showed a lot of examples for data validation against the validation errors coming from `),qi$2(2901,`code`),Mw(2902,`FluentValidation`),Tl(),Mw(2903,` library.
It is important to note, that having a detailed testing of API controllers based on MyTested library, gives us the possibility to debug .NET Core applications in Visual Studio 2022. For example, we can set a breakpoint in our application, go to test panel, find a MyTested test, and click Debug instead on Run.
The Markdown version of this article and the compiled code of our .NET Core 10 application can be found on `),qi$2(2904,`a`,37),Mw(2905,`our GitHub repository`),Tl(),Mw(2906,`.`),Tl(),qi$2(2907,`h2`,78)(2908,`span`),Mw(2909,`Credits`),Tl(),qi$2(2910,`a`,79),Mw(2911,`#`),Tl()(),qi$2(2912,`ul`)(2913,`li`)(2914,`a`,80),Mw(2915,`Ivaylo Kenov`),Tl()(),qi$2(2916,`li`)(2917,`a`,81),Mw(2918,`Kalin Tsenkov`),Tl()(),qi$2(2919,`li`)(2920,`a`,82),Mw(2921,`Steve Smith`),Tl()(),qi$2(2922,`li`)(2923,`a`,83),Mw(2924,`Jason Taylor`),Tl()(),qi$2(2925,`li`)(2926,`a`,84),Mw(2927,`Stefan Prodan`),Tl()(),qi$2(2928,`li`)(2929,`a`,85),Mw(2930,`Mark Cilia Vincenti`),Tl()(),qi$2(2931,`li`)(2932,`a`,86),Mw(2933,`Jimmy Bogard`),Tl()(),qi$2(2934,`li`)(2935,`a`,87),Mw(2936,`Ben Morris`),Tl()()()()()()),o&2&&(IE(),tg(`nzBordered`,!0),IE(6),tg(`nzOffsetTop`,45),IE(6),Ag(`ngModel`,r.enableNavigation),tg(`ngModelOptions`,Hw(11,gi)),lD(),IE(),tg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()),IE(41),tg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback))},dependencies:[ml,Nr,Ds,Te,ae,bt,re,Bt,Et,zg,cd,cr$1,ir,Fa,I9,O9,Vn,Wn$1,qi$1,_n,ji$1,Jo,Za,El,ga$1,ma$1,So,Ve,pe,wu],encapsulation:2})}return a})();var Ai=()=>({standalone:!0});function fi(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,67),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,68),ng(3,`nz-icon`,69),Tl()(),Sl()}}function wi(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,67),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,68),Mw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var ot=110;var Jn=(()=>{class a{destroyRef=_(ae$1);router=_(Te$1);#e=_(q0);injector=_(se);viewPort=_(O7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){sV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-ot>640?this.width.set(640):this.width.set(this.windowWidth()-ot-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-ot>640?this.width.set(640):this.width.set(i-ot-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(iV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`nz-blog-about-this-blog`]],features:[Vw([{provide:lt$1,useValue:{disableCookies:!0,loadApi:!1}}])],decls:480,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-375bae56`,`nzTitle`,`Generate Posts from Markdown Files`],[`nzHref`,`#h-9ee0998d`,`nzTitle`,`Generate Static Syntax Highlighting`],[`nzHref`,`#h-ae84e8a9`,`nzTitle`,`Deploy to a Cloud Platform`],[`nzHref`,`#h-0ac07f26`,`nzTitle`,`Simulate Static Content`],[`nzHref`,`#h-3d814a59`,`nzTitle`,`Markdown Extension`],[`nzHref`,`#h-d748b3e2`,`nzTitle`,`Blog Listing`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241008-about-this-blog.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[1,`pic-plus`],[`nz-icon`,``,`nzType`,`custom:zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-icon`,``,`nzType`,`custom:angular`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-icon`,``,`nzType`,`custom:ng-zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`id`,`h-375bae56`],[`onclick`,`window.location.hash = 'h-375bae56'`,1,`anchor`],[`href`,`https://github.com/cioina/alexei-cioina.b9ad.pro-us-east-1.openshiftapps.com/tree/main/posts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-9ee0998d`],[`onclick`,`window.location.hash = 'h-9ee0998d'`,1,`anchor`],[1,`language-javascript`],[1,`hljs-keyword`],[1,`hljs-built_in`],[1,`hljs-string`],[1,`hljs-title`,`function_`],[1,`hljs-params`],[1,`hljs-function`],[1,`hljs-literal`],[1,`hljs-title`,`class_`],[1,`hljs-regexp`],[1,`hljs-variable`,`language_`],[1,`hljs-property`],[`id`,`h-ae84e8a9`],[`onclick`,`window.location.hash = 'h-ae84e8a9'`,1,`anchor`],[`href`,`https://www.openshift.com/products/online/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://docs.openshift.com/container-platform/3.11/architecture/core_concepts/builds_and_image_streams.html#source-build`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://docs.openshift.com/container-platform/3.11/dev_guide/deployments/deployment_strategies.html#recreate-strategy`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-0ac07f26`],[`onclick`,`window.location.hash = 'h-0ac07f26'`,1,`anchor`],[`href`,`https://github.com/dwightwatson/dwightwatson.com`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/dwightwatson/neontsunami-laravel`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/dwightwatson/neontsunami-laravel/blob/master/resources/views/posts/show.blade.php`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/neontsunami`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://laravel.com/docs/8.x/octane`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-3d814a59`],[`onclick`,`window.location.hash = 'h-3d814a59'`,1,`anchor`],[1,`language-html`],[1,`hljs-tag`],[1,`hljs-name`],[1,`hljs-attr`],[`href`,`https://mdxjs.com/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-d748b3e2`],[`onclick`,`window.location.hash = 'h-d748b3e2'`,1,`anchor`],[`href`,`https://github.com/AndyT2503/angular-conduit-signals`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/alexeymezenin/laravel-realworld-example-app`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(qi$2(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Zh(5,fi,4,0,`ng-container`,5)(6,wi,4,0,`ng-container`,5),Tl()()(),qi$2(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),cg(`click`,function(){return r.scrollTop()}),Mw(11,`Jump to top`),Tl()(),qi$2(12,`div`,3)(13,`nz-switch`,9),aD(),Rg(`ngModelChange`,function(g){return Aw(r.enableNavigation,g)||(r.enableNavigation=g),g}),cg(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),qi$2(14,`nz-anchor`,10),cg(`nzClick`,function(g){return r.goLink(g)}),ng(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16),Tl()(),qi$2(21,`span`,17),Mw(22,` About This Blog`),ng(23,`span`,18)(24,`span`,19),qi$2(25,`a`,20),ng(26,`nz-icon`,21),Tl()(),qi$2(27,`article`,22)(28,`div`,23),ng(29,`span`,24),qi$2(30,`span`),Mw(31,`+`),Tl(),ng(32,`span`,25),qi$2(33,`span`),Mw(34,`=`),Tl(),ng(35,`span`,26),Tl(),qi$2(36,`p`),Mw(37,`Here we've built a blog that is able to:`),Tl(),qi$2(38,`ul`)(39,`li`),Mw(40,`Generate posts from markdown files`),Tl(),qi$2(41,`li`),Mw(42,`Generate static syntax highlighting`),Tl(),qi$2(43,`li`),Mw(44,`Deploy to a cloud platform`),Tl(),qi$2(45,`li`),Mw(46,`Simulate static content`),Tl()(),qi$2(47,`h2`,27)(48,`span`),Mw(49,`Generate Posts from Markdown Files`),Tl(),qi$2(50,`a`,28),Mw(51,`#`),Tl()(),qi$2(52,`p`),Mw(53,`We use a `),qi$2(54,`code`),Mw(55,`ng-zorro-antd`),Tl(),Mw(56,` Node.js script to generate compiled Angular modules from `),qi$2(57,`a`,29),Mw(58,`a set of markdown files`),Tl(),Mw(59,`.
Each post represents a compiled JavaScrip file that loads via lazy-loading. The content of a markdown file is included into compiled Angular module witch is smaller than a generated static HTML.`),Tl(),qi$2(60,`h2`,30)(61,`span`),Mw(62,`Generate Static Syntax Highlighting`),Tl(),qi$2(63,`a`,31),Mw(64,`#`),Tl()(),qi$2(65,`p`),Mw(66,`To generate static syntax highlighting (which is static HTML,) we use `),qi$2(67,`code`),Mw(68,`prismjs`),Tl(),Mw(69,` on Node.js. This way, we do not need to include `),qi$2(70,`code`),Mw(71,`prismjs`),Tl(),Mw(72,` JavaScript in our web application.`),Tl(),qi$2(73,`pre`,32)(74,`code`)(75,`span`,33),Mw(76,`const`),Tl(),Mw(77,` fs = `),qi$2(78,`span`,34),Mw(79,`require`),Tl(),Mw(80,`(`),qi$2(81,`span`,35),Mw(82,`'fs'`),Tl(),Mw(83,`);
`),qi$2(84,`span`,33),Mw(85,`const`),Tl(),Mw(86,` path = `),qi$2(87,`span`,34),Mw(88,`require`),Tl(),Mw(89,`(`),qi$2(90,`span`,35),Mw(91,`'path'`),Tl(),Mw(92,`);

`),qi$2(93,`span`,33),Mw(94,`function`),Tl(),Mw(95,` `),qi$2(96,`span`,36),Mw(97,`uniq`),Tl(),Mw(98,`(`),qi$2(99,`span`,37),Mw(100,`arr`),Tl(),Mw(101,`) {
  `),qi$2(102,`span`,33),Mw(103,`const`),Tl(),Mw(104,` set = arr.`),qi$2(105,`span`,36),Mw(106,`reduce`),Tl(),Mw(107,`(`),qi$2(108,`span`,38),Mw(109,`(`),qi$2(110,`span`,37),Mw(111,`set, item`),Tl(),Mw(112,`) =>`),Tl(),Mw(113,` {
    set[item] = `),qi$2(114,`span`,39),Mw(115,`true`),Tl(),Mw(116,`;
    `),qi$2(117,`span`,33),Mw(118,`return`),Tl(),Mw(119,` set;
  }, {});
  `),qi$2(120,`span`,33),Mw(121,`return`),Tl(),Mw(122,` `),qi$2(123,`span`,40),Mw(124,`Object`),Tl(),Mw(125,`.`),qi$2(126,`span`,36),Mw(127,`keys`),Tl(),Mw(128,`(set);
}

`),qi$2(129,`span`,33),Mw(130,`const`),Tl(),Mw(131,` prismCore = `),qi$2(132,`span`,35),Mw(133,`'../../node-prismjs/components/prism-core.js'`),Tl(),Mw(134,`;
`),qi$2(135,`span`,33),Mw(136,`const`),Tl(),Mw(137,` `),qi$2(138,`span`,40),Mw(139,`Prism`),Tl(),Mw(140,` = `),qi$2(141,`span`,34),Mw(142,`require`),Tl(),Mw(143,`(prismCore);

`),qi$2(144,`span`,33),Mw(145,`const`),Tl(),Mw(146,` prelude = [
  `),qi$2(147,`span`,35),Mw(148,`'prism-markup'`),Tl(),Mw(149,`,
  `),qi$2(150,`span`,35),Mw(151,`'prism-css'`),Tl(),Mw(152,`,
  `),qi$2(153,`span`,35),Mw(154,`'prism-clike'`),Tl(),Mw(155,`,
  `),qi$2(156,`span`,35),Mw(157,`'prism-javascript'`),Tl(),Mw(158,`,
  `),qi$2(159,`span`,35),Mw(160,`'prism-css-extras'`),Tl(),Mw(161,`,
  `),qi$2(162,`span`,35),Mw(163,`'prism-json'`),Tl(),Mw(164,`,
  `),qi$2(165,`span`,35),Mw(166,`'prism-markup-templating'`),Tl(),Mw(167,`,
  `),qi$2(168,`span`,35),Mw(169,`'prism-php'`),Tl(),Mw(170,`,
  `),qi$2(171,`span`,35),Mw(172,`'prism-php-extras'`),Tl(),Mw(173,`,
  `),qi$2(174,`span`,35),Mw(175,`'prism-typescript'`),Tl(),Mw(176,`,
];

`),qi$2(177,`span`,33),Mw(178,`const`),Tl(),Mw(179,` prismComponents = path.`),qi$2(180,`span`,36),Mw(181,`dirname`),Tl(),Mw(182,`(`),qi$2(183,`span`,34),Mw(184,`require`),Tl(),Mw(185,`.`),qi$2(186,`span`,36),Mw(187,`resolve`),Tl(),Mw(188,`(prismCore));
`),qi$2(189,`span`,33),Mw(190,`const`),Tl(),Mw(191,` components = prelude
  .`),qi$2(192,`span`,36),Mw(193,`concat`),Tl(),Mw(194,`(fs.`),qi$2(195,`span`,36),Mw(196,`readdirSync`),Tl(),Mw(197,`(prismComponents))
  .`),qi$2(198,`span`,36),Mw(199,`map`),Tl(),Mw(200,`(`),qi$2(201,`span`,38)(202,`span`,37),Mw(203,`component`),Tl(),Mw(204,` =>`),Tl(),Mw(205,` component.`),qi$2(206,`span`,36),Mw(207,`replace`),Tl(),Mw(208,`(`),qi$2(209,`span`,41),Mw(210,`/(\\.min)?\\.js$/`),Tl(),Mw(211,`, `),qi$2(212,`span`,35),Mw(213,`''`),Tl(),Mw(214,`));

`),qi$2(215,`span`,33),Mw(216,`const`),Tl(),Mw(217,` componentsSet = `),qi$2(218,`span`,36),Mw(219,`uniq`),Tl(),Mw(220,`(components);
componentsSet.`),qi$2(221,`span`,36),Mw(222,`forEach`),Tl(),Mw(223,`(`),qi$2(224,`span`,38)(225,`span`,37),Mw(226,`component`),Tl(),Mw(227,` =>`),Tl(),Mw(228,` {
  `),qi$2(229,`span`,34),Mw(230,`require`),Tl(),Mw(231,`(path.`),qi$2(232,`span`,36),Mw(233,`join`),Tl(),Mw(234,`(prismComponents, component));
});

`),qi$2(235,`span`,42),Mw(236,`module`),Tl(),Mw(237,`.`),qi$2(238,`span`,43),Mw(239,`exports`),Tl(),Mw(240,` = `),qi$2(241,`span`,40),Mw(242,`Prism`),Tl(),Mw(243,`;`),Tl()(),qi$2(244,`h2`,44)(245,`span`),Mw(246,`Deploy to a Cloud Platform`),Tl(),qi$2(247,`a`,45),Mw(248,`#`),Tl()(),qi$2(249,`p`),Mw(250,`We use Red Hat `),qi$2(251,`a`,46),Mw(252,`OpenShift Online`),Tl(),Mw(253,` public cloud
with `),qi$2(254,`a`,47),Mw(255,`Source-to-Image`),Tl(),Mw(256,` (S2I) build
and `),qi$2(257,`a`,48),Mw(258,`Recreate Strategy`),Tl(),Mw(259,` with less than 60 seconds downtime.`),Tl(),qi$2(260,`h2`,49)(261,`span`),Mw(262,`Simulate Static Content`),Tl(),qi$2(263,`a`,50),Mw(264,`#`),Tl()(),qi$2(265,`p`),Mw(266,`We've found `),qi$2(267,`a`,51),Mw(268,`a GitHub repository`),Tl(),Mw(269,` that satisfies all 4 conditions. Well, in fact, it generates a static website, so condition 4 is not
just simulated. In contrast, `),qi$2(270,`a`,52),Mw(271,`this GitHub repository`),Tl(),Mw(272,` uses Laravel's Blade template and a MySQL database to
`),qi$2(273,`a`,53),Mw(274,`generate posts`),Tl(),Mw(275,` on the server-side. It means that every time you access a post,
your web browser makes a request to the server and the server will get the content from the database and render HTML (BTW, `),qi$2(276,`a`,54),Mw(277,`here`),Tl(),Mw(278,` is a version adapted for OpenShift.) Even if Blade caches the result, every request creates a connection to the database (We do not consider `),qi$2(279,`a`,55),Mw(280,`Laravel Octane`),Tl(),Mw(281,` here.) Static websites do not need a database and the content is cached on the user's side. So, the user makes less requests to the server.`),Tl(),qi$2(282,`p`),Mw(283,`How do we simulate static content? All posts from this blog are Angular compiled JavaScript files that are cached on the user's side.`),Tl(),qi$2(284,`h2`,56)(285,`span`),Mw(286,`Markdown Extension`),Tl(),qi$2(287,`a`,57),Mw(288,`#`),Tl()(),qi$2(289,`p`),Mw(290,`While transforming a markdown file into an Angular component and module, we implemented a markdown extension that will create a navigation menue from all heading lines of a markdown file. In addition, we implemented the posibility to include a code block with a special name `),qi$2(291,`code`),Mw(292,`angular-template-block`),Tl(),Mw(293,` to be iterpreded as a part of the Angular template. The code block below, will be included in the generated Angular component as a parth of the template.`),Tl(),qi$2(294,`pre`,58)(295,`code`)(296,`span`,59),Mw(297,`<`),qi$2(298,`span`,60),Mw(299,`div`),Tl(),Mw(300,` `),qi$2(301,`span`,61),Mw(302,`class`),Tl(),Mw(303,`=`),qi$2(304,`span`,35),Mw(305,`"pic-plus"`),Tl(),Mw(306,`>`),Tl(),Mw(307,`
  `),qi$2(308,`span`,59),Mw(309,`<`),qi$2(310,`span`,60),Mw(311,`span`),Tl(),Mw(312,` `),qi$2(313,`span`,61),Mw(314,`nz-icon`),Tl(),Mw(315,` `),qi$2(316,`span`,61),Mw(317,`nzType`),Tl(),Mw(318,`=`),qi$2(319,`span`,35),Mw(320,`"custom:zorro"`),Tl(),Mw(321,` `),qi$2(322,`span`,61),Mw(323,`nzWidth`),Tl(),Mw(324,`=`),qi$2(325,`span`,35),Mw(326,`"180px"`),Tl(),Mw(327,` `),qi$2(328,`span`,61),Mw(329,`nzHeight`),Tl(),Mw(330,`=`),qi$2(331,`span`,35),Mw(332,`"180px"`),Tl(),Mw(333,`>`),Tl(),qi$2(334,`span`,59),Mw(335,`</`),qi$2(336,`span`,60),Mw(337,`span`),Tl(),Mw(338,`>`),Tl(),Mw(339,`
  `),qi$2(340,`span`,59),Mw(341,`<`),qi$2(342,`span`,60),Mw(343,`span`),Tl(),Mw(344,`>`),Tl(),Mw(345,`+`),qi$2(346,`span`,59),Mw(347,`</`),qi$2(348,`span`,60),Mw(349,`span`),Tl(),Mw(350,`>`),Tl(),Mw(351,`
  `),qi$2(352,`span`,59),Mw(353,`<`),qi$2(354,`span`,60),Mw(355,`span`),Tl(),Mw(356,` `),qi$2(357,`span`,61),Mw(358,`nz-icon`),Tl(),Mw(359,` `),qi$2(360,`span`,61),Mw(361,`nzType`),Tl(),Mw(362,`=`),qi$2(363,`span`,35),Mw(364,`"custom:angular"`),Tl(),Mw(365,` `),qi$2(366,`span`,61),Mw(367,`nzWidth`),Tl(),Mw(368,`=`),qi$2(369,`span`,35),Mw(370,`"180px"`),Tl(),Mw(371,` `),qi$2(372,`span`,61),Mw(373,`nzHeight`),Tl(),Mw(374,`=`),qi$2(375,`span`,35),Mw(376,`"180px"`),Tl(),Mw(377,`>`),Tl(),qi$2(378,`span`,59),Mw(379,`</`),qi$2(380,`span`,60),Mw(381,`span`),Tl(),Mw(382,`>`),Tl(),Mw(383,`
  `),qi$2(384,`span`,59),Mw(385,`<`),qi$2(386,`span`,60),Mw(387,`span`),Tl(),Mw(388,`>`),Tl(),Mw(389,`=`),qi$2(390,`span`,59),Mw(391,`</`),qi$2(392,`span`,60),Mw(393,`span`),Tl(),Mw(394,`>`),Tl(),Mw(395,`
  `),qi$2(396,`span`,59),Mw(397,`<`),qi$2(398,`span`,60),Mw(399,`span`),Tl(),Mw(400,`
    `),qi$2(401,`span`,61),Mw(402,`nz-icon`),Tl(),Mw(403,`
    `),qi$2(404,`span`,61),Mw(405,`nzType`),Tl(),Mw(406,`=`),qi$2(407,`span`,35),Mw(408,`"custom:ng-zorro"`),Tl(),Mw(409,`
    `),qi$2(410,`span`,61),Mw(411,`nzWidth`),Tl(),Mw(412,`=`),qi$2(413,`span`,35),Mw(414,`"180px"`),Tl(),Mw(415,`
    `),qi$2(416,`span`,61),Mw(417,`nzHeight`),Tl(),Mw(418,`=`),qi$2(419,`span`,35),Mw(420,`"180px"`),Tl(),Mw(421,`
  >`),Tl(),qi$2(422,`span`,59),Mw(423,`</`),qi$2(424,`span`,60),Mw(425,`span`),Tl(),Mw(426,`>`),Tl(),Mw(427,`
`),qi$2(428,`span`,59),Mw(429,`</`),qi$2(430,`span`,60),Mw(431,`div`),Tl(),Mw(432,`>`),Tl()()(),qi$2(433,`p`),Mw(434,`For more complex markdown format extensions, please visit `),qi$2(435,`a`,62),Mw(436,`MDX 2!`),Tl()(),qi$2(437,`h2`,63)(438,`span`),Mw(439,`Blog Listing`),Tl(),qi$2(440,`a`,64),Mw(441,`#`),Tl()(),qi$2(442,`p`),Mw(443,`Client-side listing api is based on `),qi$2(444,`a`,65),Mw(445,`this GitHub repository`),Tl(),Mw(446,` and server-side is similar to `),qi$2(447,`a`,66),Mw(448,`this GitHub repository`),Tl()(),qi$2(449,`p`),Mw(450,`As you can see, we use a lot of `),qi$2(451,`code`),Mw(452,`ng-zorro-antd`),Tl(),Mw(453,` Angular components:`),Tl(),qi$2(454,`ul`)(455,`li`)(456,`code`),Mw(457,`nz-list`),Tl(),Mw(458,`, `),qi$2(459,`code`),Mw(460,`nz-pagination`),Tl(),Mw(461,`, `),qi$2(462,`code`),Mw(463,`nz-image`),Tl(),Mw(464,`, `),qi$2(465,`code`),Mw(466,`nz-transfer`),Tl(),Mw(467,`, `),qi$2(468,`code`),Mw(469,`nz-select`),Tl(),Mw(470,`, `),qi$2(471,`code`),Mw(472,`nz-table`),Tl(),Mw(473,`, and more`),Tl(),qi$2(474,`li`)(475,`code`),Mw(476,`NzDrawerService`),Tl(),Mw(477,`, `),qi$2(478,`code`),Mw(479,`NzDrawerRef`),Tl()()()()()()),o&2&&(IE(),tg(`nzBordered`,!0),IE(6),tg(`nzOffsetTop`,45),IE(6),Ag(`ngModel`,r.enableNavigation),tg(`ngModelOptions`,Hw(7,Ai)),lD(),IE(),tg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae,bt,re,Bt,Et,zg,cd,cr$1,ir,Fa,I9,O9,Vn,qi$1,_n,ji$1,Jo,Za,El,ga$1,ma$1,So,Ve,pe,wu],encapsulation:2})}return a})();var zi=()=>({standalone:!0});function Ci(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,95),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,96),ng(3,`nz-icon`,97),Tl()(),Sl()}}function bi(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,95),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,96),Mw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var lt=110;var Fn=(()=>{class a{destroyRef=_(ae$1);router=_(Te$1);#e=_(q0);injector=_(se);viewPort=_(O7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){sV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-lt>640?this.width.set(640):this.width.set(this.windowWidth()-lt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-lt>640?this.width.set(640):this.width.set(i-lt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(iV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`nz-blog-test-readme`]],features:[Vw([{provide:lt$1,useValue:{disableCookies:!0,loadApi:!1}}])],decls:440,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-5a486561`,`nzTitle`,`MyTested Library Out of The Box`],[`nzHref`,`#h-dacb62dd`,`nzTitle`,`Basic API Controller Testing`],[`nzHref`,`#h-3505cd43`,`nzTitle`,`Data Validation with FluentValidation Library`],[`nzHref`,`#h-adda9d19`,`nzTitle`,`Exception Testing`],[`nzHref`,`#h-7aa876f0`,`nzTitle`,`Identity Controller Testing`],[`nzHref`,`#h-dde4549b`,`nzTitle`,`Advanced Testing with MyTested Library`],[`nzHref`,`#h-ff4316b6`,`nzTitle`,`MyTested Library Limitations`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241009-test-readme.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-5a486561`],[`onclick`,`window.location.hash = 'h-5a486561'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-csharp`],[1,`hljs-keyword`],[1,`hljs-title`],[1,`hljs-meta`],[1,`hljs-function`],[1,`hljs-string`],[`id`,`h-dacb62dd`],[`onclick`,`window.location.hash = 'h-dacb62dd'`,1,`anchor`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Endpoints/TodoLists.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/EdiWang/Moonglade/blob/master/src/Moonglade.Web/Controllers/TagsController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Tags/TagsController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/TagsController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Web/Web.csproj`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/specification.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-3505cd43`],[`onclick`,`window.location.hash = 'h-3505cd43'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Articles/EditTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Application.UnitTests/Common/Exceptions/ValidationExceptionTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/tests/Web.AcceptanceTests/StepDefinitions/LoginStepDefinitions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MoongladePure/blob/main/tests/Moonglade.Tests/IntegrationTests.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Common/AuthorCommandValidator.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Users/Create.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/blob/main/src/Application/TodoLists/Commands/UpdateTodoList/UpdateTodoListCommandValidator.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-json`],[1,`hljs-punctuation`],[1,`hljs-attr`],[`id`,`h-adda9d19`],[`onclick`,`window.location.hash = 'h-adda9d19'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Domain/Common/BaseDomainException.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Middleware/ValidationExceptionHandlerMiddleware.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-7aa876f0`],[`onclick`,`window.location.hash = 'h-7aa876f0'`,1,`anchor`],[`href`,`https://cioina.azurewebsites.net/articles/dotnet-core-testing#h-6278f57b`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-dde4549b`],[`onclick`,`window.location.hash = 'h-dde4549b'`,1,`anchor`],[`href`,`https://cioina.azurewebsites.net/articles/ratelimit-middleware`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-ff4316b6`],[`onclick`,`window.location.hash = 'h-ff4316b6'`,1,`anchor`],[`href`,`https://github.com/kalintsenkov/BookStore/tree/main/src/Server`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/gothinkster/aspnetcore-realworld-example-app/tree/master/src/Conduit`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev/CleanArchitecture/tree/main/src`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/ivaylokenov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ardalis`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanprodan`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jbogard`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/BenMorris`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(qi$2(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Zh(5,Ci,4,0,`ng-container`,5)(6,bi,4,0,`ng-container`,5),Tl()()(),qi$2(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),cg(`click`,function(){return r.scrollTop()}),Mw(11,`Jump to top`),Tl()(),qi$2(12,`div`,3)(13,`nz-switch`,9),aD(),Rg(`ngModelChange`,function(g){return Aw(r.enableNavigation,g)||(r.enableNavigation=g),g}),cg(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),qi$2(14,`nz-anchor`,10),cg(`nzClick`,function(g){return r.goLink(g)}),ng(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19),Tl()(),qi$2(24,`span`,20),Mw(25,` MyTested Test Project Example`),ng(26,`span`,21)(27,`span`,22),qi$2(28,`a`,23),ng(29,`nz-icon`,24),Tl()(),qi$2(30,`article`,25)(31,`h2`,26)(32,`span`),Mw(33,`Introduction`),Tl(),qi$2(34,`a`,27),Mw(35,`#`),Tl()(),qi$2(36,`p`),Mw(37,`The compiled code of our .NET Core 10 application is on `),qi$2(38,`a`,28),Mw(39,`our GitHub repository`),Tl(),Mw(40,`. For this test project, which is part our application, we will use `),qi$2(41,`a`,29),Mw(42,`MyTested`),Tl(),Mw(43,` - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 10 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 10 project is based on `),qi$2(44,`a`,30),Mw(45,`BookStore`),Tl(),Mw(46,` repository and adapted to work with MyTested library.`),Tl(),qi$2(47,`h2`,31)(48,`span`),Mw(49,`MyTested Library Out of The Box`),Tl(),qi$2(50,`a`,32),Mw(51,`#`),Tl()(),qi$2(52,`p`),Mw(53,`I found out about MyTested for the first time from `),qi$2(54,`a`,33),Mw(55,`BlazorShop`),Tl(),Mw(56,` repository. At the same time, I found out about `),qi$2(57,`code`),Mw(58,`Jwt Authentication`),Tl(),Mw(59,` implementation from same `),qi$2(60,`a`,34),Mw(61,`BlazorShop`),Tl(),Mw(62,` repository and from `),qi$2(63,`a`,35),Mw(64,`aspnetcore-realworld-example`),Tl(),Mw(65,` repository. Both `),qi$2(66,`code`),Mw(67,`Jwt Authentication`),Tl(),Mw(68,` implementations did not work with original `),qi$2(69,`a`,29),Mw(70,`MyTested`),Tl(),Mw(71,` library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was only able to add some small pieces of code to make MyTested and my own `),qi$2(72,`code`),Mw(73,`Jwt Authentication`),Tl(),Mw(74,` implementation work and not to break any original MyTested tests. One interesting idea of JWT token implementation together with refresh token is on `),qi$2(75,`a`,36),Mw(76,`EdiWang`),Tl(),Mw(77,` GitHub repository.
But, what MyTested can do out of the box? The best answer is in `),qi$2(78,`a`,37),Mw(79,`MusicStore`),Tl(),Mw(80,` testing project. For the API controller, `),qi$2(81,`a`,38),Mw(82,`here`),Tl(),Mw(83,` is an example:`),Tl(),qi$2(84,`pre`,39)(85,`code`)(86,`span`,40),Mw(87,`using`),Tl(),Mw(88,` BlogAngular.Application.Common.Version;
`),qi$2(89,`span`,40),Mw(90,`using`),Tl(),Mw(91,` BlogAngular.Web.Features;
`),qi$2(92,`span`,40),Mw(93,`using`),Tl(),Mw(94,` MyTested.AspNetCore.Mvc;
`),qi$2(95,`span`,40),Mw(96,`using`),Tl(),Mw(97,` Xunit;

`),qi$2(98,`span`,40),Mw(99,`namespace`),Tl(),Mw(100,` `),qi$2(101,`span`,41),Mw(102,`BlogAngular.Test.Routing`),Tl(),Mw(103,`
{
    `),qi$2(104,`span`,40),Mw(105,`public`),Tl(),Mw(106,` `),qi$2(107,`span`,40),Mw(108,`class`),Tl(),Mw(109,` `),qi$2(110,`span`,41),Mw(111,`FrontEndRouteTest`),Tl(),Mw(112,`
    {
        [`),qi$2(113,`span`,42),Mw(114,`Fact`),Tl(),Mw(115,`]
        `),qi$2(116,`span`,43)(117,`span`,40),Mw(118,`public`),Tl(),Mw(119,` `),qi$2(120,`span`,40),Mw(121,`void`),Tl(),Mw(122,` `),qi$2(123,`span`,41),Mw(124,`VersionShouldBeRouted`),Tl(),Mw(125,`()`),Tl(),Mw(126,`
        => MyMvc
        .Pipeline()
        .ShouldMap(request => request
            .WithMethod(HttpMethod.Get)
            .WithLocation(`),qi$2(127,`span`,44),Mw(128,`"api/v1.0/version"`),Tl(),Mw(129,`))
        .To<VersionController>(c => c.Index())
        .Which()
        .ShouldReturn()
        .ActionResult(result => result.Result(`),qi$2(130,`span`,40),Mw(131,`new`),Tl(),Mw(132,` VersionResponseEnvelope
        {
            VersionJson = `),qi$2(133,`span`,40),Mw(134,`new`),Tl(),Mw(135,` VersionResponseModel()
        }));
    }
}`),Tl()(),qi$2(136,`h2`,45)(137,`span`),Mw(138,`Basic API Controller Testing`),Tl(),qi$2(139,`a`,46),Mw(140,`#`),Tl()(),qi$2(141,`p`),Mw(142,`There are different ways to define API controllers: `),qi$2(143,`a`,47),Mw(144,`CleanArchitecture`),Tl(),Mw(145,`, `),qi$2(146,`a`,48),Mw(147,`Moonglade`),Tl(),Mw(148,`, `),qi$2(149,`a`,49),Mw(150,`Conduit`),Tl(),Mw(151,`, and `),qi$2(152,`a`,50),Mw(153,`this one`),Tl(),Mw(154,`. The main reason we implemented API control in a certain way is `),qi$2(155,`a`,51),Mw(156,`NSwag.AspNetCore and NSwag.MSBuild`),Tl(),Mw(157,` which we use just in Debug mode to generate `),qi$2(158,`a`,52),Mw(159,`specification.json`),Tl(),Mw(160,`. `),qi$2(161,`code`),Mw(162,`NSwag`),Tl(),Mw(163,` tool is \u201Cvery sensitive\u201D to how API controllers look.
By basic API controller testing, we mean at least one test per CRUD concept.
`),qi$2(164,`a`,53),Mw(165,`Here`),Tl(),Mw(166,` is an example:`),Tl(),qi$2(167,`ul`)(168,`li`)(169,`code`),Mw(170,`Create_tag_should_return_success_with_data`),Tl(),Mw(171,`- Create`),Tl(),qi$2(172,`li`)(173,`code`),Mw(174,`Listing_tags_without_url_parameters_should_return_success_with_all_tags`),Tl(),Mw(175,`- Read`),Tl(),qi$2(176,`li`)(177,`code`),Mw(178,`Edit_tag_should_return_success_with_data`),Tl(),Mw(179,`- Update`),Tl(),qi$2(180,`li`)(181,`code`),Mw(182,`Delete_tag_should_return_success_with_tag_id`),Tl(),Mw(183,` - Delete`),Tl()(),qi$2(184,`h2`,54)(185,`span`),Mw(186,`Data Validation with FluentValidation Library`),Tl(),qi$2(187,`a`,55),Mw(188,`#`),Tl()(),qi$2(189,`p`),Mw(190,`A particular change we made to MyTested is adding the possibility of testing data validation. In fact, now, we can implement all following tests: `),qi$2(191,`a`,56),Mw(192,`BookStore`),Tl(),Mw(193,`, `),qi$2(194,`a`,57),Mw(195,`RealWorld`),Tl(),Mw(196,`, `),qi$2(197,`a`,58),Mw(198,`CleanArchitecture1`),Tl(),Mw(199,`, and `),qi$2(200,`a`,59),Mw(201,`CleanArchitecture2`),Tl(),Mw(202,`, `),qi$2(203,`a`,60),Mw(204,`MoongladePure`),Tl(),Mw(205,` in a set of beautiful tests. `),qi$2(206,`a`,53),Mw(207,`Here`),Tl(),Mw(208,` are examples of testing data validation using modified version of MyTested library:`),Tl(),qi$2(209,`ul`)(210,`li`)(211,`code`),Mw(212,`Create_tag_with_one_char_should_return_validation_error`),Tl(),Mw(213,`- Creates tag name length bellow allowed by database constraint`),Tl(),qi$2(214,`li`)(215,`code`),Mw(216,`Create_tag_with_max_chars_should_return_validation_error`),Tl(),Mw(217,`- Creates tag name length above allowed by database constraint`),Tl(),qi$2(218,`li`)(219,`code`),Mw(220,`Edit_tag_with_one_char_should_return_validation_error`),Tl(),Mw(221,`- Updates tag name length bellow allowed by database constraint`),Tl(),qi$2(222,`li`)(223,`code`),Mw(224,`Edit_tag_with_max_chars_should_return_validation_error`),Tl(),Mw(225,` - Updates tag name length above allowed by database constraint`),Tl()(),qi$2(226,`p`),Mw(227,`Our validation implementation is based mostly on `),qi$2(228,`a`,61),Mw(229,`BookStore`),Tl(),Mw(230,`. One useful technique to validate unique data comes from `),qi$2(231,`a`,62),Mw(232,`Conduit`),Tl(),Mw(233,` and `),qi$2(234,`a`,63),Mw(235,`CleanArchitecture`),Tl(),Mw(236,`. Following are `),qi$2(237,`a`,53),Mw(238,`three tests`),Tl(),Mw(239,` with the constraint that the tag name is unique:`),Tl(),qi$2(240,`ul`)(241,`li`)(242,`code`),Mw(243,`Create_tag_with_same_name_should_fail_with_validation_error`),Tl(),Mw(244,`- Creates tag with name when the name has already taken.`),Tl(),qi$2(245,`li`)(246,`code`),Mw(247,`Edit_tag_with_same_name_should_fail_with_validation_error`),Tl(),Mw(248,`- Updates tag name when the name has already taken.`),Tl(),qi$2(249,`li`)(250,`code`),Mw(251,`Edit_same_tag_with_same_name_should_return_success_with_data`),Tl(),Mw(252,`- Updates tag name when the name did not change.`),Tl()(),qi$2(253,`p`),Mw(254,`In `),qi$2(255,`a`,28),Mw(256,`our application`),Tl(),Mw(257,`, any `),qi$2(258,`code`),Mw(259,`MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException`),Tl(),Mw(260,` will return 422 with JSON string similar to this:`),Tl(),qi$2(261,`pre`,64)(262,`code`)(263,`span`,65),Mw(264,`{`),Tl(),Mw(265,`
   `),qi$2(266,`span`,66),Mw(267,`"TagJson.Title"`),Tl(),qi$2(268,`span`,65),Mw(269,`:`),Tl(),Mw(270,`  `),qi$2(271,`span`,65),Mw(272,`[`),Tl(),qi$2(273,`span`,44),Mw(274,`"The length of 'Tag Json Title' must be 420 characters or fewer. You entered 421 characters."`),Tl(),qi$2(275,`span`,65),Mw(276,`]`),Tl(),Mw(277,`
`),qi$2(278,`span`,65),Mw(279,`}`),Tl()()(),qi$2(280,`p`),Mw(281,`That represents a standard validation message from `),qi$2(282,`code`),Mw(283,`FluentValidation`),Tl(),Mw(284,` library which can be customized.`),Tl(),qi$2(285,`h2`,67)(286,`span`),Mw(287,`Exception Testing`),Tl(),qi$2(288,`a`,68),Mw(289,`#`),Tl()(),qi$2(290,`p`),Mw(291,`In our application, we use `),qi$2(292,`code`),Mw(293,`Ardalis.GuardClauses.NotFoundException`),Tl(),Mw(294,` instead of `),qi$2(295,`a`,69),Mw(296,`BaseDomainException`),Tl(),Mw(297,`. In addition, we use `),qi$2(298,`a`,70),Mw(299,`ValidationExceptionHandlerMiddleware`),Tl(),Mw(300,` to intercept all validation exceptions that return `),qi$2(301,`code`),Mw(302,`HttpStatusCode.UnprocessableEntity`),Tl(),Mw(303,`(422). Unfortunately, MyTested does not work with the middleware concept. But, we can use `),qi$2(304,`code`),Mw(305,`MyTested.AspNetCore.Mvc.Exceptions.InvocationAssertionException`),Tl(),Mw(306,` and `),qi$2(307,`a`,71),Mw(308,`FromNotFoundException`),Tl(),Mw(309,` to test against two common exceptions:`),Tl(),qi$2(310,`ul`)(311,`li`)(312,`code`),Mw(313,`Edit_tag_with_wrong_id_should_fail`),Tl(),Mw(314,`- The tag with the specified id does not exist in the database.`),Tl(),qi$2(315,`li`)(316,`code`),Mw(317,`Update_user_with_malformed_data_should_fail`),Tl(),Mw(318,`- The webserver cannot create the object from the json data request.`),Tl()(),qi$2(319,`h2`,72)(320,`span`),Mw(321,`Identity Controller Testing`),Tl(),qi$2(322,`a`,73),Mw(323,`#`),Tl()(),qi$2(324,`p`),Mw(325,`When it comes to JWT authorization, a big amount of testing consists in testing for invalid JWT tokens:`),Tl(),qi$2(326,`ul`)(327,`li`)(328,`code`),Mw(329,`Update_user_without_authorization_header_should_fail`),Tl(),Mw(330,`- tests when JWT token is absent`),Tl(),qi$2(331,`li`)(332,`code`),Mw(333,`Update_user_with_altered_authorization_header_should_fail`),Tl(),Mw(334,`- tests when to a valid JWT token is added one character`),Tl(),qi$2(335,`li`)(336,`code`),Mw(337,`Update_user_with_malformed_authorization_header_should_fail`),Tl(),Mw(338,`- tests when JWT token has format `),qi$2(339,`code`),Mw(340,`a.b`),Tl()(),qi$2(341,`li`)(342,`code`),Mw(343,`Update_user_with_fake_authorization_header_should_fail`),Tl(),Mw(344,`- tests when JWT token has correct format `),qi$2(345,`code`),Mw(346,`a.b.c`),Tl(),Mw(347,` but random characters`),Tl(),qi$2(348,`li`)(349,`code`),Mw(350,`Update_user_with_incorrect_authorization_header_key_should_fail`),Tl(),Mw(351,`- tests when JWT token is valid but was encrypted with a different key`),Tl(),qi$2(352,`li`)(353,`code`),Mw(354,`Update_user_with_expired_authorization_header_should_fail`),Tl(),Mw(355,`- tests when a valid JWT token was expired`),Tl()(),qi$2(356,`p`),Mw(357,`These are the most common case scenarios to test against an invalid JWT token and must be done just for one controller!
MyTested cannot catch 401 error code directly. We found a workaround by using `),qi$2(358,`a`,71),Mw(359,`HeaderAuthorizationException`),Tl(),Mw(360,`
The full source code for the .NET Core `),qi$2(361,`code`),Mw(362,`IdentityService`),Tl(),Mw(363,` implementation can be found `),qi$2(364,`a`,74),Mw(365,`here`),Tl()(),qi$2(366,`h2`,75)(367,`span`),Mw(368,`Advanced Testing with MyTested Library`),Tl(),qi$2(369,`a`,76),Mw(370,`#`),Tl()(),qi$2(371,`p`),Mw(372,`In `),qi$2(373,`a`,77),Mw(374,`"Implementing JWT Token Refresh Concept for .NET Core 10"`),Tl(),Mw(375,`, we show an example of RateLimitMiddleware and try some advanced testing with shared `),qi$2(376,`code`),Mw(377,`MemoryCache`),Tl(),Mw(378,`: `),qi$2(379,`code`),Mw(380,`GetTagsWithRateLimitMiddleware`),Tl(),Mw(381,` and `),qi$2(382,`code`),Mw(383,`GetAllWithRateLimitMiddleware`),Tl(),Mw(384,` from `),qi$2(385,`a`,78),Mw(386,`StaticTestData.cs`),Tl(),Mw(387,`).`),Tl(),qi$2(388,`h2`,79)(389,`span`),Mw(390,`MyTested Library Limitations`),Tl(),qi$2(391,`a`,80),Mw(392,`#`),Tl()(),qi$2(393,`p`),Mw(394,`We applied modified version of MyTested library to three popular GitHub repositories: `),qi$2(395,`a`,81),Mw(396,`BookStore`),Tl(),Mw(397,`, `),qi$2(398,`a`,82),Mw(399,`RealWorld`),Tl(),Mw(400,`, and `),qi$2(401,`a`,83),Mw(402,`CleanArchitecture`),Tl(),Mw(403,`. Our quick investigation shows that BookStore can be configured to work 100% with MyTested while RealWorld works only with `),qi$2(404,`a`,49),Mw(405,`anonymous controllers`),Tl(),Mw(406,` and CleanArchitecture does not work at all.
The full test project source code can be found on `),qi$2(407,`a`,84),Mw(408,`our GitHub repository`),Tl(),Mw(409,`.`),Tl(),qi$2(410,`h2`,85)(411,`span`),Mw(412,`Credits`),Tl(),qi$2(413,`a`,86),Mw(414,`#`),Tl()(),qi$2(415,`ul`)(416,`li`)(417,`a`,87),Mw(418,`Ivaylo Kenov`),Tl()(),qi$2(419,`li`)(420,`a`,88),Mw(421,`Kalin Tsenkov`),Tl()(),qi$2(422,`li`)(423,`a`,89),Mw(424,`Steve Smith`),Tl()(),qi$2(425,`li`)(426,`a`,90),Mw(427,`Jason Taylor`),Tl()(),qi$2(428,`li`)(429,`a`,91),Mw(430,`Stefan Prodan`),Tl()(),qi$2(431,`li`)(432,`a`,92),Mw(433,`Mark Cilia Vincenti`),Tl()(),qi$2(434,`li`)(435,`a`,93),Mw(436,`Jimmy Bogard`),Tl()(),qi$2(437,`li`)(438,`a`,94),Mw(439,`Ben Morris`),Tl()()()()()()),o&2&&(IE(),tg(`nzBordered`,!0),IE(6),tg(`nzOffsetTop`,45),IE(6),Ag(`ngModel`,r.enableNavigation),tg(`ngModelOptions`,Hw(7,zi)),lD(),IE(),tg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae,bt,re,Bt,Et,zg,cd,cr$1,ir,Fa,I9,O9,Vn,qi$1,_n,ji$1,Jo,Za,El,ga$1,ma$1,So,Ve,pe,wu],encapsulation:2})}return a})();var yi=()=>({standalone:!0});function _i(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,86),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,87),ng(3,`nz-icon`,88),Tl()(),Sl()}}function Ti(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,86),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,87),Mw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var st=110;var Hn=(()=>{class a{destroyRef=_(ae$1);router=_(Te$1);#e=_(q0);injector=_(se);viewPort=_(O7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){sV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-st>640?this.width.set(640):this.width.set(this.windowWidth()-st-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-st>640?this.width.set(640):this.width.set(i-st-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(iV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`nz-blog-ratelimit-middleware`]],features:[Vw([{provide:lt$1,useValue:{disableCookies:!0,loadApi:!1}}])],decls:1660,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-ce31d768`,`nzTitle`,`Use Case Scenario`],[`nzHref`,`#h-c73a370e`,`nzTitle`,`JWT Token Refresh Concept`],[`nzHref`,`#h-2ee872d2`,`nzTitle`,`JWT Token Refresh Implementation`],[`nzHref`,`#h-dabba405`,`nzTitle`,`Modified RateLimitMiddleware`],[`nzHref`,`#h-bd1baabd`,`nzTitle`,`Testing of RateLimitMiddleware With MyTested Library`],[`nzHref`,`#h-009deb37`,`nzTitle`,`Test Settings`],[`nzHref`,`#h-fb5fe24a`,`nzTitle`,`Proof of Concept`],[`nzHref`,`#h-6f8b794f`,`nzTitle`,`Conclusion`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241018-ratelimit-middleware.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/realworld-apps/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov/BookStore`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-ce31d768`],[`onclick`,`window.location.hash = 'h-ce31d768'`,1,`anchor`],[`id`,`h-c73a370e`],[`onclick`,`window.location.hash = 'h-c73a370e'`,1,`anchor`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-csharp`],[1,`hljs-meta`],[1,`hljs-keyword`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/blob/main/bin/Release/net10.0/appsettings.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-2ee872d2`],[`onclick`,`window.location.hash = 'h-2ee872d2'`,1,`anchor`],[`href`,`https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`hljs-literal`],[1,`hljs-built_in`],[1,`hljs-string`],[`href`,`https://github.com/stefanprodan/AspNetCoreRateLimit/blob/master/src/AspNetCoreRateLimit/Middleware/RateLimitMiddleware.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-dabba405`],[`onclick`,`window.location.hash = 'h-dabba405'`,1,`anchor`],[1,`hljs-title`],[1,`hljs-function`],[1,`hljs-params`],[1,`hljs-comment`],[1,`hljs-subst`],[1,`hljs-number`],[`id`,`h-bd1baabd`],[`onclick`,`window.location.hash = 'h-bd1baabd'`,1,`anchor`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/testsettings.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test/RateLimit`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/RateLimit/AsyncKeyedLockTest.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti/AsyncKeyedLock`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/EdiWang/Edi.CacheAside.InMemory/blob/master/src/Edi.CacheAside.InMemory/MemoryCacheAside.cs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-009deb37`],[`onclick`,`window.location.hash = 'h-009deb37'`,1,`anchor`],[1,`language-json`],[1,`hljs-punctuation`],[1,`hljs-attr`],[`id`,`h-fb5fe24a`],[`onclick`,`window.location.hash = 'h-fb5fe24a'`,1,`anchor`],[`id`,`h-6f8b794f`],[`onclick`,`window.location.hash = 'h-6f8b794f'`,1,`anchor`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/ivaylokenov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/kalintsenkov`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ardalis`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jasontaylordev`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanprodan`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/MarkCiliaVincenti`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/jbogard`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/BenMorris`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(qi$2(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Zh(5,_i,4,0,`ng-container`,5)(6,Ti,4,0,`ng-container`,5),Tl()()(),qi$2(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),cg(`click`,function(){return r.scrollTop()}),Mw(11,`Jump to top`),Tl()(),qi$2(12,`div`,3)(13,`nz-switch`,9),aD(),Rg(`ngModelChange`,function(g){return Aw(r.enableNavigation,g)||(r.enableNavigation=g),g}),cg(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),qi$2(14,`nz-anchor`,10),cg(`nzClick`,function(g){return r.goLink(g)}),ng(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19)(24,`nz-link`,20),Tl()(),qi$2(25,`span`,21),Mw(26,` Implementing JWT Token Refresh Concept for .NET Core 10`),ng(27,`span`,22)(28,`span`,23),qi$2(29,`a`,24),ng(30,`nz-icon`,25),Tl()(),qi$2(31,`article`,26)(32,`blockquote`,27)(33,`p`)(34,`strong`),Mw(35,`The concept of Bearer Header Authorization based on JWT token implementation provided by .NET Core 10 is the same as in .NET Core 8. `),Tl()()(),qi$2(36,`h2`,28)(37,`span`),Mw(38,`Introduction`),Tl(),qi$2(39,`a`,29),Mw(40,`#`),Tl()(),qi$2(41,`p`),Mw(42,`The compiled code of our .NET Core 10 application is on `),qi$2(43,`a`,30),Mw(44,`our GitHub repository`),Tl(),Mw(45,`. For testing purpose, we will use `),qi$2(46,`a`,31),Mw(47,`MyTested`),Tl(),Mw(48,` - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 10 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our project is based on `),qi$2(49,`a`,32),Mw(50,`Conduit`),Tl(),Mw(51,` and `),qi$2(52,`a`,33),Mw(53,`BookStore`),Tl(),Mw(54,` repository and adapted to work with MyTested library. MyTested was engineered to work without middleware which is an advantage for many cases. However, the scope of this article was to find a way to tests middleware with MyTested. The full test project source code can be found on `),qi$2(55,`a`,34),Mw(56,`our another GitHub repository`),Tl(),Mw(57,`.`),Tl(),qi$2(58,`h2`,35)(59,`span`),Mw(60,`Use Case Scenario`),Tl(),qi$2(61,`a`,36),Mw(62,`#`),Tl()(),qi$2(63,`p`),Mw(64,`The user signs in and gets a JWT token valid for 30 minutes. The user opens a webpage to create/edit an article. It takes 35 minutes to finish the work. The user clicks on submit button. A modal form pops up and asks the user to refresh JWT token by entering a password. The user gets a new JWT token valid for next 30 minutes. Finally, the user clicks submit button and saves the work.`),Tl(),qi$2(65,`h2`,37)(66,`span`),Mw(67,`JWT Token Refresh Concept`),Tl(),qi$2(68,`a`,38),Mw(69,`#`),Tl()(),qi$2(70,`p`),Mw(71,`First, we need to know how basic native JWT token implemented in .NET Core 10 works. Usually, there are `),qi$2(72,`a`,39),Mw(73,`two types of API endpoints: public and private`),Tl(),Mw(74,`. A private API endpoint look like this:`),Tl(),qi$2(75,`pre`,40)(76,`code`),Mw(77,`[`),qi$2(78,`span`,41),Mw(79,`HttpPut`),Tl(),Mw(80,`]
[`),qi$2(81,`span`,41),Mw(82,`Route(nameof(Update))`),Tl(),Mw(83,`]
[`),qi$2(84,`span`,41),Mw(85,`Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)`),Tl(),Mw(86,`]
`),qi$2(87,`span`,42),Mw(88,`public`),Tl(),Mw(89,` `),qi$2(90,`span`,42),Mw(91,`async`),Tl(),Mw(92,` Task<ActionResult<UserResponseEnvelope>> Update(
    UserUpdateCommand command)
    => `),qi$2(93,`span`,42),Mw(94,`await`),Tl(),Mw(95,` `),qi$2(96,`span`,42),Mw(97,`this`),Tl(),Mw(98,`.Send(command);`),Tl()(),qi$2(99,`p`),Mw(100,`The user signs in and gets a JWT token which is saved in localStorage. Then, any request to the server includes obtained JWT token in the Authorization header. The server won’t use the token on public endpoints. It means that the server won’t try to decrypt the token. On the private endpoints, the server will try to decrypt the token, apply `),qi$2(101,`code`),Mw(102,`BearerPolicy`),Tl(),Mw(103,`, and match the role from the token to `),qi$2(104,`code`),Mw(105,`AdministratorRoleName`),Tl(),Mw(106,` list. At this point, the basic native .NET Core 10 implementation does not care if the user form the JWT token exists in the database, and it does not care if the role exists in the database ether. However, the server checks if the token expired and returns a 401 error if it’s the case. With all this in mind, we implemented the concept of JWT token refresh period called PRefresh. Let’s call the token’s valid period PValid. Then, `),qi$2(107,`code`),Mw(108,`SecurityTokenDescriptorExpiresInMinutes`),Tl(),Mw(109,` from `),qi$2(110,`a`,43),Mw(111,`appsettings.json`),Tl(),Mw(112,` = PValid + PRefresh and `),qi$2(113,`code`),Mw(114,`SecurityTokenRefreshRate`),Tl(),Mw(115,` = PRefresh/(PValid + PRefresh). So, if `),qi$2(116,`code`),Mw(117,`SecurityTokenDescriptorExpiresInMinutes`),Tl(),Mw(118,`= 60 minutes and `),qi$2(119,`code`),Mw(120,`SecurityTokenRefreshRate`),Tl(),Mw(121,` = 1/2, it means that PValid = 30 minutes and PRefresh = 30 minutes. If `),qi$2(122,`code`),Mw(123,`SecurityTokenRefreshRate`),Tl(),Mw(124,` = 1/4, it means that PValid = 45 minutes and PRefresh = 15 minutes. If `),qi$2(125,`code`),Mw(126,`SecurityTokenRefreshRate`),Tl(),Mw(127,` = 3/4, it means that PValid = 15 minutes and PRefresh = 45 minutes and so on. `),Tl(),qi$2(128,`h2`,44)(129,`span`),Mw(130,`JWT Token Refresh Implementation`),Tl(),qi$2(131,`a`,45),Mw(132,`#`),Tl()(),qi$2(133,`p`),Mw(134,`One interesting idea of JWT token implementation together with refresh token is on `),qi$2(135,`a`,46),Mw(136,`EdiWang`),Tl(),Mw(137,` GitHub repository. Our main difference from above implementation is not using web browser cookies and uses native .NET Core implementation which is “controlled” by the .NET Core framework itself. One problem we solved in this article, is the implementation of `),qi$2(138,`code`),Mw(139,`JWT Token`),Tl(),Mw(140,` refresh mechanism. There is no standard way to refresh JWT token in .NET Core 10. The main idea was to check a valid `),qi$2(141,`code`),Mw(142,`JWT token`),Tl(),Mw(143,` right after standard .NET Core authorization and before entering of an API controller. In fact, we needed to use following formula with this small piece of code:`),Tl(),qi$2(144,`pre`,40)(145,`code`)(146,`span`,42),Mw(147,`var`),Tl(),Mw(148,` claimsPrincipal = context.User!;
 `),qi$2(149,`span`,42),Mw(150,`if`),Tl(),Mw(151,` (claimsPrincipal != `),qi$2(152,`span`,47),Mw(153,`null`),Tl(),Mw(154,`)
 {
     `),qi$2(155,`span`,42),Mw(156,`var`),Tl(),Mw(157,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
     `),qi$2(158,`span`,42),Mw(159,`if`),Tl(),Mw(160,` (isAuthenticated != `),qi$2(161,`span`,47),Mw(162,`null`),Tl(),Mw(163,` && (`),qi$2(164,`span`,48),Mw(165,`bool`),Tl(),Mw(166,`)isAuthenticated)
     {
         `),qi$2(167,`span`,42),Mw(168,`var`),Tl(),Mw(169,` claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
         `),qi$2(170,`span`,42),Mw(171,`if`),Tl(),Mw(172,` (claim != `),qi$2(173,`span`,47),Mw(174,`null`),Tl(),Mw(175,`)
         {
             clientId = claim.Value;
         }
     }
 }
 `),qi$2(176,`span`,42),Mw(177,`if`),Tl(),Mw(178,` (clientId != `),qi$2(179,`span`,47),Mw(180,`null`),Tl(),Mw(181,`)
 {
     `),qi$2(182,`span`,42),Mw(183,`var`),Tl(),Mw(184,` iat = claimsPrincipal.FindFirst(`),qi$2(185,`span`,49),Mw(186,`"iat"`),Tl(),Mw(187,`);
     `),qi$2(188,`span`,42),Mw(189,`var`),Tl(),Mw(190,` exp = claimsPrincipal.FindFirst(`),qi$2(191,`span`,49),Mw(192,`"exp"`),Tl(),Mw(193,`);
     `),qi$2(194,`span`,42),Mw(195,`if`),Tl(),Mw(196,` (iat != `),qi$2(197,`span`,47),Mw(198,`null`),Tl(),Mw(199,` && exp != `),qi$2(200,`span`,47),Mw(201,`null`),Tl(),Mw(202,`)
     {
         `),qi$2(203,`span`,42),Mw(204,`var`),Tl(),Mw(205,` pValid = (`),qi$2(206,`span`,48),Mw(207,`long`),Tl(),Mw(208,`.Parse(exp.Value) - `),qi$2(209,`span`,48),Mw(210,`long`),Tl(),Mw(211,`.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
         `),qi$2(212,`span`,42),Mw(213,`var`),Tl(),Mw(214,` current = `),qi$2(215,`span`,48),Mw(216,`long`),Tl(),Mw(217,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();
         `),qi$2(218,`span`,42),Mw(219,`if`),Tl(),Mw(220,` (current < pValid)
         {
             `),qi$2(221,`span`,42),Mw(222,`await`),Tl(),Mw(223,` ReturnSecurityTokenRefreshRate(context, `),qi$2(224,`span`,49),Mw(225,`"SecurityTokenRefreshRate"`),Tl(),Mw(226,`, `),qi$2(227,`span`,49),Mw(228,`"Please refresh your JWT token"`),Tl(),Mw(229,`);
             `),qi$2(230,`span`,42),Mw(231,`return`),Tl(),Mw(232,`;
         }
     }
 }`),Tl()(),qi$2(233,`p`),Mw(234,`So, we needed a middleware to place the above piece of code. A good candidate we found was AspNetCoreRateLimit library, so we decided to modify its source code keeping in mind also the possibility of testing it with MyTested. The original AspNetCoreRateLimit middleware is called `),qi$2(235,`a`,50),Mw(236,`RateLimitMiddleware.cs`),Tl(),Mw(237,` Following is the modified source code that is used in our actual application.`),Tl(),qi$2(238,`h3`,51)(239,`span`),Mw(240,`Modified RateLimitMiddleware`),Tl(),qi$2(241,`a`,52),Mw(242,`#`),Tl()(),qi$2(243,`pre`,40)(244,`code`)(245,`span`,42),Mw(246,`using`),Tl(),Mw(247,` Microsoft.AspNetCore.Hosting;
`),qi$2(248,`span`,42),Mw(249,`using`),Tl(),Mw(250,` Microsoft.AspNetCore.Http;
`),qi$2(251,`span`,42),Mw(252,`using`),Tl(),Mw(253,` Newtonsoft.Json;
`),qi$2(254,`span`,42),Mw(255,`using`),Tl(),Mw(256,` Newtonsoft.Json.Serialization;
`),qi$2(257,`span`,42),Mw(258,`using`),Tl(),Mw(259,` System;
`),qi$2(260,`span`,42),Mw(261,`using`),Tl(),Mw(262,` System.Collections.Generic;
`),qi$2(263,`span`,42),Mw(264,`using`),Tl(),Mw(265,` System.Data;
`),qi$2(266,`span`,42),Mw(267,`using`),Tl(),Mw(268,` System.Linq;
`),qi$2(269,`span`,42),Mw(270,`using`),Tl(),Mw(271,` System.Net;
`),qi$2(272,`span`,42),Mw(273,`using`),Tl(),Mw(274,` System.Security.Claims;
`),qi$2(275,`span`,42),Mw(276,`using`),Tl(),Mw(277,` System.Text;
`),qi$2(278,`span`,42),Mw(279,`using`),Tl(),Mw(280,` System.Threading.Tasks;

`),qi$2(281,`span`,42),Mw(282,`namespace`),Tl(),Mw(283,` `),qi$2(284,`span`,53),Mw(285,`AspNetCoreRateLimit`),Tl(),Mw(286,`
{
    `),qi$2(287,`span`,42),Mw(288,`public`),Tl(),Mw(289,` `),qi$2(290,`span`,42),Mw(291,`abstract`),Tl(),Mw(292,` `),qi$2(293,`span`,42),Mw(294,`class`),Tl(),Mw(295,` `),qi$2(296,`span`,53),Mw(297,`RateLimitMiddleware`),Tl(),Mw(298,`<`),qi$2(299,`span`,53),Mw(300,`TProcessor`),Tl(),Mw(301,`> : `),qi$2(302,`span`,53),Mw(303,`IMiddleware`),Tl(),Mw(304,`
        `),qi$2(305,`span`,42),Mw(306,`where`),Tl(),Mw(307,` `),qi$2(308,`span`,53),Mw(309,`TProcessor`),Tl(),Mw(310,` : `),qi$2(311,`span`,53),Mw(312,`IRateLimitProcessor`),Tl(),Mw(313,`
    {
        `),qi$2(314,`span`,42),Mw(315,`private`),Tl(),Mw(316,` `),qi$2(317,`span`,42),Mw(318,`readonly`),Tl(),Mw(319,` IWebHostEnvironment _env;
        `),qi$2(320,`span`,42),Mw(321,`private`),Tl(),Mw(322,` `),qi$2(323,`span`,42),Mw(324,`readonly`),Tl(),Mw(325,` TProcessor _processor;
        `),qi$2(326,`span`,42),Mw(327,`private`),Tl(),Mw(328,` `),qi$2(329,`span`,42),Mw(330,`readonly`),Tl(),Mw(331,` RateLimitOptions _options;
        `),qi$2(332,`span`,42),Mw(333,`private`),Tl(),Mw(334,` `),qi$2(335,`span`,42),Mw(336,`readonly`),Tl(),Mw(337,` IRateLimitConfiguration _config;
        `),qi$2(338,`span`,42),Mw(339,`private`),Tl(),Mw(340,` `),qi$2(341,`span`,42),Mw(342,`readonly`),Tl(),Mw(343,` `),qi$2(344,`span`,48),Mw(345,`bool`),Tl(),Mw(346,` _securityTokenRefreshOnly;
        `),qi$2(347,`span`,54)(348,`span`,42),Mw(349,`protected`),Tl(),Mw(350,` `),qi$2(351,`span`,53),Mw(352,`RateLimitMiddleware`),Tl(),Mw(353,`(`),qi$2(354,`span`,55),Mw(355,`
            IWebHostEnvironment env,
            RateLimitOptions options,
            TProcessor processor,
            IRateLimitConfiguration config,
            `),qi$2(356,`span`,48),Mw(357,`bool`),Tl(),Mw(358,` securityTokenRefreshOnly`),Tl(),Mw(359,`)`),Tl(),Mw(360,`
        {
            _env = env;
            _options = options;
            _processor = processor;
            _config = config;
            _securityTokenRefreshOnly = securityTokenRefreshOnly;

            `),qi$2(361,`span`,42),Mw(362,`if`),Tl(),Mw(363,` (_env.EnvironmentName == `),qi$2(364,`span`,49),Mw(365,`"Test"`),Tl(),Mw(366,`)
            {
                _config.RegisterResolvers();
            }
        }

        `),qi$2(367,`span`,54)(368,`span`,42),Mw(369,`public`),Tl(),Mw(370,` `),qi$2(371,`span`,42),Mw(372,`async`),Tl(),Mw(373,` Task `),qi$2(374,`span`,53),Mw(375,`InvokeAsync`),Tl(),Mw(376,`(`),qi$2(377,`span`,55),Mw(378,`HttpContext context, RequestDelegate _next`),Tl(),Mw(379,`)`),Tl(),Mw(380,`
        {
            `),qi$2(381,`span`,56),Mw(382,`// check if rate limiting is enabled (EnableEndpointRateLimiting)`),Tl(),Mw(383,`
            `),qi$2(384,`span`,42),Mw(385,`if`),Tl(),Mw(386,` (_options == `),qi$2(387,`span`,47),Mw(388,`null`),Tl(),Mw(389,`)
            {
                `),qi$2(390,`span`,42),Mw(391,`await`),Tl(),Mw(392,` _next.Invoke(context);
                `),qi$2(393,`span`,42),Mw(394,`return`),Tl(),Mw(395,`;
            }

            `),qi$2(396,`span`,48),Mw(397,`string`),Tl(),Mw(398,` clientIp = `),qi$2(399,`span`,47),Mw(400,`null`),Tl(),Mw(401,`;
            `),qi$2(402,`span`,48),Mw(403,`string`),Tl(),Mw(404,` clientId = `),qi$2(405,`span`,47),Mw(406,`null`),Tl(),Mw(407,`;

            `),qi$2(408,`span`,42),Mw(409,`var`),Tl(),Mw(410,` claimsPrincipal = context.User!;

            `),qi$2(411,`span`,42),Mw(412,`if`),Tl(),Mw(413,` (claimsPrincipal != `),qi$2(414,`span`,47),Mw(415,`null`),Tl(),Mw(416,`)
            {
                `),qi$2(417,`span`,42),Mw(418,`var`),Tl(),Mw(419,` isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                `),qi$2(420,`span`,42),Mw(421,`if`),Tl(),Mw(422,` (isAuthenticated != `),qi$2(423,`span`,47),Mw(424,`null`),Tl(),Mw(425,` && (`),qi$2(426,`span`,48),Mw(427,`bool`),Tl(),Mw(428,`)isAuthenticated)
                {
                    `),qi$2(429,`span`,42),Mw(430,`var`),Tl(),Mw(431,` claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
                    `),qi$2(432,`span`,42),Mw(433,`if`),Tl(),Mw(434,` (claim != `),qi$2(435,`span`,47),Mw(436,`null`),Tl(),Mw(437,`)
                    {
                        clientId = claim.Value;
                    }
                }
            }

            `),qi$2(438,`span`,42),Mw(439,`if`),Tl(),Mw(440,` (!_config.IpResolvers.IsEmpty)
            {
                `),qi$2(441,`span`,42),Mw(442,`var`),Tl(),Mw(443,` resolver = _config.IpResolvers.GetEnumerator();
                `),qi$2(444,`span`,42),Mw(445,`while`),Tl(),Mw(446,` (resolver.MoveNext())
                {
                    clientIp = resolver.Current.Value.ResolveIp(context);
                    `),qi$2(447,`span`,42),Mw(448,`if`),Tl(),Mw(449,` (!`),qi$2(450,`span`,48),Mw(451,`string`),Tl(),Mw(452,`.IsNullOrEmpty(clientIp))
                    {
                        `),qi$2(453,`span`,42),Mw(454,`break`),Tl(),Mw(455,`;
                    }
                }
            }

            `),qi$2(456,`span`,42),Mw(457,`var`),Tl(),Mw(458,` path = context.Request.Path.ToString().ToLowerInvariant();
            `),qi$2(459,`span`,42),Mw(460,`var`),Tl(),Mw(461,` identity = `),qi$2(462,`span`,42),Mw(463,`new`),Tl(),Mw(464,` ClientRequestIdentity
            {
                ClientIp = clientIp ?? context.Connection.RemoteIpAddress?.MapToIPv4().ToString(),
                Path = path == `),qi$2(465,`span`,49),Mw(466,`"/"`),Tl(),Mw(467,`
                    ? path
                    : path.TrimEnd(`),qi$2(468,`span`,49),Mw(469,`'/'`),Tl(),Mw(470,`),
                HttpVerb = context.Request.Method.ToLowerInvariant(),
                ClientId = clientId ?? `),qi$2(471,`span`,49),Mw(472,`"anon"`),Tl(),Mw(473,`
            };


            `),qi$2(474,`span`,56),Mw(475,`// check white list`),Tl(),Mw(476,`
            `),qi$2(477,`span`,42),Mw(478,`if`),Tl(),Mw(479,` (!_processor.IsWhitelisted(identity))
            {
                `),qi$2(480,`span`,42),Mw(481,`if`),Tl(),Mw(482,` (clientId != `),qi$2(483,`span`,47),Mw(484,`null`),Tl(),Mw(485,`)
                {
                    `),qi$2(486,`span`,42),Mw(487,`var`),Tl(),Mw(488,` iat = claimsPrincipal.FindFirst(`),qi$2(489,`span`,49),Mw(490,`"iat"`),Tl(),Mw(491,`);
                    `),qi$2(492,`span`,42),Mw(493,`var`),Tl(),Mw(494,` exp = claimsPrincipal.FindFirst(`),qi$2(495,`span`,49),Mw(496,`"exp"`),Tl(),Mw(497,`);
                    `),qi$2(498,`span`,42),Mw(499,`if`),Tl(),Mw(500,` (iat != `),qi$2(501,`span`,47),Mw(502,`null`),Tl(),Mw(503,` && exp != `),qi$2(504,`span`,47),Mw(505,`null`),Tl(),Mw(506,`)
                    {
                        `),qi$2(507,`span`,42),Mw(508,`var`),Tl(),Mw(509,` pValid = (`),qi$2(510,`span`,48),Mw(511,`long`),Tl(),Mw(512,`.Parse(exp.Value) - `),qi$2(513,`span`,48),Mw(514,`long`),Tl(),Mw(515,`.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
                        `),qi$2(516,`span`,42),Mw(517,`var`),Tl(),Mw(518,` current = `),qi$2(519,`span`,48),Mw(520,`long`),Tl(),Mw(521,`.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                        `),qi$2(522,`span`,42),Mw(523,`if`),Tl(),Mw(524,` (`),qi$2(525,`span`,42),Mw(526,`this`),Tl(),Mw(527,`._env.EnvironmentName == `),qi$2(528,`span`,49),Mw(529,`"Test"`),Tl(),Mw(530,`)
                        {
                            `),qi$2(531,`span`,42),Mw(532,`if`),Tl(),Mw(533,` (clientId == `),qi$2(534,`span`,49),Mw(535,`"SecurityTokenRefreshException@email.com1"`),Tl(),Mw(536,`)
                            {
                                `),qi$2(537,`span`,42),Mw(538,`await`),Tl(),Mw(539,` Task.FromException(`),qi$2(540,`span`,42),Mw(541,`new`),Tl(),Mw(542,` SecurityTokenRefreshException(`),qi$2(543,`span`,49),Mw(544,`$"This is a test. PValid:  `),qi$2(545,`span`,57),Mw(546,`{pValid}`),Tl(),Mw(547,` Current: `),qi$2(548,`span`,57),Mw(549,`{current}`),Tl(),Mw(550,` ClientId: `),qi$2(551,`span`,57),Mw(552,`{clientId}`),Tl(),Mw(553,`"`),Tl(),Mw(554,`));
                            }
                        }
                        `),qi$2(555,`span`,42),Mw(556,`else`),Tl(),Mw(557,` `),qi$2(558,`span`,42),Mw(559,`if`),Tl(),Mw(560,` (current < pValid)
                        {
                            LogBlockedRequest(context, identity, identity.ClientIp);
                            `),qi$2(561,`span`,42),Mw(562,`await`),Tl(),Mw(563,` ReturnSecurityTokenRefreshRate(context, `),qi$2(564,`span`,49),Mw(565,`"SecurityTokenRefreshRate"`),Tl(),Mw(566,`, `),qi$2(567,`span`,49),Mw(568,`"Please refresh your JWT token"`),Tl(),Mw(569,`);
                            `),qi$2(570,`span`,42),Mw(571,`return`),Tl(),Mw(572,`;
                        }

                        `),qi$2(573,`span`,42),Mw(574,`var`),Tl(),Mw(575,` claim = claimsPrincipal.FindFirst(ClaimTypes.UserData);
                        `),qi$2(576,`span`,42),Mw(577,`if`),Tl(),Mw(578,` (claim != `),qi$2(579,`span`,47),Mw(580,`null`),Tl(),Mw(581,`)
                        {
                            `),qi$2(582,`span`,42),Mw(583,`if`),Tl(),Mw(584,` (`),qi$2(585,`span`,42),Mw(586,`this`),Tl(),Mw(587,`._env.EnvironmentName == `),qi$2(588,`span`,49),Mw(589,`"Test"`),Tl(),Mw(590,`)
                            {
                                `),qi$2(591,`span`,42),Mw(592,`if`),Tl(),Mw(593,` (claim.Value == `),qi$2(594,`span`,49),Mw(595,`"0.0.0.0"`),Tl(),Mw(596,`)
                                {
                                    `),qi$2(597,`span`,42),Mw(598,`await`),Tl(),Mw(599,` Task.FromException(`),qi$2(600,`span`,42),Mw(601,`new`),Tl(),Mw(602,` SecurityTokenRefreshException(`),qi$2(603,`span`,49),Mw(604,`$"This is a test. PValid:  `),qi$2(605,`span`,57),Mw(606,`{pValid}`),Tl(),Mw(607,` Current: `),qi$2(608,`span`,57),Mw(609,`{current}`),Tl(),Mw(610,` ClientId: `),qi$2(611,`span`,57),Mw(612,`{clientId}`),Tl(),Mw(613,`"`),Tl(),Mw(614,`));
                                }
                            }
                            `),qi$2(615,`span`,42),Mw(616,`else`),Tl(),Mw(617,` `),qi$2(618,`span`,42),Mw(619,`if`),Tl(),Mw(620,` (identity.ClientIp != claim.Value)
                            {
                                LogBlockedRequest(context, identity, `),qi$2(621,`span`,49),Mw(622,`$"New: `),qi$2(623,`span`,57),Mw(624,`{identity.ClientIp}`),Tl(),Mw(625,` Old: `),qi$2(626,`span`,57),Mw(627,`{claim.Value}`),Tl(),Mw(628,`"`),Tl(),Mw(629,`);
                                `),qi$2(630,`span`,42),Mw(631,`await`),Tl(),Mw(632,` ReturnSecurityTokenRefreshRate(context, `),qi$2(633,`span`,49),Mw(634,`"SecurityTokenRefreshRate"`),Tl(),Mw(635,`, `),qi$2(636,`span`,49),Mw(637,`"Please refresh your IP"`),Tl(),Mw(638,`);
                                `),qi$2(639,`span`,42),Mw(640,`return`),Tl(),Mw(641,`;
                            }
                        }

                    }
                }

                `),qi$2(642,`span`,41),Mw(643,`#`),qi$2(644,`span`,42),Mw(645,`region`),Tl(),Mw(646,` NOT securityTokenRefreshOnly`),Tl(),Mw(647,`
                `),qi$2(648,`span`,42),Mw(649,`if`),Tl(),Mw(650,` (!_securityTokenRefreshOnly)
                {
                    `),qi$2(651,`span`,42),Mw(652,`if`),Tl(),Mw(653,` (`),qi$2(654,`span`,42),Mw(655,`this`),Tl(),Mw(656,`._env.EnvironmentName == `),qi$2(657,`span`,49),Mw(658,`"Test"`),Tl(),Mw(659,`)
                    {
                        `),qi$2(660,`span`,42),Mw(661,`if`),Tl(),Mw(662,` (clientIp == `),qi$2(663,`span`,49),Mw(664,`"0.0.0.0"`),Tl(),Mw(665,`)
                        {
                            `),qi$2(666,`span`,42),Mw(667,`await`),Tl(),Mw(668,` Task.FromException(`),qi$2(669,`span`,42),Mw(670,`new`),Tl(),Mw(671,` MatchingRulesException(`),qi$2(672,`span`,49),Mw(673,`$"This is a test. ClientIp: `),qi$2(674,`span`,57),Mw(675,`{identity.ClientIp}`),Tl(),Mw(676,`"`),Tl(),Mw(677,`));
                        }
                    }

                    IEnumerable<RateLimitRule> rules = `),qi$2(678,`span`,47),Mw(679,`null`),Tl(),Mw(680,`;
                    rules = `),qi$2(681,`span`,42),Mw(682,`await`),Tl(),Mw(683,` _processor.GetMatchingRulesAsync(identity, context.RequestAborted);
                    `),qi$2(684,`span`,42),Mw(685,`if`),Tl(),Mw(686,` (rules == `),qi$2(687,`span`,47),Mw(688,`null`),Tl(),Mw(689,`)
                    {
                        `),qi$2(690,`span`,42),Mw(691,`if`),Tl(),Mw(692,` (`),qi$2(693,`span`,42),Mw(694,`this`),Tl(),Mw(695,`._env.EnvironmentName == `),qi$2(696,`span`,49),Mw(697,`"Test"`),Tl(),Mw(698,`)
                        {
                            `),qi$2(699,`span`,42),Mw(700,`await`),Tl(),Mw(701,` Task.FromException(`),qi$2(702,`span`,42),Mw(703,`new`),Tl(),Mw(704,` MatchingRulesException(`),qi$2(705,`span`,49),Mw(706,`$"This is a test. ClientIp: `),qi$2(707,`span`,57),Mw(708,`{identity.ClientIp}`),Tl(),Mw(709,`"`),Tl(),Mw(710,`));
                        }
                        `),qi$2(711,`span`,42),Mw(712,`else`),Tl(),Mw(713,`
                        {
                            `),qi$2(714,`span`,42),Mw(715,`await`),Tl(),Mw(716,` ReturnSecurityTokenRefreshRate(context, `),qi$2(717,`span`,49),Mw(718,`"MatchingRulesException"`),Tl(),Mw(719,`, `),qi$2(720,`span`,49),Mw(721,`$"Matching rules is null. Your IP address is: `),qi$2(722,`span`,57),Mw(723,`{identity.ClientIp}`),Tl(),Mw(724,`"`),Tl(),Mw(725,`);
                            `),qi$2(726,`span`,42),Mw(727,`return`),Tl(),Mw(728,`;
                        }
                    }

                    `),qi$2(729,`span`,42),Mw(730,`var`),Tl(),Mw(731,` rulesDict = `),qi$2(732,`span`,42),Mw(733,`new`),Tl(),Mw(734,` Dictionary<RateLimitRule, RateLimitCounter>();

                    `),qi$2(735,`span`,42),Mw(736,`foreach`),Tl(),Mw(737,` (`),qi$2(738,`span`,42),Mw(739,`var`),Tl(),Mw(740,` rule `),qi$2(741,`span`,42),Mw(742,`in`),Tl(),Mw(743,` rules)
                    {
                        `),qi$2(744,`span`,56),Mw(745,`// increment counter`),Tl(),Mw(746,`
                        `),qi$2(747,`span`,42),Mw(748,`var`),Tl(),Mw(749,` rateLimitCounter = `),qi$2(750,`span`,42),Mw(751,`await`),Tl(),Mw(752,` _processor.ProcessRequestAsync(identity, rule, context.RequestAborted);

                        `),qi$2(753,`span`,42),Mw(754,`if`),Tl(),Mw(755,` (rule.Limit > `),qi$2(756,`span`,58),Mw(757,`0`),Tl(),Mw(758,`)
                        {
                            `),qi$2(759,`span`,56),Mw(760,`// check if key expired`),Tl(),Mw(761,`
                            `),qi$2(762,`span`,42),Mw(763,`if`),Tl(),Mw(764,` (rateLimitCounter.Timestamp + rule.PeriodTimespan.Value < DateTime.UtcNow)
                            {
                                `),qi$2(765,`span`,42),Mw(766,`continue`),Tl(),Mw(767,`;
                            }

                            `),qi$2(768,`span`,56),Mw(769,`// check if limit is reached`),Tl(),Mw(770,`
                            `),qi$2(771,`span`,42),Mw(772,`if`),Tl(),Mw(773,` (rateLimitCounter.Count > rule.Limit)
                            {
                                `),qi$2(774,`span`,56),Mw(775,`//compute retry after value`),Tl(),Mw(776,`
                                `),qi$2(777,`span`,42),Mw(778,`var`),Tl(),Mw(779,` retryAfter = rateLimitCounter.Timestamp.RetryAfterFrom(rule);

                                `),qi$2(780,`span`,56),Mw(781,`// log blocked request`),Tl(),Mw(782,`
                                `),qi$2(783,`span`,56),Mw(784,`//LogBlockedRequest(context, identity, rateLimitCounter, rule);`),Tl(),Mw(785,`

                                `),qi$2(786,`span`,42),Mw(787,`if`),Tl(),Mw(788,` (_options.RequestBlockedBehaviorAsync != `),qi$2(789,`span`,47),Mw(790,`null`),Tl(),Mw(791,`)
                                {
                                    `),qi$2(792,`span`,42),Mw(793,`await`),Tl(),Mw(794,` _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                                }

                                `),qi$2(795,`span`,42),Mw(796,`if`),Tl(),Mw(797,` (`),qi$2(798,`span`,42),Mw(799,`this`),Tl(),Mw(800,`._env.EnvironmentName == `),qi$2(801,`span`,49),Mw(802,`"Test"`),Tl(),Mw(803,`)
                                {
                                    `),qi$2(804,`span`,42),Mw(805,`await`),Tl(),Mw(806,` Task.FromException(`),qi$2(807,`span`,42),Mw(808,`new`),Tl(),Mw(809,` RateLimitMiddlewareException(`),qi$2(810,`span`,49),Mw(811,`$"This is a test. rateLimitCounter.Count `),qi$2(812,`span`,57),Mw(813,`{rateLimitCounter.Count}`),Tl(),Mw(814,` rule.Limit: `),qi$2(815,`span`,57),Mw(816,`{rule.Limit}`),Tl(),Mw(817,` ClientIp: `),qi$2(818,`span`,57),Mw(819,`{identity.ClientIp}`),Tl(),Mw(820,`"`),Tl(),Mw(821,`));
                                }

                                `),qi$2(822,`span`,42),Mw(823,`if`),Tl(),Mw(824,` (!rule.MonitorMode)
                                {
                                    `),qi$2(825,`span`,56),Mw(826,`// break execution`),Tl(),Mw(827,`
                                    `),qi$2(828,`span`,42),Mw(829,`await`),Tl(),Mw(830,` ReturnQuotaExceededResponse(context, rule, retryAfter, identity.ClientIp);

                                    `),qi$2(831,`span`,42),Mw(832,`return`),Tl(),Mw(833,`;
                                }
                            }
                        }
                        `),qi$2(834,`span`,56),Mw(835,`// if limit is zero or less, block the request.`),Tl(),Mw(836,`
                        `),qi$2(837,`span`,42),Mw(838,`else`),Tl(),Mw(839,`
                        {
                            `),qi$2(840,`span`,56),Mw(841,`// log blocked request`),Tl(),Mw(842,`
                            `),qi$2(843,`span`,56),Mw(844,`//LogBlockedRequest(context, identity, rateLimitCounter, rule);`),Tl(),Mw(845,`

                            `),qi$2(846,`span`,42),Mw(847,`if`),Tl(),Mw(848,` (_options.RequestBlockedBehaviorAsync != `),qi$2(849,`span`,47),Mw(850,`null`),Tl(),Mw(851,`)
                            {
                                `),qi$2(852,`span`,42),Mw(853,`await`),Tl(),Mw(854,` _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                            }

                            `),qi$2(855,`span`,42),Mw(856,`if`),Tl(),Mw(857,` (`),qi$2(858,`span`,42),Mw(859,`this`),Tl(),Mw(860,`._env.EnvironmentName == `),qi$2(861,`span`,49),Mw(862,`"Test"`),Tl(),Mw(863,`)
                            {
                                `),qi$2(864,`span`,42),Mw(865,`await`),Tl(),Mw(866,` Task.FromException(`),qi$2(867,`span`,42),Mw(868,`new`),Tl(),Mw(869,` RateLimitMiddlewareException(`),qi$2(870,`span`,49),Mw(871,`$"This is a test. rateLimitCounter.Count `),qi$2(872,`span`,57),Mw(873,`{rateLimitCounter.Count}`),Tl(),Mw(874,` rule.Limit: `),qi$2(875,`span`,57),Mw(876,`{rule.Limit}`),Tl(),Mw(877,` ClientIp: `),qi$2(878,`span`,57),Mw(879,`{identity.ClientIp}`),Tl(),Mw(880,`"`),Tl(),Mw(881,`));
                            }

                            `),qi$2(882,`span`,42),Mw(883,`if`),Tl(),Mw(884,` (!rule.MonitorMode)
                            {
                                `),qi$2(885,`span`,56),Mw(886,`// break execution (Int32 max used to represent infinity)`),Tl(),Mw(887,`
                                `),qi$2(888,`span`,42),Mw(889,`await`),Tl(),Mw(890,` ReturnQuotaExceededResponse(context, rule, `),qi$2(891,`span`,48),Mw(892,`int`),Tl(),Mw(893,`.MaxValue.ToString(System.Globalization.CultureInfo.InvariantCulture), identity.ClientIp);

                                `),qi$2(894,`span`,42),Mw(895,`return`),Tl(),Mw(896,`;
                            }
                        }

                        rulesDict.Add(rule, rateLimitCounter);
                    }

                    `),qi$2(897,`span`,56),Mw(898,`// set X-Rate-Limit headers for the longest period`),Tl(),Mw(899,`
                    `),qi$2(900,`span`,42),Mw(901,`if`),Tl(),Mw(902,` (rulesDict.Count != `),qi$2(903,`span`,58),Mw(904,`0`),Tl(),Mw(905,` && !_options.DisableRateLimitHeaders)
                    {
                        `),qi$2(906,`span`,42),Mw(907,`var`),Tl(),Mw(908,` rule = rulesDict.OrderByDescending(x => x.Key.PeriodTimespan).FirstOrDefault();
                        `),qi$2(909,`span`,42),Mw(910,`var`),Tl(),Mw(911,` headers = _processor.GetRateLimitHeaders(rule.Value, rule.Key, context.RequestAborted);

                        headers.Context = context;

                        context.Response.OnStarting(SetRateLimitHeaders, state: headers);
                    }
                }
                `),qi$2(912,`span`,41),Mw(913,`#`),qi$2(914,`span`,42),Mw(915,`endregion`),Tl()(),Mw(916,`
            }

            `),qi$2(917,`span`,42),Mw(918,`if`),Tl(),Mw(919,` (`),qi$2(920,`span`,42),Mw(921,`this`),Tl(),Mw(922,`._env.EnvironmentName == `),qi$2(923,`span`,49),Mw(924,`"Test"`),Tl(),Mw(925,`)
            {
                `),qi$2(926,`span`,42),Mw(927,`await`),Tl(),Mw(928,` Task.FromResult(`),qi$2(929,`span`,47),Mw(930,`true`),Tl(),Mw(931,`);
            }
            `),qi$2(932,`span`,42),Mw(933,`else`),Tl(),Mw(934,`
            {
                `),qi$2(935,`span`,42),Mw(936,`await`),Tl(),Mw(937,` _next.Invoke(context);
            }
        }

        `),qi$2(938,`span`,54)(939,`span`,42),Mw(940,`private`),Tl(),Mw(941,` `),qi$2(942,`span`,42),Mw(943,`static`),Tl(),Mw(944,` Task `),qi$2(945,`span`,53),Mw(946,`ReturnSecurityTokenRefreshRate`),Tl(),Mw(947,`(`),qi$2(948,`span`,55),Mw(949,`HttpContext context, `),qi$2(950,`span`,48),Mw(951,`string`),Tl(),Mw(952,` key, `),qi$2(953,`span`,48),Mw(954,`string`),Tl(),Mw(955,` message`),Tl(),Mw(956,`)`),Tl(),Mw(957,`
        {
            context.Response.ContentType = `),qi$2(958,`span`,49),Mw(959,`"application/json"`),Tl(),Mw(960,`;
            context.Response.StatusCode = (`),qi$2(961,`span`,48),Mw(962,`int`),Tl(),Mw(963,`)HttpStatusCode.UnprocessableEntity;

            `),qi$2(964,`span`,42),Mw(965,`var`),Tl(),Mw(966,` result = SerializeObject(`),qi$2(967,`span`,42),Mw(968,`new`),Tl(),Mw(969,` ErrorListResult(key,
                        [
                            message
                        ]));

            `),qi$2(970,`span`,42),Mw(971,`return`),Tl(),Mw(972,` context.Response.WriteAsync(result);
        }

        `),qi$2(973,`span`,54)(974,`span`,42),Mw(975,`private`),Tl(),Mw(976,` `),qi$2(977,`span`,42),Mw(978,`static`),Tl(),Mw(979,` `),qi$2(980,`span`,48),Mw(981,`string`),Tl(),Mw(982,` `),qi$2(983,`span`,53),Mw(984,`SerializeObject`),Tl(),Mw(985,`(`),qi$2(986,`span`,55)(987,`span`,48),Mw(988,`object`),Tl(),Mw(989,` obj`),Tl(),Mw(990,`)`),Tl(),Mw(991,`
            => JsonConvert.SerializeObject(obj, `),qi$2(992,`span`,42),Mw(993,`new`),Tl(),Mw(994,` JsonSerializerSettings
            {
                ContractResolver = `),qi$2(995,`span`,42),Mw(996,`new`),Tl(),Mw(997,` DefaultContractResolver
                {
                    NamingStrategy = `),qi$2(998,`span`,42),Mw(999,`new`),Tl(),Mw(1e3,` CamelCaseNamingStrategy(`),qi$2(1001,`span`,47),Mw(1002,`true`),Tl(),Mw(1003,`, `),qi$2(1004,`span`,47),Mw(1005,`true`),Tl(),Mw(1006,`)
                }
            });

        `),qi$2(1007,`span`,54)(1008,`span`,42),Mw(1009,`public`),Tl(),Mw(1010,` `),qi$2(1011,`span`,42),Mw(1012,`virtual`),Tl(),Mw(1013,` Task `),qi$2(1014,`span`,53),Mw(1015,`ReturnQuotaExceededResponse`),Tl(),Mw(1016,`(`),qi$2(1017,`span`,55),Mw(1018,`HttpContext httpContext, RateLimitRule rule, `),qi$2(1019,`span`,48),Mw(1020,`string`),Tl(),Mw(1021,` retryAfter, `),qi$2(1022,`span`,48),Mw(1023,`string`),Tl(),Mw(1024,` clientIp`),Tl(),Mw(1025,`)`),Tl(),Mw(1026,`
        {
            `),qi$2(1027,`span`,56),Mw(1028,`//Use Endpoint QuotaExceededResponse`),Tl(),Mw(1029,`
            `),qi$2(1030,`span`,42),Mw(1031,`if`),Tl(),Mw(1032,` (rule.QuotaExceededResponse != `),qi$2(1033,`span`,47),Mw(1034,`null`),Tl(),Mw(1035,`)
            {
                _options.QuotaExceededResponse = rule.QuotaExceededResponse;
            }
            `),qi$2(1036,`span`,42),Mw(1037,`var`),Tl(),Mw(1038,` message = `),qi$2(1039,`span`,48),Mw(1040,`string`),Tl(),Mw(1041,`.Format(
                    _options.QuotaExceededResponse?.Content ??
                    _options.QuotaExceededMessage ??
                    `),qi$2(1042,`span`,49),Mw(1043,`"Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP adress is {3}"`),Tl(),Mw(1044,`,
                    rule.Limit,
                    rule.PeriodTimespan.HasValue ? FormatPeriodTimespan(rule.PeriodTimespan.Value) : rule.Period, retryAfter, clientIp
             );

            `),qi$2(1045,`span`,42),Mw(1046,`if`),Tl(),Mw(1047,` (!_options.DisableRateLimitHeaders)
            {
                httpContext.Response.Headers.RetryAfter = retryAfter;
            }

            httpContext.Response.ContentType = _options.QuotaExceededResponse?.ContentType ?? `),qi$2(1048,`span`,49),Mw(1049,`"text/plain"`),Tl(),Mw(1050,`;
            httpContext.Response.StatusCode = _options.QuotaExceededResponse?.StatusCode ?? _options.HttpStatusCode;


            `),qi$2(1051,`span`,42),Mw(1052,`var`),Tl(),Mw(1053,` result = SerializeObject(`),qi$2(1054,`span`,42),Mw(1055,`new`),Tl(),Mw(1056,` ErrorListResult(`),qi$2(1057,`span`,49),Mw(1058,`"QuotaExceeded"`),Tl(),Mw(1059,`,
                        [
                            message
                        ]));

            `),qi$2(1060,`span`,42),Mw(1061,`return`),Tl(),Mw(1062,` httpContext.Response.WriteAsync(result);
        }

        `),qi$2(1063,`span`,54)(1064,`span`,42),Mw(1065,`private`),Tl(),Mw(1066,` `),qi$2(1067,`span`,42),Mw(1068,`static`),Tl(),Mw(1069,` `),qi$2(1070,`span`,48),Mw(1071,`string`),Tl(),Mw(1072,` `),qi$2(1073,`span`,53),Mw(1074,`FormatPeriodTimespan`),Tl(),Mw(1075,`(`),qi$2(1076,`span`,55),Mw(1077,`TimeSpan period`),Tl(),Mw(1078,`)`),Tl(),Mw(1079,`
        {
            `),qi$2(1080,`span`,42),Mw(1081,`var`),Tl(),Mw(1082,` sb = `),qi$2(1083,`span`,42),Mw(1084,`new`),Tl(),Mw(1085,` StringBuilder();

            `),qi$2(1086,`span`,42),Mw(1087,`if`),Tl(),Mw(1088,` (period.Days > `),qi$2(1089,`span`,58),Mw(1090,`0`),Tl(),Mw(1091,`)
            {
                sb.Append(`),qi$2(1092,`span`,49),Mw(1093,`$"`),qi$2(1094,`span`,57),Mw(1095,`{period.Days}`),Tl(),Mw(1096,`d"`),Tl(),Mw(1097,`);
            }

            `),qi$2(1098,`span`,42),Mw(1099,`if`),Tl(),Mw(1100,` (period.Hours > `),qi$2(1101,`span`,58),Mw(1102,`0`),Tl(),Mw(1103,`)
            {
                sb.Append(`),qi$2(1104,`span`,49),Mw(1105,`$"`),qi$2(1106,`span`,57),Mw(1107,`{period.Hours}`),Tl(),Mw(1108,`h"`),Tl(),Mw(1109,`);
            }

            `),qi$2(1110,`span`,42),Mw(1111,`if`),Tl(),Mw(1112,` (period.Minutes > `),qi$2(1113,`span`,58),Mw(1114,`0`),Tl(),Mw(1115,`)
            {
                sb.Append(`),qi$2(1116,`span`,49),Mw(1117,`$"`),qi$2(1118,`span`,57),Mw(1119,`{period.Minutes}`),Tl(),Mw(1120,`m"`),Tl(),Mw(1121,`);
            }

            `),qi$2(1122,`span`,42),Mw(1123,`if`),Tl(),Mw(1124,` (period.Seconds > `),qi$2(1125,`span`,58),Mw(1126,`0`),Tl(),Mw(1127,`)
            {
                sb.Append(`),qi$2(1128,`span`,49),Mw(1129,`$"`),qi$2(1130,`span`,57),Mw(1131,`{period.Seconds}`),Tl(),Mw(1132,`s"`),Tl(),Mw(1133,`);
            }

            `),qi$2(1134,`span`,42),Mw(1135,`if`),Tl(),Mw(1136,` (period.Milliseconds > `),qi$2(1137,`span`,58),Mw(1138,`0`),Tl(),Mw(1139,`)
            {
                sb.Append(`),qi$2(1140,`span`,49),Mw(1141,`$"`),qi$2(1142,`span`,57),Mw(1143,`{period.Milliseconds}`),Tl(),Mw(1144,`ms"`),Tl(),Mw(1145,`);
            }

            `),qi$2(1146,`span`,42),Mw(1147,`return`),Tl(),Mw(1148,` sb.ToString();
        }

        `),qi$2(1149,`span`,56),Mw(1150,`//protected abstract void LogBlockedRequest(HttpContext httpContext, ClientRequestIdentity identity, RateLimitCounter counter, RateLimitRule rule);`),Tl(),Mw(1151,`
        `),qi$2(1152,`span`,54)(1153,`span`,42),Mw(1154,`protected`),Tl(),Mw(1155,` `),qi$2(1156,`span`,42),Mw(1157,`abstract`),Tl(),Mw(1158,` `),qi$2(1159,`span`,42),Mw(1160,`void`),Tl(),Mw(1161,` `),qi$2(1162,`span`,53),Mw(1163,`LogBlockedRequest`),Tl(),Mw(1164,`(`),qi$2(1165,`span`,55),Mw(1166,`HttpContext httpContext, ClientRequestIdentity identity, `),qi$2(1167,`span`,48),Mw(1168,`string`),Tl(),Mw(1169,` message`),Tl(),Mw(1170,`)`),Tl(),Mw(1171,`;
        `),qi$2(1172,`span`,54)(1173,`span`,42),Mw(1174,`private`),Tl(),Mw(1175,` Task `),qi$2(1176,`span`,53),Mw(1177,`SetRateLimitHeaders`),Tl(),Mw(1178,`(`),qi$2(1179,`span`,55)(1180,`span`,48),Mw(1181,`object`),Tl(),Mw(1182,` rateLimitHeaders`),Tl(),Mw(1183,`)`),Tl(),Mw(1184,`
        {
            `),qi$2(1185,`span`,42),Mw(1186,`var`),Tl(),Mw(1187,` headers = (RateLimitHeaders)rateLimitHeaders;

            headers.Context.Response.Headers[`),qi$2(1188,`span`,49),Mw(1189,`"X-Rate-Limit-Limit"`),Tl(),Mw(1190,`] = headers.Limit;
            headers.Context.Response.Headers[`),qi$2(1191,`span`,49),Mw(1192,`"X-Rate-Limit-Remaining"`),Tl(),Mw(1193,`] = headers.Remaining;
            headers.Context.Response.Headers[`),qi$2(1194,`span`,49),Mw(1195,`"X-Rate-Limit-Reset"`),Tl(),Mw(1196,`] = headers.Reset;

            `),qi$2(1197,`span`,42),Mw(1198,`return`),Tl(),Mw(1199,` Task.CompletedTask;
        }
    }
}`),Tl()(),qi$2(1200,`h2`,59)(1201,`span`),Mw(1202,`Testing of RateLimitMiddleware With MyTested Library`),Tl(),qi$2(1203,`a`,60),Mw(1204,`#`),Tl()(),qi$2(1205,`p`),Mw(1206,`From the start, we need to keep in mind that MyTested does not provide support for middleware testing. So, we found a work around which is not 100% accurate. The main idea is that you have to setup the middleware manually in the right place to be logically correct. In our case, we’ve got `),qi$2(1207,`code`),Mw(1208,`GetTagsWithRateLimitMiddleware`),Tl(),Mw(1209,` and `),qi$2(1210,`code`),Mw(1211,`GetAllWithRateLimitMiddleware`),Tl(),Mw(1212,` from `),qi$2(1213,`a`,61),Mw(1214,`StaticTestData.cs`),Tl(),Mw(1215,`). Also, RateLimitMiddleware needs shared `),qi$2(1216,`code`),Mw(1217,`MemoryCache`),Tl(),Mw(1218,`. On the other hand, MyTested just simulates shared `),qi$2(1219,`code`),Mw(1220,`MeroryCache`),Tl(),Mw(1221,`. So, we modified source code of MyTested to work with the actual `),qi$2(1222,`code`),Mw(1223,`MeroryCache`),Tl(),Mw(1224,` Also, we introduced an option `),qi$2(1225,`code`),Mw(1226,`”ReplaceMemoryCache": false`),Tl(),Mw(1227,` (See `),qi$2(1228,`a`,62),Mw(1229,`testsettings.json`),Tl(),Mw(1230,`). From our modified source code of RateLimitMiddleware, you can see that we try to keep the original functional and add JWT token refresh concept also. As a result, we’ve got following limitations:`),Tl(),qi$2(1231,`ul`)(1232,`li`),Mw(1233,`the `),qi$2(1234,`code`),Mw(1235,`clientId`),Tl(),Mw(1236,` is taken from JWT token only`),Tl(),qi$2(1237,`li`),Mw(1238,`the `),qi$2(1239,`code`),Mw(1240,`clientIp`),Tl(),Mw(1241,` is taken from `),qi$2(1242,`code`),Mw(1243,`context.Connection.RemoteIpAddress`),Tl(),Mw(1244,` only`),Tl(),qi$2(1245,`li`)(1246,`code`),Mw(1247,`ClientWhitelist`),Tl(),Mw(1248,` configuration option does not work with public endpoints, and it should be empty.
Also, the \u201Ccorrect way\u201D to configure it is following:`),Tl()(),qi$2(1249,`pre`,40)(1250,`code`),Mw(1251,`...
.UseRouting()
.InitializeRateLimit()
.UseMiddleware<IpRateLimitMiddleware>()
.UseAuthentication()
.UseAuthorization()
.UseMiddleware<ClientRateLimitMiddleware>()
...`),Tl()(),qi$2(1252,`p`),Mw(1253,`All our middleware tests are in `),qi$2(1254,`a`,63),Mw(1255,`RateLimit`),Tl(),Mw(1256,` folder. For token refresh concept, we’ve got just two tests: `),qi$2(1257,`code`),Mw(1258,`Edit_tag_with_refresh_token_should_fail`),Tl(),Mw(1259,` and `),qi$2(1260,`code`),Mw(1261,`Login_with_password_with_refresh_token_and_whitelisted_private_route_should_return_success_with_token`),Tl(),Mw(1262,`. One interesting idea of a test( See `),qi$2(1263,`a`,64),Mw(1264,`AsyncKeyedLockTest.cs`),Tl(),Mw(1265,`) comes from `),qi$2(1266,`a`,65),Mw(1267,`AsyncKeyedLock`),Tl(),Mw(1268,`.
Also, we made some additional small changes in AspNetCoreRateLimit library by borrowing some ideas from `),qi$2(1269,`a`,66),Mw(1270,`Edi.CacheAside.InMemory`),Tl(),Mw(1271,`. Finaly, we’ve used following settings for our tests project:`),Tl(),qi$2(1272,`h3`,67)(1273,`span`),Mw(1274,`Test Settings`),Tl(),qi$2(1275,`a`,68),Mw(1276,`#`),Tl()(),qi$2(1277,`pre`,69)(1278,`code`),Mw(1279,` `),qi$2(1280,`span`,70),Mw(1281,`{`),Tl(),Mw(1282,`
  `),qi$2(1283,`span`,71),Mw(1284,`"General"`),Tl(),qi$2(1285,`span`,70),Mw(1286,`:`),Tl(),Mw(1287,` `),qi$2(1288,`span`,70),Mw(1289,`{`),Tl(),Mw(1290,`
    `),qi$2(1291,`span`,71),Mw(1292,`"ReplaceMemoryCache"`),Tl(),qi$2(1293,`span`,70),Mw(1294,`:`),Tl(),Mw(1295,` `),qi$2(1296,`span`,47)(1297,`span`,42),Mw(1298,`false`),Tl()(),Mw(1299,`
  `),qi$2(1300,`span`,70),Mw(1301,`}`),Tl(),qi$2(1302,`span`,70),Mw(1303,`,`),Tl(),Mw(1304,`

  `),qi$2(1305,`span`,71),Mw(1306,`"ApplicationSettings"`),Tl(),qi$2(1307,`span`,70),Mw(1308,`:`),Tl(),Mw(1309,` `),qi$2(1310,`span`,70),Mw(1311,`{`),Tl(),Mw(1312,`
    `),qi$2(1313,`span`,71),Mw(1314,`"SecurityTokenDescriptorKey"`),Tl(),qi$2(1315,`span`,70),Mw(1316,`:`),Tl(),Mw(1317,` `),qi$2(1318,`span`,49),Mw(1319,`"test1223dfgdfkffpie"`),Tl(),qi$2(1320,`span`,70),Mw(1321,`,`),Tl(),Mw(1322,`
    `),qi$2(1323,`span`,71),Mw(1324,`"SecurityTokenDescriptorExpiresInMinutes"`),Tl(),qi$2(1325,`span`,70),Mw(1326,`:`),Tl(),Mw(1327,` `),qi$2(1328,`span`,58),Mw(1329,`10`),Tl(),qi$2(1330,`span`,70),Mw(1331,`,`),Tl(),Mw(1332,`
    `),qi$2(1333,`span`,71),Mw(1334,`"SecurityTokenRefreshRate"`),Tl(),qi$2(1335,`span`,70),Mw(1336,`:`),Tl(),Mw(1337,` `),qi$2(1338,`span`,58),Mw(1339,`0.5`),Tl(),qi$2(1340,`span`,70),Mw(1341,`,`),Tl(),Mw(1342,`
    `),qi$2(1343,`span`,71),Mw(1344,`"MaxFailedAccessAttempts"`),Tl(),qi$2(1345,`span`,70),Mw(1346,`:`),Tl(),Mw(1347,` `),qi$2(1348,`span`,58),Mw(1349,`5`),Tl(),qi$2(1350,`span`,70),Mw(1351,`,`),Tl(),Mw(1352,`
    `),qi$2(1353,`span`,71),Mw(1354,`"DefaultLockoutTimeSpanInMinutes"`),Tl(),qi$2(1355,`span`,70),Mw(1356,`:`),Tl(),Mw(1357,` `),qi$2(1358,`span`,58),Mw(1359,`0`),Tl(),qi$2(1360,`span`,70),Mw(1361,`,`),Tl(),Mw(1362,`
    `),qi$2(1363,`span`,71),Mw(1364,`"ExperimentalIpAddress"`),Tl(),qi$2(1365,`span`,70),Mw(1366,`:`),Tl(),Mw(1367,` `),qi$2(1368,`span`,49),Mw(1369,`"::1"`),Tl(),Mw(1370,`
  `),qi$2(1371,`span`,70),Mw(1372,`}`),Tl(),qi$2(1373,`span`,70),Mw(1374,`,`),Tl(),Mw(1375,`

  `),qi$2(1376,`span`,71),Mw(1377,`"IpRateLimiting"`),Tl(),qi$2(1378,`span`,70),Mw(1379,`:`),Tl(),Mw(1380,` `),qi$2(1381,`span`,70),Mw(1382,`{`),Tl(),Mw(1383,`
    `),qi$2(1384,`span`,71),Mw(1385,`"EnableEndpointRateLimiting"`),Tl(),qi$2(1386,`span`,70),Mw(1387,`:`),Tl(),Mw(1388,` `),qi$2(1389,`span`,47)(1390,`span`,42),Mw(1391,`true`),Tl()(),qi$2(1392,`span`,70),Mw(1393,`,`),Tl(),Mw(1394,`
    `),qi$2(1395,`span`,71),Mw(1396,`"SecurityTokenRefreshRate"`),Tl(),qi$2(1397,`span`,70),Mw(1398,`:`),Tl(),Mw(1399,` `),qi$2(1400,`span`,58),Mw(1401,`0.5`),Tl(),qi$2(1402,`span`,70),Mw(1403,`,`),Tl(),Mw(1404,`
    `),qi$2(1405,`span`,71),Mw(1406,`"StackBlockedRequests"`),Tl(),qi$2(1407,`span`,70),Mw(1408,`:`),Tl(),Mw(1409,` `),qi$2(1410,`span`,47)(1411,`span`,42),Mw(1412,`false`),Tl()(),qi$2(1413,`span`,70),Mw(1414,`,`),Tl(),Mw(1415,`
    `),qi$2(1416,`span`,71),Mw(1417,`"RealIpHeader"`),Tl(),qi$2(1418,`span`,70),Mw(1419,`:`),Tl(),Mw(1420,` `),qi$2(1421,`span`,49),Mw(1422,`"X-Real-IP"`),Tl(),qi$2(1423,`span`,70),Mw(1424,`,`),Tl(),Mw(1425,`
    `),qi$2(1426,`span`,71),Mw(1427,`"HttpStatusCode"`),Tl(),qi$2(1428,`span`,70),Mw(1429,`:`),Tl(),Mw(1430,` `),qi$2(1431,`span`,58),Mw(1432,`429`),Tl(),qi$2(1433,`span`,70),Mw(1434,`,`),Tl(),Mw(1435,`
    `),qi$2(1436,`span`,71),Mw(1437,`"IpWhitelist"`),Tl(),qi$2(1438,`span`,70),Mw(1439,`:`),Tl(),Mw(1440,` `),qi$2(1441,`span`,70),Mw(1442,`[`),Tl(),Mw(1443,` `),qi$2(1444,`span`,49),Mw(1445,`"::1/10"`),Tl(),qi$2(1446,`span`,70),Mw(1447,`,`),Tl(),Mw(1448,` `),qi$2(1449,`span`,49),Mw(1450,`"192.168.0.0/24"`),Tl(),Mw(1451,` `),qi$2(1452,`span`,70),Mw(1453,`]`),Tl(),qi$2(1454,`span`,70),Mw(1455,`,`),Tl(),Mw(1456,`
    `),qi$2(1457,`span`,71),Mw(1458,`"EndpointWhitelist"`),Tl(),qi$2(1459,`span`,70),Mw(1460,`:`),Tl(),Mw(1461,` `),qi$2(1462,`span`,70),Mw(1463,`[`),Tl(),Mw(1464,`
      `),qi$2(1465,`span`,49),Mw(1466,`"post:/api/v1.0/identity"`),Tl(),qi$2(1467,`span`,70),Mw(1468,`,`),Tl(),Mw(1469,`
      `),qi$2(1470,`span`,49),Mw(1471,`"post:/api/v1.0/identity/login"`),Tl(),qi$2(1472,`span`,70),Mw(1473,`,`),Tl(),Mw(1474,`
      `),qi$2(1475,`span`,49),Mw(1476,`"get:/*.json"`),Tl(),qi$2(1477,`span`,70),Mw(1478,`,`),Tl(),Mw(1479,`
      `),qi$2(1480,`span`,49),Mw(1481,`"get:/*.js"`),Tl(),qi$2(1482,`span`,70),Mw(1483,`,`),Tl(),Mw(1484,`
      `),qi$2(1485,`span`,49),Mw(1486,`"get:/*.css"`),Tl(),qi$2(1487,`span`,70),Mw(1488,`,`),Tl(),Mw(1489,`
      `),qi$2(1490,`span`,49),Mw(1491,`"get:/*.ico"`),Tl(),Mw(1492,`
    `),qi$2(1493,`span`,70),Mw(1494,`]`),Tl(),qi$2(1495,`span`,70),Mw(1496,`,`),Tl(),Mw(1497,`
    `),qi$2(1498,`span`,71),Mw(1499,`"ClientWhitelist"`),Tl(),qi$2(1500,`span`,70),Mw(1501,`:`),Tl(),Mw(1502,` `),qi$2(1503,`span`,70),Mw(1504,`[`),Tl(),Mw(1505,` `),qi$2(1506,`span`,49),Mw(1507,`"ClientWhitelist@email.com1"`),Tl(),Mw(1508,` `),qi$2(1509,`span`,70),Mw(1510,`]`),Tl(),qi$2(1511,`span`,70),Mw(1512,`,`),Tl(),Mw(1513,`
    `),qi$2(1514,`span`,71),Mw(1515,`"QuotaExceededResponse"`),Tl(),qi$2(1516,`span`,70),Mw(1517,`:`),Tl(),Mw(1518,` `),qi$2(1519,`span`,70),Mw(1520,`{`),Tl(),Mw(1521,`
      `),qi$2(1522,`span`,71),Mw(1523,`"Content"`),Tl(),qi$2(1524,`span`,70),Mw(1525,`:`),Tl(),Mw(1526,` `),qi$2(1527,`span`,49),Mw(1528,`"Quota exceeded. Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP address is {3}"`),Tl(),qi$2(1529,`span`,70),Mw(1530,`,`),Tl(),Mw(1531,`
      `),qi$2(1532,`span`,71),Mw(1533,`"ContentType"`),Tl(),qi$2(1534,`span`,70),Mw(1535,`:`),Tl(),Mw(1536,` `),qi$2(1537,`span`,49),Mw(1538,`"application/json"`),Tl(),Mw(1539,`
    `),qi$2(1540,`span`,70),Mw(1541,`}`),Tl(),qi$2(1542,`span`,70),Mw(1543,`,`),Tl(),Mw(1544,`
    `),qi$2(1545,`span`,71),Mw(1546,`"GeneralRules"`),Tl(),qi$2(1547,`span`,70),Mw(1548,`:`),Tl(),Mw(1549,` `),qi$2(1550,`span`,70),Mw(1551,`[`),Tl(),Mw(1552,`
    `),qi$2(1553,`span`,70),Mw(1554,`]`),Tl(),Mw(1555,`
  `),qi$2(1556,`span`,70),Mw(1557,`}`),Tl(),qi$2(1558,`span`,70),Mw(1559,`,`),Tl(),Mw(1560,`

  `),qi$2(1561,`span`,71),Mw(1562,`"IpRateLimitPolicies"`),Tl(),qi$2(1563,`span`,70),Mw(1564,`:`),Tl(),Mw(1565,` `),qi$2(1566,`span`,70),Mw(1567,`{`),Tl(),Mw(1568,`
    `),qi$2(1569,`span`,71),Mw(1570,`"IpRules"`),Tl(),qi$2(1571,`span`,70),Mw(1572,`:`),Tl(),Mw(1573,` `),qi$2(1574,`span`,70),Mw(1575,`[`),Tl(),Mw(1576,`
    `),qi$2(1577,`span`,70),Mw(1578,`]`),Tl(),Mw(1579,`
  `),qi$2(1580,`span`,70),Mw(1581,`}`),Tl(),Mw(1582,`
`),qi$2(1583,`span`,70),Mw(1584,`}`),Tl()()(),qi$2(1585,`h2`,72)(1586,`span`),Mw(1587,`Proof of Concept`),Tl(),qi$2(1588,`a`,73),Mw(1589,`#`),Tl()(),qi$2(1590,`ol`)(1591,`li`),Mw(1592,`Clone `),qi$2(1593,`a`,30),Mw(1594,`our GitHub repository`),Tl()(),qi$2(1595,`li`),Mw(1596,`Follow the instruction form the Readme.md`),Tl(),qi$2(1597,`li`),Mw(1598,`Change following in `),qi$2(1599,`a`,43),Mw(1600,`appsettings.json`),Tl(),Mw(1601,`: `),qi$2(1602,`code`),Mw(1603,`SecurityTokenDescriptorExpiresInMinutes`),Tl(),Mw(1604,`: 10, `),qi$2(1605,`code`),Mw(1606,`SecurityTokenRefreshRate`),Tl(),Mw(1607,`: 0.9 (both places)`),Tl(),qi$2(1608,`li`),Mw(1609,`Sign-in as admin using menu: Home -> Sign-in`),Tl(),qi$2(1610,`li`),Mw(1611,`Go to menu Admin->Articles editor`),Tl(),qi$2(1612,`li`),Mw(1613,`Click on New Article button.`),Tl(),qi$2(1614,`li`),Mw(1615,`Fill in the form and wait for 2 minutes.`),Tl(),qi$2(1616,`li`),Mw(1617,`Click Submit button and Yes button`),Tl(),qi$2(1618,`li`),Mw(1619,`A drawer must show up asking to confirm password. It means that your JWT token expired, but you can refresh it.`),Tl()(),qi$2(1620,`h2`,74)(1621,`span`),Mw(1622,`Conclusion`),Tl(),qi$2(1623,`a`,75),Mw(1624,`#`),Tl()(),qi$2(1625,`p`),Mw(1626,`In this article, we introduced JWT token Refresh period concept and used a middleware to implement it. In fact, we used modified source code of RateLimitMiddleware from AspNetCoreRateLimit library. It means that it still can be used to limit public endpoints (See `),qi$2(1627,`a`,43),Mw(1628,`GeneralRules`),Tl(),Mw(1629,` example). We implemented a way for testing the middleware with MyTested library. Finally, we provided a compiled .NET application for proof of concept.`),Tl(),qi$2(1630,`h2`,76)(1631,`span`),Mw(1632,`Credits`),Tl(),qi$2(1633,`a`,77),Mw(1634,`#`),Tl()(),qi$2(1635,`ul`)(1636,`li`)(1637,`a`,78),Mw(1638,`Ivaylo Kenov`),Tl()(),qi$2(1639,`li`)(1640,`a`,79),Mw(1641,`Kalin Tsenkov`),Tl()(),qi$2(1642,`li`)(1643,`a`,80),Mw(1644,`Steve Smith`),Tl()(),qi$2(1645,`li`)(1646,`a`,81),Mw(1647,`Jason Taylor`),Tl()(),qi$2(1648,`li`)(1649,`a`,82),Mw(1650,`Stefan Prodan`),Tl()(),qi$2(1651,`li`)(1652,`a`,83),Mw(1653,`Mark Cilia Vincenti`),Tl()(),qi$2(1654,`li`)(1655,`a`,84),Mw(1656,`Jimmy Bogard`),Tl()(),qi$2(1657,`li`)(1658,`a`,85),Mw(1659,`Ben Morris`),Tl()()()()()()),o&2&&(IE(),tg(`nzBordered`,!0),IE(6),tg(`nzOffsetTop`,45),IE(6),Ag(`ngModel`,r.enableNavigation),tg(`ngModelOptions`,Hw(7,yi)),lD(),IE(),tg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae,bt,re,Bt,Et,zg,cd,cr$1,ir,Fa,I9,O9,Vn,qi$1,_n,ji$1,Jo,Za,El,ga$1,ma$1,So,Ve,pe,wu],encapsulation:2})}return a})();var ki=()=>({standalone:!0});function vi(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,74),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,75),ng(3,`nz-icon`,76),Tl()(),Sl()}}function Ni(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,74),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,75),Mw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var mt=110;var Un=(()=>{class a{destroyRef=_(ae$1);router=_(Te$1);#e=_(q0);injector=_(se);viewPort=_(O7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!1;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){sV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-mt>640?this.width.set(640):this.width.set(this.windowWidth()-mt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-mt>640?this.width.set(640):this.width.set(i-mt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(iV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`nz-blog-testing-angular-apps`]],features:[Vw([{provide:lt$1,useValue:{disableCookies:!0,loadApi:!1}}])],decls:206,vars:20,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-0b79795d`,`nzTitle`,`Introduction`],[`nzHref`,`#h-c8cadc22`,`nzTitle`,`Testing tools for Angular`],[`nzHref`,`#h-704dc335`,`nzTitle`,`Testing Angular app together with .NET Core app`],[`nzHref`,`#h-eacbc5c7`,`nzTitle`,`Using Signal type in Angular together with Reactive State library`],[`nzHref`,`#h-948a2e35`,`nzTitle`,`Credits`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20241110-testing-angular-apps.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[`id`,`h-0b79795d`],[`onclick`,`window.location.hash = 'h-0b79795d'`,1,`anchor`],[1,`pic-plus`,2,`text-align`,`center`],[`nzType`,`custom:zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:angular`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nzType`,`custom:ng-zorro`,`nzWidth`,`180px`,`nzHeight`,`180px`],[`nz-row`,``,`nzJustify`,`center`,1,`p-t-24`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/angular-test-example/refs/heads/main/version-2/test-run.png`,`alt`,`test-run`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`href`,`https://cioina.azurewebsites.net/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/huajian123/ng-antd-admin`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/AndyT2503/angular-conduit-signals`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-angular/src`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ngrx/platform/tree/main/modules/component-store/src`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/AndyT2503/angular-conduit-signals/blob/dev/src/app/shared/store/auth.store.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net10.0/wwwroot`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-c8cadc22`],[`onclick`,`window.location.hash = 'h-c8cadc22'`,1,`anchor`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/package.json`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/angular/angular/blob/main/adev/BUILD.bazel`,`target`,`_blank`,`rel`,`noopener noreferrer`],[1,`language-javascript`],[1,`hljs-keyword`],[1,`hljs-title`,`class_`],[1,`hljs-string`],[`id`,`h-704dc335`],[`onclick`,`window.location.hash = 'h-704dc335'`,1,`anchor`],[`href`,`https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://cioina.azurewebsites.net/articles/dotnet-core-testing`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-test-example/tree/main/version-2`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-test-example/blob/main/version-2/home.store.spec.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/ng-zorro-antd-site`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/vitest-browser-angular`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/realworld-apps/realworld/blob/main/specs/api/README.md`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-vite-storybook/blob/main/src/stories/page.stories.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/apps/conduit-e2e/src/auth/auth.spec.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-eacbc5c7`],[`onclick`,`window.location.hash = 'h-eacbc5c7'`,1,`anchor`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/angular-test-example/refs/heads/main/vs.png`,`alt`,`vs`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`nz-image`,``,`nzSrc`,`https://raw.githubusercontent.com/cioina/angular-test-example/refs/heads/main/ng-blog.png`,`alt`,`ng-blog`,3,`width`,`height`,`nzFallback`,`nzPlaceholder`],[`href`,`https://github.com/ngrx/platform`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/cioina/angular-test-example/tree/main/version-1`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/libs/auth/data-access/src/auth.store.ts`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-948a2e35`],[`onclick`,`window.location.hash = 'h-948a2e35'`,1,`anchor`],[`href`,`https://github.com/angular/angular/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/NG-ZORRO/ng-zorro-antd/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ant-design/ant-design-icons/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/ngrx/platform/graphs/contributors`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/huajian123`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/AndyT2503`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/stefanoslig`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(qi$2(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Zh(5,vi,4,0,`ng-container`,5)(6,Ni,4,0,`ng-container`,5),Tl()()(),qi$2(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),cg(`click`,function(){return r.scrollTop()}),Mw(11,`Jump to top`),Tl()(),qi$2(12,`div`,3)(13,`nz-switch`,9),aD(),Rg(`ngModelChange`,function(g){return Aw(r.enableNavigation,g)||(r.enableNavigation=g),g}),cg(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),qi$2(14,`nz-anchor`,10),cg(`nzClick`,function(g){return r.goLink(g)}),ng(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15),Tl()(),qi$2(20,`span`,16),Mw(21,` Testing Angular Applications`),ng(22,`span`,17)(23,`span`,18),qi$2(24,`a`,19),ng(25,`nz-icon`,20),Tl()(),qi$2(26,`article`,21)(27,`h2`,22)(28,`span`),Mw(29,`Introduction`),Tl(),qi$2(30,`a`,23),Mw(31,`#`),Tl()(),qi$2(32,`div`,24),ng(33,`nz-icon`,25),qi$2(34,`span`),Mw(35,`+`),Tl(),ng(36,`nz-icon`,26),qi$2(37,`span`),Mw(38,`=`),Tl(),ng(39,`nz-icon`,27),Tl(),qi$2(40,`div`,28),ng(41,`img`,29),Tl(),qi$2(42,`p`)(43,`a`,30),Mw(44,`Our Angular app`),Tl(),Mw(45,` Is based on `),qi$2(46,`a`,31),Mw(47,`ng-antd-admin`),Tl(),Mw(48,` combined with `),qi$2(49,`a`,32),Mw(50,`angular-conduit-signals`),Tl(),Mw(51,`. In addition, we use following Angular libraries direct form sources: `),qi$2(52,`a`,33),Mw(53,`NG-ZORRO components src`),Tl(),Mw(54,`, `),qi$2(55,`a`,34),Mw(56,`icons-angular src`),Tl(),Mw(57,` and `),qi$2(58,`a`,35),Mw(59,`component-store src`),Tl(),Mw(60,` with some minor changes. All our reactive states look similar to `),qi$2(61,`a`,36),Mw(62,`auth.store.ts`),Tl(),Mw(63,`
The app communicates with the server via REST API controllers built on top of .NET Core 10. The compiled bin code is on `),qi$2(64,`a`,37),Mw(65,`our GitHub repository`),Tl(),Mw(66,` together with `),qi$2(67,`a`,38),Mw(68,`compiled Angular app`),Tl()(),qi$2(69,`h2`,39)(70,`span`),Mw(71,`Testing tools for Angular`),Tl(),qi$2(72,`a`,40),Mw(73,`#`),Tl()(),qi$2(74,`p`),Mw(75,`We use the same tools/packages as in `),qi$2(76,`a`,41),Mw(77,`NG-ZORRO`),Tl(),Mw(78,`, which are the same as in `),qi$2(79,`a`,42),Mw(80,`TEST_DEPS`),Tl(),Mw(81,` plus `),qi$2(82,`code`),Mw(83,`puppeteer`),Tl(),Mw(84,`. In addition, Angular and NG-ZORRO have a lot of classes and functions ready to use right out of the box:`),Tl(),qi$2(85,`pre`,43)(86,`code`)(87,`span`,44),Mw(88,`import`),Tl(),Mw(89,` { `),qi$2(90,`span`,45),Mw(91,`ComponentFixture`),Tl(),Mw(92,`, `),qi$2(93,`span`,45),Mw(94,`TestBed`),Tl(),Mw(95,`, waitForAsync, inject `),qi$2(96,`span`,44),Mw(97,`as`),Tl(),Mw(98,` testInject } `),qi$2(99,`span`,44),Mw(100,`from`),Tl(),Mw(101,` `),qi$2(102,`span`,46),Mw(103,`'@angular/core/testing'`),Tl(),Mw(104,`;
`),qi$2(105,`span`,44),Mw(106,`import`),Tl(),Mw(107,` { dispatchMouseEvent, dispatchFakeEvent, typeInElement } `),qi$2(108,`span`,44),Mw(109,`from`),Tl(),Mw(110,` `),qi$2(111,`span`,46),Mw(112,`'ng-zorro-antd/core/testing'`),Tl(),Mw(113,`;
`),qi$2(114,`span`,44),Mw(115,`import`),Tl(),Mw(116,` { provideNzIconsTesting } `),qi$2(117,`span`,44),Mw(118,`from`),Tl(),Mw(119,` `),qi$2(120,`span`,46),Mw(121,`'ng-zorro-antd/icon/testing'`),Tl(),Mw(122,`;`),Tl()(),qi$2(123,`h2`,47)(124,`span`),Mw(125,`Testing Angular app together with .NET Core app`),Tl(),qi$2(126,`a`,48),Mw(127,`#`),Tl()(),qi$2(128,`p`),Mw(129,`Our actual(up to date) `),qi$2(130,`a`,49),Mw(131,`test project`),Tl(),Mw(132,` for our .NET Core app uses in memory database which is very convenient for testing (read more about it `),qi$2(133,`a`,50),Mw(134,`here`),Tl(),Mw(135,` ) Next, would be great to test on a real database. So, all our Angular test from `),qi$2(136,`a`,51),Mw(137,`our GitHub repository`),Tl(),Mw(138,` will connect with our .NET Core app which is connected to real MS SQL database. Therefore, it represents a type of integration test.
All the files ending in `),qi$2(139,`a`,52),Mw(140,`*.store.spec.ts`),Tl(),Mw(141,` can be considered as real API testing which is an alternative to `),qi$2(142,`a`,53),Mw(143,`Karma/Puppeteer`),Tl(),Mw(144,`, `),qi$2(145,`a`,54),Mw(146,`Vitest`),Tl(),Mw(147,`, `),qi$2(148,`a`,55),Mw(149,`Bruno`),Tl(),Mw(150,`, `),qi$2(151,`a`,56),Mw(152,`Storybook`),Tl(),Mw(153,` or `),qi$2(154,`a`,57),Mw(155,`Playwright`),Tl()(),qi$2(156,`h2`,58)(157,`span`),Mw(158,`Using Signal type in Angular together with Reactive State library`),Tl(),qi$2(159,`a`,59),Mw(160,`#`),Tl()(),qi$2(161,`div`,28),ng(162,`img`,60),Tl(),qi$2(163,`div`,28),ng(164,`img`,61),Tl(),qi$2(165,`p`),Mw(166,`Before Signal type became native in Angular, we used `),qi$2(167,`a`,62),Mw(168,`Reactive State library`),Tl(),Mw(169,` for `),qi$2(170,`a`,63),Mw(171,`our integration tests`),Tl(),Mw(172,`. Now, the library has implemented two ways of using Signals: `),qi$2(173,`a`,64),Mw(174,`@ngrx/signals`),Tl(),Mw(175,` and `),qi$2(176,`a`,36),Mw(177,`@ngrx/component-store`),Tl(),Mw(178,`. We use the second one direct from sources.`),Tl(),qi$2(179,`h2`,65)(180,`span`),Mw(181,`Credits`),Tl(),qi$2(182,`a`,66),Mw(183,`#`),Tl()(),qi$2(184,`ul`)(185,`li`)(186,`a`,67),Mw(187,`Angular contributors`),Tl()(),qi$2(188,`li`)(189,`a`,68),Mw(190,`NG-ZORRO contributors`),Tl()(),qi$2(191,`li`)(192,`a`,69),Mw(193,`Ant Design contributors`),Tl()(),qi$2(194,`li`)(195,`a`,70),Mw(196,`Reactive State for Angular contributors`),Tl()(),qi$2(197,`li`)(198,`a`,71),Mw(199,`hua jian`),Tl()(),qi$2(200,`li`)(201,`a`,72),Mw(202,`Andy Tu Hoang`),Tl()(),qi$2(203,`li`)(204,`a`,73),Mw(205,`Stefanos Lignos`),Tl()()()()()()),o&2&&(IE(),tg(`nzBordered`,!0),IE(6),tg(`nzOffsetTop`,45),IE(6),Ag(`ngModel`,r.enableNavigation),tg(`ngModelOptions`,Hw(19,ki)),lD(),IE(),tg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()),IE(27),tg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback),IE(121),tg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback),IE(2),tg(`width`,r.width())(`height`,r.width())(`nzFallback`,r.fallback)(`nzPlaceholder`,r.fallback))},dependencies:[ml,Nr,Ds,Te,ae,bt,re,Bt,Et,zg,cd,cr$1,ir,Fa,I9,O9,Vn,Wn$1,qi$1,_n,ji$1,Jo,Za,El,ga$1,ma$1,So,Ve,pe,wu],encapsulation:2})}return a})();var Ii=()=>({standalone:!0});function Qi(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,93),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,94),ng(3,`nz-icon`,95),Tl()(),Sl()}}function Mi(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`a`,93),cg(`click`,function(){md(i);let r=Qb();return yd(r.clickLink())}),qi$2(2,`h3`,94),Mw(3,`Alexei Cioina's blog`),Tl()(),Sl()}}var dt=110;var jn=(()=>{class a{destroyRef=_(ae$1);router=_(Te$1);#e=_(q0);injector=_(se);viewPort=_(O7);zone=_(de);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!0;isFirstTime=!0;windowWidth=this.#e.selectors.width;windowHeight=this.#e.selectors.height;themesOptions=this.#e.selectors.themesMode;styleThemeMode=this.#e.selectors.styleThemeMode;isCollapsed=this.#e.selectors.isCollapsed;isOverMode=this.#e.selectors.isOverMode;isTopMode=Ll(()=>this.themesOptions().mode===`top`);width=Gt(640);fallback=`data:image/png;base64,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`;isSwitcher=this.#e.selectors.isSwitcher;enableNavigation=this.isSwitcher();constructor(){sV(this.isOverMode,{injector:this.injector}).subscribe(i=>{i?this.windowWidth()-dt>640?this.width.set(640):this.width.set(this.windowWidth()-dt-5):this.isCollapsed()||(this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.windowWidth,{injector:this.injector}).subscribe(i=>{this.isTopMode()?i-dt>640?this.width.set(640):this.width.set(i-dt-5):this.isOverMode()||(this.windowWidth()<this.windowHeight()?this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155):this.windowWidth()-155>640?this.width.set(640):this.width.set(this.windowWidth()-155))}),sV(this.isSwitcher,{injector:this.injector}).subscribe(i=>{i&&this.isFirstTime&&(this.enableNavigation=!0,this.isFirstTime=!1)}),this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(i){this.zone.runOutsideAngular(()=>Re(i).pipe(iV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0,theme:this.styleThemeMode()===`dark`?`dark`:`default`}),this.mermaid?.default.run()}))}clickLink(){this.#e.selectors.isAdminArticles()?this.router.navigate([`admin`,`articles`]):this.router.navigate([`articles`])}disableEnable(){this.#e.setSwitcher(this.enableNavigation)}goLink(i){window&&(window.location.hash=i)}scrollTop(){window&&(window.location.hash=``),this.viewPort.scrollToPosition([0,0])}static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`nz-blog-mermaid`]],features:[Vw([{provide:lt$1,useValue:{disableCookies:!0,loadApi:!1}}])],decls:251,vars:8,consts:[[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`start`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nz-row`,``,`nzJustify`,`end`],[`nz-button`,``,`nzType`,`link`,`nzSize`,`small`,3,`click`],[`nzSize`,`small`,3,`ngModelChange`,`ngModel`,`ngModelOptions`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzOffsetTop`,`nzAffix`,`nzShow`],[`nzHref`,`#h-b99efddd`,`nzTitle`,`Invalid Diagrams`],[`nzHref`,`#h-839c4527`,`nzTitle`,`Invalid type`],[`nzHref`,`#h-3ee0c881`,`nzTitle`,`Invalid content`],[`nzHref`,`#h-b44a7c95`,`nzTitle`,`Sequence Diagram`],[`nzHref`,`#h-9f629726`,`nzTitle`,`Sequence Diagram (forest theme directive)`],[`nzHref`,`#h-ba0db7f3`,`nzTitle`,`Gantt Chart`],[`nzHref`,`#h-70d1834f`,`nzTitle`,`Flow Chart`],[`nzHref`,`#h-d92c77a8`,`nzTitle`,`With Markdown:`],[`nzHref`,`#h-0bb074dd`,`nzTitle`,`Class Diagram`],[`nzHref`,`#h-884021fe`,`nzTitle`,`State Diagram`],[`nzHref`,`#h-1dddb92d`,`nzTitle`,`Entity Relationship Diagram`],[`nzHref`,`#h-cc18880d`,`nzTitle`,`User Journey`],[`nzHref`,`#h-6199bdbb`,`nzTitle`,`Pie Chart`],[`nzHref`,`#h-e0a1267c`,`nzTitle`,`Requirement Diagram`],[`nzHref`,`#h-48601e7f`,`nzTitle`,`Gitgraph (Git) Diagram`],[`nzHref`,`#h-bc3ffeb2`,`nzTitle`,`Mermaid in tabs`],[`nzHref`,`#h-8e40f9ee`,`nzTitle`,`Mindmap`],[`nzHref`,`#h-e3199e80`,`nzTitle`,`Quadrant Chart`],[`nzHref`,`#h-a5836c8e`,`nzTitle`,`Architecture Diagram`],[`nzHref`,`#h-6c728fee`,`nzTitle`,`ELK Styling`],[`nzHref`,`#h-df7ec4d7`,`nzTitle`,`Dagre`],[`nzHref`,`#h-790fe0d1`,`nzTitle`,`ELK er diagram layout`],[1,`markdown-title`],[1,`subtitle`],[1,`widget`],[`aria-label`,`Edit this page on Github`,`href`,`https://github.com/cioina/cioina.azurewebsites.net/edit/main/blog/20250825-mermaid.md`,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`edit-button`],[`nzType`,`edit`],[1,`markdown`],[2,`border-color`,`#faad14`],[`href`,`https://github.com/facebook/docusaurus/blob/main/website/_dogfooding/_pages%20tests/diagrams.mdx`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/facebook/docusaurus/blob/main/LICENSE-docs`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-b99efddd`],[`onclick`,`window.location.hash = 'h-b99efddd'`,1,`anchor`],[`id`,`h-839c4527`],[`onclick`,`window.location.hash = 'h-839c4527'`,1,`anchor`],[1,`mermaid`],[`id`,`h-3ee0c881`],[`onclick`,`window.location.hash = 'h-3ee0c881'`,1,`anchor`],[`id`,`h-b44a7c95`],[`onclick`,`window.location.hash = 'h-b44a7c95'`,1,`anchor`],[`id`,`h-9f629726`],[`onclick`,`window.location.hash = 'h-9f629726'`,1,`anchor`],[1,`language-bash`],[1,`hljs-string`],[`id`,`h-ba0db7f3`],[`onclick`,`window.location.hash = 'h-ba0db7f3'`,1,`anchor`],[`id`,`h-70d1834f`],[`onclick`,`window.location.hash = 'h-70d1834f'`,1,`anchor`],[`id`,`h-d92c77a8`],[`onclick`,`window.location.hash = 'h-d92c77a8'`,1,`anchor`],[`id`,`h-0bb074dd`],[`onclick`,`window.location.hash = 'h-0bb074dd'`,1,`anchor`],[`id`,`h-884021fe`],[`onclick`,`window.location.hash = 'h-884021fe'`,1,`anchor`],[`id`,`h-1dddb92d`],[`onclick`,`window.location.hash = 'h-1dddb92d'`,1,`anchor`],[`id`,`h-cc18880d`],[`onclick`,`window.location.hash = 'h-cc18880d'`,1,`anchor`],[`href`,`https://github.com/mermaid-js/mermaid/issues/3501`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6199bdbb`],[`onclick`,`window.location.hash = 'h-6199bdbb'`,1,`anchor`],[`id`,`h-e0a1267c`],[`onclick`,`window.location.hash = 'h-e0a1267c'`,1,`anchor`],[`id`,`h-48601e7f`],[`onclick`,`window.location.hash = 'h-48601e7f'`,1,`anchor`],[`id`,`h-bc3ffeb2`],[`onclick`,`window.location.hash = 'h-bc3ffeb2'`,1,`anchor`],[`id`,`h-8e40f9ee`],[`onclick`,`window.location.hash = 'h-8e40f9ee'`,1,`anchor`],[`id`,`h-e3199e80`],[`onclick`,`window.location.hash = 'h-e3199e80'`,1,`anchor`],[`id`,`h-a5836c8e`],[`onclick`,`window.location.hash = 'h-a5836c8e'`,1,`anchor`],[`href`,`https://mermaid.js.org/syntax/architecture`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://github.com/facebook/docusaurus/discussions/10508`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-6c728fee`],[`onclick`,`window.location.hash = 'h-6c728fee'`,1,`anchor`],[`href`,`https://mermaid.js.org/syntax/entityRelationshipDiagram.html#layout`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`h-df7ec4d7`],[`onclick`,`window.location.hash = 'h-df7ec4d7'`,1,`anchor`],[`id`,`h-790fe0d1`],[`onclick`,`window.location.hash = 'h-790fe0d1'`,1,`anchor`],[3,`click`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`arrow-left`]],template:function(o,r){o&1&&(qi$2(0,`div`,0)(1,`nz-card`,1)(2,`div`,2)(3,`div`,3)(4,`nz-space`,4),Zh(5,Qi,4,0,`ng-container`,5)(6,Mi,4,0,`ng-container`,5),Tl()()(),qi$2(7,`nz-affix`,6)(8,`div`,7)(9,`div`,3)(10,`a`,8),cg(`click`,function(){return r.scrollTop()}),Mw(11,`Jump to top`),Tl()(),qi$2(12,`div`,3)(13,`nz-switch`,9),aD(),Rg(`ngModelChange`,function(g){return Aw(r.enableNavigation,g)||(r.enableNavigation=g),g}),cg(`ngModelChange`,function(){return r.disableEnable()}),Tl()()(),qi$2(14,`nz-anchor`,10),cg(`nzClick`,function(g){return r.goLink(g)}),ng(15,`nz-link`,11)(16,`nz-link`,12)(17,`nz-link`,13)(18,`nz-link`,14)(19,`nz-link`,15)(20,`nz-link`,16)(21,`nz-link`,17)(22,`nz-link`,18)(23,`nz-link`,19)(24,`nz-link`,20)(25,`nz-link`,21)(26,`nz-link`,22)(27,`nz-link`,23)(28,`nz-link`,24)(29,`nz-link`,25)(30,`nz-link`,26)(31,`nz-link`,27)(32,`nz-link`,28)(33,`nz-link`,29)(34,`nz-link`,30)(35,`nz-link`,31)(36,`nz-link`,32),Tl()(),qi$2(37,`span`,33),Mw(38,` Diagram Examples`),ng(39,`span`,34)(40,`span`,35),qi$2(41,`a`,36),ng(42,`nz-icon`,37),Tl()(),qi$2(43,`article`,38)(44,`blockquote`,39)(45,`p`)(46,`strong`),Mw(47,`This is a modified version of the `),qi$2(48,`a`,40),Mw(49,`Docusaurus original`),Tl(),Mw(50,` document provided under `),qi$2(51,`a`,41),Mw(52,`Creative Commons public licenses`),Tl(),Mw(53,`.`),Tl()()(),qi$2(54,`h2`,42)(55,`span`),Mw(56,`Invalid Diagrams`),Tl(),qi$2(57,`a`,43),Mw(58,`#`),Tl()(),qi$2(59,`p`),Mw(60,`Those errors should not crash the whole page`),Tl(),qi$2(61,`h3`,44)(62,`span`),Mw(63,`Invalid type`),Tl(),qi$2(64,`a`,45),Mw(65,`#`),Tl()(),qi$2(66,`pre`,46),Mw(67,`badType
    participant Alice
    participant Bob`),Tl(),qi$2(68,`h3`,47)(69,`span`),Mw(70,`Invalid content`),Tl(),qi$2(71,`a`,48),Mw(72,`#`),Tl()(),qi$2(73,`pre`,46),Mw(74,`sequenceDiagram
    badInstruction Alice
    participant Bob`),Tl(),qi$2(75,`h2`,49)(76,`span`),Mw(77,`Sequence Diagram`),Tl(),qi$2(78,`a`,50),Mw(79,`#`),Tl()(),qi$2(80,`pre`,46),Mw(81,`sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Health check
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts `),ng(82,`br`),Mw(83,`prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`),Tl(),qi$2(84,`h2`,51)(85,`span`),Mw(86,`Sequence Diagram (forest theme directive)`),Tl(),qi$2(87,`a`,52),Mw(88,`#`),Tl()(),qi$2(89,`p`),Mw(90,`It is possible to override default config locally with Mermaid text directives such as:`),Tl(),qi$2(91,`pre`,53)(92,`code`),Mw(93,`%%{init: { `),qi$2(94,`span`,54),Mw(95,`"theme"`),Tl(),Mw(96,`: `),qi$2(97,`span`,54),Mw(98,`"forest"`),Tl(),Mw(99,` } }%%`),Tl()(),qi$2(100,`pre`,46),Mw(101,`%%{init: { "theme": "forest" } }%%

sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Health check
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts `),ng(102,`br`),Mw(103,`prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`),Tl(),qi$2(104,`h2`,55)(105,`span`),Mw(106,`Gantt Chart`),Tl(),qi$2(107,`a`,56),Mw(108,`#`),Tl()(),qi$2(109,`pre`,46),Mw(110,`gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d`),Tl(),qi$2(111,`h2`,57)(112,`span`),Mw(113,`Flow Chart`),Tl(),qi$2(114,`a`,58),Mw(115,`#`),Tl()(),qi$2(116,`pre`,46),Mw(117,`flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]`),Tl(),qi$2(118,`h3`,59)(119,`span`),Mw(120,`With Markdown:`),Tl(),qi$2(121,`a`,60),Mw(122,`#`),Tl()(),qi$2(123,`pre`,46),Mw(124,`flowchart LR
    markdown["\`This **is** _Markdown_\`"]
    newLines["\`Line1
    Line 2
    Line 3\`"]
    markdown --> newLines`),Tl(),qi$2(125,`h2`,61)(126,`span`),Mw(127,`Class Diagram`),Tl(),qi$2(128,`a`,62),Mw(129,`#`),Tl()(),qi$2(130,`pre`,46),Mw(131,` classDiagram
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
      }`),Tl(),qi$2(132,`h2`,63)(133,`span`),Mw(134,`State Diagram`),Tl(),qi$2(135,`a`,64),Mw(136,`#`),Tl()(),qi$2(137,`pre`,46),Mw(138,`stateDiagram-v2
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
    }`),Tl(),qi$2(139,`h2`,65)(140,`span`),Mw(141,`Entity Relationship Diagram`),Tl(),qi$2(142,`a`,66),Mw(143,`#`),Tl()(),qi$2(144,`pre`,46),Mw(145,`erDiagram
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
    }`),Tl(),qi$2(146,`h2`,67)(147,`span`),Mw(148,`User Journey`),Tl(),qi$2(149,`a`,68),Mw(150,`#`),Tl()(),qi$2(151,`pre`,46),Mw(152,`journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me`),Tl(),qi$2(153,`blockquote`)(154,`p`),Mw(155,`If there's too much space above it's due to a `),qi$2(156,`a`,69),Mw(157,`Mermaid bug`),Tl()()(),qi$2(158,`h2`,70)(159,`span`),Mw(160,`Pie Chart`),Tl(),qi$2(161,`a`,71),Mw(162,`#`),Tl()(),qi$2(163,`pre`,46),Mw(164,`pie showData
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5`),Tl(),qi$2(165,`h2`,72)(166,`span`),Mw(167,`Requirement Diagram`),Tl(),qi$2(168,`a`,73),Mw(169,`#`),Tl()(),qi$2(170,`pre`,46),Mw(171,`    requirementDiagram

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
    test_req <- copies - test_entity2`),Tl(),qi$2(172,`h2`,74)(173,`span`),Mw(174,`Gitgraph (Git) Diagram`),Tl(),qi$2(175,`a`,75),Mw(176,`#`),Tl()(),qi$2(177,`pre`,46),Mw(178,`%%{init: { 'logLevel': 'debug', 'theme': 'base' } }%%
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
        merge release`),Tl(),qi$2(179,`h2`,76)(180,`span`),Mw(181,`Mermaid in tabs`),Tl(),qi$2(182,`a`,77),Mw(183,`#`),Tl()(),qi$2(184,`p`),Mw(185,`The following mermaid diagram is shown:`),Tl(),qi$2(186,`pre`,46),Mw(187,`graph LR
  a ---> c(10)
  b ---> c(10)`),Tl(),qi$2(188,`h2`,78)(189,`span`),Mw(190,`Mindmap`),Tl(),qi$2(191,`a`,79),Mw(192,`#`),Tl()(),qi$2(193,`pre`,46),Mw(194,`mindmap
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
        Circle CI`),Tl(),qi$2(195,`h2`,80)(196,`span`),Mw(197,`Quadrant Chart`),Tl(),qi$2(198,`a`,81),Mw(199,`#`),Tl()(),qi$2(200,`pre`,46),Mw(201,`quadrantChart
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
    Campaign F: [0.35, 0.78]`),Tl(),qi$2(202,`h2`,82)(203,`span`),Mw(204,`Architecture Diagram`),Tl(),qi$2(205,`a`,83),Mw(206,`#`),Tl()(),qi$2(207,`ul`)(208,`li`),Mw(209,`See `),qi$2(210,`a`,84),Mw(211,`1`),Tl()(),qi$2(212,`li`),Mw(213,`See `),qi$2(214,`a`,85),Mw(215,`2`),Tl()()(),qi$2(216,`pre`,46),Mw(217,`architecture-beta
    group api(cloud)[API]

    service db(database)[Database] in api
    service disk1(disk)[Storage] in api
    service disk2(disk)[Storage] in api
    service server(server)[Server] in api

    db:L -- R:server
    disk1:T -- B:server
    disk2:T -- B:db`),Tl(),qi$2(218,`h2`,86)(219,`span`),Mw(220,`ELK Styling`),Tl(),qi$2(221,`a`,87),Mw(222,`#`),Tl()(),qi$2(223,`p`),Mw(224,`Mermaid provides an `),qi$2(225,`a`,88),Mw(226,`ELK layout`),Tl()(),qi$2(227,`h3`,89)(228,`span`),Mw(229,`Dagre`),Tl(),qi$2(230,`a`,90),Mw(231,`#`),Tl()(),qi$2(232,`p`),Mw(233,`This is a "classical" Mermaid diagram, using the default Dagre layout.`),Tl(),qi$2(234,`pre`,46),Mw(235,`erDiagram

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
`),Tl(),qi$2(236,`h3`,91)(237,`span`),Mw(238,`ELK er diagram layout`),Tl(),qi$2(239,`a`,92),Mw(240,`#`),Tl()(),qi$2(241,`p`),Mw(242,`This ER diagram should look different, using the ELK layout.`),Tl(),qi$2(243,`pre`,46),Mw(244,`---
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
`),Tl(),qi$2(245,`p`),Mw(246,`Mermaid also provides a way of setting config parameters using a directive `),qi$2(247,`code`),Mw(248,`%%{init:{"layout":"elk"}}%%`),Tl()(),qi$2(249,`pre`,46),Mw(250,`%%{init:{"layout":"elk"}}%%
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
`),Tl()()()()),o&2&&(IE(),tg(`nzBordered`,!0),IE(6),tg(`nzOffsetTop`,45),IE(6),Ag(`ngModel`,r.enableNavigation),tg(`ngModelOptions`,Hw(7,Ii)),lD(),IE(),tg(`nzOffsetTop`,63)(`nzAffix`,!1)(`nzShow`,r.isSwitcher()))},dependencies:[ml,Nr,Ds,Te,ae,bt,re,Bt,Et,zg,cd,cr$1,ir,Fa,I9,O9,Vn,qi$1,_n,ji$1,Jo,Za,El,ga$1,ma$1,So,Ve,pe,wu],encapsulation:2})}return a})();var _t=(()=>{class a extends Un$1{#e=_(q0);#t=_(Qu);#a=_(l0);#i=_(O7);articleListConfig=this.#e.selectors.articleListConfig;ngrxOnStoreInit(){this.setState({articleList:[],tags:[],articleCount:0})}getTags=this.effect(bu(i=>(i.loading.set(!0),this.#a.getTags(i.params).pipe(At(o=>{this.patchState({tags:o.tags})},o=>{q1()?console.error(`Get Tags Failed`,o):console.warn(`Get Tags Failed: ${o.message}`)},()=>{i.loading.set(!1)})))));queryArticle=this.effect(Tu(i=>{this.#e.patchState({articleListConfig:s(r({},this.articleListConfig()),{currentPage:i.params.offset?this.articleListConfig().currentPage:1,filters:{limit:i.params.limit,offset:i.params.offset,tags:i.params.tags,createdAtAsc:i.params.createdAtAsc}})}),this.#n(i.loading)}));onOffsetChange=this.effect(Tu(i=>{this.#e.patchState({articleListConfig:s(r({},this.articleListConfig()),{currentPage:i.offset,filters:s(r({},this.articleListConfig().filters),{offset:Number(this.articleListConfig().filters.limit)*(i.offset-1)})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));onLimitChange=this.effect(Tu(i=>{this.#e.patchState({articleListConfig:s(r({},this.articleListConfig()),{currentPage:1,filters:s(r({},this.articleListConfig().filters),{limit:i.limit,offset:0})})}),this.#i.scrollToPosition([0,0]),this.#n(i.loading)}));#n=this.effect(bu(i=>(i.set(!0),(()=>{let o=this.articleListConfig()?.filters;return this.#t.getPublicArticles({limit:o.limit,offset:o.offset,tags:o.tags,createdAtAsc:o.createdAtAsc})})().pipe(At(o=>{this.patchState({articleList:o.articles,articleCount:o.total})},o=>{q1()?console.error(`getPublicArticles Failed`,o):console.warn(`getPublicArticles Failed: ${o.message}`),this.#e.openMessageDrawer(Gt(o.message))},()=>{i.set(!1)})))));static ɵfac=(()=>{let i;return function(r){return(i||(i=Ev(a)))(r||a)}})();static ɵprov=fe({token:a,factory:a.ɵfac})}return a})();var Bi=(a,h,i)=>[a,h,i];function Ri(a,h){a&1&&(qi$2(0,`div`,9),ng(1,`nz-spin`,11),Tl())}function Di(a,h){if(a&1&&(ng(0,`nz-icon`,14),Mw(1)),a&2){let i=Qb().$implicit;IE(),xl(` `,i.title.length,` `)}}function Li(a,h){if(a&1&&(ng(0,`nz-icon`,15),Mw(1)),a&2){let i=Qb().$implicit;IE(),xl(` `,i.slug.length,` `)}}function Pi(a,h){if(a&1&&(ng(0,`nz-icon`,16),Mw(1)),a&2){let i=Qb().$implicit;IE(),xl(` `,i.id,` `)}}function Ji(a,h){if(a&1){let i=Bb();qi$2(0,`a`,17),cg(`click`,function(){md(i);let r=Qb().$implicit,c=Qb();return yd(c.clickArticleLink(r))}),Mw(1),Tl()}if(a&2){let i=Qb().$implicit;IE(),xl(` `,i.title,` `)}}function Fi(a,h){if(a&1&&Mw(0),a&2){let i=Qb(2).$implicit;xl(` `,i.description,` `)}}function Hi(a,h){if(a&1){let i=Bb();Sb(0,Fi,1,1),qi$2(1,`a`,18),cg(`click`,function(){md(i);let r=Qb().$implicit,c=Qb();return yd(c.clickArticleLink(r))}),Mw(2,`Read more`),ng(3,`nz-icon`,19),Tl()}if(a&2){let i=Qb().$implicit,o=Qb();Ab(i.published?0:-1),IE(),tg(`nzLoading`,o.routerLinkLoadingId()===i.id)(`disabled`,o.routerLinkLoadingId()!==i.id&&o.routerLinkLoadingId()!==0)}}function Ui(a,h){if(a&1&&(qi$2(0,`div`,20)(1,`div`,21)(2,`h5`,22),Mw(3),zw(4,`date`),Tl()()(),qi$2(5,`div`,23)(6,`div`,24),ng(7,`img`,25),Tl()()),a&2){let i=Qb().$implicit,o=Qb();IE(),tg(`id`,kw(i.slug)),IE(2),Ng(Yw(4,9,i.createdAt,`MMMM d, yyyy`)),IE(4),tg(`nzSrc`,Lw(`https://picsum.photos/id/`,i.id,`/300/200.jpg`))(`alt`,kw(i.title))(`nzFallback`,o.fallback)(`nzPlaceholder`,o.fallback)}}function ji(a,h){if(a&1&&(qi$2(0,`nz-list-item`,12),Zh(1,Di,2,1,`ng-template`,null,3,Jw)(3,Li,2,1,`ng-template`,null,4,Jw)(5,Pi,2,1,`ng-template`,null,5,Jw),qi$2(7,`nz-list-item-meta`,13),Zh(8,Ji,2,1,`ng-template`,null,6,Jw)(10,Hi,4,3,`ng-template`,null,7,Jw),Tl(),Zh(12,Ui,8,12,`ng-template`,null,8,Jw),Tl()),a&2){let i=nw(2),o=nw(4),r=nw(6),c=nw(9),g=nw(11),_=nw(13);tg(`nzActions`,Uw(4,Bi,i,o,r))(`nzExtra`,_),IE(7),tg(`nzTitle`,c)(`nzDescription`,g)}}function Oi(a,h){if(a&1&&(qi$2(0,`div`,20)(1,`div`,24)(2,`h5`,26),Mw(3),Tl()()()),a&2){let i=h,o=Qb(2);IE(3),xg(` `,o.articleListConfig().filters.limit*(o.articleListConfig().currentPage-1)+1,` - `,o.articleListConfig().filters.limit*o.articleListConfig().currentPage>i?i:o.articleListConfig().filters.limit*o.articleListConfig().currentPage,` of `,i,` records `)}}function Ki(a,h){if(a&1&&Sb(0,Oi,4,3,`div`,20),a&2){let i,o=Qb();Ab((i=o.articlesCount())?0:-1,i)}}function Wi(a,h){if(a&1){let i=Bb();qi$2(0,`nz-pagination`,27),cg(`nzPageSizeChange`,function(r){md(i);let c=Qb();return yd(c.setPageSize(r))})(`nzPageIndexChange`,function(r){md(i);let c=Qb();return yd(c.setPage(r))}),Tl()}if(a&2){let i=Qb();tg(`nzShowSizeChanger`,!0)(`nzPageSize`,i.articleListConfig().filters.limit)(`nzPageIndex`,i.articleListConfig().currentPage)(`nzTotal`,i.articlesCount())}}var On=(()=>{class a{articleList;articlesCount;isLoading;articleListConfig;oldLimit;nzSetPage=new Qe;nzSetPageSize=new Qe;router=_(Te$1);changeDetectorRef=_(V1);routerLinkLoadingId=Gt(0);fallback=`data:image/png;base64,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`;clickArticleLink(i){this.routerLinkLoadingId.set(i.id),this.changeDetectorRef.markForCheck(),setTimeout(()=>{this.router.navigate([`articles`,i.slug])})}setPage(i){this.oldLimit()===this.articleListConfig().filters.limit?this.nzSetPage.emit(i):this.oldLimit.set(this.articleListConfig().filters.limit)}setPageSize(i){this.articleListConfig().currentPage>Math.ceil(this.articlesCount()/i)?this.oldLimit.set(this.articleListConfig().filters.limit):this.oldLimit.set(i),this.nzSetPageSize.emit(i)}static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`app-articles`]],inputs:{articleList:`articleList`,articlesCount:`articlesCount`,isLoading:`isLoading`,articleListConfig:`articleListConfig`,oldLimit:`oldLimit`},outputs:{nzSetPage:`nzSetPage`,nzSetPageSize:`nzSetPageSize`},decls:8,vars:6,consts:[[`item`,``],[`footer`,``],[`pagination`,``],[`starAction`,``],[`likeAction`,``],[`msgAction`,``],[`nzTitle`,``],[`nzDescription`,``],[`extra`,``],[1,`app-article-preview`],[`nzItemLayout`,`vertical`,3,`hidden`,`nzDataSource`,`nzRenderItem`,`nzPagination`,`nzFooter`],[`nzTip`,`Loading posts...`],[3,`nzActions`,`nzExtra`],[3,`nzTitle`,`nzDescription`],[`nzType`,`star-o`,2,`margin-right`,`8px`],[`nzType`,`like-o`,2,`margin-right`,`8px`],[`nzType`,`message`,2,`margin-right`,`8px`],[3,`click`],[`nz-button`,``,`nzType`,`link`,3,`click`,`nzLoading`,`disabled`],[`nzType`,`arrow-right`],[`nz-row`,``,`nzJustify`,`end`],[`nz-col`,``,3,`id`],[`nz-typography`,``,`nzType`,`secondary`],[`nz-row`,``],[`nz-col`,``],[`nz-image`,``,`width`,`300px`,`height`,`200px`,3,`nzSrc`,`nzFallback`,`nzPlaceholder`,`alt`],[`nz-typography`,``],[3,`nzPageSizeChange`,`nzPageIndexChange`,`nzShowSizeChanger`,`nzPageSize`,`nzPageIndex`,`nzTotal`]],template:function(o,r){if(o&1&&(Sb(0,Ri,2,0,`div`,9),qi$2(1,`nz-list`,10),Zh(2,ji,14,8,`ng-template`,null,0,Jw)(4,Ki,1,1,`ng-template`,null,1,Jw)(6,Wi,1,4,`ng-template`,null,2,Jw),Tl()),o&2){let c=nw(3),g=nw(5),_=nw(7);Ab(r.isLoading()?0:-1),IE(),tg(`hidden`,r.isLoading())(`nzDataSource`,r.articleList())(`nzRenderItem`,c)(`nzPagination`,_)(`nzFooter`,g)}},dependencies:[Yl,lo,cr$1,ir,Fa,je,ie,me,oe,ga$1,Zf,El,Al,Vn,Wn$1,qi$1,_n,ji$1,I9,O9,ia$1,Jo,Za,Te$2],encapsulation:2})}return a})();var Gi=()=>({overflow:`auto`,display:`block`,width:`100%`});var qi=(a,h)=>[a,h];var Kn=()=>({standalone:!0});function Zi(a,h){if(a&1&&(Nl(0),qi$2(1,`h5`,16),ng(2,`nz-icon`,17),Tl(),Sl()),a&2){let i=Qb(2);IE(2),tg(`nzTooltipTitle`,i.applyTooltipTitle)}}function Xi(a,h){a&1&&Zh(0,Zi,3,1,`ng-container`,11)}function $i(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`button`,18),cg(`nzOnConfirm`,function(){md(i);let r=Qb();return yd(r.confirmApply())}),ng(2,`nz-icon`,19),Mw(3,` Apply `),Tl(),Sl()}if(a&2){let i=Qb(),o=nw(9);IE(),tg(`disabled`,i.disableApply())(`nzIcon`,o)}}function ea(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`button`,20),cg(`nzOnConfirm`,function(){md(i);let r=Qb();return yd(r.confirmClose())}),ng(2,`nz-icon`,21),Mw(3,` Close `),Tl(),Sl()}if(a&2){Qb();let i=nw(7);IE(),tg(`nzIcon`,i)(`nzOkDanger`,!0)}}function ta(a,h){a&1&&(Nl(0),qi$2(1,`h4`,16),ng(2,`nz-icon`,22),Tl(),Sl())}function na(a,h){a&1&&(Nl(0),qi$2(1,`h5`,23),Mw(2,`Do you want to `),ng(3,`br`),Mw(4,` close without changes?`),Tl(),Sl())}function ia(a,h){a&1&&(qi$2(0,`nz-space`,10),Zh(1,ta,3,0,`ng-container`,11)(2,na,5,0,`ng-container`,11),Tl())}function aa(a,h){a&1&&(Nl(0),qi$2(1,`h4`,24),ng(2,`nz-icon`,22),Tl(),Sl())}function ra(a,h){a&1&&(Nl(0),qi$2(1,`h5`,23),Mw(2,`Do you want to `),ng(3,`br`),Mw(4,` apply changes?`),Tl(),Sl())}function oa(a,h){a&1&&(qi$2(0,`nz-space`,10),Zh(1,aa,3,0,`ng-container`,11)(2,ra,5,0,`ng-container`,11),Tl())}function la(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`nz-switch`,25),aD(),Rg(`ngModelChange`,function(r){md(i);let c=Qb();return Aw(c.isAscending,r)||(c.isAscending=r),yd(r)}),cg(`click`,function(){md(i);let r=Qb();return yd(r.ascendingEnable())}),Tl(),Sl()}if(a&2){let i=Qb();IE(),Ag(`ngModel`,i.isAscending),tg(`ngModelOptions`,Hw(2,Kn)),lD()}}function sa(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`nz-switch`,26),aD(),Rg(`ngModelChange`,function(r){md(i);let c=Qb();return Aw(c.showSearch,r)||(c.showSearch=r),yd(r)}),cg(`click`,function(){md(i);let r=Qb();return yd(r.disableEnable())}),Tl(),Sl()}if(a&2){let i=Qb();IE(),Ag(`ngModel`,i.showSearch),tg(`ngModelOptions`,Hw(3,Kn))(`disabled`,i.leftSearch||i.rightSearch),lD()}}function ma(a,h){a&1&&(Nl(0),qi$2(1,`h5`,16),ng(2,`nz-icon`,27),Tl(),Sl())}function da(a,h){a&1&&Zh(0,ma,3,0,`ng-container`,11)}function pa(a,h){a&1&&(Nl(0),qi$2(1,`h4`,33),Mw(2,`Remaining Tags`),Tl(),Sl())}function ca(a,h){a&1&&(Nl(0),qi$2(1,`h5`,33),ng(2,`nz-icon`,34),Tl(),Sl())}function xa(a,h){if(a&1&&ng(0,`nz-option`,30),a&2){let i=h.$implicit;tg(`nzLabel`,i.label)(`nzValue`,i.value)}}function ha(a,h){if(a&1&&(ng(0,`nz-icon`,35),Mw(1)),a&2){let i=h.$implicit;tg(`nzType`,`sort-`+i.nzValue),IE(),xl(` `,i.nzLabel,` `)}}function Ea(a,h){if(a&1){let i=Bb();qi$2(0,`tr`,36),cg(`click`,function(){let r=md(i).$implicit,c=Qb().onItemSelect;return yd(c(r))}),qi$2(1,`td`,37),cg(`nzCheckedChange`,function(){let r=md(i).$implicit,c=Qb().onItemSelect;return yd(c(r))}),Tl(),qi$2(2,`td`),Mw(3),Tl()()}if(a&2){let i=h.$implicit,o=Qb().disabled;IE(),tg(`nzChecked`,i.checked)(`nzDisabled`,o||i.disabled),IE(2),Ng(i.title)}}function ga(a,h){if(a&1){let i=Bb();qi$2(0,`div`,28)(1,`div`,9)(2,`nz-space`,10),Zh(3,pa,3,0,`ng-container`,11)(4,ca,3,0,`ng-container`,11),Tl()()(),qi$2(5,`div`,28)(6,`div`,9)(7,`nz-select`,29),aD(),Rg(`ngModelChange`,function(r){md(i);let c=Qb();return Aw(c.orderModelLeft,r)||(c.orderModelLeft=r),yd(r)}),cg(`ngModelChange`,function(r){md(i);let c=Qb();return yd(c.handleOrderLeft(r))}),kb(8,xa,1,2,`nz-option`,30,Ob),Tl(),Zh(10,ha,2,2,`ng-template`,null,4,Jw),Tl()(),qi$2(12,`nz-table`,31,5)(14,`thead`)(15,`tr`)(16,`th`,32),cg(`nzCheckedChange`,function(r){let c=md(i).onItemSelectAll;return yd(c(r))}),Tl(),qi$2(17,`th`),Mw(18,`All`),Tl()()(),qi$2(19,`tbody`),kb(20,Ea,4,3,`tr`,null,Ob),Tl()()}if(a&2){let i=h.$implicit,o=h.stat,r=h.disabled,c=nw(11),g=nw(13),_=Qb();IE(7),tg(`nzBackdrop`,!1)(`nzCustomTemplate`,c),Ag(`ngModel`,_.orderModelLeft),lD(),IE(),Lb(_.listOfOption),IE(4),tg(`nzData`,_.convertItemsRight(i)),IE(4),tg(`nzDisabled`,r)(`nzChecked`,o.checkAll)(`nzIndeterminate`,o.checkHalf),IE(4),Lb(g.data)}}function Sa(a,h){a&1&&(Nl(0),qi$2(1,`h4`,24),Mw(2,`Selected Tags`),Tl(),Sl())}function ua(a,h){a&1&&(Nl(0),qi$2(1,`h5`,24),ng(2,`nz-icon`,38),Tl(),Sl())}function Aa(a,h){if(a&1&&ng(0,`nz-option`,30),a&2){let i=h.$implicit;tg(`nzLabel`,i.label)(`nzValue`,i.value)}}function fa(a,h){if(a&1&&(ng(0,`nz-icon`,35),Mw(1)),a&2){let i=h.$implicit;tg(`nzType`,`sort-`+i.nzValue),IE(),xl(` `,i.nzLabel,` `)}}function wa(a,h){if(a&1){let i=Bb();qi$2(0,`tr`,36),cg(`click`,function(){let r=md(i).$implicit,c=Qb().onItemSelect;return yd(c(r))}),qi$2(1,`td`,37),cg(`nzCheckedChange`,function(){let r=md(i).$implicit,c=Qb().onItemSelect;return yd(c(r))}),Tl(),qi$2(2,`td`),Mw(3),Tl()()}if(a&2){let i=h.$implicit,o=Qb().disabled;IE(),tg(`nzChecked`,i.checked)(`nzDisabled`,o||i.disabled),IE(2),Ng(i.title)}}function za(a,h){if(a&1){let i=Bb();qi$2(0,`div`,28)(1,`div`,9)(2,`nz-space`,10),Zh(3,Sa,3,0,`ng-container`,11)(4,ua,3,0,`ng-container`,11),Tl()()(),qi$2(5,`div`,28)(6,`div`,9)(7,`nz-select`,29),aD(),Rg(`ngModelChange`,function(r){md(i);let c=Qb();return Aw(c.orderModelRight,r)||(c.orderModelRight=r),yd(r)}),cg(`ngModelChange`,function(r){md(i);let c=Qb();return yd(c.handleOrderRight(r))}),kb(8,Aa,1,2,`nz-option`,30,Ob),Tl(),Zh(10,fa,2,2,`ng-template`,null,6,Jw),Tl()(),qi$2(12,`nz-table`,31,7)(14,`thead`)(15,`tr`)(16,`th`,32),cg(`nzCheckedChange`,function(r){let c=md(i).onItemSelectAll;return yd(c(r))}),Tl(),qi$2(17,`th`),Mw(18,`All`),Tl()()(),qi$2(19,`tbody`),kb(20,wa,4,3,`tr`,null,Ob),Tl()()}if(a&2){let i=h.$implicit,o=h.stat,r=h.disabled,c=nw(11),g=nw(13),_=Qb();IE(7),tg(`nzBackdrop`,!1)(`nzCustomTemplate`,c),Ag(`ngModel`,_.orderModelRight),lD(),IE(),Lb(_.listOfOption),IE(4),tg(`nzData`,_.convertItemsLeft(i)),IE(4),tg(`nzDisabled`,r)(`nzChecked`,o.checkAll)(`nzIndeterminate`,o.checkHalf),IE(4),Lb(g.data)}}var Wn=(()=>{class a{params;nzMessageService=_(hr);drawerRef=_(pt);selectedCount=0;list=[];showSearch=!1;leftSearch=!1;rightSearch=!1;selectedTags=[];applyTooltipTitle=``;orderModelLeft=null;orderModelRight=null;listOfOption=[{label:`Ascending`,value:`ascending`},{label:`Descending`,value:`descending`}];sortOrder=null;isAscending=!1;createdAtAsc=null;initialCreatedAtAsc=null;isTagListChange(){let i=this.selectedTags||[];if(this.selectedTags=[],this.list.filter(r=>r.direction===`right`).forEach(r=>this.selectedTags.push(r.id)),this.createdAtAsc!==this.initialCreatedAtAsc||i?.length!==this.selectedTags.length)return!0;let o=!0;return i.forEach(r=>o=o&&this.selectedTags.includes(r)),!o}ngOnInit(){this.params.createdAtAsc===void 0?(this.isAscending=!1,this.createdAtAsc=null):(this.isAscending=this.params.createdAtAsc,this.createdAtAsc=this.isAscending),this.initialCreatedAtAsc=this.createdAtAsc,this.params.tags?this.selectedTags=this.params.tags:(this.selectedTags=[],this.params.tagList.forEach(i=>this.selectedTags.push(i.id))),this.list=[],this.params.tagList.forEach(i=>this.list.push({title:i.title,id:i.id,direction:this.selectedTags.includes(i.id)?`right`:`left`})),this.selectedCount=this.selectedTags.length}ascendingEnable(){this.isAscending?this.createdAtAsc=null:this.createdAtAsc=!0}disableEnable(){this.showSearch||(this.showSearch=this.leftSearch||this.rightSearch)}handleSearchChange(i){i.direction===`left`?this.leftSearch=i.value!==``:this.rightSearch=i.value!==``}handleChange(i){i.from===`right`?(this.orderModelLeft=null,this.sortOrder={direction:`left`,sortOrder:null},this.selectedCount-=i.list.length):(this.orderModelRight=null,this.sortOrder={direction:`right`,sortOrder:null},this.selectedCount+=i.list.length)}handleFilterOption(i,o){return o.title.toLowerCase().includes(i.toLowerCase())}confirmClose(){this.isTagListChange()&&this.nzMessageService.warning(`Changes were not saved!`),this.drawerRef.close(!1)}disableApply(){return this.selectedCount<1?(this.applyTooltipTitle=`It should be at least one selected tag.`,!0):this.selectedCount>100?(this.applyTooltipTitle=`It should not be more than 100 selected tags.`,!0):!1}confirmApply(){this.isTagListChange()?(this.nzMessageService.info(`Applying selected tags.`),this.selectedTags.length===this.list.length&&(this.selectedTags=null),this.drawerRef.close({tags:this.selectedTags,createdAtAsc:this.createdAtAsc})):this.drawerRef.close(null)}convertItemsRight(i){return i.filter(o=>!o.hide)}convertItemsLeft(i){return i.filter(o=>!o.hide)}handleOrderRight(i){this.sortOrder={direction:`right`,sortOrder:i}}handleOrderLeft(i){this.sortOrder={direction:`left`,sortOrder:i}}static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`app-article-listing-tags`]],inputs:{params:`params`},decls:25,vars:14,consts:[[`closeTpl`,``],[`applyTpl`,``],[`renderList`,``],[`renderSelectedList`,``],[`orderTemplateLeft`,``],[`t1`,``],[`orderTemplateRight`,``],[`t2`,``],[`nz-row`,``,`nzJustify`,`end`,1,`m-b-20`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[`nz-row`,``,`nzJustify`,`end`],[`nz-row`,``,`nzJustify`,`start`,1,`m-b-20`],[`nzSize`,`small`,`nzAlign`,`center`],[3,`nzSearchChange`,`nzChange`,`nzDataSource`,`nzShowSearch`,`nzShowSelectAll`,`nzFilterOption`,`nzRenderList`,`nzSortOrder`],[`nz-typography`,``,`nzType`,`danger`],[`nzType`,`info-circle`,`nz-tooltip`,``,3,`nzTooltipTitle`],[`nz-button`,``,`nzType`,`primary`,`nzShape`,`round`,`nz-popconfirm`,``,`nzPopconfirmTitle`,` `,`nzPopconfirmShowArrow`,`false`,`nzOkText`,`Yes`,`nzCancelText`,`No`,3,`nzOnConfirm`,`disabled`,`nzIcon`],[`nzType`,`check`],[`nz-button`,``,`nzDanger`,`true`,`nzShape`,`round`,`nz-popconfirm`,``,`nzPopconfirmTitle`,` `,`nzPopconfirmShowArrow`,`false`,`nzOkText`,`Yes`,`nzCancelText`,`No`,3,`nzOnConfirm`,`nzIcon`,`nzOkDanger`],[`nzType`,`close`],[`nzType`,`question-circle-o`],[`nz-typography`,``],[`nz-typography`,``,`nzType`,`success`],[`nzCheckedChildren`,`Oldest articles first`,`nzUnCheckedChildren`,`Newest articles first`,3,`ngModelChange`,`click`,`ngModel`,`ngModelOptions`],[`nzCheckedChildren`,`Hide Search`,`nzUnCheckedChildren`,`Show Search`,3,`ngModelChange`,`click`,`ngModel`,`ngModelOptions`,`disabled`],[`nzType`,`info-circle`,`nz-tooltip`,``,`nzTooltipTitle`,`Clear out all search boxes in order to hide them.`],[`nz-row`,``,`nzJustify`,`center`],[`nzAllowClear`,``,`nzPlaceHolder`,`Sort Order...`,3,`ngModelChange`,`nzBackdrop`,`nzCustomTemplate`,`ngModel`],[3,`nzLabel`,`nzValue`],[`nzSize`,`small`,3,`nzData`],[`nzShowCheckbox`,``,3,`nzCheckedChange`,`nzDisabled`,`nzChecked`,`nzIndeterminate`],[`nz-typography`,``,`nzType`,`warning`],[`nzType`,`info-circle`,`nz-tooltip`,``,`nzTooltipTitle`,`Here are all remaining tags.`],[3,`nzType`],[3,`click`],[`nzShowCheckbox`,``,3,`nzCheckedChange`,`nzChecked`,`nzDisabled`],[`nzType`,`info-circle`,`nz-tooltip`,``,`nzTooltipTitle`,`Here are all selected tags.`]],template:function(o,r){if(o&1&&(qi$2(0,`div`,8)(1,`div`,9)(2,`nz-space`,10),Sb(3,Xi,1,0,`ng-container`),Zh(4,$i,4,2,`ng-container`,11)(5,ea,4,2,`ng-container`,11),Tl()(),Zh(6,ia,3,0,`ng-template`,null,0,Jw)(8,oa,3,0,`ng-template`,null,1,Jw),Tl(),qi$2(10,`div`,12)(11,`div`,9)(12,`nz-space`,10),Zh(13,la,2,3,`ng-container`,11),Tl()()(),qi$2(14,`div`,13)(15,`div`,9)(16,`nz-space`,14),Zh(17,sa,2,4,`ng-container`,11),Sb(18,da,1,0,`ng-container`),Tl()()(),qi$2(19,`div`)(20,`nz-transfer`,15),cg(`nzSearchChange`,function(g){return r.handleSearchChange(g)})(`nzChange`,function(g){return r.handleChange(g)}),Zh(21,ga,22,7,`ng-template`,null,2,Jw)(23,za,22,7,`ng-template`,null,3,Jw),Tl()()),o&2){let c=nw(22),g=nw(24);IE(3),Ab(r.disableApply()?3:-1),IE(15),Ab(r.leftSearch||r.rightSearch?18:-1),IE(),gw(Hw(10,Gi)),IE(),tg(`nzDataSource`,r.list)(`nzShowSearch`,r.showSearch)(`nzShowSelectAll`,!1)(`nzFilterOption`,r.handleFilterOption)(`nzRenderList`,$w(11,qi,c,g))(`nzSortOrder`,r.sortOrder)}},dependencies:[ml,Nr,Ds,qi$1,_n,ji$1,Ui$2,Ui$1,cr$1,ir,Fa,I9,O9,ia$1,na$1,ga$1,ma$1,So,El,mr,ps,um,is,ts,hm,cr,cs,os,vi$1,gn,lt$2,nt,Ve,pe,Ul,Zi$1,Yi,Jo,Za],encapsulation:2})}return a})();var Ca=[`drawerTitleTemplate`];function ba(a,h){a&1&&(Nl(0),qi$2(1,`h4`,13),ng(2,`nz-icon`,14),Tl(),Sl())}function ya(a,h){a&1&&(Nl(0),qi$2(1,`h5`,15),Mw(2,`Do you want to `),ng(3,`br`),Mw(4,` reload all articles?`),Tl(),Sl())}function _a(a,h){a&1&&(qi$2(0,`nz-space`,7),Zh(1,ba,3,0,`ng-container`,8)(2,ya,5,0,`ng-container`,8),Tl())}function Ta(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`button`,11),cg(`nzOnConfirm`,function(){md(i);let r=Qb();return yd(r.selectAll())}),ng(2,`nz-icon`,12),Tl(),Zh(3,_a,3,0,`ng-template`,null,1,Jw),Sl()}if(a&2){let i=nw(4),o=Qb();IE(),tg(`nzLoading`,o.isArticlesLoading())(`nzIcon`,i)}}function ka(a,h){if(a&1){let i=Bb();Nl(0),qi$2(1,`button`,16),cg(`click`,function(){md(i);let r=Qb();return yd(r.openTagsFilter())}),ng(2,`nz-icon`,17),Mw(3,` Tags `),Tl(),qi$2(4,`nz-badge`,18),ng(5,`a`,19),Tl(),Sl()}if(a&2){let i=Qb();IE(),tg(`nzLoading`,i.isTagsLoading()),IE(3),tg(`nzCount`,i.tagCount())}}function va(a,h){if(a&1&&(qi$2(0,`div`,5)(1,`div`,6)(2,`h3`,20),Mw(3),Tl()()()),a&2){let i=Qb();IE(3),Ng(i.drawerTitle)}}var dm=[{path:``,pathMatch:`full`,title:`Articles`,data:{key:`articles`},component:(()=>{class a{drawerTitleTemplate=L1(`drawerTitleTemplate`);#e=_(_t);#t=_(q0);articleListConfig=this.#t.selectors.articleListConfig;windowWidth=this.#t.selectors.width;articleCount=this.#e.selectors.articleCount;articleList=this.#e.selectors.articleList;tagList=this.#e.selectors.tags;drawerService=_(ei);isTagsLoading=Gt(!1);isArticlesLoading=Gt(!1);tagCount=Ll(()=>this.articleListConfig()?.filters.tags?this.articleListConfig().filters.tags.length:0);oldLimit=Gt(this.articleListConfig().filters.limit);drawerTitle=``;noCancel(){return new Promise(o=>{o(!1)})}ngOnInit(){this.#t.setAdminArticles(!1);let i=this.articleListConfig()?.filters;(i?.tags===void 0||i?.tags===null)&&(i?.createdAtAsc===void 0||i?.createdAtAsc===null)?this.selectAll():(this.#e.getTags({loading:this.isTagsLoading,params:null}),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:i.limit,offset:0,tags:i.tags,createdAtAsc:i.createdAtAsc}}))}selectAll(){this.#e.getTags({loading:this.isTagsLoading,params:null}),this.#e.queryArticle({loading:this.isArticlesLoading,params:{limit:10,offset:0}}),this.oldLimit.set(10)}onPageOffsetChange(i){this.#e.onOffsetChange({loading:this.isArticlesLoading,offset:i})}onPageLimitChange(i){this.#e.onLimitChange({loading:this.isArticlesLoading,limit:i})}openTagsFilter(){if(this.isTagsLoading())return;this.isTagsLoading.set(!0),this.drawerTitle=`Article Tags`;let i=this.articleListConfig()?.filters;this.drawerService.create({nzTitle:this.drawerTitleTemplate(),nzContent:Wn,nzWidth:this.windowWidth()>600?600:this.windowWidth(),nzClosable:!1,nzOnCancel:this.noCancel,nzContentParams:{params:{tagList:this.tagList(),tags:i.tags,createdAtAsc:i.createdAtAsc}}}).afterClose.subscribe(r$1=>{if(r$1){let c=this.articleListConfig()?.filters;this.#e.queryArticle({loading:this.isArticlesLoading,params:s(r({},r$1),{limit:c.limit,offset:0})})}this.isTagsLoading.set(!1)})}pageHeaderInfo={title:`Articles`,desc:`This page is a symbiose between dynamic (.NET Core, SQL Server database) and static (JavaScript, CSS, icon, etc.) resources. All articles are served as static content from JavaScript files compiled by Angular framework. In addition, JavaScript files are served via lazy loading. Articles metadata is stored in the database and served dynamically by .NET Core API controllers.`};static ɵfac=function(o){return new(o||a)};static ɵcmp=KD({type:a,selectors:[[`app-home-listing`]],viewQuery:function(o,r){o&1&&pg(r.drawerTitleTemplate,Ca,5),o&2&&tw()},features:[Vw([_p(_t)])],decls:14,vars:7,consts:[[`drawerTitleTemplate`,``],[`applyTpl`,``],[3,`pageHeaderInfo`],[1,`normal-table-wrap`,`bg-color-no`,`p-b-50`],[1,`m-b-20`,3,`nzBordered`],[`nz-row`,``,`nzJustify`,`center`],[`nz-col`,``],[`nzSize`,`small`,`nzAlign`,`baseline`],[4,`nzSpaceItem`],[`nz-row`,``,`nzJustify`,`end`],[3,`nzSetPage`,`nzSetPageSize`,`articleList`,`articlesCount`,`isLoading`,`articleListConfig`,`oldLimit`],[`nz-button`,``,`nzType`,`primary`,`nzShape`,`circle`,`nz-popconfirm`,``,`nzPopconfirmTitle`,` `,`nzPopconfirmShowArrow`,`false`,`nzOkText`,`Yes`,`nzCancelText`,`No`,3,`nzOnConfirm`,`nzLoading`,`nzIcon`],[`nzType`,`sync`],[`nz-typography`,``,`nzType`,`success`],[`nzType`,`question-circle-o`],[`nz-typography`,``],[`nz-button`,``,`nzType`,`primary`,`nzShape`,`round`,3,`click`,`nzLoading`],[`nzType`,`tag`],[3,`nzCount`],[1,`head-example`],[`nz-typography`,``,`nzType`,`warning`]],template:function(o,r){o&1&&(ng(0,`app-page-header`,2),qi$2(1,`div`,3)(2,`nz-card`,4)(3,`div`,5)(4,`div`,6)(5,`nz-space`,7),Zh(6,Ta,5,2,`ng-container`,8),Tl()()(),qi$2(7,`div`,9)(8,`div`,6)(9,`nz-space`,7),Zh(10,ka,6,2,`ng-container`,8),Tl()()(),qi$2(11,`app-articles`,10),cg(`nzSetPage`,function(g){return r.onPageOffsetChange(g)})(`nzSetPageSize`,function(g){return r.onPageLimitChange(g)}),Tl(),Zh(12,va,4,1,`ng-template`,null,0,Jw),Tl()()),o&2&&(tg(`pageHeaderInfo`,r.pageHeaderInfo),IE(2),tg(`nzBordered`,!0),IE(9),tg(`articleList`,r.articleList)(`articlesCount`,r.articleCount)(`isLoading`,r.isArticlesLoading)(`articleListConfig`,r.articleListConfig)(`oldLimit`,r.oldLimit))},dependencies:[en,On,Bn$1,fn,qi$1,_n,ji$1,Ui$2,zg,cd,I9,O9,ia$1,na$1,ga$1,ma$1,So,El,Jo,Za,cr$1,ir,Fa],encapsulation:2})}return a})()},{path:`what-version-of-this-blog`,title:`What Version?`,data:{key:`what-version-of-this-blog`},component:Rn},{path:`svg-icons`,title:`SVG Icons`,data:{key:`svg-icons`},component:Dn},{path:`dotnet-core-testing`,title:`ASP.NET Testing`,data:{key:`dotnet-core-testing`},component:Pn},{path:`about-this-blog`,title:`My Blog`,data:{key:`about-this-blog`},component:Jn},{path:`test-readme`,title:`MyTested Example`,data:{key:`test-readme`},component:Fn},{path:`ratelimit-middleware`,title:`JWT Token Refresh`,data:{key:`ratelimit-middleware`},component:Hn},{path:`testing-angular-apps`,title:`Testing Angular Apps`,data:{key:`testing-angular-apps`},component:Un},{path:`mermaid`,title:`Diagram Examples`,data:{key:`mermaid`},component:jn}];export{dm as BLOG_ROUTES};