---
title: Type.IsNullable
---

# Type.IsNullable


Vrne vrednost"true", če gre za ničelno vrsto, v nasprotnem primeru pa"false".


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Vrne `true`, če gre za `ničelno` vrsto; v nasprotnem primeru pa `false`.


## Examples

### Example #1
Določite, ali ima `število` ničelno vrednost.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Določite, ali ima `število z ničelno vrednostjo` lahko vrednost nič.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
