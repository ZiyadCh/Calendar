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
let check = false;

let dropDetail = document.querySelector(".cardDclose");
//
const dlt = document.getElementById("btnDelete");

//
const sprint = document.getElementById("sprint");
const client = document.getElementById("client");
const debrief = document.getElementById("debrief");
//

for (let index = 1; index < data.length - 2; index++) {
  data[index].addEventListener("click", (e) => {
    sprint.checked = false;
    client.checked = false;
    debrief.checked = false;
    check = false;
    modal.className = "popopen";
    fade.className = "fade";
    target = data[index];
    e.stopPropagation();
  });
}

//create card !!!
btn.addEventListener("click", () => {
  let reserve_card = document.createElement("div");
  reserve_card.className = "card";

  let dropDetail = document.querySelector(".cardDclose");

  //radio button
  if (sprint.checked == true) {
    reserve_card.style.background = "red";
    check = true;
  }
  if (client.checked == true) {
    reserve_card.style.background = "blue";
    check = true;
  }
  if (debrief.checked == true) {
    reserve_card.style.background = "green";
    check = true;
  }
  //validation
  if (time_start.value == "" || reTexte.value == "" || check == false) {
    alert("remplire tout les input");
  } else {
    //cration
    reserve_card.innerHTML = `<p>${time_start.value}</p> <p>${reTexte.value}</p>`;
    target.appendChild(reserve_card);
    target.classList.add("reservation");

    //detail menu
    reserve_card.appendChild(dropDetail);
    reserve_card.addEventListener("mouseover", function (e) {
      e.stopPropagation();
      dropDetail.className = "carD";
      console.log("happen");
    });
    reserve_card.addEventListener("mouseleave", (e) => {
      dropDetail.className = "gone";
      e.stopPropagation();
    });
  }
  modal.className = "popclose";
  fade.className = "fadeclose";
});
//card detail
dropDetail.addEventListener("click", (e) => {
  e.stopPropagation();
});
//Delete
dlt.addEventListener("click", () => {
  target.removeChild(reserve_card);
  console.log("happening deelte");
});
//fade
fade.addEventListener("click", () => {
  modal.className = "popclose";
  fade.className = "fadeclose";
});
