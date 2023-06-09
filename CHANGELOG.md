# Changelog

## [unreleased]

## [0.2.1]

- #34:

  - removes SCI-incompatible code from `jsxgraph.core` to allow JSXGraph.cljs
    use from Portal.

  - upgrades pieces of the local build (Clerk, kondo etc)

## [0.2.0]

- #32:

  - fixes issue where id must start with a letter

  - Adds a `deps-new` template that sets up a basic Clerk project with
    `JSXGraph.cljs` installed as a dependency. [The template lives
    here](https://github.com/mentat-collective/JSXGraph.cljs/tree/main/resources/jsxgraph/clerk).

  - Adds a `provided` dependency on SCI to `pom.xml`, so that cljdoc builds
    succeed.

  - Adds `jsxgraph.sci` with SCI namespace objects for all namespaces, plus a
    `namespaces` map and a `config` for easy installation into SCI. The
    namespaces follows the patterns set by the
    https://github.com/babashka/sci.configs repo.

    - `jsxgraph.sci/install!` allows the user to install `JSXGraph.cljs` into
      SCI's shared context with one mutating call.

  - Migrates the project over to `clerk-utils` and all of its new custom build
    stuff. This let me simplify development, update the README and DEVELOPING
    pages and kill my shadow-cljs.edn file. `user.clj` gets quite a bit simpler
    too.

  - Adds notes to the interactive docs guide about using the library with SCI
    and with Clerk

  - Upgrades to Clerk version `fad499407d979916d21b33cc7e46e73f7a485e37` for the
    template and project docs notebook

- #31 moves the library to the official JSXGraph 1.5.0 release, off of the
  mentat-collective fork.

- #29:

  - Fixes `user.clj` and `bb.edn` to work with Garden.
  - Adds docstrings to all `bb tasks`. Run `bb tasks` to see these.

- #24:

  - Upgrade to the latest Clerk version. This pulls us along to React v18.
  - Added docs on compilation requirements for the [canvas npm
    package](https://www.npmjs.com/package/canvas).
  - The JS served by the docs notebook is now named with its hash, preventing
    caching issues when the JS is upgraded.

## 0.1.0

First real release!

- Added full complement of components
- Published fleshed-out documentation notebook at https://jsxgraph.mentat.org
