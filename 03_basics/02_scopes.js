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
