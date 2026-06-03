---
title: Text.Start
---

# Text.Start


Retourneert het begin van de tekst.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

Retourneert de eerste `count` tekens van `text` als een tekstwaarde.


## Examples

### Example #1
De eerste vijf tekens van de tekst "Hallo, Wereld" ophalen
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
Gebruik de eerste vier tekens van de voornaam en de eerste drie tekens van de achternaam om het e-mailadres van een persoon te maken.
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
