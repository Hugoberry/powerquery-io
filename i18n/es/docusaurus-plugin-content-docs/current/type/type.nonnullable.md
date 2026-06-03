---
title: Type.NonNullable
---

# Type.NonNullable


Devuelve el tipo que no acepta valores NULL de un tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Devuelve el tipo no `nullable` de `type`.


## Examples

### Example #1
Devuelve el tipo que no acepta valores NULL de `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
