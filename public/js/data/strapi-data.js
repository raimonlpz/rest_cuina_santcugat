function fetchLocaleStoredData() {
  const locale = window.localStorage.getItem("locale");
  if (locale) {
    return locale;
  }
  return "es";
}

function populateOpeningData() {
  const data = window.OPENING_DATA;
  const locale = fetchLocaleStoredData();

  if (!data) return;
  const cardHoursFooter = document.querySelectorAll(".card_hours");
  cardHoursFooter.forEach((c) => {
    c.innerHTML = `
        <span>${locale == "es" ? "HORARIO" : "HORARI"}</span>
        <span>${data.day_range}</span>
        <span>${data.hour_range_first}</span>
        <span>${data.hour_range_last}</span>
    `;
  });
}

function populateAddressData() {
  const data = window.ADDRESS_DATA;
  if (!data) return;
  const cardAddressFooter = document.querySelectorAll(".card_address");
  cardAddressFooter.forEach((c) => {
    c.innerHTML = `
      <span>${data.dir}</span>
      <span>${data.city}</span>
  `;
  });
}

function populateHomeData() {
  const data = window.HOME_DATA;
  const url = window.API_URL;

  for (let i = 1; i < 6; i++) {
    injectImgSlider(data, url, i);
  }

  const chefsOverview = document.querySelector(".chefs-overview");
  if (chefsOverview) {
    chefsOverview.innerHTML = data.chefs_block.overview;
  }
  const chefMurilo = document.querySelector(".murilo p");
  if (chefMurilo) {
    chefMurilo.innerHTML = data.chefs_block.murilo;
  }
  const chefRaul = document.querySelector(".raul p");
  if (chefRaul) {
    chefRaul.innerHTML = data.chefs_block.raul;
  }
}

function injectImgSlider(data, url, index) {
  const slide = document.querySelector(`#slide${index}`);
  if (slide) {
    slide.style.backgroundImage = `
      url(${url}${data[`slide_${index}`].data.attributes.url})
  `.replace("/api/", "");
  }
}

function populateGalleryData() {
  const data = window.GALLERY_DATA;
  const url = window.API_URL;
  for (let i = 0; i < 11; i++) {
    injectImgGallery(data, url, i);
  }

  const gallerySlideshow = document.querySelector(".gallery__slideshow");
  if (!gallerySlideshow) return;
  data.repository.data.forEach((r) => {
    gallerySlideshow.innerHTML += `
        <img src="${(url + r.attributes.url).replace("/api/", "")}" alt="${
      r.attributes.name
    }">
    `;
  });
}

function injectImgGallery(data, url, index) {
  const grid = document.querySelector(`#grid${index}`);
  if (grid) {
    grid.style.backgroundImage = `
      url(${url}${data[`grid_${index}`].data.attributes.formats.medium.url})
  `.replace("/api/", "");
  }
}

