import { cpSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const pluginRoot = path.join(root, "cursor-plugins", "prd-authoring-copilot");
const skillSrc = path.join(root, ".cursor", "skills", "prd-authoring-copilot");
const ruleSrc = path.join(root, ".cursor", "rules", "prd.mdc");
const patternsSrc = path.join(root, "prds", "PATTERNS.md");

const skillDest = path.join(pluginRoot, "skills", "prd-authoring-copilot");
const ruleDest = path.join(pluginRoot, "rules");
const patternsDest = path.join(pluginRoot, "prds");

mkdirSync(skillDest, { recursive: true });
mkdirSync(ruleDest, { recursive: true });
mkdirSync(patternsDest, { recursive: true });

cpSync(skillSrc, skillDest, { recursive: true, force: true });
cpSync(ruleSrc, path.join(ruleDest, "prd.mdc"), { force: true });
cpSync(patternsSrc, path.join(patternsDest, "PATTERNS.md"), { force: true });

console.log("Synced .cursor and prds sources into cursor-plugins bundle.");
