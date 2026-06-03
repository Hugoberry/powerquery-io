---
title: Text.Start
---

# Text.Start


पाठ का प्रारंभ लौटाता है.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

पाठ मान के रूप में `text` के प्रथम `count` वर्ण लौटाता है.


## Examples

### Example #1
"Hello, World" के प्रथम 5 वर्ण प्राप्त करें.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
किसी व्यक्ति का ईमेल पता बनाने के लिए पहले नाम के पहले चार वर्णों, और अंतिम नाम के पहले तीन वर्णों का उपयोग करें.
```powerquery
let
    Source = #table(type table [First Name = text, Last Name = text],
    {
        {"Douglas", "Elis"},
        {"Ana", "Jorayew"},
        {"Rada", "Mihaylova"}
    }),
    EmailAddress = Table.AddColumn(
        Source,
        "Email Address",
        each Text.Combine({
            Text.Start([First Name], 4),
            Text.Start([Last Name], 3),
            "@contoso.com"
        })
    )
in
    EmailAddress
```

Result: 
```powerquery
#table(type table [First Name = text, Last Name = text, Email Address = text],
{
    {"Douglas", "Elis", "DougEli@contoso.com"},
    {"Ana", "Jorayew", "AnaJor@contoso.com"},
    {"Rada", "Mihaylova", "RadaMih@contoso.com"}
})
```




## Category
Text.Extraction
