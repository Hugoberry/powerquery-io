---
title: Type.RecordFields
---

# Type.RecordFields


Menghasilkan catatan yang menjelaskan bidang jenis rekaman dengan tiap bidang dari jenis rekaman yang dihasilkan memiliki nama dan nilai yang berkaitan.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Menghasilkan rekaman yang menjelaskan bidang `type` rekaman. Tiap bidang jenis rekaman yang dihasilkan memiliki nama dan nilai yang berkaitan, dalam bentuk `[ Type = type, Optional = logical ]` rekaman.


## Examples

### Example #1
Cari nama dan nilai `[ A = number, optional B = any]` rekaman.
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
