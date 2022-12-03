goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__56593,res){
var map__56594 = p__56593;
var map__56594__$1 = cljs.core.__destructure_map(map__56594);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56594__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56594__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__56595 = res;
var G__56595__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56595,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__56595);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56595__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__56595__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__56597 = arguments.length;
switch (G__56597) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__56606,msg,handlers,timeout_after_ms){
var map__56607 = p__56606;
var map__56607__$1 = cljs.core.__destructure_map(map__56607);
var runtime = map__56607__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56607__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56903 = arguments.length;
var i__4865__auto___56904 = (0);
while(true){
if((i__4865__auto___56904 < len__4864__auto___56903)){
args__4870__auto__.push((arguments[i__4865__auto___56904]));

var G__56905 = (i__4865__auto___56904 + (1));
i__4865__auto___56904 = G__56905;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__56649,ev,args){
var map__56650 = p__56649;
var map__56650__$1 = cljs.core.__destructure_map(map__56650);
var runtime = map__56650__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56650__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__56651 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__56654 = null;
var count__56655 = (0);
var i__56656 = (0);
while(true){
if((i__56656 < count__56655)){
var ext = chunk__56654.cljs$core$IIndexed$_nth$arity$2(null,i__56656);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__56906 = seq__56651;
var G__56907 = chunk__56654;
var G__56908 = count__56655;
var G__56909 = (i__56656 + (1));
seq__56651 = G__56906;
chunk__56654 = G__56907;
count__56655 = G__56908;
i__56656 = G__56909;
continue;
} else {
var G__56910 = seq__56651;
var G__56911 = chunk__56654;
var G__56912 = count__56655;
var G__56913 = (i__56656 + (1));
seq__56651 = G__56910;
chunk__56654 = G__56911;
count__56655 = G__56912;
i__56656 = G__56913;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56651);
if(temp__5753__auto__){
var seq__56651__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56651__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56651__$1);
var G__56914 = cljs.core.chunk_rest(seq__56651__$1);
var G__56915 = c__4679__auto__;
var G__56916 = cljs.core.count(c__4679__auto__);
var G__56917 = (0);
seq__56651 = G__56914;
chunk__56654 = G__56915;
count__56655 = G__56916;
i__56656 = G__56917;
continue;
} else {
var ext = cljs.core.first(seq__56651__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__56919 = cljs.core.next(seq__56651__$1);
var G__56920 = null;
var G__56921 = (0);
var G__56922 = (0);
seq__56651 = G__56919;
chunk__56654 = G__56920;
count__56655 = G__56921;
i__56656 = G__56922;
continue;
} else {
var G__56923 = cljs.core.next(seq__56651__$1);
var G__56924 = null;
var G__56925 = (0);
var G__56926 = (0);
seq__56651 = G__56923;
chunk__56654 = G__56924;
count__56655 = G__56925;
i__56656 = G__56926;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq56641){
var G__56642 = cljs.core.first(seq56641);
var seq56641__$1 = cljs.core.next(seq56641);
var G__56644 = cljs.core.first(seq56641__$1);
var seq56641__$2 = cljs.core.next(seq56641__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56642,G__56644,seq56641__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__56663,p__56664){
var map__56665 = p__56663;
var map__56665__$1 = cljs.core.__destructure_map(map__56665);
var runtime = map__56665__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56665__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__56666 = p__56664;
var map__56666__$1 = cljs.core.__destructure_map(map__56666);
var msg = map__56666__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56666__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__56673 = cljs.core.deref(state_ref);
var map__56673__$1 = cljs.core.__destructure_map(map__56673);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__56707){
var map__56708 = p__56707;
var map__56708__$1 = cljs.core.__destructure_map(map__56708);
var runtime = map__56708__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56708__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__56714,msg){
var map__56715 = p__56714;
var map__56715__$1 = cljs.core.__destructure_map(map__56715);
var runtime = map__56715__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56715__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__56744,key,p__56745){
var map__56746 = p__56744;
var map__56746__$1 = cljs.core.__destructure_map(map__56746);
var state = map__56746__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56746__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__56747 = p__56745;
var map__56747__$1 = cljs.core.__destructure_map(map__56747);
var spec = map__56747__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__56792,key,spec){
var map__56793 = p__56792;
var map__56793__$1 = cljs.core.__destructure_map(map__56793);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56793__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__56797_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__56797_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__56798_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__56798_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__56799_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__56799_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__56800_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__56800_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__56802_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__56802_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__56823,key){
var map__56824 = p__56823;
var map__56824__$1 = cljs.core.__destructure_map(map__56824);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__56826,msg){
var map__56827 = p__56826;
var map__56827__$1 = cljs.core.__destructure_map(map__56827);
var runtime = map__56827__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56827__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__56842,p__56843){
var map__56844 = p__56842;
var map__56844__$1 = cljs.core.__destructure_map(map__56844);
var runtime = map__56844__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56844__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__56845 = p__56843;
var map__56845__$1 = cljs.core.__destructure_map(map__56845);
var msg = map__56845__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56845__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56845__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__56848 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__56850 = null;
var count__56851 = (0);
var i__56852 = (0);
while(true){
if((i__56852 < count__56851)){
var map__56879 = chunk__56850.cljs$core$IIndexed$_nth$arity$2(null,i__56852);
var map__56879__$1 = cljs.core.__destructure_map(map__56879);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56879__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__56957 = seq__56848;
var G__56958 = chunk__56850;
var G__56959 = count__56851;
var G__56960 = (i__56852 + (1));
seq__56848 = G__56957;
chunk__56850 = G__56958;
count__56851 = G__56959;
i__56852 = G__56960;
continue;
} else {
var G__56961 = seq__56848;
var G__56962 = chunk__56850;
var G__56963 = count__56851;
var G__56964 = (i__56852 + (1));
seq__56848 = G__56961;
chunk__56850 = G__56962;
count__56851 = G__56963;
i__56852 = G__56964;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56848);
if(temp__5753__auto__){
var seq__56848__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56848__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56848__$1);
var G__56965 = cljs.core.chunk_rest(seq__56848__$1);
var G__56966 = c__4679__auto__;
var G__56967 = cljs.core.count(c__4679__auto__);
var G__56968 = (0);
seq__56848 = G__56965;
chunk__56850 = G__56966;
count__56851 = G__56967;
i__56852 = G__56968;
continue;
} else {
var map__56892 = cljs.core.first(seq__56848__$1);
var map__56892__$1 = cljs.core.__destructure_map(map__56892);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__56969 = cljs.core.next(seq__56848__$1);
var G__56970 = null;
var G__56971 = (0);
var G__56972 = (0);
seq__56848 = G__56969;
chunk__56850 = G__56970;
count__56851 = G__56971;
i__56852 = G__56972;
continue;
} else {
var G__56973 = cljs.core.next(seq__56848__$1);
var G__56974 = null;
var G__56975 = (0);
var G__56976 = (0);
seq__56848 = G__56973;
chunk__56850 = G__56974;
count__56851 = G__56975;
i__56852 = G__56976;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
