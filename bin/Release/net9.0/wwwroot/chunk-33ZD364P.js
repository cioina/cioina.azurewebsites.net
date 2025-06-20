import{b as c}from"./chunk-EOIQRFAW.js";import{a as s}from"./chunk-CAAASSRE.js";import{$b as t,Ac as n,Gb as d,_b as e,oa as a,q as l,xb as m}from"./chunk-LNT4AZLS.js";import"./chunk-3XFQOAE3.js";var E=(()=>{class r{zone=a(d);mermaidImport=a(c,{optional:!0});mermaid;isMermaid=!0;constructor(){this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(o){this.zone.runOutsideAngular(()=>l(o).pipe(s()).subscribe(i=>{this.mermaid=i,this.mermaid.default.initialize({startOnLoad:!1}),this.mermaid?.default.run()}))}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=m({type:r,selectors:[["app-menu1-2"]],decls:23,vars:0,consts:[[1,"normal-table-wrap"],[1,"sp-18"],[1,"sp-16"],[1,"mermaid"]],template:function(i,p){i&1&&(e(0,"div",0)(1,"h1",1),n(2,"Menu 1-2"),t(),e(3,"h1",2),n(4,"Example 1"),t(),e(5,"pre",3),n(6,`block-beta
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
  style B fill:#969,stroke:#333,stroke-width:4px
  `),t(),e(7,"h1",2),n(8,"Example 2"),t(),e(9,"pre",3),n(10,`block-beta
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
  end      
      `),t(),e(11,"h1",2),n(12,"Example 3"),t(),e(13,"pre",3),n(14,`block-beta
  id1[/"This is the text in the box"/]
  id2["This is the text in the box"]
  A[/"Christmas"]
  B["Go shopping"/]
      `),t(),e(15,"h1",2),n(16,"Example 4"),t(),e(17,"pre",3),n(18,`block-beta
  blockArrowId<["Label"]>(right)
  blockArrowId2<["Label"]>(left)
  blockArrowId3<["Label"]>(up)
  blockArrowId4<["Label"]>(down)
  blockArrowId5<["Label"]>(x)
  blockArrowId6<["Label"]>(y)
  blockArrowId6<["Label"]>(x, down)
      `),t(),e(19,"h1",2),n(20,"Example 5"),t(),e(21,"pre",3),n(22,`block-beta
  columns 3
  Start(("Start")) space:2
  down<[" "]>(down) space:2
  Decision("Make Decision") right<["Yes"]>(right) Process1["Process A"]
  downAgain<["No"]>(down) space r3<["Done"]>(down)
  Process2["Process B"] r2<["Done"]>(right) End(("End"))

  style Start fill:#969;
  style End fill:#696;
      `),t()())},encapsulation:2,changeDetection:0})}return r})();export{E as Menu12Component};
