import "./cljs_env.js";
goog.provide('devtools.formatters.templating');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x59105_59240 = value;
(x59105_59240.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x59117_59241 = value;
(x59117_59241.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x59121_59242 = value;
(x59121_59242.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59244 = arguments.length;
var i__4865__auto___59245 = (0);
while(true){
if((i__4865__auto___59245 < len__4864__auto___59244)){
args__4870__auto__.push((arguments[i__4865__auto___59245]));

var G__59246 = (i__4865__auto___59245 + (1));
i__4865__auto___59245 = G__59246;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_([]);
var seq__59128_59247 = cljs.core.seq(items);
var chunk__59129_59248 = null;
var count__59130_59249 = (0);
var i__59131_59250 = (0);
while(true){
if((i__59131_59250 < count__59130_59249)){
var item_59251 = chunk__59129_59248.cljs$core$IIndexed$_nth$arity$2(null,i__59131_59250);
if((!((item_59251 == null)))){
if(cljs.core.coll_QMARK_(item_59251)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_59251)));
} else {
group.push(devtools.formatters.helpers.pref(item_59251));
}
} else {
}


var G__59252 = seq__59128_59247;
var G__59253 = chunk__59129_59248;
var G__59254 = count__59130_59249;
var G__59255 = (i__59131_59250 + (1));
seq__59128_59247 = G__59252;
chunk__59129_59248 = G__59253;
count__59130_59249 = G__59254;
i__59131_59250 = G__59255;
continue;
} else {
var temp__5753__auto___59256 = cljs.core.seq(seq__59128_59247);
if(temp__5753__auto___59256){
var seq__59128_59257__$1 = temp__5753__auto___59256;
if(cljs.core.chunked_seq_QMARK_(seq__59128_59257__$1)){
var c__4679__auto___59258 = cljs.core.chunk_first(seq__59128_59257__$1);
var G__59259 = cljs.core.chunk_rest(seq__59128_59257__$1);
var G__59260 = c__4679__auto___59258;
var G__59261 = cljs.core.count(c__4679__auto___59258);
var G__59262 = (0);
seq__59128_59247 = G__59259;
chunk__59129_59248 = G__59260;
count__59130_59249 = G__59261;
i__59131_59250 = G__59262;
continue;
} else {
var item_59263 = cljs.core.first(seq__59128_59257__$1);
if((!((item_59263 == null)))){
if(cljs.core.coll_QMARK_(item_59263)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_59263)));
} else {
group.push(devtools.formatters.helpers.pref(item_59263));
}
} else {
}


var G__59264 = cljs.core.next(seq__59128_59257__$1);
var G__59265 = null;
var G__59266 = (0);
var G__59267 = (0);
seq__59128_59247 = G__59264;
chunk__59129_59248 = G__59265;
count__59130_59249 = G__59266;
i__59131_59250 = G__59267;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq59126){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59126));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59268 = arguments.length;
var i__4865__auto___59269 = (0);
while(true){
if((i__4865__auto___59269 < len__4864__auto___59268)){
args__4870__auto__.push((arguments[i__4865__auto___59269]));

var G__59270 = (i__4865__auto___59269 + (1));
i__4865__auto___59269 = G__59270;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref(tag);
var style__$1 = devtools.formatters.helpers.pref(style);
var template = devtools.formatters.templating.mark_as_template_BANG_([tag__$1,((cljs.core.empty_QMARK_(style__$1))?({}):({"style": style__$1}))]);
var seq__59142_59271 = cljs.core.seq(children);
var chunk__59143_59272 = null;
var count__59144_59273 = (0);
var i__59145_59274 = (0);
while(true){
if((i__59145_59274 < count__59144_59273)){
var child_59275 = chunk__59143_59272.cljs$core$IIndexed$_nth$arity$2(null,i__59145_59274);
if((!((child_59275 == null)))){
if(cljs.core.coll_QMARK_(child_59275)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_59275))));
} else {
var temp__5751__auto___59276 = devtools.formatters.helpers.pref(child_59275);
if(cljs.core.truth_(temp__5751__auto___59276)){
var child_value_59277 = temp__5751__auto___59276;
template.push(child_value_59277);
} else {
}
}
} else {
}


var G__59278 = seq__59142_59271;
var G__59279 = chunk__59143_59272;
var G__59280 = count__59144_59273;
var G__59281 = (i__59145_59274 + (1));
seq__59142_59271 = G__59278;
chunk__59143_59272 = G__59279;
count__59144_59273 = G__59280;
i__59145_59274 = G__59281;
continue;
} else {
var temp__5753__auto___59282 = cljs.core.seq(seq__59142_59271);
if(temp__5753__auto___59282){
var seq__59142_59283__$1 = temp__5753__auto___59282;
if(cljs.core.chunked_seq_QMARK_(seq__59142_59283__$1)){
var c__4679__auto___59284 = cljs.core.chunk_first(seq__59142_59283__$1);
var G__59285 = cljs.core.chunk_rest(seq__59142_59283__$1);
var G__59286 = c__4679__auto___59284;
var G__59287 = cljs.core.count(c__4679__auto___59284);
var G__59288 = (0);
seq__59142_59271 = G__59285;
chunk__59143_59272 = G__59286;
count__59144_59273 = G__59287;
i__59145_59274 = G__59288;
continue;
} else {
var child_59289 = cljs.core.first(seq__59142_59283__$1);
if((!((child_59289 == null)))){
if(cljs.core.coll_QMARK_(child_59289)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_59289))));
} else {
var temp__5751__auto___59290 = devtools.formatters.helpers.pref(child_59289);
if(cljs.core.truth_(temp__5751__auto___59290)){
var child_value_59291 = temp__5751__auto___59290;
template.push(child_value_59291);
} else {
}
}
} else {
}


