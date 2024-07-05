function fetchLocaleStoredData() {
  const locale = window.localStorage.getItem("locale");
  if (locale) {
    return locale;
  }
  return "es";
}

function translateHome() {
  const locale = fetchLocaleStoredData();
  const frameTitle = document.querySelector(".frame__title");
  if (frameTitle) {
    frameTitle.innerHTML =
      locale == "es"
        ? "Cuina <br/> <span>Sant Cugat</span>"
        : "Cuina <br/> <span>Sant Cugat</span>";
  }
}

function translateVisit() {
  const locale = fetchLocaleStoredData();
  const header = document.querySelector(".visit h5");
  if (header) {
    header.innerHTML = locale == "es" ? "Visítanos" : "Visita' ns";
  }
  const telf = document.querySelector("#telf");
  const contact = document.querySelector("#contact");
  if (telf && contact) {
    telf.innerHTML =
      (locale == "es" ? "Teléfono" : "Telèfon") + ": 937 60 09 50";
    contact.innerHTML =
      (locale == "es" ? "Contacto" : "Contacte") +
      ": comunicacion@cuina-santcugat.cat";
  }
}

function translateExperience() {
  const locale = fetchLocaleStoredData();
  const header = document.querySelector("#headline-experience");
  if (header) {
    header.innerHTML = locale == "es" ? "Experiencia" : "Experiència";
  }
  const headline = document.querySelector("#headline-food");
  if (headline) {
    headline.innerHTML = locale == "es" ? "La Cocina" : "La Cuina";
  }
  const menuCta = document.querySelector(".card_fork #menu");
  if (menuCta) {
    menuCta.innerHTML = locale == "es" ? "MENÚ Completo" : "MENÚ Complet";
  }
}

function translateFooter() {
  const locale = fetchLocaleStoredData();
  // Outro title
  const outroTitle = document.querySelector(".outro__title");
  if (outroTitle) {
    outroTitle.innerHTML =
      locale == "es" ? "Cocina de proximidad" : "Cuina de proximitat";
  }
  // Hours
  const hours = document.querySelector("#hours");
  if (hours) {
    hours.innerHTML = locale == "es" ? "HORARIO" : "HORARI";
  }

  // Links
  const legal = document.querySelector("#legal");
  const privacity = document.querySelector("#privacity");
  const cookies = document.querySelector("#cookies");
  if (legal && privacity && cookies) {
    legal.innerHTML = locale == "es" ? "Aviso Legal" : "Avís Legal";
    privacity.innerHTML =
      locale == "es" ? "Política de Privacidad" : "Política de Privacitat";
    cookies.innerHTML =
      locale == "es" ? "Política de Cookies" : "Política de Galetes";
  }

  // Logo
  const logoRest = document.querySelector(".card_logo");
  if (logoRest) {
    logoRest.innerHTML =
      locale == "es"
        ? `
          Cuina <br />
          <span>Sant Cugat</span>
        `
        : `
            Cuina <br />
            <span>Sant Cugat</span>
        `;
  }
}

function translateNavMenus() {
  const locale = fetchLocaleStoredData();
  // HOME
  const home = document.querySelector(".nav #home");
  const homeMobile = document.querySelector(".item #home");
  if (home) {
    home.innerHTML = locale == "es" ? "Inicio" : "Inici";
    homeMobile.innerHTML =
      locale == "es"
        ? `
                <p>001</p>
              <p>Inicio</p>
    `
        : `
     <p>001</p>
              <p>Inici</p>
    `;
  }

  // Experience
  const experience = document.querySelector(".nav #experience");
  const experienceMobile = document.querySelector(".item #experience");
  if (experience) {
    experience.innerHTML = locale == "es" ? "Experiencia" : "Experiència";
    experienceMobile.innerHTML =
      locale == "es"
        ? `
                <p>002</p>
              <p>Experiencia</p>
    `
        : `
     <p>002</p>
              <p>Experiència</p>
    `;
  }

  // Visit
  const visit = document.querySelector(".nav #visit");
  const visitMobile = document.querySelector(".item #visit");
  if (visit) {
    visit.innerHTML = locale == "es" ? "Visítanos" : "Visita'ns";
    visitMobile.innerHTML =
      locale == "es"
        ? `
                <p>003</p>
              <p>Visítanos</p>
    `
        : `
     <p>003</p>
              <p>Visita'ns</p>
    `;
  }

  // Menu
  const menu = document.querySelector(".nav #menu");
  const menuMobile = document.querySelector(".item #menu");
  if (menu) {
    menu.innerHTML = locale == "es" ? "La Carta" : "La Carta";
    menuMobile.innerHTML =
      locale == "es"
        ? `
              <p>004</p>
            <p>La Carta</p>
  `
        : `
   <p>004</p>
            <p>La Carta</p>
  `;
  }

  // Galeria
  const galeria = document.querySelector(".nav #gallery");
  const galeriaMobile = document.querySelector(".item #gallery");
  if (galeria) {
    galeria.innerHTML = locale == "es" ? "Galería" : "Galeria";
    galeriaMobile.innerHTML =
      locale == "es"
        ? `
              <p>005</p>
            <p>Galería</p>
  `
        : `
   <p>005</p>
            <p>Galeria</p>
  `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  translateHome();
  translateNavMenus();
  translateFooter();
  translateExperience();
  translateVisit();
});
