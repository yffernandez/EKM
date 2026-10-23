const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();
  const phone = form.get("phone").trim();
  const service = form.get("service");
  const message = form.get("message").trim();
  const text = [
    "Hola, EKM Logístico. Quiero solicitar información sobre un servicio.",
    `Nombre: ${name}`,
    `Teléfono: ${phone}`,
    `Servicio: ${service}`,
    message ? `Detalles: ${message}` : ""
  ].filter(Boolean).join("\n");
  window.open(`https://wa.me/573170850260?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});