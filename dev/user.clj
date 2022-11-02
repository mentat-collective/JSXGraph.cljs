(ns user
  (:require [nextjournal.clerk :as clerk]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk.viewer]))

(defn start! []
  (swap! config/!resource->url merge {"/js/viewer.js" "http://localhost:8765/js/main.js"})
  (clerk/serve!
   {:browse? true
    :watch-paths ["dev"]})
  (Thread/sleep 500)
  (clerk/show! "dev/jsxgraph/notebook.cljc"))

(defn publish! [_]
  ;; TODO this now defaults to a project page. Do we want to change this?
  (swap! config/!resource->url merge {"/js/viewer.js" "/jsxgraph.cljs/js/main.js"})
  (clerk/build-static-app!
   {:paths ["dev/jsxgraph/notebook.cljc"]
    :bundle? false
    :browse? false
    :out-path "public"}))

(comment
  (start!)
  (clerk/serve! {:browse? true})
  (publish!))
