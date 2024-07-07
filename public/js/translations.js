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

function translateCookies() {
  const locale = fetchLocaleStoredData();
  const frame = document.querySelector(".politica-cookies");
  if (frame) {
    frame.innerHTML =
      locale == "es"
        ? `
          <h5>Política de Cookies</h5>
          <div class="politica-cookies__content">
            <h5>¿Qué son las Cookies?</h5>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo cuando visitas un sitio web. Se utilizan ampliamente
              para que los sitios web funcionen de manera eficiente y
              proporcionen información a los propietarios del sitio.
            </p>
            <h5>¿Cómo Utilizamos las Cookies?</h5>
            <p>
              Utilizamos cookies en nuestro sitio web
              https://www.cuina-santcugat.com con el fin de mejorar tu
              experiencia de usuario y recopilar información sobre cómo
              interactúas con nuestro sitio. Esto nos ayuda a personalizar tu
              experiencia y a mejorar nuestra web continuamente.
            </p>
            <h5>Tipos de Cookies que Utilizamos</h5>
            <ul>
              <li>
                Cookies Esenciales: Estas cookies son necesarias para que
                nuestro sitio web funcione correctamente. Nos permiten recordar
                tus preferencias de cookies y garantizar la seguridad del sitio.
              </li>
              <li>
                Cookies de Funcionalidad: Estas cookies nos permiten recordar
                tus preferencias de usuario, como tu idioma preferido o la
                región en la que te encuentras, para que podamos proporcionarte
                una experiencia más personalizada.
              </li>
              <li>
                Cookies de Análisis: Utilizamos cookies de terceros, como Google
                Analytics, para recopilar información sobre cómo utilizas
                nuestro sitio web. Esta información se utiliza para analizar
                tendencias, administrar el sitio, realizar un seguimiento del
                movimiento del usuario en nuestra web y recopilar información
                demográfica general sobre nuestros usuarios.
              </li>
            </ul>
            <h5>Control de Cookies</h5>
            <p>
              Puedes controlar y gestionar el uso de cookies en tu navegador.
              Ten en cuenta que deshabilitar ciertas cookies puede afectar la
              funcionalidad de nuestro sitio web y limitar tu experiencia como
              usuario.
            </p>
            <h5>Cambios en Nuestra Política de Cookies</h5>
            <p>
              Podemos actualizar nuestra Política de Cookies de vez en cuando.
              Te notificaremos cualquier cambio publicando la nueva Política de
              Cookies en esta página.
            </p>

            <h5>Contacto</h5>
            <p>
              Si tienes alguna pregunta sobre nuestra Política de Cookies, por
              favor contáctanos a través de comunicación@cuina-santcugat.com. Al
              utilizar nuestra web, aceptas el uso de cookies de acuerdo con
              esta Política de Cookies.
            </p>
          </div>
        `
        : `
          <h5>Política de Cookies</h5>
<div class="politica-cookies__content">
  <h5>Què són les Cookies?</h5>
  <p>
    Les cookies són petits fitxers de text que s'emmagatzemen en el teu
    dispositiu quan visites un lloc web. S'utilitzen àmpliament
    perquè els llocs web funcionin de manera eficient i
    proporcionin informació als propietaris del lloc.
  </p>
  <h5>Com Utilitzem les Cookies?</h5>
  <p>
    Utilitzem cookies al nostre lloc web
    https://www.cuina-santcugat.com amb la finalitat de millorar la teva
    experiència d'usuari i recopilar informació sobre com
    interactues amb el nostre lloc. Això ens ajuda a personalitzar la teva
    experiència i a millorar la nostra web contínuament.
  </p>
  <h5>Tipus de Cookies que Utilitzem</h5>
  <ul>
    <li>
      Cookies Essencials: Aquestes cookies són necessàries perquè
      el nostre lloc web funcioni correctament. Ens permeten recordar
      les teves preferències de cookies i garantir la seguretat del lloc.
    </li>
    <li>
      Cookies de Funcionalitat: Aquestes cookies ens permeten recordar
      les teves preferències d'usuari, com el teu idioma preferit o la
      regió en què et trobes, perquè puguem proporcionar-te
      una experiència més personalitzada.
    </li>
    <li>
      Cookies d'Anàlisi: Utilitzem cookies de tercers, com Google
      Analytics, per recopilar informació sobre com utilitzes
      el nostre lloc web. Aquesta informació s'utilitza per analitzar
      tendències, administrar el lloc, fer un seguiment del
      moviment de l'usuari a la nostra web i recopilar informació
      demogràfica general sobre els nostres usuaris.
    </li>
  </ul>
  <h5>Control de Cookies</h5>
  <p>
    Pots controlar i gestionar l'ús de cookies al teu navegador.
    Tingues en compte que deshabilitar certes cookies pot afectar la
    funcionalitat del nostre lloc web i limitar la teva experiència com
    a usuari.
  </p>
  <h5>Canvis en la nostra Política de Cookies</h5>
  <p>
    Podem actualitzar la nostra Política de Cookies de tant en tant.
    Et notificarem qualsevol canvi publicant la nova Política de
    Cookies en aquesta pàgina.
  </p>

  <h5>Contacte</h5>
  <p>
    Si tens alguna pregunta sobre la nostra Política de Cookies, si us
    plau contacta'ns a través de comunicacion@cuina-santcugat.com. En
    utilitzar la nostra web, acceptes l'ús de cookies d'acord amb
    aquesta Política de Cookies.
  </p>
</div>

        `;
  }
}

