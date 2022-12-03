goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registry.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registry/kinds kind)"));
}
re_frame.fx.register_built_in_BANG_ = (function re_frame$fx$register_built_in_BANG_(p__64843){
var map__64844 = p__64843;
var map__64844__$1 = cljs.core.__destructure_map(map__64844);
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64844__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var reg_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.registry.register_handler,registry,re_frame.fx.kind);
reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value,p__64845){
var map__64846 = p__64845;
var map__64846__$1 = cljs.core.__destructure_map(map__64846);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64846__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
var seq__64847 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__64848 = null;
var count__64849 = (0);
var i__64850 = (0);
while(true){
if((i__64850 < count__64849)){
var map__64856 = chunk__64848.cljs$core$IIndexed$_nth$arity$2(null,i__64850);
var map__64856__$1 = cljs.core.__destructure_map(map__64856);
var effect = map__64856__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64856__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64856__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__64847,chunk__64848,count__64849,i__64850,map__64856,map__64856__$1,effect,ms,dispatch,map__64846,map__64846__$1,event_queue,reg_fx,map__64844,map__64844__$1,registry){
return (function (){
return re_frame.router.dispatch(event_queue,dispatch);
});})(seq__64847,chunk__64848,count__64849,i__64850,map__64856,map__64856__$1,effect,ms,dispatch,map__64846,map__64846__$1,event_queue,reg_fx,map__64844,map__64844__$1,registry))
,ms);
}


var G__64937 = seq__64847;
var G__64938 = chunk__64848;
var G__64939 = count__64849;
var G__64940 = (i__64850 + (1));
seq__64847 = G__64937;
chunk__64848 = G__64938;
count__64849 = G__64939;
i__64850 = G__64940;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64847);
if(temp__5753__auto__){
var seq__64847__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64847__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64847__$1);
var G__64941 = cljs.core.chunk_rest(seq__64847__$1);
var G__64942 = c__4679__auto__;
var G__64943 = cljs.core.count(c__4679__auto__);
var G__64944 = (0);
seq__64847 = G__64941;
chunk__64848 = G__64942;
count__64849 = G__64943;
i__64850 = G__64944;
continue;
} else {
var map__64857 = cljs.core.first(seq__64847__$1);
var map__64857__$1 = cljs.core.__destructure_map(map__64857);
var effect = map__64857__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64857__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64857__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__64847,chunk__64848,count__64849,i__64850,map__64857,map__64857__$1,effect,ms,dispatch,seq__64847__$1,temp__5753__auto__,map__64846,map__64846__$1,event_queue,reg_fx,map__64844,map__64844__$1,registry){
return (function (){
return re_frame.router.dispatch(event_queue,dispatch);
});})(seq__64847,chunk__64848,count__64849,i__64850,map__64857,map__64857__$1,effect,ms,dispatch,seq__64847__$1,temp__5753__auto__,map__64846,map__64846__$1,event_queue,reg_fx,map__64844,map__64844__$1,registry))
,ms);
}


var G__64945 = cljs.core.next(seq__64847__$1);
var G__64946 = null;
var G__64947 = (0);
var G__64948 = (0);
seq__64847 = G__64945;
chunk__64848 = G__64946;
count__64849 = G__64947;
i__64850 = G__64948;
continue;
}
} else {
return null;
}
}
break;
}
}));

reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value,p__64859){
var map__64860 = p__64859;
var map__64860__$1 = cljs.core.__destructure_map(map__64860);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64860__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(event_queue,value);
}
}));

reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value,p__64861){
var map__64862 = p__64861;
var map__64862__$1 = cljs.core.__destructure_map(map__64862);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64862__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__64863 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__64864 = null;
var count__64865 = (0);
var i__64866 = (0);
while(true){
if((i__64866 < count__64865)){
var event = chunk__64864.cljs$core$IIndexed$_nth$arity$2(null,i__64866);
re_frame.router.dispatch(event_queue,event);


var G__64949 = seq__64863;
var G__64950 = chunk__64864;
var G__64951 = count__64865;
var G__64952 = (i__64866 + (1));
seq__64863 = G__64949;
chunk__64864 = G__64950;
count__64865 = G__64951;
i__64866 = G__64952;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64863);
if(temp__5753__auto__){
var seq__64863__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64863__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64863__$1);
var G__64953 = cljs.core.chunk_rest(seq__64863__$1);
var G__64954 = c__4679__auto__;
var G__64955 = cljs.core.count(c__4679__auto__);
var G__64956 = (0);
seq__64863 = G__64953;
chunk__64864 = G__64954;
count__64865 = G__64955;
i__64866 = G__64956;
continue;
} else {
var event = cljs.core.first(seq__64863__$1);
re_frame.router.dispatch(event_queue,event);


var G__64957 = cljs.core.next(seq__64863__$1);
var G__64958 = null;
var G__64959 = (0);
var G__64960 = (0);
seq__64863 = G__64957;
chunk__64864 = G__64958;
count__64865 = G__64959;
i__64866 = G__64960;
continue;
}
} else {
return null;
}
}
break;
}
}
}));

reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value,p__64879){
var map__64880 = p__64879;
var map__64880__$1 = cljs.core.__destructure_map(map__64880);
var registry__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64880__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.registry.clear_handlers,registry__$1,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__64881 = cljs.core.seq(value);
var chunk__64882 = null;
var count__64883 = (0);
var i__64884 = (0);
while(true){
if((i__64884 < count__64883)){
var event = chunk__64882.cljs$core$IIndexed$_nth$arity$2(null,i__64884);
clear_event(event);


var G__64961 = seq__64881;
var G__64962 = chunk__64882;
var G__64963 = count__64883;
var G__64964 = (i__64884 + (1));
seq__64881 = G__64961;
chunk__64882 = G__64962;
count__64883 = G__64963;
i__64884 = G__64964;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64881);
if(temp__5753__auto__){
var seq__64881__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64881__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64881__$1);
var G__64965 = cljs.core.chunk_rest(seq__64881__$1);
var G__64966 = c__4679__auto__;
var G__64967 = cljs.core.count(c__4679__auto__);
var G__64968 = (0);
seq__64881 = G__64965;
chunk__64882 = G__64966;
count__64883 = G__64967;
i__64884 = G__64968;
continue;
} else {
var event = cljs.core.first(seq__64881__$1);
clear_event(event);


var G__64969 = cljs.core.next(seq__64881__$1);
var G__64970 = null;
var G__64971 = (0);
var G__64972 = (0);
seq__64881 = G__64969;
chunk__64882 = G__64970;
count__64883 = G__64971;
i__64884 = G__64972;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));

return reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value,p__64885){
var map__64886 = p__64885;
var map__64886__$1 = cljs.core.__destructure_map(map__64886);
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64886__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
if((cljs.core.deref(app_db) === value)){
return null;
} else {
return cljs.core.reset_BANG_(app_db,value);
}
}));
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = (function re_frame$fx$do_fx(registry){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_$_do_fx_after(context){
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context))){
} else {
throw (new Error("Assert failed: (:frame context)"));
}

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__64887 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__64888 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__64888);

