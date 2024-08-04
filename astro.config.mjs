import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightImageZoom from "starlight-image-zoom";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      defaultLocale: "de",
      plugins: [starlightLinksValidator(), starlightImageZoom(), starlightThemeRapide()],
      title: "A11Y-Tutorials",
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
              label: "Automatisierte Hilfsmittel für Barrierefreiheit",
              slug: "schnelleinstieg-in-die-barrierefreiheit/automatisierte-hilfsmittel-fuer-barrierefreiheit",
            },
            {
              label: "Barrierefreiheit mit der Tastatur",
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
              label: "Seiten-Titel",
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
              label: "Daten-Tabellen",
              slug: "schnelleinstieg-in-die-barrierefreiheit/daten-tabellen",
            },
            {
              label: "iFrames",
              slug: "schnelleinstieg-in-die-barrierefreiheit/iframes",
            },
            {
              label: "Analyse der Barrierefreiheit des Farbkontrasts",
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
              label: "Formular Labels und Instruktionen",
              slug: "schnelleinstieg-in-die-barrierefreiheit/formular-labels-und-instruktionen",
            },
            {
              label: "Testen mit mobilen Geräten",
              slug: "schnelleinstieg-in-die-barrierefreiheit/testen-mit-mobilen-geraeten",
            },
            {
              label: "Accessibility-Tree",
              slug: "schnelleinstieg-in-die-barrierefreiheit/accessibility-tree",
            },
            {
              label: "Der Zweck von ARIA",
              slug: "schnelleinstieg-in-die-barrierefreiheit/der-zweck-von-aria",
            },
            {
              label: "ARIA-Komponenten und -Patterns",
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
              label: "Werte – statische Eigenschaften",
              slug: "schnelleinstieg-in-die-barrierefreiheit/werte-statische-eigenschaften",
            },
            {
              label: "Werte – dynamische Eigenschaften und Zustände",
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
      ],
    }),
  ],
});
