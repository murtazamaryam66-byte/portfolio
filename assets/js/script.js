const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlinks");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
AOS.init({
  duration: 800,
  once: true
});