---
title: Json.Document
---

# Json.Document


A JSON-dokumentum tartalmát adja vissza.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

A JSON-dokumentum tartalmát adja vissza.

-   `jsonText`: A JSON-dokumentum tartalma. A paraméter értéke lehet szöveg vagy egy függvény által visszaadott bináris érték, például `File.Contents`.
-   `encoding`: A JSON-dokumentumban használt kódolást meghatározó `TextEncoding.Type`. Ha `encoding` nincs megadva, az UTF-8 lesz használva.


## Examples

### Example #1
A megadott JSON-szöveg tartalmát rekordként adja vissza.
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
Visszaadja egy helyi JSON-fájl tartalmát.
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
Egy online UTF16 kódolású JSON-fájl tartalmát adja vissza.
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
