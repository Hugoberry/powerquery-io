---
title: Text.TrimStart
---

# Text.TrimStart


Elimină toate caracterele de început specificate.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnează rezultatul eliminării tuturor caracterelor de început din `text` specificate. În mod implicit, toate caracterele spațiilor albe de început sunt eliminate.

-   `text`: textul din care vor fi eliminate caracterele de început.
-   `trim`: Înlocuiește caracterele spațiilor albe care sunt trunchiate în mod implicit. Acest parametru poate fi un caracter unic sau o listă de caractere unice. Fiecare operațiune de trunchiere de la început se oprește atunci când se întâlnește un caracter care nu este trunchiat.


## Examples

### Example #1
Eliminaţi spaţiile goale de la început din „ a b c d ”.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Eliminați zerourile inițiale din reprezentarea text a unui număr.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Eliminați caracterele de spațiere de la început dintr-un nume de cont cu lățime fixă.
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
