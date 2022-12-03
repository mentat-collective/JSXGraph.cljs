goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54571 = arguments.length;
switch (G__54571) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54576 = (function (f,blockable,meta54577){
this.f = f;
this.blockable = blockable;
this.meta54577 = meta54577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54578,meta54577__$1){
var self__ = this;
var _54578__$1 = this;
return (new cljs.core.async.t_cljs$core$async54576(self__.f,self__.blockable,meta54577__$1));
}));

(cljs.core.async.t_cljs$core$async54576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54578){
var self__ = this;
var _54578__$1 = this;
return self__.meta54577;
}));

(cljs.core.async.t_cljs$core$async54576.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54577","meta54577",-323799110,null)], null);
}));

(cljs.core.async.t_cljs$core$async54576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54576");

(cljs.core.async.t_cljs$core$async54576.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async54576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54576.
 */
cljs.core.async.__GT_t_cljs$core$async54576 = (function cljs$core$async$__GT_t_cljs$core$async54576(f__$1,blockable__$1,meta54577){
return (new cljs.core.async.t_cljs$core$async54576(f__$1,blockable__$1,meta54577));
});

}

return (new cljs.core.async.t_cljs$core$async54576(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__54660 = arguments.length;
switch (G__54660) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__54674 = arguments.length;
switch (G__54674) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__54689 = arguments.length;
switch (G__54689) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_57597 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57597) : fn1.call(null,val_57597));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57597) : fn1.call(null,val_57597));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__54700 = arguments.length;
switch (G__54700) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___57600 = n;
var x_57601 = (0);
while(true){
if((x_57601 < n__4741__auto___57600)){
(a[x_57601] = x_57601);

var G__57602 = (x_57601 + (1));
x_57601 = G__57602;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54732 = (function (flag,meta54733){
this.flag = flag;
this.meta54733 = meta54733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54734,meta54733__$1){
var self__ = this;
var _54734__$1 = this;
return (new cljs.core.async.t_cljs$core$async54732(self__.flag,meta54733__$1));
}));

(cljs.core.async.t_cljs$core$async54732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54734){
var self__ = this;
var _54734__$1 = this;
return self__.meta54733;
}));

(cljs.core.async.t_cljs$core$async54732.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54733","meta54733",1178011186,null)], null);
}));

(cljs.core.async.t_cljs$core$async54732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54732");

(cljs.core.async.t_cljs$core$async54732.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async54732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54732.
 */
cljs.core.async.__GT_t_cljs$core$async54732 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54732(flag__$1,meta54733){
return (new cljs.core.async.t_cljs$core$async54732(flag__$1,meta54733));
});

}

return (new cljs.core.async.t_cljs$core$async54732(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54753 = (function (flag,cb,meta54754){
this.flag = flag;
this.cb = cb;
this.meta54754 = meta54754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54755,meta54754__$1){
var self__ = this;
var _54755__$1 = this;
return (new cljs.core.async.t_cljs$core$async54753(self__.flag,self__.cb,meta54754__$1));
}));

(cljs.core.async.t_cljs$core$async54753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54755){
var self__ = this;
var _54755__$1 = this;
return self__.meta54754;
}));

(cljs.core.async.t_cljs$core$async54753.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54754","meta54754",-435833656,null)], null);
}));

(cljs.core.async.t_cljs$core$async54753.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54753");

(cljs.core.async.t_cljs$core$async54753.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async54753");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54753.
 */
cljs.core.async.__GT_t_cljs$core$async54753 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54753(flag__$1,cb__$1,meta54754){
return (new cljs.core.async.t_cljs$core$async54753(flag__$1,cb__$1,meta54754));
});

}

