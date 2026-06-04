---
title: Type.ListItem
---

# Type.ListItem


Vrátí typ položky z typu seznamu.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Vrátí typ položky ze seznamu `type`.


## Examples

### Example #1
Umožňuje najít typ položky ze seznamu `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
