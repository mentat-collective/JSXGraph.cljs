goog.provide('nextjournal.viewer.plotly');
nextjournal.viewer.plotly.default_layout = (function (){var G__77219 = new cljs.core.PersistentArrayMap(null, 3, ["font",new cljs.core.PersistentArrayMap(null, 3, ["family","'Verlag A', 'Verlag B', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif","size",(14),"color","#343434"], null),"height",(450),"autosize",false], null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (typeof window !== 'undefined');
if(and__4251__auto__){
return window.hasOwnProperty("ontouchstart");
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77219,"dragmode",false);
} else {
return G__77219;
}
})();
nextjournal.viewer.plotly.default_graph_options = ({"displayModeBar": false, "displayLogo": false});
nextjournal.viewer.plotly.default_min_margin = new cljs.core.PersistentArrayMap(null, 4, ["r",(0),"l",(30),"b",(0),"t",(20)], null);
nextjournal.viewer.plotly.adjust_layout_margins = (function nextjournal$viewer$plotly$adjust_layout_margins(layout){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(layout,"margin",(function (margin){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.max,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.viewer.plotly.default_min_margin,margin,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout,"title"))?new cljs.core.PersistentArrayMap(null, 1, ["t",(60)], null):null)], 0));
}));
});
/**
 * Like merge, but merges maps recursively.
 */
nextjournal.viewer.plotly.deep_merge_maps = (function nextjournal$viewer$plotly$deep_merge_maps(m1,m2){
if(((cljs.core.map_QMARK_(m1)) && (cljs.core.map_QMARK_(m2)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(nextjournal.viewer.plotly.deep_merge_maps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m1,m2], 0));
} else {
return m2;
}
});
nextjournal.viewer.plotly.graph_layout_with_defaults = (function nextjournal$viewer$plotly$graph_layout_with_defaults(layout){
var layout__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(layout);
var layout__$2 = ((cljs.core.empty_QMARK_(layout__$1))?cljs.core.PersistentArrayMap.EMPTY:layout__$1);
return cljs.core.clj__GT_js(nextjournal.viewer.plotly.adjust_layout_margins(nextjournal.viewer.plotly.deep_merge_maps(nextjournal.viewer.plotly.default_layout,layout__$2)));
});
nextjournal.viewer.plotly.coerce_val = (function nextjournal$viewer$plotly$coerce_val(value){
if(typeof value === 'string'){
return JSON.parse(value);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.clj__GT_js(value);
} else {
return value;

}
}
});
nextjournal.viewer.plotly.viewer_STAR_ = (function nextjournal$viewer$plotly$viewer_STAR_(value){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.d3_require.with$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"package","package",1189062786),"plotly.js-dist@1.51.1"], null),(function (p__77240){
var map__77241 = p__77240;
var map__77241__$1 = (((((!((map__77241 == null))))?(((((map__77241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77241):map__77241);
var Plotly = map__77241__$1;
var relayout = (function (){var obj77245 = map__77241__$1;
if((!((obj77245 == null)))){
return (obj77245["relayout"]);
} else {
return undefined;
}
})();
var Plots = (function (){var obj77246 = map__77241__$1;
if((!((obj77246 == null)))){
return (obj77246["Plots"]);
} else {
return undefined;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-plotly-result","div.code-plotly-result",705541007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (plotly_el){
if(cljs.core.truth_(plotly_el)){
var map__77251 = nextjournal.viewer.plotly.coerce_val(value);
var map__77251__$1 = (((((!((map__77251 == null))))?(((((map__77251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77251):map__77251);
var coerced = map__77251__$1;
var layout = (function (){var obj77253 = map__77251__$1;
if((!((obj77253 == null)))){
return (obj77253["layout"]);
} else {
return undefined;
}
})();
var value_object = (function (){var obj77257 = (function (){var obj77258 = coerced;
if((!((obj77258 == null)))){
var out77259 = ({});
var k__60704__auto___77295 = "data";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60704__auto___77295,obj77258)){
var obj77262_77296 = out77259;
(obj77262_77296[k__60704__auto___77295] = (obj77258[k__60704__auto___77295]));

} else {
}

var k__60704__auto___77297 = "frames";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60704__auto___77297,obj77258)){
var obj77263_77299 = out77259;
(obj77263_77299[k__60704__auto___77297] = (obj77258[k__60704__auto___77297]));

} else {
}

return out77259;
} else {
return ({});
}
})();
var obj77266 = (function (){var obj77267 = (((!((obj77257 == null))))?obj77257:({}));
(obj77267["layout"] = nextjournal.viewer.plotly.graph_layout_with_defaults(layout));

return obj77267;
})();
(obj77266["config"] = nextjournal.viewer.plotly.default_graph_options);

return obj77266;
})();
var obj77270_77300 = this$;
var obj77271_77301 = (((!((obj77270_77300 == null))))?obj77270_77300:({}));
(obj77271_77301["resize-listener"] = goog.functions.debounce((function (){
var G__77274_77305 = plotly_el;
var G__77275_77306 = cljs.core.clj__GT_js(nextjournal.viewer.plotly.graph_layout_with_defaults(layout));
(relayout.cljs$core$IFn$_invoke$arity$2 ? relayout.cljs$core$IFn$_invoke$arity$2(G__77274_77305,G__77275_77306) : relayout.call(null,G__77274_77305,G__77275_77306));

return Plots.resize(plotly_el);
}),(100)));


var obj__60828__auto___77307 = (function (){var obj__60828__auto___77307 = Plotly;
var f__60829__auto___77308 = (obj__60828__auto___77307["newPlot"]);
return f__60829__auto___77308.call(obj__60828__auto___77307,plotly_el,value_object);
})();
var f__60829__auto___77308 = (obj__60828__auto___77307["catch"]);
f__60829__auto___77308.call(obj__60828__auto___77307,(function nextjournal$viewer$plotly$viewer_STAR__$_new_plot_error(reason){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.plotly",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nextjournal.viewer.plotly","insert-plot","nextjournal.viewer.plotly/insert-plot",-1087984347),"Plotly Error",new cljs.core.Keyword(null,"el","el",-1618201118),plotly_el,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason,new cljs.core.Keyword(null,"line","line",212345235),79], null)),null);
}));

return window.addEventListener("resize",(function (){var obj77278 = this$;
if((!((obj77278 == null)))){
return (obj77278["resize-listener"]);
} else {
return undefined;
}
})());
} else {
return window.removeEventListener("resize",(function (){var obj77279 = this$;
if((!((obj77279 == null)))){
return (obj77279["resize-listener"]);
} else {
return undefined;
}
})());
}
})], null)], null);
})], null);
});
nextjournal.viewer.plotly.viewer = (function nextjournal$viewer$plotly$viewer(value){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.plotly.viewer_STAR_,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"reagent","reagent",2131627322)], null));
});

//# sourceMappingURL=nextjournal.viewer.plotly.js.map
