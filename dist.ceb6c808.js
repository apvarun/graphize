function L(l){return l&&l.__esModule?l.default:l}function ye(l){Object.defineProperty(l,"__esModule",{value:!0,configurable:!0})}function P(l,G,m,e){Object.defineProperty(l,G,{get:m,set:e,enumerable:!0,configurable:!0})}var Le=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{},I=Le.parcelRequire11ea,Ve=I.register;Ve("bgJRQ",function(l,G){ye(l.exports),P(l.exports,"DiffEditor",function(){return ve}),P(l.exports,"useMonaco",function(){return be}),P(l.exports,"Editor",function(){return K}),P(l.exports,"default",function(){return me}),P(l.exports,"loader",function(){return I("lMZuQ").default});var m=I("lMZuQ"),e=I("afhwv"),te={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Q=te,ne={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ae=ne;function ue({children:r}){return L(e).createElement("div",{style:ae.container},r)}var ie=ue,fe=ie;function oe({width:r,height:n,isEditorReady:u,loading:t,_ref:p,className:g,wrapperProps:b}){return L(e).createElement("section",{style:{...Q.wrapper,width:r,height:n},...b},!u&&L(e).createElement(fe,null,t),L(e).createElement("div",{ref:p,style:{...Q.fullWidth,...!u&&Q.hide},className:g}))}var ce=oe,X=(0,e.memo)(ce);function de(r){(0,e.useEffect)(r,[])}var U=de;function le(r,n,u=!0){let t=(0,e.useRef)(!0);(0,e.useEffect)(t.current||!u?()=>{t.current=!1}:r,n)}var h=le;function V(){}function x(r,n,u,t){return se(r,t)||$e(r,n,u,t)}function se(r,n){return r.editor.getModel(Y(r,n))}function $e(r,n,u,t){return r.editor.createModel(n,u,t?Y(r,t):void 0)}function Y(r,n){return r.Uri.parse(n)}function pe({original:r,modified:n,language:u,originalLanguage:t,modifiedLanguage:p,originalModelPath:g,modifiedModelPath:b,keepCurrentOriginalModel:R=!1,keepCurrentModifiedModel:Z=!1,theme:w="light",loading:D="Loading...",options:M={},height:j="100%",width:F="100%",className:q,wrapperProps:z={},beforeMount:H=V,onMount:J=V}){let[v,S]=(0,e.useState)(!1),[C,o]=(0,e.useState)(!0),c=(0,e.useRef)(null),f=(0,e.useRef)(null),O=(0,e.useRef)(null),s=(0,e.useRef)(J),a=(0,e.useRef)(H),y=(0,e.useRef)(!1);U(()=>{let i=m.default.init();return i.then(d=>(f.current=d)&&o(!1)).catch(d=>d?.type!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>c.current?k():i.cancel()}),h(()=>{if(c.current&&f.current){let i=c.current.getOriginalEditor(),d=x(f.current,r||"",t||u||"text",g||"");d!==i.getModel()&&i.setModel(d)}},[g],v),h(()=>{if(c.current&&f.current){let i=c.current.getModifiedEditor(),d=x(f.current,n||"",p||u||"text",b||"");d!==i.getModel()&&i.setModel(d)}},[b],v),h(()=>{let i=c.current.getModifiedEditor();i.getOption(f.current.editor.EditorOption.readOnly)?i.setValue(n||""):n!==i.getValue()&&(i.executeEdits("",[{range:i.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),i.pushUndoStop())},[n],v),h(()=>{c.current?.getModel()?.original.setValue(r||"")},[r],v),h(()=>{let{original:i,modified:d}=c.current.getModel();f.current.editor.setModelLanguage(i,t||u||"text"),f.current.editor.setModelLanguage(d,p||u||"text")},[u,t,p],v),h(()=>{f.current?.editor.setTheme(w)},[w],v),h(()=>{c.current?.updateOptions(M)},[M],v);let N=(0,e.useCallback)(()=>{if(!f.current)return;a.current(f.current);let i=x(f.current,r||"",t||u||"text",g||""),d=x(f.current,n||"",p||u||"text",b||"");c.current?.setModel({original:i,modified:d})},[u,n,p,r,t,g,b]),T=(0,e.useCallback)(()=>{!y.current&&O.current&&(c.current=f.current.editor.createDiffEditor(O.current,{automaticLayout:!0,...M}),N(),f.current?.editor.setTheme(w),S(!0),y.current=!0)},[M,w,N]);(0,e.useEffect)(()=>{v&&s.current(c.current,f.current)},[v]),(0,e.useEffect)(()=>{!C&&!v&&T()},[C,v,T]);function k(){let i=c.current?.getModel();R||i?.original?.dispose(),Z||i?.modified?.dispose(),c.current?.dispose()}return L(e).createElement(X,{width:F,height:j,isEditorReady:v,loading:D,_ref:O,className:q,wrapperProps:z})}var ge=pe,ve=(0,e.memo)(ge);function he(){let[r,n]=(0,e.useState)(m.default.__getMonacoInstance());return U(()=>{let u;return r||(u=m.default.init(),u.then(t=>{n(t)})),()=>u?.cancel()}),r}var be=he;function Me(r){let n=(0,e.useRef)();return(0,e.useEffect)(()=>{n.current=r},[r]),n.current}var we=Me,_=new Map;function Re({defaultValue:r,defaultLanguage:n,defaultPath:u,value:t,language:p,path:g,theme:b="light",line:R,loading:Z="Loading...",options:w={},overrideServices:D={},saveViewState:M=!0,keepCurrentModel:j=!1,width:F="100%",height:q="100%",className:z,wrapperProps:H={},beforeMount:J=V,onMount:v=V,onChange:S,onValidate:C=V}){let[o,c]=(0,e.useState)(!1),[f,O]=(0,e.useState)(!0),s=(0,e.useRef)(null),a=(0,e.useRef)(null),y=(0,e.useRef)(null),N=(0,e.useRef)(v),T=(0,e.useRef)(J),k=(0,e.useRef)(),i=(0,e.useRef)(t),d=we(g),ee=(0,e.useRef)(!1),W=(0,e.useRef)(!1);U(()=>{let $=m.default.init();return $.then(E=>(s.current=E)&&O(!1)).catch(E=>E?.type!=="cancelation"&&console.error("Monaco initialization: error:",E)),()=>a.current?xe():$.cancel()}),h(()=>{let $=x(s.current,r||t||"",n||p||"",g||u||"");$!==a.current?.getModel()&&(M&&_.set(d,a.current?.saveViewState()),a.current?.setModel($),M&&a.current?.restoreViewState(_.get(g)))},[g],o),h(()=>{a.current?.updateOptions(w)},[w],o),h(()=>{!a.current||t===void 0||(a.current.getOption(s.current.editor.EditorOption.readOnly)?a.current.setValue(t):t!==a.current.getValue()&&(W.current=!0,a.current.executeEdits("",[{range:a.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),a.current.pushUndoStop(),W.current=!1))},[t],o),h(()=>{let $=a.current?.getModel();$&&p&&s.current?.editor.setModelLanguage($,p)},[p],o),h(()=>{R!==void 0&&a.current?.revealLine(R)},[R],o),h(()=>{s.current?.editor.setTheme(b)},[b],o);let re=(0,e.useCallback)(()=>{if(!(!y.current||!s.current)&&!ee.current){T.current(s.current);let $=g||u,E=x(s.current,t||r||"",n||p||"",$||"");a.current=s.current?.editor.create(y.current,{model:E,automaticLayout:!0,...w},D),M&&a.current.restoreViewState(_.get($)),s.current.editor.setTheme(b),R!==void 0&&a.current.revealLine(R),c(!0),ee.current=!0}},[r,n,u,t,p,g,w,D,M,b,R]);(0,e.useEffect)(()=>{o&&N.current(a.current,s.current)},[o]),(0,e.useEffect)(()=>{!f&&!o&&re()},[f,o,re]),i.current=t,(0,e.useEffect)(()=>{o&&S&&(k.current?.dispose(),k.current=a.current?.onDidChangeModelContent($=>{W.current||S(a.current.getValue(),$)}))},[o,S]),(0,e.useEffect)(()=>{if(o){let $=s.current.editor.onDidChangeMarkers(E=>{let A=a.current.getModel()?.uri;if(A&&E.find(B=>B.path===A.path)){let B=s.current.editor.getModelMarkers({resource:A});C?.(B)}});return()=>{$?.dispose()}}return()=>{}},[o,C]);function xe(){k.current?.dispose(),j?M&&_.set(g,a.current.saveViewState()):a.current.getModel()?.dispose(),a.current.dispose()}return L(e).createElement(X,{width:F,height:q,isEditorReady:o,loading:Z,_ref:y,className:z,wrapperProps:H})}var Ee=Re,K=(0,e.memo)(Ee),me=K});
