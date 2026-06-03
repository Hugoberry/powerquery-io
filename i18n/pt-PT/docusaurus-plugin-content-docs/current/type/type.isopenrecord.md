---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Devolve se um tipo de registo estiver aberto.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Devolve um valor `logical` a indicar se um registo `type` está aberto.


## Examples

### Example #1
Determinar se o registo `type [ A = number, ...]` está aberto.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
