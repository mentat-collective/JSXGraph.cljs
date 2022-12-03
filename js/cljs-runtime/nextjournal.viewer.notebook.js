goog.provide('nextjournal.viewer.notebook');
nextjournal.viewer.notebook.notebook = (function nextjournal$viewer$notebook$notebook(xs){
return nextjournal.viewer.html(cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.viewer-notebook","div.flex.flex-col.items-center.viewer-notebook",2117798621)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__77907_SHARP_){
return nextjournal.viewer.html((function (){var map__77908 = nextjournal.viewer.meta(p1__77907_SHARP_);
var map__77908__$1 = cljs.core.__destructure_map(map__77908);
var ks = map__77908__$1;
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77908__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77908__$1,new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["viewer",(((viewer instanceof cljs.core.Keyword))?["viewer-",cljs.core.name(viewer)].join(''):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(viewer,new cljs.core.Keyword(null,"code","code",1586293142)))?"not-prose":null),(function (){var G__77909 = (function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__77910 = viewer;
var G__77910__$1 = (((G__77910 instanceof cljs.core.Keyword))?G__77910.fqn:null);
switch (G__77910__$1) {
case "code":
return new cljs.core.Keyword(null,"wide","wide",-151772487);

break;
default:
return new cljs.core.Keyword(null,"prose","prose",2099617726);

}
}
})();
var G__77909__$1 = (((G__77909 instanceof cljs.core.Keyword))?G__77909.fqn:null);
switch (G__77909__$1) {
case "wide":
return "w-full max-w-wide px-8";

break;
case "full":
return "w-full";

break;
default:
return "w-full max-w-prose px-8 overflow-x-auto";

}
})()], null)], null),(function (){var G__77911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,p1__77907_SHARP_], null);
if(cljs.core.truth_(new cljs.core.Keyword("blob","id","blob/id",-1385637193).cljs$core$IFn$_invoke$arity$1(p1__77907_SHARP_))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__77911,cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("blob","id","blob/id",-1385637193).cljs$core$IFn$_invoke$arity$1(p1__77907_SHARP_));
} else {
return G__77911;
}
})()], null);
})());
})),xs));
});
nextjournal.viewer.notebook.var$ = (function nextjournal$viewer$notebook$var(x){
return nextjournal.viewer.html(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.syntax-tag","span.syntax-tag",681220509),"#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], null)], null));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.viewer !== 'undefined') && (typeof nextjournal.viewer.notebook !== 'undefined') && (typeof nextjournal.viewer.notebook.state !== 'undefined')){
} else {
nextjournal.viewer.notebook.state = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
nextjournal.viewer.notebook.root = (function nextjournal$viewer$notebook$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.deref(nextjournal.viewer.notebook.state)], null);
});
nextjournal.viewer.notebook.read_string = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.reader.read_string,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.identity], null));
goog.exportSymbol('nextjournal.viewer.notebook.read_string', nextjournal.viewer.notebook.read_string);
nextjournal.viewer.notebook.mount = (function nextjournal$viewer$notebook$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.notebook.root], null),el);
});
goog.exportSymbol('nextjournal.viewer.notebook.mount', nextjournal.viewer.notebook.mount);
nextjournal.viewer.notebook.reset_state = (function nextjournal$viewer$notebook$reset_state(new_state){
return cljs.core.reset_BANG_(nextjournal.viewer.notebook.state,new_state);
});
goog.exportSymbol('nextjournal.viewer.notebook.reset_state', nextjournal.viewer.notebook.reset_state);
nextjournal.viewer.notebook.opts__GT_query = (function nextjournal$viewer$notebook$opts__GT_query(opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,"="),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77912_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__77912_SHARP_,(0),cljs.core.name);
}),opts)));
});
nextjournal.viewer.notebook.describe = (function nextjournal$viewer$notebook$describe(result){
var G__77913 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","type-key","nextjournal/type-key",431230466),nextjournal.viewer.value_type(result),new cljs.core.Keyword("blob","id","blob/id",-1385637193),new cljs.core.Keyword("blob","id","blob/id",-1385637193).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(result))], null);
if(cljs.core.counted_QMARK_(result)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77913,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(result));
} else {
return G__77913;
}
});
nextjournal.viewer.notebook.paginate = (function nextjournal$viewer$notebook$paginate(result,p__77914){
var map__77915 = p__77914;
var map__77915__$1 = cljs.core.__destructure_map(map__77915);
var opts = map__77915__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77915__$1,new cljs.core.Keyword(null,"start","start",-355208981),(0));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77915__$1,new cljs.core.Keyword(null,"n","n",562130025));
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.notebook",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paginate","paginate",1392869441),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"result","result",1415092211),result], null),new cljs.core.Keyword(null,"line","line",212345235),69], null)),null);

