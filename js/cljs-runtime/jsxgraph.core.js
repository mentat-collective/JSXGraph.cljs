goog.provide('jsxgraph.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof jsxgraph !== 'undefined') && (typeof jsxgraph.core !== 'undefined') && (typeof jsxgraph.core.board_context !== 'undefined')){
} else {
/**
 * We use this context like a dynamic variable, to provide each
 *         component with a `board` instance that's accessible without passing
 *         the board down via `props`.
 */
jsxgraph.core.board_context = module$node_modules$react$index.createContext(null);
}
/**
 * Use like
 * 
 * ```clj
 * [:> Provider {:value <board>} <children>]
 * ```
 * 
 * to provide any element in `<children>` with access to the bound `board` instance
 *   via `(react/useContext board-context)`.
 */
jsxgraph.core.Provider = jsxgraph.core.board_context.Provider;
/**
 * TODO document
 */
jsxgraph.core.create = (function jsxgraph$core$create(board,name,elems,props){
var p = board.create(name,cljs.core.clj__GT_js(elems),cljs.core.clj__GT_js(props));
var temp__5753__auto___59347 = (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1("on") : props.call(null,"on"));
if(cljs.core.truth_(temp__5753__auto___59347)){
var m_59348 = temp__5753__auto___59347;
var seq__59318_59349 = cljs.core.seq(m_59348);
var chunk__59319_59350 = null;
var count__59320_59351 = (0);
var i__59321_59352 = (0);
while(true){
if((i__59321_59352 < count__59320_59351)){
var vec__59328_59353 = chunk__59319_59350.cljs$core$IIndexed$_nth$arity$2(null,i__59321_59352);
var k_59354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59328_59353,(0),null);
var f_59355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59328_59353,(1),null);
var callback_59356 = ((function (seq__59318_59349,chunk__59319_59350,count__59320_59351,i__59321_59352,vec__59328_59353,k_59354,f_59355,m_59348,temp__5753__auto___59347,p){
return (function (_){
var elem = this;
return (f_59355.cljs$core$IFn$_invoke$arity$1 ? f_59355.cljs$core$IFn$_invoke$arity$1(elem) : f_59355.call(null,elem));
});})(seq__59318_59349,chunk__59319_59350,count__59320_59351,i__59321_59352,vec__59328_59353,k_59354,f_59355,m_59348,temp__5753__auto___59347,p))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_59354,"update")){
var temp__5751__auto___59357 = p.coords;
if(cljs.core.truth_(temp__5751__auto___59357)){
var coords_59358 = temp__5751__auto___59357;
coords_59358.on("update",callback_59356);
} else {
board.on("update",callback_59356);
}
} else {
p.on(k_59354,callback_59356);
}


var G__59359 = seq__59318_59349;
var G__59360 = chunk__59319_59350;
var G__59361 = count__59320_59351;
var G__59362 = (i__59321_59352 + (1));
seq__59318_59349 = G__59359;
chunk__59319_59350 = G__59360;
count__59320_59351 = G__59361;
i__59321_59352 = G__59362;
continue;
} else {
var temp__5753__auto___59363__$1 = cljs.core.seq(seq__59318_59349);
if(temp__5753__auto___59363__$1){
var seq__59318_59364__$1 = temp__5753__auto___59363__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59318_59364__$1)){
var c__4679__auto___59365 = cljs.core.chunk_first(seq__59318_59364__$1);
var G__59366 = cljs.core.chunk_rest(seq__59318_59364__$1);
var G__59367 = c__4679__auto___59365;
var G__59368 = cljs.core.count(c__4679__auto___59365);
var G__59369 = (0);
seq__59318_59349 = G__59366;
chunk__59319_59350 = G__59367;
count__59320_59351 = G__59368;
i__59321_59352 = G__59369;
continue;
} else {
var vec__59331_59370 = cljs.core.first(seq__59318_59364__$1);
var k_59371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59331_59370,(0),null);
var f_59372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59331_59370,(1),null);
var callback_59373 = ((function (seq__59318_59349,chunk__59319_59350,count__59320_59351,i__59321_59352,vec__59331_59370,k_59371,f_59372,seq__59318_59364__$1,temp__5753__auto___59363__$1,m_59348,temp__5753__auto___59347,p){
return (function (_){
var elem = this;
return (f_59372.cljs$core$IFn$_invoke$arity$1 ? f_59372.cljs$core$IFn$_invoke$arity$1(elem) : f_59372.call(null,elem));
});})(seq__59318_59349,chunk__59319_59350,count__59320_59351,i__59321_59352,vec__59331_59370,k_59371,f_59372,seq__59318_59364__$1,temp__5753__auto___59363__$1,m_59348,temp__5753__auto___59347,p))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_59371,"update")){
var temp__5751__auto___59374 = p.coords;
if(cljs.core.truth_(temp__5751__auto___59374)){
var coords_59375 = temp__5751__auto___59374;
coords_59375.on("update",callback_59373);
} else {
board.on("update",callback_59373);
}
} else {
p.on(k_59371,callback_59373);
}


