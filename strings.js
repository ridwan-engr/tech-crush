//length of a string
let stringText = "This is a class on string method"
console.log(stringText.length)

let capitalLetter = stringText.toUpperCase()
let smallLetter = stringText.toLowerCase()
console.log(capitalLetter)
console.log(smallLetter)


//trim , trimStart and trimEnd
let str = "   Hello, World!   "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd() //camel casing  
let end_trimmed_str = str.trimEnd() // snake casing
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)
console.log(end_trimmed_str)


let signupName = " Ridwan"
let signinName = "Ridwan"
if (signupName.trim() === signinName){
    console.log("welcome back, Ridwan")
} else {
    console.log("invalid login details")
}

//indexOF and includes
let user_email = "ridwantayo.adeyemi@gmail.com"
let email_index = user_email.indexOf("@")
console.log(email_index)

let email_contains_at= user_email.includes("@")
console.log(email_contains_at)

//startswith and endwith

let userName = "faadhil ridwan"
let starts = userName.startsWith("ridwan")
console.log(starts)

let ends = userName.endsWith("ridwan")
console.log(ends)

// replace and replaceALl
let text = "Ridwan is a techie. Ridwan love coding and Ridwan loves to teach coding";
let replaceText = text.replace("Ridwan", "He");
let replaceAllText = text.replaceAll("Ridwan", "He");
console.log(replaceText);
console.log(replaceAllText);


//split
const sentence = "LANGUAGES: JavaScript, Python, Java, C++"
let splitSentence = sentence.split("  ") // return datatype : array
console.log(splitSentence)
let example = "she is a girl , she is a teacher, she is eating"
console.log(example.split("  "))


let fullName = "Adeyemi Ridwan";
let sliceFullName = fullName.slice (6);
let substringFullName = fullName.substring (6);
console.log(sliceFullName);
console.log(substringFullName);

//replace and replaceAll
let message = "I love Lagos. Lagos is amazing. Lagos never sleeps";
let replaceMessage = message.replace("Lagos", "Abuja");
let replaceAllMessage = message.replaceAll("Lagos", "Abuja");
console.log(replaceMessage);
console.log(replaceAllMessage);




