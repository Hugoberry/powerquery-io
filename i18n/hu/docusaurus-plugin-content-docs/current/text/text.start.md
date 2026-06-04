---
title: Text.Start
---

# Text.Start


A szöveg kezdetét adja vissza.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

A(z) `text` első `count` karakterét adja vissza szöveges értékként.


## Examples

### Example #1
A „Hello, World” karakterlánc első 5 karakterének beolvasása
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
Egy személy e-mail-címének létrehozásához használja az utónév első négy karakterét és a vezetéknév első három karakterét.
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
