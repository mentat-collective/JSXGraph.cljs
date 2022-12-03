import "./cljs_env.js";
goog.provide('nextjournal.clerk.render');
goog.scope(function(){
  nextjournal.clerk.render.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$d3_require$dist$d3_require=shadow.js.require("module$node_modules$d3_require$dist$d3_require", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$use_sync_external_store$shim$index=shadow.js.require("module$node_modules$use_sync_external_store$shim$index", {});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
nextjournal.clerk.render.WrappedState = (function (st){
this.st = st;
this.cljs$lang$protocol_mask$partition0$ = 32784;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(nextjournal.clerk.render.WrappedState.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
var coll__$1 = this;
return (self__.st[i]);
}));

(nextjournal.clerk.render.WrappedState.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,nf){
var self__ = this;
var coll__$1 = this;
var or__4253__auto__ = (self__.st[i]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nf;
}
}));

(nextjournal.clerk.render.WrappedState.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.st[(0)]);
}));

(nextjournal.clerk.render.WrappedState.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var G__81925 = cljs.core.constantly(new_value);
var fexpr__81924 = (self__.st[(1)]);
return (fexpr__81924.cljs$core$IFn$_invoke$arity$1 ? fexpr__81924.cljs$core$IFn$_invoke$arity$1(G__81925) : fexpr__81924.call(null,G__81925));
}));

(nextjournal.clerk.render.WrappedState.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var fexpr__81927 = (self__.st[(1)]);
return (fexpr__81927.cljs$core$IFn$_invoke$arity$1 ? fexpr__81927.cljs$core$IFn$_invoke$arity$1(f) : fexpr__81927.call(null,f));
}));

(nextjournal.clerk.render.WrappedState.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__81929 = (function (p1__81904_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__81904_SHARP_,a) : f.call(null,p1__81904_SHARP_,a));
});
var fexpr__81928 = (self__.st[(1)]);
return (fexpr__81928.cljs$core$IFn$_invoke$arity$1 ? fexpr__81928.cljs$core$IFn$_invoke$arity$1(G__81929) : fexpr__81928.call(null,G__81929));
}));

(nextjournal.clerk.render.WrappedState.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__81934 = (function (p1__81905_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__81905_SHARP_,a,b) : f.call(null,p1__81905_SHARP_,a,b));
});
var fexpr__81933 = (self__.st[(1)]);
return (fexpr__81933.cljs$core$IFn$_invoke$arity$1 ? fexpr__81933.cljs$core$IFn$_invoke$arity$1(G__81934) : fexpr__81933.call(null,G__81934));
}));

(nextjournal.clerk.render.WrappedState.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__81945 = (function (p1__81906_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,p1__81906_SHARP_,a,b,xs);
});
var fexpr__81944 = (self__.st[(1)]);
return (fexpr__81944.cljs$core$IFn$_invoke$arity$1 ? fexpr__81944.cljs$core$IFn$_invoke$arity$1(G__81945) : fexpr__81944.call(null,G__81945));
}));

(nextjournal.clerk.render.WrappedState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"st","st",-1199179941,null)], null);
}));

(nextjournal.clerk.render.WrappedState.cljs$lang$type = true);

(nextjournal.clerk.render.WrappedState.cljs$lang$ctorStr = "nextjournal.clerk.render/WrappedState");

(nextjournal.clerk.render.WrappedState.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"nextjournal.clerk.render/WrappedState");
}));

/**
 * Positional factory function for nextjournal.clerk.render/WrappedState.
 */
nextjournal.clerk.render.__GT_WrappedState = (function nextjournal$clerk$render$__GT_WrappedState(st){
return (new nextjournal.clerk.render.WrappedState(st));
});

nextjournal.clerk.render.as_array = (function nextjournal$clerk$render$as_array(x){
var G__81949 = x;
if((!(cljs.core.array_QMARK_(x)))){
return cljs.core.to_array(G__81949);
} else {
return G__81949;
}
});
/**
 * React hook: useMemo. Defaults to an empty `deps` array.
 */
nextjournal.clerk.render.use_memo = (function nextjournal$clerk$render$use_memo(var_args){
var G__81963 = arguments.length;
switch (G__81963) {
case 1:
return nextjournal.clerk.render.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useMemo(f,[]);
}));

(nextjournal.clerk.render.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useMemo(f,nextjournal.clerk.render.as_array(deps));
}));

(nextjournal.clerk.render.use_memo.cljs$lang$maxFixedArity = 2);

/**
 * React hook: useCallback. Defaults to an empty `deps` array.
 */
nextjournal.clerk.render.use_callback = (function nextjournal$clerk$render$use_callback(var_args){
var G__81965 = arguments.length;
switch (G__81965) {
case 1:
return nextjournal.clerk.render.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (x){
return nextjournal.clerk.render.use_callback.cljs$core$IFn$_invoke$arity$2(x,[]);
}));

(nextjournal.clerk.render.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (x,deps){
return module$node_modules$react$index.useCallback(x,cljs.core.to_array(deps));
}));

(nextjournal.clerk.render.use_callback.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.render.wrap_effect = (function nextjournal$clerk$render$wrap_effect(f){
return (function (){
var v = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(v)){
return v;
} else {
return undefined;
}
});
});
/**
 * React hook: useEffect. Defaults to an empty `deps` array.
 * Wraps `f` to return js/undefined for any non-function value.
 */
nextjournal.clerk.render.use_effect = (function nextjournal$clerk$render$use_effect(var_args){
var G__81978 = arguments.length;
switch (G__81978) {
case 1:
return nextjournal.clerk.render.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useEffect(nextjournal.clerk.render.wrap_effect(f),[]);
}));

(nextjournal.clerk.render.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useEffect(nextjournal.clerk.render.wrap_effect(f),nextjournal.clerk.render.as_array(deps));
}));

(nextjournal.clerk.render.use_effect.cljs$lang$maxFixedArity = 2);

/**
 * React hook: useState. Can be used like react/useState but also behaves like an atom.
 */
nextjournal.clerk.render.use_state = (function nextjournal$clerk$render$use_state(init){
return (new nextjournal.clerk.render.WrappedState(module$node_modules$react$index.useState(init)));
});
nextjournal.clerk.render.specify_atom_BANG_ = (function nextjournal$clerk$render$specify_atom_BANG_(ref_obj){
var x81993 = ref_obj;
(x81993.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x81993.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.current;
}));

(x81993.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL);

(x81993.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var this$__$1 = this;
return (this$__$1.current = new_value);
}));

(x81993.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL);

(x81993.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (o,f){
var o__$1 = this;
return cljs.core.reset_BANG_(o__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(o__$1) : f.call(null,o__$1)));
}));

(x81993.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (o,f,a){
var o__$1 = this;
return cljs.core.reset_BANG_(o__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(o__$1,a) : f.call(null,o__$1,a)));
}));

(x81993.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (o,f,a,b){
var o__$1 = this;
return cljs.core.reset_BANG_(o__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(o__$1,a,b) : f.call(null,o__$1,a,b)));
}));

(x81993.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (o,f,a,b,xs){
var o__$1 = this;
return cljs.core.reset_BANG_(o__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,o__$1,a,b,xs));
}));

return x81993;
});
/**
 * React hook: useRef. Can also be used like an atom.
 */
