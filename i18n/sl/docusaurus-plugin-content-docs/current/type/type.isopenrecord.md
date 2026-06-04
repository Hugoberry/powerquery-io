---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Vrne rezultat, ali je vrsta zapisa odprta.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Vrne `logično vrednost`, ki ponazarja, ali je zapis `type` odprt.


## Examples

### Example #1
Določite, ali je zapis `type [ A = number, ...]` odprt.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
