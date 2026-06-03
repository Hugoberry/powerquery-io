---
title: Json.Document
---

# Json.Document


Trả về nội dung của tài liệu JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Trả về nội dung của tài liệu JSON.

-   `jsonText`: Nội dung của tài liệu JSON. Giá trị của tham số này có thể là văn bản hoặc giá trị nhị phân được trả về bởi một hàm như `File.Contents`.
-   `encoding`: Một `TextEncoding.Type` chỉ định mã hóa dùng trong tài liệu JSON. Nếu `encoding` bị bỏ qua, UTF8 sẽ được sử dụng.


## Examples

### Example #1
Trả về nội dung của văn bản JSON được chỉ định dưới dạng bản ghi.
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
Trả về nội dung của tệp JSON cục bộ.
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
Trả về nội dung của tệp JSON được mã hóa UTF16 trực tuyến.
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
