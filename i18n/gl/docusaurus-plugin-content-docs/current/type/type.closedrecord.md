---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Devolve unha versión pechada do tipo de rexistro fornecido (ou o mesmo tipo se xa está pechado).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Devolve unha versión pechada do `rexistro` `type` facilitado (ou o mesmo tipo se xa está pechado).


## Examples

### Example #1
Crea unha versión pechada de `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
