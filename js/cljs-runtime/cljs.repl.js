goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59922){
var map__59923 = p__59922;
var map__59923__$1 = cljs.core.__destructure_map(map__59923);
var m = map__59923__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59923__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59923__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59926_60126 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59927_60127 = null;
var count__59928_60128 = (0);
var i__59929_60129 = (0);
while(true){
if((i__59929_60129 < count__59928_60128)){
var f_60130 = chunk__59927_60127.cljs$core$IIndexed$_nth$arity$2(null,i__59929_60129);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60130], 0));


var G__60131 = seq__59926_60126;
var G__60132 = chunk__59927_60127;
var G__60133 = count__59928_60128;
var G__60134 = (i__59929_60129 + (1));
seq__59926_60126 = G__60131;
chunk__59927_60127 = G__60132;
count__59928_60128 = G__60133;
i__59929_60129 = G__60134;
continue;
} else {
var temp__5753__auto___60135 = cljs.core.seq(seq__59926_60126);
if(temp__5753__auto___60135){
var seq__59926_60136__$1 = temp__5753__auto___60135;
if(cljs.core.chunked_seq_QMARK_(seq__59926_60136__$1)){
var c__4679__auto___60137 = cljs.core.chunk_first(seq__59926_60136__$1);
var G__60138 = cljs.core.chunk_rest(seq__59926_60136__$1);
var G__60139 = c__4679__auto___60137;
var G__60140 = cljs.core.count(c__4679__auto___60137);
var G__60141 = (0);
seq__59926_60126 = G__60138;
chunk__59927_60127 = G__60139;
count__59928_60128 = G__60140;
i__59929_60129 = G__60141;
continue;
} else {
var f_60142 = cljs.core.first(seq__59926_60136__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60142], 0));


var G__60144 = cljs.core.next(seq__59926_60136__$1);
var G__60145 = null;
var G__60146 = (0);
var G__60147 = (0);
seq__59926_60126 = G__60144;
chunk__59927_60127 = G__60145;
count__59928_60128 = G__60146;
i__59929_60129 = G__60147;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60148 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_60148], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_60148)))?cljs.core.second(arglists_60148):arglists_60148)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59933_60149 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59934_60150 = null;
var count__59935_60151 = (0);
var i__59936_60152 = (0);
while(true){
if((i__59936_60152 < count__59935_60151)){
var vec__59947_60153 = chunk__59934_60150.cljs$core$IIndexed$_nth$arity$2(null,i__59936_60152);
var name_60154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59947_60153,(0),null);
var map__59950_60155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59947_60153,(1),null);
var map__59950_60156__$1 = cljs.core.__destructure_map(map__59950_60155);
var doc_60157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950_60156__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950_60156__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60154], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60158], 0));

if(cljs.core.truth_(doc_60157)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60157], 0));
} else {
}


var G__60159 = seq__59933_60149;
var G__60160 = chunk__59934_60150;
var G__60161 = count__59935_60151;
var G__60162 = (i__59936_60152 + (1));
seq__59933_60149 = G__60159;
chunk__59934_60150 = G__60160;
count__59935_60151 = G__60161;
i__59936_60152 = G__60162;
continue;
} else {
var temp__5753__auto___60163 = cljs.core.seq(seq__59933_60149);
if(temp__5753__auto___60163){
var seq__59933_60164__$1 = temp__5753__auto___60163;
if(cljs.core.chunked_seq_QMARK_(seq__59933_60164__$1)){
var c__4679__auto___60165 = cljs.core.chunk_first(seq__59933_60164__$1);
var G__60166 = cljs.core.chunk_rest(seq__59933_60164__$1);
var G__60167 = c__4679__auto___60165;
var G__60168 = cljs.core.count(c__4679__auto___60165);
var G__60169 = (0);
seq__59933_60149 = G__60166;
chunk__59934_60150 = G__60167;
count__59935_60151 = G__60168;
i__59936_60152 = G__60169;
continue;
} else {
var vec__59951_60170 = cljs.core.first(seq__59933_60164__$1);
var name_60171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59951_60170,(0),null);
var map__59954_60172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59951_60170,(1),null);
var map__59954_60173__$1 = cljs.core.__destructure_map(map__59954_60172);
var doc_60174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59954_60173__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59954_60173__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60171], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60175], 0));

if(cljs.core.truth_(doc_60174)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60174], 0));
} else {
}


var G__60176 = cljs.core.next(seq__59933_60164__$1);
var G__60177 = null;
var G__60178 = (0);
var G__60179 = (0);
seq__59933_60149 = G__60176;
chunk__59934_60150 = G__60177;
count__59935_60151 = G__60178;
i__59936_60152 = G__60179;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__59955 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59956 = null;
var count__59957 = (0);
var i__59958 = (0);
while(true){
if((i__59958 < count__59957)){
var role = chunk__59956.cljs$core$IIndexed$_nth$arity$2(null,i__59958);
var temp__5753__auto___60189__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___60189__$1)){
var spec_60190 = temp__5753__auto___60189__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60190)], 0));
} else {
}


