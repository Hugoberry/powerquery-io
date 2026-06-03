---
title: Json.Document
---

# Json.Document


Gibt den Inhalt des JSON-Dokuments zurück.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Gibt den Inhalt des JSON-Dokuments zurück.

-   `jsonText`: Der Inhalt des JSON-Dokuments. Der Wert dieses Parameters kann Text oder ein binärer Wert sein, der von einer Funktion wie `File.Contents` zurückgegeben wird.
-   `encoding`: Ein `TextEncoding.Type`, der die im JSON-Dokument verwendete Codierung angibt. Wenn `encoding` weggelassen wird, wird UTF8 verwendet.


## Examples

### Example #1
Gibt den Inhalt des angegebenen JSON-Texts als Datensatz zurück.
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
Gibt den Inhalt einer lokalen JSON-Datei zurück.
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
Gibt den Inhalt einer UTF-16-codierten JSON-Onlinedatei zurück.
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
