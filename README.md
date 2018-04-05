# VueでTypeScriptで画面のテスト

TypeScript * Vueの構成については
https://github.com/ninomae-makoto/TypeScript-Vue-Minimal
を元にしているのでそっちを参照してもらえればいいかと。

以下の環境を想定
- Win/Mac (Linuxもいける？)
- Visual Studio Code推奨

# Usage

1. Clone Or Download
ソースを取得してくる。

2. 依存関係の解決

```
npm install
```

## Mac/Linux

```
$(npm bin)/karma start
```

## Windows

```
karma start
```

※ うまくいかない場合はグローバルにインストールする。

以下のようにコンソールに表示されたらOK。

```
MacBook-Pro:TypeScript-Vue-Karma [user]$ $(npm bin)/karma start
05 04 2018 18:40:10.204:DEBUG [config]: Loading config /Users/[user]/Project/i/TypeScript-Vue-Karma/karma.conf.js
05 04 2018 18:40:10.210:DEBUG [plugin]: Loading karma-* from /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules
05 04 2018 18:40:10.214:DEBUG [plugin]: Loading plugin /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma-chai.
05 04 2018 18:40:10.216:DEBUG [plugin]: Loading plugin /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma-chrome-launcher.
05 04 2018 18:40:10.227:DEBUG [plugin]: Loading plugin /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma-mocha.
05 04 2018 18:40:10.231:DEBUG [plugin]: Loading plugin /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma-mocha-reporter.
05 04 2018 18:40:10.274:DEBUG [plugin]: Loading plugin /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma-webpack.
05 04 2018 18:40:10.626:DEBUG [web-server]: Instantiating middleware
05 04 2018 18:40:10.627:DEBUG [reporter]: Trying to load reporter: mocha
05 04 2018 18:40:10.630:DEBUG [reporter]: Trying to load color-version of reporter: mocha (mocha_color)
05 04 2018 18:40:10.630:DEBUG [reporter]: Couldn't load color-version.
(node:61760) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
ℹ ｢wdm｣: wait until bundle finished: noop
05 04 2018 18:40:11.409:DEBUG [karma]: List of files has changed, trying to execute
05 04 2018 18:40:11.409:WARN [karma]: No captured browser, open http://localhost:9876/
05 04 2018 18:40:11.413:DEBUG [watcher]: Watching "/Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/vue/dist/vue.js"
05 04 2018 18:40:11.414:DEBUG [watcher]: Watching "/Users/[user]/Project/i/TypeScript-Vue-Karma/src/test"
ℹ ｢wdm｣: Hash: 6b88f3314485729f755d
Version: webpack 4.4.1
Time: 11207ms
Built at: 2018-4-5 18:40:11
           Asset      Size            Chunks                    Chunk Names
            main  66.9 KiB              main  [emitted]         main
src/test/test.ts   992 KiB  src/test/test.ts  [emitted]  [big]  src/test/test.ts
Entrypoint main = main
Entrypoint src/test/test.ts [big] = src/test/test.ts
[./node_modules/@vue/test-utils/dist/vue-test-utils.js] 126 KiB {src/test/test.ts}
[./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/Hello.vue] ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/Hello.vue 1010 bytes {src/test/test.ts} {main}
[./node_modules/css-loader/lib/css-base.js] 2.21 KiB {src/test/test.ts} {main}
[./node_modules/node-libs-browser/node_modules/timers-browserify/main.js] 1.85 KiB {src/test/test.ts}
[./node_modules/ts-loader/index.js!./node_modules/tslint-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Hello.vue] ./node_modules/ts-loader!./node_modules/tslint-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Hello.vue 262 bytes {src/test/test.ts} {main}
[./node_modules/vue-loader/lib/runtime/component-normalizer.js] 2.81 KiB {src/test/test.ts} {main}
[./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-361a4bd2","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Hello.vue] ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-361a4bd2","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Hello.vue 1.06 KiB {src/test/test.ts} {main}
[./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/Hello.vue] ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/Hello.vue 1.55 KiB {src/test/test.ts} {main}
[./node_modules/vue-style-loader/lib/addStylesClient.js] 6.09 KiB {src/test/test.ts} {main}
[./node_modules/vue-template-compiler/browser.js] 206 KiB {src/test/test.ts}
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {src/test/test.ts}
[./src/components/Hello.vue] 1.92 KiB {src/test/test.ts} {main}
[./src/index.ts] 598 bytes {main}
[./src/test/test.ts] 559 bytes {src/test/test.ts}
[vue] external "Vue" 42 bytes {src/test/test.ts} {main}
    + 3 hidden modules
ℹ ｢wdm｣: Compiled successfully.



05 04 2018 18:40:11.429:INFO [karma]: Karma v2.0.0 server started at http://0.0.0.0:9876/
05 04 2018 18:40:11.430:INFO [launcher]: Launching browser Chrome with unlimited concurrency
05 04 2018 18:40:11.435:INFO [launcher]: Starting browser Chrome
05 04 2018 18:40:11.436:DEBUG [temp-dir]: Creating temp dir at /var/folders/zs/6qmvt6_10mgbj4f7s3sknb5m0000gn/T/karma-58600722
05 04 2018 18:40:11.436:DEBUG [launcher]: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome --user-data-dir=/var/folders/zs/6qmvt6_10mgbj4f7s3sknb5m0000gn/T/karma-58600722 --no-default-browser-check --no-first-run --disable-default-apps --disable-popup-blocking --disable-translate --disable-background-timer-throttling --disable-renderer-backgrounding --disable-device-discovery-notifications http://localhost:9876/?id=58600722
05 04 2018 18:40:12.070:DEBUG [web-server]: serving: /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma/static/client.html
05 04 2018 18:40:12.176:DEBUG [web-server]: serving: /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma/static/karma.js
05 04 2018 18:40:12.477:DEBUG [karma]: A browser has connected on socket 9IrPHWSz4gBZBb_gAAAA
05 04 2018 18:40:12.480:DEBUG [web-server]: serving: /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma/static/favicon.ico
05 04 2018 18:40:12.499:DEBUG [web-server]: upgrade /socket.io/?EIO=3&transport=websocket&sid=9IrPHWSz4gBZBb_gAAAA
05 04 2018 18:40:12.546:INFO [Chrome 65.0.3325 (Mac OS X 10.12.6)]: Connected on socket 9IrPHWSz4gBZBb_gAAAA with id 58600722
05 04 2018 18:40:12.547:DEBUG [launcher]: Chrome (id 58600722) captured in 1.116 secs
05 04 2018 18:40:12.547:DEBUG [karma]: All browsers are ready, executing
05 04 2018 18:40:12.547:DEBUG [karma]: Captured 1 browsers

START:
05 04 2018 18:40:12.564:DEBUG [middleware:karma]: custom files null null null
05 04 2018 18:40:12.565:DEBUG [middleware:karma]: Serving static request /context.html
05 04 2018 18:40:12.567:DEBUG [web-server]: serving: /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma/static/context.html
05 04 2018 18:40:12.586:DEBUG [middleware:source-files]: Requesting /base/node_modules/chai/chai.js?40e7aa72e9665366bfd82579520de4fb0754dfae /
05 04 2018 18:40:12.587:DEBUG [middleware:source-files]: Fetching /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/chai/chai.js
05 04 2018 18:40:12.589:DEBUG [web-server]: serving (cached): /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/chai/chai.js
05 04 2018 18:40:12.598:DEBUG [middleware:source-files]: Requesting /base/node_modules/karma-chai/adapter.js?bab484a2111791847997ed88414622bccfbd2749 /
05 04 2018 18:40:12.598:DEBUG [middleware:source-files]: Fetching /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma-chai/adapter.js
05 04 2018 18:40:12.598:DEBUG [web-server]: serving (cached): /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma-chai/adapter.js
05 04 2018 18:40:12.599:DEBUG [web-server]: serving: /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma/static/context.js
05 04 2018 18:40:12.602:DEBUG [middleware:source-files]: Requesting /base/node_modules/mocha/mocha.js?c4c33896b37a974ca00ad38d96e39fc8204113fe /
05 04 2018 18:40:12.602:DEBUG [middleware:source-files]: Fetching /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/mocha/mocha.js
05 04 2018 18:40:12.602:DEBUG [web-server]: serving (cached): /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/mocha/mocha.js
05 04 2018 18:40:12.612:DEBUG [middleware:source-files]: Requesting /base/node_modules/karma-mocha/lib/adapter.js?e8826109cf50b958ee4bd667517729ffdd4de363 /
05 04 2018 18:40:12.612:DEBUG [middleware:source-files]: Fetching /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma-mocha/lib/adapter.js
05 04 2018 18:40:12.612:DEBUG [middleware:source-files]: Requesting /base/node_modules/vue/dist/vue.js?e7bebefc32cb9c0d8261e764e8f24c1cd41c217f /
05 04 2018 18:40:12.613:DEBUG [middleware:source-files]: Fetching /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/vue/dist/vue.js
05 04 2018 18:40:12.613:DEBUG [middleware:source-files]: Requesting /base/src/test/test.ts?a27a41ca723c2b1ce3e74d000b2d1c18f9d71b7f /
05 04 2018 18:40:12.614:DEBUG [middleware:source-files]: Fetching /Users/[user]/Project/i/TypeScript-Vue-Karma/src/test/test.ts
05 04 2018 18:40:12.614:DEBUG [web-server]: serving (cached): /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/karma-mocha/lib/adapter.js
05 04 2018 18:40:12.615:DEBUG [web-server]: serving (cached): /Users/[user]/Project/i/TypeScript-Vue-Karma/node_modules/vue/dist/vue.js
05 04 2018 18:40:12.616:DEBUG [web-server]: serving (cached): /Users/[user]/Project/i/TypeScript-Vue-Karma/src/test/test.ts
  Hello.vue
    ✔ Karma Sample 初期値の検証
    ✔ Karma Sample 入力の検証

Finished in 0.023 secs / 0.017 secs @ 18:40:12 GMT+0900 (JST)

SUMMARY:
✔ 2 tests completed
^C05 04 2018 18:45:13.840:DEBUG [launcher]: Disconnecting all browsers
05 04 2018 18:45:13.970:DEBUG [launcher]: Process Chrome exited with code 0
05 04 2018 18:45:13.971:DEBUG [temp-dir]: Cleaning temp dir /var/folders/zs/6qmvt6_10mgbj4f7s3sknb5m0000gn/T/karma-58600722
05 04 2018 18:45:14.049:DEBUG [launcher]: Finished all browsers

```

# ざっくり概要

## sfa.d.ts
sfa.d.tsがあるディレクトリ以下にtestファイルを配置しないとimportが出来なかった。

## karma.conf.js

filesがテスト対象になる。

```

files: [
  "./node_modules/vue/dist/vue.js",
  'src/test/**/*.ts'
],

```

vueは外部化している。
htmlでスクリプトを読み込む要領で上から指定すれば外部ファイルも使用できる。



```

mime: {
  'text/x-typescript': ['ts', 'tsx']
},

```

を指定しないとChromeでtsファイルのテストができなかった。
