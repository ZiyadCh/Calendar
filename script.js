const data = document.getElementsByTagName("td");
const modal = document.querySelector(".popclose");
const fade = document.querySelector(".fadeclose");
const reTexte = document.getElementById("reTexte");
const btn = document.getElementById("btn");
const time_start = document.getElementById("time_start");
let target;

for (let index = 0; index < data.length; index++) {
  data[index].addEventListener("click", () => {
    modal.className = "popopen";
    fade.className = "fade";
    target = data[index];
  });
}
btn.addEventListener("click", () => {
  target.classList.add("reservation");
  target.innerHTML = `${target.innerHTML} <div class="card"> <p>${time_start.value}</p> <p>${reTexte.value}</p> </div>`;

  modal.className = "popclose";
  fade.className = "fadeclose";
});
fade.addEventListener("click", () => {
  modal.className = "popclose";
  fade.className = "fadeclose";
});

function proceed(index) {
  data[index].innerHTML = `${index + 1} <h1>${reTexte.value}</h1>`;
}
