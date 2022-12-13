^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns jsxgraph.notebook
  (:require [mentat.clerk-utils :refer [cljs]]))

;; # JSXGraph.cljs
;;
;; A [React](https://reactjs.org/)
;; / [Reagent](https://reagent-project.github.io/) interface to
;; the [JSXGraph](https://jsxgraph.org/) interactive geometry and mathematics
;; library.

;; [![Build Status](https://github.com/mentat-collective/jsxgraph.cljs/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/jsxgraph.cljs/actions/workflows/kondo.yml)
;; [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mentat-collective/jsxgraph.cljs/blob/main/LICENSE)
;; [![cljdoc badge](https://cljdoc.org/badge/org.mentat/jsxgraph.cljs)](https://cljdoc.org/d/org.mentat/jsxgraph.cljs/CURRENT)
;; [![Clojars Project](https://img.shields.io/clojars/v/org.mentat/jsxgraph.cljs.svg)](https://clojars.org/org.mentat/jsxgraph.cljs)
;;
;; > The interactive documentation on this page was generated from [this source
;; > file](https://github.com/mentat-collective/jsxgraph.cljs/blob/$GIT_SHA/dev/jsxgraph/notebook.clj)
;; > using [Clerk](https://github.com/nextjournal/clerk). Follow
;; > the [instructions in the
;; > README](https://github.com/mentat-collective/jsxgraph.cljs/tree/main#interactive-documentation-via-clerk)
;; > to run and modify this notebook on your machine!
;; >
;; > See the [Github
;; > project](https://github.com/mentat-collective/jsxgraph.cljs) for more
;; > details, and the [cljdoc
;; > page](https://cljdoc.org/d/org.mentat/jsxgraph.cljs/CURRENT/doc/readme) for
;; > detailed API documentation.
;;
;; ## What is JSXGraph?
;;
;; [JSXGraph](https://jsxgraph.org/) is a JavaScript library that lets you build
;; 2-dimensional scenes full of geometric objects, function curves and
;; interactive UI elements, potentially with many complex constraints defined
;; between these objects.
;;
;; For example, here is a visual JSXGraph proof that the [Euler
;; line](https://en.wikipedia.org//wiki/Euler_line) passes through any
;; triangle's [orthocenter](https://en.wikipedia.org/wiki/Orthocenter), [centroid](https://en.wikipedia.org/wiki/Centroid)
;; and [circumcenter](https://en.wikipedia.org/wiki/Circumcenter). Drag the
;; triangle's corner points around and watch the example respond:
;;
;; > The 'show code' link below will expand the example's source. Use the
;; > checkmarks to toggle on and off the elements that contribute to each point
;; > on the Euler Line.

^{:nextjournal.clerk/visibility {:code :fold}}
(cljs
 (let [!state (atom
               {:circumcenter true
                :orthocenter true
                :centroid true})
       centroid?     #(:centroid @!state)
       orthocenter?  #(:orthocenter @!state)
       circumcenter? #(:circumcenter @!state)
       cerise {:strokeColor "#901B77"
               :fillColor "#CA147A"}
       grass {:strokeColor "#009256"
              :fillColor "#65B72E"
              :visible true
              :withLabel true}
       perpendicular {:strokeColor "black"
                      :visible orthocenter?
                      :dash 1
                      :strokeWidth 1}
       median {:strokeWidth 1
               :strokeColor "#333333"
               :dash 2}]
   [jsx/JSXGraph
    {:boundingbox [-1.5 2 1.5 -1]
     :showCopyright false
     :keepaspectratio true}
    [:checkbox {:parents [-2 1.5 "Circumcenter"]
                :checked (:circumcenter @!state)
                :on {:up #(swap! !state assoc :circumcenter (not (.Value %)))}}]
    [:checkbox {:parents [-2 1.3 "Orthocenter"]
                :checked (:orthocenter @!state)
                :on {:up #(swap! !state assoc :orthocenter (not (.Value %)))}}]
    [:checkbox {:parents [-2 1.1 "Centroid"]
                :checked (:centroid @!state)
                :on {:up #(swap! !state assoc :centroid (not (.Value %)))}}]

    ;; Triangle
    [:point (assoc cerise :parents [1 0] :id "A")]
    [:point (assoc cerise :parents [-1 0] :id "B")]
    [:point (assoc cerise :parents [0.65 1.45] :id "C")]
    [:polygon
     {:parents ["A" "B" "C"]
      :borders {:ids ["pol_0" "pol_1" "pol_2"]}
      :fillColor "#FFFF00"
      :lines {:strokeWidth 2
              :strokeColor "#009256"}}]

    ;; ## Circumcircle
    [:circumcircle
     {:parents ["A" "B" "C"]
      :strokeColor "#000000"
      :visible circumcenter?
      :dash 3
      :strokeWidth 1
      :center (assoc grass
                     :name "U"
                     :visible circumcenter?)}]

    ;; ## Orthocenter
    ;;
    ;; Altitudes
    [:perpendicular
     (assoc perpendicular :parents ["pol_0" "C"] :id "pABC")]
    [:intersection
     (assoc cerise
            :parents ["pol_0" "pABC"]
            :visible orthocenter?
            :name "H_c")]

    [:perpendicular
     (assoc perpendicular :parents ["pol_1" "A"] :id "pBCA")]
    [:intersection
     (assoc cerise
            :parents ["pol_1" "pBCA"]
            :visible orthocenter?
            :name "H_a")]

    [:perpendicular
     (assoc perpendicular :parents ["pol_2" "B"] :id "pCAB")]
    [:intersection
     (assoc cerise
            :parents ["pol_2" "pCAB"]
            :visible orthocenter?
            :name "H_b")]

    ;; Intersection of Altitudes
    [:intersection
     (assoc grass
            :visible orthocenter?
            :id "i1"
            :name "H"
            :parents ["pABC" "pCAB" 0])]

    ;; ## Centroid
    ;;
    ;; Medians
    [:midpoint
     (assoc cerise :name "M_a"
            :visible centroid?
            :parents ["B" "C"])]
    [:segment
     (assoc median :id "ma"
            :visible centroid?
            :parents ["M_a" "A"])]

    [:midpoint
     (assoc cerise :name "M_b"
            :visible centroid?
            :parents ["C" "A"])]
    [:segment
     (assoc median :id "mb"
            :visible centroid?
            :parents ["M_b" "B"])]

    [:midpoint
     (assoc cerise :name "M_c"
            :visible centroid?
            :parents ["A" "B"])]
    [:segment
     (assoc median :id "mc"
            :visible centroid?
            :parents ["M_c" "C"])]

    ;; Intersection of Medians
    [:intersection
     (assoc grass :id "i2"
            :visible centroid?
            :name "S" :parents ["ma" "mc" 0])]

    ;; Euler's Line (intersection of orthocenter and median, but the
    ;; circumcenter lies on this line as well).
    [:line
     {:parents ["i1" "i2"]
      :strokeWidth 2
      :strokeColor "#901B77"}]]))

;; [JSXGraph.cljs](https://github.com/mentat-collective/jsxgraph.cljs) extends
;; JSXGraph with a [Reagent](https://reagent-project.github.io/) component that
;; makes it easy to define JSXGraph constructions inside of a user interface
;; built with Clojurescript.

;; ## Quickstart
;;
;; Install `JSXGraph.cljs` into your Clojurescript project using the
;; instructions at its Clojars page:

;; [![Clojars
;;    Project](https://img.shields.io/clojars/v/org.mentat/jsxgraph.cljs.svg)](https://clojars.org/org.mentat/jsxgraph.cljs)
;;
;; Or grab the most recent code using a Git dependency:
;;
;; ```clj
;; ;; deps
;; {org.mentat/jsxgraph.cljs
;;   {:git/sha "$GIT_SHA"}}
;; ```

;; Require `jsxgraph.core` in your namespace:

;; ```clj
;; (ns my-app
;;   (:require [jsxgraph.core :as jsx]
;;             [reagent.core :as reagent]))
;; ```
;;
;; The main entrypoint to the library is the `jsxgraph.core/JSXGraph` component.
;; Each class in the [JSXGraph API](https://jsxgraph.org/docs/index.html) has a
;; corresponding component bound as `jsx/ClassName`. Use these to build a simple
;; arrow and drag it around by its point:

(cljs
 [jsx/JSXGraph {:boundingbox [-2 2 2 -2] :axis true}
  [jsx/Arrow {:name "A" :size 4
              :parents [[0 0] [1 1]]}]])

;; This guide assumes that you're coming at `JSXGraph` for the first time
;; through `JSXGraph.cljs`. If you're coming from JavaScript, OR if you're
;; attempting to port [one of the many JSXGraph
;; examples](http://jsxgraph.org/wp/about/index.html), you'll absolutely need to
;; read [JSXGraph vs JSXGraph.cljs](#JSXGraph%20vs%20JSXGraph.cljs) below.

;; > If you're not familiar with React or Reagent, or what a "component" is,
;; > please give the [Reagent homepage](https://reagent-project.github.io/) a
;; > read. If this is your first Clojurescript experience, come say hi to
;; > me (@sritchie) in the [Clojurians Slack](http://clojurians.net/) and I'll
;; > get you started.

;; ## Guides

;; A `JSXGraph` construction consists of a "board" populated by some number of
;; "elements", where an element is an instance of one of the classes described
;; in the [JSXGraph API docs](https://jsxgraph.org/docs/index.html).
;;
;; The [React](https://reactjs.org/)
;; / [Reagent](https://reagent-project.github.io/) data model is "declarative".
;; This means that you create and populate a board by listing, in order, the
;; elements that you want to appear on the board.
;;
;; ### Creating Your First Board
;;
;; Declare a board with the `jsx/JSXGraph` component:

(cljs
 [jsx/JSXGraph {:axis true}])

;; The component takes
;;
;; - a `keyword => value` map of attributes (see the `attributes` section under
;;   `Parameters` at [this
;;   page](https://jsxgraph.org/docs/symbols/JXG.JSXGraph.html)) for allowed
;;   values
;; - Any number of child components.
;;
;; Child components are added to the board in the order that they're listed. A
;; full re-render is triggered any time any of the properties of the board or
;; any child component changes.
;;
;; For example, here's a board with two `jsx/Point`s and a `jsx/Arrow` between
;; them:

(cljs
 [jsx/JSXGraph {:boundingbox [-3 3 3 -3] :axis true}
  [jsx/Point {:name "A" :size 1 :parents [-1 1]}]
  [jsx/Point {:id "B" :name "BEE!" :size 1 :parents [2 -1]}]
  [jsx/Arrow {:size 4
              :parents ["A" "B"]}]])

;; Note these details:
;;
;; - The `Point` instances declare their initial coordinates with a vector
;;  supplied via the `:parents` key. (All elements require parents.) This leaves
;;  them free to move! Drag each `Point` around and see.
;; - The `Arrow` sets its `:parents` to points `"A"` and `"B"` using their IDs.
;;   This creates a constraint, where the `Arrow` can only be moved by moving
;;   the points.
;; - The second `Point` has a `:name` different from its `:id`. This allowed us
;;   to use the `:name` for the second `Point`'s label, and the `:id` for
;;   reference by `Arrow`.
;;
;; You can also refer to elements by their classname, written as either a string or a keyword:

(cljs
 [jsx/JSXGraph {:boundingbox [-3 3 3 -3] :axis true}
  [:point {:name "A" :size 1 :parents [-1 1]}]
  ["point" {:id "B" :name "BEE!" :size 1 :parents [2 -1]}]
  [:arrow {:size 4
           :parents ["A" "B"]}]])

;; > Note that this only works if you insert the element as a direct child of a
;; > `jsx/JSXGraph` component. When writing [Custom
;; > Components](#Custom%20Components) you'll need to write out the full
;; > `jsx/<ClassName>` form.
;;
;; ### Event Listeners
;;
;; `JSXGraph` elements fire events during various updates and user interactions.
;; To get data out of the element, pass a map of `{<event-name> <handling-fn>}`
;; to the element via the `:on` key.
;;
;; a `Point` exposes its coordinates
;; via [`X()`](https://jsxgraph.org/docs/symbols/JXG.CoordsElement.html#X)
;; and [`Y()`](https://jsxgraph.org/docs/symbols/JXG.CoordsElement.html#X)
;; methods.

;; This example registers a function that updates a [reactive
;; atom](https://github.com/reagent-project/reagent/blob/master/doc/ManagingState.md#intro-to-atoms)
;; `!state` every time the point fires a `"drag"` event, and renders the current
;; value of `!state` each time it changes.
;;
;; Drag the point around and the watch the state update:

(cljs
 (reagent/with-let
   [!state  (reagent/atom {:x 0 :y 0})
    update! (fn [p]
              (swap! !state assoc
                     :x (.X p)
                     :y (.Y p)))]
   [:<>
    [:pre (str @!state)]
    [jsx/JSXGraph {:axis true}
     [:point
      {:parents [0 0]
       :on {:drag update!}}]]]))

;; The lovely thing about this data model is that other parts of your
;; application outside of `JSXGraph` can read from this state as well.
;;
;; ### Functions as Parents
;;
;; Many `Element` types can take functions as parents. This feature allows you
;; to bind an `Element`'s coordinate to some external state, like the state
;; persisted above in `!state`.
;;
;; This example adds a first free `Point` named `"A"`, and a second `Point` with
;; position constrained to always equal `[cos(A_x), sin(A_y)]`.

(cljs
 (reagent/with-let
   [!state  (reagent/atom {:x 0 :y 0})
    update! (fn [p]
              (swap! !state assoc
                     :x (.X p)
                     :y (.Y p)))
    cos-x (fn [] (Math/cos (:x @!state)))
    sin-y (fn [] (Math/sin (:y @!state)))]
   [:<>
    [:pre (str @!state)]
    [jsx/JSXGraph {:axis true}
     [jsx/Point
      {:parents [0 0]
       :name "A"
       :on {:drag update!}}]
     [jsx/Point
      {:parents [cos-x sin-y]
       :name "[cos A_x, sin A_y]"}]]]))


;; > There is a "gotcha" here! If you use a [reactive
;; > atom](https://github.com/reagent-project/reagent/blob/master/doc/ManagingState.md#intro-to-atoms)
;; > and access its value somewhere in your component, any change to the atom
;; > will force the board to re-render.
;; >
;; > If you do this you need to be careful to move any functions you want to use
;; > _outside_ of the component. Otherwise the board will erase and re-mount
;; > every component every time the atom's value changes.

;; ### GEONExT Syntax
;;
;; Another way to declare dependencies between `Element`s is to use "GEONExT
;; syntax". I can't find good documentation for this anywhere, but its
;; referenced [here on the `JSXGraph`
;; wiki](https://jsxgraph.org/wiki/index.php?title=Point#GEONExT_syntax).
;;
;; This example adds a first free `Point` named `"A"`, and a second `Point` with
;; its `Y` coordinate free and its `X` coordinate constrained to always equal
;; `A_x + A_y`:

(cljs
 [jsx/JSXGraph {:axis true}
  [jsx/Point {:name "A" :parents [0 0]}]
  [jsx/Point {:name "B" :parents ["X(A) + Y(A)" 2]}]])

;; > There is currently [a bug](https://github.com/jsxgraph/jsxgraph/issues/489)
;; > with this feature, where re-rendering a board will trigger an error. You
;; > may need to refresh your page if this occurs.

;; ### Component Refs
;;
;; If you need access to the actual instance of a `JSXGraph` element, pass a
;; callback function using the `:ref` keyword. The `:ref` function receives an
;; instance of the element when it is mounted, and `nil` when the board is
;; destroyed or the element is remounted.

(cljs
 [jsx/JSXGraph {:axis true}
  [:point
   {:parents [1 1]
    :ref (fn [p]
           (when p
             (.setName p "NAME!")))}]])

;; You might use this feature to store a reference to some element that doesn't
;; fire its own events, so that you can query its value when some other element
;; fires.
;;
;; The `RiemannSum` element has this property. The example below uses `:ref` to
;; store a reference to the `RiemannSum`, so that the `Text` element in the
;; bottom left of the scene can query it inside its parent function. See the
;; inline comments for more detail.

(cljs
 (let [!state (atom {:slider 4 :riemann nil})
       f      (fn [x]
                ;; 1/2 x^2 - 2x
                (- (* 0.5 x x)
                   (* 2 x)))]
   [jsx/JSXGraph {:boundingbox [-3 7 5 -3]
                  :axis true}
    [jsx/Slider
     {:parents [[0 4] [3 4] [0 (:slider @!state) 10]]
      :on {:drag #(swap! !state assoc :slider (.Value %))}}]
    [jsx/RiemannSum
     {:parents [f #(:slider @!state) "middle" -2 5]
      :fillOpacity 0.4
      ;; When this element mounts, a reference to the `RiemannSum` instance is
      ;; stored under the `:riemann` key in the `!state` atom.
      :ref (fn [elem]
             (when elem
               (swap! !state assoc :riemann elem)))}]
    [jsx/FunctionGraph
     {:parents [f -2 5]}]
    [jsx/Text
     {:parents [-2 -2 (fn []
                        ;; The `:riemann` key has been populated by the time the
                        ;; `Text` component is mounted, so we don't need to
                        ;; guard against a `nil` value here.
                        (let [v (.Value (:riemann @!state))]
                          (str "Sum: " (.toFixed v 4))))]}]]))

;; ### Custom Components
;;
;; If you want to reuse some pattern in your board declaration, you can create a
;; new Reagent component that bundles together a sequence of primitives,
;; possibly closing over some state that these elements need.
;;
;; > See the [Reagent Component
;; > Guide](https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md#the-three-ways)
;; > for more detail.
;;
;; Create a component by writing a function that takes some number of arguments
;; and returns a vector of the form `[:<> <any-number-of-elements>]`. Here is a
;; component that accepts 3 vertex point definitions and creates a triangle:

(cljs
 (defn Triangle [a b c]
   [:<>
    [jsx/Point {:name "A" :size 4 :parents a}]
    [jsx/Point {:name "B" :size 4 :parents b}]
    [jsx/Point {:name "C" :size 4 :parents c}]
    [jsx/Polygon {:parents ["A" "B" "C"]}]]))

;; Use your component by including a vector of the form `[ComponentName
;; <arguments>]` as a child if your `JSXGraph` component;

(cljs
 [jsx/JSXGraph {:axis true}
  [Triangle
   [-1 -1] [1 1] [-1 1]]])

;; You can abstract this example further by writing your own version of a
;; `Polygon` element that takes a map of ID => a point's `:parents` entry:

(cljs
 (defn MyPolygon [id->parents]
   (let [ids (into [] (keys id->parents))
         points (for [[id parents] id->parents]
                  [jsx/Point {:name id :parents parents}])]
     ;; Build [:<> ...points...], then add `[jsx/Polygon ...]` to the end of the
     ;; list.
     (-> (into [:<>] points)
         (conj [jsx/Polygon {:parents ids}])))))

;; Re-define a version of `Triangle` that uses `MyPolygon`:

(cljs
 (defn Triangle* [a b c]
   [MyPolygon {:A a :B b :C c}]))

;; These elements should look exactly the same as the previous `Triangle`
;; definition:

(cljs
 [jsx/JSXGraph {:axis true}
  [Triangle*
   [-1 -1] [1 1] [-1 1]]])

;; ### State across Multiple Boards
;;
;; [Reagent's state
;; model](https://github.com/reagent-project/reagent/blob/master/doc/ManagingState.md)
;; makes it easy to get data out of various elements on the board. Storing state
;; in an external atom allows you to use state updates from one board to trigger
;; updates on another board.
;;
;; The following example places a free point one board (the parent), and
;; designates a second board as a child with `addChild`. The second board will
;; hold a point with location fixed by the first point. Any interaction with the
;; parent board will trigger updates to every element on the child board.

;; First, our state:

(cljs
 (defonce !state
   (atom {:x 1 :y 1})))

;; Then the parent board with its free point. We'll use a `:ref`
;; function (see [Component Refs](#Component%20Refs)) to perform the [`addChild`
;; mutation](https://jsxgraph.org/docs/symbols/JXG.Board.html#addChild):

(cljs
 (let [update! (fn [p]
                 (swap! !state assoc
                        :x (.X p)
                        :y (.Y p)))]
   [jsx/JSXGraph
    {:axis true
     :style {:height "300px"}
     :ref (fn [b]
            (when b (swap! !state assoc :board b)))}
    [jsx/Point {:on {:drag update!}
                :parents [(:x @!state) (:y @!state)]}]]))

;; The child board will call `addChild` in its `:ref` function. Note that the
;; parents of the second point are no-argument functions that access the `:x`
;; and `:y` coordinates stored in `!state`. (The next example is folded so you
;; can see both boards at once. Click "show code" to unfold.)

^{:nextjournal.clerk/visibility {:code :fold}}
(cljs
 [jsx/JSXGraph
  {:axis true
   :style {:height "300px"}
   :ref (fn [b]
          (when b
            (.addChild (:board @!state) b)))}
  [jsx/Point {:parents
              [#(:x @!state) #(:y @!state)]}]])

;; ## Advanced Examples
;;
;; This section explores `JSXGraph` by porting a few of the more complex
;; examples from the [Example
;; directory](http://jsxgraph.org/wp/about/index.html) and inventing a few of
;; our own constructions.

;; ### Archimedean Spiral

;; This example allows for interactive exploration of the [Archimedean
;; Spiral](https://en.wikipedia.org/wiki/Archimedean_spiral). This is a curve of
;; the form
;;
;; $$r=a + b \cdot \theta.$$
;;
;; The board below includes interactive sliders for the $a$ and $b$ parameters,
;; and plots a polar curve for every pair of $(r, \theta)$. See the comments in
;; the source code for details on our choices.
;;
;; > The original example lives at [this
;; > page](http://jsxgraph.org/wiki/index.php/Archimedean_spiral).

(cljs
 ;; The `!state` atom is populated with the initial slider positions. Note that
 ;; we are NOT using a `reagent/atom`, because we don't need Reagent to perform
 ;; any re-renders when the state changes. Instead, state changes are picked up
 ;; by the function we provide to the curve below.
 (let [!state (atom {:a 1 :b 0.25})]
   [jsx/JSXGraph
    {:boundingbox [-10 10 10 -10]
     :showCopyright false
     ;; This option prevents the spiral from bulging out on the left and right
     ;; side on wider windows by adjusting the provided `:boundingBox`.
     :keepAspectRatio true}

    ;; Just for fun we are using the keyword form here to define components.
    [:slider
     {:name "a"
      ;; The `:parents` are of the form
      ;;
      ;; [<left-point> <right-point> [<min> <current> <max>]]
      :parents [[1 8] [5 8] [0 (:a @!state) 4]]

      ;; Each slider updates a value stored in `!state` above.
      :on {:drag #(swap! !state assoc :a (.Value %))}}]
    [:slider
     {:name "b"
      :parents [[1 9] [5 9] [0 (:b @!state) 4]]
      :on {:drag #(swap! !state assoc :b (.Value %))}}]
    [:curve
     {:id "c"
      ;; [<r(phi)>, <origin-coords>, <min-phi>, <max-phi>]
      :parents [(fn [phi]
                  (let [{:keys [a b]} @!state]
                    (+ a (* b phi))))
                [0 0] 0 (* 8 Math/PI)]
      :curveType "polar"
      :strokewidth 4}]
    ;; Note here that the parents of these elements reference the string-based
    ;; IDs of the element they want to target, instead of the actual
    ;; instance (like in the original example)
    [:glider  {:parents ["c"] :name "g"}]
    [:tangent {:parents ["g"] :dash 2 :strokeColor "#a612a9"}]
    [:normal  {:parents ["g"] :dash 2 :strokeColor "#a612a9"}]]))

;; ### Lissajous Curve
;;
;; From the [Wikipedia page](https://en.wikipedia.org//wiki/Lissajous_curve),

;; > A Lissajous curve (also known as a Lissajous figure or Bowditch curve) is
;; > the graph of a system of parametric equations
;; >
;; > $$x=A\sin(at+\delta),\quad y=B\sin(bt).$$
;; >
;; > which describe [complex harmonic
;; > motion](https://en.wikipedia.org/wiki/Complex_harmonic_motion).
;;
;; The board below includes interactive sliders for the $a$, $b$, $A$ and $B$
;; parameters, and plots a parametric curve for every pair of $(x y)$.

;; The original example lives at [this
;; page](http://jsxgraph.org/wiki/index.php/Lissajous_curves).

(cljs
 (let [!state (atom {:a 3 :b 2 :A 3 :B 3 :delta 0})]
   [jsx/JSXGraph
    {:boundingbox [-8 8 8 -8]
     :showCopyright false
     :keepAspectRatio true
     :axis true}
    ;; Interactive Sliders
    [:slider
     {:name "a" :parents [[2,8],[6,8],[0,3,6]]
      :on {:drag #(swap! !state assoc :a (.Value %))}}]
    [:slider
     {:name "b" :parents [[2,7],[6,7],[0,2,6]]
      :on {:drag #(swap! !state assoc :b (.Value %))}}]
    [:slider
     {:name "A" :parents [[2,6],[6,6],[0,3,6]]
      :on {:drag #(swap! !state assoc :A (.Value %))}}]
    [:slider
     {:name "B" :parents [[2,5],[6,5],[0,3,6]]
      :on {:drag #(swap! !state assoc :B (.Value %))}}]
    [:slider
     {:name "&delta;" :parents [[2,4],[6,4],[0,0,Math.PI]]
      :on {:drag #(swap! !state assoc :delta (.Value %))}}]

    ;; The Curve!
    [:curve
     {:parents
      ;; [<x-fn>, <y-fn>, <min-t>, <max-y>]
      [(fn [t]
         (let [{:keys [a A delta]} @!state]
           (* A (Math/sin (+ (* a t) delta)))))
       (fn [t]
         (let [{:keys [b B]} @!state]
           (* B (Math/sin (* b t)))))
       0
       (* 2 Math/PI)]
      :strokeColor "#aa2233"
      :strokewidth 3}]]))

;; ### Unit Circle
;;
;; This example uses a custom Reagent component `UnitCircle` to inscribe a
;; polygon of `n` points into the unit circle. `UnitCircle` is similar to the
;; `MyPolygon` implementation above in [Custom
;; Components](#Custom%20Components), but generates its own point coordinates
;; internally.
;;
;; The component below also shows off a case where we _do_ need to use a
;; `reagent/atom`.

(cljs
 (defn UnitCircle [n]
   (let [ids (range n)
         i->pt (fn [i]
                 (let [angle (* (/ i n) 2 Math/PI)
                       x (Math/cos angle)
                       y (Math/sin angle)]
                   [jsx/Point
                    {:name i :size 5 :parents [x y]}]))]
     [:<>
      (into [:<>] (map i->pt) ids)
      [jsx/Polygon
       {:parents (mapv str ids)
        :borders {:strokeColor "black"}}]])))

;; The board below instantiates the `UnitCircle` component using an `n` that
;; comes from an interactive slider.
;;
;; To bind the state, we
;;
;; - use `reagent/with-let` instead of `let`
;; - `reagent/atom` instead of `atom`
;;
;; Doing this will force any component that dereferences `!state` to re-render.
;; This is what we want! We want a change in the `n` slider to trigger the
;; drawing of a new `UnitCircle`, vs previous examples where we wanted to send
;; new information to elements that had rendered a single time on the board.
;;
;; Drag the slider around and note the slight flicker as the board redraws.

(cljs
 (reagent/with-let
   [!n    (reagent/atom 6)
    ->!n #(reset! !n (.Value %))]
   [jsx/JSXGraph
    {:boundingbox [-1.5 2 1.5 -2]
     :showCopyright false
     :keepAspectRatio true}
    ;; Any time `!n` is updated by the `->!n` function provided to the slider
    ;; below, this component AND the `jsx/Slider` will re-render.
    [UnitCircle @!n]
    [jsx/Slider
     {:name "n"
      :snapWidth 1
      :on {:drag ->!n}
      :parents
      [[-1 1.5] [1 1.5] [1 @!n 50]]}]]))

;; ### Riemann Sum
;;
;; A [Riemann Sum](https://en.wikipedia.org/wiki/Riemann_sum) is an
;; approximation of the integral of a function (the area under its curve). You
;; generate rectangles whose heights are determined by the values of the
;; function, and add up the rectangles to obtain your approximation. Chopping
;; the area into more rectangles gives a better estimate.
;;
;; This example plots $\sin(x)$ along with a visual representation of a Riemann
;; sum. The board contains sliders to change the left and right bounds of the
;; function, as well as the number of rectangles in the (middle) Riemann sum.
;;
;; > The original example lives at [this
;; > page](https://jsxgraph.org/wiki/index.php/Riemann_sums).

;; First we'll create our `!state` outside of the `reagent/with-let` block. This
;; will let other components access the state.

(cljs
 (defonce !r-state
   (reagent/atom
    {:start -3 :end (* 2 Math/PI) :n 10})))

;; The board uses `reagent/with-let`; this will prevent the dereference calls
;; inside the bindings from triggering a component re-render.

(cljs
 (reagent/with-let
   [init         @!r-state
    start-update #(swap! !r-state assoc :start (.Value %))
    end-update   #(swap! !r-state assoc :end (.Value %))
    n-update     #(swap! !r-state assoc :n (.Value %))
    nf           #(:n @!r-state)
    startf       #(:start @!r-state)
    endf         #(:end @!r-state)
    sin          #(Math/sin %)]
   [jsx/JSXGraph
    {:boundingbox [-8 4 8 -5]
     :showCopyright false
     :axis true}
    [jsx/Slider {:name "start"
                 :on {:drag start-update}
                 :parents
                 [[1 3.5] [5 3.5] [-10 (:start init) 0]]}]
    [jsx/Slider {:name "end"
                 :on {:drag end-update}
                 :parents
                 [[1 2.5] [5 2.5] [0 (:end init) 10]]}]
    [jsx/Slider {:name "n"
                 :snapWidth 1
                 :on {:drag n-update}
                 :parents
                 [[1 1.5] [5 1.5] [1 (:n init) 100]]}]

    [jsx/RiemannSum
     {:parents [sin nf "middle" startf endf]
      ;; Store a reference to the `RiemannSum` instance so that we can query it
      ;; from our text below.
      :ref (fn [elem]
             (when elem
               (swap! !r-state assoc :riemann elem)))}]

    ;; Graph the actual function.
    [jsx/FunctionGraph {:parents [sin startf endf]}]
    [jsx/Text
     {:parents
      [-3.5 3 (fn []
                (let [v (.Value (:riemann @!r-state))]
                  (str "Riemann Sum: "
                       (.toFixed v 4))))]}]
    [jsx/Text
     {:parents
      [-3.5 2.5 (fn []
                  (let [{:keys [start end]} @!r-state]
                    (str "Actual Integral: "
                         (-> (- (- (Math/cos end))
                                (- (Math/cos start)))
                             (.toFixed 4)))))]}]]))

;; Because we stored our state outside of a `let` binding, we can query it from
;; other components, and they'll re-render on any update to `!r-state`. Change the
;; sliders above and watch these values change:

(cljs
 [:pre (str (dissoc @!r-state :riemann))])

;; ### Vector Field
;;
;; I found this lovely animation of an interactive vector field over
;; at [mafs.dev](https://mafs.dev/guides/display/vector-fields/), and had to
;; implement the example here in `JSXGraph.cljs`.
;;
;; This [vector field](https://en.wikipedia.org/wiki/Vector_field) example
;; assigns a vector, in this case a small arrow with a constant magnitude equal
;; to the value provided via `:scale`, to each point on a 2-dimensional grid.
;; The `:dimensions` options takes a 2-vector of the form `[<x-steps>,
;; <y-steps>]`
;;
;; The `:coords-fn` option takes a pair of `[x y]` coordinates and returns the
;; tip `[x', y']` of a new vector. This will generate a vector on the grid
;; starting at `[x y]` and pointing at the same angle $\theta$ as the new
;; vector.
;;
;; `:opacity-fn` takes the coordinates of the base of the vector and returns its
;; opacity.

(cljs
 (defn VectorField
   [{:keys [dimensions coords-fn opacity-fn scale]
     :or {scale 1
          dimensions [5 5]}}]
   (let [f (fn [x y]
             (let [[x' y'] (coords-fn x y)
                   theta   (Math/atan2 y' x')]
               ;; Calculate the angle, then scale and translate the new vector's
               ;; end to the appropriate point.
               (js/Array.
                (+ x (* scale (Math/cos theta)))
                (+ y (* scale (Math/sin theta))))))
         [nx ny] dimensions]
     (into [:<>]
           (for [x (range nx)
                 y (range ny)
                 :let [x (- x (/ nx 2))
                       y (- y (/ ny 2))]]
             ;; We generate a `jsx/Line` vs a `jsx/Arrow` to have some more
             ;; control over the arrowhead via the `:lastArrow` key below.
             [jsx/Line
              {:parents [#(js/Array. x y) #(f x y)]
               :straightFirst false
               :lastArrow {:type 1 :size 4}
               :straightLast false
               :strokeOpacity
               (opacity-fn x y)}])))))

;; Now that we have the `VectorField`, we can use our tricks from above to
;; customize the `VectorField`'s vector values based on the position of a
;; moveable `Point` in the scene. Drag the point around!

(cljs
 (let [!coords (atom {:x 0.6 :y 0.6})
       update! (fn [p]
                 (swap! !coords assoc
                        :x (.X p)
                        :y (.Y p)))]
   [jsx/JSXGraph
    {:boundingbox [-6 6 6 -6]
     :axis true
     :grid true
     :showNavigation false
     :keepAspectRatio true}
    [jsx/Point {:parents [(:x @!coords)
                          (:y @!coords)]
                :on {:drag update!}}]
    [VectorField
     {:dimensions [20 14]
      :scale 0.5
      :coords-fn
      (fn [x y]
        (let [{px :x py :y} @!coords]
          [(- y py (- x px))
           (- (- px x) (- y py))]))
      :opacity-fn
      (fn [x y]
        (/ (+ (Math/abs x) (Math/abs y)) 10))}]]))

;; ### 3D Views
;;
;; As of [version
;; 1.4.4](https://jsxgraph.uni-bayreuth.de/wp/2022-05-27-release-of-version-1.4.4/),
;; JSXGraph has support for 3d views.
;;
;; Unlike all other elements, 3d elements must be added as children of a
;; `view3d` element.

;; > `JSXGraph.cljs` doesn't currently support adding children to `jsx/View3D`,
;; > but we will! Follow [this
;; > ticket](https://github.com/mentat-collective/jsxgraph.cljs/issues/23) for
;; > updates.
;;
;; The allowed 3D elements are:
;;
;; - [Curve3D](https://jsxgraph.org/docs/symbols/Curve3D.html)
;; - [FunctionGraph3D](https://jsxgraph.org/docs/symbols/Functiongraph3D.html)
;; - [Line3D](https://jsxgraph.org/docs/symbols/Line3D.html)
;; - [ParametricSurface3D](https://jsxgraph.org/docs/symbols/ParametricSurface3D.html)
;; - [Point3D](https://jsxgraph.org/docs/symbols/Point3D.html)
;;
;; To instantiate a 3D scene with `JSXGraph.cljs`, you'll need to use
;; the [Imperative Style](#Imperative%20Style) described below to create your
;; view and 3D elements directly on the `board` instance.
;;
;; The following example is a port of the demo listed under
;; the [`FunctionGraph3D` API
;; entry](https://jsxgraph.org/docs/symbols/Functiongraph3D.html). The plot
;; shows the surface defined by the equation
;;
;; $$F(x, y) = \sin\left(\frac{xy}{4}\right).$$

(cljs
 (let [box [-5 5]
       F   (fn [x y]
             (Math/sin (* x (/ y 4))))]
   [jsx/JSXGraph
    {:boundingbox [-8 8 8 -8]
     :showCopyright false
     :axis false
     :showNavigation false
     :ref (fn [b]
            (when b
              ;; First, create a `view3d` object on the board `b`.
              (let [view
                    (jsx/create b "view3d"
                                [[-6 -3] [8 8]
                                 [box box box]]
                                {:xPlaneRear {:visible false}
                                 :yPlaneRear {:visible false}})]
                ;; Note that we create any 3d elements on `view`, not on the board
                ;; `b`.
                (jsx/create view "functiongraph3d"
                            [F box box]
                            {:strokeWidth 0.5
                             :stepsU 70
                             :stepsV 70}))))}]))

;; ##  JSXGraph vs JSXGraph.cljs
;;
;; This section discusses differences between the [React](https://reactjs.org/)
;; / [Reagent](https://reagent-project.github.io/)-based interface provided by
;; `JSXGraph.cljs` and the imperative JavaScript API presented by the
;; original [`JSXGraph`](http://jsxgraph.org/) library.
;;
;; Let's compare two implementations of the [Circle
;; example](http://jsxgraph.org/wiki/index.php/Circle) from the [JSXGraph
;; examples
;; directory](http://jsxgraph.org/wiki/index.php?title=Category:Examples).
;;
;; Given some `div` with `id="jxgbox"`, the following snippet of JavaScript will
;; inject a `JSXGraph` construction into the `div`:

;; ```js
;; var b = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
;; var p1 = b.create('point',[0,0], {name:'A',size: 4, face: 'o'});
;; var p2 = b.create('point',[2,-1], {name:'B',size: 4, face: 'o'})
;; var ci = b.createElement('circle',["A","B"], {strokeColor:'#00ff00',strokeWidth:2});
;; ```

;; In `JSXGraph.cljs` we can write the example like this:

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2]
                :keepAspectRatio true}
  [:point {:name "A" :size 4 :face "o" :parents [0 0]}]
  [:point {:name "B" :size 4 :face "o" :parents [2 -1]}]
  [:circle {:strokeColor "#00ff00" :strokeWidth 2
            :parents ["A" "B"]}]])

;; Note the following differences:
;;
;; **In JSXGraph:**
;;
;; You create a board by calling `initBoard` with the id of some existing `div`
;; and a map of options.
;;
;; New elements are added to a board by calling `board.create(<type-string>
;;  <parents> <attrs>)`, where
;;
;; - `<type-string>`: the lowercase version of one of the classes in the [API
;;   Reference](https://jsxgraph.org/docs/index.html)
;;
;; - `<parents>`: an array of the elements described under each class's "Element
;;   Detail"
;;   section. (A [Circle](https://jsxgraph.org/docs/symbols/Circle.html), for
;;   example, takes two parents: a `Point` for its center, and either a `Point`,
;;   `Line` or `Circle` for its radial point.)
;;
;; - `<attrs>`: a map of attributes described under the class's "Attributes
;;   Summary" section.
;;
;; **In JSXGraph.cljs**
;;
;; You create a board by providing a vector of the form `[jsx/JSXGraph
;; <options-map>]`. The component creates its own `div`. If you want to
;; customize the div, provide `:id` or `:style` keys.
;;
;; To add an element, add a vector of the following form as a child of the
;; `JSXGraph` component:
;;
;; ```
;; [<class-keyword> {:parents <parents>, <attrs>}]
;; ```
;;
;; Where `<class-keyword>` is the keyword form of the classname (`:circle`,
;; `:functiongraph` etc), `<parents>` are the parents described above and
;; `<attrs>` are any other key-value pairs.
;;
;; ### Keyword vs Component
;;
;; All classes the [JSXGraph API](https://jsxgraph.org/docs/index.html) are
;; exposed as components
;; in [`jsxgraph.core`](https://github.com/mentat-collective/jsxgraph.cljs/blob/main/src/jsxgraph/core.cljs#L149).
;; You can use these components directly in place of the keyword in the example
;; above:

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2] :showCopyright false}
  [jsx/Point {:name "A" :size 4 :parents [-1 1]}]
  [jsx/Point {:name "B" :size 4 :parents [2 -1]}]
  [jsx/Line {:strokeColor "#00ff00" :strokeWidth 2
             :parents ["A" "B"]}]])

;; ### Imperative Style
;;
;; If you prefer the more imperative style of the original `JSXGraph` library,
;; or if you need immediate access to an element after you add it to the board,
;; you can provide a callback to the `jsx/JSXGraph` component using the `:ref`
;; key and get access to the `board` object.
;;
;; Use `jsxgraph.core/create` just like you'd use `board.create` in JavaScript
;; to add elements:

(cljs
 [jsx/JSXGraph
  {:boundingbox [-5 5 5 -2]
   :style {:height "200px" :width "100%"}
   :ref (fn [b]
          ;; `b` will be `nil` when the board is first created. After the board
          ;; mounts itself, the `:ref` callback will be called again with the
          ;; `JSXGraph` instance.
          (when b
            (let [p1 (jsx/create b "point" [0 0] {:name "A" :size 4 :face "o"})
                  p2 (jsx/create b "point" [2 -1] {:name "B" :size 4 :face "o"})]
              (jsx/create b "line"
                          ;; Note that we have the actual point instances here and
                          ;; can add them, instead of relying on the string ID.
                          [p1 p2]
                          {:strokeColor "#00ff00" :strokeWidth 2}))))}])

;; ### Accessing Element Values
;;
;; A big difference between the `JSXGraph.cljs` and `JSXGraph` versions has to
;; do with how data is communicated. In JS, you typically create elements and
;; then query them on demand from other elements.
;;
;; In `JSXGraph.cljs`, elements communicate via updates to a shared `atom` or
;; `reagent/atom`. Many of the examples in the [Guides](#Guides) and [Advanced
;; Examples](#Advanced%20Examples) above use this style, so please study these
;; carefully.
;;
;; > See [Reagent's guide to
;; > state](https://github.com/reagent-project/reagent/blob/master/doc/ManagingState.md)
;; > for more detail.

;; ## Thanks and Support

;; To support this work and my other open source projects, consider sponsoring
;; me via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank
;; you to my current sponsors!

;; I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/)
;; for financial support during this library's creation. Please
;; consider [becoming a member](https://www.clojuriststogether.org/developers/)
;; to support this work and projects like it.
;;
;; For more information on me and my work, visit https://samritchie.io.

;; ## License

;; Copyright © 2022 Sam Ritchie.

;; Distributed under the [MIT
;; License](https://github.com/mentat-collective/jsxgraph.cljs/blob/main/LICENSE).
;; See [LICENSE](https://github.com/mentat-collective/jsxgraph.cljs/blob/main/LICENSE).
