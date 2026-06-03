---
title: Type.NonNullable
---

# Type.NonNullable


Returnerer typen, der ikke kan være null, fra en type.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Returnerer typen, der ikke kan være `nullable`, fra `type`.


## Examples

### Example #1
Returner typen, der ikke kan være null, for `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
