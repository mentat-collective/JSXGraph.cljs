goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.utils.current_ns_name();
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__70453 = (fixed_arity | (0));
switch (G__70453) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__70456){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__70456);

while(true){
var ret__69422__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69422__auto__)){
continue;
} else {
return ret__69422__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__70456 = null;
if (arguments.length > 0) {
var G__71605__i = 0, G__71605__a = new Array(arguments.length -  0);
while (G__71605__i < G__71605__a.length) {G__71605__a[G__71605__i] = arguments[G__71605__i + 0]; ++G__71605__i;}
  G__70456 = new cljs.core.IndexedSeq(G__71605__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__70456);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__71606){
var G__70456 = cljs.core.seq(arglist__71606);
return sci$impl$fns$fun_$_arity_0__delegate(G__70456);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__70463 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__70461,G__70462){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70461);

(invoc_array[vararg_idx] = G__70462);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__70461,var_args){
var G__70462 = null;
if (arguments.length > 1) {
var G__71607__i = 0, G__71607__a = new Array(arguments.length -  1);
while (G__71607__i < G__71607__a.length) {G__71607__a[G__71607__i] = arguments[G__71607__i + 1]; ++G__71607__i;}
  G__70462 = new cljs.core.IndexedSeq(G__71607__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__70461,G__70462);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__71608){
var G__70461 = cljs.core.first(arglist__71608);
var G__70462 = cljs.core.rest(arglist__71608);
return sci$impl$fns$fun_$_arity_1__delegate(G__70461,G__70462);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__70471 = cljs.core._nth(params,(0));
var G__70472 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__70468,G__70469,G__70470){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70468);

(invoc_array[(1)] = G__70469);

(invoc_array[vararg_idx] = G__70470);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__70468,G__70469,var_args){
var G__70470 = null;
if (arguments.length > 2) {
var G__71610__i = 0, G__71610__a = new Array(arguments.length -  2);
while (G__71610__i < G__71610__a.length) {G__71610__a[G__71610__i] = arguments[G__71610__i + 2]; ++G__71610__i;}
  G__70470 = new cljs.core.IndexedSeq(G__71610__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__70468,G__70469,G__70470);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__71611){
var G__70468 = cljs.core.first(arglist__71611);
arglist__71611 = cljs.core.next(arglist__71611);
var G__70469 = cljs.core.first(arglist__71611);
var G__70470 = cljs.core.rest(arglist__71611);
return sci$impl$fns$fun_$_arity_2__delegate(G__70468,G__70469,G__70470);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__70489 = cljs.core._nth(params,(0));
var G__70490 = cljs.core._nth(params,(1));
var G__70491 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__70485,G__70486,G__70487,G__70488){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70485);

(invoc_array[(1)] = G__70486);

(invoc_array[(2)] = G__70487);

(invoc_array[vararg_idx] = G__70488);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__70485,G__70486,G__70487,var_args){
var G__70488 = null;
if (arguments.length > 3) {
var G__71613__i = 0, G__71613__a = new Array(arguments.length -  3);
while (G__71613__i < G__71613__a.length) {G__71613__a[G__71613__i] = arguments[G__71613__i + 3]; ++G__71613__i;}
  G__70488 = new cljs.core.IndexedSeq(G__71613__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__70485,G__70486,G__70487,G__70488);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__71614){
var G__70485 = cljs.core.first(arglist__71614);
arglist__71614 = cljs.core.next(arglist__71614);
var G__70486 = cljs.core.first(arglist__71614);
arglist__71614 = cljs.core.next(arglist__71614);
var G__70487 = cljs.core.first(arglist__71614);
var G__70488 = cljs.core.rest(arglist__71614);
return sci$impl$fns$fun_$_arity_3__delegate(G__70485,G__70486,G__70487,G__70488);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__70498 = cljs.core._nth(params,(0));
var G__70499 = cljs.core._nth(params,(1));
var G__70500 = cljs.core._nth(params,(2));
var G__70501 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__70493,G__70494,G__70495,G__70496,G__70497){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70493);

(invoc_array[(1)] = G__70494);

(invoc_array[(2)] = G__70495);

(invoc_array[(3)] = G__70496);

(invoc_array[vararg_idx] = G__70497);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__70493,G__70494,G__70495,G__70496,var_args){
var G__70497 = null;
if (arguments.length > 4) {
var G__71615__i = 0, G__71615__a = new Array(arguments.length -  4);
while (G__71615__i < G__71615__a.length) {G__71615__a[G__71615__i] = arguments[G__71615__i + 4]; ++G__71615__i;}
  G__70497 = new cljs.core.IndexedSeq(G__71615__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__70493,G__70494,G__70495,G__70496,G__70497);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__71616){
var G__70493 = cljs.core.first(arglist__71616);
arglist__71616 = cljs.core.next(arglist__71616);
var G__70494 = cljs.core.first(arglist__71616);
arglist__71616 = cljs.core.next(arglist__71616);
var G__70495 = cljs.core.first(arglist__71616);
arglist__71616 = cljs.core.next(arglist__71616);
var G__70496 = cljs.core.first(arglist__71616);
var G__70497 = cljs.core.rest(arglist__71616);
return sci$impl$fns$fun_$_arity_4__delegate(G__70493,G__70494,G__70495,G__70496,G__70497);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__70510 = cljs.core._nth(params,(0));
var G__70511 = cljs.core._nth(params,(1));
var G__70512 = cljs.core._nth(params,(2));
var G__70513 = cljs.core._nth(params,(3));
var G__70514 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__70504,G__70505,G__70506,G__70507,G__70508,G__70509){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70504);

(invoc_array[(1)] = G__70505);

(invoc_array[(2)] = G__70506);

(invoc_array[(3)] = G__70507);

(invoc_array[(4)] = G__70508);

(invoc_array[vararg_idx] = G__70509);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__70504,G__70505,G__70506,G__70507,G__70508,var_args){
var G__70509 = null;
if (arguments.length > 5) {
var G__71619__i = 0, G__71619__a = new Array(arguments.length -  5);
while (G__71619__i < G__71619__a.length) {G__71619__a[G__71619__i] = arguments[G__71619__i + 5]; ++G__71619__i;}
  G__70509 = new cljs.core.IndexedSeq(G__71619__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__70504,G__70505,G__70506,G__70507,G__70508,G__70509);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__71620){
var G__70504 = cljs.core.first(arglist__71620);
arglist__71620 = cljs.core.next(arglist__71620);
var G__70505 = cljs.core.first(arglist__71620);
arglist__71620 = cljs.core.next(arglist__71620);
var G__70506 = cljs.core.first(arglist__71620);
arglist__71620 = cljs.core.next(arglist__71620);
var G__70507 = cljs.core.first(arglist__71620);
arglist__71620 = cljs.core.next(arglist__71620);
var G__70508 = cljs.core.first(arglist__71620);
var G__70509 = cljs.core.rest(arglist__71620);
return sci$impl$fns$fun_$_arity_5__delegate(G__70504,G__70505,G__70506,G__70507,G__70508,G__70509);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__70526 = cljs.core._nth(params,(0));
var G__70527 = cljs.core._nth(params,(1));
var G__70528 = cljs.core._nth(params,(2));
var G__70529 = cljs.core._nth(params,(3));
var G__70530 = cljs.core._nth(params,(4));
var G__70531 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__70519,G__70520,G__70521,G__70522,G__70523,G__70524,G__70525){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70519);

(invoc_array[(1)] = G__70520);

(invoc_array[(2)] = G__70521);

(invoc_array[(3)] = G__70522);

(invoc_array[(4)] = G__70523);

(invoc_array[(5)] = G__70524);

(invoc_array[vararg_idx] = G__70525);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__70519,G__70520,G__70521,G__70522,G__70523,G__70524,var_args){
var G__70525 = null;
if (arguments.length > 6) {
var G__71625__i = 0, G__71625__a = new Array(arguments.length -  6);
while (G__71625__i < G__71625__a.length) {G__71625__a[G__71625__i] = arguments[G__71625__i + 6]; ++G__71625__i;}
  G__70525 = new cljs.core.IndexedSeq(G__71625__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__70519,G__70520,G__70521,G__70522,G__70523,G__70524,G__70525);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__71627){
var G__70519 = cljs.core.first(arglist__71627);
arglist__71627 = cljs.core.next(arglist__71627);
var G__70520 = cljs.core.first(arglist__71627);
arglist__71627 = cljs.core.next(arglist__71627);
var G__70521 = cljs.core.first(arglist__71627);
arglist__71627 = cljs.core.next(arglist__71627);
var G__70522 = cljs.core.first(arglist__71627);
arglist__71627 = cljs.core.next(arglist__71627);
var G__70523 = cljs.core.first(arglist__71627);
arglist__71627 = cljs.core.next(arglist__71627);
var G__70524 = cljs.core.first(arglist__71627);
var G__70525 = cljs.core.rest(arglist__71627);
return sci$impl$fns$fun_$_arity_6__delegate(G__70519,G__70520,G__70521,G__70522,G__70523,G__70524,G__70525);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__70544 = cljs.core._nth(params,(0));
var G__70545 = cljs.core._nth(params,(1));
var G__70546 = cljs.core._nth(params,(2));
var G__70547 = cljs.core._nth(params,(3));
var G__70548 = cljs.core._nth(params,(4));
var G__70549 = cljs.core._nth(params,(5));
var G__70550 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__70536,G__70537,G__70538,G__70539,G__70540,G__70541,G__70542,G__70543){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70536);

(invoc_array[(1)] = G__70537);

(invoc_array[(2)] = G__70538);

(invoc_array[(3)] = G__70539);

(invoc_array[(4)] = G__70540);

(invoc_array[(5)] = G__70541);

(invoc_array[(6)] = G__70542);

(invoc_array[vararg_idx] = G__70543);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__70536,G__70537,G__70538,G__70539,G__70540,G__70541,G__70542,var_args){
var G__70543 = null;
if (arguments.length > 7) {
var G__71629__i = 0, G__71629__a = new Array(arguments.length -  7);
while (G__71629__i < G__71629__a.length) {G__71629__a[G__71629__i] = arguments[G__71629__i + 7]; ++G__71629__i;}
  G__70543 = new cljs.core.IndexedSeq(G__71629__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__70536,G__70537,G__70538,G__70539,G__70540,G__70541,G__70542,G__70543);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__71630){
var G__70536 = cljs.core.first(arglist__71630);
arglist__71630 = cljs.core.next(arglist__71630);
var G__70537 = cljs.core.first(arglist__71630);
arglist__71630 = cljs.core.next(arglist__71630);
var G__70538 = cljs.core.first(arglist__71630);
arglist__71630 = cljs.core.next(arglist__71630);
var G__70539 = cljs.core.first(arglist__71630);
arglist__71630 = cljs.core.next(arglist__71630);
var G__70540 = cljs.core.first(arglist__71630);
arglist__71630 = cljs.core.next(arglist__71630);
var G__70541 = cljs.core.first(arglist__71630);
arglist__71630 = cljs.core.next(arglist__71630);
var G__70542 = cljs.core.first(arglist__71630);
var G__70543 = cljs.core.rest(arglist__71630);
return sci$impl$fns$fun_$_arity_7__delegate(G__70536,G__70537,G__70538,G__70539,G__70540,G__70541,G__70542,G__70543);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__70565 = cljs.core._nth(params,(0));
var G__70566 = cljs.core._nth(params,(1));
var G__70567 = cljs.core._nth(params,(2));
var G__70568 = cljs.core._nth(params,(3));
var G__70569 = cljs.core._nth(params,(4));
var G__70570 = cljs.core._nth(params,(5));
var G__70571 = cljs.core._nth(params,(6));
var G__70572 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__70556,G__70557,G__70558,G__70559,G__70560,G__70561,G__70562,G__70563,G__70564){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70556);

(invoc_array[(1)] = G__70557);

(invoc_array[(2)] = G__70558);

(invoc_array[(3)] = G__70559);

(invoc_array[(4)] = G__70560);

(invoc_array[(5)] = G__70561);

(invoc_array[(6)] = G__70562);

(invoc_array[(7)] = G__70563);

(invoc_array[vararg_idx] = G__70564);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__70556,G__70557,G__70558,G__70559,G__70560,G__70561,G__70562,G__70563,var_args){
var G__70564 = null;
if (arguments.length > 8) {
var G__71635__i = 0, G__71635__a = new Array(arguments.length -  8);
while (G__71635__i < G__71635__a.length) {G__71635__a[G__71635__i] = arguments[G__71635__i + 8]; ++G__71635__i;}
  G__70564 = new cljs.core.IndexedSeq(G__71635__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__70556,G__70557,G__70558,G__70559,G__70560,G__70561,G__70562,G__70563,G__70564);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__71636){
var G__70556 = cljs.core.first(arglist__71636);
arglist__71636 = cljs.core.next(arglist__71636);
var G__70557 = cljs.core.first(arglist__71636);
arglist__71636 = cljs.core.next(arglist__71636);
var G__70558 = cljs.core.first(arglist__71636);
arglist__71636 = cljs.core.next(arglist__71636);
var G__70559 = cljs.core.first(arglist__71636);
arglist__71636 = cljs.core.next(arglist__71636);
var G__70560 = cljs.core.first(arglist__71636);
arglist__71636 = cljs.core.next(arglist__71636);
var G__70561 = cljs.core.first(arglist__71636);
arglist__71636 = cljs.core.next(arglist__71636);
var G__70562 = cljs.core.first(arglist__71636);
arglist__71636 = cljs.core.next(arglist__71636);
var G__70563 = cljs.core.first(arglist__71636);
var G__70564 = cljs.core.rest(arglist__71636);
return sci$impl$fns$fun_$_arity_8__delegate(G__70556,G__70557,G__70558,G__70559,G__70560,G__70561,G__70562,G__70563,G__70564);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__70590 = cljs.core._nth(params,(0));
var G__70591 = cljs.core._nth(params,(1));
var G__70592 = cljs.core._nth(params,(2));
var G__70593 = cljs.core._nth(params,(3));
var G__70594 = cljs.core._nth(params,(4));
var G__70595 = cljs.core._nth(params,(5));
var G__70596 = cljs.core._nth(params,(6));
var G__70597 = cljs.core._nth(params,(7));
var G__70598 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__70580,G__70581,G__70582,G__70583,G__70584,G__70585,G__70586,G__70587,G__70588,G__70589){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70580);

(invoc_array[(1)] = G__70581);

(invoc_array[(2)] = G__70582);

(invoc_array[(3)] = G__70583);

(invoc_array[(4)] = G__70584);

(invoc_array[(5)] = G__70585);

(invoc_array[(6)] = G__70586);

(invoc_array[(7)] = G__70587);

(invoc_array[(8)] = G__70588);

(invoc_array[vararg_idx] = G__70589);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__70580,G__70581,G__70582,G__70583,G__70584,G__70585,G__70586,G__70587,G__70588,var_args){
var G__70589 = null;
if (arguments.length > 9) {
var G__71639__i = 0, G__71639__a = new Array(arguments.length -  9);
while (G__71639__i < G__71639__a.length) {G__71639__a[G__71639__i] = arguments[G__71639__i + 9]; ++G__71639__i;}
  G__70589 = new cljs.core.IndexedSeq(G__71639__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__70580,G__70581,G__70582,G__70583,G__70584,G__70585,G__70586,G__70587,G__70588,G__70589);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__71640){
var G__70580 = cljs.core.first(arglist__71640);
arglist__71640 = cljs.core.next(arglist__71640);
var G__70581 = cljs.core.first(arglist__71640);
arglist__71640 = cljs.core.next(arglist__71640);
var G__70582 = cljs.core.first(arglist__71640);
arglist__71640 = cljs.core.next(arglist__71640);
var G__70583 = cljs.core.first(arglist__71640);
arglist__71640 = cljs.core.next(arglist__71640);
var G__70584 = cljs.core.first(arglist__71640);
arglist__71640 = cljs.core.next(arglist__71640);
var G__70585 = cljs.core.first(arglist__71640);
arglist__71640 = cljs.core.next(arglist__71640);
var G__70586 = cljs.core.first(arglist__71640);
arglist__71640 = cljs.core.next(arglist__71640);
var G__70587 = cljs.core.first(arglist__71640);
arglist__71640 = cljs.core.next(arglist__71640);
var G__70588 = cljs.core.first(arglist__71640);
var G__70589 = cljs.core.rest(arglist__71640);
return sci$impl$fns$fun_$_arity_9__delegate(G__70580,G__70581,G__70582,G__70583,G__70584,G__70585,G__70586,G__70587,G__70588,G__70589);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__70613 = cljs.core._nth(params,(0));
var G__70614 = cljs.core._nth(params,(1));
var G__70615 = cljs.core._nth(params,(2));
var G__70616 = cljs.core._nth(params,(3));
var G__70617 = cljs.core._nth(params,(4));
var G__70618 = cljs.core._nth(params,(5));
var G__70619 = cljs.core._nth(params,(6));
var G__70620 = cljs.core._nth(params,(7));
var G__70621 = cljs.core._nth(params,(8));
var G__70622 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__70602,G__70603,G__70604,G__70605,G__70606,G__70607,G__70608,G__70609,G__70610,G__70611,G__70612){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70602);

(invoc_array[(1)] = G__70603);

(invoc_array[(2)] = G__70604);

(invoc_array[(3)] = G__70605);

(invoc_array[(4)] = G__70606);

(invoc_array[(5)] = G__70607);

(invoc_array[(6)] = G__70608);

(invoc_array[(7)] = G__70609);

(invoc_array[(8)] = G__70610);

(invoc_array[(9)] = G__70611);

(invoc_array[vararg_idx] = G__70612);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__70602,G__70603,G__70604,G__70605,G__70606,G__70607,G__70608,G__70609,G__70610,G__70611,var_args){
var G__70612 = null;
if (arguments.length > 10) {
var G__71645__i = 0, G__71645__a = new Array(arguments.length -  10);
while (G__71645__i < G__71645__a.length) {G__71645__a[G__71645__i] = arguments[G__71645__i + 10]; ++G__71645__i;}
  G__70612 = new cljs.core.IndexedSeq(G__71645__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__70602,G__70603,G__70604,G__70605,G__70606,G__70607,G__70608,G__70609,G__70610,G__70611,G__70612);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__71646){
var G__70602 = cljs.core.first(arglist__71646);
arglist__71646 = cljs.core.next(arglist__71646);
var G__70603 = cljs.core.first(arglist__71646);
arglist__71646 = cljs.core.next(arglist__71646);
var G__70604 = cljs.core.first(arglist__71646);
arglist__71646 = cljs.core.next(arglist__71646);
var G__70605 = cljs.core.first(arglist__71646);
arglist__71646 = cljs.core.next(arglist__71646);
var G__70606 = cljs.core.first(arglist__71646);
arglist__71646 = cljs.core.next(arglist__71646);
var G__70607 = cljs.core.first(arglist__71646);
arglist__71646 = cljs.core.next(arglist__71646);
var G__70608 = cljs.core.first(arglist__71646);
arglist__71646 = cljs.core.next(arglist__71646);
var G__70609 = cljs.core.first(arglist__71646);
arglist__71646 = cljs.core.next(arglist__71646);
var G__70610 = cljs.core.first(arglist__71646);
arglist__71646 = cljs.core.next(arglist__71646);
var G__70611 = cljs.core.first(arglist__71646);
var G__70612 = cljs.core.rest(arglist__71646);
return sci$impl$fns$fun_$_arity_10__delegate(G__70602,G__70603,G__70604,G__70605,G__70606,G__70607,G__70608,G__70609,G__70610,G__70611,G__70612);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__70643 = cljs.core._nth(params,(0));
var G__70644 = cljs.core._nth(params,(1));
var G__70645 = cljs.core._nth(params,(2));
var G__70646 = cljs.core._nth(params,(3));
var G__70647 = cljs.core._nth(params,(4));
var G__70648 = cljs.core._nth(params,(5));
var G__70649 = cljs.core._nth(params,(6));
var G__70650 = cljs.core._nth(params,(7));
var G__70651 = cljs.core._nth(params,(8));
var G__70652 = cljs.core._nth(params,(9));
var G__70653 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__70631,G__70632,G__70633,G__70634,G__70635,G__70636,G__70637,G__70638,G__70639,G__70640,G__70641,G__70642){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70631);

(invoc_array[(1)] = G__70632);

(invoc_array[(2)] = G__70633);

(invoc_array[(3)] = G__70634);

(invoc_array[(4)] = G__70635);

(invoc_array[(5)] = G__70636);

(invoc_array[(6)] = G__70637);

(invoc_array[(7)] = G__70638);

(invoc_array[(8)] = G__70639);

(invoc_array[(9)] = G__70640);

(invoc_array[(10)] = G__70641);

(invoc_array[vararg_idx] = G__70642);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__70631,G__70632,G__70633,G__70634,G__70635,G__70636,G__70637,G__70638,G__70639,G__70640,G__70641,var_args){
var G__70642 = null;
if (arguments.length > 11) {
var G__71648__i = 0, G__71648__a = new Array(arguments.length -  11);
while (G__71648__i < G__71648__a.length) {G__71648__a[G__71648__i] = arguments[G__71648__i + 11]; ++G__71648__i;}
  G__70642 = new cljs.core.IndexedSeq(G__71648__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__70631,G__70632,G__70633,G__70634,G__70635,G__70636,G__70637,G__70638,G__70639,G__70640,G__70641,G__70642);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__71649){
var G__70631 = cljs.core.first(arglist__71649);
arglist__71649 = cljs.core.next(arglist__71649);
var G__70632 = cljs.core.first(arglist__71649);
arglist__71649 = cljs.core.next(arglist__71649);
var G__70633 = cljs.core.first(arglist__71649);
arglist__71649 = cljs.core.next(arglist__71649);
var G__70634 = cljs.core.first(arglist__71649);
arglist__71649 = cljs.core.next(arglist__71649);
var G__70635 = cljs.core.first(arglist__71649);
arglist__71649 = cljs.core.next(arglist__71649);
var G__70636 = cljs.core.first(arglist__71649);
arglist__71649 = cljs.core.next(arglist__71649);
var G__70637 = cljs.core.first(arglist__71649);
arglist__71649 = cljs.core.next(arglist__71649);
var G__70638 = cljs.core.first(arglist__71649);
arglist__71649 = cljs.core.next(arglist__71649);
var G__70639 = cljs.core.first(arglist__71649);
arglist__71649 = cljs.core.next(arglist__71649);
var G__70640 = cljs.core.first(arglist__71649);
arglist__71649 = cljs.core.next(arglist__71649);
var G__70641 = cljs.core.first(arglist__71649);
var G__70642 = cljs.core.rest(arglist__71649);
return sci$impl$fns$fun_$_arity_11__delegate(G__70631,G__70632,G__70633,G__70634,G__70635,G__70636,G__70637,G__70638,G__70639,G__70640,G__70641,G__70642);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__70679 = cljs.core._nth(params,(0));
var G__70680 = cljs.core._nth(params,(1));
var G__70681 = cljs.core._nth(params,(2));
var G__70682 = cljs.core._nth(params,(3));
var G__70683 = cljs.core._nth(params,(4));
var G__70684 = cljs.core._nth(params,(5));
var G__70685 = cljs.core._nth(params,(6));
var G__70686 = cljs.core._nth(params,(7));
var G__70687 = cljs.core._nth(params,(8));
var G__70688 = cljs.core._nth(params,(9));
var G__70689 = cljs.core._nth(params,(10));
var G__70690 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__70666,G__70667,G__70668,G__70669,G__70670,G__70671,G__70672,G__70673,G__70674,G__70675,G__70676,G__70677,G__70678){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70666);

(invoc_array[(1)] = G__70667);

(invoc_array[(2)] = G__70668);

(invoc_array[(3)] = G__70669);

(invoc_array[(4)] = G__70670);

(invoc_array[(5)] = G__70671);

(invoc_array[(6)] = G__70672);

(invoc_array[(7)] = G__70673);

(invoc_array[(8)] = G__70674);

(invoc_array[(9)] = G__70675);

(invoc_array[(10)] = G__70676);

(invoc_array[(11)] = G__70677);

(invoc_array[vararg_idx] = G__70678);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__70666,G__70667,G__70668,G__70669,G__70670,G__70671,G__70672,G__70673,G__70674,G__70675,G__70676,G__70677,var_args){
var G__70678 = null;
if (arguments.length > 12) {
var G__71651__i = 0, G__71651__a = new Array(arguments.length -  12);
while (G__71651__i < G__71651__a.length) {G__71651__a[G__71651__i] = arguments[G__71651__i + 12]; ++G__71651__i;}
  G__70678 = new cljs.core.IndexedSeq(G__71651__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__70666,G__70667,G__70668,G__70669,G__70670,G__70671,G__70672,G__70673,G__70674,G__70675,G__70676,G__70677,G__70678);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__71652){
var G__70666 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70667 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70668 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70669 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70670 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70671 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70672 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70673 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70674 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70675 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70676 = cljs.core.first(arglist__71652);
arglist__71652 = cljs.core.next(arglist__71652);
var G__70677 = cljs.core.first(arglist__71652);
var G__70678 = cljs.core.rest(arglist__71652);
return sci$impl$fns$fun_$_arity_12__delegate(G__70666,G__70667,G__70668,G__70669,G__70670,G__70671,G__70672,G__70673,G__70674,G__70675,G__70676,G__70677,G__70678);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__70709 = cljs.core._nth(params,(0));
var G__70710 = cljs.core._nth(params,(1));
var G__70711 = cljs.core._nth(params,(2));
var G__70712 = cljs.core._nth(params,(3));
var G__70713 = cljs.core._nth(params,(4));
var G__70714 = cljs.core._nth(params,(5));
var G__70715 = cljs.core._nth(params,(6));
var G__70716 = cljs.core._nth(params,(7));
var G__70717 = cljs.core._nth(params,(8));
var G__70718 = cljs.core._nth(params,(9));
var G__70719 = cljs.core._nth(params,(10));
var G__70720 = cljs.core._nth(params,(11));
var G__70721 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__70695,G__70696,G__70697,G__70698,G__70699,G__70700,G__70701,G__70702,G__70703,G__70704,G__70705,G__70706,G__70707,G__70708){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70695);

(invoc_array[(1)] = G__70696);

(invoc_array[(2)] = G__70697);

(invoc_array[(3)] = G__70698);

(invoc_array[(4)] = G__70699);

(invoc_array[(5)] = G__70700);

(invoc_array[(6)] = G__70701);

(invoc_array[(7)] = G__70702);

(invoc_array[(8)] = G__70703);

(invoc_array[(9)] = G__70704);

(invoc_array[(10)] = G__70705);

(invoc_array[(11)] = G__70706);

(invoc_array[(12)] = G__70707);

(invoc_array[vararg_idx] = G__70708);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__70695,G__70696,G__70697,G__70698,G__70699,G__70700,G__70701,G__70702,G__70703,G__70704,G__70705,G__70706,G__70707,var_args){
var G__70708 = null;
if (arguments.length > 13) {
var G__71655__i = 0, G__71655__a = new Array(arguments.length -  13);
while (G__71655__i < G__71655__a.length) {G__71655__a[G__71655__i] = arguments[G__71655__i + 13]; ++G__71655__i;}
  G__70708 = new cljs.core.IndexedSeq(G__71655__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__70695,G__70696,G__70697,G__70698,G__70699,G__70700,G__70701,G__70702,G__70703,G__70704,G__70705,G__70706,G__70707,G__70708);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__71656){
var G__70695 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70696 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70697 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70698 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70699 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70700 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70701 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70702 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70703 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70704 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70705 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70706 = cljs.core.first(arglist__71656);
arglist__71656 = cljs.core.next(arglist__71656);
var G__70707 = cljs.core.first(arglist__71656);
var G__70708 = cljs.core.rest(arglist__71656);
return sci$impl$fns$fun_$_arity_13__delegate(G__70695,G__70696,G__70697,G__70698,G__70699,G__70700,G__70701,G__70702,G__70703,G__70704,G__70705,G__70706,G__70707,G__70708);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__70745 = cljs.core._nth(params,(0));
var G__70746 = cljs.core._nth(params,(1));
var G__70747 = cljs.core._nth(params,(2));
var G__70748 = cljs.core._nth(params,(3));
var G__70749 = cljs.core._nth(params,(4));
var G__70750 = cljs.core._nth(params,(5));
var G__70751 = cljs.core._nth(params,(6));
var G__70752 = cljs.core._nth(params,(7));
var G__70753 = cljs.core._nth(params,(8));
var G__70754 = cljs.core._nth(params,(9));
var G__70755 = cljs.core._nth(params,(10));
var G__70756 = cljs.core._nth(params,(11));
var G__70757 = cljs.core._nth(params,(12));
var G__70758 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__70730,G__70731,G__70732,G__70733,G__70734,G__70735,G__70736,G__70737,G__70738,G__70739,G__70740,G__70741,G__70742,G__70743,G__70744){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70730);

(invoc_array[(1)] = G__70731);

(invoc_array[(2)] = G__70732);

(invoc_array[(3)] = G__70733);

(invoc_array[(4)] = G__70734);

(invoc_array[(5)] = G__70735);

(invoc_array[(6)] = G__70736);

(invoc_array[(7)] = G__70737);

(invoc_array[(8)] = G__70738);

(invoc_array[(9)] = G__70739);

(invoc_array[(10)] = G__70740);

(invoc_array[(11)] = G__70741);

(invoc_array[(12)] = G__70742);

(invoc_array[(13)] = G__70743);

(invoc_array[vararg_idx] = G__70744);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__70730,G__70731,G__70732,G__70733,G__70734,G__70735,G__70736,G__70737,G__70738,G__70739,G__70740,G__70741,G__70742,G__70743,var_args){
var G__70744 = null;
if (arguments.length > 14) {
var G__71659__i = 0, G__71659__a = new Array(arguments.length -  14);
while (G__71659__i < G__71659__a.length) {G__71659__a[G__71659__i] = arguments[G__71659__i + 14]; ++G__71659__i;}
  G__70744 = new cljs.core.IndexedSeq(G__71659__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__70730,G__70731,G__70732,G__70733,G__70734,G__70735,G__70736,G__70737,G__70738,G__70739,G__70740,G__70741,G__70742,G__70743,G__70744);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__71660){
var G__70730 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70731 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70732 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70733 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70734 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70735 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70736 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70737 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70738 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70739 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70740 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70741 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70742 = cljs.core.first(arglist__71660);
arglist__71660 = cljs.core.next(arglist__71660);
var G__70743 = cljs.core.first(arglist__71660);
var G__70744 = cljs.core.rest(arglist__71660);
return sci$impl$fns$fun_$_arity_14__delegate(G__70730,G__70731,G__70732,G__70733,G__70734,G__70735,G__70736,G__70737,G__70738,G__70739,G__70740,G__70741,G__70742,G__70743,G__70744);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__70780 = cljs.core._nth(params,(0));
var G__70781 = cljs.core._nth(params,(1));
var G__70782 = cljs.core._nth(params,(2));
var G__70783 = cljs.core._nth(params,(3));
var G__70784 = cljs.core._nth(params,(4));
var G__70785 = cljs.core._nth(params,(5));
var G__70786 = cljs.core._nth(params,(6));
var G__70787 = cljs.core._nth(params,(7));
var G__70788 = cljs.core._nth(params,(8));
var G__70789 = cljs.core._nth(params,(9));
var G__70790 = cljs.core._nth(params,(10));
var G__70791 = cljs.core._nth(params,(11));
var G__70792 = cljs.core._nth(params,(12));
var G__70793 = cljs.core._nth(params,(13));
var G__70794 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__70764,G__70765,G__70766,G__70767,G__70768,G__70769,G__70770,G__70771,G__70772,G__70773,G__70774,G__70775,G__70776,G__70777,G__70778,G__70779){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70764);

(invoc_array[(1)] = G__70765);

(invoc_array[(2)] = G__70766);

(invoc_array[(3)] = G__70767);

(invoc_array[(4)] = G__70768);

(invoc_array[(5)] = G__70769);

(invoc_array[(6)] = G__70770);

(invoc_array[(7)] = G__70771);

(invoc_array[(8)] = G__70772);

(invoc_array[(9)] = G__70773);

(invoc_array[(10)] = G__70774);

(invoc_array[(11)] = G__70775);

(invoc_array[(12)] = G__70776);

(invoc_array[(13)] = G__70777);

(invoc_array[(14)] = G__70778);

(invoc_array[vararg_idx] = G__70779);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__70764,G__70765,G__70766,G__70767,G__70768,G__70769,G__70770,G__70771,G__70772,G__70773,G__70774,G__70775,G__70776,G__70777,G__70778,var_args){
var G__70779 = null;
if (arguments.length > 15) {
var G__71667__i = 0, G__71667__a = new Array(arguments.length -  15);
while (G__71667__i < G__71667__a.length) {G__71667__a[G__71667__i] = arguments[G__71667__i + 15]; ++G__71667__i;}
  G__70779 = new cljs.core.IndexedSeq(G__71667__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__70764,G__70765,G__70766,G__70767,G__70768,G__70769,G__70770,G__70771,G__70772,G__70773,G__70774,G__70775,G__70776,G__70777,G__70778,G__70779);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__71668){
var G__70764 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70765 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70766 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70767 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70768 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70769 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70770 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70771 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70772 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70773 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70774 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70775 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70776 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70777 = cljs.core.first(arglist__71668);
arglist__71668 = cljs.core.next(arglist__71668);
var G__70778 = cljs.core.first(arglist__71668);
var G__70779 = cljs.core.rest(arglist__71668);
return sci$impl$fns$fun_$_arity_15__delegate(G__70764,G__70765,G__70766,G__70767,G__70768,G__70769,G__70770,G__70771,G__70772,G__70773,G__70774,G__70775,G__70776,G__70777,G__70778,G__70779);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__70821 = cljs.core._nth(params,(0));
var G__70822 = cljs.core._nth(params,(1));
var G__70823 = cljs.core._nth(params,(2));
var G__70824 = cljs.core._nth(params,(3));
var G__70825 = cljs.core._nth(params,(4));
var G__70826 = cljs.core._nth(params,(5));
var G__70827 = cljs.core._nth(params,(6));
var G__70828 = cljs.core._nth(params,(7));
var G__70829 = cljs.core._nth(params,(8));
var G__70830 = cljs.core._nth(params,(9));
var G__70831 = cljs.core._nth(params,(10));
var G__70832 = cljs.core._nth(params,(11));
var G__70833 = cljs.core._nth(params,(12));
var G__70834 = cljs.core._nth(params,(13));
var G__70835 = cljs.core._nth(params,(14));
var G__70836 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__70804,G__70805,G__70806,G__70807,G__70808,G__70809,G__70810,G__70811,G__70812,G__70813,G__70814,G__70815,G__70816,G__70817,G__70818,G__70819,G__70820){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70804);

(invoc_array[(1)] = G__70805);

(invoc_array[(2)] = G__70806);

(invoc_array[(3)] = G__70807);

(invoc_array[(4)] = G__70808);

(invoc_array[(5)] = G__70809);

(invoc_array[(6)] = G__70810);

(invoc_array[(7)] = G__70811);

(invoc_array[(8)] = G__70812);

(invoc_array[(9)] = G__70813);

(invoc_array[(10)] = G__70814);

(invoc_array[(11)] = G__70815);

(invoc_array[(12)] = G__70816);

(invoc_array[(13)] = G__70817);

(invoc_array[(14)] = G__70818);

(invoc_array[(15)] = G__70819);

(invoc_array[vararg_idx] = G__70820);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__70804,G__70805,G__70806,G__70807,G__70808,G__70809,G__70810,G__70811,G__70812,G__70813,G__70814,G__70815,G__70816,G__70817,G__70818,G__70819,var_args){
var G__70820 = null;
if (arguments.length > 16) {
var G__71674__i = 0, G__71674__a = new Array(arguments.length -  16);
while (G__71674__i < G__71674__a.length) {G__71674__a[G__71674__i] = arguments[G__71674__i + 16]; ++G__71674__i;}
  G__70820 = new cljs.core.IndexedSeq(G__71674__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__70804,G__70805,G__70806,G__70807,G__70808,G__70809,G__70810,G__70811,G__70812,G__70813,G__70814,G__70815,G__70816,G__70817,G__70818,G__70819,G__70820);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__71675){
var G__70804 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70805 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70806 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70807 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70808 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70809 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70810 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70811 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70812 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70813 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70814 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70815 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70816 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70817 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70818 = cljs.core.first(arglist__71675);
arglist__71675 = cljs.core.next(arglist__71675);
var G__70819 = cljs.core.first(arglist__71675);
var G__70820 = cljs.core.rest(arglist__71675);
return sci$impl$fns$fun_$_arity_16__delegate(G__70804,G__70805,G__70806,G__70807,G__70808,G__70809,G__70810,G__70811,G__70812,G__70813,G__70814,G__70815,G__70816,G__70817,G__70818,G__70819,G__70820);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__70861 = cljs.core._nth(params,(0));
var G__70862 = cljs.core._nth(params,(1));
var G__70863 = cljs.core._nth(params,(2));
var G__70864 = cljs.core._nth(params,(3));
var G__70865 = cljs.core._nth(params,(4));
var G__70866 = cljs.core._nth(params,(5));
var G__70867 = cljs.core._nth(params,(6));
var G__70868 = cljs.core._nth(params,(7));
var G__70869 = cljs.core._nth(params,(8));
var G__70870 = cljs.core._nth(params,(9));
var G__70871 = cljs.core._nth(params,(10));
var G__70872 = cljs.core._nth(params,(11));
var G__70873 = cljs.core._nth(params,(12));
var G__70874 = cljs.core._nth(params,(13));
var G__70875 = cljs.core._nth(params,(14));
var G__70876 = cljs.core._nth(params,(15));
var G__70877 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__70843,G__70844,G__70845,G__70846,G__70847,G__70848,G__70849,G__70850,G__70851,G__70852,G__70853,G__70854,G__70855,G__70856,G__70857,G__70858,G__70859,G__70860){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70843);

(invoc_array[(1)] = G__70844);

(invoc_array[(2)] = G__70845);

(invoc_array[(3)] = G__70846);

(invoc_array[(4)] = G__70847);

(invoc_array[(5)] = G__70848);

(invoc_array[(6)] = G__70849);

(invoc_array[(7)] = G__70850);

(invoc_array[(8)] = G__70851);

(invoc_array[(9)] = G__70852);

(invoc_array[(10)] = G__70853);

(invoc_array[(11)] = G__70854);

(invoc_array[(12)] = G__70855);

(invoc_array[(13)] = G__70856);

(invoc_array[(14)] = G__70857);

(invoc_array[(15)] = G__70858);

(invoc_array[(16)] = G__70859);

(invoc_array[vararg_idx] = G__70860);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__70843,G__70844,G__70845,G__70846,G__70847,G__70848,G__70849,G__70850,G__70851,G__70852,G__70853,G__70854,G__70855,G__70856,G__70857,G__70858,G__70859,var_args){
var G__70860 = null;
if (arguments.length > 17) {
var G__71683__i = 0, G__71683__a = new Array(arguments.length -  17);
while (G__71683__i < G__71683__a.length) {G__71683__a[G__71683__i] = arguments[G__71683__i + 17]; ++G__71683__i;}
  G__70860 = new cljs.core.IndexedSeq(G__71683__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__70843,G__70844,G__70845,G__70846,G__70847,G__70848,G__70849,G__70850,G__70851,G__70852,G__70853,G__70854,G__70855,G__70856,G__70857,G__70858,G__70859,G__70860);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__71684){
var G__70843 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70844 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70845 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70846 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70847 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70848 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70849 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70850 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70851 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70852 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70853 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70854 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70855 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70856 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70857 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70858 = cljs.core.first(arglist__71684);
arglist__71684 = cljs.core.next(arglist__71684);
var G__70859 = cljs.core.first(arglist__71684);
var G__70860 = cljs.core.rest(arglist__71684);
return sci$impl$fns$fun_$_arity_17__delegate(G__70843,G__70844,G__70845,G__70846,G__70847,G__70848,G__70849,G__70850,G__70851,G__70852,G__70853,G__70854,G__70855,G__70856,G__70857,G__70858,G__70859,G__70860);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__70900 = cljs.core._nth(params,(0));
var G__70901 = cljs.core._nth(params,(1));
var G__70902 = cljs.core._nth(params,(2));
var G__70903 = cljs.core._nth(params,(3));
var G__70904 = cljs.core._nth(params,(4));
var G__70905 = cljs.core._nth(params,(5));
var G__70906 = cljs.core._nth(params,(6));
var G__70907 = cljs.core._nth(params,(7));
var G__70908 = cljs.core._nth(params,(8));
var G__70909 = cljs.core._nth(params,(9));
var G__70910 = cljs.core._nth(params,(10));
var G__70911 = cljs.core._nth(params,(11));
var G__70912 = cljs.core._nth(params,(12));
var G__70913 = cljs.core._nth(params,(13));
var G__70914 = cljs.core._nth(params,(14));
var G__70915 = cljs.core._nth(params,(15));
var G__70916 = cljs.core._nth(params,(16));
var G__70917 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__70881,G__70882,G__70883,G__70884,G__70885,G__70886,G__70887,G__70888,G__70889,G__70890,G__70891,G__70892,G__70893,G__70894,G__70895,G__70896,G__70897,G__70898,G__70899){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70881);

(invoc_array[(1)] = G__70882);

(invoc_array[(2)] = G__70883);

(invoc_array[(3)] = G__70884);

(invoc_array[(4)] = G__70885);

(invoc_array[(5)] = G__70886);

(invoc_array[(6)] = G__70887);

(invoc_array[(7)] = G__70888);

(invoc_array[(8)] = G__70889);

(invoc_array[(9)] = G__70890);

(invoc_array[(10)] = G__70891);

(invoc_array[(11)] = G__70892);

(invoc_array[(12)] = G__70893);

(invoc_array[(13)] = G__70894);

(invoc_array[(14)] = G__70895);

(invoc_array[(15)] = G__70896);

(invoc_array[(16)] = G__70897);

(invoc_array[(17)] = G__70898);

(invoc_array[vararg_idx] = G__70899);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__70881,G__70882,G__70883,G__70884,G__70885,G__70886,G__70887,G__70888,G__70889,G__70890,G__70891,G__70892,G__70893,G__70894,G__70895,G__70896,G__70897,G__70898,var_args){
var G__70899 = null;
if (arguments.length > 18) {
var G__71688__i = 0, G__71688__a = new Array(arguments.length -  18);
while (G__71688__i < G__71688__a.length) {G__71688__a[G__71688__i] = arguments[G__71688__i + 18]; ++G__71688__i;}
  G__70899 = new cljs.core.IndexedSeq(G__71688__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__70881,G__70882,G__70883,G__70884,G__70885,G__70886,G__70887,G__70888,G__70889,G__70890,G__70891,G__70892,G__70893,G__70894,G__70895,G__70896,G__70897,G__70898,G__70899);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__71690){
var G__70881 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70882 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70883 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70884 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70885 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70886 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70887 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70888 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70889 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70890 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70891 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70892 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70893 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70894 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70895 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70896 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70897 = cljs.core.first(arglist__71690);
arglist__71690 = cljs.core.next(arglist__71690);
var G__70898 = cljs.core.first(arglist__71690);
var G__70899 = cljs.core.rest(arglist__71690);
return sci$impl$fns$fun_$_arity_18__delegate(G__70881,G__70882,G__70883,G__70884,G__70885,G__70886,G__70887,G__70888,G__70889,G__70890,G__70891,G__70892,G__70893,G__70894,G__70895,G__70896,G__70897,G__70898,G__70899);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__70947 = cljs.core._nth(params,(0));
var G__70948 = cljs.core._nth(params,(1));
var G__70949 = cljs.core._nth(params,(2));
var G__70950 = cljs.core._nth(params,(3));
var G__70951 = cljs.core._nth(params,(4));
var G__70952 = cljs.core._nth(params,(5));
var G__70953 = cljs.core._nth(params,(6));
var G__70954 = cljs.core._nth(params,(7));
var G__70955 = cljs.core._nth(params,(8));
var G__70956 = cljs.core._nth(params,(9));
var G__70957 = cljs.core._nth(params,(10));
var G__70958 = cljs.core._nth(params,(11));
var G__70959 = cljs.core._nth(params,(12));
var G__70960 = cljs.core._nth(params,(13));
var G__70961 = cljs.core._nth(params,(14));
var G__70962 = cljs.core._nth(params,(15));
var G__70963 = cljs.core._nth(params,(16));
var G__70964 = cljs.core._nth(params,(17));
var G__70965 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__70927,G__70928,G__70929,G__70930,G__70931,G__70932,G__70933,G__70934,G__70935,G__70936,G__70937,G__70938,G__70939,G__70940,G__70941,G__70942,G__70943,G__70944,G__70945,G__70946){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70927);

(invoc_array[(1)] = G__70928);

(invoc_array[(2)] = G__70929);

(invoc_array[(3)] = G__70930);

(invoc_array[(4)] = G__70931);

(invoc_array[(5)] = G__70932);

(invoc_array[(6)] = G__70933);

(invoc_array[(7)] = G__70934);

(invoc_array[(8)] = G__70935);

(invoc_array[(9)] = G__70936);

(invoc_array[(10)] = G__70937);

(invoc_array[(11)] = G__70938);

(invoc_array[(12)] = G__70939);

(invoc_array[(13)] = G__70940);

(invoc_array[(14)] = G__70941);

(invoc_array[(15)] = G__70942);

(invoc_array[(16)] = G__70943);

(invoc_array[(17)] = G__70944);

(invoc_array[(18)] = G__70945);

(invoc_array[vararg_idx] = G__70946);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__70927,G__70928,G__70929,G__70930,G__70931,G__70932,G__70933,G__70934,G__70935,G__70936,G__70937,G__70938,G__70939,G__70940,G__70941,G__70942,G__70943,G__70944,G__70945,var_args){
var G__70946 = null;
if (arguments.length > 19) {
var G__71696__i = 0, G__71696__a = new Array(arguments.length -  19);
while (G__71696__i < G__71696__a.length) {G__71696__a[G__71696__i] = arguments[G__71696__i + 19]; ++G__71696__i;}
  G__70946 = new cljs.core.IndexedSeq(G__71696__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__70927,G__70928,G__70929,G__70930,G__70931,G__70932,G__70933,G__70934,G__70935,G__70936,G__70937,G__70938,G__70939,G__70940,G__70941,G__70942,G__70943,G__70944,G__70945,G__70946);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__71697){
var G__70927 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70928 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70929 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70930 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70931 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70932 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70933 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70934 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70935 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70936 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70937 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70938 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70939 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70940 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70941 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70942 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70943 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70944 = cljs.core.first(arglist__71697);
arglist__71697 = cljs.core.next(arglist__71697);
var G__70945 = cljs.core.first(arglist__71697);
var G__70946 = cljs.core.rest(arglist__71697);
return sci$impl$fns$fun_$_arity_19__delegate(G__70927,G__70928,G__70929,G__70930,G__70931,G__70932,G__70933,G__70934,G__70935,G__70936,G__70937,G__70938,G__70939,G__70940,G__70941,G__70942,G__70943,G__70944,G__70945,G__70946);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__70992 = cljs.core._nth(params,(0));
var G__70993 = cljs.core._nth(params,(1));
var G__70994 = cljs.core._nth(params,(2));
var G__70995 = cljs.core._nth(params,(3));
var G__70996 = cljs.core._nth(params,(4));
var G__70997 = cljs.core._nth(params,(5));
var G__70998 = cljs.core._nth(params,(6));
var G__70999 = cljs.core._nth(params,(7));
var G__71000 = cljs.core._nth(params,(8));
var G__71001 = cljs.core._nth(params,(9));
var G__71002 = cljs.core._nth(params,(10));
var G__71003 = cljs.core._nth(params,(11));
var G__71004 = cljs.core._nth(params,(12));
var G__71005 = cljs.core._nth(params,(13));
var G__71006 = cljs.core._nth(params,(14));
var G__71007 = cljs.core._nth(params,(15));
var G__71008 = cljs.core._nth(params,(16));
var G__71009 = cljs.core._nth(params,(17));
var G__71010 = cljs.core._nth(params,(18));
var G__71011 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__70971,G__70972,G__70973,G__70974,G__70975,G__70976,G__70977,G__70978,G__70979,G__70980,G__70981,G__70982,G__70983,G__70984,G__70985,G__70986,G__70987,G__70988,G__70989,G__70990,G__70991){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__70971);

(invoc_array[(1)] = G__70972);

(invoc_array[(2)] = G__70973);

(invoc_array[(3)] = G__70974);

(invoc_array[(4)] = G__70975);

(invoc_array[(5)] = G__70976);

(invoc_array[(6)] = G__70977);

(invoc_array[(7)] = G__70978);

(invoc_array[(8)] = G__70979);

(invoc_array[(9)] = G__70980);

(invoc_array[(10)] = G__70981);

(invoc_array[(11)] = G__70982);

(invoc_array[(12)] = G__70983);

(invoc_array[(13)] = G__70984);

(invoc_array[(14)] = G__70985);

(invoc_array[(15)] = G__70986);

(invoc_array[(16)] = G__70987);

(invoc_array[(17)] = G__70988);

(invoc_array[(18)] = G__70989);

(invoc_array[(19)] = G__70990);

(invoc_array[vararg_idx] = G__70991);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__70971,G__70972,G__70973,G__70974,G__70975,G__70976,G__70977,G__70978,G__70979,G__70980,G__70981,G__70982,G__70983,G__70984,G__70985,G__70986,G__70987,G__70988,G__70989,G__70990,var_args){
var G__70991 = null;
if (arguments.length > 20) {
var G__71709__i = 0, G__71709__a = new Array(arguments.length -  20);
while (G__71709__i < G__71709__a.length) {G__71709__a[G__71709__i] = arguments[G__71709__i + 20]; ++G__71709__i;}
  G__70991 = new cljs.core.IndexedSeq(G__71709__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__70971,G__70972,G__70973,G__70974,G__70975,G__70976,G__70977,G__70978,G__70979,G__70980,G__70981,G__70982,G__70983,G__70984,G__70985,G__70986,G__70987,G__70988,G__70989,G__70990,G__70991);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__71711){
var G__70971 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70972 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70973 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70974 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70975 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70976 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70977 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70978 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70979 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70980 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70981 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70982 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70983 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70984 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70985 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70986 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70987 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70988 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70989 = cljs.core.first(arglist__71711);
arglist__71711 = cljs.core.next(arglist__71711);
var G__70990 = cljs.core.first(arglist__71711);
var G__70991 = cljs.core.rest(arglist__71711);
return sci$impl$fns$fun_$_arity_20__delegate(G__70971,G__70972,G__70973,G__70974,G__70975,G__70976,G__70977,G__70978,G__70979,G__70980,G__70981,G__70982,G__70983,G__70984,G__70985,G__70986,G__70987,G__70988,G__70989,G__70990,G__70991);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70453)].join('')));

}
})():(function (){var G__71015 = (fixed_arity | (0));
switch (G__71015) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__69422__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69422__auto__)){
continue;
} else {
return ret__69422__auto__;
}
break;
}
});

