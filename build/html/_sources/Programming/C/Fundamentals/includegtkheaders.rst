How to include GTK header files
===============================

This is using ``clangd`` with the ``gcc`` compiler.

Error: ``('gtk/gtk.h' file not found)``
***************************************

.. code::

  #include <gtk/gtk.h>

  int main (void) {
    return 0;
  }


Solution
********

In order to fix this, there has to be a ``clang.cfg`` with the
location of the associated libraries.

**Command**

.. code::

   pkg-config --cflags gtk4

**Output**

.. code::

  -I/opt/gtk/include/gtk-4.0 -I/usr/include/pango-1.0 -I/usr/include/harfbuzz -I/usr/include/gdk-pixbuf-2.0 -I/usr/include/cairo -I/usr/include/glib-2.0 -I/usr/lib/glib-2.0/include -I/usr/include/freetype2 -I/usr/include/graphene-1.0 -I/usr/lib/graphene-1.0/include -mfpmath=sse -msse -msse2 -I/usr/include/libmount -I/usr/include/blkid -I/usr/include/fribidi -I/usr/include/sysprof-6 -pthread -I/usr/include/libpng16 -I/usr/include/pixman-1


Then using VIM commands format the string to this (filename: clang.cfg):

.. code::

  CompileFlags:
    Add: [
      "-I/opt/gtk/include/gtk-4.0",
      "-I/usr/include/pango-1.0",
      "-I/usr/include/harfbuzz",
      "-I/usr/include/gdk-pixbuf-2.0",
      "-I/usr/include/cairo",
      "-I/usr/include/glib-2.0",
      "-I/usr/lib/glib-2.0/include",
      "-I/usr/include/freetype2",
      "-I/usr/include/graphene-1.0",
      "-I/usr/lib/graphene-1.0/include",
      "-mfpmath=sse",
      "-msse",
      "-msse2",
      "-I/usr/include/libmount",
      "-I/usr/include/blkid",
      "-I/usr/include/fribidi",
      "-I/usr/include/sysprof-6",
      "-pthread",
      "-I/usr/include/libpng16",
      "-I/usr/include/pixman-1"
    ]

Command list:

.. code::

   %s/ /\r/g
   %s/\(.*\)/"\1",/g
