---
title: List.Intersect
---

# List.Intersect


## Description

Возвращает пересечение значений списка, содержащихся во входных данных.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Возвращает пересечение значений списка, обнаруженных во входном списке <code>lists</code>. Можно указать дополнительный параметр <code>equationCriteria</code>.


## Examples

### Example #1 
Определение пересечения двух списков \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
