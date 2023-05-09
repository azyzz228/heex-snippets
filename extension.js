const vscode = require("vscode");

function activate(context) {
	console.log("Elixir snippets extension activated");

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

					const pForLoop = new vscode.CompletionItem("pfl", vscode.CompletionItemKind.Snippet);
					pForLoop.insertText = new vscode.SnippetString('<p :for={${2:item} <- @${1:list_of_items}} class="">$0</p>');
					pForLoop.detail ='<p :for={${2:item} <- @${1:list_of_items}} class="">$0</p>';
					pForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const liForLoop = new vscode.CompletionItem("lifl", vscode.CompletionItemKind.Snippet);
					liForLoop.insertText = new vscode.SnippetString('<li :for={${2:item} <- @${1:list_of_items}} class="">$0</li>');
					liForLoop.detail ='<li :for={${2:item} <- @${1:list_of_items}} class="">$0</li>';
					liForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h1ForLoop = new vscode.CompletionItem("h1fl", vscode.CompletionItemKind.Snippet);
					h1ForLoop.insertText = new vscode.SnippetString('<h1 :for={${2:item} <- @${1:list_of_items}} class="">$0</h1>');
					h1ForLoop.detail ='<h1 :for={${2:item} <- @${1:list_of_items}} class="">$0</h1>';
					h1ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h2ForLoop = new vscode.CompletionItem("h2fl", vscode.CompletionItemKind.Snippet);
					h2ForLoop.insertText = new vscode.SnippetString('<h2 :for={${2:item} <- @${1:list_of_items}} class="">$0</h2>');
					h2ForLoop.detail ='<h2 :for={${2:item} <- @${1:list_of_items}} class="">$0</h2>';
					h2ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h3ForLoop = new vscode.CompletionItem("h3fl", vscode.CompletionItemKind.Snippet);
					h3ForLoop.insertText = new vscode.SnippetString('<h3 :for={${2:item} <- @${1:list_of_items}} class="">$0</h3>');
					h3ForLoop.detail ='<h3 :for={${2:item} <- @${1:list_of_items}} class="">$0</h3>';
					h3ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h4ForLoop = new vscode.CompletionItem("h4fl", vscode.CompletionItemKind.Snippet);
					h4ForLoop.insertText = new vscode.SnippetString('<h4 :for={${2:item} <- @${1:list_of_items}} class="">$0</h4>');
					h4ForLoop.detail ='<h4 :for={${2:item} <- @${1:list_of_items}} class="">$0</h4>';
					h4ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h5ForLoop = new vscode.CompletionItem("h5fl", vscode.CompletionItemKind.Snippet);
					h5ForLoop.insertText = new vscode.SnippetString('<h5 :for={${2:item} <- @${1:list_of_items}} class="">$0</h5>');
					h5ForLoop.detail ='<h5 :for={${2:item} <- @${1:list_of_items}} class="">$0</h5>';
					h5ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h6ForLoop = new vscode.CompletionItem("h6fl", vscode.CompletionItemKind.Snippet);
					h6ForLoop.insertText = new vscode.SnippetString('<h6 :for={${2:item} <- @${1:list_of_items}} class="">$0</h6>');
					h6ForLoop.detail ='<h6 :for={${2:item} <- @${1:list_of_items}} class="">$0</h6>';
					h6ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const spanForLoop = new vscode.CompletionItem("spanfl", vscode.CompletionItemKind.Snippet);
					spanForLoop.insertText = new vscode.SnippetString('<span :for={${2:item} <- @${1:list_of_items}} class="">$0</span>');
					spanForLoop.detail ='<span :for={${2:item} <- @${1:list_of_items}} class="">$0</span>';
					spanForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

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
