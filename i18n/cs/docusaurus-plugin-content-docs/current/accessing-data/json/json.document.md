---
title: Json.Document
---

# Json.Document


Vrátí obsah dokumentu JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Vrátí obsah dokumentu JSON.

-   `jsonText`: Obsah dokumentu JSON. Hodnotou tohoto parametru může být text nebo binární hodnota vrácená funkcí, jako je `File.Contents`.
-   `encoding`: `TextEncoding.Type` určující kódování použité v dokumentu JSON. Pokud je `encoding` vynecháno, použije se UTF8.


## Examples

### Example #1
Vrátí obsah zadaného textu JSON jako záznam.
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
Vrátí obsah místního souboru JSON.
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
Vrátí obsah online souboru JSON s kódováním UTF16.
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
