// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
// Código de Jesus.
// Setting variables.
// The passLength variable stores the input from the prompt, parseInt converts the input to an integer, or NaN if letters are input.
  var passLength = parseInt(prompt('How many characters would you like the password to contain?'));

// Validate value of the passLength variable.
  if (isNaN(passLength)) {
    alert("Input must be an integer.");
    return "Please try again.";
  }

  if (passLength < 8 || passLength > 128) {
    alert("Length must be between 8 and 128 characters.");
    return "Please try again.";
  }

// Choose to include the character options.
  var includeLowercaseLetters = confirm("Would you like to include lowercase letters? OK (Y), Cancel (N)");
  var includeUppercaseLetters = confirm("Would you like to include uppercase letters? OK (Y), Cancel (N)");
  var includeNumbers = confirm("Would you like to include numbers? OK (Y), Cancel (N)");
  var includeSymbols = confirm("Would you like to include symbols? OK (Y), Cancel (N)");

// Confirm 'OK' for at least one of the selections.
if (includeLowercaseLetters == false && includeUppercaseLetters == false && includeNumbers == false && includeSymbols ==false) {
  alert("You must include at least one of the character options.");
  return "Please try again.";
}

// Initialize empty variables.
  var selections = [];
  var gennedPW = "";

// Defining character option constants, and converting the string value to an array.
// Lowercase letters
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  
// Uppercase letters
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
// Numbers
  const numbers = "0123456789".split("");
  
// Symbols
  const symbols = "~`!@#$%^&*()-_+{[}]|=<,.>?".split("");

// Avarngers assemble!
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

// Output result.
return gennedPW;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
