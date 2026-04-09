
// without parameter
function greet() {
    console.log("welcome back, Ridwan!")
}

greet()

//with parameter
function farewell(name) {
    console.log("see you again, " + name);
}

farewell("Ridwan")

//let x = 5
//let y = 10
//console.log(x+y)
function add () {
    let a = 5
    let b = 10
    return a + b
}
console.log(add())

//function addition(a, b) {
 //   return a + b
//console.log(addition(2, 3))

function isAdult(age) {
    return age >= 18;   // returns true or false
}
console.log(isAdult(20));   // true
console.log(isAdult(15));   // false
