goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61182 = arguments.length;
var i__4865__auto___61183 = (0);
while(true){
if((i__4865__auto___61183 < len__4864__auto___61182)){
args__4870__auto__.push((arguments[i__4865__auto___61183]));

var G__61184 = (i__4865__auto___61183 + (1));
i__4865__auto___61183 = G__61184;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__61017_61185 = keyvals;
var vec__61018_61186 = G__61017_61185;
var seq__61019_61187 = cljs.core.seq(vec__61018_61186);
var first__61020_61188 = cljs.core.first(seq__61019_61187);
var seq__61019_61189__$1 = cljs.core.next(seq__61019_61187);
var k_61190 = first__61020_61188;
var first__61020_61191__$1 = cljs.core.first(seq__61019_61189__$1);
var seq__61019_61192__$2 = cljs.core.next(seq__61019_61189__$1);
var v_61193 = first__61020_61191__$1;
var keyvals_61194__$1 = seq__61019_61192__$2;
var G__61017_61196__$1 = G__61017_61185;
while(true){
var vec__61021_61198 = G__61017_61196__$1;
var seq__61022_61199 = cljs.core.seq(vec__61021_61198);
var first__61023_61200 = cljs.core.first(seq__61022_61199);
var seq__61022_61201__$1 = cljs.core.next(seq__61022_61199);
var k_61202__$1 = first__61023_61200;
var first__61023_61203__$1 = cljs.core.first(seq__61022_61201__$1);
var seq__61022_61204__$2 = cljs.core.next(seq__61022_61201__$1);
var v_61205__$1 = first__61023_61203__$1;
var keyvals_61206__$2 = seq__61022_61204__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_61202__$1)] = v_61205__$1);

