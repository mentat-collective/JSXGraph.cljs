;; # JSXGraph.cljs
;;
;; _alpha - [feedback welcome](https://github.com/mentat-collective/jsxgraph.cljs)_
;;
;; Dynamic geometry!
;;
;; ## Features
;;
;; 1. First feature!
;;
;; 2. Second feature.
;;
;; ## Usage
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
;;
;; Hi!

^#:nextjournal.clerk{:toc true :no-cache true :visibility :hide-ns}
(ns jsxgraph.notebook
  (:require #?(:cljs [jsxgraph.core :as jsx])
            #?(:cljs [reagent.core :as reagent])
            [jsxgraph.clerk-ui :as ui :refer [cljs]]))

;; ## Lines

;; A line needs two points. Lets construct two points "A" and "B". Then we
;; construct a line through "A" and "B". The setting of a new color and changing
;; the stroke-width is not necessary.

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2] :showCopyright false}
  [jsx/Point {:name "A" :size 4} [-1 1]]
  [jsx/Point {:name "B" :size 4} [2 -1]]
  [jsx/Line {:strokeColor "#00ff00" :strokeWidth 2}
   ["A" "B"]]])

;; And again?

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2] :showCopyright true}])

;; ## Circle

;; One possibility to construct a circle is to give its center and a point
;; defining its radius. Lets construct two points "A" and "B". Then we'll
;; construct a circle through "A" and "B".

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2] :showCopyright false}
  [jsx/Point {:name "A" :size 4 :face "o"} [0 1]]
  [jsx/Point {:name "B" :size 4 :face "o"} [2 0]]
  [jsx/Circle {:strokeColor "#00ff00" :strokeWidth 2}
   ["A" "B"]]])

;; ## Data Sharing
;;
;; This demo shows how to get the input talking to some state. There are issues
;; here that I'll document soon.

#?(:cljs
   (defonce !state
     (reagent/atom
      {:start -3 :end (* 2 Math/PI) :n 10})))

(defn f [x]
  (Math/sin x))

#_
(cljs
 (reagent/with-let
   [init @!state
    start-update (fn [s] (swap! !state assoc :start (.Value s)))
    end-update (fn [s] (swap! !state assoc :end (.Value s)))
    n-update (fn [s] (swap! !state assoc :n (.Value s)))
    nf     #(:n @!state)
    startf #(:start @!state)
    endf   #(:end @!state)
    leftf  (fn [] "left")]
   [jsx/JSXGraph {:boundingbox [-8 4 8 -5]
                  :showCopyright false
                  :axis true}

    ;; [jsx/Slider {:name "start"
    ;;              :on-drag start-update}
    ;;  [[1 3.5] [5 3.5] [-10 (:start init) 0]]]

    ;; [jsx/Slider {:name "end"
    ;;              :on-drag end-update}
    ;;  [[1 2.5]  [5 2.5]  [0 (:end init) 10]]]

    ;; [jsx/Slider {:name "n"
    ;;              :snapWidth 1
    ;;              :on-drag n-update}
    ;;  [[1 1.5] [5 1.5] [1 (:n init) 50]]]

    ;; [jsx/FunctionGraph {} [f startf endf]]
    ;; [jsx/RiemannSum    [f nf leftf startf endf]]
    ]))

;; And this?

(cljs
 [jsx/JSXGraph {:boundingbox [-8 4 8 -5]
                :showCopyright false
                :axis true}])

(cljs
 [:pre (str @!state)])

;; More coming! Testing that this function isn't broken...

(cljs
 [:pre (f 10)])
