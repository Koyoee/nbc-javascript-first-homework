const upButton = document.querySelector(".upbtn");

window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    upButton.classList.add("show");
  } else {
    upButton.classList.remove("show");
  }
});
