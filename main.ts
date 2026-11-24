// traveler-from-1800: writes one sentence explaining the modern internet
// to a traveler from 1800, built only from things they would already know:
// libraries, post offices, roads, letters, books, and spoken words.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Picture every library and post office in the world joined by one road, down which any letter, book, or spoken word travels to any door before you blink.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(`Wrote ${SENTENCE.length} characters to /output/entry.txt`);
