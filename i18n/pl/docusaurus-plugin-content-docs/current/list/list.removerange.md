---
title: List.RemoveRange
---

# List.RemoveRange


Usuwa określoną liczbę wartości, zaczynając od określonej pozycji.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Usuwa `count` wartości z listy `list`, zaczynając od określonej pozycji `index`.


## Examples

### Example #1
Usuń 3 wartości z listy \{1, 2, 3, 4, -6, -2, -1, 5\}, zaczynając od indeksu 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
