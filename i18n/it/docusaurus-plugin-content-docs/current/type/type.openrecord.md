---
title: Type.OpenRecord
---

# Type.OpenRecord


Restituisce una versione aperta del tipo di record specificato (o dello stesso tipo, se è già aperto).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Restituisce una versione aperta del tipo di `record` `type` specificato (o dello stesso tipo, se è già aperto).


## Examples

### Example #1
Creare una versione aperta di `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
