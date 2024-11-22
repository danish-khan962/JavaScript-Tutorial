//Iterations simply means loops
//for loop
for(let i=1 ; i<=10; i++){
    console.log(i)
}

//Understanding Nested Loops
for(let i=1; i<=10; i++){
    console.log("Table for : ",i)
    for(let j=1; j<=10;j++){
        console.log(`${i} X ${j} = `,(i*j))
    }
}

//Iterating through arrays
const arr = ["Ichigo", "Asta", "Yuji", "Thorfinn"]
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}


//break : this keywords stops the flow of execution
for(let i=1; i<=15; i++){
    if(i === 6){
        console.log("Detected value 6")
        break
    }
    console.log(`Value of i is ${i}`)
}


//continue: this keyword skips the iteration
for(let i=1; i<=15; i++){
    if(i === 6){
        console.log("Detected value 6")
        continue
    }
    console.log(`Value of i is ${i}`)
}

//While loop
console.log('') //new-line
console.log('While loop...')
let i = 0;
while(i<=10){
    console.log(`Value of i is ${i}`)
    i = i + 2
}

const ARR = [2,3,4,5]
let index = 0
while(index < ARR.length){
    console.log(ARR[index])
    index++;
}


//do-while loops
let score = 11
do{
    console.log(`value printed for score is ${score}`)
    score++
}while(score <= 10)