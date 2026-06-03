---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Gibt zurück, ob ein Datensatztyp geöffnet ist.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Gibt einen `logischen` Wert zurück, der angibt, ob ein Datensatz `type` geöffnet ist.


## Examples

### Example #1
Bestimmen Sie, ob der Datensatz `type [ A = number, ...]` geöffnet ist.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