try{try{var seq__64889 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__64890 = null;
var count__64891 = (0);
var i__64892 = (0);
while(true){
if((i__64892 < count__64891)){
var vec__64903 = chunk__64890.cljs$core$IIndexed$_nth$arity$2(null,i__64892);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64903,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64903,(1),null);
var temp__5751__auto___64973 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___64973)){
var effect_fn_64974 = temp__5751__auto___64973;
var G__64906_64975 = effect_value;
var G__64907_64976 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_64974.cljs$core$IFn$_invoke$arity$2 ? effect_fn_64974.cljs$core$IFn$_invoke$arity$2(G__64906_64975,G__64907_64976) : effect_fn_64974.call(null,G__64906_64975,G__64907_64976));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__64977 = seq__64889;
var G__64978 = chunk__64890;
var G__64979 = count__64891;
var G__64980 = (i__64892 + (1));
seq__64889 = G__64977;
chunk__64890 = G__64978;
count__64891 = G__64979;
i__64892 = G__64980;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64889);
if(temp__5753__auto__){
var seq__64889__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64889__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64889__$1);
var G__64981 = cljs.core.chunk_rest(seq__64889__$1);
var G__64982 = c__4679__auto__;
var G__64983 = cljs.core.count(c__4679__auto__);
var G__64984 = (0);
seq__64889 = G__64981;
chunk__64890 = G__64982;
count__64891 = G__64983;
i__64892 = G__64984;
continue;
} else {
var vec__64908 = cljs.core.first(seq__64889__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64908,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64908,(1),null);
var temp__5751__auto___64985 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___64985)){
var effect_fn_64986 = temp__5751__auto___64985;
var G__64911_64987 = effect_value;
var G__64912_64988 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_64986.cljs$core$IFn$_invoke$arity$2 ? effect_fn_64986.cljs$core$IFn$_invoke$arity$2(G__64911_64987,G__64912_64988) : effect_fn_64986.call(null,G__64911_64987,G__64912_64988));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__64989 = cljs.core.next(seq__64889__$1);
var G__64990 = null;
var G__64991 = (0);
var G__64992 = (0);
seq__64889 = G__64989;
chunk__64890 = G__64990;
count__64891 = G__64991;
i__64892 = G__64992;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__64538__auto___64993 = re_frame.interop.now();
var duration__64539__auto___64994 = (end__64538__auto___64993 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__64539__auto___64994,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__64538__auto___64993);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__64887);
}} else {
var seq__64913 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__64914 = null;
var count__64915 = (0);
var i__64916 = (0);
while(true){
if((i__64916 < count__64915)){
var vec__64927 = chunk__64914.cljs$core$IIndexed$_nth$arity$2(null,i__64916);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64927,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64927,(1),null);
var temp__5751__auto___64995 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___64995)){
var effect_fn_64996 = temp__5751__auto___64995;
var G__64930_64997 = effect_value;
var G__64931_64998 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_64996.cljs$core$IFn$_invoke$arity$2 ? effect_fn_64996.cljs$core$IFn$_invoke$arity$2(G__64930_64997,G__64931_64998) : effect_fn_64996.call(null,G__64930_64997,G__64931_64998));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__64999 = seq__64913;
var G__65000 = chunk__64914;
var G__65001 = count__64915;
var G__65002 = (i__64916 + (1));
seq__64913 = G__64999;
chunk__64914 = G__65000;
count__64915 = G__65001;
i__64916 = G__65002;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64913);
if(temp__5753__auto__){
var seq__64913__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64913__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64913__$1);
var G__65003 = cljs.core.chunk_rest(seq__64913__$1);
var G__65004 = c__4679__auto__;
var G__65005 = cljs.core.count(c__4679__auto__);
var G__65006 = (0);
seq__64913 = G__65003;
chunk__64914 = G__65004;
count__64915 = G__65005;
i__64916 = G__65006;
continue;
} else {
var vec__64932 = cljs.core.first(seq__64913__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64932,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64932,(1),null);
var temp__5751__auto___65007 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___65007)){
var effect_fn_65008 = temp__5751__auto___65007;
var G__64935_65009 = effect_value;
var G__64936_65010 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_65008.cljs$core$IFn$_invoke$arity$2 ? effect_fn_65008.cljs$core$IFn$_invoke$arity$2(G__64935_65009,G__64936_65010) : effect_fn_65008.call(null,G__64935_65009,G__64936_65010));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__65011 = cljs.core.next(seq__64913__$1);
var G__65012 = null;
var G__65013 = (0);
var G__65014 = (0);
seq__64913 = G__65011;
chunk__64914 = G__65012;
count__64915 = G__65013;
i__64916 = G__65014;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
});

//# sourceMappingURL=re_frame.fx.js.map
