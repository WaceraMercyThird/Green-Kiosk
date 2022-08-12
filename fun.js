// DOM


// let back = document.body.style.backgroundColor = '#afa7a7';
// let text = document.body.style.color = 'white';
// const h1Element = document.getElementById("title").style.color = 'green';
// var bac = document.getElementById('Head').style.textTransform = "uppercase";
// var bac = document.getElementById('Head2').style.textTransform = "uppercase";



// let app = document.querySelector('#fruList');
// app.append('PineApple');

// console.log(fruList.textContent);

// let Veg = document.querySelector('#VegList');
// vegList.append('Potatoes');

// console.log(vegList.textContent);

// 1. Change document background color to 
// silver 

const back =document.getElementById("page")
back.style.background = "silver"

// 2. Change the font color for h1 title tag to 
// green

const heading =document.getElementById("title")
heading.style.color="green"

// 3. Change the font case for h3 title tags to 
// uppercase

const fruitsTitle = document.getElementById("fruits-title")
fruitsTitle.style.textTransform="uppercase"


const vegetablesTitle = document.getElementById("vegies-title")
vegetablesTitle.style.textTransform = "uppercase"

// 4. Add one more fruit to the fruits list

let addFruit = document.createElement("li")
const addedFruit = document.createTextNode("Kiwi")
addFruit.appendChild(addedFruit)
var fruitsList = document.getElementById("fruitsList")
fruitsList.append(addFruit) 


// 5. Add one more vegetable to the vegetables list 

let addVegetable = document.createElement("li")
const addedVegetable = document.createTextNode("Cabbage")
addVegetable.appendChild(addedVegetable)
const vegetableList = document.getElementById("vegetablesList")
vegetableList.append(addVegetable)







