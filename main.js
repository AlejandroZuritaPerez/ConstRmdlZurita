// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Mostrar alerta de cookies si no ha sido aceptada
  if (!localStorage.getItem("cookiesAccepted")) {
    const cookieBanner = document.createElement("div");
    cookieBanner.style.position = "fixed";
    cookieBanner.style.bottom = "0";
    cookieBanner.style.left = "0";
    cookieBanner.style.right = "0";
    cookieBanner.style.backgroundColor = "#004080";
    cookieBanner.style.color = "white";
    cookieBanner.style.padding = "10px";
    cookieBanner.style.textAlign = "center";
    cookieBanner.style.zIndex = "1000";
    cookieBanner.innerHTML = `
      Este sitio utiliza cookies para mejorar tu experiencia. 
      <button id="acceptCookies" style="margin-left: 15px; padding: 5px 10px; background-color: #f0c040; border: none; cursor: pointer; font-weight: bold;">Aceptar</button>
    `;
    document.body.appendChild(cookieBanner);

    document.getElementById("acceptCookies").addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", true);
      cookieBanner.remove();
    });
  }

  // Validación básica del formulario de contacto
  const contactoForm = document.querySelector("form");
  if (contactoForm) {
    contactoForm.addEventListener("submit", (e) => {
      const nombre = contactoForm.querySelector("input[name='nombre']").value.trim();
      const correo = contactoForm.querySelector("input[name='correo']").value.trim();
      const mensaje = contactoForm.querySelector("textarea[name='mensaje']").value.trim();

      if (!nombre || !correo || !mensaje) {
        alert("Por favor completa todos los campos antes de enviar el formulario.");
        e.preventDefault();
      }
    });
  }
});
