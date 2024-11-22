//Important +++++++++++++++++
/*REDUCE*/
console.log('Reduce Function...')
const newArr = [1,2,3]
let result = newArr.reduce(function(accumulator, CurrentValue){
    console.log(`Accumulator: ${accumulator} and Current Value: ${CurrentValue}`)
    return accumulator + CurrentValue
}, 2) //here, we initializing accumulator with value 2
console.log(result)

console.log('')
//SHOPPING CART EXAMPLE
console.log('Your shopping cart subtotal...')
const ShoppingCart = [
    {
        Item: 'Red Dead Redemption 2',
        price: 4999
    },
    {
        Item: 'Grand Theft Auto V',
        price: 1500
    },
    {
        Item: 'Black Myth Wukong',
        price: 3999
    },
    {
        Item: 'Assesto Corsa',
        price: 2999
    },
    {
        Item: 'Fall Guys',
        price: 800
    }
]
const SubTotal = ShoppingCart.reduce( (accumulator, item) => {
    return accumulator + item.price
}, 0)
console.log(`Your Subtotal amount of cart is: ${SubTotal}`)