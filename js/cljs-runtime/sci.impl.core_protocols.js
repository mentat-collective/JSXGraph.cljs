goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67852 = cljs.core.get_global_hierarchy;
return (fexpr__67852.cljs$core$IFn$_invoke$arity$0 ? fexpr__67852.cljs$core$IFn$_invoke$arity$0() : fexpr__67852.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__67853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__67853.cljs$core$IFn$_invoke$arity$1 ? fexpr__67853.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__67853.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.lang.__GT_Namespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67868 = cljs.core.get_global_hierarchy;
return (fexpr__67868.cljs$core$IFn$_invoke$arity$0 ? fexpr__67868.cljs$core$IFn$_invoke$arity$0() : fexpr__67868.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67869 = cljs.core.get_global_hierarchy;
return (fexpr__67869.cljs$core$IFn$_invoke$arity$0 ? fexpr__67869.cljs$core$IFn$_invoke$arity$0() : fexpr__67869.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__67884 = null;
var G__67884__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__67870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__67870.cljs$core$IFn$_invoke$arity$2 ? fexpr__67870.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__67870.call(null,ref,f));
});
var G__67884__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__67871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__67871.cljs$core$IFn$_invoke$arity$3 ? fexpr__67871.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__67871.call(null,ref,f,a1));
});
var G__67884__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__67872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__67872.cljs$core$IFn$_invoke$arity$4 ? fexpr__67872.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__67872.call(null,ref,f,a1,a2));
});
var G__67884__5 = (function() { 
var G__67885__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__67885 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__67886__i = 0, G__67886__a = new Array(arguments.length -  4);
while (G__67886__i < G__67886__a.length) {G__67886__a[G__67886__i] = arguments[G__67886__i + 4]; ++G__67886__i;}
  args = new cljs.core.IndexedSeq(G__67886__a,0,null);
} 
return G__67885__delegate.call(this,ref,f,a1,a2,args);};
G__67885.cljs$lang$maxFixedArity = 4;
G__67885.cljs$lang$applyTo = (function (arglist__67887){
var ref = cljs.core.first(arglist__67887);
arglist__67887 = cljs.core.next(arglist__67887);
var f = cljs.core.first(arglist__67887);
arglist__67887 = cljs.core.next(arglist__67887);
var a1 = cljs.core.first(arglist__67887);
arglist__67887 = cljs.core.next(arglist__67887);
var a2 = cljs.core.first(arglist__67887);
var args = cljs.core.rest(arglist__67887);
return G__67885__delegate(ref,f,a1,a2,args);
});
G__67885.cljs$core$IFn$_invoke$arity$variadic = G__67885__delegate;
return G__67885;
})()
;
G__67884 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__67884__2.call(this,ref,f);
case 3:
return G__67884__3.call(this,ref,f,a1);
case 4:
return G__67884__4.call(this,ref,f,a1,a2);
default:
var G__67889 = null;
if (arguments.length > 4) {
var G__67890__i = 0, G__67890__a = new Array(arguments.length -  4);
while (G__67890__i < G__67890__a.length) {G__67890__a[G__67890__i] = arguments[G__67890__i + 4]; ++G__67890__i;}
G__67889 = new cljs.core.IndexedSeq(G__67890__a,0,null);
}
return G__67884__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__67889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67884.cljs$lang$maxFixedArity = 4;
G__67884.cljs$lang$applyTo = G__67884__5.cljs$lang$applyTo;
G__67884.cljs$core$IFn$_invoke$arity$2 = G__67884__2;
G__67884.cljs$core$IFn$_invoke$arity$3 = G__67884__3;
G__67884.cljs$core$IFn$_invoke$arity$4 = G__67884__4;
G__67884.cljs$core$IFn$_invoke$arity$variadic = G__67884__5.cljs$core$IFn$_invoke$arity$variadic;
return G__67884;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__67873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__67873.cljs$core$IFn$_invoke$arity$2 ? fexpr__67873.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__67873.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__67892__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__67892 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__67893__i = 0, G__67893__a = new Array(arguments.length -  2);
while (G__67893__i < G__67893__a.length) {G__67893__a[G__67893__i] = arguments[G__67893__i + 2]; ++G__67893__i;}
  args = new cljs.core.IndexedSeq(G__67893__a,0,null);
} 
return G__67892__delegate.call(this,ref,f,args);};
G__67892.cljs$lang$maxFixedArity = 2;
G__67892.cljs$lang$applyTo = (function (arglist__67894){
var ref = cljs.core.first(arglist__67894);
arglist__67894 = cljs.core.next(arglist__67894);
var f = cljs.core.first(arglist__67894);
var args = cljs.core.rest(arglist__67894);
return G__67892__delegate(ref,f,args);
});
G__67892.cljs$core$IFn$_invoke$arity$variadic = G__67892__delegate;
return G__67892;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___67895 = arguments.length;
var i__4865__auto___67896 = (0);
while(true){
if((i__4865__auto___67896 < len__4864__auto___67895)){
args__4870__auto__.push((arguments[i__4865__auto___67896]));

var G__67898 = (i__4865__auto___67896 + (1));
i__4865__auto___67896 = G__67898;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq67874){
var G__67875 = cljs.core.first(seq67874);
var seq67874__$1 = cljs.core.next(seq67874);
var G__67876 = cljs.core.first(seq67874__$1);
var seq67874__$2 = cljs.core.next(seq67874__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67875,G__67876,seq67874__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
