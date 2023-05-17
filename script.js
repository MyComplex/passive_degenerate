// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //my code
  // variables
  var passLength = prompt('How many characters long would you like your password to be?');
  //input validation
    if (passLength == null) {
      alert("Response cannot be blank. Please enter a whole number value.");
      return;
    } 
    
    passLength=parseInt(passLength);

    if (passLength < 8 || passLength > 128) {
      alert("Length must be between 8 and 128 characters.");
      return;
    }

    var includeLowercaseLetters = confirm('Do you want to include lowercase letters?');
  var includeUppercaseLetters = confirm('Do you want to include uppercase letters?');
  var includeNumbers = confirm('Do you want to include numbers?')
  var includeSymbols = confirm('Do you want to include symbols?');
  var selections = [];
  var gennedPW = "";

  //constants
  // Lowercase letters
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  //Uppercase letters
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  //Numbers
  const numbers = "0123456789".split("");
  //Symbols
  const symbols = "~`!@#$%^&*()-_+{[}]|=<,.>?".split("");

  if (includeLowercaseLetters) {
    for (var x = 0; x < lowerCase.length; x++) {
      selections.push(lowerCase[x])
    }
  }

  if (includeUppercaseLetters) {
    for (var x = 0; x < upperCase.length; x++) {
      selections.push(upperCase[x])
    }
  }

  if (includeNumbers) {
    for (var x = 0; x < numbers.length; x++) {
      selections.push(numbers[x])
    }
  }

  if (includeSymbols) {
    for (var x = 0; x < symbols.length; x++) {
      selections.push(symbols[x])
    }
  }

  for (var x = 0; x < passLength; x++) {
    gennedPW += selections[Math.floor(Math.random() * selections.length)];
  }

  return gennedPW;

  //checks
  console.log(passLength);
  console.log(includeLowercaseLetters);
  console.log(includeUppercaseLetters);
  console.log(includeNumbers);
  console.log(includeSymbols);
  console.log(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
  console.log(upperCase[Math.floor(Math.random() * upperCase.length)]);
  console.log(numbers[Math.floor(Math.random() * numbers.length)]);
  console.log(symbols[Math.floor(Math.random() * symbols.length)]);
  console.log(selections);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// may not need
// function begin(passLength) {
//   passLength = prompt("How many characters long would you like your password to be?");
  
//   if (passLength == null) {
//       alert("Response cannot be blank. Please enter a value.");
//   } 
  
//   if (passLength < 8 && passLength > 128) {
//     alert("Length must be between 8 and 128 characters.");
//   }
  
  // else if (includeLowercaseLetters = confirm("Do you want to include lowercase letters?")) {
  //     if (includeLowercaseLetters = true) {
  //     alert("Lowercase letters included.");
  //   }
  // } else console.log("I don't get it!!");
// }

//testing
// begin();
