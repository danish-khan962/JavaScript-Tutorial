//SWITCH CASE : Basic Syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch(month){
    case 1: console.log("Month is JANUARY..")
    break;
    case 2: console.log("Month is FEBURARY..")
    break;
    case 3: console.log("Month is MARCH..")
    break;
    case 4: console.log("Month is APRIL..")
    break;
    case 5: console.log("Month is MAY..")
    break;
    case 6: console.log("Month is JUNE..")
    break;
    case 7: console.log("Month is JULY..")
    break;
    case 8: console.log("Month is AUGUST..")
    break;
    case 9: console.log("Month is SEPTEMBER..")
    break;
    case 10: console.log("Month is OCTOBER..")
    break;
    case 11: console.log("Month is NOVEMBER..")
    break;
    case 12: console.log("Month is DECEMBER..")
    break;
    default:console.log("Please Enter a valid month number..")
}


/*FALSY AND TRUTHY VALUES*/
//Falsy values
// false, 0, -0 , null, undefined, BigInt 0n, "", NaN

//Truthy values
//"0", " ", 'false', [], {}, function(){}


//TERNARY OPERATOR
//condition ? true : false
const price = 100
price > 100 ? console.log("Greater than 100") : console.log("Less than 100")


//Nullish Coaelscing operator
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0