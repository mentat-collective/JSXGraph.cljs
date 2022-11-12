(ns jsxgraph.clerk-ui
  (:require #?(:cljs [jsxgraph.core])
            #?(:clj [nextjournal.clerk :as clerk])
            #?(:cljs [nextjournal.clerk.sci-env :refer [!sci-ctx]])
            #?(:cljs [sci.core :as sci]))
  #?(:cljs
     (:require-macros [jsxgraph.clerk-ui])))

;; ## SCI Customization
;;
;; The jsxgraph.core require and the following form make it possible to use this
;; library's CLJS code in the Clerk notebooks that document the library.

#?(:cljs
   (swap! !sci-ctx
          sci/merge-opts
          {:classes    {'Math js/Math}
           :aliases    {'jsx 'jsxgraph.core}
           :namespaces
           {'jsxgraph.core
            (sci/copy-ns jsxgraph.core (sci/create-ns 'jsxgraph.core))}}))

;; ## Example Macro

#?(:clj
   (defmacro cljs [& exprs]
     `(nextjournal.clerk/with-viewer
        {:transform-fn nextjournal.clerk/mark-presented
         :render-fn '(fn [_#]
                       (let [result# (do ~@exprs)]
                         (v/html
                          (if (vector? result#)
                            result#
                            [v/inspect result#]))))}
        {})))
