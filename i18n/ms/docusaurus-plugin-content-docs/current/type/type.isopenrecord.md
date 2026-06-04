---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Kembalikan sama ada jenis rekod adalah terbuka.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Kembalikan `logical` menentukan sama ada rekod `type` adalah terbuka.


## Examples

### Example #1
Tentukan jika rekod `type [ A = number, ...]` adalah terbuka.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
