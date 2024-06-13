let input = document.querySelector("input");

let dis = document.querySelector("span");
let btn = document.querySelector("button");

function convertWeight() {
  let data = input.value;
  let pounds = 2.20462;
  let convert = data * pounds;
  dis.textContent = convert;
}

btn.addEventListener("click", convertWeight);
