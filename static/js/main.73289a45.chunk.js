(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=a(6),r=a(2),o=a(7),c=a(1),l=(a(13),a(0)),d=function(e){var t,a=e.todo;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"title is-6",children:a.title}),Object(l.jsx)("p",{children:null===(t=a.user)||void 0===t?void 0:t.name}),Object(l.jsx)("span",{children:!1===a.completed?"NOT Completed":"Completed"})]})},u=function(e){var t=e.preparedTodos;return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("ul",{className:"list",children:t.map((function(e){return Object(l.jsx)("li",{className:"list-item",children:Object(l.jsx)(d,{todo:e})},e.id)}))})})},m=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],b=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:m.find((function(t){return t.id===e.userId}))||null})})),h=function(){var e=Object(c.useState)(Object(s.a)(b)),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),d=o[0],h=o[1],p=Object(c.useState)(!1),g=Object(r.a)(p,2),j=g[0],y=g[1],f=Object(c.useState)(0),O=Object(r.a)(f,2),v=O[0],x=O[1],S=Object(c.useState)(!1),w=Object(r.a)(S,2),C=w[0],k=w[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),!v&&!d)return y(!0),void k(!0);d?v?C||j||(!function(){var e={userId:v,id:a.length+1,title:d,completed:!1,user:m.find((function(e){return v===e.id}))||null};n((function(t){return[].concat(Object(s.a)(t),[e])}))}(),h(""),x(0)):k(!0):y(!0)},children:[Object(l.jsx)("input",{className:"input is-primary",type:"text",placeholder:"Please, enter the title",value:d,onChange:function(e){y(!1),h(e.target.value)}}),j&&Object(l.jsx)("span",{className:"button is-danger is-inverted",children:"Please write a title"}),Object(l.jsx)("div",{className:"select is-primary",children:Object(l.jsxs)("select",{value:v,onChange:function(e){k(!1),x(+e.target.value)},children:[Object(l.jsx)("option",{children:"Choose a user"}),m.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),C&&Object(l.jsx)("span",{className:"button is-danger is-inverted",children:"Choose a user"}),Object(l.jsx)("button",{className:"button is-primary is-outlined",type:"submit",children:"Add"})]}),Object(l.jsx)(u,{preparedTodos:a})]})};i.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.73289a45.chunk.js.map