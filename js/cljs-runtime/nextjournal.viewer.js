goog.provide('nextjournal.viewer');
goog.scope(function(){
  nextjournal.viewer.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
nextjournal.viewer.edn_type = (function nextjournal$viewer$edn_type(tag,value){
var G__77684 = tag;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__77684)){
return new cljs.core.Keyword(null,"edn-var","edn-var",-1138947582);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"object","object",-1179821820,null),G__77684)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(value),new cljs.core.Symbol(null,"clojure.lang.Atom","clojure.lang.Atom",661742144,null))){
return new cljs.core.Keyword(null,"edn-atom","edn-atom",1506626965);
} else {
return new cljs.core.Keyword(null,"edn-object","edn-object",1123440659);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("nextjournal","empty","nextjournal/empty",2001390345,null),G__77684)){
return new cljs.core.Keyword(null,"edn-empty","edn-empty",-939905458);
} else {
return new cljs.core.Keyword(null,"edn-unknown-tag","edn-unknown-tag",2056867940);

}
}
}
});

/**
 * @interface
 */
nextjournal.viewer.ITypeKey = function(){};

var nextjournal$viewer$ITypeKey$_type_key$dyn_77848 = (function (x){
var x__4550__auto__ = (((x == null))?null:x);
var m__4551__auto__ = (nextjournal.viewer._type_key[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4551__auto__.call(null,x));
} else {
var m__4549__auto__ = (nextjournal.viewer._type_key["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4549__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("ITypeKey.-type-key",x);
}
}
});
/**
 * Returns type name as keyword
 */
nextjournal.viewer._type_key = (function nextjournal$viewer$_type_key(x){
if((((!((x == null)))) && ((!((x.nextjournal$viewer$ITypeKey$_type_key$arity$1 == null)))))){
return x.nextjournal$viewer$ITypeKey$_type_key$arity$1(x);
} else {
return nextjournal$viewer$ITypeKey$_type_key$dyn_77848(x);
}
});

nextjournal.viewer.value_type = (function nextjournal$viewer$value_type(value){
if((((typeof Element !== 'undefined')) && ((value instanceof Element)))){
return new cljs.core.Keyword(null,"element","element",1974019749);
} else {
if((((!((value == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === value.nextjournal$viewer$ITypeKey$))))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(nextjournal.viewer.ITypeKey,value):false)):cljs.core.native_satisfies_QMARK_(nextjournal.viewer.ITypeKey,value))){
return nextjournal.viewer._type_key(value);
} else {
if(cljs.core.var_QMARK_(value)){
return new cljs.core.Keyword(null,"var","var",-769682797);
} else {
if((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IDeref$))))?true:false):false)){
return new cljs.core.Keyword(null,"derefable","derefable",377265868);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.array_QMARK_(value)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
if(cljs.core.set_QMARK_(value)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.list_QMARK_(value)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.seq_QMARK_(value)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.fn_QMARK_(value)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
if(cljs.core.uuid_QMARK_(value)){
return new cljs.core.Keyword(null,"uuid","uuid",-2145095719);
} else {
if(typeof value === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if(((typeof value === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(value))))){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if((value instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if((value == null)){
return new cljs.core.Keyword(null,"nil","nil",99600501);
} else {
if(cljs.core.boolean_QMARK_(value)){
return new cljs.core.Keyword(null,"boolean","boolean",-1919418404);
} else {
if(cljs.core.inst_QMARK_(value)){
return new cljs.core.Keyword(null,"inst","inst",645962501);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cognitect.transit.tagged_value_QMARK_(value);
if(cljs.core.truth_(and__4251__auto__)){
return (!(cljs.core.coll_QMARK_(value)));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.Keyword(null,"transit-tagged-value","transit-tagged-value",-2070390989);
} else {
if(cljs.core.truth_(goog.isObject(value))){
return new cljs.core.Keyword(null,"object","object",1474613949);
} else {
return new cljs.core.Keyword(null,"untyped","untyped",-219541759);

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
nextjournal.viewer.obj__GT_clj = (function nextjournal$viewer$obj__GT_clj(obj){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,key){
var v = (obj[key]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("function",goog.typeOf(v))){
return result;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,key,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,nextjournal.viewer.goog$module$goog$object.getKeys(obj));
});
nextjournal.viewer.coll_decoration = (function nextjournal$viewer$coll_decoration(type){
var G__77701 = type;
var G__77701__$1 = (((G__77701 instanceof cljs.core.Keyword))?G__77701.fqn:null);
switch (G__77701__$1) {
case "vector":
case "array":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);

break;
case "set":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null);

break;
case "list":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);

break;
case "map":
case "object":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77701__$1)].join('')));

}
});
nextjournal.viewer.increase_items = (20);
nextjournal.viewer.color_classes = (function nextjournal$viewer$color_classes(selected_QMARK_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value-color","value-color",-1448916937),(cljs.core.truth_(selected_QMARK_)?"white-90":"dark-green"),new cljs.core.Keyword(null,"symbol-color","symbol-color",-983152467),(cljs.core.truth_(selected_QMARK_)?"white-90":"dark-blue"),new cljs.core.Keyword(null,"prefix-color","prefix-color",-1936761188),(cljs.core.truth_(selected_QMARK_)?"white-50":"black-30"),new cljs.core.Keyword(null,"label-color","label-color",813573617),(cljs.core.truth_(selected_QMARK_)?"white-90":"black-60"),new cljs.core.Keyword(null,"badge-background-color","badge-background-color",1563868990),(cljs.core.truth_(selected_QMARK_)?"bg-white-20":"bg-black-10")], null);
});
nextjournal.viewer.count_badge = (function nextjournal$viewer$count_badge(selected_QMARK_,coll){
var map__77704 = nextjournal.viewer.color_classes(selected_QMARK_);
var map__77704__$1 = cljs.core.__destructure_map(map__77704);
var badge_background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77704__$1,new cljs.core.Keyword(null,"badge-background-color","badge-background-color",1563868990));
var label_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77704__$1,new cljs.core.Keyword(null,"label-color","label-color",813573617));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-center.flex.items-center","span.text-center.flex.items-center",1287786510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(badge_background_color)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_color)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0.5em",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"0.5em",new cljs.core.Keyword(null,"height","height",1025178622),"1.1em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(7)], null)], null),cljs.core.count(coll)], null);
});
nextjournal.viewer.more_button = (function nextjournal$viewer$more_button(visible_nb_items_ratom,p__77707){
var map__77708 = p__77707;
var map__77708__$1 = cljs.core.__destructure_map(map__77708);
var _opts = map__77708__$1;
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77708__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77708__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"div.result-data-field","div.result-data-field",-311480386):new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(visible_nb_items_ratom,cljs.core._PLUS_,nextjournal.viewer.increase_items);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.monospace","span.monospace",2051170564),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 mt-3 -ml-1 hover:bg-gray-200 rounded cursor-pointer",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pl-2 text-gray-500 inspected-value"], null)),(count - cljs.core.deref(visible_nb_items_ratom)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," more\u2026"], null)], null)], null);
});
nextjournal.viewer.browsify_button = (function nextjournal$viewer$browsify_button(path,p__77711,view){
var map__77712 = p__77711;
var map__77712__$1 = cljs.core.__destructure_map(map__77712);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77712__$1,new cljs.core.Keyword("nextjournal","dispatch","nextjournal/dispatch",-950337451));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.browsify-button","span.browsify-button",457611905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover:bg-gray-200 cursor-pointer rounded",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__77713 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"path","path",-188191168),path], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__77713) : dispatch.call(null,G__77713));
})], null),view], null);
});
/**
 * Check if we allow the key to be navibable based on the type.
 *   Currently we only support primitive types, except symbols.
 */
