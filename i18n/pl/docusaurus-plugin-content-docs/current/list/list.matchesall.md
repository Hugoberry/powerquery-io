---
title: List.MatchesAll
---

# List.MatchesAll


Zwraca wartość true, jeśli wszystkie wartości z listy spełniają warunek określony przez funkcję warunku.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Zwraca wartość `prawda`, jeśli funkcja warunkowa jest spełniona przez wszystkie wartości na liście, w przeciwnym razie zwraca wartość `fałsz`.

-   `list`: lista zawierająca wartości do sprawdzenia.
-   `condition`: warunek sprawdzania wartości na liście.


## Examples

### Example #1
Ustal, czy wszystkie wartości z listy \{11, 12, 13\} są większe niż 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Ustal, czy wszystkie wartości z listy \{1, 2, 3\} są większe niż 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Określ, czy wszystkie wartości tekstowe na liście zawierają słowo „anna”, ignorując wielkość liter.
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
Określ, czy wszystkie daty zawierają rok 2021.
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
