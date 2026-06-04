---
title: Type.ListItem
---

# Type.ListItem


Elemtípus visszaadása egy listatípusból.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

A(z) paraméterben megadott `type` lista elemtípusának visszaadása.


## Examples

### Example #1
Elemtípus megkeresése a `{number}` listában.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
