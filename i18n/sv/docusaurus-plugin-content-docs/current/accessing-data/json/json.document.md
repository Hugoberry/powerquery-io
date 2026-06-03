---
title: Json.Document
---

# Json.Document


Returnerar innehållet i JSON-dokumentet.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Returnerar innehållet i JSON-dokumentet.

-   `jsonText`: Innehållet i JSON-dokumentet. Värdet för den här parametern kan vara text eller ett binärt värde som returneras av en funktion som `File.Contents`.
-   `encoding`: En `TextEncoding.Type` som anger den kodning som används i JSON-dokumentet. Om `encoding` utelämnas används UTF8.


## Examples

### Example #1
Returnerar innehållet i den angivna JSON-texten som en post.
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
Returnerar innehållet i en lokal JSON-fil.
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
Returnerar innehållet i en Online UTF16-kodad JSON-fil.
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
