---
title: List.ContainsAny
---

# List.ContainsAny


Udáva, či zoznam obsahuje niektorú z hodnôt v inom zozname.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Udáva, či zoznam obsahuje niektorú z hodnôt z iného zoznamu. Vráti `true` ak sa hodnoty nájdu v zozname, inak `false`.

-   `list`: Zoznam na vyhľadávanie.
-   `values`: Zoznam hodnôt, ktoré sa majú vyhľadať v prvom zozname.
-   `equationCriteria`: (Voliteľné) Porovnávač, ktorý sa používa na určenie, či sa dve hodnoty rovnajú.


## Examples

### Example #1
Určte, či zoznam \{1, 2, 3, 4, 5\} obsahuje čísla 3 alebo 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Určte, či zoznam \{1, 2, 3, 4, 5\} obsahuje čísla 6 alebo 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Určite, či zoznam obsahuje koňa alebo sovu, pričom ignorujte veľkosť písmen.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Zistite, či zoznam obsahuje dátum 8. apríla 2022 alebo 12. januára 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
