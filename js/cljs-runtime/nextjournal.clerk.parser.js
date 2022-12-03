import "./cljs_env.js";
goog.provide('nextjournal.clerk.parser');
nextjournal.clerk.parser.ns_QMARK_ = (function nextjournal$clerk$parser$ns_QMARK_(form){
return ((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),cljs.core.first(form))));
});
nextjournal.clerk.parser.remove_leading_semicolons = (function nextjournal$clerk$parser$remove_leading_semicolons(s){
return clojure.string.replace(s,/^[;]+/,"");
});
nextjournal.clerk.parser.legacy_doc_visibility = (function nextjournal$clerk$parser$legacy_doc_visibility(form){
var temp__5753__auto__ = new cljs.core.Keyword("nextjournal.clerk","visibility","nextjournal.clerk/visibility",-1860031708).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(cljs.core.truth_(temp__5753__auto__)){
var visibility = temp__5753__auto__;
var temp__5753__auto____$1 = (((visibility instanceof cljs.core.Keyword))?cljs.core.PersistentHashSet.createAsIfByAssoc([visibility]):((cljs.core.set_QMARK_(visibility))?visibility:null));
if(cljs.core.truth_(temp__5753__auto____$1)){
var visibility_set = temp__5753__auto____$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var or__4253__auto__ = cljs.core.some((function (p1__69321_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(visibility_set,p1__69321_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"fold","fold",-887461332)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"show","show",-576705889);
}
})()], null);
} else {
return null;
}
} else {
return null;
}
});
nextjournal.clerk.parser.legacy_form_visibility = (function nextjournal$clerk$parser$legacy_form_visibility(form,visibility){
var temp__5753__auto__ = (((visibility instanceof cljs.core.Keyword))?cljs.core.PersistentHashSet.createAsIfByAssoc([visibility]):((cljs.core.set_QMARK_(visibility))?visibility:null));
if(cljs.core.truth_(temp__5753__auto__)){
var legacy_visibility = temp__5753__auto__;
var visibility_set_SINGLEQUOTE_ = (function (){var G__69371 = legacy_visibility;
if(cljs.core.truth_(new cljs.core.Keyword(null,"hide-ns","hide-ns",-279339071).cljs$core$IFn$_invoke$arity$1(legacy_visibility))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__69371,legacy_visibility,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hide","hide",-596913169)], 0));
} else {
return G__69371;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var or__4253__auto__ = cljs.core.some((function (p1__69354_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(visibility_set_SINGLEQUOTE_,p1__69354_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"fold","fold",-887461332)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"show","show",-576705889);
}
})()], null),(((function (){var or__4253__auto__ = (function (){var G__69372 = form;
var G__69372__$1 = (((G__69372 == null))?null:cljs.core.meta(G__69372));
var G__69372__$2 = (((G__69372__$1 == null))?null:new cljs.core.Keyword("nextjournal.clerk","viewer","nextjournal.clerk/viewer",484555418).cljs$core$IFn$_invoke$arity$1(G__69372__$1));
var G__69372__$3 = (((G__69372__$2 == null))?null:cljs.core.name(G__69372__$2));
if((G__69372__$3 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__69372__$3,"hide-result");
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core.seq_QMARK_(form)) && ((((cljs.core.first(form) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hide-result",cljs.core.name(cljs.core.first(form)))))));
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"hide","hide",-596913169)], null):null)], 0));
} else {
return null;
}
});
nextjournal.clerk.parser.visibility_marker_QMARK_ = (function nextjournal$clerk$parser$visibility_marker_QMARK_(form){
return ((cljs.core.map_QMARK_(form)) && (cljs.core.contains_QMARK_(form,new cljs.core.Keyword("nextjournal.clerk","visibility","nextjournal.clerk/visibility",-1860031708))));
});
nextjournal.clerk.parser.parse_visibility = (function nextjournal$clerk$parser$parse_visibility(form,visibility){
var or__4253__auto__ = nextjournal.clerk.parser.legacy_form_visibility(form,visibility);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5753__auto__ = (function (){var and__4251__auto__ = visibility;
if(cljs.core.truth_(and__4251__auto__)){
var G__69380 = visibility;
if((!(cljs.core.map_QMARK_(visibility)))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"code","code",1586293142)],[G__69380]);
} else {
return G__69380;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var visibility_map = temp__5753__auto__;
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),cljs.core.keys(visibility_map))) && (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fold","fold",-887461332),null,new cljs.core.Keyword(null,"hide","hide",-596913169),null,new cljs.core.Keyword(null,"show","show",-576705889),null], null), null),cljs.core.vals(visibility_map))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid `:nextjournal.clerk/visibility`, please pass a map with `:code` and `:result` keys, allowed values are `:hide`, `:show` and `:fold`.",(function (){var G__69383 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),visibility], null);
if(cljs.core.truth_(form)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69383,new cljs.core.Keyword(null,"form","form",-1624062471),form);
} else {
return G__69383;
}
})());
}