break;
case (1):
var G__71019 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__71018){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71018);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (2):
var G__71027 = cljs.core._nth(params,(0));
var G__71028 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__71025,G__71026){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71025);

(invoc_array[(1)] = G__71026);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (3):
var G__71033 = cljs.core._nth(params,(0));
var G__71034 = cljs.core._nth(params,(1));
var G__71035 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__71030,G__71031,G__71032){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71030);

(invoc_array[(1)] = G__71031);

(invoc_array[(2)] = G__71032);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (4):
var G__71044 = cljs.core._nth(params,(0));
var G__71045 = cljs.core._nth(params,(1));
var G__71046 = cljs.core._nth(params,(2));
var G__71047 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__71040,G__71041,G__71042,G__71043){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71040);

(invoc_array[(1)] = G__71041);

(invoc_array[(2)] = G__71042);

(invoc_array[(3)] = G__71043);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (5):
var G__71054 = cljs.core._nth(params,(0));
var G__71055 = cljs.core._nth(params,(1));
var G__71056 = cljs.core._nth(params,(2));
var G__71057 = cljs.core._nth(params,(3));
var G__71058 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__71049,G__71050,G__71051,G__71052,G__71053){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71049);

(invoc_array[(1)] = G__71050);

(invoc_array[(2)] = G__71051);

