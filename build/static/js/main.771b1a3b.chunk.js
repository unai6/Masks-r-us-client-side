(this["webpackJsonpclient-side"]=this["webpackJsonpclient-side"]||[]).push([[0],{35:function(e,a,t){},37:function(e,a,t){},41:function(e,a,t){e.exports=t(90)},46:function(e,a,t){},49:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(38),c=t.n(r),s=(t(46),t(4)),o=t(5),i=t(9),m=t(8),u=(t(47),t(48),t(23),t(49),t(13)),d=t(16),p=t.n(d),h=new(function(){function e(){Object(s.a)(this,e),this.auth=p.a.create({baseURL:"https://masks-r-us.herokuapp.com",withCredentials:!0})}return Object(o.a)(e,[{key:"signup",value:function(e){var a=e.email,t=e.password,n=e.shippingAddress;return this.auth.post("/auth/signup",{email:a,password:t,shippingAddress:n}).then((function(e){return e.data}))}},{key:"login",value:function(e){var a=e.email,t=e.password;return this.auth.post("/auth/login",{email:a,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"user",value:function(){return this.auth.get("/auth/user").then((function(e){return e.data}))}},{key:"editProfile",value:function(){return this.auth.post("/auth/user/".concat(this.props.user._id,"/edit-profile")).then((function(e){return e.data}))}}]),e}()),g=t(17),E=t.n(g),b=l.a.createContext(),f=b.Consumer,v=b.Provider,N=function(e){return function(a){Object(i.a)(n,a);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var a=this;return l.a.createElement(f,null,(function(t){var n=t.login,r=t.signup,c=t.user,s=t.logout,o=t.isLoggedin;return l.a.createElement(e,Object.assign({login:n,signup:r,user:c,logout:s,isLoggedin:o},a.props))}))}}]),n}(l.a.Component)},w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(a){var t=a.email,n=a.password,l=a.shippingAddress;h.signup({email:t,password:n,shippingAddress:l}).then((function(a){return e.setState({isLoggedin:!0,user:a})})).catch((function(e){return console.log(e)}))},e.login=function(a){var t=a.email,n=a.password;h.login({email:t,password:n}).then((function(a){return e.setState({isLoggedin:!0,user:a})})).catch((function(e){return console.log(e)}))},e.logout=function(){h.logout().then((function(){return e.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.user().then((function(a){console.log("AuthProvider did Mount"),e.setState({isLoggedin:!0,user:a,isLoading:!1})})).catch((function(a){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.isLoggedin,n=e.user,r=this.login,c=this.logout,s=this.signup;return a?l.a.createElement("div",null,l.a.createElement(E.a,{type:"Puff",color:"#00BFFF",height:100,width:100})):l.a.createElement(v,{value:{isLoggedin:t,user:n,login:r,logout:c,signup:s}},this.props.children)}}]),t}(l.a.Component),y=t(15),k=t(2),x=(t(34),t(35),N(function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:"",confirmPassword:"",shippingAddress:"",errorMessage:""},e.handleFormSubmit=function(a){a.preventDefault();var t=e.state,n=t.email,l=t.password,r=t.confirmPassword,c=t.shippingAddress;""===n||""===l||""===r||""===c?(e.setState({errorMessage:"Fill the gaps"}),console.log(e.state.errorMessage)):e.props.signup({email:n,password:l,confirmPassword:r,shippingAddress:c})},e.handleChange=function(a){var t=a.target,n=t.name,l=t.value;e.setState(Object(y.a)({},n,l))},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.confirmPassword,r=e.shippingAddress;return l.a.createElement("div",{className:"signup-div background-image-signup"},l.a.createElement("h1",{className:" signup-h1"},"Sign Up"),l.a.createElement("form",{className:"form-container",onSubmit:this.handleFormSubmit},this.state.errorMessage?l.a.createElement("p",null,this.state.errorMessage):null,l.a.createElement("input",{className:"inputs-signup",type:"email",name:"email",value:a,onChange:this.handleChange,placeholder:" Email @"}),l.a.createElement("input",{className:"inputs-signup",type:"password",name:"password",value:t,onChange:this.handleChange,placeholder:"Password"}),l.a.createElement("input",{className:"inputs-signup",type:"password",name:"confirmPassword",value:n,onChange:this.handleChange,placeholder:"Confirm password"}),l.a.createElement("input",{className:"inputs-signup",type:"text",name:"shippingAddress",value:r,onChange:this.handleChange,placeholder:"Shipping Address"}),l.a.createElement("input",{className:"submit-btn-signup",type:"submit",value:"Signup"})),l.a.createElement("p",{className:"signup-p"},"Already have account?"),l.a.createElement(k.b,{className:"linkToLogin-signup",to:"/login"}," Login"))}}]),t}(l.a.Component))),j=N(function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:""},e.handleFormSubmit=function(a){a.preventDefault();var t=e.state,n=t.email,l=t.password;e.props.login({email:n,password:l}),e.props.history.push("/user")},e.handleChange=function(a){var t=a.target,n=t.name,l=t.value;e.setState(Object(y.a)({},n,l))},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return l.a.createElement("div",{className:"signup-div background-image-login"},l.a.createElement("h1",{className:" signup-h1"},"Login"),l.a.createElement("form",{className:"form-container",onSubmit:this.handleFormSubmit},l.a.createElement("input",{className:"input-email-login",type:"email",name:"email",placeholder:"Email @",value:a,onChange:this.handleChange}),l.a.createElement("input",{className:"inputs-signup",type:"password",name:"password",placeholder:"Password",value:t,onChange:this.handleChange}),l.a.createElement("input",{className:"submit-btn-signup",type:"submit",value:"Login"})),l.a.createElement("p",{className:"signup-p"},"Don't have an account??"),l.a.createElement(k.b,{className:"linkToLogin-login",to:"/signup"}," Signup"))}}]),t}(n.Component)),O=(t(37),N(function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"background-color row h-100"},l.a.createElement("div",{className:"col-sm-12 my-auto"},l.a.createElement("div",{className:"col-sm-12 h-100 d-table"},l.a.createElement("div",{className:"card-container col-md-4 text-center card card-block ",style:{height:"60vh"}},l.a.createElement("img",{className:"card-img-top",src:"/images/pathToYourImage.png",alt:"Card image cap"}),l.a.createElement("form",{className:"form-group col-sm-12 d-table"},l.a.createElement("div",null,l.a.createElement("p",null," Hi, ",l.a.createElement("b",null,this.props.user.email)),l.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"E-mail @"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput2",placeholder:"Shipping Address"})))))),l.a.createElement("div",{className:" col-md-4 text-center",role:"group","aria-label":"Basic example"},l.a.createElement(k.b,{to:"/user/".concat(this.props.user._id,"/edit-profile")}," ",l.a.createElement("button",{type:"button",className:"btn btn-primary"},"Edit Profile")),l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.props.logout},"Log out")),l.a.createElement("div",{class:"col-md-4 text-center"},l.a.createElement(k.b,{to:"/"}," ",l.a.createElement("button",{id:"singlebutton",name:"singlebutton",class:"btn btn-primary"},"Home"))))}}]),t}(n.Component))),C=t(6),S=new(function(){function e(){Object(s.a)(this,e),this.auth=p.a.create({baseURL:"https://masks-r-us.herokuapp.com",withCredentials:!0})}return Object(o.a)(e,[{key:"get_wishlist",value:function(e){return this.auth.get("/user/wishlistid/".concat(e.user._id))}},{key:"get_wishlist_pop",value:function(e){return this.auth.get("/user/wishlist/".concat(e.user._id))}},{key:"get_cartlist",value:function(e){return this.auth.get("user/cart/".concat(e.user._id))}},{key:"delete_from_cart",value:function(e){return this.auth.delete("products/deletefromcart/".concat(e))}},{key:"removeFromWishlist",value:function(e){return this.auth.post("/products/removefromwishlist/".concat(e))}},{key:"addToWishlist",value:function(e){return this.auth.post("/products/addtowishlist/".concat(e))}},{key:"get_products",value:function(){return this.auth.get("/products")}},{key:"get_product_id",value:function(e){return this.auth.get("/products/".concat(e))}}]),e}()),L=N((function(e){var a=Object(n.useState)([]),t=Object(C.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)(""),o=Object(C.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)([]),d=Object(C.a)(u,2),p=d[0],h=d[1];Object(n.useEffect)((function(){S.get_products().then((function(e){console.log(e.data),"array"==typeof e&&c(e.data)})),e.user&&S.get_wishlist(e).then((function(e){h(e.data)}))}),[]);var g=r.filter((function(e){return e.name.toLocaleLowerCase().includes(i.toLocaleLowerCase())}));return g.map((function(e){p.includes(e._id)?e.inWishList=!0:e.inWishList=!1})),l.a.createElement("div",{className:"my-5 my-auto w-100 d-inline-block"},l.a.createElement("form",{className:""},l.a.createElement("input",{type:"text",className:"input-group searchproduct-form form-control border",placeholder:"Search for...",value:i,onChange:function(e){return m(e.target.value)},name:"query"})),g?g.map((function(e){return l.a.createElement(k.b,{to:"/products/".concat(e._id),className:"card-text-link"},l.a.createElement("div",{key:e._id,className:"card border-info mb-1 shadow"},l.a.createElement("div",{className:"d-flex card-body"},l.a.createElement("span",{className:"align-self-center"},l.a.createElement("img",{className:"list-img",src:e.photo,alt:""}),l.a.createElement("div",{className:"align-center"}," ",l.a.createElement("span",null,e.originalPrice),"\u20ac")),l.a.createElement("div",null,l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",{className:"text-left turquoise-color ml-2"},e.name),l.a.createElement("span",{className:"float-right"},e.inWishList?l.a.createElement("i",{className:"fa fa-heart turquoise-color","aria-hidden":"true"}):l.a.createElement("i",{className:"fa fa-heart-o turquoise-color","aria-hidden":"true"}))),l.a.createElement("p",{className:"card-text"},e.description)))))})):null)})),_=t(18);var A=N((function(e){var a=e.component,t=e.isLoggedin,n=Object(_.a)(e,["component","isLoggedin"]);return l.a.createElement(u.b,Object.assign({},n,{render:function(e){return t?l.a.createElement(u.a,{to:"/user"}):l.a.createElement(a,e)}}))}));var P=N((function(e){var a=e.component,t=e.isLoggedin,n=Object(_.a)(e,["component","isLoggedin"]);return l.a.createElement(u.b,Object.assign({},n,{render:function(e){return t?l.a.createElement(a,e):l.a.createElement(u.a,{to:"/login"})}}))})),F=N((function(e){var a=Object(n.useState)([]),t=Object(C.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){S.get_wishlist_pop(e).then((function(e){c(e.data),console.log(e.data)}))}),[]),console.log(r),l.a.createElement("div",null,l.a.createElement("h1",{className:"wishtitle"},"Your Wishlist"),l.a.createElement("div",{class:"card-group"},r?r.map((function(e){return l.a.createElement(k.b,{to:"/products/".concat(e._id),className:"card-text-link"},l.a.createElement("div",{class:"card"},l.a.createElement("img",{src:e.photo,class:"card-img-top",alt:"..."}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h3",{class:"card-title turquoise-color"},e.name),l.a.createElement("p",{class:"card-text"},e.description),l.a.createElement("p",{class:"card-text"},l.a.createElement("h3",{class:"text-muted"},e.originalPrice," \u20ac")))))})):"No Items on your wishlist"))})),D=N((function(e){var a=Object(n.useState)([]),t=Object(C.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)(!0),o=Object(C.a)(s,2),i=o[0],m=o[1];Object(n.useEffect)((function(){S.get_cartlist(e).then((function(e){c(e.data)}))}),[i]);var u=function(){for(var e=0,a=0;a<r.length;a++)e+=Number(r[a].productId.originalPrice*r[a].quantity);return e.toFixed(2)};return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("nav",{classNameName:"navbar navbar-expand-md navbar-dark bg-dark "},l.a.createElement("div",{className:"container"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarsExampleDefault"},l.a.createElement("ul",{className:"navbar-nav m-auto"},l.a.createElement("li",{className:"nav-item m-auto"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"category"},"Categories")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/products"},"Product")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"/cart"},"Cart ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/contact"},"Contact"))),l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("div",{className:"input-group input-group-sm"},l.a.createElement("div",{className:"input-group-append"})),l.a.createElement("a",{className:"btn btn-success btn-sm ml-3",href:"/cart"},l.a.createElement("i",{className:"fa fa-shopping-cart"})," Cart",l.a.createElement("span",{className:"badge badge-light"},r.length)))))),l.a.createElement("section",{className:"jumbotron text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"jumbotron-heading"},"Your Shopping Cart"))),l.a.createElement("div",{className:"container mb-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}," "),l.a.createElement("th",{scope:"col"},"Product"),l.a.createElement("th",{scope:"col"},"Available"),l.a.createElement("th",{scope:"col",className:"text-center"},"Quantity"),l.a.createElement("th",{scope:"col",className:"text-right"},"Price"),l.a.createElement("th",{scope:"col",className:"text-right"},"Total"),l.a.createElement("th",null," "))),r.map((function(e){return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{style:{height:"40px"},src:e.productId.photo,alt:""})," "),l.a.createElement("td",null,e.productId.name),l.a.createElement("td",null,"Stock:",e.stock),l.a.createElement("td",null,l.a.createElement("input",{className:"form-control",type:"number",value:"".concat(e.quantity)})),l.a.createElement("td",{className:"text-right"},e.productId.originalPrice," \u20ac"),l.a.createElement("td",{className:"text-right"},(e.productId.originalPrice*e.quantity).toFixed(2)," \u20ac"),l.a.createElement("td",{className:"text-right"},l.a.createElement("button",{onClick:function(){return a=e.productId._id,void S.delete_from_cart(a).then((function(e){m(!i)}));var a},className:"btn btn-sm btn-danger"},l.a.createElement("i",{className:"fa fa-trash"})," ")," ")))})),l.a.createElement("tr",null,l.a.createElement("td",null," Subtotal:"),l.a.createElement("td",{className:"text-right"}," ",u(),"\u20ac")),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,"Shipping"),l.a.createElement("td",{className:"text-right"},"6.90 \u20ac")),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("strong",null,"Total: ")),l.a.createElement("td",{className:"text-right"},l.a.createElement("strong",null," ",Number(1*u()+6.9).toFixed(2),"\u20ac")))),l.a.createElement("div",{className:"col mb-2"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12  col-md-6"},l.a.createElement(k.b,{to:"/products",className:"btn btn-block btn-light"},"Continue Shopping")),l.a.createElement("div",{className:"col-sm-12 col-md-6 text-right"},l.a.createElement("button",{className:"btn btn-lg btn-block btn-success text-uppercase"},"Checkout")))))),l.a.createElement("footer",{className:"text-light"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-lg-4 col-xl-3"},l.a.createElement("h5",null,"About"),l.a.createElement("hr",{className:"bg-dark mb-2 mt-0 d-inline-block mx-auto w-25"}),l.a.createElement("p",{style:{color:"black"},className:"mb-0"},"Here you will find the best customer service Ever. Trust us and you will no regret it.")),l.a.createElement("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto"},l.a.createElement("h5",null,"Others links"),l.a.createElement("hr",{className:"bg-dark mb-2 mt-0 d-inline-block mx-auto w-25"}),l.a.createElement("ul",{style:{color:"black"},className:"list-unstyled"},l.a.createElement("li",null,"About us"),l.a.createElement("li",null,"FAQ"))),l.a.createElement("div",{className:"col-md-4 col-lg-3 col-xl-3"},l.a.createElement("h5",null,"Contact"),l.a.createElement("hr",{className:"bg-dark mb-2 mt-0 d-inline-block mx-auto w-25"}),l.a.createElement("ul",{style:{color:"black"},className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-home mr-2"})," Mask 'R' us"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-envelope mr-2"})," maskrus@gmail.com"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-phone mr-2"})," + 93 230 02 21"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-print mr-2"})," + 669 12 12 43"))),l.a.createElement("div",{className:"col-12 copyright mt-3"},l.a.createElement("p",{className:"float-left"},l.a.createElement("a",{href:"#"},"Back to top"))))))))))}));var I=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome"))},q=N((function(e){var a,t=Object(n.useState)(!0),r=Object(C.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)({}),i=Object(C.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)([]),p=Object(C.a)(d,2),h=p[0],g=p[1],b=Object(n.useState)(!1),f=Object(C.a)(b,2),v=f[0],N=f[1];function w(){a?S.removeFromWishlist(e.match.params.id):S.addToWishlist(e.match.params.id),a=!a,console.log(a),N(!v)}return a=!!h.includes(m._id),Object(n.useEffect)((function(){S.get_product_id(e.match.params.id).then((function(e){u(e.data)})),e.user&&S.get_wishlist(e).then((function(e){e!==h&&(g(e.data),console.log(e.data))})),s(!1)}),[]),Object(n.useEffect)((function(){e.user&&S.get_wishlist(e).then((function(e){e!==h&&(g(e.data),console.log(e.data))}))}),[v]),l.a.createElement("div",null,c?l.a.createElement("div",null,l.a.createElement(E.a,{type:"Puff",color:"#00BFFF",height:100,width:100})):l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"turquoise-color my-1"},m.name),l.a.createElement("h2",null,"by ",m.brand),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("img",{className:"img-fluid",src:m.photo,alt:""})),l.a.createElement("div",{className:"col-md-4"},e.user?l.a.createElement("div",{className:"my-3 float-right turquoise-color"},a?l.a.createElement("button",{onClick:w,class:"badge badge-dark heart-button "},"In your wishlist"," ",l.a.createElement("i",{class:"turquoise-color fa fa-heart ","aria-hidden":"true"})):l.a.createElement("button",{onClick:w,class:"badge badge-dark heart-button "},"Add it to your wishlist"," ",l.a.createElement("i",{class:"turquoise-color fa fa-heart-o","aria-hidden":"true"}))):l.a.createElement("div",{class:"my-3 float-right badge badge-dark"},l.a.createElement("i",{class:"turquoise-color fa fa-heart-o","aria-hidden":"true"})," ","You need to ",l.a.createElement("a",{href:"/login"},"login")," to add products to your wishlist."),l.a.createElement("h3",{className:"my-3"},"Product Description"),l.a.createElement("p",null,m.description),l.a.createElement("h3",{className:"my-3"},"Product Details"),l.a.createElement("ul",null,l.a.createElement("li",null,"Material: ",m.material),l.a.createElement("li",null,"Size: ",m.size),l.a.createElement("li",null,"Color: ",m.color),l.a.createElement("li",null,"Stock: ",m.stock),l.a.createElement("li",null,"Shipping Time: ",m.shippingTime)))),l.a.createElement("div",null,l.a.createElement("span",null,m.originalPrice),l.a.createElement("span",null,m.originalPrice)),l.a.createElement("div",null,l.a.createElement("button",{type:"button",class:"btn btn-dark btn-lg btn-block turquoise-color mb-4"},l.a.createElement("i",{class:"turquoise-color fa fa-shopping-cart","aria-hidden":"true"})," ","Add to Cart"))))})),M=N((function(e){return console.log(e.user),l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{class:"navbar-brand",href:"/"},l.a.createElement("img",{src:"IronHack.png",alt:""})),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavDropdown"},l.a.createElement("ul",{class:"navbar-nav"},l.a.createElement("li",{class:"nav-item active"},l.a.createElement("a",{class:"nav-link",href:"/products"},"Our Masks ",l.a.createElement("span",{class:"sr-only"},"(current)"))),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",href:"/cart"},l.a.createElement("button",{type:"button",class:"btn btn-warning"},"Shopping Cart"))),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",href:"/wishlist"},l.a.createElement("button",{type:"button",class:"btn btn-outline-warning"},"Your Wishlist"))),e.user?l.a.createElement("div",null,l.a.createElement("li",{class:"nav-item dropdown"},l.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Welcome ",e.user.email),l.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},l.a.createElement("a",{class:"dropdown-item",href:"/cart"},"Shopping Cart"),l.a.createElement("a",{class:"dropdown-item",href:"/wishlist"},"Wishlist"),l.a.createElement("a",{class:"dropdown-item",href:"/user"},"Your profile")))):l.a.createElement("div",null,l.a.createElement("li",{class:"nav-item dropdown"},l.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Your Acconut"),l.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},l.a.createElement("a",{class:"dropdown-item",href:"/login"},"Log in"),l.a.createElement("a",{class:"dropdown-item",href:"/signup"},"Sign up"))))))))})),W=N(function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var a=n.state,t=a.email,l=a.password,r=a.shippingAddress;n.props.editProfile({email:t,password:l,shippingAddress:r}),n.props.history.push("/user")},n.handleChange=function(e){var a=e.target,t=a.name,l=a.value;n.setState(Object(y.a)({},t,l))},console.log(e),n.state={email:n.props.user.email,shippingAddress:n.props.user.shippingAddress,password:""},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.shippingAddress,n=e.password;return l.a.createElement("div",{className:"background-color row h-100"},l.a.createElement("div",{className:"col-sm-12 my-auto"},l.a.createElement("div",{className:"col-sm-12 h-100 d-table"},l.a.createElement("div",{className:"card-container col-md-4 text-center card card-block ",style:{height:"60vh"}},l.a.createElement("img",{className:"card-img-top",src:"/images/pathToYourImage.png",alt:"Card image cap"}),l.a.createElement("form",{className:"form-group col-sm-12 d-table",onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("p",null," Hi, ",l.a.createElement("b",null,this.props.user.email)),l.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"E-mail @",value:a,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",className:"form-control",id:"formGroupExampleInput2",placeholder:"New Password",value:n,onChange:this.handleChange}),l.a.createElement("input",{type:"text",className:"form-control",id:"formGroupExampleInput2",placeholder:"Shipping Address",value:t,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"}))))),l.a.createElement("div",{className:" col-md-4 text-center",role:"group","aria-label":"Basic example"},l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.props.logout},"Log out")),l.a.createElement("div",{className:"col-md-4 text-center"},l.a.createElement(k.b,{to:"/"}," ",l.a.createElement("button",{id:"singlebutton",name:"singlebutton",className:"btn btn-primary"},"Home"))))}}]),t}(l.a.Component)),T=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(w,null,l.a.createElement("div",null,l.a.createElement(M,null),l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/",component:I}),l.a.createElement(A,{exact:!0,path:"/signup",component:x}),l.a.createElement(u.b,{exact:!0,path:"/products",component:L}),l.a.createElement(A,{exact:!0,path:"/login",component:j}),l.a.createElement(P,{exact:!0,path:"/user",component:O}),l.a.createElement(P,{path:"/user/:id/edit-profile",component:W}),l.a.createElement(P,{exact:!0,path:"/wishlist",component:F}),l.a.createElement(P,{exact:!0,path:"/cart",component:D}),l.a.createElement(u.b,{exact:!0,path:"/products/:id",component:q}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k.a,null,l.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.771b1a3b.chunk.js.map