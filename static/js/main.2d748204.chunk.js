(this.webpackJsonpbackoffice=this.webpackJsonpbackoffice||[]).push([[0],{263:function(e,t,n){},446:function(e,t,n){},447:function(e,t,n){},448:function(e,t,n){},449:function(e,t,n){},451:function(e,t,n){},454:function(e,t,n){},455:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(1),r=n.n(a),i=n(15),s=n.n(i),j=n(77),o=(n(263),n(264),n(18)),l=n(22),d=n(103),b=n(204),h=n(7),x=n(497),O=n(513),u=n(506),p=n(505),m=n(504),f=n(507),g=n(508),v=n(457),y=n(491),w=n(494),S=n(495),k=n(496),N=n(205),C=n.n(N),L=n(206),B=n.n(L),I=n(207),M=n.n(I),T=n(208),P=n.n(T),E=n(116),z=n.n(E),A=Object(c.jsxs)("div",{children:[Object(c.jsxs)(y.a,{button:!0,children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(C.a,{})}),Object(c.jsx)(S.a,{primary:"Dashboard"})]}),Object(c.jsxs)(y.a,{button:!0,children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(B.a,{})}),Object(c.jsx)(S.a,{primary:"Orders"})]}),Object(c.jsxs)(y.a,{button:!0,children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(M.a,{})}),Object(c.jsx)(S.a,{primary:"Reports"})]}),Object(c.jsxs)(y.a,{button:!0,children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(P.a,{})}),Object(c.jsx)(S.a,{primary:"Integrations"})]})]}),D=Object(c.jsxs)("div",{children:[Object(c.jsx)(k.a,{inset:!0,children:"Saved reports"}),Object(c.jsxs)(y.a,{button:!0,children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(z.a,{})}),Object(c.jsx)(S.a,{primary:"Current month"})]}),Object(c.jsxs)(y.a,{button:!0,children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(z.a,{})}),Object(c.jsx)(S.a,{primary:"Last quarter"})]}),Object(c.jsxs)(y.a,{button:!0,children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(z.a,{})}),Object(c.jsx)(S.a,{primary:"Year-end sale"})]})]}),F=n(63),R=n(50),G=n(86);function H(e){return Object(c.jsx)(G.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function U(e,t){return{time:e,amount:t}}var J=[U("00:00",0),U("03:00",300),U("06:00",600),U("09:00",800),U("12:00",1500),U("15:00",2e3),U("18:00",2400),U("21:00",2400),U("24:00",void 0)];function K(){var e=Object(F.a)();return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(H,{children:"Today"}),Object(c.jsx)(R.d,{children:Object(c.jsxs)(R.c,{data:J,margin:{top:16,right:16,bottom:0,left:24},children:[Object(c.jsx)(R.e,{dataKey:"time",stroke:e.palette.text.secondary}),Object(c.jsx)(R.f,{stroke:e.palette.text.secondary,children:Object(c.jsx)(R.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary},children:"Sales ($)"})}),Object(c.jsx)(R.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})}var V=n(503),W=n(498),_=n(502),X=n(501),$=n(499),q=n(500);function Y(e,t,n,c,a,r){return{id:e,date:t,name:n,shipTo:c,paymentMethod:a,amount:r}}var Q=[Y(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),Y(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),Y(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),Y(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),Y(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function Z(e){e.preventDefault()}var ee=Object(x.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function te(){var e=ee();return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(H,{children:"Recent Orders"}),Object(c.jsxs)(W.a,{size:"small",children:[Object(c.jsx)($.a,{children:Object(c.jsxs)(q.a,{children:[Object(c.jsx)(X.a,{children:"Date"}),Object(c.jsx)(X.a,{children:"Name"}),Object(c.jsx)(X.a,{children:"Ship To"}),Object(c.jsx)(X.a,{children:"Payment Method"}),Object(c.jsx)(X.a,{align:"right",children:"Sale Amount"})]})}),Object(c.jsx)(_.a,{children:Q.map((function(e){return Object(c.jsxs)(q.a,{children:[Object(c.jsx)(X.a,{children:e.date}),Object(c.jsx)(X.a,{children:e.name}),Object(c.jsx)(X.a,{children:e.shipTo}),Object(c.jsx)(X.a,{children:e.paymentMethod}),Object(c.jsx)(X.a,{align:"right",children:e.amount})]},e.id)}))})]}),Object(c.jsx)("div",{className:e.seeMore,children:Object(c.jsx)(V.a,{color:"primary",href:"#",onClick:Z,children:"See more orders"})})]})}function ne(e){e.preventDefault()}var ce=Object(x.a)({depositContext:{flex:1}});function ae(){var e=ce();return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(H,{children:"Recent Deposits"}),Object(c.jsx)(G.a,{component:"p",variant:"h4",children:"$3,024.00"}),Object(c.jsx)(G.a,{color:"textSecondary",className:e.depositContext,children:"on 15 March, 2019"}),Object(c.jsx)("div",{children:Object(c.jsx)(V.a,{color:"primary",href:"#",onClick:ne,children:"View balance"})})]})}n(446);var re=Object(x.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(b.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"hidden"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},mainListItems:{fontFamily:"Alsandra"}}}));function ie(){var e=re(),t=r.a.useState(!0),n=Object(l.a)(t,1)[0],a=Object(h.a)(e.paper,e.fixedHeight);return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsxs)(O.a,{variant:"permanent",classes:{paper:Object(h.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n,children:[Object(c.jsx)("div",{className:e.toolbarIcon,children:Object(c.jsx)(m.a,{onClick:function(){},children:"Preview v1.4.1"})}),Object(c.jsx)(p.a,{}),Object(c.jsx)(u.a,{className:"mainListItems",children:A}),Object(c.jsx)(p.a,{}),Object(c.jsx)(u.a,{children:D})]}),Object(c.jsxs)("main",{className:e.content,children:[Object(c.jsx)("div",{className:e.appBarSpacer}),Object(c.jsx)(f.a,{maxWidth:"lg",className:e.container,children:Object(c.jsxs)(g.a,{container:!0,spacing:3,children:[Object(c.jsx)(g.a,{item:!0,xs:12,md:8,lg:9,children:Object(c.jsx)(v.a,{className:a,children:Object(c.jsx)(K,{})})}),Object(c.jsx)(g.a,{item:!0,xs:12,md:4,lg:3,children:Object(c.jsx)(v.a,{className:a,children:Object(c.jsx)(ae,{})})}),Object(c.jsx)(g.a,{item:!0,xs:12,children:Object(c.jsx)(v.a,{className:e.paper,children:Object(c.jsx)(te,{})})})]})})]})]})}n(447);function se(){return Object(c.jsx)("div",{className:"NotFound text-center",children:Object(c.jsx)("h3",{children:"Sorry, page not found!"})})}n(448);var je=n.p+"static/media/backoffice.d3db7d69.jpg";function oe(){return Object(c.jsx)("div",{className:"Home",children:Object(c.jsxs)("div",{className:"lander",children:[Object(c.jsx)("img",{src:je,className:"Home-image",alt:"BO"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("h1",{children:"Welcome to BackOffice"}),Object(c.jsx)("p",{children:"A simple React app"})]})})}var le=n(25),de=n(110);n(449);function be(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),j=s[0],o=s[1];return Object(c.jsxs)("div",{className:"Login",children:[Object(c.jsxs)(le.a,{onSubmit:function(e){e.preventDefault()},children:[Object(c.jsxs)(le.a.Group,{size:"lg",controlId:"email",children:[Object(c.jsx)(le.a.Label,{children:"Email"}),Object(c.jsx)(le.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(c.jsxs)(le.a.Group,{size:"lg",controlId:"password",children:[Object(c.jsx)(le.a.Label,{children:"Password"}),Object(c.jsx)(le.a.Control,{type:"password",value:j,onChange:function(e){return o(e.target.value)}})]}),Object(c.jsx)(de.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&j.length>0),children:"Login"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"/forgot-password",children:" Forgot password? "})]})}var he=n(509),xe=n(514);function Oe(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://bgapi.azurewebsites.net/api/Statistics/Posts").then((function(e){return e.json()})).then((function(e){r(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Example of React Bootstrap"}),Object(c.jsx)(he.a,{children:n.map((function(e){return Object(c.jsxs)(xe.a,{className:"m-4",style:{width:"20rem"},children:[Object(c.jsx)(xe.a.Img,{variant:"top",src:e.imgUrl}),Object(c.jsxs)(xe.a.Body,{children:[Object(c.jsx)(xe.a.Title,{children:e.title}),Object(c.jsx)(xe.a.Text,{children:e.content}),Object(c.jsx)(de.a,{variant:"primary",href:e.imgUrl,target:"_blank",children:"More Info"})]})]},e.id)}))})]})}var ue=n(510),pe=n(512),me=n(511);function fe(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){fetch("https://bgapi.azurewebsites.net/api/courses").then((function(e){return e.json()})).then((function(e){r(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]);var i=Object(x.a)({card:{maxWidth:345,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",backgroundColor:"#fafafa"},media:{height:300}})();return Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{children:Object(c.jsx)("h1",{children:" BGAPI fetch courses"})}),Object(c.jsx)(g.a,{container:!0,spacing:3,children:n.map((function(e){return Object(c.jsx)(g.a,{item:!0,xs:12,sm:3,children:Object(c.jsxs)(ue.a,{className:i.card,children:[Object(c.jsx)(me.a,{className:i.media,image:e.image}),Object(c.jsxs)(pe.a,{children:[Object(c.jsx)(G.a,{color:"primary",variant:"h5",children:e.name}),Object(c.jsx)(G.a,{color:"textSecondary",variant:"subtitle2",children:e.description})]})]})},e.id)}))})]})}function ge(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://rickandmortyapi.com/api/character/1,183,15,113,91,149").then((function(e){return e.json()})).then((function(e){r(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Example of React Bootstrap"}),Object(c.jsx)(he.a,{children:n.map((function(e){return Object(c.jsxs)(xe.a,{className:"m-4",style:{width:"20rem"},children:[Object(c.jsx)(xe.a.Img,{variant:"top",src:e.image}),Object(c.jsxs)(xe.a.Body,{children:[Object(c.jsx)(xe.a.Title,{children:e.name}),Object(c.jsxs)(xe.a.Text,{children:[e.species," ID: ",e.id]}),Object(c.jsx)(de.a,{variant:"primary",href:e.url,target:"_blank",children:"More Info"})]})]},e.id)}))})]})}function ve(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){fetch("https://finalspaceapi.com/api/v0/character/?limit=12").then((function(e){return e.json()})).then((function(e){r(e),console.log(e)})).catch((function(e){console.error("There was an error!",e)}))}),[]);var i=Object(x.a)({card:{maxWidth:345,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",backgroundColor:"#fafafa"},media:{height:300}})();return Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{children:Object(c.jsx)(G.a,{color:"textPrimary",gutterBottom:!0,variant:"h2",align:"center",children:"React Material UI Example"})}),Object(c.jsx)(g.a,{container:!0,spacing:3,children:n.map((function(e){return Object(c.jsx)(g.a,{item:!0,xs:12,sm:3,children:Object(c.jsxs)(ue.a,{className:i.card,children:[Object(c.jsx)(me.a,{className:i.media,image:e.img_url}),Object(c.jsxs)(pe.a,{children:[Object(c.jsx)(G.a,{color:"primary",variant:"h5",children:e.name}),Object(c.jsx)(G.a,{color:"textSecondary",variant:"subtitle2",children:e.status})]})]})},e.id)}))})]})}n(451);function ye(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.jsx)("div",{className:"ForgotPassword",children:Object(c.jsxs)(le.a,{onSubmit:function(e){e.preventDefault()},children:[Object(c.jsxs)(le.a.Group,{size:"lg",controlId:"email",children:[Object(c.jsx)(le.a.Label,{children:"Email"}),Object(c.jsx)(le.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(c.jsx)(de.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0),children:"Send"})]})})}function we(){return Object(c.jsxs)(o.g,{children:[Object(c.jsx)(o.d,{exact:!0,path:"/",component:oe}),Object(c.jsx)(o.d,{path:"/login",component:be}),Object(c.jsx)(o.d,{path:"/blog",component:Oe}),Object(c.jsx)(o.d,{path:"/dashboard",component:ie}),Object(c.jsx)(o.d,{path:"/characters",component:ge}),Object(c.jsx)(o.d,{path:"/characters-mui",component:ve}),Object(c.jsx)(o.d,{path:"/courses",component:fe}),Object(c.jsx)(o.d,{path:"/forgot-password",component:ye}),Object(c.jsx)(o.d,{children:Object(c.jsx)(se,{})})]})}var Se=n(85),ke=n(39),Ne=n(33);function Ce(){return Object(c.jsxs)("div",{className:"appbar",children:[Object(c.jsxs)(Se.a,{collapseOnSelect:!0,bg:"light",expand:"md",className:"mb-3",children:[Object(c.jsx)(ke.LinkContainer,{to:"/",children:Object(c.jsx)(Se.a.Brand,{className:"font-weight-bold",children:"BO"})}),Object(c.jsx)(ke.LinkContainer,{to:"/dashboard",children:Object(c.jsx)(Ne.a.Link,{children:"Dashboard"})}),Object(c.jsx)(ke.LinkContainer,{to:"/blog",children:Object(c.jsx)(Ne.a.Link,{children:"Blog"})}),Object(c.jsx)(ke.LinkContainer,{to:"/courses",children:Object(c.jsx)(Ne.a.Link,{children:"Courses"})}),Object(c.jsx)(ke.LinkContainer,{to:"/characters",children:Object(c.jsx)(Ne.a.Link,{children:"Characters"})}),Object(c.jsx)(ke.LinkContainer,{to:"/characters-mui",children:Object(c.jsx)(Ne.a.Link,{children:"Characters MUI"})}),Object(c.jsx)(Se.a.Toggle,{}),Object(c.jsx)(Se.a.Collapse,{className:"justify-content-end",children:Object(c.jsxs)(Ne.a,{activeKey:window.location.pathname,children:[Object(c.jsx)(ke.LinkContainer,{to:"/login",children:Object(c.jsx)(Ne.a.Link,{children:"Sign in"})}),Object(c.jsx)(Ne.a.Link,{children:"|"}),Object(c.jsx)(ke.LinkContainer,{to:"/signup",className:"text-muted",children:Object(c.jsx)(Ne.a.Link,{children:"Sign up"})})]})})]}),Object(c.jsx)(we,{})]})}n(454);function Le(){return Object(c.jsx)("div",{className:"Footer text-center",children:Object(c.jsx)("h3",{children:"Developed by (BG) Team "})})}function Be(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(Ce,{}),Object(c.jsx)(Le,{})]})}s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j.BrowserRouter,{basename:"/backoffice",children:Object(c.jsx)(Be,{})})}),document.getElementById("root"))}},[[455,1,2]]]);
//# sourceMappingURL=main.2d748204.chunk.js.map