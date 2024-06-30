async function fetchConfig() {
  const response = await fetch("/config");
  const config = await response.json();
  return config;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchConfig().then(async (config) => {
    window.API_URL = config.API_URL;
    window.API_TOKEN = config.API_TOKEN;
    const home = await fetchHome();
    const menu = await fetchMenu();
    const opening = await fetchOpening();
    const address = await fetchAddress();
    const experience = await fetchExperience();
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
});
