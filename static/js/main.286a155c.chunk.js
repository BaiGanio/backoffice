(this.webpackJsonpbackoffice=this.webpackJsonpbackoffice||[]).push([[0],{357:function(e,t,n){},362:function(e,t,n){},541:function(e,t,n){},542:function(e,t,n){},543:function(e,t,n){},544:function(e,t,n){},545:function(e,t,n){},546:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n.n(r),i=n(19),s=n.n(i),o=n(88),l=n(61),j=n(104),d=n(60),b="bo_global_store",u="login_user",h="logout_user";var x=Object(j.b)({user:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(null===(e=JSON.parse(window.localStorage.getItem(b)))||void 0===e?void 0:e.user)||{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u:return Object(d.a)({},n.user);case h:return{};default:return t}}}),O=Object(j.c)(x);O.subscribe((function(){window.localStorage.setItem(b,JSON.stringify(O.getState()))}));n(357);var p=n(125),m=n(65),f=n(47),g=n(78),v=n.n(g),w=n(118);function y(e,t){return window.fetch("".concat("https://free-is4.azurewebsites.net").concat(e),{method:"POST",body:t}).then(function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}var k="user_auth_token",S="client_auth_token";function C(){return window.localStorage.getItem(k)||null}function N(){window.localStorage.removeItem(k)}var I=n(27),L=n(265);function B(){var e=Object(l.c)((function(e){return e.user})),t=Object(l.b)(),n=Object(I.k)(),r=Object(L.b)();function c(){t((N(),{type:h})),r.clear(),n.push("/login")}return Object(a.jsxs)(p.a,{collapseOnSelect:!0,bg:"light",expand:"md",className:"mb-3",children:[Object(a.jsx)(m.LinkContainer,{to:"/",children:Object(a.jsx)(p.a.Brand,{className:"font-weight-bold",children:"BO"})}),Object(a.jsx)(m.LinkContainer,{to:"/dashboard",children:Object(a.jsx)(f.a.Link,{children:"Dashboard"})}),Object(a.jsx)(m.LinkContainer,{to:"/blog",children:Object(a.jsx)(f.a.Link,{children:"Blog"})}),Object(a.jsx)(m.LinkContainer,{to:"/courses",children:Object(a.jsx)(f.a.Link,{children:"Courses"})}),Object(a.jsx)(m.LinkContainer,{to:"/characters",children:Object(a.jsx)(f.a.Link,{children:"Characters"})}),Object(a.jsx)(m.LinkContainer,{to:"/characters-mui",children:Object(a.jsx)(f.a.Link,{children:"Characters MUI"})}),Object(a.jsx)(p.a.Toggle,{}),Object(a.jsx)(p.a.Collapse,{className:"justify-content-end",children:Object(a.jsx)(f.a,{activeKey:window.location.pathname,children:e.email?Object(a.jsx)(f.a.Link,{onClick:function(){c()},children:"Logout"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m.LinkContainer,{to:"/login",children:Object(a.jsx)(f.a.Link,{children:"Sign in"})}),Object(a.jsx)(f.a.Link,{children:"|"}),Object(a.jsx)(m.LinkContainer,{to:"/signup",className:"text-muted",children:Object(a.jsx)(f.a.Link,{children:"Sign up"})})]})})})]})}n(362);function T(){return Object(a.jsx)("div",{className:"Footer text-center",children:Object(a.jsx)("h3",{children:"Developed by (BG) Team "})})}var _=n(13),P=n(75),z=n(5),E=n(46),F=n(612),A=n(552),D=n(603),R=n(96),U=n(604),G=n(605),H=n(200),M=n(547),W=n(550),q=n(598),J=n(599),K=n(271),V=n.n(K),Z=n(272),$=n.n(Z),X=n(273),Y=n.n(X),Q=n(274),ee=n.n(Q),te=n(159),ne=n.n(te),ae=Object(a.jsxs)("div",{children:[Object(a.jsxs)(M.a,{button:!0,children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(V.a,{})}),Object(a.jsx)(q.a,{primary:"Dashboard"})]}),Object(a.jsxs)(M.a,{button:!0,children:[Object(a.jsx)(W.a,{children:Object(a.jsx)($.a,{})}),Object(a.jsx)(q.a,{primary:"Orders"})]}),Object(a.jsxs)(M.a,{button:!0,children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(Y.a,{})}),Object(a.jsx)(q.a,{primary:"Reports"})]}),Object(a.jsxs)(M.a,{button:!0,children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(ee.a,{})}),Object(a.jsx)(q.a,{primary:"Integrations"})]})]}),re=Object(a.jsxs)("div",{children:[Object(a.jsx)(J.a,{inset:!0,children:"Saved reports"}),Object(a.jsxs)(M.a,{button:!0,children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(ne.a,{})}),Object(a.jsx)(q.a,{primary:"Current month"})]}),Object(a.jsxs)(M.a,{button:!0,children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(ne.a,{})}),Object(a.jsx)(q.a,{primary:"Last quarter"})]}),Object(a.jsxs)(M.a,{button:!0,children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(ne.a,{})}),Object(a.jsx)(q.a,{primary:"Year-end sale"})]})]}),ce=n(29),ie=n(94),se=n(112);function oe(e){return Object(a.jsx)(se.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function le(e,t){return{time:e,amount:t}}var je=[le("00:00",0),le("03:00",300),le("06:00",600),le("09:00",800),le("12:00",1500),le("15:00",2e3),le("18:00",2400),le("21:00",2400),le("24:00",void 0)];function de(){var e=Object(ce.a)();return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(oe,{children:"Today"}),Object(a.jsx)(ie.d,{children:Object(a.jsxs)(ie.c,{data:je,margin:{top:16,right:16,bottom:0,left:24},children:[Object(a.jsx)(ie.e,{dataKey:"time",stroke:e.palette.text.secondary}),Object(a.jsx)(ie.f,{stroke:e.palette.text.secondary,children:Object(a.jsx)(ie.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary},children:"Sales ($)"})}),Object(a.jsx)(ie.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})}var be=n(600);function ue(e){e.preventDefault()}var he=Object(E.a)({depositContext:{flex:1}});function xe(){var e=he();return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(oe,{children:"Recent Deposits"}),Object(a.jsx)(se.a,{component:"p",variant:"h4",children:"$3,024.00"}),Object(a.jsx)(se.a,{color:"textSecondary",className:e.depositContext,children:"on 15 March, 2019"}),Object(a.jsx)("div",{children:Object(a.jsx)(be.a,{color:"primary",href:"#",onClick:ue,children:"View balance"})})]})}n(541);var Oe=n(284),pe="".concat("https://bgapi.azurewebsites.net/","/api");function me(e){return window.fetch("".concat(pe).concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(C()||void 0)}}).then(function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",Promise.reject(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}var fe=n(287),ge=n.n(fe),ve=n(286),we=n.n(ve),ye="Admin",ke=n(611);function Se(){var e,t=Object(l.c)((function(e){return e.user.roles})),n=Object(ke.a)("all-users",(function(){return C()?me("/Users"):me("/Statistics")})),r=n.data,c=n.isLoading,i=n.isError,s=[{field:"firstName",headerName:"First Name",flex:1},{field:"userType",headerName:"Type of User",flex:1},{field:"createdOn",headerName:"Created On",flex:1},(null===t||void 0===t?void 0:t.map((function(e){return e.name})).includes(ye))?{field:"actions",headerName:"Actions",filterable:!1,renderCell:function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(R.a,{"aria-label":"update",size:"small",color:"default",onClick:function(){e.row.id,alert("TODO: Update!")},children:Object(a.jsx)(we.a,{})}),Object(a.jsx)(R.a,{"aria-label":"delete",size:"small",color:"secondary",onClick:function(){e.row.id,alert("TODO: Delete!")},children:Object(a.jsx)(ge.a,{})})]})}}:{width:0}],o=null!==(e=null===r||void 0===r?void 0:r.map((function(e){return{id:e.id,firstName:e.firstName,userType:e.typeOfUser,createdOn:new Date(e.createdOn).toLocaleString("bg-BG")}})))&&void 0!==e?e:[];return Object(a.jsxs)("div",{style:{height:"500px",width:"100%"},children:[Object(a.jsx)("h4",{children:"Users"}),i?Object(a.jsx)("h4",{style:{textAlign:"center",marginTop:"50px",width:"100%",color:"red"},children:"Something went wrong while fetching users!"}):Object(a.jsx)(Oe.a,{loading:c,rows:o,columns:s.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{disableClickEventBubbling:!0})})),showToolbar:!0,pageSize:5,rowsPerPageOptions:[5,10,20]})]})}var Ce=Object(E.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(P.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"hidden"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},mainListItems:{fontFamily:"Alsandra"}}}));function Ne(){var e=Ce(),t=c.a.useState(!0),n=Object(_.a)(t,1)[0],r=Object(z.a)(e.paper,e.fixedHeight);return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsxs)(F.a,{variant:"permanent",classes:{paper:Object(z.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n,children:[Object(a.jsx)("div",{className:e.toolbarIcon,children:Object(a.jsx)(R.a,{onClick:function(){},children:"Preview v1.4.1"})}),Object(a.jsx)(D.a,{}),Object(a.jsx)(A.a,{className:"mainListItems",children:ae}),Object(a.jsx)(D.a,{}),Object(a.jsx)(A.a,{children:re})]}),Object(a.jsxs)("main",{className:e.content,children:[Object(a.jsx)("div",{className:e.appBarSpacer}),Object(a.jsx)(U.a,{maxWidth:"lg",className:e.container,children:Object(a.jsxs)(G.a,{container:!0,spacing:3,children:[Object(a.jsx)(G.a,{item:!0,xs:12,md:8,lg:9,children:Object(a.jsx)(H.a,{className:r,children:Object(a.jsx)(de,{})})}),Object(a.jsx)(G.a,{item:!0,xs:12,md:4,lg:3,children:Object(a.jsx)(H.a,{className:r,children:Object(a.jsx)(xe,{})})}),Object(a.jsx)(Se,{})]})})]})]})}n(542);function Ie(){return Object(a.jsx)("div",{className:"NotFound text-center",children:Object(a.jsx)("h3",{children:"Sorry, page not found!"})})}n(543);var Le=n.p+"static/media/backoffice.d3db7d69.jpg";function Be(){return c.a.useEffect((function(){window.localStorage.getItem(S)||function(){var e=new URLSearchParams;return e.set("client_id","bo-client"),e.set("client_secret","9aa9796b-1261-40a7-a3f3-3308639b0b19"),e.set("scope","scope.bgapi"),e.set("grant_type","client_credentials"),y("/connect/token",e)}().then((function(e){return t=e.access_token,void window.localStorage.setItem(S,t);var t}))}),[]),Object(a.jsx)("div",{className:"Home",children:Object(a.jsxs)("div",{className:"lander",children:[Object(a.jsx)("img",{src:Le,className:"Home-image",alt:"BO"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:"Welcome to BackOffice"}),Object(a.jsx)("p",{children:"A simple React app"})]})})}n(544);var Te=n(290),_e=n(35),Pe=n(155);function ze(){var e=Object(I.k)(),t=Object(l.b)();return Object(a.jsxs)("div",{className:"Login",children:[Object(a.jsx)(Te.a,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required",e.password||(t.password="Password is required"),t},onSubmit:function(n,a){var r=a.setSubmitting;(function(e){var t=e.username,n=e.password,a=new URLSearchParams;return a.set("client_id","bo-user"),a.set("client_secret","aca35df5-8747-44ad-8eba-fec042d049b6"),a.set("scope","scope.bgapi"),a.set("grant_type","password"),a.set("username",t),a.set("password",n),y("/connect/token",a)})({username:n.email,password:n.password}).then((function(n){var a;a=n.access_token,window.localStorage.setItem(k,a),me("/Identity").then((function(n){r(!1),t(function(e){return{type:u,user:e}}(n)),e.push("/dashboard")}),(function(e){r(!1),N()}))}),(function(e){r(!1)}))},children:function(e){var t=e.values,n=e.errors,r=e.touched,c=e.handleChange,i=e.handleSubmit,s=e.isSubmitting;return Object(a.jsxs)(_e.a,{noValidate:!0,autoComplete:"true",onSubmit:i,children:[Object(a.jsxs)(_e.a.Group,{size:"lg",controlId:"email",children:[Object(a.jsx)(_e.a.Label,{children:" Email "}),Object(a.jsx)(_e.a.Control,{autoFocus:!0,name:"email",type:"email",value:t.email,onChange:c,isInvalid:r.email&&!!n.email}),Object(a.jsx)(_e.a.Control.Feedback,{type:"invalid",children:n.email})]}),Object(a.jsxs)(_e.a.Group,{size:"lg",controlId:"password",children:[Object(a.jsx)(_e.a.Label,{children:" Password "}),Object(a.jsx)(_e.a.Control,{name:"password",type:"password",value:t.password,onChange:c,isInvalid:r.password&&!!n.password}),Object(a.jsx)(_e.a.Control.Feedback,{type:"invalid",children:n.password})]}),Object(a.jsx)(Pe.a,{block:!0,size:"lg",type:"submit",disabled:s,children:s?"Loging...":"Login"})]})}}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:" Forgot password ? "})]})}var Ee=n(606),Fe=n(614);function Ae(){var e=Object(r.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){fetch("https://bgapi.azurewebsites.net/api/Statistics/Posts").then((function(e){return e.json()})).then((function(e){c(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Example of React Bootstrap"}),Object(a.jsx)(Ee.a,{children:n.map((function(e){return Object(a.jsxs)(Fe.a,{className:"m-4",style:{width:"20rem"},children:[Object(a.jsx)(Fe.a.Img,{variant:"top",src:e.imgUrl}),Object(a.jsxs)(Fe.a.Body,{children:[Object(a.jsx)(Fe.a.Title,{children:e.title}),Object(a.jsx)(Fe.a.Text,{children:e.content}),Object(a.jsx)(Pe.a,{variant:"primary",href:e.imgUrl,target:"_blank",children:"More Info"})]})]},e.id)}))})]})}var De=n(607),Re=n(609),Ue=n(608);function Ge(){var e=Object(r.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){fetch("https://bgapi.azurewebsites.net/api/courses").then((function(e){return e.json()})).then((function(e){c(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]);var i=Object(E.a)({card:{maxWidth:345,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",backgroundColor:"#fafafa"},media:{height:300}})();return Object(a.jsxs)("div",{children:[Object(a.jsx)(U.a,{children:Object(a.jsx)("h1",{children:" BGAPI fetch courses"})}),Object(a.jsx)(G.a,{container:!0,spacing:3,children:n.map((function(e){return Object(a.jsx)(G.a,{item:!0,xs:12,sm:3,children:Object(a.jsxs)(De.a,{className:i.card,children:[Object(a.jsx)(Ue.a,{className:i.media,image:e.image}),Object(a.jsxs)(Re.a,{children:[Object(a.jsx)(se.a,{color:"primary",variant:"h5",children:e.name}),Object(a.jsx)(se.a,{color:"textSecondary",variant:"subtitle2",children:e.description})]})]})},e.id)}))})]})}function He(){var e=Object(r.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){fetch("https://rickandmortyapi.com/api/character/1,183,15,113,91,149").then((function(e){return e.json()})).then((function(e){c(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Example of React Bootstrap"}),Object(a.jsx)(Ee.a,{children:n.map((function(e){return Object(a.jsxs)(Fe.a,{className:"m-4",style:{width:"20rem"},children:[Object(a.jsx)(Fe.a.Img,{variant:"top",src:e.image}),Object(a.jsxs)(Fe.a.Body,{children:[Object(a.jsx)(Fe.a.Title,{children:e.name}),Object(a.jsxs)(Fe.a.Text,{children:[e.species," ID: ",e.id]}),Object(a.jsx)(Pe.a,{variant:"primary",href:e.url,target:"_blank",children:"More Info"})]})]},e.id)}))})]})}function Me(){var e=Object(r.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){fetch("https://finalspaceapi.com/api/v0/character/?limit=12").then((function(e){return e.json()})).then((function(e){c(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]);var i=Object(E.a)({card:{maxWidth:345,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",backgroundColor:"#fafafa"},media:{height:300}})();return Object(a.jsxs)("div",{children:[Object(a.jsx)(U.a,{children:Object(a.jsx)(se.a,{color:"textPrimary",gutterBottom:!0,variant:"h2",align:"center",children:"React Material UI Example"})}),Object(a.jsx)(G.a,{container:!0,spacing:3,children:n.map((function(e){return Object(a.jsx)(G.a,{item:!0,xs:12,sm:3,children:Object(a.jsxs)(De.a,{className:i.card,children:[Object(a.jsx)(Ue.a,{className:i.media,image:e.img_url}),Object(a.jsxs)(Re.a,{children:[Object(a.jsx)(se.a,{color:"primary",variant:"h5",children:e.name}),Object(a.jsx)(se.a,{color:"textSecondary",variant:"subtitle2",children:e.status})]})]})},e.id)}))})]})}n(545);function We(){var e=Object(r.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(a.jsx)("div",{className:"ForgotPassword",children:Object(a.jsxs)(_e.a,{onSubmit:function(e){e.preventDefault()},children:[Object(a.jsxs)(_e.a.Group,{size:"lg",controlId:"email",children:[Object(a.jsx)(_e.a.Label,{children:"Email"}),Object(a.jsx)(_e.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(a.jsx)(Pe.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0),children:"Send"})]})})}function qe(){return Object(a.jsxs)(I.g,{children:[Object(a.jsx)(I.d,{exact:!0,path:"/",component:Be}),Object(a.jsx)(I.d,{path:"/login",render:function(){return e=ze,C()?Object(a.jsx)(I.c,{to:"/dashboard"}):Object(a.jsx)(e,{});var e}}),Object(a.jsx)(I.d,{path:"/blog",component:Ae}),Object(a.jsx)(I.d,{path:"/dashboard",component:Ne}),Object(a.jsx)(I.d,{path:"/characters",component:He}),Object(a.jsx)(I.d,{path:"/characters-mui",component:Me}),Object(a.jsx)(I.d,{path:"/courses",component:Ge}),Object(a.jsx)(I.d,{path:"/forgot-password",component:We}),Object(a.jsx)(I.d,{path:"*",component:Ie})]})}function Je(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(B,{}),Object(a.jsx)(qe,{}),Object(a.jsx)(T,{})]})}var Ke=new(n(610).a)({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:function(e,t){return console.log(t),404!==t.status&&e<1}}}});function Ve(e){var t=e.children;return Object(a.jsx)(L.a,{client:Ke,children:t})}s.a.render(Object(a.jsx)(l.a,{store:O,children:Object(a.jsx)(Ve,{children:Object(a.jsx)(o.BrowserRouter,{basename:"/backoffice",children:Object(a.jsx)(Je,{})})})}),document.getElementById("root"))}},[[546,1,2]]]);
//# sourceMappingURL=main.286a155c.chunk.js.map