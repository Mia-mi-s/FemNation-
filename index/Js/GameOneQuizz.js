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
const points = document.getElementById("points");

// need to make a var that counts the points et ensuite l'afficher

//learn how to handle lists so you can makea for loop

let PointCounter = 0;
let IsCorrect = true;

if(IsCorrect){
    PointCounter = PointCounter + 5;
}


MySubmit.onclick = function(){
    if(MyCheckBox1956.checked){
        AnswerResult.textContent = "Nope try another";
        points.textContent = PointCounter
        points.textContent = "0 points gained"
    }
    if(MyCheckBox1850.checked){
        AnswerResult.textContent = "this answer is correct";
        points.textContent = "5 points gained"
    }
    if(MyCheckBox2025.checked){
        AnswerResult.textContent = "Nope try another";
        points.textContent = "0 points gained"
    }
    if(MyCheckBox1790.checked){
        AnswerResult.textContent = "Nope try another";
        points.textContent = "0 points gained"
    }



MySubmit.onclick = function(){
    if(MyCheckExecuted.checked){
        AnswerResult.textContent = "this answer is correct";
        points.textContent = PointCounter
        points.textContent = "0 points gained"
    }
    if(MyCheckBoxkilled.checked){
        AnswerResult.textContent = "Nope try another";
        points.textContent = "5 points gained"
    }
    if(MyCheckBoxMurdered.checked){
        AnswerResult.textContent = "Nope try another";
        points.textContent = "0 points gained"
    }
    if(MyCheckBoxAssassinated.checked){
        AnswerResult.textContent = "Nope try another";
        points.textContent = "0 points gained"
    }
}}