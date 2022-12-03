goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_59337 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._id[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.object._id["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_59337(this$);
}
});

var shadow$object$IObject$_type$dyn_59338 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._type[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.object._type["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_59338(this$);
}
});

var shadow$object$IObject$_data$dyn_59339 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._data[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.object._data["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_59339(this$);
}
});

var shadow$object$IObject$_update$dyn_59340 = (function (this$,update_fn){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._update[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4551__auto__.call(null,this$,update_fn));
} else {
var m__4549__auto__ = (shadow.object._update["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4549__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_59340(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_59341 = (function (this$,cause){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4551__auto__.call(null,this$,cause));
} else {
var m__4549__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4549__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_59341(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__58886 = arguments.length;
switch (G__58886) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4253__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5753__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5753__auto__)){
var oid = temp__5753__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5753__auto__)){
var parent_id = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__59343 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__59343;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58909_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__58909_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__58911 = arguments.length;
switch (G__58911) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58912_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__58912_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__58913){
var map__58914 = p__58913;
var map__58914__$1 = cljs.core.__destructure_map(map__58914);
var oref = map__58914__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58914__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__58919 = arguments.length;
switch (G__58919) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58915_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__58915_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5751__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5751__auto__)){
var obj = temp__5751__auto__;
return obj;
} else {
var temp__5753__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__59361 = parent;
dom = G__59361;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59362 = arguments.length;
var i__4865__auto___59363 = (0);
while(true){
if((i__4865__auto___59363 < len__4864__auto___59362)){
args__4870__auto__.push((arguments[i__4865__auto___59363]));

var G__59364 = (i__4865__auto___59363 + (1));
i__4865__auto___59363 = G__59364;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5753__auto__)){
var reactions_to_trigger = temp__5753__auto__;
var seq__58939 = cljs.core.seq(reactions_to_trigger);
var chunk__58940 = null;
var count__58941 = (0);
var i__58942 = (0);
while(true){
if((i__58942 < count__58941)){
var rfn = chunk__58940.cljs$core$IIndexed$_nth$arity$2(null,i__58942);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__59365 = seq__58939;
var G__59366 = chunk__58940;
var G__59367 = count__58941;
var G__59368 = (i__58942 + (1));
seq__58939 = G__59365;
chunk__58940 = G__59366;
count__58941 = G__59367;
i__58942 = G__59368;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__58939);
if(temp__5753__auto____$1){
var seq__58939__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__58939__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58939__$1);
var G__59369 = cljs.core.chunk_rest(seq__58939__$1);
var G__59370 = c__4679__auto__;
var G__59371 = cljs.core.count(c__4679__auto__);
var G__59372 = (0);
seq__58939 = G__59369;
chunk__58940 = G__59370;
count__58941 = G__59371;
i__58942 = G__59372;
continue;
} else {
var rfn = cljs.core.first(seq__58939__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__59377 = cljs.core.next(seq__58939__$1);
var G__59378 = null;
var G__59379 = (0);
var G__59380 = (0);
seq__58939 = G__59377;
chunk__58940 = G__59378;
count__58941 = G__59379;
i__58942 = G__59380;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq58923){
var G__58924 = cljs.core.first(seq58923);
var seq58923__$1 = cljs.core.next(seq58923);
var G__58925 = cljs.core.first(seq58923__$1);
var seq58923__$2 = cljs.core.next(seq58923__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58924,G__58925,seq58923__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__58991_59381 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__58992_59382 = null;
var count__58993_59383 = (0);
var i__58994_59384 = (0);
while(true){
if((i__58994_59384 < count__58993_59383)){
var child_59385 = chunk__58992_59382.cljs$core$IIndexed$_nth$arity$2(null,i__58994_59384);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_59385,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_59385,ev,notify_fn));


var G__59386 = seq__58991_59381;
var G__59387 = chunk__58992_59382;
var G__59388 = count__58993_59383;
var G__59389 = (i__58994_59384 + (1));
seq__58991_59381 = G__59386;
chunk__58992_59382 = G__59387;
count__58993_59383 = G__59388;
i__58994_59384 = G__59389;
continue;
} else {
var temp__5753__auto___59390 = cljs.core.seq(seq__58991_59381);
if(temp__5753__auto___59390){
var seq__58991_59391__$1 = temp__5753__auto___59390;
if(cljs.core.chunked_seq_QMARK_(seq__58991_59391__$1)){
var c__4679__auto___59392 = cljs.core.chunk_first(seq__58991_59391__$1);
var G__59393 = cljs.core.chunk_rest(seq__58991_59391__$1);
var G__59394 = c__4679__auto___59392;
var G__59395 = cljs.core.count(c__4679__auto___59392);
var G__59396 = (0);
seq__58991_59381 = G__59393;
chunk__58992_59382 = G__59394;
count__58993_59383 = G__59395;
i__58994_59384 = G__59396;
continue;
} else {
var child_59397 = cljs.core.first(seq__58991_59391__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_59397,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_59397,ev,notify_fn));


var G__59398 = cljs.core.next(seq__58991_59391__$1);
var G__59399 = null;
var G__59400 = (0);
var G__59401 = (0);
seq__58991_59381 = G__59398;
chunk__58992_59382 = G__59399;
count__58993_59383 = G__59400;
i__58994_59384 = G__59401;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59402 = arguments.length;
var i__4865__auto___59403 = (0);
while(true){
if((i__4865__auto___59403 < len__4864__auto___59402)){
args__4870__auto__.push((arguments[i__4865__auto___59403]));

var G__59404 = (i__4865__auto___59403 + (1));
i__4865__auto___59403 = G__59404;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq59050){
var G__59051 = cljs.core.first(seq59050);
var seq59050__$1 = cljs.core.next(seq59050);
var G__59052 = cljs.core.first(seq59050__$1);
var seq59050__$2 = cljs.core.next(seq59050__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59051,G__59052,seq59050__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59405 = arguments.length;
var i__4865__auto___59406 = (0);
while(true){
if((i__4865__auto___59406 < len__4864__auto___59405)){
args__4870__auto__.push((arguments[i__4865__auto___59406]));

var G__59407 = (i__4865__auto___59406 + (1));
i__4865__auto___59406 = G__59407;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__59408 = shadow.object.get_parent(current);
current = G__59408;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq59061){
var G__59062 = cljs.core.first(seq59061);
var seq59061__$1 = cljs.core.next(seq59061);
var G__59063 = cljs.core.first(seq59061__$1);
var seq59061__$2 = cljs.core.next(seq59061__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59062,G__59063,seq59061__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59409 = arguments.length;
var i__4865__auto___59410 = (0);
while(true){
if((i__4865__auto___59410 < len__4864__auto___59409)){
args__4870__auto__.push((arguments[i__4865__auto___59410]));

var G__59411 = (i__4865__auto___59410 + (1));
i__4865__auto___59410 = G__59411;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq59064){
var G__59065 = cljs.core.first(seq59064);
var seq59064__$1 = cljs.core.next(seq59064);
var G__59066 = cljs.core.first(seq59064__$1);
var seq59064__$2 = cljs.core.next(seq59064__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59065,G__59066,seq59064__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5751__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5751__auto__)){
var custom_remove = temp__5751__auto__;
var G__59072 = this$;
var G__59073 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__59072,G__59073) : custom_remove.call(null,G__59072,G__59073));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__59075 = arguments.length;
switch (G__59075) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__59076 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__59077 = null;
var count__59078 = (0);
var i__59079 = (0);
while(true){
if((i__59079 < count__59078)){
var vec__59086 = chunk__59077.cljs$core$IIndexed$_nth$arity$2(null,i__59079);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59086,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59086,(1),null);
var ev_def = vec__59086;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_59416__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__59076,chunk__59077,count__59078,i__59079,vec__59086,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__59076,chunk__59077,count__59078,i__59079,vec__59086,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__59076,chunk__59077,count__59078,i__59079,handler_59416__$1,vec__59086,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_59416__$1.cljs$core$IFn$_invoke$arity$3 ? handler_59416__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_59416__$1.call(null,oref,e,el));
});})(seq__59076,chunk__59077,count__59078,i__59079,handler_59416__$1,vec__59086,ev,handler,ev_def))
);


var G__59417 = seq__59076;
var G__59418 = chunk__59077;
var G__59419 = count__59078;
var G__59420 = (i__59079 + (1));
seq__59076 = G__59417;
chunk__59077 = G__59418;
count__59078 = G__59419;
i__59079 = G__59420;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59076);
if(temp__5753__auto__){
var seq__59076__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59076__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59076__$1);
var G__59421 = cljs.core.chunk_rest(seq__59076__$1);
var G__59422 = c__4679__auto__;
var G__59423 = cljs.core.count(c__4679__auto__);
var G__59424 = (0);
seq__59076 = G__59421;
chunk__59077 = G__59422;
count__59078 = G__59423;
i__59079 = G__59424;
continue;
} else {
var vec__59089 = cljs.core.first(seq__59076__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59089,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59089,(1),null);
var ev_def = vec__59089;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_59425__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__59076,chunk__59077,count__59078,i__59079,vec__59089,ev,handler,ev_def,seq__59076__$1,temp__5753__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__59076,chunk__59077,count__59078,i__59079,vec__59089,ev,handler,ev_def,seq__59076__$1,temp__5753__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__59076,chunk__59077,count__59078,i__59079,handler_59425__$1,vec__59089,ev,handler,ev_def,seq__59076__$1,temp__5753__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_59425__$1.cljs$core$IFn$_invoke$arity$3 ? handler_59425__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_59425__$1.call(null,oref,e,el));
});})(seq__59076,chunk__59077,count__59078,i__59079,handler_59425__$1,vec__59089,ev,handler,ev_def,seq__59076__$1,temp__5753__auto__))
);


