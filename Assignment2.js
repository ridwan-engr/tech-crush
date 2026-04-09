//Question 1
const str = "Nigeria is awesome";
let extractSubstring = str.substring(0,7);
let extractSlice = str.slice(11,18);
let extractSlice1 = str.slice(8,11);
console.log(extractSubstring);
console.log(extractSlice);
console.log(extractSlice1);

//Question 2
const names = "John, Jane, Doe";
let splitNames = names.split(",");
console.log(splitNames);
const joinNames = splitNames.join("  ");
console.log(joinNames);

const path ="/user/home/docs";
let splitPath = path.split("/");
console.log(splitPath);
console.log(splitPath[2]);

//Question 3
const email = "user@example.com";
let userName = email.slice("0", "4");
let checkDomain = email.endsWith(".com");
let replaceAT = email.replace("@", "AT");
console.log(userName);
console.log(checkDomain);
console.log(replaceAT);