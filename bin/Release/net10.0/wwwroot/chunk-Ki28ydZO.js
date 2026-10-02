import"./chunk-CK8a7LA6.js";import{En as ZD,Fn as _,Jn as ce,Rn as _l,en as Tw,mt as Ml,or as fe,wt as Oe,zr as nV}from"./chunk-4C0-umFg.js";import{n}from"./chunk-jFiBYcdD.js";var w=(()=>{class i{destroyRef=_(ce);zone=_(fe);mermaidImport=_(n,{optional:!0});mermaid;isMermaid=!0;constructor(){this.isMermaid&&this.mermaidImport&&this.loadMermaid(this.mermaidImport)}ngAfterViewChecked(){this.isMermaid&&this.mermaid&&(this.isMermaid=!1,this.zone.runOutsideAngular(()=>this.mermaid?.default.run()))}loadMermaid(m){this.zone.runOutsideAngular(()=>Oe(m).pipe(nV(this.destroyRef)).subscribe(o=>{this.mermaid=o,this.mermaid.default.initialize({startOnLoad:!1,forceLegacyMathML:!0}),this.mermaid?.default.run()}))}static ɵfac=function(o){return new(o||i)};static ɵcmp=ZD({type:i,selectors:[[`app-menu1-2`]],decls:23,vars:0,consts:[[1,`normal-table-wrap`],[1,`sp-28`],[1,`sp-16`],[1,`mermaid`]],template:function(o,E){o&1&&(_l(0,`div`,0)(1,`h1`,1),Tw(2,`Menu 1-2`),Ml(),_l(3,`h1`,2),Tw(4,`Example 1`),Ml(),_l(5,`pre`,3),Tw(6,`block-beta
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
  `),Ml(),_l(7,`h1`,2),Tw(8,`Example 2`),Ml(),_l(9,`pre`,3),Tw(10,`block-beta
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
      `),Ml(),_l(11,`h1`,2),Tw(12,`Example 3`),Ml(),_l(13,`pre`,3),Tw(14,`block-beta
  id1[/"This is the text in the box"/]
  id2["This is the text in the box"]
  A[/"Christmas"]
  B["Go shopping"/]
      `),Ml(),_l(15,`h1`,2),Tw(16,`Example 4`),Ml(),_l(17,`pre`,3),Tw(18,`block-beta
  blockArrowId<["Label"]>(right)
  blockArrowId2<["Label"]>(left)
  blockArrowId3<["Label"]>(up)
  blockArrowId4<["Label"]>(down)
  blockArrowId5<["Label"]>(x)
  blockArrowId6<["Label"]>(y)
  blockArrowId6<["Label"]>(x, down)
      `),Ml(),_l(19,`h1`,2),Tw(20,`Example 5`),Ml(),_l(21,`pre`,3),Tw(22,`block-beta
  columns 3
  Start(("Start")) space:2
  down<[" "]>(down) space:2
  Decision("Make Decision") right<["Yes"]>(right) Process1["Process A"]
  downAgain<["No"]>(down) space r3<["Done"]>(down)
  Process2["Process B"] r2<["Done"]>(right) End(("End"))

  style Start fill:#969;
  style End fill:#696;
      `),Ml()())},encapsulation:2})}return i})();export{w as Menu12Component};