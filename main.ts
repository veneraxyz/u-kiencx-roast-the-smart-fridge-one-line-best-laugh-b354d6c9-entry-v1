import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const LINE =
  "My smart fridge judges my 2 a.m. snack, then begs for a Wi-Fi update like a needy ex — bro, you're a fridge, chill.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 160) {
    throw new Error(`line must be 1-160 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be exactly one line");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
      throw new Error("line must not contain control characters");
    }
  }
}

function main(): void {
  validate(LINE);
  const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE + "\n", "utf8");
  // Read-back guard: re-read and verify the written content matches exactly.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== LINE + "\n") {
    throw new Error("read-back mismatch: entry.txt content does not match the roast line");
  }
  const trimmed = readBack.trimEnd();
  validate(trimmed);
  console.log(`wrote ${outPath} (${LINE.length} chars)`);
}

main();
