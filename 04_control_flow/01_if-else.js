//if statement
/* if(condition){
    
} */
const score = 2000
if(score>=2000){
    const power = "Bankai"
    console.log(`User Power ${power}`)
}


const temperature = 50
if(temperature >=  50){
    console.log("Extremely Hot today !!")
} else{
    console.log("Normal Weather today !!")
}


//if and else-if
const balance = 800
if(balance < 500){
    console.log("Your balance is less than 500")
} else if(balance < 700){
    console.log("Your balance is less than 700")
} else if(balance < 1000){
    console.log("Your balance is less than 1000")
} else{
    console.log("Can't fetch your balance")
}


//User Logged In problem
const LoggedIn = true
const DebitCard = true
const LoggedInFromGoogle = false
const LoggedInFromPhone = true
if(LoggedIn && DebitCard){
    console.log("You can shop !!")
}
if(LoggedInFromGoogle || LoggedInFromPhone){
    console.log("Account signed in")
}