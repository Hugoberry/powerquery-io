---
title: List.MatchesAll
---

# List.MatchesAll


Retorna el valor true si tots els valors de la llista satisfan la funció de condició.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Retorna el valor `true` si tots els valors de la llista satisfan la funció de condició, altrament, retorna `false`.

-   `list`: la llista que conté els valors que s'han de comprovar.
-   `condition`: la condició que s'ha de comprovar amb els valors de la llista.


## Examples

### Example #1
Determina si tots els valors de la llista \{11, 12, 13\} són més grans que 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determina si tots els valors de la llista \{1, 2, 3\} són més grans que 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determina si tots els valors de text de la llista contenen "anna" mentre s'ignoren les majúscules i minúscules.
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
Determina si totes les dates contenen l’any 2021.
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
