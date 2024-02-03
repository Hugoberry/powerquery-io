---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Menghasilkan catatan yang menjelaskan bidang jenis rekaman dengan tiap bidang dari jenis rekaman yang dihasilkan memiliki nama dan nilai yang berkaitan.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Menghasilkan rekaman yang menjelaskan bidang <code>type</code> rekaman. Tiap bidang jenis rekaman yang dihasilkan memiliki nama dan nilai yang berkaitan, dalam bentuk <code>[ Type = type, Optional = logical ]</code> rekaman.


## Examples

### Example #1 
Cari nama dan nilai &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt; rekaman.
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
