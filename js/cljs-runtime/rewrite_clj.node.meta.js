import "./cljs_env.js";
goog.provide('rewrite_clj.node.meta');

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
rewrite_clj.node.meta.MetaNode = (function (tag,prefix,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.meta.MetaNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k68892,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__68930 = k68892;
var G__68930__$1 = (((G__68930 instanceof cljs.core.Keyword))?G__68930.fqn:null);
switch (G__68930__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68892,else__4505__auto__);

}
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__68938){
var vec__68939 = p__68938;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68939,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68939,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-clj.node.meta.MetaNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68891){
var self__ = this;
var G__68891__$1 = this;
return (new cljs.core.RecordIter((0),G__68891__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1501447658 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68893,other68894){
var self__ = this;
var this68893__$1 = this;
return (((!((other68894 == null)))) && ((((this68893__$1.constructor === other68894.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68893__$1.tag,other68894.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68893__$1.prefix,other68894.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68893__$1.children,other68894.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68893__$1.__extmap,other68894.__extmap)))))))))));
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.tag;
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"meta","meta",1499536964);
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
var vec__68958 = rewrite_clj.node.protocols.sexprs.cljs$core$IFn$_invoke$arity$2(self__.children,opts);
var mta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68958,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68958,(1),null);
if(rewrite_clj.interop.meta_available_QMARK_(data)){
} else {
throw (new Error(["Assert failed: ",["cannot attach metadata to: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join(''),"\n","(interop/meta-available? data)"].join('')));
}

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(data,cljs.core.merge,((cljs.core.map_QMARK_(mta))?mta:cljs.core.PersistentArrayMap.createAsIfByAssoc([mta,true])));
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (cljs.core.count(self__.prefix) + rewrite_clj.node.protocols.sum_lengths(self__.children));
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(2));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.count(self__.prefix);
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k68892){
var self__ = this;
var this__4509__auto____$1 = this;
var G__68962 = k68892;
var G__68962__$1 = (((G__68962 instanceof cljs.core.Keyword))?G__68962.fqn:null);
switch (G__68962__$1) {
case "tag":
case "prefix":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68892);

}
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__68891){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__68963 = cljs.core.keyword_identical_QMARK_;
var expr__68964 = k__4511__auto__;
if(cljs.core.truth_((pred__68963.cljs$core$IFn$_invoke$arity$2 ? pred__68963.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__68964) : pred__68963.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__68964)))){
return (new rewrite_clj.node.meta.MetaNode(G__68891,self__.prefix,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68963.cljs$core$IFn$_invoke$arity$2 ? pred__68963.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__68964) : pred__68963.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__68964)))){
return (new rewrite_clj.node.meta.MetaNode(self__.tag,G__68891,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68963.cljs$core$IFn$_invoke$arity$2 ? pred__68963.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__68964) : pred__68963.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__68964)))){
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,G__68891,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__68891),null));
}
}
}
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__68891){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,G__68891,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_clj.node.meta.MetaNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.meta.MetaNode.cljs$lang$type = true);

(rewrite_clj.node.meta.MetaNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.meta/MetaNode",null,(1),null));
}));

(rewrite_clj.node.meta.MetaNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-clj.node.meta/MetaNode");
}));

/**
 * Positional factory function for rewrite-clj.node.meta/MetaNode.
 */
rewrite_clj.node.meta.__GT_MetaNode = (function rewrite_clj$node$meta$__GT_MetaNode(tag,prefix,children){
return (new rewrite_clj.node.meta.MetaNode(tag,prefix,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.meta/MetaNode, taking a map of keywords to field values.
 */
rewrite_clj.node.meta.map__GT_MetaNode = (function rewrite_clj$node$meta$map__GT_MetaNode(G__68906){
var extmap__4542__auto__ = (function (){var G__68970 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68906,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__68906)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68970);
} else {
return G__68970;
}
})();
return (new rewrite_clj.node.meta.MetaNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__68906),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__68906),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__68906),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.meta.MetaNode);
/**
 * Create a node representing a form with metadata.
 * 
 * When creating manually, you can specify `metadata` and `data` and spacing between the 2 elems will be included:
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/meta-node (n/keyword-node :foo)
 *                  (n/vector-node [(n/token-node 1)]))
 *     n/string)
 * ;; => "^:foo [1]"
 * 
 * (-> (n/meta-node (n/map-node [:foo (n/spaces 1) 42])
 *                  (n/vector-node [(n/token-node 1)]))
 *     n/string)
 * ;; => "^{:foo 42} [1]"
 * ```
 * When specifying a sequence of `children`, spacing is explicit:
 * 
 * ```Clojure
 * (-> (n/meta-node [(n/keyword-node :foo)
 *                   (n/spaces 1)
 *                   (n/vector-node [(n/token-node 1)])])
 *     n/string)
 * ;; => "^:foo [1]"
 * ```
 * See also: [[raw-meta-node]]
 */
rewrite_clj.node.meta.meta_node = (function rewrite_clj$node$meta$meta_node(var_args){
var G__68973 = arguments.length;
switch (G__68973) {
case 1:
return rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
rewrite_clj.node.protocols.assert_sexpr_count(children,(2));

return rewrite_clj.node.meta.__GT_MetaNode(new cljs.core.Keyword(null,"meta","meta",1499536964),"^",children);
}));

(rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$2 = (function (metadata,data){
return rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,rewrite_clj.node.whitespace.spaces((1)),data], null));
}));

(rewrite_clj.node.meta.meta_node.cljs$lang$maxFixedArity = 2);

/**
 * Create a node representing a form with metadata that renders to the reader syntax.
 * 
 * When creating manually, you can specify `metadata` and `data` and spacing between the 2 elems will be included:
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/raw-meta-node (n/keyword-node :foo)
 *                      (n/vector-node [(n/token-node 2)]))
 *      n/string)
 * ;; => "#^:foo [2]"
 * 
 * (-> (n/raw-meta-node (n/map-node [:foo (n/spaces 1) 42])
 *                      (n/vector-node [(n/token-node 2)]))
 *     n/string)
 * ;; => "#^{:foo 42} [2]"
 * ```
 * When specifying a sequence of `children`, spacing is explicit:
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/raw-meta-node [(n/keyword-node :foo)
 *                       (n/spaces 1)
 *                       (n/vector-node [(n/token-node 2)])])
 *     n/string)
 * ;; => "#^:foo [2]"
 * ```
 * See also: [[meta-node]]
 */
rewrite_clj.node.meta.raw_meta_node = (function rewrite_clj$node$meta$raw_meta_node(var_args){
var G__68985 = arguments.length;
switch (G__68985) {
case 1:
return rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
rewrite_clj.node.protocols.assert_sexpr_count(children,(2));

return rewrite_clj.node.meta.__GT_MetaNode(new cljs.core.Keyword(null,"meta*","meta*",-949431606),"#^",children);
}));

(rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$2 = (function (metadata,data){
return rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,rewrite_clj.node.whitespace.spaces((1)),data], null));
}));

(rewrite_clj.node.meta.raw_meta_node.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.node.meta.js.map
