---
title: Json.Document
---

# Json.Document


返回 JSON 文档的内容。


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

返回 JSON 文档的内容。

-   `jsonText`: JSON 文档的内容。此参数的值可以是文本，也可以是 `File.Contents` 等函数返回的二进制值。
-   `encoding`: `TextEncoding.Type`，指定 JSON 文档中使用的编码。如果省略 `encoding`，则使用 UTF8。


## Examples

### Example #1
以记录形式返回指定 JSON 文本的内容。
```powerquery
let
    Source = "{
        ""project"": ""Contosoware"",
        ""description"": ""A comprehensive initiative aimed at enhancing digital presence."",
        ""components"": [
            ""Website Development"",
            ""CRM Implementation"",
            ""Mobile Application""
        ]
    }",
    jsonDocument = Json.Document(Source)
in
    jsonDocument
```

Result: 
```powerquery
[
    project = "Contosoware",
    description = "A comprehensive initiative aimed at enhancing digital presence."
    components =
    {
        "Website Development",
        "CRM Implementation",
        "Mobile Application"
    }
]
```


### Example #2
返回本地 JSON 文件的内容。
```powerquery
let
    Source = Json.Document(
        File.Contents("C:\test-examples\JSON\Contosoware.json")
    )
in
    Source
```

Result: 
```powerquery
A record, list, or primitive value representing the JSON data contained in the file
```


### Example #3
返回联机 UTF16 编码 JSON 文件的内容。
```powerquery
let
    Source = Json.Document(
        Web.Contents("htts://contoso.com/products/Contosoware.json"),
        TextEncoding.Utf16)
    )
in
    Source
```

Result: 
```powerquery
A record, list, or primitive value representing the JSON UTF16 data contained in the file
```




## Category
Accessing data
