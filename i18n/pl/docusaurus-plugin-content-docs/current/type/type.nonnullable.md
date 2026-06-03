---
title: Type.NonNullable
---

# Type.NonNullable


Zwraca typ niedopuszczający wartości null z typu.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Zwraca typ inny niż `nullable` z typu `type`.


## Examples

### Example #1
Zwróć typ niedopuszczający wartości null elementu `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
