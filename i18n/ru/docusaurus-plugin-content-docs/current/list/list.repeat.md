---
title: List.Repeat
---

# List.Repeat


Возвращает список, повторяющий исходный список указанное число раз.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Возвращает список, <code>count</code> раз повторяющий исходный список <code>list</code>.


## Examples

### Example #1 
Создать список, в котором \{1, 2} повторяется 3 раза.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
