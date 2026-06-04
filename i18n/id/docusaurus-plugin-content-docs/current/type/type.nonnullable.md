---
title: Type.NonNullable
---

# Type.NonNullable


Menghasilkan jenis yang tidak dapat berisi nilai nol dari sebuah jenis.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Menghasilkan jenis non `nullable` dari `type`.


## Examples

### Example #1
Hasilkan jenis yang tidak bisa berisi nilai nol dari `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
