//elements from the HTML
const MyCheckBox1956 = document.getElementById("MyCheckBox1956");
const MyCheckBox1850 = document.getElementById("MyCheckBox1850");
const MyCheckBox2025 = document.getElementById("MyCheckBox2025");
const MyCheckBox1790 = document.getElementById("MyCheckBox1790");

const MyCheckExecuted = document.getElementById("MyCheckExecuted");
const MyCheckBoxkilled = document.getElementById("MyCheckBoxkilled");
const MyCheckBoxMurdered = document.getElementById("MyCheckBoxMurdered");
const MyCheckBoxAssassinated = document.getElementById("MyCheckBoxAssassinated");

const MySubmit = document.getElementById("MySubmit");
const AnswerResult = document.getElementById("AnswerResult");
const pointsDisplay = document.getElementById("points"); 

// Initializetion
let PointCounter = 0;

// The submit button's action
MySubmit.onclick = function() {
    // Variables for the current round/click
    let roundPoints = 0;
    let message = "";
    let question1Answered = false;
    let question2Answered = false;

    //Question 1
    // Correct answer 1850 (MyCheckBox1850)
    if (MyCheckBox1850.checked) {
        roundPoints = roundPoints + 5;
        message = "Question 1: Correct! (5 points)";
        question1Answered = true;
    } else if (MyCheckBox1956.checked || MyCheckBox2025.checked || MyCheckBox1790.checked) {
        // If any incorrect answer is checked for Q1
        message = "Question 1: Incorrect. (0 points)";
        question1Answered = true;
    } 

    // Handle initial message and separator
    if (question1Answered) {
        message = message + "<br>";
    } else {
        //Submit without choosing
        message = "Question 1: Please select an answer.<br>";
    }


    // --- Question 2:-
    // Correct answer is Assassinated in 2007 (MyCheckBoxAssassinated)
    
    // Check if the correct answer for Q2 is selected
    if (MyCheckBoxAssassinated.checked) {
        roundPoints = roundPoints + 5;
        message = message + "Question 2: Correct! (5 points)";
        question2Answered = true;
    } 
    // Check if any incorrect answer for Q2 is selected
    else if (MyCheckExecuted.checked || MyCheckBoxkilled.checked || MyCheckBoxMurdered.checked) {
        message = message + "Question 2: Incorrect. (0 points)";
        question2Answered = true;
    }
    // If Q2 was not answered, add a message (only if Q1 was already processed to avoid double header)
    else if (question1Answered) {
        message = message + "Question 2: Please select an answer.";
    }


    //Final Display
    
    // Only update the total if at least one question was answered
    if (question1Answered || question2Answered) {
         PointCounter = PointCounter + roundPoints;
    } else {
        // If neither was answered
        message = "Please select at least one answer to submit.";
    }


   // Display results using innerHTML
    AnswerResult.innerHTML = message;
    pointsDisplay.textContent = "Total Points: " + PointCounter;
};