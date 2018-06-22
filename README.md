![](https://www.simplicite.io/resources//logos/logo250.png)
* * *

`Markdown` module definition
============================

Markdown documentation module

`MDDocument` business object definition
---------------------------------------

Markdown document

### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `mdDocCode`                                                  | regexp(50)                               | x*  | x   | Document code                                                                    |
| `mdDocURL`                                                   | url(100)                                 |     |     | Document URL                                                                     |
| `mdDocTitle`                                                 | char(100)                                | x   | x   | Document title                                                                   |
| `mdDocFile`                                                  | document                                 |     | x   | Markdown file                                                                    |
| `mdDocPublished`                                             | boolean                                  |     | x   | Is document published?                                                           |
| `row_module_id` link to **`Module`**                         | id                                       | x   | x   | -                                                                                |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |     |     | -                                                                                |

### Custom actions

No custom action

`MDDocumentHistoric` business object definition
-----------------------------------------------



### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `row_ref_id` link to **`MDDocument`**                        | id                                       | x*  |     | -                                                                                |
| `row_idx`                                                    | int(11)                                  | x*  | x   | -                                                                                |
| `created_by_hist`                                            | char(100)                                | x*  |     | -                                                                                |
| `created_dt_hist`                                            | datetime                                 | x*  |     | -                                                                                |
| `mdDocCode`                                                  | regexp(50)                               | x*  | x   | Document code                                                                    |
| `mdDocTitle`                                                 | char(100)                                | x   | x   | Document title                                                                   |
| `mdDocFile`                                                  | document                                 |     | x   | Markdown file                                                                    |

### Custom actions

* `MDDocDiff`: 

`MDImage` business object definition
------------------------------------

Markdown image

### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `mdImgCode`                                                  | regexp(50)                               | x*  | x   | Markdown image code                                                              |
| `mdImgFile`                                                  | image                                    | x   | x   | Image                                                                            |
| `row_module_id` link to **`Module`**                         | id                                       | x   | x   | -                                                                                |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |     |     | -                                                                                |

### Custom actions

No custom action

