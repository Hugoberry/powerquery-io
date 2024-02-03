---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Menghasilkan jenis yang dihasilkan oleh jenis fungsi.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Menghasilkan jenis yang dihasilkan oleh <code>type</code> fungsi.


## Examples

### Example #1 
Cari jenis hasil dari &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
