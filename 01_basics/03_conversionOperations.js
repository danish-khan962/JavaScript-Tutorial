let var1 = "100";
let var2 = "100danish";
let var3 = true;
let var4 = undefined;
let var5 = null;

/*Type coversion functions like Number(), String(), Boolean()...  */
//NaN => Not a number
let ValueInNumber = Number(var1)
console.log(typeof(ValueInNumber)) //number
console.log(ValueInNumber) // 100

ValueInNumber = Number(var2)
console.log(typeof(ValueInNumber)) //number
console.log(ValueInNumber) // Nan

ValueInNumber = Number(var3)
console.log(typeof(ValueInNumber)) //number
console.log(ValueInNumber) // 1

ValueInNumber = Number(var4)
console.log(typeof(ValueInNumber)) // number
console.log(ValueInNumber) // Nan

ValueInNumber = Number(var5)
console.log(typeof(ValueInNumber)) // number
console.log(ValueInNumber) // 0

/***************************OPERATIONS**************************** */
let value = 5
let negativeOfValue = -value
console.log(`Negative of value ${value} is ` ,negativeOfValue)

//+ , - , * , ** , / ,  % are some basic operators

//Concatenation of two strings
let str1 = "Danish"
let str2 = " Khan"
let newString = (str1 + str2)
console.log("Concatenated string : ", newString)

/*Different behaviours of datatypes*/
console.log("1"+2)  //12
console.log(1+"2")  //12
console.log("1"+2+2)  //122
console.log(1+2+"2") //32