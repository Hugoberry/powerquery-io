---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Kembalikan versi tertutup bagi jenis rekod yang diberi (atau jenis yang sama, jika ia telah ditutup).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Kembalikan versi tertutup bagi <code>record</code> <code>type</code> yang diberi (atau jenis yang sama, jika ia telah ditutup).


## Examples

### Example #1 
Wujudkan versi tertutup &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
