//Objects through constructors 
const TinderUser = new Object()
TinderUser.id = 239372002
TinderUser.name = "Danish"
TinderUser.merit = "100%"
TinderUser.isLoggedIn = false
console.log(TinderUser)
console.log(Object.keys(TinderUser)) //return key in array
console.log(Object.values(TinderUser)) //returns values in array
console.log(TinderUser.hasOwnProperty('isLoggedIn')) //checks if object has such property or not


//Nested objects
const user = {
    email : "xyz@google.com",
    name:{
        fullname:{
            firstname: "danish",
            lastname: "khan"
        }
    }
}
console.log(user.name.fullname.firstname) //user-> name -> fullname -> firstname

const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}
console.log({...obj1, ...obj2}) //merge two objects just like arrays
const hold = Object.assign({}, obj1, obj2) //other way to merge objects
console.log(hold) 

//Array of objects
/*const userr = [
    { },
    { },
] */


//Destructuring of objects
const player = {
    name: "Danish",
    numberOfMathes: 35,
    totalRuns: 1023,
    average: 50
};
const {average: avg} = player; // this is destructing
console.log(avg)
