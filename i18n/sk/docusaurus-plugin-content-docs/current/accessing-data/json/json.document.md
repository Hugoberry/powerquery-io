---
title: Json.Document
---

# Json.Document


Vráti obsah dokumentu JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Vráti obsah dokumentu JSON.

-   `jsonText`: Vráti obsah dokumentu JSON. Hodnota tohto parametra môže byť text alebo binárna hodnota vrátený funkciou ako `File.Contents`.
-   `encoding`: `TextEncoding.Type`, ktorý určuje kódovanie použité v dokumente JSON. Ak je `encoding` vynechané, použije sa kódovanie UTF8.


## Examples

### Example #1
Vráti obsah zadaného textu JSON ako záznam.
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
Vráti obsah lokálneho súboru JSON.
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
Vráti obsah online súboru JSON kódovaného v UTF-16.
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
