goog.provide('jsxgraph.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof jsxgraph !== 'undefined') && (typeof jsxgraph.core !== 'undefined') && (typeof jsxgraph.core.board_context !== 'undefined')){
} else {
jsxgraph.core.board_context = module$node_modules$react$index.createContext(null);
}
jsxgraph.core.Provider = jsxgraph.core.board_context.Provider;
/**
 * TODO note that you can either add children etc... OR you can supply a ref that
 *   just does all of this crap for you.
 */
jsxgraph.core.JSXGraph = (function jsxgraph$core$JSXGraph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___91065 = arguments.length;
var i__4865__auto___91066 = (0);
while(true){
if((i__4865__auto___91066 < len__4864__auto___91065)){
args__4870__auto__.push((arguments[i__4865__auto___91066]));

var G__91067 = (i__4865__auto___91066 + (1));
i__4865__auto___91066 = G__91067;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return jsxgraph.core.JSXGraph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(jsxgraph.core.JSXGraph.cljs$core$IFn$_invoke$arity$variadic = (function (p__91042,_){
var map__91043 = p__91042;
var map__91043__$1 = cljs.core.__destructure_map(map__91043);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91043__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91043__$1,new cljs.core.Keyword(null,"style","style",-496642736));
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

var temp__5753__auto___91068 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5753__auto___91068)){
var ref_91069 = temp__5753__auto___91068;
(ref_91069.cljs$core$IFn$_invoke$arity$1 ? ref_91069.cljs$core$IFn$_invoke$arity$1(null) : ref_91069.call(null,null));
} else {
}

return null;
});
var init_BANG_ = (function (props){
var board = shadow.js.shim.module$$mentatcollective$jsxgraph$default.JSXGraph.initBoard(id__$1,cljs.core.clj__GT_js(props));
var temp__5753__auto___91070 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5753__auto___91070)){
var ref_91071 = temp__5753__auto___91070;
(ref_91071.cljs$core$IFn$_invoke$arity$1 ? ref_91071.cljs$core$IFn$_invoke$arity$1(board) : ref_91071.call(null,board));
} else {
}

return board;
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"JSXGraph",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(_BANG_board,init_BANG_(reagent.core.props(this$)));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_board,kill_BANG_,reagent.core.props,this$);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__91044){
var vec__91045 = p__91044;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91045,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91045,(1),null);
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
var G__91072__delegate = function (___$1){
var board = cljs.core.deref(_BANG_board);
var base = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null)], null);
if(cljs.core.not(board)){
return base;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),jsxgraph.core.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),board], null)], null),reagent.core.children(reagent.core.current_component()))], null);
}
};
var G__91072 = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__91073__i = 0, G__91073__a = new Array(arguments.length -  0);
while (G__91073__i < G__91073__a.length) {G__91073__a[G__91073__i] = arguments[G__91073__i + 0]; ++G__91073__i;}
  ___$1 = new cljs.core.IndexedSeq(G__91073__a,0,null);
} 
return G__91072__delegate.call(this,___$1);};
G__91072.cljs$lang$maxFixedArity = 0;
G__91072.cljs$lang$applyTo = (function (arglist__91074){
var ___$1 = cljs.core.seq(arglist__91074);
return G__91072__delegate(___$1);
});
G__91072.cljs$core$IFn$_invoke$arity$variadic = G__91072__delegate;
return G__91072;
})()
], null));
}));

(jsxgraph.core.JSXGraph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jsxgraph.core.JSXGraph.cljs$lang$applyTo = (function (seq91040){
var G__91041 = cljs.core.first(seq91040);
var seq91040__$1 = cljs.core.next(seq91040);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91041,seq91040__$1);
}));

