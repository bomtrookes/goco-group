export function menu(x) {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector("#nav-links");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    burger.classList.toggle("change");
    body.classList.toggle("lock");
    menu.classList.toggle("slide");
    console.log("clicked")
  })
}
