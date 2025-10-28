const data = document.getElementsByTagName("td");
const modal = document.querySelector(".popclose");
const fade = document.querySelector(".fadeclose");
const bdy = document.body;

for (let index = 0; index < data.length; index++) {
  data[index].addEventListener("click", () => {
    modal.className = "popopen";
    fade.className = "fade";
    data[index].innerHTML = `${index + 1} <h1>yes</h1>`;
    reserve.innerHTML = "yes";
  });
}

fade.addEventListener("click", () => {
  modal.className = "popclose";
  fade.className = "fadeclose";
});
