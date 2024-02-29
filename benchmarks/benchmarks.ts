import { startsWithRunner } from "./startsWith/startsWith";

const result = await startsWithRunner.runSuite();

console.log(result.getFastestResult());