nextjournal.clerk.render.use_ref = (function nextjournal$clerk$render$use_ref(var_args){
var G__82010 = arguments.length;
switch (G__82010) {
case 0:
return nextjournal.clerk.render.use_ref.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nextjournal.clerk.render.use_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.use_ref.cljs$core$IFn$_invoke$arity$0 = (function (){
return nextjournal.clerk.render.use_ref.cljs$core$IFn$_invoke$arity$1(null);
}));

(nextjournal.clerk.render.use_ref.cljs$core$IFn$_invoke$arity$1 = (function (init){
return nextjournal.clerk.render.specify_atom_BANG_(module$node_modules$react$index.useRef(init));
}));

(nextjournal.clerk.render.use_ref.cljs$lang$maxFixedArity = 1);

nextjournal.clerk.render.use_sync_external_store = (function nextjournal$clerk$render$use_sync_external_store(subscribe,get_snapshot){
return module$node_modules$use_sync_external_store$shim$index.useSyncExternalStore(subscribe,get_snapshot);
});
/**
 * Hook for reading value of an IWatchable. Compatible with reading Reagent reactions non-reactively.
 */
nextjournal.clerk.render.use_watch = (function nextjournal$clerk$render$use_watch(x){
var id = nextjournal.clerk.render.use_callback.cljs$core$IFn$_invoke$arity$1(({}));
return nextjournal.clerk.render.use_sync_external_store(nextjournal.clerk.render.use_callback.cljs$core$IFn$_invoke$arity$2((function (changed_BANG_){
cljs.core.add_watch(x,id,(function (_,___$1,___$2,___$3){
return (changed_BANG_.cljs$core$IFn$_invoke$arity$0 ? changed_BANG_.cljs$core$IFn$_invoke$arity$0() : changed_BANG_.call(null));
}));

return (function (){
return cljs.core.remove_watch(x,id);
});
}),[x]),(function (){
var _STAR_ratom_context_STAR__orig_val__82017 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__82018 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__82018);

try{return cljs.core.deref(x);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__82017);
}}));
});
reagent.core.set_default_compiler_BANG_(reagent.core.create_compiler(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function-components","function-components",1492814963),true], null)));




nextjournal.clerk.render.nbsp = goog.string.unescapeEntities("&nbsp;");
nextjournal.clerk.render.toc_items = (function nextjournal$clerk$render$toc_items(items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__82023){
var map__82024 = p__82023;
var map__82024__$1 = cljs.core.__destructure_map(map__82024);
var item = map__82024__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82024__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82024__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(content)){
var title = nextjournal.markdown.transform.__GT_text(item);
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"path","path",-188191168),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_slug(title))].join(''),new cljs.core.Keyword(null,"items","items",1031954938),(nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1(children) : nextjournal.clerk.render.toc_items.call(null,children))], null)));
} else {
var G__82025 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(item);
return (nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1(G__82025) : nextjournal.clerk.render.toc_items.call(null,G__82025));
}
}),cljs.core.PersistentVector.EMPTY,items);
});
nextjournal.clerk.render.dark_mode_toggle = (function nextjournal$clerk$render$dark_mode_toggle(_BANG_state){
var map__82026 = cljs.core.deref(_BANG_state);
var map__82026__$1 = cljs.core.__destructure_map(map__82026);
var dark_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82026__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
var spring = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(200),new cljs.core.Keyword(null,"damping","damping",1054389681),(10)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.dark-mode-toggle","div.relative.dark-mode-toggle",-1696831098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-slate-400.hover:text-slate-600.dark:hover:text-white.cursor-pointer","button.text-slate-400.hover:text-slate-600.dark:hover:text-white.cursor-pointer",-1717879008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),cljs.core.not(dark_mode_QMARK_));
})], null),(cljs.core.truth_(dark_mode_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.svg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 md:w-4 md:h-4",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 50 50",new cljs.core.Keyword(null,"key","key",-1516042587),"moon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),"M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),0.6,new cljs.core.Keyword(null,"rotate","rotate",152705015),(90)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.svg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"sun",new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 md:w-4 md:h-4",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.circle,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),"11.9998",new cljs.core.Keyword(null,"cy","cy",755331060),"11.9998",new cljs.core.Keyword(null,"r","r",-471384190),"5.75375",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.5], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.g,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(45)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"3.08982",new cljs.core.Keyword(null,"cy","cy",755331060),"6.85502",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-60 3.08982 6.85502)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"3.0903",new cljs.core.Keyword(null,"cy","cy",755331060),"17.1436",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-120 3.0903 17.1436)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"22.2881",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"20.9101",new cljs.core.Keyword(null,"cy","cy",755331060),"17.1436",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-60 20.9101 17.1436)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"20.9101",new cljs.core.Keyword(null,"cy","cy",755331060),"6.8555",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-120 20.9101 6.8555)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"1.71143",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null)], null)], null))], null)], null);
});
nextjournal.clerk.render.localstorage_set_BANG_ = (function nextjournal$clerk$render$localstorage_set_BANG_(key,val){
if((typeof window !== 'undefined')){
return window.localStorage.setItem(key,val);
} else {
return null;
}
});
nextjournal.clerk.render.localstorage_get = (function nextjournal$clerk$render$localstorage_get(key){
if((typeof window !== 'undefined')){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(window.localStorage.getItem(key));
} else {
return null;
}
});
nextjournal.clerk.render.local_storage_dark_mode_key = "clerk-darkmode";
nextjournal.clerk.render.set_dark_mode_BANG_ = (function nextjournal$clerk$render$set_dark_mode_BANG_(dark_mode_QMARK_){
var class_list_82372 = document.querySelector("html").classList;
if(cljs.core.truth_(dark_mode_QMARK_)){
class_list_82372.add("dark");
} else {
class_list_82372.remove("dark");
}

return nextjournal.clerk.render.localstorage_set_BANG_(nextjournal.clerk.render.local_storage_dark_mode_key,dark_mode_QMARK_);
});
nextjournal.clerk.render.setup_dark_mode_BANG_ = (function nextjournal$clerk$render$setup_dark_mode_BANG_(_BANG_state){
var map__82039 = cljs.core.deref(_BANG_state);
var map__82039__$1 = cljs.core.__destructure_map(map__82039);
var dark_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82039__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
cljs.core.add_watch(_BANG_state,new cljs.core.Keyword("nextjournal.clerk.render","dark-mode","nextjournal.clerk.render/dark-mode",-360205762),(function (_,___$1,old,p__82040){
var map__82041 = p__82040;
var map__82041__$1 = cljs.core.__destructure_map(map__82041);
var dark_mode_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82041__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096).cljs$core$IFn$_invoke$arity$1(old),dark_mode_QMARK___$1)){
return nextjournal.clerk.render.set_dark_mode_BANG_(dark_mode_QMARK___$1);
} else {
return null;
}
}));

