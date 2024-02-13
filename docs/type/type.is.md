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

Determines if a value of <code>type1</code> is always compatible with <code>type2</code>.


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
