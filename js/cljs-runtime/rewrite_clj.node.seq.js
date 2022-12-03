import "./cljs_env.js";
goog.provide('rewrite_clj.node.seq');

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
rewrite_clj.node.seq.SeqNode = (function (tag,format_string,wrap_length,seq_fn,children,__meta,__extmap,__hash){
this.tag = tag;
this.format_string = format_string;
this.wrap_length = wrap_length;
this.seq_fn = seq_fn;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.seq.SeqNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k68897,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__68913 = k68897;
var G__68913__$1 = (((G__68913 instanceof cljs.core.Keyword))?G__68913.fqn:null);
switch (G__68913__$1) {
case "tag":
return self__.tag;

break;
case "format-string":
return self__.format_string;

break;
case "wrap-length":
return self__.wrap_length;

break;
case "seq-fn":
return self__.seq_fn;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68897,else__4505__auto__);

}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__68914){
var vec__68915 = p__68914;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68915,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68915,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-clj.node.seq.SeqNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format-string","format-string",832187437),self__.format_string],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),self__.wrap_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),self__.seq_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68896){
var self__ = this;
var G__68896__$1 = this;
return (new cljs.core.RecordIter((0),G__68896__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"format-string","format-string",832187437),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (580297420 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68898,other68899){
var self__ = this;
var this68898__$1 = this;
return (((!((other68899 == null)))) && ((((this68898__$1.constructor === other68899.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68898__$1.tag,other68899.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68898__$1.format_string,other68899.format_string)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68898__$1.wrap_length,other68899.wrap_length)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68898__$1.seq_fn,other68899.seq_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68898__$1.children,other68899.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68898__$1.__extmap,other68899.__extmap)))))))))))))));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.tag;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
var G__68936 = rewrite_clj.node.protocols.sexprs.cljs$core$IFn$_invoke$arity$2(self__.children,opts);
return (self__.seq_fn.cljs$core$IFn$_invoke$arity$1 ? self__.seq_fn.cljs$core$IFn$_invoke$arity$1(G__68936) : self__.seq_fn.call(null,G__68936));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (self__.wrap_length + rewrite_clj.node.protocols.sum_lengths(self__.children));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic(self__.format_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewrite_clj.node.protocols.concat_strings(self__.children)], 0));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"format-string","format-string",832187437),null,new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),null,new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (node,children_SINGLEQUOTE_){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (self__.wrap_length - (1));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k68897){
var self__ = this;
var this__4509__auto____$1 = this;
var G__68944 = k68897;
var G__68944__$1 = (((G__68944 instanceof cljs.core.Keyword))?G__68944.fqn:null);
switch (G__68944__$1) {
case "tag":
case "format-string":
case "wrap-length":
case "seq-fn":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68897);

}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__68896){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__68949 = cljs.core.keyword_identical_QMARK_;
var expr__68950 = k__4511__auto__;
if(cljs.core.truth_((pred__68949.cljs$core$IFn$_invoke$arity$2 ? pred__68949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__68950) : pred__68949.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__68950)))){
return (new rewrite_clj.node.seq.SeqNode(G__68896,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68949.cljs$core$IFn$_invoke$arity$2 ? pred__68949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"format-string","format-string",832187437),expr__68950) : pred__68949.call(null,new cljs.core.Keyword(null,"format-string","format-string",832187437),expr__68950)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,G__68896,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68949.cljs$core$IFn$_invoke$arity$2 ? pred__68949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),expr__68950) : pred__68949.call(null,new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),expr__68950)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,G__68896,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68949.cljs$core$IFn$_invoke$arity$2 ? pred__68949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),expr__68950) : pred__68949.call(null,new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),expr__68950)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,G__68896,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68949.cljs$core$IFn$_invoke$arity$2 ? pred__68949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__68950) : pred__68949.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__68950)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,G__68896,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__68896),null));
}
}
}
}
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"format-string","format-string",832187437),self__.format_string,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),self__.wrap_length,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),self__.seq_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__68896){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,G__68896,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_clj.node.seq.SeqNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"format-string","format-string",-1822248332,null),new cljs.core.Symbol(null,"wrap-length","wrap-length",1372423008,null),new cljs.core.Symbol(null,"seq-fn","seq-fn",649518296,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.seq.SeqNode.cljs$lang$type = true);

(rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.seq/SeqNode",null,(1),null));
}));

(rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-clj.node.seq/SeqNode");
}));

