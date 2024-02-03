---
title: Number.Combinations
---

# Number.Combinations


## Description

Retorna el nombre de combinacions úniques.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Retorna el nombre de combinacions úniques a partir d'una llista d'elements, <code>setSize</code>, amb la mida de la combinació especificada, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: el nombre d'elements de la llista.</li>    <li><code>combinationSize</code>: el nombre d'elements de cada combinació.</li></ul>


## Examples

### Example #1 
Troba el nombre de combinacions d&#39;un total de 5 elements quan cada combinació és un grup de 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
