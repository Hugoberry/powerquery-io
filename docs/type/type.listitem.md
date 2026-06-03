---
title: Type.ListItem
---

# Type.ListItem


Returns an item type from a list type.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Returns an item type from a list `type`.


## Examples

### Example #1
Find item type from the list `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
