!function(e,t,o,n){"use strict";function s(o,n){d[o]&&(H.before(o,f),y=1,H.sectionName&&(t.location.hash=d[o]),n?(e(H.target).stop().scrollTop(l[o]),H.after(o,f)):(e(H.target).stop().animate({scrollTop:l[o]},H.scrollSpeed,H.easing),e(H.target).promise().done(function(){w=!1,H.after(o,f)})))}function i(e,t){for(var o=d.length;o>=0;o--)"string"==typeof e?d[o]===e&&(m=o,s(o,t)):o===e&&(m=o,s(o,t))}var c,u,a,h,r,l=[],d=[],f=[],p=[],m=0,y=1,v=(t.location.hash,!1),g=e(t).scrollTop(),b=!1,w=!1,M=!1,H={section:"section",sectionName:"section-name",easing:"easeOutExpo",scrollSpeed:1100,offset:0,scrollbars:!0,axis:"y",target:"html,body",before:function(){},after:function(){},afterResize:function(){}};e.scrollify=function(n){function i(t){e(H.target).stop().animate({scrollTop:t},H.scrollSpeed,H.easing)}function T(){e(H.section).each(function(o){e(this).css("height","auto").outerHeight()<e(t).height()?(e(this).css({height:e(t).height()}),p[o]=!1):p[o]=!0})}function E(o){e(H.section).each(function(o){l[o]=o>0?e(this).offset().top+H.offset:e(this).offset().top,d[o]=H.sectionName&&e(this).data(H.sectionName)?"#"+e(this).data(H.sectionName).replace(/ /g,"-"):"#"+(o+1),f[o]=e(this),t.location.hash===d[o]&&(m=o,v=!0)}),!0===o&&s(m,!1)}function S(){return g=e(t).scrollTop(),g>parseInt(l[m])?!1:!0}function D(){return g=e(t).scrollTop(),g<parseInt(l[m])+(f[m].height()-e(t).height())?!1:!0}e.easing.easeOutExpo=function(e,t,o,n,s){return t==s?o+n:n*(-Math.pow(2,-10*t/s)+1)+o},a={handleMousedown:function(){b=!1,M=!1},handleMouseup:function(){b=!0,M&&a.calculateNearest()},handleScroll:function(){c&&clearTimeout(c),c=setTimeout(function(){return M=!0,b===!1?!1:(b=!1,void a.calculateNearest())},200)},calculateNearest:function(){g=e(t).scrollTop();for(var o,n=1,i=l.length,c=0,u=Math.abs(l[0]-g);i>n;n++)o=Math.abs(l[n]-g),u>o&&(u=o,c=n);(D()||S())&&(m=c,s(c,!1))},wheelHandler:function(e,t){return p[m]||e.preventDefault(),t=t||-e.originalEvent.detail/3||e.originalEvent.wheelDelta/120,w?!1:void(0>t?m<l.length-1&&D()&&(e.preventDefault(),m++,w=!0,s(m,!1)):t>0&&m>0&&S()&&(e.preventDefault(),m--,w=!0,s(m,!1)))},keyHandler:function(e){38==e.keyCode?m>0&&S()&&(m--,s(m,!1)):40==e.keyCode&&m<l.length-1&&D()&&(m++,s(m,!1))},init:function(){H.scrollbars?(e(t).bind("mousedown",a.handleMousedown),e(t).bind("mouseup",a.handleMouseup),e(t).bind("scroll",a.handleScroll)):e("body").css({overflow:"hidden"}),e(o).bind("DOMMouseScroll mousewheel",a.wheelHandler),e(o).bind("keydown",a.keyHandler)}},h={touches:{touchSTART: {y:-1},touchmove:{y:-1},touchend:!1,direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(e){var t;if("undefined"!=typeof e&&"undefined"!=typeof e.touches)switch(t=e.touches[0],e.type){case"touchstart":h.touches.touchstart.y=t.pageY,h.touches.touchmove.y=-1,h.options.timeStamp=(new Date).getTime(),h.touches.touchend=!1;case"touchmove":h.touches.touchmove.y=t.pageY,h.touches.touchstart.y!==h.touches.touchmove.y&&(e.preventDefault(),h.options.timeStamp+h.options.timeGap<(new Date).getTime()&&0==h.touches.touchend&&(h.touches.touchend=!0,h.touches.touchstart.y>-1&&Math.abs(h.touches.touchmove.y-h.touches.touchstart.y)>h.options.distance&&(h.touches.touchstart.y<h.touches.touchmove.y?h.up():h.down())));break;case"touchend":h.touches[e.type]===!1&&(h.touches[e.type]=!0,h.touches.touchstart.y>-1&&h.touches.touchmove.y>-1&&(Math.abs(h.touches.touchmove.y-h.touches.touchstart.y)>h.options.distance&&(h.touches.touchstart.y<h.touches.touchmove.y?h.up():h.down()),h.touches.touchstart.y=-1))}},down:function(){m<=l.length-1&&(D()&&m<l.length-1?(m++,s(m,!1)):Math.floor(f[m].height()/e(t).height())>y?(i(parseInt(l[m])+e(t).height()*y),y+=1):i(parseInt(l[m])+(f[m].height()-e(t).height())))},up:function(){m>=0&&(S()&&m>0?(m--,s(m,!1)):y>2?(y-=1,i(parseInt(l[m])+e(t).height()*y)):(y=1,i(parseInt(l[m]))))},init:function(){o.addEventListener&&(o.addEventListener("touchstart",h.touchHandler,!1),o.addEventListener("touchmove",h.touchHandler,!1),o.addEventListener("touchend",h.touchHandler,!1))}},r={handleResize:function(){clearTimeout(u),u=setTimeout(function(){T(),E(!0),H.afterResize()},50)}},H=e.extend(H,n),T(),E(!1),v===!1&&H.sectionName?t.location.hash=d[0]:s(m,!1),a.init(),h.init(),e(t).bind("resize",r.handleResize)},e.scrollify.move=function(e){return e===n?!1:void i(e,!1)},e.scrollify.instantMove=function(e){return e===n?!1:void i(e,!0)},e.scrollify.next=function(){m<d.length&&(m+=1,s(m,!1))},e.scrollify.previous=function(){m>0&&(m-=1,s(m,!1))},e.scrollify.instantNext=function(){m<d.length&&(m+=1,s(m,!0))},e.scrollify.instantPrevious=function(){m>0&&(m-=1,s(m,!0))},e.scrollify.destroy=function(){e(H.section).each(function(){e(this).css("height","auto")}),e(t).unbind("resize",r.handleResize),H.scrollbars&&(e(t).unbind("mousedown",a.handleMousedown),e(t).unbind("mouseup",a.handleMouseup),e(t).unbind("scroll",a.handleScroll)),e(o).unbind("DOMMouseScroll mousewheel",a.wheelHandler),e(o).unbind("keydown",a.keyHandler),o.addEventListener&&(o.removeEventListener("touchstart",h.touchHandler,!1),o.removeEventListener("touchmove",h.touchHandler,!1),o.removeEventListener("touchend",h.touchHandler,!1)),l=d=f=p=null},e.scrollify.update=function(){r.handleResize()},e.scrollify.current=function(){return f[m]}}(jQuery,this,document);
