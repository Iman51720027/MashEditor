// textBox var 
var textEditor = document.getElementById("textBox");
// run btn var 
var runBtn = document.getElementById("runBtn");
// outputBox var
var outputBox = document.getElementById("outputBox");
// run btn event
runBtn.addEventListener('click', function() {
  // code var
  var code = textEditor.value;
  // bik se suru hota hei to
  if (code.startsWith("bik")) {
    outputBox.textContent = code.substring(4); // (4) kata jayega
  }
  else { 
    // error message
    outputBox.textContent = "syntax error: invalid code";
  }
})