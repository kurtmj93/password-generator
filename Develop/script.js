// Assignment code here

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '123456789';
const specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~';

var charSet = lowerLetters + upperLetters + numbers + specialChars;

console.log(charSet);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