var G__59376 = cljs.core.next(seq__59318_59364__$1);
var G__59377 = null;
var G__59378 = (0);
var G__59379 = (0);
seq__59318_59349 = G__59376;
chunk__59319_59350 = G__59377;
count__59320_59351 = G__59378;
i__59321_59352 = G__59379;
continue;
}
} else {
}
}
break;
}
} else {
}

return p;
});
jsxgraph.core.element = (function jsxgraph$core$element(name){
return reagent.core.adapt_react_class(module$node_modules$react$index.forwardRef((function (props,ref){
var board = module$node_modules$react$index.useContext(jsxgraph.core.board_context);
var map__59334 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(props);
var map__59334__$1 = cljs.core.__destructure_map(map__59334);
var props__$1 = map__59334__$1;
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59334__$1,"parents");
var props__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props__$1,"parents");
if(cljs.core.truth_(parents)){
} else {
throw (new Error("No parents! TODO list the class etc"));
}

module$node_modules$react$index.useEffect((function jsxgraph$core$element_$_mount(){
if(cljs.core.truth_((function (){var and__4251__auto__ = board;
if(cljs.core.truth_(and__4251__auto__)){
return board.renderer;
} else {
return and__4251__auto__;
}
})())){
var item = jsxgraph.core.create(board,name,parents,props__$2);
if(cljs.core.truth_(ref)){
(ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(item) : ref.call(null,item));
} else {
}

return (function jsxgraph$core$element_$_mount_$_unmount(){
if(cljs.core.truth_(board)){
board.removeObject(item);
} else {
}

if(cljs.core.truth_(ref)){
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(null) : ref.call(null,null));
} else {
return null;
}
});
} else {
return null;
}
}));

return null;
})));
});
jsxgraph.core.k__GT_elem = cljs.core.PersistentHashMap.fromArrays(["perpendicular","hatch","parabola","minorarc","incircle","nonreflexangle","curve","curveintersection","mirrorpoint","sector","bisector","parallelpoint","arrow","transformation","grid","perpendicularpoint","mirrorelement","polygonalchain","group","tangent","parallel","view3d","image","segment","circumcirclesector","integral","curveunion","label","foreignobject","metapostspline","derivative","reflexangle","incenter","axis","radicalaxis","chart","tracecurve","locus","majorarc","circumcircle","legend","semicircle","checkbox","slider","curvedifference","tapemeasure","normal","angle","inequality","boxplot","circumcenter","spline","ellipse","polarline","regularpolygon","minorsector","turtle","riemannsum","cardinalspline","hyperbola","text","stepfunction","slopetriangle","intersection","point3d","Curve3d","functiongraph3d","arc","majorsector","input","line","ticks","reflection","polygon","circumcirclearc","arrowparallel","perpendicularsegment","bisectorlines","polepoint","otherintersection","functiongraph","conic","glider","orthogonalprojection","circle","parametricsurface3d","point","midpoint","Line3d","comb","button"],[jsxgraph.core.element("perpendicular"),jsxgraph.core.element("hatch"),jsxgraph.core.element("parabola"),jsxgraph.core.element("minorarc"),jsxgraph.core.element("incircle"),jsxgraph.core.element("nonreflexangle"),jsxgraph.core.element("curve"),jsxgraph.core.element("curveintersection"),jsxgraph.core.element("mirrorpoint"),jsxgraph.core.element("sector"),jsxgraph.core.element("bisector"),jsxgraph.core.element("parallelpoint"),jsxgraph.core.element("arrow"),jsxgraph.core.element("transformation"),jsxgraph.core.element("grid"),jsxgraph.core.element("perpendicularpoint"),jsxgraph.core.element("mirrorelement"),jsxgraph.core.element("polygonalchain"),jsxgraph.core.element("group"),jsxgraph.core.element("tangent"),jsxgraph.core.element("parallel"),jsxgraph.core.element("view3d"),jsxgraph.core.element("image"),jsxgraph.core.element("segment"),jsxgraph.core.element("circumcirclesector"),jsxgraph.core.element("integral"),jsxgraph.core.element("curveunion"),jsxgraph.core.element("label"),jsxgraph.core.element("foreignobject"),jsxgraph.core.element("metapostspline"),jsxgraph.core.element("derivative"),jsxgraph.core.element("reflexangle"),jsxgraph.core.element("incenter"),jsxgraph.core.element("axis"),jsxgraph.core.element("radicalaxis"),jsxgraph.core.element("chart"),jsxgraph.core.element("tracecurve"),jsxgraph.core.element("locus"),jsxgraph.core.element("majorarc"),jsxgraph.core.element("circumcircle"),jsxgraph.core.element("legend"),jsxgraph.core.element("semicircle"),jsxgraph.core.element("checkbox"),jsxgraph.core.element("slider"),jsxgraph.core.element("curvedifference"),jsxgraph.core.element("tapemeasure"),jsxgraph.core.element("normal"),jsxgraph.core.element("angle"),jsxgraph.core.element("inequality"),jsxgraph.core.element("boxplot"),jsxgraph.core.element("circumcenter"),jsxgraph.core.element("spline"),jsxgraph.core.element("ellipse"),jsxgraph.core.element("polarline"),jsxgraph.core.element("regularpolygon"),jsxgraph.core.element("minorsector"),jsxgraph.core.element("turtle"),jsxgraph.core.element("riemannsum"),jsxgraph.core.element("cardinalspline"),jsxgraph.core.element("hyperbola"),jsxgraph.core.element("text"),jsxgraph.core.element("stepfunction"),jsxgraph.core.element("slopetriangle"),jsxgraph.core.element("intersection"),jsxgraph.core.element("point3d"),jsxgraph.core.element("Curve3d"),jsxgraph.core.element("functiongraph3d"),jsxgraph.core.element("arc"),jsxgraph.core.element("majorsector"),jsxgraph.core.element("input"),jsxgraph.core.element("line"),jsxgraph.core.element("ticks"),jsxgraph.core.element("reflection"),jsxgraph.core.element("polygon"),jsxgraph.core.element("circumcirclearc"),jsxgraph.core.element("arrowparallel"),jsxgraph.core.element("perpendicularsegment"),jsxgraph.core.element("bisectorlines"),jsxgraph.core.element("polepoint"),jsxgraph.core.element("otherintersection"),jsxgraph.core.element("functiongraph"),jsxgraph.core.element("conic"),jsxgraph.core.element("glider"),jsxgraph.core.element("orthogonalprojection"),jsxgraph.core.element("circle"),jsxgraph.core.element("parametricsurface3d"),jsxgraph.core.element("point"),jsxgraph.core.element("midpoint"),jsxgraph.core.element("Line3d"),jsxgraph.core.element("comb"),jsxgraph.core.element("button")]);
/**
 * https://jsxgraph.org/docs/symbols/Angle.html
 */
