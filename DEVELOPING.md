## Dev Dependencies

`clj`, `shadow-cljs`, `node` and `babashka`.

## Releasing Github Pages

TODO discuss the documentation notebook, how we build it, how we use Clerk etc.'

To generate the Github Pages site in the `public` folder, run:

```
bb github-pages
```

This is run by the Github Action to actually publish.

To locally generate a copy of the documentation notebook, run

```
bb publish-local
```

After the build is complete, visit http://127.0.0.1:8080/ to see the production
build of the documentation notebook.

## Publishing to Clojars

- Update the version in build.clj
- Make a new Github Release

Launching the release will create a new tag and trigger the following command:

```
clojure -T:build publish
```

The new release will appear on Clojars.

## Linting

Code is linted with `clj-kondo`. [Install
`clj-kondo`](https://github.com/clj-kondo/clj-kondo/blob/master/doc/install.md)
then run

```
bb lint
```
