// //array of object
// let fruits = [ // key-value pair, example: name-Apple
//     {name:"Apple",colour:"Red",price:5,instock:"false"},//one object
//     {name: "Orange", color: "orange", price: 6, inStock: false},
//     {name: "Orange", color: "orange", brand: "Sunkist", price: 4.5, inStock: true},
//     {name: "Pear", color: "green", price: 3, inStock: true},
//     {brand: "Fuji", color: "red", price: 2 }
// ]

// //object
// let oneFruit = {name: "Orange", color: "orange", price: 6, inStock: false}
// console.log(oneFruit.name) // will get Orange

let fruits= [ // key-value pairs
    {name: "Apple", color: "red", price: 5, inStock: false, },
    {name: "Orange", color: "orange", price: 6, inStock: false},
  
    {name: "Orange", color: "orange", price: 4.5, inStock: true},
  
    {name: "Pear", color: "green", price: 3.15, inStock: true},
  
    { name: "Apple", color: "red", price: 2, inStock: true }
  ]
//   console.log(fruits[0])

for(let i = 0; i< fruits.length; i++){

let allName = fruits[i].name.toUpperCase()
let firstPrice = parseInt(fruits[i].price)//Data formating

if(fruits[i].price-firstPrice == 0){
    fruits[i].price = fruits[i].price + ".00"
}
else{
    fruits[i].price = fruits[i].price + "0"
}

let text = `The fruits name is ${allName}. The colour is ${fruits[i].color}. The price is RM${fruits[i].price}.`

if(fruits[i].inStock == true){
    text += `The stock are available.`
}
else{
    text += `The stock had sold out.`
}

  console.log(text)
}