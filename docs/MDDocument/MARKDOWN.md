![Logo](https://www.simplicite.io/resources/logos/logo250.png)
* * *

Markdown documentation module documentation
===========================================

The markdown documentation module allows to create custom documentation (including active tags) and to render them as either public or private HTML pages.

It provides:

- Markdown document and image business objects
- A markdown document viewer

Business model
--------------

![Markdown module model]([MODEL:Markdown])

[OBJECTDOC:MDDocument]

[OBJECTDOC:MDImage]

Viewer
------

The markdown viewer renders a markdown document as an HTML page.

A markdown document can be:

* A markdown document object record
* A disposition resource of type _Markdown_

The markdown viewer URL scheme is: `[URL][/jsp]/ext/MDViewer?[doc=<markdown document code>|res=<markdown resource code>]`

Documents
---------

The markdown documents can include active tags `[<tag[:params]>]`.
These tags are preprocessed on the fly before the document is being displayed by the viewer.

The available tags are:

- `URL`: substitutes as application base URL
- `ROOT`: substitutes as application root path
- `IMAGE:<markdown image code>`: substitutes as the base 64 data URL of the image
- `MODEL:<business model code>`: substitutes as the base 64 data URL of the business model image
- `DOC:<markdown document code>`: substitutes as the URL of another markdown docume t (typical usage is to display a link to another document)
- `MODULEDOC:<module name>[:<title level>` substitutes as the designated module standard documentation (default title level is `2`)
- `OBJECTDOC:<object name>[:<title level>` substitutes as the designated object standard documentation (default title level is `3`)
- `RESOURCE:<disposition resource code>`: substitutes to:
	- the base 64 data URL of the resource for image resources
	- the content of the resource for markdown resources (note that in this case the tags included in this content are also processed)