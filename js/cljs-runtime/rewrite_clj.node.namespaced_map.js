import "./cljs_env.js";
goog.provide('rewrite_clj.node.namespaced_map');

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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.namespaced_map.MapQualifierNode = (function (auto_resolved_QMARK_,prefix,__meta,__extmap,__hash){
this.auto_resolved_QMARK_ = auto_resolved_QMARK_;
this.prefix = prefix;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k68780,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__68786 = k68780;
var G__68786__$1 = (((G__68786 instanceof cljs.core.Keyword))?G__68786.fqn:null);
switch (G__68786__$1) {
case "auto-resolved?":
return self__.auto_resolved_QMARK_;

break;
case "prefix":
return self__.prefix;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68780,else__4505__auto__);

}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__68787){
var vec__68788 = p__68787;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68788,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68788,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-clj.node.namespaced-map.MapQualifierNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),self__.auto_resolved_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null))], null),self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68779){
var self__ = this;
var G__68779__$1 = this;
return (new cljs.core.RecordIter((0),G__68779__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(self__.auto_resolved_QMARK_,self__.prefix,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-426705749 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68781,other68782){
var self__ = this;
var this68781__$1 = this;
return (((!((other68782 == null)))) && ((((this68781__$1.constructor === other68782.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68781__$1.auto_resolved_QMARK_,other68782.auto_resolved_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68781__$1.prefix,other68782.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68781__$1.__extmap,other68782.__extmap)))))))));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
if(cljs.core.truth_(self__.auto_resolved_QMARK_)){
var G__68803 = (cljs.core.truth_(self__.prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(self__.prefix):new cljs.core.Keyword(null,"current","current",-1088038603));
var fexpr__68802 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return rewrite_clj.node.protocols.default_auto_resolve;
}
})();
return (fexpr__68802.cljs$core$IFn$_invoke$arity$1 ? fexpr__68802.cljs$core$IFn$_invoke$arity$1(G__68803) : fexpr__68802.call(null,G__68803));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(self__.prefix);
}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (((1) + (cljs.core.truth_(self__.auto_resolved_QMARK_)?(1):(0))) + cljs.core.count(self__.prefix));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return [":",(cljs.core.truth_(self__.auto_resolved_QMARK_)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix)].join('');
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(self__.auto_resolved_QMARK_,self__.prefix,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k68780){
var self__ = this;
var this__4509__auto____$1 = this;
var G__68813 = k68780;
var G__68813__$1 = (((G__68813 instanceof cljs.core.Keyword))?G__68813.fqn:null);
switch (G__68813__$1) {
case "auto-resolved?":
case "prefix":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68780);

}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__68779){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__68818 = cljs.core.keyword_identical_QMARK_;
var expr__68819 = k__4511__auto__;
if(cljs.core.truth_((pred__68818.cljs$core$IFn$_invoke$arity$2 ? pred__68818.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),expr__68819) : pred__68818.call(null,new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),expr__68819)))){
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(G__68779,self__.prefix,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68818.cljs$core$IFn$_invoke$arity$2 ? pred__68818.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__68819) : pred__68818.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__68819)))){
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(self__.auto_resolved_QMARK_,G__68779,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(self__.auto_resolved_QMARK_,self__.prefix,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__68779),null));
}
}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),self__.auto_resolved_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null))], null),self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__68779){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(self__.auto_resolved_QMARK_,self__.prefix,G__68779,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auto-resolved?","auto-resolved?",-303944824,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null)], null);
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.cljs$lang$type = true);

(rewrite_clj.node.namespaced_map.MapQualifierNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.namespaced-map/MapQualifierNode",null,(1),null));
}));

(rewrite_clj.node.namespaced_map.MapQualifierNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-clj.node.namespaced-map/MapQualifierNode");
}));

/**
 * Positional factory function for rewrite-clj.node.namespaced-map/MapQualifierNode.
 */
rewrite_clj.node.namespaced_map.__GT_MapQualifierNode = (function rewrite_clj$node$namespaced_map$__GT_MapQualifierNode(auto_resolved_QMARK_,prefix){
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(auto_resolved_QMARK_,prefix,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.namespaced-map/MapQualifierNode, taking a map of keywords to field values.
 */
rewrite_clj.node.namespaced_map.map__GT_MapQualifierNode = (function rewrite_clj$node$namespaced_map$map__GT_MapQualifierNode(G__68783){
var extmap__4542__auto__ = (function (){var G__68832 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68783,new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465)], 0));
if(cljs.core.record_QMARK_(G__68783)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68832);
} else {
return G__68832;
}
})();
return (new rewrite_clj.node.namespaced_map.MapQualifierNode(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351).cljs$core$IFn$_invoke$arity$1(G__68783),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__68783),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * A map node's children are a list of nodes that can contain non-sexpr-able elements (ex. whitespace).
 * 
 *   Returns `children` with `f` applied sexpressable children.
 * 
 *   `f` is called with
 *   - `n` - node
 *   - `is-map-key?` true if the node is in keyword position
 *   and should return `n` or a new version of `n`.
 */
