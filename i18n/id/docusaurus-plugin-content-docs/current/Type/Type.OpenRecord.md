---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Menghasilkan versi terbuka jenis rekaman yang diberikan (atau jenis yang sama, jika sudah terbuka).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Menghasilkan versi terbuka <code>record</code> <code>type</code> yang diberikan (atau jenis yang sama, jika sudah terbuka).


## Examples

### Example #1 
Buat versi terbuka dari &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
