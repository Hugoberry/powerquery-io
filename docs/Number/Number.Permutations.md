---
title: Number.Permutations
---

# Number.Permutations


Returns the number of permutations.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Returns the number of permutations that can be generated from a number of items, <code>setSize</code>,  with a specified permutation size, <code>permutationSize</code>.


## Examples

### Example #1 
Find the number of permutations from a total of 5 items in groups of 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
