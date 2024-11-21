const myDate = new Date()
console.log(typeof myDate)
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())

const myTimeStamp = Date.now()
console.log(myTimeStamp) // gives milliseconds
console.log(myTimeStamp/1000) // this converts into seconds
console.log(Math.floor(myTimeStamp/1000)) // rounds off seconds


const newDate = new Date()
console.log(newDate.getMonth()+1) //months start from 0 so we do +1
console.log(newDate.getDay())
console.log(newDate.getHours())