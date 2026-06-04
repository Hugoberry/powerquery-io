---
title: Type.ListItem
---

# Type.ListItem


Palauttaa kohdetyypin luettelotyypistä.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Palauttaa kohdetyypin luettelosta `type`.


## Examples

### Example #1
Etsi kohdetyyppi luettelosta `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
