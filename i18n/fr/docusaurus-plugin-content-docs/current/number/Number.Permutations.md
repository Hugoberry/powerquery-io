---
title: Number.Permutations
---

# Number.Permutations


Retourne le nombre de permutations.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Retourne le nombre de permutations qui peuvent être générées à partir d'un certain nombre d'éléments, <code>setSize</code>, avec une taille de permutation spécifiée, <code>permutationSize</code>.


## Examples

### Example #1 
Recherche le nombre de permutations à partir d&#39;un total de 5 éléments en groupes de 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
