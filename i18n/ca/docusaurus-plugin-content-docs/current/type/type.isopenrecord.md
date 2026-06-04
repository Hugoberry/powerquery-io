---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Retorna si un tipus de registre està obert.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Retorna un valor `logical` que indica si un registre `type` està obert.


## Examples

### Example #1
Determina si el registre `type [ A = number, ...]` està obert.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
