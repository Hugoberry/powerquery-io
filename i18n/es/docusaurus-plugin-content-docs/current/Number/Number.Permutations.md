---
title: Number.Permutations
---

# Number.Permutations


Devuelve el número de permutaciones.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Devuelve el número de permutaciones que pueden generarse a partir de varios elementos, <code>setSize</code>, con un tamaño especificado de la permutación <code>permutationSize</code>.


## Examples

### Example #1 
Buscar el número de permutaciones de un total de 5 elementos en grupos de 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
