# nosedive

Turns a plain notes repo into a bridge: one repo that holds the plan and the knowledge base, and the commands that work on them.

## Install

Needs Node.js 24 or later and git.

```sh
npm install --global nosedive@dev
nosedive help
```

`nosedive@latest` is still the legacy CLI until a bundle is promoted.

## What you get

The package is nosedive's core, and nothing else. In a git repo, `nosedive seed` makes it a bridge, and these commands work:

- `crud`: reads, mints and edits kb docs;
- `dock`: checks a repo out for work;
- `mint`: prints new ids;
- `next`: lists what is left to do;
- `pass`: passes a doc through the gates its kind links;
- `seed`: makes a repo a bridge, or brings its setup up to date.

Run `nosedive <command> --help` to learn one.

## Adding commands with a cape

Any other command comes from a cape: a repo of actions, docs and kinds that a bridge wears. A fresh bridge wears none. To attach one:

```sh
nosedive crud core:repo "What the cape does" --name my-cape --meta:remotes.origin <git url>
nosedive pass --attach-cape <repo id crud printed> --ref <commit or branch>
```

`pass --attach-cape` clones the cape from that origin and builds it at its ref, so its repo must be reachable the first time; seed later only rebuilds the capes a bridge wears. To wear the legacy CLI's `jump`, `pack`, `land` and `bail`, attach [nosedive-legacy](https://github.com/KnowBoss/nosedive-legacy) the same way:

```sh
nosedive crud core:repo "The legacy loop" --name nosedive-legacy --meta:remotes.origin https://github.com/KnowBoss/nosedive-legacy
nosedive pass --attach-cape <repo id crud printed> --ref <commit or branch>
```

A bridge that already wore it keeps it: seed attaches it at the commit its core names.

## What this repo is

It publishes bundles and holds no source of its own. Each bundle is [nosedive-core](https://github.com/KnowBoss/nosedive-core), built at one commit and tested, with [bundle.json](bundle.json) naming that commit and how its tests went. No cape ships in it.

## Making a release

1. `npm run bundle -- --commit <core commit or branch>` typechecks core, then tests and builds it in a scratch directory, copies it into `dist/`, writes `bundle.json` and commits.
2. Pushing that commit to `main` verifies it and publishes it as `nosedive@dev`.
3. `nosedive promote [<dev version>]`, run from nosedive-dev, makes a published dev build `latest`, once an agent-run demo of core passes; it then pushes the new cast and release notes to `docs/`, which is what [nosedive.dev](https://nosedive.dev) shows. A push that touches only `docs/` publishes no dev build.

The legacy CLI's source is on the [`legacy`](https://github.com/KnowBoss/nosedive/tree/legacy) branch.
