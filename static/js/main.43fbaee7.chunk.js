(this.webpackJsonpbackoffice=this.webpackJsonpbackoffice||[]).push([[0],{281:function(e,t,n){},286:function(e,t,n){},465:function(e,t,n){},466:function(e,t,n){},467:function(e,t,n){},468:function(e,t,n){},469:function(e,t,n){},470:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(1),r=n.n(c),i=n(14),s=n.n(i),o=n(55),j=n(56),l=n(65),d=n(111),b="bo_global_store",h="login_user",u="logout_user";var x=Object(l.b)({user:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(null===(e=JSON.parse(window.localStorage.getItem(b)))||void 0===e?void 0:e.user)||{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case h:return Object(d.a)({},n.user);case u:return{};default:return t}}}),O=Object(l.c)(x);O.subscribe((function(){window.localStorage.setItem(b,JSON.stringify(O.getState()))}));n(281);var p=n(91),m=n(43),f=n(33),g=n(160),v=n.n(g),w=n(216);function y(e,t){return window.fetch("".concat("https://free-is4.azurewebsites.net").concat(e),{method:"POST",body:t}).then(function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}var S="user_auth_token",k="client_auth_token";function C(){return window.localStorage.getItem(S)||null}function N(){return window.localStorage.removeItem(S),{type:u}}var I=n(18);function L(){var e=Object(j.c)((function(e){return e.user})),t=Object(j.b)(),n=Object(I.k)();return Object(a.jsxs)(p.a,{collapseOnSelect:!0,bg:"light",expand:"md",className:"mb-3",children:[Object(a.jsx)(m.LinkContainer,{to:"/",children:Object(a.jsx)(p.a.Brand,{className:"font-weight-bold",children:"BO"})}),Object(a.jsx)(m.LinkContainer,{to:"/dashboard",children:Object(a.jsx)(f.a.Link,{children:"Dashboard"})}),Object(a.jsx)(m.LinkContainer,{to:"/blog",children:Object(a.jsx)(f.a.Link,{children:"Blog"})}),Object(a.jsx)(m.LinkContainer,{to:"/courses",children:Object(a.jsx)(f.a.Link,{children:"Courses"})}),Object(a.jsx)(m.LinkContainer,{to:"/characters",children:Object(a.jsx)(f.a.Link,{children:"Characters"})}),Object(a.jsx)(m.LinkContainer,{to:"/characters-mui",children:Object(a.jsx)(f.a.Link,{children:"Characters MUI"})}),Object(a.jsx)(p.a.Toggle,{}),Object(a.jsx)(p.a.Collapse,{className:"justify-content-end",children:Object(a.jsx)(f.a,{activeKey:window.location.pathname,children:e.email?Object(a.jsx)(f.a.Link,{onClick:function(){t(N()),n.push("/login")},children:"Logout"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m.LinkContainer,{to:"/login",children:Object(a.jsx)(f.a.Link,{children:"Sign in"})}),Object(a.jsx)(f.a.Link,{children:"|"}),Object(a.jsx)(m.LinkContainer,{to:"/signup",className:"text-muted",children:Object(a.jsx)(f.a.Link,{children:"Sign up"})})]})})})]})}n(286);function B(){return Object(a.jsx)("div",{className:"Footer text-center",children:Object(a.jsx)("h3",{children:"Developed by (BG) Team "})})}var M=n(27),_=n(112),T=n(7),P=n(512),A=n(528),E=n(521),F=n(520),R=n(519),z=n(522),D=n(523),G=n(472),U=n(506),J=n(509),V=n(510),H=n(511),K=n(219),W=n.n(K),q=n(220),Z=n.n(q),$=n(221),X=n.n($),Y=n(222),Q=n.n(Y),ee=n(126),te=n.n(ee),ne=Object(a.jsxs)("div",{children:[Object(a.jsxs)(U.a,{button:!0,children:[Object(a.jsx)(J.a,{children:Object(a.jsx)(W.a,{})}),Object(a.jsx)(V.a,{primary:"Dashboard"})]}),Object(a.jsxs)(U.a,{button:!0,children:[Object(a.jsx)(J.a,{children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)(V.a,{primary:"Orders"})]}),Object(a.jsxs)(U.a,{button:!0,children:[Object(a.jsx)(J.a,{children:Object(a.jsx)(X.a,{})}),Object(a.jsx)(V.a,{primary:"Reports"})]}),Object(a.jsxs)(U.a,{button:!0,children:[Object(a.jsx)(J.a,{children:Object(a.jsx)(Q.a,{})}),Object(a.jsx)(V.a,{primary:"Integrations"})]})]}),ae=Object(a.jsxs)("div",{children:[Object(a.jsx)(H.a,{inset:!0,children:"Saved reports"}),Object(a.jsxs)(U.a,{button:!0,children:[Object(a.jsx)(J.a,{children:Object(a.jsx)(te.a,{})}),Object(a.jsx)(V.a,{primary:"Current month"})]}),Object(a.jsxs)(U.a,{button:!0,children:[Object(a.jsx)(J.a,{children:Object(a.jsx)(te.a,{})}),Object(a.jsx)(V.a,{primary:"Last quarter"})]}),Object(a.jsxs)(U.a,{button:!0,children:[Object(a.jsx)(J.a,{children:Object(a.jsx)(te.a,{})}),Object(a.jsx)(V.a,{primary:"Year-end sale"})]})]}),ce=n(70),re=n(57),ie=n(92);function se(e){return Object(a.jsx)(ie.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function oe(e,t){return{time:e,amount:t}}var je=[oe("00:00",0),oe("03:00",300),oe("06:00",600),oe("09:00",800),oe("12:00",1500),oe("15:00",2e3),oe("18:00",2400),oe("21:00",2400),oe("24:00",void 0)];function le(){var e=Object(ce.a)();return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(se,{children:"Today"}),Object(a.jsx)(re.d,{children:Object(a.jsxs)(re.c,{data:je,margin:{top:16,right:16,bottom:0,left:24},children:[Object(a.jsx)(re.e,{dataKey:"time",stroke:e.palette.text.secondary}),Object(a.jsx)(re.f,{stroke:e.palette.text.secondary,children:Object(a.jsx)(re.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary},children:"Sales ($)"})}),Object(a.jsx)(re.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})}var de=n(518),be=n(513),he=n(517),ue=n(516),xe=n(514),Oe=n(515);function pe(e,t,n,a,c,r){return{id:e,date:t,name:n,shipTo:a,paymentMethod:c,amount:r}}var me=[pe(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),pe(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),pe(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),pe(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),pe(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function fe(e){e.preventDefault()}var ge=Object(P.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function ve(){var e=ge();return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(se,{children:"Recent Orders"}),Object(a.jsxs)(be.a,{size:"small",children:[Object(a.jsx)(xe.a,{children:Object(a.jsxs)(Oe.a,{children:[Object(a.jsx)(ue.a,{children:"Date"}),Object(a.jsx)(ue.a,{children:"Name"}),Object(a.jsx)(ue.a,{children:"Ship To"}),Object(a.jsx)(ue.a,{children:"Payment Method"}),Object(a.jsx)(ue.a,{align:"right",children:"Sale Amount"})]})}),Object(a.jsx)(he.a,{children:me.map((function(e){return Object(a.jsxs)(Oe.a,{children:[Object(a.jsx)(ue.a,{children:e.date}),Object(a.jsx)(ue.a,{children:e.name}),Object(a.jsx)(ue.a,{children:e.shipTo}),Object(a.jsx)(ue.a,{children:e.paymentMethod}),Object(a.jsx)(ue.a,{align:"right",children:e.amount})]},e.id)}))})]}),Object(a.jsx)("div",{className:e.seeMore,children:Object(a.jsx)(de.a,{color:"primary",href:"#",onClick:fe,children:"See more orders"})})]})}function we(e){e.preventDefault()}var ye=Object(P.a)({depositContext:{flex:1}});function Se(){var e=ye();return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(se,{children:"Recent Deposits"}),Object(a.jsx)(ie.a,{component:"p",variant:"h4",children:"$3,024.00"}),Object(a.jsx)(ie.a,{color:"textSecondary",className:e.depositContext,children:"on 15 March, 2019"}),Object(a.jsx)("div",{children:Object(a.jsx)(de.a,{color:"primary",href:"#",onClick:we,children:"View balance"})})]})}n(465);var ke=Object(P.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(_.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"hidden"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},mainListItems:{fontFamily:"Alsandra"}}}));function Ce(){var e=ke(),t=r.a.useState(!0),n=Object(M.a)(t,1)[0],c=Object(T.a)(e.paper,e.fixedHeight);return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsxs)(A.a,{variant:"permanent",classes:{paper:Object(T.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n,children:[Object(a.jsx)("div",{className:e.toolbarIcon,children:Object(a.jsx)(R.a,{onClick:function(){},children:"Preview v1.4.1"})}),Object(a.jsx)(F.a,{}),Object(a.jsx)(E.a,{className:"mainListItems",children:ne}),Object(a.jsx)(F.a,{}),Object(a.jsx)(E.a,{children:ae})]}),Object(a.jsxs)("main",{className:e.content,children:[Object(a.jsx)("div",{className:e.appBarSpacer}),Object(a.jsx)(z.a,{maxWidth:"lg",className:e.container,children:Object(a.jsxs)(D.a,{container:!0,spacing:3,children:[Object(a.jsx)(D.a,{item:!0,xs:12,md:8,lg:9,children:Object(a.jsx)(G.a,{className:c,children:Object(a.jsx)(le,{})})}),Object(a.jsx)(D.a,{item:!0,xs:12,md:4,lg:3,children:Object(a.jsx)(G.a,{className:c,children:Object(a.jsx)(Se,{})})}),Object(a.jsx)(D.a,{item:!0,xs:12,children:Object(a.jsx)(G.a,{className:e.paper,children:Object(a.jsx)(ve,{})})})]})})]})]})}n(466);function Ne(){return Object(a.jsx)("div",{className:"NotFound text-center",children:Object(a.jsx)("h3",{children:"Sorry, page not found!"})})}n(467);var Ie=n.p+"static/media/backoffice.d3db7d69.jpg";function Le(){return r.a.useEffect((function(){window.localStorage.getItem(k)||function(){var e=new URLSearchParams;return e.set("client_id","bo-client"),e.set("client_secret","9aa9796b-1261-40a7-a3f3-3308639b0b19"),e.set("scope","scope.bgapi"),e.set("grant_type","client_credentials"),y("/connect/token",e)}().then((function(e){return t=e.access_token,void window.localStorage.setItem(k,t);var t}))}),[]),Object(a.jsx)("div",{className:"Home",children:Object(a.jsxs)("div",{className:"lander",children:[Object(a.jsx)("img",{src:Ie,className:"Home-image",alt:"BO"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:"Welcome to BackOffice"}),Object(a.jsx)("p",{children:"A simple React app"})]})})}n(468);var Be=n(234),Me=n(25),_e=n(122);function Te(){var e=Object(I.k)(),t=Object(j.b)();return Object(a.jsxs)("div",{className:"Login",children:[Object(a.jsx)(Be.a,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required",e.password||(t.password="Password is required"),t},onSubmit:function(n,a){var c=a.setSubmitting;(function(e){var t=e.username,n=e.password,a=new URLSearchParams;return a.set("client_id","bo-user"),a.set("client_secret","aca35df5-8747-44ad-8eba-fec042d049b6"),a.set("scope","scope.bgapi"),a.set("grant_type","password"),a.set("username",t),a.set("password",n),y("/connect/token",a)})({username:n.email,password:n.password}).then((function(n){var a,r;c(!1),a=n.access_token,window.localStorage.setItem(S,a),t((r=function(){var e=C();if(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(n)}return null}(),{type:h,user:r})),e.push("/dashboard")}),(function(e){c(!1)}))},children:function(e){var t=e.values,n=e.errors,c=e.touched,r=e.handleChange,i=e.handleSubmit,s=e.isSubmitting;return Object(a.jsxs)(Me.a,{noValidate:!0,autoComplete:"true",onSubmit:i,children:[Object(a.jsxs)(Me.a.Group,{size:"lg",controlId:"email",children:[Object(a.jsx)(Me.a.Label,{children:"Email"}),Object(a.jsx)(Me.a.Control,{autoFocus:!0,name:"email",type:"email",value:t.email,onChange:r,isInvalid:c.email&&!!n.email}),Object(a.jsx)(Me.a.Control.Feedback,{type:"invalid",children:n.email})]}),Object(a.jsxs)(Me.a.Group,{size:"lg",controlId:"password",children:[Object(a.jsx)(Me.a.Label,{children:"Password"}),Object(a.jsx)(Me.a.Control,{name:"password",type:"password",value:t.password,onChange:r,isInvalid:c.password&&!!n.password}),Object(a.jsx)(Me.a.Control.Feedback,{type:"invalid",children:n.password})]}),Object(a.jsx)(_e.a,{block:!0,size:"lg",type:"submit",disabled:s,children:s?"Loging...":"Login"})]})}}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Forgot password?"})]})}var Pe=n(524),Ae=n(529);function Ee(){var e=Object(c.useState)([]),t=Object(M.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://bgapi.azurewebsites.net/api/Statistics/Posts").then((function(e){return e.json()})).then((function(e){r(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Example of React Bootstrap"}),Object(a.jsx)(Pe.a,{children:n.map((function(e){return Object(a.jsxs)(Ae.a,{className:"m-4",style:{width:"20rem"},children:[Object(a.jsx)(Ae.a.Img,{variant:"top",src:e.imgUrl}),Object(a.jsxs)(Ae.a.Body,{children:[Object(a.jsx)(Ae.a.Title,{children:e.title}),Object(a.jsx)(Ae.a.Text,{children:e.content}),Object(a.jsx)(_e.a,{variant:"primary",href:e.imgUrl,target:"_blank",children:"More Info"})]})]},e.id)}))})]})}var Fe=n(525),Re=n(527),ze=n(526);function De(){var e=Object(c.useState)([]),t=Object(M.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){fetch("https://bgapi.azurewebsites.net/api/courses").then((function(e){return e.json()})).then((function(e){r(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]);var i=Object(P.a)({card:{maxWidth:345,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",backgroundColor:"#fafafa"},media:{height:300}})();return Object(a.jsxs)("div",{children:[Object(a.jsx)(z.a,{children:Object(a.jsx)("h1",{children:" BGAPI fetch courses"})}),Object(a.jsx)(D.a,{container:!0,spacing:3,children:n.map((function(e){return Object(a.jsx)(D.a,{item:!0,xs:12,sm:3,children:Object(a.jsxs)(Fe.a,{className:i.card,children:[Object(a.jsx)(ze.a,{className:i.media,image:e.image}),Object(a.jsxs)(Re.a,{children:[Object(a.jsx)(ie.a,{color:"primary",variant:"h5",children:e.name}),Object(a.jsx)(ie.a,{color:"textSecondary",variant:"subtitle2",children:e.description})]})]})},e.id)}))})]})}function Ge(){var e=Object(c.useState)([]),t=Object(M.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://rickandmortyapi.com/api/character/1,183,15,113,91,149").then((function(e){return e.json()})).then((function(e){r(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Example of React Bootstrap"}),Object(a.jsx)(Pe.a,{children:n.map((function(e){return Object(a.jsxs)(Ae.a,{className:"m-4",style:{width:"20rem"},children:[Object(a.jsx)(Ae.a.Img,{variant:"top",src:e.image}),Object(a.jsxs)(Ae.a.Body,{children:[Object(a.jsx)(Ae.a.Title,{children:e.name}),Object(a.jsxs)(Ae.a.Text,{children:[e.species," ID: ",e.id]}),Object(a.jsx)(_e.a,{variant:"primary",href:e.url,target:"_blank",children:"More Info"})]})]},e.id)}))})]})}function Ue(){var e=Object(c.useState)([]),t=Object(M.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){fetch("https://finalspaceapi.com/api/v0/character/?limit=12").then((function(e){return e.json()})).then((function(e){r(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]);var i=Object(P.a)({card:{maxWidth:345,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",backgroundColor:"#fafafa"},media:{height:300}})();return Object(a.jsxs)("div",{children:[Object(a.jsx)(z.a,{children:Object(a.jsx)(ie.a,{color:"textPrimary",gutterBottom:!0,variant:"h2",align:"center",children:"React Material UI Example"})}),Object(a.jsx)(D.a,{container:!0,spacing:3,children:n.map((function(e){return Object(a.jsx)(D.a,{item:!0,xs:12,sm:3,children:Object(a.jsxs)(Fe.a,{className:i.card,children:[Object(a.jsx)(ze.a,{className:i.media,image:e.img_url}),Object(a.jsxs)(Re.a,{children:[Object(a.jsx)(ie.a,{color:"primary",variant:"h5",children:e.name}),Object(a.jsx)(ie.a,{color:"textSecondary",variant:"subtitle2",children:e.status})]})]})},e.id)}))})]})}n(469);function Je(){var e=Object(c.useState)(""),t=Object(M.a)(e,2),n=t[0],r=t[1];return Object(a.jsx)("div",{className:"ForgotPassword",children:Object(a.jsxs)(Me.a,{onSubmit:function(e){e.preventDefault()},children:[Object(a.jsxs)(Me.a.Group,{size:"lg",controlId:"email",children:[Object(a.jsx)(Me.a.Label,{children:"Email"}),Object(a.jsx)(Me.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(a.jsx)(_e.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0),children:"Send"})]})})}function Ve(){return Object(a.jsxs)(I.g,{children:[Object(a.jsx)(I.d,{exact:!0,path:"/",component:Le}),Object(a.jsx)(I.d,{path:"/login",render:function(){return e=Te,C()?Object(a.jsx)(I.c,{to:"/dashboard"}):Object(a.jsx)(e,{});var e}}),Object(a.jsx)(I.d,{path:"/blog",component:Ee}),Object(a.jsx)(I.d,{path:"/dashboard",component:Ce}),Object(a.jsx)(I.d,{path:"/characters",component:Ge}),Object(a.jsx)(I.d,{path:"/characters-mui",component:Ue}),Object(a.jsx)(I.d,{path:"/courses",component:De}),Object(a.jsx)(I.d,{path:"/forgot-password",component:Je}),Object(a.jsx)(I.d,{path:"*",component:Ne})]})}function He(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(L,{}),Object(a.jsx)(Ve,{}),Object(a.jsx)(B,{})]})}s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(j.a,{store:O,children:Object(a.jsx)(o.BrowserRouter,{basename:"/backoffice",children:Object(a.jsx)(He,{})})})}),document.getElementById("root"))}},[[470,1,2]]]);
//# sourceMappingURL=main.43fbaee7.chunk.js.map