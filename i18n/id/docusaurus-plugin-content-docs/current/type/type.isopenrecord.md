---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Menghasilkan apakah jenis rekaman terbuka atau tidak.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Menghasilkan `logical` yang mengindikasikan apakah rekaman `type` terbuka atau tidak.


## Examples

### Example #1
Tentukan apakah rekaman `type [ A = number, ...]` terbuka.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
