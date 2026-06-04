---
title: Number.Combinations
---

# Number.Combinations


Vráti počet jedinečných kombinácií.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Vráti počet jedinečných kombinácií zo zoznamu položiek `setSize` so stanovenou veľkosťou kombinácie `combinationSize`.

-   `setSize`: Počet položiek v zozname.
-   `combinationSize`: Počet položiek v každej kombinácii.


## Examples

### Example #1
Nájdite počet kombinácií z celkového počtu 5 položiek, pričom každú kombináciu tvorí skupina 3 položiek.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
