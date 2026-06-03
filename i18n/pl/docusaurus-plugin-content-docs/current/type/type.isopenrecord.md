---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Określa, czy typ rekordu jest otwarty.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Zwraca wartość `logical` określającą, czy rekord `type` jest otwarty.


## Examples

### Example #1
Określ, czy rekord `type [ A = number, ...]` jest otwarty.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
