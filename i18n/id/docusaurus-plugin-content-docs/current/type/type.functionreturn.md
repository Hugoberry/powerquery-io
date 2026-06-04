---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Menghasilkan jenis yang dihasilkan oleh jenis fungsi.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Menghasilkan jenis yang dihasilkan oleh `type` fungsi.


## Examples

### Example #1
Cari jenis hasil dari `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
