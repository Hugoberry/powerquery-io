---
title: List.Reverse
---

# List.Reverse


## Description

Изменяет порядок значений в списке на противоположный.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Возвращает список со значениями в списке <code>list</code> в обратном порядке.


## Examples

### Example #1 
Создать список из \{1..10} в обратном порядке.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
