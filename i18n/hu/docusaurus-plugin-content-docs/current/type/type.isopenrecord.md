---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Rekordtípus nyitottságának meghatározása.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

A(z) `type` paraméterben megadott rekord nyitottságát jelző `logical` típusú érték visszaadása.


## Examples

### Example #1
A `type [ A = number, ...]` rekord nyitottságának meghatározása.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
