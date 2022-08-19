const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

console.log(carMakers);

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(200); // Can not insert number into string array

carMakers.map((car: string): string => {
  return car;
});

// Help with "map"
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (number | Date | string)[] = [
  new Date(),
  "2030-10-10",
  2,
];
importantDates.push("2022-10-10");
importantDates.push(new Date());
importantDates.push(100); // Can not push a number into an arrray with only Date | string types

console.log(importantDates);
