(ns user
  (:require [babashka.fs :as fs]
            [clojure.java.shell :refer [sh]]
            [clojure.string]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk.view]
            [nextjournal.clerk.viewer :as cv]
            [shadow.cljs.devtools.api :as shadow]))

(def index
  "dev/jsxgraph/notebook.clj")

(def defaults
  {:out-path   "public"
   :cas-prefix "/"})

(defn start! []
  (swap! config/!resource->url
         assoc
         "/js/viewer.js" "http://localhost:8765/js/main.js")
  (clerk/serve!
   {:browse? true
    :watch-paths ["dev"]})
  (Thread/sleep 500)
  (clerk/show! index))

(defn replace-sha-template!
  "Replaces $GIT_SHA with the sha."
  [path]
  (let [sha (-> (sh "git" "rev-parse" "HEAD")
                (:out)
                (clojure.string/trim))]
    (-> (slurp path)
        (clojure.string/replace "$GIT_SHA" sha)
        (->> (spit path)))))

(defn github-pages! [opts]
  (let [{:keys [out-path cas-prefix]} (merge defaults opts)
        cas (cv/store+get-cas-url!
             {:out-path (str out-path "/js") :ext "js"}
             (fs/read-all-bytes "public/js/main.js"))]
    (swap! config/!resource->url assoc
           "/js/viewer.js"
           (str cas-prefix "js/" cas))
    (clerk/build!
     (merge {:index index}
            (assoc opts :out-path out-path)))
    (replace-sha-template!
     (str out-path "/index.html"))))

(defn garden! [opts]
  (println "Running npm install...")
  (println
   (sh "npm" "install"))
  (shadow/release! :clerk)
  (github-pages! opts))
