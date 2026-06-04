---
title: Type.NonNullable
---

# Type.NonNullable


Vráti typ s nepovolenou hodnotou Null z typu.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Vráti typ s nepovolenou `hodnotou Null` z `type`.


## Examples

### Example #1
Vráť typ s nepovolenou hodnotou Null `zadajte číslo s povolenou hodnotou Null`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
