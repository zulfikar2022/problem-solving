const makeSquare = (number) => {
  return number * number;
};

const makeDouble = (number) => {
  return number * 2;
};

const addFive = (number) => {
  return number + 5;
};

const allFunctionalities = (number) => {
  return addFive(makeDouble(makeSquare(number)));
};
