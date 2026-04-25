import * as path from "path";
import * as vscode from "vscode";

/**
 * Register bundled Cursor plugin content.
 * The extension remains no-op in non-Cursor VS Code environments.
 */
export function activate(context: vscode.ExtensionContext): void {
  const cursorApi = (vscode as typeof vscode & {
    cursor?: {
      plugins?: {
        registerPath: (pluginPath: string) => vscode.Disposable;
      };
    };
  }).cursor;

  if (!cursorApi?.plugins || typeof cursorApi.plugins.registerPath !== "function") {
    return;
  }

  const pluginPath = path.join(__dirname, "..", "cursor-plugins", "prd-authoring-copilot");
  const disposable = cursorApi.plugins.registerPath(pluginPath);
  context.subscriptions.push(disposable);
}

export function deactivate(): void {}
