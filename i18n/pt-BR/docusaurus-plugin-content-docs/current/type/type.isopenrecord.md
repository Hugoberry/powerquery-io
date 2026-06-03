---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Retorna se um tipo de registro for aberto.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Retorna uma `lógico` indicando se um registro `type` é aberto.


## Examples

### Example #1
Determine se o registro `tipo [ A = número, ...]` é aberto.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
