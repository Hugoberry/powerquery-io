---
title: Json.Document
---

# Json.Document


Devuelve el contenido del documento JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Devuelve el contenido del documento JSON.

-   `jsonText`: El contenido del documento JSON. El valor de este parámetro puede ser texto o un valor binario devuelto por una función como `File.Contents`.
-   `encoding`: un `TextEncoding.Type` que especifica la codificación utilizada en el documento JSON. Si se omite `encoding`, se utiliza UTF8.


## Examples

### Example #1
Devuelve el contenido del texto JSON especificado como un registro.
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
Devuelve el contenido de un archivo JSON local.
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
Devuelve el contenido de un archivo JSON con codificación UTF16 en línea.
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