function translatePrivacity() {
  const locale = fetchLocaleStoredData();
  const frame = document.querySelector(".politica-privacidad");
  if (frame) {
    frame.innerHTML =
      locale == "es"
        ? `
      <h5>Política de Privacidad</h5>
          <div class="politica-privacidad__content">
            <p>
              En Cuina Sant Pau, valoramos y respetamos tu privacidad. Esta
              Política de Privacidad describe cómo recopilamos, utilizamos y
              protegemos la información personal que nos proporcionas a través
              de nuestro sitio web https://www.cuina-santcugat.com/ (en
              adelante, el "web").
            </p>
            <h5>Recopilación de Información Personal</h5>
            <p>
              Cuando visitas nuestra web, es posible que recopilemos cierta
              información personal que nos proporcionas de forma voluntaria.
              Esto puede incluir, entre otros, tu nombre, dirección de correo
              electrónico, número de teléfono y cualquier otra información que
              decidas compartir con nosotros a través de formularios de contacto
              o reservas. Además, nuestra web puede recopilar automáticamente
              cierta información sobre tu equipo y tu navegación, como tu
              dirección IP, tipo de navegador, páginas visitadas, tiempo de
              visita y otros datos de diagnóstico. Esta información se recopila
              mediante cookies y tecnologías similares y se utiliza para mejorar
              la experiencia del usuario y analizar tendencias de uso del Sitio.
            </p>
            <h5>Uso de la Información Personal</h5>
            <p>
              La información personal que recopilamos se utiliza para los
              siguientes fines:
            </p>
            <ul>
              <li>Procesar tus solicitudes y reservas</li>
              <li>Mejorar y personalizar tu experiencia en nuestro Sitio</li>
              <li>Cumplir con nuestras obligaciones legales y regulatorias</li>
            </ul>

            <h5>Divulgación de Información Personal</h5>
            <p>
              No vendemos, alquilamos ni compartimos tu información personal con
              terceros, excepto cuando sea necesario para cumplir con nuestras
              obligaciones legales, proteger nuestros derechos, prevenir fraudes
              o garantizar la seguridad de nuestros usuarios.
            </p>
            <h5>Seguridad de la Información</h5>
            <p>
              Implementamos medidas de seguridad físicas, técnicas y
              administrativas para proteger tu información personal contra el
              acceso no autorizado, la divulgación o el uso indebido. Sin
              embargo, debes ser consciente de que ninguna medida de seguridad
              es completamente infalible.
            </p>
            <h5>Derechos del Usuario</h5>
            <p>
              Como usuario de nuestro Sitio, tienes ciertos derechos en relación
              con tus datos personales. Estos derechos incluyen:
            </p>
            <ul>
              <li>Derecho de Acceso</li>
              <li>Derecho de Rectificación</li>
              <li>Derecho de Supresión</li>
              <li>Derecho de Oposición</li>
              <li>Derecho a la Portabilidad de Datos</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, o si tienes preguntas
              sobre cómo manejamos tu información personal, no dudes en
              contactarnos (comunicacion@cuina-santcugat.com).
            </p>
            <h5>Período de Conservación de Datos</h5>
            <p>
              Conservaremos tu información personal solo durante el tiempo
              necesario para cumplir con los fines para los cuales fue
              recopilada, incluidos los fines de cumplimiento legal, resolución
              de disputas y mantenimiento de registros comerciales. El período
              de retención específico puede variar dependiendo del tipo de
              información y de los requisitos legales aplicables.
            </p>
            <h5>
              Responsabilidad de la Exactitud y Veracidad de los Datos
              Facilitados
            </h5>
            <p>
              Eres responsable de garantizar que la información personal que nos
              proporcionas sea precisa, completa y actualizada. Te pedimos que
              nos notifiques cualquier cambio en tus datos personales para que
              podamos actualizar nuestros registros y garantizar que la
              información que tenemos sobre ti sea precisa y esté actualizada.
              Si tienes alguna pregunta o inquietud sobre la precisión de tus
              datos personales o necesitas actualizar tu información, no dudes
              en contactarnos.
            </p>
            <h5>Enlaces a Otros Sitios Web</h5>
            <p>
              Nuestra web puede contener enlaces a sitios web de terceros que no
              están bajo nuestro control. No somos responsables de las prácticas
              de privacidad o el contenido de estos sitios web. Te recomendamos
              revisar las políticas de privacidad de dichos sitios antes de
              proporcionarles cualquier información personal.
            </p>
            <h5>Cambios en esta Política de Privacidad</h5>
            <p>
              Nos reservamos el derecho de actualizar esta Política de
              Privacidad en cualquier momento y sin previo aviso. Te
              recomendamos revisar periódicamente esta página para estar al
              tanto de cualquier cambio. El uso continuado de nuestra web
              después de la publicación de cambios en esta Política de
              Privacidad constituirá tu aceptación de dichos cambios.
            </p>
            <h5>Contacto</h5>
            <p>
              Si tienes alguna pregunta o inquietud sobre esta Política de
              Privacidad o sobre nuestras prácticas de privacidad, no dudes en
              contactarnos enviando un email a comunicacion@cuina-santcugat.com
            </p>
            <b>Última actualización: 7 de julio de 2024</b>
          </div>
    `
        : `
    <h5>Política de Privacitat</h5>
<div class="politica-privacidad__content">
  <p>
    A Cuina Sant Pau, valorem i respectem la teva privacitat. Aquesta
    Política de Privacitat descriu com recopilem, utilitzem i
    protegim la informació personal que ens proporciones a través
    del nostre lloc web https://www.cuina-santcugat.com/ (d'ara endavant, el "web").
  </p>
  <h5>Recopilació d'Informació Personal</h5>
  <p>
    Quan visites la nostra web, és possible que recopilem certa
    informació personal que ens proporciones de forma voluntària.
    Això pot incloure, entre d'altres, el teu nom, adreça de correu
    electrònic, número de telèfon i qualsevol altra informació que
    decideixis compartir amb nosaltres a través de formularis de contacte
    o reserves. A més, la nostra web pot recopilar automàticament
    certa informació sobre el teu equip i la teva navegació, com la teva
    adreça IP, tipus de navegador, pàgines visitades, temps de
    visita i altres dades de diagnòstic. Aquesta informació es recopila
    mitjançant cookies i tecnologies similars i s'utilitza per millorar
    l'experiència de l'usuari i analitzar tendències d'ús del lloc.
  </p>
  <h5>Ús de la Informació Personal</h5>
  <p>
    La informació personal que recopilem s'utilitza per als
    següents fins:
  </p>
  <ul>
    <li>Processar les teves sol·licituds i reserves</li>
    <li>Millorar i personalitzar la teva experiència al nostre lloc</li>
    <li>Complir amb les nostres obligacions legals i reguladores</li>
  </ul>

  <h5>Divulgació d'Informació Personal</h5>
  <p>
    No venem, lloguem ni compartim la teva informació personal amb
    tercers, excepte quan sigui necessari per complir amb les nostres
    obligacions legals, protegir els nostres drets, prevenir fraus
    o garantir la seguretat dels nostres usuaris.
  </p>
  <h5>Seguretat de la Informació</h5>
  <p>
    Implementem mesures de seguretat físiques, tècniques i
    administratives per protegir la teva informació personal contra l'
    accés no autoritzat, la divulgació o l'ús indegut. Tanmateix,
    has de ser conscient que cap mesura de seguretat és completament infal·lible.
  </p>
  <h5>Drets de l'Usuari</h5>
  <p>
    Com a usuari del nostre lloc, tens certs drets en relació
    amb les teves dades personals. Aquests drets inclouen:
  </p>
  <ul>
    <li>Dret d'Accés</li>
    <li>Dret de Rectificació</li>
    <li>Dret de Supressió</li>
    <li>Dret d'Oposició</li>
    <li>Dret a la Portabilitat de Dades</li>
  </ul>
  <p>
    Per exercir qualsevol d'aquests drets, o si tens preguntes
    sobre com gestionem la teva informació personal, no dubtis a
    contactar-nos (comunicacion@cuina-santcugat.com).
  </p>
  <h5>Període de Conservació de Dades</h5>
  <p>
    Conservarem la teva informació personal només durant el temps
    necessari per complir amb els fins per als quals va ser
    recopilada, inclosos els fins de compliment legal, resolució
    de disputes i manteniment de registres comercials. El període
    de retenció específic pot variar segons el tipus d'
    informació i els requisits legals aplicables.
  </p>
  <h5>
    Responsabilitat de l'Exactitud i Veracitat de les Dades
    Facilitades
  </h5>
  <p>
    Ets responsable de garantir que la informació personal que ens
    proporciones sigui precisa, completa i actualitzada. Et demanem que
    ens notifiquis qualsevol canvi en les teves dades personals perquè
    puguem actualitzar els nostres registres i garantir que la
    informació que tenim sobre tu sigui precisa i estigui actualitzada.
    Si tens alguna pregunta o preocupació sobre l'exactitud de les
    teves dades personals o necessites actualitzar la teva informació, no dubtis
    a contactar-nos.
  </p>
  <h5>Enllaços a Altres Llocs Web</h5>
  <p>
    La nostra web pot contenir enllaços a llocs web de tercers que no
    estan sota el nostre control. No som responsables de les pràctiques
    de privacitat o el contingut d'aquests llocs web. Et recomanem
    revisar les polítiques de privacitat d'aquests llocs abans de
    proporcionar-los qualsevol informació personal.
  </p>
  <h5>Canvis en aquesta Política de Privacitat</h5>
  <p>
    Ens reservem el dret d'actualitzar aquesta Política de
    Privacitat en qualsevol moment i sense previ avís. Et
    recomanem revisar periòdicament aquesta pàgina per estar al
    corrent de qualsevol canvi. L'ús continuat de la nostra web
    després de la publicació de canvis en aquesta Política de
    Privacitat constituirà la teva acceptació d'aquests canvis.
  </p>
  <h5>Contacte</h5>
  <p>
    Si tens alguna pregunta o preocupació sobre aquesta Política de
    Privacitat o sobre les nostres pràctiques de privacitat, no dubtis a
    contactar-nos enviant un correu electrònic a comunicacion@cuina-santcugat.com
  </p>
  <b>Última actualització: 7 de juliol de 2024</b>
</div>

    `;
  }
}

