(this["webpackJsonpreact-sandbox"]=this["webpackJsonpreact-sandbox"]||[]).push([[0],{76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(23),s=a.n(r),i=a(5),o=a(16),l=a(42),u=a(24),d=a(9),j={UPDATE_SEARCH_PARAM:"UPDATE_SEARCH_PARAM",UPDATE_COUNTRY_CODE:"UPDATE_COUNTRY_CODE",FETCH_JOB_DATA:"FETCH_JOB_DATA",FETCH_USER_LOCATION:"FETCH_USER_LOCATION",LOAD_JOBS:"LOAD_JOBS",SORT_BY_DATE:"SORT_BY_DATE",SORT_BY_MAX_SALARY:"SORT_BY_MAX_SALARY",GET_UNSORTED_DATA:"GET_UNSORTED_DATA",TURN_ON_FILTER:"TURN_ON_FILTER",TURN_OFF_FILTER:"TURN_OFF_FILTER",SELECT_JOB:"SELECT_JOB",CLEAR_JOB_SELECTED:"CLEAR_JOB_SELECTED"},m={country:"us",what:"",company:"",where:"",salary_min:"",salary_max:"",full_time:"",part_time:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.UPDATE_SEARCH_PARAM:return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.payload.param,t.payload.value));case j.UPDATE_COUNTRY_CODE:return Object(d.a)(Object(d.a)({},e),{},{country:t.payload.value});default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.FETCH_JOB_DATA:return t.payload;default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.FETCH_USER_LOCATION:return t.payload;default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.LOAD_JOBS:return t.payload;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.FETCH_JOB_DATA:case j.SORT_BY_DATE:case j.SORT_BY_MAX_SALARY:case j.GET_UNSORTED_DATA:return t.payload;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.TURN_ON_FILTER:return t.payload;case j.TURN_OFF_FILTER:return null;default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SELECT_JOB:return t.payload;case j.CLEAR_JOB_SELECTED:return null;default:return e}},v=Object(o.b)({searchParams:_,jobData:p,userLocation:b,jobsLoading:O,sortedJobData:h,jobFilter:f,jobSelected:x}),g=a(94),y=a(13),N=Object(y.a)(),C=a(3),T=a.n(C),E=a(6),A=["at","au","br","ca","de","fr","gb","in","it","nl","nz","pl","ru","sg","us","za"],F=function(e,t){return{type:j.UPDATE_SEARCH_PARAM,payload:{param:e,value:t}}},S=function(e){var t;return e=e.toLowerCase(),t=A.includes(e)?e:"us",{type:j.UPDATE_COUNTRY_CODE,payload:{param:"country",value:t}}},D=a(14),w=a.n(D),R=a(15),P=a.n(R),L=function(e){var t=e.replace(/,/g,"");return Math.round(t)},k=a(31),J=function(){return function(){var e=Object(E.a)(T.a.mark((function e(t,a){var n,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a().jobData,(c=Object(k.a)(n)).sort((function(e,t){return e.created>t.created?-1:t.created>e.created?1:0})),t({type:j.SORT_BY_DATE,payload:c});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},B=function(){return function(){var e=Object(E.a)(T.a.mark((function e(t,a){var n,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a().jobData,(c=Object(k.a)(n)).sort((function(e,t){return e.maxSalary>t.maxSalary?-1:t.maxSalary>e.maxSalary?1:0})),t({type:j.SORT_BY_MAX_SALARY,payload:c});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},U=function(e){return{type:j.LOAD_JOBS,payload:e}},I=function(){return function(){var e=Object(E.a)(T.a.mark((function e(t,a){var n,c,r,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(U(!0)),n=a().searchParams,c=M(n),e.next=6,w.a.get(c);case 6:r=e.sent,s=H(r.data.results),t({type:j.FETCH_JOB_DATA,payload:s}),t(function(){var e=Object(E.a)(T.a.mark((function e(t,a){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a().jobFilter,e.t0=n,e.next="sort_date"===e.t0?4:"salary_max"===e.t0?5:6;break;case 4:return e.abrupt("return",t(J()));case 5:return e.abrupt("return",t(B()));case 6:return e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),t(U(!1)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),t({type:j.FETCH_JOB_DATA,payload:"error"}),t(U(!1));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}()},M=function(e){for(var t=Object.keys(e),a="https://api.adzuna.com/v1/api/jobs/".concat(e.country,"/search/1?app_id=").concat("92a35e33","&app_key=").concat("8d6de2313330dc88848ec37ea6285db9","&results_per_page=100"),n=0;n<t.length;n++){var c=t[n],r=e[c];"salary_min"!==c&&"salary_max"!==c||(r=L(r)),"country"!==c&&(r&&(a+="&".concat(c,"=").concat(r)))}return a},H=function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a],c=n.company.display_name,r=void 0===c?"Unknown Company":c,s=n.description,i=n.title,o=n.id,l=n.location.display_name,u=n.salary_max,d=void 0===u?"":u,j=n.salary_min,m=void 0===j?"":j,_=n.contract_time,p=void 0===_?"":_,b=n.redirect_url,O=n.category.tag,h={companyName:r,created:P()(n.created).valueOf(),description:s,title:i,id:o,state:n.location.area[0],jobLocation:l,maxSalary:d,minSalary:m,contractTime:p,redirectUrl:b,categoryTag:O};t.push(h)}return t},Y=a(7),z=a(44),X=a(26),G=a(45),$=(a(76),a(77),a(1)),W=function(e){var t,a=e.title,n=e.items,c=e.onItemClick;return n&&n.length?t=n.map((function(e,t){return Object($.jsx)("li",{className:"Dropdown__item",onClick:function(t){c(t,e)},children:e},t)})):n&&!n.length&&(t=[Object($.jsx)("p",{children:"No Results Found"},1)]),Object($.jsxs)("div",{className:"Dropdown",children:[Object($.jsx)("h3",{className:"Dropdown__title",children:a}),Object($.jsx)("ul",{className:"Dropdown__list",children:t})]})},q=function(){var e=Object(E.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities",{headers:{"x-rapidapi-host":"wft-geo-db.p.rapidapi.com","x-rapidapi-key":"f5ccaa0bb8msh63eb609ff46e586p12f55djsn8088bb1da5d6"},params:{namePrefix:t}});case 3:return a=e.sent,e.abrupt("return",V(a.data.data));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),V=function(e){console.log(e);for(var t=[],a=0,n=0;n<5&&a<e.length;){var c=e[a],r=c.city,s=c.regionCode,i=c.countryCode.toLowerCase();console.log(i),A.includes(i)&&(t.push("".concat(r,", ").concat(s)),n+=1),a++}return console.log(t),t},K=(a(79),a(43)),Q=function(e){var t=e.items,a=e.title,c=e.value,r=e.onItemClick,s=Object(n.useRef)(),i=Object(n.useState)(!1),o=Object(Y.a)(i,2),l=o[0],u=o[1],d=Object(n.useState)(c),j=Object(Y.a)(d,2),m=j[0],_=j[1];Object(n.useEffect)((function(){var e=function(e){s.current&&!s.current.contains(e.target)&&u(!1)};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[]);var p=t.map((function(e,t){return Object($.jsx)("li",{className:"SelectBox__item",onClick:function(){u(!1),_(e),r(e)},children:e},t)}));return Object($.jsxs)("div",{className:"SelectBox",ref:s,children:[Object($.jsxs)("div",{className:"SelectBox__screen",onClick:function(){u(!0)},children:[Object($.jsx)("p",{children:m}),Object($.jsx)(K.a,{className:"SelectBox__icon"})]}),Object($.jsxs)("ul",{className:"SelectBox__list ".concat(l?"":"SelectBox__list--closed"),children:[Object($.jsx)("li",{className:"SelectBox__invalid-item",children:a}),p]})]})},Z=(a(80),function(e){var t=e.onClick,a=e.onChange,n=e.value,c=e.name,r=e.placeholder,s=e.className,i=e.onInput;return Object($.jsx)("input",{type:"text",className:"TextInput ".concat(s),name:c,placeholder:r,onClick:t,onChange:a,onInput:i,value:n})}),ee=["marketing","sales","product management","design","software engineering","human resources","finance","project management","writing","operations"],te=["google","microsoft","amazon","facebook","tesla","H&M","walmart","toyota"],ae=["new york, NY","san francisco, CA","los angeles, CA","boston, MA","washington, DC","Austin, TX","chicago, IL","seattle, WA","atlanta, GA"],ne=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(i.b)(),r=Object(n.useState)(null),s=Object(Y.a)(r,2),o=s[0],l=s[1],u=Object(n.useState)(ae),d=Object(Y.a)(u,2),j=d[0],m=d[1],_=Object(n.useState)(""),p=Object(Y.a)(_,2),b=p[0],O=p[1],h=Object(n.useState)(""),f=Object(Y.a)(h,2),x=f[0],v=f[1],g=Object(i.c)((function(e){return e.searchParams}));Object(n.useEffect)((function(){var n=function(n){[e,t,a].every((function(e){return e.current&&!e.current.contains(n.target)}))&&l(null)};return document.body.addEventListener("click",n),function(){document.body.removeEventListener("click",n)}}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){v(b)}),1e3);return function(){clearInterval(e)}}),[b]),Object(n.useEffect)((function(){x&&function(){var e=Object(E.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(x);case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[x]);var y=function(e,t,a){if(e===o)return Object($.jsx)(W,{title:t,items:a,onItemClick:function(t,a){c(F(e,a)),l(null),t.stopPropagation()}})};return Object($.jsx)("header",{className:"Header",children:Object($.jsxs)("div",{className:"container Header__container",children:[Object($.jsxs)("h1",{className:"logo",children:[Object($.jsx)("span",{className:"bold",children:"Eazy-E"})," Postings"]}),Object($.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),c(I()),N.push("/")},children:[Object($.jsxs)("div",{className:"form__input-group",onClick:function(){l("what")},ref:e,children:[Object($.jsx)(z.a,{className:"form__icon"}),Object($.jsx)(Z,{className:"form__input",name:"what",placeholder:"All jobs",value:g.what,onChange:function(e){c(F("what",e.target.value))}}),y("what","Popular Job Searches",ee)]}),Object($.jsxs)("div",{className:"form__input-group",onClick:function(){l("company")},ref:t,children:[Object($.jsx)(X.b,{className:"form__icon"}),Object($.jsx)(Z,{className:"form__input",name:"company",placeholder:"All Companies",value:g.company,onChange:function(e){c(F("company",e.target.value))}}),y("company","Popular Company Searches",te)]}),Object($.jsx)("div",{className:"form__input-group",children:Object($.jsx)(Q,{title:"Country",items:A,onItemClick:function(e){c(S(e))},value:g.country})}),Object($.jsxs)("div",{className:"form__input-group",onClick:function(){l("where")},ref:a,children:[Object($.jsx)(G.a,{className:"form__icon"}),Object($.jsx)(Z,{className:"form__input",name:"where",placeholder:"Anywhere",value:g.where,onChange:function(e){O(e.target.value),c(F("where",e.target.value))}}),y("where","choose or search a location",j)]}),Object($.jsx)("button",{className:"button button--primary form__button",type:"submit",children:"Search"})]})]})})},ce=(a(81),a(20)),re=function(){var e=Object(i.b)(),t=Object(n.useState)(!1),a=Object(Y.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),o=Object(Y.a)(s,2),l=o[0],u=o[1];Object(n.useEffect)((function(){var e=function(e){e.srcElement.innerWidth<=760?(r(!0),u(!0)):(r(!1),u(!1))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var d=Object(i.c)((function(e){return e.searchParams}));return Object($.jsxs)("section",{className:"Filters",children:[c?Object($.jsx)("button",{className:"button-3 button-3--primary text-large Filters__show-button",onClick:function(){r(!1)},children:"Edit Job Filters"}):null,Object($.jsxs)("div",{className:"Filters__content ".concat(c?"Filters__content--hide":null),children:[Object($.jsx)("h2",{className:"Filters__heading text-large-2",children:"Job Filters"}),Object($.jsxs)("div",{className:"Filters__group",children:[Object($.jsx)("p",{className:"Filters__group-title",children:"Sort By:"}),Object($.jsxs)("div",{className:"Filters__radios-container",onChange:function(t){var a=t.target.value;if("none"===a)return e({type:j.TURN_OFF_FILTER}),void e(function(){var e=Object(E.a)(T.a.mark((function e(t,a){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a().jobData,t({type:j.GET_UNSORTED_DATA,payload:n});case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());switch(e({type:j.TURN_ON_FILTER,payload:a}),a){case"sort_date":return e(J());case"salary_max":return e(B());default:return}},children:[Object($.jsxs)("div",{className:"Filters__radio-group",children:[Object($.jsx)("input",{type:"radio",className:"Filters__radio-button",name:"filter",value:"sort_date",id:"sort_date"}),Object($.jsx)("label",{htmlFor:"sort_date",children:"Date Posted"})]}),Object($.jsxs)("div",{className:"Filters__radio-group",children:[Object($.jsx)("input",{type:"radio",className:"Filters__radio-button",name:"filter",value:"salary_max",id:"salary_max"}),Object($.jsx)("label",{htmlFor:"salary_max",children:"Maximum Salary"})]}),Object($.jsxs)("div",{className:"Filters__radio-group",children:[Object($.jsx)("input",{type:"radio",className:"Filters__radio-button",name:"filter",value:"none",id:"none",defaultChecked:!0}),Object($.jsx)("label",{htmlFor:"none",children:"None"})]})]})]}),Object($.jsxs)("div",{className:"Filters__group",children:[Object($.jsx)("p",{className:"Filters__group-title",children:"Salary:"}),Object($.jsxs)("div",{className:"Filters__salary-inputs",children:[Object($.jsxs)("div",{className:"Filters__text-input-group",children:[Object($.jsx)(ce.b,{className:"Filters__icon"}),Object($.jsx)("input",{type:"text",className:"Filters__text-input",name:"minimum salary",id:"minimum-salary",placeholder:"Min Salary",value:d.salary_min,onChange:function(t){e(F("salary_min",t.target.value))}})]}),Object($.jsxs)("div",{className:"Filters__text-input-group",children:[Object($.jsx)(ce.b,{className:"Filters__icon"}),Object($.jsx)("input",{type:"text",name:"maximum salary",className:"Filters__text-input Filters__text-input-max",id:"maximum-salary",placeholder:"Max Salary",value:d.salary_max,onChange:function(t){e(F("salary_max",t.target.value))}})]}),Object($.jsx)("button",{className:"button-2 button-2--primary Filters__button",onClick:function(){e(I())},children:"Go"})]})]}),Object($.jsxs)("div",{className:"Filters__group",children:[Object($.jsx)("p",{className:"Filters__group-title",children:"Contract Time:"}),Object($.jsxs)("div",{className:"Filters__radios-container",onChange:function(t){"part time"===t.target.value?(e(F("full_time","")),e(F("part_time",1))):"full time"===t.target.value?(e(F("part_time","")),e(F("full_time",1))):"both"===t.target.value&&(e(F("part_time","")),e(F("full_time",""))),e(I())},children:[Object($.jsxs)("div",{className:"Filters__radio-group",children:[Object($.jsx)("input",{type:"radio",className:"Filters__radio-button",name:"contract time",value:"full time",id:"full-time"}),Object($.jsx)("label",{htmlFor:"full-time",children:"Full Time"})]}),Object($.jsxs)("div",{className:"Filters__radio-group",children:[Object($.jsx)("input",{type:"radio",className:"Filters__radio-button",name:"contract time",value:"part time",id:"part-time"}),Object($.jsx)("label",{htmlFor:"part-time",children:"Part Time"})]}),Object($.jsxs)("div",{className:"Filters__radio-group",children:[Object($.jsx)("input",{type:"radio",className:"Filters__radio-button",name:"contract time",value:"both",id:"both",defaultChecked:!0}),Object($.jsx)("label",{htmlFor:"both",children:"Both"})]})]})]}),l?Object($.jsx)("button",{className:"button-3 button-3--primary text-large Filters__hide-button",onClick:function(){r(!0)},children:"Hide Job Filters"}):null]})]})},se=a(46),ie=(a(82),function(e){var t=e.data,a=Object(i.b)(),n=t.companyName,c=t.created,r=t.title,s=t.jobLocation,o=t.maxSalary,l=t.minSalary,u=t.contractTime,d=t.id,m=r.replace(/\s/g,"-"),_=P()(c).format("MMM Do, YY");return Object($.jsxs)("div",{className:"JobCard",onClick:function(){var e;a((e=d,function(t,a){var n=a().sortedJobData.find((function(t){return t.id===e}));t({type:j.SELECT_JOB,payload:n})})),N.push("/jobs/".concat(m,"/").concat(d))},children:[Object($.jsxs)("div",{className:"JobCard__main-info",children:[Object($.jsx)("p",{className:"JobCard__company-name text-regular",children:n}),Object($.jsx)("h2",{className:"JobCard__title text-large",children:r}),Object($.jsxs)("div",{className:"JobCard__location-contract",children:[Object($.jsxs)("div",{className:"JobCard__location-wrapper",children:[Object($.jsx)(se.a,{className:"JobCard__icon"}),Object($.jsx)("p",{className:"JobCard__location text-small",children:s})]}),Object($.jsx)("p",{className:"JobCard__contract text-small",children:"full_time"===u?"Full Time":"part_time"===u?"Part Time":void 0})]})]}),Object($.jsxs)("div",{className:"JobCard__date-salary",children:[Object($.jsx)("p",{className:"JobCard__date text-small",children:"Posted on ".concat(_)}),Object($.jsxs)("div",{className:"JobCard__salary-group",children:[l?Object($.jsx)("p",{className:"JobCard__salary text-small",children:"Min $: ".concat(l)}):null,o?Object($.jsx)("p",{className:"JobCard__salary text-small",children:"Max $: ".concat(o)}):null]})]})]})}),oe=(a(83),function(e,t,a,n){if(a>=n)for(;t-e+1!==n;)e-=1;else for(;t-e+1!==a;)e-=1;return e}),le=function(e){for(var t=[],a=e[0],n=e[1],c=a;c<=n;c++)t.push(c);return t},ue=a(28),de=(a(84),function(e){var t=e.data,a=e.pageButtonsLimit,r=e.dataLimit,s=e.cardComponent,i=e.currentPageButton,o=s,l=Object(n.useState)(Math.ceil(t.length/r)),u=Object(Y.a)(l,1)[0],d=Object(n.useState)(i),j=Object(Y.a)(d,2),m=j[0],_=j[1];Object(n.useEffect)((function(){_(i)}),[i]);var p=function(e,t,a){var n=t*a-(a-1)-1,c=t*a-1;c>=e.length&&(c=e.length-1);for(var r=[],s=n;s<=c;s++){var i=e[s];r.push(i)}return r}(t,m,r).map((function(e,t){return Object($.jsx)(c.a.Fragment,{children:Object($.jsx)(o,{data:e})},t)})),b=function(e,t,a){var n;if((n=e<=t?e:t)<=3||a<=3)return le([1,n]);if(n>3&&a>3){var c=a-3,r=1+c,s=n+c;return s>=e&&(s=e),r=oe(r,s,e,t),le([r,s])}}(u,a,m).map((function(e,t){var a=m===e;return Object($.jsx)("button",{className:"button-3 button-3--primary Pagination__button ".concat(a?"Pagination__button--selected":null),onClick:function(){!function(e,t,a){t>=1&&t<=e&&a(t)}(u,e,_),function(e,t){t<=1?N.push("/"):t<=e&&N.push("/".concat(t))}(u,e)},children:e},t)}));return Object($.jsxs)(c.a.Fragment,{children:[Object($.jsx)("div",{className:"Pagination__data",children:p}),Object($.jsxs)("div",{className:"Pagination__page-group",children:[Object($.jsx)(ue.a,{className:"Pagination__icon Pagination__button",onClick:function(){!function(e,t){var a=e-1;t(a<1?1:a)}(m,_),function(e){var t=e-1;t<=1?N.push("/"):N.push("/".concat(t))}(m)}}),b,Object($.jsx)(ue.b,{className:"Pagination__icon Pagination__button ",onClick:function(){!function(e,t,a){var n=t+1;a(n>=e?e:n)}(u,m,_),function(e,t){var a=t+1;a>=e?N.push("/".concat(e)):N.push("/".concat(a))}(u,m)}})]})]})}),je=function(e){var t=e.currentPageButton,a=Object(i.c)((function(e){return e.sortedJobData})),n=Object(i.c)((function(e){return e.jobsLoading}));return Object($.jsx)("section",{className:"Results text-large",children:!0===n||null===n?Object($.jsx)("p",{className:"Results__fetching-jobs text-large",children:"Fetching jobs that match your criteria. Hold on, this might take a while..."}):"error"===a?Object($.jsx)("p",{className:"Results__error text-large",children:"There was a problem retrieving job data. Try Again."}):a.length?Object($.jsx)(de,{data:a,pageButtonsLimit:5,dataLimit:7,cardComponent:ie,currentPageButton:t}):Object($.jsx)("p",{className:"Results__none text-large",children:"No results found."})})},me=(a(85),function(e){var t;t=e.match.params.page?+e.match.params.page:1;var a=Object(i.b)(),c=Object(i.c)((function(e){return e.sortedJobData}));return Object(n.useEffect)((function(){var e=function(){var e=Object(E.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(function(){var e=Object(E.a)(T.a.mark((function e(t){var a,n,c,r,s,i,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://api.ipify.org?format=json");case 3:return a=e.sent,n=a.data.ip,e.next=7,w.a.get("http://ip-api.com/json/".concat(n));case 7:if(c=e.sent,r=c.data,s=r.city,i=r.regionName,o=c.data.countryCode.toLowerCase(),A.includes(o)){e.next=14;break}return t({type:j.FETCH_USER_LOCATION,payload:"Los Angeles, California"}),t(F("where","Los Angeles, California")),e.abrupt("return");case 14:t(S(o)),t({type:j.FETCH_USER_LOCATION,payload:"".concat(s,", ").concat(i)}),t(F("where","".concat(s,", ").concat(i))),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),t({type:j.FETCH_USER_LOCATION,payload:"Los Angeles, California"}),t(F("where","Los Angeles, California"));case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}());case 2:a(I());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c.length||e()}),[]),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(ne,{}),Object($.jsx)("main",{className:"Homepage",children:Object($.jsxs)("div",{className:"container",children:[Object($.jsx)(re,{}),Object($.jsx)(je,{currentPageButton:t})]})})]})}),_e=(a(86),function(e){console.log(e);var t,a=Object(i.c)((function(e){return e.jobSelected})),n=a.companyName,c=a.created,r=a.description,s=a.title,o=a.jobLocation,l=a.maxSalary,u=a.minSalary,d=a.redirectUrl;"part_time"===a.contractTime?t="Part Time":"full_time"===a.contractTime&&(t="Full Time");var j=P()(c).fromNow();return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(ne,{}),Object($.jsx)("main",{className:"DescriptionPage",children:Object($.jsxs)("div",{className:"container-2 DescriptionPage__container",children:[Object($.jsxs)("div",{className:"DescriptionPage__main-content",children:[Object($.jsxs)("div",{className:"DescriptionPage__title-date",children:[Object($.jsxs)("div",{className:"DescriptionPage__header-contract",children:[Object($.jsx)("h1",{className:"DescriptionPage__heading text-extra-large",children:s}),t?Object($.jsx)("p",{className:"text-medium DescriptionPage__contract",children:t}):null]}),Object($.jsxs)("div",{className:"DescriptionPage__time",children:[Object($.jsx)(ce.a,{className:"DescriptionPage__icon DescriptionPage__clock-icon"}),Object($.jsx)("p",{className:"text-small",children:j})]})]}),Object($.jsxs)("div",{className:"DescriptionPage__company-location",children:[Object($.jsx)("p",{className:" text-large DescriptionPage__company",children:n}),Object($.jsxs)("div",{className:"DescriptionPage__location",children:[Object($.jsx)(X.a,{className:"DescriptionPage__icon DescriptionPage__globe-icon"}),Object($.jsx)("p",{className:"text-small",children:o})]})]}),Object($.jsx)("p",{className:"text-regular-2 DescriptionPage__description",children:"".concat(r," (read more by applying on company site).")}),Object($.jsxs)("div",{className:"DescriptionPage__salaries",children:[u?Object($.jsxs)("p",{className:"text-regular-2 DescriptionPage__min-salary",children:["Min $:"," ",Object($.jsx)("span",{className:"DescriptionPage__salary",children:u})]}):null,l?Object($.jsxs)("p",{className:"text-regular-2 DescriptionPage__max-salary",children:["Max $:"," ",Object($.jsx)("span",{className:"DescriptionPage__salary",children:l})]}):null]})]}),Object($.jsx)("div",{className:"DescriptionPage__url",children:Object($.jsx)("a",{href:d,target:"_blank",rel:"noreferrer",children:Object($.jsx)("button",{className:"button-4 button-4--primary text-medium DescriptionPage__button",children:"Apply on company site"})})})]})})]})}),pe=function(){return Object($.jsxs)(g.b,{history:N,children:[Object($.jsx)(g.a,{path:"/",exact:!0,component:function(e){return Object($.jsx)(me,Object(d.a)({},e))}}),Object($.jsx)(g.a,{path:"/:page",exact:!0,component:function(e){return Object($.jsx)(me,Object(d.a)({},e))}}),Object($.jsx)(g.a,{path:"/jobs/:title+/:id",component:function(e){return Object($.jsx)(_e,Object(d.a)({},e))}})]})},be=(a(91),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c),Oe=Object(o.d)(v,be(Object(o.a)(l.a)));s.a.render(Object($.jsx)(i.a,{store:Oe,children:Object($.jsx)(pe,{})}),document.querySelector("#root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.be05562c.chunk.js.map