(this["webpackJsonpspeed-reader"]=this["webpackJsonpspeed-reader"]||[]).push([[0],{45:function(e,t,n){e.exports={navbar:"Navbar_navbar__gPR8y",navItem:"Navbar_navItem__24Q0H",menu:"Navbar_menu__1dnb_"}},54:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a,r,s,o,c,i,d,l,j,b,u,h,O,p,m,x,f,g=n(0),w=n(19),v=n.n(w),y=(n(54),n(7)),C=n(5),S=n(49),P=n(16),k=n(45),E=n.n(k),I=n(1),U=function(e){e.user;return Object(I.jsx)(S.a,{className:E.a.navbar,children:Object(I.jsx)(P.c,{to:"/",style:{color:"#FFF",textDecoration:"none",fontSize:"2rem",display:"flex",alignItems:"center"},children:"Speed Reader"})})},N=n(10),_=n(11),L=_.a.div(a||(a=Object(N.a)(["\n  padding: 1rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  background-image: linear-gradient(100deg, #66f, #33f, #33f, #77f);\n\n  @media screen and (max-width: 1100px) {\n    padding: 2% 3%;\n  }\n"]))),q=_.a.div(r||(r=Object(N.a)(["\n  display: flex; \n  /* flex-direction: column; */\n  justify-content: flex-start; \n  /* width: 30%; */\n\n  @media screen and (max-width: 600px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]))),G=_.a.div(s||(s=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),z=Object(_.a)(P.b)(o||(o=Object(N.a)(["\n  text-decoration: none;\n  padding: 1rem;\n  margin: 0.5rem 1rem;\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: gray;\n  border-radius: 3px;\n  color: #222;\n  background: #eee;\n\n  &:hover {\n    box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.5);\n    color: #222;\n    background: #ddd;\n  }\n"]))),H=n(20),T=n.n(H),D=function(e){e.user;var t=e.posts,n=e.setPosts,a=["WritingPrompts","AskReddit"],r=Object(g.useState)(a),s=Object(y.a)(r,1)[0],o=Object(g.useState)(a[0]),c=Object(y.a)(o,2),i=c[0],d=c[1],l=function(e){d(e.target.name)};return Object(g.useEffect)((function(){T()({url:"https://www.reddit.com/r/".concat(i,"/top/.json"),method:"GET"}).then((function(e){n(e.data.data.children.filter((function(e){return e.data.num_comments>1})))})).catch(console.error)}),[i]),Object(I.jsxs)(L,{children:[Object(I.jsx)(q,{children:s.map((function(e){return Object(I.jsx)("button",{style:{height:"3rem",margin:"0.5rem 1rem 0.5rem 0",borderStyle:"solid",borderWidth:"1px",borderColor:"gray",borderRadius:"3px"},name:e,onClick:l,children:e},e)}))}),Object(I.jsx)(G,{children:t.map((function(e){return Object(I.jsx)(z,{to:"/story/".concat(e.data.id),children:e.data.title},e.data.id)}))})]})},A=_.a.div(c||(c=Object(N.a)(["\n    height: ","px;\n    overflow: hidden;\n    padding: 20vw;\n    background-image: linear-gradient(100deg, #66f, #33f, #33f, #77f);\n\n    @media screen and (max-width: 600px) {\n        padding: 2%;\n        padding-top: 10%;\n    }\n"])),(function(e){return e.windowHeight})),F=_.a.div(i||(i=Object(N.a)(["\n    color: #222;\n    background: #55f;\n    padding: 10%;\n    border-radius: 20px;\n    border: solid;\n    border-color: #353535;\n"]))),R=_.a.div(d||(d=Object(N.a)(["\n    height: 20vh;\n    width: 100%;\n    background: #f1f1f1;\n    border: solid;\n    border-color: #aaa;\n    border-width: 1px;\n    border-radius: 20px;\n    margin-bottom: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),B=_.a.div(l||(l=Object(N.a)(["\n    display: flex;\n    padding: 5px 0;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n"]))),J=_.a.div(j||(j=Object(N.a)([""]))),W=_.a.div(b||(b=Object(N.a)(["\n    padding: 0;\n    margin: 0;\n"]))),Q=_.a.div(u||(u=Object(N.a)(["\n    display: flex;\n    align-items: center;\n"]))),K=_.a.h2(h||(h=Object(N.a)(["\n    color: #222;\n"]))),M=_.a.input(O||(O=Object(N.a)(["\n    width: 3rem;\n"]))),V=_.a.span(p||(p=Object(N.a)([""]))),X=_.a.div(m||(m=Object(N.a)(["\n"]))),Y=_.a.button(x||(x=Object(N.a)(["\n    color: #111;\n    background: #70cE70;\n    height: 5rem;\n    width: 5rem;\n    border-radius: 50%;\n    font-size: 4rem;\n    font-weight: 800;\n    border: none;\n    margin: 0 0.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n        background: #60bE60;\n        color: #000;\n    }\n"]))),Z=_.a.button(f||(f=Object(N.a)(["\n    color: #111;\n    background: #70cE70;\n    height: 3rem;\n    width: 3rem;\n    border-radius: 50%;\n    font-size: 2rem;\n    font-weight: 800;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n        background: #60bE60;\n        color: #000;\n    }\n"]))),$=n(29),ee=function(e){var t=e.posts,n=Object(g.useState)(window.innerHeight-48),a=Object(y.a)(n,2),r=a[0],s=a[1];Object(g.useEffect)((function(){window.addEventListener("resize",(function(){return s(window.innerHeight-48)}))}));var o=Object(C.h)().id,c=Object(g.useState)(0),i=Object(y.a)(c,2),d=i[0],l=i[1],j=Object(g.useState)([]),b=Object(y.a)(j,2),u=b[0],h=b[1],O=Object(g.useState)(""),p=Object(y.a)(O,2),m=p[0],x=p[1],f=Object(g.useState)(1),w=Object(y.a)(f,2),v=w[0],S=w[1],P=Object(g.useState)(!1),k=Object(y.a)(P,2),E=k[0],U=k[1],N=Object(g.useState)(250),_=Object(y.a)(N,2),L=_[0],q=_[1],G=new Promise((function(e,t){setTimeout((function(){e("foo")}),6e4/L)}));return Object(g.useEffect)((function(){T.a.get("".concat(t.find((function(e){return e.data.id===o})).data.url,".json")).then((function(e){S(e.data[1].data.children.length-1),e.data[1].data.children[1]&&h(e.data[1].data.children[1].data.body.split(" ")),console.log(e.data[1].data.children[1].data.body.split(" "))})).catch(console.error)}),[]),Object(g.useEffect)((function(){E&&d<u.length&&G.then((function(){x(u[d]),l((function(e){return e+1}))}))}),[u,d,E]),Object(I.jsx)(A,{windowHeight:r,children:Object(I.jsxs)(F,{children:[Object(I.jsx)(R,{children:Object(I.jsx)(K,{children:m})}),Object(I.jsxs)(B,{children:[Object(I.jsx)(J,{children:Object(I.jsxs)(X,{children:["Stories: ",v>0?"".concat(v):"0"]})}),Object(I.jsxs)(Q,{children:[Object(I.jsx)(Z,{children:Object(I.jsx)($.a,{})}),Object(I.jsx)(Y,{onClick:function(){U((function(e){return!e}))},children:E?Object(I.jsx)($.c,{}):Object(I.jsx)($.d,{})}),Object(I.jsx)(Z,{children:Object(I.jsx)($.b,{})})]}),Object(I.jsxs)(W,{children:[Object(I.jsx)(M,{type:"text",value:L,onChange:function(e){q(e.target.value)}}),Object(I.jsx)(V,{children:" wpm"})]})]})]})})},te=n(8),ne=n(17),ae=n(18),re=n(23),se=n(22),oe="https://aqueous-forest-64376.herokuapp.com",ce="http://localhost:4741",ie="localhost"===window.location.hostname?ce:oe,de=function(e){return T()({url:ie+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},le=n(9),je=n(27),be=function(e){Object(re.a)(n,e);var t=Object(se.a)(n);function n(e){var a;return Object(ne.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(te.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props.setUser;(t=a.state,T()({method:"POST",url:ie+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return de(a.state)})).then((function(e){return n(e.data.user)})).then((function(){a.setState({navigate:!0})})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),console.error(e)}))},a.state={email:"",password:"",passwordConfirmation:"",navigate:!1},a}return Object(ae.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return this.state.navigate?Object(I.jsx)(C.a,{to:"/"}):Object(I.jsx)("div",{className:"row",children:Object(I.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(I.jsx)("h3",{children:"Sign Up"}),Object(I.jsxs)(le.a,{onSubmit:this.onSignUp,children:[Object(I.jsxs)(le.a.Group,{controlId:"email",children:[Object(I.jsx)(le.a.Label,{children:"Email address"}),Object(I.jsx)(le.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(I.jsxs)(le.a.Group,{controlId:"password",children:[Object(I.jsx)(le.a.Label,{children:"Password"}),Object(I.jsx)(le.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(I.jsxs)(le.a.Group,{controlId:"passwordConfirmation",children:[Object(I.jsx)(le.a.Label,{children:"Password Confirmation"}),Object(I.jsx)(le.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(I.jsx)(je.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(g.Component),ue=function(e){Object(re.a)(n,e);var t=Object(se.a)(n);function n(e){var a;return Object(ne.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(te.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props.setUser;de(a.state).then((function(e){return t(e.data.user)})).then((function(){return a.setState({navigate:!0})})).catch((function(e){a.setState({email:"",password:""}),console.error(e)}))},a.state={email:"",password:"",navigate:!1},a}return Object(ae.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return this.state.navigate?Object(I.jsx)(C.a,{to:"/"}):Object(I.jsx)("div",{className:"row",children:Object(I.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(I.jsx)("h3",{children:"Sign In"}),Object(I.jsxs)(le.a,{onSubmit:this.onSignIn,children:[Object(I.jsxs)(le.a.Group,{controlId:"email",children:[Object(I.jsx)(le.a.Label,{children:"Email address"}),Object(I.jsx)(le.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(I.jsxs)(le.a.Group,{controlId:"password",children:[Object(I.jsx)(le.a.Label,{children:"Password"}),Object(I.jsx)(le.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(I.jsx)(je.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(g.Component),he=function(e){var t=e.clearUser,n=e.user,a=Object(g.useState)(!1),r=Object(y.a)(a,2),s=r[0],o=r[1];return Object(g.useEffect)((function(){!function(e){T()({url:ie+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})}(n),o(!0),t()}),[]),!n||s?Object(I.jsx)(C.a,{to:"/"}):""},Oe=function(e){Object(re.a)(n,e);var t=Object(se.a)(n);function n(e){var a;return Object(ne.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(te.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props.user;(function(e,t){return T()({url:ie+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,t).then((function(){return a.setState({navigate:!0})})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),console.error(e)}))},a.state={oldPassword:"",newPassword:"",navigate:!1},a}return Object(ae.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return this.state.navigate?Object(I.jsx)(C.a,{to:"/"}):Object(I.jsx)("div",{className:"row",children:Object(I.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(I.jsx)("h3",{children:"Change Password"}),Object(I.jsxs)(le.a,{onSubmit:this.onChangePassword,children:[Object(I.jsxs)(le.a.Group,{controlId:"oldPassword",children:[Object(I.jsx)(le.a.Label,{children:"Old password"}),Object(I.jsx)(le.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(I.jsxs)(le.a.Group,{controlId:"newPassword",children:[Object(I.jsx)(le.a.Label,{children:"New Password"}),Object(I.jsx)(le.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(I.jsx)(je.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(g.Component),pe=n(13),me=Object(pe.b)(),xe=function(e){var t=e.user,n=e.setUser,a=e.clearUser,r=e.posts,s=e.setPosts;return Object(I.jsxs)("main",{children:[Object(I.jsx)(U,{user:t}),Object(I.jsxs)(C.d,{history:me,children:[Object(I.jsx)(C.b,{path:"/sign-up",element:Object(I.jsx)(be,{setUser:n})}),Object(I.jsx)(C.b,{path:"/sign-in",element:Object(I.jsx)(ue,{setUser:n})}),Object(I.jsx)(C.b,{path:"/sign-out",element:Object(I.jsx)(he,{clearUser:a,user:t})}),Object(I.jsx)(C.b,{path:"/change-password",element:Object(I.jsx)(Oe,{user:t})}),Object(I.jsx)(C.b,{path:"/",element:Object(I.jsx)(D,{posts:r,setPosts:s})}),Object(I.jsx)(C.b,{path:"/story/:id",element:Object(I.jsx)(ee,{posts:r})})]})]})},fe=(n(78),function(){var e=Object(g.useState)(null),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(g.useState)([]),s=Object(y.a)(r,2),o=s[0],c=s[1];return Object(I.jsx)(g.Fragment,{children:Object(I.jsx)(xe,{user:n,setUser:a,clearUser:function(){a(null)},posts:o,setPosts:c})})}),ge=Object(I.jsx)(P.a,{basename:"/speedreader",children:Object(I.jsx)(fe,{})});v.a.render(ge,document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.1e7b2c83.chunk.js.map