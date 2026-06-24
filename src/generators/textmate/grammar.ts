import { glossomathia } from "../../language/glossomathia.js";
import {
	callGroup,
	escapedGroup,
	identifier,
	notIdentifierAhead,
	wordGroup,
} from "./regex.js";
import { defineGrammar } from "./rules.js";
import { scopes } from "./scopes.js";

export const grammar = defineGrammar({
	patterns: [
		"comments",
		"strings",
		"program-structure",
		"subprograms",
		"control-keywords",
		"enhanced-flow-control",
		"io-keywords",
		"operators",
		"booleans",
		"types",
		"numbers",
		"builtin-functions",
		"enhanced-functions",
		"enhanced-screen-execution",
		"function-call",
		"punctuation",
		"identifiers",
	],
	repository: {
		comments: {
			patterns: [
				{
					name: scopes.comment,
					match: `${glossomathia.lexical.lineComment}.*$`,
				},
			],
		},
		strings: {
			patterns: [
				{
					name: scopes.stringSingle,
					match: "(')([^'\\n]*)(')",
					captures: {
						"1": scopes.stringQuoteBegin,
						"2": scopes.stringSingle,
						"3": scopes.stringQuoteEnd,
					},
				},
				{
					name: scopes.stringCurly,
					match: "(‘)([^’\\n]*)(’)",
					captures: {
						"1": scopes.stringQuoteBegin,
						"2": scopes.stringCurly,
						"3": scopes.stringQuoteEnd,
					},
				},
			],
		},
		"program-structure": {
			patterns: [
				{
					name: scopes.programKeyword,
					match: wordGroup(glossomathia.keywords.programStructure),
				},
			],
		},
		subprograms: {
			patterns: [
				{
					match: `\\b(ΔΙΑΔΙΚΑΣΙΑ)\\s+(${identifier})(\\s*\\()([^)]*)(\\))`,
					captures: {
						"1": scopes.subprogramKeyword,
						"2": scopes.functionName,
						"3": scopes.groupBegin,
						"4": scopes.parameter,
						"5": scopes.groupEnd,
					},
				},
				{
					match: `\\b(ΣΥΝΑΡΤΗΣΗ)\\s+(${identifier})(\\s*\\()([^)]*)(\\))(\\s*:)(\\s*)(${glossomathia.declarations.functionReturnTypes.join("|")})`,
					captures: {
						"1": scopes.subprogramKeyword,
						"2": scopes.functionName,
						"3": scopes.groupBegin,
						"4": scopes.parameter,
						"5": scopes.groupEnd,
						"6": scopes.separatorColon,
						"8": scopes.type,
					},
				},
				{
					match: `\\b(ΚΑΛΕΣΕ)\\s+(${identifier})(?=\\s*\\()`,
					captures: { "1": scopes.subprogramKeyword, "2": scopes.functionCall },
				},
				{
					name: scopes.subprogramKeyword,
					match: wordGroup(glossomathia.keywords.subprogramEndings),
				},
			],
		},
		"control-keywords": {
			patterns: [
				{
					match: "\\b(ΠΕΡΙΠΤΩΣΗ)\\s+(ΑΛΛΙΩΣ)\\b",
					captures: { "1": scopes.switchKeyword, "2": scopes.defaultKeyword },
				},
				{
					name: scopes.conditionalKeyword,
					match: wordGroup(glossomathia.keywords.conditionals),
				},
				{
					name: scopes.loopKeyword,
					match: wordGroup(glossomathia.keywords.loops),
				},
				{
					name: scopes.switchKeyword,
					match: wordGroup(glossomathia.keywords.switches),
				},
			],
		},
		"enhanced-flow-control": {
			patterns: [
				{
					name: scopes.flowTerminationKeyword,
					match: wordGroup(glossomathia.enhanced.flowTermination),
				},
			],
		},
		"io-keywords": {
			patterns: [
				{
					name: scopes.ioFunction,
					match: `\\b(${glossomathia.keywords.io.join("|")})${notIdentifierAhead}`,
				},
			],
		},
		operators: {
			patterns: [
				{
					name: scopes.wordOperator,
					match: wordGroup(glossomathia.operators.word),
				},
				{
					name: scopes.assignmentOperator,
					match: escapedGroup(glossomathia.operators.assignment),
				},
				{
					name: scopes.rangeOperator,
					match: escapedGroup(glossomathia.operators.range),
				},
				{
					name: scopes.comparisonOperator,
					match: escapedGroup(glossomathia.operators.comparison),
				},
				{
					name: scopes.arithmeticOperator,
					match: escapedGroup(glossomathia.operators.arithmetic),
				},
			],
		},
		booleans: {
			patterns: [
				{
					name: scopes.boolean,
					match: wordGroup(glossomathia.literals.booleans),
				},
			],
		},
		types: {
			patterns: [
				{
					name: scopes.type,
					match: wordGroup(glossomathia.declarations.types),
				},
			],
		},
		numbers: {
			patterns: [
				{ name: scopes.numericFloat, match: String.raw`\b\d+\.\d+\b` },
				{ name: scopes.numericInteger, match: String.raw`\b\d+\b` },
			],
		},
		"builtin-functions": {
			patterns: [
				{
					name: scopes.builtinFunction,
					match: callGroup(glossomathia.functions.basicBuiltins),
				},
			],
		},
		"enhanced-functions": {
			patterns: [
				{
					name: scopes.builtinFunction,
					match: callGroup(glossomathia.functions.enhancedMath),
				},
				{
					name: scopes.builtinFunction,
					match: callGroup(glossomathia.functions.enhancedCharacter),
				},
			],
		},
		"enhanced-screen-execution": {
			patterns: [
				{
					name: scopes.executionKeyword,
					match: wordGroup(glossomathia.enhanced.executionCommands),
				},
				{
					name: scopes.screenFunction,
					match: wordGroup(glossomathia.enhanced.screenCommands),
				},
				{
					name: scopes.screenVariable,
					match: wordGroup(glossomathia.enhanced.screenVariables),
				},
			],
		},
		"function-call": {
			patterns: [
				{ name: scopes.functionCall, match: `\\b${identifier}(?=\\s*\\()` },
			],
		},
		punctuation: {
			patterns: [
				{ name: scopes.arrayBegin, match: String.raw`\[` },
				{ name: scopes.arrayEnd, match: String.raw`\]` },
				{ name: scopes.groupBegin, match: String.raw`\(` },
				{ name: scopes.groupEnd, match: String.raw`\)` },
				{ name: scopes.separatorComma, match: "," },
				{ name: scopes.separatorColon, match: ":" },
			],
		},
		identifiers: {
			patterns: [{ name: scopes.identifier, match: `\\b${identifier}\\b` }],
		},
	},
});
