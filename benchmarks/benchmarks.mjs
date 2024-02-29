import Benchmark from 'benchmark';

import { startsWith } from '../src/main.mjs';

console.log('String Starts With, Results Found');
new Benchmark.Suite("String Starts With, Results Found")
  .add("fast-string-methods # startsWith", () => {
    startsWith(
      "The capricious cat catered to the clever caterpillar",
      "The cap"
    );
  })
  .add("JavaScript String # startsWith", () => {
    "The capricious cat catered to the clever caterpillar".startsWith(
      "The cap"
    );
  })
  .add("JavaScript String # match", () => {
    "The capricious cat catered to the clever caterpillar".match("The cap");
  })
  .add("JavaScript String # search", () => {
    "The capricious cat catered to the clever caterpillar".search("The cap");
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
    runNoResultsFoundTest();
  })
  .run({ async: true });

function runNoResultsFoundTest() {
    console.log('///');
    console.log('String Starts With, Results Are Not Found');
    new Benchmark.Suite("String Starts With, Results Are Not Found")
  .add("fast-string-methods # startsWith", () => {
    startsWith(
      "The capricious cat catered to the clever caterpillar",
      "The cat"
    );
  })
  .add("JavaScript String # startsWith", () => {
    "The capricious cat catered to the clever caterpillar".startsWith(
      "The cat"
    );
  })
  .add("JavaScript String # match", () => {
    "The capricious cat catered to the clever caterpillar".match("The cat");
  })
  .add("JavaScript String # search", () => {
    "The capricious cat catered to the clever caterpillar".search("The cat");
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
