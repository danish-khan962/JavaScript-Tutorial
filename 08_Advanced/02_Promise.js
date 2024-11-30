//Basic promise syntax
const promiseOne = new Promise( (resolve,reject) => {
    //Do async task
    //Database calls, cryptography, network calls etc...
    setTimeout( () => {
        console.log('Entered into Promise one()....')
        resolve();
    }, 2000) //executes after 2 seconds
})
promiseOne.then( ()=> { //.then connects to resolve parameter in promise
    console.log("Promise Resolved / Consumed..")
})


//Other way to do the same thing
new Promise( (resolve, reject) =>{
    setTimeout( ()=>{
        console.log("Async task 2 completed")
        resolve(); //this resolve() call is necessary to execute promise
    },3000) //executes after 3 sec
}).then( ()=>{
    console.log("Async task 2 resolved / consumed..")
})


//Getting data into resolve()
const promiseThree = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        resolve({'name':'Danish', 'email': 'danish@gmail.com', 'age':20})
    },4000) //executes after 4 seconds
})
promiseThree.then( (user)=>{ //then is linked with resolve , hence we can call it by whatever name
    console.log(user);
})


//ERROR HANDLING (catch adn reject)
const promiseFour = new Promise((resolve, reject) => {
    setTimeout( () =>{
        let error = true;
    if(!error){
        resolve({'username':'Danish', 'password': '123@pass'})
    }else{
        console.log("Error Encountered !!")
    }
    }, 5000)
}) //executes after 5 seconds
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then( (username)=>{
    console.log(username)
}).catch((error)=>{          //.catch links with reject 
    console.log(error)
}).finally( ()=>{           //finally will execute in whatever case
    console.log("The promise is either resolved or rejected | FINALLY")
})



// async and await
//this method is like .then() and .catch() and it waits for the work to happen, otherwise throws an error
const promiseFive = new Promise( (resolve, reject)=> {
     setTimeout( ()=>{
        let error = true;
        if(!error){
            resolve({"series":"bleach", "imbd": 9.7, "author": "tite kubo"})
        }else{
            reject("Error encountered in promiseFive()...") //reject 
        }
     }, 6000)
})
// async function ConsumePromiseFive(){
//     let response = await promiseFive
//     console.log(response)
// }
// ConsumePromiseFive()
//+++++++++++try and catch block++++++++++
async function ConsumePromiseFive(){
    try{
        let response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
ConsumePromiseFive()



//getAllUsers (jsonplaceholder API)
async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json() 
    //response coming from API is in string format, hence we converted into JSON format
    console.log(data)
}
getAllUsers()


//other simple way to this
// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (response) =>{
//     return response.json()
// })
// .then( (data) =>{
//     console.log(data)
// })
// .catch( (error) => console.log("Error"))
