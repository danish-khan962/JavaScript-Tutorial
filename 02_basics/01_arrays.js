//Arrays in JavaScript
const arr = [1,2,3,4,5]
console.log(arr)

//In JS an array can contain more than one types of datatypes
const arr2 = [1,2,"Danish",true,null]
console.log(arr2)

console.log(arr[0], arr[1]) //accessing elements in array

//Other way to declare and initialize array
const arr3 = new Array(1,2,3,4)
console.log(arr3)

console.log(arr3.length) //length of array

//ARRAY METHODS
const newArr = [3,5,2,5]
console.log(newArr)
newArr.push(9) //insert element at last
newArr.push(3)
console.log("After push: ",newArr)
newArr.pop() //delete the last inserted element from array
console.log("After pop:" ,newArr)

newArr.unshift(9) //inserts element at starting
console.log("Unshift : ", newArr)

newArr.shift() // deletes first element
console.log("Shift : ",newArr)

const arr4 = [1,2,3,4]
const arr5 = arr4.join() //binds and converts array into string 
console.log(arr4)
console.log(arr5)
console.log(typeof arr5)


//Slice and splice
//(1) Slice will extract the given to n-1 elements but does not affect original array
console.log("Slicing...")
const ARR = [1,2,3,4,5]
console.log("Original array: ", ARR)
const new_ARR = (ARR.slice(1,4)) // start from 1 and goes to 3
console.log("After slicing: ",new_ARR)
console.log("Effect on original array: ",ARR)

//(2) Splice will extract the given elements upto n and also affect the original array
console.log("Splicing...")
console.log("Original array: ", ARR)
const new_ARR2 = (ARR.splice(1,4)) //start from 1 and goes to 4
console.log("After splicing: ",new_ARR2)
console.log("Effect on original array: ",ARR)