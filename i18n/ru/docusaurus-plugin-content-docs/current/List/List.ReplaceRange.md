---
title: List.ReplaceRange
---

# List.ReplaceRange


Заменяет указанное количество значений значениями для замены, начиная с определенной позиции.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Remarks

Заменяет <code>count</code> значений в списке <code>list</code> списком <code>replaceWith</code>, начиная с указанной позиции <code>index</code>.


## Examples

### Example #1 
Заменить \{7, 8, 9} в списке \{1, 2, 7, 8, 9, 5} списком \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
