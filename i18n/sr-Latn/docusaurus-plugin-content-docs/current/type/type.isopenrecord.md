---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Daje odgovor da li je tip zapisa otvoren.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Vraća `logical`, ukazujući na to da li je zapis `type` otvoren.


## Examples

### Example #1
Odredite da li je zapis `type [ A = number, ...]` otvoren.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
