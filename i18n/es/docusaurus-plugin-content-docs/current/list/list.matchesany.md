---
title: List.MatchesAny
---

# List.MatchesAny


Devuelve true si algún valor satisface la función de la condición.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Devuelve `true` si alguno de los valores de la lista satisface la función de condición; de lo contrario, devuelve `false`.

-   `list`: Lista que contiene los valores que se van a comprobar.
-   `condition`: Condición que se va a comprobar con los valores de la lista.


## Examples

### Example #1
Determine si alguno de los valores de la lista \{9, 10, 11\} es mayor que 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determine si alguno de los valores de la lista \{1, 2, 3\} es mayor que 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determine si alguno de los valores de texto de la lista contiene "cat" mientras omite el uso de mayúsculas y minúsculas.
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
Determine si alguna de las fechas contiene el año 2021.
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
