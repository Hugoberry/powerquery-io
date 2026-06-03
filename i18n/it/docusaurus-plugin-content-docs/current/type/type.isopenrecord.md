---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Restituisce se un tipo di record è aperto.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Restituisce un valore `logical` che indica se un record `type` è aperto.


## Examples

### Example #1
Determinare se il record `type [ A = number, ...]` è aperto.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
