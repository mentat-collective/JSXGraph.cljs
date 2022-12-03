goog.provide('nextjournal.ui.components.d3_require');
var module$node_modules$d3_require$dist$d3_require=shadow.js.require("module$node_modules$d3_require$dist$d3_require", {});
nextjournal.ui.components.d3_require.with$ = (function nextjournal$ui$components$d3_require$with(p__77133,f){
var map__77135 = p__77133;
var map__77135__$1 = cljs.core.__destructure_map(map__77135);
var package$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77135__$1,new cljs.core.Keyword(null,"package","package",1189062786));
var loading_view = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77135__$1,new cljs.core.Keyword(null,"loading-view","loading-view",1386748874),"Loading...");
var with_let77136 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77136","with-let77136",698242451));
var temp__5757__auto___77156 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___77156 == null)){
} else {
var c__62567__auto___77157 = temp__5757__auto___77156;
if((with_let77136.generation === c__62567__auto___77157.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77136.generation = c__62567__auto___77157.ratomGeneration);
}

var init77137 = (with_let77136.length === (0));
var _BANG_package = ((((init77137) || (cljs.core.not(with_let77136.hasOwnProperty((0))))))?(with_let77136[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let77136[(0)]));
var res77138 = (function (){var G__77151 = cljs.core.deref(_BANG_package);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__77151)){
cljs.core.reset_BANG_(_BANG_package,new cljs.core.Keyword(null,"loading","loading",-737050189));

var obj__60828__auto___77159 = ((typeof package$ === 'string')?module$node_modules$d3_require$dist$d3_require.require(package$):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$d3_require$dist$d3_require.require,package$));
var f__60829__auto___77160 = (obj__60828__auto___77159["then"]);
f__60829__auto___77160.call(obj__60828__auto___77159,(function (p1__77132_SHARP_){
return cljs.core.reset_BANG_(_BANG_package,p1__77132_SHARP_);
}));

return loading_view;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),G__77151)){
return loading_view;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$1((function (){var G__77153 = cljs.core.deref(_BANG_package);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__77153) : f.call(null,G__77153));
})());

}
}
})();
return res77138;
});

//# sourceMappingURL=nextjournal.ui.components.d3_require.js.map
