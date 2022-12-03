goog.provide('flatland.ordered.map');
flatland.ordered.map.print_ordered_map = (function flatland$ordered$map$print_ordered_map(writer,kvs,ks,opts){
return cljs.core.pr_sequential_writer(writer,(function (k,w,opts__$1){
cljs.core._write(w,"[");

cljs.core._write(w,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)));

cljs.core._write(w," ");

cljs.core._write(w,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k)], 0)));

return cljs.core._write(w,"]");
}),"("," ",")",opts,ks);
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
flatland.ordered.map.OrderedMap = (function (kvs,ks){
this.kvs = kvs;
this.ks = ks;
this.cljs$lang$protocol_mask$partition0$ = 2297825039;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
(flatland.ordered.map.OrderedMap.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IFind$_find$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._find(self__.kvs,k);
}));

(flatland.ordered.map.OrderedMap.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,self__.kvs));
}));

(flatland.ordered.map.OrderedMap.prototype.forEach = (function() {
var G__63490 = null;
var G__63490__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__63369 = cljs.core.seq(self__.ks);
var chunk__63370 = null;
var count__63371 = (0);
var i__63372 = (0);
while(true){
if((i__63372 < count__63371)){
var k = chunk__63370.cljs$core$IIndexed$_nth$arity$2(null,i__63372);
var G__63379_63491 = k;
var G__63380_63492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.kvs,k);
var G__63381_63493 = this$;
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__63379_63491,G__63380_63492,G__63381_63493) : f.call(null,G__63379_63491,G__63380_63492,G__63381_63493));


var G__63494 = seq__63369;
var G__63495 = chunk__63370;
var G__63496 = count__63371;
var G__63497 = (i__63372 + (1));
seq__63369 = G__63494;
chunk__63370 = G__63495;
count__63371 = G__63496;
i__63372 = G__63497;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63369);
if(temp__5753__auto__){
var seq__63369__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63369__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63369__$1);
var G__63499 = cljs.core.chunk_rest(seq__63369__$1);
var G__63500 = c__4679__auto__;
var G__63501 = cljs.core.count(c__4679__auto__);
var G__63502 = (0);
seq__63369 = G__63499;
chunk__63370 = G__63500;
count__63371 = G__63501;
i__63372 = G__63502;
continue;
} else {
var k = cljs.core.first(seq__63369__$1);
var G__63382_63503 = k;
var G__63383_63504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.kvs,k);
var G__63384_63505 = this$;
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__63382_63503,G__63383_63504,G__63384_63505) : f.call(null,G__63382_63503,G__63383_63504,G__63384_63505));


var G__63506 = cljs.core.next(seq__63369__$1);
var G__63507 = null;
var G__63508 = (0);
var G__63509 = (0);
seq__63369 = G__63506;
chunk__63370 = G__63507;
count__63371 = G__63508;
i__63372 = G__63509;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__63490__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__63385 = cljs.core.seq(self__.ks);
var chunk__63386 = null;
var count__63387 = (0);
var i__63388 = (0);
while(true){
if((i__63388 < count__63387)){
var k = chunk__63386.cljs$core$IIndexed$_nth$arity$2(null,i__63388);
f.call(use_as_this,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.kvs,k),this$);


var G__63512 = seq__63385;
var G__63513 = chunk__63386;
var G__63514 = count__63387;
var G__63515 = (i__63388 + (1));
seq__63385 = G__63512;
chunk__63386 = G__63513;
count__63387 = G__63514;
i__63388 = G__63515;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63385);
if(temp__5753__auto__){
var seq__63385__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63385__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63385__$1);
var G__63516 = cljs.core.chunk_rest(seq__63385__$1);
var G__63517 = c__4679__auto__;
var G__63518 = cljs.core.count(c__4679__auto__);
var G__63519 = (0);
seq__63385 = G__63516;
chunk__63386 = G__63517;
count__63387 = G__63518;
i__63388 = G__63519;
continue;
} else {
var k = cljs.core.first(seq__63385__$1);
f.call(use_as_this,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.kvs,k),this$);


