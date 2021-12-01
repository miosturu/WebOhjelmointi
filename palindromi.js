"use strict";

/**
 * Test if the inserted word is a palindrome.
 * This fucntion ignores spaces and upppercase letters.
 * @param {string} testedWord 
 * @returns Is the word a palindrome
 */
function isPalindrome(testedWord) {

    testedWord = testedWord.toLowerCase();
    testedWord = testedWord.replace(" ", "")

    for(let i = 0; i < testedWord.length; i++){
        if (testedWord.charAt(i) != testedWord.charAt(testedWord.length - 1 - i)){
            return false;
        }
    }
    return true;
}


/**
 * Ask the user for input continuously.
 */
function askInput(){
    while(true){
        var input = require("readline-sync");
        var word = input.question("Enter possible palindrome>");
        console.log("Is '" + word +  "' a palindrome?: " + isPalindrome(word));
    }
}


/**
 * Main function of the program. 
 * Prints relevant iformation for user and starts to ask for input.
 */
function main(){
    console.log("This program ignores spaces and upppercase letters.")
    askInput();
}


main();