(invoc_array[(3)] = G__71052);

(invoc_array[(4)] = G__71053);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (6):
var G__71067 = cljs.core._nth(params,(0));
var G__71068 = cljs.core._nth(params,(1));
var G__71069 = cljs.core._nth(params,(2));
var G__71070 = cljs.core._nth(params,(3));
var G__71071 = cljs.core._nth(params,(4));
var G__71072 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__71061,G__71062,G__71063,G__71064,G__71065,G__71066){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71061);

(invoc_array[(1)] = G__71062);

(invoc_array[(2)] = G__71063);

(invoc_array[(3)] = G__71064);

(invoc_array[(4)] = G__71065);

(invoc_array[(5)] = G__71066);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (7):
var G__71093 = cljs.core._nth(params,(0));
var G__71094 = cljs.core._nth(params,(1));
var G__71095 = cljs.core._nth(params,(2));
var G__71096 = cljs.core._nth(params,(3));
var G__71097 = cljs.core._nth(params,(4));
var G__71098 = cljs.core._nth(params,(5));
var G__71099 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__71086,G__71087,G__71088,G__71089,G__71090,G__71091,G__71092){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71086);

(invoc_array[(1)] = G__71087);

(invoc_array[(2)] = G__71088);

(invoc_array[(3)] = G__71089);

