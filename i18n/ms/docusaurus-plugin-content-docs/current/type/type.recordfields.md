---
title: Type.RecordFields
---

# Type.RecordFields


Kembalikan rekod yang menerangkan medan jenis rekod dengan setiap medan bagi jenis rekod yang dikembalikan mempunyai nama yang berkaitan dan nilai.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Kembalikan rekod yang menerangkan medan rekod `type`. Setiap medan bagi jenis rekod yang dikembalikan mempunyai nama yang berkaitan dan nilai, dalam bentuk rekod `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Cari nama dan nilai rekod `[ A = number, optional B = any]`.
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
