goog.provide('sci.impl.analyzer');
goog.scope(function(){
  sci.impl.analyzer.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.analyzer.recur_target = (function sci$impl$analyzer$recur_target(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.with_recur_target = (function sci$impl$analyzer$with_recur_target(ctx,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),v);
});
sci.impl.analyzer.without_recur_target = (function sci$impl$analyzer$without_recur_target(ctx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),false);
});
sci.impl.analyzer.recur_target_QMARK_ = (function sci$impl$analyzer$recur_target_QMARK_(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"let*","let*",1920721458,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});




sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,expr) : sci.impl.analyzer.analyze.call(null,ctx__$1,expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),op)){
return expr;
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx__$1,op,true);
}catch (e73921){var _ = e73921;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)){
return expr;
} else {
var var_QMARK_ = sci.impl.utils.var_QMARK_(f);
var macro_var_QMARK_ = (function (){var and__4251__auto__ = var_QMARK_;
if(and__4251__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__4251__auto__;
}
})();
var needs_ctx_QMARK_ = (function (){var and__4251__auto__ = var_QMARK_;
if(and__4251__auto__){
return sci.impl.vars.needs_ctx_QMARK_(f);
} else {
return and__4251__auto__;
}
})();
var f__$1 = (cljs.core.truth_(macro_var_QMARK_)?cljs.core.deref(f):f);
if(cljs.core.truth_((function (){var or__4253__auto__ = macro_var_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.utils.macro_QMARK_(f__$1);
}
})())){
if(cljs.core.truth_(needs_ctx_QMARK_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),ctx__$1,cljs.core.rest(expr));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),cljs.core.rest(expr));
}
} else {
return expr;
}
}

}
}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.analyze_children_tail = (function sci$impl$analyzer$analyze_children_tail(ctx,children){
var rt = sci.impl.analyzer.recur_target(ctx);
var non_tail_ctx = sci.impl.analyzer.without_recur_target(ctx);
var analyzed_children_non_tail = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__73924_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(non_tail_ctx,p1__73924_SHARP_) : sci.impl.analyzer.analyze.call(null,non_tail_ctx,p1__73924_SHARP_));
}),cljs.core.butlast(children));
var ret_child = (function (){var G__73928 = sci.impl.analyzer.with_recur_target(ctx,rt);
var G__73929 = cljs.core.last(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__73928,G__73929) : sci.impl.analyzer.analyze.call(null,G__73928,G__73929));
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(analyzed_children_non_tail,ret_child);
});
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__73930 = cljs.core.count(children);
switch (G__73930) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(arg0,ctx__$1,bindings);

return sci.impl.types.eval(arg1,ctx__$1,bindings);
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(arg0,ctx__$1,bindings);

sci.impl.types.eval(arg1,ctx__$1,bindings);

return sci.impl.types.eval(arg2,ctx__$1,bindings);
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_do(ctx__$1,bindings,analyzed_children__$1);
}),null);

}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__73934 = cljs.core.count(children);
switch (G__73934) {
case (0):
return null;

break;
case (1):
var G__73935 = ctx;
var G__73936 = cljs.core.first(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__73935,G__73936) : sci.impl.analyzer.analyze.call(null,G__73935,G__73936));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.types.eval(arg1,ctx__$1,bindings);
}
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return sci.impl.types.eval(arg2,ctx__$1,bindings);
}
}
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return sci.impl.types.eval(arg3,ctx__$1,bindings);
}
}
}
}),null);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
return sci.impl.types.eval(arg4,ctx__$1,bindings);
}
}
}
}
}),null);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
return sci.impl.types.eval(arg5,ctx__$1,bindings);
}
}
}
}
}
}),null);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
return sci.impl.types.eval(arg6,ctx__$1,bindings);
}
}
}
}
}
}
}),null);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
return sci.impl.types.eval(arg7,ctx__$1,bindings);
}
}
}
}
}
}
}
}),null);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
return sci.impl.types.eval(arg8,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}),null);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
return sci.impl.types.eval(arg9,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}),null);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
return sci.impl.types.eval(arg10,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
return sci.impl.types.eval(arg11,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
return sci.impl.types.eval(arg12,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
return sci.impl.types.eval(arg13,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
return sci.impl.types.eval(arg14,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
return sci.impl.types.eval(arg15,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
var or__4253__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$15)){
return or__4253__auto____$15;
} else {
return sci.impl.types.eval(arg16,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
var or__4253__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$15)){
return or__4253__auto____$15;
} else {
var or__4253__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$16)){
return or__4253__auto____$16;
} else {
return sci.impl.types.eval(arg17,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
var or__4253__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$15)){
return or__4253__auto____$15;
} else {
var or__4253__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$16)){
return or__4253__auto____$16;
} else {
var or__4253__auto____$17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$17)){
return or__4253__auto____$17;
} else {
return sci.impl.types.eval(arg18,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_or(ctx__$1,bindings,analyzed_children__$1);
}),null);

}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__73953 = cljs.core.count(children);
switch (G__73953) {
case (0):
return null;

break;
case (1):
var G__73954 = ctx;
var G__73955 = cljs.core.first(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__73954,G__73955) : sci.impl.analyzer.analyze.call(null,G__73954,G__73955));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
return sci.impl.types.eval(arg1,ctx__$1,bindings);
} else {
return and__4251__auto__;
}
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
return sci.impl.types.eval(arg2,ctx__$1,bindings);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
return sci.impl.types.eval(arg3,ctx__$1,bindings);
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
return sci.impl.types.eval(arg4,ctx__$1,bindings);
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
return sci.impl.types.eval(arg5,ctx__$1,bindings);
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
return sci.impl.types.eval(arg6,ctx__$1,bindings);
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
return sci.impl.types.eval(arg7,ctx__$1,bindings);
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
return sci.impl.types.eval(arg8,ctx__$1,bindings);
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
return sci.impl.types.eval(arg9,ctx__$1,bindings);
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
return sci.impl.types.eval(arg10,ctx__$1,bindings);
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
return sci.impl.types.eval(arg11,ctx__$1,bindings);
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
return sci.impl.types.eval(arg12,ctx__$1,bindings);
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
return sci.impl.types.eval(arg13,ctx__$1,bindings);
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$13)){
return sci.impl.types.eval(arg14,ctx__$1,bindings);
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$14)){
return sci.impl.types.eval(arg15,ctx__$1,bindings);
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$14)){
var and__4251__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$15)){
return sci.impl.types.eval(arg16,ctx__$1,bindings);
} else {
return and__4251__auto____$15;
}
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$14)){
var and__4251__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$15)){
var and__4251__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$16)){
return sci.impl.types.eval(arg17,ctx__$1,bindings);
} else {
return and__4251__auto____$16;
}
} else {
return and__4251__auto____$15;
}
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$14)){
var and__4251__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$15)){
var and__4251__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$16)){
var and__4251__auto____$17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$17)){
return sci.impl.types.eval(arg18,ctx__$1,bindings);
} else {
return and__4251__auto____$17;
}
} else {
return and__4251__auto____$16;
}
} else {
return and__4251__auto____$15;
}
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_and(ctx__$1,bindings,analyzed_children__$1);
}),null);

}
});
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(ctx,expr,analyzed_children){
if(cljs.core.truth_(sci.impl.analyzer.recur_target_QMARK_(ctx))){
} else {
sci.impl.analyzer.throw_error_with_location("Can only recur from tail position",expr);
}

var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctx);
var G__73991 = cljs.core.count(analyzed_children);
switch (G__73991) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
(bindings[(0)] = eval_0);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var param17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
var eval_17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

(bindings[(17)] = eval_17);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var param17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
var param18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
var eval_17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
var eval_18 = sci.impl.types.eval(arg18,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

(bindings[(17)] = eval_17);

(bindings[(18)] = eval_18);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73991)].join('')));

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74019_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__74019_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__74019_SHARP_));
}),children);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.self_ref_idx = self_ref_idx;
this.iden__GT_invoke_idx = iden__GT_invoke_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k74022,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__74030 = k74022;
var G__74030__$1 = (((G__74030 instanceof cljs.core.Keyword))?G__74030.fqn:null);
switch (G__74030__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "self-ref-idx":
return self__.self_ref_idx;

break;
case "iden->invoke-idx":
return self__.iden__GT_invoke_idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74022,else__4505__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__74031){
var vec__74032 = p__74031;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74032,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74032,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74021){
var self__ = this;
var G__74021__$1 = this;
return (new cljs.core.RecordIter((0),G__74021__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74023,other74024){
var self__ = this;
var this74023__$1 = this;
return (((!((other74024 == null)))) && ((((this74023__$1.constructor === other74024.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74023__$1.params,other74024.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74023__$1.body,other74024.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74023__$1.fixed_arity,other74024.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74023__$1.var_arg_name,other74024.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74023__$1.self_ref_idx,other74024.self_ref_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74023__$1.iden__GT_invoke_idx,other74024.iden__GT_invoke_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74023__$1.__extmap,other74024.__extmap)))))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k74022){
var self__ = this;
var this__4509__auto____$1 = this;
var G__74045 = k74022;
var G__74045__$1 = (((G__74045 instanceof cljs.core.Keyword))?G__74045.fqn:null);
switch (G__74045__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "self-ref-idx":
case "iden->invoke-idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74022);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__74021){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__74047 = cljs.core.keyword_identical_QMARK_;
var expr__74048 = k__4511__auto__;
if(cljs.core.truth_((pred__74047.cljs$core$IFn$_invoke$arity$2 ? pred__74047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__74048) : pred__74047.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__74048)))){
return (new sci.impl.analyzer.FnBody(G__74021,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74047.cljs$core$IFn$_invoke$arity$2 ? pred__74047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__74048) : pred__74047.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__74048)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__74021,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74047.cljs$core$IFn$_invoke$arity$2 ? pred__74047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__74048) : pred__74047.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__74048)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__74021,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74047.cljs$core$IFn$_invoke$arity$2 ? pred__74047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__74048) : pred__74047.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__74048)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__74021,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74047.cljs$core$IFn$_invoke$arity$2 ? pred__74047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__74048) : pred__74047.call(null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__74048)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__74021,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74047.cljs$core$IFn$_invoke$arity$2 ? pred__74047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__74048) : pred__74047.call(null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__74048)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,G__74021,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__74021),null));
}
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__74021){
var self__ = this;
var this__4501__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,G__74021,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"self-ref-idx","self-ref-idx",255993715,null),new cljs.core.Symbol(null,"iden->invoke-idx","iden->invoke-idx",-157095499,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__74029){
var extmap__4542__auto__ = (function (){var G__74054 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74029,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], 0));
if(cljs.core.record_QMARK_(G__74029)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74054);
} else {
return G__74054;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__74029),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__74029),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__74029),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__74029),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(G__74029),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(G__74029),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__74057,p__74058,macro_QMARK_,fn_name,fn_id){
var map__74059 = p__74057;
var map__74059__$1 = cljs.core.__destructure_map(map__74059);
var ctx = map__74059__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74059__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__74060 = p__74058;
var seq__74061 = cljs.core.seq(vec__74060);
var first__74062 = cljs.core.first(seq__74061);
var seq__74061__$1 = cljs.core.next(seq__74061);
var binding_vector = first__74062;
var body_exprs = seq__74061__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__4253__auto__ = conds;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__74066 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__74066__$1 = cljs.core.__destructure_map(map__74066);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74066__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74066__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var vec__74067 = cljs.core.split_with((function (p1__74055_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__74055_SHARP_);
}),params);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74067,(0),null);
var vec__74070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74067,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74070,(0),null);
var var_arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74070,(1),null);
var fixed_args__$1 = cljs.core.vec(fixed_args);
var fixed_arity = cljs.core.count(fixed_args__$1);
var param_names = (function (){var G__74079 = fixed_args__$1;
if(cljs.core.truth_(var_arg_name)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74079,var_arg_name);
} else {
return G__74079;
}
})();
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"params","params",710516235),param_names);
var param_count = cljs.core.count(param_names);
var param_idens = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(param_count,cljs.core.gensym);
var param_bindings = cljs.core.zipmap(param_names,param_idens);
var iden__GT_invoke_idx = cljs.core.zipmap(param_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var bindings = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),param_names);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings,param_bindings], 0)));
var ctx__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx);
var ctx__$4 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$3,new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.conj,(function (){var or__4253__auto__ = var_arg_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return fixed_arity;
}
})());
var ___$1 = cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4),cljs.core.assoc_in(cljs.core._deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)),cljs.core.zipmap(param_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
var self_ref_idx = (cljs.core.truth_(fn_name)?(function (){var G__74081 = ctx__$4;
var G__74082 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var G__74083 = fn_id;
return (sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3(G__74081,G__74082,G__74083) : sci.impl.analyzer.update_parents.call(null,G__74081,G__74082,G__74083));
})():null);
var body__$1 = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$4,true),fn_expr,body);
var iden__GT_invoke_idx__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var G__74084 = sci.impl.analyzer.__GT_FnBody(params,body__$1,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx__$1);
if(cljs.core.truth_(var_arg_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74084,new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228),cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx__$1,cljs.core.last(param_idens)));
} else {
return G__74084;
}
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__74089 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__74090 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__74089,G__74090) : sci.impl.analyzer.analyze.call(null,G__74089,G__74090));
})(),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.analyze_fn_STAR_ = (function sci$impl$analyzer$analyze_fn_STAR_(ctx,p__74091,macro_QMARK_){
var vec__74093 = p__74091;
var seq__74094 = cljs.core.seq(vec__74093);
var first__74095 = cljs.core.first(seq__74094);
var seq__74094__$1 = cljs.core.next(seq__74094);
var _fn = first__74095;
var first__74095__$1 = cljs.core.first(seq__74094__$1);
var seq__74094__$2 = cljs.core.next(seq__74094__$1);
var name_QMARK_ = first__74095__$1;
var body = seq__74094__$2;
var fn_expr = vec__74093;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var fn_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parents = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY)(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$1),fn_id);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891),parents);
var ctx__$3 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),fn_id):ctx__$2);
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$3);
var bound_idens = cljs.core.set(cljs.core.vals(bindings));
var ctx__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$3,new cljs.core.Keyword(null,"outer-idens","outer-idens",1197381241),bound_idens);
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__74099,body__$2){
var map__74100 = p__74099;
var map__74100__$1 = cljs.core.__destructure_map(map__74100);
var acc = map__74100__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74100__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74100__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var orig_body = body__$2;
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$4,body__$2,macro_QMARK_,fn_name,fn_id);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(body__$3);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(body__$3);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__4251__auto__ = var_arg_name;
if(cljs.core.truth_(and__4251__auto__)){
return min_varargs;
} else {
return and__4251__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(var_arg_name);
if(and__4251__auto__){
var and__4251__auto____$1 = min_varargs;
if(cljs.core.truth_(and__4251__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__4336__auto__ = fixed_arity;
var y__4337__auto__ = max_fixed;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(body__$3,new cljs.core.Keyword(null,"orig","orig",-1678309870),orig_body)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var cb_idens_by_arity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(closure_bindings),parents);
var cb_idens = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.vals(cb_idens_by_arity)));
var self_ref_QMARK_ = (cljs.core.truth_(fn_name)?cljs.core.contains_QMARK_(cb_idens,fn_id):null);
var closed_over_idens = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(bound_idens,cljs.core.keys(cb_idens));
var iden__GT_invoke_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(closure_bindings),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(parents),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var closed_over_iden__GT_binding_idx = (cljs.core.truth_(iden__GT_invoke_idx)?cljs.core.zipmap(closed_over_idens,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,closed_over_idens)):null);
var closed_over_cnt = cljs.core.count(closed_over_idens);
var iden__GT_enclosed_idx = cljs.core.zipmap(closed_over_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$1(closed_over_cnt));
var iden__GT_enclosed_idx__$1 = (cljs.core.truth_(fn_name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_enclosed_idx,fn_id,closed_over_cnt):iden__GT_enclosed_idx);
var enclosed_array_fn = (((function (){var or__4253__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.seq(closed_over_iden__GT_binding_idx);
}
})())?(function (){var enclosed_array_cnt = (function (){var G__74107 = closed_over_cnt;
if(cljs.core.truth_(fn_name)){
return (G__74107 + (1));
} else {
return G__74107;
}
})();
var binding__GT_enclosed = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,iden);
if(cljs.core.truth_(temp__5753__auto__)){
var binding_idx = temp__5753__auto__;
var enclosed_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_enclosed_idx__$1,iden);
var G__74108 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__74108[(0)] = binding_idx);

