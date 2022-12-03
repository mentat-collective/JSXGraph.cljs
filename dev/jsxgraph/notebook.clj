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

- API Reference: https://jsxgraph.org/docs/index.html each of the classes on the left has an associated class here.

- Add docs to each of the `ElementType` entries.
- note that we are NOT GOING TO BE CLEVER with any of this stuff.
")


;; ## Ref

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2]
                :showCopyright false
                :axis true}
  [jsx/Point {:size 4
              :parents [1 1]
              :ref (fn [p]
                     (when p
                       (.setName p "Point")))}]])

;; ## geonext

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

;; ## Lines

;; A line needs two points. Lets construct two points "A" and "B". Then we
;; construct a line through "A" and "B". The setting of a new color and changing
;; the stroke-width is not necessary.

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2] :showCopyright false}
  [jsx/Point {:name "A" :size 4 :parents [-1 1]}]
  [jsx/Point {:name "B" :size 4 :parents [2 -1]}]
  [jsx/Line {:strokeColor "#00ff00" :strokeWidth 2
             :parents ["A" "B"]}]])

;; ## Circle

;; One possibility to construct a circle is to give its center and a point
;; defining its radius. Lets construct two points "A" and "B". Then we'll
;; construct a circle through "A" and "B".

(cljs
 [jsx/JSXGraph {:boundingbox [-5 5 5 -2] :showCopyright false}
  [jsx/Point {:name "A" :size 4 :face "o" :parents [0 1]}]
  [jsx/Point {:name "B" :size 4 :face "o" :parents [2 0]}]
  [jsx/Circle {:strokeColor "#00ff00" :strokeWidth 2
               :parents ["A" "B"]}]])

;; ## Data Sharing
;;
;; This demo shows how to get the input talking to some state. There are issues
;; here that I'll document soon.

(cljs
 (defonce !state
   (reagent/atom
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
