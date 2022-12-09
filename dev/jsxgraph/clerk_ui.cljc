(ns jsxgraph.clerk-ui
  (:require #?@(:clj
                [[nextjournal.clerk :as clerk]]
                :cljs
                [[jsxgraph.core]
                 [nextjournal.clerk.sci-env]
                 [sci.ctx-store]
                 [sci.core :as sci]]))
  #?(:cljs
     (:require-macros [jsxgraph.clerk-ui])))

;; ## SCI Customization
;;
;; The jsxgraph.core require and the following form make it possible to use this
;; library's CLJS code in the Clerk notebooks that document the library.

#?(:cljs
   (sci.ctx-store/swap-ctx!
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
                          (if (and (vector? result#)
                                   (not (:inspect (meta result#))))
                            result#
                            [v/inspect result#]))))}
        {})))
