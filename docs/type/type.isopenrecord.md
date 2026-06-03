---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Returns whether a record type is open.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Returns a `logical` indicating whether a record `type` is open.


## Examples

### Example #1
Determine if the record `type [ A = number, ...]` is open.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
