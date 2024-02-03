---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Kembalikan jenis yang dikembalikan oleh jenis fungsi.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Kembalikan jenis yang dikembalikan oleh fungsi <code>type</code>.


## Examples

### Example #1 
Cari jenis kembalian &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
