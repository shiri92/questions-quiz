(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=n(6),a=n.n(s),c=(n(27),n(7)),o=n(8),l=n(13),d=n(10),u=n(12),p=n(1),x=n.n(p),m=n(4),w=n(11),f=1,h=[{id:f++,txt:"Inside which HTML element do we put the JavaScript?",answers:[{txt:"<scripting>",isClicked:!1},{txt:"<script>",isClicked:!1},{txt:"<JavaScript>",isClicked:!1},{txt:"<js>",isClicked:!1}],correctOptIndex:1},{id:f++,txt:'How do you write a conditional statement for executing some statements only if "i" is equal to 5?',answers:[{txt:"If i==5 then",isClicked:!1},{txt:"If i=5 then",isClicked:!1},{txt:"If (i==5)",isClicked:!1},{txt:"If i=5",isClicked:!1}],correctOptIndex:2},{id:f++,txt:'How does a "for" loop start?',answers:[{txt:"For (let i = 0; i",isClicked:!1},{txt:"For (i = 0; !",isClicked:!1},{txt:"For i = 1 to 5",isClicked:!1},{txt:"while (i",isClicked:!1}],correctOptIndex:0},{id:f++,txt:"You define an array using",answers:[{txt:"Var myarray = new Array();",isClicked:!1},{txt:"Var myarray = array new;",isClicked:!1},{txt:"Var new Array() = myarray;",isClicked:!1},{txt:"Var new array = myarray;",isClicked:!1}],correctOptIndex:0},{id:f++,txt:"How do you round the number 8.25, to the nearest whole number?",answers:[{txt:"Math.rnd(8.25)",isClicked:!1},{txt:"Rnd(8.25)",isClicked:!1},{txt:"Round(8.25)",isClicked:!1},{txt:"Math.round(8.25)",isClicked:!1}],correctOptIndex:3},{id:f++,txt:"How do you find the largest number of 6 and 8?",answers:[{txt:"Top(6,8)",isClicked:!1},{txt:"Math.max(6,8)",isClicked:!1},{txt:"Ceil(6,8)",isClicked:!1},{txt:"Math.ceil(6,8)",isClicked:!1}],correctOptIndex:1},{id:f++,txt:"How long did Brendan Eich take to write the JavaScript programming language?",answers:[{txt:"10 days",isClicked:!1},{txt:"2 weeks",isClicked:!1},{txt:"2 months",isClicked:!1},{txt:"10 months",isClicked:!1}],correctOptIndex:0},{id:f++,txt:"Who created JavaScript?",answers:[{txt:"Microsoft",isClicked:!1},{txt:"Sun Microsystems",isClicked:!1},{txt:"Oracle",isClicked:!1},{txt:"Netscape",isClicked:!1}],correctOptIndex:3},{id:f++,txt:"Which of the following is not a reserved word in JavaScript?",answers:[{txt:"default",isClicked:!1},{txt:"finally",isClicked:!1},{txt:"undefined",isClicked:!1},{txt:"throw",isClicked:!1}],correctOptIndex:2},{id:f++,txt:"How do you create a function named coolFunction?",answers:[{txt:"Function => coolfunction () {}",isClicked:!1},{txt:"Function=coolFunction();",isClicked:!1},{txt:"Function:coolFunction(){}",isClicked:!1},{txt:"Function coolFunction () {}",isClicked:!1}],correctOptIndex:3}];var k={getQuests:function(){return Promise.resolve(h)},getCurrQuestion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Promise.resolve(h[e])}},C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={answeredQuestions:[],isLastQuestion:!1,selectedAnswer:null,playerScore:0},n.handleAnswerClick=function(e){if(e.id=n.props.currQuestion.id,e.isClicked=!0,n.state.selectedAnswer){if(n.state.selectedAnswer.txt===e.txt)return;n.setState({selectedAnswer:e}),n.state.selectedAnswer.isClicked=!1}else n.setState({selectedAnswer:e})},n.handleNextClick=function(){if(n.state.selectedAnswer){var e=n.state.selectedAnswer,t=n.state.answeredQuestions,r=t.findIndex(function(t){return t.id===e.id});-1!==r?t.splice(r,1,e):t.push(e),n.setState({answeredQuestions:t,selectedAnswer:null}),n.state.answeredQuestions.length+1===n.props.questions.length&&n.setState({isLastQuestion:!0}),n.props.currQuestion.answers.findIndex(function(e){return e.txt===n.state.selectedAnswer.txt})===n.props.currQuestion.correctOptIndex&&n.setState({playerScore:n.state.playerScore+10}),n.props.getCurrQuestion(n.state.answeredQuestions.length)}},n.handlePreviewClick=function(){console.log(n.state.selectedAnswer);var e=n.state.answeredQuestions;e.pop(),n.setState({answeredQuestions:e,currQuestion:n.props.getCurrQuestion(n.state.answeredQuestions.length)})},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.getQuests(),this.props.getCurrQuestion();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.currQuestion;if(t)var n=t.answers.map(function(t,n){return i.a.createElement("div",{className:"answer d-flex flex-column align-items-center ".concat(t.isClicked?"clicked":""),key:n,onClick:function(){return e.handleAnswerClick(t)}},i.a.createElement("h3",null,t.txt))});return i.a.createElement("div",{className:"game-board p-5"},t&&i.a.createElement("div",{className:"container content"},i.a.createElement("div",{className:"question"},i.a.createElement("h1",{className:"text-center"},t.txt)),i.a.createElement("div",{className:"answers d-flex flex-wrap justify-content-center"},n),i.a.createElement("div",{className:"btns d-flex justify-content-center"},i.a.createElement("button",{className:"prev btn btn-primary m-5",disabled:!this.state.answeredQuestions.length,onClick:this.handlePreviewClick},"Preview"),i.a.createElement("button",{className:"next btn btn-primary m-5",onClick:this.handleNextClick},this.state.isLastQuestion?"Done":"Next"))),!t&&i.a.createElement("div",{className:"container text-center"},i.a.createElement("div",{className:"question d-flex flex-column align-items-center"},i.a.createElement("h1",null,"Your Score:"),i.a.createElement("h1",null,this.state.playerScore))))}}]),t}(r.Component),v=Object(w.b)(function(e){return{questions:e.gameReducer.items,currQuestion:e.gameReducer.item}},{getQuests:function(){return function(){var e=Object(m.a)(x.a.mark(function e(t){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getQuests();case 2:n=e.sent,t({type:"GET_QUESTS",payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getCurrQuestion:function(e){return function(){var t=Object(m.a)(x.a.mark(function t(n){var r;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.getCurrQuestion(e);case 2:r=t.sent,n({type:"GET_CURR_QUEST",payload:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(C),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(2),b=n(21),Q=n(17),O={items:[],item:null},E=Object(g.c)({gameReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_QUESTS":return Object(Q.a)({},e,{items:t.payload});case"GET_CURR_QUEST":return Object(Q.a)({},e,{item:t.payload});default:return e}}}),S=[b.a],j=Object(g.d)(E,{},g.a.apply(void 0,S));a.a.render(i.a.createElement(w.a,{store:j},i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.0ae368a2.chunk.js.map