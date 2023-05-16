// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//my code
var passLength = prompt('How many characters long would you like your password to be?');
var includeLowercaseLetters = confirm('Do you want to include lowercase letters?');
var includeUppercaseLetters = confirm('Do you want to include uppercase letters?');
var includeNumbers = confirm('Do you want to include numbers?')
var includeSymbols = confirm('Do you want to include symbols?');


// function begin(passLength) {
//   passLength = prompt("How many characters long would you like your password to be?");
//   if (passLength = null) {
//     alert("Response cannot be blank. Please enter a value.");
//   } else if (passLength < 8 && passLength > 128) {
//     alert("Length must be between 8 and 128 characters.");
//   } else if (includeLowercaseLetters = confirm("Do you want to include lowercase letters?")) {
//     if (includeLowercaseLetters = true) {
//       alert("Lowercase letters included.");
//     }
//   } else console.log("I don't get it!!");
// }

// vars

console.log(passLength);
console.log(includeLowercaseLetters);
console.log(includeUppercaseLetters);
console.log(includeNumbers);
console.log(includeSymbols);

// Lowercase letters
const lowerCase = ["abcdefghijklmnopqrstuvwxyz"];

console.log(lowerCase[Math.floor(Math.random() * lowerCase.length)]);

//Uppercase letters
const upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

console.log(upperCase[Math.floor(Math.random() * upperCase.length)]);

//Numbers
const numbers = ["0123456789"];

console.log(numbers[Math.floor(Math.random() * numbers.length)]);

//Symbols
const symbols = ["~`!@#$%^&*()-_+{[}]|=<,.>?"];

console.log(symbols[Math.floor(Math.random() * symbols.length)]);

//testing
// begin();
