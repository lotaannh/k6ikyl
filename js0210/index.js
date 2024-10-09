/*let fruits = ["apple", "orange", "banana", "coconut"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);*/

/*for (let fruit of fruits) {
 console.log(fruit);
}*/

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);

function openFridge(...foods) {
  console.log(...foods);
}
function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "sushi";
const food3 = "pasta";
const food4 = "salad";
const food5 = "soup";

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

const person1 = {
  firstName: "Lota",
  lastName: "Haga",
  age: 22,
  isEmployed: true,
  sayHello: function () {
    console.log(`Tere! Olen ${this.firstName}`);
  },
  sayAge: function () {
    console.log(`Ma olen ${this.age}-aastane`);
  },
};

person1.sayHello();
person1.sayAge();
