const data = document.getElementsByTagName("td");
const modal = document.querySelector(".popclose");
const fade = document.querySelector(".fadeclose");
const reTexte = document.getElementById("reTexte");
const btn = document.getElementById("btn");
const time_start = document.getElementById("time_start");
let target;
let reserveType;

let reserve_card = document.createElement("div");
reserve_card.className = "card";
console.log(reserve_card);

for (let index = 0; index < data.length; index++) {
  data[index].addEventListener("click", () => {
    modal.className = "popopen";
    fade.className = "fade";
    target = data[index];
  });
}
btn.addEventListener("click", () => {
  target.classList.add("reservation");
  reserve_card.innerHTML = ` <p>${time_start.value}</p> <p>${reTexte.value}</p>`;
  target.appendChild(reserve_card);

  modal.className = "popclose";
  fade.className = "fadeclose";
});
fade.addEventListener("click", () => {
  modal.className = "popclose";
  fade.className = "fadeclose";
});
