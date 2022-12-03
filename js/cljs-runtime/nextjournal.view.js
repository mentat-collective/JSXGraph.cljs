goog.provide('nextjournal.view');
nextjournal.view.memoized_frame_fn = (function nextjournal$view$memoized_frame_fn(component,memo_key,ctx_function){
var val__60662__auto__ = (function (){var obj66405 = component;
if((!((obj66405 == null)))){
return (obj66405[memo_key]);
} else {
return undefined;
}
})();
if((void 0 === val__60662__auto__)){
var f = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ctx_function,(function (){var obj66408 = component;
if((!((obj66408 == null)))){
return (obj66408["context"]);
} else {
return undefined;
}
})());
var obj66409_66468 = component;
var obj66410_66469 = (((!((obj66409_66468 == null))))?obj66409_66468:({}));
(obj66410_66469[memo_key] = f);


return f;
} else {
return val__60662__auto__;
}
});
/**
 * Reads a key from `component`
 */
nextjournal.view.get_key = (function nextjournal$view$get_key(component,k,not_found){
var G__66415 = k;
var G__66415__$1 = (((G__66415 instanceof cljs.core.Keyword))?G__66415.fqn:null);
switch (G__66415__$1) {
case "nextjournal.view/props":
return reagent.core.props(component);

break;
case "nextjournal.view/state":
return reagent.core.state_atom(component);

break;
case "nextjournal.view/argv":
return reagent.core.argv(component);

break;
case "re-frame.context/frame":
var obj66416 = component;
if((!((obj66416 == null)))){
return (obj66416["context"]);
} else {
return undefined;
}

break;
case "re-frame.context/subscribe":
return nextjournal.view.memoized_frame_fn(component,"rf_subscribe",re_frame.frame.subscribe);

break;
case "re-frame.context/dispatch":
return nextjournal.view.memoized_frame_fn(component,"rf_dispatch",re_frame.frame.dispatch);

break;
case "re-frame.context/dispatch-sync":
return nextjournal.view.memoized_frame_fn(component,"rf_dispatch_sync",re_frame.frame.dispatch_sync);

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(reagent.core.props(component),k,not_found);

}
});
nextjournal.view.wrap_render = (function nextjournal$view$wrap_render(f){
return (function (c){
var argv = reagent.impl.component.get_argv(c);
var props_QMARK_ = (!((reagent.core.props(c) == null)));
var n = cljs.core.count(argv);
var first_child = ((props_QMARK_)?(2):(1));
var extra_children = ((props_QMARK_)?(n - (2)):(n - (1)));
var G__66417 = extra_children;
switch (G__66417) {
case (0):
return f.call(c,c);

break;
case (1):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child));

break;
case (2):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)));

break;
case (3):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((2) + first_child)));

