---
title: Type.OpenRecord
---

# Type.OpenRecord


Берілген жазба түрінің ашық нұсқасын (бұрын ашылған болса, сол түрін) береді.


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Берілген `type` `жазбаының` ашық нұсқасын(бұрын ашылған болса, сол түрін) береді.


## Examples

### Example #1
`type [ A = number]` түрінің ашық нұсқасын жасаңыз.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
