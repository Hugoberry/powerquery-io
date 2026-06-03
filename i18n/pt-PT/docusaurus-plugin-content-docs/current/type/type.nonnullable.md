---
title: Type.NonNullable
---

# Type.NonNullable


Devolve o tipo não nulo de um tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Devolve o tipo não `nullable` de `type`.


## Examples

### Example #1
Devolve o tipo não nulo de `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