(G__74108[(1)] = enclosed_idx);

return G__74108;
} else {
return null;
}
}),closed_over_idens));
return (function (bindings__$1){
var a__4738__auto__ = binding__GT_enclosed;
var l__4739__auto__ = a__4738__auto__.length;
var idx = (0);
var ret = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(enclosed_array_cnt);
while(true){
if((idx < l__4739__auto__)){
var G__76383 = (idx + (1));
var G__76384 = (function (){var idxs = (binding__GT_enclosed[idx]);
var binding_idx = (idxs[(0)]);
var binding_val = (bindings__$1[binding_idx]);
var enclosed_idx = (idxs[(1)]);
(ret[enclosed_idx] = binding_val);

return ret;
})();
idx = G__76383;
ret = G__76384;
continue;
} else {
return ret;
}
break;
}
});
})():cljs.core.constantly(null));
var bodies__$1 = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (body__$2){
var iden__GT_invocation_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(body__$2);
var invocation_self_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(body__$2);
var enclosed__GT_invocation = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5753__auto__ = (iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1 ? iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_invocation_idx.call(null,iden));
if(cljs.core.truth_(temp__5753__auto__)){
var invocation_idx = temp__5753__auto__;
var G__74114 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__74114[(0)] = (iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1 ? iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_enclosed_idx__$1.call(null,iden)));

(G__74114[(1)] = invocation_idx);

return G__74114;
} else {
return null;
}
}),closed_over_idens));
var invoc_size = cljs.core.count(iden__GT_invocation_idx);
var copy_enclosed__GT_invocation = (((enclosed__GT_invocation.length > (0)))?(function (enclosed_array,invoc_array){
var a__4738__auto__ = enclosed__GT_invocation;
var l__4739__auto__ = a__4738__auto__.length;
var idx = (0);
var ret = invoc_array;
while(true){
if((idx < l__4739__auto__)){
var G__76387 = (idx + (1));
var G__76388 = (function (){var idxs = (enclosed__GT_invocation[idx]);
var enclosed_idx = (idxs[(0)]);
var enclosed_val = (enclosed_array[enclosed_idx]);
var invoc_idx = (idxs[(1)]);
(ret[invoc_idx] = enclosed_val);

return ret;
})();
idx = G__76387;
ret = G__76388;
continue;
} else {
return ret;
}
break;
}
}):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(body__$2,new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058),invoc_size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invocation-self-idx","invocation-self-idx",-1258983407),invocation_self_idx,new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729),copy_enclosed__GT_invocation], 0));
}),bodies__$1);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(fn_expr),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"column","column",2078222095)], 0));
var ana_fn_meta = ((cljs.core.seq(fn_meta))?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$4,fn_meta) : sci.impl.analyzer.analyze.call(null,ctx__$4,fn_meta)):null);
var struct = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),bodies__$2,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","self-ref?","sci.impl/self-ref?",-276538273),self_ref_QMARK_,new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),ana_fn_meta,new cljs.core.Keyword("sci.impl","bindings-fn","sci.impl/bindings-fn",-992456394),enclosed_array_fn], null);
return struct;
});
sci.impl.analyzer.fn_ctx_fn = (function sci$impl$analyzer$fn_ctx_fn(_ctx,struct,fn_meta){
var fn_name = new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569).cljs$core$IFn$_invoke$arity$1(struct);
var fn_bodies = new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661).cljs$core$IFn$_invoke$arity$1(struct);
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(struct);
var single_arity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies)))?cljs.core.first(fn_bodies):null);
var bindings_fn = new cljs.core.Keyword("sci.impl","bindings-fn","sci.impl/bindings-fn",-992456394).cljs$core$IFn$_invoke$arity$1(struct);
var self_ref_QMARK_ = new cljs.core.Keyword("sci.impl","self-ref?","sci.impl/self-ref?",-276538273).cljs$core$IFn$_invoke$arity$1(struct);
if(cljs.core.truth_(fn_meta)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var fn_meta__$1 = sci.impl.types.eval(fn_meta,ctx,bindings);
var f = sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$1);
}),null);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn);
}),null);
}
});
sci.impl.analyzer.analyze_fn = (function sci$impl$analyzer$analyze_fn(ctx,fn_expr,macro_QMARK_){
var struct = sci.impl.analyzer.analyze_fn_STAR_(ctx,fn_expr,macro_QMARK_);
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(struct);
return sci.impl.analyzer.fn_ctx_fn(ctx,struct,fn_meta);
});
/**
 * :syms = closed over values
 */
sci.impl.analyzer.update_parents = (function sci$impl$analyzer$update_parents(ctx,closure_bindings,ob){
var parents = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx);
var new_cb = cljs.core._vreset_BANG_(closure_bindings,(function (cb){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762)),(function (iden__GT_invoke_idx){
if(cljs.core.contains_QMARK_(iden__GT_invoke_idx,ob)){
return iden__GT_invoke_idx;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,ob,cljs.core.count(iden__GT_invoke_idx));
}
}));
})(cljs.core._deref(closure_bindings)));
var closure_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ob], 0)));
return closure_idx;
});
sci.impl.analyzer.analyze_let_STAR_ = (function sci$impl$analyzer$analyze_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
var rt = sci.impl.analyzer.recur_target(ctx);
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var stack = sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(expr),true);
var vec__74120 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__74123,p__74124){
var vec__74125 = p__74123;
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74125,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74125,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74125,(2),null);
var vec__74128 = p__74124;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74128,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74128,(1),null);
var m = cljs.core.meta(binding_value);
var t = (cljs.core.truth_(m)?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(binding_name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):binding_name);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$2,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$2,binding_value));
var new_iden = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idx = sci.impl.analyzer.update_parents(ctx__$2,cb,new_iden);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var iden__GT_invoke_idx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,new_iden,idx);
var ctx__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx__$3,new cljs.core.Keyword(null,"bindings","bindings",1271397192),(function (p1__74119_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__74119_SHARP_,binding_name__$1),binding_name__$1,new_iden);
})),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(idens,new_iden)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74120,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74120,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74120,(2),null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$2,rt),expr,exprs);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idxs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,idens);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$3,bindings){
return sci.impl.evaluator.eval_let(ctx__$3,bindings,new_let_bindings,body,idxs);
}),stack);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.analyze_let = (function sci$impl$analyzer$analyze_let(ctx,p__74132){
var vec__74133 = p__74132;
var seq__74134 = cljs.core.seq(vec__74133);
var first__74135 = cljs.core.first(seq__74134);
var seq__74134__$1 = cljs.core.next(seq__74134);
var _let = first__74135;
var first__74135__$1 = cljs.core.first(seq__74134__$1);
var seq__74134__$2 = cljs.core.next(seq__74134__$1);
var let_bindings = first__74135__$1;
var exprs = seq__74134__$2;
var expr = vec__74133;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.init_var_BANG_ = (function sci$impl$analyzer$init_var_BANG_(ctx,name,expr){
var cnn_76412 = sci.impl.utils.current_ns_name();
var env_76413 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_76414 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_76413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_76412], null));
var refers_76415 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_76414);
var the_current_ns_76416__$1 = (function (){var temp__5751__auto__ = (function (){var and__4251__auto__ = refers_76415;
if(cljs.core.truth_(and__4251__auto__)){
return refers_76415.get(name);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_76412)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_76414,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns_76414,name,(function (){var G__74136 = (new sci.lang.Var(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_76412),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0)),false,false));
G__74136.sci$impl$vars$IVar$unbind$arity$1(null);

return G__74136;
})());
} else {
return the_current_ns_76414;
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_76413,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_76412,the_current_ns_76416__$1);
}));

