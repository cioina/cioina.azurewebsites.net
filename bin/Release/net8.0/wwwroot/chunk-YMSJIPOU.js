import{j as G,p as J}from"./chunk-STYUE6ZA.js";import{H as j,Ka as U,La as W,Oa as $,Pa as Z,lb as P,nb as Q,wb as q,xb as H}from"./chunk-FLFLW6YE.js";import{$b as z,Ac as R,Bc as V,F as u,Gb as x,Jb as a,Mb as I,Nb as l,Pb as T,Ub as f,Va as D,Wc as A,Xa as M,Zb as C,Zc as p,_b as m,ac as g,bc as v,ga as s,ic as c,j as _,ma as b,oa as k,oc as F,pc as O,q as y,qc as L,sb as r,sc as w,tb as o,tc as S,ya as N,za as E}from"./chunk-XESCBYHO.js";var ne=["switchElement"];function oe(i,e){i&1&&z(0,"span",3)}function se(i,e){if(i&1&&(g(0),w(1),v()),i&2){let t=c(2);r(),S(t.nzCheckedChildren)}}function re(i,e){if(i&1&&a(0,se,2,1,"ng-container",6),i&2){let t=c();l("nzStringTemplateOutlet",t.nzCheckedChildren)}}function ae(i,e){if(i&1&&(g(0),w(1),v()),i&2){let t=c(2);r(),S(t.nzUnCheckedChildren)}}function ce(i,e){if(i&1&&a(0,ae,2,1,"ng-container",6),i&2){let t=c();l("nzStringTemplateOutlet",t.nzUnCheckedChildren)}}var de="switch",d=class i{updateValue(e){this.isChecked!==e&&(this.isChecked=e,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}constructor(e,t,n,h,B,K){this.nzConfigService=e,this.host=t,this.ngZone=n,this.cdr=h,this.focusMonitor=B,this.directionality=K,this._nzModuleName=de,this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.nzId=null,this.dir="ltr",this.destroy$=new _,this.isNzDisableFirstChange=!0}ngOnInit(){this.directionality.change.pipe(s(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{u(this.host.nativeElement,"click").pipe(s(this.destroy$)).subscribe(e=>{e.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),u(this.switchElement.nativeElement,"keydown").pipe(s(this.destroy$)).subscribe(e=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;let{keyCode:t}=e;t!==37&&t!==39&&t!==32&&t!==13||(e.preventDefault(),this.ngZone.run(()=>{t===37?this.updateValue(!1):t===39?this.updateValue(!0):(t===32||t===13)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe(s(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.isChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static{this.\u0275fac=function(t){return new(t||i)(o(U),o(M),o(D),o(A),o(G),o(j))}}static{this.\u0275cmp=N({type:i,selectors:[["nz-switch"]],viewQuery:function(t,n){if(t&1&&F(ne,7),t&2){let h;O(h=L())&&(n.switchElement=h.first)}},inputs:{nzLoading:[2,"nzLoading","nzLoading",p],nzDisabled:[2,"nzDisabled","nzDisabled",p],nzControl:[2,"nzControl","nzControl",p],nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize",nzId:"nzId"},exportAs:["nzSwitch"],standalone:!0,features:[R([{provide:J,useExisting:b(()=>i),multi:!0}]),x,V],decls:8,vars:15,consts:[["switchElement",""],["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],[1,"ant-switch-handle"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[1,"ant-switch-inner"],[1,"ant-click-animating-node"],[4,"nzStringTemplateOutlet"]],template:function(t,n){t&1&&(C(0,"button",1,0)(2,"span",2),a(3,oe,1,0,"span",3),m(),C(4,"span",4),a(5,re,1,1,"ng-container")(6,ce,1,1,"ng-container"),m(),z(7,"div",5),m()),t&2&&(T("ant-switch-checked",n.isChecked)("ant-switch-loading",n.nzLoading)("ant-switch-disabled",n.nzDisabled)("ant-switch-small",n.nzSize==="small")("ant-switch-rtl",n.dir==="rtl"),l("disabled",n.nzDisabled)("nzWaveExtraNode",!0),I("id",n.nzId),r(3),f(n.nzLoading?3:-1),r(2),f(n.isChecked?5:6))},dependencies:[H,q,Q,P,Z,$],encapsulation:2,changeDetection:0})}};y([W()],d.prototype,"nzSize",void 0);var Fe=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=E({type:i})}static{this.\u0275inj=k({imports:[d]})}}return i})();export{d as a,Fe as b};