if(keyvals_61206__$2){
var G__61207 = keyvals_61206__$2;
G__61017_61196__$1 = G__61207;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq61011){
var G__61012 = cljs.core.first(seq61011);
var seq61011__$1 = cljs.core.next(seq61011);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61012,seq61011__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__61032 = arguments.length;
switch (G__61032) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj61039 = obj;
if((!((obj61039 == null)))){
return (obj61039[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj61040 = obj;
if((!((obj61040 == null)))){
return (obj61040[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__60662__auto__ = (function (){var obj61041 = obj;
if((!((obj61041 == null)))){
return (obj61041[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__60662__auto__)){
return not_found;
} else {
return val__60662__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__61044 = arguments.length;
switch (G__61044) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj61050 = self__.obj;
if((!((obj61050 == null)))){
return (obj61050[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__60662__auto__ = (function (){var obj61051 = self__.obj;
if((!((obj61051 == null)))){
return (obj61051[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__60662__auto__)){
return not_found;
} else {
return val__60662__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61222 = arguments.length;
var i__4865__auto___61223 = (0);
while(true){
if((i__4865__auto___61223 < len__4864__auto___61222)){
args__4870__auto__.push((arguments[i__4865__auto___61223]));

var G__61224 = (i__4865__auto___61223 + (1));
i__4865__auto___61223 = G__61224;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__61069 = keyvals;
var vec__61070 = G__61069;
var seq__61071 = cljs.core.seq(vec__61070);
var first__61072 = cljs.core.first(seq__61071);
var seq__61071__$1 = cljs.core.next(seq__61071);
var k = first__61072;
var first__61072__$1 = cljs.core.first(seq__61071__$1);
var seq__61071__$2 = cljs.core.next(seq__61071__$1);
var v = first__61072__$1;
var kvs = seq__61071__$2;
var G__61069__$1 = G__61069;
while(true){
var vec__61074 = G__61069__$1;
var seq__61075 = cljs.core.seq(vec__61074);
var first__61076 = cljs.core.first(seq__61075);
var seq__61075__$1 = cljs.core.next(seq__61075);
var k__$1 = first__61076;
var first__61076__$1 = cljs.core.first(seq__61075__$1);
var seq__61075__$2 = cljs.core.next(seq__61075__$1);
var v__$1 = first__61076__$1;
var kvs__$1 = seq__61075__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__61227 = kvs__$1;
G__61069__$1 = G__61227;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq61060){
var G__61061 = cljs.core.first(seq61060);
var seq61060__$1 = cljs.core.next(seq61060);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61061,seq61060__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61230 = arguments.length;
var i__4865__auto___61231 = (0);
while(true){
if((i__4865__auto___61231 < len__4864__auto___61230)){
args__4870__auto__.push((arguments[i__4865__auto___61231]));

var G__61232 = (i__4865__auto___61231 + (1));
i__4865__auto___61231 = G__61232;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq61079){
var G__61080 = cljs.core.first(seq61079);
var seq61079__$1 = cljs.core.next(seq61079);
var G__61081 = cljs.core.first(seq61079__$1);
var seq61079__$2 = cljs.core.next(seq61079__$1);
var G__61082 = cljs.core.first(seq61079__$2);
var seq61079__$3 = cljs.core.next(seq61079__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61080,G__61081,G__61082,seq61079__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61233 = arguments.length;
var i__4865__auto___61234 = (0);
while(true){
if((i__4865__auto___61234 < len__4864__auto___61233)){
args__4870__auto__.push((arguments[i__4865__auto___61234]));

var G__61235 = (i__4865__auto___61234 + (1));
i__4865__auto___61234 = G__61235;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq61084){
var G__61085 = cljs.core.first(seq61084);
var seq61084__$1 = cljs.core.next(seq61084);
var G__61086 = cljs.core.first(seq61084__$1);
var seq61084__$2 = cljs.core.next(seq61084__$1);
var G__61087 = cljs.core.first(seq61084__$2);
var seq61084__$3 = cljs.core.next(seq61084__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61085,G__61086,G__61087,seq61084__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__61097 = arguments.length;
switch (G__61097) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___61237 = arguments.length;
var i__4865__auto___61238 = (0);
while(true){
if((i__4865__auto___61238 < len__4864__auto___61237)){
args_arr__4885__auto__.push((arguments[i__4865__auto___61238]));

var G__61239 = (i__4865__auto___61238 + (1));
i__4865__auto___61238 = G__61239;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__61113_61241 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__61114_61242 = null;
var count__61115_61243 = (0);
var i__61116_61244 = (0);
while(true){
if((i__61116_61244 < count__61115_61243)){
var k_61245 = chunk__61114_61242.cljs$core$IIndexed$_nth$arity$2(null,i__61116_61244);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_61245,applied_science.js_interop.unchecked_get(x,k_61245)], 0));


var G__61248 = seq__61113_61241;
var G__61249 = chunk__61114_61242;
var G__61250 = count__61115_61243;
var G__61251 = (i__61116_61244 + (1));
seq__61113_61241 = G__61248;
chunk__61114_61242 = G__61249;
count__61115_61243 = G__61250;
i__61116_61244 = G__61251;
continue;
} else {
var temp__5753__auto___61253 = cljs.core.seq(seq__61113_61241);
if(temp__5753__auto___61253){
var seq__61113_61254__$1 = temp__5753__auto___61253;
if(cljs.core.chunked_seq_QMARK_(seq__61113_61254__$1)){
var c__4679__auto___61255 = cljs.core.chunk_first(seq__61113_61254__$1);
var G__61256 = cljs.core.chunk_rest(seq__61113_61254__$1);
var G__61257 = c__4679__auto___61255;
var G__61258 = cljs.core.count(c__4679__auto___61255);
var G__61259 = (0);
seq__61113_61241 = G__61256;
chunk__61114_61242 = G__61257;
count__61115_61243 = G__61258;
i__61116_61244 = G__61259;
continue;
} else {
var k_61260 = cljs.core.first(seq__61113_61254__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_61260,applied_science.js_interop.unchecked_get(x,k_61260)], 0));


var G__61261 = cljs.core.next(seq__61113_61254__$1);
var G__61262 = null;
var G__61263 = (0);
var G__61264 = (0);
seq__61113_61241 = G__61261;
chunk__61114_61242 = G__61262;
count__61115_61243 = G__61263;
i__61116_61244 = G__61264;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq61094){
var G__61095 = cljs.core.first(seq61094);
var seq61094__$1 = cljs.core.next(seq61094);
var G__61096 = cljs.core.first(seq61094__$1);
var seq61094__$2 = cljs.core.next(seq61094__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61095,G__61096,seq61094__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__61119 = array;
G__61119.push(x);

return G__61119;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__61120 = array;
G__61120.unshift(x);

return G__61120;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61267 = arguments.length;
var i__4865__auto___61268 = (0);
while(true){
if((i__4865__auto___61268 < len__4864__auto___61267)){
args__4870__auto__.push((arguments[i__4865__auto___61268]));

var G__61269 = (i__4865__auto___61268 + (1));
i__4865__auto___61268 = G__61269;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj61125 = obj;
if((!((obj61125 == null)))){
return (obj61125[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq61121){
var G__61122 = cljs.core.first(seq61121);
var seq61121__$1 = cljs.core.next(seq61121);
var G__61123 = cljs.core.first(seq61121__$1);
var seq61121__$2 = cljs.core.next(seq61121__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61122,G__61123,seq61121__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj61126 = obj;
if((!((obj61126 == null)))){
return (obj61126[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61275 = arguments.length;
var i__4865__auto___61276 = (0);
while(true){
if((i__4865__auto___61276 < len__4864__auto___61275)){
args__4870__auto__.push((arguments[i__4865__auto___61276]));

var G__61277 = (i__4865__auto___61276 + (1));
i__4865__auto___61276 = G__61277;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq61129){
var G__61130 = cljs.core.first(seq61129);
var seq61129__$1 = cljs.core.next(seq61129);
var G__61131 = cljs.core.first(seq61129__$1);
var seq61129__$2 = cljs.core.next(seq61129__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61130,G__61131,seq61129__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61283 = arguments.length;
var i__4865__auto___61284 = (0);
while(true){
if((i__4865__auto___61284 < len__4864__auto___61283)){
args__4870__auto__.push((arguments[i__4865__auto___61284]));

var G__61285 = (i__4865__auto___61284 + (1));
i__4865__auto___61284 = G__61285;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__61138_61286 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__61139_61287 = null;
var count__61140_61288 = (0);
var i__61141_61289 = (0);
while(true){
if((i__61141_61289 < count__61140_61288)){
var vec__61162_61291 = chunk__61139_61287.cljs$core$IIndexed$_nth$arity$2(null,i__61141_61289);
var k_61292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61162_61291,(0),null);
var v_61293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61162_61291,(1),null);
var obj61166_61294 = obj;
var obj61167_61295 = (((!((obj61166_61294 == null))))?obj61166_61294:({}));
(obj61167_61295[applied_science.js_interop.impl.wrap_key(k_61292)] = v_61293);



var G__61296 = seq__61138_61286;
var G__61297 = chunk__61139_61287;
var G__61298 = count__61140_61288;
var G__61299 = (i__61141_61289 + (1));
seq__61138_61286 = G__61296;
chunk__61139_61287 = G__61297;
count__61140_61288 = G__61298;
i__61141_61289 = G__61299;
continue;
} else {
var temp__5753__auto___61300 = cljs.core.seq(seq__61138_61286);
if(temp__5753__auto___61300){
var seq__61138_61301__$1 = temp__5753__auto___61300;
if(cljs.core.chunked_seq_QMARK_(seq__61138_61301__$1)){
var c__4679__auto___61303 = cljs.core.chunk_first(seq__61138_61301__$1);
var G__61304 = cljs.core.chunk_rest(seq__61138_61301__$1);
var G__61305 = c__4679__auto___61303;
var G__61306 = cljs.core.count(c__4679__auto___61303);
var G__61307 = (0);
seq__61138_61286 = G__61304;
chunk__61139_61287 = G__61305;
count__61140_61288 = G__61306;
i__61141_61289 = G__61307;
continue;
} else {
var vec__61170_61308 = cljs.core.first(seq__61138_61301__$1);
var k_61309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61170_61308,(0),null);
var v_61310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61170_61308,(1),null);
var obj61174_61311 = obj;
var obj61176_61312 = (((!((obj61174_61311 == null))))?obj61174_61311:({}));
(obj61176_61312[applied_science.js_interop.impl.wrap_key(k_61309)] = v_61310);



var G__61313 = cljs.core.next(seq__61138_61301__$1);
var G__61314 = null;
var G__61315 = (0);
var G__61316 = (0);
seq__61138_61286 = G__61313;
chunk__61139_61287 = G__61314;
count__61140_61288 = G__61315;
i__61141_61289 = G__61316;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq61135){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61135));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
