---
title: Type.IsNullable
---

# Type.IsNullable


Retorna true se um tipo for um tipo anulável; caso contrário, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Retorna `true` se um tipo for um tipo `nulo`; caso contrário, `false`.


## Examples

### Example #1
Determine se `número` é anulável.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Determine se `número nulo de tipo` é anulável.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
