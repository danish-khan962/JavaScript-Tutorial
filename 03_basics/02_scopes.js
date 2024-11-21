//Scopes are of two types global and block 
let var1 = 10
const var2 = 20
var var3 = 30
if (true) {
    let var1 = 100
    const var2 = 200
    var var3 = 300
    console.log("Inner variable var1: ", var1) //100
    console.log("Inner variable var2: ", var2) //200
    console.log("Inner variable var3: ", var3) //300
}
console.log("Outer variable var1: ", var1) //10
console.log("Outer variable var2: ", var2) //20
console.log("Outer variable var3: ", var3) //300 (because var do not follow scope)


//Scope level and closure
function one(){
    const name = "Danish"
    function two(){
        const website = "github"
        console.log(name)
    }
    // console.log(webiste) //this will give error because it is out of scope level
    two()
}
one()


/*++++++++++++++++++++++ IMPORTANT ++++++++++++++++++++++++*/
//HOISTING

console.log(addOne(5)) //calling before function , but it will run
function addOne(num1){
    return num1 + 1
}

//this expression can be known as hoisting, when we hold a function inside a variable
console.log(addTwo(5)) // If we call before initialization , we encounter error
const addTwo = function(num2){
    return num2 + 1
}