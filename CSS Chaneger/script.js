const inputs = document.querySelectorAll("input");

function updateImage() {
  const data = this.dataset.sizing || "";
  const image = document.querySelector(".images img");

  switch (this.id) {
    case "baseColor":
      image.style.backgroundColor = this.value;
      break;
    case "widthSize":
      image.style.width = this.value + data;
      break;
    case "borderSize":
      image.style.borderRadius = this.value + data;
      break;
    case "padd":
      image.style.padding = this.value + data;
      break;
    case "blurImage":
      image.style.filter = `blur(${this.value}${data})`;
      break;
  }
}

inputs.forEach((inp) => inp.addEventListener("input", updateImage));
