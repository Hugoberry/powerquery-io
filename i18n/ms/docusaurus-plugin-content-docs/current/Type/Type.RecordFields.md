---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Kembalikan rekod yang menerangkan medan jenis rekod dengan setiap medan bagi jenis rekod yang dikembalikan mempunyai nama yang berkaitan dan nilai.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Kembalikan rekod yang menerangkan medan rekod <code>type</code>. Setiap medan bagi jenis rekod yang dikembalikan mempunyai nama yang berkaitan dan nilai, dalam bentuk rekod <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Cari nama dan nilai rekod &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
