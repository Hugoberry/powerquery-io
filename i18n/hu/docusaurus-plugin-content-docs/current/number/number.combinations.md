---
title: Number.Combinations
---

# Number.Combinations


Az egyedi kombinációk számát adja vissza.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Az elemek `setSize` listájából létrehozható, a megadott `combinationSize` méretű egyedi kombinációk számát adja vissza.

-   `setSize`: A listán szereplő elemek száma
-   `combinationSize`: Az egyes kombinációkban szereplő elemek száma


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
