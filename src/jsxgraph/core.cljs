(ns jsxgraph.core
  "Eventually this will contain wrapper forms for jsxgraph. For now ignore the
  reactish part and just blow away the full jsxgraph whenever the input
  change.

  This is currently using my fork of jsxgraph at
  https://github.com/sritchie/jsxgraph and published to
  https://www.npmjs.com/package/@mentatcollective/jsxgraph, but these changes
  should appear upstream soon and we can back off to the official library."
  (:require ["@mentatcollective/jsxgraph$default" :as jsx]
            [reagent.core :as re :include-macros true]
            ["react" :as react]))

;; Utilities

(defonce ^:no-doc board-context (react/createContext nil))
(def ^:no-doc Provider (.-Provider board-context))

;; Components

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
                   (re/children
                    (re/current-component)))])))})))

(defn add-item! [name board elems props]
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

(defn element [name]
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
             (let [item (add-item! name board parents props)]
               (when ref (ref item))
               (fn unmount []
                 (when board (.removeObject board item))
                 (when ref (ref nil)))))))
        nil)))))

;; ## Elements
;;
;; see `ElementType` in index.d.ts.

(def ^{:doc "https://jsxgraph.org/docs/symbols/Angle.html"}
  Angle
  (element "angle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Arc.html"}
  Arc
  (element "arc"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Arrow.html"}
  Arrow
  (element "arrow"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/ArrowParallel.html"}
  ArrowParallel
  (element "arrowparallel"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Axis.html"}
  Axis
  (element "axis"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Bisector.html"}
  Bisector
  (element "bisector"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Bisectorlines.html"}
  Bisectorlines
  (element "bisectorlines"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Boxplot.html"}
  Boxplot
  (element "boxplot"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Button.html"}
  Button
  (element "button"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CardinalSpline.html"}
  CardinalSpline
  (element "cardinalspline"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Chart.html"}
  Chart
  (element "chart"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Checkbox.html"}
  Checkbox
  (element "checkbox"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Circle.html"}
  Circle
  (element "circle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Circumcenter.html"}
  Circumcenter
  (element "circumcenter"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Circumcircle.html"}
  Circumcircle
  (element "circumcircle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CircumcircleArc.html"}
  CircumcircleArc
  (element "circumcirclearc"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CircumcircleSector.html"}
  CircumcircleSector
  (element "circumcirclesector"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Comb.html"}
  Comb
  (element "comb"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Conic.html"}
  Conic
  (element "conic"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Curve.html"}
  Curve
  (element "curve"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Curve3D.html"}
  Curve3D
  (element "Curve3d"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CurveDifference.html"}
  CurveDifference
  (element "curvedifference"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CurveIntersection.html"}
  CurveIntersection
  (element "curveintersection"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/CurveUnion.html"}
  CurveUnion
  (element "curveunion"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Derivative.html"}
  Derivative
  (element "derivative"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Ellipse.html"}
  Ellipse
  (element "ellipse"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/ForeignObject.html"}
  ForeignObject
  (element "foreignobject"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/FunctionGraph.html"}
  FunctionGraph
  (element "functiongraph"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/FunctionGraph3D.html"}
  FunctionGraph3D
  (element "functiongraph3d"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Glider.html"}
  Glider
  (element "glider"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Grid.html"}
  Grid
  (element "grid"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Group.html"}
  Group
  (element "group"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Hatch.html"}
  Hatch
  (element "hatch"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Hyperbola.html"}
  Hyperbola
  (element "hyperbola"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Image.html"}
  Image
  (element "image"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Incenter.html"}
  Incenter
  (element "incenter"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Incircle.html"}
  Incircle
  (element "incircle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Inequality.html"}
  Inequality
  (element "inequality"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Input.html"}
  Input
  (element "input"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Integral.html"}
  Integral
  (element "integral"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Intersection.html"}
  Intersection
  (element "intersection"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Label.html"}
  Label
  (element "label"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Legend.html"}
  Legend
  (element "legend"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Line.html"}
  Line
  (element "line"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Line3D.html"}
  Line3D
  (element "Line3d"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Locus.html"}
  Locus
  (element "locus"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MajorArc.html"}
  MajorArc
  (element "majorarc"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MajorSector.html"}
  MajorSector
  (element "majorsector"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MetapostSpline.html"}
  MetapostSpline
  (element "metapostspline"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Midpoint.html"}
  Midpoint
  (element "midpoint"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MinorArc.html"}
  MinorArc
  (element "minorarc"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MinorSector.html"}
  MinorSector
  (element "minorsector"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Mirr.html"}
  MirrorElement
  (element "mirrorelement"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/MirrorPoint.html"}
  MirrorPoint
  (element "mirrorpoint"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/NonReflexAngle.html"}
  NonReflexAngle
  (element "nonreflexangle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Normal.html"}
  Normal
  (element "normal"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/OrthogonalProjection.html"}
  OrthogonalProjection
  (element "orthogonalprojection"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/OtherIntersection.html"}
  OtherIntersection
  (element "otherintersection"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Parabola.html"}
  Parabola
  (element "parabola"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Parallel.html"}
  Parallel
  (element "parallel"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/ParallelPoint.html"}
  ParallelPoint
  (element "parallelpoint"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/ParametricSurface3D.html"}
  ParametricSurface3D
  (element "parametricsurface3d"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Perpendicular.html"}
  Perpendicular
  (element "perpendicular"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/PerpendicularPoint.html"}
  PerpendicularPoint
  (element "perpendicularpoint"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/PerpendicularSegment.html"}
  PerpendicularSegment
  (element "perpendicularsegment"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Point.html"}
  Point
  (element "point"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Point3D.html"}
  Point3D
  (element "point3d"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/PolarLine.html"}
  PolarLine
  (element "polarline"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/PolePoint.html"}
  PolePoint
  (element "polepoint"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Polygon.html"}
  Polygon
  (element "polygon"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/PolygonalChain.html"}
  PolygonalChain
  (element "polygonalchain"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/RadicalAxis.html"}
  RadicalAxis
  (element "radicalaxis"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Reflection.html"}
  Reflection
  (element "reflection"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/ReflexAngle.html"}
  ReflexAngle
  (element "reflexangle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/RegularPolygon.html"}
  RegularPolygon
  (element "regularpolygon"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/RiemannSum.html"}
  RiemannSum
  (element "riemannsum"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Sector.html"}
  Sector
  (element "sector"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Segment.html"}
  Segment
  (element "segment"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Semicircle.html"}
  Semicircle
  (element "semicircle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Slider.html"}
  Slider
  (element "slider"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/SlopeTriangle.html"}
  SlopeTriangle
  (element "slopetriangle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Spline.html"}
  Spline
  (element "spline"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/StepFunction.html"}
  StepFunction
  (element "stepfunction"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Tangent.html"}
  Tangent
  (element "tangent"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/TapeMeasure.html"}
  TapeMeasure
  (element "tapemeasure"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Text.html"}
  Text
  (element "text"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Ticks.html"}
  Ticks
  (element "ticks"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/TraceCurve.html"}
  TraceCurve
  (element "tracecurve"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Transformation.html"}
  Transformation
  (element "transformation"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/Turtle.html"}
  Turtle
  (element "turtle"))

(def ^{:doc "https://jsxgraph.org/docs/symbols/View3D.html"}
  View3D
  (element "view3D"))
