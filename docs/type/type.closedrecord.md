---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Returns a closed version of the given record type (or the same type, if it is already closed).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Returns a closed version of the given `record` `type` (or the same type, if it is already closed).


## Examples

### Example #1
Create a closed version of `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