var G__63520 = cljs.core.next(seq__63385__$1);
var G__63521 = null;
var G__63522 = (0);
var G__63523 = (0);
seq__63385 = G__63520;
chunk__63386 = G__63521;
count__63387 = G__63522;
i__63388 = G__63523;
continue;
}
} else {
return null;
}
}
break;
}
});
G__63490 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__63490__1.call(this,f);
case 2:
return G__63490__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63490.cljs$core$IFn$_invoke$arity$1 = G__63490__1;
G__63490.cljs$core$IFn$_invoke$arity$2 = G__63490__2;
return G__63490;
})()
);

(flatland.ordered.map.OrderedMap.prototype.get = (function (k){
var self__ = this;
var this$ = this;
return self__.kvs.get(k);
}));

(flatland.ordered.map.OrderedMap.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.keys(self__.kvs));
}));

(flatland.ordered.map.OrderedMap.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(self__.kvs));
}));

(flatland.ordered.map.OrderedMap.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,self__.kvs));
}));

(flatland.ordered.map.OrderedMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(flatland.ordered.map.OrderedMap.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(self__.ks);
}));

(flatland.ordered.map.OrderedMap.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.vals(self__.kvs));
}));

(flatland.ordered.map.OrderedMap.prototype.equiv = (function (that){
var self__ = this;
var this$ = this;
return (flatland.ordered.map.equiv_impl.cljs$core$IFn$_invoke$arity$2 ? flatland.ordered.map.equiv_impl.cljs$core$IFn$_invoke$arity$2(self__.kvs,that) : flatland.ordered.map.equiv_impl.call(null,self__.kvs,that));
}));

(flatland.ordered.map.OrderedMap.prototype.has = (function (k){
var self__ = this;
var this$ = this;
return (!((self__.kvs.get(k) == null)));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup(self__.kvs,attr);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup(self__.kvs,attr,not_found);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__63412 = acc;
var G__63413 = k;
var G__63414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.kvs,k);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__63412,G__63413,G__63414) : f.call(null,G__63412,G__63413,G__63414));
}),init,self__.ks);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#ordered/map ");

return flatland.ordered.map.print_ordered_map(writer,self__.kvs,self__.ks,opts);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.meta(self__.kvs);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new flatland.ordered.map.OrderedMap(self__.kvs,self__.ks));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.kvs);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(self__.ks)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63359_SHARP_){
return cljs.core._find(self__.kvs,p1__63359_SHARP_);
}),cljs.core.rseq(self__.ks));
} else {
return null;
}
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.kvs);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (flatland.ordered.map.equiv_impl.cljs$core$IFn$_invoke$arity$2 ? flatland.ordered.map.equiv_impl.cljs$core$IFn$_invoke$arity$2(self__.kvs,that) : flatland.ordered.map.equiv_impl.call(null,self__.kvs,that));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(self__.ks)){
return (new flatland.ordered.map.OrderedMap(cljs.core._empty(self__.kvs),cljs.core.PersistentVector.EMPTY));
} else {
return this$__$1;
}
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(self__.kvs,k)){
return (new flatland.ordered.map.OrderedMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.kvs,k),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([k])),self__.ks)));
} else {
return this$__$1;
}
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
return (new flatland.ordered.map.OrderedMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.kvs,k,v),((cljs.core.contains_QMARK_(self__.kvs,k))?self__.ks:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.ks,k))));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.kvs,k);
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq(self__.ks)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63358_SHARP_){
return cljs.core._find(self__.kvs,p1__63358_SHARP_);
}),self__.ks);
} else {
return null;
}
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
if((cljs.core.meta(self__.kvs) === new_meta)){
return this$__$1;
} else {
return (new flatland.ordered.map.OrderedMap(cljs.core.with_meta(self__.kvs,new_meta),self__.ks));
}
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return (new flatland.ordered.map.OrderedMap(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.kvs,entry),((cljs.core.contains_QMARK_(self__.kvs,cljs.core._nth(entry,(0))))?self__.ks:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.ks,cljs.core._nth(entry,(0))))));
} else {
return (new flatland.ordered.map.OrderedMap(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.kvs,entry),cljs.core.into.cljs$core$IFn$_invoke$arity$3(self__.ks,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__63356_SHARP_){
return cljs.core._nth(p1__63356_SHARP_,(0));
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__63357_SHARP_){
return cljs.core.contains_QMARK_(self__.kvs,p1__63357_SHARP_);
}))),entry)));
}
}));

