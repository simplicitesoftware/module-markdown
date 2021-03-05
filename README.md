<!--
 ___ _            _ _    _ _    __
/ __(_)_ __  _ __| (_)__(_) |_ /_/
\__ \ | '  \| '_ \ | / _| |  _/ -_)
|___/_|_|_|_| .__/_|_\__|_|\__\___|
            |_| 
-->
![](https://docs.simplicite.io//logos/logo250.png)
* * *

`Markdown` module definition
============================

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=simplicite-modules-Markdown&metric=alert_status)](https://sonarcloud.io/dashboard?id=simplicite-modules-Markdown)

### Introduction

Markdown documentation module.

### Import

To import this module:

- Create a module named `Markdown`
- Set the settings as:

```json
{
	"type": "git",
	"origin": {
		"uri": "https://github.com/simplicitesoftware/module-markdown.git"
	}
}
```

- Click on the _Import module_ button

### Quality

This module can be analysed by the **SonarQube** analysis tool
using this command:

```bash
mvn verify sonar:sonar
```

`MDDocument` business object definition
---------------------------------------

Markdown document

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mdDocCode`                                                  | regexp(50)                               | yes*     | yes       |          | Document code                                                                    |
| `mdDocURL`                                                   | url(100)                                 |          |           |          | Document URL                                                                     |
| `mdDocTitle`                                                 | char(100)                                | yes      | yes       |          | Document title                                                                   |
| `mdDocFile`                                                  | document                                 |          | yes       |          | Markdown file                                                                    |
| `mdDocPublished`                                             | boolean                                  |          | yes       |          | Is document published?                                                           |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`MDDocumentHistoric` business object definition
-----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `row_ref_id` link to **`MDDocument`**                        | id                                       | yes*     |           |          | Record row ID                                                                    |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | History record index                                                             |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | Created by                                                                       |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | Created date                                                                     |
| `mdDocCode`                                                  | regexp(50)                               | yes*     | yes       |          | Document code                                                                    |
| `mdDocTitle`                                                 | char(100)                                | yes      | yes       |          | Document title                                                                   |
| `mdDocFile`                                                  | document                                 |          | yes       |          | Markdown file                                                                    |

### Custom actions

* `MDDocDiff`: 

`MDImage` business object definition
------------------------------------

Markdown image

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mdImgCode`                                                  | regexp(50)                               | yes*     | yes       |          | Markdown image code                                                              |
| `mdImgFile`                                                  | image                                    | yes      | yes       |          | Image                                                                            |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`MDDiff` external object definition
-----------------------------------

Diff between markdown documents


`MDViewer` external object definition
-------------------------------------

Markdown documentation viewer


