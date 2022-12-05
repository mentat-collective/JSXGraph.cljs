;; # JSXGraph.cljs
;;
;; A light ClojureScript wrapper over [JSXGraph](https://jsxgraph.org/).

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
;;
;; See the [Github project](https://github.com/mentat-collective/jsxgraph.cljs)
;; for more details, and the [cljdoc
;; page](https://cljdoc.org/d/org.mentat/jsxgraph.cljs/CURRENT/doc/readme) for
;; detailed API documentation.
;;
;; ## Quickstart
;;
;; ```clj
;; ;; deps
;; {org.mentat/jsxgraph.cljs {:git/sha "$GIT_SHA"}}
;;
;; ;; namespace
;; (ns my-app
;;   (:require [jsxgraph.core :as jsx]
;;             [reagent.core :as reagent]))
;;```

^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns jsxgraph.notebook
  (:require [jsxgraph.clerk-ui :refer [cljs]]))

(comment
  " TODO before release:



- Add docs to each of the `ElementType` entries.
- note that we are NOT GOING TO BE CLEVER with any of this stuff.
- show what it looks like in jsxgraph vs non

differences:

- parents, props vs providing stuff in order
- how to convert the `create` calls.
- the handlers for events!
- keywords vs classes
")

;; this is a wrapper so the jsxgraph docs are indispensable.
;;
;; - API Reference: https://jsxgraph.org/docs/index.html each of the classes on
;;   the left has an associated class here.
;;
;; [examples](https://jsxgraph.uni-bayreuth.de/wp/about/index.html), and [full
;; wiki of
;; examples](https://jsxgraph.uni-bayreuth.de/wiki/index.php/Category:Examples).
;;
;; ## Porting
;;
;; you'll probably get started by porting an example.

;; ## Converting an Example
;;
;; - use the id to refer to a previous component, since we don't have a bind.
;; - if you really have to refer to the real thing, use an atom

;; ### Basics

;; ### Circle

;; One possibility to construct a circle is to give its center and a point
;; defining its radius. Lets construct two points "A" and "B". Then we'll
;; construct a circle through "A" and "B".

;; ```js
;; var b = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
;; var p1 = b.create('point',[0,0], {name:'A',size: 4, face: 'o'});
;; var p2 = b.create('point',[2,-1], {name:'B',size: 4, face: 'o'})
;; var ci = b.createElement('circle',["A","B"], {strokeColor:'#00ff00',strokeWidth:2});
;; ```

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2]}
  [jsx/Point {:name "A" :size 4 :face "o" :parents [0 0]}]
  [jsx/Point {:name "B" :size 4 :face "o" :parents [2 -1]}]
  [jsx/Circle {:strokeColor "#00ff00" :strokeWidth 2
               :parents ["A" "B"]}]])

;; port using ref:

(cljs
 [jsx/JSXGraph
  {:boundingbox [-5 5 5 -2]
   :ref (fn [b]
          (let [p1 (jsx/create b "point" [0 0] {:name "A" :size 4 :face "o"})
                p2 (jsx/create b "point" [2 -1] {:name "B" :size 4 :face "o"})]
            (jsx/create b "circle"
                        [p1 p2]
                        {:strokeColor "#00ff00" :strokeWidth 2})))}])

;; ### Graph

;; ```javascript
;; var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-10, 10, 10, -10]});
;; var a = board.create('slider', [[1,8],[5,8],[0,1,4]],{name:'a'});
;; var b = board.create('slider', [[1,9],[5,9],[0,0.25,4]],{name:'b'});

;; var c = board.create('curve', [function(phi){return a.Value()+b.Value()*phi; }, [0, 0],0, 8*Math.PI],
;;              {curveType:'polar', strokewidth:4});

;; var g = board.create('glider', [c]);
;; var t = board.create('tangent', [g], {dash:2,strokeColor:'#a612a9'});
;; var n = board.create('normal', [g], {dash:2,strokeColor:'#a612a9'});
;; ```

