(this["webpackJsonpspeed-reader"]=this["webpackJsonpspeed-reader"]||[]).push([[0],{45:function(e,t,n){e.exports={navbar:"Navbar_navbar__gPR8y",navItem:"Navbar_navItem__24Q0H",menu:"Navbar_menu__1dnb_"}},54:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a,r,s,o,c,i,d,l,j,b,u,h,O,m,p,x,f,g,w,v=n(0),y=n(19),C=n.n(y),S=(n(54),n(7)),P=n(5),k=n(49),E=n(16),I=n(45),U=n.n(I),N=n(1),_=function(e){e.user;return Object(N.jsx)(k.a,{className:U.a.navbar,children:Object(N.jsx)(E.c,{to:"/",style:{color:"#FFF",textDecoration:"none",fontSize:"2rem",display:"flex",alignItems:"center"},children:"Speed Reader"})})},L=n(10),q=n(11),G=q.a.div(a||(a=Object(L.a)(["\n  padding: 1rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  background-image: linear-gradient(100deg, #66f, #33f, #33f, #77f);\n\n  @media screen and (max-width: 1100px) {\n    padding: 2% 3%;\n  }\n"]))),z=q.a.div(r||(r=Object(L.a)(["\n  display: flex; \n  /* flex-direction: column; */\n  justify-content: flex-start; \n  /* width: 30%; */\n\n  @media screen and (max-width: 600px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]))),H=q.a.div(s||(s=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),T=Object(q.a)(E.b)(o||(o=Object(L.a)(["\n  text-decoration: none;\n  padding: 1rem;\n  margin: 0.5rem 1rem;\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: gray;\n  border-radius: 3px;\n  color: #222;\n  background: #eee;\n\n  &:hover {\n    box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.5);\n    color: #222;\n    background: #ddd;\n  }\n"]))),D=n(20),A=n.n(D),F=function(e){e.user;var t=e.posts,n=e.setPosts,a=["WritingPrompts","AskReddit"],r=Object(v.useState)(a),s=Object(S.a)(r,1)[0],o=Object(v.useState)(a[0]),c=Object(S.a)(o,2),i=c[0],d=c[1],l=function(e){d(e.target.name)};return Object(v.useEffect)((function(){A()({url:"https://www.reddit.com/r/".concat(i,"/top/.json"),method:"GET"}).then((function(e){n(e.data.data.children.filter((function(e){return e.data.num_comments>1})))})).catch(console.error)}),[i]),Object(N.jsxs)(G,{children:[Object(N.jsx)(z,{children:s.map((function(e){return Object(N.jsx)("button",{style:{height:"3rem",margin:"0.5rem 1rem 0.5rem 0",borderStyle:"solid",borderWidth:"1px",borderColor:"gray",borderRadius:"3px"},name:e,onClick:l,children:e},e)}))}),Object(N.jsx)(H,{children:t.map((function(e){return Object(N.jsx)(T,{to:"/story/".concat(e.data.id),children:e.data.title},e.data.id)}))})]})},R=q.a.div(c||(c=Object(L.a)(["\n    height: ","px;\n    overflow: hidden;\n    padding: 20vw;\n    background-image: linear-gradient(100deg, #66f, #33f, #33f, #77f);\n\n    @media screen and (max-width: 600px) {\n        padding: 2%;\n        padding-top: 10%;\n    }\n"])),(function(e){return e.windowHeight})),B=q.a.div(i||(i=Object(L.a)(["\n    color: #222;\n    background: #55f;\n    padding: 10%;\n    border-radius: 20px;\n    border: solid;\n    border-color: #353535;\n"]))),J=q.a.div(d||(d=Object(L.a)(["\n    height: 20vh;\n    width: 100%;\n    background: #f1f1f1;\n    border: solid;\n    border-color: #aaa;\n    border-width: 1px;\n    border-radius: 20px;\n    margin-bottom: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),W=q.a.div(l||(l=Object(L.a)(["\n    display: flex;\n    padding: 0.5rem 0.5rem 1rem 0.5rem;\n    width: 100%;\n    justify-content: space-around;\n    align-items: baseline;\n"]))),Q=q.a.div(j||(j=Object(L.a)([""]))),K=q.a.div(b||(b=Object(L.a)([""]))),M=q.a.div(u||(u=Object(L.a)(["\n    padding: 0;\n    margin: 0;\n"]))),V=q.a.div(h||(h=Object(L.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n"]))),X=q.a.h2(O||(O=Object(L.a)(["\n    color: #222;\n"]))),Y=q.a.input(m||(m=Object(L.a)(["\n    width: 3rem;\n"]))),Z=q.a.span(p||(p=Object(L.a)([""]))),$=q.a.p(x||(x=Object(L.a)(["\n"]))),ee=q.a.p(f||(f=Object(L.a)(["\n"]))),te=q.a.button(g||(g=Object(L.a)(["\n    color: #111;\n    background: #70cE70;\n    height: 5rem;\n    width: 5rem;\n    border-radius: 50%;\n    font-size: 4rem;\n    font-weight: 800;\n    border: none;\n    margin: 0 0.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n        background: #60bE60;\n        color: #000;\n    }\n"]))),ne=q.a.button(w||(w=Object(L.a)(["\n    color: #111;\n    background: #70cE70;\n    height: 3rem;\n    width: 3rem;\n    border-radius: 50%;\n    font-size: 2rem;\n    font-weight: 800;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n        background: #60bE60;\n        color: #000;\n    }\n"]))),ae=n(29),re=function(e){var t=e.posts,n=Object(v.useState)(window.innerHeight-48),a=Object(S.a)(n,2),r=a[0],s=a[1];Object(v.useEffect)((function(){window.addEventListener("resize",(function(){return s(window.innerHeight-48)}))}));var o=Object(P.h)().id,c=Object(v.useState)(0),i=Object(S.a)(c,2),d=i[0],l=i[1],j=Object(v.useState)([]),b=Object(S.a)(j,2),u=b[0],h=b[1],O=Object(v.useState)(""),m=Object(S.a)(O,2),p=m[0],x=m[1],f=Object(v.useState)(1),g=Object(S.a)(f,2),w=g[0],y=g[1],C=Object(v.useState)(!1),k=Object(S.a)(C,2),E=k[0],I=k[1],U=Object(v.useState)(250),_=Object(S.a)(U,2),L=_[0],q=_[1],G=new Promise((function(e,t){setTimeout((function(){e("foo")}),6e4/L)}));return Object(v.useEffect)((function(){A.a.get("".concat(t.find((function(e){return e.data.id===o})).data.url,".json")).then((function(e){y(e.data[1].data.children.length-1),e.data[1].data.children[1]&&h(e.data[1].data.children[1].data.body.split(" ")),console.log(e.data[1].data.children[1].data.body.split(" "))})).catch(console.error)}),[]),Object(v.useEffect)((function(){E&&d<u.length&&G.then((function(){x(u[d]),l((function(e){return e+1}))}))}),[u,d,E]),Object(N.jsx)(R,{windowHeight:r,children:Object(N.jsxs)(B,{children:[Object(N.jsx)(J,{children:Object(N.jsx)(X,{children:p})}),Object(N.jsxs)(W,{children:[Object(N.jsx)(Q,{children:Object(N.jsxs)($,{children:["Story: 1 of ",w>0?"".concat(w):"0"]})}),Object(N.jsx)(K,{children:Object(N.jsxs)(ee,{children:[u.length," words"]})}),Object(N.jsxs)(M,{children:[Object(N.jsx)(Y,{type:"text",value:L,onChange:function(e){q(e.target.value)}}),Object(N.jsx)(Z,{children:" wpm"})]})]}),Object(N.jsxs)(V,{children:[Object(N.jsx)(ne,{children:Object(N.jsx)(ae.a,{})}),Object(N.jsx)(te,{onClick:function(){I((function(e){return!e}))},children:E?Object(N.jsx)(ae.c,{}):Object(N.jsx)(ae.d,{})}),Object(N.jsx)(ne,{children:Object(N.jsx)(ae.b,{})})]})]})})},se=n(8),oe=n(17),ce=n(18),ie=n(23),de=n(22),le="https://aqueous-forest-64376.herokuapp.com",je="http://localhost:4741",be="localhost"===window.location.hostname?je:le,ue=function(e){return A()({url:be+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},he=n(9),Oe=n(27),me=function(e){Object(ie.a)(n,e);var t=Object(de.a)(n);function n(e){var a;return Object(oe.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(se.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props.setUser;(t=a.state,A()({method:"POST",url:be+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return ue(a.state)})).then((function(e){return n(e.data.user)})).then((function(){a.setState({navigate:!0})})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),console.error(e)}))},a.state={email:"",password:"",passwordConfirmation:"",navigate:!1},a}return Object(ce.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return this.state.navigate?Object(N.jsx)(P.a,{to:"/"}):Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(N.jsx)("h3",{children:"Sign Up"}),Object(N.jsxs)(he.a,{onSubmit:this.onSignUp,children:[Object(N.jsxs)(he.a.Group,{controlId:"email",children:[Object(N.jsx)(he.a.Label,{children:"Email address"}),Object(N.jsx)(he.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(N.jsxs)(he.a.Group,{controlId:"password",children:[Object(N.jsx)(he.a.Label,{children:"Password"}),Object(N.jsx)(he.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(N.jsxs)(he.a.Group,{controlId:"passwordConfirmation",children:[Object(N.jsx)(he.a.Label,{children:"Password Confirmation"}),Object(N.jsx)(he.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(N.jsx)(Oe.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(v.Component),pe=function(e){Object(ie.a)(n,e);var t=Object(de.a)(n);function n(e){var a;return Object(oe.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(se.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props.setUser;ue(a.state).then((function(e){return t(e.data.user)})).then((function(){return a.setState({navigate:!0})})).catch((function(e){a.setState({email:"",password:""}),console.error(e)}))},a.state={email:"",password:"",navigate:!1},a}return Object(ce.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return this.state.navigate?Object(N.jsx)(P.a,{to:"/"}):Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(N.jsx)("h3",{children:"Sign In"}),Object(N.jsxs)(he.a,{onSubmit:this.onSignIn,children:[Object(N.jsxs)(he.a.Group,{controlId:"email",children:[Object(N.jsx)(he.a.Label,{children:"Email address"}),Object(N.jsx)(he.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(N.jsxs)(he.a.Group,{controlId:"password",children:[Object(N.jsx)(he.a.Label,{children:"Password"}),Object(N.jsx)(he.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(N.jsx)(Oe.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(v.Component),xe=function(e){var t=e.clearUser,n=e.user,a=Object(v.useState)(!1),r=Object(S.a)(a,2),s=r[0],o=r[1];return Object(v.useEffect)((function(){!function(e){A()({url:be+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})}(n),o(!0),t()}),[]),!n||s?Object(N.jsx)(P.a,{to:"/"}):""},fe=function(e){Object(ie.a)(n,e);var t=Object(de.a)(n);function n(e){var a;return Object(oe.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(se.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props.user;(function(e,t){return A()({url:be+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,t).then((function(){return a.setState({navigate:!0})})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),console.error(e)}))},a.state={oldPassword:"",newPassword:"",navigate:!1},a}return Object(ce.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return this.state.navigate?Object(N.jsx)(P.a,{to:"/"}):Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(N.jsx)("h3",{children:"Change Password"}),Object(N.jsxs)(he.a,{onSubmit:this.onChangePassword,children:[Object(N.jsxs)(he.a.Group,{controlId:"oldPassword",children:[Object(N.jsx)(he.a.Label,{children:"Old password"}),Object(N.jsx)(he.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(N.jsxs)(he.a.Group,{controlId:"newPassword",children:[Object(N.jsx)(he.a.Label,{children:"New Password"}),Object(N.jsx)(he.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(N.jsx)(Oe.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(v.Component),ge=n(13),we=Object(ge.b)(),ve=function(e){var t=e.user,n=e.setUser,a=e.clearUser,r=e.posts,s=e.setPosts;return Object(N.jsxs)("main",{children:[Object(N.jsx)(_,{user:t}),Object(N.jsxs)(P.d,{history:we,children:[Object(N.jsx)(P.b,{path:"/sign-up",element:Object(N.jsx)(me,{setUser:n})}),Object(N.jsx)(P.b,{path:"/sign-in",element:Object(N.jsx)(pe,{setUser:n})}),Object(N.jsx)(P.b,{path:"/sign-out",element:Object(N.jsx)(xe,{clearUser:a,user:t})}),Object(N.jsx)(P.b,{path:"/change-password",element:Object(N.jsx)(fe,{user:t})}),Object(N.jsx)(P.b,{path:"/",element:Object(N.jsx)(F,{posts:r,setPosts:s})}),Object(N.jsx)(P.b,{path:"/story/:id",element:Object(N.jsx)(re,{posts:r})})]})]})},ye=(n(78),function(){var e=Object(v.useState)(null),t=Object(S.a)(e,2),n=t[0],a=t[1],r=Object(v.useState)([]),s=Object(S.a)(r,2),o=s[0],c=s[1];return Object(N.jsx)(v.Fragment,{children:Object(N.jsx)(ve,{user:n,setUser:a,clearUser:function(){a(null)},posts:o,setPosts:c})})}),Ce=Object(N.jsx)(E.a,{basename:"/speedreader",children:Object(N.jsx)(ye,{})});C.a.render(Ce,document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.b3e67c04.chunk.js.map