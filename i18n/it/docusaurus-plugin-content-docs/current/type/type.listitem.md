---
title: Type.ListItem
---

# Type.ListItem


Restituisce un tipo di elemento da un tipo elenco.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Restituisce un tipo di elemento da un `type` elenco.


## Examples

### Example #1
Trovare il tipo di elemento dall'elenco `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
