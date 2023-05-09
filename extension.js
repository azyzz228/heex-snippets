const vscode = require("vscode");

function activate(context) {
	console.log("Elixir snippets extension activated");

	// Register a completion provider for the `~H"""` sigil
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			"elixir",
			{
				provideCompletionItems(
					document,
					position,
					token,
					context
				) {

					const triggerCharacter =
						new vscode.Range(
							position.line,
							position.character - 1,
							position.line,
							position.character
						);
						
					/*
							Phoenix Specific Completion Snippets
					*/
					const codeRenderBlock = new vscode.CompletionItem("pe", vscode.CompletionItemKind.Snippet);
					codeRenderBlock.insertText = new vscode.SnippetString('<%= $0 %>');
					codeRenderBlock.detail ='<%= %>';
					codeRenderBlock.additionalTextEdits =[vscode.TextEdit.delete(triggerCharacter)];

					const linkNavigate = new vscode.CompletionItem("ln", vscode.CompletionItemKind.Snippet);
					linkNavigate.insertText = new vscode.SnippetString('<.link navigate={~p"/$1"}>$0</.link>');
					linkNavigate.detail ='<.link navigate={~p"/$1"}>$0</.link>';
					linkNavigate.additionalTextEdits =[vscode.TextEdit.delete(triggerCharacter)];

					const linkPatch = new vscode.CompletionItem("lp", vscode.CompletionItemKind.Snippet);
					linkPatch.insertText = new vscode.SnippetString('<.link patch={~p"/$1"}>$0</.link>');
					linkPatch.detail ='<.link patch={~p"/$1"}>$0</.link>';
					linkPatch.additionalTextEdits =[vscode.TextEdit.delete(triggerCharacter)];

					const ifCompletion = new vscode.CompletionItem("if", vscode.CompletionItemKind.Snippet);
					ifCompletion.insertText = new vscode.SnippetString('<%= if $1 %>\n\t$0\n<% end %>');
					ifCompletion.detail ='HEEX: if end statement';
					ifCompletion.additionalTextEdits =[vscode.TextEdit.delete(triggerCharacter)];

					const ifElseCompletion = new vscode.CompletionItem("ifelse", vscode.CompletionItemKind.Snippet);
					ifElseCompletion.insertText = new vscode.SnippetString('<%= if $1 %>\n\t$2\n<% else %>\n\t$0\n<% end %>');
					ifElseCompletion.detail ='HEEX: if else end statement';
					ifElseCompletion.additionalTextEdits =[vscode.TextEdit.delete(triggerCharacter)];
					
					const forLoop = new vscode.CompletionItem("for", vscode.CompletionItemKind.Snippet);
					forLoop.insertText = new vscode.SnippetString('<%= for ${2:item} <- @${1:list_of_items} do %>\n\t$0\n<% end %>');
					forLoop.detail ='HEEX: for loop';
					forLoop.additionalTextEdits =[vscode.TextEdit.delete(triggerCharacter)];

					/*
							For looped HTML snippets
					*/
					const divForLoop = new vscode.CompletionItem("divfl", vscode.CompletionItemKind.Snippet);
					divForLoop.insertText = new vscode.SnippetString('<div :for={${2:item} <- @${1:list_of_items}} class="">$0</div>');
					divForLoop.detail ='<div :for={${2:item} <- @${1:list_of_items}} class="">$0</div>';
					divForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					return [
						codeRenderBlock,
						linkNavigate,
						linkPatch,
						ifCompletion,
						ifElseCompletion,
						forLoop,
						divForLoop
					];
				},
			},
			";" // Trigger character
		)
	);

	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			"elixir",
			{
				provideCompletionItems(
					document,
					position,
					token,
					context
				) {
					//TODO: fix snippet suggesting only after pressing "Del"
			
					// ;.custom_component => custom_component
					const regex = /(?<=;.)\w+/;
					const str = document.lineAt(position).text;
					const match = str.match(regex);

					if (!match) return;

					const customComponent = match[0];

					const triggerCharacter =
						new vscode.Range(
							position.line,
							position.character - 1,
							position.line,
							position.character
						);

					const snippetCompletion = new vscode.CompletionItem(`${customComponent}`);
					snippetCompletion.insertText = new vscode.SnippetString(`<.${customComponent}>$0</.${customComponent}>`);
					snippetCompletion.detail = `<${customComponent} navigate={~p\"/$1\"}>$0</${customComponent}>`;
					snippetCompletion.additionalTextEdits =[vscode.TextEdit.delete(triggerCharacter)];

					return [snippetCompletion];
				},
			},
			";",
			"."
		)
	);
}

exports.activate = activate;
