import{T as m,r as d,o as c,d as u,b as o,u as e,Z as p,w as r,a,n as f,e as _,h as w,F as b}from"./app-e8cdb20f.js";import{A as h}from"./AuthenticationCard-4de45fa5.js";import{_ as g}from"./AuthenticationCardLogo-1d1da24f.js";import{_ as x,a as v}from"./TextInput-d634fb8c.js";import{_ as y}from"./InputLabel-67dab76e.js";import{_ as V}from"./PrimaryButton-fff3fbfc.js";import"./_plugin-vue_export-helper-c27b6911.js";const C=a("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],k={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup(A){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(B,i)=>(c(),u(b,null,[o(e(p),{title:"Secure Area"}),o(h,null,{logo:r(()=>[o(g)]),default:r(()=>[C,a("form",{onSubmit:w(n,["prevent"])},[a("div",null,[o(y,{for:"password",value:"Password"}),o(x,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(v,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),a("div",k,[o(V,{class:f(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[_(" Confirm ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{q as default};
