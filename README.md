# fastify-http-proxy-repro

## Error repro

```
➜  pnpm run build

> monorepo@ build fastify-http-proxy-repro
> pnpm run -r build


> proxy-example@1.0.0 build fastify-http-proxy-repro/packages/proxy-example
> tsc -p .

../../node_modules/.pnpm/@fastify+http-proxy@9.5.0/node_modules/@fastify/http-proxy/types/index.d.ts:3:88 - error TS2307: Cannot find module 'fastify' or its corresponding type declarations.

3 import { FastifyPluginCallback, preHandlerHookHandler, preValidationHookHandler } from 'fastify';
                                                                                         ~~~~~~~~~

../../node_modules/.pnpm/@fastify+http-proxy@9.5.0/node_modules/@fastify/http-proxy/types/index.d.ts:10:46 - error TS7016: Could not find a declaration file for module 'ws'. 'fastify-http-proxy-repro/node_modules/.pnpm/ws@8.17.1/node_modules/ws/wrapper.mjs' implicitly has an 'any' type.
  Try `npm i --save-dev @types/ws` if it exists or add a new declaration (.d.ts) file containing `declare module 'ws';`

10 import { ClientOptions, ServerOptions } from 'ws';
                                                ~~~~

../../node_modules/.pnpm/@fastify+reply-from@9.8.0/node_modules/@fastify/reply-from/types/index.d.ts:11:8 - error TS2307: Cannot find module 'fastify' or its corresponding type declarations.

11 } from 'fastify';
          ~~~~~~~~~

src/index.ts:9:24 - error TS7006: Parameter 'headers' implicitly has an 'any' type.

9         rewriteHeaders(headers, _req) {
                         ~~~~~~~

src/index.ts:9:33 - error TS7006: Parameter '_req' implicitly has an 'any' type.

9         rewriteHeaders(headers, _req) {
                                  ~~~~


Found 5 errors in 3 files.

Errors  Files
     2  ../../node_modules/.pnpm/@fastify+http-proxy@9.5.0/node_modules/@fastify/http-proxy/types/index.d.ts:3
     1  ../../node_modules/.pnpm/@fastify+reply-from@9.8.0/node_modules/@fastify/reply-from/types/index.d.ts:11
     2  src/index.ts:9
fastify-http-proxy-repro/packages/proxy-example:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  proxy-example@1.0.0 build: `tsc -p .`
Exit status 2
 ELIFECYCLE  Command failed with exit code 1.
```

## `hoist = false`

Here's the directory structure that PNPM creates when `hoist = false` in `.npmrc`:

