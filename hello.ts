require('source-map-support').install();

function stackTrace(lines: number) {
    let err = new Error();
    Error.captureStackTrace(err, stackTrace);
    //console.log(err.stack);
    let stack = err.stack.split("\n");
    for (let i = 1; i <= lines; i++) {
        console.log(`${stack[i].trim()}`);
    }
}

function main() {
    console.log("hi line 14");
    stackTrace(1);
    console.log("hi line 16");
}

main();
