---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Devuelve si un tipo de registro está abierto.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Devuelve un `logical` que indica si un registro `type` está abierto.


## Examples

### Example #1
Determinar si el registro `type [ A = number, ...]` está abierto.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
