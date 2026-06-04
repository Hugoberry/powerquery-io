---
title: Type.ListItem
---

# Type.ListItem


Devolve un tipo de elemento dun tipo de lista.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Devolve un tipo de elemento dunha lista `type`.


## Examples

### Example #1
Busque o tipo de elemento da lista `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
