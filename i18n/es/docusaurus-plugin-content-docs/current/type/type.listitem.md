---
title: Type.ListItem
---

# Type.ListItem


Devuelve un tipo de elemento de un tipo de lista.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Devuelve un tipo de elemento de una lista `type`.


## Examples

### Example #1
Buscar un tipo de elemento de la lista `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
