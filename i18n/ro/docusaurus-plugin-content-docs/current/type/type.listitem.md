---
title: Type.ListItem
---

# Type.ListItem


Returnează un tip de element dintr-o listă de tipuri.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Returnează un tip de element dintr-o listă `type`.


## Examples

### Example #1
Găsiți tipul elementului din listă `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
