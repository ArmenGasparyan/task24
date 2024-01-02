// O(log(num))
const isFibonacci = (num) => {
    let a = 0;
    let b = 1;
    while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b === num;
  }
  
// O(n * log(num))
const generateNonFibonacci = (n) => {
    let count = 0;
    let num = 0;
    while (count < n) {
      num++;
      if (!isFibonacci(num)) {
        console.log(num);
        count++;
      }
    }
}

const param = process.argv.slice(2);

generateNonFibonacci(Number(param));
  