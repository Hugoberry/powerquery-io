---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Kembalikan versi tertutup bagi jenis rekod yang diberi (atau jenis yang sama, jika ia telah ditutup).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Kembalikan versi tertutup bagi `record` `type` yang diberi (atau jenis yang sama, jika ia telah ditutup).


## Examples

### Example #1
Cipta versi tertutup `taip [ A = nombor,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
