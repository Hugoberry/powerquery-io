---
title: Type.OpenRecord
---

# Type.OpenRecord


Menghasilkan versi terbuka jenis rekaman yang diberikan (atau jenis yang sama, jika sudah terbuka).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Menghasilkan versi terbuka `record` `type` yang diberikan (atau jenis yang sama, jika sudah terbuka).


## Examples

### Example #1
Buat versi terbuka dari `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
