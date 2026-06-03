---
title: List.MatchesAny
---

# List.MatchesAny


Zwraca wartość true, jeśli dowolna wartość spełnia warunek określony przez funkcję warunku.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Zwraca wartość `prawda`, jeśli funkcja warunkowa jest spełniona przez jakąkolwiek wartość na liście, w przeciwnym razie zwraca wartość `fałsz`.

-   `list`: lista zawierająca wartości do sprawdzenia.
-   `condition`: warunek sprawdzania wartości na liście.


## Examples

### Example #1
Określ, czy któraś z wartości z listy \{9, 10, 11\} jest większa od 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Określ, czy któraś z wartości z listy \{1, 2, 3\} jest większa od 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Określ, czy któraś z wartości tekstowych na liście zawiera słowo „kot”, ignorując wielkość liter.
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
Określ, czy któraś z dat zawiera rok 2021.
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
