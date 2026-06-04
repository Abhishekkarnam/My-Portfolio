const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const brand = document.querySelector(".brand");
const navLinks = document.querySelectorAll(".nav-links a");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

brand.addEventListener("click", (event) => {
  event.preventDefault();
  body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", window.location.pathname + window.location.search);
});
navToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
