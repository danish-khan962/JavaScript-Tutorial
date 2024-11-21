"use strict"; //treat all JS code as newer version

//alert("Danish") //Works only in Browser, not in NodeJS

//TYPES OF DATATYPES : - 
/*(1) Primitive Datatypes :
-> Number: integer datatype
-> String: " " , ' ' 
-> bigint: stores larger integer value than number datatype
-> boolean: stores 0/1 or true/false
-> null: standalone value
-> undefined
-> symbol: for uniqueness

(2) Non - primitive Datatypes : 
-> object 
-> array
-> functions*/

//typeof() operator to check types of variable
let contactNumber = 900005000
console.log(typeof(contactNumber)) // number

let userName = "Danish"
console.log(typeof(userName)) //string

let boolvalue = true
console.log(typeof(boolvalue)) //boolean

let undefinedVaribale;
console.log(typeof(undefinedVaribale)) //undefined

let state = null
console.log(typeof(state)) // "null" will return datatype as 'object'...