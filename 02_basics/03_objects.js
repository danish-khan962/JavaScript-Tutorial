/*Two ways to define object in javascript : (i) Constructor(singleton) and (ii) Object literal*/

//Object Literal
const JsUser = {
    name: "Danish",
    age: 20,
    email: "danish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
console.log(JsUser.email) //but we don't access like this
console.log(JsUser["email"]) //we use this way to access objects items

JsUser.email = "dansish@code.com" //value changed
console.log(JsUser["email"])

Object.freeze(JsUser) // this will freeze our existing entries and we can't upgrade our object values
//now if we do this, values do not change
JsUser.email = "danish@hotmail.com"
console.log(JsUser)


/*Use of symbols in string*/ //they usually got converted into string so we use special syntax
const mySymbol = Symbol("key")
const Details = {
    name: "Bleach: Thousand year blood warfare ,the conflict",
    [mySymbol]: "Bleach Stamped Symbol",
    release: "5th oct, 2024",
    episodes: 13,
    airing_status: false,
    "hot topics": ["Bankai", "Soul Society"]
};
//printing symbol as symbol , not as string
console.log(Details[mySymbol])
console.log(Details)

//Functions : In JS functions are treated as variables
const userDetails = {
    name: "Danish Khan",
    age: 20,
    email: "danish@gmail.com"
};
userDetails.greetings = function(){
    console.log("Hello User !!");
    console.log(`Hello ${this.name}`); // (this) will refer to object key pair
}
console.log(userDetails.greetings())