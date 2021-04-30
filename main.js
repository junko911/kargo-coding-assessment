const numbers = process.argv.slice(2)

const convertNumbers = nums => {
  const phoneticNumbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]

  const parsedNumbers = nums.map(num => {
    const items = num.split("")
    const parsedItems = items.map(item => phoneticNumbers[parseInt(item)])
    return parsedItems.join("")
  })
  
  return parsedNumbers.join(",")
}

console.log(convertNumbers(numbers))