return visibility_map;
} else {
return null;
}
}
});
nextjournal.clerk.parser.__GT_visibility = (function nextjournal$clerk$parser$__GT_visibility(form){
if(nextjournal.clerk.parser.visibility_marker_QMARK_(form)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"hide","hide",-596913169)], null);
} else {
var G__69387 = nextjournal.clerk.parser.parse_visibility(form,new cljs.core.Keyword("nextjournal.clerk","visibility","nextjournal.clerk/visibility",-1860031708).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)));
if(nextjournal.clerk.parser.ns_QMARK_(form)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__69387,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"hide","hide",-596913169)], null)], 0));
} else {
return G__69387;
}
}
});
nextjournal.clerk.parser.get_doc_setting = (function nextjournal$clerk$parser$get_doc_setting(form,key){
var or__4253__auto__ = ((nextjournal.clerk.parser.ns_QMARK_(form))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__69395 = cljs.core.meta(cljs.core.second(form));
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__69395) : key.call(null,G__69395));
})(),cljs.core.some(key,form)], 0)):null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.map_QMARK_(form)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,key);
} else {
return null;
}
}
});
nextjournal.clerk.parser.__GT_doc_visibility = (function nextjournal$clerk$parser$__GT_doc_visibility(form){
if(cljs.core.truth_((function (){var and__4251__auto__ = nextjournal.clerk.parser.ns_QMARK_(form);
if(and__4251__auto__){
return nextjournal.clerk.parser.legacy_doc_visibility(form);
} else {
return and__4251__auto__;
}
})())){
return nextjournal.clerk.parser.legacy_doc_visibility(form);
} else {
if(((nextjournal.clerk.parser.ns_QMARK_(form)) || (nextjournal.clerk.parser.visibility_marker_QMARK_(form)))){
return nextjournal.clerk.parser.parse_visibility(form,nextjournal.clerk.parser.get_doc_setting(form,new cljs.core.Keyword("nextjournal.clerk","visibility","nextjournal.clerk/visibility",-1860031708)));
} else {
return null;
}
}
});
nextjournal.clerk.parser.__GT_doc_settings = (function nextjournal$clerk$parser$__GT_doc_settings(first_form){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns?","ns?",-1192630279),nextjournal.clerk.parser.ns_QMARK_(first_form),new cljs.core.Keyword(null,"toc-visibility","toc-visibility",-1781055352),(function (){var or__4253__auto__ = (function (){var G__69403 = new cljs.core.Keyword("nextjournal.clerk","toc","nextjournal.clerk/toc",-1231615888).cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(first_form),((nextjournal.clerk.parser.ns_QMARK_(first_form))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(cljs.core.second(first_form)),cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,first_form))], 0)):null)], 0)));
var fexpr__69402 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null,true,null], null), null);
return (fexpr__69402.cljs$core$IFn$_invoke$arity$1 ? fexpr__69402.cljs$core$IFn$_invoke$arity$1(G__69403) : fexpr__69402.call(null,G__69403));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})()], null);
});
nextjournal.clerk.parser.__GT_open_graph = (function nextjournal$clerk$parser$__GT_open_graph(p__69406){
var map__69408 = p__69406;
var map__69408__$1 = cljs.core.__destructure_map(map__69408);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69408__$1,new cljs.core.Keyword(null,"title","title",636505583));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69408__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"article:clerk",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.first(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doc","doc",1913296891)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paragraph","paragraph",296707709),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(nextjournal.markdown.transform.__GT_text)], 0)),blocks))], null),cljs.core.some((function (p1__69405_SHARP_){
return nextjournal.clerk.parser.get_doc_setting(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(p1__69405_SHARP_),new cljs.core.Keyword("nextjournal.clerk","open-graph","nextjournal.clerk/open-graph",1681164391));
}),blocks)], 0));
});
nextjournal.clerk.parser.add_open_graph_metadata = (function nextjournal$clerk$parser$add_open_graph_metadata(doc){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"open-graph","open-graph",-1193910354),nextjournal.clerk.parser.__GT_open_graph(doc));
});
nextjournal.clerk.parser.add_block_visibility = (function nextjournal$clerk$parser$add_block_visibility(p__69411){
var map__69412 = p__69411;
var map__69412__$1 = cljs.core.__destructure_map(map__69412);
var analyzed_doc = map__69412__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69412__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__69415,p__69416){
var map__69418 = p__69415;
var map__69418__$1 = cljs.core.__destructure_map(map__69418);
var state = map__69418__$1;
var visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69418__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
var map__69419 = p__69416;
var map__69419__$1 = cljs.core.__destructure_map(map__69419);
var block = map__69419__$1;
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69419__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69419__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69419__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var visibility_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([visibility,nextjournal.clerk.parser.__GT_doc_visibility(form)], 0));
var G__69422 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.conj,(function (){var G__69423 = block;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"code","code",1586293142))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69423,new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([visibility_SINGLEQUOTE_,nextjournal.clerk.parser.__GT_visibility(form)], 0)));
} else {
return G__69423;
}
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"code","code",1586293142))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69422,new cljs.core.Keyword(null,"visibility","visibility",1338380893),visibility_SINGLEQUOTE_);
} else {
return G__69422;
}
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(analyzed_doc,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"show","show",-576705889)], null)], 0)),blocks),new cljs.core.Keyword(null,"visibility","visibility",1338380893));
});
nextjournal.clerk.parser.code_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"deref","deref",-145586795),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
nextjournal.clerk.parser.whitespace_on_line_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"comma","comma",1699024745),null,new cljs.core.Keyword(null,"comment","comment",532206069),null], null), null);
nextjournal.clerk.parser.parse_clojure_string = (function nextjournal$clerk$parser$parse_clojure_string(var_args){
var G__69434 = arguments.length;
switch (G__69434) {
case 1:
return nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,s);
}));

(nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY], null),s);
}));

(nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$3 = (function (p__69451,initial_state,s){
var map__69452 = p__69451;
var map__69452__$1 = cljs.core.__destructure_map(map__69452);
var _opts = map__69452__$1;
var doc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69452__$1,new cljs.core.Keyword(null,"doc?","doc?",754571024));
var G__69455 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_state,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(rewrite_clj.parser.parse_string_all(s)));
var map__69456 = G__69455;
var map__69456__$1 = cljs.core.__destructure_map(map__69456);
var state = map__69456__$1;
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69456__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69456__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69456__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
var add_comment_on_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69456__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565));
var G__69455__$1 = G__69455;
while(true){
var map__69476 = G__69455__$1;
var map__69476__$1 = cljs.core.__destructure_map(map__69476);
var state__$1 = map__69476__$1;
var nodes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69476__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69476__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var visibility__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69476__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
var add_comment_on_line_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69476__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565));
var temp__5751__auto__ = cljs.core.first(nodes__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var node = temp__5751__auto__;
var G__69586 = (cljs.core.truth_((function (){var G__69478 = rewrite_clj.node.tag(node);
return (nextjournal.clerk.parser.code_tags.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.parser.code_tags.cljs$core$IFn$_invoke$arity$1(G__69478) : nextjournal.clerk.parser.code_tags.call(null,G__69478));
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565),true),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.rest),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"text","text",-1790561697),rewrite_clj.node.string(node),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.select_keys(clojure.set.rename_keys(cljs.core.meta(node),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"column","column",2078222095)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null))], null)):(cljs.core.truth_((function (){var and__4251__auto__ = add_comment_on_line_QMARK___$1;
if(cljs.core.truth_(and__4251__auto__)){
var G__69482 = rewrite_clj.node.tag(node);
return (nextjournal.clerk.parser.whitespace_on_line_tags.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.parser.whitespace_on_line_tags.cljs$core$IFn$_invoke$arity$1(G__69482) : nextjournal.clerk.parser.whitespace_on_line_tags.call(null,G__69482));
} else {
return and__4251__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565),(!(rewrite_clj.node.comment_QMARK_(node)))),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.rest),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),(cljs.core.count(blocks__$1) - (1)),new cljs.core.Keyword(null,"text","text",-1790561697)], null),cljs.core.str,clojure.string.trim_newline(rewrite_clj.node.string(node))):(cljs.core.truth_((function (){var and__4251__auto__ = doc_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return rewrite_clj.node.comment_QMARK_(node);
} else {
return and__4251__auto__;
}
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565),false),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.comment_QMARK_,rewrite_clj.node.linebreak_QMARK_),nodes__$1)),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.select_keys(nextjournal.markdown.parse(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.parser.remove_leading_semicolons,rewrite_clj.node.string),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.comment_QMARK_,rewrite_clj.node.linebreak_QMARK_),nodes__$1)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"content","content",15833224)], null))], null)):cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"add-comment-on-line?","add-comment-on-line?",-104005565),false),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.rest)
)));
G__69455__$1 = G__69586;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null)),(cljs.core.truth_(doc_QMARK_)?cljs.core.select_keys(nextjournal.markdown.parser.add_title_PLUS_toc(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"doc","doc",1913296891)))),blocks__$1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"toc","toc",2050089251)], null)):null)], 0));
}
break;
}
}));

