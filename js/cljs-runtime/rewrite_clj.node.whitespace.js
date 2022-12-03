import "./cljs_env.js";
goog.provide('rewrite_clj.node.whitespace');
/**
 * This function is applied to every newline string.
 */
rewrite_clj.node.whitespace._STAR_newline_fn_STAR_ = cljs.core.identity;
/**
 * This function is applied to every newline string and should produce
 * the eventual character count.
 */
rewrite_clj.node.whitespace._STAR_count_fn_STAR_ = cljs.core.count;
rewrite_clj.node.whitespace.sexpr_unsupported = (function rewrite_clj$node$whitespace$sexpr_unsupported(){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.whitespace.WhitespaceNode = (function (whitespace,__meta,__extmap,__hash){
this.whitespace = whitespace;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.whitespace.WhitespaceNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k68797,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__68806 = k68797;
var G__68806__$1 = (((G__68806 instanceof cljs.core.Keyword))?G__68806.fqn:null);
switch (G__68806__$1) {
case "whitespace":
return self__.whitespace;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68797,else__4505__auto__);

}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__68807){
var vec__68808 = p__68807;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68808,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68808,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-clj.node.whitespace.WhitespaceNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace],null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68796){
var self__ = this;
var G__68796__$1 = this;
return (new cljs.core.RecordIter((0),G__68796__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1595850179 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68798,other68799){
var self__ = this;
var this68798__$1 = this;
return (((!((other68799 == null)))) && ((((this68798__$1.constructor === other68799.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68798__$1.whitespace,other68799.whitespace)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68798__$1.__extmap,other68799.__extmap)))))));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.whitespace.sexpr_unsupported();
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.count(self__.whitespace);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.whitespace;
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k68797){
var self__ = this;
var this__4509__auto____$1 = this;
var G__68814 = k68797;
var G__68814__$1 = (((G__68814 instanceof cljs.core.Keyword))?G__68814.fqn:null);
switch (G__68814__$1) {
case "whitespace":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68797);

}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__68796){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__68815 = cljs.core.keyword_identical_QMARK_;
var expr__68816 = k__4511__auto__;
if(cljs.core.truth_((pred__68815.cljs$core$IFn$_invoke$arity$2 ? pred__68815.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),expr__68816) : pred__68815.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),expr__68816)))){
return (new rewrite_clj.node.whitespace.WhitespaceNode(G__68796,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__68796),null));
}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace,null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__68796){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,G__68796,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_clj.node.whitespace.WhitespaceNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"whitespace","whitespace",300496044,null)], null);
}));

(rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$type = true);

(rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.whitespace/WhitespaceNode",null,(1),null));
}));

(rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-clj.node.whitespace/WhitespaceNode");
}));

/**
 * Positional factory function for rewrite-clj.node.whitespace/WhitespaceNode.
 */