if(cljs.core.truth_(dark_mode_QMARK_)){
return nextjournal.clerk.render.set_dark_mode_BANG_(dark_mode_QMARK_);
} else {
return null;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_eval_counter !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_eval_counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
nextjournal.clerk.render.render_notebook = (function nextjournal$clerk$render$render_notebook(p__82051){
var map__82052 = p__82051;
var map__82052__$1 = cljs.core.__destructure_map(map__82052);
var _doc = map__82052__$1;
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82052__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var bundle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82052__$1,new cljs.core.Keyword(null,"bundle?","bundle?",-35631730));
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82052__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
var toc_visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82052__$1,new cljs.core.Keyword(null,"toc-visibility","toc-visibility",-1781055352));
var with_let82053 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let82053","with-let82053",-312233609));
var temp__5757__auto___82374 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___82374 == null)){
} else {
var c__70033__auto___82375 = temp__5757__auto___82374;
if((with_let82053.generation === c__70033__auto___82375.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let82053.generation = c__70033__auto___82375.ratomGeneration);
}

var init82054 = (with_let82053.length === (0));
var local_storage_key = ((((init82054) || (cljs.core.not(with_let82053.hasOwnProperty((0))))))?(with_let82053[(0)] = "clerk-navbar"):(with_let82053[(0)]));
var _BANG_state = ((((init82054) || (cljs.core.not(with_let82053.hasOwnProperty((1))))))?(with_let82053[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"md-toc","md-toc",401610567),new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),new cljs.core.Keyword(null,"local-storage-key","local-storage-key",-1983909558),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"mobile-width","mobile-width",-48320880),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"set-hash?","set-hash?",1284779132)],[nextjournal.clerk.render.toc_items(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(toc)),toc,nextjournal.clerk.render.localstorage_get(nextjournal.clerk.render.local_storage_dark_mode_key),local_storage_key,(220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-over","slide-over",1619183007),"bg-slate-100 dark:bg-gray-800 font-sans border-r dark:border-slate-900"], null),(300),(function (){var temp__5755__auto__ = nextjournal.clerk.render.localstorage_get(local_storage_key);
if((temp__5755__auto__ == null)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),toc_visibility);
} else {
var stored_open_QMARK_ = temp__5755__auto__;
return stored_open_QMARK_;
}
})(),cljs.core.not(bundle_QMARK_)]))):(with_let82053[(1)]));
var root_ref_fn = ((((init82054) || (cljs.core.not(with_let82053.hasOwnProperty((2))))))?(with_let82053[(2)] = (function (p1__82048_SHARP_){
if(cljs.core.truth_(p1__82048_SHARP_)){
return nextjournal.clerk.render.setup_dark_mode_BANG_(_BANG_state);
} else {
return null;
}
})):(with_let82053[(2)]));
var ref_fn = ((((init82054) || (cljs.core.not(with_let82053.hasOwnProperty((3))))))?(with_let82053[(3)] = (function (p1__82049_SHARP_){
if(cljs.core.truth_(p1__82049_SHARP_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-el","scroll-el",2005954473),p1__82049_SHARP_);
} else {
return null;
}
})):(with_let82053[(3)]));
var res82055 = (function (){var map__82057 = cljs.core.deref(_BANG_state);
var map__82057__$1 = cljs.core.__destructure_map(map__82057);
var md_toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82057__$1,new cljs.core.Keyword(null,"md-toc","md-toc",401610567));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(md_toc,toc)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"toc","toc",2050089251),nextjournal.clerk.render.toc_items(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(toc)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"md-toc","md-toc",401610567),toc,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),toc_visibility)], 0));
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),root_ref_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10","div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10",-1924941252),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.dark_mode_toggle,_BANG_state], null)], null),(cljs.core.truth_((function (){var and__4251__auto__ = toc;
if(cljs.core.truth_(and__4251__auto__)){
return toc_visibility;
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.toggle_button,_BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.icon.menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uppercase.tracking-wider.ml-1.font-bold","span.uppercase.tracking-wider.ml-1.font-bold",184219074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[12px]"], null),"ToC"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"z-10 fixed right-2 top-2 md:right-auto md:left-3 md:top-3 text-slate-400 font-sans text-xs hover:underline cursor-pointer flex items-center bg-white dark:bg-gray-900 py-1 px-3 md:p-0 rounded-full md:rounded-none border md:border-0 border-slate-200 dark:border-gray-500 shadow md:shadow-none dark:text-slate-400 dark:hover:text-white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.panel,_BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.navbar,_BANG_state], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-auto.h-screen.overflow-y-auto.scroll-container","div.flex-auto.h-screen.overflow-y-auto.scroll-container",-676818277),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.viewer-notebook.flex-auto","div.flex.flex-col.items-center.viewer-notebook.flex-auto",1639150866),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var map__82059 = nextjournal.clerk.viewer.__GT_viewer(x);
var map__82059__$1 = cljs.core.__destructure_map(map__82059);
var viewer_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82059__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var inner_viewer_name = (function (){var G__82063 = x;
var G__82063__$1 = (((G__82063 == null))?null:nextjournal.clerk.viewer.__GT_value(G__82063));
var G__82063__$2 = (((G__82063__$1 == null))?null:nextjournal.clerk.viewer.__GT_viewer(G__82063__$1));
if((G__82063__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__82063__$2);
}
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["viewer",(cljs.core.truth_(new cljs.core.Keyword("nextjournal","open-graph-image-capture","nextjournal/open-graph-image-capture",201173909).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_value(x)))?"open-graph-image-capture":null),(cljs.core.truth_(viewer_name)?["viewer-",cljs.core.name(viewer_name)].join(''):null),(cljs.core.truth_(inner_viewer_name)?["viewer-",cljs.core.name(inner_viewer_name)].join(''):null),(function (){var G__82065 = (function (){var or__4253__auto__ = nextjournal.clerk.viewer.width(x);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__82066 = viewer_name;
var G__82066__$1 = (((G__82066 instanceof cljs.core.Keyword))?G__82066.fqn:null);
switch (G__82066__$1) {
case "code":
case "code-folded":
return new cljs.core.Keyword(null,"wide","wide",-151772487);

break;
default:
return new cljs.core.Keyword(null,"prose","prose",2099617726);

}
}
})();
var G__82065__$1 = (((G__82065 instanceof cljs.core.Keyword))?G__82065.fqn:null);
switch (G__82065__$1) {
case "wide":
return "w-full max-w-wide";

break;
case "full":
return "w-full";

break;
default:
return "w-full max-w-prose px-8";

}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,x], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nextjournal.clerk.render._BANG_eval_counter))].join('')], null));
}),xs))], null)], null)], null);
})();
return res82055;
});
nextjournal.clerk.render.opts__GT_query = (function nextjournal$clerk$render$opts__GT_query(opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,"="),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82071_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__82071_SHARP_,(0),cljs.core.name);
}),opts)));
});
nextjournal.clerk.render.render_unreadable_edn = (function nextjournal$clerk$render$render_unreadable_edn(edn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap.cmt-default","span.inspected-value.whitespace-nowrap.cmt-default",1768608485),edn], null);
});
nextjournal.clerk.render.error_badge = (function nextjournal$clerk$render$error_badge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82401 = arguments.length;
var i__4865__auto___82402 = (0);
while(true){
if((i__4865__auto___82402 < len__4864__auto___82401)){
args__4870__auto__.push((arguments[i__4865__auto___82402]));

var G__82403 = (i__4865__auto___82402 + (1));
i__4865__auto___82402 = G__82403;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nextjournal.clerk.render.error_badge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nextjournal.clerk.render.error_badge.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-50.rounded-sm.text-xs.text-red-400.px-2.py-1.items-center.sans-serif.inline-flex","div.bg-red-50.rounded-sm.text-xs.text-red-400.px-2.py-1.items-center.sans-serif.inline-flex",1436970942),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4.text-red-400","svg.h-4.w-4.text-red-400",-439155594),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-2.font-bold","div.ml-2.font-bold",1964855578)], null),content)], null);
}));

(nextjournal.clerk.render.error_badge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.clerk.render.error_badge.cljs$lang$applyTo = (function (seq82075){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82075));
}));

nextjournal.clerk.render.error_view = (function nextjournal$clerk$render$error_view(error){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-300.not-prose","div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-300.not-prose",1278649712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.font-mono.text-red-600.dark:text-red-300.font-bold","p.font-mono.text-red-600.dark:text-red-300.font-bold",-1938208543),error.message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.text-red-600.dark:text-red-300.w-full.overflow-auto.mt-2","pre.text-red-600.dark:text-red-300.w-full.overflow-auto.mt-2",113939522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] max-h-[155px]"], null),(function (){try{return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split_lines(error.stack))));
}catch (e82088){if((e82088 instanceof Error)){
var _ = e82088;
return null;
} else {
throw e82088;

}
}})()], null),(function (){var temp__5757__auto__ = error.data;
if((temp__5757__auto__ == null)){
return null;
} else {
var data = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2","div.mt-2",-701876875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,data], null)], null);
}
})()], null);
});
nextjournal.clerk.render.ErrorProvider = (function (){var obj82089 = nextjournal.view.context.get_context(new cljs.core.Keyword(null,"!error","!error",-223168506));
if((!((obj82089 == null)))){
return (obj82089["Provider"]);
} else {
return undefined;
}
})();
nextjournal.clerk.render.ErrorBoundary = class nextjournal$clerk$render$ErrorBoundary extends module$node_modules$react$index.Component {
  constructor(G__82091) {
var props_82405 = G__82091;
super(props_82405);
var self__ = this;

(self__._BANG_error = (function (){var obj82092 = props_82405;
if((!((obj82092 == null)))){
return (obj82092["!error"]);
} else {
return undefined;
}
})());

(self__.state = ({"error": cljs.core.deref(self__._BANG_error)}));
  }
};
(nextjournal.clerk.render.ErrorBoundary.prototype.componentDidMount = (function (){
var self__ = this;
var this$ = this;
return cljs.core.add_watch(self__._BANG_error,this$,(function (_,___$1,___$2,new_val){
var obj__67313__auto__ = this$;
var f__67314__auto__ = (obj__67313__auto__["setState"]);
return f__67314__auto__.call(obj__67313__auto__,({"error": new_val}));
}));
}));

(nextjournal.clerk.render.ErrorBoundary.prototype.componentWillUnmount = (function (){
var self__ = this;
var this$ = this;
return cljs.core.remove_watch(self__._BANG_error,this$);
}));