(invoc_array[(4)] = G__71090);

(invoc_array[(5)] = G__71091);

(invoc_array[(6)] = G__71092);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (8):
var G__71124 = cljs.core._nth(params,(0));
var G__71125 = cljs.core._nth(params,(1));
var G__71126 = cljs.core._nth(params,(2));
var G__71127 = cljs.core._nth(params,(3));
var G__71128 = cljs.core._nth(params,(4));
var G__71129 = cljs.core._nth(params,(5));
var G__71130 = cljs.core._nth(params,(6));
var G__71131 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__71116,G__71117,G__71118,G__71119,G__71120,G__71121,G__71122,G__71123){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71116);

(invoc_array[(1)] = G__71117);

(invoc_array[(2)] = G__71118);

(invoc_array[(3)] = G__71119);

(invoc_array[(4)] = G__71120);

(invoc_array[(5)] = G__71121);

(invoc_array[(6)] = G__71122);

(invoc_array[(7)] = G__71123);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (9):
var G__71148 = cljs.core._nth(params,(0));
var G__71149 = cljs.core._nth(params,(1));
var G__71150 = cljs.core._nth(params,(2));
var G__71151 = cljs.core._nth(params,(3));
var G__71152 = cljs.core._nth(params,(4));
var G__71153 = cljs.core._nth(params,(5));
var G__71154 = cljs.core._nth(params,(6));
var G__71155 = cljs.core._nth(params,(7));
var G__71156 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__71139,G__71140,G__71141,G__71142,G__71143,G__71144,G__71145,G__71146,G__71147){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71139);

