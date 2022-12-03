goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__67545){
var vec__67546 = p__67545;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67546,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67546,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (k instanceof cljs.core.Symbol);
if(and__4251__auto__){
var and__4251__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4251__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__67549){
var map__67550 = p__67549;
var map__67550__$1 = cljs.core.__destructure_map(map__67550);
var _parsed_libspec = map__67550__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67550__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67550__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67550__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67550__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67550__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67550__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4253__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5751__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__67551 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67551,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67551,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5753__auto___67721 = (function (){var G__67554 = the_loaded_ns;
var G__67554__$1 = (((G__67554 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__67554));
var G__67554__$2 = (((G__67554__$1 == null))?null:cljs.core.meta(G__67554__$1));
if((G__67554__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__67554__$2);
}
})();
if(cljs.core.truth_(temp__5753__auto___67721)){
var on_loaded_67725 = temp__5753__auto___67721;
var G__67555_67726 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_67725.cljs$core$IFn$_invoke$arity$1 ? on_loaded_67725.cljs$core$IFn$_invoke$arity$1(G__67555_67726) : on_loaded_67725.call(null,G__67555_67726));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.utils.current_ns_name();
var lib__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821).cljs$core$IFn$_invoke$arity$1(env),lib,lib);
var temp__5751__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5751__auto__)){
var as_alias = temp__5751__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__67564 = opts;
var map__67564__$1 = cljs.core.__destructure_map(map__67564);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67564__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67564__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__4253__auto__ = reload;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = reload_all;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5751__auto___67727__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1));
if(cljs.core.truth_(temp__5751__auto___67727__$1)){
var the_loaded_ns_67728 = temp__5751__auto___67727__$1;
var loading_67729 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__4251__auto__ = loading_67729;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib__$1)))) && (cljs.core.nat_int_QMARK_(loading_67729.indexOf(lib__$1))));
} else {
return and__4251__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_67729,lib__$1);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib__$1);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_67728,lib__$1,opts));
}
} else {
var temp__5751__auto___67733__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5751__auto___67733__$2)){
var load_fn_67734 = temp__5751__auto___67733__$2;
var curr_ns_67735 = cljs.core.deref(sci.impl.utils.current_ns);
var temp__5751__auto___67736__$3 = (function (){var G__67568 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib__$1,new cljs.core.Keyword(null,"libname","libname",135992497),lib__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.types.getName(curr_ns_67735),new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__4253__auto__ = reload;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_67734.cljs$core$IFn$_invoke$arity$1 ? load_fn_67734.cljs$core$IFn$_invoke$arity$1(G__67568) : load_fn_67734.call(null,G__67568));
})();
if(cljs.core.truth_(temp__5751__auto___67736__$3)){
var map__67569_67737 = temp__5751__auto___67736__$3;
var map__67569_67738__$1 = cljs.core.__destructure_map(map__67569_67737);
var file_67739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67569_67738__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_67740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67569_67738__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var handled_67741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67569_67738__$1,new cljs.core.Keyword(null,"handled","handled",1889700151));
var ctx_67742__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib__$1], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib__$1);
}
}));
if(cljs.core.truth_(source_67740)){
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_ns,curr_ns_67735,sci.impl.utils.current_file,file_67739]));

try{var fexpr__67576_67743 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__67576_67743.cljs$core$IFn$_invoke$arity$2 ? fexpr__67576_67743.cljs$core$IFn$_invoke$arity$2(ctx_67742__$1,source_67740) : fexpr__67576_67743.call(null,ctx_67742__$1,source_67740));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e67575){if((e67575 instanceof Error)){
var e_67744 = e67575;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib__$1], 0));

throw e_67744;
} else {
throw e67575;

}
}} else {
}

if(cljs.core.truth_(handled_67741)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib__$1);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib__$1,opts);
}));
}
} else {
var or__4253__auto___67748 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var the_loaded_ns = temp__5753__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib__$1,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4253__auto___67748)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib__$1);