if(((typeof n === 'number') && ((((n > (0))) && ((((!(((cljs.core.map_QMARK_(result)) || (cljs.core.set_QMARK_(result)))))) && (cljs.core.counted_QMARK_(result)))))))){
return cljs.core.with_meta(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(start,result))),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,nextjournal.viewer.notebook.describe(result)], 0)));
} else {
return result;
}
});
re_frame.context.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nextjournal.viewer.notebook","blobs","nextjournal.viewer.notebook/blobs",2028603229),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__77916){
var vec__77917 = p__77916;
var blob_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77917,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77917,(1),null);
var v = vec__77917;
if(cljs.core.truth_(id)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,v);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,blob_key);
}
})], 0));
nextjournal.viewer.notebook.fetch_BANG_ = (function nextjournal$viewer$notebook$fetch_BANG_(_BANG_result,p__77923,opts){
var map__77924 = p__77923;
var map__77924__$1 = cljs.core.__destructure_map(map__77924);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77924__$1,new cljs.core.Keyword("blob","id","blob/id",-1385637193));
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.notebook",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fetch!","fetch!",1947804333),opts,new cljs.core.Keyword(null,"line","line",212345235),91], null)),null);

return fetch(["_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),((cljs.core.seq(opts))?["?",nextjournal.viewer.notebook.opts__GT_query(opts)].join(''):null)].join('')).then((function (p1__77920_SHARP_){
return p1__77920_SHARP_.text();
})).then((function (p1__77921_SHARP_){
return cljs.core.reset_BANG_(_BANG_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),nextjournal.viewer.notebook.read_string(p1__77921_SHARP_)], null));
})).catch((function (p1__77922_SHARP_){
return cljs.core.reset_BANG_(_BANG_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__77922_SHARP_], null));
}));
});
nextjournal.viewer.notebook.in_process_fetch_BANG_ = (function nextjournal$viewer$notebook$in_process_fetch_BANG_(_BANG_result,p__77928,opts){
var map__77929 = p__77928;
var map__77929__$1 = cljs.core.__destructure_map(map__77929);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77929__$1,new cljs.core.Keyword("blob","id","blob/id",-1385637193));
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.notebook",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-process-fetch!","in-process-fetch!",418349885),opts,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"line","line",212345235),99], null)),null);

