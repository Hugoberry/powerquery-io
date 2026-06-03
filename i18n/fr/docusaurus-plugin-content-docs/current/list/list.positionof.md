---
title: List.PositionOf
---

# List.PositionOf


Retourne les décalages d'une valeur dans une liste.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Renvoie le décalage auquel la valeur spécifiée apparaît dans une liste. Renvoie -1 si la valeur n'apparaît pas.

-   `list` : La liste à rechercher.
-   `value` : La valeur à trouver dans la liste.
-   `occurrence` : (Facultatif) L'événement spécifique à signaler. Cette valeur peut être `Occurrence.First`, `Occurrence.Last` ou `Occurrence.All`. Si aucun `occurrence` n'est spécifié, `Occurrence.First` est utilisé.
-   `equationCriteria` : (Facultatif) Spécifie comment l’égalité est déterminée lors de la comparaison des valeurs. Ce paramètre peut être une fonction de sélection de clé, une fonction de comparaison ou une liste contenant à la fois un sélecteur de clé et un comparateur.


## Examples

### Example #1
Recherche la position dans la liste \{1, 2, 3\} à laquelle la valeur 3 apparaît.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Trouvez la position dans la liste de toutes les occurrences de dates de 2022.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
Trouvez la position dans la liste de la dernière occurrence du mot dog, en ignorant la casse.
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
Trouvez la position dans la liste qui se trouve à deux unités du nombre 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
