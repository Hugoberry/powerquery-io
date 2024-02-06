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

Devuelve un tipo de elemento de una lista <code>type</code>.


## Examples

### Example #1 
Buscar un tipo de elemento de la lista &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
