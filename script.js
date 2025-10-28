const data = document.getElementsByTagName("td");
const modal = document.querySelector(".popclose");
const fade = document.querySelector(".fadeclose");
const bdy = document.body;
const reTexte = document.getElementById("reTexte");
const btn = document.getElementById("btn");

for (let index = 0; index < data.length; index++) {
  data[index].addEventListener("click", () => {
    modal.className = "popopen";
    fade.className = "fade";

    btn.addEventListener("click", () => {
      data[index].innerHTML = `${index + 1} <h1>${reTexte.value}</h1>`;
    });
  });
}

btn.addEventListener("click", () => {
  data[index].innerHTML = `${index + 1} <h1>${reTexte.value}</h1>`;
});

fade.addEventListener("click", () => {
  modal.className = "popclose";
  fade.className = "fadeclose";
});

function proceed(index) {
  data[index].innerHTML = `${index + 1} <h1>${reTexte.value}</h1>`;
}
