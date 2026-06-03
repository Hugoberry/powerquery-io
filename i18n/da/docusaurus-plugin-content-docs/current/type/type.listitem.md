---
title: Type.ListItem
---

# Type.ListItem


Returnerer en elementtype fra en listetype.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Returnerer en elementtype fra en liste `type`.


## Examples

### Example #1
Find elementtypen på listen `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
