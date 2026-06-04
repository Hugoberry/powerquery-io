---
title: List.RemoveNulls
---

# List.RemoveNulls


Suprimeix tots els valors "null" de la llista especificada.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Suprimeix totes les aparicions dels valors "null" de `list`. Si no hi ha cap valor "null" a la llista, es retorna la llista original.


## Examples

### Example #1
Suprimeix els valors "null" de la llista \{1, 2, 3, null, 4, 5, null, 6\}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
