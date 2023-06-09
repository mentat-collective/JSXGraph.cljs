(ns jsxgraph.core
  "React/Reagent implementation of a component that exposes the API from
  http://jsxgraph.org/ in a more declarative way."
  (:require ["jsxgraph" :as jsx]
            ["react" :as react]
            [reagent.core :as re]))

;; ## Vendored Utilities
;;
;; The following five functions come from `reagent.core/props` and
;; `reagent.core/children`; I'm pulling them in here because SCI doesn't make
;; this function available, and evaluating `jsxgraph.core` with SCI fails
;; without this change.
;;
;; I'll delete these when I port this namespace to function components and no
;; longer need this detection.

(defn- shallow-obj-to-map [o]
  (let [ks (js-keys o)
        len (alength ks)]
    (loop [m {}
           i 0]
      (if (< i len)
        (let [k (aget ks i)]
          (recur (assoc m (keyword k) (aget o k))
                 (inc i)))
        m))))

(defn- extract-props [v]
  (let [p (nth v 1 nil)]
    (when (map? p) p)))

(defn- get-props [^js c]
  (let [p (.-props c)]
    (if-some [v (.-argv p)]
      (extract-props v)
      (shallow-obj-to-map p))))

(defn extract-children [v]
  (let [p (nth v 1 nil)
        first-child (if (or (nil? p) (map? p)) 2 1)]
    (when (> (count v) first-child)
      (subvec v first-child))))

(defn get-children [^js c]
  (let [p (.-props c)]
    (if-some [v (.-argv p)]
      (extract-children v)
      (->> (.-children p)
           (react/Children.toArray)
           (into [])))))

;; ## Utilities

