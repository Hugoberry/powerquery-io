---
title: List.Select
---

# List.Select


Возвращает список значений, которые соответствуют условию.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

Возвращает список значений из списка <code>list</code>, которые удовлетворяют условию выбора <code>selection</code>.


## Examples

### Example #1 
Найти в списке \{1, -3, 4, 9, -2} значения больше 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
