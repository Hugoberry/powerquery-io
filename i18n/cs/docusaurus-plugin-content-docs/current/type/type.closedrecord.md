---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Vrátí uzavřenou verzi daného typu záznamu (nebo stejného typu, pokud už je uzavřený).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Vrátí uzavřenou verzi daného záznamu (`record`) `type` (nebo stejného typu, pokud už je uzavřený).


## Examples

### Example #1
Vytvoří uzavřenou verzi pro `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
