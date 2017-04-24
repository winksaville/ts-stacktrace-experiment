require('source-map-support').install();

// Opaque TraceMarker
class TraceMarker {
    private _stackState: string;

    public constructor() {
    }

    public mark() {
        let saveStackTraceLimit = Error.stackTraceLimit;
        Error.stackTraceLimit = 2;
        let err = new Error();
        Error.captureStackTrace(err, this.mark);
        Error.stackTraceLimit = saveStackTraceLimit;
        //console.log(`${err.stack}`);
        this._stackState = err.stack;
    }

    public getMark(): string {
        //console.log(`${this.stackState}`);
        let stack = this._stackState.split("\n");
        return `${stack[1].trim()}`;
    }
}


function main() {
    let tm = new TraceMarker();
    console.log("hi line 30");
    tm.mark(); console.log(`${tm.getMark()}`);
    console.log("hi line 32");
}

main();
