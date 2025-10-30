function applyNow() {
  alert("Thank you for your interest! Admissions for Fall 2025 are open. Visit our campus or apply online.");
}

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.7)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.4)";
  }
});
