import{j as a,M as n,o as i,d as m,b as l,w as r,m as e,a as t,h as c,n as p,g as u}from"./app-e8cdb20f.js";import{S as g}from"./SectionTitle-3ac21834.js";const h={class:"md:grid md:grid-cols-3 md:gap-6"},_={class:"mt-5 md:mt-0 md:col-span-2"},v={class:"grid grid-cols-6 gap-6"},b={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},y={__name:"FormSection",emits:["submitted"],setup(f){const o=a(()=>!!n().actions);return(s,d)=>(i(),m("div",h,[l(g,null,{title:r(()=>[e(s.$slots,"title")]),description:r(()=>[e(s.$slots,"description")]),_:3}),t("div",_,[t("form",{onSubmit:d[0]||(d[0]=c(w=>s.$emit("submitted"),["prevent"]))},[t("div",{class:p(["px-4 py-5 bg-white sm:p-6 shadow",o.value?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[t("div",v,[e(s.$slots,"form")])],2),o.value?(i(),m("div",b,[e(s.$slots,"actions")])):u("",!0)],32)])]))}};export{y as _};