jsxgraph.core.Angle = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("angle") : jsxgraph.core.k__GT_elem.call(null,"angle"));
/**
 * https://jsxgraph.org/docs/symbols/Arc.html
 */
jsxgraph.core.Arc = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("arc") : jsxgraph.core.k__GT_elem.call(null,"arc"));
/**
 * https://jsxgraph.org/docs/symbols/Arrow.html
 */
jsxgraph.core.Arrow = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("arrow") : jsxgraph.core.k__GT_elem.call(null,"arrow"));
/**
 * https://jsxgraph.org/docs/symbols/ArrowParallel.html
 */
jsxgraph.core.ArrowParallel = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("arrowparallel") : jsxgraph.core.k__GT_elem.call(null,"arrowparallel"));
/**
 * https://jsxgraph.org/docs/symbols/Axis.html
 */
jsxgraph.core.Axis = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("axis") : jsxgraph.core.k__GT_elem.call(null,"axis"));
/**
 * https://jsxgraph.org/docs/symbols/Bisector.html
 */
jsxgraph.core.Bisector = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("bisector") : jsxgraph.core.k__GT_elem.call(null,"bisector"));
/**
 * https://jsxgraph.org/docs/symbols/Bisectorlines.html
 */
jsxgraph.core.Bisectorlines = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("bisectorlines") : jsxgraph.core.k__GT_elem.call(null,"bisectorlines"));
/**
 * https://jsxgraph.org/docs/symbols/Boxplot.html
 */
jsxgraph.core.Boxplot = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("boxplot") : jsxgraph.core.k__GT_elem.call(null,"boxplot"));
/**
 * https://jsxgraph.org/docs/symbols/Button.html
 */
