var textEditor = document.getElementById("textBox");
var runBtn = document.getElementById("runBtn");
var outputBox = document.getElementById("outputBox");

runBtn.addEventListener('click', function() {
  outputBox.innerHTML = textEditor.value;
})