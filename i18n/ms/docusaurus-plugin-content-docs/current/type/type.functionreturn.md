---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Kembalikan jenis yang dikembalikan oleh jenis fungsi.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Kembalikan jenis yang dikembalikan oleh fungsi `type`.


## Examples

### Example #1
Cari jenis kembalian `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
