---
title: Type.NonNullable
---

# Type.NonNullable


Returnerar den ej nullbara typen från en typ.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Returnerar den ej `nullable` typen från `type`.


## Examples

### Example #1
Returnerar den ej nullbara typen för `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
