const arr = [1, 2, [3, 4], 5];

function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  });
  return sum;
}

module.exports = sumItems;

console.log(sumItems(arr));



module.exports = sumItems;