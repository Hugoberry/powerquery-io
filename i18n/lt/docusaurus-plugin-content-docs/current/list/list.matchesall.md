---
title: List.MatchesAll
---

# List.MatchesAll


Pateikiama Teisinga, jei visos sąrašo reikšmės patenkina sąlygos funkciją.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Pateikiama `true`, jei sąlygos funkciją patenkina visos sąrašo reikšmės, kitu atveju pateikiama `false`.

-   `list`: sąrašas, kuriame yra tikrintinos reikšmės.
-   `condition`: sąlyga, pagal kurią reikia patikrinti sąrašo reikšmes.


## Examples

### Example #1
Nustatykite, ar visos sąrašo reikšmės \{11, 12, 13\} yra didesnės nei 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Nustatykite, ar visos sąrašo reikšmės \{1, 2, 3\} yra didesnės nei 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Nustatyti, ar visose sąrašo teksto reikšmėse yra „anna“, nepaisyti didžiųjų ir mažųjų raidžių.
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
Nustatyti, ar visose datose yra 2021 metai.
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
