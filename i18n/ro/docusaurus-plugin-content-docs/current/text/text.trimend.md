---
title: Text.TrimEnd
---

# Text.TrimEnd


Elimină toate caracterele de sfârșit specificate.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnează rezultatul eliminării tuturor caracterelor de sfârșit din `text` specificate. În mod implicit, toate caracterele spațiilor albe de sfârșit sunt eliminate.

-   `text`: textul din care vor fi eliminate caracterele suplimentare.
-   `trim`: Înlocuiește caracterele spațiilor albe care sunt trunchiate în mod implicit. Acest parametru poate fi un caracter unic sau o listă de caractere unice. Fiecare operațiune de trunchiere de la sfârșit se oprește atunci când se întâlnește un caracter care nu este trunchiat.


## Examples

### Example #1
Eliminaţi spaţiile goale de la sfârşit din „ a b c d ”.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Eliminați zerourile de la sfârșit dintr-o reprezentare text a unui număr în virgulă mobilă completat.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Eliminați caracterele de spațiere de la sfârșit dintr-un nume de cont cu lățime fixă.
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
