---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Restituisce una versione chiusa del tipo di record specificato (o dello stesso tipo, se è già chiuso).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Restituisce una versione chiusa del tipo di `record` `type` specificato (o dello stesso tipo, se è già chiuso).


## Examples

### Example #1
Crea una versione chiusa di `type [ A = number,…]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