(nextjournal.clerk.render.ErrorBoundary.prototype.render = (function (props){
var self__ = this;
var this$ = this;
var map__82093 = this$;
var map__82093__$1 = (((((!((map__82093 == null))))?(((((map__82093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82093):map__82093);
var map__82094 = (function (){var obj82097 = map__82093__$1;
if((!((obj82097 == null)))){
return (obj82097["state"]);
} else {
return undefined;
}
})();
var map__82094__$1 = (((((!((map__82094 == null))))?(((((map__82094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82094):map__82094);
var error = (function (){var obj82099 = map__82094__$1;
if((!((obj82099 == null)))){
return (obj82099["error"]);
} else {
return undefined;
}
})();
var map__82095 = (function (){var obj82100 = map__82093__$1;
if((!((obj82100 == null)))){
return (obj82100["props"]);
} else {
return undefined;
}
})();
var map__82095__$1 = (((((!((map__82095 == null))))?(((((map__82095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82095):map__82095);
var children = (function (){var obj82102 = map__82095__$1;
if((!((obj82102 == null)))){
return (obj82102["children"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(error)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.error_view,error], null));
} else {
return module$node_modules$react$index.createElement.apply(null,[nextjournal.clerk.render.ErrorProvider,({"value": self__._BANG_error})].concat(children));
}
}));
var obj82103_82423 = nextjournal.clerk.render.ErrorBoundary;
(obj82103_82423["getDerivedStateFromError"] = (function (error){
return ({"error": error});
}));

nextjournal.clerk.render.default_loading_view = "Loading...";
nextjournal.clerk.render.use_handle_error = (function nextjournal$clerk$render$use_handle_error(){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,module$node_modules$react$index.useContext(nextjournal.view.context.get_context(new cljs.core.Keyword(null,"!error","!error",-223168506))));
});
nextjournal.clerk.render.read_string = (function nextjournal$clerk$render$read_string(s){
return nextjournal.clerk.sci_env.read_string(s);
});
nextjournal.clerk.render.fetch_BANG_ = (function nextjournal$clerk$render$fetch_BANG_(p__82106,opts){
var map__82107 = p__82106;
var map__82107__$1 = cljs.core.__destructure_map(map__82107);
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82107__$1,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970));
return fetch(["_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_id),((cljs.core.seq(opts))?["?",nextjournal.clerk.render.opts__GT_query(opts)].join(''):null)].join('')).then((function (p1__82104_SHARP_){
return p1__82104_SHARP_.text();
})).then((function (p1__82105_SHARP_){
try{return nextjournal.clerk.render.read_string(p1__82105_SHARP_);
}catch (e82108){if((e82108 instanceof Error)){
var e = e82108;
console.error(({"message": "sci read error", "blob-id": blob_id, "code-string": p1__82105_SHARP_, "error": e}));

return nextjournal.clerk.render.render_unreadable_edn(p1__82105_SHARP_);
} else {
throw e82108;

}
}}));
});
nextjournal.clerk.render.read_result = (function nextjournal$clerk$render$read_result(p__82109,_BANG_error){
var map__82110 = p__82109;
var map__82110__$1 = cljs.core.__destructure_map(map__82110);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82110__$1,new cljs.core.Keyword("nextjournal","edn","nextjournal/edn",-1219681583));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82110__$1,new cljs.core.Keyword("nextjournal","string","nextjournal/string",304722890));
if(cljs.core.truth_(edn)){
try{return nextjournal.clerk.render.read_string(edn);
}catch (e82111){if((e82111 instanceof Error)){
var e = e82111;
return cljs.core.reset_BANG_(_BANG_error,e);
} else {
throw e82111;

}
}} else {
return nextjournal.clerk.render.render_unreadable_edn(string);
}
});
nextjournal.clerk.render.render_result = (function nextjournal$clerk$render$render_result(p__82113,_opts){
var map__82114 = p__82113;
var map__82114__$1 = cljs.core.__destructure_map(map__82114);
var result = map__82114__$1;
var fetch_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82114__$1,new cljs.core.Keyword("nextjournal","fetch-opts","nextjournal/fetch-opts",61437218));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82114__$1,new cljs.core.Keyword("nextjournal","hash","nextjournal/hash",669857928));
var with_let82115 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let82115","with-let82115",336621911));
var temp__5757__auto___82426 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___82426 == null)){
} else {
var c__70033__auto___82428 = temp__5757__auto___82426;
if((with_let82115.generation === c__70033__auto___82428.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let82115.generation = c__70033__auto___82428.ratomGeneration);
}

var init82116 = (with_let82115.length === (0));
var _BANG_hash = ((((init82116) || (cljs.core.not(with_let82115.hasOwnProperty((0))))))?(with_let82115[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hash)):(with_let82115[(0)]));
var _BANG_error = ((((init82116) || (cljs.core.not(with_let82115.hasOwnProperty((1))))))?(with_let82115[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let82115[(1)]));
var _BANG_desc = ((((init82116) || (cljs.core.not(with_let82115.hasOwnProperty((2))))))?(with_let82115[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.render.read_result(result,_BANG_error))):(with_let82115[(2)]));
var _BANG_fetch_opts = ((((init82116) || (cljs.core.not(with_let82115.hasOwnProperty((3))))))?(with_let82115[(3)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(fetch_opts)):(with_let82115[(3)]));
var fetch_fn = ((((init82116) || (cljs.core.not(with_let82115.hasOwnProperty((4))))))?(with_let82115[(4)] = (cljs.core.truth_(cljs.core.deref(_BANG_fetch_opts))?(function (opts){
return nextjournal.clerk.render.fetch_BANG_(cljs.core.deref(_BANG_fetch_opts),opts).then((function (more){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_desc,nextjournal.clerk.viewer.merge_presentations,more,opts);
}));
}):null)):(with_let82115[(4)]));
var _BANG_expanded_at = ((((init82116) || (cljs.core.not(with_let82115.hasOwnProperty((5))))))?(with_let82115[(5)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(_BANG_desc),new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009),cljs.core.PersistentArrayMap.EMPTY))):(with_let82115[(5)]));
var on_key_down = ((((init82116) || (cljs.core.not(with_let82115.hasOwnProperty((6))))))?(with_let82115[(6)] = (function (event){
if(cljs.core.truth_(event.altKey)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.assoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923),true);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
}
})):(with_let82115[(6)]));
var on_key_up = ((((init82116) || (cljs.core.not(with_let82115.hasOwnProperty((7))))))?(with_let82115[(7)] = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
})):(with_let82115[(7)]));
var ref_fn = ((((init82116) || (cljs.core.not(with_let82115.hasOwnProperty((8))))))?(with_let82115[(8)] = (function (p1__82112_SHARP_){
if(cljs.core.truth_(p1__82112_SHARP_)){
if((typeof document !== 'undefined')){
document.addEventListener("keydown",on_key_down);

return document.addEventListener("keyup",on_key_up);
} else {
return null;
}
} else {
if((typeof document !== 'undefined')){
document.removeEventListener("keydown",on_key_down);

return document.removeEventListener("up",on_key_up);
} else {
return null;
}
}
})):(with_let82115[(8)]));
var res82117 = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hash,cljs.core.deref(_BANG_hash))){
} else {
cljs.core.reset_BANG_(_BANG_hash,hash);

cljs.core.reset_BANG_(_BANG_fetch_opts,fetch_opts);

cljs.core.reset_BANG_(_BANG_desc,nextjournal.clerk.render.read_result(result,_BANG_error));

cljs.core.reset_BANG_(_BANG_error,null);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),fetch_fn], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.clerk.render.ErrorBoundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!error","!error",-223168506),_BANG_error], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-y-hidden","div.overflow-y-hidden",1952845994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694),_BANG_expanded_at], null),cljs.core.deref(_BANG_desc)], null)], null)], null)], null)], null);
})()
;
return res82117;
});
nextjournal.clerk.render.toggle_expanded = (function nextjournal$clerk$render$toggle_expanded(_BANG_expanded_at,path,event){
event.preventDefault();

event.stopPropagation();

var map__82121 = cljs.core.deref(_BANG_expanded_at);
var map__82121__$1 = cljs.core.__destructure_map(map__82121);
var hover_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82121__$1,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
var prompt_multi_expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82121__$1,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
var hover_path_count = cljs.core.count(hover_path);
var hover_path_expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
if(cljs.core.truth_((function (){var and__4251__auto__ = hover_path;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = prompt_multi_expand_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),hover_path_count);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_expanded_at,(function (expanded_at){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__82122){
var vec__82123 = p__82122;
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82123,(0),null);
var expanded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82123,(1),null);
if(((cljs.core.coll_QMARK_(path__$1)) && (((cljs.core.vector_QMARK_(path__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path__$1),hover_path_count)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,path__$1,cljs.core.not(hover_path_expanded_QMARK_));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,path__$1,expanded_QMARK_);
}
}),cljs.core.PersistentArrayMap.EMPTY,expanded_at);
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.update,path,cljs.core.not);
}
});
nextjournal.clerk.render.expandable_QMARK_ = (function nextjournal$clerk$render$expandable_QMARK_(xs){
return ((1) < cljs.core.count(xs));
});
nextjournal.clerk.render.inspect_children = (function nextjournal$clerk$render$inspect_children(opts){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,x){
var G__82126 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),idx);
var G__82127 = x;
return (nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2(G__82126,G__82127) : nextjournal.clerk.render.inspect_presented.call(null,G__82126,G__82127));
}));
});
nextjournal.clerk.render.expand_style = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor-pointer","bg-indigo-50","hover:bg-indigo-100","border-b","border-gray-400","hover:border-gray-500","dark:bg-gray-900","dark:hover:bg-slate-700","dark:border-slate-600","dark:hover:border-slate-500"], null);
nextjournal.clerk.render.triangle = (function nextjournal$clerk$render$triangle(expanded_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"class","class",-2030961996),["w-[7px] h-[7px] fill-current inline-block transition-all mr-[1px] -mt-[2px] ",(cljs.core.truth_(expanded_QMARK_)?"rotate-180":"rotate-90")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),"5.9,88.2 50,11.8 94.1,88.2 "], null)], null)], null);
});
nextjournal.clerk.render.triangle_spacer = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-block w-[8px]"], null)], null);
nextjournal.clerk.render.expand_button = (function nextjournal$clerk$render$expand_button(_BANG_expanded_at,opening_paren,path){
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__82128 = cljs.core.deref(_BANG_expanded_at);
var map__82128__$1 = cljs.core.__destructure_map(map__82128);
var hover_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82128__$1,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
var prompt_multi_expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82128__$1,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
var multi_expand_QMARK_ = (function (){var and__4251__auto__ = hover_path;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = prompt_multi_expand_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),cljs.core.count(hover_path));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group.hover:bg-indigo-100.rounded-sm.hover:shadow.cursor-pointer","span.group.hover:bg-indigo-100.rounded-sm.hover:shadow.cursor-pointer",-1703697853),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(multi_expand_QMARK_)?"bg-indigo-100 shadow ":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.render.toggle_expanded,_BANG_expanded_at,path),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.assoc,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491),path);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-slate-400.group-hover:text-indigo-700","span.text-slate-400.group-hover:text-indigo-700",438525494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(multi_expand_QMARK_)?"text-indigo-700 ":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.triangle,expanded_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group-hover:text-indigo-700","span.group-hover:text-indigo-700",-444234631),opening_paren], null)], null);
});
nextjournal.clerk.render.render_coll = (function nextjournal$clerk$render$render_coll(xs,p__82135){
var map__82136 = p__82135;
var map__82136__$1 = cljs.core.__destructure_map(map__82136);
var opts = map__82136__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82136__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82136__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82136__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__82137 = viewer;
var map__82137__$1 = cljs.core.__destructure_map(map__82137);
var opening_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82137__$1,new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203));
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82137__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"inline-flex":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((((1) < cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.expand_button,_BANG_expanded_at,opening_paren,path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),opening_paren], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render.inspect_children(opts),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),nextjournal.clerk.render.triangle_spacer,nextjournal.clerk.render.nbsp,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(opening_paren)))?nextjournal.clerk.render.nbsp:null)], null):" "))),xs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__82139 = closing_paren;
if(cljs.core.list_QMARK_(closing_paren)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),G__82139);
} else {
return G__82139;
}
})()], null)], null)], null);
});
nextjournal.clerk.render.render_elision = (function nextjournal$clerk$render$render_elision(p__82140,_){
var map__82141 = p__82140;
var map__82141__$1 = cljs.core.__destructure_map(map__82141);
var fetch_opts = map__82141__$1;
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82141__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82141__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var unbounded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82141__$1,new cljs.core.Keyword(null,"unbounded?","unbounded?",1662946650));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.consume,new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (fetch_fn){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sans-serif.relative.whitespace-nowrap","span.sans-serif.relative.whitespace-nowrap",1223699353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(2),new cljs.core.Keyword(null,"padding","padding",1660304693),((cljs.core.fn_QMARK_(fetch_fn))?"1px 3px":null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11),new cljs.core.Keyword(null,"top","top",-1856271961),(-1)], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.fn_QMARK_(fetch_fn))?"cursor-pointer bg-indigo-200 hover:bg-indigo-300 dark:bg-gray-700 dark:hover:bg-slate-600 text-gray-900 dark:text-white":"text-gray-400 dark:text-slate-300"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.fn_QMARK_(fetch_fn)){
return (fetch_fn.cljs$core$IFn$_invoke$arity$1 ? fetch_fn.cljs$core$IFn$_invoke$arity$1(fetch_opts) : fetch_fn.call(null,fetch_opts));
} else {
return null;
}
})], null),(total - offset),(cljs.core.truth_(unbounded_QMARK_)?"+":null),((cljs.core.fn_QMARK_(fetch_fn))?" more\u2026":" more elided")], null);
})], null);
});
nextjournal.clerk.render.render_map = (function nextjournal$clerk$render$render_map(xs,p__82142){
var map__82143 = p__82142;
var map__82143__$1 = cljs.core.__destructure_map(map__82143);
var opts = map__82143__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82143__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82143__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82143__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__82144 = viewer;
var map__82144__$1 = cljs.core.__destructure_map(map__82144);
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82144__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"inline-flex":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((nextjournal.clerk.render.expandable_QMARK_(xs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.expand_button,_BANG_expanded_at,"{",path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{"], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render.inspect_children(opts),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),nextjournal.clerk.render.triangle_spacer,nextjournal.clerk.render.nbsp], null):" "))),xs),(function (){var G__82146 = closing_paren;
if(cljs.core.list_QMARK_(closing_paren)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),G__82146);
} else {
return G__82146;
}
})()], null)], null);
});
nextjournal.clerk.render.render_string = (function nextjournal$clerk$render$render_string(s,p__82148){
var map__82149 = p__82148;
var map__82149__$1 = cljs.core.__destructure_map(map__82149);
var opts = map__82149__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82149__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82149__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__82147_SHARP_){
if(typeof p1__82147_SHARP_ === 'string'){
if(cljs.core.truth_(expanded_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),clojure.string.split_lines(p1__82147_SHARP_)));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-slate-400","span.text-slate-400",-1212905222),"\u21A9\uFE0E"], null),clojure.string.split_lines(p1__82147_SHARP_)));
}
} else {
return (nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2(opts,p1__82147_SHARP_) : nextjournal.clerk.render.inspect_presented.call(null,opts,p1__82147_SHARP_));
}
})),((typeof s === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null):s));
});
nextjournal.clerk.render.render_quoted_string = (function nextjournal$clerk$render$render_quoted_string(s,p__82156){
var map__82157 = p__82156;
var map__82157__$1 = cljs.core.__destructure_map(map__82157);
var opts = map__82157__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82157__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82157__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82157__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var map__82162 = viewer;
var map__82162__$1 = cljs.core.__destructure_map(map__82162);
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82162__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-string.inspected-value.whitespace-nowrap.inline-flex","span.cmt-string.inspected-value.whitespace-nowrap.inline-flex",1767737962),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(cljs.core.some((function (p1__82155_SHARP_){
return ((typeof p1__82155_SHARP_ === 'string') && (clojure.string.includes_QMARK_(p1__82155_SHARP_,"\n")));
}),((typeof s === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null):s)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.expand_button,_BANG_expanded_at,"\"",path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\""], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),nextjournal.clerk.viewer.__GT_value(nextjournal.clerk.render.render_string(s,opts)),"\"",closing_paren], null)], null);
});
nextjournal.clerk.render.render_number = (function nextjournal$clerk$render$render_number(num){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-number.inspected-value","span.cmt-number.inspected-value",1512437969),(cljs.core.truth_(Number.isNaN(num))?"NaN":cljs.core.str.cljs$core$IFn$_invoke$arity$1(num))], null);
});
nextjournal.clerk.render.sort_BANG_ = (function nextjournal$clerk$render$sort_BANG_(_BANG_sort,i,k){
var map__82165 = cljs.core.deref(_BANG_sort);
var map__82165__$1 = cljs.core.__destructure_map(map__82165);
var sort_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82165__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82165__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
return cljs.core.reset_BANG_(_BANG_sort,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-index","sort-index",-1082353222),i,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),k,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key,k))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order,new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569)):new cljs.core.Keyword(null,"asc","asc",356854569))], null));
});
nextjournal.clerk.render.sort_data = (function nextjournal$clerk$render$sort_data(p__82172,p__82173){
var map__82177 = p__82172;
var map__82177__$1 = cljs.core.__destructure_map(map__82177);
var sort_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82177__$1,new cljs.core.Keyword(null,"sort-index","sort-index",-1082353222));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82177__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var map__82178 = p__82173;
var map__82178__$1 = cljs.core.__destructure_map(map__82178);
var data = map__82178__$1;
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82178__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82178__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var G__82179 = data;
if(cljs.core.truth_(head)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82179,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__82166_SHARP_){
var G__82180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__82166_SHARP_,sort_index);
if(typeof cljs.core.val === 'string'){
return clojure.string.lower_case(G__82180);
} else {
return G__82180;
}
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order,new cljs.core.Keyword(null,"asc","asc",356854569)))?(function (p1__82167_SHARP_,p2__82168_SHARP_){
return cljs.core.compare(p1__82167_SHARP_,p2__82168_SHARP_);
}):(function (p1__82170_SHARP_,p2__82169_SHARP_){
return cljs.core.compare(p2__82169_SHARP_,p1__82170_SHARP_);
})),rows)));
} else {
return G__82179;
}
});
nextjournal.clerk.render.x_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.render.check_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.render.render_table_error = (function nextjournal$clerk$render$render_table_error(p__82184){
var vec__82185 = p__82184;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82185,(0),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-400.not-prose","div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-400.not-prose",472299052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.mt-0.uppercase.text-xs.dark:text-red-400.tracking-wide","h4.mt-0.uppercase.text-xs.dark:text-red-400.tracking-wide",-1114358129),"Table Error"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-4.font-medium","p.mt-4.font-medium",778592363),"Clerk\u2019s table viewer does not recognize the format of your data:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex","div.mt-2.flex",-812335696),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-red-500.mr-2","div.text-red-500.mr-2",-1965802655),nextjournal.clerk.render.x_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,data], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-4.font-medium","p.mt-4.font-medium",778592363),"Currently, the following formats are supported:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"column-2","column-2",1966117147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),(1),new cljs.core.Keyword(null,"column-2","column-2",1966117147),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),(2),new cljs.core.Keyword(null,"column-2","column-2",1966117147),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-1","column-1",844467295),new cljs.core.Keyword(null,"column-2","column-2",1966117147)], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null)], null)], null)], null)], null);
});
nextjournal.clerk.render.throwable_view = (function nextjournal$clerk$render$throwable_view(p__82188){
var map__82189 = p__82188;
var map__82189__$1 = cljs.core.__destructure_map(map__82189);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82189__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82189__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.max-w-6xl.mx-auto.text-xs.monospace.not-prose","div.bg-white.max-w-6xl.mx-auto.text-xs.monospace.not-prose",-741753812),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__82190){
var map__82191 = p__82190;
var map__82191__$1 = cljs.core.__destructure_map(map__82191);
var _ex = map__82191__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82191__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82191__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82191__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var _trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82191__$1,new cljs.core.Keyword(null,"_trace","_trace",-196725681));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.bg-red-100.border-b.border-b-gray-300","div.p-4.bg-red-100.border-b.border-b-gray-300",-1067794245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"Unhandled ",type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold.mt-1","div.font-bold.mt-1",-1699801213),message], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,data], null)], null)], null);
}),via)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-6.overflow-x-auto","div.py-6.overflow-x-auto",-1663715111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.w-full","table.w-full",1746679141),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__82193){
var vec__82194 = p__82193;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82194,(0),null);
var _x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82194,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82194,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82194,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.hover:bg-red-100.leading-tight","tr.hover:bg-red-100.leading-tight",96605729),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right.px-6","td.text-right.px-6",324007517),file,":"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right.pr-6","td.text-right.pr-6",1739173277),line], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.py-1.pr-6","td.py-1.pr-6",1245547684),call], null)], null);
})),trace)], null)], null)], null);
});
nextjournal.clerk.render.render_throwable = (function nextjournal$clerk$render$render_throwable(ex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.throwable_view,ex], null);
});
nextjournal.clerk.render.render_tagged_value = (function nextjournal$clerk$render$render_tagged_value(var_args){
var G__82204 = arguments.length;
switch (G__82204) {
case 2:
return nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$2 = (function (tag,value){
return nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space?","space?",-1369314665),true], null),tag,value);
}));

(nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$3 = (function (p__82208,tag,value){
var map__82209 = p__82208;
var map__82209__$1 = cljs.core.__destructure_map(map__82209);
var space_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82209__$1,new cljs.core.Keyword(null,"space?","space?",-1369314665));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),tag], null),(cljs.core.truth_(space_QMARK_)?nextjournal.clerk.render.nbsp:null),value], null);
}));