var G__59426 = cljs.core.next(seq__59076__$1);
var G__59427 = null;
var G__59428 = (0);
var G__59429 = (0);
seq__59076 = G__59426;
chunk__59077 = G__59427;
count__59078 = G__59428;
i__59079 = G__59429;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__59092){
var vec__59093 = p__59092;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59093,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59093,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = event;
if(cljs.core.truth_(and__4251__auto__)){
return handler;
} else {
return and__4251__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59439 = arguments.length;
var i__4865__auto___59440 = (0);
while(true){
if((i__4865__auto___59440 < len__4864__auto___59439)){
args__4870__auto__.push((arguments[i__4865__auto___59440]));

var G__59441 = (i__4865__auto___59440 + (1));
i__4865__auto___59440 = G__59441;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e59102){if((e59102 instanceof Object)){
var e = e59102;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e59102;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq59100){
var G__59101 = cljs.core.first(seq59100);
var seq59100__$1 = cljs.core.next(seq59100);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59101,seq59100__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__59108 = arguments.length;
switch (G__59108) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__59109 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__59109) : shadow.dom.build.call(null,G__59109));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k59111,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__59115 = k59111;
var G__59115__$1 = (((G__59115 instanceof cljs.core.Keyword))?G__59115.fqn:null);
switch (G__59115__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59111,else__4505__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__59116){
var vec__59117 = p__59116;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59117,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59117,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.object.Watch{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59110){
var self__ = this;
var G__59110__$1 = this;
return (new cljs.core.RecordIter((0),G__59110__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59112,other59113){
var self__ = this;
var this59112__$1 = this;
return (((!((other59113 == null)))) && ((((this59112__$1.constructor === other59113.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59112__$1.key,other59113.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59112__$1.handler,other59113.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59112__$1.__extmap,other59113.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k59111){
var self__ = this;
var this__4509__auto____$1 = this;
var G__59120 = k59111;
var G__59120__$1 = (((G__59120 instanceof cljs.core.Keyword))?G__59120.fqn:null);
switch (G__59120__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k59111);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__59110){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__59121 = cljs.core.keyword_identical_QMARK_;
var expr__59122 = k__4511__auto__;
if(cljs.core.truth_((pred__59121.cljs$core$IFn$_invoke$arity$2 ? pred__59121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__59122) : pred__59121.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__59122)))){
return (new shadow.object.Watch(G__59110,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59121.cljs$core$IFn$_invoke$arity$2 ? pred__59121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__59122) : pred__59121.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__59122)))){
return (new shadow.object.Watch(self__.key,G__59110,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__59110),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__59110){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__59110,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__59114){
var extmap__4542__auto__ = (function (){var G__59124 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59114,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__59114)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59124);
} else {
return G__59124;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__59114),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__59114),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59125_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__59125_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__59126 = cljs.core.seq(self__.watches);
var chunk__59127 = null;
var count__59128 = (0);
var i__59129 = (0);
while(true){
if((i__59129 < count__59128)){
var map__59132 = chunk__59127.cljs$core$IIndexed$_nth$arity$2(null,i__59129);
var map__59132__$1 = cljs.core.__destructure_map(map__59132);
var watch = map__59132__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59132__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59132__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__59481 = seq__59126;
var G__59482 = chunk__59127;
var G__59483 = count__59128;
var G__59484 = (i__59129 + (1));
seq__59126 = G__59481;
chunk__59127 = G__59482;
count__59128 = G__59483;
i__59129 = G__59484;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59126);
if(temp__5753__auto__){
var seq__59126__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59126__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59126__$1);
var G__59488 = cljs.core.chunk_rest(seq__59126__$1);
var G__59489 = c__4679__auto__;
var G__59490 = cljs.core.count(c__4679__auto__);
var G__59491 = (0);
seq__59126 = G__59488;
chunk__59127 = G__59489;
count__59128 = G__59490;
i__59129 = G__59491;
continue;
} else {
var map__59133 = cljs.core.first(seq__59126__$1);
var map__59133__$1 = cljs.core.__destructure_map(map__59133);
var watch = map__59133__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59133__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59133__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__59492 = cljs.core.next(seq__59126__$1);
var G__59493 = null;
var G__59494 = (0);
var G__59495 = (0);
seq__59126 = G__59492;
chunk__59127 = G__59493;
count__59128 = G__59494;
i__59129 = G__59495;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__59134_59498 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__59135_59499 = null;
var count__59136_59500 = (0);
var i__59137_59501 = (0);
while(true){
if((i__59137_59501 < count__59136_59500)){
var child_59504 = chunk__59135_59499.cljs$core$IIndexed$_nth$arity$2(null,i__59137_59501);
shadow.object._destroy_BANG_(child_59504,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__59505 = seq__59134_59498;
var G__59506 = chunk__59135_59499;
var G__59507 = count__59136_59500;
var G__59508 = (i__59137_59501 + (1));
seq__59134_59498 = G__59505;
chunk__59135_59499 = G__59506;
count__59136_59500 = G__59507;
i__59137_59501 = G__59508;
continue;
} else {
var temp__5753__auto___59509 = cljs.core.seq(seq__59134_59498);
if(temp__5753__auto___59509){
var seq__59134_59510__$1 = temp__5753__auto___59509;
if(cljs.core.chunked_seq_QMARK_(seq__59134_59510__$1)){
var c__4679__auto___59511 = cljs.core.chunk_first(seq__59134_59510__$1);
var G__59512 = cljs.core.chunk_rest(seq__59134_59510__$1);
var G__59513 = c__4679__auto___59511;
var G__59514 = cljs.core.count(c__4679__auto___59511);
var G__59515 = (0);
seq__59134_59498 = G__59512;
chunk__59135_59499 = G__59513;
count__59136_59500 = G__59514;
i__59137_59501 = G__59515;
continue;
} else {
var child_59516 = cljs.core.first(seq__59134_59510__$1);
shadow.object._destroy_BANG_(child_59516,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__59517 = cljs.core.next(seq__59134_59510__$1);
var G__59518 = null;
var G__59519 = (0);
var G__59520 = (0);
seq__59134_59498 = G__59517;
chunk__59135_59499 = G__59518;
count__59136_59500 = G__59519;
i__59137_59501 = G__59520;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_59528 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_59528 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_59528);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__59139 = arguments.length;
switch (G__59139) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__59141 = arguments.length;
switch (G__59141) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59541 = arguments.length;
var i__4865__auto___59542 = (0);
while(true){
if((i__4865__auto___59542 < len__4864__auto___59541)){
args__4870__auto__.push((arguments[i__4865__auto___59542]));

var G__59545 = (i__4865__auto___59542 + (1));
i__4865__auto___59542 = G__59545;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_59554 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5751__auto___59556 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5751__auto___59556)){
var dom_59557 = temp__5751__auto___59556;
shadow.dom.set_data(dom_59557,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_59557,dom_events_59554);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_59557], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_59557], 0));
} else {
var temp__5753__auto___59559 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___59559)){
var dom_fn_59560 = temp__5753__auto___59559;
var dom_59561 = (function (){var G__59192 = (dom_fn_59560.cljs$core$IFn$_invoke$arity$2 ? dom_fn_59560.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_59560.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__59192) : shadow.dom.build.call(null,G__59192));
})();
shadow.dom.set_data(dom_59561,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_59561], 0));

shadow.object.bind_dom_events(oref,dom_59561,dom_events_59554);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_59561], 0));
} else {
}
}

var temp__5753__auto___59562 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___59562)){
var watches_59563 = temp__5753__auto___59562;
var seq__59193_59564 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_59563));
var chunk__59194_59565 = null;
var count__59195_59566 = (0);
var i__59196_59567 = (0);
while(true){
if((i__59196_59567 < count__59195_59566)){
var vec__59203_59571 = chunk__59194_59565.cljs$core$IIndexed$_nth$arity$2(null,i__59196_59567);
var attr_59572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59203_59571,(0),null);
var handler_59573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59203_59571,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_59572,((function (seq__59193_59564,chunk__59194_59565,count__59195_59566,i__59196_59567,vec__59203_59571,attr_59572,handler_59573,watches_59563,temp__5753__auto___59562,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_59573.cljs$core$IFn$_invoke$arity$3 ? handler_59573.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_59573.call(null,oref,old,new$));
});})(seq__59193_59564,chunk__59194_59565,count__59195_59566,i__59196_59567,vec__59203_59571,attr_59572,handler_59573,watches_59563,temp__5753__auto___59562,oid,parent,result_chan,odef,obj,oref))
);