(invoc_array[(1)] = G__71140);

(invoc_array[(2)] = G__71141);

(invoc_array[(3)] = G__71142);

(invoc_array[(4)] = G__71143);

(invoc_array[(5)] = G__71144);

(invoc_array[(6)] = G__71145);

(invoc_array[(7)] = G__71146);

(invoc_array[(8)] = G__71147);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (10):
var G__71176 = cljs.core._nth(params,(0));
var G__71177 = cljs.core._nth(params,(1));
var G__71178 = cljs.core._nth(params,(2));
var G__71179 = cljs.core._nth(params,(3));
var G__71180 = cljs.core._nth(params,(4));
var G__71181 = cljs.core._nth(params,(5));
var G__71182 = cljs.core._nth(params,(6));
var G__71183 = cljs.core._nth(params,(7));
var G__71184 = cljs.core._nth(params,(8));
var G__71185 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__71166,G__71167,G__71168,G__71169,G__71170,G__71171,G__71172,G__71173,G__71174,G__71175){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71166);

(invoc_array[(1)] = G__71167);

(invoc_array[(2)] = G__71168);

(invoc_array[(3)] = G__71169);

(invoc_array[(4)] = G__71170);

(invoc_array[(5)] = G__71171);

(invoc_array[(6)] = G__71172);