return (new cljs.core.async.t_cljs$core$async54753(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54762_SHARP_){
var G__54774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54762_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54774) : fret.call(null,G__54774));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54763_SHARP_){
var G__54775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54763_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54775) : fret.call(null,G__54775));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__57608 = (i + (1));
i = G__57608;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57609 = arguments.length;
var i__4865__auto___57611 = (0);
while(true){
if((i__4865__auto___57611 < len__4864__auto___57609)){
args__4870__auto__.push((arguments[i__4865__auto___57611]));

var G__57612 = (i__4865__auto___57611 + (1));
i__4865__auto___57611 = G__57612;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54779){
var map__54780 = p__54779;
var map__54780__$1 = cljs.core.__destructure_map(map__54780);
var opts = map__54780__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54777){
var G__54778 = cljs.core.first(seq54777);
var seq54777__$1 = cljs.core.next(seq54777);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54778,seq54777__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__54788 = arguments.length;
switch (G__54788) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__54461__auto___57616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_54856){
var state_val_54857 = (state_54856[(1)]);
if((state_val_54857 === (7))){
var inst_54849 = (state_54856[(2)]);
var state_54856__$1 = state_54856;
var statearr_54880_57617 = state_54856__$1;
(statearr_54880_57617[(2)] = inst_54849);

(statearr_54880_57617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54857 === (1))){
var state_54856__$1 = state_54856;
var statearr_54884_57618 = state_54856__$1;
(statearr_54884_57618[(2)] = null);

(statearr_54884_57618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54857 === (4))){
var inst_54818 = (state_54856[(7)]);
var inst_54818__$1 = (state_54856[(2)]);
var inst_54820 = (inst_54818__$1 == null);
var state_54856__$1 = (function (){var statearr_54887 = state_54856;
(statearr_54887[(7)] = inst_54818__$1);

return statearr_54887;
})();
if(cljs.core.truth_(inst_54820)){
var statearr_54888_57619 = state_54856__$1;
(statearr_54888_57619[(1)] = (5));

} else {
var statearr_54890_57620 = state_54856__$1;
(statearr_54890_57620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54857 === (13))){
var state_54856__$1 = state_54856;
var statearr_54892_57621 = state_54856__$1;
(statearr_54892_57621[(2)] = null);

(statearr_54892_57621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54857 === (6))){
var inst_54818 = (state_54856[(7)]);
var state_54856__$1 = state_54856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54856__$1,(11),to,inst_54818);
} else {
if((state_val_54857 === (3))){
var inst_54851 = (state_54856[(2)]);
var state_54856__$1 = state_54856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54856__$1,inst_54851);
} else {
if((state_val_54857 === (12))){
var state_54856__$1 = state_54856;
var statearr_54893_57622 = state_54856__$1;
(statearr_54893_57622[(2)] = null);

(statearr_54893_57622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54857 === (2))){
var state_54856__$1 = state_54856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54856__$1,(4),from);
} else {
if((state_val_54857 === (11))){
var inst_54834 = (state_54856[(2)]);
var state_54856__$1 = state_54856;
if(cljs.core.truth_(inst_54834)){
var statearr_54894_57623 = state_54856__$1;
(statearr_54894_57623[(1)] = (12));

} else {
var statearr_54895_57624 = state_54856__$1;
(statearr_54895_57624[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54857 === (9))){
var state_54856__$1 = state_54856;
var statearr_54900_57625 = state_54856__$1;
(statearr_54900_57625[(2)] = null);

(statearr_54900_57625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54857 === (5))){
var state_54856__$1 = state_54856;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54901_57627 = state_54856__$1;
(statearr_54901_57627[(1)] = (8));

} else {
var statearr_54903_57629 = state_54856__$1;
(statearr_54903_57629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54857 === (14))){
var inst_54847 = (state_54856[(2)]);
var state_54856__$1 = state_54856;
var statearr_54909_57630 = state_54856__$1;
(statearr_54909_57630[(2)] = inst_54847);

(statearr_54909_57630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54857 === (10))){
var inst_54830 = (state_54856[(2)]);
var state_54856__$1 = state_54856;
var statearr_54912_57632 = state_54856__$1;
(statearr_54912_57632[(2)] = inst_54830);

(statearr_54912_57632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54857 === (8))){
var inst_54827 = cljs.core.async.close_BANG_(to);
var state_54856__$1 = state_54856;
var statearr_54917_57633 = state_54856__$1;
(statearr_54917_57633[(2)] = inst_54827);

(statearr_54917_57633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_54918 = [null,null,null,null,null,null,null,null];
(statearr_54918[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_54918[(1)] = (1));

return statearr_54918;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_54856){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_54856);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e54919){var ex__54250__auto__ = e54919;
var statearr_54920_57634 = state_54856;
(statearr_54920_57634[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_54856[(4)]))){
var statearr_54921_57635 = state_54856;
(statearr_54921_57635[(1)] = cljs.core.first((state_54856[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57636 = state_54856;
state_54856 = G__57636;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_54856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_54856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_54925 = f__54462__auto__();
(statearr_54925[(6)] = c__54461__auto___57616);

return statearr_54925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__54952){
var vec__54953 = p__54952;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54953,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54953,(1),null);
var job = vec__54953;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54461__auto___57637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_54961){
var state_val_54962 = (state_54961[(1)]);
if((state_val_54962 === (1))){
var state_54961__$1 = state_54961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54961__$1,(2),res,v);
} else {
if((state_val_54962 === (2))){
var inst_54958 = (state_54961[(2)]);
var inst_54959 = cljs.core.async.close_BANG_(res);
var state_54961__$1 = (function (){var statearr_54979 = state_54961;
(statearr_54979[(7)] = inst_54958);

return statearr_54979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54961__$1,inst_54959);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0 = (function (){
var statearr_54991 = [null,null,null,null,null,null,null,null];
(statearr_54991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__);

(statearr_54991[(1)] = (1));

return statearr_54991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1 = (function (state_54961){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_54961);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e54996){var ex__54250__auto__ = e54996;
var statearr_55000_57638 = state_54961;
(statearr_55000_57638[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_54961[(4)]))){
var statearr_55002_57639 = state_54961;
(statearr_55002_57639[(1)] = cljs.core.first((state_54961[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57640 = state_54961;
state_54961 = G__57640;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__ = function(state_54961){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1.call(this,state_54961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_55003 = f__54462__auto__();
(statearr_55003[(6)] = c__54461__auto___57637);

return statearr_55003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__55012){
var vec__55017 = p__55012;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55017,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55017,(1),null);
var job = vec__55017;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___57641 = n;
var __57642 = (0);
while(true){
if((__57642 < n__4741__auto___57641)){
var G__55029_57644 = type;
var G__55029_57645__$1 = (((G__55029_57644 instanceof cljs.core.Keyword))?G__55029_57644.fqn:null);
switch (G__55029_57645__$1) {
case "compute":
var c__54461__auto___57647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57642,c__54461__auto___57647,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async){
return (function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = ((function (__57642,c__54461__auto___57647,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async){
return (function (state_55051){
var state_val_55052 = (state_55051[(1)]);
if((state_val_55052 === (1))){
var state_55051__$1 = state_55051;
var statearr_55053_57648 = state_55051__$1;
(statearr_55053_57648[(2)] = null);

(statearr_55053_57648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (2))){
var state_55051__$1 = state_55051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55051__$1,(4),jobs);
} else {
if((state_val_55052 === (3))){
var inst_55049 = (state_55051[(2)]);
var state_55051__$1 = state_55051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55051__$1,inst_55049);
} else {
if((state_val_55052 === (4))){
var inst_55040 = (state_55051[(2)]);
var inst_55042 = process(inst_55040);
var state_55051__$1 = state_55051;
if(cljs.core.truth_(inst_55042)){
var statearr_55056_57649 = state_55051__$1;
(statearr_55056_57649[(1)] = (5));

} else {
var statearr_55057_57650 = state_55051__$1;
(statearr_55057_57650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (5))){
var state_55051__$1 = state_55051;
var statearr_55058_57651 = state_55051__$1;
(statearr_55058_57651[(2)] = null);

(statearr_55058_57651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (6))){
var state_55051__$1 = state_55051;
var statearr_55061_57652 = state_55051__$1;
(statearr_55061_57652[(2)] = null);

(statearr_55061_57652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (7))){
var inst_55047 = (state_55051[(2)]);
var state_55051__$1 = state_55051;
var statearr_55065_57653 = state_55051__$1;
(statearr_55065_57653[(2)] = inst_55047);

(statearr_55065_57653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57642,c__54461__auto___57647,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async))
;
return ((function (__57642,switch__54246__auto__,c__54461__auto___57647,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0 = (function (){
var statearr_55067 = [null,null,null,null,null,null,null];
(statearr_55067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__);

(statearr_55067[(1)] = (1));

return statearr_55067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1 = (function (state_55051){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_55051);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e55075){var ex__54250__auto__ = e55075;
var statearr_55076_57654 = state_55051;
(statearr_55076_57654[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_55051[(4)]))){
var statearr_55077_57655 = state_55051;
(statearr_55077_57655[(1)] = cljs.core.first((state_55051[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57656 = state_55051;
state_55051 = G__57656;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__ = function(state_55051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1.call(this,state_55051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__;
})()
;})(__57642,switch__54246__auto__,c__54461__auto___57647,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async))
})();
var state__54463__auto__ = (function (){var statearr_55081 = f__54462__auto__();
(statearr_55081[(6)] = c__54461__auto___57647);

return statearr_55081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
});})(__57642,c__54461__auto___57647,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async))
);


break;
case "async":
var c__54461__auto___57657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57642,c__54461__auto___57657,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async){
return (function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = ((function (__57642,c__54461__auto___57657,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async){
return (function (state_55095){
var state_val_55096 = (state_55095[(1)]);
if((state_val_55096 === (1))){
var state_55095__$1 = state_55095;
var statearr_55097_57658 = state_55095__$1;
(statearr_55097_57658[(2)] = null);

(statearr_55097_57658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55096 === (2))){
var state_55095__$1 = state_55095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55095__$1,(4),jobs);
} else {
if((state_val_55096 === (3))){
var inst_55093 = (state_55095[(2)]);
var state_55095__$1 = state_55095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55095__$1,inst_55093);
} else {
if((state_val_55096 === (4))){
var inst_55084 = (state_55095[(2)]);
var inst_55085 = async(inst_55084);
var state_55095__$1 = state_55095;
if(cljs.core.truth_(inst_55085)){
var statearr_55100_57659 = state_55095__$1;
(statearr_55100_57659[(1)] = (5));

} else {
var statearr_55101_57660 = state_55095__$1;
(statearr_55101_57660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55096 === (5))){
var state_55095__$1 = state_55095;
var statearr_55111_57661 = state_55095__$1;
(statearr_55111_57661[(2)] = null);

(statearr_55111_57661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55096 === (6))){
var state_55095__$1 = state_55095;
var statearr_55112_57662 = state_55095__$1;
(statearr_55112_57662[(2)] = null);

(statearr_55112_57662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55096 === (7))){
var inst_55091 = (state_55095[(2)]);
var state_55095__$1 = state_55095;
var statearr_55113_57663 = state_55095__$1;
(statearr_55113_57663[(2)] = inst_55091);

(statearr_55113_57663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57642,c__54461__auto___57657,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async))
;
return ((function (__57642,switch__54246__auto__,c__54461__auto___57657,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0 = (function (){
var statearr_55122 = [null,null,null,null,null,null,null];
(statearr_55122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__);

(statearr_55122[(1)] = (1));

return statearr_55122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1 = (function (state_55095){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_55095);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e55123){var ex__54250__auto__ = e55123;
var statearr_55124_57664 = state_55095;
(statearr_55124_57664[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_55095[(4)]))){
var statearr_55125_57665 = state_55095;
(statearr_55125_57665[(1)] = cljs.core.first((state_55095[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57667 = state_55095;
state_55095 = G__57667;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__ = function(state_55095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1.call(this,state_55095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__;
})()
;})(__57642,switch__54246__auto__,c__54461__auto___57657,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async))
})();
var state__54463__auto__ = (function (){var statearr_55130 = f__54462__auto__();
(statearr_55130[(6)] = c__54461__auto___57657);

return statearr_55130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
});})(__57642,c__54461__auto___57657,G__55029_57644,G__55029_57645__$1,n__4741__auto___57641,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55029_57645__$1)].join('')));

}

var G__57668 = (__57642 + (1));
__57642 = G__57668;
continue;
} else {
}
break;
}

var c__54461__auto___57669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_55158){
var state_val_55159 = (state_55158[(1)]);
if((state_val_55159 === (7))){
var inst_55152 = (state_55158[(2)]);
var state_55158__$1 = state_55158;
var statearr_55170_57670 = state_55158__$1;
(statearr_55170_57670[(2)] = inst_55152);

(statearr_55170_57670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55159 === (1))){
var state_55158__$1 = state_55158;
var statearr_55171_57671 = state_55158__$1;
(statearr_55171_57671[(2)] = null);

(statearr_55171_57671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55159 === (4))){
var inst_55136 = (state_55158[(7)]);
var inst_55136__$1 = (state_55158[(2)]);
var inst_55137 = (inst_55136__$1 == null);
var state_55158__$1 = (function (){var statearr_55172 = state_55158;
(statearr_55172[(7)] = inst_55136__$1);

return statearr_55172;
})();
if(cljs.core.truth_(inst_55137)){
var statearr_55173_57672 = state_55158__$1;
(statearr_55173_57672[(1)] = (5));

} else {
var statearr_55175_57673 = state_55158__$1;
(statearr_55175_57673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55159 === (6))){
var inst_55141 = (state_55158[(8)]);
var inst_55136 = (state_55158[(7)]);
var inst_55141__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_55142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55144 = [inst_55136,inst_55141__$1];
var inst_55145 = (new cljs.core.PersistentVector(null,2,(5),inst_55142,inst_55144,null));
var state_55158__$1 = (function (){var statearr_55177 = state_55158;
(statearr_55177[(8)] = inst_55141__$1);

return statearr_55177;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55158__$1,(8),jobs,inst_55145);
} else {
if((state_val_55159 === (3))){
var inst_55154 = (state_55158[(2)]);
var state_55158__$1 = state_55158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55158__$1,inst_55154);
} else {
if((state_val_55159 === (2))){
var state_55158__$1 = state_55158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55158__$1,(4),from);
} else {
if((state_val_55159 === (9))){
var inst_55149 = (state_55158[(2)]);
var state_55158__$1 = (function (){var statearr_55182 = state_55158;
(statearr_55182[(9)] = inst_55149);

return statearr_55182;
})();
var statearr_55183_57676 = state_55158__$1;
(statearr_55183_57676[(2)] = null);

(statearr_55183_57676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55159 === (5))){
var inst_55139 = cljs.core.async.close_BANG_(jobs);
var state_55158__$1 = state_55158;
var statearr_55184_57677 = state_55158__$1;
(statearr_55184_57677[(2)] = inst_55139);

(statearr_55184_57677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55159 === (8))){
var inst_55141 = (state_55158[(8)]);
var inst_55147 = (state_55158[(2)]);
var state_55158__$1 = (function (){var statearr_55187 = state_55158;
(statearr_55187[(10)] = inst_55147);

return statearr_55187;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55158__$1,(9),results,inst_55141);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0 = (function (){
var statearr_55188 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__);

(statearr_55188[(1)] = (1));

return statearr_55188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1 = (function (state_55158){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_55158);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e55189){var ex__54250__auto__ = e55189;
var statearr_55190_57678 = state_55158;
(statearr_55190_57678[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_55158[(4)]))){
var statearr_55191_57679 = state_55158;
(statearr_55191_57679[(1)] = cljs.core.first((state_55158[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57680 = state_55158;
state_55158 = G__57680;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__ = function(state_55158){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1.call(this,state_55158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_55197 = f__54462__auto__();
(statearr_55197[(6)] = c__54461__auto___57669);

return statearr_55197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


var c__54461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_55243){
var state_val_55244 = (state_55243[(1)]);
if((state_val_55244 === (7))){
var inst_55239 = (state_55243[(2)]);
var state_55243__$1 = state_55243;
var statearr_55254_57681 = state_55243__$1;
(statearr_55254_57681[(2)] = inst_55239);

(statearr_55254_57681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (20))){
var state_55243__$1 = state_55243;
var statearr_55259_57682 = state_55243__$1;
(statearr_55259_57682[(2)] = null);

(statearr_55259_57682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (1))){
var state_55243__$1 = state_55243;
var statearr_55267_57683 = state_55243__$1;
(statearr_55267_57683[(2)] = null);

(statearr_55267_57683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (4))){
var inst_55206 = (state_55243[(7)]);
var inst_55206__$1 = (state_55243[(2)]);
var inst_55207 = (inst_55206__$1 == null);
var state_55243__$1 = (function (){var statearr_55268 = state_55243;
(statearr_55268[(7)] = inst_55206__$1);

return statearr_55268;
})();
if(cljs.core.truth_(inst_55207)){
var statearr_55269_57684 = state_55243__$1;
(statearr_55269_57684[(1)] = (5));

} else {
var statearr_55270_57685 = state_55243__$1;
(statearr_55270_57685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (15))){
var inst_55219 = (state_55243[(8)]);
var state_55243__$1 = state_55243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55243__$1,(18),to,inst_55219);
} else {
if((state_val_55244 === (21))){
var inst_55234 = (state_55243[(2)]);
var state_55243__$1 = state_55243;
var statearr_55274_57687 = state_55243__$1;
(statearr_55274_57687[(2)] = inst_55234);

(statearr_55274_57687[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (13))){
var inst_55236 = (state_55243[(2)]);
var state_55243__$1 = (function (){var statearr_55278 = state_55243;
(statearr_55278[(9)] = inst_55236);

return statearr_55278;
})();
var statearr_55279_57688 = state_55243__$1;
(statearr_55279_57688[(2)] = null);

(statearr_55279_57688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (6))){
var inst_55206 = (state_55243[(7)]);
var state_55243__$1 = state_55243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55243__$1,(11),inst_55206);
} else {
if((state_val_55244 === (17))){
var inst_55229 = (state_55243[(2)]);
var state_55243__$1 = state_55243;
if(cljs.core.truth_(inst_55229)){
var statearr_55280_57691 = state_55243__$1;
(statearr_55280_57691[(1)] = (19));

} else {
var statearr_55284_57692 = state_55243__$1;
(statearr_55284_57692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (3))){
var inst_55241 = (state_55243[(2)]);
var state_55243__$1 = state_55243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55243__$1,inst_55241);
} else {
if((state_val_55244 === (12))){
var inst_55216 = (state_55243[(10)]);
var state_55243__$1 = state_55243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55243__$1,(14),inst_55216);
} else {
if((state_val_55244 === (2))){
var state_55243__$1 = state_55243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55243__$1,(4),results);
} else {
if((state_val_55244 === (19))){
var state_55243__$1 = state_55243;
var statearr_55287_57693 = state_55243__$1;
(statearr_55287_57693[(2)] = null);

(statearr_55287_57693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (11))){
var inst_55216 = (state_55243[(2)]);
var state_55243__$1 = (function (){var statearr_55288 = state_55243;
(statearr_55288[(10)] = inst_55216);

return statearr_55288;
})();
var statearr_55289_57694 = state_55243__$1;
(statearr_55289_57694[(2)] = null);

(statearr_55289_57694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (9))){
var state_55243__$1 = state_55243;
var statearr_55292_57695 = state_55243__$1;
(statearr_55292_57695[(2)] = null);

(statearr_55292_57695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (5))){
var state_55243__$1 = state_55243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55293_57696 = state_55243__$1;
(statearr_55293_57696[(1)] = (8));

} else {
var statearr_55294_57697 = state_55243__$1;
(statearr_55294_57697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (14))){
var inst_55221 = (state_55243[(11)]);
var inst_55219 = (state_55243[(8)]);
var inst_55219__$1 = (state_55243[(2)]);
var inst_55220 = (inst_55219__$1 == null);
var inst_55221__$1 = cljs.core.not(inst_55220);
var state_55243__$1 = (function (){var statearr_55296 = state_55243;
(statearr_55296[(11)] = inst_55221__$1);

(statearr_55296[(8)] = inst_55219__$1);

return statearr_55296;
})();
if(inst_55221__$1){
var statearr_55299_57698 = state_55243__$1;
(statearr_55299_57698[(1)] = (15));

} else {
var statearr_55301_57699 = state_55243__$1;
(statearr_55301_57699[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (16))){
var inst_55221 = (state_55243[(11)]);
var state_55243__$1 = state_55243;
var statearr_55302_57700 = state_55243__$1;
(statearr_55302_57700[(2)] = inst_55221);

(statearr_55302_57700[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (10))){
var inst_55213 = (state_55243[(2)]);
var state_55243__$1 = state_55243;
var statearr_55303_57701 = state_55243__$1;
(statearr_55303_57701[(2)] = inst_55213);

(statearr_55303_57701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (18))){
var inst_55225 = (state_55243[(2)]);
var state_55243__$1 = state_55243;
var statearr_55308_57702 = state_55243__$1;
(statearr_55308_57702[(2)] = inst_55225);

(statearr_55308_57702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55244 === (8))){
var inst_55210 = cljs.core.async.close_BANG_(to);
var state_55243__$1 = state_55243;
var statearr_55309_57703 = state_55243__$1;
(statearr_55309_57703[(2)] = inst_55210);

(statearr_55309_57703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0 = (function (){
var statearr_55314 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__);

(statearr_55314[(1)] = (1));

return statearr_55314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1 = (function (state_55243){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_55243);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e55315){var ex__54250__auto__ = e55315;
var statearr_55316_57706 = state_55243;
(statearr_55316_57706[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_55243[(4)]))){
var statearr_55317_57707 = state_55243;
(statearr_55317_57707[(1)] = cljs.core.first((state_55243[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57708 = state_55243;
state_55243 = G__57708;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__ = function(state_55243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1.call(this,state_55243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_55322 = f__54462__auto__();
(statearr_55322[(6)] = c__54461__auto__);

return statearr_55322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));

return c__54461__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__55324 = arguments.length;
switch (G__55324) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__55330 = arguments.length;
switch (G__55330) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__55334 = arguments.length;
switch (G__55334) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__54461__auto___57713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_55362){
var state_val_55363 = (state_55362[(1)]);
if((state_val_55363 === (7))){
var inst_55358 = (state_55362[(2)]);
var state_55362__$1 = state_55362;
var statearr_55366_57715 = state_55362__$1;
(statearr_55366_57715[(2)] = inst_55358);

(statearr_55366_57715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55363 === (1))){
var state_55362__$1 = state_55362;
var statearr_55367_57717 = state_55362__$1;
(statearr_55367_57717[(2)] = null);

(statearr_55367_57717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55363 === (4))){
var inst_55339 = (state_55362[(7)]);
var inst_55339__$1 = (state_55362[(2)]);
var inst_55340 = (inst_55339__$1 == null);
var state_55362__$1 = (function (){var statearr_55368 = state_55362;
(statearr_55368[(7)] = inst_55339__$1);

return statearr_55368;
})();
if(cljs.core.truth_(inst_55340)){
var statearr_55369_57722 = state_55362__$1;
(statearr_55369_57722[(1)] = (5));

} else {
var statearr_55370_57723 = state_55362__$1;
(statearr_55370_57723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55363 === (13))){
var state_55362__$1 = state_55362;
var statearr_55371_57724 = state_55362__$1;
(statearr_55371_57724[(2)] = null);

(statearr_55371_57724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55363 === (6))){
var inst_55339 = (state_55362[(7)]);
var inst_55345 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55339) : p.call(null,inst_55339));
var state_55362__$1 = state_55362;
if(cljs.core.truth_(inst_55345)){
var statearr_55373_57725 = state_55362__$1;
(statearr_55373_57725[(1)] = (9));

} else {
var statearr_55374_57726 = state_55362__$1;
(statearr_55374_57726[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55363 === (3))){
var inst_55360 = (state_55362[(2)]);
var state_55362__$1 = state_55362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55362__$1,inst_55360);
} else {
if((state_val_55363 === (12))){
var state_55362__$1 = state_55362;
var statearr_55376_57727 = state_55362__$1;
(statearr_55376_57727[(2)] = null);

(statearr_55376_57727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55363 === (2))){
var state_55362__$1 = state_55362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55362__$1,(4),ch);
} else {
if((state_val_55363 === (11))){
var inst_55339 = (state_55362[(7)]);
var inst_55349 = (state_55362[(2)]);
var state_55362__$1 = state_55362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55362__$1,(8),inst_55349,inst_55339);
} else {
if((state_val_55363 === (9))){
var state_55362__$1 = state_55362;
var statearr_55377_57730 = state_55362__$1;
(statearr_55377_57730[(2)] = tc);

(statearr_55377_57730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55363 === (5))){
var inst_55342 = cljs.core.async.close_BANG_(tc);
var inst_55343 = cljs.core.async.close_BANG_(fc);
var state_55362__$1 = (function (){var statearr_55378 = state_55362;
(statearr_55378[(8)] = inst_55342);

return statearr_55378;
})();
var statearr_55379_57731 = state_55362__$1;
(statearr_55379_57731[(2)] = inst_55343);

(statearr_55379_57731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55363 === (14))){
var inst_55356 = (state_55362[(2)]);
var state_55362__$1 = state_55362;
var statearr_55381_57732 = state_55362__$1;
(statearr_55381_57732[(2)] = inst_55356);

(statearr_55381_57732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55363 === (10))){
var state_55362__$1 = state_55362;
var statearr_55382_57733 = state_55362__$1;
(statearr_55382_57733[(2)] = fc);

(statearr_55382_57733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55363 === (8))){
var inst_55351 = (state_55362[(2)]);
var state_55362__$1 = state_55362;
if(cljs.core.truth_(inst_55351)){
var statearr_55383_57734 = state_55362__$1;
(statearr_55383_57734[(1)] = (12));

} else {
var statearr_55384_57735 = state_55362__$1;
(statearr_55384_57735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_55386 = [null,null,null,null,null,null,null,null,null];
(statearr_55386[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_55386[(1)] = (1));

return statearr_55386;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_55362){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_55362);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e55387){var ex__54250__auto__ = e55387;
var statearr_55388_57736 = state_55362;
(statearr_55388_57736[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_55362[(4)]))){
var statearr_55390_57737 = state_55362;
(statearr_55390_57737[(1)] = cljs.core.first((state_55362[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57738 = state_55362;
state_55362 = G__57738;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_55362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_55362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_55393 = f__54462__auto__();
(statearr_55393[(6)] = c__54461__auto___57713);

return statearr_55393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__54461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_55427){
var state_val_55428 = (state_55427[(1)]);
if((state_val_55428 === (7))){
var inst_55423 = (state_55427[(2)]);
var state_55427__$1 = state_55427;
var statearr_55438_57739 = state_55427__$1;
(statearr_55438_57739[(2)] = inst_55423);

(statearr_55438_57739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55428 === (1))){
var inst_55398 = init;
var inst_55400 = inst_55398;
var state_55427__$1 = (function (){var statearr_55458 = state_55427;
(statearr_55458[(7)] = inst_55400);

return statearr_55458;
})();
var statearr_55469_57743 = state_55427__$1;
(statearr_55469_57743[(2)] = null);

(statearr_55469_57743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55428 === (4))){
var inst_55407 = (state_55427[(8)]);
var inst_55407__$1 = (state_55427[(2)]);
var inst_55408 = (inst_55407__$1 == null);
var state_55427__$1 = (function (){var statearr_55476 = state_55427;
(statearr_55476[(8)] = inst_55407__$1);

return statearr_55476;
})();
if(cljs.core.truth_(inst_55408)){
var statearr_55484_57745 = state_55427__$1;
(statearr_55484_57745[(1)] = (5));

} else {
var statearr_55486_57746 = state_55427__$1;
(statearr_55486_57746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55428 === (6))){
var inst_55407 = (state_55427[(8)]);
var inst_55411 = (state_55427[(9)]);
var inst_55400 = (state_55427[(7)]);
var inst_55411__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_55400,inst_55407) : f.call(null,inst_55400,inst_55407));
var inst_55412 = cljs.core.reduced_QMARK_(inst_55411__$1);
var state_55427__$1 = (function (){var statearr_55491 = state_55427;
(statearr_55491[(9)] = inst_55411__$1);

return statearr_55491;
})();
if(inst_55412){
var statearr_55497_57747 = state_55427__$1;
(statearr_55497_57747[(1)] = (8));

} else {
var statearr_55498_57748 = state_55427__$1;
(statearr_55498_57748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55428 === (3))){
var inst_55425 = (state_55427[(2)]);
var state_55427__$1 = state_55427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55427__$1,inst_55425);
} else {
if((state_val_55428 === (2))){
var state_55427__$1 = state_55427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55427__$1,(4),ch);
} else {
if((state_val_55428 === (9))){
var inst_55411 = (state_55427[(9)]);
var inst_55400 = inst_55411;
var state_55427__$1 = (function (){var statearr_55501 = state_55427;
(statearr_55501[(7)] = inst_55400);

return statearr_55501;
})();
var statearr_55503_57749 = state_55427__$1;
(statearr_55503_57749[(2)] = null);

(statearr_55503_57749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55428 === (5))){
var inst_55400 = (state_55427[(7)]);
var state_55427__$1 = state_55427;
var statearr_55516_57750 = state_55427__$1;
(statearr_55516_57750[(2)] = inst_55400);

(statearr_55516_57750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55428 === (10))){
var inst_55421 = (state_55427[(2)]);
var state_55427__$1 = state_55427;
var statearr_55530_57751 = state_55427__$1;
(statearr_55530_57751[(2)] = inst_55421);

(statearr_55530_57751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55428 === (8))){
var inst_55411 = (state_55427[(9)]);
var inst_55414 = cljs.core.deref(inst_55411);
var state_55427__$1 = state_55427;
var statearr_55535_57752 = state_55427__$1;
(statearr_55535_57752[(2)] = inst_55414);

(statearr_55535_57752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__54247__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54247__auto____0 = (function (){
var statearr_55556 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55556[(0)] = cljs$core$async$reduce_$_state_machine__54247__auto__);

(statearr_55556[(1)] = (1));

return statearr_55556;
});
var cljs$core$async$reduce_$_state_machine__54247__auto____1 = (function (state_55427){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_55427);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e55559){var ex__54250__auto__ = e55559;
var statearr_55564_57753 = state_55427;
(statearr_55564_57753[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_55427[(4)]))){
var statearr_55565_57758 = state_55427;
(statearr_55565_57758[(1)] = cljs.core.first((state_55427[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57759 = state_55427;
state_55427 = G__57759;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54247__auto__ = function(state_55427){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54247__auto____1.call(this,state_55427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54247__auto____0;
cljs$core$async$reduce_$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54247__auto____1;
return cljs$core$async$reduce_$_state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_55566 = f__54462__auto__();
(statearr_55566[(6)] = c__54461__auto__);

return statearr_55566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));

return c__54461__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_55576){
var state_val_55577 = (state_55576[(1)]);
if((state_val_55577 === (1))){
var inst_55567 = cljs.core.async.reduce(f__$1,init,ch);
var state_55576__$1 = state_55576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55576__$1,(2),inst_55567);
} else {
if((state_val_55577 === (2))){
var inst_55569 = (state_55576[(2)]);
var inst_55570 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_55569) : f__$1.call(null,inst_55569));
var state_55576__$1 = state_55576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55576__$1,inst_55570);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54247__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54247__auto____0 = (function (){
var statearr_55591 = [null,null,null,null,null,null,null];
(statearr_55591[(0)] = cljs$core$async$transduce_$_state_machine__54247__auto__);

(statearr_55591[(1)] = (1));

return statearr_55591;
});
var cljs$core$async$transduce_$_state_machine__54247__auto____1 = (function (state_55576){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_55576);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e55596){var ex__54250__auto__ = e55596;
var statearr_55597_57766 = state_55576;
(statearr_55597_57766[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_55576[(4)]))){
var statearr_55598_57767 = state_55576;
(statearr_55598_57767[(1)] = cljs.core.first((state_55576[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57771 = state_55576;
state_55576 = G__57771;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54247__auto__ = function(state_55576){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54247__auto____1.call(this,state_55576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54247__auto____0;
cljs$core$async$transduce_$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54247__auto____1;
return cljs$core$async$transduce_$_state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_55599 = f__54462__auto__();
(statearr_55599[(6)] = c__54461__auto__);

return statearr_55599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));

return c__54461__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__55601 = arguments.length;
switch (G__55601) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__54461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_55636){
var state_val_55637 = (state_55636[(1)]);
if((state_val_55637 === (7))){
var inst_55616 = (state_55636[(2)]);
var state_55636__$1 = state_55636;
var statearr_55641_57776 = state_55636__$1;
(statearr_55641_57776[(2)] = inst_55616);

(statearr_55641_57776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (1))){
var inst_55607 = cljs.core.seq(coll);
var inst_55608 = inst_55607;
var state_55636__$1 = (function (){var statearr_55643 = state_55636;
(statearr_55643[(7)] = inst_55608);

return statearr_55643;
})();
var statearr_55644_57777 = state_55636__$1;
(statearr_55644_57777[(2)] = null);

(statearr_55644_57777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (4))){
var inst_55608 = (state_55636[(7)]);
var inst_55614 = cljs.core.first(inst_55608);
var state_55636__$1 = state_55636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55636__$1,(7),ch,inst_55614);
} else {
if((state_val_55637 === (13))){
var inst_55630 = (state_55636[(2)]);
var state_55636__$1 = state_55636;
var statearr_55645_57782 = state_55636__$1;
(statearr_55645_57782[(2)] = inst_55630);

(statearr_55645_57782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (6))){
var inst_55619 = (state_55636[(2)]);
var state_55636__$1 = state_55636;
if(cljs.core.truth_(inst_55619)){
var statearr_55650_57786 = state_55636__$1;
(statearr_55650_57786[(1)] = (8));

} else {
var statearr_55652_57787 = state_55636__$1;
(statearr_55652_57787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (3))){
var inst_55634 = (state_55636[(2)]);
var state_55636__$1 = state_55636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55636__$1,inst_55634);
} else {
if((state_val_55637 === (12))){
var state_55636__$1 = state_55636;
var statearr_55659_57788 = state_55636__$1;
(statearr_55659_57788[(2)] = null);

(statearr_55659_57788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (2))){
var inst_55608 = (state_55636[(7)]);
var state_55636__$1 = state_55636;
if(cljs.core.truth_(inst_55608)){
var statearr_55665_57789 = state_55636__$1;
(statearr_55665_57789[(1)] = (4));

} else {
var statearr_55667_57794 = state_55636__$1;
(statearr_55667_57794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (11))){
var inst_55627 = cljs.core.async.close_BANG_(ch);
var state_55636__$1 = state_55636;
var statearr_55669_57796 = state_55636__$1;
(statearr_55669_57796[(2)] = inst_55627);

(statearr_55669_57796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (9))){
var state_55636__$1 = state_55636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55670_57798 = state_55636__$1;
(statearr_55670_57798[(1)] = (11));

} else {
var statearr_55671_57799 = state_55636__$1;
(statearr_55671_57799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (5))){
var inst_55608 = (state_55636[(7)]);
var state_55636__$1 = state_55636;
var statearr_55672_57803 = state_55636__$1;
(statearr_55672_57803[(2)] = inst_55608);

(statearr_55672_57803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (10))){
var inst_55632 = (state_55636[(2)]);
var state_55636__$1 = state_55636;
var statearr_55673_57804 = state_55636__$1;
(statearr_55673_57804[(2)] = inst_55632);

(statearr_55673_57804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55637 === (8))){
var inst_55608 = (state_55636[(7)]);
var inst_55621 = cljs.core.next(inst_55608);
var inst_55608__$1 = inst_55621;
var state_55636__$1 = (function (){var statearr_55674 = state_55636;
(statearr_55674[(7)] = inst_55608__$1);

return statearr_55674;
})();
var statearr_55675_57805 = state_55636__$1;
(statearr_55675_57805[(2)] = null);

(statearr_55675_57805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_55680 = [null,null,null,null,null,null,null,null];
(statearr_55680[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_55680[(1)] = (1));

return statearr_55680;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_55636){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_55636);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e55681){var ex__54250__auto__ = e55681;
var statearr_55682_57809 = state_55636;
(statearr_55682_57809[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_55636[(4)]))){
var statearr_55687_57810 = state_55636;
(statearr_55687_57810[(1)] = cljs.core.first((state_55636[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57812 = state_55636;
state_55636 = G__57812;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_55636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_55636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_55695 = f__54462__auto__();
(statearr_55695[(6)] = c__54461__auto__);

return statearr_55695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));

return c__54461__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__55698 = arguments.length;
switch (G__55698) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_57817 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_57817(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_57821 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_57821(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_57822 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_57822(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_57823 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_57823(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55764 = (function (ch,cs,meta55765){
this.ch = ch;
this.cs = cs;
this.meta55765 = meta55765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55766,meta55765__$1){
var self__ = this;
var _55766__$1 = this;
return (new cljs.core.async.t_cljs$core$async55764(self__.ch,self__.cs,meta55765__$1));
}));

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55766){
var self__ = this;
var _55766__$1 = this;
return self__.meta55765;
}));

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async55764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta55765","meta55765",1179326375,null)], null);
}));

(cljs.core.async.t_cljs$core$async55764.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55764");

(cljs.core.async.t_cljs$core$async55764.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async55764");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55764.
 */
cljs.core.async.__GT_t_cljs$core$async55764 = (function cljs$core$async$mult_$___GT_t_cljs$core$async55764(ch__$1,cs__$1,meta55765){
return (new cljs.core.async.t_cljs$core$async55764(ch__$1,cs__$1,meta55765));
});

}

return (new cljs.core.async.t_cljs$core$async55764(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54461__auto___57832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_55931){
var state_val_55932 = (state_55931[(1)]);
if((state_val_55932 === (7))){
var inst_55925 = (state_55931[(2)]);
var state_55931__$1 = state_55931;
var statearr_55937_57833 = state_55931__$1;
(statearr_55937_57833[(2)] = inst_55925);

(statearr_55937_57833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (20))){
var inst_55829 = (state_55931[(7)]);
var inst_55841 = cljs.core.first(inst_55829);
var inst_55842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55841,(0),null);
var inst_55843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55841,(1),null);
var state_55931__$1 = (function (){var statearr_55938 = state_55931;
(statearr_55938[(8)] = inst_55842);

return statearr_55938;
})();
if(cljs.core.truth_(inst_55843)){
var statearr_55939_57835 = state_55931__$1;
(statearr_55939_57835[(1)] = (22));

} else {
var statearr_55940_57836 = state_55931__$1;
(statearr_55940_57836[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (27))){
var inst_55873 = (state_55931[(9)]);
var inst_55871 = (state_55931[(10)]);
var inst_55798 = (state_55931[(11)]);
var inst_55878 = (state_55931[(12)]);
var inst_55878__$1 = cljs.core._nth(inst_55871,inst_55873);
var inst_55879 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55878__$1,inst_55798,done);
var state_55931__$1 = (function (){var statearr_55941 = state_55931;
(statearr_55941[(12)] = inst_55878__$1);

return statearr_55941;
})();
if(cljs.core.truth_(inst_55879)){
var statearr_55942_57840 = state_55931__$1;
(statearr_55942_57840[(1)] = (30));

} else {
var statearr_55943_57841 = state_55931__$1;
(statearr_55943_57841[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (1))){
var state_55931__$1 = state_55931;
var statearr_55945_57843 = state_55931__$1;
(statearr_55945_57843[(2)] = null);

(statearr_55945_57843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (24))){
var inst_55829 = (state_55931[(7)]);
var inst_55848 = (state_55931[(2)]);
var inst_55849 = cljs.core.next(inst_55829);
var inst_55807 = inst_55849;
var inst_55808 = null;
var inst_55809 = (0);
var inst_55810 = (0);
var state_55931__$1 = (function (){var statearr_55946 = state_55931;
(statearr_55946[(13)] = inst_55808);

(statearr_55946[(14)] = inst_55809);

(statearr_55946[(15)] = inst_55848);

(statearr_55946[(16)] = inst_55810);

(statearr_55946[(17)] = inst_55807);

return statearr_55946;
})();
var statearr_55947_57847 = state_55931__$1;
(statearr_55947_57847[(2)] = null);

(statearr_55947_57847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (39))){
var state_55931__$1 = state_55931;
var statearr_55954_57848 = state_55931__$1;
(statearr_55954_57848[(2)] = null);

(statearr_55954_57848[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (4))){
var inst_55798 = (state_55931[(11)]);
var inst_55798__$1 = (state_55931[(2)]);
var inst_55799 = (inst_55798__$1 == null);
var state_55931__$1 = (function (){var statearr_55955 = state_55931;
(statearr_55955[(11)] = inst_55798__$1);

return statearr_55955;
})();
if(cljs.core.truth_(inst_55799)){
var statearr_55956_57850 = state_55931__$1;
(statearr_55956_57850[(1)] = (5));

} else {
var statearr_55957_57851 = state_55931__$1;
(statearr_55957_57851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (15))){
var inst_55808 = (state_55931[(13)]);
var inst_55809 = (state_55931[(14)]);
var inst_55810 = (state_55931[(16)]);
var inst_55807 = (state_55931[(17)]);
var inst_55825 = (state_55931[(2)]);
var inst_55826 = (inst_55810 + (1));
var tmp55948 = inst_55808;
var tmp55949 = inst_55809;
var tmp55950 = inst_55807;
var inst_55807__$1 = tmp55950;
var inst_55808__$1 = tmp55948;
var inst_55809__$1 = tmp55949;
var inst_55810__$1 = inst_55826;
var state_55931__$1 = (function (){var statearr_55958 = state_55931;
(statearr_55958[(13)] = inst_55808__$1);

(statearr_55958[(14)] = inst_55809__$1);

(statearr_55958[(16)] = inst_55810__$1);

(statearr_55958[(18)] = inst_55825);

(statearr_55958[(17)] = inst_55807__$1);

return statearr_55958;
})();
var statearr_55959_57856 = state_55931__$1;
(statearr_55959_57856[(2)] = null);

(statearr_55959_57856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (21))){
var inst_55852 = (state_55931[(2)]);
var state_55931__$1 = state_55931;
var statearr_55964_57857 = state_55931__$1;
(statearr_55964_57857[(2)] = inst_55852);

(statearr_55964_57857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (31))){
var inst_55878 = (state_55931[(12)]);
var inst_55882 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55878);
var state_55931__$1 = state_55931;
var statearr_55967_57860 = state_55931__$1;
(statearr_55967_57860[(2)] = inst_55882);

(statearr_55967_57860[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (32))){
var inst_55873 = (state_55931[(9)]);
var inst_55871 = (state_55931[(10)]);
var inst_55870 = (state_55931[(19)]);
var inst_55872 = (state_55931[(20)]);
var inst_55884 = (state_55931[(2)]);
var inst_55885 = (inst_55873 + (1));
var tmp55961 = inst_55871;
var tmp55962 = inst_55870;
var tmp55963 = inst_55872;
var inst_55870__$1 = tmp55962;
var inst_55871__$1 = tmp55961;
var inst_55872__$1 = tmp55963;
var inst_55873__$1 = inst_55885;
var state_55931__$1 = (function (){var statearr_55968 = state_55931;
(statearr_55968[(9)] = inst_55873__$1);

(statearr_55968[(21)] = inst_55884);

(statearr_55968[(10)] = inst_55871__$1);

(statearr_55968[(19)] = inst_55870__$1);

(statearr_55968[(20)] = inst_55872__$1);

return statearr_55968;
})();
var statearr_55969_57865 = state_55931__$1;
(statearr_55969_57865[(2)] = null);

(statearr_55969_57865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (40))){
var inst_55898 = (state_55931[(22)]);
var inst_55902 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55898);
var state_55931__$1 = state_55931;
var statearr_55971_57868 = state_55931__$1;
(statearr_55971_57868[(2)] = inst_55902);

(statearr_55971_57868[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (33))){
var inst_55888 = (state_55931[(23)]);
var inst_55891 = cljs.core.chunked_seq_QMARK_(inst_55888);
var state_55931__$1 = state_55931;
if(inst_55891){
var statearr_55973_57870 = state_55931__$1;
(statearr_55973_57870[(1)] = (36));

} else {
var statearr_55975_57874 = state_55931__$1;
(statearr_55975_57874[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (13))){
var inst_55819 = (state_55931[(24)]);
var inst_55822 = cljs.core.async.close_BANG_(inst_55819);
var state_55931__$1 = state_55931;
var statearr_55978_57876 = state_55931__$1;
(statearr_55978_57876[(2)] = inst_55822);

(statearr_55978_57876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (22))){
var inst_55842 = (state_55931[(8)]);
var inst_55845 = cljs.core.async.close_BANG_(inst_55842);
var state_55931__$1 = state_55931;
var statearr_55979_57878 = state_55931__$1;
(statearr_55979_57878[(2)] = inst_55845);

(statearr_55979_57878[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (36))){
var inst_55888 = (state_55931[(23)]);
var inst_55893 = cljs.core.chunk_first(inst_55888);
var inst_55894 = cljs.core.chunk_rest(inst_55888);
var inst_55895 = cljs.core.count(inst_55893);
var inst_55870 = inst_55894;
var inst_55871 = inst_55893;
var inst_55872 = inst_55895;
var inst_55873 = (0);
var state_55931__$1 = (function (){var statearr_55982 = state_55931;
(statearr_55982[(9)] = inst_55873);

(statearr_55982[(10)] = inst_55871);

(statearr_55982[(19)] = inst_55870);

(statearr_55982[(20)] = inst_55872);

return statearr_55982;
})();
var statearr_55983_57882 = state_55931__$1;
(statearr_55983_57882[(2)] = null);

(statearr_55983_57882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (41))){
var inst_55888 = (state_55931[(23)]);
var inst_55904 = (state_55931[(2)]);
var inst_55905 = cljs.core.next(inst_55888);
var inst_55870 = inst_55905;
var inst_55871 = null;
var inst_55872 = (0);
var inst_55873 = (0);
var state_55931__$1 = (function (){var statearr_55987 = state_55931;
(statearr_55987[(9)] = inst_55873);

(statearr_55987[(10)] = inst_55871);

(statearr_55987[(19)] = inst_55870);

(statearr_55987[(25)] = inst_55904);

(statearr_55987[(20)] = inst_55872);

return statearr_55987;
})();
var statearr_55988_57887 = state_55931__$1;
(statearr_55988_57887[(2)] = null);

(statearr_55988_57887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (43))){
var state_55931__$1 = state_55931;
var statearr_55989_57888 = state_55931__$1;
(statearr_55989_57888[(2)] = null);

(statearr_55989_57888[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (29))){
var inst_55913 = (state_55931[(2)]);
var state_55931__$1 = state_55931;
var statearr_55991_57889 = state_55931__$1;
(statearr_55991_57889[(2)] = inst_55913);

(statearr_55991_57889[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (44))){
var inst_55922 = (state_55931[(2)]);
var state_55931__$1 = (function (){var statearr_55992 = state_55931;
(statearr_55992[(26)] = inst_55922);

return statearr_55992;
})();
var statearr_55994_57891 = state_55931__$1;
(statearr_55994_57891[(2)] = null);

(statearr_55994_57891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (6))){
var inst_55862 = (state_55931[(27)]);
var inst_55861 = cljs.core.deref(cs);
var inst_55862__$1 = cljs.core.keys(inst_55861);
var inst_55863 = cljs.core.count(inst_55862__$1);
var inst_55864 = cljs.core.reset_BANG_(dctr,inst_55863);
var inst_55869 = cljs.core.seq(inst_55862__$1);
var inst_55870 = inst_55869;
var inst_55871 = null;
var inst_55872 = (0);
var inst_55873 = (0);
var state_55931__$1 = (function (){var statearr_56003 = state_55931;
(statearr_56003[(9)] = inst_55873);

(statearr_56003[(10)] = inst_55871);

(statearr_56003[(19)] = inst_55870);

(statearr_56003[(28)] = inst_55864);

(statearr_56003[(27)] = inst_55862__$1);

(statearr_56003[(20)] = inst_55872);

return statearr_56003;
})();
var statearr_56008_57896 = state_55931__$1;
(statearr_56008_57896[(2)] = null);

(statearr_56008_57896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (28))){
var inst_55888 = (state_55931[(23)]);
var inst_55870 = (state_55931[(19)]);
var inst_55888__$1 = cljs.core.seq(inst_55870);
var state_55931__$1 = (function (){var statearr_56010 = state_55931;
(statearr_56010[(23)] = inst_55888__$1);

return statearr_56010;
})();
if(inst_55888__$1){
var statearr_56011_57898 = state_55931__$1;
(statearr_56011_57898[(1)] = (33));

} else {
var statearr_56012_57900 = state_55931__$1;
(statearr_56012_57900[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (25))){
var inst_55873 = (state_55931[(9)]);
var inst_55872 = (state_55931[(20)]);
var inst_55875 = (inst_55873 < inst_55872);
var inst_55876 = inst_55875;
var state_55931__$1 = state_55931;
if(cljs.core.truth_(inst_55876)){
var statearr_56014_57903 = state_55931__$1;
(statearr_56014_57903[(1)] = (27));

} else {
var statearr_56015_57904 = state_55931__$1;
(statearr_56015_57904[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (34))){
var state_55931__$1 = state_55931;
var statearr_56017_57906 = state_55931__$1;
(statearr_56017_57906[(2)] = null);

(statearr_56017_57906[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (17))){
var state_55931__$1 = state_55931;
var statearr_56021_57908 = state_55931__$1;
(statearr_56021_57908[(2)] = null);

(statearr_56021_57908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (3))){
var inst_55927 = (state_55931[(2)]);
var state_55931__$1 = state_55931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55931__$1,inst_55927);
} else {
if((state_val_55932 === (12))){
var inst_55857 = (state_55931[(2)]);
var state_55931__$1 = state_55931;
var statearr_56023_57911 = state_55931__$1;
(statearr_56023_57911[(2)] = inst_55857);

(statearr_56023_57911[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (2))){
var state_55931__$1 = state_55931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55931__$1,(4),ch);
} else {
if((state_val_55932 === (23))){
var state_55931__$1 = state_55931;
var statearr_56024_57913 = state_55931__$1;
(statearr_56024_57913[(2)] = null);

(statearr_56024_57913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (35))){
var inst_55911 = (state_55931[(2)]);
var state_55931__$1 = state_55931;
var statearr_56025_57915 = state_55931__$1;
(statearr_56025_57915[(2)] = inst_55911);

(statearr_56025_57915[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (19))){
var inst_55829 = (state_55931[(7)]);
var inst_55833 = cljs.core.chunk_first(inst_55829);
var inst_55834 = cljs.core.chunk_rest(inst_55829);
var inst_55835 = cljs.core.count(inst_55833);
var inst_55807 = inst_55834;
var inst_55808 = inst_55833;
var inst_55809 = inst_55835;
var inst_55810 = (0);
var state_55931__$1 = (function (){var statearr_56026 = state_55931;
(statearr_56026[(13)] = inst_55808);

(statearr_56026[(14)] = inst_55809);

(statearr_56026[(16)] = inst_55810);

(statearr_56026[(17)] = inst_55807);

return statearr_56026;
})();
var statearr_56027_57919 = state_55931__$1;
(statearr_56027_57919[(2)] = null);

(statearr_56027_57919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (11))){
var inst_55829 = (state_55931[(7)]);
var inst_55807 = (state_55931[(17)]);
var inst_55829__$1 = cljs.core.seq(inst_55807);
var state_55931__$1 = (function (){var statearr_56028 = state_55931;
(statearr_56028[(7)] = inst_55829__$1);

return statearr_56028;
})();
if(inst_55829__$1){
var statearr_56029_57921 = state_55931__$1;
(statearr_56029_57921[(1)] = (16));

} else {
var statearr_56031_57922 = state_55931__$1;
(statearr_56031_57922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (9))){
var inst_55859 = (state_55931[(2)]);
var state_55931__$1 = state_55931;
var statearr_56032_57923 = state_55931__$1;
(statearr_56032_57923[(2)] = inst_55859);

(statearr_56032_57923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (5))){
var inst_55805 = cljs.core.deref(cs);
var inst_55806 = cljs.core.seq(inst_55805);
var inst_55807 = inst_55806;
var inst_55808 = null;
var inst_55809 = (0);
var inst_55810 = (0);
var state_55931__$1 = (function (){var statearr_56033 = state_55931;
(statearr_56033[(13)] = inst_55808);

(statearr_56033[(14)] = inst_55809);

(statearr_56033[(16)] = inst_55810);

(statearr_56033[(17)] = inst_55807);

return statearr_56033;
})();
var statearr_56035_57931 = state_55931__$1;
(statearr_56035_57931[(2)] = null);

(statearr_56035_57931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (14))){
var state_55931__$1 = state_55931;
var statearr_56037_57933 = state_55931__$1;
(statearr_56037_57933[(2)] = null);

(statearr_56037_57933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (45))){
var inst_55919 = (state_55931[(2)]);
var state_55931__$1 = state_55931;
var statearr_56038_57936 = state_55931__$1;
(statearr_56038_57936[(2)] = inst_55919);

(statearr_56038_57936[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (26))){
var inst_55862 = (state_55931[(27)]);
var inst_55915 = (state_55931[(2)]);
var inst_55916 = cljs.core.seq(inst_55862);
var state_55931__$1 = (function (){var statearr_56039 = state_55931;
(statearr_56039[(29)] = inst_55915);

return statearr_56039;
})();
if(inst_55916){
var statearr_56040_57943 = state_55931__$1;
(statearr_56040_57943[(1)] = (42));

} else {
var statearr_56041_57944 = state_55931__$1;
(statearr_56041_57944[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (16))){
var inst_55829 = (state_55931[(7)]);
var inst_55831 = cljs.core.chunked_seq_QMARK_(inst_55829);
var state_55931__$1 = state_55931;
if(inst_55831){
var statearr_56042_57950 = state_55931__$1;
(statearr_56042_57950[(1)] = (19));

} else {
var statearr_56043_57951 = state_55931__$1;
(statearr_56043_57951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (38))){
var inst_55908 = (state_55931[(2)]);
var state_55931__$1 = state_55931;
var statearr_56044_57954 = state_55931__$1;
(statearr_56044_57954[(2)] = inst_55908);

(statearr_56044_57954[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (30))){
var state_55931__$1 = state_55931;
var statearr_56046_57956 = state_55931__$1;
(statearr_56046_57956[(2)] = null);

(statearr_56046_57956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (10))){
var inst_55808 = (state_55931[(13)]);
var inst_55810 = (state_55931[(16)]);
var inst_55818 = cljs.core._nth(inst_55808,inst_55810);
var inst_55819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55818,(0),null);
var inst_55820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55818,(1),null);
var state_55931__$1 = (function (){var statearr_56047 = state_55931;
(statearr_56047[(24)] = inst_55819);

return statearr_56047;
})();
if(cljs.core.truth_(inst_55820)){
var statearr_56048_57966 = state_55931__$1;
(statearr_56048_57966[(1)] = (13));

} else {
var statearr_56049_57973 = state_55931__$1;
(statearr_56049_57973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (18))){
var inst_55855 = (state_55931[(2)]);
var state_55931__$1 = state_55931;
var statearr_56050_57975 = state_55931__$1;
(statearr_56050_57975[(2)] = inst_55855);

(statearr_56050_57975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (42))){
var state_55931__$1 = state_55931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55931__$1,(45),dchan);
} else {
if((state_val_55932 === (37))){
var inst_55888 = (state_55931[(23)]);
var inst_55898 = (state_55931[(22)]);
var inst_55798 = (state_55931[(11)]);
var inst_55898__$1 = cljs.core.first(inst_55888);
var inst_55899 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55898__$1,inst_55798,done);
var state_55931__$1 = (function (){var statearr_56052 = state_55931;
(statearr_56052[(22)] = inst_55898__$1);

return statearr_56052;
})();
if(cljs.core.truth_(inst_55899)){
var statearr_56053_57978 = state_55931__$1;
(statearr_56053_57978[(1)] = (39));

} else {
var statearr_56054_57979 = state_55931__$1;
(statearr_56054_57979[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55932 === (8))){
var inst_55809 = (state_55931[(14)]);
var inst_55810 = (state_55931[(16)]);
var inst_55812 = (inst_55810 < inst_55809);
var inst_55813 = inst_55812;
var state_55931__$1 = state_55931;
if(cljs.core.truth_(inst_55813)){
var statearr_56056_57984 = state_55931__$1;
(statearr_56056_57984[(1)] = (10));

} else {
var statearr_56057_57985 = state_55931__$1;
(statearr_56057_57985[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__54247__auto__ = null;
var cljs$core$async$mult_$_state_machine__54247__auto____0 = (function (){
var statearr_56059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56059[(0)] = cljs$core$async$mult_$_state_machine__54247__auto__);

(statearr_56059[(1)] = (1));

return statearr_56059;
});
var cljs$core$async$mult_$_state_machine__54247__auto____1 = (function (state_55931){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_55931);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e56060){var ex__54250__auto__ = e56060;
var statearr_56061_57997 = state_55931;
(statearr_56061_57997[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_55931[(4)]))){
var statearr_56064_57998 = state_55931;
(statearr_56064_57998[(1)] = cljs.core.first((state_55931[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57999 = state_55931;
state_55931 = G__57999;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54247__auto__ = function(state_55931){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54247__auto____1.call(this,state_55931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54247__auto____0;
cljs$core$async$mult_$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54247__auto____1;
return cljs$core$async$mult_$_state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_56066 = f__54462__auto__();
(statearr_56066[(6)] = c__54461__auto___57832);

return statearr_56066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__56073 = arguments.length;
switch (G__56073) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_58012 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_58012(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_58017 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_58017(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_58019 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_58019(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_58033 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_58033(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_58037 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_58037(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58038 = arguments.length;
var i__4865__auto___58039 = (0);
while(true){
if((i__4865__auto___58039 < len__4864__auto___58038)){
args__4870__auto__.push((arguments[i__4865__auto___58039]));

var G__58041 = (i__4865__auto___58039 + (1));
i__4865__auto___58039 = G__58041;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__56183){
var map__56184 = p__56183;
var map__56184__$1 = cljs.core.__destructure_map(map__56184);
var opts = map__56184__$1;
var statearr_56186_58042 = state;
(statearr_56186_58042[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_56188_58045 = state;
(statearr_56188_58045[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_56189_58047 = state;
(statearr_56189_58047[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq56171){
var G__56172 = cljs.core.first(seq56171);
var seq56171__$1 = cljs.core.next(seq56171);
var G__56173 = cljs.core.first(seq56171__$1);
var seq56171__$2 = cljs.core.next(seq56171__$1);
var G__56174 = cljs.core.first(seq56171__$2);
var seq56171__$3 = cljs.core.next(seq56171__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56172,G__56173,G__56174,seq56171__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56216 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta56217){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta56217 = meta56217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56218,meta56217__$1){
var self__ = this;
var _56218__$1 = this;
return (new cljs.core.async.t_cljs$core$async56216(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta56217__$1));
}));

(cljs.core.async.t_cljs$core$async56216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56218){
var self__ = this;
var _56218__$1 = this;
return self__.meta56217;
}));

(cljs.core.async.t_cljs$core$async56216.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async56216.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56216.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56216.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56216.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56216.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56216.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta56217","meta56217",-200165847,null)], null);
}));

(cljs.core.async.t_cljs$core$async56216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56216");

(cljs.core.async.t_cljs$core$async56216.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56216.
 */
cljs.core.async.__GT_t_cljs$core$async56216 = (function cljs$core$async$mix_$___GT_t_cljs$core$async56216(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56217){
return (new cljs.core.async.t_cljs$core$async56216(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56217));
});

}

return (new cljs.core.async.t_cljs$core$async56216(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54461__auto___58075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_56295){
var state_val_56296 = (state_56295[(1)]);
if((state_val_56296 === (7))){
var inst_56253 = (state_56295[(2)]);
var state_56295__$1 = state_56295;
if(cljs.core.truth_(inst_56253)){
var statearr_56298_58077 = state_56295__$1;
(statearr_56298_58077[(1)] = (8));

} else {
var statearr_56300_58078 = state_56295__$1;
(statearr_56300_58078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (20))){
var inst_56246 = (state_56295[(7)]);
var state_56295__$1 = state_56295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56295__$1,(23),out,inst_56246);
} else {
if((state_val_56296 === (1))){
var inst_56228 = calc_state();
var inst_56229 = cljs.core.__destructure_map(inst_56228);
var inst_56230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56229,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56229,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56229,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_56233 = inst_56228;
var state_56295__$1 = (function (){var statearr_56301 = state_56295;
(statearr_56301[(8)] = inst_56232);

(statearr_56301[(9)] = inst_56231);

(statearr_56301[(10)] = inst_56233);

(statearr_56301[(11)] = inst_56230);

return statearr_56301;
})();
var statearr_56303_58083 = state_56295__$1;
(statearr_56303_58083[(2)] = null);

(statearr_56303_58083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (24))){
var inst_56236 = (state_56295[(12)]);
var inst_56233 = inst_56236;
var state_56295__$1 = (function (){var statearr_56304 = state_56295;
(statearr_56304[(10)] = inst_56233);

return statearr_56304;
})();
var statearr_56305_58084 = state_56295__$1;
(statearr_56305_58084[(2)] = null);

(statearr_56305_58084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (4))){
var inst_56248 = (state_56295[(13)]);
var inst_56246 = (state_56295[(7)]);
var inst_56244 = (state_56295[(2)]);
var inst_56246__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56244,(0),null);
var inst_56247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56244,(1),null);
var inst_56248__$1 = (inst_56246__$1 == null);
var state_56295__$1 = (function (){var statearr_56309 = state_56295;
(statearr_56309[(13)] = inst_56248__$1);

(statearr_56309[(14)] = inst_56247);

(statearr_56309[(7)] = inst_56246__$1);

return statearr_56309;
})();
if(cljs.core.truth_(inst_56248__$1)){
var statearr_56310_58089 = state_56295__$1;
(statearr_56310_58089[(1)] = (5));

} else {
var statearr_56311_58090 = state_56295__$1;
(statearr_56311_58090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (15))){
var inst_56237 = (state_56295[(15)]);
var inst_56268 = (state_56295[(16)]);
var inst_56268__$1 = cljs.core.empty_QMARK_(inst_56237);
var state_56295__$1 = (function (){var statearr_56318 = state_56295;
(statearr_56318[(16)] = inst_56268__$1);

return statearr_56318;
})();
if(inst_56268__$1){
var statearr_56319_58094 = state_56295__$1;
(statearr_56319_58094[(1)] = (17));

} else {
var statearr_56320_58095 = state_56295__$1;
(statearr_56320_58095[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (21))){
var inst_56236 = (state_56295[(12)]);
var inst_56233 = inst_56236;
var state_56295__$1 = (function (){var statearr_56328 = state_56295;
(statearr_56328[(10)] = inst_56233);

return statearr_56328;
})();
var statearr_56334_58097 = state_56295__$1;
(statearr_56334_58097[(2)] = null);

(statearr_56334_58097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (13))){
var inst_56260 = (state_56295[(2)]);
var inst_56261 = calc_state();
var inst_56233 = inst_56261;
var state_56295__$1 = (function (){var statearr_56336 = state_56295;
(statearr_56336[(10)] = inst_56233);

(statearr_56336[(17)] = inst_56260);

return statearr_56336;
})();
var statearr_56341_58100 = state_56295__$1;
(statearr_56341_58100[(2)] = null);

(statearr_56341_58100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (22))){
var inst_56289 = (state_56295[(2)]);
var state_56295__$1 = state_56295;
var statearr_56342_58103 = state_56295__$1;
(statearr_56342_58103[(2)] = inst_56289);

(statearr_56342_58103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (6))){
var inst_56247 = (state_56295[(14)]);
var inst_56251 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56247,change);
var state_56295__$1 = state_56295;
var statearr_56344_58107 = state_56295__$1;
(statearr_56344_58107[(2)] = inst_56251);

(statearr_56344_58107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (25))){
var state_56295__$1 = state_56295;
var statearr_56345_58109 = state_56295__$1;
(statearr_56345_58109[(2)] = null);

(statearr_56345_58109[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (17))){
var inst_56238 = (state_56295[(18)]);
var inst_56247 = (state_56295[(14)]);
var inst_56270 = (inst_56238.cljs$core$IFn$_invoke$arity$1 ? inst_56238.cljs$core$IFn$_invoke$arity$1(inst_56247) : inst_56238.call(null,inst_56247));
var inst_56271 = cljs.core.not(inst_56270);
var state_56295__$1 = state_56295;
var statearr_56346_58112 = state_56295__$1;
(statearr_56346_58112[(2)] = inst_56271);

(statearr_56346_58112[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (3))){
var inst_56293 = (state_56295[(2)]);
var state_56295__$1 = state_56295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56295__$1,inst_56293);
} else {
if((state_val_56296 === (12))){
var state_56295__$1 = state_56295;
var statearr_56347_58114 = state_56295__$1;
(statearr_56347_58114[(2)] = null);

(statearr_56347_58114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (2))){
var inst_56236 = (state_56295[(12)]);
var inst_56233 = (state_56295[(10)]);
var inst_56236__$1 = cljs.core.__destructure_map(inst_56233);
var inst_56237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56236__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56236__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56236__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_56295__$1 = (function (){var statearr_56348 = state_56295;
(statearr_56348[(12)] = inst_56236__$1);

(statearr_56348[(15)] = inst_56237);

(statearr_56348[(18)] = inst_56238);

return statearr_56348;
})();
return cljs.core.async.ioc_alts_BANG_(state_56295__$1,(4),inst_56239);
} else {
if((state_val_56296 === (23))){
var inst_56280 = (state_56295[(2)]);
var state_56295__$1 = state_56295;
if(cljs.core.truth_(inst_56280)){
var statearr_56349_58119 = state_56295__$1;
(statearr_56349_58119[(1)] = (24));

} else {
var statearr_56350_58120 = state_56295__$1;
(statearr_56350_58120[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (19))){
var inst_56275 = (state_56295[(2)]);
var state_56295__$1 = state_56295;
var statearr_56351_58121 = state_56295__$1;
(statearr_56351_58121[(2)] = inst_56275);

(statearr_56351_58121[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (11))){
var inst_56247 = (state_56295[(14)]);
var inst_56257 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_56247);
var state_56295__$1 = state_56295;
var statearr_56352_58123 = state_56295__$1;
(statearr_56352_58123[(2)] = inst_56257);

(statearr_56352_58123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (9))){
var inst_56237 = (state_56295[(15)]);
var inst_56265 = (state_56295[(19)]);
var inst_56247 = (state_56295[(14)]);
var inst_56265__$1 = (inst_56237.cljs$core$IFn$_invoke$arity$1 ? inst_56237.cljs$core$IFn$_invoke$arity$1(inst_56247) : inst_56237.call(null,inst_56247));
var state_56295__$1 = (function (){var statearr_56353 = state_56295;
(statearr_56353[(19)] = inst_56265__$1);

return statearr_56353;
})();
if(cljs.core.truth_(inst_56265__$1)){
var statearr_56354_58128 = state_56295__$1;
(statearr_56354_58128[(1)] = (14));

} else {
var statearr_56355_58129 = state_56295__$1;
(statearr_56355_58129[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (5))){
var inst_56248 = (state_56295[(13)]);
var state_56295__$1 = state_56295;
var statearr_56356_58133 = state_56295__$1;
(statearr_56356_58133[(2)] = inst_56248);

(statearr_56356_58133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (14))){
var inst_56265 = (state_56295[(19)]);
var state_56295__$1 = state_56295;
var statearr_56357_58135 = state_56295__$1;
(statearr_56357_58135[(2)] = inst_56265);

(statearr_56357_58135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (26))){
var inst_56285 = (state_56295[(2)]);
var state_56295__$1 = state_56295;
var statearr_56358_58139 = state_56295__$1;
(statearr_56358_58139[(2)] = inst_56285);

(statearr_56358_58139[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (16))){
var inst_56277 = (state_56295[(2)]);
var state_56295__$1 = state_56295;
if(cljs.core.truth_(inst_56277)){
var statearr_56361_58141 = state_56295__$1;
(statearr_56361_58141[(1)] = (20));

} else {
var statearr_56362_58143 = state_56295__$1;
(statearr_56362_58143[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (10))){
var inst_56291 = (state_56295[(2)]);
var state_56295__$1 = state_56295;
var statearr_56363_58146 = state_56295__$1;
(statearr_56363_58146[(2)] = inst_56291);

(statearr_56363_58146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (18))){
var inst_56268 = (state_56295[(16)]);
var state_56295__$1 = state_56295;
var statearr_56364_58148 = state_56295__$1;
(statearr_56364_58148[(2)] = inst_56268);

(statearr_56364_58148[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56296 === (8))){
var inst_56246 = (state_56295[(7)]);
var inst_56255 = (inst_56246 == null);
var state_56295__$1 = state_56295;
if(cljs.core.truth_(inst_56255)){
var statearr_56365_58153 = state_56295__$1;
(statearr_56365_58153[(1)] = (11));

} else {
var statearr_56366_58155 = state_56295__$1;
(statearr_56366_58155[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__54247__auto__ = null;
var cljs$core$async$mix_$_state_machine__54247__auto____0 = (function (){
var statearr_56371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56371[(0)] = cljs$core$async$mix_$_state_machine__54247__auto__);

(statearr_56371[(1)] = (1));

return statearr_56371;
});
var cljs$core$async$mix_$_state_machine__54247__auto____1 = (function (state_56295){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_56295);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e56372){var ex__54250__auto__ = e56372;
var statearr_56373_58160 = state_56295;
(statearr_56373_58160[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_56295[(4)]))){
var statearr_56374_58161 = state_56295;
(statearr_56374_58161[(1)] = cljs.core.first((state_56295[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58164 = state_56295;
state_56295 = G__58164;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54247__auto__ = function(state_56295){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54247__auto____1.call(this,state_56295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54247__auto____0;
cljs$core$async$mix_$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54247__auto____1;
return cljs$core$async$mix_$_state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_56375 = f__54462__auto__();
(statearr_56375[(6)] = c__54461__auto___58075);

return statearr_56375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_58166 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_58166(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_58170 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_58170(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_58171 = (function() {
var G__58172 = null;
var G__58172__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__58172__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__58172 = function(p,v){
switch(arguments.length){
case 1:
return G__58172__1.call(this,p);
case 2:
return G__58172__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58172.cljs$core$IFn$_invoke$arity$1 = G__58172__1;
G__58172.cljs$core$IFn$_invoke$arity$2 = G__58172__2;
return G__58172;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__56387 = arguments.length;
switch (G__56387) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_58171(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_58171(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__56392 = arguments.length;
switch (G__56392) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__56390_SHARP_){
if(cljs.core.truth_((p1__56390_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56390_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__56390_SHARP_.call(null,topic)))){
return p1__56390_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56390_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56396 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta56397){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta56397 = meta56397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56398,meta56397__$1){
var self__ = this;
var _56398__$1 = this;
return (new cljs.core.async.t_cljs$core$async56396(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta56397__$1));
}));

(cljs.core.async.t_cljs$core$async56396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56398){
var self__ = this;
var _56398__$1 = this;
return self__.meta56397;
}));

(cljs.core.async.t_cljs$core$async56396.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56396.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56396.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async56396.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async56396.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async56396.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async56396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta56397","meta56397",-1633612883,null)], null);
}));

(cljs.core.async.t_cljs$core$async56396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56396");

(cljs.core.async.t_cljs$core$async56396.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56396.
 */
cljs.core.async.__GT_t_cljs$core$async56396 = (function cljs$core$async$__GT_t_cljs$core$async56396(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56397){
return (new cljs.core.async.t_cljs$core$async56396(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56397));
});

}

return (new cljs.core.async.t_cljs$core$async56396(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54461__auto___58188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_56476){
var state_val_56478 = (state_56476[(1)]);
if((state_val_56478 === (7))){
var inst_56472 = (state_56476[(2)]);
var state_56476__$1 = state_56476;
var statearr_56479_58189 = state_56476__$1;
(statearr_56479_58189[(2)] = inst_56472);

(statearr_56479_58189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (20))){
var state_56476__$1 = state_56476;
var statearr_56480_58190 = state_56476__$1;
(statearr_56480_58190[(2)] = null);

(statearr_56480_58190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (1))){
var state_56476__$1 = state_56476;
var statearr_56481_58191 = state_56476__$1;
(statearr_56481_58191[(2)] = null);

(statearr_56481_58191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (24))){
var inst_56455 = (state_56476[(7)]);
var inst_56464 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_56455);
var state_56476__$1 = state_56476;
var statearr_56482_58192 = state_56476__$1;
(statearr_56482_58192[(2)] = inst_56464);

(statearr_56482_58192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (4))){
var inst_56404 = (state_56476[(8)]);
var inst_56404__$1 = (state_56476[(2)]);
var inst_56406 = (inst_56404__$1 == null);
var state_56476__$1 = (function (){var statearr_56483 = state_56476;
(statearr_56483[(8)] = inst_56404__$1);

return statearr_56483;
})();
if(cljs.core.truth_(inst_56406)){
var statearr_56484_58196 = state_56476__$1;
(statearr_56484_58196[(1)] = (5));

} else {
var statearr_56485_58197 = state_56476__$1;
(statearr_56485_58197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (15))){
var inst_56449 = (state_56476[(2)]);
var state_56476__$1 = state_56476;
var statearr_56486_58202 = state_56476__$1;
(statearr_56486_58202[(2)] = inst_56449);

(statearr_56486_58202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (21))){
var inst_56469 = (state_56476[(2)]);
var state_56476__$1 = (function (){var statearr_56487 = state_56476;
(statearr_56487[(9)] = inst_56469);

return statearr_56487;
})();
var statearr_56488_58203 = state_56476__$1;
(statearr_56488_58203[(2)] = null);

(statearr_56488_58203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (13))){
var inst_56430 = (state_56476[(10)]);
var inst_56432 = cljs.core.chunked_seq_QMARK_(inst_56430);
var state_56476__$1 = state_56476;
if(inst_56432){
var statearr_56489_58205 = state_56476__$1;
(statearr_56489_58205[(1)] = (16));

} else {
var statearr_56490_58206 = state_56476__$1;
(statearr_56490_58206[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (22))){
var inst_56461 = (state_56476[(2)]);
var state_56476__$1 = state_56476;
if(cljs.core.truth_(inst_56461)){
var statearr_56491_58207 = state_56476__$1;
(statearr_56491_58207[(1)] = (23));

} else {
var statearr_56492_58208 = state_56476__$1;
(statearr_56492_58208[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (6))){
var inst_56404 = (state_56476[(8)]);
var inst_56455 = (state_56476[(7)]);
var inst_56457 = (state_56476[(11)]);
var inst_56455__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_56404) : topic_fn.call(null,inst_56404));
var inst_56456 = cljs.core.deref(mults);
var inst_56457__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56456,inst_56455__$1);
var state_56476__$1 = (function (){var statearr_56494 = state_56476;
(statearr_56494[(7)] = inst_56455__$1);

(statearr_56494[(11)] = inst_56457__$1);

return statearr_56494;
})();
if(cljs.core.truth_(inst_56457__$1)){
var statearr_56495_58210 = state_56476__$1;
(statearr_56495_58210[(1)] = (19));

} else {
var statearr_56496_58211 = state_56476__$1;
(statearr_56496_58211[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (25))){
var inst_56466 = (state_56476[(2)]);
var state_56476__$1 = state_56476;
var statearr_56497_58212 = state_56476__$1;
(statearr_56497_58212[(2)] = inst_56466);

(statearr_56497_58212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (17))){
var inst_56430 = (state_56476[(10)]);
var inst_56440 = cljs.core.first(inst_56430);
var inst_56441 = cljs.core.async.muxch_STAR_(inst_56440);
var inst_56442 = cljs.core.async.close_BANG_(inst_56441);
var inst_56443 = cljs.core.next(inst_56430);
var inst_56415 = inst_56443;
var inst_56416 = null;
var inst_56417 = (0);
var inst_56418 = (0);
var state_56476__$1 = (function (){var statearr_56498 = state_56476;
(statearr_56498[(12)] = inst_56416);

(statearr_56498[(13)] = inst_56418);

(statearr_56498[(14)] = inst_56415);

(statearr_56498[(15)] = inst_56442);

(statearr_56498[(16)] = inst_56417);

return statearr_56498;
})();
var statearr_56499_58215 = state_56476__$1;
(statearr_56499_58215[(2)] = null);

(statearr_56499_58215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (3))){
var inst_56474 = (state_56476[(2)]);
var state_56476__$1 = state_56476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56476__$1,inst_56474);
} else {
if((state_val_56478 === (12))){
var inst_56451 = (state_56476[(2)]);
var state_56476__$1 = state_56476;
var statearr_56500_58216 = state_56476__$1;
(statearr_56500_58216[(2)] = inst_56451);

(statearr_56500_58216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (2))){
var state_56476__$1 = state_56476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56476__$1,(4),ch);
} else {
if((state_val_56478 === (23))){
var state_56476__$1 = state_56476;
var statearr_56501_58217 = state_56476__$1;
(statearr_56501_58217[(2)] = null);

(statearr_56501_58217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (19))){
var inst_56404 = (state_56476[(8)]);
var inst_56457 = (state_56476[(11)]);
var inst_56459 = cljs.core.async.muxch_STAR_(inst_56457);
var state_56476__$1 = state_56476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56476__$1,(22),inst_56459,inst_56404);
} else {
if((state_val_56478 === (11))){
var inst_56430 = (state_56476[(10)]);
var inst_56415 = (state_56476[(14)]);
var inst_56430__$1 = cljs.core.seq(inst_56415);
var state_56476__$1 = (function (){var statearr_56508 = state_56476;
(statearr_56508[(10)] = inst_56430__$1);

return statearr_56508;
})();
if(inst_56430__$1){
var statearr_56509_58218 = state_56476__$1;
(statearr_56509_58218[(1)] = (13));

} else {
var statearr_56510_58219 = state_56476__$1;
(statearr_56510_58219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (9))){
var inst_56453 = (state_56476[(2)]);
var state_56476__$1 = state_56476;
var statearr_56511_58220 = state_56476__$1;
(statearr_56511_58220[(2)] = inst_56453);

(statearr_56511_58220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (5))){
var inst_56412 = cljs.core.deref(mults);
var inst_56413 = cljs.core.vals(inst_56412);
var inst_56414 = cljs.core.seq(inst_56413);
var inst_56415 = inst_56414;
var inst_56416 = null;
var inst_56417 = (0);
var inst_56418 = (0);
var state_56476__$1 = (function (){var statearr_56512 = state_56476;
(statearr_56512[(12)] = inst_56416);

(statearr_56512[(13)] = inst_56418);

(statearr_56512[(14)] = inst_56415);

(statearr_56512[(16)] = inst_56417);

return statearr_56512;
})();
var statearr_56513_58230 = state_56476__$1;
(statearr_56513_58230[(2)] = null);

(statearr_56513_58230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (14))){
var state_56476__$1 = state_56476;
var statearr_56517_58231 = state_56476__$1;
(statearr_56517_58231[(2)] = null);

(statearr_56517_58231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (16))){
var inst_56430 = (state_56476[(10)]);
var inst_56434 = cljs.core.chunk_first(inst_56430);
var inst_56435 = cljs.core.chunk_rest(inst_56430);
var inst_56436 = cljs.core.count(inst_56434);
var inst_56415 = inst_56435;
var inst_56416 = inst_56434;
var inst_56417 = inst_56436;
var inst_56418 = (0);
var state_56476__$1 = (function (){var statearr_56518 = state_56476;
(statearr_56518[(12)] = inst_56416);

(statearr_56518[(13)] = inst_56418);

(statearr_56518[(14)] = inst_56415);

(statearr_56518[(16)] = inst_56417);

return statearr_56518;
})();
var statearr_56519_58232 = state_56476__$1;
(statearr_56519_58232[(2)] = null);

(statearr_56519_58232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (10))){
var inst_56416 = (state_56476[(12)]);
var inst_56418 = (state_56476[(13)]);
var inst_56415 = (state_56476[(14)]);
var inst_56417 = (state_56476[(16)]);
var inst_56423 = cljs.core._nth(inst_56416,inst_56418);
var inst_56424 = cljs.core.async.muxch_STAR_(inst_56423);
var inst_56425 = cljs.core.async.close_BANG_(inst_56424);
var inst_56426 = (inst_56418 + (1));
var tmp56514 = inst_56416;
var tmp56515 = inst_56415;
var tmp56516 = inst_56417;
var inst_56415__$1 = tmp56515;
var inst_56416__$1 = tmp56514;
var inst_56417__$1 = tmp56516;
var inst_56418__$1 = inst_56426;
var state_56476__$1 = (function (){var statearr_56521 = state_56476;
(statearr_56521[(12)] = inst_56416__$1);

(statearr_56521[(13)] = inst_56418__$1);

(statearr_56521[(14)] = inst_56415__$1);

(statearr_56521[(17)] = inst_56425);

(statearr_56521[(16)] = inst_56417__$1);

return statearr_56521;
})();
var statearr_56522_58245 = state_56476__$1;
(statearr_56522_58245[(2)] = null);

(statearr_56522_58245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (18))){
var inst_56446 = (state_56476[(2)]);
var state_56476__$1 = state_56476;
var statearr_56527_58249 = state_56476__$1;
(statearr_56527_58249[(2)] = inst_56446);

(statearr_56527_58249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56478 === (8))){
var inst_56418 = (state_56476[(13)]);
var inst_56417 = (state_56476[(16)]);
var inst_56420 = (inst_56418 < inst_56417);
var inst_56421 = inst_56420;
var state_56476__$1 = state_56476;
if(cljs.core.truth_(inst_56421)){
var statearr_56528_58251 = state_56476__$1;
(statearr_56528_58251[(1)] = (10));

} else {
var statearr_56529_58255 = state_56476__$1;
(statearr_56529_58255[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_56534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56534[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_56534[(1)] = (1));

return statearr_56534;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_56476){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_56476);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e56535){var ex__54250__auto__ = e56535;
var statearr_56536_58269 = state_56476;
(statearr_56536_58269[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_56476[(4)]))){
var statearr_56537_58280 = state_56476;
(statearr_56537_58280[(1)] = cljs.core.first((state_56476[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58281 = state_56476;
state_56476 = G__58281;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_56476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_56476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_56538 = f__54462__auto__();
(statearr_56538[(6)] = c__54461__auto___58188);

return statearr_56538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__56546 = arguments.length;
switch (G__56546) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__56558 = arguments.length;
switch (G__56558) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__56567 = arguments.length;
switch (G__56567) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__54461__auto___58286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_56636){
var state_val_56637 = (state_56636[(1)]);
if((state_val_56637 === (7))){
var state_56636__$1 = state_56636;
var statearr_56643_58287 = state_56636__$1;
(statearr_56643_58287[(2)] = null);

(statearr_56643_58287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (1))){
var state_56636__$1 = state_56636;
var statearr_56645_58288 = state_56636__$1;
(statearr_56645_58288[(2)] = null);

(statearr_56645_58288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (4))){
var inst_56583 = (state_56636[(7)]);
var inst_56585 = (state_56636[(8)]);
var inst_56591 = (inst_56585 < inst_56583);
var state_56636__$1 = state_56636;
if(cljs.core.truth_(inst_56591)){
var statearr_56647_58292 = state_56636__$1;
(statearr_56647_58292[(1)] = (6));

} else {
var statearr_56648_58293 = state_56636__$1;
(statearr_56648_58293[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (15))){
var inst_56622 = (state_56636[(9)]);
var inst_56627 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_56622);
var state_56636__$1 = state_56636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56636__$1,(17),out,inst_56627);
} else {
if((state_val_56637 === (13))){
var inst_56622 = (state_56636[(9)]);
var inst_56622__$1 = (state_56636[(2)]);
var inst_56623 = cljs.core.some(cljs.core.nil_QMARK_,inst_56622__$1);
var state_56636__$1 = (function (){var statearr_56659 = state_56636;
(statearr_56659[(9)] = inst_56622__$1);

return statearr_56659;
})();
if(cljs.core.truth_(inst_56623)){
var statearr_56660_58294 = state_56636__$1;
(statearr_56660_58294[(1)] = (14));

} else {
var statearr_56661_58295 = state_56636__$1;
(statearr_56661_58295[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (6))){
var state_56636__$1 = state_56636;
var statearr_56662_58296 = state_56636__$1;
(statearr_56662_58296[(2)] = null);

(statearr_56662_58296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (17))){
var inst_56629 = (state_56636[(2)]);
var state_56636__$1 = (function (){var statearr_56674 = state_56636;
(statearr_56674[(10)] = inst_56629);

return statearr_56674;
})();
var statearr_56675_58298 = state_56636__$1;
(statearr_56675_58298[(2)] = null);

(statearr_56675_58298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (3))){
var inst_56634 = (state_56636[(2)]);
var state_56636__$1 = state_56636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56636__$1,inst_56634);
} else {
if((state_val_56637 === (12))){
var _ = (function (){var statearr_56680 = state_56636;
(statearr_56680[(4)] = cljs.core.rest((state_56636[(4)])));

return statearr_56680;
})();
var state_56636__$1 = state_56636;
var ex56672 = (state_56636__$1[(2)]);
var statearr_56705_58299 = state_56636__$1;
(statearr_56705_58299[(5)] = ex56672);


if((ex56672 instanceof Object)){
var statearr_56706_58300 = state_56636__$1;
(statearr_56706_58300[(1)] = (11));

(statearr_56706_58300[(5)] = null);

} else {
throw ex56672;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (2))){
var inst_56582 = cljs.core.reset_BANG_(dctr,cnt);
var inst_56583 = cnt;
var inst_56585 = (0);
var state_56636__$1 = (function (){var statearr_56718 = state_56636;
(statearr_56718[(7)] = inst_56583);

(statearr_56718[(8)] = inst_56585);

(statearr_56718[(11)] = inst_56582);

return statearr_56718;
})();
var statearr_56719_58304 = state_56636__$1;
(statearr_56719_58304[(2)] = null);

(statearr_56719_58304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (11))){
var inst_56598 = (state_56636[(2)]);
var inst_56599 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_56636__$1 = (function (){var statearr_56720 = state_56636;
(statearr_56720[(12)] = inst_56598);

return statearr_56720;
})();
var statearr_56721_58306 = state_56636__$1;
(statearr_56721_58306[(2)] = inst_56599);

(statearr_56721_58306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (9))){
var inst_56585 = (state_56636[(8)]);
var _ = (function (){var statearr_56722 = state_56636;
(statearr_56722[(4)] = cljs.core.cons((12),(state_56636[(4)])));

return statearr_56722;
})();
var inst_56608 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_56585) : chs__$1.call(null,inst_56585));
var inst_56609 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_56585) : done.call(null,inst_56585));
var inst_56610 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_56608,inst_56609);
var ___$1 = (function (){var statearr_56723 = state_56636;
(statearr_56723[(4)] = cljs.core.rest((state_56636[(4)])));

return statearr_56723;
})();
var state_56636__$1 = state_56636;
var statearr_56724_58307 = state_56636__$1;
(statearr_56724_58307[(2)] = inst_56610);

(statearr_56724_58307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (5))){
var inst_56620 = (state_56636[(2)]);
var state_56636__$1 = (function (){var statearr_56725 = state_56636;
(statearr_56725[(13)] = inst_56620);

return statearr_56725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56636__$1,(13),dchan);
} else {
if((state_val_56637 === (14))){
var inst_56625 = cljs.core.async.close_BANG_(out);
var state_56636__$1 = state_56636;
var statearr_56726_58313 = state_56636__$1;
(statearr_56726_58313[(2)] = inst_56625);

(statearr_56726_58313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (16))){
var inst_56632 = (state_56636[(2)]);
var state_56636__$1 = state_56636;
var statearr_56727_58314 = state_56636__$1;
(statearr_56727_58314[(2)] = inst_56632);

(statearr_56727_58314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (10))){
var inst_56585 = (state_56636[(8)]);
var inst_56613 = (state_56636[(2)]);
var inst_56614 = (inst_56585 + (1));
var inst_56585__$1 = inst_56614;
var state_56636__$1 = (function (){var statearr_56728 = state_56636;
(statearr_56728[(8)] = inst_56585__$1);

(statearr_56728[(14)] = inst_56613);

return statearr_56728;
})();
var statearr_56729_58318 = state_56636__$1;
(statearr_56729_58318[(2)] = null);

(statearr_56729_58318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (8))){
var inst_56618 = (state_56636[(2)]);
var state_56636__$1 = state_56636;
var statearr_56730_58320 = state_56636__$1;
(statearr_56730_58320[(2)] = inst_56618);

(statearr_56730_58320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_56731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56731[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_56731[(1)] = (1));

return statearr_56731;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_56636){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_56636);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e56732){var ex__54250__auto__ = e56732;
var statearr_56733_58321 = state_56636;
(statearr_56733_58321[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_56636[(4)]))){
var statearr_56734_58322 = state_56636;
(statearr_56734_58322[(1)] = cljs.core.first((state_56636[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58323 = state_56636;
state_56636 = G__58323;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_56636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_56636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_56735 = f__54462__auto__();
(statearr_56735[(6)] = c__54461__auto___58286);

return statearr_56735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__56741 = arguments.length;
switch (G__56741) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54461__auto___58325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_56784){
var state_val_56785 = (state_56784[(1)]);
if((state_val_56785 === (7))){
var inst_56762 = (state_56784[(7)]);
var inst_56761 = (state_56784[(8)]);
var inst_56761__$1 = (state_56784[(2)]);
var inst_56762__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56761__$1,(0),null);
var inst_56763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56761__$1,(1),null);
var inst_56764 = (inst_56762__$1 == null);
var state_56784__$1 = (function (){var statearr_56789 = state_56784;
(statearr_56789[(7)] = inst_56762__$1);

(statearr_56789[(8)] = inst_56761__$1);

(statearr_56789[(9)] = inst_56763);

return statearr_56789;
})();
if(cljs.core.truth_(inst_56764)){
var statearr_56790_58327 = state_56784__$1;
(statearr_56790_58327[(1)] = (8));

} else {
var statearr_56791_58328 = state_56784__$1;
(statearr_56791_58328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56785 === (1))){
var inst_56751 = cljs.core.vec(chs);
var inst_56752 = inst_56751;
var state_56784__$1 = (function (){var statearr_56794 = state_56784;
(statearr_56794[(10)] = inst_56752);

return statearr_56794;
})();
var statearr_56795_58329 = state_56784__$1;
(statearr_56795_58329[(2)] = null);

(statearr_56795_58329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56785 === (4))){
var inst_56752 = (state_56784[(10)]);
var state_56784__$1 = state_56784;
return cljs.core.async.ioc_alts_BANG_(state_56784__$1,(7),inst_56752);
} else {
if((state_val_56785 === (6))){
var inst_56780 = (state_56784[(2)]);
var state_56784__$1 = state_56784;
var statearr_56796_58334 = state_56784__$1;
(statearr_56796_58334[(2)] = inst_56780);

(statearr_56796_58334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56785 === (3))){
var inst_56782 = (state_56784[(2)]);
var state_56784__$1 = state_56784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56784__$1,inst_56782);
} else {
if((state_val_56785 === (2))){
var inst_56752 = (state_56784[(10)]);
var inst_56754 = cljs.core.count(inst_56752);
var inst_56755 = (inst_56754 > (0));
var state_56784__$1 = state_56784;
if(cljs.core.truth_(inst_56755)){
var statearr_56807_58339 = state_56784__$1;
(statearr_56807_58339[(1)] = (4));

} else {
var statearr_56808_58340 = state_56784__$1;
(statearr_56808_58340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56785 === (11))){
var inst_56752 = (state_56784[(10)]);
var inst_56773 = (state_56784[(2)]);
var tmp56801 = inst_56752;
var inst_56752__$1 = tmp56801;
var state_56784__$1 = (function (){var statearr_56809 = state_56784;
(statearr_56809[(10)] = inst_56752__$1);

(statearr_56809[(11)] = inst_56773);

return statearr_56809;
})();
var statearr_56810_58341 = state_56784__$1;
(statearr_56810_58341[(2)] = null);

(statearr_56810_58341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56785 === (9))){
var inst_56762 = (state_56784[(7)]);
var state_56784__$1 = state_56784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56784__$1,(11),out,inst_56762);
} else {
if((state_val_56785 === (5))){
var inst_56778 = cljs.core.async.close_BANG_(out);
var state_56784__$1 = state_56784;
var statearr_56822_58345 = state_56784__$1;
(statearr_56822_58345[(2)] = inst_56778);

(statearr_56822_58345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56785 === (10))){
var inst_56776 = (state_56784[(2)]);
var state_56784__$1 = state_56784;
var statearr_56825_58347 = state_56784__$1;
(statearr_56825_58347[(2)] = inst_56776);

(statearr_56825_58347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56785 === (8))){
var inst_56752 = (state_56784[(10)]);
var inst_56762 = (state_56784[(7)]);
var inst_56761 = (state_56784[(8)]);
var inst_56763 = (state_56784[(9)]);
var inst_56766 = (function (){var cs = inst_56752;
var vec__56757 = inst_56761;
var v = inst_56762;
var c = inst_56763;
return (function (p1__56739_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__56739_SHARP_);
});
})();
var inst_56769 = cljs.core.filterv(inst_56766,inst_56752);
var inst_56752__$1 = inst_56769;
var state_56784__$1 = (function (){var statearr_56832 = state_56784;
(statearr_56832[(10)] = inst_56752__$1);

return statearr_56832;
})();
var statearr_56833_58356 = state_56784__$1;
(statearr_56833_58356[(2)] = null);

(statearr_56833_58356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_56838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56838[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_56838[(1)] = (1));

return statearr_56838;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_56784){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_56784);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e56839){var ex__54250__auto__ = e56839;
var statearr_56840_58358 = state_56784;
(statearr_56840_58358[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_56784[(4)]))){
var statearr_56841_58360 = state_56784;
(statearr_56841_58360[(1)] = cljs.core.first((state_56784[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58361 = state_56784;
state_56784 = G__58361;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_56784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_56784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_56846 = f__54462__auto__();
(statearr_56846[(6)] = c__54461__auto___58325);

return statearr_56846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__56854 = arguments.length;
switch (G__56854) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54461__auto___58371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_56895){
var state_val_56896 = (state_56895[(1)]);
if((state_val_56896 === (7))){
var inst_56875 = (state_56895[(7)]);
var inst_56875__$1 = (state_56895[(2)]);
var inst_56876 = (inst_56875__$1 == null);
var inst_56877 = cljs.core.not(inst_56876);
var state_56895__$1 = (function (){var statearr_56897 = state_56895;
(statearr_56897[(7)] = inst_56875__$1);

return statearr_56897;
})();
if(inst_56877){
var statearr_56898_58373 = state_56895__$1;
(statearr_56898_58373[(1)] = (8));

} else {
var statearr_56900_58374 = state_56895__$1;
(statearr_56900_58374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56896 === (1))){
var inst_56870 = (0);
var state_56895__$1 = (function (){var statearr_56901 = state_56895;
(statearr_56901[(8)] = inst_56870);

return statearr_56901;
})();
var statearr_56902_58375 = state_56895__$1;
(statearr_56902_58375[(2)] = null);

(statearr_56902_58375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56896 === (4))){
var state_56895__$1 = state_56895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56895__$1,(7),ch);
} else {
if((state_val_56896 === (6))){
var inst_56889 = (state_56895[(2)]);
var state_56895__$1 = state_56895;
var statearr_56918_58376 = state_56895__$1;
(statearr_56918_58376[(2)] = inst_56889);

(statearr_56918_58376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56896 === (3))){
var inst_56891 = (state_56895[(2)]);
var inst_56893 = cljs.core.async.close_BANG_(out);
var state_56895__$1 = (function (){var statearr_56927 = state_56895;
(statearr_56927[(9)] = inst_56891);

return statearr_56927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56895__$1,inst_56893);
} else {
if((state_val_56896 === (2))){
var inst_56870 = (state_56895[(8)]);
var inst_56872 = (inst_56870 < n);
var state_56895__$1 = state_56895;
if(cljs.core.truth_(inst_56872)){
var statearr_56928_58377 = state_56895__$1;
(statearr_56928_58377[(1)] = (4));

} else {
var statearr_56929_58378 = state_56895__$1;
(statearr_56929_58378[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56896 === (11))){
var inst_56870 = (state_56895[(8)]);
var inst_56881 = (state_56895[(2)]);
var inst_56882 = (inst_56870 + (1));
var inst_56870__$1 = inst_56882;
var state_56895__$1 = (function (){var statearr_56933 = state_56895;
(statearr_56933[(10)] = inst_56881);

(statearr_56933[(8)] = inst_56870__$1);

return statearr_56933;
})();
var statearr_56936_58379 = state_56895__$1;
(statearr_56936_58379[(2)] = null);

(statearr_56936_58379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56896 === (9))){
var state_56895__$1 = state_56895;
var statearr_56939_58380 = state_56895__$1;
(statearr_56939_58380[(2)] = null);

(statearr_56939_58380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56896 === (5))){
var state_56895__$1 = state_56895;
var statearr_56943_58381 = state_56895__$1;
(statearr_56943_58381[(2)] = null);

(statearr_56943_58381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56896 === (10))){
var inst_56886 = (state_56895[(2)]);
var state_56895__$1 = state_56895;
var statearr_56944_58382 = state_56895__$1;
(statearr_56944_58382[(2)] = inst_56886);

(statearr_56944_58382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56896 === (8))){
var inst_56875 = (state_56895[(7)]);
var state_56895__$1 = state_56895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56895__$1,(11),out,inst_56875);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_56945 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56945[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_56945[(1)] = (1));

return statearr_56945;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_56895){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_56895);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e56946){var ex__54250__auto__ = e56946;
var statearr_56947_58383 = state_56895;
(statearr_56947_58383[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_56895[(4)]))){
var statearr_56948_58384 = state_56895;
(statearr_56948_58384[(1)] = cljs.core.first((state_56895[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58385 = state_56895;
state_56895 = G__58385;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_56895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_56895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_56949 = f__54462__auto__();
(statearr_56949[(6)] = c__54461__auto___58371);

return statearr_56949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56951 = (function (f,ch,meta56952){
this.f = f;
this.ch = ch;
this.meta56952 = meta56952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56953,meta56952__$1){
var self__ = this;
var _56953__$1 = this;
return (new cljs.core.async.t_cljs$core$async56951(self__.f,self__.ch,meta56952__$1));
}));

(cljs.core.async.t_cljs$core$async56951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56953){
var self__ = this;
var _56953__$1 = this;
return self__.meta56952;
}));

(cljs.core.async.t_cljs$core$async56951.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56951.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56951.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56954 = (function (f,ch,meta56952,_,fn1,meta56955){
this.f = f;
this.ch = ch;
this.meta56952 = meta56952;
this._ = _;
this.fn1 = fn1;
this.meta56955 = meta56955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56956,meta56955__$1){
var self__ = this;
var _56956__$1 = this;
return (new cljs.core.async.t_cljs$core$async56954(self__.f,self__.ch,self__.meta56952,self__._,self__.fn1,meta56955__$1));
}));

(cljs.core.async.t_cljs$core$async56954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56956){
var self__ = this;
var _56956__$1 = this;
return self__.meta56955;
}));

(cljs.core.async.t_cljs$core$async56954.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async56954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__56950_SHARP_){
var G__56977 = (((p1__56950_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__56950_SHARP_) : self__.f.call(null,p1__56950_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__56977) : f1.call(null,G__56977));
});
}));

(cljs.core.async.t_cljs$core$async56954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56952","meta56952",2112723827,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async56951","cljs.core.async/t_cljs$core$async56951",-118613449,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta56955","meta56955",-1904141442,null)], null);
}));

(cljs.core.async.t_cljs$core$async56954.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56954");

(cljs.core.async.t_cljs$core$async56954.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56954");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56954.
 */
cljs.core.async.__GT_t_cljs$core$async56954 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56954(f__$1,ch__$1,meta56952__$1,___$2,fn1__$1,meta56955){
return (new cljs.core.async.t_cljs$core$async56954(f__$1,ch__$1,meta56952__$1,___$2,fn1__$1,meta56955));
});

}

return (new cljs.core.async.t_cljs$core$async56954(self__.f,self__.ch,self__.meta56952,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__56979 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__56979) : self__.f.call(null,G__56979));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async56951.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async56951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56952","meta56952",2112723827,null)], null);
}));

(cljs.core.async.t_cljs$core$async56951.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56951");

(cljs.core.async.t_cljs$core$async56951.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56951");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56951.
 */
cljs.core.async.__GT_t_cljs$core$async56951 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56951(f__$1,ch__$1,meta56952){
return (new cljs.core.async.t_cljs$core$async56951(f__$1,ch__$1,meta56952));
});

}

return (new cljs.core.async.t_cljs$core$async56951(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56981 = (function (f,ch,meta56982){
this.f = f;
this.ch = ch;
this.meta56982 = meta56982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56983,meta56982__$1){
var self__ = this;
var _56983__$1 = this;
return (new cljs.core.async.t_cljs$core$async56981(self__.f,self__.ch,meta56982__$1));
}));

(cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56983){
var self__ = this;
var _56983__$1 = this;
return self__.meta56982;
}));

(cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async56981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56982","meta56982",-1093979464,null)], null);
}));

(cljs.core.async.t_cljs$core$async56981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56981");

(cljs.core.async.t_cljs$core$async56981.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56981.
 */
cljs.core.async.__GT_t_cljs$core$async56981 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async56981(f__$1,ch__$1,meta56982){
return (new cljs.core.async.t_cljs$core$async56981(f__$1,ch__$1,meta56982));
});

}

return (new cljs.core.async.t_cljs$core$async56981(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56984 = (function (p,ch,meta56985){
this.p = p;
this.ch = ch;
this.meta56985 = meta56985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56986,meta56985__$1){
var self__ = this;
var _56986__$1 = this;
return (new cljs.core.async.t_cljs$core$async56984(self__.p,self__.ch,meta56985__$1));
}));

(cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56986){
var self__ = this;
var _56986__$1 = this;
return self__.meta56985;
}));

(cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async56984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56985","meta56985",2057088221,null)], null);
}));

(cljs.core.async.t_cljs$core$async56984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56984");

(cljs.core.async.t_cljs$core$async56984.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56984.
 */
cljs.core.async.__GT_t_cljs$core$async56984 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async56984(p__$1,ch__$1,meta56985){
return (new cljs.core.async.t_cljs$core$async56984(p__$1,ch__$1,meta56985));
});

}

return (new cljs.core.async.t_cljs$core$async56984(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__56994 = arguments.length;
switch (G__56994) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54461__auto___58421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_57016){
var state_val_57017 = (state_57016[(1)]);
if((state_val_57017 === (7))){
var inst_57012 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
var statearr_57018_58422 = state_57016__$1;
(statearr_57018_58422[(2)] = inst_57012);

(statearr_57018_58422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (1))){
var state_57016__$1 = state_57016;
var statearr_57019_58423 = state_57016__$1;
(statearr_57019_58423[(2)] = null);

(statearr_57019_58423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (4))){
var inst_56997 = (state_57016[(7)]);
var inst_56997__$1 = (state_57016[(2)]);
var inst_56998 = (inst_56997__$1 == null);
var state_57016__$1 = (function (){var statearr_57020 = state_57016;
(statearr_57020[(7)] = inst_56997__$1);

return statearr_57020;
})();
if(cljs.core.truth_(inst_56998)){
var statearr_57021_58425 = state_57016__$1;
(statearr_57021_58425[(1)] = (5));

} else {
var statearr_57022_58426 = state_57016__$1;
(statearr_57022_58426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (6))){
var inst_56997 = (state_57016[(7)]);
var inst_57002 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56997) : p.call(null,inst_56997));
var state_57016__$1 = state_57016;
if(cljs.core.truth_(inst_57002)){
var statearr_57023_58428 = state_57016__$1;
(statearr_57023_58428[(1)] = (8));

} else {
var statearr_57024_58429 = state_57016__$1;
(statearr_57024_58429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (3))){
var inst_57014 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57016__$1,inst_57014);
} else {
if((state_val_57017 === (2))){
var state_57016__$1 = state_57016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57016__$1,(4),ch);
} else {
if((state_val_57017 === (11))){
var inst_57005 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
var statearr_57028_58430 = state_57016__$1;
(statearr_57028_58430[(2)] = inst_57005);

(statearr_57028_58430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (9))){
var state_57016__$1 = state_57016;
var statearr_57029_58431 = state_57016__$1;
(statearr_57029_58431[(2)] = null);

(statearr_57029_58431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (5))){
var inst_57000 = cljs.core.async.close_BANG_(out);
var state_57016__$1 = state_57016;
var statearr_57030_58432 = state_57016__$1;
(statearr_57030_58432[(2)] = inst_57000);

(statearr_57030_58432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (10))){
var inst_57008 = (state_57016[(2)]);
var state_57016__$1 = (function (){var statearr_57031 = state_57016;
(statearr_57031[(8)] = inst_57008);

return statearr_57031;
})();
var statearr_57032_58433 = state_57016__$1;
(statearr_57032_58433[(2)] = null);

(statearr_57032_58433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (8))){
var inst_56997 = (state_57016[(7)]);
var state_57016__$1 = state_57016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57016__$1,(11),out,inst_56997);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_57033 = [null,null,null,null,null,null,null,null,null];
(statearr_57033[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_57033[(1)] = (1));

return statearr_57033;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_57016){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_57016);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e57034){var ex__54250__auto__ = e57034;
var statearr_57036_58438 = state_57016;
(statearr_57036_58438[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_57016[(4)]))){
var statearr_57037_58439 = state_57016;
(statearr_57037_58439[(1)] = cljs.core.first((state_57016[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58440 = state_57016;
state_57016 = G__58440;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_57016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_57016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_57038 = f__54462__auto__();
(statearr_57038[(6)] = c__54461__auto___58421);

return statearr_57038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57040 = arguments.length;
switch (G__57040) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__54461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_57120){
var state_val_57121 = (state_57120[(1)]);
if((state_val_57121 === (7))){
var inst_57114 = (state_57120[(2)]);
var state_57120__$1 = state_57120;
var statearr_57125_58444 = state_57120__$1;
(statearr_57125_58444[(2)] = inst_57114);

(statearr_57125_58444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (20))){
var inst_57078 = (state_57120[(7)]);
var inst_57095 = (state_57120[(2)]);
var inst_57096 = cljs.core.next(inst_57078);
var inst_57059 = inst_57096;
var inst_57060 = null;
var inst_57061 = (0);
var inst_57062 = (0);
var state_57120__$1 = (function (){var statearr_57126 = state_57120;
(statearr_57126[(8)] = inst_57062);

(statearr_57126[(9)] = inst_57095);

(statearr_57126[(10)] = inst_57059);

(statearr_57126[(11)] = inst_57061);

(statearr_57126[(12)] = inst_57060);

return statearr_57126;
})();
var statearr_57131_58445 = state_57120__$1;
(statearr_57131_58445[(2)] = null);

(statearr_57131_58445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (1))){
var state_57120__$1 = state_57120;
var statearr_57134_58446 = state_57120__$1;
(statearr_57134_58446[(2)] = null);

(statearr_57134_58446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (4))){
var inst_57044 = (state_57120[(13)]);
var inst_57044__$1 = (state_57120[(2)]);
var inst_57045 = (inst_57044__$1 == null);
var state_57120__$1 = (function (){var statearr_57139 = state_57120;
(statearr_57139[(13)] = inst_57044__$1);

return statearr_57139;
})();
if(cljs.core.truth_(inst_57045)){
var statearr_57141_58447 = state_57120__$1;
(statearr_57141_58447[(1)] = (5));

} else {
var statearr_57142_58448 = state_57120__$1;
(statearr_57142_58448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (15))){
var state_57120__$1 = state_57120;
var statearr_57148_58449 = state_57120__$1;
(statearr_57148_58449[(2)] = null);

(statearr_57148_58449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (21))){
var state_57120__$1 = state_57120;
var statearr_57149_58450 = state_57120__$1;
(statearr_57149_58450[(2)] = null);

(statearr_57149_58450[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (13))){
var inst_57062 = (state_57120[(8)]);
var inst_57059 = (state_57120[(10)]);
var inst_57061 = (state_57120[(11)]);
var inst_57060 = (state_57120[(12)]);
var inst_57072 = (state_57120[(2)]);
var inst_57073 = (inst_57062 + (1));
var tmp57145 = inst_57059;
var tmp57146 = inst_57061;
var tmp57147 = inst_57060;
var inst_57059__$1 = tmp57145;
var inst_57060__$1 = tmp57147;
var inst_57061__$1 = tmp57146;
var inst_57062__$1 = inst_57073;
var state_57120__$1 = (function (){var statearr_57153 = state_57120;
(statearr_57153[(8)] = inst_57062__$1);

(statearr_57153[(10)] = inst_57059__$1);

(statearr_57153[(14)] = inst_57072);

(statearr_57153[(11)] = inst_57061__$1);

(statearr_57153[(12)] = inst_57060__$1);

return statearr_57153;
})();
var statearr_57154_58451 = state_57120__$1;
(statearr_57154_58451[(2)] = null);

(statearr_57154_58451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (22))){
var state_57120__$1 = state_57120;
var statearr_57155_58452 = state_57120__$1;
(statearr_57155_58452[(2)] = null);

(statearr_57155_58452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (6))){
var inst_57044 = (state_57120[(13)]);
var inst_57057 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57044) : f.call(null,inst_57044));
var inst_57058 = cljs.core.seq(inst_57057);
var inst_57059 = inst_57058;
var inst_57060 = null;
var inst_57061 = (0);
var inst_57062 = (0);
var state_57120__$1 = (function (){var statearr_57160 = state_57120;
(statearr_57160[(8)] = inst_57062);

(statearr_57160[(10)] = inst_57059);

(statearr_57160[(11)] = inst_57061);

(statearr_57160[(12)] = inst_57060);

return statearr_57160;
})();
var statearr_57161_58453 = state_57120__$1;
(statearr_57161_58453[(2)] = null);

(statearr_57161_58453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (17))){
var inst_57078 = (state_57120[(7)]);
var inst_57084 = cljs.core.chunk_first(inst_57078);
var inst_57087 = cljs.core.chunk_rest(inst_57078);
var inst_57088 = cljs.core.count(inst_57084);
var inst_57059 = inst_57087;
var inst_57060 = inst_57084;
var inst_57061 = inst_57088;
var inst_57062 = (0);
var state_57120__$1 = (function (){var statearr_57165 = state_57120;
(statearr_57165[(8)] = inst_57062);

(statearr_57165[(10)] = inst_57059);

(statearr_57165[(11)] = inst_57061);

(statearr_57165[(12)] = inst_57060);

return statearr_57165;
})();
var statearr_57167_58454 = state_57120__$1;
(statearr_57167_58454[(2)] = null);

(statearr_57167_58454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (3))){
var inst_57116 = (state_57120[(2)]);
var state_57120__$1 = state_57120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57120__$1,inst_57116);
} else {
if((state_val_57121 === (12))){
var inst_57104 = (state_57120[(2)]);
var state_57120__$1 = state_57120;
var statearr_57168_58455 = state_57120__$1;
(statearr_57168_58455[(2)] = inst_57104);

(statearr_57168_58455[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (2))){
var state_57120__$1 = state_57120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57120__$1,(4),in$);
} else {
if((state_val_57121 === (23))){
var inst_57112 = (state_57120[(2)]);
var state_57120__$1 = state_57120;
var statearr_57169_58456 = state_57120__$1;
(statearr_57169_58456[(2)] = inst_57112);

(statearr_57169_58456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (19))){
var inst_57099 = (state_57120[(2)]);
var state_57120__$1 = state_57120;
var statearr_57170_58457 = state_57120__$1;
(statearr_57170_58457[(2)] = inst_57099);

(statearr_57170_58457[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (11))){
var inst_57059 = (state_57120[(10)]);
var inst_57078 = (state_57120[(7)]);
var inst_57078__$1 = cljs.core.seq(inst_57059);
var state_57120__$1 = (function (){var statearr_57171 = state_57120;
(statearr_57171[(7)] = inst_57078__$1);

return statearr_57171;
})();
if(inst_57078__$1){
var statearr_57172_58458 = state_57120__$1;
(statearr_57172_58458[(1)] = (14));

} else {
var statearr_57177_58459 = state_57120__$1;
(statearr_57177_58459[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (9))){
var inst_57106 = (state_57120[(2)]);
var inst_57107 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_57120__$1 = (function (){var statearr_57179 = state_57120;
(statearr_57179[(15)] = inst_57106);

return statearr_57179;
})();
if(cljs.core.truth_(inst_57107)){
var statearr_57182_58460 = state_57120__$1;
(statearr_57182_58460[(1)] = (21));

} else {
var statearr_57184_58461 = state_57120__$1;
(statearr_57184_58461[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (5))){
var inst_57051 = cljs.core.async.close_BANG_(out);
var state_57120__$1 = state_57120;
var statearr_57186_58462 = state_57120__$1;
(statearr_57186_58462[(2)] = inst_57051);

(statearr_57186_58462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (14))){
var inst_57078 = (state_57120[(7)]);
var inst_57080 = cljs.core.chunked_seq_QMARK_(inst_57078);
var state_57120__$1 = state_57120;
if(inst_57080){
var statearr_57193_58463 = state_57120__$1;
(statearr_57193_58463[(1)] = (17));

} else {
var statearr_57194_58464 = state_57120__$1;
(statearr_57194_58464[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (16))){
var inst_57102 = (state_57120[(2)]);
var state_57120__$1 = state_57120;
var statearr_57207_58465 = state_57120__$1;
(statearr_57207_58465[(2)] = inst_57102);

(statearr_57207_58465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57121 === (10))){
var inst_57062 = (state_57120[(8)]);
var inst_57060 = (state_57120[(12)]);
var inst_57070 = cljs.core._nth(inst_57060,inst_57062);
var state_57120__$1 = state_57120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57120__$1,(13),out,inst_57070);
} else {
if((state_val_57121 === (18))){
var inst_57078 = (state_57120[(7)]);
var inst_57091 = cljs.core.first(inst_57078);
var state_57120__$1 = state_57120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57120__$1,(20),out,inst_57091);
} else {
if((state_val_57121 === (8))){
var inst_57062 = (state_57120[(8)]);
var inst_57061 = (state_57120[(11)]);
var inst_57064 = (inst_57062 < inst_57061);
var inst_57065 = inst_57064;
var state_57120__$1 = state_57120;
if(cljs.core.truth_(inst_57065)){
var statearr_57222_58466 = state_57120__$1;
(statearr_57222_58466[(1)] = (10));

} else {
var statearr_57223_58467 = state_57120__$1;
(statearr_57223_58467[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__54247__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54247__auto____0 = (function (){
var statearr_57231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57231[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54247__auto__);

(statearr_57231[(1)] = (1));

return statearr_57231;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54247__auto____1 = (function (state_57120){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_57120);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e57236){var ex__54250__auto__ = e57236;
var statearr_57237_58468 = state_57120;
(statearr_57237_58468[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_57120[(4)]))){
var statearr_57241_58469 = state_57120;
(statearr_57241_58469[(1)] = cljs.core.first((state_57120[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58470 = state_57120;
state_57120 = G__58470;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54247__auto__ = function(state_57120){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54247__auto____1.call(this,state_57120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54247__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54247__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_57252 = f__54462__auto__();
(statearr_57252[(6)] = c__54461__auto__);

return statearr_57252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));

return c__54461__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57264 = arguments.length;
switch (G__57264) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__57276 = arguments.length;
switch (G__57276) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__57291 = arguments.length;
switch (G__57291) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54461__auto___58487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_57335){
var state_val_57336 = (state_57335[(1)]);
if((state_val_57336 === (7))){
var inst_57330 = (state_57335[(2)]);
var state_57335__$1 = state_57335;
var statearr_57343_58488 = state_57335__$1;
(statearr_57343_58488[(2)] = inst_57330);

(statearr_57343_58488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57336 === (1))){
var inst_57304 = null;
var state_57335__$1 = (function (){var statearr_57346 = state_57335;
(statearr_57346[(7)] = inst_57304);

return statearr_57346;
})();
var statearr_57347_58495 = state_57335__$1;
(statearr_57347_58495[(2)] = null);

(statearr_57347_58495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57336 === (4))){
var inst_57311 = (state_57335[(8)]);
var inst_57311__$1 = (state_57335[(2)]);
var inst_57312 = (inst_57311__$1 == null);
var inst_57313 = cljs.core.not(inst_57312);
var state_57335__$1 = (function (){var statearr_57356 = state_57335;
(statearr_57356[(8)] = inst_57311__$1);

return statearr_57356;
})();
if(inst_57313){
var statearr_57363_58496 = state_57335__$1;
(statearr_57363_58496[(1)] = (5));

} else {
var statearr_57364_58497 = state_57335__$1;
(statearr_57364_58497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57336 === (6))){
var state_57335__$1 = state_57335;
var statearr_57367_58498 = state_57335__$1;
(statearr_57367_58498[(2)] = null);

(statearr_57367_58498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57336 === (3))){
var inst_57332 = (state_57335[(2)]);
var inst_57333 = cljs.core.async.close_BANG_(out);
var state_57335__$1 = (function (){var statearr_57368 = state_57335;
(statearr_57368[(9)] = inst_57332);

return statearr_57368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57335__$1,inst_57333);
} else {
if((state_val_57336 === (2))){
var state_57335__$1 = state_57335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57335__$1,(4),ch);
} else {
if((state_val_57336 === (11))){
var inst_57311 = (state_57335[(8)]);
var inst_57324 = (state_57335[(2)]);
var inst_57304 = inst_57311;
var state_57335__$1 = (function (){var statearr_57381 = state_57335;
(statearr_57381[(7)] = inst_57304);

(statearr_57381[(10)] = inst_57324);

return statearr_57381;
})();
var statearr_57382_58500 = state_57335__$1;
(statearr_57382_58500[(2)] = null);

(statearr_57382_58500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57336 === (9))){
var inst_57311 = (state_57335[(8)]);
var state_57335__$1 = state_57335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57335__$1,(11),out,inst_57311);
} else {
if((state_val_57336 === (5))){
var inst_57304 = (state_57335[(7)]);
var inst_57311 = (state_57335[(8)]);
var inst_57319 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57311,inst_57304);
var state_57335__$1 = state_57335;
if(inst_57319){
var statearr_57385_58501 = state_57335__$1;
(statearr_57385_58501[(1)] = (8));

} else {
var statearr_57386_58502 = state_57335__$1;
(statearr_57386_58502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57336 === (10))){
var inst_57327 = (state_57335[(2)]);
var state_57335__$1 = state_57335;
var statearr_57387_58506 = state_57335__$1;
(statearr_57387_58506[(2)] = inst_57327);

(statearr_57387_58506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57336 === (8))){
var inst_57304 = (state_57335[(7)]);
var tmp57384 = inst_57304;
var inst_57304__$1 = tmp57384;
var state_57335__$1 = (function (){var statearr_57388 = state_57335;
(statearr_57388[(7)] = inst_57304__$1);

return statearr_57388;
})();
var statearr_57389_58513 = state_57335__$1;
(statearr_57389_58513[(2)] = null);

(statearr_57389_58513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_57391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57391[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_57391[(1)] = (1));

return statearr_57391;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_57335){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_57335);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e57392){var ex__54250__auto__ = e57392;
var statearr_57393_58514 = state_57335;
(statearr_57393_58514[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_57335[(4)]))){
var statearr_57394_58521 = state_57335;
(statearr_57394_58521[(1)] = cljs.core.first((state_57335[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58522 = state_57335;
state_57335 = G__58522;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_57335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_57335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_57395 = f__54462__auto__();
(statearr_57395[(6)] = c__54461__auto___58487);

return statearr_57395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57398 = arguments.length;
switch (G__57398) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54461__auto___58524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_57438){
var state_val_57439 = (state_57438[(1)]);
if((state_val_57439 === (7))){
var inst_57434 = (state_57438[(2)]);
var state_57438__$1 = state_57438;
var statearr_57444_58525 = state_57438__$1;
(statearr_57444_58525[(2)] = inst_57434);

(statearr_57444_58525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57439 === (1))){
var inst_57399 = (new Array(n));
var inst_57400 = inst_57399;
var inst_57401 = (0);
var state_57438__$1 = (function (){var statearr_57449 = state_57438;
(statearr_57449[(7)] = inst_57400);

(statearr_57449[(8)] = inst_57401);

return statearr_57449;
})();
var statearr_57454_58526 = state_57438__$1;
(statearr_57454_58526[(2)] = null);

(statearr_57454_58526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57439 === (4))){
var inst_57405 = (state_57438[(9)]);
var inst_57405__$1 = (state_57438[(2)]);
var inst_57407 = (inst_57405__$1 == null);
var inst_57408 = cljs.core.not(inst_57407);
var state_57438__$1 = (function (){var statearr_57455 = state_57438;
(statearr_57455[(9)] = inst_57405__$1);

return statearr_57455;
})();
if(inst_57408){
var statearr_57456_58527 = state_57438__$1;
(statearr_57456_58527[(1)] = (5));

} else {
var statearr_57457_58528 = state_57438__$1;
(statearr_57457_58528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57439 === (15))){
var inst_57428 = (state_57438[(2)]);
var state_57438__$1 = state_57438;
var statearr_57459_58529 = state_57438__$1;
(statearr_57459_58529[(2)] = inst_57428);

(statearr_57459_58529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57439 === (13))){
var state_57438__$1 = state_57438;
var statearr_57460_58530 = state_57438__$1;
(statearr_57460_58530[(2)] = null);

(statearr_57460_58530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57439 === (6))){
var inst_57401 = (state_57438[(8)]);
var inst_57424 = (inst_57401 > (0));
var state_57438__$1 = state_57438;
if(cljs.core.truth_(inst_57424)){
var statearr_57461_58531 = state_57438__$1;
(statearr_57461_58531[(1)] = (12));

} else {
var statearr_57462_58532 = state_57438__$1;
(statearr_57462_58532[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57439 === (3))){
var inst_57436 = (state_57438[(2)]);
var state_57438__$1 = state_57438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57438__$1,inst_57436);
} else {
if((state_val_57439 === (12))){
var inst_57400 = (state_57438[(7)]);
var inst_57426 = cljs.core.vec(inst_57400);
var state_57438__$1 = state_57438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57438__$1,(15),out,inst_57426);
} else {
if((state_val_57439 === (2))){
var state_57438__$1 = state_57438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57438__$1,(4),ch);
} else {
if((state_val_57439 === (11))){
var inst_57418 = (state_57438[(2)]);
var inst_57419 = (new Array(n));
var inst_57400 = inst_57419;
var inst_57401 = (0);
var state_57438__$1 = (function (){var statearr_57463 = state_57438;
(statearr_57463[(7)] = inst_57400);

(statearr_57463[(10)] = inst_57418);

(statearr_57463[(8)] = inst_57401);

return statearr_57463;
})();
var statearr_57464_58540 = state_57438__$1;
(statearr_57464_58540[(2)] = null);

(statearr_57464_58540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57439 === (9))){
var inst_57400 = (state_57438[(7)]);
var inst_57416 = cljs.core.vec(inst_57400);
var state_57438__$1 = state_57438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57438__$1,(11),out,inst_57416);
} else {
if((state_val_57439 === (5))){
var inst_57405 = (state_57438[(9)]);
var inst_57411 = (state_57438[(11)]);
var inst_57400 = (state_57438[(7)]);
var inst_57401 = (state_57438[(8)]);
var inst_57410 = (inst_57400[inst_57401] = inst_57405);
var inst_57411__$1 = (inst_57401 + (1));
var inst_57412 = (inst_57411__$1 < n);
var state_57438__$1 = (function (){var statearr_57465 = state_57438;
(statearr_57465[(11)] = inst_57411__$1);

(statearr_57465[(12)] = inst_57410);

return statearr_57465;
})();
if(cljs.core.truth_(inst_57412)){
var statearr_57466_58542 = state_57438__$1;
(statearr_57466_58542[(1)] = (8));

} else {
var statearr_57467_58543 = state_57438__$1;
(statearr_57467_58543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57439 === (14))){
var inst_57431 = (state_57438[(2)]);
var inst_57432 = cljs.core.async.close_BANG_(out);
var state_57438__$1 = (function (){var statearr_57469 = state_57438;
(statearr_57469[(13)] = inst_57431);

return statearr_57469;
})();
var statearr_57470_58544 = state_57438__$1;
(statearr_57470_58544[(2)] = inst_57432);

(statearr_57470_58544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57439 === (10))){
var inst_57422 = (state_57438[(2)]);
var state_57438__$1 = state_57438;
var statearr_57471_58545 = state_57438__$1;
(statearr_57471_58545[(2)] = inst_57422);

(statearr_57471_58545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57439 === (8))){
var inst_57411 = (state_57438[(11)]);
var inst_57400 = (state_57438[(7)]);
var tmp57468 = inst_57400;
var inst_57400__$1 = tmp57468;
var inst_57401 = inst_57411;
var state_57438__$1 = (function (){var statearr_57472 = state_57438;
(statearr_57472[(7)] = inst_57400__$1);

(statearr_57472[(8)] = inst_57401);

return statearr_57472;
})();
var statearr_57474_58546 = state_57438__$1;
(statearr_57474_58546[(2)] = null);

(statearr_57474_58546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_57475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57475[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_57475[(1)] = (1));

return statearr_57475;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_57438){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_57438);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e57476){var ex__54250__auto__ = e57476;
var statearr_57477_58547 = state_57438;
(statearr_57477_58547[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_57438[(4)]))){
var statearr_57478_58548 = state_57438;
(statearr_57478_58548[(1)] = cljs.core.first((state_57438[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58549 = state_57438;
state_57438 = G__58549;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_57438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_57438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_57480 = f__54462__auto__();
(statearr_57480[(6)] = c__54461__auto___58524);

return statearr_57480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__57482 = arguments.length;
switch (G__57482) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54461__auto___58551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_57528){
var state_val_57529 = (state_57528[(1)]);
if((state_val_57529 === (7))){
var inst_57524 = (state_57528[(2)]);
var state_57528__$1 = state_57528;
var statearr_57530_58558 = state_57528__$1;
(statearr_57530_58558[(2)] = inst_57524);

(statearr_57530_58558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (1))){
var inst_57484 = [];
var inst_57485 = inst_57484;
var inst_57486 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_57528__$1 = (function (){var statearr_57532 = state_57528;
(statearr_57532[(7)] = inst_57485);

(statearr_57532[(8)] = inst_57486);

return statearr_57532;
})();
var statearr_57533_58559 = state_57528__$1;
(statearr_57533_58559[(2)] = null);

(statearr_57533_58559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (4))){
var inst_57489 = (state_57528[(9)]);
var inst_57489__$1 = (state_57528[(2)]);
var inst_57490 = (inst_57489__$1 == null);
var inst_57491 = cljs.core.not(inst_57490);
var state_57528__$1 = (function (){var statearr_57534 = state_57528;
(statearr_57534[(9)] = inst_57489__$1);

return statearr_57534;
})();
if(inst_57491){
var statearr_57535_58560 = state_57528__$1;
(statearr_57535_58560[(1)] = (5));

} else {
var statearr_57536_58561 = state_57528__$1;
(statearr_57536_58561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (15))){
var inst_57485 = (state_57528[(7)]);
var inst_57516 = cljs.core.vec(inst_57485);
var state_57528__$1 = state_57528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57528__$1,(18),out,inst_57516);
} else {
if((state_val_57529 === (13))){
var inst_57511 = (state_57528[(2)]);
var state_57528__$1 = state_57528;
var statearr_57537_58562 = state_57528__$1;
(statearr_57537_58562[(2)] = inst_57511);

(statearr_57537_58562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (6))){
var inst_57485 = (state_57528[(7)]);
var inst_57513 = inst_57485.length;
var inst_57514 = (inst_57513 > (0));
var state_57528__$1 = state_57528;
if(cljs.core.truth_(inst_57514)){
var statearr_57538_58563 = state_57528__$1;
(statearr_57538_58563[(1)] = (15));

} else {
var statearr_57539_58564 = state_57528__$1;
(statearr_57539_58564[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (17))){
var inst_57521 = (state_57528[(2)]);
var inst_57522 = cljs.core.async.close_BANG_(out);
var state_57528__$1 = (function (){var statearr_57540 = state_57528;
(statearr_57540[(10)] = inst_57521);

return statearr_57540;
})();
var statearr_57541_58566 = state_57528__$1;
(statearr_57541_58566[(2)] = inst_57522);

(statearr_57541_58566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (3))){
var inst_57526 = (state_57528[(2)]);
var state_57528__$1 = state_57528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57528__$1,inst_57526);
} else {
if((state_val_57529 === (12))){
var inst_57485 = (state_57528[(7)]);
var inst_57504 = cljs.core.vec(inst_57485);
var state_57528__$1 = state_57528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57528__$1,(14),out,inst_57504);
} else {
if((state_val_57529 === (2))){
var state_57528__$1 = state_57528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57528__$1,(4),ch);
} else {
if((state_val_57529 === (11))){
var inst_57489 = (state_57528[(9)]);
var inst_57493 = (state_57528[(11)]);
var inst_57485 = (state_57528[(7)]);
var inst_57501 = inst_57485.push(inst_57489);
var tmp57542 = inst_57485;
var inst_57485__$1 = tmp57542;
var inst_57486 = inst_57493;
var state_57528__$1 = (function (){var statearr_57544 = state_57528;
(statearr_57544[(12)] = inst_57501);

(statearr_57544[(7)] = inst_57485__$1);

(statearr_57544[(8)] = inst_57486);

return statearr_57544;
})();
var statearr_57545_58568 = state_57528__$1;
(statearr_57545_58568[(2)] = null);

(statearr_57545_58568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (9))){
var inst_57486 = (state_57528[(8)]);
var inst_57497 = cljs.core.keyword_identical_QMARK_(inst_57486,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_57528__$1 = state_57528;
var statearr_57546_58569 = state_57528__$1;
(statearr_57546_58569[(2)] = inst_57497);

(statearr_57546_58569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (5))){
var inst_57489 = (state_57528[(9)]);
var inst_57493 = (state_57528[(11)]);
var inst_57486 = (state_57528[(8)]);
var inst_57494 = (state_57528[(13)]);
var inst_57493__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57489) : f.call(null,inst_57489));
var inst_57494__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57493__$1,inst_57486);
var state_57528__$1 = (function (){var statearr_57547 = state_57528;
(statearr_57547[(11)] = inst_57493__$1);

(statearr_57547[(13)] = inst_57494__$1);

return statearr_57547;
})();
if(inst_57494__$1){
var statearr_57548_58570 = state_57528__$1;
(statearr_57548_58570[(1)] = (8));

} else {
var statearr_57549_58571 = state_57528__$1;
(statearr_57549_58571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (14))){
var inst_57489 = (state_57528[(9)]);
var inst_57493 = (state_57528[(11)]);
var inst_57506 = (state_57528[(2)]);
var inst_57507 = [];
var inst_57508 = inst_57507.push(inst_57489);
var inst_57485 = inst_57507;
var inst_57486 = inst_57493;
var state_57528__$1 = (function (){var statearr_57551 = state_57528;
(statearr_57551[(14)] = inst_57506);

(statearr_57551[(7)] = inst_57485);

(statearr_57551[(15)] = inst_57508);

(statearr_57551[(8)] = inst_57486);

return statearr_57551;
})();
var statearr_57552_58572 = state_57528__$1;
(statearr_57552_58572[(2)] = null);

(statearr_57552_58572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (16))){
var state_57528__$1 = state_57528;
var statearr_57553_58573 = state_57528__$1;
(statearr_57553_58573[(2)] = null);

(statearr_57553_58573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (10))){
var inst_57499 = (state_57528[(2)]);
var state_57528__$1 = state_57528;
if(cljs.core.truth_(inst_57499)){
var statearr_57554_58575 = state_57528__$1;
(statearr_57554_58575[(1)] = (11));

} else {
var statearr_57555_58576 = state_57528__$1;
(statearr_57555_58576[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (18))){
var inst_57518 = (state_57528[(2)]);
var state_57528__$1 = state_57528;
var statearr_57556_58577 = state_57528__$1;
(statearr_57556_58577[(2)] = inst_57518);

(statearr_57556_58577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57529 === (8))){
var inst_57494 = (state_57528[(13)]);
var state_57528__$1 = state_57528;
var statearr_57557_58579 = state_57528__$1;
(statearr_57557_58579[(2)] = inst_57494);

(statearr_57557_58579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__54247__auto__ = null;
var cljs$core$async$state_machine__54247__auto____0 = (function (){
var statearr_57558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57558[(0)] = cljs$core$async$state_machine__54247__auto__);

(statearr_57558[(1)] = (1));

return statearr_57558;
});
var cljs$core$async$state_machine__54247__auto____1 = (function (state_57528){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_57528);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e57560){var ex__54250__auto__ = e57560;
var statearr_57561_58580 = state_57528;
(statearr_57561_58580[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_57528[(4)]))){
var statearr_57562_58581 = state_57528;
(statearr_57562_58581[(1)] = cljs.core.first((state_57528[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58582 = state_57528;
state_57528 = G__58582;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
cljs$core$async$state_machine__54247__auto__ = function(state_57528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54247__auto____1.call(this,state_57528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54247__auto____0;
cljs$core$async$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54247__auto____1;
return cljs$core$async$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_57563 = f__54462__auto__();
(statearr_57563[(6)] = c__54461__auto___58551);

return statearr_57563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
