---
title: Type.NonNullable
---

# Type.NonNullable


Kembalikan jenis bukan boleh nol daripada sesuatu jenis.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Kembalikan jebis bukan `nullable` daripada `type`.


## Examples

### Example #1
Kembalikan jenis bukan boleh nol daripada `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