nextjournal.viewer.navigable_key_QMARK_ = (function nextjournal$viewer$navigable_key_QMARK_(item){
return ((typeof item === 'number') || (((typeof item === 'string') || ((item instanceof cljs.core.Keyword)))));
});
/**
 * Determines whether an item should be made clickable for datafy/nav. Is the view
 *   editable? The runtime active? Does the runtime support datafy/nav? Did the node
 *   execute since start of the runtime? ...
 */
nextjournal.viewer.navigable_item_QMARK_ = (function nextjournal$viewer$navigable_item_QMARK_(options,path,item){
var and__4251__auto__ = cljs.core.empty_QMARK_(path);
if(and__4251__auto__){
var and__4251__auto____$1 = new cljs.core.Keyword("nextjournal","navigable?","nextjournal/navigable?",-2104170780).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(and__4251__auto____$1)){
return nextjournal.viewer.navigable_key_QMARK_(item);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
nextjournal.viewer.inspect_coll = (function nextjournal$viewer$inspect_coll(_type,_options,_coll){
var visible_nb_items = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((20));
return (function (type,p__77715,coll){
var map__77716 = p__77715;
var map__77716__$1 = cljs.core.__destructure_map(map__77716);
var options = map__77716__$1;
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77716__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77716__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var truncated_QMARK_ = new cljs.core.Keyword("nextjournal","truncated?","nextjournal/truncated?",-980673354).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(coll));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expanded),path);
var parent = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(path));
var short_QMARK_ = ((cljs.core.seq(path)) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expanded),parent))));
var items = (function (){var G__77721 = coll;
if(cljs.core.object_QMARK_(coll)){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(G__77721);
} else {
return G__77721;
}
})();
var count = cljs.core.count(items);
var visible_items = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(visible_nb_items),items);
var map_like_QMARK_ = (function (){var G__77722 = type;
var G__77722__$1 = (((G__77722 instanceof cljs.core.Keyword))?G__77722.fqn:null);
switch (G__77722__$1) {
case "map":
case "object":
return true;

break;
default:
return false;

}
})();
var vec__77718 = nextjournal.viewer.coll_decoration(type);
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77718,(0),null);
var close = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77718,(1),null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"result-data-expanded":"result-data-collapsed")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((short_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(expanded,cljs.core.update,path,cljs.core.not);

var temp__5753__auto__ = new cljs.core.Keyword(null,"on-expand","on-expand",-525903108).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5753__auto__)){
var on_expand = temp__5753__auto__;
return requestAnimationFrame(on_expand);
} else {
return null;
}
})], null)),((((cljs.core.empty_QMARK_(items)) || (short_QMARK_)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.disclose","div.disclose",-1582817702),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?null:"collapsed")], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),(function (){var G__77724 = type;
var G__77724__$1 = (((G__77724 instanceof cljs.core.Keyword))?G__77724.fqn:null);
switch (G__77724__$1) {
case "map":
return "Map";

break;
case "object":
return "Object";

break;
case "array":
return "Array";

break;
case "set":
return "Set";

break;
case "list":
return "List";

break;
case "vector":
return "Vector";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77724__$1)].join('')));

}
})()], null),(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(map_like_QMARK_);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return truncated_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),"(",count,(cljs.core.truth_(truncated_QMARK_)?"+":null),")"], null):null)], null),((short_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),open], null)),((((cljs.core.empty_QMARK_(items)) || (short_QMARK_)))?null:cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"div.result-data-field","div.result-data-field",-311480386):new cljs.core.Keyword(null,"span","span",1394872991)),(cljs.core.truth_((function (){var or__4253__auto__ = expanded_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return map_like_QMARK_;
}
})())?(function (){var item__$1 = (cljs.core.truth_((function (){var or__4253__auto__ = map_like_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.set_QMARK_(coll);
}
})())?item:i);
var G__77727 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(map_like_QMARK_)?"cmt-atom":"cmt-number")], null),(cljs.core.truth_(map_like_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,i),item__$1], null):i),": "], null);
if(cljs.core.truth_(nextjournal.viewer.navigable_item_QMARK_(options,path,item__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.browsify_button,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nav","path","nav/path",-188053725).cljs$core$IFn$_invoke$arity$1(options),item__$1),options], null),G__77727);
} else {
return G__77727;
}
})():null),(function (){var item__$1 = ((cljs.core.map_QMARK_(coll))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,item):((cljs.core.object_QMARK_(coll))?nextjournal.viewer.goog$module$goog$object.get(coll,item):item
));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,i),item__$1], null);
})(),(((((count > cljs.core.deref(visible_nb_items))) || ((i < (count - (1))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),", "], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),(cljs.core.truth_(map_like_QMARK_)?cljs.core.keys(visible_items):visible_items)))),(((((!(short_QMARK_))) && ((count > cljs.core.deref(visible_nb_items)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.more_button,visible_nb_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),count], null)], null):null),((short_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),close], null))], null);
});
});
/**
 * Safe access to a value at key a js object.
 * 
 * Returns `'forbidden` if reading the property would result in a `SecurityError`.
 * https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
 */
