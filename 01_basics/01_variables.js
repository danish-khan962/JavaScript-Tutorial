const accountID = 29650564; //constant value througout entire code
let accountMail = "danish@gmail.com"; // "let" is keyword to declare variable {block scope}
var accountPassword = "432"; // "var" is keyword to declare variables {global scope}

/*Prefer to use let so that we will not encounter any issue of block scope & functional scope*/

accountCity = "New Delhi";//This is another way to declare a variable but it is very bad practice to follow

let accountState; //if we declare a variable but do not assign any value , the output we get is UNDEFINED

console.log(accountID); 

//Instead of using console.log() again and again , we simply can use console.table()
console.table([accountID, accountMail, accountPassword, accountCity, accountState]);