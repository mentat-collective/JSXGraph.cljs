goog.provide('nextjournal.clojure_mode.util');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
/**
 * @define {boolean}
 */
nextjournal.clojure_mode.util.node_js_QMARK_ = goog.define("nextjournal.clojure_mode.util.node_js_QMARK_",false);
nextjournal.clojure_mode.util.user_event_annotation = (function nextjournal$clojure_mode$util$user_event_annotation(event_name){
return module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent.of(event_name);
});
nextjournal.clojure_mode.util.get_user_event_annotation = (function nextjournal$clojure_mode$util$get_user_event_annotation(tr){
return tr.annotation(module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent);
});
nextjournal.clojure_mode.util.guard = (function nextjournal$clojure_mode$util$guard(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
nextjournal.clojure_mode.util.from_to = (function nextjournal$clojure_mode$util$from_to(p1,p2){
if((p1 > p2)){
return ({"from": p2, "to": p1});
} else {
return ({"from": p1, "to": p2});
}
});
/**
 * If passed a transaction, dispatch to view and return true to stop processing commands.
 */
nextjournal.clojure_mode.util.dispatch_some = (function nextjournal$clojure_mode$util$dispatch_some(view,tr){
if(cljs.core.truth_(tr)){
view.dispatch(tr);

return true;
} else {
return false;
}
});
/**
 * Returns a `change` that inserts string `s` at position `from` and moves cursor to end of insertion.
 */
nextjournal.clojure_mode.util.insertion = (function nextjournal$clojure_mode$util$insertion(var_args){
var G__66210 = arguments.length;
switch (G__66210) {
case 2:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2 = (function (from,s){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,from,s);
}));

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3 = (function (from,to,s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert","insert",1286475395),s,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((s).length))], null);
}));

(nextjournal.clojure_mode.util.insertion.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.deletion = (function nextjournal$clojure_mode$util$deletion(var_args){
var G__66213 = arguments.length;
switch (G__66213) {
case 1:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1 = (function (from){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (from - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),from);
}));

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
var from__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to))?(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (from - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})():from);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from__$1,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to], null)], null);
}));

