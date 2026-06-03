---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Returnerer en lukket version af den angivne posttype (eller samme type, hvis den allerede er lukket).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Returnerer en lukket version af den angivne `record` `type` (eller den samme type, hvis den allerede er lukket).


## Examples

### Example #1
Opret en lukket version af `type [ A = number,…]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
