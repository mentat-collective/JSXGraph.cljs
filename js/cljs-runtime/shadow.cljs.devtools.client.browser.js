goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62080 = arguments.length;
var i__4865__auto___62081 = (0);
while(true){
if((i__4865__auto___62081 < len__4864__auto___62080)){
args__4870__auto__.push((arguments[i__4865__auto___62081]));

var G__62084 = (i__4865__auto___62081 + (1));
i__4865__auto___62081 = G__62084;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq61180){
var G__61181 = cljs.core.first(seq61180);
var seq61180__$1 = cljs.core.next(seq61180);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61181,seq61180__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__61213 = cljs.core.seq(sources);
var chunk__61214 = null;
var count__61215 = (0);
var i__61216 = (0);
while(true){
if((i__61216 < count__61215)){
var map__61317 = chunk__61214.cljs$core$IIndexed$_nth$arity$2(null,i__61216);
var map__61317__$1 = cljs.core.__destructure_map(map__61317);
var src = map__61317__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61317__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61317__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61317__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61317__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61318){var e_62093 = e61318;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62093);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62093.message)].join('')));
}

var G__62095 = seq__61213;
var G__62096 = chunk__61214;
var G__62097 = count__61215;
var G__62098 = (i__61216 + (1));
seq__61213 = G__62095;
chunk__61214 = G__62096;
count__61215 = G__62097;
i__61216 = G__62098;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61213);
if(temp__5753__auto__){
var seq__61213__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61213__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61213__$1);
var G__62104 = cljs.core.chunk_rest(seq__61213__$1);
var G__62105 = c__4679__auto__;
var G__62106 = cljs.core.count(c__4679__auto__);
var G__62107 = (0);
seq__61213 = G__62104;
chunk__61214 = G__62105;
count__61215 = G__62106;
i__61216 = G__62107;
continue;
} else {
var map__61319 = cljs.core.first(seq__61213__$1);
var map__61319__$1 = cljs.core.__destructure_map(map__61319);
var src = map__61319__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61320){var e_62113 = e61320;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62113);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62113.message)].join('')));
}

var G__62114 = cljs.core.next(seq__61213__$1);
var G__62115 = null;
var G__62116 = (0);
var G__62117 = (0);
seq__61213 = G__62114;
chunk__61214 = G__62115;
count__61215 = G__62116;
i__61216 = G__62117;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__61326 = cljs.core.seq(js_requires);
var chunk__61327 = null;
var count__61328 = (0);
var i__61329 = (0);
while(true){
if((i__61329 < count__61328)){
var js_ns = chunk__61327.cljs$core$IIndexed$_nth$arity$2(null,i__61329);
var require_str_62126 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62126);


var G__62127 = seq__61326;
var G__62128 = chunk__61327;
var G__62129 = count__61328;
var G__62130 = (i__61329 + (1));
seq__61326 = G__62127;
chunk__61327 = G__62128;
count__61328 = G__62129;
i__61329 = G__62130;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61326);
if(temp__5753__auto__){
var seq__61326__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61326__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61326__$1);
var G__62132 = cljs.core.chunk_rest(seq__61326__$1);
var G__62133 = c__4679__auto__;
var G__62134 = cljs.core.count(c__4679__auto__);
var G__62135 = (0);
seq__61326 = G__62132;
chunk__61327 = G__62133;
count__61328 = G__62134;
i__61329 = G__62135;
continue;
} else {
var js_ns = cljs.core.first(seq__61326__$1);
var require_str_62136 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62136);


