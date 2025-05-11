const cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Malibu", year: 2018 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "BMW", model: "3 Series", year: 2020 },
  { make: "Audi", model: "A4", year: 2021 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2019 },
  { make: "Hyundai", model: "Elantra", year: 2022 },
  { make: "Nissan", model: "Altima", year: 2017 },
];

const sortingCars = () => {
  for (let i = 0; i < cars.length; i++) {
    for (let j = 0; j < cars.length - i - 1; j++) {
      if (cars[j].year > cars[j + 1].year) {
        let temp = cars[j];
        cars[j] = cars[j + 1];
        cars[j + 1] = temp;
      }
    }
  }
};

sortingCars();
console.log(cars);
