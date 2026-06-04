---
title: Json.Document
---

# Json.Document


Mengembalikan kandungan bagi dokumen JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Mengembalikan kandungan bagi dokumen JSON.

-   `jsonText`: Kandungan bagi dokumen JSON. Nilai parameter ini boleh jadi teks atau nilai binari yang dikembalikan oleh fungsi seperti `File.Contents`.
-   `encoding`: A `TextEncoding.Type` itu menentukan pengekodan yang digunakan dalam dokumen JSON. Jika `encoding` tidak dimasukkan, UTF8 akan digunakan.


## Examples

### Example #1
Mengembalikan kandungan teks JSON yang ditentukan sebagai satu rekod.
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
Mengembalikan kandungan fail JSON tempatan.
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
Mengembalikan kandungan fail JSON yang dikodkan UTF16 dalam talian.
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
