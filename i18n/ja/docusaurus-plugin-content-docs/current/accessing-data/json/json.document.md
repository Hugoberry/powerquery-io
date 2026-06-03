---
title: Json.Document
---

# Json.Document


JSON ドキュメントの内容を返します。


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

JSON ドキュメントの内容を返します。

-   `jsonText`: JSON ドキュメントの内容。このパラメーターの値は、`File.Contents` のような関数によって返されるテキストまたはバイナリ値です。
-   `encoding`: JSON ドキュメントで使用されるエンコードを指定する `TextEncoding.Type`。`encoding` を省略すると、UTF8 が使用されます。


## Examples

### Example #1
指定された JSON テキストの内容をレコードとして返します。
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
ローカルの JSON ファイルの内容を返します。
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
オンライン UTF16 でエンコードされた JSON ファイルの内容を返します。
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
