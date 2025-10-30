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

for (let index = 1; index < data.length - 2; index++) {
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
  if (time_start.value == "" || reTexte.value == "") {
    alert("remplire tout les input");
  } else {
    target.classList.add("reservation");
    target.innerHTML = `${target.innerHTML} <div class="card" > <p>${time_start.value}</p> <p>${reTexte.value}</p> </div>`;
    card = document.getElementsByClassName("card");
  }
  if (sprint.checked == true) {
    card[card.length - 1].style.background = "red";
  }
  if (client.checked == true) {
    card[card.length - 1].style.background = "blue";

  if (debrief.checked == true) {
    card[card.length - 1].style.background = "green";
  }

  modal.className = "popclose";
  fade.className = "fadeclose";
});
fade.addEventListener("click", () => {
  modal.className = "popclose";
  fade.className = "fadeclose";
});
