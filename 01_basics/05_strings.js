const name = "Danish"
const age = 20
// console.log("My name is ",name,"and my age is ",age) // not a good practice
console.log(`Hello! My name is ${name} and my age is ${age}`)

//We can declare string as object also 
const str = new String("Danish") //This provides us various string manipulation functions
console.log(str.toUpperCase)
console.log(str.toUpperCase())

console.log(str.toLowerCase)
console.log(str.toLowerCase())

console.log(str.length)

console.log(str.indexOf('n'))

console.log(str.charAt(3))

const newStr = str.substring(0,3) //Slice our string from 0 to 3-1=2 
console.log(newStr)

const anotherStr = str.slice(-6,2) // we can slice by giving negative values also
console.log(anotherStr)

const str1 = "       Danish"
console.log(str1)
console.log(str1.trim()) //trims the space

const url = "https://danish.com/danish%50khan"
console.log(url.replace('%50','-')) //replaces text

console.log(url.includes('danish')) //to check if the word is in string or not

const splitingString = "danish-khan-github-profile"
console.log(splitingString.split('-')) //converts array by taking separator