(flatland.ordered.map.OrderedMap.prototype.call = (function (unused__20564__auto__){
var self__ = this;
var self__ = this;
var G__63458 = (arguments.length - (1));
switch (G__63458) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(flatland.ordered.map.OrderedMap.prototype.apply = (function (self__,args63364){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63364)));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return (self__.kvs.cljs$core$IFn$_invoke$arity$1 ? self__.kvs.cljs$core$IFn$_invoke$arity$1(k) : self__.kvs.call(null,k));
}));

(flatland.ordered.map.OrderedMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return (self__.kvs.cljs$core$IFn$_invoke$arity$2 ? self__.kvs.cljs$core$IFn$_invoke$arity$2(k,not_found) : self__.kvs.call(null,k,not_found));
}));

(flatland.ordered.map.OrderedMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null);
}));

(flatland.ordered.map.OrderedMap.cljs$lang$type = true);

(flatland.ordered.map.OrderedMap.cljs$lang$ctorStr = "flatland.ordered.map/OrderedMap");

(flatland.ordered.map.OrderedMap.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"flatland.ordered.map/OrderedMap");
}));

/**
 * Positional factory function for flatland.ordered.map/OrderedMap.
 */
flatland.ordered.map.__GT_OrderedMap = (function flatland$ordered$map$__GT_OrderedMap(kvs,ks){
return (new flatland.ordered.map.OrderedMap(kvs,ks));
});

flatland.ordered.map.equiv_impl = (function flatland$ordered$map$equiv_impl(kvs,that){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kvs,(((that instanceof flatland.ordered.map.OrderedMap))?that.kvs:that));
});
flatland.ordered.map.empty_ordered_map = (new flatland.ordered.map.OrderedMap(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY));
flatland.ordered.map.ordered_map = (function flatland$ordered$map$ordered_map(var_args){
var G__63480 = arguments.length;
switch (G__63480) {
case 0:
return flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___63535 = arguments.length;
var i__4865__auto___63537 = (0);
while(true){
if((i__4865__auto___63537 < len__4864__auto___63535)){
args_arr__4885__auto__.push((arguments[i__4865__auto___63537]));

var G__63540 = (i__4865__auto___63537 + (1));
i__4865__auto___63537 = G__63540;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$0 = (function (){
return flatland.ordered.map.empty_ordered_map;
}));

(flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(flatland.ordered.map.empty_ordered_map,coll);
}));

(flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$variadic = (function (k,v,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc,flatland.ordered.map.empty_ordered_map,k,v,kvs);
}));

/** @this {Function} */
(flatland.ordered.map.ordered_map.cljs$lang$applyTo = (function (seq63477){
var G__63478 = cljs.core.first(seq63477);
var seq63477__$1 = cljs.core.next(seq63477);
var G__63479 = cljs.core.first(seq63477__$1);
var seq63477__$2 = cljs.core.next(seq63477__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63478,G__63479,seq63477__$2);
}));

(flatland.ordered.map.ordered_map.cljs$lang$maxFixedArity = (2));


//# sourceMappingURL=flatland.ordered.map.js.map
