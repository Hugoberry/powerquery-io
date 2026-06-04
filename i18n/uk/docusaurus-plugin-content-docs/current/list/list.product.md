---
title: List.Product
---

# List.Product


Повертає добуток чисел у списку.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Повертає добуток ненульових чисел у списку, `numbersList`. Повертає null, якщо у списку немає ненульових значень.


## Examples

### Example #1
Знайти добуток чисел у списку `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
