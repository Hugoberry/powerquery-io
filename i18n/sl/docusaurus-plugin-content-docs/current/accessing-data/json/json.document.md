---
title: Json.Document
---

# Json.Document


Vrne vsebino dokumenta JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Vrne vsebino dokumenta JSON.

-   `jsonText`: vsebina dokumenta JSON. Vrednost tega parametra je lahko besedilo ali binarna vrednost, ki jo vrne funkcija, kot je `File.Contents`.
-   `encoding`:`TextEncoding.Type`, ki določa kodiranje, uporabljeno v dokumentu JSON. Če ne navedete `encoding`, se uporablja UTF8.


## Examples

### Example #1
Vrne vsebino navedenega besedila JSON kot zapis.
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
Vrne vsebino lokalne datoteke JSON.
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
Vrne vsebino spletne datoteke JSON, kodirane z UTF16.
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
