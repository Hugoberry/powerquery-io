---
title: Type.NonNullable
---

# Type.NonNullable


Retorna o tipo não anulável de um tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Retorna o tipo não `nulo` de `type`.


## Examples

### Example #1
Retorne o tipo não anulável de `número nulo de tipo`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
