const data = document.getElementsByTagName("td");
const modal = document.querySelector(".popclose");
const fade = document.querySelector(".fadeclose");
const reTexte = document.getElementById("reTexte");
const btn = document.getElementById("btn");
const time_start = document.getElementById("time_start");
const cardDetail = document.querySelector(".cardDclose");
let target;
let card;
let targetCard;
let reserveType;

const dropDetail = document.querySelector(".cardDclose");
//
const sprint = document.getElementById("sprint");
const client = document.getElementById("client");
const debrief = document.getElementById("debrief");
//

let reserve_card = document.createElement("div");
reserve_card.className = "card";
console.log(reserve_card);

let detailMenu = document.createElement("div");
dropDetail.className = "carD";
detailMenu.appendChild(dropDetail);

for (let index = 1; index < data.length - 2; index++) {
  data[index].addEventListener("click", (e) => {
    sprint.checked = false;
    client.checked = false;
    debrief.checked = false;
    modal.className = "popopen";
    fade.className = "fade";
    target = data[index];
    e.stopPropagation();
  });
}

btn.addEventListener("click", () => {
  let reserve_card = document.createElement("div");
  reserve_card.className = "card";

  if (time_start.value == "" || reTexte.value == "") {
    alert("remplire tout les input");
  } else {
    reserve_card.innerHTML = ` <p>${time_start.value}</p> <p>${reTexte.value}</p>`;
    target.appendChild(reserve_card);
    target.classList.add("reservation");

    reserve_card.appendChild(detailMenu);
  }
  if (sprint.checked == true) {
    reserve_card.style.background = "red";
  }
  if (client.checked == true) {
    reserve_card.style.background = "blue";
  }

  if (debrief.checked == true) {
    reserve_card.style.background = "green";
  }
  modal.className = "popclose";
  fade.className = "fadeclose";
});
//card detail

reserve_card.addEventListener("click", function (e) {
  e.stopPropagation();
  detailMenu.className = "cardD";
  console.log("happen");
});

fade.addEventListener("click", () => {
  modal.className = "popclose";
  fade.className = "fadeclose";
});
