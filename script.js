// Animación al cargar
window.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  hero.style.opacity = 0;
  hero.style.transform = "translateY(30px)";
  setTimeout(() => {
    hero.style.transition = "all 0.8s ease";
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 100);
});

// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".project-card, .section").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Formulario
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. Te contactaré pronto.");
  this.reset();
});

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    alert("Mensaje enviado con éxito!");
    form.reset();
  } else {
    alert("Hubo un error. Intenta de nuevo.");
  }
});
