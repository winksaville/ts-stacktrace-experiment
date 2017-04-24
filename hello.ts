require('source-map-support').install();

// Opaque traceStack
class TraceStack {
    private stackState: string;

    public constructor() {
    }

    public trace() {
        let saveStackTraceLimit = Error.stackTraceLimit;
        Error.stackTraceLimit = 2;
        let err = new Error();
        Error.captureStackTrace(err, this.trace);
        Error.stackTraceLimit = saveStackTraceLimit;
        //console.log(`${err.stack}`);
        this.stackState = err.stack;
    }

    public getTrace(): string {
        //console.log(`${this.stackState}`);
        let stack = this.stackState.split("\n");
        return `${stack[1].trim()}`;
    }

}

let ts = new TraceStack();

function main() {
    console.log("hi line 31");
    ts.trace();
    console.log("hi line 33");
    console.log(`${ts.getTrace()}`);
}

main();