var G__59575 = seq__59193_59564;
var G__59576 = chunk__59194_59565;
var G__59577 = count__59195_59566;
var G__59578 = (i__59196_59567 + (1));
seq__59193_59564 = G__59575;
chunk__59194_59565 = G__59576;
count__59195_59566 = G__59577;
i__59196_59567 = G__59578;
continue;
} else {
var temp__5753__auto___59579__$1 = cljs.core.seq(seq__59193_59564);
if(temp__5753__auto___59579__$1){
var seq__59193_59580__$1 = temp__5753__auto___59579__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59193_59580__$1)){
var c__4679__auto___59581 = cljs.core.chunk_first(seq__59193_59580__$1);
var G__59582 = cljs.core.chunk_rest(seq__59193_59580__$1);
var G__59583 = c__4679__auto___59581;
var G__59584 = cljs.core.count(c__4679__auto___59581);
var G__59585 = (0);
seq__59193_59564 = G__59582;
chunk__59194_59565 = G__59583;
count__59195_59566 = G__59584;
i__59196_59567 = G__59585;
continue;
} else {
var vec__59206_59586 = cljs.core.first(seq__59193_59580__$1);
var attr_59587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59206_59586,(0),null);
var handler_59588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59206_59586,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_59587,((function (seq__59193_59564,chunk__59194_59565,count__59195_59566,i__59196_59567,vec__59206_59586,attr_59587,handler_59588,seq__59193_59580__$1,temp__5753__auto___59579__$1,watches_59563,temp__5753__auto___59562,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_59588.cljs$core$IFn$_invoke$arity$3 ? handler_59588.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_59588.call(null,oref,old,new$));
});})(seq__59193_59564,chunk__59194_59565,count__59195_59566,i__59196_59567,vec__59206_59586,attr_59587,handler_59588,seq__59193_59580__$1,temp__5753__auto___59579__$1,watches_59563,temp__5753__auto___59562,oid,parent,result_chan,odef,obj,oref))
);