break;
case (4):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((2) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((3) + first_child)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(argv).slice((1)));

}
});
});
nextjournal.view.constructor_fn = (function nextjournal$view$constructor_fn(p__66420){
var map__66421 = p__66420;
var map__66421__$1 = cljs.core.__destructure_map(map__66421);
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66421__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66421__$1,new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643));
return (function (this$,p__66422){
var map__66423 = p__66422;
var map__66423__$1 = (((((!((map__66423 == null))))?(((((map__66423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66423):map__66423);
var props = map__66423__$1;
var argv = (function (){var obj66426 = map__66423__$1;
if((!((obj66426 == null)))){
return (obj66426[goog.reflect.objectProperty("argv",obj66426)]);
} else {
return undefined;
}
})();
var x66427_66472 = this$;
(x66427_66472.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(x66427_66472.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,null);
}));

(x66427_66472.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,not_found);
}));


var temp__5757__auto___66473 = (function (){var or__4253__auto__ = (function (){var G__66435 = argv;
var G__66435__$1 = (((G__66435 == null))?null:reagent.impl.component.extract_props(G__66435));
if((G__66435__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643).cljs$core$IFn$_invoke$arity$1(G__66435__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return initial_state;
}
})();
if((temp__5757__auto___66473 == null)){
} else {
var initial_state_66474__$1 = temp__5757__auto___66473;
var state_66475 = ((cljs.core.fn_QMARK_(initial_state_66474__$1))?(initial_state_66474__$1.cljs$core$IFn$_invoke$arity$1 ? initial_state_66474__$1.cljs$core$IFn$_invoke$arity$1(this$) : initial_state_66474__$1.call(null,this$)):initial_state_66474__$1);
var state_atom_66476 = (function (){var G__66436 = state_66475;
if((!((state_66475 instanceof reagent.ratom.RAtom)))){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(G__66436);
} else {
return G__66436;
}
})();
(this$.cljsState = state_atom_66476);
}

if(cljs.core.truth_(constructor$)){
(constructor$.cljs$core$IFn$_invoke$arity$2 ? constructor$.cljs$core$IFn$_invoke$arity$2(this$,props) : constructor$.call(null,this$,props));
} else {
}

return this$;
});
});
nextjournal.view.wrap_methods = (function nextjournal$view$wrap_methods(m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),nextjournal.view.constructor_fn(m));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.view !== 'undefined') && (typeof nextjournal.view._STAR_notify_watches_QMARK__STAR_ !== 'undefined')){
} else {
nextjournal.view._STAR_notify_watches_QMARK__STAR_ = (function (){
if((typeof window !== 'undefined')){
var obj66446_66477 = window;
var obj66446_66478__$1 = (((!((obj66446_66477 == null))))?obj66446_66477:({}));
var inner_obj__60803__auto___66479 = (function (){var child66448 = (function (){var child66447 = obj66446_66478__$1.reagent;
if((!((child66447 == null)))){
return child66447;
} else {
var new_child__60735__auto__ = ({});
var obj66453_66480 = obj66446_66478__$1;
(obj66453_66480.reagent = new_child__60735__auto__);


return new_child__60735__auto__;
}
})().ratom;
if((!((child66448 == null)))){
return child66448;
} else {
var new_child__60735__auto__ = ({});
var obj66456_66481 = (function (){var child66447 = obj66446_66478__$1.reagent;
if((!((child66447 == null)))){
return child66447;
} else {
var new_child__60735__auto____$1 = ({});
var obj66459_66482 = obj66446_66478__$1;
(obj66459_66482.reagent = new_child__60735__auto____$1);


return new_child__60735__auto____$1;
}
})();
(obj66456_66481.ratom = new_child__60735__auto__);


return new_child__60735__auto__;
}
})();
var o__60797__auto___66483 = inner_obj__60803__auto___66479;
var o__60791__auto___66484 = (((!((o__60797__auto___66483 == null))))?o__60797__auto___66483:({}));
var obj66462_66485 = o__60791__auto___66484;
(obj66462_66485.notify_w = (function (notify_w){
return (function (this$,old,new$){
if(nextjournal.view._STAR_notify_watches_QMARK__STAR_ === true){
return (notify_w.cljs$core$IFn$_invoke$arity$3 ? notify_w.cljs$core$IFn$_invoke$arity$3(this$,old,new$) : notify_w.call(null,this$,old,new$));
} else {
return null;
}
});
})(o__60791__auto___66484.notify_w));


} else {
}

return true;
})()
;
}
/**
 * Swap a reactive atom, without causing dependent components to re-render.
 */
nextjournal.view.swap_silently_BANG_ = (function nextjournal$view$swap_silently_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66486 = arguments.length;
var i__4865__auto___66487 = (0);
while(true){
if((i__4865__auto___66487 < len__4864__auto___66486)){
args__4870__auto__.push((arguments[i__4865__auto___66487]));

var G__66488 = (i__4865__auto___66487 + (1));
i__4865__auto___66487 = G__66488;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_notify_watches_QMARK__STAR__orig_val__66464 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__66465 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__66465);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__66464);
}}));

(nextjournal.view.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.view.swap_silently_BANG_.cljs$lang$applyTo = (function (seq66463){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66463));
}));

nextjournal.view.reset_silently_BANG_ = (function nextjournal$view$reset_silently_BANG_(ratom,value){
var _STAR_notify_watches_QMARK__STAR__orig_val__66466 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__66467 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__66467);

try{return cljs.core.reset_BANG_(ratom,value);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__66466);
}});

//# sourceMappingURL=nextjournal.view.js.map
