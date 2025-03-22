document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const buttonContainer = document.querySelector(".button-container");
  const socialContainer = document.querySelector(".social-login-icons");
  const contenedorTransparentePrincipal = document.querySelector(".contenedorTransparentePrincipal");
  
  const socialIcons = document.querySelectorAll(".icon svg");
  // Verificar el tema almacenado en localStorage (invertido)
  const currentTheme = localStorage.getItem("theme") === "light" ? "dark" : "light";

  function updateButtonContainer(isDark) {
    if (isDark) {
      buttonContainer.style.backgroundColor = "rgba(0, 0, 0, 0.26)";
      buttonContainer.style.border = "solid 2px rgba(0, 0, 0, 0.38)";
      socialContainer.style.backgroundColor = "rgba(0, 0, 0, 0.26)";
      socialContainer.style.border = "solid 2px rgba(0, 0, 0, 0.38)";
      contenedorTransparentePrincipal.style.backgroundColor = "rgba(255, 255, 255, 0.34)";

      socialIcons.forEach(icon => icon.style.fill = "#000000");
    } else {
      buttonContainer.style.backgroundColor = "rgba(255, 255, 255, 0.123)";
      buttonContainer.style.border = "solid 2px rgba(255, 255, 255, 0.123)";
      socialContainer.style.backgroundColor = "rgba(255, 255, 255, 0.123)";
      socialContainer.style.border = "solid 2px rgba(255, 255, 255, 0.123)";
      contenedorTransparentePrincipal.style.backgroundColor = "rgba(0, 0, 0, 0.57)";
      socialIcons.forEach(icon => icon.style.fill = "#ffffff");
    }
  }

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = false;
    updateButtonContainer(true);
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.checked = true;
    updateButtonContainer(false);
  }

  // Evento de cambio de tema
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "dark"); // Guardar el valor invertido
      updateButtonContainer(false);
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "light"); // Guardar el valor invertido
      updateButtonContainer(true);
    }
  });
  
});



function getDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/ipad|tablet|macintosh/.test(userAgent) && 'ontouchend' in document) {
    return "tablet"; // Detecta iPads y otros tablets
  } else if (/iphone|android/i.test(userAgent)) {
    return "mobile"; // Detecta móviles
  }

  return "desktop"; // Si no es tablet ni móvil, es escritorio
}

// Obtener el tema guardado en localStorage (por defecto blanco)
const theme = localStorage.getItem("theme") || "dark";
const colorPrimary = theme === "dark" ? "#ffffff" : "#000000";
const colorSecondary = theme === "dark" ? "#000000" : "#ffffff";



const configDesktop = {
  particles: {
    number: { value: 190, density: { enable: false, value_area: 800 } },
    color: { value: colorPrimary },
    shape: { type: "circle", stroke: { width: 0, color: colorSecondary }, polygon: { nb_sides: 4 } },
    opacity: { value: 1, random: true },
    size: { value: 6, random: true },
    line_linked: { enable: true, distance: 100, color: colorPrimary, opacity: 0.545, width: 1 },
    move: { enable: true, speed: 1, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" }
    },
    modes: {
      grab: { distance: 146, line_linked: { opacity: 1 } },
      repulse: { distance: 186, duration: 0.4 }
    }
  },
  retina_detect: true
};

const configTablet = {
  particles: {
    number: { value: 110, density: { enable: false, value_area: 800 } },
    color: { value: colorPrimary },
    shape: { type: "circle", stroke: { width: 0, color: colorSecondary }, polygon: { nb_sides: 4 } },
    opacity: { value: 0.9, random: true },
    size: { value: 5, random: true },
    line_linked: { enable: true, distance: 80, color: colorPrimary, opacity: 0.4, width: 1 },
    move: { enable: true, speed: 0.8, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false }, // No usar 'grab' en touch devices, puede generar problemas
      onclick: { enable: true, mode: "repulse" }, // Mantener la interacción para click
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 }
    }
  },
  retina_detect: true
};

const configMobile = {
  particles: {
    number: { value: 91, density: { enable: false, value_area: 800 } },
    color: { value: colorPrimary },
    shape: { type: "circle", stroke: { width: 0, color: colorSecondary }, polygon: { nb_sides: 4 } },
    opacity: { value: 1, random: true },
    size: { value: 6, random: true },
    line_linked: { enable: true, distance: 100, color: colorPrimary, opacity: 0.545, width: 1 },
    move: { enable: true, speed: 1, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false }, // No usar 'grab' en touch devices, puede generar problemas
      onclick: { enable: true, mode: "repulse" }, // Mantener la interacción para click
    },
    modes: {
      repulse: { distance: 90, duration: 0.4 }
    }
  },
  retina_detect: true
};

// Obtener tipo de dispositivo y cargar configuración adecuada
const deviceType = getDeviceType();
const selectedConfig = deviceType === "tablet" ? configTablet : deviceType === "mobile" ? configMobile : configDesktop;

particlesJS('particles-js', selectedConfig);

function changeBackgroundColor(theme) {
  const particlesJsElement = document.getElementById('particles-js');
  if (theme === "dark") {
    particlesJsElement.style.backgroundColor = "#ffffff";
  } else {
    particlesJsElement.style.backgroundColor = "#000000";
  }
}

// Obtener el tema guardado en localStorage (invertido)
const theme1 = localStorage.getItem("theme") === "light" ? "dark" : "light";

// Cambiar fondo al cargar según el tema guardado
changeBackgroundColor(theme1);

// Agregar botón para cambiar de tema
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  // Leer el tema actual desde localStorage
  let theme = localStorage.getItem("theme") || "dark";

  // Cambiar el tema a lo opuesto
  const newTheme = theme === "light" ? "dark" : "light";

  // Guardar el tema invertido en el localStorage
  localStorage.setItem("theme", newTheme);

  // Actualizar el tema visualmente
  document.documentElement.setAttribute('data-theme', newTheme);

  // Cambiar el fondo de #particles-js
  changeBackgroundColor(newTheme);

  // Recargar la página para aplicar los cambios
  location.reload();
});
