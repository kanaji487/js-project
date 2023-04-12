// set inital value to zero
let count = 0;
// select value and buttons
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "#03C988";
    }
    if (count < 0) {
      value.style.color = "#13005A";
    }
    if (count === 0) {
      value.style.color = "#393053";
    }
    value.textContent = count;
  });
});
