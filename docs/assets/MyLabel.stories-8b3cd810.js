import{j as _}from"./jsx-runtime-4ca860c5.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const s=({label:l,size:L="normal",allCaps:x,color:v,fontColor:t})=>_.jsx("span",{className:`${L} ${v}`,style:t?{color:`${t}`}:{},children:x?l.toUpperCase():l});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to Display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Font Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:null,description:"Cap all letters or nor",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Text Color based on classes",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Text Color based on color picker",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const q={title:"MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},color:{control:"inline-radio"},allCaps:{control:"boolean"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secondary Label"}},o={args:{label:"Custom Color Label"},argTypes:{fontColor:{control:"color"}}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Basic Label"
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,i,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label",
    allCaps: true
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,y,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label"
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,g,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Custom Color Label"
  },
  argTypes: {
    fontColor: {
      control: 'color'
    }
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const M=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,o as CustomColor,r as Secondary,M as __namedExportsOrder,q as default};
//# sourceMappingURL=MyLabel.stories-8b3cd810.js.map
