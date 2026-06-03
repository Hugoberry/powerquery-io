---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Retourneert of een recordtype open is.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Retourneert een `logische waarde` waarmee wordt aangegeven of een record `type` open is.


## Examples

### Example #1
Bepaal of de record `type [ A = getal, ...]` open is.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
