---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Retorna uma versão fechada do tipo de registro determinado (ou do mesmo tipo, se já está fechado).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Retorna uma versão fechada do `registro` determinado `type` (ou do mesmo tipo, se já está fechado).


## Examples

### Example #1
Criar uma versão fechada de `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
