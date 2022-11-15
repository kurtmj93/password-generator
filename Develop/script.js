// Assignment code here

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '123456789';
const specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~';

function randomIntWithin(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min)
}

var minChars = 8;
var maxChars = 128;

function generatePassword() {
  let charSet = lowerLetters;
  let password = '';
  let uppersOK = confirm('Do you want to include uppercase letters?');
  if (uppersOK) {
    charSet += upperLetters;
  } else {
    alert("We won't use uppercase letters.");
  }
  let numbersOK = confirm('Do you want to include numbers?');
  if (numbersOK) {
    charSet += numbers;
  } else {
    alert("We won't use numbers.");
  }
  let specialOK = confirm('Do you want to include special characters?');
  if (specialOK) {
    charSet += specialChars;
  } else {
    alert("We won't use special characters.")
  }
//  console.log(charSet); // checking to see if charSet worked as intended.
  let randomOK = confirm('Would you like a password of random length between 8 and 128 characters?')
  if (randomOK) {
    let i = randomIntWithin(minChars, maxChars);
    while (i > 0) {
      password += charSet[Math.floor(Math.random() * charSet.length)];
      i--;
    }
    return password;
  } else {
    let i = prompt("How long would you like your password to be?", 8);
    if (i > 7 && i < 129) {
      while (i > 0) {
        password += charSet[Math.floor(Math.random() * charSet.length)];
        i--;
      }
      return password;
    }  
      else {
        alert('Please enter an integer between 8 and 128.');
        password = 'Please try again.';
        return password;
      }
  }
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