return null;
});
sci.impl.analyzer.analyze_def = (function sci$impl$analyzer$analyze_def(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__74137 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74137,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74137,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74137,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74137,(3),null);
sci.impl.analyzer.init_var_BANG_(ctx__$1,var_name,expr);

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?sci.impl.utils.var_unbound:(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,init) : sci.impl.analyzer.analyze.call(null,ctx__$1,init)));
var m = cljs.core.meta(var_name);
var m_needs_eval_QMARK_ = m;
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns));
var m__$2 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$1);
var m__$3 = (cljs.core.truth_(m_needs_eval_QMARK_)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m__$2) : sci.impl.analyzer.analyze.call(null,ctx__$1,m__$2)):sci.impl.types.__GT_constant(m__$2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_def(ctx__$2,bindings,var_name,init__$1,m__$3);
}),null);
});
sci.impl.analyzer.analyze_defn = (function sci$impl$analyzer$analyze_defn(ctx,p__74140){
var vec__74141 = p__74140;
var seq__74142 = cljs.core.seq(vec__74141);
var first__74143 = cljs.core.first(seq__74142);
var seq__74142__$1 = cljs.core.next(seq__74142);
var op = first__74143;
var first__74143__$1 = cljs.core.first(seq__74142__$1);
var seq__74142__$2 = cljs.core.next(seq__74142__$1);
var fn_name = first__74143__$1;
var body = seq__74142__$2;
var expr = vec__74141;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

sci.impl.analyzer.init_var_BANG_(ctx,fn_name,expr);

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__74144 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74144,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74144,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5753__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5753__auto__)){
var ds = temp__5753__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5753__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var vec__74147 = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?(function (){var lb = cljs.core.last(body__$1);
if(cljs.core.map_QMARK_(lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast(body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74147,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74147,(1),null);
var expr_loc = cljs.core.meta(expr);
var meta_map__$1 = (function (){var G__74150 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(fn_name),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(expr_loc)),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(expr_loc));
if(cljs.core.truth_(meta_map)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__74150,meta_map], 0));
} else {
return G__74150;
}
})();
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_map__$1,meta_map2], 0)):meta_map__$1);
var fn_body = cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$2);
var f = sci.impl.analyzer.analyze_fn_STAR_(ctx,fn_body,macro_QMARK_);
var arglists = (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f)),null,(1),null)),(2),null));
var meta_map__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$2,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var meta_map__$4 = (function (){var G__74151 = meta_map__$3;
var G__74151__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74151,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__74151);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74151__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__74151__$1;
}
})();
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","defn","sci.impl/defn",1087257818),true], 0));
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(f__$1);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,f__$1,fn_meta);
var f__$2 = ctxfn;
var meta_map__$5 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,meta_map__$4) : sci.impl.analyzer.analyze.call(null,ctx,meta_map__$4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,fn_name,f__$2,meta_map__$5);
}),null);
});
sci.impl.analyzer.analyze_loop = (function sci$impl$analyzer$analyze_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__74152 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),cljs.core.gensym);
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74152,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74152,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
var ctx__$1 = sci.impl.analyzer.with_recur_target(ctx,true);
var ana = sci.impl.analyzer.return_do(ctx__$1,expr,body);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.types.eval(ana,ctx__$2,bindings);
}),null,null));
}),null);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0));
var G__74155 = cljs.core.count(children);
switch (G__74155) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.types.eval(condition,ctx__$1,bindings))){
return sci.impl.types.eval(then,ctx__$1,bindings);
} else {
return null;
}
}),stack);

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.types.eval(condition,ctx__$1,bindings))){
return sci.impl.types.eval(then,ctx__$1,bindings);
} else {
return sci.impl.types.eval(else$,ctx__$1,bindings);
}
}),stack);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case = (function sci$impl$analyzer$analyze_case(ctx,expr){
var ctx_wo_rt = sci.impl.analyzer.without_recur_target(ctx);
var case_val = (function (){var G__74159 = ctx_wo_rt;
var G__74160 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__74159,G__74160) : sci.impl.analyzer.analyze.call(null,G__74159,G__74160));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__74156 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__74161 = ctx;
var G__74162 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__74161,G__74162) : sci.impl.analyzer.analyze.call(null,G__74161,G__74162));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74156,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74156,(1),null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__74166 = cases__$1;
var seq__74167 = cljs.core.seq(vec__74166);
var first__74168 = cljs.core.first(seq__74167);
var seq__74167__$1 = cljs.core.next(seq__74167);
var k = first__74168;
var first__74168__$1 = cljs.core.first(seq__74167__$1);
var seq__74167__$2 = cljs.core.next(seq__74167__$1);
var v = first__74168__$1;
var cases__$2 = seq__74167__$2;
if(cljs.core.seq_QMARK_(k)){
var G__76440 = cases__$2;
var G__76441 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__74166,seq__74167,first__74168,seq__74167__$1,k,first__74168__$1,seq__74167__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__74156,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__74166,seq__74167,first__74168,seq__74167__$1,k,first__74168__$1,seq__74167__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__74156,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__76440;
ret_map = G__76441;
continue;
} else {
var G__76442 = cases__$2;
var G__76443 = assoc_new(ret_map,k,v);
cases__$1 = G__76442;
ret_map = G__76443;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5(ctx__$1,bindings,case_map,case_val,case_default);
}),null):sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,case_map,case_val);
}),null));
return f;
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var body = cljs.core.next(expr);
var stack = sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(expr),true);
var vec__74169 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__76446 = exprs__$1;
var G__76447 = body_exprs;
var G__76448 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__76449 = finally_expr;
exprs = G__76446;
body_exprs = G__76447;
catch_exprs = G__76448;
finally_expr = G__76449;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__76451 = exprs__$1;
var G__76452 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__76453 = catch_exprs;
var G__76454 = finally_expr;
exprs = G__76451;
body_exprs = G__76452;
catch_exprs = G__76453;
finally_expr = G__76454;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74169,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74169,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74169,(2),null);
var body__$1 = (function (){var G__74172 = ctx__$1;
var G__74173 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__74172,G__74173) : sci.impl.analyzer.analyze.call(null,G__74172,G__74173));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__74176 = c;
var seq__74177 = cljs.core.seq(vec__74176);
var first__74178 = cljs.core.first(seq__74177);
var seq__74177__$1 = cljs.core.next(seq__74177);
var _ = first__74178;
var first__74178__$1 = cljs.core.first(seq__74177__$1);
var seq__74177__$2 = cljs.core.next(seq__74177__$1);
var ex = first__74178__$1;
var first__74178__$2 = cljs.core.first(seq__74177__$2);
var seq__74177__$3 = cljs.core.next(seq__74177__$2);
var binding = first__74178__$2;
var body__$2 = seq__74177__$3;
var temp__5751__auto__ = (function (){var G__74179 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__74179)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__74179)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__74179)){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,ex) : sci.impl.analyzer.analyze.call(null,ctx__$1,ex));

}
}
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var clazz = temp__5751__auto__;
var ex_iden = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var ex_idx = sci.impl.analyzer.update_parents(ctx__$1,closure_bindings,ex_iden);
var ctx__$2 = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(function (bindings){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bindings,binding),binding,ex_iden);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),ex_iden], null),ex_idx);
var analyzed_body = (function (){var G__74180 = ctx__$2;
var G__74181 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__74180,G__74181) : sci.impl.analyzer.analyze.call(null,G__74180,G__74181));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805),ex_idx,new cljs.core.Keyword(null,"body","body",-2049205669),analyzed_body,new cljs.core.Keyword(null,"ex","ex",-1413771341),ex], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var sci_error = (function (){var fst = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(catches__$1)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(catches__$1,(0)):null);
var ex = new cljs.core.Keyword(null,"ex","ex",-1413771341).cljs$core$IFn$_invoke$arity$1(fst);
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),ex);
if(and__4251__auto__){
var G__74182 = ex;
var G__74182__$1 = (((G__74182 == null))?null:cljs.core.meta(G__74182));
if((G__74182__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci","error","sci/error",-979082803).cljs$core$IFn$_invoke$arity$1(G__74182__$1);
}
} else {
return and__4251__auto__;
}
})();
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__74183 = ctx__$1;
var G__74184 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__74183,G__74184) : sci.impl.analyzer.analyze.call(null,G__74183,G__74184));
})():null);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_try(ctx__$2,bindings,body__$1,catches__$1,finally$__$1,sci_error);
}),stack);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__74185){
var vec__74186 = p__74185;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74186,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74186,(1),null);
var expr = vec__74186;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Too many arguments to throw",expr);
}

