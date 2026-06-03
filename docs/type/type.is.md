---
title: Type.Is
---

# Type.Is


Determines if a value of the first type is always compatible with the second type.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Determines if a value of `type1` is always compatible with `type2`. Parameter `type2` should be a primitive (or nullable primitive) type value. Otherwise, this function's behavior is undefined and shouldn't be relied on.


## Examples

### Example #1
Determine if a value of type number can always also be treated as type any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Determine if a value of type any can always also be treated as type number.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
