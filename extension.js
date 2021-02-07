const vscode = require('vscode');

const path = require('path');
const fs = require('fs');

const Mobi = require('mobi');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('mobi-reader.viewMobi', function () {
		if(vscode.window.activeTextEditor) {
			const document = vscode.window.activeTextEditor.document;
			// check if a mobi file is open
			if(path.extname(document.fileName) === '.mobi') {
				// parse the mobi file
				let book = new Mobi(document.fileName);

				// save the html conversion
				const savePath = path.dirname(document.fileName);
				const fileBase = path.basename(document.fileName, '.mobi');
				const htmlFileName = path.resolve(savePath, fileBase.concat('.html'))

				vscode.window.showInformationMessage(`saving to ${htmlFileName}`);

				fs.writeFileSync(htmlFileName, book.content)

				// open a preview
				const panel = vscode.window.createWebviewPanel(
					"mobi preview",
					"Mobi Preview",
					vscode.ViewColumn.One,
					{}
				);
				panel.webview.html = book.content;

			} else {
				vscode.window.showInformationMessage('not a mobi file');
			}
		} else {
			vscode.window.showInformationMessage('no mobi file open');
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
