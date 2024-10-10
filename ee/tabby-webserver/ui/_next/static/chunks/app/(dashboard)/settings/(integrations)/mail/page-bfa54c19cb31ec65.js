(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{23938:function(e,t,r){Promise.resolve().then(r.bind(r,86921))},86921:function(e,t,r){"use strict";r.r(t),r.d(t,{Mail:function(){return z}});var n=r(36164),s=r(3546),a=r(43240),o=r(11634),i=r(90379),l=r(73051);let c=e=>{let{className:t}=e;return(0,n.jsx)(l.b,{className:t,children:"Configuring SMTP information will enable users to receive database reports via email, such as slow query weekly reports."})};var u=r(84381),d=r(94909),f=r(5493),m=r(2578),x=r(23782),p=r(18500),h=r(73460),j=r(31458),v=r(98150),b=r(82394),y=r(54594);let g=(0,a.BX)("\n  mutation updateEmailSetting($input: EmailSettingInput!) {\n    updateEmailSetting(input: $input)\n  }\n"),N=(0,a.BX)("\n  mutation deleteEmailSetting {\n    deleteEmailSetting\n  }\n"),w=x.Ry({smtpUsername:x.Z_(),smtpPassword:x.Z_(),smtpServer:x.Z_(),smtpPort:x.oQ.number({invalid_type_error:"Invalid port",required_error:"Required"}),fromAddress:x.Z_(),encryption:x.jb(p.dW),authMethod:x.jb(p.Hi)}),Z=s.forwardRef((e,t)=>{let{isNew:r,onSuccess:a,onDelete:i,defaultValues:l}=e,c=s.useMemo(()=>({encryption:p.dW.None,authMethod:p.Hi.None,...l||{}}),[l]),x=(0,f.cI)({resolver:(0,u.F)(w),defaultValues:c}),Z=!(0,d.Z)(x.formState.dirtyFields),[S,I]=s.useState(!1),_=(0,o.D)(g,{form:x,onCompleted(e){(null==e?void 0:e.updateEmailSetting)&&(null==a||a(),m.A.success("Email configuration is updated."))}}),C=(0,o.D)(N,{onCompleted(e){(null==e?void 0:e.deleteEmailSetting)&&(null==i||i())},onError(e){m.A.error(e.message)}}),A=async e=>{e.preventDefault(),await C()},O=async e=>{await _({input:{...e,smtpPassword:e.smtpPassword!==(null==l?void 0:l.smtpPassword)?e.smtpPassword:void 0}})};return s.useImperativeHandle(t,()=>({form:x}),[x]),(0,n.jsx)(v.l0,{...x,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:x.handleSubmit(O),children:[(0,n.jsxs)("div",{className:"flex flex-col gap-6 lg:flex-row",children:[(0,n.jsx)(v.Wi,{control:x.control,name:"smtpServer",render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{required:!0,children:"SMTP Server Host"}),(0,n.jsx)(v.NI,{children:(0,n.jsx)(b.I,{placeholder:"e.g. smtp.gmail.com",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:"w-80 min-w-max",...t})}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsx)(v.Wi,{control:x.control,name:"smtpPort",render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{required:!0,children:"SMTP Server Port"}),(0,n.jsx)(v.NI,{children:(0,n.jsx)(b.I,{type:"number",placeholder:"e.g. 25",className:"w-80 min-w-max",...t})}),(0,n.jsx)(v.zG,{})]})}})]}),(0,n.jsx)(v.Wi,{control:x.control,name:"fromAddress",render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{required:!0,children:"From"}),(0,n.jsx)(v.NI,{children:(0,n.jsx)(b.I,{placeholder:"e.g. from@gmail.com",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",className:"w-80 min-w-max",...t})}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsx)(v.Wi,{control:x.control,name:"authMethod",render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{required:!0,children:"Authentication Method"}),(0,n.jsxs)(y.Ph,{onValueChange:t.onChange,defaultValue:t.value,name:t.name,children:[(0,n.jsx)(v.NI,{children:(0,n.jsx)(y.i4,{className:"w-80 min-w-max",children:(0,n.jsx)(y.ki,{placeholder:"Select a method"})})}),(0,n.jsxs)(y.Bw,{children:[(0,n.jsx)(y.Ql,{value:p.Hi.None,children:"NONE"}),(0,n.jsx)(y.Ql,{value:p.Hi.Plain,children:"PLAIN"}),(0,n.jsx)(y.Ql,{value:p.Hi.Login,children:"LOGIN"})]})]}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex flex-col gap-6 lg:flex-row",children:[(0,n.jsx)(v.Wi,{control:x.control,name:"smtpUsername",render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{required:!0,children:"SMTP Username"}),(0,n.jsx)(v.NI,{children:(0,n.jsx)(b.I,{type:"string",placeholder:"e.g. support@yourcompany.com",autoCapitalize:"none",autoCorrect:"off",className:"w-80 min-w-max",...t})}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsx)(v.Wi,{control:x.control,name:"smtpPassword",render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{required:!0,children:"SMTP Password"}),(0,n.jsx)(v.NI,{children:(0,n.jsx)(b.I,{type:"password",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",className:"w-80 min-w-max",...t})}),(0,n.jsx)(v.zG,{})]})}})]}),(0,n.jsx)(v.Wi,{control:x.control,name:"encryption",render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{required:!0,children:"Encryption"}),(0,n.jsxs)(y.Ph,{onValueChange:t.onChange,defaultValue:t.value,name:t.name,children:[(0,n.jsx)(v.NI,{children:(0,n.jsx)(y.i4,{className:"w-80 min-w-max",children:(0,n.jsx)(y.ki,{placeholder:"Select an encryption"})})}),(0,n.jsxs)(y.Bw,{children:[(0,n.jsx)(y.Ql,{value:p.dW.None,children:"NONE"}),(0,n.jsx)(y.Ql,{value:p.dW.SslTls,children:"SSL/TLS"}),(0,n.jsx)(y.Ql,{value:p.dW.StartTls,children:"STARTTLS"})]})]}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[!r&&(0,n.jsxs)(h.aR,{open:S,onOpenChange:I,children:[(0,n.jsx)(h.vW,{asChild:!0,children:(0,n.jsx)(j.z,{variant:"hover-destructive",children:"Delete"})}),(0,n.jsxs)(h._T,{children:[(0,n.jsxs)(h.fY,{children:[(0,n.jsx)(h.f$,{children:"Are you absolutely sure?"}),(0,n.jsx)(h.yT,{children:"This action cannot be undone. It will permanently delete the current setting."})]}),(0,n.jsxs)(h.xo,{children:[(0,n.jsx)(h.le,{children:"Cancel"}),(0,n.jsx)(h.OL,{className:(0,j.d)({variant:"destructive"}),onClick:A,children:"Yes, delete it"})]})]})]}),(0,n.jsx)(j.z,{type:"submit",disabled:!r&&!Z,children:r?"Create":"Update"})]})]}),(0,n.jsx)(v.zG,{className:"text-center"})]})})});Z.displayName="MailForm";var S=r(21808),I=r(75561),_=r(81565),C=r(5266);let A=(0,I.B)("\n  mutation SendTestEmail($to: String!) {\n    sendTestEmail(to: $to)\n  }\n"),O=x.Ry({to:x.Z_().email("Invalid email address")});function P(e){let{onSuccess:t}=e,r=(0,f.cI)({resolver:(0,u.F)(O)}),{isSubmitting:s}=r.formState,a=(0,o.D)(A,{form:r});return(0,n.jsx)(v.l0,{...r,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-4",onSubmit:r.handleSubmit(e=>a(e).then(e=>{var r;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.sendTestEmail)&&(m.A.info("A test email has been sent. If your configuration is correct, you should receive an email shortly."),null==t||t())})),children:[(0,n.jsx)(C._,{children:"Send Test Email To"}),(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)(v.Wi,{control:r.control,name:"to",render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.NI,{children:(0,n.jsx)(b.I,{placeholder:"e.g. ".concat(S.o0),type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",className:"w-80",...t})}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsxs)(j.z,{className:"self-start",type:"submit",disabled:s,children:[s&&(0,n.jsx)(_.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Send"]})]})]}),(0,n.jsx)(v.zG,{className:"text-center"})]})})}let T=(0,a.BX)("\n  query emailSetting {\n    emailSetting {\n      smtpUsername\n      smtpServer\n      fromAddress\n      encryption\n      authMethod\n      smtpPort\n    }\n  }\n"),R="********************************",z=()=>{var e,t;let[r,a]=s.useState(),[l,u]=s.useState(!1),d=s.useRef(null),f=()=>o.L.query(T,{}).toPromise().then(e=>(a(e),u(!0),e)),m=!(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.emailSetting),x=m?{}:{...null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.emailSetting,smtpPassword:R};return s.useEffect(()=>{f()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{}),l?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mb-8 border-b pb-4",children:(0,n.jsx)(Z,{defaultValues:x,isNew:m,onSuccess:()=>{f().then(e=>{var t,r,n;let s=null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.emailSetting;s&&(null===(n=d.current)||void 0===n||null===(r=n.form)||void 0===r||r.reset({...s,smtpPassword:R}))})},onDelete:()=>{u(!1),f()},ref:d})}),(0,n.jsx)(P,{})]}):(0,n.jsx)(i.cg,{})]})}},90379:function(e,t,r){"use strict";r.d(t,{PF:function(){return l},cg:function(){return o},tB:function(){return i}});var n=r(36164),s=r(1544),a=r(3448);let o=e=>{let{className:t,...r}=e;return(0,n.jsxs)("div",{className:(0,s.cn)("space-y-3",t),...r,children:[(0,n.jsx)(a.O,{className:"h-4 w-full"}),(0,n.jsx)(a.O,{className:"h-4 w-full"}),(0,n.jsx)(a.O,{className:"h-4 w-full"}),(0,n.jsx)(a.O,{className:"h-4 w-full"})]})},i=e=>{let{className:t,...r}=e;return(0,n.jsx)(a.O,{className:(0,s.cn)("h-4 w-full",t),...r})},l=e=>{let{className:t,...r}=e;return(0,n.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",t),...r,children:[(0,n.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(a.O,{className:"h-4 w-full"}),(0,n.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(a.O,{className:"h-4 w-full"})]})}},73051:function(e,t,r){"use strict";r.d(t,{b:function(){return l}});var n=r(36164);r(3546);var s=r(70652),a=r.n(s),o=r(1544),i=r(81565);let l=e=>{let{className:t,externalLink:r,externalLinkText:s="Learn more",children:l}=e;return(0,n.jsx)("div",{className:(0,o.cn)("mb-4 flex items-center gap-4",t),children:(0,n.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[l,!!r&&(0,n.jsxs)(a(),{className:"ml-2 inline-flex cursor-pointer flex-row items-center text-primary hover:underline",href:r,target:"_blank",children:[s,(0,n.jsx)(i.IconExternalLink,{className:"ml-1"})]})]})})}},73460:function(e,t,r){"use strict";r.d(t,{OL:function(){return j},_T:function(){return f},aR:function(){return l},f$:function(){return p},fY:function(){return m},le:function(){return v},vW:function(){return c},xo:function(){return x},yT:function(){return h}});var n=r(36164),s=r(3546),a=r(28961),o=r(1544),i=r(31458);let l=a.fC,c=a.xz,u=e=>{let{className:t,children:r,...s}=e;return(0,n.jsx)(a.h_,{className:(0,o.cn)(t),...s,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-end justify-center sm:items-center",children:r})})};u.displayName=a.h_.displayName;let d=s.forwardRef((e,t)=>{let{className:r,children:s,...i}=e;return(0,n.jsx)(a.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",r),...i,ref:t})});d.displayName=a.aV.displayName;let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsxs)(u,{children:[(0,n.jsx)(d,{}),(0,n.jsx)(a.VY,{ref:t,className:(0,o.cn)("fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",r),...s})]})});f.displayName=a.VY.displayName;let m=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...r})};m.displayName="AlertDialogHeader";let x=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};x.displayName="AlertDialogFooter";let p=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold",r),...s})});p.displayName=a.Dx.displayName;let h=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...s})});h.displayName=a.dk.displayName;let j=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.aU,{ref:t,className:(0,o.cn)((0,i.d)(),r),...s})});j.displayName=a.aU.displayName;let v=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.$j,{ref:t,className:(0,o.cn)((0,i.d)({variant:"outline"}),"mt-2 sm:mt-0",r),...s})});v.displayName=a.$j.displayName},31458:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return c}});var n=r(36164),s=r(3546),a=r(74047),o=r(14375),i=r(1544);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:c=!1,...u}=e,d=c?a.g7:"button";return(0,n.jsx)(d,{className:(0,i.cn)(l({variant:s,size:o,className:r})),ref:t,...u})});c.displayName="Button"},98150:function(e,t,r){"use strict";r.d(t,{NI:function(){return h},Wi:function(){return d},l0:function(){return c},lX:function(){return p},pf:function(){return j},xJ:function(){return x},zG:function(){return v}});var n=r(36164),s=r(3546),a=r(74047),o=r(5493),i=r(1544),l=r(5266);let c=o.RV,u=s.createContext({}),d=e=>{let{...t}=e;return(0,n.jsx)(u.Provider,{value:{name:t.name},children:(0,n.jsx)(o.Qr,{...t})})},f=()=>{let e=s.useContext(u),t=s.useContext(m),{getFieldState:r,formState:n}=(0,o.Gc)(),a=e.name||"root",i=r(a,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:l}=t;return{id:l,name:a,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...i}},m=s.createContext({}),x=s.forwardRef((e,t)=>{let{className:r,...a}=e,o=s.useId();return(0,n.jsx)(m.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:t,className:(0,i.cn)("space-y-2",r),...a})})});x.displayName="FormItem";let p=s.forwardRef((e,t)=>{let{className:r,required:s,...a}=e,{error:o,formItemId:c}=f();return(0,n.jsx)(l._,{ref:t,className:(0,i.cn)(o&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',r),htmlFor:c,...a})});p.displayName="FormLabel";let h=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:o,formDescriptionId:i,formMessageId:l}=f();return(0,n.jsx)(a.g7,{ref:t,id:o,"aria-describedby":s?"".concat(i," ").concat(l):"".concat(i),"aria-invalid":!!s,...r})});h.displayName="FormControl";let j=s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:a}=f();return(0,n.jsx)("div",{ref:t,id:a,className:(0,i.cn)("text-sm text-muted-foreground",r),...s})});j.displayName="FormDescription";let v=s.forwardRef((e,t)=>{let{className:r,children:s,...a}=e,{error:o,formMessageId:l}=f(),c=o?String(null==o?void 0:o.message):s;return c?(0,n.jsx)("p",{ref:t,id:l,className:(0,i.cn)("text-sm font-medium text-destructive",r),...a,children:c}):null});v.displayName="FormMessage"},82394:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(36164),s=r(3546),a=r(1544);let o=s.forwardRef((e,t)=>{let{className:r,type:s,...o}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},5266:function(e,t,r){"use strict";r.d(t,{_:function(){return c}});var n=r(36164),s=r(3546),a=r(90893),o=r(14375),i=r(1544);let l=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.f,{ref:t,className:(0,i.cn)(l(),r),...s})});c.displayName=a.f.displayName},54594:function(e,t,r){"use strict";r.d(t,{Bw:function(){return f},DI:function(){return c},Ph:function(){return l},Ql:function(){return x},U$:function(){return p},i4:function(){return d},ki:function(){return u}});var n=r(36164),s=r(3546),a=r(31889),o=r(1544),i=r(81565);let l=a.fC,c=a.ZA,u=a.B4,d=s.forwardRef((e,t)=>{let{className:r,children:s,...l}=e;return(0,n.jsxs)(a.xz,{ref:t,className:(0,o.cn)("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),...l,children:[s,(0,n.jsx)(a.JO,{asChild:!0,children:(0,n.jsx)(i.IconChevronUpDown,{className:"opacity-50"})})]})});d.displayName=a.xz.displayName;let f=s.forwardRef((e,t)=>{let{className:r,children:s,position:i="popper",...l}=e;return(0,n.jsx)(a.h_,{children:(0,n.jsx)(a.VY,{ref:t,className:(0,o.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80","popper"===i&&"translate-y-1",r),position:i,...l,children:(0,n.jsx)(a.l_,{className:(0,o.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s})})})});f.displayName=a.VY.displayName;let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.__,{ref:t,className:(0,o.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...s})});m.displayName=a.__.displayName;let x=s.forwardRef((e,t)=>{let{className:r,children:s,isPlaceHolder:l,...c}=e;return(0,n.jsxs)(a.ck,{ref:t,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...c,children:[!l&&(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(a.wU,{children:(0,n.jsx)(i.IconCheck,{className:"h-4 w-4"})})}),(0,n.jsx)(a.eT,{children:s})]})});x.displayName=a.ck.displayName;let p=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",r),...s})});p.displayName=a.Z0.displayName},3448:function(e,t,r){"use strict";r.d(t,{O:function(){return a}});var n=r(36164),s=r(1544);function a(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...r})}},21808:function(e,t,r){"use strict";r.d(t,{$6:function(){return a},L8:function(){return s},o0:function(){return n}});let n="name@yourcompany.com",s=20,a={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_CONTEXTS:"_tabby_search_initial_contexts"}},70652:function(e,t,r){e.exports=r(54007)},99807:function(e,t,r){"use strict";r.d(t,{T:function(){return o},f:function(){return i}});var n=r(65122),s=r(3546),a=r(72205);let o=(0,s.forwardRef)((e,t)=>(0,s.createElement)(a.WV.span,(0,n.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),i=o},63563:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(36586),s=(0,r(34659).Z)(Object.keys,Object),a=Object.prototype.hasOwnProperty,o=function(e){if(!(0,n.Z)(e))return s(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},35270:function(e,t){"use strict";t.Z=function(e){return function(t){return e(t)}}},43108:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(47404),s=r(48717),a=(0,n.Z)(s.Z,"DataView"),o=r(98512),i=(0,n.Z)(s.Z,"Promise"),l=r(57390),c=(0,n.Z)(s.Z,"WeakMap"),u=r(17996),d=r(36423),f="[object Map]",m="[object Promise]",x="[object Set]",p="[object WeakMap]",h="[object DataView]",j=(0,d.Z)(a),v=(0,d.Z)(o.Z),b=(0,d.Z)(i),y=(0,d.Z)(l.Z),g=(0,d.Z)(c),N=u.Z;(a&&N(new a(new ArrayBuffer(1)))!=h||o.Z&&N(new o.Z)!=f||i&&N(i.resolve())!=m||l.Z&&N(new l.Z)!=x||c&&N(new c)!=p)&&(N=function(e){var t=(0,u.Z)(e),r="[object Object]"==t?e.constructor:void 0,n=r?(0,d.Z)(r):"";if(n)switch(n){case j:return h;case v:return f;case b:return m;case y:return x;case g:return p}return t});var w=N},36586:function(e,t){"use strict";var r=Object.prototype;t.Z=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||r)}},20697:function(e,t,r){"use strict";var n=r(64380),s="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=s&&"object"==typeof module&&module&&!module.nodeType&&module,o=a&&a.exports===s&&n.Z.process,i=function(){try{var e=a&&a.require&&a.require("util").types;if(e)return e;return o&&o.binding&&o.binding("util")}catch(e){}}();t.Z=i},34659:function(e,t){"use strict";t.Z=function(e,t){return function(r){return e(t(r))}}},97589:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(17996),s=r(96786),a=function(e){return(0,s.Z)(e)&&"[object Arguments]"==(0,n.Z)(e)},o=Object.prototype,i=o.hasOwnProperty,l=o.propertyIsEnumerable,c=a(function(){return arguments}())?a:function(e){return(0,s.Z)(e)&&i.call(e,"callee")&&!l.call(e,"callee")}},38813:function(e,t){"use strict";var r=Array.isArray;t.Z=r},20568:function(e,t,r){"use strict";var n=r(11146),s=r(69006);t.Z=function(e){return null!=e&&(0,s.Z)(e.length)&&!(0,n.Z)(e)}},90328:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(48717),s="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=s&&"object"==typeof module&&module&&!module.nodeType&&module,o=a&&a.exports===s?n.Z.Buffer:void 0,i=(o?o.isBuffer:void 0)||function(){return!1}},94909:function(e,t,r){"use strict";var n=r(63563),s=r(43108),a=r(97589),o=r(38813),i=r(20568),l=r(90328),c=r(36586),u=r(33321),d=Object.prototype.hasOwnProperty;t.Z=function(e){if(null==e)return!0;if((0,i.Z)(e)&&((0,o.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,l.Z)(e)||(0,u.Z)(e)||(0,a.Z)(e)))return!e.length;var t=(0,s.Z)(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if((0,c.Z)(e))return!(0,n.Z)(e).length;for(var r in e)if(d.call(e,r))return!1;return!0}},69006:function(e,t){"use strict";t.Z=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},33321:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(17996),s=r(69006),a=r(96786),o={};o["[object Float32Array]"]=o["[object Float64Array]"]=o["[object Int8Array]"]=o["[object Int16Array]"]=o["[object Int32Array]"]=o["[object Uint8Array]"]=o["[object Uint8ClampedArray]"]=o["[object Uint16Array]"]=o["[object Uint32Array]"]=!0,o["[object Arguments]"]=o["[object Array]"]=o["[object ArrayBuffer]"]=o["[object Boolean]"]=o["[object DataView]"]=o["[object Date]"]=o["[object Error]"]=o["[object Function]"]=o["[object Map]"]=o["[object Number]"]=o["[object Object]"]=o["[object RegExp]"]=o["[object Set]"]=o["[object String]"]=o["[object WeakMap]"]=!1;var i=r(35270),l=r(20697),c=l.Z&&l.Z.isTypedArray,u=c?(0,i.Z)(c):function(e){return(0,a.Z)(e)&&(0,s.Z)(e.length)&&!!o[(0,n.Z)(e)]}}},function(e){e.O(0,[1386,55,1058,4007,1350,3643,2578,9421,240,2287,8961,1889,1544,1565,3240,3396,3375,5289,1744],function(){return e(e.s=23938)}),_N_E=e.O()}]);