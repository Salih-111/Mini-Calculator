function displayValue(val) {
  let input = document.querySelector(".calc-in");

  if (val === "C") {
    input.value = "";             
  } else if (val === "=") {
    try {
      input.value = eval(input.value);  
    } catch {
      input.value = "Error";
    }
  } else {
    input.value += val;           
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
     event.preventDefault();
     displayValue("=");  
  }
});
