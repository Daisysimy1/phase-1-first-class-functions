function receivesAFunction(fn) {
    fn()
}
function returnsANamedFunction() {
    return function retFunction(){}
}
function returnsAnAnonymousFunction() {
    return function(){}
}