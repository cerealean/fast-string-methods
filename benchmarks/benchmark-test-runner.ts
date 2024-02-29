import Benchmark from "benchmark";

export interface BenchmarkTestResultStatistics {
    readonly standardDeviation: number;
    readonly mean: number;
    readonly marginOfError: number;
    readonly relativeMarginOfError: number;
    readonly standardErrorOfMean: number;
    readonly variance: number;
}

export class BenchmarkTestResult {
    constructor(
        public readonly testName: string,
        public readonly executionsPerSecond: number | undefined,
        public readonly statistics: Partial<BenchmarkTestResultStatistics>
    ) { }

}

export class BenchmarkTestResults {
    private fastestResult?: BenchmarkTestResult;

    constructor(
        public readonly suiteName: string,
        private readonly results: BenchmarkTestResult[]
    ) { }

    public getAllResults() {
        return this.results.slice();
    }

    public getFastestResult() {
        if(!this.fastestResult) {
            this.fastestResult = this.results.reduce((acc: BenchmarkTestResult, result) => (acc = (acc.executionsPerSecond ?? 0) > (result.executionsPerSecond ?? 0) ? acc : (result)));
        }
        return this.fastestResult;
    }
}

export class BenchmarkTestRunner {
    private suite: Benchmark.Suite;

    constructor(
        public readonly suiteName: string
    ) {
        this.suite = new Benchmark.Suite(this.suiteName);
    }

    public addTest(testName: string, testFn: () => void): this {
        this.suite.add(testName, testFn);

        return this;
    }

    public runSuite(): Promise<BenchmarkTestResults> {
        return new Promise((resolve, reject) => {
            const results: BenchmarkTestResult[] = [];
            this.suite.on('cycle', (event: Benchmark.Event) => {
                const stats = event.target.stats;
                results.push(new BenchmarkTestResult(
                    String(event.target.name),
                    event.target.hz,
                    {
                        marginOfError: stats?.moe,
                        mean: stats?.mean,
                        relativeMarginOfError: stats?.rme,
                        standardDeviation: stats?.deviation,
                        standardErrorOfMean: stats?.sem,
                        variance: stats?.variance
                    }
                ));
                console.info(String(event.target));
            })
                .on('start', () => {
                    console.info('Running benchmark test suite: ' + this.suiteName);
                })
                .on('error', (event: Benchmark.Event) => {
                    reject('Error while running ' + this.suiteName + ' ' + event.target.name);
                })
                .on('complete', () => {
                    console.info('Finished benchmark test suite: ' + this.suiteName);
                    resolve(new BenchmarkTestResults(
                        this.suiteName,
                        results
                    ));
                })
                .run({ async: true });
        });
    }
}