rewrite_clj.node.whitespace.__GT_WhitespaceNode = (function rewrite_clj$node$whitespace$__GT_WhitespaceNode(whitespace){
return (new rewrite_clj.node.whitespace.WhitespaceNode(whitespace,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.whitespace/WhitespaceNode, taking a map of keywords to field values.
 */
rewrite_clj.node.whitespace.map__GT_WhitespaceNode = (function rewrite_clj$node$whitespace$map__GT_WhitespaceNode(G__68801){
var extmap__4542__auto__ = (function (){var G__68821 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__68801,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
if(cljs.core.record_QMARK_(G__68801)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68821);
} else {
return G__68821;
}
})();
return (new rewrite_clj.node.whitespace.WhitespaceNode(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483).cljs$core$IFn$_invoke$arity$1(G__68801),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.whitespace.CommaNode = (function (commas,__meta,__extmap,__hash){
this.commas = commas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.whitespace.CommaNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k68823,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__68827 = k68823;
var G__68827__$1 = (((G__68827 instanceof cljs.core.Keyword))?G__68827.fqn:null);
switch (G__68827__$1) {
case "commas":
return self__.commas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68823,else__4505__auto__);

}
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__68828){
var vec__68829 = p__68828;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68829,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68829,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-clj.node.whitespace.CommaNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commas","commas",1094507436),self__.commas],null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68822){
var self__ = this;
var G__68822__$1 = this;
return (new cljs.core.RecordIter((0),G__68822__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commas","commas",1094507436)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_clj.node.whitespace.CommaNode(self__.commas,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-551131754 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68824,other68825){
var self__ = this;
var this68824__$1 = this;
return (((!((other68825 == null)))) && ((((this68824__$1.constructor === other68825.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68824__$1.commas,other68825.commas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68824__$1.__extmap,other68825.__extmap)))))));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"comma","comma",1699024745);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"comma","comma",1699024745);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.whitespace.sexpr_unsupported();
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.count(self__.commas);
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.commas;
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"commas","commas",1094507436),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_clj.node.whitespace.CommaNode(self__.commas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k68823){
var self__ = this;
var this__4509__auto____$1 = this;
var G__68833 = k68823;
var G__68833__$1 = (((G__68833 instanceof cljs.core.Keyword))?G__68833.fqn:null);
switch (G__68833__$1) {
case "commas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68823);

}
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__68822){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__68834 = cljs.core.keyword_identical_QMARK_;
var expr__68835 = k__4511__auto__;
if(cljs.core.truth_((pred__68834.cljs$core$IFn$_invoke$arity$2 ? pred__68834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"commas","commas",1094507436),expr__68835) : pred__68834.call(null,new cljs.core.Keyword(null,"commas","commas",1094507436),expr__68835)))){
return (new rewrite_clj.node.whitespace.CommaNode(G__68822,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.CommaNode(self__.commas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__68822),null));
}
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"commas","commas",1094507436),self__.commas,null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__68822){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_clj.node.whitespace.CommaNode(self__.commas,G__68822,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.CommaNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_clj.node.whitespace.CommaNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"commas","commas",-1559928333,null)], null);
}));

(rewrite_clj.node.whitespace.CommaNode.cljs$lang$type = true);

(rewrite_clj.node.whitespace.CommaNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.whitespace/CommaNode",null,(1),null));
}));

(rewrite_clj.node.whitespace.CommaNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-clj.node.whitespace/CommaNode");
}));

/**
 * Positional factory function for rewrite-clj.node.whitespace/CommaNode.
 */
rewrite_clj.node.whitespace.__GT_CommaNode = (function rewrite_clj$node$whitespace$__GT_CommaNode(commas){
return (new rewrite_clj.node.whitespace.CommaNode(commas,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.whitespace/CommaNode, taking a map of keywords to field values.
 */
rewrite_clj.node.whitespace.map__GT_CommaNode = (function rewrite_clj$node$whitespace$map__GT_CommaNode(G__68826){
var extmap__4542__auto__ = (function (){var G__68837 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__68826,new cljs.core.Keyword(null,"commas","commas",1094507436));
if(cljs.core.record_QMARK_(G__68826)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68837);
} else {
return G__68837;
}
})();
return (new rewrite_clj.node.whitespace.CommaNode(new cljs.core.Keyword(null,"commas","commas",1094507436).cljs$core$IFn$_invoke$arity$1(G__68826),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.whitespace.NewlineNode = (function (newlines,__meta,__extmap,__hash){
this.newlines = newlines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.whitespace.NewlineNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k68839,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__68843 = k68839;
var G__68843__$1 = (((G__68843 instanceof cljs.core.Keyword))?G__68843.fqn:null);
switch (G__68843__$1) {
case "newlines":
return self__.newlines;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68839,else__4505__auto__);

}
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__68848){
var vec__68850 = p__68848;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68850,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68850,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-clj.node.whitespace.NewlineNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines],null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68838){
var self__ = this;
var G__68838__$1 = this;
return (new cljs.core.RecordIter((0),G__68838__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (979711303 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68840,other68841){
var self__ = this;
var this68840__$1 = this;
return (((!((other68841 == null)))) && ((((this68840__$1.constructor === other68841.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68840__$1.newlines,other68841.newlines)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68840__$1.__extmap,other68841.__extmap)))))));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"newline","newline",1790071323);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"newline","newline",1790071323);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.whitespace.sexpr_unsupported();
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.whitespace._STAR_count_fn_STAR_.call(null,self__.newlines);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.whitespace._STAR_newline_fn_STAR_.call(null,self__.newlines);
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k68839){
var self__ = this;
var this__4509__auto____$1 = this;
var G__68859 = k68839;
var G__68859__$1 = (((G__68859 instanceof cljs.core.Keyword))?G__68859.fqn:null);
switch (G__68859__$1) {
case "newlines":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68839);

}
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__68838){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__68860 = cljs.core.keyword_identical_QMARK_;
var expr__68861 = k__4511__auto__;
if(cljs.core.truth_((pred__68860.cljs$core$IFn$_invoke$arity$2 ? pred__68860.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"newlines","newlines",-1185451518),expr__68861) : pred__68860.call(null,new cljs.core.Keyword(null,"newlines","newlines",-1185451518),expr__68861)))){
return (new rewrite_clj.node.whitespace.NewlineNode(G__68838,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__68838),null));
}
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines,null))], null),self__.__extmap));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__68838){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,G__68838,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_clj.node.whitespace.NewlineNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newlines","newlines",455080009,null)], null);
}));

