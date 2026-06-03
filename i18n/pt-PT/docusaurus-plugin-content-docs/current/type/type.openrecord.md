---
title: Type.OpenRecord
---

# Type.OpenRecord


Devolve uma versão aberta do tipo de registo fornecido (ou do mesmo tipo, se já estiver aberto).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Devolve uma versão aberta do `record` `type` fornecido (ou do mesmo tipo, se já estiver aberto).


## Examples

### Example #1
Criar uma versão aberta de `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
