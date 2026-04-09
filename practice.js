//Task: Use .forEach() to count items (no .length).
let items = ["battery", "solar", "inverter", "generator"]
let count = 0
items.forEach(function(){
    count++
})
console.log(count)

//Exercise 15 — Print index + value
let phases = ["R", "Y", "B"]
phases.forEach(function(phase, index){
    console.log(index + " - " + phase)
})

//Multiply and accumulate, multiply each by 2 and sum.
let readings = [5, 10, 15]
let multiply = readings.forEach(function(n){
    console.log(n*2)
})

let reading = [5, 10, 15]
let multipl = readings.map(n=>{
    return n*2   
})

let total = 0
readings.forEach(function(value){
    total += value * 2
})
console.log(total)

let readin = [5, 10, 15]
let multip = readings.forEach(n=>{
    console.log(n*2)  
})











let school = " my name is ridwan adeyemi and i am a boy ";
let trim = school.trim();
console.log(trim);
console.log(school.length);
let incluDe = school.includes("ridwan");
console.log(incluDe);
let Index = school.indexOf("boy");
console.log(Index);
let trimED = school.trimEnd();
let TrimFR = school.trimStart();
console.log(trimED);
console.log(TrimFR);
console.log(school.split(" "));
console.log(school.slice("-12"));
console.log(school.substring("12"));
console.log(school.toUpperCase());
console.log(school.startsWith("boy"));
console.log(school.endsWith("boy"))
    