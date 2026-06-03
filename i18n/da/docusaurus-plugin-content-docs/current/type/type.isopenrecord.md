---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Returnerer, om en posttype er åben.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Returnerer `logical`, der angiver, om en post `type` er åben.


## Examples

### Example #1
Find ud af, om posten `type [ A = number, ...]` er åben.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
