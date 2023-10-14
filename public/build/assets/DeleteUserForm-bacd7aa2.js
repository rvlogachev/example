import{r as i,T as f,o as y,c as w,w as e,e as s,a as c,b as t,u as a,z as h,n as v}from"./app-e8cdb20f.js";import{_ as k}from"./Modal-44139595.js";import{_ as m}from"./DangerButton-2b4fbf50.js";import{_ as x}from"./DialogModal-a9b16c36.js";import{_ as g,a as C}from"./TextInput-d634fb8c.js";import{_ as D}from"./SecondaryButton-5d90cf7d.js";import"./SectionTitle-3ac21834.js";import"./_plugin-vue_export-helper-c27b6911.js";const b=c("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),V={class:"mt-5"},$={class:"mt-4"},O={__name:"DeleteUserForm",setup(A){const r=i(!1),l=i(null),o=f({password:""}),p=()=>{r.value=!0,setTimeout(()=>l.value.focus(),250)},u=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>l.value.focus(),onFinish:()=>o.reset()})},n=()=>{r.value=!1,o.reset()};return(U,d)=>(y(),w(k,null,{title:e(()=>[s(" Delete Account ")]),description:e(()=>[s(" Permanently delete your account. ")]),content:e(()=>[b,c("div",V,[t(m,{onClick:p},{default:e(()=>[s(" Delete Account ")]),_:1})]),t(x,{show:r.value,onClose:n},{title:e(()=>[s(" Delete Account ")]),content:e(()=>[s(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),c("div",$,[t(g,{ref_key:"passwordInput",ref:l,modelValue:a(o).password,"onUpdate:modelValue":d[0]||(d[0]=_=>a(o).password=_),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:h(u,["enter"])},null,8,["modelValue","onKeyup"]),t(C,{message:a(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(D,{onClick:n},{default:e(()=>[s(" Cancel ")]),_:1}),t(m,{class:v(["ml-3",{"opacity-25":a(o).processing}]),disabled:a(o).processing,onClick:u},{default:e(()=>[s(" Delete Account ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{O as default};
