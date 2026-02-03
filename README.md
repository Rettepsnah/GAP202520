# GAP-Analyse Verktøy: (EU) 2025/20

Dette er et interaktivt, nettbasert verktøy designet for å hjelpe bakketjenesteleverandører (GHSP - Ground Handling Service Providers) med å gjennomføre en GAP-analyse mot den nye forordningen **(EU) 2025/20**.

Verktøyet dekker både **Annex I (PART-ORGH)** og **Annex II (PART-GH.OPS)** og gjør det enkelt å kartlegge samsvar, identifisere avvik og lage handlingsplaner.

## 🚀 Funksjonalitet

* **Interaktivt Dashboard:** Visuell oversikt over fremdrift og statusfordeling (OK, Delvis, Avvik) ved hjelp av dynamiske grafer.
* **Komplett Regelverk-sjekkliste:** Inneholder kravtekster for både IR (Implementing Rules) og AMC (Acceptable Means of Compliance).
* **Status-sporing:** Marker status for hvert punkt, legg til kommentarer, ansvarlig person og frister.
* **Lokal Lagring:** Data lagres automatisk i nettleseren din (LocalStorage), slik at du ikke mister arbeid ved uhell.
* **Import/Eksport:**
    * 💾 **JSON:** Lagre hele analysen til fil for backup eller deling med kollegaer.
    * 📊 **CSV:** Eksporter data til Excel for videre bearbeiding.
    * 📄 **PDF:** Generer en profesjonell statusrapport inkludert statistikk og handlingsplan for avvik.
* **Søk og Filtrering:** Kraftig søkefunksjon og filtrering på subparts eller statustyper.

## 🛠️ Teknologier

Prosjektet er bygget med standard web-teknologier og krever ingen backend-server eller database.

* **HTML5** - Struktur
* **CSS3** - Styling og responsivt design
* **JavaScript (Vanilla)** - Logikk og funksjonalitet
* **Biblioteker:**
    * [Chart.js](https://www.chartjs.org/) - For visualisering av grafer.
    * [jsPDF](https://github.com/parallax/jsPDF) & [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) - For generering av PDF-rapporter.

## 📂 Filstruktur

```text
/
├── index.html      # Hovedfilen som kjører applikasjonen
├── style.css       # Stilark for utseende og layout
├── script.js       # All logikk for lagring, filtrering og rapportgenerering
├── logo.png        # Logo som vises i headeren
└── README.md       # Denne filen
