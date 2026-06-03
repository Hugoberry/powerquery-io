---
title: Type.ListItem
---

# Type.ListItem


Retourne un type d'élément d'un type de liste.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Retourne un type d'élément d'une liste `type`.


## Examples

### Example #1
Trouvez le type d'élément dans la liste `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
