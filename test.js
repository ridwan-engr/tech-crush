let str = "Coding is fun"
let word = str.slice(0,6)
console.log(word)

let fun = str.substring(7,9)
console.log(fun)
console.log(str.slice(10,13))

const colors = "red, green, blue, yellow"
const comma = colors.split (",")
console.log(comma)
const joined = comma.join("  ")
console.log(joined)

const url = "/api/v1/users";
const slash = url.split("/")
console.log(slash[2])
console.log(url.indexOf("v1"))
console.log(url[5])


const matricNumber = "TECHCRUSH-RIDWAN-2026"
const splitMatric = matricNumber.split("-")
console.log(splitMatric)
console.log(splitMatric[2])