jsxgraph.core.Button = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("button") : jsxgraph.core.k__GT_elem.call(null,"button"));
/**
 * https://jsxgraph.org/docs/symbols/CardinalSpline.html
 */
jsxgraph.core.CardinalSpline = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("cardinalspline") : jsxgraph.core.k__GT_elem.call(null,"cardinalspline"));
/**
 * https://jsxgraph.org/docs/symbols/Chart.html
 */
jsxgraph.core.Chart = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("chart") : jsxgraph.core.k__GT_elem.call(null,"chart"));
/**
 * https://jsxgraph.org/docs/symbols/Checkbox.html
 */
jsxgraph.core.Checkbox = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("checkbox") : jsxgraph.core.k__GT_elem.call(null,"checkbox"));
/**
 * https://jsxgraph.org/docs/symbols/Circle.html
 */
jsxgraph.core.Circle = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("circle") : jsxgraph.core.k__GT_elem.call(null,"circle"));
/**
 * https://jsxgraph.org/docs/symbols/Circumcenter.html
 */
jsxgraph.core.Circumcenter = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("circumcenter") : jsxgraph.core.k__GT_elem.call(null,"circumcenter"));
/**
 * https://jsxgraph.org/docs/symbols/Circumcircle.html
 */
jsxgraph.core.Circumcircle = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("circumcircle") : jsxgraph.core.k__GT_elem.call(null,"circumcircle"));
/**
 * https://jsxgraph.org/docs/symbols/CircumcircleArc.html
 */
jsxgraph.core.CircumcircleArc = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("circumcirclearc") : jsxgraph.core.k__GT_elem.call(null,"circumcirclearc"));
/**
 * https://jsxgraph.org/docs/symbols/CircumcircleSector.html
 */
jsxgraph.core.CircumcircleSector = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("circumcirclesector") : jsxgraph.core.k__GT_elem.call(null,"circumcirclesector"));
/**
 * https://jsxgraph.org/docs/symbols/Comb.html
 */
jsxgraph.core.Comb = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("comb") : jsxgraph.core.k__GT_elem.call(null,"comb"));
/**
 * https://jsxgraph.org/docs/symbols/Conic.html
 */
jsxgraph.core.Conic = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("conic") : jsxgraph.core.k__GT_elem.call(null,"conic"));
/**
 * https://jsxgraph.org/docs/symbols/Curve.html
 */
jsxgraph.core.Curve = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("curve") : jsxgraph.core.k__GT_elem.call(null,"curve"));
/**
 * https://jsxgraph.org/docs/symbols/Curve3D.html
 */
jsxgraph.core.Curve3D = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("Curve3d") : jsxgraph.core.k__GT_elem.call(null,"Curve3d"));
/**
 * https://jsxgraph.org/docs/symbols/CurveDifference.html
 */
jsxgraph.core.CurveDifference = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("curvedifference") : jsxgraph.core.k__GT_elem.call(null,"curvedifference"));
/**
 * https://jsxgraph.org/docs/symbols/CurveIntersection.html
 */
jsxgraph.core.CurveIntersection = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("curveintersection") : jsxgraph.core.k__GT_elem.call(null,"curveintersection"));
/**
 * https://jsxgraph.org/docs/symbols/CurveUnion.html
 */
jsxgraph.core.CurveUnion = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("curveunion") : jsxgraph.core.k__GT_elem.call(null,"curveunion"));
/**
 * https://jsxgraph.org/docs/symbols/Derivative.html
 */
jsxgraph.core.Derivative = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("derivative") : jsxgraph.core.k__GT_elem.call(null,"derivative"));
/**
 * https://jsxgraph.org/docs/symbols/Ellipse.html
 */
jsxgraph.core.Ellipse = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("ellipse") : jsxgraph.core.k__GT_elem.call(null,"ellipse"));
/**
 * https://jsxgraph.org/docs/symbols/ForeignObject.html
 */
jsxgraph.core.ForeignObject = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("foreignobject") : jsxgraph.core.k__GT_elem.call(null,"foreignobject"));
/**
 * https://jsxgraph.org/docs/symbols/FunctionGraph.html
 */
jsxgraph.core.FunctionGraph = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("functiongraph") : jsxgraph.core.k__GT_elem.call(null,"functiongraph"));
/**
 * https://jsxgraph.org/docs/symbols/FunctionGraph3D.html
 */
jsxgraph.core.FunctionGraph3D = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("functiongraph3d") : jsxgraph.core.k__GT_elem.call(null,"functiongraph3d"));
/**
 * https://jsxgraph.org/docs/symbols/Glider.html
 */