nextjournal.viewer.value_of = (function nextjournal$viewer$value_of(obj,k){
try{var v = (function (){var obj77732 = obj;
if((!((obj77732 == null)))){
return (obj77732[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
v.constructor;

return v;
}catch (e77729){if((e77729 instanceof Error)){
var _ = e77729;
return new cljs.core.Symbol(null,"forbidden","forbidden",-338916619,null);
} else {
throw e77729;

}
}});
nextjournal.viewer.inspect_object = (function nextjournal$viewer$inspect_object(_inspect,_options,_obj){
var visible_nb_items = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((20));
return (function (inspect,p__77733,obj){
var map__77734 = p__77733;
var map__77734__$1 = cljs.core.__destructure_map(map__77734);
var options = map__77734__$1;
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77734__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77734__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expanded),path);
var parent = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(path));
var short_QMARK_ = ((cljs.core.seq(path)) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expanded),parent))));
var empty_QMARK_ = nextjournal.viewer.goog$module$goog$object.isEmpty(obj);
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var t = cljs.core.type(obj);
var items = cljs.core.js_keys(obj);
var count = cljs.core.count(items);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"result-data-expanded":"result-data-collapsed")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),((short_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(expanded,cljs.core.update,path,cljs.core.not);

var temp__5753__auto__ = new cljs.core.Keyword(null,"on-expand","on-expand",-525903108).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5753__auto__)){
var on_expand = temp__5753__auto__;
return requestAnimationFrame(on_expand);
} else {
return null;
}
})], null)),(cljs.core.truth_((function (){var or__4253__auto__ = empty_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return short_QMARK_;
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.disclose","div.disclose",-1582817702),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?null:"collapsed")], null)], null)),(cljs.core.truth_(t)?t.name:"Object")], null),((short_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227)," {"], null)),(cljs.core.truth_((function (){var or__4253__auto__ = empty_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return short_QMARK_;
}
})())?null:(function (){var iter__4652__auto__ = (function nextjournal$viewer$inspect_object_$_iter__77739(s__77740){
return (new cljs.core.LazySeq(null,(function (){
var s__77740__$1 = s__77740;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77740__$1);
if(temp__5753__auto__){
var s__77740__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77740__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__77740__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__77742 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__77741 = (0);
while(true){
if((i__77741 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__77741);
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(t);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return obj.hasOwnProperty(k);
}
})())){
var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
cljs.core.chunk_append(b__77742,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"div.result-data-field","div.result-data-field",-311480386):new cljs.core.Keyword(null,"span","span",1394872991)),((((cljs.core.not(expanded_QMARK_)) && (((0) < i))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),", "], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.cmt-atom","span.inspected-value.cmt-atom",817327266),k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-punctuation","span.cmt-punctuation",-1691691548),": "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inspect,cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,k),nextjournal.viewer.value_of(obj,k)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__77867 = (i__77741 + (1));
i__77741 = G__77867;
continue;
} else {
var G__77868 = (i__77741 + (1));
i__77741 = G__77868;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77742),nextjournal$viewer$inspect_object_$_iter__77739(cljs.core.chunk_rest(s__77740__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77742),null);
}
} else {
var k = cljs.core.first(s__77740__$2);
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(t);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return obj.hasOwnProperty(k);
}
})())){
var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"div.result-data-field","div.result-data-field",-311480386):new cljs.core.Keyword(null,"span","span",1394872991)),((((cljs.core.not(expanded_QMARK_)) && (((0) < i))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),", "], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.cmt-atom","span.inspected-value.cmt-atom",817327266),k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-punctuation","span.cmt-punctuation",-1691691548),": "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inspect,cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,k),nextjournal.viewer.value_of(obj,k)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),nextjournal$viewer$inspect_object_$_iter__77739(cljs.core.rest(s__77740__$2)));
} else {
var G__77871 = cljs.core.rest(s__77740__$2);
s__77740__$1 = G__77871;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(visible_nb_items),items));
})()),((((cljs.core.not((function (){var or__4253__auto__ = empty_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return short_QMARK_;
}
})())) && ((count > cljs.core.deref(visible_nb_items)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.more_button,visible_nb_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),count], null)], null):null),((short_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),"}"], null))], null);
});
});
nextjournal.viewer.meta_QMARK_ = (function nextjournal$viewer$meta_QMARK_(x){
return cljs.core.contains_QMARK_(x,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
});
nextjournal.viewer.meta = (function nextjournal$viewer$meta(data){
if(nextjournal.viewer.meta_QMARK_(data)){
return data;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(data),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (){var G__77754 = data;
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data))){
return cljs.core.with_meta(G__77754,cljs.core.PersistentArrayMap.EMPTY);
} else {
return G__77754;
}
})());
}
});
nextjournal.viewer.with_meta = (function nextjournal$viewer$with_meta(data,m){
if(nextjournal.viewer.meta_QMARK_(data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(data));
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data))){
return cljs.core.with_meta(data,m);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),data);

}
}
});
nextjournal.viewer.vary_meta = (function nextjournal$viewer$vary_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___77872 = arguments.length;
var i__4865__auto___77873 = (0);
while(true){
if((i__4865__auto___77873 < len__4864__auto___77872)){
args__4870__auto__.push((arguments[i__4865__auto___77873]));

var G__77874 = (i__4865__auto___77873 + (1));
i__4865__auto___77873 = G__77874;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return nextjournal.viewer.vary_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(nextjournal.viewer.vary_meta.cljs$core$IFn$_invoke$arity$variadic = (function (data,f,args){
return nextjournal.viewer.with_meta(data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,nextjournal.viewer.meta(data),args));
}));

(nextjournal.viewer.vary_meta.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.viewer.vary_meta.cljs$lang$applyTo = (function (seq77757){
var G__77758 = cljs.core.first(seq77757);
var seq77757__$1 = cljs.core.next(seq77757);
var G__77759 = cljs.core.first(seq77757__$1);
var seq77757__$2 = cljs.core.next(seq77757__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77758,G__77759,seq77757__$2);
}));

/**
 * The given viewer will be used to display data
 */
nextjournal.viewer.with_viewer = (function nextjournal$viewer$with_viewer(data,viewer){
return nextjournal.viewer.vary_meta.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),viewer], 0));
});
/**
 * Binds viewers to types, eg {:boolean view-fn}
 */