(defonce ^{:no-doc true
           :doc "We use this context like a dynamic variable, to provide each
           component with a `board` instance that's accessible without passing
           the board down via `props`."}
  board-context
  (react/createContext nil))

(def ^:no-doc Provider
  "Use like

  ```clj
  [:> Provider {:value <board>} <children>]
  ```

  to provide any element in `<children>` with access to the bound `board` instance
  via `(react/useContext board-context)`."
  (.-Provider board-context))

(defn create
  "Similar
  to [JXG.Board#create](https://jsxgraph.org/docs/symbols/JXG.Board.html#create),
  with two additional features:

  - `parents` and `attributes` and can be written in Clojure
  - `attributes` takes an optional `\"on\"` attribute.

  This `\"on\"` map requires kv pairs of type `{<event-name> <event-handler>}`.
  After element creation, each of these handlers is registered with the new
  element via `element.on`.

  Returns the newly created element."
  [board element-type parents attributes]
  (let [p (.create board
                   element-type
                   (clj->js parents)
                   (clj->js
                    (dissoc attributes "on")))]
    (when-let [m (attributes "on")]
      (doseq [[k f] m]
        (let [callback (fn [_] (f p))]
          (if (= k "update")
            (if-let [coords (.-coords p)]
              (.on coords "update" callback)
              (.on board "update" callback))
            (.on p k callback)))))
    p))

;; Components

(defn ^:no-doc element
  "Given a string `element-type`, returns a Reagent component that will attempt to
  mount itself into the board stored in [[board-context]]."
  [element-type]
  (re/adapt-react-class
   (react/forwardRef
    (fn [props ref]
      (let [board (react/useContext board-context)
            {:strs [parents] :as props} (js->clj props)
            props (dissoc props "parents")]

        (when-not board
          (js/console.error
           (str "Warning: instance of type " element-type
                " must live under a `JSXGraph` component! "
                "Otherwise nothing can mount.")))

        (when-not parents
          (throw
           (js/Error.
            (str "Error: instance of type "
                 element-type
                 " is missing a `:parents` property."))))

        (react/useEffect
         (fn mount []
           ;; sometimes a stale dead board is passed in; in this case the
           ;; `-renderer` property is nil, so we guard against that.
           (if (and board (.-renderer board))
             (let [item (create board element-type parents props)]
               (when ref (ref item))
               (fn unmount []
                 (when board (.removeObject board item))
                 (when ref (ref nil))))
             js/undefined)))
        nil)))))

;; ## Elements

(def ^:no-doc k->elem
  "Map of element type to the actual Reagent component representing that type."
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
;; see `ElementType` in index.d.ts for the full list of valid elements.

(def Angle
  "Reagent component representing
  the [Angle](https://jsxgraph.org/docs/symbols/Angle.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Angle.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "angle"))

(def Arc
  "Reagent component representing
  the [Arc](https://jsxgraph.org/docs/symbols/Arc.html) JSXGraph element. This
  component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Arc.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "arc"))

(def Arrow
  "Reagent component representing
  the [Arrow](https://jsxgraph.org/docs/symbols/Arrow.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Arrow.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "arrow"))

(def ArrowParallel
  "Reagent component representing
  the [ArrowParallel](https://jsxgraph.org/docs/symbols/ArrowParallel.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/ArrowParallel.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "arrowparallel"))

(def Axis
  "Reagent component representing
  the [Axis](https://jsxgraph.org/docs/symbols/Axis.html) JSXGraph element. This
  component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Axis.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "axis"))

(def Bisector
  "Reagent component representing
  the [Bisector](https://jsxgraph.org/docs/symbols/Bisector.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Bisector.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "bisector"))

(def Bisectorlines
  "Reagent component representing
  the [Bisectorlines](https://jsxgraph.org/docs/symbols/Bisectorlines.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Bisectorlines.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "bisectorlines"))

(def Boxplot
  "Reagent component representing
  the [Boxplot](https://jsxgraph.org/docs/symbols/Boxplot.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Boxplot.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "boxplot"))

(def Button
  "Reagent component representing
  the [Button](https://jsxgraph.org/docs/symbols/Button.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Button.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "button"))

(def CardinalSpline
  "Reagent component representing
  the [CardinalSpline](https://jsxgraph.org/docs/symbols/CardinalSpline.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CardinalSpline.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "cardinalspline"))

(def Chart
  "Reagent component representing
  the [Chart](https://jsxgraph.org/docs/symbols/Chart.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Chart.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "chart"))

(def Checkbox
  "Reagent component representing
  the [Checkbox](https://jsxgraph.org/docs/symbols/Checkbox.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Checkbox.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "checkbox"))

(def Circle
  "Reagent component representing
  the [Circle](https://jsxgraph.org/docs/symbols/Circle.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Circle.html), the map must contain an
  "
  (k->elem "circle"))

(def Circumcenter
  "Reagent component representing
  the [Circumcenter](https://jsxgraph.org/docs/symbols/Circumcenter.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Circumcenter.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "circumcenter"))

(def Circumcircle
  "Reagent component representing
  the [Circumcircle](https://jsxgraph.org/docs/symbols/Circumcircle.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Circumcircle.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "circumcircle"))

(def CircumcircleArc
  "Reagent component representing
  the [CircumcircleArc](https://jsxgraph.org/docs/symbols/CircumcircleArc.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CircumcircleArc.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "circumcirclearc"))

(def CircumcircleSector
  "Reagent component representing
  the [CircumcircleSector](https://jsxgraph.org/docs/symbols/CircumcircleSector.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CircumcircleSector.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "circumcirclesector"))

(def Comb
  "Reagent component representing
  the [Comb](https://jsxgraph.org/docs/symbols/Comb.html) JSXGraph element. This
  component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Comb.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "comb"))

(def Conic
  "Reagent component representing
  the [Conic](https://jsxgraph.org/docs/symbols/Conic.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Conic.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "conic"))

(def Curve
  "Reagent component representing
  the [Curve](https://jsxgraph.org/docs/symbols/Curve.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Curve.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "curve"))

(def CurveDifference
  "Reagent component representing
  the [CurveDifference](https://jsxgraph.org/docs/symbols/CurveDifference.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CurveDifference.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "curvedifference"))

(def CurveIntersection
  "Reagent component representing
  the [CurveIntersection](https://jsxgraph.org/docs/symbols/CurveIntersection.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CurveIntersection.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "curveintersection"))

(def CurveUnion
  "Reagent component representing
  the [CurveUnion](https://jsxgraph.org/docs/symbols/CurveUnion.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/CurveUnion.html), the map must contain
  an entry `:parents` with value containing the element's required parents."

  (k->elem "curveunion"))

(def Derivative
  "Reagent component representing
  the [Derivative](https://jsxgraph.org/docs/symbols/Derivative.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Derivative.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "derivative"))

(def Ellipse
  "Reagent component representing
  the [Ellipse](https://jsxgraph.org/docs/symbols/Ellipse.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Ellipse.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "ellipse"))

(def ForeignObject
  "Reagent component representing
  the [ForeignObject](https://jsxgraph.org/docs/symbols/ForeignObject.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/ForeignObject.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "foreignobject"))

(def FunctionGraph
  "Reagent component representing
  the [FunctionGraph](https://jsxgraph.org/docs/symbols/FunctionGraph.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/FunctionGraph.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "functiongraph"))

(def Glider
  "Reagent component representing
  the [Glider](https://jsxgraph.org/docs/symbols/Glider.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Glider.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "glider"))

(def Grid
  "Reagent component representing
  the [Grid](https://jsxgraph.org/docs/symbols/Grid.html) JSXGraph element. This
  component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Grid.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "grid"))

(def Group
  "Reagent component representing
  the [Group](https://jsxgraph.org/docs/symbols/Group.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Group.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "group"))

(def Hatch
  "Reagent component representing
  the [Hatch](https://jsxgraph.org/docs/symbols/Hatch.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Hatch.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "hatch"))

(def Hyperbola
  "Reagent component representing
  the [Hyperbola](https://jsxgraph.org/docs/symbols/Hyperbola.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Hyperbola.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "hyperbola"))

(def Image
  "Reagent component representing
  the [Image](https://jsxgraph.org/docs/symbols/Image.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Image.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "image"))

(def Incenter
  "Reagent component representing
  the [Incenter](https://jsxgraph.org/docs/symbols/Incenter.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Incenter.html), the map must contain
  an entry `:parents` with value containing the element's required parents."

  (k->elem "incenter"))

(def Incircle
  "Reagent component representing
  the [Incircle](https://jsxgraph.org/docs/symbols/Incircle.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Incircle.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "incircle"))

(def Inequality
  "Reagent component representing
  the [Inequality](https://jsxgraph.org/docs/symbols/Inequality.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Inequality.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "inequality"))

(def Input
  "Reagent component representing
  the [Input](https://jsxgraph.org/docs/symbols/Input.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Input.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "input"))

(def Integral
  "Reagent component representing
  the [Integral](https://jsxgraph.org/docs/symbols/Integral.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Integral.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "integral"))

(def Intersection
  "Reagent component representing
  the [Intersection](https://jsxgraph.org/docs/symbols/Intersection.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Intersection.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "intersection"))

(def Label
  "Reagent component representing
  the [Label](https://jsxgraph.org/docs/symbols/Label.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Label.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "label"))

(def Legend
  "Reagent component representing
  the [Legend](https://jsxgraph.org/docs/symbols/Legend.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Legend.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "legend"))

(def Line
  "Reagent component representing
  the [Line](https://jsxgraph.org/docs/symbols/Line.html) JSXGraph element. This
  component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Line.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "line"))

(def Locus
  "Reagent component representing
  the [Locus](https://jsxgraph.org/docs/symbols/Locus.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Locus.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "locus"))

(def MajorArc
  "Reagent component representing
  the [MajorArc](https://jsxgraph.org/docs/symbols/MajorArc.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MajorArc.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "majorarc"))

(def MajorSector
  "Reagent component representing
  the [MajorSector](https://jsxgraph.org/docs/symbols/MajorSector.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MajorSector.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "majorsector"))

(def MetapostSpline
  "Reagent component representing
  the [MetapostSpline](https://jsxgraph.org/docs/symbols/MetapostSpline.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MetapostSpline.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "metapostspline"))

(def Midpoint
  "Reagent component representing
  the [Midpoint](https://jsxgraph.org/docs/symbols/Midpoint.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Midpoint.html), the map must contain
  an entry `:parents` with value containing the element's required parents."

  (k->elem "midpoint"))

(def MinorArc
  "Reagent component representing
  the [MinorArc](https://jsxgraph.org/docs/symbols/MinorArc.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MinorArc.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "minorarc"))

(def MinorSector
  "Reagent component representing
  the [MinorSector](https://jsxgraph.org/docs/symbols/MinorSector.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MinorSector.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "minorsector"))

(def MirrorElement
  "Reagent component representing
  the [MirrorElement](https://jsxgraph.org/docs/symbols/MirrorElement.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MirrorElement.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "mirrorelement"))

(def MirrorPoint
  "Reagent component representing
  the [MirrorPoint](https://jsxgraph.org/docs/symbols/MirrorPoint.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/MirrorPoint.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "mirrorpoint"))

(def NonReflexAngle
  "Reagent component representing
  the [NonReflexAngle](https://jsxgraph.org/docs/symbols/NonReflexAngle.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/NonReflexAngle.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "nonreflexangle"))

(def Normal
  "Reagent component representing
  the [Normal](https://jsxgraph.org/docs/symbols/Normal.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Normal.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "normal"))

(def OrthogonalProjection
  "Reagent component representing
  the [OrthogonalProjection](https://jsxgraph.org/docs/symbols/OrthogonalProjection.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/OrthogonalProjection.html), the map
  must contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "orthogonalprojection"))

(def OtherIntersection
  "Reagent component representing
  the [OtherIntersection](https://jsxgraph.org/docs/symbols/OtherIntersection.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/OtherIntersection.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "otherintersection"))

(def Parabola
  "Reagent component representing
  the [Parabola](https://jsxgraph.org/docs/symbols/Parabola.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Parabola.html), the map must contain
  an entry `:parents` with value containing the element's required parents."

  (k->elem "parabola"))

(def Parallel
  "Reagent component representing
  the [Parallel](https://jsxgraph.org/docs/symbols/Parallel.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Parallel.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "parallel"))

(def ParallelPoint
  "Reagent component representing
  the [ParallelPoint](https://jsxgraph.org/docs/symbols/ParallelPoint.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/ParallelPoint.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "parallelpoint"))

(def Perpendicular
  "Reagent component representing
  the [Perpendicular](https://jsxgraph.org/docs/symbols/Perpendicular.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Perpendicular.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "perpendicular"))

(def PerpendicularPoint
  "Reagent component representing
  the [PerpendicularPoint](https://jsxgraph.org/docs/symbols/PerpendicularPoint.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/PerpendicularPoint.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "perpendicularpoint"))

(def PerpendicularSegment
  "Reagent component representing
  the [PerpendicularSegment](https://jsxgraph.org/docs/symbols/PerpendicularSegment.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/PerpendicularSegment.html), the map
  must contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "perpendicularsegment"))

(def Point
  "Reagent component representing
  the [Point](https://jsxgraph.org/docs/symbols/Point.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Point.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "point"))

(def PolarLine
  "Reagent component representing
  the [PolarLine](https://jsxgraph.org/docs/symbols/PolarLine.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/PolarLine.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "polarline"))

(def PolePoint
  "Reagent component representing
  the [PolePoint](https://jsxgraph.org/docs/symbols/PolePoint.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/PolePoint.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "polepoint"))

(def Polygon
  "Reagent component representing
  the [Polygon](https://jsxgraph.org/docs/symbols/Polygon.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Polygon.html), the map must contain an
  entry `:parents` with value containing the element's required parents."

  (k->elem "polygon"))

(def PolygonalChain
  "Reagent component representing
  the [PolygonalChain](https://jsxgraph.org/docs/symbols/PolygonalChain.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/PolygonalChain.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "polygonalchain"))

(def RadicalAxis
  "Reagent component representing
  the [RadicalAxis](https://jsxgraph.org/docs/symbols/RadicalAxis.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/RadicalAxis.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "radicalaxis"))

(def Reflection
  "Reagent component representing
  the [Reflection](https://jsxgraph.org/docs/symbols/Reflection.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Reflection.html), the map must contain
  an entry `:parents` with value containing the element's required parents."

  (k->elem "reflection"))

(def ReflexAngle
  "Reagent component representing
  the [ReflexAngle](https://jsxgraph.org/docs/symbols/ReflexAngle.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/ReflexAngle.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "reflexangle"))

(def RegularPolygon
  "Reagent component representing
  the [RegularPolygon](https://jsxgraph.org/docs/symbols/RegularPolygon.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/RegularPolygon.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "regularpolygon"))

(def RiemannSum
  "Reagent component representing
  the [RiemannSum](https://jsxgraph.org/docs/symbols/RiemannSum.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/RiemannSum.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "riemannsum"))

(def Sector
  "Reagent component representing
  the [Sector](https://jsxgraph.org/docs/symbols/Sector.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Sector.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "sector"))

(def Segment
  "Reagent component representing
  the [Segment](https://jsxgraph.org/docs/symbols/Segment.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Segment.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "segment"))

(def Semicircle
  "Reagent component representing
  the [Semicircle](https://jsxgraph.org/docs/symbols/Semicircle.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Semicircle.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "semicircle"))

(def Slider
  "Reagent component representing
  the [Slider](https://jsxgraph.org/docs/symbols/Slider.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Slider.html), the map must contain an
  entry `:parents` with value containing the element's required parents."

  (k->elem "slider"))

(def SlopeTriangle
  "Reagent component representing
  the [SlopeTriangle](https://jsxgraph.org/docs/symbols/SlopeTriangle.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/SlopeTriangle.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "slopetriangle"))

(def Spline
  "Reagent component representing
  the [Spline](https://jsxgraph.org/docs/symbols/Spline.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Spline.html), the map must contain an
  entry `:parents` with value containing the element's required parents."

  (k->elem "spline"))

(def StepFunction
  "Reagent component representing
  the [StepFunction](https://jsxgraph.org/docs/symbols/StepFunction.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/StepFunction.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "stepfunction"))

(def Tangent
  "Reagent component representing
  the [Tangent](https://jsxgraph.org/docs/symbols/Tangent.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Tangent.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "tangent"))

(def TapeMeasure
  "Reagent component representing
  the [TapeMeasure](https://jsxgraph.org/docs/symbols/TapeMeasure.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/TapeMeasure.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "tapemeasure"))

(def Text
  "Reagent component representing
  the [Text](https://jsxgraph.org/docs/symbols/Text.html) JSXGraph element. This
  component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Text.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "text"))

(def Ticks
  "Reagent component representing
  the [Ticks](https://jsxgraph.org/docs/symbols/Ticks.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Ticks.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "ticks"))

(def TraceCurve
  "Reagent component representing
  the [TraceCurve](https://jsxgraph.org/docs/symbols/TraceCurve.html) JSXGraph
  element. This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/TraceCurve.html), the map must contain
  an entry `:parents` with value containing the element's required parents."
  (k->elem "tracecurve"))

(def Transformation
  "Reagent component representing
  the [Transformation](https://jsxgraph.org/docs/symbols/Transformation.html)
  JSXGraph element. This component must appear as a child of a [[JSXGraph]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Transformation.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "transformation"))

(def Turtle
  "Reagent component representing
  the [Turtle](https://jsxgraph.org/docs/symbols/Turtle.html) JSXGraph element.
  This component must appear as a child of a [[JSXGraph]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Turtle.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "turtle"))

;; ## 3D Components

(def Curve3D
  "Reagent component representing
  the [Curve3D](https://jsxgraph.org/docs/symbols/Curve3D.html) JSXGraph
  element. This component must appear as a child of a [[View3D]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Curve3D.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "Curve3d"))

(def FunctionGraph3D
  "Reagent component representing
  the [FunctionGraph3D](https://jsxgraph.org/docs/symbols/FunctionGraph3D.html)
  JSXGraph element. This component must appear as a child of a [[View3D]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/FunctionGraph3D.html), the map must
  contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "functiongraph3d"))

(def Line3D
  "Reagent component representing
  the [Line3D](https://jsxgraph.org/docs/symbols/Line3D.html) JSXGraph element.
  This component must appear as a child of a [[View3D]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Line3D.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "Line3d"))

(def ParametricSurface3D
  "Reagent component representing
  the [ParametricSurface3D](https://jsxgraph.org/docs/symbols/ParametricSurface3D.html)
  JSXGraph element. This component must appear as a child of a [[View3D]]
  component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/ParametricSurface3D.html), the map
  must contain an entry `:parents` with value containing the element's required
  parents."
  (k->elem "parametricsurface3d"))

(def Point3D
  "Reagent component representing
  the [Point3D](https://jsxgraph.org/docs/symbols/Point3D.html) JSXGraph
  element. This component must appear as a child of a [[View3D]] component.

  The element takes a single map of attributes. In addition to the optional
  attributes specified in the [API
  docs](https://jsxgraph.org/docs/symbols/Point3D.html), the map must contain an
  entry `:parents` with value containing the element's required parents."
  (k->elem "point3d"))

(defn ^:no-doc k->component [k]
  (if (or (string? k) (keyword? k))
    (k->elem (name k))
    k))

;; ## JSXGraph Component

(defn JSXGraph
  "Top-level Reagent component used to represent a JSXGraph board. Takes

  - a `keyword => value` map of attributes (see the `attributes` section under
    `Parameters` at [this
    page](https://jsxgraph.org/docs/symbols/JXG.JSXGraph.html)) for allowed values

  - Any number of child components representing `JSXGraph` elements.

  Child components are added to the board in the order that they're listed. A
  full re-render is triggered any time any of the properties of the board or any
  child component changes.

  Pass `:id` and/or `:style` to configure the `div` into which the controlled
  instance of `JXG.Board` mounts itself.

  If you need access to the actual instance of
  a [`JXG.Board`](https://jsxgraph.org/docs/symbols/JXG.Board.html), pass a
  callback function using the `:ref` keyword. The `:ref` function receives an
  instance of the board when it is mounted, and `nil` when the board is
  destroyed or remounted."
  [{:keys [id style]} & _]
  (let [!board    (re/atom nil)
        id (or id (str "id" (-> (Math/random)
                                (.toString 36)
                                (.substr 2 9))))
        style (or style {:height "400px" :width "100%"})
        kill! (fn [board props]
                (when (.-renderer board)
                  (.suspendUpdate board)
                  (.freeBoard jsx/JSXGraph board))
                (when-let [ref (:ref props)]
                  (ref nil))
                nil)
        init! (fn [props]
                (let [board (.initBoard jsx/JSXGraph id (clj->js props))]
                  (when-let [ref (:ref props)]
                    (ref board))
                  board))]
    (re/create-class
     {:display-name  "JSXGraph"
      :component-did-mount
      (fn [this]
        (reset! !board (init! (get-props this))))

      :component-will-unmount
      (fn [this]
        (swap! !board kill! (get-props this)))

      :component-did-update
      (fn [this [_ p]]
        (let [old-props (if (map? p) p {})
              new-props (or (get-props this) {})]
          ;; Remount when the values of any properties change, otherwise don't.
          (when (not= old-props new-props)
            (swap! !board (fn [old-board]
                            (when old-board (kill! old-board new-props))
                            (init! new-props))))))

      :reagent-render
      (fn [_ & children]
        (let [board @!board
              base  [:div {:id id :style style}]]
          ;; On the first load, the board has not mounted itself yet, so ignore
          ;; all children and mount the target div. This will trigger a `reset!`
          ;; of `!board`, which will mount all child components.
          (if-not board
            base
            [:div {:id id :style style}
             (into [:> Provider {:value board}]
                   ;; TODO error if component not found!
                   (map (fn [form]
                          (when form
                            (let [[k & xs] form]
                              (if-let [c (k->component k)]
                                (into [c] xs)
                                (throw
                                 (js/Error.
                                  (str "Component " form " has  "
                                       "`nil` or an unrecognized string or "
                                       "keyword in its first entry."))))))))
                   children)])))})))
