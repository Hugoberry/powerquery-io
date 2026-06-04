---
title: Type.ListItem
---

# Type.ListItem


Menghasilkan jenis item dari jenis daftar.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Menghasilkan jenis item dari `type` daftar.


## Examples

### Example #1
Cari jenis item dari `{number}` daftar.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
