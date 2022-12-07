^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns jsxgraph.notebook
  (:require [jsxgraph.clerk-ui :refer [cljs]]))

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

;; ## Basics

;; A `JSXGraph` construction consists of a "board" populated by some number of
;; "elements", where an element is an instance of one of the classes described
;; in the [JSXGraph API docs](https://jsxgraph.org/docs/index.html).
;;
;; The [React](https://reactjs.org/)
;; / [Reagent](https://reagent-project.github.io/) data model is "declarative".
;; This means that you create and populate a board by listing, in order, the
;; elements that you want to appear on the board.
;;
;; ### Your First Board
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
;; TODO sometimes you need access to the actual element...

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2]
                :showCopyright false
                :axis true}
  [:point
   {:size 4
    :parents [1 1]
    :ref (fn [p]
           (when p
             (.setName p "Point")))}]])



;; ## Intermediate Usage
;;
;; TODO The previous section should get you going! This is more advanced stuff.

;; ### Custom Components
;;
;; You can use `:<>` to group primitives into a custom component. TODO get docs from reagent

(cljs
 (defn Triangle [a b c]
   [:<>
    [jsx/Point {:name "A" :size 4 :parents a}]
    [jsx/Point {:name "B" :size 4 :parents b}]
    [jsx/Point {:name "C" :size 4 :parents c}]
    [jsx/Polygon {:parents ["A" "B" "C"]}]]))

;; TODO show syntax.

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2]
                :showCopyright false
                :axis true}
  [Triangle
   [-1 -1] [1 1] [-1 1]]])

;; NOTE that we can't use the keyword form here.

;; ## Advanced Examples

;; ### Archimedean Spiral

