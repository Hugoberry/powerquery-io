---
title: Number.Combinations
---

# Number.Combinations


Returnerar antalet unika kombinationer.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Returnerar antalet unika kombinationer från en lista med objekt, `setSize`, med angiven kombinationsstorlek, `combinationSize`.

-   `setSize`: Antalet objekt i listan.
-   `combinationSize`: Antalet objekt i varje kombination.


## Examples

### Example #1
Hitta antalet kombinationer från sammanlagt 5 objekt när varje kombination är en grupp med 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
