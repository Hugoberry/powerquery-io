---
title: Number.Combinations
---

# Number.Combinations


Devuelve el número de combinaciones únicas.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Devuelve el número de combinaciones únicas de una lista de elementos, `setSize` con tamaño especificado de combinación, `combinationSize`.

-   `setSize`: número de elementos en la lista.
-   `combinationSize`: número de elementos de cada combinación.


## Examples

### Example #1
Buscar el número de combinaciones de un total de 5 elementos cuando cada combinación es un grupo de 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
