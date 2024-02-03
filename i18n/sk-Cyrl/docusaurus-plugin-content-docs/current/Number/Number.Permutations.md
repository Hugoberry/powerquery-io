---
title: Number.Permutations
---

# Number.Permutations


## Description

Vráti počet permutácií.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Vráti počet permutácií, ktoré možno generovať z určitého počtu položiek <code>setSize</code>, so stanovenou veľkosťou permutácie <code>permutationSize</code>.


## Examples

### Example #1 
Nájdite počet permutácií z celkového počtu 5 položiek v skupinách 3 položiek.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
