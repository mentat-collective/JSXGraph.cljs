import "./cljs_env.js";
goog.provide('rewrite_clj.node.keyword');
rewrite_clj.node.keyword.choose_qualifier = (function rewrite_clj$node$keyword$choose_qualifier(map_qualifier,kw_qualifier){
if(cljs.core.not((function (){var and__4251__auto__ = map_qualifier;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(kw_qualifier));
} else {
return and__4251__auto__;
}
})())){
var or__4253__auto__ = kw_qualifier;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return map_qualifier;
}
} else {
return null;
}
});
rewrite_clj.node.keyword.kw_qualifier = (function rewrite_clj$node$keyword$kw_qualifier(k,auto_resolved_QMARK_){
if(cljs.core.truth_((function (){var or__4253__auto__ = auto_resolved_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.namespace(k);
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),auto_resolved_QMARK_,new cljs.core.Keyword(null,"prefix","prefix",-265908465),cljs.core.namespace(k)], null);
} else {
return null;
}
});
rewrite_clj.node.keyword.keyword_sexpr = (function rewrite_clj$node$keyword$keyword_sexpr(kw,kw_auto_resolved_QMARK_,map_qualifier,p__68738){
var map__68739 = p__68738;
var map__68739__$1 = cljs.core.__destructure_map(map__68739);
var auto_resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68739__$1,new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983));
var q = rewrite_clj.node.keyword.choose_qualifier(map_qualifier,rewrite_clj.node.keyword.kw_qualifier(kw,kw_auto_resolved_QMARK_));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var G__68740 = (cljs.core.truth_(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351).cljs$core$IFn$_invoke$arity$1(q))?(function (){var G__68742 = (function (){var or__4253__auto__ = (function (){var G__68743 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(q);
if((G__68743 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__68743);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"current","current",-1088038603);
}
})();
var fexpr__68741 = (function (){var or__4253__auto__ = auto_resolve;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return rewrite_clj.node.protocols.default_auto_resolve;
}
})();
return (fexpr__68741.cljs$core$IFn$_invoke$arity$1 ? fexpr__68741.cljs$core$IFn$_invoke$arity$1(G__68742) : fexpr__68741.call(null,G__68742));
})():new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(q));
if((G__68740 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68740);
}
})(),cljs.core.name(kw));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.protocols.MapQualifiable}
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
rewrite_clj.node.keyword.KeywordNode = (function (k,auto_resolved_QMARK_,map_qualifier,__meta,__extmap,__hash){
this.k = k;
this.auto_resolved_QMARK_ = auto_resolved_QMARK_;
this.map_qualifier = map_qualifier;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.keyword.KeywordNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k68745,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__68750 = k68745;
var G__68750__$1 = (((G__68750 instanceof cljs.core.Keyword))?G__68750.fqn:null);
switch (G__68750__$1) {
case "k":
return self__.k;

break;
case "auto-resolved?":
return self__.auto_resolved_QMARK_;

break;
case "map-qualifier":
return self__.map_qualifier;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68745,else__4505__auto__);

}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__68751){
var vec__68752 = p__68751;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68752,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68752,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$MapQualifiable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$MapQualifiable$map_context_apply$arity$2 = (function (node,map_qualifier__$1){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),map_qualifier__$1);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$MapQualifiable$map_context_clear$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),null);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-clj.node.keyword.KeywordNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),self__.auto_resolved_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),self__.map_qualifier],null))], null),self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68744){
var self__ = this;
var G__68744__$1 = this;
return (new cljs.core.RecordIter((0),G__68744__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.auto_resolved_QMARK_,self__.map_qualifier,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1681863292 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68746,other68747){
var self__ = this;
var this68746__$1 = this;
return (((!((other68747 == null)))) && ((((this68746__$1.constructor === other68747.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68746__$1.k,other68747.k)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68746__$1.auto_resolved_QMARK_,other68747.auto_resolved_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68746__$1.map_qualifier,other68747.map_qualifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68746__$1.__extmap,other68747.__extmap)))))))))));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.keyword.keyword_sexpr(self__.k,self__.auto_resolved_QMARK_,self__.map_qualifier,opts);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
var c = (((cljs.core.name(self__.k)).length) + (1));
if(cljs.core.truth_(self__.auto_resolved_QMARK_)){
return (c + (1));
} else {
var temp__5751__auto__ = cljs.core.namespace(self__.k);
if(cljs.core.truth_(temp__5751__auto__)){
var nspace = temp__5751__auto__;
return (((1) + c) + ((nspace).length));
} else {
return c;
}
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return [(cljs.core.truth_(self__.auto_resolved_QMARK_)?":":null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.k], 0))].join('');
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),null,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),null,new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.auto_resolved_QMARK_,self__.map_qualifier,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k68745){
var self__ = this;
var this__4509__auto____$1 = this;
var G__68765 = k68745;
var G__68765__$1 = (((G__68765 instanceof cljs.core.Keyword))?G__68765.fqn:null);
switch (G__68765__$1) {
case "k":
case "auto-resolved?":
case "map-qualifier":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68745);

}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__68744){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__68766 = cljs.core.keyword_identical_QMARK_;
var expr__68767 = k__4511__auto__;
if(cljs.core.truth_((pred__68766.cljs$core$IFn$_invoke$arity$2 ? pred__68766.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__68767) : pred__68766.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__68767)))){
return (new rewrite_clj.node.keyword.KeywordNode(G__68744,self__.auto_resolved_QMARK_,self__.map_qualifier,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68766.cljs$core$IFn$_invoke$arity$2 ? pred__68766.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),expr__68767) : pred__68766.call(null,new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),expr__68767)))){
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,G__68744,self__.map_qualifier,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68766.cljs$core$IFn$_invoke$arity$2 ? pred__68766.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),expr__68767) : pred__68766.call(null,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),expr__68767)))){
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.auto_resolved_QMARK_,G__68744,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.auto_resolved_QMARK_,self__.map_qualifier,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__68744),null));
}
}
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),self__.auto_resolved_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),self__.map_qualifier,null))], null),self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__68744){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.auto_resolved_QMARK_,self__.map_qualifier,G__68744,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_clj.node.keyword.KeywordNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"auto-resolved?","auto-resolved?",-303944824,null),new cljs.core.Symbol(null,"map-qualifier","map-qualifier",392413807,null)], null);
}));

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$type = true);

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.keyword/KeywordNode",null,(1),null));
}));

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-clj.node.keyword/KeywordNode");
}));

