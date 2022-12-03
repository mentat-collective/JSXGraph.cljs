import "./cljs_env.js";
goog.provide('devtools');
if(cljs.core.truth_((function (){var and__4251__auto__ = (typeof window !== 'undefined') && (typeof window.matchMedia !== 'undefined');
if(and__4251__auto__){
return window.matchMedia("(prefers-color-scheme: dark)").matches;
} else {
return and__4251__auto__;
}
})())){
var map__59950_59952 = devtools.core.get_prefs();
var map__59950_59953__$1 = cljs.core.__destructure_map(map__59950_59952);
var cljs_land_style_59954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950_59953__$1,new cljs.core.Keyword(null,"cljs-land-style","cljs-land-style",278325097));
devtools.core.set_pref_BANG_(new cljs.core.Keyword(null,"cljs-land-style","cljs-land-style",278325097),["filter:invert(1);",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_land_style_59954)].join(''));
} else {
}

//# sourceMappingURL=devtools.js.map
