---
title: Type.OpenRecord
---

# Type.OpenRecord


Devuelve una versión abierta del tipo de registro proporcionado (o el mismo tipo, si ya está abierto).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Devuelve una versión abierta del `record` `type` proporcionado (o el mismo tipo, si ya está abierto).


## Examples

### Example #1
Crear una versión abierta de `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
