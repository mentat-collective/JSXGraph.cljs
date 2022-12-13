(ns jsxgraph.clerk-ui
  (:require [jsxgraph.core]
            [nextjournal.clerk.sci-env]
            [sci.ctx-store]
            [sci.core :as sci]))

;; ## SCI Customization
;;
;; The jsxgraph.core require and the following form make it possible to use this
;; library's CLJS code in the Clerk notebooks that document the library.

(sci.ctx-store/swap-ctx!
 sci/merge-opts
 {:classes    {'Math js/Math}
  :aliases    {'jsx 'jsxgraph.core}
  :namespaces
  {'jsxgraph.core
   (sci/copy-ns jsxgraph.core (sci/create-ns 'jsxgraph.core))}})
