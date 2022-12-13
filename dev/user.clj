(ns user
  (:require [babashka.fs :as fs]
            [clojure.java.shell :refer [sh]]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk.view]
            [nextjournal.clerk.viewer :as cv]
            [shadow.cljs.devtools.api :as shadow]))

(def index
  "dev/jsxgraph/notebook.clj")

(def defaults
  {:out-path "public"})

(defn start! []
  (swap! config/!resource->url
         assoc
         "/js/viewer.js" "http://localhost:8765/js/main.js")
  (clerk/serve!
   {:browse? true
    :watch-paths ["dev"]})
  (Thread/sleep 500)
  (clerk/show! index))

(defn github-pages! [opts]
  (let [{:keys [out-path]} (merge defaults opts)
        cas (cv/store+get-cas-url!
             {:out-path (str out-path "/js") :ext "js"}
             (fs/read-all-bytes "public/js/main.js"))]
    ;; TODO make a change here so we don't have an invalid absolute path on garden.
    (swap! config/!resource->url assoc "/js/viewer.js" (str "/js/" cas))
    (clerk/build!
     (merge {:index index}
            (assoc opts :out-path out-path)))))

(defn garden! [opts]
  (println "Running npm install...")
  (println
   (sh "npm" "install"))
  (shadow/release! :clerk)
  (github-pages! opts))
