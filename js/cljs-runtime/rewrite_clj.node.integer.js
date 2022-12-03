import "./cljs_env.js";
goog.provide('rewrite_clj.node.integer');

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
rewrite_clj.node.integer.IntNode = (function (value,base,__meta,__extmap,__hash){
this.value = value;
this.base = base;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.integer.IntNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k68638,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__68650 = k68638;
var G__68650__$1 = (((G__68650 instanceof cljs.core.Keyword))?G__68650.fqn:null);
switch (G__68650__$1) {
case "value":
return self__.value;

break;
case "base":
return self__.base;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68638,else__4505__auto__);

}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__68655){
var vec__68656 = p__68655;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68656,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68656,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-clj.node.integer.IntNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base","base",185279322),self__.base],null))], null),self__.__extmap));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68637){
var self__ = this;
var G__68637__$1 = this;
return (new cljs.core.RecordIter((0),G__68637__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"base","base",185279322)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-2088146928 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68639,other68640){
var self__ = this;
var this68639__$1 = this;
return (((!((other68640 == null)))) && ((((this68639__$1.constructor === other68640.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68639__$1.value,other68640.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68639__$1.base,other68640.base)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68639__$1.__extmap,other68640.__extmap)))))))));
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"int","int",-1741416922);
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return self__.value;
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.count(node__$1.rewrite_clj$node$protocols$Node$string$arity$1(null));
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
var sign = (((self__.value < (0)))?"-":null);
var abs_value = (function (){var G__68725 = self__.value;
if((self__.value < (0))){
return (- G__68725);
} else {
return G__68725;
}
})();
var s = rewrite_clj.interop.int__GT_str(abs_value,self__.base);
var prefix = (function (){var G__68726 = cljs.core.long$(self__.base);
switch (G__68726) {
case (8):
return "0";

break;
case (10):
return "";

break;
case (16):
return "0x";

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.base),"r"].join('');

}
})();
return [sign,cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"base","base",185279322),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k68638){
var self__ = this;
var this__4509__auto____$1 = this;
var G__68730 = k68638;
var G__68730__$1 = (((G__68730 instanceof cljs.core.Keyword))?G__68730.fqn:null);
switch (G__68730__$1) {
case "value":
case "base":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68638);

}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__68637){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__68734 = cljs.core.keyword_identical_QMARK_;
var expr__68735 = k__4511__auto__;
if(cljs.core.truth_((pred__68734.cljs$core$IFn$_invoke$arity$2 ? pred__68734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__68735) : pred__68734.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__68735)))){
return (new rewrite_clj.node.integer.IntNode(G__68637,self__.base,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68734.cljs$core$IFn$_invoke$arity$2 ? pred__68734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base","base",185279322),expr__68735) : pred__68734.call(null,new cljs.core.Keyword(null,"base","base",185279322),expr__68735)))){
return (new rewrite_clj.node.integer.IntNode(self__.value,G__68637,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__68637),null));
}
}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base","base",185279322),self__.base,null))], null),self__.__extmap));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__68637){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,G__68637,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_clj.node.integer.IntNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"base","base",1825810849,null)], null);
}));

(rewrite_clj.node.integer.IntNode.cljs$lang$type = true);

(rewrite_clj.node.integer.IntNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.integer/IntNode",null,(1),null));
}));

(rewrite_clj.node.integer.IntNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-clj.node.integer/IntNode");
}));

/**
 * Positional factory function for rewrite-clj.node.integer/IntNode.
 */
rewrite_clj.node.integer.__GT_IntNode = (function rewrite_clj$node$integer$__GT_IntNode(value,base){
return (new rewrite_clj.node.integer.IntNode(value,base,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.integer/IntNode, taking a map of keywords to field values.
 */
rewrite_clj.node.integer.map__GT_IntNode = (function rewrite_clj$node$integer$map__GT_IntNode(G__68646){
var extmap__4542__auto__ = (function (){var G__68748 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68646,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base","base",185279322)], 0));
if(cljs.core.record_QMARK_(G__68646)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68748);
} else {
return G__68748;
}
})();
return (new rewrite_clj.node.integer.IntNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__68646),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(G__68646),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.integer.IntNode);
/**
 * Create node representing an integer `value` in `base`.
 * 
 *   `base` defaults to 10.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/integer-node 42)
 *     n/string)
 * ;; => "42"
 * 
 * (-> (n/integer-node 31 2)
 *     n/string)
 * ;; => "2r11111"
 * ```
 * 
 * Note: the parser does not currently parse to integer-nodes, but they fully supported for output.
 */
rewrite_clj.node.integer.integer_node = (function rewrite_clj$node$integer$integer_node(var_args){
var G__68760 = arguments.length;
switch (G__68760) {
case 1:
return rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2(value,(10));
}));

(rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2 = (function (value,base){
if(cljs.core.integer_QMARK_(value)){
} else {
throw (new Error("Assert failed: (integer? value)"));
}

if(cljs.core.integer_QMARK_(base)){
} else {
throw (new Error("Assert failed: (integer? base)"));
}

if(((((1) < base)) && ((base < (37))))){
} else {
throw (new Error("Assert failed: (< 1 base 37)"));
}

return rewrite_clj.node.integer.__GT_IntNode(value,base);
}));

(rewrite_clj.node.integer.integer_node.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.node.integer.js.map
