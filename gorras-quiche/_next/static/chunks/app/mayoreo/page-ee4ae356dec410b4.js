(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[886],{5648:function(e,t,a){Promise.resolve().then(a.bind(a,726))},726:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var s=a(7437),r=a(2265),n=a(8472),o=a(1590),i=a(9733),d=a(7138);function l(){let[e,t]=(0,r.useState)(null),[a,l]=(0,r.useState)([]),[u,m]=(0,r.useState)([]),[f,p]=(0,r.useState)([]),[h,x]=(0,r.useState)(!1),[g,b]=(0,r.useState)(null);(0,r.useEffect)(()=>{(async()=>{try{let e=await n.Z.get("https://wnw6kgjt-8888.use.devtunnels.ms/marcas");l(e.data),console.log(e.data)}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,r.useEffect)(()=>{(async()=>{try{let e=await n.Z.get("https://wnw6kgjt-8888.use.devtunnels.ms/api/products");p(e.data),m(e.data)}catch(e){console.error("PUTAAAAA",e)}})()},[]);let v=e=>{p(u),b(e),x(!1),console.log(e),"Todo"===e.nombre?p(u):p(u.filter(t=>t.brand===e.nombre))},j=e=>{t(e),x(!1),console.log(e),"Hombre"===e?p(u.filter(e=>"H"===e.genero)):"Mujer"===e&&p(u.filter(e=>"M"===e.genero))};return(0,s.jsx)("section",{className:"w-full py-12",children:(0,s.jsxs)("div",{className:"container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto",children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8",children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold tracking-tight",children:"GORRAS QUICHE"}),(0,s.jsx)("p",{className:"text-muted-foreground",children:"Encuentra la gorra perfecta para tu estilo."}),(0,s.jsx)("p",{className:"text-muted-foreground",children:"Precios validos por MAYOR"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 md:ml-auto",children:[(0,s.jsxs)(o.h_,{children:[(0,s.jsx)(o.$F,{asChild:!0,children:(0,s.jsxs)(i.z,{variant:"outline",children:["Marca ",(0,s.jsx)(c,{className:"w-4 h-4 ml-2"})]})}),(0,s.jsx)(o.AW,{align:"start",children:a.map(e=>(0,s.jsx)(o.bO,{checked:(null==g?void 0:g.id)===e.id,onClick:()=>{p(u),console.log(e.nombre),v(e)},children:e.nombre},e.id))})]}),(0,s.jsxs)(o.h_,{children:[(0,s.jsx)(o.$F,{asChild:!0,children:(0,s.jsxs)(i.z,{variant:"outline",children:["G\xe9nero ",(0,s.jsx)(c,{className:"w-4 h-4 ml-2"})]})}),(0,s.jsx)(o.AW,{align:"start",children:["Unisex","Hombre","Mujer"].map(t=>(0,s.jsx)(o.bO,{checked:e===t,onClick:()=>{p(u),j(t)},children:t},t))})]}),(0,s.jsx)(d.default,{className:"button-login",href:"/login/",children:"Login"})]})]}),(0,s.jsx)("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",children:f.map(e=>(0,s.jsxs)("div",{className:"card group text-center ",children:[" ",(0,s.jsx)("img",{src:e.imagen||"/placeholder.svg",alt:e.name,width:300,height:300,className:"rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"}),(0,s.jsxs)("div",{className:"flex-1 py-4",children:[(0,s.jsx)("h3",{className:"font-semibold tracking-tight",children:e.name}),(0,s.jsx)("small",{className:"text-sm leading-none text-muted-foreground",children:e.brand}),(0,s.jsx)("h4",{className:"font-semibold",children:"Q.     "+e.precio_mayor})]})]},e.id))})]})})}function c(e){return(0,s.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M5 12h14"}),(0,s.jsx)("path",{d:"M12 5v14"})]})}function u(){let[e,t]=(0,r.useState)([]),[a,o]=(0,r.useState)(!1),[i,d]=(0,r.useState)(!1),[c,u]=(0,r.useState)(!1),[m,f]=(0,r.useState)(0);return(0,r.useEffect)(()=>{(async()=>{try{let e=await n.Z.get("https://wnw6kgjt-8888.use.devtunnels.ms/api/products-admin");t(e.data)}catch(e){console.error("Error fetching brands:",e)}})()},[]),(0,s.jsx)("div",{children:(0,s.jsx)(l,{})})}},9733:function(e,t,a){"use strict";a.d(t,{z:function(){return l}});var s=a(7437),r=a(2265),n=a(1538),o=a(2218),i=a(9354);let d=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=r.forwardRef((e,t)=>{let{className:a,variant:r,size:o,asChild:l=!1,...c}=e,u=l?n.g7:"button";return(0,s.jsx)(u,{className:(0,i.cn)(d({variant:r,size:o,className:a})),ref:t,...c})});l.displayName="Button"},1590:function(e,t,a){"use strict";a.d(t,{$F:function(){return u},AW:function(){return m},bO:function(){return f},h_:function(){return c}});var s=a(7437),r=a(2265),n=a(8159),o=a(7592),i=a(2468),d=a(8165),l=a(9354);let c=n.fC,u=n.xz;n.ZA,n.Uv,n.Tr,n.Ee,r.forwardRef((e,t)=>{let{className:a,inset:r,children:i,...d}=e;return(0,s.jsxs)(n.fF,{ref:t,className:(0,l.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",r&&"pl-8",a),...d,children:[i,(0,s.jsx)(o.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=n.fF.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...r})}).displayName=n.tu.displayName;let m=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...o}=e;return(0,s.jsx)(n.Uv,{children:(0,s.jsx)(n.VY,{ref:t,sideOffset:r,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...o})})});m.displayName=n.VY.displayName,r.forwardRef((e,t)=>{let{className:a,inset:r,...o}=e;return(0,s.jsx)(n.ck,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r&&"pl-8",a),...o})}).displayName=n.ck.displayName;let f=r.forwardRef((e,t)=>{let{className:a,children:r,checked:o,...d}=e;return(0,s.jsxs)(n.oC,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:o,...d,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(n.wU,{children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})}),r]})});f.displayName=n.oC.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,...o}=e;return(0,s.jsxs)(n.Rk,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...o,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(n.wU,{children:(0,s.jsx)(d.Z,{className:"h-2 w-2 fill-current"})})}),r]})}).displayName=n.Rk.displayName,r.forwardRef((e,t)=>{let{className:a,inset:r,...o}=e;return(0,s.jsx)(n.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",a),...o})}).displayName=n.__.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",a),...r})}).displayName=n.Z0.displayName},9354:function(e,t,a){"use strict";a.d(t,{cn:function(){return n}});var s=a(4839),r=a(6164);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}}},function(e){e.O(0,[183,472,871,207,971,23,744],function(){return e(e.s=5648)}),_N_E=e.O()}]);