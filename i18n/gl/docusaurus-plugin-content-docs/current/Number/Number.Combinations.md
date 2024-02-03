---
title: Number.Combinations
---

# Number.Combinations


## Description

Devolve o número de combinacións únicas.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Devolve o número de combinacións únicas dunha lista de elementos, <code>setSize</code> co tamaño da combinación especificada, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: o número de elementos na lista.</li>    <li><code>combinationSize</code>: o número de elementos en cada combinación.</li></ul>


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