var G__59292 = cljs.core.next(seq__59142_59283__$1);
var G__59293 = null;
var G__59294 = (0);
var G__59295 = (0);
seq__59142_59271 = G__59292;
chunk__59143_59272 = G__59293;
count__59144_59273 = G__59294;
i__59145_59274 = G__59295;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq59138){
var G__59139 = cljs.core.first(seq59138);
var seq59138__$1 = cljs.core.next(seq59138);
var G__59140 = cljs.core.first(seq59138__$1);
var seq59138__$2 = cljs.core.next(seq59138__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59139,G__59140,seq59138__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59296 = arguments.length;
var i__4865__auto___59297 = (0);
while(true){
if((i__4865__auto___59297 < len__4864__auto___59296)){
args__4870__auto__.push((arguments[i__4865__auto___59297]));

var G__59298 = (i__4865__auto___59297 + (1));
i__4865__auto___59297 = G__59298;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_((template["concat"]).apply(template,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into_array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq59165){
var G__59166 = cljs.core.first(seq59165);
var seq59165__$1 = cljs.core.next(seq59165);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59166,seq59165__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59299 = arguments.length;
var i__4865__auto___59300 = (0);
while(true){
if((i__4865__auto___59300 < len__4864__auto___59299)){
args__4870__auto__.push((arguments[i__4865__auto___59300]));

var G__59301 = (i__4865__auto___59300 + (1));
i__4865__auto___59300 = G__59301;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq59169){
var G__59170 = cljs.core.first(seq59169);
var seq59169__$1 = cljs.core.next(seq59169);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59170,seq59169__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__59173 = arguments.length;
switch (G__59173) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2(object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3(object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4(object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_((function (){var obj59186 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4253__auto__ = start_index;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})()});
return obj59186;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59307 = arguments.length;
var i__4865__auto___59308 = (0);
while(true){
if((i__4865__auto___59308 < len__4864__auto___59307)){
args__4870__auto__.push((arguments[i__4865__auto___59308]));

var G__59309 = (i__4865__auto___59308 + (1));
i__4865__auto___59308 = G__59309;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__59201){
var vec__59202 = p__59201;
var state_override_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59202,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_(state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], 0));
} else {
var sub_state = (((!((state_override_fn == null))))?(function (){var G__59205 = devtools.formatters.state.get_current_state();
return (state_override_fn.cljs$core$IFn$_invoke$arity$1 ? state_override_fn.cljs$core$IFn$_invoke$arity$1(G__59205) : state_override_fn.call(null,G__59205));
})():devtools.formatters.state.get_current_state());
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["object",({"object": object, "config": sub_state})], 0));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq59199){
var G__59200 = cljs.core.first(seq59199);
var seq59199__$1 = cljs.core.next(seq59199);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59200,seq59199__$1);
}));

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__59208 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__59209 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__59209);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup], 0));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__59208);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_(v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk(f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",devtools.formatters.templating.add_stack_separators(devtools.formatters.templating.pprint_render_calls(devtools.formatters.templating.replace_fns_with_markers(cljs.core.reverse(stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path(devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack(devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_(markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__59217 = name;
switch (G__59217) {
case "surrogate":
var obj = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_surrogate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first(args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_(obj))?(devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1 ? devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : devtools.formatters.templating.render_json_ml_STAR_.call(null,obj)):obj);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_reference,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest(args)));

break;
default:
return devtools.formatters.templating.assert_markup_error(["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_(v)) || (((cljs.core.array_QMARK_(v)) || (typeof v === 'string'))))){
return cljs.core.empty_QMARK_(v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__59224 = tag;
var html_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59224,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59224,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_(markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__59228 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__59229 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first(markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__59229);

try{var tag = devtools.formatters.helpers.pref(cljs.core.first(markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special(tag,cljs.core.rest(markup));
} else {
if(cljs.core.sequential_QMARK_(tag)){
return devtools.formatters.templating.render_subtree(tag,cljs.core.rest(markup));
} else {
return devtools.formatters.templating.assert_markup_error(["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview(markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__59228);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__59232 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__59233 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__59234 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__59235 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__59234);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__59235);

try{return devtools.formatters.templating.render_json_ml_STAR_(markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__59233);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__59232);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),"initial value: ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_value], 0))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_(value)){
var G__59316 = initial_value;
var G__59317 = (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
initial_value = G__59316;
value = G__59317;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__59318 = initial_value;
var G__59319 = devtools.formatters.helpers.pref(value);
initial_value = G__59318;
value = G__59319;
continue;
} else {
if(cljs.core.sequential_QMARK_(value)){
var G__59320 = initial_value;
var G__59321 = devtools.formatters.templating.render_json_ml(value);
initial_value = G__59320;
value = G__59321;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_(value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_(value,value);
});

//# sourceMappingURL=devtools.formatters.templating.js.map
