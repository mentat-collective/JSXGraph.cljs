goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__68952 = arguments.length;
switch (G__68952) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__68959 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__68960 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__68960);

try{var G__68964 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__68964);

return G__68964;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__68959);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__68968 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__68969 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__68969);

try{var G__68970 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__68970);

return G__68970;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__68968);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__68974 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__68975 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__68975);

try{var G__68977 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__68977);

return G__68977;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__68974);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__68978 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__68979 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__68979);

try{var G__68982 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__68982);

return G__68982;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__68978);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__68983 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__68984 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__68984);

try{var G__68985 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__68985);

return G__68985;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__68983);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_dup_var = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),cljs.core._STAR_print_dup_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__68992 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__68993 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68993);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68992);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69362 = arguments.length;
var i__4865__auto___69363 = (0);
while(true){
if((i__4865__auto___69363 < len__4864__auto___69362)){
args__4870__auto__.push((arguments[i__4865__auto___69363]));

var G__69364 = (i__4865__auto___69363 + (1));
i__4865__auto___69363 = G__69364;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__69008 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__69009 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__69010 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__69011 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__69012 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__69013 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__69014 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__69015 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__69016 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__69017 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__69018 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__69019 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__69020 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__69021 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__69022 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__69023 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__69016);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__69017);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__69018);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__69019);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__69020);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__69021);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__69022);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__69023);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__69015);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__69014);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__69013);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__69012);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__69011);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__69010);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__69009);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__69008);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq68998){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68998));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__69033 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__69034 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__69034);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__69033);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69365 = arguments.length;
var i__4865__auto___69366 = (0);
while(true){
if((i__4865__auto___69366 < len__4864__auto___69365)){
args__4870__auto__.push((arguments[i__4865__auto___69366]));

var G__69367 = (i__4865__auto___69366 + (1));
i__4865__auto___69366 = G__69367;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__69041 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__69042 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__69043 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__69044 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__69045 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__69046 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__69047 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__69048 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__69049 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__69050 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__69051 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__69052 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__69053 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__69054 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__69048);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__69049);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__69050);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__69051);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__69052);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__69053);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__69054);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__69047);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__69046);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__69045);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__69044);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__69043);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__69042);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__69041);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq69035){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69035));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69368 = arguments.length;
var i__4865__auto___69369 = (0);
while(true){
if((i__4865__auto___69369 < len__4864__auto___69368)){
args__4870__auto__.push((arguments[i__4865__auto___69369]));

var G__69370 = (i__4865__auto___69369 + (1));
i__4865__auto___69369 = G__69370;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__69075 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__69076 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__69077 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__69078 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__69079 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__69080 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__69081 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__69082 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__69083 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__69084 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__69085 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__69086 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__69087 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__69088 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__69089 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__69090 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__69083);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__69084);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__69085);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__69086);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__69087);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__69088);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__69089);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__69090);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__69082);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__69081);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__69080);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__69079);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__69078);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__69077);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__69076);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__69075);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq69071){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69071));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69371 = arguments.length;
var i__4865__auto___69372 = (0);
while(true){
if((i__4865__auto___69372 < len__4864__auto___69371)){
args__4870__auto__.push((arguments[i__4865__auto___69372]));

var G__69373 = (i__4865__auto___69372 + (1));
i__4865__auto___69372 = G__69373;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__69095 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__69096 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__69097 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__69098 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__69099 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__69100 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__69101 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__69102 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__69103 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__69104 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__69105 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__69106 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__69107 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__69108 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__69102);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__69103);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__69104);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__69105);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__69106);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__69107);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__69108);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__69101);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__69100);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__69099);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__69098);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__69097);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__69096);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__69095);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq69094){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69094));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69377 = arguments.length;
var i__4865__auto___69378 = (0);
while(true){
if((i__4865__auto___69378 < len__4864__auto___69377)){
args__4870__auto__.push((arguments[i__4865__auto___69378]));

var G__69379 = (i__4865__auto___69378 + (1));
i__4865__auto___69378 = G__69379;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__69110 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__69111 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__69112 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__69113 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__69114 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__69115 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__69116 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__69117 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__69118 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__69119 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__69120 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__69121 = null;
var _STAR_print_newline_STAR__temp_val__69122 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__69123 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__69117);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__69118);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__69119);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__69120);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__69121);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__69122);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__69123);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__69116);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__69115);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__69114);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__69113);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__69112);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__69111);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__69110);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq69109){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69109));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69380 = arguments.length;
var i__4865__auto___69381 = (0);
while(true){
if((i__4865__auto___69381 < len__4864__auto___69380)){
args__4870__auto__.push((arguments[i__4865__auto___69381]));

var G__69382 = (i__4865__auto___69381 + (1));
i__4865__auto___69381 = G__69382;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__69127 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__69128 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__69129 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__69130 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__69131 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__69132 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__69133 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__69134 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__69135 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__69136 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__69137 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__69138 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__69139 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__69140 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__69134);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__69135);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__69136);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__69137);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__69138);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__69139);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__69140);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__69133);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__69132);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__69131);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__69130);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__69129);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__69128);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__69127);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq69125){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69125));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69384 = arguments.length;
var i__4865__auto___69385 = (0);
while(true){
if((i__4865__auto___69385 < len__4864__auto___69384)){
args__4870__auto__.push((arguments[i__4865__auto___69385]));

var G__69386 = (i__4865__auto___69385 + (1));
i__4865__auto___69385 = G__69386;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__69338 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__69339 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__69340 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__69341 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__69342 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__69343 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__69344 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__69345 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__69346 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__69347 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__69348 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__69349 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__69350 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__69351 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__69352 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__69353 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__69346);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__69347);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__69348);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__69349);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__69350);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__69351);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__69352);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__69353);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__69345);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__69344);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__69343);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__69342);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__69341);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__69340);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__69339);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__69338);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq69337){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69337));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69387 = arguments.length;
var i__4865__auto___69388 = (0);
while(true){
if((i__4865__auto___69388 < len__4864__auto___69387)){
args__4870__auto__.push((arguments[i__4865__auto___69388]));

var G__69389 = (i__4865__auto___69388 + (1));
i__4865__auto___69388 = G__69389;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__69354__auto__","s__69354__auto__",-879905309,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__69355__auto__","x__69355__auto__",1192580272,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__69354__auto__","s__69354__auto__",-879905309,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__69355__auto__","x__69355__auto__",1192580272,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__69354__auto__","s__69354__auto__",-879905309,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq69356){
var G__69357 = cljs.core.first(seq69356);
var seq69356__$1 = cljs.core.next(seq69356);
var G__69358 = cljs.core.first(seq69356__$1);
var seq69356__$2 = cljs.core.next(seq69356__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69357,G__69358,seq69356__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