var G__59589 = cljs.core.next(seq__59193_59580__$1);
var G__59590 = null;
var G__59591 = (0);
var G__59592 = (0);
seq__59193_59564 = G__59589;
chunk__59194_59565 = G__59590;
count__59195_59566 = G__59591;
i__59196_59567 = G__59592;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq59189){
var G__59190 = cljs.core.first(seq59189);
var seq59189__$1 = cljs.core.next(seq59189);
var G__59191 = cljs.core.first(seq59189__$1);
var seq59189__$2 = cljs.core.next(seq59189__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59190,G__59191,seq59189__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__59211 = arguments.length;
switch (G__59211) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__59209_SHARP_){
var G__59212 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__59209_SHARP_) : node_gen.call(null,p1__59209_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__59212) : shadow.dom.build.call(null,G__59212));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__59213_59602 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__59214_59603 = null;
var count__59215_59604 = (0);
var i__59216_59605 = (0);
while(true){
if((i__59216_59605 < count__59215_59604)){
var obj_59608 = chunk__59214_59603.cljs$core$IIndexed$_nth$arity$2(null,i__59216_59605);
var obj_59609__$1 = shadow.object.get_from_dom(obj_59608);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_59609__$1);


var G__59610 = seq__59213_59602;
var G__59611 = chunk__59214_59603;
var G__59612 = count__59215_59604;
var G__59613 = (i__59216_59605 + (1));
seq__59213_59602 = G__59610;
chunk__59214_59603 = G__59611;
count__59215_59604 = G__59612;
i__59216_59605 = G__59613;
continue;
} else {
var temp__5753__auto___59614 = cljs.core.seq(seq__59213_59602);
if(temp__5753__auto___59614){
var seq__59213_59615__$1 = temp__5753__auto___59614;
if(cljs.core.chunked_seq_QMARK_(seq__59213_59615__$1)){
var c__4679__auto___59616 = cljs.core.chunk_first(seq__59213_59615__$1);
var G__59617 = cljs.core.chunk_rest(seq__59213_59615__$1);
var G__59618 = c__4679__auto___59616;
var G__59619 = cljs.core.count(c__4679__auto___59616);
var G__59620 = (0);
seq__59213_59602 = G__59617;
chunk__59214_59603 = G__59618;
count__59215_59604 = G__59619;
i__59216_59605 = G__59620;
continue;
} else {
var obj_59621 = cljs.core.first(seq__59213_59615__$1);
var obj_59622__$1 = shadow.object.get_from_dom(obj_59621);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_59622__$1);


var G__59623 = cljs.core.next(seq__59213_59615__$1);
var G__59624 = null;
var G__59625 = (0);
var G__59626 = (0);
seq__59213_59602 = G__59623;
chunk__59214_59603 = G__59624;
count__59215_59604 = G__59625;
i__59216_59605 = G__59626;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__59219 = arguments.length;
switch (G__59219) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__59217_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__59217_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__59220){
var vec__59221 = p__59220;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59221,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59221,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__59224_59641 = cljs.core.seq((function (){var G__59240 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__59240) : coll_transform.call(null,G__59240));
})());
var chunk__59225_59642 = null;
var count__59226_59643 = (0);
var i__59227_59644 = (0);
while(true){
if((i__59227_59644 < count__59226_59643)){
var item_59645 = chunk__59225_59642.cljs$core$IIndexed$_nth$arity$2(null,i__59227_59644);
shadow.object.dom_enter(coll_dom,make_item_fn(item_59645));


var G__59646 = seq__59224_59641;
var G__59647 = chunk__59225_59642;
var G__59648 = count__59226_59643;
var G__59649 = (i__59227_59644 + (1));
seq__59224_59641 = G__59646;
chunk__59225_59642 = G__59647;
count__59226_59643 = G__59648;
i__59227_59644 = G__59649;
continue;
} else {
var temp__5753__auto___59650 = cljs.core.seq(seq__59224_59641);
if(temp__5753__auto___59650){
var seq__59224_59651__$1 = temp__5753__auto___59650;
if(cljs.core.chunked_seq_QMARK_(seq__59224_59651__$1)){
var c__4679__auto___59652 = cljs.core.chunk_first(seq__59224_59651__$1);
var G__59653 = cljs.core.chunk_rest(seq__59224_59651__$1);
var G__59654 = c__4679__auto___59652;
var G__59655 = cljs.core.count(c__4679__auto___59652);
var G__59656 = (0);
seq__59224_59641 = G__59653;
chunk__59225_59642 = G__59654;
count__59226_59643 = G__59655;
i__59227_59644 = G__59656;
continue;
} else {
var item_59657 = cljs.core.first(seq__59224_59651__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_59657));


var G__59658 = cljs.core.next(seq__59224_59651__$1);
var G__59659 = null;
var G__59660 = (0);
var G__59661 = (0);
seq__59224_59641 = G__59658;
chunk__59225_59642 = G__59659;
count__59226_59643 = G__59660;
i__59227_59644 = G__59661;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4339__auto__ = count_new;
var y__4340__auto__ = count_children;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var n__4741__auto___59664 = count_children__$1;
var idx_59665 = (0);
while(true){
if((idx_59665 < n__4741__auto___59664)){
var cn_59666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_59665);
var cc_59667 = shadow.object.get_from_dom(cn_59666);
var ckey_59668 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_59667);
var cval_59669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_59667,item_key);
var vec__59241_59670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_59665);
var nkey_59671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59241_59670,(0),null);
var nval_59672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59241_59670,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_59668,nkey_59671)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_59669,nval_59672)))){
} else {
var new_obj_59675 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_59671,nval_59672], null));
shadow.dom.replace_node(cn_59666,new_obj_59675);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_59667);

