# HEEx Snippets

Write fast HTML inside of `.ex` files with these snippets when writing Phoenix Application with Elixir.

## Features

This extension with code snippets aims to accelerate html production inside of `~H` sigil in Phoenix Framework (especially useful when writing LiveView or functional components).

This extensions works great in conjunction with `emmet`. Here is the [link](https://github.com/elixir-lsp/vscode-elixir-ls/issues/243#issuecomment-1422409957) on how to make `emmet` work. While `emmet` provides support for simple `HTML` tags, this extension provides useful snippets for writing logic in `HEEx`.

Simply type in `;<snippet>` and there will be VSCODE auto suggestion with the snippet.

 But first, there are couple of installations we need to make. (See section below)

## Available snippets

### Simple HTML tags

| snippet | generated code |
|---|---|
|;div|`<div class=""></div>`|
|;p|`<p class=""></p>`|
|;ul|`<ul class=""></ul>`|
|;li|`<li class=""></li>`|
|;h1|`<h1 class=""></h1>`|
|;h2|`<h2 class=""></h2>`|
|;h3|`<h3 class=""></h3>`|
|;h4|`<h4 class=""></h4>`|
|;h5|`<h5 class=""></h5>`|
|;h6|`<h6 class=""></h6>`|
|;span|`<span class=""></span>`|
|;form|`<form class=""></form>`|
|;button|`<button class=""></button>`|

### Phoenix specific snippets

| snippet | generated code |
|---|---|
|;pe|`<%=  %>`|
|;plink|`<.link navigate={~p"/"}></.link>`|

All simple HTML tags also have option to be foor loop'ed item, except for `form` and `button` tags. Simply add `fl` after the tag.

For example:

| snippet | generated code |
|---|---|
|;divfl|`<div :for={item <- list_of_items} class=""></div>`|
|;pfl|`<p :for={item <- list_of_items} class=""></p>`|
|;lifl|`<li :for={item <- list_of_items} class=""></li>`|

## Known Issues

A lot of HTML tags are not included in this snippet. HTML tags and other Phoenix Framework related snippets will be populated if demanded by community. Also, there is a lot of room for Phoenix specific snippets.

## Release Notes

Initial release.

### 1.0.0

Initial release of this snippet-extension with the following HTML tags: `div`, `p`, `ul`, `li`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `span`, `form`, `button`. All HTML tags except for `form` and `button` can be Phoenix for loop'ed when you add `fl` after the tag. Two other Phoenix specific snippets include: Code Render block (`<%= %>`), and `link` core component `<.link navigate={~p"/"}></.link>`

---

**Enjoy!**