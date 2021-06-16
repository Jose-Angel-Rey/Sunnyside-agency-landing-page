"strict mode";
const hamburgerBtn = document.querySelector(".main-header__hamburger-btn");
const mobileNav = hamburgerBtn.nextElementSibling;

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");

  hamburgerBtn.classList.contains("active")
    ? mobileNav.classList.add("active")
    : mobileNav.classList.remove("active");
});
