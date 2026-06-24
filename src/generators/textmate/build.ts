import { writeFileSync } from "node:fs";
import { join } from "node:path";

import { grammar } from "./grammar.js";

const root = join(import.meta.dirname, "..", "..", "..");
const grammarPath = join(root, "syntaxes", "glossomathia.tmLanguage.json");

writeFileSync(grammarPath, `${JSON.stringify(grammar, null, "\t")}\n`);
