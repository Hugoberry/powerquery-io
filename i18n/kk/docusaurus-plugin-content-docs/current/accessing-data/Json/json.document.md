---
title: Json.Document
---

# Json.Document


JSON құжатының мазмұнын қайтарады.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

JSON құжатының мазмұнын қайтарады.

-   `jsonText`: JSON құжатының мазмұны. Бұл параметрдің мәні мәтін немесе `File.Contents` сияқты функциядан қайтарылатын екілік мән болуы мүмкін.
-   `encoding`: JSON құжатында қолданылатын кодтауды көрсететін `TextEncoding.Type`. `encoding` көрсетілмесе, UTF8 қолданылады.


## Examples

### Example #1
Көрсетілген JSON мәтінінің мазмұнын жазба ретінде қайтарады.
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
Жергілікті JSON файлының мазмұнын қайтарады.
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
Онлайн UTF16 форматында кодталған JSON файлының мазмұнын қайтарады.
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
