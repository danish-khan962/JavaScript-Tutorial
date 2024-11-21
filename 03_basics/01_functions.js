//FUNCTIONS : functions are a block of code to keep and call the data we need whenever
function myName(){
    console.log("Danish");
}
myName()  //function calling

//Function to add two numbers
function addTwoNumbers(number1, number2){ //number1 and nuumber2 are parameters
    console.log(number1 + number2);
}
addTwoNumbers(5,9) // 5 and 9 are arguments 

//The return statement stops the execution of a function and returns a value.
function additionOfNumbers(num1, num2){
    // let sum = (num1+ num2)
    return num1 + num2 //value will be returned and execution stops here
    console.log("Danish") // This will not print because function already returned a value before
}
let result = additionOfNumbers(5,2) //returning values should be stored in a variable
console.log("Sum is : ", result)


//User logged in message
function UserLoggedIn(username = 'xyz'){
    return `${username} just logged in !!`
}
console.log(UserLoggedIn()) //no arguments hence default value xyz will be printed
console.log(UserLoggedIn("Danish")) // default value will be overwrite by argument


//CART PROBLEM
/*We have to calculate price of all the items in cart but we don't know number of parameters 
which are coming , hence in this case we use rest operator(means include all the rest things)*/
function CalculateCartPrice(...price1){ //... is rest operator which returns an array
    return price1
}
console.log(CalculateCartPrice(100,200,300,400)) // parameter is one but arguments are more


//Handling objects
function handlingObject(anyObject){
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`)
}
handlingObject({
    name: "Danish",
    age: 20
})

//Handling arrays
const arr = [1,2,3,4,5]
function handlingArrays(anyArray){
    console.log(anyArray[3])
}
handlingArrays(arr)