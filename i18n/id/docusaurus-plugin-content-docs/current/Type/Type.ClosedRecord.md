---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Menghasilkan versi tertutup dari jenis catatan yang diberikan (atau jenis yang sama, jika sudah ditutup).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Menghasilkan versi tertutup <code>record</code> <code>type</code> yang diberikan (atau jenis yang sama, jika sudah ditutup).


## Examples

### Example #1 
Buat versi tertutup &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
