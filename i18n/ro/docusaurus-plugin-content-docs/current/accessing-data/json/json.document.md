---
title: Json.Document
---

# Json.Document


Returnează conţinutul documentului JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Returnează conținutul documentului JSON.

-   `jsonText`: conținutul documentului JSON. Valoarea acestui parametru poate fi text sau o valoare binară returnată de o funcție precum `File.Contents`.
-   `encoding`: un `TextEncoding.Type` care specifică codificarea utilizată în documentul JSON. Dacă `encoding` este omis, se utilizează UTF8.


## Examples

### Example #1
Returnează conținutul textului JSON specificat ca înregistrare.
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
Returnează conținutul unui fișier JSON local.
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
Returnează conținutul unui fișier JSON online, codificat în UTF16.
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
