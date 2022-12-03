(ns jsxgraph.core
  "Eventually this will contain wrapper forms for jsxgraph. For now ignore the
  reactish part and just blow away the full jsxgraph whenever the input
  change.

  This is currently using my fork of jsxgraph at
  https://github.com/sritchie/jsxgraph and published to
  https://www.npmjs.com/package/@mentatcollective/jsxgraph, but these changes
  should appear upstream soon and we can back off to the official library."
  (:require [clojure.string :refer [lower-case]]
            ["@mentatcollective/jsxgraph$default" :as jsx]
            [reagent.core :as re :include-macros true]
            ["react" :as react]))

;; Utilities

(defonce my-context (react/createContext nil))
(def Provider (.-Provider my-context))

(defn to-fixed [x p]
  (.toFixed jsx x p))

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
            (let [children (re/children
                            (re/current-component))
                  extras   {:board board}]
              (into [:div {:id id :style style}]
                    (map
                     (fn [[a props & more]]
                       (if (map? props)
                         (into [a (into props extras)] more)
                         (into [a extras props] more))))
                    children)))))})))

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
      (let [{:strs [board parents] :as props} (js->clj props)
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

(def Angle (element "angle"))
(def Arc (element "arc"))
(def Arrow (element "arrow"))
(def ArrowParallel (element "arrowparallel"))
(def Axis (element "axis"))
(def Bisector (element "bisector"))
(def Bisectorlines (element "bisectorlines"))
(def Boxplot (element "boxplot"))
(def Button (element "button"))
(def CardinalSpline (element "cardinalspline"))
(def Chart (element "chart"))
(def Checkbox (element "checkbox"))
(def Circle (element "circle"))
(def Circumcenter (element "circumcenter"))
(def Circumcircle (element "circumcircle"))
(def CircumcircleArc (element "circumcirclearc"))
(def CircumcircleSector (element "circumcirclesector"))
(def Comb (element "comb"))
(def Conic (element "conic"))
(def Curve (element "curve"))
(def Curve3D (element "Curve3d"))
(def CurveDifference (element "curvedifference"))
(def CurveIntersection (element "curveintersection"))
(def CurveUnion (element "curveunion"))
(def Derivative (element "derivative"))
(def Ellipse (element "ellipse"))
(def ForeignObject (element "foreignobject"))
(def FunctionGraph (element "functiongraph"))
(def FunctionGraph3D (element "functiongraph3d"))
(def Glider (element "glider"))
(def Grid (element "grid"))
(def Group (element "group"))
(def Hatch (element "hatch"))
(def Hyperbola (element "hyperbola"))
(def Image (element "image"))
(def Incenter (element "incenter"))
(def Incircle (element "incircle"))
(def Inequality (element "inequality"))
(def Input (element "input"))
(def Integral (element "integral"))
(def Intersection (element "intersection"))
(def Label (element "label"))
(def Legend (element "legend"))
(def Line (element "line"))
(def Line3D (element "Line3d"))
(def Locus (element "locus"))
(def MajorArc (element "majorarc"))
(def MajorSector (element "majorsector"))
(def MetapostSpline (element "metapostspline"))
(def Midpoint (element "midpoint"))
(def MinorArc (element "minorarc"))
(def MinorSector (element "minorsector"))
(def MirrorElement (element "mirrorelement"))
(def MirrorPoint (element "mirrorpoint"))
(def NonReflexAngle (element "nonreflexangle"))
(def Normal (element "normal"))
(def OrthogonalProjection (element "orthogonalprojection"))
(def OtherIntersection (element "otherintersection"))
(def Parabola (element "parabola"))
(def Parallel (element "parallel"))
(def ParallelPoint (element "parallelpoint"))
(def ParametricSurface3D (element "parametricsurface3d"))
(def Perpendicular (element "perpendicular"))
(def PerpendicularPoint (element "perpendicularpoint"))
(def PerpendicularSegment (element "perpendicularsegment"))
(def Point (element "point"))
(def Point3D (element "point3d"))
(def PolarLine (element "polarline"))
(def PolePoint (element "polepoint"))
(def Polygon (element "polygon"))
(def PolygonalChain (element "polygonalchain"))
(def RadicalAxis (element "radicalaxis"))
(def Reflection (element "reflection"))
(def ReflexAngle (element "reflexangle"))
(def RegularPolygon (element "regularpolygon"))
(def RiemannSum (element "riemannsum"))
(def Sector (element "sector"))
(def Segment (element "segment"))
(def Semicircle (element "semicircle"))
(def Slider (element "slider"))
(def SlopeTriangle (element "slopetriangle"))
(def Spline (element "spline"))
(def StepFunction (element "stepfunction"))
(def Tangent (element "tangent"))
(def TapeMeasure (element "tapemeasure"))
(def Text (element "text"))
(def Ticks (element "ticks"))
(def TraceCurve (element "tracecurve"))
(def Transformation (element "transformation"))
(def Turtle (element "turtle"))
(def View3D (element "view3D"))

;; ## Extensions
;;
;; TODO handle :<> in the children update for the board?? otherwise we can't use
;; that without this trick.

(defn Multi [{:keys [n] :or {n 1} :as m} i->c]
  (letfn [(f [i]
            (let [[component props & more] (i->c i)]
              (into [component (into m props)] more)))]
    (into [:<>] (map f) (range n))))

(defn PointLine
  "Annoyingly, if you want to make NEW components that wrap the others, you need
  to be careful about passing along props down the line.

  ```
  [jsx/PointLine {} 3]
  ```"
  [props x]
  (letfn [(f [i]
            [Point [(- i) i] (assoc props :name (str i) :strokecolor "red")])]
    (into [:<>] (map f) (range x))))

;; TODO
;;
;; - add jsxgraph prefix to my special keywords like board, etc so they don't clash, counter too.
;; - document the madness
;; - rebuild one of the Sam Zhang essays using mathbox and jsxgraph. Get some!
