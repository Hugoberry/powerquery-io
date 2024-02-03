---
title: Number.Combinations
---

# Number.Combinations


## Description

Az egyedi kombinációk számát adja vissza.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Az elemek <code>setSize</code> listájából létrehozható, a megadott <code>combinationSize</code> méretű egyedi kombinációk számát adja vissza.<ul>    <li><code>setSize</code>: A listán szereplő elemek száma</li>    <li><code>combinationSize</code>: Az egyes kombinációkban szereplő elemek száma</li></ul>


## Examples

### Example #1 
Összesen 5 elem kombinációinak lehetséges száma, ha mindegyik kombináció egy 3 elemű csoport
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
