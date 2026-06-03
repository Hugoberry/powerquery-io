---
title: Json.Document
---

# Json.Document


Returnerer indholdet af JSON-dokumentet.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Returnerer indholdet af JSON-dokumentet.

-   `jsonText`: Indholdet af JSON-dokumentet. Værdien af denne parameter kan være tekst eller en binær værdi, der returneres af en funktion som `File.Contents`.
-   `encoding`: En `TextEncoding.Type`, der angiver den kodning, der bruges i JSON-dokumentet. Hvis `encoding` udlades, bruges UTF-8.


## Examples

### Example #1
Returnerer indholdet af den angivne JSON-tekst som en post.
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
Returnerer indholdet af en lokal JSON-fil.
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
Returns the content of an online UTF16 encoded JSON file.
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