shadow.object.notify_tree_BANG_(new_obj_59675,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__59677 = (idx_59665 + (1));
idx_59665 = G__59677;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__59244_59678 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__59245_59679 = null;
var count__59246_59680 = (0);
var i__59247_59681 = (0);
while(true){
if((i__59247_59681 < count__59246_59680)){
var item_59682 = chunk__59245_59679.cljs$core$IIndexed$_nth$arity$2(null,i__59247_59681);
shadow.object.dom_enter(coll_dom,make_item_fn(item_59682));


var G__59684 = seq__59244_59678;
var G__59685 = chunk__59245_59679;
var G__59686 = count__59246_59680;
var G__59687 = (i__59247_59681 + (1));
seq__59244_59678 = G__59684;
chunk__59245_59679 = G__59685;
count__59246_59680 = G__59686;
i__59247_59681 = G__59687;
continue;
} else {
var temp__5753__auto___59688 = cljs.core.seq(seq__59244_59678);
if(temp__5753__auto___59688){
var seq__59244_59689__$1 = temp__5753__auto___59688;
if(cljs.core.chunked_seq_QMARK_(seq__59244_59689__$1)){
var c__4679__auto___59690 = cljs.core.chunk_first(seq__59244_59689__$1);
var G__59691 = cljs.core.chunk_rest(seq__59244_59689__$1);
var G__59692 = c__4679__auto___59690;
var G__59693 = cljs.core.count(c__4679__auto___59690);
var G__59694 = (0);
seq__59244_59678 = G__59691;
chunk__59245_59679 = G__59692;
count__59246_59680 = G__59693;
i__59247_59681 = G__59694;
continue;
} else {
var item_59696 = cljs.core.first(seq__59244_59689__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_59696));


var G__59697 = cljs.core.next(seq__59244_59689__$1);
var G__59698 = null;
var G__59699 = (0);
var G__59700 = (0);
seq__59244_59678 = G__59697;
chunk__59245_59679 = G__59698;
count__59246_59680 = G__59699;
i__59247_59681 = G__59700;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4251__auto__ = key;
if(cljs.core.truth_(and__4251__auto__)){
return path;
} else {
return and__4251__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__59256 = "inspect!";
var G__59257 = shadow.object._id(oref);
var G__59258 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__59259 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__59256,G__59257,G__59258,G__59259) : shadow.object.info.call(null,G__59256,G__59257,G__59258,G__59259));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__59260_59705 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__59261_59706 = null;
var count__59262_59707 = (0);
var i__59263_59708 = (0);
while(true){
if((i__59263_59708 < count__59262_59707)){
var vec__59278_59709 = chunk__59261_59706.cljs$core$IIndexed$_nth$arity$2(null,i__59263_59708);
var id_59710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59278_59709,(0),null);
var oref_59711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59278_59709,(1),null);
var G__59281_59712 = "dump";
var G__59282_59713 = id_59710;
var G__59283_59714 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_59711)], 0));
var G__59284_59715 = cljs.core.deref(shadow.object._data(oref_59711));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__59281_59712,G__59282_59713,G__59283_59714,G__59284_59715) : shadow.object.info.call(null,G__59281_59712,G__59282_59713,G__59283_59714,G__59284_59715));


