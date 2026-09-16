import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Una proposta per file. Il testo lungo sta nel corpo del markdown; nel
   frontmatter sta tutto ciò che la pagina dispone intorno a quel testo —
   figura, didascalia, colophon — e, per le tavole annotate, la geometria dei
   segni. Le coordinate sono percentuali dell'immagine, come nell'artifact. */

const annotazione = z.object({
  n: z.number(),
  titolo: z.string(),
  testo: z.string(),
  x: z.number(),
  y: z.number(),
  lx: z.number(),
  ly: z.number(),
  lw: z.number(),
  filo: z.object({ x1: z.number(), y1: z.number() }),
});

const proposte = defineCollection({
  loader: glob({ base: './src/content/proposte', pattern: '**/*.md' }),
  schema: z.object({
    /* Il numero della proposta: ordina l'elenco in home, dalla più recente. */
    numero: z.number(),
    titolo: z.string(),
    luogo: z.string(),
    /* Le due date del colophon e dell'elenco. Terravecchia non ne ha. */
    dataBreve: z.string().optional(),
    dataTesto: z.string().optional(),
    tema: z.string(),
    occhiello: z.string(),
    immagine: z.string(),
    larghezza: z.number(),
    altezza: z.number(),
    alt: z.string(),
    didascalia: z.array(z.string()),
    disegnata: z.boolean().default(false),
    annotazioni: z.array(annotazione).default([]),
  }),
});

export const collections = { proposte };
