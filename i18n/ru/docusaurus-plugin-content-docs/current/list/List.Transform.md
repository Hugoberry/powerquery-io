---
title: List.Transform
---

# List.Transform


Возвращает новый список значений, вычисленных для этого списка.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Возвращает новый список значений, применяя функцию преобразования <code>transform</code> к списку <code>list</code>.


## Examples

### Example #1 
Добавить 1 к каждому значению в списке \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
