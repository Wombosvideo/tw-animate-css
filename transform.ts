#!/usr/bin/env node
/**
 * Script to transform utilities which depend on spacing values to use the spacing function.
 * This ensures prefixes are applied correctly when using the `@import 'tailwindcss' prefix(...)` syntax.
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error("Usage: node transform.ts <input-file> <output-file>");
    process.exit(1);
  }

  const inputFile = resolve(args[0]);
  const outputFile = resolve(args[1]);

  try {
    let content = readFileSync(inputFile, "utf-8");

    // First regex: calc(--value(integer|number) * var(--spacing)) -> --spacing(--value($1))
    content = content.replace(
      /calc\(--value\((integer|number)\) ?\* ?var\(--spacing\)\)/g,
      "--spacing(--value($1))",
    );

    // Second regex: calc(--value(integer|number) * var(--spacing) * -1) -> --spacing(--value($1 * -1))
    content = content.replace(
      /calc\(--value\((integer|number)\) ?\* ?var\(--spacing\)( ?)\*( ?)-1\)/g,
      "--spacing(--value($1)$2*$3-1)",
    );

    writeFileSync(outputFile, content, "utf-8");
    console.log(`Transformed ${inputFile} -> ${outputFile}`);
  } catch (error) {
    console.error(`Error processing file ${inputFile}:`, error);
    process.exit(1);
  }
}

main();
