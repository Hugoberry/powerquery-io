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

Retourne le nombre de combinaisons uniques à partir d'une liste d'éléments, <code>setSize</code> avec la taille de combinaison spécifiée, <code>combinationSize</code>.<ul>    <li><code>setSize</code> : nombre d'éléments dans la liste.</li>    <li><code>combinationSize</code> : nombre d'éléments dans chaque combinaison.</li></ul>


## Examples

### Example #1 
Recherche le nombre de combinaisons d&#39;un total de 5 éléments lorsque chaque combinaison est un groupe de 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
