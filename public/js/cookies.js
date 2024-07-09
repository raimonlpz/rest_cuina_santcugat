function fetchLocaleStoredData() {
  const locale = window.localStorage.getItem("locale");
  if (locale) {
    return locale;
  }
  return "es";
}

document.addEventListener("DOMContentLoaded", () => {
  const locale = fetchLocaleStoredData();
  if (locale == "es") {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "left",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          readOnly: true,
          enabled: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^(_ga|_gid)/,
              },
            ],
          },
        },
      },
      language: {
        default: "es",
        translations: {
          es: {
            consentModal: {
              title: "¡Es hora de las Cookies!",
              description:
                'Nuestro sitio web utiliza cookies de seguimiento para comprender cómo interactúa con él. El seguimiento se habilitará sólo si acepta explícitamente. <a href="#" data-cc="show-preferencesModal" class="cc__link">Manejar preferencias</a>',
              acceptAllBtn: "Aceptar todo",
              acceptNecessaryBtn: "Rechazar todo",
              showPreferencesBtn: "Manejar preferencias",
              //closeIconLabel: 'Close',
              footer: `
                <a href="./politica-de-privacidad" id="privacity">Política de privacidad</a>
                `,
            },
            preferencesModal: {
              title: "Preferencias de las Cookies",
              acceptAllBtn: "Aceptar todo",
              acceptNecessaryBtn: "Rechazar todo",
              savePreferencesBtn: "Guardar preferencias",
              closeIconLabel: "Cerrar",
              sections: [
                {
                  title: "Uso de las Cookies",
                  description:
                    'Utilizamos cookies para garantizar las funcionalidades básicas del sitio web y mejorar su experiencia en línea. Puede elegir por cada categoría si acepta o no. Para obtener más detalles relacionados con las cookies y otros datos confidenciales, lea el artículo completo. <a href="./politica-de-privacidad" id="privacity" class="cc__link">Política de privacidad</a>.',
                },
                {
                  title: "Cookies estrictamente necesarias",
                  description:
                    "Almacenamos en el navegador sus preferencias de idioma relacionadas con el contenido del sitio web para su uso futuro.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Más información",
                  description:
                    'Para cualquier consulta en relación con nuestra política de cookies y sus opciones, por favor <a class="cc__link" href="mailto:comunicacion@cuina-santcugat.cat">contáctanos</a>.',
                },
              ],
            },
          },
        },
      },
    });
  } else {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "left",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          readOnly: true,
          enabled: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^(_ga|_gid)/,
              },
            ],
          },
        },
      },
      language: {
        default: "ca",
        translations: {
          ca: {
            consentModal: {
              title: "És l'hora de les Cookies!",
              description:
                'El nostre lloc web utilitza cookies de seguiment per entendre com interactua amb ell. El seguiment s\'habilitarà només si accepta explícitament. <a href="#" data-cc="show-preferencesModal" class="cc__link">Gestionar preferències</a>',
              acceptAllBtn: "Acceptar tot",
              acceptNecessaryBtn: "Rebutjar tot",
              showPreferencesBtn: "Gestionar preferències",
              //closeIconLabel: 'Close',
              footer: `
                <a href="./politica-de-privacidad" id="privacity">Política de privacitat</a>
                `,
            },
            preferencesModal: {
              title: "Preferències de les Cookies",
              acceptAllBtn: "Acceptar tot",
              acceptNecessaryBtn: "Rebutjar tot",
              savePreferencesBtn: "Desar preferències",
              closeIconLabel: "Tancar",
              sections: [
                {
                  title: "Ús de les Cookies",
                  description:
                    'Utilitzem cookies per garantir les funcionalitats bàsiques del lloc web i millorar la seva experiència en línia. Podeu triar per cada categoria si accepteu o no. Per obtenir més detalls relacionats amb les cookies i altres dades confidencials, llegiu l\'article complet. <a href="./politica-de-privacidad" id="privacity" class="cc__link">Política de privacitat</a>.',
                },
                {
                  title: "Cookies estrictament necessàries",
                  description:
                    "Emmagatzemem al navegador les seves preferències d'idioma relacionades amb el contingut del lloc web per a ús futur.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Més informació",
                  description:
                    'Per a qualsevol consulta en relació amb la nostra política de cookies i les seves opcions, si us plau <a class="cc__link" href="mailto:comunicacion@cuina-santcugat.cat">contacteu-nos</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }
});
