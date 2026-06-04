---
title: Number.Combinations
---

# Number.Combinations


Vrne število enoličnih kombinacij.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Vrne število enoličnih kombinacij iz seznama elementov `setSize` z določeno velikostjo kombinacije `combinationSize`.

-   `setSize`: število elementov na seznamu.
-   `combinationSize`: število elementov v vsaki kombinaciji.


## Examples

### Example #1
Poiščite število kombinacij iz skupno 5 elementov, pri čemer je vsaka kombinacija skupina 3 elementov.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
