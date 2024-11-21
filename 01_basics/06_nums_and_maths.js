/************ NUMBERS ********* */
const num1 = 100
console.log(num1)

const num2 = new Number(500)
console.log(num2)

console.log(num2.toString()) //converts to string
console.log(num2.toFixed(2)) //2 fixed decimal values

const num3 = 52.64
console.log(num3.toPrecision(2)) // converts to given value precision

const num4 = 5000000000
console.log(num4.toLocaleString('en-IN')) //converts figures according to Indian system



/***************** MATHS ************************** */
console.log("MATH ....")
console.log(Math.abs(-4)) // absolute value => converts negative number to positive
console.log(Math.round(34.23)) // round off the value
console.log(Math.ceil(4.2)) // ceil => takes higher round off number
console.log(Math.floor(4.9)) // floor => takes lower round off number
console.log(Math.min(1,2,3,4,5,6,7)) // prints minimum value
console.log(Math.max(1,2,3,4,5,6,7)) // prints maximum value

//Important is : Math.random() 
console.log(Math.random()) // in random() value lies between 0 and 1
console.log(Math.random()*10) //shifts value to left

//to encounter the 0.056635868 something like this error
console.log(Math.floor(Math.random()*10)+1) //Now we will not encounter digit 0

//defining a range for randomness of number
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min) //range will be between 10 and 20
