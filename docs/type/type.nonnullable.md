---
title: Type.NonNullable
---

# Type.NonNullable


Returns the non nullable type from a type.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Returns the non `nullable` type from the `type`.


## Examples

### Example #1
Return the non nullable type of `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
