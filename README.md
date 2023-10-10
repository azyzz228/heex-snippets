# HEEx Snippets

Write fast HTML inside of `.ex` files with these snippets when writing Phoenix Application with Elixir.

Available at:

- [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=aziz-abdullaev.heex-snippets)
- [Open VSX Repo](https://open-vsx.org/extension/aziz-abdullaev/heex-snippets)

![](https://github.com/azyzz228/heex-snippets/blob/main/assets/demo.gif)

## Features

This extension with code snippets aims to accelerate html production inside of `~H` sigil in Phoenix Framework (especially useful when writing LiveView or functional components).

This extensions works great in conjunction with `emmet`. Here is the [link](https://github.com/elixir-lsp/vscode-elixir-ls/issues/243#issuecomment-1422409957) on how to make `emmet` work. While `emmet` provides support for simple `HTML` tags, this extension provides useful snippets for writing logic in `HEEx`.

Snippet suggestions are triggered after `;`, so to use the snippets, simply type in `;<snippet>` and there will be VSCODE auto suggestion with the snippet.

![](https://github.com/azyzz228/heex-snippets/blob/main/assets/suggestions_after_trigger_character.png)

## Available snippets

### Phoenix specific snippets

| snippet | generated code |
|---|---|
|pe|`<%=  %>`|
|ln|`<.link navigate={~p"/"}></.link>`|
|lp|`<.link patch={~p"/"}></.link>`|
|if|`<%= if do %><% end %>`|
|ifelse|`<%= if do %><% else %><% end %>`|
|for|`<%= for item <- @list_of_items do %> <% end %>`|

### Simple HTML tags
Use of `emmet` is assumed for simple tags. Meanwhile, this extension provides the snippets below:

#### for-loop'ed

| snippet | generated code |
|---|---|
|divfl|`<div :for={item <- list_of_items} class=""></div>`|
|pfl|`<p :for={item <- list_of_items} class=""></p>`|
|lifl|`<li :for={item <- list_of_items} class=""></li>`|
|h1fl|`<h1 :for={item <- list_of_items} class=""></h1>`|
|h2fl|`<h2 :for={item <- list_of_items} class=""></h2>`|
|h3fl|`<h3 :for={item <- list_of_items} class=""></h3>`|
|h4fl|`<h4 :for={item <- list_of_items} class=""></h4>`|
|h5fl|`<h5 :for={item <- list_of_items} class=""></h5>`|
|h6fl|`<h6 :for={item <- list_of_items} class=""></h6>`|
|spanfl|`<span :for={item <- spanst_of_items} class=""></span>`|

### Custom Function Components
Custom component snippets are triggered after `;.`. To generate the tag for custom component, type in `;.CUSTOM_COMPONENT`, there will be auto suggestion for generating `<.CUSTOM_COMPONENT></.CUSTOM_COMPONENT>`. See known issues.

## Known Issues
- Custom Function Component suggestion does not appear as you type in but appears when you delete what you have written. So, to effectively use it, to get `<.CUSTOM></.CUSTOM>`, you need to type `;.CUSTOMX` then hit the `delete` / `backspace`. 
- A lot of HTML tags are not included in this snippet. HTML tags and other Phoenix Framework related snippets will be populated if demanded by community. 
## Release Notes

See `CHANGELOG.md`

---

**Enjoy!**