```
├── node_modules
│   └── .pnpm
│       ├── @fastify+ajv-compiler@3.6.0
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── ajv-compiler
│       │       ├── ajv -> ../../ajv@8.16.0/node_modules/ajv
│       │       ├── ajv-formats -> ../../ajv-formats@2.1.1_ajv@8.16.0/node_modules/ajv-formats
│       │       └── fast-uri -> ../../fast-uri@2.4.0/node_modules/fast-uri
│       ├── @fastify+busboy@2.1.1
│       │   └── node_modules
│       │       └── @fastify
│       │           └── busboy
│       ├── @fastify+error@3.4.1
│       │   └── node_modules
│       │       └── @fastify
│       │           └── error
│       ├── @fastify+fast-json-stringify-compiler@4.3.0
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── fast-json-stringify-compiler
│       │       └── fast-json-stringify -> ../../fast-json-stringify@5.16.1/node_modules/fast-json-stringify
│       ├── @fastify+http-proxy@9.5.0
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   ├── http-proxy
│       │       │   └── reply-from -> ../../../@fastify+reply-from@9.8.0/node_modules/@fastify/reply-from
│       │       ├── fast-querystring -> ../../fast-querystring@1.1.2/node_modules/fast-querystring
│       │       ├── fastify-plugin -> ../../fastify-plugin@4.5.1/node_modules/fastify-plugin
│       │       └── ws -> ../../ws@8.17.1/node_modules/ws
│       ├── @fastify+merge-json-schemas@0.1.1
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── merge-json-schemas
│       │       └── fast-deep-equal -> ../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       ├── @fastify+reply-from@9.8.0
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   ├── error -> ../../../@fastify+error@3.4.1/node_modules/@fastify/error
│       │       │   └── reply-from
│       │       ├── end-of-stream -> ../../end-of-stream@1.4.4/node_modules/end-of-stream
│       │       ├── fast-content-type-parse -> ../../fast-content-type-parse@1.1.0/node_modules/fast-content-type-parse
│       │       ├── fast-querystring -> ../../fast-querystring@1.1.2/node_modules/fast-querystring
│       │       ├── fastify-plugin -> ../../fastify-plugin@4.5.1/node_modules/fastify-plugin
│       │       ├── toad-cache -> ../../toad-cache@3.7.0/node_modules/toad-cache
│       │       └── undici -> ../../undici@5.28.4/node_modules/undici
│       ├── @types+node@20.14.9
│       │   └── node_modules
│       │       ├── @types
│       │       │   └── node
│       │       └── undici-types -> ../../undici-types@5.26.5/node_modules/undici-types
│       ├── abort-controller@3.0.0
│       │   └── node_modules
│       │       ├── abort-controller
│       │       └── event-target-shim -> ../../event-target-shim@5.0.1/node_modules/event-target-shim
│       ├── abstract-logging@2.0.1
│       │   └── node_modules
│       │       └── abstract-logging
│       ├── ajv-formats@2.1.1_ajv@8.16.0
│       │   └── node_modules
│       │       ├── ajv -> ../../ajv@8.16.0/node_modules/ajv
│       │       └── ajv-formats
│       ├── ajv-formats@3.0.1_ajv@8.16.0
│       │   └── node_modules
│       │       ├── ajv -> ../../ajv@8.16.0/node_modules/ajv
│       │       └── ajv-formats
│       ├── ajv@8.16.0
│       │   └── node_modules
│       │       ├── ajv
│       │       ├── fast-deep-equal -> ../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       │       ├── json-schema-traverse -> ../../json-schema-traverse@1.0.0/node_modules/json-schema-traverse
│       │       ├── require-from-string -> ../../require-from-string@2.0.2/node_modules/require-from-string
│       │       └── uri-js -> ../../uri-js@4.4.1/node_modules/uri-js
│       ├── atomic-sleep@1.0.0
│       │   └── node_modules
│       │       └── atomic-sleep
│       ├── avvio@8.3.2
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── error -> ../../../@fastify+error@3.4.1/node_modules/@fastify/error
│       │       ├── avvio
│       │       └── fastq -> ../../fastq@1.17.1/node_modules/fastq
│       ├── base64-js@1.5.1
│       │   └── node_modules
│       │       └── base64-js
│       ├── buffer@6.0.3
│       │   └── node_modules
│       │       ├── base64-js -> ../../base64-js@1.5.1/node_modules/base64-js
│       │       ├── buffer
│       │       └── ieee754 -> ../../ieee754@1.2.1/node_modules/ieee754
│       ├── cookie@0.6.0
│       │   └── node_modules
│       │       └── cookie
│       ├── end-of-stream@1.4.4
│       │   └── node_modules
│       │       ├── end-of-stream
│       │       └── once -> ../../once@1.4.0/node_modules/once
│       ├── event-target-shim@5.0.1
│       │   └── node_modules
│       │       └── event-target-shim
│       ├── events@3.3.0
│       │   └── node_modules
│       │       └── events
│       ├── fast-content-type-parse@1.1.0
│       │   └── node_modules
│       │       └── fast-content-type-parse
│       ├── fast-decode-uri-component@1.0.1
│       │   └── node_modules
│       │       └── fast-decode-uri-component
│       ├── fast-deep-equal@3.1.3
│       │   └── node_modules
│       │       └── fast-deep-equal
│       ├── fast-json-stringify@5.16.1
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── merge-json-schemas -> ../../../@fastify+merge-json-schemas@0.1.1/node_modules/@fastify/merge-json-schemas
│       │       ├── ajv -> ../../ajv@8.16.0/node_modules/ajv
│       │       ├── ajv-formats -> ../../ajv-formats@3.0.1_ajv@8.16.0/node_modules/ajv-formats
│       │       ├── fast-deep-equal -> ../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       │       ├── fast-json-stringify
│       │       ├── fast-uri -> ../../fast-uri@2.4.0/node_modules/fast-uri
│       │       ├── json-schema-ref-resolver -> ../../json-schema-ref-resolver@1.0.1/node_modules/json-schema-ref-resolver
│       │       └── rfdc -> ../../rfdc@1.4.1/node_modules/rfdc
│       ├── fast-querystring@1.1.2
│       │   └── node_modules
│       │       ├── fast-decode-uri-component -> ../../fast-decode-uri-component@1.0.1/node_modules/fast-decode-uri-component
│       │       └── fast-querystring
│       ├── fast-redact@3.5.0
│       │   └── node_modules
│       │       └── fast-redact
│       ├── fast-uri@2.4.0
│       │   └── node_modules
│       │       └── fast-uri
│       ├── fastify-plugin@4.5.1
│       │   └── node_modules
│       │       └── fastify-plugin
│       ├── fastify@4.28.1
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   ├── ajv-compiler -> ../../../@fastify+ajv-compiler@3.6.0/node_modules/@fastify/ajv-compiler
│       │       │   ├── error -> ../../../@fastify+error@3.4.1/node_modules/@fastify/error
│       │       │   └── fast-json-stringify-compiler -> ../../../@fastify+fast-json-stringify-compiler@4.3.0/node_modules/@fastify/fast-json-stringify-compiler
│       │       ├── abstract-logging -> ../../abstract-logging@2.0.1/node_modules/abstract-logging
│       │       ├── avvio -> ../../avvio@8.3.2/node_modules/avvio
│       │       ├── fast-content-type-parse -> ../../fast-content-type-parse@1.1.0/node_modules/fast-content-type-parse
│       │       ├── fast-json-stringify -> ../../fast-json-stringify@5.16.1/node_modules/fast-json-stringify
│       │       ├── fastify
│       │       ├── find-my-way -> ../../find-my-way@8.2.0/node_modules/find-my-way
│       │       ├── light-my-request -> ../../light-my-request@5.13.0/node_modules/light-my-request
│       │       ├── pino -> ../../pino@9.2.0/node_modules/pino
│       │       ├── process-warning -> ../../process-warning@3.0.0/node_modules/process-warning
│       │       ├── proxy-addr -> ../../proxy-addr@2.0.7/node_modules/proxy-addr
│       │       ├── rfdc -> ../../rfdc@1.4.1/node_modules/rfdc
│       │       ├── secure-json-parse -> ../../secure-json-parse@2.7.0/node_modules/secure-json-parse
│       │       ├── semver -> ../../semver@7.6.2/node_modules/semver
│       │       └── toad-cache -> ../../toad-cache@3.7.0/node_modules/toad-cache
│       ├── fastq@1.17.1
│       │   └── node_modules
│       │       ├── fastq
│       │       └── reusify -> ../../reusify@1.0.4/node_modules/reusify
│       ├── find-my-way@8.2.0
│       │   └── node_modules
│       │       ├── fast-deep-equal -> ../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       │       ├── fast-querystring -> ../../fast-querystring@1.1.2/node_modules/fast-querystring
│       │       ├── find-my-way
│       │       └── safe-regex2 -> ../../safe-regex2@3.1.0/node_modules/safe-regex2
│       ├── forwarded@0.2.0
│       │   └── node_modules
│       │       └── forwarded
│       ├── ieee754@1.2.1
│       │   └── node_modules
│       │       └── ieee754
│       ├── ipaddr.js@1.9.1
│       │   └── node_modules
│       │       └── ipaddr.js
│       ├── json-schema-ref-resolver@1.0.1
│       │   └── node_modules
│       │       ├── fast-deep-equal -> ../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       │       └── json-schema-ref-resolver
│       ├── json-schema-traverse@1.0.0
│       │   └── node_modules
│       │       └── json-schema-traverse
│       ├── light-my-request@5.13.0
│       │   └── node_modules
│       │       ├── cookie -> ../../cookie@0.6.0/node_modules/cookie
│       │       ├── light-my-request
│       │       ├── process-warning -> ../../process-warning@3.0.0/node_modules/process-warning
│       │       └── set-cookie-parser -> ../../set-cookie-parser@2.6.0/node_modules/set-cookie-parser
│       ├── on-exit-leak-free@2.1.2
│       │   └── node_modules
│       │       └── on-exit-leak-free
│       ├── once@1.4.0
│       │   └── node_modules
│       │       ├── once
│       │       └── wrappy -> ../../wrappy@1.0.2/node_modules/wrappy
│       ├── pino-abstract-transport@1.2.0
│       │   └── node_modules
│       │       ├── pino-abstract-transport
│       │       ├── readable-stream -> ../../readable-stream@4.5.2/node_modules/readable-stream
│       │       └── split2 -> ../../split2@4.2.0/node_modules/split2
│       ├── pino-std-serializers@7.0.0
│       │   └── node_modules
│       │       └── pino-std-serializers
│       ├── pino@9.2.0
│       │   └── node_modules
│       │       ├── atomic-sleep -> ../../atomic-sleep@1.0.0/node_modules/atomic-sleep
│       │       ├── fast-redact -> ../../fast-redact@3.5.0/node_modules/fast-redact
│       │       ├── on-exit-leak-free -> ../../on-exit-leak-free@2.1.2/node_modules/on-exit-leak-free
│       │       ├── pino
│       │       ├── pino-abstract-transport -> ../../pino-abstract-transport@1.2.0/node_modules/pino-abstract-transport
│       │       ├── pino-std-serializers -> ../../pino-std-serializers@7.0.0/node_modules/pino-std-serializers
│       │       ├── process-warning -> ../../process-warning@3.0.0/node_modules/process-warning
│       │       ├── quick-format-unescaped -> ../../quick-format-unescaped@4.0.4/node_modules/quick-format-unescaped
│       │       ├── real-require -> ../../real-require@0.2.0/node_modules/real-require
│       │       ├── safe-stable-stringify -> ../../safe-stable-stringify@2.4.3/node_modules/safe-stable-stringify
│       │       ├── sonic-boom -> ../../sonic-boom@4.0.1/node_modules/sonic-boom
│       │       └── thread-stream -> ../../thread-stream@3.1.0/node_modules/thread-stream
│       ├── process-warning@3.0.0
│       │   └── node_modules
│       │       └── process-warning
│       ├── process@0.11.10
│       │   └── node_modules
│       │       └── process
│       ├── proxy-addr@2.0.7
│       │   └── node_modules
│       │       ├── forwarded -> ../../forwarded@0.2.0/node_modules/forwarded
│       │       ├── ipaddr.js -> ../../ipaddr.js@1.9.1/node_modules/ipaddr.js
│       │       └── proxy-addr
│       ├── punycode@2.3.1
│       │   └── node_modules
│       │       └── punycode
│       ├── quick-format-unescaped@4.0.4
│       │   └── node_modules
│       │       └── quick-format-unescaped
│       ├── readable-stream@4.5.2
│       │   └── node_modules
│       │       ├── abort-controller -> ../../abort-controller@3.0.0/node_modules/abort-controller
│       │       ├── buffer -> ../../buffer@6.0.3/node_modules/buffer
│       │       ├── events -> ../../events@3.3.0/node_modules/events
│       │       ├── process -> ../../process@0.11.10/node_modules/process
│       │       ├── readable-stream
│       │       └── string_decoder -> ../../string_decoder@1.3.0/node_modules/string_decoder
│       ├── real-require@0.2.0
│       │   └── node_modules
│       │       └── real-require
│       ├── require-from-string@2.0.2
│       │   └── node_modules
│       │       └── require-from-string
│       ├── ret@0.4.3
│       │   └── node_modules
│       │       └── ret
│       ├── reusify@1.0.4
│       │   └── node_modules
│       │       └── reusify
│       ├── rfdc@1.4.1
│       │   └── node_modules
│       │       └── rfdc
│       ├── safe-buffer@5.2.1
│       │   └── node_modules
│       │       └── safe-buffer
│       ├── safe-regex2@3.1.0
│       │   └── node_modules
│       │       ├── ret -> ../../ret@0.4.3/node_modules/ret
│       │       └── safe-regex2
│       ├── safe-stable-stringify@2.4.3
│       │   └── node_modules
│       │       └── safe-stable-stringify
│       ├── secure-json-parse@2.7.0
│       │   └── node_modules
│       │       └── secure-json-parse
│       ├── semver@7.6.2
│       │   └── node_modules
│       │       └── semver
│       ├── set-cookie-parser@2.6.0
│       │   └── node_modules
│       │       └── set-cookie-parser
│       ├── sonic-boom@4.0.1
│       │   └── node_modules
│       │       ├── atomic-sleep -> ../../atomic-sleep@1.0.0/node_modules/atomic-sleep
│       │       └── sonic-boom
│       ├── split2@4.2.0
│       │   └── node_modules
│       │       └── split2
│       ├── string_decoder@1.3.0
│       │   └── node_modules
│       │       ├── safe-buffer -> ../../safe-buffer@5.2.1/node_modules/safe-buffer
│       │       └── string_decoder
│       ├── thread-stream@3.1.0
│       │   └── node_modules
│       │       ├── real-require -> ../../real-require@0.2.0/node_modules/real-require
│       │       └── thread-stream
│       ├── toad-cache@3.7.0
│       │   └── node_modules
│       │       └── toad-cache
│       ├── typescript@5.5.2
│       │   └── node_modules
│       │       └── typescript
│       ├── undici-types@5.26.5
│       │   └── node_modules
│       ├── undici@5.28.4
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── busboy -> ../../../@fastify+busboy@2.1.1/node_modules/@fastify/busboy
│       │       └── undici
│       ├── uri-js@4.4.1
│       │   └── node_modules
│       │       ├── punycode -> ../../punycode@2.3.1/node_modules/punycode
│       │       └── uri-js
│       ├── wrappy@1.0.2
│       │   └── node_modules
│       │       └── wrappy
│       └── ws@8.17.1
│           └── node_modules
│               └── ws
└── packages
    └── proxy-example
        ├── node_modules
        │   ├── .bin
        │   ├── @fastify
        │   │   └── http-proxy -> ../../../../node_modules/.pnpm/@fastify+http-proxy@9.5.0/node_modules/@fastify/http-proxy
        │   ├── @types
        │   │   └── node -> ../../../../node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node
        │   ├── fastify -> ../../../node_modules/.pnpm/fastify@4.28.1/node_modules/fastify
        │   └── typescript -> ../../../node_modules/.pnpm/typescript@5.5.2/node_modules/typescript
        └── src
```

