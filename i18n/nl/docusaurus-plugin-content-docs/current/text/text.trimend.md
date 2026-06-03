---
title: Text.TrimEnd
---

# Text.TrimEnd


Hiermee verwijdert u alle opgegeven navolgende tekens.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retourneert het resultaat van het verwijderen van alle navolgende tekens uit de opgegeven `text`. Standaard worden alle navolgende spaties verwijderd.

-   `text`: de tekst waaruit de navolgende tekens moeten worden verwijderd.
-   `trim`: overschrijft de spaties die standaard zijn afgekapt. Deze parameter kan een enkel teken of een lijst met enkele tekens zijn. Elke navolgende knipbewerking wordt gestopt wanneer een niet-afgekapt teken wordt aangetroffen.


## Examples

### Example #1
Volgspaties verwijderen uit " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Verwijder navolgende nullen uit een tekstweergave van een opgevuld zwevend-kommagetal.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Verwijder de navolgende tekens voor opvulling uit een accountnaam met vaste breedte.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
