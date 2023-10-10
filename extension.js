const vscode = require("vscode");

function activate(context) {
	console.log("HEEx-Snippets: snippets extension activated");

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
					codeRenderBlock.detail = '<%= %>';
					codeRenderBlock.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const linkNavigate = new vscode.CompletionItem("ln", vscode.CompletionItemKind.Snippet);
					linkNavigate.insertText = new vscode.SnippetString('<.link navigate={~p"/$1"}>$0</.link>');
					linkNavigate.detail = '<.link navigate={~p"/$1"}>$0</.link>';
					linkNavigate.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const linkPatch = new vscode.CompletionItem("lp", vscode.CompletionItemKind.Snippet);
					linkPatch.insertText = new vscode.SnippetString('<.link patch={~p"/$1"}>$0</.link>');
					linkPatch.detail = '<.link patch={~p"/$1"}>$0</.link>';
					linkPatch.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const liveComponent = new vscode.CompletionItem("lc", vscode.CompletionItemKind.Snippet);
					liveComponent.insertText = new vscode.SnippetString('<.live_component module={$1}>$0 id={$2} />');
					liveComponent.detail = '<.live_component module={$1} id={$2} />';
					liveComponent.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const ifCompletion = new vscode.CompletionItem("if", vscode.CompletionItemKind.Snippet);
					ifCompletion.insertText = new vscode.SnippetString('<%= if $1 do %>\n\t$0\n<% end %>');
					ifCompletion.detail = 'HEEX: if end statement';
					ifCompletion.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const ifElseCompletion = new vscode.CompletionItem("ifelse", vscode.CompletionItemKind.Snippet);
					ifElseCompletion.insertText = new vscode.SnippetString('<%= if $1 do %>\n\t$2\n<% else %>\n\t$0\n<% end %>');
					ifElseCompletion.detail = 'HEEX: if else end statement';
					ifElseCompletion.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const forLoop = new vscode.CompletionItem("for", vscode.CompletionItemKind.Snippet);
					forLoop.insertText = new vscode.SnippetString('<%= for ${2:item} <- @${1:list_of_items} do %>\n\t$0\n<% end %>');
					forLoop.detail = 'HEEX: for loop';
					forLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const slot = new vscode.CompletionItem("slot", vscode.CompletionItemKind.Snippet);
					slot.insertText = new vscode.SnippetString('<:${1:item}>$0</:${1:item}>');
					slot.detail = '[<:slot></:slot>] Slot tag for functional component';
					slot.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxValue = new vscode.CompletionItem("phx-value", vscode.CompletionItemKind.Snippet);
					phxValue.insertText = new vscode.SnippetString('phx-value-$1');
					phxValue.detail = 'phx-value';
					phxValue.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxClick = new vscode.CompletionItem("phx-click", vscode.CompletionItemKind.Snippet);
					phxClick.insertText = new vscode.SnippetString('phx-click="$1"');
					phxClick.detail = 'phx-click';
					phxClick.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxClickAway = new vscode.CompletionItem("phx-click-away", vscode.CompletionItemKind.Snippet);
					phxClickAway.insertText = new vscode.SnippetString('phx-click-away="$1"');
					phxClickAway.detail = 'phx-click-away';
					phxClickAway.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxChange = new vscode.CompletionItem("phx-change", vscode.CompletionItemKind.Snippet);
					phxChange.insertText = new vscode.SnippetString('phx-change="$1"');
					phxChange.detail = 'phx-change';
					phxChange.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxSubmit = new vscode.CompletionItem("phx-submit", vscode.CompletionItemKind.Snippet);
					phxSubmit.insertText = new vscode.SnippetString('phx-submit="$1"');
					phxSubmit.detail = 'phx-submit';
					phxSubmit.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxFeedbackFor = new vscode.CompletionItem("phx-feedback-for", vscode.CompletionItemKind.Snippet);
					phxFeedbackFor.insertText = new vscode.SnippetString('phx-feedback-for="$1"');
					phxFeedbackFor.detail = 'phx-feedback-for="id"';
					phxFeedbackFor.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxDisableWith = new vscode.CompletionItem("phx-disable-with", vscode.CompletionItemKind.Snippet);
					phxDisableWith.insertText = new vscode.SnippetString('phx-disable-with="$1"');
					phxDisableWith.detail = 'phx-disable-with="TEXT"';
					phxDisableWith.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxTriggerAction = new vscode.CompletionItem("phx-trigger-action", vscode.CompletionItemKind.Snippet);
					phxTriggerAction.insertText = new vscode.SnippetString('phx-trigger-action="$1"');
					phxTriggerAction.detail = 'phx-trigger-action';
					phxTriggerAction.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxAutoRecover = new vscode.CompletionItem("phx-auto-recover", vscode.CompletionItemKind.Snippet);
					phxAutoRecover.insertText = new vscode.SnippetString('phx-auto-recover="$1"');
					phxAutoRecover.detail = 'phx-auto-recover';
					phxAutoRecover.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxBlur = new vscode.CompletionItem("phx-blur", vscode.CompletionItemKind.Snippet);
					phxBlur.insertText = new vscode.SnippetString('phx-blur="$1"');
					phxBlur.detail = 'phx-blur';
					phxBlur.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxFocus = new vscode.CompletionItem("phx-focus", vscode.CompletionItemKind.Snippet);
					phxFocus.insertText = new vscode.SnippetString('phx-focus="$1"');
					phxFocus.detail = 'phx-focus';
					phxFocus.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxWindowBlur = new vscode.CompletionItem("phx-window-blur", vscode.CompletionItemKind.Snippet);
					phxWindowBlur.insertText = new vscode.SnippetString('phx-window-blur="$1"');
					phxWindowBlur.detail = 'phx-window-blur';
					phxWindowBlur.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxWindowFocus = new vscode.CompletionItem("phx-window-focus", vscode.CompletionItemKind.Snippet);
					phxWindowFocus.insertText = new vscode.SnippetString('phx-window-focus="$1"');
					phxWindowFocus.detail = 'phx-window-focus';
					phxWindowFocus.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxKeydown = new vscode.CompletionItem("phx-keydown", vscode.CompletionItemKind.Snippet);
					phxKeydown.insertText = new vscode.SnippetString('phx-keydown="$1"');
					phxKeydown.detail = 'phx-keydown';
					phxKeydown.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxKeyup = new vscode.CompletionItem("phx-keyup", vscode.CompletionItemKind.Snippet);
					phxKeyup.insertText = new vscode.SnippetString('phx-keyup="$1"');
					phxKeyup.detail = 'phx-keyup';
					phxKeyup.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxWindowKeydown = new vscode.CompletionItem("phx-window-keydown", vscode.CompletionItemKind.Snippet);
					phxWindowKeydown.insertText = new vscode.SnippetString('phx-window-keydown="$1"');
					phxWindowKeydown.detail = 'phx-window-keydown';
					phxWindowKeydown.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxWindowKeyup = new vscode.CompletionItem("phx-window-keyupx", vscode.CompletionItemKind.Snippet);
					phxWindowKeyup.insertText = new vscode.SnippetString('phx-window-keyup="$1"');
					phxWindowKeyup.detail = 'phx-window-keyup';
					phxWindowKeyup.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxKey = new vscode.CompletionItem("phx-key", vscode.CompletionItemKind.Snippet);
					phxKey.insertText = new vscode.SnippetString('phx-key="$1"');
					phxKey.detail = 'phx-key';
					phxKey.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxViewportTop = new vscode.CompletionItem("phx-viewport-top", vscode.CompletionItemKind.Snippet);
					phxViewportTop.insertText = new vscode.SnippetString('phx-viewport-top="$1"');
					phxViewportTop.detail = 'phx-viewport-top';
					phxViewportTop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxViewportBottom = new vscode.CompletionItem("phx-viewport-bottom", vscode.CompletionItemKind.Snippet);
					phxViewportBottom.insertText = new vscode.SnippetString('phx-viewport-bottom="$1"');
					phxViewportBottom.detail = 'phx-viewport-bottom';
					phxViewportBottom.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxMounted = new vscode.CompletionItem("phx-mounted", vscode.CompletionItemKind.Snippet);
					phxMounted.insertText = new vscode.SnippetString('phx-mounted="$1"');
					phxMounted.detail = 'phx-mounted';
					phxMounted.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxUpdate = new vscode.CompletionItem("phx-update", vscode.CompletionItemKind.Snippet);
					phxUpdate.insertText = new vscode.SnippetString('phx-update="$1"');
					phxUpdate.detail = 'phx-update=[ replace | stream | ignore ]';
					phxUpdate.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxRemove = new vscode.CompletionItem("phx-remove", vscode.CompletionItemKind.Snippet);
					phxRemove.insertText = new vscode.SnippetString('phx-remove="$1"');
					phxRemove.detail = 'phx-remove';
					phxRemove.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxHook = new vscode.CompletionItem("phx-hook", vscode.CompletionItemKind.Snippet);
					phxHook.insertText = new vscode.SnippetString('phx-hook="$1"');
					phxHook.detail = 'phx-hook';
					phxHook.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxDebounce = new vscode.CompletionItem("phx-debounce", vscode.CompletionItemKind.Snippet);
					phxDebounce.insertText = new vscode.SnippetString('phx-debounce="$1"');
					phxDebounce.detail = 'phx-debounce=[ milliseconds | "blur"]';
					phxDebounce.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxThrottle = new vscode.CompletionItem("phx-throttle", vscode.CompletionItemKind.Snippet);
					phxThrottle.insertText = new vscode.SnippetString('phx-throttle="$1"');
					phxThrottle.detail = 'phx-throttle=[200 milliseconds:integer]';
					phxThrottle.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const phxTrackStatic = new vscode.CompletionItem("phx-track-static", vscode.CompletionItemKind.Snippet);
					phxTrackStatic.insertText = new vscode.SnippetString('phx-track-static="$1"');
					phxTrackStatic.detail = 'phx-track-static';
					phxTrackStatic.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const noReplySocket = new vscode.CompletionItem("noreply", vscode.CompletionItemKind.Snippet);
					noReplySocket.insertText = new vscode.SnippetString('{:noreply, socket}');
					noReplySocket.detail = '{:noreply, socket}';
					noReplySocket.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const okSocket = new vscode.CompletionItem("ok", vscode.CompletionItemKind.Snippet);
					okSocket.insertText = new vscode.SnippetString('{:ok, socket}');
					okSocket.detail = '{:ok, socket}';
					okSocket.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const socket = new vscode.CompletionItem("socket", vscode.CompletionItemKind.Snippet);
					socket.insertText = new vscode.SnippetString('socket = \n\tsocket\n\t|> $0');
					socket.detail = 'socket';
					socket.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];
					/*
							For looped HTML snippets
					*/
					const divForLoop = new vscode.CompletionItem("divfl", vscode.CompletionItemKind.Snippet);
					divForLoop.insertText = new vscode.SnippetString('<div :for={${2:item} <- @${1:list_of_items}} class="">$0</div>');
					divForLoop.detail = '<div :for={${2:item} <- @${1:list_of_items}} class="">$0</div>';
					divForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const pForLoop = new vscode.CompletionItem("pfl", vscode.CompletionItemKind.Snippet);
					pForLoop.insertText = new vscode.SnippetString('<p :for={${2:item} <- @${1:list_of_items}} class="">$0</p>');
					pForLoop.detail = '<p :for={${2:item} <- @${1:list_of_items}} class="">$0</p>';
					pForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const liForLoop = new vscode.CompletionItem("lifl", vscode.CompletionItemKind.Snippet);
					liForLoop.insertText = new vscode.SnippetString('<li :for={${2:item} <- @${1:list_of_items}} class="">$0</li>');
					liForLoop.detail = '<li :for={${2:item} <- @${1:list_of_items}} class="">$0</li>';
					liForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h1ForLoop = new vscode.CompletionItem("h1fl", vscode.CompletionItemKind.Snippet);
					h1ForLoop.insertText = new vscode.SnippetString('<h1 :for={${2:item} <- @${1:list_of_items}} class="">$0</h1>');
					h1ForLoop.detail = '<h1 :for={${2:item} <- @${1:list_of_items}} class="">$0</h1>';
					h1ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h2ForLoop = new vscode.CompletionItem("h2fl", vscode.CompletionItemKind.Snippet);
					h2ForLoop.insertText = new vscode.SnippetString('<h2 :for={${2:item} <- @${1:list_of_items}} class="">$0</h2>');
					h2ForLoop.detail = '<h2 :for={${2:item} <- @${1:list_of_items}} class="">$0</h2>';
					h2ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h3ForLoop = new vscode.CompletionItem("h3fl", vscode.CompletionItemKind.Snippet);
					h3ForLoop.insertText = new vscode.SnippetString('<h3 :for={${2:item} <- @${1:list_of_items}} class="">$0</h3>');
					h3ForLoop.detail = '<h3 :for={${2:item} <- @${1:list_of_items}} class="">$0</h3>';
					h3ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h4ForLoop = new vscode.CompletionItem("h4fl", vscode.CompletionItemKind.Snippet);
					h4ForLoop.insertText = new vscode.SnippetString('<h4 :for={${2:item} <- @${1:list_of_items}} class="">$0</h4>');
					h4ForLoop.detail = '<h4 :for={${2:item} <- @${1:list_of_items}} class="">$0</h4>';
					h4ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h5ForLoop = new vscode.CompletionItem("h5fl", vscode.CompletionItemKind.Snippet);
					h5ForLoop.insertText = new vscode.SnippetString('<h5 :for={${2:item} <- @${1:list_of_items}} class="">$0</h5>');
					h5ForLoop.detail = '<h5 :for={${2:item} <- @${1:list_of_items}} class="">$0</h5>';
					h5ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const h6ForLoop = new vscode.CompletionItem("h6fl", vscode.CompletionItemKind.Snippet);
					h6ForLoop.insertText = new vscode.SnippetString('<h6 :for={${2:item} <- @${1:list_of_items}} class="">$0</h6>');
					h6ForLoop.detail = '<h6 :for={${2:item} <- @${1:list_of_items}} class="">$0</h6>';
					h6ForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					const spanForLoop = new vscode.CompletionItem("spanfl", vscode.CompletionItemKind.Snippet);
					spanForLoop.insertText = new vscode.SnippetString('<span :for={${2:item} <- @${1:list_of_items}} class="">$0</span>');
					spanForLoop.detail = '<span :for={${2:item} <- @${1:list_of_items}} class="">$0</span>';
					spanForLoop.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					return [
						codeRenderBlock,
						linkNavigate,
						linkPatch,
						ifCompletion,
						ifElseCompletion,
						forLoop,
						divForLoop,
						pForLoop,
						liForLoop,
						h1ForLoop,
						h2ForLoop,
						h3ForLoop,
						h4ForLoop,
						h5ForLoop,
						h6ForLoop,
						spanForLoop,
						slot,
						liveComponent,
						phxValue,
						phxClick,
						phxClickAway,
						phxChange,
						phxSubmit,
						phxSubmit,
						phxFeedbackFor,
						phxDisableWith,
						phxTriggerAction,
						phxAutoRecover,
						phxBlur,
						phxFocus,
						phxWindowBlur,
						phxWindowFocus,
						phxKeydown,
						phxKeyup,
						phxWindowKeydown,
						phxWindowKeyup,
						phxKey,
						phxViewportBottom,
						phxViewportTop,
						phxMounted,
						phxUpdate,
						phxRemove,
						phxHook,
						phxDebounce,
						phxThrottle,
						phxTrackStatic,
						noReplySocket,
						okSocket,
						socket
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
							position.character - 2,
							position.line,
							position.character
						);

					const snippetCompletion = new vscode.CompletionItem(`${customComponent}`, vscode.CompletionItemKind.Snippet);
					snippetCompletion.insertText = new vscode.SnippetString(`<.${customComponent}>$0</.${customComponent}>`);
					snippetCompletion.detail = `<${customComponent} navigate={~p\"/$1\"}>$0</${customComponent}>`;
					snippetCompletion.additionalTextEdits = [vscode.TextEdit.delete(triggerCharacter)];

					return [snippetCompletion];
				},
			},
			";",
			"."
		)
	);
}

exports.activate = activate;
