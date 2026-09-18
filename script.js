document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const active = menu.classList.toggle("active");
      toggle.textContent = active ? "✕" : "☰";
      toggle.setAttribute("aria-expanded", String(active));
      toggle.setAttribute("aria-label", active ? "Close navigation" : "Open navigation");
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        toggle.textContent = "☰";
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
      });
    });

    document.addEventListener("click", event => {
      if (window.innerWidth <= 760 && !menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove("active");
        toggle.textContent = "☰";
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});

