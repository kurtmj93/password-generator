// Assignment code here

// Strings store different types of characters for use in password

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '123456789';
const specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~';

// Min/max characters are detailed in acceptance criteria

var minChars = 8;
var maxChars = 128;

function generatePassword() {
  // charSet is the string we'll be choosing random letters from - it starts with lowerLetters included.
  let charSet = lowerLetters;
  let password = '';
  
  // series of browser prompts asks for yes/no then password length inputs

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
//  console.log(charSet); // checking to see if charSet worked as intended - commented out

  // prompt asks for an explicit password length.
  let i = prompt("How long would you like your password to be?", 8);
    if (i > 7 && i < 129) {
      while (i > 0) {
        password += charSet[Math.floor(Math.random() * charSet.length)];
        i--;
      }
      return password;
    }  
      else {
        // my understanding is that this broad else covers situations where letters or other non-numerical are input by user - returns error message.
        alert('Please enter an integer between 8 and 128.');
        // this is unecessary, but as the password variable is printed to the HTML, it adds an additional tooltip for user
        password = 'Please try again.';
        return password;
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
