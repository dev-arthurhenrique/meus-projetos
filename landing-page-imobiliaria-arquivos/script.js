// Menu mobile
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
      });
    });

    // Animações de entrada ao rolar a página
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

    // Ano automático no rodapé
    document.querySelector("#year").textContent = new Date().getFullYear();

    // Demonstração de formulário: abre o aplicativo de e-mail do visitante.
    // Para produção, conecte o formulário a um backend ou serviço de formulários.
    document.querySelector("#contact-form").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();
      const destinatario = "contato@atelieimoveis.com.br"; // Troque pelo e-mail real.
      const numeroWhatsapp = '5582996355177'
      const textoWhatsApp = encodeURIComponent(
        `Olá! Vim pelo site.\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Mensagem:* ${mensagem}`
      )
      const urlWhatsApp = `https://wa.me/${numeroWhatsapp}?text=${textoWhatsApp}`
      window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
      const assunto = encodeURIComponent("Contato pelo site - " + nome);
      const corpo = encodeURIComponent("Nome: " + nome + "\nE-mail: " + email + "\n\nMensagem:\n" + mensagem);
      document.querySelector("#form-feedback").textContent = "Seu aplicativo de e-mail será aberto para concluir o envio.";
      window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
    });
