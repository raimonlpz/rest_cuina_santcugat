function fetchLocaleStoredData() {
  const locale = window.localStorage.getItem("locale");
  if (locale) {
    return locale;
  }
  return "es";
}

async function fetchConfig() {
  const response = await fetch("/config");
  const config = await response.json();
  return config;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchConfig().then(async (config) => {
    window.API_URL = config.API_URL;
    window.API_TOKEN = config.API_TOKEN;

    const locale = fetchLocaleStoredData();

    const home = await fetchHome(locale);
    const menu = await fetchMenu(locale);
    const opening = await fetchOpening(locale);
    const address = await fetchAddress(locale);
    const experience = await fetchExperience(locale);
    const gallery = await fetchGallery();

    window.HOME_DATA = home.attributes;
    window.MENU_DATA = menu;
    window.OPENING_DATA = opening[0].attributes;
    window.ADDRESS_DATA = address.attributes;
    window.EXPERIENCE_DATA = experience.attributes;
    window.GALLERY_DATA = gallery.attributes;

    populateHomeData();
    populateExperienceData();
    populateOpeningData();
    populateAddressData();
    populateMenuData();
    populateGalleryData();

    document.body.classList.remove("loading");
  });

  const localeCta = document.querySelector("#locale");
  const currentLocale = fetchLocaleStoredData();
  if (currentLocale === "ca") {
    localeCta.innerHTML = `
      ES / <span style="color: orange; opacity: 0.85;">CA</span>
    `;
  } else {
    localeCta.innerHTML = `
     <span style="color: orange; opacity: 0.85">ES</span> / CA
    `;
  }

  localeCta.addEventListener("click", () => {
    const currentLocale = fetchLocaleStoredData();
    if (currentLocale === "es") {
      window.localStorage.setItem("locale", "ca");
    } else {
      window.localStorage.setItem("locale", "es");
    }
    window.location.reload();
  });
});
