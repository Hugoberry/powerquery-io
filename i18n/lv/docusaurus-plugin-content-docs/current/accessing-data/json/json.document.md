---
title: Json.Document
---

# Json.Document


Tiek atgriezts JSON dokumenta saturs.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Tiek atgriezts JSON dokumenta saturs.

-   `jsonText`: JSON dokumenta saturs. Šī parametra vērtība var būt teksts vai bināra vērtība, ko atgriež funkcija, piemēram, `File.Contents`.
-   `encoding`: `TextEncoding.Type`, kas norāda JSON dokumentā izmantoto kodējumu. Ja `encoding` tiek izlaists, tiek izmantots UTF8.


## Examples

### Example #1
Atgriež norādītā JSON teksta saturu kā ierakstu.
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
Atgriež lokālā JSON faila saturu.
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
Atgriež tiešsaistes UTF16 kodētā JSON faila saturu.
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
