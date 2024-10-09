let x = prompt("Mis on x?");
let y = prompt("Mis on y?");
let a = Number(x) + Number(y);
let s = Number(x) - Number(y);
let 
document.write(sum);

/*let numberMin = 1;
let maxAttempts = 5;
let numberMax = 100;
let randomNumber =
  Math.floor(Math.random() * (numberMax - numberMin)) + numberMin;

let attempts = 0;
let guess;
let running = true;

function guessNumber() {
  while (running) {
    let userGuess = prompt("Arva ära number 1-100");
    console.log(randomNumber);
    console.log(userGuess);

    if (isNaN(userGuess)) {
      window.alert("Palun sisesta number mitte sõna");
    } else if (userGuess < numberMin || userGuess > numberMax) {
      window.alert("Palun sisesta 1-100 number");
    } else {
      attempts++;
    }
    if (attempts >= maxAttempts) {
      window.alert(
        `Oled teinud ${maxAttempts} katset. Õige number oli ${randomNumber}.`
      );
    } else if (randomNumber > userGuess) {
      window.alert("Liiga väike number");
    } else if (randomNumber < userGuess) {
      window.alert("Liiga suur number");
    } else if ((randomNumber = userGuess)) {
      window.alert("Õige!");
      running = false;

      running = false;
    }
  }
}

guessNumber();*/