var G__59716 = seq__59260_59705;
var G__59717 = chunk__59261_59706;
var G__59718 = count__59262_59707;
var G__59719 = (i__59263_59708 + (1));
seq__59260_59705 = G__59716;
chunk__59261_59706 = G__59717;
count__59262_59707 = G__59718;
i__59263_59708 = G__59719;
continue;
} else {
var temp__5753__auto___59720 = cljs.core.seq(seq__59260_59705);
if(temp__5753__auto___59720){
var seq__59260_59721__$1 = temp__5753__auto___59720;
if(cljs.core.chunked_seq_QMARK_(seq__59260_59721__$1)){
var c__4679__auto___59722 = cljs.core.chunk_first(seq__59260_59721__$1);
var G__59723 = cljs.core.chunk_rest(seq__59260_59721__$1);
var G__59724 = c__4679__auto___59722;
var G__59725 = cljs.core.count(c__4679__auto___59722);
var G__59726 = (0);
seq__59260_59705 = G__59723;
chunk__59261_59706 = G__59724;
count__59262_59707 = G__59725;
i__59263_59708 = G__59726;
continue;
} else {
var vec__59288_59727 = cljs.core.first(seq__59260_59721__$1);
var id_59728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59288_59727,(0),null);
var oref_59729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59288_59727,(1),null);
var G__59291_59730 = "dump";
var G__59292_59731 = id_59728;
var G__59293_59732 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_59729)], 0));
var G__59294_59733 = cljs.core.deref(shadow.object._data(oref_59729));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__59291_59730,G__59292_59731,G__59293_59732,G__59294_59733) : shadow.object.info.call(null,G__59291_59730,G__59292_59731,G__59293_59732,G__59294_59733));


var G__59734 = cljs.core.next(seq__59260_59721__$1);
var G__59735 = null;
var G__59736 = (0);
var G__59737 = (0);
seq__59260_59705 = G__59734;
chunk__59261_59706 = G__59735;
count__59262_59707 = G__59736;
i__59263_59708 = G__59737;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