jsxgraph.core.Glider = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("glider") : jsxgraph.core.k__GT_elem.call(null,"glider"));
/**
 * https://jsxgraph.org/docs/symbols/Grid.html
 */
jsxgraph.core.Grid = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("grid") : jsxgraph.core.k__GT_elem.call(null,"grid"));
/**
 * https://jsxgraph.org/docs/symbols/Group.html
 */
jsxgraph.core.Group = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("group") : jsxgraph.core.k__GT_elem.call(null,"group"));
/**
 * https://jsxgraph.org/docs/symbols/Hatch.html
 */
jsxgraph.core.Hatch = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("hatch") : jsxgraph.core.k__GT_elem.call(null,"hatch"));
/**
 * https://jsxgraph.org/docs/symbols/Hyperbola.html
 */
jsxgraph.core.Hyperbola = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("hyperbola") : jsxgraph.core.k__GT_elem.call(null,"hyperbola"));
/**
 * https://jsxgraph.org/docs/symbols/Image.html
 */
jsxgraph.core.Image = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("image") : jsxgraph.core.k__GT_elem.call(null,"image"));
/**
 * https://jsxgraph.org/docs/symbols/Incenter.html
 */
jsxgraph.core.Incenter = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("incenter") : jsxgraph.core.k__GT_elem.call(null,"incenter"));
/**
 * https://jsxgraph.org/docs/symbols/Incircle.html
 */
jsxgraph.core.Incircle = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("incircle") : jsxgraph.core.k__GT_elem.call(null,"incircle"));
/**
 * https://jsxgraph.org/docs/symbols/Inequality.html
 */
jsxgraph.core.Inequality = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("inequality") : jsxgraph.core.k__GT_elem.call(null,"inequality"));
/**
 * https://jsxgraph.org/docs/symbols/Input.html
 */
jsxgraph.core.Input = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("input") : jsxgraph.core.k__GT_elem.call(null,"input"));
/**
 * https://jsxgraph.org/docs/symbols/Integral.html
 */
jsxgraph.core.Integral = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("integral") : jsxgraph.core.k__GT_elem.call(null,"integral"));
/**
 * https://jsxgraph.org/docs/symbols/Intersection.html
 */
jsxgraph.core.Intersection = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("intersection") : jsxgraph.core.k__GT_elem.call(null,"intersection"));
/**
 * https://jsxgraph.org/docs/symbols/Label.html
 */
jsxgraph.core.Label = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("label") : jsxgraph.core.k__GT_elem.call(null,"label"));
/**
 * https://jsxgraph.org/docs/symbols/Legend.html
 */
jsxgraph.core.Legend = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("legend") : jsxgraph.core.k__GT_elem.call(null,"legend"));
/**
 * https://jsxgraph.org/docs/symbols/Line.html
 */
jsxgraph.core.Line = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("line") : jsxgraph.core.k__GT_elem.call(null,"line"));
/**
 * https://jsxgraph.org/docs/symbols/Line3D.html
 */
jsxgraph.core.Line3D = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("Line3d") : jsxgraph.core.k__GT_elem.call(null,"Line3d"));
/**
 * https://jsxgraph.org/docs/symbols/Locus.html
 */
jsxgraph.core.Locus = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("locus") : jsxgraph.core.k__GT_elem.call(null,"locus"));
/**
 * https://jsxgraph.org/docs/symbols/MajorArc.html
 */
jsxgraph.core.MajorArc = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("majorarc") : jsxgraph.core.k__GT_elem.call(null,"majorarc"));
/**
 * https://jsxgraph.org/docs/symbols/MajorSector.html
 */
jsxgraph.core.MajorSector = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("majorsector") : jsxgraph.core.k__GT_elem.call(null,"majorsector"));
/**
 * https://jsxgraph.org/docs/symbols/MetapostSpline.html
 */
jsxgraph.core.MetapostSpline = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("metapostspline") : jsxgraph.core.k__GT_elem.call(null,"metapostspline"));
/**
 * https://jsxgraph.org/docs/symbols/Midpoint.html
 */
jsxgraph.core.Midpoint = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("midpoint") : jsxgraph.core.k__GT_elem.call(null,"midpoint"));
/**
 * https://jsxgraph.org/docs/symbols/MinorArc.html
 */
jsxgraph.core.MinorArc = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("minorarc") : jsxgraph.core.k__GT_elem.call(null,"minorarc"));
/**
 * https://jsxgraph.org/docs/symbols/MinorSector.html
 */
