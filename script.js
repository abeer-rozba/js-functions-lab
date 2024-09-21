// Exercise 1:
const maxOfTwoNumbers = (x, y) => {
  if (x>=y) {
    return x;
  }
  else {
    return y;
  }
}

console.log(maxOfTwoNumbers(5,7));
console.log(maxOfTwoNumbers(8,3));
console.log(maxOfTwoNumbers(4,4));

// Exercise 2:
const isAdult = (age) => {
  if (age >= 18) {
    console.log("Adult");
  }
  else console.log("Minor");
}

isAdult(16);
isAdult(25);

// Exercise 3:
const isCharAVowel = (x) => {
  if (x.toLowerCase() === "a" || x.toLowerCase() === "e" || x.toLowerCase() === "i" || x.toLowerCase() === "o" 
  || x.toLowerCase() === "u") {
    return true;
  }
  else { return false; }
}

console.log(isCharAVowel("O"));
console.log(isCharAVowel("a"));
console.log(isCharAVowel("p"));

// Exercise 4:
const generateEmail = (username, domain) => {
  return `${username}@${domain}`;
}

console.log(generateEmail("abeerrozba","gmail.com"));

// Exercise 5:
const greetUser = (username, timeOfTheDay) => {
  return `Good ${timeOfTheDay.toLowerCase()}, ${username}!`;
}

console.log(greetUser("Abeer","Night"));

// Exercise 6:
const maxOfThree = (x, y, z) => {
  if (x>=y && x>=z) {
    return x;
  }
  else if (y>=x && y>=z) {
    return y;
  }
  else { return z; }
}

console.log(maxOfThree(1,2,3));
console.log(maxOfThree(1,2,0));
console.log(maxOfThree(4,3,3));
console.log(maxOfThree(1,1,0));

// Exercise 7:
const calculateTip = (amount, percentage) => {
  return amount*percentage/100;
}

console.log(calculateTip(50,20));

// Exercise 8:
const convertTemperature = (temperature, scale) => {
  if (scale.toUpperCase() === "C") {
    return `${((9/5)*temperature) + 32} (Fahrenheit)`;
  }
  else if (scale.toUpperCase() === "F") {
    return `${(temperature - 32) * (5/9)} (Celsius)`;
  }
  else {return "Sorry! This function converts only between Fahrenheit and Celsius scales."}
}

console.log(convertTemperature(32,"c"));
console.log(convertTemperature(32, "F"));
console.log(convertTemperature(300, "K"));

// Exercise 9:
const basicCalculator = (fOperand, sOperand, operation) => {
  if (operation.toLowerCase() === "add") {
    return fOperand+sOperand;
  }
  if (operation.toLowerCase() === "subtract") {
    return fOperand-sOperand;
  }
  if (operation.toLowerCase() === "multiply") {
    return fOperand*sOperand;
  }
  if (operation.toLowerCase() === "divide") {
    return fOperand/sOperand;
  }
}

console.log(basicCalculator(10,5,"ADD"));
console.log(basicCalculator(10,5,"Subtract"));
console.log(basicCalculator(10,5,"multiply"));
console.log(basicCalculator(10,5,"divide"));

// Exercise 10:
const calculateGrade = (score) => {
  if (score>=90) {
    return `The corresponding grade to your score of ${score} is A`;
  }
  if (score>=80 && score<=89) {
    return `The corresponding grade to your score of ${score} is B`;
  }
  if (score>=70 && score<=79) {
    return `The corresponding grade to your score of ${score} is C`;
  }
  if (score>=60 && score<=69) {
    return `The corresponding grade to your score of ${score} is D`;
  }
  if (score<60) {
    return `The corresponding grade to your score of ${score} is F`;}
}

console.log(calculateGrade(95));
console.log(calculateGrade(87));
console.log(calculateGrade(74));
console.log(calculateGrade(69));
console.log(calculateGrade(50));

// Exercise 11:
const createUsername = (fName, lName) => {
  firstPart = fName.slice(0,3);
  secondPart = lName.slice(0,3);
  charNum = fName.length+lName.length;
  return firstPart+secondPart+charNum;
}

console.log(createUsername("Samantha","Green"));

// Exercise 12:
const numArgs = (...arguments) => {
  return arguments.length;
}

console.log(numArgs(1,2,3,4));