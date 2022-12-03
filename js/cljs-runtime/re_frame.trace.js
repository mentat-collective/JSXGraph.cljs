goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__64558){
var map__64559 = p__64558;
var map__64559__$1 = cljs.core.__destructure_map(map__64559);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64559__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64559__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64559__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64559__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__64560_64587 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__64561_64588 = null;
var count__64562_64589 = (0);
var i__64563_64590 = (0);
while(true){
if((i__64563_64590 < count__64562_64589)){
var vec__64574_64591 = chunk__64561_64588.cljs$core$IIndexed$_nth$arity$2(null,i__64563_64590);
var k_64592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64574_64591,(0),null);
var cb_64593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64574_64591,(1),null);
try{var G__64578_64594 = cljs.core.deref(re_frame.trace.traces);
(cb_64593.cljs$core$IFn$_invoke$arity$1 ? cb_64593.cljs$core$IFn$_invoke$arity$1(G__64578_64594) : cb_64593.call(null,G__64578_64594));
}catch (e64577){var e_64595 = e64577;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64592,"while storing",cljs.core.deref(re_frame.trace.traces),e_64595], 0));
}

var G__64596 = seq__64560_64587;
var G__64597 = chunk__64561_64588;
var G__64598 = count__64562_64589;
var G__64599 = (i__64563_64590 + (1));
seq__64560_64587 = G__64596;
chunk__64561_64588 = G__64597;
count__64562_64589 = G__64598;
i__64563_64590 = G__64599;
continue;
} else {
var temp__5753__auto___64600 = cljs.core.seq(seq__64560_64587);
if(temp__5753__auto___64600){
var seq__64560_64601__$1 = temp__5753__auto___64600;
if(cljs.core.chunked_seq_QMARK_(seq__64560_64601__$1)){
var c__4679__auto___64602 = cljs.core.chunk_first(seq__64560_64601__$1);
var G__64603 = cljs.core.chunk_rest(seq__64560_64601__$1);
var G__64604 = c__4679__auto___64602;
var G__64605 = cljs.core.count(c__4679__auto___64602);
var G__64606 = (0);
seq__64560_64587 = G__64603;
chunk__64561_64588 = G__64604;
count__64562_64589 = G__64605;
i__64563_64590 = G__64606;
continue;
} else {
var vec__64579_64607 = cljs.core.first(seq__64560_64601__$1);
var k_64608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64579_64607,(0),null);
var cb_64609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64579_64607,(1),null);
try{var G__64583_64610 = cljs.core.deref(re_frame.trace.traces);
(cb_64609.cljs$core$IFn$_invoke$arity$1 ? cb_64609.cljs$core$IFn$_invoke$arity$1(G__64583_64610) : cb_64609.call(null,G__64583_64610));
}catch (e64582){var e_64611 = e64582;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64608,"while storing",cljs.core.deref(re_frame.trace.traces),e_64611], 0));
}

var G__64612 = cljs.core.next(seq__64560_64601__$1);
var G__64613 = null;
var G__64614 = (0);
var G__64615 = (0);
seq__64560_64587 = G__64612;
chunk__64561_64588 = G__64613;
count__64562_64589 = G__64614;
i__64563_64590 = G__64615;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
