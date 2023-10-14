import{_ as i}from"./AppLayout-c5e40b94.js";import{o as t,d as o,a as s,F as c,f as d,t as n,h}from"./app-e8cdb20f.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const p={name:"Index",layout:i,props:["products","cvs"],methods:{createCv(){this.$inertia.post("/cv",{title:this.title,users:this.userIds})}}},u={class:"py-12"},g={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},f={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},m={class:"mx-auto max-w-2xl px-4 py-4 lg:max-w-7xl lg:px-8"},v={class:"flex mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},x=["href"],w={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"},y=["src","alt"],b={class:"text-sm flex justify-between"},j={class:"pl-2 pt-2"},C={class:"relative pr-2 pt-2 rounded-full"},k=["href"],B=s("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"h-5 w-5 text-gray-400",viewBox:"0 0 512 512"},[s("path",{fill:"currentColor",d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"})],-1),I=[B],$=s("div",{class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"},[s("img",{style:{width:"265px"},src:"#",class:"h-full w-full object-cover object-center lg:h-full lg:w-full"})],-1),z=[$];function M(l,r,F,S,A,a){return t(),o("div",u,[s("div",g,[s("div",f,[s("div",m,[s("div",v,[(t(!0),o(c,null,d(this.cvs,e=>(t(),o("div",{key:e.id,class:"mr-4 group relative"},[s("a",{href:l.route("cvs.show",e.id)},[s("div",w,[s("img",{style:{width:"250px"},src:e.imageSrc,alt:e.imageAlt,class:"h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,y)])],8,x),s("div",null,[s("div",b,[s("p",j,n(e.title),1),s("div",C,[s("a",{href:l.route("cvs.download",e.id),class:"btnMore"},I,8,k)])])])]))),128)),s("a",{onClick:r[0]||(r[0]=h((...e)=>a.createCv&&a.createCv(...e),["prevent"])),href:"#"},z)])])])])])}const N=_(p,[["render",M]]);export{N as default};
