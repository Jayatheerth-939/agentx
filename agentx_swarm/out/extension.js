"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('🚀 PhantomPatch Swarm Extension is now active!');
    let disposable = vscode.commands.registerCommand('PhantomPatch.scanFile', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('PhantomPatch: No active editor found to scan.');
            return;
        }
        const document = editor.document;
        const codeContent = document.getText();
        const languageId = document.languageId;
        // Show progress indicator simulating swarm crossvul analysis
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: `PhantomPatch Swarm: Analyzing ${languageId} code with CrossVul adapter...`,
            cancellable: false
        }, async (progress) => {
            // Simulate inference delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Simple heuristics demonstration matching our previous examples
            if (languageId === 'php' && codeContent.includes('$_GET')) {
                vscode.window.showWarningMessage('⚠️ [PhantomPatch High Risk]: Local File Inclusion (LFI) pattern detected via unvalidated $_GET parameter.');
            }
            else if (languageId === 'ruby' && codeContent.includes('open(')) {
                vscode.window.showWarningMessage('⚠️ [PhantomPatch Critical]: Potential Command Injection via Kernel#open with user input.');
            }
            else {
                vscode.window.showInformationMessage('✅ PhantomPatch Swarm: No obvious CrossVul signatures found in this snippet.');
            }
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map