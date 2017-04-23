# Experiment with TypeScript stacktrace

Uses npm module `source-map-support` to have Error.captureStackTrace
properly display source lines for TypeScript files.

## Prerequisites
- node
- yarn

## Test
```
yarn test
```
## The results are:
```
$ yarn test
yarn test v0.23.2
$ tsc -p hello.tsconfig.json
$ node hello.js
hi line 14
at main (/home/wink/prgs/ts-stacktrace-experiment/hello.ts:15:5)
hi line 16
Done in 1.75s.
```
