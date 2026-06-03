---
title: Type.IsNullable
---

# Type.IsNullable


Retourne true si un type est de type nullable ; dans le cas contraire, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Retourne `true` si un type est un type `nullable` ; dans le cas contraire, `false`.


## Examples

### Example #1
Déterminez si `number` est nullable.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Déterminez si `type nullable number` est nullable.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
