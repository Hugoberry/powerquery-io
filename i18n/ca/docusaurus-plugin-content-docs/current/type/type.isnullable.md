---
title: Type.IsNullable
---

# Type.IsNullable


Retorna el valor true si un tipus és nullable (es pot anul·lar); en cas contrari, el valor false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Retorna el valor `true` si un tipus és `nullable`; en cas contrari, el valor `false`.


## Examples

### Example #1
Determineu si `number` és nullable.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Determineu si `type nullable number` és nullable.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
