---
published: true
date: 2025-04-07
title: Fix for TemplateError 11ty
tags:
  - 11ty
  - programming
  - patch
  - bug
---
I was compiling my blog page and I got an error:

```
[11ty] Problem writing Eleventy templates: (more in DEBUG output)
[11ty] 1. Having trouble rendering njk template ./src/posts/2025-04-07-controller-for-piperwire-wires-and-sample-rate.md (via TemplateContentRenderError)
[11ty] 2. (./src/posts/2025-04-07-controller-for-piperwire-wires-and-sample-rate.md)
[11ty]   Error: expected end of comment, got end of file (via Template render error)
[11ty]
[11ty] Original error stack trace: Template render error: (./src/posts/2025-04-07-controller-for-piperwire-wires-and-sample-rate.md)
[11ty]   Error: expected end of comment, got end of file
[11ty]     at Object._prettifyError (/home/neosahadeo/Documents/Projects/journal/node_modules/.pnpm/nunjucks@3.2.4_chokidar@3.6.0/node_modules/nunjucks/src/lib.js:32:11)
[11ty]     at Template.init (/home/neosahadeo/Documents/Projects/journal/node_modules/.pnpm/nunjucks@3.2.4_chokidar@3.6.0/node_modules/nunjucks/src/environment.js:451:19)
[11ty]     at Template.Obj (/home/neosahadeo/Documents/Projects/journal/node_modules/.pnpm/nunjucks@3.2.4_chokidar@3.6.0/node_modules/nunjucks/src/object.js:51:15)
[11ty]     at new Template (/home/neosahadeo/Documents/Projects/journal/node_modules/.pnpm/nunjucks@3.2.4_chokidar@3.6.0/node_modules/nunjucks/src/environment.js:419:18)
[11ty]     at Nunjucks.compile (/home/neosahadeo/Documents/Projects/journal/node_modules/.pnpm/@11ty+eleventy@2.0.1/node_modules/@11ty/eleventy/src/Engines/Nunjucks.js:406:14)
[11ty]     at Markdown.compile (/home/neosahadeo/Documents/Projects/journal/node_modules/.pnpm/@11ty+eleventy@2.0.1/node_modules/@11ty/eleventy/src/Engines/Markdown.js:68:28)
[11ty]     at TemplateRender.getCompiledTemplate (/home/neosahadeo/Documents/Projects/journal/node_modules/.pnpm/@11ty+eleventy@2.0.1/node_modules/@11ty/eleventy/src/TemplateRender.js:292:26)
[11ty]     at Template.compile (/home/neosahadeo/Documents/Projects/journal/node_modules/.pnpm/@11ty+eleventy@2.0.1/node_modules/@11ty/eleventy/src/TemplateContent.js:396:42)
[11ty]     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
[11ty]     at async Template._render (/home/neosahadeo/Documents/Projects/journal/node_modules/.pnpm/@11ty+eleventy@2.0.1/node_modules/@11ty/eleventy/src/TemplateContent.js:527:16)
```

Digging a bit deeper... and deeper, I found a bug.

So basically when I have a bash script that tries to get the length of an array with this syntax `${#array[@]}`, and the Templating Engine for 11ty thinks that `{\#...}` (yes I did comment it out because it broke the patch) is part of its syntax.

I created a small patch \[not a solution\] for it. I might work on fixing the bug in the Engine at a later date. For now, if you're experiencing the same bug, install the patched version from my [Github v2 Bash Patch](https://github.com/NeoSahadeo/eleventy-v2-Bash-Patch).

```
pnpm install https://github.com/NeoSahadeo/eleventy-v2-Bash-Patch
```
