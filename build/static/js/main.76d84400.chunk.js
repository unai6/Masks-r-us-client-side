(this["webpackJsonpclient-side"]=this["webpackJsonpclient-side"]||[]).push([[0],{37:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){e.exports=a(93)},48:function(e,t,a){},51:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(40),c=a.n(l),s=(a(48),a(5)),o=a(6),i=a(9),m=a(8),u=(a(49),a(50),a(25),a(51),a(16)),d=a(19),p=a.n(d),h=new(function(){function e(){Object(s.a)(this,e),this.auth=p.a.create({baseURL:"https://masks-r-us.herokuapp.com",withCredentials:!0})}return Object(o.a)(e,[{key:"signup",value:function(e){var t=e.email,a=e.password,n=e.shippingAddress;return this.auth.post("/auth/signup",{email:t,password:a,shippingAddress:n}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.email,a=e.password;return this.auth.post("/auth/login",{email:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"user",value:function(){return this.auth.get("/auth/user").then((function(e){return e.data}))}}]),e}()),E=a(14),g=a.n(E),b=r.a.createContext(),f=b.Consumer,v=b.Provider,N=function(e){return function(t){Object(i.a)(n,t);var a=Object(m.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(f,null,(function(a){var n=a.login,l=a.signup,c=a.user,s=a.logout,o=a.isLoggedin;return r.a.createElement(e,Object.assign({login:n,signup:l,user:c,logout:s,isLoggedin:o},t.props))}))}}]),n}(r.a.Component)},x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(t){var a=t.email,n=t.password,r=t.shippingAddress;h.signup({email:a,password:n,shippingAddress:r}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(e){return console.log(e)}))},e.login=function(t){var a=t.email,n=t.password;h.login({email:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(e){return console.log(e)}))},e.logout=function(){h.logout().then((function(){return e.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.user().then((function(t){console.log("AuthProvider did Mount"),e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,l=this.login,c=this.logout,s=this.signup;return t?r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},r.a.createElement(g.a,{type:"Puff",color:"#00E2E1",height:300,width:100}))):r.a.createElement(v,{value:{isLoggedin:a,user:n,login:l,logout:c,signup:s}},this.props.children)}}]),a}(r.a.Component),k=a(18),w=a(1),y=(a(36),a(37),N(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",confirmPassword:"",shippingAddress:"",errorMessage:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,r=a.password,l=a.confirmPassword,c=a.shippingAddress;""===n||""===r||""===l||""===c?(e.setState({errorMessage:"Fill the gaps"}),console.log(e.state.errorMessage)):e.props.signup({email:n,password:r,confirmPassword:l,shippingAddress:c})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(k.a)({},n,r))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.confirmPassword,l=e.shippingAddress;return r.a.createElement("div",{className:"signup-div background-image-signup"},r.a.createElement("h1",{className:" signup-h1 p-2"},"Sign Up"),r.a.createElement("p",{className:"signup-p"},r.a.createElement("b",null,"Already have account?")),r.a.createElement(w.b,{to:"/login"},r.a.createElement("b",null,r.a.createElement("p",{className:"linkToLogin-signup"},"Login"))," "),r.a.createElement("form",{className:"form-container form-group col-sm-12 d-table p-5",onSubmit:this.handleFormSubmit},this.state.errorMessage?r.a.createElement("p",null,this.state.errorMessage):null,r.a.createElement("input",{className:"form-control mb-3",id:"formGroupExampleInput",type:"email",name:"email",value:t,onChange:this.handleChange,placeholder:" Email @"}),r.a.createElement("input",{className:"form-control mb-3",id:"formGroupExampleInput2",type:"password",name:"password",value:a,onChange:this.handleChange,placeholder:"Password"}),r.a.createElement("input",{className:"form-control mb-3",id:"formGroupExampleInput3",type:"password",name:"confirmPassword",value:n,onChange:this.handleChange,placeholder:"Confirm password"}),r.a.createElement("input",{className:"form-control",id:"formGroupExampleInput4",type:"text",name:"shippingAddress",value:l,onChange:this.handleChange,placeholder:"Shipping Address"}),r.a.createElement("input",{className:"btn btn-block text-uppercase text-light bg-dark  mt-3 mb-3",type:"submit",value:"Signup"})))}}]),a}(r.a.Component))),j=N(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,r=a.password;e.props.login({email:n,password:r}),e.props.history.push("/user")},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(k.a)({},n,r))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"signup-div background-image-login"},r.a.createElement("h1",{className:" signup-h1 p-2"},"Login"),r.a.createElement("p",{className:"signup-p"},r.a.createElement("b",null,"Don't have an account?")),r.a.createElement(w.b,{to:"/signup"},r.a.createElement("b",null,r.a.createElement("p",{className:"linkToLogin-signup"},"Sign Up"))),r.a.createElement("form",{className:"form-container form-group col-sm-12 d-table p-5",onSubmit:this.handleFormSubmit},r.a.createElement("input",{className:"form-control mb-3",id:"formGroupExampleInput",type:"email",name:"email",placeholder:"Email @",value:t,onChange:this.handleChange}),r.a.createElement("input",{className:"form-control",id:"formGroupExampleInput2",type:"password",name:"password",placeholder:"Password",value:a,onChange:this.handleChange}),r.a.createElement("input",{className:"btn btn-block text-uppercase text-light bg-dark  mt-3 mb-3",type:"submit",value:"Login"})))}}]),a}(n.Component)),O=(a(39),N(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:e.props.email,shippingAddress:e.props.shippingAddress},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"background-color"},r.a.createElement("div",{className:"col-sm-12 my-auto"},r.a.createElement("div",{className:"col-sm-12 h-100 d-table"},r.a.createElement("div",{className:"card-container col-md-12 text-center card card-block ",style:{height:"40vh"}},r.a.createElement("form",{className:"form-group col-sm-12 d-table"},r.a.createElement("div",null,r.a.createElement("p",null," Hi, ",r.a.createElement("b",null,this.props.user.email)),r.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",value:this.props.user.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput2",value:this.props.user.shippingAddress})),r.a.createElement(w.b,{to:"/user/".concat(this.props.user._id,"/edit-profile")}," ",r.a.createElement("button",{type:"button",className:"btn btn-block text-uppercase text-light bg-dark  mt-3 mb-3"},"Edit Profile")),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-block  text-uppercase btn-danger text-light\r ",onClick:this.props.logout},"Log out"))))),r.a.createElement("div",{className:" col-md-4 text-center",role:"group","aria-label":"Basic example"}),r.a.createElement("div",{class:"col-md-4 text-center"}))}}]),a}(n.Component))),C=a(4),S=new(function(){function e(){Object(s.a)(this,e),this.auth=p.a.create({baseURL:"https://masks-r-us.herokuapp.com",withCredentials:!0})}return Object(o.a)(e,[{key:"get_wishlist",value:function(e){return this.auth.get("/user/wishlistid/".concat(e.user._id))}},{key:"get_wishlist_pop",value:function(e){return this.auth.get("/user/wishlist/".concat(e.user._id))}},{key:"get_cartlist",value:function(e){return this.auth.get("user/cart/".concat(e.user._id))}},{key:"add_to_cart",value:function(e){return this.auth.post("products/addtocart/".concat(e))}},{key:"delete_from_cart",value:function(e){return this.auth.delete("products/deletefromcart/".concat(e))}},{key:"removeFromWishlist",value:function(e){return this.auth.post("/products/removefromwishlist/".concat(e))}},{key:"addToWishlist",value:function(e){return this.auth.post("/products/addtowishlist/".concat(e))}},{key:"get_products",value:function(){return this.auth.get("/products")}},{key:"get_product_id",value:function(e){return this.auth.get("/products/".concat(e))}},{key:"edit_profile",value:function(e,t,a,n){return this.auth.post("/auth/user/".concat(e,"/edit-profile"),{email:t,password:a,shippingAddress:n})}},{key:"updateQuantity",value:function(e,t){return this.auth.post("/products/addtocart/".concat(e),{quantity:t})}}]),e}()),P=N((function(e){var t=Object(n.useState)(!0),a=Object(C.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)([]),o=Object(C.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)(""),d=Object(C.a)(u,2),p=d[0],h=d[1],E=Object(n.useState)([]),b=Object(C.a)(E,2),f=b[0],v=b[1];Object(n.useEffect)((function(){S.get_products().then((function(e){console.log(typeof e),e.data.length&&(console.log("Algo"+e),m(e.data))})),e.user&&S.get_wishlist(e).then((function(e){v(e.data)})),c(!1)}),[]);var N=i.filter((function(e){return e.name.toLocaleLowerCase().includes(p.toLocaleLowerCase())}));return N.map((function(e){f.includes(e._id)?e.inWishList=!0:e.inWishList=!1})),r.a.createElement("div",null,l?r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},r.a.createElement(g.a,{type:"Puff",color:"#00E2E1",height:300,width:100}))):r.a.createElement("div",{className:"my-5 my-auto w-100 d-inline-block"},r.a.createElement("form",{className:""},r.a.createElement("input",{type:"text",className:"input-group searchproduct-form form-control border",placeholder:"Search for...",value:p,onChange:function(e){return h(e.target.value)},name:"query"})),N?N.map((function(e){return r.a.createElement(w.b,{to:"/products/".concat(e._id),className:"card-text-link"},r.a.createElement("div",{key:e._id,className:"card border-info mb-1 shadow"},r.a.createElement("div",{className:"d-flex card-body"},r.a.createElement("span",{className:"align-self-center"},r.a.createElement("img",{className:"list-img",src:e.photo,alt:""}),e.actualPrice?r.a.createElement("div",{className:"text-center"},r.a.createElement("strike",{className:"text-danger"},e.originalPrice," \u20ac"),r.a.createElement("div",{className:"badge badge-dark turquoise-color"},e.actualPrice," \u20ac")):r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,e.originalPrice," \u20ac"))),r.a.createElement("div",null,r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"text-left turquoise-color ml-2"},e.name),r.a.createElement("span",{className:"float-right"},e.inWishList?r.a.createElement("i",{className:"fa fa-heart turquoise-color","aria-hidden":"true"}):r.a.createElement("i",{className:"fa fa-heart-o turquoise-color","aria-hidden":"true"}))),r.a.createElement("p",{className:"card-text"},e.description)))))})):null))})),A=a(20);var L=N((function(e){var t=e.component,a=e.isLoggedin,n=Object(A.a)(e,["component","isLoggedin"]);return r.a.createElement(u.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(u.a,{to:"/user"}):r.a.createElement(t,e)}}))}));var _=N((function(e){var t=e.component,a=e.isLoggedin,n=Object(A.a)(e,["component","isLoggedin"]);return r.a.createElement(u.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/login"})}}))})),q=N((function(e){var t=Object(n.useState)([]),a=Object(C.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){S.get_wishlist_pop(e).then((function(e){c(e.data),console.log(e.data)}))}),[]),console.log(l),r.a.createElement("div",null,r.a.createElement("section",{className:"wishtitle jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"jumbotron-heading"},"Your Wishlist"))),r.a.createElement("div",{class:"card-group"},l?l.map((function(e){return r.a.createElement(w.b,{to:"/products/".concat(e._id),className:"card-text-link"},r.a.createElement("div",{class:"card"},r.a.createElement("img",{src:e.photo,class:"card-img-top",alt:"..."}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h3",{class:"card-title turquoise-color"},e.name),r.a.createElement("p",{class:"card-text"},e.description),r.a.createElement("p",{class:"card-text"},r.a.createElement("h3",{class:"text-muted"},e.originalPrice," \u20ac")))))})):"No Items on your wishlist"))})),M=a(11),I=a.n(M),F=a(15),D=N((function(e){var t=Object(n.useState)([]),a=Object(C.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(!0),o=Object(C.a)(s,2),i=o[0],m=o[1];Object(n.useEffect)((function(){S.get_cartlist(e).then((function(e){c(e.data)}))}),[i]);var u=function(){for(var e=0,t=0;t<l.length;t++)e+=Number(l[t].productId.originalPrice*l[t].quantity);return e.toFixed(2)},d=function(){var e=Object(F.a)(I.a.mark((function e(t,a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.updateQuantity(a,t.target.value);case 2:m(!i);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("section",{className:"wishtitle jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"jumbotron-heading"},"Your Shopping Cart"))),r.a.createElement("div",{className:"container mb-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}," "),r.a.createElement("th",{scope:"col"},"Product"),r.a.createElement("th",{scope:"col"},"Available"),r.a.createElement("th",{scope:"col",className:"text-center"},"Quantity"),r.a.createElement("th",{scope:"col",className:"text-right"},"Price"),r.a.createElement("th",{scope:"col",className:"text-right"},"Total"),r.a.createElement("th",null," "))),l.map((function(e){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{style:{height:"40px"},src:e.productId.photo,alt:""})),r.a.createElement("td",null,e.productId.name),r.a.createElement("td",null,"Stock:",e.stock),r.a.createElement("td",null,r.a.createElement("input",{onChange:function(t){return d(t,e.productId._id)},className:"form-control",type:"number",defaultValue:e.quantity})),r.a.createElement("td",{className:"text-right"},e.productId.originalPrice," \u20ac"),r.a.createElement("td",{className:"text-right"},(e.productId.originalPrice*e.quantity*1).toFixed(2),"\u20ac"),r.a.createElement("td",{className:"text-right"},r.a.createElement("button",{onClick:function(){return t=e.productId._id,void S.delete_from_cart(t).then((function(e){m(!i)}));var t},className:"btn btn-sm btn-danger"},r.a.createElement("i",{className:"fa fa-trash"})))))})),r.a.createElement("tr",null,r.a.createElement("td",null," Subtotal:"),r.a.createElement("td",{className:"text-right"}," ",u(),"\u20ac")),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,"Shipping"),r.a.createElement("td",{className:"text-right"},"6.90 \u20ac")),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("strong",null,"Total: ")),r.a.createElement("td",{className:"text-right"},r.a.createElement("strong",null,Number(1*u()+6.9).toFixed(2),"\u20ac")))),r.a.createElement("div",{className:"col mb-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6 text-right"},r.a.createElement("button",{className:"btn btn-lg btn-block  text-uppercase turquoise-bg text-light"},"Checkout")),r.a.createElement("div",{className:"col-sm-12  col-md-6"},r.a.createElement(w.b,{to:"/products",className:"btn  btn-block  text-uppercase btn-outline-warning mt-3"},"Continue Shopping"))))))))))}));var R=function(){var e=Object(n.useState)(!0),t=Object(C.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(C.a)(c,2),o=s[0],i=s[1];Object(n.useEffect)((function(){function e(){return(e=Object(F.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get_products().then((function(e){e.data.length&&i(e.data)}));case 2:l(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var m=o.map((function(e){return e}));return console.log(m),r.a.createElement("div",null,a?r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},r.a.createElement(g.a,{type:"Puff",color:"#00E2E1",height:300,width:100}))):r.a.createElement("div",null,r.a.createElement("div",{className:"text-dark turquoise-bg h-25 text-center"},r.a.createElement("b",null,"CoVid-19:"),r.a.createElement("br",null),"Please use only face masks tagged as ",r.a.createElement("u",null,r.a.createElement("b",null,"medical"))),r.a.createElement("br",null),r.a.createElement(w.b,{to:"/products"},r.a.createElement("h4",{style:{textAlign:"center"}},"Featured Products")),r.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide d-flex","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block w-100 ",src:"https://ae01.alicdn.com/kf/Hc32e6c42971a45609dcf8cd083ba3b404/7pcs-Organic-Vapor-Full-Face-Respirator-Mask-Gas-Mask-Paint-Pesticide-Chemical-Formaldehyde-Anti-Virus-Respiratory.jpg",alt:"First slide"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement(w.b,{to:"products"},r.a.createElement("h5",{className:"carousel-R-text"},"Mask 9600"),r.a.createElement("br",null)),r.a.createElement("b",null,r.a.createElement("span",{style:{fontSize:"16px",backgroundColor:"white",borderRadius:"8px"}},"7.60\u20ac")))),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100 ",src:"https://ae01.alicdn.com/kf/H1e8b1309bf3b418ba9d3eb366fbdec159/3600-Half-Face-Gas-Mask-Particulate-Respirator-with-Filter-Cartridge-Protective-Mask-Personal-Protective-Equippment-dust.jpg",alt:"Second slide"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement(w.b,{to:"products"},r.a.createElement("h5",{className:"carousel-R-text"},"Mask 3600"),r.a.createElement("br",null)),r.a.createElement("b",null,r.a.createElement("span",{style:{fontSize:"16px",backgroundColor:"white",borderRadius:"8px"}},"17.50\u20ac")))),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100 ",src:"https://ae01.alicdn.com/kf/He989394f739048868b399f8ef130ef281/Star-War-Darth-Vader-Mask-The-Black-Series-Cosplay-Adult-Helmet-Premium-PVC-Helmet-Prop-for.jpg",alt:"Third slide"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement(w.b,{to:"products"},r.a.createElement("h5",{className:"carousel-R-text"},"Luke's Dad"),r.a.createElement("br",null)),r.a.createElement("b",null,r.a.createElement("span",{style:{fontSize:"16px",backgroundColor:"white",borderRadius:"8px"}},"6.50\u20ac"))))),r.a.createElement("a",{className:"carousel-control-prev ",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only "},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))),r.a.createElement("div",{className:"text-dark bg-warning h-50 text-center"},r.a.createElement("b",null,r.a.createElement("h3",null,"TOP Offers")),"Only for the next 24 hours",r.a.createElement("u",null,r.a.createElement("b",null," Check it!"))),r.a.createElement("div",{id:"secondCarousel",className:"carousel slide d-flex","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#secondCarousel","data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#secondCarousel","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#secondCarousel","data-slide-to":"2"})),r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block w-100 ",src:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRpM-aWUFaCYMx4xrlQOHPbOq8kuzFBANRMevj3G1bN05fkDZYGPE3LTpk2HAfgwgg6D5aKv4OiLjsTjpuPmj78HNmlyuejkBhPJ86yS1z7IvQBRVYCiK1V&usqp=CAE",alt:"First slide"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement(w.b,{to:"products"},r.a.createElement("h5",{className:"carousel-R-text"},"MaskChin 4500"),r.a.createElement("br",null)),r.a.createElement("b",null,r.a.createElement("span",{className:"text-success",style:{fontSize:"16px",backgroundColor:"white",borderRadius:"8px"}},"2.50\u20ac"))," ",r.a.createElement("b",null,r.a.createElement("strike",{className:"text-danger"}," 4.50\u20ac")))),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100 ",src:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTd8PVAHcpjx4_QXIcskbauh683D0jUbb3ZANsBLNGT3ijkgeVhzaga465lrnRDH8UnBOAEZs9Ug83EU2QZxk3GtgIiEXBedANStHd-Da3k481zllbow1uh&usqp=CAE",alt:"Second slide"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement(w.b,{to:"products"}," ",r.a.createElement("h5",{className:"carousel-R-text"},"Antidusty"),r.a.createElement("br",null)),r.a.createElement("b",null,r.a.createElement("span",{className:"text-success",style:{fontSize:"16px",backgroundColor:"white",borderRadius:"8px"}}," 4.70\u20ac")),r.a.createElement("b",null,r.a.createElement("strike",{className:"text-danger"}," 9.50\u20ac")))),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100 ",src:"https://ae01.alicdn.com/kf/H2ae29a535056477f985635b3ce36ff304/Unsex-Masks-Antidust-Mouth-Face-Mask-Muzzle-Pm2-5-Antibacterial-Outdoor-Trip-Protection-Mouth-Mask-Mascarillas.jpg",alt:"Third slide"}),r.a.createElement("div",{className:"carousel-caption"},r.a.createElement(w.b,{to:"products"},r.a.createElement("h5",{className:"carousel-R-text"},"MaskDust"),r.a.createElement("br",null)),r.a.createElement("b",null,r.a.createElement("span",{className:"text-success",style:{fontSize:"16px",backgroundColor:"white",borderRadius:"8px"}},"12.50\u20ac "))," ",r.a.createElement("b",null,r.a.createElement("strike",{className:"text-danger"}," 24.50\u20ac"))))),r.a.createElement("a",{className:"carousel-control-prev ",href:"#secondCarousel",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only "},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#secondCarousel",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))))},T=N((function(e){var t=Object(n.useState)(!0),a=Object(C.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)({}),o=Object(C.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)(!1),d=Object(C.a)(u,2),p=d[0],h=d[1],E=Object(n.useState)(!1),b=Object(C.a)(E,2),f=b[0],v=b[1];function N(){f?S.removeFromWishlist(e.match.params.id):S.addToWishlist(e.match.params.id),v(!f)}function x(){p?S.delete_from_cart(e.match.params.id):S.add_to_cart(e.match.params.id),h(!p)}return Object(n.useEffect)((function(){function t(){return(t=Object(F.a)(I.a.mark((function t(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.get_product_id(e.match.params.id).then((function(e){console.log(e.data),m(e.data)}));case 2:if(!e.user){t.next=7;break}return t.next=5,S.get_wishlist(e).then((function(t){t.data.includes(e.match.params.id)?v(!0):v(!1)}));case 5:return t.next=7,S.get_cartlist(e).then((function(t){var a=t.data.map((function(e){return e.productId._id}));console.log(a),console.log(e.match.params.id),a.includes(e.match.params.id)?h(!0):h(!1)}));case 7:c(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r.a.createElement("div",null,l?r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},r.a.createElement(g.a,{type:"Puff",color:"#00E2E1",height:300,width:100}))):r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"turquoise-color my-1"},i.name),r.a.createElement("h2",null,"by ",i.brand),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("img",{className:"img-fluid",src:i.photo,alt:""})),r.a.createElement("div",{className:"col-md-4"},e.user?r.a.createElement("div",{className:"my-3 float-right turquoise-color"},f?r.a.createElement("button",{onClick:N,class:"badge badge-dark heart-button "},"In your wishlist"," ",r.a.createElement("i",{class:"turquoise-color fa fa-heart ","aria-hidden":"true"})):r.a.createElement("button",{onClick:N,class:"badge badge-dark heart-button "},"Add it to your wishlist"," ",r.a.createElement("i",{class:"turquoise-color fa fa-heart-o","aria-hidden":"true"}))):r.a.createElement("div",{class:"my-3 float-right badge badge-dark"},r.a.createElement("i",{class:"turquoise-color fa fa-heart-o","aria-hidden":"true"})," ","You need to ",r.a.createElement("a",{href:"/login"},"login")," to add products to your wishlist."),r.a.createElement("h3",{className:"my-3"},"Product Description"),r.a.createElement("p",null,i.description),r.a.createElement("h3",{className:"my-3"},"Product Details"),r.a.createElement("ul",null,r.a.createElement("li",null,"Material: ",i.material),r.a.createElement("li",null,"Size: ",i.size),r.a.createElement("li",null,"Color: ",i.color),r.a.createElement("li",null,"Stock: ",i.stock),r.a.createElement("li",null,"Shipping Time: ",i.shippingTime)))),i.actualPrice?r.a.createElement("div",null,r.a.createElement("strike",{className:"text-danger"},r.a.createElement("h1",{className:"text-dark d-flex justify-content-center bold"},"Price:\xa0 ",i.originalPrice," \u20ac")),r.a.createElement("h1",{className:"text-dark d-flex justify-content-center bold"},"Offer Price:\xa0 ",i.actualPrice," \u20ac")):r.a.createElement("div",null,r.a.createElement("h1",{className:"text-dark d-flex justify-content-center bold"},"Price: ",i.originalPrice," \u20ac")),r.a.createElement("div",null,p?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{onClick:x,type:"button",className:"btn btn-danger btn-lg btn-block mb-4"},r.a.createElement("i",{class:"text-light fas fa-trash-alt","aria-hidden":"true"}))),r.a.createElement("div",{className:"col-9"},r.a.createElement("a",{href:"/cart"},r.a.createElement("button",{className:"btn btn-dark btn-lg turquoise-color btn-block mb-4"},r.a.createElement("i",{class:"text-dark fa turquoise-color fa-shopping-cart","aria-hidden":"true"}),"\xa0 To your Cart")))):r.a.createElement("button",{onClick:x,type:"button",class:"btn turquoise-bg btn-lg btn-block dark-text mb-4"},r.a.createElement("i",{class:"turquoise-bg dark-text fa fa-shopping-cart mr-3","aria-hidden":"true"}),"Add to Cart"))))})),G=N((function(e){return console.log(e.user),r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{class:"navbar-brand",href:"/"},r.a.createElement("img",{src:"IronHack.png",alt:""})),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("b",null,r.a.createElement("a",{class:"nav-link",style:{color:"white"},href:"/products"},"Our Masks ",r.a.createElement("span",{class:"sr-only"},"(current)")))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"/cart"},r.a.createElement("button",{type:"button",class:"btn btn-warning"},r.a.createElement("span",null,"Shopping Cart \ud83d\uded2")))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"/wishlist"},r.a.createElement("button",{type:"button",class:"btn btn-outline-warning"},"Your Wishlist \u2661"))),e.user?r.a.createElement("div",null,r.a.createElement("li",{class:"nav-item dropdown"},r.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Welcome ",e.user.email),r.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement("a",{class:"dropdown-item",href:"/cart"},"Shopping Cart"),r.a.createElement("a",{class:"dropdown-item",href:"/wishlist"},"Wishlist"),r.a.createElement("a",{class:"dropdown-item",href:"/user"},"Your profile")))):r.a.createElement("div",null,r.a.createElement("li",{class:"nav-item dropdown"},r.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Your Account"),r.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement("a",{class:"dropdown-item",href:"/login"},"Log in"),r.a.createElement("a",{class:"dropdown-item",href:"/signup"},"Sign up"))))))))})),H=N(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(){var e=Object(F.a)(I.a.mark((function e(t){var a,r,l,c,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=n.state,r=a.email,l=a.password,c=a.shippingAddress,s=n.props.user._id,S.edit_profile(s,r,l,c).then((function(e){n.setState({infoSent:!0})})),console.log(l),console.log(c),console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(k.a)({},a,r))},console.log(e),n.state={},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.shippingAddress,l=t.password;return r.a.createElement("div",{className:"background-color"},r.a.createElement("div",{className:"col-sm-12 my-auto"},r.a.createElement("div",{className:"col-sm-12 h-100 d-table"},r.a.createElement("div",{className:"card-container col-md-4 text-center card card-block ",style:{height:"60vh"}},r.a.createElement("form",{className:"form-group col-sm-12 d-table",onSubmit:this.handleFormSubmit},r.a.createElement("div",null,r.a.createElement("p",null," Hi, ",r.a.createElement("b",null,this.props.user.email)),r.a.createElement("input",{type:"text",className:"form-control mb-3",id:"formGroupExampleInput",placeholder:"E-mail @",name:"email",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"password",className:"form-control mb-3",id:"formGroupExampleInput2",placeholder:"New Password",name:"password",value:l,onChange:this.handleChange}),r.a.createElement("input",{type:"text",className:"form-control mb-3",id:"formGroupExampleInput2",placeholder:"Shipping Address",name:"shippingAddress",value:n,onChange:this.handleChange})),this.state.infoSent?r.a.createElement("button",{onClick:function(){return e.props.history.push("/user")}}," Back to Profile "):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-block text-uppercase text-light bg-dark  mt-4",type:"submit",value:"Submit"},"Submit"),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-block  text-uppercase btn-danger text-light",onClick:this.props.logout},"Log out")))))),r.a.createElement("div",{className:" col-md-4 text-center",role:"group","aria-label":"Basic example"}),r.a.createElement("div",{className:"col-md-4 text-center"}))}}]),a}(r.a.Component)),W=function(){return r.a.createElement("div",{className:"container-fluid px-0"},r.a.createElement("div",{className:"bg-dark row"},r.a.createElement("div",{className:"col-6 text-light px-2 pt-1"},r.a.createElement("h5",{className:"text-center text-light d-block"},"Our Store"),r.a.createElement("hr",{className:"bg-light text-light mb-2 mt-0 d-block mx-auto w-25"}),r.a.createElement("ul",{className:"list-unstyled text-center d-block text-light"},r.a.createElement("li",{className:"turquoise-color footer-text"},"About us"),r.a.createElement("li",{className:"turquoise-color footer-text"},"FAQ"),r.a.createElement("li",{className:"turquoise-color footer-text"},"Shipping"),r.a.createElement("a",{href:"https://www.bbc.com/news/coronavirus"},r.a.createElement("li",{className:"turquoise-color footer-text"},"Covid News")))),r.a.createElement("div",{className:"col-6 text-light px-2 pt-1"},r.a.createElement("h5",{className:"text-center text-light d-block"},"Contact"),r.a.createElement("hr",{className:"bg-light text-light mb-2 mt-0 d-block mx-auto w-25"}),r.a.createElement("ul",{className:"list-unstyled text-light text-left d-block"},r.a.createElement("li",{className:"text-light turquoise-color footer-text"},r.a.createElement("i",{className:"fa fa-home turquoise-color mr-2"})," Mask 'R' us"),r.a.createElement("li",{className:"turquoise-color footer-text"},r.a.createElement("i",{className:"fa turquoise-color fa-envelope mr-2"}),"hi@masksrus.com"),r.a.createElement("li",{className:"turquoise-color footer-text"},r.a.createElement("i",{className:"fa turquoise-color fa-phone mr-2"})," + 93 230 02 21"),r.a.createElement("li",{className:"turquoise-color footer-text"},r.a.createElement("i",{className:"fa turquoise-color fa-print mr-2"})," + 669 12 12 43"))),r.a.createElement("div",{className:"bg-dark turquoise-color text-center footer-text m-3"},"Here you will find the best customer service Ever. Trust us and you will not regret it.")))},z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement("div",{className:"container px-0"},r.a.createElement(G,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:R}),r.a.createElement(L,{exact:!0,path:"/signup",component:y}),r.a.createElement(u.b,{exact:!0,path:"/products",component:P}),r.a.createElement(L,{exact:!0,path:"/login",component:j}),r.a.createElement(_,{exact:!0,path:"/user",component:O}),r.a.createElement(_,{path:"/user/:id/edit-profile",component:H}),r.a.createElement(_,{exact:!0,path:"/wishlist",component:q}),r.a.createElement(_,{exact:!0,path:"/cart",component:D}),r.a.createElement(u.b,{exact:!0,path:"/products/:id",component:T})),r.a.createElement(W,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w.a,null,r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.76d84400.chunk.js.map