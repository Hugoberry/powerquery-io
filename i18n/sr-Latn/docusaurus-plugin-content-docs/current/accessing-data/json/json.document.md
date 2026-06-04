---
title: Json.Document
---

# Json.Document


Vraća sadržaj JSON dokumenta.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Vraća sadržaj JSON dokumenta.

-   `jsonText`: Sadržaj JSON dokumenta. Vrednost ovog parametra može biti tekst ili binarna vrednost koju vraća funkcija kao što je `File.Contents`.
-   `encoding`: `TextEncoding.Type` koji određuje kodiranje koje se koristi u JSON dokumentu. Ako `encoding` nije navedeno, koristi se UTF8.


## Examples

### Example #1
Vraća sadržaj navedenog JSON teksta kao zapis.
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
Vraća sadržaj lokalne JSON datoteke.
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
Vraća sadržaj JSON datoteke na mreži kodirane u UTF16 formatu.
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
