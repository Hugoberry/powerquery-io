---
title: Type.IsNullable
---

# Type.IsNullable


Returns true if a type is a nullable type; otherwise, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Returns `true` if a type is a `nullable` type; otherwise, `false`.


## Examples

### Example #1
Determine if `number` is nullable.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Determine if `type nullable number` is nullable.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
