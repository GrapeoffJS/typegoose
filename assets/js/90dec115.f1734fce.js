"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[8174],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),l=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return t?i.createElement(h,o(o({ref:n},c),{},{components:t})):i.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var i=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(7462),a=t(7294),r=t(2389),o=t(9443);var s=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=t(3039),l=t(6010),c="tabItem_1uMI";function u(e){var n,t,i,r=e.lazy,o=e.block,u=e.defaultValue,p=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),y=(0,d.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(n=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),k=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,a.useState)(g),M=N[0],x=N[1],T=[],A=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var B=k[m];null!=B&&B!==M&&v.some((function(e){return e.value===B}))&&x(B)}var E=function(e){var n=e.currentTarget,t=T.indexOf(n),i=v[t].value;i!==M&&(A(n),x(i),null!=m&&w(m,i))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=T.indexOf(e.currentTarget)+1;t=T[i]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:M===n?0:-1,"aria-selected":M===n,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":M===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:E,onClick:E},null!=t?t:n)}))),r?(0,a.cloneElement)(f.filter((function(e){return e.props.value===M}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==M})}))))}function p(e){var n=(0,r.Z)();return a.createElement(u,(0,i.Z)({key:String(n)},e))}},9443:function(e,n,t){var i=(0,t(7294).createContext)(void 0);n.Z=i},6393:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=t(5064),s=t(8215),d=["components"],l={id:"nested-discriminators",title:"Nested Discriminators"},c=void 0,u={unversionedId:"guides/advanced/nested-discriminators",id:"guides/advanced/nested-discriminators",isDocsHomePage:!1,title:"Nested Discriminators",description:"Use-Case",source:"@site/../docs/guides/advanced/nested-discriminators.mdx",sourceDirName:"guides/advanced",slug:"/guides/advanced/nested-discriminators",permalink:"/typegoose/docs/guides/advanced/nested-discriminators",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/nested-discriminators.mdx",tags:[],version:"current",frontMatter:{id:"nested-discriminators",title:"Nested Discriminators"},sidebar:"guides",previous:{title:"Non-Nested Discriminators",permalink:"/typegoose/docs/guides/advanced/non-nested-discriminators"},next:{title:"Typegoose's Name Generation",permalink:"/typegoose/docs/guides/advanced/name-generation"}},p=[{value:"Use-Case",id:"use-case",children:[],level:2},{value:"First thought",id:"first-thought",children:[],level:2},{value:"Fixing it with Nested Discriminators",id:"fixing-it-with-nested-discriminators",children:[],level:2},{value:"Extras",id:"extras",children:[{value:"Multiple ways to define nested discriminators",id:"multiple-ways-to-define-nested-discriminators",children:[],level:3}],level:2},{value:"See Also",id:"see-also",children:[],level:2}],m={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"use-case"},"Use-Case"),(0,r.kt)("p",null,"If you dont know an use case for this, consider the following:",(0,r.kt)("br",{parentName:"p"}),"\n","A Veterinarian that wants to store medication information about the current patients in their care, how would it be done in mongoose / typegoose?"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This Guide will use similar examples and guide style to that from ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/non-nested-discriminators"},"Non-Nested-Discriminators"),"."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Nested Discriminators may also be called "Embedded Discriminators".'))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This Guide will use the ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/assertions"},(0,r.kt)("inlineCode",{parentName:"a"},"assertion"))," function that typegoose provides.",(0,r.kt)("br",{parentName:"p"}),"\n","TL;DR: This function is basically like NodeJS's ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assertvalue-message"},(0,r.kt)("inlineCode",{parentName:"a"},"assert")),", just more typescript friendly."))),(0,r.kt)("h2",{id:"first-thought"},"First thought"),(0,r.kt)("p",null,"At first you might think to do a basic array, that is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Mixed"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface MedicationA {\n  name: string;\n  amount: number;\n}\n\ninterface MedicationB {\n  name: string;\n  length: number;\n}\n\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n\n  // Even when not setting the type explicitly, the resulting type would be "Mixed" with the typescript type below\n  @prop({ type: mongoose.Schema.Types.Mixed })\n  public medications?: (MedicationA | MedicationB)[];\n}\n\nconst AnimalModel = getModelForClass(Animal);\n')),(0,r.kt)("p",null,"And then in some code accessing the properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const doc = await AnimalModel.create({\n  patientNumber: 0,\n  medications: [\n    {\n      name: 'med1',\n      amount: 10,\n    } as MedicationA,\n    {\n      name: 'med2',\n      length: 5,\n    } as MedicationB,\n    {\n      unknownType: 1,\n    },\n  ],\n});\n\nassertion(doc.medications[0].name === 'med1');\nassertion(doc.medications[1].name === 'med2');\nassertion(doc.medications[2].unknownType === 1);\nassertion(doc.medications.length === 3);\n")),(0,r.kt)("p",null,"Which is obviously problematic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No Runtime validation and no Middleware applied to elements of the array (because of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Mixed"),")"),(0,r.kt)("li",{parentName:"ul"},"Because of no validation, unknown properties like ",(0,r.kt)("inlineCode",{parentName:"li"},"unknownType")," will persist")),(0,r.kt)("h2",{id:"fixing-it-with-nested-discriminators"},"Fixing it with Nested Discriminators"),(0,r.kt)("p",null,"The code from ",(0,r.kt)("a",{parentName:"p",href:"#first-thought"},"First though")," is not that far off of what nested discriminators will need to work:"),(0,r.kt)(o.Z,{groupId:"diff-full",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"diff",label:"Difference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+ @modelOptions({\n+   schemaOptions: {\n+     // Set the property key which is used to discriminate between the different types\n+     discriminatorKey: 'name',\n+     // Disable automatic \"_id\" property\n+     _id: false,\n+   },\n+ })\n+ class MedicationBase {\n+   @prop({ required: true })\n+   public name!: string;\n+ }\n\n+ enum MedicationTypes {\n+   MedicationA = 'MedicationA',\n+   MedicationB = 'MedicationB',\n+ }\n\n- interface MedicationA {\n-   name: string;\n-   amount: number;\n+ class MedicationA extends MedicationBase {\n+   @prop({ required: true })\n+   public amount!: number;\n}\n\n- interface MedicationB {\n-   name: string;\n-   length: number;\n+ class MedicationB extends MedicationBase {\n+   @prop({ required: true })\n+   public length!: number;\n}\n\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n\n-   // Even when not setting the type explicitly, the resulting type would be \"Mixed\" with the typescript type below\n-   @prop({ type: mongoose.Schema.Types.Mixed })\n-   public medications?: (MedicationA | MedicationB)[];\n+   @prop({\n+     required: true,\n+     // Set the Base class, which all types need to extend from\n+     type: MedicationBase,\n+     // Set the nested discriminators that are used for this property\n+     discriminators: () => [\n+       // The \"advanced\" way of defining types is used here, to make it easier to understand\n+       { type: MedicationA, value: MedicationTypes.MedicationA },\n+       { type: MedicationB, value: MedicationTypes.MedicationB },\n+     ],\n+   })\n+   public medications!: MedicationBase[];\n}\n\nconst AnimalModel = getModelForClass(Animal);\n"))),(0,r.kt)(s.Z,{value:"fullcode",label:"Full Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({\n  schemaOptions: {\n    // Set the property key which is used to discriminate between the different types\n    discriminatorKey: 'name',\n    // Disable automatic \"_id\" property\n    _id: false,\n  },\n})\nclass MedicationBase {\n  @prop({ required: true })\n  public name!: string;\n}\n\n// A Enum is used to easily keep track of different types, instead of hardcoding it in many places\nenum MedicationTypes {\n  MedicationA = 'MedicationA',\n  MedicationB = 'MedicationB',\n}\n\nclass MedicationA extends MedicationBase {\n  @prop({ required: true })\n  public amount!: number;\n}\n\nclass MedicationB extends MedicationBase {\n  @prop({ required: true })\n  public length!: number;\n}\n\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n\n  @prop({\n    required: true,\n    // Set the Base class, which all types need to extend from\n    type: MedicationBase,\n    // Set the nested discriminators that are used for this property\n    discriminators: () => [\n      // The \"advanced\" way of defining types is used here, to make it easier to understand, see section #Extras\n      { type: MedicationA, value: MedicationTypes.MedicationA },\n      { type: MedicationB, value: MedicationTypes.MedicationB },\n    ],\n  })\n  public medications!: MedicationBase[];\n}\n\nconst AnimalModel = getModelForClass(Animal);\n")))),(0,r.kt)("p",null,"And then in some code accessing the properties again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const doc = await AnimalModel.create({\n  patientNumber: 1,\n  medications: [\n    {\n      name: MedicationTypes.MedicationA,\n      amount: 10,\n    } as MedicationA,\n    {\n      name: MedicationTypes.MedicationB,\n      length: 5,\n    } as MedicationB,\n  ],\n});\n\ntry {\n  await AnimalModel.create({\n    patientNumber: 2,\n    medications: [\n      {\n        unknownType: 1,\n      },\n    ],\n  });\n\n  throw new Error('Expected create to fail');\n} catch (err) {\n  assertion(err instanceof mongoose.Error.ValidationError);\n}\n\nassertion(doc.medications[0].name === MedicationTypes.MedicationA);\nassertion(doc.medications[1].name === MedicationTypes.MedicationB);\nassertion(doc.medications.length === 2);\n")),(0,r.kt)("p",null,"This Time, it will correctly validate and apply middleware to all elements of the array, meaning it will correctly strip all unknown elements and error if elements are missing (as can be seen in the ",(0,r.kt)("inlineCode",{parentName:"p"},"try-catch"),")."),(0,r.kt)("h2",{id:"extras"},"Extras"),(0,r.kt)("h3",{id:"multiple-ways-to-define-nested-discriminators"},"Multiple ways to define nested discriminators"),(0,r.kt)("p",null,"There are currently multiple ways to define nested discriminators, which are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Directly and only the ",(0,r.kt)("inlineCode",{parentName:"li"},"Class")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"DiscriminatorObject")," (which is used in the examples)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'class Animal {\n  @prop({\n    type: MedicationBase,\n    // Define nested discriminators with a "DiscriminatorObject"\n    // Explicitly set the discriminator value\n    discriminators: () => [\n      { type: MedicationA, value: MedicationTypes.MedicationA },\n      { type: MedicationB, value: MedicationTypes.MedicationB },\n    ],\n    // Define nested discriminators with the "Class" directly\n    // Implicitly converts the generated model name to the discriminator value\n    discriminators: () => [\n      MedicationA,\n      MedicationB,\n    ],\n  })\n  public medications!: MedicationBase[];\n}\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"@prop")," option ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/prop#discriminators"},(0,r.kt)("inlineCode",{parentName:"a"},"discriminators")),"."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Also see the blog post from ",(0,r.kt)("inlineCode",{parentName:"li"},"thecodebarbarian")," (or also known as ",(0,r.kt)("inlineCode",{parentName:"li"},"vkarpov15")," on github) about ",(0,r.kt)("a",{parentName:"li",href:"https://thecodebarbarian.com/mongoose-4.12-single-embedded-discriminators.html"},"Embedded Discriminators"),".")))}h.isMDXComponent=!0}}]);