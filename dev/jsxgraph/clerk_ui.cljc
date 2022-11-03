(ns jsxgraph.clerk-ui
  (:require #?(:cljs [jsxgraph.core])
            #?(:clj [nextjournal.clerk :as clerk])
            #?(:cljs [nextjournal.clerk.sci-viewer :as sv])
            #?(:cljs [sci.core :as sci]))
  #?(:cljs
     (:require-macros [jsxgraph.clerk-ui])))

;; ## Clerk ClojureScript/Reagent viewer
;;
;; (for using compiled ClojureScript in a notebook)

;; our API is a `hiccup` macro which will compile the contents as ClojureScript
;; and render it using Reagent.

#?(:cljs
   (do (sci/require-cljs-analyzer-api)
       (swap! sv/!sci-ctx
              sci/merge-opts
              {:namespaces
               {'jsxgraph.core
                (sci/copy-ns jsxgraph.core (sci/create-ns 'jsxgraph.core))}
               :classes {'Math js/Math}
               :aliases {'jsx 'jsxgraph.core}})))

#?(:clj
   (defmacro cljs [& exprs]
     `(nextjournal.clerk/with-viewer
        {:transform-fn nextjournal.clerk/mark-presented
         :render-fn '(fn [_#]
                       (let [result# (do ~@exprs)]
                         (js/console.log (pr-str result#))
                         (js/console.log (pr-str '~exprs))
                         (v/html
                          (if (vector? result#)
                            result#
                            [v/inspect result#]))))}
        {})))
