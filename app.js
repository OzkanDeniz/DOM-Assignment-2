const body = document.querySelector("body");
const btn1 = document.querySelector(".btn-click");
const btn2 = document.querySelector(".btn-over");
const colorInput = document.querySelector("#colorInput")
const colorTExt = document.getElementById("colorText")
const copy = document.getElementById("copy")


btn1.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const changedColor = `rgb(${r},${g},${b})`;

  document.body.style.backgroundColor = changedColor;
  colorTExt.textContent = changedColor
  colorInput.style.color = changedColor
});

btn2.addEventListener("mouseover", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const changedColor = `rgb(${r},${g},${b})`;

  document.body.style.backgroundColor = changedColor;
  colorTExt.textContent = changedColor
});