/**
 * Positional factory function for rewrite-clj.node.seq/SeqNode.
 */
rewrite_clj.node.seq.__GT_SeqNode = (function rewrite_clj$node$seq$__GT_SeqNode(tag,format_string,wrap_length,seq_fn,children){
return (new rewrite_clj.node.seq.SeqNode(tag,format_string,wrap_length,seq_fn,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.seq/SeqNode, taking a map of keywords to field values.
 */
rewrite_clj.node.seq.map__GT_SeqNode = (function rewrite_clj$node$seq$map__GT_SeqNode(G__68904){
var extmap__4542__auto__ = (function (){var G__68954 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68904,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"format-string","format-string",832187437),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__68904)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68954);
} else {
return G__68954;
}
})();
return (new rewrite_clj.node.seq.SeqNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__68904),new cljs.core.Keyword(null,"format-string","format-string",832187437).cljs$core$IFn$_invoke$arity$1(G__68904),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519).cljs$core$IFn$_invoke$arity$1(G__68904),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231).cljs$core$IFn$_invoke$arity$1(G__68904),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__68904),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.seq.SeqNode);
/**
 * Create a node representing a list with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/list-node [(n/token-node 1)
 *                   (n/spaces 1)
 *                   (n/token-node 2)
 *                   (n/spaces 1)
 *                   (n/token-node 3)])
 *     n/string)
 * ;; => "(1 2 3)"
 * ```
 */
rewrite_clj.node.seq.list_node = (function rewrite_clj$node$seq$list_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"list","list",765357683),"(%s)",(2),(function (p1__68966_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,p1__68966_SHARP_);
}),children);
});
/**
 * Create a node representing a vector with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/vector-node [(n/token-node 1)
 *                     (n/spaces 1)
 *                     (n/token-node 2)
 *                     (n/spaces 1)
 *                     (n/token-node 3)])
 *     n/string)
 * ;; => "[1 2 3]"
 * ```
 */
rewrite_clj.node.seq.vector_node = (function rewrite_clj$node$seq$vector_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"vector","vector",1902966158),"[%s]",(2),cljs.core.vec,children);
});
/**
 * Create a node representing a set with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/set-node [(n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/token-node 2)
 *                  (n/spaces 1)
 *                  (n/token-node 3)])
 *     n/string)
 * ;; => "#{1 2 3}"
 * ```
 * 
 * Note that rewrite-clj allows the, technically illegal, set with duplicate values:
 * ```Clojure
 * (-> (n/set-node [(n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/token-node 1)])
 *     (n/string))
 * ;; => "#{1 1}"
 * ```
 * 
 * See [docs on sets with duplicate values](/doc/01-user-guide.adoc#sets-with-duplicate-values).
 */
rewrite_clj.node.seq.set_node = (function rewrite_clj$node$seq$set_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"set","set",304602554),"#{%s}",(3),cljs.core.set,children);
});
/**
 * Create a node representing a map with `children`.
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/map-node [(n/keyword-node :a)
 *                  (n/spaces 1)
 *                  (n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/keyword-node :b)
 *                  (n/spaces 1)
 *                  (n/token-node 2)])
 *     (n/string))
 * ;; => "{:a 1 :b 2}"
 * ```
 * 
 * Note that rewrite-clj allows the, technically illegal, unbalanced map:
 * ```Clojure
 * (-> (n/map-node [(n/keyword-node :a)])
 *     (n/string))
 * ;; => "{:a}"
 * ```
 * See [docs on unbalanced maps](/doc/01-user-guide.adoc#unbalanced-maps).
 * 
 * Rewrite-clj also allows the, also technically illegal, map with duplicate keys:
 * ```Clojure
 * (-> (n/map-node [(n/keyword-node :a)
 *                  (n/spaces 1)
 *                  (n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/keyword-node :a)
 *                  (n/spaces 1)
 *                  (n/token-node 2)])
 *     (n/string))
 * ;; => "{:a 1 :a 2}"
 * ```
 * See [docs on maps with duplicate keys](/doc/01-user-guide.adoc#maps-with-duplicate-keys).
 */
rewrite_clj.node.seq.map_node = (function rewrite_clj$node$seq$map_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"map","map",1371690461),"{%s}",(2),(function (p1__69004_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,p1__69004_SHARP_);
}),children);
});

//# sourceMappingURL=rewrite_clj.node.seq.js.map
