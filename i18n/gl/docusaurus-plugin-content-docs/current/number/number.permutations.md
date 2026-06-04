---
title: Number.Permutations
---

# Number.Permutations


Devolve o número de permutacións.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Devolve o número de permutacións que se poden xerar a partir dun número de elementos, `setSize`, cun tamaño de permutacións especificado, `permutationSize`.


## Examples

### Example #1
Buscar o número de permutacións de un total de 5 elementos en grupos de 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
