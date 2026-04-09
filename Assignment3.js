//use forEach to print each number multiplied by 2 (Q1)
const numbers = [2, 4, 6, 8, 10];
numbers.forEach(n => {
    console.log(n * 2)
})

//use forEach to print a message in this format: (Q2)
const names = ["Esther", "John", "Ada", "Mike"]; 
names.forEach(function(name)
{
    console.log("Hello " + name)
})

// use map to create a new arraywhere each number is squared (3)

const figures =[1, 2, 3, 4, 5]
const figureNew =figures.map( n =>{
    return n**2
})
console.log(figureNew)

//Use map() to create a new array where each price has a 10% discount applied.(4)
const prices = [100, 200, 300];
const discount = prices.map(n => {
    return n - ((10/100) * n)
})
console.log(discount)

//Use filter() to create a new array that contains only numbers greater than 10.(5)
const numerics = [12, 8, 20, 3];
const numerical = numerics.filter((value)=>{
    return value>10
})
console.log(numerical)

//Use filter() to return only ages that are 18 and above (6)
const ages = [15, 22, 17, 30, 18];
const adultAge = ages.filter(adult=>{
    return adult >= 18
})
console.log(adultAge)

 //First, use filter() to get numbers greater than 20,
 // Then, use map() to double the remaining numbers and  
 // Return the final result as a new array (7)
const digits = [10, 15, 20, 25, 30];
const filterDigits = digits.filter(no=>{
    return no > 20
})
console.log(filterDigits)
const filterDigitsMap = filterDigits.map( newarray=>{
    return newarray * 2
})
console.log(filterDigitsMap)





