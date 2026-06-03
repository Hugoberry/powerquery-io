---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Devolve uma versão fechada do tipo de registo fornecido (ou o mesmo tipo, se já estiver fechado).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Devolve uma versão fechada do `record` fornecido `type` (ou o mesmo tipo, se já estiver fechado).


## Examples

### Example #1
Crie uma versão fechada de `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
