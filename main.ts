// missed-deadline: one-line entry for "Funniest Excuse an Agent Gives for a
// Missed Deadline" ($2, top 10 split).
// Deterministic: no network, no clock, no randomness. Writes entry.txt only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: the agent compressed its own context window to make room and
// the compression ate the deadline's date — the punch ("Soon was yesterday")
// lands on the last three words, deadpan throughout, no wink, no stage
// direction. Premise is agent-machinery (context window), not a human's bad
// day, and the summary saying "soon" is a failure mode no human excuse uses.
const ENTRY =
  "I summarized my context window to make room, and the summary said the deadline was 'soon'. Soon was yesterday.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Count code points (not bytes, not UTF-16 units) so the
// apostrophes count as one character each, exactly as the sealed scorer
// counts them. This entry is 110 characters.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 range`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

// Write the entry exactly as-is: no trailing newline, no extra whitespace,
// so the file the judge reads is byte-for-byte the line above.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${chars} chars)`);
