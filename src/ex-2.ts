function sumEvenNumbers(numbers: number[]): number {
  let total = 0
  for(const num of numbers){
    if(num % 2 === 0) {
      total = total + num
    }
  }
  return total
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
