---
title: Number.Combinations
---

# Number.Combinations


Devolve o número de combinações exclusivas.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Devolve o número de combinações exclusivas existentes numa lista de itens, `setSize`, com o tamanho de combinação especificado, `combinationSize`.

-   `setSize`: o número de itens existentes na lista.
-   `combinationSize`: o número de itens existentes em cada combinação.


## Examples

### Example #1
Determinar o número de combinações existentes num total de 5 itens em que cada combinação é um grupo de 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
