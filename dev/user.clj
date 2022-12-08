(ns user
  (:require [nextjournal.clerk :as clerk]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk.view]))

(defn start! []
  (swap! config/!resource->url merge {"/js/viewer.js" "http://localhost:8765/js/main.js"})
  (clerk/serve!
   {:browse? true
    :watch-paths ["dev"]})
  (Thread/sleep 500)
  (clerk/show! "dev/jsxgraph/notebook.clj"))

(defn github-pages! [_]
  (swap! config/!resource->url merge {"/js/viewer.js" "/js/main.js"})
  (clerk/build!
   {:index "dev/jsxgraph/notebook.clj"
    :bundle? false
    :browse? false
    :out-path "public"}))
