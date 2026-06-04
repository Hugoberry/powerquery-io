---
title: Json.Document
---

# Json.Document


Menghasilkan konten dari dokumen JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Menghasilkan konten dari dokumen JSON.

-   `jsonText`: Konten dari dokumen JSON. Nilai parameter ini dapat berupa teks atau nilai biner yang dihasilkan oleh fungsi seperti `File.Contents`.
-   `encoding`: `TextEncoding.Type` yang menentukan pengodean yang digunakan dalam dokumen JSON. Jika `encoding` tidak disertakan, UTF8 akan digunakan.


## Examples

### Example #1
Menghasilkan konten teks JSON yang ditentukan sebagai catatan.
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
Menghasilkan konten file JSON lokal.
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
Menghasilkan konten file JSON yang dikodekan UTF16 online.
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
