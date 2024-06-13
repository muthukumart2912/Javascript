(function () {
  const buttons = document.querySelectorAll(".btngroup");
  const display = document.querySelector(".display");
  let count = 0;

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.classList.contains("inc")) {
        count++;
      } else if (btn.classList.contains("dec")) {
        count--;
      } else {
        count = 0;
      }
      display.textContent = count;

      if (count > 0) {
        display.style.border = "1px solid green";
      } else if (count < 0) {
        display.style.border = "1px solid red";
      } else {
        display.style.border = "1px solid white";
      }
    });
  });
})();
