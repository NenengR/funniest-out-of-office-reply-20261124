// The Funniest AI Out-of-Office Reply
// Writes one line (143 chars, gate 1-160) to /output/entry.txt.
// Revision: clarified that the line is the full entry, nothing else.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "I am away recharging my batteries, literally. Your email will be answered by a smaller model that has never met you and is already judging you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