jsxgraph.core.add_item_BANG_ = (function jsxgraph$core$add_item_BANG_(name,board,elems,props){
var p = board.create(name,cljs.core.clj__GT_js(elems),cljs.core.clj__GT_js(props));
var temp__5753__auto___91075 = (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1("on") : props.call(null,"on"));
if(cljs.core.truth_(temp__5753__auto___91075)){
var m_91076 = temp__5753__auto___91075;
var seq__91048_91077 = cljs.core.seq(m_91076);
var chunk__91049_91078 = null;
var count__91050_91079 = (0);
var i__91051_91080 = (0);
while(true){
if((i__91051_91080 < count__91050_91079)){
var vec__91058_91081 = chunk__91049_91078.cljs$core$IIndexed$_nth$arity$2(null,i__91051_91080);
var k_91082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91058_91081,(0),null);
var f_91083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91058_91081,(1),null);
var callback_91084 = ((function (seq__91048_91077,chunk__91049_91078,count__91050_91079,i__91051_91080,vec__91058_91081,k_91082,f_91083,m_91076,temp__5753__auto___91075,p){
return (function (_){
var elem = this;
return (f_91083.cljs$core$IFn$_invoke$arity$1 ? f_91083.cljs$core$IFn$_invoke$arity$1(elem) : f_91083.call(null,elem));
});})(seq__91048_91077,chunk__91049_91078,count__91050_91079,i__91051_91080,vec__91058_91081,k_91082,f_91083,m_91076,temp__5753__auto___91075,p))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_91082,"update")){
var temp__5751__auto___91085 = p.coords;
if(cljs.core.truth_(temp__5751__auto___91085)){
var coords_91086 = temp__5751__auto___91085;
coords_91086.on("update",callback_91084);
} else {
board.on("update",callback_91084);
}
} else {
p.on(k_91082,callback_91084);
}


var G__91087 = seq__91048_91077;
var G__91088 = chunk__91049_91078;
var G__91089 = count__91050_91079;
var G__91090 = (i__91051_91080 + (1));
seq__91048_91077 = G__91087;
chunk__91049_91078 = G__91088;
count__91050_91079 = G__91089;
i__91051_91080 = G__91090;
continue;
} else {
var temp__5753__auto___91091__$1 = cljs.core.seq(seq__91048_91077);
if(temp__5753__auto___91091__$1){
var seq__91048_91092__$1 = temp__5753__auto___91091__$1;
if(cljs.core.chunked_seq_QMARK_(seq__91048_91092__$1)){
var c__4679__auto___91093 = cljs.core.chunk_first(seq__91048_91092__$1);
var G__91094 = cljs.core.chunk_rest(seq__91048_91092__$1);
var G__91095 = c__4679__auto___91093;
var G__91096 = cljs.core.count(c__4679__auto___91093);
var G__91097 = (0);
seq__91048_91077 = G__91094;
chunk__91049_91078 = G__91095;
count__91050_91079 = G__91096;
i__91051_91080 = G__91097;
continue;
} else {
var vec__91061_91098 = cljs.core.first(seq__91048_91092__$1);
var k_91099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91061_91098,(0),null);
var f_91100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91061_91098,(1),null);
var callback_91101 = ((function (seq__91048_91077,chunk__91049_91078,count__91050_91079,i__91051_91080,vec__91061_91098,k_91099,f_91100,seq__91048_91092__$1,temp__5753__auto___91091__$1,m_91076,temp__5753__auto___91075,p){
return (function (_){
var elem = this;
return (f_91100.cljs$core$IFn$_invoke$arity$1 ? f_91100.cljs$core$IFn$_invoke$arity$1(elem) : f_91100.call(null,elem));
});})(seq__91048_91077,chunk__91049_91078,count__91050_91079,i__91051_91080,vec__91061_91098,k_91099,f_91100,seq__91048_91092__$1,temp__5753__auto___91091__$1,m_91076,temp__5753__auto___91075,p))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_91099,"update")){
var temp__5751__auto___91102 = p.coords;
if(cljs.core.truth_(temp__5751__auto___91102)){
var coords_91103 = temp__5751__auto___91102;
coords_91103.on("update",callback_91101);
} else {
board.on("update",callback_91101);
}
} else {
p.on(k_91099,callback_91101);
}