jsxgraph.core.MinorSector = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("minorsector") : jsxgraph.core.k__GT_elem.call(null,"minorsector"));
/**
 * https://jsxgraph.org/docs/symbols/Mirr.html
 */
jsxgraph.core.MirrorElement = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("mirrorelement") : jsxgraph.core.k__GT_elem.call(null,"mirrorelement"));
/**
 * https://jsxgraph.org/docs/symbols/MirrorPoint.html
 */
jsxgraph.core.MirrorPoint = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("mirrorpoint") : jsxgraph.core.k__GT_elem.call(null,"mirrorpoint"));
/**
 * https://jsxgraph.org/docs/symbols/NonReflexAngle.html
 */
jsxgraph.core.NonReflexAngle = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("nonreflexangle") : jsxgraph.core.k__GT_elem.call(null,"nonreflexangle"));
/**
 * https://jsxgraph.org/docs/symbols/Normal.html
 */
jsxgraph.core.Normal = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("normal") : jsxgraph.core.k__GT_elem.call(null,"normal"));
/**
 * https://jsxgraph.org/docs/symbols/OrthogonalProjection.html
 */
jsxgraph.core.OrthogonalProjection = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("orthogonalprojection") : jsxgraph.core.k__GT_elem.call(null,"orthogonalprojection"));
/**
 * https://jsxgraph.org/docs/symbols/OtherIntersection.html
 */
jsxgraph.core.OtherIntersection = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("otherintersection") : jsxgraph.core.k__GT_elem.call(null,"otherintersection"));
/**
 * https://jsxgraph.org/docs/symbols/Parabola.html
 */
jsxgraph.core.Parabola = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("parabola") : jsxgraph.core.k__GT_elem.call(null,"parabola"));
/**
 * https://jsxgraph.org/docs/symbols/Parallel.html
 */
jsxgraph.core.Parallel = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("parallel") : jsxgraph.core.k__GT_elem.call(null,"parallel"));
/**
 * https://jsxgraph.org/docs/symbols/ParallelPoint.html
 */
jsxgraph.core.ParallelPoint = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("parallelpoint") : jsxgraph.core.k__GT_elem.call(null,"parallelpoint"));
/**
 * https://jsxgraph.org/docs/symbols/ParametricSurface3D.html
 */
jsxgraph.core.ParametricSurface3D = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("parametricsurface3d") : jsxgraph.core.k__GT_elem.call(null,"parametricsurface3d"));
/**
 * https://jsxgraph.org/docs/symbols/Perpendicular.html
 */
jsxgraph.core.Perpendicular = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("perpendicular") : jsxgraph.core.k__GT_elem.call(null,"perpendicular"));
/**
 * https://jsxgraph.org/docs/symbols/PerpendicularPoint.html
 */
jsxgraph.core.PerpendicularPoint = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("perpendicularpoint") : jsxgraph.core.k__GT_elem.call(null,"perpendicularpoint"));
/**
 * https://jsxgraph.org/docs/symbols/PerpendicularSegment.html
 */
jsxgraph.core.PerpendicularSegment = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("perpendicularsegment") : jsxgraph.core.k__GT_elem.call(null,"perpendicularsegment"));
/**
 * https://jsxgraph.org/docs/symbols/Point.html
 */
jsxgraph.core.Point = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("point") : jsxgraph.core.k__GT_elem.call(null,"point"));
/**
 * https://jsxgraph.org/docs/symbols/Point3D.html
 */
jsxgraph.core.Point3D = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("point3d") : jsxgraph.core.k__GT_elem.call(null,"point3d"));
/**
 * https://jsxgraph.org/docs/symbols/PolarLine.html
 */
jsxgraph.core.PolarLine = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("polarline") : jsxgraph.core.k__GT_elem.call(null,"polarline"));
/**
 * https://jsxgraph.org/docs/symbols/PolePoint.html
 */
jsxgraph.core.PolePoint = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("polepoint") : jsxgraph.core.k__GT_elem.call(null,"polepoint"));
/**
 * https://jsxgraph.org/docs/symbols/Polygon.html
 */
jsxgraph.core.Polygon = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("polygon") : jsxgraph.core.k__GT_elem.call(null,"polygon"));
/**
 * https://jsxgraph.org/docs/symbols/PolygonalChain.html
 */
jsxgraph.core.PolygonalChain = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("polygonalchain") : jsxgraph.core.k__GT_elem.call(null,"polygonalchain"));
/**
 * https://jsxgraph.org/docs/symbols/RadicalAxis.html
 */