(nextjournal.clerk.parser.parse_clojure_string.cljs$lang$maxFixedArity = 3);

nextjournal.clerk.parser.code_cell_QMARK_ = (function nextjournal$clerk$parser$code_cell_QMARK_(p__69493){
var map__69495 = p__69493;
var map__69495__$1 = cljs.core.__destructure_map(map__69495);
var node = map__69495__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69495__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),type)) && (cljs.core.contains_QMARK_(node,new cljs.core.Keyword(null,"info","info",-317069002))));
});
nextjournal.clerk.parser.parse_markdown_cell = (function nextjournal$clerk$parser$parse_markdown_cell(p__69506){
var map__69508 = p__69506;
var map__69508__$1 = cljs.core.__destructure_map(map__69508);
var state = map__69508__$1;
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69508__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(nextjournal.clerk.parser.parse_clojure_string.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc?","doc?",754571024),true], null),state,nextjournal.markdown.transform.__GT_text(cljs.core.first(nodes))),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.rest(nodes),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal.clerk.parser","md-slice","nextjournal.clerk.parser/md-slice",-2055840453),cljs.core.PersistentVector.EMPTY], 0));
});
nextjournal.clerk.parser.parse_markdown_string = (function nextjournal$clerk$parser$parse_markdown_string(p__69519,s){
var map__69520 = p__69519;
var map__69520__$1 = cljs.core.__destructure_map(map__69520);
var doc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69520__$1,new cljs.core.Keyword(null,"doc?","doc?",754571024));
var map__69521 = nextjournal.markdown.parse(s);
var map__69521__$1 = cljs.core.__destructure_map(map__69521);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69521__$1,new cljs.core.Keyword(null,"content","content",15833224));
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69521__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69521__$1,new cljs.core.Keyword(null,"title","title",636505583));
var G__69527 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("nextjournal.clerk.parser","md-slice","nextjournal.clerk.parser/md-slice",-2055840453),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),content], null);
var map__69530 = G__69527;
var map__69530__$1 = cljs.core.__destructure_map(map__69530);
var state = map__69530__$1;
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69530__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var md_slice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69530__$1,new cljs.core.Keyword("nextjournal.clerk.parser","md-slice","nextjournal.clerk.parser/md-slice",-2055840453));
var G__69527__$1 = G__69527;
while(true){
var map__69539 = G__69527__$1;
var map__69539__$1 = cljs.core.__destructure_map(map__69539);
var state__$1 = map__69539__$1;
var nodes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69539__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var md_slice__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69539__$1,new cljs.core.Keyword("nextjournal.clerk.parser","md-slice","nextjournal.clerk.parser/md-slice",-2055840453));
var temp__5755__auto__ = cljs.core.first(nodes__$1);
if((temp__5755__auto__ == null)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153),((function (G__69527__$1,temp__5755__auto__,map__69539,map__69539__$1,state__$1,nodes__$1,md_slice__$1,G__69527,map__69530,map__69530__$1,state,nodes,md_slice,map__69521,map__69521__$1,content,toc,title,map__69520,map__69520__$1,doc_QMARK_){
return (function (p1__69514_SHARP_){
var G__69541 = p1__69514_SHARP_;
if(cljs.core.seq(md_slice__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__69541,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"content","content",15833224),md_slice__$1], null)], null));
} else {
return G__69541;
}
});})(G__69527__$1,temp__5755__auto__,map__69539,map__69539__$1,state__$1,nodes__$1,md_slice__$1,G__69527,map__69530,map__69530__$1,state,nodes,md_slice,map__69521,map__69521__$1,content,toc,title,map__69520,map__69520__$1,doc_QMARK_))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"visibility","visibility",1338380893)], null)),(cljs.core.truth_(doc_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"toc","toc",2050089251),toc], null):null)], 0));
} else {
var node = temp__5755__auto__;
var G__69615 = ((nextjournal.clerk.parser.code_cell_QMARK_(node))?nextjournal.clerk.parser.parse_markdown_cell(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153),((function (G__69527__$1,node,temp__5755__auto__,map__69539,map__69539__$1,state__$1,nodes__$1,md_slice__$1,G__69527,map__69530,map__69530__$1,state,nodes,md_slice,map__69521,map__69521__$1,content,toc,title,map__69520,map__69520__$1,doc_QMARK_){
return (function (p1__69513_SHARP_){
var G__69548 = p1__69513_SHARP_;
if(cljs.core.seq(md_slice__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__69548,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"content","content",15833224),md_slice__$1], null)], null));
} else {
return G__69548;
}
});})(G__69527__$1,node,temp__5755__auto__,map__69539,map__69539__$1,state__$1,nodes__$1,md_slice__$1,G__69527,map__69530,map__69530__$1,state,nodes,md_slice,map__69521,map__69521__$1,content,toc,title,map__69520,map__69520__$1,doc_QMARK_))
)):(function (){var G__69552 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.rest);
if(cljs.core.truth_(doc_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__69552,new cljs.core.Keyword("nextjournal.clerk.parser","md-slice","nextjournal.clerk.parser/md-slice",-2055840453),cljs.core.conj,node);
} else {
return G__69552;
}
})());
G__69527__$1 = G__69615;
continue;
}
break;
}
});

//# sourceMappingURL=nextjournal.clerk.parser.js.map
