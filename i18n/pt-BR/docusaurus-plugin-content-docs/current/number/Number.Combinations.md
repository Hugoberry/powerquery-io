---
title: Number.Combinations
---

# Number.Combinations


Retorna o número de combinações exclusivas.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Retorna o número de combinações exclusivas em uma lista de itens, <code>setSize</code> com o tamanho de combinação especificado, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: O número de itens na lista.</li>    <li><code>combinationSize</code>: O número de itens em cada combinação.</li></ul>


## Examples

### Example #1 
Localize o número de combinações de um total de cinco itens quando cada combinação for um grupo de 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
