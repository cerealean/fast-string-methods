import { minify } from 'uglify-js';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import ts from "rollup-plugin-ts";

import pkg from './package.json' assert {type: 'json'};

/** @type {import('rollup').RollupOptions} */
const commonOutputOptions = {
  name: "fast-string-methods",
  compact: true,
  banner: `/** @preserve ${pkg.name} version ${pkg.version
    }, generated on ${new Date().toUTCString()} */\n`,
  sourcemap: true,
};

function minifyCode() {
  return {
    name: "rollup-plugin-minify", // this name will show up in logs and errors
    renderChunk(code) {
      const result = minify(code, {
        toplevel: true,
        compress: {
          passes: 1,
          module: true,
        },
        output: {
          beautify: false,
          comments: /^\**\s\@preserve/,
        },
        module: true,
        mangle: true,
        sourceMap: true,
      });
      if (result.warnings) {
        console.warn(result.warnings);
        return null;
      }
      return {
        code: result.code,
        map: result.map,
      };
    },
  };
}

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: "src/main.ts",
    external: ["ms"],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      ts({
        transpiler: 'swc',
        browserslist: {
          path: './.browserslistrc'
        }
      }),
      minifyCode(),
    ],
    output: [
      {
        ...commonOutputOptions,
        file: pkg.browser,
        format: "umd",
        generatedCode: "es5",
      },
      {
        ...commonOutputOptions,
        file: pkg.main,
        format: "cjs",
        generatedCode: "es2015",
      },
      {
        ...commonOutputOptions,
        file: pkg.module,
        format: "es",
        generatedCode: "es2015",
      },
    ],
  },
];
