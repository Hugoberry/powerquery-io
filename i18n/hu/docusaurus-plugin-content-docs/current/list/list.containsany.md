---
title: List.ContainsAny
---

# List.ContainsAny


Jelzi, hogy egy lista tartalmazza-e egy másik lista valamely értékét.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Azt jelzi, hogy a lista tartalmazza-e a másik lista bármelyik értékét. `igaz` értéket ad vissza, ha az értékek megtalálhatók a listában, `hamis` egyéb esetben.

-   `list`: A keresendő lista.
-   `values`: Az első listában keresendő értékek listája.
-   `equationCriteria`: (Nem kötelező) A két érték egyenlőségének megállapítására használt összehasonlító.


## Examples

### Example #1
Annak meghatározása, hogy az \{1, 2, 3, 4, 5\} lista tartalmazza-e a 3-at és a 9-et.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Annak meghatározása, hogy az \{1, 2, 3, 4, 5\} lista tartalmazza-e a 6-ot és a 7-et.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
A kis- és nagybetűk figyelmen kívül hagyásával állapítsa meg, hogy a listán szerepel-e ló és bagoly.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Állapítsa meg, hogy a lista tartalmazza-e a 2022. április 8. vagy a 2021. január 12. dátumot.
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
