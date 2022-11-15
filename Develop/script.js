// Assignment code here

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '123456789';
const specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~';

let charSet = lowerLetters + upperLetters + numbers + specialChars;

function randomIntWithin(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min)
}

let minChars = 8;
let maxChars = 50;

function generatePassword() {
  let password = '';
  let i = randomIntWithin(minChars, maxChars);
  while(i > 0) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
    i--;
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
