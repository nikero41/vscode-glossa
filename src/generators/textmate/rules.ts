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

const mapObjectValues = <T, U>(
	obj: Record<string, T>,
	fn: (value: T) => U,
): Record<string, U> =>
	Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [key, fn(value)]),
	);
