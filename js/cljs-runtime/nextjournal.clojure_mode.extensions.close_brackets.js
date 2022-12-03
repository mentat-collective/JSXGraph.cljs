goog.provide('nextjournal.clojure_mode.extensions.close_brackets');
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$in_string_QMARK_(state,pos){
var G__66684 = nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,pos));
var fexpr__66683 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["StringContent",null,"String",null], null), null);
return (fexpr__66683.cljs$core$IFn$_invoke$arity$1 ? fexpr__66683.cljs$core$IFn$_invoke$arity$1(G__66684) : fexpr__66683.call(null,G__66684));
});
nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$escaped_QMARK_(state,pos){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",state.doc.slice((function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (pos - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),pos).toString());
});
nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff = (function nextjournal$clojure_mode$extensions$close_brackets$backspace_backoff(state,from,to){
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var G__66691 = nextjournal.clojure_mode.node.node_BAR_(state,(from - (1)));
if((G__66691 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__66691,nextjournal.clojure_mode.node.line_comment_QMARK_);
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return (!(clojure.string.blank_QMARK_(nextjournal.clojure_mode.util.line_content_at(state,from))));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
}
});
/**
 * - skips over closing brackets
 * - when deleting an opening bracket of an empty list, removes both brackets
 */
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace(p__66702){
var map__66706 = p__66702;
var map__66706__$1 = (((((!((map__66706 == null))))?(((((map__66706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66706):map__66706);
var state = map__66706__$1;
var doc = (function (){var obj66713 = map__66706__$1;
if((!((obj66713 == null)))){
return (obj66713["doc"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),state.selection.ranges.length);
if(and__4251__auto__){
var range = (function (){var obj66717 = (function (){var obj66716 = (function (){var obj66715 = state;
if((!((obj66715 == null)))){
return (obj66715["selection"]);
} else {
return undefined;
}
})();
if((!((obj66716 == null)))){
return (obj66716["ranges"]);
} else {
return undefined;
}
})();
if((!((obj66717 == null)))){
return (obj66717[(0)]);
} else {
return undefined;
}
})();
var and__4251__auto____$1 = range.empty;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),range.from);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("delete")}),(function (p__66722){
var map__66724 = p__66722;
var map__66724__$1 = (((((!((map__66724 == null))))?(((((map__66724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66724):map__66724);
var range = map__66724__$1;
var head = (function (){var obj66726 = map__66724__$1;
if((!((obj66726 == null)))){
return (obj66726["head"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66733 = map__66724__$1;
if((!((obj66733 == null)))){
return (obj66733["empty"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj66735 = map__66724__$1;
if((!((obj66735 == null)))){
return (obj66735["anchor"]);
} else {
return undefined;
}
})();
var map__66738 = nextjournal.clojure_mode.util.from_to(head,anchor);
var map__66738__$1 = (((((!((map__66738 == null))))?(((((map__66738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66738):map__66738);
var range__$1 = map__66738__$1;
var from = (function (){var obj66743 = map__66738__$1;
if((!((obj66743 == null)))){
return (obj66743["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66744 = map__66738__$1;
if((!((obj66744 == null)))){
return (obj66744["to"]);
} else {
return undefined;
}
})();
var node_BAR_ = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state).resolve(from,(-1));
var parent = node_BAR_.parent;
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(empty);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("StringContent",nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1))));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto__ = parent;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(nextjournal.clojure_mode.node.balanced_QMARK_(parent)))) && (nextjournal.clojure_mode.node.left_edge_QMARK_(node_BAR_)));
} else {
return and__4251__auto__;
}
}
}
})())){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
} else {
if(((nextjournal.clojure_mode.node.right_edge_QMARK_(node_BAR_)) && ((from === nextjournal.clojure_mode.node.end(parent))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
if(((((nextjournal.clojure_mode.node.start_edge_QMARK_(node_BAR_)) || (nextjournal.clojure_mode.node.same_edge_QMARK_(node_BAR_)))) && ((nextjournal.clojure_mode.node.start(node_BAR_) === nextjournal.clojure_mode.node.start(parent))))){
if(nextjournal.clojure_mode.node.empty_QMARK_(nextjournal.clojure_mode.node.up(node_BAR_))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.node.start(parent),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.util.from_to(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.end(parent))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from], null);
}
} else {
return nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff(state,from,to);

}
}
}
}));
}
});
nextjournal.clojure_mode.extensions.close_brackets.coll_pairs = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
nextjournal.clojure_mode.extensions.close_brackets.handle_open = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open(state,open){
var close = (nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1(open) : nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.call(null,open));
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__66792){
var map__66800 = p__66792;
var map__66800__$1 = (((((!((map__66800 == null))))?(((((map__66800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66800):map__66800);
var from = (function (){var obj66803 = map__66800__$1;
if((!((obj66803 == null)))){
return (obj66803["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66804 = map__66800__$1;
if((!((obj66804 == null)))){
return (obj66804["to"]);
} else {
return undefined;
}
})();
var head = (function (){var obj66805 = map__66800__$1;
if((!((obj66805 == null)))){
return (obj66805["head"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj66807 = map__66800__$1;
if((!((obj66807 == null)))){
return (obj66807["anchor"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66808 = map__66800__$1;
if((!((obj66808 == null)))){
return (obj66808["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open,"\"")){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2(head,"\\\"");
} else {
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
}
} else {
if(nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from)){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
} else {
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),[open,close].join(''),new cljs.core.Keyword(null,"from","from",1815293044),head], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(head + ((open).length))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),open,new cljs.core.Keyword(null,"from","from",1815293044),from], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),close,new cljs.core.Keyword(null,"from","from",1815293044),to], null)], null),new cljs.core.Keyword(null,"from-to","from-to",-640428401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(anchor + ((open).length)),(head + ((open).length))], null)], null);
}

}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close(state,key_name){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__66811){
var map__66812 = p__66811;
var map__66812__$1 = (((((!((map__66812 == null))))?(((((map__66812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66812):map__66812);
var range = map__66812__$1;
var empty = (function (){var obj66815 = map__66812__$1;
if((!((obj66815 == null)))){
return (obj66815["empty"]);
} else {
return undefined;
}
})();
var head = (function (){var obj66818 = map__66812__$1;
if((!((obj66818 == null)))){
return (obj66818["head"]);
} else {
return undefined;
}
})();
var from = (function (){var obj66819 = map__66812__$1;
if((!((obj66819 == null)))){
return (obj66819["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66820 = map__66812__$1;
if((!((obj66820 == null)))){
return (obj66820["to"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from);
}
})())){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,key_name);
} else {
if(cljs.core.truth_(empty)){
var or__4253__auto__ = (function (){var unbalanced = (function (){var G__66824 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,head,(-1));
var G__66824__$1 = (((G__66824 == null))?null:nextjournal.clojure_mode.node.ancestors(G__66824));
var G__66824__$2 = (((G__66824__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,cljs.core.complement(nextjournal.clojure_mode.node.balanced_QMARK_)),G__66824__$1));
if((G__66824__$2 == null)){
return null;
} else {
return cljs.core.first(G__66824__$2);
}
})();
var closing = (function (){var G__66825 = unbalanced;
var G__66825__$1 = (((G__66825 == null))?null:nextjournal.clojure_mode.node.down(G__66825));
if((G__66825__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.closed_by(G__66825__$1);
}
})();
var pos = (function (){var G__66827 = unbalanced;
if((G__66827 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end(G__66827);
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = closing;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closing,key_name);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),pos,new cljs.core.Keyword(null,"insert","insert",1286475395),closing], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(pos + (1))], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var temp__5753__auto__ = (function (){var temp__5753__auto__ = nextjournal.clojure_mode.node.terminal_cursor(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),head,(1));
if(cljs.core.truth_(temp__5753__auto__)){
var cursor = temp__5753__auto__;
while(true){
if(nextjournal.clojure_mode.node.right_edge_type_QMARK_(cursor.type)){
return nextjournal.clojure_mode.node.end(cursor);
} else {
if(cljs.core.truth_(cursor.next())){
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var close_node_end = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),close_node_end], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),head], null);
}
}
} else {
return null;
}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace_cmd(p__66838){
var map__66843 = p__66838;
var map__66843__$1 = (((((!((map__66843 == null))))?(((((map__66843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66843):map__66843);
var view = map__66843__$1;
var state = (function (){var obj66852 = map__66843__$1;
if((!((obj66852 == null)))){
return (obj66852["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open_cmd(key_name){
return (function (p__66856){
var map__66858 = p__66856;
var map__66858__$1 = (((((!((map__66858 == null))))?(((((map__66858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66858):map__66858);
var view = map__66858__$1;
var state = (function (){var obj66861 = map__66858__$1;
if((!((obj66861 == null)))){
return (obj66861["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_open(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close_cmd(key_name){
return (function (p__66866){
var map__66869 = p__66866;
var map__66869__$1 = (((((!((map__66869 == null))))?(((((map__66869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66869):map__66869);
var view = map__66869__$1;
var state = (function (){var obj66873 = map__66869__$1;
if((!((obj66873 == null)))){
return (obj66873["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_close(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.extension = (function nextjournal$clojure_mode$extensions$close_brackets$extension(){
return module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"Backspace","run":(function (p__66877){
var map__66878 = p__66877;
var map__66878__$1 = (((((!((map__66878 == null))))?(((((map__66878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66878):map__66878);
var view = map__66878__$1;
var state = (function (){var obj66882 = map__66878__$1;
if((!((obj66882 == null)))){
return (obj66882["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
})}),({"key":"(","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("(")}),({"key":"[","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("[")}),({"key":"{","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("{")}),({"key":"\"","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("\"")}),({"key":")","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd(")")}),({"key":"]","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("]")}),({"key":"}","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("}")})]);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.close_brackets.js.map
