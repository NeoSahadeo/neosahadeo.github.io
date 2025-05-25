---
published: true
date: 2025-04-22
title: Fix missing headerfile <gtk/gtk.h>
tags:
  - gtk
  - c
  - tutorial
---
This is an updated version from the legacy journal that will hopefully help you solve the problem shown below \[screenshot\]

![](https://neosahadeo.github.io/journal/images/articles/2025-04-22_11-24.png)

The following assumes you're using **clangd** as the LSP server and have already installed [GTK](https://docs.gtk.org/gtk4/getting_started.html).

A missing header file usually means that the LSP does not know the path of the file(s). This can be fixed using `pkg-config` to get the paths needed to allow the LSP to work correctly.

# Run `pkg-config --cflags gtk[n]`

The above command will create long list of includes that you should copy. Replace n with your GTK version, for example, I have gtk4 installed so I would run `pkg-config --cflags gtk4`

# Create a .clangd file

This will be the file the clangd LSP will use to resolve paths. Paste the code in and format it to look like below (you're paths will be different to mine). If you're using Vim here are the commands to quickly do this `%s/ /\r/g` and `%s/\(.*\)/"\1",/g`

```c
CompileFlags:
	Add: [
		"-I/usr/include/gtk-4.0",
		"-I/usr/include/pango-1.0",
		"-I/usr/include/fribidi",
		"-I/usr/include/harfbuzz",
		"-I/usr/include/gdk-pixbuf-2.0",
		"-I/usr/include/cairo",
		"-I/usr/include/freetype2",
		"-I/usr/include/libpng16",
		"-I/usr/include/pixman-1",
		"-I/usr/include/graphene-1.0",
		"-I/usr/lib/graphene-1.0/include",
		"-mfpmath=sse",
		"-msse",
		"-msse2",
		"-I/usr/include/glib-2.0",
		"-I/usr/lib/glib-2.0/include",
		"-I/usr/include/libmount",
		"-I/usr/include/blkid",
		"-I/usr/include/sysprof-6",
		"-pthread"
	]
```

# Restart your editor / LSP

After creating the file your LSP should recognize the GTK header file.

![](https://neosahadeo.github.io/journal/images/articles/2025-04-22_11-40.png)
