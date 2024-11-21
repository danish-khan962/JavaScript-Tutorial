//Immediately Invoked Function Expressions (IIFE)

//Syntax: (function defintion)(function execution)

(function database(){
    console.log('Connection to Database is Successfull..')
})(); //(;) is necessary to end the execution

((name) => {
    console.log(`${name} successfully connected to Database..`)
}) ('Danish');