rewrite_clj.node.namespaced_map.edit_map_children = (function rewrite_clj$node$namespaced_map$edit_map_children(children,f){
var r = children;
var last_key = null;
var new_children = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5751__auto__ = cljs.core.first(r);
if(cljs.core.truth_(temp__5751__auto__)){
var n = temp__5751__auto__;
if(cljs.core.truth_(rewrite_clj.node.protocols.printable_only_QMARK_(n))){
var G__68921 = cljs.core.rest(r);
var G__68922 = last_key;
var G__68923 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_children,n);
r = G__68921;
last_key = G__68922;
new_children = G__68923;
continue;
} else {
if(cljs.core.truth_(last_key)){
var G__68924 = cljs.core.rest(r);
var G__68925 = null;
var G__68926 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_children,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(n,false) : f.call(null,n,false)));
r = G__68924;
last_key = G__68925;
new_children = G__68926;
continue;
} else {
var G__68927 = cljs.core.rest(r);
var G__68928 = n;
var G__68929 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_children,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(n,true) : f.call(null,n,true)));
r = G__68927;
last_key = G__68928;
new_children = G__68929;
continue;
}
}
} else {
return new_children;
}
break;
}
});
/**
 * Apply the context of the qualified map to the keyword keys in the map.
 * 
 *   Strips context from keyword-nodes not in keyword position and adds context to keyword nodes in keyword position.
 */
rewrite_clj.node.namespaced_map.apply_context_to_map = (function rewrite_clj$node$namespaced_map$apply_context_to_map(m_node,q_node){
return rewrite_clj.node.protocols.replace_children(m_node,rewrite_clj.node.namespaced_map.edit_map_children(rewrite_clj.node.protocols.children(m_node),(function (n,is_map_key_QMARK_){
if((((!((n == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === n.rewrite_clj$node$protocols$MapQualifiable$))))?true:(((!n.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(rewrite_clj.node.protocols.MapQualifiable,n):false)):cljs.core.native_satisfies_QMARK_(rewrite_clj.node.protocols.MapQualifiable,n))){
if(cljs.core.truth_(is_map_key_QMARK_)){
return rewrite_clj.node.protocols.map_context_apply(n,q_node);
} else {
return rewrite_clj.node.protocols.map_context_clear(n);
}
} else {
return n;
}
})));
});
rewrite_clj.node.namespaced_map.apply_context = (function rewrite_clj$node$namespaced_map$apply_context(children){
var q_node = cljs.core.first(children);
var m_node = cljs.core.last(children);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.node.namespaced_map.apply_context_to_map(m_node,q_node)], null));
});
/**
 * Namespaced map qualifier context is automatically applied to keyword children of contained map automatically on:
 *   - [[node/namespaced-map-node]] creation (i.e. at parse time)
 *   - [[node/replace-children]]
 * 
 *   If you make changes outside these techniques, call this function to reapply the qualifier context.
 * 
 *   This is only necessary if you need `sexpr` on map keywords to reflect the namespaced map qualifier.
 * 
 *   Returns `n` if not a namespaced map node.
 */
rewrite_clj.node.namespaced_map.reapply_namespaced_map_context = (function rewrite_clj$node$namespaced_map$reapply_namespaced_map_context(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),rewrite_clj.node.protocols.tag(n))){
return rewrite_clj.node.protocols.replace_children(n,rewrite_clj.node.namespaced_map.apply_context(rewrite_clj.node.protocols.children(n)));
} else {
return n;
}
});
/**
 * Assumes that appropriate qualifier context has been applied to contained map.
 */
