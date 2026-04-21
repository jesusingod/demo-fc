import{T as j,o as k,r as x,j as o,cu as S,B as s,eC as T,S as v,I,H as $,dW as R,d as N,U as w,ec as z,d9 as B,eG as C,ea as q}from"./index-HPKc5YUP.js";import{Q as p}from"./db-Bs8uX73e.js";import{T as d}from"./index-DI4vP5Gz.js";import{T as D}from"./index-Nx1uYCJF.js";import{F}from"./Table-QeANkcJu.js";import{M as P}from"./index-Bks4OiAF.js";import{D as l}from"./index-CI5_7AWC.js";import{T as W}from"./Timeline-zQ0V0nhS.js";import{D as A}from"./index-BEKLa8GD.js";import{F as U}from"./index-0OnhU7Ei.js";import{s as y}from"./index-CcVvcWjU.js";import"./CheckOutlined-fDRYKfdS.js";import"./index-CGMEbw1V.js";import"./index-B2p4JrAu.js";import"./useIcons-BF_uKr-Z.js";import"./index-CQbCxhJJ.js";import"./index-Dpf5NZCY.js";const{Title:u,Text:n}=D,ro=()=>{const{t}=j(["quarantine","history","common","monitoring"]),{token:e}=k.useToken(),[h,c]=x.useState(!1),[i,b]=x.useState(null),g=p.history.map((r,a)=>{var m;return{key:a,time:r.time,target:r.target,action:r.action,status:r.status,detail:r.detail,gate:a===1?"G01":"G12",agent:((m=p.agents[a])==null?void 0:m.name)||"System"}}),f=[{title:t("history:detection.columns.time"),dataIndex:"time",key:"time",render:r=>o.jsx(d,{icon:o.jsx(S,{}),style:{color:e.colorTextSecondary,background:e.colorFillAlter,border:"none",fontSize:13,padding:"2px 10px"},children:r})},{title:t("history:detection.columns.gate"),dataIndex:"gate",key:"gate",render:r=>o.jsx(n,{style:{fontSize:13,fontWeight:"bold"},children:r})},{title:t("history:detection.columns.status"),dataIndex:"status",key:"status",render:r=>{const a=r==="alert"?e.colorError:r==="warning"?e.colorWarning:e.colorInfo;return o.jsx(d,{style:{background:`${a}26`,borderColor:`${a}40`,color:a,fontWeight:"bold",fontSize:12,borderRadius:4,padding:"0 12px"},children:t(`quarantine:common.${r}`).toUpperCase()})}},{title:t("history:detection.columns.deviceOprtn"),dataIndex:"target",key:"target",render:r=>o.jsx(n,{style:{fontSize:13,color:e.colorText},children:r})},{title:t("history:detection.columns.detail"),dataIndex:"action",key:"action",render:r=>o.jsx(n,{style:{fontSize:13,color:e.colorTextSecondary},children:r})},{title:t("history:detection.columns.actionLog"),dataIndex:"detail",key:"detail",render:r=>o.jsx(n,{style:{color:e.colorTextQuaternary,fontSize:12},children:r})},{title:t("history:detection.columns.name"),dataIndex:"agent",key:"agent",render:r=>o.jsx(n,{style:{fontSize:13,fontWeight:"bold"},children:r})},{title:t("history:detection.columns.logs"),key:"logs",align:"center",render:(r,a)=>o.jsx(s,{type:"link",size:"small",icon:o.jsx(T,{}),style:{color:e.colorPrimary,fontWeight:"bold"},onClick:()=>{b(a),c(!0)},children:"REPORT"})}];return o.jsxs("div",{className:"p-6 h-full flex flex-col",style:{background:e.colorBgLayout},children:[o.jsxs("div",{className:"flex justify-between items-center mb-6",children:[o.jsx(u,{level:4,style:{margin:0,color:e.colorText,fontWeight:"bold"},children:t("history:detection.title")}),o.jsxs(v,{children:[o.jsx(I,{placeholder:t("common:search"),prefix:o.jsx($,{style:{color:e.colorTextQuaternary}}),style:{width:300,background:e.colorBgContainer,borderRadius:8,height:40}}),o.jsx(s,{style:{background:e.colorPrimary,color:e.colorTextLightSolid,fontWeight:"bold",height:40,padding:"0 24px"},icon:o.jsx(R,{}),children:t("quarantine:common.filters")})]})]}),o.jsx(N,{bordered:!1,className:"shadow-sm flex-1 overflow-hidden",style:{background:e.colorBgContainer,borderRadius:16},styles:{body:{padding:0}},children:o.jsx(F,{columns:f,dataSource:g,pagination:{pageSize:12},scroll:{x:1e3,y:"calc(100vh - 300px)"},className:"custom-table"})}),o.jsx(P,{title:o.jsx(n,{className:"font-bold ml-2",style:{color:e.colorText,fontSize:18},children:t("quarantine:navigation.dailyReport")}),open:h,onCancel:()=>c(!1),footer:o.jsxs(U,{justify:"end",gap:12,className:"p-6 pt-0",children:[o.jsx(s,{icon:o.jsx(C,{}),className:"btn-vibrant-secondary h-11 px-6",onClick:()=>y.info(t("quarantine:common.print")),children:t("quarantine:common.print")}),o.jsx(s,{icon:o.jsx(q,{}),className:"btn-vibrant-secondary h-11 px-6",onClick:()=>y.success(t("quarantine:common.download")),children:t("quarantine:common.download")}),o.jsx(s,{className:"btn-vibrant-primary h-11 px-10",onClick:()=>c(!1),children:t("quarantine:common.confirm")})]}),centered:!0,width:750,styles:{mask:{backdropFilter:"blur(12px)"},body:{padding:"32px 24px"},header:{padding:"24px 24px 0",marginBottom:0}},closeIcon:o.jsx(B,{style:{color:e.colorTextQuaternary}}),children:i&&o.jsxs("div",{className:"flex flex-col gap-8",children:[o.jsx("div",{className:"p-6 rounded-2xl border",style:{background:e.colorFillAlter,borderColor:e.colorBorderSecondary},children:o.jsxs(l,{column:2,size:"small",children:[o.jsx(l.Item,{label:t("history:detection.columns.time"),children:i.time}),o.jsx(l.Item,{label:t("history:detection.columns.gate"),children:o.jsx(w,{status:"processing",text:o.jsx(n,{strong:!0,style:{color:e.colorText},children:i.gate})})}),o.jsx(l.Item,{label:t("history:detection.columns.name"),children:i.agent}),o.jsx(l.Item,{label:t("history:detection.columns.status"),children:o.jsx(d,{color:i.status==="success"?"blue":"warning",variant:"filled",children:t(`quarantine:common.${i.status}`).toUpperCase()})})]})}),o.jsxs("div",{children:[o.jsxs(u,{level:5,className:"mb-6 flex items-center gap-2",style:{color:e.colorText},children:[o.jsx("div",{style:{width:4,height:16,background:e.colorPrimary,borderRadius:2}}),t("monitoring:deviceOpHistory")]}),o.jsx("div",{className:"px-4",children:o.jsx(W,{items:[{color:e.colorPrimary,children:o.jsxs("div",{children:[o.jsx(n,{strong:!0,className:"block mb-1",style:{color:e.colorText},children:i.action}),o.jsx(n,{type:"secondary",style:{fontSize:13},children:i.detail})]})},{color:"gray",children:o.jsx(n,{style:{color:e.colorTextDescription},children:"장비 초기화 및 연결 확인"})},{dot:o.jsx(z,{style:{fontSize:16,color:e.colorSuccess}}),color:e.colorSuccess,children:o.jsx(n,{style:{color:e.colorTextDescription},children:"검역 절차 정상 종료 및 데이터 서버 전송 완료"})}]})})]}),o.jsx(A,{className:"my-0"})]})}),o.jsx("style",{children:`
        .custom-table .ant-table { background: transparent !important; }
        .custom-table .ant-table-thead > tr > th { 
          background: ${e.colorFillAlter} !important; 
          color: ${e.colorTextDescription} !important; 
          font-size: 13px !important; 
          font-weight: bold !important;
          border-bottom: 2px solid ${e.colorBorderSecondary} !important;
          text-align: center !important;
        }
        .custom-table .ant-table-tbody > tr > td { 
           border-bottom: 1px solid ${e.colorBorderSecondary} !important; 
           padding: 16px !important;
           text-align: center !important;
        }
        
        /* Solid Button System (High Contrast & Unified Blue - Per User Screenshot) */
        .btn-vibrant-primary, .btn-vibrant-secondary, .btn-vibrant-danger, .btn-vibrant-info, .btn-vibrant-warning { 
          background: ${e.colorPrimary} !important; 
          border-color: ${e.colorPrimary} !important; 
          color: #fff !important; 
          font-weight: bold !important; 
          border-radius: 6px !important; 
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .btn-vibrant-primary:hover {
          filter: brightness(1.1) saturate(1.1);
          box-shadow: 0 4px 12px ${e.colorPrimary}40;
          transform: translateY(-1px);
        }
        .btn-vibrant-secondary {
          background: ${e.colorFillAlter} !important;
          border: 1px solid ${e.colorBorderSecondary} !important;
          color: ${e.colorTextDescription} !important;
          font-weight: bold !important;
          border-radius: 6px !important;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-vibrant-secondary:hover {
          background: ${e.colorFillSecondary} !important;
          color: ${e.colorText} !important;
          border-color: ${e.colorBorder} !important;
        }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-in { animation: fade-in 0.3s ease-out; }
      `})]})};export{ro as default};
//# sourceMappingURL=index-DNXEc0wG.js.map