(nextjournal.clerk.render.render_tagged_value.cljs$lang$maxFixedArity = 3);

if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_doc !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_doc = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_error !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_error = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_viewers !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_viewers = nextjournal.clerk.viewer._BANG_viewers;
}
nextjournal.clerk.render.set_viewers_BANG_ = (function nextjournal$clerk$render$set_viewers_BANG_(scope,viewers){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.clerk.render._BANG_viewers,cljs.core.assoc,scope,cljs.core.vec(viewers));

return new cljs.core.Symbol(null,"set-viewers!","set-viewers!",-745204889,null);
});
nextjournal.clerk.render.valid_react_element_QMARK_ = (function nextjournal$clerk$render$valid_react_element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
nextjournal.clerk.render.inspect_presented = (function nextjournal$clerk$render$inspect_presented(var_args){
var G__82217 = arguments.length;
switch (G__82217) {
case 1:
return nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$1 = (function (x){
var with_let82222 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let82222","with-let82222",-1624263839));
var temp__5757__auto___82465 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___82465 == null)){
} else {
var c__70033__auto___82466 = temp__5757__auto___82465;
if((with_let82222.generation === c__70033__auto___82466.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let82222.generation = c__70033__auto___82466.ratomGeneration);
}

var init82223 = (with_let82222.length === (0));
var _BANG_expanded_at = ((((init82223) || (cljs.core.not(with_let82222.hasOwnProperty((0))))))?(with_let82222[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009).cljs$core$IFn$_invoke$arity$1(x))):(with_let82222[(0)]));
var res82224 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694),_BANG_expanded_at], null),x], null);
return res82224;
}));

(nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2 = (function (opts,x){
if(cljs.core.truth_(nextjournal.clerk.render.valid_react_element_QMARK_(x))){
return x;
} else {
var map__82227 = x;
var map__82227__$1 = cljs.core.__destructure_map(map__82227);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82227__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82227__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(viewer),value,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer], null)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(viewer)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.peek(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)))].join('')], null));
}
}));

(nextjournal.clerk.render.inspect_presented.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.render.in_process_fetch = (function nextjournal$clerk$render$in_process_fetch(value,opts){
return Promise.resolve(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2(value,opts));
});
nextjournal.clerk.render.inspect = (function nextjournal$clerk$render$inspect(value){
var with_let82232 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let82232","with-let82232",-2095993557));
var temp__5757__auto___82467 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___82467 == null)){
} else {
var c__70033__auto___82468 = temp__5757__auto___82467;
if((with_let82232.generation === c__70033__auto___82468.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let82232.generation = c__70033__auto___82468.ratomGeneration);
}

var init82233 = (with_let82232.length === (0));
var _BANG_state = ((((init82233) || (cljs.core.not(with_let82232.hasOwnProperty((0))))))?(with_let82232[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let82232[(0)]));
var res82234 = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_state),new cljs.core.Keyword("nextjournal.clerk.render","not-found","nextjournal.clerk.render/not-found",-247770595)),value)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"desc","desc",2093485764),nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1(value)], 0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (fetch_opts){
return nextjournal.clerk.render.in_process_fetch(value,fetch_opts).then((function (more){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.update,new cljs.core.Keyword(null,"desc","desc",2093485764),nextjournal.clerk.viewer.merge_presentations,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more,fetch_opts], 0));
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_state))], null)], null);
})()
;
return res82234;
});
nextjournal.clerk.render.root = (function nextjournal$clerk$render$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,cljs.core.deref(nextjournal.clerk.render._BANG_doc)], null),(cljs.core.truth_(cljs.core.deref(nextjournal.clerk.render._BANG_error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-0.left-0.w-full.h-full","div.fixed.top-0.left-0.w-full.h-full",1721394456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,cljs.core.deref(nextjournal.clerk.render._BANG_error)], null)], null):null)], null);
});
nextjournal.clerk.render.intern_atom_BANG_ = (function nextjournal$clerk$render$intern_atom_BANG_(sci_ctx,p__82235){
var vec__82236 = p__82235;
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82236,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82236,(1),null);
if(cljs.core.truth_(sci_ctx)){
} else {
throw (new Error(["Assert failed: ","sci-ctx must be set","\n","sci-ctx"].join('')));
}

var temp__5751__auto__ = sci.core.resolve(sci_ctx,var_name);
if(cljs.core.truth_(temp__5751__auto__)){
var existing_var = temp__5751__auto__;
return cljs.core.reset_BANG_(cljs.core.deref(existing_var),state);
} else {
return sci.core.intern.cljs$core$IFn$_invoke$arity$4(sci_ctx,sci.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(var_name))),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(var_name)),cljs.core.with_meta(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-name","var-name",-574747624),var_name], null)));
}
});
nextjournal.clerk.render.set_state = (function nextjournal$clerk$render$set_state(p__82241){
var map__82242 = p__82241;
var map__82242__$1 = cljs.core.__destructure_map(map__82242);
var state = map__82242__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82242__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82242__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var remount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82242__$1,new cljs.core.Keyword(null,"remount?","remount?",1072689773));
var sci_ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82242__$1,new cljs.core.Keyword(null,"sci-ctx","sci-ctx",738981263));
var seq__82243_82472 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword(null,"atom-var-name->state","atom-var-name->state",1433683400)], null)));
var chunk__82244_82473 = null;
var count__82245_82474 = (0);
var i__82246_82475 = (0);
while(true){
if((i__82246_82475 < count__82245_82474)){
var atom_var_82476 = chunk__82244_82473.cljs$core$IIndexed$_nth$arity$2(null,i__82246_82475);
nextjournal.clerk.render.intern_atom_BANG_(sci_ctx,atom_var_82476);


var G__82478 = seq__82243_82472;
var G__82479 = chunk__82244_82473;
var G__82480 = count__82245_82474;
var G__82481 = (i__82246_82475 + (1));
seq__82243_82472 = G__82478;
chunk__82244_82473 = G__82479;
count__82245_82474 = G__82480;
i__82246_82475 = G__82481;
continue;
} else {
var temp__5753__auto___82482 = cljs.core.seq(seq__82243_82472);
if(temp__5753__auto___82482){
var seq__82243_82483__$1 = temp__5753__auto___82482;
if(cljs.core.chunked_seq_QMARK_(seq__82243_82483__$1)){
var c__4679__auto___82484 = cljs.core.chunk_first(seq__82243_82483__$1);
var G__82485 = cljs.core.chunk_rest(seq__82243_82483__$1);
var G__82486 = c__4679__auto___82484;
var G__82487 = cljs.core.count(c__4679__auto___82484);
var G__82488 = (0);
seq__82243_82472 = G__82485;
chunk__82244_82473 = G__82486;
count__82245_82474 = G__82487;
i__82246_82475 = G__82488;
continue;
} else {
var atom_var_82489 = cljs.core.first(seq__82243_82483__$1);
nextjournal.clerk.render.intern_atom_BANG_(sci_ctx,atom_var_82489);


var G__82490 = cljs.core.next(seq__82243_82483__$1);
var G__82491 = null;
var G__82492 = (0);
var G__82493 = (0);
seq__82243_82472 = G__82490;
chunk__82244_82473 = G__82491;
count__82245_82474 = G__82492;
i__82246_82475 = G__82493;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(remount_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render._BANG_eval_counter,cljs.core.inc);
} else {
}

if(cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"doc","doc",1913296891))){
cljs.core.reset_BANG_(nextjournal.clerk.render._BANG_doc,doc);
} else {
}

cljs.core.reset_BANG_(nextjournal.clerk.render._BANG_error,error);

var temp__5753__auto__ = (function (){var and__4251__auto__ = (typeof document !== 'undefined');
if(and__4251__auto__){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_value(doc));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var title = temp__5753__auto__;
return (document.title = title);
} else {
return null;
}
});
goog.exportSymbol('nextjournal.clerk.render.set_state', nextjournal.clerk.render.set_state);
nextjournal.clerk.render.swap_fn_BANG_ = (function nextjournal$clerk$render$swap_fn_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82496 = arguments.length;
var i__4865__auto___82497 = (0);
while(true){
if((i__4865__auto___82497 < len__4864__auto___82496)){
args__4870__auto__.push((arguments[i__4865__auto___82497]));

var G__82498 = (i__4865__auto___82497 + (1));
i__4865__auto___82497 = G__82498;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return nextjournal.clerk.render.swap_fn_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(nextjournal.clerk.render.swap_fn_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,swap_args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,atom,swap_args);

var temp__5751__auto__ = new cljs.core.Keyword(null,"var-name","var-name",-574747624).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(atom));
if(cljs.core.truth_(temp__5751__auto__)){
var var_name = temp__5751__auto__;
return ws_send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"swap!","swap!",1998758253),new cljs.core.Keyword(null,"var-name","var-name",-574747624),var_name,new cljs.core.Keyword(null,"args","args",1315556576),nextjournal.clerk.viewer.__GT_viewer_eval(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(new cljs.core.List(null,cljs.core.deref(atom),null,(1),null)),(2),null)),(3),null))], null)),new cljs.core.Keyword(null,"var","var",-769682797),nextjournal.clerk.viewer.__GT_viewer_eval((new cljs.core.List(null,new cljs.core.Symbol(null,"resolve","resolve",56086045,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,var_name,null,(1),null)),(2),null)),null,(1),null)),(2),null)))], null)], 0)));
} else {
return console.warn("clerk/swap-fn! called on an atom that doesn't have var-name set!");
}
}));

