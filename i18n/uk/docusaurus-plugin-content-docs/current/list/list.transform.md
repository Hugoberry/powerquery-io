---
title: List.Transform
---

# List.Transform


Повертає новий список значень, обчислених із цього списку.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Повертає новий список значень, застосовуючи функцію перетворення `transform` до списку, `list`.


## Examples

### Example #1
Додати 1 до кожного значення у списку \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
