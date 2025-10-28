const data = document.getElementsByTagName("td");
const modal = document.querySelector(".popclose");
const fade = document.querySelector(".fadeclose");
const bdy = document.body;
const reTexte = document.getElementById("reTexte");
const btn = document.getElementById("btn");
let target;

for (let index = 0; index < data.length; index++) {
  data[index].addEventListener("click", () => {
    modal.className = "popopen";
    fade.className = "fade";
    target = data[index];
  });
}
btn.addEventListener("click", () => {
  reTexte.classList.add("reservation");
  target.innerHTML = `${target.innerHTML} <h1>${reTexte.value}</h1>`;
});
fade.addEventListener("click", () => {
  modal.className = "popclose";
  fade.className = "fadeclose";
});

function proceed(index) {
  data[index].innerHTML = `${index + 1} <h1>${reTexte.value}</h1>`;
}