var G__62137 = cljs.core.next(seq__61326__$1);
var G__62138 = null;
var G__62139 = (0);
var G__62140 = (0);
seq__61326 = G__62137;
chunk__61327 = G__62138;
count__61328 = G__62139;
i__61329 = G__62140;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__61342){
var map__61343 = p__61342;
var map__61343__$1 = cljs.core.__destructure_map(map__61343);
var msg = map__61343__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61343__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61343__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61344(s__61345){
return (new cljs.core.LazySeq(null,(function (){
var s__61345__$1 = s__61345;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__61345__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__61352 = cljs.core.first(xs__6308__auto__);
var map__61352__$1 = cljs.core.__destructure_map(map__61352);
var src = map__61352__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__61345__$1,map__61352,map__61352__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61343,map__61343__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61344_$_iter__61346(s__61347){
return (new cljs.core.LazySeq(null,((function (s__61345__$1,map__61352,map__61352__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61343,map__61343__$1,msg,info,reload_info){
return (function (){
var s__61347__$1 = s__61347;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__61347__$1);
if(temp__5753__auto____$1){
var s__61347__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61347__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__61347__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__61349 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__61348 = (0);
while(true){
if((i__61348 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__61348);
cljs.core.chunk_append(b__61349,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__62146 = (i__61348 + (1));
i__61348 = G__62146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61349),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61344_$_iter__61346(cljs.core.chunk_rest(s__61347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61349),null);
}
} else {
var warning = cljs.core.first(s__61347__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61344_$_iter__61346(cljs.core.rest(s__61347__$2)));
}
} else {
return null;
}
break;
}
});})(s__61345__$1,map__61352,map__61352__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61343,map__61343__$1,msg,info,reload_info))
,null,null));
});})(s__61345__$1,map__61352,map__61352__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61343,map__61343__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61344(cljs.core.rest(s__61345__$1)));
} else {
var G__62149 = cljs.core.rest(s__61345__$1);
s__61345__$1 = G__62149;
continue;
}
} else {
var G__62150 = cljs.core.rest(s__61345__$1);
s__61345__$1 = G__62150;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__61354_62151 = cljs.core.seq(warnings);
var chunk__61355_62152 = null;
var count__61356_62153 = (0);
var i__61357_62154 = (0);
while(true){
if((i__61357_62154 < count__61356_62153)){
var map__61361_62156 = chunk__61355_62152.cljs$core$IIndexed$_nth$arity$2(null,i__61357_62154);
var map__61361_62157__$1 = cljs.core.__destructure_map(map__61361_62156);
var w_62158 = map__61361_62157__$1;
var msg_62159__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61361_62157__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61361_62157__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61361_62157__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61361_62157__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62162)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62160),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62161),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62159__$1)].join(''));


var G__62164 = seq__61354_62151;
var G__62165 = chunk__61355_62152;
var G__62166 = count__61356_62153;
var G__62167 = (i__61357_62154 + (1));
seq__61354_62151 = G__62164;
chunk__61355_62152 = G__62165;
count__61356_62153 = G__62166;
i__61357_62154 = G__62167;
continue;
} else {
var temp__5753__auto___62168 = cljs.core.seq(seq__61354_62151);
if(temp__5753__auto___62168){
var seq__61354_62169__$1 = temp__5753__auto___62168;
if(cljs.core.chunked_seq_QMARK_(seq__61354_62169__$1)){
var c__4679__auto___62170 = cljs.core.chunk_first(seq__61354_62169__$1);
var G__62171 = cljs.core.chunk_rest(seq__61354_62169__$1);
var G__62172 = c__4679__auto___62170;
var G__62173 = cljs.core.count(c__4679__auto___62170);
var G__62174 = (0);
seq__61354_62151 = G__62171;
chunk__61355_62152 = G__62172;
count__61356_62153 = G__62173;
i__61357_62154 = G__62174;
continue;
} else {
var map__61362_62175 = cljs.core.first(seq__61354_62169__$1);
var map__61362_62176__$1 = cljs.core.__destructure_map(map__61362_62175);
var w_62177 = map__61362_62176__$1;
var msg_62178__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61362_62176__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61362_62176__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61362_62176__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61362_62176__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62181)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62179),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62180),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62178__$1)].join(''));


