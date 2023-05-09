const { SnippetString } = require('vscode');
const vscode = require('vscode');

function activate(context) {
  console.log('Elixir snippets extension activated');

  // Register a completion provider for the `~H"""` sigil
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      'elixir',
      {
        provideCompletionItems(document, position, token, context) {
          // Check if the current position is inside a `~H"""` sigil

		  			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('Good part of the day');
			snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');

			const docs = new vscode.MarkdownString("Inserts a snippet that lets you select [link](x.ts).");
			snippetCompletion.documentation = docs;
			docs.baseUri = vscode.Uri.parse('http://example.com/a/b/c/');
			snippetCompletion.detail = "qweqwewqasdjknaskjdne"

			const snippetCompletion2 = new vscode.CompletionItem('divfl', vscode.CompletionItemKind.Snippet);
			snippetCompletion2.insertText = new vscode.SnippetString('<div :for={${2:item} <- @${1:list_of_items}} class=\"\">$0</div>');
			const docs2 = new vscode.MarkdownString("Inserts for-loop'd div")
			snippetCompletion2.documentation = docs2;
			snippetCompletion2.detail = "qweqwewqe"

			const rangeToRemove = new vscode.Range(position.line, position.character-1, position.line, position.character);
    		snippetCompletion2.additionalTextEdits = [vscode.TextEdit.delete(rangeToRemove)];
			
			// console.log("==== DOCUMENT ====");
			// console.log(document.validatePosition());

			// console.log("==== TOKEN ====");
			// console.log(token);

			// console.log("==== Position ====");
			// console.log(position.isAfter(new vscode.Position()));

			return [
				snippetCompletion,
				snippetCompletion2
            ];
        //   const linePrefix = document.lineAt(position).text.substr(0, position.character);
        //   if (linePrefix.endsWith('~H"""')) {
        //     // Provide a list of completion items
     
        //   }
        },
      },
      ';' // Trigger character
    )
  );
}

exports.activate = activate;
