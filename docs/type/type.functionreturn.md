---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Returns a type returned by a function type.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Returns a type returned by a function `type`.


## Examples

### Example #1
Find the return type of `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