## `hoist = true`

Here's the directory structure that PNPM creates when `hoist = true` in `.npmrc`. Note the `node_modules/.pnpm/node_modules` directory, which exposes `fastify` to `@fastify/http-proxy` even though there is no explicit dependency.

See PNPM's docs on `.npmrc.hoist` [here](https://pnpm.io/npmrc#hoist).

```
├── node_modules
│   └── .pnpm
│       ├── @fastify+ajv-compiler@3.6.0
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── ajv-compiler
│       │       ├── ajv -> ../../ajv@8.16.0/node_modules/ajv
│       │       ├── ajv-formats -> ../../ajv-formats@2.1.1_ajv@8.16.0/node_modules/ajv-formats
│       │       └── fast-uri -> ../../fast-uri@2.4.0/node_modules/fast-uri
│       ├── @fastify+busboy@2.1.1
│       │   └── node_modules
│       │       └── @fastify
│       │           └── busboy
│       ├── @fastify+error@3.4.1
│       │   └── node_modules
│       │       └── @fastify
│       │           └── error
│       ├── @fastify+fast-json-stringify-compiler@4.3.0
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── fast-json-stringify-compiler
│       │       └── fast-json-stringify -> ../../fast-json-stringify@5.16.1/node_modules/fast-json-stringify
│       ├── @fastify+http-proxy@9.5.0
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   ├── http-proxy
│       │       │   └── reply-from -> ../../../@fastify+reply-from@9.8.0/node_modules/@fastify/reply-from
│       │       ├── fast-querystring -> ../../fast-querystring@1.1.2/node_modules/fast-querystring
│       │       ├── fastify-plugin -> ../../fastify-plugin@4.5.1/node_modules/fastify-plugin
│       │       └── ws -> ../../ws@8.17.1/node_modules/ws
│       ├── @fastify+merge-json-schemas@0.1.1
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── merge-json-schemas
│       │       └── fast-deep-equal -> ../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       ├── @fastify+reply-from@9.8.0
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   ├── error -> ../../../@fastify+error@3.4.1/node_modules/@fastify/error
│       │       │   └── reply-from
│       │       ├── end-of-stream -> ../../end-of-stream@1.4.4/node_modules/end-of-stream
│       │       ├── fast-content-type-parse -> ../../fast-content-type-parse@1.1.0/node_modules/fast-content-type-parse
│       │       ├── fast-querystring -> ../../fast-querystring@1.1.2/node_modules/fast-querystring
│       │       ├── fastify-plugin -> ../../fastify-plugin@4.5.1/node_modules/fastify-plugin
│       │       ├── toad-cache -> ../../toad-cache@3.7.0/node_modules/toad-cache
│       │       └── undici -> ../../undici@5.28.4/node_modules/undici
│       ├── @types+node@20.14.9
│       │   └── node_modules
│       │       ├── @types
│       │       │   └── node
│       │       └── undici-types -> ../../undici-types@5.26.5/node_modules/undici-types
│       ├── abort-controller@3.0.0
│       │   └── node_modules
│       │       ├── abort-controller
│       │       └── event-target-shim -> ../../event-target-shim@5.0.1/node_modules/event-target-shim
│       ├── abstract-logging@2.0.1
│       │   └── node_modules
│       │       └── abstract-logging
│       ├── ajv-formats@2.1.1_ajv@8.16.0
│       │   └── node_modules
│       │       ├── ajv -> ../../ajv@8.16.0/node_modules/ajv
│       │       └── ajv-formats
│       ├── ajv-formats@3.0.1_ajv@8.16.0
│       │   └── node_modules
│       │       ├── ajv -> ../../ajv@8.16.0/node_modules/ajv
│       │       └── ajv-formats
│       ├── ajv@8.16.0
│       │   └── node_modules
│       │       ├── ajv
│       │       ├── fast-deep-equal -> ../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       │       ├── json-schema-traverse -> ../../json-schema-traverse@1.0.0/node_modules/json-schema-traverse
│       │       ├── require-from-string -> ../../require-from-string@2.0.2/node_modules/require-from-string
│       │       └── uri-js -> ../../uri-js@4.4.1/node_modules/uri-js
│       ├── atomic-sleep@1.0.0
│       │   └── node_modules
│       │       └── atomic-sleep
│       ├── avvio@8.3.2
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── error -> ../../../@fastify+error@3.4.1/node_modules/@fastify/error
│       │       ├── avvio
│       │       └── fastq -> ../../fastq@1.17.1/node_modules/fastq
│       ├── base64-js@1.5.1
│       │   └── node_modules
│       │       └── base64-js
│       ├── buffer@6.0.3
│       │   └── node_modules
│       │       ├── base64-js -> ../../base64-js@1.5.1/node_modules/base64-js
│       │       ├── buffer
│       │       └── ieee754 -> ../../ieee754@1.2.1/node_modules/ieee754
│       ├── cookie@0.6.0
│       │   └── node_modules
│       │       └── cookie
│       ├── end-of-stream@1.4.4
│       │   └── node_modules
│       │       ├── end-of-stream
│       │       └── once -> ../../once@1.4.0/node_modules/once
│       ├── event-target-shim@5.0.1
│       │   └── node_modules
│       │       └── event-target-shim
│       ├── events@3.3.0
│       │   └── node_modules
│       │       └── events
│       ├── fast-content-type-parse@1.1.0
│       │   └── node_modules
│       │       └── fast-content-type-parse
│       ├── fast-decode-uri-component@1.0.1
│       │   └── node_modules
│       │       └── fast-decode-uri-component
│       ├── fast-deep-equal@3.1.3
│       │   └── node_modules
│       │       └── fast-deep-equal
│       ├── fast-json-stringify@5.16.1
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── merge-json-schemas -> ../../../@fastify+merge-json-schemas@0.1.1/node_modules/@fastify/merge-json-schemas
│       │       ├── ajv -> ../../ajv@8.16.0/node_modules/ajv
│       │       ├── ajv-formats -> ../../ajv-formats@3.0.1_ajv@8.16.0/node_modules/ajv-formats
│       │       ├── fast-deep-equal -> ../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       │       ├── fast-json-stringify
│       │       ├── fast-uri -> ../../fast-uri@2.4.0/node_modules/fast-uri
│       │       ├── json-schema-ref-resolver -> ../../json-schema-ref-resolver@1.0.1/node_modules/json-schema-ref-resolver
│       │       └── rfdc -> ../../rfdc@1.4.1/node_modules/rfdc
│       ├── fast-querystring@1.1.2
│       │   └── node_modules
│       │       ├── fast-decode-uri-component -> ../../fast-decode-uri-component@1.0.1/node_modules/fast-decode-uri-component
│       │       └── fast-querystring
│       ├── fast-redact@3.5.0
│       │   └── node_modules
│       │       └── fast-redact
│       ├── fast-uri@2.4.0
│       │   └── node_modules
│       │       └── fast-uri
│       ├── fastify-plugin@4.5.1
│       │   └── node_modules
│       │       └── fastify-plugin
│       ├── fastify@4.28.1
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   ├── ajv-compiler -> ../../../@fastify+ajv-compiler@3.6.0/node_modules/@fastify/ajv-compiler
│       │       │   ├── error -> ../../../@fastify+error@3.4.1/node_modules/@fastify/error
│       │       │   └── fast-json-stringify-compiler -> ../../../@fastify+fast-json-stringify-compiler@4.3.0/node_modules/@fastify/fast-json-stringify-compiler
│       │       ├── abstract-logging -> ../../abstract-logging@2.0.1/node_modules/abstract-logging
│       │       ├── avvio -> ../../avvio@8.3.2/node_modules/avvio
│       │       ├── fast-content-type-parse -> ../../fast-content-type-parse@1.1.0/node_modules/fast-content-type-parse
│       │       ├── fast-json-stringify -> ../../fast-json-stringify@5.16.1/node_modules/fast-json-stringify
│       │       ├── fastify
│       │       ├── find-my-way -> ../../find-my-way@8.2.0/node_modules/find-my-way
│       │       ├── light-my-request -> ../../light-my-request@5.13.0/node_modules/light-my-request
│       │       ├── pino -> ../../pino@9.2.0/node_modules/pino
│       │       ├── process-warning -> ../../process-warning@3.0.0/node_modules/process-warning
│       │       ├── proxy-addr -> ../../proxy-addr@2.0.7/node_modules/proxy-addr
│       │       ├── rfdc -> ../../rfdc@1.4.1/node_modules/rfdc
│       │       ├── secure-json-parse -> ../../secure-json-parse@2.7.0/node_modules/secure-json-parse
│       │       ├── semver -> ../../semver@7.6.2/node_modules/semver
│       │       └── toad-cache -> ../../toad-cache@3.7.0/node_modules/toad-cache
│       ├── fastq@1.17.1
│       │   └── node_modules
│       │       ├── fastq
│       │       └── reusify -> ../../reusify@1.0.4/node_modules/reusify
│       ├── find-my-way@8.2.0
│       │   └── node_modules
│       │       ├── fast-deep-equal -> ../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       │       ├── fast-querystring -> ../../fast-querystring@1.1.2/node_modules/fast-querystring
│       │       ├── find-my-way
│       │       └── safe-regex2 -> ../../safe-regex2@3.1.0/node_modules/safe-regex2
│       ├── forwarded@0.2.0
│       │   └── node_modules
│       │       └── forwarded
│       ├── ieee754@1.2.1
│       │   └── node_modules
│       │       └── ieee754
│       ├── ipaddr.js@1.9.1
│       │   └── node_modules
│       │       └── ipaddr.js
│       ├── json-schema-ref-resolver@1.0.1
│       │   └── node_modules
│       │       ├── fast-deep-equal -> ../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       │       └── json-schema-ref-resolver
│       ├── json-schema-traverse@1.0.0
│       │   └── node_modules
│       │       └── json-schema-traverse
│       ├── light-my-request@5.13.0
│       │   └── node_modules
│       │       ├── cookie -> ../../cookie@0.6.0/node_modules/cookie
│       │       ├── light-my-request
│       │       ├── process-warning -> ../../process-warning@3.0.0/node_modules/process-warning
│       │       └── set-cookie-parser -> ../../set-cookie-parser@2.6.0/node_modules/set-cookie-parser
│       ├── node_modules
│       │   ├── .bin
│       │   ├── @fastify
│       │   │   ├── ajv-compiler -> ../../@fastify+ajv-compiler@3.6.0/node_modules/@fastify/ajv-compiler
│       │   │   ├── busboy -> ../../@fastify+busboy@2.1.1/node_modules/@fastify/busboy
│       │   │   ├── error -> ../../@fastify+error@3.4.1/node_modules/@fastify/error
│       │   │   ├── fast-json-stringify-compiler -> ../../@fastify+fast-json-stringify-compiler@4.3.0/node_modules/@fastify/fast-json-stringify-compiler
│       │   │   ├── http-proxy -> ../../@fastify+http-proxy@9.5.0/node_modules/@fastify/http-proxy
│       │   │   ├── merge-json-schemas -> ../../@fastify+merge-json-schemas@0.1.1/node_modules/@fastify/merge-json-schemas
│       │   │   └── reply-from -> ../../@fastify+reply-from@9.8.0/node_modules/@fastify/reply-from
│       │   ├── @types
│       │   │   └── node -> ../../@types+node@20.14.9/node_modules/@types/node
│       │   ├── abort-controller -> ../abort-controller@3.0.0/node_modules/abort-controller
│       │   ├── abstract-logging -> ../abstract-logging@2.0.1/node_modules/abstract-logging
│       │   ├── ajv -> ../ajv@8.16.0/node_modules/ajv
│       │   ├── ajv-formats -> ../ajv-formats@2.1.1_ajv@8.16.0/node_modules/ajv-formats
│       │   ├── atomic-sleep -> ../atomic-sleep@1.0.0/node_modules/atomic-sleep
│       │   ├── avvio -> ../avvio@8.3.2/node_modules/avvio
│       │   ├── base64-js -> ../base64-js@1.5.1/node_modules/base64-js
│       │   ├── buffer -> ../buffer@6.0.3/node_modules/buffer
│       │   ├── cookie -> ../cookie@0.6.0/node_modules/cookie
│       │   ├── end-of-stream -> ../end-of-stream@1.4.4/node_modules/end-of-stream
│       │   ├── event-target-shim -> ../event-target-shim@5.0.1/node_modules/event-target-shim
│       │   ├── events -> ../events@3.3.0/node_modules/events
│       │   ├── fast-content-type-parse -> ../fast-content-type-parse@1.1.0/node_modules/fast-content-type-parse
│       │   ├── fast-decode-uri-component -> ../fast-decode-uri-component@1.0.1/node_modules/fast-decode-uri-component
│       │   ├── fast-deep-equal -> ../fast-deep-equal@3.1.3/node_modules/fast-deep-equal
│       │   ├── fast-json-stringify -> ../fast-json-stringify@5.16.1/node_modules/fast-json-stringify
│       │   ├── fast-querystring -> ../fast-querystring@1.1.2/node_modules/fast-querystring
│       │   ├── fast-redact -> ../fast-redact@3.5.0/node_modules/fast-redact
│       │   ├── fast-uri -> ../fast-uri@2.4.0/node_modules/fast-uri
│       │   ├── fastify -> ../fastify@4.28.1/node_modules/fastify
│       │   ├── fastify-plugin -> ../fastify-plugin@4.5.1/node_modules/fastify-plugin
│       │   ├── fastq -> ../fastq@1.17.1/node_modules/fastq
│       │   ├── find-my-way -> ../find-my-way@8.2.0/node_modules/find-my-way
│       │   ├── forwarded -> ../forwarded@0.2.0/node_modules/forwarded
│       │   ├── ieee754 -> ../ieee754@1.2.1/node_modules/ieee754
│       │   ├── ipaddr.js -> ../ipaddr.js@1.9.1/node_modules/ipaddr.js
│       │   ├── json-schema-ref-resolver -> ../json-schema-ref-resolver@1.0.1/node_modules/json-schema-ref-resolver
│       │   ├── json-schema-traverse -> ../json-schema-traverse@1.0.0/node_modules/json-schema-traverse
│       │   ├── light-my-request -> ../light-my-request@5.13.0/node_modules/light-my-request
│       │   ├── on-exit-leak-free -> ../on-exit-leak-free@2.1.2/node_modules/on-exit-leak-free
│       │   ├── once -> ../once@1.4.0/node_modules/once
│       │   ├── pino -> ../pino@9.2.0/node_modules/pino
│       │   ├── pino-abstract-transport -> ../pino-abstract-transport@1.2.0/node_modules/pino-abstract-transport
│       │   ├── pino-std-serializers -> ../pino-std-serializers@7.0.0/node_modules/pino-std-serializers
│       │   ├── process -> ../process@0.11.10/node_modules/process
│       │   ├── process-warning -> ../process-warning@3.0.0/node_modules/process-warning
│       │   ├── proxy-addr -> ../proxy-addr@2.0.7/node_modules/proxy-addr
│       │   ├── punycode -> ../punycode@2.3.1/node_modules/punycode
│       │   ├── quick-format-unescaped -> ../quick-format-unescaped@4.0.4/node_modules/quick-format-unescaped
│       │   ├── readable-stream -> ../readable-stream@4.5.2/node_modules/readable-stream
│       │   ├── real-require -> ../real-require@0.2.0/node_modules/real-require
│       │   ├── require-from-string -> ../require-from-string@2.0.2/node_modules/require-from-string
│       │   ├── ret -> ../ret@0.4.3/node_modules/ret
│       │   ├── reusify -> ../reusify@1.0.4/node_modules/reusify
│       │   ├── rfdc -> ../rfdc@1.4.1/node_modules/rfdc
│       │   ├── safe-buffer -> ../safe-buffer@5.2.1/node_modules/safe-buffer
│       │   ├── safe-regex2 -> ../safe-regex2@3.1.0/node_modules/safe-regex2
│       │   ├── safe-stable-stringify -> ../safe-stable-stringify@2.4.3/node_modules/safe-stable-stringify
│       │   ├── secure-json-parse -> ../secure-json-parse@2.7.0/node_modules/secure-json-parse
│       │   ├── semver -> ../semver@7.6.2/node_modules/semver
│       │   ├── set-cookie-parser -> ../set-cookie-parser@2.6.0/node_modules/set-cookie-parser
│       │   ├── sonic-boom -> ../sonic-boom@4.0.1/node_modules/sonic-boom
│       │   ├── split2 -> ../split2@4.2.0/node_modules/split2
│       │   ├── string_decoder -> ../string_decoder@1.3.0/node_modules/string_decoder
│       │   ├── thread-stream -> ../thread-stream@3.1.0/node_modules/thread-stream
│       │   ├── toad-cache -> ../toad-cache@3.7.0/node_modules/toad-cache
│       │   ├── typescript -> ../typescript@5.5.2/node_modules/typescript
│       │   ├── undici -> ../undici@5.28.4/node_modules/undici
│       │   ├── undici-types -> ../undici-types@5.26.5/node_modules/undici-types
│       │   ├── uri-js -> ../uri-js@4.4.1/node_modules/uri-js
│       │   ├── wrappy -> ../wrappy@1.0.2/node_modules/wrappy
│       │   └── ws -> ../ws@8.17.1/node_modules/ws
│       ├── on-exit-leak-free@2.1.2
│       │   └── node_modules
│       │       └── on-exit-leak-free
│       ├── once@1.4.0
│       │   └── node_modules
│       │       ├── once
│       │       └── wrappy -> ../../wrappy@1.0.2/node_modules/wrappy
│       ├── pino-abstract-transport@1.2.0
│       │   └── node_modules
│       │       ├── pino-abstract-transport
│       │       ├── readable-stream -> ../../readable-stream@4.5.2/node_modules/readable-stream
│       │       └── split2 -> ../../split2@4.2.0/node_modules/split2
│       ├── pino-std-serializers@7.0.0
│       │   └── node_modules
│       │       └── pino-std-serializers
│       ├── pino@9.2.0
│       │   └── node_modules
│       │       ├── atomic-sleep -> ../../atomic-sleep@1.0.0/node_modules/atomic-sleep
│       │       ├── fast-redact -> ../../fast-redact@3.5.0/node_modules/fast-redact
│       │       ├── on-exit-leak-free -> ../../on-exit-leak-free@2.1.2/node_modules/on-exit-leak-free
│       │       ├── pino
│       │       ├── pino-abstract-transport -> ../../pino-abstract-transport@1.2.0/node_modules/pino-abstract-transport
│       │       ├── pino-std-serializers -> ../../pino-std-serializers@7.0.0/node_modules/pino-std-serializers
│       │       ├── process-warning -> ../../process-warning@3.0.0/node_modules/process-warning
│       │       ├── quick-format-unescaped -> ../../quick-format-unescaped@4.0.4/node_modules/quick-format-unescaped
│       │       ├── real-require -> ../../real-require@0.2.0/node_modules/real-require
│       │       ├── safe-stable-stringify -> ../../safe-stable-stringify@2.4.3/node_modules/safe-stable-stringify
│       │       ├── sonic-boom -> ../../sonic-boom@4.0.1/node_modules/sonic-boom
│       │       └── thread-stream -> ../../thread-stream@3.1.0/node_modules/thread-stream
│       ├── process-warning@3.0.0
│       │   └── node_modules
│       │       └── process-warning
│       ├── process@0.11.10
│       │   └── node_modules
│       │       └── process
│       ├── proxy-addr@2.0.7
│       │   └── node_modules
│       │       ├── forwarded -> ../../forwarded@0.2.0/node_modules/forwarded
│       │       ├── ipaddr.js -> ../../ipaddr.js@1.9.1/node_modules/ipaddr.js
│       │       └── proxy-addr
│       ├── punycode@2.3.1
│       │   └── node_modules
│       │       └── punycode
│       ├── quick-format-unescaped@4.0.4
│       │   └── node_modules
│       │       └── quick-format-unescaped
│       ├── readable-stream@4.5.2
│       │   └── node_modules
│       │       ├── abort-controller -> ../../abort-controller@3.0.0/node_modules/abort-controller
│       │       ├── buffer -> ../../buffer@6.0.3/node_modules/buffer
│       │       ├── events -> ../../events@3.3.0/node_modules/events
│       │       ├── process -> ../../process@0.11.10/node_modules/process
│       │       ├── readable-stream
│       │       └── string_decoder -> ../../string_decoder@1.3.0/node_modules/string_decoder
│       ├── real-require@0.2.0
│       │   └── node_modules
│       │       └── real-require
│       ├── require-from-string@2.0.2
│       │   └── node_modules
│       │       └── require-from-string
│       ├── ret@0.4.3
│       │   └── node_modules
│       │       └── ret
│       ├── reusify@1.0.4
│       │   └── node_modules
│       │       └── reusify
│       ├── rfdc@1.4.1
│       │   └── node_modules
│       │       └── rfdc
│       ├── safe-buffer@5.2.1
│       │   └── node_modules
│       │       └── safe-buffer
│       ├── safe-regex2@3.1.0
│       │   └── node_modules
│       │       ├── ret -> ../../ret@0.4.3/node_modules/ret
│       │       └── safe-regex2
│       ├── safe-stable-stringify@2.4.3
│       │   └── node_modules
│       │       └── safe-stable-stringify
│       ├── secure-json-parse@2.7.0
│       │   └── node_modules
│       │       └── secure-json-parse
│       ├── semver@7.6.2
│       │   └── node_modules
│       │       └── semver
│       ├── set-cookie-parser@2.6.0
│       │   └── node_modules
│       │       └── set-cookie-parser
│       ├── sonic-boom@4.0.1
│       │   └── node_modules
│       │       ├── atomic-sleep -> ../../atomic-sleep@1.0.0/node_modules/atomic-sleep
│       │       └── sonic-boom
│       ├── split2@4.2.0
│       │   └── node_modules
│       │       └── split2
│       ├── string_decoder@1.3.0
│       │   └── node_modules
│       │       ├── safe-buffer -> ../../safe-buffer@5.2.1/node_modules/safe-buffer
│       │       └── string_decoder
│       ├── thread-stream@3.1.0
│       │   └── node_modules
│       │       ├── real-require -> ../../real-require@0.2.0/node_modules/real-require
│       │       └── thread-stream
│       ├── toad-cache@3.7.0
│       │   └── node_modules
│       │       └── toad-cache
│       ├── typescript@5.5.2
│       │   └── node_modules
│       │       └── typescript
│       ├── undici-types@5.26.5
│       │   └── node_modules
│       │       └── undici-types
│       ├── undici@5.28.4
│       │   └── node_modules
│       │       ├── @fastify
│       │       │   └── busboy -> ../../../@fastify+busboy@2.1.1/node_modules/@fastify/busboy
│       │       └── undici
│       ├── uri-js@4.4.1
│       │   └── node_modules
│       │       ├── punycode -> ../../punycode@2.3.1/node_modules/punycode
│       │       └── uri-js
│       ├── wrappy@1.0.2
│       │   └── node_modules
│       │       └── wrappy
│       └── ws@8.17.1
│           └── node_modules
│               └── ws
└── packages
    └── proxy-example
        ├── node_modules
        │   ├── .bin
        │   ├── @fastify
        │   │   └── http-proxy -> ../../../../node_modules/.pnpm/@fastify+http-proxy@9.5.0/node_modules/@fastify/http-proxy
        │   ├── @types
        │   │   └── node -> ../../../../node_modules/.pnpm/@types+node@20.14.9/node_modules/@types/node
        │   ├── fastify -> ../../../node_modules/.pnpm/fastify@4.28.1/node_modules/fastify
        │   └── typescript -> ../../../node_modules/.pnpm/typescript@5.5.2/node_modules/typescript
        └── src
```