var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var ana = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,ex) : sci.impl.analyzer.analyze.call(null,ctx__$1,ex));
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx__$2,bindings,sci.impl.types.eval(ana,ctx__$2,bindings),this$);
}),stack);
});
sci.impl.analyzer.analyze_dot = (function sci$impl$analyzer$analyze_dot(ctx,p__74189){
var vec__74190 = p__74189;
var seq__74191 = cljs.core.seq(vec__74190);
var first__74192 = cljs.core.first(seq__74191);
var seq__74191__$1 = cljs.core.next(seq__74191);
var _dot = first__74192;
var first__74192__$1 = cljs.core.first(seq__74191__$1);
var seq__74191__$2 = cljs.core.next(seq__74191__$1);
var instance_expr = first__74192__$1;
var first__74192__$2 = cljs.core.first(seq__74191__$2);
var seq__74191__$3 = cljs.core.next(seq__74191__$2);
var method_expr = first__74192__$2;
var args = seq__74191__$3;
var expr = vec__74190;
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__74193 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__74194 = cljs.core.seq(vec__74193);
var first__74195 = cljs.core.first(seq__74194);
var seq__74194__$1 = cljs.core.next(seq__74194);
var method_expr__$1 = first__74195;
var args__$1 = seq__74194__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx__$1,instance_expr));
var method_name = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx__$1,args__$1):null);
var res = (function (){var field_access = clojure.string.starts_with_QMARK_(method_name,"-");
var meth_name = ((field_access)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1)):method_name);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var allowed_QMARK_ = (method_expr__$1 === sci.impl.utils.allowed_append);
return cljs.core.with_meta(sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_instance_method_invocation(ctx__$2,bindings,instance_expr__$1,meth_name,field_access,args__$2,allowed_QMARK_);
}),stack),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719),instance_expr__$1,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667),method_name], null));
})();
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__74196){
var vec__74197 = p__74196;
var seq__74198 = cljs.core.seq(vec__74197);
var first__74199 = cljs.core.first(seq__74198);
var seq__74198__$1 = cljs.core.next(seq__74198);
var method_name = first__74199;
var first__74199__$1 = cljs.core.first(seq__74198__$1);
var seq__74198__$2 = cljs.core.next(seq__74198__$1);
var obj = first__74199__$1;
var args = seq__74198__$2;
var expr = vec__74197;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__74213){
var vec__74215 = p__74213;
var seq__74216 = cljs.core.seq(vec__74215);
var first__74217 = cljs.core.first(seq__74216);
var seq__74216__$1 = cljs.core.next(seq__74216);
var _new = first__74217;
var first__74217__$1 = cljs.core.first(seq__74216__$1);
var seq__74216__$2 = cljs.core.next(seq__74216__$1);
var class_sym = first__74217__$1;
var args = seq__74216__$2;
var expr = vec__74215;
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
if((class_sym instanceof cljs.core.Symbol)){
var temp__5751__auto__ = (function (){var or__4253__auto__ = (function (){var temp__5753__auto__ = (function (){var temp__5753__auto__ = sci.impl.interop.resolve_class_opts(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5753__auto__)){
var opts = temp__5753__auto__;
var or__4253__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var clazz = temp__5753__auto__;
return clazz;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx__$1,class_sym,false);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var class$ = temp__5751__auto__;
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
var var_QMARK_ = sci.impl.utils.var_QMARK_(class$);
var maybe_var = ((var_QMARK_)?class$:null);
var maybe_record = ((var_QMARK_)?cljs.core.deref(maybe_var):(((class$ instanceof cljs.core.Symbol))?class$:null));
var maybe_record_constructor = (cljs.core.truth_(maybe_record)?new cljs.core.Keyword("sci.impl","constructor","sci.impl/constructor",1320345666).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(maybe_record)):null);
if(cljs.core.truth_(maybe_record_constructor)){
var G__74225 = ctx__$1;
var G__74226 = expr;
var G__74227 = maybe_record_constructor;
var G__74228 = args__$1;
var G__74229 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var G__74230 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__74225,G__74226,G__74227,G__74228,G__74229,G__74230) : sci.impl.analyzer.return_call.call(null,G__74225,G__74226,G__74227,G__74228,G__74229,G__74230));
} else {
if(var_QMARK_){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(cljs.core.deref(maybe_var),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74209_SHARP_){
return sci.impl.types.eval(p1__74209_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
} else {
if((class$ instanceof sci.impl.types.NodeR)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.types.eval(class$,ctx__$2,bindings),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74210_SHARP_){
return sci.impl.types.eval(p1__74210_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(class$,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74211_SHARP_){
return sci.impl.types.eval(p1__74211_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);

}
}
}
} else {
var temp__5751__auto____$1 = sci.impl.records.resolve_record_class(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5751__auto____$1)){
var record = temp__5751__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
var G__74240 = ctx__$1;
var G__74241 = expr;
var G__74242 = new cljs.core.Keyword("sci.impl","constructor","sci.impl/constructor",1320345666).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__74243 = args__$1;
var G__74244 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var G__74245 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__74240,G__74241,G__74242,G__74243,G__74244,G__74245) : sci.impl.analyzer.return_call.call(null,G__74240,G__74241,G__74242,G__74243,G__74244,G__74245));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
} else {
var class$ = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,class_sym) : sci.impl.analyzer.analyze.call(null,ctx__$1,class_sym));
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.types.eval(class$,ctx__$2,bindings),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74212_SHARP_){
return sci.impl.types.eval(p1__74212_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__74246){
var vec__74247 = p__74246;
var seq__74248 = cljs.core.seq(vec__74247);
var first__74249 = cljs.core.first(seq__74248);
var seq__74248__$1 = cljs.core.next(seq__74248);
var constructor_sym = first__74249;
var args = seq__74248__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}catch (e74254){if((e74254 instanceof Error)){
var e = e74254;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e74254;

}
}}),stack);
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__74260){
var vec__74262 = p__74260;
var seq__74263 = cljs.core.seq(vec__74262);
var first__74264 = cljs.core.first(seq__74263);
var seq__74263__$1 = cljs.core.next(seq__74263);
var _ns = first__74264;
var first__74264__$1 = cljs.core.first(seq__74263__$1);
var seq__74263__$2 = cljs.core.next(seq__74263__$1);
var ns_name = first__74264__$1;
var exprs = seq__74263__$2;
var expr = vec__74262;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__74273 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74273,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74273,(1),null);
var vec__74276 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74276,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74276,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__74299 = cljs.core.first(exprs__$3);
var seq__74300 = cljs.core.seq(vec__74299);
var first__74301 = cljs.core.first(seq__74300);
var seq__74300__$1 = cljs.core.next(seq__74300);
var k = first__74301;
var args = seq__74300__$1;
var expr__$1 = vec__74299;
var G__74302 = k;
var G__74302__$1 = (((G__74302 instanceof cljs.core.Keyword))?G__74302.fqn:null);
switch (G__74302__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__76502 = cljs.core.next(exprs__$3);
var G__76503 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__74303 = k;
var G__74303__$1 = (((G__74303 instanceof cljs.core.Keyword))?G__74303.fqn:null);
switch (G__74303__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__74303,G__74303__$1,G__74302,G__74302__$1,vec__74299,seq__74300,first__74301,seq__74300__$1,k,args,expr__$1,vec__74273,docstring,exprs__$1,vec__74276,attr_map,exprs__$2,attr_map__$1,vec__74262,seq__74263,first__74264,seq__74263__$1,_ns,first__74264__$1,seq__74263__$2,ns_name,exprs,expr){
return (function() { 
var G__76506__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__76506 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__76507__i = 0, G__76507__a = new Array(arguments.length -  1);
while (G__76507__i < G__76507__a.length) {G__76507__a[G__76507__i] = arguments[G__76507__i + 1]; ++G__76507__i;}
  args__$1 = new cljs.core.IndexedSeq(G__76507__a,0,null);
} 
return G__76506__delegate.call(this,ctx__$1,args__$1);};
G__76506.cljs$lang$maxFixedArity = 1;
G__76506.cljs$lang$applyTo = (function (arglist__76508){
var ctx__$1 = cljs.core.first(arglist__76508);
var args__$1 = cljs.core.rest(arglist__76508);
return G__76506__delegate(ctx__$1,args__$1);
});
G__76506.cljs$core$IFn$_invoke$arity$variadic = G__76506__delegate;
return G__76506;
})()
;
;})(exprs__$3,ret,G__74303,G__74303__$1,G__74302,G__74302__$1,vec__74299,seq__74300,first__74301,seq__74300__$1,k,args,expr__$1,vec__74273,docstring,exprs__$1,vec__74276,attr_map,exprs__$2,attr_map__$1,vec__74262,seq__74263,first__74264,seq__74263__$1,_ns,first__74264__$1,seq__74263__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74303__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__76502;
ret = G__76503;
continue;

break;
case "gen-class":
var G__76509 = cljs.core.next(exprs__$3);
var G__76510 = ret;
exprs__$3 = G__76509;
ret = G__76510;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74302__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.types.__GT_NodeR(((function (exprs__$3,ret,vec__74273,docstring,exprs__$1,vec__74276,attr_map,exprs__$2,attr_map__$1,vec__74262,seq__74263,first__74264,seq__74263__$1,_ns,first__74264__$1,seq__74263__$2,ns_name,exprs,expr){
return (function (this$,ctx__$1,bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__74273,docstring,exprs__$1,vec__74276,attr_map,exprs__$2,attr_map__$1,vec__74262,seq__74263,first__74264,seq__74263__$1,_ns,first__74264__$1,seq__74263__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__74310){
var vec__74311 = p__74310;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74311,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74311,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__74314){
var vec__74315 = p__74314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74315,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74315,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74315,(2),null);
var expr = vec__74315;
if((obj instanceof cljs.core.Symbol)){
var sym = obj;
var obj__$1 = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,obj);
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
if(sci.impl.utils.var_QMARK_(obj__$1)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var v__$2 = sci.impl.types.eval(v__$1,ctx__$1,bindings);
return sci.impl.types.setVal(obj__$1,v__$2);
}),null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj__$1)))){
var instance = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Symbol(null,"__sci_this","__sci_this",-193704996,null));
var mutator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->mutator","local->mutator",1004070878).cljs$core$IFn$_invoke$arity$1(ctx),sym);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var v__$2 = sci.impl.types.eval(v__$1,ctx__$1,bindings);
var instance__$1 = sci.impl.types.eval(instance,ctx__$1,bindings);
return (mutator.cljs$core$IFn$_invoke$arity$2 ? mutator.cljs$core$IFn$_invoke$arity$2(instance__$1,v__$2) : mutator.call(null,instance__$1,v__$2));
}),null);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
} else {
if(cljs.core.seq_QMARK_(obj)){
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var info = cljs.core.meta(obj__$1);
var k = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667).cljs$core$IFn$_invoke$arity$1(info),(1));
var obj__$2 = new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719).cljs$core$IFn$_invoke$arity$1(info);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var obj__$3 = sci.impl.types.eval(obj__$2,ctx__$1,bindings);
var v__$2 = sci.impl.types.eval(v__$1,ctx__$1,bindings);
return sci.impl.analyzer.goog$module$goog$object.set(obj__$3,k,v__$2);
}),null);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,idx,f,analyzed_children,stack){
var G__74328 = cljs.core.count(analyzed_children);
switch (G__74328) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__74332 = (bindings[idx]);
return (fexpr__74332.cljs$core$IFn$_invoke$arity$0 ? fexpr__74332.cljs$core$IFn$_invoke$arity$0() : fexpr__74332.call(null));
}catch (e74331){if((e74331 instanceof Error)){
var e__73457__auto__ = e74331;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74331;

}
}}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74340 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__74339 = (bindings[idx]);
return (fexpr__74339.cljs$core$IFn$_invoke$arity$1 ? fexpr__74339.cljs$core$IFn$_invoke$arity$1(G__74340) : fexpr__74339.call(null,G__74340));
}catch (e74336){if((e74336 instanceof Error)){
var e__73457__auto__ = e74336;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74336;

}
}}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74343 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74344 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__74342 = (bindings[idx]);
return (fexpr__74342.cljs$core$IFn$_invoke$arity$2 ? fexpr__74342.cljs$core$IFn$_invoke$arity$2(G__74343,G__74344) : fexpr__74342.call(null,G__74343,G__74344));
}catch (e74341){if((e74341 instanceof Error)){
var e__73457__auto__ = e74341;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74341;

}
}}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74347 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74348 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74349 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__74346 = (bindings[idx]);
return (fexpr__74346.cljs$core$IFn$_invoke$arity$3 ? fexpr__74346.cljs$core$IFn$_invoke$arity$3(G__74347,G__74348,G__74349) : fexpr__74346.call(null,G__74347,G__74348,G__74349));
}catch (e74345){if((e74345 instanceof Error)){
var e__73457__auto__ = e74345;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74345;

}
}}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74352 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74353 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74354 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74355 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__74351 = (bindings[idx]);
return (fexpr__74351.cljs$core$IFn$_invoke$arity$4 ? fexpr__74351.cljs$core$IFn$_invoke$arity$4(G__74352,G__74353,G__74354,G__74355) : fexpr__74351.call(null,G__74352,G__74353,G__74354,G__74355));
}catch (e74350){if((e74350 instanceof Error)){
var e__73457__auto__ = e74350;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74350;

}
}}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74358 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74359 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74360 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74361 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74362 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__74357 = (bindings[idx]);
return (fexpr__74357.cljs$core$IFn$_invoke$arity$5 ? fexpr__74357.cljs$core$IFn$_invoke$arity$5(G__74358,G__74359,G__74360,G__74361,G__74362) : fexpr__74357.call(null,G__74358,G__74359,G__74360,G__74361,G__74362));
}catch (e74356){if((e74356 instanceof Error)){
var e__73457__auto__ = e74356;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74356;

}
}}),stack);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74368 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74369 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74370 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74371 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74372 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74373 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__74367 = (bindings[idx]);
return (fexpr__74367.cljs$core$IFn$_invoke$arity$6 ? fexpr__74367.cljs$core$IFn$_invoke$arity$6(G__74368,G__74369,G__74370,G__74371,G__74372,G__74373) : fexpr__74367.call(null,G__74368,G__74369,G__74370,G__74371,G__74372,G__74373));
}catch (e74366){if((e74366 instanceof Error)){
var e__73457__auto__ = e74366;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74366;

}
}}),stack);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74376 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74377 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74378 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74379 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74380 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74381 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74382 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__74375 = (bindings[idx]);
return (fexpr__74375.cljs$core$IFn$_invoke$arity$7 ? fexpr__74375.cljs$core$IFn$_invoke$arity$7(G__74376,G__74377,G__74378,G__74379,G__74380,G__74381,G__74382) : fexpr__74375.call(null,G__74376,G__74377,G__74378,G__74379,G__74380,G__74381,G__74382));
}catch (e74374){if((e74374 instanceof Error)){
var e__73457__auto__ = e74374;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74374;

}
}}),stack);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74388 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74389 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74390 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74391 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74392 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74393 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74394 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74395 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__74387 = (bindings[idx]);
return (fexpr__74387.cljs$core$IFn$_invoke$arity$8 ? fexpr__74387.cljs$core$IFn$_invoke$arity$8(G__74388,G__74389,G__74390,G__74391,G__74392,G__74393,G__74394,G__74395) : fexpr__74387.call(null,G__74388,G__74389,G__74390,G__74391,G__74392,G__74393,G__74394,G__74395));
}catch (e74383){if((e74383 instanceof Error)){
var e__73457__auto__ = e74383;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74383;

}
}}),stack);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74398 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74399 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74400 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74401 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74402 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74403 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74404 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74405 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74406 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__74397 = (bindings[idx]);
return (fexpr__74397.cljs$core$IFn$_invoke$arity$9 ? fexpr__74397.cljs$core$IFn$_invoke$arity$9(G__74398,G__74399,G__74400,G__74401,G__74402,G__74403,G__74404,G__74405,G__74406) : fexpr__74397.call(null,G__74398,G__74399,G__74400,G__74401,G__74402,G__74403,G__74404,G__74405,G__74406));
}catch (e74396){if((e74396 instanceof Error)){
var e__73457__auto__ = e74396;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74396;

}
}}),stack);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74409 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74410 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74411 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74412 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74413 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74414 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74415 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74416 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74417 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74418 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__74408 = (bindings[idx]);
return (fexpr__74408.cljs$core$IFn$_invoke$arity$10 ? fexpr__74408.cljs$core$IFn$_invoke$arity$10(G__74409,G__74410,G__74411,G__74412,G__74413,G__74414,G__74415,G__74416,G__74417,G__74418) : fexpr__74408.call(null,G__74409,G__74410,G__74411,G__74412,G__74413,G__74414,G__74415,G__74416,G__74417,G__74418));
}catch (e74407){if((e74407 instanceof Error)){
var e__73457__auto__ = e74407;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74407;

}
}}),stack);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74421 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74422 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74423 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74424 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74425 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74426 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74427 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74428 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74429 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74430 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74431 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__74420 = (bindings[idx]);
return (fexpr__74420.cljs$core$IFn$_invoke$arity$11 ? fexpr__74420.cljs$core$IFn$_invoke$arity$11(G__74421,G__74422,G__74423,G__74424,G__74425,G__74426,G__74427,G__74428,G__74429,G__74430,G__74431) : fexpr__74420.call(null,G__74421,G__74422,G__74423,G__74424,G__74425,G__74426,G__74427,G__74428,G__74429,G__74430,G__74431));
}catch (e74419){if((e74419 instanceof Error)){
var e__73457__auto__ = e74419;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74419;

}
}}),stack);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74435 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74436 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74437 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74438 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74439 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74440 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74441 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74442 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74443 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74444 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74445 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74446 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__74434 = (bindings[idx]);
return (fexpr__74434.cljs$core$IFn$_invoke$arity$12 ? fexpr__74434.cljs$core$IFn$_invoke$arity$12(G__74435,G__74436,G__74437,G__74438,G__74439,G__74440,G__74441,G__74442,G__74443,G__74444,G__74445,G__74446) : fexpr__74434.call(null,G__74435,G__74436,G__74437,G__74438,G__74439,G__74440,G__74441,G__74442,G__74443,G__74444,G__74445,G__74446));
}catch (e74432){if((e74432 instanceof Error)){
var e__73457__auto__ = e74432;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74432;

}
}}),stack);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74454 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74455 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74456 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74457 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74458 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74459 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74460 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74461 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74462 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74463 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74464 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74465 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74466 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__74453 = (bindings[idx]);
return (fexpr__74453.cljs$core$IFn$_invoke$arity$13 ? fexpr__74453.cljs$core$IFn$_invoke$arity$13(G__74454,G__74455,G__74456,G__74457,G__74458,G__74459,G__74460,G__74461,G__74462,G__74463,G__74464,G__74465,G__74466) : fexpr__74453.call(null,G__74454,G__74455,G__74456,G__74457,G__74458,G__74459,G__74460,G__74461,G__74462,G__74463,G__74464,G__74465,G__74466));
}catch (e74452){if((e74452 instanceof Error)){
var e__73457__auto__ = e74452;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74452;

}
}}),stack);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74473 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74474 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74475 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74476 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74477 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74478 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74479 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74480 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74481 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74482 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74483 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74484 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74485 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74486 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__74472 = (bindings[idx]);
return (fexpr__74472.cljs$core$IFn$_invoke$arity$14 ? fexpr__74472.cljs$core$IFn$_invoke$arity$14(G__74473,G__74474,G__74475,G__74476,G__74477,G__74478,G__74479,G__74480,G__74481,G__74482,G__74483,G__74484,G__74485,G__74486) : fexpr__74472.call(null,G__74473,G__74474,G__74475,G__74476,G__74477,G__74478,G__74479,G__74480,G__74481,G__74482,G__74483,G__74484,G__74485,G__74486));
}catch (e74470){if((e74470 instanceof Error)){
var e__73457__auto__ = e74470;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74470;

}
}}),stack);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74499 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74500 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74501 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74502 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74503 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74504 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74505 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74506 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74507 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74508 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74509 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74510 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74511 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74512 = sci.impl.types.eval(arg13,ctx,bindings);
var G__74513 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__74498 = (bindings[idx]);
return (fexpr__74498.cljs$core$IFn$_invoke$arity$15 ? fexpr__74498.cljs$core$IFn$_invoke$arity$15(G__74499,G__74500,G__74501,G__74502,G__74503,G__74504,G__74505,G__74506,G__74507,G__74508,G__74509,G__74510,G__74511,G__74512,G__74513) : fexpr__74498.call(null,G__74499,G__74500,G__74501,G__74502,G__74503,G__74504,G__74505,G__74506,G__74507,G__74508,G__74509,G__74510,G__74511,G__74512,G__74513));
}catch (e74493){if((e74493 instanceof Error)){
var e__73457__auto__ = e74493;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74493;

}
}}),stack);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74526 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74527 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74528 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74529 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74530 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74531 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74532 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74533 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74534 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74535 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74536 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74537 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74538 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74539 = sci.impl.types.eval(arg13,ctx,bindings);
var G__74540 = sci.impl.types.eval(arg14,ctx,bindings);
var G__74541 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__74525 = (bindings[idx]);
return (fexpr__74525.cljs$core$IFn$_invoke$arity$16 ? fexpr__74525.cljs$core$IFn$_invoke$arity$16(G__74526,G__74527,G__74528,G__74529,G__74530,G__74531,G__74532,G__74533,G__74534,G__74535,G__74536,G__74537,G__74538,G__74539,G__74540,G__74541) : fexpr__74525.call(null,G__74526,G__74527,G__74528,G__74529,G__74530,G__74531,G__74532,G__74533,G__74534,G__74535,G__74536,G__74537,G__74538,G__74539,G__74540,G__74541));
}catch (e74520){if((e74520 instanceof Error)){
var e__73457__auto__ = e74520;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74520;

}
}}),stack);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74550 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74551 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74552 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74553 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74554 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74555 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74556 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74557 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74558 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74559 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74560 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74561 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74562 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74563 = sci.impl.types.eval(arg13,ctx,bindings);
var G__74564 = sci.impl.types.eval(arg14,ctx,bindings);
var G__74565 = sci.impl.types.eval(arg15,ctx,bindings);
var G__74566 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__74549 = (bindings[idx]);
return (fexpr__74549.cljs$core$IFn$_invoke$arity$17 ? fexpr__74549.cljs$core$IFn$_invoke$arity$17(G__74550,G__74551,G__74552,G__74553,G__74554,G__74555,G__74556,G__74557,G__74558,G__74559,G__74560,G__74561,G__74562,G__74563,G__74564,G__74565,G__74566) : fexpr__74549.call(null,G__74550,G__74551,G__74552,G__74553,G__74554,G__74555,G__74556,G__74557,G__74558,G__74559,G__74560,G__74561,G__74562,G__74563,G__74564,G__74565,G__74566));
}catch (e74548){if((e74548 instanceof Error)){
var e__73457__auto__ = e74548;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74548;

}
}}),stack);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74579 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74580 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74581 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74582 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74583 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74584 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74585 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74586 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74587 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74588 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74589 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74590 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74591 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74592 = sci.impl.types.eval(arg13,ctx,bindings);
var G__74593 = sci.impl.types.eval(arg14,ctx,bindings);
var G__74594 = sci.impl.types.eval(arg15,ctx,bindings);
var G__74595 = sci.impl.types.eval(arg16,ctx,bindings);
var G__74596 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__74578 = (bindings[idx]);
return (fexpr__74578.cljs$core$IFn$_invoke$arity$18 ? fexpr__74578.cljs$core$IFn$_invoke$arity$18(G__74579,G__74580,G__74581,G__74582,G__74583,G__74584,G__74585,G__74586,G__74587,G__74588,G__74589,G__74590,G__74591,G__74592,G__74593,G__74594,G__74595,G__74596) : fexpr__74578.call(null,G__74579,G__74580,G__74581,G__74582,G__74583,G__74584,G__74585,G__74586,G__74587,G__74588,G__74589,G__74590,G__74591,G__74592,G__74593,G__74594,G__74595,G__74596));
}catch (e74577){if((e74577 instanceof Error)){
var e__73457__auto__ = e74577;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74577;

}
}}),stack);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74603 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74604 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74605 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74606 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74607 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74608 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74609 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74610 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74611 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74612 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74613 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74614 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74615 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74616 = sci.impl.types.eval(arg13,ctx,bindings);
var G__74617 = sci.impl.types.eval(arg14,ctx,bindings);
var G__74618 = sci.impl.types.eval(arg15,ctx,bindings);
var G__74619 = sci.impl.types.eval(arg16,ctx,bindings);
var G__74620 = sci.impl.types.eval(arg17,ctx,bindings);
var G__74621 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__74602 = (bindings[idx]);
return (fexpr__74602.cljs$core$IFn$_invoke$arity$19 ? fexpr__74602.cljs$core$IFn$_invoke$arity$19(G__74603,G__74604,G__74605,G__74606,G__74607,G__74608,G__74609,G__74610,G__74611,G__74612,G__74613,G__74614,G__74615,G__74616,G__74617,G__74618,G__74619,G__74620,G__74621) : fexpr__74602.call(null,G__74603,G__74604,G__74605,G__74606,G__74607,G__74608,G__74609,G__74610,G__74611,G__74612,G__74613,G__74614,G__74615,G__74616,G__74617,G__74618,G__74619,G__74620,G__74621));
}catch (e74601){if((e74601 instanceof Error)){
var e__73457__auto__ = e74601;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73457__auto__,this$);
} else {
throw e74601;

}
}}),stack);

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(bindings[idx]),analyzed_children);
});

}
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], 0));
var G__74622 = cljs.core.count(analyzed_children);
switch (G__74622) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74623 = ctx;
var G__74624 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__74623,G__74624) : f.call(null,G__74623,G__74624));
}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74625 = ctx;
var G__74626 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74627 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__74625,G__74626,G__74627) : f.call(null,G__74625,G__74626,G__74627));
}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74628 = ctx;
var G__74629 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74630 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74631 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__74628,G__74629,G__74630,G__74631) : f.call(null,G__74628,G__74629,G__74630,G__74631));
}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74632 = ctx;
var G__74633 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74634 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74635 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74636 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__74632,G__74633,G__74634,G__74635,G__74636) : f.call(null,G__74632,G__74633,G__74634,G__74635,G__74636));
}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74637 = ctx;
var G__74638 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74639 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74640 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74641 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74642 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__74637,G__74638,G__74639,G__74640,G__74641,G__74642) : f.call(null,G__74637,G__74638,G__74639,G__74640,G__74641,G__74642));
}),stack);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74644 = ctx;
var G__74645 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74646 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74647 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74648 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74649 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74650 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__74644,G__74645,G__74646,G__74647,G__74648,G__74649,G__74650) : f.call(null,G__74644,G__74645,G__74646,G__74647,G__74648,G__74649,G__74650));
}),stack);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74651 = ctx;
var G__74652 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74653 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74654 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74655 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74656 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74657 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74658 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__74651,G__74652,G__74653,G__74654,G__74655,G__74656,G__74657,G__74658) : f.call(null,G__74651,G__74652,G__74653,G__74654,G__74655,G__74656,G__74657,G__74658));
}),stack);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74660 = ctx;
var G__74661 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74662 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74663 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74664 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74665 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74666 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74667 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74668 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__74660,G__74661,G__74662,G__74663,G__74664,G__74665,G__74666,G__74667,G__74668) : f.call(null,G__74660,G__74661,G__74662,G__74663,G__74664,G__74665,G__74666,G__74667,G__74668));
}),stack);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74670 = ctx;
var G__74671 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74672 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74673 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74674 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74675 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74676 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74677 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74678 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74679 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__74670,G__74671,G__74672,G__74673,G__74674,G__74675,G__74676,G__74677,G__74678,G__74679) : f.call(null,G__74670,G__74671,G__74672,G__74673,G__74674,G__74675,G__74676,G__74677,G__74678,G__74679));
}),stack);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74685 = ctx;
var G__74686 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74687 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74688 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74689 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74690 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74691 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74692 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74693 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74694 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74695 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__74685,G__74686,G__74687,G__74688,G__74689,G__74690,G__74691,G__74692,G__74693,G__74694,G__74695) : f.call(null,G__74685,G__74686,G__74687,G__74688,G__74689,G__74690,G__74691,G__74692,G__74693,G__74694,G__74695));
}),stack);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74697 = ctx;
var G__74698 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74699 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74700 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74701 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74702 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74703 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74704 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74705 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74706 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74707 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74708 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__74697,G__74698,G__74699,G__74700,G__74701,G__74702,G__74703,G__74704,G__74705,G__74706,G__74707,G__74708) : f.call(null,G__74697,G__74698,G__74699,G__74700,G__74701,G__74702,G__74703,G__74704,G__74705,G__74706,G__74707,G__74708));
}),stack);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74714 = ctx;
var G__74715 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74716 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74717 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74718 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74719 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74720 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74721 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74722 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74723 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74724 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74725 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74726 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__74714,G__74715,G__74716,G__74717,G__74718,G__74719,G__74720,G__74721,G__74722,G__74723,G__74724,G__74725,G__74726) : f.call(null,G__74714,G__74715,G__74716,G__74717,G__74718,G__74719,G__74720,G__74721,G__74722,G__74723,G__74724,G__74725,G__74726));
}),stack);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74728 = ctx;
var G__74729 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74730 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74731 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74732 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74733 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74734 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74735 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74736 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74737 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74738 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74739 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74740 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74741 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__74728,G__74729,G__74730,G__74731,G__74732,G__74733,G__74734,G__74735,G__74736,G__74737,G__74738,G__74739,G__74740,G__74741) : f.call(null,G__74728,G__74729,G__74730,G__74731,G__74732,G__74733,G__74734,G__74735,G__74736,G__74737,G__74738,G__74739,G__74740,G__74741));
}),stack);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74749 = ctx;
var G__74750 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74751 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74752 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74753 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74754 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74755 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74756 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74757 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74758 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74759 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74760 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74761 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74762 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74763 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__74749,G__74750,G__74751,G__74752,G__74753,G__74754,G__74755,G__74756,G__74757,G__74758,G__74759,G__74760,G__74761,G__74762,G__74763) : f.call(null,G__74749,G__74750,G__74751,G__74752,G__74753,G__74754,G__74755,G__74756,G__74757,G__74758,G__74759,G__74760,G__74761,G__74762,G__74763));
}),stack);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74770 = ctx;
var G__74771 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74772 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74773 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74774 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74775 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74776 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74777 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74778 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74779 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74780 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74781 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74782 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74783 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74784 = sci.impl.types.eval(arg13,ctx,bindings);
var G__74785 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__74770,G__74771,G__74772,G__74773,G__74774,G__74775,G__74776,G__74777,G__74778,G__74779,G__74780,G__74781,G__74782,G__74783,G__74784,G__74785) : f.call(null,G__74770,G__74771,G__74772,G__74773,G__74774,G__74775,G__74776,G__74777,G__74778,G__74779,G__74780,G__74781,G__74782,G__74783,G__74784,G__74785));
}),stack);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74793 = ctx;
var G__74794 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74795 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74796 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74797 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74798 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74799 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74800 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74801 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74802 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74803 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74804 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74805 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74806 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74807 = sci.impl.types.eval(arg13,ctx,bindings);
var G__74808 = sci.impl.types.eval(arg14,ctx,bindings);
var G__74809 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__74793,G__74794,G__74795,G__74796,G__74797,G__74798,G__74799,G__74800,G__74801,G__74802,G__74803,G__74804,G__74805,G__74806,G__74807,G__74808,G__74809) : f.call(null,G__74793,G__74794,G__74795,G__74796,G__74797,G__74798,G__74799,G__74800,G__74801,G__74802,G__74803,G__74804,G__74805,G__74806,G__74807,G__74808,G__74809));
}),stack);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74817 = ctx;
var G__74818 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74819 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74820 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74821 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74822 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74823 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74824 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74825 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74826 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74827 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74828 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74829 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74830 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74831 = sci.impl.types.eval(arg13,ctx,bindings);
var G__74832 = sci.impl.types.eval(arg14,ctx,bindings);
var G__74833 = sci.impl.types.eval(arg15,ctx,bindings);
var G__74834 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__74817,G__74818,G__74819,G__74820,G__74821,G__74822,G__74823,G__74824,G__74825,G__74826,G__74827,G__74828,G__74829,G__74830,G__74831,G__74832,G__74833,G__74834) : f.call(null,G__74817,G__74818,G__74819,G__74820,G__74821,G__74822,G__74823,G__74824,G__74825,G__74826,G__74827,G__74828,G__74829,G__74830,G__74831,G__74832,G__74833,G__74834));
}),stack);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74848 = ctx;
var G__74849 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74850 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74851 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74852 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74853 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74854 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74855 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74856 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74857 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74858 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74859 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74860 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74861 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74862 = sci.impl.types.eval(arg13,ctx,bindings);
var G__74863 = sci.impl.types.eval(arg14,ctx,bindings);
var G__74864 = sci.impl.types.eval(arg15,ctx,bindings);
var G__74865 = sci.impl.types.eval(arg16,ctx,bindings);
var G__74866 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__74848,G__74849,G__74850,G__74851,G__74852,G__74853,G__74854,G__74855,G__74856,G__74857,G__74858,G__74859,G__74860,G__74861,G__74862,G__74863,G__74864,G__74865,G__74866) : f.call(null,G__74848,G__74849,G__74850,G__74851,G__74852,G__74853,G__74854,G__74855,G__74856,G__74857,G__74858,G__74859,G__74860,G__74861,G__74862,G__74863,G__74864,G__74865,G__74866));
}),stack);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__74873 = ctx;
var G__74874 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74875 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74876 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74877 = sci.impl.types.eval(arg3,ctx,bindings);
var G__74878 = sci.impl.types.eval(arg4,ctx,bindings);
var G__74879 = sci.impl.types.eval(arg5,ctx,bindings);
var G__74880 = sci.impl.types.eval(arg6,ctx,bindings);
var G__74881 = sci.impl.types.eval(arg7,ctx,bindings);
var G__74882 = sci.impl.types.eval(arg8,ctx,bindings);
var G__74883 = sci.impl.types.eval(arg9,ctx,bindings);
var G__74884 = sci.impl.types.eval(arg10,ctx,bindings);
var G__74885 = sci.impl.types.eval(arg11,ctx,bindings);
var G__74886 = sci.impl.types.eval(arg12,ctx,bindings);
var G__74887 = sci.impl.types.eval(arg13,ctx,bindings);
var G__74888 = sci.impl.types.eval(arg14,ctx,bindings);
var G__74889 = sci.impl.types.eval(arg15,ctx,bindings);
var G__74890 = sci.impl.types.eval(arg16,ctx,bindings);
var G__74891 = sci.impl.types.eval(arg17,ctx,bindings);
var G__74892 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__74873,G__74874,G__74875,G__74876,G__74877,G__74878,G__74879,G__74880,G__74881,G__74882,G__74883,G__74884,G__74885,G__74886,G__74887,G__74888,G__74889,G__74890,G__74891,G__74892) : f.call(null,G__74873,G__74874,G__74875,G__74876,G__74877,G__74878,G__74879,G__74880,G__74881,G__74882,G__74883,G__74884,G__74885,G__74886,G__74887,G__74888,G__74889,G__74890,G__74891,G__74892));
}),stack);

