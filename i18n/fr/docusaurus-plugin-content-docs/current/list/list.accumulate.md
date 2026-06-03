---
title: List.Accumulate
---

# List.Accumulate


Cumule une valeur de résumé à partir des éléments dans la liste.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Cumule une valeur récapitulative à partir des éléments de la liste spécifiée à l’aide de l’accumulateur.

-   `list` : La liste à itérer.
-   `seed` : Une valeur cumulée initiale.
-   `accumulator` : Une fonction qui prend l’état actuel et l’élément actif et retourne le nouvel état.


## Examples

### Example #1
Cumule la valeur de résumé des éléments dans la liste.
```powerquery
let
    Source = List.Accumulate(
        {1, 2, 3, 4, 5},
        0,
        (runningSum, nextNumber) => runningSum + nextNumber
    )
in
    Source
```

Result: 
```powerquery
15
```


### Example #2
Concaténez chaque mot de la liste en les séparant par un espace, sans inclure d’espace au début.
```powerquery
let
    Source = List.Accumulate(
        {"The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."},
        null,
        (fullTextSoFar, nextPart) =>
            Text.Combine({fullTextSoFar, nextPart}, " ")
    )
in
    Source
```

Result: 
```powerquery
"The quick brown fox jumps over the lazy dog."
```


### Example #3
Créez une liste des temps d’achèvement des processus à partir d’une date de début et d’une liste de durées d’exécution des processus.
```powerquery
let
    #"Process Duration" =
    {
        #duration(0,1,0,0),
        #duration(0,2,0,0),
        #duration(0,3,0,0)
    },
    #"Start Time" = #datetime(2025, 9, 8, 19, 0, 0),
    #"Process Timeline" = List.Accumulate(
        #"Process Duration",
        {#"Start Time"},
        (accumulatedTimes, nextDuration) =>
            accumulatedTimes & {List.Last(accumulatedTimes) + nextDuration}
    )
in
    #"Process Timeline"
```

Result: 
```powerquery
{
    #datetime(2025, 9, 8, 19, 0, 0),
    #datetime(2025, 9, 8, 20, 0, 0),
    #datetime(2025, 9, 8, 22, 0, 0),
    #datetime(2025, 9, 9, 1, 0, 0)
}
```




## Category
List.Transformation functions
