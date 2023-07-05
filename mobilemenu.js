/*function mobileMenu() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}*/

function mobileMenu() {
  let x = document.getElementById("nav-menu");
  let y = document.getElementById("nav-toggle-close");
  let z = document.getElementById("nav-toggle-open");
  x.classList.toggle("hidden");
  y.classList.toggle("hidden");
  z.classList.toggle("hidden");
}
