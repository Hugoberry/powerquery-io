---
title: List.ContainsAll
---

# List.ContainsAll


Udáva, či zoznam obsahuje všetky hodnoty v inom zozname.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Udáva, či zoznam obsahuje všetky hodnoty z iného zoznamu. Vráti `true` ak sa všetky hodnoty nájdu v zozname, inak `false`.

-   `list`: Zoznam na vyhľadávanie.
-   `values`: Zoznam hodnôt, ktoré sa majú vyhľadať v prvom zozname.
-   `equationCriteria`: (Voliteľné) Porovnávač, ktorý sa používa na určenie, či sa dve hodnoty rovnajú.


## Examples

### Example #1
Určte, či zoznam \{1, 2, 3, 4, 5\} obsahuje čísla 3 a 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Určte, či zoznam \{1, 2, 3, 4, 5\} obsahuje 5 a 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Určite, či zoznam obsahuje psa a koňa, pričom ignorujte veľkosť písmen.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Zistite, či zoznam obsahuje dátumy 8. apríla 2022 a 6. júla 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
