---
title: Json.Document
---

# Json.Document


傳回 JSON 文件的內容。


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

傳回 JSON 文件的內容。

-   `jsonText`：JSON 文件的內容。此參數的值可以是 `File.Contents` 等函數傳回的文字或二進位值。
-   `encoding`：指定 JSON 文件中所用編碼的 `TextEncoding.Type`。如果已省略 `encoding`，則會使用 UTF8。


## Examples

### Example #1
傳回指定 JSON 文字的內容做為記錄。
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
傳回本機 JSON 檔案的內容。
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
傳回線上 UTF16 編碼 JSON 檔案的內容。
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
