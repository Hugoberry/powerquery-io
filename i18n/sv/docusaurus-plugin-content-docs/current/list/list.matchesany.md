---
title: List.MatchesAny
---

# List.MatchesAny


Returnerar true om något av värdena uppfyller condition-funktionen.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Returnerar `true` om villkorsfunktionen uppfylls av något av värdena i listan returneras annars `false`.

-   `list`: Listan som innehåller de värden som ska kontrolleras.
-   `condition`: Villkoret att kontrollera mot värdena i listan.


## Examples

### Example #1
Kontrollera om något av värdena i listan \{9, 10, 11\} är större än 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Kontrollera om något av värdena i listan \{1, 2, 3\} är större än 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Kontrollera om något av textvärdena i listan innehåller "katt" medan skiftläge ignoreras.
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
Kontrollera om något av datumen innehåller år 2021.
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
