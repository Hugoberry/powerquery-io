---
title: Text.Start
---

# Text.Start


Retourne le début du texte.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

Retourne le premier caractère `count` de `text` comme valeur de texte.


## Examples

### Example #1
Obtient les 5 premiers caractères du texte, « Hello, World ».
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
Utilisez les quatre premiers caractères du prénom et les trois premiers caractères du nom pour créer l’adresse e-mail d’un individu.
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
