---
title: Type.ListItem
---

# Type.ListItem


Vráti typ položky z typu zoznamu.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Vráti typ položky zo zoznamu `type`.


## Examples

### Example #1
Nájdi typ položky zo zoznamu `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
