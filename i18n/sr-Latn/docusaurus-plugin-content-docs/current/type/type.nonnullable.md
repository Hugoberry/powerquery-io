---
title: Type.NonNullable
---

# Type.NonNullable


Vraća tip koji ne može biti bez vrednosti iz tipa.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Vraća tip koji nije `nullable` iz `type`.


## Examples

### Example #1
Vratite tip koji ne može biti bez vrednosti za `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
