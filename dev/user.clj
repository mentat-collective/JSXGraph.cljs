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
  (swap! config/!resource->url merge {"/js/viewer.js" "/js/main.js"})
  (clerk/build-static-app!
   {:paths ["dev/jsxgraph/notebook.cljc"]
    :bundle? false
    :browse? false
    :out-path "public"}))

(comment
  (start!)
  (clerk/serve! {:browse? true})
  (publish!))
