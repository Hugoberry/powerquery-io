---
title: Json.Document
---

# Json.Document


Retorna o conteúdo do documento JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Retorna o conteúdo do documento JSON.

-   `jsonText`: o conteúdo do documento JSON. O valor desse parâmetro pode ser texto ou um valor binário retornado por uma função como `File.Contents`.
-   `encoding`: um `TextEncoding.Type` que especifica a codificação usada no documento JSON. Se `encoding` for omitido, será usado UTF8.


## Examples

### Example #1
Retorna o conteúdo do texto JSON especificado como um registro.
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
Retorna o conteúdo de um arquivo JSON local.
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
Retorna o conteúdo de um arquivo JSON online codificado em UTF16.
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
