---
title: List.MatchesAll
---

# List.MatchesAll


Retourne true si la fonction de condition est satisfaite par toutes les valeurs dans la liste.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Retourne `true` si la fonction de condition est satisfaite par toutes les valeurs dans la liste, sinon retourne `false`.

-   `list` : la liste contenant les valeurs à vérifier.
-   `condition` : la condition à vérifier par rapport aux valeurs de la liste.


## Examples

### Example #1
Détermine si toutes les valeurs initiales dans la liste \{11, 12, 13\} sont supérieures à 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Détermine si toutes les valeurs initiales dans la liste \{1, 2, 3\} sont supérieures à 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Déterminez si toutes les valeurs de texte de la liste contiennent « anna » tout en ignorant la casse.
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
Déterminez si toutes les dates contiennent l’année 2021.
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
