---
title: Type.NonNullable
---

# Type.NonNullable


Retourne le type non nullable d'un type.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Retourne le type non `nullable` de `type`.


## Examples

### Example #1
Retournez le type non nullable de `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
