---
title: Type.ListItem
---

# Type.ListItem


Vraća tip stavke iz tipa liste.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Vraća tip stavke sa liste `type`.


## Examples

### Example #1
Pronađite tip stavke sa liste `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
