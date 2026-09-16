# Ad bonum publicum

Il sito delle **proposte di Franco Di Benedetto per Pisticci**: idee sue per il paese, raccolte
qui dopo essere state pubblicate sui social, dove tra un post e l'altro si perdono.

Sono proposte, non progetti. Nessuna è stata commissionata, nessuna è stata approvata o
presentata a un'amministrazione. La pagina [Note](src/pages/note.astro) lo dice per esteso, e va
letta prima di toccare i testi: riguarda luoghi veri e persone che ci abitano.

Il sito nasce da un artifact — <https://claude.ai/artifact/1qJSiV4AbVwxHrmkRBTypo> — che era una
pagina sola con quattro sezioni mostrate e nascoste in JavaScript. Qui le sezioni sono indirizzi
veri; il disegno, i testi e le immagini sono gli stessi.

## Le pagine

| Indirizzo | Cosa c'è |
| --- | --- |
| `/` | La lettera di Franco e l'elenco delle proposte, dalla più recente |
| `/proposte/<nome>/` | La scheda: figura, didascalia, testo, colophon |
| `/note/` | Cosa sono e cosa non sono queste pagine |

## Aggiungere una proposta

Un file per proposta in `src/content/proposte/`. Il nome del file diventa l'indirizzo, il corpo
del markdown è il testo lungo, il frontmatter è tutto il resto. Lo schema sta in
`src/content.config.ts`, e `ascensore-panoramico-per-il-dirupo.md` è l'esempio completo: ha anche
le annotazioni, cioè i numeri appoggiati sopra l'immagine con la voce che spiega ognuno.

- `numero` decide l'ordine in home. Il prossimo è 3.
- L'immagine va in `public/immagini/`, e `larghezza` e `altezza` sono quelle vere del file:
  servono a non far saltare la pagina mentre carica.
- `annotazioni` si può omettere: senza, la figura è solo una figura.
- Le coordinate (`x`, `y` per il numero; `lx`, `ly`, `lw` per la voce; `filo` per il capo della
  linea) sono percentuali dell'immagine. Sotto i 1024px le voci scendono in elenco da sole.

## Lavorarci

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # il sito statico finisce in dist/
npm run preview  # guarda dist/ come lo vedrà il browser
```

## Note tecniche

- **Astro**, sito statico, nessun framework di componenti e nessun JavaScript spedito al browser.
- **Caratteri ospitati qui** (`src/assets/fonts`), non presi da Google al caricamento: Archivo e
  Source Serif 4, sottoinsiemi latin e latin-ext.
- **`noindex`** è in `src/layouts/Base.astro`, perché le note promettono che il sito non è
  indicizzato. Quando ci sarà un dominio e la decisione di pubblicare, si toglie di lì.
- **Pubblicato** su GitHub Pages da `.github/workflows/deploy.yml` a ogni push su `main`, all'indirizzo
  <https://ad-bonum-publicum.github.io>. È una versione di prova: quando ci sarà un dominio vero,
  si cambia `site` in `astro.config.mjs` e si aggiunge il dominio nelle impostazioni Pages.
