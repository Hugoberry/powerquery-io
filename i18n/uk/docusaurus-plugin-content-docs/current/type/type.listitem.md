---
title: Type.ListItem
---

# Type.ListItem


Повертає тип елемента з типу списку.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Повертає тип елемента зі списку `type`.


## Examples

### Example #1
Знайти тип елемента зі списку `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
