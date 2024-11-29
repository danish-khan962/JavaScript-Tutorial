/*SET TIMEOUT*/
const sayDanish = () =>{
    console.log("Danish..")
}
//setTimeOut() only executes once
setTimeout(sayDanish, 3000) // execute sayDanish function after 3seconds (3000=3sec)
//+++++++++
//clearTimeout()//stops the execution of setTimeout()

/*SET INTERVAL*/
const sayInstall = () => {
    console.log("Installing.....")
}
//setInterval() executes function repeatdely in intervals of time provided
setInterval(sayInstall, 2000) // this will execute repeatedly after 2seconds
//clearInterval()//stops the execution of setInterval()
