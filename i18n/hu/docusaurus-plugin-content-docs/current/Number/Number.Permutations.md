---
title: Number.Permutations
---

# Number.Permutations


## Description

A permutációk számát adja vissza.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Az elemek <code>setSize</code> halmazából létrehozható, a megadott <code>permutationSize</code> méretű permutációk számát adja vissza.


## Examples

### Example #1 
Összesen 5 elem 3 elemű csoportokban alkotott permutációinak lehetséges száma
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
