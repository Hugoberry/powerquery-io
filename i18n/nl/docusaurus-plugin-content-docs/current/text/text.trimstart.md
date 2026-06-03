---
title: Text.TrimStart
---

# Text.TrimStart


Hiermee verwijdert u alle opgegeven voorlopende tekens.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retourneert het resultaat van het verwijderen van alle voorlopende tekens uit de opgegeven `text`. Standaard worden alle voorlopende spaties verwijderd.

-   `text`: de tekst waaruit de voorlopende tekens moeten worden verwijderd.
-   `trim`: overschrijft de spaties die standaard zijn afgekapt. Deze parameter kan een enkel teken of een lijst met enkele tekens zijn. Elke voorlopende knipbewerking wordt gestopt wanneer een niet-afgekapt teken wordt aangetroffen.


## Examples

### Example #1
Voorloopspaties verwijderen uit " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Verwijder voorlopende nullen uit de tekstweergave van een nummer.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Verwijder de voorlopende tekens voor opvulling uit een accountnaam met vaste breedte.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
