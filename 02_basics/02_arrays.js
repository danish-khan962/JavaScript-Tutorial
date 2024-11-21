const bleach_cast = ["Ichigo", "Rukia", "Toshiro" ,"Yoruichi"]
const jjba_cast = ["Jotaro", "Jolyne","Speedwagon"]
bleach_cast.push(jjba_cast) //Bad practice: This will push exact array 
console.log(bleach_cast)


const noragami_cast = ["Yato", "Yukine","Hiyori"]
const aot_cast = ["Eren", "Mikasa","Annie"]
const new_cast = noragami_cast.concat(aot_cast) //but this can only cancat only two array
console.log(new_cast)

//To concat more than two array , we use spreading operator (...)
const marvel_heroes = ["Ironman", "Thor", "Hulk"]
const dc_heroes = ["Batman", "Spiderman", "Superman"]
const marvel_villans = ["Venom", "Thanos"]
const combination = [...marvel_heroes, ...dc_heroes, ...marvel_villans]
console.log(combination)


//To convert all listed array into single array 
const arr_new = [1,2,3,[4,[5,7]],5,6,[7],0]
console.log(arr_new.flat(Infinity))

console.log(Array.isArray("Danish")) //to check if it is array or not
console.log(Array.from("Danish")) //to convert into array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //also converts set of elements into array