---
title: Type.OpenRecord
---

# Type.OpenRecord


Kembalikan versi terbuka jenis rekod yang diberi (atau jenis yang sama, jika ia telah terbuka).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Kembalikan versi terbuka `record` `type` yang diberi (atau jenis yang sama, jika ia telah dibuka).


## Examples

### Example #1
Wujudkan versi terbuka `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
