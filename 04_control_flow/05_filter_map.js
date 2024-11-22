//The problem in forEach() is that it don't return any value, hence to solve this we use filter()
const arr = [1,2,3,4,5]
let values = arr.forEach((num) => {
    console.log(num)
})
console.log(values) // this will be give undefined because no value is returning 


//filter() return value
console.log('map() function...')
const arr2 = [6,7,8,9,10]
let val = arr2.filter((num) => {
    return num > 7
})
console.log(val)


//EXCERCISE
//Print all the anime details where genre is shounen and rating is more than or equal to 8.5
//here's the sample database
const animeDetails = [
    {name: "Naruto" , "release year": 2002, rating: 8.2, genre: "Shounen"},
    {name: "My Hero Academia" , "release year": 2016, rating: 8.5, genre: "Shounen"},
    {name: "Attack on Titan" , "release year": 2013, rating: 9.1, genre: "Shounen"},
    {name: "Death Note" , "release year": 2006, rating: 9.0, genre: "Psychological"},
    {name: "One Punch Man" , "release year": 2015, rating: 8.8, genre: "Action"},
    {name: "Spirited Away" , "release year": 2001, rating: 8.9, genre: "Fantasy"},
    {name: "Your Lie in April" , "release year": 2014, rating: 8.6, genre: "Romance"},
    {name: "Jujutsu Kaisen" , "release year": 2020, rating: 8.7, genre: "Supernatural"},
    {name: "Violet Evergarden" , "release year": 2018, rating: 8.9, genre: "Drama"}
]
let animeData = animeDetails.filter( (detail) => {
    return detail.genre === 'Shounen' && detail.rating >= 8.5
})
console.log(animeData) // expected output : Attack on titan and My hero academia

console.log('')

//map()
console.log('map() function...')
const arr3 = [1,2,3,4,5,6,7,8,9,10]
let myNumber = arr3.map( (num) => {
    return num + 10
})
console.log(myNumber)

console.log("")
console.log("Chaining....")
//Concept of chaining 
/*when one after o=another function is used , we call it as chain, for e.g.*/
const arr4 = [1,2,3,4,5,6,7,8,9,10]
let FinalReturningValue = arr4.map( (num) => {
    return num * 10 // values becomes 10,20,30,40,50,60,70,80,90,100
}).map( (num) => {
    return num + 1 // here values becomes 11,21,31,41,51,61,71,81,91,101
}).filter( (num) => {
    return (num >= 40) // here values becomes 41,51,61,71,81,91,101
})
console.log(FinalReturningValue)