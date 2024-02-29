import Benchmark from 'benchmark';

import { startsWith } from '../../src/main.mjs';

const sentence = "The capricious cat catered to the clever caterpillar";
const searchString = "The cap";

runResultsFoundTest({
    sentence,
    searchString,
    callback: () => runNoResultsFoundTest({
        sentence,
        searchString
    })
});

function runResultsFoundTest(options) {
    const { callback, sentence, searchString } = options;
    console.log('String Starts With, Results Found');
    new Benchmark.Suite("String Starts With, Results Found")
        .add("fast-string-methods # startsWith", () => {
            startsWith(
                sentence, searchString
            );
        })
        .add("JavaScript String # startsWith", () => {
            sentence.startsWith(
                "The cap"
            );
        })
        .add("JavaScript String # match", () => {
            sentence.match("The cap");
        })
        .add("JavaScript String # search", () => {
            sentence.search("The cap");
        })
        .on("cycle", function (event) {
            console.log(String(event.target));
        })
        .on("complete", function () {
            console.log("Fastest is " + this.filter("fastest").map("name"));
            callback?.();
        })
        .run({ async: true });
}

function runNoResultsFoundTest(options) {
    const { callback, sentence, searchString } = options;
    console.log('String Starts With, Results Are Not Found');
    new Benchmark.Suite("String Starts With, Results Are Not Found")
        .add("fast-string-methods # startsWith", () => {
            startsWith(
                sentence,
                "The cat"
            );
        })
        .add("JavaScript String # startsWith", () => {
            sentence.startsWith(
                "The cat"
            );
        })
        .add("JavaScript String # match", () => {
            sentence.match("The cat");
        })
        .add("JavaScript String # search", () => {
            sentence.search("The cat");
        })
        .on("cycle", function (event) {
            console.log(String(event.target));
        })
        .on("complete", function () {
            console.log("Fastest is " + this.filter("fastest").map("name"));
        })
        .run({ async: true });
}

// startsWith_resultsNotFound
//   .add("fast-string-methods#startsWith#results not found", () => {
//     startsWith(
//       "The capricious cat catered to the clever caterpillar",
//       "The cat"
//     );
//   })
//   .on("cycle", function (event) {
//     console.log(String(event.target));
//   })
//   .on("complete", function () {
//     console.log("Fastest is " + this.filter("fastest").map("name"));
//   })
//   .run({ async: true });
