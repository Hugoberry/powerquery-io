---
title: Type.IsNullable
---

# Type.IsNullable


Gibt 'true' zurück, wenn ein Typ NULL-Werte zulässt; andernfalls 'false'.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Gibt `true` zurück, wenn ein Typ ein `Nullable`\-Typ ist, der NULL-Werte zulässt; andernfalls `false`.


## Examples

### Example #1
Bestimmen Sie, ob `number` NULL-Werte zulässt.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Bestimmen Sie, ob `type nullable number` NULL-Werte zulässt.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
