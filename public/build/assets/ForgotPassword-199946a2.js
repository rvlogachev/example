import{T as d,o as r,d as m,b as e,u as t,Z as c,w as o,t as _,g as f,a,n as p,e as w,h as g,F as b}from"./app-e8cdb20f.js";import{A as y}from"./AuthenticationCard-4de45fa5.js";import{_ as h}from"./AuthenticationCardLogo-1d1da24f.js";import{_ as x,a as k}from"./TextInput-d634fb8c.js";import{_ as V}from"./InputLabel-67dab76e.js";import{_ as v}from"./PrimaryButton-fff3fbfc.js";import"./_plugin-vue_export-helper-c27b6911.js";const F=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:String},setup(l){const s=d({email:""}),n=()=>{s.post(route("password.email"))};return(S,i)=>(r(),m(b,null,[e(t(c),{title:"Forgot Password"}),e(y,null,{logo:o(()=>[e(h)]),default:o(()=>[F,l.status?(r(),m("div",N,_(l.status),1)):f("",!0),a("form",{onSubmit:g(n,["prevent"])},[a("div",null,[e(V,{for:"email",value:"Email"}),e(x,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":i[0]||(i[0]=u=>t(s).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(k,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),a("div",C,[e(v,{class:p({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{z as default};