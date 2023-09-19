                            //  !  Chapter no 21 and 25
                                    //?  Q no 1

// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = `${firstName} ${lastName}`;
// alert(`Hello, ${fullName}!`);
   
                                    //! Q no 2
// var userInput = prompt("Please enter your favorite mobile phone model:");
// var inputLength = userInput.length;
//   document.write("The length of your input is: " + inputLength);

                                    //! Q no 3    
//  var inputString = "Pakistani";
//  var indexOfN = inputString.indexOf('n');
// document.write("String: Pakistan </br>Index of 'n': " + indexOfN);  
                                //      ! Q no 4

// var inputString = "Hello World";
// var lastIndex = inputString.lastIndexOf('l');
// document.write("String: helo world </br>Last index of 'l': " + lastIndex);

                              // ! Q no 5
// var inputString = "Pakistani";

// var characterAtIndex3 = inputString.charAt(3);

// document.write("string: Pakistan</br>character at index 3:" + characterAtIndex3);


                                //   !Qno 6
//  var inputString = "Hello World";
//   var searchString = inputString.concat("X");
// var lastIndex = searchString.lastIndexOf('l');

                                //   ! Q no 7
// var inputString = "Hyderabad";
// var replacedString = inputString.replace("Hyder", "Islam");
// document.write("City : " + inputString + "<br>");
// document.write("After replacement: " + replacedString);

                        //       ! Q no 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = message.replace(/and/g, "&");
// document.write("Original : " + message + "<br>");
// document.write("Replaced : " + replacedMessage);

                        // ! Q no 9
// var str = "472";
// var num = parseInt(str);
// document.write(" Value: " + str + "<br>");
// document.write(" Type: " + typeof str + "<br>");

// document.write(" Value: " + num + "<br>");
// document.write(" Type: " + typeof num + "<br>");

                //        !Q no 10

// var userInput = prompt("Please enter some text:");
// var uppercaseText = userInput.toUpperCase();
// document.write("User Input: " + userInput + "<br>");
// document.write("Uppercase : " + uppercaseText);        


                        // ! Q no 11

// var userInput = prompt("Enter a sentence or a word:");
// function toTitleCase(input) {
//   return input.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }
// var titleCaseInput = toTitleCase(userInput);
//  ("Input in title case: " + titleCaseInput);


                        //   ! Q no 12
// var num = 35.36;
// var numAsString = num.toString().replace(".", "");
// document.write("Result: " + numAsString);
                //    ! Q no 13

// var username = prompt("Enter your username:");
// var specialSymbolPattern = /[@.,!]/;
// if (specialSymbolPattern.test(username)) {
//   alert("Please enter a valid username without @, ., , or !");
// } else {
//  alert ("Username is valid: " + username);
// }


                      // Q no 14
                      
// ???????????????????????????????????????????????????????????????????????
                        //? sory sir
                        
                        
                //      Q no 15
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Enter an item to search:").toLowerCase();
// var found = false;
// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === searchItem) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   alert(searchItem + " is found in the list.");
// } else {
//   alert(searchItem + " is not found in the list.");
// }

                                //      Q no 16


// var university = "University of Karachi";

// var arrayOfWords = university.split(" ");

// for (var i = 0; i < arrayOfWords.length; i++) {
//   document.write("Element " + i + ": " + arrayOfWords[i] + "<br>");
// }

                        //     Q no 17
                        
                        
// var userInput = prompt("Enter a string:");
// if (userInput !== null && userInput !== "") {
//   var lastCharacter = userInput.charAt(userInput.length - 1);
//   document.write("The last character is: " + lastCharacter);
// }

                //     Q no 18
                 
                //      ? CHAPTER NO 17 and 20
                         //  ! Q no 1

//  const emptyMultidimensionalArray = [[]];

                        //  ! Q no 2

//  const matrix = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ];
                            
                        //    ! Q no 3

// for (let i = 1; i <= 10; i++) {
//     document.write(i);
// }

                //       ! Q no 4
var number = parseInt(prompt("Enter lenth multiplication table"))
for(i =1; i<=10; i++){
document.getElementById("multiplication tabel").innerHTML+=
`${number} * ${i} = ${number*i}</br>`;


}                
