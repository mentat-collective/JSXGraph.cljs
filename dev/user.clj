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

(defn github-pages! [{:keys [out-path]
                      :or {out-path "public"}
                      :as opts}]
  (let [cas (cv/store+get-cas-url!
             {:out-path (str out-path "/js") :ext "js"}
             (fs/read-all-bytes "public/js/main.js"))]
    (swap! config/!resource->url assoc "/js/viewer.js" (str "/js/" cas))
    (clerk/build!
     (merge {:index "dev/jsxgraph/notebook.clj"} opts))))

(defn garden! [opts]
  (println "Running npm install...")
  (println
   (sh "npm" "install" "--verbose"))
  (shadow/release! :clerk)
  (github-pages! opts))
