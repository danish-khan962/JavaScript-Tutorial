//for of 
const arr = [1,2,3,4]
for(const num of arr){
    console.log(`Value of array ${num}`)
}

//we can also iterate through strings
const name = "Danish Khan"
for(const value of name){
    console.log(`Value for name string iteration ${value}`)
}

//MAP
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map()
map.set('IND', 'India')
map.set('AUS', 'Australia')
map.set('ENG', 'England')
map.set('IND', 'India') // this will not get considered because it is repeating
console.log(map)
for(const [key, value] of map){
    console.log(key,':-',value)
}

//for of loop in objects
// const myObject = {
//     name : "Danish",
//     age: 19,
//     gender: "Male"
// };
// for(const [key, value] of myObject){
//     console.log(key, ':-', value)
// } //not working

console.log('')

/*for in */
//for in loop iterates through objects
const obj = {
    '.js' : 'JavaScript',
    '.py' : 'Python',
    '.cpp' : 'C++'
};
for(const key in obj){
    console.log(`${key} is the extension for ${obj[key]} file.`)
}


//Important ++++++++++++
//forEach
console.log("")
console.log("forEach loop...")
const arr2 = ["Ichigo", "Rukia", "Yoruichi", "Kisuke"]
arr2.forEach(function (value){
    console.log(value)
})

/*forEach can also be used in arrow functions*/
arr2.forEach((value, index, arr2) => {
    console.log(value,index,arr2)
})


/*API's or Database examples*/
const api_Example = [
    {
        UserName : "Danish",
        UserEmail : "danish@google.com"
    },
    {
        UserName : "Shifa",
        UserEmail : "shifa@google.com"
    },
    {
        UserName : "Afreen",
        UserEmail : "afreen@google.com"
    },
    {
        UserName : "Subhasri",
        UserEmail : "subhasri@google.com"
    }
]
api_Example.forEach((item) => {
    console.log(item.UserEmail)
})