goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__66686){
var map__66688 = p__66686;
var map__66688__$1 = (((((!((map__66688 == null))))?(((((map__66688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66688):map__66688);
var type = map__66688__$1;
var type_name = (function (){var obj66692 = map__66688__$1;
if((!((obj66692 == null)))){
return (obj66692["name"]);
} else {
return undefined;
}
})();
return (function (p__66693){
var map__66694 = p__66693;
var map__66694__$1 = (((((!((map__66694 == null))))?(((((map__66694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66694):map__66694);
var context = map__66694__$1;
var pos = (function (){var obj66698 = map__66694__$1;
if((!((obj66698 == null)))){
return (obj66698["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj66699 = map__66694__$1;
if((!((obj66699 == null)))){
return (obj66699["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj66700 = map__66694__$1;
if((!((obj66700 == null)))){
return (obj66700["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj66701 = map__66694__$1;
if((!((obj66701 == null)))){
return (obj66701["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__66704 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__4251__auto__){
var G__66708 = (function (){var G__66709 = node;
var G__66709__$1 = (((G__66709 == null))?null:nextjournal.clojure_mode.node.down(G__66709));
var G__66709__$2 = (((G__66709__$1 == null))?null:nextjournal.clojure_mode.node.right(G__66709__$1));
if((G__66709__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__66709__$2);
}
})();
var fexpr__66707 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__66707.cljs$core$IFn$_invoke$arity$1 ? fexpr__66707.cljs$core$IFn$_invoke$arity$1(G__66708) : fexpr__66707.call(null,G__66708));
} else {
return and__4251__auto__;
}
})())){
return (G__66704 + (1));
} else {
return G__66704;
}
} else {
return (-1);

}
}
});
});
nextjournal.clojure_mode.extensions.formatting.props = module$node_modules$$codemirror$language$dist$index_cjs.indentNodeProp.add(nextjournal.clojure_mode.extensions.formatting.indent_node_props);
nextjournal.clojure_mode.extensions.formatting.get_indentation = (function nextjournal$clojure_mode$extensions$formatting$get_indentation(context,pos){
return module$node_modules$$codemirror$language$dist$index_cjs.getIndentation(context.state,pos);
});
nextjournal.clojure_mode.extensions.formatting.make_indent_context = (function nextjournal$clojure_mode$extensions$formatting$make_indent_context(state){
return (new module$node_modules$$codemirror$language$dist$index_cjs.IndentContext(state));
});
nextjournal.clojure_mode.extensions.formatting.indent_all = (function nextjournal$clojure_mode$extensions$formatting$indent_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,content,line_num){
var current_indent = (/^\s*/.exec(content)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(context,from),cljs.core.complement(cljs.core.neg_QMARK_));
if(cljs.core.truth_(indent)){
var G__66741 = cljs.core.compare(indent,current_indent);
switch (G__66741) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66741)].join('')));

}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.extensions.formatting.expected_space = (function nextjournal$clojure_mode$extensions$formatting$expected_space(n1,n2){
if(((nextjournal.clojure_mode.node.start_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.end_edge_type_QMARK_(n2)) || (nextjournal.clojure_mode.node.same_edge_type_QMARK_(n2)))))))){
return (0);
} else {
return (1);
}
});
nextjournal.clojure_mode.extensions.formatting.space_changes = (function nextjournal$clojure_mode$extensions$formatting$space_changes(state,from,to){
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66749_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__66749_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__66749_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__66749_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__66749_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__66752 = cljs.core.first(nodes);
var G__66752__$1 = (((G__66752 == null))?null:nextjournal.clojure_mode.node.end(G__66752));
if((G__66752__$1 == null)){
return null;
} else {
return (G__66752__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__66753){
var vec__66755 = p__66753;
var map__66760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66755,(0),null);
var map__66760__$1 = (((((!((map__66760 == null))))?(((((map__66760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66760):map__66760);
var n2 = (function (){var obj66776 = map__66760__$1;
if((!((obj66776 == null)))){
return (obj66776["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj66779 = map__66760__$1;
if((!((obj66779 == null)))){
return (obj66779["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj66781 = map__66760__$1;
if((!((obj66781 == null)))){
return (obj66781["to"]);
} else {
return undefined;
}
})();
var map__66761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66755,(1),null);
var map__66761__$1 = (((((!((map__66761 == null))))?(((((map__66761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66761):map__66761);
var n1 = (function (){var obj66785 = map__66761__$1;
if((!((obj66785 == null)))){
return (obj66785["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj66786 = map__66761__$1;
if((!((obj66786 == null)))){
return (obj66786["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj66787 = map__66761__$1;
if((!((obj66787 == null)))){
return (obj66787["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__66788 = cljs.core.compare(actual,expected);
switch (G__66788) {
case (0):
return out;

break;
case (1):
var Array66789 = out;
Array66789.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array66789;

break;
case (-1):
var Array66790 = out;
Array66790.push(({"from": end1, "insert": " "}));

return Array66790;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__66793_66888 = cljs.core.seq(items);
var chunk__66794_66889 = null;
var count__66795_66890 = (0);
var i__66796_66891 = (0);
while(true){
if((i__66796_66891 < count__66795_66890)){
var i_66892 = chunk__66794_66889.cljs$core$IIndexed$_nth$arity$2(null,i__66796_66891);
arr.push(i_66892);


var G__66893 = seq__66793_66888;
var G__66894 = chunk__66794_66889;
var G__66895 = count__66795_66890;
var G__66896 = (i__66796_66891 + (1));
seq__66793_66888 = G__66893;
chunk__66794_66889 = G__66894;
count__66795_66890 = G__66895;
i__66796_66891 = G__66896;
continue;
} else {
var temp__5753__auto___66897 = cljs.core.seq(seq__66793_66888);
if(temp__5753__auto___66897){
var seq__66793_66898__$1 = temp__5753__auto___66897;
if(cljs.core.chunked_seq_QMARK_(seq__66793_66898__$1)){
var c__4679__auto___66899 = cljs.core.chunk_first(seq__66793_66898__$1);
var G__66900 = cljs.core.chunk_rest(seq__66793_66898__$1);
var G__66901 = c__4679__auto___66899;
var G__66902 = cljs.core.count(c__4679__auto___66899);
var G__66903 = (0);
seq__66793_66888 = G__66900;
chunk__66794_66889 = G__66901;
count__66795_66890 = G__66902;
i__66796_66891 = G__66903;
continue;
} else {
var i_66904 = cljs.core.first(seq__66793_66898__$1);
arr.push(i_66904);


var G__66905 = cljs.core.next(seq__66793_66898__$1);
var G__66906 = null;
var G__66907 = (0);
var G__66908 = (0);
seq__66793_66888 = G__66905;
chunk__66794_66889 = G__66906;
count__66795_66890 = G__66907;
i__66796_66891 = G__66908;
continue;
}
} else {
}
}
break;
}

return arr;
});
/**
 * Returns mutated `changes` array
 */
nextjournal.clojure_mode.extensions.formatting.format_line = (function nextjournal$clojure_mode$extensions$formatting$format_line(state,indent_context,from,text,line_num,changes,format_spaces_QMARK_){
if((!((text == null)))){
} else {
throw (new Error("Assert failed: (some? text)"));
}

var current_indent = (/^\s*/.exec(text)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(indent_context,from),cljs.core.complement(cljs.core.neg_QMARK_));
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__66816 = cljs.core.compare(indent,current_indent);
switch (G__66816) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66816)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__66822 = changes;
var G__66822__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__66822,space_changes):G__66822);
if(cljs.core.truth_(indentation_change)){
var Array66823 = G__66822__$1;
Array66823.push(indentation_change);

return Array66823;
} else {
return G__66822__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__66826,changes,range){
var map__66829 = p__66826;
var map__66829__$1 = (((((!((map__66829 == null))))?(((((map__66829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66829):map__66829);
var line = map__66829__$1;
var from = (function (){var obj66836 = map__66829__$1;
if((!((obj66836 == null)))){
return (obj66836["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj66840 = map__66829__$1;
if((!((obj66840 == null)))){
return (obj66840["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj66842 = map__66829__$1;
if((!((obj66842 == null)))){
return (obj66842["number"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,number,changes,true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_all = (function nextjournal$clojure_mode$extensions$formatting$format_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,text,line_num){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,line_num,[],true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_transaction = (function nextjournal$clojure_mode$extensions$formatting$format_transaction(tr){
var origin = nextjournal.clojure_mode.util.get_user_event_annotation(tr);
var temp__5751__auto__ = (function (){var G__66854 = origin;
switch (G__66854) {
case "input":
case "input.type":
case "delete":
case "keyboardselection":
case "pointerselection":
case "select.pointer":
case "cut":
case "noformat":
case "evalregion":
return null;

break;
case "format-selections":
return nextjournal.clojure_mode.extensions.formatting.format_selection(tr.state);

break;
default:
var state = tr.state;
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.iter_changed_lines(tr,(function (line,changes){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,line.from,line.text,line.number,changes,true);
}));

}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var changes = temp__5751__auto__;
return tr.startState.update((function (){var obj66862 = changes;
var obj66863 = (((!((obj66862 == null))))?obj66862:({}));
(obj66863["filter"] = false);

return obj66863;
})());
} else {
return tr;
}
});
nextjournal.clojure_mode.extensions.formatting.format = (function nextjournal$clojure_mode$extensions$formatting$format(state){
if(nextjournal.clojure_mode.util.something_selected_QMARK_(state)){
return state.update(nextjournal.clojure_mode.extensions.formatting.format_selection(state));
} else {
return nextjournal.clojure_mode.extensions.formatting.format_all(state);
}
});
nextjournal.clojure_mode.extensions.formatting.prefix_all = (function nextjournal$clojure_mode$extensions$formatting$prefix_all(prefix,state){
return nextjournal.clojure_mode.util.update_lines(state,(function (from,_,___$1){
return ({"from": from, "insert": prefix});
}));
});
nextjournal.clojure_mode.extensions.formatting.ext_format_changed_lines = (function nextjournal$clojure_mode$extensions$formatting$ext_format_changed_lines(){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.transactionFilter.of(nextjournal.clojure_mode.extensions.formatting.format_transaction);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.formatting.js.map
