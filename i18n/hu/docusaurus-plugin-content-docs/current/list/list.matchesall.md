---
title: List.MatchesAll
---

# List.MatchesAll


Igazat ad vissza, ha a lista összes értéke kielégíti a feltételfüggvényt.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

`true` értéket ad vissza, ha a feltételfüggvényt a lista összes értéke kielégíti; egyéb esetben `false` értéket ad vissza.

-   `list`: Az ellenőrizendő értékeket tartalmazó lista.
-   `condition`: A lista értékeinek ellenőrzésére szolgáló feltétel.


## Examples

### Example #1
Annak eldöntése, hogy a \{11, 12, 13\} lista összes értéke nagyobb-e 10-nél
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Annak eldöntése, hogy az \{1, 2, 3\} lista összes értéke nagyobb-e 10-nél
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Annak meghatározása, hogy a lista összes szöveges értéke tartalmazza-e az „anna” kifejezést a kis- és nagybetűk figyelmen kívül hagyásával.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Annak meghatározása, hogy az összes dátum tartalmazza-e a 2021-es évet.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
