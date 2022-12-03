goog.provide('re_frame.context');
goog.scope(function(){
  re_frame.context.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
re_frame.context.frame_context = module$node_modules$react$index.createContext(re_frame.core.default_frame);
re_frame.context.set_default_frame = (function re_frame$context$set_default_frame(frame){
re_frame.context.goog$module$goog$object.set(re_frame.context.frame_context,"_currentValue",frame);

return re_frame.context.goog$module$goog$object.set(re_frame.context.frame_context,"_currentValue2",frame);
});
/**
 * Gets the react Context for the current component, to be used in lifecycle
 *   hooks (e.g. render). Assumes that Component.contextType has been set.
 */
re_frame.context.current_context = (function re_frame$context$current_context(){
var temp__5753__auto__ = reagent.core.current_component();
if(cljs.core.truth_(temp__5753__auto__)){
var cmp = temp__5753__auto__;
if((!(cljs.core.object_QMARK_(cmp.context)))){
return cmp.context;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Get the current frame provided by the context, falling back to the default
 *   frame. Assumes that Component.contextType = frame-context.
 */
re_frame.context.current_frame = (function re_frame$context$current_frame(){
var or__4253__auto__ = re_frame.registry._STAR_current_frame_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = re_frame.context.current_context();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return re_frame.context.goog$module$goog$object.get(re_frame.context.frame_context,"_currentValue");
}
}
});
re_frame.context.bound_frame = (function re_frame$context$bound_frame(){
var or__4253__auto__ = re_frame.registry._STAR_current_frame_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = re_frame.context.current_context();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
throw (new Error("No frame bound"));
}
}
});
/**
 * Component that acts as a provider for the frame, so to run an isolated version
 *   of your app, use.
 * 
 *    [provide-frame (frame/make-frame)
 *     [app]]
 */
re_frame.context.provide_frame = (function re_frame$context$provide_frame(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66283 = arguments.length;
var i__4865__auto___66284 = (0);
while(true){
if((i__4865__auto___66284 < len__4864__auto___66283)){
args__4870__auto__.push((arguments[i__4865__auto___66284]));

var G__66285 = (i__4865__auto___66284 + (1));
i__4865__auto___66284 = G__66285;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return re_frame.context.provide_frame.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(re_frame.context.provide_frame.cljs$core$IFn$_invoke$arity$variadic = (function (frame,children){
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(re_frame.context.frame_context.Provider,({"value": frame, "children": reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children))}));
}));

(re_frame.context.provide_frame.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.context.provide_frame.cljs$lang$applyTo = (function (seq66207){
var G__66208 = cljs.core.first(seq66207);
var seq66207__$1 = cljs.core.next(seq66207);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66208,seq66207__$1);
}));

/**
 * Component that acts as a provider for the app-db, it takes the registry from
 *   the current frame, but uses the given atom for the app-db
 */
re_frame.context.provide_app_db = cljs.core.with_meta((function() { 
var re_frame$context$provide_app_db__delegate = function (app_db,children){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,re_frame.context.provide_frame,null,(1),null)),(new cljs.core.List(null,re_frame.frame.make_frame.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame()),new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db], null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)))));
};
var re_frame$context$provide_app_db = function (app_db,var_args){
var children = null;
if (arguments.length > 1) {
var G__66290__i = 0, G__66290__a = new Array(arguments.length -  1);
while (G__66290__i < G__66290__a.length) {G__66290__a[G__66290__i] = arguments[G__66290__i + 1]; ++G__66290__i;}
  children = new cljs.core.IndexedSeq(G__66290__a,0,null);
} 
return re_frame$context$provide_app_db__delegate.call(this,app_db,children);};
re_frame$context$provide_app_db.cljs$lang$maxFixedArity = 1;
re_frame$context$provide_app_db.cljs$lang$applyTo = (function (arglist__66292){
var app_db = cljs.core.first(arglist__66292);
var children = cljs.core.rest(arglist__66292);
return re_frame$context$provide_app_db__delegate(app_db,children);
});
re_frame$context$provide_app_db.cljs$core$IFn$_invoke$arity$variadic = re_frame$context$provide_app_db__delegate;
return re_frame$context$provide_app_db;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context-type","context-type",-1445212185),re_frame.context.frame_context], null));
re_frame.context.subscribe = (function re_frame$context$subscribe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66294 = arguments.length;
var i__4865__auto___66295 = (0);
while(true){
if((i__4865__auto___66295 < len__4864__auto___66294)){
args__4870__auto__.push((arguments[i__4865__auto___66295]));

var G__66296 = (i__4865__auto___66295 + (1));
i__4865__auto___66295 = G__66296;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.subscribe,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.subscribe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.subscribe.cljs$lang$applyTo = (function (seq66211){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66211));
}));

