---
title: Number.Combinations
---

# Number.Combinations


Devolve o número de combinacións únicas.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Devolve o número de combinacións únicas dunha lista de elementos, `setSize` co tamaño da combinación especificada, `combinationSize`.

-   `setSize`: o número de elementos na lista.
-   `combinationSize`: o número de elementos en cada combinación.


## Examples

### Example #1
Buscar o número de combinacións dun total de 5 elementos cando cada combinación está nun grupo de 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
