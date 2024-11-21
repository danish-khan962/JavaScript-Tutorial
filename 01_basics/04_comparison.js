/*******BASIC COMPARISON OPERATORS */
//(1) Comparison operators connverts two values into same datatype for comparison
let var1 = "5"
let var2 = 10
console.log(var1 > var2)
console.log(var1 < var2)
console.log(var1 >= var2)
console.log(var1 <= var2)
console.log(var1 != var2)

//(2) Equality operator( == ) , do not convert two value into same datatype for comparison
let var3 = 5
console.log(var1 == var3)

//Difference between comparison and equality operator
console.log("Checking for NULL ..")
console.log(null > 0) //false | null is 0
console.log(null == 0) //false | equality operator cannot convert null into 0
console.log(null >= 0) //true | comparison operator converted null into 0 and compared >=


//STRICT CHECK (===) , not only do comparison , but also checks for same datatype
console.log("Strict check ..")
console.log("5" === 5) //false | first is string and other one is number


/****************************************************************************/
/* ++++++++++++++++++ MEMORY MANAGEMENT IN JAVASCRIPT  +++++++++++++++++++++*/

//Memory in Javascript is managed by two ways (i) Stack (ii) Heap
//(1) Stack memory management: (all primitive datatypes)
//Stack memory creates shallow copies or we can say pass by value..
let name = "Danish"
let newName = name //newName stores value of name i.e., Danish
newName = "Ichigo" //Danish changed to Ichigo in newName
console.log(name) // name will still have it's original value
console.log(newName)
 
//(2) Heap memory management: (all non-primitve datatypes)
 //Heap memory creats direct references to variables..

let obj1 = {
    name: "Danish",
    id: 2034
};
let obj2 = obj1  //obj2 getting all values of obj1
obj2.id = 5000
console.log(obj1.id) //it pointed to heap memory so 5000
console.log(obj2.id) //it also pointed to heap memory so 5000
