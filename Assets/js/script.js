

var passwordElements = {
  specialCharacter: ["&","*"], 
  lowercase: ["a","b",],
  upperCase: ["a", "B"],
  number: function numerRandomn() {
      numberRandom = Math.random
  }
  //Need to shuffle
}

//passwords are pushed into array
var getPassword = {
  passwordOne: [],
  passwordTwo: [],

}
//global input varables 
 var inputNumberLength = 0;
 var inputCharacter = 0;
 var inputNumber= 0;
 var inputLowercase = 0;
 var inputUppercase= 0;

//prompt function
//uppercase, lowercase, numbers, special characters
//Need to collect input parameters and store in variables
function inputPrompt(){
   //need to enforce input lengt

   inputNumberLength = prompt("How long is your password? Minimum 8 and Max 128 characters long"); //default?
      if (inputNumberLength >=8 && inputNumberLength <=28) {  //may need to make a string
      inputNumberLength = inputNumberLength;
  }
  else{
       inputPrompt("You need enter character length of 8 to 28");
   //need to stop this boolean if not fales - not 8 to 28  ---Does not stop here
  }
   inputCharacter = prompt("Do you want to use special characters? y or n"); //make lowercase
      if(inputCharacter==="y"){ 
        inputCharacter = inputCharacter;
      }
     else{
       inputCharacter = null;
     }
   inputNumber= prompt("Do you want to use number? y or no");
   if(inputNumber==="y"){ 
    inputNumber = inputNumber;
  }
  else{
    inputCharacter = null;
  }
  
   inputLowercase = prompt("Do you want to use lowercase letter? y or n");
   if(inputNumber==="y"){ 
    inputLowercase = inputLowercase;
   }
   else{
    inputLowercase = null;
  }
   inputUppercase= prompt("Do you want to use upperCase letters, y or n");
  
   if(inputNumber==="y"){ 
    inputLowercase = inputLowercase;
   }
   else{
    inputUppercase = null;
}
}


//  //need to use input parements to getpassword array,
// identify array that are null and don't include
//   put in a new array,
//    and random sort,
//   resuffle original array 
function generatePassword() {

  //need to shuffle array here may thing of creating a shuffle All arrays need to be shuffled
 
  
   //need to stop this boolean if not fales - not 8 to 28  ---Does not stop here

  for (var i = 0; i < inputNumberLength; i++) {

    if(inputCharacter === "y"){
      getPassword.passwordOne.push[passwordElements.specialCharacter[i]] 
    }
    else{
      return
    }
    getPassword.passwordOne.push[passwordElements.lowercase[i]] 
    getPassword.passwordOne.push[passwordElements.upperCase[i]] 
    getPassword.passwordOne.push[passwordElements.number] 

    
  }
}

 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  //change passwordArray.passwordOne
  passwordText.value = password;

}

//write a writePassword function


// Assignment Code (this adds the code to the html)
var generateBtn = document.querySelector("#generate");




// ...............................
// Add event listener to generate button
inputPrompt()

generateBtn.addEventListener("click", writePassword);

inputPrompt();
generatePassword();
// console.log(inputNumberLength);
console.log(getPassword.passwordOne)
