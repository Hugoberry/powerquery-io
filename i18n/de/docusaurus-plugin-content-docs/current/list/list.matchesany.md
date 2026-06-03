---
title: List.MatchesAny
---

# List.MatchesAny


Gibt "true" zurück, wenn die Bedingungsfunktion durch einen beliebigen Wert erfüllt wird.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Gibt `true` zurück, wenn die Bedingungsfunktion von beliebigen Werten in der Liste erfüllt wird. Andernfalls wird `false` zurückgegeben.

-   `list`: Die Liste mit den zu überprüfenden Werten.
-   `condition`: Die Bedingung, die mit den Werten in der Liste verglichen werden soll.


## Examples

### Example #1
Ermitteln Sie, ob ein beliebiger Wert in der Liste \{9, 10, 11\} größer 10 ist.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Ermitteln Sie, ob ein beliebiger Wert in der Liste \{1, 2, 3\} größer 10 ist.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Ermitteln, ob irgendwelche Textwerte in der Liste „cat“ enthalten sind, während die Groß- und Kleinschreibung ignoriert wird.
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
Überprüfen Sie, ob irgendwelche Datumsangaben das Jahr 2021 enthalten.
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
