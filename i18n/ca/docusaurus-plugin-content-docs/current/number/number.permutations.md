---
title: Number.Permutations
---

# Number.Permutations


Retorna el nombre de permutacions.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Retorna el nombre de permutacions que es poden generar a partir d'un nombre d'elements, `setSize`, amb una mida de permutació especificada, `permutationSize`.


## Examples

### Example #1
Troba el nombre de permutacions d'un total de 5 elements en grups de 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
