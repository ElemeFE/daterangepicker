!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.DateRangePicker=e()}}(function(){return function e(t,n,r){function a(s,o){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return a(n?n:e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)a(r[s]);return a}({1:[function(e,module,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=e("./tools/element").create,a=moment(),i=function(){function e(n,a){t(this,e);var i=n.el,s=n.config;this.el=r("div","drp-calendar"),this.calNum=s.numberOfCalendars,this.current=n.range?moment(n.range.start):n.date?moment(n.date):moment(),this.reload=a,this.lang=s.lang,this.draw(),i.appendChild(this.el)}return n(e,[{key:"draw",value:function(){moment.locale(this.lang||"zh-cn"),this.el.innerHTML="",this.month=[],this.current=this.current.subtract(Math.ceil(this.calNum/2),"month");for(var e=0;e<this.calNum;e++)this.current=this.current.date(1).add(1,"month"),this.drawHeader(e),this.drawMonth(e)}},{key:"drawHeader",value:function(e){var t=this;if(this.header=r("div","drp-header"),this.title=r("div","drp-month",this.current.format("MMM YYYY")),!e){var n=r("div","drp-right");n.addEventListener("click",function(){t.nextMonth()});var a=r("div","drp-left");a.addEventListener("click",function(){t.prevMonth()}),this.header.appendChild(n),this.header.appendChild(a)}this.header.appendChild(this.title),this.el.appendChild(this.header),this.drawWeekDays(),this.title.innerHTML=this.current.format("MMM YYYY")}},{key:"drawMonth",value:function(e){this.month.push(r("div","drp-month")),this.backFill(),this.currentMonth(),this.fowardFill(),this.el.appendChild(this.month[this.month.length-1])}},{key:"backFill",value:function(){var e=this.current.clone(),t=e.day();if(t){e.subtract(t+1,"days");for(var n=t;n>0;n--)this.drawDay(e.add(1,"days"))}}},{key:"fowardFill",value:function(){var e=this.current.clone().add(1,"months").subtract(1,"days"),t=e.day();if(6!==t)for(var n=t;6>n;n++)this.drawDay(e.add(1,"days"))}},{key:"currentMonth",value:function(){for(var e=this.current.clone();e.month()===this.current.month();)this.drawDay(e),e.add(1,"days")}},{key:"getWeek",value:function(e){this.week&&0!==e.day()||(this.week=r("div","drp-week"),this.month[this.month.length-1].appendChild(this.week))}},{key:"drawDay",value:function(e){this.getWeek(e);var t=r("div",this.getDayClass(e)),n=r("div","drp-day-number",e.format("DD"));n.setAttribute("date",e.format("YYYY-MM-DD")),t.appendChild(n),this.week.appendChild(t)}},{key:"getDayClass",value:function(e){var t=["drp-day"];return e.month()!==this.current.month()?t.push("drp-other"):a.isSame(e,"day")&&t.push("drp-today"),t.join(" ")}},{key:"drawWeekDays",value:function(e){var t=this;this.weekDays=r("div","drp-week-days");for(var n=[],a=0;7>a;a++)n.push(moment().weekday(a-1).format("ddd"));n.forEach(function(e){var n=r("span","drp-day",e);t.weekDays.appendChild(n)}),this.el.appendChild(this.weekDays)}},{key:"nextMonth",value:function(){this.current.subtract(Math.floor(this.calNum/2)-1,"months"),this.next=!0,this.draw(),this.reload()}},{key:"prevMonth",value:function(){this.current.subtract(Math.floor(this.calNum/2)+1,"months"),this.next=!1,this.draw(),this.reload()}}]),e}();module.exports=i},{"./tools/element":6}],2:[function(e,module,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=e("./tools/element").create,a=function(){function e(n){t(this,e);var r=n.el,a=n.config,i=n.selectFunc;this.el=r,this.config=a,this.selectFunc=i,this.hours=[],this.minutes=[],this.timeText=null,this.secondTimeText=null,this.init(n)}return n(e,[{key:"init",value:function(e){var t=this.config.type,n=r("div","drp-time");this.timeText=r("div","drp-time-text"),"single"===t?(n.appendChild(this.timeText),n.appendChild(this.createInput(!0,e.date)),n.appendChild(this.createInput(!1,e.date))):("range"===t||"terminal"===t)&&(this.secondTimeText=r("div","drp-time-text"),n.appendChild(this.insertItemBox(this.timeText,this.createInput(!0,e.range.start,!0),this.createInput(!1,e.range.start,!0))),n.appendChild(this.insertItemBox(this.secondTimeText,this.createInput(!0,e.range.end,!1),this.createInput(!1,e.range.end,!1)))),this.el.appendChild(n)}},{key:"insertItemBox",value:function(e,t,n){var a=r("div","drp-time-item");return a.appendChild(e),a.appendChild(t),a.appendChild(n),a}},{key:"createInput",value:function(e,t,n){var a=this,i=r("input","drp-time-input"),s=e?t.hours():t.minutes();return i.type="range",i.min=0,i.max=e?23:59,i.defaultValue=s,this.setParams(e,t,n),i.addEventListener("input",function(r){t=e?t.hours(r.target.value):t.minutes(r.target.value),a.setParams(e,t,n),a.selectFunc(null)}),i}},{key:"setParams",value:function(e,t,n){var r=this.config.type;"single"===r?(this.timeText.innerHTML=t.format("LT"),e?this.hours[0]=t.format("HH"):this.minutes[0]=t.format("mm")):("range"===r||"terminal"===r)&&(n?(this.timeText.innerHTML=t.format("LT"),e?this.hours[0]=t.format("HH"):this.minutes[0]=t.format("mm")):(this.secondTimeText.innerHTML=t.format("LT"),e?this.hours[1]=t.format("HH"):this.minutes[1]=t.format("mm")))}}]),e}();module.exports=a},{"./tools/element":6}],3:[function(e,module,exports){"use strict";module.exports=function(e,t,n){e.target.className.split(" ").forEach(function(r){"function"==typeof t[r]&&t[r](e.target,n)})}},{}],4:[function(e,module,exports){"use strict";var t=e("./../tools/getElementsByAttribute"),n=e("./../tools/element"),r=e("./../tools/getter");module.exports={reload:function(e,t){var a=(e.date,e.range,e.config),i=(e.rangeElements,e.interval,e.el),s=e.firstItem,o=e.targetElements;switch(a.type){case"single":t&&(e.range=null),e.targetElements=n.exchangeClass(o,r.format(e.date),i,["focus"]);break;case"range":t&&(e.date=null),e.rangeElements=n.choose(e.rangeElements,r.format(e.range.start),r.format(e.range.end),i,s);break;case"terminal":t&&(e.date=null,e.interval=e.range.diff("days")),e.rangeElements=n.choose(e.rangeElements,r.format(e.range.start),r.format(e.range.end),i)}},click:{"drp-day-number":function(e,a){var i=a.range,s=a.config,o=a.rangeElements,l=a.el,c=a.firstItem,u=a.targetElements,h=(a.interval,a.selectFunc),f=s.maxDate,d=s.minDate,m=r.getDate(e),p=moment(m);f&&p.isAfter(f)||d&&p.isBefore(d)||("single"===s.type?(a.date=p,h&&h(a.date),a.targetElements=n.exchangeClass(u,m,l,["focus"])):"range"===s.type?c?(a.range=moment(c).isBefore(m)?moment.range([c,m]):moment.range([m,c]),n.exChange(o),h&&h(a.range),a.firstItem=null):(n.clear(l,i),a.firstItem=m,a.targetElements=n.exchangeClass(u,m,l,["active"]),m=t(l,"date",a.firstItem),a.rangeElements=[m,[],m]):"terminal"===s.type&&(i&&n.clear(l,i),a.range=moment.range([m,c]),n.exChange(o),h&&h(a.range),a.firstItem=null))}},hover:{"drp-day-number":function(e,a){var i=(a.range,a.config),s=a.rangeElements,o=a.el,l=a.firstItem,c=(a.targetElements,a.interval),u=i.maxDate,h=i.minDate,f=r.getDate(e),d=c?moment(f).add(c,"days"):moment(f);u&&d.isAfter(u)||h&&d.isBefore(h)||o&&(t(o,"date",f).forEach(function(t){t!==e&&(t.classList.add("hover"),e.addEventListener("mouseout",function(){t.classList.remove("hover")}))}),"range"===i.type&&l&&(moment(l).isBefore(f)?a.rangeElements=n.choose(s,l,f,o,l):a.rangeElements=n.choose(s,f,l,o,l)),"terminal"===i.type&&(a.firstItem=r.format(d),a.rangeElements=n.choose(s,f,a.firstItem,o,a.firstItem)))}},leave:function(e){var t=e.config,r=e.rangeElements,a=e.targetElements;("range"===t.type||"terminal"===t.type)&&(n.clearRange(r,a),e.rangeElements=[[],[],[]],e.targetElements=[],e.firstItem=null)}}},{"./../tools/element":6,"./../tools/getElementsByAttribute":7,"./../tools/getter":8}],5:[function(e,module,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=e("./Calendar"),a=e("./TimePicker"),i=e("./events/bind"),s=e("./events/events"),o=s.click,l=s.hover,c=s.reload,u=s.leave,h=e("./tools/mouseleave"),f=function(){function e(n,r){var a=this;t(this,e);var i=r.type,s=r.date,o=r.range,l=r.onSelect,c=r.lang;c=c||"zh-cn",this.el=n,this.config=r,this.targetElements=[],this.rangeElements=[[],[],[]],this.firstItem=null,this.range=o?function(){return o.start=o.start.locale(c),o.end=o.end.locale(c),o}():null,this.date=s?s.locale(c):null,this.interval=null,this.time=null,this.selectFunc=l?function(e){if(!a.time)return void l(e);var t=a.time,n=t.hours,r=t.minutes;"single"===i?(e=e||a.date,a.date=e.hours(n[0]).minutes(r[0]),l(a.date)):("range"===i||"terminal"===i)&&(e=e||a.range,a.range.start=e.start.hours(n[0]).minutes(r[0]),a.range.end=e.end.hours(n[1]).minutes(r[1]),l(a.range))}:null,this.init()}return n(e,[{key:"init",value:function(){var e=this,t=this.el,n=this.config;new r(this,function(){c(e)}),n.time&&(this.time=new a(this)),t.className="drp",t.addEventListener("click",function(t){i(t,o,e)}),t.addEventListener("mouseover",function(n){i(n,l,e),h.getTarget(t)||h.setTarget(t)}),h.add(t,function(){u(e)}),c(this,!0)}},{key:"set",value:function(e,t){this[e]&&(this[e]=t,c(this))}}]),e}();module.exports=f},{"./Calendar":1,"./TimePicker":2,"./events/bind":3,"./events/events":4,"./tools/mouseleave":9}],6:[function(e,module,exports){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var n=e("./getElementsByAttribute"),r=e("./getter"),a=r.classArr,i=r.classFunc,s=r.format,o=r.getDate,l=function(e,t){var n=!0;return t.forEach(function(t){e.classList.contains(t)||(n=!1)}),n},c=function(e,n){var r=e.classList;if(l(e,n)){var a=e.className.split(" ");n.forEach(function(e){var t=a.indexOf(e);-1!==t&&a.splice(t,1)}),r.contains("hover")&&3===a.length||!r.contains("hover")&&2===a.length?r.remove("active"):r.remove.apply(r,t(n))}};module.exports={hasChild:function(e,t){var n=!1,r=function a(e){e===t&&(n=!0),e.childNodes&&e.childNodes.length&&a(e.childNodes[0]),e.nextSibling&&a(e.nextSibling)};return r(e),n},create:function(e,t,n){var r=document.createElement(e);return t&&(r.className=t),n&&(r.innderText=r.textContent=n),r},choose:function(e,r,a,i,o){var l=[],c=[],u=[],h=moment.range(r,a);h.by("days",function(e){var o=n(i,"date",s(e));e.isAfter(r)?e.isBefore(a)?c.push.apply(c,t(o)):u.push.apply(u,t(o)):l.push.apply(l,t(o))});var f=[l,c,u];return e=this.change(e,f,o),l[0]===u[0]&&l.forEach(function(e){e.classList.add("start","end","segment")}),e},change:function(e,n,r){var s=null;return e.forEach(function(e,t){s=i(r,a[t]).split(" "),e.forEach(function(e){c(e,s)})}),n.forEach(function(n,o){s=i(r,a[o]).split(" "),n.forEach(function(n){if(!l(n,s)||e[0]===e[2]){var r;(r=n.classList).add.apply(r,t(s))}})}),n},clear:function(e,t){var r=null,i=null,o=null,l=moment.range([moment(t.start),moment(t.end)]);l.start.set({hour:0,minute:0,second:0}),l.by("days",function(t){switch(o=s(t)){case s(l.start):r=0;break;case s(l.end):r=2;break;default:r=1}i=n(e,"date",o),i.forEach(function(e){e.classList.remove("focus",a[r])})})},clearRange:function(e,t){e.forEach(function(e,t){e.forEach(function(e){c(e,["active",a[t]])})}),t.forEach(function(e){c(e,["active"])})},exChange:function(e){return e.forEach(function(e,t){e.forEach(function(e){e.classList.remove("active"),e.classList.add("focus",a[t])})}),e},exchangeClass:function(e,t,r,a){return a=a||"",e.forEach(function(e){o(e)!==t&&e&&c(e,a)}),e=[],n(r,"date",t).forEach(function(t){t.classList.add(a),e.push(t)}),e}}},{"./getElementsByAttribute":7,"./getter":8}],7:[function(e,module,exports){"use strict";var t=function(e,t,n){return Array.prototype.slice.call(e.querySelectorAll("["+t+"='"+n+"']"))};module.exports=t},{}],8:[function(e,module,exports){"use strict";module.exports={classArr:["start","segment","end"],getDate:function(e){return e.getAttribute("date")},format:function(e){return e.format("YYYY-MM-DD")},classFunc:function(e,t){return(e?"active ":"focus ")+t}}},{}],9:[function(e,module,exports){"use strict";var t=e("./element").hasChild,n=null,r=[];document.body.addEventListener("mouseover",function(e){n&&!t(n,e.target)&&(r.forEach(function(e){n===e.el&&e.callback()}),n=null)}),module.exports={add:function(e,t){r.push({el:e,callback:t})},getTarget:function(){return n},setTarget:function(e){n=e}}},{"./element":6}]},{},[5])(5)});