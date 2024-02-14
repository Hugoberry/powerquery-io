---
title: List.Positions
---

# List.Positions


Возвращает список смещений для ввода.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Возвращает список смещений для списка ввода <code>list</code>.    Если для изменения списка используется List.Transform, список позиций может служить для предоставления преобразованию доступа к позиции.


## Examples

### Example #1 
Найти смещения значений в списке \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
