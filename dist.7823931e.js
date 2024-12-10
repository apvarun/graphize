(function(){function m(f){return f&&f.__esModule?f.default:f}function te(f){Object.defineProperty(f,"__esModule",{value:!0,configurable:!0})}function V(f,X,x,e){Object.defineProperty(f,X,{get:x,set:e,enumerable:!0,configurable:!0})}var ne=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{},_=ne.parcelRequire94c2,ce=_.register;ce("4ThMu",function(f,X){te(f.exports),V(f.exports,"DiffEditor",function(){return Me}),V(f.exports,"useMonaco",function(){return Re}),V(f.exports,"Editor",function(){return K}),V(f.exports,"default",function(){return Le}),V(f.exports,"loader",function(){return _("3pjcz").default});var x=_("3pjcz"),e=_("bnwTv"),ue={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},z=ue,ie={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ae=ie;function oe({children:r}){return m(e).createElement("div",{style:ae.container},r)}var de=oe,le=de;function fe({width:r,height:n,isEditorReady:u,loading:t,_ref:$,className:p,wrapperProps:h}){return m(e).createElement("section",{style:{...z.wrapper,width:r,height:n},...h},!u&&m(e).createElement(le,null,t),m(e).createElement("div",{ref:$,style:{...z.fullWidth,...!u&&z.hide},className:p}))}var se=fe,Y=(0,e.memo)(se);function be(r){(0,e.useEffect)(r,[])}var I=be;function $e(r,n,u=!0){let t=(0,e.useRef)(!0);(0,e.useEffect)(t.current||!u?()=>{t.current=!1}:r,n)}var v=$e;function S(){}function y(r,n,u,t){return pe(r,t)||ge(r,n,u,t)}function pe(r,n){return r.editor.getModel(Z(r,n))}function ge(r,n,u,t){return r.editor.createModel(n,u,t?Z(r,t):void 0)}function Z(r,n){return r.Uri.parse(n)}function ve({original:r,modified:n,language:u,originalLanguage:t,modifiedLanguage:$,originalModelPath:p,modifiedModelPath:h,keepCurrentOriginalModel:R=!1,keepCurrentModifiedModel:U=!1,theme:w="light",loading:D="Loading...",options:M={},height:F="100%",width:q="100%",className:H,wrapperProps:W={},beforeMount:A=S,onMount:B=S}){let[g,C]=(0,e.useState)(!1),[O,o]=(0,e.useState)(!0),d=(0,e.useRef)(null),a=(0,e.useRef)(null),k=(0,e.useRef)(null),s=(0,e.useRef)(B),c=(0,e.useRef)(A),L=(0,e.useRef)(!1);I(()=>{let i=x.default.init();return i.then(l=>(a.current=l)&&o(!1)).catch(l=>l?.type!=="cancelation"&&console.error("Monaco initialization: error:",l)),()=>d.current?P():i.cancel()}),v(()=>{if(d.current&&a.current){let i=d.current.getOriginalEditor(),l=y(a.current,r||"",t||u||"text",p||"");l!==i.getModel()&&i.setModel(l)}},[p],g),v(()=>{if(d.current&&a.current){let i=d.current.getModifiedEditor(),l=y(a.current,n||"",$||u||"text",h||"");l!==i.getModel()&&i.setModel(l)}},[h],g),v(()=>{let i=d.current.getModifiedEditor();i.getOption(a.current.editor.EditorOption.readOnly)?i.setValue(n||""):n!==i.getValue()&&(i.executeEdits("",[{range:i.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),i.pushUndoStop())},[n],g),v(()=>{d.current?.getModel()?.original.setValue(r||"")},[r],g),v(()=>{let{original:i,modified:l}=d.current.getModel();a.current.editor.setModelLanguage(i,t||u||"text"),a.current.editor.setModelLanguage(l,$||u||"text")},[u,t,$],g),v(()=>{a.current?.editor.setTheme(w)},[w],g),v(()=>{d.current?.updateOptions(M)},[M],g);let j=(0,e.useCallback)(()=>{if(!a.current)return;c.current(a.current);let i=y(a.current,r||"",t||u||"text",p||""),l=y(a.current,n||"",$||u||"text",h||"");d.current?.setModel({original:i,modified:l})},[u,n,$,r,t,p,h]),N=(0,e.useCallback)(()=>{!L.current&&k.current&&(d.current=a.current.editor.createDiffEditor(k.current,{automaticLayout:!0,...M}),j(),a.current?.editor.setTheme(w),C(!0),L.current=!0)},[M,w,j]);(0,e.useEffect)(()=>{g&&s.current(d.current,a.current)},[g]),(0,e.useEffect)(()=>{!O&&!g&&N()},[O,g,N]);function P(){let i=d.current?.getModel();R||i?.original?.dispose(),U||i?.modified?.dispose(),d.current?.dispose()}return m(e).createElement(Y,{width:q,height:F,isEditorReady:g,loading:D,_ref:k,className:H,wrapperProps:W})}var he=ve,Me=(0,e.memo)(he);function we(){let[r,n]=(0,e.useState)(x.default.__getMonacoInstance());return I(()=>{let u;return r||(u=x.default.init(),u.then(t=>{n(t)})),()=>u?.cancel()}),r}var Re=we;function Ee(r){let n=(0,e.useRef)();return(0,e.useEffect)(()=>{n.current=r},[r]),n.current}var me=Ee,T=new Map;function xe({defaultValue:r,defaultLanguage:n,defaultPath:u,value:t,language:$,path:p,theme:h="light",line:R,loading:U="Loading...",options:w={},overrideServices:D={},saveViewState:M=!0,keepCurrentModel:F=!1,width:q="100%",height:H="100%",className:W,wrapperProps:A={},beforeMount:B=S,onMount:g=S,onChange:C,onValidate:O=S}){let[o,d]=(0,e.useState)(!1),[a,k]=(0,e.useState)(!0),s=(0,e.useRef)(null),c=(0,e.useRef)(null),L=(0,e.useRef)(null),j=(0,e.useRef)(g),N=(0,e.useRef)(B),P=(0,e.useRef)(),i=(0,e.useRef)(t),l=me(p),ee=(0,e.useRef)(!1),G=(0,e.useRef)(!1);I(()=>{let b=x.default.init();return b.then(E=>(s.current=E)&&k(!1)).catch(E=>E?.type!=="cancelation"&&console.error("Monaco initialization: error:",E)),()=>c.current?Ve():b.cancel()}),v(()=>{let b=y(s.current,r||t||"",n||$||"",p||u||"");b!==c.current?.getModel()&&(M&&T.set(l,c.current?.saveViewState()),c.current?.setModel(b),M&&c.current?.restoreViewState(T.get(p)))},[p],o),v(()=>{c.current?.updateOptions(w)},[w],o),v(()=>{!c.current||t===void 0||(c.current.getOption(s.current.editor.EditorOption.readOnly)?c.current.setValue(t):t!==c.current.getValue()&&(G.current=!0,c.current.executeEdits("",[{range:c.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),c.current.pushUndoStop(),G.current=!1))},[t],o),v(()=>{let b=c.current?.getModel();b&&$&&s.current?.editor.setModelLanguage(b,$)},[$],o),v(()=>{R!==void 0&&c.current?.revealLine(R)},[R],o),v(()=>{s.current?.editor.setTheme(h)},[h],o);let re=(0,e.useCallback)(()=>{if(!(!L.current||!s.current)&&!ee.current){N.current(s.current);let b=p||u,E=y(s.current,t||r||"",n||$||"",b||"");c.current=s.current?.editor.create(L.current,{model:E,automaticLayout:!0,...w},D),M&&c.current.restoreViewState(T.get(b)),s.current.editor.setTheme(h),R!==void 0&&c.current.revealLine(R),d(!0),ee.current=!0}},[r,n,u,t,$,p,w,D,M,h,R]);(0,e.useEffect)(()=>{o&&j.current(c.current,s.current)},[o]),(0,e.useEffect)(()=>{!a&&!o&&re()},[a,o,re]),i.current=t,(0,e.useEffect)(()=>{o&&C&&(P.current?.dispose(),P.current=c.current?.onDidChangeModelContent(b=>{G.current||C(c.current.getValue(),b)}))},[o,C]),(0,e.useEffect)(()=>{if(o){let b=s.current.editor.onDidChangeMarkers(E=>{let J=c.current.getModel()?.uri;if(J&&E.find(Q=>Q.path===J.path)){let Q=s.current.editor.getModelMarkers({resource:J});O?.(Q)}});return()=>{b?.dispose()}}return()=>{}},[o,O]);function Ve(){P.current?.dispose(),F?M&&T.set(p,c.current.saveViewState()):c.current.getModel()?.dispose(),c.current.dispose()}return m(e).createElement(Y,{width:q,height:H,isEditorReady:o,loading:U,_ref:L,className:W,wrapperProps:A})}var ye=xe,K=(0,e.memo)(ye),Le=K})})();