var G__62183 = cljs.core.next(seq__61354_62169__$1);
var G__62184 = null;
var G__62185 = (0);
var G__62186 = (0);
seq__61354_62151 = G__62183;
chunk__61355_62152 = G__62184;
count__61356_62153 = G__62185;
i__61357_62154 = G__62186;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__61341_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__61341_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__61376){
var map__61377 = p__61376;
var map__61377__$1 = cljs.core.__destructure_map(map__61377);
var msg = map__61377__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61377__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61377__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__61379 = cljs.core.seq(updates);
var chunk__61381 = null;
var count__61382 = (0);
var i__61383 = (0);
while(true){
if((i__61383 < count__61382)){
var path = chunk__61381.cljs$core$IIndexed$_nth$arity$2(null,i__61383);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61592_62192 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61596_62193 = null;
var count__61597_62194 = (0);
var i__61598_62195 = (0);
while(true){
if((i__61598_62195 < count__61597_62194)){
var node_62196 = chunk__61596_62193.cljs$core$IIndexed$_nth$arity$2(null,i__61598_62195);
if(cljs.core.not(node_62196.shadow$old)){
var path_match_62199 = shadow.cljs.devtools.client.browser.match_paths(node_62196.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62199)){
var new_link_62200 = (function (){var G__61669 = node_62196.cloneNode(true);
G__61669.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62199),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61669;
})();
(node_62196.shadow$old = true);

(new_link_62200.onload = ((function (seq__61592_62192,chunk__61596_62193,count__61597_62194,i__61598_62195,seq__61379,chunk__61381,count__61382,i__61383,new_link_62200,path_match_62199,node_62196,path,map__61377,map__61377__$1,msg,updates,reload_info){
return (function (e){
var seq__61673_62201 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61675_62202 = null;
var count__61676_62203 = (0);
var i__61677_62204 = (0);
while(true){
if((i__61677_62204 < count__61676_62203)){
var map__61689_62206 = chunk__61675_62202.cljs$core$IIndexed$_nth$arity$2(null,i__61677_62204);
var map__61689_62207__$1 = cljs.core.__destructure_map(map__61689_62206);
var task_62208 = map__61689_62207__$1;
var fn_str_62209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61689_62207__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61689_62207__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62211 = goog.getObjectByName(fn_str_62209,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62210)].join(''));

(fn_obj_62211.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62211.cljs$core$IFn$_invoke$arity$2(path,new_link_62200) : fn_obj_62211.call(null,path,new_link_62200));


var G__62213 = seq__61673_62201;
var G__62214 = chunk__61675_62202;
var G__62215 = count__61676_62203;
var G__62216 = (i__61677_62204 + (1));
seq__61673_62201 = G__62213;
chunk__61675_62202 = G__62214;
count__61676_62203 = G__62215;
i__61677_62204 = G__62216;
continue;
} else {
var temp__5753__auto___62219 = cljs.core.seq(seq__61673_62201);
if(temp__5753__auto___62219){
var seq__61673_62221__$1 = temp__5753__auto___62219;
if(cljs.core.chunked_seq_QMARK_(seq__61673_62221__$1)){
var c__4679__auto___62222 = cljs.core.chunk_first(seq__61673_62221__$1);
var G__62223 = cljs.core.chunk_rest(seq__61673_62221__$1);
var G__62224 = c__4679__auto___62222;
var G__62225 = cljs.core.count(c__4679__auto___62222);
var G__62226 = (0);
seq__61673_62201 = G__62223;
chunk__61675_62202 = G__62224;
count__61676_62203 = G__62225;
i__61677_62204 = G__62226;
continue;
} else {
var map__61695_62227 = cljs.core.first(seq__61673_62221__$1);
var map__61695_62228__$1 = cljs.core.__destructure_map(map__61695_62227);
var task_62229 = map__61695_62228__$1;
var fn_str_62230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61695_62228__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61695_62228__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62232 = goog.getObjectByName(fn_str_62230,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62231)].join(''));

(fn_obj_62232.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62232.cljs$core$IFn$_invoke$arity$2(path,new_link_62200) : fn_obj_62232.call(null,path,new_link_62200));


var G__62233 = cljs.core.next(seq__61673_62221__$1);
var G__62234 = null;
var G__62235 = (0);
var G__62236 = (0);
seq__61673_62201 = G__62233;
chunk__61675_62202 = G__62234;
count__61676_62203 = G__62235;
i__61677_62204 = G__62236;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62196);
});})(seq__61592_62192,chunk__61596_62193,count__61597_62194,i__61598_62195,seq__61379,chunk__61381,count__61382,i__61383,new_link_62200,path_match_62199,node_62196,path,map__61377,map__61377__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62199], 0));

goog.dom.insertSiblingAfter(new_link_62200,node_62196);


var G__62238 = seq__61592_62192;
var G__62239 = chunk__61596_62193;
var G__62240 = count__61597_62194;
var G__62241 = (i__61598_62195 + (1));
seq__61592_62192 = G__62238;
chunk__61596_62193 = G__62239;
count__61597_62194 = G__62240;
i__61598_62195 = G__62241;
continue;
} else {
var G__62242 = seq__61592_62192;
var G__62243 = chunk__61596_62193;
var G__62244 = count__61597_62194;
var G__62245 = (i__61598_62195 + (1));
seq__61592_62192 = G__62242;
chunk__61596_62193 = G__62243;
count__61597_62194 = G__62244;
i__61598_62195 = G__62245;
continue;
}
} else {
var G__62246 = seq__61592_62192;
var G__62247 = chunk__61596_62193;
var G__62248 = count__61597_62194;
var G__62249 = (i__61598_62195 + (1));
seq__61592_62192 = G__62246;
chunk__61596_62193 = G__62247;
count__61597_62194 = G__62248;
i__61598_62195 = G__62249;
continue;
}
} else {
var temp__5753__auto___62250 = cljs.core.seq(seq__61592_62192);
if(temp__5753__auto___62250){
var seq__61592_62251__$1 = temp__5753__auto___62250;
if(cljs.core.chunked_seq_QMARK_(seq__61592_62251__$1)){
var c__4679__auto___62252 = cljs.core.chunk_first(seq__61592_62251__$1);
var G__62254 = cljs.core.chunk_rest(seq__61592_62251__$1);
var G__62255 = c__4679__auto___62252;
var G__62256 = cljs.core.count(c__4679__auto___62252);
var G__62257 = (0);
seq__61592_62192 = G__62254;
chunk__61596_62193 = G__62255;
count__61597_62194 = G__62256;
i__61598_62195 = G__62257;
continue;
} else {
var node_62259 = cljs.core.first(seq__61592_62251__$1);
if(cljs.core.not(node_62259.shadow$old)){
var path_match_62260 = shadow.cljs.devtools.client.browser.match_paths(node_62259.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62260)){
var new_link_62261 = (function (){var G__61703 = node_62259.cloneNode(true);
G__61703.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62260),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61703;
})();
(node_62259.shadow$old = true);

(new_link_62261.onload = ((function (seq__61592_62192,chunk__61596_62193,count__61597_62194,i__61598_62195,seq__61379,chunk__61381,count__61382,i__61383,new_link_62261,path_match_62260,node_62259,seq__61592_62251__$1,temp__5753__auto___62250,path,map__61377,map__61377__$1,msg,updates,reload_info){
return (function (e){
var seq__61707_62267 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61709_62268 = null;
var count__61710_62269 = (0);
var i__61711_62270 = (0);
while(true){
if((i__61711_62270 < count__61710_62269)){
var map__61722_62271 = chunk__61709_62268.cljs$core$IIndexed$_nth$arity$2(null,i__61711_62270);
var map__61722_62272__$1 = cljs.core.__destructure_map(map__61722_62271);
var task_62273 = map__61722_62272__$1;
var fn_str_62274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61722_62272__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61722_62272__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62277 = goog.getObjectByName(fn_str_62274,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62275)].join(''));

(fn_obj_62277.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62277.cljs$core$IFn$_invoke$arity$2(path,new_link_62261) : fn_obj_62277.call(null,path,new_link_62261));


var G__62279 = seq__61707_62267;
var G__62280 = chunk__61709_62268;
var G__62281 = count__61710_62269;
var G__62282 = (i__61711_62270 + (1));
seq__61707_62267 = G__62279;
chunk__61709_62268 = G__62280;
count__61710_62269 = G__62281;
i__61711_62270 = G__62282;
continue;
} else {
var temp__5753__auto___62283__$1 = cljs.core.seq(seq__61707_62267);
if(temp__5753__auto___62283__$1){
var seq__61707_62285__$1 = temp__5753__auto___62283__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61707_62285__$1)){
var c__4679__auto___62287 = cljs.core.chunk_first(seq__61707_62285__$1);
var G__62288 = cljs.core.chunk_rest(seq__61707_62285__$1);
var G__62289 = c__4679__auto___62287;
var G__62290 = cljs.core.count(c__4679__auto___62287);
var G__62291 = (0);
seq__61707_62267 = G__62288;
chunk__61709_62268 = G__62289;
count__61710_62269 = G__62290;
i__61711_62270 = G__62291;
continue;
} else {
var map__61726_62292 = cljs.core.first(seq__61707_62285__$1);
var map__61726_62293__$1 = cljs.core.__destructure_map(map__61726_62292);
var task_62294 = map__61726_62293__$1;
var fn_str_62295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61726_62293__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61726_62293__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62297 = goog.getObjectByName(fn_str_62295,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62296)].join(''));

(fn_obj_62297.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62297.cljs$core$IFn$_invoke$arity$2(path,new_link_62261) : fn_obj_62297.call(null,path,new_link_62261));


var G__62299 = cljs.core.next(seq__61707_62285__$1);
var G__62300 = null;
var G__62301 = (0);
var G__62302 = (0);
seq__61707_62267 = G__62299;
chunk__61709_62268 = G__62300;
count__61710_62269 = G__62301;
i__61711_62270 = G__62302;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62259);
});})(seq__61592_62192,chunk__61596_62193,count__61597_62194,i__61598_62195,seq__61379,chunk__61381,count__61382,i__61383,new_link_62261,path_match_62260,node_62259,seq__61592_62251__$1,temp__5753__auto___62250,path,map__61377,map__61377__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62260], 0));

goog.dom.insertSiblingAfter(new_link_62261,node_62259);


var G__62308 = cljs.core.next(seq__61592_62251__$1);
var G__62309 = null;
var G__62310 = (0);
var G__62311 = (0);
seq__61592_62192 = G__62308;
chunk__61596_62193 = G__62309;
count__61597_62194 = G__62310;
i__61598_62195 = G__62311;
continue;
} else {
var G__62313 = cljs.core.next(seq__61592_62251__$1);
var G__62314 = null;
var G__62315 = (0);
var G__62316 = (0);
seq__61592_62192 = G__62313;
chunk__61596_62193 = G__62314;
count__61597_62194 = G__62315;
i__61598_62195 = G__62316;
continue;
}
} else {
var G__62318 = cljs.core.next(seq__61592_62251__$1);
var G__62319 = null;
var G__62320 = (0);
var G__62321 = (0);
seq__61592_62192 = G__62318;
chunk__61596_62193 = G__62319;
count__61597_62194 = G__62320;
i__61598_62195 = G__62321;
continue;
}
}
} else {
}
}
break;
}


