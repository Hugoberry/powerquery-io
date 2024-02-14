---
title: List.RemoveNulls
---

# List.RemoveNulls


Удаляет все значения NULL из указанного списка.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Удаляет все вхождения значений NULL из списка <code>list</code>. Если в списке нет значений NULL, возвращается исходный список.


## Examples

### Example #1 
Удалить значения NULL из списка \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
