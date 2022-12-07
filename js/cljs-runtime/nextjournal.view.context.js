goog.provide('nextjournal.view.context');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.view !== 'undefined') && (typeof nextjournal.view.context !== 'undefined') && (typeof nextjournal.view.context.get_context !== 'undefined')){
} else {
nextjournal.view.context.get_context = cljs.core.memoize((function (k){
if((k instanceof cljs.core.Keyword)){
return module$node_modules$react$index.createContext(cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)));
} else {
return k;
}
}));
}
/**
 * Adds React contexts to the component tree.
 * `bindings` should be a map of {<keyword-or-Context>, <value-to-be-bound>}.
 */
nextjournal.view.context.provide = (function nextjournal$view$context$provide(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66164 = arguments.length;
var i__4865__auto___66165 = (0);
while(true){
if((i__4865__auto___66165 < len__4864__auto___66164)){
args__4870__auto__.push((arguments[i__4865__auto___66165]));

var G__66166 = (i__4865__auto___66165 + (1));
i__4865__auto___66165 = G__66166;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return nextjournal.view.context.provide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(nextjournal.view.context.provide.cljs$core$IFn$_invoke$arity$variadic = (function (bindings,body){
var bindings__$1 = cljs.core.seq(bindings);
var out = module$node_modules$react$index.createElement.apply(null,[module$node_modules$react$index.Fragment,({})].concat(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bindings__$1){
return (function (a,el){
var G__66159 = a;
G__66159.push(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(el));

return G__66159;
});})(bindings__$1))
,[],body)));
while(true){
if(cljs.core.empty_QMARK_(bindings__$1)){
return out;
} else {
var G__66167 = cljs.core.rest(bindings__$1);
var G__66168 = (function (){var vec__66160 = cljs.core.first(bindings__$1);
var context_or_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66160,(1),null);
var context = nextjournal.view.context.get_context(context_or_key);
return module$node_modules$react$index.createElement(context.Provider,({"value": v}),out);
})();
bindings__$1 = G__66167;
out = G__66168;
continue;
}
break;
}
}));

(nextjournal.view.context.provide.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.view.context.provide.cljs$lang$applyTo = (function (seq66153){
var G__66154 = cljs.core.first(seq66153);
var seq66153__$1 = cljs.core.next(seq66153);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66154,seq66153__$1);
}));

/**
 * Reads a React context value within component tree.
 * `context` should be a keyword or React Context instance.
 */
nextjournal.view.context.consume = (function nextjournal$view$context$consume(context,f){
return module$node_modules$react$index.createElement(nextjournal.view.context.get_context(context).Consumer,({}),(function (value){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,value], null));
}));
});

//# sourceMappingURL=nextjournal.view.context.js.map