nextjournal.viewer.with_viewers = (function nextjournal$viewer$with_viewers(data,viewers){
return nextjournal.viewer.vary_meta.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),viewers], 0));
});
/**
 * Like `with-viewer` but takes viewer as 1st argument
 */
nextjournal.viewer.view_as = (function nextjournal$viewer$view_as(viewer,data){
return nextjournal.viewer.with_viewer(data,viewer);
});
nextjournal.viewer.html = (function nextjournal$viewer$html(v){
return nextjournal.viewer.with_viewer(v,((typeof v === 'string')?new cljs.core.Keyword(null,"html","html",-998796897):new cljs.core.Keyword(null,"hiccup","hiccup",1218876238)));
});
nextjournal.viewer._BANG_viewers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"latex","latex",-1820161144),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"plotly","plotly",817625458),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"mathjax","mathjax",-1009833386),new cljs.core.Keyword(null,"reagent","reagent",2131627322),new cljs.core.Keyword(null,"flex-col","flex-col",1900872603),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"html","html",-998796897)],[nextjournal.viewer.markdown.viewer,(function (v){
if(cljs.core.truth_((function (){var obj77770 = v;
if((!((obj77770 == null)))){
return (obj77770["parentNode"]);
} else {
return undefined;
}
})())){
return "DOM Element";
} else {
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"reagent","reagent",2131627322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__77766_SHARP_){
if(cljs.core.truth_(p1__77766_SHARP_)){
var temp__5753__auto___77878 = p1__77766_SHARP_.firstChild;
if(cljs.core.truth_(temp__5753__auto___77878)){
var childElement_77879 = temp__5753__auto___77878;
p1__77766_SHARP_.removeChild(childElement_77879);
} else {
}

return p1__77766_SHARP_.appendChild(v);
} else {
return null;
}
})], null)], null));
}
}),(function (s){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"html","html",-998796897),nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$1(s));
}),(function (p1__77765_SHARP_){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(p1__77765_SHARP_);
}),nextjournal.viewer.plotly.viewer,nextjournal.viewer.code.viewer,nextjournal.viewer.mathjax.viewer,(function (p1__77767_SHARP_){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var G__77771 = p1__77767_SHARP_;
if(cljs.core.fn_QMARK_(p1__77767_SHARP_)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__77771],null));
} else {
return G__77771;
}
})());
}),(function (xs){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,x], null);
})),xs));
}),nextjournal.viewer.vega_lite.viewer,(function (html_str){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),html_str], null)], null)], null));
})]));
/**
 * Registers a viewer function under a given name.
 */
