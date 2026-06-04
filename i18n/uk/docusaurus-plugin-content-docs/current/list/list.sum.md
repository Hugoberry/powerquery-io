---
title: List.Sum
---

# List.Sum


Повертає суму елементів у списку.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Повертає суму ненульових значень у списку, `list`. Повертає null, якщо у списку немає ненульових значень.


## Examples

### Example #1
Знайти суму чисел у списку `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
