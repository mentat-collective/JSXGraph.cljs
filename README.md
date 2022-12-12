# JSXGraph.cljs

[![Build Status](https://github.com/mentat-collective/jsxgraph.cljs/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/jsxgraph.cljs/actions/workflows/kondo.yml)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mentat-collective/jsxgraph.cljs/blob/main/LICENSE)
[![cljdoc badge](https://cljdoc.org/badge/org.mentat/jsxgraph.cljs)](https://cljdoc.org/d/org.mentat/jsxgraph.cljs/CURRENT)
[![Clojars Project](https://img.shields.io/clojars/v/org.mentat/jsxgraph.cljs.svg)](https://clojars.org/org.mentat/jsxgraph.cljs)

[JSXGraph][JSXGraph] is a JavaScript library that lets you build 2-dimensional
scenes full of geometric objects, function curves and interactive UI elements,
potentially with many complex constraints defined between these objects.

[JSXGraph.cljs](https://github.com/mentat-collective/jsxgraph.cljs) extends
JSXGraph with a [React][REACT] / [Reagent][REAGENT] component that makes it easy to define
JSXGraph constructions inside of a user interface built with Clojurescript.

## Quickstart

Install `jsxgraph.cljs` into your Clojurescript project using the instructions
at its Clojars page:

[![Clojars Project](https://img.shields.io/clojars/v/org.mentat/jsxgraph.cljs.svg)](https://clojars.org/org.mentat/jsxgraph.cljs)

Require `jsxgraph.core` in your namespace:

```clj
(ns my-app
   (:require [jsxgraph.core :as jsx]))
```

Create your first `jsx/JSXGraph` board, populated with two points and an arrow
between them:

```clj
(cljs
 [jsx/JSXGraph {:boundingbox [-3 3 3 -3] :axis true}
  [jsx/Point {:name "A" :size 1 :parents [-1 1]}]
  [jsx/Point {:id "B" :name "BEE!" :size 1 :parents [2 -1]}]
  [jsx/Arrow {:size 4
              :parents ["A" "B"]}]])
```

![2022-12-08 14 25 32](https://user-images.githubusercontent.com/69635/206570839-2fb1c4a9-dbb0-4c39-ac63-be5fc1ac4900.gif)

Here's a more complex example of an interactive vector field, implemented
[here](https://jsxgraph.mentat.org/#Vector%20Field):

![2022-12-08 10 31 18](https://user-images.githubusercontent.com/69635/206570865-7b24e561-2c21-4b79-a665-41644c5e6f65.gif)

See the project's [interactive documentation
notebook](https://jsxgraph.mentat.org) for more guides and examples.

## Canvas Dependency

TODO add docs https://github.com/Automattic/node-canvas#compiling

## Interactive Documentation via Clerk

The project's [interactive documentation](https://jsxgraph.mentat.org) was
generated using Nextjournal's [Clerk](https://github.com/nextjournal/clerk). If
you'd like to edit or play with the documentation, you'll need to install

- [node.js](https://nodejs.org/en/)
- The [clojure command line tool](https://clojure.org/guides/install_clojure)
- [Babashka](https://github.com/babashka/babashka#installation)

Once this is done, run this command in one terminal window to build and serve the custom JS required by the notebook:

```
bb dev-notebook
```

In another terminal window, run

```
bb start-clerk
```

This should open a browser window to `http://localhost:7777` with the contents
of the documentation notebook. Any edits you make to `dev/jsxgraph/notebook.clj`
will be picked up and displayed in the browser on save.

## Thanks and Support

To support this work and my other open source projects, consider sponsoring me
via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank you
to my current sponsors!

I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/) for
financial support during this library's creation. Please consider [becoming a
member](https://www.clojuriststogether.org/developers/) to support this work and
projects like it.

## License

Copyright © 2022 Sam Ritchie.

Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).

[CLJS]: https://clojurescript.org/
[JSXGRAPH]: https://jsxgraph.org/
[REACT]: https://reactjs.org/
[REAGENT]: https://reagent-project.github.io/
