---
title: Json.Document
---

# Json.Document


JSON दस्तावेज़ की सामग्री लौटाता है.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

JSON दस्तावेज़ की सामग्री लौटाता है.

-   `jsonText`: JSON दस्तावेज़ की सामग्री. इस पैरामीटर का मान टेक्स्ट या `File.Contents` जैसे फ़ंक्शन द्वारा लौटाया गया बाइनरी मान हो सकता है.
-   `encoding`: एक `TextEncoding.Type` जो JSON दस्तावेज़ में उपयोग की गई एन्कोडिंग निर्दिष्ट करता है. अगर `encoding` को छोड़ दिया जाता है, तो UTF8 का उपयोग किया जाता है.


## Examples

### Example #1
रिकॉर्ड के रूप में निर्दिष्ट JSON टेक्स्ट की सामग्री लौटाता है.
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
स्थानीय JSON फ़ाइल की सामग्री लौटाता है.
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
ऑनलाइन UTF16 एन्कोडेड JSON फ़ाइल की सामग्री लौटाता है.
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
