goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60357,p__60358){
var map__60359 = p__60357;
var map__60359__$1 = cljs.core.__destructure_map(map__60359);
var svc = map__60359__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60359__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60359__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60359__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60360 = p__60358;
var map__60360__$1 = cljs.core.__destructure_map(map__60360);
var msg = map__60360__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60360__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60370,p__60371){
var map__60372 = p__60370;
var map__60372__$1 = cljs.core.__destructure_map(map__60372);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60372__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60373 = p__60371;
var map__60373__$1 = cljs.core.__destructure_map(map__60373);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60373__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60375,p__60376){
var map__60378 = p__60375;
var map__60378__$1 = cljs.core.__destructure_map(map__60378);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60378__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60378__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60379 = p__60376;
var map__60379__$1 = cljs.core.__destructure_map(map__60379);
var msg = map__60379__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60379__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60386,tid){
var map__60387 = p__60386;
var map__60387__$1 = cljs.core.__destructure_map(map__60387);
var svc = map__60387__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60387__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60396 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60397 = null;
var count__60398 = (0);
var i__60399 = (0);
while(true){
if((i__60399 < count__60398)){
var vec__60409 = chunk__60397.cljs$core$IIndexed$_nth$arity$2(null,i__60399);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60409,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60409,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60430 = seq__60396;
var G__60431 = chunk__60397;
var G__60432 = count__60398;
var G__60433 = (i__60399 + (1));
seq__60396 = G__60430;
chunk__60397 = G__60431;
count__60398 = G__60432;
i__60399 = G__60433;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60396);
if(temp__5753__auto__){
var seq__60396__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60396__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60396__$1);
var G__60434 = cljs.core.chunk_rest(seq__60396__$1);
var G__60435 = c__4679__auto__;
var G__60436 = cljs.core.count(c__4679__auto__);
var G__60437 = (0);
seq__60396 = G__60434;
chunk__60397 = G__60435;
count__60398 = G__60436;
i__60399 = G__60437;
continue;
} else {
var vec__60412 = cljs.core.first(seq__60396__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60412,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60412,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60438 = cljs.core.next(seq__60396__$1);
var G__60439 = null;
var G__60440 = (0);
var G__60441 = (0);
seq__60396 = G__60438;
chunk__60397 = G__60439;
count__60398 = G__60440;
i__60399 = G__60441;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60388_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60388_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60389_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60389_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60390_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60390_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60391_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60391_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60421){
var map__60422 = p__60421;
var map__60422__$1 = cljs.core.__destructure_map(map__60422);
var svc = map__60422__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60422__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60422__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
