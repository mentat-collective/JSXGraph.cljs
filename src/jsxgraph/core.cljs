(ns jsxgraph.core
  "React/Reagent implementation of a component that exposes the API from
  http://jsxgraph.org/ in a more declarative way."
  (:require ["@mentatcollective/jsxgraph$default" :as jsx]
            [reagent.core :as re]
            ["react" :as react]))

(comment
  " TODO before release:



- Add docs to each of the `ElementType` entries.
- note that we are NOT GOING TO BE CLEVER with any of this stuff.
- show what it looks like in jsxgraph vs non
- fix license at bottom

differences:

- parents, props vs providing stuff in order
- how to convert the `create` calls.
- the handlers for events!
- keywords vs classes
")

;; ## Utilities

(defonce ^{:no-doc true
           :doc "We use this context like a dynamic variable, to provide each
           component with a `board` instance that's accessible without passing
           the board down via `props`."}
  board-context
  (react/createContext nil))

(def ^{:no-doc true
       :doc "Use like

```clj
[:> Provider {:value <board>} <children>]
```

to provide any element in `<children>` with access to the bound `board` instance
  via `(react/useContext board-context)`."}
  Provider
  (.-Provider board-context))

(defn create
  "TODO document"
  [board name elems props]
  (let [p (.create board
                   name
                   (clj->js elems)
                   (clj->js props))]
    (when-let [m (props "on")]
      (doseq [[k f] m]
        (let [callback (fn [_]
                         (this-as elem
                           (f elem)))]
          (if (= k "update")
            (if-let [coords (.-coords p)]
              (.on coords "update" callback)
              (.on board "update" callback))
            (.on p k callback)))))
    p))

;; Components

(defn ^:no-doc element [name]
  (re/adapt-react-class
   (react/forwardRef
    (fn [props ref]
      (let [board (react/useContext board-context)
            {:strs [parents] :as props} (js->clj props)
            props (dissoc props "board" "parents" "force")]
        ;; TODO error if there are no parents or board, or force. Use this in
        ;; the context of the jsx!

        (react/useEffect
         (fn mount []
           ;; sometimes a stale dead board is passed in.
           (when (and board (.-renderer board))
             (let [item (create board name parents props)]
               (when ref (ref item))
               (fn unmount []
                 (when board (.removeObject board item))
                 (when ref (ref nil)))))))
        nil)))))

;; ## Elements

(def ^:no-doc k->elem
  {"angle"                (element "angle")
   "arc"                  (element "arc")
   "arrow"                (element "arrow")
   "arrowparallel"        (element "arrowparallel")
   "axis"                 (element "axis")
   "bisector"             (element "bisector")
   "bisectorlines"        (element "bisectorlines")
   "boxplot"              (element "boxplot")
   "button"               (element "button")
   "cardinalspline"       (element "cardinalspline")
   "chart"                (element "chart")
   "checkbox"             (element "checkbox")
   "circle"               (element "circle")
   "circumcenter"         (element "circumcenter")
   "circumcircle"         (element "circumcircle")
   "circumcirclearc"      (element "circumcirclearc")
   "circumcirclesector"   (element "circumcirclesector")
   "comb"                 (element "comb")
   "conic"                (element "conic")
   "curve"                (element "curve")
   "Curve3d"              (element "Curve3d")
   "curvedifference"      (element "curvedifference")
   "curveintersection"    (element "curveintersection")
   "curveunion"           (element "curveunion")
   "derivative"           (element "derivative")
   "ellipse"              (element "ellipse")
   "foreignobject"        (element "foreignobject")
   "functiongraph"        (element "functiongraph")
   "functiongraph3d"      (element "functiongraph3d")
   "glider"               (element "glider")
   "grid"                 (element "grid")
   "group"                (element "group")
   "hatch"                (element "hatch")
   "hyperbola"            (element "hyperbola")
   "image"                (element "image")
   "incenter"             (element "incenter")
   "incircle"             (element "incircle")
   "inequality"           (element "inequality")
   "input"                (element "input")
   "integral"             (element "integral")
   "intersection"         (element "intersection")
   "label"                (element "label")
   "legend"               (element "legend")
   "line"                 (element "line")
   "Line3d"               (element "Line3d")
   "locus"                (element "locus")
   "majorarc"             (element "majorarc")
   "majorsector"          (element "majorsector")
   "metapostspline"       (element "metapostspline")
   "midpoint"             (element "midpoint")
   "minorarc"             (element "minorarc")
   "minorsector"          (element "minorsector")
   "mirrorelement"        (element "mirrorelement")
   "mirrorpoint"          (element "mirrorpoint")
   "nonreflexangle"       (element "nonreflexangle")
   "normal"               (element "normal")
   "orthogonalprojection" (element "orthogonalprojection")
   "otherintersection"    (element "otherintersection")
   "parabola"             (element "parabola")
   "parallel"             (element "parallel")
   "parallelpoint"        (element "parallelpoint")
   "parametricsurface3d"  (element "parametricsurface3d")
   "perpendicular"        (element "perpendicular")
   "perpendicularpoint"   (element "perpendicularpoint")
   "perpendicularsegment" (element "perpendicularsegment")
   "point"                (element "point")
   "point3d"              (element "point3d")
   "polarline"            (element "polarline")
   "polepoint"            (element "polepoint")
   "polygon"              (element "polygon")
   "polygonalchain"       (element "polygonalchain")
   "radicalaxis"          (element "radicalaxis")
   "reflection"           (element "reflection")
   "reflexangle"          (element "reflexangle")
   "regularpolygon"       (element "regularpolygon")
   "riemannsum"           (element "riemannsum")
   "sector"               (element "sector")
   "segment"              (element "segment")
   "semicircle"           (element "semicircle")
   "slider"               (element "slider")
   "slopetriangle"        (element "slopetriangle")
   "spline"               (element "spline")
   "stepfunction"         (element "stepfunction")
   "tangent"              (element "tangent")
   "tapemeasure"          (element "tapemeasure")
   "text"                 (element "text")
   "ticks"                (element "ticks")
   "tracecurve"           (element "tracecurve")
   "transformation"       (element "transformation")
   "turtle"               (element "turtle")
   "view3d"               (element "view3d")})
;;
;; see `ElementType` in index.d.ts.

(def ^{:doc "https://jsxgraph.org/docs/symbols/Angle.html"}
  Angle
  (k->elem "angle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Arc.html"}
  Arc
  (k->elem "arc"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Arrow.html"}
  Arrow
  (k->elem "arrow"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/ArrowParallel.html"}
  ArrowParallel
  (k->elem "arrowparallel"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Axis.html"}
  Axis
  (k->elem "axis"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Bisector.html"}
  Bisector
  (k->elem "bisector"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Bisectorlines.html"}
  Bisectorlines
  (k->elem "bisectorlines"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Boxplot.html"}
  Boxplot
  (k->elem "boxplot"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Button.html"}
  Button
  (k->elem "button"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CardinalSpline.html"}
  CardinalSpline
  (k->elem "cardinalspline"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Chart.html"}
  Chart
  (k->elem "chart"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Checkbox.html"}
  Checkbox
  (k->elem "checkbox"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Circle.html"}
  Circle
  (k->elem "circle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Circumcenter.html"}
  Circumcenter
  (k->elem "circumcenter"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Circumcircle.html"}
  Circumcircle
  (k->elem "circumcircle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CircumcircleArc.html"}
  CircumcircleArc
  (k->elem "circumcirclearc"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CircumcircleSector.html"}
  CircumcircleSector
  (k->elem "circumcirclesector"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Comb.html"}
  Comb
  (k->elem "comb"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Conic.html"}
  Conic
  (k->elem "conic"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Curve.html"}
  Curve
  (k->elem "curve"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Curve3D.html"}
  Curve3D
  (k->elem "Curve3d"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CurveDifference.html"}
  CurveDifference
  (k->elem "curvedifference"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CurveIntersection.html"}
  CurveIntersection
  (k->elem "curveintersection"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CurveUnion.html"}
  CurveUnion
  (k->elem "curveunion"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Derivative.html"}
  Derivative
  (k->elem "derivative"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Ellipse.html"}
  Ellipse
  (k->elem "ellipse"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/ForeignObject.html"}
  ForeignObject
  (k->elem "foreignobject"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/FunctionGraph.html"}
  FunctionGraph
  (k->elem "functiongraph"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/FunctionGraph3D.html"}
  FunctionGraph3D
  (k->elem "functiongraph3d"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Glider.html"}
  Glider
  (k->elem "glider"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Grid.html"}
  Grid
  (k->elem "grid"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Group.html"}
  Group
  (k->elem "group"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Hatch.html"}
  Hatch
  (k->elem "hatch"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Hyperbola.html"}
  Hyperbola
  (k->elem "hyperbola"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Image.html"}
  Image
  (k->elem "image"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Incenter.html"}
  Incenter
  (k->elem "incenter"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Incircle.html"}
  Incircle
  (k->elem "incircle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Inequality.html"}
  Inequality
  (k->elem "inequality"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Input.html"}
  Input
  (k->elem "input"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Integral.html"}
  Integral
  (k->elem "integral"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Intersection.html"}
  Intersection
  (k->elem "intersection"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Label.html"}
  Label
  (k->elem "label"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Legend.html"}
  Legend
  (k->elem "legend"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Line.html"}
  Line
  (k->elem "line"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Line3D.html"}
  Line3D
  (k->elem "Line3d"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Locus.html"}
  Locus
  (k->elem "locus"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MajorArc.html"}
  MajorArc
  (k->elem "majorarc"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MajorSector.html"}
  MajorSector
  (k->elem "majorsector"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MetapostSpline.html"}
  MetapostSpline
  (k->elem "metapostspline"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Midpoint.html"}
  Midpoint
  (k->elem "midpoint"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MinorArc.html"}
  MinorArc
  (k->elem "minorarc"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MinorSector.html"}
  MinorSector
  (k->elem "minorsector"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Mirr.html"}
  MirrorElement
  (k->elem "mirrorelement"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MirrorPoint.html"}
  MirrorPoint
  (k->elem "mirrorpoint"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/NonReflexAngle.html"}
  NonReflexAngle
  (k->elem "nonreflexangle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Normal.html"}
  Normal
  (k->elem "normal"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/OrthogonalProjection.html"}
  OrthogonalProjection
  (k->elem "orthogonalprojection"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/OtherIntersection.html"}
  OtherIntersection
  (k->elem "otherintersection"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Parabola.html"}
  Parabola
  (k->elem "parabola"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Parallel.html"}
  Parallel
  (k->elem "parallel"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/ParallelPoint.html"}
  ParallelPoint
  (k->elem "parallelpoint"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/ParametricSurface3D.html"}
  ParametricSurface3D
  (k->elem "parametricsurface3d"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Perpendicular.html"}
  Perpendicular
  (k->elem "perpendicular"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/PerpendicularPoint.html"}
  PerpendicularPoint
  (k->elem "perpendicularpoint"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/PerpendicularSegment.html"}
  PerpendicularSegment
  (k->elem "perpendicularsegment"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Point.html"}
  Point
  (k->elem "point"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Point3D.html"}
  Point3D
  (k->elem "point3d"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/PolarLine.html"}
  PolarLine
  (k->elem "polarline"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/PolePoint.html"}
  PolePoint
  (k->elem "polepoint"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Polygon.html"}
  Polygon
  (k->elem "polygon"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/PolygonalChain.html"}
  PolygonalChain
  (k->elem "polygonalchain"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/RadicalAxis.html"}
  RadicalAxis
  (k->elem "radicalaxis"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Reflection.html"}
  Reflection
  (k->elem "reflection"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/ReflexAngle.html"}
  ReflexAngle
  (k->elem "reflexangle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/RegularPolygon.html"}
  RegularPolygon
  (k->elem "regularpolygon"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/RiemannSum.html"}
  RiemannSum
  (k->elem "riemannsum"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Sector.html"}
  Sector
  (k->elem "sector"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Segment.html"}
  Segment
  (k->elem "segment"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Semicircle.html"}
  Semicircle
  (k->elem "semicircle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Slider.html"}
  Slider
  (k->elem "slider"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/SlopeTriangle.html"}
  SlopeTriangle
  (k->elem "slopetriangle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Spline.html"}
  Spline
  (k->elem "spline"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/StepFunction.html"}
  StepFunction
  (k->elem "stepfunction"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Tangent.html"}
  Tangent
  (k->elem "tangent"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/TapeMeasure.html"}
  TapeMeasure
  (k->elem "tapemeasure"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Text.html"}
  Text
  (k->elem "text"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Ticks.html"}
  Ticks
  (k->elem "ticks"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/TraceCurve.html"}
  TraceCurve
  (k->elem "tracecurve"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Transformation.html"}
  Transformation
  (k->elem "transformation"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Turtle.html"}
  Turtle
  (k->elem "turtle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/View3D.html"}
  View3D
  (k->elem "view3d"))

(defn k->component [k]
  (if (or (string? k) (keyword? k))
    (k->elem (name k))
    k))

;; ## JSXGraph

(defn JSXGraph
  "TODO note that you can either add children etc... OR you can supply a ref that
  just does all of this crap for you."
  [{:keys [id style]} & _]
  (let [!board  (re/atom nil)

        id (or id (-> (Math/random)
                      (.toString 36)
                      (.substr 2 9)))
        style (or style {:height "400px" :width "100%"})
        kill! (fn [board props]
                (.suspendUpdate board)
                (-> (.-JSXGraph jsx) (.freeBoard board))
                (when-let [ref (:ref props)]
                  (ref nil))
                nil)
        init! (fn [props]
                (let [board (-> (.-JSXGraph jsx)
                                (.initBoard id (clj->js props)))]
                  (when-let [ref (:ref props)]
                    (ref board))
                  board))]
    (re/create-class
     {:display-name  "JSXGraph"
      :component-did-mount
      (fn [this]
        (reset! !board (init! (re/props this))))

      :component-will-unmount
      (fn [this]
        (swap! !board kill! re/props this))

      :component-did-update
      (fn [this [_ p]]
        (let [old-props (if (map? p) p {})
              new-props (or (re/props this) {})]
          (when (not= old-props new-props)
            (swap! !board (fn [old-board]
                            (when old-board (kill! old-board new-props))
                            (init! new-props))))))

      :reagent-render
      (fn [& _]
        (let [board @!board
              base  [:div {:id id :style style}]]
          (if-not board
            base
            [:div {:id id :style style}
             (into [:> Provider {:value board}]
                   ;; TODO error if component not found!
                   (map (fn [form]
                          (when form
                            (let [[k & xs] form]
                              (into [(k->component k)] xs)))))
                   (re/children
                    (re/current-component)))])))})))
