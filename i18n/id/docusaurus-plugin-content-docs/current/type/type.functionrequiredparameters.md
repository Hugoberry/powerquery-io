---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Menghasilkan angka yang mengindikasikan jumlah minimum parameter yang diperlukan untuk meminta jenis fungsi.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Menghasilkan angka yang mengindikasikan jumlah minimum parameter yang diperlukan untuk meminta input `type` fungsi.


## Examples

### Example #1
Cari jumlah parameter yang diperlukan untuk fungsi `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