jsxgraph.core.RadicalAxis = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("radicalaxis") : jsxgraph.core.k__GT_elem.call(null,"radicalaxis"));
/**
 * https://jsxgraph.org/docs/symbols/Reflection.html
 */
jsxgraph.core.Reflection = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("reflection") : jsxgraph.core.k__GT_elem.call(null,"reflection"));
/**
 * https://jsxgraph.org/docs/symbols/ReflexAngle.html
 */
jsxgraph.core.ReflexAngle = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("reflexangle") : jsxgraph.core.k__GT_elem.call(null,"reflexangle"));
/**
 * https://jsxgraph.org/docs/symbols/RegularPolygon.html
 */
jsxgraph.core.RegularPolygon = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("regularpolygon") : jsxgraph.core.k__GT_elem.call(null,"regularpolygon"));
/**
 * https://jsxgraph.org/docs/symbols/RiemannSum.html
 */
jsxgraph.core.RiemannSum = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("riemannsum") : jsxgraph.core.k__GT_elem.call(null,"riemannsum"));
/**
 * https://jsxgraph.org/docs/symbols/Sector.html
 */
jsxgraph.core.Sector = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("sector") : jsxgraph.core.k__GT_elem.call(null,"sector"));
/**
 * https://jsxgraph.org/docs/symbols/Segment.html
 */
jsxgraph.core.Segment = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("segment") : jsxgraph.core.k__GT_elem.call(null,"segment"));
/**
 * https://jsxgraph.org/docs/symbols/Semicircle.html
 */
jsxgraph.core.Semicircle = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("semicircle") : jsxgraph.core.k__GT_elem.call(null,"semicircle"));
/**
 * https://jsxgraph.org/docs/symbols/Slider.html
 */
jsxgraph.core.Slider = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("slider") : jsxgraph.core.k__GT_elem.call(null,"slider"));
/**
 * https://jsxgraph.org/docs/symbols/SlopeTriangle.html
 */
jsxgraph.core.SlopeTriangle = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("slopetriangle") : jsxgraph.core.k__GT_elem.call(null,"slopetriangle"));
/**
 * https://jsxgraph.org/docs/symbols/Spline.html
 */
jsxgraph.core.Spline = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("spline") : jsxgraph.core.k__GT_elem.call(null,"spline"));
/**
 * https://jsxgraph.org/docs/symbols/StepFunction.html
 */
jsxgraph.core.StepFunction = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("stepfunction") : jsxgraph.core.k__GT_elem.call(null,"stepfunction"));
/**
 * https://jsxgraph.org/docs/symbols/Tangent.html
 */
jsxgraph.core.Tangent = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("tangent") : jsxgraph.core.k__GT_elem.call(null,"tangent"));
/**
 * https://jsxgraph.org/docs/symbols/TapeMeasure.html
 */
jsxgraph.core.TapeMeasure = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("tapemeasure") : jsxgraph.core.k__GT_elem.call(null,"tapemeasure"));
/**
 * https://jsxgraph.org/docs/symbols/Text.html
 */
jsxgraph.core.Text = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("text") : jsxgraph.core.k__GT_elem.call(null,"text"));
/**
 * https://jsxgraph.org/docs/symbols/Ticks.html
 */
jsxgraph.core.Ticks = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("ticks") : jsxgraph.core.k__GT_elem.call(null,"ticks"));
/**
 * https://jsxgraph.org/docs/symbols/TraceCurve.html
 */
jsxgraph.core.TraceCurve = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("tracecurve") : jsxgraph.core.k__GT_elem.call(null,"tracecurve"));
/**
 * https://jsxgraph.org/docs/symbols/Transformation.html
 */
jsxgraph.core.Transformation = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("transformation") : jsxgraph.core.k__GT_elem.call(null,"transformation"));
/**
 * https://jsxgraph.org/docs/symbols/Turtle.html
 */
jsxgraph.core.Turtle = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("turtle") : jsxgraph.core.k__GT_elem.call(null,"turtle"));
/**
 * https://jsxgraph.org/docs/symbols/View3D.html
 */
jsxgraph.core.View3D = (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1("view3d") : jsxgraph.core.k__GT_elem.call(null,"view3d"));
jsxgraph.core.k__GT_component = (function jsxgraph$core$k__GT_component(k){
if(((typeof k === 'string') || ((k instanceof cljs.core.Keyword)))){
var G__59335 = cljs.core.name(k);
return (jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1 ? jsxgraph.core.k__GT_elem.cljs$core$IFn$_invoke$arity$1(G__59335) : jsxgraph.core.k__GT_elem.call(null,G__59335));
} else {
return k;
}
});
/**
 * TODO note that you can either add children etc... OR you can supply a ref that
 *   just does all of this crap for you.
 */
