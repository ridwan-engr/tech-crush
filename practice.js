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


let colors = ["red", "blue", "green", "alabi", "adjia", "akanbi", "Adigun"];
//colors.push("yellow");
//console.log(colors);

//let lastColor = colors.pop();
//console.log(lastColor);

//let firstColor = colors.shift();
//console.log(firstColor);

let newLength = colors.shift("green");
console.log(newLength);

let obj = {
    name : "Esther",
    age : 25,
    profession : "Developer",
}
console.log(obj.name)
console.log(obj["age"])

let student = {
    name: "Ngozi Adeyemi",
    age: 21,
    department: "Computer Science",
    isEnrolled: true
};
console.log(student.name)
console.log(student["name"])


let employee = {
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};

let {name  , salary } = employee
console.log(name)
console.log(salary)

let courses = {
    CSC401 : "Data Structures",
    CSC402 : "Algorithms",
    CSC403 : "Operating Systems",
    CSC404 : "Database Systems"
}

let {CSC401 : CSC400} = courses
console.log(CSC400)
let {CSC402 : CSC406} = courses
console.log(CSC406)

let person = {
    name: "Amina",
    opay : true,
}
console.log(person)
let {opay: palmpay , name : myName} = person
console.log(palmpay)
console.log(myName)

 
let employee1 = {
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};
    let updatedEmployee = {
       ...employee,
    age:"25", gender: "male" 
    };

    console.log(updatedEmployee)

    const user = {
    name : "Esther",
    password : "12345",
    isFemale : true,
    city : "Lagos",
    age : 25
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

const { identity, ...rest } = {
    name: "Emeka",
    age: 25,
    city: "Lagos"
};

console.log(identity); // "Emeka"
console.log(rest);
// { age: 25, city: "Lagos" }


