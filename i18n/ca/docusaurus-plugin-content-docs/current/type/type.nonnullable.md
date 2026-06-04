---
title: Type.NonNullable
---

# Type.NonNullable


Retorna el tipus que no és nullable (no es pot anul·lar) d'un tipus.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Retorna el tipus que no és `nullable` de `type`.


## Examples

### Example #1
Retorneu el tipus que no és nullable de `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
