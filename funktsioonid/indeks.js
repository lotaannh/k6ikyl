//callbacks
sum(displayConsole, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}

//foreach, siis kui muudad olemasolevat arrayd
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
  console.log(element);
}

//map, siis kui teed uue array
const dates = ["2024-8-10", "2025-18-11", "2026-28-12"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

//filter
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);

function getShortWords(element) {
  return element.length <= 6;
}

function getLongWords(element) {
  return element.length > 6;
}

//reduce, vähendab array elemendid ühele väärtusele
const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}

//function expression
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

console.log(squares);

/*arrow function, hea funktsioonideks, mida kasutad ühe korra
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);*/

//ülesanne
function analyzeMenu(...toidud) {
  return toidud;
}

const toit1 = {
  name: "Suupistevaagen",
  price: 16,
  category: "starter",
};

const toit2 = {
  name: "Juustuvaagen",
  price: 16,
  category: "starter",
};

const toit3 = {
  name: "Pepperoni salat",
  price: 11.5,
  category: "main",
};

const toit4 = {
  name: "Mehhiko kana galett",
  price: 12,
  category: "main",
};

const toit5 = {
  name: "New Yorgi juustukook",
  price: 7,
  category: "dessert",
};

const toit6 = {
  name: "Rummikaramelli crepp",
  price: 10.5,
  category: "dessert",
};

const toidud = analyzeMenu(toit1, toit2, toit3, toit4, toit5, toit6);

console.log(toidud);

const odavadToidud = toidud.filter(getOdavadToidud);

console.log(odavadToidud);

function getOdavadToidud(element) {
  return element.price <= 11;
}

const odavateToitudeNimed = odavadToidud.map((toit) => toit.name);

console.log(odavateToitudeNimed);

function getOdavadToidud(element) {
  return element.price <= 11;
}
