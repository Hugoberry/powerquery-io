---
title: Type.IsNullable
---

# Type.IsNullable


Nullértéket támogató típus esetén true, nullmentes típus esetén pedig false érték visszaadása.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

A `nullable` jellegű típusok esetén `true`, nullmentes típusok esetén pedig `false` érték visszaadása.


## Examples

### Example #1
A `number` típus nullérték-támogatottságának meghatározása.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
A `type nullable number` típus nullérték-támogatottságának meghatározása.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
