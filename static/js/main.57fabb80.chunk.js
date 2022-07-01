(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(6),c=n.n(s),a=n(4),o=n(2),i=n(3),r=n.n(i),l=n(1),u=(n(12),n(13),n(14),n(0)),j=function(e){var t=e.posts,n=e.selectedPostId,s=e.onSelectPost;return Object(u.jsxs)("div",{className:"PostsList",children:[Object(u.jsx)("h2",{children:"Posts:"}),Object(u.jsx)("ul",{className:"PostsList__list","data-cy":"postDetails",children:t.map((function(e){return Object(u.jsxs)("li",{className:"PostsList__item",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),e.title]}),e.id===n?Object(u.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return s(0)},children:"Close"}):Object(u.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){s(e.id)},children:"Open"})]},e.id)}))})]})};n(16);function d(e,t){return fetch("".concat("https://mate.academy/students-api").concat(e),t).then((function(e){return e.json()}))}var b=function(e){var t=e.selectedPostId,n=e.onAddComment,s=Object(l.useState)(""),c=Object(o.a)(s,2),a=c[0],i=c[1],r=Object(l.useState)(""),j=Object(o.a)(r,2),b=j[0],m=j[1],p=Object(l.useState)(""),h=Object(o.a)(p,2),O=h[0],f=h[1],x=function(e){var s;e.preventDefault(),(s={postId:t,name:a,email:b,body:O},d("/comments",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({postId:s.postId,name:s.name,email:s.email,body:s.body})})).then((function(){n(!0),i(""),m(""),f("")})),n(!1)};return Object(u.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){return x(e)},children:[Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:a,onChange:function(e){return i(e.target.value)}})}),Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:b,onChange:function(e){return m(e.target.value)}})}),Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:O,onChange:function(e){return f(e.target.value)}})}),Object(u.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})},m=(n(17),function(e){var t=e.selectedPostId,n=Object(l.useState)(!0),s=Object(o.a)(n,2),c=s[0],i=s[1],j=Object(l.useState)(),m=Object(o.a)(j,2),p=m[0],h=m[1],O=Object(l.useState)([]),f=Object(o.a)(O,2),x=f[0],v=f[1],_=Object(l.useState)(!1),N=Object(o.a)(_,2),y=N[0],P=N[1],C=function(){var e=Object(a.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts/".concat(t));case 2:n=e.sent,h(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(a.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/comments?postId=".concat(t));case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){C(),S()}),[t,y]),Object(u.jsxs)("div",{className:"PostDetails",children:[Object(u.jsx)("h2",{children:"Post details: ".concat(null===p||void 0===p?void 0:p.id)}),Object(u.jsx)("section",{className:"PostDetails__post",children:Object(u.jsx)("p",{children:null===p||void 0===p?void 0:p.body})}),Object(u.jsxs)("section",{className:"PostDetails__comments","data-cy":"postDetails",children:[c?Object(u.jsx)("button",{type:"button",className:"button",onClick:function(){return i(!1)},children:"Hide comments"}):Object(u.jsx)("button",{type:"button",className:"button",onClick:function(){return i(!0)},children:"Show comments"}),c&&Object(u.jsx)("ul",{className:"PostDetails__list",children:x.map((function(e){return Object(u.jsxs)("li",{className:"PostDetails__list-item",children:[Object(u.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){var t;(t=e.id,d("/comments/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json; charset=UTF-8"}})).then((function(){v(x.filter((function(t){return t.id!==e.id})))}))},children:"X"}),Object(u.jsx)("p",{children:e.body})]})}))})]}),Object(u.jsx)("section",{children:Object(u.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(u.jsx)(b,{selectedPostId:t,onAddComment:P})})})]})}),p=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(l.useState)(0),i=Object(o.a)(c,2),b=i[0],p=i[1],h=Object(l.useState)(0),O=Object(o.a)(h,2),f=O[0],x=O[1],v=function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(0!==(n=b)?"/posts?userId=".concat(n):"/posts");case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){v()}),[b]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App__header",children:Object(u.jsxs)("label",{children:["Select a user: \xa0",Object(u.jsxs)("select",{className:"App__user-selector",value:b,onChange:function(e){return p(+e.target.value)},children:[Object(u.jsx)("option",{value:"0",children:"All users"}),Object(u.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(u.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(u.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(u.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(u.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(u.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(u.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(u.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(u.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(u.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(u.jsxs)("main",{className:"App__main",children:[Object(u.jsx)("div",{className:"App__sidebar",children:Object(u.jsx)(j,{posts:n,selectedPostId:f,onSelectPost:function(e){x(e)}})}),Object(u.jsx)("div",{className:"App__content",children:0!==f&&Object(u.jsx)(m,{selectedPostId:f})})]})]})};c.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.57fabb80.chunk.js.map