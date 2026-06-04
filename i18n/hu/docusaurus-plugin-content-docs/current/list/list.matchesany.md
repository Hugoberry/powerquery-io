---
title: List.MatchesAny
---

# List.MatchesAny


Igazat ad vissza, ha bármely érték kielégíti a feltételfüggvényt.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

`true` értéket ad vissza, ha a feltételfüggvényt a lista bármely értéke kielégíti; egyéb esetben `false` értéket ad vissza.

-   `list`: Az ellenőrizendő értékeket tartalmazó lista.
-   `condition`: A lista értékeinek ellenőrzésére szolgáló feltétel.


## Examples

### Example #1
Annak meghatározása, hogy az \{9, 10, 11\} lista bármely eleme nagyobb-e 10-nél.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Annak meghatározása, hogy az \{1, 2, 3\} lista bármely eleme nagyobb-e 10-nél.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Annak meghatározása, hogy a lista szöveges értékeinek bármelyike tartalmazza-e a „cat” kifejezést a kis- és nagybetűk figyelmen kívül hagyásával.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Annak meghatározása, hogy a dátumok bármelyike tartalmazza-e a 2021-es évet.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
