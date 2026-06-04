---
title: Number.Combinations
---

# Number.Combinations


Vraća broj jedinstvenih kombinacija.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Vraća broj jedinstvenih kombinacija sa liste stavki, `setSize` sa navedenom veličinom kombinacije, `combinationSize`.

-   `setSize`: Broj stavki na listi.
-   `combinationSize`: Broj stavki u svakoj kombinaciji.


## Examples

### Example #1
Pronalaženje broja kombinacija od ukupno 5 stavki kada svaka kombinacija predstavlja grupu od 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
