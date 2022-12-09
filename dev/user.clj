(ns user
  (:require [babashka.fs :as fs]
            [clojure.java.shell :refer [sh]]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk.view]
            [nextjournal.clerk.viewer :as cv]
            [shadow.cljs.devtools.api :as shadow]))

(defn start! []
  (swap! config/!resource->url
         assoc
         "/js/viewer.js" "http://localhost:8765/js/main.js")
  (clerk/serve!
   {:browse? true
    :watch-paths ["dev"]})
  (Thread/sleep 500)
  (clerk/show! "dev/jsxgraph/notebook.clj"))

(defn github-pages! [& _]
  (let [cas (cv/store+get-cas-url!
             {:out-path "public/js" :ext "js"}
             (fs/read-all-bytes "public/js/main.js"))]
    (swap! config/!resource->url assoc "/js/viewer.js" (str "/js/" cas))
    (clerk/build!
     {:index "dev/jsxgraph/notebook.clj"
      :bundle? false
      :browse? false
      :out-path "public"})))

(defn garden! [_]
  (println "Installing...")
  (println
   (sh "npm" "install"))
  (shadow/release! :clerk)
  (github-pages!))
