---
title: Json.Document
---

# Json.Document


Возвращает содержимое документа JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Возвращает содержимое документа JSON.

-   `jsonText`: содержимое документа JSON. Значение этого параметра может быть текстом или двоичным значением, возвращаемым функцией типа `File.Contents`.
-   `encoding`: `TextEncoding.Type`, который указывает кодировку, используемую в документе JSON. Если `encoding` опущено, используется UTF8.


## Examples

### Example #1
Возвращает содержимое указанного текста JSON в виде записи.
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
Возвращает содержимое локального файла JSON.
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
Возвращает содержимое веб-файла JSON в кодировке UTF16.
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
