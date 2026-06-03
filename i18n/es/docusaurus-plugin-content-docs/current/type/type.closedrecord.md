---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Devuelve una versión cerrada del tipo de registro proporcionado (o el mismo tipo, si ya está cerrado).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Devuelve una versión cerrada del `record` `type` proporcionado (o el mismo tipo, si ya está cerrado).


## Examples

### Example #1
Crear una versión cerrada de `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
