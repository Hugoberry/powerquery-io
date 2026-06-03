---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Returnerar om en posttyp är öppen.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Returnerar en `logical` som indikerar om posten `type` är öppen.


## Examples

### Example #1
Fastställ om posten `type [ A = number, ... ]` är öppen.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
