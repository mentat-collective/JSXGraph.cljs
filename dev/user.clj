(ns user
  (:require [clojure.string :as str]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.dev-launcher :as launcher]
            [nextjournal.clerk.viewer]))

(defn start []
  (launcher/start
   {:browse? true
    :out-path "public"
    :watch-paths ["dev"]
    :show-filter-fn #(str/includes? % "notebook")
    :extra-namespaces '[jsxgraph.clerk-ui]}))


(comment
  (shadow.cljs.devtools.api/stop-worker :viewer)

  (start)

  #_(do
      ;; start a dev server on port 7999
      (defonce !server (atom nil))
      (some-> @!server future-cancel)
      (reset! !server
              (future
                (sh "python" "-m" "SimpleHTTPServer" "7999" :dir "public/build"))))

  (clerk/clear-cache!))

#_#_#_(defn start! []
        (swap! config/!resource->url merge {"/js/viewer.js" "http://localhost:8765/js/main.js"})
        (clerk/serve!
         {:browse? true
          :watch-paths ["dev"]})
        (Thread/sleep 500)
        (clerk/show! "dev/jsxgraph/notebook.clj"))

(defn github-pages! [_]
  ;; TODO this now defaults to a project page. Do we want to change this?
  (swap! config/!resource->url merge {"/js/viewer.js" "/jsxgraph.cljs/js/main.js"})
  (clerk/build!
   {:index "dev/jsxgraph/notebook.clj"
    :bundle? false
    :browse? false
    :out-path "public"}))

(defn publish-local!
  ([] (publish-local! nil))
  ([_]
   (swap! config/!resource->url merge {"/js/viewer.js" "/js/main.js"})
   (clerk/build!
    {:index "dev/jsxgraph/notebook.clj"
     :bundle? false
     :browse? false
     :out-path "public"})))

#_(comment
    (start!)
    (clerk/serve! {:browse? true})
    (publish-local!))
