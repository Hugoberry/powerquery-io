---
title: List.Contains
---

# List.Contains


Udáva, či zoznam obsahuje hodnotu.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Udáva, či zoznam obsahuje zadanú hodnotu. Vráti `true` ak sa hodnota nájde v zozname, inak `false`.

-   `list`: Zoznam na vyhľadávanie.
-   `value`: Hodnota, ktorá sa má vyhľadať v zozname.
-   `equationCriteria`: (Voliteľné) Porovnávač, ktorý sa používa na určenie, či sa dve hodnoty rovnajú.


## Examples

### Example #1
Určte, či zoznam \{1, 2, 3, 4, 5\} obsahuje číslo 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Určte, či zoznam \{1, 2, 3, 4, 5\} obsahuje číslo 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Ignorovať prípad, určiť, či zoznam obsahuje „rebarbora“.
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
Zistite, či zoznam obsahuje dátum 8. apríl 2022.
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
