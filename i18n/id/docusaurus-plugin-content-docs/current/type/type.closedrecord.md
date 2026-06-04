---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Menghasilkan versi tertutup dari jenis catatan yang diberikan (atau jenis yang sama, jika sudah ditutup).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Menghasilkan versi tertutup `record` `type` yang diberikan (atau jenis yang sama, jika sudah ditutup).


## Examples

### Example #1
Buat versi tertutup dari `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
