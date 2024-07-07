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
            <a href="./politica-de-privacidad">Política de privacidad</a>
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
                'Utilizamos cookies para garantizar las funcionalidades básicas del sitio web y mejorar su experiencia en línea. Puede elegir por cada categoría si acepta o no. Para obtener más detalles relacionados con las cookies y otros datos confidenciales, lea el artículo completo. <a href="./politica-de-privacidad" class="cc__link">Política de privacidad</a>.',
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
