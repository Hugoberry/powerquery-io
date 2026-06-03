---
title: Json.Document
---

# Json.Document


ส่งกลับเนื้อหาของเอกสาร JSON


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

ส่งกลับเนื้อหาของเอกสาร JSON

-   `jsonText`: เนื้อหาของเอกสาร JSON ค่าของพารามิเตอร์นี้สามารถเป็นข้อความหรือค่าไบนารีที่ส่งกลับโดยฟังก์ชัน เช่น `File.Contents`
-   `encoding`: `TextEncoding.Type` ที่ระบุการเข้ารหัสที่ใช้ในเอกสาร JSON ถ้าเว้น `encoding` ระบบจะใช้ UTF8


## Examples

### Example #1
ส่งกลับเนื้อหาของข้อความ JSON ที่ระบุเป็นระเบียน
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
ส่งกลับเนื้อหาของไฟล์ JSON ภายในเครื่อง
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
ส่งกลับเนื้อหาของไฟล์ JSON ที่เข้ารหัส UTF16 แบบออนไลน์
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
