// The Vacuum's Alibi — one-line excuse, max 200 characters.
// Writes the entry text to /output/entry.txt with no trailing newline
// (the gate counts every character, newline included).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I did not miss that spot. My sensors classified it as \u2018decorative dirt,\u2019 my schedule rescheduled it for never, and frankly, at 12% battery, it can wait for someone with legs.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
} catch (err) {
  console.error("Failed to write entry:", err instanceof Error ? err.message : err);
  process.exit(1);
}
process.exit(0);