(rewrite_clj.node.whitespace.NewlineNode.cljs$lang$type = true);

(rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.whitespace/NewlineNode",null,(1),null));
}));

(rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-clj.node.whitespace/NewlineNode");
}));

/**
 * Positional factory function for rewrite-clj.node.whitespace/NewlineNode.
 */
rewrite_clj.node.whitespace.__GT_NewlineNode = (function rewrite_clj$node$whitespace$__GT_NewlineNode(newlines){
return (new rewrite_clj.node.whitespace.NewlineNode(newlines,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.whitespace/NewlineNode, taking a map of keywords to field values.
 */
rewrite_clj.node.whitespace.map__GT_NewlineNode = (function rewrite_clj$node$whitespace$map__GT_NewlineNode(G__68842){
var extmap__4542__auto__ = (function (){var G__68863 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__68842,new cljs.core.Keyword(null,"newlines","newlines",-1185451518));
if(cljs.core.record_QMARK_(G__68842)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68863);
} else {
return G__68863;
}
})();
return (new rewrite_clj.node.whitespace.NewlineNode(new cljs.core.Keyword(null,"newlines","newlines",-1185451518).cljs$core$IFn$_invoke$arity$1(G__68842),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.whitespace.WhitespaceNode);
rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.whitespace.CommaNode);
rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.whitespace.NewlineNode);
rewrite_clj.node.whitespace.string_of_QMARK_ = (function rewrite_clj$node$whitespace$string_of_QMARK_(s,pred){
var and__4251__auto__ = s;
if(cljs.core.truth_(and__4251__auto__)){
return ((typeof s === 'string') && ((((cljs.core.count(s) > (0))) && (cljs.core.every_QMARK_(pred,s)))));
} else {
return and__4251__auto__;
}
});
/**
 * Create whitespace node of string `s`, where `s` is one or more space characters.
 */
rewrite_clj.node.whitespace.whitespace_node = (function rewrite_clj$node$whitespace$whitespace_node(s){
if(cljs.core.truth_(rewrite_clj.node.whitespace.string_of_QMARK_(s,rewrite_clj.reader.space_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/space?)"));
}

return rewrite_clj.node.whitespace.__GT_WhitespaceNode(s);
});
/**
 * Create comma node of string `s`, where `s` is one or more comma characters.
 */
rewrite_clj.node.whitespace.comma_node = (function rewrite_clj$node$whitespace$comma_node(s){
if(cljs.core.truth_(rewrite_clj.node.whitespace.string_of_QMARK_(s,rewrite_clj.reader.comma_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/comma?)"));
}

return rewrite_clj.node.whitespace.__GT_CommaNode(s);
});
/**
 * Create newline node of string `s`, where `s` is one or more linebreak characters.
 */
rewrite_clj.node.whitespace.newline_node = (function rewrite_clj$node$whitespace$newline_node(s){
if(cljs.core.truth_(rewrite_clj.node.whitespace.string_of_QMARK_(s,rewrite_clj.reader.linebreak_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/linebreak?)"));
}

return rewrite_clj.node.whitespace.__GT_NewlineNode(s);
});
rewrite_clj.node.whitespace.classify_whitespace = (function rewrite_clj$node$whitespace$classify_whitespace(c){
if(rewrite_clj.reader.comma_QMARK_(c)){
return new cljs.core.Keyword(null,"comma","comma",1699024745);
} else {
if(rewrite_clj.reader.linebreak_QMARK_(c)){
return new cljs.core.Keyword(null,"newline","newline",1790071323);
} else {
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);

}
}
});
/**
 * Convert string `s` of whitespace to whitespace/newline nodes.
 */
rewrite_clj.node.whitespace.whitespace_nodes = (function rewrite_clj$node$whitespace$whitespace_nodes(s){
if(cljs.core.truth_(rewrite_clj.node.whitespace.string_of_QMARK_(s,rewrite_clj.reader.whitespace_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/whitespace?)"));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (char_seq){
var s__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,char_seq);
var G__68873 = rewrite_clj.node.whitespace.classify_whitespace(cljs.core.first(char_seq));
var G__68873__$1 = (((G__68873 instanceof cljs.core.Keyword))?G__68873.fqn:null);
switch (G__68873__$1) {
case "comma":
return rewrite_clj.node.whitespace.comma_node(s__$1);

break;
case "newline":
return rewrite_clj.node.whitespace.newline_node(s__$1);

break;
default:
return rewrite_clj.node.whitespace.whitespace_node(s__$1);

}
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.whitespace.classify_whitespace,s));
});
/**
 * Create node representing `n` spaces.
 */
rewrite_clj.node.whitespace.spaces = (function rewrite_clj$node$whitespace$spaces(n){
return rewrite_clj.node.whitespace.whitespace_node(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," ")));
});
/**
 * Create node representing `n` newline characters.
 */
rewrite_clj.node.whitespace.newlines = (function rewrite_clj$node$whitespace$newlines(n){
return rewrite_clj.node.whitespace.newline_node(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"\n")));
});
var comma_68968 = rewrite_clj.node.whitespace.whitespace_nodes(", ");
/**
 * Interleave `nodes` with `", "` nodes.
 */
