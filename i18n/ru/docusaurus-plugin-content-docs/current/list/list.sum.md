---
title: List.Sum
---

# List.Sum


Возвращает сумму элементов в списке.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Возвращает сумму всех значений в списке `list` , отличных от NULL. Возвращает значение NULL, если в списке нет значений, отличных от NULL.


## Examples

### Example #1
Найти сумму чисел в списке `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
