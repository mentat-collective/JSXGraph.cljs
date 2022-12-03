import "./cljs_env.js";
goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__56324__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__56324__auto__["add"]).call(o__56324__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__56324__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__56324__auto__["delete"]).call(o__56324__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__56324__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__56324__auto__["has"]).call(o__56324__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__59873 = data;
var target__56345__auto__ = G__59873;
if(cljs.core.truth_(target__56345__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59873)].join(''),"\n","target__56345__auto__"].join('')));
}

(target__56345__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__59873;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_59878 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_59878);
} else {
var seq__59874_59879 = cljs.core.seq(json_ml);
var chunk__59875_59880 = null;
var count__59876_59881 = (0);
var i__59877_59882 = (0);
while(true){
if((i__59877_59882 < count__59876_59881)){
var item_59883 = chunk__59875_59880.cljs$core$IIndexed$_nth$arity$2(null,i__59877_59882);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_59883,new_depth_budget_59878) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_59883,new_depth_budget_59878));


var G__59884 = seq__59874_59879;
var G__59885 = chunk__59875_59880;
var G__59886 = count__59876_59881;
var G__59887 = (i__59877_59882 + (1));
seq__59874_59879 = G__59884;
chunk__59875_59880 = G__59885;
count__59876_59881 = G__59886;
i__59877_59882 = G__59887;
continue;
} else {
var temp__5753__auto___59888 = cljs.core.seq(seq__59874_59879);
if(temp__5753__auto___59888){
var seq__59874_59889__$1 = temp__5753__auto___59888;
if(cljs.core.chunked_seq_QMARK_(seq__59874_59889__$1)){
var c__4679__auto___59890 = cljs.core.chunk_first(seq__59874_59889__$1);
var G__59891 = cljs.core.chunk_rest(seq__59874_59889__$1);
var G__59892 = c__4679__auto___59890;
var G__59893 = cljs.core.count(c__4679__auto___59890);
var G__59894 = (0);
seq__59874_59879 = G__59891;
chunk__59875_59880 = G__59892;
count__59876_59881 = G__59893;
i__59877_59882 = G__59894;
continue;
} else {
var item_59895 = cljs.core.first(seq__59874_59889__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_59895,new_depth_budget_59878) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_59895,new_depth_budget_59878));


var G__59896 = cljs.core.next(seq__59874_59889__$1);
var G__59897 = null;
var G__59898 = (0);
var G__59899 = (0);
seq__59874_59879 = G__59896;
chunk__59875_59880 = G__59897;
count__59876_59881 = G__59898;
i__59877_59882 = G__59899;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5751__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5751__auto__)){
var initial_hierarchy_depth_budget = temp__5751__auto__;
var remaining_depth_budget = (function (){var or__4253__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
