---
title: List.MatchesAny
---

# List.MatchesAny


Retourne true si la fonction de condition est satisfaite par une valeur quelconque.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Retourne `true` si la fonction de condition est satisfaite par l’une des valeurs dans la liste, sinon retourne `false`.

-   `list` : la liste contenant les valeurs à vérifier.
-   `condition` : la condition à vérifier par rapport aux valeurs de la liste.


## Examples

### Example #1
Déterminez si l’une des valeurs dans la liste \{9, 10, 11\} est supérieure à 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Déterminez si l’une des valeurs dans la liste \{1, 2, 3\} est supérieure à 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Déterminez si l’une des valeurs de texte de la liste contiennent « cat » tout en ignorant la casse.
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
Déterminez si l’une des dates contiennent l’année 2021.
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
