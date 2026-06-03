---
title: Type.ListItem
---

# Type.ListItem


Bir liste türünden öğe türü döndürür.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Bir `type` listesinden bir öğe türü döndürür.


## Examples

### Example #1
Liste `{number}` içinden öğe türünü bulun.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