/**
 * Positional factory function for rewrite-clj.node.keyword/KeywordNode.
 */
rewrite_clj.node.keyword.__GT_KeywordNode = (function rewrite_clj$node$keyword$__GT_KeywordNode(k,auto_resolved_QMARK_,map_qualifier){
return (new rewrite_clj.node.keyword.KeywordNode(k,auto_resolved_QMARK_,map_qualifier,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.keyword/KeywordNode, taking a map of keywords to field values.
 */
rewrite_clj.node.keyword.map__GT_KeywordNode = (function rewrite_clj$node$keyword$map__GT_KeywordNode(G__68749){
var extmap__4542__auto__ = (function (){var G__68769 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68749,new cljs.core.Keyword(null,"k","k",-2146297393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720)], 0));
if(cljs.core.record_QMARK_(G__68749)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68769);
} else {
return G__68769;
}
})();
return (new rewrite_clj.node.keyword.KeywordNode(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__68749),new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351).cljs$core$IFn$_invoke$arity$1(G__68749),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720).cljs$core$IFn$_invoke$arity$1(G__68749),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.keyword.KeywordNode);
/**
 * Returns true if `n` is a node representing a keyword.
 */
rewrite_clj.node.keyword.keyword_node_QMARK_ = (function rewrite_clj$node$keyword$keyword_node_QMARK_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),rewrite_clj.node.protocols.node_type(n));
});
/**
 * Create a node representing a keyword `k`.
 * 
 * Optionally include `auto-resolved?`, which defaults to `false`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * ;; unqualified keyword
 * (-> (n/keyword-node :kw)
 *     n/string)
 * ;; => ":kw"
 * 
 * ;; qualified keyword
 * (-> (n/keyword-node :my-prefix/kw)
 *     n/string)
 * ;; => ":my-prefix/kw"
 * 
 * ;; keyword auto-resolved to current ns
 * (-> (n/keyword-node :kw true)
 *     n/string)
 * ;; => "::kw"
 * 
 * ;; keyword auto-resolved to a namespace with given alias
 * (-> (n/keyword-node :ns-alias/kw true)
 *     n/string)
 * ;; => "::ns-alias/kw"
 * ```
 */
rewrite_clj.node.keyword.keyword_node = (function rewrite_clj$node$keyword$keyword_node(var_args){
var G__68775 = arguments.length;
switch (G__68775) {
case 2:
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$2 = (function (k,auto_resolved_QMARK_){
if((k instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? k)"));
}

return rewrite_clj.node.keyword.__GT_KeywordNode(k,auto_resolved_QMARK_,null);
}));

(rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$1 = (function (k){
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$2(k,false);
}));

(rewrite_clj.node.keyword.keyword_node.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.node.keyword.js.map
