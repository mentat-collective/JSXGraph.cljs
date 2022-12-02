# jsxgraph.cljs

A light ClojureScript wrapper over [JSXGraph][JSXGRAPH].

[![Build Status](https://github.com/mentat-collective/jsxgraph.cljs/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/jsxgraph.cljs/actions/workflows/kondo.yml)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mentat-collective/jsxgraph.cljs/blob/main/LICENSE)
[![cljdoc badge](https://cljdoc.org/badge/org.mentat/jsxgraph.cljs)](https://cljdoc.org/d/org.mentat/jsxgraph.cljs/CURRENT)
[![Clojars Project](https://img.shields.io/clojars/v/org.mentat/jsxgraph.cljs.svg)](https://clojars.org/org.mentat/jsxgraph.cljs)

## Quickstart

Install `jsxgraph.cljs` into your Clojurescript project using the instructions
at its Clojars page:

[![Clojars Project](https://img.shields.io/clojars/v/org.mentat/jsxgraph.cljs.svg)](https://clojars.org/org.mentat/jsxgraph.cljs)

Require `jsxgraph.core` in your namespace:

```clj
(ns my-app
   (:require [jsxgraph.core :as jsx]
             [reagent.core :as r]))
```

- TODO demo
- TODO gif of one of the results
- link to jsxgraph site etc

See the project's [interactive documentation
notebook](https://github.com/mentat-collective/jsxgraph.cljs) for more examples.

## Interactive Documentation via Clerk

The project's [interactive
documentation](https://mentat-collective.github.io/jsxgraph.cljs) was generated
using Nextjournal's [Clerk](https://github.com/nextjournal/clerk). If you'd like
to edit or play with the documentation, you'll need to install

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
[REAGENT]: https://reagent-project.github.io/
