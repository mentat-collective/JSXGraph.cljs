goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__4253__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__66678_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__66678_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__66678_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj66697 = (function (){var obj66696 = (function (){var parent__60843__auto__ = (state["selection"]);
var f__60844__auto__ = (parent__60843__auto__["asSingle"]);
return f__60844__auto__.call(parent__60843__auto__);
})();
if((!((obj66696 == null)))){
return (obj66696["ranges"]);
} else {
return undefined;
}
})();
if((!((obj66697 == null)))){
return (obj66697[(0)]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__66711 = arguments.length;
switch (G__66711) {
case 1:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1 = (function (state){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj66714 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj66714 == null)))){
return (obj66714["from"]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__66718 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__66718__$1 = (((G__66718 == null))?null:(function (p1__66703_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__66703_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__66703_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__66703_SHARP_) <= from)))))){
var G__66721 = p1__66703_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__66703_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__66703_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__66703_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__66703_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__66721,from,(-1)));
} else {
return G__66721;
}
} else {
return null;
}
})(G__66718));
var G__66718__$2 = (((G__66718__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__66718__$1));
if((G__66718__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__66718__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj66751 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj66751 == null)))){
return (obj66751["from"]);
} else {
return undefined;
}
})(),(-1)))));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_effect !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_effect = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.define();
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),"update":(function (value,tr){
var or__4253__auto__ = (function (){var G__66759 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66754_SHARP_){
return p1__66754_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__66759 == null)){
return null;
} else {
var obj66762 = G__66759;
if((!((obj66762 == null)))){
return (obj66762["value"]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return value;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_modifier_field = (function nextjournal$clojure_mode$extensions$eval_region$get_modifier_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.modifier_field);
});
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__66764,value){
var map__66766 = p__66764;
var map__66766__$1 = (((((!((map__66766 == null))))?(((((map__66766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66766):map__66766);
var view = map__66766__$1;
var dispatch = (function (){var obj66770 = map__66766__$1;
if((!((obj66770 == null)))){
return (obj66770["dispatch"]);
} else {
return undefined;
}
})();
var state = (function (){var obj66771 = map__66766__$1;
if((!((obj66771 == null)))){
return (obj66771["state"]);
} else {
return undefined;
}
})();
var G__66775 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__66775) : dispatch.call(null,G__66775));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__66777){
var map__66778 = p__66777;
var map__66778__$1 = (((((!((map__66778 == null))))?(((((map__66778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66778):map__66778);
var from = (function (){var obj66783 = map__66778__$1;
if((!((obj66783 == null)))){
return (obj66783["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66784 = map__66778__$1;
if((!((obj66784 == null)))){
return (obj66784["to"]);
} else {
return undefined;
}
})();
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(spec).range(from,to);
});
nextjournal.clojure_mode.extensions.eval_region.single_mark = (function nextjournal$clojure_mode$extensions$eval_region$single_mark(spec,range){
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set([nextjournal.clojure_mode.extensions.eval_region.mark(spec,range)]);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.14);"})});
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.35);"})});
}
nextjournal.clojure_mode.extensions.eval_region.cursor_range = (function nextjournal$clojure_mode$extensions$eval_region$cursor_range(state){
if(cljs.core.truth_(state.selection.main.empty)){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
} else {
return state.selection.main;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.region_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__66797){
var map__66798 = p__66797;
var map__66798__$1 = (((((!((map__66798 == null))))?(((((map__66798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66798):map__66798);
var state = (function (){var obj66801 = map__66798__$1;
if((!((obj66801 == null)))){
return (obj66801["state"]);
} else {
return undefined;
}
})();
var map__66806 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__66806__$1 = cljs.core.__destructure_map(map__66806);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66806__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66806__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66806__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5751__auto__ = (cljs.core.truth_((function (){var and__4251__auto__ = Alt;
if(cljs.core.truth_(and__4251__auto__)){
return Shift;
} else {
return and__4251__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__4253__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__66791_SHARP_){
return cljs.core.not((function (){var obj66809 = p1__66791_SHARP_;
if((!((obj66809 == null)))){
return (obj66809["empty"]);
} else {
return undefined;
}
})());
}));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.extensions.eval_region.cursor_range(state);
}
})():null));
if(cljs.core.truth_(temp__5751__auto__)){
var range = temp__5751__auto__;
return nextjournal.clojure_mode.extensions.eval_region.single_mark(spec,range);
} else {
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_region_field = (function nextjournal$clojure_mode$extensions$eval_region$get_region_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.region_field);
});
nextjournal.clojure_mode.extensions.eval_region.current_range = (function nextjournal$clojure_mode$extensions$eval_region$current_range(state){
var or__4253__auto__ = (function (){var G__66817 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__66817__$1 = (((G__66817 == null))?null:(function (){var obj__60828__auto__ = G__66817;
var f__60829__auto__ = (obj__60828__auto__["iter"]);
return f__60829__auto__.call(obj__60828__auto__);
})());
if((G__66817__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__66817__$1,(function (p1__66813_SHARP_){
var obj66821 = p1__66813_SHARP_;
if((!((obj66821 == null)))){
return (obj66821["value"]);
} else {
return undefined;
}
}));
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return state.selection.main;
}
});
/**
 * Maintains modifier-state-field, containing a map of {<modifier> true}, including Enter.
 */
nextjournal.clojure_mode.extensions.eval_region.modifier_extension = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension(modifier){
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__66828){
var map__66830 = p__66828;
var map__66830__$1 = (((((!((map__66830 == null))))?(((((map__66830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66830):map__66830);
var view = map__66830__$1;
var state = (function (){var obj66833 = map__66830__$1;
if((!((obj66833 == null)))){
return (obj66833["state"]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__66834,p__66835){
var map__66837 = p__66834;
var map__66837__$1 = (((((!((map__66837 == null))))?(((((map__66837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66837):map__66837);
var event = map__66837__$1;
var altKey = (function (){var obj66845 = map__66837__$1;
if((!((obj66845 == null)))){
return (obj66845["altKey"]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj66846 = map__66837__$1;
if((!((obj66846 == null)))){
return (obj66846["shiftKey"]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj66847 = map__66837__$1;
if((!((obj66847 == null)))){
return (obj66847["metaKey"]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj66848 = map__66837__$1;
if((!((obj66848 == null)))){
return (obj66848["controlKey"]);
} else {
return undefined;
}
})();
var type = (function (){var obj66849 = map__66837__$1;
if((!((obj66849 == null)))){
return (obj66849["type"]);
} else {
return undefined;
}
})();
var map__66839 = p__66835;
var map__66839__$1 = (((((!((map__66839 == null))))?(((((map__66839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66839):map__66839);
var view = map__66839__$1;
var state = (function (){var obj66851 = map__66839__$1;
if((!((obj66851 == null)))){
return (obj66851["state"]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__66853 = cljs.core.PersistentArrayMap.EMPTY;
var G__66853__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66853,"Alt",true):G__66853);
var G__66853__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66853__$1,"Shift",true):G__66853__$1);
var G__66853__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66853__$2,"Meta",true):G__66853__$2);
var G__66853__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66853__$3,"Control",true):G__66853__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66853__$4,"Enter",true);
} else {
return G__66853__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__66855){
var map__66857 = p__66855;
var map__66857__$1 = (((((!((map__66857 == null))))?(((((map__66857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66857):map__66857);
var view = map__66857__$1;
var state = (function (){var obj66867 = map__66857__$1;
if((!((obj66867 == null)))){
return (obj66867["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj66868 = map__66857__$1;
if((!((obj66868 == null)))){
return (obj66868["dispatch"]);
} else {
return undefined;
}
})();
var map__66870 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__66870__$1 = (((((!((map__66870 == null))))?(((((map__66870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66870):map__66870);
var from = (function (){var obj66874 = map__66870__$1;
if((!((obj66874 == null)))){
return (obj66874["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66875 = map__66870__$1;
if((!((obj66875 == null)))){
return (obj66875["to"]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__66876_66957 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__66876_66957) : dispatch.call(null,G__66876_66957));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__66880){
var map__66881 = p__66880;
var map__66881__$1 = cljs.core.__destructure_map(map__66881);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66881__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__66883 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__66883 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__66883);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__66884 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__66884 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__66884);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
