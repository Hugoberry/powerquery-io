---
title: Type.NonNullable
---

# Type.NonNullable


Түрден нөлдік емес түрді береді.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

`type` түрінен `нөлдік емес` түрді береді


## Examples

### Example #1
`Түрдің нөлдік санының` нөлдік емес түрін береді.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