function translateAvisoLegal() {
  const locale = fetchLocaleStoredData();
  const frame = document.querySelector(".aviso-legal");
  if (frame) {
    frame.innerHTML =
      locale == "es"
        ? `
      <h5>Aviso Legal</h5>
          <div class="aviso-legal__content">
            <p>
              En cumplimiento con el deber de información establecido en la Ley
              34/2002, de Servicios de la Sociedad de la Información y del
              Comercio Electrónico (LSSICE), a continuación, se indican los
              datos de información general de este sitio web:
            </p>
            <ul>
              <li>Titular: Cuina Sant Cugat S.C.P</li>
              <li>Domicilio social: Calle Sant Bonaventura, 6, Sant Cugat</li>
              <li>Contacto: comunicacion@cuina-santcugat.cat</li>
              <li>Teléfono: 937 93 23 35</li>
            </ul>
            <h5>Propiedad intelectual e industrial</h5>
            <p>
              Todos los derechos de propiedad intelectual e industrial del sitio
              web y de los elementos contenidos en el mismo, incluyendo, pero no
              limitándose a, marcas, logotipos, nombres comerciales, textos,
              imágenes, gráficos, diseños, sonidos, bases de datos, código
              fuente, estructura de navegación, y demás elementos susceptibles
              de protección, son propiedad del titular del sitio web o de
              terceros que han autorizado su uso. El acceso al sitio web no
              implica cesión de dichos derechos. Queda prohibida cualquier
              reproducción, distribución, comunicación pública, transformación o
              cualquier otra forma de explotación, total o parcial, de los
              contenidos del sitio web, salvo autorización expresa del titular
              del sitio web.
            </p>
            <h5>Responsabilidad</h5>
            <p>
              El titular del sitio web no se hace responsable del uso indebido
              que se realice de los contenidos del sitio web, siendo exclusiva
              responsabilidad de la persona que accede a ellos o los utiliza.
            </p>
            <h5>Links</h5>
            <p>
              El sitio web puede incluir enlaces a otros sitios web que no son
              propiedad del titular de este. No nos hacemos responsables de la
              disponibilidad ni de los contenidos de dichos sitios web, ni de
              cualquier daño o pérdida que pueda surgir por el uso de los
              mismos.
            </p>
            <h5>Legislación aplicable y jurisdicción</h5>
            <p>
              Este aviso legal se rige por la legislación española. En caso de
              disputa o controversia relacionada con el sitio web, las partes se
              someten a la jurisdicción de los tribunales español.
            </p>
            <h5>Actualización del aviso legal</h5>
            <p>
              El titular del sitio web se reserva el derecho a modificar este
              aviso legal en cualquier momento y sin previo aviso, por lo que se
              recomienda su revisión periódica.
            </p>
          </div>
    `
        : `
    <h5>Avís Legal</h5>
<div class="aviso-legal__content">
  <p>
    En compliment del deure d'informació establert per la Llei 34/2002, de Serveis de la Societat de la Informació i del Comerç Electrònic (LSSICE), a continuació, s'indiquen les dades d'informació general d'aquest lloc web:
  </p>
  <ul>
    <li>Titular: Cuina Sant Cugat S.C.P</li>
    <li>Domicili social: Carrer Sant Bonaventura, 6, Sant Cugat</li>
    <li>Contacte: comunicacion@cuina-santcugat.cat</li>
    <li>Telèfon: 937 93 23 35</li>
  </ul>
  <h5>Propietat intel·lectual i industrial</h5>
  <p>
    Tots els drets de propietat intel·lectual i industrial del lloc web i dels elements que conté, incloent-hi, però no limitant-se a, marques, logotips, noms comercials, textos, imatges, gràfics, dissenys, sons, bases de dades, codi font, estructura de navegació, i altres elements susceptibles de protecció, són propietat del titular del lloc web o de tercers que n'han autoritzat l'ús. L'accés al lloc web no implica cessió d'aquests drets. Queda prohibida qualsevol reproducció, distribució, comunicació pública, transformació o qualsevol altra forma d'explotació, total o parcial, dels continguts del lloc web, excepte autorització expressa del titular del lloc web.
  </p>
  <h5>Responsabilitat</h5>
  <p>
    El titular del lloc web no es fa responsable de l'ús inadequat que es faci dels continguts del lloc web, sent l'exclusiva responsabilitat de la persona que hi accedeix o els utilitza.
  </p>
  <h5>Enllaços</h5>
  <p>
    El lloc web pot incloure enllaços a altres llocs web que no són propietat del titular d'aquest. No ens fem responsables de la disponibilitat ni dels continguts d'aquests llocs web, ni de qualsevol dany o pèrdua que pugui sorgir per l'ús dels mateixos.
  </p>
  <h5>Legislació aplicable i jurisdicció</h5>
  <p>
    Aquest avís legal es regeix per la legislació espanyola. En cas de disputa o controvèrsia relacionada amb el lloc web, les parts se sotmeten a la jurisdicció dels tribunals espanyols.
  </p>
  <h5>Actualització de l'avís legal</h5>
  <p>
    El titular del lloc web es reserva el dret de modificar aquest avís legal en qualsevol moment i sense previ avís, per la qual cosa es recomana la seva revisió periòdica.
  </p>
</div>

    `;
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
      '<a href="tel:937932335" taget="_blank">' +
      (locale == "es" ? "Teléfono" : "Telèfon") +
      ": 937 93 23 35" +
      "</a>";
    contact.innerHTML =
      '<a href="mailto:comunicacion@cuina-santcugat.cat" taget="_blank">' +
      (locale == "es" ? "Contacto" : "Contacte") +
      ": comunicacion@cuina-santcugat.cat" +
      "</a>";
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
  translateAvisoLegal();
  translatePrivacity();
  translateCookies();
});
