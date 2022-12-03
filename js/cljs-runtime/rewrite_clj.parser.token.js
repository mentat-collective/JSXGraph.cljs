import "./cljs_env.js";
goog.provide('rewrite_clj.parser.token');
rewrite_clj.parser.token.read_to_boundary = (function rewrite_clj$parser$token$read_to_boundary(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69126 = arguments.length;
var i__4865__auto___69127 = (0);
while(true){
if((i__4865__auto___69127 < len__4864__auto___69126)){
args__4870__auto__.push((arguments[i__4865__auto___69127]));

var G__69128 = (i__4865__auto___69127 + (1));
i__4865__auto___69127 = G__69128;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (reader,p__69117){
var vec__69118 = p__69117;
var allowed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69118,(0),null);
var allowed_QMARK_ = cljs.core.set(allowed);
return rewrite_clj.reader.read_until(reader,(function (p1__69114_SHARP_){
var and__4251__auto__ = cljs.core.not((allowed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? allowed_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__69114_SHARP_) : allowed_QMARK_.call(null,p1__69114_SHARP_)));
if(and__4251__auto__){
return rewrite_clj.reader.whitespace_or_boundary_QMARK_(p1__69114_SHARP_);
} else {
return and__4251__auto__;
}
}));
}));

(rewrite_clj.parser.token.read_to_boundary.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_clj.parser.token.read_to_boundary.cljs$lang$applyTo = (function (seq69115){
var G__69116 = cljs.core.first(seq69115);
var seq69115__$1 = cljs.core.next(seq69115);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69116,seq69115__$1);
}));

rewrite_clj.parser.token.read_to_char_boundary = (function rewrite_clj$parser$token$read_to_char_boundary(reader){
var c = rewrite_clj.reader.next(reader);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,"\\"))?rewrite_clj.parser.token.read_to_boundary(reader):""))].join('');
});
/**
 * Symbols allow for certain boundary characters that have
 * to be handled explicitly.
 */
rewrite_clj.parser.token.symbol_node = (function rewrite_clj$parser$token$symbol_node(reader,value,value_string){
var suffix = rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'",":"], null)], 0));
if(cljs.core.empty_QMARK_(suffix)){
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(value,value_string);
} else {
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(rewrite_clj.reader.string__GT_edn(s),s);
}
});
/**
 * Parse a single token.
 */
rewrite_clj.parser.token.parse_token = (function rewrite_clj$parser$token$parse_token(reader){
var first_char = rewrite_clj.reader.next(reader);
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_char),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_char,"\\"))?rewrite_clj.parser.token.read_to_char_boundary(reader):rewrite_clj.parser.token.read_to_boundary(reader)))].join('');
var v = rewrite_clj.reader.string__GT_edn(s);
if((v instanceof cljs.core.Symbol)){
return rewrite_clj.parser.token.symbol_node(reader,v,s);
} else {
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(v,s);
}
});

//# sourceMappingURL=rewrite_clj.parser.token.js.map
