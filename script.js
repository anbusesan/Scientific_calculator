document.addEventListener("DOMContentLoaded", () => {
  let display = document.getElementById("display");
  let buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
      button.addEventListener("click", () => {
          let buttonText = button.innerText;

          if (button.classList.contains("clear")) {
              display.value = "";
          } 
          else if (button.classList.contains("backspace")) {
              display.value = display.value.slice(0, -1);
          } 
          else if (button.classList.contains("equals")) {
              try {
                  display.value = eval(display.value);
              } catch {
                  display.value = "Error";
              }
          } 
          else if (button.classList.contains("func")) {
              handleScientificFunction(button.dataset.func);
          } 
          else {
              display.value += buttonText;
          }
      });
  });

  function handleScientificFunction(func) {
      let value = parseFloat(display.value);
      if (isNaN(value) && func !== "pi" && func !== "e") {
          display.value = "Error";
          return;
      }

      switch (func) {
          case "sin":
              display.value = Math.sin(value * (Math.PI / 180)).toFixed(5);
              break;
          case "cos":
              display.value = Math.cos(value * (Math.PI / 180)).toFixed(5);
              break;
          case "tan":
              display.value = Math.tan(value * (Math.PI / 180)).toFixed(5);
              break;
          case "log":
              display.value = Math.log10(value).toFixed(5);
              break;
          case "sqrt":
              display.value = Math.sqrt(value).toFixed(5);
              break;
          case "pi":
              display.value = Math.PI.toFixed(5);
              break;
          case "e":
              display.value = Math.E.toFixed(5);
              break;
          case "pow":
              display.value += "**";
              break;
          default:
              display.value = "Error";
      }
  }
});
