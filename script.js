let arrow = document.getElementById("btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
});
arrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
let btn = document.getElementById("btn2");
let menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  menu.style.opacity = "1";
  menu.style.top = "calc(100% + 1px)";
  menu.style.zIndex = "999";
});
let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  menu.style.opacity = "0";
  menu.style.top = "calc(100% + 20px)";
  menu.style.zIndex = "-1";
});