(nextjournal.clerk.render.swap_fn_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.clerk.render.swap_fn_BANG_.cljs$lang$applyTo = (function (seq82253){
var G__82254 = cljs.core.first(seq82253);
var seq82253__$1 = cljs.core.next(seq82253);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82254,seq82253__$1);
}));

nextjournal.clerk.render.swap_clerk_atom_BANG_ = (function nextjournal$clerk$render$swap_clerk_atom_BANG_(p__82258){
var map__82259 = p__82258;
var map__82259__$1 = cljs.core.__destructure_map(map__82259);
var event = map__82259__$1;
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82259__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82259__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82259__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.deref(var$),args);
});
nextjournal.clerk.render.dispatch = (function nextjournal$clerk$render$dispatch(p__82262){
var map__82263 = p__82262;
var map__82263__$1 = cljs.core.__destructure_map(map__82263);
var msg = map__82263__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82263__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch_fn = (function (){var G__82265 = type;
var G__82266 = (function (type__$1){
return console.warn(["no on-message dispatch for type `",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type__$1], 0)),"`"].join(''));
});
var fexpr__82264 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-state!","set-state!",1449612100),nextjournal.clerk.render.set_state,new cljs.core.Keyword(null,"swap!","swap!",1998758253),nextjournal.clerk.render.swap_clerk_atom_BANG_], null);
return (fexpr__82264.cljs$core$IFn$_invoke$arity$2 ? fexpr__82264.cljs$core$IFn$_invoke$arity$2(G__82265,G__82266) : fexpr__82264.call(null,G__82265,G__82266));
})();
return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(msg) : dispatch_fn.call(null,msg));
});
goog.exportSymbol('nextjournal.clerk.render.dispatch', nextjournal.clerk.render.dispatch);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render.react_root !== 'undefined')){
} else {
nextjournal.clerk.render.react_root = (function (){var temp__5753__auto__ = (function (){var and__4251__auto__ = (typeof document !== 'undefined');
if(and__4251__auto__){
return document.getElementById("clerk");
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return module$node_modules$react_dom$client.createRoot(el);
} else {
return null;
}
})();
}
nextjournal.clerk.render.mount = (function nextjournal$clerk$render$mount(){
if(cljs.core.truth_(nextjournal.clerk.render.react_root)){
return nextjournal.clerk.render.react_root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.root], null)));
} else {
return null;
}
});
goog.exportSymbol('nextjournal.clerk.render.mount', nextjournal.clerk.render.mount);
nextjournal.clerk.render.clerk_eval = (function nextjournal$clerk$render$clerk_eval(form){
return goog.global.ws_send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"form","form",-1624062471),form], null)], 0)));
});
nextjournal.clerk.render.render_katex = (function nextjournal$clerk$render$render_katex(tex_string,p__82272){
var map__82273 = p__82272;
var map__82273__$1 = cljs.core.__destructure_map(map__82273);
var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82273__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$2(tex_string,({"displayMode":cljs.core.not(inline_QMARK_)}))], null)], null)], null);
});
nextjournal.clerk.render.html_render = (function nextjournal$clerk$render$html_render(markup){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(((typeof markup === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markup], null)], null)], null):markup));
});
nextjournal.clerk.render.html_viewer = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.render.html_render], null);
nextjournal.clerk.render.html = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.render.html_viewer);
nextjournal.clerk.render.render_reagent = (function nextjournal$clerk$render$render_reagent(x){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var G__82286 = x;
if(cljs.core.fn_QMARK_(x)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__82286],null));
} else {
return G__82286;
}
})());
});
nextjournal.clerk.render.reagent_viewer = nextjournal.clerk.render.render_reagent;
/**
 * React hook which resolves a promise and handles errors.
 */
