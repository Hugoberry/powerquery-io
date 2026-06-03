---
title: Json.Document
---

# Json.Document


Zwraca zawartość dokumentu JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Zwraca zawartość dokumentu JSON.

-   `jsonText`: zawartość dokumentu JSON. Wartość tego parametru może być wartością tekstową lub binarną zwracaną przez funkcję, taką jak `File.Contents`.
-   `encoding`: kod `TextEncoding.Type` określający kodowanie używane w dokumencie JSON. Jeśli `encoding` zostanie pominięty, zostanie użyty UTF8.


## Examples

### Example #1
Zwraca zawartość określonego tekstu JSON jako rekord.
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
Zwraca zawartość lokalnego pliku JSON.
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
Zwraca zawartość pliku JSON zakodowanego w formacie UTF16 w trybie online.
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