(nextjournal.clojure_mode.util.deletion.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.util.line_content_at = (function nextjournal$clojure_mode$util$line_content_at(state,from){
var obj__60828__auto__ = (function (){var parent__60843__auto__ = (state["doc"]);
var f__60844__auto__ = (parent__60843__auto__["lineAt"]);
return f__60844__auto__.call(parent__60843__auto__,from);
})();
var f__60829__auto__ = (obj__60828__auto__["slice"]);
return f__60829__auto__.call(obj__60828__auto__);
});
nextjournal.clojure_mode.util.map_cursor = (function nextjournal$clojure_mode$util$map_cursor(original_range,state,update_map){
if(cljs.core.map_QMARK_(update_map)){
} else {
throw (new Error("Assert failed: (map? update-map)"));
}

var map__66215 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__66215__$1 = cljs.core.__destructure_map(map__66215);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__66216 = ({"range": (function (){var or__4253__auto__ = range;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (cljs.core.truth_(mapped)?nextjournal.clojure_mode.selections.cursor(change_desc.mapPos(mapped)):(cljs.core.truth_(cursor)?nextjournal.clojure_mode.selections.cursor(cursor):(cljs.core.truth_(from_to)?nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2((from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((0)) : from_to.call(null,(0))),(from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((1)) : from_to.call(null,(1)))):null)));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return original_range;
}
}
})()});
if(cljs.core.truth_(change_desc)){
var obj66217 = G__66216;
(obj66217["changes"] = change_desc);

return obj66217;
} else {
return G__66216;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__66221 = arguments.length;
switch (G__66221) {
case 2:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,null,f);
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3 = (function (state,tr_specs,f){
return state.update((function (p1__66218_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__66218_SHARP_,tr_specs);
})(state.changeByRange((function (range){
var or__4253__auto__ = (function (){var temp__5757__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(range) : f.call(null,range));
if((temp__5757__auto__ == null)){
return null;
} else {
var result = temp__5757__auto__;
return nextjournal.clojure_mode.util.map_cursor(range,state,result);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ({"range": range});
}
}))));
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.dispatch_changes = (function nextjournal$clojure_mode$util$dispatch_changes(state,dispatch,changes){
if(cljs.core.truth_(changes.empty)){
return null;
} else {
var G__66223 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__66223) : dispatch.call(null,G__66223));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66428 = arguments.length;
var i__4865__auto___66429 = (0);
while(true){
if((i__4865__auto___66429 < len__4864__auto___66428)){
args__4870__auto__.push((arguments[i__4865__auto___66429]));

var G__66430 = (i__4865__auto___66429 + (1));
i__4865__auto___66429 = G__66430;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__66229){
var vec__66230 = p__66229;
var map__66233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66230,(0),null);
var map__66233__$1 = cljs.core.__destructure_map(map__66233);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66233__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66233__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66233__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__66244 = result;
var map__66244__$1 = (((((!((map__66244 == null))))?(((((map__66244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66244):map__66244);
var done = (function (){var obj66247 = map__66244__$1;
if((!((obj66247 == null)))){
return (obj66247["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj66248 = map__66244__$1;
if((!((obj66248 == null)))){
return (obj66248["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj66249 = map__66244__$1;
if((!((obj66249 == null)))){
return (obj66249["value"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = done;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (from > to);
}
})())){
return state.update(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(({"changes": state.changes(changes)}),spec));
} else {
var G__66431 = iterator.next();
var G__66432 = (function (){var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.not(lineBreak);
if(and__4251__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var change = temp__5751__auto__;
var Array66250 = changes;
Array66250.push(change);

return Array66250;
} else {
return changes;
}
})();
var G__66433 = (from_pos + ((value).length));
var G__66434 = (function (){var G__66251 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__66251 + (1));
} else {
return G__66251;
}
})();
result = G__66431;
changes = G__66432;
from_pos = G__66433;
line_num = G__66434;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq66225){
var G__66226 = cljs.core.first(seq66225);
var seq66225__$1 = cljs.core.next(seq66225);
var G__66227 = cljs.core.first(seq66225__$1);
var seq66225__$2 = cljs.core.next(seq66225__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66226,G__66227,seq66225__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__66255){
var map__66259 = p__66255;
var map__66259__$1 = (((((!((map__66259 == null))))?(((((map__66259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66259):map__66259);
var range = map__66259__$1;
var from = (function (){var obj66262 = map__66259__$1;
if((!((obj66262 == null)))){
return (obj66262["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66263 = map__66259__$1;
if((!((obj66263 == null)))){
return (obj66263["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj66264 = map__66259__$1;
if((!((obj66264 == null)))){
return (obj66264["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj66265 = map__66259__$1;
if((!((obj66265 == null)))){
return (obj66265["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__66272 = line;
var map__66272__$1 = (((((!((map__66272 == null))))?(((((map__66272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66272):map__66272);
var line_number = (function (){var obj66275 = map__66272__$1;
if((!((obj66275 == null)))){
return (obj66275["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj66276 = map__66272__$1;
if((!((obj66276 == null)))){
return (obj66276["to"]);
} else {
return undefined;
}
})();
if((line.number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(line,changes,range) : f.call(null,line,changes,range));
} else {
}

var temp__5751__auto__ = (function (){var and__4251__auto__ = (to > line_to);
if(and__4251__auto__){
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__4251__auto__,map__66272,map__66272__$1,line_number,line_to,changes,map__66259,map__66259__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__66253_SHARP_){
return (p1__66253_SHARP_.number > line_number);
});})(line,and__4251__auto__,map__66272,map__66272__$1,line_number,line_to,changes,map__66259,map__66259__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var next_line = temp__5751__auto__;
var G__66437 = next_line;
line = G__66437;
continue;
} else {
var change_set = state.changes(changes);
return ({"changes": changes, "range": module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(change_set.mapPos(anchor,(1)),change_set.mapPos(head,(1)))});
}
break;
}
}));
});
/**
 * `f` will be called for each changed line with args [line, changes-array]
 * and should *mutate* changes-array. Selections will be mapped through the resulting changeset.
 */
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__66279,f){
var map__66280 = p__66279;
var map__66280__$1 = (((((!((map__66280 == null))))?(((((map__66280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66280):map__66280);
var tr = map__66280__$1;
var map__66281 = (function (){var obj66286 = map__66280__$1;
if((!((obj66286 == null)))){
return (obj66286["state"]);
} else {
return undefined;
}
})();
var map__66281__$1 = (((((!((map__66281 == null))))?(((((map__66281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66281):map__66281);
var state = map__66281__$1;
var doc = (function (){var obj66288 = map__66281__$1;
if((!((obj66288 == null)))){
return (obj66288["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj66289 = map__66280__$1;
if((!((obj66289 == null)))){
return (obj66289["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj66291 = map__66280__$1;
if((!((obj66291 == null)))){
return (obj66291["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj66293 = map__66280__$1;
if((!((obj66293 == null)))){
return (obj66293["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__66297 = doc.lineAt(from_b);
var map__66297__$1 = (((((!((map__66297 == null))))?(((((map__66297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66297):map__66297);
var line = map__66297__$1;
var line_number = (function (){var obj66304 = map__66297__$1;
if((!((obj66304 == null)))){
return (obj66304["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj66308 = map__66297__$1;
if((!((obj66308 == null)))){
return (obj66308["to"]);
} else {
return undefined;
}
})();
var line__$1 = line;
while(true){
if((line_number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(line__$1,next_changes) : f.call(null,line__$1,next_changes));
} else {
}

if((to_b <= line_to)){
return null;
} else {
var next_line = doc.lineAt((line_to + (1)));
if(cljs.core.truth_((function (){var and__4251__auto__ = next_line;
if(cljs.core.truth_(and__4251__auto__)){
return (next_line.number > line__$1.number);
} else {
return and__4251__auto__;
}
})())){
var G__66438 = next_line;
line__$1 = G__66438;
continue;
} else {
return null;
}
}
break;
}
}));
var next_changeset = state.changes(next_changes);
if(cljs.core.seq(next_changes)){
var G__66322 = (function (){var obj66324 = (function (){var obj66328 = tr;
if((!((obj66328 == null)))){
var out66329 = ({});
var k__60704__auto___66439 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60704__auto___66439,obj66328)){
var obj66356_66440 = out66329;
(obj66356_66440[k__60704__auto___66439] = (obj66328[k__60704__auto___66439]));

} else {
}

var k__60704__auto___66441 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60704__auto___66441,obj66328)){
var obj66361_66442 = out66329;
(obj66361_66442[k__60704__auto___66441] = (obj66328[k__60704__auto___66441]));

} else {
}

var k__60704__auto___66443 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60704__auto___66443,obj66328)){
var obj66362_66444 = out66329;
(obj66362_66444[k__60704__auto___66443] = (obj66328[k__60704__auto___66443]));

} else {
}

return out66329;
} else {
return ({});
}
})();
var obj66368 = (((!((obj66324 == null))))?obj66324:({}));
(obj66368["changes"] = changes.compose(next_changeset));

return obj66368;
})();
var G__66322__$1 = (cljs.core.truth_(selection)?(function (){var obj66372 = G__66322;
var obj66373 = (((!((obj66372 == null))))?obj66372:({}));
(obj66373["selection"] = state.selection.map(next_changeset));

return obj66373;
})():G__66322);
if(cljs.core.truth_(effects)){
var obj66379 = G__66322__$1;
var obj66380 = (((!((obj66379 == null))))?obj66379:({}));
(obj66380["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj66380;
} else {
return G__66322__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__66385){
var map__66389 = p__66385;
var map__66389__$1 = (((((!((map__66389 == null))))?(((((map__66389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66389):map__66389);
var map__66392 = (function (){var obj66397 = map__66389__$1;
if((!((obj66397 == null)))){
return (obj66397["selection"]);
} else {
return undefined;
}
})();
var map__66392__$1 = (((((!((map__66392 == null))))?(((((map__66392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66392):map__66392);
var ranges = (function (){var obj66403 = map__66392__$1;
if((!((obj66403 == null)))){
return (obj66403["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__66384_SHARP_){
return p1__66384_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__66404){
var map__66406 = p__66404;
var map__66406__$1 = (((((!((map__66406 == null))))?(((((map__66406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66406):map__66406);
var selection = map__66406__$1;
var from = (function (){var obj66411 = map__66406__$1;
if((!((obj66411 == null)))){
return (obj66411["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66414 = map__66406__$1;
if((!((obj66414 == null)))){
return (obj66414["to"]);
} else {
return undefined;
}
})();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__60843__auto__ = (state["doc"]);
var f__60844__auto__ = (parent__60843__auto__["slice"]);
return f__60844__auto__.call(parent__60843__auto__,from,to);
})());
});

//# sourceMappingURL=nextjournal.clojure_mode.util.js.map