nextjournal.clerk.render.use_promise = (function nextjournal$clerk$render$use_promise(p){
var handle_error = nextjournal.clerk.render.use_handle_error();
var _BANG_state = nextjournal.clerk.render.use_state(null);
nextjournal.clerk.render.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return p.then((function (p1__82288_SHARP_){
return cljs.core.reset_BANG_(_BANG_state,p1__82288_SHARP_);
})).catch(handle_error);
}),[]);

return cljs.core.deref(_BANG_state);
});
nextjournal.clerk.render.use_d3_require = (function nextjournal$clerk$render$use_d3_require(package$){
var p = module$node_modules$react$index.useMemo((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$d3_require$dist$d3_require.require,(function (){var G__82293 = package$;
if(typeof package$ === 'string'){
return (new cljs.core.List(null,G__82293,null,(1),null));
} else {
return G__82293;
}
})());
}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$)]);
return nextjournal.clerk.render.use_promise(p);
});
nextjournal.clerk.render.with_d3_require = (function nextjournal$clerk$render$with_d3_require(p__82294,f){
var map__82295 = p__82294;
var map__82295__$1 = cljs.core.__destructure_map(map__82295);
var package$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82295__$1,new cljs.core.Keyword(null,"package","package",1189062786));
var loading_view = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82295__$1,new cljs.core.Keyword(null,"loading-view","loading-view",1386748874),nextjournal.clerk.render.default_loading_view);
var temp__5751__auto__ = nextjournal.clerk.render.use_d3_require(package$);
if(cljs.core.truth_(temp__5751__auto__)){
var package$__$1 = temp__5751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(package$__$1) : f.call(null,package$__$1));
} else {
return loading_view;
}
});
nextjournal.clerk.render.render_vega_lite = (function nextjournal$clerk$render$render_vega_lite(value){
var handle_error = nextjournal.clerk.render.use_handle_error();
var vega_embed = nextjournal.clerk.render.use_d3_require("vega-embed@6.11.1");
var ref_fn = module$node_modules$react$index.useCallback((function (p1__82296_SHARP_){
if(cljs.core.truth_(p1__82296_SHARP_)){
return vega_embed.embed(p1__82296_SHARP_,cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("embed","opts","embed/opts",187667792))),cljs.core.clj__GT_js(new cljs.core.Keyword("embed","opts","embed/opts",187667792).cljs$core$IFn$_invoke$arity$2(value,cljs.core.PersistentArrayMap.EMPTY))).catch(handle_error);
} else {
return null;
}
}),[value,vega_embed]);
if(cljs.core.truth_(value)){
if(cljs.core.truth_(vega_embed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto","div.overflow-x-auto",-1359457684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vega-lite","div.vega-lite",1198823274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)], null);
} else {
return nextjournal.clerk.render.default_loading_view;
}
} else {
return null;
}
});
nextjournal.clerk.render.render_plotly = (function nextjournal$clerk$render$render_plotly(value){
var plotly = nextjournal.clerk.render.use_d3_require("plotly.js-dist@2.15.1");
var ref_fn = module$node_modules$react$index.useCallback((function (p1__82297_SHARP_){
if(cljs.core.truth_(p1__82297_SHARP_)){
return plotly.newPlot(p1__82297_SHARP_,cljs.core.clj__GT_js(value));
} else {
return null;
}
}),[value,plotly]);
if(cljs.core.truth_(value)){
if(cljs.core.truth_(plotly)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto","div.overflow-x-auto",-1359457684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plotly","div.plotly",-1155863466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)], null);
} else {
return nextjournal.clerk.render.default_loading_view;
}
} else {
return null;
}
});
nextjournal.clerk.render.render_mathjax = nextjournal.viewer.mathjax.viewer;
nextjournal.clerk.render.render_code = nextjournal.viewer.code.viewer;
nextjournal.clerk.render.expand_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"width","width",-384071477),(12),new cljs.core.Keyword(null,"height","height",1025178622),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.render.render_folded_code = (function nextjournal$clerk$render$render_folded_code(code_string){
var with_let82299 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let82299","with-let82299",-2121635760));
var temp__5757__auto___82504 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___82504 == null)){
} else {
var c__70033__auto___82505 = temp__5757__auto___82504;
if((with_let82299.generation === c__70033__auto___82505.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let82299.generation = c__70033__auto___82505.ratomGeneration);
}

var init82300 = (with_let82299.length === (0));
var _BANG_hidden_QMARK_ = ((((init82300) || (cljs.core.not(with_let82299.hasOwnProperty((0))))))?(with_let82299[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true)):(with_let82299[(0)]));
var res82301 = (cljs.core.truth_(cljs.core.deref(_BANG_hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group","div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group",45115011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hover:text-slate-500","span.hover:text-slate-500",807205573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hidden_QMARK_,cljs.core.not);
})], null),"show code"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group.mb-1","div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group.mb-1",1365696722),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hover:text-slate-500","span.hover:text-slate-500",807205573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hidden_QMARK_,cljs.core.not);
})], null),"hide code"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-code.mb-2.relative","div.viewer-code.mb-2.relative",-490925077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.render_code,code_string], null)], null)], null));
return res82301;
});
nextjournal.clerk.render.url_for = (function nextjournal$clerk$render$url_for(p__82308){
var map__82309 = p__82308;
var map__82309__$1 = cljs.core.__destructure_map(map__82309);
var src = map__82309__$1;
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82309__$1,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970));
if(typeof src === 'string'){
return src;
} else {
return ["/_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_id),(function (){var temp__5753__auto__ = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(src,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970)));
if(temp__5753__auto__){
var opts = temp__5753__auto__;
return ["?",nextjournal.clerk.render.opts__GT_query(opts)].join('');
} else {
return null;
}
})()].join('');
}
});

//# sourceMappingURL=nextjournal.clerk.render.js.map
