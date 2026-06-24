import { glossomathia } from "../../language/glossomathia.js";

const {
	/** TextMate-compatible identifier pattern from the Glossomathia lexer. */
	lexical: { identifier },
} = glossomathia;

export { identifier };

/** Prevents a match from being followed by a Glossomathia identifier character. */
export const notIdentifierAhead = "(?![A-Za-zΑ-ΩΆΈΉΊΌΎΏα-ωάέήίόύώ0-9_])";

/** Builds a word-boundary regex group matching any of the provided words. */
export const wordGroup = (words: readonly string[]) =>
	`\\b(${words.join("|")})\\b`;

/** Builds a word group that only matches when followed by an opening parenthesis. */
export const callGroup = (words: readonly string[]) =>
	`${wordGroup(words)}(?=\\s*\\()`;

/** Builds a regex group matching any of the provided literal values. */
export const escapedGroup = (values: readonly string[]) =>
	`(${values.map(escapeRegex).join("|")})`;

/** Escapes regex metacharacters in a literal string. */
const escapeRegex = (value: string) =>
	value.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
