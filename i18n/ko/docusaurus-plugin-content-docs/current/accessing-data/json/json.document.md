---
title: Json.Document
---

# Json.Document


JSON 문서의 내용을 반환합니다.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

JSON 문서의 내용을 반환합니다.

-   `jsonText`: JSON 문서의 내용을 반환합니다. 이 매개변수의 값은 `File.Contents`와 같은 함수에서 반환된 이진 값 또는 텍스트일 수 있습니다.
-   `encoding`: JSON 문서에 사용되는 인코딩을 지정하는 `TextEncoding.Type`입니다. `encoding`이 생략되면 UTF8이 사용됩니다.


## Examples

### Example #1
지정된 JSON 텍스트의 내용을 레코드로 반환합니다.
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
로컬 JSON 파일의 내용을 반환합니다.
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
온라인 UTF16으로 인코딩된 JSON 파일의 내용을 반환합니다.
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
