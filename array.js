let item3 = "rice";
let items = ["milk", "milo", "rice", 1, 2, 4, true];

console.log(items[1])
console.log(items.length)

//foreach
let fruits = ["apple", "babana", "orange", "grape", "mango"]
let names = ["ridwan", "ashrof", "amaan", "faadhil", "abibat"]

names.forEach(function(names){
    console.log("i love " + names)
}) //named function

fruits.forEach(function(fruit){
    console.log("i love eating " + fruit)
})

//map methods
let scores = [90, 80, 70, 60, 50]
let newScores = scores.map(score =>{
    return score + 5
}) //arrow function
console.log(newScores)

let studentNames = ["ridwan", "ashrof", "amaan", "faadhil", "abibat"]
let nameTag = studentNames.map(function(name){
    return 'i love you, '+ name
})
console.log(nameTag)

let student = ["ridwan", "ashrof", "amaan", "faadhil", "abibat"]
let Tag = student.map(name => " love you, "+ name)
console.log(Tag)


//filter
let examScores = [200 , 250 , 300 , 150 , 180 , 280 , 100]
let passed = examScores.filter((score)=>{
    return score >= 200
})
console.log(passed)

//find
const studentsName = ["john", "john", "ada", "joe", "ridwan", "smith"];
const found = studentsName.find((mate)=>{
    return mate === "ridwan"
})
console.log(found)

//reduce
let cartPrices = [1500, 800, 2200, 450, 1000];
let total = cartPrices.reduce(function(accumulator, Price){
    return accumulator + Price;
},10000) //accumulator, current value, initial value
    console.log(total);

//arrow function version
let grandTotal = cartPrices.reduce((acc, price) => {
    return acc + price;
},0);
console.log(grandTotal);


//push, pop, shift, ununshift
let colors = ["red", "blue", "green"];
colors.push("yellow");

let lastColor = colors.pop();
console.log(colors);
console.log(lastColor);

let firstColor = colors.shift();
console.log(colors);
console.log(firstColor);

let newLength = colors.shift("purple");
console.log(colors);
console.log(newLength);





