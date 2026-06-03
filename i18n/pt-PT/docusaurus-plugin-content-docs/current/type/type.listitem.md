---
title: Type.ListItem
---

# Type.ListItem


Devolve um tipo de item de um tipo de lista.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Devolve um tipo de item de uma lista `type`.


## Examples

### Example #1
Localizar tipo de item a partir da lista `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
