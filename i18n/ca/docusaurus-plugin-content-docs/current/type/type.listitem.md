---
title: Type.ListItem
---

# Type.ListItem


Retorna un tipus d'element d'un tipus de llista.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Retorna un tipus d'element d'una llista `type`.


## Examples

### Example #1
Cerqueu el tipus d'element de la llista `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
