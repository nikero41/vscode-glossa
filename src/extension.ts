import * as vscode from "vscode";

export function activate(_context: vscode.ExtensionContext) {
}

export function deactivate() {}

const registerCommand = (
	context: vscode.ExtensionContext,
	name: string,
	callback: (...args: unknown[]) => unknown,
) => {
	const disposable = vscode.commands.registerCommand(name, callback);
	context.subscriptions.push(disposable);
	return disposable;
};
