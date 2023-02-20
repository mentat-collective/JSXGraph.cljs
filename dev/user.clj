(ns user
  (:require [mentat.clerk-utils.build :as b]
            [mentat.clerk-utils.css :as css]))

(css/set-css!
 "https://cdn.jsdelivr.net/npm/jsxgraph@1.5.0/distrib/jsxgraph.css")

(def index
  "dev/jsxgraph/notebook.clj")

(def defaults
  {:index index
   :browse? true
   :watch-paths ["dev"]
   :cljs-namespaces '[jsxgraph.sci-extensions]})

(def static-defaults
  (assoc defaults
         :browse? false
         :cname "jsxgraph.mentat.org"
         :git/url "https://github.com/mentat-collective/jsxgraph.cljs"))

(defn serve!
  ([] (serve! {}))
  ([opts]
   (b/serve!
    (merge defaults opts))))

(def halt! b/halt!)

(defn build! [opts]
  (b/build!
   (merge static-defaults opts)))
