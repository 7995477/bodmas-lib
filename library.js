function sum(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array of numbers');
    }
  
    let result = 0;
    for (const number of numbers) {
      if (typeof number !== 'number') {
        throw new Error('All elements in the array must be numbers');
      }
      result += number;
    }
  
    return result;
  }
  
  function product(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array of numbers');
    }
  
    let result = 1;
    for (const number of numbers) {
      if (typeof number !== 'number') {
        throw new Error('All elements in the array must be numbers');
      }
      result *= number;
    }
  
    return result;
  }
  
  module.exports = {
    sum,
    product,
  };
  