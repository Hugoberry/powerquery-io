---
title: Number.Permutations
---

# Number.Permutations


Vraća broj permutacija.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Vraća broj permutacija koje se mogu generisati od broja stavki, `setSize`, sa navedenom veličinom permutacije, `permutationSize`.


## Examples

### Example #1
Pronalaženje broja permutacija od ukupno 5 stavki u grupama od 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
