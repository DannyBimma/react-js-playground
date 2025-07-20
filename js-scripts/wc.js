#!/usr/bin/env node

const fs = await import("node:fs");
const process = await import("node:process");

function main() {
  const filename = process.default.argv[2];

  if (!filename) {
    console.error("Usage: node wc.js <filename>");
    process.default.exit(1);
  }

  try {
    const text = fs.readFileSync(filename, "utf8");
    const stats = textAnal(text);

    console.log(`Characters: ${stats.chars}`);
    console.log(`Words: ${stats.words}`);
    console.log(`Sentences: ${stats.sentences}`);
    console.log(`Lines: ${stats.lines}`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.default.exit(1);
  }
}

function textAnal(text) {
  const chars = text.length;

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const sentences =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;

  const lines = text === "" ? 0 : text.split("\n").length;

  return { chars, words, sentences, lines };
}

main();