jsxgraph.core.JSXGraph = (function jsxgraph$core$JSXGraph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59382 = arguments.length;
var i__4865__auto___59383 = (0);
while(true){
if((i__4865__auto___59383 < len__4864__auto___59382)){
args__4870__auto__.push((arguments[i__4865__auto___59383]));

var G__59384 = (i__4865__auto___59383 + (1));
i__4865__auto___59383 = G__59384;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return jsxgraph.core.JSXGraph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(jsxgraph.core.JSXGraph.cljs$core$IFn$_invoke$arity$variadic = (function (p__59338,_){
var map__59339 = p__59338;
var map__59339__$1 = cljs.core.__destructure_map(map__59339);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59339__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59339__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _BANG_board = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var id__$1 = (function (){var or__4253__auto__ = id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return Math.random().toString((36)).substr((2),(9));
}
})();
var style__$1 = (function (){var or__4253__auto__ = style;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);
}
})();
var kill_BANG_ = (function (board,props){
board.suspendUpdate();

shadow.js.shim.module$$mentatcollective$jsxgraph$default.JSXGraph.freeBoard(board);

var temp__5753__auto___59385 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5753__auto___59385)){
var ref_59386 = temp__5753__auto___59385;
(ref_59386.cljs$core$IFn$_invoke$arity$1 ? ref_59386.cljs$core$IFn$_invoke$arity$1(null) : ref_59386.call(null,null));
} else {
}

return null;
});
var init_BANG_ = (function (props){
var board = shadow.js.shim.module$$mentatcollective$jsxgraph$default.JSXGraph.initBoard(id__$1,cljs.core.clj__GT_js(props));
var temp__5753__auto___59387 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5753__auto___59387)){
var ref_59388 = temp__5753__auto___59387;
(ref_59388.cljs$core$IFn$_invoke$arity$1 ? ref_59388.cljs$core$IFn$_invoke$arity$1(board) : ref_59388.call(null,board));
} else {
}

return board;
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"JSXGraph",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(_BANG_board,init_BANG_(reagent.core.props(this$)));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_board,kill_BANG_,reagent.core.props,this$);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__59340){
var vec__59341 = p__59340;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59341,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59341,(1),null);
var old_props = ((cljs.core.map_QMARK_(p))?p:cljs.core.PersistentArrayMap.EMPTY);
var new_props = (function (){var or__4253__auto__ = reagent.core.props(this$);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_props,new_props)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_board,(function (old_board){
if(cljs.core.truth_(old_board)){
kill_BANG_(old_board,new_props);
} else {
}

return init_BANG_(new_props);
}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__59389__delegate = function (___$1){
var board = cljs.core.deref(_BANG_board);
var base = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null)], null);
if(cljs.core.not(board)){
return base;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),jsxgraph.core.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),board], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (form){
if(cljs.core.truth_(form)){
var vec__59344 = form;
var seq__59345 = cljs.core.seq(vec__59344);
var first__59346 = cljs.core.first(seq__59345);
var seq__59345__$1 = cljs.core.next(seq__59345);
var k = first__59346;
var xs = seq__59345__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jsxgraph.core.k__GT_component(k)], null),xs);
} else {
return null;
}
})),reagent.core.children(reagent.core.current_component()))], null);
}
};
var G__59389 = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__59390__i = 0, G__59390__a = new Array(arguments.length -  0);
while (G__59390__i < G__59390__a.length) {G__59390__a[G__59390__i] = arguments[G__59390__i + 0]; ++G__59390__i;}
  ___$1 = new cljs.core.IndexedSeq(G__59390__a,0,null);
} 
return G__59389__delegate.call(this,___$1);};
G__59389.cljs$lang$maxFixedArity = 0;
G__59389.cljs$lang$applyTo = (function (arglist__59391){
var ___$1 = cljs.core.seq(arglist__59391);
return G__59389__delegate(___$1);
});
G__59389.cljs$core$IFn$_invoke$arity$variadic = G__59389__delegate;
return G__59389;
})()
], null));
}));

(jsxgraph.core.JSXGraph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jsxgraph.core.JSXGraph.cljs$lang$applyTo = (function (seq59336){
var G__59337 = cljs.core.first(seq59336);
var seq59336__$1 = cljs.core.next(seq59336);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59337,seq59336__$1);
}));


//# sourceMappingURL=jsxgraph.core.js.map
