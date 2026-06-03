---
title: Number.Combinations
---

# Number.Combinations


Retourne le nombre de combinaisons uniques.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Retourne le nombre de combinaisons uniques à partir d'une liste d'éléments, `setSize` avec la taille de combinaison spécifiée, `combinationSize`.

-   `setSize` : nombre d'éléments dans la liste.
-   `combinationSize` : nombre d'éléments dans chaque combinaison.


## Examples

### Example #1
Recherche le nombre de combinaisons d'un total de 5 éléments lorsque chaque combinaison est un groupe de 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
