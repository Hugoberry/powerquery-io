---
title: List.MatchesAny
---

# List.MatchesAny


Retorna el valor true si qualsevol valor satisfà la funció de condició.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Retorna `true` si algun dels valors de la llista satisfà la funció de condició. En cas contrari, retorna `false`.

-   `list`: la llista que conté els valors que s'han de comprovar.
-   `condition`: la condició que s'ha de comprovar amb els valors de la llista.


## Examples

### Example #1
Determina si qualsevol dels valors de la llista \{9, 10, 11\} és més gran que 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determina si qualsevol dels valors de la llista \{1, 2, 3\} és més gran que 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determina si algun dels valors de text de la llista conté "cat" mentre s'ignoren les majúscules i minúscules.
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
Determina si qualsevol de les dates conté l'any 2021.
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
