import "./cljs_env.js";
goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_56580 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._header[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4551__auto__.call(null,value));
} else {
var m__4549__auto__ = (devtools.format._header["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4549__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_56580(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_56582 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._has_body[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4551__auto__.call(null,value));
} else {
var m__4549__auto__ = (devtools.format._has_body["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4549__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_56582(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_56583 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._body[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4551__auto__.call(null,value));
} else {
var m__4549__auto__ = (devtools.format._body["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4549__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_56583(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o56445 = temp__5751__auto__;
var temp__5751__auto____$1 = (o56445["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o56446 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o56446["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o56447 = temp__5751__auto____$2;
return (o56447["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o56453 = temp__5751__auto__;
var temp__5751__auto____$1 = (o56453["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o56454 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o56454["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o56455 = temp__5751__auto____$2;
return (o56455["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o56460 = temp__5751__auto__;
var temp__5751__auto____$1 = (o56460["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o56461 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o56461["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o56462 = temp__5751__auto____$2;
return (o56462["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o56464 = temp__5751__auto__;
var temp__5751__auto____$1 = (o56464["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o56465 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o56465["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o56466 = temp__5751__auto____$2;
return (o56466["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o56467 = temp__5751__auto__;
var temp__5751__auto____$1 = (o56467["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o56468 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o56468["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o56469 = temp__5751__auto____$2;
return (o56469["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o56470 = temp__5751__auto__;
var temp__5751__auto____$1 = (o56470["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o56471 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o56471["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o56472 = temp__5751__auto____$2;
return (o56472["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o56474 = temp__5751__auto__;
var temp__5751__auto____$1 = (o56474["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o56475 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o56475["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o56476 = temp__5751__auto____$2;
return (o56476["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56594 = arguments.length;
var i__4865__auto___56595 = (0);
while(true){
if((i__4865__auto___56595 < len__4864__auto___56594)){
args__4870__auto__.push((arguments[i__4865__auto___56595]));

var G__56596 = (i__4865__auto___56595 + (1));
i__4865__auto___56595 = G__56596;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq56509){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56509));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56598 = arguments.length;
var i__4865__auto___56599 = (0);
while(true){
if((i__4865__auto___56599 < len__4864__auto___56598)){
args__4870__auto__.push((arguments[i__4865__auto___56599]));

var G__56600 = (i__4865__auto___56599 + (1));
i__4865__auto___56599 = G__56600;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq56517){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56517));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56601 = arguments.length;
var i__4865__auto___56602 = (0);
while(true){
if((i__4865__auto___56602 < len__4864__auto___56601)){
args__4870__auto__.push((arguments[i__4865__auto___56602]));

var G__56603 = (i__4865__auto___56602 + (1));
i__4865__auto___56602 = G__56603;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq56519){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56519));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56607 = arguments.length;
var i__4865__auto___56608 = (0);
while(true){
if((i__4865__auto___56608 < len__4864__auto___56607)){
args__4870__auto__.push((arguments[i__4865__auto___56608]));

var G__56609 = (i__4865__auto___56608 + (1));
i__4865__auto___56608 = G__56609;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq56520){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56520));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56610 = arguments.length;
var i__4865__auto___56611 = (0);
while(true){
if((i__4865__auto___56611 < len__4864__auto___56610)){
args__4870__auto__.push((arguments[i__4865__auto___56611]));

var G__56612 = (i__4865__auto___56611 + (1));
i__4865__auto___56611 = G__56612;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq56521){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56521));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56615 = arguments.length;
var i__4865__auto___56616 = (0);
while(true){
if((i__4865__auto___56616 < len__4864__auto___56615)){
args__4870__auto__.push((arguments[i__4865__auto___56616]));

var G__56617 = (i__4865__auto___56616 + (1));
i__4865__auto___56616 = G__56617;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq56523){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56523));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56620 = arguments.length;
var i__4865__auto___56621 = (0);
while(true){
if((i__4865__auto___56621 < len__4864__auto___56620)){
args__4870__auto__.push((arguments[i__4865__auto___56621]));

var G__56622 = (i__4865__auto___56621 + (1));
i__4865__auto___56621 = G__56622;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq56524){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56524));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56623 = arguments.length;
var i__4865__auto___56624 = (0);
while(true){
if((i__4865__auto___56624 < len__4864__auto___56623)){
args__4870__auto__.push((arguments[i__4865__auto___56624]));

var G__56625 = (i__4865__auto___56624 + (1));
i__4865__auto___56624 = G__56625;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__56528){
var vec__56529 = p__56528;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56529,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__56525_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__56525_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq56526){
var G__56527 = cljs.core.first(seq56526);
var seq56526__$1 = cljs.core.next(seq56526);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56527,seq56526__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__56535 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__56536 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__56537 = (function (){var G__56542 = new cljs.core.Keyword(null,"li","li",723558921);
var G__56543 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__56544 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__56542,G__56543,G__56544) : devtools.format.make_template_fn.call(null,G__56542,G__56543,G__56544));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__56535,G__56536,G__56537) : devtools.format.make_template_fn.call(null,G__56535,G__56536,G__56537));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56626 = arguments.length;
var i__4865__auto___56627 = (0);
while(true){
if((i__4865__auto___56627 < len__4864__auto___56626)){
args__4870__auto__.push((arguments[i__4865__auto___56627]));

var G__56628 = (i__4865__auto___56627 + (1));
i__4865__auto___56627 = G__56628;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq56560){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56560));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56629 = arguments.length;
var i__4865__auto___56630 = (0);
while(true){
if((i__4865__auto___56630 < len__4864__auto___56629)){
args__4870__auto__.push((arguments[i__4865__auto___56630]));

var G__56631 = (i__4865__auto___56630 + (1));
i__4865__auto___56630 = G__56631;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq56566){
var G__56567 = cljs.core.first(seq56566);
var seq56566__$1 = cljs.core.next(seq56566);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56567,seq56566__$1);
}));


//# sourceMappingURL=devtools.format.js.map
