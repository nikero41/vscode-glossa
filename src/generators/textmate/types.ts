import type { scopes } from "./scopes.js";

export interface Capture {
	name: string;
}

export interface GrammarRule {
	name?: (typeof scopes)[keyof typeof scopes];
	match?: string;
	include?: string;
	captures?: Record<string, Capture>;
}

export interface GrammarRuleInput extends Omit<GrammarRule, "captures"> {
	captures?: Record<string, string | Capture>;
}

export interface RepositoryRule {
	patterns: GrammarRule[];
}

export interface RepositoryRuleInput {
	patterns: GrammarRuleInput[];
}

export interface Grammar {
	$schema: string;
	name: string;
	scopeName: string;
	patterns: GrammarRule[];
	repository: Record<string, RepositoryRule>;
}

export interface GrammarInput extends Partial<
	Omit<Grammar, "patterns" | "repository">
> {
	patterns?: string[];
	repository?: Record<string, RepositoryRuleInput>;
}