nextjournal.viewer.register_viewer_BANG_ = (function nextjournal$viewer$register_viewer_BANG_(name,viewer){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.viewer._BANG_viewers,cljs.core.assoc,name,viewer);
});
/**
 * Registers a viewers map.
 */
nextjournal.viewer.register_viewers_BANG_ = (function nextjournal$viewer$register_viewers_BANG_(viewers){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nextjournal.viewer._BANG_viewers,cljs.core.merge,viewers);
});
nextjournal.viewer._STAR_eval_form_STAR_ = null;
nextjournal.viewer.render_with_viewer = (function nextjournal$viewer$render_with_viewer(options,viewer,value){
var fexpr__77778 = (((viewer instanceof cljs.core.Keyword))?(function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),viewer], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var fexpr__77779 = cljs.core.deref(nextjournal.viewer._BANG_viewers);
return (fexpr__77779.cljs$core$IFn$_invoke$arity$1 ? fexpr__77779.cljs$core$IFn$_invoke$arity$1(viewer) : fexpr__77779.call(null,viewer));
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"viewer-not-found","viewer-not-found",2084437371),viewer], 0));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return nextjournal.viewer.inspect;
}
}
}
})():((cljs.core.fn_QMARK_(viewer))?viewer:((cljs.core.list_QMARK_(viewer))?((cljs.core.fn_QMARK_(nextjournal.viewer._STAR_eval_form_STAR_))?nextjournal.viewer._STAR_eval_form_STAR_.call(null,viewer):(function(){throw (new Error("Viewer is a list but `*eval-form*` is not bound to a function."))})()):(function(){throw (new Error(["Viewer is not a keyword or function or list: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(viewer)].join('')))})()
)));
return (fexpr__77778.cljs$core$IFn$_invoke$arity$2 ? fexpr__77778.cljs$core$IFn$_invoke$arity$2(value,options) : fexpr__77778.call(null,value,options));
});
nextjournal.viewer.inspect = (function nextjournal$viewer$inspect(var_args){
var G__77785 = arguments.length;
switch (G__77785) {
case 1:
return nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('nextjournal.viewer.inspect', nextjournal.viewer.inspect);

(nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$1 = (function (data){
return nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,data);
}));

(nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$2 = (function (options,data){
var map__77788 = (function (){var G__77791 = options;
if(cljs.core.not(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__77791,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded","expanded",-3020742),reagent.core.state_atom(reagent.core.current_component())], null)], 0));
} else {
return G__77791;
}
})();
var map__77788__$1 = cljs.core.__destructure_map(map__77788);
var options__$1 = map__77788__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77788__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77788__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var map__77789 = nextjournal.viewer.meta(data);
var map__77789__$1 = cljs.core.__destructure_map(map__77789);
var value_meta = map__77789__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77789__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77789__$1,new cljs.core.Keyword("nextjournal","tag","nextjournal/tag",1515661557));
var options__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(options__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),cljs.core.merge,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841).cljs$core$IFn$_invoke$arity$1(value_meta));
var type_key = (cljs.core.truth_(tag)?nextjournal.viewer.edn_type(tag,value):nextjournal.viewer.value_type(value));
var viewer_key = new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$2(value_meta,type_key);
var viewer = (function (){var or__4253__auto__ = ((((cljs.core.fn_QMARK_(viewer_key)) || (cljs.core.list_QMARK_(viewer_key))))?viewer_key:null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),viewer_key], null));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var fexpr__77794 = cljs.core.deref(nextjournal.viewer._BANG_viewers);
return (fexpr__77794.cljs$core$IFn$_invoke$arity$1 ? fexpr__77794.cljs$core$IFn$_invoke$arity$1(viewer_key) : fexpr__77794.call(null,viewer_key));
}
}
})();
if(cljs.core.truth_(module$node_modules$react$index.isValidElement(data))){
return data;
} else {
if(cljs.core.truth_(viewer)){
return nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$2(options__$2,nextjournal.viewer.render_with_viewer(options__$2,viewer,value));
} else {
var G__77797 = type_key;
var G__77797__$1 = (((G__77797 instanceof cljs.core.Keyword))?G__77797.fqn:null);
switch (G__77797__$1) {
case "edn-var":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(value))," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,cljs.core.second(value)], null)], null);

break;
case "edn-atom":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),new cljs.core.Symbol(null,"clojure.lang.Atom","clojure.lang.Atom",661742144,null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,(2)))], null)], null);

