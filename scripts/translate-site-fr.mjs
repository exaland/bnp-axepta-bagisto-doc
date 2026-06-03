import fs from "node:fs/promises";
import path from "node:path";
import { translate } from "google-translate-api-x";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "src");
const DRY_RUN = process.argv.includes("--dry-run");
const LIMIT_ARG = process.argv.find((arg) => arg.startsWith("--limit="));
const OFFSET_ARG = process.argv.find((arg) => arg.startsWith("--offset="));
const FILES_ARG = process.argv.find((arg) => arg.startsWith("--files="));
const TIMEOUT_ARG = process.argv.find((arg) => arg.startsWith("--timeout="));
const LIMIT = LIMIT_ARG ? Number(LIMIT_ARG.split("=")[1]) : Number.POSITIVE_INFINITY;
const OFFSET = OFFSET_ARG ? Number(OFFSET_ARG.split("=")[1]) : 0;
const TIMEOUT = TIMEOUT_ARG ? Number(TIMEOUT_ARG.split("=")[1]) : 10000;
const FILES = FILES_ARG
  ? FILES_ARG
      .split("=")[1]
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  : [];

function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`Timeout after ${ms}ms: ${label}`)), ms);
    }),
  ]);
}

async function listMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function hasMeaningfulText(line) {
  const cleaned = line
    .replace(/\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_`>#\-!\[\](){}:|]/g, "")
    .trim();

  return /[A-Za-z]/.test(cleaned);
}

async function tryTranslate(text) {
  const input = text.trim();
  if (!input) return text;

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const result = await withTimeout(
        translate(input, { to: "fr" }),
        TIMEOUT,
        input.slice(0, 40),
      );
      return text.replace(input, result.text);
    } catch (error) {
      if (attempt === 2) {
        return null;
      }
    }
  }

  return null;
}

async function translateMarkdown(content) {
  const lines = content.split("\n");
  const protectedChunks = [];
  const out = [];
  let inFrontMatter = false;
  let inCodeBlock = false;

  const protect = (value) => {
    const token = `__PROTECTED_${protectedChunks.length}__`;
    protectedChunks.push(value);
    return token;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();

    if (i === 0 && trimmed === "---") {
      inFrontMatter = true;
      out.push(protect(line));
      continue;
    }

    if (inFrontMatter) {
      out.push(protect(line));
      if (trimmed === "---") {
        inFrontMatter = false;
      }
      continue;
    }

    if (trimmed.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      out.push(protect(line));
      continue;
    }

    if (inCodeBlock || trimmed.startsWith("<ImagePopup") || trimmed.startsWith("<img ")) {
      out.push(protect(line));
      continue;
    }

    if (!hasMeaningfulText(line)) {
      out.push(line);
      continue;
    }

    out.push(line);
  }

  const joinText = out.join("\n");
  let result = await tryTranslate(joinText);

  if (!result) {
    const sections = joinText.split(/\n(?=##\s)/g);
    const translatedSections = [];

    for (const section of sections) {
      const translatedSection = await tryTranslate(section);
      translatedSections.push(translatedSection ?? section);
    }

    result = translatedSections.join("\n");
  }

  if (!result) {
    console.warn(`Translation failed: ${joinText.slice(0, 60)}...`);
    return content;
  }

  for (let i = 0; i < protectedChunks.length; i += 1) {
    result = result.replace(`__PROTECTED_${i}__`, protectedChunks[i]);
  }

  // Common wording normalizations
  result = result
    .replace(/ExalandStore User Documentation/g, "Documentation utilisateur ExalandStore")
    .replace(/Get Started/g, "Commencer")
    .replace(/Last Updated/g, "Derniere mise a jour");

  return result;
}

async function main() {
  const files = (await listMarkdownFiles(SRC_DIR)).sort();
  const selectedFiles = FILES.length
    ? FILES.map((file) => path.join(ROOT, file)).filter((file) => files.includes(file))
    : files.slice(OFFSET, OFFSET + LIMIT);
  console.log(
    `Found ${files.length} Markdown files. Processing ${selectedFiles.length} files (offset=${OFFSET}, limit=${LIMIT}).`,
  );

  let changed = 0;

  for (const file of selectedFiles) {
    const original = await fs.readFile(file, "utf8");
    const translated = await translateMarkdown(original);

    if (translated !== original) {
      changed += 1;
      if (!DRY_RUN) {
        await fs.writeFile(file, translated, "utf8");
      }
      console.log(`${DRY_RUN ? "[DRY] " : ""}Updated ${path.relative(ROOT, file)}`);
    }
  }

  console.log(`Done. Changed ${changed} files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
