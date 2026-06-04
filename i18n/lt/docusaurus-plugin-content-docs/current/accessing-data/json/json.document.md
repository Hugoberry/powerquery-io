---
title: Json.Document
---

# Json.Document


Pateikiamas JSON dokumento turinys.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Pateikiamas JSON dokumento turinys.

-   `jsonText`: JSON dokumento turinys. Šio parametro reikšmė gali būti tekstas arba dvejetainė reikšmė, kurią pateikia funkcija, pavyzdžiui, `File.Contents`.
-   `encoding`: `TextEncoding.Type` nurodo kodavimą, naudojamą JSON dokumente. Jei `encoding` praleistas, naudojama UTF8.


## Examples

### Example #1
Pateikiamas nurodyto JSON teksto turinį kaip įrašas.
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
Pateikiamas vietinio JSON failo turinys.
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
Pateikiamas internetinio UTF16 užkoduoto JSON failo turinys.
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
