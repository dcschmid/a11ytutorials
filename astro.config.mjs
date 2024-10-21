import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      defaultLocale: "de",
      plugins: [starlightLinksValidator(), starlightImageZoom()],
      title: "A11Y-Tutorials",
      customCss: ["./src/styles/custom.scss"],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Schnelleinstieg in die Barrierefreiheit",
          collapsed: true,
          items: [
            "schnelleinstieg-in-die-barrierefreiheit/einleitung",
            "schnelleinstieg-in-die-barrierefreiheit/die-wesentlichen-konzepte-der-barrierefreiheit-im-web",
            "schnelleinstieg-in-die-barrierefreiheit/fuer-wen-ist-barrierefreiheit-im-internet-von-zentraler-bedeutung",
            "schnelleinstieg-in-die-barrierefreiheit/automatisierte-hilfsmittel-fuer-barrierefreiheit",
            "schnelleinstieg-in-die-barrierefreiheit/barrierefreiheit-mit-der-tastatur",
            "schnelleinstieg-in-die-barrierefreiheit/andere-eingabemethoden",
            "schnelleinstieg-in-die-barrierefreiheit/nvda-einrichten",
            "schnelleinstieg-in-die-barrierefreiheit/testen-mit-nvda",
            "schnelleinstieg-in-die-barrierefreiheit/bildschirmausrichtung",
            "schnelleinstieg-in-die-barrierefreiheit/semantische-struktur",
            "schnelleinstieg-in-die-barrierefreiheit/seiten-titel",
            "schnelleinstieg-in-die-barrierefreiheit/sprache",
            "schnelleinstieg-in-die-barrierefreiheit/orientierungspunkte",
            "schnelleinstieg-in-die-barrierefreiheit/ueberschriften",
            "schnelleinstieg-in-die-barrierefreiheit/navigation-und-links",
            "schnelleinstieg-in-die-barrierefreiheit/bilder",
            "schnelleinstieg-in-die-barrierefreiheit/daten-tabellen",
            "schnelleinstieg-in-die-barrierefreiheit/iframes",
            "schnelleinstieg-in-die-barrierefreiheit/analyse-der-barrierefreiheit-des-farbkontrasts",
            "schnelleinstieg-in-die-barrierefreiheit/multimedia",
            "schnelleinstieg-in-die-barrierefreiheit/visuelle-blinkeffekte",
            "schnelleinstieg-in-die-barrierefreiheit/formular-labels-und-instruktionen",
            "schnelleinstieg-in-die-barrierefreiheit/testen-mit-mobilen-geraeten",
            "schnelleinstieg-in-die-barrierefreiheit/accessibility-tree",
            "schnelleinstieg-in-die-barrierefreiheit/der-zweck-von-aria",
            "schnelleinstieg-in-die-barrierefreiheit/aria-komponenten-und-patterns",
            "schnelleinstieg-in-die-barrierefreiheit/native-vs-benutzerdefinierte-komponenten",
            "schnelleinstieg-in-die-barrierefreiheit/rollen",
            "schnelleinstieg-in-die-barrierefreiheit/ausblenden-oder-ueberschreiben-von-rollen",
            "schnelleinstieg-in-die-barrierefreiheit/namen-oder-labels",
            "schnelleinstieg-in-die-barrierefreiheit/beschreibungen",
            "schnelleinstieg-in-die-barrierefreiheit/werte-statische-eigenschaften",
            "schnelleinstieg-in-die-barrierefreiheit/werte-dynamische-eigenschaften-und-zustaende",
            "schnelleinstieg-in-die-barrierefreiheit/aria-hidden-versus-display-none",
            "schnelleinstieg-in-die-barrierefreiheit/aria-tastaturmuster",
            "schnelleinstieg-in-die-barrierefreiheit/aria-live",
            "schnelleinstieg-in-die-barrierefreiheit/zeitlimits",
            "schnelleinstieg-in-die-barrierefreiheit/formularvalidierung-und-feedback",
            "schnelleinstieg-in-die-barrierefreiheit/single-page-apps",
          ],
        },
        {
          label: "Grundlagen der Barrierefreiheit – Behinderungen und Richtlinien",
          collapsed: true,
          items: [
            "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/einleitung",
            {
              label: "Arten von Behinderungen: Personen",
              collapsed: true,
              items: [
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/einleitung",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/blind",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/geringes-sehvermoegen",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/farbenblind",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/gehoerlos",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/taubblinde",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/motorische-behinderungen",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/sprachbehinderungen",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/kognitive-behinderungen",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/lesebehinderungen",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/anfaelle",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/mehrfachbehinderungen",
              ],
            },
            {
              label: "Leitlinien",
              collapsed: true,
              items: [
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/leitlinien/einleitung",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/leitlinien/wcag",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/leitlinien/atag",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/leitlinien/wai-aria",
              ],
            },
            {
              label: "Gesetze",
              collapsed: true,
              items: [
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/gesetze/einleitung",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/gesetze/usa",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/gesetze/kanada",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/gesetze/europa",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/gesetze/andere-regionen",
              ],
            },
            {
              label: "Mythen und Missverständnisse über Barrierefreiheit",
              collapsed: true,
              items: [
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/einleitung",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/mythos-barrierefreiheit-kommt-nur-einer-kleine-minderheit-zugute",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/mythos-barrierefreiheit-ist-ein-kurzfristiges-projekt",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/mythos-barrierefreiheit-sollte-der-letzte-schritt-sein",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/mythos-barrierefreiheit-ist-schwierig-und-teuer",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/mythos-barrierefreiheit-ist-haesslich",
                "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/zusammenfassung",
              ],
            },
          ],
        },
        {
          label: "Entwerfen einer barrierefreien Benutzererfahrung",
          collapsed: true,
          items: [
            "entwerfen-einer-barrierefreien-benutzererfahrung/einleitung",
            {
              label: "Barrierefreiheit und inklusives Design",
              collapsed: true,
              items: [
                "entwerfen-einer-barrierefreien-benutzererfahrung/barrierefreiheit-und-inklusives-design/einleitung",
                "entwerfen-einer-barrierefreien-benutzererfahrung/barrierefreiheit-und-inklusives-design/definition-von-barrierefreiheit-als-mindestanforderung",
                "entwerfen-einer-barrierefreien-benutzererfahrung/barrierefreiheit-und-inklusives-design/7-prinzipien-des-universellen-designs",
              ],
            },
            {
              label: "Vermeiden Sie exklusive Designmuster",
              collapsed: true,
              items: [
                "entwerfen-einer-barrierefreien-benutzererfahrung/vermeiden-sie-exklusive-designmuster/einleitung",
                "entwerfen-einer-barrierefreien-benutzererfahrung/vermeiden-sie-exklusive-designmuster/annahmen-untersuchen",
                "entwerfen-einer-barrierefreien-benutzererfahrung/vermeiden-sie-exklusive-designmuster/designs-die-zur-ausgenzung-fuehren",
                {
                  label: "Lernen aus Fehlern beim Design der Barrierefreiheit",
                  collapsed: true,
                  items: [
                    "entwerfen-einer-barrierefreien-benutzererfahrung/vermeiden-sie-exklusive-designmuster/lernen-aus-fehlern-beim-design-der-barrierefreiheit/einleitung",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/vermeiden-sie-exklusive-designmuster/lernen-aus-fehlern-beim-design-der-barrierefreiheit/versagen-bei-der-gestaltung",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/vermeiden-sie-exklusive-designmuster/lernen-aus-fehlern-beim-design-der-barrierefreiheit/ineffektive-designs",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/vermeiden-sie-exklusive-designmuster/lernen-aus-fehlern-beim-design-der-barrierefreiheit/unvollstaendige-designs",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/vermeiden-sie-exklusive-designmuster/lernen-aus-fehlern-beim-design-der-barrierefreiheit/schlechte-anpassungen",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/vermeiden-sie-exklusive-designmuster/lernen-aus-fehlern-beim-design-der-barrierefreiheit/unbequeme-oder-stigmatisierende-gestaltungen",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/vermeiden-sie-exklusive-designmuster/lernen-aus-fehlern-beim-design-der-barrierefreiheit/verfall-der-zugänglichkeit-im-laufe-der-zeit",
                  ],
                },
              ],
            },
            {
              label: "Vielfalt umarmen",
              collapsed: true,
              items: [
                "entwerfen-einer-barrierefreien-benutzererfahrung/vielfalt-umarmen/einleitung",
                "entwerfen-einer-barrierefreien-benutzererfahrung/vielfalt-umarmen/untersuchen-der-grenzfaelle",
                "entwerfen-einer-barrierefreien-benutzererfahrung/vielfalt-umarmen/user-research-mit-menschen-mit-behinderungen",
              ],
            },
            {
              label: "Erstellen Sie inklusive Designs",
              collapsed: true,
              items: [
                "entwerfen-einer-barrierefreien-benutzererfahrung/erstellen-sie-inklusive-designs/einleitung",
                "entwerfen-einer-barrierefreien-benutzererfahrung/erstellen-sie-inklusive-designs/das-spektrum-der-faehigkeits-personas",
                "entwerfen-einer-barrierefreien-benutzererfahrung/erstellen-sie-inklusive-designs/eine-barrierefreiheit-zuerst-denkweise",
                "entwerfen-einer-barrierefreien-benutzererfahrung/erstellen-sie-inklusive-designs/nebeneffekte",
                "entwerfen-einer-barrierefreien-benutzererfahrung/erstellen-sie-inklusive-designs/eine-schnittstelle-fuer-alle",
              ],
            },
            {
              label: "Affordanzen Überdenken",
              collapsed: true,
              items: [
                "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/einleitung",
                "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/definieren-von-affordanzen",
                {
                  label: "Blind: Eine audio-strukturelle Nutzererfahrung",
                  collapsed: true,
                  items: [
                    "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/blind-eine-audio-strukturelle-nutzererfahrung/einleitung",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/blind-eine-audio-strukturelle-nutzererfahrung/audio-strukturelle-seiten-ux",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/blind-eine-audio-strukturelle-nutzererfahrung/audio-strukturelle-interaktion-ux",
                  ],
                },
                "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/taubblind-eine-taktile-strukturelle-ux-nur-mit-text",
                "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/gehoerlos-eine-stille-visuelle-ux",
                {
                  label: "Die Herausforderung kognitiver Behinderungen",
                  collapsed: true,
                  items: [
                    "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/die-herausforderung-kognitiver-behinderungen/einleitung",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/die-herausforderung-kognitiver-behinderungen/was-es-bedeautet-eine-kognitiv-behinderung-zu-haben",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/die-herausforderung-kognitiver-behinderungen/wichtige-designkonzepte",
                    "entwerfen-einer-barrierefreien-benutzererfahrung/affordanzen-ueberdenken/die-herausforderung-kognitiver-behinderungen/wcag-richtlinien-zum-nutzen-kognitiver-behinderungen",
                  ],
                },
              ],
            },
            {
              label: "Die Herausforderung von nutzergenerierten Inhalten",
              collapsed: true,
              items: [
                "entwerfen-einer-barrierefreien-benutzererfahrung/die-herausforderung-von-nutzergenerierten-inhalten/einleitung",
                "entwerfen-einer-barrierefreien-benutzererfahrung/die-herausforderung-von-nutzergenerierten-inhalten/nutzung-der-richtlinien-fuer-die-barrierefreiheit-des-authoring-tools",
                "entwerfen-einer-barrierefreien-benutzererfahrung/die-herausforderung-von-nutzergenerierten-inhalten/automatisierte-loesungen",
              ],
            },
            "entwerfen-einer-barrierefreien-benutzererfahrung/ueberlegungen-zum-webdesign-nach-art-der-behinderung",
            "entwerfen-einer-barrierefreien-benutzererfahrung/grundlegende-checkliste-fuer-die-barrierefreiheit-im-web-fuer-designer",
            "entwerfen-einer-barrierefreien-benutzererfahrung/zusammenfassung",
          ],
        },
      ],
    }),
  ],
});