var G__62323 = seq__61379;
var G__62324 = chunk__61381;
var G__62325 = count__61382;
var G__62326 = (i__61383 + (1));
seq__61379 = G__62323;
chunk__61381 = G__62324;
count__61382 = G__62325;
i__61383 = G__62326;
continue;
} else {
var G__62328 = seq__61379;
var G__62329 = chunk__61381;
var G__62330 = count__61382;
var G__62331 = (i__61383 + (1));
seq__61379 = G__62328;
chunk__61381 = G__62329;
count__61382 = G__62330;
i__61383 = G__62331;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61379);
if(temp__5753__auto__){
var seq__61379__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61379__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61379__$1);
var G__62333 = cljs.core.chunk_rest(seq__61379__$1);
var G__62334 = c__4679__auto__;
var G__62335 = cljs.core.count(c__4679__auto__);
var G__62336 = (0);
seq__61379 = G__62333;
chunk__61381 = G__62334;
count__61382 = G__62335;
i__61383 = G__62336;
continue;
} else {
var path = cljs.core.first(seq__61379__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61743_62339 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61747_62340 = null;
var count__61748_62341 = (0);
var i__61749_62342 = (0);
while(true){
if((i__61749_62342 < count__61748_62341)){
var node_62343 = chunk__61747_62340.cljs$core$IIndexed$_nth$arity$2(null,i__61749_62342);
if(cljs.core.not(node_62343.shadow$old)){
var path_match_62344 = shadow.cljs.devtools.client.browser.match_paths(node_62343.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62344)){
var new_link_62345 = (function (){var G__61796 = node_62343.cloneNode(true);
G__61796.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62344),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61796;
})();
(node_62343.shadow$old = true);

(new_link_62345.onload = ((function (seq__61743_62339,chunk__61747_62340,count__61748_62341,i__61749_62342,seq__61379,chunk__61381,count__61382,i__61383,new_link_62345,path_match_62344,node_62343,path,seq__61379__$1,temp__5753__auto__,map__61377,map__61377__$1,msg,updates,reload_info){
return (function (e){
var seq__61797_62349 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61799_62350 = null;
var count__61800_62351 = (0);
var i__61801_62352 = (0);
while(true){
if((i__61801_62352 < count__61800_62351)){
var map__61808_62358 = chunk__61799_62350.cljs$core$IIndexed$_nth$arity$2(null,i__61801_62352);
var map__61808_62359__$1 = cljs.core.__destructure_map(map__61808_62358);
var task_62360 = map__61808_62359__$1;
var fn_str_62361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61808_62359__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61808_62359__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62365 = goog.getObjectByName(fn_str_62361,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62362)].join(''));

(fn_obj_62365.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62365.cljs$core$IFn$_invoke$arity$2(path,new_link_62345) : fn_obj_62365.call(null,path,new_link_62345));


var G__62367 = seq__61797_62349;
var G__62368 = chunk__61799_62350;
var G__62369 = count__61800_62351;
var G__62370 = (i__61801_62352 + (1));
seq__61797_62349 = G__62367;
chunk__61799_62350 = G__62368;
count__61800_62351 = G__62369;
i__61801_62352 = G__62370;
continue;
} else {
var temp__5753__auto___62374__$1 = cljs.core.seq(seq__61797_62349);
if(temp__5753__auto___62374__$1){
var seq__61797_62376__$1 = temp__5753__auto___62374__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61797_62376__$1)){
var c__4679__auto___62377 = cljs.core.chunk_first(seq__61797_62376__$1);
var G__62378 = cljs.core.chunk_rest(seq__61797_62376__$1);
var G__62379 = c__4679__auto___62377;
var G__62380 = cljs.core.count(c__4679__auto___62377);
var G__62381 = (0);
seq__61797_62349 = G__62378;
chunk__61799_62350 = G__62379;
count__61800_62351 = G__62380;
i__61801_62352 = G__62381;
continue;
} else {
var map__61809_62382 = cljs.core.first(seq__61797_62376__$1);
var map__61809_62383__$1 = cljs.core.__destructure_map(map__61809_62382);
var task_62384 = map__61809_62383__$1;
var fn_str_62385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61809_62383__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61809_62383__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62387 = goog.getObjectByName(fn_str_62385,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62386)].join(''));

(fn_obj_62387.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62387.cljs$core$IFn$_invoke$arity$2(path,new_link_62345) : fn_obj_62387.call(null,path,new_link_62345));


var G__62388 = cljs.core.next(seq__61797_62376__$1);
var G__62389 = null;
var G__62390 = (0);
var G__62391 = (0);
seq__61797_62349 = G__62388;
chunk__61799_62350 = G__62389;
count__61800_62351 = G__62390;
i__61801_62352 = G__62391;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62343);
});})(seq__61743_62339,chunk__61747_62340,count__61748_62341,i__61749_62342,seq__61379,chunk__61381,count__61382,i__61383,new_link_62345,path_match_62344,node_62343,path,seq__61379__$1,temp__5753__auto__,map__61377,map__61377__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62344], 0));

goog.dom.insertSiblingAfter(new_link_62345,node_62343);


var G__62392 = seq__61743_62339;
var G__62393 = chunk__61747_62340;
var G__62394 = count__61748_62341;
var G__62395 = (i__61749_62342 + (1));
seq__61743_62339 = G__62392;
chunk__61747_62340 = G__62393;
count__61748_62341 = G__62394;
i__61749_62342 = G__62395;
continue;
} else {
var G__62396 = seq__61743_62339;
var G__62397 = chunk__61747_62340;
var G__62398 = count__61748_62341;
var G__62399 = (i__61749_62342 + (1));
seq__61743_62339 = G__62396;
chunk__61747_62340 = G__62397;
count__61748_62341 = G__62398;
i__61749_62342 = G__62399;
continue;
}
} else {
var G__62400 = seq__61743_62339;
var G__62401 = chunk__61747_62340;
var G__62402 = count__61748_62341;
var G__62403 = (i__61749_62342 + (1));
seq__61743_62339 = G__62400;
chunk__61747_62340 = G__62401;
count__61748_62341 = G__62402;
i__61749_62342 = G__62403;
continue;
}
} else {
var temp__5753__auto___62404__$1 = cljs.core.seq(seq__61743_62339);
if(temp__5753__auto___62404__$1){
var seq__61743_62405__$1 = temp__5753__auto___62404__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61743_62405__$1)){
var c__4679__auto___62406 = cljs.core.chunk_first(seq__61743_62405__$1);
var G__62407 = cljs.core.chunk_rest(seq__61743_62405__$1);
var G__62408 = c__4679__auto___62406;
var G__62409 = cljs.core.count(c__4679__auto___62406);
var G__62410 = (0);
seq__61743_62339 = G__62407;
chunk__61747_62340 = G__62408;
count__61748_62341 = G__62409;
i__61749_62342 = G__62410;
continue;
} else {
var node_62411 = cljs.core.first(seq__61743_62405__$1);
if(cljs.core.not(node_62411.shadow$old)){
var path_match_62412 = shadow.cljs.devtools.client.browser.match_paths(node_62411.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62412)){
var new_link_62413 = (function (){var G__61817 = node_62411.cloneNode(true);
G__61817.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62412),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61817;
})();
(node_62411.shadow$old = true);

(new_link_62413.onload = ((function (seq__61743_62339,chunk__61747_62340,count__61748_62341,i__61749_62342,seq__61379,chunk__61381,count__61382,i__61383,new_link_62413,path_match_62412,node_62411,seq__61743_62405__$1,temp__5753__auto___62404__$1,path,seq__61379__$1,temp__5753__auto__,map__61377,map__61377__$1,msg,updates,reload_info){
return (function (e){
var seq__61820_62415 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61822_62416 = null;
var count__61823_62417 = (0);
var i__61824_62418 = (0);
while(true){
if((i__61824_62418 < count__61823_62417)){
var map__61831_62419 = chunk__61822_62416.cljs$core$IIndexed$_nth$arity$2(null,i__61824_62418);
var map__61831_62420__$1 = cljs.core.__destructure_map(map__61831_62419);
var task_62421 = map__61831_62420__$1;
var fn_str_62422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61831_62420__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61831_62420__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62424 = goog.getObjectByName(fn_str_62422,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62423)].join(''));

(fn_obj_62424.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62424.cljs$core$IFn$_invoke$arity$2(path,new_link_62413) : fn_obj_62424.call(null,path,new_link_62413));


var G__62427 = seq__61820_62415;
var G__62428 = chunk__61822_62416;
var G__62429 = count__61823_62417;
var G__62430 = (i__61824_62418 + (1));
seq__61820_62415 = G__62427;
chunk__61822_62416 = G__62428;
count__61823_62417 = G__62429;
i__61824_62418 = G__62430;
continue;
} else {
var temp__5753__auto___62431__$2 = cljs.core.seq(seq__61820_62415);
if(temp__5753__auto___62431__$2){
var seq__61820_62432__$1 = temp__5753__auto___62431__$2;
if(cljs.core.chunked_seq_QMARK_(seq__61820_62432__$1)){
var c__4679__auto___62433 = cljs.core.chunk_first(seq__61820_62432__$1);
var G__62434 = cljs.core.chunk_rest(seq__61820_62432__$1);
var G__62435 = c__4679__auto___62433;
var G__62436 = cljs.core.count(c__4679__auto___62433);
var G__62437 = (0);
seq__61820_62415 = G__62434;
chunk__61822_62416 = G__62435;
count__61823_62417 = G__62436;
i__61824_62418 = G__62437;
continue;
} else {
var map__61849_62438 = cljs.core.first(seq__61820_62432__$1);
var map__61849_62439__$1 = cljs.core.__destructure_map(map__61849_62438);
var task_62440 = map__61849_62439__$1;
var fn_str_62441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61849_62439__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61849_62439__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62443 = goog.getObjectByName(fn_str_62441,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62442)].join(''));

(fn_obj_62443.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62443.cljs$core$IFn$_invoke$arity$2(path,new_link_62413) : fn_obj_62443.call(null,path,new_link_62413));


var G__62444 = cljs.core.next(seq__61820_62432__$1);
var G__62445 = null;
var G__62446 = (0);
var G__62447 = (0);
seq__61820_62415 = G__62444;
chunk__61822_62416 = G__62445;
count__61823_62417 = G__62446;
i__61824_62418 = G__62447;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62411);
});})(seq__61743_62339,chunk__61747_62340,count__61748_62341,i__61749_62342,seq__61379,chunk__61381,count__61382,i__61383,new_link_62413,path_match_62412,node_62411,seq__61743_62405__$1,temp__5753__auto___62404__$1,path,seq__61379__$1,temp__5753__auto__,map__61377,map__61377__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62412], 0));

