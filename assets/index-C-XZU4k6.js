import{r as s,bF as Z,bK as ee,T as te,o as re,F as i,j as e,S as x,ct as _,e7 as L,U as H,B as c,eK as oe,dc as ae,H as ne,eC as se,I as C,cD as le,z as ie,G as ce,A as de,d as q,d9 as E,eL as me,eh as pe,dU as xe}from"./index-HPKc5YUP.js";import{Q as ue}from"./db-Bs8uX73e.js";import{T as be}from"./index-Nx1uYCJF.js";import{T as g}from"./index-DI4vP5Gz.js";import{F as R}from"./index-0OnhU7Ei.js";import{s as u}from"./index-CcVvcWjU.js";import{D as he}from"./index-BEKLa8GD.js";import{F as ye}from"./Table-QeANkcJu.js";import{M as B}from"./index-Bks4OiAF.js";import{S as F}from"./index-CGMEbw1V.js";import{u as ge,D as fe}from"./index-DyD3hTlR.js";import{D as m}from"./index-CI5_7AWC.js";import{P as je}from"./progress-B_Wb36cb.js";import"./CheckOutlined-fDRYKfdS.js";import"./useIcons-BF_uKr-Z.js";import"./index-CQbCxhJJ.js";import"./index-Dpf5NZCY.js";import"./index-B2p4JrAu.js";const{TimePicker:ke,RangePicker:Se}=fe,ve=s.forwardRef((t,r)=>s.createElement(Se,{...t,picker:"time",mode:void 0,ref:r})),f=s.forwardRef((t,r)=>{const{addon:b,renderExtraFooter:h,variant:j,bordered:T,classNames:y,styles:$,popupClassName:N,popupStyle:p,...P}=t,[d]=Z("timePicker",j,T),I=s.useMemo(()=>{if(h)return h;if(b)return b},[b,h]),k={...t,variant:d},[w,z]=ge("timePicker",y,$,N,p,k);return s.createElement(ke,{...P,mode:void 0,ref:r,renderExtraFooter:I,variant:d,classNames:w,styles:z})}),U=ee(f,"popupAlign",void 0,"picker");f._InternalPanelDoNotUseOrYouWillBeFired=U;f.RangePicker=ve;f._InternalPanelDoNotUseOrYouWillBeFired=U;const{Title:O,Text:a}=be,{confirm:Te}=B,Oe=()=>{const{t}=te(["quarantine","management","common","scenario"]),{token:r}=re.useToken(),[b,h]=s.useState([]),[j,T]=s.useState(!1),[y,$]=s.useState(""),[N,p]=s.useState(!1),[P,d]=s.useState(!1),[I,k]=s.useState(!1),[w,z]=s.useState("add"),[n,S]=s.useState(null),[v]=i.useForm(),[A]=i.useForm(),[D]=s.useState(ue.agents),K=D.filter(o=>o.name.toLowerCase().includes(y.toLowerCase())||o.id.toLowerCase().includes(y.toLowerCase())),M=(o,l)=>{if(z(o),o==="edit"&&l){S(l);const X=l.shiftTime?l.shiftTime.split(" - ").map(J=>xe(J,"HH:mm")):null;v.setFieldsValue({...l,shiftTime:X})}else S(null),v.resetFields();p(!0)},Q=o=>{S(o),A.resetFields(),d(!0)},V=o=>{S(o),k(!0)},G=()=>{Te({title:t("common:confirmDelete"),icon:e.jsx(pe,{}),content:t("common:deleteWarning"),okText:t("common:yes"),cancelText:t("common:no"),onOk(){u.success(t("common:deleteSuccess"))}})},W=()=>{const o=u.loading(t("management:refresh")+"...",0);setTimeout(()=>{o(),u.success(t("management:cmdSent"))},800)},Y=[{title:t("scenario:name"),key:"name",render:(o,l)=>e.jsxs(x,{size:"middle",children:[e.jsx(_,{icon:e.jsx(L,{}),style:{background:r.colorPrimary,color:r.colorTextLightSolid}}),e.jsxs("div",{children:[e.jsx(a,{style:{display:"block",color:r.colorText,fontWeight:"bold",fontSize:13},children:t(`scenario:${l.name}`)}),e.jsx(a,{style:{color:r.colorTextDescription,fontSize:11,fontStyle:"italic"},children:l.id})]})]})},{title:t("scenario:role"),dataIndex:"role",key:"role",render:o=>e.jsx(g,{color:"blue",variant:"filled",style:{fontSize:10},children:t(`scenario:role_${o}`)||t(`scenario:${o}`)})},{title:t("scenario:rank"),dataIndex:"rank",key:"rank",render:o=>e.jsx(a,{style:{fontSize:13,color:r.colorTextSecondary},children:t(`scenario:${o}`)})},{title:t("scenario:department"),dataIndex:"department",key:"department",render:o=>e.jsx(a,{style:{fontSize:12},children:t(`scenario:dept_${o}`)||t(`scenario:${o}`)})},{title:t("scenario:assigned"),dataIndex:"assigned",key:"assigned",render:o=>e.jsx(g,{variant:"filled",style:{background:`${r.colorPrimary}15`,color:r.colorPrimary,fontSize:11},children:o})},{title:t("scenario:shiftTime"),dataIndex:"shiftTime",key:"shiftTime",render:o=>e.jsx(a,{style:{fontSize:12,color:r.colorTextDescription},children:o})},{title:t("management:status"),dataIndex:"appStatus",render:o=>e.jsx(H,{status:o==="online"?"processing":"default",text:e.jsx("span",{style:{color:r.colorTextDescription,fontSize:12},children:t(o==="online"?"quarantine:common.online":"quarantine:common.offline")})})},{title:t("common:actions"),key:"actions",align:"center",render:(o,l)=>e.jsxs(x,{children:[e.jsx(c,{size:"small",icon:e.jsx(oe,{}),className:"btn-vibrant-info h-8 px-3",onClick:()=>Q(l),style:{fontSize:11},children:t("management:pushNotification").split(" ")[0]}),e.jsx(c,{size:"small",icon:e.jsx(ae,{}),className:"btn-vibrant-secondary h-8 px-3",onClick:()=>V(l),style:{fontSize:11},children:t("common:detail")})]})}];return e.jsxs("div",{className:"p-6 h-full flex flex-col relative",style:{background:r.colorBgLayout},children:[e.jsxs(R,{justify:"space-between",align:"center",className:"mb-6",children:[e.jsx(O,{level:4,className:"m-0 font-bold",style:{color:r.colorText},children:t("quarantine:navigation.agentMng")}),e.jsxs(x,{size:"middle",children:[e.jsxs(x,{size:2,className:"p-0.5 px-2 rounded-lg border transition-all",style:{background:r.colorBgLayout,borderColor:r.colorBorderSecondary},children:[e.jsx(c,{type:"text",size:"small",icon:e.jsx(ne,{}),className:"btn-utility",onClick:()=>T(!j)}),e.jsx(c,{type:"text",size:"small",icon:e.jsx(se,{}),className:"btn-utility",onClick:()=>u.success(t("management:reportGenerated"))})]}),j&&e.jsx(C,{size:"small",placeholder:t("management:searchPlaceholder"),className:"animate-in fade-in slide-in-from-left-2",style:{width:150,borderRadius:6,background:"rgba(0,0,0,0.2)"},value:y,onChange:o=>$(o.target.value),autoFocus:!0}),e.jsx(he,{orientation:"vertical"}),e.jsx(x,{size:"small",children:[{label:t("management:refresh"),icon:e.jsx(le,{}),className:"btn-vibrant-primary",onClick:W},{label:t("management:add"),icon:e.jsx(ie,{}),className:"btn-vibrant-primary",onClick:()=>M("add")},{label:t("management:edit"),icon:e.jsx(ce,{}),className:"btn-vibrant-primary",onClick:()=>M("edit",D[0])},{label:t("management:delete"),icon:e.jsx(de,{}),className:"btn-vibrant-secondary",onClick:G}].map(o=>e.jsx(c,{className:`${o.className||"btn-vibrant-primary"} border-none h-8 px-4`,icon:o.icon,onClick:o.onClick,children:o.label},o.label))})]})]}),e.jsx(q,{variant:"borderless",className:"shadow-sm flex-1 overflow-hidden",style:{background:r.colorBgContainer,borderRadius:16},styles:{body:{padding:0,height:"100%",display:"flex",flexDirection:"column"}},children:e.jsx(ye,{rowSelection:{type:"checkbox",selectedRowKeys:b,onChange:o=>h(o)},columns:Y,dataSource:K.map(o=>({...o,key:o.id})),pagination:{pageSize:12},className:"custom-table",size:"middle",scroll:{y:"calc(100vh - 320px)"}})}),e.jsx(B,{title:e.jsx(a,{className:"font-bold ml-2",style:{color:r.colorText,fontSize:18},children:t(w==="add"?"management:addAgent":"management:editAgent")}),open:N,onCancel:()=>p(!1),footer:e.jsxs(R,{justify:"end",gap:12,className:"p-6 pt-0",children:[e.jsx(c,{className:"btn-vibrant-secondary h-11 px-10",onClick:()=>p(!1),children:t("common:no")}),e.jsx(c,{className:"btn-vibrant-primary h-11 px-10",onClick:()=>{const o=v.getFieldsValue(),l=o.shiftTime?`${o.shiftTime[0].format("HH:mm")} - ${o.shiftTime[1].format("HH:mm")}`:"";u.success(t("common:saveSuccess")),p(!1),console.log("Saving agent with time:",l)},children:t("common:yes")})]}),centered:!0,width:600,styles:{mask:{backdropFilter:"blur(12px)"},body:{padding:"32px 24px"},header:{padding:"24px 24px 0",marginBottom:0}},closeIcon:e.jsx(E,{style:{color:r.colorTextQuaternary}}),children:e.jsxs(i,{form:v,layout:"vertical",className:"space-y-4",children:[e.jsx(i.Item,{name:"name",label:e.jsx(a,{strong:!0,style:{color:r.colorTextSecondary},children:t("scenario:name")}),rules:[{required:!0}],children:e.jsx(C,{style:{height:42,background:r.colorBgLayout,borderRadius:6}})}),e.jsx(i.Item,{name:"role",label:e.jsx(a,{strong:!0,style:{color:r.colorTextSecondary},children:t("scenario:role")}),children:e.jsx(F,{style:{height:42},options:[{value:"role_leader",label:t("scenario:role_leader")},{value:"role_security",label:t("scenario:role_security")}]})}),e.jsx(i.Item,{name:"department",label:e.jsx(a,{strong:!0,style:{color:r.colorTextSecondary},children:t("scenario:department")}),children:e.jsx(F,{style:{height:42},options:[{value:"dept_quarantine",label:t("scenario:dept_quarantine")},{value:"dept_security",label:t("scenario:dept_security")}]})}),e.jsx(i.Item,{name:"shiftTime",label:e.jsx(a,{strong:!0,style:{color:r.colorTextSecondary},children:t("scenario:shiftTime")}),children:e.jsx(f.RangePicker,{format:"HH:mm",className:"w-full",style:{height:42,background:r.colorBgLayout,border:`1px solid ${r.colorBorderSecondary}`,borderRadius:6},popupClassName:"custom-timepicker-popup"})})]})}),e.jsx(B,{title:e.jsx(a,{className:"font-bold ml-2",style:{color:r.colorText,fontSize:18},children:t("management:pushNotification")}),open:P,onCancel:()=>d(!1),footer:e.jsxs(R,{justify:"end",gap:12,className:"p-6 pt-0",children:[e.jsx(c,{className:"btn-vibrant-secondary h-11 px-10",onClick:()=>d(!1),children:t("common:cancel")}),e.jsx(c,{className:"btn-vibrant-primary h-11 px-10",onClick:()=>{u.success("PUSH dispatch confirmed"),d(!1)},children:t("management:sendMission")})]}),centered:!0,width:500,styles:{mask:{backdropFilter:"blur(12px)"},body:{padding:"32px 24px"},header:{padding:"24px 24px 0",marginBottom:0}},closeIcon:e.jsx(E,{style:{color:r.colorTextQuaternary}}),children:e.jsxs("div",{className:"py-4 space-y-6",children:[e.jsxs("div",{className:"p-4 rounded-xl border flex items-center justify-between",style:{background:r.colorFillAlter,borderColor:r.colorBorderSecondary},children:[e.jsx(a,{strong:!0,style:{color:r.colorTextSecondary},children:t("management:recipients")}),e.jsxs(g,{color:"blue",className:"btn-vibrant-info border-none px-4 py-1 font-bold",style:{borderRadius:6},children:[n==null?void 0:n.name," (",n==null?void 0:n.id,")"]})]}),e.jsxs(i,{form:A,layout:"vertical",className:"space-y-4",children:[e.jsx(i.Item,{label:e.jsx(a,{strong:!0,style:{color:r.colorTextSecondary},children:t("management:actionMessage")}),name:"message",rules:[{required:!0}],children:e.jsx(C.TextArea,{rows:4,style:{background:r.colorBgLayout,borderRadius:6},placeholder:t("management:tacticalInstruction")||"Enter instructions..."})}),e.jsx(i.Item,{label:e.jsx(a,{strong:!0,style:{color:r.colorTextSecondary},children:t("management:urgency")}),name:"urgency",children:e.jsx(F,{style:{height:42},defaultValue:"normal",options:[{value:"emergency",label:t("management:emergency")},{value:"normal",label:t("management:normalMission")},{value:"info",label:t("common:info")||"Information"}]})})]})]})}),e.jsx(me,{title:t("management:tacticalProfile"),placement:"right",size:"default",onClose:()=>k(!1),open:I,styles:{header:{background:r.colorFillAlter},body:{background:r.colorBgLayout}},children:n&&e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"text-center p-6 bg-black/20 rounded-2xl border border-white/5",children:[e.jsx(_,{size:80,icon:e.jsx(L,{}),style:{background:r.colorPrimary,marginBottom:16}}),e.jsx(O,{level:4,className:"m-0",children:n.name}),e.jsx(a,{type:"secondary",children:n.id}),e.jsxs("div",{className:"mt-4 flex justify-center gap-2",children:[e.jsx(g,{color:"gold",children:n.rank}),e.jsx(g,{color:"cyan",children:t(`scenario:${n.role}`)})]})]}),e.jsxs(m,{title:t("management:operationalStatus"),column:1,bordered:!0,size:"small",className:"bg-black/10 p-4 rounded-xl border-white/5",children:[e.jsx(m.Item,{label:t("management:currentLocation"),children:n.assigned}),e.jsx(m.Item,{label:t("scenario:department"),children:t(`scenario:${n.department}`)}),e.jsx(m.Item,{label:t("scenario:shiftTime"),children:n.shiftTime}),e.jsx(m.Item,{label:t("management:status"),children:e.jsx(H,{status:n.appStatus==="online"?"processing":"default",text:e.jsx("span",{style:{color:r.colorTextSecondary},children:n.appStatus==="online"?t("quarantine:common.online"):t("quarantine:common.offline")})})}),e.jsx(m.Item,{label:t("management:lastSyncTime"),children:`10 ${t("management:minutes")} ${t("management:ago")}`}),e.jsx(m.Item,{label:t("management:battery"),children:e.jsxs(x,{children:[e.jsx(je,{percent:85,size:"small",status:"active",style:{width:80}}),e.jsx(a,{style:{fontSize:12},children:"85%"})]})})]}),e.jsx(q,{size:"small",title:t("management:recentActivity"),style:{background:"transparent"},children:e.jsx("div",{className:"flex flex-col gap-3",children:[1,2,3].map(o=>e.jsxs("div",{className:"p-3 bg-white/5 rounded-lg border border-white/5",children:[e.jsxs(a,{style:{fontSize:11,color:r.colorTextQuaternary,display:"block"},children:["2024-04-20 1",o,":24:00"]}),e.jsx(a,{style:{fontSize:13},children:"G12 Gate area sanitization complete"})]},o))})})]})}),e.jsx("style",{children:`
        .custom-table .ant-table { background: transparent !important; }
        .custom-table .ant-table-thead > tr > th { 
          background: ${r.colorFillAlter} !important; 
          color: ${r.colorTextSecondary} !important; 
          font-size: 11px !important; 
          font-weight: 900 !important;
          border-bottom: 2px solid ${r.colorBorderSecondary} !important;
          text-transform: none;
          text-align: center !important;
        }
        .custom-table .ant-table-tbody > tr > td { 
           border-bottom: 1px solid ${r.colorBorderSecondary} !important; 
           padding: 12px 16px !important; 
           text-align: center !important;
           background: transparent !important;
        }
        .custom-table .ant-table-row:hover > td { background: ${r.colorFillAlter} !important; cursor: pointer; }
        
        .ant-checkbox-inner { background: transparent !important; border: 1px solid ${r.colorBorder} !important; border-radius: 4px !important; }
        .ant-checkbox-checked .ant-checkbox-inner { background: ${r.colorPrimary} !important; border-color: ${r.colorPrimary} !important; }

        /* Solid Button System (High Contrast & Unified Blue - Per User Screenshot) */
        .btn-vibrant-primary, .btn-vibrant-secondary, .btn-vibrant-danger, .btn-vibrant-info, .btn-vibrant-warning { 
          background: ${r.colorPrimary} !important; 
          border-color: ${r.colorPrimary} !important; 
          color: #fff !important; 
          font-weight: bold !important; 
          border-radius: 6px !important; 
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .btn-vibrant-primary:hover {
          filter: brightness(1.1) saturate(1.1);
          box-shadow: 0 4px 12px ${r.colorPrimary}40;
          transform: translateY(-1px);
        }
        .btn-vibrant-secondary {
          background: ${r.colorFillAlter} !important;
          border: 1px solid ${r.colorBorderSecondary} !important;
          color: ${r.colorTextDescription} !important;
          font-weight: bold !important;
          border-radius: 6px !important;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-vibrant-secondary:hover {
          background: ${r.colorFillSecondary} !important;
          color: ${r.colorText} !important;
          border-color: ${r.colorBorder} !important;
        }

        .btn-utility {
          color: ${r.colorTextQuaternary} !important;
          padding: 0 4px !important;
          border-radius: 4px !important;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .btn-utility:hover { 
          color: ${r.colorPrimary} !important; 
          background: ${r.colorPrimary}1a !important; 
          transform: scale(1.2);
          filter: drop-shadow(0 0 5px ${r.colorPrimary}40);
        }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-left-2 { from { transform: translateX(-8px); } to { transform: translateX(0); } }
        .animate-in { animation: fade-in 0.3s ease-out; }
        .slide-in-from-left-2 { animation: slide-in-from-left-2 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

        .custom-timepicker-popup .ant-picker-panel-container { 
          background: ${r.colorBgElevated} !important; 
          border: 1px solid ${r.colorBorderSecondary} !important; 
          border-radius: 12px !important; 
          box-shadow: 0 8px 32px rgba(0,0,0,0.5) !important;
        }
        .custom-timepicker-popup .ant-picker-time-panel-column > li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner {
          background: ${r.colorPrimary}20 !important;
          color: ${r.colorPrimary} !important;
        }
      `})]})};export{Oe as default};
//# sourceMappingURL=index-C-XZU4k6.js.map
