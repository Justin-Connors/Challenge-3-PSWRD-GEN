// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt(
  "How many characters would you like your password to be? Between 8 and 128."
);
var passwordSymbols = prompt(
  "Do you want to include special characters? Yes or No."
);
var includeLowerCase = prompt(
  "Do you want to include lowercase letters? Yes or No."
);
var includeUpperCase = prompt(
  "Do you want to include uppercase letters? Yes or No."
);
var includeNumbers = prompt("Do you want to include numbers? Yes or No.");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //Adding values to password
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*(){}[]=<>/,.";
  let password = "";

  if ((includeSymbols = true)) {
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  if ((includeLowerCase = true)) {
    password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  }
  if ((includeUpperCase = true)) {
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  }
  if ((includeNumbers = true)) {
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  
  return password;
}

//Making sure password length is between 8 and 128
if (passwordLength < 8 || passwordLength > 128) {
  prompt("Password must be between 8 and 128 characters.");
  // console.log(passwordLength);
}
//checking if user wants to include special characters
if (
  passwordSymbols.toLowerCase() === "yes" ||
  passwordSymbols.toLowerCase() === "y"
) {
  includeSymbols = true;
  // console.log(includeSymbols);
} else if (
  passwordSymbols.toLowerCase() === "no" ||
  passwordSymbols.toLowerCase() === "n"
) {
  includeSymbols = false;
} else {
  prompt("Please answer with 'yes' or 'y', Or 'no' or 'n'.");
}

//checking if user wants to include lowercase letters
if (
  includeLowerCase.toLowerCase() === "yes" ||
  includeLowerCase.toLowerCase() === "y"
) {
  includeLowerCase = true;
  // console.log(includeLowerCase);
} else if (
  includeLowerCase.toLowerCase() === "no" ||
  includeLowerCase.toLowerCase() === "n"
) {
  includeLowerCase = false;
} else {
  prompt("Please answer with 'yes' or 'y', Or 'no' or 'n'.");
}

//checking if user wants to include uppercase letters
if (
  includeUpperCase.toLowerCase() === "yes" ||
  includeUpperCase.toLowerCase() === "y"
) {
  includeUpperCase = true;
  // console.log(includeUpperCase);
} else if (
  includeUpperCase.toLowerCase() === "no" ||
  includeUpperCase.toLowerCase() === "n"
) {
  includeUpperCase = false;
} else {
  prompt("Please answer with 'yes' or 'y', Or 'no' or 'n'.");
}

//checking if user wants to include numbers
if (
  includeNumbers.toLowerCase() === "yes" ||
  includeNumbers.toLowerCase() === "y"
) {
  includeNumbers = true;
  // console.log(includeNumbers);
} else if (
  includeNumbers.toLowerCase() === "no" ||
  includeNumbers.toLowerCase() === "n"
) {
  includeNumbers = false;
} else {
  prompt("Please answer with 'yes' or 'y', Or 'no' or 'n'.");
}

generatePassword();
