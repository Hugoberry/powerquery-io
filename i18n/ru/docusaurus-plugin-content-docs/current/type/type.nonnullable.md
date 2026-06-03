---
title: Type.NonNullable
---

# Type.NonNullable


Возвращает тип, не допускающий значение "null".


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Возвращает тип, не являющийся `nullable`, из `type`.


## Examples

### Example #1
Возврат типа, не допускающего значение "null", `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
