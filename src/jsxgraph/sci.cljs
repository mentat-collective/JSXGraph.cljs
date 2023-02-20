(ns jsxgraph.sci
  "Functions and vars for installation of all namespaces into an SCI context."
  (:require [jsxgraph.core]
            [sci.core :as sci]
            [sci.ctx-store]))

(def jsxgraph-core-namespace
  (sci/copy-ns jsxgraph.core (sci/create-ns 'jsxgraph.core)))

(def ^{:doc "Map of symbol to SCI namespace object. This var is usable as the
`:namespaces` entry in an SCI context config."}
  namespaces
  {'jsxgraph.core jsxgraph-core-namespace})

(def ^{:doc "SCI config that will install all of JSXGraph.cljs into an SCI context,
  with no aliases registered."}
  config
  {:classes {'Math js/Math}
   :namespaces namespaces})

(defn install!
  "Installs [[config]] into the shared SCI context store."
  []
  (sci.ctx-store/swap-ctx!
   sci/merge-opts
   config))
