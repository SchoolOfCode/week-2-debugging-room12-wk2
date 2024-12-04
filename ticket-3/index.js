function countNumberOfNinesInNumber(number) {
  let count = 0;

  const digits = String(number).split('').map(Number);
  
console.log(digits);

console.log(digits.length);

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    if ( 9 === digit) { 
      count++;

      console.log(`in the if count is ${count}`);
    }
    console.log(`after the if count is ${count}`);
  }
      console.log(`before the for return statment count is ${count}`);
  return count;
}
