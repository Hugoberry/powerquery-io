---
title: List.PositionOfAny
---

# List.PositionOfAny


Retourne le premier décalage d'une valeur dans une liste.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Renvoie le décalage auquel un élément de la liste de valeurs spécifiée apparaît dans une liste. Renvoie -1 si aucune occurrence n'est trouvée.

-   `list` : La liste à rechercher.
-   `values` : La liste des valeurs à rechercher dans la liste d'origine.
-   `occurrence` : (Facultatif) L'événement spécifique à signaler. Cette valeur peut être `Occurrence.First`, `Occurrence.Last` ou `Occurrence.All`. Si aucun `occurrence` n'est spécifié, `Occurrence.First` est utilisé.
-   `equationCriteria` : (Facultatif) Spécifie comment l’égalité est déterminée lors de la comparaison des valeurs. Ce paramètre peut être une fonction de sélection de clé, une fonction de comparaison ou une liste contenant à la fois un sélecteur de clé et un comparateur.


## Examples

### Example #1
Recherche la première position dans la liste \{1, 2, 3\} à laquelle la valeur 2 ou 3 apparaît.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Recherchez la position dans la liste de toutes les instances de dates de 2022 ou 2023.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
Recherchez la position dans la liste de la dernière occurrence du mot chien ou chat, en ignorant la casse.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
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
Recherchez n'importe quelle position dans la liste qui se trouve à deux unités du nombre 17 ou 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
