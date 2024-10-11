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
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Einleitung",
              slug: "schnelleinstieg-in-die-barrierefreiheit/einleitung",
            },
            {
              label: "Die wesentlichen Konzepte der Barrierefreiheit im Web",
              slug: "schnelleinstieg-in-die-barrierefreiheit/die-wesentlichen-konzepte-der-barrierefreiheit-im-web",
            },
            {
              label: "Für wen ist Barrierefreiheit im Internet von zentraler Bedeutung?",
              slug: "schnelleinstieg-in-die-barrierefreiheit/fuer-wen-ist-barrierefreiheit-im-internet-von-zentraler-bedeutung",
            },
            {
              label: "Automatisierte Barrierefreiheitstools",
              slug: "schnelleinstieg-in-die-barrierefreiheit/automatisierte-hilfsmittel-fuer-barrierefreiheit",
            },
            {
              label: "Tastaturzugänglichkeit",
              slug: "schnelleinstieg-in-die-barrierefreiheit/barrierefreiheit-mit-der-tastatur",
            },
            {
              label: "Andere Eingabemethoden",
              slug: "schnelleinstieg-in-die-barrierefreiheit/andere-eingabemethoden",
            },
            {
              label: "NVDA einrichten",
              slug: "schnelleinstieg-in-die-barrierefreiheit/nvda-einrichten",
            },
            {
              label: "Testen mit NVDA",
              slug: "schnelleinstieg-in-die-barrierefreiheit/testen-mit-nvda",
            },
            {
              label: "Bildschirmausrichtung",
              slug: "schnelleinstieg-in-die-barrierefreiheit/bildschirmausrichtung",
            },
            {
              label: "Semantische Struktur",
              slug: "schnelleinstieg-in-die-barrierefreiheit/semantische-struktur",
            },
            {
              label: "Seitentitel",
              slug: "schnelleinstieg-in-die-barrierefreiheit/seiten-titel",
            },
            {
              label: "Sprache",
              slug: "schnelleinstieg-in-die-barrierefreiheit/sprache",
            },
            {
              label: "Orientierungspunkte",
              slug: "schnelleinstieg-in-die-barrierefreiheit/orientierungspunkte",
            },
            {
              label: "Überschriften",
              slug: "schnelleinstieg-in-die-barrierefreiheit/ueberschriften",
            },
            {
              label: "Navigation und Links",
              slug: "schnelleinstieg-in-die-barrierefreiheit/navigation-und-links",
            },
            {
              label: "Bilder",
              slug: "schnelleinstieg-in-die-barrierefreiheit/bilder",
            },
            {
              label: "Datentabellen",
              slug: "schnelleinstieg-in-die-barrierefreiheit/daten-tabellen",
            },
            {
              label: "iFrames",
              slug: "schnelleinstieg-in-die-barrierefreiheit/iframes",
            },
            {
              label: "Testen der Barrierefreiheit des Farbkontrasts",
              slug: "schnelleinstieg-in-die-barrierefreiheit/analyse-der-barrierefreiheit-des-farbkontrasts",
            },
            {
              label: "Multimedia",
              slug: "schnelleinstieg-in-die-barrierefreiheit/multimedia",
            },
            {
              label: "Visuelle Blinkeffekte",
              slug: "schnelleinstieg-in-die-barrierefreiheit/visuelle-blinkeffekte",
            },
            {
              label: "Formular-Etiketten und Anweisungen",
              slug: "schnelleinstieg-in-die-barrierefreiheit/formular-labels-und-instruktionen",
            },
            {
              label: "Testen mit mobilen Geräten",
              slug: "schnelleinstieg-in-die-barrierefreiheit/testen-mit-mobilen-geraeten",
            },
            {
              label: "Zugänglichkeitsbaum",
              slug: "schnelleinstieg-in-die-barrierefreiheit/accessibility-tree",
            },
            {
              label: "Der Zweck von ARIA",
              slug: "schnelleinstieg-in-die-barrierefreiheit/der-zweck-von-aria",
            },
            {
              label: "ARIA-Komponenten und -Muster",
              slug: "schnelleinstieg-in-die-barrierefreiheit/aria-komponenten-und-patterns",
            },
            {
              label: "Native vs. benutzerdefinierte Komponenten",
              slug: "schnelleinstieg-in-die-barrierefreiheit/native-vs-benutzerdefinierte-komponenten",
            },
            {
              label: "Rollen",
              slug: "schnelleinstieg-in-die-barrierefreiheit/rollen",
            },
            {
              label: "Ausblenden oder Überschreiben von Rollen",
              slug: "schnelleinstieg-in-die-barrierefreiheit/ausblenden-oder-ueberschreiben-von-rollen",
            },
            {
              label: "Namen oder Labels",
              slug: "schnelleinstieg-in-die-barrierefreiheit/namen-oder-labels",
            },
            {
              label: "Beschreibungen",
              slug: "schnelleinstieg-in-die-barrierefreiheit/beschreibungen",
            },
            {
              label: "Werte - Statische Eigenschaften",
              slug: "schnelleinstieg-in-die-barrierefreiheit/werte-statische-eigenschaften",
            },
            {
              label: "Attribute – Dynamische Eigenschaften und Zustände",
              slug: "schnelleinstieg-in-die-barrierefreiheit/werte-dynamische-eigenschaften-und-zustaende",
            },
            {
              label: "aria-hidden versus display:none",
              slug: "schnelleinstieg-in-die-barrierefreiheit/aria-hidden-versus-display-none",
            },
            {
              label: "ARIA-Tastaturmuster",
              slug: "schnelleinstieg-in-die-barrierefreiheit/aria-tastaturmuster",
            },
            {
              label: "ARIA-Live",
              slug: "schnelleinstieg-in-die-barrierefreiheit/aria-live",
            },
            {
              label: "Zeitlimits",
              slug: "schnelleinstieg-in-die-barrierefreiheit/zeitlimits",
            },
            {
              label: "Formularvalidierung und Feedback",
              slug: "schnelleinstieg-in-die-barrierefreiheit/formularvalidierung-und-feedback",
            },
            {
              label: "Single-Page-Apps",
              slug: "schnelleinstieg-in-die-barrierefreiheit/single-page-apps",
            },
          ],
        },
        {
          label: "Grundlagen der Barrierefreiheit – Behinderungen und Richtlinien",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Einleitung",
              slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/einleitung",
            },
            {
              label: "Arten von Behinderungen: Personen",
              items: [
                {
                  label: "Einleitung",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/einleitung",
                },
                {
                  label: "Blind",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/blind",
                },
                {
                  label: "Geringes Sehvermögen",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/geringes-sehvermoegen",
                },
                {
                  label: "Farbenblind",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/farbenblind",
                },
                {
                  label: "Gehörlos",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/gehoerlos",
                },
                {
                  label: "Taubblinde",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/taubblinde",
                },
                {
                  label: "Motorische Behinderungen",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/motorische-behinderungen",
                },
                {
                  label: "Sprachbehinderungen",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/sprachbehinderungen",
                },
                {
                  label: "Kognitive Behinderungen",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/kognitive-behinderungen",
                },
                {
                  label: "Lesebehinderungen",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/lesebehinderungen",
                },
                {
                  label: "Anfälle",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/anfaelle",
                },
                {
                  label: "Mehrfachbehinderungen",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/arten-von-behinderungen-personen/mehrfachbehinderungen",
                },
              ],
            },
            {
              label: "Leitlinien",
              items: [
                {
                  label: "Einleitung",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/leitlinien/einleitung",
                },
                {
                  label: "Richtlinien für die Barrierefreiheit von Webinhalten (WCAG)",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/leitlinien/wcag",
                },
                {
                  label: "Richtlinien für die Barrierefreiheit des Autorentools (ATAG) 2.0",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/leitlinien/atag",
                },
                {
                  label: "WAI-ARIA (Accessible Rich Internet Applications) 1.0",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/leitlinien/wai-aria",
                },
              ],
            },
            {
              label: "Gesetze",
              items: [
                {
                  label: "Einleitung",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/gesetze/einleitung",
                },
                {
                  label: "Vereinigte Staaten",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/gesetze/usa",
                },
                {
                  label: "Kanada",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/gesetze/kanada",
                },
                {
                  label: "Europa",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/gesetze/europa",
                },
                {
                  label: "Andere Regionen",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/gesetze/andere-regionen",
                },
              ],
            },
            {
              label: "Mythen und Missverständnisse über Barrierefreiheit",
              items: [
                {
                  label: "Einleitung",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/einleitung",
                },
                {
                  label: "Mythos - Barrierefreiheit kommt nur einer kleinen Minderheit zugute",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/mythos-barrierefreiheit-kommt-nur-einer-kleine-minderheit-zugute",
                },
                {
                  label: "Mythos - Barrierefreiheit ist ein kurzfristiges Projekt",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/mythos-barrierefreiheit-ist-ein-kurzfristiges-projekt",
                },
                {
                  label: "Mythos - Barrierefreiheit sollte der letzte Schritt sein",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/mythos-barrierefreiheit-sollte-der-letzte-schritt-sein",
                },
                {
                  label: "Mythos - Barrierefreiheit ist schwierig und teuer",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/mythos-barrierefreiheit-ist-schwierig-und-teuer",
                },
                {
                  label: "Mythos - Barrierefreiheit ist hässlich",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/mythos-barrierefreiheit-ist-haesslich",
                },
                {
                  label: "Zusammenfassung",
                  slug: "grundlagen-der-barrierefreiheit-behinderungen-und-richtlinien/mythen-und-missverstaendnisse/zusammenfassung",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