function populateExperienceData() {
  const data = window.EXPERIENCE_DATA;
  const url = window.API_URL;

  if (!data) return;
  const blocks = data.experience_block.reduce((acc, d) => {
    const groupIndex = (d.id - 1) % 3; // Change the modulo base if groups per 3.
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(d);
    return acc;
  }, []);

  // Get the first elements from each group
  const b1 = blocks[0] ? blocks[0][0] : null;
  const b2 = blocks[1] ? blocks[1][0] : null;
  const b3 = blocks[2] ? blocks[2][0] : null;

  // Block1 Img
  const block1_img = `${url}${data.block1_img.data[0].attributes.url}`.replace(
    "/api/",
    ""
  );
  const block1_img_container = document.querySelector("#block1_img");
  if (block1_img_container) {
    block1_img_container.src = block1_img;
  }

  // Fullwidth
  const fullwidth_img =
    `${url}${data.fullwidth_img.data[0].attributes.url}`.replace("/api/", "");
  const fullwidth_img_container = document.querySelector("#fullwidth_img");
  if (fullwidth_img_container) {
    fullwidth_img_container.src = fullwidth_img;
  }

  // Block2 Img1, Img2, Img3
  const block2_img1_container = document.querySelector("#block2_img1");
  const block2_img2_container = document.querySelector("#block2_img2");
  const block2_img3_container = document.querySelector("#block2_img3");
  const block2_img1 =
    `${url}${data.block2_img1.data[0].attributes.url}`.replace("/api/", "");
  const block2_img2 =
    `${url}${data.block2_img2.data[0].attributes.url}`.replace("/api/", "");
  const block2_img3 =
    `${url}${data.block2_img3.data[0].attributes.url}`.replace("/api/", "");
  if (block2_img1_container) {
    block2_img1_container.src = block2_img1;
  }
  if (block2_img2_container) {
    block2_img2_container.src = block2_img2;
  }
  if (block2_img3_container) {
    block2_img3_container.src = block2_img3;
  }

  const block1 = document.querySelector("#block1");
  const block2 = document.querySelector("#block2");
  const block3 = document.querySelector("#block3");
  if (block1) {
    block1.innerHTML = `
        <span>
            ${b1.title}
        </span>
        <p>
            ${b1.content}
        </p>
         <div class="card">
            <div class="card_fork">
               <div class="tf-widget-button" style="width: max-content;">
                  <a
                    class="tf-button-link"
                    href="https://widget.thefork.com/es/6339224a-7ba9-4c8e-97f8-1bd453941c7f?lang=es"
                    target="_blank"
                    rel="noopener"
                    >RESERVA</a
                  >
              </div>
            </div>
        </div>
    `;
  }
  if (block2) {
    block2.innerHTML = `
         <span>${b2.title}</span>
        <p>
            ${b2.content}
        </p>
    `;
  }
  if (block3) {
    block3.innerHTML = `
        <span>${b3.title}</span>
        <p>
            ${b3.content}
        </p>
    `;
  }
}

function populateMenuData() {
  const data = window.MENU_DATA;
  if (!data) return;

  const locale = fetchLocaleStoredData();

  const shared = data.filter((d) => d.attributes.category === "shared");
  const meat = data.filter((d) => d.attributes.category === "meat");
  const sea = data.filter((d) => d.attributes.category === "sea");
  const dessert = data.filter((d) => d.attributes.category === "dessert");
  // const vegetal = data.filter((d) => d.attributes.category === "vegetal");
  const menuContent = document.querySelector(".menu_content");
  // Shared block
  if (!menuContent) return;
  menuContent.innerHTML = `
    <div class="menu__block">
        <span class="menu__heading">${
          locale === "es" ? "A compartir" : "A compartir"
        }</span>
    </div>
  `;
  shared.forEach((d) => {
    menuContent.innerHTML += `
        <div class="menu__dish">${d.attributes.name}</div>
        <div style="margin-top: .45rem; color: orange; opacity: 0.65">${d.attributes.price} € 
    </div>
    `;
  });
  // Sea block
  menuContent.innerHTML += `
    <div class="menu__block">
        <span class="menu__heading">Mar</span>
    </div>
  `;
  sea.forEach((d) => {
    menuContent.innerHTML += `
      <div class="menu__dish">${d.attributes.name}</div>
        <div style="margin-top: .45rem; color: orange; opacity: 0.65">${d.attributes.price} € 
    </div>
`;
  });
  // Meat block
  menuContent.innerHTML += `
    <div class="menu__block">
        <span class="menu__heading">${
          locale === "es" ? "Carnes" : "Carns"
        }</span>
    </div>
  `;
  meat.forEach((d) => {
    menuContent.innerHTML += `
         <div class="menu__dish">${d.attributes.name}</div>
        <div style="margin-top: .45rem; color: orange; opacity: 0.65">${d.attributes.price} € 
    </div>
    `;
  });
  // Vegetal block
  // menuContent.innerHTML += `
  //   <div class="menu__block">
  //       <span class="menu__heading">Vegetal</span>
  //   </div>
  // `;
  // vegetal.forEach((d) => {
  //   menuContent.innerHTML += `
  //       <div class="menu__dish">${d.attributes.name} / ${d.attributes.price} €</div>
  //   `;
  // });
  // Dessert block
  menuContent.innerHTML += `
   <div class="menu__block">
       <span class="menu__heading">Postres</span>
   </div>
 `;
  dessert.forEach((d) => {
    menuContent.innerHTML += `
         <div class="menu__dish">${d.attributes.name}</div>
        <div style="margin-top: .45rem; color: orange; opacity: 0.65">${d.attributes.price} € 
    </div>
    `;
  });

  document.querySelector(".outro__title").style.display = "none";
}