break;
case "edn-object":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," "], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),cljs.core.first(value)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"0x",cljs.core.second(value).toString((16))], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(2))], null),"]"], null)], null);

break;
case "edn-empty":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#"], null)], null);

break;
case "edn-unknown-tag":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,(function (){var m = cljs.core.select_keys(value_meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","truncated?","nextjournal/truncated?",-980673354)], null));
var G__77800 = value;
if(cljs.core.seq(m)){
return nextjournal.viewer.vary_meta.cljs$core$IFn$_invoke$arity$variadic(G__77800,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
} else {
return G__77800;
}
})()], null)], null);

break;
case "var":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),"#'",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,data.sym], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,cljs.core.deref(data)], null)], null);

break;
case "derefable":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(data)], 0))," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,cljs.core.deref(data)], null)], null);

break;
case "map":
case "array":
case "set":
case "list":
case "vector":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect_coll,type_key,options__$2,data], null);

break;
case "transit-tagged-value":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#",data.tag," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,data.rep], null)], null);

break;
case "fn":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"\u0192"], null),"()"], null);

break;
case "uuid":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#uuid "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null)], null);

break;
case "string":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-string.inspected-value","span.cmt-string.inspected-value",-610812505),"\"",data,"\""], null);

break;
case "number":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-number.inspected-value","span.cmt-number.inspected-value",1512437969),(cljs.core.truth_(Number.isNaN(data))?"NaN":cljs.core.str.cljs$core$IFn$_invoke$arity$1(data))], null);

