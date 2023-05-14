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
var passLength = null;

function begin(passLength) {
  passLength = prompt("How many characters long would you like your password to be?");
  if (passLength = null) {
    alert("Response cannot be blank. Please enter a value.");
  } else if (passLength < 8 && passLength > 128) {
    alert("Length must be between 8 and 128 characters.");
  } else if (includeLowercaseLetters = confirm("Do you want to include lowercase letters?")) {
    if (includeLowercaseLetters = true) {
    }

  } else console.log("I don't get it!!");
}

// Lowercase letters
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(lowerCase[Math.floor(Math.random() * lowerCase.length)]);

//Uppercase letters
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

console.log(upperCase[Math.floor(Math.random() * upperCase.length)]);

//Numbers
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers[Math.floor(Math.random() * numbers.length)]);

//Symbols
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", '-', "_", "+", "{", "[", "}", "]", "|", "=", "<", ",", ".", ">", "?"];

console.log(symbols[Math.floor(Math.random() * symbols.length)]);

//testing
begin();