rewrite_clj.node.whitespace.comma_separated = (function rewrite_clj$node$whitespace$comma_separated(nodes){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(comma_68968),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__68879_SHARP_){
return cljs.core.cons(p1__68879_SHARP_,comma_68968);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0)));
});
var nl_68969 = rewrite_clj.node.whitespace.newline_node("\n");
/**
 * Interleave `nodes` with newline nodes.
 */
rewrite_clj.node.whitespace.line_separated = (function rewrite_clj$node$whitespace$line_separated(nodes){
return cljs.core.butlast(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nodes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(nl_68969)));
});
var space_68971 = rewrite_clj.node.whitespace.whitespace_node(" ");
/**
 * Interleave `nodes` with `" "` nodes.
 */
rewrite_clj.node.whitespace.space_separated = (function rewrite_clj$node$whitespace$space_separated(nodes){
return cljs.core.butlast(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nodes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(space_68971)));
});
/**
 * Returns true if `node` represents Clojure whitespace.
 */
rewrite_clj.node.whitespace.whitespace_QMARK_ = (function rewrite_clj$node$whitespace$whitespace_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"comma","comma",1699024745),null,new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null),rewrite_clj.node.protocols.tag(node));
});
/**
 * Returns true if `node` represents one or more linebreaks.
 */
rewrite_clj.node.whitespace.linebreak_QMARK_ = (function rewrite_clj$node$whitespace$linebreak_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.tag(node),new cljs.core.Keyword(null,"newline","newline",1790071323));
});
/**
 * Returns true if `node` represents one or more commas.
 */
rewrite_clj.node.whitespace.comma_QMARK_ = (function rewrite_clj$node$whitespace$comma_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.tag(node),new cljs.core.Keyword(null,"comma","comma",1699024745));
});

//# sourceMappingURL=rewrite_clj.node.whitespace.js.map
