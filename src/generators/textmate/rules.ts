import { mapObjectValues } from "./helpers.js";
import type { Grammar, GrammarInput } from "./types.js";

export const defineGrammar = (opts: GrammarInput = {}): Grammar => {
	const repository = Object.fromEntries(
		Object.entries(opts.repository ?? {}).map(([key, value]) => [
			key,
			{
				patterns: value.patterns.map(input => ({
					...input,
					captures: input.captures
						? mapObjectValues(input.captures, value =>
								typeof value === "string" ? { name: value } : value,
							)
						: undefined,
				})),
			},
		]),
	);

	return {
		$schema:
			"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
		name: "Glossomathia",
		scopeName: "source.psg",
		...opts,
		patterns: opts.patterns?.map(pattern => ({ include: `#${pattern}` })) ?? [],
		repository,
	} satisfies Grammar;
};