re_frame.context.dispatch = (function re_frame$context$dispatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66300 = arguments.length;
var i__4865__auto___66301 = (0);
while(true){
if((i__4865__auto___66301 < len__4864__auto___66300)){
args__4870__auto__.push((arguments[i__4865__auto___66301]));

var G__66303 = (i__4865__auto___66301 + (1));
i__4865__auto___66301 = G__66303;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.dispatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.dispatch,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.dispatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.dispatch.cljs$lang$applyTo = (function (seq66214){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66214));
}));

re_frame.context.dispatch_sync = (function re_frame$context$dispatch_sync(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66307 = arguments.length;
var i__4865__auto___66309 = (0);
while(true){
if((i__4865__auto___66309 < len__4864__auto___66307)){
args__4870__auto__.push((arguments[i__4865__auto___66309]));

var G__66310 = (i__4865__auto___66309 + (1));
i__4865__auto___66309 = G__66310;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.dispatch_sync.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.dispatch_sync.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.dispatch_sync,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.dispatch_sync.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.dispatch_sync.cljs$lang$applyTo = (function (seq66220){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66220));
}));

re_frame.context.clear_sub = (function re_frame$context$clear_sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66313 = arguments.length;
var i__4865__auto___66314 = (0);
while(true){
if((i__4865__auto___66314 < len__4864__auto___66313)){
args__4870__auto__.push((arguments[i__4865__auto___66314]));

var G__66315 = (i__4865__auto___66314 + (1));
i__4865__auto___66314 = G__66315;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_sub,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.clear_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_sub.cljs$lang$applyTo = (function (seq66222){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66222));
}));

re_frame.context.reg_fx = (function re_frame$context$reg_fx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66316 = arguments.length;
var i__4865__auto___66317 = (0);
while(true){
if((i__4865__auto___66317 < len__4864__auto___66316)){
args__4870__auto__.push((arguments[i__4865__auto___66317]));

var G__66318 = (i__4865__auto___66317 + (1));
i__4865__auto___66317 = G__66318;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_fx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_fx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_fx,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.reg_fx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_fx.cljs$lang$applyTo = (function (seq66224){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66224));
}));

re_frame.context.reg_cofx = (function re_frame$context$reg_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66325 = arguments.length;
var i__4865__auto___66326 = (0);
while(true){
if((i__4865__auto___66326 < len__4864__auto___66325)){
args__4870__auto__.push((arguments[i__4865__auto___66326]));

var G__66327 = (i__4865__auto___66326 + (1));
i__4865__auto___66326 = G__66327;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_cofx,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.reg_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_cofx.cljs$lang$applyTo = (function (seq66228){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66228));
}));

re_frame.context.inject_cofx = (function re_frame$context$inject_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66330 = arguments.length;
var i__4865__auto___66331 = (0);
while(true){
if((i__4865__auto___66331 < len__4864__auto___66330)){
args__4870__auto__.push((arguments[i__4865__auto___66331]));

var G__66332 = (i__4865__auto___66331 + (1));
i__4865__auto___66331 = G__66332;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.inject_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.inject_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.inject_cofx,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.inject_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.inject_cofx.cljs$lang$applyTo = (function (seq66234){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66234));
}));

re_frame.context.clear_cofx = (function re_frame$context$clear_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66337 = arguments.length;
var i__4865__auto___66338 = (0);
while(true){
if((i__4865__auto___66338 < len__4864__auto___66337)){
args__4870__auto__.push((arguments[i__4865__auto___66338]));

var G__66340 = (i__4865__auto___66338 + (1));
i__4865__auto___66338 = G__66340;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_cofx,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.clear_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_cofx.cljs$lang$applyTo = (function (seq66236){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66236));
}));

re_frame.context.reg_event_db = (function re_frame$context$reg_event_db(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66342 = arguments.length;
var i__4865__auto___66343 = (0);
while(true){
if((i__4865__auto___66343 < len__4864__auto___66342)){
args__4870__auto__.push((arguments[i__4865__auto___66343]));

var G__66344 = (i__4865__auto___66343 + (1));
i__4865__auto___66343 = G__66344;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_db,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.reg_event_db.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_db.cljs$lang$applyTo = (function (seq66241){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66241));
}));

re_frame.context.reg_event_fx = (function re_frame$context$reg_event_fx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66346 = arguments.length;
var i__4865__auto___66347 = (0);
while(true){
if((i__4865__auto___66347 < len__4864__auto___66346)){
args__4870__auto__.push((arguments[i__4865__auto___66347]));

var G__66348 = (i__4865__auto___66347 + (1));
i__4865__auto___66347 = G__66348;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_fx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_fx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_fx,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.reg_event_fx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_fx.cljs$lang$applyTo = (function (seq66246){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66246));
}));

re_frame.context.reg_event_ctx = (function re_frame$context$reg_event_ctx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66349 = arguments.length;
var i__4865__auto___66350 = (0);
while(true){
if((i__4865__auto___66350 < len__4864__auto___66349)){
args__4870__auto__.push((arguments[i__4865__auto___66350]));

var G__66351 = (i__4865__auto___66350 + (1));
i__4865__auto___66350 = G__66351;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_ctx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_ctx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_ctx,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.reg_event_ctx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_ctx.cljs$lang$applyTo = (function (seq66252){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66252));
}));

re_frame.context.clear_event = (function re_frame$context$clear_event(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66354 = arguments.length;
var i__4865__auto___66355 = (0);
while(true){
if((i__4865__auto___66355 < len__4864__auto___66354)){
args__4870__auto__.push((arguments[i__4865__auto___66355]));

var G__66357 = (i__4865__auto___66355 + (1));
i__4865__auto___66355 = G__66357;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_event.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_event.cljs$core$IFn$_invoke$arity$variadic = (function (args__66192__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_event,re_frame.context.current_frame(),args__66192__auto__);
}));

(re_frame.context.clear_event.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_event.cljs$lang$applyTo = (function (seq66254){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66254));
}));

re_frame.context.reg_sub_raw = (function re_frame$context$reg_sub_raw(query_id,handler_fn){
return re_frame.frame.reg_sub_raw(re_frame.context.current_frame(),query_id,(function (frame,query_v){
var G__66256 = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(frame);
var G__66257 = query_v;
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(G__66256,G__66257) : handler_fn.call(null,G__66256,G__66257));
}));
});
re_frame.context.reg_sub = (function re_frame$context$reg_sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66363 = arguments.length;
var i__4865__auto___66364 = (0);
while(true){
if((i__4865__auto___66364 < len__4864__auto___66363)){
args__4870__auto__.push((arguments[i__4865__auto___66364]));

var G__66365 = (i__4865__auto___66364 + (1));
i__4865__auto___66364 = G__66365;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return re_frame.context.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(re_frame.context.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
return re_frame.frame.reg_sub(re_frame.context.current_frame(),query_id,args);
}));

(re_frame.context.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.context.reg_sub.cljs$lang$applyTo = (function (seq66258){
var G__66260 = cljs.core.first(seq66258);
var seq66258__$1 = cljs.core.next(seq66258);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66260,seq66258__$1);
}));

re_frame.context.clear_subscriptions_cache_BANG_ = (function re_frame$context$clear_subscriptions_cache_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66374 = arguments.length;
var i__4865__auto___66375 = (0);
while(true){
if((i__4865__auto___66375 < len__4864__auto___66374)){
args__4870__auto__.push((arguments[i__4865__auto___66375]));

var G__66376 = (i__4865__auto___66375 + (1));
i__4865__auto___66375 = G__66376;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_subscriptions_cache_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_subscriptions_cache_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.subs._clear,new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721).cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame()),args);
}));

