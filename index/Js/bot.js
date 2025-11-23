function Reset(){
  document.getElementById("Answer").textContent = "";
  document.getElementById("Question").value = "";
}
function AskBot() {
  const question = document.getElementById("Question").value;
  const answerElement = document.getElementById("Answer");

  fetch("http://localhost:3000/qna?q=" + question)
    .then(response => response.text())
    .then(data => {
      answerElement.textContent = "Answer: " + data;
    });
}