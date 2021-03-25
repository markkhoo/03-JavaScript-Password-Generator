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

// Variables for characters
var uChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lChars = "abcdefghijklmnopqrstuvwxyz";
var nChars = "0123456789";
var sChars = "~!@#$%^&*?";

// generatePassword function code below
function generatePassword() {
  var actualPassword = "";
  
  alert("You will be presented with the following prompts to select criteria for generating a password.");

  // choice of password length between 8-128
  var pwdLength = prompt("Choose a number between 8 and 128. This choice will be the length of the password.", );
  if (pwdLength != null) {
    if (pwdLength >= 8 && pwdLength <= 128) {

      // choice of Lowercase, Uppercase, Numerals, Special Character
      alert("In the following prompts, at least one choice of lowercase, uppercase, numeric, and/or special characters must be confirmed.");

      var chooser = false;
      var charChoices = "";

      var uCase = confirm("Would you like your password to contain uppercase characters?");
      if (uCase === true) {
        chooser = true;
        charChoices += uChars; 
      }

      var lCase = confirm("Would you like your password to contain lowercase characters?");
      if (lCase === true) {
        chooser = true;
        charChoices += lChars;
      }

      var numChoice = confirm("Would you like your password to contain numeric characters?");
      if (numChoice === true) {
        chooser = true;
        charChoices += nChars;
      }

      var specChar = confirm("Would you like your password to contain special characters?");
      if (specChar === true) {
        chooser = true;
        charChoices += sChars;
      }

      if (chooser === false) {
        alert("At least one choice of lowercase, uppercase, numeric, and/or special characters must be confirmed.");
      } else {

        // actually password generation code
        for (i = 1; i < pwdLength ; i++ ) {
          actualPassword += charChoices[Math.floor(Math.random()*charChoices.length)];
        };
      };

    } else {
      alert("Please enter a number between 8 and 128")
    };

  };

  return actualPassword;
}

