const data = document.getElementsByTagName("td");
const modal = document.querySelector(".popclose");
const fade = document.querySelector(".fadeclose");
const reTexte = document.getElementById("reTexte");
const btn = document.getElementById("btn");
const time_start = document.getElementById("time_start");
let target;
let card;
let targetCard;
let reserveType;
//
const sprint = document.getElementById("sprint");
const client = document.getElementById("client");
const debrief = document.getElementById("debrief");
//

let reserve_card = document.createElement("div");
reserve_card.className = "card";
console.log(reserve_card);

for (let index = 0; index < data.length; index++) {
  data[index].addEventListener("click", () => {
    sprint.checked = false;
    client.checked = false;
    debrief.checked = false;
    modal.className = "popopen";
    fade.className = "fade";
    target = data[index];
  });
}
btn.addEventListener("click", () => {
  reserve_card.innerHTML = ` <p>${time_start.value}</p> <p>${reTexte.value}</p>`;
  target.appendChild(reserve_card);
  target.classList.add("reservation");

  if (sprint.checked == true) {
    reserve_card.style.background = "red";
    console.log(targetCard.innerHTML);
  }
  if (client.checked == true) {
    targetCard.style.background = "blue";
    console.log(target.innerHTML);
  }
  if (debrief.checked == true) {
    targetCard.style.background = "green";
    console.log(target.innerHTML);
  }
  modal.className = "popclose";
  fade.className = "fadeclose";
});
fade.addEventListener("click", () => {
  modal.className = "popclose";
  fade.className = "fadeclose";
});
