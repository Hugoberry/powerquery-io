---
title: Number.Combinations
---

# Number.Combinations


## Description

Devuelve el número de combinaciones únicas.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Devuelve el número de combinaciones únicas de una lista de elementos, <code>setSize</code> con tamaño especificado de combinación, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: número de elementos en la lista.</li>    <li><code>combinationSize</code>: número de elementos de cada combinación.</li></ul>


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
