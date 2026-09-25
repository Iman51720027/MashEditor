// textBox var 
var textEditor = document.getElementById("textBox");
// run btn var 
var runBtn = document.getElementById("runBtn");
// outputBox var
var outputBox = document.getElementById("outputBox");
// run btn event
runBtn.addEventListener('click', function() {
  textEditor.style.display = "none";
  runBtn.style.display = "none";
  outputBox.style.display = "block";
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

// 15px font size btn 

var ftinpxFnSz = document.getElementById("ftinpx-fn-sz");
ftinpxFnSz.addEventListener('click', function(){
  textEditor.style.fontSize = "15px";
})

// back btn logic 

var backBtn = document.getElementById("back");
// back btn event 
backBtn.addEventListener('click',() => {
  outputBox.style.display = "none";
  textBox.style.display = "inline";
  runBtn.style.display = "inline";
})