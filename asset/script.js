// alert("wellcome")
// alert(Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",




const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
