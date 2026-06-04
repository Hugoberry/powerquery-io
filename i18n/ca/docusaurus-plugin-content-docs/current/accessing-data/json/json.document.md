---
title: Json.Document
---

# Json.Document


Retorna el contingut del document JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Retorna el contingut del document JSON.

-   `jsonText`: el contingut del document JSON. El valor d'aquest paràmetre pot ser text o un valor binari retornat per una funció com ara `File.Contents`.
-   `encoding`: Un `TextEncoding.Type` que especifica la codificació que es fa servir al document JSON. Si s'omet `encoding`, es farà servir UTF8.


## Examples

### Example #1
Retorna el contingut del text JSON especificat com a registre.
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
Retorna el contingut d'un fitxer JSON local.
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
