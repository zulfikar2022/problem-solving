const numbers = [4, 7, 2, 9, 4, 2, 5, 8, 7, 1, 3, 9];

const myFunction = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

const result = myFunction(numbers);
console.log(result);
