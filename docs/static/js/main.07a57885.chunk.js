(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{23:function(e,a,t){e.exports=t(33)},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),i=t(5),s=t(6),o=t(8),m=t(7),d=t(21),u=t(1),p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={news:[]},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=5682fecfdda74345bdc321c058110de0").then((function(e){return e.json()})).then((function(a){e.setState({news:a.articles})}))}},{key:"render",value:function(){var e=this.state.news,a=e.length?e.map((function(e){return l.a.createElement("div",{className:"post card hoverable ",key:e.id},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.urlToImage,alt:""})),l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},e.title),l.a.createElement("p",{className:"trunca"},e.content)),l.a.createElement("div",{className:"card-action"},l.a.createElement("a",{href:e.url},"Read more....")))})):l.a.createElement("div",{className:"center"},l.a.createElement("h4",null,"Waiting for News......"));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col s8"},a))}}]),t}(n.Component),h=(t(28),t(20)),E=t.n(h),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#mobile-links");E.a.Sidenav.init(e,{})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"nav-wrapper red darken-3"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"/",className:"brand-logo"},"Latest News"),l.a.createElement("a",{href:"#",className:"sidenav-trigger","data-target":"mobile-links"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("ul",{className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{href:"/NewsUpload"},"News Upload")),l.a.createElement("li",null,l.a.createElement("a",{href:"/Login"},"Login")),l.a.createElement("li",null,l.a.createElement("a",{href:"/Readme"},"Read Me"))))),l.a.createElement("ul",{className:"sidenav ",id:"mobile-links"},l.a.createElement("li",null,l.a.createElement("a",{href:"/NewsUpload"},"News Upload")),l.a.createElement("li",null,l.a.createElement("a",{href:"/Login"},"Login")),l.a.createElement("li",null,l.a.createElement("a",{href:"/Readme"},"Read Me"))))}}]),t}(n.Component),v=t(11),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={name:"",email:"",password:""},e.handleSignUp=function(a){var t=a.target.name,n=a.target.value;e.setState(Object(v.a)({},t,n))},e.handleSubmit=function(a){var t=e.state,n=t.name,l=t.email,r=t.password;localStorage.setItem("email",l),localStorage.setItem("password",r),localStorage.setItem("name",n),alert("successful! please log in")},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"center"}," User Registration"),l.a.createElement("form",{action:"/Login",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{name:"name",onChange:this.handleSignUp,id:"name",type:"text",className:"validate"}),l.a.createElement("label",{for:"name"},"Name")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{name:"email",onChange:this.handleSignUp,id:"email",type:"email",className:"validate"}),l.a.createElement("label",{for:"email"},"Email")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{name:"password",onChange:this.handleSignUp,id:"Email",type:"password",className:"validate"}),l.a.createElement("label",{for:"password"},"password")),l.a.createElement("div",{className:"center"},l.a.createElement("button",{type:"submit",className:"btn red darken-3"},"Sign up"))))}}]),t}(n.Component),b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:""},e.handleLogin=function(a){var t=a.target.name,n=a.target.value;e.setState(Object(v.a)({},t,n))},e.handleSubmit=function(a){var t=e.state,n=t.email,l=t.password;localStorage.setItem("email",n),localStorage.setItem("password",l),alert("logged in")},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"center"}," User Login"),l.a.createElement("form",{action:"/",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{name:"email",type:"email",onChange:this.handleLogin,className:"validate"}),l.a.createElement("label",{for:"email"},"Email")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{name:"password",onChange:this.handleLogin,type:"password",className:"validate"}),l.a.createElement("label",{for:"password"},"password")),l.a.createElement("div",{className:"center"},l.a.createElement("button",{type:"submit",className:"btn red darken-3"},"Login"),l.a.createElement("p",{className:"flow-text center"}," No account?"),l.a.createElement("a",{href:"/Signup"},"Register"))))}}]),t}(n.Component),N=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={title:"",subject:"",category:"",body:"",author:"",urlToTheImage:"",date:""},e.handleUpload=function(a){var t=a.target.name,n=a.target.value;e.setState(Object(v.a)({},t,n)),console.log(e.state)},e.handleSubmit=function(a){var t=e.state,n=t.title,l=t.subject,r=t.category,c=t.body,i=t.author,s=t.urlToTheImage,o=t.date;localStorage.setItem("title",n),localStorage.setItem("subject",l),localStorage.setItem("category",r),localStorage.setItem("body",c),localStorage.setItem("author",i),localStorage.setItem("urlToTheImage",s),localStorage.setItem("date",o),alert("news Uploaded")},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"center"}," News Upload Form"),l.a.createElement("form",{action:"/",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{name:"title",onChange:this.handleUpload,id:"title",type:"text",className:"validate"}),l.a.createElement("label",{for:"title"},"Title")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{name:"subject",onChange:this.handleUpload,id:"subject",type:"text",className:"validate"}),l.a.createElement("label",{for:"subject"},"Subject")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{name:"category",onChange:this.handleUpload,id:"category",type:"text",className:"validate"}),l.a.createElement("label",{for:"category"},"Category")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("textarea",{name:"body",onChange:this.handleUpload,id:"textarea1",className:"materialize-textarea validate",type:"text"}),l.a.createElement("label",{for:"textarea1"},"Body")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{name:"author",onChange:this.handleUpload,id:"author",type:"text",className:"validate"}),l.a.createElement("label",{for:"author"},"Author")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{name:"urlToTheImage",onChange:this.handleUpload,id:"urlToTheImage",type:"text",className:"validate"}),l.a.createElement("label",{for:"url To The Image"},"Url To The Image")),l.a.createElement("div",{className:"input-field  col s6"},l.a.createElement("input",{name:"date",onChange:this.handleUpload,type:"text",className:""}),l.a.createElement("label",{for:"date"},"Date")),l.a.createElement("div",{className:"center"},l.a.createElement("button",{type:"submit",className:"btn red darken-3"},"Upload")))))}}]),t}(n.Component),y=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h4",{className:"center"},"Readme docummentation"),l.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate dolore et libero similique consequuntur quae? Ipsum quidem vero odit facere, voluptatum voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit nemo placeat quod molestias quasi dicta alias autem at. Dolores nobis deserunt, iste aut ut quaerat quod in quas accusamus? doloremque reprehenderit tempore sint. Repellendus, nulla provident."))},w=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(u.a,{path:"Singup",component:f}),l.a.createElement(g,null),l.a.createElement(u.a,{exact:!0,path:"/",component:p}),l.a.createElement(u.a,{path:"/Login",component:b}),l.a.createElement(u.a,{path:"/NewsUpload",component:N}),l.a.createElement(u.a,{path:"/Readme",component:y}),l.a.createElement(u.a,{path:"/Signup",component:f})))}}]),t}(n.Component);c.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.07a57885.chunk.js.map