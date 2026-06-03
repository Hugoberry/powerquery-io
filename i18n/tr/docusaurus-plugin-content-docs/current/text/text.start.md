---
title: Text.Start
---

# Text.Start


Metnin başlangıcını döndürür


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

`text` öğesinin ilk `count` karakterini metin değeri olarak döndürür.


## Examples

### Example #1
"Hello, World" metninin ilk 5 karakterini alır.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
Kişinin e-posta adresini oluşturmak için adının ilk dört karakteri ile soyadının ilk üç karakterini kullanın.
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
