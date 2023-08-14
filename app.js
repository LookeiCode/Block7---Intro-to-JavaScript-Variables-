//I will solve this by creating the string variable for the text the page visitor will first recieve.
//Then I will create 3 variables that contain a piece of the (number) combination for the safe.
//Then I will use if statements to convert the result of the arthimetic variables containing the combination numbers to a string version (so that the alert displays each number seperately together instead of added together)
//Then I will alert the message along with the combination to the visitor when they visit the page.

//The first message to the page visitor (string variable)
let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//COMBINATION NUMBERS
//The set of 3 variables which contain each number combination
let comboOne = 5 + 5;
let comboTwo = 5 * 8;
let comboThree = 52 - 13;

//IF STATEMENT SECTION
//These if statements convert the numbers from the variables above into strings
//This is so when you do alert(comboOne + comboTwo + comboThree) the numbers aren't added together, but rather are put next to eachother displaying the full combination in one alert.
if (comboOne == 10) {
    comboOne = "10"
}
else if (comboOne == 5) {
    alert("Access Denied")
}

if (comboTwo == 40) {
    comboTwo = "40"
}
else if (comboTwo == 5) {
    alert("Access Denied")
}

if (comboThree == 39) {
    comboThree = "39"
}
else if (comboThree == 5) {
    alert("Access Denied")
}

//ALERT SECTION
//The alerts the page visitor will recieve
alert(message);

//The alerts below if turned on display the combination in a sequence of 3 alerts (must also (turn off) // the if statement section and the alert(comboOne + comboTwo + comboThree) alert below)
// alert(comboOne)
// alert(comboTwo)
// alert(comboThree)

alert(comboOne + comboTwo + comboThree);

//ADDITIONAL NOTES
//I'm sure there was an easier way but this is what I came up with using if statements.
//I'm not sure if this is what was asked on the canvas (me and my partner were confused) whether to display each number combination variable in their own alert boxes in a sequence, or if it wanted all the number combination numbers in one alert box together.