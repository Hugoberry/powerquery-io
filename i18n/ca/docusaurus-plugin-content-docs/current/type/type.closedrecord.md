---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Retorna una versió tancada del tipus de registre proporcionat (o el mateix tipus, si ja està tancat).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Retorna una versió tancada de `record` `type` proporcionat (o el mateix tipus, si ja està tancat).


## Examples

### Example #1
Crea una versió tancada de `type [ A = number,…]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
