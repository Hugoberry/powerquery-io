---
title: Type.IsNullable
---

# Type.IsNullable


Restituisce true se il tipo è un tipo nullable; in caso contrario, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Restituisce `true` se un tipo è `nullable`; in caso contrario, `false`.


## Examples

### Example #1
Determinare se `number` è nullable.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Determinare se `number` è nullable.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
