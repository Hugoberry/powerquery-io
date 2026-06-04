---
title: Json.Document
---

# Json.Document


Palauttaa JSON-tiedoston sisällön.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Palauttaa JSON-asiakirjan sisällön.

-   `jsonText`: JSON-asiakirjan sisältö. Tämän parametrin arvo voi olla teksti tai binaariarvo, jonka palauttaa funktio, kuten `File.Contents`.
-   `encoding`:`TextEncoding.Type`, joka määrittää JSON-asiakirjassa käytetyn koodauksen. Jos `encoding` jätetään pois, käytetään UTF8-koodausta.


## Examples

### Example #1
Palauttaa määritetyn JSON-tekstin sisällön tietueena.
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
Palauttaa paikallisen JSON-tiedoston sisällön.
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
Palauttaa verkkokäyttöisen UTF16-koodatun JSON-tiedoston sisällön.
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
