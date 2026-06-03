---
title: Number.Combinations
---

# Number.Combinations


Возвращает определенное количество уникальных сочетаний.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Возвращает определенное количество уникальных сочетаний из элементов списка `setSize` с указанным размером сочетания `combinationSize`.

-   `setSize`: Количество элементов в списке.
-   `combinationSize`: Количество элементов в каждом сочетании.


## Examples

### Example #1
Найти количество сочетаний из 5 элементов по 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
