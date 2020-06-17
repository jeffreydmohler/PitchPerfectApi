(this.webpackJsonpbaseball_webapp=this.webpackJsonpbaseball_webapp||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),m=a.n(r),i=(a(80),a(114)),c=a(115),o=a(71),s=a(26),u=a(6),d=(a(81),a(120)),b=a(121),E=a(119),p=a(35),h=a.n(p);var f=function(e){return l.a.createElement(d.a,{className:"pl-4",expand:"lg",variant:"light",bg:"secondary"},l.a.createElement("br",null),l.a.createElement("img",{alt:"baseball",src:h.a,width:"50"})," \xa0 \xa0",l.a.createElement(s.b,{to:"/"},l.a.createElement(d.a.Brand,null,"Pitch Perfect"))," ","| \xa0\xa0\xa0",l.a.createElement(s.b,{to:"/report"},l.a.createElement(d.a.Brand,null,"Report")),l.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(b.a,{className:"mr-auto"}),l.a.createElement(b.a,null,l.a.createElement(b.a,{className:"mr-auto pr-4"},l.a.createElement(s.b,{to:"/cart",className:"nav-link"})),l.a.createElement(E.a,{title:"Welcome, User",alignRight:!0},l.a.createElement(E.a.Item,null,"My Account"),l.a.createElement(E.a.Divider,null),l.a.createElement(E.a.Item,{href:"#action/3.4"},"Logout")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},g=a(33),y=a.n(g),S=a(50),v=a(73),T=a(122),w=a(68),B=a(116),N=a(117),x=a(118),O=a(27),k=(a(90),a(91)),A=0;function L(e){return l.a.createElement(H,null)}var H=function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),r=a[0],m=a[1];return l.a.createElement(O.c,{initialValues:{homeTeam:"",awayTeam:"",homeScore:0,awayScore:0,inning:1,topbottom:"",strikes:0,balls:0,outs:0,batter:"",pitcher:"",base1:0,base2:0,base3:0,pitchnumber:1,atbat:1,infield:"Standard",outfield:"Standard",outcome:"Called Strike"},validateOnChange:!1,validateOnBlur:!1,validate:function(e){var t={};return console.log("validating",e),e.strikes>2&&(t.strikes="There can only be 2 strikes"),e.balls>3&&(t.balls="There can only be 3 balls"),e.outs>2&&(t.outs="There can only be 2 outs"),e.inning>20&&(t.inning="There can only be 20 innings"),e.pitchnumber>15&&(t.pitchnumber="There can only be 15 pitches"),e.inning>20&&(t.inning="There can only be 20 innings"),""===e.topbottom&&(t.topbottom="Top or Bottom of inning is required"),""===e.batter&&(t.batter="Batter Handedness is required"),""===e.pitcher&&(t.pitcher="Pitcher Handedness is required"),t},onSubmit:function(){var e=Object(S.a)(y.a.mark((function e(t,a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submit",t),console.log(JSON.stringify(t)),e.prev=2,e.next=5,k.post("/api/predictm/",{values:t});case 5:return n=e.sent,m(n.data),console.log(JSON.stringify(n.data)),A=n.data,A=parseFloat(100*A).toFixed(2),document.documentElement.scrollTop=0,e.next=13,new Promise((function(e){setTimeout((function(){e(),a.setSubmitting(!1)}),2e3)}));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log("error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){return l.a.createElement(C,{form:e,pitch:r})}))},C=function(e){return l.a.createElement(O.b,null,l.a.createElement(i.a,null,l.a.createElement(T.a.Header,{as:"h5"},"Predict Pitch Result -- Which Pitch Should You Throw?"),l.a.createElement(c.a,null,l.a.createElement(o.a,{md:"10"},l.a.createElement(T.a.Body,null,l.a.createElement(c.a,null,l.a.createElement(o.a,{md:"6"},l.a.createElement(R,{title:"Home Team:",name:"homeTeam",as:"select",options:["ARI","ATL","BAL","BOS","CHC","CIN","CLE","COL","CWS","DET","HOU","KC","LAA","LAD","MIA","MIL","MIN","NYM","NYY","OAK","PHI","PIT","SD","SEA","SF","STL","TB","TEX","TOR","WSH"],disabled:e.form.isSubmitting})," "),l.a.createElement(o.a,{md:"6"},l.a.createElement(R,{title:"Away Team:",name:"awayTeam",as:"select",options:["ARI","ATL","BAL","BOS","CHC","CIN","CLE","COL","CWS","DET","HOU","KC","LAA","LAD","MIA","MIL","MIN","NYM","NYY","OAK","PHI","PIT","SD","SEA","SF","STL","TB","TEX","TOR","WSH"],disabled:e.form.isSubmitting}))),l.a.createElement(c.a,null,l.a.createElement(o.a,{md:"4"},l.a.createElement(I,{title:"Home Score:",name:"homeScore",type:"number",disabled:e.form.isSubmitting})),l.a.createElement(o.a,{md:"4"},l.a.createElement(I,{title:"Away Score:",name:"awayScore",type:"number",disabled:e.form.isSubmitting})),l.a.createElement(o.a,{md:"2"},l.a.createElement(I,{title:"Inning:",name:"inning",type:"number",disabled:e.form.isSubmitting})),l.a.createElement(o.a,{md:"2"},l.a.createElement("br",null),l.a.createElement(P,{name:"topbottom",type:"radio",label:"Top",value:"T"}),l.a.createElement(P,{name:"topbottom",type:"radio",label:"Bottom",value:"B"}))),l.a.createElement(c.a,null,l.a.createElement(o.a,{md:"4"},l.a.createElement(I,{title:"Strikes:",name:"strikes",type:"number",disabled:e.form.isSubmitting})),l.a.createElement(o.a,{md:"4"},l.a.createElement(I,{title:"Balls:",name:"balls",type:"number",disabled:e.form.isSubmitting})),l.a.createElement(o.a,{md:"4"},l.a.createElement(I,{title:"Outs:",name:"outs",type:"number",disabled:e.form.isSubmitting}))),l.a.createElement(c.a,null,l.a.createElement(o.a,{md:"4"},l.a.createElement("span",{className:"form-label"},"Batter:")," ",l.a.createElement("br",null),l.a.createElement(P,{name:"batter",type:"radio",label:"Left-Handed",value:"L"}),l.a.createElement("br",null),l.a.createElement(P,{name:"batter",type:"radio",label:"Right-Handed",value:"R"}),l.a.createElement("br",null),l.a.createElement("br",null)," "),l.a.createElement(o.a,{md:"4"},l.a.createElement("span",{className:"form-label"},"Pitcher:")," ",l.a.createElement("br",null),l.a.createElement(P,{name:"pitcher",type:"radio",label:"Left-Handed",value:"L"}),l.a.createElement("br",null),l.a.createElement(P,{name:"pitcher",type:"radio",label:"Right-Handed",value:"R"})),l.a.createElement(o.a,{md:"4"},l.a.createElement("span",{className:"form-label"},"Which Bases are Occupied?")," ",l.a.createElement("br",null),l.a.createElement(P,{name:"base1",type:"checkbox",label:"1st Base",value:"1"}),l.a.createElement("br",null),l.a.createElement(P,{name:"base2",type:"checkbox",label:"2nd Base",value:"1"}),l.a.createElement("br",null),l.a.createElement(P,{name:"base3",type:"checkbox",label:"3rd Base",value:"1"})," ",l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement(c.a,null,l.a.createElement(o.a,{md:"6"},l.a.createElement(I,{title:"Pitch Number of At-Bat:",name:"pitchnumber",type:"number",disabled:e.form.isSubmitting})),l.a.createElement(o.a,{md:"6"},l.a.createElement(I,{title:"At Bat Number (Overall):",name:"atbat",type:"number",disabled:e.form.isSubmitting}))),l.a.createElement(c.a,null,l.a.createElement(o.a,{md:"6"},l.a.createElement(R,{title:"Infield Alignment:",name:"infield",as:"select",options:["Standard","Infield Shift","Strategic"],disabled:e.form.isSubmitting})," "),l.a.createElement(o.a,{md:"6"},l.a.createElement(R,{title:"Outfield Alignment:",name:"outfield",as:"select",options:["Standard","4th Outfielder","Strategic"],disabled:e.form.isSubmitting}))),l.a.createElement(R,{title:"Outcome Desired:",name:"outcome",as:"select",options:["Called Strike","Ball","Hit into Play and Score","Swinging Strike","Hit into Play","Foul Tip","Hit into Play No Out","Foul Ball","Swinging Strike Blocked","Blocked Ball","Foul Bunt","Pitchout","Hit By Pitch","Missed Bunt","Bunt Foul Tip"],disabled:e.form.isSubmitting})),l.a.createElement(w.a,{type:"submit",disabled:e.form.isSubmitting,className:"mb-4 w-100 ml-3"},l.a.createElement(B.a,{animation:"border",variant:"success",size:"sm",style:{visibility:e.form.isSubmitting?"visible":"hidden"}}),"\xa0 \xa0 Predict")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.a,{md:"2"},l.a.createElement("br",null),l.a.createElement(N.a,{src:h.a,height:"25%",width:"100%"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,e.pitch),l.a.createElement("span",{className:"text-center form-label"}," Throw this pitch for the best chance of getting your desired outcome ")))))},I=function(e){return l.a.createElement(O.a,{name:e.name},(function(t){return l.a.createElement(x.a.Group,null,e.title&&l.a.createElement(x.a.Label,null,e.title),l.a.createElement(x.a.Control,Object.assign({type:e.type,placeholder:e.placeholder},t.field,{disabled:e.disabled,as:e.as,style:{display:"block",width:e.width},maxLength:400})),t.meta.touched&&t.meta.error&&l.a.createElement("div",{className:"text-danger"},t.meta.error))}))},P=function(e){return l.a.createElement(O.a,{name:e.name},(function(t){return l.a.createElement(x.a.Check,Object.assign({inline:!0,name:e.name,type:e.type,placeholder:e.placeholder},t.field,{disabled:e.disabled,label:e.label,value:e.value}))}))},R=function(e){return l.a.createElement(O.a,{name:e.name},(function(t){return l.a.createElement(x.a.Group,null,e.title&&l.a.createElement(x.a.Label,null,e.title),l.a.createElement(x.a.Control,Object.assign({type:e.type,placeholder:e.placeholder},t.field,{disabled:e.disabled,as:e.as,style:{display:"block",width:e.width},maxLength:400}),e.options.map((function(e){return l.a.createElement("option",null,e)}))),t.meta.touched&&t.meta.error&&l.a.createElement("div",{className:"text-danger"},t.meta.error))}))};function M(e){return l.a.createElement(c.a,null,l.a.createElement(o.a,{md:"1"}),l.a.createElement(o.a,{md:"10"},l.a.createElement(T.a.Header,{as:"h2"},"Our Report")))}function D(e){return l.a.createElement("div",{className:"text-center"},"Baseball Predictor  \xa9 ",(new Date).getFullYear())}var F=function(){return l.a.createElement(s.a,null,l.a.createElement(i.a,{fluid:!0,className:"p-0 min-vh-100 d-flex flex-column"},l.a.createElement(c.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 border-bottom shadow-sm",bg:"secondary"},l.a.createElement(o.a,null,l.a.createElement(f,null))),l.a.createElement(c.a,{noGutters:!0,className:"flex-grow-1"},l.a.createElement(o.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(L,null)),l.a.createElement(u.a,{path:"/report"},l.a.createElement(M,null))))),l.a.createElement(c.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0"},l.a.createElement(o.a,{className:"px-3 py-2 bg-primary text-light"},l.a.createElement(D,{style:{position:"fixed",left:0,bottom:0}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){e.exports=a.p+"static/media/baseball.6f8f9567.png"},75:function(e,t,a){e.exports=a(109)},80:function(e,t,a){},81:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.4a951142.chunk.js.map