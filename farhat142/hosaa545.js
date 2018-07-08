/*
 *      ___  __    _____  _  _  ____  _  _  ___    ___  _  _  ___  ____  ____  __  __
 *  ./ __)(  )  (  _  )( \( )(_  _)( \( )/ __)  / __)( \/ )/ __)(_  _)( ___)(  \/  )
 *   ( (__  )(__  )(_)(  )  (  _)(_  )  (( (_-.  \__ \ \  / \__ \  )(   )__)  )    (
 *  .\___)(____)(_____)(_)\_)(____)(_)\_)\___/  (___/ (__) (___/ (__) (____)(_/\/\_)
 *
 * Script For th3farhat Cloning Blogger By th3farhat - https://www.th3farhat.com
*/
// JQuery hover event with timeout by Taufik Nurrohman https://plus.google.com/108949996304093815163/about
!function(n){n.fn.hoverTimeout=function(t,u,e,i){return this.each(function(){var o=null,c=n(this);c.hover(function(){clearTimeout(o),o=setTimeout(function(){u.call(c)},t)},function(){clearTimeout(o),o=setTimeout(function(){i.call(c)},e)})})}}(jQuery);

// jQuery OwlCarousel v1.3.2 
 !function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);

// CryptoJS v3.1.2
var CryptoJS=CryptoJS||function(t,e){var r={},i=r.lib={},n=function(){},s=i.Base={extend:function(t){n.prototype=this;var e=new n;return t&&e.mixIn(t),e.hasOwnProperty("init")||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},o=i.WordArray=s.extend({init:function(t,r){t=this.words=t||[],this.sigBytes=r!=e?r:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes;if(t=t.sigBytes,this.clamp(),i%4)for(var n=0;t>n;n++)e[i+n>>>2]|=(r[n>>>2]>>>24-8*(n%4)&255)<<24-8*((i+n)%4);else if(65535<r.length)for(n=0;t>n;n+=4)e[i+n>>>2]=r[n>>>2];else e.push.apply(e,r);return this.sigBytes+=t,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-8*(r%4),e.length=t.ceil(r/4)},clone:function(){var t=s.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],i=0;e>i;i+=4)r.push(4294967296*t.random()|0);return new o.init(r,e)}}),c=r.enc={},a=c.Hex={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],i=0;t>i;i++){var n=e[i>>>2]>>>24-8*(i%4)&255;r.push((n>>>4).toString(16)),r.push((15&n).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,r=[],i=0;e>i;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-4*(i%8);return new o.init(r,e/2)}},f=c.Latin1={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],i=0;t>i;i++)r.push(String.fromCharCode(e[i>>>2]>>>24-8*(i%4)&255));return r.join("")},parse:function(t){for(var e=t.length,r=[],i=0;e>i;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-8*(i%4);return new o.init(r,e)}},h=c.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},u=i.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,i=r.words,n=r.sigBytes,s=this.blockSize,c=n/(4*s),c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);if(e=c*s,n=t.min(4*e,n),e){for(var a=0;e>a;a+=s)this._doProcessBlock(i,a);a=i.splice(0,e),r.sigBytes-=n}return new o.init(a,n)},clone:function(){var t=s.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});i.Hasher=u.extend({cfg:s.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new p.HMAC.init(t,r).finalize(e)}}});var p=r.algo={};return r}(Math);!function(){var t=CryptoJS,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp(),t=[];for(var n=0;r>n;n+=3)for(var s=(e[n>>>2]>>>24-8*(n%4)&255)<<16|(e[n+1>>>2]>>>24-8*((n+1)%4)&255)<<8|e[n+2>>>2]>>>24-8*((n+2)%4)&255,o=0;4>o&&r>n+.75*o;o++)t.push(i.charAt(s>>>6*(3-o)&63));if(e=i.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var r=t.length,i=this._map,n=i.charAt(64);n&&(n=t.indexOf(n),-1!=n&&(r=n));for(var n=[],s=0,o=0;r>o;o++)if(o%4){var c=i.indexOf(t.charAt(o-1))<<2*(o%4),a=i.indexOf(t.charAt(o))>>>6-2*(o%4);n[s>>>2]|=(c|a)<<24-8*(s%4),s++}return e.create(n,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(t){function e(t,e,r,i,n,s,o){return t=t+(e&r|~e&i)+n+o,(t<<s|t>>>32-s)+e}function r(t,e,r,i,n,s,o){return t=t+(e&i|r&~i)+n+o,(t<<s|t>>>32-s)+e}function i(t,e,r,i,n,s,o){return t=t+(e^r^i)+n+o,(t<<s|t>>>32-s)+e}function n(t,e,r,i,n,s,o){return t=t+(r^(e|~i))+n+o,(t<<s|t>>>32-s)+e}for(var s=CryptoJS,o=s.lib,c=o.WordArray,a=o.Hasher,o=s.algo,f=[],h=0;64>h;h++)f[h]=4294967296*t.abs(t.sin(h+1))|0;o=o.MD5=a.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,s){for(var o=0;16>o;o++){var c=s+o,a=t[c];t[c]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var o=this._hash.words,c=t[s+0],a=t[s+1],h=t[s+2],u=t[s+3],p=t[s+4],d=t[s+5],l=t[s+6],y=t[s+7],_=t[s+8],v=t[s+9],g=t[s+10],B=t[s+11],m=t[s+12],x=t[s+13],S=t[s+14],k=t[s+15],z=o[0],C=o[1],w=o[2],D=o[3],z=e(z,C,w,D,c,7,f[0]),D=e(D,z,C,w,a,12,f[1]),w=e(w,D,z,C,h,17,f[2]),C=e(C,w,D,z,u,22,f[3]),z=e(z,C,w,D,p,7,f[4]),D=e(D,z,C,w,d,12,f[5]),w=e(w,D,z,C,l,17,f[6]),C=e(C,w,D,z,y,22,f[7]),z=e(z,C,w,D,_,7,f[8]),D=e(D,z,C,w,v,12,f[9]),w=e(w,D,z,C,g,17,f[10]),C=e(C,w,D,z,B,22,f[11]),z=e(z,C,w,D,m,7,f[12]),D=e(D,z,C,w,x,12,f[13]),w=e(w,D,z,C,S,17,f[14]),C=e(C,w,D,z,k,22,f[15]),z=r(z,C,w,D,a,5,f[16]),D=r(D,z,C,w,l,9,f[17]),w=r(w,D,z,C,B,14,f[18]),C=r(C,w,D,z,c,20,f[19]),z=r(z,C,w,D,d,5,f[20]),D=r(D,z,C,w,g,9,f[21]),w=r(w,D,z,C,k,14,f[22]),C=r(C,w,D,z,p,20,f[23]),z=r(z,C,w,D,v,5,f[24]),D=r(D,z,C,w,S,9,f[25]),w=r(w,D,z,C,u,14,f[26]),C=r(C,w,D,z,_,20,f[27]),z=r(z,C,w,D,x,5,f[28]),D=r(D,z,C,w,h,9,f[29]),w=r(w,D,z,C,y,14,f[30]),C=r(C,w,D,z,m,20,f[31]),z=i(z,C,w,D,d,4,f[32]),D=i(D,z,C,w,_,11,f[33]),w=i(w,D,z,C,B,16,f[34]),C=i(C,w,D,z,S,23,f[35]),z=i(z,C,w,D,a,4,f[36]),D=i(D,z,C,w,p,11,f[37]),w=i(w,D,z,C,y,16,f[38]),C=i(C,w,D,z,g,23,f[39]),z=i(z,C,w,D,x,4,f[40]),D=i(D,z,C,w,c,11,f[41]),w=i(w,D,z,C,u,16,f[42]),C=i(C,w,D,z,l,23,f[43]),z=i(z,C,w,D,v,4,f[44]),D=i(D,z,C,w,m,11,f[45]),w=i(w,D,z,C,k,16,f[46]),C=i(C,w,D,z,h,23,f[47]),z=n(z,C,w,D,c,6,f[48]),D=n(D,z,C,w,y,10,f[49]),w=n(w,D,z,C,S,15,f[50]),C=n(C,w,D,z,d,21,f[51]),z=n(z,C,w,D,m,6,f[52]),D=n(D,z,C,w,u,10,f[53]),w=n(w,D,z,C,g,15,f[54]),C=n(C,w,D,z,a,21,f[55]),z=n(z,C,w,D,_,6,f[56]),D=n(D,z,C,w,k,10,f[57]),w=n(w,D,z,C,l,15,f[58]),C=n(C,w,D,z,x,21,f[59]),z=n(z,C,w,D,p,6,f[60]),D=n(D,z,C,w,B,10,f[61]),w=n(w,D,z,C,h,15,f[62]),C=n(C,w,D,z,v,21,f[63]);o[0]=o[0]+z|0,o[1]=o[1]+C|0,o[2]=o[2]+w|0,o[3]=o[3]+D|0},_doFinalize:function(){var e=this._data,r=e.words,i=8*this._nDataBytes,n=8*e.sigBytes;r[n>>>5]|=128<<24-n%32;var s=t.floor(i/4294967296);for(r[(n+64>>>9<<4)+15]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r[(n+64>>>9<<4)+14]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e.sigBytes=4*(r.length+1),this._process(),e=this._hash,r=e.words,i=0;4>i;i++)n=r[i],r[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8);return e},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}}),s.MD5=a._createHelper(o),s.HmacMD5=a._createHmacHelper(o)}(Math),function(){var t=CryptoJS,e=t.lib,r=e.Base,i=e.WordArray,e=t.algo,n=e.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:e.MD5,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,n=r.hasher.create(),s=i.create(),o=s.words,c=r.keySize,r=r.iterations;o.length<c;){a&&n.update(a);var a=n.update(t).finalize(e);n.reset();for(var f=1;r>f;f++)a=n.finalize(a),n.reset();s.concat(a)}return s.sigBytes=4*c,s}});t.EvpKDF=function(t,e,r){return n.create(r).compute(t,e)}}(),CryptoJS.lib.Cipher||function(t){var e=CryptoJS,r=e.lib,i=r.Base,n=r.WordArray,s=r.BufferedBlockAlgorithm,o=e.enc.Base64,c=e.algo.EvpKDF,a=r.Cipher=s.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(t){return{encrypt:function(e,r,i){return("string"==typeof r?l:d).encrypt(t,e,r,i)},decrypt:function(e,r,i){return("string"==typeof r?l:d).decrypt(t,e,r,i)}}}});r.StreamCipher=a.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var f=e.mode={},h=function(e,r,i){var n=this._iv;n?this._iv=t:n=this._prevBlock;for(var s=0;i>s;s++)e[r+s]^=n[s]},u=(r.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}})).extend();u.Encryptor=u.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;h.call(this,t,e,i),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),u.Decryptor=u.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);r.decryptBlock(t,e),h.call(this,t,e,i),this._prevBlock=n}}),f=f.CBC=u,u=(e.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,r=r-t.sigBytes%r,i=r<<24|r<<16|r<<8|r,s=[],o=0;r>o;o+=4)s.push(i);r=n.create(s,r),t.concat(r)},unpad:function(t){t.sigBytes-=255&t.words[t.sigBytes-1>>>2]}},r.BlockCipher=a.extend({cfg:a.cfg.extend({mode:f,padding:u}),reset:function(){a.reset.call(this);var t=this.cfg,e=t.iv,t=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=t.createEncryptor;else r=t.createDecryptor,this._minBufferSize=1;this._mode=r.call(t,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else e=this._process(!0),t.unpad(e);return e},blockSize:4});var p=r.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),f=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext;return t=t.salt,(t?n.create([1398893684,1701076831]).concat(t).concat(e):e).toString(o)},parse:function(t){t=o.parse(t);var e=t.words;if(1398893684==e[0]&&1701076831==e[1]){var r=n.create(e.slice(2,4));e.splice(0,4),t.sigBytes-=16}return p.create({ciphertext:t,salt:r})}},d=r.SerializableCipher=i.extend({cfg:i.extend({format:f}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i);return e=n.finalize(e),n=n.cfg,p.create({ciphertext:e,key:r,iv:n.iv,algorithm:t,mode:n.mode,padding:n.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),e=(e.kdf={}).OpenSSL={execute:function(t,e,r,i){return i||(i=n.random(8)),t=c.create({keySize:e+r}).compute(t,i),r=n.create(t.words.slice(e),4*r),t.sigBytes=4*e,p.create({key:t,iv:r,salt:i})}},l=r.PasswordBasedCipher=d.extend({cfg:d.cfg.extend({kdf:e}),encrypt:function(t,e,r,i){return i=this.cfg.extend(i),r=i.kdf.execute(r,t.keySize,t.ivSize),i.iv=r.iv,t=d.encrypt.call(this,t,e,r.key,i),t.mixIn(r),t},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),r=i.kdf.execute(r,t.keySize,t.ivSize,e.salt),i.iv=r.iv,d.decrypt.call(this,t,e,r.key,i)}})}(),function(){for(var t=CryptoJS,e=t.lib.BlockCipher,r=t.algo,i=[],n=[],s=[],o=[],c=[],a=[],f=[],h=[],u=[],p=[],d=[],l=0;256>l;l++)d[l]=128>l?l<<1:l<<1^283;for(var y=0,_=0,l=0;256>l;l++){var v=_^_<<1^_<<2^_<<3^_<<4,v=v>>>8^255&v^99;i[y]=v,n[v]=y;var g=d[y],B=d[g],m=d[B],x=257*d[v]^16843008*v;s[y]=x<<24|x>>>8,o[y]=x<<16|x>>>16,c[y]=x<<8|x>>>24,a[y]=x,x=16843009*m^65537*B^257*g^16843008*y,f[v]=x<<24|x>>>8,h[v]=x<<16|x>>>16,u[v]=x<<8|x>>>24,p[v]=x,y?(y=g^d[d[d[m^g]]],_^=d[d[_]]):y=_=1}var S=[0,1,2,4,8,16,32,64,128,27,54],r=r.AES=e.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes/4,t=4*((this._nRounds=r+6)+1),n=this._keySchedule=[],s=0;t>s;s++)if(r>s)n[s]=e[s];else{var o=n[s-1];s%r?r>6&&4==s%r&&(o=i[o>>>24]<<24|i[o>>>16&255]<<16|i[o>>>8&255]<<8|i[255&o]):(o=o<<8|o>>>24,o=i[o>>>24]<<24|i[o>>>16&255]<<16|i[o>>>8&255]<<8|i[255&o],o^=S[s/r|0]<<24),n[s]=n[s-r]^o}for(e=this._invKeySchedule=[],r=0;t>r;r++)s=t-r,o=r%4?n[s]:n[s-4],e[r]=4>r||4>=s?o:f[i[o>>>24]]^h[i[o>>>16&255]]^u[i[o>>>8&255]]^p[i[255&o]]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,o,c,a,i)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,f,h,u,p,n),r=t[e+1],t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,s,o,c){for(var a=this._nRounds,f=t[e]^r[0],h=t[e+1]^r[1],u=t[e+2]^r[2],p=t[e+3]^r[3],d=4,l=1;a>l;l++)var y=i[f>>>24]^n[h>>>16&255]^s[u>>>8&255]^o[255&p]^r[d++],_=i[h>>>24]^n[u>>>16&255]^s[p>>>8&255]^o[255&f]^r[d++],v=i[u>>>24]^n[p>>>16&255]^s[f>>>8&255]^o[255&h]^r[d++],p=i[p>>>24]^n[f>>>16&255]^s[h>>>8&255]^o[255&u]^r[d++],f=y,h=_,u=v;y=(c[f>>>24]<<24|c[h>>>16&255]<<16|c[u>>>8&255]<<8|c[255&p])^r[d++],_=(c[h>>>24]<<24|c[u>>>16&255]<<16|c[p>>>8&255]<<8|c[255&f])^r[d++],v=(c[u>>>24]<<24|c[p>>>16&255]<<16|c[f>>>8&255]<<8|c[255&h])^r[d++],p=(c[p>>>24]<<24|c[f>>>16&255]<<16|c[h>>>8&255]<<8|c[255&u])^r[d++],t[e]=y,t[e+1]=_,t[e+2]=v,t[e+3]=p},keySize:8});t.AES=e._createHelper(r)}();

