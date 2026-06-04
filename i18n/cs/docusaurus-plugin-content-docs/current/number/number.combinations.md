---
title: Number.Combinations
---

# Number.Combinations


Vrátí počet jedinečných kombinací.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Vrátí počet jedinečných kombinací položek seznamu `setSize` se zadanou velikostí kombinace `combinationSize`.

-   `setSize`: Počet položek v seznamu.
-   `combinationSize`: Počet položek v každé kombinaci.


## Examples

### Example #1
Zjistí počet kombinací celkového počtu pěti položek, pokud je každá kombinace skupina tří položek.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
