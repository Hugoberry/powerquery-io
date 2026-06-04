---
title: List.MatchesAny
---

# List.MatchesAny


Pateikiama Teisinga, jei bet kuri reikšmė patenkina sąlygos funkciją.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Pateikiama `true`, jei sąlygos funkciją tenkina bet kuri sąrašo reikšmė, kitu atveju pateikiama `false`.

-   `list`: sąrašas, kuriame yra tikrintinos reikšmės.
-   `condition`: sąlyga, pagal kurią reikia patikrinti sąrašo reikšmes.


## Examples

### Example #1
Nustatyti, ar yra sąrašo reikšmių \{9, 10, 11\}, didesnių nei 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Nustatyti, ar yra sąrašo reikšmių \{1, 2, 3\}, didesnių nei 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Nustatyti, ar visose sąrašo teksto reikšmėse yra „cat“, nepaisyti didžiųjų ir mažųjų raidžių.
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
Nustatyti, ar yra datų, kuriose yra 2021 metai.
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