break;
default:
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
}),stack);

}
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
var G__74915 = cljs.core.count(analyzed_children);
switch (G__74915) {
case (0):
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__74925 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__74925.cljs$core$IFn$_invoke$arity$0 ? fexpr__74925.cljs$core$IFn$_invoke$arity$0() : fexpr__74925.call(null));
}catch (e74923){if((e74923 instanceof Error)){
var e__73638__auto__ = e74923;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74923;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e74926){if((e74926 instanceof Error)){
var e__73638__auto__ = e74926;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74926;

}
}}),stack);
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74933 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__74932 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__74932.cljs$core$IFn$_invoke$arity$1 ? fexpr__74932.cljs$core$IFn$_invoke$arity$1(G__74933) : fexpr__74932.call(null,G__74933));
}catch (e74930){if((e74930 instanceof Error)){
var e__73638__auto__ = e74930;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74930;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74935 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__74935) : f.call(null,G__74935));
}catch (e74934){if((e74934 instanceof Error)){
var e__73638__auto__ = e74934;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74934;

}
}}),stack);
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74940 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74941 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__74939 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__74939.cljs$core$IFn$_invoke$arity$2 ? fexpr__74939.cljs$core$IFn$_invoke$arity$2(G__74940,G__74941) : fexpr__74939.call(null,G__74940,G__74941));
}catch (e74937){if((e74937 instanceof Error)){
var e__73638__auto__ = e74937;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74937;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74947 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74948 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__74947,G__74948) : f.call(null,G__74947,G__74948));
}catch (e74945){if((e74945 instanceof Error)){
var e__73638__auto__ = e74945;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74945;

}
}}),stack);
}

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74953 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74954 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74955 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__74952 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__74952.cljs$core$IFn$_invoke$arity$3 ? fexpr__74952.cljs$core$IFn$_invoke$arity$3(G__74953,G__74954,G__74955) : fexpr__74952.call(null,G__74953,G__74954,G__74955));
}catch (e74951){if((e74951 instanceof Error)){
var e__73638__auto__ = e74951;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74951;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74960 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74961 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74962 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__74960,G__74961,G__74962) : f.call(null,G__74960,G__74961,G__74962));
}catch (e74958){if((e74958 instanceof Error)){
var e__73638__auto__ = e74958;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74958;

}
}}),stack);
}

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74969 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74970 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74971 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74972 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__74968 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__74968.cljs$core$IFn$_invoke$arity$4 ? fexpr__74968.cljs$core$IFn$_invoke$arity$4(G__74969,G__74970,G__74971,G__74972) : fexpr__74968.call(null,G__74969,G__74970,G__74971,G__74972));
}catch (e74965){if((e74965 instanceof Error)){
var e__73638__auto__ = e74965;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74965;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74978 = sci.impl.types.eval(arg0,ctx,bindings);
var G__74979 = sci.impl.types.eval(arg1,ctx,bindings);
var G__74980 = sci.impl.types.eval(arg2,ctx,bindings);
var G__74981 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__74978,G__74979,G__74980,G__74981) : f.call(null,G__74978,G__74979,G__74980,G__74981));
}catch (e74974){if((e74974 instanceof Error)){
var e__73638__auto__ = e74974;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74974;

}
}}),stack);
}

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__74999 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75000 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75001 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75002 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75003 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__74998 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__74998.cljs$core$IFn$_invoke$arity$5 ? fexpr__74998.cljs$core$IFn$_invoke$arity$5(G__74999,G__75000,G__75001,G__75002,G__75003) : fexpr__74998.call(null,G__74999,G__75000,G__75001,G__75002,G__75003));
}catch (e74992){if((e74992 instanceof Error)){
var e__73638__auto__ = e74992;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e74992;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75012 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75013 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75014 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75015 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75016 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__75012,G__75013,G__75014,G__75015,G__75016) : f.call(null,G__75012,G__75013,G__75014,G__75015,G__75016));
}catch (e75010){if((e75010 instanceof Error)){
var e__73638__auto__ = e75010;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75010;

}
}}),stack);
}

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75029 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75030 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75031 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75032 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75033 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75034 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__75028 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75028.cljs$core$IFn$_invoke$arity$6 ? fexpr__75028.cljs$core$IFn$_invoke$arity$6(G__75029,G__75030,G__75031,G__75032,G__75033,G__75034) : fexpr__75028.call(null,G__75029,G__75030,G__75031,G__75032,G__75033,G__75034));
}catch (e75026){if((e75026 instanceof Error)){
var e__73638__auto__ = e75026;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75026;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75039 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75040 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75041 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75042 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75043 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75044 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__75039,G__75040,G__75041,G__75042,G__75043,G__75044) : f.call(null,G__75039,G__75040,G__75041,G__75042,G__75043,G__75044));
}catch (e75038){if((e75038 instanceof Error)){
var e__73638__auto__ = e75038;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75038;

}
}}),stack);
}

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75052 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75053 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75054 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75055 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75056 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75057 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75058 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__75051 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75051.cljs$core$IFn$_invoke$arity$7 ? fexpr__75051.cljs$core$IFn$_invoke$arity$7(G__75052,G__75053,G__75054,G__75055,G__75056,G__75057,G__75058) : fexpr__75051.call(null,G__75052,G__75053,G__75054,G__75055,G__75056,G__75057,G__75058));
}catch (e75050){if((e75050 instanceof Error)){
var e__73638__auto__ = e75050;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75050;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75063 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75064 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75065 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75066 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75067 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75068 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75069 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__75063,G__75064,G__75065,G__75066,G__75067,G__75068,G__75069) : f.call(null,G__75063,G__75064,G__75065,G__75066,G__75067,G__75068,G__75069));
}catch (e75061){if((e75061 instanceof Error)){
var e__73638__auto__ = e75061;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75061;

}
}}),stack);
}

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75076 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75077 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75078 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75079 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75080 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75081 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75082 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75083 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__75075 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75075.cljs$core$IFn$_invoke$arity$8 ? fexpr__75075.cljs$core$IFn$_invoke$arity$8(G__75076,G__75077,G__75078,G__75079,G__75080,G__75081,G__75082,G__75083) : fexpr__75075.call(null,G__75076,G__75077,G__75078,G__75079,G__75080,G__75081,G__75082,G__75083));
}catch (e75074){if((e75074 instanceof Error)){
var e__73638__auto__ = e75074;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75074;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75090 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75091 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75092 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75093 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75094 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75095 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75096 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75097 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__75090,G__75091,G__75092,G__75093,G__75094,G__75095,G__75096,G__75097) : f.call(null,G__75090,G__75091,G__75092,G__75093,G__75094,G__75095,G__75096,G__75097));
}catch (e75088){if((e75088 instanceof Error)){
var e__73638__auto__ = e75088;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75088;

}
}}),stack);
}

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75109 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75110 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75111 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75112 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75113 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75114 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75115 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75116 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75117 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__75108 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75108.cljs$core$IFn$_invoke$arity$9 ? fexpr__75108.cljs$core$IFn$_invoke$arity$9(G__75109,G__75110,G__75111,G__75112,G__75113,G__75114,G__75115,G__75116,G__75117) : fexpr__75108.call(null,G__75109,G__75110,G__75111,G__75112,G__75113,G__75114,G__75115,G__75116,G__75117));
}catch (e75107){if((e75107 instanceof Error)){
var e__73638__auto__ = e75107;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75107;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75124 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75125 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75126 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75127 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75128 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75129 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75130 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75131 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75132 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__75124,G__75125,G__75126,G__75127,G__75128,G__75129,G__75130,G__75131,G__75132) : f.call(null,G__75124,G__75125,G__75126,G__75127,G__75128,G__75129,G__75130,G__75131,G__75132));
}catch (e75122){if((e75122 instanceof Error)){
var e__73638__auto__ = e75122;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75122;

}
}}),stack);
}

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75139 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75140 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75141 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75142 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75143 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75144 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75145 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75146 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75147 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75148 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__75138 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75138.cljs$core$IFn$_invoke$arity$10 ? fexpr__75138.cljs$core$IFn$_invoke$arity$10(G__75139,G__75140,G__75141,G__75142,G__75143,G__75144,G__75145,G__75146,G__75147,G__75148) : fexpr__75138.call(null,G__75139,G__75140,G__75141,G__75142,G__75143,G__75144,G__75145,G__75146,G__75147,G__75148));
}catch (e75136){if((e75136 instanceof Error)){
var e__73638__auto__ = e75136;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75136;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75155 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75156 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75157 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75158 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75159 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75160 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75161 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75162 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75163 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75164 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__75155,G__75156,G__75157,G__75158,G__75159,G__75160,G__75161,G__75162,G__75163,G__75164) : f.call(null,G__75155,G__75156,G__75157,G__75158,G__75159,G__75160,G__75161,G__75162,G__75163,G__75164));
}catch (e75153){if((e75153 instanceof Error)){
var e__73638__auto__ = e75153;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75153;

}
}}),stack);
}

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75178 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75179 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75180 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75181 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75182 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75183 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75184 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75185 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75186 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75187 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75188 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__75177 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75177.cljs$core$IFn$_invoke$arity$11 ? fexpr__75177.cljs$core$IFn$_invoke$arity$11(G__75178,G__75179,G__75180,G__75181,G__75182,G__75183,G__75184,G__75185,G__75186,G__75187,G__75188) : fexpr__75177.call(null,G__75178,G__75179,G__75180,G__75181,G__75182,G__75183,G__75184,G__75185,G__75186,G__75187,G__75188));
}catch (e75176){if((e75176 instanceof Error)){
var e__73638__auto__ = e75176;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75176;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75192 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75193 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75194 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75195 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75196 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75197 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75198 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75199 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75200 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75201 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75202 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__75192,G__75193,G__75194,G__75195,G__75196,G__75197,G__75198,G__75199,G__75200,G__75201,G__75202) : f.call(null,G__75192,G__75193,G__75194,G__75195,G__75196,G__75197,G__75198,G__75199,G__75200,G__75201,G__75202));
}catch (e75190){if((e75190 instanceof Error)){
var e__73638__auto__ = e75190;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75190;

}
}}),stack);
}

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75210 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75211 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75212 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75213 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75214 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75215 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75216 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75217 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75218 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75219 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75220 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75221 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__75209 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75209.cljs$core$IFn$_invoke$arity$12 ? fexpr__75209.cljs$core$IFn$_invoke$arity$12(G__75210,G__75211,G__75212,G__75213,G__75214,G__75215,G__75216,G__75217,G__75218,G__75219,G__75220,G__75221) : fexpr__75209.call(null,G__75210,G__75211,G__75212,G__75213,G__75214,G__75215,G__75216,G__75217,G__75218,G__75219,G__75220,G__75221));
}catch (e75206){if((e75206 instanceof Error)){
var e__73638__auto__ = e75206;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75206;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75225 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75226 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75227 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75228 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75229 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75230 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75231 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75232 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75233 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75234 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75235 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75236 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__75225,G__75226,G__75227,G__75228,G__75229,G__75230,G__75231,G__75232,G__75233,G__75234,G__75235,G__75236) : f.call(null,G__75225,G__75226,G__75227,G__75228,G__75229,G__75230,G__75231,G__75232,G__75233,G__75234,G__75235,G__75236));
}catch (e75224){if((e75224 instanceof Error)){
var e__73638__auto__ = e75224;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75224;

}
}}),stack);
}

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75250 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75251 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75252 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75253 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75254 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75255 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75256 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75257 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75258 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75259 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75260 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75261 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75262 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__75249 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75249.cljs$core$IFn$_invoke$arity$13 ? fexpr__75249.cljs$core$IFn$_invoke$arity$13(G__75250,G__75251,G__75252,G__75253,G__75254,G__75255,G__75256,G__75257,G__75258,G__75259,G__75260,G__75261,G__75262) : fexpr__75249.call(null,G__75250,G__75251,G__75252,G__75253,G__75254,G__75255,G__75256,G__75257,G__75258,G__75259,G__75260,G__75261,G__75262));
}catch (e75244){if((e75244 instanceof Error)){
var e__73638__auto__ = e75244;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75244;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75269 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75270 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75271 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75272 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75273 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75274 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75275 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75276 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75277 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75278 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75279 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75280 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75281 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__75269,G__75270,G__75271,G__75272,G__75273,G__75274,G__75275,G__75276,G__75277,G__75278,G__75279,G__75280,G__75281) : f.call(null,G__75269,G__75270,G__75271,G__75272,G__75273,G__75274,G__75275,G__75276,G__75277,G__75278,G__75279,G__75280,G__75281));
}catch (e75267){if((e75267 instanceof Error)){
var e__73638__auto__ = e75267;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75267;

}
}}),stack);
}

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75290 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75291 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75292 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75293 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75294 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75295 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75296 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75297 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75298 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75299 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75300 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75301 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75302 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75303 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__75289 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75289.cljs$core$IFn$_invoke$arity$14 ? fexpr__75289.cljs$core$IFn$_invoke$arity$14(G__75290,G__75291,G__75292,G__75293,G__75294,G__75295,G__75296,G__75297,G__75298,G__75299,G__75300,G__75301,G__75302,G__75303) : fexpr__75289.call(null,G__75290,G__75291,G__75292,G__75293,G__75294,G__75295,G__75296,G__75297,G__75298,G__75299,G__75300,G__75301,G__75302,G__75303));
}catch (e75287){if((e75287 instanceof Error)){
var e__73638__auto__ = e75287;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75287;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75307 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75308 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75309 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75310 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75311 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75312 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75313 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75314 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75315 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75316 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75317 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75318 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75319 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75320 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__75307,G__75308,G__75309,G__75310,G__75311,G__75312,G__75313,G__75314,G__75315,G__75316,G__75317,G__75318,G__75319,G__75320) : f.call(null,G__75307,G__75308,G__75309,G__75310,G__75311,G__75312,G__75313,G__75314,G__75315,G__75316,G__75317,G__75318,G__75319,G__75320));
}catch (e75306){if((e75306 instanceof Error)){
var e__73638__auto__ = e75306;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75306;

}
}}),stack);
}

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75334 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75335 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75336 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75337 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75338 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75339 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75340 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75341 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75342 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75343 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75344 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75345 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75346 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75347 = sci.impl.types.eval(arg13,ctx,bindings);
var G__75348 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__75333 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75333.cljs$core$IFn$_invoke$arity$15 ? fexpr__75333.cljs$core$IFn$_invoke$arity$15(G__75334,G__75335,G__75336,G__75337,G__75338,G__75339,G__75340,G__75341,G__75342,G__75343,G__75344,G__75345,G__75346,G__75347,G__75348) : fexpr__75333.call(null,G__75334,G__75335,G__75336,G__75337,G__75338,G__75339,G__75340,G__75341,G__75342,G__75343,G__75344,G__75345,G__75346,G__75347,G__75348));
}catch (e75329){if((e75329 instanceof Error)){
var e__73638__auto__ = e75329;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75329;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75363 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75364 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75365 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75366 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75367 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75368 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75369 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75370 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75371 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75372 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75373 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75374 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75375 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75376 = sci.impl.types.eval(arg13,ctx,bindings);
var G__75377 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__75363,G__75364,G__75365,G__75366,G__75367,G__75368,G__75369,G__75370,G__75371,G__75372,G__75373,G__75374,G__75375,G__75376,G__75377) : f.call(null,G__75363,G__75364,G__75365,G__75366,G__75367,G__75368,G__75369,G__75370,G__75371,G__75372,G__75373,G__75374,G__75375,G__75376,G__75377));
}catch (e75361){if((e75361 instanceof Error)){
var e__73638__auto__ = e75361;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75361;

}
}}),stack);
}

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75385 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75386 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75387 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75388 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75389 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75390 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75391 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75392 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75393 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75394 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75395 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75396 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75397 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75398 = sci.impl.types.eval(arg13,ctx,bindings);
var G__75399 = sci.impl.types.eval(arg14,ctx,bindings);
var G__75400 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__75384 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75384.cljs$core$IFn$_invoke$arity$16 ? fexpr__75384.cljs$core$IFn$_invoke$arity$16(G__75385,G__75386,G__75387,G__75388,G__75389,G__75390,G__75391,G__75392,G__75393,G__75394,G__75395,G__75396,G__75397,G__75398,G__75399,G__75400) : fexpr__75384.call(null,G__75385,G__75386,G__75387,G__75388,G__75389,G__75390,G__75391,G__75392,G__75393,G__75394,G__75395,G__75396,G__75397,G__75398,G__75399,G__75400));
}catch (e75382){if((e75382 instanceof Error)){
var e__73638__auto__ = e75382;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75382;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75412 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75413 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75414 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75415 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75416 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75417 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75418 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75419 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75420 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75421 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75422 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75423 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75424 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75425 = sci.impl.types.eval(arg13,ctx,bindings);
var G__75426 = sci.impl.types.eval(arg14,ctx,bindings);
var G__75427 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__75412,G__75413,G__75414,G__75415,G__75416,G__75417,G__75418,G__75419,G__75420,G__75421,G__75422,G__75423,G__75424,G__75425,G__75426,G__75427) : f.call(null,G__75412,G__75413,G__75414,G__75415,G__75416,G__75417,G__75418,G__75419,G__75420,G__75421,G__75422,G__75423,G__75424,G__75425,G__75426,G__75427));
}catch (e75403){if((e75403 instanceof Error)){
var e__73638__auto__ = e75403;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75403;

}
}}),stack);
}

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75451 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75452 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75453 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75454 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75455 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75456 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75458 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75459 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75461 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75462 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75463 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75464 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75465 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75466 = sci.impl.types.eval(arg13,ctx,bindings);
var G__75467 = sci.impl.types.eval(arg14,ctx,bindings);
var G__75468 = sci.impl.types.eval(arg15,ctx,bindings);
var G__75469 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__75450 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75450.cljs$core$IFn$_invoke$arity$17 ? fexpr__75450.cljs$core$IFn$_invoke$arity$17(G__75451,G__75452,G__75453,G__75454,G__75455,G__75456,G__75458,G__75459,G__75461,G__75462,G__75463,G__75464,G__75465,G__75466,G__75467,G__75468,G__75469) : fexpr__75450.call(null,G__75451,G__75452,G__75453,G__75454,G__75455,G__75456,G__75458,G__75459,G__75461,G__75462,G__75463,G__75464,G__75465,G__75466,G__75467,G__75468,G__75469));
}catch (e75447){if((e75447 instanceof Error)){
var e__73638__auto__ = e75447;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75447;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75493 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75494 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75495 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75496 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75497 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75498 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75499 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75500 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75501 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75502 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75503 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75504 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75505 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75506 = sci.impl.types.eval(arg13,ctx,bindings);
var G__75507 = sci.impl.types.eval(arg14,ctx,bindings);
var G__75508 = sci.impl.types.eval(arg15,ctx,bindings);
var G__75509 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__75493,G__75494,G__75495,G__75496,G__75497,G__75498,G__75499,G__75500,G__75501,G__75502,G__75503,G__75504,G__75505,G__75506,G__75507,G__75508,G__75509) : f.call(null,G__75493,G__75494,G__75495,G__75496,G__75497,G__75498,G__75499,G__75500,G__75501,G__75502,G__75503,G__75504,G__75505,G__75506,G__75507,G__75508,G__75509));
}catch (e75488){if((e75488 instanceof Error)){
var e__73638__auto__ = e75488;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75488;

}
}}),stack);
}

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75530 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75531 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75532 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75533 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75534 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75535 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75536 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75537 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75538 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75539 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75540 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75541 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75542 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75543 = sci.impl.types.eval(arg13,ctx,bindings);
var G__75544 = sci.impl.types.eval(arg14,ctx,bindings);
var G__75545 = sci.impl.types.eval(arg15,ctx,bindings);
var G__75546 = sci.impl.types.eval(arg16,ctx,bindings);
var G__75547 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__75529 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75529.cljs$core$IFn$_invoke$arity$18 ? fexpr__75529.cljs$core$IFn$_invoke$arity$18(G__75530,G__75531,G__75532,G__75533,G__75534,G__75535,G__75536,G__75537,G__75538,G__75539,G__75540,G__75541,G__75542,G__75543,G__75544,G__75545,G__75546,G__75547) : fexpr__75529.call(null,G__75530,G__75531,G__75532,G__75533,G__75534,G__75535,G__75536,G__75537,G__75538,G__75539,G__75540,G__75541,G__75542,G__75543,G__75544,G__75545,G__75546,G__75547));
}catch (e75526){if((e75526 instanceof Error)){
var e__73638__auto__ = e75526;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75526;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75570 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75571 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75572 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75573 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75574 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75575 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75576 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75577 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75578 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75579 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75580 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75581 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75582 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75583 = sci.impl.types.eval(arg13,ctx,bindings);
var G__75584 = sci.impl.types.eval(arg14,ctx,bindings);
var G__75585 = sci.impl.types.eval(arg15,ctx,bindings);
var G__75586 = sci.impl.types.eval(arg16,ctx,bindings);
var G__75587 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__75570,G__75571,G__75572,G__75573,G__75574,G__75575,G__75576,G__75577,G__75578,G__75579,G__75580,G__75581,G__75582,G__75583,G__75584,G__75585,G__75586,G__75587) : f.call(null,G__75570,G__75571,G__75572,G__75573,G__75574,G__75575,G__75576,G__75577,G__75578,G__75579,G__75580,G__75581,G__75582,G__75583,G__75584,G__75585,G__75586,G__75587));
}catch (e75567){if((e75567 instanceof Error)){
var e__73638__auto__ = e75567;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75567;

}
}}),stack);
}

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75630 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75631 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75632 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75633 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75634 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75635 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75636 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75637 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75638 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75639 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75640 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75641 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75642 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75643 = sci.impl.types.eval(arg13,ctx,bindings);
var G__75644 = sci.impl.types.eval(arg14,ctx,bindings);
var G__75645 = sci.impl.types.eval(arg15,ctx,bindings);
var G__75646 = sci.impl.types.eval(arg16,ctx,bindings);
var G__75647 = sci.impl.types.eval(arg17,ctx,bindings);
var G__75648 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__75629 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__75629.cljs$core$IFn$_invoke$arity$19 ? fexpr__75629.cljs$core$IFn$_invoke$arity$19(G__75630,G__75631,G__75632,G__75633,G__75634,G__75635,G__75636,G__75637,G__75638,G__75639,G__75640,G__75641,G__75642,G__75643,G__75644,G__75645,G__75646,G__75647,G__75648) : fexpr__75629.call(null,G__75630,G__75631,G__75632,G__75633,G__75634,G__75635,G__75636,G__75637,G__75638,G__75639,G__75640,G__75641,G__75642,G__75643,G__75644,G__75645,G__75646,G__75647,G__75648));
}catch (e75619){if((e75619 instanceof Error)){
var e__73638__auto__ = e75619;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75619;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__75680 = sci.impl.types.eval(arg0,ctx,bindings);
var G__75681 = sci.impl.types.eval(arg1,ctx,bindings);
var G__75682 = sci.impl.types.eval(arg2,ctx,bindings);
var G__75683 = sci.impl.types.eval(arg3,ctx,bindings);
var G__75684 = sci.impl.types.eval(arg4,ctx,bindings);
var G__75685 = sci.impl.types.eval(arg5,ctx,bindings);
var G__75686 = sci.impl.types.eval(arg6,ctx,bindings);
var G__75687 = sci.impl.types.eval(arg7,ctx,bindings);
var G__75688 = sci.impl.types.eval(arg8,ctx,bindings);
var G__75689 = sci.impl.types.eval(arg9,ctx,bindings);
var G__75690 = sci.impl.types.eval(arg10,ctx,bindings);
var G__75691 = sci.impl.types.eval(arg11,ctx,bindings);
var G__75692 = sci.impl.types.eval(arg12,ctx,bindings);
var G__75693 = sci.impl.types.eval(arg13,ctx,bindings);
var G__75694 = sci.impl.types.eval(arg14,ctx,bindings);
var G__75695 = sci.impl.types.eval(arg15,ctx,bindings);
var G__75696 = sci.impl.types.eval(arg16,ctx,bindings);
var G__75697 = sci.impl.types.eval(arg17,ctx,bindings);
var G__75698 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__75680,G__75681,G__75682,G__75683,G__75684,G__75685,G__75686,G__75687,G__75688,G__75689,G__75690,G__75691,G__75692,G__75693,G__75694,G__75695,G__75696,G__75697,G__75698) : f.call(null,G__75680,G__75681,G__75682,G__75683,G__75684,G__75685,G__75686,G__75687,G__75688,G__75689,G__75690,G__75691,G__75692,G__75693,G__75694,G__75695,G__75696,G__75697,G__75698));
}catch (e75674){if((e75674 instanceof Error)){
var e__73638__auto__ = e75674;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__73638__auto__,this$);
} else {
throw e75674;

}
}}),stack);
}