(cljs
 (reagent/with-let [!state (atom {:a 1 :b 0.25})]
   [jsx/JSXGraph
    {:boundingbox [-10 10 10 -10]
     :showCopyright false
     :style {:width "500px"
             :height "500px"}}

    ;; var a = board.create('slider', [[1,8],[5,8],[0,1,4]],{name:'a'});
    [:slider {:parents [[1 8] [5 8] [0 (:a @!state) 4]]
              :name "a"
              :on {:drag #(swap! !state assoc :a (.Value %))}}]

    ;; var b = board.create('slider', [[1,9],[5,9],[0,0.25,4]],{name:'b'});
    [:slider {:parents [[1 9] [5 9] [0 (:b @!state) 4]]
              :name "b"
              :on {:drag #(swap! !state assoc :b (.Value %))}}]

    ;; var c = board.create('curve', [function(phi){return a.Value()+b.Value()*phi; }, [0, 0],0, 8*Math.PI],
    ;;              {curveType:'polar', strokewidth:4});
    [:curve {:parents [(fn [phi]
                         (let [{:keys [a b]} @!state]
                           (+ a (* b phi))))
                       [0, 0] 0  (* 8 Math/PI)]
             :id "c"
             :curveType "polar"
             :strokewidth 4}]

    ;; var g = board.create('glider', [c]);
    [:glider  {:parents ["c"] :name "g"}]

    ;; var t = board.create('tangent', [g], {dash:2,strokeColor:'#a612a9'});
    [:tangent {:parents ["g"] :dash 2 :strokeColor "#a612a9"}]

    ;; var n = board.create('normal', [g], {dash:2,strokeColor:'#a612a9'});
    [:normal  {:parents ["g"] :dash 2 :strokeColor "#a612a9"}]]))

;; see the note below about being careful here!!


;; ### Another clone
;;
;; Lissajous curve (Lissajous figure or Bowditch curve) is the graph of the
;; system of parametric equations
;;
;; $$x=A\sin(at+\delta),\quad y=B\sin(bt).$$
;;
;; Here is the JS code:

;; ```js
;; var a = brd.create('slider',[[2,8],[6,8],[0,3,6]],{name:'a'});
;; var b = brd.create('slider',[[2,7],[6,7],[0,2,6]],{name:'b'});
;; var A = brd.create('slider',[[2,6],[6,6],[0,3,6]],{name:'A'});
;; var B = brd.create('slider',[[2,5],[6,5],[0,3,6]],{name:'B'});
;; var delta = brd.create('slider',[[2,4],[6,4],[0,0,Math.PI]],{name:'&delta;'});

;; var c = brd.create('curve',[
;;           function(t){return A.Value()*Math.sin(a.Value()*t+delta.Value());},
;;           function(t){return B.Value()*Math.sin(b.Value()*t);},
;;           0, 2*Math.PI],{strokeColor:'#aa2233',strokeWidth:3});
;; ```
;;
;; And then ours:

(cljs
 (reagent/with-let [!state (atom {:a 3 :b 2 :A 3 :B 3 :delta 0})]
   [jsx/JSXGraph
    {:boundingbox [-12 10 12 -10]
     :showCopyright false
     :axis true}

    ;; var a = brd.create('slider',[[2,8],[6,8],[0,3,6]],{name:'a'});
    [:slider {:name "a" :parents [[2,8],[6,8],[0,3,6]]
              :on {:drag #(swap! !state assoc :a (.Value %))}}]

    ;; var b = brd.create('slider',[[2,7],[6,7],[0,2,6]],{name:'b'});
    [:slider {:name "b" :parents [[2,7],[6,7],[0,2,6]]
              :on {:drag #(swap! !state assoc :b (.Value %))}}]

    ;; var A = brd.create('slider',[[2,6],[6,6],[0,3,6]],{name:'A'});
    [:slider {:name "A" :parents [[2,6],[6,6],[0,3,6]]
              :on {:drag #(swap! !state assoc :A (.Value %))}}]

    ;; var B = brd.create('slider',[[2,5],[6,5],[0,3,6]],{name:'B'});
    [:slider {:name "B" :parents [[2,5],[6,5],[0,3,6]]
              :on {:drag #(swap! !state assoc :B (.Value %))}}]

    ;; var delta = brd.create('slider',[[2,4],[6,4],[0,0,Math.PI]],{name:'&delta;'});
    [:slider {:name "&delta;" :parents [[2,4],[6,4],[0,0,Math.PI]]
              :on {:drag #(swap! !state assoc :delta (.Value %))}}]

    ;; var c = brd.create('curve',[
    ;;           function(t){return A.Value()*Math.sin(a.Value()*t+delta.Value());},
    ;;           function(t){return B.Value()*Math.sin(b.Value()*t);},
    ;;           0, 2*Math.PI],{strokeColor:'#aa2233',strokeWidth:3});
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

;; ## Ref
;;
;; sometimes you need access to the actual element...

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

;; Create directly from board ref

(cljs
 [jsx/JSXGraph
  {:boundingbox [-5 5 5 -2]
   :showCopyright false
   :axis true
   :ref
   (fn [board]
     (when board
       (jsx/create
        board
        "point" [1 1] {:name "Point"})))}])

;; ## Custom Components
;;
;; You can use `:<>` to group primitives into a custom component.
(cljs
 (defn Triangle [a b c]
   [:<>
    [jsx/Point {:name "A" :size 4 :parents a}]
    [jsx/Point {:name "B" :size 4 :parents b}]
    [jsx/Point {:name "C" :size 4 :parents c}]
    [jsx/Polygon {:parents ["A" "B" "C"]}]]))

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2]
                :showCopyright false
                :axis true}
  [Triangle
   [-1 -1] [1 1] [-1 1]]])

;; ## Unit Circle
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
                  :showCopyright false}
    [UnitCircle @!n]
    [jsx/Slider {:name "n"
                 :snapWidth 1
                 :on {:drag ->!n}
                 :parents
                 [[-1 1.5] [1 1.5] [1 @!n 50]]}]]))

;; ## geonext syntax
;;
;; I can't find a good reference here... but note this bug https://github.com/jsxgraph/jsxgraph/issues/489
;;
;; I think there's a bug where you can't delete then create.

;; TODO uncomment
#_
(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2]
                :showCopyright false
                :axis true}
  [jsx/Point {:name "A"
              :size 4
              :parents [1 1]}]
  [jsx/Point {:name "B"
              :size 4
              :parents ["X(A)" 2]}]])

;; ## Basics

;; ### Lines

;; A line needs two points. Lets construct two points "A" and "B". Then we
;; construct a line through "A" and "B". The setting of a new color and changing
;; the stroke-width is not necessary.

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2] :showCopyright false}
  [jsx/Point {:name "A" :size 4 :parents [-1 1]}]
  [jsx/Point {:name "B" :size 4 :parents [2 -1]}]
  [jsx/Line {:strokeColor "#00ff00" :strokeWidth 2
             :parents ["A" "B"]}]])

;; ## Data Sharing
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

;; ## 3d

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

;; ## SUBTLETIES
;;
;; If you want to use a Reagent atom you're going to be in trouble and have to
;; pull out the functions.
