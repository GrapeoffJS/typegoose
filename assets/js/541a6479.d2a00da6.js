"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[2627],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7294),o=t(6010),r="tabItem_OmH5";function s(e){var n=e.children,t=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),o=t(7294),r=t(2389),s=t(7392),i=t(7094),l=t(2466),p=t(6010),c="tabList_uSqn",u="tabItem_LplD";function m(e){var n,t,r,m=e.lazy,d=e.block,g=e.defaultValue,h=e.values,f=e.groupId,v=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,s.l)(y,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===g?g:null!=(n=null!=g?g:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=b[0])?void 0:r.props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),T=N.tabGroupChoices,P=N.setTabGroupChoices,x=(0,o.useState)(w),E=x[0],C=x[1],O=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=T[f];null!=I&&I!==E&&y.some((function(e){return e.value===I}))&&C(I)}var D=function(e){var n=e.currentTarget,t=O.indexOf(n),a=y[t].value;a!==E&&(S(n),C(a),null!=f&&P(f,a))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;t=O[o]||O[O.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,p.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var n=e.value,t=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:D,onClick:D},r,{className:(0,p.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),m?(0,o.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(n)},e))}},7328:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),s=t(9877),i=t(2360),l=["components"],p={id:"nesting-classes",title:"Nesting Classes"},c=void 0,u={unversionedId:"guides/nesting-classes",id:"guides/nesting-classes",title:"Nesting Classes",description:"Differences from Mongoose",source:"@site/../docs/guides/nesting-classes.mdx",sourceDirName:"guides",slug:"/guides/nesting-classes",permalink:"/typegoose/docs/guides/nesting-classes",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/nesting-classes.mdx",tags:[],version:"current",frontMatter:{id:"nesting-classes",title:"Nesting Classes"},sidebar:"guides",previous:{title:"Default Classes",permalink:"/typegoose/docs/guides/default-classes"},next:{title:"Custom Types",permalink:"/typegoose/docs/guides/advanced/custom-types"}},m={},d=[{value:"Differences from Mongoose",id:"differences-from-mongoose",level:3},{value:"Using the Passthrough Class",id:"using-the-passthrough-class",level:3},{value:"Difference to References",id:"difference-to-references",level:3}],g={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"differences-from-mongoose"},"Differences from Mongoose"),(0,r.kt)("p",null,"Typegoose Nesting is slightly different from mongoose, the following will show a basic mongoose schema which has nesting and how it would be translated to typegoose."),(0,r.kt)(s.Z,{groupId:"mongoose-typegoose",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mongoose",label:"Mongoose",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const AnimalSchema = new mongoose.Schema({\n  name: String,\n  properties: {\n    hasEaten: Boolean,\n    nicknames: [String]\n  }\n});\n"))),(0,r.kt)(i.Z,{value:"typegoose",label:"Typegoose",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Animal {\n  @prop()\n  public name?: string;\n\n  @prop()\n  public properties?: Properties;\n}\n\nclass Properties {\n  @prop()\n  public hasEaten?: boolean;\n\n  @prop({ type: String })\n  public nicknames?: string[];\n}\n")))),(0,r.kt)("p",null,"It is required to put nested properties in their own class because of how typescript reflection works, it currently just translates ",(0,r.kt)("inlineCode",{parentName:"p"},"{ someprop: string }")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," in reflection."),(0,r.kt)("p",null,"Also, under the hood, typegoose creates the schemas that would be equivalent to writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const PropertiesSchema = new mongoose.Schema({\n  hasEaten: {\n    type: Boolean\n  },\n  nicknames: [{\n    type: String\n  }]\n});\n\nconst AnimalSchema = new mongoose.Schema({\n  name: {\n    type: String\n  },\n  properties: {\n    type: PropertiesSchema\n  }\n});\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Typegoose does not support native "nested paths" (unless using ',(0,r.kt)("a",{parentName:"p",href:"#using-the-passthrough-class"},(0,r.kt)("inlineCode",{parentName:"a"},"Passthrough")),"), each class in typegoose will be a nested schema (each class is its own ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema")," instance), so it is not a 1:1 translation of the initial mongoose example to typegoose, but similar enough to initially think that way."))),(0,r.kt)("h3",{id:"using-the-passthrough-class"},"Using the Passthrough Class"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is not recommended to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Passthrough")," Class unless explicitly required to workaround something. In case you have found a problem that could only be solved with the Passthrough class, please open a new issue in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/"},"typegoose repository")," so that we can fix having to use the Passthrough Class."))),(0,r.kt)("p",null,"In Typegoose there also exists a special class called ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/prop#passthrough-class"},(0,r.kt)("inlineCode",{parentName:"a"},"Passthrough"))," which can be used to write a mongoose schema-like directly, without typegoose processing it."),(0,r.kt)("p",null,"Here is a Example of how a mongoose schema would look like writing it with ",(0,r.kt)("inlineCode",{parentName:"p"},"Passthrough"),":"),(0,r.kt)(s.Z,{groupId:"mongoose-typegoose",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mongoose",label:"Mongoose",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Mongoose Initial Schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const AnimalSchema = new mongoose.Schema({\n  name: String,\n  properties: {\n    hasEaten: Boolean,\n    nicknames: [String]\n  }\n});\n"))),(0,r.kt)(i.Z,{value:"typegoose",label:"Typegoose",mdxType:"TabItem"},(0,r.kt)("p",null,"And the Typegoose Equivalent with ",(0,r.kt)("inlineCode",{parentName:"p"},"Passthrough")," (using the ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/prop#passthrough-direct"},(0,r.kt)("inlineCode",{parentName:"a"},"Direct"))," mode):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Animal {\n  @prop()\n  public name?: string;\n\n  @prop({ type: () => new Passthrough({ hasEaten: Boolean, nicknames: [String] }, true) })\n  public properties?: { hasEaten: boolean, nicknames: string[] };\n}\n")))),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"Passthrough")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Direct")," mode, the typegoose class above is fully equivalent in how it is given to mongoose as the mongoose schema example."),(0,r.kt)("h3",{id:"difference-to-references"},"Difference to References"),(0,r.kt)("p",null,"In Typegoose, references and subdocuments are written similarly:"),(0,r.kt)(s.Z,{groupId:"diff-reference",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ref-subdoc",label:"Subdocument",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Animal {\n  @prop()\n  public name?: string;\n\n  @prop()\n  public properties?: Properties;\n}\n\nclass Properties {\n  @prop()\n  public hasEaten?: boolean;\n\n  @prop({ type: String })\n  public nicknames?: string[];\n}\n"))),(0,r.kt)(i.Z,{value:"ref-ref",label:"Reference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Animal {\n  @prop()\n  public name?: string;\n\n  @prop({ ref: () => Properties })\n  public properties?: Ref<Properties>;\n}\n\nclass Properties {\n  @prop()\n  public hasEaten?: boolean;\n\n  @prop({ type: String })\n  public nicknames?: string[];\n}\n"))),(0,r.kt)(i.Z,{value:"diff",label:"Difference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"class Animal {\n  @prop()\n  public name?: string;\n\n-   @prop()\n-   public properties?: Properties;\n+   @prop({ ref: () => Properties })\n+   public properties?: Ref<Properties>;\n}\n\nclass Properties {\n  @prop()\n  public hasEaten?: boolean;\n\n  @prop({ type: String })\n  public nicknames?: string[];\n")))),(0,r.kt)("p",null,"For more on referencing other classes, read ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/reference-other-classes"},"Reference other Classes"),"."))}h.isMDXComponent=!0}}]);