---
title: Type.NonNullable
---

# Type.NonNullable


Restituisce il tipo non nullable da un tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Restituisce il tipo non `nullable` da `type`.


## Examples

### Example #1
Restituire il tipo non nullable di `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
