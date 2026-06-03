---
title: Json.Document
---

# Json.Document


Retourneert de inhoud van het JSON-document.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Retourneert de inhoud van het JSON-document.

-   `jsonText`: de inhoud van het JSON-document. De waarde van deze parameter kan tekst of een binaire waarde zijn die wordt geretourneerd door een functie zoals `File.Contents`.
-   `encoding`: een `TextEncoding.Type` die de codering specificeert die in het JSON-document wordt gebruikt. Als `encoding` wordt weggelaten, wordt UTF8 gebruikt.


## Examples

### Example #1
Geeft de inhoud van de opgegeven JSON-tekst als record terug.
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
Geeft de inhoud van een lokaal JSON-bestand terug.
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
Geeft de inhoud van een online JSON-bestand met UTF16-codering terug.
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
