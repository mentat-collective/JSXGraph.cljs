import "./cljs_env.js";
goog.provide('devtools.formatters');
goog.scope(function(){
  devtools.formatters.goog$module$goog$labs$userAgent$browser = goog.module.get('goog.labs.userAgent.browser');
});
devtools.formatters._STAR_installed_STAR_ = false;
devtools.formatters._STAR_sanitizer_enabled_STAR_ = true;
devtools.formatters._STAR_monitor_enabled_STAR_ = false;
devtools.formatters.obsolete_formatter_key = "devtoolsFormatter";
devtools.formatters.available_QMARK_ = (function devtools$formatters$available_QMARK_(){
var or__4253__auto__ = devtools.util.in_node_context_QMARK_.call(null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = devtools.formatters.goog$module$goog$labs$userAgent$browser.isChrome();
if(cljs.core.truth_(and__4251__auto__)){
return devtools.formatters.goog$module$goog$labs$userAgent$browser.isVersionOrHigher((47));
} else {
return and__4251__auto__;
}
}
});

/**
* @constructor
*/
devtools.formatters.CLJSDevtoolsFormatter = (function (){
});

(devtools.formatters.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$type = true);

(devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.formatters/CLJSDevtoolsFormatter");

(devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"devtools.formatters/CLJSDevtoolsFormatter");
}));

/**
 * Positional factory function for devtools.formatters/CLJSDevtoolsFormatter.
 */
devtools.formatters.__GT_CLJSDevtoolsFormatter = (function devtools$formatters$__GT_CLJSDevtoolsFormatter(){
return (new devtools.formatters.CLJSDevtoolsFormatter());
});

devtools.formatters.find_fn_in_debug_ns = (function devtools$formatters$find_fn_in_debug_ns(fn_name){
try{return (devtools.context.get_root.call(null)["devtools"]["debug"][fn_name]);
}catch (e59918){var _ = e59918;
return null;
}});
devtools.formatters.monitor_api_call_if_avail = (function devtools$formatters$monitor_api_call_if_avail(name,api_call,args){
var temp__5751__auto__ = devtools.formatters.find_fn_in_debug_ns("monitor_api_call");
if(cljs.core.truth_(temp__5751__auto__)){
var monitor_api_call = temp__5751__auto__;
return (monitor_api_call.cljs$core$IFn$_invoke$arity$3 ? monitor_api_call.cljs$core$IFn$_invoke$arity$3(name,api_call,args) : monitor_api_call.call(null,name,api_call,args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}
});
devtools.formatters.log_exception_if_avail = (function devtools$formatters$log_exception_if_avail(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59921 = arguments.length;
var i__4865__auto___59922 = (0);
while(true){
if((i__4865__auto___59922 < len__4864__auto___59921)){
args__4870__auto__.push((arguments[i__4865__auto___59922]));

var G__59923 = (i__4865__auto___59922 + (1));
i__4865__auto___59922 = G__59923;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__5751__auto__ = devtools.formatters.find_fn_in_debug_ns("log_exception");
if(cljs.core.truth_(temp__5751__auto__)){
var log_exception = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(log_exception,args);
} else {
return null;
}
}));

(devtools.formatters.log_exception_if_avail.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq59919){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59919));
}));

