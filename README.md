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

Markdown documentation module

`MDDocument` business object definition
---------------------------------------

Markdown document

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `mdDocCode`                                                  | regexp(50)                               | yes*     | yes       |          | Document code                                                                    |
| `mdDocURL`                                                   | url(100)                                 |          |           |          | Document URL                                                                     |
| `mdDocTitle`                                                 | char(100)                                | yes      | yes       |          | Document title                                                                   |
| `mdDocFile`                                                  | document                                 |          | yes       |          | Markdown file                                                                    |
| `mdDocPublished`                                             | boolean                                  |          | yes       |          | Is document published?                                                           |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |

`MDDocumentHistoric` business object definition
-----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `row_ref_id` link to **`MDDocument`**                        | id                                       | yes*     |           |          | -                                                                                |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | -                                                                                |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | -                                                                                |
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
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `mdImgCode`                                                  | regexp(50)                               | yes*     | yes       |          | Markdown image code                                                              |
| `mdImgFile`                                                  | image                                    | yes      | yes       |          | Image                                                                            |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |

`MDDiff` external object definition
-----------------------------------

Diff between markdown documents


`MDViewer` external object definition
-------------------------------------




