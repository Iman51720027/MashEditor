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
  var code1 = code.split('\n')
  outputBox.textContent = "";
  // loop
  for (var i = 0; i < code1.length; i++) {
    // bik se suru hota hei to
  if (code1[i].startsWith("bik")) {
    outputBox.textContent += code1[i].substring(4) + "\n"; // (4) kata jayega
  }
  else { 
    // error message
    outputBox.textContent = "syntax error: invalid code";
    break;
  }
  }
})