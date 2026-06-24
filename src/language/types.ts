export interface QuotePair {
	kind: string;
	open: string;
	close: string;
}

export interface LanguageDefinition {
	lexical: { identifier: string; lineComment: string; strings: QuotePair[] };
	keywords: {
		programStructure: string[];
		conditionals: string[];
		loops: string[];
		switches: string[];
		io: string[];
		subprogramEndings: string[];
	};
	declarations: { types: string[]; functionReturnTypes: string[] };
	operators: {
		word: string[];
		assignment: string[];
		comparison: string[];
		arithmetic: string[];
		range: string[];
	};
	literals: { booleans: string[] };
	functions: {
		basicBuiltins: string[];
		enhancedMath: string[];
		enhancedCharacter: string[];
	};
	enhanced: {
		executionCommands: string[];
		screenCommands: string[];
		screenVariables: string[];
		flowTermination: string[];
	};
}
