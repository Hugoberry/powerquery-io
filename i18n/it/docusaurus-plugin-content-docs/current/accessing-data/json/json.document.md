---
title: Json.Document
---

# Json.Document


Restituisce il contenuto del documento JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Restituisce il contenuto del documento JSON.

-   `jsonText`: il contenuto del documento JSON. Il valore di questo parametro può essere un valore di testo o binario restituito da una funzione quale `File.Contents`.
-   `encoding`: un `TextEncoding.Type` che specifica la codifica utilizzata nel documento JSON. Se `encoding` è omesso, viene utilizzato UTF8.


## Examples

### Example #1
Restituisce il contenuto del testo JSON specificato come un record.
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
Restituisce il contenuto di un file JSON locale.
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
Restituisce il contenuto di un file JSON con codifica UTF16 online.
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