(invoc_array[(7)] = G__71173);

(invoc_array[(8)] = G__71174);

(invoc_array[(9)] = G__71175);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (11):
var G__71199 = cljs.core._nth(params,(0));
var G__71200 = cljs.core._nth(params,(1));
var G__71201 = cljs.core._nth(params,(2));
var G__71202 = cljs.core._nth(params,(3));
var G__71203 = cljs.core._nth(params,(4));
var G__71204 = cljs.core._nth(params,(5));
var G__71205 = cljs.core._nth(params,(6));
var G__71206 = cljs.core._nth(params,(7));
var G__71207 = cljs.core._nth(params,(8));
var G__71208 = cljs.core._nth(params,(9));
var G__71209 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__71188,G__71189,G__71190,G__71191,G__71192,G__71193,G__71194,G__71195,G__71196,G__71197,G__71198){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71188);

(invoc_array[(1)] = G__71189);

(invoc_array[(2)] = G__71190);

(invoc_array[(3)] = G__71191);

(invoc_array[(4)] = G__71192);

(invoc_array[(5)] = G__71193);

(invoc_array[(6)] = G__71194);

(invoc_array[(7)] = G__71195);

(invoc_array[(8)] = G__71196);

(invoc_array[(9)] = G__71197);

(invoc_array[(10)] = G__71198);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (12):
var G__71224 = cljs.core._nth(params,(0));
var G__71225 = cljs.core._nth(params,(1));
var G__71226 = cljs.core._nth(params,(2));
var G__71227 = cljs.core._nth(params,(3));
var G__71228 = cljs.core._nth(params,(4));
var G__71229 = cljs.core._nth(params,(5));
var G__71230 = cljs.core._nth(params,(6));
var G__71231 = cljs.core._nth(params,(7));
var G__71232 = cljs.core._nth(params,(8));
var G__71233 = cljs.core._nth(params,(9));
var G__71234 = cljs.core._nth(params,(10));
var G__71235 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__71212,G__71213,G__71214,G__71215,G__71216,G__71217,G__71218,G__71219,G__71220,G__71221,G__71222,G__71223){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71212);

