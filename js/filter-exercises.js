// Exercise #1
// 1. Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// 2. Use the filter method to include all numbers less than 10
// 3. Print the result to the console
// expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9]
const filteredNumbers = numbers.filter((number) => number < 10);

// console.log({ filteredNumbers });
// Exercise #2
// 1. Create an array of objects of people
const people = [
  { name: 'John', age: 25 },
  { name: 'Bill', age: 30 },
  { name: 'Dave', age: 22 },
  { name: 'Jill', age: 35 },
  { name: 'Katie', age: 28 },
  { name: 'Martha', age: 27 },
];
// 2. Use the filter method to include all objects that have a property of 'age' less than 30
// 3. Print the result to the console
// expected result: [{ name: 'John', age: 25 }, { name: 'Dave', age: 22 }, { name: 'Katie', age: 28 }, { name: 'Martha', age: 27 }]
const filteredPeople = numbers.filter((person) => person.age < 30);

// console.log({filteredPeople})
// Exercise #3
// 1. Create an array of objects containing Ford and Chevrolet cars
const cars = [
  { make: 'Ford', model: 'Fusion', year: 2019 },
  { make: 'Chevrolet', model: 'Malibu', year: 2018 },
  { make: 'Ford', model: 'Focus', year: 2017 },
  { make: 'Chevrolet', model: 'Cruze', year: 2016 },
  { make: 'Ford', model: 'Taurus', year: 2015 },
  { make: 'Chevrolet', model: 'Impala', year: 2014 },
];
// 2. Use the filter method to include all objects that have a property of 'make' equal to 'Ford'
// 3. Print the result to the console
// expected result: [{ make: 'Ford', model: 'Fusion', year: 2019 }, { make: 'Ford', model: 'Focus', year: 2017 }, { make: 'Ford', model: 'Taurus', year: 2015 }]//const filteredCars = cars.filter((car) => car.make === 'Ford');

// console.log({const filteredCars})
// Exercise #4
// 1. Fetch a JSON array of objects containing the SU men's basketball schedule (please download the entire schedule.json file from Blackboard/Content below tonight's agenda)

const schedule = [
  {
    date: '2023-10-27',
    opponent: 'Deamon',
    location: 'JMA Wireless Dome',
    exhibition: true,
  },
  {
    date: '2023-11-01',
    opponent: 'College of St. Rose',
    location: 'JMA Wireless Dome',
    exhibition: true,
  },
  // etc.
];

// 2. Use the filter method to only include the games in February
// Big question: How do you evaluate the date property in the filter method to only include games in February? Convert the date string to a Date object and evaluate the month property.
// 3. Print the result to the console

const februaryGames = schedule.filter((game) => {
  // write your code here
  const dateObj = new Date(game.date); // convert the date string to a Date object
  return dateObj.getMonth() === 1; // February is the second month, so the index is 1, January is 0, March is 2, April is 3, etc.
});
// console.log(februaryGames);

// example 4
const filteredGames = (games, monthIndex) => {
  const filteredGames = games.filter((game) => {
    const dateObject = new Date(game.date);

    return dateObject.getMonth() === monthIndex;
  });

  console.log({ filteredGames });
};
// import schedule.json,
// then convert it to json
// then do something

fetch('js/schedule.json')
  .then((response) => response.json())
  .then((data) => {
    // console.log({data})
    filteredGames(data, 1);
  })
  .catch(); // promise
