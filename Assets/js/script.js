
//password elements that are used for generating password characters
var passwordElements = {
  specialCharacter: ["&", "!", "#", "$", "%", "'", "+", "-", ".", ":", ";", "<", "=", ">", "@", "?", "[", "^", "_"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q,", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
}

//password characters are pushed into the passwordOne Array
//PasswordTwo is set if we need to create a 90 password change rule 
//finalPassord variable stores the final password string.
var passwordOne = [];
var finalPassword = "";
var passwordTwo = [];


//global input varables 
var inputNumberLength = 0;
var inputCharacter = 0;
var inputNumber = 0;
var inputLowercase = 0;
var inputUppercase = 0;
var combined = [];

//prompt function - Done
function inputPrompt() {
  //inputNumberLength prompt // 1) need to enforce input length
  inputNumber = prompt("Would you like numbers in password? y,n");
  switch (inputNumber) {
    case "y":
      inputNumber = inputNumber;
      break;
    case null:
      inputNumber = null;
      break;
  }

  inputCharacter = prompt("Would you like special characters in password y,n?");
  switch (inputCharacter) {
    case "y":
      inputCharacter = inputCharacter;
      break;
    case null:
      inputCharacter = null;
      break;
  }

  inputLowercase = prompt("Would you like lowercase letters in password y,n");
  switch (inputLowercase) {
    case "y":
      inputLowercase = inputLowercase;
      break;
    case null:
      inputLowercase = null;
      break;
  }
  inputUppercase = prompt("Would you like Uppercase letters in password? y,n");
  switch (inputUppercase) {
    case "y":
      inputUppercase = inputUppercase;
      break;
    case null:
      inputUppercase = null;
      break;
  }

  inputNumberLength = prompt("Choose character length between 8-28");
  if (inputNumberLength >= 8 && inputNumberLength <= 128) {
    inputNumberLength = inputNumberLength;

  }
}




//finction generates password 

function generatePassword() {

  //Input prompt function is called when we call the generate password function
  inputPrompt()

//If statement is true, provides the number length parameters between 8 and 128. 
  
  if (inputNumberLength > 8 && inputNumberLength < 128) {

    if (inputCharacter === "y") {
      passwordOne.push(...passwordElements.specialCharacter); //If true, pushes the special characters elements into the passwordOne array
    }

    if (inputLowercase === "y") {
      passwordOne.push(...passwordElements.lowerCase); //If true, pushes the lowerCase elements into the passwordOne array
    }

    if (inputUppercase === "y") {
      passwordOne.push(...passwordElements.upperCase); //If true, pushes the upperCase elements into the passwordOne array

    }
    if (inputNumber === "y") {
      passwordOne.push(...passwordElements.number); //If true, pushes the number elements into the passwordOne array
    }

    for (var i = 0; i <= inputNumberLength; i++) {  //for loop, loops through the password array and randomly selects characters in the array and stores in the final password variable. 
      finalPassword = finalPassword + passwordOne[Math.floor(Math.random() * passwordOne.length)];
    }
//returns the finalpassword variable to function so that it is accessible by the function
    return finalPassword;

  } else {
    alert("enter a valid password length"); //else if false (the number length is not between 8 and 128) then alert "enter valid password length"
    inputPrompt(); //users have to re-enter all the password parameters 
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

//write a writePassword function


// Assignment Code (this adds the code to the html)
var generateBtn = document.querySelector("#generate");




// ...............................
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