var G__60191 = seq__59955;
var G__60192 = chunk__59956;
var G__60193 = count__59957;
var G__60194 = (i__59958 + (1));
seq__59955 = G__60191;
chunk__59956 = G__60192;
count__59957 = G__60193;
i__59958 = G__60194;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__59955);
if(temp__5753__auto____$1){
var seq__59955__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59955__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59955__$1);
var G__60195 = cljs.core.chunk_rest(seq__59955__$1);
var G__60196 = c__4679__auto__;
var G__60197 = cljs.core.count(c__4679__auto__);
var G__60198 = (0);
seq__59955 = G__60195;
chunk__59956 = G__60196;
count__59957 = G__60197;
i__59958 = G__60198;
continue;
} else {
var role = cljs.core.first(seq__59955__$1);
var temp__5753__auto___60199__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___60199__$2)){
var spec_60200 = temp__5753__auto___60199__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60200)], 0));
} else {
}


var G__60201 = cljs.core.next(seq__59955__$1);
var G__60202 = null;
var G__60203 = (0);
var G__60204 = (0);
seq__59955 = G__60201;
chunk__59956 = G__60202;
count__59957 = G__60203;
i__59958 = G__60204;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__60214 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__60215 = cljs.core.ex_cause(t);
via = G__60214;
t = G__60215;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__59966 = datafied_throwable;
var map__59966__$1 = cljs.core.__destructure_map(map__59966);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59966__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59966__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59966__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59967 = cljs.core.last(via);
var map__59967__$1 = cljs.core.__destructure_map(map__59967);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59967__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59967__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59967__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59968 = data;
var map__59968__$1 = cljs.core.__destructure_map(map__59968);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59969 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__59969__$1 = cljs.core.__destructure_map(map__59969);
var top_data = map__59969__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59969__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__59970 = phase;
var G__59970__$1 = (((G__59970 instanceof cljs.core.Keyword))?G__59970.fqn:null);
switch (G__59970__$1) {
case "read-source":
var map__59971 = data;
var map__59971__$1 = cljs.core.__destructure_map(map__59971);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59971__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59971__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59972 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__59972__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59972,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59972);
var G__59972__$2 = (cljs.core.truth_((function (){var fexpr__59973 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59973.cljs$core$IFn$_invoke$arity$1 ? fexpr__59973.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59973.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59972__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59972__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59972__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59972__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__59974 = top_data;
var G__59974__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59974,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59974);
var G__59974__$2 = (cljs.core.truth_((function (){var fexpr__59975 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59975.cljs$core$IFn$_invoke$arity$1 ? fexpr__59975.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59975.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59974__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59974__$1);
var G__59974__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59974__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59974__$2);
var G__59974__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59974__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59974__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59974__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59974__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__59993 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59993,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59993,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59993,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59993,(3),null);
var G__59996 = top_data;
var G__59996__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59996,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__59996);
var G__59996__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59996__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__59996__$1);
var G__59996__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59996__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__59996__$2);
var G__59996__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59996__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59996__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59996__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59996__$4;
}

break;
case "execution":
var vec__60004 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60004,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60004,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60004,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60004,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59965_SHARP_){
var or__4253__auto__ = (p1__59965_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__60007 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60007.cljs$core$IFn$_invoke$arity$1 ? fexpr__60007.cljs$core$IFn$_invoke$arity$1(p1__59965_SHARP_) : fexpr__60007.call(null,p1__59965_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__60008 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__60008__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60008,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__60008);
var G__60008__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60008__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60008__$1);
var G__60008__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60008__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__60008__$2);
var G__60008__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60008__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__60008__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60008__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60008__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59970__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__60060){
var map__60062 = p__60060;
var map__60062__$1 = cljs.core.__destructure_map(map__60062);
var triage_data = map__60062__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60062__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60062__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60062__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60062__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60062__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60062__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60062__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60062__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__60084 = phase;
var G__60084__$1 = (((G__60084 instanceof cljs.core.Keyword))?G__60084.fqn:null);
switch (G__60084__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__60085 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__60086 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60087 = loc;
var G__60088 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60089_60224 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60090_60225 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60091_60226 = true;
var _STAR_print_fn_STAR__temp_val__60092_60227 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60091_60226);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60092_60227);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60047_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60047_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60090_60225);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60089_60224);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60085,G__60086,G__60087,G__60088) : format.call(null,G__60085,G__60086,G__60087,G__60088));

break;
case "macroexpansion":
var G__60095 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__60096 = cause_type;
var G__60097 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60098 = loc;
var G__60099 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60095,G__60096,G__60097,G__60098,G__60099) : format.call(null,G__60095,G__60096,G__60097,G__60098,G__60099));

break;
case "compile-syntax-check":
var G__60100 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__60101 = cause_type;
var G__60102 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60103 = loc;
var G__60104 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60100,G__60101,G__60102,G__60103,G__60104) : format.call(null,G__60100,G__60101,G__60102,G__60103,G__60104));

break;
case "compilation":
var G__60105 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__60106 = cause_type;
var G__60107 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60108 = loc;
var G__60109 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60105,G__60106,G__60107,G__60108,G__60109) : format.call(null,G__60105,G__60106,G__60107,G__60108,G__60109));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__60110 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__60111 = symbol;
var G__60112 = loc;
var G__60113 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60114_60229 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60115_60230 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60116_60231 = true;
var _STAR_print_fn_STAR__temp_val__60117_60232 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60116_60231);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60117_60232);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60055_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60055_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60115_60230);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60114_60229);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60110,G__60111,G__60112,G__60113) : format.call(null,G__60110,G__60111,G__60112,G__60113));
} else {
var G__60118 = "Execution error%s at %s(%s).\n%s\n";
var G__60119 = cause_type;
var G__60120 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60121 = loc;
var G__60122 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60118,G__60119,G__60120,G__60121,G__60122) : format.call(null,G__60118,G__60119,G__60120,G__60121,G__60122));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60084__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
