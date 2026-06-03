---
title: Json.Document
---

# Json.Document


Retourne le contenu du document JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Retourne le contenu du document JSON.

-   `jsonText` : Contenu du document JSON. La valeur de ce paramètre peut être du texte ou une valeur binaire retournée par une fonction telle que `File.Contents`.
-   `encoding` : Un `TextEncoding.Type` qui spécifie l’encodage utilisé dans le document JSON. Si `encoding` est omis, UTF8 est utilisé.


## Examples

### Example #1
Renvoie le contenu du texte JSON spécifié sous forme d’enregistrement.
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
Renvoie le contenu d’un fichier JSON local.
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
Retourne le contenu d’un fichier JSON en ligne encodé en UTF16.
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