goog.dom.insertSiblingAfter(new_link_62413,node_62411);


var G__62450 = cljs.core.next(seq__61743_62405__$1);
var G__62451 = null;
var G__62452 = (0);
var G__62453 = (0);
seq__61743_62339 = G__62450;
chunk__61747_62340 = G__62451;
count__61748_62341 = G__62452;
i__61749_62342 = G__62453;
continue;
} else {
var G__62454 = cljs.core.next(seq__61743_62405__$1);
var G__62455 = null;
var G__62456 = (0);
var G__62457 = (0);
seq__61743_62339 = G__62454;
chunk__61747_62340 = G__62455;
count__61748_62341 = G__62456;
i__61749_62342 = G__62457;
continue;
}
} else {
var G__62460 = cljs.core.next(seq__61743_62405__$1);
var G__62461 = null;
var G__62462 = (0);
var G__62463 = (0);
seq__61743_62339 = G__62460;
chunk__61747_62340 = G__62461;
count__61748_62341 = G__62462;
i__61749_62342 = G__62463;
continue;
}
}
} else {
}
}
break;
}


var G__62465 = cljs.core.next(seq__61379__$1);
var G__62466 = null;
var G__62467 = (0);
var G__62468 = (0);
seq__61379 = G__62465;
chunk__61381 = G__62466;
count__61382 = G__62467;
i__61383 = G__62468;
continue;
} else {
var G__62470 = cljs.core.next(seq__61379__$1);
var G__62471 = null;
var G__62472 = (0);
var G__62473 = (0);
seq__61379 = G__62470;
chunk__61381 = G__62471;
count__61382 = G__62472;
i__61383 = G__62473;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__61860){
var map__61863 = p__61860;
var map__61863__$1 = cljs.core.__destructure_map(map__61863);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__61883){
var map__61884 = p__61883;
var map__61884__$1 = cljs.core.__destructure_map(map__61884);
var _ = map__61884__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61884__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__61891,done,error){
var map__61894 = p__61891;
var map__61894__$1 = cljs.core.__destructure_map(map__61894);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__61901,done,error){
var map__61903 = p__61901;
var map__61903__$1 = cljs.core.__destructure_map(map__61903);
var msg = map__61903__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61903__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61903__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61903__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61910){
var map__61911 = p__61910;
var map__61911__$1 = cljs.core.__destructure_map(map__61911);
var src = map__61911__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61911__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__61919 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__61919) : done.call(null,G__61919));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__61940){
var map__61941 = p__61940;
var map__61941__$1 = cljs.core.__destructure_map(map__61941);
var msg__$1 = map__61941__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61941__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e61943){var ex = e61943;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__61948){
var map__61949 = p__61948;
var map__61949__$1 = cljs.core.__destructure_map(map__61949);
var env = map__61949__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61949__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__62039){
var map__62040 = p__62039;
var map__62040__$1 = cljs.core.__destructure_map(map__62040);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62040__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62040__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__62064){
var map__62065 = p__62064;
var map__62065__$1 = cljs.core.__destructure_map(map__62065);
var svc = map__62065__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62065__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
