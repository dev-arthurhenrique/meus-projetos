/* Configure o número abaixo com DDI + DDD + número, somente dígitos.
   Exemplo de formato: 55 + DDD + número. Não use espaços, +, parênteses ou traços. */
const WHATSAPP_NUMBER = "5582996355177";

const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

function closeMenu() {
  if (!menuButton || !mainNav) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  mainNav.classList.remove("is-open");
}

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 850px)").matches) closeMenu();
  });
}

// Animação progressiva; se IntersectionObserver não existir, o conteúdo continua visível.
const revealElements = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

// Ano automático no rodapé.
const yearElement = document.querySelector("#current-year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Atalhos dos cards preenchem o serviço no formulário.
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.querySelector("#servico");
    if (serviceSelect) serviceSelect.value = link.dataset.service;
  });
});

// Formulário abre o WhatsApp com os dados preenchidos; não envia dados a um servidor.
const contactForm = document.querySelector("#whatsapp-form");
const formError = document.querySelector("#form-error");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formError) formError.textContent = "";

    const numberIsConfigured = /^55\d{10,11}$/.test(WHATSAPP_NUMBER);
    if (!numberIsConfigured) {
      if (formError) {
        formError.textContent = "O WhatsApp da clínica ainda não foi configurado. Atualize WHATSAPP_NUMBER no arquivo js/script.js.";
      }
      return;
    }

    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("nome") || "").trim();
    const service = String(formData.get("servico") || "").trim();
    const message = String(formData.get("mensagem") || "").trim();

    const text = [
      "Olá! Gostaria de informações sobre atendimento odontológico.",
      `Nome: ${name}`,
      `Assunto: ${service}`,
      message ? `Mensagem: ${message}` : ""
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}
