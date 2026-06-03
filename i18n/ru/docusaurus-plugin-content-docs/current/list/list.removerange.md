---
title: List.RemoveRange
---

# List.RemoveRange


Удаляет заданное количество значений, начиная с указанной позиции.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Удаляет `count` значений из списка `list`, начиная с указанной позиции `index`.


## Examples

### Example #1
Удалить 3 значения из списка \{1, 2, 3, 4, -6, -2, -1, 5\}, начиная с индекса 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
