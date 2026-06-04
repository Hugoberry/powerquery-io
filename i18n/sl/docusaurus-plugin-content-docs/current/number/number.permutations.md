---
title: Number.Permutations
---

# Number.Permutations


Vrne število permutacij.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Vrne število permutacij, ki jih je mogoče ustvariti iz števila elementov `setSize` z določeno velikostjo permutacije `permutationSize`.


## Examples

### Example #1
Poiščite število permutacij iz skupno 5 elementov v skupinah po 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
