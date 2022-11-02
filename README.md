# jsxgraph.cljs

A light ClojureScript wrapper over [JSXGraph][JSXGRAPH]. In progress.

[![Build Status](https://github.com/mentat-collective/jsxgraph.cljs/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/jsxgraph.cljs/actions/workflows/kondo.yml)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/sicmutils/sicmutils/blob/main/LICENSE)
[![cljdoc badge](https://cljdoc.org/badge/mentat-collective/jsxgraph.cljs)](https://cljdoc.org/d/mentat-collective/jsxgraph.cljs/CURRENT)
[![Clojars Project](https://img.shields.io/clojars/v/org.mentat/jsxgraph.cljs.svg)](https://clojars.org/org.mentat/jsxgraph.cljs)

NOTE that for now this is cribbed from the mathbox.cljs project and looks
identical. I'll force-push over this at some point shortly.

## JSXGraph Examples

- TODO get the examples directory linked

## Storybook

```sh
npm run watch
```

Starts shadow-cljs in a watcher,compiling the stories namespaces.

In a separate terminal:

```sh
npm run start-storybook
```

starts a webserver.

### Publishing to Github Pages

```sh
npm run deploy-storybook
```

## License

[MIT](LICENSE).

[JSXGRAPH]: https://jsxgraph.org
