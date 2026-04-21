import{T as I,o as z,r as u,j as e,S as c,d$ as B,e7 as C,B as i,X as D,eG as j,ex as A,dW as E,d as g,I as k,H as P,eX as L,d9 as W,ea as M}from"./index-CmYdFPvU.js";import{Q as w}from"./db-B5-z8sri.js";import{E as Q}from"./exceljs.min-CzEgKFQP.js";import{T as q}from"./index-DIzIuhHx.js";import{T as _}from"./index-B9mZHJU0.js";import{F as s}from"./index-7vppReDV.js";import{D as U}from"./index-C3bn5eWe.js";import{F as Y}from"./Table-DA1XQmPE.js";import{M as O}from"./index-2hRPWTMt.js";import{D as v}from"./index-C_1SaBHO.js";import{s as N}from"./index-BakNSx7K.js";import"./CheckOutlined-4BRbWY83.js";import"./useIcons-CzDkiPgU.js";import"./index-CHtg_Zmc.js";import"./index-BsxRgVrR.js";import"./index-ZrAJy4un.js";import"./index-ROo631vV.js";const{Title:S,Text:l}=q,{RangePicker:G}=U,me=()=>{const{t:r}=I(["quarantine","report","common"]),{token:t}=z.useToken(),[R,p]=u.useState(!1),[n,h]=u.useState(null),f=async o=>{try{const a=new Q.Workbook,m=a.addWorksheet("DailyQuarantineReport");m.columns=[{header:r("report:daily.columns.id"),key:"id",width:25},{header:r("report:daily.columns.date"),key:"date",width:15},{header:r("report:daily.columns.reportTitle"),key:"title",width:40},{header:r("report:daily.columns.department"),key:"department",width:20},{header:r("report:daily.columns.author"),key:"author",width:15},{header:r("report:daily.columns.status"),key:"status",width:15}],m.getRow(1).font={bold:!0},m.getRow(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFE6F7FF"}},(o?[o]:w.dailyReports).forEach(d=>{m.addRow({id:d.id,date:d.date,title:d.title,department:d.department,author:d.author,status:d.status})});const $=await a.xlsx.writeBuffer(),F=new Blob([$],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),b=window.URL.createObjectURL(F),x=document.createElement("a");x.href=b,x.download=`Quarantine_Report_${o?o.id:dayjs().format("YYYYMMDD")}.xlsx`,x.click(),window.URL.revokeObjectURL(b),N.success(r("quarantine:navigation.reportGenerated"))}catch(a){console.error("Excel download error:",a),N.error("Failed to generate Excel file.")}},y=o=>{h(o),p(!0),setTimeout(()=>{window.print()},500)},T=[{title:r("report:daily.columns.id"),dataIndex:"id",key:"id",width:150,render:o=>e.jsx(l,{style:{color:t.colorTextQuaternary,fontSize:12,fontFamily:"monospace"},children:o})},{title:r("report:daily.columns.date"),dataIndex:"date",key:"date",width:140,render:o=>e.jsxs(c,{size:4,children:[e.jsx(B,{style:{color:t.colorPrimary,fontSize:12}}),e.jsx(l,{style:{fontSize:13},children:o})]})},{title:r("report:daily.columns.reportTitle"),dataIndex:"title",key:"title",align:"left",render:o=>e.jsx(l,{strong:!0,style:{color:t.colorText},children:o})},{title:r("report:daily.columns.department"),dataIndex:"department",key:"department",width:150,render:o=>e.jsx(_,{color:"blue",variant:"filled",style:{borderRadius:4},children:o})},{title:r("report:daily.columns.author"),dataIndex:"author",key:"author",width:120,render:o=>e.jsxs(c,{size:4,children:[e.jsx(C,{style:{color:t.colorTextQuaternary}}),e.jsx(l,{style:{fontSize:13},children:o})]})},{title:r("report:daily.columns.view"),key:"view",align:"center",width:100,render:(o,a)=>e.jsx(i,{type:"link",icon:e.jsx(D,{}),style:{color:t.colorPrimary,fontWeight:"bold"},onClick:()=>{h(a),p(!0)},children:"VIEW"})},{title:r("report:daily.columns.print"),key:"print",align:"center",width:80,render:(o,a)=>e.jsx(i,{type:"text",icon:e.jsx(j,{}),style:{color:t.colorTextQuaternary},onClick:()=>y(a)})},{title:r("report:daily.columns.download"),key:"download",align:"center",width:110,render:(o,a)=>e.jsx(i,{type:"text",icon:e.jsx(A,{}),style:{color:t.colorSuccess},onClick:()=>f(a)})}];return e.jsxs("div",{className:"p-8 h-full flex flex-col",style:{background:t.colorBgLayout},children:[e.jsxs("div",{className:"flex flex-col gap-6 mb-8",children:[e.jsxs(s,{justify:"space-between",align:"center",children:[e.jsx(S,{level:3,style:{margin:0,color:t.colorText,fontWeight:"bold",letterSpacing:-.5},children:r("report:daily.title")}),e.jsx(i,{className:"btn-vibrant-primary h-11 px-8",icon:e.jsx(E,{}),children:r("quarantine:common.search")})]}),e.jsx(g,{bordered:!1,style:{background:t.colorBgContainer,borderRadius:12},styles:{body:{padding:"16px 24px"}},children:e.jsxs(s,{gap:24,align:"center",children:[e.jsxs(s,{vertical:!0,gap:4,flex:1,children:[e.jsx(l,{type:"secondary",style:{fontSize:12,fontWeight:"bold"},children:r("report:daily.columns.date")}),e.jsx(G,{style:{height:40,width:"100%",background:t.colorFillAlter,border:"none",borderRadius:6}})]}),e.jsxs(s,{vertical:!0,gap:4,flex:1,children:[e.jsx(l,{type:"secondary",style:{fontSize:12,fontWeight:"bold"},children:r("report:daily.columns.author")}),e.jsx(k,{placeholder:r("quarantine:searchPlaceholder"),style:{height:40,background:t.colorFillAlter,border:"none",borderRadius:6}})]}),e.jsxs(s,{vertical:!0,gap:4,flex:2,children:[e.jsx(l,{type:"secondary",style:{fontSize:12,fontWeight:"bold"},children:r("report:daily.columns.reportTitle")}),e.jsx(k,{placeholder:r("report:daily.columns.reportTitle"),prefix:e.jsx(P,{style:{color:t.colorTextQuaternary}}),style:{height:40,background:t.colorFillAlter,border:"none",borderRadius:6}})]})]})})]}),e.jsx(g,{bordered:!1,className:"shadow-sm flex-1 overflow-hidden",style:{background:t.colorBgContainer,borderRadius:16},styles:{body:{padding:0}},children:e.jsx(Y,{columns:T,dataSource:w.dailyReports.map((o,a)=>({...o,key:a})),pagination:{pageSize:12},scroll:{x:1e3,y:"calc(100vh - 300px)"},className:"custom-report-table"})}),e.jsx(O,{title:e.jsx(l,{className:"font-bold ml-2",style:{color:t.colorText,fontSize:18},children:r("report:daily.form.mainTitle")}),open:R,onCancel:()=>p(!1),footer:e.jsxs(s,{justify:"end",gap:12,className:"p-6 pt-0 no-print",children:[e.jsx(i,{icon:e.jsx(j,{}),className:"btn-vibrant-secondary h-11 px-6",onClick:()=>y(n),children:r("quarantine:common.print")}),e.jsx(i,{icon:e.jsx(M,{}),className:"btn-vibrant-secondary h-11 px-6",onClick:()=>f(n),children:r("quarantine:common.download")}),e.jsx(i,{className:"btn-vibrant-primary h-11 px-10",onClick:()=>p(!1),children:r("quarantine:common.confirm")})]}),centered:!0,width:900,styles:{mask:{backdropFilter:"blur(12px)"},body:{padding:0},header:{padding:"24px 24px 0",marginBottom:0}},closeIcon:e.jsx(W,{style:{color:t.colorTextQuaternary}}),children:n&&e.jsx("div",{className:"report-container-scroll animate-in fade-in zoom-in-95 duration-500",children:e.jsxs("div",{className:"p-10",children:[e.jsxs(s,{justify:"end",vertical:!0,className:"mb-6 text-right",children:[e.jsxs(c,{children:[e.jsxs(l,{style:{color:t.colorTextSecondary},children:[r("report:daily.form.dept")," :"]})," ",e.jsx(l,{strong:!0,children:n.department})]}),e.jsxs(c,{children:[e.jsxs(l,{style:{color:t.colorTextSecondary},children:[r("report:daily.form.author")," :"]})," ",e.jsx(l,{strong:!0,children:n.author})]}),e.jsxs(c,{children:[e.jsxs(l,{style:{color:t.colorTextSecondary},children:[r("report:daily.form.date")," :"]})," ",e.jsxs(l,{strong:!0,children:["20",n.date.replace(/-/g,". ")]})]})]}),e.jsx(S,{level:2,className:"text-center mb-10 tracking-[10px]",style:{color:t.colorText},children:r("report:daily.form.mainTitle").toUpperCase()}),e.jsxs("div",{className:"report-form-table",children:[e.jsx("div",{className:"section-header",children:r("report:daily.form.section1.title")}),e.jsxs("table",{className:"inner-table",children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{rowSpan:2,children:r("report:daily.form.section1.date")}),e.jsx("th",{colSpan:3,children:r("report:daily.form.section1.visitor")}),e.jsx("th",{rowSpan:2,children:r("report:daily.form.section1.agent")}),e.jsx("th",{rowSpan:2,children:r("report:daily.form.section1.confirm")}),e.jsx("th",{rowSpan:2,children:r("report:daily.form.section1.note")})]}),e.jsxs("tr",{children:[e.jsx("th",{children:r("report:daily.form.section1.visName")}),e.jsx("th",{children:r("report:daily.form.section1.visLoc")}),e.jsx("th",{children:r("report:daily.form.section1.visContact")})]})]}),e.jsxs("tbody",{children:[n.quarantineList.map((o,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:o.date}),e.jsx("td",{children:o.name}),e.jsx("td",{children:o.location}),e.jsx("td",{children:o.contact}),e.jsx("td",{children:o.agent}),e.jsx("td",{className:"text-center",children:e.jsx(L,{style:{color:t.colorSuccess,fontSize:12}})}),e.jsx("td",{children:o.note})]},a)),[1,2].map((o,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"h-8"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]},`empty-${a}`))]})]}),e.jsx(v,{className:"my-8"}),e.jsx("div",{className:"section-header",children:r("report:daily.form.section2.title")}),e.jsxs("table",{className:"inner-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:r("report:daily.form.section2.date")}),e.jsx("th",{children:r("report:daily.form.section2.agent")}),e.jsx("th",{className:"bg-blue-900/10",style:{background:`${t.colorPrimary}1a`},children:r("report:daily.form.section2.visitor")}),e.jsx("th",{children:r("report:daily.form.section2.visName")}),e.jsx("th",{children:r("report:daily.form.section2.visLoc")}),e.jsx("th",{children:r("report:daily.form.section2.visContact")})]})}),e.jsx("tbody",{children:n.pestMonitoring.length>0?n.pestMonitoring.map((o,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:o.date}),e.jsx("td",{children:o.agent}),e.jsx("td",{children:"방문고객"}),e.jsx("td",{children:o.customerName}),e.jsx("td",{children:o.location}),e.jsx("td",{children:o.contact})]},a)):e.jsxs("tr",{children:[e.jsx("td",{className:"h-8"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-0 border-t border-x border-b border-[#ffffff1a] mt-8",style:{borderColor:t.colorBorderSecondary},children:[e.jsxs("div",{className:"flex flex-col border-r",style:{borderColor:t.colorBorderSecondary},children:[e.jsx("div",{className:"p-2 text-center text-xs font-bold bg-[#ffffff0a]",style:{background:t.colorFillAlter},children:r("report:daily.form.section3.title1")}),e.jsx("div",{className:"h-48 flex items-center justify-center text-xs text-gray-500 italic",children:"No image file"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"p-2 text-center text-xs font-bold bg-[#ffffff0a]",style:{background:t.colorFillAlter},children:r("report:daily.form.section3.title2")}),e.jsx("div",{className:"h-48 flex items-center justify-center text-xs text-gray-500 italic",children:"Work completed successfully"})]})]}),e.jsxs("div",{className:"mt-8 border",style:{borderColor:t.colorBorderSecondary},children:[e.jsxs("div",{className:"flex border-b",style:{borderColor:t.colorBorderSecondary},children:[e.jsx("div",{className:"w-48 p-3 text-xs font-bold flex items-center bg-[#ffffff0a]",style:{background:t.colorFillAlter},children:r("report:daily.form.footer.pestAnalysis")}),e.jsx("div",{className:"flex-1 p-3 text-xs",children:n.pestAnalysis})]}),e.jsxs("div",{className:"flex border-b",style:{borderColor:t.colorBorderSecondary},children:[e.jsx("div",{className:"w-48 p-3 text-xs font-bold flex items-center bg-[#ffffff0a]",style:{background:t.colorFillAlter},children:r("report:daily.form.footer.usedDrugs")}),e.jsx("div",{className:"flex-1 p-3 text-xs",children:n.usedDrugs})]}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-48 p-3 text-xs font-bold flex items-center bg-[#ffffff0a]",style:{background:t.colorFillAlter},children:r("report:daily.form.footer.methods")}),e.jsx("div",{className:"flex-1 p-3 text-xs",children:n.methods})]})]})]}),e.jsx(v,{className:"my-8"}),e.jsxs(l,{italic:!0,type:"secondary",style:{fontSize:11},children:["* ",r("report:daily.form.footer.systemLog")]})]})})}),e.jsx("style",{children:`
        .custom-report-table .ant-table { background: transparent !important; }
        .custom-report-table .ant-table-thead > tr > th { 
          background: ${t.colorFillAlter} !important; 
          color: ${t.colorTextDescription} !important; 
          font-size: 13px !important; 
          font-weight: bold !important;
          border-bottom: 2px solid ${t.colorBorderSecondary} !important;
          text-align: center !important;
        }
        .custom-report-table .ant-table-tbody > tr > td { 
           border-bottom: 1px solid ${t.colorBorderSecondary} !important; 
           padding: 16px !important;
           text-align: center !important;
        }

        /* Report Form Table Styles */
        .report-container-scroll { 
           max-height: calc(100vh - 280px); 
           overflow-y: auto;
           scrollbar-width: thin;
           scrollbar-color: ${t.colorPrimary}44 transparent;
        }
        .report-container-scroll::-webkit-scrollbar { width: 6px; }
        .report-container-scroll::-webkit-scrollbar-track { background: transparent; }
        .report-container-scroll::-webkit-scrollbar-thumb { 
           background: ${t.colorFillSecondary}; 
           border-radius: 10px; 
        }
        .report-container-scroll::-webkit-scrollbar-thumb:hover { background: ${t.colorPrimary}88; }

        .report-form-table { width: 100%; color: ${t.colorTextSecondary}; }

        /* Robust Print Style */
        @media print {
          /* Hide EVERYTHING in the background */
          #root,
          .ant-layout,
          .ant-layout-sider, 
          .ant-layout-header, 
          .ant-layout-footer,
          footer,
          .ant-card,
          .ant-modal-mask, 
          .ant-modal-footer, 
          .ant-modal-close,
          .no-print,
          .btn-vibrant-primary,
          .btn-vibrant-secondary,
          .ant-btn,
          button,
          .ant-float-btn,
          .ant-float-btn-group {
            display: none !important;
          }

          /* Explicitly show the modal portal */
          body > .ant-modal-root,
          .ant-modal-root,
          .ant-modal-wrap,
          .ant-modal,
          .ant-modal-content,
          .report-container-scroll,
          .report-container-scroll * {
            display: block !important;
            visibility: visible !important;
          }

          /* Reset Layout for Print */
          body, html {
            background: #fff !important;
            color: #000 !important;
            width: 100%;
            height: auto !important;
          }

          .ant-modal-root {
            position: static !important;
          }

          .ant-modal-wrap {
            position: static !important;
            overflow: visible !important;
          }

          .ant-modal {
            top: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .ant-modal-content {
            background: #fff !important;
            box-shadow: none !important;
            padding: 0 !important;
          }

          .report-container-scroll {
            max-height: none !important;
            overflow: visible !important;
            height: auto !important;
            background: #fff !important;
          }

          /* Force colors and borders for printing */
          .inner-table th, .inner-table td, .section-header {
            border: 1px solid #000 !important;
            color: #000 !important;
            -webkit-print-color-adjust: exact;
          }
          
          .section-header, .inner-table th {
            background-color: #f5f5f5 !important;
          }

          .report-form-table Title, .report-form-table Text {
            color: #000 !important;
          }
        }
        .section-header { 
           background: ${t.colorPrimary}22; 
           padding: 6px 12px; 
           font-size: 13px; 
           font-weight: bold; 
           text-align: center;
           border: 1px solid ${t.colorBorderSecondary};
           margin-bottom: -1px;
        }
        .inner-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
        .inner-table th, .inner-table td { 
           border: 1px solid ${t.colorBorderSecondary}; 
           padding: 8px; 
           font-size: 11px;
           text-align: center;
        }
        .inner-table th { background: ${t.colorFillAlter}; color: ${t.colorText}; font-weight: bold; }
        
        /* Solid Button System */
        .btn-vibrant-primary, .btn-vibrant-secondary { 
          background: ${t.colorPrimary} !important; 
          border-color: ${t.colorPrimary} !important; 
          color: #fff !important; 
          font-weight: bold !important; 
          border-radius: 6px !important; 
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .btn-vibrant-primary:hover { filter: brightness(1.1); transform: translateY(-1px); }
        .btn-vibrant-secondary {
           background: ${t.colorFillAlter} !important;
           border: 1px solid ${t.colorBorderSecondary} !important;
           color: ${t.colorTextDescription} !important;
        }

        @keyframes zoom-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-in { animation: zoom-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
      `})]})};export{me as default};
//# sourceMappingURL=index-DdXhdCrp.js.map
