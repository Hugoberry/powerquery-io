---
title: Text.Start
---

# Text.Start


Tiek atgriezts teksta sākums.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

`text` pirmās `count` rakstzīmes tiek atgrieztas kā teksta vērtība.


## Examples

### Example #1
Iegūstiet Hello, World pirmās 5 rakstzīmes.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
Lai izveidotu privātpersonas e-pasta adresi, izmantojiet vārda pirmās četras rakstzīmes un uzvārda pirmās trīs rakstzīmes.
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