(invoc_array[(1)] = G__71213);

(invoc_array[(2)] = G__71214);

(invoc_array[(3)] = G__71215);

(invoc_array[(4)] = G__71216);

(invoc_array[(5)] = G__71217);

(invoc_array[(6)] = G__71218);

(invoc_array[(7)] = G__71219);

(invoc_array[(8)] = G__71220);

(invoc_array[(9)] = G__71221);

(invoc_array[(10)] = G__71222);

(invoc_array[(11)] = G__71223);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (13):
var G__71255 = cljs.core._nth(params,(0));
var G__71256 = cljs.core._nth(params,(1));
var G__71257 = cljs.core._nth(params,(2));
var G__71258 = cljs.core._nth(params,(3));
var G__71259 = cljs.core._nth(params,(4));
var G__71260 = cljs.core._nth(params,(5));
var G__71261 = cljs.core._nth(params,(6));
var G__71262 = cljs.core._nth(params,(7));
var G__71263 = cljs.core._nth(params,(8));
var G__71264 = cljs.core._nth(params,(9));
var G__71265 = cljs.core._nth(params,(10));
var G__71266 = cljs.core._nth(params,(11));
var G__71267 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__71242,G__71243,G__71244,G__71245,G__71246,G__71247,G__71248,G__71249,G__71250,G__71251,G__71252,G__71253,G__71254){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71242);

(invoc_array[(1)] = G__71243);

(invoc_array[(2)] = G__71244);

(invoc_array[(3)] = G__71245);

(invoc_array[(4)] = G__71246);

(invoc_array[(5)] = G__71247);

(invoc_array[(6)] = G__71248);

(invoc_array[(7)] = G__71249);

(invoc_array[(8)] = G__71250);

(invoc_array[(9)] = G__71251);

(invoc_array[(10)] = G__71252);

(invoc_array[(11)] = G__71253);

(invoc_array[(12)] = G__71254);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (14):
var G__71289 = cljs.core._nth(params,(0));
var G__71290 = cljs.core._nth(params,(1));
var G__71291 = cljs.core._nth(params,(2));
var G__71292 = cljs.core._nth(params,(3));
var G__71293 = cljs.core._nth(params,(4));
var G__71294 = cljs.core._nth(params,(5));
var G__71295 = cljs.core._nth(params,(6));
var G__71296 = cljs.core._nth(params,(7));
var G__71297 = cljs.core._nth(params,(8));
var G__71298 = cljs.core._nth(params,(9));
var G__71299 = cljs.core._nth(params,(10));
var G__71300 = cljs.core._nth(params,(11));
var G__71301 = cljs.core._nth(params,(12));
var G__71302 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__71274,G__71275,G__71276,G__71277,G__71278,G__71279,G__71280,G__71281,G__71282,G__71283,G__71285,G__71286,G__71287,G__71288){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71274);

(invoc_array[(1)] = G__71275);

(invoc_array[(2)] = G__71276);

(invoc_array[(3)] = G__71277);

(invoc_array[(4)] = G__71278);

(invoc_array[(5)] = G__71279);

(invoc_array[(6)] = G__71280);

(invoc_array[(7)] = G__71281);

(invoc_array[(8)] = G__71282);

(invoc_array[(9)] = G__71283);

(invoc_array[(10)] = G__71285);

(invoc_array[(11)] = G__71286);

(invoc_array[(12)] = G__71287);

(invoc_array[(13)] = G__71288);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (15):
var G__71327 = cljs.core._nth(params,(0));
var G__71328 = cljs.core._nth(params,(1));
var G__71329 = cljs.core._nth(params,(2));
var G__71330 = cljs.core._nth(params,(3));
var G__71331 = cljs.core._nth(params,(4));
var G__71332 = cljs.core._nth(params,(5));
var G__71333 = cljs.core._nth(params,(6));
var G__71334 = cljs.core._nth(params,(7));
var G__71335 = cljs.core._nth(params,(8));
var G__71336 = cljs.core._nth(params,(9));
var G__71337 = cljs.core._nth(params,(10));
var G__71338 = cljs.core._nth(params,(11));
var G__71339 = cljs.core._nth(params,(12));
var G__71340 = cljs.core._nth(params,(13));
var G__71341 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__71312,G__71313,G__71314,G__71315,G__71316,G__71317,G__71318,G__71319,G__71320,G__71321,G__71322,G__71323,G__71324,G__71325,G__71326){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71312);

(invoc_array[(1)] = G__71313);

(invoc_array[(2)] = G__71314);

(invoc_array[(3)] = G__71315);

(invoc_array[(4)] = G__71316);

(invoc_array[(5)] = G__71317);

(invoc_array[(6)] = G__71318);

(invoc_array[(7)] = G__71319);

(invoc_array[(8)] = G__71320);

(invoc_array[(9)] = G__71321);

(invoc_array[(10)] = G__71322);

(invoc_array[(11)] = G__71323);

(invoc_array[(12)] = G__71324);

(invoc_array[(13)] = G__71325);

(invoc_array[(14)] = G__71326);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (16):
var G__71361 = cljs.core._nth(params,(0));
var G__71362 = cljs.core._nth(params,(1));
var G__71363 = cljs.core._nth(params,(2));
var G__71364 = cljs.core._nth(params,(3));
var G__71365 = cljs.core._nth(params,(4));
var G__71366 = cljs.core._nth(params,(5));
var G__71367 = cljs.core._nth(params,(6));
var G__71368 = cljs.core._nth(params,(7));
var G__71369 = cljs.core._nth(params,(8));
var G__71370 = cljs.core._nth(params,(9));
var G__71371 = cljs.core._nth(params,(10));
var G__71372 = cljs.core._nth(params,(11));
var G__71373 = cljs.core._nth(params,(12));
var G__71374 = cljs.core._nth(params,(13));
var G__71375 = cljs.core._nth(params,(14));
var G__71376 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__71345,G__71346,G__71347,G__71348,G__71349,G__71350,G__71351,G__71352,G__71353,G__71354,G__71355,G__71356,G__71357,G__71358,G__71359,G__71360){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71345);

(invoc_array[(1)] = G__71346);

(invoc_array[(2)] = G__71347);

