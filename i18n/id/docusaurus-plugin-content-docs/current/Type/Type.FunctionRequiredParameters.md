---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Menghasilkan angka yang mengindikasikan jumlah minimum parameter yang diperlukan untuk meminta jenis fungsi.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Menghasilkan angka yang mengindikasikan jumlah minimum parameter yang diperlukan untuk meminta input <code>type</code> fungsi.


## Examples

### Example #1 
Cari jumlah parameter yang diperlukan untuk fungsi &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