return null;
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__4870__auto__ = [];
var len__4864__auto___67749 = arguments.length;
var i__4865__auto___67750 = (0);
while(true){
if((i__4865__auto___67750 < len__4864__auto___67749)){
args__4870__auto__.push((arguments[i__4865__auto___67750]));

var G__67751 = (i__4865__auto___67750 + (1));
i__4865__auto___67750 = G__67751;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__4251__auto__ = prefix;
if(cljs.core.truth_(and__4251__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__4251__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq67591){
var G__67592 = cljs.core.first(seq67591);
var seq67591__$1 = cljs.core.next(seq67591);
var G__67593 = cljs.core.first(seq67591__$1);
var seq67591__$2 = cljs.core.next(seq67591__$1);
var G__67594 = cljs.core.first(seq67591__$2);
var seq67591__$3 = cljs.core.next(seq67591__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67592,G__67593,G__67594,seq67591__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_67755 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_67756 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_67755,flags));
if(unsupported_67756){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_67756)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__67605 = cljs.core.seq(args_STAR___$1);
var chunk__67606 = null;
var count__67607 = (0);
var i__67608 = (0);
while(true){
if((i__67608 < count__67607)){
var arg = chunk__67606.cljs$core$IIndexed$_nth$arity$2(null,i__67608);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__67623_67757 = arg;
var seq__67624_67758 = cljs.core.seq(vec__67623_67757);
var first__67625_67759 = cljs.core.first(seq__67624_67758);
var seq__67624_67760__$1 = cljs.core.next(seq__67624_67758);
var prefix_67761 = first__67625_67759;
var args_STAR__67762__$2 = seq__67624_67760__$1;
if((prefix_67761 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__67626_67763 = cljs.core.seq(args_STAR__67762__$2);
var chunk__67627_67764 = null;
var count__67628_67765 = (0);
var i__67629_67766 = (0);
while(true){
if((i__67629_67766 < count__67628_67765)){
var arg_67770__$1 = chunk__67627_67764.cljs$core$IIndexed$_nth$arity$2(null,i__67629_67766);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_67761,sci.impl.load.prependss(arg_67770__$1,opts));


var G__67771 = seq__67626_67763;
var G__67772 = chunk__67627_67764;
var G__67773 = count__67628_67765;
var G__67774 = (i__67629_67766 + (1));
seq__67626_67763 = G__67771;
chunk__67627_67764 = G__67772;
count__67628_67765 = G__67773;
i__67629_67766 = G__67774;
continue;
} else {
var temp__5753__auto___67775 = cljs.core.seq(seq__67626_67763);
if(temp__5753__auto___67775){
var seq__67626_67776__$1 = temp__5753__auto___67775;
if(cljs.core.chunked_seq_QMARK_(seq__67626_67776__$1)){
var c__4679__auto___67777 = cljs.core.chunk_first(seq__67626_67776__$1);
var G__67782 = cljs.core.chunk_rest(seq__67626_67776__$1);
var G__67783 = c__4679__auto___67777;
var G__67784 = cljs.core.count(c__4679__auto___67777);
var G__67785 = (0);
seq__67626_67763 = G__67782;
chunk__67627_67764 = G__67783;
count__67628_67765 = G__67784;
i__67629_67766 = G__67785;
continue;
} else {
var arg_67786__$1 = cljs.core.first(seq__67626_67776__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_67761,sci.impl.load.prependss(arg_67786__$1,opts));


var G__67790 = cljs.core.next(seq__67626_67776__$1);
var G__67791 = null;
var G__67792 = (0);
var G__67793 = (0);
seq__67626_67763 = G__67790;
chunk__67627_67764 = G__67791;
count__67628_67765 = G__67792;
i__67629_67766 = G__67793;
continue;
}
} else {
}
}
break;
}
}


var G__67794 = seq__67605;
var G__67795 = chunk__67606;
var G__67796 = count__67607;
var G__67797 = (i__67608 + (1));
seq__67605 = G__67794;
chunk__67606 = G__67795;
count__67607 = G__67796;
i__67608 = G__67797;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67605);
if(temp__5753__auto__){
var seq__67605__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67605__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__67605__$1);
var G__67798 = cljs.core.chunk_rest(seq__67605__$1);
var G__67799 = c__4679__auto__;
var G__67800 = cljs.core.count(c__4679__auto__);
var G__67801 = (0);
seq__67605 = G__67798;
chunk__67606 = G__67799;
count__67607 = G__67800;
i__67608 = G__67801;
continue;
} else {
var arg = cljs.core.first(seq__67605__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__67630_67802 = arg;
var seq__67631_67803 = cljs.core.seq(vec__67630_67802);
var first__67632_67804 = cljs.core.first(seq__67631_67803);
var seq__67631_67805__$1 = cljs.core.next(seq__67631_67803);
var prefix_67806 = first__67632_67804;
var args_STAR__67807__$2 = seq__67631_67805__$1;
if((prefix_67806 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__67633_67808 = cljs.core.seq(args_STAR__67807__$2);
var chunk__67634_67809 = null;
var count__67635_67810 = (0);
var i__67636_67811 = (0);
while(true){
if((i__67636_67811 < count__67635_67810)){
var arg_67812__$1 = chunk__67634_67809.cljs$core$IIndexed$_nth$arity$2(null,i__67636_67811);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_67806,sci.impl.load.prependss(arg_67812__$1,opts));


var G__67813 = seq__67633_67808;
var G__67814 = chunk__67634_67809;
var G__67815 = count__67635_67810;
var G__67816 = (i__67636_67811 + (1));
seq__67633_67808 = G__67813;
chunk__67634_67809 = G__67814;
count__67635_67810 = G__67815;
i__67636_67811 = G__67816;
continue;
} else {
var temp__5753__auto___67817__$1 = cljs.core.seq(seq__67633_67808);
if(temp__5753__auto___67817__$1){
var seq__67633_67818__$1 = temp__5753__auto___67817__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67633_67818__$1)){
var c__4679__auto___67819 = cljs.core.chunk_first(seq__67633_67818__$1);
var G__67820 = cljs.core.chunk_rest(seq__67633_67818__$1);
var G__67821 = c__4679__auto___67819;
var G__67822 = cljs.core.count(c__4679__auto___67819);
var G__67823 = (0);
seq__67633_67808 = G__67820;
chunk__67634_67809 = G__67821;
count__67635_67810 = G__67822;
i__67636_67811 = G__67823;
continue;
} else {
var arg_67824__$1 = cljs.core.first(seq__67633_67818__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_67806,sci.impl.load.prependss(arg_67824__$1,opts));


var G__67825 = cljs.core.next(seq__67633_67818__$1);
var G__67826 = null;
var G__67827 = (0);
var G__67828 = (0);
seq__67633_67808 = G__67825;
chunk__67634_67809 = G__67826;
count__67635_67810 = G__67827;
i__67636_67811 = G__67828;
continue;
}
} else {
}
}
break;
}
}


var G__67829 = cljs.core.next(seq__67605__$1);
var G__67830 = null;
var G__67831 = (0);
var G__67832 = (0);
seq__67605 = G__67829;
chunk__67606 = G__67830;
count__67607 = G__67831;
i__67608 = G__67832;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__4870__auto__ = [];
var len__4864__auto___67833 = arguments.length;
var i__4865__auto___67834 = (0);
while(true){
if((i__4865__auto___67834 < len__4864__auto___67833)){
args__4870__auto__.push((arguments[i__4865__auto___67834]));

var G__67838 = (i__4865__auto___67834 + (1));
i__4865__auto___67834 = G__67838;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq67640){
var G__67641 = cljs.core.first(seq67640);
var seq67640__$1 = cljs.core.next(seq67640);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67641,seq67640__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__4870__auto__ = [];
var len__4864__auto___67839 = arguments.length;
var i__4865__auto___67840 = (0);
while(true){
if((i__4865__auto___67840 < len__4864__auto___67839)){
args__4870__auto__.push((arguments[i__4865__auto___67840]));

var G__67841 = (i__4865__auto___67840 + (1));
i__4865__auto___67840 = G__67841;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq67658){
var G__67659 = cljs.core.first(seq67658);
var seq67658__$1 = cljs.core.next(seq67658);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67659,seq67658__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__67663 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67663,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67663,(1),null);
var G__67666_67845 = k;
var G__67666_67846__$1 = (((G__67666_67845 instanceof cljs.core.Keyword))?G__67666_67845.fqn:null);
switch (G__67666_67846__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__67666_67845,G__67666_67846__$1,vec__67663,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__67666_67845,G__67666_67846__$1,vec__67663,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__67666_67845,G__67666_67846__$1,vec__67663,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__67666_67845,G__67666_67846__$1,vec__67663,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__67666_67845,G__67666_67846__$1,vec__67663,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__67666_67845,G__67666_67846__$1,vec__67663,k,v,ns_sym){
return (function (acc,p__67670){
var vec__67671 = p__67670;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67671,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67671,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__67666_67845,G__67666_67846__$1,vec__67663,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__67666_67845,G__67666_67846__$1,vec__67663,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67666_67846__$1)].join('')));

}

var G__67848 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__67848;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__4251__auto__ = to_do;
if(cljs.core.truth_(and__4251__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__4251__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__4253__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___67854 = arguments.length;
var i__4865__auto___67855 = (0);
while(true){
if((i__4865__auto___67855 < len__4864__auto___67854)){
args__4870__auto__.push((arguments[i__4865__auto___67855]));

var G__67856 = (i__4865__auto___67855 + (1));
i__4865__auto___67855 = G__67856;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq67687){
var G__67688 = cljs.core.first(seq67687);
var seq67687__$1 = cljs.core.next(seq67687);
var G__67689 = cljs.core.first(seq67687__$1);
var seq67687__$2 = cljs.core.next(seq67687__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67688,G__67689,seq67687__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