;; Here's a more complex example; an interactive exploration of the [Archimedean
;; Spiral](https://en.wikipedia.org/wiki/Archimedean_spiral).

;; http://jsxgraph.org/wiki/index.php/Archimedean_spiral


(cljs
 (reagent/with-let [!state (atom {:a 1 :b 0.25})]
   [jsx/JSXGraph
    {:boundingbox [-10 10 10 -10]
     :showCopyright false
     :keepAspectRatio true}
    [:slider {:name "a"
              :parents [[1 8] [5 8] [0 (:a @!state) 4]]
              :on {:drag #(swap! !state assoc :a (.Value %))}}]
    [:slider {:name "b"
              :parents [[1 9] [5 9] [0 (:b @!state) 4]]
              :on {:drag #(swap! !state assoc :b (.Value %))}}]
    [:curve {:id "c"
             :parents [(fn [phi]
                         (let [{:keys [a b]} @!state]
                           (+ a (* b phi))))
                       [0, 0] 0  (* 8 Math/PI)]
             :curveType "polar"
             :strokewidth 4}]
    [:glider  {:parents ["c"] :name "g"}]
    [:tangent {:parents ["g"] :dash 2 :strokeColor "#a612a9"}]
    [:normal  {:parents ["g"] :dash 2 :strokeColor "#a612a9"}]]))

;; ### Lissajous Curve
;;
;; http://jsxgraph.org/wiki/index.php/Lissajous_curves
;;
;; https://en.wikipedia.org//wiki/Lissajous_curve
;;
;; Lissajous curve (Lissajous figure or Bowditch curve) is the graph of the
;; system of parametric equations
;;
;; $$x=A\sin(at+\delta),\quad y=B\sin(bt).$$

(cljs
 (reagent/with-let [!state (atom {:a 3 :b 2 :A 3 :B 3 :delta 0})]
   [jsx/JSXGraph
    {:boundingbox [-12 10 12 -10]
     :showCopyright false
     :keepAspectRatio true
     :axis true}
    [:slider {:name "a" :parents [[2,8],[6,8],[0,3,6]]
              :on {:drag #(swap! !state assoc :a (.Value %))}}]
    [:slider {:name "b" :parents [[2,7],[6,7],[0,2,6]]
              :on {:drag #(swap! !state assoc :b (.Value %))}}]
    [:slider {:name "A" :parents [[2,6],[6,6],[0,3,6]]
              :on {:drag #(swap! !state assoc :A (.Value %))}}]
    [:slider {:name "B" :parents [[2,5],[6,5],[0,3,6]]
              :on {:drag #(swap! !state assoc :B (.Value %))}}]
    [:slider {:name "&delta;" :parents [[2,4],[6,4],[0,0,Math.PI]]
              :on {:drag #(swap! !state assoc :delta (.Value %))}}]
    [:curve
     {:parents [(fn [t]
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
;; Here's a more complicated one that does some logic to spit out multiple points.

(cljs
 (defn UnitCircle [n]
   (let [ids (vec (range n))]
     [:<>
      (into [:<>]
            (map
             (fn [i]
               (let [angle (* (/ i n) 2 Math/PI)
                     x (Math/cos angle)
                     y (Math/sin angle)]
                 [jsx/Point {:name i :size 5 :parents [x y]}])))
            ids)
      [jsx/Polygon {:parents (mapv str ids)
                    :borders {:strokeColor "black"}}]])))

(cljs
 (reagent/with-let [!n    (reagent/atom 6)
                    ->!n #(reset! !n (.Value %))]
   [jsx/JSXGraph {:boundingbox [-1.5 2 1.5 -2]
                  :showCopyright false
                  :keepaspectratio true}
    [UnitCircle @!n]
    [jsx/Slider {:name "n"
                 :snapWidth 1
                 :on {:drag ->!n}
                 :parents
                 [[-1 1.5] [1 1.5] [1 @!n 50]]}]]))



;; ### Riemann Sum
;;
;; This demo shows how to get the input talking to some state. There are issues
;; here that I'll document soon.

(cljs
 (defonce !state
   (atom
    {:start -3 :end (* 2 Math/PI) :n 10})))

;; And the example:

(cljs
 (reagent/with-let
   [init         @!state
    start-update #(swap! !state assoc :start (.Value %))
    end-update   #(swap! !state assoc :end (.Value %))
    n-update     #(swap! !state assoc :n (.Value %))
    nf           #(:n @!state)
    startf       #(:start @!state)
    endf         #(:end @!state)
    sin          #(Math/sin %)]
   [:<>
    [:pre (str @!state)]
    [jsx/JSXGraph {:boundingbox [-8 4 8 -5]
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
                  [[1 1.5] [5 1.5] [1 (:n init) 50]]}]

     [jsx/FunctionGraph {:parents [sin startf endf]}]
     [jsx/RiemannSum {:parents [sin nf "left" startf endf]}]]]))

;; ### 3D

;; https://jsxgraph.org/docs/symbols/Functiongraph3D.html

;; https://github.com/mentat-collective/jsxgraph.cljs/issues/23

(cljs
 (let [box [-5 5]
       F  (fn [x y] (Math/sin (* x (/ y 4))))]
   [jsx/JSXGraph
    {:boundingbox [-8 8 8 -8]
     :showCopyright false
     :axis false
     :showNavigation false
     :ref (fn [b]
            (let [view
                  (jsx/create b "view3d"
                              [[-6 -3] [8 8]
                               [box box box]]
                              {:xPlaneRear {:visible false}
                               :yPlaneRear {:visible false}})]
              ;; note that we create this on the VIEW, not on the board.
              (jsx/create view "functiongraph3d"
                          [F box box]
                          {:strokeWidth 0.5
                           :stepsU 70
                           :stepsV 70})))}]))

;; ##  JSXGraph vs JSXGraph.cljs
;;
;; We'll start by porting the simple [Circle
;; example](http://jsxgraph.org/wiki/index.php/Circle) from the [JSXGraph
;; examples
;; directory](http://jsxgraph.org/wiki/index.php?title=Category:Examples).
;;
;; From the wiki:

;; > One possibility to construct a circle is to give its center and a point
;; > defining its radius. Lets construct two points "A" and "B". Then we'll
;; > construct a circle through "A" and "B".
;;
;; Given some `div` with `id="jxgbox"`, the following snippet of JS will inject
;; a `JSXGraph` construction into the `div`:

;; ```js
;; var b = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
;; var p1 = b.create('point',[0,0], {name:'A',size: 4, face: 'o'});
;; var p2 = b.create('point',[2,-1], {name:'B',size: 4, face: 'o'})
;; var ci = b.createElement('circle',["A","B"], {strokeColor:'#00ff00',strokeWidth:2});
;; ```
;;
;; In `JSXGraph.cljs` we can write that example like this, and see the
;; construction rendered below. Note that the points are interactive, so drag
;; them around and watch the circle respond.

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2]
                :keepAspectRatio true}
  [:point {:name "A" :size 4 :face "o" :parents [0 0]}]
  [:point {:name "B" :size 4 :face "o" :parents [2 -1]}]
  [:circle {:strokeColor "#00ff00" :strokeWidth 2
            :parents ["A" "B"]}]])

;; When you attempt to port [examples from
;; JSXGraph.org](http://jsxgraph.org/wiki/index.php?title=Category:Examples),
;; note the following differences:
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
;; to add elements.
;;
;; > The main advantage here is that you can keep your parent vector and
;; > attributes map in Clojure.

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

;; TODO  what else do we want to say here?

;; ## Thanks and Support

;; To support this work and my other open source projects, consider sponsoring
;; me via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank
;; you to my current sponsors!

;; I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/)
;; for financial support during this library's creation. Please
;; consider [becoming a member](https://www.clojuriststogether.org/developers/)
;; to support this work and projects like it.

;; ## License

;; Copyright © 2022 Sam Ritchie.

;; Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).