(invoc_array[(3)] = G__71348);

(invoc_array[(4)] = G__71349);

(invoc_array[(5)] = G__71350);

(invoc_array[(6)] = G__71351);

(invoc_array[(7)] = G__71352);

(invoc_array[(8)] = G__71353);

(invoc_array[(9)] = G__71354);

(invoc_array[(10)] = G__71355);

(invoc_array[(11)] = G__71356);

(invoc_array[(12)] = G__71357);

(invoc_array[(13)] = G__71358);

(invoc_array[(14)] = G__71359);

(invoc_array[(15)] = G__71360);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (17):
var G__71399 = cljs.core._nth(params,(0));
var G__71400 = cljs.core._nth(params,(1));
var G__71401 = cljs.core._nth(params,(2));
var G__71402 = cljs.core._nth(params,(3));
var G__71403 = cljs.core._nth(params,(4));
var G__71404 = cljs.core._nth(params,(5));
var G__71405 = cljs.core._nth(params,(6));
var G__71406 = cljs.core._nth(params,(7));
var G__71407 = cljs.core._nth(params,(8));
var G__71408 = cljs.core._nth(params,(9));
var G__71409 = cljs.core._nth(params,(10));
var G__71410 = cljs.core._nth(params,(11));
var G__71411 = cljs.core._nth(params,(12));
var G__71412 = cljs.core._nth(params,(13));
var G__71413 = cljs.core._nth(params,(14));
var G__71414 = cljs.core._nth(params,(15));
var G__71415 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__71382,G__71383,G__71384,G__71385,G__71386,G__71387,G__71388,G__71389,G__71390,G__71391,G__71392,G__71393,G__71394,G__71395,G__71396,G__71397,G__71398){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71382);

(invoc_array[(1)] = G__71383);

(invoc_array[(2)] = G__71384);

(invoc_array[(3)] = G__71385);

(invoc_array[(4)] = G__71386);

(invoc_array[(5)] = G__71387);

(invoc_array[(6)] = G__71388);

(invoc_array[(7)] = G__71389);

(invoc_array[(8)] = G__71390);

(invoc_array[(9)] = G__71391);

(invoc_array[(10)] = G__71392);

(invoc_array[(11)] = G__71393);

(invoc_array[(12)] = G__71394);

(invoc_array[(13)] = G__71395);

(invoc_array[(14)] = G__71396);

(invoc_array[(15)] = G__71397);

(invoc_array[(16)] = G__71398);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (18):
var G__71442 = cljs.core._nth(params,(0));
var G__71443 = cljs.core._nth(params,(1));
var G__71444 = cljs.core._nth(params,(2));
var G__71445 = cljs.core._nth(params,(3));
var G__71446 = cljs.core._nth(params,(4));
var G__71447 = cljs.core._nth(params,(5));
var G__71448 = cljs.core._nth(params,(6));
var G__71449 = cljs.core._nth(params,(7));
var G__71450 = cljs.core._nth(params,(8));
var G__71451 = cljs.core._nth(params,(9));
var G__71452 = cljs.core._nth(params,(10));
var G__71453 = cljs.core._nth(params,(11));
var G__71454 = cljs.core._nth(params,(12));
var G__71455 = cljs.core._nth(params,(13));
var G__71456 = cljs.core._nth(params,(14));
var G__71457 = cljs.core._nth(params,(15));
var G__71458 = cljs.core._nth(params,(16));
var G__71459 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__71424,G__71425,G__71426,G__71427,G__71428,G__71429,G__71430,G__71431,G__71432,G__71433,G__71434,G__71435,G__71436,G__71437,G__71438,G__71439,G__71440,G__71441){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71424);

(invoc_array[(1)] = G__71425);

(invoc_array[(2)] = G__71426);

(invoc_array[(3)] = G__71427);

(invoc_array[(4)] = G__71428);

(invoc_array[(5)] = G__71429);

(invoc_array[(6)] = G__71430);

(invoc_array[(7)] = G__71431);

(invoc_array[(8)] = G__71432);

(invoc_array[(9)] = G__71433);

(invoc_array[(10)] = G__71434);

(invoc_array[(11)] = G__71435);

(invoc_array[(12)] = G__71436);

(invoc_array[(13)] = G__71437);

(invoc_array[(14)] = G__71438);

(invoc_array[(15)] = G__71439);

(invoc_array[(16)] = G__71440);

(invoc_array[(17)] = G__71441);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (19):
var G__71485 = cljs.core._nth(params,(0));
var G__71486 = cljs.core._nth(params,(1));
var G__71487 = cljs.core._nth(params,(2));
var G__71488 = cljs.core._nth(params,(3));
var G__71489 = cljs.core._nth(params,(4));
var G__71490 = cljs.core._nth(params,(5));
var G__71491 = cljs.core._nth(params,(6));
var G__71492 = cljs.core._nth(params,(7));
var G__71493 = cljs.core._nth(params,(8));
var G__71494 = cljs.core._nth(params,(9));
var G__71495 = cljs.core._nth(params,(10));
var G__71496 = cljs.core._nth(params,(11));
var G__71497 = cljs.core._nth(params,(12));
var G__71498 = cljs.core._nth(params,(13));
var G__71499 = cljs.core._nth(params,(14));
var G__71500 = cljs.core._nth(params,(15));
var G__71501 = cljs.core._nth(params,(16));
var G__71502 = cljs.core._nth(params,(17));
var G__71503 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__71466,G__71467,G__71468,G__71469,G__71470,G__71471,G__71472,G__71473,G__71474,G__71475,G__71476,G__71477,G__71478,G__71479,G__71480,G__71481,G__71482,G__71483,G__71484){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71466);

(invoc_array[(1)] = G__71467);

(invoc_array[(2)] = G__71468);

(invoc_array[(3)] = G__71469);

(invoc_array[(4)] = G__71470);

(invoc_array[(5)] = G__71471);

(invoc_array[(6)] = G__71472);

(invoc_array[(7)] = G__71473);

(invoc_array[(8)] = G__71474);

(invoc_array[(9)] = G__71475);

(invoc_array[(10)] = G__71476);

(invoc_array[(11)] = G__71477);

(invoc_array[(12)] = G__71478);

(invoc_array[(13)] = G__71479);

(invoc_array[(14)] = G__71480);

(invoc_array[(15)] = G__71481);

(invoc_array[(16)] = G__71482);

(invoc_array[(17)] = G__71483);

(invoc_array[(18)] = G__71484);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
case (20):
var G__71527 = cljs.core._nth(params,(0));
var G__71528 = cljs.core._nth(params,(1));
var G__71529 = cljs.core._nth(params,(2));
var G__71530 = cljs.core._nth(params,(3));
var G__71531 = cljs.core._nth(params,(4));
var G__71532 = cljs.core._nth(params,(5));
var G__71533 = cljs.core._nth(params,(6));
var G__71534 = cljs.core._nth(params,(7));
var G__71535 = cljs.core._nth(params,(8));
var G__71536 = cljs.core._nth(params,(9));
var G__71537 = cljs.core._nth(params,(10));
var G__71538 = cljs.core._nth(params,(11));
var G__71539 = cljs.core._nth(params,(12));
var G__71540 = cljs.core._nth(params,(13));
var G__71541 = cljs.core._nth(params,(14));
var G__71542 = cljs.core._nth(params,(15));
var G__71543 = cljs.core._nth(params,(16));
var G__71544 = cljs.core._nth(params,(17));
var G__71545 = cljs.core._nth(params,(18));
var G__71546 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__71507,G__71508,G__71509,G__71510,G__71511,G__71512,G__71513,G__71514,G__71515,G__71516,G__71517,G__71518,G__71519,G__71520,G__71521,G__71522,G__71523,G__71524,G__71525,G__71526){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71507);

(invoc_array[(1)] = G__71508);

(invoc_array[(2)] = G__71509);

(invoc_array[(3)] = G__71510);

(invoc_array[(4)] = G__71511);

(invoc_array[(5)] = G__71512);

(invoc_array[(6)] = G__71513);

(invoc_array[(7)] = G__71514);

(invoc_array[(8)] = G__71515);

(invoc_array[(9)] = G__71516);

(invoc_array[(10)] = G__71517);

(invoc_array[(11)] = G__71518);

(invoc_array[(12)] = G__71519);

(invoc_array[(13)] = G__71520);

(invoc_array[(14)] = G__71521);

(invoc_array[(15)] = G__71522);

(invoc_array[(16)] = G__71523);

(invoc_array[(17)] = G__71524);

(invoc_array[(18)] = G__71525);

(invoc_array[(19)] = G__71526);

while(true){
var ret__69423__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__69423__auto__)){
continue;
} else {
return ret__69423__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71015)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__71763__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5751__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__71763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71765__i = 0, G__71765__a = new Array(arguments.length -  0);
while (G__71765__i < G__71765__a.length) {G__71765__a[G__71765__i] = arguments[G__71765__i + 0]; ++G__71765__i;}
  args = new cljs.core.IndexedSeq(G__71765__a,0,null);
} 
return G__71763__delegate.call(this,args);};
G__71763.cljs$lang$maxFixedArity = 0;
G__71763.cljs$lang$applyTo = (function (arglist__71766){
var args = cljs.core.seq(arglist__71766);
return G__71763__delegate(args);
});
G__71763.cljs$core$IFn$_invoke$arity$variadic = G__71763__delegate;
return G__71763;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__71564_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__71564_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
