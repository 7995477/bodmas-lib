const { sum, product } = require('./library');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter numbers separated by commas: ', (input) => {
  const numbers = input.split(',').map(Number);

  rl.question('Choose an operation (sum or product): ', (operation) => {
    if (operation === 'sum') {
      const result = sum(numbers);
      console.log(`Sum: ${result}`);
    } else if (operation === 'product') {
      const result = product(numbers);
      console.log(`Product: ${result}`);
    } else {
      console.log('Invalid operation. Please choose either "sum" or "product".');
    }

    rl.close();
  });
});