break;
case "keyword":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-atom.inspected-value","span.cmt-atom.inspected-value",95454221),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null);

break;
case "symbol":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-keyword.inspected-value","span.cmt-keyword.inspected-value",-1622971182),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null);

break;
case "nil":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-atom.inspected-value","span.cmt-atom.inspected-value",95454221),"nil"], null);

break;
case "boolean":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-bool.inspected-value","span.cmt-bool.inspected-value",-117987200),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null);

break;
case "inst":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#inst "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,data.toISOString()], null)], null);

break;
case "object":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect_object,nextjournal.viewer.inspect,options__$2,data], null);

break;
case "untyped":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-invalid.untyped-value.inspected-value","span.cmt-invalid.untyped-value.inspected-value",-47539899),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(data)),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),"]"].join('')], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77797__$1)].join('')));

}

}
}
}));

(nextjournal.viewer.inspect.cljs$lang$maxFixedArity = 2);

/**
 * Takes a data value with possibly metadata on it and returns a transducer
 *   that will calls `inspect` on every collection element. Use this in custom
 *   viewers for e.g. vectors to ensure custom viewers are passed down to the
 *   children.
 */
nextjournal.viewer.inspect_xf = (function nextjournal$viewer$inspect_xf(x){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (){var G__77809 = nextjournal.viewer.inspect;
if(cljs.core.seq(new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841).cljs$core$IFn$_invoke$arity$1(nextjournal.viewer.meta(x)))){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(G__77809,nextjournal.viewer.meta(x));
} else {
return G__77809;
}
})());
});

//# sourceMappingURL=nextjournal.viewer.js.map
