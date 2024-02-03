---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Kembalikan versi terbuka jenis rekod yang diberi (atau jenis yang sama, jika ia telah terbuka).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Kembalikan versi terbuka <code>record</code> <code>type</code> yang diberi (atau jenis yang sama, jika ia telah dibuka).


## Examples

### Example #1 
Wujudkan versi terbuka &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