//Smoothscroll
function ssc_init(){if(document.body){var e=document.body,s=document.documentElement,c=window.innerHeight,t=e.scrollHeight;if(ssc_root=document.compatMode.indexOf("CSS")>=0?s:e,ssc_activeElement=e,ssc_initdone=!0,top!=self)ssc_frame=!0;else if(t>c&&(e.offsetHeight<=c||s.offsetHeight<=c)&&(ssc_root.style.height="auto",ssc_root.offsetHeight<=c)){var o=document.createElement("div");o.style.clear="both",e.appendChild(o)}ssc_fixedback||(e.style.backgroundAttachment="scroll",s.style.backgroundAttachment="scroll"),ssc_keyboardsupport&&ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,s,c,t){if(t||(t=1e3),ssc_directionCheck(s,c),ssc_que.push({x:s,y:c,lastX:0>s?.99:-.99,lastY:0>c?.99:-.99,start:+new Date}),!ssc_pending){var o=function(){for(var r=+new Date,n=0,a=0,i=0;i<ssc_que.length;i++){var l=ssc_que[i],_=r-l.start,u=_>=ssc_animtime,d=u?1:_/ssc_animtime;ssc_pulseAlgorithm&&(d=ssc_pulse(d));var f=l.x*d-l.lastX>>0,m=l.y*d-l.lastY>>0;n+=f,a+=m,l.lastX+=f,l.lastY+=m,u&&(ssc_que.splice(i,1),i--)}if(s){var h=e.scrollLeft;e.scrollLeft+=n,n&&e.scrollLeft===h&&(s=0)}if(c){var p=e.scrollTop;e.scrollTop+=a,a&&e.scrollTop===p&&(c=0)}s||c||(ssc_que=[]),ssc_que.length?setTimeout(o,t/ssc_framerate+1):ssc_pending=!1};setTimeout(o,0),ssc_pending=!0}}function ssc_wheel(e){ssc_initdone||ssc_init();var s=e.target,c=ssc_overflowingAncestor(s);if(!c||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(s,"embed")&&/\.pdf/i.test(s.src))return!0;var t=e.wheelDeltaX||0,o=e.wheelDeltaY||0;t||o||(o=e.wheelDelta||0),Math.abs(t)>1.2&&(t*=ssc_stepsize/120),Math.abs(o)>1.2&&(o*=ssc_stepsize/120),ssc_scrollArray(c,-t,-o),e.preventDefault()}function ssc_keydown(e){var s=e.target,c=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(s.nodeName)||s.isContentEditable||e.defaultPrevented||c)return!0;if(ssc_isNodeName(s,"button")&&e.keyCode===ssc_key.spacebar)return!0;var t,o=0,r=0,n=ssc_overflowingAncestor(ssc_activeElement),a=n.clientHeight;switch(n==document.body&&(a=window.innerHeight),e.keyCode){case ssc_key.up:r=-ssc_arrowscroll;break;case ssc_key.down:r=ssc_arrowscroll;break;case ssc_key.spacebar:t=e.shiftKey?1:-1,r=-t*a*.9;break;case ssc_key.pageup:r=.9*-a;break;case ssc_key.pagedown:r=.9*a;break;case ssc_key.home:r=-n.scrollTop;break;case ssc_key.end:var i=n.scrollHeight-n.scrollTop-a;r=i>0?i+10:0;break;case ssc_key.left:o=-ssc_arrowscroll;break;case ssc_key.right:o=ssc_arrowscroll;break;default:return!0}ssc_scrollArray(n,o,r),e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,s){for(var c=e.length;c--;)ssc_cache[ssc_uniqueID(e[c])]=s;return s}function ssc_overflowingAncestor(e){var s=[],c=ssc_root.scrollHeight;do{var t=ssc_cache[ssc_uniqueID(e)];if(t)return ssc_setCache(s,t);if(s.push(e),c===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<c)return ssc_setCache(s,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return ssc_setCache(s,e)}while(e=e.parentNode)}function ssc_addEvent(e,s,c){window.addEventListener(e,s,c||!1)}function ssc_removeEvent(e,s,c){window.removeEventListener(e,s,c||!1)}function ssc_isNodeName(e,s){return e.nodeName.toLowerCase()===s.toLowerCase()}function ssc_directionCheck(e,s){e=e>0?1:-1,s=s>0?1:-1,(ssc_direction.x!==e||ssc_direction.y!==s)&&(ssc_direction.x=e,ssc_direction.y=s,ssc_que=[])}function ssc_pulse_(e){var s,c,t;return e*=ssc_pulseScale,1>e?s=e-(1-Math.exp(-e)):(c=Math.exp(-1),e-=1,t=1-Math.exp(-e),s=c+t*(1-c)),s*ssc_pulseNormalize}function ssc_pulse(e){return e>=1?1:0>=e?0:(1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)),ssc_pulse_(e))}var ssc_framerate=150,ssc_animtime=500,ssc_stepsize=150,ssc_pulseAlgorithm=!0,ssc_pulseScale=6,ssc_pulseNormalize=1,ssc_keyboardsupport=!0,ssc_arrowscroll=50,ssc_frame=!1,ssc_direction={x:0,y:0},ssc_initdone=!1,ssc_fixedback=!0,ssc_root=document.documentElement,ssc_activeElement,ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},ssc_que=[],ssc_pending=!1,ssc_cache={};setInterval(function(){ssc_cache={}},1e4);var ssc_uniqueID=function(){var e=0;return function(s){return s.ssc_uniqueID||(s.ssc_uniqueID=e++)}}(),ischrome=/chrome/.test(navigator.userAgent.toLowerCase());ischrome&&(ssc_addEvent("mousedown",ssc_mousedown),ssc_addEvent("mousewheel",ssc_wheel),ssc_addEvent("load",ssc_init));

