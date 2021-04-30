const phoneticNumbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
const numbers = process.argv.slice(2)

const parsedNumbers = numbers.map(num => {
  const items = num.split("")
  const parsedItems = items.map(item => phoneticNumbers[parseInt(item)])
  return parsedItems.join("")
})

console.log(parsedNumbers.join(","))