rewrite_clj.node.namespaced_map.namespaced_map_sexpr = (function rewrite_clj$node$namespaced_map$namespaced_map_sexpr(children,opts){
return rewrite_clj.node.protocols.sexpr.cljs$core$IFn$_invoke$arity$2(cljs.core.last(children),opts);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.namespaced_map.NamespacedMapNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k68869,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__68874 = k68869;
var G__68874__$1 = (((G__68874 instanceof cljs.core.Keyword))?G__68874.fqn:null);
switch (G__68874__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68869,else__4505__auto__);

}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__68875){
var vec__68876 = p__68875;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68876,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68876,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-clj.node.namespaced-map.NamespacedMapNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68868){
var self__ = this;
var G__68868__$1 = this;
return (new cljs.core.RecordIter((0),G__68868__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (679326169 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68870,other68871){
var self__ = this;
var this68870__$1 = this;
return (((!((other68871 == null)))) && ((((this68870__$1.constructor === other68871.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68870__$1.children,other68871.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68870__$1.__extmap,other68871.__extmap)))))));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.namespaced_map.namespaced_map_sexpr(self__.children,opts);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ((1) + rewrite_clj.node.protocols.sum_lengths(self__.children));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (node,children_SINGLEQUOTE_){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,new cljs.core.Keyword(null,"children","children",-940561982),rewrite_clj.node.namespaced_map.apply_context(children_SINGLEQUOTE_));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ((2) - (1));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k68869){
var self__ = this;
var this__4509__auto____$1 = this;
var G__68881 = k68869;
var G__68881__$1 = (((G__68881 instanceof cljs.core.Keyword))?G__68881.fqn:null);
switch (G__68881__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68869);

}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__68868){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__68882 = cljs.core.keyword_identical_QMARK_;
var expr__68883 = k__4511__auto__;
if(cljs.core.truth_((pred__68882.cljs$core$IFn$_invoke$arity$2 ? pred__68882.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__68883) : pred__68882.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__68883)))){
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(G__68868,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__68868),null));
}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__68868){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(self__.children,G__68868,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.cljs$lang$type = true);

(rewrite_clj.node.namespaced_map.NamespacedMapNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.namespaced-map/NamespacedMapNode",null,(1),null));
}));

(rewrite_clj.node.namespaced_map.NamespacedMapNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-clj.node.namespaced-map/NamespacedMapNode");
}));

/**
 * Positional factory function for rewrite-clj.node.namespaced-map/NamespacedMapNode.
 */
rewrite_clj.node.namespaced_map.__GT_NamespacedMapNode = (function rewrite_clj$node$namespaced_map$__GT_NamespacedMapNode(children){
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.namespaced-map/NamespacedMapNode, taking a map of keywords to field values.
 */
rewrite_clj.node.namespaced_map.map__GT_NamespacedMapNode = (function rewrite_clj$node$namespaced_map$map__GT_NamespacedMapNode(G__68872){
var extmap__4542__auto__ = (function (){var G__68885 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__68872,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__68872)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68885);
} else {
return G__68885;
}
})();
return (new rewrite_clj.node.namespaced_map.NamespacedMapNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__68872),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.namespaced_map.MapQualifierNode);
rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.namespaced_map.NamespacedMapNode);
/**
 * Create a map qualifier node.
 * The map qualifier node is a child node of [[namespaced-map-node]].
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * ;; qualified
 * (-> (n/map-qualifier-node false "my-prefix")
 *     n/string)
 * ;; => ":my-prefix"
 * 
 * ;; auto-resolved to current ns
 * (-> (n/map-qualifier-node true nil)
 *     n/string)
 * ;; => "::"
 * 
 * ;; auto-resolve to namespace with alias
 * (-> (n/map-qualifier-node true "my-ns-alias")
 *     n/string)
 * ;; => "::my-ns-alias"
 * ```
 */
rewrite_clj.node.namespaced_map.map_qualifier_node = (function rewrite_clj$node$namespaced_map$map_qualifier_node(auto_resolved_QMARK_,prefix){
return rewrite_clj.node.namespaced_map.__GT_MapQualifierNode(auto_resolved_QMARK_,prefix);
});
/**
 * Create a namespaced map node with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/namespaced-map-node [(n/map-qualifier-node true "my-ns-alias")
 *                             (n/spaces 1)
 *                             (n/map-node [(n/keyword-node :a)
 *                                          (n/spaces 1)
 *                                          (n/token-node 1)])])
 *     n/string)
 * ;; => "#::my-ns-alias {:a 1}"
 * ```
 * 
 * Map qualifier context is automatically applied to map keys for sexpr support.
 * 
 * See also [[map-qualifier-node]] and [[map-node]].
 */
rewrite_clj.node.namespaced_map.namespaced_map_node = (function rewrite_clj$node$namespaced_map$namespaced_map_node(children){
return rewrite_clj.node.namespaced_map.__GT_NamespacedMapNode(rewrite_clj.node.namespaced_map.apply_context(children));
});

//# sourceMappingURL=rewrite_clj.node.namespaced_map.js.map