(re_frame.context.clear_subscriptions_cache_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_subscriptions_cache_BANG_.cljs$lang$applyTo = (function (seq66267){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66267));
}));

/**
 * Returns subscribe/dispatch/dispatch-sync functions that are bound to the current frame. Use like this
 * 
 *    (defc my-component []
 *      (reagent/with-let [{:keys [subscribe dispatch]} (re-frame/context-fns)]
 *        ,,,
 *        )) 
 */
re_frame.context.context_fns = (function re_frame$context$context_fns(var_args){
var G__66273 = arguments.length;
switch (G__66273) {
case 0:
return re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame());
}));

(re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$1 = (function (frame){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subscribe","subscribe",416253756),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.subscribe,frame),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.dispatch,frame),new cljs.core.Keyword(null,"dispatch-sync","dispatch-sync",1664398243),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.dispatch_sync,frame)], null);
}));

(re_frame.context.context_fns.cljs$lang$maxFixedArity = 1);

re_frame.context.bind_fn = (function re_frame$context$bind_fn(f){
var frame = re_frame.context.current_frame();
return (function() { 
var G__66386__delegate = function (args){
var _STAR_current_frame_STAR__orig_val__66277 = re_frame.registry._STAR_current_frame_STAR_;
var _STAR_current_frame_STAR__temp_val__66278 = frame;
(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__temp_val__66278);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__orig_val__66277);
}};
var G__66386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66387__i = 0, G__66387__a = new Array(arguments.length -  0);
while (G__66387__i < G__66387__a.length) {G__66387__a[G__66387__i] = arguments[G__66387__i + 0]; ++G__66387__i;}
  args = new cljs.core.IndexedSeq(G__66387__a,0,null);
} 
return G__66386__delegate.call(this,args);};
G__66386.cljs$lang$maxFixedArity = 0;
G__66386.cljs$lang$applyTo = (function (arglist__66388){
var args = cljs.core.seq(arglist__66388);
return G__66386__delegate(args);
});
G__66386.cljs$core$IFn$_invoke$arity$variadic = G__66386__delegate;
return G__66386;
})()
;
});

//# sourceMappingURL=re_frame.context.js.map
