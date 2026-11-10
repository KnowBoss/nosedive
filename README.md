# nosedive

Turns a plain notes repo into a bridge: one repo that holds the plan and drives agentic work across your other repos.

## Install

Needs Node.js 24 or later and git.

```sh
npm install --global nosedive@dev
nosedive help
```

`nosedive@latest` is still the legacy CLI until a bundle is promoted.

## What this package is

This repo publishes bundles; it holds no source of its own. Each bundle is:

- [nosedive-core](https://github.com/KnowBoss/nosedive-core): the `nosedive` command, built at one commit and tested;
- [nosedive-work](https://github.com/KnowBoss/nosedive-work) (`jump`, `pack`, `land`, `bail`) and [nosedive-legacy](https://github.com/KnowBoss/nosedive-legacy) (`test`, `hydrate-repo.workspace`, `dehydrate-repo.workspace`, `record.gate`, `note`): built by that core at the commits it pins, tested, and shipped in `dist/capes/`, so a hero that wears them at those commits takes them as they are, with no clone or build.

[bundle.json](bundle.json) names every source commit and how its tests went. Any other cape a hero wears is built from its repo when the hero is seeded.

## Making a release

1. `npm run bundle -- --commit <core commit or branch>` typechecks core, then builds and tests it and its capes in a scratch directory, copies them into `dist/`, writes `bundle.json` and commits.
2. Pushing that commit to `main` verifies it and publishes it as `nosedive@dev`.
3. Running the Publish workflow by hand with a published version tags it `latest`.

The legacy CLI's source is on the [`legacy`](https://github.com/KnowBoss/nosedive/tree/legacy) branch.
