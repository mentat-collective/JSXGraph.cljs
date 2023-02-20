# JSXGraph.cljs

[![Build Status][build-status]][build-status-url]
[![License][license]][license-url]
[![cljdoc badge][cljdoc]][cljdoc-url]
[![Clojars Project][clojars]][clojars-url]
[![Discord Shield][discord]][discord-url]

[JSXGraph][jsxgraph-url] is a JavaScript library that lets you build
2-dimensional scenes full of geometric objects, function curves and interactive
UI elements, potentially with many complex constraints defined between these
objects.

[JSXGraph.cljs][github-url] extends JSXGraph with a [React][react-url] /
[Reagent][reagent-url] component that makes it easy to define JSXGraph
constructions inside of a user interface built with Clojurescript.

## Quickstart

Install `JSXGraph.cljs` into your Clojurescript project using the instructions
at its Clojars page:

[![Clojars Project][clojars]][clojars-url](https://clojars.org/org.mentat/jsxgraph.cljs)

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

The [JSXGraph NPM package](https://www.npmjs.com/package/jsxgraph) depends on
the [canvas](https://www.npmjs.com/package/canvas) package.
[canvas](https://www.npmjs.com/package/canvas) comes with many pre-built
binaries, but if you're running on a non-supported OS or processor architecture
NPM may try to compile this dependency from source.

If you run into trouble, [see the `canvas` docs page on
compilation](https://github.com/Automattic/node-canvas#compiling) for
instructions on how to install the dependencies for this process.

## Clerk Support

If you want to use `JSXGraph.cljs` with [Clerk][clerk-url], check out the
[`jsxgraph/clerk` template][jsxgraph-clerk-template-url]. This
[`deps-new`][deps-new-url] template will generate a Clerk project for you, fully
configured to use `JSXGraph.cljs` in your Clerk notebooks.

## Interactive Documentation via Clerk

The project's [interactive documentation](https://jsxgraph.mentat.org) was
generated using Nextjournal's [Clerk][clerk-url]. If
you'd like to edit or play with the documentation, you'll need to install

- [node.js](https://nodejs.org/en/)
- The [clojure command line tool](https://clojure.org/guides/install_clojure)
- [Babashka](https://github.com/babashka/babashka#installation)

Once this is done, run this command:

```sh
bb clerk-watch
```

This will open a browser window to `http://localhost:7777` with the contents of
the documentation notebook. Any edits you make to `dev/jsxgraph/notebook.clj` will
be picked up and displayed in the browser on save.

## Thanks and Support

To support this work and my other open source projects, consider sponsoring me
via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank you
to my current sponsors!

I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/) for
financial support during this library's creation. Please consider [becoming a
member](https://www.clojuriststogether.org/developers/) to support this work and
projects like it.

## License

Copyright © 2022-2023 Sam Ritchie.

Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).

[build-status-url]: https://github.com/mentat-collective/jsxgraph.cljs/actions/workflows/kondo.yml
[build-status]: https://github.com/mentat-collective/jsxgraph.cljs/actions/workflows/kondo.yml/badge.svg?branch=main
[cljdoc-url]: https://cljdoc.org/d/org.mentat/jsxgraph.cljs/CURRENT
[cljdoc]: https://cljdoc.org/badge/org.mentat/jsxgraph.cljs
[clojars-url]: https://clojars.org/org.mentat/jsxgraph.cljs
[clojars]: https://img.shields.io/clojars/v/org.mentat/jsxgraph.cljs.svg
[discord-url]: https://discord.gg/hsRBqGEeQ4
[discord]: https://img.shields.io/discord/731131562002743336?style=flat&colorA=000000&colorB=000000&label=&logo=discord
[license-url]: LICENSE
[license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[github-url]: https://github.com/mentat-collective/jsxgraph.cljs
[jsxgraph-url]: https://jsxgraph.org/
[react-url]: https://reactjs.org/
[reagent-url]: https://reagent-project.github.io
[deps-new-url]: https://github.com/seancorfield/deps-new
[jsxgraph-clerk-template-url]: https://github.com/mentat-collective/jsxgraph.cljs/tree/main/resources/jsxgraph/clerk
[clerk-url]: https://clerk.vision
