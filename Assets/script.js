// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword function code below
function generatePassword() {
  alert("You will be presented with the following prompts to select criteria for generating a password.");

  var pwdLength = prompt("Choose a number between 8 and 128. This choice will be the length of the password.", );
  if (pwdLength != null) {
    if (pwdLength >= 8 && pwdLength <= 128) {

      alert("In the following prompts, at least one choice of lowercase, uppercase, numeric, and/or special characters must be confirmed.");

      var chooser = false;

      var uCase = confirm("Would you like your password to contain uppercase characters?");
      if (uCase === true) {
        chooser = true;
      }

      var lCase = confirm("Would you like your password to contain lowercase characters?");
      if (lCase === true) {
        chooser = true;
      }

      var numChoice = confirm("Would you like your password to contain numeric characters?");
      if (numChoice === true) {
        chooser = true;
      }

      var specChar = confirm("Would you like your password to contain special characters?");
      if (specChar === true) {
        chooser = true;
      }

      if (chooser === false) {
        alert("At least one choice of lowercase, uppercase, numeric, and/or special characters must be confirmed.");
      } else {
        alert("TIME TO GENERATE PASSWORD LOL");
      };

    } else {
      alert("Please enter a number between 8 and 128")
    };
  } else {
    alert("Entry is null. Please start over.");
  };

  return "Length: " + pwdLength + " /// Uppercase: " + uCase + " /// Lowercase: " + lCase + " /// Numerals: " + numChoice + " /// Special Characters: " + specChar;
}

