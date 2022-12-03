goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_58651 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_58651(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_58652 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_58652(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__57593 = coll;
var G__57594 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57593,G__57594) : shadow.dom.lazy_native_coll_seq.call(null,G__57593,G__57594));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__57605 = arguments.length;
switch (G__57605) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__57607 = arguments.length;
switch (G__57607) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__57615 = arguments.length;
switch (G__57615) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__57631 = arguments.length;
switch (G__57631) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__57675 = arguments.length;
switch (G__57675) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57690 = arguments.length;
switch (G__57690) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e57705){if((e57705 instanceof Object)){
var e = e57705;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57705;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__57718 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57719 = null;
var count__57720 = (0);
var i__57721 = (0);
while(true){
if((i__57721 < count__57720)){
var el = chunk__57719.cljs$core$IIndexed$_nth$arity$2(null,i__57721);
var handler_58670__$1 = ((function (seq__57718,chunk__57719,count__57720,i__57721,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57718,chunk__57719,count__57720,i__57721,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58670__$1);


var G__58671 = seq__57718;
var G__58672 = chunk__57719;
var G__58673 = count__57720;
var G__58674 = (i__57721 + (1));
seq__57718 = G__58671;
chunk__57719 = G__58672;
count__57720 = G__58673;
i__57721 = G__58674;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57718);
if(temp__5753__auto__){
var seq__57718__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57718__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57718__$1);
var G__58675 = cljs.core.chunk_rest(seq__57718__$1);
var G__58676 = c__4679__auto__;
var G__58677 = cljs.core.count(c__4679__auto__);
var G__58678 = (0);
seq__57718 = G__58675;
chunk__57719 = G__58676;
count__57720 = G__58677;
i__57721 = G__58678;
continue;
} else {
var el = cljs.core.first(seq__57718__$1);
var handler_58679__$1 = ((function (seq__57718,chunk__57719,count__57720,i__57721,el,seq__57718__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57718,chunk__57719,count__57720,i__57721,el,seq__57718__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58679__$1);


var G__58680 = cljs.core.next(seq__57718__$1);
var G__58681 = null;
var G__58682 = (0);
var G__58683 = (0);
seq__57718 = G__58680;
chunk__57719 = G__58681;
count__57720 = G__58682;
i__57721 = G__58683;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__57742 = arguments.length;
switch (G__57742) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57754 = cljs.core.seq(events);
var chunk__57755 = null;
var count__57756 = (0);
var i__57757 = (0);
while(true){
if((i__57757 < count__57756)){
var vec__57768 = chunk__57755.cljs$core$IIndexed$_nth$arity$2(null,i__57757);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57768,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58686 = seq__57754;
var G__58687 = chunk__57755;
var G__58688 = count__57756;
var G__58689 = (i__57757 + (1));
seq__57754 = G__58686;
chunk__57755 = G__58687;
count__57756 = G__58688;
i__57757 = G__58689;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57754);
if(temp__5753__auto__){
var seq__57754__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57754__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57754__$1);
var G__58690 = cljs.core.chunk_rest(seq__57754__$1);
var G__58691 = c__4679__auto__;
var G__58692 = cljs.core.count(c__4679__auto__);
var G__58693 = (0);
seq__57754 = G__58690;
chunk__57755 = G__58691;
count__57756 = G__58692;
i__57757 = G__58693;
continue;
} else {
var vec__57773 = cljs.core.first(seq__57754__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57773,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57773,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58694 = cljs.core.next(seq__57754__$1);
var G__58695 = null;
var G__58696 = (0);
var G__58697 = (0);
seq__57754 = G__58694;
chunk__57755 = G__58695;
count__57756 = G__58696;
i__57757 = G__58697;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__57778 = cljs.core.seq(styles);
var chunk__57779 = null;
var count__57780 = (0);
var i__57781 = (0);
while(true){
if((i__57781 < count__57780)){
var vec__57800 = chunk__57779.cljs$core$IIndexed$_nth$arity$2(null,i__57781);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57800,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57800,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58698 = seq__57778;
var G__58699 = chunk__57779;
var G__58700 = count__57780;
var G__58701 = (i__57781 + (1));
seq__57778 = G__58698;
chunk__57779 = G__58699;
count__57780 = G__58700;
i__57781 = G__58701;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57778);
if(temp__5753__auto__){
var seq__57778__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57778__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57778__$1);
var G__58702 = cljs.core.chunk_rest(seq__57778__$1);
var G__58703 = c__4679__auto__;
var G__58704 = cljs.core.count(c__4679__auto__);
var G__58705 = (0);
seq__57778 = G__58702;
chunk__57779 = G__58703;
count__57780 = G__58704;
i__57781 = G__58705;
continue;
} else {
var vec__57806 = cljs.core.first(seq__57778__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57806,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57806,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58706 = cljs.core.next(seq__57778__$1);
var G__58707 = null;
var G__58708 = (0);
var G__58709 = (0);
seq__57778 = G__58706;
chunk__57779 = G__58707;
count__57780 = G__58708;
i__57781 = G__58709;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__57816_58710 = key;
var G__57816_58711__$1 = (((G__57816_58710 instanceof cljs.core.Keyword))?G__57816_58710.fqn:null);
switch (G__57816_58711__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_58713 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_58713,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_58713,"aria-");
}
})())){
el.setAttribute(ks_58713,value);
} else {
(el[ks_58713] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57862){
var map__57864 = p__57862;
var map__57864__$1 = cljs.core.__destructure_map(map__57864);
var props = map__57864__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57864__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57871 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57871,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57871,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57871,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57881 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57881,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57881;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57905 = arguments.length;
switch (G__57905) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57937){
var vec__57939 = p__57937;
var seq__57940 = cljs.core.seq(vec__57939);
var first__57941 = cljs.core.first(seq__57940);
var seq__57940__$1 = cljs.core.next(seq__57940);
var nn = first__57941;
var first__57941__$1 = cljs.core.first(seq__57940__$1);
var seq__57940__$2 = cljs.core.next(seq__57940__$1);
var np = first__57941__$1;
var nc = seq__57940__$2;
var node = vec__57939;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57947 = nn;
var G__57948 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57947,G__57948) : create_fn.call(null,G__57947,G__57948));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57952 = nn;
var G__57953 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57952,G__57953) : create_fn.call(null,G__57952,G__57953));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57957 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57957,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57957,(1),null);
var seq__57960_58716 = cljs.core.seq(node_children);
var chunk__57961_58717 = null;
var count__57962_58718 = (0);
var i__57963_58719 = (0);
while(true){
if((i__57963_58719 < count__57962_58718)){
var child_struct_58720 = chunk__57961_58717.cljs$core$IIndexed$_nth$arity$2(null,i__57963_58719);
var children_58721 = shadow.dom.dom_node(child_struct_58720);
if(cljs.core.seq_QMARK_(children_58721)){
var seq__58005_58722 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58721));
var chunk__58007_58723 = null;
var count__58008_58724 = (0);
var i__58009_58725 = (0);
while(true){
if((i__58009_58725 < count__58008_58724)){
var child_58726 = chunk__58007_58723.cljs$core$IIndexed$_nth$arity$2(null,i__58009_58725);
if(cljs.core.truth_(child_58726)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58726);


var G__58728 = seq__58005_58722;
var G__58729 = chunk__58007_58723;
var G__58730 = count__58008_58724;
var G__58731 = (i__58009_58725 + (1));
seq__58005_58722 = G__58728;
chunk__58007_58723 = G__58729;
count__58008_58724 = G__58730;
i__58009_58725 = G__58731;
continue;
} else {
var G__58732 = seq__58005_58722;
var G__58733 = chunk__58007_58723;
var G__58734 = count__58008_58724;
var G__58735 = (i__58009_58725 + (1));
seq__58005_58722 = G__58732;
chunk__58007_58723 = G__58733;
count__58008_58724 = G__58734;
i__58009_58725 = G__58735;
continue;
}
} else {
var temp__5753__auto___58736 = cljs.core.seq(seq__58005_58722);
if(temp__5753__auto___58736){
var seq__58005_58737__$1 = temp__5753__auto___58736;
if(cljs.core.chunked_seq_QMARK_(seq__58005_58737__$1)){
var c__4679__auto___58738 = cljs.core.chunk_first(seq__58005_58737__$1);
var G__58739 = cljs.core.chunk_rest(seq__58005_58737__$1);
var G__58740 = c__4679__auto___58738;
var G__58741 = cljs.core.count(c__4679__auto___58738);
var G__58742 = (0);
seq__58005_58722 = G__58739;
chunk__58007_58723 = G__58740;
count__58008_58724 = G__58741;
i__58009_58725 = G__58742;
continue;
} else {
var child_58743 = cljs.core.first(seq__58005_58737__$1);
if(cljs.core.truth_(child_58743)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58743);


var G__58744 = cljs.core.next(seq__58005_58737__$1);
var G__58745 = null;
var G__58746 = (0);
var G__58747 = (0);
seq__58005_58722 = G__58744;
chunk__58007_58723 = G__58745;
count__58008_58724 = G__58746;
i__58009_58725 = G__58747;
continue;
} else {
var G__58748 = cljs.core.next(seq__58005_58737__$1);
var G__58749 = null;
var G__58750 = (0);
var G__58751 = (0);
seq__58005_58722 = G__58748;
chunk__58007_58723 = G__58749;
count__58008_58724 = G__58750;
i__58009_58725 = G__58751;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58721);
}


var G__58752 = seq__57960_58716;
var G__58753 = chunk__57961_58717;
var G__58754 = count__57962_58718;
var G__58755 = (i__57963_58719 + (1));
seq__57960_58716 = G__58752;
chunk__57961_58717 = G__58753;
count__57962_58718 = G__58754;
i__57963_58719 = G__58755;
continue;
} else {
var temp__5753__auto___58756 = cljs.core.seq(seq__57960_58716);
if(temp__5753__auto___58756){
var seq__57960_58757__$1 = temp__5753__auto___58756;
if(cljs.core.chunked_seq_QMARK_(seq__57960_58757__$1)){
var c__4679__auto___58758 = cljs.core.chunk_first(seq__57960_58757__$1);
var G__58759 = cljs.core.chunk_rest(seq__57960_58757__$1);
var G__58760 = c__4679__auto___58758;
var G__58761 = cljs.core.count(c__4679__auto___58758);
var G__58762 = (0);
seq__57960_58716 = G__58759;
chunk__57961_58717 = G__58760;
count__57962_58718 = G__58761;
i__57963_58719 = G__58762;
continue;
} else {
var child_struct_58763 = cljs.core.first(seq__57960_58757__$1);
var children_58764 = shadow.dom.dom_node(child_struct_58763);
if(cljs.core.seq_QMARK_(children_58764)){
var seq__58022_58765 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58764));
var chunk__58024_58766 = null;
var count__58025_58767 = (0);
var i__58026_58768 = (0);
while(true){
if((i__58026_58768 < count__58025_58767)){
var child_58769 = chunk__58024_58766.cljs$core$IIndexed$_nth$arity$2(null,i__58026_58768);
if(cljs.core.truth_(child_58769)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58769);


var G__58770 = seq__58022_58765;
var G__58771 = chunk__58024_58766;
var G__58772 = count__58025_58767;
var G__58773 = (i__58026_58768 + (1));
seq__58022_58765 = G__58770;
chunk__58024_58766 = G__58771;
count__58025_58767 = G__58772;
i__58026_58768 = G__58773;
continue;
} else {
var G__58774 = seq__58022_58765;
var G__58775 = chunk__58024_58766;
var G__58776 = count__58025_58767;
var G__58777 = (i__58026_58768 + (1));
seq__58022_58765 = G__58774;
chunk__58024_58766 = G__58775;
count__58025_58767 = G__58776;
i__58026_58768 = G__58777;
continue;
}
} else {
var temp__5753__auto___58778__$1 = cljs.core.seq(seq__58022_58765);
if(temp__5753__auto___58778__$1){
var seq__58022_58779__$1 = temp__5753__auto___58778__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58022_58779__$1)){
var c__4679__auto___58780 = cljs.core.chunk_first(seq__58022_58779__$1);
var G__58781 = cljs.core.chunk_rest(seq__58022_58779__$1);
var G__58782 = c__4679__auto___58780;
var G__58783 = cljs.core.count(c__4679__auto___58780);
var G__58784 = (0);
seq__58022_58765 = G__58781;
chunk__58024_58766 = G__58782;
count__58025_58767 = G__58783;
i__58026_58768 = G__58784;
continue;
} else {
var child_58785 = cljs.core.first(seq__58022_58779__$1);
if(cljs.core.truth_(child_58785)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58785);


var G__58786 = cljs.core.next(seq__58022_58779__$1);
var G__58787 = null;
var G__58788 = (0);
var G__58789 = (0);
seq__58022_58765 = G__58786;
chunk__58024_58766 = G__58787;
count__58025_58767 = G__58788;
i__58026_58768 = G__58789;
continue;
} else {
var G__58790 = cljs.core.next(seq__58022_58779__$1);
var G__58791 = null;
var G__58792 = (0);
var G__58793 = (0);
seq__58022_58765 = G__58790;
chunk__58024_58766 = G__58791;
count__58025_58767 = G__58792;
i__58026_58768 = G__58793;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58764);
}


var G__58794 = cljs.core.next(seq__57960_58757__$1);
var G__58795 = null;
var G__58796 = (0);
var G__58797 = (0);
seq__57960_58716 = G__58794;
chunk__57961_58717 = G__58795;
count__57962_58718 = G__58796;
i__57963_58719 = G__58797;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58048 = cljs.core.seq(node);
var chunk__58049 = null;
var count__58050 = (0);
var i__58051 = (0);
while(true){
if((i__58051 < count__58050)){
var n = chunk__58049.cljs$core$IIndexed$_nth$arity$2(null,i__58051);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58798 = seq__58048;
var G__58799 = chunk__58049;
var G__58800 = count__58050;
var G__58801 = (i__58051 + (1));
seq__58048 = G__58798;
chunk__58049 = G__58799;
count__58050 = G__58800;
i__58051 = G__58801;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58048);
if(temp__5753__auto__){
var seq__58048__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58048__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58048__$1);
var G__58802 = cljs.core.chunk_rest(seq__58048__$1);
var G__58803 = c__4679__auto__;
var G__58804 = cljs.core.count(c__4679__auto__);
var G__58805 = (0);
seq__58048 = G__58802;
chunk__58049 = G__58803;
count__58050 = G__58804;
i__58051 = G__58805;
continue;
} else {
var n = cljs.core.first(seq__58048__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58806 = cljs.core.next(seq__58048__$1);
var G__58807 = null;
var G__58808 = (0);
var G__58809 = (0);
seq__58048 = G__58806;
chunk__58049 = G__58807;
count__58050 = G__58808;
i__58051 = G__58809;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58065 = arguments.length;
switch (G__58065) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__58074 = arguments.length;
switch (G__58074) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__58105 = arguments.length;
switch (G__58105) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58815 = arguments.length;
var i__4865__auto___58819 = (0);
while(true){
if((i__4865__auto___58819 < len__4864__auto___58815)){
args__4870__auto__.push((arguments[i__4865__auto___58819]));

var G__58820 = (i__4865__auto___58819 + (1));
i__4865__auto___58819 = G__58820;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__58156_58821 = cljs.core.seq(nodes);
var chunk__58157_58822 = null;
var count__58158_58823 = (0);
var i__58159_58824 = (0);
while(true){
if((i__58159_58824 < count__58158_58823)){
var node_58825 = chunk__58157_58822.cljs$core$IIndexed$_nth$arity$2(null,i__58159_58824);
fragment.appendChild(shadow.dom._to_dom(node_58825));


var G__58826 = seq__58156_58821;
var G__58827 = chunk__58157_58822;
var G__58828 = count__58158_58823;
var G__58829 = (i__58159_58824 + (1));
seq__58156_58821 = G__58826;
chunk__58157_58822 = G__58827;
count__58158_58823 = G__58828;
i__58159_58824 = G__58829;
continue;
} else {
var temp__5753__auto___58830 = cljs.core.seq(seq__58156_58821);
if(temp__5753__auto___58830){
var seq__58156_58831__$1 = temp__5753__auto___58830;
if(cljs.core.chunked_seq_QMARK_(seq__58156_58831__$1)){
var c__4679__auto___58832 = cljs.core.chunk_first(seq__58156_58831__$1);
var G__58833 = cljs.core.chunk_rest(seq__58156_58831__$1);
var G__58834 = c__4679__auto___58832;
var G__58835 = cljs.core.count(c__4679__auto___58832);
var G__58836 = (0);
seq__58156_58821 = G__58833;
chunk__58157_58822 = G__58834;
count__58158_58823 = G__58835;
i__58159_58824 = G__58836;
continue;
} else {
var node_58837 = cljs.core.first(seq__58156_58831__$1);
fragment.appendChild(shadow.dom._to_dom(node_58837));


var G__58838 = cljs.core.next(seq__58156_58831__$1);
var G__58839 = null;
var G__58840 = (0);
var G__58841 = (0);
seq__58156_58821 = G__58838;
chunk__58157_58822 = G__58839;
count__58158_58823 = G__58840;
i__58159_58824 = G__58841;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58149){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58149));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58174_58842 = cljs.core.seq(scripts);
var chunk__58175_58843 = null;
var count__58176_58844 = (0);
var i__58177_58845 = (0);
while(true){
if((i__58177_58845 < count__58176_58844)){
var vec__58185_58846 = chunk__58175_58843.cljs$core$IIndexed$_nth$arity$2(null,i__58177_58845);
var script_tag_58847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58185_58846,(0),null);
var script_body_58848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58185_58846,(1),null);
eval(script_body_58848);


var G__58849 = seq__58174_58842;
var G__58850 = chunk__58175_58843;
var G__58851 = count__58176_58844;
var G__58852 = (i__58177_58845 + (1));
seq__58174_58842 = G__58849;
chunk__58175_58843 = G__58850;
count__58176_58844 = G__58851;
i__58177_58845 = G__58852;
continue;
} else {
var temp__5753__auto___58853 = cljs.core.seq(seq__58174_58842);
if(temp__5753__auto___58853){
var seq__58174_58854__$1 = temp__5753__auto___58853;
if(cljs.core.chunked_seq_QMARK_(seq__58174_58854__$1)){
var c__4679__auto___58855 = cljs.core.chunk_first(seq__58174_58854__$1);
var G__58856 = cljs.core.chunk_rest(seq__58174_58854__$1);
var G__58857 = c__4679__auto___58855;
var G__58858 = cljs.core.count(c__4679__auto___58855);
var G__58859 = (0);
seq__58174_58842 = G__58856;
chunk__58175_58843 = G__58857;
count__58176_58844 = G__58858;
i__58177_58845 = G__58859;
continue;
} else {
var vec__58193_58860 = cljs.core.first(seq__58174_58854__$1);
var script_tag_58861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193_58860,(0),null);
var script_body_58862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193_58860,(1),null);
eval(script_body_58862);


var G__58863 = cljs.core.next(seq__58174_58854__$1);
var G__58864 = null;
var G__58865 = (0);
var G__58866 = (0);
seq__58174_58842 = G__58863;
chunk__58175_58843 = G__58864;
count__58176_58844 = G__58865;
i__58177_58845 = G__58866;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58198){
var vec__58199 = p__58198;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58199,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58199,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58209 = arguments.length;
switch (G__58209) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58241 = cljs.core.seq(style_keys);
var chunk__58242 = null;
var count__58243 = (0);
var i__58244 = (0);
while(true){
if((i__58244 < count__58243)){
var it = chunk__58242.cljs$core$IIndexed$_nth$arity$2(null,i__58244);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58868 = seq__58241;
var G__58869 = chunk__58242;
var G__58870 = count__58243;
var G__58871 = (i__58244 + (1));
seq__58241 = G__58868;
chunk__58242 = G__58869;
count__58243 = G__58870;
i__58244 = G__58871;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58241);
if(temp__5753__auto__){
var seq__58241__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58241__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58241__$1);
var G__58876 = cljs.core.chunk_rest(seq__58241__$1);
var G__58877 = c__4679__auto__;
var G__58878 = cljs.core.count(c__4679__auto__);
var G__58879 = (0);
seq__58241 = G__58876;
chunk__58242 = G__58877;
count__58243 = G__58878;
i__58244 = G__58879;
continue;
} else {
var it = cljs.core.first(seq__58241__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58880 = cljs.core.next(seq__58241__$1);
var G__58881 = null;
var G__58882 = (0);
var G__58883 = (0);
seq__58241 = G__58880;
chunk__58242 = G__58881;
count__58243 = G__58882;
i__58244 = G__58883;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k58258,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__58267 = k58258;
var G__58267__$1 = (((G__58267 instanceof cljs.core.Keyword))?G__58267.fqn:null);
switch (G__58267__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58258,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__58268){
var vec__58271 = p__58268;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58271,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58271,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58257){
var self__ = this;
var G__58257__$1 = this;
return (new cljs.core.RecordIter((0),G__58257__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58259,other58260){
var self__ = this;
var this58259__$1 = this;
return (((!((other58260 == null)))) && ((((this58259__$1.constructor === other58260.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58259__$1.x,other58260.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58259__$1.y,other58260.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58259__$1.__extmap,other58260.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k58258){
var self__ = this;
var this__4509__auto____$1 = this;
var G__58311 = k58258;
var G__58311__$1 = (((G__58311 instanceof cljs.core.Keyword))?G__58311.fqn:null);
switch (G__58311__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58258);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__58257){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__58315 = cljs.core.keyword_identical_QMARK_;
var expr__58316 = k__4511__auto__;
if(cljs.core.truth_((pred__58315.cljs$core$IFn$_invoke$arity$2 ? pred__58315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__58316) : pred__58315.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__58316)))){
return (new shadow.dom.Coordinate(G__58257,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58315.cljs$core$IFn$_invoke$arity$2 ? pred__58315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__58316) : pred__58315.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__58316)))){
return (new shadow.dom.Coordinate(self__.x,G__58257,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__58257),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__58257){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58257,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58265){
var extmap__4542__auto__ = (function (){var G__58326 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58265,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58265)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58326);
} else {
return G__58326;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58265),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58265),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k58349,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__58359 = k58349;
var G__58359__$1 = (((G__58359 instanceof cljs.core.Keyword))?G__58359.fqn:null);
switch (G__58359__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58349,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__58365){
var vec__58367 = p__58365;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58367,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58367,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58348){
var self__ = this;
var G__58348__$1 = this;
return (new cljs.core.RecordIter((0),G__58348__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58350,other58351){
var self__ = this;
var this58350__$1 = this;
return (((!((other58351 == null)))) && ((((this58350__$1.constructor === other58351.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58350__$1.w,other58351.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58350__$1.h,other58351.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58350__$1.__extmap,other58351.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k58349){
var self__ = this;
var this__4509__auto____$1 = this;
var G__58387 = k58349;
var G__58387__$1 = (((G__58387 instanceof cljs.core.Keyword))?G__58387.fqn:null);
switch (G__58387__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58349);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__58348){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__58394 = cljs.core.keyword_identical_QMARK_;
var expr__58395 = k__4511__auto__;
if(cljs.core.truth_((pred__58394.cljs$core$IFn$_invoke$arity$2 ? pred__58394.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__58395) : pred__58394.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__58395)))){
return (new shadow.dom.Size(G__58348,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58394.cljs$core$IFn$_invoke$arity$2 ? pred__58394.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__58395) : pred__58394.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__58395)))){
return (new shadow.dom.Size(self__.w,G__58348,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__58348),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__58348){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58348,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58352){
var extmap__4542__auto__ = (function (){var G__58410 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58352,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58352)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58410);
} else {
return G__58410;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58352),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58352),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__58917 = (i + (1));
var G__58918 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58917;
ret = G__58918;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58434){
var vec__58435 = p__58434;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58435,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58443 = arguments.length;
switch (G__58443) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__58921 = ps;
var G__58922 = (i + (1));
el__$1 = G__58921;
i = G__58922;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58471 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58471,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58471,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58471,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58476_58926 = cljs.core.seq(props);
var chunk__58477_58927 = null;
var count__58478_58928 = (0);
var i__58479_58929 = (0);
while(true){
if((i__58479_58929 < count__58478_58928)){
var vec__58489_58930 = chunk__58477_58927.cljs$core$IIndexed$_nth$arity$2(null,i__58479_58929);
var k_58931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58489_58930,(0),null);
var v_58932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58489_58930,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_58931);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58931),v_58932);


var G__58933 = seq__58476_58926;
var G__58934 = chunk__58477_58927;
var G__58935 = count__58478_58928;
var G__58936 = (i__58479_58929 + (1));
seq__58476_58926 = G__58933;
chunk__58477_58927 = G__58934;
count__58478_58928 = G__58935;
i__58479_58929 = G__58936;
continue;
} else {
var temp__5753__auto___58937 = cljs.core.seq(seq__58476_58926);
if(temp__5753__auto___58937){
var seq__58476_58938__$1 = temp__5753__auto___58937;
if(cljs.core.chunked_seq_QMARK_(seq__58476_58938__$1)){
var c__4679__auto___58943 = cljs.core.chunk_first(seq__58476_58938__$1);
var G__58944 = cljs.core.chunk_rest(seq__58476_58938__$1);
var G__58945 = c__4679__auto___58943;
var G__58946 = cljs.core.count(c__4679__auto___58943);
var G__58947 = (0);
seq__58476_58926 = G__58944;
chunk__58477_58927 = G__58945;
count__58478_58928 = G__58946;
i__58479_58929 = G__58947;
continue;
} else {
var vec__58492_58948 = cljs.core.first(seq__58476_58938__$1);
var k_58949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58492_58948,(0),null);
var v_58950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58492_58948,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_58949);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58949),v_58950);


var G__58951 = cljs.core.next(seq__58476_58938__$1);
var G__58952 = null;
var G__58953 = (0);
var G__58954 = (0);
seq__58476_58926 = G__58951;
chunk__58477_58927 = G__58952;
count__58478_58928 = G__58953;
i__58479_58929 = G__58954;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58503 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(1),null);
var seq__58507_58955 = cljs.core.seq(node_children);
var chunk__58509_58956 = null;
var count__58510_58957 = (0);
var i__58511_58958 = (0);
while(true){
if((i__58511_58958 < count__58510_58957)){
var child_struct_58959 = chunk__58509_58956.cljs$core$IIndexed$_nth$arity$2(null,i__58511_58958);
if((!((child_struct_58959 == null)))){
if(typeof child_struct_58959 === 'string'){
var text_58960 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58960),child_struct_58959].join(''));
} else {
var children_58961 = shadow.dom.svg_node(child_struct_58959);
if(cljs.core.seq_QMARK_(children_58961)){
var seq__58552_58962 = cljs.core.seq(children_58961);
var chunk__58554_58963 = null;
var count__58555_58964 = (0);
var i__58556_58965 = (0);
while(true){
if((i__58556_58965 < count__58555_58964)){
var child_58966 = chunk__58554_58963.cljs$core$IIndexed$_nth$arity$2(null,i__58556_58965);
if(cljs.core.truth_(child_58966)){
node.appendChild(child_58966);


var G__58967 = seq__58552_58962;
var G__58968 = chunk__58554_58963;
var G__58969 = count__58555_58964;
var G__58970 = (i__58556_58965 + (1));
seq__58552_58962 = G__58967;
chunk__58554_58963 = G__58968;
count__58555_58964 = G__58969;
i__58556_58965 = G__58970;
continue;
} else {
var G__58971 = seq__58552_58962;
var G__58972 = chunk__58554_58963;
var G__58973 = count__58555_58964;
var G__58974 = (i__58556_58965 + (1));
seq__58552_58962 = G__58971;
chunk__58554_58963 = G__58972;
count__58555_58964 = G__58973;
i__58556_58965 = G__58974;
continue;
}
} else {
var temp__5753__auto___58975 = cljs.core.seq(seq__58552_58962);
if(temp__5753__auto___58975){
var seq__58552_58976__$1 = temp__5753__auto___58975;
if(cljs.core.chunked_seq_QMARK_(seq__58552_58976__$1)){
var c__4679__auto___58977 = cljs.core.chunk_first(seq__58552_58976__$1);
var G__58978 = cljs.core.chunk_rest(seq__58552_58976__$1);
var G__58979 = c__4679__auto___58977;
var G__58980 = cljs.core.count(c__4679__auto___58977);
var G__58981 = (0);
seq__58552_58962 = G__58978;
chunk__58554_58963 = G__58979;
count__58555_58964 = G__58980;
i__58556_58965 = G__58981;
continue;
} else {
var child_58982 = cljs.core.first(seq__58552_58976__$1);
if(cljs.core.truth_(child_58982)){
node.appendChild(child_58982);


var G__58983 = cljs.core.next(seq__58552_58976__$1);
var G__58984 = null;
var G__58985 = (0);
var G__58986 = (0);
seq__58552_58962 = G__58983;
chunk__58554_58963 = G__58984;
count__58555_58964 = G__58985;
i__58556_58965 = G__58986;
continue;
} else {
var G__58987 = cljs.core.next(seq__58552_58976__$1);
var G__58988 = null;
var G__58989 = (0);
var G__58990 = (0);
seq__58552_58962 = G__58987;
chunk__58554_58963 = G__58988;
count__58555_58964 = G__58989;
i__58556_58965 = G__58990;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58961);
}
}


var G__58995 = seq__58507_58955;
var G__58996 = chunk__58509_58956;
var G__58997 = count__58510_58957;
var G__58998 = (i__58511_58958 + (1));
seq__58507_58955 = G__58995;
chunk__58509_58956 = G__58996;
count__58510_58957 = G__58997;
i__58511_58958 = G__58998;
continue;
} else {
var G__58999 = seq__58507_58955;
var G__59000 = chunk__58509_58956;
var G__59001 = count__58510_58957;
var G__59002 = (i__58511_58958 + (1));
seq__58507_58955 = G__58999;
chunk__58509_58956 = G__59000;
count__58510_58957 = G__59001;
i__58511_58958 = G__59002;
continue;
}
} else {
var temp__5753__auto___59003 = cljs.core.seq(seq__58507_58955);
if(temp__5753__auto___59003){
var seq__58507_59004__$1 = temp__5753__auto___59003;
if(cljs.core.chunked_seq_QMARK_(seq__58507_59004__$1)){
var c__4679__auto___59005 = cljs.core.chunk_first(seq__58507_59004__$1);
var G__59006 = cljs.core.chunk_rest(seq__58507_59004__$1);
var G__59007 = c__4679__auto___59005;
var G__59008 = cljs.core.count(c__4679__auto___59005);
var G__59009 = (0);
seq__58507_58955 = G__59006;
chunk__58509_58956 = G__59007;
count__58510_58957 = G__59008;
i__58511_58958 = G__59009;
continue;
} else {
var child_struct_59010 = cljs.core.first(seq__58507_59004__$1);
if((!((child_struct_59010 == null)))){
if(typeof child_struct_59010 === 'string'){
var text_59011 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59011),child_struct_59010].join(''));
} else {
var children_59012 = shadow.dom.svg_node(child_struct_59010);
if(cljs.core.seq_QMARK_(children_59012)){
var seq__58583_59013 = cljs.core.seq(children_59012);
var chunk__58585_59014 = null;
var count__58586_59015 = (0);
var i__58587_59016 = (0);
while(true){
if((i__58587_59016 < count__58586_59015)){
var child_59017 = chunk__58585_59014.cljs$core$IIndexed$_nth$arity$2(null,i__58587_59016);
if(cljs.core.truth_(child_59017)){
node.appendChild(child_59017);


var G__59018 = seq__58583_59013;
var G__59019 = chunk__58585_59014;
var G__59020 = count__58586_59015;
var G__59021 = (i__58587_59016 + (1));
seq__58583_59013 = G__59018;
chunk__58585_59014 = G__59019;
count__58586_59015 = G__59020;
i__58587_59016 = G__59021;
continue;
} else {
var G__59022 = seq__58583_59013;
var G__59023 = chunk__58585_59014;
var G__59024 = count__58586_59015;
var G__59025 = (i__58587_59016 + (1));
seq__58583_59013 = G__59022;
chunk__58585_59014 = G__59023;
count__58586_59015 = G__59024;
i__58587_59016 = G__59025;
continue;
}
} else {
var temp__5753__auto___59026__$1 = cljs.core.seq(seq__58583_59013);
if(temp__5753__auto___59026__$1){
var seq__58583_59027__$1 = temp__5753__auto___59026__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58583_59027__$1)){
var c__4679__auto___59028 = cljs.core.chunk_first(seq__58583_59027__$1);
var G__59029 = cljs.core.chunk_rest(seq__58583_59027__$1);
var G__59030 = c__4679__auto___59028;
var G__59031 = cljs.core.count(c__4679__auto___59028);
var G__59032 = (0);
seq__58583_59013 = G__59029;
chunk__58585_59014 = G__59030;
count__58586_59015 = G__59031;
i__58587_59016 = G__59032;
continue;
} else {
var child_59033 = cljs.core.first(seq__58583_59027__$1);
if(cljs.core.truth_(child_59033)){
node.appendChild(child_59033);


var G__59034 = cljs.core.next(seq__58583_59027__$1);
var G__59035 = null;
var G__59036 = (0);
var G__59037 = (0);
seq__58583_59013 = G__59034;
chunk__58585_59014 = G__59035;
count__58586_59015 = G__59036;
i__58587_59016 = G__59037;
continue;
} else {
var G__59038 = cljs.core.next(seq__58583_59027__$1);
var G__59039 = null;
var G__59040 = (0);
var G__59041 = (0);
seq__58583_59013 = G__59038;
chunk__58585_59014 = G__59039;
count__58586_59015 = G__59040;
i__58587_59016 = G__59041;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59012);
}
}


var G__59042 = cljs.core.next(seq__58507_59004__$1);
var G__59043 = null;
var G__59044 = (0);
var G__59045 = (0);
seq__58507_58955 = G__59042;
chunk__58509_58956 = G__59043;
count__58510_58957 = G__59044;
i__58511_58958 = G__59045;
continue;
} else {
var G__59046 = cljs.core.next(seq__58507_59004__$1);
var G__59047 = null;
var G__59048 = (0);
var G__59049 = (0);
seq__58507_58955 = G__59046;
chunk__58509_58956 = G__59047;
count__58510_58957 = G__59048;
i__58511_58958 = G__59049;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59053 = arguments.length;
var i__4865__auto___59054 = (0);
while(true){
if((i__4865__auto___59054 < len__4864__auto___59053)){
args__4870__auto__.push((arguments[i__4865__auto___59054]));

var G__59055 = (i__4865__auto___59054 + (1));
i__4865__auto___59054 = G__59055;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58600){
var G__58601 = cljs.core.first(seq58600);
var seq58600__$1 = cljs.core.next(seq58600);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58601,seq58600__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58603 = arguments.length;
switch (G__58603) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__54461__auto___59057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54462__auto__ = (function (){var switch__54246__auto__ = (function (state_58611){
var state_val_58612 = (state_58611[(1)]);
if((state_val_58612 === (1))){
var state_58611__$1 = state_58611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58611__$1,(2),once_or_cleanup);
} else {
if((state_val_58612 === (2))){
var inst_58608 = (state_58611[(2)]);
var inst_58609 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58611__$1 = (function (){var statearr_58613 = state_58611;
(statearr_58613[(7)] = inst_58608);

return statearr_58613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58611__$1,inst_58609);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__54247__auto__ = null;
var shadow$dom$state_machine__54247__auto____0 = (function (){
var statearr_58614 = [null,null,null,null,null,null,null,null];
(statearr_58614[(0)] = shadow$dom$state_machine__54247__auto__);

(statearr_58614[(1)] = (1));

return statearr_58614;
});
var shadow$dom$state_machine__54247__auto____1 = (function (state_58611){
while(true){
var ret_value__54248__auto__ = (function (){try{while(true){
var result__54249__auto__ = switch__54246__auto__(state_58611);
if(cljs.core.keyword_identical_QMARK_(result__54249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54249__auto__;
}
break;
}
}catch (e58644){var ex__54250__auto__ = e58644;
var statearr_58645_59058 = state_58611;
(statearr_58645_59058[(2)] = ex__54250__auto__);


if(cljs.core.seq((state_58611[(4)]))){
var statearr_58646_59059 = state_58611;
(statearr_58646_59059[(1)] = cljs.core.first((state_58611[(4)])));

} else {
throw ex__54250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59060 = state_58611;
state_58611 = G__59060;
continue;
} else {
return ret_value__54248__auto__;
}
break;
}
});
shadow$dom$state_machine__54247__auto__ = function(state_58611){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__54247__auto____0.call(this);
case 1:
return shadow$dom$state_machine__54247__auto____1.call(this,state_58611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__54247__auto____0;
shadow$dom$state_machine__54247__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__54247__auto____1;
return shadow$dom$state_machine__54247__auto__;
})()
})();
var state__54463__auto__ = (function (){var statearr_58647 = f__54462__auto__();
(statearr_58647[(6)] = c__54461__auto___59057);

return statearr_58647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54463__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
