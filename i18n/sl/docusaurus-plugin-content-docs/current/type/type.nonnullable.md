---
title: Type.NonNullable
---

# Type.NonNullable


Vrne vrsto, ki ni ničelna.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Vrne vrsto, ki ni `ničelna` iz `type`.


## Examples

### Example #1
Vrne vrsto, ki ni ničelna, od `števila z ničelno vrsto`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
