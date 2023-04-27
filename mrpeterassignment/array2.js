//array use cases
//A grocery shop
//1. Declare Items in the Shop
//2. Add Items to the shop
//3. Remove Items in the Shop
//4. Add an Item to the beginning of items in the shop
//5. Add an Item in the middle of the items

// declare an array
let shopItems = ['rice', 'beans', 'bread']
console.log(shopItems)

//add biscuit to the items listed above
shopItems.push('biscuit')
console.log(shopItems)

//Remove items in the shop 
shopItems.pop()
shopItems.shift()
console.log(shopItems)

shopItems.unshift('Fuel')
console.log(shopItems)

//add inbetween - splice
shopItems.splice(2, 0, "Goatmeat")
console.log(shopItems)