devtools.formatters.monitor_api_calls = (function devtools$formatters$monitor_api_calls(name,api_call){
return (function() { 
var G__59924__delegate = function (args){
if(cljs.core.not(devtools.formatters._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
return devtools.formatters.monitor_api_call_if_avail(name,api_call,args);
}
};
var G__59924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59925__i = 0, G__59925__a = new Array(arguments.length -  0);
while (G__59925__i < G__59925__a.length) {G__59925__a[G__59925__i] = arguments[G__59925__i + 0]; ++G__59925__i;}
  args = new cljs.core.IndexedSeq(G__59925__a,0,null);
} 
return G__59924__delegate.call(this,args);};
G__59924.cljs$lang$maxFixedArity = 0;
G__59924.cljs$lang$applyTo = (function (arglist__59926){
var args = cljs.core.seq(arglist__59926);
return G__59924__delegate(args);
});
G__59924.cljs$core$IFn$_invoke$arity$variadic = G__59924__delegate;
return G__59924;
})()
;
});
devtools.formatters.sanitize = (function devtools$formatters$sanitize(name,api_call){
return (function() { 
var G__59927__delegate = function (args){
if(cljs.core.not(devtools.formatters._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}catch (e59920){var e = e59920;
devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], 0));

return null;
}}
};
var G__59927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59928__i = 0, G__59928__a = new Array(arguments.length -  0);
while (G__59928__i < G__59928__a.length) {G__59928__a[G__59928__i] = arguments[G__59928__i + 0]; ++G__59928__i;}
  args = new cljs.core.IndexedSeq(G__59928__a,0,null);
} 
return G__59927__delegate.call(this,args);};
G__59927.cljs$lang$maxFixedArity = 0;
G__59927.cljs$lang$applyTo = (function (arglist__59929){
var args = cljs.core.seq(arglist__59929);
return G__59927__delegate(args);
});
G__59927.cljs$core$IFn$_invoke$arity$variadic = G__59927__delegate;
return G__59927;
})()
;
});
devtools.formatters.build_cljs_formatter = (function devtools$formatters$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.monitor_api_calls,name);
var sanitizer = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.sanitize,name);
cljs.core.comp.cljs$core$IFn$_invoke$arity$2(monitor,sanitizer)(api_call);

return api_call;
});
var formatter = (new devtools.formatters.CLJSDevtoolsFormatter());
var define_BANG_ = (function (name,fn){
return (formatter[name] = wrap(name,fn));
});
define_BANG_("header",devtools.formatters.core.header_api_call);

define_BANG_("hasBody",devtools.formatters.core.has_body_api_call);

define_BANG_("body",devtools.formatters.core.body_api_call);

return formatter;
});
devtools.formatters.is_ours_QMARK_ = (function devtools$formatters$is_ours_QMARK_(o){
return (o instanceof devtools.formatters.CLJSDevtoolsFormatter);
});
devtools.formatters.install_our_formatter_BANG_ = (function devtools$formatters$install_our_formatter_BANG_(formatter){
var formatters = devtools.util.get_formatters_safe().slice();
formatters.push(formatter);

devtools.util.set_formatters_safe_BANG_(formatters);

if(cljs.core.truth_(devtools.prefs.pref(new cljs.core.Keyword(null,"legacy-formatter","legacy-formatter",-1954119499)))){
return (devtools.context.get_root.call(null)[devtools.formatters.obsolete_formatter_key] = formatter);
} else {
return null;
}
});
devtools.formatters.uninstall_our_formatters_BANG_ = (function devtools$formatters$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.is_ours_QMARK_,cljs.core.vec(devtools.util.get_formatters_safe()));
var new_formatters_js = ((cljs.core.empty_QMARK_(new_formatters))?null:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new_formatters));
return devtools.util.set_formatters_safe_BANG_(new_formatters_js);
});
devtools.formatters.installed_QMARK_ = (function devtools$formatters$installed_QMARK_(){
return devtools.formatters._STAR_installed_STAR_;
});
devtools.formatters.install_BANG_ = (function devtools$formatters$install_BANG_(){
if(cljs.core.truth_(devtools.formatters._STAR_installed_STAR_)){
return null;
} else {
(devtools.formatters._STAR_installed_STAR_ = true);

devtools.formatters.install_our_formatter_BANG_(devtools.formatters.build_cljs_formatter());

return true;
}
});
devtools.formatters.uninstall_BANG_ = (function devtools$formatters$uninstall_BANG_(){
if(cljs.core.truth_(devtools.formatters._STAR_installed_STAR_)){
(devtools.formatters._STAR_installed_STAR_ = false);

return devtools.formatters.uninstall_our_formatters_BANG_();
} else {
return null;
}
});
devtools.formatters.present_QMARK_ = (function devtools$formatters$present_QMARK_(){
var formatters = devtools.util.get_formatters_safe();
return cljs.core.boolean$(cljs.core.some(devtools.formatters.is_ours_QMARK_,formatters));
});

//# sourceMappingURL=devtools.formatters.js.map
