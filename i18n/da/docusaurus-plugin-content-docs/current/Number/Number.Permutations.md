---
title: Number.Permutations
---

# Number.Permutations


## Description

Returnerer antallet af permutationer.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Returnerer antallet af permutationer, der kan oprettes ud fra et antal elementer, <code>setSize</code>, med en angivet permutationsstørrelse, <code>permutationSize</code>.


## Examples

### Example #1 
Find antallet af permutationer fra i alt fem elementer i grupper på tre.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
