(ns ^:nextjournal.clerk/no-cache jsxgraph.clerk-ui
  (:require [applied-science.js-interop]
            [clojure.string]
            #?(:clj [nextjournal.clerk :as clerk])
            #?(:clj [nextjournal.clerk.viewer :as viewer]))
  #?(:cljs
     (:require-macros jsxgraph.clerk-ui)))

;; ## Clerk ClojureScript/Reagent viewer
;;
;; (for using compiled ClojureScript in a notebook)

;; our API is a `hiccup` macro which will compile the contents as ClojureScript
;; and render it using Reagent.

#?(:clj
   (def reagent-viewer
     (viewer/process-render-fn
      {:pred #(and (map? %) (contains? % :reagent/var))
       :transform-fn clerk/mark-presented
       :render-fn '(fn render-var [{var :reagent/var}]
                     (let [path (->> (clojure.string/split (str var) #"[./]")
                                     (mapv munge))
                           reagent-fn (applied-science.js-interop/get-in js/window path)
                           wrapper (fn [f] (let [result (f)]
                                            (if (vector? result)
                                              result
                                              (v/inspect result))))]
                       (when reagent-fn
                         (v/html [:div.my-1 [wrapper reagent-fn]]))))})))

(defmacro cljs
  "Evaluate expressions in ClojureScript instead of Clojure. If the result is
   a vector, it is passed to Reagent and interpreted as hiccup."
  [& exprs]
  (let [name (symbol (str "reagent-view-" (hash exprs)))]
    (if (:ns &env)
      ;; in ClojureScript, define a function
      `(defn ~(with-meta name {:export true}) [] ~@exprs)
      ;; in Clojure, return a map with a reference to the fully qualified sym
      `(nextjournal.clerk/with-viewer jsxgraph.clerk-ui/reagent-viewer
         {:reagent/var '~(symbol (str *ns*) (str name))}))))
