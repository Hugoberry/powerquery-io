---
title: Type.ListItem
---

# Type.ListItem


Возвращает тип элемента на основании типа списка.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Возвращает тип элемента из списка. `type`.


## Examples

### Example #1
Найти тип элемента в списке `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