break;
default:
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f)),analyzed_children);
}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,analyzed_children);
}),stack);
}

}
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second(expr);
return sci.impl.types.__GT_constant(snd);
});
sci.impl.analyzer.analyze_in_ns = (function sci$impl$analyzer$analyze_in_ns(ctx,expr){
var ns_expr = (function (){var G__75736 = ctx;
var G__75737 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__75736,G__75737) : sci.impl.analyzer.analyze.call(null,G__75736,G__75737));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var ns_sym = sci.impl.types.eval(ns_expr,ctx__$1,bindings);
sci.impl.utils.set_namespace_BANG_(ctx__$1,ns_sym,null);

return null;
}),null);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest(expr);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,args);
}catch (e75740){if((e75740 instanceof Error)){
var e = e75740;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e75740;

}
}}),stack);
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,m,top_level_QMARK_){
var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_file,eval_file]));
} else {
}

try{var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var fsym = f;
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__4251__auto__ = special_sym;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__4251__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__4253__auto__ = special_sym;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__4251__auto__ = f_meta;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = f_meta;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4251__auto__;
}
})())){
var vec__75756 = f__$1;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75756,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75756,(1),null);
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var len = method_name__$1.length;
var idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(method_name__$1,".");
var f__$2 = (cljs.core.truth_((function (){var and__4251__auto__ = idx;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((len - (1)),idx);
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.analyzer.goog$module$goog$object.getValueByKeys(class$,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(method_name__$1,(0),idx).split("."))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name__$1,(idx + (1)))], null):f__$1);
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation(ctx__$1,bindings,cljs.core.cons(f__$2,children));
}),null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(eval_QMARK_);
if(and__4251__auto__){
var and__4251__auto____$1 = (f__$1 instanceof cljs.core.Symbol);
if(and__4251__auto____$1){
var or__4253__auto__ = special_sym;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var G__75765 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__75765)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__75765)){
return sci.impl.analyzer.return_and(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__75765)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__75765)){
return sci.impl.analyzer.analyze_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__75765)){
return sci.impl.analyzer.analyze_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__75765)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__75765)){
var ret = sci.impl.analyzer.analyze_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__75765)){
var ret = sci.impl.analyzer.analyze_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__75765)){
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__75765)){
return sci.impl.analyzer.analyze_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__75765)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__75765)){
return sci.impl.analyzer.analyze_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__75765)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let*","let*",1920721458,null),G__75765)){
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,cljs.core.second(expr),cljs.core.nnext(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__75765)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__75765)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__75765)){
return sci.impl.analyzer.analyze_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__75765)){
return sci.impl.analyzer.analyze_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__75765)){
return sci.impl.analyzer.analyze_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__75765)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__75765)){
return sci.impl.analyzer.return_recur(ctx,expr,sci.impl.analyzer.analyze_children(sci.impl.analyzer.without_recur_target(ctx),cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__75765)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__75765)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__75765)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__75765)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__75765)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__75765)){
return sci.impl.analyzer.return_or(ctx,expr,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75765)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (function (){var and__4251__auto__ = sci.impl.utils.var_QMARK_(f__$1);
if(and__4251__auto__){
return sci.impl.vars.needs_ctx_QMARK_(f__$1);
} else {
return and__4251__auto__;
}
})();
var f__$2 = ((sci.impl.utils.var_QMARK_(f__$1))?cljs.core.deref(f__$1):f__$1);
var f__$3 = (function (){var or__4253__auto__ = f__$2.afn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return f__$2;
}
})();
var v = (cljs.core.truth_(needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$3,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$3,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__4251__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__4251__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(function (){var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v):v);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,v__$1,top_level_QMARK_) : sci.impl.analyzer.analyze.call(null,ctx,v__$1,top_level_QMARK_));
})()
));
return expanded;
} else {
var temp__5751__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5751__auto__)){
var f__$2 = temp__5751__auto__;
return sci.impl.analyzer.return_call(ctx,expr,f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
} else {
var temp__5751__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
if(cljs.core.truth_(temp__5751__auto____$1)){
var op = temp__5751__auto____$1;
var G__75818 = op;
var G__75818__$1 = (((G__75818 instanceof cljs.core.Keyword))?G__75818.fqn:null);
switch (G__75818__$1) {
case "resolve-sym":
return sci.impl.analyzer.return_binding_call(ctx,expr,new cljs.core.Keyword("sci.impl","idx","sci.impl/idx",700902278).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)),f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)));

