---
title: Number.Permutations
---

# Number.Permutations


Returnerar antalet permutationer.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Returnerar antalet permutationer som kan genereras från ett antal objekt, <code>setSize</code>, med en angiven permutationsstorlek, <code>permutationSize</code>.


## Examples

### Example #1 
Hitta antalet permutationer från sammanlagt 5 objekt i grupper med 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
