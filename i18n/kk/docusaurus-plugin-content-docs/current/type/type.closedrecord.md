---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Берілген жазба түрінің жабық нұсқасын (бұрын жабылған болса, сол түрін) береді.


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Берілген `type` `жазбасының` жабық нұсқасын (бұрын жабылған болса, сол түрін) береді.


## Examples

### Example #1
`type [ A = number,…]` жабық нұсқасын жасаңыз.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