return (new Promise((function (resolve,_reject){
var G__77930 = cljs.core.deref(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.viewer.notebook","blobs","nextjournal.viewer.notebook/blobs",2028603229),id], null)], 0)));
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__77930) : resolve.call(null,G__77930));
}))).then((function (p1__77925_SHARP_){
return nextjournal.viewer.notebook.paginate(p1__77925_SHARP_,opts);
})).then((function (p1__77926_SHARP_){
return cljs.core.reset_BANG_(_BANG_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__77931 = p1__77926_SHARP_;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.notebook",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(cljs.core.PersistentArrayMap.createAsIfByAssoc([G__77931,new cljs.core.Keyword("in-process-fetch!","value","in-process-fetch!/value",2033041116),new cljs.core.Keyword(null,"line","line",212345235),null])),null);

return G__77931;
})()], null));
})).catch((function (p1__77927_SHARP_){
return cljs.core.reset_BANG_(_BANG_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__77927_SHARP_], null));
}));
});
nextjournal.viewer.notebook.get_fetch_opts = (function nextjournal$viewer$notebook$get_fetch_opts(p__77933){
var map__77934 = p__77933;
var map__77934__$1 = cljs.core.__destructure_map(map__77934);
var type_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77934__$1,new cljs.core.Keyword("nextjournal","type-key","nextjournal/type-key",431230466));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77934__$1,new cljs.core.Keyword(null,"count","count",2139924085));
if(((typeof count === 'number') && ((((count > (0))) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null], null), null),type_key)) && (cljs.core.not((function (){var fexpr__77935 = cljs.core.deref(nextjournal.viewer._BANG_viewers);
return (fexpr__77935.cljs$core$IFn$_invoke$arity$1 ? fexpr__77935.cljs$core$IFn$_invoke$arity$1(type_key) : fexpr__77935.call(null,type_key));
})())))))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),nextjournal.viewer.increase_items], null);
} else {
return null;
}
});
nextjournal.viewer.notebook.blob = (function nextjournal$viewer$notebook$blob(blob){
var with_let77936 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77936","with-let77936",901592715));
var temp__5757__auto___77953 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___77953 == null)){
} else {
var c__62567__auto___77954 = temp__5757__auto___77953;
if((with_let77936.generation === c__62567__auto___77954.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77936.generation = c__62567__auto___77954.ratomGeneration);
}

var init77937 = (with_let77936.length === (0));
var _BANG_result = ((((init77937) || (cljs.core.not(with_let77936.hasOwnProperty((0))))))?(with_let77936[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),true], null))):(with_let77936[(0)]));
var fetch_BANG_ = ((((init77937) || (cljs.core.not(with_let77936.hasOwnProperty((1))))))?(with_let77936[(1)] = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blob","fetch!","blob/fetch!",1943466498).cljs$core$IFn$_invoke$arity$2(blob,nextjournal.viewer.notebook.fetch_BANG_),_BANG_result,blob)):(with_let77936[(1)]));
var _ = ((((init77937) || (cljs.core.not(with_let77936.hasOwnProperty((2))))))?(with_let77936[(2)] = (function (){var G__77941 = nextjournal.viewer.notebook.get_fetch_opts(blob);
return (fetch_BANG_.cljs$core$IFn$_invoke$arity$1 ? fetch_BANG_.cljs$core$IFn$_invoke$arity$1(G__77941) : fetch_BANG_.call(null,G__77941));
})()):(with_let77936[(2)]));
var res77938 = (function (){var map__77942 = cljs.core.deref(_BANG_result);
var map__77942__$1 = cljs.core.__destructure_map(map__77942);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77942__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77942__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77942__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
if(cljs.core.truth_(value)){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"reagent","reagent",2131627322),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch!","fetch!",1947804333),fetch_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,value], null)], null));
} else {
if(cljs.core.truth_(error)){
return nextjournal.viewer.html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.red","span.red",-458294124),"error",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null));
} else {
if(cljs.core.truth_(loading_QMARK_)){
return nextjournal.viewer.html("loading\u2026");
} else {
return null;
}
}
}
})();
return res77938;
});
nextjournal.viewer.register_viewers_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("clerk","notebook","clerk/notebook",699315010),nextjournal.viewer.notebook.notebook,new cljs.core.Keyword("clerk","var","clerk/var",-674903440),nextjournal.viewer.notebook.var$,new cljs.core.Keyword("clerk","blob","clerk/blob",1697092040),nextjournal.viewer.notebook.blob], null));
nextjournal.viewer.notebook.sci_viewer_namespace = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"html","html",641734630,null),nextjournal.viewer.html,new cljs.core.Symbol(null,"view-as","view-as",-634512647,null),nextjournal.viewer.view_as,new cljs.core.Symbol(null,"inspect","inspect",-1965641712,null),nextjournal.viewer.inspect,new cljs.core.Symbol(null,"register-viewer!","register-viewer!",-1988526299,null),nextjournal.viewer.register_viewer_BANG_,new cljs.core.Symbol(null,"register-viewers!","register-viewers!",-1240928108,null),nextjournal.viewer.register_viewers_BANG_,new cljs.core.Symbol(null,"with-viewer","with-viewer",-1694579498,null),nextjournal.viewer.with_viewer,new cljs.core.Symbol(null,"with-viewers","with-viewers",-1936045103,null),nextjournal.viewer.with_viewers], null);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.viewer !== 'undefined') && (typeof nextjournal.viewer.notebook !== 'undefined') && (typeof nextjournal.viewer.notebook.ctx !== 'undefined')){
} else {
nextjournal.viewer.notebook.ctx = sci.core.init(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async?","async?",1523057758),true,new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206),true,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"js","js",-886355190,null),goog.global,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"atom","atom",1243487874,null),reagent.ratom.atom], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"nextjournal.viewer","nextjournal.viewer",148634234,null),nextjournal.viewer.notebook.sci_viewer_namespace,new cljs.core.Symbol(null,"v","v",1661996586,null),nextjournal.viewer.notebook.sci_viewer_namespace,new cljs.core.Symbol(null,"nextjournal.markdown","nextjournal.markdown",-1296364206,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"parse","parse",478366908,null),nextjournal.markdown.parse,new cljs.core.Symbol(null,"->hiccup","->hiccup",-1449744818,null),nextjournal.markdown.__GT_hiccup], null)], null)], null));
}
nextjournal.viewer.notebook.eval_form = (function nextjournal$viewer$notebook$eval_form(f){
return sci.core.eval_form(nextjournal.viewer.notebook.ctx,f);
});
(nextjournal.viewer._STAR_eval_form_STAR_ = nextjournal.viewer.notebook.eval_form);

//# sourceMappingURL=nextjournal.viewer.notebook.js.map
