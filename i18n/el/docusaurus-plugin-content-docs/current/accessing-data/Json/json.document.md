---
title: Json.Document
---

# Json.Document


Επιστρέφει το περιεχόμενο του εγγράφου JSON.


## Syntax

```powerquery
Json.Document(
    jsonText as any,
    optional encoding as TextEncoding.Type
) as any
```


## Remarks

Επιστρέφει το περιεχόμενο του εγγράφου JSON.

-   `jsonText`: Το περιεχόμενο του εγγράφου JSON. Η τιμή αυτής της παραμέτρου μπορεί να είναι κείμενο ή δυαδική τιμή που επιστρέφεται από μια συνάρτηση όπως `File.Contents`.
-   `encoding`: Μια συνάρτηση `TextEncoding.Type` που καθορίζει την κωδικοποίηση που χρησιμοποιείται στο έγγραφο JSON. Εάν η `encoding` παραλειφθεί, χρησιμοποιείται UTF8.


## Examples

### Example #1
Επιστρέφει το περιεχόμενο του καθορισμένου κειμένου JSON ως εγγραφή.
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
Επιστρέφει το περιεχόμενο ενός τοπικού αρχείου JSON.
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
Returns the content of an online UTF16 encoded JSON file.
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
