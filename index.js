function receivesAFunction(callback) {
    callback(); // Calls the provided callback function
}

// Example of usage:
receivesAFunction(() => console.log("Callback executed!"));
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("I am a named function!");
    };
}
function returnsAnAnonymousFunction() {
    return () => {
        console.log("I am an anonymous function!");
    };
}
