const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(n => n * 2)
console.log(doubled)


const scores = [250, 300, 350, 200, 400, 180, 160]
const result = scores.filter(score => score >= 300)
console.log(result)

const sum = [2000, 3000, 400, 100, 600]
const total = sum.reduce((acc, value) => acc + value, 0)
console.log(total)


const colors = ["blue", "yellow", "red"]
colors.pop()
console.log(colors)
colors.push("green")
console.log(colors)