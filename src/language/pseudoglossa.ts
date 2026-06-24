import type { LanguageDefinition } from "./types.js";

export const pseudoglossa = {
	lexical: {
		identifier:
			"[A-Za-zΑ-ΩΆΈΉΊΌΎΏα-ωάέήίόύώ_][A-Za-zΑ-ΩΆΈΉΊΌΎΏα-ωάέήίόύώ0-9_]*",
		lineComment: "!",
		strings: [
			{ kind: "single", open: "'", close: "'" },
			{ kind: "curlySingle", open: "‘", close: "’" },
		],
	},
	keywords: {
		programStructure: [
			"ΠΡΟΓΡΑΜΜΑ",
			"ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ",
			"ΑΡΧΗ",
			"ΣΤΑΘΕΡΕΣ",
			"ΜΕΤΑΒΛΗΤΕΣ",
		],
		conditionals: ["ΑΝ", "ΤΟΤΕ", "ΑΛΛΙΩΣ_ΑΝ", "ΑΛΛΙΩΣ", "ΤΕΛΟΣ_ΑΝ"],
		loops: [
			"ΓΙΑ",
			"ΑΠΟ",
			"ΜΕΧΡΙ",
			"ΜΕ",
			"ΒΗΜΑ",
			"ΟΣΟ",
			"ΕΠΑΝΑΛΑΒΕ",
			"ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ",
			"ΜΕΧΡΙΣ_ΟΤΟΥ",
			"ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ",
		],
		switches: ["ΕΠΙΛΕΞΕ", "ΠΕΡΙΠΤΩΣΗ", "ΤΕΛΟΣ_ΕΠΙΛΟΓΩΝ"],
		io: ["ΔΙΑΒΑΣΕ", "ΓΡΑΨΕ_", "ΓΡΑΨΕ"],
		subprogramEndings: ["ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ", "ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ"],
	},
	declarations: {
		types: [
			"ΑΚΕΡΑΙΑ",
			"ΑΚΕΡΑΙΕΣ",
			"ΠΡΑΓΜΑΤΙΚΗ",
			"ΠΡΑΓΜΑΤΙΚΕΣ",
			"ΧΑΡΑΚΤΗΡΑΣ",
			"ΧΑΡΑΚΤΗΡΕΣ",
			"ΛΟΓΙΚΗ",
			"ΛΟΓΙΚΕΣ",
		],
		functionReturnTypes: ["ΑΚΕΡΑΙΑ", "ΠΡΑΓΜΑΤΙΚΗ", "ΧΑΡΑΚΤΗΡΑΣ", "ΛΟΓΙΚΗ"],
	},
	operators: {
		word: ["DIV", "MOD", "ΚΑΙ", "Η", "Ή", "ΟΧΙ"],
		assignment: ["<--", "<-", "←"],
		comparison: ["<=", ">=", "<>", "=", "<", ">"],
		arithmetic: ["+", "-", "*", "/", "^"],
		range: [".."],
	},
	literals: { booleans: ["ΑΛΗΘΗΣ", "ΨΕΥΔΗΣ"] },
	functions: {
		basicBuiltins: ["ΗΜ", "ΣΥΝ", "ΕΦ", "Τ_Ρ", "Α_Μ", "Α_Τ", "ΛΟΓ", "Ε"],
		enhancedMath: ["ΤΥΧΑΙΟΣ", "ΣΤΡΟΓΓ", "Κ_Μ"],
		enhancedCharacter: ["ΜΗΚΟΣ_ΧΑΡ", "ΣΕΙΡΑ_ΧΑΡ", "ΧΑΡ"],
	},
	enhanced: {
		executionCommands: ["ΣΕΙΡΙΑΚΗ_ΕΚΤΕΛΕΣΗ", "ΠΑΡΑΛΛΗΛΗ_ΕΚΤΕΛΕΣΗ", "ΕΚΤΕΛΕΣΕ"],
		screenCommands: ["ΚΑΘΑΡΙΣΕ_ΟΘΟΝΗ", "ΠΗΓΑΙΝΕ_ΧΥ"],
		screenVariables: ["ΘΕΣΗ_Χ", "ΘΕΣΗ_Υ"],
		flowTermination: ["ΤΕΡΜΑΤΙΣΜΟΣ", "ΚΛΕΙΣΕ_ΠΑΡΑΘΥΡΟ", "ΕΞΟΔΟΣ"],
	},
} as const satisfies LanguageDefinition;
