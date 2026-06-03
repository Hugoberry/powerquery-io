---
title: Type.NonNullable
---

# Type.NonNullable


किसी प्रकार से गैर निरर्थक प्रकार लौटाता है.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

`type` से गैर `निरर्थक` प्रकार लौटाता है.


## Examples

### Example #1
`type nullable number` का गैर निरर्थक प्रकार लौटाएँ.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