var G__91104 = cljs.core.next(seq__91048_91092__$1);
var G__91105 = null;
var G__91106 = (0);
var G__91107 = (0);
seq__91048_91077 = G__91104;
chunk__91049_91078 = G__91105;
count__91050_91079 = G__91106;
i__91051_91080 = G__91107;
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
var map__91064 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(props);
var map__91064__$1 = cljs.core.__destructure_map(map__91064);
var props__$1 = map__91064__$1;
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91064__$1,"parents");
var props__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props__$1,"board",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["parents","force"], 0));
module$node_modules$react$index.useEffect((function jsxgraph$core$element_$_mount(){
if(cljs.core.truth_((function (){var and__4251__auto__ = board;
if(cljs.core.truth_(and__4251__auto__)){
return board.renderer;
} else {
return and__4251__auto__;
}
})())){
var item = jsxgraph.core.add_item_BANG_(name,board,parents,props__$2);
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
/**
 * https://jsxgraph.org/docs/symbols/Angle.html
 */
jsxgraph.core.Angle = jsxgraph.core.element("angle");
/**
 * https://jsxgraph.org/docs/symbols/Arc.html
 */
jsxgraph.core.Arc = jsxgraph.core.element("arc");
/**
 * https://jsxgraph.org/docs/symbols/Arrow.html
 */
jsxgraph.core.Arrow = jsxgraph.core.element("arrow");
/**
 * https://jsxgraph.org/docs/symbols/ArrowParallel.html
 */
jsxgraph.core.ArrowParallel = jsxgraph.core.element("arrowparallel");
/**
 * https://jsxgraph.org/docs/symbols/Axis.html
 */
jsxgraph.core.Axis = jsxgraph.core.element("axis");
/**
 * https://jsxgraph.org/docs/symbols/Bisector.html
 */
jsxgraph.core.Bisector = jsxgraph.core.element("bisector");
/**
 * https://jsxgraph.org/docs/symbols/Bisectorlines.html
 */
jsxgraph.core.Bisectorlines = jsxgraph.core.element("bisectorlines");
/**
 * https://jsxgraph.org/docs/symbols/Boxplot.html
 */
jsxgraph.core.Boxplot = jsxgraph.core.element("boxplot");
/**
 * https://jsxgraph.org/docs/symbols/Button.html
 */
jsxgraph.core.Button = jsxgraph.core.element("button");
/**
 * https://jsxgraph.org/docs/symbols/CardinalSpline.html
 */
jsxgraph.core.CardinalSpline = jsxgraph.core.element("cardinalspline");
/**
 * https://jsxgraph.org/docs/symbols/Chart.html
 */
jsxgraph.core.Chart = jsxgraph.core.element("chart");
/**
 * https://jsxgraph.org/docs/symbols/Checkbox.html
 */
jsxgraph.core.Checkbox = jsxgraph.core.element("checkbox");
/**
 * https://jsxgraph.org/docs/symbols/Circle.html
 */
jsxgraph.core.Circle = jsxgraph.core.element("circle");
/**
 * https://jsxgraph.org/docs/symbols/Circumcenter.html
 */
jsxgraph.core.Circumcenter = jsxgraph.core.element("circumcenter");
/**
 * https://jsxgraph.org/docs/symbols/Circumcircle.html
 */
jsxgraph.core.Circumcircle = jsxgraph.core.element("circumcircle");
/**
 * https://jsxgraph.org/docs/symbols/CircumcircleArc.html
 */
jsxgraph.core.CircumcircleArc = jsxgraph.core.element("circumcirclearc");
/**
 * https://jsxgraph.org/docs/symbols/CircumcircleSector.html
 */
jsxgraph.core.CircumcircleSector = jsxgraph.core.element("circumcirclesector");
/**
 * https://jsxgraph.org/docs/symbols/Comb.html
 */
jsxgraph.core.Comb = jsxgraph.core.element("comb");
/**
 * https://jsxgraph.org/docs/symbols/Conic.html
 */
jsxgraph.core.Conic = jsxgraph.core.element("conic");
/**
 * https://jsxgraph.org/docs/symbols/Curve.html
 */
jsxgraph.core.Curve = jsxgraph.core.element("curve");
/**
 * https://jsxgraph.org/docs/symbols/Curve3D.html
 */
jsxgraph.core.Curve3D = jsxgraph.core.element("Curve3d");
/**
 * https://jsxgraph.org/docs/symbols/CurveDifference.html
 */
jsxgraph.core.CurveDifference = jsxgraph.core.element("curvedifference");
/**
 * https://jsxgraph.org/docs/symbols/CurveIntersection.html
 */
jsxgraph.core.CurveIntersection = jsxgraph.core.element("curveintersection");
/**
 * https://jsxgraph.org/docs/symbols/CurveUnion.html
 */
jsxgraph.core.CurveUnion = jsxgraph.core.element("curveunion");
/**
 * https://jsxgraph.org/docs/symbols/Derivative.html
 */
jsxgraph.core.Derivative = jsxgraph.core.element("derivative");
/**
 * https://jsxgraph.org/docs/symbols/Ellipse.html
 */
jsxgraph.core.Ellipse = jsxgraph.core.element("ellipse");
/**
 * https://jsxgraph.org/docs/symbols/ForeignObject.html
 */
jsxgraph.core.ForeignObject = jsxgraph.core.element("foreignobject");
/**
 * https://jsxgraph.org/docs/symbols/FunctionGraph.html
 */
jsxgraph.core.FunctionGraph = jsxgraph.core.element("functiongraph");
/**
 * https://jsxgraph.org/docs/symbols/FunctionGraph3D.html
 */
jsxgraph.core.FunctionGraph3D = jsxgraph.core.element("functiongraph3d");
/**
 * https://jsxgraph.org/docs/symbols/Glider.html
 */
jsxgraph.core.Glider = jsxgraph.core.element("glider");
/**
 * https://jsxgraph.org/docs/symbols/Grid.html
 */
jsxgraph.core.Grid = jsxgraph.core.element("grid");
/**
 * https://jsxgraph.org/docs/symbols/Group.html
 */
jsxgraph.core.Group = jsxgraph.core.element("group");
/**
 * https://jsxgraph.org/docs/symbols/Hatch.html
 */
jsxgraph.core.Hatch = jsxgraph.core.element("hatch");
/**
 * https://jsxgraph.org/docs/symbols/Hyperbola.html
 */
jsxgraph.core.Hyperbola = jsxgraph.core.element("hyperbola");
/**
 * https://jsxgraph.org/docs/symbols/Image.html
 */
jsxgraph.core.Image = jsxgraph.core.element("image");
/**
 * https://jsxgraph.org/docs/symbols/Incenter.html
 */
jsxgraph.core.Incenter = jsxgraph.core.element("incenter");
/**
 * https://jsxgraph.org/docs/symbols/Incircle.html
 */
jsxgraph.core.Incircle = jsxgraph.core.element("incircle");
/**
 * https://jsxgraph.org/docs/symbols/Inequality.html
 */
jsxgraph.core.Inequality = jsxgraph.core.element("inequality");
/**
 * https://jsxgraph.org/docs/symbols/Input.html
 */
jsxgraph.core.Input = jsxgraph.core.element("input");
/**
 * https://jsxgraph.org/docs/symbols/Integral.html
 */
jsxgraph.core.Integral = jsxgraph.core.element("integral");
/**
 * https://jsxgraph.org/docs/symbols/Intersection.html
 */
jsxgraph.core.Intersection = jsxgraph.core.element("intersection");
/**
 * https://jsxgraph.org/docs/symbols/Label.html
 */
jsxgraph.core.Label = jsxgraph.core.element("label");
/**
 * https://jsxgraph.org/docs/symbols/Legend.html
 */
jsxgraph.core.Legend = jsxgraph.core.element("legend");
/**
 * https://jsxgraph.org/docs/symbols/Line.html
 */
jsxgraph.core.Line = jsxgraph.core.element("line");
/**
 * https://jsxgraph.org/docs/symbols/Line3D.html
 */
jsxgraph.core.Line3D = jsxgraph.core.element("Line3d");
/**
 * https://jsxgraph.org/docs/symbols/Locus.html
 */
jsxgraph.core.Locus = jsxgraph.core.element("locus");
/**
 * https://jsxgraph.org/docs/symbols/MajorArc.html
 */
jsxgraph.core.MajorArc = jsxgraph.core.element("majorarc");
/**
 * https://jsxgraph.org/docs/symbols/MajorSector.html
 */
jsxgraph.core.MajorSector = jsxgraph.core.element("majorsector");
/**
 * https://jsxgraph.org/docs/symbols/MetapostSpline.html
 */
jsxgraph.core.MetapostSpline = jsxgraph.core.element("metapostspline");
/**
 * https://jsxgraph.org/docs/symbols/Midpoint.html
 */
jsxgraph.core.Midpoint = jsxgraph.core.element("midpoint");
/**
 * https://jsxgraph.org/docs/symbols/MinorArc.html
 */
jsxgraph.core.MinorArc = jsxgraph.core.element("minorarc");
/**
 * https://jsxgraph.org/docs/symbols/MinorSector.html
 */
jsxgraph.core.MinorSector = jsxgraph.core.element("minorsector");
/**
 * https://jsxgraph.org/docs/symbols/Mirr.html
 */
jsxgraph.core.MirrorElement = jsxgraph.core.element("mirrorelement");
/**
 * https://jsxgraph.org/docs/symbols/MirrorPoint.html
 */
jsxgraph.core.MirrorPoint = jsxgraph.core.element("mirrorpoint");
/**
 * https://jsxgraph.org/docs/symbols/NonReflexAngle.html
 */
jsxgraph.core.NonReflexAngle = jsxgraph.core.element("nonreflexangle");
/**
 * https://jsxgraph.org/docs/symbols/Normal.html
 */
jsxgraph.core.Normal = jsxgraph.core.element("normal");
/**
 * https://jsxgraph.org/docs/symbols/OrthogonalProjection.html
 */
jsxgraph.core.OrthogonalProjection = jsxgraph.core.element("orthogonalprojection");
/**
 * https://jsxgraph.org/docs/symbols/OtherIntersection.html
 */
jsxgraph.core.OtherIntersection = jsxgraph.core.element("otherintersection");
/**
 * https://jsxgraph.org/docs/symbols/Parabola.html
 */
jsxgraph.core.Parabola = jsxgraph.core.element("parabola");
/**
 * https://jsxgraph.org/docs/symbols/Parallel.html
 */
jsxgraph.core.Parallel = jsxgraph.core.element("parallel");
/**
 * https://jsxgraph.org/docs/symbols/ParallelPoint.html
 */
jsxgraph.core.ParallelPoint = jsxgraph.core.element("parallelpoint");
/**
 * https://jsxgraph.org/docs/symbols/ParametricSurface3D.html
 */
jsxgraph.core.ParametricSurface3D = jsxgraph.core.element("parametricsurface3d");
/**
 * https://jsxgraph.org/docs/symbols/Perpendicular.html
 */
jsxgraph.core.Perpendicular = jsxgraph.core.element("perpendicular");
/**
 * https://jsxgraph.org/docs/symbols/PerpendicularPoint.html
 */
jsxgraph.core.PerpendicularPoint = jsxgraph.core.element("perpendicularpoint");
/**
 * https://jsxgraph.org/docs/symbols/PerpendicularSegment.html
 */
jsxgraph.core.PerpendicularSegment = jsxgraph.core.element("perpendicularsegment");
/**
 * https://jsxgraph.org/docs/symbols/Point.html
 */
jsxgraph.core.Point = jsxgraph.core.element("point");
/**
 * https://jsxgraph.org/docs/symbols/Point3D.html
 */
jsxgraph.core.Point3D = jsxgraph.core.element("point3d");
/**
 * https://jsxgraph.org/docs/symbols/PolarLine.html
 */
jsxgraph.core.PolarLine = jsxgraph.core.element("polarline");
/**
 * https://jsxgraph.org/docs/symbols/PolePoint.html
 */
jsxgraph.core.PolePoint = jsxgraph.core.element("polepoint");
/**
 * https://jsxgraph.org/docs/symbols/Polygon.html
 */
jsxgraph.core.Polygon = jsxgraph.core.element("polygon");
/**
 * https://jsxgraph.org/docs/symbols/PolygonalChain.html
 */
jsxgraph.core.PolygonalChain = jsxgraph.core.element("polygonalchain");
/**
 * https://jsxgraph.org/docs/symbols/RadicalAxis.html
 */
jsxgraph.core.RadicalAxis = jsxgraph.core.element("radicalaxis");
/**
 * https://jsxgraph.org/docs/symbols/Reflection.html
 */
jsxgraph.core.Reflection = jsxgraph.core.element("reflection");
/**
 * https://jsxgraph.org/docs/symbols/ReflexAngle.html
 */
jsxgraph.core.ReflexAngle = jsxgraph.core.element("reflexangle");
/**
 * https://jsxgraph.org/docs/symbols/RegularPolygon.html
 */
jsxgraph.core.RegularPolygon = jsxgraph.core.element("regularpolygon");
/**
 * https://jsxgraph.org/docs/symbols/RiemannSum.html
 */
jsxgraph.core.RiemannSum = jsxgraph.core.element("riemannsum");
/**
 * https://jsxgraph.org/docs/symbols/Sector.html
 */
jsxgraph.core.Sector = jsxgraph.core.element("sector");
/**
 * https://jsxgraph.org/docs/symbols/Segment.html
 */
jsxgraph.core.Segment = jsxgraph.core.element("segment");
/**
 * https://jsxgraph.org/docs/symbols/Semicircle.html
 */
jsxgraph.core.Semicircle = jsxgraph.core.element("semicircle");
/**
 * https://jsxgraph.org/docs/symbols/Slider.html
 */
jsxgraph.core.Slider = jsxgraph.core.element("slider");
/**
 * https://jsxgraph.org/docs/symbols/SlopeTriangle.html
 */
jsxgraph.core.SlopeTriangle = jsxgraph.core.element("slopetriangle");
/**
 * https://jsxgraph.org/docs/symbols/Spline.html
 */
jsxgraph.core.Spline = jsxgraph.core.element("spline");
/**
 * https://jsxgraph.org/docs/symbols/StepFunction.html
 */
jsxgraph.core.StepFunction = jsxgraph.core.element("stepfunction");
/**
 * https://jsxgraph.org/docs/symbols/Tangent.html
 */
jsxgraph.core.Tangent = jsxgraph.core.element("tangent");
/**
 * https://jsxgraph.org/docs/symbols/TapeMeasure.html
 */
jsxgraph.core.TapeMeasure = jsxgraph.core.element("tapemeasure");
/**
 * https://jsxgraph.org/docs/symbols/Text.html
 */
jsxgraph.core.Text = jsxgraph.core.element("text");
/**
 * https://jsxgraph.org/docs/symbols/Ticks.html
 */
jsxgraph.core.Ticks = jsxgraph.core.element("ticks");
/**
 * https://jsxgraph.org/docs/symbols/TraceCurve.html
 */
jsxgraph.core.TraceCurve = jsxgraph.core.element("tracecurve");
/**
 * https://jsxgraph.org/docs/symbols/Transformation.html
 */
jsxgraph.core.Transformation = jsxgraph.core.element("transformation");
/**
 * https://jsxgraph.org/docs/symbols/Turtle.html
 */
jsxgraph.core.Turtle = jsxgraph.core.element("turtle");
/**
 * https://jsxgraph.org/docs/symbols/View3D.html
 */
jsxgraph.core.View3D = jsxgraph.core.element("view3D");

//# sourceMappingURL=jsxgraph.core.js.map
