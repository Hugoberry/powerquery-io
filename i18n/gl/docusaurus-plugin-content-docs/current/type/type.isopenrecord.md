---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Devolve se un tipo de rexistro é aberto.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Devolve unha `lóxica` que indica se un rexistro `type` é aberto.


## Examples

### Example #1
Determine se o rexistro `tipo [ A = number, ...]` está aberto.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
