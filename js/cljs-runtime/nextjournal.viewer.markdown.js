goog.provide('nextjournal.viewer.markdown');
nextjournal.viewer.markdown.inspect_STAR_ = (function nextjournal$viewer$markdown$inspect_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___77681 = arguments.length;
var i__4865__auto___77682 = (0);
while(true){
if((i__4865__auto___77682 < len__4864__auto___77681)){
args__4870__auto__.push((arguments[i__4865__auto___77682]));

var G__77683 = (i__4865__auto___77682 + (1));
i__4865__auto___77682 = G__77683;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nextjournal.viewer.markdown.inspect_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nextjournal.viewer.markdown.inspect_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var i = (((typeof nextjournal !== 'undefined') && (typeof nextjournal.viewer !== 'undefined') && (typeof nextjournal.viewer.inspect !== 'undefined'))?(new cljs.core.Var((function (){
return nextjournal.viewer.inspect;
}),cljs.core.with_meta(new cljs.core.Symbol("nextjournal.viewer","inspect","nextjournal.viewer/inspect",-1133746572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(i,args);
}));

(nextjournal.viewer.markdown.inspect_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.viewer.markdown.inspect_STAR_.cljs$lang$applyTo = (function (seq77676){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77676));
}));

nextjournal.viewer.markdown.eval_form_STAR_ = (function nextjournal$viewer$markdown$eval_form_STAR_(f){
var ef = (((typeof nextjournal !== 'undefined') && (typeof nextjournal.viewer !== 'undefined') && (typeof nextjournal.viewer.notebook !== 'undefined') && (typeof nextjournal.viewer.notebook.eval_form !== 'undefined'))?(new cljs.core.Var((function (){
return nextjournal.viewer.notebook.eval_form;
}),cljs.core.with_meta(new cljs.core.Symbol("nextjournal.viewer.notebook","eval-form","nextjournal.viewer.notebook/eval-form",921296552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
return (ef.cljs$core$IFn$_invoke$arity$1 ? ef.cljs$core$IFn$_invoke$arity$1(f) : ef.call(null,f));
});
nextjournal.viewer.markdown.sidenote_click_handler = (function nextjournal$viewer$markdown$sidenote_click_handler(e){
if(cljs.core.truth_(e.target.classList.contains("sidenote-ref"))){
return e.target.classList.toggle("expanded");
} else {
return null;
}
});
nextjournal.viewer.markdown.code_viewer = (function nextjournal$viewer$markdown$code_viewer(node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-code.not-prose","div.viewer-code.not-prose",1657992558),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),nextjournal.markdown.transform.__GT_text(node)], null)], null)], null);
});
nextjournal.viewer.markdown.default_renderers = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(nextjournal.markdown.transform.default_hiccup_renderers,new cljs.core.Keyword(null,"doc","doc",1913296891),(function (ctx,p__77677){
var map__77678 = p__77677;
var map__77678__$1 = cljs.core.__destructure_map(map__77678);
var doc = map__77678__$1;
var sidenotes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77678__$1,new cljs.core.Keyword(null,"sidenotes?","sidenotes?",-1418896412));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sidenotes_QMARK_)?"contains-sidenotes":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),nextjournal.viewer.markdown.sidenote_click_handler], null)], null),ctx,doc);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142),(function (_ctx,node){
return nextjournal.viewer.markdown.code_viewer(node);
}),new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804),(function (ctx,p__77679){
var map__77680 = p__77679;
var map__77680__$1 = cljs.core.__destructure_map(map__77680);
var node = map__77680__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(attrs)], null)], null)], null),ctx,node);
}),new cljs.core.Keyword(null,"formula","formula",-1059725192),(function (_ctx,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$1(nextjournal.markdown.transform.__GT_text(node))], null)], null)], null);
}),new cljs.core.Keyword(null,"block-formula","block-formula",-1790528301),(function (_ctx,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.__GT_text(node),({"displayMode": true}))], null)], null)], null);
})], 0));
nextjournal.viewer.markdown.viewer = (function nextjournal$viewer$markdown$viewer(value){
if(cljs.core.truth_(value)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),nextjournal.markdown.__GT_hiccup.cljs$core$IFn$_invoke$arity$2(nextjournal.viewer.markdown.default_renderers,value),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238)], null);
} else {
return null;
}
});

//# sourceMappingURL=nextjournal.viewer.markdown.js.map
