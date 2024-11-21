// this :-> refers current context in objects
const user={
    name : "Danish",
    age: 20,
    message: function(){
        console.log(`Hello ${this.name} welcome to JS tutorial`)
        console.log(this)
    }
}
user.message()
user.name = "Subhasri"
user.message()
console.log(this) // in node it will return an object, but in browser a window


/*++++++++++++++++++++++++++++++ ARROW FUNCTIONS +++++++++++++++++++++++++++++++++*/
//Basic arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5,3))

//Implicit way for arrow function
const addThree = (n1, n2, n3) => (n1+n2+n3)
console.log(addThree(4,2,9))