break;
default:
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);

}
} else {
var needs_ctx_QMARK_ = (function (){var and__4251__auto__ = sci.impl.utils.var_QMARK_(f__$1);
if(and__4251__auto__){
return sci.impl.vars.needs_ctx_QMARK_(f__$1);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(needs_ctx_QMARK_)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var self_ref_QMARK_ = new cljs.core.Keyword(null,"self-ref?","self-ref?",412808630).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__4251__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1(f__$1) : self_ref_QMARK_.call(null,f__$1));
} else {
return and__4251__auto__;
}
})())){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),(function (bindings,___$1){
return cljs.core.deref(bindings.get(fsym));
}));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),((sci.impl.utils.var_QMARK_(f__$1))?(function (___$1,v){
return cljs.core.deref(v);
}):null));
}
}
}
}
}
}catch (e75783){if((e75783 instanceof Error)){
var e = e75783;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,(function (){var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),stack);
})());
} else {
throw e75783;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__75825 = ccount;
switch (G__75825) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.types.eval(arg,ctx__$1,bindings));
}),null);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.types.eval(arg0,ctx__$1,bindings),sci.impl.types.eval(arg1,ctx__$1,bindings));
}),null);

break;
default:
return sci.impl.analyzer.throw_error_with_location(["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.analyzer.analyze.call(null,ctx,f));
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var f__$2 = sci.impl.types.eval(f__$1,ctx__$1,bindings);
if(cljs.core.ifn_QMARK_(f__$2)){
return sci.impl.evaluator.fn_call(ctx__$1,bindings,f__$2,children);
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$2], 0))," as a function."].join('')));
}
}),stack);

}
}
}catch (e75747){var e = e75747;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$1(m)));
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}});
sci.impl.analyzer.map_fn = (function sci$impl$analyzer$map_fn(children_count){
if((children_count <= (16))){
return cljs.core.array_map;
} else {
return cljs.core.hash_map;
}
});
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map,analyzed_children){
var mf = sci.impl.analyzer.map_fn(cljs.core.count(analyzed_children));
sci.impl.analyzer.return_call(ctx,the_map,mf,analyzed_children,null,null);

return sci.impl.analyzer.return_call(ctx,the_map,mf,analyzed_children,null,null);
});
sci.impl.analyzer.constant_node_QMARK_ = (function sci$impl$analyzer$constant_node_QMARK_(x){
return (!((x instanceof sci.impl.types.NodeR)));
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,expr);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx__$1,children);
var const_QMARK_ = cljs.core.every_QMARK_(sci.impl.analyzer.constant_node_QMARK_,analyzed_children);
var same_QMARK_ = ((const_QMARK_)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(children,analyzed_children):null);
var const_val = ((const_QMARK_)?(cljs.core.truth_(same_QMARK_)?expr:(function (){var mf = sci.impl.analyzer.map_fn(cljs.core.count(analyzed_children));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mf,analyzed_children);
})()):null);
var analyzed_map = ((const_QMARK_)?sci.impl.types.__GT_constant(const_val):sci.impl.analyzer.return_map(ctx__$1,expr,analyzed_children));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m) : sci.impl.analyzer.analyze.call(null,ctx__$1,m)):null);
var ret = (cljs.core.truth_(analyzed_meta)?sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
var coll = sci.impl.types.eval(analyzed_map,ctx__$2,bindings);
var md = sci.impl.types.eval(analyzed_meta,ctx__$2,bindings);
return cljs.core.with_meta(coll,md);
}),null):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,f1,f2,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m) : sci.impl.analyzer.analyze.call(null,ctx__$1,m)):null);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx__$1,expr);
var const_QMARK_ = cljs.core.every_QMARK_(sci.impl.analyzer.constant_node_QMARK_,analyzed_children);
var set_expr_QMARK_ = cljs.core.set_QMARK_(expr);
var same_QMARK_ = ((const_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((set_expr_QMARK_)?(function (){var or__4253__auto__ = cljs.core.seq(expr);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})():expr),analyzed_children)));
var const_val = ((const_QMARK_)?((same_QMARK_)?((cljs.core.empty_QMARK_(expr))?((set_expr_QMARK_)?cljs.core.PersistentHashSet.EMPTY:cljs.core.PersistentVector.EMPTY):expr):(f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(analyzed_children) : f1.call(null,analyzed_children))):null);
var analyzed_coll = ((const_QMARK_)?sci.impl.types.__GT_constant(const_val):sci.impl.analyzer.return_call(ctx__$1,expr,f2,analyzed_children,null,null));
var ret = (cljs.core.truth_(analyzed_meta)?sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
var coll = sci.impl.types.eval(analyzed_coll,ctx__$2,bindings);
var md = sci.impl.types.eval(analyzed_meta,ctx__$2,bindings);
return cljs.core.with_meta(coll,md);
}),null):analyzed_coll);
return ret;
});
sci.impl.analyzer.analyze_js_obj = (function sci$impl$analyzer$analyze_js_obj(ctx,js_val){
var v = js_val.val;
if(cljs.core.map_QMARK_(v)){
var ks = cljs.core.keys(v);
var ks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks);
var vs = cljs.core.vals(v);
var vs__$1 = sci.impl.analyzer.analyze_children(ctx,vs);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75855_SHARP_){
return sci.impl.types.eval(p1__75855_SHARP_,ctx__$1,bindings);
}),vs__$1)));
}),null);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var arr = [];
var seq__75864_76825 = cljs.core.seq(vs);
var chunk__75865_76826 = null;
var count__75866_76827 = (0);
var i__75867_76828 = (0);
while(true){
if((i__75867_76828 < count__75866_76827)){
var x_76829 = chunk__75865_76826.cljs$core$IIndexed$_nth$arity$2(null,i__75867_76828);
arr.push(sci.impl.types.eval(x_76829,ctx__$1,bindings));


var G__76830 = seq__75864_76825;
var G__76831 = chunk__75865_76826;
var G__76832 = count__75866_76827;
var G__76833 = (i__75867_76828 + (1));
seq__75864_76825 = G__76830;
chunk__75865_76826 = G__76831;
count__75866_76827 = G__76832;
i__75867_76828 = G__76833;
continue;
} else {
var temp__5753__auto___76834 = cljs.core.seq(seq__75864_76825);
if(temp__5753__auto___76834){
var seq__75864_76835__$1 = temp__5753__auto___76834;
if(cljs.core.chunked_seq_QMARK_(seq__75864_76835__$1)){
var c__4679__auto___76836 = cljs.core.chunk_first(seq__75864_76835__$1);
var G__76837 = cljs.core.chunk_rest(seq__75864_76835__$1);
var G__76838 = c__4679__auto___76836;
var G__76839 = cljs.core.count(c__4679__auto___76836);
var G__76840 = (0);
seq__75864_76825 = G__76837;
chunk__75865_76826 = G__76838;
count__75866_76827 = G__76839;
i__75867_76828 = G__76840;
continue;
} else {
var x_76841 = cljs.core.first(seq__75864_76835__$1);
arr.push(sci.impl.types.eval(x_76841,ctx__$1,bindings));


var G__76842 = cljs.core.next(seq__75864_76835__$1);
var G__76843 = null;
var G__76844 = (0);
var G__76845 = (0);
seq__75864_76825 = G__76842;
chunk__75865_76826 = G__76843;
count__75866_76827 = G__76844;
i__75867_76828 = G__76845;
continue;
}
} else {
}
}
break;
}

return arr;
}),null);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__75878 = arguments.length;
switch (G__75878) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return sci.impl.types.__GT_constant(expr);
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,expr,false,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta(v);
if(sci.impl.utils.constant_QMARK_(v)){
return sci.impl.types.__GT_constant(v);
} else {
if(sci.impl.utils.var_QMARK_(v)){
if(cljs.core.truth_((function (){var and__4251__auto__ = sci.impl.vars.needs_ctx_QMARK_(v);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(mv);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,ctx);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return cljs.core._deref(v);
}),null);
}
}
}
} else {
return v;

}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if((expr instanceof cljs.tagged_literals.JSValue)){
return sci.impl.analyzer.analyze_js_obj(ctx,expr);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.analyzer.analyze_call(ctx,expr,m,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.analyze,sci.impl.analyzer.analyze);

//# sourceMappingURL=sci.impl.analyzer.js.map
