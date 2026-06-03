---
title: List.MatchesAll
---

# List.MatchesAll


Gibt "true" zurück, wenn die Bedingungsfunktion von alle Werten in der Liste erfüllt wird.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Gibt `true` zurück, wenn die Bedingungsfunktion von allen Werten in der Liste erfüllt wird. Andernfalls wird `false` zurückgegeben.

-   `list`: Die Liste mit den zu überprüfenden Werten.
-   `condition`: Die Bedingung, die mit den Werten in der Liste verglichen werden soll.


## Examples

### Example #1
Ermittelt, ob alle Werte in der Liste "\{11, 12, 13\}" größer zehn sind.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Ermittelt, ob alle Werte in der Liste "\{1, 2, 3\}" größer zehn sind.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Ermitteln, ob alle Textwerte in der Liste „anna“ enthalten sind, während die Groß- und Kleinschreibung ignoriert wird.
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
Überprüfen Sie, ob alle Datumsangaben das Jahr 2021 enthalten.
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