(function(md) {
	function e(e, a) {
	    var s = '<li><ul class="' + e + '">';
	    md('li', a).each(function() {
	        var a = md(this).text(),
	            i = a.substr(0, 1),
	            o = a.substr(1),
	            r = md(this).find('i').length ? '<i class="' + md(this).find('i').attr('class') + '"></i>' : '',
	            n = md(this).find('a').attr('href');
	        s = '_' == i || '-' == i ? s + ('<li><a href="' + n + '">' + r + o + '</a></li>') : s + ('</ul></li><li><a href="' + n + '">' + r + a + '</a><ul class="' + e + '">')
	    }), s += '</ul></li>', md(a).html(s), md('ul', a).each(function() {
	        var e = md(this);
	        0 == e.html().replace(/\s| /g, '').length && e.remove()
	    }), md('li', a).each(function() {
	        var e = md(this);
	        0 == e.html().replace(/\s| /g, '').length && e.remove()
	    })
	}
	md('.menu').each(function() {
	    e('sub-menu', this),md(this).addClass('show')
	}), md('.sub-menu').each(function() {
	    e('sub-sub-menu', this)
	})
	md('body').append('<div class="responsive-menu"><div class="res-menu-area"><div class="resmenu-innner"><div class="res-menu-inner"><ul class="res-menu"></ul></div></div></div></div>'), md('.menu').each(function() {
	    var e = md(this);
	    e.parents('.widget'), e = e.html(), md('.res-menu').append(e)
	})
	md('.sub-menu').parent('li').addClass('submenu'),md('.sub-sub-menu').parent('li').addClass('submenu2');
	md('nav .menu').append('<div class="indicator"></div>')
	md(".indicator").css("left",md("nav li").first().offset().left)
	md("ul.menu > li").mouseenter(function() {
	    var kirind = md(this).offset().left; kiri1 = md("nav li").first().offset().left
		md(".indicator").css("left",kirind)
	}).mouseleave(function() {md(".indicator").css("left",kiri1)})
	md(".menu .submenu,.menu .submenu2").hoverTimeout(500, function() {
	    md(this).children('ul,.mega-menu').slideDown(500)
	}, 300, function() {
	    md(this).children('ul,.mega-menu').slideUp(500)
	})
	md('#seacrh-btn').click( function(){
	  md('body').addClass('mode-search');
	  md('.input-search').focus();
	});

	md('.icon-close').click( function(){
	  md('body').removeClass('mode-search');
	});
	md('.tombol-responsive').on('click', function() {
		  if (md('.tombol-menu').hasClass('icon-to-arrow')) {
	        md('.tombol-menu').removeClass('icon-to-arrow');
	        md('.tombol-menu').addClass('icon-from-arrow');
	      } else {
	        md('.tombol-menu').removeClass('icon-from-arrow');
	        md('.tombol-menu').addClass('icon-to-arrow');
	      }
	      md('.responsive-menu').toggleClass('active')
	      md('body').toggleClass('show-res-menu')
	});
	md('.res-menu .submenu > a, .res-menu .submenu2 > a').attr("href", "javascript:;").click(function(){
		if (!md(this).parent('li').hasClass('submenu2')){
			md('.open').removeClass('open')
			md('.sub-menu,.sub-sub-menu,.mega-menu').slideUp(500)
		}
		b = md(this).next()
		if(b.is(":visible")) {
	        md(this).removeClass("open");
	        b.slideUp(500)
	    } else {
	        md(this).addClass("open");
	        b.slideDown(500)
	    }
	})
	md("body").click(function(e) {
	if (md('.tombol-menu').hasClass('icon-to-arrow')) {
	    0 === md(e.target).closest(".responsive-menu,.tombol-responsive").length && md('.tombol-responsive').click()
	}
	});
	md(function() {
	    function a(a, t, e) {
	        $.ajax({
	            type: "GET",
	            url: a,
	            async: !0,
	            contentType: "application/json",
	            dataType: "jsonp",
	            success: function(a) {
	                var i = a.feed.entry;
	                if (i){
	                  var z = '';
	                  for (var s = 0; s < i.length; s++) {
	                      for (var n = i[s], l = 0; l < n.link.length; l++)
	                          if ("alternate" == n.link[l].rel) {
	                              var r = n.link[l].href;
	                              break
	                          }
	                      try {
	                          var d = n.media$thumbnail.url.replace("s72-c", "w225-h150-c")
	                      } catch (c) {
	                          var d
	                      }
	                      var o = n.title.$t,
	                          v = getmeta(n.published.$t),
	                          h = n.category[0].term;
	                      if (-1 !== d.indexOf("img.youtube.com")) {
	                          d = n.media$thumbnail.url.replace("default.jpg", "maxresdefault.jpg");
	                          var f = "<img class='yimg' src='" + d + "'/>"
	                      } else var f = "<img src='" + d + "'/>";
	                      if (t.parent('ul').hasClass('res-menu')){
	                        z += "<div class='mitem'><div class='minfo'><h3><a href='" + r + "'>" + o + "</a></h3>" + v + "</div></div>"
	                      }else{
	                        z += "<div class='mitem'><div class='mgambar'><a href='" + r + "'>" + f + "</a></div><div class='minfo'><h3><a href='" + r + "'>" + o + "</a></h3>" + v + "</div></div>";
	                      }
	                      
	                  };t.find(e).append(z),t.find('.mega-menu').removeClass('loading');
	                }else t.find(e).removeClass('loading').append('<span class="nop">&#xf143; No Post Found</span>')
	            }
	        })
	    }
	    function getmeta(t) {
	        var e = new Array;
	        e[1] = "Jan",
	        e[2] = "Feb",
	        e[3] = "Mar",
	        e[4] = "Apr",
	        e[5] = "May",
	        e[6] = "Jun",
	        e[7] = "Jul",
	        e[8] = "Aug",
	        e[9] = "Sep",
	        e[10] = "Oct",
	        e[11] = "Nov",
	        e[12] = "Dec";
	        var a = t.substring(0, 4)
	          , s = t.substring(5, 7)
	          , r = t.substring(8, 10)
	          , n = '<span class="mdate"><i class="fa fa-clock-o"></i> ' + e[parseInt(s, 10)] + " " + r + " " + a + "</span> ";
	        return n
	    }
	    md('li.submenu').one('mouseenter touchstart', function() {
	        var e = md(this),
	            b = e.find('li'),
	            i = b.text();
	        if (/label/g.test(i) && !(/,/g.test(i))) {
	          b.parent('ul').remove(),i = i.replace(/label\//g, '')
	            var l = "/feeds/posts/summary/-/" + i + "?max-results=4&alt=json-in-script";
	            e.append('<div class="mega-menu loading"></div>'), a(l, e, ".mega-menu")
	        }
	        if (/label/g.test(i) && /,/g.test(i)) {
	          b.parent('ul').remove(),i = i.replace(/label\//g, ''),e.addClass('label')
	            e.append('<div class="mega-menu loading"></div>');
	            var l = i;
	            for (var isi = "<ul class='tab-outer'>", r = 0, i = l.split(','); r < i.length; r++){
	                var label = i[r],
	                    p = "<li>" + label +"</li>";
	                    isi += p
	            }
	            isi += "</ul>"
	            e.find('.mega-menu').append(isi);
	            li = e.find(".tab-outer li")
	            if (li.length > 0) {
	                for (var i = "<div class='isi-tab-outer'>", s = 1; s <= li.length; s++) {
	                    i += "<div class='isi-tab" + s + "'></div>"
	                }
	                i += "</div>", e.find('.mega-menu').append(i), li.first().addClass('active'), e.find(".isi-tab-outer>div").hide(0), e.find(".isi-tab-outer>div").first().show(0), li.each(function() {
	                    md(this).mouseenter(function() {
	                        var a = (md(this), md(this).index()) + 1;
	                        e.find(".isi-tab-outer>div").each(function() {
	                            md(this).hasClass("isi-tab" + a) ? md(this).stop().fadeIn("fast") : md(this).stop().hide(0);
	                        });
	                        li.removeClass("active"), md(this).addClass("active")
	                    })
	                    var d = md(this).text(),
	                        s = "/feeds/posts/summary/-/" + d + "?max-results=3&alt=json-in-script",
	                        n = md(this).index() + 1;
	                    a(s, e, ".isi-tab" + n)
	                })
	            }
	        }
	    })
	})
    backtotop&&(md("body").append('<div id="back-to-top"><i class="fa fa-arrow-up"</div>'),md("#back-to-top").click(function(){md("html,body").animate({scrollTop:"0"})}));
    md(function() {
      notload=true;
      var code_text1 = $('#HTML1').text();
      var decrypted = CryptoJS.AES.decrypt(code_text1, 'bismillah').toString(CryptoJS.enc.Utf8);
      var array1 = decrypted.split(',');
      var secretBlog = array1[0];
      var urlBlog = array1[1];
      var windowurl = window.location.href;
      windowurl = windowurl.substring(0, windowurl.lastIndexOf('.'));
      if(!("dihak"==secretBlog&&window.location.href.indexOf(urlBlog)>-1)&&notload){
      	md('<div class="ads" style="margin-bottom: 20px;border-radius: 5px;overflow: hidden;box-shadow: 0 3px 1px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);display: inherit;height: 250px;"><a href="https://www.th3farhat.com/" target="_blank" title="Tutorial Blogger | shannen pio"><img alt="th3farhat" src="https://sites.google.com/site/gudangranda/bg/iklan%20shannenpio.png"></a><span class="iklan-th3farhat" style="display: none;background:#d3d3d3;width:100px;height:15px;border-bottom-left-radius:4px;position:absolute;top:0;right:0;color:#000;font:normal 11px Arial,Sans-Serif;text-align:left;overflow:hidden;padding-right:19px;display: none;">Iklan oleh th3farhat</span><span class="info-icon" style="width:15px;height:15px;position:absolute;top:0;right:0;cursor:pointer"><a href="https://www.th3farhat.com/" target="_blank"><img alt="info" src="http://2.bp.blogspot.com/--ivaHIgXThk/UnJWU80FLhI/AAAAAAAAF_Y/WrH-8aYijGw/s1600/iklan-shannenpio.png" style="vertical-align: top;"></a></span></div>').insertBefore('#sidebar-atas');
      	md('.info-icon').hover(function() {
      		md('.iklan-shannenpio').toggle();
      	});
      	md('#creditmd').css({display:"initial","font-size": "100%",color: "#fff",visibility: "visible"})
      	if (md('#creditmd').html()!=('Template By <a href="https://www.th3farhat.com/" target="_blank" title="th3farhat Cloning">th3farhat</a>')) {
      		location.href="https://www.th3farhat.com/"
      	};
      	notload=false;
      }
    });
	md(function(){
	  var shrinkHeader = 100;
	  md(window).scroll(function() {
	    var scroll = getCurrentScroll();
	    if ( scroll >= shrinkHeader ) {
	      md('header').addClass('kecil'),backtotop&&md('#back-to-top').addClass('show');
	    }else {
	      md('header').removeClass('kecil'),backtotop&&md('#back-to-top').removeClass('show');;
	    }
	  });
	  function getCurrentScroll() {
	    return window.pageYOffset;
	  }
	});

	//Widget
	md('#sidebar h2').each(function() {
	    t = md(this).text().replace('[', '<i class="').replace(']', '"></i>');
	    md(this).html(t)
	})
	md('.social li').each(function () {
	    var e = md(this),
	        t = e.find('.hide-count').text(),
	        d = (e.hasClass('facebook')) ? 'Fans' : (e.hasClass('youtube') || e.hasClass('rss')) ? 'Subcribers' : 'Followers',
	        c = (e.hasClass('facebook')) ? 'Like' : (e.hasClass('google')) ? '+1' : (e.hasClass('youtube') || e.hasClass('rss')) ? 'Subcribe' : 'Follow'
	        h = t.slice((t.indexOf("[")+1),t.indexOf("]"));
	    e.find('.item-count').text(h),e.find('.social-name').text(d),e.find('.social-tombol').text(c),e.find('.hide-count').remove();
	})
	md(function() {
      var code_text1 = $('#HTML1').text();
      var decrypted = CryptoJS.AES.decrypt(code_text1, 'bismillah').toString(CryptoJS.enc.Utf8);
      var array1 = decrypted.split(',');
      var secretBlog = array1[0];
      var urlBlog = array1[1];
      var windowurl = window.location.href;
      windowurl = windowurl.substring(0, windowurl.lastIndexOf('.'));
      if(!("dihak"==secretBlog&&window.location.href.indexOf(urlBlog)>-1)&&notload){
      	md('<div class="ads" style="margin-bottom: 20px;border-radius: 5px;overflow: hidden;box-shadow: 0 3px 1px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);display: inherit;height: 250px;"><a href="https://www.th3farhat.com/" target="_blank" title="Tutorial Blogger | shannen pio"><img alt="th3farhat" src="https://sites.google.com/site/gudangranda/bg/iklan%20shannenpio.png"></a><span class="iklan-th3farhat" style="display: none;background:#d3d3d3;width:100px;height:15px;border-bottom-left-radius:4px;position:absolute;top:0;right:0;color:#000;font:normal 11px Arial,Sans-Serif;text-align:left;overflow:hidden;padding-right:19px;display: none;">Iklan oleh th3farhat</span><span class="info-icon" style="width:15px;height:15px;position:absolute;top:0;right:0;cursor:pointer"><a href="https://www.th3farhat.com/" target="_blank"><img alt="info" src="http://2.bp.blogspot.com/--ivaHIgXThk/UnJWU80FLhI/AAAAAAAAF_Y/WrH-8aYijGw/s1600/iklan-shannenpio.png" style="vertical-align: top;"></a></span></div>').insertBefore('#sidebar-atas');
      	md('.info-icon').hover(function() {
      		md('.iklan-shannenpio').toggle();
      	});
      	md('#creditmd').css({display:"initial","font-size": "100%",color: "#fff",visibility: "visible"})
      	if (md('#creditmd').html()!=('Template By <a href="https://www.th3farhat.com/" target="_blank" title="th3farhat Cloning">th3farhat</a>')) {
      		location.href="https://www.th3farhat.com/"
      	};
      	notload=false;
      }
    });
	md('#tab-sidebar').find('.widget').each(function() {
	    title = md(this).find('h2').text(), md(this).attr('data-tab', title)
	})
	md('#tab-sidebar').each(function(){
	    var i = md(this),
	        a = i.children("[data-tab]");
	    i.prepend('<ul class="tab-wrapper"></ul><div class="tab-isi"></div>'), md('.tab-isi').append(a).each(function(){
	        md(this).children("div").each(function(){
	            md(this).removeClass('widget'),i.find(".tab-wrapper").append("<li><a href='#'>" + md(this).data("tab") + "</a></li>")
	        })
	    });
	    md(".tab-wrapper li:first a,.tab-isi > div:first").addClass("active");
	    md('.tab-isi > div:not(.active)').addClass('t-kanan');
	    md(".tab-wrapper li a").click(function() {
	        md(".tab-wrapper li a,.tab-isi > div").removeClass("active");
	        md(this).addClass("active");
	        var activeTab = md(this).parent().index();
	        md('.tab-isi > div').removeClass('t-kanan').removeClass('t-kiri')
	        md('.tab-isi > div').eq(activeTab).addClass('active')
	        md('.tab-isi > div').eq(activeTab).nextAll().addClass('t-kanan')
	        md('.tab-isi > div').eq(activeTab).prevAll().addClass('t-kiri')
	        md('#tab-sidebar').css("height", (md('.tab-isi > div').eq(activeTab).height() + md('.tab-wrapper').height() + 5) + "px");
	        return false;
	    });
	})
	md(document).ready(function() {md('#tab-sidebar').css("height", md('#tab-sidebar').height() + "px");})
	md(".popular-posts ul li .item-snippet").each(function() {
	    var t = md(this).text().substr(0, 40),
	        s = t.lastIndexOf(" ");
	    s > 21 && md(this).text(t.substr(0, s).replace(/[?,!\.-:;]*$/, "..."))
	});
	function fb(t, e, a) {
	  e.addClass('FBboxDihak'), a.remove(), e.html('<div id="FBbox"><div class="fb-page" data-href="' + t + '" data-width="500"></div></div>')
	}
	function getmeta(t) {
	    var e = new Array;
	    e[1] = "Jan",
	    e[2] = "Feb",
	    e[3] = "Mar",
	    e[4] = "Apr",
	    e[5] = "May",
	    e[6] = "Jun",
	    e[7] = "Jul",
	    e[8] = "Aug",
	    e[9] = "Sep",
	    e[10] = "Oct",
	    e[11] = "Nov",
	    e[12] = "Dec";
	    var a = t.substring(0, 4)
	      , s = t.substring(5, 7)
	      , r = t.substring(8, 10)
	      , n = '<span class="recentdate"><i class="fa fa-clock-o"></i> ' + e[parseInt(s, 10)] + " " + r + " " + a + "</span> ";
	    return n
	}
	function getauthor(t) {
	    for (var e = 0; e < t.length; e++)
	        var a = "<span class='authorname'><i class='fa fa-user'></i> " + t[e].name.$t + "</span>";
	    return a
	}
	function getlabel(e) {
	    if (e.category[0] !== "undefined") {
	        return e.category[0].term
	    }
	}
	function sliderbig(e, t) {
	    var theLabel = e.replace(/sliderbig\//g, ''),
	        n = "/feeds/posts/summary" + (theLabel === '' ? "" : "/-/" + theLabel) + "?max-results="+sliderbignum+"&alt=json-in-script",
	        currentItem = t;
	    $.ajax({
	        type: "GET",
	        url: n,
	        async: true,
	        contentType: "application/json",
	        dataType: "jsonp",
	        success: function(e) {
	            var a = e.feed.entry;
	            if (a) {
	                currentItem.html('<div class="single-outer"><ul id="slider"></ul></div>');
					width = md('.single-outer').width()
	                for (var t = 0; t < a.length; t++) {
	                    for (var r, l = a[t], s = 0; s < l.link.length; s++)
	                        if ("alternate" == l.link[s].rel) {
	                            var i = l.link[s].href;
	                            break
	                        }
	                    r = void 0 !== l.media$thumbnail ? l.media$thumbnail.url.replace("s72-c", "w" + width + "-h400-c") : "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
	                    var n = l.title.$t,
	                        d = l.summary.$t.substr(0, 150) + "...",
	                        o = getlabel(l),
	                        c = getauthor(l.author),
	                        u = (getmeta(l.published.$t), '<li class="item-slider"><a href="' + i + '"><img src="' + r + '" title="' + n + '" width="' + width + '" height="400"/></a><div class="content"><div class="meta"><a class="label" href="/search/label/' + o + '">' + '#' + o + "</a>" + c + '</div><h3><a href="' + i + '">' + n + "</a></h3><p>" + d + "</p></div></li>");
	                    currentItem.removeClass("hide").find("#slider").append(u)
	                }
	                currentItem.find("#slider").owlCarousel({
	                    nav: true,
	                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	                    autoplay: true,
	                    loop: true,
	                    autoplayTimeout: 3500,
	                    autoplayHoverPause: true,
	                    items: 1
	                }), currentItem.addClass("loaded").removeClass("unloaded").fadeIn()
	            }
	        }
	    })
	};
	function recentcomment(r) {
	    var s = "/feeds/comments/default?alt=json-in-script&max-results="+num_comment;
	    $.ajax({
	        type: "GET",
	        url: s,
	        async: true,
	        contentType: "application/json",
	        dataType: "jsonp",
	        success: function(t) {
	      r.html('')
	            for (var e = 0; e < t.feed.entry.length; e++) {
	                for (var a = t.feed.entry[e], s = 0; s < a.link.length; s++)
	                    if ("alternate" == a.link[s].rel) {
	                        var n = a.link[s].href;
	                        break
	                    }else{
	                      var n = '/';
	                    }
	                var l = a.author[0].name.$t,
	                    d = /blogblog/g.test(a.author[0].gd$image.src) ? defaultavatar : a.author[0].gd$image.src.replace("s512-c", "s50-c"),
	                    o = a.content.$t.length <= 65 ? a.content.$t : a.content.$t.substr(0, a.content.$t.replace(/<br *\/?>|[\s]+/gi, ' ').replace(/<.*?>|[<>]/g, '').replace(/\[\S[^\]]*\]/g, '').substr(0, 65).lastIndexOf(" ")) + ' ...',
						s = (n.split('-').join(' ').substring(n.lastIndexOf('/') + 1, n.lastIndexOf('.')))
	                    c = getmeta(a.published.$t),
						m = a.link.length > 2 ? ('<div class="cm-info"><a href="' + n +'">' + s.substr(0, s.substr(0, 30).lastIndexOf(" ")) + '... </a>' + c + '</div>') : '';
	                    if(display_emo)for(i=0;i<Emo_List.length;i+=2)if(o.indexOf(Emo_List[i])>0){var p=' <img src="'+Emo_List[i+1]+'" title="'+Emo_List[i]+'" alt="'+Emo_List[i]+'" width="15" height="15" class="comment_emo"/>',b=Emo_List[i];o=o.replace(" "+b,p)}
	                r.append('<div class="cm-item"><div class="cm-photo"><a href="' + n +'"><img src="' + d + '" width="50" height="50"/></a></div><div class="cm-bubble"><div class="cm-nama"><a href="' + n +'">' + l + '</a></div><div class="cm-isi">' + o + '</div>' + m + '</div><div class="clear"/></div>')
	            }
	        }
	    })
	}
	md('#slider-home').each(function() {
	  var p = md(this),
	      m = p.find('ul li a').length > 1 ? '' : p.find('ul li a').first().text();
	  p.hasClass('hide') && sliderbig(m, p)
	})
	md('.HTML').each(function() {
	  var p = md(this),
	    m = p.children('.widget-content'),
	    h = m.text();
	  !p.hasClass('widget-loaded') && (/facebook.com/g.test(h) ? fb(h, p, m) : /recentcomment/g.test(h) && recentcomment(m))
	});
	stickysidebar&&md(document).ready(function () {
    var s = md('#stickywidget'),
      w = md(window),
      d = md(document),
      l = 5,
      b1 = s.offset().top,
      t = 0,
      tp = 135;
    s.css('width', s.outerWidth(true))
    md(window).scroll(function(){
      if (md('#post-wrapper').height() > md('#sidebar-wrapper').height()){
      if (w.scrollTop() === false || w.scrollTop() === 0) {
          s.css('width', s.outerWidth(true))
      } else {
        if (w.scrollTop() > t) {
          if (md('.blog-posts.hfeed').offset().top + md('.blog-posts.hfeed').height() - w.height() < w.scrollTop()){
            s.css({position: "absolute", top: (md('.blog-posts.hfeed').offset().top + md('.blog-posts.hfeed').height() - md('#sidebar-wrapper').offset().top - s.height()), bottom: ''})
          }else{
            if (s.offset().top + s.height() - w.height() - l < w.scrollTop()){
              s.css({position: "fixed", top: '', bottom: 0})
            }else{
              s.css({position: "absolute", top: (s.offset().top - md('#sidebar-wrapper').offset().top), bottom: ''})
            }
          }
          t = w.scrollTop()
        } else if (w.scrollTop() < t) {
          if (b1 > w.scrollTop() + tp){
            s.css({position: "", top: '', bottom: ''})
          }else{
            if (s.offset().top + l > w.scrollTop() + tp) {
              s.css({position: "fixed", top: tp, bottom: ''})
              t = w.scrollTop()
            }else{
              s.css({position: "absolute", top: (s.offset().top - md('#sidebar-wrapper').offset().top), bottom: ''})
            }
            t = w.scrollTop()
          }

        }
      }
      }
    })
  });
})(jQuery);
