---
title: List.Contains
---

# List.Contains


Angiver, om listen indeholder værdien.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Angiver, om listen indeholder den angivne værdi. Returnerer `true` hvis værdien findes på listen, `false` ellers.

-   `list`: Den liste, der skal søges i.
-   `value`: Den værdi, der skal søges efter på listen.
-   `equationCriteria`: (Valgfrit) Sammenligningsfunktionen, der bruges til at bestemme, om to værdier er ens.


## Examples

### Example #1
Find ud af, om listen \{1, 2, 3, 4, 5\} indeholder 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Find ud af, om listen \{1, 2, 3, 4, 5\} indeholder 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Ignorerer store og små bogstaver. Find ud af, om listen indeholder "rabarber".
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Find ud af, om listen indeholder datoen 8. april 2022.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
