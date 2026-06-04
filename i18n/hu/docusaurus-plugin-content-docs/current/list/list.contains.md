---
title: List.Contains
---

# List.Contains


Jelzi, hogy a lista tartalmazza-e az értéket.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Jelzi, hogy a lista tartalmazza-e a megadott értéket. `igaz` értéket ad vissza, ha az érték megtalálható a listában, `hamis` egyéb esetben.

-   `list`: A keresendő lista.
-   `value`: A listában keresendő érték.
-   `equationCriteria`: (Nem kötelező) A két érték egyenlőségének megállapítására használt összehasonlító.


## Examples

### Example #1
Annak meghatározása, hogy az \{1, 2, 3, 4, 5\} lista tartalmazza-e a 3-at.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Annak meghatározása, hogy az \{1, 2, 3, 4, 5\} lista tartalmazza-e a 6-ot.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
A kis- és nagybetűk figyelmen kívül hagyásával megállapítja, hogy a lista tartalmazza-e a „rebarbara” kifejezést.
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
Állapítsa meg, hogy a lista tartalmazza-e a 2022. április 8-i dátumot.
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
